export const id = 208;
export const ids = [208];
export const modules = {
  40084: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => AH
    });
    class AH {
      constructor(HH, BH) {
        this.read = HH, this.apply = BH, this.release = null
      }
      turn(HH, BH) {
        const LH = null === this.release ? this.read() : this.release.transitionMs;
        this.stop(!1), this.apply({
          forcedCameraDirectionTransitionMs: BH,
          forcedCameraDirection: [HH[0], HH[1], HH[2]]
        }), this.release = {
          timer: setTimeout((() => {
            this.stop(!0)
          }), BH + 100),
          transitionMs: LH
        }
      }
      dispose() {
        this.stop(!0)
      }
      stop(HH) {
        null !== this.release && (clearTimeout(this.release.timer), HH && this.apply({
          forcedCameraDirection: null,
          forcedCameraDirectionTransitionMs: this.release.transitionMs
        }), this.release = null)
      }
    }
  },
  39568: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => SH,
      c: () => rH
    });
    const AH = new Map;

    function rH(HH, BH) {
      AH.set(HH, BH)
    }

    function SH(HH) {
      return HH ? AH.get(HH) : void 0
    }
  },
  37250: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => EH,
      c: () => tH,
      d: () => CH,
      e: () => zH,
      f: () => vH
    });
    var AH = LH(625),
      rH = LH(1807),
      SH = LH(5268);
    class hH {
      constructor(HH, BH) {
        this.width = HH, this.aX = BH, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(HH * BH)
      }
      push(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const LH = this.data,
          AH = this.next * this.width;
        for (let rH = 0; rH < this.width; rH++) LH[AH + rH] = HH[BH + rH];
        this.next = (this.next + 1) % this.aX, this.size = Math.min(this.size + 1, this.aX)
      }
      rows() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1 / 0;
        const LH = [],
          AH = (this.next - this.size + this.aX) % this.aX;
        for (let rH = 0; rH < this.size; rH++) {
          const SH = (AH + rH) % this.aX * this.width;
          this.data[SH + HH] >= BH && LH.push(Array.from(this.data.subarray(SH, SH + this.width)))
        }
        return LH
      }
      lines() {
        return this.rows().map((HH => HH.join(",")))
      }
    }
    const tH = 10,
      zH = {
        idle: 0,
        hX: 1,
        qN: 2,
        ZN: 3,
        XW: 4
      },
      CH = {
        none: 0,
        skipped: 1,
        paced: 2,
        drawn: 3
      },
      EH = {
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
      XH = 12e3,
      GH = ["nowMs", "dtMs", "rawX", "rawY", "turnedX", "turnedY", "outcome", "velocityX", "velocityY", "limit"],
      YH = ["timeStamp", "nowMs", "movementX", "movementY", "locked"],
      uH = ["nowMs", "dtMs", "heading", "pitch", "kind"],
      QH = ["nowMs", "source", "headingBefore", "pitchBefore", "headingAfter", "pitchAfter"],
      WH = ["nowMs", "change", "count"];

    function MH(HH) {
      return "js" === HH ? EH.jsClient : EH.wasmClient
    }
    class xH {
      constructor() {
        this.steps = new hH(tH, XH), this.events = new hH(YH.length, XH), this.frames = new hH(uH.length, XH), this.cameraSets = new hH(SH.d, 256), this.changes = new hH(WH.length, 256)
      }
    }
    const vH = new class {
      constructor() {
        this.rings = null, this.sample = new Float64Array(YH.length), this.startedClient = null, this.startedAtMs = 0
      }
      get client() {
        return this.startedClient
      }
      start(HH, BH) {
        this.startedClient = HH, this.startedAtMs = performance.now(), null !== this.rings ? this.change(MH(HH)) : BH && this.allocate()
      }
      lockGained() {
        this.allocate(), this.change(EH.lockGained)
      }
      allocate() {
        null === this.rings && (this.rings = new xH, null !== this.startedClient && this.changeAt(this.startedAtMs, MH(this.startedClient), 1))
      }
      step(HH, BH) {
        var LH;
        HH[BH + 6] !== zH.XW && (null === (LH = this.rings) || void 0 === LH || LH.steps.push(HH, BH))
      }
      cameraSet(HH, BH) {
        var LH;
        null === (LH = this.rings) || void 0 === LH || LH.cameraSets.push(HH, BH)
      }
      mouseMove(HH, BH) {
        const LH = this.rings;
        if (null === LH) return;
        const AH = this.sample;
        AH[0] = HH.timeStamp, AH[1] = performance.now(), AH[2] = HH.movementX, AH[3] = HH.movementY, AH[4] = BH ? 1 : 0, LH.events.push(AH)
      }
      frame(HH, BH, LH, AH) {
        const rH = this.rings;
        if (null === rH || AH === CH.none) return;
        const SH = this.sample;
        SH[0] = performance.now(), SH[1] = HH, SH[2] = BH, SH[3] = LH, SH[4] = AH, rH.frames.push(SH)
      }
      change(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.changeAt(performance.now(), HH, BH)
      }
      changeAt(HH, BH, LH) {
        const AH = this.rings;
        if (null === AH) return;
        const rH = this.sample;
        rH[0] = HH, rH[1] = BH, rH[2] = LH, AH.changes.push(rH)
      }
      dumpText() {
        var HH, BH;
        const LH = this.rings;
        return [`look records (${this.startedClient}): ${GH.join(",")}`, ...null !== (HH = null === LH || void 0 === LH ? void 0 : LH.steps.lines()) && void 0 !== HH ? HH : [], `mousemove events: ${YH.join(",")}`, ...null !== (BH = null === LH || void 0 === LH ? void 0 : LH.events.lines()) && void 0 !== BH ? BH : []].join("\n")
      }
      toJson(HH, BH) {
        var LH;
        const rH = HH - 6e4,
          SH = this.rings,
          hH = function(HH, BH) {
            var LH;
            let AH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            const SH = null !== (LH = null === HH || void 0 === HH ? void 0 : HH.rows(AH, rH)) && void 0 !== LH ? LH : [];
            return {
              columns: BH,
              fromMs: 0 === SH.length ? null : SH[0][AH],
              rows: SH
            }
          };
        return {
          version: AH.d,
          client: null !== (LH = this.startedClient) && void 0 !== LH ? LH : "not started",
          savedAt: (new Date).toISOString(),
          savedAtMs: HH,
          keptMs: 6e4,
          page: window.location.href,
          userAgent: navigator.userAgent,
          devicePixelRatio: window.devicePixelRatio,
          screen: {
            width: window.screen.width,
            height: window.screen.height
          },
          ZW: null !== document.pointerLockElement,
          visibility: document.visibilityState,
          ...BH,
          outcomes: zH,
          frameKinds: CH,
          changes: EH,
          lookSteps: hH(null === SH || void 0 === SH ? void 0 : SH.steps, GH),
          mouseMoves: hH(null === SH || void 0 === SH ? void 0 : SH.events, YH, 1),
          frames: hH(null === SH || void 0 === SH ? void 0 : SH.frames, uH),
          cameraSets: hH(null === SH || void 0 === SH ? void 0 : SH.cameraSets, QH),
          pageChanges: hH(null === SH || void 0 === SH ? void 0 : SH.changes, WH)
        }
      }
      save(HH) {
        const BH = JSON.stringify(this.toJson(performance.now(), HH));
        (0, rH.e)(new Blob([BH], {
          type: "application/json"
        }), `bloxd-mouse-look-${(new Date).toISOString().replace(/[:.]/g,"-")}.json`)
      }
    }
  },
  40657: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => rH
    });
    var AH = LH(39105);

    function rH(HH, BH, LH) {
      var rH, SH, hH, tH, zH, CH, EH;
      const XH = (0, AH.b)(HH, BH, LH[0], LH[1], LH[2]),
        GH = XH ? null !== (rH = XH.textCell) && void 0 !== rH ? rH : XH.rect.anchor : LH,
        YH = BH(GH[0], GH[1], GH[2]);
      return {
        pos: [LH[0], LH[1], LH[2]],
        noticeboardSpan: XH && {
          width: XH.rect.width,
          height: XH.rect.height
        },
        text: null !== (SH = null === YH || void 0 === YH || null === (hH = YH.persisted) || void 0 === hH || null === (tH = hH.shared) || void 0 === tH ? void 0 : tH.text) && void 0 !== SH ? SH : "",
        textSize: null !== (zH = null === YH || void 0 === YH || null === (CH = YH.persisted) || void 0 === CH || null === (EH = CH.shared) || void 0 === EH ? void 0 : EH.textSize) && void 0 !== zH ? zH : null
      }
    }
  },
  39385: (HH, BH, LH) => {
    function AH(HH) {
      switch (HH.kind) {
        case void 0:
        case "flatEmissive":
          return !1;
        case "chevronPath":
        case "furnaceFire":
          return !0
      }
    }
    LH.d(BH, {
      d: () => rH,
      g: () => SH,
      k: () => AH
    });
    const rH = 4,
      SH = 3
  },
  40124: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => rH,
      e: () => SH
    });
    var AH = LH(317);
    const rH = new Set(["bedwars", "bridgeBattle", "buildAFactory2", "classic", "clutch", "containmentBreach", "cooking", "defusal", "frontline", "goalRush", "greenville", "hideseek", "luckyBedwars", "murderMystery", "ninetyNineNights", "oneBlock", "plots", "pvpCiv", "secretSanta", "skyIslands", "skyblock", "tsunami"]);
    class SH {
      constructor(HH) {
        this.importGame = HH, this.loads = new Map, this.loaded = new Map
      }
      load(HH) {
        const BH = (0, AH.Wb)(HH);
        if (!rH.has(BH)) return Promise.resolve(void 0);
        let LH = this.loads.get(BH);
        return LH || (LH = this.importGame(BH).then((HH => {
          const LH = HH.default;
          if ("function" !== typeof LH) throw new Error(`${BH}'s client code has no default-exported factory`);
          return this.loaded.set(BH, LH), LH
        })).catch((HH => {
          throw this.loads.delete(BH), HH
        })), this.loads.set(BH, LH)), LH
      }
      loadedFactory(HH) {
        const BH = (0, AH.Wb)(HH);
        if (!rH.has(BH)) return;
        const LH = this.loaded.get(BH);
        if (!LH) throw new Error(`${BH}'s client code started before it loaded`);
        return LH
      }
    }
  },
  40120: (HH, BH, LH) => {
    function AH(HH, BH) {
      return Object.values({
        ...HH,
        ...BH
      }).filter((HH => null !== HH))
    }
    LH.d(BH, {
      e: () => AH
    })
  },
  40661: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => hH
    });
    var AH = LH(10030),
      rH = LH(35006),
      SH = LH(3639);

    function hH(HH) {
      if (HH === AH.e) return 0;
      const BH = (0, SH.e)(HH);
      if (void 0 !== BH && BH <= rH.MAX_BLOCK_ID) return BH;
      const LH = (0, SH.e)(HH.split("|")[0]);
      if (void 0 !== LH && LH <= rH.MAX_BLOCK_ID && (0, rH.rootMetaDescOf)(LH) === HH) return LH;
      throw new Error(`Invalid block name. You sent ${HH}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`)
    }
  },
  40176: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => rH
    });
    var AH = LH(15);
    class rH {
      constructor(HH) {
        this.screen = HH, this.hidesHud = !1
      }
      show(HH, BH) {
        this.screen.setFade(HH.colour, HH.alpha), this.screen.setLetterbox(!0 === BH.letterbox, HH.alpha < 1), this.setHudHidden(!0 === BH.hideHud)
      }
      clear() {
        this.screen.clear(), this.setHudHidden(!1)
      }
      setHudHidden(HH) {
        this.hidesHud !== HH && (this.hidesHud = HH, AH.c.set({
          isUiHiddenByCamera: HH
        }))
      }
    }
  },
  40140: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => AH,
      f: () => GH,
      i: () => XH,
      k: () => hH,
      l: () => uH,
      n: () => zH,
      o: () => QH,
      p: () => CH,
      r: () => tH,
      s: () => EH
    });
    const AH = Math.PI / 2 - .001,
      rH = 2 * Math.PI,
      SH = 1e-9;

    function hH(HH, BH) {
      BH.heading = HH.heading, BH.pitch = HH.pitch
    }

    function tH(HH, BH) {
      const LH = BH - HH;
      return LH - rH * Math.floor((LH + Math.PI) / rH)
    }

    function zH(HH, BH, LH) {
      return HH + tH(HH, BH) * LH
    }

    function CH(HH) {
      if (!Number.isFinite(HH)) return HH;
      const BH = HH - rH * Math.floor(HH / rH);
      return BH < rH ? BH : 0
    }

    function EH(HH, BH) {
      return HH + tH(HH, BH)
    }

    function XH(HH) {
      return Math.max(-AH, Math.min(AH, HH))
    }

    function GH(HH, BH, LH) {
      const AH = Math.cos(BH);
      return LH[0] = AH * Math.sin(HH), LH[1] = -Math.sin(BH), LH[2] = AH * Math.cos(HH), LH
    }

    function YH(HH, BH, LH, AH) {
      const rH = Math.sqrt(HH * HH + LH * LH);
      return rH < SH && Math.abs(BH) < SH || (rH >= SH && (AH.heading = Math.atan2(HH, LH)), AH.pitch = XH(Math.atan2(-BH, rH) + 0)), AH
    }

    function uH(HH, BH) {
      return YH(HH[0], HH[1], HH[2], BH)
    }

    function QH(HH, BH, LH) {
      return YH(BH[0] - HH[0], BH[1] - HH[1], BH[2] - HH[2], LH)
    }
  },
  40174: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => SH,
      f: () => rH
    });
    var AH = LH(40140);

    function rH(HH) {
      var BH;
      const LH = "default" === HH.mode ? "movement" : null !== (BH = HH.playerFacing) && void 0 !== BH ? BH : "movement";
      return "cursor" === LH ? {
        facing: LH,
        mouseTurns: null
      } : {
        facing: LH,
        mouseTurns: "default" !== HH.mode && void 0 !== HH.playerLook ? "look" : "view"
      }
    }

    function SH(HH, BH, LH, rH, SH, hH) {
      return hH.lq = 0, hH.Fq = 0, hH.pointedAt = void 0, void 0 !== rH ? SH ? (hH.pointedAt = rH, HH) : (0, AH.p)(rH.heading) : SH ? (hH.lq = BH, hH.Fq = LH, HH) : (0, AH.p)(HH + BH)
    }
  },
  40155: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => DH
    });
    var AH = LH(40164),
      rH = LH(40140),
      SH = LH(37860);

    function hH(HH, BH, LH, AH) {
      if (!(AH > 0)) return BH;
      const rH = BH > HH ? Math.min(BH, HH + LH / AH) : Math.max(BH, HH - LH / AH);
      return Math.abs(BH - rH) < 1e-9 ? BH : rH
    }
    class tH {
      constructor() {
        this.phase = null, this.outMs = 0, this.holdMs = 0, this.inMs = 0, this.heldMs = 0, this.sinceTurnMs = 1 / 0, this.clearMs = 1 / 0, this.waiting = null, this.screen = {
          colour: AH.d,
          alpha: 0
        }
      }
      getScreen() {
        return this.screen
      }
      fadeOut(HH) {
        !this.isGoingOut() && this.sinceTurnMs < AH.g.minFadeTurnMs ? this.waiting = {
          turn: "out",
          transition: HH
        } : (this.waiting = null, this.startOut(HH))
      }
      fadeIn(HH) {
        this.isGoingOut() ? this.sinceTurnMs < AH.g.minFadeTurnMs ? this.waiting = {
          turn: "in",
          minMs: HH
        } : (this.waiting = null, this.startIn(HH)) : this.waiting = null
      }
      advance(HH) {
        const BH = this.waiting;
        if (null === BH) return this.step(HH);
        const LH = AH.g.minFadeTurnMs - this.sinceTurnMs;
        if (LH > HH) return this.step(HH);
        const rH = this.step(LH);
        return this.waiting = null, "out" === BH.turn ? this.startOut(BH.transition) : this.startIn(BH.minMs), this.step(HH - LH) || rH
      }
      isGoingOut() {
        return "out" === this.phase || "hold" === this.phase
      }
      startOut(HH) {
        ("in" === this.phase || null === this.phase && this.clearMs < AH.g.minFadeTurnMs) && (this.sinceTurnMs = 0), this.phase = "out", 0 === this.screen.alpha && (this.screen.colour = HH.colour), this.outMs = HH.outMs, this.holdMs = HH.holdMs, this.inMs = HH.inMs
      }
      startIn(HH) {
        this.isGoingOut() && (this.sinceTurnMs = 0), this.phase = "in", this.inMs = Math.max(HH, this.inMs)
      }
      step(HH) {
        const BH = this.screen;
        this.sinceTurnMs += HH, null === this.phase && (this.clearMs += HH);
        let LH = !1,
          rH = HH;
        if ("out" === this.phase) {
          const AH = (1 - BH.alpha) * this.outMs;
          if (BH.alpha = hH(BH.alpha, 1, HH, this.outMs), BH.alpha < 1) return !1;
          this.phase = "hold", this.heldMs = 0, rH = Math.max(0, HH - AH), LH = !0
        }
        let SH = HH;
        if ("hold" === this.phase) {
          this.heldMs += rH;
          const HH = Math.min(this.heldMs - this.holdMs, this.sinceTurnMs - AH.g.minFadeTurnMs);
          if (HH < 0 || LH) return LH;
          this.phase = "in", this.sinceTurnMs = HH, SH = HH
        }
        return "in" === this.phase && (BH.alpha = hH(BH.alpha, 0, SH, this.inMs), BH.alpha <= 0 && (this.phase = null, this.clearMs = 0)), LH
      }
    }
    var zH = LH(40135),
      CH = LH(40169),
      EH = LH(1962),
      XH = LH(37450);

    function GH(HH, BH) {
      for (let LH = 0; LH < BH.length; LH++) BH[LH] = HH[LH]
    }

    function YH(HH, BH) {
      var LH;
      return null !== (LH = HH.fov) && void 0 !== LH ? LH : BH.getDefaultFov()
    }

    function uH(HH, BH, LH, AH, rH) {
      const SH = 2 / AH,
        hH = Math.exp(-SH * rH);
      for (let tH = 0; tH < HH.length; tH++) {
        const AH = HH[tH] - LH[tH],
          zH = (BH[tH] + SH * AH) * rH;
        HH[tH] = LH[tH] + (AH + zH) * hH, BH[tH] = (BH[tH] - SH * zH) * hH
      }
    }
    class QH {
      constructor(HH, BH, LH, AH) {
        var SH, hH, tH, zH, CH;
        this.settings = HH, this.cX = BH, this.targets = LH, this.base = void 0, this.closestDistance = void 0, this.furthestDistance = void 0, this.goal = void 0, this.framedTargets = !1, this.smoothed = [0, 0, 0, 0, 0, 0], this.EW = [0, 0, 0, 0, 0, 0], this.started = !1, this.angles = {
          heading: 0,
          pitch: 0
        }, this.points = [], this.forward = [0, 0, 0], this.base = {
          heading: (0, rH.p)((0, EH.h)(null !== (SH = HH.viewHeading) && void 0 !== SH ? SH : 0)),
          pitch: (0, rH.i)((0, EH.h)(null !== (hH = HH.viewElevation) && void 0 !== hH ? hH : 45))
        }, this.closestDistance = null !== (tH = HH.closestDistance) && void 0 !== tH ? tH : Math.min(6, null !== (zH = HH.furthestDistance) && void 0 !== zH ? zH : 1 / 0), this.furthestDistance = null !== (CH = HH.furthestDistance) && void 0 !== CH ? CH : Math.max(64, this.closestDistance);
        const XH = (0, rH.f)(this.base.heading, this.base.pitch, this.forward),
          GH = AH.position,
          YH = this.closestDistance;
        this.goal = [GH[0] + XH[0] * YH, GH[1] + XH[1] * YH, GH[2] + XH[2] * YH, YH, this.base.heading, this.base.pitch]
      }
      update(HH, BH, LH) {
        var AH, SH;
        this.placeGoal(null !== (AH = this.settings.fov) && void 0 !== AH ? AH : this.cX.getBaseFov()), this.goal[4] = (0, rH.s)(this.smoothed[4], this.base.heading), this.goal[5] = this.base.pitch;
        const hH = null !== (SH = this.settings.smoothMs) && void 0 !== SH ? SH : 400;
        !this.started || hH < 1 ? (GH(this.goal, this.smoothed), this.EW.fill(0), this.started = !0) : uH(this.smoothed, this.EW, this.goal, hH, HH), this.angles.heading = this.smoothed[4], this.angles.pitch = (0, rH.i)(this.smoothed[5]), BH.apply(this.angles, LH);
        const tH = (0, rH.f)(LH.heading, LH.pitch, this.forward);
        for (let rH = 0; rH < 3; rH++) LH.position[rH] = this.smoothed[rH] - tH[rH] * this.smoothed[3];
        LH.fov = YH(this.settings, this.cX)
      }
      continueFrom(HH) {
        HH instanceof QH && (GH(HH.goal, this.goal), GH(HH.smoothed, this.smoothed), GH(HH.EW, this.EW), this.framedTargets = HH.framedTargets, this.started = HH.started)
      }
      reset() {
        this.EW.fill(0), this.started = !1
      }
      placeGoal(HH) {
        var BH;
        let LH = 0;
        for (const EH of this.settings.targets) {
          const HH = this.targets.currentAimPoint(EH);
          HH && (0, zH.e)(HH, this.pointAt(LH++))
        }
        if (LH > 0) this.framedTargets = !0;
        else if (!this.framedTargets) {
          const HH = this.targets.aimPoint(this.cX.localPlayerId);
          HH && (0, zH.e)(HH, this.pointAt(LH++))
        }
        const AH = this.goal;
        if (0 === LH) return void(AH[3] = this.withinDistances(AH[3]));
        for (let zH = 0; zH < 3; zH++) {
          let HH = 1 / 0,
            BH = -1 / 0;
          for (let AH = 0; AH < LH; AH++) HH = Math.min(HH, this.points[AH][zH]), BH = Math.max(BH, this.points[AH][zH]);
          AH[zH] = (HH + BH) / 2
        }
        let rH = 0;
        for (let zH = 0; zH < LH; zH++) {
          const HH = this.points[zH];
          rH = Math.max(rH, Math.hypot(HH[0] - AH[0], HH[1] - AH[1], HH[2] - AH[2]))
        }
        const SH = Math.tan((0, EH.h)(HH) / 2),
          hH = Math.atan(SH * (!0 === this.settings.letterbox ? XH.g : 1)),
          tH = Math.atan(SH * this.cX.getAspectRatio()),
          CH = (rH + (null !== (BH = this.settings.padding) && void 0 !== BH ? BH : 2)) / Math.sin(Math.min(hH, tH));
        AH[3] = this.withinDistances(CH)
      }
      withinDistances(HH) {
        return Math.min(this.furthestDistance, Math.max(this.closestDistance, HH))
      }
      pointAt(HH) {
        return HH === this.points.length && this.points.push([0, 0, 0]), this.points[HH]
      }
    }
    class WH {
      constructor(HH) {
        this.limits = HH, this.yawOffset = 0, this.pitchOffset = 0, this.idleMs = 0, this.pointedAt = null
      }
      continueFrom(HH) {
        this.limits && (this.yawOffset = HH.yawOffset, this.pitchOffset = HH.pitchOffset, this.idleMs = HH.idleMs)
      }
      update(HH, BH) {
        const LH = this.limits;
        if (!LH) return;
        const AH = Number.isFinite(BH.lq) ? BH.lq : 0,
          rH = Number.isFinite(BH.Fq) ? BH.Fq : 0;
        if (BH.pointedAt) this.idleMs = 0, this.pointedAt = {
          heading: BH.pointedAt.heading,
          pitch: BH.pointedAt.pitch
        };
        else if (0 !== AH || 0 !== rH) this.idleMs = 0, this.yawOffset += AH, this.pitchOffset += rH;
        else {
          const BH = Math.max(0, this.idleMs + HH - 200) - Math.max(0, this.idleMs - 200);
          if (this.idleMs += HH, void 0 !== LH.returnMs && BH > 0) {
            const HH = LH.returnMs > 0 ? Math.exp(-3 * BH / LH.returnMs) : 0;
            this.yawOffset *= HH, this.pitchOffset *= HH
          }
        }
        this.clampOffsets(LH)
      }
      clampOffsets(HH) {
        if (HH.maxYaw >= 180) this.yawOffset = (0, rH.r)(0, this.yawOffset);
        else {
          const BH = (0, EH.h)(HH.maxYaw);
          this.yawOffset = Math.max(-BH, Math.min(BH, this.yawOffset))
        }
        const BH = (0, EH.h)(HH.maxPitch);
        this.pitchOffset = Math.max(-BH, Math.min(BH, this.pitchOffset))
      }
      apply(HH, BH) {
        this.pointedAt && this.limits && (this.yawOffset = (0, rH.r)(HH.heading, this.pointedAt.heading), this.pitchOffset = this.pointedAt.pitch - HH.pitch, this.pointedAt = null, this.clampOffsets(this.limits));
        const LH = (0, rH.i)(HH.pitch + this.pitchOffset);
        this.pitchOffset = LH - HH.pitch, BH.heading = (0, rH.p)(HH.heading + this.yawOffset), BH.pitch = LH
      }
      unapply(HH, BH) {
        BH.heading = (0, rH.p)(HH.heading - this.yawOffset), BH.pitch = (0, rH.i)(HH.pitch - this.pitchOffset)
      }
    }
    const MH = 1e-6;

    function xH(HH) {
      return Math.sqrt(HH[0] * HH[0] + HH[1] * HH[1] + HH[2] * HH[2])
    }

    function vH(HH, BH, LH, AH, rH) {
      const SH = rH * rH,
        hH = SH * rH;
      return (2 * hH - 3 * SH + 1) * HH + (hH - 2 * SH + rH) * BH + (-2 * hH + 3 * SH) * LH + (hH - SH) * AH
    }

    function PH(HH, BH, LH, AH, rH) {
      const SH = rH * rH;
      return (6 * SH - 6 * rH) * HH + (3 * SH - 4 * rH + 1) * BH + (-6 * SH + 6 * rH) * LH + (3 * SH - 2 * rH) * AH
    }

    function TH(HH, BH) {
      const LH = BH[0] - HH[0],
        AH = BH[1] - HH[1],
        rH = BH[2] - HH[2];
      return Math.sqrt(LH * LH + AH * AH + rH * rH)
    }

    function UH(HH, BH, LH, AH, rH, SH) {
      for (let hH = 0; hH < 3; hH++) SH[hH] = rH ? HH[hH] * AH : LH[hH] - BH[hH];
      return rH && function(HH, BH) {
        const LH = xH(HH);
        if (LH > BH) {
          const AH = BH / LH;
          HH[0] *= AH, HH[1] *= AH, HH[2] *= AH
        }
      }(SH, 3 * TH(BH, LH)), SH
    }

    function VH(HH, BH, LH, AH) {
      for (let rH = 0; rH < 3; rH++) AH[rH] = 6 * (BH[rH] - HH[rH]) - 2 * LH[rH];
      if (xH(AH) < MH)
        for (let rH = 0; rH < 3; rH++) AH[rH] = BH[rH] - HH[rH];
      return AH
    }

    function OH(HH, BH) {
      return [2 * BH[0] - HH[0], 2 * BH[1] - HH[1], 2 * BH[2] - HH[2]]
    }

    function bH(HH, BH, LH, AH, rH, SH, hH) {
      if (!SH && !hH) return 0;
      const tH = SH ? HH : 2 * BH - LH,
        zH = hH ? LH : 2 * BH - HH,
        CH = SH ? AH : rH,
        EH = hH ? rH : AH,
        XH = (BH - tH) / CH,
        GH = (zH - BH) / EH;
      if (XH * GH <= 0) return 0;
      const YH = (zH - tH) / (CH + EH),
        uH = 3 * Math.min(Math.abs(XH), Math.abs(GH));
      return Math.max(-uH, Math.min(uH, YH))
    }

    function kH(HH, BH, LH, AH, rH, SH, hH) {
      const {
        u: tH,
        segmentMs: zH
      } = HH;
      if (!HH.curved) return LH + (AH - LH) * tH;
      return vH(LH, bH(BH, LH, AH, HH.beforeMs, zH, SH, !0) * zH, AH, bH(LH, AH, rH, zH, HH.afterMs, !0, hH) * zH, tH)
    }

    function mH(HH) {
      return Math.abs(HH.pitch) >= rH.c
    }
    class oH {
      constructor(HH, BH, LH, AH, rH) {
        this.nodes = HH, this.prevNodes = LH, this.nextNodes = AH, this.tangents = void 0, this.derivative = [0, 0, 0], this.beforeAngles = {
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
        }, this.tangents = HH.map(((HH, LH) => this.nodeTangent(BH, rH, LH)))
      }
      sample(HH, BH, LH) {
        const {
          index: AH,
          toIndex: SH,
          segmentMs: hH,
          curved: tH
        } = HH, zH = this.fromAngles, CH = this.toAngles, EH = this.nodeAngles(AH, LH.position, BH, zH), XH = this.nodeAngles(SH, LH.position, BH, CH);
        if (hH > 0 && "aim" !== EH && "aim" !== XH && this.liveTangent(HH, zH)) return LH.heading = (0, rH.p)(zH.heading), void(LH.pitch = zH.pitch);
        if ("none" === EH && "none" === XH) return;
        !tH && hH > 0 && ("tangent" === EH && this.liveTangent(HH, zH), "tangent" === XH && this.liveTangent(HH, CH)), "none" === EH ? (0, rH.k)(CH, zH) : "none" === XH && (0, rH.k)(zH, CH);
        const GH = tH && HH.beforeIndex >= 0 && "none" !== this.nodeAngles(HH.beforeIndex, LH.position, BH, this.beforeAngles),
          YH = tH && HH.afterIndex >= 0 && "none" !== this.nodeAngles(HH.afterIndex, LH.position, BH, this.afterAngles),
          uH = (0, rH.s)(zH.heading, CH.heading),
          QH = kH(HH, GH ? (0, rH.s)(zH.heading, this.beforeAngles.heading) : 0, zH.heading, uH, YH ? (0, rH.s)(uH, this.afterAngles.heading) : 0, GH, YH);
        LH.heading = (0, rH.p)(QH), LH.pitch = (0, rH.i)(kH(HH, this.beforeAngles.pitch, zH.pitch, CH.pitch, this.afterAngles.pitch, GH, YH))
      }
      nodeAngles(HH, BH, LH, AH) {
        const rH = this.rawNodeAngles(HH, BH, LH, AH);
        return "none" !== rH && mH(AH) && !this.borrowHeading(this.prevNodes[HH], BH, LH, AH) && this.borrowHeading(this.nextNodes[HH], BH, LH, AH), rH
      }
      borrowHeading(HH, BH, LH, AH) {
        const rH = this.borrowedAngles;
        return !(HH < 0 || "none" === this.rawNodeAngles(HH, BH, LH, rH) || mH(rH)) && (AH.heading = rH.heading, !0)
      }
      rawNodeAngles(HH, BH, LH, AH) {
        const SH = this.nodes[HH].keyframe;
        if (SH.lookDirection) return (0, rH.l)(SH.lookDirection, AH), "aim";
        if (void 0 !== SH.lookAt) {
          const HH = LH(SH.lookAt);
          if (HH) return (0, rH.o)(BH, HH, AH), "aim"
        }
        const hH = this.tangents[HH];
        return hH ? ((0, rH.k)(hH, AH), "tangent") : "none"
      }
      liveTangent(HH, BH) {
        const LH = this.nodes[HH.index].position,
          AH = this.nodes[HH.toIndex].position,
          SH = this.derivative;
        for (let rH = 0; rH < 3; rH++) SH[rH] = PH(LH[rH], HH.fromTangent[rH], AH[rH], HH.toTangent[rH], HH.u);
        return xH(SH) > 1e-9 ? ((0, rH.l)(SH, BH), !0) : !(TH(LH, AH) < MH) && ((0, rH.l)(VH(LH, AH, HH.u < .5 ? HH.toTangent : HH.fromTangent, SH), BH), !0)
      }
      nodeTangent(HH, BH, LH) {
        var AH;
        const SH = HH[LH];
        if (xH(SH) > 1e-9) return (0, rH.l)(SH, {
          heading: 0,
          pitch: 0
        });
        const hH = null !== (AH = this.restDirectionTo(LH, LH + 1, HH, BH)) && void 0 !== AH ? AH : this.restDirectionTo(LH, LH - 1, HH, BH);
        return hH ? (0, rH.l)(hH, {
          heading: 0,
          pitch: 0
        }) : null
      }
      restDirectionTo(HH, BH, LH, AH) {
        const rH = this.nodes[HH],
          SH = this.nodes[BH];
        if (!SH || TH(rH.position, SH.position) < MH) return null;
        const [hH, tH] = BH > HH ? [rH, SH] : [SH, rH], zH = UH(LH[BH], hH.position, tH.position, tH.timeMs - hH.timeMs, AH, [0, 0, 0]);
        return VH(hH.position, tH.position, zH, [0, 0, 0])
      }
    }

    function IH(HH, BH) {
      const LH = HH.lookDirection || BH.lookDirection ? function(HH, BH) {
        if (!HH || !BH) return HH === BH;
        const LH = xH(HH),
          AH = xH(BH);
        return Math.hypot(HH[0] / LH - BH[0] / AH, HH[1] / LH - BH[1] / AH, HH[2] / LH - BH[2] / AH) < MH
      }(HH.lookDirection, BH.lookDirection) : (AH = HH.lookAt, rH = BH.lookAt, "object" !== typeof AH || "object" !== typeof rH ? AH === rH : TH(AH, rH) < MH);
      var AH, rH;
      return TH(HH.position, BH.position) < MH && HH.fov === BH.fov && LH
    }
    class fH {
      constructor(HH, BH, LH) {
        if (this.smooth = BH, this.nodes = void 0, this.velocities = void 0, this.prevNodes = void 0, this.nextNodes = void 0, this.prevGaps = void 0, this.nextGaps = void 0, this.loopMs = void 0, this.aim = void 0, this.segment = {
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
          }, 0 === HH.length) throw new Error("A camera path needs at least one keyframe");
        for (let SH = 1; SH < HH.length; SH++)
          if (!(HH[SH].timeMs > HH[SH - 1].timeMs)) throw new Error("Camera path keyframe times must strictly increase");
        this.nodes = HH.map((HH => {
          var BH;
          return {
            timeMs: HH.timeMs,
            position: [...HH.position],
            keyframe: HH,
            easing: (0, SH.r)(null !== (BH = HH.easing) && void 0 !== BH ? BH : "linear")
          }
        }));
        const AH = this.nodes[0],
          rH = this.nodes[this.nodes.length - 1],
          hH = LH && this.nodes.length > 1;
        hH && !IH(AH.keyframe, rH.keyframe) && this.nodes.push({
          ...AH,
          timeMs: rH.timeMs + (rH.timeMs - AH.timeMs) / (this.nodes.length - 1)
        }), this.loopMs = hH ? this.nodes[this.nodes.length - 1].timeMs - AH.timeMs : 0, this.prevNodes = this.nodes.map(((HH, BH) => this.neighbour(BH, -1))), this.nextNodes = this.nodes.map(((HH, BH) => this.neighbour(BH, 1))), this.prevGaps = this.prevNodes.map(((HH, BH) => HH >= 0 ? this.gapMs(BH, -1) : 0)), this.nextGaps = this.nextNodes.map(((HH, BH) => HH >= 0 ? this.gapMs(BH, 1) : 0)), this.velocities = this.nodes.map(((HH, BH) => {
          const LH = this.prevNodes[BH],
            AH = this.nextNodes[BH];
          return function(HH, BH, LH, AH, rH, SH) {
            if (SH[0] = 0, SH[1] = 0, SH[2] = 0, !HH && !LH) return SH;
            const hH = null !== HH && void 0 !== HH ? HH : OH(null !== LH && void 0 !== LH ? LH : BH, BH),
              tH = null !== LH && void 0 !== LH ? LH : OH(null !== HH && void 0 !== HH ? HH : BH, BH),
              zH = HH ? AH : rH,
              CH = LH ? rH : AH,
              EH = TH(hH, BH),
              XH = TH(BH, tH);
            if (EH < MH || XH < MH) return SH;
            const GH = Math.sqrt(EH),
              YH = Math.sqrt(XH),
              uH = (GH + YH) / (zH + CH);
            for (let QH = 0; QH < 3; QH++) {
              const HH = (BH[QH] - hH[QH]) / GH - (tH[QH] - hH[QH]) / (GH + YH) + (tH[QH] - BH[QH]) / YH;
              SH[QH] = HH * uH
            }
            return SH
          }(LH >= 0 ? this.nodes[LH].position : null, HH.position, AH >= 0 ? this.nodes[AH].position : null, this.prevGaps[BH], this.nextGaps[BH], [0, 0, 0])
        })), this.aim = new oH(this.nodes, this.velocities, this.prevNodes, this.nextNodes, BH)
      }
      sample(HH, BH, LH, AH) {
        const rH = this.findSegment(this.pathTime(HH));
        this.samplePosition(rH, AH.position), this.aim.sample(rH, BH, AH);
        const {
          beforeIndex: SH,
          afterIndex: hH
        } = rH;
        AH.fov = kH(rH, SH >= 0 ? this.fovAt(SH, LH) : 0, this.fovAt(rH.index, LH), this.fovAt(rH.toIndex, LH), hH >= 0 ? this.fovAt(hH, LH) : 0, SH >= 0, hH >= 0)
      }
      pathTime(HH) {
        const BH = this.nodes[0].timeMs;
        if (this.loopMs <= 0 || HH <= BH) return HH;
        const LH = HH - BH;
        return BH + LH - this.loopMs * Math.floor(LH / this.loopMs)
      }
      findSegment(HH) {
        const BH = this.nodes,
          LH = this.segment;
        let AH = LH.index;
        for (HH < BH[AH].timeMs && (AH = 0); AH < BH.length - 2 && BH[AH + 1].timeMs <= HH;) AH++;
        const rH = Math.min(AH + 1, BH.length - 1),
          hH = BH[rH].timeMs - BH[AH].timeMs;
        return LH.index = AH, LH.toIndex = rH, LH.segmentMs = hH, LH.u = hH > 0 ? (0, SH.n)((HH - BH[AH].timeMs) / hH, BH[AH].easing) : 1, LH.curved = this.smooth && hH > 0, LH.beforeIndex = this.prevNodes[AH], LH.afterIndex = this.nextNodes[rH], LH.beforeMs = this.prevGaps[AH], LH.afterMs = this.nextGaps[rH], LH
      }
      samplePosition(HH, BH) {
        const {
          fromTangent: LH,
          toTangent: AH,
          curved: rH
        } = HH, SH = this.nodes[HH.index].position, hH = this.nodes[HH.toIndex].position;
        UH(this.velocities[HH.index], SH, hH, HH.segmentMs, rH, LH), UH(this.velocities[HH.toIndex], SH, hH, HH.segmentMs, rH, AH);
        const tH = HH.u;
        for (let zH = 0; zH < 3; zH++) BH[zH] = rH ? vH(SH[zH], LH[zH], hH[zH], AH[zH], tH) : SH[zH] + (hH[zH] - SH[zH]) * tH
      }
      fovAt(HH, BH) {
        var LH;
        return null !== (LH = this.nodes[HH].keyframe.fov) && void 0 !== LH ? LH : BH
      }
      neighbour(HH, BH) {
        const LH = this.nodes.length - 1,
          AH = HH + BH;
        return AH >= 0 && AH <= LH ? AH : this.loopMs <= 0 || LH < 2 ? -1 : AH < 0 ? LH - 1 : 1
      }
      gapMs(HH, BH) {
        const LH = this.nodes.length - 1;
        if (1 === BH) {
          const BH = HH === LH ? 0 : HH;
          return this.nodes[BH + 1].timeMs - this.nodes[BH].timeMs
        }
        const AH = 0 === HH ? LH : HH;
        return this.nodes[AH].timeMs - this.nodes[AH - 1].timeMs
      }
    }

    function lH(HH, BH, LH) {
      return null !== LH && Number.isFinite(LH) ? (HH.set(BH, LH), LH) : HH.get(BH)
    }
    class KH {
      constructor(HH) {
        this.cX = HH, this.lastFeet = new Map, this.lastAimPoints = new Map, this.lastHeadings = new Map, this.lastPitches = new Map, this.lastLookHeadings = new Map, this.readFeet = void 0, this.readAimPoint = void 0, this.readFeet = BH => HH.getEntityPosition(BH), this.readAimPoint = BH => HH.getEntityAimPoint(BH)
      }
      aimPoint(HH) {
        return "string" !== typeof HH ? (0, zH.j)(HH, 3) ? HH : null : this.resolve(HH, this.readAimPoint, this.lastAimPoints)
      }
      currentAimPoint(HH) {
        const BH = "string" === typeof HH ? this.cX.getEntityAimPoint(HH) : HH;
        return BH && (0, zH.j)(BH, 3) ? BH : null
      }
      feetPosition(HH) {
        return this.resolve(HH, this.readFeet, this.lastFeet)
      }
      heading(HH) {
        const BH = lH(this.lastHeadings, HH, this.cX.getEntityHeading(HH));
        return void 0 !== BH ? BH : HH === this.cX.localPlayerId ? 0 : this.heading(this.cX.localPlayerId)
      }
      pitch(HH) {
        var BH;
        return null !== (BH = lH(this.lastPitches, HH, this.cX.getEntityPitch(HH))) && void 0 !== BH ? BH : 0
      }
      lookHeading(HH) {
        var BH;
        return null !== (BH = lH(this.lastLookHeadings, HH, this.cX.getEntityLookHeading(HH))) && void 0 !== BH ? BH : this.heading(HH)
      }
      resolve(HH, BH, LH) {
        const AH = BH(HH);
        let rH = LH.get(HH);
        return AH && (0, zH.j)(AH, 3) ? (rH || (rH = [0, 0, 0], LH.set(HH, rH)), rH[0] = AH[0], rH[1] = AH[1], rH[2] = AH[2], rH) : rH || (HH === this.cX.localPlayerId ? null : this.resolve(this.cX.localPlayerId, BH, LH))
      }
    }

    function cH(HH) {
      return {
        heading: HH.heading,
        pitch: HH.pitch
      }
    }

    function eH(HH, BH) {
      Number.isFinite(HH.heading) && Number.isFinite(HH.pitch) || (0, rH.k)(BH, HH)
    }

    function qH(HH, BH, LH, AH, SH) {
      if (BH) return void(0, rH.l)(BH, SH);
      const hH = AH.aimPoint(LH);
      hH && (0, rH.o)(HH, hH, SH)
    }
    class gH {
      constructor(HH, BH, LH, AH) {
        this.settings = HH, this.cX = BH, this.targets = LH, this.base = void 0, this.base = cH(AH)
      }
      update(HH, BH, LH) {
        var AH;
        const rH = this.settings;
        (0, zH.e)(rH.position, LH.position), qH(rH.position, rH.lookDirection, null !== (AH = rH.lookAt) && void 0 !== AH ? AH : this.cX.localPlayerId, this.targets, this.base), BH.apply(this.base, LH), LH.fov = YH(rH, this.cX)
      }
      continueFrom(HH) {
        HH instanceof gH && (0, rH.k)(HH.base, this.base)
      }
      reset(HH) {
        eH(this.base, HH)
      }
    }
    class NH {
      constructor(HH, BH, LH, AH) {
        this.settings = HH, this.cX = BH, this.targets = LH, this.base = void 0, this.goal = void 0, this.lastFeet = [0, 0, 0], this.foundFeet = !1, this.smoothed = [0, 0, 0], this.EW = [0, 0, 0], this.started = !1, this.distance = -1, this.toCamera = [0, 0, 0], this.aimOrigin = [0, 0, 0], this.eyeHeading = NaN, this.eyePitch = NaN, this.base = cH(AH), this.goal = [...AH.position]
      }
      update(HH, BH, LH) {
        var AH, SH;
        const hH = this.settings,
          tH = null !== (AH = hH.target) && void 0 !== AH ? AH : this.cX.localPlayerId,
          CH = this.targets.feetPosition(tH),
          EH = "eye" === hH.anchor;
        let XH = !1;
        var GH;
        CH && (XH = this.foundFeet && TH(this.lastFeet, CH) > 32 + .1 * HH, (0, zH.e)(CH, this.lastFeet), this.foundFeet = !0, this.placeGoal(null !== (GH = EH ? this.targets.aimPoint(tH) : null) && void 0 !== GH ? GH : CH, tH));
        const QH = null !== (SH = hH.smoothMs) && void 0 !== SH ? SH : 0;
        !this.started || QH < 1 || XH ? ((0, zH.e)(this.goal, this.smoothed), this.EW.fill(0), this.started = !0) : uH(this.smoothed, this.EW, this.goal, QH, HH), XH && (this.distance = -1), (0, zH.e)(this.smoothed, LH.position);
        const WH = !0 === hH.avoidTerrain ? this.pullIn(tH, HH, LH) : 1;
        let MH = this.goal;
        if ("target" === hH.offsetSpace) MH = LH.position;
        else if (WH < 1) {
          MH = this.aimOrigin;
          for (let HH = 0; HH < 3; HH++) MH[HH] = LH.position[HH] + (this.goal[HH] - this.smoothed[HH]) * WH
        }
        if (EH && !hH.lookDirection && void 0 === hH.lookAt) {
          const BH = this.targets.lookHeading(tH),
            LH = this.targets.pitch(tH),
            AH = 1 - Math.exp(-HH / 50),
            SH = (0, rH.p)(this.eyeHeading + (0, rH.r)(this.eyeHeading, BH) * AH),
            hH = this.eyePitch + (LH - this.eyePitch) * AH,
            zH = tH !== this.cX.localPlayerId && Number.isFinite(SH) && Number.isFinite(hH) && !XH;
          this.eyeHeading = zH ? SH : (0, rH.p)(BH), this.eyePitch = zH ? hH : LH, this.base.heading = this.eyeHeading, this.base.pitch = this.eyePitch
        } else {
          var xH;
          this.eyeHeading = NaN, this.eyePitch = NaN, qH(MH, hH.lookDirection, null !== (xH = hH.lookAt) && void 0 !== xH ? xH : tH, this.targets, this.base)
        }
        BH.apply(this.base, LH), LH.fov = YH(hH, this.cX)
      }
      continueFrom(HH) {
        HH instanceof NH && (0, AH.q)(HH.settings.target, this.settings.target) && ((0, rH.k)(HH.base, this.base), (0, zH.e)(HH.goal, this.goal), (0, zH.e)(HH.lastFeet, this.lastFeet), this.foundFeet = HH.foundFeet, (0, zH.e)(HH.smoothed, this.smoothed), (0, zH.e)(HH.EW, this.EW), this.started = HH.started, this.eyeHeading = HH.eyeHeading, this.eyePitch = HH.eyePitch, !0 === HH.settings.avoidTerrain && (this.distance = HH.distance))
      }
      reset(HH) {
        eH(this.base, HH), this.EW.fill(0), this.started = !1, this.distance = -1, this.eyeHeading = NaN, this.eyePitch = NaN
      }
      pullIn(HH, BH, LH) {
        const AH = this.targets.aimPoint(HH);
        if (!AH) return 1;
        const rH = LH.position,
          SH = TH(AH, rH);
        if (!(SH > 0)) return 1;
        const hH = this.toCamera;
        for (let zH = 0; zH < 3; zH++) hH[zH] = (rH[zH] - AH[zH]) / SH;
        const tH = function(HH, BH, LH) {
          return HH < 0 || BH < HH ? BH : BH + (HH - BH) * Math.exp(-LH / 150)
        }(this.distance, function(HH, BH, LH, AH) {
          const rH = HH.raycastTerrain(BH, LH, AH);
          return null !== rH && Number.isFinite(rH) ? Math.min(AH, Math.max(0, rH - .2)) : AH
        }(this.cX, AH, hH, SH), BH);
        if (SH - tH < .001) return this.distance = -1, 1;
        this.distance = tH;
        for (let zH = 0; zH < 3; zH++) rH[zH] = AH[zH] + hH[zH] * tH;
        return tH / SH
      }
      placeGoal(HH, BH) {
        const LH = this.settings.offset;
        let AH = LH[0],
          rH = LH[2];
        if ("target" === this.settings.offsetSpace) {
          const HH = this.targets.heading(BH),
            SH = Math.cos(HH),
            hH = Math.sin(HH);
          AH = LH[0] * SH + LH[2] * hH, rH = -LH[0] * hH + LH[2] * SH
        }
        this.goal[0] = HH[0] + AH, this.goal[1] = HH[1] + LH[1], this.goal[2] = HH[2] + rH
      }
    }
    class RH {
      constructor(HH, BH, LH, AH) {
        var rH, SH;
        this.settings = HH, this.cX = BH, this.sampler = void 0, this.base = void 0, this.resolveTarget = void 0, this.elapsedMs = 0, this.sampler = HH.keyframes.length > 0 ? new fH(HH.keyframes, null === (rH = HH.smooth) || void 0 === rH || rH, null !== (SH = HH.loop) && void 0 !== SH && SH) : null, this.base = (0, zH.c)(AH, (0, zH.g)()), this.resolveTarget = HH => LH.aimPoint(HH)
      }
      update(HH, BH, LH) {
        this.elapsedMs += HH;
        const AH = YH(this.settings, this.cX);
        this.sampler ? this.sampler.sample(this.elapsedMs, this.resolveTarget, AH, this.base) : this.base.fov = AH, (0, zH.e)(this.base.position, LH.position), LH.fov = this.base.fov, BH.apply(this.base, LH)
      }
      continueFrom(HH) {
        HH instanceof RH && (0, AH.q)(HH.settings.keyframes, this.settings.keyframes) && (this.elapsedMs = HH.elapsedMs, (0, zH.c)(HH.base, this.base))
      }
      reset(HH) {
        eH(this.base, HH), Number.isFinite(this.elapsedMs) || (this.elapsedMs = 0)
      }
    }

    function jH(HH, BH) {
      return (0, AH.u)(HH, BH)
    }
    class nH {
      constructor(HH, BH, LH) {
        var AH;
        this.settings = HH, this.cX = BH, this.pose = void 0, this.lastGoodPose = void 0, this.look = void 0, this.targets = void 0, this.mode = void 0, this.warnedNonFinite = !1;
        const rH = null !== LH && LH.settings.mode === HH.mode,
          SH = rH ? LH.pose : BH.getDefaultPose();
        this.pose = (0, zH.c)(SH, (0, zH.g)()), this.lastGoodPose = (0, zH.c)(rH ? LH.lastGoodPose : SH, (0, zH.g)()), this.look = new WH(HH.playerLook), this.targets = null !== (AH = null === LH || void 0 === LH ? void 0 : LH.targets) && void 0 !== AH ? AH : new KH(BH);
        const hH = (0, zH.c)(SH, (0, zH.g)());
        rH && LH.look.unapply(hH, hH), this.mode = function(HH, BH, LH, AH) {
          switch (HH.mode) {
            case "fixed":
              return new gH(HH, BH, LH, AH);
            case "follow":
              return new NH(HH, BH, LH, AH);
            case "path":
              return new RH(HH, BH, LH, AH);
            case "frame":
              return new QH(HH, BH, LH, AH)
          }
        }(HH, BH, this.targets, hH), rH && (this.look.continueFrom(LH.look), this.mode.continueFrom(LH.mode))
      }
      update(HH, BH) {
        return this.look.update(HH, BH), this.mode.update(HH, this.look, this.pose), (0, zH.i)(this.pose) ? (0, zH.c)(this.pose, this.lastGoodPose) : (this.warnedNonFinite || (console.warn("Scripted camera produced a non-finite pose; holding the last good one"), this.warnedNonFinite = !0), (0, zH.c)(this.lastGoodPose, this.pose), this.mode.reset((0, zH.i)(this.lastGoodPose) ? this.lastGoodPose : this.cX.getDefaultPose())), this.pose
      }
    }

    function FH(HH) {
      return [0, 0, HH[2], HH[3]]
    }
    class DH {
      constructor(HH) {
        this.cX = HH, this.settings = {
          mode: "default"
        }, this.pending = null, this.fade = new tH, this.shot = null, this.blend = null, this.mixed = (0, zH.g)(), this.output = (0, zH.g)(), this.hasOutput = !1, this.loadingPositions = [], this.loadingSlots = Array.from({
          length: 3
        }, (() => [0, 0, 0]))
      }
      setSettings(HH) {
        const BH = (0, CH.b)(HH);
        if ((0, AH.q)(BH, this.pending ? this.pending.settings : this.settings)) return;
        const LH = jH(this.settings, BH);
        if (void 0 !== BH.transition && !LH) return this.pending = {
          settings: BH,
          shot: "default" === BH.mode ? null : new nH(BH, this.cX, null)
        }, void this.fade.fadeOut(BH.transition);
        const rH = null !== this.pending;
        this.pending = null, !rH && LH || this.fade.fadeIn(AH.g.minTransitionFadeMs), this.show(BH, !1)
      }
      show(HH, BH) {
        var LH, rH;
        if ((0, AH.q)(HH, this.settings)) return;
        const hH = !BH && jH(this.settings, HH);
        this.settings = HH;
        const tH = null !== this.blend && this.blend.elapsedMs > 0,
          CH = (0, zH.c)(this.hasOutput ? this.output : this.cX.getDefaultPose(), (0, zH.g)());
        if (this.shot = "default" === HH.mode ? null : new nH(HH, this.cX, BH ? null : this.shot), hH) return;
        const EH = BH || !this.shot && !this.hasOutput ? 0 : null !== (LH = HH.blendInMs) && void 0 !== LH ? LH : 0;
        if (EH <= 0) return void(this.blend = null);
        const XH = (0, SH.r)(null !== (rH = HH.blendEasing) && void 0 !== rH ? rH : "easeInOut");
        this.blend = {
          from: CH,
          fromScripted: this.hasOutput,
          headingDelta: NaN,
          elapsedMs: 0,
          durationMs: EH,
          easing: tH ? FH(XH) : XH
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
      update(HH, BH) {
        const LH = Number.isFinite(HH) && HH > 0 ? HH : 0;
        if (this.fade.advance(LH) && null !== this.pending) {
          const {
            settings: HH
          } = this.pending;
          this.pending = null, this.show(HH, !0)
        }
        this.loadingPositions.length = 0;
        const AH = this.pending;
        if (null !== AH && void 0 !== AH && AH.shot) {
          const HH = "path" === AH.settings.mode ? 0 : LH;
          this.noteLoadingPosition(AH.shot.update(HH, zH.b).position)
        }
        if (!this.isActive()) return this.hasOutput = !1, null;
        const hH = this.shot ? this.shot.update(LH, BH) : this.cX.getDefaultPose();
        this.shot && this.noteLoadingPosition(hH.position);
        const tH = this.blend;
        if (!tH) return this.writeOutput(hH);
        tH.elapsedMs += LH;
        const CH = Math.min(1, tH.elapsedMs / tH.durationMs);
        if (tH.headingDelta = Number.isFinite(tH.headingDelta) ? (0, rH.s)(tH.headingDelta, hH.heading - tH.from.heading) : (0, rH.r)(tH.from.heading, hH.heading), (0, zH.m)(tH.from, hH, tH.headingDelta, (0, SH.n)(CH, tH.easing), this.mixed), CH >= 1) {
          if (this.blend = null, !this.shot) return this.hasOutput = !1, null
        } else tH.fromScripted && this.noteLoadingPosition(tH.from.position);
        return this.writeOutput(this.mixed)
      }
      noteLoadingPosition(HH) {
        if (HH.every(Number.isFinite)) {
          const BH = this.loadingPositions;
          BH.push((0, zH.e)(HH, this.loadingSlots[BH.length]))
        }
      }
      writeOutput(HH) {
        const BH = this.output;
        (0, zH.i)(HH) ? (0, zH.c)(HH, BH) : this.hasOutput || (0, zH.c)(this.cX.getDefaultPose(), BH), BH.pitch = (0, rH.i)(BH.pitch);
        const LH = this.cX.getDefaultFov(),
          SH = Number.isFinite(LH) && LH > 0 && LH < 180,
          hH = SH ? Math.min(AH.g.minFov, LH) : AH.g.minFov,
          tH = SH ? Math.max(AH.g.maxFov, LH) : AH.g.maxFov;
        return BH.fov = Number.isFinite(BH.fov) ? Math.min(tH, Math.max(hH, BH.fov)) : tH, this.hasOutput = !0, BH
      }
    }
  },
  40135: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => rH,
      c: () => tH,
      e: () => hH,
      g: () => SH,
      i: () => CH,
      j: () => zH,
      m: () => EH
    });
    var AH = LH(40140);
    const rH = {
      lq: 0,
      Fq: 0
    };

    function SH() {
      return {
        position: [0, 0, 0],
        heading: 0,
        pitch: 0,
        fov: 0
      }
    }

    function hH(HH, BH) {
      return BH[0] = HH[0], BH[1] = HH[1], BH[2] = HH[2], BH
    }

    function tH(HH, BH) {
      return hH(HH.position, BH.position), BH.heading = HH.heading, BH.pitch = HH.pitch, BH.fov = HH.fov, BH
    }

    function zH(HH, BH) {
      return Array.isArray(HH) && HH.length === BH && HH.every(Number.isFinite)
    }

    function CH(HH) {
      return zH(HH.position, 3) && Number.isFinite(HH.heading) && Number.isFinite(HH.pitch) && Number.isFinite(HH.fov)
    }

    function EH(HH, BH, LH, rH, SH) {
      for (let AH = 0; AH < 3; AH++) SH.position[AH] = HH.position[AH] + (BH.position[AH] - HH.position[AH]) * rH;
      return SH.heading = (0, AH.p)(HH.heading + LH * rH), SH.pitch = HH.pitch + (BH.pitch - HH.pitch) * rH, SH.fov = HH.fov + (BH.fov - HH.fov) * rH, SH
    }
  },
  40169: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => OH,
      f: () => YH
    });
    var AH = LH(40164),
      rH = LH(40135);
    const SH = AH.e,
      hH = AH.k,
      tH = AH.f;

    function zH(HH, BH, LH, AH) {
      return Number.isFinite(HH) ? Math.min(LH, Math.max(BH, HH)) : AH
    }

    function CH(HH, BH, LH) {
      return void 0 !== HH && Number.isFinite(HH) ? Math.min(LH, Math.max(BH, HH)) : void 0
    }

    function EH(HH) {
      const BH = AH.g.maxCoordinate;
      return [Math.min(BH, Math.max(-BH, HH[0])), Math.min(BH, Math.max(-BH, HH[1])), Math.min(BH, Math.max(-BH, HH[2]))]
    }

    function XH(HH) {
      return "string" === typeof HH ? HH : (0, rH.j)(HH, 3) ? EH(HH) : void 0
    }
    const GH = new RegExp(AH.n);

    function YH(HH) {
      return "string" === typeof HH && GH.test(HH)
    }

    function uH(HH) {
      const BH = [];
      if (!Array.isArray(HH)) return BH;
      for (const LH of HH.slice(0, AH.g.maxFrameTargets)) {
        const HH = XH(LH);
        void 0 === HH || "string" === typeof HH && !YH(HH) || BH.push(HH)
      }
      return BH
    }

    function QH(HH) {
      if (!(0, rH.j)(HH, 3)) return;
      const BH = Math.max(Math.abs(HH[0]), Math.abs(HH[1]), Math.abs(HH[2])),
        LH = Math.hypot(HH[0] / BH, HH[1] / BH, HH[2] / BH);
      return 0 === BH || BH * LH < AH.g.minDirectionLength ? void 0 : [HH[0] / BH / LH, HH[1] / BH / LH, HH[2] / BH / LH]
    }

    function WH(HH) {
      if (void 0 !== HH) return "string" === typeof HH ? SH.includes(HH) ? HH : void 0 : (0, rH.j)(HH, 4) ? [zH(HH[0], 0, 1, 0), zH(HH[1], AH.g.minEasingY, AH.g.maxEasingY, 0), zH(HH[2], 0, 1, 1), zH(HH[3], AH.g.minEasingY, AH.g.maxEasingY, 1)] : "linear"
    }

    function MH(HH) {
      if (HH) return {
        maxYaw: zH(HH.maxYaw, 0, AH.g.maxPlayerLook, 0),
        maxPitch: zH(HH.maxPitch, 0, AH.g.maxPlayerLook, 0),
        returnMs: CH(HH.returnMs, 0, AH.g.maxReturnMs)
      }
    }
    const xH = new RegExp(AH.c);

    function vH(HH) {
      var BH;
      if ("object" !== typeof HH || null === HH) return;
      const LH = AH.g.maxTransitionMs,
        rH = AH.g.minTransitionFadeMs;
      return {
        colour: "string" === typeof HH.colour && xH.test(HH.colour) ? HH.colour : AH.d,
        outMs: zH(HH.outMs, rH, LH, rH),
        holdMs: zH(null !== (BH = HH.holdMs) && void 0 !== BH ? BH : 0, 0, LH, 0),
        inMs: zH(HH.inMs, rH, LH, rH)
      }
    }

    function PH(HH) {
      return !0 === HH || void 0
    }

    function TH(HH) {
      if ("object" !== typeof HH || null === HH) return !1;
      const BH = HH.lookAt;
      return Number.isFinite(HH.timeMs) && (0, rH.j)(HH.position, 3) && (void 0 === BH || "string" === typeof BH || (0, rH.j)(BH, 3))
    }

    function UH(HH) {
      return {
        ...HH,
        timeMs: zH(HH.timeMs, 0, AH.g.maxPathMs, 0),
        position: EH(HH.position),
        lookAt: XH(HH.lookAt),
        lookDirection: QH(HH.lookDirection),
        fov: CH(HH.fov, AH.g.minFov, AH.g.maxFov),
        easing: WH(HH.easing)
      }
    }

    function VH(HH) {
      const BH = [];
      if (!Array.isArray(HH)) return BH;
      for (const LH of HH.slice(0, AH.g.maxKeyframes)) {
        if (!TH(LH)) continue;
        const HH = UH(LH);
        (0 === BH.length || HH.timeMs > BH[BH.length - 1].timeMs) && BH.push(HH)
      }
      return BH
    }

    function OH(HH) {
      if ("object" !== typeof HH || null === HH) return {
        mode: "default"
      };
      const BH = {
          blendInMs: CH(HH.blendInMs, 0, AH.g.maxBlendInMs),
          blendEasing: WH(HH.blendEasing),
          transition: vH(HH.transition),
          letterbox: PH(HH.letterbox),
          hideHud: PH(HH.hideHud)
        },
        LH = {
          mode: "default",
          ...BH
        };
      if ("default" === HH.mode || "fixed" === HH.mode && !(0, rH.j)(HH.position, 3)) return LH;
      const SH = {
        ...BH,
        fov: CH(HH.fov, AH.g.minFov, AH.g.maxFov),
        playerFacing: (GH = HH.playerFacing, hH.includes(GH) ? GH : void 0),
        playerLook: MH(HH.playerLook)
      };
      var GH, YH, xH;
      switch (HH.mode) {
        case "fixed":
          return {
            ...HH, ...SH, position: EH(HH.position), lookAt: XH(HH.lookAt), lookDirection: QH(HH.lookDirection)
          };
        case "follow":
          return {
            ...HH, ...SH, target: "string" === typeof HH.target ? HH.target : void 0, anchor: (xH = HH.anchor, tH.includes(xH) ? xH : void 0), lookAt: XH(HH.lookAt), offset: (YH = HH.offset, Array.isArray(YH) ? [zH(YH[0], -AH.g.maxOffset, AH.g.maxOffset, 0), zH(YH[1], -AH.g.maxOffset, AH.g.maxOffset, 0), zH(YH[2], -AH.g.maxOffset, AH.g.maxOffset, 0)] : [0, 0, 0]), lookDirection: QH(HH.lookDirection), smoothMs: CH(HH.smoothMs, 0, AH.g.maxSmoothMs)
          };
        case "path":
          return {
            ...HH, ...SH, keyframes: VH(HH.keyframes)
          };
        case "frame":
          return {
            ...HH, ...SH, targets: uH(HH.targets), viewHeading: CH(HH.viewHeading, -AH.g.maxFrameHeading, AH.g.maxFrameHeading), viewElevation: CH(HH.viewElevation, 0, AH.g.maxFrameElevation), padding: CH(HH.padding, 0, AH.g.maxFrameDistance), closestDistance: CH(HH.closestDistance, 0, AH.g.maxFrameDistance), furthestDistance: CH(HH.furthestDistance, 0, AH.g.maxFrameDistance), smoothMs: CH(HH.smoothMs, 0, AH.g.maxSmoothMs)
          };
        default:
          return LH
      }
    }
  },
  40193: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => AH
    });
    const AH = {
      message: [{
        translationKey: "general:bunnyHoppingDisabled"
      }],
      timeoutLength: 2e3,
      type: "Error"
    }
  },
  40060: (HH, BH, LH) => {
    function AH(HH, BH) {
      return BH.set(HH), BH
    }
    LH.d(BH, {
      c: () => AH
    })
  },
  40056: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => hH
    });
    var AH = LH(37509),
      rH = LH.n(AH);
    const SH = [1, 1, 1];

    function hH(HH) {
      if (!HH) return [...SH];
      try {
        const [BH, LH, AH] = rH()(HH).rgb().array();
        return [BH / 255, LH / 255, AH / 255]
      } catch (BH) {
        return console.warn(`Invalid groundArrowPath colour "${HH}":`, BH), [...SH]
      }
    }
  },
  40184: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => tH,
      f: () => CH,
      h: () => zH
    });
    var AH = LH(280),
      rH = LH(3195);
    const SH = /\/textures\/skyBoxes\/(space_blue|space_lightblue|space_red_2|space_white)\/(_[np][xyz]\.jpg)$/,
      hH = 512;

    function tH(HH) {
      var BH;
      const LH = Math.min(screen.width, screen.height) * (null !== (BH = (0, AH.d)()) && void 0 !== BH ? BH : (0, rH.q)());
      return Math.max(window.innerHeight * (0, rH.q)(), LH) / (0, rH.r)(HH)
    }

    function zH(HH, BH, LH) {
      return BH / (2 * Math.tan(LH / 2)) > hH ? HH : CH(HH)
    }

    function CH(HH) {
      return HH.map((HH => HH.replace(SH, "/textures/skyBoxes/$1/1024/$2")))
    }
  },
  40048: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => rH
    });
    var AH = LH(176);

    function rH(HH, BH, LH, rH, SH, hH, tH, zH, CH, EH, XH) {
      const GH = AH.g.xX,
        YH = SH - LH;
      let uH = YH * (hH - rH);
      EH.fill(0, 0, uH);
      for (let AH = Math.floor((zH - 1) / GH);
        (AH + 1) * GH > tH; AH--) {
        const QH = AH * GH;
        for (let WH = Math.floor(LH / GH); WH * GH < SH; WH++) {
          const MH = WH * GH,
            xH = Math.max(LH - MH, 0),
            vH = Math.min(SH - MH, GH);
          for (let SH = Math.floor(rH / GH); SH * GH < hH; SH++) {
            const PH = HH(WH, AH, SH);
            if (!PH) continue;
            const TH = SH * GH,
              UH = Math.max(rH - TH, 0),
              VH = Math.min(hH - TH, GH),
              OH = PH.jY,
              bH = PH.aG,
              kH = bH.data;
            for (let HH = Math.min(zH - 1 - QH, GH - 1); HH >= Math.max(tH - QH, 0); HH--) {
              const AH = OH[HH],
                SH = AH === BH;
              if (SH || 0 !== CH[AH]) {
                for (let BH = xH; BH < vH; BH++)
                  for (let hH = UH; hH < VH; hH++) {
                    const tH = (TH + hH - rH) * YH + MH + BH - LH;
                    if (0 !== EH[tH]) continue;
                    const zH = SH ? kH[bH.index(BH, HH, hH)] : AH;
                    0 !== CH[zH] && (EH[tH] = zH, XH[tH] = QH + HH, uH--)
                  }
                if (0 === uH) return
              }
            }
          }
        }
      }
    }
  },
  34806: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => SH,
      h: () => tH,
      l: () => hH,
      m: () => rH,
      n: () => AH
    });
    const AH = {
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
      rH = "/textures/dayNight/sun.png",
      SH = "/textures/dayNight/moon.png",
      hH = "/textures/dayNight/stars",
      tH = ["_px.png", "_py.png", "_pz.png", "_nx.png", "_ny.png", "_nz.png"]
  },
  40164: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => XH,
      d: () => GH,
      e: () => AH,
      f: () => rH,
      g: () => CH,
      k: () => SH,
      n: () => EH,
      q: () => zH,
      u: () => tH
    });
    const AH = ["linear", "easeIn", "easeOut", "easeInOut"],
      rH = ["feet", "eye"],
      SH = ["movement", "camera", "cursor"],
      hH = ["targets", "playerFacing", "blendInMs", "blendEasing", "transition", "letterbox", "hideHud"];

    function tH(HH, BH) {
      return zH(HH, BH, hH)
    }

    function zH(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      if (HH === BH || Number.isNaN(HH) && Number.isNaN(BH)) return !0;
      if ("object" !== typeof HH || "object" !== typeof BH || null === HH || null === BH || Array.isArray(HH) !== Array.isArray(BH)) return !1;
      const AH = HH,
        rH = BH;
      for (const SH of new Set([...Object.keys(AH), ...Object.keys(rH)]))
        if (!LH.includes(SH) && !zH(AH[SH], rH[SH])) return !1;
      return !0
    }
    const CH = {
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
      EH = "^-[1-9][0-9]*$",
      XH = "^#[0-9a-fA-F]{6}$",
      GH = "#000000"
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);