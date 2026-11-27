export const id = 214;
export const ids = [214];
export const modules = {
  40354: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => mW
    });
    class mW {
      constructor(WW, iW) {
        this.read = WW, this.apply = iW, this.release = null
      }
      turn(WW, iW) {
        const OW = null === this.release ? this.read() : this.release.transitionMs;
        this.stop(!1), this.apply({
          forcedCameraDirectionTransitionMs: iW,
          forcedCameraDirection: [WW[0], WW[1], WW[2]]
        }), this.release = {
          timer: setTimeout((() => {
            this.stop(!0)
          }), iW + 100),
          transitionMs: OW
        }
      }
      dispose() {
        this.stop(!0)
      }
      stop(WW) {
        null !== this.release && (clearTimeout(this.release.timer), WW && this.apply({
          forcedCameraDirection: null,
          forcedCameraDirectionTransitionMs: this.release.transitionMs
        }), this.release = null)
      }
    }
  },
  39897: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => NW,
      e: () => EW
    });
    const mW = new Map;

    function EW(WW, iW) {
      mW.set(WW, iW)
    }

    function NW(WW) {
      return WW ? mW.get(WW) : void 0
    }
  },
  37527: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => tW,
      g: () => LW,
      j: () => wW,
      n: () => cW,
      p: () => sW
    });
    var mW = OW(649),
      EW = OW(1876),
      NW = OW(5551);
    class PW {
      constructor(WW, iW) {
        this.width = WW, this.aZ = iW, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(WW * iW)
      }
      push(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const OW = this.data,
          mW = this.next * this.width;
        for (let EW = 0; EW < this.width; EW++) OW[mW + EW] = WW[iW + EW];
        this.next = (this.next + 1) % this.aZ, this.size = Math.min(this.size + 1, this.aZ)
      }
      rows() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1 / 0;
        const OW = [],
          mW = (this.next - this.size + this.aZ) % this.aZ;
        for (let EW = 0; EW < this.size; EW++) {
          const NW = (mW + EW) % this.aZ * this.width;
          this.data[NW + WW] >= iW && OW.push(Array.from(this.data.subarray(NW, NW + this.width)))
        }
        return OW
      }
      lines() {
        return this.rows().map((WW => WW.join(",")))
      }
    }
    const LW = 10,
      cW = {
        idle: 0,
        EZ: 1,
        mD: 2,
        ZD: 3,
        Yj: 4
      },
      wW = {
        none: 0,
        skipped: 1,
        paced: 2,
        drawn: 3
      },
      tW = {
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
      ZW = 12e3,
      xW = ["nowMs", "dtMs", "rawX", "rawY", "turnedX", "turnedY", "outcome", "velocityX", "velocityY", "limit"],
      lW = ["timeStamp", "nowMs", "movementX", "movementY", "locked"],
      AW = ["nowMs", "dtMs", "heading", "pitch", "kind"],
      bW = ["nowMs", "source", "headingBefore", "pitchBefore", "headingAfter", "pitchAfter"],
      jW = ["nowMs", "change", "count"];

    function UW(WW) {
      return "js" === WW ? tW.jsClient : tW.wasmClient
    }
    class kW {
      constructor() {
        this.steps = new PW(LW, ZW), this.events = new PW(lW.length, ZW), this.frames = new PW(AW.length, ZW), this.cameraSets = new PW(NW.e, 256), this.changes = new PW(jW.length, 256)
      }
    }
    const sW = new class {
      constructor() {
        this.rings = null, this.sample = new Float64Array(lW.length), this.startedClient = null, this.startedAtMs = 0
      }
      get client() {
        return this.startedClient
      }
      start(WW, iW) {
        this.startedClient = WW, this.startedAtMs = performance.now(), null !== this.rings ? this.change(UW(WW)) : iW && this.allocate()
      }
      lockGained() {
        this.allocate(), this.change(tW.lockGained)
      }
      allocate() {
        null === this.rings && (this.rings = new kW, null !== this.startedClient && this.changeAt(this.startedAtMs, UW(this.startedClient), 1))
      }
      step(WW, iW) {
        var OW;
        WW[iW + 6] !== cW.Yj && (null === (OW = this.rings) || void 0 === OW || OW.steps.push(WW, iW))
      }
      cameraSet(WW, iW) {
        var OW;
        null === (OW = this.rings) || void 0 === OW || OW.cameraSets.push(WW, iW)
      }
      mouseMove(WW, iW) {
        const OW = this.rings;
        if (null === OW) return;
        const mW = this.sample;
        mW[0] = WW.timeStamp, mW[1] = performance.now(), mW[2] = WW.movementX, mW[3] = WW.movementY, mW[4] = iW ? 1 : 0, OW.events.push(mW)
      }
      frame(WW, iW, OW, mW) {
        const EW = this.rings;
        if (null === EW || mW === wW.none) return;
        const NW = this.sample;
        NW[0] = performance.now(), NW[1] = WW, NW[2] = iW, NW[3] = OW, NW[4] = mW, EW.frames.push(NW)
      }
      change(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.changeAt(performance.now(), WW, iW)
      }
      changeAt(WW, iW, OW) {
        const mW = this.rings;
        if (null === mW) return;
        const EW = this.sample;
        EW[0] = WW, EW[1] = iW, EW[2] = OW, mW.changes.push(EW)
      }
      dumpText() {
        var WW, iW;
        const OW = this.rings;
        return [`look records (${this.startedClient}): ${xW.join(",")}`, ...null !== (WW = null === OW || void 0 === OW ? void 0 : OW.steps.lines()) && void 0 !== WW ? WW : [], `mousemove events: ${lW.join(",")}`, ...null !== (iW = null === OW || void 0 === OW ? void 0 : OW.events.lines()) && void 0 !== iW ? iW : []].join("\n")
      }
      toJson(WW, iW) {
        var OW;
        const EW = WW - 6e4,
          NW = this.rings,
          PW = function(WW, iW) {
            var OW;
            let mW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            const NW = null !== (OW = null === WW || void 0 === WW ? void 0 : WW.rows(mW, EW)) && void 0 !== OW ? OW : [];
            return {
              columns: iW,
              fromMs: 0 === NW.length ? null : NW[0][mW],
              rows: NW
            }
          };
        return {
          version: mW.d,
          client: null !== (OW = this.startedClient) && void 0 !== OW ? OW : "not started",
          savedAt: (new Date).toISOString(),
          savedAtMs: WW,
          keptMs: 6e4,
          page: window.location.href,
          userAgent: navigator.userAgent,
          devicePixelRatio: window.devicePixelRatio,
          screen: {
            width: window.screen.width,
            height: window.screen.height
          },
          PU: null !== document.pointerLockElement,
          visibility: document.visibilityState,
          ...iW,
          outcomes: cW,
          frameKinds: wW,
          changes: tW,
          lookSteps: PW(null === NW || void 0 === NW ? void 0 : NW.steps, xW),
          mouseMoves: PW(null === NW || void 0 === NW ? void 0 : NW.events, lW, 1),
          frames: PW(null === NW || void 0 === NW ? void 0 : NW.frames, AW),
          cameraSets: PW(null === NW || void 0 === NW ? void 0 : NW.cameraSets, bW),
          pageChanges: PW(null === NW || void 0 === NW ? void 0 : NW.changes, jW)
        }
      }
      save(WW) {
        const iW = JSON.stringify(this.toJson(performance.now(), WW));
        (0, EW.e)(new Blob([iW], {
          type: "application/json"
        }), `bloxd-mouse-look-${(new Date).toISOString().replace(/[:.]/g,"-")}.json`)
      }
    }
  },
  40955: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => EW
    });
    var mW = OW(39389);

    function EW(WW, iW, OW) {
      var EW, NW, PW, LW, cW, wW, tW;
      const ZW = (0, mW.e)(WW, iW, OW[0], OW[1], OW[2]),
        xW = ZW ? null !== (EW = ZW.textCell) && void 0 !== EW ? EW : ZW.rect.anchor : OW,
        lW = iW(xW[0], xW[1], xW[2]);
      return {
        pos: [OW[0], OW[1], OW[2]],
        noticeboardSpan: ZW && {
          width: ZW.rect.width,
          height: ZW.rect.height
        },
        text: null !== (NW = null === lW || void 0 === lW || null === (PW = lW.persisted) || void 0 === PW || null === (LW = PW.shared) || void 0 === LW ? void 0 : LW.text) && void 0 !== NW ? NW : "",
        textSize: null !== (cW = null === lW || void 0 === lW || null === (wW = lW.persisted) || void 0 === wW || null === (tW = wW.shared) || void 0 === tW ? void 0 : tW.textSize) && void 0 !== cW ? cW : null
      }
    }
  },
  39696: (WW, iW, OW) => {
    function mW(WW) {
      switch (WW.kind) {
        case void 0:
        case "flatEmissive":
          return !1;
        case "chevronPath":
        case "furnaceFire":
          return !0
      }
    }
    OW.d(iW, {
      b: () => EW,
      d: () => NW,
      h: () => mW
    });
    const EW = 4,
      NW = 3
  },
  40394: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => EW,
      f: () => NW
    });
    var mW = OW(344);
    const EW = new Set(["bedwars", "bridgeBattle", "buildAFactory2", "classic", "clutch", "containmentBreach", "cooking", "defusal", "frontline", "goalRush", "greenville", "hideseek", "luckyBedwars", "murderMystery", "ninetyNineNights", "oneBlock", "plots", "pvpCiv", "secretSanta", "shooting", "skyIslands", "skyblock", "tsunami"]);
    class NW {
      constructor(WW) {
        this.importGame = WW, this.loads = new Map, this.loaded = new Map
      }
      load(WW) {
        const iW = (0, mW.Tb)(WW);
        if (!EW.has(iW)) return Promise.resolve(void 0);
        let OW = this.loads.get(iW);
        return OW || (OW = this.importGame(iW).then((WW => {
          const OW = WW.default;
          if ("function" !== typeof OW) throw new Error(`${iW}'s client code has no default-exported factory`);
          return this.loaded.set(iW, OW), OW
        })).catch((WW => {
          throw this.loads.delete(iW), WW
        })), this.loads.set(iW, OW)), OW
      }
      loadedFactory(WW) {
        const iW = (0, mW.Tb)(WW);
        if (!EW.has(iW)) return;
        const OW = this.loaded.get(iW);
        if (!OW) throw new Error(`${iW}'s client code started before it loaded`);
        return OW
      }
    }
  },
  40392: (WW, iW, OW) => {
    function mW(WW, iW) {
      return Object.values({
        ...WW,
        ...iW
      }).filter((WW => null !== WW))
    }
    OW.d(iW, {
      c: () => mW
    })
  },
  40957: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => PW
    });
    var mW = OW(5807),
      EW = OW(35231),
      NW = OW(4454);

    function PW(WW) {
      if (WW === mW.b) return 0;
      const iW = (0, NW.b)(WW);
      if (void 0 !== iW && iW <= EW.MAX_BLOCK_ID) return iW;
      const OW = (0, NW.b)(WW.split("|")[0]);
      if (void 0 !== OW && OW <= EW.MAX_BLOCK_ID && (0, EW.rootMetaDescOf)(OW) === WW) return OW;
      throw new Error(`Invalid block name. You sent ${WW}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`)
    }
  },
  40442: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => EW
    });
    var mW = OW(25);
    class EW {
      constructor(WW) {
        this.screen = WW, this.hidesHud = !1
      }
      show(WW, iW) {
        this.screen.setFade(WW.colour, WW.alpha), this.screen.setLetterbox(!0 === iW.letterbox, WW.alpha < 1), this.setHudHidden(!0 === iW.hideHud)
      }
      clear() {
        this.screen.clear(), this.setHudHidden(!1)
      }
      setHudHidden(WW) {
        this.hidesHud !== WW && (this.hidesHud = WW, mW.d.set({
          isUiHiddenByCamera: WW
        }))
      }
    }
  },
  40440: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => NW,
      e: () => EW
    });
    var mW = OW(37915);

    function EW(WW) {
      var iW;
      const OW = "default" === WW.mode ? "movement" : null !== (iW = WW.playerFacing) && void 0 !== iW ? iW : "movement";
      return "cursor" === OW ? {
        facing: OW,
        mouseTurns: null
      } : {
        facing: OW,
        mouseTurns: "default" !== WW.mode && void 0 !== WW.playerLook ? "look" : "view"
      }
    }

    function NW(WW, iW, OW, EW, NW, PW) {
      return PW.jH = 0, PW.UH = 0, PW.pointedAt = void 0, void 0 !== EW ? NW ? (PW.pointedAt = EW, WW) : (0, mW.w)(EW.heading) : NW ? (PW.jH = iW, PW.UH = OW, WW) : (0, mW.w)(WW + iW)
    }
  },
  40419: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => BW
    });
    var mW = OW(40428),
      EW = OW(37915),
      NW = OW(38150);

    function PW(WW, iW, OW, mW) {
      if (!(mW > 0)) return iW;
      const EW = iW > WW ? Math.min(iW, WW + OW / mW) : Math.max(iW, WW - OW / mW);
      return Math.abs(iW - EW) < 1e-9 ? iW : EW
    }
    class LW {
      constructor() {
        this.phase = null, this.outMs = 0, this.holdMs = 0, this.inMs = 0, this.sH = 0, this.sinceTurnMs = 1 / 0, this.clearMs = 1 / 0, this.waiting = null, this.screen = {
          colour: mW.e,
          alpha: 0
        }
      }
      getScreen() {
        return this.screen
      }
      fadeOut(WW) {
        !this.isGoingOut() && this.sinceTurnMs < mW.o.minFadeTurnMs ? this.waiting = {
          turn: "out",
          transition: WW
        } : (this.waiting = null, this.startOut(WW))
      }
      fadeIn(WW) {
        this.isGoingOut() ? this.sinceTurnMs < mW.o.minFadeTurnMs ? this.waiting = {
          turn: "in",
          minMs: WW
        } : (this.waiting = null, this.startIn(WW)) : this.waiting = null
      }
      advance(WW) {
        const iW = this.waiting;
        if (null === iW) return this.step(WW);
        const OW = mW.o.minFadeTurnMs - this.sinceTurnMs;
        if (OW > WW) return this.step(WW);
        const EW = this.step(OW);
        return this.waiting = null, "out" === iW.turn ? this.startOut(iW.transition) : this.startIn(iW.minMs), this.step(WW - OW) || EW
      }
      isGoingOut() {
        return "out" === this.phase || "hold" === this.phase
      }
      startOut(WW) {
        ("in" === this.phase || null === this.phase && this.clearMs < mW.o.minFadeTurnMs) && (this.sinceTurnMs = 0), this.phase = "out", 0 === this.screen.alpha && (this.screen.colour = WW.colour), this.outMs = WW.outMs, this.holdMs = WW.holdMs, this.inMs = WW.inMs
      }
      startIn(WW) {
        this.isGoingOut() && (this.sinceTurnMs = 0), this.phase = "in", this.inMs = Math.max(WW, this.inMs)
      }
      step(WW) {
        const iW = this.screen;
        this.sinceTurnMs += WW, null === this.phase && (this.clearMs += WW);
        let OW = !1,
          EW = WW;
        if ("out" === this.phase) {
          const mW = (1 - iW.alpha) * this.outMs;
          if (iW.alpha = PW(iW.alpha, 1, WW, this.outMs), iW.alpha < 1) return !1;
          this.phase = "hold", this.sH = 0, EW = Math.max(0, WW - mW), OW = !0
        }
        let NW = WW;
        if ("hold" === this.phase) {
          this.sH += EW;
          const WW = Math.min(this.sH - this.holdMs, this.sinceTurnMs - mW.o.minFadeTurnMs);
          if (WW < 0 || OW) return OW;
          this.phase = "in", this.sinceTurnMs = WW, NW = WW
        }
        return "in" === this.phase && (iW.alpha = PW(iW.alpha, 0, NW, this.inMs), iW.alpha <= 0 && (this.phase = null, this.clearMs = 0)), OW
      }
    }
    var cW = OW(40407),
      wW = OW(40431),
      tW = OW(2012),
      ZW = OW(37840);

    function xW(WW, iW) {
      for (let OW = 0; OW < iW.length; OW++) iW[OW] = WW[OW]
    }

    function lW(WW, iW) {
      var OW;
      return null !== (OW = WW.fov) && void 0 !== OW ? OW : iW.getDefaultFov()
    }

    function AW(WW, iW, OW, mW, EW) {
      const NW = 2 / mW,
        PW = Math.exp(-NW * EW);
      for (let LW = 0; LW < WW.length; LW++) {
        const mW = WW[LW] - OW[LW],
          cW = (iW[LW] + NW * mW) * EW;
        WW[LW] = OW[LW] + (mW + cW) * PW, iW[LW] = (iW[LW] - NW * cW) * PW
      }
    }
    class bW {
      constructor(WW, iW, OW, mW) {
        var NW, PW, LW, cW, wW;
        this.settings = WW, this.oZ = iW, this.targets = OW, this.base = void 0, this.closestDistance = void 0, this.furthestDistance = void 0, this.goal = void 0, this.framedTargets = !1, this.smoothed = [0, 0, 0, 0, 0, 0], this.Sj = [0, 0, 0, 0, 0, 0], this.started = !1, this.angles = {
          heading: 0,
          pitch: 0
        }, this.points = [], this.forward = [0, 0, 0], this.base = {
          heading: (0, EW.w)((0, tW.i)(null !== (NW = WW.viewHeading) && void 0 !== NW ? NW : 0)),
          pitch: (0, EW.g)((0, tW.i)(null !== (PW = WW.viewElevation) && void 0 !== PW ? PW : 45))
        }, this.closestDistance = null !== (LW = WW.closestDistance) && void 0 !== LW ? LW : Math.min(6, null !== (cW = WW.furthestDistance) && void 0 !== cW ? cW : 1 / 0), this.furthestDistance = null !== (wW = WW.furthestDistance) && void 0 !== wW ? wW : Math.max(64, this.closestDistance);
        const ZW = (0, EW.f)(this.base.heading, this.base.pitch, this.forward),
          xW = mW.position,
          lW = this.closestDistance;
        this.goal = [xW[0] + ZW[0] * lW, xW[1] + ZW[1] * lW, xW[2] + ZW[2] * lW, lW, this.base.heading, this.base.pitch]
      }
      update(WW, iW, OW) {
        var mW, NW;
        this.placeGoal(null !== (mW = this.settings.fov) && void 0 !== mW ? mW : this.oZ.getBaseFov()), this.goal[4] = (0, EW.C)(this.smoothed[4], this.base.heading), this.goal[5] = this.base.pitch;
        const PW = null !== (NW = this.settings.smoothMs) && void 0 !== NW ? NW : 400;
        !this.started || PW < 1 ? (xW(this.goal, this.smoothed), this.Sj.fill(0), this.started = !0) : AW(this.smoothed, this.Sj, this.goal, PW, WW), this.angles.heading = this.smoothed[4], this.angles.pitch = (0, EW.g)(this.smoothed[5]), iW.apply(this.angles, OW);
        const LW = (0, EW.f)(OW.heading, OW.pitch, this.forward);
        for (let EW = 0; EW < 3; EW++) OW.position[EW] = this.smoothed[EW] - LW[EW] * this.smoothed[3];
        OW.fov = lW(this.settings, this.oZ)
      }
      continueFrom(WW) {
        WW instanceof bW && (xW(WW.goal, this.goal), xW(WW.smoothed, this.smoothed), xW(WW.Sj, this.Sj), this.framedTargets = WW.framedTargets, this.started = WW.started)
      }
      reset() {
        this.Sj.fill(0), this.started = !1
      }
      placeGoal(WW) {
        var iW;
        let OW = 0;
        for (const tW of this.settings.targets) {
          const WW = this.targets.currentAimPoint(tW);
          WW && (0, cW.j)(WW, this.pointAt(OW++))
        }
        if (OW > 0) this.framedTargets = !0;
        else if (!this.framedTargets) {
          const WW = this.targets.aimPoint(this.oZ.localPlayerId);
          WW && (0, cW.j)(WW, this.pointAt(OW++))
        }
        const mW = this.goal;
        if (0 === OW) return void(mW[3] = this.withinDistances(mW[3]));
        for (let cW = 0; cW < 3; cW++) {
          let WW = 1 / 0,
            iW = -1 / 0;
          for (let mW = 0; mW < OW; mW++) WW = Math.min(WW, this.points[mW][cW]), iW = Math.max(iW, this.points[mW][cW]);
          mW[cW] = (WW + iW) / 2
        }
        let EW = 0;
        for (let cW = 0; cW < OW; cW++) {
          const WW = this.points[cW];
          EW = Math.max(EW, Math.hypot(WW[0] - mW[0], WW[1] - mW[1], WW[2] - mW[2]))
        }
        const NW = Math.tan((0, tW.i)(WW) / 2),
          PW = Math.atan(NW * (!0 === this.settings.letterbox ? ZW.h : 1)),
          LW = Math.atan(NW * this.oZ.getAspectRatio()),
          wW = (EW + (null !== (iW = this.settings.padding) && void 0 !== iW ? iW : 2)) / Math.sin(Math.min(PW, LW));
        mW[3] = this.withinDistances(wW)
      }
      withinDistances(WW) {
        return Math.min(this.furthestDistance, Math.max(this.closestDistance, WW))
      }
      pointAt(WW) {
        return WW === this.points.length && this.points.push([0, 0, 0]), this.points[WW]
      }
    }
    class jW {
      constructor(WW) {
        this.limits = WW, this.yawOffset = 0, this.pitchOffset = 0, this.xj = 0, this.pointedAt = null
      }
      continueFrom(WW) {
        this.limits && (this.yawOffset = WW.yawOffset, this.pitchOffset = WW.pitchOffset, this.xj = WW.xj)
      }
      update(WW, iW) {
        const OW = this.limits;
        if (!OW) return;
        const mW = Number.isFinite(iW.jH) ? iW.jH : 0,
          EW = Number.isFinite(iW.UH) ? iW.UH : 0;
        if (iW.pointedAt) this.xj = 0, this.pointedAt = {
          heading: iW.pointedAt.heading,
          pitch: iW.pointedAt.pitch
        };
        else if (0 !== mW || 0 !== EW) this.xj = 0, this.yawOffset += mW, this.pitchOffset += EW;
        else {
          const iW = Math.max(0, this.xj + WW - 200) - Math.max(0, this.xj - 200);
          if (this.xj += WW, void 0 !== OW.returnMs && iW > 0) {
            const WW = OW.returnMs > 0 ? Math.exp(-3 * iW / OW.returnMs) : 0;
            this.yawOffset *= WW, this.pitchOffset *= WW
          }
        }
        this.clampOffsets(OW)
      }
      clampOffsets(WW) {
        if (WW.maxYaw >= 180) this.yawOffset = (0, EW.y)(0, this.yawOffset);
        else {
          const iW = (0, tW.i)(WW.maxYaw);
          this.yawOffset = Math.max(-iW, Math.min(iW, this.yawOffset))
        }
        const iW = (0, tW.i)(WW.maxPitch);
        this.pitchOffset = Math.max(-iW, Math.min(iW, this.pitchOffset))
      }
      apply(WW, iW) {
        this.pointedAt && this.limits && (this.yawOffset = (0, EW.y)(WW.heading, this.pointedAt.heading), this.pitchOffset = this.pointedAt.pitch - WW.pitch, this.pointedAt = null, this.clampOffsets(this.limits));
        const OW = (0, EW.g)(WW.pitch + this.pitchOffset);
        this.pitchOffset = OW - WW.pitch, iW.heading = (0, EW.w)(WW.heading + this.yawOffset), iW.pitch = OW
      }
      unapply(WW, iW) {
        iW.heading = (0, EW.w)(WW.heading - this.yawOffset), iW.pitch = (0, EW.g)(WW.pitch - this.pitchOffset)
      }
    }
    const UW = 1e-6;

    function kW(WW) {
      return Math.sqrt(WW[0] * WW[0] + WW[1] * WW[1] + WW[2] * WW[2])
    }

    function sW(WW, iW, OW, mW, EW) {
      const NW = EW * EW,
        PW = NW * EW;
      return (2 * PW - 3 * NW + 1) * WW + (PW - 2 * NW + EW) * iW + (-2 * PW + 3 * NW) * OW + (PW - NW) * mW
    }

    function MW(WW, iW, OW, mW, EW) {
      const NW = EW * EW;
      return (6 * NW - 6 * EW) * WW + (3 * NW - 4 * EW + 1) * iW + (-6 * NW + 6 * EW) * OW + (3 * NW - 2 * EW) * mW
    }

    function KW(WW, iW) {
      const OW = iW[0] - WW[0],
        mW = iW[1] - WW[1],
        EW = iW[2] - WW[2];
      return Math.sqrt(OW * OW + mW * mW + EW * EW)
    }

    function SW(WW, iW, OW, mW, EW, NW) {
      for (let PW = 0; PW < 3; PW++) NW[PW] = EW ? WW[PW] * mW : OW[PW] - iW[PW];
      return EW && function(WW, iW) {
        const OW = kW(WW);
        if (OW > iW) {
          const mW = iW / OW;
          WW[0] *= mW, WW[1] *= mW, WW[2] *= mW
        }
      }(NW, 3 * KW(iW, OW)), NW
    }

    function YW(WW, iW, OW, mW) {
      for (let EW = 0; EW < 3; EW++) mW[EW] = 6 * (iW[EW] - WW[EW]) - 2 * OW[EW];
      if (kW(mW) < UW)
        for (let EW = 0; EW < 3; EW++) mW[EW] = iW[EW] - WW[EW];
      return mW
    }

    function yW(WW, iW) {
      return [2 * iW[0] - WW[0], 2 * iW[1] - WW[1], 2 * iW[2] - WW[2]]
    }

    function TW(WW, iW, OW, mW, EW, NW, PW) {
      if (!NW && !PW) return 0;
      const LW = NW ? WW : 2 * iW - OW,
        cW = PW ? OW : 2 * iW - WW,
        wW = NW ? mW : EW,
        tW = PW ? EW : mW,
        ZW = (iW - LW) / wW,
        xW = (cW - iW) / tW;
      if (ZW * xW <= 0) return 0;
      const lW = (cW - LW) / (wW + tW),
        AW = 3 * Math.min(Math.abs(ZW), Math.abs(xW));
      return Math.max(-AW, Math.min(AW, lW))
    }

    function JW(WW, iW, OW, mW, EW, NW, PW) {
      const {
        u: LW,
        segmentMs: cW
      } = WW;
      if (!WW.curved) return OW + (mW - OW) * LW;
      return sW(OW, TW(iW, OW, mW, WW.beforeMs, cW, NW, !0) * cW, mW, TW(OW, mW, EW, cW, WW.afterMs, !0, PW) * cW, LW)
    }

    function hW(WW) {
      return Math.abs(WW.pitch) >= EW.d
    }
    class HW {
      constructor(WW, iW, OW, mW, EW) {
        this.nodes = WW, this.prevNodes = OW, this.nextNodes = mW, this.tangents = void 0, this.derivative = [0, 0, 0], this.beforeAngles = {
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
        }, this.tangents = WW.map(((WW, OW) => this.nodeTangent(iW, EW, OW)))
      }
      sample(WW, iW, OW) {
        const {
          index: mW,
          toIndex: NW,
          segmentMs: PW,
          curved: LW
        } = WW, cW = this.fromAngles, wW = this.toAngles, tW = this.nodeAngles(mW, OW.position, iW, cW), ZW = this.nodeAngles(NW, OW.position, iW, wW);
        if (PW > 0 && "aim" !== tW && "aim" !== ZW && this.liveTangent(WW, cW)) return OW.heading = (0, EW.w)(cW.heading), void(OW.pitch = cW.pitch);
        if ("none" === tW && "none" === ZW) return;
        !LW && PW > 0 && ("tangent" === tW && this.liveTangent(WW, cW), "tangent" === ZW && this.liveTangent(WW, wW)), "none" === tW ? (0, EW.k)(wW, cW) : "none" === ZW && (0, EW.k)(cW, wW);
        const xW = LW && WW.beforeIndex >= 0 && "none" !== this.nodeAngles(WW.beforeIndex, OW.position, iW, this.beforeAngles),
          lW = LW && WW.afterIndex >= 0 && "none" !== this.nodeAngles(WW.afterIndex, OW.position, iW, this.afterAngles),
          AW = (0, EW.C)(cW.heading, wW.heading),
          bW = JW(WW, xW ? (0, EW.C)(cW.heading, this.beforeAngles.heading) : 0, cW.heading, AW, lW ? (0, EW.C)(AW, this.afterAngles.heading) : 0, xW, lW);
        OW.heading = (0, EW.w)(bW), OW.pitch = (0, EW.g)(JW(WW, this.beforeAngles.pitch, cW.pitch, wW.pitch, this.afterAngles.pitch, xW, lW))
      }
      nodeAngles(WW, iW, OW, mW) {
        const EW = this.rawNodeAngles(WW, iW, OW, mW);
        return "none" !== EW && hW(mW) && !this.borrowHeading(this.prevNodes[WW], iW, OW, mW) && this.borrowHeading(this.nextNodes[WW], iW, OW, mW), EW
      }
      borrowHeading(WW, iW, OW, mW) {
        const EW = this.borrowedAngles;
        return !(WW < 0 || "none" === this.rawNodeAngles(WW, iW, OW, EW) || hW(EW)) && (mW.heading = EW.heading, !0)
      }
      rawNodeAngles(WW, iW, OW, mW) {
        const NW = this.nodes[WW].keyframe;
        if (NW.lookDirection) return (0, EW.m)(NW.lookDirection, mW), "aim";
        if (void 0 !== NW.lookAt) {
          const WW = OW(NW.lookAt);
          if (WW) return (0, EW.t)(iW, WW, mW), "aim"
        }
        const PW = this.tangents[WW];
        return PW ? ((0, EW.k)(PW, mW), "tangent") : "none"
      }
      liveTangent(WW, iW) {
        const OW = this.nodes[WW.index].position,
          mW = this.nodes[WW.toIndex].position,
          NW = this.derivative;
        for (let EW = 0; EW < 3; EW++) NW[EW] = MW(OW[EW], WW.fromTangent[EW], mW[EW], WW.toTangent[EW], WW.u);
        return kW(NW) > 1e-9 ? ((0, EW.m)(NW, iW), !0) : !(KW(OW, mW) < UW) && ((0, EW.m)(YW(OW, mW, WW.u < .5 ? WW.toTangent : WW.fromTangent, NW), iW), !0)
      }
      nodeTangent(WW, iW, OW) {
        var mW;
        const NW = WW[OW];
        if (kW(NW) > 1e-9) return (0, EW.m)(NW, {
          heading: 0,
          pitch: 0
        });
        const PW = null !== (mW = this.restDirectionTo(OW, OW + 1, WW, iW)) && void 0 !== mW ? mW : this.restDirectionTo(OW, OW - 1, WW, iW);
        return PW ? (0, EW.m)(PW, {
          heading: 0,
          pitch: 0
        }) : null
      }
      restDirectionTo(WW, iW, OW, mW) {
        const EW = this.nodes[WW],
          NW = this.nodes[iW];
        if (!NW || KW(EW.position, NW.position) < UW) return null;
        const [PW, LW] = iW > WW ? [EW, NW] : [NW, EW], cW = SW(OW[iW], PW.position, LW.position, LW.timeMs - PW.timeMs, mW, [0, 0, 0]);
        return YW(PW.position, LW.position, cW, [0, 0, 0])
      }
    }

    function nW(WW, iW) {
      const OW = WW.lookDirection || iW.lookDirection ? function(WW, iW) {
        if (!WW || !iW) return WW === iW;
        const OW = kW(WW),
          mW = kW(iW);
        return Math.hypot(WW[0] / OW - iW[0] / mW, WW[1] / OW - iW[1] / mW, WW[2] / OW - iW[2] / mW) < UW
      }(WW.lookDirection, iW.lookDirection) : (mW = WW.lookAt, EW = iW.lookAt, "object" !== typeof mW || "object" !== typeof EW ? mW === EW : KW(mW, EW) < UW);
      var mW, EW;
      return KW(WW.position, iW.position) < UW && WW.fov === iW.fov && OW
    }
    class uW {
      constructor(WW, iW, OW) {
        if (this.smooth = iW, this.nodes = void 0, this.velocities = void 0, this.prevNodes = void 0, this.nextNodes = void 0, this.prevGaps = void 0, this.nextGaps = void 0, this.loopMs = void 0, this.aim = void 0, this.segment = {
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
          }, 0 === WW.length) throw new Error("A camera path needs at least one keyframe");
        for (let NW = 1; NW < WW.length; NW++)
          if (!(WW[NW].timeMs > WW[NW - 1].timeMs)) throw new Error("Camera path keyframe times must strictly increase");
        this.nodes = WW.map((WW => {
          var iW;
          return {
            timeMs: WW.timeMs,
            position: [...WW.position],
            keyframe: WW,
            easing: (0, NW.r)(null !== (iW = WW.easing) && void 0 !== iW ? iW : "linear")
          }
        }));
        const mW = this.nodes[0],
          EW = this.nodes[this.nodes.length - 1],
          PW = OW && this.nodes.length > 1;
        PW && !nW(mW.keyframe, EW.keyframe) && this.nodes.push({
          ...mW,
          timeMs: EW.timeMs + (EW.timeMs - mW.timeMs) / (this.nodes.length - 1)
        }), this.loopMs = PW ? this.nodes[this.nodes.length - 1].timeMs - mW.timeMs : 0, this.prevNodes = this.nodes.map(((WW, iW) => this.neighbour(iW, -1))), this.nextNodes = this.nodes.map(((WW, iW) => this.neighbour(iW, 1))), this.prevGaps = this.prevNodes.map(((WW, iW) => WW >= 0 ? this.gapMs(iW, -1) : 0)), this.nextGaps = this.nextNodes.map(((WW, iW) => WW >= 0 ? this.gapMs(iW, 1) : 0)), this.velocities = this.nodes.map(((WW, iW) => {
          const OW = this.prevNodes[iW],
            mW = this.nextNodes[iW];
          return function(WW, iW, OW, mW, EW, NW) {
            if (NW[0] = 0, NW[1] = 0, NW[2] = 0, !WW && !OW) return NW;
            const PW = null !== WW && void 0 !== WW ? WW : yW(null !== OW && void 0 !== OW ? OW : iW, iW),
              LW = null !== OW && void 0 !== OW ? OW : yW(null !== WW && void 0 !== WW ? WW : iW, iW),
              cW = WW ? mW : EW,
              wW = OW ? EW : mW,
              tW = KW(PW, iW),
              ZW = KW(iW, LW);
            if (tW < UW || ZW < UW) return NW;
            const xW = Math.sqrt(tW),
              lW = Math.sqrt(ZW),
              AW = (xW + lW) / (cW + wW);
            for (let bW = 0; bW < 3; bW++) {
              const WW = (iW[bW] - PW[bW]) / xW - (LW[bW] - PW[bW]) / (xW + lW) + (LW[bW] - iW[bW]) / lW;
              NW[bW] = WW * AW
            }
            return NW
          }(OW >= 0 ? this.nodes[OW].position : null, WW.position, mW >= 0 ? this.nodes[mW].position : null, this.prevGaps[iW], this.nextGaps[iW], [0, 0, 0])
        })), this.aim = new HW(this.nodes, this.velocities, this.prevNodes, this.nextNodes, iW)
      }
      sample(WW, iW, OW, mW) {
        const EW = this.findSegment(this.pathTime(WW));
        this.samplePosition(EW, mW.position), this.aim.sample(EW, iW, mW);
        const {
          beforeIndex: NW,
          afterIndex: PW
        } = EW;
        mW.fov = JW(EW, NW >= 0 ? this.fovAt(NW, OW) : 0, this.fovAt(EW.index, OW), this.fovAt(EW.toIndex, OW), PW >= 0 ? this.fovAt(PW, OW) : 0, NW >= 0, PW >= 0)
      }
      pathTime(WW) {
        const iW = this.nodes[0].timeMs;
        if (this.loopMs <= 0 || WW <= iW) return WW;
        const OW = WW - iW;
        return iW + OW - this.loopMs * Math.floor(OW / this.loopMs)
      }
      findSegment(WW) {
        const iW = this.nodes,
          OW = this.segment;
        let mW = OW.index;
        for (WW < iW[mW].timeMs && (mW = 0); mW < iW.length - 2 && iW[mW + 1].timeMs <= WW;) mW++;
        const EW = Math.min(mW + 1, iW.length - 1),
          PW = iW[EW].timeMs - iW[mW].timeMs;
        return OW.index = mW, OW.toIndex = EW, OW.segmentMs = PW, OW.u = PW > 0 ? (0, NW.p)((WW - iW[mW].timeMs) / PW, iW[mW].easing) : 1, OW.curved = this.smooth && PW > 0, OW.beforeIndex = this.prevNodes[mW], OW.afterIndex = this.nextNodes[EW], OW.beforeMs = this.prevGaps[mW], OW.afterMs = this.nextGaps[EW], OW
      }
      samplePosition(WW, iW) {
        const {
          fromTangent: OW,
          toTangent: mW,
          curved: EW
        } = WW, NW = this.nodes[WW.index].position, PW = this.nodes[WW.toIndex].position;
        SW(this.velocities[WW.index], NW, PW, WW.segmentMs, EW, OW), SW(this.velocities[WW.toIndex], NW, PW, WW.segmentMs, EW, mW);
        const LW = WW.u;
        for (let cW = 0; cW < 3; cW++) iW[cW] = EW ? sW(NW[cW], OW[cW], PW[cW], mW[cW], LW) : NW[cW] + (PW[cW] - NW[cW]) * LW
      }
      fovAt(WW, iW) {
        var OW;
        return null !== (OW = this.nodes[WW].keyframe.fov) && void 0 !== OW ? OW : iW
      }
      neighbour(WW, iW) {
        const OW = this.nodes.length - 1,
          mW = WW + iW;
        return mW >= 0 && mW <= OW ? mW : this.loopMs <= 0 || OW < 2 ? -1 : mW < 0 ? OW - 1 : 1
      }
      gapMs(WW, iW) {
        const OW = this.nodes.length - 1;
        if (1 === iW) {
          const iW = WW === OW ? 0 : WW;
          return this.nodes[iW + 1].timeMs - this.nodes[iW].timeMs
        }
        const mW = 0 === WW ? OW : WW;
        return this.nodes[mW].timeMs - this.nodes[mW - 1].timeMs
      }
    }

    function oW(WW, iW, OW) {
      return null !== OW && Number.isFinite(OW) ? (WW.set(iW, OW), OW) : WW.get(iW)
    }
    class dW {
      constructor(WW) {
        this.oZ = WW, this.lastFeet = new Map, this.lastAimPoints = new Map, this.lastHeadings = new Map, this.lastPitches = new Map, this.lastLookHeadings = new Map, this.readFeet = void 0, this.readAimPoint = void 0, this.readFeet = iW => WW.getEntityPosition(iW), this.readAimPoint = iW => WW.getEntityAimPoint(iW)
      }
      aimPoint(WW) {
        return "string" !== typeof WW ? (0, cW.q)(WW, 3) ? WW : null : this.resolve(WW, this.readAimPoint, this.lastAimPoints)
      }
      currentAimPoint(WW) {
        const iW = "string" === typeof WW ? this.oZ.getEntityAimPoint(WW) : WW;
        return iW && (0, cW.q)(iW, 3) ? iW : null
      }
      feetPosition(WW) {
        return this.resolve(WW, this.readFeet, this.lastFeet)
      }
      heading(WW) {
        const iW = oW(this.lastHeadings, WW, this.oZ.getEntityHeading(WW));
        return void 0 !== iW ? iW : WW === this.oZ.localPlayerId ? 0 : this.heading(this.oZ.localPlayerId)
      }
      pitch(WW) {
        var iW;
        return null !== (iW = oW(this.lastPitches, WW, this.oZ.getEntityPitch(WW))) && void 0 !== iW ? iW : 0
      }
      lookHeading(WW) {
        var iW;
        return null !== (iW = oW(this.lastLookHeadings, WW, this.oZ.getEntityLookHeading(WW))) && void 0 !== iW ? iW : this.heading(WW)
      }
      resolve(WW, iW, OW) {
        const mW = iW(WW);
        let EW = OW.get(WW);
        return mW && (0, cW.q)(mW, 3) ? (EW || (EW = [0, 0, 0], OW.set(WW, EW)), EW[0] = mW[0], EW[1] = mW[1], EW[2] = mW[2], EW) : EW || (WW === this.oZ.localPlayerId ? null : this.resolve(this.oZ.localPlayerId, iW, OW))
      }
    }

    function eW(WW) {
      return {
        heading: WW.heading,
        pitch: WW.pitch
      }
    }

    function vW(WW, iW) {
      Number.isFinite(WW.heading) && Number.isFinite(WW.pitch) || (0, EW.k)(iW, WW)
    }

    function gW(WW, iW, OW, mW, NW) {
      if (iW) return void(0, EW.m)(iW, NW);
      const PW = mW.aimPoint(OW);
      PW && (0, EW.t)(WW, PW, NW)
    }
    class DW {
      constructor(WW, iW, OW, mW) {
        this.settings = WW, this.oZ = iW, this.targets = OW, this.base = void 0, this.base = eW(mW)
      }
      update(WW, iW, OW) {
        var mW;
        const EW = this.settings;
        (0, cW.j)(EW.position, OW.position), gW(EW.position, EW.lookDirection, null !== (mW = EW.lookAt) && void 0 !== mW ? mW : this.oZ.localPlayerId, this.targets, this.base), iW.apply(this.base, OW), OW.fov = lW(EW, this.oZ)
      }
      continueFrom(WW) {
        WW instanceof DW && (0, EW.k)(WW.base, this.base)
      }
      reset(WW) {
        vW(this.base, WW)
      }
    }
    class VW {
      constructor(WW, iW, OW, mW) {
        this.settings = WW, this.oZ = iW, this.targets = OW, this.base = void 0, this.goal = void 0, this.lastFeet = [0, 0, 0], this.foundFeet = !1, this.smoothed = [0, 0, 0], this.Sj = [0, 0, 0], this.started = !1, this.distance = -1, this.toCamera = [0, 0, 0], this.aimOrigin = [0, 0, 0], this.eyeHeading = NaN, this.eyePitch = NaN, this.base = eW(mW), this.goal = [...mW.position]
      }
      update(WW, iW, OW) {
        var mW, NW;
        const PW = this.settings,
          LW = null !== (mW = PW.target) && void 0 !== mW ? mW : this.oZ.localPlayerId,
          wW = this.targets.feetPosition(LW),
          tW = "eye" === PW.anchor;
        let ZW = !1;
        var xW;
        wW && (ZW = this.foundFeet && KW(this.lastFeet, wW) > 32 + .1 * WW, (0, cW.j)(wW, this.lastFeet), this.foundFeet = !0, this.placeGoal(null !== (xW = tW ? this.targets.aimPoint(LW) : null) && void 0 !== xW ? xW : wW, LW));
        const bW = null !== (NW = PW.smoothMs) && void 0 !== NW ? NW : 0;
        !this.started || bW < 1 || ZW ? ((0, cW.j)(this.goal, this.smoothed), this.Sj.fill(0), this.started = !0) : AW(this.smoothed, this.Sj, this.goal, bW, WW), ZW && (this.distance = -1), (0, cW.j)(this.smoothed, OW.position);
        const jW = !0 === PW.avoidTerrain ? this.pullIn(LW, WW, OW) : 1;
        let UW = this.goal;
        if ("target" === PW.offsetSpace) UW = OW.position;
        else if (jW < 1) {
          UW = this.aimOrigin;
          for (let WW = 0; WW < 3; WW++) UW[WW] = OW.position[WW] + (this.goal[WW] - this.smoothed[WW]) * jW
        }
        if (tW && !PW.lookDirection && void 0 === PW.lookAt) {
          const iW = this.targets.lookHeading(LW),
            OW = this.targets.pitch(LW),
            mW = 1 - Math.exp(-WW / 50),
            NW = (0, EW.w)(this.eyeHeading + (0, EW.y)(this.eyeHeading, iW) * mW),
            PW = this.eyePitch + (OW - this.eyePitch) * mW,
            cW = LW !== this.oZ.localPlayerId && Number.isFinite(NW) && Number.isFinite(PW) && !ZW;
          this.eyeHeading = cW ? NW : (0, EW.w)(iW), this.eyePitch = cW ? PW : OW, this.base.heading = this.eyeHeading, this.base.pitch = this.eyePitch
        } else {
          var kW;
          this.eyeHeading = NaN, this.eyePitch = NaN, gW(UW, PW.lookDirection, null !== (kW = PW.lookAt) && void 0 !== kW ? kW : LW, this.targets, this.base)
        }
        iW.apply(this.base, OW), OW.fov = lW(PW, this.oZ)
      }
      continueFrom(WW) {
        WW instanceof VW && (0, mW.v)(WW.settings.target, this.settings.target) && ((0, EW.k)(WW.base, this.base), (0, cW.j)(WW.goal, this.goal), (0, cW.j)(WW.lastFeet, this.lastFeet), this.foundFeet = WW.foundFeet, (0, cW.j)(WW.smoothed, this.smoothed), (0, cW.j)(WW.Sj, this.Sj), this.started = WW.started, this.eyeHeading = WW.eyeHeading, this.eyePitch = WW.eyePitch, !0 === WW.settings.avoidTerrain && (this.distance = WW.distance))
      }
      reset(WW) {
        vW(this.base, WW), this.Sj.fill(0), this.started = !1, this.distance = -1, this.eyeHeading = NaN, this.eyePitch = NaN
      }
      pullIn(WW, iW, OW) {
        const mW = this.targets.aimPoint(WW);
        if (!mW) return 1;
        const EW = OW.position,
          NW = KW(mW, EW);
        if (!(NW > 0)) return 1;
        const PW = this.toCamera;
        for (let cW = 0; cW < 3; cW++) PW[cW] = (EW[cW] - mW[cW]) / NW;
        const LW = function(WW, iW, OW) {
          return WW < 0 || iW < WW ? iW : iW + (WW - iW) * Math.exp(-OW / 150)
        }(this.distance, function(WW, iW, OW, mW) {
          const EW = WW.raycastTerrain(iW, OW, mW);
          return null !== EW && Number.isFinite(EW) ? Math.min(mW, Math.max(0, EW - .2)) : mW
        }(this.oZ, mW, PW, NW), iW);
        if (NW - LW < .001) return this.distance = -1, 1;
        this.distance = LW;
        for (let cW = 0; cW < 3; cW++) EW[cW] = mW[cW] + PW[cW] * LW;
        return LW / NW
      }
      placeGoal(WW, iW) {
        const OW = this.settings.offset;
        let mW = OW[0],
          EW = OW[2];
        if ("target" === this.settings.offsetSpace) {
          const WW = this.targets.heading(iW),
            NW = Math.cos(WW),
            PW = Math.sin(WW);
          mW = OW[0] * NW + OW[2] * PW, EW = -OW[0] * PW + OW[2] * NW
        }
        this.goal[0] = WW[0] + mW, this.goal[1] = WW[1] + OW[1], this.goal[2] = WW[2] + EW
      }
    }
    class pW {
      constructor(WW, iW, OW, mW) {
        var EW, NW;
        this.settings = WW, this.oZ = iW, this.sampler = void 0, this.base = void 0, this.resolveTarget = void 0, this.elapsedMs = 0, this.sampler = WW.keyframes.length > 0 ? new uW(WW.keyframes, null === (EW = WW.smooth) || void 0 === EW || EW, null !== (NW = WW.loop) && void 0 !== NW && NW) : null, this.base = (0, cW.g)(mW, (0, cW.m)()), this.resolveTarget = WW => OW.aimPoint(WW)
      }
      update(WW, iW, OW) {
        this.elapsedMs += WW;
        const mW = lW(this.settings, this.oZ);
        this.sampler ? this.sampler.sample(this.elapsedMs, this.resolveTarget, mW, this.base) : this.base.fov = mW, (0, cW.j)(this.base.position, OW.position), OW.fov = this.base.fov, iW.apply(this.base, OW)
      }
      continueFrom(WW) {
        WW instanceof pW && (0, mW.v)(WW.settings.keyframes, this.settings.keyframes) && (this.elapsedMs = WW.elapsedMs, (0, cW.g)(WW.base, this.base))
      }
      reset(WW) {
        vW(this.base, WW), Number.isFinite(this.elapsedMs) || (this.elapsedMs = 0)
      }
    }

    function fW(WW, iW) {
      return (0, mW.w)(WW, iW)
    }
    class CW {
      constructor(WW, iW, OW) {
        var mW;
        this.settings = WW, this.oZ = iW, this.pose = void 0, this.lastGoodPose = void 0, this.look = void 0, this.targets = void 0, this.mode = void 0, this.warnedNonFinite = !1;
        const EW = null !== OW && OW.settings.mode === WW.mode,
          NW = EW ? OW.pose : iW.getDefaultPose();
        this.pose = (0, cW.g)(NW, (0, cW.m)()), this.lastGoodPose = (0, cW.g)(EW ? OW.lastGoodPose : NW, (0, cW.m)()), this.look = new jW(WW.playerLook), this.targets = null !== (mW = null === OW || void 0 === OW ? void 0 : OW.targets) && void 0 !== mW ? mW : new dW(iW);
        const PW = (0, cW.g)(NW, (0, cW.m)());
        EW && OW.look.unapply(PW, PW), this.mode = function(WW, iW, OW, mW) {
          switch (WW.mode) {
            case "fixed":
              return new DW(WW, iW, OW, mW);
            case "follow":
              return new VW(WW, iW, OW, mW);
            case "path":
              return new pW(WW, iW, OW, mW);
            case "frame":
              return new bW(WW, iW, OW, mW)
          }
        }(WW, iW, this.targets, PW), EW && (this.look.continueFrom(OW.look), this.mode.continueFrom(OW.mode))
      }
      update(WW, iW) {
        return this.look.update(WW, iW), this.mode.update(WW, this.look, this.pose), (0, cW.p)(this.pose) ? (0, cW.g)(this.pose, this.lastGoodPose) : (this.warnedNonFinite || (console.warn("Scripted camera produced a non-finite pose; holding the last good one"), this.warnedNonFinite = !0), (0, cW.g)(this.lastGoodPose, this.pose), this.mode.reset((0, cW.p)(this.lastGoodPose) ? this.lastGoodPose : this.oZ.getDefaultPose())), this.pose
      }
    }

    function XW(WW) {
      return [0, 0, WW[2], WW[3]]
    }
    class BW {
      constructor(WW) {
        this.oZ = WW, this.settings = {
          mode: "default"
        }, this.pending = null, this.fade = new LW, this.shot = null, this.blend = null, this.mixed = (0, cW.m)(), this.output = (0, cW.m)(), this.hasOutput = !1, this.loadingPositions = [], this.loadingSlots = Array.from({
          length: 3
        }, (() => [0, 0, 0]))
      }
      setSettings(WW) {
        const iW = (0, wW.c)(WW);
        if ((0, mW.v)(iW, this.pending ? this.pending.settings : this.settings)) return;
        const OW = fW(this.settings, iW);
        if (void 0 !== iW.transition && !OW) return this.pending = {
          settings: iW,
          shot: "default" === iW.mode ? null : new CW(iW, this.oZ, null)
        }, void this.fade.fadeOut(iW.transition);
        const EW = null !== this.pending;
        this.pending = null, !EW && OW || this.fade.fadeIn(mW.o.minTransitionFadeMs), this.show(iW, !1)
      }
      show(WW, iW) {
        var OW, EW;
        if ((0, mW.v)(WW, this.settings)) return;
        const PW = !iW && fW(this.settings, WW);
        this.settings = WW;
        const LW = null !== this.blend && this.blend.elapsedMs > 0,
          wW = (0, cW.g)(this.hasOutput ? this.output : this.oZ.getDefaultPose(), (0, cW.m)());
        if (this.shot = "default" === WW.mode ? null : new CW(WW, this.oZ, iW ? null : this.shot), PW) return;
        const tW = iW || !this.shot && !this.hasOutput ? 0 : null !== (OW = WW.blendInMs) && void 0 !== OW ? OW : 0;
        if (tW <= 0) return void(this.blend = null);
        const ZW = (0, NW.r)(null !== (EW = WW.blendEasing) && void 0 !== EW ? EW : "easeInOut");
        this.blend = {
          from: wW,
          fromScripted: this.hasOutput,
          headingDelta: NaN,
          elapsedMs: 0,
          durationMs: tW,
          easing: LW ? XW(ZW) : ZW
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
      update(WW, iW) {
        const OW = Number.isFinite(WW) && WW > 0 ? WW : 0;
        if (this.fade.advance(OW) && null !== this.pending) {
          const {
            settings: WW
          } = this.pending;
          this.pending = null, this.show(WW, !0)
        }
        this.loadingPositions.length = 0;
        const mW = this.pending;
        if (null !== mW && void 0 !== mW && mW.shot) {
          const WW = "path" === mW.settings.mode ? 0 : OW;
          this.noteLoadingPosition(mW.shot.update(WW, cW.e).position)
        }
        if (!this.isActive()) return this.hasOutput = !1, null;
        const PW = this.shot ? this.shot.update(OW, iW) : this.oZ.getDefaultPose();
        this.shot && this.noteLoadingPosition(PW.position);
        const LW = this.blend;
        if (!LW) return this.writeOutput(PW);
        LW.elapsedMs += OW;
        const wW = Math.min(1, LW.elapsedMs / LW.durationMs);
        if (LW.headingDelta = Number.isFinite(LW.headingDelta) ? (0, EW.C)(LW.headingDelta, PW.heading - LW.from.heading) : (0, EW.y)(LW.from.heading, PW.heading), (0, cW.r)(LW.from, PW, LW.headingDelta, (0, NW.p)(wW, LW.easing), this.mixed), wW >= 1) {
          if (this.blend = null, !this.shot) return this.hasOutput = !1, null
        } else LW.fromScripted && this.noteLoadingPosition(LW.from.position);
        return this.writeOutput(this.mixed)
      }
      noteLoadingPosition(WW) {
        if (WW.every(Number.isFinite)) {
          const iW = this.loadingPositions;
          iW.push((0, cW.j)(WW, this.loadingSlots[iW.length]))
        }
      }
      writeOutput(WW) {
        const iW = this.output;
        (0, cW.p)(WW) ? (0, cW.g)(WW, iW) : this.hasOutput || (0, cW.g)(this.oZ.getDefaultPose(), iW), iW.pitch = (0, EW.g)(iW.pitch);
        const OW = this.oZ.getDefaultFov(),
          NW = Number.isFinite(OW) && OW > 0 && OW < 180,
          PW = NW ? Math.min(mW.o.minFov, OW) : mW.o.minFov,
          LW = NW ? Math.max(mW.o.maxFov, OW) : mW.o.maxFov;
        return iW.fov = Number.isFinite(iW.fov) ? Math.min(LW, Math.max(PW, iW.fov)) : LW, this.hasOutput = !0, iW
      }
    }
  },
  40407: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => EW,
      g: () => LW,
      j: () => PW,
      m: () => NW,
      p: () => wW,
      q: () => cW,
      r: () => tW
    });
    var mW = OW(37915);
    const EW = {
      jH: 0,
      UH: 0
    };

    function NW() {
      return {
        position: [0, 0, 0],
        heading: 0,
        pitch: 0,
        fov: 0
      }
    }

    function PW(WW, iW) {
      return iW[0] = WW[0], iW[1] = WW[1], iW[2] = WW[2], iW
    }

    function LW(WW, iW) {
      return PW(WW.position, iW.position), iW.heading = WW.heading, iW.pitch = WW.pitch, iW.fov = WW.fov, iW
    }

    function cW(WW, iW) {
      return Array.isArray(WW) && WW.length === iW && WW.every(Number.isFinite)
    }

    function wW(WW) {
      return cW(WW.position, 3) && Number.isFinite(WW.heading) && Number.isFinite(WW.pitch) && Number.isFinite(WW.fov)
    }

    function tW(WW, iW, OW, EW, NW) {
      for (let mW = 0; mW < 3; mW++) NW.position[mW] = WW.position[mW] + (iW.position[mW] - WW.position[mW]) * EW;
      return NW.heading = (0, mW.w)(WW.heading + OW * EW), NW.pitch = WW.pitch + (iW.pitch - WW.pitch) * EW, NW.fov = WW.fov + (iW.fov - WW.fov) * EW, NW
    }
  },
  40431: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => yW,
      g: () => lW
    });
    var mW = OW(40428),
      EW = OW(40407);
    const NW = mW.h,
      PW = mW.q,
      LW = mW.k;

    function cW(WW, iW, OW, mW) {
      return Number.isFinite(WW) ? Math.min(OW, Math.max(iW, WW)) : mW
    }

    function wW(WW, iW, OW) {
      return void 0 !== WW && Number.isFinite(WW) ? Math.min(OW, Math.max(iW, WW)) : void 0
    }

    function tW(WW) {
      const iW = mW.o.maxCoordinate;
      return [Math.min(iW, Math.max(-iW, WW[0])), Math.min(iW, Math.max(-iW, WW[1])), Math.min(iW, Math.max(-iW, WW[2]))]
    }

    function ZW(WW) {
      return "string" === typeof WW ? WW : (0, EW.q)(WW, 3) ? tW(WW) : void 0
    }
    const xW = new RegExp(mW.t);

    function lW(WW) {
      return "string" === typeof WW && xW.test(WW)
    }

    function AW(WW) {
      const iW = [];
      if (!Array.isArray(WW)) return iW;
      for (const OW of WW.slice(0, mW.o.maxFrameTargets)) {
        const WW = ZW(OW);
        void 0 === WW || "string" === typeof WW && !lW(WW) || iW.push(WW)
      }
      return iW
    }

    function bW(WW) {
      if (!(0, EW.q)(WW, 3)) return;
      const iW = Math.max(Math.abs(WW[0]), Math.abs(WW[1]), Math.abs(WW[2])),
        OW = Math.hypot(WW[0] / iW, WW[1] / iW, WW[2] / iW);
      return 0 === iW || iW * OW < mW.o.minDirectionLength ? void 0 : [WW[0] / iW / OW, WW[1] / iW / OW, WW[2] / iW / OW]
    }

    function jW(WW) {
      if (void 0 !== WW) return "string" === typeof WW ? NW.includes(WW) ? WW : void 0 : (0, EW.q)(WW, 4) ? [cW(WW[0], 0, 1, 0), cW(WW[1], mW.o.minEasingY, mW.o.maxEasingY, 0), cW(WW[2], 0, 1, 1), cW(WW[3], mW.o.minEasingY, mW.o.maxEasingY, 1)] : "linear"
    }

    function UW(WW) {
      if (WW) return {
        maxYaw: cW(WW.maxYaw, 0, mW.o.maxPlayerLook, 0),
        maxPitch: cW(WW.maxPitch, 0, mW.o.maxPlayerLook, 0),
        returnMs: wW(WW.returnMs, 0, mW.o.maxReturnMs)
      }
    }
    const kW = new RegExp(mW.c);

    function sW(WW) {
      var iW;
      if ("object" !== typeof WW || null === WW) return;
      const OW = mW.o.maxTransitionMs,
        EW = mW.o.minTransitionFadeMs;
      return {
        colour: "string" === typeof WW.colour && kW.test(WW.colour) ? WW.colour : mW.e,
        outMs: cW(WW.outMs, EW, OW, EW),
        holdMs: cW(null !== (iW = WW.holdMs) && void 0 !== iW ? iW : 0, 0, OW, 0),
        inMs: cW(WW.inMs, EW, OW, EW)
      }
    }

    function MW(WW) {
      return !0 === WW || void 0
    }

    function KW(WW) {
      if ("object" !== typeof WW || null === WW) return !1;
      const iW = WW.lookAt;
      return Number.isFinite(WW.timeMs) && (0, EW.q)(WW.position, 3) && (void 0 === iW || "string" === typeof iW || (0, EW.q)(iW, 3))
    }

    function SW(WW) {
      return {
        ...WW,
        timeMs: cW(WW.timeMs, 0, mW.o.maxPathMs, 0),
        position: tW(WW.position),
        lookAt: ZW(WW.lookAt),
        lookDirection: bW(WW.lookDirection),
        fov: wW(WW.fov, mW.o.minFov, mW.o.maxFov),
        easing: jW(WW.easing)
      }
    }

    function YW(WW) {
      const iW = [];
      if (!Array.isArray(WW)) return iW;
      for (const OW of WW.slice(0, mW.o.maxKeyframes)) {
        if (!KW(OW)) continue;
        const WW = SW(OW);
        (0 === iW.length || WW.timeMs > iW[iW.length - 1].timeMs) && iW.push(WW)
      }
      return iW
    }

    function yW(WW) {
      if ("object" !== typeof WW || null === WW) return {
        mode: "default"
      };
      const iW = {
          blendInMs: wW(WW.blendInMs, 0, mW.o.maxBlendInMs),
          blendEasing: jW(WW.blendEasing),
          transition: sW(WW.transition),
          letterbox: MW(WW.letterbox),
          hideHud: MW(WW.hideHud)
        },
        OW = {
          mode: "default",
          ...iW
        };
      if ("default" === WW.mode || "fixed" === WW.mode && !(0, EW.q)(WW.position, 3)) return OW;
      const NW = {
        ...iW,
        fov: wW(WW.fov, mW.o.minFov, mW.o.maxFov),
        playerFacing: (xW = WW.playerFacing, PW.includes(xW) ? xW : void 0),
        playerLook: UW(WW.playerLook)
      };
      var xW, lW, kW;
      switch (WW.mode) {
        case "fixed":
          return {
            ...WW, ...NW, position: tW(WW.position), lookAt: ZW(WW.lookAt), lookDirection: bW(WW.lookDirection)
          };
        case "follow":
          return {
            ...WW, ...NW, target: "string" === typeof WW.target ? WW.target : void 0, anchor: (kW = WW.anchor, LW.includes(kW) ? kW : void 0), lookAt: ZW(WW.lookAt), offset: (lW = WW.offset, Array.isArray(lW) ? [cW(lW[0], -mW.o.maxOffset, mW.o.maxOffset, 0), cW(lW[1], -mW.o.maxOffset, mW.o.maxOffset, 0), cW(lW[2], -mW.o.maxOffset, mW.o.maxOffset, 0)] : [0, 0, 0]), lookDirection: bW(WW.lookDirection), smoothMs: wW(WW.smoothMs, 0, mW.o.maxSmoothMs)
          };
        case "path":
          return {
            ...WW, ...NW, keyframes: YW(WW.keyframes)
          };
        case "frame":
          return {
            ...WW, ...NW, targets: AW(WW.targets), viewHeading: wW(WW.viewHeading, -mW.o.maxFrameHeading, mW.o.maxFrameHeading), viewElevation: wW(WW.viewElevation, 0, mW.o.maxFrameElevation), padding: wW(WW.padding, 0, mW.o.maxFrameDistance), closestDistance: wW(WW.closestDistance, 0, mW.o.maxFrameDistance), furthestDistance: wW(WW.furthestDistance, 0, mW.o.maxFrameDistance), smoothMs: wW(WW.smoothMs, 0, mW.o.maxSmoothMs)
          };
        default:
          return OW
      }
    }
  },
  40454: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => mW
    });
    const mW = {
      message: [{
        translationKey: "general:bunnyHoppingDisabled"
      }],
      timeoutLength: 2e3,
      type: "Error"
    }
  },
  40332: (WW, iW, OW) => {
    function mW(WW, iW) {
      return iW.set(WW), iW
    }
    OW.d(iW, {
      b: () => mW
    })
  },
  40329: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => PW
    });
    var mW = OW(3393),
      EW = OW.n(mW);
    const NW = [1, 1, 1];

    function PW(WW) {
      if (!WW) return [...NW];
      try {
        const [iW, OW, mW] = EW()(WW).rgb().array();
        return [iW / 255, OW / 255, mW / 255]
      } catch (iW) {
        return console.warn(`Invalid groundArrowPath colour "${WW}":`, iW), [...NW]
      }
    }
  },
  40452: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => LW,
      e: () => wW,
      h: () => cW
    });
    var mW = OW(281),
      EW = OW(3941);
    const NW = /\/textures\/skyBoxes\/(space_blue|space_lightblue|space_red_2|space_white)\/(_[np][xyz]\.jpg)$/,
      PW = 512;

    function LW(WW) {
      var iW;
      const OW = Math.min(screen.width, screen.height) * (null !== (iW = (0, mW.d)()) && void 0 !== iW ? iW : (0, EW.p)());
      return Math.max(window.innerHeight * (0, EW.p)(), OW) / (0, EW.t)(WW)
    }

    function cW(WW, iW, OW) {
      return iW / (2 * Math.tan(OW / 2)) > PW ? WW : wW(WW)
    }

    function wW(WW) {
      return WW.map((WW => WW.replace(NW, "/textures/skyBoxes/$1/1024/$2")))
    }
  },
  40324: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => EW
    });
    var mW = OW(182);

    function EW(WW, iW, OW, EW, NW, PW, LW, cW, wW, tW, ZW) {
      const xW = mW.f.jZ,
        lW = NW - OW;
      let AW = lW * (PW - EW);
      tW.fill(0, 0, AW);
      for (let mW = Math.floor((cW - 1) / xW);
        (mW + 1) * xW > LW; mW--) {
        const bW = mW * xW;
        for (let jW = Math.floor(OW / xW); jW * xW < NW; jW++) {
          const UW = jW * xW,
            kW = Math.max(OW - UW, 0),
            sW = Math.min(NW - UW, xW);
          for (let NW = Math.floor(EW / xW); NW * xW < PW; NW++) {
            const MW = WW(jW, mW, NW);
            if (!MW) continue;
            const KW = NW * xW,
              SW = Math.max(EW - KW, 0),
              YW = Math.min(PW - KW, xW),
              yW = MW.zl,
              TW = MW.El,
              JW = TW.data;
            for (let WW = Math.min(cW - 1 - bW, xW - 1); WW >= Math.max(LW - bW, 0); WW--) {
              const mW = yW[WW],
                NW = mW === iW;
              if (NW || 0 !== wW[mW]) {
                for (let iW = kW; iW < sW; iW++)
                  for (let PW = SW; PW < YW; PW++) {
                    const LW = (KW + PW - EW) * lW + UW + iW - OW;
                    if (0 !== tW[LW]) continue;
                    const cW = NW ? JW[TW.index(iW, WW, PW)] : mW;
                    0 !== wW[cW] && (tW[LW] = cW, ZW[LW] = bW + WW, AW--)
                  }
                if (0 === AW) return
              }
            }
          }
        }
      }
    }
  },
  35056: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => NW,
      e: () => LW,
      i: () => PW,
      l: () => EW,
      p: () => mW
    });
    const mW = {
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
      EW = "/textures/dayNight/sun.png",
      NW = "/textures/dayNight/moon.png",
      PW = "/textures/dayNight/stars",
      LW = ["_px.png", "_py.png", "_pz.png", "_nx.png", "_ny.png", "_nz.png"]
  },
  40428: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => ZW,
      e: () => xW,
      h: () => mW,
      k: () => EW,
      o: () => wW,
      q: () => NW,
      t: () => tW,
      v: () => cW,
      w: () => LW
    });
    const mW = ["linear", "easeIn", "easeOut", "easeInOut"],
      EW = ["feet", "eye"],
      NW = ["movement", "camera", "cursor"],
      PW = ["targets", "playerFacing", "blendInMs", "blendEasing", "transition", "letterbox", "hideHud"];

    function LW(WW, iW) {
      return cW(WW, iW, PW)
    }

    function cW(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      if (WW === iW || Number.isNaN(WW) && Number.isNaN(iW)) return !0;
      if ("object" !== typeof WW || "object" !== typeof iW || null === WW || null === iW || Array.isArray(WW) !== Array.isArray(iW)) return !1;
      const mW = WW,
        EW = iW;
      for (const NW of new Set([...Object.keys(mW), ...Object.keys(EW)]))
        if (!OW.includes(NW) && !cW(mW[NW], EW[NW])) return !1;
      return !0
    }
    const wW = {
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
      tW = "^-[1-9][0-9]*$",
      ZW = "^#[0-9a-fA-F]{6}$",
      xW = "#000000"
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);