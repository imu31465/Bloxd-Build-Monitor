export const id = 60;
export const ids = [60];
export const modules = {
  38973: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Fz,
      d: () => Wz
    });
    const Fz = "The world isn't loaded, so no blocks can be seen.",
      Wz = "The world isn't loaded, so nothing in it can be seen."
  },
  38514: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Dz,
      g: () => gz,
      i: () => wz
    });
    var Fz = sz(2637);
    const Wz = 0,
      Xz = 2,
      Oz = 3,
      oz = 4;
    class vz {
      constructor(zz, tz) {
        this.width = zz, this.au = tz, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(zz * tz)
      }
      push(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const sz = this.data.subarray(this.next * this.width, (this.next + 1) * this.width);
        for (let Fz = 0; Fz < this.width; Fz++) sz[Fz] = zz[tz + Fz];
        return this.next = (this.next + 1) % this.au, this.size = Math.min(this.size + 1, this.au), sz
      }
      lines() {
        const zz = [],
          tz = (this.next - this.size + this.au) % this.au;
        for (let sz = 0; sz < this.size; sz++) {
          const Fz = (tz + sz) % this.au * this.width;
          zz.push(Array.from(this.data.subarray(Fz, Fz + this.width)).join(","))
        }
        return zz
      }
    }

    function Uz(zz) {
      return Number.isFinite(zz) ? String(Math.round(10 * zz) / 10) : String(zz)
    }

    function Kz(zz) {
      return Number.isFinite(zz) ? zz.toFixed(1) : String(zz)
    }
    class uz {
      constructor() {
        this.frames = 0, this.looked = 0, this.idle = 0, this.Iy = 0, this.pastLimit = 0, this.lockSkips = 0, this.nb = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakRate = 0, this.events = 0, this.eventMax = 0, this.bigEvents = 0, this.outliers = 0, this.eventLines = 0, this.suppressed = 0
      }
    }
    class Nz {
      constructor() {
        var zz = this;
        this.tally = new uz, this.records = new vz(10, 3600), this.events = new vz(4, 12e3), this.event = new Float64Array(4), this.take = null, this.client = "js", this.started = !1, this.record = function(tz) {
          let sz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          const [Fz, vz, uz, Nz, bz, wz, Dz, gz, Hz, Bz] = zz.records.push(tz, sz), Pz = zz.tally;
          switch (Pz.frames++, Dz) {
            case Wz:
              return void Pz.idle++;
            case oz:
              return void Pz.nb++;
            case Oz:
              return Pz.lockSkips++, void(0 === uz && 0 === Nz || zz.outlier(`lock skip dropped raw (${Uz(uz)}, ${Uz(Nz)}) at ${Kz(Fz)} ms`))
          }
          Pz.looked++, Number.isFinite(vz) && (Pz.dtMin = Math.min(Pz.dtMin, vz), Pz.dtMax = Math.max(Pz.dtMax, vz), Pz.dtSum += vz, vz > 0 && (Pz.peakRate = Math.max(Pz.peakRate, Math.hypot(bz, wz) / vz))), Pz.raw[0] += uz, Pz.raw[1] += Nz, Pz.turned[0] += bz, Pz.turned[1] += wz;
          const rz = Math.abs(uz) > Bz || Math.abs(Nz) > Bz,
            Yz = `raw (${Uz(uz)}, ${Uz(Nz)}) over ${Kz(vz)} ms, limit ${Uz(Bz)}, filter v (${gz.toFixed(3)}, ${Hz.toFixed(3)}) px/ms, at ${Kz(Fz)} ms`;
          Dz === Xz ? (Pz.Iy++, zz.outlier(`spike put right: ${Yz} -> turned (${Uz(bz)}, ${Uz(wz)})`)) : rz ? (Pz.pastLimit++, zz.outlier(`kept past limit: ${Yz}`)) : vz > 50 && (Pz.longFrames++, zz.outlier(`long frame: ${Yz}, turned in full`))
        }, this.onMouseMove = zz => {
          const tz = this.tally,
            {
              movementX: sz,
              movementY: Fz
            } = zz;
          tz.events++;
          const Wz = Math.max(Math.abs(sz), Math.abs(Fz));
          tz.eventMax = Math.max(tz.eventMax, Wz);
          const Xz = null !== document.pointerLockElement,
            Oz = this.event;
          Oz[0] = zz.timeStamp, Oz[1] = sz, Oz[2] = Fz, Oz[3] = Xz ? 1 : 0, this.events.push(Oz), Wz >= 200 && (tz.bigEvents++, this.eventOutlier(`big mousemove (${sz}, ${Fz}) at ${Kz(zz.timeStamp)} ms, lock ${Xz?"po":"free"}`))
        }, this.onLockChange = () => {
          const zz = document.pointerLockElement;
          (0, Fz.g)("look", `pointer lock ${zz?`gained (${zz.tagName.toLowerCase()})`:"lost"} at ${Kz(performance.now())} ms`)
        }, this.onLockError = () => {
          (0, Fz.g)("look", `pointer lock request failed at ${Kz(performance.now())} ms`)
        }, this.onVisibility = () => {
          (0, Fz.g)("look", `page ${document.visibilityState} at ${Kz(performance.now())} ms`)
        }, this.flush = () => {
          this.takeRecords();
          const zz = this.tally;
          if (this.tally = new uz, 0 === zz.events && 0 === zz.raw[0] && 0 === zz.raw[1] && 0 === zz.lockSkips && 0 === zz.Iy && 0 === zz.dropped) return;
          const tz = zz.looked > 0 ? zz.dtSum / zz.looked : NaN,
            sz = [`${zz.frames} frames (${zz.looked} looked, ${zz.idle} idle${"wasm"===this.client?`, ${zz.nb} carried`:""})`, `dt avg ${Kz(tz)} min ${Kz(zz.dtMin)} max ${Kz(zz.dtMax)}, ${zz.longFrames} long`, `${zz.events} mousemoves (max ${Uz(zz.eventMax)} px, ${zz.bigEvents} big)`, `raw (${Uz(zz.raw[0])}, ${Uz(zz.raw[1])}) turned (${Uz(zz.turned[0])}, ${Uz(zz.turned[1])})`, `peak ${zz.peakRate.toFixed(2)} px/ms`, `put right ${zz.Iy}, past limit ${zz.pastLimit}, lock skips ${zz.lockSkips}`, "lock " + (document.pointerLockElement ? "po" : "free")];
          zz.dropped > 0 && sz.push(`${zz.dropped} doubled spike copies dropped`), zz.lost > 0 && sz.push(`${zz.lost} records lost`), zz.suppressed > 0 && sz.push(`${zz.suppressed} outlier lines not shown`), (0, Fz.g)("look", `1s: ${sz.join("; ")}`)
        }, this.dump = () => [`look records (${this.client}): nowMs,dtMs,rawX,rawY,turnedX,turnedY,outcome,vX,vY,limit`, ...this.records.lines(), "mousemove events: timeStamp,movementX,movementY,locked", ...this.events.lines()].join("\n")
      }
      start(zz, tz) {
        this.client = zz, this.take = tz;
        const {
          screen: sz
        } = window;
        (0, Fz.g)("look", `start: ${zz} client, dpr ${window.devicePixelRatio}, screen ${sz.width}x${sz.height}, pointer lock ${document.pointerLockElement?"po":"free"}`), this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
          capture: !0,
          passive: !0
        }), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), (0, Fz.f)("look", this.dump))
      }
      outlier(zz) {
        const tz = this.tally;
        tz.outliers >= 20 ? tz.suppressed++ : (tz.outliers++, (0, Fz.g)("look", zz))
      }
      eventOutlier(zz) {
        const tz = this.tally;
        tz.eventLines >= 10 ? tz.suppressed++ : (tz.eventLines++, (0, Fz.g)("look", zz))
      }
      takeRecords() {
        var zz;
        const tz = null === (zz = this.take) || void 0 === zz ? void 0 : zz.call(this);
        if (tz && tz.length >= 2) {
          this.tally.lost += tz[0], this.tally.dropped += tz[1];
          for (let zz = 2; zz + 10 <= tz.length; zz += 10) this.record(tz, zz)
        }
      }
      droppedCopy() {
        this.tally.dropped++
      }
      endTake() {
        this.takeRecords(), this.take = null
      }
    }
    let bz = null;

    function wz(zz) {
      let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return bz ??= new Nz, bz.start(zz, tz), bz.record
    }

    function Dz() {
      var zz;
      null === (zz = bz) || void 0 === zz || zz.endTake()
    }

    function gz() {
      var zz;
      null === (zz = bz) || void 0 === zz || zz.droppedCopy()
    }
  },
  8732: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Fz
    });
    const Fz = new Set(["chunkBorders"])
  },
  8897: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Oz,
      d: () => Wz,
      e: () => Kz
    });
    var Fz = sz(1521);

    function Wz(zz) {
      var tz;
      return {
        ...Oz.store,
        yaw: Oz.store.yaw + (null !== (tz = Fz.d[zz].previewYaw) && void 0 !== tz ? tz : 0)
      }
    }
    const Xz = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      Oz = {
        player: Xz,
        store: {
          ...Xz,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function oz(zz, tz) {
      zz instanceof Promise ? zz.then(tz).catch((zz => {
        console.error("Couldn't open the preview", zz)
      })) : tz(zz)
    }
    class vz {
      constructor(zz) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, oz(zz, (zz => {
          this.closed ? zz.close() : (this.opened = zz, null !== this.size && zz.resize(this.size.width, this.size.height), null !== this.view && zz.show(this.view))
        }))
      }
      show(zz) {
        var tz;
        this.view = zz, null === (tz = this.opened) || void 0 === tz || tz.show(zz)
      }
      resize(zz, tz) {
        var sz;
        this.size = {
          width: zz,
          height: tz
        }, null === (sz = this.opened) || void 0 === sz || sz.resize(zz, tz)
      }
      close() {
        var zz;
        this.closed = !0, null === (zz = this.opened) || void 0 === zz || zz.close(), this.opened = null
      }
    }
    class Uz {
      constructor(zz) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(zz).then((zz => zz.ready)), oz(zz, (zz => {
          this.closed ? zz.close() : (this.opened = zz, null !== this.size && zz.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var zz, tz;
        return null !== (zz = null === (tz = this.opened) || void 0 === tz ? void 0 : tz.isReady()) && void 0 !== zz && zz
      }
      setCosmetic(zz, tz) {
        var sz;
        null === (sz = this.opened) || void 0 === sz || sz.setCosmetic(zz, tz)
      }
      playEmote(zz) {
        var tz;
        null === (tz = this.opened) || void 0 === tz || tz.playEmote(zz)
      }
      setOrbit(zz) {
        var tz;
        null === (tz = this.opened) || void 0 === tz || tz.setOrbit(zz)
      }
      resetCamera() {
        var zz;
        null === (zz = this.opened) || void 0 === zz || zz.resetCamera()
      }
      async untilDrawn(zz) {
        var tz;
        await this.ready, await (null === (tz = this.opened) || void 0 === tz ? void 0 : tz.untilDrawn(zz))
      }
      resize(zz, tz) {
        var sz;
        this.size = {
          width: zz,
          height: tz
        }, null === (sz = this.opened) || void 0 === sz || sz.resize(zz, tz)
      }
      close() {
        var zz;
        this.closed = !0, null === (zz = this.opened) || void 0 === zz || zz.close(), this.opened = null
      }
    }
    const Kz = new class {
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
        return new vz(this.current().openMob(zz))
      }
      openPet(zz) {
        return new vz(this.current().openPet(zz))
      }
      openMobLineup(zz) {
        return new vz(this.current().openMobLineup(zz))
      }
      openCharacter(zz, tz) {
        return new Uz(this.current().openCharacter(zz, tz))
      }
    }
  },
  38637: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => uz,
      e: () => Nz
    });
    var Fz = sz(161),
      Wz = sz(188),
      Xz = sz(1457),
      Oz = sz(2689),
      oz = sz(1466),
      vz = sz(35970),
      Uz = sz(624),
      Kz = sz(38610);

    function uz(zz) {
      (0, Oz.f)("matchmake_failed", zz, Fz.k[Fz.k.SHADER_PACK])
    }
    async function Nz(zz, tz) {
      var sz;
      const Fz = null === (sz = await Kz.shaderPackPage.preload()) || void 0 === sz ? void 0 : sz.listing,
        Oz = (0, vz.b)();
      Fz && null !== Oz && await oz.d.reportShaderPackSession(zz, {
        packId: Fz.packId,
        sourceHash: Fz.sourceHash,
        game: (0, Xz.g)(tz, Wz.s, "other"),
        playSessionId: Oz,
        visitSessionId: (0, Uz.e)()
      })
    }
  },
  38455: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => oz
    });
    var Fz = sz(34),
      Wz = sz(1269),
      Xz = sz(3145);
    const Oz = "Reconnecting";
    class oz {
      constructor(zz) {
        this.hooks = zz, this.graceMs = 0, this.sessionBased = !1, this.controller = void 0, this.frozen = !1, this.stopped = !1, this.listening = !1, this.ended = !1, this.retryNow = () => {
          "visible" === document.visibilityState && this.controller.retryNow()
        }, this.onPageHide = zz => {
          zz.persisted || this.leave()
        }, this.controller = new Xz.e((tz => zz.reconnect(tz)), {
          isSessionLive: () => !this.ended && zz.isLive(),
          onPhaseChanged: zz => {
            this.onPhaseChanged(zz)
          },
          onReconnected: tz => {
            zz.onReconnected(tz)
          },
          onGaveUp: tz => {
            !this.ended && zz.isLive() && zz.onGaveUp(this.sessionBased, tz)
          }
        })
      }
      onInitialInfo(zz, tz) {
        this.graceMs = zz, this.sessionBased = tz
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
          tz = this.controller.heldToken;
        this.end(), zz && "" !== tz && this.hooks.releaseSeat(tz)
      }
      end() {
        this.ended = !0, this.controller.stop()
      }
      onPhaseChanged(zz) {
        const tz = "frozen" === zz || "resuming" === zz;
        tz !== this.stopped && (this.stopped = tz, this.hooks.freeze(tz));
        const sz = "frozen" === zz || "resuming" === zz && this.frozen;
        sz && !this.frozen ? (0, Wz.n)(Oz) : !sz && this.frozen && (0, Wz.m)(Oz), this.frozen = sz, this.setListening("connected" !== zz), Fz.o.Yg(Xz.o, sz ? "frozen" : zz)
      }
      setListening(zz) {
        zz !== this.listening && (this.listening = zz, zz ? (window.addEventListener("online", this.retryNow), document.addEventListener("visibilitychange", this.retryNow), window.addEventListener("pagehide", this.onPageHide)) : (window.removeEventListener("online", this.retryNow), document.removeEventListener("visibilitychange", this.retryNow), window.removeEventListener("pagehide", this.onPageHide)))
      }
    }
  },
  38462: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Fz
    });
    class Fz {
      constructor(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.onSilent = zz, this.now = tz, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
          const zz = this.now(),
            tz = zz - this.lastCheckAt <= 2e3;
          this.lastCheckAt = zz;
          const sz = "visible" === document.visibilityState;
          !sz || tz && this.wasVisible || (this.resumedAt = zz), this.wasVisible = sz, sz && zz - this.lastHeardAt > 12e3 && zz - this.resumedAt > 2e3 && this.onSilent()
        }, this.lastHeardAt = tz(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
      }
      heard() {
        this.lastHeardAt = this.now()
      }
      dispose() {
        clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
      }
    }
  },
  8771: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Xz
    });
    var Fz = sz(1060);

    function Wz() {
      var zz, tz;
      return null !== (zz = null === (tz = screen.orientation) || void 0 === tz ? void 0 : tz.type) && void 0 !== zz ? zz : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const Xz = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && Wz() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = Wz(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, Fz.SD)(new Error("Game view size held for 60 s"))
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
        let tz = !1;
        return () => {
          if (tz && this.isHeld()) return null;
          const sz = zz();
          return tz ||= null !== sz, sz
        }
      }
      onRelease(zz) {
        return this.resizers.add(zz), () => {
          this.resizers.delete(zz)
        }
      }
    }
  },
  38624: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Wz
    });
    let Fz = !1;
    async function Wz(zz, tz) {
      if (!Fz) {
        Fz = !0;
        try {
          const [{
            reloadBloxd: Fz
          }, {
            NotificationProvider: Wz
          }] = await Promise.all([Promise.resolve().then((() => sz(1664))), Promise.resolve().then((() => sz(1319)))]);
          if (!zz || !0 === await Wz.showPromptPopup({
              title: "Unsaved changes",
              subtitle: "Exit and lose your unsaved changes?",
              confirmText: "Exit",
              destructive: !0,
              cancelText: "Cancel",
              unlockPointerKey: "replayExitUnsavedChanges"
            }).getResult()) return void Fz(tz)
        } catch (Wz) {
          console.error("Leaving the replay failed", Wz)
        }
        Fz = !1
      }
    }
  },
  38473: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Uz,
      f: () => Kz
    });
    var Fz = sz(1656),
      Wz = sz(201),
      Xz = sz(1636),
      Oz = sz(1708),
      oz = sz(1191),
      vz = sz(1120);
    async function Uz(zz, tz) {
      return function(zz) {
        return "object" === typeof zz && null !== zz && zz.code === Wz.b.VpnIp.code
      }(tz) && function(zz) {
        return Xz.c.supports("appCheck") && zz.isLoggedIn() && !zz.hasTriedAppAttestation()
      }(zz) && await async function(zz) {
        try {
          const {
            token: tz
          } = await (0, Oz.c)(), {
            "3PSIDMCPP": sz
          } = await (0, vz.postJsonWithMetricsCookiesAndJsonResponse)(`${oz.clientSideServerUrls.indexUrl}/index/app-attestation`, {
            appCheckToken: tz
          }, {
            retries: 0
          }, zz.getMetricsCookies());
          return zz.setAppAttestedAuthJwt(sz), !0
        } catch (tz) {
          return tz instanceof Fz.b && "failed" === tz.code ? (console.warn("The app couldn't get an App Check token:", tz), zz.markAppAttestationTried()) : console.error("Failed to attest the app:", tz), !1
        }
      }(zz)
    }
    async function Kz(zz, tz) {
      try {
        return await tz()
      } catch (sz) {
        if (!await Uz(zz, sz)) throw sz
      }
      return tz()
    }
  },
  40135: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => vz
    });
    var Fz = sz(1681);
    const Wz = 33177600,
      Xz = 3e4;
    let Oz = !1;

    function oz(zz, tz, sz) {
      if (!zz.drawing()) return Promise.reject(new Error("Screenshots need a game to be running"));
      if (Oz) return Promise.reject(new Error("A screenshot is already being taken"));
      Oz = !0;
      const Fz = function(zz, tz, sz) {
        const Fz = Math.max(1, zz),
          Xz = Math.max(1, tz),
          Oz = Math.min(1, sz / Math.max(Fz, Xz), Math.sqrt(Wz / (Fz * Xz)));
        return {
          width: Math.max(1, Math.floor(Fz * Oz)),
          height: Math.max(1, Math.floor(Xz * Oz))
        }
      }(tz, sz, zz.maxTextureSize);
      return zz.resize(Fz.width, Fz.height), new Promise(((tz, sz) => {
        let Fz, Wz = 2,
          oz = null;
        const vz = () => {
          var tz;
          Oz = !1, null === (tz = oz) || void 0 === tz || tz(), clearTimeout(Fz), zz.restoreSize()
        };
        Fz = setTimeout((() => {
          vz(), sz(new Error("No frame was drawn to capture"))
        }), Xz), oz = zz.onFrameDrawn((() => {
          if (Wz--, Wz > 0) return;
          const {
            canvas: Fz
          } = zz, Xz = {
            width: Fz.width,
            height: Fz.height
          };
          try {
            Fz.toBlob((zz => {
              zz ? tz({
                blob: zz,
                ...Xz
              }) : sz(new Error("The canvas gave no image"))
            }), "image/png")
          } catch (Oz) {
            sz(Oz)
          } finally {
            vz()
          }
        }))
      }))
    }
    async function vz(zz, tz, sz) {
      try {
        const Wz = await oz(zz, tz, sz);
        (0, Fz.d)(Wz.blob, `bloxd-screenshot-${Wz.width}x${Wz.height}-${Date.now()}.png`)
      } catch (Wz) {
        console.error("Error taking screenshot:", Wz)
      }
    }
  },
  38469: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Nz,
      f: () => Kz
    });
    var Fz = sz(201),
      Wz = sz(1746),
      Xz = sz(1750),
      Oz = sz(8398);
    const oz = [250, 500, 1e3, 2e3, 1250],
      vz = 406;

    function Uz(zz) {
      if ("object" !== typeof zz || null === zz) return !1;
      const {
        code: tz,
        message: sz
      } = zz, Wz = Fz.b.duplicateLobbyNameError;
      return (tz === Wz.code || tz === vz) && (sz === Wz.text || sz === Wz.text + Fz.j)
    }
    async function Kz(zz, tz) {
      let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Wz.c;
      for (let Wz = 0;; Wz++) {
        let Oz;
        (0, Xz.n)(tz);
        try {
          return await zz()
        } catch (Fz) {
          if (Oz = oz[Wz], void 0 === Oz || !Uz(Fz)) throw Fz
        }
        await sz(Oz, tz)
      }
    }
    const uz = new Set([Fz.b.duplicateLobbyNameError.code, Fz.b.lobbyCantBeCreated.code, Fz.b.roomDisposedEarlyError.code, Fz.b.roomDisposedLateError.code, Fz.b.serverRoomLimitReached.code]);

    function Nz(zz) {
      if (Uz(zz)) return !0;
      const tz = (0, Oz.d)(zz);
      return "number" === typeof tz && uz.has(tz)
    }
  },
  8398: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Xz,
      d: () => Oz,
      e: () => oz,
      g: () => Uz,
      h: () => vz
    });
    var Fz = sz(201),
      Wz = sz(4278);

    function Xz(zz) {
      return Oz(zz) === Fz.b.gameOrPluginOnPlayerAuthRejected.code
    }

    function Oz(zz) {
      return "object" === typeof zz && null !== zz ? zz.code : void 0
    }

    function oz(zz) {
      var tz;
      return null !== (tz = Object.keys(Wz.c).find((tz => Wz.c[tz] === zz))) && void 0 !== tz ? tz : null
    }

    function vz(zz) {
      return "notWhitelisted" === zz ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const Uz = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  38564: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Oz
    });
    var Fz = sz(308),
      Wz = sz(133),
      Xz = sz(44);

    function Oz() {
      Xz.f.setItem(Fz.Jb, Xz.f.getItem(Fz.Jb) + 1), (0, Wz.p)() && Xz.f.setItem(Fz.Hb, Xz.f.getItem(Fz.Hb) + 1)
    }
  },
  35962: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Bz,
      d: () => Pz
    });
    var Fz = sz(991),
      Wz = sz(585),
      Xz = sz(321),
      Oz = sz(993),
      oz = sz(601),
      vz = sz(644),
      Uz = sz(4165),
      Kz = sz(106),
      uz = sz(133),
      Nz = sz(1664),
      bz = sz(119),
      wz = sz(35970),
      Dz = sz(44),
      gz = sz(624),
      Hz = sz(35972);

    function Bz() {
      var zz, tz;
      return [...null !== (zz = navigator.languages) && void 0 !== zz ? zz : [null !== (tz = navigator.language) && void 0 !== tz ? tz : "none"], "en-Gb"]
    }

    function Pz(zz, tz, sz, Pz, rz) {
      const Yz = (0, Fz.n)(tz) ? (0, Fz.r)(tz) : null,
        xz = {
          cookies: (0, Nz.getAllCookiesForGameNameWithVariation)(tz),
          isMobile: (0, Kz.isMobile)(),
          isUsingCustomGameTexturePack: null !== Yz && rz(Yz),
          generalCookies: {
            joinDiscord: !!Dz.f.getItem("DiscordPressed"),
            newGo: Uz.d,
            ...zz.getMetricsCookies(),
            trafficCode: Pz,
            compliance: Kz.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, Kz.getBrowserName)(),
            version: (0, Kz.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, Kz.getPlatformType)(),
            deviceType: (0, bz.c)()
          },
          isLoggedIn: zz.isLoggedIn(),
          lobbyName: sz,
          languages: Bz(),
          version: Wz.e,
          siteUsed: uz.t,
          subsiteUsed: uz.x,
          playSessionId: (0, wz.g)(tz),
          visitSessionId: (0, gz.e)(),
          clientReason: oz.j.reason,
          budgetBasis: (0, Hz.c)(),
          ...null !== vz.q && {
            diagClaim: vz.q.claimId
          }
        };
      return null !== Yz && (0, Xz.zc)(Yz) ? (xz.lobbyName = (0, Fz.j)(Yz, (0, Fz.p)(tz), sz), {
        roomName: `classic_${Oz.h}`,
        joinOptions: xz
      }) : {
        roomName: tz,
        joinOptions: xz
      }
    }
  },
  39794: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => oz
    });
    var Fz = sz(38973);

    function Wz(zz) {
      return {
        current: () => zz,
        watch: () => () => {}
      }
    }

    function Xz() {}
    const Oz = Object.freeze([0, 0, 0]),
      oz = {
        states: {
          health: Wz({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: Wz({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: Wz({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: Wz({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: Wz({}),
          creativeVisibility: Wz({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: Wz(null),
          heldItemAim: Wz({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: Wz(!1),
          gliderBoostFuel: Wz(0),
          flight: Wz({
            canFly: !1,
            flying: !1
          }),
          crafting: Wz({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: Wz({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: Wz({}),
          fullInventory: Wz(!1),
          crosshairTarget: Wz({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: Wz(!0),
          freeCamera: Wz({
            allowed: !1,
            movesFly: !1
          }),
          replay: Wz(null),
          replayEdits: Wz(null),
          replayRecorder: Wz({
            recording: !1,
            clipping: !1,
            hasClipBuffer: !1,
            seconds: 0
          }),
          replayVideoExporting: Wz(!1)
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
          selectHotbarSlot: Xz,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: Xz,
          setInventoryOpen: Xz,
          changeIronChestPasskey: Xz,
          dragReplayCamera: Xz,
          applyTemporaryThirdPerson: Xz,
          holdEmoteWheel: Xz,
          recordFlyingMiddleText: Xz,
          focusCrafting: Xz,
          craftRecipe: () => ({
            hK: 0,
            Nu: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: Xz,
          setShopOpen: Xz,
          buyShopItem: Xz,
          sendChatMessage: Xz,
          ignorePlayer: Xz,
          reportPlayer: Xz,
          reportWorldCodeChat: Xz,
          requestDiscordReportKey: Xz,
          reportLobbyOrGame: Xz,
          playEmote: Xz,
          updateMyCosmetic: Xz,
          writeOnBoard: Xz,
          writeBook: Xz,
          writeNameTag: Xz,
          setCustomLobbyBlock: Xz,
          openIronChest: Xz,
          sendCodeCollab: Xz,
          clickCodeBlock: Xz,
          bindCustomButtonKeys: Xz,
          pressCustomButton: Xz,
          moveReplayFreecam: Xz,
          holdReplayFreecamVertical: Xz,
          respawn: Xz,
          wakeUp: Xz,
          requestLeaderboard: Xz,
          completeTask: Xz,
          setServerCookie: Xz,
          answerUiRequest: Xz,
          chooseRewardedAd: Xz,
          setCameraZoom: Xz,
          setFreeCameraMovesFly: Xz,
          setBlockHighlight: Xz,
          setCrosshairInteractPrompt: Xz,
          setLookSensitivity: Xz,
          replayAction: Xz,
          setReplayPlaying: Xz,
          seekReplay: Xz,
          setReplayCameraMode: Xz,
          syncReplayCameraMode: Xz,
          setReplayCameraKeyframe: Xz,
          moveReplayCameraKeyframe: Xz,
          deleteReplayCameraKeyframes: Xz,
          setReplayPlaybackMark: Xz,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: Xz,
          exportReplayVideo: Xz,
          toggleRecording: Xz,
          saveClip: Xz,
          setRecorderPrefs: Xz,
          setReplayViewerOpen: Xz
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => Fz.c,
          worldCodeAiGameState: () => Fz.d
        },
        lookups: {
          localPos: () => Oz,
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
  35972: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => xz,
      c: () => Yz,
      d: () => rz
    });
    var Fz = sz(201),
      Wz = sz(106),
      Xz = sz(2653),
      Oz = sz(4038),
      oz = sz(607),
      vz = sz(35974);
    const Uz = 1048576,
      Kz = 1024 * Uz,
      uz = 400 * Uz,
      Nz = 147456,
      bz = .5,
      wz = 1.5 * Kz,
      Dz = 768 * Uz;

    function gz(zz) {
      return uz + zz * Nz
    }

    function Hz(zz, tz, sz) {
      var Wz, Oz;
      let {
        footprintBytes: oz,
        basis: Uz,
        namesLimit: Hz
      } = function(zz) {
        const {
          os: tz,
          deviceMemory: sz
        } = zz;
        if ("ios" === tz) switch ((0, Xz.e)(zz)) {
          case "ipad_m":
            return {
              footprintBytes: gz(vz.e), basis: "ipad-m", namesLimit: !1
            };
          case "ipad":
            return {
              footprintBytes: Dz, basis: "ipad", namesLimit: !0
            };
          case "iphone_6gb":
            return {
              footprintBytes: wz, basis: "iphone-6gb", namesLimit: !0
            };
          case "iphone":
            return {
              footprintBytes: Dz, basis: "iphone", namesLimit: !0
            }
        }
        return "number" === typeof sz && Number.isFinite(sz) && sz > 0 ? {
          footprintBytes: sz * Kz * bz,
          basis: `memory-${sz}`,
          namesLimit: !0
        } : "android" === tz ? {
          footprintBytes: Dz,
          basis: "android",
          namesLimit: !0
        } : {
          footprintBytes: gz(vz.j),
          basis: "unreported",
          namesLimit: !1
        }
      }(zz);
      if (sz) {
        const zz = Math.min(oz, gz(vz.e));
        oz = uz + Math.max(0, zz - uz) / 2, Uz += "+killed", Hz = !0
      }
      null !== tz && gz(tz) < oz && (oz = gz(tz), Uz += "+learned", Hz = !0);
      const Bz = function(zz) {
          const tz = Math.floor((zz - uz) / Nz);
          return Math.min(vz.e, Math.max(vz.h, tz))
        }(oz),
        Pz = (0, vz.q)(Bz);
      return {
        footprintBytes: oz,
        shedFootprintBytes: Hz ? Math.max(oz, gz(Bz)) : null,
        chunkCap: Bz,
        maxHorizDistance: null !== (Wz = null === Pz || void 0 === Pz ? void 0 : Pz.horizontal) && void 0 !== Wz ? Wz : Fz.d.maxChunkHorizAddDistance,
        maxVertDistance: null !== (Oz = null === Pz || void 0 === Pz ? void 0 : Pz.vertical) && void 0 !== Oz ? Oz : Fz.d.maxChunkVertAddDistance,
        basis: Uz
      }
    }
    let Bz = null;

    function Pz() {
      return Hz({
        os: (0, Wz.getOperatingSystem)(),
        deviceMemory: navigator.deviceMemory,
        ...(0, Xz.f)()
      }, (0, Oz.f)(), (0, oz.F)("wasm").length > 0)
    }

    function rz() {
      return Bz ??= Pz(), Bz
    }

    function Yz() {
      var zz;
      return (null !== (zz = Bz) && void 0 !== zz ? zz : Pz()).basis
    }

    function xz(zz, tz) {
      return zz.setChunkCap(tz.chunkCap)
    }
  },
  40127: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Oz,
      d: () => Xz
    });
    var Fz = sz(2883),
      Wz = sz(991);

    function Xz(zz, tz) {
      return null !== zz.gameSource && (0, Fz.p)(tz, zz.gameSource)
    }

    function Oz(zz, tz) {
      if (null === zz.gameSource || "" === zz.gameSource || null === tz) return !0;
      const sz = (0, Wz.n)(tz) ? (0, Wz.r)(tz) : null;
      return null !== sz && Xz(zz, sz)
    }
  },
  40101: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => oz
    });
    var Fz = sz(574),
      Wz = sz(40108),
      Xz = sz(40063);
    async function Oz(zz) {
      const tz = await (0, Wz.h)({
        Helmet: sz(37379),
        Chestplate: sz(37386),
        Gauntlets: sz(37407),
        Leggings: sz(37395),
        Boots: sz(37399)
      } [Fz.c[zz]]);
      try {
        return (0, Xz.n)(tz)
      } finally {
        tz.close()
      }
    }
    const oz = new class {
      constructor() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Oz,
          tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Wz.l;
        this.decode = zz, this.register = tz, this.decoded = new Map
      }
      warm() {
        for (let zz = 0; zz < Fz.c.length; zz++) this.part(zz).catch((tz => {
          console.warn(`The grayscale armour ${Fz.c[zz]} image didn't decode ahead of use`, tz)
        }))
      }
      async load(zz, tz) {
        const {
          width: sz,
          height: Xz,
          pixels: Oz
        } = await this.part(zz), oz = new ImageData(function(zz, tz) {
          const sz = new Uint8ClampedArray(zz.length);
          for (let Fz = 0; Fz < zz.length; Fz += 4) sz[Fz] = Math.round(zz[Fz] * tz[0] / 255), sz[Fz + 1] = Math.round(zz[Fz + 1] * tz[1] / 255), sz[Fz + 2] = Math.round(zz[Fz + 2] * tz[2] / 255), sz[Fz + 3] = zz[Fz + 3];
          return sz
        }(Oz, function(zz) {
          return [zz >>> 16 & 255, zz >>> 8 & 255, 255 & zz]
        }(tz)), sz, Xz);
        let vz;
        try {
          vz = await createImageBitmap(oz, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          })
        } catch (Uz) {
          throw new Wz.d("decode", `grayscale armour ${Fz.c[zz]}`, {
            cause: Uz
          })
        }
        return {
          id: this.register(vz),
          width: sz,
          height: Xz
        }
      }
      part(zz) {
        const tz = this.decoded.get(zz);
        if (void 0 !== tz) return tz;
        const sz = this.decode(zz).catch((tz => {
          throw this.decoded.delete(zz), tz instanceof Wz.d ? tz : new Wz.d("decode", `grayscale armour ${Fz.c[zz]}`, {
            cause: tz
          })
        }));
        return this.decoded.set(zz, sz), sz
      }
    }
  },
  40094: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Oz,
      f: () => gz,
      g: () => Kz,
      i: () => uz,
      m: () => Dz
    });
    var Fz = sz(40052),
      Wz = sz(40101),
      Xz = sz(40108);
    const Oz = 396,
      oz = 1,
      vz = 2,
      Uz = 3,
      Kz = {
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
      uz = {
        File: 0,
        Item: 1
      },
      Nz = 0,
      bz = 1,
      wz = 2;

    function Dz(zz) {
      const tz = (0, Fz.n)();
      tz.catch((() => {}));
      let Wz = null;
      return {
        glbUrl: zz,
        lifeformAtlasUrl: async zz => (await tz).lifeformAtlasUrl(zz),
        armourAtlasUrl: async () => (await sz.e(201).then((() => sz(33845)))).armourAtlasUrl,
        capeUrl: async zz => (await tz).capeUrl(zz),
        attachmentImageUrl: async zz => (await tz).attachmentImageUrl(zz),
        blockImageUrl: async zz => (await tz).blockImageUrl(zz),
        groupAtlasUrl: async zz => (await tz).groupAtlasUrl(zz),
        particleTextureUrl: async zz => (await tz).particleTextureUrl(zz),
        particleItemUrl: async zz => (Wz ??= sz.e(38).then((() => sz(50829))).catch((zz => {
          throw Wz = null, zz
        })), (await Wz).particleItemUrl(zz))
      }
    }
    class gz {
      constructor(zz, tz) {
        var sz, Oz, oz, vz;
        let Uz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.sources = zz, this.onFailure = tz, this.loading = new Map, this.glbImages = new Map, this.glbWrittenImages = new Map, this.glbTakenCount = new Map, this.answered = new Map, this.ready = [], this.load = void 0, this.release = void 0, this.fetchFile = void 0, this.greyscaleArmour = void 0, this.lw = !1, this.load = null !== (sz = Uz.load) && void 0 !== sz ? sz : (zz, tz) => (0, Xz.j)(zz, Uz.fetchImage, tz), this.release = null !== (Oz = Uz.release) && void 0 !== Oz ? Oz : Xz.m, this.fetchFile = null !== (oz = Uz.fetchFile) && void 0 !== oz ? oz : zz => (0, Fz.i)(zz), this.greyscaleArmour = null !== (vz = Uz.greyscaleArmour) && void 0 !== vz ? vz : Wz.b
      }
      get waiting() {
        return this.ready.length
      }
      get inFlight() {
        return this.loading.size
      }
      glbWritten(zz, tz) {
        this.glbWrittenImages.set(zz, mz(tz))
      }
      glbTaken(zz, tz) {
        const sz = this.glbWrittenImages.get(zz);
        this.glbWrittenImages.delete(zz), tz && this.setGlbImages(zz, void 0 !== sz && sz.length > 0 ? sz : void 0)
      }
      setGlbImages(zz, tz) {
        var sz;
        this.glbTakenCount.set(zz, (null !== (sz = this.glbTakenCount.get(zz)) && void 0 !== sz ? sz : 0) + 1), void 0 === tz ? this.glbImages.delete(zz) : this.glbImages.set(zz, tz);
        const Fz = [];
        for (const {
            key: Wz
          }
          of this.loading.values()) Wz.kind === Kz.Glb && Wz.word === zz && Fz.push(Wz);
        for (let Wz = this.ready.length - 1; Wz >= 0; Wz--) {
          const {
            key: tz,
            id: sz
          } = this.ready[Wz];
          tz.kind === Kz.Glb && tz.word === zz && (this.ready.splice(Wz, 1), null !== sz && (this.answered.delete(sz), this.release(sz)), Fz.push(tz))
        }
        this.loadAgain(Fz)
      }
      onEvent(zz) {
        if (this.lw) return;
        const tz = new DataView(zz.buffer, zz.byteOffset, zz.byteLength);
        for (let sz = 0; sz + 8 <= zz.byteLength; sz += 8) {
          const zz = tz.getUint8(sz),
            Fz = tz.getUint32(sz + 4, !0);
          if (zz === Uz) {
            this.answered.delete(Fz), this.release(Fz);
            continue
          }
          const Wz = {
            kind: tz.getUint8(sz + 1),
            index: tz.getUint8(sz + 2),
            word: Fz
          };
          zz === oz ? this.want(Wz) : zz === vz && this.loading.delete(Hz(Wz))
        }
      }
      reload(zz, tz) {
        const sz = sz => zz.includes(sz.kind) && (void 0 === tz || tz(sz)),
          Fz = new Map;
        for (const Wz of this.answered.values()) sz(Wz) && Fz.set(Hz(Wz), Wz);
        for (const [Wz, {
            key: Xz
          }] of this.loading) sz(Xz) && Fz.set(Wz, Xz);
        this.loadAgain(Fz.values())
      }
      loadAgain(zz) {
        for (const tz of zz) this.loading.delete(Hz(tz)), this.want(tz)
      }
      drain(zz) {
        if (null !== zz)
          for (; this.ready.length > 0;) {
            if (!zz(Oz, 0, this.ready[0].record)) return;
            this.ready.shift()
          }
      }
      dispose() {
        this.lw = !0, this.loading.clear(), this.ready.length = 0;
        for (const zz of this.answered.keys()) this.release(zz);
        this.answered.clear()
      }
      want(zz) {
        const tz = Hz(zz);
        if (this.loading.has(tz)) return;
        const sz = {
          key: zz
        };
        this.loading.set(tz, sz), this.loadKey(zz).then((Fz => {
          this.lw || this.loading.get(tz) !== sz ? this.release(Fz.id) : (this.loading.delete(tz), this.answered.set(Fz.id, zz), this.ready.push({
            record: Pz(zz, Nz, Fz),
            key: zz,
            id: Fz.id
          }))
        }), (Fz => {
          if (this.lw || this.loading.get(tz) !== sz) return;
          this.loading.delete(tz), this.onFailure({
            key: zz,
            error: Fz
          });
          const Wz = Fz instanceof Xz.d && "decode" === Fz.stage ? bz : wz;
          this.ready.push({
            record: Pz(zz, Wz, null),
            key: zz,
            id: null
          })
        }))
      }
      async loadKey(zz) {
        switch (zz.kind) {
          case Kz.Glb:
            return this.load(await this.glbImage(zz), "none");
          case Kz.LifeformAtlas:
            return this.load(Bz(await this.sources.lifeformAtlasUrl(zz.word), zz), "none");
          case Kz.ArmourAtlas:
            return this.load(Bz(await this.sources.armourAtlasUrl(), zz), "none");
          case Kz.Cape:
            return this.load(Bz(await this.sources.capeUrl(zz.word), zz), "none");
          case Kz.AttachmentImage:
            return this.load(Bz(await this.sources.attachmentImageUrl(zz.word), zz), "none");
          case Kz.GroupAtlas:
            return this.load(Bz(await this.sources.groupAtlasUrl(zz.word), zz), "none");
          case Kz.BlockImage:
            return this.load(Bz(await this.sources.blockImageUrl(zz.word), zz), "none");
          case Kz.Particle: {
            const tz = await (zz.index === uz.Item ? this.sources.particleItemUrl(zz.word) : this.sources.particleTextureUrl(zz.word));
            return this.load(Bz(tz, zz), "flipY")
          }
          case Kz.GreyscaleArmour:
            return this.greyscaleArmour.load(zz.index, zz.word);
          default:
            throw new Xz.d("fetch", `image kind ${zz.kind}`, {
              cause: null
            })
        }
      }
      async glbImage(zz) {
        var tz;
        let sz = this.glbImages.get(zz.word);
        if (void 0 === sz) {
          const tz = this.glbTakenCount.get(zz.word),
            Fz = Bz(await this.sources.glbUrl(zz.word), zz);
          try {
            sz = mz(await this.fetchFile(Fz))
          } catch (Wz) {
            throw new Xz.d("fetch", Fz, {
              cause: Wz
            })
          }
          this.glbTakenCount.get(zz.word) === tz && this.glbImages.set(zz.word, sz)
        }
        const Fz = null === (tz = sz) || void 0 === tz ? void 0 : tz[zz.index];
        if (!Fz) throw new Xz.d("decode", `image ${zz.index} of file ${2147483647&zz.word}`, {
          cause: null
        });
        return Fz
      }
    }

    function Hz(zz) {
      let {
        kind: tz,
        index: sz,
        word: Fz
      } = zz;
      return `${tz}:${sz}:${Fz}`
    }

    function Bz(zz, tz) {
      if (null === zz) throw new Xz.d("fetch", `no URL for image ${Hz(tz)}`, {
        cause: null
      });
      return zz
    }

    function Pz(zz, tz, sz) {
      var Fz, Wz, Xz;
      const Oz = new Uint8Array(16),
        oz = new DataView(Oz.buffer);
      return oz.setUint8(0, zz.kind), oz.setUint8(1, zz.index), oz.setUint8(2, tz), oz.setUint32(4, zz.word, !0), oz.setUint32(8, null !== (Fz = null === sz || void 0 === sz ? void 0 : sz.id) && void 0 !== Fz ? Fz : 0, !0), oz.setUint16(12, Math.min(null !== (Wz = null === sz || void 0 === sz ? void 0 : sz.width) && void 0 !== Wz ? Wz : 0, 65535), !0), oz.setUint16(14, Math.min(null !== (Xz = null === sz || void 0 === sz ? void 0 : sz.height) && void 0 !== Xz ? Xz : 0, 65535), !0), Oz
    }
    const rz = 1179937895,
      Yz = 1313821514,
      xz = 5130562;

    function mz(zz) {
      var tz;
      const sz = new DataView(zz.buffer, zz.byteOffset, zz.byteLength);
      if (zz.byteLength < 20 || sz.getUint32(0, !0) !== rz || sz.getUint32(16, !0) !== Yz) return [];
      let Fz, Wz = 20 + sz.getUint32(12, !0);
      try {
        Fz = JSON.parse((new TextDecoder).decode(zz.subarray(20, Wz)))
      } catch {
        return []
      }
      for (; Wz + 8 <= zz.byteLength && sz.getUint32(Wz + 4, !0) !== xz;) Wz += 8 + sz.getUint32(Wz, !0);
      const Xz = null !== (tz = Fz.images) && void 0 !== tz ? tz : [];
      if (0 === Xz.length || Wz + 8 > zz.byteLength) return Xz.map((() => null));
      const Oz = zz.subarray(Wz + 8, Math.min(zz.byteLength, Wz + 8 + sz.getUint32(Wz, !0)));
      return Xz.map((zz => {
        var tz, sz, Wz;
        const Xz = void 0 === zz.bufferView || null === (tz = Fz.bufferViews) || void 0 === tz ? void 0 : tz[zz.bufferView];
        if (!Xz || 0 !== (null !== (sz = Xz.buffer) && void 0 !== sz ? sz : 0) || void 0 === Xz.byteLength) return null;
        const oz = null !== (Wz = Xz.byteOffset) && void 0 !== Wz ? Wz : 0,
          vz = oz + Xz.byteLength;
        return vz <= Oz.byteLength ? Oz.slice(oz, vz) : null
      }))
    }
  },
  39797: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Oz,
      c: () => Xz,
      e: () => Wz
    });
    let Fz = null;

    function Wz(zz) {
      Fz = zz
    }

    function Xz(zz) {
      Fz === zz && (Fz = null)
    }

    function Oz() {
      var zz;
      null === (zz = Fz) || void 0 === zz || zz()
    }
  },
  36071: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Kz,
      e: () => Nz,
      h: () => Hz,
      j: () => Uz
    });
    var Fz = sz(30),
      Wz = sz(2273),
      Xz = sz(2277),
      Oz = sz(2280),
      oz = sz(2321),
      vz = sz(34);

    function Uz(zz, tz) {
      return (!(0, Oz.c)() || 0 === zz && 0 === tz) && (0, Xz.t)(Wz.j.Joystick, 0, zz, tz, 0)
    }
    const Kz = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function uz(zz) {
      return zz.classList.contains("TouchKeyHit") && bz() ? null : zz.firstElementChild
    }

    function Nz(zz) {
      return zz.classList.contains("TouchKeyHit") && !zz.classList.contains("CanvasZone") ? {
        whole: !bz(),
        keyBox: null
      } : {
        whole: !1,
        keyBox: wz(uz(zz))
      }
    }

    function bz() {
      return document.documentElement.classList.contains(oz.i)
    }

    function wz(zz) {
      return !(zz instanceof HTMLElement) || zz.offsetWidth <= 0 || zz.offsetHeight <= 0 ? null : {
        width: zz.offsetWidth,
        height: zz.offsetHeight
      }
    }

    function Dz(zz, tz) {
      const sz = zz => Math.min(65535, Math.round(4 * zz));
      return (sz(zz) | sz(tz) << 16) >>> 0
    }

    function gz(zz) {
      return {
        x: zz.left + zz.width / 2,
        y: zz.top + zz.height / 2,
        radius: Math.min(zz.width, zz.height) / 2
      }
    }
    const Hz = new class {
      constructor(zz) {
        this.write = zz, this.elements = new Map, this.canvasLeft = 0, this.canvasTop = 0
      }
      set(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        tz ? this.elements.set(zz, {
          element: tz,
          hidden: sz
        }) : this.elements.delete(zz), this.measureOne(zz)
      }
      measure() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          left: this.canvasLeft,
          top: this.canvasTop
        };
        this.canvasLeft = zz.left, this.canvasTop = zz.top;
        for (const tz of this.elements.keys()) this.measureOne(tz)
      }
      hitZone(zz, tz) {
        let sz = null,
          Fz = 1;
        for (const Wz of this.elements.keys()) {
          const Xz = this.shown(Wz);
          if (!Xz) continue;
          const {
            rect: Oz,
            element: oz
          } = Xz, vz = gz(Oz), Uz = Math.max(0, Oz.width / 2 - vz.radius), Kz = Math.max(0, Oz.height / 2 - vz.radius), Nz = Math.max(0, Math.abs(zz - vz.x) - Uz), bz = Math.max(0, Math.abs(tz - vz.y) - Kz), Dz = oz.firstElementChild;
          let Hz = Math.hypot(Nz, bz) / vz.radius;
          const Bz = wz(uz(oz));
          Bz && (Hz = Math.min(Hz, Math.max(2 * Math.abs(zz - vz.x) / Bz.width, 2 * Math.abs(tz - vz.y) / Bz.height))), Hz < Fz && (sz = {
            code: Wz,
            element: oz,
            key: Dz,
            ...vz
          }, Fz = Hz)
        }
        return sz
      }
      measureOne(zz) {
        const tz = this.shown(zz);
        if (!tz) return void this.write(Wz.j.TouchZone, zz, 0, 0, 0);
        const {
          rect: sz,
          element: Fz
        } = tz, Xz = gz(sz);
        this.write(Wz.j.TouchZone, zz, Xz.x - this.canvasLeft, Xz.y - this.canvasTop, Dz(sz.width, sz.height));
        const Oz = wz(uz(Fz));
        this.write(Wz.j.TouchZone, 256 | zz, 0, 0, Oz ? Dz(Oz.width, Oz.height) : 0)
      }
      shown(zz) {
        const tz = this.elements.get(zz),
          sz = Fz.b.get("worldPanelHud");
        if (!tz || tz.hidden || "none" === sz) return null;
        const Wz = tz.element.getBoundingClientRect();
        return Wz.width <= 0 || Wz.height <= 0 ? null : {
          rect: Wz,
          element: tz.element
        }
      }
    }(Xz.t);
    (0, vz.q)(oz.f, (() => {
      Hz.measure()
    }))
  },
  39979: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => vz,
      f: () => Uz
    });
    var Fz = sz(39985),
      Wz = sz(38473),
      Xz = sz(35962),
      Oz = sz(39912),
      oz = sz(39959);
    const vz = Fz.d.timeForPlayerToConnect - 1e4;
    async function Uz(zz, tz, sz, Fz) {
      let vz;
      try {
        vz = await zz.getTrafficCode()
      } catch (wz) {
        throw console.error("[bloxd-wasm-client] could not get a traffic code", wz), new oz.x(wz)
      }
      const {
        gameNameWithVariation: Uz,
        lobbyName: Kz
      } = tz, uz = () => {
        const tz = (0, Xz.d)(zz, Uz, Kz, vz, (zz => {
          var tz;
          return null !== (tz = null === sz || void 0 === sz ? void 0 : sz.isUsingCustomGameTexturePack(zz)) && void 0 !== tz && tz
        }));
        tz.joinOptions.wasmClient = !0;
        const Wz = (0, Oz.B)();
        return null !== Wz && (tz.joinOptions.renderBackend = Wz), tz.joinOptions.joinAdHold = Fz, tz
      }, {
        roomName: Nz,
        joinOptions: bz
      } = uz();
      return {
        endpoint: tz.endpoint,
        roomName: Nz,
        joinOptions: bz,
        session: {
          gameNameWithVariation: Uz,
          lobbyName: Kz,
          playerDbId: zz.whamm
        },
        optionsAfterRefusal: async tz => await (0, Wz.b)(zz, tz) ? uz().joinOptions : null
      }
    }
  },
  4656: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => oz,
      e: () => Oz
    });
    var Fz = sz(2883),
      Wz = sz(4665);
    let Xz = null;

    function Oz(zz, tz) {
      Xz = {
        pack: zz.metaData.id === Fz.e ? null : zz,
        prompt: tz
      }
    }

    function oz(zz, tz) {
      const sz = Xz;
      null !== sz && (0, Wz.d)(sz.pack, zz) && (Xz = null, tz && sz.prompt())
    }
  },
  40116: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Kz,
      g: () => Xz,
      i: () => uz,
      k: () => Oz
    });
    var Fz = sz(40094),
      Wz = sz(40052);
    const Xz = new class {
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
        const tz = void 0 !== this.session && void 0 === zz;
        if (this.change((() => {
            this.session = zz
          })), tz)
          for (const sz of [...this.pageListeners]) sz()
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
        const tz = this.current;
        if (zz(), this.current !== tz)
          for (const sz of this.listeners) sz()
      }
    };

    function Oz(zz, tz) {
      return {
        ...zz,
        armourAtlasUrl: () => {
          var sz, Fz;
          return null !== (sz = null === (Fz = tz()) || void 0 === Fz ? void 0 : Fz.armourAtlasUrl()) && void 0 !== sz ? sz : zz.armourAtlasUrl()
        },
        lifeformAtlasUrl: sz => vz(tz(), (zz => zz.LIFEFORM_ATLAS_PATHS[sz]), (() => zz.lifeformAtlasUrl(sz))),
        groupAtlasUrl: sz => vz(tz(), (zz => zz.GROUP_ATLAS_PATHS[sz]), (() => zz.groupAtlasUrl(sz))),
        particleItemUrl: Fz => Uz(tz(), (async () => {
          const zz = await sz.e(38).then((() => sz(50829))).catch((() => null));
          return (null === zz || void 0 === zz ? void 0 : zz.particleItemSprite(Fz)) || null
        }), (() => zz.particleItemUrl(Fz))),
        blockImageUrl: sz => Uz(tz(), (async () => {
          var zz, tz;
          return null !== (zz = null === (tz = await oz()) || void 0 === tz ? void 0 : tz.blockImageName(sz)) && void 0 !== zz ? zz : null
        }), (() => zz.blockImageUrl(sz)))
      }
    }

    function oz() {
      return (0, Wz.n)().catch((() => null))
    }

    function vz(zz, tz, sz) {
      return Uz(zz, (async () => {
        var zz;
        const sz = await oz(),
          Fz = null === sz ? null : tz(sz),
          Wz = null !== (zz = null === Fz || void 0 === Fz ? void 0 : Fz.slice(Fz.lastIndexOf("/") + 1)) && void 0 !== zz ? zz : null;
        return "Player_Atlas" === Wz ? null : Wz
      }), sz)
    }
    async function Uz(zz, tz, sz) {
      if (null !== zz) {
        const sz = await tz(),
          Fz = null === sz ? null : zz.textureUrl(sz);
        if (null !== Fz) return Fz
      }
      return sz()
    }
    const Kz = 0;

    function uz(zz) {
      const tz = [Fz.g.ArmourAtlas, Fz.g.LifeformAtlas, Fz.g.GroupAtlas, Fz.g.BlockImage, Fz.g.Particle];
      zz.reload(tz, (zz => {
        switch (zz.kind) {
          case Fz.g.Particle:
            return zz.index === Fz.i.Item;
          case Fz.g.LifeformAtlas:
            return zz.word !== Kz;
          default:
            return !0
        }
      }))
    }
  },
  39994: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Fz,
      g: () => oz,
      h: () => Oz,
      i: () => Wz,
      m: () => Xz
    });
    const Fz = 1e3;

    function Wz() {
      vz((() => {
        window.location.reload()
      }))
    }

    function Xz() {
      return new Promise((() => {}))
    }

    function Oz(zz) {
      vz((() => {
        window.location.replace(zz(window.location.href))
      }))
    }

    function oz(zz) {
      Promise.resolve().then((() => sz(116))).then((tz => {
        let {
          currentUrl: sz
        } = tz;
        Oz((() => sz.mergeSearchParamsInto(zz)))
      }), (() => {
        Oz((() => zz))
      }))
    }

    function vz(zz) {
      null !== window.onbeforeunload ? Promise.resolve().then((() => sz(1664))).then((tz => {
        let {
          prepareForUnloadWithoutConfirmation: sz
        } = tz;
        try {
          sz()
        } catch (Fz) {
          console.warn("[bloxd-wasm-client] prepareForUnloadWithoutConfirmation threw: leaving plainly", Fz), window.onbeforeunload = null
        }
        zz()
      }), (() => {
        window.onbeforeunload = null, zz()
      })) : zz()
    }
  },
  4665: (zz, tz, sz) => {
    function Fz(zz, tz) {
      return Wz(zz, tz)
    }

    function Wz(zz, tz) {
      if (zz === tz) return !0;
      if ("object" !== typeof zz || "object" !== typeof tz || null === zz || null === tz || Array.isArray(zz) !== Array.isArray(tz)) return !1;
      const sz = zz,
        Fz = tz,
        Xz = Object.keys(sz);
      return Xz.length === Object.keys(Fz).length && Xz.every((zz => Object.prototype.hasOwnProperty.call(Fz, zz) && Wz(sz[zz], Fz[zz])))
    }
    sz.d(tz, {
      d: () => Fz
    })
  },
  40029: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => mz,
      g: () => Yz,
      j: () => gz,
      n: () => Dz
    });
    var Fz = sz(1746),
      Wz = sz(1750),
      Xz = sz(38469),
      Oz = sz(38480),
      oz = sz(1715),
      vz = sz(39955),
      Uz = sz(39959);
    const Kz = {
        "X-Requested-With": "XMLHtttpRequest"
      },
      uz = 3,
      Nz = [500, 1500];

    function bz(zz) {
      const tz = new URL(zz);
      return {
        secure: "https:" === tz.protocol || "wss:" === tz.protocol,
        host: tz.host,
        pathname: tz.pathname.replace(/\/+$/, ""),
        search: tz.searchParams.toString()
      }
    }

    function wz(zz, tz, sz) {
      const {
        secure: Fz,
        host: Wz,
        pathname: Xz,
        search: Oz
      } = bz(zz);
      return `${Fz?"https":"http"}://${Wz}${Xz}/matchmake/${tz}/${encodeURIComponent(sz)}${Oz?`?${Oz}`:""}`
    }

    function Dz(zz, tz) {
      var sz;
      const Fz = null !== (sz = tz.protocol) && void 0 !== sz ? sz : "ws";
      if ("ws" !== Fz) throw new Error(`seat reservation asks for the ${Fz} transport`);
      const {
        secure: Wz,
        host: Xz,
        pathname: Oz,
        search: oz
      } = bz(zz), vz = new URLSearchParams(oz);
      vz.append("sessionId", tz.sessionId), tz.reconnectionToken && vz.append("reconnectionToken", tz.reconnectionToken);
      return `${Wz?"wss":"ws"}://${tz.room.publicAddress||`${Xz}${Oz}`}/${tz.room.processId}/${tz.room.roomId}?${vz.toString()}`
    }
    async function gz(zz, tz, sz) {
      var vz;
      let Kz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const bz = null !== (vz = Kz.sleep) && void 0 !== vz ? vz : Fz.c,
        Dz = new Wz.d(Kz.signal),
        gz = new oz.b(Oz.c, (() => {
          (0, Wz.j)(Dz.controller, new Oz.e)
        })),
        {
          signal: rz
        } = Dz;
      try {
        return await (0, Xz.f)((() => async function(zz, tz, sz, Fz) {
          var Xz;
          const {
            signal: Oz,
            sleep: oz
          } = Fz, vz = wz(zz, "joinOrCreate", tz), Kz = JSON.stringify(sz);
          let bz = null;
          for (let wz = 0; wz < uz; wz++) {
            var Dz;
            if (wz > 0) await oz(null !== (Dz = Nz[wz - 1]) && void 0 !== Dz ? Dz : 1500, Oz);
            let zz;
            (0, Wz.n)(Oz);
            try {
              zz = await Bz(vz, Kz, Fz)
            } catch (gz) {
              (0, Wz.n)(Oz), bz = Hz(gz);
              continue
            }
            const {
              response: tz,
              answer: sz,
              refusal: Xz,
              lost: uz
            } = zz;
            if (null === uz) {
              if (null !== Xz) throw Pz(Xz, sz);
              if (tz.ok && null !== sz && Jz(sz)) return sz;
              bz = new Uz.u(`seat request answered HTTP ${tz.status}${null===sz?" without JSON":" without a seat"}`, !1)
            } else bz = Hz(uz.error)
          }
          throw null !== (Xz = bz) && void 0 !== Xz ? Xz : new Uz.u("seat request made no attempt", !1)
        }(zz, tz, sz, {
          ...Kz,
          signal: rz,
          sleep: bz
        })), rz, bz)
      } finally {
        gz.stop(), Dz.unfollow()
      }
    }

    function Hz(zz) {
      return new Uz.u(zz instanceof Error ? zz.message : String(zz), !0, zz)
    }
    async function Bz(zz, tz, sz) {
      var Fz;
      const {
        signal: Xz
      } = sz, Oz = null !== (Fz = sz.fetch) && void 0 !== Fz ? Fz : fetch, oz = await Oz(zz, {
        method: "POST",
        headers: {
          ...Kz,
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: tz,
        credentials: "include",
        signal: Xz
      }), {
        answer: vz,
        lost: Uz
      } = await async function(zz) {
        try {
          const tz = await zz.json();
          return {
            answer: "object" === typeof tz && null !== tz ? tz : null,
            lost: null
          }
        } catch (tz) {
          return {
            answer: null,
            lost: tz instanceof SyntaxError ? null : {
              error: tz
            }
          }
        }
      }(oz), uz = null !== vz && "string" === typeof vz.error ? vz.error : null;
      var Nz;
      null !== uz && (null === (Nz = sz.onRefusal) || void 0 === Nz || Nz.call(sz));
      return (0, Wz.n)(Xz), {
        response: oz,
        answer: vz,
        refusal: uz,
        lost: Uz
      }
    }

    function Pz(zz, tz) {
      return new Uz.m(zz, "number" === typeof(null === tz || void 0 === tz ? void 0 : tz.code) ? tz.code : 0, (0, vz.q)(zz).text)
    }
    class rz extends Error {
      constructor(zz, tz) {
        super(zz), this.code = tz, this.name = "SeatHttpError"
      }
    }
    async function Yz(zz, tz, sz) {
      let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        response: Wz,
        answer: Xz,
        refusal: Oz,
        lost: oz
      } = await Bz(wz(zz, "reconnect", tz), JSON.stringify({
        reconnectionToken: sz
      }), Fz);
      if (null !== oz) throw oz.error;
      if (!Wz.ok) {
        const zz = null !== Xz && "number" === typeof Xz.code && 0 !== Xz.code ? Xz.code : Wz.status;
        throw new rz(`the seat's reconnect was refused: ${null!==Oz&&void 0!==Oz?Oz:`HTTP ${Wz.status}`}`, zz)
      }
      if (null !== Oz) throw Pz(Oz, Xz);
      if (null === Xz || !Jz(Xz)) throw new Error("the seat's reconnect answered " + (null === Xz ? "without JSON" : "without a seat"));
      return {
        ...Xz,
        reconnectionToken: sz
      }
    }
    const xz = 10;

    function mz(zz) {
      if (zz.byteLength < 2 || zz[0] !== xz) return null;
      const tz = 2 + zz[1];
      return tz > zz.byteLength ? null : (new TextDecoder).decode(zz.subarray(2, tz))
    }

    function Jz(zz) {
      const tz = zz.room;
      return "string" === typeof zz.sessionId && "object" === typeof tz && null !== tz && "string" === typeof tz.roomId && "string" === typeof tz.processId && "string" === typeof tz.name
    }
  },
  39727: (zz, tz, sz) => {
    sz.d(tz, {
      B: () => mz,
      F: () => Gz,
      J: () => rz,
      K: () => Yz,
      L: () => gz,
      N: () => Cz,
      R: () => cz,
      U: () => wz,
      V: () => Az,
      Z: () => Bz,
      bb: () => Hz,
      d: () => Wz,
      e: () => jz,
      fb: () => Pz,
      g: () => Tz,
      gb: () => xz,
      j: () => bz,
      n: () => Dz,
      r: () => Zz,
      u: () => Jz,
      x: () => ez,
      y: () => Iz
    });
    var Fz = sz(2724);
    const Wz = {
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

    function Xz(zz, tz) {
      return !ArrayBuffer.isView(zz) || zz instanceof DataView ? Array.isArray(zz) ? zz.map((zz => tz(zz))) : zz : Array.from(zz, (zz => tz(zz)))
    }

    function Oz(zz) {
      if ("string" !== typeof zz) return zz;
      for (let tz = 0; tz < zz.length; tz++) {
        const sz = zz.charCodeAt(tz);
        if (sz >= 55296 && sz <= 57343) return vz.decode(oz.encode(zz))
      }
      return zz
    }
    const oz = new TextEncoder,
      vz = new TextDecoder;

    function Uz(zz) {
      return zz
    }
    let Kz;

    function uz(zz) {
      return null === zz || "object" !== typeof zz ? zz : [Oz(zz.PO), Oz(zz.rO)]
    }

    function Nz(zz) {
      return null === zz || "object" !== typeof zz ? zz : [Xz(zz.oO, Uz), Xz(zz.SU, Uz)]
    }

    function bz(zz) {
      return null === (tz = zz) || "object" !== typeof tz ? tz : [Oz(tz.RO), Oz(tz.pO)];
      var tz
    }

    function wz(zz) {
      return null === (tz = zz) || "object" !== typeof tz ? tz : [tz.id, tz.ZO];
      var tz
    }

    function Dz(zz) {
      return null === (tz = zz) || "object" !== typeof tz ? tz : [tz.Yt, Oz(tz.xt), tz.Jt, Oz(tz.Zt), tz.jt, tz.yt, tz.qO, Oz(tz.SO), Oz(tz.VO)];
      var tz
    }

    function gz(zz) {
      return null === (tz = zz) || "object" !== typeof tz ? tz : [Xz(tz.AK, Uz), tz.yK];
      var tz
    }

    function Hz(zz) {
      return null === (tz = zz) || "object" !== typeof tz ? tz : [Xz(tz.ao, (zz => Oz(zz))), Oz(tz.qo), tz.Vo];
      var tz
    }

    function Bz(zz) {
      return null === (tz = zz) || "object" !== typeof tz ? tz : [Xz(tz.GO, Uz), Oz(tz.cO), tz.jO];
      var tz
    }

    function Pz(zz) {
      return null === (tz = zz) || "object" !== typeof tz ? tz : [Oz(tz.wF), Oz(tz.DF)];
      var tz
    }

    function rz(zz) {
      return null === (tz = zz) || "object" !== typeof tz ? tz : [Oz(tz.yo)];
      var tz
    }

    function Yz(zz) {
      return Oz(zz)
    }

    function xz(zz) {
      return null === (tz = zz) || "object" !== typeof tz ? tz : [Oz(tz.Uu), Oz(tz.Ku), Oz(tz.PO), Oz(tz.rO)];
      var tz
    }

    function mz(zz) {
      return uz(zz)
    }

    function Jz(zz) {
      return uz(zz)
    }

    function Iz(zz) {
      return null === (tz = zz) || "object" !== typeof tz ? tz : [Oz(tz.fO)];
      var tz
    }

    function Cz(zz) {
      return zz
    }

    function ez(zz) {
      return null === (tz = zz) || "object" !== typeof tz ? tz : [Oz(tz.mO), Oz(tz.JO)];
      var tz
    }

    function Zz(zz) {
      return Oz(zz)
    }

    function Gz(zz) {
      return Nz(zz)
    }

    function Tz(zz) {
      return Nz(zz)
    }

    function cz(zz) {
      return null === (tz = zz) || "object" !== typeof tz ? tz : [Oz(tz.ko)];
      var tz
    }

    function jz(zz) {
      return (Kz ??= (0, Fz.c)().map((zz => zz.name)), Kz).map((tz => {
        return "string" === typeof(sz = zz[tz]) ? Oz(sz) : Xz(sz, Uz);
        var sz
      }))
    }

    function Az(zz) {
      return null === (tz = zz) || "object" !== typeof tz ? tz : [tz.Eo, tz.zv, tz.tv];
      var tz
    }
  },
  40119: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Xz
    });
    var Fz = sz(40127),
      Wz = sz(40116);
    const Xz = new class {
      constructor(zz) {
        this.pack = zz, this.game = void 0, this.settle = null, this.hold = null, this.endedWhileHeld = !1, this.gameListeners = new Set, zz.onWanted((() => {
          this.release()
        }))
      }
      setGame(zz) {
        if (void 0 === zz && null !== this.hold) return void(this.endedWhileHeld = !0);
        this.hold = null, this.endedWhileHeld = !1;
        const tz = this.inGame();
        if (this.game = zz, this.update(), this.inGame() !== tz)
          for (const sz of this.gameListeners) sz()
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
        void 0 === this.game ? this.pack.setSessionFiles(void 0) : null !== this.settle && (0, Fz.c)(this.settle.state, this.game) && this.pack.setSessionFiles(this.settle.files)
      }
    }(Wz.g)
  },
  39950: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      followPageUiPack: () => cU,
      packForGame: () => TU,
      playWasmGame: () => nU,
      prefetchWasmPreviews: () => no,
      setGamePackConfirm: () => fv,
      startWasmPlay: () => dU,
      startWasmPreviews: () => Lo
    });
    var Fz = sz(201),
      Wz = sz(1230),
      Xz = sz(161),
      Oz = sz(38492),
      oz = sz(1857),
      vz = sz(34),
      Uz = sz(4328),
      Kz = sz(1287),
      uz = sz(1658),
      Nz = sz(1293),
      bz = sz(38624),
      wz = sz(38637),
      Dz = sz(38564),
      gz = sz(35970),
      Hz = sz(38469),
      Bz = sz(8398),
      Pz = sz(38480),
      rz = sz(39808),
      Yz = sz(4419),
      xz = sz(39720),
      mz = sz(39794),
      Jz = sz(39727);
    const Iz = {
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

    function Cz(zz) {
      const tz = {
        ...mz.b[zz]
      };
      for (const sz of Object.keys(Iz[zz])) delete tz[sz];
      return tz
    }

    function ez() {
      var zz, tz;
      return null === (zz = null === (tz = (0, xz.f)()) || void 0 === tz ? void 0 : tz.localPlayerAlive()) || void 0 === zz || zz
    }

    function Zz() {
      var zz, tz;
      return null !== (zz = null === (tz = (0, xz.f)()) || void 0 === tz ? void 0 : tz.localDeaths()) && void 0 !== zz ? zz : null
    }
    const Gz = {
        current: ez,
        watch: zz => {
          let tz = ez(),
            sz = Zz();
          return (0, Yz.y)((() => {
            const Fz = ez(),
              Wz = Zz(),
              Xz = null !== Wz && null !== sz && Wz !== sz;
            sz = Wz, Xz ? (tz || zz(!0), zz(!1), Fz && zz(!0), tz = Fz) : Fz !== tz && (tz = Fz, zz(Fz))
          }))
        }
      },
      Tz = {
        states: {
          ...Cz("states"),
          localPlayerAlive: Gz
        },
        events: {
          ...Cz("events"),
          localPlayerAliveSet: {
            watch: Gz.watch
          }
        },
        commands: {
          ...Cz("commands"),
          respawn: () => {
            var zz;
            null === (zz = (0, xz.f)()) || void 0 === zz || zz.respawn()
          },
          playEmote: zz => {
            var tz;
            null === (tz = (0, xz.f)()) || void 0 === tz || tz.send(Jz.d.PlayEmote, (0, Jz.J)({
              yo: zz
            }))
          },
          applyTemporaryThirdPerson: zz => {
            var tz;
            let {
              durationMs: sz
            } = zz;
            null === (tz = (0, xz.f)()) || void 0 === tz || tz.thirdPersonFor(sz)
          },
          bindCustomButtonKeys: zz => {
            var tz;
            null === (tz = (0, xz.f)()) || void 0 === tz || tz.bindCustomButtonKeys(zz)
          },
          pressCustomButton: zz => {
            var tz;
            let {
              id: sz,
              down: Fz
            } = zz;
            null === (tz = (0, xz.f)()) || void 0 === tz || tz.pressCustomButton(sz, Fz)
          },
          setLookSensitivity: () => {},
          wakeUp: zz => {
            const tz = (0, Jz.R)({
                ko: zz
              }),
              sz = () => {
                const zz = (0, xz.f)();
                return !(null !== zz && void 0 !== zz && zz.isSessionLive) || zz.send(Jz.d.StopSleeping, tz)
              };
            if (!sz()) {
              const zz = (0, Yz.y)((() => {
                sz() && zz()
              }))
            }
          },
          setCameraZoom: zz => {
            var tz;
            null === (tz = (0, xz.f)()) || void 0 === tz || tz.setCameraZoom(zz)
          }
        },
        queries: Cz("queries"),
        lookups: {
          ...Cz("lookups"),
          cameraZoom: () => {
            var zz, tz;
            return null !== (zz = null === (tz = (0, xz.f)()) || void 0 === tz ? void 0 : tz.cameraZoom()) && void 0 !== zz ? zz : 0
          }
        }
      };
    var cz = sz(39955),
      jz = sz(39959),
      Az = sz(39967),
      yz = sz(39979),
      Mz = sz(1242),
      dz = sz(116),
      hz = sz(4165),
      Qz = sz(3402),
      kz = sz(1151);
    const iz = {
      jK: () => (0, Mz.c)(),
      inbuiltOverwritten: () => hz.e,
      reflectApplyHit: () => kz.b,
      definerHit: () => dz.currentUrl.c,
      emitReplaced: () => (0, vz.e)(),
      confirmMesh: () => (0, Qz.d)()
    };
    var Lz = sz(39969),
      lz = sz(39994);
    var nz = sz(30),
      az = sz(1862),
      qz = sz(1910),
      Sz = sz(1577),
      Vz = sz(1960),
      Rz = sz(1173),
      pz = sz(1237),
      fz = sz(39938);

    function Ez() {
      return pz.g.get().getCurrentLanguageCode()
    }

    function zt(zz) {
      const tz = () => {
        zz({
          translate: (zz, tz) => (0, Rz.u)(Ez(), zz, tz),
          keyBindingText: zz => {
            const tz = (0, qz.v)(zz, nz.b.get("isTouchScreen"));
            return null !== tz ? (0, Rz.v)(Ez(), tz.translationKey, tz.params) : (0, qz.r)((0, qz.t)(zz))
          },
          isFriend: Vz.f,
          hiddenNames: az.d.shown,
          loadsFontRest: (0, fz.c)(Ez())
        })
      };
      let sz = !1;
      const Fz = () => {
          const zz = Ez();
          (0, Rz.l)(zz).then((() => {
            sz || zz !== Ez() || tz()
          }))
        },
        Wz = () => Sz.d.getSocialState().friends.map((zz => zz.name.toLowerCase())).sort().join(" ");
      let Xz = Wz();
      tz(), Fz();
      const Oz = [(0, pz.h)((() => {
        tz(), Fz()
      })), (0, vz.q)("customBindingsChanged", tz), (0, vz.q)("appManagerUpdated|isTouchScreen", tz), (0, Vz.d)((() => {
        const zz = Wz();
        zz !== Xz && (Xz = zz, tz())
      })), az.d.subscribe(tz)];
      return () => {
        sz = !0;
        for (const zz of Oz) zz()
      }
    }
    var tt = sz(585),
      st = sz(991),
      Ft = sz(1888),
      Wt = sz(308),
      Xt = sz(3376),
      Ot = sz(35828),
      ot = sz(3378),
      vt = sz(38147),
      Ut = sz(4344),
      Kt = sz(39875),
      ut = sz(601),
      Nt = sz(664),
      bt = sz(666),
      wt = sz(1884),
      Dt = sz(3408),
      gt = sz(2962);
    let Ht = null;
    var Bt = sz(1191),
      Pt = sz(1750),
      rt = sz(4069),
      Yt = sz(3127),
      xt = sz(62),
      mt = sz(302),
      Jt = sz(290),
      It = sz(39822),
      Ct = sz(4427);
    var et = sz(39998);
    class Zt {
      constructor(zz, tz) {
        this.showView = zz, this.holdForAd = tz
      }
      pointerUnlockRequestsChanged() {
        (0, It.F)()
      }
      pointerLockDebugEntries() {
        return [{
          label: "Locked to the canvas",
          value: String((0, It.t)())
        }]
      }
      setGameViewShown(zz) {
        this.showView(zz)
      }
      setGameView(zz) {
        (0, et.g)(zz)
      }
      videoAdHold(zz, tz) {
        this.holdForAd(zz, tz)
      }
    }
    class Gt {
      leave(zz) {
        ! function(zz) {
          if (null !== (0, Nz.d)().websocketUrl) try {
            (0, Yz.L)().leaveGame(zz)
          } finally {
            (0, Nz.q)({
              websocketUrl: null
            })
          }
        }(zz)
      }
      isReplay() {
        return !1
      }
    }
    class Tt {
      watchFrameStarts(zz) {
        return (0, Yz.t)(zz)
      }
      watchFrames(zz) {
        return (0, Yz.q)(zz)
      }
      watchTicks(zz) {
        return (0, Yz.y)(zz)
      }
    }
    var ct = sz(1279),
      jt = sz(40005);

    function At(zz) {
      return zz >= 0 ? Math.min(1, zz) : 0
    }

    function yt(zz, tz) {
      const {
        fade: sz
      } = zz;
      return null === sz || tz - sz.at >= sz.ms ? zz.volume : sz.from + (zz.volume - sz.from) * Math.max(0, (tz - sz.at) / sz.ms)
    }

    function Mt(zz) {
      const tz = Object.entries(zz),
        sz = new Uint32Array(tz.length);
      let Fz = 0;
      for (const [Oz, [, oz]] of tz.entries()) sz[Oz] = oz.length, Fz += oz.length;
      const Wz = new Float64Array(3 * Fz);
      let Xz = 0;
      for (const [, Oz] of tz)
        for (const zz of Oz) Wz.set(zz, Xz), Xz += 3;
      return {
        blocks: tz.map((zz => {
          let [tz] = zz;
          return tz
        })).join("\0"),
        counts: sz,
        values: Wz
      }
    }
    class dt {
      constructor(zz, tz) {
        this.core = zz, this.warn = tz, this.latest = 0
      }
      async feed() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ht;
        const tz = ++this.latest;
        let sz;
        try {
          sz = await zz()
        } catch (Fz) {
          return void(this.core.isStopped || tz !== this.latest || this.warn("the block colours didn't load, so block particles draw grey", Fz))
        }
        tz === this.latest && (this.core.setBlockColours(sz) || this.core.isStopped || this.warn("the core refused the block colours: block particles draw grey"))
      }
    }
    async function ht() {
      return Mt((await sz.e(201).then((() => sz(33845)))).averageColors)
    }
    var Qt = sz(4432),
      kt = sz(4436),
      it = sz(39773),
      Lt = sz(35796),
      lt = sz(39918),
      nt = sz(577),
      qt = sz(36449),
      St = sz(574),
      Vt = sz(321),
      Rt = sz(39901);
    const pt = [3e4, 12e4, 3e5];
    class ft extends Error {}
    const Et = {
      mobTypes: nt.l,
      vehicleTypes: qt.e,
      mobAiStates: nt.i,
      playerPoses: St.r
    };
    var zs = sz(39887),
      ts = sz(40013),
      ss = sz(40021),
      Fs = sz(40026),
      Ws = sz(3145),
      Xs = sz(38455),
      Os = sz(4450),
      os = sz(2273);
    const vs = os.x.KeysDisabled | os.x.LookFrozen | os.x.ClicksSuppressed,
      Us = Ws.f;
    var Ks = (0, Fs.c)("resumingConn");
    class us {
      constructor(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.shell = zz, this.now = tz, this.session = void 0, this.attempt = null, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, Object.defineProperty(this, Ks, {
          writable: !0,
          value: 0
        }), this.drops = 0, this.session = new Xs.d({
          reconnect: zz => this.reconnect(zz),
          isLive: () => zz.isLive(),
          onReconnected: tz => {
            this.landed = tz, zz.onReconnected(tz), this.landIfResumed()
          },
          onGaveUp: (tz, sz) => {
            this.abortAttempt(), zz.onGaveUp(tz, sz)
          },
          freeze: tz => {
            zz.Zm(tz), (0, Os.k)(vs, tz ? vs : 0, "reconnectFreeze")
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
        return (0, ss.c)(this, Ks)[Ks]
      }
      canHoldSeat() {
        return this.session.canHoldSeat()
      }
      onInitialInfo(zz) {
        let {
          conn: tz,
          graceMs: sz,
          sessionBased: Fz,
          replayOffer: Wz
        } = zz;
        this.session.onInitialInfo(sz, Fz), this.isResuming() && (this.initialInfoConn = tz, this.initialInfoOffer = Wz, this.landIfResumed())
      }
      onResumeComplete(zz) {
        0 !== zz && (zz === (0, ss.c)(this, Ks)[Ks] ? ((0, ss.c)(this, Ks)[Ks] = 0, this.session.onResumed()) : this.isResuming() && (this.completedEarlyConn = zz))
      }
      onDropped(zz) {
        this.drops++, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, (0, ss.c)(this, Ks)[Ks] = 0, this.session.onConnectionLost(zz)
      }
      leave() {
        this.session.leave(), this.dispose()
      }
      dispose() {
        this.abortAttempt(), this.landed = null, this.completedEarlyConn = 0, (0, ss.c)(this, Ks)[Ks] = 0, this.session.end()
      }
      reconnect(zz) {
        const tz = this.attempt;
        if (null !== tz && this.awaitingJoinRoom(tz)) return tz.result;
        this.abortAttempt();
        const sz = new AbortController,
          Fz = this.drops,
          Wz = {
            attachedAt: null
          },
          Xz = this.shell.reconnect(zz, sz.signal, (() => {
            Wz.attachedAt = this.now()
          })).then((zz => {
            if (this.clearAttempt(Oz), this.drops !== Fz) throw new Error("the resumed room dropped before its attempt settled");
            return zz
          }), (zz => {
            throw this.clearAttempt(Oz), zz
          })),
          Oz = {
            abort: sz,
            socket: Wz,
            result: Xz
          };
        return this.attempt = Oz, Xz
      }
      clearAttempt(zz) {
        this.attempt === zz && (this.attempt = null)
      }
      abortAttempt() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new DOMException("the reconnect attempt was given up", "AbortError");
        const tz = this.attempt;
        this.attempt = null, null === tz || void 0 === tz || tz.abort.abort(zz)
      }
      awaitingJoinRoom(zz) {
        const tz = zz.socket.attachedAt;
        return null !== tz && this.now() - tz < Us
      }
      releaseSeat(zz) {
        const tz = this.attempt,
          sz = null !== tz && this.awaitingJoinRoom(tz);
        this.abortAttempt(new jz.t), sz || this.shell.releaseSeat(zz)
      }
      landIfResumed() {
        const zz = this.landed;
        if (null !== zz && zz.conn === this.initialInfoConn) {
          const tz = this.initialInfoOffer && this.completedEarlyConn !== zz.conn;
          if (this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, this.abortAttempt(), !tz) return void this.session.onResumed();
          (0, ss.c)(this, Ks)[Ks] = zz.conn, this.session.onResuming()
        }
      }
    }
    var Ns = sz(38462),
      bs = sz(40029),
      ws = sz(35974),
      Ds = sz(35972),
      gs = sz(4656),
      Hs = sz(4057),
      Bs = sz(2955),
      Ps = sz(39847),
      rs = sz(607),
      Ys = sz(4142),
      xs = sz(44),
      ms = sz(40033),
      Is = sz(40057),
      Cs = sz(4086),
      es = sz(2277),
      Zs = sz(1571),
      Gs = sz(1608),
      Ts = sz(1269),
      cs = sz(119),
      As = sz(2603),
      ys = sz(2280),
      Ms = sz(4446);
    const ds = new Set([Qt.qb.KeyDown, Qt.qb.MouseMove, Qt.qb.MouseDown, Qt.qb.Wheel, Qt.qb.TouchStart, Qt.qb.TouchMove]);

    function hs(zz) {
      return (zz.shiftKey ? Qt.xb.Shift : 0) | (zz.ctrlKey ? Qt.xb.Ctrl : 0) | (zz.altKey ? Qt.xb.Alt : 0) | (zz.metaKey ? Qt.xb.Meta : 0) | ("repeat" in zz && zz.repeat ? Qt.xb.Repeat : 0) | (zz.isTrusted ? 0 : Qt.xb.Untrusted)
    }

    function Qs(zz) {
      return "touchOnly" !== (0, cs.c)() && "function" === typeof zz.requestPointerLock
    }

    function ks(zz) {
      return 0 === zz.button ? zz.altKey ? Ms.n["Alt+Left Click"] : Ms.n.Mouse1 : 1 === zz.button ? Ms.n.Mouse2 : Ms.n.Mouse3
    }
    const is = new Set(["AltLeft", "AltRight", "ArrowUp", "ArrowDown"]),
      Ls = new Map([
        ["AltLeft", "altKey"],
        ["AltRight", "altKey"],
        ["ControlLeft", "ctrlKey"],
        ["ControlRight", "ctrlKey"],
        ["ShiftLeft", "shiftKey"],
        ["ShiftRight", "shiftKey"],
        ["MetaLeft", "metaKey"],
        ["MetaRight", "metaKey"]
      ]),
      ls = 32768,
      ns = 1;

    function as(zz) {
      return Math.min(Math.max(Math.round(zz), 0), 65535)
    }

    function qs(zz, tz, sz) {
      const Fz = [],
        Wz = (zz, tz, sz, Wz) => {
          const Xz = zz => {
            (0, Gs.r)(zz) || sz(zz)
          };
          zz.addEventListener(tz, Xz, Wz), Fz.push((() => {
            zz.removeEventListener(tz, Xz, Wz)
          }))
        },
        Xz = {
          capture: !0,
          passive: !0
        },
        Oz = (zz, sz, Fz, Wz, Xz) => (!(0, ys.c)() || !ds.has(zz)) && (tz(zz, sz, Fz, Wz, Xz), !0),
        oz = () => document.pointerLockElement === zz,
        vz = (0, As.d)(),
        Uz = zz => {
          zz.ctrlKey && sz.ctrlCombosAreGames() && !(0, Os.i)(zz.target) && zz.preventDefault()
        },
        Kz = (zz, Fz, Wz) => {
          sz.inspect(zz, Fz, !1), tz(Qt.qb.KeyUp, Fz, 0, 0, (0, es.p)(Wz, zz.timeStamp)), sz.keyReleased(Fz)
        },
        uz = new Map,
        Nz = (zz, tz, sz) => zz[sz] || ("AltRight" === tz || "ControlLeft" === tz) && zz.getModifierState("AltGraph"),
        bz = new Map,
        wz = () => {
          uz.clear(), bz.clear()
        },
        Dz = zz => {
          if (document.hasFocus())
            for (const [tz, sz] of bz) bz.delete(tz), Nz(zz, tz, sz) || (uz.delete(tz), Kz(zz, Ms.n[tz], hs(zz)))
        };
      zz.tabIndex = -1;
      let gz = 0,
        Hz = 0;
      const Bz = () => {
        const tz = zz.getBoundingClientRect();
        gz = tz.left, Hz = tz.top
      };
      let Pz = "mouse";
      const rz = () => !oz() && ("mouse" === Pz || !sz.touchUiShown()),
        Yz = (zz, tz, sz) => {
          const Fz = (as(zz.clientX - gz) | as(zz.clientY - Hz) << 16) >>> 0;
          Oz(Qt.qb.MouseMove, Qt.Ab.Point, tz, sz, Fz)
        };
      let xz = !1,
        mz = 0;
      const Jz = () => {
        xz && (xz = !1, sz.viewShown() && (0, It.Q)())
      };
      Fz.push((() => {
        clearTimeout(mz)
      })), Wz(window, "keydown", (zz => {
        "Escape" === zz.key ? (0, It.K)(!0) : zz.repeat || (0, Os.i)(zz.target) || (xz = !0, clearTimeout(mz), mz = window.setTimeout(Jz, 0))
      }), Xz), Wz(window, "keydown", (zz => {
        Jz(), Uz(zz), Dz(zz);
        const tz = Ms.n[zz.code];
        if ("number" !== typeof tz || !sz.viewShown()) return;
        const Fz = (0, Os.i)(zz.target);
        Fz || !sz.prevents(tz) && !is.has(zz.code) || zz.preventDefault(), zz.repeat || sz.inspect(zz, tz, !0), Oz(Qt.qb.KeyDown, tz, 0, 0, (0, es.p)(hs(zz), zz.timeStamp)) && uz.set(zz.code, tz), Fz || sz.keyPressed(tz)
      }), {
        capture: !1,
        passive: !1
      }), Wz(window, "keyup", (zz => {
        "Escape" === zz.key && (0, It.K)(!1), Uz(zz), uz.delete(zz.code), bz.delete(zz.code), Dz(zz);
        const tz = Ms.n[zz.code];
        "number" === typeof tz && Kz(zz, tz, hs(zz))
      }), {
        capture: !0,
        passive: !1
      }), Wz(window, "mousemove", (zz => {
        "mouse" === Pz && rz() ? Yz(zz, zz.movementX, zz.movementY) : oz() ? Oz(Qt.qb.MouseMove, Qt.Ab.Stamped, zz.movementX, zz.movementY, (0, es.p)(0, zz.timeStamp)) : Oz(Qt.qb.MouseMove, 0, zz.movementX, zz.movementY, 0)
      }), Xz);
      let Iz = 0,
        Cz = 0;
      const ez = [];
      let Zz = !1,
        Gz = !1;
      Wz(zz, "mousedown", (zz => {
        if ((0, ys.c)()) return;
        Dz(zz);
        const Fz = 1 << zz.button;
        if (!oz() && (0, It.P)() && (0, It.i)() && (Gz = !0, !Zz)) return void(Iz |= Fz);
        Iz &= ~Fz;
        const Wz = zz.button <= 2 ? ks(zz) : void 0;
        void 0 !== Wz && (ez[zz.button] = Wz, sz.inspect(zz, Wz, !0)), rz() && Yz(zz, 0, 0), tz(Qt.qb.MouseDown, zz.button, zz.clientX, zz.clientY, (0, es.p)(hs(zz), zz.timeStamp)), Cz |= Fz, void 0 !== Wz && sz.keyPressed(Wz)
      }), Xz), Wz(window, "mouseup", (zz => {
        var Fz;
        Dz(zz);
        const Wz = 1 << zz.button,
          Xz = 0 !== (Iz & ~Cz & Wz);
        if (Iz &= ~Wz, Cz &= ~Wz, Xz) return;
        const Oz = zz.button <= 2 ? null !== (Fz = ez[zz.button]) && void 0 !== Fz ? Fz : ks(zz) : void 0;
        void 0 !== Oz && sz.inspect(zz, Oz, !1), tz(Qt.qb.MouseUp, zz.button, zz.clientX, zz.clientY, (0, es.p)(hs(zz), zz.timeStamp)), void 0 !== Oz && sz.keyReleased(Oz)
      }), Xz), Wz(zz, "contextmenu", (zz => {
        zz.preventDefault()
      }), {
        passive: !1
      });
      const Tz = zz => {
        (oz() || (0, It.r)() && (0, Ts.o)()) && (zz.ctrlKey || vz && !document.fullscreenElement) && zz.preventDefault()
      };
      Wz(zz, "wheel", (zz => {
        Tz(zz), Dz(zz), Oz(Qt.qb.Wheel, zz.deltaMode, zz.deltaX, zz.deltaY, 0)
      }), {
        capture: !0,
        passive: !1
      });
      const cz = {
          capture: !0,
          passive: !1
        },
        jz = zz => {
          zz ? window.addEventListener("wheel", Tz, cz) : window.removeEventListener("wheel", Tz, cz)
        };
      jz((0, It.r)()), Fz.push((0, It.A)(jz)), Fz.push((() => {
        jz(!1)
      }));
      const Az = new Map,
        yz = new Set,
        Mz = zz => {
          const tz = "stylus" === zz.touchType;
          for (const sz of Az.values())
            if (!sz.touched && (tz || Math.abs(zz.clientX - sz.x) <= ns && Math.abs(zz.clientY - sz.y) <= ns)) return sz.touched = !0, !0;
          return !1
        },
        dz = zz => 32767 & zz,
        hz = new Set,
        Qz = zz => sz => {
          const Fz = (0, es.p)(hs(sz), sz.timeStamp);
          zz !== Qt.qb.TouchStart && zz !== Qt.qb.TouchMove || ((zz, sz) => {
            const Fz = zz.touches;
            if (Fz)
              for (const Wz of hz) {
                let zz = !1;
                for (let tz = 0; tz < Fz.length && !zz; tz++) zz = dz(Fz[tz].identifier) === Wz;
                zz || (hz.delete(Wz), tz(Qt.qb.TouchCancel, Wz, 0, 0, sz))
              }
          })(sz, Fz);
          const Wz = sz.changedTouches;
          for (let tz = 0; tz < Wz.length; tz++) {
            const sz = Wz[tz];
            if (zz === Qt.qb.TouchStart && Mz(sz) && yz.add(sz.identifier), yz.has(sz.identifier)) {
              zz !== Qt.qb.TouchEnd && zz !== Qt.qb.TouchCancel || yz.delete(sz.identifier);
              continue
            }
            const Xz = dz(sz.identifier),
              oz = Oz(zz, Xz, sz.clientX - gz, sz.clientY - Hz, Fz);
            zz === Qt.qb.TouchStart ? oz && hz.add(Xz) : zz !== Qt.qb.TouchMove && hz.delete(Xz)
          }
        },
        kz = Qz(Qt.qb.TouchStart);
      Wz(zz, "touchstart", (zz => {
        zz.preventDefault(), (0, ys.c)() || (sz.touchStarting(), kz(zz))
      }), {
        passive: !1
      }), Wz(zz, "touchmove", Qz(Qt.qb.TouchMove), Xz), Wz(zz, "touchend", Qz(Qt.qb.TouchEnd), Xz), Wz(zz, "touchcancel", Qz(Qt.qb.TouchCancel), Xz);
      const iz = zz => ls | 32767 & zz,
        Lz = (zz, tz) => {
          Oz(zz, iz(tz.pointerId), tz.clientX - gz, tz.clientY - Hz, (0, es.p)(hs(tz), tz.timeStamp))
        };
      Wz(window, "pointerdown", (tz => {
        Pz = tz.pointerType, "mouse" === tz.pointerType && tz.target !== zz && sz.viewShown() && (0, It.S)()
      }), Xz), Wz(zz, "pointerdown", (zz => {
        "pen" === zz.pointerType && 0 === zz.button && (0, It.r)() && (0, Ts.o)() && (zz.preventDefault(), (0, ys.c)() || (Az.set(zz.pointerId, {
          x: zz.clientX,
          y: zz.clientY,
          touched: !1
        }), sz.touchStarting(), Lz(Qt.qb.TouchStart, zz)))
      }), {
        passive: !1
      }), Wz(window, "pointermove", (zz => {
        Pz = zz.pointerType, Az.has(zz.pointerId) && Lz(Qt.qb.TouchMove, zz), "mouse" !== zz.pointerType && rz() && Yz(zz, 0, 0)
      }), Xz);
      const lz = zz => tz => {
        Az.delete(tz.pointerId) && Lz(zz, tz)
      };
      Wz(window, "pointerup", lz(Qt.qb.TouchEnd), Xz), Wz(window, "pointercancel", lz(Qt.qb.TouchCancel), Xz);
      let nz = 0;
      const az = () => {
          nz = 0, Bz(), sz.resized()
        },
        qz = () => {
          const zz = sz.sizeCanvas();
          null !== zz && tz(Qt.qb.Resize, 0, zz.cssWidth, zz.cssHeight, (0, es.j)(zz.renderScale)), Bz(), sz.resized(), 0 === nz && (nz = requestAnimationFrame(az))
        };
      Wz(window, "resize", qz, Xz), Fz.push(sz.watchRenderScale(qz)), Fz.push((() => {
        cancelAnimationFrame(nz)
      })), Wz(window, "focus", (zz => {
        zz.isTrusted && (tz(Qt.qb.Focus, 0, 0, 0, 0), sz.viewShown() && (0, It.S)())
      }), {
        passive: !0
      });
      const Sz = () => {
          (0, It.K)(!1), Iz = 0
        },
        Vz = () => {
          hz.clear(), Az.clear(), yz.clear()
        };
      let Rz = 0,
        pz = 0;
      Wz(window, "blur", (Fz => {
        Sz(), (0, It.o)();
        for (const zz of uz.keys()) {
          const tz = Ls.get(zz);
          void 0 !== tz && bz.set(zz, tz)
        }
        Fz.isTrusted && ((zz => {
          for (const [sz, Fz] of Az) tz(Qt.qb.TouchCancel, iz(sz), Fz.x, Fz.y, (0, es.p)(0, zz));
          Az.clear()
        })(Fz.timeStamp), tz(Qt.qb.Blur, Qt.s.KeepTouches, 0, 0, 0)), vz && Fz.isTrusted && (clearTimeout(pz), pz = window.setTimeout((() => {
          if (!document.hasFocus()) {
            for (const zz of uz.values()) Kz(Fz, zz, 0);
            wz()
          }
        }), 0)), clearTimeout(Rz), Rz = window.setTimeout((() => {
          document.activeElement instanceof HTMLIFrameElement && (0, Ts.o)() && sz.viewShown() && zz.focus({
            preventScroll: !0
          })
        }), 0)
      }), {
        passive: !0
      }), Fz.push((() => {
        clearTimeout(Rz), clearTimeout(pz)
      })), Wz(window, "mousedown", (tz => {
        vz && tz.isTrusted && !document.hasFocus() && (0, Ts.o)() && sz.viewShown() && (window.focus(), zz.focus({
          preventScroll: !0
        }))
      }), Xz), Wz(document, "visibilitychange", (() => {
        document.hidden ? (tz(Qt.qb.Blur, 0, 0, 0, 0), Vz()) : document.hasFocus() && tz(Qt.qb.Focus, 0, 0, 0, 0)
      }), {
        passive: !0
      }), Fz.push((0, ys.g)((() => {
        Sz(), tz(Qt.qb.Blur, Qt.s.Release, 0, 0, 0), sz.keysReleased(), wz(), Cz = 0, Vz(), tz(Qt.qb.Joystick, 0, 0, 0, 0), document.hasFocus() && tz(Qt.qb.Focus, 0, 0, 0, 0)
      })));
      const fz = !sz.canLock(),
        Ez = () => fz && !(0, It.r)() ? Qt.Zb.Lockless : Qt.Zb.Released,
        zt = () => {
          oz() && (Zz = !1, Gz = !1), tz(Qt.qb.PointerLock, oz() ? Qt.Zb.Locked : Ez(), 0, 0, 0), (0, It.O)(oz())
        };
      return Wz(document, "pointerlockchange", zt, {
        passive: !0
      }), Wz(document, "pointerlockerror", (() => {
        Zz ||= Gz, Gz = !1, (0, It.x)()
      }), {
        passive: !0
      }), fz && Fz.push((0, It.A)((() => {
        tz(Qt.qb.PointerLock, Ez(), 0, 0, 0)
      }))), qz(), tz(document.hasFocus() ? Qt.qb.Focus : Qt.qb.Blur, 0, 0, 0, 0), zt(), () => {
        for (const zz of Fz.splice(0)) zz()
      }
    }
    var Ss = sz(8771),
      Vs = sz(8757),
      Rs = sz(1917);
    const ps = new Map(Ms.b.map(((zz, tz) => [zz, tz]))),
      fs = ["jump", "primary-fire", "alt-fire"],
      Es = ["primary-fire", "alt-fire"];

    function zF(zz) {
      return `${Rs.e}${zz}`
    }
    const tF = ["forward", "backward", "left", "right", "sprint", "jump"];

    function sF(zz) {
      const tz = [];
      for (const sz of zz) {
        const zz = "string" === typeof sz ? Ms.n[sz] : void 0;
        "number" === typeof zz && tz.push(zz)
      }
      return tz
    }
    class FF {
      constructor() {
        this.keys = new Map, this.preventKeys = new Set, this.movementKeys = new Set, this.checkedDown = new Set, this.checkedUp = new Set;
        for (const [zz, tz] of Object.entries(Ms.f)) this.keys.set(zz, tz);
        this.updateKeySets()
      }
      prevents(zz) {
        return this.preventKeys.has(zz)
      }
      moves(zz) {
        return this.movementKeys.has(zz)
      }
      checks(zz, tz) {
        return (tz ? this.checkedDown : this.checkedUp).has(zz)
      }
      sync(zz, tz) {
        for (const [sz, Fz] of this.keys) {
          const Wz = zz(zF(sz)),
            Xz = Array.isArray(Wz) ? sF(Wz) : Ms.f[sz];
          (Xz.length !== Fz.length || Xz.some(((zz, tz) => zz !== Fz[tz]))) && this.bind(sz, Xz, tz)
        }
      }
      bind(zz, tz, sz) {
        const Fz = ps.get(zz);
        if (void 0 !== Fz) {
          sz(Qt.qb.Binding, 0, 0, 0, Fz | Qt.o.Clear << 8);
          for (const Xz of [...tz, ...null !== (Wz = Ms.j[zz]) && void 0 !== Wz ? Wz : []]) {
            var Wz;
            sz(Qt.qb.Binding, Xz, 0, 0, Fz | Qt.o.Add << 8)
          }
          this.keys.set(zz, tz), this.updateKeySets()
        }
      }
      updateKeySets() {
        this.preventKeys.clear();
        for (const Fz of Ms.q)
          for (const tz of null !== (zz = this.keys.get(Ms.b[Fz])) && void 0 !== zz ? zz : []) {
            var zz;
            this.preventKeys.add(tz)
          }
        this.movementKeys.clear();
        for (const Fz of tF)
          for (const zz of null !== (tz = this.keys.get(Fz)) && void 0 !== tz ? tz : []) {
            var tz;
            this.movementKeys.add(zz)
          }
        for (const [Fz, Wz] of [
            [this.checkedDown, fs],
            [this.checkedUp, Es]
          ]) {
          Fz.clear();
          for (const zz of Wz)
            for (const tz of null !== (sz = this.keys.get(zz)) && void 0 !== sz ? sz : []) {
              var sz;
              Fz.add(tz)
            }
        }
      }
    }
    var WF = sz(4438),
      XF = sz(36071);
    const OF = "[bloxd-wasm-client]";

    function oF() {
      return "inGame" === nz.b.get("gameState") && !(0, Zs.v)()
    }
    let vF = null;

    function UF(zz, tz) {
      vF && tz.writePendingInput() && vF.push(function(zz, tz) {
        let sz = "";
        for (const Fz of tz) sz += Fz.toString(16).padStart(2, "0");
        return sz ? `${zz} ${sz}` : String(zz)
      }(zz, tz.rings.input.written()))
    }
    const KF = [];

    function uF(zz, tz, sz, Fz) {
      zz === Qt.X.InputAction && Fz === Qt.mb && KF.push(tz.getUint32(sz, !0))
    }
    var NF = sz(40080),
      bF = sz(1182),
      wF = sz(36263);
    const DF = {
      general: {
        ok: "OK",
        tryAgain: "Try Again",
        back: "Back",
        reload: "Reload",
        reconnect: "Rejoin"
      },
      wasmScreens: bF.wasmScreens
    };

    function gF(zz) {
      var tz, sz;
      let Fz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const [Wz, Xz] = zz.split(":");
      return (null !== (tz = null === (sz = DF[Wz]) || void 0 === sz ? void 0 : sz[Xz]) && void 0 !== tz ? tz : zz).replace(/\{\{(\w+)\}\}/g, ((zz, tz) => {
        var sz;
        return null !== (sz = Fz[tz]) && void 0 !== sz ? sz : zz
      }))
    }

    function HF(zz, tz) {
      (0, Cs.e)();
      const sz = document.createElement("div");
      sz.setAttribute("role", "alertdialog"), sz.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;z-index:100;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.7);font:16px sans-serif;color:#fff";
      const Fz = document.createElement("div");
      Fz.style.cssText = "max-width:28rem;padding:1.5rem;background:#1c2333;text-align:center";
      const Wz = document.createElement("h2");
      Wz.textContent = gF(zz.title);
      const Xz = document.createElement("p");
      if (Xz.textContent = gF(zz.help, zz.helpValues), Xz.style.whiteSpace = "pre-line", Fz.append(Wz, Xz), zz.discordLink) {
        const zz = document.createElement("a");
        zz.href = wF.c, zz.target = "_blank", zz.rel = "noreferrer", zz.style.color = "#8ab4ff", zz.textContent = gF("wasmScreens:reportOnDiscord"), Fz.append(zz)
      }
      const Oz = document.createElement("div");
      return Oz.style.cssText = "display:flex;gap:1rem;justify-content:center;margin-top:1.5rem", Fz.append(Oz), sz.append(Fz), document.body.append(sz), new Promise((Fz => {
        const Wz = zz => {
            null === tz || void 0 === tz || tz.removeEventListener("abort", Xz), sz.remove(), Fz(zz)
          },
          Xz = () => {
            Wz(!1)
          };
        null === tz || void 0 === tz || tz.addEventListener("abort", Xz, {
          once: !0
        });
        const oz = (zz, tz) => {
          const sz = document.createElement("button");
          sz.textContent = gF(zz), sz.style.cssText = "padding:0.5rem 1.25rem;font:inherit", sz.addEventListener("click", (() => {
            Wz(tz)
          })), Oz.append(sz)
        };
        null !== zz.cancel && oz(zz.cancel, !1), oz(zz.confirm, !0)
      }))
    }
    var BF = sz(39908);
    const PF = 6e4,
      rF = 3e5;
    var YF = sz(3313);
    var xF = sz(39831),
      mF = sz(616),
      JF = sz(17);

    function IF(zz, tz) {
      const sz = JF.ab.encode(tz);
      ! function(zz, tz) {
        let sz = tz >= 0 ? 2 * tz : 2 * -tz - 1;
        for (; sz >= 128;) zz.push(sz % 128 | 128), sz = Math.floor(sz / 128);
        zz.push(sz)
      }(zz, sz.length);
      for (const Fz of sz) zz.push(Fz)
    }
    let CF, eF, ZF;
    (() => {
      const zz = ["length", 0, null, "q", "e", "resolv", "then", "postCo", "okies", 2, 1, "string", "Invalid data key provided (not type string)", "Invalid data key provided (empty string)", "Serialization error for data '", "': ", void 0, 73, "b", 6, 5, 32, 3, 4, "c", 18];

      function tz() {}
      const Fz = (zz[1], JF[zz[3]])("aGFyZHdhcmVDb25jdXJyZW5jeQ=="),
        Wz = (zz[1], JF[zz[3]])("QkFCWUxPTg=="),
        Xz = (zz[1], JF[zz[3]])("QW5kZXNpdGU="),
        Oz = (zz[1], JF[zz[3]])("U21vb3RoIEdyYW5pdGU="),
        oz = (zz[1], JF[zz[3]])("RGlvcml0ZQ=="),
        vz = async (tz, Fz, Wz, Xz) => {
          const [{
            clientSideServerUrls: Oz
          }, {
            ["postJsonWithMetricsCookiesAndJsonRespons" + zz[4]]: oz
          }] = await Promise.all([Promise[zz[5] + zz[4]]()[zz[6]]((() => sz(1191))), Promise[zz[5] + zz[4]]()[zz[6]]((() => sz(1120)))]), vz = Oz.getHttpUrlFromWebSocketUrl(tz.endpoint), Uz = tz[zz[7] + zz[8]] === zz[2] ? zz[16] : await tz[zz[7] + zz[8]]();
          await oz("" + vz + Fz, Wz, {
            retries: Xz
          }, Uz)
        };
      CF = async (sz, Fz) => {
        "quSIWNp" in tz && function(...tz) {
          tz[zz[0]] = zz[1]
        }();
        const Wz = function(zz, tz, sz, Fz) {
          const Wz = [];
          IF(Wz, zz), IF(Wz, tz), IF(Wz, sz);
          for (const Xz of Fz) Wz.push(Xz);
          return Wz
        }(sz.game, sz.lobby, (zz[1], mF[zz[24]])(), Fz);
        try {
          await vz(sz, "/persisted/keep-alive", {
            type: "Lw",
            data: Wz
          }, zz[22])
        } catch (Oz) {
          console.warn(Oz)
        }
      };
      const Uz = (...tz) => (tz[zz[0]] = zz[9], Object.getOwnPropertyDescriptor(tz[zz[1]], tz[zz[10]]));

      function Kz() {
        Kz = function() {}
      }
      eF = (...sz) => {
        if (sz[zz[0]] = zz[1], "vPZqM2" in tz && function(...tz) {
            tz[zz[0]] = zz[1]
          }(), (zz[1], JF.E)(), Uz(navigator, Fz) !== zz[16]) {
          function vz() {
            var tz;
            Kz(tz = function(...sz) {
              if (Kz(sz[zz[0]] = zz[19], sz[zz[19]] = zz[2]), !(sz[zz[20]] < zz[1])) {
                if (sz[zz[20]] === zz[1]) return sz[zz[1]].push(sz[zz[10]]);
                for (sz[-zz[21]] = sz[zz[9]]; sz[-zz[21]] < sz[zz[22]] && !(sz[zz[23]][sz[-zz[21]]] > sz[zz[20]]); sz[-zz[21]]++) sz[-zz[21]] > sz[zz[9]] && sz[zz[23]][sz[-zz[21]]] === sz[zz[23]][sz[-zz[21]] - zz[10]] || Kz(sz[zz[19]] = Array.from(sz[zz[10]]), sz[zz[19]].push(sz[zz[23]][sz[-zz[21]]]), tz(sz[zz[1]], sz[zz[19]], sz[-zz[21]] + zz[10], sz[zz[22]], sz[zz[23]], sz[zz[20]] - sz[zz[23]][sz[-zz[21]]]))
              }
            }, console.log((function(...sz) {
              return Kz(sz[zz[0]] = zz[9], sz[zz[17]] = [], sz[zz[18]] = sz[zz[1]].length, sz[zz[1]].sort(((zz, tz) => zz - tz)), tz(sz[zz[17]], [], zz[1], sz[zz[18]], sz[zz[1]], sz[zz[10]])), sz[zz[17]]
            })))
          }
          return "iaZGvF" in tz && vz(), Xz
        }
        return Uz(window, Wz) === zz[16] ? Oz : oz
      }, ZF = async sz => {
        "KGqjaKD" in tz && function(...tz) {
          Kz(tz[zz[0]] = zz[1], tz[zz[25]] = "(c=ak(<~F$VU'9f)~><&85dBPL-module/from", tz[zz[18]] = "q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)?", tz[zz[24]] = "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d(-199)]-163))]+ae(b(146))](0)==b(167)?d(-130):-d(-144)", tz[zz[25]].match(tz[zz[18]] + tz[zz[24]]))
        }();
        try {
          const tz = eF();
          await vz(sz, "/images/" + tz + ".png", {
            block: tz
          }, zz[1])
        } catch {}
      }
    })();
    var GF = sz(39985),
      TF = sz(1746);
    const cF = 1e3 * GF.d.seatReservationSeconds - 3e3;
    class jF {
      constructor(zz) {
        var tz, sz, Fz, Wz;
        let Xz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.seat = void 0, this.follow = void 0, this.wallNow = void 0, this.monoNow = void 0, this.wallAt = void 0, this.monoAt = void 0, this.sleep = void 0, this.answeredAt = null, this.posts = 0, this.refusals = 0, this.request = "pending", this.use = "unused", this.wallNow = null !== (tz = Xz.wallNow) && void 0 !== tz ? tz : Date.now, this.monoNow = null !== (sz = Xz.monoNow) && void 0 !== sz ? sz : () => performance.now(), this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), this.sleep = null !== (Fz = Xz.sleep) && void 0 !== Fz ? Fz : TF.c, this.follow = new Pt.d(Xz.signal);
        const Oz = null !== (Wz = Xz.fetch) && void 0 !== Wz ? Wz : fetch;
        this.seat = (0, bs.j)(zz.endpoint, zz.roomName, zz.joinOptions, {
          sleep: this.sleep,
          signal: this.follow.signal,
          fetch: (zz, tz) => (this.posts++, this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), Oz(zz, tz)),
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
        (0, Pt.n)(zz);
        const tz = "pending" !== this.request,
          sz = () => {
            this.abort((0, Pt.f)(zz))
          };
        let Fz;
        null === zz || void 0 === zz || zz.addEventListener("abort", sz, {
          once: !0
        });
        try {
          Fz = await this.seat
        } catch (Wz) {
          if ((0, Pt.n)(zz), !tz) throw Wz;
          return void(this.use = "lost")
        } finally {
          null === zz || void 0 === zz || zz.removeEventListener("abort", sz)
        }
        if ((0, Pt.n)(zz), !(this.ageMs() > cF)) return this.use = "taken", Fz;
        this.use = "renewed"
      }
      async reserveInstead(zz, tz) {
        try {
          return await zz()
        } catch (sz) {
          const Wz = this.holdLeftMs();
          if (!(sz instanceof jz.m) || sz.code !== Fz.b.duplicateLobbyNameError.code || 0 === Wz) throw sz;
          return await this.sleep(Wz + 500, tz), zz()
        }
      }
      release() {
        const {
          request: zz,
          use: tz
        } = this, sz = this.holdsNoSeat();
        return this.abort(), "taken" === tz || sz ? null : {
          unused: "unused" === tz ? "abandoned" : tz,
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
        const tz = null !== (zz = this.answeredAt) && void 0 !== zz ? zz : {
            wall: this.wallAt,
            mono: this.monoAt
          },
          sz = Math.max(this.wallNow() - tz.wall, this.monoNow() - tz.mono);
        return Math.max(0, 1e3 * GF.d.seatReservationSeconds - sz)
      }
      ageMs() {
        return Math.max(this.wallNow() - this.wallAt, this.monoNow() - this.monoAt)
      }
      abort(zz) {
        (0, Pt.j)(this.follow.controller, zz)
      }
    }
    var AF = sz(1824),
      yF = sz(40088);
    const MF = new Uint8Array(0);
    class dF {
      constructor(zz) {
        if (this.options = zz, this.slots = [], this.createWorker = null, this.stopped = !1, this.pool = [], this.failedJobs = 0, this.memoryFailureCounted = !1, this.faultsReported = new Set, this.refusals = new Map, this.heapRefusals = 0, null === zz.module) return this.stopped = !0, void zz.fail("no wasm module for the meshing workers");
        zz.loadWorkers().then((zz => {
          let {
            create: tz,
            count: sz
          } = zz;
          if (!this.stopped) {
            this.createWorker = tz;
            for (let zz = 0; zz < sz; zz++) this.slots.push({
              worker: null,
              started: !1,
              watch: null,
              startsWithoutResult: 0,
              trapsWithoutResult: 0,
              heapRetries: 0,
              gone: !1,
              goneFor: null
            });
            for (let zz = 0; zz < sz; zz++) this.start(zz)
          }
        }), (zz => {
          this.stopped || (this.stop(), this.options.fail("the meshing workers' code could not load", zz))
        }))
      }
      take(zz, tz, sz) {
        const Fz = this.slots[tz];
        if (zz === Qt.Pd.Retire) {
          var Wz, Xz, Oz;
          if (Fz && !Fz.gone) null === (Wz = Fz.worker) || void 0 === Wz || Wz.terminate(), Fz.worker = null, Fz.started = !1, null === (Xz = (Oz = this.options).onMemoryGone) || void 0 === Xz || Xz.call(Oz, tz), this.giveUp(tz, "had its tables trap twice", "every meshing worker's tables trapped twice");
          return
        }
        const oz = null === Fz || void 0 === Fz ? void 0 : Fz.worker;
        if (!oz || !Fz.started) return;
        const vz = sz.byteLength;
        let Uz = null;
        zz === Qt.Pd.Mesh && Fz.heapRetries > 0 && (Fz.heapRetries--, Uz = this.pooled(vz, !0)), Uz ??= this.buffer(vz), new Uint8Array(Uz, 0, vz).set(sz), oz.postMessage({
          type: "job",
          kind: zz,
          bytes: Uz,
          len: vz
        }, [Uz])
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
        for (const tz of this.slots) {
          var zz;
          hF(tz), null === (zz = tz.worker) || void 0 === zz || zz.terminate(), tz.worker = null, tz.started = !1
        }
      }
      start(zz) {
        const tz = this.slots[zz],
          {
            module: sz
          } = this.options,
          Fz = this.createWorker;
        if (this.stopped || tz.gone || null === sz || null === Fz) return;
        if (tz.startsWithoutResult >= 3) return void this.giveUp(zz, "failed to start 3 times in a row", "no meshing worker would start");
        let Wz;
        tz.startsWithoutResult++;
        try {
          Wz = Fz()
        } catch (Xz) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${zz} did not start`, Xz), void this.start(zz)
        }
        tz.worker = Wz, Wz.onmessage = sz => {
          let {
            data: Fz
          } = sz;
          tz.worker === Wz && this.onReply(zz, Fz)
        }, Wz.onmessageerror = () => {
          tz.worker === Wz && this.lose(zz, "a reply could not be read")
        }, Wz.onerror = sz => {
          sz.preventDefault(), tz.worker === Wz && this.lose(zz, sz.message || "its script failed")
        };
        try {
          Wz.postMessage({
            type: "start",
            module: sz
          })
        } catch (Xz) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${zz} could not be sent the module`, Xz), Wz.terminate(), tz.worker = null, void this.start(zz)
        }
        tz.watch = new yF.h(yF.c, (tz => {
          this.lose(zz, (0, yF.j)(tz), (() => {
            this.options.onStartTimeout(tz)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(zz, tz) {
        const sz = this.slots[zz];
        switch (tz.type) {
          case "started":
            hF(sz), sz.started = !0, this.options.write(0, Qt.Md.WorkerStarted, 0, zz, 0, MF);
            break;
          case "lost":
            this.lose(zz, tz.reason);
            break;
          case "memory":
            var Fz, Wz;
            null === (Fz = (Wz = this.options).onMemoryStats) || void 0 === Fz || Fz.call(Wz, zz, tz.stats);
            break;
          case "result": {
            const Fz = tz.status === Qt.rb.Trapped;
            if (0 !== tz.jobId) {
              if (Fz) this.countFailedJob(tz.outOfMemory, "light_trap", tz.trap);
              else if (sz.startsWithoutResult = 0, sz.trapsWithoutResult = 0, tz.status === Qt.rb.Refused) {
                const sz = function(zz) {
                  if (zz.byteLength < 32) return "(no reason)";
                  const tz = new DataView(zz.buffer, zz.byteOffset, zz.byteLength),
                    sz = Math.min(tz.getUint32(28, !0), zz.byteLength - 28 - 4);
                  return (new TextDecoder).decode(zz.subarray(32, 32 + sz)).slice(0, 200)
                }(new Uint8Array(tz.bytes, 0, tz.len));
                this.countFailedJob(Lt.e.test(sz), "light_refused_input", sz), this.logRefusal(zz, sz)
              }
              tz.status === Qt.rb.HeapRefused && (sz.heapRetries = Math.min(sz.heapRetries + 1, 4), this.logHeapRefusal(zz))
            }
            if (this.options.write(tz.jobId, Qt.Md.JobResult, tz.status, zz, tz.workerUs, new Uint8Array(tz.bytes, 0, tz.len)), this.recycle(tz.bytes), tz.spare && this.recycle(tz.spare), !Fz) break;
            if (sz.startsWithoutResult = 0, 0 === tz.jobId) {
              this.lose(zz, `the tables trapped its wasm: ${tz.trap}`);
              break
            }
            sz.trapsWithoutResult++;
            const Wz = sz.trapsWithoutResult > 6;
            sz.gone ||= Wz, this.lose(zz, `a job trapped its wasm: ${tz.trap}`), Wz && this.giveUp(zz, `trapped ${sz.trapsWithoutResult} jobs in a row`, "every meshing worker kept trapping");
            break
          }
        }
      }
      countFailedJob(zz, tz, sz) {
        if (zz) {
          if (this.memoryFailureCounted) return;
          this.memoryFailureCounted = !0
        } else this.faultsReported.has(tz) || (this.faultsReported.add(tz), this.options.onLightFault(tz, sz));
        this.failedJobs++
      }
      logRefusal(zz, tz) {
        var sz;
        !this.refusals.has(tz) && this.refusals.size >= 16 && (tz = "(other reasons)");
        const Fz = (null !== (sz = this.refusals.get(tz)) && void 0 !== sz ? sz : 0) + 1;
        this.refusals.set(tz, Fz), (0, AF.t)(Fz) && console.warn(`[bloxd-wasm-client] meshing worker ${zz} refused a chunk (${Fz} so far for this reason): ${tz}`)
      }
      logHeapRefusal(zz) {
        this.heapRefusals++, (0, AF.t)(this.heapRefusals) && console.warn(`[bloxd-wasm-client] meshing worker ${zz} was refused memory for a chunk's mesh (${this.heapRefusals} so far)`)
      }
      giveUp(zz, tz, sz) {
        const Fz = this.slots[zz];
        if (Fz.gone = !0, Fz.goneFor = {
            why: tz,
            failure: sz
          }, console.warn(`[bloxd-wasm-client] meshing worker ${zz} ${tz}: giving up on it`), this.slots.every((zz => zz.gone))) {
          this.stop();
          const zz = new Set(this.slots.map((zz => {
              var tz;
              return null === (tz = zz.goneFor) || void 0 === tz ? void 0 : tz.failure
            }))),
            tz = this.slots.map(((zz, tz) => {
              var sz, Fz;
              return `worker ${tz} ${null!==(sz=null===(Fz=zz.goneFor)||void 0===Fz?void 0:Fz.why)&&void 0!==sz?sz:"went"}`
            }));
          this.options.fail(1 === zz.size ? sz : `no meshing worker is left (${tz.join(", ")})`)
        }
      }
      lose(zz, tz, sz) {
        var Fz, Wz, Xz;
        const Oz = this.slots[zz];
        console.warn(`[bloxd-wasm-client] meshing worker ${zz} was lost: ${tz}`), hF(Oz), null === (Fz = Oz.worker) || void 0 === Fz || Fz.terminate(), Oz.worker = null, Oz.heapRetries = 0, null === (Wz = (Xz = this.options).onMemoryGone) || void 0 === Wz || Wz.call(Xz, zz), this.stopped || (sz ? sz() : this.options.onWorkerLost(tz), Oz.started && (Oz.started = !1, this.options.write(0, Qt.Md.WorkerLost, 0, zz, 0, MF)), this.start(zz))
      }
      buffer(zz) {
        var tz;
        return null !== (tz = this.pooled(zz)) && void 0 !== tz ? tz : new ArrayBuffer(Math.max(16384, zz))
      }
      pooled(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          sz = -1;
        for (let Wz = 0; Wz < this.pool.length; Wz++) {
          const Fz = this.pool[Wz].byteLength;
          Fz >= zz && (sz < 0 || (tz ? Fz > this.pool[sz].byteLength : Fz < this.pool[sz].byteLength)) && (sz = Wz)
        }
        if (sz < 0) return null;
        const Fz = this.pool[sz];
        return this.pool[sz] = this.pool[this.pool.length - 1], this.pool.pop(), Fz
      }
      recycle(zz) {
        this.pool.length < 4 * this.slots.length && zz.byteLength > 0 && zz.byteLength <= 1048576 && this.pool.push(zz)
      }
    }

    function hF(zz) {
      var tz;
      null === (tz = zz.watch) || void 0 === tz || tz.cancel(), zz.watch = null
    }
    var QF = sz(38530),
      kF = sz(40040),
      iF = sz(40094),
      LF = sz(40101),
      lF = (sz(39903), sz(40108)),
      nF = sz(40063);

    function aF(zz) {
      const tz = new Uint8Array(zz.length >> 2);
      for (let sz = 0; sz < tz.length; sz++) tz[sz] = zz[4 * sz + 3];
      return tz
    }
    async function qF(zz) {
      const tz = await (0, lF.h)(zz);
      try {
        const {
          width: zz,
          height: sz,
          pixels: Fz
        } = (0, nF.n)(tz);
        return {
          width: zz,
          height: sz,
          alpha: aF(Fz)
        }
      } finally {
        tz.close()
      }
    }
    class SF {
      constructor(zz, tz, sz) {
        let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : qF;
        this.session = zz, this.sources = tz, this.warn = sz, this.load = Fz, this.nextPoll = 0, this.lw = !1, this.warned = new Set
      }
      drain(zz) {
        if (zz < this.nextPoll) return;
        this.nextPoll = zz + 250;
        const tz = this.session.sunShadowWantedTextures();
        if (tz)
          for (let sz = 0; sz + 1 < tz.length; sz += 2) this.hand(tz[sz], tz[sz + 1]);
        for (const sz of this.session.takeSunShadowWarnings()) this.warn(sz)
      }
      dispose() {
        this.lw = !0
      }
      async hand(zz, tz) {
        var sz, Fz, Wz, Xz, Oz;
        let oz, vz = null;
        try {
          if (vz = await this.sources.blockImageUrl(zz), null === vz) throw new Error(`block image ${zz} has no URL`);
          oz = await this.load(vz)
        } catch (Kz) {
          var Uz;
          const tz = null !== (Uz = vz) && void 0 !== Uz ? Uz : `block image ${zz}`;
          this.warned.has(tz) || (this.warned.add(tz), this.warn(`sun shadow plane texture ${tz} didn't load: its blocks cast no shadow`, Kz))
        }
        this.lw || this.session.setSunShadowTexture(zz, tz, null !== (sz = null === (Fz = oz) || void 0 === Fz ? void 0 : Fz.width) && void 0 !== sz ? sz : 0, null !== (Wz = null === (Xz = oz) || void 0 === Xz ? void 0 : Xz.height) && void 0 !== Wz ? Wz : 0, null === (Oz = oz) || void 0 === Oz ? void 0 : Oz.alpha)
      }
    }
    var VF = sz(40049),
      RF = sz(40116),
      pF = sz(40119),
      fF = sz(40052),
      EF = sz(40055),
      zW = sz(8897),
      tW = sz(8732),
      sW = sz(40135);
    const FW = 8192,
      WW = new Set;
    const XW = new Set([...tW.e, "sceneDownload"]);
    var OW = sz(39912),
      oW = sz(39811);
    const vW = new Uint8Array(0);
    let UW = null;

    function KW(zz) {
      return {
        aux: Qt.Lb.AdStart | (zz ? Qt.Lb.PreventMovement : 0),
        payload: vW
      }
    }
    var uW = sz(2588),
      NW = sz(2596);
    const bW = "__bloxdSceneCapture";
    var wW = sz(1731),
      DW = sz(2679);
    let gW = null,
      HW = null,
      BW = null,
      PW = !1;

    function rW() {
      gW ??= performance.now()
    }
    var YW = sz(40142);
    class xW {
      constructor(zz) {
        var tz, sz;
        this.host = zz, this.requested = null, this.landed = null, this.confirm = null, this.channel = void 0, this.oneShotStored = !0, this.startRead = void 0, this.landRequest = () => {}, this.landing = new Promise((zz => {
          this.landRequest = zz
        })), this.follow = zz => {
          let tz = zz;
          return Promise.race([this.startRead, this.landing]).then((async () => {
            const zz = null === this.requested && null !== tz;
            var sz;
            zz && (null === (sz = tz) || void 0 === sz || sz(null));
            const Fz = await this.landing;
            var Wz;
            null === Fz && zz || (null === (Wz = tz) || void 0 === Wz || Wz(Fz))
          })), () => {
            tz = null
          }
        }, this.startRead = (sz = zz.store, sz.keys().then((zz => ({
          own: zz.includes(Bs.e),
          oneShot: zz.includes(Bs.i)
        })), (() => ({
          own: !0,
          oneShot: !0
        })))).then((zz => {
          let {
            own: tz,
            oneShot: sz
          } = zz;
          this.oneShotStored = sz, (tz || sz) && this.request()
        })), this.channel = (null !== (tz = zz.openChannel) && void 0 !== tz ? tz : Bs.s)(), null !== this.channel && (this.channel.onmessage = () => {
          this.request()
        })
      }
      request() {
        var zz;
        if (null !== this.requested) return this.requested;
        null === (zz = this.channel) || void 0 === zz || zz.close(), this.channel = null;
        const tz = this.oneShotStored;
        return this.requested = function(zz, tz, sz) {
          return new Promise((tz => {
            tz(zz())
          })).catch((zz => (null !== tz && (0, Bs.n)(tz), sz(zz), null)))
        }((() => this.host.load(tz).then((zz => (zz.setGamePackConfirm(this.confirm), this.landed = zz, zz)))), tz ? this.host.store : null, this.host.Iw), this.landRequest(this.requested), this.requested
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
        var tz;
        this.confirm = zz, null === (tz = this.landed) || void 0 === tz || tz.setGamePackConfirm(zz)
      }
    }
    var mW = sz(35800);
    const JW = 216 * mW.e,
      IW = 92 * mW.b,
      CW = 64 * mW.e,
      eW = 16 * mW.e;

    function ZW() {
      var zz, tz;
      return null !== (zz = null === (tz = performance.memory) || void 0 === tz ? void 0 : tz.nH) && void 0 !== zz ? zz : null
    }
    class GW {
      constructor(zz, tz) {
        this.budgetBytes = zz, this.reads = tz, this.estimate = null, this.shedAt = null
      }
      read(zz) {
        var tz;
        const sz = this.reads.storedChunks(),
          Fz = this.reads.gpuBytes(),
          Wz = Math.max(null !== (tz = this.reads.jsHeapBytes()) && void 0 !== tz ? tz : 0, CW),
          Xz = JW + zz + Wz + Fz + sz * IW;
        this.estimate = {
          wasmBytes: zz,
          jsHeapBytes: Wz,
          gpuBytes: Fz,
          storedChunks: sz,
          totalBytes: Xz
        }
      }
      last() {
        return this.estimate
      }
      takeShed() {
        const {
          estimate: zz,
          budgetBytes: tz,
          shedAt: sz
        } = this;
        return !(null === zz || null === tz || zz.totalBytes < tz || null !== sz && zz.totalBytes < sz + eW) && (this.shedAt = zz.totalBytes, !0)
      }
      describe() {
        const {
          estimate: zz,
          budgetBytes: tz
        } = this;
        return null === zz ? null : `estimate ${(0,mW.j)(zz.totalBytes)} MiB of budget ${null===tz?"none":(0,mW.j)(tz)}: wasm ${(0,mW.j)(zz.wasmBytes)} js ${(0,mW.j)(zz.jsHeapBytes)} gpu ${(0,mW.j)(zz.gpuBytes)} chunks ${zz.storedChunks}`
      }
      snapshot() {
        const {
          estimate: zz,
          budgetBytes: tz
        } = this;
        return {
          ...null === zz ? {} : {
            footprintMiB: Number((0, mW.j)(zz.totalBytes)),
            gpuMiB: Number((0, mW.j)(zz.gpuBytes)),
            storedChunks: zz.storedChunks
          },
          footprintBudgetMiB: null === tz ? -1 : Number((0, mW.j)(tz))
        }
      }
    }
    var TW = sz(2637),
      cW = sz(4156),
      jW = sz(38514),
      AW = sz(37362);
    const yW = kt.Y + 1,
      MW = 4096 * yW;
    class dW {
      constructor(zz, tz) {
        this.log = zz, this.take = tz, this.po = [], this.unshown = new Map, this.latest = new Map
      }
      afterFrame(zz, tz) {
        const sz = this.take();
        sz.length >= kt.V && sz[0] > 0 && (0, TW.g)("remesh", `${sz[0]} core records lost to a full log`);
        const Fz = this.po;
        for (let Wz = kt.V; Wz + kt.Y <= sz.length; Wz += kt.Y) {
          for (let zz = Wz; zz < Wz + kt.Y; zz++) Fz.push(sz[zz]);
          Fz.push(zz)
        }
        if (tz || !(Fz.length < MW)) {
          for (let tz = 0; tz < Fz.length; tz += yW) this.feed(tz, zz);
          Fz.length = 0, tz && this.log.frame(zz)
        }
      }
      feed(zz, tz) {
        var sz;
        const Fz = this.po,
          Wz = (0, AW.i)(Fz[zz + 1], Fz[zz + 2], Fz[zz + 3]),
          Xz = Fz[zz + 4],
          Oz = Fz[zz + kt.Y];
        switch (Fz[zz]) {
          case kt.Gb.Edit:
            this.log.edit(Wz, Oz);
            break;
          case kt.Gb.Sent:
            this.latest.set(Wz, Xz), this.log.sent(Wz, Xz, Fz[zz + 5], Fz[zz + 6], Fz[zz + 7], null !== (sz = this.unshown.get(Wz)) && void 0 !== sz ? sz : AW.e, Oz);
            break;
          case kt.Gb.Done: {
            this.log.received(Xz, Fz[zz + 5] / 1e3, Oz);
            const tz = this.unshown.get(Wz);
            void 0 === tz ? this.unshown.set(Wz, [Xz]) : tz.push(Xz);
            break
          }
          case kt.Gb.Failed: {
            const zz = this.latest.get(Wz);
            void 0 !== zz && zz !== Xz ? this.log.reassign(Wz, Xz, zz) : this.log.failed(Xz), this.ended(Wz, Xz);
            break
          }
          case kt.Gb.Shown:
            this.log.applied(Wz, Xz, tz), this.ended(Wz, Xz);
            break;
          case kt.Gb.Replaced:
            this.log.reassign(Wz, Xz, Fz[zz + 5]), this.ended(Wz, Xz);
            break;
          case kt.Gb.Emptied:
            this.log.emptied(Wz, tz);
            break;
          default:
            console.warn(`[debug:remesh] unknown core record kind ${Fz[zz]}`)
        }
      }
      ended(zz, tz) {
        this.latest.get(zz) === tz && this.latest.delete(zz);
        const sz = this.unshown.get(zz);
        if (void 0 === sz) return;
        const Fz = sz.indexOf(tz);
        Fz >= 0 && sz.splice(Fz, 1), 0 === sz.length && this.unshown.delete(zz)
      }
    }
    let hW = null;
    var QW = sz(2937);
    const kW = new Uint8Array(0);
    class iW {
      constructor(zz) {
        this.options = zz, this.worker = null, this.watch = null, this.createWorker = null, this.loading = !1, this.po = [], this.startsWithoutResult = 0, this.lastLoss = "", this.seed = null, this.gone = !1, this.pool = [], null !== zz.module ? zz.write(0, Qt.Md.WorldgenStarted, 0, 0, kW) : this.giveUp()
      }
      take(zz, tz) {
        if (!(this.gone || null === this.worker && null === this.po))
          if (zz === Qt.Pd.WorldgenSeed) {
            const zz = 0 === tz.byteLength ? null : this.options.decodeSettings(tz);
            null === zz || function(zz, tz) {
              if ((null === zz || void 0 === zz ? void 0 : zz.byteLength) !== tz.byteLength) return !1;
              for (let sz = 0; sz < zz.byteLength; sz++)
                if (zz[sz] !== tz[sz]) return !1;
              return !0
            }(this.seed, tz) || (this.seed = tz.slice(), this.startsWithoutResult = null === this.worker ? 0 : 1), this.dropHeld(), this.post({
              type: "seed",
              settings: zz
            }, []), null !== zz ? this.load() : this.loading || this.options.onMapWithoutWorldgen()
          } else if (zz === Qt.Pd.Generate) {
          var sz;
          const zz = new DataView(tz.buffer, tz.byteOffset, Qt.Fd),
            Fz = null !== (sz = this.pool.pop()) && void 0 !== sz ? sz : new ArrayBuffer(8192);
          this.post({
            type: "generate",
            ticket: zz.getUint32(0, !0),
            x: zz.getInt32(4, !0),
            y: zz.getInt32(8, !0),
            z: zz.getInt32(12, !0),
            bytes: Fz
          }, [Fz])
        }
      }
      stop() {
        var zz;
        this.gone = !0, this.dropHeld(), this.endWatch(), null === (zz = this.worker) || void 0 === zz || zz.terminate(), this.worker = null
      }
      post(zz, tz) {
        var sz;
        null !== this.po ? this.po.push({
          message: zz,
          transfer: tz
        }) : null === (sz = this.worker) || void 0 === sz || sz.postMessage(zz, tz)
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
        } = this.options, tz = this.createWorker;
        if (this.gone || null === zz || null === tz) return;
        if (this.startsWithoutResult >= 3) return this.giveUp(), void this.options.onGaveUp(this.lastLoss);
        let sz;
        this.startsWithoutResult++;
        try {
          sz = tz()
        } catch (Wz) {
          return console.warn("[bloxd-wasm-client] the world-gen worker did not start", Wz), this.lastLoss = `it did not start (${String(Wz)})`, void this.start()
        }
        this.worker = sz, sz.onmessage = zz => {
          let {
            data: tz
          } = zz;
          this.worker === sz && this.onReply(sz, tz)
        }, sz.onerror = zz => {
          zz.preventDefault(), this.worker === sz && this.lose(zz.message || "its script failed")
        };
        try {
          sz.postMessage({
            type: "start",
            module: zz,
            pw: Fz.d.pw
          })
        } catch (Wz) {
          return console.warn("[bloxd-wasm-client] the world-gen worker could not be sent the module", Wz), this.lastLoss = `it could not be sent the module (${String(Wz)})`, sz.terminate(), this.worker = null, void this.start()
        }
        this.watch = new yF.h(yF.f, (zz => {
          this.lose((0, yF.j)(zz), (() => {
            this.options.onStartTimeout(zz)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(zz, tz) {
        switch (tz.type) {
          case "started": {
            this.endWatch();
            const tz = this.po;
            if (null === tz) {
              this.options.write(0, Qt.Md.WorldgenStarted, 0, 0, kW);
              break
            }
            this.po = null;
            for (const {
                message: sz,
                transfer: Fz
              }
              of tz) zz.postMessage(sz, Fz);
            break
          }
          case "lost":
            this.lose(tz.reason);
            break;
          case "memory":
            var sz, Fz;
            null === (sz = (Fz = this.options).onMemoryStats) || void 0 === sz || sz.call(Fz, tz.stats);
            break;
          case "result":
            tz.status !== Qt.rb.Trapped && (this.startsWithoutResult = 0), this.options.write(tz.ticket, Qt.Md.WorldgenResult, tz.status, tz.workerUs, new Uint8Array(tz.bytes, 0, tz.len)), this.recycle(tz.bytes), tz.spare && this.recycle(tz.spare)
        }
      }
      lose(zz, tz) {
        var sz, Fz, Wz;
        console.warn(`[bloxd-wasm-client] the world-gen worker was lost: ${zz}`), this.lastLoss = zz, this.endWatch(), null === (sz = this.worker) || void 0 === sz || sz.terminate(), this.worker = null, null === (Fz = (Wz = this.options).onMemoryGone) || void 0 === Fz || Fz.call(Wz), this.gone || (tz ? tz() : this.options.onWorkerLost(zz), this.dropHeld(), this.po = null, this.options.write(0, Qt.Md.WorldgenLost, Qt.Sd.Lost, 0, kW), this.start())
      }
      giveUp() {
        this.gone = !0, this.dropHeld(), this.options.write(0, Qt.Md.WorldgenLost, Qt.Sd.Gone, 0, kW)
      }
      endWatch() {
        var zz;
        null === (zz = this.watch) || void 0 === zz || zz.cancel(), this.watch = null
      }
      dropHeld() {
        if (null !== this.po) {
          for (const {
              message: zz
            }
            of this.po) "generate" === zz.type && this.recycle(zz.bytes);
          this.po.length = 0
        }
      }
      recycle(zz) {
        this.pool.length < 16 && zz.byteLength > 0 && zz.byteLength <= 16384 && this.pool.push(zz)
      }
    }
    var LW = sz(37173),
      lW = sz(3394),
      nW = sz(39797),
      aW = sz(40148),
      qW = sz(40019);
    const SW = /[(@\s]([^\s(@]+)$/,
      VW = /:\d/;

    function RW(zz, tz) {
      for (let sz = 0; sz + tz.length <= zz.length; sz++) {
        let Fz = 0;
        for (; Fz < tz.length && zz[sz + Fz] === tz[Fz];) Fz++;
        if (Fz === tz.length) return sz
      }
      return -1
    }

    function pW(zz) {
      return "(" === zz || ")" === zz || "@" === zz || "," === zz || " " === zz || "\t" === zz
    }

    function fW(zz, tz) {
      let sz = tz;
      for (; sz > 0 && !pW(zz[sz - 1]);) sz--;
      let Fz = tz;
      for (; Fz < zz.length && !pW(zz[Fz]);) Fz++;
      let Wz = "";
      for (let Xz = sz; Xz < Fz; Xz++) Wz += zz[Xz];
      return Wz
    }
    const EW = (zz, tz) => zz.includes(tz),
      zX = zz => {
        try {
          return zz()
        } catch {
          return !1
        }
      },
      tX = -1,
      sX = zz => {
        try {
          return zz()
        } catch {
          return tX
        }
      };

    function FX(zz, tz) {
      return {
        probe: (sz, Fz, Wz) => {
          try {
            return ((sz, Fz, Wz) => {
              switch (sz) {
                case Qt.$b.StackCheck:
                  return tz.stackCheck() ? 1 : 0;
                case Qt.$b.ConfirmMesh:
                  return tz.confirmMesh();
                case Qt.$b.IndexPassReplaced:
                  return tz.indexPassReplaced() ? 1 : 0;
                case Qt.$b.ProductSubChanged:
                  return tz.productSubChanged() ? 1 : 0;
                case Qt.$b.RenderStatus:
                  return tz.oK();
                case Qt.$b.Held:
                  return tz.po();
                case Qt.$b.PlayerKilledSubs:
                  return tz.playerKilledSubs();
                case Qt.eb: {
                  const sz = tz.getComplete();
                  return null === sz ? 0 : (0, JF.j)(JF.t, JF.ab, [sz, new JF.b((0, JF.C)(zz()), Fz, Wz)]).written
                }
                default:
                  return 0
              }
            })(sz, Fz, Wz)
          } catch {
            return Qt.Sb
          }
        }
      }
    }
    class WX {
      constructor(zz) {
        this.write = zz, this.flagsWritten = 0, this.written = (0, JF.m)(null)
      }
      wN(zz) {
        let {
          flags: tz,
          values: sz
        } = zz;
        for (let Fz = 0; Fz < sz.length; Fz++) this.value(sz[Fz][0], sz[Fz][1]);
        this.setFlags(tz | Qt.e.Ready)
      }
      value(zz, tz) {
        this.written[zz] !== tz && this.write(zz, tz, 0) && (this.written[zz] = tz)
      }
      setFlags(zz) {
        const tz = zz & ~this.flagsWritten;
        0 !== tz && this.write(Qt.h.Flags, tz, tz) && (this.flagsWritten |= tz)
      }
      originStackHit() {
        return this.write(Qt.h.Flags, Qt.e.OriginStackHit, Qt.e.OriginStackHit)
      }
    }
    const XX = {
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
      OX = 1e3;

    function oX(zz, tz) {
      const sz = new WX(tz);
      let Fz = !1;
      sz.wN(zz.wN());
      const Wz = (0, JF.U)((() => {
          sz.wN(zz.wN())
        }), OX),
        Xz = () => {
          zz.checks.stackCheck() && (Fz = !0)
        };
      (0, aW.j)(Xz);
      const Oz = () => {
        const tz = zz.checkPadCall();
        0 !== tz && sz.setFlags(tz)
      };
      return (0, nW.e)(Oz), {
        onInput: tz => {
          (function(zz) {
            switch (zz) {
              case Qt.qb.KeyDown:
              case Qt.qb.KeyUp:
              case Qt.qb.MouseDown:
              case Qt.qb.MouseUp:
              case Qt.qb.Wheel:
              case Qt.qb.TouchStart:
              case Qt.qb.TouchEnd:
              case Qt.qb.TouchButton:
              case Qt.qb.PadAction:
                return !0;
              default:
                return !1
            }
          })(tz) && zz.checks.stackCheck() && (Fz = !0)
        },
        onSend: Xz,
        beforeFrame: () => {
          Fz && sz.originStackHit() && (Fz = !1)
        },
        onEvent: tz => {
          const Fz = zz.checkEvent(tz);
          sz.value(Qt.h.ProbeUsedProp, zz.usedProp()), 0 !== Fz && sz.setFlags(Fz)
        },
        stop: () => {
          (0, JF.X)(Wz), (0, aW.f)(Xz), (0, nW.c)(Oz)
        }
      }
    }
    let vX;
    const UX = ["length", 0, void 0, !1, 1, !0, 1023, "b", 113, 65536, "d", 10, 55296, 56320, "a", 6, 12, 63, 128, "c", 58, 114, 47, 192, 3, 4, "Invalid byte index", 255, 224, 31, "Invalid continuation byte", 240, 15, 7, 18, 2, null, "q", "c3RhY2", "cw==", 34, 141, "e", 35, 56319, 64512, 183, 65535, 57343, "Lone s", "urroga", "te U+", 16, 4294967168, 4294965248, 4294901760, 4292870144, 152, 73, 2048, 248, 1114111, "Invalid UTF-8 detected", "3.0.0", "undefi", "ned", 1e5, 52, 81, 5, "stack", "name", 153, 118, "__GLOB", "AL__HE", "LPERS_", "_", 32, 228, " is no", "t a sc", "alar v", "alue", 86, 111, 184, 233, 37, 177, 162, 123, 72, 90, 130, 91, "k", 147, 158, 102, 137, 62, "m", 115, "string", 60, "s=", "=", ";", "j", 24, 1e3, "expire", 210, ";path=", "/", "functi", "on", "protot", "ype", "decode", "I=", "p", "eTR5bm", "r", "s", "t", "v", "sd", "chEven", "dispat", "now", "confir", "mMesh", "produc", "o", "player", "Killed", "number", "toString", "g", "get", "f", "u", "None", 11, 249, "En", "h", "tOverw", "ritten", "plete"];

    function KX() {}

    function uX() {
      uX = function() {}
    }
    vX = function(zz) {
      let tz = arguments[UX[0]] > UX[4] && arguments[UX[4]] !== UX[2] ? arguments[UX[4]] : (...zz) => (zz[UX[0]] = UX[1], "EbUd3p" in KX && function() {
          ! function(...zz) {
            function tz(zz) {
              var tz, sz, Fz, Wz, Xz = [];
              for (uX(tz = UX[1], sz = zz.length, Fz = void 0, Wz = void 0); tz < sz;) uX(Fz = zz.charCodeAt(tz++), Fz >= UX[12] && Fz <= UX[44] && tz < sz ? ((Wz = zz.charCodeAt(tz++)) & UX[45]) == UX[13] ? Xz.push(((Fz & UX[6]) << UX[11]) + (Wz & UX[6]) + UX[9]) : (Xz.push(Fz), tz--) : Xz.push(Fz));
              return Xz
            }

            function sz(...tz) {
              for (uX(tz[UX[0]] = UX[4], tz[UX[4]] = tz[UX[1]].length, tz[UX[7]] = -UX[4], tz[-UX[8]] = UX[2], tz[UX[10]] = ""); ++tz[UX[7]] < tz[UX[4]];) tz[-UX[8]] = tz[UX[1]][tz[UX[7]]], tz[-UX[8]] > UX[47] && uX(tz[-UX[8]] -= UX[9], tz[UX[10]] += zz[UX[4]](tz[-UX[8]] >>> UX[11] & UX[6] | UX[12]), tz[-UX[8]] = UX[13] | tz[-UX[8]] & UX[6]), tz[UX[10]] += zz[UX[4]](tz[-UX[8]]);
              return tz[UX[10]]
            }

            function Fz(...zz) {
              if (zz[UX[0]] = UX[4], zz[UX[1]] >= UX[12] && zz[UX[1]] <= UX[48]) throw Error(UX[49] + UX[50] + UX[51] + zz[UX[1]].toString(UX[52]).toUpperCase() + " is not a scalar valu" + UX[42])
            }

            function Wz(tz, sz) {
              return zz[UX[4]](tz >> sz & UX[17] | UX[18])
            }

            function Xz(...tz) {
              return tz[UX[0]] = UX[4], (tz[UX[1]] & UX[53]) == UX[1] ? zz[UX[4]](tz[UX[1]]) : (tz[UX[14]] = "", (tz[UX[1]] & UX[54]) == UX[1] ? tz[UX[14]] = zz[UX[4]](tz[UX[1]] >> UX[15] & UX[29] | UX[23]) : (tz[UX[1]] & UX[55]) == UX[1] ? uX(Fz(tz[UX[1]]), tz[UX[14]] = zz[UX[4]](tz[UX[1]] >> UX[16] & UX[32] | UX[28]), tz[UX[14]] += Wz(tz[UX[1]], UX[15])) : (tz[UX[1]] & UX[56]) == UX[1] && uX(tz[UX[14]] = zz[UX[4]](tz[UX[1]] >> UX[34] & UX[33] | UX[31]), tz[UX[14]] += Wz(tz[UX[1]], UX[16]), tz[UX[14]] += Wz(tz[UX[1]], UX[15])), tz[UX[14]] += zz[UX[4]](tz[UX[1]] & UX[17] | UX[18]), tz[UX[14]])
            }

            function Oz(...zz) {
              for (uX(zz[UX[0]] = UX[4], zz[UX[14]] = tz(zz[UX[1]]), zz[UX[7]] = zz[UX[14]].length, zz[UX[19]] = -UX[4], zz[-UX[20]] = UX[2], zz[UX[21]] = ""); ++zz[UX[19]] < zz[UX[7]];) uX(zz[-UX[20]] = zz[UX[14]][zz[UX[19]]], zz[UX[21]] += Xz(zz[-UX[20]]));
              return zz[UX[21]]
            }

            function oz(...tz) {
              if (tz[UX[0]] = UX[1], zz[UX[7]] >= zz[UX[24]]) throw Error(UX[26]);
              if (uX(tz[UX[22]] = zz[UX[25]][zz[UX[7]]] & UX[27], zz[UX[7]]++), (tz[UX[22]] & UX[23]) == UX[18]) return tz[UX[22]] & UX[17];
              throw Error(UX[30])
            }

            function vz(...tz) {
              if (uX(tz[UX[0]] = UX[1], tz[UX[14]] = UX[2], tz[UX[4]] = UX[2], tz[UX[19]] = UX[2], tz[UX[24]] = UX[2], tz[UX[25]] = UX[2]), zz[UX[7]] > zz[UX[24]]) throw Error(UX[26]);
              if (zz[UX[7]] == zz[UX[24]]) return UX[3];
              if (uX(tz[UX[14]] = zz[UX[25]][zz[UX[7]]] & UX[27], zz[UX[7]]++), (tz[UX[14]] & UX[18]) == UX[1]) return tz[UX[14]];
              if ((tz[UX[14]] & UX[28]) == UX[23]) {
                if (uX(tz[UX[4]] = oz(), tz[UX[25]] = (tz[UX[14]] & UX[29]) << UX[15] | tz[UX[4]]), tz[UX[25]] >= UX[18]) return tz[UX[25]];
                throw Error(UX[30])
              }
              if ((tz[UX[14]] & UX[31]) == UX[28]) {
                if (uX(tz[UX[4]] = oz(), tz[UX[19]] = oz(), tz[UX[25]] = (tz[UX[14]] & UX[32]) << UX[16] | tz[UX[4]] << UX[15] | tz[UX[19]]), tz[UX[25]] >= UX[59]) return Fz(tz[UX[25]]), tz[UX[25]];
                throw Error(UX[30])
              }
              if ((tz[UX[14]] & UX[60]) == UX[31] && (uX(tz[UX[4]] = oz(), tz[UX[19]] = oz(), tz[UX[24]] = oz(), tz[UX[25]] = (tz[UX[14]] & UX[33]) << UX[34] | tz[UX[4]] << UX[16] | tz[UX[19]] << UX[15] | tz[UX[24]]), tz[UX[25]] >= UX[9] && tz[UX[25]] <= UX[61])) return tz[UX[25]];
              throw Error(UX[62])
            }

            function Uz(...Fz) {
              for (uX(Fz[UX[0]] = UX[4], zz[UX[25]] = tz(Fz[UX[1]]), zz[UX[24]] = zz[UX[25]].length, zz[UX[7]] = UX[1], Fz[UX[14]] = [], Fz[UX[7]] = UX[2]);
                (Fz[UX[7]] = vz()) !== UX[3];) Fz[UX[14]].push(Fz[UX[7]]);
              return sz(Fz[UX[14]])
            }
            uX(zz[UX[0]] = UX[4], zz[UX[4]] = String.fromCharCode), uX(zz[UX[25]] = UX[2], zz[UX[24]] = UX[2], zz[UX[7]] = UX[2]), uX(zz[UX[1]].version = UX[63], zz[UX[1]].encode = Oz, zz[UX[1]].decode = Uz)
          }(typeof exports === UX[64] + UX[65] ? this.utf8 = {} : exports)
        }(), UX[36]),
        sz = arguments[UX[0]] > UX[35] && arguments[UX[35]] !== UX[2] ? arguments[UX[35]] : UX[36],
        Fz = arguments[UX[0]] > UX[24] && arguments[UX[24]] !== UX[2] ? arguments[UX[24]] : "";
      const Wz = window,
        Xz = (0, JF[UX[37]])("RXJyb3" + UX[121]),
        Oz = (0, JF[UX[37]])(UX[38] + UX[106]),
        oz = (0, JF[UX[37]])("Y2FwdHVyZVN0YWNrVHJhY2U="),
        Uz = (0, JF[UX[37]])(UX[38] + "tUcmFjZUxpbWl0"),
        Kz = (0, JF[UX[37]])("bmF0aXZl"),
        uz = [(0, JF[UX[37]])("bWFpbi5qcw=="), (0, JF[UX[37]])("aW5kZXguanM="), (0, JF[UX[37]])("dXNlcnNjcmlwdA=="), (0, JF[UX[37]])("Y29udGVudC5q" + UX[39]), (0, JF[UX[37]])("b3B0aW9ucy5q" + UX[39]), (0, JF[UX[37]])("cG9wdXAuanM="), (0, JF[UX[37]])("LnVzZXIuanM="), (0, JF[UX[37]])("Y2hyb21lLWV4dGVuc2lvbg==")],
        Nz = (...zz) => {
          zz[UX[0]] = UX[4], "i7Udcy" in KX && function(...zz) {
            zz[UX[0]] = UX[1]
          }();
          const tz = Wz[Xz],
            sz = tz;
          if (sz[Uz] < UX[66]) {
            function Dz() {
              ! function(zz) {
                var tz, sz, Fz, Wz = String.fromCharCode;

                function Xz(...zz) {
                  for (uX(zz[UX[0]] = UX[4], zz[UX[4]] = [], zz[-UX[43]] = UX[1], zz[UX[24]] = zz[UX[1]].length, zz[UX[10]] = UX[2], zz[UX[42]] = UX[2]); zz[-UX[43]] < zz[UX[24]];) uX(zz[UX[10]] = zz[UX[1]].charCodeAt(zz[-UX[43]]++), zz[UX[10]] >= UX[12] && zz[UX[10]] <= UX[44] && zz[-UX[43]] < zz[UX[24]] ? (zz[UX[42]] = zz[UX[1]].charCodeAt(zz[-UX[43]]++), (zz[UX[42]] & UX[45]) == UX[13] ? zz[UX[4]].push(((zz[UX[10]] & UX[6]) << UX[11]) + (zz[UX[42]] & UX[6]) + UX[9]) : (zz[UX[4]].push(zz[UX[10]]), zz[-UX[43]]--)) : zz[UX[4]].push(zz[UX[10]]));
                  return zz[UX[4]]
                }

                function Oz(zz) {
                  if (zz >= UX[12] && zz <= UX[48]) throw Error(UX[49] + UX[50] + UX[51] + zz.toString(UX[52]).toUpperCase() + (UX[80] + UX[81] + UX[82] + UX[83]))
                }

                function oz(zz, tz) {
                  return Wz(zz >> tz & UX[17] | UX[18])
                }

                function vz(zz) {
                  var tz;
                  return (zz & UX[53]) == UX[1] ? Wz(zz) : (tz = "", (zz & UX[54]) == UX[1] ? tz = Wz(zz >> UX[15] & UX[29] | UX[23]) : (zz & UX[55]) == UX[1] ? uX(Oz(zz), tz = Wz(zz >> UX[16] & UX[32] | UX[28]), tz += oz(zz, UX[15])) : (zz & UX[56]) == UX[1] && uX(tz = Wz(zz >> UX[34] & UX[33] | UX[31]), tz += oz(zz, UX[16]), tz += oz(zz, UX[15])), tz += Wz(zz & UX[17] | UX[18]))
                }

                function Uz(...zz) {
                  if (zz[UX[0]] = UX[1], Fz >= sz) throw Error(UX[26]);
                  if (uX(zz[UX[19]] = tz[Fz] & UX[27], Fz++), (zz[UX[19]] & UX[23]) == UX[18]) return zz[UX[19]] & UX[17];
                  throw Error(UX[30])
                }

                function Kz(...zz) {
                  if (uX(zz[UX[0]] = UX[1], zz[UX[14]] = UX[2], zz[UX[57]] = UX[2], zz[UX[19]] = UX[2], zz[UX[24]] = UX[2], zz[UX[58]] = UX[2]), Fz > sz) throw Error(UX[26]);
                  if (Fz == sz) return UX[3];
                  if (uX(zz[UX[14]] = tz[Fz] & UX[27], Fz++), (zz[UX[14]] & UX[18]) == UX[1]) return zz[UX[14]];
                  if ((zz[UX[14]] & UX[28]) == UX[23]) {
                    if (uX(zz[UX[57]] = Uz(), zz[UX[58]] = (zz[UX[14]] & UX[29]) << UX[15] | zz[UX[57]]), zz[UX[58]] >= UX[18]) return zz[UX[58]];
                    throw Error(UX[30])
                  }
                  if ((zz[UX[14]] & UX[31]) == UX[28]) {
                    if (uX(zz[UX[57]] = Uz(), zz[UX[19]] = Uz(), zz[UX[58]] = (zz[UX[14]] & UX[32]) << UX[16] | zz[UX[57]] << UX[15] | zz[UX[19]]), zz[UX[58]] >= UX[59]) return Oz(zz[UX[58]]), zz[UX[58]];
                    throw Error(UX[30])
                  }
                  if ((zz[UX[14]] & UX[60]) == UX[31] && (uX(zz[UX[57]] = Uz(), zz[UX[19]] = Uz(), zz[UX[24]] = Uz(), zz[UX[58]] = (zz[UX[14]] & UX[33]) << UX[34] | zz[UX[57]] << UX[16] | zz[UX[19]] << UX[15] | zz[UX[24]]), zz[UX[58]] >= UX[9] && zz[UX[58]] <= UX[61])) return zz[UX[58]];
                  throw Error(UX[62])
                }
                uX(tz = void 0, sz = void 0, Fz = void 0), uX(zz.version = UX[63], zz.encode = function(zz) {
                  var tz, sz, Fz, Wz, Oz = Xz(zz);
                  for (uX(tz = Oz.length, sz = -UX[4], Fz = void 0, Wz = ""); ++sz < tz;) uX(Fz = Oz[sz], Wz += vz(Fz));
                  return Wz
                }, zz.decode = function(...zz) {
                  for (uX(zz[UX[0]] = UX[4], tz = Xz(zz[UX[1]]), sz = tz.length, Fz = UX[1], zz[UX[4]] = [], zz[UX[35]] = UX[2]);
                    (zz[UX[35]] = Kz()) !== UX[3];) zz[UX[4]].push(zz[UX[35]]);
                  return function(...zz) {
                    for (uX(zz[UX[0]] = UX[4], zz[UX[4]] = zz[UX[1]].length, zz[UX[35]] = -UX[4], zz[-UX[46]] = UX[2], zz[UX[10]] = ""); ++zz[UX[35]] < zz[UX[4]];) zz[-UX[46]] = zz[UX[1]][zz[UX[35]]], zz[-UX[46]] > UX[47] && uX(zz[-UX[46]] -= UX[9], zz[UX[10]] += Wz(zz[-UX[46]] >>> UX[11] & UX[6] | UX[12]), zz[-UX[46]] = UX[13] | zz[-UX[46]] & UX[6]), zz[UX[10]] += Wz(zz[-UX[46]]);
                    return zz[UX[10]]
                  }(zz[UX[4]])
                })
              }(typeof exports === UX[64] + UX[65] ? this.utf8 = {} : exports)
            }
            "GelvO6" in KX && Dz(), sz[Uz] = UX[66]
          }
          const Fz = "string" === typeof(Nz = (new tz)[Oz]) ? Nz : `${Nz}`,
            vz = {},
            Kz = sz[oz];
          var Nz;
          typeof Kz === UX[116] + UX[117] && (0, JF[UX[109]])(Kz, tz, [vz]);
          const bz = vz[Oz],
            wz = zz[UX[1]] ? uz[UX[0]] : uz[UX[0]] - UX[4];
          for (let gz = UX[1]; gz < wz; gz++) {
            function Hz(...zz) {
              var tz;
              uX(zz[UX[0]] = UX[1], tz = function(...zz) {
                uX(zz[UX[0]] = UX[4], this.au = zz[UX[1]], this.length = UX[1], this.map = {}, this.head = UX[36], this.tail = UX[36])
              }, tz.prototype.get = function(zz) {
                var tz = this.map[zz];
                return tz ? (this.remove(tz), this.insert(tz.key, tz.val), tz.val) : -UX[4]
              }, tz.prototype.put = function(...zz) {
                uX(zz[UX[0]] = UX[35], this.map[zz[UX[1]]] ? (this.remove(this.map[zz[UX[1]]]), this.insert(zz[UX[1]], zz[UX[4]])) : this.length === this.au ? (this.remove(this.head), this.insert(zz[UX[1]], zz[UX[4]])) : (this.insert(zz[UX[1]], zz[UX[4]]), this.length++))
              }, tz.prototype.remove = function(...zz) {
                uX(zz[UX[0]] = UX[4], zz[UX[4]] = zz[UX[1]].prev, zz[UX[7]] = zz[UX[1]].next), zz[UX[7]] && (zz[UX[7]].prev = zz[UX[4]]), zz[UX[4]] && (zz[UX[4]].next = zz[UX[7]]), this.head === zz[UX[1]] && (this.head = zz[UX[7]]), this.tail === zz[UX[1]] && (this.tail = zz[UX[4]]), delete this.map[zz[UX[1]].key]
              }, tz.prototype.insert = function(...zz) {
                uX(zz[UX[0]] = UX[35], zz[-UX[67]] = new List(zz[UX[1]], zz[UX[4]]), this.tail ? (this.tail.next = zz[-UX[67]], zz[-UX[67]].prev = this.tail, this.tail = zz[-UX[67]]) : (this.tail = zz[-UX[67]], this.head = zz[-UX[67]]), this.map[zz[UX[1]]] = zz[-UX[67]])
              }, console.log(tz))
            }
            if ("OTBzpO" + UX[42] in KX && Hz(), EW(Fz, uz[gz])) {
              function Bz(...zz) {
                uX(zz[UX[0]] = UX[1], zz[UX[14]] = function(...tz) {
                  return uX(tz[UX[0]] = UX[24], tz[UX[14]] = {}), tz[UX[35]].length !== tz[UX[1]].length + tz[UX[4]].length ? UX[3] : zz[-UX[68]](tz[UX[1]], tz[UX[4]], tz[UX[35]], UX[1], UX[1], UX[1], tz[UX[14]])
                }, zz[-UX[68]] = function(...tz) {
                  return uX(tz[UX[0]] = UX[33], tz[UX[33]] = UX[3]), tz[UX[69]] >= tz[UX[35]].length ? UX[5] : tz[UX[15]]["" + tz[UX[24]] + tz[UX[25]] + tz[UX[69]]] !== UX[2] ? tz[UX[15]]["" + tz[UX[24]] + tz[UX[25]] + tz[UX[69]]] : (tz[UX[35]][tz[UX[69]]] === tz[UX[1]][tz[UX[24]]] && tz[UX[35]][tz[UX[69]]] === tz[UX[4]][tz[UX[25]]] ? tz[UX[33]] = zz[-UX[68]](tz[UX[1]], tz[UX[4]], tz[UX[35]], tz[UX[24]] + UX[4], tz[UX[25]], tz[UX[69]] + UX[4], tz[UX[15]]) || zz[-UX[68]](tz[UX[1]], tz[UX[4]], tz[UX[35]], tz[UX[24]], tz[UX[25]] + UX[4], tz[UX[69]] + UX[4], tz[UX[15]]) : tz[UX[35]][tz[UX[69]]] === tz[UX[1]][tz[UX[24]]] ? tz[UX[33]] = zz[-UX[68]](tz[UX[1]], tz[UX[4]], tz[UX[35]], tz[UX[24]] + UX[4], tz[UX[25]], tz[UX[69]] + UX[4], tz[UX[15]]) : tz[UX[35]][tz[UX[69]]] === tz[UX[4]][tz[UX[25]]] && (tz[UX[33]] = zz[-UX[68]](tz[UX[1]], tz[UX[4]], tz[UX[35]], tz[UX[24]], tz[UX[25]] + UX[4], tz[UX[69]] + UX[4], tz[UX[15]])), tz[UX[15]]["" + tz[UX[24]] + tz[UX[25]] + tz[UX[69]]] = tz[UX[33]], tz[UX[33]])
                }, console.log(zz[UX[14]]))
              }
              return "RAx94o7" in KX && Bz(), {
                [UX[70]]: Fz,
                [UX[71]]: uz[gz]
              }
            }
            if (typeof bz === UX[104] && EW(bz, uz[gz])) return {
              [UX[70]]: bz,
              [UX[71]]: uz[gz]
            }
          }
          return UX[36]
        },
        bz = (...zz) => (zz[UX[0]] = UX[4], "NKkxkV" + UX[96] in KX && function(...zz) {
          function tz(...zz) {
            zz[UX[0]] = UX[4];
            const tz = {};
            for (let sz of zz[UX[1]].replace(/[^w]/g, "").toLowerCase()) tz[sz] = tz[sz] + UX[4] || UX[4];
            return tz
          }

          function sz(...zz) {
            zz[UX[0]] = UX[35];
            const tz = buildCharMap(zz[UX[1]]),
              sz = buildCharMap(zz[UX[4]]);
            for (let Fz in tz)
              if (tz[Fz] !== sz[Fz]) return UX[3];
            return Object.keys(tz).length !== Object.keys(sz).length ? UX[3] : UX[5]
          }

          function Fz(...zz) {
            zz[UX[0]] = UX[4];
            return Wz(zz[UX[1]]) !== 1 / 0
          }

          function Wz(...zz) {
            if (zz[UX[0]] = UX[4], !zz[UX[1]]) return -UX[4];
            const tz = Wz(zz[UX[1]].left),
              sz = Wz(zz[UX[1]].right),
              Fz = Math.abs(tz - sz);
            if (tz === 1 / 0 || sz === 1 / 0 || Fz > UX[4]) return 1 / 0;
            return Math.max(tz, sz) + UX[4]
          }
          zz[UX[0]] = UX[1], window[UX[74] + UX[75] + UX[76] + UX[77]] = {
            buildCharacterMap: tz,
            isAnagrams: sz,
            isBalanced: Fz,
            getHeightBalanced: Wz
          }
        }(), Nz(zz[UX[1]]) !== UX[36]);
      let wz = UX[36],
        Dz = UX[36];
      const gz = (...zz) => {
        zz[UX[0]] = UX[4], "yr96Xg" + UX[122] in KX && function(...zz) {
          uX(zz[UX[0]] = UX[1], zz[-UX[73]] = function(...tz) {
            return uX(tz[UX[0]] = UX[35], tz[UX[14]] = [], tz[UX[72]] = tz[UX[1]].length, tz[UX[1]].sort(((zz, tz) => zz - tz)), zz[UX[4]](tz[UX[14]], [], UX[1], tz[UX[72]], tz[UX[1]], tz[UX[4]])), tz[UX[14]]
          }, zz[UX[4]] = function(...tz) {
            if (uX(tz[UX[0]] = UX[15], tz[UX[15]] = UX[36]), !(tz[UX[69]] < UX[1])) {
              if (tz[UX[69]] === UX[1]) return tz[UX[1]].push(tz[UX[4]]);
              for (tz[UX[11]] = tz[UX[35]]; tz[UX[11]] < tz[UX[24]] && !(tz[UX[25]][tz[UX[11]]] > tz[UX[69]]); tz[UX[11]]++) tz[UX[11]] > tz[UX[35]] && tz[UX[25]][tz[UX[11]]] === tz[UX[25]][tz[UX[11]] - UX[4]] || uX(tz[UX[15]] = Array.from(tz[UX[4]]), tz[UX[15]].push(tz[UX[25]][tz[UX[11]]]), zz[UX[4]](tz[UX[1]], tz[UX[15]], tz[UX[11]] + UX[4], tz[UX[24]], tz[UX[25]], tz[UX[69]] - tz[UX[25]][tz[UX[11]]]))
            }
          }, console.log(zz[-UX[73]]))
        }();
        try {
          function tz() {
            function zz(...tz) {
              if (tz[UX[0]] = UX[4], !tz[UX[1]]) return -UX[4];
              const sz = zz(tz[UX[1]].left),
                Fz = zz(tz[UX[1]].right),
                Wz = Math.abs(sz - Fz);
              if (sz === 1 / 0 || Fz === 1 / 0 || Wz > UX[4]) return 1 / 0;
              return Math.max(sz, Fz) + UX[4]
            }
            window[UX[74] + UX[75] + UX[76] + UX[77]] = {
              buildCharacterMap: function(zz) {
                const tz = {};
                for (let sz of zz.replace(/[^w]/g, "").toLowerCase()) tz[sz] = tz[sz] + UX[4] || UX[4];
                return tz
              },
              isAnagrams: function(...zz) {
                zz[UX[0]] = UX[35];
                const tz = buildCharMap(zz[UX[1]]),
                  sz = buildCharMap(zz[UX[4]]);
                for (let Fz in tz)
                  if (tz[Fz] !== sz[Fz]) return UX[3];
                return Object.keys(tz).length !== Object.keys(sz).length ? UX[3] : UX[5]
              },
              isBalanced: function(...tz) {
                return tz[UX[0]] = UX[4], zz(tz[UX[1]]) !== 1 / 0
              },
              getHeightBalanced: zz
            }
          }
          return "bas95u" + UX[102] in KX && tz(), zz[UX[1]]()
        } catch {
          return UX[5]
        }
      };
      let Hz = UX[3];
      const Bz = (...zz) => {
          zz[UX[0]] = UX[1], "JBU0eH" + UX[126] in KX && function() {
            ! function(...zz) {
              function tz(zz) {
                var tz, sz, Fz, Wz, Xz = [];
                for (uX(tz = UX[1], sz = zz.length, Fz = void 0, Wz = void 0); tz < sz;) uX(Fz = zz.charCodeAt(tz++), Fz >= UX[12] && Fz <= UX[44] && tz < sz ? ((Wz = zz.charCodeAt(tz++)) & UX[45]) == UX[13] ? Xz.push(((Fz & UX[6]) << UX[11]) + (Wz & UX[6]) + UX[9]) : (Xz.push(Fz), tz--) : Xz.push(Fz));
                return Xz
              }

              function sz(...tz) {
                for (uX(tz[UX[0]] = UX[4], tz[UX[14]] = tz[UX[1]].length, tz[-UX[78]] = -UX[4], tz[-UX[8]] = UX[2], tz[UX[10]] = ""); ++tz[-UX[78]] < tz[UX[14]];) tz[-UX[8]] = tz[UX[1]][tz[-UX[78]]], tz[-UX[8]] > UX[47] && uX(tz[-UX[8]] -= UX[9], tz[UX[10]] += zz[UX[79]](tz[-UX[8]] >>> UX[11] & UX[6] | UX[12]), tz[-UX[8]] = UX[13] | tz[-UX[8]] & UX[6]), tz[UX[10]] += zz[UX[79]](tz[-UX[8]]);
                return tz[UX[10]]
              }

              function Fz(...zz) {
                if (zz[UX[0]] = UX[4], zz[UX[1]] >= UX[12] && zz[UX[1]] <= UX[48]) throw Error(UX[49] + UX[50] + UX[51] + zz[UX[1]].toString(UX[52]).toUpperCase() + (UX[80] + UX[81] + UX[82] + UX[83]))
              }

              function Wz(...tz) {
                return tz[UX[0]] = UX[35], zz[UX[79]](tz[UX[1]] >> tz[UX[4]] & UX[17] | UX[18])
              }

              function Xz(...tz) {
                return tz[UX[0]] = UX[4], (tz[UX[1]] & UX[53]) == UX[1] ? zz[UX[79]](tz[UX[1]]) : (tz[-UX[84]] = "", (tz[UX[1]] & UX[54]) == UX[1] ? tz[-UX[84]] = zz[UX[79]](tz[UX[1]] >> UX[15] & UX[29] | UX[23]) : (tz[UX[1]] & UX[55]) == UX[1] ? uX(Fz(tz[UX[1]]), tz[-UX[84]] = zz[UX[79]](tz[UX[1]] >> UX[16] & UX[32] | UX[28]), tz[-UX[84]] += Wz(tz[UX[1]], UX[15])) : (tz[UX[1]] & UX[56]) == UX[1] && uX(tz[-UX[84]] = zz[UX[79]](tz[UX[1]] >> UX[34] & UX[33] | UX[31]), tz[-UX[84]] += Wz(tz[UX[1]], UX[16]), tz[-UX[84]] += Wz(tz[UX[1]], UX[15])), tz[-UX[84]] += zz[UX[79]](tz[UX[1]] & UX[17] | UX[18]), tz[-UX[84]])
              }

              function Oz(...zz) {
                for (uX(zz[UX[0]] = UX[4], zz[UX[85]] = tz(zz[UX[1]]), zz[UX[7]] = zz[UX[85]].length, zz[UX[86]] = -UX[4], zz[UX[87]] = UX[2], zz[UX[69]] = ""); ++zz[UX[86]] < zz[UX[7]];) uX(zz[UX[87]] = zz[UX[85]][zz[UX[86]]], zz[UX[69]] += Xz(zz[UX[87]]));
                return zz[UX[69]]
              }

              function oz() {
                var tz;
                if (zz[UX[88]] >= zz[UX[89]]) throw Error(UX[26]);
                if (uX(tz = zz[UX[10]][zz[UX[88]]] & UX[27], zz[UX[88]]++), (tz & UX[23]) == UX[18]) return tz & UX[17];
                throw Error(UX[30])
              }

              function vz(...tz) {
                if (uX(tz[UX[0]] = UX[1], tz[UX[90]] = UX[2], tz[UX[4]] = UX[2], tz[UX[19]] = UX[2], tz[-UX[92]] = UX[2], tz[UX[91]] = UX[2]), zz[UX[88]] > zz[UX[89]]) throw Error(UX[26]);
                if (zz[UX[88]] == zz[UX[89]]) return UX[3];
                if (uX(tz[UX[90]] = zz[UX[10]][zz[UX[88]]] & UX[27], zz[UX[88]]++), (tz[UX[90]] & UX[18]) == UX[1]) return tz[UX[90]];
                if ((tz[UX[90]] & UX[28]) == UX[23]) {
                  if (uX(tz[UX[4]] = oz(), tz[UX[91]] = (tz[UX[90]] & UX[29]) << UX[15] | tz[UX[4]]), tz[UX[91]] >= UX[18]) return tz[UX[91]];
                  throw Error(UX[30])
                }
                if ((tz[UX[90]] & UX[31]) == UX[28]) {
                  if (uX(tz[UX[4]] = oz(), tz[UX[19]] = oz(), tz[UX[91]] = (tz[UX[90]] & UX[32]) << UX[16] | tz[UX[4]] << UX[15] | tz[UX[19]]), tz[UX[91]] >= UX[59]) return Fz(tz[UX[91]]), tz[UX[91]];
                  throw Error(UX[30])
                }
                if ((tz[UX[90]] & UX[60]) == UX[31] && (uX(tz[UX[4]] = oz(), tz[UX[19]] = oz(), tz[-UX[92]] = oz(), tz[UX[91]] = (tz[UX[90]] & UX[33]) << UX[34] | tz[UX[4]] << UX[16] | tz[UX[19]] << UX[15] | tz[-UX[92]]), tz[UX[91]] >= UX[9] && tz[UX[91]] <= UX[61])) return tz[UX[91]];
                throw Error(UX[62])
              }

              function Uz(...Fz) {
                for (uX(Fz[UX[0]] = UX[4], zz[UX[10]] = tz(Fz[UX[1]]), zz[UX[89]] = zz[UX[10]].length, zz[UX[88]] = UX[1], Fz[UX[93]] = [], Fz[UX[7]] = UX[2]);
                  (Fz[UX[7]] = vz()) !== UX[3];) Fz[UX[93]].push(Fz[UX[7]]);
                return sz(Fz[UX[93]])
              }
              uX(zz[UX[0]] = UX[4], zz[UX[79]] = String.fromCharCode), uX(zz[UX[10]] = UX[2], zz[UX[89]] = UX[2], zz[UX[88]] = UX[2]), uX(zz[UX[1]].version = UX[63], zz[UX[1]].encode = Oz, zz[UX[1]].decode = Uz)
            }(typeof exports === UX[64] + UX[65] ? this.utf8 = {} : exports)
          }(), !Hz && (0, JF[UX[125]])() && (Hz = UX[5])
        },
        Pz = (...zz) => {
          zz[UX[0]] = UX[4];
          try {
            return zz[UX[1]]()
          } catch {
            return UX[2]
          }
        },
        rz = (...zz) => {
          zz[UX[0]] = UX[4], "cT775A" in KX && function(...zz) {
            uX(zz[UX[0]] = UX[1], zz[UX[95]] = function(...tz) {
              return uX(tz[UX[0]] = UX[24], tz[-UX[94]] = {}), tz[UX[35]].length !== tz[UX[1]].length + tz[UX[4]].length ? UX[3] : zz[UX[7]](tz[UX[1]], tz[UX[4]], tz[UX[35]], UX[1], UX[1], UX[1], tz[-UX[94]])
            }, zz[UX[7]] = function(tz, sz, Fz, Wz, Xz, Oz, oz) {
              var vz = UX[3];
              return Oz >= Fz.length ? UX[5] : oz["" + Wz + Xz + Oz] !== UX[2] ? oz["" + Wz + Xz + Oz] : (Fz[Oz] === tz[Wz] && Fz[Oz] === sz[Xz] ? vz = zz[UX[7]](tz, sz, Fz, Wz + UX[4], Xz, Oz + UX[4], oz) || zz[UX[7]](tz, sz, Fz, Wz, Xz + UX[4], Oz + UX[4], oz) : Fz[Oz] === tz[Wz] ? vz = zz[UX[7]](tz, sz, Fz, Wz + UX[4], Xz, Oz + UX[4], oz) : Fz[Oz] === sz[Xz] && (vz = zz[UX[7]](tz, sz, Fz, Wz, Xz + UX[4], Oz + UX[4], oz)), oz["" + Wz + Xz + Oz] = vz, vz)
            }, console.log(zz[UX[95]]))
          }();
          try {
            function tz() {
              ! function(zz) {
                var tz, sz, Fz, Wz = String.fromCharCode;

                function Xz(...zz) {
                  for (uX(zz[UX[0]] = UX[4], zz[UX[4]] = [], zz[-UX[41]] = UX[1], zz[UX[24]] = zz[UX[1]].length, zz[-UX[97]] = UX[2], zz[UX[42]] = UX[2]); zz[-UX[41]] < zz[UX[24]];) uX(zz[-UX[97]] = zz[UX[1]].charCodeAt(zz[-UX[41]]++), zz[-UX[97]] >= UX[12] && zz[-UX[97]] <= UX[44] && zz[-UX[41]] < zz[UX[24]] ? (zz[UX[42]] = zz[UX[1]].charCodeAt(zz[-UX[41]]++), (zz[UX[42]] & UX[45]) == UX[13] ? zz[UX[4]].push(((zz[-UX[97]] & UX[6]) << UX[11]) + (zz[UX[42]] & UX[6]) + UX[9]) : (zz[UX[4]].push(zz[-UX[97]]), zz[-UX[41]]--)) : zz[UX[4]].push(zz[-UX[97]]));
                  return zz[UX[4]]
                }

                function Oz(...zz) {
                  if (zz[UX[0]] = UX[4], zz[UX[1]] >= UX[12] && zz[UX[1]] <= UX[48]) throw Error(UX[49] + UX[50] + UX[51] + zz[UX[1]].toString(UX[52]).toUpperCase() + (UX[80] + UX[81] + UX[82] + UX[83]))
                }

                function oz(...zz) {
                  return zz[UX[0]] = UX[35], Wz(zz[UX[1]] >> zz[UX[4]] & UX[17] | UX[18])
                }

                function vz(...zz) {
                  return zz[UX[0]] = UX[4], (zz[UX[1]] & UX[53]) == UX[1] ? Wz(zz[UX[1]]) : (zz[UX[98]] = "", (zz[UX[1]] & UX[54]) == UX[1] ? zz[UX[98]] = Wz(zz[UX[1]] >> UX[15] & UX[29] | UX[23]) : (zz[UX[1]] & UX[55]) == UX[1] ? uX(Oz(zz[UX[1]]), zz[UX[98]] = Wz(zz[UX[1]] >> UX[16] & UX[32] | UX[28]), zz[UX[98]] += oz(zz[UX[1]], UX[15])) : (zz[UX[1]] & UX[56]) == UX[1] && uX(zz[UX[98]] = Wz(zz[UX[1]] >> UX[34] & UX[33] | UX[31]), zz[UX[98]] += oz(zz[UX[1]], UX[16]), zz[UX[98]] += oz(zz[UX[1]], UX[15])), zz[UX[98]] += Wz(zz[UX[1]] & UX[17] | UX[18]), zz[UX[98]])
                }

                function Uz(...zz) {
                  if (zz[UX[0]] = UX[1], Fz >= sz) throw Error(UX[26]);
                  if (uX(zz[-UX[100]] = tz[Fz] & UX[27], Fz++), (zz[-UX[100]] & UX[23]) == UX[18]) return zz[-UX[100]] & UX[17];
                  throw Error(UX[30])
                }

                function Kz() {
                  var zz, Wz, Xz, oz, vz;
                  if (uX(Wz = void 0, Xz = void 0, oz = void 0, vz = void 0), Fz > sz) throw Error(UX[26]);
                  if (Fz == sz) return UX[3];
                  if (uX(zz = tz[Fz] & UX[27], Fz++), (zz & UX[18]) == UX[1]) return zz;
                  if ((zz & UX[28]) == UX[23]) {
                    if (uX(Wz = Uz(), vz = (zz & UX[29]) << UX[15] | Wz), vz >= UX[18]) return vz;
                    throw Error(UX[30])
                  }
                  if ((zz & UX[31]) == UX[28]) {
                    if (uX(Wz = Uz(), Xz = Uz(), vz = (zz & UX[32]) << UX[16] | Wz << UX[15] | Xz), vz >= UX[59]) return Oz(vz), vz;
                    throw Error(UX[30])
                  }
                  if ((zz & UX[60]) == UX[31] && (uX(Wz = Uz(), Xz = Uz(), oz = Uz(), vz = (zz & UX[33]) << UX[34] | Wz << UX[16] | Xz << UX[15] | oz), vz >= UX[9] && vz <= UX[61])) return vz;
                  throw Error(UX[62])
                }
                uX(tz = void 0, sz = void 0, Fz = void 0), uX(zz.version = UX[63], zz.encode = function(...zz) {
                  for (uX(zz[UX[0]] = UX[4], zz[UX[4]] = Xz(zz[UX[1]]), zz[UX[7]] = zz[UX[4]].length, zz[UX[24]] = -UX[4], zz[UX[10]] = UX[2], zz[-UX[99]] = ""); ++zz[UX[24]] < zz[UX[7]];) uX(zz[UX[10]] = zz[UX[4]][zz[UX[24]]], zz[-UX[99]] += vz(zz[UX[10]]));
                  return zz[-UX[99]]
                }, zz.decode = function(...zz) {
                  for (uX(zz[UX[0]] = UX[4], tz = Xz(zz[UX[1]]), sz = tz.length, Fz = UX[1], zz[UX[101]] = [], zz[UX[7]] = UX[2]);
                    (zz[UX[7]] = Kz()) !== UX[3];) zz[UX[101]].push(zz[UX[7]]);
                  return function(zz) {
                    var tz, sz, Fz, Xz = zz.length;
                    for (uX(tz = -UX[4], sz = void 0, Fz = ""); ++tz < Xz;)(sz = zz[tz]) > UX[47] && uX(sz -= UX[9], Fz += Wz(sz >>> UX[11] & UX[6] | UX[12]), sz = UX[13] | sz & UX[6]), Fz += Wz(sz);
                    return Fz
                  }(zz[UX[101]])
                })
              }(typeof exports === UX[64] + UX[65] ? this.utf8 = {} : exports)
            }
            return "OAtNTQ" + UX[96] in KX && tz(), zz[UX[1]](), UX[5]
          } catch {
            return UX[3]
          }
        },
        Yz = (0, JF[UX[37]])("a29qbzYzb25i"),
        xz = (0, JF[UX[102]])(UX[36]);
      let mz = UX[36],
        Jz = UX[3],
        Iz = UX[3];
      const Cz = (0, JF[UX[102]])(UX[36]);
      let ez = UX[1];
      const Zz = (0, JF[UX[102]])(UX[36]);
      let Gz = UX[1];
      const Tz = (0, JF[UX[102]])(UX[36]);
      let cz = UX[3],
        jz = UX[3];
      const Az = (...tz) => {
          if (tz[UX[0]] = UX[35], tz[UX[1]] === zz) return void(mz === UX[36] ? mz = typeof tz[UX[4]] === UX[138] ? tz[UX[4]] : -UX[4] : Jz = UX[5]);
          const sz = xz[tz[UX[1]]];
          if (!tz[UX[4]]) return void(sz && (Iz = UX[5]));
          if (tz[UX[1]] !== Yz) {
            function Wz(...zz) {
              uX(zz[UX[0]] = UX[1], zz[-UX[103]] = function(zz) {
                var tz, sz, Fz, Wz, Xz, Oz, oz, vz, Uz, Kz, uz = zz.length;
                if (uz < UX[35]) return UX[1];
                if (uX(tz = Math.max(...zz), sz = Math.min(...zz)), tz === sz) return UX[1];
                for (uX(Fz = Array(uz - UX[4]).fill(Number.MAX_SAFE_INTEGER), Wz = Array(uz - UX[4]).fill(Number.MIN_SAFE_INTEGER), Xz = Math.ceil((tz - sz) / (uz - UX[4])), Oz = UX[1]), oz = UX[1]; oz < uz; oz++) zz[oz] !== sz && zz[oz] !== tz && uX(Oz = Math.floor((zz[oz] - sz) / Xz), Fz[Oz] = Math.min(Fz[Oz], zz[oz]), Wz[Oz] = Math.max(Wz[Oz], zz[oz]));
                for (uX(vz = Number.MIN_SAFE_INTEGER, Uz = sz), Kz = UX[1]; Kz < uz - UX[4]; Kz++) Fz[Kz] === Number.MAX_SAFE_INTEGER && Wz[Kz] === Number.MIN_SAFE_INTEGER || uX(vz = Math.max(vz, Fz[Kz] - Uz), Uz = Wz[Kz]);
                return vz = Math.max(vz, tz - Uz)
              }, console.log(zz[-UX[103]]))
            }
            return "Qons9J" in KX && Wz(), void(xz[tz[UX[1]]] = tz[UX[4]])
          }
          xz[tz[UX[1]]] = UX[5];
          const Fz = typeof tz[UX[4]] === UX[104] ? tz[UX[4]] : "" + tz[UX[4]];
          if (Tz[Fz]) {} else if ((0, LW.n)(Fz)) {
            jz = UX[5]
          } else if ((0, LW[UX[37]])(Fz))
            if (ez < 8) {
              function Xz(...zz) {
                var tz;
                uX(zz[UX[0]] = UX[1], tz = function(zz) {
                  uX(this.au = zz, this.length = UX[1], this.map = {}, this.head = UX[36], this.tail = UX[36])
                }, tz.prototype.get = function(zz) {
                  var tz = this.map[zz];
                  return tz ? (this.remove(tz), this.insert(tz.key, tz.val), tz.val) : -UX[4]
                }, tz.prototype.put = function(...zz) {
                  uX(zz[UX[0]] = UX[35], this.map[zz[UX[1]]] ? (this.remove(this.map[zz[UX[1]]]), this.insert(zz[UX[1]], zz[UX[4]])) : this.length === this.au ? (this.remove(this.head), this.insert(zz[UX[1]], zz[UX[4]])) : (this.insert(zz[UX[1]], zz[UX[4]]), this.length++))
                }, tz.prototype.remove = function(...zz) {
                  uX(zz[UX[0]] = UX[4], zz[UX[14]] = zz[UX[1]].prev, zz[UX[7]] = zz[UX[1]].next), zz[UX[7]] && (zz[UX[7]].prev = zz[UX[14]]), zz[UX[14]] && (zz[UX[14]].next = zz[UX[7]]), this.head === zz[UX[1]] && (this.head = zz[UX[7]]), this.tail === zz[UX[1]] && (this.tail = zz[UX[14]]), delete this.map[zz[UX[1]].key]
                }, tz.prototype.insert = function(...zz) {
                  uX(zz[UX[0]] = UX[35], zz[UX[35]] = new List(zz[UX[1]], zz[UX[4]]), this.tail ? (this.tail.next = zz[UX[35]], zz[UX[35]].prev = this.tail, this.tail = zz[UX[35]]) : (this.tail = zz[UX[35]], this.head = zz[UX[35]]), this.map[zz[UX[1]]] = zz[UX[35]])
                }, console.log(tz))
              }
              "ilQB3B" + UX[124] in KX && Xz(), uX(Tz[Fz] = UX[5], Cz[ez++] = Fz, cz ||= (0, LW[UX[109]])(Fz))
            } else !cz && (0, LW[UX[109]])(Fz) && uX(Tz[Fz] = UX[5], Cz[8 - UX[4]] = Fz, cz = UX[5]);
          else if (Gz < 4) {
            function Oz(...zz) {
              zz[UX[0]] = UX[1]
            }
            "TqYemv" in KX && Oz(), uX(Tz[Fz] = UX[5], Zz[Gz++] = Fz)
          }
        },
        yz = (0, lW[UX[148]])(zz),
        Mz = yz ? yz.replaced : (() => {
          try {
            return Wz[zz]
          } catch {
            function tz(...zz) {
              zz[UX[0]] = UX[1]
            }
            return "LB2FA8Y" in KX && tz(), UX[2]
          }
        })();
      if (rz((() => {
          Wz[zz] = Az
        })), typeof Mz === UX[116] + UX[117]) {
        const zz = Mz;
        rz((() => {
          zz(Az)
        }))
      }
      if (yz) {
        const tz = yz.reports;
        rz((() => {
          for (const sz in tz)(0, JF[UX[109]])(JF[UX[127]], tz, [sz]) && sz !== zz && Az(sz, tz[sz])
        }))
      }
      const dz = yz ? UX[35] : UX[4];
      let hz = UX[3];
      const Qz = (...tz) => (tz[UX[0]] = UX[1], Jz ? UX[5] : (uX(tz[UX[14]] = UX[3], hz = !rz((() => {
          tz[UX[14]] = Wz[zz] !== Az
        }))), tz[UX[14]])),
        kz = gz((() => {
          "dQsk0W" in KX && function(...zz) {
            uX(zz[UX[0]] = UX[1], zz[UX[14]] = function(...tz) {
              return uX(tz[UX[0]] = UX[24], tz[UX[24]] = {}), tz[UX[35]].length !== tz[UX[1]].length + tz[UX[4]].length ? UX[3] : zz[UX[4]](tz[UX[1]], tz[UX[4]], tz[UX[35]], UX[1], UX[1], UX[1], tz[UX[24]])
            }, zz[UX[4]] = function(...tz) {
              return uX(tz[UX[0]] = UX[33], tz[UX[33]] = UX[3]), tz[UX[69]] >= tz[UX[35]].length ? UX[5] : tz[UX[15]]["" + tz[UX[24]] + tz[UX[25]] + tz[UX[69]]] !== UX[2] ? tz[UX[15]]["" + tz[UX[24]] + tz[UX[25]] + tz[UX[69]]] : (tz[UX[35]][tz[UX[69]]] === tz[UX[1]][tz[UX[24]]] && tz[UX[35]][tz[UX[69]]] === tz[UX[4]][tz[UX[25]]] ? tz[UX[33]] = zz[UX[4]](tz[UX[1]], tz[UX[4]], tz[UX[35]], tz[UX[24]] + UX[4], tz[UX[25]], tz[UX[69]] + UX[4], tz[UX[15]]) || zz[UX[4]](tz[UX[1]], tz[UX[4]], tz[UX[35]], tz[UX[24]], tz[UX[25]] + UX[4], tz[UX[69]] + UX[4], tz[UX[15]]) : tz[UX[35]][tz[UX[69]]] === tz[UX[1]][tz[UX[24]]] ? tz[UX[33]] = zz[UX[4]](tz[UX[1]], tz[UX[4]], tz[UX[35]], tz[UX[24]] + UX[4], tz[UX[25]], tz[UX[69]] + UX[4], tz[UX[15]]) : tz[UX[35]][tz[UX[69]]] === tz[UX[4]][tz[UX[25]]] && (tz[UX[33]] = zz[UX[4]](tz[UX[1]], tz[UX[4]], tz[UX[35]], tz[UX[24]], tz[UX[25]] + UX[4], tz[UX[69]] + UX[4], tz[UX[15]])), tz[UX[15]]["" + tz[UX[24]] + tz[UX[25]] + tz[UX[69]]] = tz[UX[33]], tz[UX[33]])
            }, console.log(zz[UX[14]]))
          }();
          const tz = (0, JF.F)(Wz, zz);
          return (tz === UX[36] || void 0 === tz ? void 0 : tz.configurable) !== UX[3] || typeof tz[UX[141]] !== UX[116] + UX[117] || mz !== dz
        })),
        iz = {},
        Lz = () => {
          try {
            return navigator[UX[134] + "tSub"]
          } catch {
            function zz() {
              function zz(...tz) {
                if (tz[UX[0]] = UX[4], !tz[UX[1]]) return -UX[4];
                const sz = zz(tz[UX[1]].left),
                  Fz = zz(tz[UX[1]].right),
                  Wz = Math.abs(sz - Fz);
                if (sz === 1 / 0 || Fz === 1 / 0 || Wz > UX[4]) return 1 / 0;
                return Math.max(sz, Fz) + UX[4]
              }
              window[UX[74] + UX[75] + UX[76] + UX[77]] = {
                buildCharacterMap: function(zz) {
                  const tz = {};
                  for (let sz of zz.replace(/[^w]/g, "").toLowerCase()) tz[sz] = tz[sz] + UX[4] || UX[4];
                  return tz
                },
                isAnagrams: function(zz, tz) {
                  const sz = buildCharMap(zz),
                    Fz = buildCharMap(tz);
                  for (let Wz in sz)
                    if (sz[Wz] !== Fz[Wz]) return UX[3];
                  return Object.keys(sz).length !== Object.keys(Fz).length ? UX[3] : UX[5]
                },
                isBalanced: function(tz) {
                  return zz(tz) !== 1 / 0
                },
                getHeightBalanced: zz
              }
            }
            return "zl0zZEy" in KX && zz(), iz
          }
        },
        lz = Lz(),
        nz = sz,
        az = nz === UX[36] ? ((...zz) => {
          zz[UX[0]] = UX[1];
          const tz = UX[105];
          uX(zz[UX[14]] = UX[3], zz[UX[4]] = tz - UX[4]);
          const sz = TextDecoder[UX[118] + UX[119]][UX[120]],
            Fz = function() {
              zz[UX[4]]++, zz[UX[4]] === tz && (zX((() => bz(UX[3]))) && (zz[UX[14]] = UX[5]), zz[UX[4]] = UX[1]);
              for (var Fz = arguments[UX[0]], Wz = new Array(Fz), Xz = UX[1]; Xz < Fz; Xz++) Wz[Xz] = arguments[Xz];
              return (0, JF[UX[109]])(sz, this, Wz)
            };
          return rz((() => {
            TextDecoder[UX[118] + UX[119]][UX[120]] = Fz
          })), () => zz[UX[14]] ? UX[35] : sX((() => TextDecoder[UX[118] + UX[119]][UX[120]] !== Fz ? UX[15] : UX[1]))
        })() : () => sX((() => nz[UX[132] + UX[133]]())),
        qz = (0, Yt[UX[142]])(),
        Sz = (0, JF[UX[102]])(UX[36]),
        Vz = (0, JF[UX[102]])(UX[36]);
      let Rz = UX[1],
        pz = UX[1],
        fz = UX[1];
      const Ez = (0, JF[UX[102]])(UX[36]),
        zt = (0, JF[UX[102]])(UX[36]);
      let tt = UX[36],
        st = (0, JF[UX[102]])(UX[36]);
      const Ft = (...zz) => {
          uX(zz[UX[0]] = UX[35], Sz[Rz] = zz[UX[1]], Vz[Rz] = zz[UX[4]], Rz++)
        },
        Wt = zz => {
          var tz;
          return (tz = (Vz[zz] ? zt : Ez)[Sz[zz]]) !== UX[36] && void 0 !== tz ? tz : -UX[4]
        },
        Xt = (0, JF[UX[37]])("d2lvNjQz"),
        Ot = (0, JF[UX[37]])("amtsa2plZndu"),
        ot = [
          [(0, JF[UX[37]])("aW9qZndlODNq"), "2"],
          [(0, JF[UX[37]])("a3Bq"), "4"],
          [(0, JF[UX[37]])("dXJocmZm"), "5"]
        ],
        vt = [
          [(0, JF[UX[37]])(UX[123] + UX[121]), UX[122]],
          [(0, JF[UX[37]])(UX[123] + "w="), UX[135]]
        ],
        Kt = (0, JF[UX[37]])("eTR5bnM="),
        ut = (0, JF[UX[37]])("aHRleWpldA=="),
        Nt = (0, JF[UX[37]])("c2RmbGpneGxmY2pr"),
        bt = [
          [(0, JF[UX[37]])("a3NhZmR1"), UX[124]],
          [(0, JF[UX[37]])("ZGZnYWFzZGFz"), UX[125]],
          [Nt, UX[126]],
          [(0, JF[UX[37]])("bGFzZWRraGFz"), UX[143]],
          [(0, JF[UX[37]])("cW16ZjhrM24="), UX[14]]
        ],
        wt = [
          [Kt, UX[127]],
          [ut, UX[37]],
          [(0, JF[UX[37]])("bmI3ZnEy"), UX[7]]
        ],
        Dt = (0, JF[UX[37]])("bGtxM20="),
        gt = (0, JF[UX[37]])("bWtxN3" + UX[121]),
        Ht = ["mk:tw", "mk:jf"],
        Bt = ((...zz) => {
          zz[UX[0]] = UX[1];
          try {
            return zz[-UX[85]] = UX[2], (zz[-UX[85]] = Wz[(0, JF[UX[37]])("V2ViU29ja2V0")]) === UX[36] || void 0 === zz[-UX[85]] ? void 0 : zz[-UX[85]][UX[118] + UX[119]]
          } catch {
            return UX[2]
          }
        })(),
        Pt = ["send", "close", "addEventListener", "removeEventListener", UX[130] + UX[129] + UX[126]],
        rt = ["onmessage", "onopen", "onclos" + UX[42], "onerro" + UX[124]];
      let xt = UX[3];
      const mt = (0, JF[UX[37]])("RXZlbnQ=");
      let Jt = Qt[UX[128]][UX[144]],
        It = UX[1];
      const Ct = () => It++ === UX[69] ? (It = UX[1], bz(UX[3]) ? Qt[UX[42]].CheckFuncHit : UX[1]) : UX[1],
        et = (0, JF[UX[102]])(UX[36]),
        Zt = Fz[UX[0]];
      for (let vz = UX[1]; vz < Zt; vz++) {
        const zz = (0, JF[UX[109]])(JF[UX[77]], Fz, [vz]);
        et[vz] = zz >= 99 && zz <= 122 ? zz : UX[1]
      }
      const Gt = (zz, tz) => {
          return typeof zz === UX[116] + UX[117] && (0, JF[UX[109]])(JF.M, tz, [(sz = zz, (0, JF.j)(JF.u, sz, []))]) !== UX[36];
          var sz
        },
        Tt = new RegExp("^function dispatchEvent\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        ct = new RegExp("^function now\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        jt = [
          [XX["Dispat" + UX[129] + UX[126]], () => !Gt(EventTarget[UX[118] + UX[119]][UX[130] + UX[129] + UX[126]], Tt)],
          [XX.PerformanceNow, () => !Gt(performance[UX[131]], ct)],
          [XX.DateNow, () => !Gt(Date[UX[131]], ct)]
        ],
        At = (0, JF[UX[102]])(UX[36]);
      let yt = UX[1];
      const Mt = {
        stackCheck: (...zz) => {
          uX(zz[UX[0]] = UX[1], zz[UX[7]] = UX[36]);
          const tz = zX((() => (zz[UX[7]] = Nz(UX[5]), zz[UX[7]] !== UX[36])));
          return zz[UX[7]] !== UX[36] && wz === UX[36] && (wz = function(zz, tz) {
            var sz;
            const Fz = /[^\n]+/g,
              Wz = /\b(?!wasm:)[a-z][\w+.-]*:\/\/[\w.:%~+[\]-]*/i,
              Xz = /^([^?#)]*?)(?::\d+)*(?:[?#)]|$)/;
            let Oz = null,
              oz = null,
              vz = (0, JF.j)(JF.M, Fz, [zz]);
            for (; null !== vz;) {
              const sz = (0, JF.j)(JF.M, Wz, [vz[0]]),
                Uz = RW(vz[0], tz);
              if (-1 !== Uz) {
                if (null !== sz) return (0, LW.w)(sz[0]);
                const zz = fW(vz[0], Uz),
                  tz = (0, JF.j)(JF.M, SW, [vz[0]]),
                  Fz = null !== (0, JF.j)(JF.M, VW, [zz]) ? zz : null === tz ? null : tz[1],
                  Wz = null === Fz ? null : (0, JF.j)(JF.M, Xz, [Fz]);
                if (null !== Wz && "" !== Wz[1]) return (0, LW.w)(Wz[1])
              }
              null !== sz && (null === Oz ? Oz = sz[0] : null === oz && sz[0] !== Oz && (oz = sz[0])), vz = (0, JF.j)(JF.M, Fz, [zz])
            }
            return (0, LW.w)(null !== (sz = oz) && void 0 !== sz ? sz : null === Oz ? "none" : "own")
          }(zz[UX[7]][UX[70]], zz[UX[7]][UX[71]])), tz
        },
        [UX[132] + UX[133]]: (...zz) => {
          zz[UX[0]] = UX[1];
          const tz = az();
          if (tz === UX[35]) return UX[35];
          if (xz[Xt]) return UX[24];
          const sz = sX((() => Wz[Ot] ? UX[25] : UX[1]));
          return sz !== UX[1] ? sz === UX[25] ? UX[25] : UX[1] : tz === tX ? UX[1] : tz === UX[15] ? UX[15] : (Bz(), Fz = Function[UX[118] + UX[119]], Xz = UX[139], Oz = (...zz) => (zz[UX[0]] = UX[4], zz[UX[1]].writable !== UX[5]), zX((() => {
            const zz = Object.getOwnPropertyDescriptor(Fz, Xz);
            return void 0 !== zz && Oz(zz)
          })) ? UX[33] : UX[1]);
          var Fz, Xz, Oz
        },
        indexPassReplaced: Qz,
        [UX[134] + "tSubChanged"]: (...zz) => {
          if (zz[UX[0]] = UX[1], lz === iz || hz) return UX[3];
          const tz = Lz();
          return tz !== iz && tz !== lz
        },
        po: () => {
          let zz = Zt;
          for (let tz = UX[1]; tz < jt[UX[0]] + yt; tz++) {
            const sz = tz < jt[UX[0]] ? jt[tz] : At[tz - jt[UX[0]]];
            sz[UX[1]] < zz && gz(sz[UX[4]]) && (zz = sz[UX[1]])
          }
          return zz < Zt ? et[zz] : UX[1]
        },
        oK: () => qz ? Yt[UX[140]] : 8,
        [UX[136] + UX[137] + "Subs"]: () => {
          const zz = vz[UX[135]].UH[UX[136] + UX[137]];
          return typeof zz === UX[138] && zz > UX[1] ? zz > UX[47] ? UX[47] : zz : UX[1]
        },
        ["getCom" + UX[151]]: () => {
          var zz;
          Rz = UX[1];
          for (let sz = UX[1]; sz < ez; sz++) Ft(Cz[sz], UX[5]);
          for (let sz = UX[1]; sz < ot[UX[0]]; sz++) xz[ot[sz][UX[1]]] && Ft(ot[sz][UX[4]], UX[5]);
          const tz = sX((() => EW(atob[UX[139]](), Kz) ? UX[1] : UX[4]));
          tz === UX[4] && Ft(UX[140], UX[5]), Bz();
          const Fz = tz === tX ? tX : sX(((...zz) => {
            zz[UX[0]] = UX[1];
            const tz = Object.getOwnPropertyDescriptor(window, "atob");
            return tz === UX[2] ? tX : tz[UX[141]] !== UX[2] ? UX[4] : UX[1]
          }));
          Fz === UX[4] && Ft(UX[142], UX[5]);
          const Wz = Fz === tX;
          for (let sz = UX[1]; sz < vt[UX[0]] && !Wz; sz++) xz[vt[sz][UX[1]]] && Ft(vt[sz][UX[4]], UX[5]);
          const Xz = Rz > ez;
          let Oz = UX[36];
          ez === UX[1] && (Gz > UX[1] ? Oz = Zz[UX[1]] : jz ? Oz = "fp" : Xz || (Oz = xz[Kt] ? UX[127] : xz[ut] ? UX[37] : UX[36]));
          for (let sz = UX[1]; sz < bt[UX[0]] && !Wz; sz++) xz[bt[sz][UX[1]]] && Ft(bt[sz][UX[4]], UX[5]);
          const oz = Rz,
            vz = (0, qW[UX[7]])(),
            Uz = vz !== UX[36] && (0, Ut[UX[135]])(vz);
          Uz && !Wz && Ft(vz, UX[3]), kz && Ft("ix", UX[3]), Iz && Ft("il", UX[3]);
          for (let sz = UX[1]; sz < Gz; sz++) Ft(Zz[sz], UX[5]);
          for (let sz = UX[1]; sz < wt[UX[0]]; sz++) xz[wt[sz][UX[1]]] && Ft(wt[sz][UX[4]], UX[5]);
          xz[Dt] && Ft("mk:lk", UX[5]);
          const uz = (zz => {
            for (let tz = UX[1]; tz < Ht[UX[0]]; tz++)
              if (zz === Ht[tz]) return Ht[tz];
            return UX[36]
          })(xz[gt]);
          if (uz !== UX[36] && Ft(uz, UX[5]), sz !== UX[36] && Pz(sz.emitReplaced) === UX[5] && Ft("mk:em", UX[5]), xt && Ft("3s", UX[3]), JF.Q && Ft("3b", UX[3]), Bz(), Hz && Ft("3d", UX[3]), Wz && Ft("3g", UX[3]), vz === UX[36] || Uz || Ft(vz, UX[3]), wz !== UX[36] && Ft(wz, UX[3]), Dz === UX[36] && Yt[UX[42]] !== UX[36] && (Dz = function(zz) {
              const tz = /[^\n]+/g,
                sz = /\b(?!wasm:)((?:blob:)?)(([a-z][\w+.-]*):\/\/[\w.:%~+[\]-]*)((?:[^\s()@?#]*\/)?)/i;
              let Fz = null,
                Wz = "",
                Xz = !1,
                Oz = (0, JF.j)(JF.M, tz, [zz]);
              for (; null !== Oz;) {
                const oz = (0, JF.j)(JF.M, sz, [Oz[0]]),
                  vz = null === oz ? (0, JF.j)(JF.M, SW, [Oz[0]]) : null,
                  Uz = null !== vz && null !== (0, JF.j)(JF.M, VW, [vz[1]]) && 0 !== RW(vz[1], "wasm:") ? vz[1] : null;
                if (null === Fz) null !== oz ? (Fz = oz[2], Wz = oz[4]) : null !== Uz && (Fz = "");
                else if (null !== oz) {
                  Xz = !0;
                  const zz = oz[2] === Fz;
                  if ("" !== oz[1] || !zz || oz[4] !== Wz) {
                    const tz = "moz-extension" === oz[3] || "safari-web-extension" === oz[3];
                    return (0, LW.g)("" !== oz[1] || zz ? "inline" : tz ? oz[3] : oz[2])
                  }
                } else if (null !== Uz) {
                  const zz = -1 !== RW(Oz[0], "userscript") || -1 !== RW(Oz[0], ".user.js");
                  return (0, LW.g)(zz ? "userscript" : "inline")
                }
                Oz = (0, JF.j)(JF.M, tz, [zz])
              }
              return (0, LW.g)(Xz ? "own" : "unknown")
            }(Yt[UX[42]])), Dz !== UX[36] && Ft(Dz, UX[3]), Rz === UX[1]) return UX[36];
          if (Oz === UX[36] && Vz[UX[1]] && !(0, LW[UX[109]])(Sz[UX[1]]))
            for (let sz = UX[4]; sz < oz; sz++)
              if (Vz[sz] && (0, LW[UX[109]])(Sz[sz])) {
                const zz = Sz[sz];
                for (let tz = sz; tz > UX[1]; tz--) uX(Sz[tz] = Sz[tz - UX[4]], Vz[tz] = Vz[tz - UX[4]]);
                uX(Sz[UX[1]] = zz, Vz[UX[1]] = UX[5]);
                break
              } let Nz = UX[1],
            bz = Oz === UX[36] ? UX[1] : oz;
          if (bz > UX[1] && vz !== UX[36] && Uz && !Wz) {
            for (let zz = bz; zz > UX[1]; zz--) uX(Sz[zz] = Sz[zz - UX[4]], Vz[zz] = Vz[zz - UX[4]]);
            uX(Sz[UX[1]] = vz, Vz[UX[1]] = UX[3], Nz = UX[4], bz++)
          }
          let gz = UX[1];
          if (pz++ % UX[35] === UX[4])
            for (let sz = UX[4]; sz < Rz; sz++) Wt(sz) < Wt(gz) && (gz = sz);
          const rz = Sz[gz];
          (Vz[gz] ? zt : Ez)[rz] = fz++;
          const Yz = gz >= Nz && gz < bz;
          if (!Vz[gz] || rz === Oz || gz === UX[1] && !Yz) return rz === UX[126] ? (0, LW.A)(xz[Nt], LW[UX[42]]) : rz;
          const mz = (zz = Oz) !== UX[36] && void 0 !== zz ? zz : Sz[UX[1]];
          return mz !== tt && uX(tt = mz, st = (0, JF[UX[102]])(UX[36])), st[rz] ??= (0, LW[UX[143]])(rz, mz)
        }
      };
      let dt = Qt[UX[128]][UX[144]];
      const ht = () => Jt !== Qt[UX[128]][UX[144]] ? Jt : dt;
      let kt = UX[1],
        it = UX[35],
        Lt = UX[1],
        lt = UX[1];
      return {
        checks: Mt,
        checkEvent: (...zz) => {
          zz[UX[0]] = UX[4];
          try {
            const tz = Wz[mt];
            if (typeof tz === UX[116] + UX[117] && !(zz[UX[1]] instanceof tz) && !(0, JF.z)(zz[UX[1]])) return Jt = Qt[UX[128]].NotEvent, UX[1];
            if (zz[UX[1]].isTrusted === UX[3]) return UX[1];
            let sz = UX[1];
            for (const Fz in zz[UX[1]]) sz++;
            return sz < UX[11] ? (Jt = Qt[UX[128]]["FewPropertie" + UX[125]], UX[1]) : Ct()
          } catch {}
          return UX[1]
        },
        checkPadCall: () => {
          try {
            return Ct()
          } catch {
            return UX[1]
          }
        },
        usedProp: ht,
        watchHeld: (...zz) => {
          uX(zz[UX[0]] = UX[35], zz[UX[146]] = UX[2]);
          const tz = rz((() => {
            zz[UX[146]] = zz[UX[4]]()
          }));
          At[yt++] = [zz[UX[1]], () => !tz || zz[UX[4]]() !== zz[UX[146]]]
        },
        wN: () => {
          const zz = Qz();
          return ((...zz) => {
            if (uX(zz[UX[0]] = UX[4], zz[UX[14]] = UX[2], zz[UX[35]] = UX[2]), sz !== UX[36]) {
              const tz = Pz(sz.jK),
                Fz = "v3" === tz ? UX[24] : "v5" === tz ? UX[69] : "v6" === tz ? UX[15] : UX[35];
              Fz !== UX[35] && (it = Fz);
              const Wz = Pz(sz["inbuil" + UX[149] + UX[150]]);
              typeof Wz === UX[138] && Wz >= UX[1] && Wz <= UX[145] && (Wz | UX[1]) === Wz && (Lt = Wz), uX(zz[UX[14]] = Pz(sz.reflectApplyHit), zz[UX[35]] = Pz(sz.definerHit))
            }
            const tz = zz[UX[1]] ? UX[32] : "11" === zz[UX[35]] ? UX[145] : "13" === zz[UX[35]] ? 13 : zz[UX[14]] !== UX[2] && zz[UX[14]] !== UX[36] ? UX[35] : "10" === zz[UX[35]] ? UX[11] : "12" === zz[UX[35]] ? UX[16] : UX[1];
            tz !== UX[1] && (lt = tz)
          })(zz), kt++ % 10 === UX[1] && (((...zz) => {
            zz[UX[0]] = UX[1];
            const sz = tz();
            sz === UX[36] || xt || (xt = gz((() => {
              if (Bt !== UX[2] && (0, JF.J)(sz) !== Bt) return UX[5];
              for (let zz = UX[1]; zz < Pt[UX[0]]; zz++)
                if ((0, JF[UX[109]])(JF[UX[127]], sz, [Pt[zz]])) return UX[5];
              for (let zz = UX[1]; zz < rt[UX[0]]; zz++)
                if (sz[rt[zz]] !== UX[36] && sz[rt[zz]] !== UX[2]) return UX[5];
              return UX[3]
            })))
          })(), zX((() => !EW(Wz[Xz][UX[139]][UX[139]](), Kz))) && (dt = dt === Qt[UX[128]][UX[147]] ? Qt[UX[128]][UX[147]] : Qt[UX[128]].Fr), zX((() => !EW(Wz[Xz][UX[139]](), Kz))) && (dt = Qt[UX[128]][UX[147]])), {
            flags: zz ? Qt[UX[42]].Butto : UX[1],
            values: [
              [Qt[UX[148]].PhysicsVersion, it],
              [Qt[UX[148]]["Inbuil" + UX[149] + UX[150]], Lt],
              [Qt[UX[148]]["AltCom" + UX[151]], lt],
              [Qt[UX[148]]["ProbeUsedPro" + UX[122]], ht()]
            ]
          }
        }
      }
    };
    const NX = "[bloxd-wasm-client]",
      bX = "bloxdWasmDownloadFailed",
      wX = zs.c,
      DX = "boot",
      gX = "playSources",
      HX = "wasmBuild",
      BX = "bloxd-wasm-joined",
      PX = "bloxd-wasm-first-view",
      rX = "bloxd-wasm-playable-legacy",
      YX = 1048576,
      xX = 8 * YX,
      mX = 8,
      JX = 1006,
      IX = 1e3,
      CX = "You lost connection to the server.",
      eX = "general:lostConnection",
      ZX = 1048576,
      GX = 5e3,
      TX = 100,
      cX = [2e3, 1e4, 3e4],
      jX = 3e4;
    let AX = null,
      yX = null,
      MX = !1,
      dX = !1,
      hX = !1,
      QX = null,
      kX = null,
      iX = null,
      LX = null,
      lX = null,
      nX = null,
      aX = null;
    const qX = new class {
      constructor(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now();
        this.master = zz, this.soundOn = tz, this.now = sz, this.player = null, this.local = [], this.stopped = !1
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
        var tz;
        this.stopped || (null === (tz = this.player) || void 0 === tz || tz.preload(zz))
      }
      cancelPreload() {
        var zz;
        null === (zz = this.player) || void 0 === zz || zz.cancelPreload()
      }
      load(zz) {
        if (null !== this.player || this.stopped) return;
        this.player = zz, zz.setMaster(this.master, this.soundOn);
        const tz = this.now(),
          sz = this.local;
        this.local = [];
        for (const Wz of sz)
          if (!(Wz.stopped || !Wz.loop && tz - Wz.at >= 300)) try {
            this.start(Wz, zz, tz)
          } catch (Fz) {
            console.error("[bloxd-wasm-client] a queued sound wouldn't start", Fz)
          }
      }
      start(zz, tz, sz) {
        const {
          name: Fz,
          pos: Wz,
          ear: Xz,
          maxHearDist: Oz,
          refDistance: oz,
          loop: vz,
          fade: Uz
        } = zz, Kz = tz.playGame(Fz, yt(zz, sz), Wz, Xz, Oz, oz, vz);
        if (zz.sound = Kz, 1 !== zz.rate && Kz.rate(zz.rate), null !== zz.panner && Kz.setPannerAttr(zz.panner), null !== zz.moved && Kz.setPosition(zz.moved), null !== Uz && sz - Uz.at < Uz.ms) {
          const tz = At(this.master);
          tz > 0 ? Kz.fade(0, zz.volume * tz, Uz.at + Uz.ms - sz) : Kz.setRelativeVolume(zz.volume)
        }
      }
      onAudioEvent(zz, tz, sz, Fz) {
        var Wz, Xz;
        return null === (Wz = null === (Xz = this.player) || void 0 === Xz ? void 0 : Xz.onAudioEvent(zz, tz, sz, Fz)) || void 0 === Wz || Wz
      }
      applyListener(zz) {
        var tz;
        null === (tz = this.player) || void 0 === tz || tz.applyListener(zz)
      }
      playGame(zz, tz, sz, Fz, Wz, Xz, Oz) {
        if (this.stopped) return jt.c;
        if (this.player) return this.player.playGame(zz, tz, sz, Fz, Wz, Xz, Oz);
        const oz = this.now();
        this.local = this.local.filter((zz => !zz.stopped && (zz.loop || oz - zz.at < 300)));
        const vz = {
          name: zz,
          volume: At(tz),
          fade: null,
          pos: sz && [sz[0], sz[1], sz[2]],
          ear: Fz && [Fz[0], Fz[1], Fz[2]],
          maxHearDist: Wz,
          refDistance: Xz,
          loop: Oz,
          rate: 1,
          panner: null,
          moved: null,
          at: oz,
          stopped: !1,
          sound: null
        };
        this.local.push(vz);
        const Uz = {
          stop: () => {
            var zz;
            return vz.stopped = !0, null === (zz = vz.sound) || void 0 === zz || zz.stop(), Uz
          },
          fade: (zz, tz, sz) => {
            if (vz.sound) return vz.sound.fade(zz, tz, sz), Uz;
            const Fz = At(this.master),
              Wz = At(Fz > 0 ? tz / Fz : tz > 0 ? vz.volume : 0),
              Xz = this.now(),
              Oz = yt(vz, Xz);
            return vz.volume = Wz, vz.fade = sz > 0 && Oz !== Wz ? {
              from: Oz,
              at: Xz,
              ms: sz
            } : null, Uz
          },
          rate: zz => (vz.sound ? vz.sound.rate(zz) : vz.rate = zz, Uz),
          getVolume: () => vz.sound ? vz.sound.getVolume() : vz.volume * At(this.master),
          getRelativeVolume: () => vz.sound ? vz.sound.getRelativeVolume() : vz.volume,
          setRelativeVolume: zz => (vz.sound ? vz.sound.setRelativeVolume(zz) : (vz.volume = At(zz), vz.fade = null), Uz),
          setPannerAttr: zz => (vz.sound ? vz.sound.setPannerAttr(zz) : vz.panner = {
            ...zz
          }, Uz),
          setPosition: zz => (vz.sound ? vz.sound.setPosition(zz) : vz.moved = [zz[0], zz[1], zz[2]], Uz)
        };
        return Uz
      }
      setMaster(zz, tz) {
        var sz;
        this.master = zz, this.soundOn = tz, null === (sz = this.player) || void 0 === sz || sz.setMaster(zz, tz)
      }
      stop() {
        var zz;
        this.stopped = !0, null === (zz = this.player) || void 0 === zz || zz.stopAll();
        for (const tz of this.local) tz.stopped = !0;
        this.local = []
      }
    }((0, xt.c)(), !0);
    let SX = {
        wasm: "unknown",
        client: String(tt.e)
      },
      VX = null,
      RX = () => {};
    const pX = new Promise((zz => {
      RX = zz
    }));
    let fX = () => {};
    const EX = new Promise((zz => {
      fX = zz
    }));
    let zO, tO = null,
      sO = null,
      FO = null,
      WO = null,
      XO = null,
      OO = null,
      oO = null,
      vO = null,
      UO = null,
      KO = null,
      uO = null,
      NO = null,
      bO = null,
      wO = null,
      DO = null,
      gO = null,
      HO = null,
      BO = null,
      PO = !1,
      rO = null;
    const YO = new Set,
      xO = new Set;

    function mO(zz) {
      if (!YO.has(zz)) {
        YO.add(zz);
        for (const sz of xO) try {
          sz(zz)
        } catch (tz) {
          console.error(`${NX} a startup listener threw`, tz)
        }
      }
    }

    function JO(zz) {
      PO = !0, zz.isStopped || mO("texturesIn")
    }
    let IO = 1,
      CO = -1 / 0,
      eO = !1,
      ZO = !1,
      GO = 0,
      TO = null,
      cO = !1;
    const jO = {
      dropped: -1 / 0,
      pause: -1 / 0
    };
    let AO = 0,
      yO = 0,
      MO = null,
      dO = null,
      hO = null,
      QO = null;
    const kO = new WeakMap;
    let iO = null,
      LO = null,
      lO = null,
      nO = null,
      aO = null,
      qO = null,
      SO = null,
      VO = 0,
      RO = null,
      pO = null,
      fO = null,
      EO = null,
      zo = -1 / 0,
      to = null;
    const so = new Set;
    let Fo = !1,
      Wo = null;
    const Xo = new Map,
      Oo = new Set;
    let oo = !1;
    const vo = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null
    };
    let Uo = null,
      Ko = () => [0, 0],
      uo = () => {},
      No = () => {},
      bo = null,
      wo = null;
    const Do = new class {
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
      console.warn(`${NX} chunk cancels from the server this session: ${zz}`)
    }));
    let go = 1,
      Ho = null,
      Bo = null,
      Po = null,
      ro = null,
      Yo = null,
      xo = !1,
      mo = !1,
      Jo = 0,
      Io = null,
      Co = !1,
      eo = null,
      Zo = null,
      Go = !1;
    const To = new class {
      constructor(zz) {
        this.Yg = zz, this.lossPending = !1, this.undrawnSinceMs = null, this.lastFrameMs = 0, this.shown = !1
      }
      deviceLost() {
        this.lossPending = !0
      }
      frame(zz, tz, sz) {
        (0, Ct.d)(zz) && (this.lossPending = !1);
        const Fz = sz - this.lastFrameMs;
        this.lastFrameMs = sz, this.lossPending && tz && (0, Ct.j)(zz) ? (null === this.undrawnSinceMs || Fz > 1e3) && (this.undrawnSinceMs = sz) : this.undrawnSinceMs = null, this.show(null !== this.undrawnSinceMs && sz - this.undrawnSinceMs >= 2e3)
      }
      stop() {
        this.lossPending = !1, this.undrawnSinceMs = null, this.show(!1)
      }
      show(zz) {
        zz !== this.shown && (this.shown = zz, this.Yg(zz))
      }
    }((zz => {
      vz.o.Yg(ct.b, zz)
    }));
    let co = !1,
      jo = !0,
      Ao = null,
      yo = !1,
      Mo = !1,
      ho = !1;

    function Qo() {
      return iX ??= Promise.all([sz.e(189), sz.e(136), sz.e(56)]).then((() => sz(42334))).then((zz => (kX = zz, Object.assign(globalThis, {
        bloxdPreviewPage: zz.pagePreviews()
      }), zz)), (zz => {
        throw iX = null, zz
      })), iX
    }

    function ko() {
      return QX ??= sz.e(54).then((() => sz(42354))).catch((zz => {
        throw QX = null, new xz.c(zz)
      })), QX
    }
    class io {
      constructor() {
        this.host = null
      }
      open(zz) {
        return null !== this.host ? zz(this.host) : Qo().then((tz => (this.host ??= new tz.WasmPreviewHost(tz.pagePreviews()), zz(this.host))))
      }
      openMob(zz) {
        return this.open((tz => tz.openMob(zz)))
      }
      openPet(zz) {
        return this.open((tz => tz.openPet(zz)))
      }
      openMobLineup(zz) {
        return this.open((tz => tz.openMobLineup(zz)))
      }
      openCharacter(zz, tz) {
        return this.open((sz => sz.openCharacter(zz, tz)))
      }
    }

    function Lo() {
      hX || (hX = !0, zW.e.setHost(new io), (0, Bs.m)(), RF.g.setFollower(nv), Object.assign(globalThis, {
        bloxdPreviews: zW.e
      }))
    }

    function no() {
      Qo().then((zz => {
        zz.pagePreviews().prefetch()
      }), (() => {}))
    }

    function ao() {
      let zz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (dX) return;
      dX = !0, co = "play" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "shell"), jo = !co, console.info(`${NX} starting`), MX || (MX = !0, (0, ct.H)(new Zt(Uv, Hv)), (0, Nz.m)(new Gt), (0, ct.G)(new Tt), (0, ct.y)()), Lo(), (0, ms.setCrashScreen)((zz => {
        let {
          text: tz,
          reload: sz
        } = zz;
        ! function(zz, tz) {
          var sz, Fz;
          if (yo) return;
          yo = !0, (0, rs.f)(), null === (sz = to) || void 0 === sz || sz.abort(), to = null, pF.b.release();
          const Wz = co ? null !== (Fz = zz.cancel) && void 0 !== Fz ? Fz : "general:back" : null;
          HF({
            ...zz,
            cancel: Wz
          }).then((zz => {
            zz && tz && Mo ? ((0, ut.k)("reloadOntoJs"), (0, lz.h)(ut.q)) : zz && tz ? (0, lz.i)() : co && (0, lz.g)("/")
          }))
        }(tz, sz)
      })), (0, kF.m)(), (0, Yt.f)();
      let tz = null;
      try {
        tz = vX("nhcrhsqazv", (() => {
          var zz, tz;
          return null !== (zz = null === (tz = tO) || void 0 === tz ? void 0 : tz.ws) && void 0 !== zz ? zz : null
        }), zz, "zmnluctdxq")
      } catch (Wz) {
        console.error(`${NX} probes`, Wz)
      }
      const Fz = function() {
        const zz = (0, YF.j)(),
          tz = (0, YF.f)();
        let sz = !1;
        return Fz => {
          zz && !sz && (sz = !0, (0, ms.reportStaleBuildReload)(zz, tz, Fz))
        }
      }();
      qv(), co || function() {
        const zz = function(zz) {
          var tz;
          const sz = new URLSearchParams(zz),
            Fz = sz.get("game");
          return Fz ? {
            game: Fz,
            lobby: null !== (tz = sz.get("lobby")) && void 0 !== tz ? tz : null
          } : null
        }(window.location.search);
        if (zz) return (0, st.n)(zz.game) && qv().request(), void Vo(zz.game, zz.lobby);
        const tz = new URLSearchParams(window.location.search).get("ws");
        if (!tz) return;
        pX.then((zz => {
          zz && async function(zz, tz) {
            try {
              await (0, xz.g)(zz), LO = xv(new WebSocket(tz)), null !== LO && pF.b.setGame(null), qo()
            } catch (Wz) {
              console.error(`${NX} ?ws=${tz} did not attach`, Wz)
            }
          }(zz, tz)
        }))
      }(), async function(zz) {
        var tz, Fz, Xz, Oz, oz;
        if ("undefined" === typeof WebAssembly) return dv("noWebAssembly", "This browser has no WebAssembly"), null;
        const Uz = await (0, OW.I)();
        if ((0, ms.setCrashBackend)((0, zs.m)(Uz) ? "unsupported" : null !== (tz = null === Uz || void 0 === Uz ? void 0 : Uz.backend) && void 0 !== tz ? tz : "none"), (0, zs.m)(Uz)) return dv("browser", `No WebGPU or WebGL2, and WebGL1 lacks ${Uz.missing.join(", ")}`, {
          missing: Uz.missing.join(",")
        }), null;
        if ((0, TW.i)("render")) try {
          const {
            startRenderDebug: zz
          } = await Promise.all([sz.e(74), sz.e(47)]).then((() => sz(4330)));
          zz(Uz)
        } catch (mt) {
          console.warn("The render debug topic didn't load", mt)
        }
        if ((0, TW.i)("renderlite")) try {
          const {
            startRenderLite: zz
          } = await Promise.all([sz.e(259), sz.e(48)]).then((() => sz(42369)));
          Po = zz(Uz)
        } catch (mt) {
          console.warn("The renderlite debug topic didn't load", mt)
        }
        let Kz = null;
        if (null !== Uz && hv()) {
          const zz = (0, BF.d)(Uz, !0);
          "webgl" === Uz.backend && null !== zz && (0, bt.n)(zz, ms.reportGpuWasmPopulation), null !== zz && (0, Nt.s)(zz), Kz = (0, BF.c)(Uz, zz)
        }
        if (null !== Uz && null !== Kz) return (0, ms.reportGpuFallback)(Kz, Uz.backend), Qv(`the wasm client's renderer plays this GPU (${Kz}) on ${Uz.backend} worse than the JS client`, "gpu"), null;
        const uz = null !== (Fz = null === Uz || void 0 === Uz ? void 0 : Uz.backend) && void 0 !== Fz ? Fz : null;
        vo.adapter = null !== (Xz = null === Uz || void 0 === Uz ? void 0 : Uz.adapter) && void 0 !== Xz ? Xz : null, vo.boundAtMs = null, vo.indirectHangs = null;
        const Nz = !(0, zs.S)();
        null !== Uz && "none" !== Uz.reason && console.info(`${NX} drawing with ${Uz.backend}: ${Uz.reason}`);
        const bz = (0, OW.z)();
        fX(!0), (0, xz.q)((zz => {
          try {
            null !== uz && (bo = zz.startSkyFeed, iv(), function(zz) {
              var tz, sz;
              Ko = zz.rasterText, nO = zz.setTextLocalPlayer, zz.setTextLocalPlayer(null !== (tz = null === (sz = lO) || void 0 === sz ? void 0 : sz.info.playerDbId) && void 0 !== tz ? tz : null), uo = zz.drainTextRerasters, No = zz.loadTextIcons, zz.warmText((() => xo)), zz.textChanged(), xo && setTimeout(No, 0)
            }(zz), wo = zz.startShellAnalytics, Ev())
          } finally {
            ho || (ro = zz.followMenuPrefs({
              setSoundPrefs: Pv,
              setEnvPrefs: rv,
              setUiPrefs: Bv,
              setLookPrefs: Yv
            }))
          }
        })), (0, xz.i)(qX).catch((zz => {
          console.warn(`${NX} the game code did not load: a join asks again`, zz)
        }));
        const wz = (0, OW.k)(Uz);
        let Dz, gz;
        wz.catch((() => {})), "loading" === (0, Xt.H)() && rW();
        try {
          Dz = function(zz) {
            const tz = null !== zz && void 0 !== zz ? zz : document.createElement("canvas");
            tz.id = "wasm-game-canvas", (0, NW.m)();
            const sz = (0, et.d)(),
              Fz = (0, et.e)(sz);
            return tz.style.cssText = "position:fixed;top:0;left:0;display:block;touch-action:none;outline:none;background:#000", (0, uW.f)(tz, Fz), (0, et.c)(tz, sz), tz.width = Fz.bufferWidth, tz.height = Fz.bufferHeight, Kv(tz, jo), Ao = tz, document.body.append(tz), tz
          }(null === uz ? null : await (await Qo()).pagePreviews().beginSession())
        } catch (Wz) {
          return await ZU({
            site: HX,
            error: Wz
          }, (() => {
            (0, ms.showUnsupported)((0, wF.j)("fetch"), QW.h.fetch, `the previews did not load: ${String(Wz)}`)
          })), null
        }
        rW();
        try {
          gz = await wz
        } catch (Wz) {
          return await ZU({
            site: HX,
            error: Wz
          }, (() => {
            (0, ms.showUnsupported)((0, wF.j)("fetch"), QW.h.fetch, `the ${null!==uz&&void 0!==uz?uz:"client"} build did not load: ${String(Wz)}`)
          })), null
        }
        const Hz = (0, OW.f)(),
          Bz = !Hz && !0 !== xs.j.getItem(bX),
          Pz = !Hz && "loading" === (0, Xt.H)();
        await (0, Ot.h)(gz, Kt.h, {
          reloadFailedDownload: Bz
        }), Pz && !(0, Xt.Y)() && await (0, Ot.h)(gz, Kt.h, {
          reloadFailedDownload: Bz
        });
        HW = performance.now();
        const rz = SX;
        if (!(0, Xt.Y)()) {
          (0, Xt.V)() && xs.j.setItem(bX, !0);
          const zz = (0, Xt.u)();
          if ("call" === zz) BU({
            site: ts.u,
            error: (0, Xt.r)(),
            header: null
          }, rz);
          else {
            const tz = null !== zz && void 0 !== zz ? zz : "instantiate",
              sz = () => {
                (0, ms.showUnsupported)((0, wF.j)(tz), QW.h[tz], (0, Xt.j)())
              };
            if ("compile" !== zz && "instantiate" !== zz || !hv())
              if ("fetch" === tz) {
                const zz = [gz.url().href, Kt.h.url().href];
                await ZU({
                  site: HX,
                  error: (0, Xt.j)(),
                  urls: zz
                }, sz)
              } else sz();
            else {
              const tz = (0, Xt.j)(),
                sz = (0, it.n)((0, Xt.r)());
              (0, ms.reportCountedLoadFallback)((0, wF.j)(zz), QW.h[zz], tz, sz), Qv(`the wasm client did not ${zz} here (${tz})`, sz ? "oom" : null)
            }
          }
          return null
        }(0, ot.O)(gz.url()) && (0, ms.reportUnstreamedCoreLoad)();
        const mz = (0, Xt.J)();
        let Jz, Iz = rz;
        try {
          Iz = {
            ...rz,
            wasm: mz.Lu()
          };
          const {
            Cg: zz
          } = gz.bindings, tz = zz.Gsz();
          if (tz !== Qt.A) return BU({
            site: ts.e,
            error: `core ABI ${tz}, page ABI ${Qt.A}`,
            header: null
          }, Iz), null;
          const [sz, Fz] = (0, Qt.je)();
          Jz = new zz(sz, Fz)
        } catch (Wz) {
          return BU({
            site: ts.e,
            error: Wz,
            header: null
          }, Iz), null
        }
        SX = Iz, VX = gz.bindings;
        const Cz = new ts.l(Jz, Xt.z, {
          onCrash: zz => {
            var tz;
            null === (tz = Po) || void 0 === tz || tz.crashed(zz), Nz && function(zz, tz, sz) {
              if ("webgpu" !== tz || (0, OW.d)()) return !1;
              const Fz = function(zz) {
                if (zz.site === ts.i && (0, zs.p)(zz.error)) return "frames_refused";
                return zz.site === wX && (0, zs.r)(zz.error) ? "start_failed" : null
              }(zz);
              if (null === Fz || !(0, zs.N)(Fz)) return !1;
              return (0, ms.reportRenderReload)("webgpu", "start_failed" === Fz ? 0 : 1, sz, {
                cause: Fz,
                error: zz.error,
                context: vo,
                session: YU(null)
              }), WU(), !0
            }(zz, uz, Iz) || BU(zz, Iz)
          },
          onNetEvent: FU,
          onReconnectGrace: Av,
          onCoreErrors: (zz, tz) => {
            var sz, Fz;
            zz.some((zz => {
              let {
                code: tz
              } = zz;
              return tz === Qt.L.RenderDeviceLost
            })) && ((0, OW.u)(), To.deviceLost()), null === (sz = Po) || void 0 === sz || sz.coreErrors(zz), (0, ms.reportCoreErrors)(zz, tz, Iz, ((zz, tz) => {
              var sz;
              return null === (sz = Uo) || void 0 === sz ? void 0 : sz.Tsz(zz, tz)
            })), null === (Fz = rO) || void 0 === Fz || Fz.coreErrors(zz)
          },
          onRenderReload: (zz, tz, sz) => {
            ! function(zz, tz, sz, Fz, Wz, Xz) {
              var Oz;
              if ((0, OW.d)()) return;
              const oz = tz === Qt.Lc.WEBGPU,
                vz = Fz === Qt.Lc.PIPELINE_FAILED ? "pipeline_failed" : "lost",
                Uz = (0, zs.P)(Uo);
              null === (Oz = Po) || void 0 === Oz || Oz.reload(oz, sz, vz, null === Uz || void 0 === Uz ? void 0 : Uz.message);
              const Kz = oz ? (0, zs.M)(vz, Wz) : null;
              if (null !== Kz) {
                const tz = void 0 === Uz ? "" : ` (${Uz.message})`;
                return void zz.crash(ms.RENDER_RELOAD_SITE, new Error(`${(0,ms.renderReloadMessage)("webgpu",vz,sz)} and ${Kz}${tz}`))
              }
              const uz = oz ? "webgpu" : "webgl1" === Xz ? "webgl1" : "webgl";
              "lost" === vz && (0, OW.u)();
              (0, ms.reportRenderReload)(uz, sz, SX, {
                cause: vz,
                error: Uz,
                context: vo,
                session: YU(zz.sunShadowsHeld())
              }), WU()
            }(Cz, zz, tz, sz, Nz, uz)
          },
          onEnvEvent: zz => {
            var tz;
            zz.kind === Qt.X.SkyImages && (null === (tz = gO) || void 0 === tz || tz.onEvent(zz.payload))
          },
          onImages: zz => {
            var tz;
            null === (tz = HO) || void 0 === tz || tz.onEvent(zz)
          },
          onModelRequest: zz => {
            var tz;
            null === (tz = bO) || void 0 === tz || tz.request(zz)
          },
          onModelTaken: (zz, tz) => {
            var sz;
            null === (sz = bO) || void 0 === sz || sz.taken(zz, tz)
          },
          onTerrainTexturesWanted: () => {
            queueMicrotask((() => {
              ! function(zz, tz) {
                const sz = aX;
                if (null === sz || zz.isStopped) return;
                sz.restore((zz => {
                  (0, ms.reportTerrainTextureFailure)(zz, tz)
                })).then((tz => {
                  !1 !== tz || zz.isStopped ? !0 === tz && console.info(`${NX} terrain textures handed over again after the renderer lost them`) : console.warn(`${NX} the terrain textures couldn't be handed over again: the terrain draws blank`)
                }))
              }(Cz, Iz)
            }))
          },
          onKeepAlive: zz => {
            const tz = null === QO ? void 0 : kO.get(QO);
            void 0 !== tz && CF(tz, zz)
          }
        });
        if (LX = Cz, null !== zz) {
          Cz.setAntiCheatProbes(FX(Xt.z, zz.checks)), zz.watchHeld(XX.CoreFrame, (() => Cz.frame)), zz.watchHeld(XX.GlueFrame, (() => Jz.frame));
          const tz = oX(zz, ((zz, tz, sz) => {
            let Fz = !1;
            return JU(Cz, (() => {
              Fz = Cz.rings.input.writeRecord(Qt.qb.AntiCheat, zz, tz, sz, 0)
            })), Fz
          }));
          Cz.isStopped ? tz.stop() : uO = tz
        }
        AX = (zz, tz, sz) => Cz.rings.cmd.writeCmd(zz, tz, sz), yX = zz => Cz.rings.cmd.growForCmd(zz), cO = !1, iv(), (0, xz.r)(Cz, {
          core: Jz,
          memory: Xt.z,
          staleOr: (zz, tz, sz) => ZU({
            site: zz,
            error: tz
          }, sz),
          reportReplayFault: (zz, tz) => {
            (0, ms.reportReplayFault)(zz, tz, SX)
          },
          audio: qX,
          options: wt.e,
          onNetEvent: FU,
          sessionInfo: zz => {
            var tz;
            return (null === (tz = lO) || void 0 === tz ? void 0 : tz.conn) === zz ? lO.info : null
          },
          onEventOverflow: ov,
          replayShaderPack: zz => {
            var tz;
            null === (tz = rO) || void 0 === tz || tz.replay(zz)
          },
          hasPackModel: zz => {
            var tz, sz;
            return null !== (null !== (tz = null === (sz = Lv()) || void 0 === sz ? void 0 : sz.modelUrl(zz)) && void 0 !== tz ? tz : null)
          },
          beforeWrite: () => (!eO && Cz.rings.net.cursor > 0 && oU(Cz, !1, "all"), !Cz.isStopped),
          beforeOp: () => (!eO && Cz.netWrittenSinceFrame > 0 && oU(Cz, !1, "budget"), !Cz.isStopped)
        }), (0, Yz.I)({
          lockPointer: () => {
            if (!Qs(Dz)) return !1;
            try {
              Promise.resolve(Dz.requestPointerLock()).catch((() => {}))
            } catch {
              return !1
            }
            return !0
          },
          unlockPointer: () => {
            (0, Cs.e)()
          },
          leaveGame: () => {
            Ov()
          },
          canvas: () => Dz
        }), NO = (0, Yz.y)((() => {
          var zz;
          const tz = (0, xz.f)();
          null === (zz = (0, xz.n)()) || void 0 === zz || zz.followCursorAim(!0 === (null === tz || void 0 === tz ? void 0 : tz.isSessionLive) ? tz : null)
        })), MO && Cz.setUiPrefs(MO);
        dO && Cz.setEnvPrefs(dO);
        hO && Cz.setLookPrefs(hO);
        const ez = UW ? KW(UW.preventMovement) : null;
        ez && gv(ez);
        const Zz = (0, Ds.d)(),
          Gz = (0, Ds.b)(Cz, Zz);
        UO = Zz.basis, (0, Ys.n)(null === Gz ? null : (0, ws.q)(Gz)), vO = Gz;
        const Tz = (0, vt.b)();
        let cz = 1 / 0,
          jz = !0,
          Az = Zz.shedFootprintBytes;
        const yz = new QF.b(Tz, (() => Jz.Ag()), (zz => {
          Cz.crash(ts.n, zz)
        }));
        OO = yz, oO = yz, null !== Gz && yz.setCeiling(Math.min((0, QF.p)(Gz), cz));
        if (jz) {
          yz.setShed((zz => {
            const tz = Cz.shedMemory("joinReserve" !== zz);
            return null !== tz && (null === vO || tz < vO) && (vO = tz, (0, Ys.n)((0, ws.q)(tz))), tz
          }), ((zz, tz, sz) => {
            1 === tz ? (0, ms.reportMemoryShed)(zz, sz, SX) : console.warn(`${NX} wasm memory: shed again (${zz}): shed ${tz}`, sz.wasmMemoryShed)
          }), (() => Cz.addDistanceInUse()));
          const zz = (0, zs.D)(mz);
          yz.setFootprint(new GW(Az, {
            storedChunks: () => Jz.csz(),
            gpuBytes: () => {
              var tz;
              return null !== (tz = null === zz || void 0 === zz ? void 0 : zz.jsz()) && void 0 !== tz ? tz : 0
            },
            jsHeapBytes: ZW
          }))
        }
        window.addEventListener("pagehide", (() => {
          OO === yz && (yz.refreshStats(), mU(yz))
        })), window.addEventListener("pagehide", XU), window.addEventListener("pagehide", OU), !1;
        const [Mz, dz] = (0, Hs.f)();
        Yo = (0, Ps.e)((zz => Cz.setChunkAddDistance(zz.horizontal, zz.vertical)), {
          horizontal: Mz,
          vertical: dz
        }), Cz.setAmbientOcclusion(!0 !== xs.f.getItem("disableAmbientOcclusion")), Cz.setPoseLod(!0 !== xs.f.getItem(Wt.P)), (0, TW.i)("look") && (Cz.setDebugLog(Qt.P.Look, !0), (0, jW.i)("wasm", (() => Cz.takeDebugLog(Qt.P.Look))));
        (0, TW.i)("remesh") && (Cz.setDebugLog(Qt.P.Remesh, !0), hz = () => Cz.takeDebugLog(Qt.P.Remesh), hW = new dW((0, AW.r)(), hz));
        var hz;
        const Qz = function(zz, tz, sz, Fz) {
          const Wz = new FF,
            Xz = zz => xs.f.getItem(zz);
          Wz.sync(Xz, tz), (0, It.V)();
          const Oz = (0, vz.q)("customBindingsChanged", (() => {
            Wz.sync(Xz, tz)
          }));
          (0, es.m)(tz);
          const oz = new Set,
            Uz = (0, Yz.y)((() => {
              var zz;
              oz.size > 0 && oF() && !0 === (null === (zz = (0, xz.f)()) || void 0 === zz ? void 0 : zz.localPlayerAlive()) && vz.o.Yg("usedKeyboard")
            })),
            Kz = Ss.e.heldSizer((() => (0, et.h)(zz))),
            uz = qs(zz, tz, {
              prevents: zz => Wz.prevents(zz),
              keyPressed: zz => {
                Wz.moves(zz) && (oz.add(zz), oF() && vz.o.Yg("usedKeyboard"))
              },
              keyReleased: zz => {
                oz.delete(zz)
              },
              keysReleased: () => {
                oz.clear()
              },
              resized: () => {
                XF.h.measure(zz.getBoundingClientRect()), (0, Vs.n)()
              },
              sizeCanvas: Kz,
              watchRenderScale: tz => {
                const sz = (0, et.k)(zz, tz),
                  Fz = Ss.e.onRelease(tz);
                return () => {
                  sz(), Fz()
                }
              },
              touchStarting: () => {
                XF.h.measure(zz.getBoundingClientRect())
              },
              viewShown: sz,
              touchUiShown: () => nz.b.get("isTouchScreen"),
              ctrlCombosAreGames: oF,
              inspect: (zz, tz, sz) => {
                Wz.checks(tz, sz) && Fz(zz)
              },
              canLock: () => Qs(zz)
            }),
            Nz = (0, Os.e)(tz);
          return () => {
            Oz(), Uz(), (0, es.m)(null), Nz(), uz()
          }
        }(Dz, ((zz, tz, sz, Fz, Wz) => {
          var Xz;
          JU(Cz, (() => {
            Cz.rings.input.writeRecord(zz, tz, sz, Fz, Wz)
          })), null === (Xz = uO) || void 0 === Xz || Xz.onInput(zz), !ZO && (0, NF.g)(zz, Wz) && (0, NF.c)((() => {
            LX !== Cz || ho || Cz.isStopped || !bU() || oU(Cz, !1, "budget", !1)
          }))
        }), (() => jo), (zz => {
          var tz;
          null === (tz = uO) || void 0 === tz || tz.onEvent(zz)
        }));
        if (Cz.isStopped) return Qz(), null;
        sO = Qz;
        const kz = () => !Cz.isStopped && !yo;
        if (Cz.isStopped) return null;
        (0, Xt.db)((() => {
          "call" === (0, Xt.u)() && Cz.crash(ts.u, (0, Xt.r)())
        }));
        const iz = (0, ts.P)(Cz.rings.worker, (() => {
          oU(Cz, !1, "budget")
        }));
        FO = function(zz, tz) {
          return IU().then((zz => {
            let {
              prefetchWorldgenWorker: tz
            } = zz;
            tz()
          }), (() => {})), new iW({
            module: (0, Xt.D)(),
            decodeSettings: zz => {
              const tz = (0, xz.n)();
              if (null === tz) throw new Error("no game code to decode the world-gen seed with");
              return tz.decodeMapSettings(zz)
            },
            loadWorker: CU,
            onMapWithoutWorldgen: () => {
              eU((zz => {
                let {
                  stopWorldgenWorkerPrefetch: tz
                } = zz;
                tz()
              }))
            },
            onLoadFailed: zz => {
              (0, ms.reportWorldgenLoadFailure)(zz, SX)
            },
            onWorkerLost: zz => {
              (0, ms.reportWorkerLost)(ts.D, zz, SX)
            },
            onStartTimeout: zz => {
              (0, ms.reportWorkerStartTimeout)(ts.D, zz, SX)
            },
            onGaveUp: zz => {
              (0, ms.reportWorldgenGaveUp)(zz, SX)
            },
            onMemoryStats: zz => {
              var tz;
              null === (tz = OO) || void 0 === tz || tz.noteWorldgen(zz)
            },
            onMemoryGone: () => {
              var zz;
              null === (zz = OO) || void 0 === zz || zz.worldgenGone()
            },
            write: (sz, Fz, Wz, Xz, Oz) => {
              JU(zz, (() => {
                zz.rings.worker.writeWorkerRecord(sz, Fz, Wz, 0, Xz, Oz) || zz.crash(ts.D, `a world-gen record of kind ${Fz} did not fit the worker-in ring`)
              })), tz()
            }
          })
        }(Cz, iz), XO = function(zz, tz) {
          return new dF({
            module: (0, Xt.D)(),
            loadWorkers: async () => {
              const [{
                createMeshWorker: zz
              }, tz] = await Promise.all([sz.e(40).then((() => sz(42407))), Promise.resolve().then((() => sz(106))).then((zz => {
                let {
                  isMobile: tz
                } = zz;
                return tz()
              }), (() => !1))]);
              return {
                create: zz,
                count: (0, rt.c)(navigator.hardwareConcurrency, tz)
              }
            },
            write: (sz, Fz, Wz, Xz, Oz, oz) => {
              (0, Vs.m)(), JU(zz, (() => {
                zz.rings.worker.writeWorkerRecord(sz, Fz, Wz, Xz, Oz, oz) || zz.crash(ts.q, `a meshing record of kind ${Fz} did not fit the worker-in ring`)
              })), tz()
            },
            onWorkerLost: zz => {
              (0, ms.reportWorkerLost)(ts.q, zz, SX)
            },
            onLightFault: (zz, tz) => {
              (0, ms.reportLightFault)(zz, tz, SX)
            },
            onStartTimeout: zz => {
              (0, ms.reportWorkerStartTimeout)(ts.q, zz, SX)
            },
            onMemoryStats: (zz, tz) => {
              var sz;
              null === (sz = OO) || void 0 === sz || sz.noteMeshWorker(zz, tz)
            },
            onMemoryGone: zz => {
              var tz;
              null === (tz = OO) || void 0 === tz || tz.meshWorkerGone(zz)
            },
            fail: (tz, sz) => {
              const Fz = () => {
                zz.crash(ts.q, void 0 === sz ? tz : new Error(tz, {
                  cause: sz
                }))
              };
              void 0 !== sz ? ZU({
                site: ts.q,
                error: sz
              }, Fz) : Fz()
            }
          })
        }(Cz, iz);
        const az = (0, fF.q)(Bt.clientSideServerUrls.staticUrl, {
            onTableFailed: zz => {
              ZU({
                site: ms.MODEL_FEED_SITE,
                error: zz
              }, (() => {}), kz)
            },
            packUrl: zz => {
              var tz, sz;
              return null !== (tz = null === (sz = Lv()) || void 0 === sz ? void 0 : sz.modelUrl(zz)) && void 0 !== tz ? tz : null
            }
          }),
          qz = function(zz, tz, sz) {
            const Fz = sz => {
              var Fz, Wz;
              return null !== (Fz = null === (Wz = tz()) || void 0 === Wz ? void 0 : Wz.drawnUrl(sz)) && void 0 !== Fz ? Fz : zz.url(sz)
            };
            return (0, RF.k)((0, iF.m)(Fz), sz)
          }(az, (() => bO), Lv),
          Sz = new iF.f(qz, (zz => {
            console.warn(`${NX} image ${zz.key.kind}:${zz.key.index}:${zz.key.word} failed`, zz.error)
          }));
        HO = Sz, BO = new SF(Cz, qz, ((zz, tz) => {
          void 0 === tz ? console.warn(`${NX} ${zz}`) : av(zz, tz)
        }));
        const Vz = new VF.f(az, function(zz, tz) {
          let Fz = !1,
            Wz = null,
            Xz = null;
          const Oz = {
              onUnavailable: (sz, Fz) => {
                Xz ??= ZU({
                  site: ms.MODEL_POOL_SITE,
                  error: sz,
                  urls: Fz
                }, (() => {
                  (0, ms.reportModelPoolFailure)(sz, zz)
                }), tz)
              },
              onDecoderFailed: (sz, Fz) => {
                const Wz = () => {
                  (0, ms.reportDracoDecoderFailure)(sz, zz)
                };
                void 0 !== Fz ? ZU({
                  site: ms.MODEL_POOL_SITE,
                  error: sz,
                  urls: Fz
                }, Wz, tz) : Wz()
              },
              onWorkerLost: tz => {
                (0, ms.reportWorkerLost)(ms.MODEL_POOL_SITE, tz, zz)
              },
              onModuleRetry: (tz, sz) => {
                (0, ms.reportModelsModuleRetry)(tz, sz, zz)
              }
            },
            oz = sz.e(42).then((() => sz(42415))).then((zz => {
              let {
                pageModelPool: tz
              } = zz;
              if (Fz) return null;
              const sz = tz(Oz);
              return Wz = sz.unlisten, wO = sz.pool, sz.pool
            }), (zz => (Fz || Oz.onUnavailable(zz, void 0), null)));
          return DO = () => {
            var zz;
            Fz = !0, null === (zz = Wz) || void 0 === zz || zz(), wO = null
          }, (zz, tz) => oz.then((sz => {
            var Fz;
            return null !== (Fz = null === sz || void 0 === sz ? void 0 : sz.build(zz, tz)) && void 0 !== Fz ? Fz : (0, EF.p)(zz, "the model workers did not load")
          })).then((zz => null !== Xz && (0, EF.j)(zz) ? Xz.then((() => zz)) : zz))
        }(Iz, kz), (zz => {
          zz.startup ? (HU(), ZU({
            site: ms.MODEL_FEED_SITE,
            error: zz.error,
            urls: "" === zz.url ? void 0 : [zz.url]
          }, (() => {
            (0, ms.reportModelFailure)(zz, Iz)
          }))) : (0, ms.reportModelFailure)(zz, Iz)
        }), {
          onWritten: (zz, tz) => {
            Sz.glbWritten(zz, tz)
          },
          onTaken: (zz, tz) => {
            Sz.glbTaken(zz, tz)
          },
          onPackFileFailed: (zz, tz) => {
            console.warn(`${NX} the texture pack's model file ${zz} failed: the shipped one loads`, tz)
          }
        });
        bO = Vz;
        const Rz = new nF.f(Cz);
        aX = Rz, Rz.swap((zz => {
          const tz = () => {
            (0, ms.reportTerrainTextureFailure)(zz, Iz)
          };
          if (xo) return void tz();
          const sz = () => !xo,
            Fz = null === zz.url ? void 0 : [zz.url];
          ZU({
            site: ts.z,
            error: zz.error,
            urls: Fz
          }, tz, sz)
        })).then((zz => {
          null !== zz && (zz || Cz.isStopped || console.warn(`${NX} the core refused the terrain textures: terrain draws untextured`), JO(Cz))
        }));
        const pz = new dt(Cz, ((zz, tz) => {
          console.warn(`${NX} ${zz}`, ...void 0 === tz ? [] : [tz])
        }));
        pz.feed(), null !== uz && function(zz, tz, Fz, Wz, Xz, Oz) {
          let oz = null,
            vz = null,
            Uz = !1;
          const Kz = {
            textures: null,
            stop: () => {
              var zz, tz;
              Uz = !0, null === (zz = vz) || void 0 === zz || zz(), null === (tz = oz) || void 0 === tz || tz(), pF.b.setSettled(null), null !== VX && So.clear(VX)
            }
          };
          nX = Kz, vz = qv().follow((vz => {
            null !== vz && Promise.all([sz.e(193), sz.e(45)]).then((() => sz(42374))).then((sz => {
              let {
                PackTextures: uz
              } = sz;
              if (Uz || zz.isStopped) return;
              const Nz = new uz({
                feed: vz,
                terrain: tz,
                backend: Fz,
                stopped: () => zz.isStopped,
                landed: () => {
                  JO(zz)
                },
                packSwapped: () => {
                  (0, RF.i)(Wz), Oz.feed((() => async function(zz) {
                    const tz = null === zz ? null : await zz.averageColours;
                    return null === tz ? ht() : Mt(tz)
                  }(Nz.assets))), lv(Nz.iconOverrides()), Xz.refresh().then((zz => {
                    null !== zz && console.info(`${NX} texture pack models: ${zz.resent} of ${zz.delivered} files written again, ${zz.refetched} refetched`)
                  }))
                },
                settled: (zz, tz, sz) => {
                  var Fz;
                  (pF.b.setSettled({
                    state: zz,
                    files: tz
                  }), null === zz.gameSource && (0, gs.d)(zz.pack, sz), sz) || function(zz) {
                    const tz = VX;
                    null !== tz && So.apply(tz, zz).then((tz => {
                      tz && zz && console.info(`${NX} the texture pack's animations are in (${Object.keys(zz).length} files)`)
                    }))
                  }(null === (Fz = zz.pack) || void 0 === Fz ? void 0 : Fz.animations)
                },
                settling: () => {
                  pF.b.setSettled(null)
                },
                warn: av,
                maxTextureSize: () => Promise.resolve((0, zs.W)(document.createElement("canvas")))
              });
              Kz.textures = Nz, oz = Nz.start()
            }), (zz => {
              console.warn(`${NX} the texture pack's terrain didn't load: the built atlas stays`, zz)
            }))
          }))
        }(Cz, Rz, uz, Sz, Vz, pz);
        const fz = () => {
            Cz.setTextureLayers("")
          },
          Ez = zz => {
            (Ht ??= sz.e(50).then((() => sz(42419))).then((zz => {
              let {
                TEXTURE_NAMES: tz
              } = zz;
              return tz
            }), (zz => {
              throw Ht = null, zz
            })), Ht).then((zz => {
              Cz.setTextureLayers(zz) || Cz.isStopped || (console.warn(`${NX} the core refused the texture names: textured Boxes draw textureNotFound`), fz())
            }), (tz => {
              if (Cz.isStopped) return;
              const [sz, ...Fz] = zz;
              void 0 === sz ? ZU({
                site: ms.TEXTURE_NAMES_SITE,
                error: tz
              }, (() => {
                console.warn(`${NX} the texture names didn't load, so textured Boxes draw textureNotFound`, tz), fz()
              }), kz) : setTimeout((() => {
                Ez(Fz)
              }), sz)
            }))
          };
        if (Ez(cX), null !== uz && !await async function(zz, tz, sz, Fz, Xz, Oz) {
            var oz;
            const vz = (0, zs.D)(sz);
            if (null === vz) return zz.crash(wX, new Error(`this ${Fz} build has no openRenderer`)), !1;
            let Uz;
            Uo = vz;
            try {
              var Kz, uz, Nz, bz;
              const Wz = null !== (Kz = null === (uz = kX) || void 0 === uz ? void 0 : uz.pagePreviews()) && void 0 !== Kz ? Kz : null,
                oz = null !== (Nz = null === (bz = kX) || void 0 === bz ? void 0 : bz.previewModule(sz)) && void 0 !== Nz ? Nz : null;
              if (null === Wz || null === oz) {
                null === Wz || void 0 === Wz || Wz.endSession(!1), Uz = (0, et.d)().sampleCount, await (0, zs.d)(tz, vz, Oz, kv, Uz, await Xz);
                const zz = (0, zs.k)(sz);
                null === zz && console.warn(`${NX} this ${Fz} build has no image registry: sky and model images won't show`), (0, lF.e)(zz)
              } else {
                (0, OW.d)() && await (0, lz.m)();
                const sz = (0, OW.D)();
                if (null !== sz) {
                  const tz = (0, zs.P)(vz);
                  return zz.crash(ms.RENDER_RELOAD_SITE, new Error(`${sz}${void 0===tz?"":` (${tz.message})`}`)), !1
                }
                Uz = await Wz.bindSession(oz, tz, (async zz => (0, zs.u)(vz, wX, Oz, zz, kv, await Xz)))
              }
            } catch (Wz) {
              return zz.crash(wX, Wz), !1
            }(function(zz, tz) {
              const sz = zz,
                {
                  requestCapture: Fz,
                  takeCapture: Wz
                } = sz;
              if ("function" !== typeof Fz || "function" !== typeof Wz) return;
              const Xz = {
                request() {
                  Fz.call(sz, tz)
                },
                take() {
                  var zz;
                  return null !== (zz = Wz.call(sz)) && void 0 !== zz ? zz : null
                }
              };
              window[bW] = Xz
            })(tz, Uz), go = Uz, oo = !0;
            const wz = performance.now();
            return vo.boundAtMs = null !== (oz = (0, OW.F)()) && void 0 !== oz ? oz : wz, vo.indirectHangs = (0, OW.x)(), console.info(`${NX} ${Fz} renderer bound at ${Math.round(wz)} ms`), !zz.isStopped
          }(Cz, Jz, mz, uz, bz, Dz)) return null;
        if (null !== uz) {
          var zt, tt, st;
          (0, Ut.F)(uz);
          const zz = () => !Cz.isStopped && NU();
          sz.e(185).then((() => sz(8723))).then((tz => {
            let {
              devTools: sz
            } = tz;
            Cz.isStopped || sz.setHost(function(zz) {
              return {
                tools: XW,
                async downloadScene(tz, sz) {
                  let {
                    width: Fz,
                    height: Wz,
                    colouring: Xz
                  } = sz;
                  "screenshot" === tz && null === Xz ? await (0, sW.c)(zz, Fz, Wz) : console.warn("The Rust client's developer tools take uncoloured screenshots only")
                },
                setAmbientLightIntensity: () => (console.warn("The Rust client's renderer has no ambient light setting"), Promise.resolve())
              }
            }(function(zz, tz) {
              return {
                canvas: zz,
                maxTextureSize: FW,
                drawing: tz,
                resize: (zz, tz) => {
                  (0, es.t)(Qt.qb.Resize, 0, zz, tz, (0, es.j)(1))
                },
                restoreSize: () => {
                  const tz = (0, et.h)(zz);
                  null !== tz && (0, es.t)(Qt.qb.Resize, 0, tz.cssWidth, tz.cssHeight, (0, es.j)(tz.renderScale))
                },
                onFrameDrawn: zz => (WW.add(zz), () => {
                  WW.delete(zz)
                })
              }
            }(Dz, zz)))
          }), (zz => {
            console.warn(`${NX} the developer tools didn't load: no captures this session`, zz)
          }));
          const tz = "webgpu" === uz && null !== (zt = null === Uz || void 0 === Uz || null === (tt = Uz.adapter) || void 0 === tt ? void 0 : tt.vendor) && void 0 !== zt ? zt : null;
          Ho = {
            backend: uz,
            canvas: Dz,
            fallbackReason: null !== (st = null === Uz || void 0 === Uz ? void 0 : Uz.reason) && void 0 !== st ? st : null,
            adapterVendor: tz
          }, Ev();
          try {
            (0, Vs.u)(uz, Dz, tz)
          } catch (Wz) {
            (0, Vs.y)(), console.error(`${NX} the quality steps didn't start`, Wz)
          }
        }
        const {
          storagePullBreaks: Ft,
          splitPassBreaks: ut
        } = await bz;
        ut && console.warn(`${NX} split_pass_breaks on: Windows Adreno 7xx (N-103) or ?sceneDepth=off`);
        const Dt = Ft ? Lz.b : (0, Lz.h)(Uz, (0, Jt.g)());
        if ((0, TW.i)("webgpuloss")) {
          var gt, Pt;
          const zz = {
            backend: uz,
            reason: null !== (gt = null === Uz || void 0 === Uz ? void 0 : Uz.reason) && void 0 !== gt ? gt : null,
            source: null !== (Pt = null === Uz || void 0 === Uz ? void 0 : Uz.source) && void 0 !== Pt ? Pt : null,
            storagePullBreaks: Ft,
            noWebGpu: Dt.messageKey
          };
          (0, cW.b)((tz => {
            tz.noteWasmPick(zz)
          }))
        }
        const Yt = "webgpu" === uz && !Ft;
        if (rO = (0, Lz.j)(Yt ? Cz : null, Yt && null !== (Oz = null === (oz = kX) || void 0 === oz ? void 0 : oz.pagePreviews().Cw) && void 0 !== Oz ? Oz : null, Dt, av), ho) return null;
        if (yz.reserveAtJoin((0, QF.o)(null !== Gz && void 0 !== Gz ? Gz : ws.h)), Cz.isStopped) return null;
        const xt = zz => {
          if (null !== Bo) try {
            Bo.animationFrame(zz)
          } catch (Wz) {
            sU(Wz)
          }
          if (function(zz, tz) {
              return tz && !ho && !ZO && bU() && NU() && zz.framePaces(performance.now())
            }(Cz, jo)) return Cz.writePendingInput(), (0, Yz.h)(zz, vU), zU(!1, zz), void requestAnimationFrame(xt);
          oU(Cz, jo, "budget") && ((0, Ct.j)(Cz.lastFrameKind) && NU() && (0, Yz.h)(zz, vU), zU(jo && Go, zz), To.frame(Cz.lastFrameKind, jo && NU(), zz), PU(Cz), yz.afterFrame(), requestAnimationFrame(xt))
        };
        requestAnimationFrame(xt);
        return function(zz) {
          if (zz.has("inputLog") && (0, WF.k)((zz => {
              let {
                action: tz,
                down: sz,
                press: Fz
              } = zz;
              console.info(`${OF} input ${tz} ${sz?"down":"up"} press ${Fz} at ${performance.now().toFixed(1)}`)
            })), zz.has("inputDump")) {
            const zz = [];
            vF = zz, Object.assign(window, {
              bloxdInputDump: () => zz.join("\n")
            })
          }
        }(new URLSearchParams(window.location.search)), KO = function(zz, tz) {
          let sz = null;
          const Fz = () => {
              null !== sz && (clearInterval(sz), sz = null)
            },
            Wz = () => {
              document.hidden ? sz ??= setInterval((() => {
                oU(zz, !1, "budget") ? (PU(zz), tz.afterFrame()) : Fz()
              }), TX) : Fz()
            };
          return document.addEventListener("visibilitychange", Wz), Wz(), () => {
            Fz(), document.removeEventListener("visibilitychange", Wz)
          }
        }(Cz, yz), Cz
      }(tz).then((zz => {
        var tz;
        (Fz(SX), fX(null !== zz), null !== zz && (BW = performance.now()), RX(zz), null === zz) ? null === (tz = kX) || void 0 === tz || tz.pagePreviews().endSession(null === (0, Xt.u)()): mO("booted")
      }), (zz => {
        Fz(SX), fX(!1), RX(null), BU({
          site: DX,
          error: zz,
          header: null
        }, SX)
      }))
    }

    function qo() {
      const zz = VX;
      null !== zz && Qo().then((tz => {
        let {
          pageBuiltInAnimationPack: sz
        } = tz;
        sz().provide(zz)
      }), (zz => {
        console.warn(`${NX} the built-in animation pack's chunk did not load: lifeforms stay in their rest pose`, zz)
      }))
    }
    const So = new class {
      constructor(zz) {
        this.deps = zz, this.latest = 0, this.po = null
      }
      apply(zz, tz) {
        return this.load(zz, tz, 0)
      }
      async load(zz, tz, sz) {
        var Fz;
        const Wz = ++this.latest,
          Xz = this.deps.compiler;
        if (void 0 === tz || null === tz || "object" !== typeof tz || 0 === Object.keys(tz).length || null === Xz) return this.drop(zz), !1;
        if ((null === (Fz = this.po) || void 0 === Fz ? void 0 : Fz.module) === zz && (0, Vt.Zd)(this.po.files, tz)) return !1;
        try {
          const [sz, Fz] = await Promise.all([Xz(), this.deps.builtIns()]);
          if (Wz !== this.latest) return !1;
          const Oz = await sz(tz, Et, {
            builtIns: Fz
          });
          if (Wz !== this.latest) return !1;
          const oz = this.call(zz, Oz);
          if (void 0 === oz) throw new ft("the compiled animations didn't read against the built-in pack");
          return this.po = {
              module: zz,
              files: tz
            },
            function(zz) {
              for (let tz = 0; tz + 2 < zz.length; tz += 3) {
                ("error" === zz[tz] ? console.error : console.warn)(`Animation for the texture pack: ${zz[tz+1]}: ${zz[tz+2]}`)
              }
            }(oz), !0
        } catch (oz) {
          var Oz;
          if (Wz !== this.latest) return !1;
          this.drop(zz), 0 === sz && this.deps.warn("the texture pack's animations didn't load: lifeforms play the built-in ones", oz);
          const Fz = (null !== (Oz = this.deps.retryAfterMs) && void 0 !== Oz ? Oz : pt)[sz];
          return void 0 === Fz || oz instanceof ft || (0, Rt.i)(zz) || setTimeout((() => {
            Wz === this.latest && this.load(zz, tz, sz + 1)
          }), Fz), !1
        }
      }
      call(zz, tz) {
        try {
          return zz.Zsz(tz)
        } catch (sz) {
          throw (0, Rt.j)(zz, sz), sz
        }
      }
      clear(zz) {
        this.latest++, this.drop(zz)
      }
      drop(zz) {
        const tz = this.po;
        if (this.po = null, (null === tz || void 0 === tz ? void 0 : tz.module) === zz && !(0, Rt.i)(zz)) try {
          this.call(zz, null)
        } catch {}
      }
    }({
      compiler: lt.b,
      builtIns: async () => {
        const {
          pageBuiltInAnimationPack: zz
        } = await Qo();
        return zz().whenSet()
      },
      warn: av
    });
    async function Vo(zz, tz) {
      let Fz = !1;
      await Ro({
        matchmake: async () => {
          const {
            guestJoinTarget: Wz,
            guestJoinWithPack: Xz
          } = await sz.e(342).then((() => sz(42361)));
          return Fz ? Wz(zz, tz, Vv()) : (Fz = !0, Xz(zz, tz, (tz => Rv(zz, tz)), Vv))
        },
        onFailure: zz => {
          (0, ms.showJoinFailure)(zz, SX)
        },
        rejoin: uv,
        invalidateTrafficCode: Nv
      })
    }
    async function Ro(zz) {
      let {
        matchmake: tz,
        onFailure: sz,
        rejoin: Wz,
        invalidateTrafficCode: Xz,
        pageReady: Oz,
        signal: oz
      } = zz;
      const vz = () => !0 === (null === oz || void 0 === oz ? void 0 : oz.aborted);
      let Uz;
      const Kz = pF.b.rejoinHold(),
        uz = (0, rs.O)("wasm", xU);
      let Nz = !1,
        bz = performance.now();
      try {
        if (!await EX) return {
          kind: "stopped"
        };
        if (vz()) return {
          kind: "ds"
        };
        ko().catch((() => {}));
        let zz = await tz();
        bz = performance.now();
        const sz = () => performance.now() - zz.matchedAt <= zz.freshMs,
          Fz = fo(zz.target).catch((() => {}));
        sz() && !vz() && (Uz = new jF(zz.target, {
          signal: oz
        }));
        const Xz = performance.now();
        if (null === await pX) return {
          kind: "stopped"
        };
        var wz;
        if (function(zz) {
            var tz, sz;
            if (wW.c.markGameEngineConstructed(), PW) return;
            PW = !0;
            const Fz = Math.max(zz, null !== (tz = gW) && void 0 !== tz ? tz : zz);
            (0, DW.h)("ready", Math.max(0, (null !== (sz = HW) && void 0 !== sz ? sz : Fz) - Fz) / 1e3)
          }(Xz), vz() || (null !== HW && null !== BW ? ((0, ct.m)("wasm_loaded", HW), (0, ct.m)("wasm_core_ready", BW)) : console.warn("[bloxd-wasm-client] a join found the core before boot marked its steps")), await Fz, !sz() && !vz()) null === (wz = Uz) || void 0 === wz || wz.rematched(), zz = await tz(), bz = performance.now();
        if (vz()) return {
          kind: "ds"
        };
        const Kz = await async function(zz) {
          var tz, sz, Fz;
          let {
            signal: Wz,
            rejoin: Xz = null,
            early: Oz,
            pageReady: oz
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (null !== Wz && void 0 !== Wz && Wz.aborted) throw new DOMException("the join was left", "AbortError");
          const vz = (Uz = pO, Kz = performance.now(), null !== Uz && Kz - Uz < PF);
          var Uz, Kz;
          pO = null;
          const uz = new AbortController;
          tv({
            controller: uz,
            game: null !== (tz = null === (sz = zz.session) || void 0 === sz ? void 0 : sz.gameNameWithVariation) && void 0 !== tz ? tz : null
          }), fO = null, null === (Fz = to) || void 0 === Fz || Fz.abort(), to = null, Fo = !1, Wo = null, Xo.clear();
          const Nz = () => {
            (0, Pt.j)(uz, (0, Pt.f)(Wz))
          };
          null === Wz || void 0 === Wz || Wz.addEventListener("abort", Nz, {
            once: !0
          });
          try {
            var bz, wz, Dz;
            const tz = await pX;
            if (null === tz || tz.isStopped || ho) throw new Error("no core is running to join a game with");
            if (zz.session && null !== rO) {
              const tz = await Eo(rO.join(zz.session.gameNameWithVariation), uz.signal);
              if ((0, TW.i)("webgpuloss")) {
                const sz = zz.session.gameNameWithVariation,
                  Fz = rO.couldntRunInJoinedGame();
                (0, cW.b)((zz => zz.noteWasmJoin(sz, tz, Fz)))
              }
              if (null !== tz) throw new Lz.f(tz)
            }
            const [, , , {
              joinRoom: sz
            }] = await Eo(Promise.all([(0, xz.g)(tz), fo(zz), null === oz || void 0 === oz ? void 0 : oz(), ko()]), uz.signal), Fz = zz.session, Wz = Fz ? {
              ...Dv,
              attachSocket: tz => {
                const sz = xv(tz, zz.endpoint);
                var Wz;
                null !== sz && (lO = {
                  conn: sz,
                  info: Fz
                }, null === (Wz = nO) || void 0 === Wz || Wz(Fz.playerDbId));
                return sz
              }
            } : Dv, Uz = await sz(Wz, zz, {
              signal: uz.signal,
              early: Oz
            }).catch((zz => {
              throw function(zz) {
                if (!(zz instanceof jz.d)) return zz;
                if ("roomError" === zz.stage && null !== Wo) return po(new jz.d(zz.message, zz.stage, zz.code, Wo), zz);
                const tz = "closed" === zz.stage && null !== EO ? Xo.get(EO.conn) : void 0;
                return void 0 === tz ? zz : po(new jz.d(zz.message, zz.stage, tz.code), zz)
              }(zz)
            }));
            if (iO !== uz) throw Uz.leave(), new DOMException("the join was left", "AbortError");
            Fv(Uz), null === (bz = XO) || void 0 === bz || bz.newGame();
            const Kz = function(zz) {
              var tz, sz;
              const {
                session: Fz
              } = zz, Wz = void 0 === Fz ? zz.joinOptions.lobbyName : Fz.lobbyName;
              return {
                endpoint: zz.endpoint,
                game: null !== (tz = null === Fz || void 0 === Fz ? void 0 : Fz.gameNameWithVariation) && void 0 !== tz ? tz : zz.roomName,
                lobby: String(null !== Wz && void 0 !== Wz ? Wz : null),
                postCookies: null !== (sz = zz.postCookies) && void 0 !== sz ? sz : null
              }
            }(zz);
            kO.set(Uz, Kz), ZF(Kz);
            const Nz = performance.now(),
              gz = {
                conn: Uz.conn,
                rejoin: Xz,
                game: null !== (wz = null === (Dz = zz.session) || void 0 === Dz ? void 0 : Dz.gameNameWithVariation) && void 0 !== wz ? wz : "",
                joinedAt: Nz,
                rejoinedAt: vz ? Nz : null,
                overflow: null
              };
            aO = gz,
              function(zz, tz) {
                Tv();
                const sz = {
                  endpoint: tz,
                  roomId: zz.seat.room.roomId,
                  heldConn: 0,
                  dropCode: 0,
                  pendingHold: null,
                  resume: new us({
                    reconnect: (zz, tz, Fz) => async function(zz, tz, sz, Fz) {
                      const {
                        roomId: Wz,
                        roomToken: Xz
                      } = jv(zz, tz), Oz = LX;
                      if (null === Oz || Oz.isStopped || ho) throw new Error("no core is running to resume the game on");
                      const {
                        resumeRoom: oz
                      } = await Eo(ko(), sz), vz = {
                        ...Dv,
                        attachSocket: tz => qO !== zz || 0 === zz.heldConn ? (tz.close(), null) : xv(tz, zz.endpoint, !0)
                      };
                      return oz(vz, zz.endpoint, Wz, Xz, {
                        signal: sz,
                        onAttached: Fz
                      })
                    }(sz, zz, tz, Fz),
                    releaseSeat: zz => {
                      !async function(zz, tz) {
                        const {
                          roomId: sz,
                          roomToken: Fz
                        } = jv(zz, tz);
                        try {
                          const {
                            leaveHeldSeat: tz
                          } = await ko();
                          await tz(zz.endpoint, sz, Fz)
                        } catch (Wz) {
                          console.warn(`${NX} the held seat of a game left while it reconnected couldn't be released`, Wz)
                        }
                      }(sz, zz)
                    },
                    isLive: () => qO === sz && null !== aO && !ho,
                    Zm: zz => {
                      RO = zz, Gv()
                    },
                    onReconnected: zz => {
                      ! function(zz) {
                        const tz = QO;
                        if (null !== tz && tz !== zz) {
                          const sz = kO.get(tz);
                          void 0 !== sz && kO.set(zz, sz), Zo === tz && (Zo = zz), tz.detach()
                        }
                        Fv(zz)
                      }(zz)
                    },
                    onGaveUp: (zz, tz) => {
                      ! function(zz, tz, sz) {
                        var Fz, Wz;
                        console.warn(`${NX} gave up reconnecting (${sz.reason}, ${sz.attempts} attempts)`, sz.lastError), (0, ms.reportReconnectGaveUp)(sz, SX);
                        const Xz = null !== (Fz = null === (Wz = aO) || void 0 === Wz ? void 0 : Wz.rejoin) && void 0 !== Fz ? Fz : null;
                        cv(zz, "gaveUp"), Xv();
                        const Oz = {
                          code: zz.dropCode,
                          name: null,
                          reason: CX,
                          canReconnect: !tz,
                          automaticallyReconnect: !1,
                          requiresRefresh: !1
                        };
                        wv(Oz, tz ? null : Xz, !1, {
                          reasonKey: eX,
                          canPlayAgain: tz
                        })
                      }(sz, zz, tz)
                    }
                  })
                };
                qO = sz, null !== SO && SO.conn === zz.conn && sz.resume.onInitialInfo(SO)
              }(Uz, zz.endpoint), performance.mark(BX), (0, ct.m)("wasm_joined", Nz), setTimeout((() => {
                QO === Uz && (0, ct.e)()
              }), 0), qo(), console.info(`${NX} joined ${zz.roomName} as ${Uz.seat.sessionId} at ${Math.round(performance.now())} ms`);
            const Hz = fO;
            fO = null, null !== Hz && vv(gz, Hz.mask, Hz.frames);
            const Bz = Xo.get(Uz.conn);
            return Xo.clear(), void 0 !== Bz && (Fv(null), bv(Uz.conn, Bz.code, Bz.reason)), Uz
          } finally {
            var gz;
            null === Wz || void 0 === Wz || Wz.removeEventListener("abort", Nz), iO === uz && sv(QO, null), (null === (gz = EO) || void 0 === gz ? void 0 : gz.join) === uz && (EO = null)
          }
        }(zz.target, {
          signal: oz,
          rejoin: Wz(zz.target),
          early: Uz,
          pageReady: Oz
        });
        return Nz = !0, {
          kind: "joined",
          game: Kz
        }
      } catch (gz) {
        if (gz instanceof DOMException && "AbortError" === gz.name || vz()) return {
          kind: "ds"
        };
        if (ho) return {
          kind: "stopped"
        };
        if (Fo && (Fo = !1, await Xz().catch((zz => {
            console.warn(`${NX} the cached traffic code could not be dropped`, zz)
          }))), null === await pX) return {
          kind: "stopped"
        };
        if (gz instanceof Lz.f) return sz(gz, performance.now() - bz), {
          kind: "failed",
          error: gz,
          reloading: !1
        };
        if (gz instanceof jz.d && gz.code === Fz.b.wasmClientNotAllowed.code && co) return Qv("this server refused the wasm client to this account", "refused"), {
          kind: "failed",
          error: gz,
          reloading: !0
        };
        const zz = gz instanceof jz.d && gz.code === Fz.b.outdatedVersion.code,
          tz = () => null === QO,
          Wz = await ZU({
            site: ms.JOIN_SITE,
            error: gz,
            outdated: zz
          }, (() => {
            sz(gz, performance.now() - bz)
          }), tz);
        return {
          kind: "failed",
          error: gz,
          reloading: Wz
        }
      } finally {
        var Dz;
        Nz || uz.end(), pF.b.releaseHold(Kz);
        const zz = null === (Dz = Uz) || void 0 === Dz ? void 0 : Dz.release();
        zz && (0, ms.reportUnusedSeat)(zz, SX)
      }
    }

    function po(zz, tz) {
      return zz.stack = tz.stack, zz
    }

    function fo(zz) {
      return zz.session ? (0, xz.m)(qX, zz.session.gameNameWithVariation) : Promise.resolve()
    }

    function Eo(zz, tz) {
      return (0, Pt.n)(tz), new Promise(((sz, Fz) => {
        const Wz = () => {
          Fz((0, Pt.f)(tz))
        };
        tz.addEventListener("abort", Wz, {
          once: !0
        }), zz.then((zz => {
          tz.removeEventListener("abort", Wz), sz(zz)
        }), (zz => {
          tz.removeEventListener("abort", Wz), Fz(zz)
        }))
      }))
    }

    function zv() {
      tv(null)
    }

    function tv(zz) {
      var tz, sz, Fz;
      (function() {
        const zz = qO;
        null !== zz && cv(zz, "left")
      }(), null === tO || tO.left) || (tO.left = !0, null === (Fz = (0, xz.f)()) || void 0 === Fz || Fz.socketLeft(), (0, Nz.q)({
        websocketUrl: null
      }));
      iO && (0, Pt.j)(iO, new DOMException("the join was left", "AbortError")), Xv(null !== zz), null === (tz = rO) || void 0 === tz || tz.leave();
      const Wz = QO;
      null !== zz && pF.b.setGame(zz.game), sv(null, null !== (sz = null === zz || void 0 === zz ? void 0 : zz.controller) && void 0 !== sz ? sz : null), null === Wz || void 0 === Wz || Wz.leave(), Wv(0), (0, Dt.e)()
    }

    function sv(zz, tz) {
      QO = zz, iO = tz, null === QO && null === iO && pF.b.setGame(void 0)
    }

    function Fv(zz) {
      sv(zz, iO)
    }

    function Wv(zz) {
      const tz = LX;
      return null !== AX && !ho && null !== tz && !tz.isStopped && (!!AX(jz.h, 0, (0, jz.z)(zz)) && (cO = !0, 0 === zz || ZO || oU(tz, !1, "all"), !0))
    }

    function Xv() {
      var zz, tz;
      arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (0, rs.f)();
      const sz = null !== (zz = null === (tz = aO) || void 0 === tz ? void 0 : tz.overflow) && void 0 !== zz ? zz : null;
      aO = null, null !== sz && (0, ms.reportEventOverflow)(sz, SX)
    }

    function Ov() {
      null !== QO || null !== iO ? zv() : mv()
    }

    function ov(zz, tz) {
      console.warn(`${NX} the event buffer refused records in ${tz} frames (categories ${zz})`), ho || (null !== aO ? vv(aO, zz, tz) : null !== iO && function(zz, tz, sz) {
        var Fz;
        const Wz = function(zz, tz) {
          return null === zz ? "drop" : zz.activated ? "keep" : 0 !== (tz & kt.r.NetSession) ? "fail" : "drop"
        }((null === (Fz = EO) || void 0 === Fz ? void 0 : Fz.join) === zz ? EO : null, tz);
        "keep" === Wz ? fO = {
          mask: tz,
          frames: sz
        } : "fail" === Wz && (0, Pt.j)(zz, new Error("the join's net session was lost to an event overflow"))
      }(iO, zz, tz))
    }

    function vv(zz, tz, sz) {
      const Fz = zz.overflow ??= {
        frames: 0,
        acks: 0,
        mask: 0,
        outcome: null
      };
      Fz.frames += sz, Fz.acks++, Fz.mask |= tz;
      const Wz = function(zz, tz, sz) {
        if (0 === (zz & kt.r.NetSession)) return "none";
        const Fz = null !== tz.rejoinedAt && sz - tz.rejoinedAt < rF;
        return null === tz.rejoin || Fz ? "fail" : "rejoin"
      }(tz, zz, performance.now());
      "none" !== Wz && queueMicrotask((() => {
        if (aO !== zz) return;
        const tz = "rejoin" === Wz && performance.now() - zo >= cz.f;
        Fz.outcome = tz ? "rejoined" : "failed", wv(function(zz, tz) {
          return {
            code: 0,
            name: "eventOverflow",
            reason: "Your game fell behind the server.",
            canReconnect: zz,
            automaticallyReconnect: tz,
            requiresRefresh: !1
          }
        }(null !== zz.rejoin, tz), zz.rejoin, tz), zv(), tz && (pO = performance.now())
      }))
    }

    function Uv(zz) {
      jo = zz, Ao && Kv(Ao, zz)
    }

    function Kv(zz, tz) {
      zz.style.visibility = tz ? "visible" : "hidden"
    }

    function uv(zz) {
      var tz;
      const sz = zz.roomName,
        Fz = null !== (tz = zz.joinOptions.lobbyName) && void 0 !== tz ? tz : null;
      return () => {
        Vo(sz, Fz)
      }
    }

    function Nv() {
      return sz.e(342).then((() => sz(42361))).then((zz => {
        let {
          invalidateGuestTrafficCode: tz
        } = zz;
        return tz()
      })).catch((zz => {
        console.warn(`${NX} the cached traffic code could not be dropped`, zz)
      }))
    }

    function bv(zz, tz, sz) {
      var Wz, Xz;
      let Oz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (ho) return;
      if ((null === (Wz = aO) || void 0 === Wz ? void 0 : Wz.conn) !== zz) return void(null !== iO && Xo.set(zz, {
        code: tz,
        reason: sz
      }));
      const {
        rejoin: oz,
        game: vz,
        joinedAt: Uz
      } = aO;
      Xv(), Tv();
      const Kz = (0, cz.j)(tz, (0, xF.g)(zz));
      if (console.info(`${NX} the game's connection closed with code ${tz} (${null!==(Xz=Kz.name)&&void 0!==Xz?Xz:"unrecognised"})`), tz === Fz.b.gameOrPluginKick.code || Oz || (0, ms.reportDisconnect)(Kz, SX, {
          closeReason: sz,
          sinceJoinedMs: performance.now() - Uz,
          game: vz
        }), Kz.requiresRefresh) {
        const zz = "outdatedVersion" === Kz.name,
          sz = new Error(`the game's connection closed with code ${tz}`),
          Fz = () => null === aO && null === iO;
        return void ZU({
          site: ms.JOIN_SITE,
          error: sz,
          outdated: zz
        }, (() => {
          Fz() && wv(Kz, null, !1)
        }), Fz)
      }
      const uz = Kz.canReconnect ? oz : null,
        Nz = null !== uz && Kz.automaticallyReconnect && performance.now() - zo >= cz.f;
      wv(Kz, uz, Nz)
    }

    function wv(zz, tz, sz) {
      var Fz;
      let Wz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        reasonKey: null,
        canPlayAgain: !1
      };
      if (yo) return;
      pF.b.unwantedLeave(sz && null !== tz && 0 === so.size), null === (Fz = to) || void 0 === Fz || Fz.abort();
      const Xz = new AbortController;
      to = Xz;
      const Oz = null === tz ? null : () => {
        Xz.signal.aborted || (Xz.abort(), tz())
      };
      if (sz && null !== Oz) {
        zo = performance.now();
        const zz = setTimeout(Oz, cz.e);
        Xz.signal.addEventListener("abort", (() => {
          clearTimeout(zz)
        }))
      }
      const oz = {
        code: zz.code,
        name: zz.name,
        reason: zz.reason,
        reasonKey: Wz.reasonKey,
        reconnect: Oz,
        reconnecting: sz,
        requiresRefresh: zz.requiresRefresh,
        canPlayAgain: Wz.canPlayAgain
      };
      if (so.size > 0)
        for (const Uz of [...so]) try {
          Uz(oz)
        } catch (vz) {
          console.error(`${NX} an unwanted-leave listener threw`, vz)
        } else HF((0, wF.f)(zz, null !== Oz, sz), Xz.signal).then((tz => {
          tz && (null !== Oz ? Oz() : zz.requiresRefresh && (0, lz.i)())
        }))
    }
    const Dv = {
      attachSocket: zz => xv(zz),
      onConnection: zz => (Oo.add(zz), () => {
        Oo.delete(zz)
      }),
      sendRaw: (zz, tz) => {
        const sz = tO;
        return null !== sz && sz.conn === zz && gU(sz, tz)
      },
      leaveRoom: Wv,
      closeSocket: zz => {
        var tz;
        (null === (tz = tO) || void 0 === tz ? void 0 : tz.conn) === zz && mv()
      },
      flushNet: Jv
    };

    function gv(zz) {
      var tz;
      let {
        aux: sz,
        payload: Fz
      } = zz;
      null === (tz = LX) || void 0 === tz || tz.queueOptions(sz, Fz)
    }

    function Hv(zz, tz) {
      gv(function(zz, tz) {
        return UW = zz ? {
          preventMovement: tz
        } : null, zz ? KW(tz) : {
          aux: Qt.Lb.AdEnd,
          payload: vW
        }
      }(zz, tz))
    }

    function Bv(zz) {
      var tz;
      MO = zz, null === (tz = LX) || void 0 === tz || tz.setUiPrefs(zz)
    }

    function Pv(zz, tz) {
      qX.setMaster(zz, tz)
    }

    function rv(zz) {
      var tz;
      dO = zz, null === (tz = LX) || void 0 === tz || tz.setEnvPrefs(zz)
    }

    function Yv(zz) {
      var tz;
      hO = zz, null === (tz = LX) || void 0 === tz || tz.setLookPrefs(zz)
    }

    function xv(zz) {
      var tz;
      let sz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new URL(zz.url).origin,
        Fz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if (zz.readyState === WebSocket.CLOSING || zz.readyState === WebSocket.CLOSED) return console.warn(`${NX} a closing or closed socket can't be attached`), null;
      const Wz = LX;
      if (!Wz || Wz.isStopped) return console.warn(`${NX} no core is running to attach a socket to`), zz.close(), null;
      if (null === (0, xz.f)()) return console.warn(`${NX} the game has not started to attach a socket to`), zz.close(), null;
      if (IO > Qt.y) return console.warn(`${NX} this core has attached all the sockets it can; reload to play on`), zz.close(), null;
      if (cO && !ZO && (oU(Wz, !1, "all"), Wz.isStopped || ho)) return zz.close(), null;
      mv();
      const Xz = IO++;
      if (!Mv(Wz, "open", Xz, Fz ? Qt.Kb.Resume : 0)) return zz.close(), null;
      Fz || wt.e.reset(), EO = null === iO ? null : {
        join: iO,
        conn: Xz,
        activated: !1
      }, zz.binaryType = "arraybuffer";
      const Oz = new Ns.d((() => {
          ! function(zz, tz) {
            if (tO !== tz || zz.isStopped || null === ev(tz, JX)) return;
            tz.detach(), tO = null, Cv(zz, tz, JX, "", !0), tz.ws.close()
          }(Wz, oz)
        })),
        oz = {
          ws: zz,
          conn: Xz,
          pending: [],
          pendingBytes: 0,
          left: !1,
          resume: Fz,
          token: null,
          detach: () => {
            Oz.dispose(), zz.removeEventListener("message", vz), zz.removeEventListener("open", Uz), zz.removeEventListener("close", Kz)
          }
        },
        vz = zz => {
          if (zz.data instanceof ArrayBuffer) {
            var tz;
            const sz = new Uint8Array(zz.data);
            Oz.heard(), oz.token = null !== (tz = (0, bs.c)(sz)) && void 0 !== tz ? tz : oz.token,
              function(zz, tz, sz) {
                JU(zz, (() => {
                  zz.rings.net.writeFrame(tz, sz) || zz.crash(ts.s, `a socket frame of ${sz.byteLength} bytes did not fit the net-in ring`)
                }));
                const Fz = zz.rings.net.cursor >= xX;
                (Fz || zz.netWrittenSinceFrame >= YX || document.hidden && performance.now() - CO >= TX) && oU(zz, !1, "budget")
              }(Wz, Xz, sz)
          }
        },
        Uz = () => {
          Fz || (0, ct.m)("wasm_socket_open", performance.now());
          for (const tz of oz.pending.splice(0)) zz.send(tz);
          oz.pendingBytes = 0
        },
        Kz = zz => {
          if (tO === oz && Wz.rings.net.cursor > 0 && oU(Wz, !1, "all"), tO === oz) {
            if (oz.detach(), tO = null, Cv(Wz, oz, zz.code, zz.reason) || Iv(Wz, oz)) return;
            Mv(Wz, "close", Xz), Zv(Xz, oz.left), bv(Xz, zz.code, zz.reason)
          }
        };
      return zz.addEventListener("message", vz), zz.addEventListener("open", Uz), zz.addEventListener("close", Kz), tO = oz, null === (tz = (0, xz.f)()) || void 0 === tz || tz.socketAttached(Xz), (0, Nz.q)({
        websocketUrl: sz
      }), Xz
    }

    function mv() {
      const zz = tO;
      if (!zz) return;
      const tz = LX,
        sz = zz.resume;
      sz && (Jv(), tO !== zz) || (tO = null, zz.detach(), zz.ws.close(), null !== tz && (Iv(tz, zz) || sz && Cv(tz, zz, IX)) || (null !== tz && Mv(tz, "close", zz.conn), Zv(zz.conn, zz.left)))
    }

    function Jv() {
      const zz = LX;
      null !== zz && !zz.isStopped && !ho && !ZO && zz.rings.net.cursor > 0 && oU(zz, !1, "all")
    }

    function Iv(zz, tz) {
      var sz;
      if (!tz.resume) return !1;
      const Fz = qO;
      return null !== Fz && null !== tz.token && "" !== tz.token && (Fz.pendingHold = {
        conn: tz.conn,
        token: `${Fz.roomId}:${tz.token}`
      }), Mv(zz, "close", tz.conn), null === (sz = (0, xz.f)()) || void 0 === sz || sz.socketDetached(tz.conn), !0
    }

    function Cv(zz, tz, sz) {
      let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
        Wz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      const Xz = ev(tz, sz);
      if (null === Xz) return !1;
      const {
        po: Oz,
        token: oz,
        game: vz,
        joinedAt: Uz
      } = Xz;
      if (!Mv(zz, "close", tz.conn, Qt.B.Held)) return !0;
      console.warn(`${NX} the game's connection ${Wz?"went silent":`dropped with code ${sz}`}, holding it`);
      const Kz = {
        closeReason: Fz,
        sinceJoinedMs: performance.now() - Uz,
        game: vz
      };
      return (0, ms.reportDisconnect)((0, cz.j)(sz), SX, Kz, Wz ? "silent" : void 0), Oz.heldConn = tz.conn, Oz.dropCode = sz, Oz.pendingHold = {
        conn: tz.conn,
        token: `${Oz.roomId}:${oz}`
      }, ZO || oU(zz, !1, "all"), !0
    }

    function ev(zz, tz) {
      const sz = qO,
        Wz = aO,
        Xz = zz.token;
      return null === sz || null === Wz || ho || zz.left || Wz.conn !== zz.conn || null === Xz || "" === Xz ? null : (0, Fz.f)(tz) && sz.resume.canHoldSeat() ? {
        po: sz,
        token: Xz,
        game: Wz.game,
        joinedAt: Wz.joinedAt
      } : null
    }

    function Zv(zz, tz) {
      var sz;
      null === (sz = (0, xz.f)()) || void 0 === sz || sz.closeGame(zz), (0, oW.b)().close(zz), tz || (0, Nz.q)({
        websocketUrl: null
      })
    }

    function Gv() {
      const zz = RO;
      if (null === zz) return;
      const tz = (0, xz.f)();
      ho || null === tz || tz.Zm(zz) ? RO = null : performance.now() - jO.pause >= GX && (jO.pause = performance.now(), console.warn(`${NX} the cmd ring had no room for SetPaused(${zz}): written before the next frame`))
    }

    function Tv() {
      const zz = qO;
      qO = null, null === zz || void 0 === zz || zz.resume.dispose()
    }

    function cv(zz, tz) {
      var sz, Fz;
      const {
        heldConn: Wz
      } = zz, Xz = zz.resume.resumingConn;
      zz.heldConn = 0, zz.pendingHold = null, qO === zz && (qO = null), "left" === tz ? zz.resume.leave() : zz.resume.dispose(), 0 === VO || (null === (sz = tO) || void 0 === sz ? void 0 : sz.conn) !== VO || "left" === tz && (null === (Fz = QO) || void 0 === Fz ? void 0 : Fz.conn) === VO || yv(VO), "gaveUp" === tz && 0 !== Xz && yv(Xz), 0 !== Wz && "refused" !== tz && (console.info(`${NX} the game held through its drop ${"left"===tz?"was left":"is given up"}`), null === LX || LX.isStopped || Mv(LX, "close", Wz), Zv(Wz, !1))
    }

    function jv(zz, tz) {
      const sz = tz.indexOf(":");
      return {
        roomId: sz < 0 ? zz.roomId : tz.slice(0, sz),
        roomToken: tz.slice(sz + 1)
      }
    }

    function Av(zz) {
      var tz;
      SO = zz, zz.conn === VO && (VO = 0);
      const sz = qO;
      null !== sz && (null === (tz = aO) || void 0 === tz ? void 0 : tz.conn) === zz.conn && sz.resume.onInitialInfo(zz)
    }

    function yv(zz) {
      var tz;
      const sz = tO;
      (null === sz || void 0 === sz ? void 0 : sz.conn) === zz && (sz.left = !0, null === (tz = (0, xz.f)()) || void 0 === tz || tz.socketLeft(), (0, Nz.q)({
        websocketUrl: null
      }), Wv(zz) ? setTimeout((() => {
        tO === sz && mv()
      }), jz.g) : mv())
    }

    function Mv(zz, tz, sz) {
      let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        Wz = !1;
      return JU(zz, (() => {
        const {
          net: Xz
        } = zz.rings;
        Wz = "open" === tz ? Xz.writeOpen(sz, Fz) : Xz.writeClose(sz, Fz), Wz || zz.crash(ts.s, `a socket ${tz} did not fit the net-in ring`)
      })), Wz
    }

    function dv(zz, tz) {
      let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if (hv()) {
        const Fz = "browser" === zz && (0, OW.P)() ? "blockedAfterLoss" : "unsupported";
        return (0, ms.reportUnsupportedFallback)(zz, Fz, tz, sz), void Qv(`the wasm client can't run here (${tz}; ${Fz})`, Fz)
      }(0, ms.showUnsupported)(zz, "unsupported", tz, sz)
    }

    function hv() {
      return co && "wasm" !== (0, ut.d)(window.location.search)
    }

    function Qv(zz, tz) {
      console.warn(`${NX} ${zz}: reloading on the JS client`), null !== tz && (0, ut.n)(tz), (0, ut.k)(null === tz ? "reloadOntoJs" : "decline");
      const sz = () => {
        (0, lz.h)(ut.q)
      };
      (0, ms.flushCrashReports)(lz.c).then(sz, sz)
    }

    function kv(zz, tz, sz, Fz) {
      return Ko(zz, tz, sz, Fz)
    }

    function iv() {
      null === bo || null === LX || LX.isStopped || ho || null !== gO || null === AX || (gO = bo(AX, av, qv().follow))
    }

    function Lv() {
      var zz, tz, sz;
      return null !== (zz = null === (tz = nX) || void 0 === tz || null === (sz = tz.textures) || void 0 === sz ? void 0 : sz.files()) && void 0 !== zz ? zz : null
    }

    function lv(zz) {
      sz.e(260).then((() => sz(39853))).then((tz => {
        let {
          setIconFileOverrides: sz
        } = tz;
        sz(zz)
      }), (zz => {
        console.warn(`${NX} the item icons couldn't take the texture pack's files`, zz)
      }))
    }

    function nv(zz) {
      qv().follow((tz => {
        null !== tz && Promise.all([Promise.all([sz.e(193), sz.e(45)]).then((() => sz(42386))), (0, OW.I)()]).then((zz => {
          let [{
            followPagePackFiles: sz
          }, Fz] = zz;
          const Wz = null === Fz || (0, zs.m)(Fz) ? "webgl" : Fz.backend;
          sz(tz, RF.g, Wz, (zz => {
            RF.g.setPageFiles(zz)
          }), av)
        }), (tz => {
          console.warn(`${NX} the texture pack's files didn't load: the previews draw the shipped ones until the next opens`, tz), zz()
        }))
      }))
    }

    function av(zz, tz) {
      console.warn(`${NX} ${zz}`, tz)
    }

    function qv() {
      return lX ??= new xW({
        load: zz => Promise.all([sz.e(193), sz.e(51)]).then((() => sz(42393))).then((tz => {
          let {
            startPageTexturePackFeed: sz
          } = tz;
          return sz(av, zz)
        })),
        store: xs.e,
        Iw: zz => {
          pX.then((() => {
            (0, ms.reportTexturePackFeedLoadFailure)(zz, SX)
          }))
        }
      }), lX
    }
    const Sv = zz => qv().follow(zz);

    function Vv() {
      return qv().loaded()
    }
    const Rv = function(zz, tz, sz) {
        let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now(),
          Wz = 0;
        return async function(Xz, Oz) {
          let oz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
          const vz = ++Wz,
            Uz = Fz() + tz,
            Kz = await
          function(zz, tz) {
            let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
            return new Promise((Fz => {
              const Wz = setTimeout((() => {
                Fz(null), zz.then((zz => {
                  null !== zz && (zz.joinedWithout(), sz(zz))
                }))
              }), tz);
              zz.then((zz => {
                clearTimeout(Wz), Fz(zz)
              }))
            }))
          }(zz(Xz), tz, (zz => {
            vz === Wz && oz() && Oz(zz, Fz() + tz).catch((zz => {
              sz("the texture pack step after the join failed", zz)
            }))
          }));
          return null === Kz ? null : Oz(Kz, Uz)
        }
      }((zz => (0, st.n)(zz) ? qv().request() : qv().forJoin()), YW.d, av),
      pv = function(zz, tz) {
        let sz = !1;
        return {
          setGamePackConfirm: zz => {
            sz = null !== zz, tz(zz)
          },
          packStep: (tz, Fz, Wz) => zz(tz, Fz, (() => sz && Wz()))
        }
      }(Rv, (zz => {
        qv().setGamePackConfirm(zz)
      }));

    function fv(zz) {
      pv.setGamePackConfirm(zz)
    }

    function Ev() {
      if (ho || null !== Bo || null === wo || null === Ho) return;
      const {
        backend: zz,
        canvas: tz,
        fallbackReason: sz,
        adapterVendor: Fz
      } = Ho, Wz = wo;
      wo = null;
      try {
        Bo = Wz({
          backend: zz,
          canvas: tz,
          fallbackReason: sz,
          adapterVendor: Fz,
          joinedGame: () => ho ? null : QO,
          inGame: tU,
          shaderPackReach: () => {
            var zz, tz;
            return null !== (zz = null === (tz = rO) || void 0 === tz ? void 0 : tz.reachInJoinedGame()) && void 0 !== zz ? zz : null
          },
          msaa: () => go > 1,
          writeCmd: (zz, tz, sz) => null !== AX && AX(zz, tz, sz),
          takeFailedMeshJobs: () => {
            var zz, tz;
            return null !== (zz = null === (tz = XO) || void 0 === tz ? void 0 : tz.takeFailedMeshJobs()) && void 0 !== zz ? zz : 0
          }
        })
      } catch (Xz) {
        console.error(`${NX} the frame telemetry didn't start`, Xz)
      }
    }

    function zU(zz, tz) {
      try {
        var sz, Fz, Wz;
        const Xz = oo && null !== (sz = null === (Fz = LX) || void 0 === Fz || null === (Wz = Fz.lastHeader) || void 0 === Wz ? void 0 : Wz.renderPending) && void 0 !== sz ? sz : 0;
        (0, Vs.i)(tz, zz, tU() && !(null !== UW), Xz)
      } catch (Xz) {
        (0, Vs.y)(), console.error(`${NX} the quality steps stopped`, Xz)
      }
    }

    function tU() {
      return null !== QO && Zo === QO && !ho
    }

    function sU(zz) {
      const tz = Bo;
      Bo = null;
      try {
        null === tz || void 0 === tz || tz.stop()
      } catch {}
      console.error(`${NX} the frame telemetry threw: it stops`, zz)
    }

    function FU(zz) {
      var tz, sz, Fz, Wz;
      if ((0, oW.b)().fire(zz), "message" === zz.type) {
        if (GO++, zz.RO === Qt.zc.ERROR && null !== iO) {
          var Xz;
          const {
            text: tz,
            dropsCache: sz
          } = (0, cz.q)((new TextDecoder).decode(zz.payload));
          Fo ||= sz, (null === (Xz = EO) || void 0 === Xz ? void 0 : Xz.conn) === zz.conn && (Wo = tz)
        } else if (zz.RO === kt.fc.ResumeComplete) {
          var Oz;
          null === (Oz = qO) || void 0 === Oz || Oz.resume.onResumeComplete(zz.conn)
        }
        return
      }
      zz.phase === Qt.F.Left ? TO = zz.conn : zz.phase === Qt.F.Activated && (null === (tz = EO) || void 0 === tz ? void 0 : tz.conn) === zz.conn ? EO.activated = !0 : zz.phase === Qt.F.Resumed ? function(zz) {
        var tz, sz;
        VO = zz;
        const Fz = qO;
        if (null === Fz || 0 === Fz.heldConn || (null === (tz = tO) || void 0 === tz ? void 0 : tz.conn) !== zz || !tO.resume || null === aO) return;
        console.info(`${NX} the game resumed on conn ${zz}, waiting for its InitialInfo`);
        const Wz = Fz.heldConn;
        Fz.heldConn = 0, tO.resume = !1, aO.conn = zz, (null === (sz = lO) || void 0 === sz ? void 0 : sz.conn) === Wz && (lO = {
          conn: zz,
          info: lO.info
        }), wt.e.apply({
          shopInfo: null,
          _shopVersion: Ft.e
        })
      }(zz.conn) : zz.phase === Qt.F.Held ? function(zz) {
        var tz;
        const sz = qO,
          Fz = null !== (tz = null === sz || void 0 === sz ? void 0 : sz.pendingHold) && void 0 !== tz ? tz : null;
        if (null !== sz && null !== Fz && Fz.conn === zz) return sz.pendingHold = null, sz.heldConn = zz, VO = 0, console.warn(`${NX} the core holds the game, reconnecting`), void sz.resume.onDropped(Fz.token);
        if (zz === VO) {
          VO = 0;
          const tz = LX;
          null === tz || tz.isStopped || (console.info(`${NX} the core held again a resumed game the shell ended before its InitialInfo: closing it again`), Mv(tz, "close", zz))
        }
      }(zz.conn) : zz.phase === Qt.F.Closed && (null === (sz = qO) || void 0 === sz || null === (Fz = sz.pendingHold) || void 0 === Fz ? void 0 : Fz.conn) === zz.conn && (qO.heldConn === zz.conn ? function(zz) {
        const tz = zz.heldConn,
          sz = zz.dropCode;
        cv(zz, "refused"), console.info(`${NX} the core didn't hold the game through its drop: it hadn't started`), queueMicrotask((() => {
          Zv(tz, !1), bv(tz, sz, "", !0)
        }))
      }(qO) : qO.pendingHold = null);
      const oz = Object.keys(Qt.F).find((tz => Qt.F[tz] === zz.phase)),
        vz = 0 === zz.code ? "" : ` (code ${zz.code})`;
      console.info(`${NX} conn ${zz.conn}: ${null!==oz&&void 0!==oz?oz:zz.phase}${vz}, ${GO} raw messages so far`), (null === (Wz = QO) || void 0 === Wz ? void 0 : Wz.conn) !== zz.conn || zz.phase !== Qt.F.Left && zz.phase !== Qt.F.Closed || Fv(null), LO !== zz.conn || zz.phase !== Qt.F.Left && zz.phase !== Qt.F.Closed || (LO = null, null === QO && null === iO && pF.b.setGame(void 0));
      for (const Kz of [...Oo]) try {
        Kz(zz.conn, zz.phase, zz.code)
      } catch (Uz) {
        (0, it.q)(Uz, `${NX} a connection listener threw`)
      }
    }

    function WU() {
      (0, OW.m)(), queueMicrotask((() => {
        try {
          HU()
        } catch (zz) {
          console.warn(`${NX} stopping before the reload threw`, zz)
        }(0, ms.flushCrashReports)(lz.c).then(lz.i, lz.i)
      }))
    }

    function XU() {
      const zz = LX;
      null === zz || zz.isStopped || null === tO || ZO || !zz.hasPendingCommands() || oU(zz, !1, "budget")
    }

    function OU(zz) {
      var tz;
      const sz = QO;
      zz.persisted || null === sz || (null === (tz = tO) || void 0 === tz ? void 0 : tz.conn) !== sz.conn || tO.left || sz.leave()
    }

    function oU(zz, tz, Fz) {
      let Wz = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const Xz = ZO;
      ZO = !0;
      try {
        return function(zz, tz, Fz, Wz) {
          var Xz, Oz, oz, vz;
          if (ho) return !1;
          if (JU(zz, UU), ho || zz.isStopped) return !1;
          wU() && mO("modelsIn");
          Gv(), CO = performance.now(), TO = null, cO = !1, (0, Yz.N)(), null === (Xz = uO) || void 0 === Xz || Xz.beforeFrame(), UF(CO, zz), (0, Yz.E)(CO, KU), eO = !0;
          const Uz = tz && bU();
          let Kz;
          try {
            Kz = zz.frame(CO, Uz, Fz)
          } finally {
            eO = !1
          }
          if (!Kz) return !1;
          Do.observe(null !== (Oz = null === (oz = zz.lastHeader) || void 0 === oz ? void 0 : oz.chunksCancelled) && void 0 !== Oz ? Oz : 0);
          const uz = zz.lastFrameKind,
            Nz = (0, Ct.d)(uz);
          (function(zz) {
            null !== hW && hW.afterFrame(performance.now(), zz)
          })(Nz), null === (vz = Po) || void 0 === vz || vz.frame(zz, CO, uz), tz && (Go = Nz);
          Nz && (0, mt.d)(CO);
          if (null !== Bo) try {
            Bo.frameRan(zz, CO, performance.now(), uz)
          } catch (wz) {
            sU(wz)
          }
          "drawn" === uz && NU() && function() {
            for (const zz of [...WW]) zz()
          }();
          zz.forEachNetOut(DU);
          const bz = tO;
          null !== TO && (null === bz || void 0 === bz ? void 0 : bz.conn) === TO && gU(bz, jz.i);
          (function(zz) {
            var tz;
            if (xo) return;
            null === Io && bU() && (Io = performance.now());
            if (null === iO && null === QO) return;
            null === Io || Co || (Co = !0, (0, ct.m)("wasm_startup_loaded", Io));
            let sz = 0;
            null !== QO ? sz = -1 : !0 === (null === (tz = EO) || void 0 === tz ? void 0 : tz.activated) && (sz = ~kt.K.TerrainDrawn);
            const Fz = zz.headerWord(kt.D.LoadSteps) & sz & ~Jo;
            if (0 === Fz) return;
            Jo |= Fz;
            const Wz = performance.now();
            for (const [Xz, Oz] of Object.entries(uU)) 0 !== (Fz & kt.K[Xz]) && (0, ct.m)(Oz, Wz)
          })(zz), tz && function(zz) {
            var tz, Fz, Wz;
            if (null === QO || !bU()) return;
            null === eo || Zo === QO && !eo.frame(CO, 0 !== (zz.headerWord(kt.D.LoadSteps) & kt.K.TerrainDrawn)) || (eo = null);
            const Xz = zz.lastHeader,
              Oz = !oo || 0 === (null === Xz || void 0 === Xz ? void 0 : Xz.renderPending);
            !mo && Oz && (mo = !0, performance.mark(rX));
            if (Zo === QO) return;
            const oz = null !== (tz = null === Xz || void 0 === Xz ? void 0 : Xz.firstView) && void 0 !== tz ? tz : Qt.Y.NotYet;
            if (oo && oz === Qt.Y.NotYet) return;
            if (xo && (!0 !== (null === (Fz = (0, xz.f)()) || void 0 === Fz ? void 0 : Fz.isSessionLive) || !Oz)) return;
            Zo = QO;
            const vz = QO;
            if (setTimeout((() => {
                QO === vz && (0, ct.i)()
              }), 0), null === (Wz = rO) || void 0 === Wz || Wz.playable(), function() {
                clearTimeout(zO), zO = setTimeout((() => {
                  tU() && eU((zz => {
                    let {
                      prefetchWorldgenWorker: tz
                    } = zz;
                    tz()
                  }))
                }), jX)
              }(), xo) return;
            xo = !0, performance.mark(PX), (0, TW.i)("render") && Promise.all([sz.e(74), sz.e(47)]).then((() => sz(4330))).then((zz => {
              let {
                renderDebugPlayable: tz
              } = zz;
              tz()
            }), (zz => {
              console.warn("The render debug topic didn't load", zz)
            }));
            const Uz = Math.round(performance.now());
            if (oo && oz !== Qt.Y.Drawn) {
              const zz = oz === Qt.Y.HeldBackstop ? "held_draws" : "long";
              if (console.warn(`${NX} playable at ${Uz} ms on the first view's ${zz} backstop: it wasn't drawn whole in time`), (0, ct.m)("wasm_view_backstop", Uz, zz), "long" === zz) {
                var Kz, uz;
                const zz = null !== (Kz = null === (uz = aO) || void 0 === uz ? void 0 : uz.game) && void 0 !== Kz ? Kz : "";
                eo = new Is.c((() => {
                  (0, ms.reportFirstViewNoTerrain)(zz, SX)
                }))
              }
            } else console.info(`${NX} playable at ${Uz} ms${oo?"":" (no renderer)"}`);
            setTimeout(No, 0), (0, gt.g)().catch((zz => {
              console.error(`${NX} item sprites didn't load, so item particles show the missing texture`, zz)
            })), LF.b.warm()
          }(zz);
          (0, ts.L)(zz, {
            worldgen: FO,
            mesh: XO
          }),
          function(zz) {
            zz.forEachEvent(uF);
            for (const tz of KF) try {
              (0, WF.e)(tz)
            } catch (wz) {
              if ((0, it.k)(wz)) {
                zz.crashOn(ts.m, wz);
                break
              }
              console.error(`${OF} an input action listener threw`, wz)
            }
            KF.length = 0
          }(zz), Wz && (0, It.e)();
          return !zz.isStopped
        }(zz, tz, "all" === Fz || zz.rings.net.cursor >= xX || zz.netKeptFrames >= mX, Wz)
      } finally {
        ZO = Xz
      }
    }

    function vU(zz) {
      console.error(`${NX} a frame-start listener threw`, zz)
    }

    function UU() {
      var zz, tz, sz, Fz;
      null === (zz = bO) || void 0 === zz || zz.drain(AX, yX), null === (tz = HO) || void 0 === tz || tz.drain(AX), null === (sz = BO) || void 0 === sz || sz.drain(performance.now()), uo(AX), null === (Fz = gO) || void 0 === Fz || Fz.drain()
    }

    function KU(zz) {
      console.error(`${NX} a before-frame listener threw`, zz)
    }
    const uU = {
      ChunkRequested: "wasm_chunk_requested",
      ChunkStored: "wasm_chunk_stored",
      MeshLanded: "wasm_mesh_landed",
      PlayerChunk: "wasm_player_chunk",
      TerrainDrawn: "wasm_terrain_drawn"
    };

    function NU() {
      return oo && bU()
    }

    function bU() {
      return PO && wU()
    }

    function wU() {
      return null === bO || bO.startupDone
    }

    function DU(zz, tz) {
      const sz = tO;
      (null === sz || void 0 === sz ? void 0 : sz.conn) === zz ? gU(sz, tz) : yO++
    }

    function gU(zz, tz) {
      const {
        ws: sz
      } = zz;
      return sz.readyState === WebSocket.OPEN ? (sz.send(tz), !0) : sz.readyState === WebSocket.CONNECTING && zz.pendingBytes + tz.byteLength <= ZX ? (zz.pending.push(tz.slice()), zz.pendingBytes += tz.byteLength, !0) : (yO++, !1)
    }

    function HU() {
      var zz, tz, sz, Fz, Wz, Xz, Oz, oz, vz, Uz, Kz, uz, Nz, bz, wz, Dz, gz;
      ho = !0, To.stop(), (0, jW.d)(), hW = null, Tv(), (0, Yz.L)().unlockPointer(), (0, Yz.I)(null), null === (zz = NO) || void 0 === zz || zz(), NO = null, null === (tz = (0, xz.n)()) || void 0 === tz || tz.followCursorAim(null), (0, It.J)(), (0, xz.e)(), qX.stop(), null === (sz = ro) || void 0 === sz || sz(), ro = null, null === (Fz = Yo) || void 0 === Fz || Fz(), Yo = null, null === (Wz = Bo) || void 0 === Wz || Wz.stop(), Bo = null, (0, es.m)(null), null === (Xz = sO) || void 0 === Xz || Xz(), sO = null, null === (Oz = FO) || void 0 === Oz || Oz.stop(), FO = null, null === (oz = XO) || void 0 === oz || oz.stop(), XO = null, null !== (vz = nX) && void 0 !== vz && null !== (Uz = vz.textures) && void 0 !== Uz && Uz.assets && lv(null), null === (Kz = nX) || void 0 === Kz || Kz.stop(), nX = null, aX = null;
      const Hz = OO;
      OO = null, Hz && (Hz.stop(), mU(Hz)), null === (uz = HO) || void 0 === uz || uz.dispose(), HO = null, null === (Nz = BO) || void 0 === Nz || Nz.dispose(), BO = null, bO = null, null === (bz = DO) || void 0 === bz || bz(), DO = null, null === (wz = KO) || void 0 === wz || wz(), KO = null, null === (Dz = uO) || void 0 === Dz || Dz.stop(), uO = null, zv(), pF.b.release(), mv();
      const Bz = gO;
      gO = null;
      try {
        null === Bz || void 0 === Bz || Bz.dispose()
      } catch (Pz) {
        console.warn(`${NX} the sky's images didn't release`, Pz)
      }(0, lF.e)(null), null === (gz = kX) || void 0 === gz || gz.pagePreviews().endSession(null === (0, Xt.u)())
    }

    function BU(zz, tz) {
      var sz, Fz;
      const Wz = null !== (sz = null === (Fz = OO) || void 0 === Fz ? void 0 : Fz.details()) && void 0 !== sz ? sz : {},
        Xz = zz.site === wX || zz.site === DX || zz.site === ms.RENDER_RELOAD_SITE || zz.site === gX ? zz.error instanceof WebAssembly.RuntimeError || zz.error instanceof Rt.c : !(0, zs.p)(zz.error) && (0, ts.E)(zz);
      Xz && zz.error instanceof Error && (0, Xt.ab)(zz.error);
      const Oz = Xz || zz.site === ts.u ? (0, ms.readTrap)(zz.error) : null,
        oz = null !== Oz && (0, Lt.f)(Oz.kind, Oz.refusedBytes) ? Oz.refusedBytes : 0,
        vz = null === oO ? (0, QF.r)(function() {
          try {
            return (0, Xt.z)().buffer.byteLength
          } catch {
            return 0
          }
        }(), oz, null) : oO.ceilingMayRefuse(oz),
        Uz = oz > 0 && !vz && hv();
      var Kz;
      if (Uz && ((0, ut.n)("oom"), (0, ut.k)("decline"), Mo = !0), HU(), (0, OW.d)()) return console.warn(`${NX} the session stopped at ${zz.site} as the page reloads`, zz.error), void((0, zs.p)(zz.error) || (null === (Kz = zz.header) || void 0 === Kz ? void 0 : Kz.lastError) === Qt.L.CoreBusy || (0, ms.reportStoppedCore)(zz, tz, Oz, {
        memoryDetails: Wz,
        declined: Uz
      }));
      (0, ms.showCrash)(zz, tz, Oz, {
        memoryDetails: Wz,
        declined: Uz
      })
    }

    function PU(zz) {
      const {
        input: tz,
        net: sz,
        worker: Fz
      } = zz.rings, Wz = zz.optionsDropped, Xz = tz.dropped + Wz + sz.dropped + Fz.dropped + yO;
      Xz !== AO && function(zz, tz) {
        const sz = performance.now();
        return !(sz - jO[zz] < GX) && (jO[zz] = sz, console.warn(`${NX} ${tz}`), !0)
      }("dropped", `${Xz} records dropped so far (input ${tz.dropped}, options ${Wz}, net ${sz.dropped}, worker ${Fz.dropped}, net-out ${yO})`) && (AO = Xz)
    }

    function rU() {
      var zz, tz;
      const sz = (0, Ps.c)();
      if (null === sz) return null;
      const Fz = (0, Ys.t)(sz);
      return {
        ...Fz,
        horizontal: Math.min(Fz.horizontal, null !== (zz = null === (tz = OO) || void 0 === tz ? void 0 : tz.shedDistanceInUse()) && void 0 !== zz ? zz : 1 / 0)
      }
    }

    function YU(zz) {
      var tz, sz;
      return {
        samples: oo ? go : null,
        sunShadows: zz,
        renderDistance: null !== (tz = null === (sz = rU()) || void 0 === sz ? void 0 : sz.horizontal) && void 0 !== tz ? tz : null
      }
    }

    function xU() {
      var zz, tz, sz;
      const Fz = rU();
      return {
        ...null === (zz = OO) || void 0 === zz ? void 0 : zz.pageKillSnapshot(),
        renderDistance: null !== (tz = null === Fz || void 0 === Fz ? void 0 : Fz.horizontal) && void 0 !== tz ? tz : null,
        renderDistanceVertical: null !== (sz = null === Fz || void 0 === Fz ? void 0 : Fz.vertical) && void 0 !== sz ? sz : null,
        chunkCap: vO,
        budgetBasis: UO,
        renderBackend: (0, OW.B)()
      }
    }

    function mU(zz) {
      console.info(`${NX} wasm memory at the session's end`, zz.details())
    }

    function JU(zz, tz) {
      if (!zz.isStopped) try {
        tz()
      } catch (sz) {
        zz.crash(ts.w, sz)
      }
    }

    function IU() {
      return WO ??= sz.e(68).then((() => sz(42398))).catch((zz => {
        throw WO = null, zz
      })), WO
    }
    async function CU() {
      const {
        createWorldgenWorker: zz,
        worldgenWorkerReady: tz
      } = await IU();
      return await tz(), zz
    }

    function eU(zz) {
      var tz;
      null === (tz = WO) || void 0 === tz || tz.then(zz, (() => {}))
    }

    function ZU(zz, tz, sz) {
      return async function(zz, tz, sz) {
        let {
          stop: Fz,
          stillWanted: Wz
        } = sz;
        const Xz = await (0, YF.g)(zz, {
          stillWanted: Wz,
          beforeReload: async () => {
            Fz(), await (0, ms.flushCrashReports)(lz.c)
          },
          reload: lz.i
        });
        return Xz || tz(), Xz
      }(zz, tz, {
        stop: HU,
        stillWanted: sz
      })
    }
    let GU = !1;

    function TU() {
      return GU = !0, async function(zz, tz, Fz) {
        const {
          gamePackSource: Wz
        } = await sz.e(343).then((() => sz(42364)));
        await pv.packStep(zz, ((sz, Fz) => sz.packForGame(zz, Wz(tz), Fz)), Fz)
      }(...arguments)
    }

    function cU(zz) {
      ! function(zz, tz) {
        zz((zz => {
          null === zz || void 0 === zz || zz.subscribe((zz => {
            let {
              pack: sz,
              gameSource: Fz
            } = zz;
            tz(null === Fz || null === sz ? null : {
              pack: sz,
              source: "" === Fz ? null : Fz
            })
          }))
        }))
      }(Sv, zz)
    }
    let jU = !1,
      AU = null,
      yU = !1,
      MU = !1;

    function dU() {
      var zz;
      jU || (jU = !0, ao("play", iz), (0, Nz.m)(new RU), oz.gameBridge.attach(Tz), lU().catch((() => {})), (0, xz.q)((zz => {
        zt(zz.setTextHost)
      })), zz = kU, so.add(zz), function(zz) {
        for (const tz of YO) zz(tz);
        xO.add(zz)
      }((zz => {
        QU(hU[zz])
      })))
    }
    const hU = {
      booted: Xz.k.INITIALISE_NOA,
      texturesIn: Xz.k.REGISTRATION,
      modelsIn: Xz.k.SETUP_LIFEFORMS
    };

    function QU(zz) {
      vz.o.Yg("matchmakeAndPlayStepCompleted", {
        step: zz,
        totalSubSteps: 1
      })
    }

    function kU(zz) {
      if (!yU) return;
      const {
        gameNameWithVariation: tz,
        lobbyName: sz
      } = (0, Nz.d)();
      if (zz.code === Fz.b.serverUpdating.code) return (new RU).leaveLive(), void LU(tz, sz);
      vz.o.Yg("unwantedLeftGame", {
        reason: iU(zz),
        requiresRefresh: zz.requiresRefresh,
        canReconnect: null !== zz.reconnect,
        automaticallyReconnect: zz.reconnecting,
        canPlayAgain: zz.canPlayAgain,
        gameNameWithVariation: tz,
        lobbyName: sz
      }), (new RU).leaveLive()
    }

    function iU(zz) {
      return null !== zz.reasonKey ? {
        translationKey: zz.reasonKey
      } : "gameOrPluginKick" === zz.name ? zz.reason : `You have disconnected from the server.\n${zz.reason}`
    }

    function LU(zz, tz) {
      var Fz;
      Fz = (0, Uz.A)(zz, tz), Promise.resolve().then((() => sz(1483))).then((zz => {
        let {
          navigatePreserveSearch: tz
        } = zz;
        tz(Fz)
      })).catch((zz => {
        console.warn("[bloxd-wasm-client] the page's router didn't navigate: loading the page instead", zz), (0, lz.g)(Fz)
      }))
    }

    function lU() {
      return AU ??= Promise.all([sz.e(69), sz.e(72), sz.e(71), sz.e(70), sz.e(83), sz.e(259), sz.e(199), sz.e(216), sz.e(237), sz.e(212), sz.e(46)]).then((() => sz(39803))).then((zz => {
        try {
          zz.attachPlayGameSources()
        } catch (tz) {
          throw console.error("[bloxd-wasm-client] the play sources did not attach", tz),
            function(zz) {
              pX.then((tz => {
                null === tz || tz.isStopped || ho ? console.warn(`${NX} the play sources threw as they attached, after the client stopped`, zz) : BU({
                  site: gX,
                  error: zz,
                  header: null
                }, SX)
              }))
            }(tz), tz
        }
      }), (zz => {
        throw AU = null, new xz.c(zz)
      })), AU
    }
    async function nU(zz, tz) {
      dU(), GU = !0, yU = !0;
      let sz = {
          place: zz.place,
          matchedAt: zz.matchedAt
        },
        Oz = zz.place.gameNameWithVariation;
      const oz = (0, uz.d)();
      let vz = null;
      const Uz = await Ro({
        matchmake: async () => {
          let tz = sz;
          if (sz = null, null === tz) {
            const sz = await zz.rematch();
            if (sz.isError()) throw vz = sz.asError().forward(), new Error(sz.asError().message);
            tz = {
              place: sz.getValue(),
              matchedAt: performance.now()
            }
          }
          Oz = tz.place.gameNameWithVariation;
          return {
            target: await (0, yz.f)(zz.userContext, tz.place, Vv(), oz),
            matchedAt: tz.matchedAt,
            freshMs: yz.d
          }
        },
        pageReady: lU,
        onFailure: (zz, tz) => {
          null === vz && function(zz, tz) {
            (0, ms.reportPageJoinFailure)(zz, SX, tz)
          }(zz, {
            sinceJoinStartMs: tz,
            game: Oz
          })
        },
        rejoin: () => () => {},
        invalidateTrafficCode: () => zz.userContext.invalidateTrafficCode(),
        signal: tz
      });
      switch (Uz.kind) {
        case "joined":
          if (oz) {
            const {
              game: zz
            } = Uz;
            (0, uz.o)((() => {
              zz.endJoinAd()
            }))
          }
          return MU || (MU = !0, (0, Dz.d)()), yU ? (QU(Xz.k.CONNECT_TO_GAME_SERVER), QU(Xz.k.SHADER_PACK), function() {
            var zz, tz;
            return null !== (zz = null === (tz = rO) || void 0 === tz ? void 0 : tz.runsInJoinedGame()) && void 0 !== zz && zz
          }() && (0, wz.e)(zz.userContext, Oz).catch((zz => {
            console.error("Failed to report the shader pack session", zz)
          })), function() {
            const zz = function() {
              var zz, tz;
              return null !== (zz = null === (tz = rO) || void 0 === tz ? void 0 : tz.couldntRunInJoinedGame()) && void 0 !== zz ? zz : null
            }();
            null !== zz && (0, wz.b)(zz)
          }(), Wz.e.value(void 0)) : VU("The server ended the game as it joined");
        case "failed":
          if (!Uz.reloading) {
            if (null !== vz) return vz;
            if ((Uz.error instanceof jz.m || Uz.error instanceof jz.d) && Uz.error.code === Fz.b.serverUpdating.code) {
              if (tz.aborted) return VU("Left the game while it loaded");
              const {
                gameNameWithVariation: zz,
                lobbyName: sz
              } = (0, Nz.d)();
              return LU(zz, sz), VU("The server is updating")
            }
            return Uz.error instanceof Lz.f ? Wz.e.errorWithCode(Uz.error.messageKey, Xz.k.SHADER_PACK, {
              severity: "medium"
            }) : Wz.e.errorWithCode(function(zz) {
              if (zz instanceof jz.x || zz instanceof Pz.e) return zz.message;
              if (aU(zz)) return (0, cz.m)(zz.code, zz.serverText);
              return cz.g
            }(Uz.error), Xz.k.CONNECT_TO_GAME_SERVER, {
              error: qU(Uz.error) ? Uz.error : void 0,
              severity: SU(Uz.error),
              gameServerUnreachable: (0, Az.b)(Uz.error),
              rematch: (0, Hz.d)(Uz.error),
              gameRefused: (0, Bz.c)(Uz.error)
            })
          }
          return VU("Reloading into the new build");
        case "stopped":
          return VU("The game client stopped, and shows why");
        case "ds":
          return VU("Left the game while it loaded")
      }
    }

    function aU(zz) {
      return zz instanceof jz.m || zz instanceof jz.d && "attach" !== zz.stage
    }

    function qU(zz) {
      return !(zz instanceof jz.x) && !aU(zz) && void 0 === (0, Az.b)(zz)
    }

    function SU(zz) {
      return aU(zz) ? zz instanceof jz.d && (0, cz.j)(zz.code).requiresRefresh ? "medium" : "low" : qU(zz) || zz instanceof jz.x ? "medium" : "low"
    }

    function VU(zz) {
      return Wz.e.errorWithCode(zz, Xz.k.CONNECT_TO_GAME_SERVER, {
        severity: "low",
        ds: !0
      })
    }
    class RU {
      leave(zz) {
        if ((0, rz.c)()) {
          var tz, sz;
          if ((0, Oz.e)()) return;
          (0, bz.b)(!0 === (null === (tz = (0, rz.j)()) || void 0 === tz || null === (sz = tz.currentViewer) || void 0 === sz ? void 0 : sz.unsavedChanges), zz)
        } else this.leaveLive()
      }
      leaveLive() {
        var zz;
        GU && (null === (zz = Vv()) || void 0 === zz || zz.endGamePack());
        if (!yU) return;
        yU = !1, (0, gz.c)();
        try {
          var tz;
          null === (tz = (0, xz.n)()) || void 0 === tz || tz.clearWasmCameraScreen()
        } catch (Fz) {
          console.error("[bloxd-wasm-client] the camera screen didn't clear", Fz)
        }
        const {
          gameNameWithVariation: sz
        } = (0, Nz.d)();
        try {
          Ov()
        } finally {
          (0, Nz.q)({
            websocketUrl: null
          }), vz.o.Yg("leaveGame", {
            gameNameWithVariation: sz
          }), (0, Kz.W)()
        }
      }
      isReplay() {
        return (0, rz.c)()
      }
    }
  },
  40088: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Wz,
      f: () => Fz,
      h: () => oz,
      j: () => Oz
    });
    const Fz = 12e4,
      Wz = 3e4,
      Xz = {
        hidden: () => "undefined" !== typeof document && document.hidden,
        listen: zz => "undefined" === typeof document ? () => {} : (document.addEventListener("visibilitychange", zz), () => {
          document.removeEventListener("visibilitychange", zz)
        })
      };

    function Oz(zz) {
      return `it sent no start within ${Math.round(zz)} ms`
    }
    class oz {
      constructor(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Xz;
        this.timeoutMs = zz, this.onTimeout = tz, this.now = sz, this.visibility = Fz, this.timer = null, this.counted = 0, this.step = null, this.unlisten = void 0, this.unlisten = Fz.listen((() => {
          this.onVisibility()
        })), Fz.hidden() || this.next()
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
        const tz = Math.min(zz, 5e3);
        this.step = {
          at: this.now(),
          ms: tz
        }, this.arm(tz, (() => {
          this.counted += this.credit(), this.step = null, this.next()
        }))
      }
      arm(zz, tz) {
        this.timer = setTimeout((() => {
          this.timer = null, tz()
        }), zz)
      }
    }
  },
  39985: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Fz
    });
    const Fz = {
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
  38147: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Xz
    });
    var Fz = sz(3376);
    const Wz = ["none", "idle", "now"];

    function Xz() {
      const zz = () => (0, Fz.J)();
      return {
        memoryBytes: () => (0, Fz.z)().buffer.byteLength,
        reserveUpFront: tz => zz().Gu(tz),
        reserveAhead: tz => zz().Zu(tz),
        setCeiling: tz => {
          zz().Tu(tz)
        },
        lowWater: () => Wz[zz().eu()] ?? "none",
        stats: () => function(zz) {
          const tz = new Uint32Array((0, Fz.z)().buffer, zz, 17),
            sz = zz => tz[zz] ?? 0,
            Wz = zz => ({
              upFront: sz(zz),
              ahead: sz(zz + 1),
              onDemandInFrame: sz(zz + 2),
              onDemand: sz(zz + 3)
            });
          return {
            memoryBytes: sz(0),
            initialBytes: sz(1),
            liveBytes: sz(2),
            peakLiveBytes: sz(3),
            headroomBytes: sz(4),
            unusedBytes: sz(5),
            ceilingBytes: sz(6),
            reservesRefused: sz(7),
            grows: Wz(8),
            grownBytes: Wz(12),
            allocationsRefused: sz(16)
          }
        }(zz().cu()),
        takeBallast: () => zz().ju(),
        takePressure: () => zz().Au()
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);