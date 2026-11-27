export const id = 214;
export const ids = [214];
export const modules = {
  40409: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => yR
    });
    class yR {
      constructor(RR, JR) {
        this.read = RR, this.apply = JR, this.release = null
      }
      turn(RR, JR) {
        const GR = null === this.release ? this.read() : this.release.transitionMs;
        this.stop(!1), this.apply({
          forcedCameraDirectionTransitionMs: JR,
          forcedCameraDirection: [RR[0], RR[1], RR[2]]
        }), this.release = {
          timer: setTimeout((() => {
            this.stop(!0)
          }), JR + 100),
          transitionMs: GR
        }
      }
      dispose() {
        this.stop(!0)
      }
      stop(RR) {
        null !== this.release && (clearTimeout(this.release.timer), RR && this.apply({
          forcedCameraDirection: null,
          forcedCameraDirectionTransitionMs: this.release.transitionMs
        }), this.release = null)
      }
    }
  },
  39889: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => uR,
      e: () => tR
    });
    const yR = new Map;

    function tR(RR, JR) {
      yR.set(RR, JR)
    }

    function uR(RR) {
      return RR ? yR.get(RR) : void 0
    }
  },
  37433: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => VR,
      g: () => qR,
      i: () => fR,
      l: () => iR,
      o: () => WR
    });
    var yR = GR(688),
      tR = GR(1963),
      uR = GR(5685);
    class ZR {
      constructor(RR, JR) {
        this.width = RR, this.hK = JR, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(RR * JR)
      }
      push(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const GR = this.data,
          yR = this.next * this.width;
        for (let tR = 0; tR < this.width; tR++) GR[yR + tR] = RR[JR + tR];
        this.next = (this.next + 1) % this.hK, this.size = Math.min(this.size + 1, this.hK)
      }
      rows() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1 / 0;
        const GR = [],
          yR = (this.next - this.size + this.hK) % this.hK;
        for (let tR = 0; tR < this.size; tR++) {
          const uR = (yR + tR) % this.hK * this.width;
          this.data[uR + RR] >= JR && GR.push(Array.from(this.data.subarray(uR, uR + this.width)))
        }
        return GR
      }
      lines() {
        return this.rows().map((RR => RR.join(",")))
      }
    }
    const qR = 10,
      iR = {
        idle: 0,
        tK: 1,
        xH: 2,
        IH: 3,
        lL: 4
      },
      fR = {
        none: 0,
        skipped: 1,
        paced: 2,
        drawn: 3
      },
      VR = {
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
      KR = 12e3,
      wR = ["nowMs", "dtMs", "rawX", "rawY", "turnedX", "turnedY", "outcome", "velocityX", "velocityY", "limit"],
      rR = ["timeStamp", "nowMs", "movementX", "movementY", "locked"],
      eR = ["nowMs", "dtMs", "heading", "pitch", "kind"],
      aR = ["nowMs", "source", "headingBefore", "pitchBefore", "headingAfter", "pitchAfter"],
      LR = ["nowMs", "change", "count"];

    function nR(RR) {
      return "js" === RR ? VR.jsClient : VR.wasmClient
    }
    class UR {
      constructor() {
        this.steps = new ZR(qR, KR), this.events = new ZR(rR.length, KR), this.frames = new ZR(eR.length, KR), this.cameraSets = new ZR(uR.e, 256), this.changes = new ZR(LR.length, 256)
      }
    }
    const WR = new class {
      constructor() {
        this.rings = null, this.sample = new Float64Array(rR.length), this.startedClient = null, this.startedAtMs = 0
      }
      get client() {
        return this.startedClient
      }
      start(RR, JR) {
        this.startedClient = RR, this.startedAtMs = performance.now(), null !== this.rings ? this.change(nR(RR)) : JR && this.allocate()
      }
      lockGained() {
        this.allocate(), this.change(VR.lockGained)
      }
      allocate() {
        null === this.rings && (this.rings = new UR, null !== this.startedClient && this.changeAt(this.startedAtMs, nR(this.startedClient), 1))
      }
      step(RR, JR) {
        var GR;
        RR[JR + 6] !== iR.lL && (null === (GR = this.rings) || void 0 === GR || GR.steps.push(RR, JR))
      }
      cameraSet(RR, JR) {
        var GR;
        null === (GR = this.rings) || void 0 === GR || GR.cameraSets.push(RR, JR)
      }
      mouseMove(RR, JR) {
        const GR = this.rings;
        if (null === GR) return;
        const yR = this.sample;
        yR[0] = RR.timeStamp, yR[1] = performance.now(), yR[2] = RR.movementX, yR[3] = RR.movementY, yR[4] = JR ? 1 : 0, GR.events.push(yR)
      }
      frame(RR, JR, GR, yR) {
        const tR = this.rings;
        if (null === tR || yR === fR.none) return;
        const uR = this.sample;
        uR[0] = performance.now(), uR[1] = RR, uR[2] = JR, uR[3] = GR, uR[4] = yR, tR.frames.push(uR)
      }
      change(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.changeAt(performance.now(), RR, JR)
      }
      changeAt(RR, JR, GR) {
        const yR = this.rings;
        if (null === yR) return;
        const tR = this.sample;
        tR[0] = RR, tR[1] = JR, tR[2] = GR, yR.changes.push(tR)
      }
      dumpText() {
        var RR, JR;
        const GR = this.rings;
        return [`look records (${this.startedClient}): ${wR.join(",")}`, ...null !== (RR = null === GR || void 0 === GR ? void 0 : GR.steps.lines()) && void 0 !== RR ? RR : [], `mousemove events: ${rR.join(",")}`, ...null !== (JR = null === GR || void 0 === GR ? void 0 : GR.events.lines()) && void 0 !== JR ? JR : []].join("\n")
      }
      toJson(RR, JR) {
        var GR;
        const tR = RR - 6e4,
          uR = this.rings,
          ZR = function(RR, JR) {
            var GR;
            let yR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            const uR = null !== (GR = null === RR || void 0 === RR ? void 0 : RR.rows(yR, tR)) && void 0 !== GR ? GR : [];
            return {
              columns: JR,
              fromMs: 0 === uR.length ? null : uR[0][yR],
              rows: uR
            }
          };
        return {
          version: yR.d,
          client: null !== (GR = this.startedClient) && void 0 !== GR ? GR : "not started",
          savedAt: (new Date).toISOString(),
          savedAtMs: RR,
          keptMs: 6e4,
          page: window.location.href,
          userAgent: navigator.userAgent,
          devicePixelRatio: window.devicePixelRatio,
          screen: {
            width: window.screen.width,
            height: window.screen.height
          },
          un: null !== document.pointerLockElement,
          visibility: document.visibilityState,
          ...JR,
          outcomes: iR,
          frameKinds: fR,
          changes: VR,
          lookSteps: ZR(null === uR || void 0 === uR ? void 0 : uR.steps, wR),
          mouseMoves: ZR(null === uR || void 0 === uR ? void 0 : uR.events, rR, 1),
          frames: ZR(null === uR || void 0 === uR ? void 0 : uR.frames, eR),
          cameraSets: ZR(null === uR || void 0 === uR ? void 0 : uR.cameraSets, aR),
          pageChanges: ZR(null === uR || void 0 === uR ? void 0 : uR.changes, LR)
        }
      }
      save(RR) {
        const JR = JSON.stringify(this.toJson(performance.now(), RR));
        (0, tR.e)(new Blob([JR], {
          type: "application/json"
        }), `bloxd-mouse-look-${(new Date).toISOString().replace(/[:.]/g,"-")}.json`)
      }
    }
  },
  40957: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => tR
    });
    var yR = GR(39375);

    function tR(RR, JR, GR) {
      var tR, uR, ZR, qR, iR, fR, VR;
      const KR = (0, yR.d)(RR, JR, GR[0], GR[1], GR[2]),
        wR = KR ? null !== (tR = KR.textCell) && void 0 !== tR ? tR : KR.rect.anchor : GR,
        rR = JR(wR[0], wR[1], wR[2]);
      return {
        pos: [GR[0], GR[1], GR[2]],
        noticeboardSpan: KR && {
          width: KR.rect.width,
          height: KR.rect.height
        },
        text: null !== (uR = null === rR || void 0 === rR || null === (ZR = rR.persisted) || void 0 === ZR || null === (qR = ZR.shared) || void 0 === qR ? void 0 : qR.text) && void 0 !== uR ? uR : "",
        textSize: null !== (iR = null === rR || void 0 === rR || null === (fR = rR.persisted) || void 0 === fR || null === (VR = fR.shared) || void 0 === VR ? void 0 : VR.textSize) && void 0 !== iR ? iR : null
      }
    }
  },
  39689: (RR, JR, GR) => {
    function yR(RR) {
      switch (RR.kind) {
        case void 0:
        case "flatEmissive":
          return !1;
        case "chevronPath":
        case "furnaceFire":
          return !0
      }
    }
    GR.d(JR, {
      c: () => tR,
      f: () => uR,
      h: () => yR
    });
    const tR = 4,
      uR = 3
  },
  40448: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => tR,
      e: () => uR
    });
    var yR = GR(377);
    const tR = new Set(["bedwars", "bridgeBattle", "buildAFactory2", "classic", "clutch", "containmentBreach", "cooking", "defusal", "frontline", "goalRush", "greenville", "hideseek", "luckyBedwars", "murderMystery", "ninetyNineNights", "oneBlock", "plots", "pvpCiv", "secretSanta", "shooting", "skyIslands", "skyblock", "tsunami"]);
    class uR {
      constructor(RR) {
        this.importGame = RR, this.loads = new Map, this.loaded = new Map
      }
      load(RR) {
        const JR = (0, yR.Sb)(RR);
        if (!tR.has(JR)) return Promise.resolve(void 0);
        let GR = this.loads.get(JR);
        return GR || (GR = this.importGame(JR).then((RR => {
          const GR = RR.default;
          if ("function" !== typeof GR) throw new Error(`${JR}'s client code has no default-exported factory`);
          return this.loaded.set(JR, GR), GR
        })).catch((RR => {
          throw this.loads.delete(JR), RR
        })), this.loads.set(JR, GR)), GR
      }
      loadedFactory(RR) {
        const JR = (0, yR.Sb)(RR);
        if (!tR.has(JR)) return;
        const GR = this.loaded.get(JR);
        if (!GR) throw new Error(`${JR}'s client code started before it loaded`);
        return GR
      }
    }
  },
  40441: (RR, JR, GR) => {
    function yR(RR, JR) {
      return Object.values({
        ...RR,
        ...JR
      }).filter((RR => null !== RR))
    }
    GR.d(JR, {
      b: () => yR
    })
  },
  40959: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => ZR
    });
    var yR = GR(5953),
      tR = GR(35162),
      uR = GR(4555);

    function ZR(RR) {
      if (RR === yR.b) return 0;
      const JR = (0, uR.b)(RR);
      if (void 0 !== JR && JR <= tR.MAX_BLOCK_ID) return JR;
      const GR = (0, uR.b)(RR.split("|")[0]);
      if (void 0 !== GR && GR <= tR.MAX_BLOCK_ID && (0, tR.rootMetaDescOf)(GR) === RR) return GR;
      throw new Error(`Invalid block name. You sent ${RR}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`)
    }
  },
  40491: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => tR
    });
    var yR = GR(25);
    class tR {
      constructor(RR) {
        this.screen = RR, this.hidesHud = !1
      }
      show(RR, JR) {
        this.screen.setFade(RR.colour, RR.alpha), this.screen.setLetterbox(!0 === JR.letterbox, RR.alpha < 1), this.setHudHidden(!0 === JR.hideHud)
      }
      clear() {
        this.screen.clear(), this.setHudHidden(!1)
      }
      setHudHidden(RR) {
        this.hidesHud !== RR && (this.hidesHud = RR, yR.d.set({
          isUiHiddenByCamera: RR
        }))
      }
    }
  },
  40482: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => uR,
      d: () => tR
    });
    var yR = GR(37845);

    function tR(RR) {
      var JR;
      const GR = "default" === RR.mode ? "movement" : null !== (JR = RR.playerFacing) && void 0 !== JR ? JR : "movement";
      return "cursor" === GR ? {
        facing: GR,
        mouseTurns: null
      } : {
        facing: GR,
        mouseTurns: "default" !== RR.mode && void 0 !== RR.playerLook ? "look" : "view"
      }
    }

    function uR(RR, JR, GR, tR, uR, ZR) {
      return ZR.bD = 0, ZR.PD = 0, ZR.pointedAt = void 0, void 0 !== tR ? uR ? (ZR.pointedAt = tR, RR) : (0, yR.v)(tR.heading) : uR ? (ZR.bD = JR, ZR.PD = GR, RR) : (0, yR.v)(RR + JR)
    }
  },
  40466: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => jR
    });
    var yR = GR(40470),
      tR = GR(37845),
      uR = GR(38106);

    function ZR(RR, JR, GR, yR) {
      if (!(yR > 0)) return JR;
      const tR = JR > RR ? Math.min(JR, RR + GR / yR) : Math.max(JR, RR - GR / yR);
      return Math.abs(JR - tR) < 1e-9 ? JR : tR
    }
    class qR {
      constructor() {
        this.phase = null, this.outMs = 0, this.holdMs = 0, this.inMs = 0, this.mD = 0, this.sinceTurnMs = 1 / 0, this.clearMs = 1 / 0, this.waiting = null, this.screen = {
          colour: yR.d,
          alpha: 0
        }
      }
      getScreen() {
        return this.screen
      }
      fadeOut(RR) {
        !this.isGoingOut() && this.sinceTurnMs < yR.k.minFadeTurnMs ? this.waiting = {
          turn: "out",
          transition: RR
        } : (this.waiting = null, this.startOut(RR))
      }
      fadeIn(RR) {
        this.isGoingOut() ? this.sinceTurnMs < yR.k.minFadeTurnMs ? this.waiting = {
          turn: "in",
          minMs: RR
        } : (this.waiting = null, this.startIn(RR)) : this.waiting = null
      }
      advance(RR) {
        const JR = this.waiting;
        if (null === JR) return this.step(RR);
        const GR = yR.k.minFadeTurnMs - this.sinceTurnMs;
        if (GR > RR) return this.step(RR);
        const tR = this.step(GR);
        return this.waiting = null, "out" === JR.turn ? this.startOut(JR.transition) : this.startIn(JR.minMs), this.step(RR - GR) || tR
      }
      isGoingOut() {
        return "out" === this.phase || "hold" === this.phase
      }
      startOut(RR) {
        ("in" === this.phase || null === this.phase && this.clearMs < yR.k.minFadeTurnMs) && (this.sinceTurnMs = 0), this.phase = "out", 0 === this.screen.alpha && (this.screen.colour = RR.colour), this.outMs = RR.outMs, this.holdMs = RR.holdMs, this.inMs = RR.inMs
      }
      startIn(RR) {
        this.isGoingOut() && (this.sinceTurnMs = 0), this.phase = "in", this.inMs = Math.max(RR, this.inMs)
      }
      step(RR) {
        const JR = this.screen;
        this.sinceTurnMs += RR, null === this.phase && (this.clearMs += RR);
        let GR = !1,
          tR = RR;
        if ("out" === this.phase) {
          const yR = (1 - JR.alpha) * this.outMs;
          if (JR.alpha = ZR(JR.alpha, 1, RR, this.outMs), JR.alpha < 1) return !1;
          this.phase = "hold", this.mD = 0, tR = Math.max(0, RR - yR), GR = !0
        }
        let uR = RR;
        if ("hold" === this.phase) {
          this.mD += tR;
          const RR = Math.min(this.mD - this.holdMs, this.sinceTurnMs - yR.k.minFadeTurnMs);
          if (RR < 0 || GR) return GR;
          this.phase = "in", this.sinceTurnMs = RR, uR = RR
        }
        return "in" === this.phase && (JR.alpha = ZR(JR.alpha, 0, uR, this.inMs), JR.alpha <= 0 && (this.phase = null, this.clearMs = 0)), GR
      }
    }
    var iR = GR(40462),
      fR = GR(40476),
      VR = GR(2102),
      KR = GR(37771);

    function wR(RR, JR) {
      for (let GR = 0; GR < JR.length; GR++) JR[GR] = RR[GR]
    }

    function rR(RR, JR) {
      var GR;
      return null !== (GR = RR.fov) && void 0 !== GR ? GR : JR.getDefaultFov()
    }

    function eR(RR, JR, GR, yR, tR) {
      const uR = 2 / yR,
        ZR = Math.exp(-uR * tR);
      for (let qR = 0; qR < RR.length; qR++) {
        const yR = RR[qR] - GR[qR],
          iR = (JR[qR] + uR * yR) * tR;
        RR[qR] = GR[qR] + (yR + iR) * ZR, JR[qR] = (JR[qR] - uR * iR) * ZR
      }
    }
    class aR {
      constructor(RR, JR, GR, yR) {
        var uR, ZR, qR, iR, fR;
        this.settings = RR, this.NK = JR, this.targets = GR, this.base = void 0, this.closestDistance = void 0, this.furthestDistance = void 0, this.goal = void 0, this.framedTargets = !1, this.smoothed = [0, 0, 0, 0, 0, 0], this.BL = [0, 0, 0, 0, 0, 0], this.started = !1, this.angles = {
          heading: 0,
          pitch: 0
        }, this.points = [], this.forward = [0, 0, 0], this.base = {
          heading: (0, tR.v)((0, VR.g)(null !== (uR = RR.viewHeading) && void 0 !== uR ? uR : 0)),
          pitch: (0, tR.h)((0, VR.g)(null !== (ZR = RR.viewElevation) && void 0 !== ZR ? ZR : 45))
        }, this.closestDistance = null !== (qR = RR.closestDistance) && void 0 !== qR ? qR : Math.min(6, null !== (iR = RR.furthestDistance) && void 0 !== iR ? iR : 1 / 0), this.furthestDistance = null !== (fR = RR.furthestDistance) && void 0 !== fR ? fR : Math.max(64, this.closestDistance);
        const KR = (0, tR.e)(this.base.heading, this.base.pitch, this.forward),
          wR = yR.position,
          rR = this.closestDistance;
        this.goal = [wR[0] + KR[0] * rR, wR[1] + KR[1] * rR, wR[2] + KR[2] * rR, rR, this.base.heading, this.base.pitch]
      }
      update(RR, JR, GR) {
        var yR, uR;
        this.placeGoal(null !== (yR = this.settings.fov) && void 0 !== yR ? yR : this.NK.getBaseFov()), this.goal[4] = (0, tR.y)(this.smoothed[4], this.base.heading), this.goal[5] = this.base.pitch;
        const ZR = null !== (uR = this.settings.smoothMs) && void 0 !== uR ? uR : 400;
        !this.started || ZR < 1 ? (wR(this.goal, this.smoothed), this.BL.fill(0), this.started = !0) : eR(this.smoothed, this.BL, this.goal, ZR, RR), this.angles.heading = this.smoothed[4], this.angles.pitch = (0, tR.h)(this.smoothed[5]), JR.apply(this.angles, GR);
        const qR = (0, tR.e)(GR.heading, GR.pitch, this.forward);
        for (let tR = 0; tR < 3; tR++) GR.position[tR] = this.smoothed[tR] - qR[tR] * this.smoothed[3];
        GR.fov = rR(this.settings, this.NK)
      }
      continueFrom(RR) {
        RR instanceof aR && (wR(RR.goal, this.goal), wR(RR.smoothed, this.smoothed), wR(RR.BL, this.BL), this.framedTargets = RR.framedTargets, this.started = RR.started)
      }
      reset() {
        this.BL.fill(0), this.started = !1
      }
      placeGoal(RR) {
        var JR;
        let GR = 0;
        for (const VR of this.settings.targets) {
          const RR = this.targets.currentAimPoint(VR);
          RR && (0, iR.i)(RR, this.pointAt(GR++))
        }
        if (GR > 0) this.framedTargets = !0;
        else if (!this.framedTargets) {
          const RR = this.targets.aimPoint(this.NK.localPlayerId);
          RR && (0, iR.i)(RR, this.pointAt(GR++))
        }
        const yR = this.goal;
        if (0 === GR) return void(yR[3] = this.withinDistances(yR[3]));
        for (let iR = 0; iR < 3; iR++) {
          let RR = 1 / 0,
            JR = -1 / 0;
          for (let yR = 0; yR < GR; yR++) RR = Math.min(RR, this.points[yR][iR]), JR = Math.max(JR, this.points[yR][iR]);
          yR[iR] = (RR + JR) / 2
        }
        let tR = 0;
        for (let iR = 0; iR < GR; iR++) {
          const RR = this.points[iR];
          tR = Math.max(tR, Math.hypot(RR[0] - yR[0], RR[1] - yR[1], RR[2] - yR[2]))
        }
        const uR = Math.tan((0, VR.g)(RR) / 2),
          ZR = Math.atan(uR * (!0 === this.settings.letterbox ? KR.f : 1)),
          qR = Math.atan(uR * this.NK.getAspectRatio()),
          fR = (tR + (null !== (JR = this.settings.padding) && void 0 !== JR ? JR : 2)) / Math.sin(Math.min(ZR, qR));
        yR[3] = this.withinDistances(fR)
      }
      withinDistances(RR) {
        return Math.min(this.furthestDistance, Math.max(this.closestDistance, RR))
      }
      pointAt(RR) {
        return RR === this.points.length && this.points.push([0, 0, 0]), this.points[RR]
      }
    }
    class LR {
      constructor(RR) {
        this.limits = RR, this.yawOffset = 0, this.pitchOffset = 0, this.GL = 0, this.pointedAt = null
      }
      continueFrom(RR) {
        this.limits && (this.yawOffset = RR.yawOffset, this.pitchOffset = RR.pitchOffset, this.GL = RR.GL)
      }
      update(RR, JR) {
        const GR = this.limits;
        if (!GR) return;
        const yR = Number.isFinite(JR.bD) ? JR.bD : 0,
          tR = Number.isFinite(JR.PD) ? JR.PD : 0;
        if (JR.pointedAt) this.GL = 0, this.pointedAt = {
          heading: JR.pointedAt.heading,
          pitch: JR.pointedAt.pitch
        };
        else if (0 !== yR || 0 !== tR) this.GL = 0, this.yawOffset += yR, this.pitchOffset += tR;
        else {
          const JR = Math.max(0, this.GL + RR - 200) - Math.max(0, this.GL - 200);
          if (this.GL += RR, void 0 !== GR.returnMs && JR > 0) {
            const RR = GR.returnMs > 0 ? Math.exp(-3 * JR / GR.returnMs) : 0;
            this.yawOffset *= RR, this.pitchOffset *= RR
          }
        }
        this.clampOffsets(GR)
      }
      clampOffsets(RR) {
        if (RR.maxYaw >= 180) this.yawOffset = (0, tR.x)(0, this.yawOffset);
        else {
          const JR = (0, VR.g)(RR.maxYaw);
          this.yawOffset = Math.max(-JR, Math.min(JR, this.yawOffset))
        }
        const JR = (0, VR.g)(RR.maxPitch);
        this.pitchOffset = Math.max(-JR, Math.min(JR, this.pitchOffset))
      }
      apply(RR, JR) {
        this.pointedAt && this.limits && (this.yawOffset = (0, tR.x)(RR.heading, this.pointedAt.heading), this.pitchOffset = this.pointedAt.pitch - RR.pitch, this.pointedAt = null, this.clampOffsets(this.limits));
        const GR = (0, tR.h)(RR.pitch + this.pitchOffset);
        this.pitchOffset = GR - RR.pitch, JR.heading = (0, tR.v)(RR.heading + this.yawOffset), JR.pitch = GR
      }
      unapply(RR, JR) {
        JR.heading = (0, tR.v)(RR.heading - this.yawOffset), JR.pitch = (0, tR.h)(RR.pitch - this.pitchOffset)
      }
    }
    const nR = 1e-6;

    function UR(RR) {
      return Math.sqrt(RR[0] * RR[0] + RR[1] * RR[1] + RR[2] * RR[2])
    }

    function WR(RR, JR, GR, yR, tR) {
      const uR = tR * tR,
        ZR = uR * tR;
      return (2 * ZR - 3 * uR + 1) * RR + (ZR - 2 * uR + tR) * JR + (-2 * ZR + 3 * uR) * GR + (ZR - uR) * yR
    }

    function AR(RR, JR, GR, yR, tR) {
      const uR = tR * tR;
      return (6 * uR - 6 * tR) * RR + (3 * uR - 4 * tR + 1) * JR + (-6 * uR + 6 * tR) * GR + (3 * uR - 2 * tR) * yR
    }

    function CR(RR, JR) {
      const GR = JR[0] - RR[0],
        yR = JR[1] - RR[1],
        tR = JR[2] - RR[2];
      return Math.sqrt(GR * GR + yR * yR + tR * tR)
    }

    function XR(RR, JR, GR, yR, tR, uR) {
      for (let ZR = 0; ZR < 3; ZR++) uR[ZR] = tR ? RR[ZR] * yR : GR[ZR] - JR[ZR];
      return tR && function(RR, JR) {
        const GR = UR(RR);
        if (GR > JR) {
          const yR = JR / GR;
          RR[0] *= yR, RR[1] *= yR, RR[2] *= yR
        }
      }(uR, 3 * CR(JR, GR)), uR
    }

    function MR(RR, JR, GR, yR) {
      for (let tR = 0; tR < 3; tR++) yR[tR] = 6 * (JR[tR] - RR[tR]) - 2 * GR[tR];
      if (UR(yR) < nR)
        for (let tR = 0; tR < 3; tR++) yR[tR] = JR[tR] - RR[tR];
      return yR
    }

    function BR(RR, JR) {
      return [2 * JR[0] - RR[0], 2 * JR[1] - RR[1], 2 * JR[2] - RR[2]]
    }

    function lR(RR, JR, GR, yR, tR, uR, ZR) {
      if (!uR && !ZR) return 0;
      const qR = uR ? RR : 2 * JR - GR,
        iR = ZR ? GR : 2 * JR - RR,
        fR = uR ? yR : tR,
        VR = ZR ? tR : yR,
        KR = (JR - qR) / fR,
        wR = (iR - JR) / VR;
      if (KR * wR <= 0) return 0;
      const rR = (iR - qR) / (fR + VR),
        eR = 3 * Math.min(Math.abs(KR), Math.abs(wR));
      return Math.max(-eR, Math.min(eR, rR))
    }

    function pR(RR, JR, GR, yR, tR, uR, ZR) {
      const {
        u: qR,
        segmentMs: iR
      } = RR;
      if (!RR.curved) return GR + (yR - GR) * qR;
      return WR(GR, lR(JR, GR, yR, RR.beforeMs, iR, uR, !0) * iR, yR, lR(GR, yR, tR, iR, RR.afterMs, !0, ZR) * iR, qR)
    }

    function gR(RR) {
      return Math.abs(RR.pitch) >= tR.b
    }
    class bR {
      constructor(RR, JR, GR, yR, tR) {
        this.nodes = RR, this.prevNodes = GR, this.nextNodes = yR, this.tangents = void 0, this.derivative = [0, 0, 0], this.beforeAngles = {
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
        }, this.tangents = RR.map(((RR, GR) => this.nodeTangent(JR, tR, GR)))
      }
      sample(RR, JR, GR) {
        const {
          index: yR,
          toIndex: uR,
          segmentMs: ZR,
          curved: qR
        } = RR, iR = this.fromAngles, fR = this.toAngles, VR = this.nodeAngles(yR, GR.position, JR, iR), KR = this.nodeAngles(uR, GR.position, JR, fR);
        if (ZR > 0 && "aim" !== VR && "aim" !== KR && this.liveTangent(RR, iR)) return GR.heading = (0, tR.v)(iR.heading), void(GR.pitch = iR.pitch);
        if ("none" === VR && "none" === KR) return;
        !qR && ZR > 0 && ("tangent" === VR && this.liveTangent(RR, iR), "tangent" === KR && this.liveTangent(RR, fR)), "none" === VR ? (0, tR.l)(fR, iR) : "none" === KR && (0, tR.l)(iR, fR);
        const wR = qR && RR.beforeIndex >= 0 && "none" !== this.nodeAngles(RR.beforeIndex, GR.position, JR, this.beforeAngles),
          rR = qR && RR.afterIndex >= 0 && "none" !== this.nodeAngles(RR.afterIndex, GR.position, JR, this.afterAngles),
          eR = (0, tR.y)(iR.heading, fR.heading),
          aR = pR(RR, wR ? (0, tR.y)(iR.heading, this.beforeAngles.heading) : 0, iR.heading, eR, rR ? (0, tR.y)(eR, this.afterAngles.heading) : 0, wR, rR);
        GR.heading = (0, tR.v)(aR), GR.pitch = (0, tR.h)(pR(RR, this.beforeAngles.pitch, iR.pitch, fR.pitch, this.afterAngles.pitch, wR, rR))
      }
      nodeAngles(RR, JR, GR, yR) {
        const tR = this.rawNodeAngles(RR, JR, GR, yR);
        return "none" !== tR && gR(yR) && !this.borrowHeading(this.prevNodes[RR], JR, GR, yR) && this.borrowHeading(this.nextNodes[RR], JR, GR, yR), tR
      }
      borrowHeading(RR, JR, GR, yR) {
        const tR = this.borrowedAngles;
        return !(RR < 0 || "none" === this.rawNodeAngles(RR, JR, GR, tR) || gR(tR)) && (yR.heading = tR.heading, !0)
      }
      rawNodeAngles(RR, JR, GR, yR) {
        const uR = this.nodes[RR].keyframe;
        if (uR.lookDirection) return (0, tR.o)(uR.lookDirection, yR), "aim";
        if (void 0 !== uR.lookAt) {
          const RR = GR(uR.lookAt);
          if (RR) return (0, tR.t)(JR, RR, yR), "aim"
        }
        const ZR = this.tangents[RR];
        return ZR ? ((0, tR.l)(ZR, yR), "tangent") : "none"
      }
      liveTangent(RR, JR) {
        const GR = this.nodes[RR.index].position,
          yR = this.nodes[RR.toIndex].position,
          uR = this.derivative;
        for (let tR = 0; tR < 3; tR++) uR[tR] = AR(GR[tR], RR.fromTangent[tR], yR[tR], RR.toTangent[tR], RR.u);
        return UR(uR) > 1e-9 ? ((0, tR.o)(uR, JR), !0) : !(CR(GR, yR) < nR) && ((0, tR.o)(MR(GR, yR, RR.u < .5 ? RR.toTangent : RR.fromTangent, uR), JR), !0)
      }
      nodeTangent(RR, JR, GR) {
        var yR;
        const uR = RR[GR];
        if (UR(uR) > 1e-9) return (0, tR.o)(uR, {
          heading: 0,
          pitch: 0
        });
        const ZR = null !== (yR = this.restDirectionTo(GR, GR + 1, RR, JR)) && void 0 !== yR ? yR : this.restDirectionTo(GR, GR - 1, RR, JR);
        return ZR ? (0, tR.o)(ZR, {
          heading: 0,
          pitch: 0
        }) : null
      }
      restDirectionTo(RR, JR, GR, yR) {
        const tR = this.nodes[RR],
          uR = this.nodes[JR];
        if (!uR || CR(tR.position, uR.position) < nR) return null;
        const [ZR, qR] = JR > RR ? [tR, uR] : [uR, tR], iR = XR(GR[JR], ZR.position, qR.position, qR.timeMs - ZR.timeMs, yR, [0, 0, 0]);
        return MR(ZR.position, qR.position, iR, [0, 0, 0])
      }
    }

    function vR(RR, JR) {
      const GR = RR.lookDirection || JR.lookDirection ? function(RR, JR) {
        if (!RR || !JR) return RR === JR;
        const GR = UR(RR),
          yR = UR(JR);
        return Math.hypot(RR[0] / GR - JR[0] / yR, RR[1] / GR - JR[1] / yR, RR[2] / GR - JR[2] / yR) < nR
      }(RR.lookDirection, JR.lookDirection) : (yR = RR.lookAt, tR = JR.lookAt, "object" !== typeof yR || "object" !== typeof tR ? yR === tR : CR(yR, tR) < nR);
      var yR, tR;
      return CR(RR.position, JR.position) < nR && RR.fov === JR.fov && GR
    }
    class OR {
      constructor(RR, JR, GR) {
        if (this.smooth = JR, this.nodes = void 0, this.velocities = void 0, this.prevNodes = void 0, this.nextNodes = void 0, this.prevGaps = void 0, this.nextGaps = void 0, this.loopMs = void 0, this.aim = void 0, this.segment = {
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
          }, 0 === RR.length) throw new Error("A camera path needs at least one keyframe");
        for (let uR = 1; uR < RR.length; uR++)
          if (!(RR[uR].timeMs > RR[uR - 1].timeMs)) throw new Error("Camera path keyframe times must strictly increase");
        this.nodes = RR.map((RR => {
          var JR;
          return {
            timeMs: RR.timeMs,
            position: [...RR.position],
            keyframe: RR,
            easing: (0, uR.m)(null !== (JR = RR.easing) && void 0 !== JR ? JR : "linear")
          }
        }));
        const yR = this.nodes[0],
          tR = this.nodes[this.nodes.length - 1],
          ZR = GR && this.nodes.length > 1;
        ZR && !vR(yR.keyframe, tR.keyframe) && this.nodes.push({
          ...yR,
          timeMs: tR.timeMs + (tR.timeMs - yR.timeMs) / (this.nodes.length - 1)
        }), this.loopMs = ZR ? this.nodes[this.nodes.length - 1].timeMs - yR.timeMs : 0, this.prevNodes = this.nodes.map(((RR, JR) => this.neighbour(JR, -1))), this.nextNodes = this.nodes.map(((RR, JR) => this.neighbour(JR, 1))), this.prevGaps = this.prevNodes.map(((RR, JR) => RR >= 0 ? this.gapMs(JR, -1) : 0)), this.nextGaps = this.nextNodes.map(((RR, JR) => RR >= 0 ? this.gapMs(JR, 1) : 0)), this.velocities = this.nodes.map(((RR, JR) => {
          const GR = this.prevNodes[JR],
            yR = this.nextNodes[JR];
          return function(RR, JR, GR, yR, tR, uR) {
            if (uR[0] = 0, uR[1] = 0, uR[2] = 0, !RR && !GR) return uR;
            const ZR = null !== RR && void 0 !== RR ? RR : BR(null !== GR && void 0 !== GR ? GR : JR, JR),
              qR = null !== GR && void 0 !== GR ? GR : BR(null !== RR && void 0 !== RR ? RR : JR, JR),
              iR = RR ? yR : tR,
              fR = GR ? tR : yR,
              VR = CR(ZR, JR),
              KR = CR(JR, qR);
            if (VR < nR || KR < nR) return uR;
            const wR = Math.sqrt(VR),
              rR = Math.sqrt(KR),
              eR = (wR + rR) / (iR + fR);
            for (let aR = 0; aR < 3; aR++) {
              const RR = (JR[aR] - ZR[aR]) / wR - (qR[aR] - ZR[aR]) / (wR + rR) + (qR[aR] - JR[aR]) / rR;
              uR[aR] = RR * eR
            }
            return uR
          }(GR >= 0 ? this.nodes[GR].position : null, RR.position, yR >= 0 ? this.nodes[yR].position : null, this.prevGaps[JR], this.nextGaps[JR], [0, 0, 0])
        })), this.aim = new bR(this.nodes, this.velocities, this.prevNodes, this.nextNodes, JR)
      }
      sample(RR, JR, GR, yR) {
        const tR = this.findSegment(this.pathTime(RR));
        this.samplePosition(tR, yR.position), this.aim.sample(tR, JR, yR);
        const {
          beforeIndex: uR,
          afterIndex: ZR
        } = tR;
        yR.fov = pR(tR, uR >= 0 ? this.fovAt(uR, GR) : 0, this.fovAt(tR.index, GR), this.fovAt(tR.toIndex, GR), ZR >= 0 ? this.fovAt(ZR, GR) : 0, uR >= 0, ZR >= 0)
      }
      pathTime(RR) {
        const JR = this.nodes[0].timeMs;
        if (this.loopMs <= 0 || RR <= JR) return RR;
        const GR = RR - JR;
        return JR + GR - this.loopMs * Math.floor(GR / this.loopMs)
      }
      findSegment(RR) {
        const JR = this.nodes,
          GR = this.segment;
        let yR = GR.index;
        for (RR < JR[yR].timeMs && (yR = 0); yR < JR.length - 2 && JR[yR + 1].timeMs <= RR;) yR++;
        const tR = Math.min(yR + 1, JR.length - 1),
          ZR = JR[tR].timeMs - JR[yR].timeMs;
        return GR.index = yR, GR.toIndex = tR, GR.segmentMs = ZR, GR.u = ZR > 0 ? (0, uR.l)((RR - JR[yR].timeMs) / ZR, JR[yR].easing) : 1, GR.curved = this.smooth && ZR > 0, GR.beforeIndex = this.prevNodes[yR], GR.afterIndex = this.nextNodes[tR], GR.beforeMs = this.prevGaps[yR], GR.afterMs = this.nextGaps[tR], GR
      }
      samplePosition(RR, JR) {
        const {
          fromTangent: GR,
          toTangent: yR,
          curved: tR
        } = RR, uR = this.nodes[RR.index].position, ZR = this.nodes[RR.toIndex].position;
        XR(this.velocities[RR.index], uR, ZR, RR.segmentMs, tR, GR), XR(this.velocities[RR.toIndex], uR, ZR, RR.segmentMs, tR, yR);
        const qR = RR.u;
        for (let iR = 0; iR < 3; iR++) JR[iR] = tR ? WR(uR[iR], GR[iR], ZR[iR], yR[iR], qR) : uR[iR] + (ZR[iR] - uR[iR]) * qR
      }
      fovAt(RR, JR) {
        var GR;
        return null !== (GR = this.nodes[RR].keyframe.fov) && void 0 !== GR ? GR : JR
      }
      neighbour(RR, JR) {
        const GR = this.nodes.length - 1,
          yR = RR + JR;
        return yR >= 0 && yR <= GR ? yR : this.loopMs <= 0 || GR < 2 ? -1 : yR < 0 ? GR - 1 : 1
      }
      gapMs(RR, JR) {
        const GR = this.nodes.length - 1;
        if (1 === JR) {
          const JR = RR === GR ? 0 : RR;
          return this.nodes[JR + 1].timeMs - this.nodes[JR].timeMs
        }
        const yR = 0 === RR ? GR : RR;
        return this.nodes[yR].timeMs - this.nodes[yR - 1].timeMs
      }
    }

    function xR(RR, JR, GR) {
      return null !== GR && Number.isFinite(GR) ? (RR.set(JR, GR), GR) : RR.get(JR)
    }
    class NR {
      constructor(RR) {
        this.NK = RR, this.lastFeet = new Map, this.lastAimPoints = new Map, this.lastHeadings = new Map, this.lastPitches = new Map, this.lastLookHeadings = new Map, this.readFeet = void 0, this.readAimPoint = void 0, this.readFeet = JR => RR.getEntityPosition(JR), this.readAimPoint = JR => RR.getEntityAimPoint(JR)
      }
      aimPoint(RR) {
        return "string" !== typeof RR ? (0, iR.p)(RR, 3) ? RR : null : this.resolve(RR, this.readAimPoint, this.lastAimPoints)
      }
      currentAimPoint(RR) {
        const JR = "string" === typeof RR ? this.NK.getEntityAimPoint(RR) : RR;
        return JR && (0, iR.p)(JR, 3) ? JR : null
      }
      feetPosition(RR) {
        return this.resolve(RR, this.readFeet, this.lastFeet)
      }
      heading(RR) {
        const JR = xR(this.lastHeadings, RR, this.NK.getEntityHeading(RR));
        return void 0 !== JR ? JR : RR === this.NK.localPlayerId ? 0 : this.heading(this.NK.localPlayerId)
      }
      pitch(RR) {
        var JR;
        return null !== (JR = xR(this.lastPitches, RR, this.NK.getEntityPitch(RR))) && void 0 !== JR ? JR : 0
      }
      lookHeading(RR) {
        var JR;
        return null !== (JR = xR(this.lastLookHeadings, RR, this.NK.getEntityLookHeading(RR))) && void 0 !== JR ? JR : this.heading(RR)
      }
      resolve(RR, JR, GR) {
        const yR = JR(RR);
        let tR = GR.get(RR);
        return yR && (0, iR.p)(yR, 3) ? (tR || (tR = [0, 0, 0], GR.set(RR, tR)), tR[0] = yR[0], tR[1] = yR[1], tR[2] = yR[2], tR) : tR || (RR === this.NK.localPlayerId ? null : this.resolve(this.NK.localPlayerId, JR, GR))
      }
    }

    function DR(RR) {
      return {
        heading: RR.heading,
        pitch: RR.pitch
      }
    }

    function HR(RR, JR) {
      Number.isFinite(RR.heading) && Number.isFinite(RR.pitch) || (0, tR.l)(JR, RR)
    }

    function oR(RR, JR, GR, yR, uR) {
      if (JR) return void(0, tR.o)(JR, uR);
      const ZR = yR.aimPoint(GR);
      ZR && (0, tR.t)(RR, ZR, uR)
    }
    class cR {
      constructor(RR, JR, GR, yR) {
        this.settings = RR, this.NK = JR, this.targets = GR, this.base = void 0, this.base = DR(yR)
      }
      update(RR, JR, GR) {
        var yR;
        const tR = this.settings;
        (0, iR.i)(tR.position, GR.position), oR(tR.position, tR.lookDirection, null !== (yR = tR.lookAt) && void 0 !== yR ? yR : this.NK.localPlayerId, this.targets, this.base), JR.apply(this.base, GR), GR.fov = rR(tR, this.NK)
      }
      continueFrom(RR) {
        RR instanceof cR && (0, tR.l)(RR.base, this.base)
      }
      reset(RR) {
        HR(this.base, RR)
      }
    }
    class PR {
      constructor(RR, JR, GR, yR) {
        this.settings = RR, this.NK = JR, this.targets = GR, this.base = void 0, this.goal = void 0, this.lastFeet = [0, 0, 0], this.foundFeet = !1, this.smoothed = [0, 0, 0], this.BL = [0, 0, 0], this.started = !1, this.distance = -1, this.toCamera = [0, 0, 0], this.aimOrigin = [0, 0, 0], this.eyeHeading = NaN, this.eyePitch = NaN, this.base = DR(yR), this.goal = [...yR.position]
      }
      update(RR, JR, GR) {
        var yR, uR;
        const ZR = this.settings,
          qR = null !== (yR = ZR.target) && void 0 !== yR ? yR : this.NK.localPlayerId,
          fR = this.targets.feetPosition(qR),
          VR = "eye" === ZR.anchor;
        let KR = !1;
        var wR;
        fR && (KR = this.foundFeet && CR(this.lastFeet, fR) > 32 + .1 * RR, (0, iR.i)(fR, this.lastFeet), this.foundFeet = !0, this.placeGoal(null !== (wR = VR ? this.targets.aimPoint(qR) : null) && void 0 !== wR ? wR : fR, qR));
        const aR = null !== (uR = ZR.smoothMs) && void 0 !== uR ? uR : 0;
        !this.started || aR < 1 || KR ? ((0, iR.i)(this.goal, this.smoothed), this.BL.fill(0), this.started = !0) : eR(this.smoothed, this.BL, this.goal, aR, RR), KR && (this.distance = -1), (0, iR.i)(this.smoothed, GR.position);
        const LR = !0 === ZR.avoidTerrain ? this.pullIn(qR, RR, GR) : 1;
        let nR = this.goal;
        if ("target" === ZR.offsetSpace) nR = GR.position;
        else if (LR < 1) {
          nR = this.aimOrigin;
          for (let RR = 0; RR < 3; RR++) nR[RR] = GR.position[RR] + (this.goal[RR] - this.smoothed[RR]) * LR
        }
        if (VR && !ZR.lookDirection && void 0 === ZR.lookAt) {
          const JR = this.targets.lookHeading(qR),
            GR = this.targets.pitch(qR),
            yR = 1 - Math.exp(-RR / 50),
            uR = (0, tR.v)(this.eyeHeading + (0, tR.x)(this.eyeHeading, JR) * yR),
            ZR = this.eyePitch + (GR - this.eyePitch) * yR,
            iR = qR !== this.NK.localPlayerId && Number.isFinite(uR) && Number.isFinite(ZR) && !KR;
          this.eyeHeading = iR ? uR : (0, tR.v)(JR), this.eyePitch = iR ? ZR : GR, this.base.heading = this.eyeHeading, this.base.pitch = this.eyePitch
        } else {
          var UR;
          this.eyeHeading = NaN, this.eyePitch = NaN, oR(nR, ZR.lookDirection, null !== (UR = ZR.lookAt) && void 0 !== UR ? UR : qR, this.targets, this.base)
        }
        JR.apply(this.base, GR), GR.fov = rR(ZR, this.NK)
      }
      continueFrom(RR) {
        RR instanceof PR && (0, yR.s)(RR.settings.target, this.settings.target) && ((0, tR.l)(RR.base, this.base), (0, iR.i)(RR.goal, this.goal), (0, iR.i)(RR.lastFeet, this.lastFeet), this.foundFeet = RR.foundFeet, (0, iR.i)(RR.smoothed, this.smoothed), (0, iR.i)(RR.BL, this.BL), this.started = RR.started, this.eyeHeading = RR.eyeHeading, this.eyePitch = RR.eyePitch, !0 === RR.settings.avoidTerrain && (this.distance = RR.distance))
      }
      reset(RR) {
        HR(this.base, RR), this.BL.fill(0), this.started = !1, this.distance = -1, this.eyeHeading = NaN, this.eyePitch = NaN
      }
      pullIn(RR, JR, GR) {
        const yR = this.targets.aimPoint(RR);
        if (!yR) return 1;
        const tR = GR.position,
          uR = CR(yR, tR);
        if (!(uR > 0)) return 1;
        const ZR = this.toCamera;
        for (let iR = 0; iR < 3; iR++) ZR[iR] = (tR[iR] - yR[iR]) / uR;
        const qR = function(RR, JR, GR) {
          return RR < 0 || JR < RR ? JR : JR + (RR - JR) * Math.exp(-GR / 150)
        }(this.distance, function(RR, JR, GR, yR) {
          const tR = RR.raycastTerrain(JR, GR, yR);
          return null !== tR && Number.isFinite(tR) ? Math.min(yR, Math.max(0, tR - .2)) : yR
        }(this.NK, yR, ZR, uR), JR);
        if (uR - qR < .001) return this.distance = -1, 1;
        this.distance = qR;
        for (let iR = 0; iR < 3; iR++) tR[iR] = yR[iR] + ZR[iR] * qR;
        return qR / uR
      }
      placeGoal(RR, JR) {
        const GR = this.settings.offset;
        let yR = GR[0],
          tR = GR[2];
        if ("target" === this.settings.offsetSpace) {
          const RR = this.targets.heading(JR),
            uR = Math.cos(RR),
            ZR = Math.sin(RR);
          yR = GR[0] * uR + GR[2] * ZR, tR = -GR[0] * ZR + GR[2] * uR
        }
        this.goal[0] = RR[0] + yR, this.goal[1] = RR[1] + GR[1], this.goal[2] = RR[2] + tR
      }
    }
    class IR {
      constructor(RR, JR, GR, yR) {
        var tR, uR;
        this.settings = RR, this.NK = JR, this.sampler = void 0, this.base = void 0, this.resolveTarget = void 0, this.elapsedMs = 0, this.sampler = RR.keyframes.length > 0 ? new OR(RR.keyframes, null === (tR = RR.smooth) || void 0 === tR || tR, null !== (uR = RR.loop) && void 0 !== uR && uR) : null, this.base = (0, iR.f)(yR, (0, iR.j)()), this.resolveTarget = RR => GR.aimPoint(RR)
      }
      update(RR, JR, GR) {
        this.elapsedMs += RR;
        const yR = rR(this.settings, this.NK);
        this.sampler ? this.sampler.sample(this.elapsedMs, this.resolveTarget, yR, this.base) : this.base.fov = yR, (0, iR.i)(this.base.position, GR.position), GR.fov = this.base.fov, JR.apply(this.base, GR)
      }
      continueFrom(RR) {
        RR instanceof IR && (0, yR.s)(RR.settings.keyframes, this.settings.keyframes) && (this.elapsedMs = RR.elapsedMs, (0, iR.f)(RR.base, this.base))
      }
      reset(RR) {
        HR(this.base, RR), Number.isFinite(this.elapsedMs) || (this.elapsedMs = 0)
      }
    }

    function mR(RR, JR) {
      return (0, yR.t)(RR, JR)
    }
    class zR {
      constructor(RR, JR, GR) {
        var yR;
        this.settings = RR, this.NK = JR, this.pose = void 0, this.lastGoodPose = void 0, this.look = void 0, this.targets = void 0, this.mode = void 0, this.warnedNonFinite = !1;
        const tR = null !== GR && GR.settings.mode === RR.mode,
          uR = tR ? GR.pose : JR.getDefaultPose();
        this.pose = (0, iR.f)(uR, (0, iR.j)()), this.lastGoodPose = (0, iR.f)(tR ? GR.lastGoodPose : uR, (0, iR.j)()), this.look = new LR(RR.playerLook), this.targets = null !== (yR = null === GR || void 0 === GR ? void 0 : GR.targets) && void 0 !== yR ? yR : new NR(JR);
        const ZR = (0, iR.f)(uR, (0, iR.j)());
        tR && GR.look.unapply(ZR, ZR), this.mode = function(RR, JR, GR, yR) {
          switch (RR.mode) {
            case "fixed":
              return new cR(RR, JR, GR, yR);
            case "follow":
              return new PR(RR, JR, GR, yR);
            case "path":
              return new IR(RR, JR, GR, yR);
            case "frame":
              return new aR(RR, JR, GR, yR)
          }
        }(RR, JR, this.targets, ZR), tR && (this.look.continueFrom(GR.look), this.mode.continueFrom(GR.mode))
      }
      update(RR, JR) {
        return this.look.update(RR, JR), this.mode.update(RR, this.look, this.pose), (0, iR.n)(this.pose) ? (0, iR.f)(this.pose, this.lastGoodPose) : (this.warnedNonFinite || (console.warn("Scripted camera produced a non-finite pose; holding the last good one"), this.warnedNonFinite = !0), (0, iR.f)(this.lastGoodPose, this.pose), this.mode.reset((0, iR.n)(this.lastGoodPose) ? this.lastGoodPose : this.NK.getDefaultPose())), this.pose
      }
    }

    function SR(RR) {
      return [0, 0, RR[2], RR[3]]
    }
    class jR {
      constructor(RR) {
        this.NK = RR, this.settings = {
          mode: "default"
        }, this.pending = null, this.fade = new qR, this.shot = null, this.blend = null, this.mixed = (0, iR.j)(), this.output = (0, iR.j)(), this.hasOutput = !1, this.loadingPositions = [], this.loadingSlots = Array.from({
          length: 3
        }, (() => [0, 0, 0]))
      }
      setSettings(RR) {
        const JR = (0, fR.c)(RR);
        if ((0, yR.s)(JR, this.pending ? this.pending.settings : this.settings)) return;
        const GR = mR(this.settings, JR);
        if (void 0 !== JR.transition && !GR) return this.pending = {
          settings: JR,
          shot: "default" === JR.mode ? null : new zR(JR, this.NK, null)
        }, void this.fade.fadeOut(JR.transition);
        const tR = null !== this.pending;
        this.pending = null, !tR && GR || this.fade.fadeIn(yR.k.minTransitionFadeMs), this.show(JR, !1)
      }
      show(RR, JR) {
        var GR, tR;
        if ((0, yR.s)(RR, this.settings)) return;
        const ZR = !JR && mR(this.settings, RR);
        this.settings = RR;
        const qR = null !== this.blend && this.blend.elapsedMs > 0,
          fR = (0, iR.f)(this.hasOutput ? this.output : this.NK.getDefaultPose(), (0, iR.j)());
        if (this.shot = "default" === RR.mode ? null : new zR(RR, this.NK, JR ? null : this.shot), ZR) return;
        const VR = JR || !this.shot && !this.hasOutput ? 0 : null !== (GR = RR.blendInMs) && void 0 !== GR ? GR : 0;
        if (VR <= 0) return void(this.blend = null);
        const KR = (0, uR.m)(null !== (tR = RR.blendEasing) && void 0 !== tR ? tR : "easeInOut");
        this.blend = {
          from: fR,
          fromScripted: this.hasOutput,
          headingDelta: NaN,
          elapsedMs: 0,
          durationMs: VR,
          easing: qR ? SR(KR) : KR
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
      update(RR, JR) {
        const GR = Number.isFinite(RR) && RR > 0 ? RR : 0;
        if (this.fade.advance(GR) && null !== this.pending) {
          const {
            settings: RR
          } = this.pending;
          this.pending = null, this.show(RR, !0)
        }
        this.loadingPositions.length = 0;
        const yR = this.pending;
        if (null !== yR && void 0 !== yR && yR.shot) {
          const RR = "path" === yR.settings.mode ? 0 : GR;
          this.noteLoadingPosition(yR.shot.update(RR, iR.c).position)
        }
        if (!this.isActive()) return this.hasOutput = !1, null;
        const ZR = this.shot ? this.shot.update(GR, JR) : this.NK.getDefaultPose();
        this.shot && this.noteLoadingPosition(ZR.position);
        const qR = this.blend;
        if (!qR) return this.writeOutput(ZR);
        qR.elapsedMs += GR;
        const fR = Math.min(1, qR.elapsedMs / qR.durationMs);
        if (qR.headingDelta = Number.isFinite(qR.headingDelta) ? (0, tR.y)(qR.headingDelta, ZR.heading - qR.from.heading) : (0, tR.x)(qR.from.heading, ZR.heading), (0, iR.s)(qR.from, ZR, qR.headingDelta, (0, uR.l)(fR, qR.easing), this.mixed), fR >= 1) {
          if (this.blend = null, !this.shot) return this.hasOutput = !1, null
        } else qR.fromScripted && this.noteLoadingPosition(qR.from.position);
        return this.writeOutput(this.mixed)
      }
      noteLoadingPosition(RR) {
        if (RR.every(Number.isFinite)) {
          const JR = this.loadingPositions;
          JR.push((0, iR.i)(RR, this.loadingSlots[JR.length]))
        }
      }
      writeOutput(RR) {
        const JR = this.output;
        (0, iR.n)(RR) ? (0, iR.f)(RR, JR) : this.hasOutput || (0, iR.f)(this.NK.getDefaultPose(), JR), JR.pitch = (0, tR.h)(JR.pitch);
        const GR = this.NK.getDefaultFov(),
          uR = Number.isFinite(GR) && GR > 0 && GR < 180,
          ZR = uR ? Math.min(yR.k.minFov, GR) : yR.k.minFov,
          qR = uR ? Math.max(yR.k.maxFov, GR) : yR.k.maxFov;
        return JR.fov = Number.isFinite(JR.fov) ? Math.min(qR, Math.max(ZR, JR.fov)) : qR, this.hasOutput = !0, JR
      }
    }
  },
  40462: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => tR,
      f: () => qR,
      i: () => ZR,
      j: () => uR,
      n: () => fR,
      p: () => iR,
      s: () => VR
    });
    var yR = GR(37845);
    const tR = {
      bD: 0,
      PD: 0
    };

    function uR() {
      return {
        position: [0, 0, 0],
        heading: 0,
        pitch: 0,
        fov: 0
      }
    }

    function ZR(RR, JR) {
      return JR[0] = RR[0], JR[1] = RR[1], JR[2] = RR[2], JR
    }

    function qR(RR, JR) {
      return ZR(RR.position, JR.position), JR.heading = RR.heading, JR.pitch = RR.pitch, JR.fov = RR.fov, JR
    }

    function iR(RR, JR) {
      return Array.isArray(RR) && RR.length === JR && RR.every(Number.isFinite)
    }

    function fR(RR) {
      return iR(RR.position, 3) && Number.isFinite(RR.heading) && Number.isFinite(RR.pitch) && Number.isFinite(RR.fov)
    }

    function VR(RR, JR, GR, tR, uR) {
      for (let yR = 0; yR < 3; yR++) uR.position[yR] = RR.position[yR] + (JR.position[yR] - RR.position[yR]) * tR;
      return uR.heading = (0, yR.v)(RR.heading + GR * tR), uR.pitch = RR.pitch + (JR.pitch - RR.pitch) * tR, uR.fov = RR.fov + (JR.fov - RR.fov) * tR, uR
    }
  },
  40476: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => BR,
      f: () => rR
    });
    var yR = GR(40470),
      tR = GR(40462);
    const uR = yR.f,
      ZR = yR.o,
      qR = yR.i;

    function iR(RR, JR, GR, yR) {
      return Number.isFinite(RR) ? Math.min(GR, Math.max(JR, RR)) : yR
    }

    function fR(RR, JR, GR) {
      return void 0 !== RR && Number.isFinite(RR) ? Math.min(GR, Math.max(JR, RR)) : void 0
    }

    function VR(RR) {
      const JR = yR.k.maxCoordinate;
      return [Math.min(JR, Math.max(-JR, RR[0])), Math.min(JR, Math.max(-JR, RR[1])), Math.min(JR, Math.max(-JR, RR[2]))]
    }

    function KR(RR) {
      return "string" === typeof RR ? RR : (0, tR.p)(RR, 3) ? VR(RR) : void 0
    }
    const wR = new RegExp(yR.r);

    function rR(RR) {
      return "string" === typeof RR && wR.test(RR)
    }

    function eR(RR) {
      const JR = [];
      if (!Array.isArray(RR)) return JR;
      for (const GR of RR.slice(0, yR.k.maxFrameTargets)) {
        const RR = KR(GR);
        void 0 === RR || "string" === typeof RR && !rR(RR) || JR.push(RR)
      }
      return JR
    }

    function aR(RR) {
      if (!(0, tR.p)(RR, 3)) return;
      const JR = Math.max(Math.abs(RR[0]), Math.abs(RR[1]), Math.abs(RR[2])),
        GR = Math.hypot(RR[0] / JR, RR[1] / JR, RR[2] / JR);
      return 0 === JR || JR * GR < yR.k.minDirectionLength ? void 0 : [RR[0] / JR / GR, RR[1] / JR / GR, RR[2] / JR / GR]
    }

    function LR(RR) {
      if (void 0 !== RR) return "string" === typeof RR ? uR.includes(RR) ? RR : void 0 : (0, tR.p)(RR, 4) ? [iR(RR[0], 0, 1, 0), iR(RR[1], yR.k.minEasingY, yR.k.maxEasingY, 0), iR(RR[2], 0, 1, 1), iR(RR[3], yR.k.minEasingY, yR.k.maxEasingY, 1)] : "linear"
    }

    function nR(RR) {
      if (RR) return {
        maxYaw: iR(RR.maxYaw, 0, yR.k.maxPlayerLook, 0),
        maxPitch: iR(RR.maxPitch, 0, yR.k.maxPlayerLook, 0),
        returnMs: fR(RR.returnMs, 0, yR.k.maxReturnMs)
      }
    }
    const UR = new RegExp(yR.b);

    function WR(RR) {
      var JR;
      if ("object" !== typeof RR || null === RR) return;
      const GR = yR.k.maxTransitionMs,
        tR = yR.k.minTransitionFadeMs;
      return {
        colour: "string" === typeof RR.colour && UR.test(RR.colour) ? RR.colour : yR.d,
        outMs: iR(RR.outMs, tR, GR, tR),
        holdMs: iR(null !== (JR = RR.holdMs) && void 0 !== JR ? JR : 0, 0, GR, 0),
        inMs: iR(RR.inMs, tR, GR, tR)
      }
    }

    function AR(RR) {
      return !0 === RR || void 0
    }

    function CR(RR) {
      if ("object" !== typeof RR || null === RR) return !1;
      const JR = RR.lookAt;
      return Number.isFinite(RR.timeMs) && (0, tR.p)(RR.position, 3) && (void 0 === JR || "string" === typeof JR || (0, tR.p)(JR, 3))
    }

    function XR(RR) {
      return {
        ...RR,
        timeMs: iR(RR.timeMs, 0, yR.k.maxPathMs, 0),
        position: VR(RR.position),
        lookAt: KR(RR.lookAt),
        lookDirection: aR(RR.lookDirection),
        fov: fR(RR.fov, yR.k.minFov, yR.k.maxFov),
        easing: LR(RR.easing)
      }
    }

    function MR(RR) {
      const JR = [];
      if (!Array.isArray(RR)) return JR;
      for (const GR of RR.slice(0, yR.k.maxKeyframes)) {
        if (!CR(GR)) continue;
        const RR = XR(GR);
        (0 === JR.length || RR.timeMs > JR[JR.length - 1].timeMs) && JR.push(RR)
      }
      return JR
    }

    function BR(RR) {
      if ("object" !== typeof RR || null === RR) return {
        mode: "default"
      };
      const JR = {
          blendInMs: fR(RR.blendInMs, 0, yR.k.maxBlendInMs),
          blendEasing: LR(RR.blendEasing),
          transition: WR(RR.transition),
          letterbox: AR(RR.letterbox),
          hideHud: AR(RR.hideHud)
        },
        GR = {
          mode: "default",
          ...JR
        };
      if ("default" === RR.mode || "fixed" === RR.mode && !(0, tR.p)(RR.position, 3)) return GR;
      const uR = {
        ...JR,
        fov: fR(RR.fov, yR.k.minFov, yR.k.maxFov),
        playerFacing: (wR = RR.playerFacing, ZR.includes(wR) ? wR : void 0),
        playerLook: nR(RR.playerLook)
      };
      var wR, rR, UR;
      switch (RR.mode) {
        case "fixed":
          return {
            ...RR, ...uR, position: VR(RR.position), lookAt: KR(RR.lookAt), lookDirection: aR(RR.lookDirection)
          };
        case "follow":
          return {
            ...RR, ...uR, target: "string" === typeof RR.target ? RR.target : void 0, anchor: (UR = RR.anchor, qR.includes(UR) ? UR : void 0), lookAt: KR(RR.lookAt), offset: (rR = RR.offset, Array.isArray(rR) ? [iR(rR[0], -yR.k.maxOffset, yR.k.maxOffset, 0), iR(rR[1], -yR.k.maxOffset, yR.k.maxOffset, 0), iR(rR[2], -yR.k.maxOffset, yR.k.maxOffset, 0)] : [0, 0, 0]), lookDirection: aR(RR.lookDirection), smoothMs: fR(RR.smoothMs, 0, yR.k.maxSmoothMs)
          };
        case "path":
          return {
            ...RR, ...uR, keyframes: MR(RR.keyframes)
          };
        case "frame":
          return {
            ...RR, ...uR, targets: eR(RR.targets), viewHeading: fR(RR.viewHeading, -yR.k.maxFrameHeading, yR.k.maxFrameHeading), viewElevation: fR(RR.viewElevation, 0, yR.k.maxFrameElevation), padding: fR(RR.padding, 0, yR.k.maxFrameDistance), closestDistance: fR(RR.closestDistance, 0, yR.k.maxFrameDistance), furthestDistance: fR(RR.furthestDistance, 0, yR.k.maxFrameDistance), smoothMs: fR(RR.smoothMs, 0, yR.k.maxSmoothMs)
          };
        default:
          return GR
      }
    }
  },
  40506: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => yR
    });
    const yR = {
      message: [{
        translationKey: "general:bunnyHoppingDisabled"
      }],
      timeoutLength: 2e3,
      type: "Error"
    }
  },
  40388: (RR, JR, GR) => {
    function yR(RR, JR) {
      return JR.set(RR), JR
    }
    GR.d(JR, {
      e: () => yR
    })
  },
  40382: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => ZR
    });
    var yR = GR(3514),
      tR = GR.n(yR);
    const uR = [1, 1, 1];

    function ZR(RR) {
      if (!RR) return [...uR];
      try {
        const [JR, GR, yR] = tR()(RR).rgb().array();
        return [JR / 255, GR / 255, yR / 255]
      } catch (JR) {
        return console.warn(`Invalid groundArrowPath colour "${RR}":`, JR), [...uR]
      }
    }
  },
  40498: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => qR,
      g: () => fR,
      i: () => iR
    });
    var yR = GR(310),
      tR = GR(4044);
    const uR = /\/textures\/skyBoxes\/(space_blue|space_lightblue|space_red_2|space_white)\/(_[np][xyz]\.jpg)$/,
      ZR = 512;

    function qR(RR) {
      var JR;
      const GR = Math.min(screen.width, screen.height) * (null !== (JR = (0, yR.d)()) && void 0 !== JR ? JR : (0, tR.l)());
      return Math.max(window.innerHeight * (0, tR.l)(), GR) / (0, tR.m)(RR)
    }

    function iR(RR, JR, GR) {
      return JR / (2 * Math.tan(GR / 2)) > ZR ? RR : fR(RR)
    }

    function fR(RR) {
      return RR.map((RR => RR.replace(uR, "/textures/skyBoxes/$1/1024/$2")))
    }
  },
  40377: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => tR
    });
    var yR = GR(203);

    function tR(RR, JR, GR, tR, uR, ZR, qR, iR, fR, VR, KR) {
      const wR = yR.g.LK,
        rR = uR - GR;
      let eR = rR * (ZR - tR);
      VR.fill(0, 0, eR);
      for (let yR = Math.floor((iR - 1) / wR);
        (yR + 1) * wR > qR; yR--) {
        const aR = yR * wR;
        for (let LR = Math.floor(GR / wR); LR * wR < uR; LR++) {
          const nR = LR * wR,
            UR = Math.max(GR - nR, 0),
            WR = Math.min(uR - nR, wR);
          for (let uR = Math.floor(tR / wR); uR * wR < ZR; uR++) {
            const AR = RR(LR, yR, uR);
            if (!AR) continue;
            const CR = uR * wR,
              XR = Math.max(tR - CR, 0),
              MR = Math.min(ZR - CR, wR),
              BR = AR.hr,
              lR = AR.Rr,
              pR = lR.data;
            for (let RR = Math.min(iR - 1 - aR, wR - 1); RR >= Math.max(qR - aR, 0); RR--) {
              const yR = BR[RR],
                uR = yR === JR;
              if (uR || 0 !== fR[yR]) {
                for (let JR = UR; JR < WR; JR++)
                  for (let ZR = XR; ZR < MR; ZR++) {
                    const qR = (CR + ZR - tR) * rR + nR + JR - GR;
                    if (0 !== VR[qR]) continue;
                    const iR = uR ? pR[lR.index(JR, RR, ZR)] : yR;
                    0 !== fR[iR] && (VR[qR] = iR, KR[qR] = aR + RR, eR--)
                  }
                if (0 === eR) return
              }
            }
          }
        }
      }
    }
  },
  34957: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => uR,
      f: () => qR,
      h: () => ZR,
      k: () => tR,
      o: () => yR
    });
    const yR = {
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
      tR = "/textures/dayNight/sun.png",
      uR = "/textures/dayNight/moon.png",
      ZR = "/textures/dayNight/stars",
      qR = ["_px.png", "_py.png", "_pz.png", "_nx.png", "_ny.png", "_nz.png"]
  },
  40470: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => KR,
      d: () => wR,
      f: () => yR,
      i: () => tR,
      k: () => fR,
      o: () => uR,
      r: () => VR,
      s: () => iR,
      t: () => qR
    });
    const yR = ["linear", "easeIn", "easeOut", "easeInOut"],
      tR = ["feet", "eye"],
      uR = ["movement", "camera", "cursor"],
      ZR = ["targets", "playerFacing", "blendInMs", "blendEasing", "transition", "letterbox", "hideHud"];

    function qR(RR, JR) {
      return iR(RR, JR, ZR)
    }

    function iR(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      if (RR === JR || Number.isNaN(RR) && Number.isNaN(JR)) return !0;
      if ("object" !== typeof RR || "object" !== typeof JR || null === RR || null === JR || Array.isArray(RR) !== Array.isArray(JR)) return !1;
      const yR = RR,
        tR = JR;
      for (const uR of new Set([...Object.keys(yR), ...Object.keys(tR)]))
        if (!GR.includes(uR) && !iR(yR[uR], tR[uR])) return !1;
      return !0
    }
    const fR = {
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
      VR = "^-[1-9][0-9]*$",
      KR = "^#[0-9a-fA-F]{6}$",
      wR = "#000000"
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);