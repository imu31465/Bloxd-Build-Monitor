export const id = 204;
export const ids = [204];
export const modules = {
  39969: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => cU
    });
    class cU {
      constructor(UU, XU) {
        this.read = UU, this.apply = XU, this.release = null
      }
      turn(UU, XU) {
        const zU = null === this.release ? this.read() : this.release.transitionMs;
        this.stop(!1), this.apply({
          forcedCameraDirectionTransitionMs: XU,
          forcedCameraDirection: [UU[0], UU[1], UU[2]]
        }), this.release = {
          timer: setTimeout((() => {
            this.stop(!0)
          }), XU + 100),
          transitionMs: zU
        }
      }
      dispose() {
        this.stop(!0)
      }
      stop(UU) {
        null !== this.release && (clearTimeout(this.release.timer), UU && this.apply({
          forcedCameraDirection: null,
          forcedCameraDirectionTransitionMs: this.release.transitionMs
        }), this.release = null)
      }
    }
  },
  39462: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => QU,
      i: () => yU
    });
    const cU = new Map;

    function yU(UU, XU) {
      cU.set(UU, XU)
    }

    function QU(UU) {
      return UU ? cU.get(UU) : void 0
    }
  },
  37083: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => EU,
      i: () => FU,
      l: () => DU,
      o: () => oU,
      q: () => GU
    });
    var cU = zU(654),
      yU = zU(1817),
      QU = zU(5326);
    class AU {
      constructor(UU, XU) {
        this.width = UU, this.xY = XU, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(UU * XU)
      }
      push(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const zU = this.data,
          cU = this.next * this.width;
        for (let yU = 0; yU < this.width; yU++) zU[cU + yU] = UU[XU + yU];
        this.next = (this.next + 1) % this.xY, this.size = Math.min(this.size + 1, this.xY)
      }
      rows() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1 / 0;
        const zU = [],
          cU = (this.next - this.size + this.xY) % this.xY;
        for (let yU = 0; yU < this.size; yU++) {
          const QU = (cU + yU) % this.xY * this.width;
          this.data[QU + UU] >= XU && zU.push(Array.from(this.data.subarray(QU, QU + this.width)))
        }
        return zU
      }
      lines() {
        return this.rows().map((UU => UU.join(",")))
      }
    }
    const FU = 10,
      oU = {
        idle: 0,
        cY: 1,
        LO: 2,
        kS: 3,
        Yt: 4
      },
      DU = {
        none: 0,
        skipped: 1,
        paced: 2,
        drawn: 3
      },
      EU = {
        lockGained: 1,
        lockLost: 2,
        lockError: 3,
        visible: 4,
        hidden: 5,
        focus: 6,
        blur: 7,
        jsClient: 8,
        wasmClient: 9,
        droppedCopies: 10,
        stepsLost: 11,
        cameraSetsLost: 12
      },
      YU = 12e3,
      NU = ["nowMs", "dtMs", "rawX", "rawY", "turnedX", "turnedY", "outcome", "velocityX", "velocityY", "limit"],
      IU = ["timeStamp", "nowMs", "movementX", "movementY", "locked"],
      pU = ["nowMs", "dtMs", "heading", "pitch", "kind"],
      aU = ["nowMs", "source", "headingBefore", "pitchBefore", "headingAfter", "pitchAfter"],
      tU = ["nowMs", "change", "count"];

    function gU(UU) {
      return "js" === UU ? EU.jsClient : EU.wasmClient
    }
    class kU {
      constructor() {
        this.steps = new AU(FU, YU), this.events = new AU(IU.length, YU), this.frames = new AU(pU.length, YU), this.cameraSets = new AU(QU.d, 256), this.changes = new AU(tU.length, 256)
      }
    }
    const GU = new class {
      constructor() {
        this.rings = null, this.sample = new Float64Array(IU.length), this.startedClient = null, this.startedAtMs = 0
      }
      get client() {
        return this.startedClient
      }
      start(UU, XU) {
        this.startedClient = UU, this.startedAtMs = performance.now(), null !== this.rings ? this.change(gU(UU)) : XU && this.allocate()
      }
      lockGained() {
        this.allocate(), this.change(EU.lockGained)
      }
      allocate() {
        null === this.rings && (this.rings = new kU, null !== this.startedClient && this.changeAt(this.startedAtMs, gU(this.startedClient), 1))
      }
      step(UU, XU) {
        var zU;
        UU[XU + 6] !== oU.Yt && (null === (zU = this.rings) || void 0 === zU || zU.steps.push(UU, XU))
      }
      cameraSet(UU, XU) {
        var zU;
        null === (zU = this.rings) || void 0 === zU || zU.cameraSets.push(UU, XU)
      }
      mouseMove(UU, XU) {
        const zU = this.rings;
        if (null === zU) return;
        const cU = this.sample;
        cU[0] = UU.timeStamp, cU[1] = performance.now(), cU[2] = UU.movementX, cU[3] = UU.movementY, cU[4] = XU ? 1 : 0, zU.events.push(cU)
      }
      frame(UU, XU, zU, cU) {
        const yU = this.rings;
        if (null === yU || cU === DU.none) return;
        const QU = this.sample;
        QU[0] = performance.now(), QU[1] = UU, QU[2] = XU, QU[3] = zU, QU[4] = cU, yU.frames.push(QU)
      }
      change(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.changeAt(performance.now(), UU, XU)
      }
      changeAt(UU, XU, zU) {
        const cU = this.rings;
        if (null === cU) return;
        const yU = this.sample;
        yU[0] = UU, yU[1] = XU, yU[2] = zU, cU.changes.push(yU)
      }
      dumpText() {
        var UU, XU;
        const zU = this.rings;
        return [`look records (${this.startedClient}): ${NU.join(",")}`, ...null !== (UU = null === zU || void 0 === zU ? void 0 : zU.steps.lines()) && void 0 !== UU ? UU : [], `mousemove events: ${IU.join(",")}`, ...null !== (XU = null === zU || void 0 === zU ? void 0 : zU.events.lines()) && void 0 !== XU ? XU : []].join("\n")
      }
      toJson(UU, XU) {
        var zU;
        const yU = UU - 6e4,
          QU = this.rings,
          AU = function(UU, XU) {
            var zU;
            let cU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            const QU = null !== (zU = null === UU || void 0 === UU ? void 0 : UU.rows(cU, yU)) && void 0 !== zU ? zU : [];
            return {
              columns: XU,
              fromMs: 0 === QU.length ? null : QU[0][cU],
              rows: QU
            }
          };
        return {
          version: cU.d,
          client: null !== (zU = this.startedClient) && void 0 !== zU ? zU : "not started",
          savedAt: (new Date).toISOString(),
          savedAtMs: UU,
          keptMs: 6e4,
          page: window.location.href,
          userAgent: navigator.userAgent,
          devicePixelRatio: window.devicePixelRatio,
          screen: {
            width: window.screen.width,
            height: window.screen.height
          },
          Tt: null !== document.pointerLockElement,
          visibility: document.visibilityState,
          ...XU,
          outcomes: oU,
          frameKinds: DU,
          changes: EU,
          lookSteps: AU(null === QU || void 0 === QU ? void 0 : QU.steps, NU),
          mouseMoves: AU(null === QU || void 0 === QU ? void 0 : QU.events, IU, 1),
          frames: AU(null === QU || void 0 === QU ? void 0 : QU.frames, pU),
          cameraSets: AU(null === QU || void 0 === QU ? void 0 : QU.cameraSets, aU),
          pageChanges: AU(null === QU || void 0 === QU ? void 0 : QU.changes, tU)
        }
      }
      save(UU) {
        const XU = JSON.stringify(this.toJson(performance.now(), UU));
        (0, yU.c)(new Blob([XU], {
          type: "application/json"
        }), `bloxd-mouse-look-${(new Date).toISOString().replace(/[:.]/g,"-")}.json`)
      }
    }
  },
  40504: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => yU
    });
    var cU = zU(38989);

    function yU(UU, XU, zU) {
      var yU, QU, AU, FU, oU, DU, EU;
      const YU = (0, cU.c)(UU, XU, zU[0], zU[1], zU[2]),
        NU = YU ? null !== (yU = YU.textCell) && void 0 !== yU ? yU : YU.rect.anchor : zU,
        IU = XU(NU[0], NU[1], NU[2]);
      return {
        pos: [zU[0], zU[1], zU[2]],
        noticeboardSpan: YU && {
          width: YU.rect.width,
          height: YU.rect.height
        },
        text: null !== (QU = null === IU || void 0 === IU || null === (AU = IU.persisted) || void 0 === AU || null === (FU = AU.shared) || void 0 === FU ? void 0 : FU.text) && void 0 !== QU ? QU : "",
        textSize: null !== (oU = null === IU || void 0 === IU || null === (DU = IU.persisted) || void 0 === DU || null === (EU = DU.shared) || void 0 === EU ? void 0 : EU.textSize) && void 0 !== oU ? oU : null
      }
    }
  },
  39293: (UU, XU, zU) => {
    function cU(UU) {
      switch (UU.kind) {
        case void 0:
        case "flatEmissive":
          return !1;
        case "chevronPath":
        case "furnaceFire":
          return !0
      }
    }
    zU.d(XU, {
      e: () => yU,
      h: () => QU,
      l: () => cU
    });
    const yU = 4,
      QU = 3
  },
  40012: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => yU,
      f: () => QU
    });
    var cU = zU(344);
    const yU = new Set(["bedwars", "bridgeBattle", "buildAFactory2", "classic", "clutch", "containmentBreach", "cooking", "defusal", "frontline", "goalRush", "greenville", "hideseek", "luckyBedwars", "murderMystery", "ninetyNineNights", "oneBlock", "plots", "pvpCiv", "secretSanta", "skyIslands", "skyblock", "tsunami"]);
    class QU {
      constructor(UU) {
        this.importGame = UU, this.loads = new Map, this.loaded = new Map
      }
      load(UU) {
        const XU = (0, cU.Tb)(UU);
        if (!yU.has(XU)) return Promise.resolve(void 0);
        let zU = this.loads.get(XU);
        return zU || (zU = this.importGame(XU).then((UU => {
          const zU = UU.default;
          if ("function" !== typeof zU) throw new Error(`${XU}'s client code has no default-exported factory`);
          return this.loaded.set(XU, zU), zU
        })).catch((UU => {
          throw this.loads.delete(XU), UU
        })), this.loads.set(XU, zU)), zU
      }
      loadedFactory(UU) {
        const XU = (0, cU.Tb)(UU);
        if (!yU.has(XU)) return;
        const zU = this.loaded.get(XU);
        if (!zU) throw new Error(`${XU}'s client code started before it loaded`);
        return zU
      }
    }
  },
  40007: (UU, XU, zU) => {
    function cU(UU, XU) {
      return Object.values({
        ...UU,
        ...XU
      }).filter((UU => null !== UU))
    }
    zU.d(XU, {
      e: () => cU
    })
  },
  40510: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => AU
    });
    var cU = zU(9894),
      yU = zU(34884),
      QU = zU(3660);

    function AU(UU) {
      if (UU === cU.c) return 0;
      const XU = (0, QU.c)(UU);
      if (void 0 !== XU && XU <= yU.MAX_BLOCK_ID) return XU;
      const zU = (0, QU.c)(UU.split("|")[0]);
      if (void 0 !== zU && zU <= yU.MAX_BLOCK_ID && (0, yU.rootMetaDescOf)(zU) === UU) return zU;
      throw new Error(`Invalid block name. You sent ${UU}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`)
    }
  },
  40063: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => yU
    });
    var cU = zU(27);
    class yU {
      constructor(UU) {
        this.screen = UU, this.hidesHud = !1
      }
      show(UU, XU) {
        this.screen.setFade(UU.colour, UU.alpha), this.screen.setLetterbox(!0 === XU.letterbox, UU.alpha < 1), this.setHudHidden(!0 === XU.hideHud)
      }
      clear() {
        this.screen.clear(), this.setHudHidden(!1)
      }
      setHudHidden(UU) {
        this.hidesHud !== UU && (this.hidesHud = UU, cU.e.set({
          isUiHiddenByCamera: UU
        }))
      }
    }
  },
  40032: (UU, XU, zU) => {
    zU.d(XU, {
      A: () => FU,
      B: () => EU,
      e: () => cU,
      f: () => NU,
      j: () => YU,
      l: () => AU,
      n: () => pU,
      r: () => oU,
      v: () => aU,
      z: () => DU
    });
    const cU = Math.PI / 2 - .001,
      yU = 2 * Math.PI,
      QU = 1e-9;

    function AU(UU, XU) {
      XU.heading = UU.heading, XU.pitch = UU.pitch
    }

    function FU(UU, XU) {
      const zU = XU - UU;
      return zU - yU * Math.floor((zU + Math.PI) / yU)
    }

    function oU(UU, XU, zU) {
      return UU + FU(UU, XU) * zU
    }

    function DU(UU) {
      if (!Number.isFinite(UU)) return UU;
      const XU = UU - yU * Math.floor(UU / yU);
      return XU < yU ? XU : 0
    }

    function EU(UU, XU) {
      return UU + FU(UU, XU)
    }

    function YU(UU) {
      return Math.max(-cU, Math.min(cU, UU))
    }

    function NU(UU, XU, zU) {
      const cU = Math.cos(XU);
      return zU[0] = cU * Math.sin(UU), zU[1] = -Math.sin(XU), zU[2] = cU * Math.cos(UU), zU
    }

    function IU(UU, XU, zU, cU) {
      const yU = Math.sqrt(UU * UU + zU * zU);
      return yU < QU && Math.abs(XU) < QU || (yU >= QU && (cU.heading = Math.atan2(UU, zU)), cU.pitch = YU(Math.atan2(-XU, yU) + 0)), cU
    }

    function pU(UU, XU) {
      return IU(UU[0], UU[1], UU[2], XU)
    }

    function aU(UU, XU, zU) {
      return IU(XU[0] - UU[0], XU[1] - UU[1], XU[2] - UU[2], zU)
    }
  },
  40060: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => QU,
      d: () => yU
    });
    var cU = zU(40032);

    function yU(UU) {
      var XU;
      const zU = "default" === UU.mode ? "movement" : null !== (XU = UU.playerFacing) && void 0 !== XU ? XU : "movement";
      return "cursor" === zU ? {
        facing: zU,
        mouseTurns: null
      } : {
        facing: zU,
        mouseTurns: "default" !== UU.mode && void 0 !== UU.playerLook ? "look" : "view"
      }
    }

    function QU(UU, XU, zU, yU, QU, AU) {
      return AU.zq = 0, AU.Qq = 0, AU.pointedAt = void 0, void 0 !== yU ? QU ? (AU.pointedAt = yU, UU) : (0, cU.z)(yU.heading) : QU ? (AU.zq = XU, AU.Qq = zU, UU) : (0, cU.z)(UU + XU)
    }
  },
  40048: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => nU
    });
    var cU = zU(40056),
      yU = zU(40032),
      QU = zU(37723);

    function AU(UU, XU, zU, cU) {
      if (!(cU > 0)) return XU;
      const yU = XU > UU ? Math.min(XU, UU + zU / cU) : Math.max(XU, UU - zU / cU);
      return Math.abs(XU - yU) < 1e-9 ? XU : yU
    }
    class FU {
      constructor() {
        this.phase = null, this.outMs = 0, this.holdMs = 0, this.inMs = 0, this.heldMs = 0, this.sinceTurnMs = 1 / 0, this.clearMs = 1 / 0, this.waiting = null, this.screen = {
          colour: cU.d,
          alpha: 0
        }
      }
      getScreen() {
        return this.screen
      }
      fadeOut(UU) {
        !this.isGoingOut() && this.sinceTurnMs < cU.m.minFadeTurnMs ? this.waiting = {
          turn: "out",
          transition: UU
        } : (this.waiting = null, this.startOut(UU))
      }
      fadeIn(UU) {
        this.isGoingOut() ? this.sinceTurnMs < cU.m.minFadeTurnMs ? this.waiting = {
          turn: "in",
          minMs: UU
        } : (this.waiting = null, this.startIn(UU)) : this.waiting = null
      }
      advance(UU) {
        const XU = this.waiting;
        if (null === XU) return this.step(UU);
        const zU = cU.m.minFadeTurnMs - this.sinceTurnMs;
        if (zU > UU) return this.step(UU);
        const yU = this.step(zU);
        return this.waiting = null, "out" === XU.turn ? this.startOut(XU.transition) : this.startIn(XU.minMs), this.step(UU - zU) || yU
      }
      isGoingOut() {
        return "out" === this.phase || "hold" === this.phase
      }
      startOut(UU) {
        ("in" === this.phase || null === this.phase && this.clearMs < cU.m.minFadeTurnMs) && (this.sinceTurnMs = 0), this.phase = "out", 0 === this.screen.alpha && (this.screen.colour = UU.colour), this.outMs = UU.outMs, this.holdMs = UU.holdMs, this.inMs = UU.inMs
      }
      startIn(UU) {
        this.isGoingOut() && (this.sinceTurnMs = 0), this.phase = "in", this.inMs = Math.max(UU, this.inMs)
      }
      step(UU) {
        const XU = this.screen;
        this.sinceTurnMs += UU, null === this.phase && (this.clearMs += UU);
        let zU = !1,
          yU = UU;
        if ("out" === this.phase) {
          const cU = (1 - XU.alpha) * this.outMs;
          if (XU.alpha = AU(XU.alpha, 1, UU, this.outMs), XU.alpha < 1) return !1;
          this.phase = "hold", this.heldMs = 0, yU = Math.max(0, UU - cU), zU = !0
        }
        let QU = UU;
        if ("hold" === this.phase) {
          this.heldMs += yU;
          const UU = Math.min(this.heldMs - this.holdMs, this.sinceTurnMs - cU.m.minFadeTurnMs);
          if (UU < 0 || zU) return zU;
          this.phase = "in", this.sinceTurnMs = UU, QU = UU
        }
        return "in" === this.phase && (XU.alpha = AU(XU.alpha, 0, QU, this.inMs), XU.alpha <= 0 && (this.phase = null, this.clearMs = 0)), zU
      }
    }
    var oU = zU(40023),
      DU = zU(40058),
      EU = zU(1974),
      YU = zU(37284);

    function NU(UU, XU) {
      for (let zU = 0; zU < XU.length; zU++) XU[zU] = UU[zU]
    }

    function IU(UU, XU) {
      var zU;
      return null !== (zU = UU.fov) && void 0 !== zU ? zU : XU.getDefaultFov()
    }

    function pU(UU, XU, zU, cU, yU) {
      const QU = 2 / cU,
        AU = Math.exp(-QU * yU);
      for (let FU = 0; FU < UU.length; FU++) {
        const cU = UU[FU] - zU[FU],
          oU = (XU[FU] + QU * cU) * yU;
        UU[FU] = zU[FU] + (cU + oU) * AU, XU[FU] = (XU[FU] - QU * oU) * AU
      }
    }
    class aU {
      constructor(UU, XU, zU, cU) {
        var QU, AU, FU, oU, DU;
        this.settings = UU, this.qY = XU, this.targets = zU, this.base = void 0, this.closestDistance = void 0, this.furthestDistance = void 0, this.goal = void 0, this.framedTargets = !1, this.smoothed = [0, 0, 0, 0, 0, 0], this.Et = [0, 0, 0, 0, 0, 0], this.started = !1, this.angles = {
          heading: 0,
          pitch: 0
        }, this.points = [], this.forward = [0, 0, 0], this.base = {
          heading: (0, yU.z)((0, EU.l)(null !== (QU = UU.viewHeading) && void 0 !== QU ? QU : 0)),
          pitch: (0, yU.j)((0, EU.l)(null !== (AU = UU.viewElevation) && void 0 !== AU ? AU : 45))
        }, this.closestDistance = null !== (FU = UU.closestDistance) && void 0 !== FU ? FU : Math.min(6, null !== (oU = UU.furthestDistance) && void 0 !== oU ? oU : 1 / 0), this.furthestDistance = null !== (DU = UU.furthestDistance) && void 0 !== DU ? DU : Math.max(64, this.closestDistance);
        const YU = (0, yU.f)(this.base.heading, this.base.pitch, this.forward),
          NU = cU.position,
          IU = this.closestDistance;
        this.goal = [NU[0] + YU[0] * IU, NU[1] + YU[1] * IU, NU[2] + YU[2] * IU, IU, this.base.heading, this.base.pitch]
      }
      update(UU, XU, zU) {
        var cU, QU;
        this.placeGoal(null !== (cU = this.settings.fov) && void 0 !== cU ? cU : this.qY.getBaseFov()), this.goal[4] = (0, yU.B)(this.smoothed[4], this.base.heading), this.goal[5] = this.base.pitch;
        const AU = null !== (QU = this.settings.smoothMs) && void 0 !== QU ? QU : 400;
        !this.started || AU < 1 ? (NU(this.goal, this.smoothed), this.Et.fill(0), this.started = !0) : pU(this.smoothed, this.Et, this.goal, AU, UU), this.angles.heading = this.smoothed[4], this.angles.pitch = (0, yU.j)(this.smoothed[5]), XU.apply(this.angles, zU);
        const FU = (0, yU.f)(zU.heading, zU.pitch, this.forward);
        for (let yU = 0; yU < 3; yU++) zU.position[yU] = this.smoothed[yU] - FU[yU] * this.smoothed[3];
        zU.fov = IU(this.settings, this.qY)
      }
      continueFrom(UU) {
        UU instanceof aU && (NU(UU.goal, this.goal), NU(UU.smoothed, this.smoothed), NU(UU.Et, this.Et), this.framedTargets = UU.framedTargets, this.started = UU.started)
      }
      reset() {
        this.Et.fill(0), this.started = !1
      }
      placeGoal(UU) {
        var XU;
        let zU = 0;
        for (const EU of this.settings.targets) {
          const UU = this.targets.currentAimPoint(EU);
          UU && (0, oU.j)(UU, this.pointAt(zU++))
        }
        if (zU > 0) this.framedTargets = !0;
        else if (!this.framedTargets) {
          const UU = this.targets.aimPoint(this.qY.localPlayerId);
          UU && (0, oU.j)(UU, this.pointAt(zU++))
        }
        const cU = this.goal;
        if (0 === zU) return void(cU[3] = this.withinDistances(cU[3]));
        for (let oU = 0; oU < 3; oU++) {
          let UU = 1 / 0,
            XU = -1 / 0;
          for (let cU = 0; cU < zU; cU++) UU = Math.min(UU, this.points[cU][oU]), XU = Math.max(XU, this.points[cU][oU]);
          cU[oU] = (UU + XU) / 2
        }
        let yU = 0;
        for (let oU = 0; oU < zU; oU++) {
          const UU = this.points[oU];
          yU = Math.max(yU, Math.hypot(UU[0] - cU[0], UU[1] - cU[1], UU[2] - cU[2]))
        }
        const QU = Math.tan((0, EU.l)(UU) / 2),
          AU = Math.atan(QU * (!0 === this.settings.letterbox ? YU.h : 1)),
          FU = Math.atan(QU * this.qY.getAspectRatio()),
          DU = (yU + (null !== (XU = this.settings.padding) && void 0 !== XU ? XU : 2)) / Math.sin(Math.min(AU, FU));
        cU[3] = this.withinDistances(DU)
      }
      withinDistances(UU) {
        return Math.min(this.furthestDistance, Math.max(this.closestDistance, UU))
      }
      pointAt(UU) {
        return UU === this.points.length && this.points.push([0, 0, 0]), this.points[UU]
      }
    }
    class tU {
      constructor(UU) {
        this.limits = UU, this.yawOffset = 0, this.pitchOffset = 0, this.idleMs = 0, this.pointedAt = null
      }
      continueFrom(UU) {
        this.limits && (this.yawOffset = UU.yawOffset, this.pitchOffset = UU.pitchOffset, this.idleMs = UU.idleMs)
      }
      update(UU, XU) {
        const zU = this.limits;
        if (!zU) return;
        const cU = Number.isFinite(XU.zq) ? XU.zq : 0,
          yU = Number.isFinite(XU.Qq) ? XU.Qq : 0;
        if (XU.pointedAt) this.idleMs = 0, this.pointedAt = {
          heading: XU.pointedAt.heading,
          pitch: XU.pointedAt.pitch
        };
        else if (0 !== cU || 0 !== yU) this.idleMs = 0, this.yawOffset += cU, this.pitchOffset += yU;
        else {
          const XU = Math.max(0, this.idleMs + UU - 200) - Math.max(0, this.idleMs - 200);
          if (this.idleMs += UU, void 0 !== zU.returnMs && XU > 0) {
            const UU = zU.returnMs > 0 ? Math.exp(-3 * XU / zU.returnMs) : 0;
            this.yawOffset *= UU, this.pitchOffset *= UU
          }
        }
        this.clampOffsets(zU)
      }
      clampOffsets(UU) {
        if (UU.maxYaw >= 180) this.yawOffset = (0, yU.A)(0, this.yawOffset);
        else {
          const XU = (0, EU.l)(UU.maxYaw);
          this.yawOffset = Math.max(-XU, Math.min(XU, this.yawOffset))
        }
        const XU = (0, EU.l)(UU.maxPitch);
        this.pitchOffset = Math.max(-XU, Math.min(XU, this.pitchOffset))
      }
      apply(UU, XU) {
        this.pointedAt && this.limits && (this.yawOffset = (0, yU.A)(UU.heading, this.pointedAt.heading), this.pitchOffset = this.pointedAt.pitch - UU.pitch, this.pointedAt = null, this.clampOffsets(this.limits));
        const zU = (0, yU.j)(UU.pitch + this.pitchOffset);
        this.pitchOffset = zU - UU.pitch, XU.heading = (0, yU.z)(UU.heading + this.yawOffset), XU.pitch = zU
      }
      unapply(UU, XU) {
        XU.heading = (0, yU.z)(UU.heading - this.yawOffset), XU.pitch = (0, yU.j)(UU.pitch - this.pitchOffset)
      }
    }
    const gU = 1e-6;

    function kU(UU) {
      return Math.sqrt(UU[0] * UU[0] + UU[1] * UU[1] + UU[2] * UU[2])
    }

    function GU(UU, XU, zU, cU, yU) {
      const QU = yU * yU,
        AU = QU * yU;
      return (2 * AU - 3 * QU + 1) * UU + (AU - 2 * QU + yU) * XU + (-2 * AU + 3 * QU) * zU + (AU - QU) * cU
    }

    function BU(UU, XU, zU, cU, yU) {
      const QU = yU * yU;
      return (6 * QU - 6 * yU) * UU + (3 * QU - 4 * yU + 1) * XU + (-6 * QU + 6 * yU) * zU + (3 * QU - 2 * yU) * cU
    }

    function ZU(UU, XU) {
      const zU = XU[0] - UU[0],
        cU = XU[1] - UU[1],
        yU = XU[2] - UU[2];
      return Math.sqrt(zU * zU + cU * cU + yU * yU)
    }

    function RU(UU, XU, zU, cU, yU, QU) {
      for (let AU = 0; AU < 3; AU++) QU[AU] = yU ? UU[AU] * cU : zU[AU] - XU[AU];
      return yU && function(UU, XU) {
        const zU = kU(UU);
        if (zU > XU) {
          const cU = XU / zU;
          UU[0] *= cU, UU[1] *= cU, UU[2] *= cU
        }
      }(QU, 3 * ZU(XU, zU)), QU
    }

    function PU(UU, XU, zU, cU) {
      for (let yU = 0; yU < 3; yU++) cU[yU] = 6 * (XU[yU] - UU[yU]) - 2 * zU[yU];
      if (kU(cU) < gU)
        for (let yU = 0; yU < 3; yU++) cU[yU] = XU[yU] - UU[yU];
      return cU
    }

    function WU(UU, XU) {
      return [2 * XU[0] - UU[0], 2 * XU[1] - UU[1], 2 * XU[2] - UU[2]]
    }

    function dU(UU, XU, zU, cU, yU, QU, AU) {
      if (!QU && !AU) return 0;
      const FU = QU ? UU : 2 * XU - zU,
        oU = AU ? zU : 2 * XU - UU,
        DU = QU ? cU : yU,
        EU = AU ? yU : cU,
        YU = (XU - FU) / DU,
        NU = (oU - XU) / EU;
      if (YU * NU <= 0) return 0;
      const IU = (oU - FU) / (DU + EU),
        pU = 3 * Math.min(Math.abs(YU), Math.abs(NU));
      return Math.max(-pU, Math.min(pU, IU))
    }

    function LU(UU, XU, zU, cU, yU, QU, AU) {
      const {
        u: FU,
        segmentMs: oU
      } = UU;
      if (!UU.curved) return zU + (cU - zU) * FU;
      return GU(zU, dU(XU, zU, cU, UU.beforeMs, oU, QU, !0) * oU, cU, dU(zU, cU, yU, oU, UU.afterMs, !0, AU) * oU, FU)
    }

    function eU(UU) {
      return Math.abs(UU.pitch) >= yU.e
    }
    class CU {
      constructor(UU, XU, zU, cU, yU) {
        this.nodes = UU, this.prevNodes = zU, this.nextNodes = cU, this.tangents = void 0, this.derivative = [0, 0, 0], this.beforeAngles = {
          heading: 0,
          pitch: 0
        }, this.fromAngles = {
          heading: 0,
          pitch: 0
        }, this.toAngles = {
          heading: 0,
          pitch: 0
        }, this.afterAngles = {
          heading: 0,
          pitch: 0
        }, this.borrowedAngles = {
          heading: 0,
          pitch: 0
        }, this.tangents = UU.map(((UU, zU) => this.nodeTangent(XU, yU, zU)))
      }
      sample(UU, XU, zU) {
        const {
          index: cU,
          toIndex: QU,
          segmentMs: AU,
          curved: FU
        } = UU, oU = this.fromAngles, DU = this.toAngles, EU = this.nodeAngles(cU, zU.position, XU, oU), YU = this.nodeAngles(QU, zU.position, XU, DU);
        if (AU > 0 && "aim" !== EU && "aim" !== YU && this.liveTangent(UU, oU)) return zU.heading = (0, yU.z)(oU.heading), void(zU.pitch = oU.pitch);
        if ("none" === EU && "none" === YU) return;
        !FU && AU > 0 && ("tangent" === EU && this.liveTangent(UU, oU), "tangent" === YU && this.liveTangent(UU, DU)), "none" === EU ? (0, yU.l)(DU, oU) : "none" === YU && (0, yU.l)(oU, DU);
        const NU = FU && UU.beforeIndex >= 0 && "none" !== this.nodeAngles(UU.beforeIndex, zU.position, XU, this.beforeAngles),
          IU = FU && UU.afterIndex >= 0 && "none" !== this.nodeAngles(UU.afterIndex, zU.position, XU, this.afterAngles),
          pU = (0, yU.B)(oU.heading, DU.heading),
          aU = LU(UU, NU ? (0, yU.B)(oU.heading, this.beforeAngles.heading) : 0, oU.heading, pU, IU ? (0, yU.B)(pU, this.afterAngles.heading) : 0, NU, IU);
        zU.heading = (0, yU.z)(aU), zU.pitch = (0, yU.j)(LU(UU, this.beforeAngles.pitch, oU.pitch, DU.pitch, this.afterAngles.pitch, NU, IU))
      }
      nodeAngles(UU, XU, zU, cU) {
        const yU = this.rawNodeAngles(UU, XU, zU, cU);
        return "none" !== yU && eU(cU) && !this.borrowHeading(this.prevNodes[UU], XU, zU, cU) && this.borrowHeading(this.nextNodes[UU], XU, zU, cU), yU
      }
      borrowHeading(UU, XU, zU, cU) {
        const yU = this.borrowedAngles;
        return !(UU < 0 || "none" === this.rawNodeAngles(UU, XU, zU, yU) || eU(yU)) && (cU.heading = yU.heading, !0)
      }
      rawNodeAngles(UU, XU, zU, cU) {
        const QU = this.nodes[UU].keyframe;
        if (QU.lookDirection) return (0, yU.n)(QU.lookDirection, cU), "aim";
        if (void 0 !== QU.lookAt) {
          const UU = zU(QU.lookAt);
          if (UU) return (0, yU.v)(XU, UU, cU), "aim"
        }
        const AU = this.tangents[UU];
        return AU ? ((0, yU.l)(AU, cU), "tangent") : "none"
      }
      liveTangent(UU, XU) {
        const zU = this.nodes[UU.index].position,
          cU = this.nodes[UU.toIndex].position,
          QU = this.derivative;
        for (let yU = 0; yU < 3; yU++) QU[yU] = BU(zU[yU], UU.fromTangent[yU], cU[yU], UU.toTangent[yU], UU.u);
        return kU(QU) > 1e-9 ? ((0, yU.n)(QU, XU), !0) : !(ZU(zU, cU) < gU) && ((0, yU.n)(PU(zU, cU, UU.u < .5 ? UU.toTangent : UU.fromTangent, QU), XU), !0)
      }
      nodeTangent(UU, XU, zU) {
        var cU;
        const QU = UU[zU];
        if (kU(QU) > 1e-9) return (0, yU.n)(QU, {
          heading: 0,
          pitch: 0
        });
        const AU = null !== (cU = this.restDirectionTo(zU, zU + 1, UU, XU)) && void 0 !== cU ? cU : this.restDirectionTo(zU, zU - 1, UU, XU);
        return AU ? (0, yU.n)(AU, {
          heading: 0,
          pitch: 0
        }) : null
      }
      restDirectionTo(UU, XU, zU, cU) {
        const yU = this.nodes[UU],
          QU = this.nodes[XU];
        if (!QU || ZU(yU.position, QU.position) < gU) return null;
        const [AU, FU] = XU > UU ? [yU, QU] : [QU, yU], oU = RU(zU[XU], AU.position, FU.position, FU.timeMs - AU.timeMs, cU, [0, 0, 0]);
        return PU(AU.position, FU.position, oU, [0, 0, 0])
      }
    }

    function wU(UU, XU) {
      const zU = UU.lookDirection || XU.lookDirection ? function(UU, XU) {
        if (!UU || !XU) return UU === XU;
        const zU = kU(UU),
          cU = kU(XU);
        return Math.hypot(UU[0] / zU - XU[0] / cU, UU[1] / zU - XU[1] / cU, UU[2] / zU - XU[2] / cU) < gU
      }(UU.lookDirection, XU.lookDirection) : (cU = UU.lookAt, yU = XU.lookAt, "object" !== typeof cU || "object" !== typeof yU ? cU === yU : ZU(cU, yU) < gU);
      var cU, yU;
      return ZU(UU.position, XU.position) < gU && UU.fov === XU.fov && zU
    }
    class qU {
      constructor(UU, XU, zU) {
        if (this.smooth = XU, this.nodes = void 0, this.velocities = void 0, this.prevNodes = void 0, this.nextNodes = void 0, this.prevGaps = void 0, this.nextGaps = void 0, this.loopMs = void 0, this.aim = void 0, this.segment = {
            index: 0,
            toIndex: 0,
            u: 0,
            segmentMs: 0,
            curved: !1,
            beforeIndex: -1,
            afterIndex: -1,
            beforeMs: 0,
            afterMs: 0,
            fromTangent: [0, 0, 0],
            toTangent: [0, 0, 0]
          }, 0 === UU.length) throw new Error("A camera path needs at least one keyframe");
        for (let QU = 1; QU < UU.length; QU++)
          if (!(UU[QU].timeMs > UU[QU - 1].timeMs)) throw new Error("Camera path keyframe times must strictly increase");
        this.nodes = UU.map((UU => {
          var XU;
          return {
            timeMs: UU.timeMs,
            position: [...UU.position],
            keyframe: UU,
            easing: (0, QU.n)(null !== (XU = UU.easing) && void 0 !== XU ? XU : "linear")
          }
        }));
        const cU = this.nodes[0],
          yU = this.nodes[this.nodes.length - 1],
          AU = zU && this.nodes.length > 1;
        AU && !wU(cU.keyframe, yU.keyframe) && this.nodes.push({
          ...cU,
          timeMs: yU.timeMs + (yU.timeMs - cU.timeMs) / (this.nodes.length - 1)
        }), this.loopMs = AU ? this.nodes[this.nodes.length - 1].timeMs - cU.timeMs : 0, this.prevNodes = this.nodes.map(((UU, XU) => this.neighbour(XU, -1))), this.nextNodes = this.nodes.map(((UU, XU) => this.neighbour(XU, 1))), this.prevGaps = this.prevNodes.map(((UU, XU) => UU >= 0 ? this.gapMs(XU, -1) : 0)), this.nextGaps = this.nextNodes.map(((UU, XU) => UU >= 0 ? this.gapMs(XU, 1) : 0)), this.velocities = this.nodes.map(((UU, XU) => {
          const zU = this.prevNodes[XU],
            cU = this.nextNodes[XU];
          return function(UU, XU, zU, cU, yU, QU) {
            if (QU[0] = 0, QU[1] = 0, QU[2] = 0, !UU && !zU) return QU;
            const AU = null !== UU && void 0 !== UU ? UU : WU(null !== zU && void 0 !== zU ? zU : XU, XU),
              FU = null !== zU && void 0 !== zU ? zU : WU(null !== UU && void 0 !== UU ? UU : XU, XU),
              oU = UU ? cU : yU,
              DU = zU ? yU : cU,
              EU = ZU(AU, XU),
              YU = ZU(XU, FU);
            if (EU < gU || YU < gU) return QU;
            const NU = Math.sqrt(EU),
              IU = Math.sqrt(YU),
              pU = (NU + IU) / (oU + DU);
            for (let aU = 0; aU < 3; aU++) {
              const UU = (XU[aU] - AU[aU]) / NU - (FU[aU] - AU[aU]) / (NU + IU) + (FU[aU] - XU[aU]) / IU;
              QU[aU] = UU * pU
            }
            return QU
          }(zU >= 0 ? this.nodes[zU].position : null, UU.position, cU >= 0 ? this.nodes[cU].position : null, this.prevGaps[XU], this.nextGaps[XU], [0, 0, 0])
        })), this.aim = new CU(this.nodes, this.velocities, this.prevNodes, this.nextNodes, XU)
      }
      sample(UU, XU, zU, cU) {
        const yU = this.findSegment(this.pathTime(UU));
        this.samplePosition(yU, cU.position), this.aim.sample(yU, XU, cU);
        const {
          beforeIndex: QU,
          afterIndex: AU
        } = yU;
        cU.fov = LU(yU, QU >= 0 ? this.fovAt(QU, zU) : 0, this.fovAt(yU.index, zU), this.fovAt(yU.toIndex, zU), AU >= 0 ? this.fovAt(AU, zU) : 0, QU >= 0, AU >= 0)
      }
      pathTime(UU) {
        const XU = this.nodes[0].timeMs;
        if (this.loopMs <= 0 || UU <= XU) return UU;
        const zU = UU - XU;
        return XU + zU - this.loopMs * Math.floor(zU / this.loopMs)
      }
      findSegment(UU) {
        const XU = this.nodes,
          zU = this.segment;
        let cU = zU.index;
        for (UU < XU[cU].timeMs && (cU = 0); cU < XU.length - 2 && XU[cU + 1].timeMs <= UU;) cU++;
        const yU = Math.min(cU + 1, XU.length - 1),
          AU = XU[yU].timeMs - XU[cU].timeMs;
        return zU.index = cU, zU.toIndex = yU, zU.segmentMs = AU, zU.u = AU > 0 ? (0, QU.j)((UU - XU[cU].timeMs) / AU, XU[cU].easing) : 1, zU.curved = this.smooth && AU > 0, zU.beforeIndex = this.prevNodes[cU], zU.afterIndex = this.nextNodes[yU], zU.beforeMs = this.prevGaps[cU], zU.afterMs = this.nextGaps[yU], zU
      }
      samplePosition(UU, XU) {
        const {
          fromTangent: zU,
          toTangent: cU,
          curved: yU
        } = UU, QU = this.nodes[UU.index].position, AU = this.nodes[UU.toIndex].position;
        RU(this.velocities[UU.index], QU, AU, UU.segmentMs, yU, zU), RU(this.velocities[UU.toIndex], QU, AU, UU.segmentMs, yU, cU);
        const FU = UU.u;
        for (let oU = 0; oU < 3; oU++) XU[oU] = yU ? GU(QU[oU], zU[oU], AU[oU], cU[oU], FU) : QU[oU] + (AU[oU] - QU[oU]) * FU
      }
      fovAt(UU, XU) {
        var zU;
        return null !== (zU = this.nodes[UU].keyframe.fov) && void 0 !== zU ? zU : XU
      }
      neighbour(UU, XU) {
        const zU = this.nodes.length - 1,
          cU = UU + XU;
        return cU >= 0 && cU <= zU ? cU : this.loopMs <= 0 || zU < 2 ? -1 : cU < 0 ? zU - 1 : 1
      }
      gapMs(UU, XU) {
        const zU = this.nodes.length - 1;
        if (1 === XU) {
          const XU = UU === zU ? 0 : UU;
          return this.nodes[XU + 1].timeMs - this.nodes[XU].timeMs
        }
        const cU = 0 === UU ? zU : UU;
        return this.nodes[cU].timeMs - this.nodes[cU - 1].timeMs
      }
    }

    function OU(UU, XU, zU) {
      return null !== zU && Number.isFinite(zU) ? (UU.set(XU, zU), zU) : UU.get(XU)
    }
    class SU {
      constructor(UU) {
        this.qY = UU, this.lastFeet = new Map, this.lastAimPoints = new Map, this.lastHeadings = new Map, this.lastPitches = new Map, this.lastLookHeadings = new Map, this.readFeet = void 0, this.readAimPoint = void 0, this.readFeet = XU => UU.getEntityPosition(XU), this.readAimPoint = XU => UU.getEntityAimPoint(XU)
      }
      aimPoint(UU) {
        return "string" !== typeof UU ? (0, oU.o)(UU, 3) ? UU : null : this.resolve(UU, this.readAimPoint, this.lastAimPoints)
      }
      currentAimPoint(UU) {
        const XU = "string" === typeof UU ? this.qY.getEntityAimPoint(UU) : UU;
        return XU && (0, oU.o)(XU, 3) ? XU : null
      }
      feetPosition(UU) {
        return this.resolve(UU, this.readFeet, this.lastFeet)
      }
      heading(UU) {
        const XU = OU(this.lastHeadings, UU, this.qY.getEntityHeading(UU));
        return void 0 !== XU ? XU : UU === this.qY.localPlayerId ? 0 : this.heading(this.qY.localPlayerId)
      }
      pitch(UU) {
        var XU;
        return null !== (XU = OU(this.lastPitches, UU, this.qY.getEntityPitch(UU))) && void 0 !== XU ? XU : 0
      }
      lookHeading(UU) {
        var XU;
        return null !== (XU = OU(this.lastLookHeadings, UU, this.qY.getEntityLookHeading(UU))) && void 0 !== XU ? XU : this.heading(UU)
      }
      resolve(UU, XU, zU) {
        const cU = XU(UU);
        let yU = zU.get(UU);
        return cU && (0, oU.o)(cU, 3) ? (yU || (yU = [0, 0, 0], zU.set(UU, yU)), yU[0] = cU[0], yU[1] = cU[1], yU[2] = cU[2], yU) : yU || (UU === this.qY.localPlayerId ? null : this.resolve(this.qY.localPlayerId, XU, zU))
      }
    }

    function rU(UU) {
      return {
        heading: UU.heading,
        pitch: UU.pitch
      }
    }

    function uU(UU, XU) {
      Number.isFinite(UU.heading) && Number.isFinite(UU.pitch) || (0, yU.l)(XU, UU)
    }

    function fU(UU, XU, zU, cU, QU) {
      if (XU) return void(0, yU.n)(XU, QU);
      const AU = cU.aimPoint(zU);
      AU && (0, yU.v)(UU, AU, QU)
    }
    class iU {
      constructor(UU, XU, zU, cU) {
        this.settings = UU, this.qY = XU, this.targets = zU, this.base = void 0, this.base = rU(cU)
      }
      update(UU, XU, zU) {
        var cU;
        const yU = this.settings;
        (0, oU.j)(yU.position, zU.position), fU(yU.position, yU.lookDirection, null !== (cU = yU.lookAt) && void 0 !== cU ? cU : this.qY.localPlayerId, this.targets, this.base), XU.apply(this.base, zU), zU.fov = IU(yU, this.qY)
      }
      continueFrom(UU) {
        UU instanceof iU && (0, yU.l)(UU.base, this.base)
      }
      reset(UU) {
        uU(this.base, UU)
      }
    }
    class HU {
      constructor(UU, XU, zU, cU) {
        this.settings = UU, this.qY = XU, this.targets = zU, this.base = void 0, this.goal = void 0, this.lastFeet = [0, 0, 0], this.foundFeet = !1, this.smoothed = [0, 0, 0], this.Et = [0, 0, 0], this.started = !1, this.distance = -1, this.toCamera = [0, 0, 0], this.aimOrigin = [0, 0, 0], this.eyeHeading = NaN, this.eyePitch = NaN, this.base = rU(cU), this.goal = [...cU.position]
      }
      update(UU, XU, zU) {
        var cU, QU;
        const AU = this.settings,
          FU = null !== (cU = AU.target) && void 0 !== cU ? cU : this.qY.localPlayerId,
          DU = this.targets.feetPosition(FU),
          EU = "eye" === AU.anchor;
        let YU = !1;
        var NU;
        DU && (YU = this.foundFeet && ZU(this.lastFeet, DU) > 32 + .1 * UU, (0, oU.j)(DU, this.lastFeet), this.foundFeet = !0, this.placeGoal(null !== (NU = EU ? this.targets.aimPoint(FU) : null) && void 0 !== NU ? NU : DU, FU));
        const aU = null !== (QU = AU.smoothMs) && void 0 !== QU ? QU : 0;
        !this.started || aU < 1 || YU ? ((0, oU.j)(this.goal, this.smoothed), this.Et.fill(0), this.started = !0) : pU(this.smoothed, this.Et, this.goal, aU, UU), YU && (this.distance = -1), (0, oU.j)(this.smoothed, zU.position);
        const tU = !0 === AU.avoidTerrain ? this.pullIn(FU, UU, zU) : 1;
        let gU = this.goal;
        if ("target" === AU.offsetSpace) gU = zU.position;
        else if (tU < 1) {
          gU = this.aimOrigin;
          for (let UU = 0; UU < 3; UU++) gU[UU] = zU.position[UU] + (this.goal[UU] - this.smoothed[UU]) * tU
        }
        if (EU && !AU.lookDirection && void 0 === AU.lookAt) {
          const XU = this.targets.lookHeading(FU),
            zU = this.targets.pitch(FU),
            cU = 1 - Math.exp(-UU / 50),
            QU = (0, yU.z)(this.eyeHeading + (0, yU.A)(this.eyeHeading, XU) * cU),
            AU = this.eyePitch + (zU - this.eyePitch) * cU,
            oU = FU !== this.qY.localPlayerId && Number.isFinite(QU) && Number.isFinite(AU) && !YU;
          this.eyeHeading = oU ? QU : (0, yU.z)(XU), this.eyePitch = oU ? AU : zU, this.base.heading = this.eyeHeading, this.base.pitch = this.eyePitch
        } else {
          var kU;
          this.eyeHeading = NaN, this.eyePitch = NaN, fU(gU, AU.lookDirection, null !== (kU = AU.lookAt) && void 0 !== kU ? kU : FU, this.targets, this.base)
        }
        XU.apply(this.base, zU), zU.fov = IU(AU, this.qY)
      }
      continueFrom(UU) {
        UU instanceof HU && (0, cU.t)(UU.settings.target, this.settings.target) && ((0, yU.l)(UU.base, this.base), (0, oU.j)(UU.goal, this.goal), (0, oU.j)(UU.lastFeet, this.lastFeet), this.foundFeet = UU.foundFeet, (0, oU.j)(UU.smoothed, this.smoothed), (0, oU.j)(UU.Et, this.Et), this.started = UU.started, this.eyeHeading = UU.eyeHeading, this.eyePitch = UU.eyePitch, !0 === UU.settings.avoidTerrain && (this.distance = UU.distance))
      }
      reset(UU) {
        uU(this.base, UU), this.Et.fill(0), this.started = !1, this.distance = -1, this.eyeHeading = NaN, this.eyePitch = NaN
      }
      pullIn(UU, XU, zU) {
        const cU = this.targets.aimPoint(UU);
        if (!cU) return 1;
        const yU = zU.position,
          QU = ZU(cU, yU);
        if (!(QU > 0)) return 1;
        const AU = this.toCamera;
        for (let oU = 0; oU < 3; oU++) AU[oU] = (yU[oU] - cU[oU]) / QU;
        const FU = function(UU, XU, zU) {
          return UU < 0 || XU < UU ? XU : XU + (UU - XU) * Math.exp(-zU / 150)
        }(this.distance, function(UU, XU, zU, cU) {
          const yU = UU.raycastTerrain(XU, zU, cU);
          return null !== yU && Number.isFinite(yU) ? Math.min(cU, Math.max(0, yU - .2)) : cU
        }(this.qY, cU, AU, QU), XU);
        if (QU - FU < .001) return this.distance = -1, 1;
        this.distance = FU;
        for (let oU = 0; oU < 3; oU++) yU[oU] = cU[oU] + AU[oU] * FU;
        return FU / QU
      }
      placeGoal(UU, XU) {
        const zU = this.settings.offset;
        let cU = zU[0],
          yU = zU[2];
        if ("target" === this.settings.offsetSpace) {
          const UU = this.targets.heading(XU),
            QU = Math.cos(UU),
            AU = Math.sin(UU);
          cU = zU[0] * QU + zU[2] * AU, yU = -zU[0] * AU + zU[2] * QU
        }
        this.goal[0] = UU[0] + cU, this.goal[1] = UU[1] + zU[1], this.goal[2] = UU[2] + yU
      }
    }
    class MU {
      constructor(UU, XU, zU, cU) {
        var yU, QU;
        this.settings = UU, this.qY = XU, this.sampler = void 0, this.base = void 0, this.resolveTarget = void 0, this.elapsedMs = 0, this.sampler = UU.keyframes.length > 0 ? new qU(UU.keyframes, null === (yU = UU.smooth) || void 0 === yU || yU, null !== (QU = UU.loop) && void 0 !== QU && QU) : null, this.base = (0, oU.f)(cU, (0, oU.k)()), this.resolveTarget = UU => zU.aimPoint(UU)
      }
      update(UU, XU, zU) {
        this.elapsedMs += UU;
        const cU = IU(this.settings, this.qY);
        this.sampler ? this.sampler.sample(this.elapsedMs, this.resolveTarget, cU, this.base) : this.base.fov = cU, (0, oU.j)(this.base.position, zU.position), zU.fov = this.base.fov, XU.apply(this.base, zU)
      }
      continueFrom(UU) {
        UU instanceof MU && (0, cU.t)(UU.settings.keyframes, this.settings.keyframes) && (this.elapsedMs = UU.elapsedMs, (0, oU.f)(UU.base, this.base))
      }
      reset(UU) {
        uU(this.base, UU), Number.isFinite(this.elapsedMs) || (this.elapsedMs = 0)
      }
    }

    function vU(UU, XU) {
      return (0, cU.x)(UU, XU)
    }
    class VU {
      constructor(UU, XU, zU) {
        var cU;
        this.settings = UU, this.qY = XU, this.pose = void 0, this.lastGoodPose = void 0, this.look = void 0, this.targets = void 0, this.mode = void 0, this.warnedNonFinite = !1;
        const yU = null !== zU && zU.settings.mode === UU.mode,
          QU = yU ? zU.pose : XU.getDefaultPose();
        this.pose = (0, oU.f)(QU, (0, oU.k)()), this.lastGoodPose = (0, oU.f)(yU ? zU.lastGoodPose : QU, (0, oU.k)()), this.look = new tU(UU.playerLook), this.targets = null !== (cU = null === zU || void 0 === zU ? void 0 : zU.targets) && void 0 !== cU ? cU : new SU(XU);
        const AU = (0, oU.f)(QU, (0, oU.k)());
        yU && zU.look.unapply(AU, AU), this.mode = function(UU, XU, zU, cU) {
          switch (UU.mode) {
            case "fixed":
              return new iU(UU, XU, zU, cU);
            case "follow":
              return new HU(UU, XU, zU, cU);
            case "path":
              return new MU(UU, XU, zU, cU);
            case "frame":
              return new aU(UU, XU, zU, cU)
          }
        }(UU, XU, this.targets, AU), yU && (this.look.continueFrom(zU.look), this.mode.continueFrom(zU.mode))
      }
      update(UU, XU) {
        return this.look.update(UU, XU), this.mode.update(UU, this.look, this.pose), (0, oU.l)(this.pose) ? (0, oU.f)(this.pose, this.lastGoodPose) : (this.warnedNonFinite || (console.warn("Scripted camera produced a non-finite pose; holding the last good one"), this.warnedNonFinite = !0), (0, oU.f)(this.lastGoodPose, this.pose), this.mode.reset((0, oU.l)(this.lastGoodPose) ? this.lastGoodPose : this.qY.getDefaultPose())), this.pose
      }
    }

    function sU(UU) {
      return [0, 0, UU[2], UU[3]]
    }
    class nU {
      constructor(UU) {
        this.qY = UU, this.settings = {
          mode: "default"
        }, this.pending = null, this.fade = new FU, this.shot = null, this.blend = null, this.mixed = (0, oU.k)(), this.output = (0, oU.k)(), this.hasOutput = !1, this.loadingPositions = [], this.loadingSlots = Array.from({
          length: 3
        }, (() => [0, 0, 0]))
      }
      setSettings(UU) {
        const XU = (0, DU.e)(UU);
        if ((0, cU.t)(XU, this.pending ? this.pending.settings : this.settings)) return;
        const zU = vU(this.settings, XU);
        if (void 0 !== XU.transition && !zU) return this.pending = {
          settings: XU,
          shot: "default" === XU.mode ? null : new VU(XU, this.qY, null)
        }, void this.fade.fadeOut(XU.transition);
        const yU = null !== this.pending;
        this.pending = null, !yU && zU || this.fade.fadeIn(cU.m.minTransitionFadeMs), this.show(XU, !1)
      }
      show(UU, XU) {
        var zU, yU;
        if ((0, cU.t)(UU, this.settings)) return;
        const AU = !XU && vU(this.settings, UU);
        this.settings = UU;
        const FU = null !== this.blend && this.blend.elapsedMs > 0,
          DU = (0, oU.f)(this.hasOutput ? this.output : this.qY.getDefaultPose(), (0, oU.k)());
        if (this.shot = "default" === UU.mode ? null : new VU(UU, this.qY, XU ? null : this.shot), AU) return;
        const EU = XU || !this.shot && !this.hasOutput ? 0 : null !== (zU = UU.blendInMs) && void 0 !== zU ? zU : 0;
        if (EU <= 0) return void(this.blend = null);
        const YU = (0, QU.n)(null !== (yU = UU.blendEasing) && void 0 !== yU ? yU : "easeInOut");
        this.blend = {
          from: DU,
          fromScripted: this.hasOutput,
          headingDelta: NaN,
          elapsedMs: 0,
          durationMs: EU,
          easing: FU ? sU(YU) : YU
        }
      }
      getSettings() {
        return this.settings
      }
      getScreenFade() {
        return this.fade.getScreen()
      }
      getLoadingPositions() {
        return this.loadingPositions
      }
      isActive() {
        return null !== this.shot || null !== this.blend
      }
      update(UU, XU) {
        const zU = Number.isFinite(UU) && UU > 0 ? UU : 0;
        if (this.fade.advance(zU) && null !== this.pending) {
          const {
            settings: UU
          } = this.pending;
          this.pending = null, this.show(UU, !0)
        }
        this.loadingPositions.length = 0;
        const cU = this.pending;
        if (null !== cU && void 0 !== cU && cU.shot) {
          const UU = "path" === cU.settings.mode ? 0 : zU;
          this.noteLoadingPosition(cU.shot.update(UU, oU.e).position)
        }
        if (!this.isActive()) return this.hasOutput = !1, null;
        const AU = this.shot ? this.shot.update(zU, XU) : this.qY.getDefaultPose();
        this.shot && this.noteLoadingPosition(AU.position);
        const FU = this.blend;
        if (!FU) return this.writeOutput(AU);
        FU.elapsedMs += zU;
        const DU = Math.min(1, FU.elapsedMs / FU.durationMs);
        if (FU.headingDelta = Number.isFinite(FU.headingDelta) ? (0, yU.B)(FU.headingDelta, AU.heading - FU.from.heading) : (0, yU.A)(FU.from.heading, AU.heading), (0, oU.q)(FU.from, AU, FU.headingDelta, (0, QU.j)(DU, FU.easing), this.mixed), DU >= 1) {
          if (this.blend = null, !this.shot) return this.hasOutput = !1, null
        } else FU.fromScripted && this.noteLoadingPosition(FU.from.position);
        return this.writeOutput(this.mixed)
      }
      noteLoadingPosition(UU) {
        if (UU.every(Number.isFinite)) {
          const XU = this.loadingPositions;
          XU.push((0, oU.j)(UU, this.loadingSlots[XU.length]))
        }
      }
      writeOutput(UU) {
        const XU = this.output;
        (0, oU.l)(UU) ? (0, oU.f)(UU, XU) : this.hasOutput || (0, oU.f)(this.qY.getDefaultPose(), XU), XU.pitch = (0, yU.j)(XU.pitch);
        const zU = this.qY.getDefaultFov(),
          QU = Number.isFinite(zU) && zU > 0 && zU < 180,
          AU = QU ? Math.min(cU.m.minFov, zU) : cU.m.minFov,
          FU = QU ? Math.max(cU.m.maxFov, zU) : cU.m.maxFov;
        return XU.fov = Number.isFinite(XU.fov) ? Math.min(FU, Math.max(AU, XU.fov)) : FU, this.hasOutput = !0, XU
      }
    }
  },
  40023: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => yU,
      f: () => FU,
      j: () => AU,
      k: () => QU,
      l: () => DU,
      o: () => oU,
      q: () => EU
    });
    var cU = zU(40032);
    const yU = {
      zq: 0,
      Qq: 0
    };

    function QU() {
      return {
        position: [0, 0, 0],
        heading: 0,
        pitch: 0,
        fov: 0
      }
    }

    function AU(UU, XU) {
      return XU[0] = UU[0], XU[1] = UU[1], XU[2] = UU[2], XU
    }

    function FU(UU, XU) {
      return AU(UU.position, XU.position), XU.heading = UU.heading, XU.pitch = UU.pitch, XU.fov = UU.fov, XU
    }

    function oU(UU, XU) {
      return Array.isArray(UU) && UU.length === XU && UU.every(Number.isFinite)
    }

    function DU(UU) {
      return oU(UU.position, 3) && Number.isFinite(UU.heading) && Number.isFinite(UU.pitch) && Number.isFinite(UU.fov)
    }

    function EU(UU, XU, zU, yU, QU) {
      for (let cU = 0; cU < 3; cU++) QU.position[cU] = UU.position[cU] + (XU.position[cU] - UU.position[cU]) * yU;
      return QU.heading = (0, cU.z)(UU.heading + zU * yU), QU.pitch = UU.pitch + (XU.pitch - UU.pitch) * yU, QU.fov = UU.fov + (XU.fov - UU.fov) * yU, QU
    }
  },
  40058: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => WU,
      g: () => IU
    });
    var cU = zU(40056),
      yU = zU(40023);
    const QU = cU.g,
      AU = cU.p,
      FU = cU.k;

    function oU(UU, XU, zU, cU) {
      return Number.isFinite(UU) ? Math.min(zU, Math.max(XU, UU)) : cU
    }

    function DU(UU, XU, zU) {
      return void 0 !== UU && Number.isFinite(UU) ? Math.min(zU, Math.max(XU, UU)) : void 0
    }

    function EU(UU) {
      const XU = cU.m.maxCoordinate;
      return [Math.min(XU, Math.max(-XU, UU[0])), Math.min(XU, Math.max(-XU, UU[1])), Math.min(XU, Math.max(-XU, UU[2]))]
    }

    function YU(UU) {
      return "string" === typeof UU ? UU : (0, yU.o)(UU, 3) ? EU(UU) : void 0
    }
    const NU = new RegExp(cU.r);

    function IU(UU) {
      return "string" === typeof UU && NU.test(UU)
    }

    function pU(UU) {
      const XU = [];
      if (!Array.isArray(UU)) return XU;
      for (const zU of UU.slice(0, cU.m.maxFrameTargets)) {
        const UU = YU(zU);
        void 0 === UU || "string" === typeof UU && !IU(UU) || XU.push(UU)
      }
      return XU
    }

    function aU(UU) {
      if (!(0, yU.o)(UU, 3)) return;
      const XU = Math.max(Math.abs(UU[0]), Math.abs(UU[1]), Math.abs(UU[2])),
        zU = Math.hypot(UU[0] / XU, UU[1] / XU, UU[2] / XU);
      return 0 === XU || XU * zU < cU.m.minDirectionLength ? void 0 : [UU[0] / XU / zU, UU[1] / XU / zU, UU[2] / XU / zU]
    }

    function tU(UU) {
      if (void 0 !== UU) return "string" === typeof UU ? QU.includes(UU) ? UU : void 0 : (0, yU.o)(UU, 4) ? [oU(UU[0], 0, 1, 0), oU(UU[1], cU.m.minEasingY, cU.m.maxEasingY, 0), oU(UU[2], 0, 1, 1), oU(UU[3], cU.m.minEasingY, cU.m.maxEasingY, 1)] : "linear"
    }

    function gU(UU) {
      if (UU) return {
        maxYaw: oU(UU.maxYaw, 0, cU.m.maxPlayerLook, 0),
        maxPitch: oU(UU.maxPitch, 0, cU.m.maxPlayerLook, 0),
        returnMs: DU(UU.returnMs, 0, cU.m.maxReturnMs)
      }
    }
    const kU = new RegExp(cU.c);

    function GU(UU) {
      var XU;
      if ("object" !== typeof UU || null === UU) return;
      const zU = cU.m.maxTransitionMs,
        yU = cU.m.minTransitionFadeMs;
      return {
        colour: "string" === typeof UU.colour && kU.test(UU.colour) ? UU.colour : cU.d,
        outMs: oU(UU.outMs, yU, zU, yU),
        holdMs: oU(null !== (XU = UU.holdMs) && void 0 !== XU ? XU : 0, 0, zU, 0),
        inMs: oU(UU.inMs, yU, zU, yU)
      }
    }

    function BU(UU) {
      return !0 === UU || void 0
    }

    function ZU(UU) {
      if ("object" !== typeof UU || null === UU) return !1;
      const XU = UU.lookAt;
      return Number.isFinite(UU.timeMs) && (0, yU.o)(UU.position, 3) && (void 0 === XU || "string" === typeof XU || (0, yU.o)(XU, 3))
    }

    function RU(UU) {
      return {
        ...UU,
        timeMs: oU(UU.timeMs, 0, cU.m.maxPathMs, 0),
        position: EU(UU.position),
        lookAt: YU(UU.lookAt),
        lookDirection: aU(UU.lookDirection),
        fov: DU(UU.fov, cU.m.minFov, cU.m.maxFov),
        easing: tU(UU.easing)
      }
    }

    function PU(UU) {
      const XU = [];
      if (!Array.isArray(UU)) return XU;
      for (const zU of UU.slice(0, cU.m.maxKeyframes)) {
        if (!ZU(zU)) continue;
        const UU = RU(zU);
        (0 === XU.length || UU.timeMs > XU[XU.length - 1].timeMs) && XU.push(UU)
      }
      return XU
    }

    function WU(UU) {
      if ("object" !== typeof UU || null === UU) return {
        mode: "default"
      };
      const XU = {
          blendInMs: DU(UU.blendInMs, 0, cU.m.maxBlendInMs),
          blendEasing: tU(UU.blendEasing),
          transition: GU(UU.transition),
          letterbox: BU(UU.letterbox),
          hideHud: BU(UU.hideHud)
        },
        zU = {
          mode: "default",
          ...XU
        };
      if ("default" === UU.mode || "fixed" === UU.mode && !(0, yU.o)(UU.position, 3)) return zU;
      const QU = {
        ...XU,
        fov: DU(UU.fov, cU.m.minFov, cU.m.maxFov),
        playerFacing: (NU = UU.playerFacing, AU.includes(NU) ? NU : void 0),
        playerLook: gU(UU.playerLook)
      };
      var NU, IU, kU;
      switch (UU.mode) {
        case "fixed":
          return {
            ...UU, ...QU, position: EU(UU.position), lookAt: YU(UU.lookAt), lookDirection: aU(UU.lookDirection)
          };
        case "follow":
          return {
            ...UU, ...QU, target: "string" === typeof UU.target ? UU.target : void 0, anchor: (kU = UU.anchor, FU.includes(kU) ? kU : void 0), lookAt: YU(UU.lookAt), offset: (IU = UU.offset, Array.isArray(IU) ? [oU(IU[0], -cU.m.maxOffset, cU.m.maxOffset, 0), oU(IU[1], -cU.m.maxOffset, cU.m.maxOffset, 0), oU(IU[2], -cU.m.maxOffset, cU.m.maxOffset, 0)] : [0, 0, 0]), lookDirection: aU(UU.lookDirection), smoothMs: DU(UU.smoothMs, 0, cU.m.maxSmoothMs)
          };
        case "path":
          return {
            ...UU, ...QU, keyframes: PU(UU.keyframes)
          };
        case "frame":
          return {
            ...UU, ...QU, targets: pU(UU.targets), viewHeading: DU(UU.viewHeading, -cU.m.maxFrameHeading, cU.m.maxFrameHeading), viewElevation: DU(UU.viewElevation, 0, cU.m.maxFrameElevation), padding: DU(UU.padding, 0, cU.m.maxFrameDistance), closestDistance: DU(UU.closestDistance, 0, cU.m.maxFrameDistance), furthestDistance: DU(UU.furthestDistance, 0, cU.m.maxFrameDistance), smoothMs: DU(UU.smoothMs, 0, cU.m.maxSmoothMs)
          };
        default:
          return zU
      }
    }
  },
  40081: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => cU
    });
    const cU = {
      message: [{
        translationKey: "general:bunnyHoppingDisabled"
      }],
      timeoutLength: 2e3,
      type: "Error"
    }
  },
  39472: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => FU
    });
    var cU = zU(1236);

    function yU(UU) {
      const XU = /(\d*\.?\d+)px/.exec(UU);
      return XU ? Number(XU[1]) : null
    }

    function QU(UU) {
      return UU.split(/[\s,]+/).pop()
    }
    let AU = !1;
    const FU = {
      debug: !1,
      align: "center",
      vAlign: "middle",
      fontSize: 14,
      fontWeight: "",
      fontStyle: "",
      fontVariant: "",
      font: "Arial",
      lineHeight: null,
      justify: !1,
      drawText: function(UU, XU, cU, FU, oU, DU) {
        if (oU <= 0 || DU <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: EU,
          fontVariant: YU,
          fontWeight: NU,
          fontSize: IU,
          font: pU
        } = this, aU = [EU, YU, NU, `${IU}px`, pU].filter(Boolean).join(" "), tU = [
          [NU, `${IU}px`, QU(pU)].filter(Boolean).join(" "), `${IU}px sans-serif`
        ], gU = UU.font, kU = function(UU, XU, zU) {
          for (const cU of XU) {
            UU.font = cU;
            const XU = yU(UU.font),
              AU = QU(cU);
            if (null !== XU && Math.abs(XU - zU) <= .5 && UU.font.toLowerCase().includes(AU.toLowerCase())) return cU
          }
          return null
        }(UU, [aU, ...tU], IU);
        kU !== aU && function(UU, XU, cU) {
          AU || (AU = !0, Promise.resolve().then((() => zU(1325))).then((zU => {
            let {
              Wa: yU
            } = zU;
            yU(new Error("A canvas didn't take canvasTxt's font"), {
              font: UU,
              cY: XU,
              drawnWith: null !== cU && void 0 !== cU ? cU : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(aU, gU, kU);
        const GU = yU(UU.font);
        if (null === kU && null !== GU && GU > 0) {
          const zU = IU / GU;
          UU.save();
          try {
            return UU.scale(zU, zU), {
              height: this.drawLines(UU, XU, cU / zU, FU / zU, oU / zU, DU / zU, GU).height * zU
            }
          } finally {
            UU.restore()
          }
        }
        return this.drawLines(UU, XU, cU, FU, oU, DU, IU)
      },
      drawLines: function(UU, XU, zU, yU, QU, AU, FU) {
        const oU = zU + QU,
          DU = yU + AU;
        let EU, YU = yU + AU / 2 + FU / 2;
        "right" === this.align ? (EU = oU, UU.textAlign = "right") : "left" === this.align ? (EU = zU, UU.textAlign = "left") : (EU = zU + QU / 2, UU.textAlign = "center");
        for (const cU of XU) {
          UU.measureText(cU).width >= QU && (XU = XU.replace(cU, ""))
        }
        XU = (0, cU.L)(XU);
        const NU = [],
          IU = XU.split("\n"),
          pU = this.justify ? UU.measureText("\u200a").width : 0;
        IU.forEach((XU => {
          let zU = UU.measureText(XU).width;
          if (zU <= QU) NU.push(XU);
          else {
            let cU = XU;
            const yU = QU;
            let AU, FU, oU;
            for (zU = UU.measureText(cU).width; zU > yU;) {
              for (AU = 0, FU = 0, oU = ""; FU < yU;) AU++, oU = cU.substr(0, AU), FU = UU.measureText(oU).width;
              AU--, oU = oU.substr(0, AU);
              const XU = AU;
              if (" " !== cU.substr(AU, 1)) {
                for (;
                  " " !== cU.substr(AU, 1) && 0 !== AU;) AU--;
                0 === AU && (AU = XU), oU = cU.substr(0, AU)
              }
              oU = this.justify ? this.justifyLine(UU, oU, pU, "\u200a", QU) : oU, cU = cU.substr(AU), zU = UU.measureText(cU).width, NU.push(oU)
            }
            zU > 0 && NU.push(cU)
          }
        }));
        const aU = this.lineHeight ? this.lineHeight : this.getTextHeight(UU, XU),
          tU = aU * (NU.length - 1),
          gU = tU / 2;
        let kU = yU;
        "top" === this.vAlign ? YU = yU + FU : "bottom" === this.vAlign ? (YU = DU - tU, kU = DU) : (kU = yU + AU / 2, YU -= gU), NU.forEach((XU => {
          XU = XU.trim(), UU.fillText(XU, EU, YU), YU += aU
        })), this.debug && (UU.lineWidth = 3, UU.strokeStyle = "#00909e", UU.strokeRect(zU, yU, QU, AU), UU.lineWidth = 2, UU.strokeStyle = "#f6d743", UU.beginPath(), UU.moveTo(EU, yU), UU.lineTo(EU, DU), UU.stroke(), UU.strokeStyle = "#ff6363", UU.beginPath(), UU.moveTo(zU, kU), UU.lineTo(oU, kU), UU.stroke());
        return {
          height: tU + aU
        }
      },
      getTextHeight: function(UU, XU) {
        const zU = UU.textBaseline;
        UU.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: cU
        } = UU.measureText(XU);
        return UU.textBaseline = zU, cU
      },
      justifyLine: function(UU, XU, zU, cU, yU) {
        const QU = XU.trim(),
          AU = UU.measureText(QU).width,
          FU = QU.split(/\s+/).length - 1,
          oU = Math.floor((yU - AU) / zU);
        if (FU <= 0 || oU <= 0) return QU;
        const DU = Math.floor(oU / FU);
        let EU = oU - FU * DU,
          YU = [];
        for (let NU = 0; NU < DU; NU++) YU.push(cU);
        YU = YU.join("");
        return QU.replace(/\s+/g, (UU => {
          const XU = EU > 0 ? YU + cU : YU;
          return EU--, UU + XU
        }))
      }
    }
  },
  39948: (UU, XU, zU) => {
    function cU(UU, XU) {
      return XU.set(UU), XU
    }
    zU.d(XU, {
      e: () => cU
    })
  },
  39481: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => aU,
      g: () => pU,
      j: () => NU,
      k: () => EU,
      l: () => YU
    });
    var cU = zU(4608),
      yU = zU(344);
    const QU = 1024,
      AU = 1536,
      FU = 2 * cU.j + 1,
      oU = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      DU = 1.5;

    function EU(UU, XU, zU) {
      if ("string" !== typeof UU) return XU;
      try {
        const zU = JSON.parse(UU);
        return zU && "object" === typeof zU ? zU : XU
      } catch (cU) {
        return void 0 !== zU && console.error(`Couldn't parse ${zU}`, cU), XU
      }
    }

    function YU(UU) {
      return EU(UU, null, "a leaderboard's rows")
    }

    function NU(UU, XU) {
      var zU, cU;
      return null !== XU && void 0 !== XU ? XU : {
        status: null !== (zU = UU.status) && void 0 !== zU ? zU : "loading",
        entries: null !== (cU = UU.entries) && void 0 !== cU ? cU : []
      }
    }

    function IU(UU, XU) {
      return "number" === typeof UU && Number.isFinite(UU) && UU > 0 ? UU : XU
    }

    function pU(UU, XU) {
      const zU = IU(UU.size, 1);
      let cU = IU(UU.width, IU(2.5 * zU, 2.5)),
        yU = IU(UU.height, IU(3.75 * zU, 3.75));
      Number.isFinite(QU * yU / cU) && Number.isFinite(AU * cU / yU) || (cU = 2.5, yU = 3.75);
      const FU = yU / cU,
        oU = Math.max(1, Math.min(QU, XU / FU));
      return {
        width: cU,
        height: yU,
        layoutWidth: Math.max(QU, AU / FU),
        layoutHeight: Math.max(AU, QU * FU),
        pixelWidth: Math.round(oU),
        pixelHeight: Math.round(Math.max(1, Math.min(XU, oU * FU)))
      }
    }

    function aU(UU, XU, zU, AU, EU, YU) {
      UU.setTransform(1, 0, 0, 1, 0, 0), UU.fillStyle = yU.H.defaultNameTagBackground, UU.fillRect(0, 0, XU, zU), UU.scale(XU / AU.layoutWidth, zU / AU.layoutHeight), UU.translate((AU.layoutWidth - QU) / 2, 0),
        function(UU, XU, zU, QU) {
          var AU, EU, YU, NU;
          const {
            top: IU,
            around: pU,
            showPlayerText: aU,
            localPlayerDbId: kU
          } = zU, {
            whiteUiText: GU,
            grayUiText: BU,
            yellowUiText: ZU
          } = yU.H;
          UU.textBaseline = "middle";
          const RU = function(XU, zU, cU, yU, QU, AU) {
              let FU = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              UU.font = `bold ${yU}px 'Jetbrains Mono', monospace`, UU.fillStyle = QU, UU.textAlign = FU;
              let oU = XU.replace(/[\r\n\t]/g, " ");
              if (UU.measureText(oU).width > AU) {
                for (; oU.length > 0 && UU.measureText(`${oU}\u2026`).width > AU;) oU = oU.slice(0, -1);
                oU += "\u2026"
              }
              UU.fillText(oU, zU, cU)
            },
            PU = XU => {
              UU.fillStyle = GU, UU.globalAlpha = .15, UU.fillRect(24, XU, 976, 2), UU.globalAlpha = 1
            },
            WU = null === kU ? null : (0, yU.qc)(kU),
            dU = UU => null !== WU && UU.playerHash === WU,
            LU = tU(IU.entries, cU.l),
            eU = "ready" === IU.status && LU.length > 0,
            CU = null === pU ? [] : tU(pU.entries, FU),
            wU = LU.some(dU),
            qU = null === pU ? null : function(UU) {
              const XU = UU;
              if (!XU || !Number.isFinite(XU.rank) || !Number.isFinite(XU.tied) || !Number.isFinite(XU.total)) return null;
              return XU
            }(pU.standing),
            OU = CU.find(dU),
            SU = LU.find(dU),
            rU = null === qU || void 0 === OU ? null : {
              value: OU.value,
              rank: qU.rank
            },
            uU = gU(LU, void 0 === SU || SU.value === (null === rU || void 0 === rU ? void 0 : rU.value) ? rU : null),
            fU = gU(CU, rU),
            iU = (UU, XU) => {
              const zU = UU.findIndex(dU);
              return zU >= 0 ? XU[zU] : null
            },
            HU = null !== (AU = null !== (EU = null === qU || void 0 === qU ? void 0 : qU.rank) && void 0 !== EU ? EU : iU(CU, fU)) && void 0 !== AU ? AU : iU(LU, uU);
          UU.font = "bold 34px 'Jetbrains Mono', monospace";
          const MU = [...eU ? uU : [], ...wU ? [] : fU],
            vU = Math.min(280, Math.max(0, ...MU.map((XU => UU.measureText(oU.format(XU)).width)))),
            VU = vU <= 80,
            sU = VU ? 80 : 32 + vU,
            nU = VU ? 148 : sU + 28,
            mU = 660 - nU;
          RU(`TOP ${cU.l}  /  ALL TIME`, 24, 52, 28, BU, 976), RU(aU ? String(null !== (YU = XU.title) && void 0 !== YU ? YU : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, GU, 976), RU("RANK", 32, 174, 28, BU, nU - 40), RU("PLAYER", nU, 174, 28, BU, mU), RU(aU ? String(null !== (NU = XU.scoreLabel) && void 0 !== NU ? NU : "Score").slice(0, 24) : "Score", 992, 174, 28, BU, 304, "right"), PU(202);
          const lU = (QU - 232) / (cU.l + DU + FU),
            xU = 208 + cU.l * lU,
            JU = xU + DU * lU,
            jU = (XU, zU, cU, yU) => {
              const QU = dU(XU);
              UU.fillStyle = QU ? ZU : GU, UU.globalAlpha = QU ? .15 : yU ? .035 : 0, UU.fillRect(24, cU - lU / 2 + 1, 976, lU - 2), UU.globalAlpha = 1;
              const AU = QU ? ZU : GU;
              RU(oU.format(zU), sU, cU, 34, AU, VU ? 80 : vU, VU ? "center" : "right"), RU(aU ? String(XU.name).slice(0, 64) : "Player", nU, cU, 34, AU, mU);
              const FU = oU.format(XU.value);
              RU(UU.measureText(FU).width > 304 ? XU.value.toExponential(6) : FU, 992, cU, 34, AU, 304, "right")
            };
          if (eU)
            for (const [cU, yU] of LU.entries()) jU(yU, uU[cU], 208 + (cU + .5) * lU, cU % 2 === 0);
          else {
            const UU = "error" === IU.status,
              XU = UU ? "Couldn't load leaderboard" : "ready" === IU.status ? "No scores yet" : "Loading leaderboard\u2026",
              zU = UU ? "Trying again shortly" : "ready" === IU.status ? "Be the first on the board!" : "Fetching the top players",
              cU = (208 + xU) / 2;
            RU(XU, 512, cU - 28, 40, UU ? yU.H.redUiText : GU, 960, "center"), RU(zU, 512, cU + 27, 30, BU, 960, "center")
          }
          const KU = xU + DU * lU / 2;
          if (null === HU) PU(KU);
          else {
            const XU = null === qU ? 0 : qU.tied - 1,
              zU = `YOUR RANK #${oU.format(HU)}${null===qU?"":` of ${oU.format(qU.total)}`}`;
            UU.font = "bold 36px 'Jetbrains Mono', monospace";
            const cU = Math.max(20, Math.min(36, Math.floor(34560 / UU.measureText(zU).width)));
            RU(zU, 512, KU - (XU > 0 ? 15 : 0), cU, ZU, 960, "center"), XU > 0 && RU(`Tied with ${oU.format(XU)} other${1===XU?"":"s"}`, 512, KU + 24, 24, BU, 960, "center")
          }
          if (null === pU) return;
          const bU = JU + FU * lU / 2;
          if (wU) RU(`You're in the top ${cU.l}!`, 512, bU, 40, ZU, 960, "center");
          else if (0 === CU.length) RU("You're not on this board yet", 512, bU, 34, BU, 960, "center");
          else
            for (const [cU, yU] of CU.entries()) jU(yU, fU[cU], JU + (cU + .5) * lU, cU % 2 === 0)
        }(UU, EU, YU, AU.layoutHeight)
    }

    function tU(UU, XU) {
      return Array.isArray(UU) ? UU.slice(0, XU).filter((UU => UU && Number.isFinite(UU.rank) && Number.isFinite(UU.value))) : []
    }

    function gU(UU, XU) {
      const zU = [];
      let cU = !1;
      return UU.forEach(((yU, QU) => {
        if (null !== XU && yU.value === XU.value) return void zU.push(XU.rank);
        const AU = QU > 0 && yU.value === UU[QU - 1].value;
        AU || (cU = 0 === QU && 1 !== yU.rank), zU.push(AU && !cU ? zU[QU - 1] : yU.rank)
      })), zU
    }
  },
  39697: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => yU,
      d: () => QU
    });
    const cU = 32;

    function yU(UU) {
      return Array.from(UU).length
    }

    function QU(UU) {
      const XU = [""];
      let zU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        yU = "";
      const QU = () => {
        XU.push(""), zU = 0, yU = ""
      };
      for (const AU of UU.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(AU)) QU();
        else if (/^\s+$/.test(AU)) yU += AU;
      else if (AU.length > 0) {
        const UU = Array.from(AU);
        zU > 0 && zU + yU.length + UU.length > cU && QU(), XU[XU.length - 1] += yU, zU += yU.length, yU = "";
        for (const yU of UU) zU >= cU && QU(), XU[XU.length - 1] += yU, zU++
      }
      return XU[XU.length - 1] += yU, XU
    }
  },
  39942: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => AU
    });
    var cU = zU(37361),
      yU = zU.n(cU);
    const QU = [1, 1, 1];

    function AU(UU) {
      if (!UU) return [...QU];
      try {
        const [XU, zU, cU] = yU()(UU).rgb().array();
        return [XU / 255, zU / 255, cU / 255]
      } catch (XU) {
        return console.warn(`Invalid groundArrowPath colour "${UU}":`, XU), [...QU]
      }
    }
  },
  40074: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => FU,
      i: () => DU,
      j: () => oU
    });
    var cU = zU(301),
      yU = zU(3203);
    const QU = /\/textures\/skyBoxes\/(space_blue|space_lightblue|space_red_2|space_white)\/(_[np][xyz]\.jpg)$/,
      AU = 512;

    function FU(UU) {
      var XU;
      const zU = Math.min(screen.width, screen.height) * (null !== (XU = (0, cU.d)()) && void 0 !== XU ? XU : (0, yU.k)());
      return Math.max(window.innerHeight * (0, yU.k)(), zU) / (0, yU.l)(UU)
    }

    function oU(UU, XU, zU) {
      return XU / (2 * Math.tan(zU / 2)) > AU ? UU : DU(UU)
    }

    function DU(UU) {
      return UU.map((UU => UU.replace(QU, "/textures/skyBoxes/$1/1024/$2")))
    }
  },
  39936: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => yU
    });
    var cU = zU(212);

    function yU(UU, XU, zU, yU, QU, AU, FU, oU, DU, EU, YU) {
      const NU = cU.f.aY,
        IU = QU - zU;
      let pU = IU * (AU - yU);
      EU.fill(0, 0, pU);
      for (let cU = Math.floor((oU - 1) / NU);
        (cU + 1) * NU > FU; cU--) {
        const aU = cU * NU;
        for (let tU = Math.floor(zU / NU); tU * NU < QU; tU++) {
          const gU = tU * NU,
            kU = Math.max(zU - gU, 0),
            GU = Math.min(QU - gU, NU);
          for (let QU = Math.floor(yU / NU); QU * NU < AU; QU++) {
            const BU = UU(tU, cU, QU);
            if (!BU) continue;
            const ZU = QU * NU,
              RU = Math.max(yU - ZU, 0),
              PU = Math.min(AU - ZU, NU),
              WU = BU.MI,
              dU = BU.lN,
              LU = dU.data;
            for (let UU = Math.min(oU - 1 - aU, NU - 1); UU >= Math.max(FU - aU, 0); UU--) {
              const cU = WU[UU],
                QU = cU === XU;
              if (QU || 0 !== DU[cU]) {
                for (let XU = kU; XU < GU; XU++)
                  for (let AU = RU; AU < PU; AU++) {
                    const FU = (ZU + AU - yU) * IU + gU + XU - zU;
                    if (0 !== EU[FU]) continue;
                    const oU = QU ? LU[dU.index(XU, UU, AU)] : cU;
                    0 !== DU[oU] && (EU[FU] = oU, YU[FU] = aU + UU, pU--)
                  }
                if (0 === pU) return
              }
            }
          }
        }
      }
    }
  },
  34686: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => QU,
      g: () => FU,
      k: () => AU,
      n: () => yU,
      o: () => cU
    });
    const cU = {
        default: {
          type: "earth",
          vertexTint: [137, 207, 240]
        },
        gloomy: {
          type: "custom",
          nx: "/textures/skyBoxes/gloomy/_nx.jpg",
          ny: "/textures/skyBoxes/gloomy/_ny.jpg",
          nz: "/textures/skyBoxes/gloomy/_nz.jpg",
          px: "/textures/skyBoxes/gloomy/_px.jpg",
          py: "/textures/skyBoxes/gloomy/_py.jpg",
          pz: "/textures/skyBoxes/gloomy/_pz.jpg"
        },
        interstellar: {
          type: "custom",
          nx: "/textures/skyBoxes/interstellar/_nx.jpg",
          ny: "/textures/skyBoxes/interstellar/_ny.jpg",
          nz: "/textures/skyBoxes/interstellar/_nz.jpg",
          px: "/textures/skyBoxes/interstellar/_px.jpg",
          py: "/textures/skyBoxes/interstellar/_py.jpg",
          pz: "/textures/skyBoxes/interstellar/_pz.jpg"
        },
        space_blue: {
          type: "custom",
          nx: "/textures/skyBoxes/space_blue/_nx.jpg",
          ny: "/textures/skyBoxes/space_blue/_ny.jpg",
          nz: "/textures/skyBoxes/space_blue/_nz.jpg",
          px: "/textures/skyBoxes/space_blue/_px.jpg",
          py: "/textures/skyBoxes/space_blue/_py.jpg",
          pz: "/textures/skyBoxes/space_blue/_pz.jpg"
        },
        space_lightblue: {
          type: "custom",
          nx: "/textures/skyBoxes/space_lightblue/_nx.jpg",
          ny: "/textures/skyBoxes/space_lightblue/_ny.jpg",
          nz: "/textures/skyBoxes/space_lightblue/_nz.jpg",
          px: "/textures/skyBoxes/space_lightblue/_px.jpg",
          py: "/textures/skyBoxes/space_lightblue/_py.jpg",
          pz: "/textures/skyBoxes/space_lightblue/_pz.jpg"
        },
        space_red: {
          type: "custom",
          nx: "/textures/skyBoxes/space_red/_nx.jpg",
          ny: "/textures/skyBoxes/space_red/_ny.jpg",
          nz: "/textures/skyBoxes/space_red/_nz.jpg",
          px: "/textures/skyBoxes/space_red/_px.jpg",
          py: "/textures/skyBoxes/space_red/_py.jpg",
          pz: "/textures/skyBoxes/space_red/_pz.jpg"
        },
        underwater: {
          type: "custom",
          nx: "/textures/skyBoxes/underwater/water.jpg",
          ny: "/textures/skyBoxes/underwater/water.jpg",
          nz: "/textures/skyBoxes/underwater/water.jpg",
          px: "/textures/skyBoxes/underwater/water.jpg",
          py: "/textures/skyBoxes/underwater/water.jpg",
          pz: "/textures/skyBoxes/underwater/water.jpg"
        },
        starry: {
          type: "custom",
          nx: "/textures/skyBoxes/starry/_nx.jpg",
          ny: "/textures/skyBoxes/starry/_ny.jpg",
          nz: "/textures/skyBoxes/starry/_nz.jpg",
          px: "/textures/skyBoxes/starry/_px.jpg",
          py: "/textures/skyBoxes/starry/_py.jpg",
          pz: "/textures/skyBoxes/starry/_pz.jpg"
        },
        space_red_2: {
          type: "custom",
          nx: "/textures/skyBoxes/space_red_2/_nx.jpg",
          ny: "/textures/skyBoxes/space_red_2/_ny.jpg",
          nz: "/textures/skyBoxes/space_red_2/_nz.jpg",
          px: "/textures/skyBoxes/space_red_2/_px.jpg",
          py: "/textures/skyBoxes/space_red_2/_py.jpg",
          pz: "/textures/skyBoxes/space_red_2/_pz.jpg"
        },
        space_white: {
          type: "custom",
          nx: "/textures/skyBoxes/space_white/_nx.jpg",
          ny: "/textures/skyBoxes/space_white/_ny.jpg",
          nz: "/textures/skyBoxes/space_white/_nz.jpg",
          px: "/textures/skyBoxes/space_white/_px.jpg",
          py: "/textures/skyBoxes/space_white/_py.jpg",
          pz: "/textures/skyBoxes/space_white/_pz.jpg"
        }
      },
      yU = "/textures/dayNight/sun.png",
      QU = "/textures/dayNight/moon.png",
      AU = "/textures/dayNight/stars",
      FU = ["_px.png", "_py.png", "_pz.png", "_nx.png", "_ny.png", "_nz.png"]
  },
  40056: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => YU,
      d: () => NU,
      g: () => cU,
      k: () => yU,
      m: () => DU,
      p: () => QU,
      r: () => EU,
      t: () => oU,
      x: () => FU
    });
    const cU = ["linear", "easeIn", "easeOut", "easeInOut"],
      yU = ["feet", "eye"],
      QU = ["movement", "camera", "cursor"],
      AU = ["targets", "playerFacing", "blendInMs", "blendEasing", "transition", "letterbox", "hideHud"];

    function FU(UU, XU) {
      return oU(UU, XU, AU)
    }

    function oU(UU, XU) {
      let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      if (UU === XU || Number.isNaN(UU) && Number.isNaN(XU)) return !0;
      if ("object" !== typeof UU || "object" !== typeof XU || null === UU || null === XU || Array.isArray(UU) !== Array.isArray(XU)) return !1;
      const cU = UU,
        yU = XU;
      for (const QU of new Set([...Object.keys(cU), ...Object.keys(yU)]))
        if (!zU.includes(QU) && !oU(cU[QU], yU[QU])) return !1;
      return !0
    }
    const DU = {
        maxBlendInMs: 1e4,
        minFov: 10,
        maxFov: 120,
        maxOffset: 128,
        maxSmoothMs: 5e3,
        maxReturnMs: 1e4,
        maxTransitionMs: 5e3,
        minTransitionFadeMs: 200,
        minFadeTurnMs: 333,
        maxPlayerLook: 180,
        maxKeyframes: 64,
        maxPathMs: 6e5,
        maxFrameTargets: 64,
        maxFrameDistance: 128,
        maxFrameHeading: 360,
        maxFrameElevation: 90,
        maxCoordinate: 1e6,
        minDirectionLength: 1e-6,
        minEasingY: -1,
        maxEasingY: 2
      },
      EU = "^-[1-9][0-9]*$",
      YU = "^#[0-9a-fA-F]{6}$",
      NU = "#000000"
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);