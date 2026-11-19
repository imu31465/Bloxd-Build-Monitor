export const id = 60;
export const ids = [60];
export const modules = {
  38974: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Ez,
      h: () => nz
    });
    const Ez = "The world isn't loaded, so no blocks can be seen.",
      nz = "The world isn't loaded, so nothing in it can be seen."
  },
  38461: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Rz,
      g: () => Kz,
      j: () => Zz
    });
    var Ez = bz(2689);
    const nz = 0,
      iz = 2,
      lz = 3,
      Mz = 4;
    class tz {
      constructor(zz, uz) {
        this.width = zz, this.Bp = uz, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(zz * uz)
      }
      push(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const bz = this.data.subarray(this.next * this.width, (this.next + 1) * this.width);
        for (let Ez = 0; Ez < this.width; Ez++) bz[Ez] = zz[uz + Ez];
        return this.next = (this.next + 1) % this.Bp, this.size = Math.min(this.size + 1, this.Bp), bz
      }
      lines() {
        const zz = [],
          uz = (this.next - this.size + this.Bp) % this.Bp;
        for (let bz = 0; bz < this.size; bz++) {
          const Ez = (uz + bz) % this.Bp * this.width;
          zz.push(Array.from(this.data.subarray(Ez, Ez + this.width)).join(","))
        }
        return zz
      }
    }

    function Hz(zz) {
      return Number.isFinite(zz) ? String(Math.round(10 * zz) / 10) : String(zz)
    }

    function Oz(zz) {
      return Number.isFinite(zz) ? zz.toFixed(1) : String(zz)
    }
    class pz {
      constructor() {
        this.frames = 0, this.looked = 0, this.idle = 0, this.Aq = 0, this.pastLimit = 0, this.lockSkips = 0, this.AO = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakRate = 0, this.events = 0, this.eventMax = 0, this.bigEvents = 0, this.outliers = 0, this.eventLines = 0, this.suppressed = 0
      }
    }
    class dz {
      constructor() {
        var zz = this;
        this.tally = new pz, this.records = new tz(10, 3600), this.events = new tz(4, 12e3), this.event = new Float64Array(4), this.take = null, this.client = "js", this.started = !1, this.record = function(uz) {
          let bz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          const [Ez, tz, pz, dz, Fz, Zz, Rz, Kz, wz, Xz] = zz.records.push(uz, bz), fz = zz.tally;
          switch (fz.frames++, Rz) {
            case nz:
              return void fz.idle++;
            case Mz:
              return void fz.AO++;
            case lz:
              return fz.lockSkips++, void(0 === pz && 0 === dz || zz.outlier(`lock skip dropped raw (${Hz(pz)}, ${Hz(dz)}) at ${Oz(Ez)} ms`))
          }
          fz.looked++, Number.isFinite(tz) && (fz.dtMin = Math.min(fz.dtMin, tz), fz.dtMax = Math.max(fz.dtMax, tz), fz.dtSum += tz, tz > 0 && (fz.peakRate = Math.max(fz.peakRate, Math.hypot(Fz, Zz) / tz))), fz.raw[0] += pz, fz.raw[1] += dz, fz.turned[0] += Fz, fz.turned[1] += Zz;
          const sz = Math.abs(pz) > Xz || Math.abs(dz) > Xz,
            rz = `raw (${Hz(pz)}, ${Hz(dz)}) over ${Oz(tz)} ms, limit ${Hz(Xz)}, filter v (${Kz.toFixed(3)}, ${wz.toFixed(3)}) px/ms, at ${Oz(Ez)} ms`;
          Rz === iz ? (fz.Aq++, zz.outlier(`spike put right: ${rz} -> turned (${Hz(Fz)}, ${Hz(Zz)})`)) : sz ? (fz.pastLimit++, zz.outlier(`kept past limit: ${rz}`)) : tz > 50 && (fz.longFrames++, zz.outlier(`long frame: ${rz}, turned in full`))
        }, this.onMouseMove = zz => {
          const uz = this.tally,
            {
              movementX: bz,
              movementY: Ez
            } = zz;
          uz.events++;
          const nz = Math.max(Math.abs(bz), Math.abs(Ez));
          uz.eventMax = Math.max(uz.eventMax, nz);
          const iz = null !== document.pointerLockElement,
            lz = this.event;
          lz[0] = zz.timeStamp, lz[1] = bz, lz[2] = Ez, lz[3] = iz ? 1 : 0, this.events.push(lz), nz >= 200 && (uz.bigEvents++, this.eventOutlier(`big mousemove (${bz}, ${Ez}) at ${Oz(zz.timeStamp)} ms, lock ${iz?"yM":"free"}`))
        }, this.onLockChange = () => {
          const zz = document.pointerLockElement;
          (0, Ez.i)("look", `pointer lock ${zz?`gained (${zz.tagName.toLowerCase()})`:"lost"} at ${Oz(performance.now())} ms`)
        }, this.onLockError = () => {
          (0, Ez.i)("look", `pointer lock request failed at ${Oz(performance.now())} ms`)
        }, this.onVisibility = () => {
          (0, Ez.i)("look", `page ${document.visibilityState} at ${Oz(performance.now())} ms`)
        }, this.flush = () => {
          this.takeRecords();
          const zz = this.tally;
          if (this.tally = new pz, 0 === zz.events && 0 === zz.raw[0] && 0 === zz.raw[1] && 0 === zz.lockSkips && 0 === zz.Aq && 0 === zz.dropped) return;
          const uz = zz.looked > 0 ? zz.dtSum / zz.looked : NaN,
            bz = [`${zz.frames} frames (${zz.looked} looked, ${zz.idle} idle${"wasm"===this.client?`, ${zz.AO} carried`:""})`, `dt avg ${Oz(uz)} min ${Oz(zz.dtMin)} max ${Oz(zz.dtMax)}, ${zz.longFrames} long`, `${zz.events} mousemoves (max ${Hz(zz.eventMax)} px, ${zz.bigEvents} big)`, `raw (${Hz(zz.raw[0])}, ${Hz(zz.raw[1])}) turned (${Hz(zz.turned[0])}, ${Hz(zz.turned[1])})`, `peak ${zz.peakRate.toFixed(2)} px/ms`, `put right ${zz.Aq}, past limit ${zz.pastLimit}, lock skips ${zz.lockSkips}`, "lock " + (document.pointerLockElement ? "yM" : "free")];
          zz.dropped > 0 && bz.push(`${zz.dropped} doubled spike copies dropped`), zz.lost > 0 && bz.push(`${zz.lost} records lost`), zz.suppressed > 0 && bz.push(`${zz.suppressed} outlier lines not shown`), (0, Ez.i)("look", `1s: ${bz.join("; ")}`)
        }, this.dump = () => [`look records (${this.client}): nowMs,dtMs,rawX,rawY,turnedX,turnedY,outcome,vX,vY,limit`, ...this.records.lines(), "mousemove events: timeStamp,movementX,movementY,locked", ...this.events.lines()].join("\n")
      }
      start(zz, uz) {
        this.client = zz, this.take = uz;
        const {
          screen: bz
        } = window;
        (0, Ez.i)("look", `start: ${zz} client, dpr ${window.devicePixelRatio}, screen ${bz.width}x${bz.height}, pointer lock ${document.pointerLockElement?"yM":"free"}`), this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
          capture: !0,
          passive: !0
        }), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), (0, Ez.f)("look", this.dump))
      }
      outlier(zz) {
        const uz = this.tally;
        uz.outliers >= 20 ? uz.suppressed++ : (uz.outliers++, (0, Ez.i)("look", zz))
      }
      eventOutlier(zz) {
        const uz = this.tally;
        uz.eventLines >= 10 ? uz.suppressed++ : (uz.eventLines++, (0, Ez.i)("look", zz))
      }
      takeRecords() {
        var zz;
        const uz = null === (zz = this.take) || void 0 === zz ? void 0 : zz.call(this);
        if (uz && uz.length >= 2) {
          this.tally.lost += uz[0], this.tally.dropped += uz[1];
          for (let zz = 2; zz + 10 <= uz.length; zz += 10) this.record(uz, zz)
        }
      }
      droppedCopy() {
        this.tally.dropped++
      }
      endTake() {
        this.takeRecords(), this.take = null
      }
    }
    let Fz = null;

    function Zz(zz) {
      let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return Fz ??= new dz, Fz.start(zz, uz), Fz.record
    }

    function Rz() {
      var zz;
      null === (zz = Fz) || void 0 === zz || zz.endTake()
    }

    function Kz() {
      var zz;
      null === (zz = Fz) || void 0 === zz || zz.droppedCopy()
    }
  },
  8889: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => Ez
    });
    const Ez = new Set(["chunkBorders"])
  },
  9028: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => lz,
      e: () => nz,
      g: () => Oz
    });
    var Ez = bz(1531);

    function nz(zz) {
      var uz;
      return {
        ...lz.store,
        yaw: lz.store.yaw + (null !== (uz = Ez.c[zz].previewYaw) && void 0 !== uz ? uz : 0)
      }
    }
    const iz = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      lz = {
        player: iz,
        store: {
          ...iz,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function Mz(zz, uz) {
      zz instanceof Promise ? zz.then(uz).catch((zz => {
        console.error("Couldn't open the preview", zz)
      })) : uz(zz)
    }
    class tz {
      constructor(zz) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, Mz(zz, (zz => {
          this.closed ? zz.close() : (this.opened = zz, null !== this.size && zz.resize(this.size.width, this.size.height), null !== this.view && zz.show(this.view))
        }))
      }
      show(zz) {
        var uz;
        this.view = zz, null === (uz = this.opened) || void 0 === uz || uz.show(zz)
      }
      resize(zz, uz) {
        var bz;
        this.size = {
          width: zz,
          height: uz
        }, null === (bz = this.opened) || void 0 === bz || bz.resize(zz, uz)
      }
      close() {
        var zz;
        this.closed = !0, null === (zz = this.opened) || void 0 === zz || zz.close(), this.opened = null
      }
    }
    class Hz {
      constructor(zz) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(zz).then((zz => zz.ready)), Mz(zz, (zz => {
          this.closed ? zz.close() : (this.opened = zz, null !== this.size && zz.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var zz, uz;
        return null !== (zz = null === (uz = this.opened) || void 0 === uz ? void 0 : uz.isReady()) && void 0 !== zz && zz
      }
      setCosmetic(zz, uz) {
        var bz;
        null === (bz = this.opened) || void 0 === bz || bz.setCosmetic(zz, uz)
      }
      playEmote(zz) {
        var uz;
        null === (uz = this.opened) || void 0 === uz || uz.playEmote(zz)
      }
      setOrbit(zz) {
        var uz;
        null === (uz = this.opened) || void 0 === uz || uz.setOrbit(zz)
      }
      resetCamera() {
        var zz;
        null === (zz = this.opened) || void 0 === zz || zz.resetCamera()
      }
      async untilDrawn(zz) {
        var uz;
        await this.ready, await (null === (uz = this.opened) || void 0 === uz ? void 0 : uz.untilDrawn(zz))
      }
      resize(zz, uz) {
        var bz;
        this.size = {
          width: zz,
          height: uz
        }, null === (bz = this.opened) || void 0 === bz || bz.resize(zz, uz)
      }
      close() {
        var zz;
        this.closed = !0, null === (zz = this.opened) || void 0 === zz || zz.close(), this.opened = null
      }
    }
    const Oz = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(zz) {
        this.host = zz
      }
      setDefaultHost(zz) {
        this.makeDefault = zz
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(zz) {
        return new tz(this.current().openMob(zz))
      }
      openPet(zz) {
        return new tz(this.current().openPet(zz))
      }
      openMobLineup(zz) {
        return new tz(this.current().openMobLineup(zz))
      }
      openCharacter(zz, uz) {
        return new Hz(this.current().openCharacter(zz, uz))
      }
    }
  },
  38599: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => pz,
      g: () => dz
    });
    var Ez = bz(158),
      nz = bz(184),
      iz = bz(1461),
      lz = bz(2982),
      Mz = bz(1473),
      tz = bz(35952),
      Hz = bz(627),
      Oz = bz(38566);

    function pz(zz) {
      (0, lz.f)("matchmake_failed", zz, Ez.k[Ez.k.SHADER_PACK])
    }
    async function dz(zz, uz) {
      var bz;
      const Ez = null === (bz = await Oz.shaderPackPage.preload()) || void 0 === bz ? void 0 : bz.listing,
        lz = (0, tz.b)();
      Ez && null !== lz && await Mz.c.reportShaderPackSession(zz, {
        packId: Ez.packId,
        sourceHash: Ez.sourceHash,
        game: (0, iz.h)(uz, nz.t, "other"),
        playSessionId: lz,
        visitSessionId: (0, Hz.d)()
      })
    }
  },
  38411: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => Mz
    });
    var Ez = bz(22),
      nz = bz(1269),
      iz = bz(3216);
    const lz = "Reconnecting";
    class Mz {
      constructor(zz) {
        this.hooks = zz, this.graceMs = 0, this.sessionBased = !1, this.controller = void 0, this.frozen = !1, this.stopped = !1, this.listening = !1, this.ended = !1, this.retryNow = () => {
          "visible" === document.visibilityState && this.controller.retryNow()
        }, this.onPageHide = zz => {
          zz.persisted || this.leave()
        }, this.controller = new iz.e((uz => zz.reconnect(uz)), {
          isSessionLive: () => !this.ended && zz.isLive(),
          onPhaseChanged: zz => {
            this.onPhaseChanged(zz)
          },
          onReconnected: uz => {
            zz.onReconnected(uz)
          },
          onGaveUp: uz => {
            !this.ended && zz.isLive() && zz.onGaveUp(this.sessionBased, uz)
          }
        })
      }
      onInitialInfo(zz, uz) {
        this.graceMs = zz, this.sessionBased = uz
      }
      canHoldSeat() {
        return this.graceMs > 0 && !this.ended
      }
      isResuming() {
        return "connected" !== this.controller.phase
      }
      onConnectionLost(zz) {
        this.ended || this.controller.onConnectionLost(zz, this.graceMs)
      }
      onResuming() {
        this.ended || this.controller.onResuming()
      }
      onResumed() {
        this.controller.stop()
      }
      leave() {
        const zz = this.isResuming() && !this.controller.awaitingResumeOnRoom,
          uz = this.controller.heldToken;
        this.end(), zz && "" !== uz && this.hooks.releaseSeat(uz)
      }
      end() {
        this.ended = !0, this.controller.stop()
      }
      onPhaseChanged(zz) {
        const uz = "frozen" === zz || "resuming" === zz;
        uz !== this.stopped && (this.stopped = uz, this.hooks.freeze(uz));
        const bz = "frozen" === zz || "resuming" === zz && this.frozen;
        bz && !this.frozen ? (0, nz.m)(lz) : !bz && this.frozen && (0, nz.k)(lz), this.frozen = bz, this.setListening("connected" !== zz), Ez.k.sK(iz.o, bz ? "frozen" : zz)
      }
      setListening(zz) {
        zz !== this.listening && (this.listening = zz, zz ? (window.addEventListener("online", this.retryNow), document.addEventListener("visibilitychange", this.retryNow), window.addEventListener("pagehide", this.onPageHide)) : (window.removeEventListener("online", this.retryNow), document.removeEventListener("visibilitychange", this.retryNow), window.removeEventListener("pagehide", this.onPageHide)))
      }
    }
  },
  38414: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Ez
    });
    class Ez {
      constructor(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.onSilent = zz, this.now = uz, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
          const zz = this.now(),
            uz = zz - this.lastCheckAt <= 2e3;
          this.lastCheckAt = zz;
          const bz = "visible" === document.visibilityState;
          !bz || uz && this.wasVisible || (this.resumedAt = zz), this.wasVisible = bz, bz && zz - this.lastHeardAt > 12e3 && zz - this.resumedAt > 2e3 && this.onSilent()
        }, this.lastHeardAt = uz(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
      }
      heard() {
        this.lastHeardAt = this.now()
      }
      dispose() {
        clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
      }
    }
  },
  8915: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => iz
    });
    var Ez = bz(1068);

    function nz() {
      var zz, uz;
      return null !== (zz = null === (uz = screen.orientation) || void 0 === uz ? void 0 : uz.type) && void 0 !== zz ? zz : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const iz = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && nz() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = nz(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, Ez.WR)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const zz of this.resizers) zz()
          }
        }), 1e3)
      }
      heldSizer(zz) {
        let uz = !1;
        return () => {
          if (uz && this.isHeld()) return null;
          const bz = zz();
          return uz ||= null !== bz, bz
        }
      }
      onRelease(zz) {
        return this.resizers.add(zz), () => {
          this.resizers.delete(zz)
        }
      }
    }
  },
  38586: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => nz
    });
    let Ez = !1;
    async function nz(zz, uz) {
      if (!Ez) {
        Ez = !0;
        try {
          const [{
            reloadBloxd: Ez
          }, {
            NotificationProvider: nz
          }] = await Promise.all([Promise.resolve().then((() => bz(1673))), Promise.resolve().then((() => bz(1322)))]);
          if (!zz || !0 === await nz.showPromptPopup({
              title: "Unsaved changes",
              subtitle: "Exit and lose your unsaved changes?",
              confirmText: "Exit",
              destructive: !0,
              cancelText: "Cancel",
              unlockPointerKey: "replayExitUnsavedChanges"
            }).getResult()) return void Ez(uz)
        } catch (nz) {
          console.error("Leaving the replay failed", nz)
        }
        Ez = !1
      }
    }
  },
  38420: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Hz,
      c: () => Oz
    });
    var Ez = bz(1662),
      nz = bz(195),
      iz = bz(1638),
      lz = bz(1728),
      Mz = bz(1195),
      tz = bz(1118);
    async function Hz(zz, uz) {
      return function(zz) {
        return "object" === typeof zz && null !== zz && zz.code === nz.b.VpnIp.code
      }(uz) && function(zz) {
        return iz.d.supports("appCheck") && zz.isLoggedIn() && !zz.hasTriedAppAttestation()
      }(zz) && await async function(zz) {
        try {
          const {
            token: uz
          } = await (0, lz.e)(), {
            "3PSIDMCPP": bz
          } = await (0, tz.postJsonWithMetricsCookiesAndJsonResponse)(`${Mz.clientSideServerUrls.indexUrl}/index/app-attestation`, {
            appCheckToken: uz
          }, {
            retries: 0
          }, zz.getMetricsCookies());
          return zz.setAppAttestedAuthJwt(bz), !0
        } catch (uz) {
          return uz instanceof Ez.d && "failed" === uz.code ? (console.warn("The app couldn't get an App Check token:", uz), zz.markAppAttestationTried()) : console.error("Failed to attest the app:", uz), !1
        }
      }(zz)
    }
    async function Oz(zz, uz) {
      try {
        return await uz()
      } catch (bz) {
        if (!await Hz(zz, bz)) throw bz
      }
      return uz()
    }
  },
  40238: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => tz
    });
    var Ez = bz(1696);
    const nz = 33177600,
      iz = 3e4;
    let lz = !1;

    function Mz(zz, uz, bz) {
      if (!zz.drawing()) return Promise.reject(new Error("Screenshots need a game to be running"));
      if (lz) return Promise.reject(new Error("A screenshot is already being taken"));
      lz = !0;
      const Ez = function(zz, uz, bz) {
        const Ez = Math.max(1, zz),
          iz = Math.max(1, uz),
          lz = Math.min(1, bz / Math.max(Ez, iz), Math.sqrt(nz / (Ez * iz)));
        return {
          width: Math.max(1, Math.floor(Ez * lz)),
          height: Math.max(1, Math.floor(iz * lz))
        }
      }(uz, bz, zz.maxTextureSize);
      return zz.resize(Ez.width, Ez.height), new Promise(((uz, bz) => {
        let Ez, nz = 2,
          Mz = null;
        const tz = () => {
          var uz;
          lz = !1, null === (uz = Mz) || void 0 === uz || uz(), clearTimeout(Ez), zz.restoreSize()
        };
        Ez = setTimeout((() => {
          tz(), bz(new Error("No frame was drawn to capture"))
        }), iz), Mz = zz.onFrameDrawn((() => {
          if (nz--, nz > 0) return;
          const {
            canvas: Ez
          } = zz, iz = {
            width: Ez.width,
            height: Ez.height
          };
          try {
            Ez.toBlob((zz => {
              zz ? uz({
                blob: zz,
                ...iz
              }) : bz(new Error("The canvas gave no image"))
            }), "image/png")
          } catch (lz) {
            bz(lz)
          } finally {
            tz()
          }
        }))
      }))
    }
    async function tz(zz, uz, bz) {
      try {
        const nz = await Mz(zz, uz, bz);
        (0, Ez.c)(nz.blob, `bloxd-screenshot-${nz.width}x${nz.height}-${Date.now()}.png`)
      } catch (nz) {
        console.error("Error taking screenshot:", nz)
      }
    }
  },
  38418: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => dz,
      d: () => Oz
    });
    var Ez = bz(195),
      nz = bz(1761),
      iz = bz(1768),
      lz = bz(8569);
    const Mz = [250, 500, 1e3, 2e3, 1250],
      tz = 406;

    function Hz(zz) {
      if ("object" !== typeof zz || null === zz) return !1;
      const {
        code: uz,
        message: bz
      } = zz, nz = Ez.b.duplicateLobbyNameError;
      return (uz === nz.code || uz === tz) && (bz === nz.text || bz === nz.text + Ez.k)
    }
    async function Oz(zz, uz) {
      let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : nz.d;
      for (let nz = 0;; nz++) {
        let lz;
        (0, iz.l)(uz);
        try {
          return await zz()
        } catch (Ez) {
          if (lz = Mz[nz], void 0 === lz || !Hz(Ez)) throw Ez
        }
        await bz(lz, uz)
      }
    }
    const pz = new Set([Ez.b.duplicateLobbyNameError.code, Ez.b.lobbyCantBeCreated.code, Ez.b.roomDisposedEarlyError.code, Ez.b.roomDisposedLateError.code, Ez.b.serverRoomLimitReached.code]);

    function dz(zz) {
      if (Hz(zz)) return !0;
      const uz = (0, lz.e)(zz);
      return "number" === typeof uz && pz.has(uz)
    }
  },
  8569: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => iz,
      e: () => lz,
      g: () => Mz,
      i: () => Hz,
      l: () => tz
    });
    var Ez = bz(195),
      nz = bz(4385);

    function iz(zz) {
      return lz(zz) === Ez.b.gameOrPluginOnPlayerAuthRejected.code
    }

    function lz(zz) {
      return "object" === typeof zz && null !== zz ? zz.code : void 0
    }

    function Mz(zz) {
      var uz;
      return null !== (uz = Object.keys(nz.e).find((uz => nz.e[uz] === zz))) && void 0 !== uz ? uz : null
    }

    function tz(zz) {
      return "notWhitelisted" === zz ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const Hz = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  38507: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => lz
    });
    var Ez = bz(316),
      nz = bz(128),
      iz = bz(33);

    function lz() {
      iz.g.setItem(Ez.Xb, iz.g.getItem(Ez.Xb) + 1), (0, nz.o)() && iz.g.setItem(Ez.Ub, iz.g.getItem(Ez.Ub) + 1)
    }
  },
  35945: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Xz,
      e: () => fz
    });
    var Ez = bz(994),
      nz = bz(597),
      iz = bz(328),
      lz = bz(1e3),
      Mz = bz(606),
      tz = bz(646),
      Hz = bz(4286),
      Oz = bz(96),
      pz = bz(128),
      dz = bz(1673),
      Fz = bz(111),
      Zz = bz(35952),
      Rz = bz(33),
      Kz = bz(627),
      wz = bz(35954);

    function Xz() {
      var zz, uz;
      return [...null !== (zz = navigator.languages) && void 0 !== zz ? zz : [null !== (uz = navigator.language) && void 0 !== uz ? uz : "none"], "en-Gb"]
    }

    function fz(zz, uz, bz, fz, sz) {
      const rz = (0, Ez.k)(uz) ? (0, Ez.q)(uz) : null,
        oz = {
          cookies: (0, dz.getAllCookiesForGameNameWithVariation)(uz),
          isMobile: (0, Oz.isMobile)(),
          isUsingCustomGameTexturePack: null !== rz && sz(rz),
          generalCookies: {
            joinDiscord: !!Rz.g.getItem("DiscordPressed"),
            newGo: Hz.b,
            ...zz.getMetricsCookies(),
            trafficCode: fz,
            compliance: Oz.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, Oz.getBrowserName)(),
            version: (0, Oz.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, Oz.getPlatformType)(),
            deviceType: (0, Fz.e)()
          },
          isLoggedIn: zz.isLoggedIn(),
          lobbyName: bz,
          languages: Xz(),
          version: nz.c,
          siteUsed: pz.x,
          subsiteUsed: pz.E,
          playSessionId: (0, Zz.g)(uz),
          visitSessionId: (0, Kz.d)(),
          clientReason: Mz.o.reason,
          budgetBasis: (0, wz.f)(),
          ...null !== tz.q && {
            diagClaim: tz.q.claimId
          }
        };
      return null !== rz && (0, iz.Fc)(rz) ? (oz.lobbyName = (0, Ez.g)(rz, (0, Ez.m)(uz), bz), {
        roomName: `classic_${lz.e}`,
        joinOptions: oz
      }) : {
        roomName: uz,
        joinOptions: oz
      }
    }
  },
  39823: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Mz
    });
    var Ez = bz(38974);

    function nz(zz) {
      return {
        current: () => zz,
        watch: () => () => {}
      }
    }

    function iz() {}
    const lz = Object.freeze([0, 0, 0]),
      Mz = {
        states: {
          health: nz({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: nz({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: nz({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: nz({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: nz({}),
          creativeVisibility: nz({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: nz(null),
          heldItemAim: nz({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: nz(!1),
          gliderBoostFuel: nz(0),
          flight: nz({
            canFly: !1,
            flying: !1
          }),
          crafting: nz({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: nz({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: nz({}),
          fullInventory: nz(!1),
          crosshairTarget: nz({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: nz(!0),
          freeCamera: nz({
            allowed: !1,
            movesFly: !1
          }),
          replay: nz(null),
          replayEdits: nz(null),
          replayRecorder: nz({
            recording: !1,
            clipping: !1,
            hasClipBuffer: !1,
            seconds: 0
          }),
          replayVideoExporting: nz(!1)
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
          selectHotbarSlot: iz,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: iz,
          setInventoryOpen: iz,
          changeIronChestPasskey: iz,
          dragReplayCamera: iz,
          applyTemporaryThirdPerson: iz,
          holdEmoteWheel: iz,
          recordFlyingMiddleText: iz,
          focusCrafting: iz,
          craftRecipe: () => ({
            gO: 0,
            Rp: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: iz,
          setShopOpen: iz,
          buyShopItem: iz,
          sendChatMessage: iz,
          ignorePlayer: iz,
          reportPlayer: iz,
          reportWorldCodeChat: iz,
          requestDiscordReportKey: iz,
          reportLobbyOrGame: iz,
          playEmote: iz,
          updateMyCosmetic: iz,
          writeOnBoard: iz,
          writeBook: iz,
          writeNameTag: iz,
          setCustomLobbyBlock: iz,
          openIronChest: iz,
          sendCodeCollab: iz,
          clickCodeBlock: iz,
          bindCustomButtonKeys: iz,
          pressCustomButton: iz,
          moveReplayFreecam: iz,
          holdReplayFreecamVertical: iz,
          respawn: iz,
          wakeUp: iz,
          requestLeaderboard: iz,
          completeTask: iz,
          setServerCookie: iz,
          answerUiRequest: iz,
          chooseRewardedAd: iz,
          setCameraZoom: iz,
          setFreeCameraMovesFly: iz,
          setBlockHighlight: iz,
          setCrosshairInteractPrompt: iz,
          setLookSensitivity: iz,
          replayAction: iz,
          setReplayPlaying: iz,
          seekReplay: iz,
          setReplayCameraMode: iz,
          syncReplayCameraMode: iz,
          setReplayCameraKeyframe: iz,
          moveReplayCameraKeyframe: iz,
          deleteReplayCameraKeyframes: iz,
          setReplayPlaybackMark: iz,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: iz,
          exportReplayVideo: iz,
          toggleRecording: iz,
          saveClip: iz,
          setRecorderPrefs: iz,
          setReplayViewerOpen: iz
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => Ez.e,
          worldCodeAiGameState: () => Ez.h
        },
        lookups: {
          localPos: () => lz,
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
  35954: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => oz,
      f: () => rz,
      h: () => sz
    });
    var Ez = bz(195),
      nz = bz(96),
      iz = bz(2706),
      lz = bz(4169),
      Mz = bz(615),
      tz = bz(35956);
    const Hz = 1048576,
      Oz = 1024 * Hz,
      pz = 400 * Hz,
      dz = 147456,
      Fz = .5,
      Zz = 1.5 * Oz,
      Rz = 768 * Hz;

    function Kz(zz) {
      return pz + zz * dz
    }

    function wz(zz, uz, bz) {
      var nz, lz;
      let {
        footprintBytes: Mz,
        basis: Hz,
        namesLimit: wz
      } = function(zz) {
        const {
          os: uz,
          deviceMemory: bz
        } = zz;
        if ("ios" === uz) switch ((0, iz.f)(zz)) {
          case "ipad_m":
            return {
              footprintBytes: Kz(tz.c), basis: "ipad-m", namesLimit: !1
            };
          case "ipad":
            return {
              footprintBytes: Rz, basis: "ipad", namesLimit: !0
            };
          case "iphone_6gb":
            return {
              footprintBytes: Zz, basis: "iphone-6gb", namesLimit: !0
            };
          case "iphone":
            return {
              footprintBytes: Rz, basis: "iphone", namesLimit: !0
            }
        }
        return "number" === typeof bz && Number.isFinite(bz) && bz > 0 ? {
          footprintBytes: bz * Oz * Fz,
          basis: `memory-${bz}`,
          namesLimit: !0
        } : "android" === uz ? {
          footprintBytes: Rz,
          basis: "android",
          namesLimit: !0
        } : {
          footprintBytes: Kz(tz.j),
          basis: "unreported",
          namesLimit: !1
        }
      }(zz);
      if (bz) {
        const zz = Math.min(Mz, Kz(tz.c));
        Mz = pz + Math.max(0, zz - pz) / 2, Hz += "+killed", wz = !0
      }
      null !== uz && Kz(uz) < Mz && (Mz = Kz(uz), Hz += "+learned", wz = !0);
      const Xz = function(zz) {
          const uz = Math.floor((zz - pz) / dz);
          return Math.min(tz.c, Math.max(tz.g, uz))
        }(Mz),
        fz = (0, tz.p)(Xz);
      return {
        footprintBytes: Mz,
        shedFootprintBytes: wz ? Math.max(Mz, Kz(Xz)) : null,
        chunkCap: Xz,
        maxHorizDistance: null !== (nz = null === fz || void 0 === fz ? void 0 : fz.horizontal) && void 0 !== nz ? nz : Ez.e.maxChunkHorizAddDistance,
        maxVertDistance: null !== (lz = null === fz || void 0 === fz ? void 0 : fz.vertical) && void 0 !== lz ? lz : Ez.e.maxChunkVertAddDistance,
        basis: Hz
      }
    }
    let Xz = null;

    function fz() {
      return wz({
        os: (0, nz.getOperatingSystem)(),
        deviceMemory: navigator.deviceMemory,
        ...(0, iz.i)()
      }, (0, lz.i)(), (0, Mz.G)("wasm").length > 0)
    }

    function sz() {
      return Xz ??= fz(), Xz
    }

    function rz() {
      var zz;
      return (null !== (zz = Xz) && void 0 !== zz ? zz : fz()).basis
    }

    function oz(zz, uz) {
      return zz.setChunkCap(uz.chunkCap)
    }
  },
  40229: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => lz,
      g: () => iz
    });
    var Ez = bz(2916),
      nz = bz(994);

    function iz(zz, uz) {
      return null !== zz.gameSource && (0, Ez.n)(uz, zz.gameSource)
    }

    function lz(zz, uz) {
      if (null === zz.gameSource || "" === zz.gameSource || null === uz) return !0;
      const bz = (0, nz.k)(uz) ? (0, nz.q)(uz) : null;
      return null !== bz && iz(zz, bz)
    }
  },
  40209: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => iz,
      f: () => Rz,
      j: () => Hz,
      l: () => Oz,
      n: () => Zz
    });
    var Ez = bz(40165),
      nz = bz(40213);
    const iz = 396,
      lz = 1,
      Mz = 2,
      tz = 3,
      Hz = {
        Glb: 1,
        LifeformAtlas: 2,
        ArmourAtlas: 3,
        Cape: 4,
        GroupAtlas: 5,
        Particle: 6,
        AttachmentImage: 7,
        BlockImage: 8
      },
      Oz = {
        File: 0,
        Item: 1
      },
      pz = 0,
      dz = 1,
      Fz = 2;

    function Zz(zz) {
      const uz = (0, Ez.m)();
      uz.catch((() => {}));
      let nz = null;
      return {
        glbUrl: zz,
        lifeformAtlasUrl: async zz => (await uz).lifeformAtlasUrl(zz),
        armourAtlasUrl: async () => (await bz.e(201).then((() => bz(33750)))).armourAtlasUrl,
        capeUrl: async zz => (await uz).capeUrl(zz),
        attachmentImageUrl: async zz => (await uz).attachmentImageUrl(zz),
        blockImageUrl: async zz => (await uz).blockImageUrl(zz),
        groupAtlasUrl: async zz => (await uz).groupAtlasUrl(zz),
        particleTextureUrl: async zz => (await uz).particleTextureUrl(zz),
        particleItemUrl: async zz => (nz ??= bz.e(38).then((() => bz(50887))).catch((zz => {
          throw nz = null, zz
        })), (await nz).particleItemUrl(zz))
      }
    }
    class Rz {
      constructor(zz, uz) {
        var bz, iz, lz;
        let Mz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.sources = zz, this.onFailure = uz, this.loading = new Map, this.glbImages = new Map, this.glbWrittenImages = new Map, this.glbTakenCount = new Map, this.answered = new Map, this.ready = [], this.load = void 0, this.release = void 0, this.fetchFile = void 0, this.SZ = !1, this.load = null !== (bz = Mz.load) && void 0 !== bz ? bz : (zz, uz) => (0, nz.k)(zz, Mz.fetchImage, uz), this.release = null !== (iz = Mz.release) && void 0 !== iz ? iz : nz.m, this.fetchFile = null !== (lz = Mz.fetchFile) && void 0 !== lz ? lz : zz => (0, Ez.h)(zz)
      }
      get waiting() {
        return this.ready.length
      }
      get inFlight() {
        return this.loading.size
      }
      glbWritten(zz, uz) {
        this.glbWrittenImages.set(zz, oz(uz))
      }
      glbTaken(zz, uz) {
        const bz = this.glbWrittenImages.get(zz);
        this.glbWrittenImages.delete(zz), uz && this.setGlbImages(zz, void 0 !== bz && bz.length > 0 ? bz : void 0)
      }
      setGlbImages(zz, uz) {
        var bz;
        this.glbTakenCount.set(zz, (null !== (bz = this.glbTakenCount.get(zz)) && void 0 !== bz ? bz : 0) + 1), void 0 === uz ? this.glbImages.delete(zz) : this.glbImages.set(zz, uz);
        const Ez = [];
        for (const {
            key: nz
          }
          of this.loading.values()) nz.kind === Hz.Glb && nz.word === zz && Ez.push(nz);
        for (let nz = this.ready.length - 1; nz >= 0; nz--) {
          const {
            key: uz,
            id: bz
          } = this.ready[nz];
          uz.kind === Hz.Glb && uz.word === zz && (this.ready.splice(nz, 1), null !== bz && (this.answered.delete(bz), this.release(bz)), Ez.push(uz))
        }
        this.loadAgain(Ez)
      }
      onEvent(zz) {
        if (this.SZ) return;
        const uz = new DataView(zz.buffer, zz.byteOffset, zz.byteLength);
        for (let bz = 0; bz + 8 <= zz.byteLength; bz += 8) {
          const zz = uz.getUint8(bz),
            Ez = uz.getUint32(bz + 4, !0);
          if (zz === tz) {
            this.answered.delete(Ez), this.release(Ez);
            continue
          }
          const nz = {
            kind: uz.getUint8(bz + 1),
            index: uz.getUint8(bz + 2),
            word: Ez
          };
          zz === lz ? this.want(nz) : zz === Mz && this.loading.delete(Kz(nz))
        }
      }
      reload(zz, uz) {
        const bz = bz => zz.includes(bz.kind) && (void 0 === uz || uz(bz)),
          Ez = new Map;
        for (const nz of this.answered.values()) bz(nz) && Ez.set(Kz(nz), nz);
        for (const [nz, {
            key: iz
          }] of this.loading) bz(iz) && Ez.set(nz, iz);
        this.loadAgain(Ez.values())
      }
      loadAgain(zz) {
        for (const uz of zz) this.loading.delete(Kz(uz)), this.want(uz)
      }
      drain(zz) {
        if (null !== zz)
          for (; this.ready.length > 0;) {
            if (!zz(iz, 0, this.ready[0].record)) return;
            this.ready.shift()
          }
      }
      dispose() {
        this.SZ = !0, this.loading.clear(), this.ready.length = 0;
        for (const zz of this.answered.keys()) this.release(zz);
        this.answered.clear()
      }
      want(zz) {
        const uz = Kz(zz);
        if (this.loading.has(uz)) return;
        const bz = {
          key: zz
        };
        this.loading.set(uz, bz), this.loadKey(zz).then((Ez => {
          this.SZ || this.loading.get(uz) !== bz ? this.release(Ez.id) : (this.loading.delete(uz), this.answered.set(Ez.id, zz), this.ready.push({
            record: Xz(zz, pz, Ez),
            key: zz,
            id: Ez.id
          }))
        }), (Ez => {
          if (this.SZ || this.loading.get(uz) !== bz) return;
          this.loading.delete(uz), this.onFailure({
            key: zz,
            error: Ez
          });
          const iz = Ez instanceof nz.c && "decode" === Ez.stage ? dz : Fz;
          this.ready.push({
            record: Xz(zz, iz, null),
            key: zz,
            id: null
          })
        }))
      }
      async loadKey(zz) {
        switch (zz.kind) {
          case Hz.Glb:
            return this.load(await this.glbImage(zz), "none");
          case Hz.LifeformAtlas:
            return this.load(wz(await this.sources.lifeformAtlasUrl(zz.word), zz), "none");
          case Hz.ArmourAtlas:
            return this.load(wz(await this.sources.armourAtlasUrl(), zz), "none");
          case Hz.Cape:
            return this.load(wz(await this.sources.capeUrl(zz.word), zz), "none");
          case Hz.AttachmentImage:
            return this.load(wz(await this.sources.attachmentImageUrl(zz.word), zz), "none");
          case Hz.GroupAtlas:
            return this.load(wz(await this.sources.groupAtlasUrl(zz.word), zz), "none");
          case Hz.BlockImage:
            return this.load(wz(await this.sources.blockImageUrl(zz.word), zz), "none");
          case Hz.Particle: {
            const uz = await (zz.index === Oz.Item ? this.sources.particleItemUrl(zz.word) : this.sources.particleTextureUrl(zz.word));
            return this.load(wz(uz, zz), "flipY")
          }
          default:
            throw new nz.c("fetch", `image kind ${zz.kind}`, {
              cause: null
            })
        }
      }
      async glbImage(zz) {
        var uz;
        let bz = this.glbImages.get(zz.word);
        if (void 0 === bz) {
          const uz = this.glbTakenCount.get(zz.word),
            Ez = wz(await this.sources.glbUrl(zz.word), zz);
          try {
            bz = oz(await this.fetchFile(Ez))
          } catch (iz) {
            throw new nz.c("fetch", Ez, {
              cause: iz
            })
          }
          this.glbTakenCount.get(zz.word) === uz && this.glbImages.set(zz.word, bz)
        }
        const Ez = null === (uz = bz) || void 0 === uz ? void 0 : uz[zz.index];
        if (!Ez) throw new nz.c("decode", `image ${zz.index} of file ${2147483647&zz.word}`, {
          cause: null
        });
        return Ez
      }
    }

    function Kz(zz) {
      let {
        kind: uz,
        index: bz,
        word: Ez
      } = zz;
      return `${uz}:${bz}:${Ez}`
    }

    function wz(zz, uz) {
      if (null === zz) throw new nz.c("fetch", `no URL for image ${Kz(uz)}`, {
        cause: null
      });
      return zz
    }

    function Xz(zz, uz, bz) {
      var Ez, nz, iz;
      const lz = new Uint8Array(16),
        Mz = new DataView(lz.buffer);
      return Mz.setUint8(0, zz.kind), Mz.setUint8(1, zz.index), Mz.setUint8(2, uz), Mz.setUint32(4, zz.word, !0), Mz.setUint32(8, null !== (Ez = null === bz || void 0 === bz ? void 0 : bz.id) && void 0 !== Ez ? Ez : 0, !0), Mz.setUint16(12, Math.min(null !== (nz = null === bz || void 0 === bz ? void 0 : bz.width) && void 0 !== nz ? nz : 0, 65535), !0), Mz.setUint16(14, Math.min(null !== (iz = null === bz || void 0 === bz ? void 0 : bz.height) && void 0 !== iz ? iz : 0, 65535), !0), lz
    }
    const fz = 1179937895,
      sz = 1313821514,
      rz = 5130562;

    function oz(zz) {
      var uz;
      const bz = new DataView(zz.buffer, zz.byteOffset, zz.byteLength);
      if (zz.byteLength < 20 || bz.getUint32(0, !0) !== fz || bz.getUint32(16, !0) !== sz) return [];
      let Ez, nz = 20 + bz.getUint32(12, !0);
      try {
        Ez = JSON.parse((new TextDecoder).decode(zz.subarray(20, nz)))
      } catch {
        return []
      }
      for (; nz + 8 <= zz.byteLength && bz.getUint32(nz + 4, !0) !== rz;) nz += 8 + bz.getUint32(nz, !0);
      const iz = null !== (uz = Ez.images) && void 0 !== uz ? uz : [];
      if (0 === iz.length || nz + 8 > zz.byteLength) return iz.map((() => null));
      const lz = zz.subarray(nz + 8, Math.min(zz.byteLength, nz + 8 + bz.getUint32(nz, !0)));
      return iz.map((zz => {
        var uz, bz, nz;
        const iz = void 0 === zz.bufferView || null === (uz = Ez.bufferViews) || void 0 === uz ? void 0 : uz[zz.bufferView];
        if (!iz || 0 !== (null !== (bz = iz.buffer) && void 0 !== bz ? bz : 0) || void 0 === iz.byteLength) return null;
        const Mz = null !== (nz = iz.byteOffset) && void 0 !== nz ? nz : 0,
          tz = Mz + iz.byteLength;
        return tz <= lz.byteLength ? lz.slice(Mz, tz) : null
      }))
    }
  },
  39829: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => lz,
      f: () => iz,
      g: () => nz
    });
    let Ez = null;

    function nz(zz) {
      Ez = zz
    }

    function iz(zz) {
      Ez === zz && (Ez = null)
    }

    function lz() {
      var zz;
      null === (zz = Ez) || void 0 === zz || zz()
    }
  },
  36061: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => Oz,
      f: () => dz,
      h: () => wz,
      i: () => Hz
    });
    var Ez = bz(20),
      nz = bz(2289),
      iz = bz(2294),
      lz = bz(2302),
      Mz = bz(2356),
      tz = bz(22);

    function Hz(zz, uz) {
      return (!(0, lz.d)() || 0 === zz && 0 === uz) && (0, iz.r)(nz.f.Joystick, 0, zz, uz, 0)
    }
    const Oz = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function pz(zz) {
      return zz.classList.contains("TouchKeyHit") && Fz() ? null : zz.firstElementChild
    }

    function dz(zz) {
      return zz.classList.contains("TouchKeyHit") && !zz.classList.contains("CanvasZone") ? {
        whole: !Fz(),
        keyBox: null
      } : {
        whole: !1,
        keyBox: Zz(pz(zz))
      }
    }

    function Fz() {
      return document.documentElement.classList.contains(Mz.j)
    }

    function Zz(zz) {
      return !(zz instanceof HTMLElement) || zz.offsetWidth <= 0 || zz.offsetHeight <= 0 ? null : {
        width: zz.offsetWidth,
        height: zz.offsetHeight
      }
    }

    function Rz(zz, uz) {
      const bz = zz => Math.min(65535, Math.round(4 * zz));
      return (bz(zz) | bz(uz) << 16) >>> 0
    }

    function Kz(zz) {
      return {
        x: zz.left + zz.width / 2,
        y: zz.top + zz.height / 2,
        radius: Math.min(zz.width, zz.height) / 2
      }
    }
    const wz = new class {
      constructor(zz) {
        this.write = zz, this.elements = new Map, this.canvasLeft = 0, this.canvasTop = 0
      }
      set(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        uz ? this.elements.set(zz, {
          element: uz,
          hidden: bz
        }) : this.elements.delete(zz), this.measureOne(zz)
      }
      measure() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          left: this.canvasLeft,
          top: this.canvasTop
        };
        this.canvasLeft = zz.left, this.canvasTop = zz.top;
        for (const uz of this.elements.keys()) this.measureOne(uz)
      }
      hitZone(zz, uz) {
        let bz = null,
          Ez = 1;
        for (const nz of this.elements.keys()) {
          const iz = this.shown(nz);
          if (!iz) continue;
          const {
            rect: lz,
            element: Mz
          } = iz, tz = Kz(lz), Hz = Math.max(0, lz.width / 2 - tz.radius), Oz = Math.max(0, lz.height / 2 - tz.radius), dz = Math.max(0, Math.abs(zz - tz.x) - Hz), Fz = Math.max(0, Math.abs(uz - tz.y) - Oz), Rz = Mz.firstElementChild;
          let wz = Math.hypot(dz, Fz) / tz.radius;
          const Xz = Zz(pz(Mz));
          Xz && (wz = Math.min(wz, Math.max(2 * Math.abs(zz - tz.x) / Xz.width, 2 * Math.abs(uz - tz.y) / Xz.height))), wz < Ez && (bz = {
            code: nz,
            element: Mz,
            key: Rz,
            ...tz
          }, Ez = wz)
        }
        return bz
      }
      measureOne(zz) {
        const uz = this.shown(zz);
        if (!uz) return void this.write(nz.f.TouchZone, zz, 0, 0, 0);
        const {
          rect: bz,
          element: Ez
        } = uz, iz = Kz(bz);
        this.write(nz.f.TouchZone, zz, iz.x - this.canvasLeft, iz.y - this.canvasTop, Rz(bz.width, bz.height));
        const lz = Zz(pz(Ez));
        this.write(nz.f.TouchZone, 256 | zz, 0, 0, lz ? Rz(lz.width, lz.height) : 0)
      }
      shown(zz) {
        const uz = this.elements.get(zz),
          bz = Ez.e.get("worldPanelHud");
        if (!uz || uz.hidden || "none" === bz) return null;
        const nz = uz.element.getBoundingClientRect();
        return nz.width <= 0 || nz.height <= 0 ? null : {
          rect: nz,
          element: uz.element
        }
      }
    }(iz.r);
    (0, tz.o)(Mz.f, (() => {
      wz.measure()
    }))
  },
  40077: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => tz,
      i: () => Hz
    });
    var Ez = bz(40085),
      nz = bz(38420),
      iz = bz(35945),
      lz = bz(40002),
      Mz = bz(40052);
    const tz = Ez.e.timeForPlayerToConnect - 1e4;
    async function Hz(zz, uz, bz, Ez) {
      let tz;
      try {
        tz = await zz.getTrafficCode()
      } catch (Zz) {
        throw console.error("[bloxd-wasm-client] could not get a traffic code", Zz), new Mz.C(Zz)
      }
      const {
        gameNameWithVariation: Hz,
        lobbyName: Oz
      } = uz, pz = () => {
        const uz = (0, iz.e)(zz, Hz, Oz, tz, (zz => {
          var uz;
          return null !== (uz = null === bz || void 0 === bz ? void 0 : bz.isUsingCustomGameTexturePack(zz)) && void 0 !== uz && uz
        }));
        uz.joinOptions.wasmClient = !0;
        const nz = (0, lz.C)();
        return null !== nz && (uz.joinOptions.renderBackend = nz), uz.joinOptions.joinAdHold = Ez, uz
      }, {
        roomName: dz,
        joinOptions: Fz
      } = pz();
      return {
        endpoint: uz.endpoint,
        roomName: dz,
        joinOptions: Fz,
        session: {
          gameNameWithVariation: Hz,
          lobbyName: Oz,
          playerDbId: zz.whamm
        },
        optionsAfterRefusal: async uz => await (0, nz.b)(zz, uz) ? pz().joinOptions : null
      }
    }
  },
  4783: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Mz,
      i: () => lz
    });
    var Ez = bz(2916),
      nz = bz(4789);
    let iz = null;

    function lz(zz, uz) {
      iz = {
        pack: zz.metaData.id === Ez.c ? null : zz,
        prompt: uz
      }
    }

    function Mz(zz, uz) {
      const bz = iz;
      null !== bz && (0, nz.c)(bz.pack, zz) && (iz = null, uz && bz.prompt())
    }
  },
  40217: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Oz,
      f: () => iz,
      j: () => pz,
      m: () => lz
    });
    var Ez = bz(40209),
      nz = bz(40165);
    const iz = new class {
      constructor() {
        this.page = null, this.session = void 0, this.follower = null, this.isWanted = !1, this.listeners = new Set, this.pageListeners = new Set, this.wantedListeners = new Set
      }
      get current() {
        return void 0 === this.session ? this.page : this.session
      }
      setPageFiles(zz) {
        this.change((() => {
          this.page = zz
        }))
      }
      setSessionFiles(zz) {
        const uz = void 0 !== this.session && void 0 === zz;
        if (this.change((() => {
            this.session = zz
          })), uz)
          for (const bz of [...this.pageListeners]) bz()
      }
      showsPage() {
        return void 0 === this.session
      }
      onPageShown(zz) {
        return this.pageListeners.add(zz), () => {
          this.pageListeners.delete(zz)
        }
      }
      setFollower(zz) {
        this.follower = zz, this.startFollower()
      }
      wanted() {
        this.isWanted = !0;
        for (const zz of [...this.wantedListeners]) zz();
        this.startFollower()
      }
      onWanted(zz) {
        return this.wantedListeners.add(zz), () => {
          this.wantedListeners.delete(zz)
        }
      }
      onChange(zz) {
        return this.listeners.add(zz), () => {
          this.listeners.delete(zz)
        }
      }
      startFollower() {
        const zz = this.follower;
        this.isWanted && null !== zz && (this.follower = null, zz((() => {
          this.follower = zz
        })))
      }
      change(zz) {
        const uz = this.current;
        if (zz(), this.current !== uz)
          for (const bz of this.listeners) bz()
      }
    };

    function lz(zz, uz) {
      return {
        ...zz,
        armourAtlasUrl: () => {
          var bz, Ez;
          return null !== (bz = null === (Ez = uz()) || void 0 === Ez ? void 0 : Ez.armourAtlasUrl()) && void 0 !== bz ? bz : zz.armourAtlasUrl()
        },
        lifeformAtlasUrl: bz => tz(uz(), (zz => zz.LIFEFORM_ATLAS_PATHS[bz]), (() => zz.lifeformAtlasUrl(bz))),
        groupAtlasUrl: bz => tz(uz(), (zz => zz.GROUP_ATLAS_PATHS[bz]), (() => zz.groupAtlasUrl(bz))),
        particleItemUrl: Ez => Hz(uz(), (async () => {
          const zz = await bz.e(38).then((() => bz(50887))).catch((() => null));
          return (null === zz || void 0 === zz ? void 0 : zz.particleItemSprite(Ez)) || null
        }), (() => zz.particleItemUrl(Ez))),
        blockImageUrl: bz => Hz(uz(), (async () => {
          var zz, uz;
          return null !== (zz = null === (uz = await Mz()) || void 0 === uz ? void 0 : uz.blockImageName(bz)) && void 0 !== zz ? zz : null
        }), (() => zz.blockImageUrl(bz)))
      }
    }

    function Mz() {
      return (0, nz.m)().catch((() => null))
    }

    function tz(zz, uz, bz) {
      return Hz(zz, (async () => {
        var zz;
        const bz = await Mz(),
          Ez = null === bz ? null : uz(bz),
          nz = null !== (zz = null === Ez || void 0 === Ez ? void 0 : Ez.slice(Ez.lastIndexOf("/") + 1)) && void 0 !== zz ? zz : null;
        return "Player_Atlas" === nz ? null : nz
      }), bz)
    }
    async function Hz(zz, uz, bz) {
      if (null !== zz) {
        const bz = await uz(),
          Ez = null === bz ? null : zz.textureUrl(bz);
        if (null !== Ez) return Ez
      }
      return bz()
    }
    const Oz = 0;

    function pz(zz) {
      const uz = [Ez.j.ArmourAtlas, Ez.j.LifeformAtlas, Ez.j.GroupAtlas, Ez.j.BlockImage, Ez.j.Particle];
      zz.reload(uz, (zz => {
        switch (zz.kind) {
          case Ez.j.Particle:
            return zz.index === Ez.l.Item;
          case Ez.j.LifeformAtlas:
            return zz.word !== Oz;
          default:
            return !0
        }
      }))
    }
  },
  40093: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Ez,
      d: () => Mz,
      g: () => lz,
      j: () => nz,
      l: () => iz
    });
    const Ez = 1e3;

    function nz() {
      tz((() => {
        window.location.reload()
      }))
    }

    function iz() {
      return new Promise((() => {}))
    }

    function lz(zz) {
      tz((() => {
        window.location.replace(zz(window.location.href))
      }))
    }

    function Mz(zz) {
      Promise.resolve().then((() => bz(104))).then((uz => {
        let {
          currentUrl: bz
        } = uz;
        lz((() => bz.mergeSearchParamsInto(zz)))
      }), (() => {
        lz((() => zz))
      }))
    }

    function tz(zz) {
      null !== window.onbeforeunload ? Promise.resolve().then((() => bz(1673))).then((uz => {
        let {
          prepareForUnloadWithoutConfirmation: bz
        } = uz;
        try {
          bz()
        } catch (Ez) {
          console.warn("[bloxd-wasm-client] prepareForUnloadWithoutConfirmation threw: leaving plainly", Ez), window.onbeforeunload = null
        }
        zz()
      }), (() => {
        window.onbeforeunload = null, zz()
      })) : zz()
    }
  },
  4789: (zz, uz, bz) => {
    function Ez(zz, uz) {
      return nz(zz, uz)
    }

    function nz(zz, uz) {
      if (zz === uz) return !0;
      if ("object" !== typeof zz || "object" !== typeof uz || null === zz || null === uz || Array.isArray(zz) !== Array.isArray(uz)) return !1;
      const bz = zz,
        Ez = uz,
        iz = Object.keys(bz);
      return iz.length === Object.keys(Ez).length && iz.every((zz => Object.prototype.hasOwnProperty.call(Ez, zz) && nz(bz[zz], Ez[zz])))
    }
    bz.d(uz, {
      c: () => Ez
    })
  },
  40137: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Nz,
      f: () => rz,
      j: () => Kz,
      m: () => Rz
    });
    var Ez = bz(1761),
      nz = bz(1768),
      iz = bz(38418),
      lz = bz(38429),
      Mz = bz(1732),
      tz = bz(40049),
      Hz = bz(40052);
    const Oz = {
        "X-Requested-With": "XMLHtttpRequest"
      },
      pz = 3,
      dz = [500, 1500];

    function Fz(zz) {
      const uz = new URL(zz);
      return {
        secure: "https:" === uz.protocol || "wss:" === uz.protocol,
        host: uz.host,
        pathname: uz.pathname.replace(/\/+$/, ""),
        search: uz.searchParams.toString()
      }
    }

    function Zz(zz, uz, bz) {
      const {
        secure: Ez,
        host: nz,
        pathname: iz,
        search: lz
      } = Fz(zz);
      return `${Ez?"https":"http"}://${nz}${iz}/matchmake/${uz}/${encodeURIComponent(bz)}${lz?`?${lz}`:""}`
    }

    function Rz(zz, uz) {
      var bz;
      const Ez = null !== (bz = uz.protocol) && void 0 !== bz ? bz : "ws";
      if ("ws" !== Ez) throw new Error(`seat reservation asks for the ${Ez} transport`);
      const {
        secure: nz,
        host: iz,
        pathname: lz,
        search: Mz
      } = Fz(zz), tz = new URLSearchParams(Mz);
      tz.append("sessionId", uz.sessionId), uz.reconnectionToken && tz.append("reconnectionToken", uz.reconnectionToken);
      return `${nz?"wss":"ws"}://${uz.room.publicAddress||`${iz}${lz}`}/${uz.room.processId}/${uz.room.roomId}?${tz.toString()}`
    }
    async function Kz(zz, uz, bz) {
      var tz;
      let Oz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const Fz = null !== (tz = Oz.sleep) && void 0 !== tz ? tz : Ez.d,
        Rz = new nz.c(Oz.signal),
        Kz = new Mz.d(lz.c, (() => {
          (0, nz.h)(Rz.controller, new lz.d)
        })),
        {
          signal: sz
        } = Rz;
      try {
        return await (0, iz.d)((() => async function(zz, uz, bz, Ez) {
          var iz;
          const {
            signal: lz,
            sleep: Mz
          } = Ez, tz = Zz(zz, "joinOrCreate", uz), Oz = JSON.stringify(bz);
          let Fz = null;
          for (let Zz = 0; Zz < pz; Zz++) {
            var Rz;
            if (Zz > 0) await Mz(null !== (Rz = dz[Zz - 1]) && void 0 !== Rz ? Rz : 1500, lz);
            let zz;
            (0, nz.l)(lz);
            try {
              zz = await Xz(tz, Oz, Ez)
            } catch (Kz) {
              (0, nz.l)(lz), Fz = wz(Kz);
              continue
            }
            const {
              response: uz,
              answer: bz,
              refusal: iz,
              lost: pz
            } = zz;
            if (null === pz) {
              if (null !== iz) throw fz(iz, bz);
              if (uz.ok && null !== bz && vz(bz)) return bz;
              Fz = new Hz.y(`seat request answered HTTP ${uz.status}${null===bz?" without JSON":" without a seat"}`, !1)
            } else Fz = wz(pz.error)
          }
          throw null !== (iz = Fz) && void 0 !== iz ? iz : new Hz.y("seat request made no attempt", !1)
        }(zz, uz, bz, {
          ...Oz,
          signal: sz,
          sleep: Fz
        })), sz, Fz)
      } finally {
        Kz.stop(), Rz.unfollow()
      }
    }

    function wz(zz) {
      return new Hz.y(zz instanceof Error ? zz.message : String(zz), !0, zz)
    }
    async function Xz(zz, uz, bz) {
      var Ez;
      const {
        signal: iz
      } = bz, lz = null !== (Ez = bz.fetch) && void 0 !== Ez ? Ez : fetch, Mz = await lz(zz, {
        method: "POST",
        headers: {
          ...Oz,
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: uz,
        credentials: "include",
        signal: iz
      }), {
        answer: tz,
        lost: Hz
      } = await async function(zz) {
        try {
          const uz = await zz.json();
          return {
            answer: "object" === typeof uz && null !== uz ? uz : null,
            lost: null
          }
        } catch (uz) {
          return {
            answer: null,
            lost: uz instanceof SyntaxError ? null : {
              error: uz
            }
          }
        }
      }(Mz), pz = null !== tz && "string" === typeof tz.error ? tz.error : null;
      var dz;
      null !== pz && (null === (dz = bz.onRefusal) || void 0 === dz || dz.call(bz));
      return (0, nz.l)(iz), {
        response: Mz,
        answer: tz,
        refusal: pz,
        lost: Hz
      }
    }

    function fz(zz, uz) {
      return new Hz.p(zz, "number" === typeof(null === uz || void 0 === uz ? void 0 : uz.code) ? uz.code : 0, (0, tz.r)(zz).text)
    }
    class sz extends Error {
      constructor(zz, uz) {
        super(zz), this.code = uz, this.name = "SeatHttpError"
      }
    }
    async function rz(zz, uz, bz) {
      let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        response: nz,
        answer: iz,
        refusal: lz,
        lost: Mz
      } = await Xz(Zz(zz, "reconnect", uz), JSON.stringify({
        reconnectionToken: bz
      }), Ez);
      if (null !== Mz) throw Mz.error;
      if (!nz.ok) {
        const zz = null !== iz && "number" === typeof iz.code && 0 !== iz.code ? iz.code : nz.status;
        throw new sz(`the seat's reconnect was refused: ${null!==lz&&void 0!==lz?lz:`HTTP ${nz.status}`}`, zz)
      }
      if (null !== lz) throw fz(lz, iz);
      if (null === iz || !vz(iz)) throw new Error("the seat's reconnect answered " + (null === iz ? "without JSON" : "without a seat"));
      return {
        ...iz,
        reconnectionToken: bz
      }
    }
    const oz = 10;

    function Nz(zz) {
      if (zz.byteLength < 2 || zz[0] !== oz) return null;
      const uz = 2 + zz[1];
      return uz > zz.byteLength ? null : (new TextDecoder).decode(zz.subarray(2, uz))
    }

    function vz(zz) {
      const uz = zz.room;
      return "string" === typeof zz.sessionId && "object" === typeof uz && null !== uz && "string" === typeof uz.roomId && "string" === typeof uz.processId && "string" === typeof uz.name
    }
  },
  39758: (zz, uz, bz) => {
    bz.d(uz, {
      $: () => oz,
      A: () => sz,
      B: () => rz,
      F: () => Kz,
      J: () => Jz,
      M: () => Gz,
      O: () => Zz,
      R: () => Vz,
      S: () => Xz,
      U: () => wz,
      Y: () => fz,
      d: () => nz,
      e: () => az,
      f: () => Pz,
      h: () => Fz,
      l: () => Rz,
      p: () => Tz,
      r: () => vz,
      t: () => Az,
      v: () => xz,
      w: () => Nz,
      y: () => Lz
    });
    var Ez = bz(2748);
    const nz = {
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

    function iz(zz, uz) {
      return !ArrayBuffer.isView(zz) || zz instanceof DataView ? Array.isArray(zz) ? zz.map((zz => uz(zz))) : zz : Array.from(zz, (zz => uz(zz)))
    }

    function lz(zz) {
      if ("string" !== typeof zz) return zz;
      for (let uz = 0; uz < zz.length; uz++) {
        const bz = zz.charCodeAt(uz);
        if (bz >= 55296 && bz <= 57343) return tz.decode(Mz.encode(zz))
      }
      return zz
    }
    const Mz = new TextEncoder,
      tz = new TextDecoder;

    function Hz(zz) {
      return zz
    }
    let Oz;

    function pz(zz) {
      return null === zz || "object" !== typeof zz ? zz : [lz(zz.Nl), lz(zz.vl)]
    }

    function dz(zz) {
      return null === zz || "object" !== typeof zz ? zz : [iz(zz.pl, Hz), iz(zz.jH, Hz)]
    }

    function Fz(zz) {
      return null === (uz = zz) || "object" !== typeof uz ? uz : [lz(uz.zM), lz(uz.uM)];
      var uz
    }

    function Zz(zz) {
      return null === (uz = zz) || "object" !== typeof uz ? uz : [uz.id, uz.Vl];
      var uz
    }

    function Rz(zz) {
      return null === (uz = zz) || "object" !== typeof uz ? uz : [uz.ru, lz(uz.ou), uz.Nu, lz(uz.Ju), uz.Pu, uz.Gu, uz.Cl, lz(uz.Yl), lz(uz.kl)];
      var uz
    }

    function Kz(zz) {
      return null === (uz = zz) || "object" !== typeof uz ? uz : [iz(uz.qO, Hz), uz.hO];
      var uz
    }

    function wz(zz) {
      return null === (uz = zz) || "object" !== typeof uz ? uz : [iz(uz.UM, (zz => lz(zz))), lz(uz.cM), uz.gM];
      var uz
    }

    function Xz(zz) {
      return null === (uz = zz) || "object" !== typeof uz ? uz : [iz(uz.ql, Hz), lz(uz.hl), uz.Ul];
      var uz
    }

    function fz(zz) {
      return null === (uz = zz) || "object" !== typeof uz ? uz : [lz(uz.kb), lz(uz.zE)];
      var uz
    }

    function sz(zz) {
      return null === (uz = zz) || "object" !== typeof uz ? uz : [lz(uz.GM)];
      var uz
    }

    function rz(zz) {
      return lz(zz)
    }

    function oz(zz) {
      return null === (uz = zz) || "object" !== typeof uz ? uz : [lz(uz.dp), lz(uz.Fp), lz(uz.Nl), lz(uz.vl)];
      var uz
    }

    function Nz(zz) {
      return pz(zz)
    }

    function vz(zz) {
      return pz(zz)
    }

    function xz(zz) {
      return null === (uz = zz) || "object" !== typeof uz ? uz : [lz(uz.bM)];
      var uz
    }

    function Jz(zz) {
      return zz
    }

    function Az(zz) {
      return null === (uz = zz) || "object" !== typeof uz ? uz : [lz(uz.Al), lz(uz.Tl)];
      var uz
    }

    function Tz(zz) {
      return lz(zz)
    }

    function Lz(zz) {
      return dz(zz)
    }

    function Pz(zz) {
      return dz(zz)
    }

    function Gz(zz) {
      return null === (uz = zz) || "object" !== typeof uz ? uz : [lz(uz.qM)];
      var uz
    }

    function az(zz) {
      return (Oz ??= (0, Ez.f)().map((zz => zz.name)), Oz).map((uz => {
        return "string" === typeof(bz = zz[uz]) ? lz(bz) : iz(bz, Hz);
        var bz
      }))
    }

    function Vz(zz) {
      return null === (uz = zz) || "object" !== typeof uz ? uz : [uz.QM, uz.WM, uz.eM];
      var uz
    }
  },
  40223: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => iz
    });
    var Ez = bz(40229),
      nz = bz(40217);
    const iz = new class {
      constructor(zz) {
        this.pack = zz, this.game = void 0, this.settle = null, this.hold = null, this.endedWhileHeld = !1, this.gameListeners = new Set, zz.onWanted((() => {
          this.release()
        }))
      }
      setGame(zz) {
        if (void 0 === zz && null !== this.hold) return void(this.endedWhileHeld = !0);
        this.hold = null, this.endedWhileHeld = !1;
        const uz = this.inGame();
        if (this.game = zz, this.update(), this.inGame() !== uz)
          for (const bz of this.gameListeners) bz()
      }
      inGame() {
        return void 0 !== this.game
      }
      onGameChange(zz) {
        return this.gameListeners.add(zz), () => {
          this.gameListeners.delete(zz)
        }
      }
      unwantedLeave(zz) {
        zz && void 0 !== this.game ? this.hold = {
          game: this.game
        } : this.release()
      }
      rejoinHold() {
        return this.hold
      }
      releaseHold(zz) {
        null !== zz && zz === this.hold && this.release()
      }
      release() {
        if (null === this.hold) return;
        const zz = this.endedWhileHeld;
        this.hold = null, this.endedWhileHeld = !1, zz && this.setGame(void 0)
      }
      setSettled(zz) {
        this.settle = zz, this.update()
      }
      update() {
        void 0 === this.game ? this.pack.setSessionFiles(void 0) : null !== this.settle && (0, Ez.d)(this.settle.state, this.game) && this.pack.setSessionFiles(this.settle.files)
      }
    }(nz.f)
  },
  40042: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      followPageUiPack: () => GH,
      packForGame: () => PH,
      playWasmGame: () => QH,
      prefetchWasmPreviews: () => DM,
      setGamePackConfirm: () => Yt,
      startWasmPlay: () => hH,
      startWasmPreviews: () => yM
    });
    var Ez = bz(195),
      nz = bz(1232),
      iz = bz(158),
      lz = bz(38441),
      Mz = bz(1871),
      tz = bz(22),
      Hz = bz(4425),
      Oz = bz(1283),
      pz = bz(1665),
      dz = bz(1296),
      Fz = bz(38586),
      Zz = bz(38599),
      Rz = bz(38507),
      Kz = bz(35952),
      wz = bz(38418),
      Xz = bz(8569),
      fz = bz(38429),
      sz = bz(39848),
      rz = bz(4544),
      oz = bz(39750),
      Nz = bz(39823),
      vz = bz(39758);
    const xz = {
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

    function Jz(zz) {
      const uz = {
        ...Nz.e[zz]
      };
      for (const bz of Object.keys(xz[zz])) delete uz[bz];
      return uz
    }

    function Az() {
      var zz, uz;
      return null === (zz = null === (uz = (0, oz.j)()) || void 0 === uz ? void 0 : uz.localPlayerAlive()) || void 0 === zz || zz
    }

    function Tz() {
      var zz, uz;
      return null !== (zz = null === (uz = (0, oz.j)()) || void 0 === uz ? void 0 : uz.localDeaths()) && void 0 !== zz ? zz : null
    }
    const Lz = {
        current: Az,
        watch: zz => {
          let uz = Az(),
            bz = Tz();
          return (0, rz.A)((() => {
            const Ez = Az(),
              nz = Tz(),
              iz = null !== nz && null !== bz && nz !== bz;
            bz = nz, iz ? (uz || zz(!0), zz(!1), Ez && zz(!0), uz = Ez) : Ez !== uz && (uz = Ez, zz(Ez))
          }))
        }
      },
      Pz = {
        states: {
          ...Jz("states"),
          localPlayerAlive: Lz
        },
        events: {
          ...Jz("events"),
          localPlayerAliveSet: {
            watch: Lz.watch
          }
        },
        commands: {
          ...Jz("commands"),
          respawn: () => {
            var zz;
            null === (zz = (0, oz.j)()) || void 0 === zz || zz.respawn()
          },
          playEmote: zz => {
            var uz;
            null === (uz = (0, oz.j)()) || void 0 === uz || uz.send(vz.d.PlayEmote, (0, vz.A)({
              GM: zz
            }))
          },
          applyTemporaryThirdPerson: zz => {
            var uz;
            let {
              durationMs: bz
            } = zz;
            null === (uz = (0, oz.j)()) || void 0 === uz || uz.thirdPersonFor(bz)
          },
          bindCustomButtonKeys: zz => {
            var uz;
            null === (uz = (0, oz.j)()) || void 0 === uz || uz.bindCustomButtonKeys(zz)
          },
          pressCustomButton: zz => {
            var uz;
            let {
              id: bz,
              down: Ez
            } = zz;
            null === (uz = (0, oz.j)()) || void 0 === uz || uz.pressCustomButton(bz, Ez)
          },
          setLookSensitivity: () => {},
          wakeUp: zz => {
            const uz = (0, vz.M)({
                qM: zz
              }),
              bz = () => {
                const zz = (0, oz.j)();
                return !(null !== zz && void 0 !== zz && zz.isSessionLive) || zz.send(vz.d.StopSleeping, uz)
              };
            if (!bz()) {
              const zz = (0, rz.A)((() => {
                bz() && zz()
              }))
            }
          },
          setCameraZoom: zz => {
            var uz;
            null === (uz = (0, oz.j)()) || void 0 === uz || uz.setCameraZoom(zz)
          }
        },
        queries: Jz("queries"),
        lookups: {
          ...Jz("lookups"),
          cameraZoom: () => {
            var zz, uz;
            return null !== (zz = null === (uz = (0, oz.j)()) || void 0 === uz ? void 0 : uz.cameraZoom()) && void 0 !== zz ? zz : 0
          }
        }
      };
    var Gz = bz(40049),
      az = bz(40052),
      Vz = bz(40059),
      mz = bz(40077),
      qz = bz(1244),
      hz = bz(104),
      Uz = bz(4286),
      cz = bz(3498),
      gz = bz(1157);
    const Sz = {
      mO: () => (0, qz.c)(),
      inbuiltOverwritten: () => Uz.d,
      reflectApplyHit: () => gz.b,
      definerHit: () => hz.currentUrl.c,
      emitReplaced: () => (0, tz.c)(),
      confirmMesh: () => (0, cz.d)()
    };
    var yz = bz(40063),
      Dz = bz(40093);
    var Qz = bz(20),
      Wz = bz(1873),
      ez = bz(1923),
      jz = bz(1597),
      Iz = bz(1959),
      Bz = bz(1181),
      Cz = bz(1241),
      Yz = bz(40025);

    function kz() {
      return Cz.h.get().getCurrentLanguageCode()
    }

    function zu(zz) {
      const uz = () => {
        zz({
          translate: (zz, uz) => (0, Bz.t)(kz(), zz, uz),
          keyBindingText: zz => {
            const uz = (0, ez.p)(zz, Qz.e.get("isTouchScreen"));
            return null !== uz ? (0, Bz.x)(kz(), uz.translationKey, uz.params) : (0, ez.l)((0, ez.m)(zz))
          },
          isFriend: Iz.c,
          hiddenNames: Wz.b.shown,
          loadsFontRest: (0, Yz.e)(kz())
        })
      };
      let bz = !1;
      const Ez = () => {
          const zz = kz();
          (0, Bz.m)(zz).then((() => {
            bz || zz !== kz() || uz()
          }))
        },
        nz = () => jz.b.getSocialState().friends.map((zz => zz.name.toLowerCase())).sort().join(" ");
      let iz = nz();
      uz(), Ez();
      const lz = [(0, Cz.j)((() => {
        uz(), Ez()
      })), (0, tz.o)("customBindingsChanged", uz), (0, tz.o)("appManagerUpdated|isTouchScreen", uz), (0, Iz.b)((() => {
        const zz = nz();
        zz !== iz && (iz = zz, uz())
      })), Wz.b.subscribe(uz)];
      return () => {
        bz = !0;
        for (const zz of lz) zz()
      }
    }
    var uu = bz(597),
      bu = bz(994),
      Eu = bz(1901),
      nu = bz(316),
      iu = bz(3468),
      lu = bz(35811),
      Mu = bz(3475),
      tu = bz(38115),
      Hu = bz(4448),
      Ou = bz(39940),
      pu = bz(606),
      du = bz(659),
      Fu = bz(668),
      Zu = bz(1892),
      Ru = bz(3505),
      Ku = bz(3036);
    let wu = null;
    var Xu = bz(1195),
      fu = bz(1768),
      su = bz(4202),
      ru = bz(3196),
      ou = bz(54),
      Nu = bz(311),
      vu = bz(298),
      xu = bz(39881),
      Ju = bz(4552);
    var Au = bz(40099);
    class Tu {
      constructor(zz, uz) {
        this.showView = zz, this.holdForAd = uz
      }
      pointerUnlockRequestsChanged() {
        (0, xu.A)()
      }
      pointerLockDebugEntries() {
        return [{
          label: "Locked to the canvas",
          value: String((0, xu.s)())
        }]
      }
      setGameViewShown(zz) {
        this.showView(zz)
      }
      setGameView(zz) {
        (0, Au.l)(zz)
      }
      videoAdHold(zz, uz) {
        this.holdForAd(zz, uz)
      }
    }
    class Lu {
      leave(zz) {
        ! function(zz) {
          if (null !== (0, dz.b)().websocketUrl) try {
            (0, rz.M)().leaveGame(zz)
          } finally {
            (0, dz.o)({
              websocketUrl: null
            })
          }
        }(zz)
      }
      isReplay() {
        return !1
      }
    }
    class Pu {
      watchFrameStarts(zz) {
        return (0, rz.s)(zz)
      }
      watchFrames(zz) {
        return (0, rz.o)(zz)
      }
      watchTicks(zz) {
        return (0, rz.A)(zz)
      }
    }
    var Gu = bz(1273),
      au = bz(40106);

    function Vu(zz) {
      return zz >= 0 ? Math.min(1, zz) : 0
    }

    function mu(zz, uz) {
      const {
        fade: bz
      } = zz;
      return null === bz || uz - bz.at >= bz.ms ? zz.volume : bz.from + (zz.volume - bz.from) * Math.max(0, (uz - bz.at) / bz.ms)
    }

    function qu(zz) {
      const uz = Object.entries(zz),
        bz = new Uint32Array(uz.length);
      let Ez = 0;
      for (const [lz, [, Mz]] of uz.entries()) bz[lz] = Mz.length, Ez += Mz.length;
      const nz = new Float64Array(3 * Ez);
      let iz = 0;
      for (const [, lz] of uz)
        for (const zz of lz) nz.set(zz, iz), iz += 3;
      return {
        blocks: uz.map((zz => {
          let [uz] = zz;
          return uz
        })).join("\0"),
        counts: bz,
        values: nz
      }
    }
    class hu {
      constructor(zz, uz) {
        this.core = zz, this.warn = uz, this.latest = 0
      }
      async feed() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Uu;
        const uz = ++this.latest;
        let bz;
        try {
          bz = await zz()
        } catch (Ez) {
          return void(this.core.isStopped || uz !== this.latest || this.warn("the block colours didn't load, so block particles draw grey", Ez))
        }
        uz === this.latest && (this.core.setBlockColours(bz) || this.core.isStopped || this.warn("the core refused the block colours: block particles draw grey"))
      }
    }
    async function Uu() {
      return qu((await bz.e(201).then((() => bz(33750)))).averageColors)
    }
    var cu = bz(4560),
      gu = bz(4564),
      Su = bz(39800),
      yu = bz(40111),
      Du = bz(40009),
      Qu = bz(586),
      Wu = bz(36478),
      eu = bz(584),
      ju = bz(328),
      Iu = bz(39976);
    const Bu = [3e4, 12e4, 3e5];
    class Cu extends Error {}
    const Yu = {
      mobTypes: Qu.n,
      vehicleTypes: Wu.d,
      mobAiStates: Qu.k,
      playerPoses: eu.o
    };
    var ku = bz(39965),
      zb = bz(40116),
      ub = bz(40126),
      bb = bz(40128),
      Eb = bz(3216),
      nb = bz(38411),
      ib = bz(4575),
      lb = bz(2289);
    const Mb = lb.z.KeysDisabled | lb.z.LookFrozen | lb.z.ClicksSuppressed,
      tb = Eb.f;
    var Hb = (0, bb.d)("resumingConn");
    class Ob {
      constructor(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.shell = zz, this.now = uz, this.session = void 0, this.attempt = null, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, Object.defineProperty(this, Hb, {
          writable: !0,
          value: 0
        }), this.drops = 0, this.session = new nb.d({
          reconnect: zz => this.reconnect(zz),
          isLive: () => zz.isLive(),
          onReconnected: uz => {
            this.landed = uz, zz.onReconnected(uz), this.landIfResumed()
          },
          onGaveUp: (uz, bz) => {
            this.abortAttempt(), zz.onGaveUp(uz, bz)
          },
          freeze: uz => {
            zz.ZJ(uz), (0, ib.i)(Mb, uz ? Mb : 0, "reconnectFreeze")
          },
          releaseSeat: zz => {
            this.releaseSeat(zz)
          }
        })
      }
      isResuming() {
        return this.session.isResuming()
      }
      get resumingConn() {
        return (0, ub.b)(this, Hb)[Hb]
      }
      canHoldSeat() {
        return this.session.canHoldSeat()
      }
      onInitialInfo(zz) {
        let {
          conn: uz,
          graceMs: bz,
          sessionBased: Ez,
          replayOffer: nz
        } = zz;
        this.session.onInitialInfo(bz, Ez), this.isResuming() && (this.initialInfoConn = uz, this.initialInfoOffer = nz, this.landIfResumed())
      }
      onResumeComplete(zz) {
        0 !== zz && (zz === (0, ub.b)(this, Hb)[Hb] ? ((0, ub.b)(this, Hb)[Hb] = 0, this.session.onResumed()) : this.isResuming() && (this.completedEarlyConn = zz))
      }
      onDropped(zz) {
        this.drops++, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, (0, ub.b)(this, Hb)[Hb] = 0, this.session.onConnectionLost(zz)
      }
      leave() {
        this.session.leave(), this.dispose()
      }
      dispose() {
        this.abortAttempt(), this.landed = null, this.completedEarlyConn = 0, (0, ub.b)(this, Hb)[Hb] = 0, this.session.end()
      }
      reconnect(zz) {
        const uz = this.attempt;
        if (null !== uz && this.awaitingJoinRoom(uz)) return uz.result;
        this.abortAttempt();
        const bz = new AbortController,
          Ez = this.drops,
          nz = {
            attachedAt: null
          },
          iz = this.shell.reconnect(zz, bz.signal, (() => {
            nz.attachedAt = this.now()
          })).then((zz => {
            if (this.clearAttempt(lz), this.drops !== Ez) throw new Error("the resumed room dropped before its attempt settled");
            return zz
          }), (zz => {
            throw this.clearAttempt(lz), zz
          })),
          lz = {
            abort: bz,
            socket: nz,
            result: iz
          };
        return this.attempt = lz, iz
      }
      clearAttempt(zz) {
        this.attempt === zz && (this.attempt = null)
      }
      abortAttempt() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new DOMException("the reconnect attempt was given up", "AbortError");
        const uz = this.attempt;
        this.attempt = null, null === uz || void 0 === uz || uz.abort.abort(zz)
      }
      awaitingJoinRoom(zz) {
        const uz = zz.socket.attachedAt;
        return null !== uz && this.now() - uz < tb
      }
      releaseSeat(zz) {
        const uz = this.attempt,
          bz = null !== uz && this.awaitingJoinRoom(uz);
        this.abortAttempt(new az.u), bz || this.shell.releaseSeat(zz)
      }
      landIfResumed() {
        const zz = this.landed;
        if (null !== zz && zz.conn === this.initialInfoConn) {
          const uz = this.initialInfoOffer && this.completedEarlyConn !== zz.conn;
          if (this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, this.abortAttempt(), !uz) return void this.session.onResumed();
          (0, ub.b)(this, Hb)[Hb] = zz.conn, this.session.onResuming()
        }
      }
    }
    var pb = bz(38414),
      db = bz(40137),
      Fb = bz(35956),
      Zb = bz(35954),
      Rb = bz(4783),
      Kb = bz(4185),
      wb = bz(3027),
      Xb = bz(39898),
      fb = bz(615),
      sb = bz(4266),
      rb = bz(33),
      ob = bz(40140),
      Nb = bz(40177),
      vb = bz(4215),
      xb = bz(2294),
      Jb = bz(1595),
      Ab = bz(1613),
      Tb = bz(1269),
      Lb = bz(111),
      Pb = bz(2656),
      Gb = bz(2302),
      ab = bz(4571);
    const Vb = new Set([cu.pb.KeyDown, cu.pb.MouseMove, cu.pb.MouseDown, cu.pb.Wheel, cu.pb.TouchStart, cu.pb.TouchMove]);

    function mb(zz) {
      return (zz.shiftKey ? cu.Eb.Shift : 0) | (zz.ctrlKey ? cu.Eb.Ctrl : 0) | (zz.altKey ? cu.Eb.Alt : 0) | (zz.metaKey ? cu.Eb.Meta : 0) | ("repeat" in zz && zz.repeat ? cu.Eb.Repeat : 0) | (zz.isTrusted ? 0 : cu.Eb.Untrusted)
    }

    function qb(zz) {
      return "touchOnly" !== (0, Lb.e)() && "function" === typeof zz.requestPointerLock
    }

    function hb(zz) {
      return 0 === zz.button ? zz.altKey ? ab.m["Alt+Left Click"] : ab.m.Mouse1 : 1 === zz.button ? ab.m.Mouse2 : ab.m.Mouse3
    }
    const Ub = new Set(["AltLeft", "AltRight", "ArrowUp", "ArrowDown"]),
      cb = new Map([
        ["AltLeft", "altKey"],
        ["AltRight", "altKey"],
        ["ControlLeft", "ctrlKey"],
        ["ControlRight", "ctrlKey"],
        ["ShiftLeft", "shiftKey"],
        ["ShiftRight", "shiftKey"],
        ["MetaLeft", "metaKey"],
        ["MetaRight", "metaKey"]
      ]),
      gb = 32768,
      Sb = 1;

    function yb(zz) {
      return Math.min(Math.max(Math.round(zz), 0), 65535)
    }

    function Db(zz, uz, bz) {
      const Ez = [],
        nz = (zz, uz, bz, nz) => {
          const iz = zz => {
            (0, Ab.r)(zz) || bz(zz)
          };
          zz.addEventListener(uz, iz, nz), Ez.push((() => {
            zz.removeEventListener(uz, iz, nz)
          }))
        },
        iz = {
          capture: !0,
          passive: !0
        },
        lz = (zz, bz, Ez, nz, iz) => (!(0, Gb.d)() || !Vb.has(zz)) && (uz(zz, bz, Ez, nz, iz), !0),
        Mz = () => document.pointerLockElement === zz,
        tz = (0, Pb.b)(),
        Hz = zz => {
          zz.ctrlKey && bz.ctrlCombosAreGames() && !(0, ib.g)(zz.target) && zz.preventDefault()
        },
        Oz = (zz, Ez, nz) => {
          bz.inspect(zz, Ez, !1), uz(cu.pb.KeyUp, Ez, 0, 0, (0, xb.p)(nz, zz.timeStamp)), bz.keyReleased(Ez)
        },
        pz = new Map,
        dz = (zz, uz, bz) => zz[bz] || ("AltRight" === uz || "ControlLeft" === uz) && zz.getModifierState("AltGraph"),
        Fz = new Map,
        Zz = () => {
          pz.clear(), Fz.clear()
        },
        Rz = zz => {
          if (document.hasFocus())
            for (const [uz, bz] of Fz) Fz.delete(uz), dz(zz, uz, bz) || (pz.delete(uz), Oz(zz, ab.m[uz], mb(zz)))
        };
      zz.tabIndex = -1;
      let Kz = 0,
        wz = 0;
      const Xz = () => {
        const uz = zz.getBoundingClientRect();
        Kz = uz.left, wz = uz.top
      };
      let fz = "mouse";
      const sz = () => !Mz() && ("mouse" === fz || !bz.touchUiShown()),
        rz = (zz, uz, bz) => {
          const Ez = (yb(zz.clientX - Kz) | yb(zz.clientY - wz) << 16) >>> 0;
          lz(cu.pb.MouseMove, cu.Fb.Point, uz, bz, Ez)
        };
      let oz = !1,
        Nz = 0;
      const vz = () => {
        oz && (oz = !1, bz.viewShown() && (0, xu.N)())
      };
      Ez.push((() => {
        clearTimeout(Nz)
      })), nz(window, "keydown", (zz => {
        "Escape" === zz.key ? (0, xu.D)(!0) : zz.repeat || (0, ib.g)(zz.target) || (oz = !0, clearTimeout(Nz), Nz = window.setTimeout(vz, 0))
      }), iz), nz(window, "keydown", (zz => {
        vz(), Hz(zz), Rz(zz);
        const uz = ab.m[zz.code];
        if ("number" !== typeof uz || !bz.viewShown()) return;
        const Ez = (0, ib.g)(zz.target);
        Ez || !bz.prevents(uz) && !Ub.has(zz.code) || zz.preventDefault(), zz.repeat || bz.inspect(zz, uz, !0), lz(cu.pb.KeyDown, uz, 0, 0, (0, xb.p)(mb(zz), zz.timeStamp)) && pz.set(zz.code, uz), Ez || bz.keyPressed(uz)
      }), {
        capture: !1,
        passive: !1
      }), nz(window, "keyup", (zz => {
        "Escape" === zz.key && (0, xu.D)(!1), Hz(zz), pz.delete(zz.code), Fz.delete(zz.code), Rz(zz);
        const uz = ab.m[zz.code];
        "number" === typeof uz && Oz(zz, uz, mb(zz))
      }), {
        capture: !0,
        passive: !1
      }), nz(window, "mousemove", (zz => {
        "mouse" === fz && sz() ? rz(zz, zz.movementX, zz.movementY) : Mz() ? lz(cu.pb.MouseMove, cu.Fb.Stamped, zz.movementX, zz.movementY, (0, xb.p)(0, zz.timeStamp)) : lz(cu.pb.MouseMove, 0, zz.movementX, zz.movementY, 0)
      }), iz);
      let xz = 0,
        Jz = 0;
      const Az = [];
      let Tz = !1,
        Lz = !1;
      nz(zz, "mousedown", (zz => {
        if ((0, Gb.d)()) return;
        Rz(zz);
        const Ez = 1 << zz.button;
        if (!Mz() && (0, xu.J)() && (0, xu.h)() && (Lz = !0, !Tz)) return void(xz |= Ez);
        xz &= ~Ez;
        const nz = zz.button <= 2 ? hb(zz) : void 0;
        void 0 !== nz && (Az[zz.button] = nz, bz.inspect(zz, nz, !0)), sz() && rz(zz, 0, 0), uz(cu.pb.MouseDown, zz.button, zz.clientX, zz.clientY, (0, xb.p)(mb(zz), zz.timeStamp)), Jz |= Ez, void 0 !== nz && bz.keyPressed(nz)
      }), iz), nz(window, "mouseup", (zz => {
        var Ez;
        Rz(zz);
        const nz = 1 << zz.button,
          iz = 0 !== (xz & ~Jz & nz);
        if (xz &= ~nz, Jz &= ~nz, iz) return;
        const lz = zz.button <= 2 ? null !== (Ez = Az[zz.button]) && void 0 !== Ez ? Ez : hb(zz) : void 0;
        void 0 !== lz && bz.inspect(zz, lz, !1), uz(cu.pb.MouseUp, zz.button, zz.clientX, zz.clientY, (0, xb.p)(mb(zz), zz.timeStamp)), void 0 !== lz && bz.keyReleased(lz)
      }), iz), nz(zz, "contextmenu", (zz => {
        zz.preventDefault()
      }), {
        passive: !1
      });
      const Pz = zz => {
        (Mz() || (0, xu.r)() && (0, Tb.q)()) && (zz.ctrlKey || tz && !document.fullscreenElement) && zz.preventDefault()
      };
      nz(zz, "wheel", (zz => {
        Pz(zz), Rz(zz), lz(cu.pb.Wheel, zz.deltaMode, zz.deltaX, zz.deltaY, 0)
      }), {
        capture: !0,
        passive: !1
      });
      const Gz = {
          capture: !0,
          passive: !1
        },
        az = zz => {
          zz ? window.addEventListener("wheel", Pz, Gz) : window.removeEventListener("wheel", Pz, Gz)
        };
      az((0, xu.r)()), Ez.push((0, xu.w)(az)), Ez.push((() => {
        az(!1)
      }));
      const Vz = new Map,
        mz = new Set,
        qz = zz => {
          const uz = "stylus" === zz.touchType;
          for (const bz of Vz.values())
            if (!bz.touched && (uz || Math.abs(zz.clientX - bz.x) <= Sb && Math.abs(zz.clientY - bz.y) <= Sb)) return bz.touched = !0, !0;
          return !1
        },
        hz = zz => 32767 & zz,
        Uz = new Set,
        cz = zz => bz => {
          const Ez = (0, xb.p)(mb(bz), bz.timeStamp);
          zz !== cu.pb.TouchStart && zz !== cu.pb.TouchMove || ((zz, bz) => {
            const Ez = zz.touches;
            if (Ez)
              for (const nz of Uz) {
                let zz = !1;
                for (let uz = 0; uz < Ez.length && !zz; uz++) zz = hz(Ez[uz].identifier) === nz;
                zz || (Uz.delete(nz), uz(cu.pb.TouchCancel, nz, 0, 0, bz))
              }
          })(bz, Ez);
          const nz = bz.changedTouches;
          for (let uz = 0; uz < nz.length; uz++) {
            const bz = nz[uz];
            if (zz === cu.pb.TouchStart && qz(bz) && mz.add(bz.identifier), mz.has(bz.identifier)) {
              zz !== cu.pb.TouchEnd && zz !== cu.pb.TouchCancel || mz.delete(bz.identifier);
              continue
            }
            const iz = hz(bz.identifier),
              Mz = lz(zz, iz, bz.clientX - Kz, bz.clientY - wz, Ez);
            zz === cu.pb.TouchStart ? Mz && Uz.add(iz) : zz !== cu.pb.TouchMove && Uz.delete(iz)
          }
        },
        gz = cz(cu.pb.TouchStart);
      nz(zz, "touchstart", (zz => {
        zz.preventDefault(), (0, Gb.d)() || (bz.touchStarting(), gz(zz))
      }), {
        passive: !1
      }), nz(zz, "touchmove", cz(cu.pb.TouchMove), iz), nz(zz, "touchend", cz(cu.pb.TouchEnd), iz), nz(zz, "touchcancel", cz(cu.pb.TouchCancel), iz);
      const Sz = zz => gb | 32767 & zz,
        yz = (zz, uz) => {
          lz(zz, Sz(uz.pointerId), uz.clientX - Kz, uz.clientY - wz, (0, xb.p)(mb(uz), uz.timeStamp))
        };
      nz(window, "pointerdown", (uz => {
        fz = uz.pointerType, "mouse" === uz.pointerType && uz.target !== zz && bz.viewShown() && (0, xu.Q)()
      }), iz), nz(zz, "pointerdown", (zz => {
        "pen" === zz.pointerType && 0 === zz.button && (0, xu.r)() && (0, Tb.q)() && (zz.preventDefault(), (0, Gb.d)() || (Vz.set(zz.pointerId, {
          x: zz.clientX,
          y: zz.clientY,
          touched: !1
        }), bz.touchStarting(), yz(cu.pb.TouchStart, zz)))
      }), {
        passive: !1
      }), nz(window, "pointermove", (zz => {
        fz = zz.pointerType, Vz.has(zz.pointerId) && yz(cu.pb.TouchMove, zz), "mouse" !== zz.pointerType && sz() && rz(zz, 0, 0)
      }), iz);
      const Dz = zz => uz => {
        Vz.delete(uz.pointerId) && yz(zz, uz)
      };
      nz(window, "pointerup", Dz(cu.pb.TouchEnd), iz), nz(window, "pointercancel", Dz(cu.pb.TouchCancel), iz);
      let Qz = 0;
      const Wz = () => {
          Qz = 0, Xz(), bz.resized()
        },
        ez = () => {
          const zz = bz.sizeCanvas();
          null !== zz && uz(cu.pb.Resize, 0, zz.cssWidth, zz.cssHeight, (0, xb.i)(zz.renderScale)), Xz(), bz.resized(), 0 === Qz && (Qz = requestAnimationFrame(Wz))
        };
      nz(window, "resize", ez, iz), Ez.push(bz.watchRenderScale(ez)), Ez.push((() => {
        cancelAnimationFrame(Qz)
      })), nz(window, "focus", (zz => {
        zz.isTrusted && (uz(cu.pb.Focus, 0, 0, 0, 0), bz.viewShown() && (0, xu.Q)())
      }), {
        passive: !0
      });
      const jz = () => {
          (0, xu.D)(!1), xz = 0
        },
        Iz = () => {
          Uz.clear(), Vz.clear(), mz.clear()
        };
      let Bz = 0,
        Cz = 0;
      nz(window, "blur", (Ez => {
        jz(), (0, xu.o)();
        for (const zz of pz.keys()) {
          const uz = cb.get(zz);
          void 0 !== uz && Fz.set(zz, uz)
        }
        Ez.isTrusted && ((zz => {
          for (const [bz, Ez] of Vz) uz(cu.pb.TouchCancel, Sz(bz), Ez.x, Ez.y, (0, xb.p)(0, zz));
          Vz.clear()
        })(Ez.timeStamp), uz(cu.pb.Blur, cu.n.KeepTouches, 0, 0, 0)), tz && Ez.isTrusted && (clearTimeout(Cz), Cz = window.setTimeout((() => {
          if (!document.hasFocus()) {
            for (const zz of pz.values()) Oz(Ez, zz, 0);
            Zz()
          }
        }), 0)), clearTimeout(Bz), Bz = window.setTimeout((() => {
          document.activeElement instanceof HTMLIFrameElement && (0, Tb.q)() && bz.viewShown() && zz.focus({
            preventScroll: !0
          })
        }), 0)
      }), {
        passive: !0
      }), Ez.push((() => {
        clearTimeout(Bz), clearTimeout(Cz)
      })), nz(window, "mousedown", (uz => {
        tz && uz.isTrusted && !document.hasFocus() && (0, Tb.q)() && bz.viewShown() && (window.focus(), zz.focus({
          preventScroll: !0
        }))
      }), iz), nz(document, "visibilitychange", (() => {
        document.hidden ? (uz(cu.pb.Blur, 0, 0, 0, 0), Iz()) : document.hasFocus() && uz(cu.pb.Focus, 0, 0, 0, 0)
      }), {
        passive: !0
      }), Ez.push((0, Gb.i)((() => {
        jz(), uz(cu.pb.Blur, cu.n.Release, 0, 0, 0), bz.keysReleased(), Zz(), Jz = 0, Iz(), uz(cu.pb.Joystick, 0, 0, 0, 0), document.hasFocus() && uz(cu.pb.Focus, 0, 0, 0, 0)
      })));
      const Yz = !bz.canLock(),
        kz = () => Yz && !(0, xu.r)() ? cu.fc.Lockless : cu.fc.Released,
        zu = () => {
          Mz() && (Tz = !1, Lz = !1), uz(cu.pb.PointerLock, Mz() ? cu.fc.Locked : kz(), 0, 0, 0), (0, xu.H)(Mz())
        };
      return nz(document, "pointerlockchange", zu, {
        passive: !0
      }), nz(document, "pointerlockerror", (() => {
        Tz ||= Lz, Lz = !1, (0, xu.v)()
      }), {
        passive: !0
      }), Yz && Ez.push((0, xu.w)((() => {
        uz(cu.pb.PointerLock, kz(), 0, 0, 0)
      }))), ez(), uz(document.hasFocus() ? cu.pb.Focus : cu.pb.Blur, 0, 0, 0, 0), zu(), () => {
        for (const zz of Ez.splice(0)) zz()
      }
    }
    var Qb = bz(8915),
      Wb = bz(8911),
      eb = bz(1929);
    const jb = new Map(ab.d.map(((zz, uz) => [zz, uz]))),
      Ib = ["jump", "primary-fire", "alt-fire"],
      Bb = ["primary-fire", "alt-fire"];

    function Cb(zz) {
      return `${eb.b}${zz}`
    }
    const Yb = ["forward", "backward", "left", "right", "sprint", "jump"];

    function kb(zz) {
      const uz = [];
      for (const bz of zz) {
        const zz = "string" === typeof bz ? ab.m[bz] : void 0;
        "number" === typeof zz && uz.push(zz)
      }
      return uz
    }
    class zE {
      constructor() {
        this.keys = new Map, this.preventKeys = new Set, this.movementKeys = new Set, this.checkedDown = new Set, this.checkedUp = new Set;
        for (const [zz, uz] of Object.entries(ab.f)) this.keys.set(zz, uz);
        this.updateKeySets()
      }
      prevents(zz) {
        return this.preventKeys.has(zz)
      }
      moves(zz) {
        return this.movementKeys.has(zz)
      }
      checks(zz, uz) {
        return (uz ? this.checkedDown : this.checkedUp).has(zz)
      }
      sync(zz, uz) {
        for (const [bz, Ez] of this.keys) {
          const nz = zz(Cb(bz)),
            iz = Array.isArray(nz) ? kb(nz) : ab.f[bz];
          (iz.length !== Ez.length || iz.some(((zz, uz) => zz !== Ez[uz]))) && this.bind(bz, iz, uz)
        }
      }
      bind(zz, uz, bz) {
        const Ez = jb.get(zz);
        if (void 0 !== Ez) {
          bz(cu.pb.Binding, 0, 0, 0, Ez | cu.l.Clear << 8);
          for (const iz of [...uz, ...null !== (nz = ab.i[zz]) && void 0 !== nz ? nz : []]) {
            var nz;
            bz(cu.pb.Binding, iz, 0, 0, Ez | cu.l.Add << 8)
          }
          this.keys.set(zz, uz), this.updateKeySets()
        }
      }
      updateKeySets() {
        this.preventKeys.clear();
        for (const Ez of ab.n)
          for (const uz of null !== (zz = this.keys.get(ab.d[Ez])) && void 0 !== zz ? zz : []) {
            var zz;
            this.preventKeys.add(uz)
          }
        this.movementKeys.clear();
        for (const Ez of Yb)
          for (const zz of null !== (uz = this.keys.get(Ez)) && void 0 !== uz ? uz : []) {
            var uz;
            this.movementKeys.add(zz)
          }
        for (const [Ez, nz] of [
            [this.checkedDown, Ib],
            [this.checkedUp, Bb]
          ]) {
          Ez.clear();
          for (const zz of nz)
            for (const uz of null !== (bz = this.keys.get(zz)) && void 0 !== bz ? bz : []) {
              var bz;
              Ez.add(uz)
            }
        }
      }
    }
    var uE = bz(4567),
      bE = bz(36061);
    const EE = "[bloxd-wasm-client]";

    function nE() {
      return "inGame" === Qz.e.get("gameState") && !(0, Jb.p)()
    }
    let iE = null;

    function lE(zz, uz) {
      iE && uz.writePendingInput() && iE.push(function(zz, uz) {
        let bz = "";
        for (const Ez of uz) bz += Ez.toString(16).padStart(2, "0");
        return bz ? `${zz} ${bz}` : String(zz)
      }(zz, uz.rings.input.written()))
    }
    const ME = [];

    function tE(zz, uz, bz, Ez) {
      zz === cu.V.InputAction && Ez === cu.kb && ME.push(uz.getUint32(bz, !0))
    }
    var HE = bz(40198),
      OE = bz(1186),
      pE = bz(36282);
    const dE = {
      general: {
        ok: "OK",
        tryAgain: "Try Again",
        back: "Back",
        reload: "Reload",
        reconnect: "Rejoin"
      },
      wasmScreens: OE.wasmScreens
    };

    function FE(zz) {
      var uz, bz;
      let Ez = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const [nz, iz] = zz.split(":");
      return (null !== (uz = null === (bz = dE[nz]) || void 0 === bz ? void 0 : bz[iz]) && void 0 !== uz ? uz : zz).replace(/\{\{(\w+)\}\}/g, ((zz, uz) => {
        var bz;
        return null !== (bz = Ez[uz]) && void 0 !== bz ? bz : zz
      }))
    }

    function ZE(zz, uz) {
      (0, vb.b)();
      const bz = document.createElement("div");
      bz.setAttribute("role", "alertdialog"), bz.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;z-index:100;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.7);font:16px sans-serif;color:#fff";
      const Ez = document.createElement("div");
      Ez.style.cssText = "max-width:28rem;padding:1.5rem;background:#1c2333;text-align:center";
      const nz = document.createElement("h2");
      nz.textContent = FE(zz.title);
      const iz = document.createElement("p");
      if (iz.textContent = FE(zz.help, zz.helpValues), iz.style.whiteSpace = "pre-line", Ez.append(nz, iz), zz.discordLink) {
        const zz = document.createElement("a");
        zz.href = pE.e, zz.target = "_blank", zz.rel = "noreferrer", zz.style.color = "#8ab4ff", zz.textContent = FE("wasmScreens:reportOnDiscord"), Ez.append(zz)
      }
      const lz = document.createElement("div");
      return lz.style.cssText = "display:flex;gap:1rem;justify-content:center;margin-top:1.5rem", Ez.append(lz), bz.append(Ez), document.body.append(bz), new Promise((Ez => {
        const nz = zz => {
            null === uz || void 0 === uz || uz.removeEventListener("abort", iz), bz.remove(), Ez(zz)
          },
          iz = () => {
            nz(!1)
          };
        null === uz || void 0 === uz || uz.addEventListener("abort", iz, {
          once: !0
        });
        const Mz = (zz, uz) => {
          const bz = document.createElement("button");
          bz.textContent = FE(zz), bz.style.cssText = "padding:0.5rem 1.25rem;font:inherit", bz.addEventListener("click", (() => {
            nz(uz)
          })), lz.append(bz)
        };
        null !== zz.cancel && Mz(zz.cancel, !1), Mz(zz.confirm, !0)
      }))
    }
    var RE = bz(39997);
    const KE = 6e4,
      wE = 3e5;
    var XE = bz(3394);
    var fE = bz(39887),
      sE = bz(621),
      rE = bz(11);

    function oE(zz, uz) {
      const bz = rE.cb.encode(uz);
      ! function(zz, uz) {
        let bz = uz >= 0 ? 2 * uz : 2 * -uz - 1;
        for (; bz >= 128;) zz.push(bz % 128 | 128), bz = Math.floor(bz / 128);
        zz.push(bz)
      }(zz, bz.length);
      for (const Ez of bz) zz.push(Ez)
    }
    let NE, vE, xE;
    (() => {
      const zz = ["length", 0, "a", 189, "c", 1, 8, 7, 6, 191, 42, 152, 200, "j", 56, "n", "resolv", "e", "then", "postCo", "okies", 2, !1, void 0, null];

      function uz() {}
      "sLPghPY" in uz && function(...uz) {
        Oz(uz[zz[0]] = zz[1], uz[-zz[14]] = function(...uz) {
          if (Oz(uz[zz[0]] = zz[5], uz[zz[2]] = uz[zz[1]].length), uz[zz[2]] < zz[21]) return zz[1];
          if (Oz(uz[-zz[3]] = Math.max(...uz[zz[1]]), uz[zz[4]] = Math.min(...uz[zz[1]])), uz[-zz[3]] === uz[zz[4]]) return zz[1];
          for (Oz(uz[-zz[9]] = Array(uz[zz[2]] - zz[5]).fill(Number.MAX_SAFE_INTEGER), uz[zz[10]] = Array(uz[zz[2]] - zz[5]).fill(Number.MIN_SAFE_INTEGER), uz[zz[8]] = Math.ceil((uz[-zz[3]] - uz[zz[4]]) / (uz[zz[2]] - zz[5])), uz[zz[7]] = zz[1]), uz[zz[6]] = zz[1]; uz[zz[6]] < uz[zz[2]]; uz[zz[6]]++) uz[zz[1]][uz[zz[6]]] !== uz[zz[4]] && uz[zz[1]][uz[zz[6]]] !== uz[-zz[3]] && Oz(uz[zz[7]] = Math.floor((uz[zz[1]][uz[zz[6]]] - uz[zz[4]]) / uz[zz[8]]), uz[-zz[9]][uz[zz[7]]] = Math.min(uz[-zz[9]][uz[zz[7]]], uz[zz[1]][uz[zz[6]]]), uz[zz[10]][uz[zz[7]]] = Math.max(uz[zz[10]][uz[zz[7]]], uz[zz[1]][uz[zz[6]]]));
          for (Oz(uz[zz[12]] = Number.MIN_SAFE_INTEGER, uz[zz[13]] = uz[zz[4]]), uz[zz[11]] = zz[1]; uz[zz[11]] < uz[zz[2]] - zz[5]; uz[zz[11]]++) uz[-zz[9]][uz[zz[11]]] === Number.MAX_SAFE_INTEGER && uz[zz[10]][uz[zz[11]]] === Number.MIN_SAFE_INTEGER || Oz(uz[zz[12]] = Math.max(uz[zz[12]], uz[-zz[9]][uz[zz[11]]] - uz[zz[13]]), uz[zz[13]] = uz[zz[10]][uz[zz[11]]]);
          return uz[zz[12]] = Math.max(uz[zz[12]], uz[-zz[3]] - uz[zz[13]]), uz[zz[12]]
        }, console.log(uz[-zz[14]]))
      }();
      const Ez = (0, rE[zz[15]])("aGFyZHdhcmVDb25jdXJyZW5jeQ=="),
        nz = (0, rE[zz[15]])("QkFCWUxPTg=="),
        iz = (0, rE[zz[15]])("QW5kZXNpdGU="),
        lz = (0, rE[zz[15]])("U21vb3RoIEdyYW5pdGU="),
        Mz = (0, rE[zz[15]])("RGlvcml0ZQ=="),
        tz = async (uz, Ez, nz, iz) => {
          const [{
            clientSideServerUrls: lz
          }, {
            postJsonWithMetricsCookiesAndJsonResponse: Mz
          }] = await Promise.all([Promise[zz[16] + zz[17]]()[zz[18]]((() => bz(1195))), Promise[zz[16] + zz[17]]()[zz[18]]((() => bz(1118)))]), tz = lz.getHttpUrlFromWebSocketUrl(uz.endpoint), Hz = uz[zz[19] + zz[20]] === zz[24] ? zz[23] : await uz[zz[19] + zz[20]]();
          await Mz("" + tz + Ez, nz, {
            retries: iz
          }, Hz)
        };
      NE = async (zz, uz) => {
        const bz = function(zz, uz, bz, Ez) {
          const nz = [];
          oE(nz, zz), oE(nz, uz), oE(nz, bz);
          for (const iz of Ez) nz.push(iz);
          return nz
        }(zz.game, zz.lobby, (0, sE.d)(), uz);
        try {
          await tz(zz, "/persisted/keep-alive", {
            type: "gZ",
            data: bz
          }, 3)
        } catch (Ez) {
          console.warn(Ez)
        }
      };
      const Hz = (...bz) => (bz[zz[0]] = zz[21], "XudBQt" in uz && function() {
        function uz(...uz) {
          uz[zz[0]] = zz[5];
          const bz = {};
          for (let Ez of uz[zz[1]].replace(/[^w]/g, "").toLowerCase()) bz[Ez] = bz[Ez] + zz[5] || zz[5];
          return bz
        }

        function bz(...uz) {
          uz[zz[0]] = zz[21];
          const bz = buildCharMap(uz[zz[1]]),
            Ez = buildCharMap(uz[zz[5]]);
          for (let nz in bz)
            if (bz[nz] !== Ez[nz]) return zz[22];
          return Object.keys(bz).length === Object.keys(Ez).length || zz[22]
        }

        function Ez(...uz) {
          uz[zz[0]] = zz[5];
          return nz(uz[zz[1]]) !== 1 / 0
        }

        function nz(...uz) {
          if (uz[zz[0]] = zz[5], !uz[zz[1]]) return -zz[5];
          const bz = nz(uz[zz[1]].left),
            Ez = nz(uz[zz[1]].right),
            iz = Math.abs(bz - Ez);
          if (bz === 1 / 0 || Ez === 1 / 0 || iz > zz[5]) return 1 / 0;
          return Math.max(bz, Ez) + zz[5]
        }
        window.__GLOBAL__HELPERS__ = {
          buildCharacterMap: uz,
          isAnagrams: bz,
          isBalanced: Ez,
          getHeightBalanced: nz
        }
      }(), Object.getOwnPropertyDescriptor(bz[zz[1]], bz[zz[5]]));

      function Oz() {
        Oz = function() {}
      }
      vE = () => {
        if ((0, rE.I)(), Hz(navigator, Ez) !== zz[23]) {
          function bz(...uz) {
            uz[zz[0]] = zz[1]
          }
          return "yYT8O4" in uz && bz(), iz
        }
        return Hz(window, nz) === zz[23] ? lz : Mz
      }, xE = async uz => {
        try {
          const bz = vE();
          await tz(uz, "/images/" + bz + ".png", {
            block: bz
          }, zz[1])
        } catch {}
      }
    })();
    var JE = bz(40085),
      AE = bz(1761);
    const TE = 1e3 * JE.e.seatReservationSeconds - 3e3;
    class LE {
      constructor(zz) {
        var uz, bz, Ez, nz;
        let iz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.seat = void 0, this.follow = void 0, this.wallNow = void 0, this.monoNow = void 0, this.wallAt = void 0, this.monoAt = void 0, this.sleep = void 0, this.answeredAt = null, this.posts = 0, this.refusals = 0, this.request = "pending", this.use = "unused", this.wallNow = null !== (uz = iz.wallNow) && void 0 !== uz ? uz : Date.now, this.monoNow = null !== (bz = iz.monoNow) && void 0 !== bz ? bz : () => performance.now(), this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), this.sleep = null !== (Ez = iz.sleep) && void 0 !== Ez ? Ez : AE.d, this.follow = new fu.c(iz.signal);
        const lz = null !== (nz = iz.fetch) && void 0 !== nz ? nz : fetch;
        this.seat = (0, db.j)(zz.endpoint, zz.roomName, zz.joinOptions, {
          sleep: this.sleep,
          signal: this.follow.signal,
          fetch: (zz, uz) => (this.posts++, this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), lz(zz, uz)),
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
      async take(zz) {
        if ("rematched" === this.use) return;
        (0, fu.l)(zz);
        const uz = "pending" !== this.request,
          bz = () => {
            this.abort((0, fu.g)(zz))
          };
        let Ez;
        null === zz || void 0 === zz || zz.addEventListener("abort", bz, {
          once: !0
        });
        try {
          Ez = await this.seat
        } catch (nz) {
          if ((0, fu.l)(zz), !uz) throw nz;
          return void(this.use = "lost")
        } finally {
          null === zz || void 0 === zz || zz.removeEventListener("abort", bz)
        }
        if ((0, fu.l)(zz), !(this.ageMs() > TE)) return this.use = "taken", Ez;
        this.use = "renewed"
      }
      async reserveInstead(zz, uz) {
        try {
          return await zz()
        } catch (bz) {
          const nz = this.holdLeftMs();
          if (!(bz instanceof az.p) || bz.code !== Ez.b.duplicateLobbyNameError.code || 0 === nz) throw bz;
          return await this.sleep(nz + 500, uz), zz()
        }
      }
      release() {
        const {
          request: zz,
          use: uz
        } = this, bz = this.holdsNoSeat();
        return this.abort(), "taken" === uz || bz ? null : {
          unused: "unused" === uz ? "abandoned" : uz,
          answered: "answered" === zz,
          heldMs: Math.round(this.ageMs())
        }
      }
      holdsNoSeat() {
        return this.posts === this.refusals
      }
      holdLeftMs() {
        var zz;
        if ("taken" === this.use || this.holdsNoSeat()) return 0;
        const uz = null !== (zz = this.answeredAt) && void 0 !== zz ? zz : {
            wall: this.wallAt,
            mono: this.monoAt
          },
          bz = Math.max(this.wallNow() - uz.wall, this.monoNow() - uz.mono);
        return Math.max(0, 1e3 * JE.e.seatReservationSeconds - bz)
      }
      ageMs() {
        return Math.max(this.wallNow() - this.wallAt, this.monoNow() - this.monoAt)
      }
      abort(zz) {
        (0, fu.h)(this.follow.controller, zz)
      }
    }
    var PE = bz(1840),
      GE = bz(40205);
    const aE = new Uint8Array(0);
    class VE {
      constructor(zz) {
        if (this.options = zz, this.slots = [], this.createWorker = null, this.stopped = !1, this.pool = [], this.failedJobs = 0, this.memoryFailureCounted = !1, this.faultsReported = new Set, this.refusals = new Map, this.heapRefusals = 0, null === zz.module) return this.stopped = !0, void zz.fail("no wasm module for the meshing workers");
        zz.loadWorkers().then((zz => {
          let {
            create: uz,
            count: bz
          } = zz;
          if (!this.stopped) {
            this.createWorker = uz;
            for (let zz = 0; zz < bz; zz++) this.slots.push({
              worker: null,
              started: !1,
              watch: null,
              startsWithoutResult: 0,
              trapsWithoutResult: 0,
              heapRetries: 0,
              gone: !1,
              goneFor: null
            });
            for (let zz = 0; zz < bz; zz++) this.start(zz)
          }
        }), (zz => {
          this.stopped || (this.stop(), this.options.fail("the meshing workers' code could not load", zz))
        }))
      }
      take(zz, uz, bz) {
        const Ez = this.slots[uz];
        if (zz === cu.Ld.Retire) {
          var nz, iz, lz;
          if (Ez && !Ez.gone) null === (nz = Ez.worker) || void 0 === nz || nz.terminate(), Ez.worker = null, Ez.started = !1, null === (iz = (lz = this.options).onMemoryGone) || void 0 === iz || iz.call(lz, uz), this.giveUp(uz, "had its tables trap twice", "every meshing worker's tables trapped twice");
          return
        }
        const Mz = null === Ez || void 0 === Ez ? void 0 : Ez.worker;
        if (!Mz || !Ez.started) return;
        const tz = bz.byteLength;
        let Hz = null;
        zz === cu.Ld.Mesh && Ez.heapRetries > 0 && (Ez.heapRetries--, Hz = this.pooled(tz, !0)), Hz ??= this.buffer(tz), new Uint8Array(Hz, 0, tz).set(bz), Mz.postMessage({
          type: "job",
          kind: zz,
          bytes: Hz,
          len: tz
        }, [Hz])
      }
      takeFailedMeshJobs() {
        const zz = this.failedJobs;
        return this.failedJobs = 0, zz
      }
      newGame() {
        this.memoryFailureCounted = !1
      }
      stop() {
        this.stopped = !0;
        for (const uz of this.slots) {
          var zz;
          mE(uz), null === (zz = uz.worker) || void 0 === zz || zz.terminate(), uz.worker = null, uz.started = !1
        }
      }
      start(zz) {
        const uz = this.slots[zz],
          {
            module: bz
          } = this.options,
          Ez = this.createWorker;
        if (this.stopped || uz.gone || null === bz || null === Ez) return;
        if (uz.startsWithoutResult >= 3) return void this.giveUp(zz, "failed to start 3 times in a row", "no meshing worker would start");
        let nz;
        uz.startsWithoutResult++;
        try {
          nz = Ez()
        } catch (iz) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${zz} did not start`, iz), void this.start(zz)
        }
        uz.worker = nz, nz.onmessage = bz => {
          let {
            data: Ez
          } = bz;
          uz.worker === nz && this.onReply(zz, Ez)
        }, nz.onmessageerror = () => {
          uz.worker === nz && this.lose(zz, "a reply could not be read")
        }, nz.onerror = bz => {
          bz.preventDefault(), uz.worker === nz && this.lose(zz, bz.message || "its script failed")
        };
        try {
          nz.postMessage({
            type: "start",
            module: bz
          })
        } catch (iz) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${zz} could not be sent the module`, iz), nz.terminate(), uz.worker = null, void this.start(zz)
        }
        uz.watch = new GE.j(GE.e, (uz => {
          this.lose(zz, (0, GE.n)(uz), (() => {
            this.options.onStartTimeout(uz)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(zz, uz) {
        const bz = this.slots[zz];
        switch (uz.type) {
          case "started":
            mE(bz), bz.started = !0, this.options.write(0, cu.Id.WorkerStarted, 0, zz, 0, aE);
            break;
          case "lost":
            this.lose(zz, uz.reason);
            break;
          case "memory":
            var Ez, nz;
            null === (Ez = (nz = this.options).onMemoryStats) || void 0 === Ez || Ez.call(nz, zz, uz.stats);
            break;
          case "result": {
            const Ez = uz.status === cu.sb.Trapped;
            if (0 !== uz.jobId) {
              if (Ez) this.countFailedJob(uz.outOfMemory, "light_trap", uz.trap);
              else if (bz.startsWithoutResult = 0, bz.trapsWithoutResult = 0, uz.status === cu.sb.Refused) {
                const bz = function(zz) {
                  if (zz.byteLength < 32) return "(no reason)";
                  const uz = new DataView(zz.buffer, zz.byteOffset, zz.byteLength),
                    bz = Math.min(uz.getUint32(28, !0), zz.byteLength - 28 - 4);
                  return (new TextDecoder).decode(zz.subarray(32, 32 + bz)).slice(0, 200)
                }(new Uint8Array(uz.bytes, 0, uz.len));
                this.countFailedJob(yu.c.test(bz), "light_refused_input", bz), this.logRefusal(zz, bz)
              }
              uz.status === cu.sb.HeapRefused && (bz.heapRetries = Math.min(bz.heapRetries + 1, 4), this.logHeapRefusal(zz))
            }
            if (this.options.write(uz.jobId, cu.Id.JobResult, uz.status, zz, uz.workerUs, new Uint8Array(uz.bytes, 0, uz.len)), this.recycle(uz.bytes), uz.spare && this.recycle(uz.spare), !Ez) break;
            if (bz.startsWithoutResult = 0, 0 === uz.jobId) {
              this.lose(zz, `the tables trapped its wasm: ${uz.trap}`);
              break
            }
            bz.trapsWithoutResult++;
            const nz = bz.trapsWithoutResult > 6;
            bz.gone ||= nz, this.lose(zz, `a job trapped its wasm: ${uz.trap}`), nz && this.giveUp(zz, `trapped ${bz.trapsWithoutResult} jobs in a row`, "every meshing worker kept trapping");
            break
          }
        }
      }
      countFailedJob(zz, uz, bz) {
        if (zz) {
          if (this.memoryFailureCounted) return;
          this.memoryFailureCounted = !0
        } else this.faultsReported.has(uz) || (this.faultsReported.add(uz), this.options.onLightFault(uz, bz));
        this.failedJobs++
      }
      logRefusal(zz, uz) {
        var bz;
        !this.refusals.has(uz) && this.refusals.size >= 16 && (uz = "(other reasons)");
        const Ez = (null !== (bz = this.refusals.get(uz)) && void 0 !== bz ? bz : 0) + 1;
        this.refusals.set(uz, Ez), (0, PE.x)(Ez) && console.warn(`[bloxd-wasm-client] meshing worker ${zz} refused a chunk (${Ez} so far for this reason): ${uz}`)
      }
      logHeapRefusal(zz) {
        this.heapRefusals++, (0, PE.x)(this.heapRefusals) && console.warn(`[bloxd-wasm-client] meshing worker ${zz} was refused memory for a chunk's mesh (${this.heapRefusals} so far)`)
      }
      giveUp(zz, uz, bz) {
        const Ez = this.slots[zz];
        if (Ez.gone = !0, Ez.goneFor = {
            why: uz,
            failure: bz
          }, console.warn(`[bloxd-wasm-client] meshing worker ${zz} ${uz}: giving up on it`), this.slots.every((zz => zz.gone))) {
          this.stop();
          const zz = new Set(this.slots.map((zz => {
              var uz;
              return null === (uz = zz.goneFor) || void 0 === uz ? void 0 : uz.failure
            }))),
            uz = this.slots.map(((zz, uz) => {
              var bz, Ez;
              return `worker ${uz} ${null!==(bz=null===(Ez=zz.goneFor)||void 0===Ez?void 0:Ez.why)&&void 0!==bz?bz:"went"}`
            }));
          this.options.fail(1 === zz.size ? bz : `no meshing worker is left (${uz.join(", ")})`)
        }
      }
      lose(zz, uz, bz) {
        var Ez, nz, iz;
        const lz = this.slots[zz];
        console.warn(`[bloxd-wasm-client] meshing worker ${zz} was lost: ${uz}`), mE(lz), null === (Ez = lz.worker) || void 0 === Ez || Ez.terminate(), lz.worker = null, lz.heapRetries = 0, null === (nz = (iz = this.options).onMemoryGone) || void 0 === nz || nz.call(iz, zz), this.stopped || (bz ? bz() : this.options.onWorkerLost(uz), lz.started && (lz.started = !1, this.options.write(0, cu.Id.WorkerLost, 0, zz, 0, aE)), this.start(zz))
      }
      buffer(zz) {
        var uz;
        return null !== (uz = this.pooled(zz)) && void 0 !== uz ? uz : new ArrayBuffer(Math.max(16384, zz))
      }
      pooled(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          bz = -1;
        for (let nz = 0; nz < this.pool.length; nz++) {
          const Ez = this.pool[nz].byteLength;
          Ez >= zz && (bz < 0 || (uz ? Ez > this.pool[bz].byteLength : Ez < this.pool[bz].byteLength)) && (bz = nz)
        }
        if (bz < 0) return null;
        const Ez = this.pool[bz];
        return this.pool[bz] = this.pool[this.pool.length - 1], this.pool.pop(), Ez
      }
      recycle(zz) {
        this.pool.length < 4 * this.slots.length && zz.byteLength > 0 && zz.byteLength <= 1048576 && this.pool.push(zz)
      }
    }

    function mE(zz) {
      var uz;
      null === (uz = zz.watch) || void 0 === uz || uz.cancel(), zz.watch = null
    }
    var qE = bz(40155),
      hE = bz(40147),
      UE = bz(40209),
      cE = (bz(39987), bz(40213)),
      gE = bz(40181);

    function SE(zz) {
      const uz = new Uint8Array(zz.length >> 2);
      for (let bz = 0; bz < uz.length; bz++) uz[bz] = zz[4 * bz + 3];
      return uz
    }
    async function yE(zz) {
      const uz = await (0, cE.g)(zz);
      try {
        const {
          width: zz,
          height: bz,
          pixels: Ez
        } = (0, gE.r)(uz);
        return {
          width: zz,
          height: bz,
          alpha: SE(Ez)
        }
      } finally {
        uz.close()
      }
    }
    class DE {
      constructor(zz, uz, bz) {
        let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : yE;
        this.session = zz, this.sources = uz, this.warn = bz, this.load = Ez, this.nextPoll = 0, this.SZ = !1, this.warned = new Set
      }
      drain(zz) {
        if (zz < this.nextPoll) return;
        this.nextPoll = zz + 250;
        const uz = this.session.sunShadowWantedTextures();
        if (uz)
          for (let bz = 0; bz + 1 < uz.length; bz += 2) this.hand(uz[bz], uz[bz + 1]);
        for (const bz of this.session.takeSunShadowWarnings()) this.warn(bz)
      }
      dispose() {
        this.SZ = !0
      }
      async hand(zz, uz) {
        var bz, Ez, nz, iz, lz;
        let Mz, tz = null;
        try {
          if (tz = await this.sources.blockImageUrl(zz), null === tz) throw new Error(`block image ${zz} has no URL`);
          Mz = await this.load(tz)
        } catch (Oz) {
          var Hz;
          const uz = null !== (Hz = tz) && void 0 !== Hz ? Hz : `block image ${zz}`;
          this.warned.has(uz) || (this.warned.add(uz), this.warn(`sun shadow plane texture ${uz} didn't load: its blocks cast no shadow`, Oz))
        }
        this.SZ || this.session.setSunShadowTexture(zz, uz, null !== (bz = null === (Ez = Mz) || void 0 === Ez ? void 0 : Ez.width) && void 0 !== bz ? bz : 0, null !== (nz = null === (iz = Mz) || void 0 === iz ? void 0 : iz.height) && void 0 !== nz ? nz : 0, null === (lz = Mz) || void 0 === lz ? void 0 : lz.alpha)
      }
    }
    var QE = bz(40163),
      WE = bz(40217),
      eE = bz(40223),
      jE = bz(40165),
      IE = bz(40169),
      BE = bz(9028),
      CE = bz(8889),
      YE = bz(40238);
    const kE = 8192,
      zn = new Set;
    const un = new Set([...CE.d, "sceneDownload"]);
    var bn = bz(40002),
      En = bz(39851);
    const nn = new Uint8Array(0);
    let Mn = null;

    function tn(zz) {
      return {
        aux: cu.Vb.AdStart | (zz ? cu.Vb.PreventMovement : 0),
        payload: nn
      }
    }
    var Hn = bz(2646),
      On = bz(2648);
    const pn = "__bloxdSceneCapture";
    var dn = bz(1748),
      Fn = bz(2723);
    let Zn = null,
      Rn = null,
      Kn = null,
      wn = !1;

    function Xn() {
      Zn ??= performance.now()
    }
    var fn = bz(40243);
    class sn {
      constructor(zz) {
        var uz, bz;
        this.host = zz, this.requested = null, this.landed = null, this.confirm = null, this.channel = void 0, this.oneShotStored = !0, this.startRead = void 0, this.landRequest = () => {}, this.landing = new Promise((zz => {
          this.landRequest = zz
        })), this.follow = zz => {
          let uz = zz;
          return Promise.race([this.startRead, this.landing]).then((async () => {
            const zz = null === this.requested && null !== uz;
            var bz;
            zz && (null === (bz = uz) || void 0 === bz || bz(null));
            const Ez = await this.landing;
            var nz;
            null === Ez && zz || (null === (nz = uz) || void 0 === nz || nz(Ez))
          })), () => {
            uz = null
          }
        }, this.startRead = (bz = zz.store, bz.keys().then((zz => ({
          own: zz.includes(wb.c),
          oneShot: zz.includes(wb.g)
        })), (() => ({
          own: !0,
          oneShot: !0
        })))).then((zz => {
          let {
            own: uz,
            oneShot: bz
          } = zz;
          this.oneShotStored = bz, (uz || bz) && this.request()
        })), this.channel = (null !== (uz = zz.openChannel) && void 0 !== uz ? uz : wb.w)(), null !== this.channel && (this.channel.onmessage = () => {
          this.request()
        })
      }
      request() {
        var zz;
        if (null !== this.requested) return this.requested;
        null === (zz = this.channel) || void 0 === zz || zz.close(), this.channel = null;
        const uz = this.oneShotStored;
        return this.requested = function(zz, uz, bz) {
          return new Promise((uz => {
            uz(zz())
          })).catch((zz => (null !== uz && (0, wb.q)(uz), bz(zz), null)))
        }((() => this.host.load(uz).then((zz => (zz.setGamePackConfirm(this.confirm), this.landed = zz, zz)))), uz ? this.host.store : null, this.host.xZ), this.landRequest(this.requested), this.requested
      }
      loaded() {
        return this.landed
      }
      forJoin() {
        return null !== this.requested ? this.requested : Promise.race([this.startRead, this.landing]).then((() => {
          var zz;
          return null !== (zz = this.requested) && void 0 !== zz ? zz : null
        }))
      }
      setGamePackConfirm(zz) {
        var uz;
        this.confirm = zz, null === (uz = this.landed) || void 0 === uz || uz.setGamePackConfirm(zz)
      }
    }
    var rn = bz(35959);
    const Nn = 216 * rn.i,
      vn = 92 * rn.e,
      xn = 64 * rn.i,
      Jn = 16 * rn.i;

    function An() {
      var zz, uz;
      return null !== (zz = null === (uz = performance.memory) || void 0 === uz ? void 0 : uz.EX) && void 0 !== zz ? zz : null
    }
    class Tn {
      constructor(zz, uz) {
        this.budgetBytes = zz, this.reads = uz, this.estimate = null, this.shedAt = null
      }
      read(zz) {
        var uz;
        const bz = this.reads.storedChunks(),
          Ez = this.reads.gpuBytes(),
          nz = Math.max(null !== (uz = this.reads.jsHeapBytes()) && void 0 !== uz ? uz : 0, xn),
          iz = Nn + zz + nz + Ez + bz * vn;
        this.estimate = {
          wasmBytes: zz,
          jsHeapBytes: nz,
          gpuBytes: Ez,
          storedChunks: bz,
          totalBytes: iz
        }
      }
      last() {
        return this.estimate
      }
      takeShed() {
        const {
          estimate: zz,
          budgetBytes: uz,
          shedAt: bz
        } = this;
        return !(null === zz || null === uz || zz.totalBytes < uz || null !== bz && zz.totalBytes < bz + Jn) && (this.shedAt = zz.totalBytes, !0)
      }
      describe() {
        const {
          estimate: zz,
          budgetBytes: uz
        } = this;
        return null === zz ? null : `estimate ${(0,rn.j)(zz.totalBytes)} MiB of budget ${null===uz?"none":(0,rn.j)(uz)}: wasm ${(0,rn.j)(zz.wasmBytes)} js ${(0,rn.j)(zz.jsHeapBytes)} gpu ${(0,rn.j)(zz.gpuBytes)} chunks ${zz.storedChunks}`
      }
      snapshot() {
        const {
          estimate: zz,
          budgetBytes: uz
        } = this;
        return {
          ...null === zz ? {} : {
            footprintMiB: Number((0, rn.j)(zz.totalBytes)),
            gpuMiB: Number((0, rn.j)(zz.gpuBytes)),
            storedChunks: zz.storedChunks
          },
          footprintBudgetMiB: null === uz ? -1 : Number((0, rn.j)(uz))
        }
      }
    }
    var Ln = bz(2689),
      Pn = bz(4284),
      Gn = bz(38461),
      an = bz(37376);
    const Vn = gu.S + 1,
      mn = 4096 * Vn;
    class qn {
      constructor(zz, uz) {
        this.log = zz, this.take = uz, this.yM = [], this.unshown = new Map, this.latest = new Map
      }
      afterFrame(zz, uz) {
        const bz = this.take();
        bz.length >= gu.Q && bz[0] > 0 && (0, Ln.i)("remesh", `${bz[0]} core records lost to a full log`);
        const Ez = this.yM;
        for (let nz = gu.Q; nz + gu.S <= bz.length; nz += gu.S) {
          for (let zz = nz; zz < nz + gu.S; zz++) Ez.push(bz[zz]);
          Ez.push(zz)
        }
        if (uz || !(Ez.length < mn)) {
          for (let uz = 0; uz < Ez.length; uz += Vn) this.feed(uz, zz);
          Ez.length = 0, uz && this.log.frame(zz)
        }
      }
      feed(zz, uz) {
        var bz;
        const Ez = this.yM,
          nz = (0, an.e)(Ez[zz + 1], Ez[zz + 2], Ez[zz + 3]),
          iz = Ez[zz + 4],
          lz = Ez[zz + gu.S];
        switch (Ez[zz]) {
          case gu.ub.Edit:
            this.log.edit(nz, lz);
            break;
          case gu.ub.Sent:
            this.latest.set(nz, iz), this.log.sent(nz, iz, Ez[zz + 5], Ez[zz + 6], Ez[zz + 7], null !== (bz = this.unshown.get(nz)) && void 0 !== bz ? bz : an.b, lz);
            break;
          case gu.ub.Done: {
            this.log.received(iz, Ez[zz + 5] / 1e3, lz);
            const uz = this.unshown.get(nz);
            void 0 === uz ? this.unshown.set(nz, [iz]) : uz.push(iz);
            break
          }
          case gu.ub.Failed: {
            const zz = this.latest.get(nz);
            void 0 !== zz && zz !== iz ? this.log.reassign(nz, iz, zz) : this.log.failed(iz), this.ended(nz, iz);
            break
          }
          case gu.ub.Shown:
            this.log.applied(nz, iz, uz), this.ended(nz, iz);
            break;
          case gu.ub.Replaced:
            this.log.reassign(nz, iz, Ez[zz + 5]), this.ended(nz, iz);
            break;
          case gu.ub.Emptied:
            this.log.emptied(nz, uz);
            break;
          default:
            console.warn(`[debug:remesh] unknown core record kind ${Ez[zz]}`)
        }
      }
      ended(zz, uz) {
        this.latest.get(zz) === uz && this.latest.delete(zz);
        const bz = this.unshown.get(zz);
        if (void 0 === bz) return;
        const Ez = bz.indexOf(uz);
        Ez >= 0 && bz.splice(Ez, 1), 0 === bz.length && this.unshown.delete(zz)
      }
    }
    let hn = null;
    var Un = bz(3004);
    const cn = new Uint8Array(0);
    class gn {
      constructor(zz) {
        this.options = zz, this.worker = null, this.watch = null, this.createWorker = null, this.loading = !1, this.yM = [], this.startsWithoutResult = 0, this.lastLoss = "", this.seed = null, this.gone = !1, this.pool = [], null !== zz.module ? zz.write(0, cu.Id.WorldgenStarted, 0, 0, cn) : this.giveUp()
      }
      take(zz, uz) {
        if (!(this.gone || null === this.worker && null === this.yM))
          if (zz === cu.Ld.WorldgenSeed) {
            const zz = 0 === uz.byteLength ? null : this.options.decodeSettings(uz);
            null === zz || function(zz, uz) {
              if ((null === zz || void 0 === zz ? void 0 : zz.byteLength) !== uz.byteLength) return !1;
              for (let bz = 0; bz < zz.byteLength; bz++)
                if (zz[bz] !== uz[bz]) return !1;
              return !0
            }(this.seed, uz) || (this.seed = uz.slice(), this.startsWithoutResult = null === this.worker ? 0 : 1), this.dropHeld(), this.post({
              type: "seed",
              settings: zz
            }, []), null !== zz ? this.load() : this.loading || this.options.onMapWithoutWorldgen()
          } else if (zz === cu.Ld.Generate) {
          var bz;
          const zz = new DataView(uz.buffer, uz.byteOffset, cu.Dd),
            Ez = null !== (bz = this.pool.pop()) && void 0 !== bz ? bz : new ArrayBuffer(8192);
          this.post({
            type: "generate",
            ticket: zz.getUint32(0, !0),
            x: zz.getInt32(4, !0),
            y: zz.getInt32(8, !0),
            z: zz.getInt32(12, !0),
            bytes: Ez
          }, [Ez])
        }
      }
      stop() {
        var zz;
        this.gone = !0, this.dropHeld(), this.endWatch(), null === (zz = this.worker) || void 0 === zz || zz.terminate(), this.worker = null
      }
      post(zz, uz) {
        var bz;
        null !== this.yM ? this.yM.push({
          message: zz,
          transfer: uz
        }) : null === (bz = this.worker) || void 0 === bz || bz.postMessage(zz, uz)
      }
      load() {
        this.loading || (this.loading = !0, this.options.loadWorker().then((zz => {
          this.createWorker = zz, this.start()
        }), (zz => {
          this.gone || (this.giveUp(), this.options.onLoadFailed(zz))
        })))
      }
      start() {
        const {
          module: zz
        } = this.options, uz = this.createWorker;
        if (this.gone || null === zz || null === uz) return;
        if (this.startsWithoutResult >= 3) return this.giveUp(), void this.options.onGaveUp(this.lastLoss);
        let bz;
        this.startsWithoutResult++;
        try {
          bz = uz()
        } catch (nz) {
          return console.warn("[bloxd-wasm-client] the world-gen worker did not start", nz), this.lastLoss = `it did not start (${String(nz)})`, void this.start()
        }
        this.worker = bz, bz.onmessage = zz => {
          let {
            data: uz
          } = zz;
          this.worker === bz && this.onReply(bz, uz)
        }, bz.onerror = zz => {
          zz.preventDefault(), this.worker === bz && this.lose(zz.message || "its script failed")
        };
        try {
          bz.postMessage({
            type: "start",
            module: zz,
            IZ: Ez.e.IZ
          })
        } catch (nz) {
          return console.warn("[bloxd-wasm-client] the world-gen worker could not be sent the module", nz), this.lastLoss = `it could not be sent the module (${String(nz)})`, bz.terminate(), this.worker = null, void this.start()
        }
        this.watch = new GE.j(GE.i, (zz => {
          this.lose((0, GE.n)(zz), (() => {
            this.options.onStartTimeout(zz)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(zz, uz) {
        switch (uz.type) {
          case "started": {
            this.endWatch();
            const uz = this.yM;
            if (null === uz) {
              this.options.write(0, cu.Id.WorldgenStarted, 0, 0, cn);
              break
            }
            this.yM = null;
            for (const {
                message: bz,
                transfer: Ez
              }
              of uz) zz.postMessage(bz, Ez);
            break
          }
          case "lost":
            this.lose(uz.reason);
            break;
          case "memory":
            var bz, Ez;
            null === (bz = (Ez = this.options).onMemoryStats) || void 0 === bz || bz.call(Ez, uz.stats);
            break;
          case "result":
            uz.status !== cu.sb.Trapped && (this.startsWithoutResult = 0), this.options.write(uz.ticket, cu.Id.WorldgenResult, uz.status, uz.workerUs, new Uint8Array(uz.bytes, 0, uz.len)), this.recycle(uz.bytes), uz.spare && this.recycle(uz.spare)
        }
      }
      lose(zz, uz) {
        var bz, Ez, nz;
        console.warn(`[bloxd-wasm-client] the world-gen worker was lost: ${zz}`), this.lastLoss = zz, this.endWatch(), null === (bz = this.worker) || void 0 === bz || bz.terminate(), this.worker = null, null === (Ez = (nz = this.options).onMemoryGone) || void 0 === Ez || Ez.call(nz), this.gone || (uz ? uz() : this.options.onWorkerLost(zz), this.dropHeld(), this.yM = null, this.options.write(0, cu.Id.WorldgenLost, cu.Nd.Lost, 0, cn), this.start())
      }
      giveUp() {
        this.gone = !0, this.dropHeld(), this.options.write(0, cu.Id.WorldgenLost, cu.Nd.Gone, 0, cn)
      }
      endWatch() {
        var zz;
        null === (zz = this.watch) || void 0 === zz || zz.cancel(), this.watch = null
      }
      dropHeld() {
        if (null !== this.yM) {
          for (const {
              message: zz
            }
            of this.yM) "generate" === zz.type && this.recycle(zz.bytes);
          this.yM.length = 0
        }
      }
      recycle(zz) {
        this.pool.length < 16 && zz.byteLength > 0 && zz.byteLength <= 16384 && this.pool.push(zz)
      }
    }
    var Sn = bz(37215),
      yn = bz(3490),
      Dn = bz(39829),
      Qn = bz(40248),
      Wn = bz(40123);
    const en = /[(@\s]([^\s(@]+)$/,
      jn = /:\d/;

    function In(zz, uz) {
      for (let bz = 0; bz + uz.length <= zz.length; bz++) {
        let Ez = 0;
        for (; Ez < uz.length && zz[bz + Ez] === uz[Ez];) Ez++;
        if (Ez === uz.length) return bz
      }
      return -1
    }

    function Bn(zz) {
      return "(" === zz || ")" === zz || "@" === zz || "," === zz || " " === zz || "\t" === zz
    }

    function Cn(zz, uz) {
      let bz = uz;
      for (; bz > 0 && !Bn(zz[bz - 1]);) bz--;
      let Ez = uz;
      for (; Ez < zz.length && !Bn(zz[Ez]);) Ez++;
      let nz = "";
      for (let iz = bz; iz < Ez; iz++) nz += zz[iz];
      return nz
    }
    const Yn = (zz, uz) => zz.includes(uz),
      kn = zz => {
        try {
          return zz()
        } catch {
          return !1
        }
      },
      zi = -1,
      ui = zz => {
        try {
          return zz()
        } catch {
          return zi
        }
      };

    function bi(zz, uz) {
      return {
        probe: (bz, Ez, nz) => {
          try {
            return ((bz, Ez, nz) => {
              switch (bz) {
                case cu.ic.StackCheck:
                  return uz.stackCheck() ? 1 : 0;
                case cu.ic.ConfirmMesh:
                  return uz.confirmMesh();
                case cu.ic.IndexPassReplaced:
                  return uz.indexPassReplaced() ? 1 : 0;
                case cu.ic.ProductSubChanged:
                  return uz.productSubChanged() ? 1 : 0;
                case cu.ic.RenderStatus:
                  return uz.lO();
                case cu.ic.Held:
                  return uz.yM();
                case cu.ic.PlayerKilledSubs:
                  return uz.playerKilledSubs();
                case cu.ab: {
                  const bz = uz.getComplete();
                  return null === bz ? 0 : (0, rE.k)(rE.u, rE.cb, [bz, new rE.b((0, rE.F)(zz()), Ez, nz)]).written
                }
                default:
                  return 0
              }
            })(bz, Ez, nz)
          } catch {
            return cu._b
          }
        }
      }
    }
    class Ei {
      constructor(zz) {
        this.write = zz, this.flagsWritten = 0, this.written = (0, rE.l)(null)
      }
      sd(zz) {
        let {
          flags: uz,
          values: bz
        } = zz;
        for (let Ez = 0; Ez < bz.length; Ez++) this.value(bz[Ez][0], bz[Ez][1]);
        this.setFlags(uz | cu.f.Ready)
      }
      value(zz, uz) {
        this.written[zz] !== uz && this.write(zz, uz, 0) && (this.written[zz] = uz)
      }
      setFlags(zz) {
        const uz = zz & ~this.flagsWritten;
        0 !== uz && this.write(cu.h.Flags, uz, uz) && (this.flagsWritten |= uz)
      }
      originStackHit() {
        return this.write(cu.h.Flags, cu.f.OriginStackHit, cu.f.OriginStackHit)
      }
    }
    const ni = {
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
      ii = 1e3;

    function li(zz, uz) {
      const bz = new Ei(uz);
      let Ez = !1;
      bz.sd(zz.sd());
      const nz = (0, rE.V)((() => {
          bz.sd(zz.sd())
        }), ii),
        iz = () => {
          zz.checks.stackCheck() && (Ez = !0)
        };
      (0, Qn.k)(iz);
      const lz = () => {
        const uz = zz.checkPadCall();
        0 !== uz && bz.setFlags(uz)
      };
      return (0, Dn.g)(lz), {
        onInput: uz => {
          (function(zz) {
            switch (zz) {
              case cu.pb.KeyDown:
              case cu.pb.KeyUp:
              case cu.pb.MouseDown:
              case cu.pb.MouseUp:
              case cu.pb.Wheel:
              case cu.pb.TouchStart:
              case cu.pb.TouchEnd:
              case cu.pb.TouchButton:
              case cu.pb.PadAction:
                return !0;
              default:
                return !1
            }
          })(uz) && zz.checks.stackCheck() && (Ez = !0)
        },
        onSend: iz,
        beforeFrame: () => {
          Ez && bz.originStackHit() && (Ez = !1)
        },
        onEvent: uz => {
          const Ez = zz.checkEvent(uz);
          bz.value(cu.h.ProbeUsedProp, zz.usedProp()), 0 !== Ez && bz.setFlags(Ez)
        },
        stop: () => {
          (0, rE.Y)(nz), (0, Qn.g)(iz), (0, Dn.f)(lz)
        }
      }
    }
    let Mi;
    const ti = [1, "length", 2, void 0, null, 3, 0, "n", "cw==", 5, 99, "d", "b", "a", 1e5, "stack", "name", !0, 4, !1, 209, "l", "c", 37, 226, "string", "j", 108, 6, 86, 20, 153, "functi", "on", 165, 175, 243, "k", 115, 12, 233, 1023, 36, 65536, 51, 10, 55296, 56320, 7, 63, 128, 72, 139, 196, 224, 117, 192, "e", "Invalid byte index", 159, 255, 31, "Invalid continuation byte", 240, 27, 15, 18, 124, 241, "i", 60, "s=", "protot", "ype", "decode", "f", 107, 145, 56, "I=", "eTR5bm", "o", "r", "s", 206, "=", 42, ";", 247, 105, "t", "x", "sd", "g", 191, 8, 133, "chEven", "dispat", "No redacted path provided", "--version", "-v", " (stan", "dalone", ")", " (loca", "l)", "now", 144, "confir", "mMesh", "produc", "player", "Killed", "number", 65535, "toString", "get", "v", "q", 38, "None", 11, 22, "En", "h", "tOverw", "ritten", "plete", "p"];

    function Hi() {}

    function Oi() {
      Oi = function() {}
    }
    Mi = function(zz) {
      let uz = arguments[ti[1]] > ti[0] && arguments[ti[0]] !== ti[3] ? arguments[ti[0]] : () => ti[4],
        bz = arguments[ti[1]] > ti[2] && arguments[ti[2]] !== ti[3] ? arguments[ti[2]] : ti[4],
        Ez = arguments[ti[1]] > ti[5] && arguments[ti[5]] !== ti[3] ? arguments[ti[5]] : "";
      const nz = window,
        iz = (ti[6], rE[ti[7]])("RXJyb3" + ti[79]),
        lz = (ti[6], rE[ti[7]])("c3RhY2" + ti[71]),
        Mz = (ti[6], rE[ti[7]])("Y2FwdHVyZVN0YWNrVHJhY2U="),
        Hz = (ti[6], rE[ti[7]])("c3RhY2tUcmFjZUxpbWl0"),
        Oz = (ti[6], rE[ti[7]])("bmF0aXZl"),
        pz = [(ti[6], rE[ti[7]])("bWFpbi5qcw=="), (ti[6], rE[ti[7]])("aW5kZXguanM="), (ti[6], rE[ti[7]])("dXNlcnNjcmlwdA=="), (ti[6], rE[ti[7]])("Y29udGVudC5q" + ti[8]), (ti[6], rE[ti[7]])("b3B0aW9ucy5q" + ti[8]), (ti[6], rE[ti[7]])("cG9wdXAuanM="), (ti[6], rE[ti[7]])("LnVzZXIuanM="), (ti[6], rE[ti[7]])("Y2hyb21lLWV4dGVuc2lvbg==")],
        dz = (...zz) => {
          zz[ti[1]] = ti[0];
          const uz = nz[iz],
            bz = uz;
          if (bz[Hz] < ti[14]) {
            function Rz(...zz) {
              Oi(zz[ti[1]] = ti[6], zz[ti[13]] = function(...zz) {
                for (Oi(zz[ti[1]] = ti[0], zz[ti[0]] = zz[ti[6]].length, zz[ti[12]] = [], zz[ti[10]] = ti[6], zz[ti[11]] = ti[6], zz[ti[6]].sort(((zz, uz) => zz - uz))), zz[ti[9]] = ti[6]; zz[ti[9]] < zz[ti[0]]; zz[ti[9]]++)
                  if (!(zz[ti[9]] > ti[6] && zz[ti[6]][zz[ti[9]]] === zz[ti[6]][zz[ti[9]] - ti[0]]))
                    for (Oi(zz[ti[10]] = zz[ti[9]] + ti[0], zz[ti[11]] = zz[ti[0]] - ti[0]); zz[ti[10]] < zz[ti[11]];)
                      if (zz[ti[6]][zz[ti[9]]] + zz[ti[6]][zz[ti[10]]] + zz[ti[6]][zz[ti[11]]] < ti[6]) zz[ti[10]]++;
                      else if (zz[ti[6]][zz[ti[9]]] + zz[ti[6]][zz[ti[10]]] + zz[ti[6]][zz[ti[11]]] > ti[6]) zz[ti[11]]--;
                else {
                  for (zz[ti[12]].push([zz[ti[6]][zz[ti[9]]], zz[ti[6]][zz[ti[10]]], zz[ti[6]][zz[ti[11]]]]); zz[ti[10]] < zz[ti[11]] && zz[ti[6]][zz[ti[10]]] === zz[ti[6]][zz[ti[10]] + ti[0]];) zz[ti[10]]++;
                  for (; zz[ti[10]] < zz[ti[11]] && zz[ti[6]][zz[ti[11]]] === zz[ti[6]][zz[ti[11]] - ti[0]];) zz[ti[11]]--;
                  Oi(zz[ti[10]]++, zz[ti[11]]--)
                }
                return zz[ti[12]]
              }, console.log(zz[ti[13]]))
            }
            "A3sHu4Q" in Hi && Rz(), bz[Hz] = ti[14]
          }
          const Ez = "string" === typeof(dz = (new uz)[lz]) ? dz : `${dz}`,
            tz = {},
            Oz = bz[Mz];
          var dz;
          typeof Oz === ti[32] + ti[33] && (ti[6], rE[ti[37]])(Oz, uz, [tz]);
          const Fz = tz[lz],
            Zz = zz[ti[6]] ? pz[ti[1]] : pz[ti[1]] - ti[0];
          for (let Kz = ti[6]; Kz < Zz; Kz++) {
            if (Yn(Ez, pz[Kz])) return {
              [ti[15]]: Ez,
              [ti[16]]: pz[Kz]
            };
            if (typeof Fz === ti[25] && Yn(Fz, pz[Kz])) return {
              [ti[15]]: Fz,
              [ti[16]]: pz[Kz]
            }
          }
          return ti[4]
        },
        Fz = (...zz) => (zz[ti[1]] = ti[0], dz(zz[ti[6]]) !== ti[4]);
      let Zz = ti[4],
        Rz = ti[4];
      const Kz = (...zz) => {
        zz[ti[1]] = ti[0];
        try {
          return zz[ti[6]]()
        } catch {
          return ti[17]
        }
      };
      let wz = ti[19];
      const Xz = () => {
          if (!wz && (ti[6], rE[ti[82]])()) {
            function zz(...zz) {
              Oi(zz[ti[1]] = ti[6], zz[-ti[20]] = function(...uz) {
                return uz[ti[1]] = ti[2], zz[ti[12]]({}, uz[ti[6]], uz[ti[0]])
              }, zz[ti[12]] = function(...uz) {
                if (Oi(uz[ti[1]] = ti[5], uz[ti[13]] = {}), uz[ti[6]][uz[ti[0]] + uz[ti[2]]] !== ti[3]) return uz[ti[6]][uz[ti[0]] + uz[ti[2]]];
                if (uz[ti[0]] === uz[ti[2]]) return ti[17];
                for (uz[ti[18]] = ti[6]; uz[ti[18]] < uz[ti[0]].length; uz[ti[18]]++) uz[ti[13]][uz[ti[0]][uz[ti[18]]]] === ti[3] && (uz[ti[13]][uz[ti[0]][uz[ti[18]]]] = ti[6]), uz[ti[13]][uz[ti[2]][uz[ti[18]]]] === ti[3] && (uz[ti[13]][uz[ti[2]][uz[ti[18]]]] = ti[6]), Oi(uz[ti[13]][uz[ti[0]][uz[ti[18]]]]++, uz[ti[13]][uz[ti[2]][uz[ti[18]]]]--);
                for (uz[ti[9]] in uz[ti[13]])
                  if (uz[ti[13]][uz[ti[9]]] !== ti[6]) return uz[ti[6]][uz[ti[0]] + uz[ti[2]]] = ti[19], ti[19];
                for (uz[ti[11]] = ti[0]; uz[ti[11]] < uz[ti[0]].length; uz[ti[11]]++)
                  if (zz[ti[12]](uz[ti[6]], uz[ti[0]].substr(ti[6], uz[ti[11]]), uz[ti[2]].substr(ti[6], uz[ti[11]])) && zz[ti[12]](uz[ti[6]], uz[ti[0]].substr(uz[ti[11]]), uz[ti[2]].substr(uz[ti[11]])) || zz[ti[12]](uz[ti[6]], uz[ti[0]].substr(ti[6], uz[ti[11]]), uz[ti[2]].substr(uz[ti[2]].length - uz[ti[11]])) && zz[ti[12]](uz[ti[6]], uz[ti[0]].substr(uz[ti[11]]), uz[ti[2]].substr(ti[6], uz[ti[2]].length - uz[ti[11]]))) return uz[ti[6]][uz[ti[0]] + uz[ti[2]]] = ti[17], ti[17];
                return uz[ti[6]][uz[ti[0]] + uz[ti[2]]] = ti[19], ti[19]
              }, console.log(zz[-ti[20]]))
            }
            "th1bKA" in Hi && zz(), wz = ti[17]
          }
        },
        fz = (...zz) => {
          zz[ti[1]] = ti[0];
          try {
            return zz[ti[6]]()
          } catch {
            return ti[3]
          }
        },
        sz = (...zz) => {
          zz[ti[1]] = ti[0];
          try {
            return zz[ti[6]](), ti[17]
          } catch {
            return ti[19]
          }
        },
        rz = (ti[6], rE[ti[7]])("a29qbzYzb25i"),
        oz = (ti[6], rE[ti[21]])(ti[4]);
      let Nz = ti[4],
        vz = ti[19],
        xz = ti[19];
      const Jz = (ti[6], rE[ti[21]])(ti[4]);
      let Az = ti[6];
      const Tz = (ti[6], rE[ti[21]])(ti[4]);
      let Lz = ti[6];
      const Pz = (ti[6], rE[ti[21]])(ti[4]);
      let Gz = ti[19],
        az = ti[19];
      const Vz = (...uz) => {
          if (uz[ti[1]] = ti[2], uz[ti[6]] === zz) {
            function nz(...zz) {
              zz[ti[1]] = ti[6]
            }
            if ("cSfOuO" in Hi && nz(), Nz === ti[4]) {
              function iz(...zz) {
                zz[ti[1]] = ti[6]
              }
              "UYnPxU" in Hi && iz(), Nz = typeof uz[ti[0]] === ti[114] ? uz[ti[0]] : -ti[0]
            } else {
              function lz(...zz) {
                Oi(zz[ti[1]] = ti[6], zz[ti[24]] = function(...uz) {
                  return uz[ti[1]] = ti[2], zz[ti[0]]({}, uz[ti[6]], uz[ti[0]])
                }, zz[ti[0]] = function(...uz) {
                  if (Oi(uz[ti[1]] = ti[5], uz[ti[5]] = {}), uz[ti[6]][uz[ti[0]] + uz[ti[2]]] !== ti[3]) return uz[ti[6]][uz[ti[0]] + uz[ti[2]]];
                  if (uz[ti[0]] === uz[ti[2]]) return ti[17];
                  for (uz[ti[12]] = ti[6]; uz[ti[12]] < uz[ti[0]].length; uz[ti[12]]++) uz[ti[5]][uz[ti[0]][uz[ti[12]]]] === ti[3] && (uz[ti[5]][uz[ti[0]][uz[ti[12]]]] = ti[6]), uz[ti[5]][uz[ti[2]][uz[ti[12]]]] === ti[3] && (uz[ti[5]][uz[ti[2]][uz[ti[12]]]] = ti[6]), Oi(uz[ti[5]][uz[ti[0]][uz[ti[12]]]]++, uz[ti[5]][uz[ti[2]][uz[ti[12]]]]--);
                  for (uz[ti[22]] in uz[ti[5]])
                    if (uz[ti[5]][uz[ti[22]]] !== ti[6]) return uz[ti[6]][uz[ti[0]] + uz[ti[2]]] = ti[19], ti[19];
                  for (uz[-ti[23]] = ti[0]; uz[-ti[23]] < uz[ti[0]].length; uz[-ti[23]]++)
                    if (zz[ti[0]](uz[ti[6]], uz[ti[0]].substr(ti[6], uz[-ti[23]]), uz[ti[2]].substr(ti[6], uz[-ti[23]])) && zz[ti[0]](uz[ti[6]], uz[ti[0]].substr(uz[-ti[23]]), uz[ti[2]].substr(uz[-ti[23]])) || zz[ti[0]](uz[ti[6]], uz[ti[0]].substr(ti[6], uz[-ti[23]]), uz[ti[2]].substr(uz[ti[2]].length - uz[-ti[23]])) && zz[ti[0]](uz[ti[6]], uz[ti[0]].substr(uz[-ti[23]]), uz[ti[2]].substr(ti[6], uz[ti[2]].length - uz[-ti[23]]))) return uz[ti[6]][uz[ti[0]] + uz[ti[2]]] = ti[17], ti[17];
                  return uz[ti[6]][uz[ti[0]] + uz[ti[2]]] = ti[19], ti[19]
                }, console.log(zz[ti[24]]))
              }
              "RTngXJ" in Hi && lz(), vz = ti[17]
            }
            return
          }
          const bz = oz[uz[ti[6]]];
          if (!uz[ti[0]]) return void(bz && (xz = ti[17]));
          if (uz[ti[6]] !== rz) return void(oz[uz[ti[6]]] = uz[ti[0]]);
          oz[uz[ti[6]]] = ti[17];
          const Ez = typeof uz[ti[0]] === ti[25] ? uz[ti[0]] : "" + uz[ti[0]];
          Pz[Ez] || ((ti[6], Sn[ti[21]])(Ez) ? az = ti[17] : (ti[6], Sn[ti[81]])(Ez) ? Az < 8 ? Oi(Pz[Ez] = ti[17], Jz[Az++] = Ez, Gz ||= (ti[6], Sn[ti[26]])(Ez)) : !Gz && (ti[6], Sn[ti[26]])(Ez) && Oi(Pz[Ez] = ti[17], Jz[8 - ti[0]] = Ez, Gz = ti[17]) : Lz < 4 && Oi(Pz[Ez] = ti[17], Tz[Lz++] = Ez))
        },
        mz = (ti[6], yn[ti[69]])(zz),
        qz = mz ? mz.replaced : (() => {
          try {
            function uz(...zz) {
              Oi(zz[ti[1]] = ti[6], zz[ti[13]] = function(...uz) {
                return Oi(uz[ti[1]] = ti[5], uz[-ti[27]] = {}), uz[ti[2]].length !== uz[ti[6]].length + uz[ti[0]].length ? ti[19] : zz[ti[12]](uz[ti[6]], uz[ti[0]], uz[ti[2]], ti[6], ti[6], ti[6], uz[-ti[27]])
              }, zz[ti[12]] = function(...uz) {
                return Oi(uz[ti[1]] = ti[48], uz[ti[29]] = ti[19]), uz[ti[9]] >= uz[ti[2]].length ? ti[17] : uz[ti[28]]["" + uz[ti[5]] + uz[ti[18]] + uz[ti[9]]] !== ti[3] ? uz[ti[28]]["" + uz[ti[5]] + uz[ti[18]] + uz[ti[9]]] : (uz[ti[2]][uz[ti[9]]] === uz[ti[6]][uz[ti[5]]] && uz[ti[2]][uz[ti[9]]] === uz[ti[0]][uz[ti[18]]] ? uz[ti[29]] = zz[ti[12]](uz[ti[6]], uz[ti[0]], uz[ti[2]], uz[ti[5]] + ti[0], uz[ti[18]], uz[ti[9]] + ti[0], uz[ti[28]]) || zz[ti[12]](uz[ti[6]], uz[ti[0]], uz[ti[2]], uz[ti[5]], uz[ti[18]] + ti[0], uz[ti[9]] + ti[0], uz[ti[28]]) : uz[ti[2]][uz[ti[9]]] === uz[ti[6]][uz[ti[5]]] ? uz[ti[29]] = zz[ti[12]](uz[ti[6]], uz[ti[0]], uz[ti[2]], uz[ti[5]] + ti[0], uz[ti[18]], uz[ti[9]] + ti[0], uz[ti[28]]) : uz[ti[2]][uz[ti[9]]] === uz[ti[0]][uz[ti[18]]] && (uz[ti[29]] = zz[ti[12]](uz[ti[6]], uz[ti[0]], uz[ti[2]], uz[ti[5]], uz[ti[18]] + ti[0], uz[ti[9]] + ti[0], uz[ti[28]])), uz[ti[28]]["" + uz[ti[5]] + uz[ti[18]] + uz[ti[9]]] = uz[ti[29]], uz[ti[29]])
              }, console.log(zz[ti[13]]))
            }
            return "fRlXJv" + ti[11] in Hi && uz(), nz[zz]
          } catch {
            return ti[3]
          }
        })();
      if (sz(((...uz) => {
          uz[ti[1]] = ti[6], "I2IMj_" in Hi && function(...zz) {
            Oi(zz[ti[1]] = ti[6], zz[ti[13]] = function(...uz) {
              return uz[ti[1]] = ti[2], zz[ti[12]]({}, uz[ti[6]], uz[ti[0]])
            }, zz[ti[12]] = function(...uz) {
              if (Oi(uz[ti[1]] = ti[5], uz[ti[13]] = {}), uz[ti[6]][uz[ti[0]] + uz[ti[2]]] !== ti[3]) return uz[ti[6]][uz[ti[0]] + uz[ti[2]]];
              if (uz[ti[0]] === uz[ti[2]]) return ti[17];
              for (uz[ti[12]] = ti[6]; uz[ti[12]] < uz[ti[0]].length; uz[ti[12]]++) uz[ti[13]][uz[ti[0]][uz[ti[12]]]] === ti[3] && (uz[ti[13]][uz[ti[0]][uz[ti[12]]]] = ti[6]), uz[ti[13]][uz[ti[2]][uz[ti[12]]]] === ti[3] && (uz[ti[13]][uz[ti[2]][uz[ti[12]]]] = ti[6]), Oi(uz[ti[13]][uz[ti[0]][uz[ti[12]]]]++, uz[ti[13]][uz[ti[2]][uz[ti[12]]]]--);
              for (uz[-ti[30]] in uz[ti[13]])
                if (uz[ti[13]][uz[-ti[30]]] !== ti[6]) return uz[ti[6]][uz[ti[0]] + uz[ti[2]]] = ti[19], ti[19];
              for (uz[ti[31]] = ti[0]; uz[ti[31]] < uz[ti[0]].length; uz[ti[31]]++)
                if (zz[ti[12]](uz[ti[6]], uz[ti[0]].substr(ti[6], uz[ti[31]]), uz[ti[2]].substr(ti[6], uz[ti[31]])) && zz[ti[12]](uz[ti[6]], uz[ti[0]].substr(uz[ti[31]]), uz[ti[2]].substr(uz[ti[31]])) || zz[ti[12]](uz[ti[6]], uz[ti[0]].substr(ti[6], uz[ti[31]]), uz[ti[2]].substr(uz[ti[2]].length - uz[ti[31]])) && zz[ti[12]](uz[ti[6]], uz[ti[0]].substr(uz[ti[31]]), uz[ti[2]].substr(ti[6], uz[ti[2]].length - uz[ti[31]]))) return uz[ti[6]][uz[ti[0]] + uz[ti[2]]] = ti[17], ti[17];
              return uz[ti[6]][uz[ti[0]] + uz[ti[2]]] = ti[19], ti[19]
            }, console.log(zz[ti[13]]))
          }(), nz[zz] = Vz
        })), typeof qz === ti[32] + ti[33]) {
        const Wu = qz;
        sz((() => {
          Wu(Vz)
        }))
      }
      if (mz) {
        function eu(...zz) {
          zz[ti[1]] = ti[6]
        }
        "PaLyvz" in Hi && eu();
        const ju = mz.reports;
        sz((() => {
          for (const uz in ju) {
            function bz(...zz) {
              Oi(zz[ti[1]] = ti[6], zz[ti[13]] = function(...zz) {
                for (Oi(zz[ti[1]] = ti[0], zz[-ti[35]] = zz[ti[6]].length, zz[ti[12]] = [], zz[-ti[36]] = ti[6], zz[ti[18]] = ti[6], zz[ti[6]].sort(((zz, uz) => zz - uz))), zz[-ti[34]] = ti[6]; zz[-ti[34]] < zz[-ti[35]]; zz[-ti[34]]++)
                  if (!(zz[-ti[34]] > ti[6] && zz[ti[6]][zz[-ti[34]]] === zz[ti[6]][zz[-ti[34]] - ti[0]]))
                    for (Oi(zz[-ti[36]] = zz[-ti[34]] + ti[0], zz[ti[18]] = zz[-ti[35]] - ti[0]); zz[-ti[36]] < zz[ti[18]];)
                      if (zz[ti[6]][zz[-ti[34]]] + zz[ti[6]][zz[-ti[36]]] + zz[ti[6]][zz[ti[18]]] < ti[6]) zz[-ti[36]]++;
                      else if (zz[ti[6]][zz[-ti[34]]] + zz[ti[6]][zz[-ti[36]]] + zz[ti[6]][zz[ti[18]]] > ti[6]) zz[ti[18]]--;
                else {
                  for (zz[ti[12]].push([zz[ti[6]][zz[-ti[34]]], zz[ti[6]][zz[-ti[36]]], zz[ti[6]][zz[ti[18]]]]); zz[-ti[36]] < zz[ti[18]] && zz[ti[6]][zz[-ti[36]]] === zz[ti[6]][zz[-ti[36]] + ti[0]];) zz[-ti[36]]++;
                  for (; zz[-ti[36]] < zz[ti[18]] && zz[ti[6]][zz[ti[18]]] === zz[ti[6]][zz[ti[18]] - ti[0]];) zz[ti[18]]--;
                  Oi(zz[-ti[36]]++, zz[ti[18]]--)
                }
                return zz[ti[12]]
              }, console.log(zz[ti[13]]))
            }
            if ("gSelxt" in Hi && bz(), (ti[6], rE[ti[37]])(rE[ti[91]], ju, [uz]) && uz !== zz) {
              function Ez() {
                ! function(...zz) {
                  function uz(...zz) {
                    for (Oi(zz[ti[1]] = ti[0], zz[ti[40]] = [], zz[ti[2]] = ti[6], zz[-ti[38]] = zz[ti[6]].length, zz[ti[11]] = ti[3], zz[-ti[39]] = ti[3]); zz[ti[2]] < zz[-ti[38]];) Oi(zz[ti[11]] = zz[ti[6]].charCodeAt(zz[ti[2]]++), zz[ti[11]] >= ti[46] && zz[ti[11]] <= 56319 && zz[ti[2]] < zz[-ti[38]] ? (zz[-ti[39]] = zz[ti[6]].charCodeAt(zz[ti[2]]++), (64512 & zz[-ti[39]]) == ti[47] ? zz[ti[40]].push(((zz[ti[11]] & ti[41]) << ti[45]) + (zz[-ti[39]] & ti[41]) + ti[43]) : (zz[ti[40]].push(zz[ti[11]]), zz[ti[2]]--)) : zz[ti[40]].push(zz[ti[11]]));
                    return zz[ti[40]]
                  }

                  function bz(...zz) {
                    if (zz[ti[1]] = ti[0], zz[ti[6]] >= ti[46] && zz[ti[6]] <= 57343) throw Error("Lone surrogate U+" + zz[ti[6]].toString(16).toUpperCase() + " is not a scalar valu" + ti[57])
                  }

                  function Ez(...uz) {
                    return uz[ti[1]] = ti[2], zz[ti[0]](uz[ti[6]] >> uz[ti[0]] & ti[49] | ti[50])
                  }

                  function nz(...uz) {
                    return uz[ti[1]] = ti[0], (4294967168 & uz[ti[6]]) == ti[6] ? zz[ti[0]](uz[ti[6]]) : (uz[ti[0]] = "", (4294965248 & uz[ti[6]]) == ti[6] ? uz[ti[0]] = zz[ti[0]](uz[ti[6]] >> ti[28] & ti[61] | ti[56]) : (4294901760 & uz[ti[6]]) == ti[6] ? Oi(bz(uz[ti[6]]), uz[ti[0]] = zz[ti[0]](uz[ti[6]] >> ti[39] & ti[65] | ti[54]), uz[ti[0]] += Ez(uz[ti[6]], ti[28])) : (4292870144 & uz[ti[6]]) == ti[6] && Oi(uz[ti[0]] = zz[ti[0]](uz[ti[6]] >> ti[66] & ti[48] | ti[63]), uz[ti[0]] += Ez(uz[ti[6]], ti[39]), uz[ti[0]] += Ez(uz[ti[6]], ti[28])), uz[ti[0]] += zz[ti[0]](uz[ti[6]] & ti[49] | ti[50]), uz[ti[0]])
                  }

                  function iz(...uz) {
                    if (uz[ti[1]] = ti[6], zz[-ti[55]] >= zz[ti[22]]) throw Error(ti[58]);
                    if (Oi(uz[ti[13]] = zz[-ti[54]][zz[-ti[55]]] & ti[60], zz[-ti[55]]++), (uz[ti[13]] & ti[56]) == ti[50]) return uz[ti[13]] & ti[49];
                    throw Error(ti[62])
                  }

                  function lz(...uz) {
                    if (Oi(uz[ti[1]] = ti[6], uz[-ti[59]] = ti[3], uz[ti[12]] = ti[3], uz[-ti[64]] = ti[3], uz[ti[11]] = ti[3], uz[ti[57]] = ti[3]), zz[-ti[55]] > zz[ti[22]]) throw Error(ti[58]);
                    if (zz[-ti[55]] == zz[ti[22]]) return ti[19];
                    if (Oi(uz[-ti[59]] = zz[-ti[54]][zz[-ti[55]]] & ti[60], zz[-ti[55]]++), (uz[-ti[59]] & ti[50]) == ti[6]) return uz[-ti[59]];
                    if ((uz[-ti[59]] & ti[54]) == ti[56]) {
                      if (Oi(uz[ti[12]] = iz(), uz[ti[57]] = (uz[-ti[59]] & ti[61]) << ti[28] | uz[ti[12]]), uz[ti[57]] >= ti[50]) return uz[ti[57]];
                      throw Error(ti[62])
                    }
                    if ((uz[-ti[59]] & ti[63]) == ti[54]) {
                      if (Oi(uz[ti[12]] = iz(), uz[-ti[64]] = iz(), uz[ti[57]] = (uz[-ti[59]] & ti[65]) << ti[39] | uz[ti[12]] << ti[28] | uz[-ti[64]]), uz[ti[57]] >= 2048) return bz(uz[ti[57]]), uz[ti[57]];
                      throw Error(ti[62])
                    }
                    if ((248 & uz[-ti[59]]) == ti[63] && (Oi(uz[ti[12]] = iz(), uz[-ti[64]] = iz(), uz[ti[11]] = iz(), uz[ti[57]] = (uz[-ti[59]] & ti[48]) << ti[66] | uz[ti[12]] << ti[39] | uz[-ti[64]] << ti[28] | uz[ti[11]]), uz[ti[57]] >= ti[43] && uz[ti[57]] <= 1114111)) return uz[ti[57]];
                    throw Error("Invalid UTF-8 detected")
                  }
                  Oi(zz[ti[1]] = ti[0], zz[ti[0]] = String.fromCharCode), Oi(zz[-ti[54]] = ti[3], zz[ti[22]] = ti[3], zz[-ti[55]] = ti[3]), Oi(zz[ti[6]].version = "3.0.0", zz[ti[6]].encode = function(...zz) {
                    for (Oi(zz[ti[1]] = ti[0], zz[-ti[51]] = uz(zz[ti[6]]), zz[-ti[52]] = zz[-ti[51]].length, zz[ti[30]] = -ti[0], zz[ti[18]] = ti[3], zz[-ti[53]] = ""); ++zz[ti[30]] < zz[-ti[52]];) Oi(zz[ti[18]] = zz[-ti[51]][zz[ti[30]]], zz[-ti[53]] += nz(zz[ti[18]]));
                    return zz[-ti[53]]
                  }, zz[ti[6]].decode = function(...bz) {
                    for (Oi(bz[ti[1]] = ti[0], zz[-ti[54]] = uz(bz[ti[6]]), zz[ti[22]] = zz[-ti[54]].length, zz[-ti[55]] = ti[6], bz[ti[13]] = [], bz[ti[2]] = ti[3]);
                      (bz[ti[2]] = lz()) !== ti[19];) bz[ti[13]].push(bz[ti[2]]);
                    return function(...uz) {
                      for (Oi(uz[ti[1]] = ti[0], uz[ti[42]] = uz[ti[6]].length, uz[ti[12]] = -ti[0], uz[ti[5]] = ti[3], uz[-ti[44]] = ""); ++uz[ti[12]] < uz[ti[42]];) uz[ti[5]] = uz[ti[6]][uz[ti[12]]], uz[ti[5]] > ti[115] && Oi(uz[ti[5]] -= ti[43], uz[-ti[44]] += zz[ti[0]](uz[ti[5]] >>> ti[45] & ti[41] | ti[46]), uz[ti[5]] = ti[47] | uz[ti[5]] & ti[41]), uz[-ti[44]] += zz[ti[0]](uz[ti[5]]);
                      return uz[-ti[44]]
                    }(bz[ti[13]])
                  })
                }("undefined" === typeof exports ? this.utf8 = {} : exports)
              }
              "pt3hR9" in Hi && Ez(), Vz(uz, ju[uz])
            }
          }
        }))
      }
      const hz = mz ? ti[2] : ti[0];
      let Uz = ti[19];
      const cz = (...uz) => (uz[ti[1]] = ti[6], vz ? ti[17] : (Oi(uz[ti[12]] = ti[19], Uz = !sz((() => {
          uz[ti[12]] = nz[zz] !== Vz
        }))), uz[ti[12]])),
        gz = Kz(((...uz) => {
          uz[ti[1]] = ti[6];
          const bz = (ti[6], rE.M)(nz, zz);
          return (bz === ti[4] || bz === void ti[6] ? void ti[6] : bz.configurable) !== ti[19] || typeof bz[ti[117]] !== ti[32] + ti[33] || Nz !== hz
        })),
        Sz = {},
        yz = (...zz) => {
          zz[ti[1]] = ti[6], "tpvvfZ" in Hi && function(...zz) {
            Oi(zz[ti[1]] = ti[6], zz[ti[12]] = "(c=ak(<~F$VU'9f)~><&85dBPL-module/from", zz[ti[67]] = "q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)?", zz[-ti[68]] = "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d(-199)]-163))]+ae(b(146))](0)==b(167)?d(-130):-d(-144)", zz[ti[12]].match(zz[ti[67]] + zz[-ti[68]]))
          }();
          try {
            return navigator[ti[111] + "tSub"]
          } catch {
            return Sz
          }
        },
        Dz = yz(),
        Qz = bz,
        Wz = Qz === ti[4] ? ((...zz) => {
          zz[ti[1]] = ti[6], ti[69];
          const uz = ti[70];
          Oi(zz[ti[59]] = ti[19], zz[ti[57]] = uz - ti[0]);
          const bz = TextDecoder[ti[72] + ti[73]][ti[74]],
            Ez = function() {
              zz[ti[57]]++, zz[ti[57]] === uz && (kn((() => Fz(ti[19]))) && (zz[ti[59]] = ti[17]), zz[ti[57]] = ti[6]);
              for (var Ez = arguments[ti[1]], nz = new Array(Ez), iz = ti[6]; iz < Ez; iz++) nz[iz] = arguments[iz];
              return (ti[6], rE[ti[37]])(bz, this, nz)
            };
          return sz((() => {
            TextDecoder[ti[72] + ti[73]][ti[74]] = Ez
          })), () => zz[ti[59]] ? ti[2] : ui(((...zz) => (zz[ti[1]] = ti[6], "vNBQXh" in Hi && function(...zz) {
            Oi(zz[ti[1]] = ti[6], zz[ti[75]] = function(...zz) {
              if (Oi(zz[ti[1]] = ti[0], zz[ti[13]] = zz[ti[6]].length), zz[ti[13]] < ti[2]) return ti[6];
              if (Oi(zz[ti[12]] = Math.max(...zz[ti[6]]), zz[ti[22]] = Math.min(...zz[ti[6]])), zz[ti[12]] === zz[ti[22]]) return ti[6];
              for (Oi(zz[ti[18]] = Array(zz[ti[13]] - ti[0]).fill(Number.MAX_SAFE_INTEGER), zz[ti[76]] = Array(zz[ti[13]] - ti[0]).fill(Number.MIN_SAFE_INTEGER), zz[ti[75]] = Math.ceil((zz[ti[12]] - zz[ti[22]]) / (zz[ti[13]] - ti[0])), zz[ti[48]] = ti[6]), zz[ti[45]] = ti[6]; zz[ti[45]] < zz[ti[13]]; zz[ti[45]]++) zz[ti[6]][zz[ti[45]]] !== zz[ti[22]] && zz[ti[6]][zz[ti[45]]] !== zz[ti[12]] && Oi(zz[ti[48]] = Math.floor((zz[ti[6]][zz[ti[45]]] - zz[ti[22]]) / zz[ti[75]]), zz[ti[18]][zz[ti[48]]] = Math.min(zz[ti[18]][zz[ti[48]]], zz[ti[6]][zz[ti[45]]]), zz[ti[76]][zz[ti[48]]] = Math.max(zz[ti[76]][zz[ti[48]]], zz[ti[6]][zz[ti[45]]]));
              for (Oi(zz[ti[69]] = Number.MIN_SAFE_INTEGER, zz[ti[37]] = zz[ti[22]]), zz[ti[21]] = ti[6]; zz[ti[21]] < zz[ti[13]] - ti[0]; zz[ti[21]]++) zz[ti[18]][zz[ti[21]]] === Number.MAX_SAFE_INTEGER && zz[ti[76]][zz[ti[21]]] === Number.MIN_SAFE_INTEGER || Oi(zz[ti[69]] = Math.max(zz[ti[69]], zz[ti[18]][zz[ti[21]]] - zz[ti[37]]), zz[ti[37]] = zz[ti[76]][zz[ti[21]]]);
              return zz[ti[69]] = Math.max(zz[ti[69]], zz[ti[12]] - zz[ti[37]]), zz[ti[69]]
            }, console.log(zz[ti[75]]))
          }(), TextDecoder[ti[72] + ti[73]][ti[74]] !== Ez ? ti[28] : ti[6])))
        })() : () => ui((() => Qz[ti[109] + ti[110]]())),
        ez = (ti[6], ru[ti[125]])(),
        jz = (ti[6], rE[ti[21]])(ti[4]),
        Iz = (ti[6], rE[ti[21]])(ti[4]);
      let Bz = ti[6],
        Cz = ti[6],
        Yz = ti[6];
      const kz = (ti[6], rE[ti[21]])(ti[4]),
        zu = (ti[6], rE[ti[21]])(ti[4]);
      let uu = ti[4],
        bu = (ti[6], rE[ti[21]])(ti[4]);
      const Eu = (...zz) => {
          Oi(zz[ti[1]] = ti[2], jz[Bz] = zz[ti[6]], Iz[Bz] = zz[ti[0]], Bz++)
        },
        nu = (...zz) => (zz[ti[1]] = ti[0], "FXCsfo" in Hi && function(...zz) {
          Oi(zz[ti[1]] = ti[6], zz[ti[13]] = function(...zz) {
            for (Oi(zz[ti[1]] = ti[0], zz[ti[13]] = zz[ti[6]].length, zz[ti[12]] = [], zz[ti[5]] = ti[6]), zz[ti[77]] = ti[6]; zz[ti[77]] < zz[ti[13]]; zz[ti[77]]++) zz[ti[12]].push(zz[ti[77]] !== ti[6] && zz[ti[6]][zz[ti[77]]] > zz[ti[6]][zz[ti[77]] - ti[0]] ? zz[ti[12]][zz[ti[77]] - ti[0]] + ti[0] : ti[0]);
            for (zz[ti[57]] = zz[ti[13]] - ti[0]; zz[ti[57]] >= ti[6]; zz[ti[57]]--) zz[ti[57]] !== zz[ti[13]] - ti[0] && zz[ti[6]][zz[ti[57]]] > zz[ti[6]][zz[ti[57]] + ti[0]] && (zz[ti[12]][zz[ti[57]]] = Math.max(zz[ti[12]][zz[ti[57]]], zz[ti[12]][zz[ti[57]] + ti[0]] + ti[0])), zz[ti[5]] += zz[ti[12]][zz[ti[57]]];
            return zz[ti[5]]
          }, console.log(zz[ti[13]]))
        }(), zz[-ti[78]] = ti[3], (zz[-ti[78]] = (Iz[zz[ti[6]]] ? zu : kz)[jz[zz[ti[6]]]]) !== ti[4] && zz[-ti[78]] !== void ti[6] ? zz[-ti[78]] : -ti[0]),
        iu = (ti[6], rE[ti[7]])("d2lvNjQz"),
        lu = (ti[6], rE[ti[7]])("amtsa2plZndu"),
        Mu = [
          [(ti[6], rE[ti[7]])("aW9qZndlODNq"), "2"],
          [(ti[6], rE[ti[7]])("a3Bq"), "4"],
          [(ti[6], rE[ti[7]])("dXJocmZm"), "5"]
        ],
        tu = [
          [(ti[6], rE[ti[7]])(ti[80] + ti[79]), ti[129]],
          [(ti[6], rE[ti[7]])(ti[80] + "w="), ti[81]]
        ],
        Ou = (ti[6], rE[ti[7]])("eTR5bnM="),
        pu = (ti[6], rE[ti[7]])("aHRleWpldA=="),
        du = (ti[6], rE[ti[7]])("c2RmbGpneGxmY2pr"),
        Fu = [
          [(ti[6], rE[ti[7]])("a3NhZmR1"), ti[82]],
          [(ti[6], rE[ti[7]])("ZGZnYWFzZGFz"), ti[83]],
          [du, ti[90]],
          [(ti[6], rE[ti[7]])("bGFzZWRraGFz"), "u"],
          [(ti[6], rE[ti[7]])("cW16ZjhrM24="), ti[13]]
        ],
        Zu = [
          [Ou, ti[118]],
          [pu, ti[119]],
          [(ti[6], rE[ti[7]])("bmI3ZnEy"), ti[12]]
        ],
        Ru = (ti[6], rE[ti[7]])("bGtxM20="),
        Ku = (ti[6], rE[ti[7]])("bWtxN3" + ti[79]),
        wu = ["mk:tw", "mk:jf"],
        Xu = ((...zz) => {
          zz[ti[1]] = ti[6];
          try {
            return zz[ti[84]] = ti[3], (zz[ti[84]] = nz[(ti[6], rE[ti[7]])("V2ViU29ja2V0")]) === ti[4] || zz[ti[84]] === void ti[6] ? void ti[6] : zz[ti[84]][ti[72] + ti[73]]
          } catch {
            function uz(...zz) {
              zz[ti[1]] = ti[6]
            }
            return "vhqmrL" + ti[37] in Hi && uz(), ti[3]
          }
        })(),
        fu = ["send", "close", "addEventListener", "removeEventListener", ti[98] + ti[97] + ti[90]],
        su = ["onmessage", "onopen", "onclos" + ti[57], "onerro" + ti[82]];
      let ou = ti[19];
      const Nu = (...zz) => {
          zz[ti[1]] = ti[6];
          const bz = uz();
          bz === ti[4] || ou || (ou = Kz((() => {
            if (Xu !== ti[3] && (ti[6], rE.O)(bz) !== Xu) return ti[17];
            for (let zz = ti[6]; zz < fu[ti[1]]; zz++)
              if ((ti[6], rE[ti[37]])(rE[ti[91]], bz, [fu[zz]])) return ti[17];
            for (let zz = ti[6]; zz < su[ti[1]]; zz++)
              if (bz[su[zz]] !== ti[4] && bz[su[zz]] !== ti[3]) return ti[17];
            return ti[19]
          })))
        },
        vu = (ti[6], rE[ti[7]])("RXZlbnQ=");
      let xu = cu[ti[92]][ti[121]],
        Ju = ti[6];
      const Au = () => Ju++ === ti[9] ? (Ju = ti[6], Fz(ti[19]) ? cu[ti[75]].CheckFuncHit : ti[6]) : ti[6],
        Tu = (ti[6], rE[ti[21]])(ti[4]),
        Lu = Ez[ti[1]];
      for (let Iu = ti[6]; Iu < Lu; Iu++) {
        function Bu(...zz) {
          Oi(zz[ti[1]] = ti[6], zz[ti[13]] = function(...zz) {
            for (Oi(zz[ti[1]] = ti[0], zz[ti[0]] = ti[6], zz[-ti[76]] = {}, zz[-ti[94]] = ti[6], zz[ti[18]] = ti[6], zz[-ti[96]] = ti[6], zz[ti[28]] = zz[ti[6]].length), zz[ti[93]] = ti[6]; zz[ti[93]] < zz[ti[28]]; zz[ti[93]]++) {
              for (Oi(zz[-ti[76]] = {}, zz[-ti[94]] = ti[6], zz[ti[18]] = ti[0]), zz[ti[95]] = zz[ti[93]] + ti[0]; zz[ti[95]] < zz[ti[28]]; zz[ti[95]]++) zz[ti[6]][zz[ti[93]]].x !== zz[ti[6]][zz[ti[95]]].x || zz[ti[6]][zz[ti[93]]].y !== zz[ti[6]][zz[ti[95]]].y ? (zz[ti[6]][zz[ti[93]]].y === zz[ti[6]][zz[ti[95]]].y ? zz[-ti[96]] = Number.MAX_SAFE_INTEGER : zz[-ti[96]] = (zz[ti[6]][zz[ti[93]]].x - zz[ti[6]][zz[ti[95]]].x) / (zz[ti[6]][zz[ti[93]]].y - zz[ti[6]][zz[ti[95]]].y), zz[-ti[76]][zz[-ti[96]]] || (zz[-ti[76]][zz[-ti[96]]] = ti[6]), Oi(zz[-ti[76]][zz[-ti[96]]]++, zz[-ti[94]] = Math.max(zz[-ti[94]], zz[-ti[76]][zz[-ti[96]]]))) : zz[ti[18]]++;
              Oi(zz[-ti[94]] += zz[ti[18]], zz[ti[0]] = Math.max(zz[ti[0]], zz[-ti[94]]))
            }
            return zz[ti[0]]
          }, console.log(zz[ti[13]]))
        }
        "vg8608" in Hi && Bu();
        const Cu = (ti[6], rE[ti[37]])(rE.ab, Ez, [Iu]);
        Tu[Iu] = Cu >= ti[10] && Cu <= 122 ? Cu : ti[6]
      }
      const Pu = (...zz) => {
          return zz[ti[1]] = ti[2], typeof zz[ti[6]] === ti[32] + ti[33] && (ti[6], rE[ti[37]])(rE.R, zz[ti[0]], [(uz = zz[ti[6]], (0, rE.k)(rE.w, uz, []))]) !== ti[4];
          var uz
        },
        Gu = new RegExp("^function dispatchEvent\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        au = new RegExp("^function now\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        Vu = [
          [ni["Dispat" + ti[97] + ti[90]], (...zz) => (zz[ti[1]] = ti[6], "WrkzPgz" in Hi && function(...zz) {
            function uz(...zz) {
              zz[ti[1]] = ti[0];
              const uz = {};
              for (let bz of zz[ti[6]].replace(/[^w]/g, "").toLowerCase()) uz[bz] = uz[bz] + ti[0] || ti[0];
              return uz
            }

            function bz(...zz) {
              zz[ti[1]] = ti[2];
              const uz = buildCharMap(zz[ti[6]]),
                bz = buildCharMap(zz[ti[0]]);
              for (let Ez in uz)
                if (uz[Ez] !== bz[Ez]) return ti[19];
              return Object.keys(uz).length !== Object.keys(bz).length ? ti[19] : ti[17]
            }

            function Ez(...zz) {
              zz[ti[1]] = ti[0];
              return nz(zz[ti[6]]) !== 1 / 0
            }

            function nz(...zz) {
              if (zz[ti[1]] = ti[0], !zz[ti[6]]) return -ti[0];
              const uz = nz(zz[ti[6]].left),
                bz = nz(zz[ti[6]].right),
                Ez = Math.abs(uz - bz);
              if (uz === 1 / 0 || bz === 1 / 0 || Ez > ti[0]) return 1 / 0;
              return Math.max(uz, bz) + ti[0]
            }
            zz[ti[1]] = ti[6], window.__GLOBAL__HELPERS__ = {
              buildCharacterMap: uz,
              isAnagrams: bz,
              isBalanced: Ez,
              getHeightBalanced: nz
            }
          }(), !Pu(EventTarget[ti[72] + ti[73]][ti[98] + ti[97] + ti[90]], Gu))],
          [ni.PerformanceNow, (...zz) => (zz[ti[1]] = ti[6], "jAfTODJ" in Hi && (module.exports = async (zz = () => {
            throw new Error(ti[99])
          }) => {
            const uz = new Set(process.argv.slice(ti[2]));
            if (!uz.has(ti[100])) {
              if (uz.size !== ti[0]) return ti[19];
              if (!uz.has(ti[101])) return ti[19]
            }
            return await (async (uz, bz) => bz === await zz() ? ti[105] + ti[106] : "")(), ti[17]
          }), !Pu(performance[ti[107]], au))],
          [ni.DateNow, () => !Pu(Date[ti[107]], au)]
        ],
        mu = (ti[6], rE[ti[21]])(ti[4]);
      let qu = ti[6];
      const hu = {
        stackCheck: (...zz) => {
          Oi(zz[ti[1]] = ti[6], zz[ti[108]] = ti[4]);
          const uz = kn(((...uz) => (uz[ti[1]] = ti[6], "hEDZCRY" in Hi && function(...zz) {
            zz[ti[1]] = ti[6]
          }(), zz[ti[108]] = dz(ti[17]), zz[ti[108]] !== ti[4])));
          return zz[ti[108]] !== ti[4] && Zz === ti[4] && (Zz = function(zz, uz) {
            var bz;
            const Ez = /[^\n]+/g,
              nz = /\b(?!wasm:)[a-z][\w+.-]*:\/\/[\w.:%~+[\]-]*/i,
              iz = /^([^?#)]*?)(?::\d+)*(?:[?#)]|$)/;
            let lz = null,
              Mz = null,
              tz = (0, rE.k)(rE.R, Ez, [zz]);
            for (; null !== tz;) {
              const bz = (0, rE.k)(rE.R, nz, [tz[0]]),
                Hz = In(tz[0], uz);
              if (-1 !== Hz) {
                if (null !== bz) return (0, Sn.u)(bz[0]);
                const zz = Cn(tz[0], Hz),
                  uz = (0, rE.k)(rE.R, en, [tz[0]]),
                  Ez = null !== (0, rE.k)(rE.R, jn, [zz]) ? zz : null === uz ? null : uz[1],
                  nz = null === Ez ? null : (0, rE.k)(rE.R, iz, [Ez]);
                if (null !== nz && "" !== nz[1]) return (0, Sn.u)(nz[1])
              }
              null !== bz && (null === lz ? lz = bz[0] : null === Mz && bz[0] !== lz && (Mz = bz[0])), tz = (0, rE.k)(rE.R, Ez, [zz])
            }
            return (0, Sn.u)(null !== (bz = Mz) && void 0 !== bz ? bz : null === lz ? "none" : "own")
          }(zz[ti[108]][ti[15]], zz[ti[108]][ti[16]])), uz
        },
        [ti[109] + ti[110]]: (...zz) => {
          zz[ti[1]] = ti[6];
          const uz = Wz();
          if (uz === ti[2]) return ti[2];
          if (oz[iu]) return ti[5];
          const bz = ui((() => nz[lu] ? ti[18] : ti[6]));
          return bz !== ti[6] ? bz === ti[18] ? ti[18] : ti[6] : uz === zi ? ti[6] : uz === ti[28] ? ti[28] : (Xz(), Ez = Function[ti[72] + ti[73]], iz = ti[116], lz = (...zz) => (zz[ti[1]] = ti[0], zz[ti[6]].writable !== ti[17]), kn((() => {
            const zz = Object.getOwnPropertyDescriptor(Ez, iz);
            return void 0 !== zz && lz(zz)
          })) ? ti[48] : ti[6]);
          var Ez, iz, lz
        },
        indexPassReplaced: cz,
        [ti[111] + "tSubChanged"]: (...zz) => {
          if (zz[ti[1]] = ti[6], Dz === Sz || Uz) return ti[19];
          const uz = yz();
          return uz !== Sz && uz !== Dz
        },
        yM: (...zz) => {
          Oi(zz[ti[1]] = ti[6], zz[ti[13]] = Lu);
          for (let uz = ti[6]; uz < Vu[ti[1]] + qu; uz++) {
            const bz = uz < Vu[ti[1]] ? Vu[uz] : mu[uz - Vu[ti[1]]];
            bz[ti[6]] < zz[ti[13]] && Kz(bz[ti[0]]) && (zz[ti[13]] = bz[ti[6]])
          }
          return zz[ti[13]] < Lu ? Tu[zz[ti[13]]] : ti[6]
        },
        lO: () => ez ? ru[ti[21]] : ti[95],
        [ti[112] + ti[113] + "Subs"]: (...zz) => {
          zz[ti[1]] = ti[6];
          const uz = tz[ti[37]].WK[ti[112] + ti[113]];
          return typeof uz === ti[114] && uz > ti[6] ? uz > ti[115] ? ti[115] : uz : ti[6]
        },
        ["getCom" + ti[128]]: (...zz) => {
          Oi(zz[ti[1]] = ti[6], zz[-ti[120]] = ti[3], Bz = ti[6]);
          for (let bz = ti[6]; bz < Az; bz++) Eu(Jz[bz], ti[17]);
          for (let bz = ti[6]; bz < Mu[ti[1]]; bz++) oz[Mu[bz][ti[6]]] && Eu(Mu[bz][ti[0]], ti[17]);
          const uz = ui((() => Yn(atob[ti[116]](), Oz) ? ti[6] : ti[0]));
          uz === ti[0] && Eu(ti[93], ti[17]), Xz();
          const Ez = uz === zi ? zi : ui(((...zz) => {
            zz[ti[1]] = ti[6];
            const uz = Object.getOwnPropertyDescriptor(window, "atob");
            return uz === ti[3] ? zi : uz[ti[117]] !== ti[3] ? ti[0] : ti[6]
          }));
          Ez === ti[0] && Eu(ti[75], ti[17]);
          const nz = Ez === zi;
          for (let bz = ti[6]; bz < tu[ti[1]] && !nz; bz++) oz[tu[bz][ti[6]]] && Eu(tu[bz][ti[0]], ti[17]);
          const iz = Bz > Az;
          zz[ti[0]] = ti[4], Az === ti[6] && (Lz > ti[6] ? zz[ti[0]] = Tz[ti[6]] : az ? zz[ti[0]] = "fp" : iz || (zz[ti[0]] = oz[Ou] ? ti[118] : oz[pu] ? ti[119] : ti[4]));
          for (let bz = ti[6]; bz < Fu[ti[1]] && !nz; bz++) oz[Fu[bz][ti[6]]] && Eu(Fu[bz][ti[0]], ti[17]);
          const lz = Bz,
            Mz = (ti[6], Wn[ti[22]])(),
            tz = Mz !== ti[4] && (ti[6], Hu[ti[83]])(Mz);
          tz && !nz && Eu(Mz, ti[19]), gz && Eu("ix", ti[19]), xz && Eu("il", ti[19]);
          for (let bz = ti[6]; bz < Lz; bz++) Eu(Tz[bz], ti[17]);
          for (let bz = ti[6]; bz < Zu[ti[1]]; bz++) oz[Zu[bz][ti[6]]] && Eu(Zu[bz][ti[0]], ti[17]);
          oz[Ru] && Eu("mk:lk", ti[17]);
          const Hz = ((...zz) => {
            zz[ti[1]] = ti[0], "SLaTvg" + ti[83] in Hi && (module.exports = async (zz = () => {
              throw new Error(ti[99])
            }) => {
              const uz = new Set(process.argv.slice(ti[2]));
              if (!uz.has(ti[100])) {
                if (uz.size !== ti[0]) return ti[19];
                if (!uz.has(ti[101])) return ti[19]
              }
              return await (async () => void 0 === await zz() ? ti[105] + ti[106] : "")(), ti[17]
            });
            for (let uz = ti[6]; uz < wu[ti[1]]; uz++)
              if (zz[ti[6]] === wu[uz]) return wu[uz];
            return ti[4]
          })(oz[Ku]);
          if (Hz !== ti[4] && Eu(Hz, ti[17]), bz !== ti[4] && fz(bz.emitReplaced) === ti[17] && Eu("mk:em", ti[17]), ou && Eu("3s", ti[19]), rE.S && Eu("3b", ti[19]), Xz(), wz && Eu("3d", ti[19]), nz && Eu("3g", ti[19]), Mz === ti[4] || tz || Eu(Mz, ti[19]), Zz !== ti[4] && Eu(Zz, ti[19]), Rz === ti[4] && ru[ti[11]] !== ti[4] && (Rz = function(zz) {
              const uz = /[^\n]+/g,
                bz = /\b(?!wasm:)((?:blob:)?)(([a-z][\w+.-]*):\/\/[\w.:%~+[\]-]*)((?:[^\s()@?#]*\/)?)/i;
              let Ez = null,
                nz = "",
                iz = !1,
                lz = (0, rE.k)(rE.R, uz, [zz]);
              for (; null !== lz;) {
                const Mz = (0, rE.k)(rE.R, bz, [lz[0]]),
                  tz = null === Mz ? (0, rE.k)(rE.R, en, [lz[0]]) : null,
                  Hz = null !== tz && null !== (0, rE.k)(rE.R, jn, [tz[1]]) && 0 !== In(tz[1], "wasm:") ? tz[1] : null;
                if (null === Ez) null !== Mz ? (Ez = Mz[2], nz = Mz[4]) : null !== Hz && (Ez = "");
                else if (null !== Mz) {
                  iz = !0;
                  const zz = Mz[2] === Ez;
                  if ("" !== Mz[1] || !zz || Mz[4] !== nz) {
                    const uz = "moz-extension" === Mz[3] || "safari-web-extension" === Mz[3];
                    return (0, Sn.i)("" !== Mz[1] || zz ? "inline" : uz ? Mz[3] : Mz[2])
                  }
                } else if (null !== Hz) {
                  const zz = -1 !== In(lz[0], "userscript") || -1 !== In(lz[0], ".user.js");
                  return (0, Sn.i)(zz ? "userscript" : "inline")
                }
                lz = (0, rE.k)(rE.R, uz, [zz])
              }
              return (0, Sn.i)(iz ? "own" : "unknown")
            }(ru[ti[11]])), Rz !== ti[4] && Eu(Rz, ti[19]), Bz === ti[6]) return ti[4];
          if (zz[ti[0]] === ti[4] && Iz[ti[6]] && !(ti[6], Sn[ti[26]])(jz[ti[6]]))
            for (let bz = ti[0]; bz < lz; bz++)
              if (Iz[bz] && (ti[6], Sn[ti[26]])(jz[bz])) {
                const zz = jz[bz];
                for (let uz = bz; uz > ti[6]; uz--) Oi(jz[uz] = jz[uz - ti[0]], Iz[uz] = Iz[uz - ti[0]]);
                Oi(jz[ti[6]] = zz, Iz[ti[6]] = ti[17]);
                break
              } if (Oi(zz[ti[18]] = ti[6], zz[ti[11]] = zz[ti[0]] === ti[4] ? ti[6] : lz), zz[ti[11]] > ti[6] && Mz !== ti[4] && tz && !nz) {
            for (let uz = zz[ti[11]]; uz > ti[6]; uz--) Oi(jz[uz] = jz[uz - ti[0]], Iz[uz] = Iz[uz - ti[0]]);
            Oi(jz[ti[6]] = Mz, Iz[ti[6]] = ti[19], zz[ti[18]] = ti[0], zz[ti[11]]++)
          }
          if (zz[ti[57]] = ti[6], Cz++ % ti[2] === ti[0])
            for (let bz = ti[0]; bz < Bz; bz++) nu(bz) < nu(zz[ti[57]]) && (zz[ti[57]] = bz);
          const pz = jz[zz[ti[57]]];
          (Iz[zz[ti[57]]] ? zu : kz)[pz] = Yz++;
          const dz = zz[ti[57]] >= zz[ti[18]] && zz[ti[57]] < zz[ti[11]];
          if (!Iz[zz[ti[57]]] || pz === zz[ti[0]] || zz[ti[57]] === ti[6] && !dz) return pz === ti[90] ? (ti[6], Sn[ti[91]])(oz[du], Sn[ti[57]]) : pz;
          const Fz = (zz[-ti[120]] = zz[ti[0]]) !== ti[4] && zz[-ti[120]] !== void ti[6] ? zz[-ti[120]] : jz[ti[6]];
          return Fz !== uu && Oi(uu = Fz, bu = (ti[6], rE[ti[21]])(ti[4])), bu[pz] ??= (ti[6], Sn[ti[119]])(pz, Fz)
        }
      };
      let Uu = cu[ti[92]][ti[121]];
      const gu = () => xu !== cu[ti[92]][ti[121]] ? xu : Uu;
      let Su = ti[6],
        yu = ti[2],
        Du = ti[6],
        Qu = ti[6];
      return {
        checks: hu,
        checkEvent: (...zz) => {
          zz[ti[1]] = ti[0];
          try {
            const uz = nz[vu];
            if (typeof uz === ti[32] + ti[33] && !(zz[ti[6]] instanceof uz) && !(ti[6], rE.B)(zz[ti[6]])) return xu = cu[ti[92]].NotEvent, ti[6];
            if (zz[ti[6]].isTrusted === ti[19]) return ti[6];
            let bz = ti[6];
            for (const Ez in zz[ti[6]]) bz++;
            return bz < ti[45] ? (xu = cu[ti[92]]["FewPropertie" + ti[83]], ti[6]) : Au()
          } catch {}
          return ti[6]
        },
        checkPadCall: () => {
          try {
            return Au()
          } catch {
            return ti[6]
          }
        },
        usedProp: gu,
        watchHeld: (...zz) => {
          Oi(zz[ti[1]] = ti[2], zz[ti[123]] = ti[3]);
          const uz = sz((() => {
            zz[ti[123]] = zz[ti[0]]()
          }));
          mu[qu++] = [zz[ti[6]], () => !uz || zz[ti[0]]() !== zz[ti[123]]]
        },
        sd: (...zz) => {
          zz[ti[1]] = ti[6];
          const uz = cz();
          return ((...zz) => {
            if (Oi(zz[ti[1]] = ti[0], zz[ti[13]] = ti[3], zz[ti[2]] = ti[3]), bz !== ti[4]) {
              const uz = fz(bz.mO),
                Ez = "v3" === uz ? ti[5] : "v5" === uz ? ti[9] : "v6" === uz ? ti[28] : ti[2];
              Ez !== ti[2] && (yu = Ez);
              const nz = fz(bz["inbuil" + ti[126] + ti[127]]);
              typeof nz === ti[114] && nz >= ti[6] && nz <= ti[122] && (nz | ti[6]) === nz && (Du = nz), Oi(zz[ti[13]] = fz(bz.reflectApplyHit), zz[ti[2]] = fz(bz.definerHit))
            }
            const uz = zz[ti[6]] ? ti[65] : "11" === zz[ti[2]] ? ti[122] : "13" === zz[ti[2]] ? 13 : zz[ti[13]] !== ti[3] && zz[ti[13]] !== ti[4] ? ti[2] : "10" === zz[ti[2]] ? ti[45] : "12" === zz[ti[2]] ? ti[39] : ti[6];
            uz !== ti[6] && (Qu = uz)
          })(uz), Su++ % 10 === ti[6] && (Nu(), kn((() => !Yn(nz[iz][ti[116]][ti[116]](), Oz))) && (Uu = Uu === cu[ti[92]][ti[124]] ? cu[ti[92]][ti[124]] : cu[ti[92]].Fr), kn((() => !Yn(nz[iz][ti[116]](), Oz))) && (Uu = cu[ti[92]][ti[124]])), {
            flags: uz ? cu[ti[75]].Butto : ti[6],
            values: [
              [cu[ti[125]].PhysicsVersion, yu],
              [cu[ti[125]]["Inbuil" + ti[126] + ti[127]], Du],
              [cu[ti[125]]["AltCom" + ti[128]], Qu],
              [cu[ti[125]]["ProbeUsedPro" + ti[129]], gu()]
            ]
          }
        }
      }
    };
    const di = "[bloxd-wasm-client]",
      Fi = "bloxdWasmDownloadFailed",
      Zi = ku.c,
      Ri = "boot",
      Ki = "playSources",
      wi = "wasmBuild",
      Xi = "bloxd-wasm-joined",
      fi = "bloxd-wasm-first-view",
      si = "bloxd-wasm-playable-legacy",
      ri = 1048576,
      oi = 8 * ri,
      Ni = 8,
      vi = 1006,
      xi = 1e3,
      Ji = "You lost connection to the server.",
      Ai = "general:lostConnection",
      Ti = 1048576,
      Li = 5e3,
      Pi = 100,
      Gi = [2e3, 1e4, 3e4],
      ai = 3e4;
    let Vi = null,
      mi = null,
      qi = !1,
      Ui = !1,
      ci = !1,
      gi = null,
      Si = null,
      yi = null,
      Di = null,
      Qi = null,
      Wi = null,
      ei = null;
    const ji = new class {
      constructor(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now();
        this.master = zz, this.soundOn = uz, this.now = bz, this.player = null, this.local = [], this.stopped = !1
      }
      get loaded() {
        return null !== this.player
      }
      get queued() {
        return this.local.length
      }
      prepare() {
        var zz;
        null === (zz = this.player) || void 0 === zz || zz.prepare()
      }
      preload(zz) {
        var uz;
        this.stopped || (null === (uz = this.player) || void 0 === uz || uz.preload(zz))
      }
      cancelPreload() {
        var zz;
        null === (zz = this.player) || void 0 === zz || zz.cancelPreload()
      }
      load(zz) {
        if (null !== this.player || this.stopped) return;
        this.player = zz, zz.setMaster(this.master, this.soundOn);
        const uz = this.now(),
          bz = this.local;
        this.local = [];
        for (const nz of bz)
          if (!(nz.stopped || !nz.loop && uz - nz.at >= 300)) try {
            this.start(nz, zz, uz)
          } catch (Ez) {
            console.error("[bloxd-wasm-client] a queued sound wouldn't start", Ez)
          }
      }
      start(zz, uz, bz) {
        const {
          name: Ez,
          pos: nz,
          ear: iz,
          maxHearDist: lz,
          refDistance: Mz,
          loop: tz,
          fade: Hz
        } = zz, Oz = uz.playGame(Ez, mu(zz, bz), nz, iz, lz, Mz, tz);
        if (zz.sound = Oz, 1 !== zz.rate && Oz.rate(zz.rate), null !== zz.panner && Oz.setPannerAttr(zz.panner), null !== zz.moved && Oz.setPosition(zz.moved), null !== Hz && bz - Hz.at < Hz.ms) {
          const uz = Vu(this.master);
          uz > 0 ? Oz.fade(0, zz.volume * uz, Hz.at + Hz.ms - bz) : Oz.setRelativeVolume(zz.volume)
        }
      }
      onAudioEvent(zz, uz, bz, Ez) {
        var nz, iz;
        return null === (nz = null === (iz = this.player) || void 0 === iz ? void 0 : iz.onAudioEvent(zz, uz, bz, Ez)) || void 0 === nz || nz
      }
      applyListener(zz) {
        var uz;
        null === (uz = this.player) || void 0 === uz || uz.applyListener(zz)
      }
      playGame(zz, uz, bz, Ez, nz, iz, lz) {
        if (this.stopped) return au.e;
        if (this.player) return this.player.playGame(zz, uz, bz, Ez, nz, iz, lz);
        const Mz = this.now();
        this.local = this.local.filter((zz => !zz.stopped && (zz.loop || Mz - zz.at < 300)));
        const tz = {
          name: zz,
          volume: Vu(uz),
          fade: null,
          pos: bz && [bz[0], bz[1], bz[2]],
          ear: Ez && [Ez[0], Ez[1], Ez[2]],
          maxHearDist: nz,
          refDistance: iz,
          loop: lz,
          rate: 1,
          panner: null,
          moved: null,
          at: Mz,
          stopped: !1,
          sound: null
        };
        this.local.push(tz);
        const Hz = {
          stop: () => {
            var zz;
            return tz.stopped = !0, null === (zz = tz.sound) || void 0 === zz || zz.stop(), Hz
          },
          fade: (zz, uz, bz) => {
            if (tz.sound) return tz.sound.fade(zz, uz, bz), Hz;
            const Ez = Vu(this.master),
              nz = Vu(Ez > 0 ? uz / Ez : uz > 0 ? tz.volume : 0),
              iz = this.now(),
              lz = mu(tz, iz);
            return tz.volume = nz, tz.fade = bz > 0 && lz !== nz ? {
              from: lz,
              at: iz,
              ms: bz
            } : null, Hz
          },
          rate: zz => (tz.sound ? tz.sound.rate(zz) : tz.rate = zz, Hz),
          getVolume: () => tz.sound ? tz.sound.getVolume() : tz.volume * Vu(this.master),
          getRelativeVolume: () => tz.sound ? tz.sound.getRelativeVolume() : tz.volume,
          setRelativeVolume: zz => (tz.sound ? tz.sound.setRelativeVolume(zz) : (tz.volume = Vu(zz), tz.fade = null), Hz),
          setPannerAttr: zz => (tz.sound ? tz.sound.setPannerAttr(zz) : tz.panner = {
            ...zz
          }, Hz),
          setPosition: zz => (tz.sound ? tz.sound.setPosition(zz) : tz.moved = [zz[0], zz[1], zz[2]], Hz)
        };
        return Hz
      }
      setMaster(zz, uz) {
        var bz;
        this.master = zz, this.soundOn = uz, null === (bz = this.player) || void 0 === bz || bz.setMaster(zz, uz)
      }
      stop() {
        var zz;
        this.stopped = !0, null === (zz = this.player) || void 0 === zz || zz.stopAll();
        for (const uz of this.local) uz.stopped = !0;
        this.local = []
      }
    }((0, ou.c)(), !0);
    let Ii = {
        wasm: "unknown",
        client: String(uu.c)
      },
      Bi = null,
      Ci = () => {};
    const Yi = new Promise((zz => {
      Ci = zz
    }));
    let ki = () => {};
    const zl = new Promise((zz => {
      ki = zz
    }));
    let ul, bl = null,
      El = null,
      nl = null,
      il = null,
      ll = null,
      Ml = null,
      tl = null,
      Hl = null,
      Ol = null,
      pl = null,
      dl = null,
      Fl = null,
      Zl = null,
      Rl = null,
      Kl = null,
      wl = null,
      Xl = null,
      fl = null,
      sl = !1,
      rl = null;
    const ol = new Set,
      Nl = new Set;

    function vl(zz) {
      if (!ol.has(zz)) {
        ol.add(zz);
        for (const bz of Nl) try {
          bz(zz)
        } catch (uz) {
          console.error(`${di} a startup listener threw`, uz)
        }
      }
    }

    function xl(zz) {
      sl = !0, zz.isStopped || vl("texturesIn")
    }
    let Jl = 1,
      Al = -1 / 0,
      Tl = !1,
      Ll = !1,
      Pl = 0,
      Gl = null,
      al = !1;
    const Vl = {
      dropped: -1 / 0,
      pause: -1 / 0
    };
    let ml = 0,
      ql = 0,
      hl = null,
      Ul = null,
      cl = null,
      gl = null;
    const Sl = new WeakMap;
    let yl = null,
      Dl = null,
      Ql = null,
      Wl = null,
      el = null,
      jl = null,
      Il = null,
      Bl = 0,
      Cl = null,
      Yl = null,
      kl = null,
      zM = null,
      uM = -1 / 0,
      bM = null;
    const EM = new Set;
    let nM = !1,
      iM = null;
    const lM = new Map,
      MM = new Set;
    let tM = !1;
    const HM = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null
    };
    let OM = null,
      pM = () => [0, 0],
      dM = () => {},
      FM = () => {},
      ZM = null,
      RM = null;
    const KM = new class {
      constructor(zz) {
        this.reached = zz, this.next = 1
      }
      observe(zz) {
        if (!(zz < this.next)) {
          for (; this.next <= zz;) this.next *= 2;
          this.reached(zz)
        }
      }
    }((zz => {
      console.warn(`${di} chunk cancels from the server this session: ${zz}`)
    }));
    let wM = 1,
      XM = null,
      fM = null,
      sM = null,
      rM = null,
      oM = null,
      NM = !1,
      vM = !1,
      xM = 0,
      JM = null,
      AM = !1,
      TM = null,
      LM = null,
      PM = !1;
    const GM = new class {
      constructor(zz) {
        this.sK = zz, this.lossPending = !1, this.undrawnSinceMs = null, this.lastFrameMs = 0, this.shown = !1
      }
      deviceLost() {
        this.lossPending = !0
      }
      frame(zz, uz, bz) {
        (0, Ju.e)(zz) && (this.lossPending = !1);
        const Ez = bz - this.lastFrameMs;
        this.lastFrameMs = bz, this.lossPending && uz && (0, Ju.l)(zz) ? (null === this.undrawnSinceMs || Ez > 1e3) && (this.undrawnSinceMs = bz) : this.undrawnSinceMs = null, this.show(null !== this.undrawnSinceMs && bz - this.undrawnSinceMs >= 2e3)
      }
      stop() {
        this.lossPending = !1, this.undrawnSinceMs = null, this.show(!1)
      }
      show(zz) {
        zz !== this.shown && (this.shown = zz, this.sK(zz))
      }
    }((zz => {
      tz.k.sK(Gu.c, zz)
    }));
    let aM = !1,
      VM = !0,
      mM = null,
      qM = !1,
      hM = !1,
      UM = !1;

    function cM() {
      return yi ??= Promise.all([bz.e(189), bz.e(136), bz.e(56)]).then((() => bz(42555))).then((zz => (Si = zz, Object.assign(globalThis, {
        bloxdPreviewPage: zz.pagePreviews()
      }), zz)), (zz => {
        throw yi = null, zz
      })), yi
    }

    function gM() {
      return gi ??= bz.e(54).then((() => bz(42579))).catch((zz => {
        throw gi = null, new oz.b(zz)
      })), gi
    }
    class SM {
      constructor() {
        this.host = null
      }
      open(zz) {
        return null !== this.host ? zz(this.host) : cM().then((uz => (this.host ??= new uz.WasmPreviewHost(uz.pagePreviews()), zz(this.host))))
      }
      openMob(zz) {
        return this.open((uz => uz.openMob(zz)))
      }
      openPet(zz) {
        return this.open((uz => uz.openPet(zz)))
      }
      openMobLineup(zz) {
        return this.open((uz => uz.openMobLineup(zz)))
      }
      openCharacter(zz, uz) {
        return this.open((bz => bz.openCharacter(zz, uz)))
      }
    }

    function yM() {
      ci || (ci = !0, BE.g.setHost(new SM), (0, wb.p)(), WE.f.setFollower(Qt), Object.assign(globalThis, {
        bloxdPreviews: BE.g
      }))
    }

    function DM() {
      cM().then((zz => {
        zz.pagePreviews().prefetch()
      }), (() => {}))
    }

    function QM() {
      let zz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (Ui) return;
      Ui = !0, aM = "play" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "shell"), VM = !aM, console.info(`${di} starting`), qi || (qi = !0, (0, Gu.F)(new Tu(tt, Kt)), (0, dz.n)(new Lu), (0, Gu.D)(new Pu), (0, Gu.u)()), yM(), (0, ob.setCrashScreen)((zz => {
        let {
          text: uz,
          reload: bz
        } = zz;
        ! function(zz, uz) {
          var bz, Ez;
          if (qM) return;
          qM = !0, (0, fb.i)(), null === (bz = bM) || void 0 === bz || bz.abort(), bM = null, eE.e.release();
          const nz = aM ? null !== (Ez = zz.cancel) && void 0 !== Ez ? Ez : "general:back" : null;
          ZE({
            ...zz,
            cancel: nz
          }).then((zz => {
            zz && uz && hM ? ((0, pu.q)("reloadOntoJs"), (0, Dz.g)(pu.y)) : zz && uz ? (0, Dz.j)() : aM && (0, Dz.d)("/")
          }))
        }(uz, bz)
      })), (0, hE.j)(), (0, ru.h)();
      let uz = null;
      try {
        uz = Mi("pzznt3itgj", (() => {
          var zz, uz;
          return null !== (zz = null === (uz = bl) || void 0 === uz ? void 0 : uz.ws) && void 0 !== zz ? zz : null
        }), zz, "zmnluctdxq")
      } catch (nz) {
        console.error(`${di} probes`, nz)
      }
      const Ez = function() {
        const zz = (0, XE.q)(),
          uz = (0, XE.j)();
        let bz = !1;
        return Ez => {
          zz && !bz && (bz = !0, (0, ob.reportStaleBuildReload)(zz, uz, Ez))
        }
      }();
      et(), aM || function() {
        const zz = function(zz) {
          var uz;
          const bz = new URLSearchParams(zz),
            Ez = bz.get("game");
          return Ez ? {
            game: Ez,
            lobby: null !== (uz = bz.get("lobby")) && void 0 !== uz ? uz : null
          } : null
        }(window.location.search);
        if (zz) return (0, bu.k)(zz.game) && et().request(), void jM(zz.game, zz.lobby);
        const uz = new URLSearchParams(window.location.search).get("ws");
        if (!uz) return;
        Yi.then((zz => {
          zz && async function(zz, uz) {
            try {
              await (0, oz.l)(zz), Dl = rt(new WebSocket(uz)), null !== Dl && eE.e.setGame(null), WM()
            } catch (nz) {
              console.error(`${di} ?ws=${uz} did not attach`, nz)
            }
          }(zz, uz)
        }))
      }(), async function(zz) {
        var uz, Ez, iz, lz, Mz;
        if ("undefined" === typeof WebAssembly) return ht("noWebAssembly", "This browser has no WebAssembly"), null;
        const Hz = await (0, bn.I)();
        if ((0, ob.setCrashBackend)((0, ku.m)(Hz) ? "unsupported" : null !== (uz = null === Hz || void 0 === Hz ? void 0 : Hz.backend) && void 0 !== uz ? uz : "none"), (0, ku.m)(Hz)) return ht("browser", `No WebGPU or WebGL2, and WebGL1 lacks ${Hz.missing.join(", ")}`, {
          missing: Hz.missing.join(",")
        }), null;
        if ((0, Ln.n)("render")) try {
          const {
            startRenderDebug: zz
          } = await Promise.all([bz.e(74), bz.e(47)]).then((() => bz(4430)));
          zz(Hz)
        } catch (Nu) {
          console.warn("The render debug topic didn't load", Nu)
        }
        if ((0, Ln.n)("renderlite")) try {
          const {
            startRenderLite: zz
          } = await Promise.all([bz.e(259), bz.e(48)]).then((() => bz(42598)));
          sM = zz(Hz)
        } catch (Nu) {
          console.warn("The renderlite debug topic didn't load", Nu)
        }
        let Oz = null;
        if (null !== Hz && Ut()) {
          const zz = (0, RE.f)(Hz, !0);
          "webgl" === Hz.backend && null !== zz && (0, Fu.l)(zz, ob.reportGpuWasmPopulation), null !== zz && (0, du.l)(zz), Oz = (0, RE.d)(Hz, zz)
        }
        if (null !== Hz && null !== Oz) return (0, ob.reportGpuFallback)(Oz, Hz.backend), ct(`the wasm client's renderer plays this GPU (${Oz}) on ${Hz.backend} worse than the JS client`, "gpu"), null;
        const pz = null !== (Ez = null === Hz || void 0 === Hz ? void 0 : Hz.backend) && void 0 !== Ez ? Ez : null;
        HM.adapter = null !== (iz = null === Hz || void 0 === Hz ? void 0 : Hz.adapter) && void 0 !== iz ? iz : null, HM.boundAtMs = null, HM.indirectHangs = null;
        const dz = !(0, ku.W)();
        null !== Hz && "none" !== Hz.reason && console.info(`${di} drawing with ${Hz.backend}: ${Hz.reason}`);
        const Fz = (0, bn.B)();
        ki(!0), (0, oz.s)((zz => {
          try {
            null !== pz && (ZM = zz.startSkyFeed, St(), function(zz) {
              var uz, bz;
              pM = zz.rasterText, Wl = zz.setTextLocalPlayer, zz.setTextLocalPlayer(null !== (uz = null === (bz = Ql) || void 0 === bz ? void 0 : bz.info.playerDbId) && void 0 !== uz ? uz : null), dM = zz.drainTextRerasters, FM = zz.loadTextIcons, zz.warmText((() => NM)), zz.textChanged(), NM && setTimeout(FM, 0)
            }(zz), RM = zz.startShellAnalytics, kt())
          } finally {
            UM || (rM = zz.followMenuPrefs({
              setSoundPrefs: Xt,
              setEnvPrefs: ft,
              setUiPrefs: wt,
              setLookPrefs: st
            }))
          }
        })), (0, oz.m)(ji).catch((zz => {
          console.warn(`${di} the game code did not load: a join asks again`, zz)
        }));
        const Zz = (0, bn.k)(Hz);
        let Rz, Kz;
        Zz.catch((() => {})), "loading" === (0, iu.E)() && Xn();
        try {
          Rz = function(zz) {
            const uz = null !== zz && void 0 !== zz ? zz : document.createElement("canvas");
            uz.id = "wasm-game-canvas", (0, On.i)();
            const bz = (0, Au.f)(),
              Ez = (0, Au.i)(bz);
            return uz.style.cssText = "position:fixed;top:0;left:0;display:block;touch-action:none;outline:none;background:#000", (0, Hn.g)(uz, Ez), (0, Au.c)(uz, bz), uz.width = Ez.bufferWidth, uz.height = Ez.bufferHeight, Ht(uz, VM), mM = uz, document.body.append(uz), uz
          }(null === pz ? null : await (await cM()).pagePreviews().beginSession())
        } catch (nz) {
          return await TH({
            site: wi,
            error: nz
          }, (() => {
            (0, ob.showUnsupported)((0, pE.q)("fetch"), Un.f.fetch, `the previews did not load: ${String(nz)}`)
          })), null
        }
        Xn();
        try {
          Kz = await Zz
        } catch (nz) {
          return await TH({
            site: wi,
            error: nz
          }, (() => {
            (0, ob.showUnsupported)((0, pE.q)("fetch"), Un.f.fetch, `the ${null!==pz&&void 0!==pz?pz:"client"} build did not load: ${String(nz)}`)
          })), null
        }
        const wz = (0, bn.f)(),
          Xz = !wz && !0 !== rb.h.getItem(Fi),
          fz = !wz && "loading" === (0, iu.E)();
        await (0, lu.g)(Kz, Ou.h, {
          reloadFailedDownload: Xz
        }), fz && !(0, iu.R)() && await (0, lu.g)(Kz, Ou.h, {
          reloadFailedDownload: Xz
        });
        Rn = performance.now();
        const sz = Ii;
        if (!(0, iu.R)()) {
          (0, iu.Q)() && rb.h.setItem(Fi, !0);
          const zz = (0, iu.s)();
          if ("call" === zz) XH({
            site: zb.u,
            error: (0, iu.r)(),
            header: null
          }, sz);
          else {
            const uz = null !== zz && void 0 !== zz ? zz : "instantiate",
              bz = () => {
                (0, ob.showUnsupported)((0, pE.q)(uz), Un.f[uz], (0, iu.l)())
              };
            if ("compile" !== zz && "instantiate" !== zz || !Ut())
              if ("fetch" === uz) {
                const zz = [Kz.url().href, Ou.h.url().href];
                await TH({
                  site: wi,
                  error: (0, iu.l)(),
                  urls: zz
                }, bz)
              } else bz();
            else {
              const uz = (0, iu.l)(),
                bz = (0, Su.j)((0, iu.r)());
              (0, ob.reportCountedLoadFallback)((0, pE.q)(zz), Un.f[zz], uz, bz), ct(`the wasm client did not ${zz} here (${uz})`, bz ? "oom" : null)
            }
          }
          return null
        }(0, Mu.H)(Kz.url()) && (0, ob.reportUnstreamedCoreLoad)();
        const Nz = (0, iu.G)();
        let vz, xz = sz;
        try {
          xz = {
            ...sz,
            wasm: Nz.Wp()
          };
          const {
            oK: zz
          } = Kz.bindings, uz = zz.Zbz();
          if (uz !== cu.w) return XH({
            site: zb.c,
            error: `core ABI ${uz}, page ABI ${cu.w}`,
            header: null
          }, xz), null;
          const [bz, Ez] = (0, cu.ge)();
          vz = new zz(bz, Ez)
        } catch (nz) {
          return XH({
            site: zb.c,
            error: nz,
            header: null
          }, xz), null
        }
        Ii = xz, Bi = Kz.bindings;
        const Jz = new zb.h(vz, iu.x, {
          onCrash: zz => {
            var uz;
            null === (uz = sM) || void 0 === uz || uz.crashed(zz), dz && function(zz, uz, bz) {
              if ("webgpu" !== uz || (0, bn.e)()) return !1;
              const Ez = function(zz) {
                if (zz.site === zb.f && (0, ku.o)(zz.error)) return "frames_refused";
                return zz.site === Zi && (0, ku.r)(zz.error) ? "start_failed" : null
              }(zz);
              if (null === Ez || !(0, ku.Q)(Ez)) return !1;
              return (0, ob.reportRenderReload)("webgpu", "start_failed" === Ez ? 0 : 1, bz, {
                cause: Ez,
                error: zz.error,
                context: HM,
                session: rH(null)
              }), nH(), !0
            }(zz, pz, xz) || XH(zz, xz)
          },
          onNetEvent: EH,
          onReconnectGrace: Vt,
          onCoreErrors: (zz, uz) => {
            var bz, Ez;
            zz.some((zz => {
              let {
                code: uz
              } = zz;
              return uz === cu.G.RenderDeviceLost
            })) && ((0, bn.y)(), GM.deviceLost()), null === (bz = sM) || void 0 === bz || bz.coreErrors(zz), (0, ob.reportCoreErrors)(zz, uz, xz, ((zz, uz) => {
              var bz;
              return null === (bz = OM) || void 0 === bz ? void 0 : bz.Rbz(zz, uz)
            })), null === (Ez = rl) || void 0 === Ez || Ez.coreErrors(zz)
          },
          onRenderReload: (zz, uz, bz) => {
            ! function(zz, uz, bz, Ez, nz, iz) {
              var lz;
              if ((0, bn.e)()) return;
              const Mz = uz === cu.Qc.WEBGPU,
                tz = Ez === cu.Qc.PIPELINE_FAILED ? "pipeline_failed" : "lost",
                Hz = (0, ku.S)(OM);
              null === (lz = sM) || void 0 === lz || lz.reload(Mz, bz, tz, null === Hz || void 0 === Hz ? void 0 : Hz.message);
              const Oz = Mz ? (0, ku.N)(tz, nz) : null;
              if (null !== Oz) {
                const uz = void 0 === Hz ? "" : ` (${Hz.message})`;
                return void zz.crash(ob.RENDER_RELOAD_SITE, new Error(`${(0,ob.renderReloadMessage)("webgpu",tz,bz)} and ${Oz}${uz}`))
              }
              const pz = Mz ? "webgpu" : "webgl1" === iz ? "webgl1" : "webgl";
              "lost" === tz && (0, bn.y)();
              (0, ob.reportRenderReload)(pz, bz, Ii, {
                cause: tz,
                error: Hz,
                context: HM,
                session: rH(zz.sunShadowsHeld())
              }), nH()
            }(Jz, zz, uz, bz, dz, pz)
          },
          onEnvEvent: zz => {
            var uz;
            zz.kind === cu.V.SkyImages && (null === (uz = wl) || void 0 === uz || uz.onEvent(zz.payload))
          },
          onImages: zz => {
            var uz;
            null === (uz = Xl) || void 0 === uz || uz.onEvent(zz)
          },
          onModelRequest: zz => {
            var uz;
            null === (uz = Zl) || void 0 === uz || uz.request(zz)
          },
          onModelTaken: (zz, uz) => {
            var bz;
            null === (bz = Zl) || void 0 === bz || bz.taken(zz, uz)
          },
          onTerrainTexturesWanted: () => {
            queueMicrotask((() => {
              ! function(zz, uz) {
                const bz = ei;
                if (null === bz || zz.isStopped) return;
                bz.restore((zz => {
                  (0, ob.reportTerrainTextureFailure)(zz, uz)
                })).then((uz => {
                  !1 !== uz || zz.isStopped ? !0 === uz && console.info(`${di} terrain textures handed over again after the renderer lost them`) : console.warn(`${di} the terrain textures couldn't be handed over again: the terrain draws blank`)
                }))
              }(Jz, xz)
            }))
          },
          onKeepAlive: zz => {
            const uz = null === gl ? void 0 : Sl.get(gl);
            void 0 !== uz && NE(uz, zz)
          }
        });
        if (Di = Jz, null !== zz) {
          Jz.setAntiCheatProbes(bi(iu.x, zz.checks)), zz.watchHeld(ni.CoreFrame, (() => Jz.frame)), zz.watchHeld(ni.GlueFrame, (() => vz.frame));
          const uz = li(zz, ((zz, uz, bz) => {
            let Ez = !1;
            return vH(Jz, (() => {
              Ez = Jz.rings.input.writeRecord(cu.pb.AntiCheat, zz, uz, bz, 0)
            })), Ez
          }));
          Jz.isStopped ? uz.stop() : dl = uz
        }
        Vi = (zz, uz, bz) => Jz.rings.cmd.writeCmd(zz, uz, bz), mi = zz => Jz.rings.cmd.growForCmd(zz), al = !1, St(), (0, oz.v)(Jz, {
          core: vz,
          memory: iu.x,
          staleOr: (zz, uz, bz) => TH({
            site: zz,
            error: uz
          }, bz),
          reportReplayFault: (zz, uz) => {
            (0, ob.reportReplayFault)(zz, uz, Ii)
          },
          audio: ji,
          options: Zu.b,
          onNetEvent: EH,
          sessionInfo: zz => {
            var uz;
            return (null === (uz = Ql) || void 0 === uz ? void 0 : uz.conn) === zz ? Ql.info : null
          },
          onEventOverflow: lt,
          replayShaderPack: zz => {
            var uz;
            null === (uz = rl) || void 0 === uz || uz.replay(zz)
          },
          hasPackModel: zz => {
            var uz, bz;
            return null !== (null !== (uz = null === (bz = yt()) || void 0 === bz ? void 0 : bz.modelUrl(zz)) && void 0 !== uz ? uz : null)
          },
          beforeWrite: () => (!Tl && Jz.rings.net.cursor > 0 && MH(Jz, !1, "all"), !Jz.isStopped),
          beforeOp: () => (!Tl && Jz.netWrittenSinceFrame > 0 && MH(Jz, !1, "budget"), !Jz.isStopped)
        }), (0, rz.L)({
          lockPointer: () => {
            if (!qb(Rz)) return !1;
            try {
              Promise.resolve(Rz.requestPointerLock()).catch((() => {}))
            } catch {
              return !1
            }
            return !0
          },
          unlockPointer: () => {
            (0, vb.b)()
          },
          leaveGame: () => {
            it()
          },
          canvas: () => Rz
        }), Fl = (0, rz.A)((() => {
          var zz;
          const uz = (0, oz.j)();
          null === (zz = (0, oz.q)()) || void 0 === zz || zz.followCursorAim(!0 === (null === uz || void 0 === uz ? void 0 : uz.isSessionLive) ? uz : null)
        })), hl && Jz.setUiPrefs(hl);
        Ul && Jz.setEnvPrefs(Ul);
        cl && Jz.setLookPrefs(cl);
        const Az = Mn ? tn(Mn.preventMovement) : null;
        Az && Rt(Az);
        const Tz = (0, Zb.h)(),
          Lz = (0, Zb.e)(Jz, Tz);
        Ol = Tz.basis, (0, sb.i)(null === Lz ? null : (0, Fb.p)(Lz)), Hl = Lz;
        const Pz = (0, tu.d)();
        let Gz = 1 / 0,
          az = !0,
          Vz = Tz.shedFootprintBytes;
        const mz = new qE.c(Pz, (() => vz.LK()), (zz => {
          Jz.crash(zb.n, zz)
        }));
        Ml = mz, tl = mz, null !== Lz && mz.setCeiling(Math.min((0, qE.q)(Lz), Gz));
        if (az) {
          mz.setShed((zz => {
            const uz = Jz.shedMemory("joinReserve" !== zz);
            return null !== uz && (null === Hl || uz < Hl) && (Hl = uz, (0, sb.i)((0, Fb.p)(uz))), uz
          }), ((zz, uz, bz) => {
            1 === uz ? (0, ob.reportMemoryShed)(zz, bz, Ii) : console.warn(`${di} wasm memory: shed again (${zz}): shed ${uz}`, bz.wasmMemoryShed)
          }), (() => Jz.addDistanceInUse()));
          const zz = (0, ku.E)(Nz);
          mz.setFootprint(new Tn(Vz, {
            storedChunks: () => vz.Kbz(),
            gpuBytes: () => {
              var uz;
              return null !== (uz = null === zz || void 0 === zz ? void 0 : zz.wbz()) && void 0 !== uz ? uz : 0
            },
            jsHeapBytes: An
          }))
        }
        window.addEventListener("pagehide", (() => {
          Ml === mz && (mz.refreshStats(), NH(mz))
        })), window.addEventListener("pagehide", iH), window.addEventListener("pagehide", lH), !1;
        const [qz, hz] = (0, Kb.e)();
        oM = (0, Xb.e)((zz => Jz.setChunkAddDistance(zz.horizontal, zz.vertical)), {
          horizontal: qz,
          vertical: hz
        }), Jz.setAmbientOcclusion(!0 !== rb.g.getItem("disableAmbientOcclusion")), Jz.setPoseLod(!0 !== rb.g.getItem(nu.W)), (0, Ln.n)("look") && (Jz.setDebugLog(cu.L.Look, !0), (0, Gn.j)("wasm", (() => Jz.takeDebugLog(cu.L.Look))));
        (0, Ln.n)("remesh") && (Jz.setDebugLog(cu.L.Remesh, !0), Uz = () => Jz.takeDebugLog(cu.L.Remesh), hn = new qn((0, an.m)(), Uz));
        var Uz;
        const cz = function(zz, uz, bz, Ez) {
          const nz = new zE,
            iz = zz => rb.g.getItem(zz);
          nz.sync(iz, uz), (0, xu.S)();
          const lz = (0, tz.o)("customBindingsChanged", (() => {
            nz.sync(iz, uz)
          }));
          (0, xb.l)(uz);
          const Mz = new Set,
            Hz = (0, rz.A)((() => {
              var zz;
              Mz.size > 0 && nE() && !0 === (null === (zz = (0, oz.j)()) || void 0 === zz ? void 0 : zz.localPlayerAlive()) && tz.k.sK("usedKeyboard")
            })),
            Oz = Qb.d.heldSizer((() => (0, Au.p)(zz))),
            pz = Db(zz, uz, {
              prevents: zz => nz.prevents(zz),
              keyPressed: zz => {
                nz.moves(zz) && (Mz.add(zz), nE() && tz.k.sK("usedKeyboard"))
              },
              keyReleased: zz => {
                Mz.delete(zz)
              },
              keysReleased: () => {
                Mz.clear()
              },
              resized: () => {
                bE.h.measure(zz.getBoundingClientRect()), (0, Wb.m)()
              },
              sizeCanvas: Oz,
              watchRenderScale: uz => {
                const bz = (0, Au.t)(zz, uz),
                  Ez = Qb.d.onRelease(uz);
                return () => {
                  bz(), Ez()
                }
              },
              touchStarting: () => {
                bE.h.measure(zz.getBoundingClientRect())
              },
              viewShown: bz,
              touchUiShown: () => Qz.e.get("isTouchScreen"),
              ctrlCombosAreGames: nE,
              inspect: (zz, uz, bz) => {
                nz.checks(uz, bz) && Ez(zz)
              },
              canLock: () => qb(zz)
            }),
            dz = (0, ib.d)(uz);
          return () => {
            lz(), Hz(), (0, xb.l)(null), dz(), pz()
          }
        }(Rz, ((zz, uz, bz, Ez, nz) => {
          var iz;
          vH(Jz, (() => {
            Jz.rings.input.writeRecord(zz, uz, bz, Ez, nz)
          })), null === (iz = dl) || void 0 === iz || iz.onInput(zz), !Ll && (0, HE.f)(zz, nz) && (0, HE.c)((() => {
            Di !== Jz || UM || Jz.isStopped || !FH() || MH(Jz, !1, "budget", !1)
          }))
        }), (() => VM), (zz => {
          var uz;
          null === (uz = dl) || void 0 === uz || uz.onEvent(zz)
        }));
        if (Jz.isStopped) return cz(), null;
        El = cz;
        const gz = () => !Jz.isStopped && !qM;
        if (Jz.isStopped) return null;
        (0, iu.W)((() => {
          "call" === (0, iu.s)() && Jz.crash(zb.u, (0, iu.r)())
        }));
        const Sz = (0, zb.N)(Jz.rings.worker, (() => {
          MH(Jz, !1, "budget")
        }));
        nl = function(zz, uz) {
          return xH().then((zz => {
            let {
              prefetchWorldgenWorker: uz
            } = zz;
            uz()
          }), (() => {})), new gn({
            module: (0, iu.A)(),
            decodeSettings: zz => {
              const uz = (0, oz.q)();
              if (null === uz) throw new Error("no game code to decode the world-gen seed with");
              return uz.decodeMapSettings(zz)
            },
            loadWorker: JH,
            onMapWithoutWorldgen: () => {
              AH((zz => {
                let {
                  stopWorldgenWorkerPrefetch: uz
                } = zz;
                uz()
              }))
            },
            onLoadFailed: zz => {
              (0, ob.reportWorldgenLoadFailure)(zz, Ii)
            },
            onWorkerLost: zz => {
              (0, ob.reportWorkerLost)(zb.E, zz, Ii)
            },
            onStartTimeout: zz => {
              (0, ob.reportWorkerStartTimeout)(zb.E, zz, Ii)
            },
            onGaveUp: zz => {
              (0, ob.reportWorldgenGaveUp)(zz, Ii)
            },
            onMemoryStats: zz => {
              var uz;
              null === (uz = Ml) || void 0 === uz || uz.noteWorldgen(zz)
            },
            onMemoryGone: () => {
              var zz;
              null === (zz = Ml) || void 0 === zz || zz.worldgenGone()
            },
            write: (bz, Ez, nz, iz, lz) => {
              vH(zz, (() => {
                zz.rings.worker.writeWorkerRecord(bz, Ez, nz, 0, iz, lz) || zz.crash(zb.E, `a world-gen record of kind ${Ez} did not fit the worker-in ring`)
              })), uz()
            }
          })
        }(Jz, Sz), ll = function(zz, uz) {
          return new VE({
            module: (0, iu.A)(),
            loadWorkers: async () => {
              const [{
                createMeshWorker: zz
              }, uz] = await Promise.all([bz.e(40).then((() => bz(42638))), Promise.resolve().then((() => bz(96))).then((zz => {
                let {
                  isMobile: uz
                } = zz;
                return uz()
              }), (() => !1))]);
              return {
                create: zz,
                count: (0, su.d)(navigator.hardwareConcurrency, uz)
              }
            },
            write: (bz, Ez, nz, iz, lz, Mz) => {
              (0, Wb.j)(), vH(zz, (() => {
                zz.rings.worker.writeWorkerRecord(bz, Ez, nz, iz, lz, Mz) || zz.crash(zb.o, `a meshing record of kind ${Ez} did not fit the worker-in ring`)
              })), uz()
            },
            onWorkerLost: zz => {
              (0, ob.reportWorkerLost)(zb.o, zz, Ii)
            },
            onLightFault: (zz, uz) => {
              (0, ob.reportLightFault)(zz, uz, Ii)
            },
            onStartTimeout: zz => {
              (0, ob.reportWorkerStartTimeout)(zb.o, zz, Ii)
            },
            onMemoryStats: (zz, uz) => {
              var bz;
              null === (bz = Ml) || void 0 === bz || bz.noteMeshWorker(zz, uz)
            },
            onMemoryGone: zz => {
              var uz;
              null === (uz = Ml) || void 0 === uz || uz.meshWorkerGone(zz)
            },
            fail: (uz, bz) => {
              const Ez = () => {
                zz.crash(zb.o, void 0 === bz ? uz : new Error(uz, {
                  cause: bz
                }))
              };
              void 0 !== bz ? TH({
                site: zb.o,
                error: bz
              }, Ez) : Ez()
            }
          })
        }(Jz, Sz);
        const Wz = (0, jE.q)(Xu.clientSideServerUrls.staticUrl, {
            onTableFailed: zz => {
              TH({
                site: ob.MODEL_FEED_SITE,
                error: zz
              }, (() => {}), gz)
            },
            packUrl: zz => {
              var uz, bz;
              return null !== (uz = null === (bz = yt()) || void 0 === bz ? void 0 : bz.modelUrl(zz)) && void 0 !== uz ? uz : null
            }
          }),
          ez = function(zz, uz, bz) {
            const Ez = bz => {
              var Ez, nz;
              return null !== (Ez = null === (nz = uz()) || void 0 === nz ? void 0 : nz.drawnUrl(bz)) && void 0 !== Ez ? Ez : zz.url(bz)
            };
            return (0, WE.m)((0, UE.n)(Ez), bz)
          }(Wz, (() => Zl), yt),
          jz = new UE.f(ez, (zz => {
            console.warn(`${di} image ${zz.key.kind}:${zz.key.index}:${zz.key.word} failed`, zz.error)
          }));
        Xl = jz, fl = new DE(Jz, ez, ((zz, uz) => {
          void 0 === uz ? console.warn(`${di} ${zz}`) : Wt(zz, uz)
        }));
        const Iz = new QE.l(Wz, function(zz, uz) {
          let Ez = !1,
            nz = null,
            iz = null;
          const lz = {
              onUnavailable: (bz, Ez) => {
                iz ??= TH({
                  site: ob.MODEL_POOL_SITE,
                  error: bz,
                  urls: Ez
                }, (() => {
                  (0, ob.reportModelPoolFailure)(bz, zz)
                }), uz)
              },
              onDecoderFailed: (bz, Ez) => {
                const nz = () => {
                  (0, ob.reportDracoDecoderFailure)(bz, zz)
                };
                void 0 !== Ez ? TH({
                  site: ob.MODEL_POOL_SITE,
                  error: bz,
                  urls: Ez
                }, nz, uz) : nz()
              },
              onWorkerLost: uz => {
                (0, ob.reportWorkerLost)(ob.MODEL_POOL_SITE, uz, zz)
              },
              onModuleRetry: (uz, bz) => {
                (0, ob.reportModelsModuleRetry)(uz, bz, zz)
              }
            },
            Mz = bz.e(42).then((() => bz(42647))).then((zz => {
              let {
                pageModelPool: uz
              } = zz;
              if (Ez) return null;
              const bz = uz(lz);
              return nz = bz.unlisten, Rl = bz.pool, bz.pool
            }), (zz => (Ez || lz.onUnavailable(zz, void 0), null)));
          return Kl = () => {
            var zz;
            Ez = !0, null === (zz = nz) || void 0 === zz || zz(), Rl = null
          }, (zz, uz) => Mz.then((bz => {
            var Ez;
            return null !== (Ez = null === bz || void 0 === bz ? void 0 : bz.build(zz, uz)) && void 0 !== Ez ? Ez : (0, IE.p)(zz, "the model workers did not load")
          })).then((zz => null !== iz && (0, IE.h)(zz) ? iz.then((() => zz)) : zz))
        }(xz, gz), (zz => {
          zz.startup ? (wH(), TH({
            site: ob.MODEL_FEED_SITE,
            error: zz.error,
            urls: "" === zz.url ? void 0 : [zz.url]
          }, (() => {
            (0, ob.reportModelFailure)(zz, xz)
          }))) : (0, ob.reportModelFailure)(zz, xz)
        }), {
          onWritten: (zz, uz) => {
            jz.glbWritten(zz, uz)
          },
          onTaken: (zz, uz) => {
            jz.glbTaken(zz, uz)
          },
          onPackFileFailed: (zz, uz) => {
            console.warn(`${di} the texture pack's model file ${zz} failed: the shipped one loads`, uz)
          }
        });
        Zl = Iz;
        const Bz = new gE.e(Jz);
        ei = Bz, Bz.swap((zz => {
          const uz = () => {
            (0, ob.reportTerrainTextureFailure)(zz, xz)
          };
          if (NM) return void uz();
          const bz = () => !NM,
            Ez = null === zz.url ? void 0 : [zz.url];
          TH({
            site: zb.C,
            error: zz.error,
            urls: Ez
          }, uz, bz)
        })).then((zz => {
          null !== zz && (zz || Jz.isStopped || console.warn(`${di} the core refused the terrain textures: terrain draws untextured`), xl(Jz))
        }));
        const Cz = new hu(Jz, ((zz, uz) => {
          console.warn(`${di} ${zz}`, ...void 0 === uz ? [] : [uz])
        }));
        Cz.feed(), null !== pz && function(zz, uz, Ez, nz, iz, lz) {
          let Mz = null,
            tz = null,
            Hz = !1;
          const Oz = {
            textures: null,
            stop: () => {
              var zz, uz;
              Hz = !0, null === (zz = tz) || void 0 === zz || zz(), null === (uz = Mz) || void 0 === uz || uz(), eE.e.setSettled(null), null !== Bi && eM.clear(Bi)
            }
          };
          Wi = Oz, tz = et().follow((tz => {
            null !== tz && Promise.all([bz.e(193), bz.e(45)]).then((() => bz(42603))).then((bz => {
              let {
                PackTextures: pz
              } = bz;
              if (Hz || zz.isStopped) return;
              const dz = new pz({
                feed: tz,
                terrain: uz,
                backend: Ez,
                stopped: () => zz.isStopped,
                landed: () => {
                  xl(zz)
                },
                packSwapped: () => {
                  (0, WE.j)(nz), lz.feed((() => async function(zz) {
                    const uz = null === zz ? null : await zz.averageColours;
                    return null === uz ? Uu() : qu(uz)
                  }(dz.assets))), Dt(dz.iconOverrides()), iz.refresh().then((zz => {
                    null !== zz && console.info(`${di} texture pack models: ${zz.resent} of ${zz.delivered} files written again, ${zz.refetched} refetched`)
                  }))
                },
                settled: (zz, uz, bz) => {
                  var Ez;
                  (eE.e.setSettled({
                    state: zz,
                    files: uz
                  }), null === zz.gameSource && (0, Rb.e)(zz.pack, bz), bz) || function(zz) {
                    const uz = Bi;
                    null !== uz && eM.apply(uz, zz).then((uz => {
                      uz && zz && console.info(`${di} the texture pack's animations are in (${Object.keys(zz).length} files)`)
                    }))
                  }(null === (Ez = zz.pack) || void 0 === Ez ? void 0 : Ez.animations)
                },
                settling: () => {
                  eE.e.setSettled(null)
                },
                warn: Wt,
                maxTextureSize: () => Promise.resolve((0, ku.Y)(document.createElement("canvas")))
              });
              Oz.textures = dz, Mz = dz.start()
            }), (zz => {
              console.warn(`${di} the texture pack's terrain didn't load: the built atlas stays`, zz)
            }))
          }))
        }(Jz, Bz, pz, jz, Iz, Cz);
        const Yz = () => {
            Jz.setTextureLayers("")
          },
          kz = zz => {
            (wu ??= bz.e(50).then((() => bz(42656))).then((zz => {
              let {
                TEXTURE_NAMES: uz
              } = zz;
              return uz
            }), (zz => {
              throw wu = null, zz
            })), wu).then((zz => {
              Jz.setTextureLayers(zz) || Jz.isStopped || (console.warn(`${di} the core refused the texture names: textured Boxes draw textureNotFound`), Yz())
            }), (uz => {
              if (Jz.isStopped) return;
              const [bz, ...Ez] = zz;
              void 0 === bz ? TH({
                site: ob.TEXTURE_NAMES_SITE,
                error: uz
              }, (() => {
                console.warn(`${di} the texture names didn't load, so textured Boxes draw textureNotFound`, uz), Yz()
              }), gz) : setTimeout((() => {
                kz(Ez)
              }), bz)
            }))
          };
        if (kz(Gi), null !== pz && !await async function(zz, uz, bz, Ez, iz, lz) {
            var Mz;
            const tz = (0, ku.E)(bz);
            if (null === tz) return zz.crash(Zi, new Error(`this ${Ez} build has no openRenderer`)), !1;
            let Hz;
            OM = tz;
            try {
              var Oz, pz, dz, Fz;
              const nz = null !== (Oz = null === (pz = Si) || void 0 === pz ? void 0 : pz.pagePreviews()) && void 0 !== Oz ? Oz : null,
                Mz = null !== (dz = null === (Fz = Si) || void 0 === Fz ? void 0 : Fz.previewModule(bz)) && void 0 !== dz ? dz : null;
              if (null === nz || null === Mz) {
                null === nz || void 0 === nz || nz.endSession(!1), Hz = (0, Au.f)().sampleCount, await (0, ku.f)(uz, tz, lz, gt, Hz, await iz);
                const zz = (0, ku.i)(bz);
                null === zz && console.warn(`${di} this ${Ez} build has no image registry: sky and model images won't show`), (0, cE.e)(zz)
              } else {
                (0, bn.e)() && await (0, Dz.l)();
                const bz = (0, bn.D)();
                if (null !== bz) {
                  const uz = (0, ku.S)(tz);
                  return zz.crash(ob.RENDER_RELOAD_SITE, new Error(`${bz}${void 0===uz?"":` (${uz.message})`}`)), !1
                }
                Hz = await nz.bindSession(Mz, uz, (async zz => (0, ku.t)(tz, Zi, lz, zz, gt, await iz)))
              }
            } catch (nz) {
              return zz.crash(Zi, nz), !1
            }(function(zz, uz) {
              const bz = zz,
                {
                  requestCapture: Ez,
                  takeCapture: nz
                } = bz;
              if ("function" !== typeof Ez || "function" !== typeof nz) return;
              const iz = {
                request() {
                  Ez.call(bz, uz)
                },
                take() {
                  var zz;
                  return null !== (zz = nz.call(bz)) && void 0 !== zz ? zz : null
                }
              };
              window[pn] = iz
            })(uz, Hz), wM = Hz, tM = !0;
            const Zz = performance.now();
            return HM.boundAtMs = null !== (Mz = (0, bn.F)()) && void 0 !== Mz ? Mz : Zz, HM.indirectHangs = (0, bn.z)(), console.info(`${di} ${Ez} renderer bound at ${Math.round(Zz)} ms`), !zz.isStopped
          }(Jz, vz, Nz, pz, Fz, Rz)) return null;
        if (null !== pz) {
          var zu, uu, bu;
          (0, Hu.G)(pz);
          const zz = () => !Jz.isStopped && dH();
          bz.e(185).then((() => bz(8886))).then((uz => {
            let {
              devTools: bz
            } = uz;
            Jz.isStopped || bz.setHost(function(zz) {
              return {
                tools: un,
                async downloadScene(uz, bz) {
                  let {
                    width: Ez,
                    height: nz,
                    colouring: iz
                  } = bz;
                  "screenshot" === uz && null === iz ? await (0, YE.b)(zz, Ez, nz) : console.warn("The Rust client's developer tools take uncoloured screenshots only")
                },
                setAmbientLightIntensity: () => (console.warn("The Rust client's renderer has no ambient light setting"), Promise.resolve())
              }
            }(function(zz, uz) {
              return {
                canvas: zz,
                maxTextureSize: kE,
                drawing: uz,
                resize: (zz, uz) => {
                  (0, xb.r)(cu.pb.Resize, 0, zz, uz, (0, xb.i)(1))
                },
                restoreSize: () => {
                  const uz = (0, Au.p)(zz);
                  null !== uz && (0, xb.r)(cu.pb.Resize, 0, uz.cssWidth, uz.cssHeight, (0, xb.i)(uz.renderScale))
                },
                onFrameDrawn: zz => (zn.add(zz), () => {
                  zn.delete(zz)
                })
              }
            }(Rz, zz)))
          }), (zz => {
            console.warn(`${di} the developer tools didn't load: no captures this session`, zz)
          }));
          const uz = "webgpu" === pz && null !== (zu = null === Hz || void 0 === Hz || null === (uu = Hz.adapter) || void 0 === uu ? void 0 : uu.vendor) && void 0 !== zu ? zu : null;
          XM = {
            backend: pz,
            canvas: Rz,
            fallbackReason: null !== (bu = null === Hz || void 0 === Hz ? void 0 : Hz.reason) && void 0 !== bu ? bu : null,
            adapterVendor: uz
          }, kt();
          try {
            (0, Wb.r)(pz, Rz, uz)
          } catch (nz) {
            (0, Wb.v)(), console.error(`${di} the quality steps didn't start`, nz)
          }
        }
        const {
          storagePullBreaks: Eu,
          splitPassBreaks: pu
        } = await Fz;
        pu && console.warn(`${di} split_pass_breaks on: Windows Adreno 7xx (N-103) or ?sceneDepth=off`);
        const Ru = Eu ? yz.c : (0, yz.g)(Hz, (0, vu.g)());
        if ((0, Ln.n)("webgpuloss")) {
          var Ku, fu;
          const zz = {
            backend: pz,
            reason: null !== (Ku = null === Hz || void 0 === Hz ? void 0 : Hz.reason) && void 0 !== Ku ? Ku : null,
            source: null !== (fu = null === Hz || void 0 === Hz ? void 0 : Hz.source) && void 0 !== fu ? fu : null,
            storagePullBreaks: Eu,
            noWebGpu: Ru.messageKey
          };
          (0, Pn.d)((uz => {
            uz.noteWasmPick(zz)
          }))
        }
        const ru = "webgpu" === pz && !Eu;
        if (rl = (0, yz.j)(ru ? Jz : null, ru && null !== (lz = null === (Mz = Si) || void 0 === Mz ? void 0 : Mz.pagePreviews().JZ) && void 0 !== lz ? lz : null, Ru, Wt), UM) return null;
        if (mz.reserveAtJoin((0, qE.n)(null !== Lz && void 0 !== Lz ? Lz : Fb.g)), Jz.isStopped) return null;
        const ou = zz => {
          if (null !== fM) try {
            fM.animationFrame(zz)
          } catch (nz) {
            bH(nz)
          }
          if (function(zz, uz) {
              return uz && !UM && !Ll && FH() && dH() && zz.framePaces(performance.now())
            }(Jz, VM)) return Jz.writePendingInput(), (0, rz.c)(zz, tH), zH(!1, zz), void requestAnimationFrame(ou);
          MH(Jz, VM, "budget") && ((0, Ju.l)(Jz.lastFrameKind) && dH() && (0, rz.c)(zz, tH), zH(VM && PM, zz), GM.frame(Jz.lastFrameKind, VM && dH(), zz), fH(Jz), mz.afterFrame(), requestAnimationFrame(ou))
        };
        requestAnimationFrame(ou);
        return function(zz) {
          if (zz.has("inputLog") && (0, uE.g)((zz => {
              let {
                action: uz,
                down: bz,
                press: Ez
              } = zz;
              console.info(`${EE} input ${uz} ${bz?"down":"up"} press ${Ez} at ${performance.now().toFixed(1)}`)
            })), zz.has("inputDump")) {
            const zz = [];
            iE = zz, Object.assign(window, {
              bloxdInputDump: () => zz.join("\n")
            })
          }
        }(new URLSearchParams(window.location.search)), pl = function(zz, uz) {
          let bz = null;
          const Ez = () => {
              null !== bz && (clearInterval(bz), bz = null)
            },
            nz = () => {
              document.hidden ? bz ??= setInterval((() => {
                MH(zz, !1, "budget") ? (fH(zz), uz.afterFrame()) : Ez()
              }), Pi) : Ez()
            };
          return document.addEventListener("visibilitychange", nz), nz(), () => {
            Ez(), document.removeEventListener("visibilitychange", nz)
          }
        }(Jz, mz), Jz
      }(uz).then((zz => {
        var uz;
        (Ez(Ii), ki(null !== zz), null !== zz && (Kn = performance.now()), Ci(zz), null === zz) ? null === (uz = Si) || void 0 === uz || uz.pagePreviews().endSession(null === (0, iu.s)()): vl("booted")
      }), (zz => {
        Ez(Ii), ki(!1), Ci(null), XH({
          site: Ri,
          error: zz,
          header: null
        }, Ii)
      }))
    }

    function WM() {
      const zz = Bi;
      null !== zz && cM().then((uz => {
        let {
          pageBuiltInAnimationPack: bz
        } = uz;
        bz().provide(zz)
      }), (zz => {
        console.warn(`${di} the built-in animation pack's chunk did not load: lifeforms stay in their rest pose`, zz)
      }))
    }
    const eM = new class {
      constructor(zz) {
        this.deps = zz, this.latest = 0, this.yM = null
      }
      apply(zz, uz) {
        return this.load(zz, uz, 0)
      }
      async load(zz, uz, bz) {
        var Ez;
        const nz = ++this.latest,
          iz = this.deps.compiler;
        if (void 0 === uz || null === uz || "object" !== typeof uz || 0 === Object.keys(uz).length || null === iz) return this.drop(zz), !1;
        if ((null === (Ez = this.yM) || void 0 === Ez ? void 0 : Ez.module) === zz && (0, ju.be)(this.yM.files, uz)) return !1;
        try {
          const [bz, Ez] = await Promise.all([iz(), this.deps.builtIns()]);
          if (nz !== this.latest) return !1;
          const lz = await bz(uz, Yu, {
            builtIns: Ez
          });
          if (nz !== this.latest) return !1;
          const Mz = this.call(zz, lz);
          if (void 0 === Mz) throw new Cu("the compiled animations didn't read against the built-in pack");
          return this.yM = {
              module: zz,
              files: uz
            },
            function(zz) {
              for (let uz = 0; uz + 2 < zz.length; uz += 3) {
                ("error" === zz[uz] ? console.error : console.warn)(`Animation for the texture pack: ${zz[uz+1]}: ${zz[uz+2]}`)
              }
            }(Mz), !0
        } catch (Mz) {
          var lz;
          if (nz !== this.latest) return !1;
          this.drop(zz), 0 === bz && this.deps.warn("the texture pack's animations didn't load: lifeforms play the built-in ones", Mz);
          const Ez = (null !== (lz = this.deps.retryAfterMs) && void 0 !== lz ? lz : Bu)[bz];
          return void 0 === Ez || Mz instanceof Cu || (0, Iu.m)(zz) || setTimeout((() => {
            nz === this.latest && this.load(zz, uz, bz + 1)
          }), Ez), !1
        }
      }
      call(zz, uz) {
        try {
          return zz.Fbz(uz)
        } catch (bz) {
          throw (0, Iu.q)(zz, bz), bz
        }
      }
      clear(zz) {
        this.latest++, this.drop(zz)
      }
      drop(zz) {
        const uz = this.yM;
        if (this.yM = null, (null === uz || void 0 === uz ? void 0 : uz.module) === zz && !(0, Iu.m)(zz)) try {
          this.call(zz, null)
        } catch {}
      }
    }({
      compiler: Du.b,
      builtIns: async () => {
        const {
          pageBuiltInAnimationPack: zz
        } = await cM();
        return zz().whenSet()
      },
      warn: Wt
    });
    async function jM(zz, uz) {
      let Ez = !1;
      await IM({
        matchmake: async () => {
          const {
            guestJoinTarget: nz,
            guestJoinWithPack: iz
          } = await bz.e(342).then((() => bz(42586)));
          return Ez ? nz(zz, uz, It()) : (Ez = !0, iz(zz, uz, (uz => Bt(zz, uz)), It))
        },
        onFailure: zz => {
          (0, ob.showJoinFailure)(zz, Ii)
        },
        rejoin: Ot,
        invalidateTrafficCode: pt
      })
    }
    async function IM(zz) {
      let {
        matchmake: uz,
        onFailure: bz,
        rejoin: nz,
        invalidateTrafficCode: iz,
        pageReady: lz,
        signal: Mz
      } = zz;
      const tz = () => !0 === (null === Mz || void 0 === Mz ? void 0 : Mz.aborted);
      let Hz;
      const Oz = eE.e.rejoinHold(),
        pz = (0, fb.O)("wasm", oH);
      let dz = !1,
        Fz = performance.now();
      try {
        if (!await zl) return {
          kind: "stopped"
        };
        if (tz()) return {
          kind: "ob"
        };
        gM().catch((() => {}));
        let zz = await uz();
        Fz = performance.now();
        const bz = () => performance.now() - zz.matchedAt <= zz.freshMs,
          Ez = CM(zz.target).catch((() => {}));
        bz() && !tz() && (Hz = new LE(zz.target, {
          signal: Mz
        }));
        const iz = performance.now();
        if (null === await Yi) return {
          kind: "stopped"
        };
        var Zz;
        if (function(zz) {
            var uz, bz;
            if (dn.e.markGameEngineConstructed(), wn) return;
            wn = !0;
            const Ez = Math.max(zz, null !== (uz = Zn) && void 0 !== uz ? uz : zz);
            (0, Fn.e)("ready", Math.max(0, (null !== (bz = Rn) && void 0 !== bz ? bz : Ez) - Ez) / 1e3)
          }(iz), tz() || (null !== Rn && null !== Kn ? ((0, Gu.l)("wasm_loaded", Rn), (0, Gu.l)("wasm_core_ready", Kn)) : console.warn("[bloxd-wasm-client] a join found the core before boot marked its steps")), await Ez, !bz() && !tz()) null === (Zz = Hz) || void 0 === Zz || Zz.rematched(), zz = await uz(), Fz = performance.now();
        if (tz()) return {
          kind: "ob"
        };
        const Oz = await async function(zz) {
          var uz, bz, Ez;
          let {
            signal: nz,
            rejoin: iz = null,
            early: lz,
            pageReady: Mz
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (null !== nz && void 0 !== nz && nz.aborted) throw new DOMException("the join was left", "AbortError");
          const tz = (Hz = Yl, Oz = performance.now(), null !== Hz && Oz - Hz < KE);
          var Hz, Oz;
          Yl = null;
          const pz = new AbortController;
          zt({
            controller: pz,
            game: null !== (uz = null === (bz = zz.session) || void 0 === bz ? void 0 : bz.gameNameWithVariation) && void 0 !== uz ? uz : null
          }), kl = null, null === (Ez = bM) || void 0 === Ez || Ez.abort(), bM = null, nM = !1, iM = null, lM.clear();
          const dz = () => {
            (0, fu.h)(pz, (0, fu.g)(nz))
          };
          null === nz || void 0 === nz || nz.addEventListener("abort", dz, {
            once: !0
          });
          try {
            var Fz, Zz, Rz;
            const uz = await Yi;
            if (null === uz || uz.isStopped || UM) throw new Error("no core is running to join a game with");
            if (zz.session && null !== rl) {
              const uz = await YM(rl.join(zz.session.gameNameWithVariation), pz.signal);
              if ((0, Ln.n)("webgpuloss")) {
                const bz = zz.session.gameNameWithVariation,
                  Ez = rl.couldntRunInJoinedGame();
                (0, Pn.d)((zz => zz.noteWasmJoin(bz, uz, Ez)))
              }
              if (null !== uz) throw new yz.f(uz)
            }
            const [, , , {
              joinRoom: bz
            }] = await YM(Promise.all([(0, oz.l)(uz), CM(zz), null === Mz || void 0 === Mz ? void 0 : Mz(), gM()]), pz.signal), Ez = zz.session, nz = Ez ? {
              ...Zt,
              attachSocket: uz => {
                const bz = rt(uz, zz.endpoint);
                var nz;
                null !== bz && (Ql = {
                  conn: bz,
                  info: Ez
                }, null === (nz = Wl) || void 0 === nz || nz(Ez.playerDbId));
                return bz
              }
            } : Zt, Hz = await bz(nz, zz, {
              signal: pz.signal,
              early: lz
            }).catch((zz => {
              throw function(zz) {
                if (!(zz instanceof az.d)) return zz;
                if ("roomError" === zz.stage && null !== iM) return BM(new az.d(zz.message, zz.stage, zz.code, iM), zz);
                const uz = "closed" === zz.stage && null !== zM ? lM.get(zM.conn) : void 0;
                return void 0 === uz ? zz : BM(new az.d(zz.message, zz.stage, uz.code), zz)
              }(zz)
            }));
            if (yl !== pz) throw Hz.leave(), new DOMException("the join was left", "AbortError");
            bt(Hz), null === (Fz = ll) || void 0 === Fz || Fz.newGame();
            const Oz = function(zz) {
              var uz, bz;
              const {
                session: Ez
              } = zz, nz = void 0 === Ez ? zz.joinOptions.lobbyName : Ez.lobbyName;
              return {
                endpoint: zz.endpoint,
                game: null !== (uz = null === Ez || void 0 === Ez ? void 0 : Ez.gameNameWithVariation) && void 0 !== uz ? uz : zz.roomName,
                lobby: String(null !== nz && void 0 !== nz ? nz : null),
                postCookies: null !== (bz = zz.postCookies) && void 0 !== bz ? bz : null
              }
            }(zz);
            Sl.set(Hz, Oz), xE(Oz);
            const dz = performance.now(),
              Kz = {
                conn: Hz.conn,
                rejoin: iz,
                game: null !== (Zz = null === (Rz = zz.session) || void 0 === Rz ? void 0 : Rz.gameNameWithVariation) && void 0 !== Zz ? Zz : "",
                joinedAt: dz,
                rejoinedAt: tz ? dz : null,
                overflow: null
              };
            el = Kz,
              function(zz, uz) {
                Lt();
                const bz = {
                  endpoint: uz,
                  roomId: zz.seat.room.roomId,
                  heldConn: 0,
                  dropCode: 0,
                  pendingHold: null,
                  resume: new Ob({
                    reconnect: (zz, uz, Ez) => async function(zz, uz, bz, Ez) {
                      const {
                        roomId: nz,
                        roomToken: iz
                      } = Gt(zz, uz), lz = Di;
                      if (null === lz || lz.isStopped || UM) throw new Error("no core is running to resume the game on");
                      const {
                        resumeRoom: Mz
                      } = await YM(gM(), bz), tz = {
                        ...Zt,
                        attachSocket: uz => jl !== zz || 0 === zz.heldConn ? (uz.close(), null) : rt(uz, zz.endpoint, !0)
                      };
                      return Mz(tz, zz.endpoint, nz, iz, {
                        signal: bz,
                        onAttached: Ez
                      })
                    }(bz, zz, uz, Ez),
                    releaseSeat: zz => {
                      !async function(zz, uz) {
                        const {
                          roomId: bz,
                          roomToken: Ez
                        } = Gt(zz, uz);
                        try {
                          const {
                            leaveHeldSeat: uz
                          } = await gM();
                          await uz(zz.endpoint, bz, Ez)
                        } catch (nz) {
                          console.warn(`${di} the held seat of a game left while it reconnected couldn't be released`, nz)
                        }
                      }(bz, zz)
                    },
                    isLive: () => jl === bz && null !== el && !UM,
                    ZJ: zz => {
                      Cl = zz, Tt()
                    },
                    onReconnected: zz => {
                      ! function(zz) {
                        const uz = gl;
                        if (null !== uz && uz !== zz) {
                          const bz = Sl.get(uz);
                          void 0 !== bz && Sl.set(zz, bz), LM === uz && (LM = zz), uz.detach()
                        }
                        bt(zz)
                      }(zz)
                    },
                    onGaveUp: (zz, uz) => {
                      ! function(zz, uz, bz) {
                        var Ez, nz;
                        console.warn(`${di} gave up reconnecting (${bz.reason}, ${bz.attempts} attempts)`, bz.lastError), (0, ob.reportReconnectGaveUp)(bz, Ii);
                        const iz = null !== (Ez = null === (nz = el) || void 0 === nz ? void 0 : nz.rejoin) && void 0 !== Ez ? Ez : null;
                        Pt(zz, "gaveUp"), nt();
                        const lz = {
                          code: zz.dropCode,
                          name: null,
                          reason: Ji,
                          canReconnect: !uz,
                          automaticallyReconnect: !1,
                          requiresRefresh: !1
                        };
                        Ft(lz, uz ? null : iz, !1, {
                          reasonKey: Ai,
                          canPlayAgain: uz
                        })
                      }(bz, zz, uz)
                    }
                  })
                };
                jl = bz, null !== Il && Il.conn === zz.conn && bz.resume.onInitialInfo(Il)
              }(Hz, zz.endpoint), performance.mark(Xi), (0, Gu.l)("wasm_joined", dz), setTimeout((() => {
                gl === Hz && (0, Gu.e)()
              }), 0), WM(), console.info(`${di} joined ${zz.roomName} as ${Hz.seat.sessionId} at ${Math.round(performance.now())} ms`);
            const wz = kl;
            kl = null, null !== wz && Mt(Kz, wz.mask, wz.frames);
            const Xz = lM.get(Hz.conn);
            return lM.clear(), void 0 !== Xz && (bt(null), dt(Hz.conn, Xz.code, Xz.reason)), Hz
          } finally {
            var Kz;
            null === nz || void 0 === nz || nz.removeEventListener("abort", dz), yl === pz && ut(gl, null), (null === (Kz = zM) || void 0 === Kz ? void 0 : Kz.join) === pz && (zM = null)
          }
        }(zz.target, {
          signal: Mz,
          rejoin: nz(zz.target),
          early: Hz,
          pageReady: lz
        });
        return dz = !0, {
          kind: "joined",
          game: Oz
        }
      } catch (Kz) {
        if (Kz instanceof DOMException && "AbortError" === Kz.name || tz()) return {
          kind: "ob"
        };
        if (UM) return {
          kind: "stopped"
        };
        if (nM && (nM = !1, await iz().catch((zz => {
            console.warn(`${di} the cached traffic code could not be dropped`, zz)
          }))), null === await Yi) return {
          kind: "stopped"
        };
        if (Kz instanceof yz.f) return bz(Kz, performance.now() - Fz), {
          kind: "failed",
          error: Kz,
          reloading: !1
        };
        if (Kz instanceof az.d && Kz.code === Ez.b.wasmClientNotAllowed.code && aM) return ct("this server refused the wasm client to this account", "refused"), {
          kind: "failed",
          error: Kz,
          reloading: !0
        };
        const zz = Kz instanceof az.d && Kz.code === Ez.b.outdatedVersion.code,
          uz = () => null === gl,
          nz = await TH({
            site: ob.JOIN_SITE,
            error: Kz,
            outdated: zz
          }, (() => {
            bz(Kz, performance.now() - Fz)
          }), uz);
        return {
          kind: "failed",
          error: Kz,
          reloading: nz
        }
      } finally {
        var Rz;
        dz || pz.end(), eE.e.releaseHold(Oz);
        const zz = null === (Rz = Hz) || void 0 === Rz ? void 0 : Rz.release();
        zz && (0, ob.reportUnusedSeat)(zz, Ii)
      }
    }

    function BM(zz, uz) {
      return zz.stack = uz.stack, zz
    }

    function CM(zz) {
      return zz.session ? (0, oz.o)(ji, zz.session.gameNameWithVariation) : Promise.resolve()
    }

    function YM(zz, uz) {
      return (0, fu.l)(uz), new Promise(((bz, Ez) => {
        const nz = () => {
          Ez((0, fu.g)(uz))
        };
        uz.addEventListener("abort", nz, {
          once: !0
        }), zz.then((zz => {
          uz.removeEventListener("abort", nz), bz(zz)
        }), (zz => {
          uz.removeEventListener("abort", nz), Ez(zz)
        }))
      }))
    }

    function kM() {
      zt(null)
    }

    function zt(zz) {
      var uz, bz, Ez;
      (function() {
        const zz = jl;
        null !== zz && Pt(zz, "left")
      }(), null === bl || bl.left) || (bl.left = !0, null === (Ez = (0, oz.j)()) || void 0 === Ez || Ez.socketLeft(), (0, dz.o)({
        websocketUrl: null
      }));
      yl && (0, fu.h)(yl, new DOMException("the join was left", "AbortError")), nt(null !== zz), null === (uz = rl) || void 0 === uz || uz.leave();
      const nz = gl;
      null !== zz && eE.e.setGame(zz.game), ut(null, null !== (bz = null === zz || void 0 === zz ? void 0 : zz.controller) && void 0 !== bz ? bz : null), null === nz || void 0 === nz || nz.leave(), Et(0), (0, Ru.h)()
    }

    function ut(zz, uz) {
      gl = zz, yl = uz, null === gl && null === yl && eE.e.setGame(void 0)
    }

    function bt(zz) {
      ut(zz, yl)
    }

    function Et(zz) {
      const uz = Di;
      return null !== Vi && !UM && null !== uz && !uz.isStopped && (!!Vi(az.k, 0, (0, az.E)(zz)) && (al = !0, 0 === zz || Ll || MH(uz, !1, "all"), !0))
    }

    function nt() {
      var zz, uz;
      arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (0, fb.i)();
      const bz = null !== (zz = null === (uz = el) || void 0 === uz ? void 0 : uz.overflow) && void 0 !== zz ? zz : null;
      el = null, null !== bz && (0, ob.reportEventOverflow)(bz, Ii)
    }

    function it() {
      null !== gl || null !== yl ? kM() : ot()
    }

    function lt(zz, uz) {
      console.warn(`${di} the event buffer refused records in ${uz} frames (categories ${zz})`), UM || (null !== el ? Mt(el, zz, uz) : null !== yl && function(zz, uz, bz) {
        var Ez;
        const nz = function(zz, uz) {
          return null === zz ? "drop" : zz.activated ? "keep" : 0 !== (uz & gu.q.NetSession) ? "fail" : "drop"
        }((null === (Ez = zM) || void 0 === Ez ? void 0 : Ez.join) === zz ? zM : null, uz);
        "keep" === nz ? kl = {
          mask: uz,
          frames: bz
        } : "fail" === nz && (0, fu.h)(zz, new Error("the join's net session was lost to an event overflow"))
      }(yl, zz, uz))
    }

    function Mt(zz, uz, bz) {
      const Ez = zz.overflow ??= {
        frames: 0,
        acks: 0,
        mask: 0,
        outcome: null
      };
      Ez.frames += bz, Ez.acks++, Ez.mask |= uz;
      const nz = function(zz, uz, bz) {
        if (0 === (zz & gu.q.NetSession)) return "none";
        const Ez = null !== uz.rejoinedAt && bz - uz.rejoinedAt < wE;
        return null === uz.rejoin || Ez ? "fail" : "rejoin"
      }(uz, zz, performance.now());
      "none" !== nz && queueMicrotask((() => {
        if (el !== zz) return;
        const uz = "rejoin" === nz && performance.now() - uM >= Gz.h;
        Ez.outcome = uz ? "rejoined" : "failed", Ft(function(zz, uz) {
          return {
            code: 0,
            name: "eventOverflow",
            reason: "Your game fell behind the server.",
            canReconnect: zz,
            automaticallyReconnect: uz,
            requiresRefresh: !1
          }
        }(null !== zz.rejoin, uz), zz.rejoin, uz), kM(), uz && (Yl = performance.now())
      }))
    }

    function tt(zz) {
      VM = zz, mM && Ht(mM, zz)
    }

    function Ht(zz, uz) {
      zz.style.visibility = uz ? "visible" : "hidden"
    }

    function Ot(zz) {
      var uz;
      const bz = zz.roomName,
        Ez = null !== (uz = zz.joinOptions.lobbyName) && void 0 !== uz ? uz : null;
      return () => {
        jM(bz, Ez)
      }
    }

    function pt() {
      return bz.e(342).then((() => bz(42586))).then((zz => {
        let {
          invalidateGuestTrafficCode: uz
        } = zz;
        return uz()
      })).catch((zz => {
        console.warn(`${di} the cached traffic code could not be dropped`, zz)
      }))
    }

    function dt(zz, uz, bz) {
      var nz, iz;
      let lz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (UM) return;
      if ((null === (nz = el) || void 0 === nz ? void 0 : nz.conn) !== zz) return void(null !== yl && lM.set(zz, {
        code: uz,
        reason: bz
      }));
      const {
        rejoin: Mz,
        game: tz,
        joinedAt: Hz
      } = el;
      nt(), Lt();
      const Oz = (0, Gz.m)(uz, (0, fE.d)(zz));
      if (console.info(`${di} the game's connection closed with code ${uz} (${null!==(iz=Oz.name)&&void 0!==iz?iz:"unrecognised"})`), uz === Ez.b.gameOrPluginKick.code || lz || (0, ob.reportDisconnect)(Oz, Ii, {
          closeReason: bz,
          sinceJoinedMs: performance.now() - Hz,
          game: tz
        }), Oz.requiresRefresh) {
        const zz = "outdatedVersion" === Oz.name,
          bz = new Error(`the game's connection closed with code ${uz}`),
          Ez = () => null === el && null === yl;
        return void TH({
          site: ob.JOIN_SITE,
          error: bz,
          outdated: zz
        }, (() => {
          Ez() && Ft(Oz, null, !1)
        }), Ez)
      }
      const pz = Oz.canReconnect ? Mz : null,
        dz = null !== pz && Oz.automaticallyReconnect && performance.now() - uM >= Gz.h;
      Ft(Oz, pz, dz)
    }

    function Ft(zz, uz, bz) {
      var Ez;
      let nz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        reasonKey: null,
        canPlayAgain: !1
      };
      if (qM) return;
      eE.e.unwantedLeave(bz && null !== uz && 0 === EM.size), null === (Ez = bM) || void 0 === Ez || Ez.abort();
      const iz = new AbortController;
      bM = iz;
      const lz = null === uz ? null : () => {
        iz.signal.aborted || (iz.abort(), uz())
      };
      if (bz && null !== lz) {
        uM = performance.now();
        const zz = setTimeout(lz, Gz.d);
        iz.signal.addEventListener("abort", (() => {
          clearTimeout(zz)
        }))
      }
      const Mz = {
        code: zz.code,
        name: zz.name,
        reason: zz.reason,
        reasonKey: nz.reasonKey,
        reconnect: lz,
        reconnecting: bz,
        requiresRefresh: zz.requiresRefresh,
        canPlayAgain: nz.canPlayAgain
      };
      if (EM.size > 0)
        for (const Hz of [...EM]) try {
          Hz(Mz)
        } catch (tz) {
          console.error(`${di} an unwanted-leave listener threw`, tz)
        } else ZE((0, pE.l)(zz, null !== lz, bz), iz.signal).then((uz => {
          uz && (null !== lz ? lz() : zz.requiresRefresh && (0, Dz.j)())
        }))
    }
    const Zt = {
      attachSocket: zz => rt(zz),
      onConnection: zz => (MM.add(zz), () => {
        MM.delete(zz)
      }),
      sendRaw: (zz, uz) => {
        const bz = bl;
        return null !== bz && bz.conn === zz && KH(bz, uz)
      },
      leaveRoom: Et,
      closeSocket: zz => {
        var uz;
        (null === (uz = bl) || void 0 === uz ? void 0 : uz.conn) === zz && ot()
      },
      flushNet: Nt
    };

    function Rt(zz) {
      var uz;
      let {
        aux: bz,
        payload: Ez
      } = zz;
      null === (uz = Di) || void 0 === uz || uz.queueOptions(bz, Ez)
    }

    function Kt(zz, uz) {
      Rt(function(zz, uz) {
        return Mn = zz ? {
          preventMovement: uz
        } : null, zz ? tn(uz) : {
          aux: cu.Vb.AdEnd,
          payload: nn
        }
      }(zz, uz))
    }

    function wt(zz) {
      var uz;
      hl = zz, null === (uz = Di) || void 0 === uz || uz.setUiPrefs(zz)
    }

    function Xt(zz, uz) {
      ji.setMaster(zz, uz)
    }

    function ft(zz) {
      var uz;
      Ul = zz, null === (uz = Di) || void 0 === uz || uz.setEnvPrefs(zz)
    }

    function st(zz) {
      var uz;
      cl = zz, null === (uz = Di) || void 0 === uz || uz.setLookPrefs(zz)
    }

    function rt(zz) {
      var uz;
      let bz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new URL(zz.url).origin,
        Ez = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if (zz.readyState === WebSocket.CLOSING || zz.readyState === WebSocket.CLOSED) return console.warn(`${di} a closing or closed socket can't be attached`), null;
      const nz = Di;
      if (!nz || nz.isStopped) return console.warn(`${di} no core is running to attach a socket to`), zz.close(), null;
      if (null === (0, oz.j)()) return console.warn(`${di} the game has not started to attach a socket to`), zz.close(), null;
      if (Jl > cu.u) return console.warn(`${di} this core has attached all the sockets it can; reload to play on`), zz.close(), null;
      if (al && !Ll && (MH(nz, !1, "all"), nz.isStopped || UM)) return zz.close(), null;
      ot();
      const iz = Jl++;
      if (!qt(nz, "open", iz, Ez ? cu.Tb.Resume : 0)) return zz.close(), null;
      Ez || Zu.b.reset(), zM = null === yl ? null : {
        join: yl,
        conn: iz,
        activated: !1
      }, zz.binaryType = "arraybuffer";
      const lz = new pb.c((() => {
          ! function(zz, uz) {
            if (bl !== uz || zz.isStopped || null === Jt(uz, vi)) return;
            uz.detach(), bl = null, xt(zz, uz, vi, "", !0), uz.ws.close()
          }(nz, Mz)
        })),
        Mz = {
          ws: zz,
          conn: iz,
          pending: [],
          pendingBytes: 0,
          left: !1,
          resume: Ez,
          token: null,
          detach: () => {
            lz.dispose(), zz.removeEventListener("message", tz), zz.removeEventListener("open", Hz), zz.removeEventListener("close", Oz)
          }
        },
        tz = zz => {
          if (zz.data instanceof ArrayBuffer) {
            var uz;
            const bz = new Uint8Array(zz.data);
            lz.heard(), Mz.token = null !== (uz = (0, db.b)(bz)) && void 0 !== uz ? uz : Mz.token,
              function(zz, uz, bz) {
                vH(zz, (() => {
                  zz.rings.net.writeFrame(uz, bz) || zz.crash(zb.q, `a socket frame of ${bz.byteLength} bytes did not fit the net-in ring`)
                }));
                const Ez = zz.rings.net.cursor >= oi;
                (Ez || zz.netWrittenSinceFrame >= ri || document.hidden && performance.now() - Al >= Pi) && MH(zz, !1, "budget")
              }(nz, iz, bz)
          }
        },
        Hz = () => {
          Ez || (0, Gu.l)("wasm_socket_open", performance.now());
          for (const uz of Mz.pending.splice(0)) zz.send(uz);
          Mz.pendingBytes = 0
        },
        Oz = zz => {
          if (bl === Mz && nz.rings.net.cursor > 0 && MH(nz, !1, "all"), bl === Mz) {
            if (Mz.detach(), bl = null, xt(nz, Mz, zz.code, zz.reason) || vt(nz, Mz)) return;
            qt(nz, "close", iz), At(iz, Mz.left), dt(iz, zz.code, zz.reason)
          }
        };
      return zz.addEventListener("message", tz), zz.addEventListener("open", Hz), zz.addEventListener("close", Oz), bl = Mz, null === (uz = (0, oz.j)()) || void 0 === uz || uz.socketAttached(iz), (0, dz.o)({
        websocketUrl: bz
      }), iz
    }

    function ot() {
      const zz = bl;
      if (!zz) return;
      const uz = Di,
        bz = zz.resume;
      bz && (Nt(), bl !== zz) || (bl = null, zz.detach(), zz.ws.close(), null !== uz && (vt(uz, zz) || bz && xt(uz, zz, xi)) || (null !== uz && qt(uz, "close", zz.conn), At(zz.conn, zz.left)))
    }

    function Nt() {
      const zz = Di;
      null !== zz && !zz.isStopped && !UM && !Ll && zz.rings.net.cursor > 0 && MH(zz, !1, "all")
    }

    function vt(zz, uz) {
      var bz;
      if (!uz.resume) return !1;
      const Ez = jl;
      return null !== Ez && null !== uz.token && "" !== uz.token && (Ez.pendingHold = {
        conn: uz.conn,
        token: `${Ez.roomId}:${uz.token}`
      }), qt(zz, "close", uz.conn), null === (bz = (0, oz.j)()) || void 0 === bz || bz.socketDetached(uz.conn), !0
    }

    function xt(zz, uz, bz) {
      let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
        nz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      const iz = Jt(uz, bz);
      if (null === iz) return !1;
      const {
        yM: lz,
        token: Mz,
        game: tz,
        joinedAt: Hz
      } = iz;
      if (!qt(zz, "close", uz.conn, cu.z.Held)) return !0;
      console.warn(`${di} the game's connection ${nz?"went silent":`dropped with code ${bz}`}, holding it`);
      const Oz = {
        closeReason: Ez,
        sinceJoinedMs: performance.now() - Hz,
        game: tz
      };
      return (0, ob.reportDisconnect)((0, Gz.m)(bz), Ii, Oz, nz ? "silent" : void 0), lz.heldConn = uz.conn, lz.dropCode = bz, lz.pendingHold = {
        conn: uz.conn,
        token: `${lz.roomId}:${Mz}`
      }, Ll || MH(zz, !1, "all"), !0
    }

    function Jt(zz, uz) {
      const bz = jl,
        nz = el,
        iz = zz.token;
      return null === bz || null === nz || UM || zz.left || nz.conn !== zz.conn || null === iz || "" === iz ? null : (0, Ez.g)(uz) && bz.resume.canHoldSeat() ? {
        yM: bz,
        token: iz,
        game: nz.game,
        joinedAt: nz.joinedAt
      } : null
    }

    function At(zz, uz) {
      var bz;
      null === (bz = (0, oz.j)()) || void 0 === bz || bz.closeGame(zz), (0, En.d)().close(zz), uz || (0, dz.o)({
        websocketUrl: null
      })
    }

    function Tt() {
      const zz = Cl;
      if (null === zz) return;
      const uz = (0, oz.j)();
      UM || null === uz || uz.ZJ(zz) ? Cl = null : performance.now() - Vl.pause >= Li && (Vl.pause = performance.now(), console.warn(`${di} the cmd ring had no room for SetPaused(${zz}): written before the next frame`))
    }

    function Lt() {
      const zz = jl;
      jl = null, null === zz || void 0 === zz || zz.resume.dispose()
    }

    function Pt(zz, uz) {
      var bz, Ez;
      const {
        heldConn: nz
      } = zz, iz = zz.resume.resumingConn;
      zz.heldConn = 0, zz.pendingHold = null, jl === zz && (jl = null), "left" === uz ? zz.resume.leave() : zz.resume.dispose(), 0 === Bl || (null === (bz = bl) || void 0 === bz ? void 0 : bz.conn) !== Bl || "left" === uz && (null === (Ez = gl) || void 0 === Ez ? void 0 : Ez.conn) === Bl || mt(Bl), "gaveUp" === uz && 0 !== iz && mt(iz), 0 !== nz && "refused" !== uz && (console.info(`${di} the game held through its drop ${"left"===uz?"was left":"is given up"}`), null === Di || Di.isStopped || qt(Di, "close", nz), At(nz, !1))
    }

    function Gt(zz, uz) {
      const bz = uz.indexOf(":");
      return {
        roomId: bz < 0 ? zz.roomId : uz.slice(0, bz),
        roomToken: uz.slice(bz + 1)
      }
    }

    function Vt(zz) {
      var uz;
      Il = zz, zz.conn === Bl && (Bl = 0);
      const bz = jl;
      null !== bz && (null === (uz = el) || void 0 === uz ? void 0 : uz.conn) === zz.conn && bz.resume.onInitialInfo(zz)
    }

    function mt(zz) {
      var uz;
      const bz = bl;
      (null === bz || void 0 === bz ? void 0 : bz.conn) === zz && (bz.left = !0, null === (uz = (0, oz.j)()) || void 0 === uz || uz.socketLeft(), (0, dz.o)({
        websocketUrl: null
      }), Et(zz) ? setTimeout((() => {
        bl === bz && ot()
      }), az.h) : ot())
    }

    function qt(zz, uz, bz) {
      let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        nz = !1;
      return vH(zz, (() => {
        const {
          net: iz
        } = zz.rings;
        nz = "open" === uz ? iz.writeOpen(bz, Ez) : iz.writeClose(bz, Ez), nz || zz.crash(zb.q, `a socket ${uz} did not fit the net-in ring`)
      })), nz
    }

    function ht(zz, uz) {
      let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if (Ut()) {
        const Ez = "browser" === zz && (0, bn.N)() ? "blockedAfterLoss" : "unsupported";
        return (0, ob.reportUnsupportedFallback)(zz, Ez, uz, bz), void ct(`the wasm client can't run here (${uz}; ${Ez})`, Ez)
      }(0, ob.showUnsupported)(zz, "unsupported", uz, bz)
    }

    function Ut() {
      return aM && "wasm" !== (0, pu.h)(window.location.search)
    }

    function ct(zz, uz) {
      console.warn(`${di} ${zz}: reloading on the JS client`), null !== uz && (0, pu.u)(uz), (0, pu.q)(null === uz ? "reloadOntoJs" : "decline");
      const bz = () => {
        (0, Dz.g)(pu.y)
      };
      (0, ob.flushCrashReports)(Dz.c).then(bz, bz)
    }

    function gt(zz, uz, bz, Ez) {
      return pM(zz, uz, bz, Ez)
    }

    function St() {
      null === ZM || null === Di || Di.isStopped || UM || null !== wl || null === Vi || (wl = ZM(Vi, Wt, et().follow))
    }

    function yt() {
      var zz, uz, bz;
      return null !== (zz = null === (uz = Wi) || void 0 === uz || null === (bz = uz.textures) || void 0 === bz ? void 0 : bz.files()) && void 0 !== zz ? zz : null
    }

    function Dt(zz) {
      bz.e(260).then((() => bz(39910))).then((uz => {
        let {
          setIconFileOverrides: bz
        } = uz;
        bz(zz)
      }), (zz => {
        console.warn(`${di} the item icons couldn't take the texture pack's files`, zz)
      }))
    }

    function Qt(zz) {
      et().follow((uz => {
        null !== uz && Promise.all([Promise.all([bz.e(193), bz.e(45)]).then((() => bz(42624))), (0, bn.I)()]).then((zz => {
          let [{
            followPagePackFiles: bz
          }, Ez] = zz;
          const nz = null === Ez || (0, ku.m)(Ez) ? "webgl" : Ez.backend;
          bz(uz, WE.f, nz, (zz => {
            WE.f.setPageFiles(zz)
          }), Wt)
        }), (uz => {
          console.warn(`${di} the texture pack's files didn't load: the previews draw the shipped ones until the next opens`, uz), zz()
        }))
      }))
    }

    function Wt(zz, uz) {
      console.warn(`${di} ${zz}`, uz)
    }

    function et() {
      return Qi ??= new sn({
        load: zz => Promise.all([bz.e(193), bz.e(51)]).then((() => bz(42628))).then((uz => {
          let {
            startPageTexturePackFeed: bz
          } = uz;
          return bz(Wt, zz)
        })),
        store: rb.d,
        xZ: zz => {
          Yi.then((() => {
            (0, ob.reportTexturePackFeedLoadFailure)(zz, Ii)
          }))
        }
      }), Qi
    }
    const jt = zz => et().follow(zz);

    function It() {
      return et().loaded()
    }
    const Bt = function(zz, uz, bz) {
        let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now(),
          nz = 0;
        return async function(iz, lz) {
          let Mz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
          const tz = ++nz,
            Hz = Ez() + uz,
            Oz = await
          function(zz, uz) {
            let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
            return new Promise((Ez => {
              const nz = setTimeout((() => {
                Ez(null), zz.then((zz => {
                  null !== zz && (zz.joinedWithout(), bz(zz))
                }))
              }), uz);
              zz.then((zz => {
                clearTimeout(nz), Ez(zz)
              }))
            }))
          }(zz(iz), uz, (zz => {
            tz === nz && Mz() && lz(zz, Ez() + uz).catch((zz => {
              bz("the texture pack step after the join failed", zz)
            }))
          }));
          return null === Oz ? null : lz(Oz, Hz)
        }
      }((zz => (0, bu.k)(zz) ? et().request() : et().forJoin()), fn.c, Wt),
      Ct = function(zz, uz) {
        let bz = !1;
        return {
          setGamePackConfirm: zz => {
            bz = null !== zz, uz(zz)
          },
          packStep: (uz, Ez, nz) => zz(uz, Ez, (() => bz && nz()))
        }
      }(Bt, (zz => {
        et().setGamePackConfirm(zz)
      }));

    function Yt(zz) {
      Ct.setGamePackConfirm(zz)
    }

    function kt() {
      if (UM || null !== fM || null === RM || null === XM) return;
      const {
        backend: zz,
        canvas: uz,
        fallbackReason: bz,
        adapterVendor: Ez
      } = XM, nz = RM;
      RM = null;
      try {
        fM = nz({
          backend: zz,
          canvas: uz,
          fallbackReason: bz,
          adapterVendor: Ez,
          joinedGame: () => UM ? null : gl,
          inGame: uH,
          shaderPackReach: () => {
            var zz, uz;
            return null !== (zz = null === (uz = rl) || void 0 === uz ? void 0 : uz.reachInJoinedGame()) && void 0 !== zz ? zz : null
          },
          msaa: () => wM > 1,
          writeCmd: (zz, uz, bz) => null !== Vi && Vi(zz, uz, bz),
          takeFailedMeshJobs: () => {
            var zz, uz;
            return null !== (zz = null === (uz = ll) || void 0 === uz ? void 0 : uz.takeFailedMeshJobs()) && void 0 !== zz ? zz : 0
          }
        })
      } catch (iz) {
        console.error(`${di} the frame telemetry didn't start`, iz)
      }
    }

    function zH(zz, uz) {
      try {
        var bz, Ez, nz;
        const iz = tM && null !== (bz = null === (Ez = Di) || void 0 === Ez || null === (nz = Ez.lastHeader) || void 0 === nz ? void 0 : nz.renderPending) && void 0 !== bz ? bz : 0;
        (0, Wb.i)(uz, zz, uH() && !(null !== Mn), iz)
      } catch (iz) {
        (0, Wb.v)(), console.error(`${di} the quality steps stopped`, iz)
      }
    }

    function uH() {
      return null !== gl && LM === gl && !UM
    }

    function bH(zz) {
      const uz = fM;
      fM = null;
      try {
        null === uz || void 0 === uz || uz.stop()
      } catch {}
      console.error(`${di} the frame telemetry threw: it stops`, zz)
    }

    function EH(zz) {
      var uz, bz, Ez, nz;
      if ((0, En.d)().fire(zz), "message" === zz.type) {
        if (Pl++, zz.zM === cu.Fc.ERROR && null !== yl) {
          var iz;
          const {
            text: uz,
            dropsCache: bz
          } = (0, Gz.r)((new TextDecoder).decode(zz.payload));
          nM ||= bz, (null === (iz = zM) || void 0 === iz ? void 0 : iz.conn) === zz.conn && (iM = uz)
        } else if (zz.zM === gu.Wb.ResumeComplete) {
          var lz;
          null === (lz = jl) || void 0 === lz || lz.resume.onResumeComplete(zz.conn)
        }
        return
      }
      zz.phase === cu.B.Left ? Gl = zz.conn : zz.phase === cu.B.Activated && (null === (uz = zM) || void 0 === uz ? void 0 : uz.conn) === zz.conn ? zM.activated = !0 : zz.phase === cu.B.Resumed ? function(zz) {
        var uz, bz;
        Bl = zz;
        const Ez = jl;
        if (null === Ez || 0 === Ez.heldConn || (null === (uz = bl) || void 0 === uz ? void 0 : uz.conn) !== zz || !bl.resume || null === el) return;
        console.info(`${di} the game resumed on conn ${zz}, waiting for its InitialInfo`);
        const nz = Ez.heldConn;
        Ez.heldConn = 0, bl.resume = !1, el.conn = zz, (null === (bz = Ql) || void 0 === bz ? void 0 : bz.conn) === nz && (Ql = {
          conn: zz,
          info: Ql.info
        }), Zu.b.apply({
          shopInfo: null,
          _shopVersion: Eu.d
        })
      }(zz.conn) : zz.phase === cu.B.Held ? function(zz) {
        var uz;
        const bz = jl,
          Ez = null !== (uz = null === bz || void 0 === bz ? void 0 : bz.pendingHold) && void 0 !== uz ? uz : null;
        if (null !== bz && null !== Ez && Ez.conn === zz) return bz.pendingHold = null, bz.heldConn = zz, Bl = 0, console.warn(`${di} the core holds the game, reconnecting`), void bz.resume.onDropped(Ez.token);
        if (zz === Bl) {
          Bl = 0;
          const uz = Di;
          null === uz || uz.isStopped || (console.info(`${di} the core held again a resumed game the shell ended before its InitialInfo: closing it again`), qt(uz, "close", zz))
        }
      }(zz.conn) : zz.phase === cu.B.Closed && (null === (bz = jl) || void 0 === bz || null === (Ez = bz.pendingHold) || void 0 === Ez ? void 0 : Ez.conn) === zz.conn && (jl.heldConn === zz.conn ? function(zz) {
        const uz = zz.heldConn,
          bz = zz.dropCode;
        Pt(zz, "refused"), console.info(`${di} the core didn't hold the game through its drop: it hadn't started`), queueMicrotask((() => {
          At(uz, !1), dt(uz, bz, "", !0)
        }))
      }(jl) : jl.pendingHold = null);
      const Mz = Object.keys(cu.B).find((uz => cu.B[uz] === zz.phase)),
        tz = 0 === zz.code ? "" : ` (code ${zz.code})`;
      console.info(`${di} conn ${zz.conn}: ${null!==Mz&&void 0!==Mz?Mz:zz.phase}${tz}, ${Pl} raw messages so far`), (null === (nz = gl) || void 0 === nz ? void 0 : nz.conn) !== zz.conn || zz.phase !== cu.B.Left && zz.phase !== cu.B.Closed || bt(null), Dl !== zz.conn || zz.phase !== cu.B.Left && zz.phase !== cu.B.Closed || (Dl = null, null === gl && null === yl && eE.e.setGame(void 0));
      for (const Oz of [...MM]) try {
        Oz(zz.conn, zz.phase, zz.code)
      } catch (Hz) {
        (0, Su.p)(Hz, `${di} a connection listener threw`)
      }
    }

    function nH() {
      (0, bn.s)(), queueMicrotask((() => {
        try {
          wH()
        } catch (zz) {
          console.warn(`${di} stopping before the reload threw`, zz)
        }(0, ob.flushCrashReports)(Dz.c).then(Dz.j, Dz.j)
      }))
    }

    function iH() {
      const zz = Di;
      null === zz || zz.isStopped || null === bl || Ll || !zz.hasPendingCommands() || MH(zz, !1, "budget")
    }

    function lH(zz) {
      var uz;
      const bz = gl;
      zz.persisted || null === bz || (null === (uz = bl) || void 0 === uz ? void 0 : uz.conn) !== bz.conn || bl.left || bz.leave()
    }

    function MH(zz, uz, Ez) {
      let nz = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const iz = Ll;
      Ll = !0;
      try {
        return function(zz, uz, Ez, nz) {
          var iz, lz, Mz, tz;
          if (UM) return !1;
          if (vH(zz, HH), UM || zz.isStopped) return !1;
          ZH() && vl("modelsIn");
          Tt(), Al = performance.now(), Gl = null, al = !1, (0, rz.O)(), null === (iz = dl) || void 0 === iz || iz.beforeFrame(), lE(Al, zz), (0, rz.H)(Al, OH), Tl = !0;
          const Hz = uz && FH();
          let Oz;
          try {
            Oz = zz.frame(Al, Hz, Ez)
          } finally {
            Tl = !1
          }
          if (!Oz) return !1;
          KM.observe(null !== (lz = null === (Mz = zz.lastHeader) || void 0 === Mz ? void 0 : Mz.chunksCancelled) && void 0 !== lz ? lz : 0);
          const pz = zz.lastFrameKind,
            dz = (0, Ju.e)(pz);
          (function(zz) {
            null !== hn && hn.afterFrame(performance.now(), zz)
          })(dz), null === (tz = sM) || void 0 === tz || tz.frame(zz, Al, pz), uz && (PM = dz);
          dz && (0, Nu.d)(Al);
          if (null !== fM) try {
            fM.frameRan(zz, Al, performance.now(), pz)
          } catch (Zz) {
            bH(Zz)
          }
          "drawn" === pz && dH() && function() {
            for (const zz of [...zn]) zz()
          }();
          zz.forEachNetOut(RH);
          const Fz = bl;
          null !== Gl && (null === Fz || void 0 === Fz ? void 0 : Fz.conn) === Gl && KH(Fz, az.o);
          (function(zz) {
            var uz;
            if (NM) return;
            null === JM && FH() && (JM = performance.now());
            if (null === yl && null === gl) return;
            null === JM || AM || (AM = !0, (0, Gu.l)("wasm_startup_loaded", JM));
            let bz = 0;
            null !== gl ? bz = -1 : !0 === (null === (uz = zM) || void 0 === uz ? void 0 : uz.activated) && (bz = ~gu.M.TerrainDrawn);
            const Ez = zz.headerWord(gu.A.LoadSteps) & bz & ~xM;
            if (0 === Ez) return;
            xM |= Ez;
            const nz = performance.now();
            for (const [iz, lz] of Object.entries(pH)) 0 !== (Ez & gu.M[iz]) && (0, Gu.l)(lz, nz)
          })(zz), uz && function(zz) {
            var uz, Ez, nz;
            if (null === gl || !FH()) return;
            null === TM || LM === gl && !TM.frame(Al, 0 !== (zz.headerWord(gu.A.LoadSteps) & gu.M.TerrainDrawn)) || (TM = null);
            const iz = zz.lastHeader,
              lz = !tM || 0 === (null === iz || void 0 === iz ? void 0 : iz.renderPending);
            !vM && lz && (vM = !0, performance.mark(si));
            if (LM === gl) return;
            const Mz = null !== (uz = null === iz || void 0 === iz ? void 0 : iz.firstView) && void 0 !== uz ? uz : cu.W.NotYet;
            if (tM && Mz === cu.W.NotYet) return;
            if (NM && (!0 !== (null === (Ez = (0, oz.j)()) || void 0 === Ez ? void 0 : Ez.isSessionLive) || !lz)) return;
            LM = gl;
            const tz = gl;
            if (setTimeout((() => {
                gl === tz && (0, Gu.i)()
              }), 0), null === (nz = rl) || void 0 === nz || nz.playable(), function() {
                clearTimeout(ul), ul = setTimeout((() => {
                  uH() && AH((zz => {
                    let {
                      prefetchWorldgenWorker: uz
                    } = zz;
                    uz()
                  }))
                }), ai)
              }(), NM) return;
            NM = !0, performance.mark(fi), (0, Ln.n)("render") && Promise.all([bz.e(74), bz.e(47)]).then((() => bz(4430))).then((zz => {
              let {
                renderDebugPlayable: uz
              } = zz;
              uz()
            }), (zz => {
              console.warn("The render debug topic didn't load", zz)
            }));
            const Hz = Math.round(performance.now());
            if (tM && Mz !== cu.W.Drawn) {
              const zz = Mz === cu.W.HeldBackstop ? "held_draws" : "long";
              if (console.warn(`${di} playable at ${Hz} ms on the first view's ${zz} backstop: it wasn't drawn whole in time`), (0, Gu.l)("wasm_view_backstop", Hz, zz), "long" === zz) {
                var Oz, pz;
                const zz = null !== (Oz = null === (pz = el) || void 0 === pz ? void 0 : pz.game) && void 0 !== Oz ? Oz : "";
                TM = new Nb.d((() => {
                  (0, ob.reportFirstViewNoTerrain)(zz, Ii)
                }))
              }
            } else console.info(`${di} playable at ${Hz} ms${tM?"":" (no renderer)"}`);
            setTimeout(FM, 0), (0, Ku.e)().catch((zz => {
              console.error(`${di} item sprites didn't load, so item particles show the missing texture`, zz)
            }))
          }(zz);
          (0, zb.K)(zz, {
            worldgen: nl,
            mesh: ll
          }),
          function(zz) {
            zz.forEachEvent(tE);
            for (const uz of ME) try {
              (0, uE.b)(uz)
            } catch (Zz) {
              if ((0, Su.h)(Zz)) {
                zz.crashOn(zb.j, Zz);
                break
              }
              console.error(`${EE} an input action listener threw`, Zz)
            }
            ME.length = 0
          }(zz), nz && (0, xu.e)();
          return !zz.isStopped
        }(zz, uz, "all" === Ez || zz.rings.net.cursor >= oi || zz.netKeptFrames >= Ni, nz)
      } finally {
        Ll = iz
      }
    }

    function tH(zz) {
      console.error(`${di} a frame-start listener threw`, zz)
    }

    function HH() {
      var zz, uz, bz, Ez;
      null === (zz = Zl) || void 0 === zz || zz.drain(Vi, mi), null === (uz = Xl) || void 0 === uz || uz.drain(Vi), null === (bz = fl) || void 0 === bz || bz.drain(performance.now()), dM(Vi), null === (Ez = wl) || void 0 === Ez || Ez.drain()
    }

    function OH(zz) {
      console.error(`${di} a before-frame listener threw`, zz)
    }
    const pH = {
      ChunkRequested: "wasm_chunk_requested",
      ChunkStored: "wasm_chunk_stored",
      MeshLanded: "wasm_mesh_landed",
      PlayerChunk: "wasm_player_chunk",
      TerrainDrawn: "wasm_terrain_drawn"
    };

    function dH() {
      return tM && FH()
    }

    function FH() {
      return sl && ZH()
    }

    function ZH() {
      return null === Zl || Zl.startupDone
    }

    function RH(zz, uz) {
      const bz = bl;
      (null === bz || void 0 === bz ? void 0 : bz.conn) === zz ? KH(bz, uz) : ql++
    }

    function KH(zz, uz) {
      const {
        ws: bz
      } = zz;
      return bz.readyState === WebSocket.OPEN ? (bz.send(uz), !0) : bz.readyState === WebSocket.CONNECTING && zz.pendingBytes + uz.byteLength <= Ti ? (zz.pending.push(uz.slice()), zz.pendingBytes += uz.byteLength, !0) : (ql++, !1)
    }

    function wH() {
      var zz, uz, bz, Ez, nz, iz, lz, Mz, tz, Hz, Oz, pz, dz, Fz, Zz, Rz, Kz;
      UM = !0, GM.stop(), (0, Gn.e)(), hn = null, Lt(), (0, rz.M)().unlockPointer(), (0, rz.L)(null), null === (zz = Fl) || void 0 === zz || zz(), Fl = null, null === (uz = (0, oz.q)()) || void 0 === uz || uz.followCursorAim(null), (0, xu.C)(), (0, oz.f)(), ji.stop(), null === (bz = rM) || void 0 === bz || bz(), rM = null, null === (Ez = oM) || void 0 === Ez || Ez(), oM = null, null === (nz = fM) || void 0 === nz || nz.stop(), fM = null, (0, xb.l)(null), null === (iz = El) || void 0 === iz || iz(), El = null, null === (lz = nl) || void 0 === lz || lz.stop(), nl = null, null === (Mz = ll) || void 0 === Mz || Mz.stop(), ll = null, null !== (tz = Wi) && void 0 !== tz && null !== (Hz = tz.textures) && void 0 !== Hz && Hz.assets && Dt(null), null === (Oz = Wi) || void 0 === Oz || Oz.stop(), Wi = null, ei = null;
      const wz = Ml;
      Ml = null, wz && (wz.stop(), NH(wz)), null === (pz = Xl) || void 0 === pz || pz.dispose(), Xl = null, null === (dz = fl) || void 0 === dz || dz.dispose(), fl = null, Zl = null, null === (Fz = Kl) || void 0 === Fz || Fz(), Kl = null, null === (Zz = pl) || void 0 === Zz || Zz(), pl = null, null === (Rz = dl) || void 0 === Rz || Rz.stop(), dl = null, kM(), eE.e.release(), ot();
      const Xz = wl;
      wl = null;
      try {
        null === Xz || void 0 === Xz || Xz.dispose()
      } catch (fz) {
        console.warn(`${di} the sky's images didn't release`, fz)
      }(0, cE.e)(null), null === (Kz = Si) || void 0 === Kz || Kz.pagePreviews().endSession(null === (0, iu.s)())
    }

    function XH(zz, uz) {
      var bz, Ez;
      const nz = null !== (bz = null === (Ez = Ml) || void 0 === Ez ? void 0 : Ez.details()) && void 0 !== bz ? bz : {},
        iz = zz.site === Zi || zz.site === Ri || zz.site === ob.RENDER_RELOAD_SITE || zz.site === Ki ? zz.error instanceof WebAssembly.RuntimeError || zz.error instanceof Iu.e : !(0, ku.o)(zz.error) && (0, zb.H)(zz);
      iz && zz.error instanceof Error && (0, iu.V)(zz.error);
      const lz = iz || zz.site === zb.u ? (0, ob.readTrap)(zz.error) : null,
        Mz = null !== lz && (0, yu.e)(lz.kind, lz.refusedBytes) ? lz.refusedBytes : 0,
        tz = null === tl ? (0, qE.r)(function() {
          try {
            return (0, iu.x)().buffer.byteLength
          } catch {
            return 0
          }
        }(), Mz, null) : tl.ceilingMayRefuse(Mz),
        Hz = Mz > 0 && !tz && Ut();
      var Oz;
      if (Hz && ((0, pu.u)("oom"), (0, pu.q)("decline"), hM = !0), wH(), (0, bn.e)()) return console.warn(`${di} the session stopped at ${zz.site} as the page reloads`, zz.error), void((0, ku.o)(zz.error) || (null === (Oz = zz.header) || void 0 === Oz ? void 0 : Oz.lastError) === cu.G.CoreBusy || (0, ob.reportStoppedCore)(zz, uz, lz, {
        memoryDetails: nz,
        declined: Hz
      }));
      (0, ob.showCrash)(zz, uz, lz, {
        memoryDetails: nz,
        declined: Hz
      })
    }

    function fH(zz) {
      const {
        input: uz,
        net: bz,
        worker: Ez
      } = zz.rings, nz = zz.optionsDropped, iz = uz.dropped + nz + bz.dropped + Ez.dropped + ql;
      iz !== ml && function(zz, uz) {
        const bz = performance.now();
        return !(bz - Vl[zz] < Li) && (Vl[zz] = bz, console.warn(`${di} ${uz}`), !0)
      }("dropped", `${iz} records dropped so far (input ${uz.dropped}, options ${nz}, net ${bz.dropped}, worker ${Ez.dropped}, net-out ${ql})`) && (ml = iz)
    }

    function sH() {
      var zz, uz;
      const bz = (0, Xb.d)();
      if (null === bz) return null;
      const Ez = (0, sb.j)(bz);
      return {
        ...Ez,
        horizontal: Math.min(Ez.horizontal, null !== (zz = null === (uz = Ml) || void 0 === uz ? void 0 : uz.shedDistanceInUse()) && void 0 !== zz ? zz : 1 / 0)
      }
    }

    function rH(zz) {
      var uz, bz;
      return {
        samples: tM ? wM : null,
        sunShadows: zz,
        renderDistance: null !== (uz = null === (bz = sH()) || void 0 === bz ? void 0 : bz.horizontal) && void 0 !== uz ? uz : null
      }
    }

    function oH() {
      var zz, uz, bz;
      const Ez = sH();
      return {
        ...null === (zz = Ml) || void 0 === zz ? void 0 : zz.pageKillSnapshot(),
        renderDistance: null !== (uz = null === Ez || void 0 === Ez ? void 0 : Ez.horizontal) && void 0 !== uz ? uz : null,
        renderDistanceVertical: null !== (bz = null === Ez || void 0 === Ez ? void 0 : Ez.vertical) && void 0 !== bz ? bz : null,
        chunkCap: Hl,
        budgetBasis: Ol,
        renderBackend: (0, bn.C)()
      }
    }

    function NH(zz) {
      console.info(`${di} wasm memory at the session's end`, zz.details())
    }

    function vH(zz, uz) {
      if (!zz.isStopped) try {
        uz()
      } catch (bz) {
        zz.crash(zb.v, bz)
      }
    }

    function xH() {
      return il ??= bz.e(68).then((() => bz(42630))).catch((zz => {
        throw il = null, zz
      })), il
    }
    async function JH() {
      const {
        createWorldgenWorker: zz,
        worldgenWorkerReady: uz
      } = await xH();
      return await uz(), zz
    }

    function AH(zz) {
      var uz;
      null === (uz = il) || void 0 === uz || uz.then(zz, (() => {}))
    }

    function TH(zz, uz, bz) {
      return async function(zz, uz, bz) {
        let {
          stop: Ez,
          stillWanted: nz
        } = bz;
        const iz = await (0, XE.m)(zz, {
          stillWanted: nz,
          beforeReload: async () => {
            Ez(), await (0, ob.flushCrashReports)(Dz.c)
          },
          reload: Dz.j
        });
        return iz || uz(), iz
      }(zz, uz, {
        stop: wH,
        stillWanted: bz
      })
    }
    let LH = !1;

    function PH() {
      return LH = !0, async function(zz, uz, Ez) {
        const {
          gamePackSource: nz
        } = await bz.e(343).then((() => bz(42594)));
        await Ct.packStep(zz, ((bz, Ez) => bz.packForGame(zz, nz(uz), Ez)), Ez)
      }(...arguments)
    }

    function GH(zz) {
      ! function(zz, uz) {
        zz((zz => {
          null === zz || void 0 === zz || zz.subscribe((zz => {
            let {
              pack: bz,
              gameSource: Ez
            } = zz;
            uz(null === Ez || null === bz ? null : {
              pack: bz,
              source: "" === Ez ? null : Ez
            })
          }))
        }))
      }(jt, zz)
    }
    let aH = !1,
      VH = null,
      mH = !1,
      qH = !1;

    function hH() {
      var zz;
      aH || (aH = !0, QM("play", Sz), (0, dz.n)(new BH), Mz.gameBridge.attach(Pz), DH().catch((() => {})), (0, oz.s)((zz => {
        zu(zz.setTextHost)
      })), zz = gH, EM.add(zz), function(zz) {
        for (const uz of ol) zz(uz);
        Nl.add(zz)
      }((zz => {
        cH(UH[zz])
      })))
    }
    const UH = {
      booted: iz.k.INITIALISE_NOA,
      texturesIn: iz.k.REGISTRATION,
      modelsIn: iz.k.SETUP_LIFEFORMS
    };

    function cH(zz) {
      tz.k.sK("matchmakeAndPlayStepCompleted", {
        step: zz,
        totalSubSteps: 1
      })
    }

    function gH(zz) {
      if (!mH) return;
      const {
        gameNameWithVariation: uz,
        lobbyName: bz
      } = (0, dz.b)();
      if (zz.code === Ez.b.serverUpdating.code) return (new BH).leaveLive(), void yH(uz, bz);
      tz.k.sK("unwantedLeftGame", {
        reason: SH(zz),
        requiresRefresh: zz.requiresRefresh,
        canReconnect: null !== zz.reconnect,
        automaticallyReconnect: zz.reconnecting,
        canPlayAgain: zz.canPlayAgain,
        gameNameWithVariation: uz,
        lobbyName: bz
      }), (new BH).leaveLive()
    }

    function SH(zz) {
      return null !== zz.reasonKey ? {
        translationKey: zz.reasonKey
      } : "gameOrPluginKick" === zz.name ? zz.reason : `You have disconnected from the server.\n${zz.reason}`
    }

    function yH(zz, uz) {
      var Ez;
      Ez = (0, Hz.A)(zz, uz), Promise.resolve().then((() => bz(1482))).then((zz => {
        let {
          navigatePreserveSearch: uz
        } = zz;
        uz(Ez)
      })).catch((zz => {
        console.warn("[bloxd-wasm-client] the page's router didn't navigate: loading the page instead", zz), (0, Dz.d)(Ez)
      }))
    }

    function DH() {
      return VH ??= Promise.all([bz.e(69), bz.e(72), bz.e(71), bz.e(70), bz.e(83), bz.e(259), bz.e(199), bz.e(216), bz.e(237), bz.e(212), bz.e(46)]).then((() => bz(39840))).then((zz => {
        try {
          zz.attachPlayGameSources()
        } catch (uz) {
          throw console.error("[bloxd-wasm-client] the play sources did not attach", uz),
            function(zz) {
              Yi.then((uz => {
                null === uz || uz.isStopped || UM ? console.warn(`${di} the play sources threw as they attached, after the client stopped`, zz) : XH({
                  site: Ki,
                  error: zz,
                  header: null
                }, Ii)
              }))
            }(uz), uz
        }
      }), (zz => {
        throw VH = null, new oz.b(zz)
      })), VH
    }
    async function QH(zz, uz) {
      hH(), LH = !0, mH = !0;
      let bz = {
          place: zz.place,
          matchedAt: zz.matchedAt
        },
        lz = zz.place.gameNameWithVariation;
      const Mz = (0, pz.g)();
      let tz = null;
      const Hz = await IM({
        matchmake: async () => {
          let uz = bz;
          if (bz = null, null === uz) {
            const bz = await zz.rematch();
            if (bz.isError()) throw tz = bz.asError().forward(), new Error(bz.asError().message);
            uz = {
              place: bz.getValue(),
              matchedAt: performance.now()
            }
          }
          lz = uz.place.gameNameWithVariation;
          return {
            target: await (0, mz.i)(zz.userContext, uz.place, It(), Mz),
            matchedAt: uz.matchedAt,
            freshMs: mz.e
          }
        },
        pageReady: DH,
        onFailure: (zz, uz) => {
          null === tz && function(zz, uz) {
            (0, ob.reportPageJoinFailure)(zz, Ii, uz)
          }(zz, {
            sinceJoinStartMs: uz,
            game: lz
          })
        },
        rejoin: () => () => {},
        invalidateTrafficCode: () => zz.userContext.invalidateTrafficCode(),
        signal: uz
      });
      switch (Hz.kind) {
        case "joined":
          if (Mz) {
            const {
              game: zz
            } = Hz;
            (0, pz.r)((() => {
              zz.endJoinAd()
            }))
          }
          return qH || (qH = !0, (0, Rz.b)()), mH ? (cH(iz.k.CONNECT_TO_GAME_SERVER), cH(iz.k.SHADER_PACK), function() {
            var zz, uz;
            return null !== (zz = null === (uz = rl) || void 0 === uz ? void 0 : uz.runsInJoinedGame()) && void 0 !== zz && zz
          }() && (0, Zz.g)(zz.userContext, lz).catch((zz => {
            console.error("Failed to report the shader pack session", zz)
          })), function() {
            const zz = function() {
              var zz, uz;
              return null !== (zz = null === (uz = rl) || void 0 === uz ? void 0 : uz.couldntRunInJoinedGame()) && void 0 !== zz ? zz : null
            }();
            null !== zz && (0, Zz.e)(zz)
          }(), nz.b.value(void 0)) : IH("The server ended the game as it joined");
        case "failed":
          if (!Hz.reloading) {
            if (null !== tz) return tz;
            if ((Hz.error instanceof az.p || Hz.error instanceof az.d) && Hz.error.code === Ez.b.serverUpdating.code) {
              if (uz.aborted) return IH("Left the game while it loaded");
              const {
                gameNameWithVariation: zz,
                lobbyName: bz
              } = (0, dz.b)();
              return yH(zz, bz), IH("The server is updating")
            }
            return Hz.error instanceof yz.f ? nz.b.errorWithCode(Hz.error.messageKey, iz.k.SHADER_PACK, {
              severity: "medium"
            }) : nz.b.errorWithCode(function(zz) {
              if (zz instanceof az.C || zz instanceof fz.d) return zz.message;
              if (WH(zz)) return (0, Gz.q)(zz.code, zz.serverText);
              return Gz.k
            }(Hz.error), iz.k.CONNECT_TO_GAME_SERVER, {
              error: eH(Hz.error) ? Hz.error : void 0,
              severity: jH(Hz.error),
              gameServerUnreachable: (0, Vz.e)(Hz.error),
              rematch: (0, wz.c)(Hz.error),
              gameRefused: (0, Xz.d)(Hz.error)
            })
          }
          return IH("Reloading into the new build");
        case "stopped":
          return IH("The game client stopped, and shows why");
        case "ob":
          return IH("Left the game while it loaded")
      }
    }

    function WH(zz) {
      return zz instanceof az.p || zz instanceof az.d && "attach" !== zz.stage
    }

    function eH(zz) {
      return !(zz instanceof az.C) && !WH(zz) && void 0 === (0, Vz.e)(zz)
    }

    function jH(zz) {
      return WH(zz) ? zz instanceof az.d && (0, Gz.m)(zz.code).requiresRefresh ? "medium" : "low" : eH(zz) || zz instanceof az.C ? "medium" : "low"
    }

    function IH(zz) {
      return nz.b.errorWithCode(zz, iz.k.CONNECT_TO_GAME_SERVER, {
        severity: "low",
        ob: !0
      })
    }
    class BH {
      leave(zz) {
        if ((0, sz.c)()) {
          var uz, bz;
          if ((0, lz.b)()) return;
          (0, Fz.e)(!0 === (null === (uz = (0, sz.h)()) || void 0 === uz || null === (bz = uz.currentViewer) || void 0 === bz ? void 0 : bz.unsavedChanges), zz)
        } else this.leaveLive()
      }
      leaveLive() {
        var zz;
        LH && (null === (zz = It()) || void 0 === zz || zz.endGamePack());
        if (!mH) return;
        mH = !1, (0, Kz.c)();
        try {
          var uz;
          null === (uz = (0, oz.q)()) || void 0 === uz || uz.clearWasmCameraScreen()
        } catch (Ez) {
          console.error("[bloxd-wasm-client] the camera screen didn't clear", Ez)
        }
        const {
          gameNameWithVariation: bz
        } = (0, dz.b)();
        try {
          it()
        } finally {
          (0, dz.o)({
            websocketUrl: null
          }), tz.k.sK("leaveGame", {
            gameNameWithVariation: bz
          }), (0, Oz.I)()
        }
      }
      isReplay() {
        return (0, sz.c)()
      }
    }
  },
  40205: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => nz,
      i: () => Ez,
      j: () => Mz,
      n: () => lz
    });
    const Ez = 12e4,
      nz = 3e4,
      iz = {
        hidden: () => "undefined" !== typeof document && document.hidden,
        listen: zz => "undefined" === typeof document ? () => {} : (document.addEventListener("visibilitychange", zz), () => {
          document.removeEventListener("visibilitychange", zz)
        })
      };

    function lz(zz) {
      return `it sent no start within ${Math.round(zz)} ms`
    }
    class Mz {
      constructor(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : iz;
        this.timeoutMs = zz, this.onTimeout = uz, this.now = bz, this.visibility = Ez, this.timer = null, this.counted = 0, this.step = null, this.unlisten = void 0, this.unlisten = Ez.listen((() => {
          this.onVisibility()
        })), Ez.hidden() || this.next()
      }
      cancel() {
        this.pause(), this.unlisten()
      }
      onVisibility() {
        this.visibility.hidden() ? (this.counted += this.credit(), this.pause()) : null === this.timer && this.next()
      }
      credit() {
        const zz = this.step;
        return null === zz ? 0 : Math.min(this.now() - zz.at, zz.ms)
      }
      pause() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null), this.step = null
      }
      next() {
        const zz = this.timeoutMs - this.counted;
        if (zz <= 0) return void this.arm(1e3, (() => {
          this.cancel(), this.onTimeout(this.counted)
        }));
        const uz = Math.min(zz, 5e3);
        this.step = {
          at: this.now(),
          ms: uz
        }, this.arm(uz, (() => {
          this.counted += this.credit(), this.step = null, this.next()
        }))
      }
      arm(zz, uz) {
        this.timer = setTimeout((() => {
          this.timer = null, uz()
        }), zz)
      }
    }
  },
  40085: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Ez
    });
    const Ez = {
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
  38115: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => iz
    });
    var Ez = bz(3468);
    const nz = ["none", "idle", "now"];

    function iz() {
      const zz = () => (0, Ez.G)();
      return {
        memoryBytes: () => (0, Ez.x)().buffer.byteLength,
        reserveUpFront: uz => zz().Vp(uz),
        reserveAhead: uz => zz().ap(uz),
        setCeiling: uz => {
          zz().mp(uz)
        },
        lowWater: () => nz[zz().Gp()] ?? "none",
        stats: () => function(zz) {
          const uz = new Uint32Array((0, Ez.x)().buffer, zz, 17),
            bz = zz => uz[zz] ?? 0,
            nz = zz => ({
              upFront: bz(zz),
              ahead: bz(zz + 1),
              onDemandInFrame: bz(zz + 2),
              onDemand: bz(zz + 3)
            });
          return {
            memoryBytes: bz(0),
            initialBytes: bz(1),
            liveBytes: bz(2),
            peakLiveBytes: bz(3),
            headroomBytes: bz(4),
            unusedBytes: bz(5),
            ceilingBytes: bz(6),
            reservesRefused: bz(7),
            grows: nz(8),
            grownBytes: nz(12),
            allocationsRefused: bz(16)
          }
        }(zz().qp()),
        takeBallast: () => zz().hp(),
        takePressure: () => zz().Up()
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);