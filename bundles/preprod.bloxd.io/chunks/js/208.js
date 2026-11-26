export const id = 208;
export const ids = [208];
export const modules = {
  39843: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => YB
    });
    class YB {
      constructor(BB, OB) {
        this.read = BB, this.apply = OB, this.release = null
      }
      turn(BB, OB) {
        const GB = null === this.release ? this.read() : this.release.transitionMs;
        this.stop(!1), this.apply({
          forcedCameraDirectionTransitionMs: OB,
          forcedCameraDirection: [BB[0], BB[1], BB[2]]
        }), this.release = {
          timer: setTimeout((() => {
            this.stop(!0)
          }), OB + 100),
          transitionMs: GB
        }
      }
      dispose() {
        this.stop(!0)
      }
      stop(BB) {
        null !== this.release && (clearTimeout(this.release.timer), BB && this.apply({
          forcedCameraDirection: null,
          forcedCameraDirectionTransitionMs: this.release.transitionMs
        }), this.release = null)
      }
    }
  },
  39342: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => QB,
      f: () => DB
    });
    const YB = new Map;

    function DB(BB, OB) {
      YB.set(BB, OB)
    }

    function QB(BB) {
      return BB ? YB.get(BB) : void 0
    }
  },
  37058: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => MB,
      c: () => jB,
      g: () => JB,
      h: () => yB,
      k: () => WB
    });
    var YB = GB(645),
      DB = GB(1834),
      QB = GB(5287);
    class oB {
      constructor(BB, OB) {
        this.width = BB, this.CP = OB, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(BB * OB)
      }
      push(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const GB = this.data,
          YB = this.next * this.width;
        for (let DB = 0; DB < this.width; DB++) GB[YB + DB] = BB[OB + DB];
        this.next = (this.next + 1) % this.CP, this.size = Math.min(this.size + 1, this.CP)
      }
      rows() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1 / 0;
        const GB = [],
          YB = (this.next - this.size + this.CP) % this.CP;
        for (let DB = 0; DB < this.size; DB++) {
          const QB = (YB + DB) % this.CP * this.width;
          this.data[QB + BB] >= OB && GB.push(Array.from(this.data.subarray(QB, QB + this.width)))
        }
        return GB
      }
      lines() {
        return this.rows().map((BB => BB.join(",")))
      }
    }
    const jB = 10,
      yB = {
        idle: 0,
        GP: 1,
        vI: 2,
        YF: 3,
        pZ: 4
      },
      JB = {
        none: 0,
        skipped: 1,
        paced: 2,
        drawn: 3
      },
      MB = {
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
      PB = 12e3,
      zB = ["nowMs", "dtMs", "rawX", "rawY", "turnedX", "turnedY", "outcome", "velocityX", "velocityY", "limit"],
      lB = ["timeStamp", "nowMs", "movementX", "movementY", "locked"],
      pB = ["nowMs", "dtMs", "heading", "pitch", "kind"],
      qB = ["nowMs", "source", "headingBefore", "pitchBefore", "headingAfter", "pitchAfter"],
      ZB = ["nowMs", "change", "count"];

    function NB(BB) {
      return "js" === BB ? MB.jsClient : MB.wasmClient
    }
    class RB {
      constructor() {
        this.steps = new oB(jB, PB), this.events = new oB(lB.length, PB), this.frames = new oB(pB.length, PB), this.cameraSets = new oB(QB.h, 256), this.changes = new oB(ZB.length, 256)
      }
    }
    const WB = new class {
      constructor() {
        this.rings = null, this.sample = new Float64Array(lB.length), this.startedClient = null, this.startedAtMs = 0
      }
      get client() {
        return this.startedClient
      }
      start(BB, OB) {
        this.startedClient = BB, this.startedAtMs = performance.now(), null !== this.rings ? this.change(NB(BB)) : OB && this.allocate()
      }
      lockGained() {
        this.allocate(), this.change(MB.lockGained)
      }
      allocate() {
        null === this.rings && (this.rings = new RB, null !== this.startedClient && this.changeAt(this.startedAtMs, NB(this.startedClient), 1))
      }
      step(BB, OB) {
        var GB;
        BB[OB + 6] !== yB.pZ && (null === (GB = this.rings) || void 0 === GB || GB.steps.push(BB, OB))
      }
      cameraSet(BB, OB) {
        var GB;
        null === (GB = this.rings) || void 0 === GB || GB.cameraSets.push(BB, OB)
      }
      mouseMove(BB, OB) {
        const GB = this.rings;
        if (null === GB) return;
        const YB = this.sample;
        YB[0] = BB.timeStamp, YB[1] = performance.now(), YB[2] = BB.movementX, YB[3] = BB.movementY, YB[4] = OB ? 1 : 0, GB.events.push(YB)
      }
      frame(BB, OB, GB, YB) {
        const DB = this.rings;
        if (null === DB || YB === JB.none) return;
        const QB = this.sample;
        QB[0] = performance.now(), QB[1] = BB, QB[2] = OB, QB[3] = GB, QB[4] = YB, DB.frames.push(QB)
      }
      change(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.changeAt(performance.now(), BB, OB)
      }
      changeAt(BB, OB, GB) {
        const YB = this.rings;
        if (null === YB) return;
        const DB = this.sample;
        DB[0] = BB, DB[1] = OB, DB[2] = GB, YB.changes.push(DB)
      }
      dumpText() {
        var BB, OB;
        const GB = this.rings;
        return [`look records (${this.startedClient}): ${zB.join(",")}`, ...null !== (BB = null === GB || void 0 === GB ? void 0 : GB.steps.lines()) && void 0 !== BB ? BB : [], `mousemove events: ${lB.join(",")}`, ...null !== (OB = null === GB || void 0 === GB ? void 0 : GB.events.lines()) && void 0 !== OB ? OB : []].join("\n")
      }
      toJson(BB, OB) {
        var GB;
        const DB = BB - 6e4,
          QB = this.rings,
          oB = function(BB, OB) {
            var GB;
            let YB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            const QB = null !== (GB = null === BB || void 0 === BB ? void 0 : BB.rows(YB, DB)) && void 0 !== GB ? GB : [];
            return {
              columns: OB,
              fromMs: 0 === QB.length ? null : QB[0][YB],
              rows: QB
            }
          };
        return {
          version: YB.b,
          client: null !== (GB = this.startedClient) && void 0 !== GB ? GB : "not started",
          savedAt: (new Date).toISOString(),
          savedAtMs: BB,
          keptMs: 6e4,
          page: window.location.href,
          userAgent: navigator.userAgent,
          devicePixelRatio: window.devicePixelRatio,
          screen: {
            width: window.screen.width,
            height: window.screen.height
          },
          bZ: null !== document.pointerLockElement,
          visibility: document.visibilityState,
          ...OB,
          outcomes: yB,
          frameKinds: JB,
          changes: MB,
          lookSteps: oB(null === QB || void 0 === QB ? void 0 : QB.steps, zB),
          mouseMoves: oB(null === QB || void 0 === QB ? void 0 : QB.events, lB, 1),
          frames: oB(null === QB || void 0 === QB ? void 0 : QB.frames, pB),
          cameraSets: oB(null === QB || void 0 === QB ? void 0 : QB.cameraSets, qB),
          pageChanges: oB(null === QB || void 0 === QB ? void 0 : QB.changes, ZB)
        }
      }
      save(BB) {
        const OB = JSON.stringify(this.toJson(performance.now(), BB));
        (0, DB.c)(new Blob([OB], {
          type: "application/json"
        }), `bloxd-mouse-look-${(new Date).toISOString().replace(/[:.]/g,"-")}.json`)
      }
    }
  },
  40390: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => DB
    });
    var YB = GB(38884);

    function DB(BB, OB, GB) {
      var DB, QB, oB, jB, yB, JB, MB;
      const PB = (0, YB.d)(BB, OB, GB[0], GB[1], GB[2]),
        zB = PB ? null !== (DB = PB.textCell) && void 0 !== DB ? DB : PB.rect.anchor : GB,
        lB = OB(zB[0], zB[1], zB[2]);
      return {
        pos: [GB[0], GB[1], GB[2]],
        noticeboardSpan: PB && {
          width: PB.rect.width,
          height: PB.rect.height
        },
        text: null !== (QB = null === lB || void 0 === lB || null === (oB = lB.persisted) || void 0 === oB || null === (jB = oB.shared) || void 0 === jB ? void 0 : jB.text) && void 0 !== QB ? QB : "",
        textSize: null !== (yB = null === lB || void 0 === lB || null === (JB = lB.persisted) || void 0 === JB || null === (MB = JB.shared) || void 0 === MB ? void 0 : MB.textSize) && void 0 !== yB ? yB : null
      }
    }
  },
  39167: (BB, OB, GB) => {
    function YB(BB) {
      switch (BB.kind) {
        case void 0:
        case "flatEmissive":
          return !1;
        case "chevronPath":
        case "furnaceFire":
          return !0
      }
    }
    GB.d(OB, {
      b: () => DB,
      e: () => QB,
      g: () => YB
    });
    const DB = 4,
      QB = 3
  },
  39879: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => DB,
      e: () => QB
    });
    var YB = GB(353);
    const DB = new Set(["bedwars", "bridgeBattle", "buildAFactory2", "classic", "clutch", "containmentBreach", "cooking", "defusal", "frontline", "goalRush", "greenville", "hideseek", "luckyBedwars", "murderMystery", "ninetyNineNights", "oneBlock", "plots", "pvpCiv", "secretSanta", "skyIslands", "skyblock", "tsunami"]);
    class QB {
      constructor(BB) {
        this.importGame = BB, this.loads = new Map, this.loaded = new Map
      }
      load(BB) {
        const OB = (0, YB.ac)(BB);
        if (!DB.has(OB)) return Promise.resolve(void 0);
        let GB = this.loads.get(OB);
        return GB || (GB = this.importGame(OB).then((BB => {
          const GB = BB.default;
          if ("function" !== typeof GB) throw new Error(`${OB}'s client code has no default-exported factory`);
          return this.loaded.set(OB, GB), GB
        })).catch((BB => {
          throw this.loads.delete(OB), BB
        })), this.loads.set(OB, GB)), GB
      }
      loadedFactory(BB) {
        const OB = (0, YB.ac)(BB);
        if (!DB.has(OB)) return;
        const GB = this.loaded.get(OB);
        if (!GB) throw new Error(`${OB}'s client code started before it loaded`);
        return GB
      }
    }
  },
  39876: (BB, OB, GB) => {
    function YB(BB, OB) {
      return Object.values({
        ...BB,
        ...OB
      }).filter((BB => null !== BB))
    }
    GB.d(OB, {
      d: () => YB
    })
  },
  40396: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => oB
    });
    var YB = GB(10027),
      DB = GB(34813),
      QB = GB(3708);

    function oB(BB) {
      if (BB === YB.c) return 0;
      const OB = (0, QB.c)(BB);
      if (void 0 !== OB && OB <= DB.MAX_BLOCK_ID) return OB;
      const GB = (0, QB.c)(BB.split("|")[0]);
      if (void 0 !== GB && GB <= DB.MAX_BLOCK_ID && (0, DB.rootMetaDescOf)(GB) === BB) return GB;
      throw new Error(`Invalid block name. You sent ${BB}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`)
    }
  },
  39922: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => DB
    });
    var YB = GB(16);
    class DB {
      constructor(BB) {
        this.screen = BB, this.hidesHud = !1
      }
      show(BB, OB) {
        this.screen.setFade(BB.colour, BB.alpha), this.screen.setLetterbox(!0 === OB.letterbox, BB.alpha < 1), this.setHudHidden(!0 === OB.hideHud)
      }
      clear() {
        this.screen.clear(), this.setHudHidden(!1)
      }
      setHudHidden(BB) {
        this.hidesHud !== BB && (this.hidesHud = BB, YB.c.set({
          isUiHiddenByCamera: BB
        }))
      }
    }
  },
  39892: (BB, OB, GB) => {
    GB.d(OB, {
      B: () => jB,
      C: () => MB,
      c: () => YB,
      d: () => zB,
      e: () => PB,
      h: () => oB,
      l: () => pB,
      p: () => yB,
      t: () => qB,
      x: () => JB
    });
    const YB = Math.PI / 2 - .001,
      DB = 2 * Math.PI,
      QB = 1e-9;

    function oB(BB, OB) {
      OB.heading = BB.heading, OB.pitch = BB.pitch
    }

    function jB(BB, OB) {
      const GB = OB - BB;
      return GB - DB * Math.floor((GB + Math.PI) / DB)
    }

    function yB(BB, OB, GB) {
      return BB + jB(BB, OB) * GB
    }

    function JB(BB) {
      if (!Number.isFinite(BB)) return BB;
      const OB = BB - DB * Math.floor(BB / DB);
      return OB < DB ? OB : 0
    }

    function MB(BB, OB) {
      return BB + jB(BB, OB)
    }

    function PB(BB) {
      return Math.max(-YB, Math.min(YB, BB))
    }

    function zB(BB, OB, GB) {
      const YB = Math.cos(OB);
      return GB[0] = YB * Math.sin(BB), GB[1] = -Math.sin(OB), GB[2] = YB * Math.cos(BB), GB
    }

    function lB(BB, OB, GB, YB) {
      const DB = Math.sqrt(BB * BB + GB * GB);
      return DB < QB && Math.abs(OB) < QB || (DB >= QB && (YB.heading = Math.atan2(BB, GB)), YB.pitch = PB(Math.atan2(-OB, DB) + 0)), YB
    }

    function pB(BB, OB) {
      return lB(BB[0], BB[1], BB[2], OB)
    }

    function qB(BB, OB, GB) {
      return lB(OB[0] - BB[0], OB[1] - BB[1], OB[2] - BB[2], GB)
    }
  },
  39913: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => QB,
      h: () => DB
    });
    var YB = GB(39892);

    function DB(BB) {
      var OB;
      const GB = "default" === BB.mode ? "movement" : null !== (OB = BB.playerFacing) && void 0 !== OB ? OB : "movement";
      return "cursor" === GB ? {
        facing: GB,
        mouseTurns: null
      } : {
        facing: GB,
        mouseTurns: "default" !== BB.mode && void 0 !== BB.playerLook ? "look" : "view"
      }
    }

    function QB(BB, OB, GB, DB, QB, oB) {
      return oB.Rm = 0, oB.Wm = 0, oB.pointedAt = void 0, void 0 !== DB ? QB ? (oB.pointedAt = DB, BB) : (0, YB.x)(DB.heading) : QB ? (oB.Rm = OB, oB.Wm = GB, BB) : (0, YB.x)(BB + OB)
    }
  },
  39898: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => aB
    });
    var YB = GB(39903),
      DB = GB(39892),
      QB = GB(37687);

    function oB(BB, OB, GB, YB) {
      if (!(YB > 0)) return OB;
      const DB = OB > BB ? Math.min(OB, BB + GB / YB) : Math.max(OB, BB - GB / YB);
      return Math.abs(OB - DB) < 1e-9 ? OB : DB
    }
    class jB {
      constructor() {
        this.phase = null, this.outMs = 0, this.holdMs = 0, this.inMs = 0, this.heldMs = 0, this.sinceTurnMs = 1 / 0, this.clearMs = 1 / 0, this.waiting = null, this.screen = {
          colour: YB.d,
          alpha: 0
        }
      }
      getScreen() {
        return this.screen
      }
      fadeOut(BB) {
        !this.isGoingOut() && this.sinceTurnMs < YB.j.minFadeTurnMs ? this.waiting = {
          turn: "out",
          transition: BB
        } : (this.waiting = null, this.startOut(BB))
      }
      fadeIn(BB) {
        this.isGoingOut() ? this.sinceTurnMs < YB.j.minFadeTurnMs ? this.waiting = {
          turn: "in",
          minMs: BB
        } : (this.waiting = null, this.startIn(BB)) : this.waiting = null
      }
      advance(BB) {
        const OB = this.waiting;
        if (null === OB) return this.step(BB);
        const GB = YB.j.minFadeTurnMs - this.sinceTurnMs;
        if (GB > BB) return this.step(BB);
        const DB = this.step(GB);
        return this.waiting = null, "out" === OB.turn ? this.startOut(OB.transition) : this.startIn(OB.minMs), this.step(BB - GB) || DB
      }
      isGoingOut() {
        return "out" === this.phase || "hold" === this.phase
      }
      startOut(BB) {
        ("in" === this.phase || null === this.phase && this.clearMs < YB.j.minFadeTurnMs) && (this.sinceTurnMs = 0), this.phase = "out", 0 === this.screen.alpha && (this.screen.colour = BB.colour), this.outMs = BB.outMs, this.holdMs = BB.holdMs, this.inMs = BB.inMs
      }
      startIn(BB) {
        this.isGoingOut() && (this.sinceTurnMs = 0), this.phase = "in", this.inMs = Math.max(BB, this.inMs)
      }
      step(BB) {
        const OB = this.screen;
        this.sinceTurnMs += BB, null === this.phase && (this.clearMs += BB);
        let GB = !1,
          DB = BB;
        if ("out" === this.phase) {
          const YB = (1 - OB.alpha) * this.outMs;
          if (OB.alpha = oB(OB.alpha, 1, BB, this.outMs), OB.alpha < 1) return !1;
          this.phase = "hold", this.heldMs = 0, DB = Math.max(0, BB - YB), GB = !0
        }
        let QB = BB;
        if ("hold" === this.phase) {
          this.heldMs += DB;
          const BB = Math.min(this.heldMs - this.holdMs, this.sinceTurnMs - YB.j.minFadeTurnMs);
          if (BB < 0 || GB) return GB;
          this.phase = "in", this.sinceTurnMs = BB, QB = BB
        }
        return "in" === this.phase && (OB.alpha = oB(OB.alpha, 0, QB, this.inMs), OB.alpha <= 0 && (this.phase = null, this.clearMs = 0)), GB
      }
    }
    var yB = GB(39889),
      JB = GB(39910),
      MB = GB(1998),
      PB = GB(37236);

    function zB(BB, OB) {
      for (let GB = 0; GB < OB.length; GB++) OB[GB] = BB[GB]
    }

    function lB(BB, OB) {
      var GB;
      return null !== (GB = BB.fov) && void 0 !== GB ? GB : OB.getDefaultFov()
    }

    function pB(BB, OB, GB, YB, DB) {
      const QB = 2 / YB,
        oB = Math.exp(-QB * DB);
      for (let jB = 0; jB < BB.length; jB++) {
        const YB = BB[jB] - GB[jB],
          yB = (OB[jB] + QB * YB) * DB;
        BB[jB] = GB[jB] + (YB + yB) * oB, OB[jB] = (OB[jB] - QB * yB) * oB
      }
    }
    class qB {
      constructor(BB, OB, GB, YB) {
        var QB, oB, jB, yB, JB;
        this.settings = BB, this.mP = OB, this.targets = GB, this.base = void 0, this.closestDistance = void 0, this.furthestDistance = void 0, this.goal = void 0, this.framedTargets = !1, this.smoothed = [0, 0, 0, 0, 0, 0], this.lZ = [0, 0, 0, 0, 0, 0], this.started = !1, this.angles = {
          heading: 0,
          pitch: 0
        }, this.points = [], this.forward = [0, 0, 0], this.base = {
          heading: (0, DB.x)((0, MB.h)(null !== (QB = BB.viewHeading) && void 0 !== QB ? QB : 0)),
          pitch: (0, DB.e)((0, MB.h)(null !== (oB = BB.viewElevation) && void 0 !== oB ? oB : 45))
        }, this.closestDistance = null !== (jB = BB.closestDistance) && void 0 !== jB ? jB : Math.min(6, null !== (yB = BB.furthestDistance) && void 0 !== yB ? yB : 1 / 0), this.furthestDistance = null !== (JB = BB.furthestDistance) && void 0 !== JB ? JB : Math.max(64, this.closestDistance);
        const PB = (0, DB.d)(this.base.heading, this.base.pitch, this.forward),
          zB = YB.position,
          lB = this.closestDistance;
        this.goal = [zB[0] + PB[0] * lB, zB[1] + PB[1] * lB, zB[2] + PB[2] * lB, lB, this.base.heading, this.base.pitch]
      }
      update(BB, OB, GB) {
        var YB, QB;
        this.placeGoal(null !== (YB = this.settings.fov) && void 0 !== YB ? YB : this.mP.getBaseFov()), this.goal[4] = (0, DB.C)(this.smoothed[4], this.base.heading), this.goal[5] = this.base.pitch;
        const oB = null !== (QB = this.settings.smoothMs) && void 0 !== QB ? QB : 400;
        !this.started || oB < 1 ? (zB(this.goal, this.smoothed), this.lZ.fill(0), this.started = !0) : pB(this.smoothed, this.lZ, this.goal, oB, BB), this.angles.heading = this.smoothed[4], this.angles.pitch = (0, DB.e)(this.smoothed[5]), OB.apply(this.angles, GB);
        const jB = (0, DB.d)(GB.heading, GB.pitch, this.forward);
        for (let DB = 0; DB < 3; DB++) GB.position[DB] = this.smoothed[DB] - jB[DB] * this.smoothed[3];
        GB.fov = lB(this.settings, this.mP)
      }
      continueFrom(BB) {
        BB instanceof qB && (zB(BB.goal, this.goal), zB(BB.smoothed, this.smoothed), zB(BB.lZ, this.lZ), this.framedTargets = BB.framedTargets, this.started = BB.started)
      }
      reset() {
        this.lZ.fill(0), this.started = !1
      }
      placeGoal(BB) {
        var OB;
        let GB = 0;
        for (const MB of this.settings.targets) {
          const BB = this.targets.currentAimPoint(MB);
          BB && (0, yB.h)(BB, this.pointAt(GB++))
        }
        if (GB > 0) this.framedTargets = !0;
        else if (!this.framedTargets) {
          const BB = this.targets.aimPoint(this.mP.localPlayerId);
          BB && (0, yB.h)(BB, this.pointAt(GB++))
        }
        const YB = this.goal;
        if (0 === GB) return void(YB[3] = this.withinDistances(YB[3]));
        for (let yB = 0; yB < 3; yB++) {
          let BB = 1 / 0,
            OB = -1 / 0;
          for (let YB = 0; YB < GB; YB++) BB = Math.min(BB, this.points[YB][yB]), OB = Math.max(OB, this.points[YB][yB]);
          YB[yB] = (BB + OB) / 2
        }
        let DB = 0;
        for (let yB = 0; yB < GB; yB++) {
          const BB = this.points[yB];
          DB = Math.max(DB, Math.hypot(BB[0] - YB[0], BB[1] - YB[1], BB[2] - YB[2]))
        }
        const QB = Math.tan((0, MB.h)(BB) / 2),
          oB = Math.atan(QB * (!0 === this.settings.letterbox ? PB.g : 1)),
          jB = Math.atan(QB * this.mP.getAspectRatio()),
          JB = (DB + (null !== (OB = this.settings.padding) && void 0 !== OB ? OB : 2)) / Math.sin(Math.min(oB, jB));
        YB[3] = this.withinDistances(JB)
      }
      withinDistances(BB) {
        return Math.min(this.furthestDistance, Math.max(this.closestDistance, BB))
      }
      pointAt(BB) {
        return BB === this.points.length && this.points.push([0, 0, 0]), this.points[BB]
      }
    }
    class ZB {
      constructor(BB) {
        this.limits = BB, this.yawOffset = 0, this.pitchOffset = 0, this.idleMs = 0, this.pointedAt = null
      }
      continueFrom(BB) {
        this.limits && (this.yawOffset = BB.yawOffset, this.pitchOffset = BB.pitchOffset, this.idleMs = BB.idleMs)
      }
      update(BB, OB) {
        const GB = this.limits;
        if (!GB) return;
        const YB = Number.isFinite(OB.Rm) ? OB.Rm : 0,
          DB = Number.isFinite(OB.Wm) ? OB.Wm : 0;
        if (OB.pointedAt) this.idleMs = 0, this.pointedAt = {
          heading: OB.pointedAt.heading,
          pitch: OB.pointedAt.pitch
        };
        else if (0 !== YB || 0 !== DB) this.idleMs = 0, this.yawOffset += YB, this.pitchOffset += DB;
        else {
          const OB = Math.max(0, this.idleMs + BB - 200) - Math.max(0, this.idleMs - 200);
          if (this.idleMs += BB, void 0 !== GB.returnMs && OB > 0) {
            const BB = GB.returnMs > 0 ? Math.exp(-3 * OB / GB.returnMs) : 0;
            this.yawOffset *= BB, this.pitchOffset *= BB
          }
        }
        this.clampOffsets(GB)
      }
      clampOffsets(BB) {
        if (BB.maxYaw >= 180) this.yawOffset = (0, DB.B)(0, this.yawOffset);
        else {
          const OB = (0, MB.h)(BB.maxYaw);
          this.yawOffset = Math.max(-OB, Math.min(OB, this.yawOffset))
        }
        const OB = (0, MB.h)(BB.maxPitch);
        this.pitchOffset = Math.max(-OB, Math.min(OB, this.pitchOffset))
      }
      apply(BB, OB) {
        this.pointedAt && this.limits && (this.yawOffset = (0, DB.B)(BB.heading, this.pointedAt.heading), this.pitchOffset = this.pointedAt.pitch - BB.pitch, this.pointedAt = null, this.clampOffsets(this.limits));
        const GB = (0, DB.e)(BB.pitch + this.pitchOffset);
        this.pitchOffset = GB - BB.pitch, OB.heading = (0, DB.x)(BB.heading + this.yawOffset), OB.pitch = GB
      }
      unapply(BB, OB) {
        OB.heading = (0, DB.x)(BB.heading - this.yawOffset), OB.pitch = (0, DB.e)(BB.pitch - this.pitchOffset)
      }
    }
    const NB = 1e-6;

    function RB(BB) {
      return Math.sqrt(BB[0] * BB[0] + BB[1] * BB[1] + BB[2] * BB[2])
    }

    function WB(BB, OB, GB, YB, DB) {
      const QB = DB * DB,
        oB = QB * DB;
      return (2 * oB - 3 * QB + 1) * BB + (oB - 2 * QB + DB) * OB + (-2 * oB + 3 * QB) * GB + (oB - QB) * YB
    }

    function AB(BB, OB, GB, YB, DB) {
      const QB = DB * DB;
      return (6 * QB - 6 * DB) * BB + (3 * QB - 4 * DB + 1) * OB + (-6 * QB + 6 * DB) * GB + (3 * QB - 2 * DB) * YB
    }

    function VB(BB, OB) {
      const GB = OB[0] - BB[0],
        YB = OB[1] - BB[1],
        DB = OB[2] - BB[2];
      return Math.sqrt(GB * GB + YB * YB + DB * DB)
    }

    function SB(BB, OB, GB, YB, DB, QB) {
      for (let oB = 0; oB < 3; oB++) QB[oB] = DB ? BB[oB] * YB : GB[oB] - OB[oB];
      return DB && function(BB, OB) {
        const GB = RB(BB);
        if (GB > OB) {
          const YB = OB / GB;
          BB[0] *= YB, BB[1] *= YB, BB[2] *= YB
        }
      }(QB, 3 * VB(OB, GB)), QB
    }

    function nB(BB, OB, GB, YB) {
      for (let DB = 0; DB < 3; DB++) YB[DB] = 6 * (OB[DB] - BB[DB]) - 2 * GB[DB];
      if (RB(YB) < NB)
        for (let DB = 0; DB < 3; DB++) YB[DB] = OB[DB] - BB[DB];
      return YB
    }

    function UB(BB, OB) {
      return [2 * OB[0] - BB[0], 2 * OB[1] - BB[1], 2 * OB[2] - BB[2]]
    }

    function fB(BB, OB, GB, YB, DB, QB, oB) {
      if (!QB && !oB) return 0;
      const jB = QB ? BB : 2 * OB - GB,
        yB = oB ? GB : 2 * OB - BB,
        JB = QB ? YB : DB,
        MB = oB ? DB : YB,
        PB = (OB - jB) / JB,
        zB = (yB - OB) / MB;
      if (PB * zB <= 0) return 0;
      const lB = (yB - jB) / (JB + MB),
        pB = 3 * Math.min(Math.abs(PB), Math.abs(zB));
      return Math.max(-pB, Math.min(pB, lB))
    }

    function kB(BB, OB, GB, YB, DB, QB, oB) {
      const {
        u: jB,
        segmentMs: yB
      } = BB;
      if (!BB.curved) return GB + (YB - GB) * jB;
      return WB(GB, fB(OB, GB, YB, BB.beforeMs, yB, QB, !0) * yB, YB, fB(GB, YB, DB, yB, BB.afterMs, !0, oB) * yB, jB)
    }

    function dB(BB) {
      return Math.abs(BB.pitch) >= DB.c
    }
    class KB {
      constructor(BB, OB, GB, YB, DB) {
        this.nodes = BB, this.prevNodes = GB, this.nextNodes = YB, this.tangents = void 0, this.derivative = [0, 0, 0], this.beforeAngles = {
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
        }, this.tangents = BB.map(((BB, GB) => this.nodeTangent(OB, DB, GB)))
      }
      sample(BB, OB, GB) {
        const {
          index: YB,
          toIndex: QB,
          segmentMs: oB,
          curved: jB
        } = BB, yB = this.fromAngles, JB = this.toAngles, MB = this.nodeAngles(YB, GB.position, OB, yB), PB = this.nodeAngles(QB, GB.position, OB, JB);
        if (oB > 0 && "aim" !== MB && "aim" !== PB && this.liveTangent(BB, yB)) return GB.heading = (0, DB.x)(yB.heading), void(GB.pitch = yB.pitch);
        if ("none" === MB && "none" === PB) return;
        !jB && oB > 0 && ("tangent" === MB && this.liveTangent(BB, yB), "tangent" === PB && this.liveTangent(BB, JB)), "none" === MB ? (0, DB.h)(JB, yB) : "none" === PB && (0, DB.h)(yB, JB);
        const zB = jB && BB.beforeIndex >= 0 && "none" !== this.nodeAngles(BB.beforeIndex, GB.position, OB, this.beforeAngles),
          lB = jB && BB.afterIndex >= 0 && "none" !== this.nodeAngles(BB.afterIndex, GB.position, OB, this.afterAngles),
          pB = (0, DB.C)(yB.heading, JB.heading),
          qB = kB(BB, zB ? (0, DB.C)(yB.heading, this.beforeAngles.heading) : 0, yB.heading, pB, lB ? (0, DB.C)(pB, this.afterAngles.heading) : 0, zB, lB);
        GB.heading = (0, DB.x)(qB), GB.pitch = (0, DB.e)(kB(BB, this.beforeAngles.pitch, yB.pitch, JB.pitch, this.afterAngles.pitch, zB, lB))
      }
      nodeAngles(BB, OB, GB, YB) {
        const DB = this.rawNodeAngles(BB, OB, GB, YB);
        return "none" !== DB && dB(YB) && !this.borrowHeading(this.prevNodes[BB], OB, GB, YB) && this.borrowHeading(this.nextNodes[BB], OB, GB, YB), DB
      }
      borrowHeading(BB, OB, GB, YB) {
        const DB = this.borrowedAngles;
        return !(BB < 0 || "none" === this.rawNodeAngles(BB, OB, GB, DB) || dB(DB)) && (YB.heading = DB.heading, !0)
      }
      rawNodeAngles(BB, OB, GB, YB) {
        const QB = this.nodes[BB].keyframe;
        if (QB.lookDirection) return (0, DB.l)(QB.lookDirection, YB), "aim";
        if (void 0 !== QB.lookAt) {
          const BB = GB(QB.lookAt);
          if (BB) return (0, DB.t)(OB, BB, YB), "aim"
        }
        const oB = this.tangents[BB];
        return oB ? ((0, DB.h)(oB, YB), "tangent") : "none"
      }
      liveTangent(BB, OB) {
        const GB = this.nodes[BB.index].position,
          YB = this.nodes[BB.toIndex].position,
          QB = this.derivative;
        for (let DB = 0; DB < 3; DB++) QB[DB] = AB(GB[DB], BB.fromTangent[DB], YB[DB], BB.toTangent[DB], BB.u);
        return RB(QB) > 1e-9 ? ((0, DB.l)(QB, OB), !0) : !(VB(GB, YB) < NB) && ((0, DB.l)(nB(GB, YB, BB.u < .5 ? BB.toTangent : BB.fromTangent, QB), OB), !0)
      }
      nodeTangent(BB, OB, GB) {
        var YB;
        const QB = BB[GB];
        if (RB(QB) > 1e-9) return (0, DB.l)(QB, {
          heading: 0,
          pitch: 0
        });
        const oB = null !== (YB = this.restDirectionTo(GB, GB + 1, BB, OB)) && void 0 !== YB ? YB : this.restDirectionTo(GB, GB - 1, BB, OB);
        return oB ? (0, DB.l)(oB, {
          heading: 0,
          pitch: 0
        }) : null
      }
      restDirectionTo(BB, OB, GB, YB) {
        const DB = this.nodes[BB],
          QB = this.nodes[OB];
        if (!QB || VB(DB.position, QB.position) < NB) return null;
        const [oB, jB] = OB > BB ? [DB, QB] : [QB, DB], yB = SB(GB[OB], oB.position, jB.position, jB.timeMs - oB.timeMs, YB, [0, 0, 0]);
        return nB(oB.position, jB.position, yB, [0, 0, 0])
      }
    }

    function uB(BB, OB) {
      const GB = BB.lookDirection || OB.lookDirection ? function(BB, OB) {
        if (!BB || !OB) return BB === OB;
        const GB = RB(BB),
          YB = RB(OB);
        return Math.hypot(BB[0] / GB - OB[0] / YB, BB[1] / GB - OB[1] / YB, BB[2] / GB - OB[2] / YB) < NB
      }(BB.lookDirection, OB.lookDirection) : (YB = BB.lookAt, DB = OB.lookAt, "object" !== typeof YB || "object" !== typeof DB ? YB === DB : VB(YB, DB) < NB);
      var YB, DB;
      return VB(BB.position, OB.position) < NB && BB.fov === OB.fov && GB
    }
    class mB {
      constructor(BB, OB, GB) {
        if (this.smooth = OB, this.nodes = void 0, this.velocities = void 0, this.prevNodes = void 0, this.nextNodes = void 0, this.prevGaps = void 0, this.nextGaps = void 0, this.loopMs = void 0, this.aim = void 0, this.segment = {
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
          }, 0 === BB.length) throw new Error("A camera path needs at least one keyframe");
        for (let QB = 1; QB < BB.length; QB++)
          if (!(BB[QB].timeMs > BB[QB - 1].timeMs)) throw new Error("Camera path keyframe times must strictly increase");
        this.nodes = BB.map((BB => {
          var OB;
          return {
            timeMs: BB.timeMs,
            position: [...BB.position],
            keyframe: BB,
            easing: (0, QB.s)(null !== (OB = BB.easing) && void 0 !== OB ? OB : "linear")
          }
        }));
        const YB = this.nodes[0],
          DB = this.nodes[this.nodes.length - 1],
          oB = GB && this.nodes.length > 1;
        oB && !uB(YB.keyframe, DB.keyframe) && this.nodes.push({
          ...YB,
          timeMs: DB.timeMs + (DB.timeMs - YB.timeMs) / (this.nodes.length - 1)
        }), this.loopMs = oB ? this.nodes[this.nodes.length - 1].timeMs - YB.timeMs : 0, this.prevNodes = this.nodes.map(((BB, OB) => this.neighbour(OB, -1))), this.nextNodes = this.nodes.map(((BB, OB) => this.neighbour(OB, 1))), this.prevGaps = this.prevNodes.map(((BB, OB) => BB >= 0 ? this.gapMs(OB, -1) : 0)), this.nextGaps = this.nextNodes.map(((BB, OB) => BB >= 0 ? this.gapMs(OB, 1) : 0)), this.velocities = this.nodes.map(((BB, OB) => {
          const GB = this.prevNodes[OB],
            YB = this.nextNodes[OB];
          return function(BB, OB, GB, YB, DB, QB) {
            if (QB[0] = 0, QB[1] = 0, QB[2] = 0, !BB && !GB) return QB;
            const oB = null !== BB && void 0 !== BB ? BB : UB(null !== GB && void 0 !== GB ? GB : OB, OB),
              jB = null !== GB && void 0 !== GB ? GB : UB(null !== BB && void 0 !== BB ? BB : OB, OB),
              yB = BB ? YB : DB,
              JB = GB ? DB : YB,
              MB = VB(oB, OB),
              PB = VB(OB, jB);
            if (MB < NB || PB < NB) return QB;
            const zB = Math.sqrt(MB),
              lB = Math.sqrt(PB),
              pB = (zB + lB) / (yB + JB);
            for (let qB = 0; qB < 3; qB++) {
              const BB = (OB[qB] - oB[qB]) / zB - (jB[qB] - oB[qB]) / (zB + lB) + (jB[qB] - OB[qB]) / lB;
              QB[qB] = BB * pB
            }
            return QB
          }(GB >= 0 ? this.nodes[GB].position : null, BB.position, YB >= 0 ? this.nodes[YB].position : null, this.prevGaps[OB], this.nextGaps[OB], [0, 0, 0])
        })), this.aim = new KB(this.nodes, this.velocities, this.prevNodes, this.nextNodes, OB)
      }
      sample(BB, OB, GB, YB) {
        const DB = this.findSegment(this.pathTime(BB));
        this.samplePosition(DB, YB.position), this.aim.sample(DB, OB, YB);
        const {
          beforeIndex: QB,
          afterIndex: oB
        } = DB;
        YB.fov = kB(DB, QB >= 0 ? this.fovAt(QB, GB) : 0, this.fovAt(DB.index, GB), this.fovAt(DB.toIndex, GB), oB >= 0 ? this.fovAt(oB, GB) : 0, QB >= 0, oB >= 0)
      }
      pathTime(BB) {
        const OB = this.nodes[0].timeMs;
        if (this.loopMs <= 0 || BB <= OB) return BB;
        const GB = BB - OB;
        return OB + GB - this.loopMs * Math.floor(GB / this.loopMs)
      }
      findSegment(BB) {
        const OB = this.nodes,
          GB = this.segment;
        let YB = GB.index;
        for (BB < OB[YB].timeMs && (YB = 0); YB < OB.length - 2 && OB[YB + 1].timeMs <= BB;) YB++;
        const DB = Math.min(YB + 1, OB.length - 1),
          oB = OB[DB].timeMs - OB[YB].timeMs;
        return GB.index = YB, GB.toIndex = DB, GB.segmentMs = oB, GB.u = oB > 0 ? (0, QB.q)((BB - OB[YB].timeMs) / oB, OB[YB].easing) : 1, GB.curved = this.smooth && oB > 0, GB.beforeIndex = this.prevNodes[YB], GB.afterIndex = this.nextNodes[DB], GB.beforeMs = this.prevGaps[YB], GB.afterMs = this.nextGaps[DB], GB
      }
      samplePosition(BB, OB) {
        const {
          fromTangent: GB,
          toTangent: YB,
          curved: DB
        } = BB, QB = this.nodes[BB.index].position, oB = this.nodes[BB.toIndex].position;
        SB(this.velocities[BB.index], QB, oB, BB.segmentMs, DB, GB), SB(this.velocities[BB.toIndex], QB, oB, BB.segmentMs, DB, YB);
        const jB = BB.u;
        for (let yB = 0; yB < 3; yB++) OB[yB] = DB ? WB(QB[yB], GB[yB], oB[yB], YB[yB], jB) : QB[yB] + (oB[yB] - QB[yB]) * jB
      }
      fovAt(BB, OB) {
        var GB;
        return null !== (GB = this.nodes[BB].keyframe.fov) && void 0 !== GB ? GB : OB
      }
      neighbour(BB, OB) {
        const GB = this.nodes.length - 1,
          YB = BB + OB;
        return YB >= 0 && YB <= GB ? YB : this.loopMs <= 0 || GB < 2 ? -1 : YB < 0 ? GB - 1 : 1
      }
      gapMs(BB, OB) {
        const GB = this.nodes.length - 1;
        if (1 === OB) {
          const OB = BB === GB ? 0 : BB;
          return this.nodes[OB + 1].timeMs - this.nodes[OB].timeMs
        }
        const YB = 0 === BB ? GB : BB;
        return this.nodes[YB].timeMs - this.nodes[YB - 1].timeMs
      }
    }

    function IB(BB, OB, GB) {
      return null !== GB && Number.isFinite(GB) ? (BB.set(OB, GB), GB) : BB.get(OB)
    }
    class FB {
      constructor(BB) {
        this.mP = BB, this.lastFeet = new Map, this.lastAimPoints = new Map, this.lastHeadings = new Map, this.lastPitches = new Map, this.lastLookHeadings = new Map, this.readFeet = void 0, this.readAimPoint = void 0, this.readFeet = OB => BB.getEntityPosition(OB), this.readAimPoint = OB => BB.getEntityAimPoint(OB)
      }
      aimPoint(BB) {
        return "string" !== typeof BB ? (0, yB.n)(BB, 3) ? BB : null : this.resolve(BB, this.readAimPoint, this.lastAimPoints)
      }
      currentAimPoint(BB) {
        const OB = "string" === typeof BB ? this.mP.getEntityAimPoint(BB) : BB;
        return OB && (0, yB.n)(OB, 3) ? OB : null
      }
      feetPosition(BB) {
        return this.resolve(BB, this.readFeet, this.lastFeet)
      }
      heading(BB) {
        const OB = IB(this.lastHeadings, BB, this.mP.getEntityHeading(BB));
        return void 0 !== OB ? OB : BB === this.mP.localPlayerId ? 0 : this.heading(this.mP.localPlayerId)
      }
      pitch(BB) {
        var OB;
        return null !== (OB = IB(this.lastPitches, BB, this.mP.getEntityPitch(BB))) && void 0 !== OB ? OB : 0
      }
      lookHeading(BB) {
        var OB;
        return null !== (OB = IB(this.lastLookHeadings, BB, this.mP.getEntityLookHeading(BB))) && void 0 !== OB ? OB : this.heading(BB)
      }
      resolve(BB, OB, GB) {
        const YB = OB(BB);
        let DB = GB.get(BB);
        return YB && (0, yB.n)(YB, 3) ? (DB || (DB = [0, 0, 0], GB.set(BB, DB)), DB[0] = YB[0], DB[1] = YB[1], DB[2] = YB[2], DB) : DB || (BB === this.mP.localPlayerId ? null : this.resolve(this.mP.localPlayerId, OB, GB))
      }
    }

    function iB(BB) {
      return {
        heading: BB.heading,
        pitch: BB.pitch
      }
    }

    function LB(BB, OB) {
      Number.isFinite(BB.heading) && Number.isFinite(BB.pitch) || (0, DB.h)(OB, BB)
    }

    function gB(BB, OB, GB, YB, QB) {
      if (OB) return void(0, DB.l)(OB, QB);
      const oB = YB.aimPoint(GB);
      oB && (0, DB.t)(BB, oB, QB)
    }
    class rB {
      constructor(BB, OB, GB, YB) {
        this.settings = BB, this.mP = OB, this.targets = GB, this.base = void 0, this.base = iB(YB)
      }
      update(BB, OB, GB) {
        var YB;
        const DB = this.settings;
        (0, yB.h)(DB.position, GB.position), gB(DB.position, DB.lookDirection, null !== (YB = DB.lookAt) && void 0 !== YB ? YB : this.mP.localPlayerId, this.targets, this.base), OB.apply(this.base, GB), GB.fov = lB(DB, this.mP)
      }
      continueFrom(BB) {
        BB instanceof rB && (0, DB.h)(BB.base, this.base)
      }
      reset(BB) {
        LB(this.base, BB)
      }
    }
    class XB {
      constructor(BB, OB, GB, YB) {
        this.settings = BB, this.mP = OB, this.targets = GB, this.base = void 0, this.goal = void 0, this.lastFeet = [0, 0, 0], this.foundFeet = !1, this.smoothed = [0, 0, 0], this.lZ = [0, 0, 0], this.started = !1, this.distance = -1, this.toCamera = [0, 0, 0], this.aimOrigin = [0, 0, 0], this.eyeHeading = NaN, this.eyePitch = NaN, this.base = iB(YB), this.goal = [...YB.position]
      }
      update(BB, OB, GB) {
        var YB, QB;
        const oB = this.settings,
          jB = null !== (YB = oB.target) && void 0 !== YB ? YB : this.mP.localPlayerId,
          JB = this.targets.feetPosition(jB),
          MB = "eye" === oB.anchor;
        let PB = !1;
        var zB;
        JB && (PB = this.foundFeet && VB(this.lastFeet, JB) > 32 + .1 * BB, (0, yB.h)(JB, this.lastFeet), this.foundFeet = !0, this.placeGoal(null !== (zB = MB ? this.targets.aimPoint(jB) : null) && void 0 !== zB ? zB : JB, jB));
        const qB = null !== (QB = oB.smoothMs) && void 0 !== QB ? QB : 0;
        !this.started || qB < 1 || PB ? ((0, yB.h)(this.goal, this.smoothed), this.lZ.fill(0), this.started = !0) : pB(this.smoothed, this.lZ, this.goal, qB, BB), PB && (this.distance = -1), (0, yB.h)(this.smoothed, GB.position);
        const ZB = !0 === oB.avoidTerrain ? this.pullIn(jB, BB, GB) : 1;
        let NB = this.goal;
        if ("target" === oB.offsetSpace) NB = GB.position;
        else if (ZB < 1) {
          NB = this.aimOrigin;
          for (let BB = 0; BB < 3; BB++) NB[BB] = GB.position[BB] + (this.goal[BB] - this.smoothed[BB]) * ZB
        }
        if (MB && !oB.lookDirection && void 0 === oB.lookAt) {
          const OB = this.targets.lookHeading(jB),
            GB = this.targets.pitch(jB),
            YB = 1 - Math.exp(-BB / 50),
            QB = (0, DB.x)(this.eyeHeading + (0, DB.B)(this.eyeHeading, OB) * YB),
            oB = this.eyePitch + (GB - this.eyePitch) * YB,
            yB = jB !== this.mP.localPlayerId && Number.isFinite(QB) && Number.isFinite(oB) && !PB;
          this.eyeHeading = yB ? QB : (0, DB.x)(OB), this.eyePitch = yB ? oB : GB, this.base.heading = this.eyeHeading, this.base.pitch = this.eyePitch
        } else {
          var RB;
          this.eyeHeading = NaN, this.eyePitch = NaN, gB(NB, oB.lookDirection, null !== (RB = oB.lookAt) && void 0 !== RB ? RB : jB, this.targets, this.base)
        }
        OB.apply(this.base, GB), GB.fov = lB(oB, this.mP)
      }
      continueFrom(BB) {
        BB instanceof XB && (0, YB.p)(BB.settings.target, this.settings.target) && ((0, DB.h)(BB.base, this.base), (0, yB.h)(BB.goal, this.goal), (0, yB.h)(BB.lastFeet, this.lastFeet), this.foundFeet = BB.foundFeet, (0, yB.h)(BB.smoothed, this.smoothed), (0, yB.h)(BB.lZ, this.lZ), this.started = BB.started, this.eyeHeading = BB.eyeHeading, this.eyePitch = BB.eyePitch, !0 === BB.settings.avoidTerrain && (this.distance = BB.distance))
      }
      reset(BB) {
        LB(this.base, BB), this.lZ.fill(0), this.started = !1, this.distance = -1, this.eyeHeading = NaN, this.eyePitch = NaN
      }
      pullIn(BB, OB, GB) {
        const YB = this.targets.aimPoint(BB);
        if (!YB) return 1;
        const DB = GB.position,
          QB = VB(YB, DB);
        if (!(QB > 0)) return 1;
        const oB = this.toCamera;
        for (let yB = 0; yB < 3; yB++) oB[yB] = (DB[yB] - YB[yB]) / QB;
        const jB = function(BB, OB, GB) {
          return BB < 0 || OB < BB ? OB : OB + (BB - OB) * Math.exp(-GB / 150)
        }(this.distance, function(BB, OB, GB, YB) {
          const DB = BB.raycastTerrain(OB, GB, YB);
          return null !== DB && Number.isFinite(DB) ? Math.min(YB, Math.max(0, DB - .2)) : YB
        }(this.mP, YB, oB, QB), OB);
        if (QB - jB < .001) return this.distance = -1, 1;
        this.distance = jB;
        for (let yB = 0; yB < 3; yB++) DB[yB] = YB[yB] + oB[yB] * jB;
        return jB / QB
      }
      placeGoal(BB, OB) {
        const GB = this.settings.offset;
        let YB = GB[0],
          DB = GB[2];
        if ("target" === this.settings.offsetSpace) {
          const BB = this.targets.heading(OB),
            QB = Math.cos(BB),
            oB = Math.sin(BB);
          YB = GB[0] * QB + GB[2] * oB, DB = -GB[0] * oB + GB[2] * QB
        }
        this.goal[0] = BB[0] + YB, this.goal[1] = BB[1] + GB[1], this.goal[2] = BB[2] + DB
      }
    }
    class wB {
      constructor(BB, OB, GB, YB) {
        var DB, QB;
        this.settings = BB, this.mP = OB, this.sampler = void 0, this.base = void 0, this.resolveTarget = void 0, this.elapsedMs = 0, this.sampler = BB.keyframes.length > 0 ? new mB(BB.keyframes, null === (DB = BB.smooth) || void 0 === DB || DB, null !== (QB = BB.loop) && void 0 !== QB && QB) : null, this.base = (0, yB.f)(YB, (0, yB.k)()), this.resolveTarget = BB => GB.aimPoint(BB)
      }
      update(BB, OB, GB) {
        this.elapsedMs += BB;
        const YB = lB(this.settings, this.mP);
        this.sampler ? this.sampler.sample(this.elapsedMs, this.resolveTarget, YB, this.base) : this.base.fov = YB, (0, yB.h)(this.base.position, GB.position), GB.fov = this.base.fov, OB.apply(this.base, GB)
      }
      continueFrom(BB) {
        BB instanceof wB && (0, YB.p)(BB.settings.keyframes, this.settings.keyframes) && (this.elapsedMs = BB.elapsedMs, (0, yB.f)(BB.base, this.base))
      }
      reset(BB) {
        LB(this.base, BB), Number.isFinite(this.elapsedMs) || (this.elapsedMs = 0)
      }
    }

    function EB(BB, OB) {
      return (0, YB.t)(BB, OB)
    }
    class cB {
      constructor(BB, OB, GB) {
        var YB;
        this.settings = BB, this.mP = OB, this.pose = void 0, this.lastGoodPose = void 0, this.look = void 0, this.targets = void 0, this.mode = void 0, this.warnedNonFinite = !1;
        const DB = null !== GB && GB.settings.mode === BB.mode,
          QB = DB ? GB.pose : OB.getDefaultPose();
        this.pose = (0, yB.f)(QB, (0, yB.k)()), this.lastGoodPose = (0, yB.f)(DB ? GB.lastGoodPose : QB, (0, yB.k)()), this.look = new ZB(BB.playerLook), this.targets = null !== (YB = null === GB || void 0 === GB ? void 0 : GB.targets) && void 0 !== YB ? YB : new FB(OB);
        const oB = (0, yB.f)(QB, (0, yB.k)());
        DB && GB.look.unapply(oB, oB), this.mode = function(BB, OB, GB, YB) {
          switch (BB.mode) {
            case "fixed":
              return new rB(BB, OB, GB, YB);
            case "follow":
              return new XB(BB, OB, GB, YB);
            case "path":
              return new wB(BB, OB, GB, YB);
            case "frame":
              return new qB(BB, OB, GB, YB)
          }
        }(BB, OB, this.targets, oB), DB && (this.look.continueFrom(GB.look), this.mode.continueFrom(GB.mode))
      }
      update(BB, OB) {
        return this.look.update(BB, OB), this.mode.update(BB, this.look, this.pose), (0, yB.m)(this.pose) ? (0, yB.f)(this.pose, this.lastGoodPose) : (this.warnedNonFinite || (console.warn("Scripted camera produced a non-finite pose; holding the last good one"), this.warnedNonFinite = !0), (0, yB.f)(this.lastGoodPose, this.pose), this.mode.reset((0, yB.m)(this.lastGoodPose) ? this.lastGoodPose : this.mP.getDefaultPose())), this.pose
      }
    }

    function hB(BB) {
      return [0, 0, BB[2], BB[3]]
    }
    class aB {
      constructor(BB) {
        this.mP = BB, this.settings = {
          mode: "default"
        }, this.pending = null, this.fade = new jB, this.shot = null, this.blend = null, this.mixed = (0, yB.k)(), this.output = (0, yB.k)(), this.hasOutput = !1, this.loadingPositions = [], this.loadingSlots = Array.from({
          length: 3
        }, (() => [0, 0, 0]))
      }
      setSettings(BB) {
        const OB = (0, JB.d)(BB);
        if ((0, YB.p)(OB, this.pending ? this.pending.settings : this.settings)) return;
        const GB = EB(this.settings, OB);
        if (void 0 !== OB.transition && !GB) return this.pending = {
          settings: OB,
          shot: "default" === OB.mode ? null : new cB(OB, this.mP, null)
        }, void this.fade.fadeOut(OB.transition);
        const DB = null !== this.pending;
        this.pending = null, !DB && GB || this.fade.fadeIn(YB.j.minTransitionFadeMs), this.show(OB, !1)
      }
      show(BB, OB) {
        var GB, DB;
        if ((0, YB.p)(BB, this.settings)) return;
        const oB = !OB && EB(this.settings, BB);
        this.settings = BB;
        const jB = null !== this.blend && this.blend.elapsedMs > 0,
          JB = (0, yB.f)(this.hasOutput ? this.output : this.mP.getDefaultPose(), (0, yB.k)());
        if (this.shot = "default" === BB.mode ? null : new cB(BB, this.mP, OB ? null : this.shot), oB) return;
        const MB = OB || !this.shot && !this.hasOutput ? 0 : null !== (GB = BB.blendInMs) && void 0 !== GB ? GB : 0;
        if (MB <= 0) return void(this.blend = null);
        const PB = (0, QB.s)(null !== (DB = BB.blendEasing) && void 0 !== DB ? DB : "easeInOut");
        this.blend = {
          from: JB,
          fromScripted: this.hasOutput,
          headingDelta: NaN,
          elapsedMs: 0,
          durationMs: MB,
          easing: jB ? hB(PB) : PB
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
      update(BB, OB) {
        const GB = Number.isFinite(BB) && BB > 0 ? BB : 0;
        if (this.fade.advance(GB) && null !== this.pending) {
          const {
            settings: BB
          } = this.pending;
          this.pending = null, this.show(BB, !0)
        }
        this.loadingPositions.length = 0;
        const YB = this.pending;
        if (null !== YB && void 0 !== YB && YB.shot) {
          const BB = "path" === YB.settings.mode ? 0 : GB;
          this.noteLoadingPosition(YB.shot.update(BB, yB.e).position)
        }
        if (!this.isActive()) return this.hasOutput = !1, null;
        const oB = this.shot ? this.shot.update(GB, OB) : this.mP.getDefaultPose();
        this.shot && this.noteLoadingPosition(oB.position);
        const jB = this.blend;
        if (!jB) return this.writeOutput(oB);
        jB.elapsedMs += GB;
        const JB = Math.min(1, jB.elapsedMs / jB.durationMs);
        if (jB.headingDelta = Number.isFinite(jB.headingDelta) ? (0, DB.C)(jB.headingDelta, oB.heading - jB.from.heading) : (0, DB.B)(jB.from.heading, oB.heading), (0, yB.o)(jB.from, oB, jB.headingDelta, (0, QB.q)(JB, jB.easing), this.mixed), JB >= 1) {
          if (this.blend = null, !this.shot) return this.hasOutput = !1, null
        } else jB.fromScripted && this.noteLoadingPosition(jB.from.position);
        return this.writeOutput(this.mixed)
      }
      noteLoadingPosition(BB) {
        if (BB.every(Number.isFinite)) {
          const OB = this.loadingPositions;
          OB.push((0, yB.h)(BB, this.loadingSlots[OB.length]))
        }
      }
      writeOutput(BB) {
        const OB = this.output;
        (0, yB.m)(BB) ? (0, yB.f)(BB, OB) : this.hasOutput || (0, yB.f)(this.mP.getDefaultPose(), OB), OB.pitch = (0, DB.e)(OB.pitch);
        const GB = this.mP.getDefaultFov(),
          QB = Number.isFinite(GB) && GB > 0 && GB < 180,
          oB = QB ? Math.min(YB.j.minFov, GB) : YB.j.minFov,
          jB = QB ? Math.max(YB.j.maxFov, GB) : YB.j.maxFov;
        return OB.fov = Number.isFinite(OB.fov) ? Math.min(jB, Math.max(oB, OB.fov)) : jB, this.hasOutput = !0, OB
      }
    }
  },
  39889: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => DB,
      f: () => jB,
      h: () => oB,
      k: () => QB,
      m: () => JB,
      n: () => yB,
      o: () => MB
    });
    var YB = GB(39892);
    const DB = {
      Rm: 0,
      Wm: 0
    };

    function QB() {
      return {
        position: [0, 0, 0],
        heading: 0,
        pitch: 0,
        fov: 0
      }
    }

    function oB(BB, OB) {
      return OB[0] = BB[0], OB[1] = BB[1], OB[2] = BB[2], OB
    }

    function jB(BB, OB) {
      return oB(BB.position, OB.position), OB.heading = BB.heading, OB.pitch = BB.pitch, OB.fov = BB.fov, OB
    }

    function yB(BB, OB) {
      return Array.isArray(BB) && BB.length === OB && BB.every(Number.isFinite)
    }

    function JB(BB) {
      return yB(BB.position, 3) && Number.isFinite(BB.heading) && Number.isFinite(BB.pitch) && Number.isFinite(BB.fov)
    }

    function MB(BB, OB, GB, DB, QB) {
      for (let YB = 0; YB < 3; YB++) QB.position[YB] = BB.position[YB] + (OB.position[YB] - BB.position[YB]) * DB;
      return QB.heading = (0, YB.x)(BB.heading + GB * DB), QB.pitch = BB.pitch + (OB.pitch - BB.pitch) * DB, QB.fov = BB.fov + (OB.fov - BB.fov) * DB, QB
    }
  },
  39910: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => UB,
      f: () => lB
    });
    var YB = GB(39903),
      DB = GB(39889);
    const QB = YB.e,
      oB = YB.l,
      jB = YB.f;

    function yB(BB, OB, GB, YB) {
      return Number.isFinite(BB) ? Math.min(GB, Math.max(OB, BB)) : YB
    }

    function JB(BB, OB, GB) {
      return void 0 !== BB && Number.isFinite(BB) ? Math.min(GB, Math.max(OB, BB)) : void 0
    }

    function MB(BB) {
      const OB = YB.j.maxCoordinate;
      return [Math.min(OB, Math.max(-OB, BB[0])), Math.min(OB, Math.max(-OB, BB[1])), Math.min(OB, Math.max(-OB, BB[2]))]
    }

    function PB(BB) {
      return "string" === typeof BB ? BB : (0, DB.n)(BB, 3) ? MB(BB) : void 0
    }
    const zB = new RegExp(YB.o);

    function lB(BB) {
      return "string" === typeof BB && zB.test(BB)
    }

    function pB(BB) {
      const OB = [];
      if (!Array.isArray(BB)) return OB;
      for (const GB of BB.slice(0, YB.j.maxFrameTargets)) {
        const BB = PB(GB);
        void 0 === BB || "string" === typeof BB && !lB(BB) || OB.push(BB)
      }
      return OB
    }

    function qB(BB) {
      if (!(0, DB.n)(BB, 3)) return;
      const OB = Math.max(Math.abs(BB[0]), Math.abs(BB[1]), Math.abs(BB[2])),
        GB = Math.hypot(BB[0] / OB, BB[1] / OB, BB[2] / OB);
      return 0 === OB || OB * GB < YB.j.minDirectionLength ? void 0 : [BB[0] / OB / GB, BB[1] / OB / GB, BB[2] / OB / GB]
    }

    function ZB(BB) {
      if (void 0 !== BB) return "string" === typeof BB ? QB.includes(BB) ? BB : void 0 : (0, DB.n)(BB, 4) ? [yB(BB[0], 0, 1, 0), yB(BB[1], YB.j.minEasingY, YB.j.maxEasingY, 0), yB(BB[2], 0, 1, 1), yB(BB[3], YB.j.minEasingY, YB.j.maxEasingY, 1)] : "linear"
    }

    function NB(BB) {
      if (BB) return {
        maxYaw: yB(BB.maxYaw, 0, YB.j.maxPlayerLook, 0),
        maxPitch: yB(BB.maxPitch, 0, YB.j.maxPlayerLook, 0),
        returnMs: JB(BB.returnMs, 0, YB.j.maxReturnMs)
      }
    }
    const RB = new RegExp(YB.b);

    function WB(BB) {
      var OB;
      if ("object" !== typeof BB || null === BB) return;
      const GB = YB.j.maxTransitionMs,
        DB = YB.j.minTransitionFadeMs;
      return {
        colour: "string" === typeof BB.colour && RB.test(BB.colour) ? BB.colour : YB.d,
        outMs: yB(BB.outMs, DB, GB, DB),
        holdMs: yB(null !== (OB = BB.holdMs) && void 0 !== OB ? OB : 0, 0, GB, 0),
        inMs: yB(BB.inMs, DB, GB, DB)
      }
    }

    function AB(BB) {
      return !0 === BB || void 0
    }

    function VB(BB) {
      if ("object" !== typeof BB || null === BB) return !1;
      const OB = BB.lookAt;
      return Number.isFinite(BB.timeMs) && (0, DB.n)(BB.position, 3) && (void 0 === OB || "string" === typeof OB || (0, DB.n)(OB, 3))
    }

    function SB(BB) {
      return {
        ...BB,
        timeMs: yB(BB.timeMs, 0, YB.j.maxPathMs, 0),
        position: MB(BB.position),
        lookAt: PB(BB.lookAt),
        lookDirection: qB(BB.lookDirection),
        fov: JB(BB.fov, YB.j.minFov, YB.j.maxFov),
        easing: ZB(BB.easing)
      }
    }

    function nB(BB) {
      const OB = [];
      if (!Array.isArray(BB)) return OB;
      for (const GB of BB.slice(0, YB.j.maxKeyframes)) {
        if (!VB(GB)) continue;
        const BB = SB(GB);
        (0 === OB.length || BB.timeMs > OB[OB.length - 1].timeMs) && OB.push(BB)
      }
      return OB
    }

    function UB(BB) {
      if ("object" !== typeof BB || null === BB) return {
        mode: "default"
      };
      const OB = {
          blendInMs: JB(BB.blendInMs, 0, YB.j.maxBlendInMs),
          blendEasing: ZB(BB.blendEasing),
          transition: WB(BB.transition),
          letterbox: AB(BB.letterbox),
          hideHud: AB(BB.hideHud)
        },
        GB = {
          mode: "default",
          ...OB
        };
      if ("default" === BB.mode || "fixed" === BB.mode && !(0, DB.n)(BB.position, 3)) return GB;
      const QB = {
        ...OB,
        fov: JB(BB.fov, YB.j.minFov, YB.j.maxFov),
        playerFacing: (zB = BB.playerFacing, oB.includes(zB) ? zB : void 0),
        playerLook: NB(BB.playerLook)
      };
      var zB, lB, RB;
      switch (BB.mode) {
        case "fixed":
          return {
            ...BB, ...QB, position: MB(BB.position), lookAt: PB(BB.lookAt), lookDirection: qB(BB.lookDirection)
          };
        case "follow":
          return {
            ...BB, ...QB, target: "string" === typeof BB.target ? BB.target : void 0, anchor: (RB = BB.anchor, jB.includes(RB) ? RB : void 0), lookAt: PB(BB.lookAt), offset: (lB = BB.offset, Array.isArray(lB) ? [yB(lB[0], -YB.j.maxOffset, YB.j.maxOffset, 0), yB(lB[1], -YB.j.maxOffset, YB.j.maxOffset, 0), yB(lB[2], -YB.j.maxOffset, YB.j.maxOffset, 0)] : [0, 0, 0]), lookDirection: qB(BB.lookDirection), smoothMs: JB(BB.smoothMs, 0, YB.j.maxSmoothMs)
          };
        case "path":
          return {
            ...BB, ...QB, keyframes: nB(BB.keyframes)
          };
        case "frame":
          return {
            ...BB, ...QB, targets: pB(BB.targets), viewHeading: JB(BB.viewHeading, -YB.j.maxFrameHeading, YB.j.maxFrameHeading), viewElevation: JB(BB.viewElevation, 0, YB.j.maxFrameElevation), padding: JB(BB.padding, 0, YB.j.maxFrameDistance), closestDistance: JB(BB.closestDistance, 0, YB.j.maxFrameDistance), furthestDistance: JB(BB.furthestDistance, 0, YB.j.maxFrameDistance), smoothMs: JB(BB.smoothMs, 0, YB.j.maxSmoothMs)
          };
        default:
          return GB
      }
    }
  },
  39933: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => YB
    });
    const YB = {
      message: [{
        translationKey: "general:bunnyHoppingDisabled"
      }],
      timeoutLength: 2e3,
      type: "Error"
    }
  },
  39830: (BB, OB, GB) => {
    function YB(BB, OB) {
      return OB.set(BB), OB
    }
    GB.d(OB, {
      d: () => YB
    })
  },
  39827: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => oB
    });
    var YB = GB(37300),
      DB = GB.n(YB);
    const QB = [1, 1, 1];

    function oB(BB) {
      if (!BB) return [...QB];
      try {
        const [OB, GB, YB] = DB()(BB).rgb().array();
        return [OB / 255, GB / 255, YB / 255]
      } catch (OB) {
        return console.warn(`Invalid groundArrowPath colour "${BB}":`, OB), [...QB]
      }
    }
  },
  39930: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => jB,
      e: () => JB,
      h: () => yB
    });
    var YB = GB(294),
      DB = GB(3249);
    const QB = /\/textures\/skyBoxes\/(space_blue|space_lightblue|space_red_2|space_white)\/(_[np][xyz]\.jpg)$/,
      oB = 512;

    function jB(BB) {
      var OB;
      const GB = Math.min(screen.width, screen.height) * (null !== (OB = (0, YB.c)()) && void 0 !== OB ? OB : (0, DB.n)());
      return Math.max(window.innerHeight * (0, DB.n)(), GB) / (0, DB.p)(BB)
    }

    function yB(BB, OB, GB) {
      return OB / (2 * Math.tan(GB / 2)) > oB ? BB : JB(BB)
    }

    function JB(BB) {
      return BB.map((BB => BB.replace(QB, "/textures/skyBoxes/$1/1024/$2")))
    }
  },
  39824: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => DB
    });
    var YB = GB(192);

    function DB(BB, OB, GB, DB, QB, oB, jB, yB, JB, MB, PB) {
      const zB = YB.f.pP,
        lB = QB - GB;
      let pB = lB * (oB - DB);
      MB.fill(0, 0, pB);
      for (let YB = Math.floor((yB - 1) / zB);
        (YB + 1) * zB > jB; YB--) {
        const qB = YB * zB;
        for (let ZB = Math.floor(GB / zB); ZB * zB < QB; ZB++) {
          const NB = ZB * zB,
            RB = Math.max(GB - NB, 0),
            WB = Math.min(QB - NB, zB);
          for (let QB = Math.floor(DB / zB); QB * zB < oB; QB++) {
            const AB = BB(ZB, YB, QB);
            if (!AB) continue;
            const VB = QB * zB,
              SB = Math.max(DB - VB, 0),
              nB = Math.min(oB - VB, zB),
              UB = AB.al,
              fB = AB.sz,
              kB = fB.data;
            for (let BB = Math.min(yB - 1 - qB, zB - 1); BB >= Math.max(jB - qB, 0); BB--) {
              const YB = UB[BB],
                QB = YB === OB;
              if (QB || 0 !== JB[YB]) {
                for (let OB = RB; OB < WB; OB++)
                  for (let oB = SB; oB < nB; oB++) {
                    const jB = (VB + oB - DB) * lB + NB + OB - GB;
                    if (0 !== MB[jB]) continue;
                    const yB = QB ? kB[fB.index(OB, BB, oB)] : YB;
                    0 !== JB[yB] && (MB[jB] = yB, PB[jB] = qB + BB, pB--)
                  }
                if (0 === pB) return
              }
            }
          }
        }
      }
    }
  },
  34612: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => QB,
      g: () => jB,
      i: () => oB,
      l: () => DB,
      p: () => YB
    });
    const YB = {
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
      DB = "/textures/dayNight/sun.png",
      QB = "/textures/dayNight/moon.png",
      oB = "/textures/dayNight/stars",
      jB = ["_px.png", "_py.png", "_pz.png", "_nx.png", "_ny.png", "_nz.png"]
  },
  39903: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => PB,
      d: () => zB,
      e: () => YB,
      f: () => DB,
      j: () => JB,
      l: () => QB,
      o: () => MB,
      p: () => yB,
      t: () => jB
    });
    const YB = ["linear", "easeIn", "easeOut", "easeInOut"],
      DB = ["feet", "eye"],
      QB = ["movement", "camera", "cursor"],
      oB = ["targets", "playerFacing", "blendInMs", "blendEasing", "transition", "letterbox", "hideHud"];

    function jB(BB, OB) {
      return yB(BB, OB, oB)
    }

    function yB(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      if (BB === OB || Number.isNaN(BB) && Number.isNaN(OB)) return !0;
      if ("object" !== typeof BB || "object" !== typeof OB || null === BB || null === OB || Array.isArray(BB) !== Array.isArray(OB)) return !1;
      const YB = BB,
        DB = OB;
      for (const QB of new Set([...Object.keys(YB), ...Object.keys(DB)]))
        if (!GB.includes(QB) && !yB(YB[QB], DB[QB])) return !1;
      return !0
    }
    const JB = {
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
      MB = "^-[1-9][0-9]*$",
      PB = "^#[0-9a-fA-F]{6}$",
      zB = "#000000"
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);