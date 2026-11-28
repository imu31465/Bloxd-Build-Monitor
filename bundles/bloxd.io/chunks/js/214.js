export const id = 214;
export const ids = [214];
export const modules = {
  40473: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => eb
    });
    class eb {
      constructor(bb, wb) {
        this.read = bb, this.apply = wb, this.release = null
      }
      turn(bb, wb) {
        const Mb = null === this.release ? this.read() : this.release.transitionMs;
        this.stop(!1), this.apply({
          forcedCameraDirectionTransitionMs: wb,
          forcedCameraDirection: [bb[0], bb[1], bb[2]]
        }), this.release = {
          timer: setTimeout((() => {
            this.stop(!0)
          }), wb + 100),
          transitionMs: Mb
        }
      }
      dispose() {
        this.stop(!0)
      }
      stop(bb) {
        null !== this.release && (clearTimeout(this.release.timer), bb && this.apply({
          forcedCameraDirection: null,
          forcedCameraDirectionTransitionMs: this.release.transitionMs
        }), this.release = null)
      }
    }
  },
  39953: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => pb,
      e: () => Hb
    });
    const eb = new Map;

    function Hb(bb, wb) {
      eb.set(bb, wb)
    }

    function pb(bb) {
      return bb ? eb.get(bb) : void 0
    }
  },
  37602: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Ib,
      e: () => gb,
      g: () => Lb,
      j: () => lb,
      l: () => mb
    });
    var eb = Mb(667),
      Hb = Mb(1980),
      pb = Mb(5685);
    class Vb {
      constructor(bb, wb) {
        this.width = bb, this.qO = wb, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(bb * wb)
      }
      push(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const Mb = this.data,
          eb = this.next * this.width;
        for (let Hb = 0; Hb < this.width; Hb++) Mb[eb + Hb] = bb[wb + Hb];
        this.next = (this.next + 1) % this.qO, this.size = Math.min(this.size + 1, this.qO)
      }
      rows() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1 / 0;
        const Mb = [],
          eb = (this.next - this.size + this.qO) % this.qO;
        for (let Hb = 0; Hb < this.size; Hb++) {
          const pb = (eb + Hb) % this.qO * this.width;
          this.data[pb + bb] >= wb && Mb.push(Array.from(this.data.subarray(pb, pb + this.width)))
        }
        return Mb
      }
      lines() {
        return this.rows().map((bb => bb.join(",")))
      }
    }
    const gb = 10,
      lb = {
        idle: 0,
        nI: 1,
        OJ: 2,
        xJ: 3,
        tF: 4
      },
      Lb = {
        none: 0,
        skipped: 1,
        paced: 2,
        drawn: 3
      },
      Ib = {
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
      Ob = 12e3,
      Ub = ["nowMs", "dtMs", "rawX", "rawY", "turnedX", "turnedY", "outcome", "velocityX", "velocityY", "limit"],
      tb = ["timeStamp", "nowMs", "movementX", "movementY", "locked"],
      Cb = ["nowMs", "dtMs", "heading", "pitch", "kind"],
      Eb = ["nowMs", "source", "headingBefore", "pitchBefore", "headingAfter", "pitchAfter"],
      Fb = ["nowMs", "change", "count"];

    function Bb(bb) {
      return "js" === bb ? Ib.jsClient : Ib.wasmClient
    }
    class sb {
      constructor() {
        this.steps = new Vb(gb, Ob), this.events = new Vb(tb.length, Ob), this.frames = new Vb(Cb.length, Ob), this.cameraSets = new Vb(pb.f, 256), this.changes = new Vb(Fb.length, 256)
      }
    }
    const mb = new class {
      constructor() {
        this.rings = null, this.sample = new Float64Array(tb.length), this.startedClient = null, this.startedAtMs = 0
      }
      get client() {
        return this.startedClient
      }
      start(bb, wb) {
        this.startedClient = bb, this.startedAtMs = performance.now(), null !== this.rings ? this.change(Bb(bb)) : wb && this.allocate()
      }
      lockGained() {
        this.allocate(), this.change(Ib.lockGained)
      }
      allocate() {
        null === this.rings && (this.rings = new sb, null !== this.startedClient && this.changeAt(this.startedAtMs, Bb(this.startedClient), 1))
      }
      step(bb, wb) {
        var Mb;
        bb[wb + 6] !== lb.tF && (null === (Mb = this.rings) || void 0 === Mb || Mb.steps.push(bb, wb))
      }
      cameraSet(bb, wb) {
        var Mb;
        null === (Mb = this.rings) || void 0 === Mb || Mb.cameraSets.push(bb, wb)
      }
      mouseMove(bb, wb) {
        const Mb = this.rings;
        if (null === Mb) return;
        const eb = this.sample;
        eb[0] = bb.timeStamp, eb[1] = performance.now(), eb[2] = bb.movementX, eb[3] = bb.movementY, eb[4] = wb ? 1 : 0, Mb.events.push(eb)
      }
      frame(bb, wb, Mb, eb) {
        const Hb = this.rings;
        if (null === Hb || eb === Lb.none) return;
        const pb = this.sample;
        pb[0] = performance.now(), pb[1] = bb, pb[2] = wb, pb[3] = Mb, pb[4] = eb, Hb.frames.push(pb)
      }
      change(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.changeAt(performance.now(), bb, wb)
      }
      changeAt(bb, wb, Mb) {
        const eb = this.rings;
        if (null === eb) return;
        const Hb = this.sample;
        Hb[0] = bb, Hb[1] = wb, Hb[2] = Mb, eb.changes.push(Hb)
      }
      dumpText() {
        var bb, wb;
        const Mb = this.rings;
        return [`look records (${this.startedClient}): ${Ub.join(",")}`, ...null !== (bb = null === Mb || void 0 === Mb ? void 0 : Mb.steps.lines()) && void 0 !== bb ? bb : [], `mousemove events: ${tb.join(",")}`, ...null !== (wb = null === Mb || void 0 === Mb ? void 0 : Mb.events.lines()) && void 0 !== wb ? wb : []].join("\n")
      }
      toJson(bb, wb) {
        var Mb;
        const Hb = bb - 6e4,
          pb = this.rings,
          Vb = function(bb, wb) {
            var Mb;
            let eb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            const pb = null !== (Mb = null === bb || void 0 === bb ? void 0 : bb.rows(eb, Hb)) && void 0 !== Mb ? Mb : [];
            return {
              columns: wb,
              fromMs: 0 === pb.length ? null : pb[0][eb],
              rows: pb
            }
          };
        return {
          version: eb.e,
          client: null !== (Mb = this.startedClient) && void 0 !== Mb ? Mb : "not started",
          savedAt: (new Date).toISOString(),
          savedAtMs: bb,
          keptMs: 6e4,
          page: window.location.href,
          userAgent: navigator.userAgent,
          devicePixelRatio: window.devicePixelRatio,
          screen: {
            width: window.screen.width,
            height: window.screen.height
          },
          uF: null !== document.pointerLockElement,
          visibility: document.visibilityState,
          ...wb,
          outcomes: lb,
          frameKinds: Lb,
          changes: Ib,
          lookSteps: Vb(null === pb || void 0 === pb ? void 0 : pb.steps, Ub),
          mouseMoves: Vb(null === pb || void 0 === pb ? void 0 : pb.events, tb, 1),
          frames: Vb(null === pb || void 0 === pb ? void 0 : pb.frames, Cb),
          cameraSets: Vb(null === pb || void 0 === pb ? void 0 : pb.cameraSets, Eb),
          pageChanges: Vb(null === pb || void 0 === pb ? void 0 : pb.changes, Fb)
        }
      }
      save(bb) {
        const wb = JSON.stringify(this.toJson(performance.now(), bb));
        (0, Hb.d)(new Blob([wb], {
          type: "application/json"
        }), `bloxd-mouse-look-${(new Date).toISOString().replace(/[:.]/g,"-")}.json`)
      }
    }
  },
  41085: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Hb
    });
    var eb = Mb(39448);

    function Hb(bb, wb, Mb) {
      var Hb, pb, Vb, gb, lb, Lb, Ib;
      const Ob = (0, eb.b)(bb, wb, Mb[0], Mb[1], Mb[2]),
        Ub = Ob ? null !== (Hb = Ob.textCell) && void 0 !== Hb ? Hb : Ob.rect.anchor : Mb,
        tb = wb(Ub[0], Ub[1], Ub[2]);
      return {
        pos: [Mb[0], Mb[1], Mb[2]],
        noticeboardSpan: Ob && {
          width: Ob.rect.width,
          height: Ob.rect.height
        },
        text: null !== (pb = null === tb || void 0 === tb || null === (Vb = tb.persisted) || void 0 === Vb || null === (gb = Vb.shared) || void 0 === gb ? void 0 : gb.text) && void 0 !== pb ? pb : "",
        textSize: null !== (lb = null === tb || void 0 === tb || null === (Lb = tb.persisted) || void 0 === Lb || null === (Ib = Lb.shared) || void 0 === Ib ? void 0 : Ib.textSize) && void 0 !== lb ? lb : null
      }
    }
  },
  39744: (bb, wb, Mb) => {
    function eb(bb) {
      switch (bb.kind) {
        case void 0:
        case "flatEmissive":
          return !1;
        case "chevronPath":
        case "furnaceFire":
          return !0
      }
    }
    Mb.d(wb, {
      e: () => Hb,
      h: () => pb,
      i: () => eb
    });
    const Hb = 4,
      pb = 3
  },
  40517: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Hb,
      e: () => pb
    });
    var eb = Mb(382);
    const Hb = new Set(["bedwars", "bridgeBattle", "buildAFactory2", "classic", "clutch", "containmentBreach", "cooking", "defusal", "frontline", "goalRush", "greenville", "hideseek", "luckyBedwars", "murderMystery", "ninetyNineNights", "oneBlock", "plots", "pvpCiv", "secretSanta", "shooting", "skyIslands", "skyblock", "tsunami"]);
    class pb {
      constructor(bb) {
        this.importGame = bb, this.loads = new Map, this.loaded = new Map
      }
      load(bb) {
        const wb = (0, eb.Zb)(bb);
        if (!Hb.has(wb)) return Promise.resolve(void 0);
        let Mb = this.loads.get(wb);
        return Mb || (Mb = this.importGame(wb).then((bb => {
          const Mb = bb.default;
          if ("function" !== typeof Mb) throw new Error(`${wb}'s client code has no default-exported factory`);
          return this.loaded.set(wb, Mb), Mb
        })).catch((bb => {
          throw this.loads.delete(wb), bb
        })), this.loads.set(wb, Mb)), Mb
      }
      loadedFactory(bb) {
        const wb = (0, eb.Zb)(bb);
        if (!Hb.has(wb)) return;
        const Mb = this.loaded.get(wb);
        if (!Mb) throw new Error(`${wb}'s client code started before it loaded`);
        return Mb
      }
    }
  },
  40514: (bb, wb, Mb) => {
    function eb(bb, wb) {
      return Object.values({
        ...bb,
        ...wb
      }).filter((bb => null !== bb))
    }
    Mb.d(wb, {
      d: () => eb
    })
  },
  41089: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Vb
    });
    var eb = Mb(5967),
      Hb = Mb(35334),
      pb = Mb(4659);

    function Vb(bb) {
      if (bb === eb.d) return 0;
      const wb = (0, pb.c)(bb);
      if (void 0 !== wb && wb <= Hb.MAX_BLOCK_ID) return wb;
      const Mb = (0, pb.c)(bb.split("|")[0]);
      if (void 0 !== Mb && Mb <= Hb.MAX_BLOCK_ID && (0, Hb.rootMetaDescOf)(Mb) === bb) return Mb;
      throw new Error(`Invalid block name. You sent ${bb}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`)
    }
  },
  40564: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Hb
    });
    var eb = Mb(26);
    class Hb {
      constructor(bb) {
        this.screen = bb, this.hidesHud = !1
      }
      show(bb, wb) {
        this.screen.setFade(bb.colour, bb.alpha), this.screen.setLetterbox(!0 === wb.letterbox, bb.alpha < 1), this.setHudHidden(!0 === wb.hideHud)
      }
      clear() {
        this.screen.clear(), this.setHudHidden(!1)
      }
      setHudHidden(bb) {
        this.hidesHud !== bb && (this.hidesHud = bb, eb.c.set({
          isUiHiddenByCamera: bb
        }))
      }
    }
  },
  40555: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => pb,
      f: () => Hb
    });
    var eb = Mb(37947);

    function Hb(bb) {
      var wb;
      const Mb = "default" === bb.mode ? "movement" : null !== (wb = bb.playerFacing) && void 0 !== wb ? wb : "movement";
      return "cursor" === Mb ? {
        facing: Mb,
        mouseTurns: null
      } : {
        facing: Mb,
        mouseTurns: "default" !== bb.mode && void 0 !== bb.playerLook ? "look" : "view"
      }
    }

    function pb(bb, wb, Mb, Hb, pb, Vb) {
      return Vb.DW = 0, Vb.cW = 0, Vb.pointedAt = void 0, void 0 !== Hb ? pb ? (Vb.pointedAt = Hb, bb) : (0, eb.u)(Hb.heading) : pb ? (Vb.DW = wb, Vb.cW = Mb, bb) : (0, eb.u)(bb + wb)
    }
  },
  40542: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => ab
    });
    var eb = Mb(40549),
      Hb = Mb(37947),
      pb = Mb(38195);

    function Vb(bb, wb, Mb, eb) {
      if (!(eb > 0)) return wb;
      const Hb = wb > bb ? Math.min(wb, bb + Mb / eb) : Math.max(wb, bb - Mb / eb);
      return Math.abs(wb - Hb) < 1e-9 ? wb : Hb
    }
    class gb {
      constructor() {
        this.phase = null, this.outMs = 0, this.holdMs = 0, this.inMs = 0, this.fW = 0, this.sinceTurnMs = 1 / 0, this.clearMs = 1 / 0, this.waiting = null, this.screen = {
          colour: eb.g,
          alpha: 0
        }
      }
      getScreen() {
        return this.screen
      }
      fadeOut(bb) {
        !this.isGoingOut() && this.sinceTurnMs < eb.o.minFadeTurnMs ? this.waiting = {
          turn: "out",
          transition: bb
        } : (this.waiting = null, this.startOut(bb))
      }
      fadeIn(bb) {
        this.isGoingOut() ? this.sinceTurnMs < eb.o.minFadeTurnMs ? this.waiting = {
          turn: "in",
          minMs: bb
        } : (this.waiting = null, this.startIn(bb)) : this.waiting = null
      }
      advance(bb) {
        const wb = this.waiting;
        if (null === wb) return this.step(bb);
        const Mb = eb.o.minFadeTurnMs - this.sinceTurnMs;
        if (Mb > bb) return this.step(bb);
        const Hb = this.step(Mb);
        return this.waiting = null, "out" === wb.turn ? this.startOut(wb.transition) : this.startIn(wb.minMs), this.step(bb - Mb) || Hb
      }
      isGoingOut() {
        return "out" === this.phase || "hold" === this.phase
      }
      startOut(bb) {
        ("in" === this.phase || null === this.phase && this.clearMs < eb.o.minFadeTurnMs) && (this.sinceTurnMs = 0), this.phase = "out", 0 === this.screen.alpha && (this.screen.colour = bb.colour), this.outMs = bb.outMs, this.holdMs = bb.holdMs, this.inMs = bb.inMs
      }
      startIn(bb) {
        this.isGoingOut() && (this.sinceTurnMs = 0), this.phase = "in", this.inMs = Math.max(bb, this.inMs)
      }
      step(bb) {
        const wb = this.screen;
        this.sinceTurnMs += bb, null === this.phase && (this.clearMs += bb);
        let Mb = !1,
          Hb = bb;
        if ("out" === this.phase) {
          const eb = (1 - wb.alpha) * this.outMs;
          if (wb.alpha = Vb(wb.alpha, 1, bb, this.outMs), wb.alpha < 1) return !1;
          this.phase = "hold", this.fW = 0, Hb = Math.max(0, bb - eb), Mb = !0
        }
        let pb = bb;
        if ("hold" === this.phase) {
          this.fW += Hb;
          const bb = Math.min(this.fW - this.holdMs, this.sinceTurnMs - eb.o.minFadeTurnMs);
          if (bb < 0 || Mb) return Mb;
          this.phase = "in", this.sinceTurnMs = bb, pb = bb
        }
        return "in" === this.phase && (wb.alpha = Vb(wb.alpha, 0, pb, this.inMs), wb.alpha <= 0 && (this.phase = null, this.clearMs = 0)), Mb
      }
    }
    var lb = Mb(40530),
      Lb = Mb(40553),
      Ib = Mb(2107),
      Ob = Mb(37873);

    function Ub(bb, wb) {
      for (let Mb = 0; Mb < wb.length; Mb++) wb[Mb] = bb[Mb]
    }

    function tb(bb, wb) {
      var Mb;
      return null !== (Mb = bb.fov) && void 0 !== Mb ? Mb : wb.getDefaultFov()
    }

    function Cb(bb, wb, Mb, eb, Hb) {
      const pb = 2 / eb,
        Vb = Math.exp(-pb * Hb);
      for (let gb = 0; gb < bb.length; gb++) {
        const eb = bb[gb] - Mb[gb],
          lb = (wb[gb] + pb * eb) * Hb;
        bb[gb] = Mb[gb] + (eb + lb) * Vb, wb[gb] = (wb[gb] - pb * lb) * Vb
      }
    }
    class Eb {
      constructor(bb, wb, Mb, eb) {
        var pb, Vb, gb, lb, Lb;
        this.settings = bb, this.XO = wb, this.targets = Mb, this.base = void 0, this.closestDistance = void 0, this.furthestDistance = void 0, this.goal = void 0, this.framedTargets = !1, this.smoothed = [0, 0, 0, 0, 0, 0], this.UF = [0, 0, 0, 0, 0, 0], this.started = !1, this.angles = {
          heading: 0,
          pitch: 0
        }, this.points = [], this.forward = [0, 0, 0], this.base = {
          heading: (0, Hb.u)((0, Ib.o)(null !== (pb = bb.viewHeading) && void 0 !== pb ? pb : 0)),
          pitch: (0, Hb.f)((0, Ib.o)(null !== (Vb = bb.viewElevation) && void 0 !== Vb ? Vb : 45))
        }, this.closestDistance = null !== (gb = bb.closestDistance) && void 0 !== gb ? gb : Math.min(6, null !== (lb = bb.furthestDistance) && void 0 !== lb ? lb : 1 / 0), this.furthestDistance = null !== (Lb = bb.furthestDistance) && void 0 !== Lb ? Lb : Math.max(64, this.closestDistance);
        const Ob = (0, Hb.d)(this.base.heading, this.base.pitch, this.forward),
          Ub = eb.position,
          tb = this.closestDistance;
        this.goal = [Ub[0] + Ob[0] * tb, Ub[1] + Ob[1] * tb, Ub[2] + Ob[2] * tb, tb, this.base.heading, this.base.pitch]
      }
      update(bb, wb, Mb) {
        var eb, pb;
        this.placeGoal(null !== (eb = this.settings.fov) && void 0 !== eb ? eb : this.XO.getBaseFov()), this.goal[4] = (0, Hb.z)(this.smoothed[4], this.base.heading), this.goal[5] = this.base.pitch;
        const Vb = null !== (pb = this.settings.smoothMs) && void 0 !== pb ? pb : 400;
        !this.started || Vb < 1 ? (Ub(this.goal, this.smoothed), this.UF.fill(0), this.started = !0) : Cb(this.smoothed, this.UF, this.goal, Vb, bb), this.angles.heading = this.smoothed[4], this.angles.pitch = (0, Hb.f)(this.smoothed[5]), wb.apply(this.angles, Mb);
        const gb = (0, Hb.d)(Mb.heading, Mb.pitch, this.forward);
        for (let Hb = 0; Hb < 3; Hb++) Mb.position[Hb] = this.smoothed[Hb] - gb[Hb] * this.smoothed[3];
        Mb.fov = tb(this.settings, this.XO)
      }
      continueFrom(bb) {
        bb instanceof Eb && (Ub(bb.goal, this.goal), Ub(bb.smoothed, this.smoothed), Ub(bb.UF, this.UF), this.framedTargets = bb.framedTargets, this.started = bb.started)
      }
      reset() {
        this.UF.fill(0), this.started = !1
      }
      placeGoal(bb) {
        var wb;
        let Mb = 0;
        for (const Ib of this.settings.targets) {
          const bb = this.targets.currentAimPoint(Ib);
          bb && (0, lb.k)(bb, this.pointAt(Mb++))
        }
        if (Mb > 0) this.framedTargets = !0;
        else if (!this.framedTargets) {
          const bb = this.targets.aimPoint(this.XO.localPlayerId);
          bb && (0, lb.k)(bb, this.pointAt(Mb++))
        }
        const eb = this.goal;
        if (0 === Mb) return void(eb[3] = this.withinDistances(eb[3]));
        for (let lb = 0; lb < 3; lb++) {
          let bb = 1 / 0,
            wb = -1 / 0;
          for (let eb = 0; eb < Mb; eb++) bb = Math.min(bb, this.points[eb][lb]), wb = Math.max(wb, this.points[eb][lb]);
          eb[lb] = (bb + wb) / 2
        }
        let Hb = 0;
        for (let lb = 0; lb < Mb; lb++) {
          const bb = this.points[lb];
          Hb = Math.max(Hb, Math.hypot(bb[0] - eb[0], bb[1] - eb[1], bb[2] - eb[2]))
        }
        const pb = Math.tan((0, Ib.o)(bb) / 2),
          Vb = Math.atan(pb * (!0 === this.settings.letterbox ? Ob.f : 1)),
          gb = Math.atan(pb * this.XO.getAspectRatio()),
          Lb = (Hb + (null !== (wb = this.settings.padding) && void 0 !== wb ? wb : 2)) / Math.sin(Math.min(Vb, gb));
        eb[3] = this.withinDistances(Lb)
      }
      withinDistances(bb) {
        return Math.min(this.furthestDistance, Math.max(this.closestDistance, bb))
      }
      pointAt(bb) {
        return bb === this.points.length && this.points.push([0, 0, 0]), this.points[bb]
      }
    }
    class Fb {
      constructor(bb) {
        this.limits = bb, this.yawOffset = 0, this.pitchOffset = 0, this.MF = 0, this.pointedAt = null
      }
      continueFrom(bb) {
        this.limits && (this.yawOffset = bb.yawOffset, this.pitchOffset = bb.pitchOffset, this.MF = bb.MF)
      }
      update(bb, wb) {
        const Mb = this.limits;
        if (!Mb) return;
        const eb = Number.isFinite(wb.DW) ? wb.DW : 0,
          Hb = Number.isFinite(wb.cW) ? wb.cW : 0;
        if (wb.pointedAt) this.MF = 0, this.pointedAt = {
          heading: wb.pointedAt.heading,
          pitch: wb.pointedAt.pitch
        };
        else if (0 !== eb || 0 !== Hb) this.MF = 0, this.yawOffset += eb, this.pitchOffset += Hb;
        else {
          const wb = Math.max(0, this.MF + bb - 200) - Math.max(0, this.MF - 200);
          if (this.MF += bb, void 0 !== Mb.returnMs && wb > 0) {
            const bb = Mb.returnMs > 0 ? Math.exp(-3 * wb / Mb.returnMs) : 0;
            this.yawOffset *= bb, this.pitchOffset *= bb
          }
        }
        this.clampOffsets(Mb)
      }
      clampOffsets(bb) {
        if (bb.maxYaw >= 180) this.yawOffset = (0, Hb.v)(0, this.yawOffset);
        else {
          const wb = (0, Ib.o)(bb.maxYaw);
          this.yawOffset = Math.max(-wb, Math.min(wb, this.yawOffset))
        }
        const wb = (0, Ib.o)(bb.maxPitch);
        this.pitchOffset = Math.max(-wb, Math.min(wb, this.pitchOffset))
      }
      apply(bb, wb) {
        this.pointedAt && this.limits && (this.yawOffset = (0, Hb.v)(bb.heading, this.pointedAt.heading), this.pitchOffset = this.pointedAt.pitch - bb.pitch, this.pointedAt = null, this.clampOffsets(this.limits));
        const Mb = (0, Hb.f)(bb.pitch + this.pitchOffset);
        this.pitchOffset = Mb - bb.pitch, wb.heading = (0, Hb.u)(bb.heading + this.yawOffset), wb.pitch = Mb
      }
      unapply(bb, wb) {
        wb.heading = (0, Hb.u)(bb.heading - this.yawOffset), wb.pitch = (0, Hb.f)(bb.pitch - this.pitchOffset)
      }
    }
    const Bb = 1e-6;

    function sb(bb) {
      return Math.sqrt(bb[0] * bb[0] + bb[1] * bb[1] + bb[2] * bb[2])
    }

    function mb(bb, wb, Mb, eb, Hb) {
      const pb = Hb * Hb,
        Vb = pb * Hb;
      return (2 * Vb - 3 * pb + 1) * bb + (Vb - 2 * pb + Hb) * wb + (-2 * Vb + 3 * pb) * Mb + (Vb - pb) * eb
    }

    function hb(bb, wb, Mb, eb, Hb) {
      const pb = Hb * Hb;
      return (6 * pb - 6 * Hb) * bb + (3 * pb - 4 * Hb + 1) * wb + (-6 * pb + 6 * Hb) * Mb + (3 * pb - 2 * Hb) * eb
    }

    function zb(bb, wb) {
      const Mb = wb[0] - bb[0],
        eb = wb[1] - bb[1],
        Hb = wb[2] - bb[2];
      return Math.sqrt(Mb * Mb + eb * eb + Hb * Hb)
    }

    function Xb(bb, wb, Mb, eb, Hb, pb) {
      for (let Vb = 0; Vb < 3; Vb++) pb[Vb] = Hb ? bb[Vb] * eb : Mb[Vb] - wb[Vb];
      return Hb && function(bb, wb) {
        const Mb = sb(bb);
        if (Mb > wb) {
          const eb = wb / Mb;
          bb[0] *= eb, bb[1] *= eb, bb[2] *= eb
        }
      }(pb, 3 * zb(wb, Mb)), pb
    }

    function xb(bb, wb, Mb, eb) {
      for (let Hb = 0; Hb < 3; Hb++) eb[Hb] = 6 * (wb[Hb] - bb[Hb]) - 2 * Mb[Hb];
      if (sb(eb) < Bb)
        for (let Hb = 0; Hb < 3; Hb++) eb[Hb] = wb[Hb] - bb[Hb];
      return eb
    }

    function jb(bb, wb) {
      return [2 * wb[0] - bb[0], 2 * wb[1] - bb[1], 2 * wb[2] - bb[2]]
    }

    function Kb(bb, wb, Mb, eb, Hb, pb, Vb) {
      if (!pb && !Vb) return 0;
      const gb = pb ? bb : 2 * wb - Mb,
        lb = Vb ? Mb : 2 * wb - bb,
        Lb = pb ? eb : Hb,
        Ib = Vb ? Hb : eb,
        Ob = (wb - gb) / Lb,
        Ub = (lb - wb) / Ib;
      if (Ob * Ub <= 0) return 0;
      const tb = (lb - gb) / (Lb + Ib),
        Cb = 3 * Math.min(Math.abs(Ob), Math.abs(Ub));
      return Math.max(-Cb, Math.min(Cb, tb))
    }

    function rb(bb, wb, Mb, eb, Hb, pb, Vb) {
      const {
        u: gb,
        segmentMs: lb
      } = bb;
      if (!bb.curved) return Mb + (eb - Mb) * gb;
      return mb(Mb, Kb(wb, Mb, eb, bb.beforeMs, lb, pb, !0) * lb, eb, Kb(Mb, eb, Hb, lb, bb.afterMs, !0, Vb) * lb, gb)
    }

    function Rb(bb) {
      return Math.abs(bb.pitch) >= Hb.b
    }
    class Db {
      constructor(bb, wb, Mb, eb, Hb) {
        this.nodes = bb, this.prevNodes = Mb, this.nextNodes = eb, this.tangents = void 0, this.derivative = [0, 0, 0], this.beforeAngles = {
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
        }, this.tangents = bb.map(((bb, Mb) => this.nodeTangent(wb, Hb, Mb)))
      }
      sample(bb, wb, Mb) {
        const {
          index: eb,
          toIndex: pb,
          segmentMs: Vb,
          curved: gb
        } = bb, lb = this.fromAngles, Lb = this.toAngles, Ib = this.nodeAngles(eb, Mb.position, wb, lb), Ob = this.nodeAngles(pb, Mb.position, wb, Lb);
        if (Vb > 0 && "aim" !== Ib && "aim" !== Ob && this.liveTangent(bb, lb)) return Mb.heading = (0, Hb.u)(lb.heading), void(Mb.pitch = lb.pitch);
        if ("none" === Ib && "none" === Ob) return;
        !gb && Vb > 0 && ("tangent" === Ib && this.liveTangent(bb, lb), "tangent" === Ob && this.liveTangent(bb, Lb)), "none" === Ib ? (0, Hb.i)(Lb, lb) : "none" === Ob && (0, Hb.i)(lb, Lb);
        const Ub = gb && bb.beforeIndex >= 0 && "none" !== this.nodeAngles(bb.beforeIndex, Mb.position, wb, this.beforeAngles),
          tb = gb && bb.afterIndex >= 0 && "none" !== this.nodeAngles(bb.afterIndex, Mb.position, wb, this.afterAngles),
          Cb = (0, Hb.z)(lb.heading, Lb.heading),
          Eb = rb(bb, Ub ? (0, Hb.z)(lb.heading, this.beforeAngles.heading) : 0, lb.heading, Cb, tb ? (0, Hb.z)(Cb, this.afterAngles.heading) : 0, Ub, tb);
        Mb.heading = (0, Hb.u)(Eb), Mb.pitch = (0, Hb.f)(rb(bb, this.beforeAngles.pitch, lb.pitch, Lb.pitch, this.afterAngles.pitch, Ub, tb))
      }
      nodeAngles(bb, wb, Mb, eb) {
        const Hb = this.rawNodeAngles(bb, wb, Mb, eb);
        return "none" !== Hb && Rb(eb) && !this.borrowHeading(this.prevNodes[bb], wb, Mb, eb) && this.borrowHeading(this.nextNodes[bb], wb, Mb, eb), Hb
      }
      borrowHeading(bb, wb, Mb, eb) {
        const Hb = this.borrowedAngles;
        return !(bb < 0 || "none" === this.rawNodeAngles(bb, wb, Mb, Hb) || Rb(Hb)) && (eb.heading = Hb.heading, !0)
      }
      rawNodeAngles(bb, wb, Mb, eb) {
        const pb = this.nodes[bb].keyframe;
        if (pb.lookDirection) return (0, Hb.l)(pb.lookDirection, eb), "aim";
        if (void 0 !== pb.lookAt) {
          const bb = Mb(pb.lookAt);
          if (bb) return (0, Hb.q)(wb, bb, eb), "aim"
        }
        const Vb = this.tangents[bb];
        return Vb ? ((0, Hb.i)(Vb, eb), "tangent") : "none"
      }
      liveTangent(bb, wb) {
        const Mb = this.nodes[bb.index].position,
          eb = this.nodes[bb.toIndex].position,
          pb = this.derivative;
        for (let Hb = 0; Hb < 3; Hb++) pb[Hb] = hb(Mb[Hb], bb.fromTangent[Hb], eb[Hb], bb.toTangent[Hb], bb.u);
        return sb(pb) > 1e-9 ? ((0, Hb.l)(pb, wb), !0) : !(zb(Mb, eb) < Bb) && ((0, Hb.l)(xb(Mb, eb, bb.u < .5 ? bb.toTangent : bb.fromTangent, pb), wb), !0)
      }
      nodeTangent(bb, wb, Mb) {
        var eb;
        const pb = bb[Mb];
        if (sb(pb) > 1e-9) return (0, Hb.l)(pb, {
          heading: 0,
          pitch: 0
        });
        const Vb = null !== (eb = this.restDirectionTo(Mb, Mb + 1, bb, wb)) && void 0 !== eb ? eb : this.restDirectionTo(Mb, Mb - 1, bb, wb);
        return Vb ? (0, Hb.l)(Vb, {
          heading: 0,
          pitch: 0
        }) : null
      }
      restDirectionTo(bb, wb, Mb, eb) {
        const Hb = this.nodes[bb],
          pb = this.nodes[wb];
        if (!pb || zb(Hb.position, pb.position) < Bb) return null;
        const [Vb, gb] = wb > bb ? [Hb, pb] : [pb, Hb], lb = Xb(Mb[wb], Vb.position, gb.position, gb.timeMs - Vb.timeMs, eb, [0, 0, 0]);
        return xb(Vb.position, gb.position, lb, [0, 0, 0])
      }
    }

    function cb(bb, wb) {
      const Mb = bb.lookDirection || wb.lookDirection ? function(bb, wb) {
        if (!bb || !wb) return bb === wb;
        const Mb = sb(bb),
          eb = sb(wb);
        return Math.hypot(bb[0] / Mb - wb[0] / eb, bb[1] / Mb - wb[1] / eb, bb[2] / Mb - wb[2] / eb) < Bb
      }(bb.lookDirection, wb.lookDirection) : (eb = bb.lookAt, Hb = wb.lookAt, "object" !== typeof eb || "object" !== typeof Hb ? eb === Hb : zb(eb, Hb) < Bb);
      var eb, Hb;
      return zb(bb.position, wb.position) < Bb && bb.fov === wb.fov && Mb
    }
    class Yb {
      constructor(bb, wb, Mb) {
        if (this.smooth = wb, this.nodes = void 0, this.velocities = void 0, this.prevNodes = void 0, this.nextNodes = void 0, this.prevGaps = void 0, this.nextGaps = void 0, this.loopMs = void 0, this.aim = void 0, this.segment = {
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
          }, 0 === bb.length) throw new Error("A camera path needs at least one keyframe");
        for (let pb = 1; pb < bb.length; pb++)
          if (!(bb[pb].timeMs > bb[pb - 1].timeMs)) throw new Error("Camera path keyframe times must strictly increase");
        this.nodes = bb.map((bb => {
          var wb;
          return {
            timeMs: bb.timeMs,
            position: [...bb.position],
            keyframe: bb,
            easing: (0, pb.p)(null !== (wb = bb.easing) && void 0 !== wb ? wb : "linear")
          }
        }));
        const eb = this.nodes[0],
          Hb = this.nodes[this.nodes.length - 1],
          Vb = Mb && this.nodes.length > 1;
        Vb && !cb(eb.keyframe, Hb.keyframe) && this.nodes.push({
          ...eb,
          timeMs: Hb.timeMs + (Hb.timeMs - eb.timeMs) / (this.nodes.length - 1)
        }), this.loopMs = Vb ? this.nodes[this.nodes.length - 1].timeMs - eb.timeMs : 0, this.prevNodes = this.nodes.map(((bb, wb) => this.neighbour(wb, -1))), this.nextNodes = this.nodes.map(((bb, wb) => this.neighbour(wb, 1))), this.prevGaps = this.prevNodes.map(((bb, wb) => bb >= 0 ? this.gapMs(wb, -1) : 0)), this.nextGaps = this.nextNodes.map(((bb, wb) => bb >= 0 ? this.gapMs(wb, 1) : 0)), this.velocities = this.nodes.map(((bb, wb) => {
          const Mb = this.prevNodes[wb],
            eb = this.nextNodes[wb];
          return function(bb, wb, Mb, eb, Hb, pb) {
            if (pb[0] = 0, pb[1] = 0, pb[2] = 0, !bb && !Mb) return pb;
            const Vb = null !== bb && void 0 !== bb ? bb : jb(null !== Mb && void 0 !== Mb ? Mb : wb, wb),
              gb = null !== Mb && void 0 !== Mb ? Mb : jb(null !== bb && void 0 !== bb ? bb : wb, wb),
              lb = bb ? eb : Hb,
              Lb = Mb ? Hb : eb,
              Ib = zb(Vb, wb),
              Ob = zb(wb, gb);
            if (Ib < Bb || Ob < Bb) return pb;
            const Ub = Math.sqrt(Ib),
              tb = Math.sqrt(Ob),
              Cb = (Ub + tb) / (lb + Lb);
            for (let Eb = 0; Eb < 3; Eb++) {
              const bb = (wb[Eb] - Vb[Eb]) / Ub - (gb[Eb] - Vb[Eb]) / (Ub + tb) + (gb[Eb] - wb[Eb]) / tb;
              pb[Eb] = bb * Cb
            }
            return pb
          }(Mb >= 0 ? this.nodes[Mb].position : null, bb.position, eb >= 0 ? this.nodes[eb].position : null, this.prevGaps[wb], this.nextGaps[wb], [0, 0, 0])
        })), this.aim = new Db(this.nodes, this.velocities, this.prevNodes, this.nextNodes, wb)
      }
      sample(bb, wb, Mb, eb) {
        const Hb = this.findSegment(this.pathTime(bb));
        this.samplePosition(Hb, eb.position), this.aim.sample(Hb, wb, eb);
        const {
          beforeIndex: pb,
          afterIndex: Vb
        } = Hb;
        eb.fov = rb(Hb, pb >= 0 ? this.fovAt(pb, Mb) : 0, this.fovAt(Hb.index, Mb), this.fovAt(Hb.toIndex, Mb), Vb >= 0 ? this.fovAt(Vb, Mb) : 0, pb >= 0, Vb >= 0)
      }
      pathTime(bb) {
        const wb = this.nodes[0].timeMs;
        if (this.loopMs <= 0 || bb <= wb) return bb;
        const Mb = bb - wb;
        return wb + Mb - this.loopMs * Math.floor(Mb / this.loopMs)
      }
      findSegment(bb) {
        const wb = this.nodes,
          Mb = this.segment;
        let eb = Mb.index;
        for (bb < wb[eb].timeMs && (eb = 0); eb < wb.length - 2 && wb[eb + 1].timeMs <= bb;) eb++;
        const Hb = Math.min(eb + 1, wb.length - 1),
          Vb = wb[Hb].timeMs - wb[eb].timeMs;
        return Mb.index = eb, Mb.toIndex = Hb, Mb.segmentMs = Vb, Mb.u = Vb > 0 ? (0, pb.m)((bb - wb[eb].timeMs) / Vb, wb[eb].easing) : 1, Mb.curved = this.smooth && Vb > 0, Mb.beforeIndex = this.prevNodes[eb], Mb.afterIndex = this.nextNodes[Hb], Mb.beforeMs = this.prevGaps[eb], Mb.afterMs = this.nextGaps[Hb], Mb
      }
      samplePosition(bb, wb) {
        const {
          fromTangent: Mb,
          toTangent: eb,
          curved: Hb
        } = bb, pb = this.nodes[bb.index].position, Vb = this.nodes[bb.toIndex].position;
        Xb(this.velocities[bb.index], pb, Vb, bb.segmentMs, Hb, Mb), Xb(this.velocities[bb.toIndex], pb, Vb, bb.segmentMs, Hb, eb);
        const gb = bb.u;
        for (let lb = 0; lb < 3; lb++) wb[lb] = Hb ? mb(pb[lb], Mb[lb], Vb[lb], eb[lb], gb) : pb[lb] + (Vb[lb] - pb[lb]) * gb
      }
      fovAt(bb, wb) {
        var Mb;
        return null !== (Mb = this.nodes[bb].keyframe.fov) && void 0 !== Mb ? Mb : wb
      }
      neighbour(bb, wb) {
        const Mb = this.nodes.length - 1,
          eb = bb + wb;
        return eb >= 0 && eb <= Mb ? eb : this.loopMs <= 0 || Mb < 2 ? -1 : eb < 0 ? Mb - 1 : 1
      }
      gapMs(bb, wb) {
        const Mb = this.nodes.length - 1;
        if (1 === wb) {
          const wb = bb === Mb ? 0 : bb;
          return this.nodes[wb + 1].timeMs - this.nodes[wb].timeMs
        }
        const eb = 0 === bb ? Mb : bb;
        return this.nodes[eb].timeMs - this.nodes[eb - 1].timeMs
      }
    }

    function Zb(bb, wb, Mb) {
      return null !== Mb && Number.isFinite(Mb) ? (bb.set(wb, Mb), Mb) : bb.get(wb)
    }
    class fb {
      constructor(bb) {
        this.XO = bb, this.lastFeet = new Map, this.lastAimPoints = new Map, this.lastHeadings = new Map, this.lastPitches = new Map, this.lastLookHeadings = new Map, this.readFeet = void 0, this.readAimPoint = void 0, this.readFeet = wb => bb.getEntityPosition(wb), this.readAimPoint = wb => bb.getEntityAimPoint(wb)
      }
      aimPoint(bb) {
        return "string" !== typeof bb ? (0, lb.t)(bb, 3) ? bb : null : this.resolve(bb, this.readAimPoint, this.lastAimPoints)
      }
      currentAimPoint(bb) {
        const wb = "string" === typeof bb ? this.XO.getEntityAimPoint(bb) : bb;
        return wb && (0, lb.t)(wb, 3) ? wb : null
      }
      feetPosition(bb) {
        return this.resolve(bb, this.readFeet, this.lastFeet)
      }
      heading(bb) {
        const wb = Zb(this.lastHeadings, bb, this.XO.getEntityHeading(bb));
        return void 0 !== wb ? wb : bb === this.XO.localPlayerId ? 0 : this.heading(this.XO.localPlayerId)
      }
      pitch(bb) {
        var wb;
        return null !== (wb = Zb(this.lastPitches, bb, this.XO.getEntityPitch(bb))) && void 0 !== wb ? wb : 0
      }
      lookHeading(bb) {
        var wb;
        return null !== (wb = Zb(this.lastLookHeadings, bb, this.XO.getEntityLookHeading(bb))) && void 0 !== wb ? wb : this.heading(bb)
      }
      resolve(bb, wb, Mb) {
        const eb = wb(bb);
        let Hb = Mb.get(bb);
        return eb && (0, lb.t)(eb, 3) ? (Hb || (Hb = [0, 0, 0], Mb.set(bb, Hb)), Hb[0] = eb[0], Hb[1] = eb[1], Hb[2] = eb[2], Hb) : Hb || (bb === this.XO.localPlayerId ? null : this.resolve(this.XO.localPlayerId, wb, Mb))
      }
    }

    function Ab(bb) {
      return {
        heading: bb.heading,
        pitch: bb.pitch
      }
    }

    function Wb(bb, wb) {
      Number.isFinite(bb.heading) && Number.isFinite(bb.pitch) || (0, Hb.i)(wb, bb)
    }

    function Jb(bb, wb, Mb, eb, pb) {
      if (wb) return void(0, Hb.l)(wb, pb);
      const Vb = eb.aimPoint(Mb);
      Vb && (0, Hb.q)(bb, Vb, pb)
    }
    class Sb {
      constructor(bb, wb, Mb, eb) {
        this.settings = bb, this.XO = wb, this.targets = Mb, this.base = void 0, this.base = Ab(eb)
      }
      update(bb, wb, Mb) {
        var eb;
        const Hb = this.settings;
        (0, lb.k)(Hb.position, Mb.position), Jb(Hb.position, Hb.lookDirection, null !== (eb = Hb.lookAt) && void 0 !== eb ? eb : this.XO.localPlayerId, this.targets, this.base), wb.apply(this.base, Mb), Mb.fov = tb(Hb, this.XO)
      }
      continueFrom(bb) {
        bb instanceof Sb && (0, Hb.i)(bb.base, this.base)
      }
      reset(bb) {
        Wb(this.base, bb)
      }
    }
    class Nb {
      constructor(bb, wb, Mb, eb) {
        this.settings = bb, this.XO = wb, this.targets = Mb, this.base = void 0, this.goal = void 0, this.lastFeet = [0, 0, 0], this.foundFeet = !1, this.smoothed = [0, 0, 0], this.UF = [0, 0, 0], this.started = !1, this.distance = -1, this.toCamera = [0, 0, 0], this.aimOrigin = [0, 0, 0], this.eyeHeading = NaN, this.eyePitch = NaN, this.base = Ab(eb), this.goal = [...eb.position]
      }
      update(bb, wb, Mb) {
        var eb, pb;
        const Vb = this.settings,
          gb = null !== (eb = Vb.target) && void 0 !== eb ? eb : this.XO.localPlayerId,
          Lb = this.targets.feetPosition(gb),
          Ib = "eye" === Vb.anchor;
        let Ob = !1;
        var Ub;
        Lb && (Ob = this.foundFeet && zb(this.lastFeet, Lb) > 32 + .1 * bb, (0, lb.k)(Lb, this.lastFeet), this.foundFeet = !0, this.placeGoal(null !== (Ub = Ib ? this.targets.aimPoint(gb) : null) && void 0 !== Ub ? Ub : Lb, gb));
        const Eb = null !== (pb = Vb.smoothMs) && void 0 !== pb ? pb : 0;
        !this.started || Eb < 1 || Ob ? ((0, lb.k)(this.goal, this.smoothed), this.UF.fill(0), this.started = !0) : Cb(this.smoothed, this.UF, this.goal, Eb, bb), Ob && (this.distance = -1), (0, lb.k)(this.smoothed, Mb.position);
        const Fb = !0 === Vb.avoidTerrain ? this.pullIn(gb, bb, Mb) : 1;
        let Bb = this.goal;
        if ("target" === Vb.offsetSpace) Bb = Mb.position;
        else if (Fb < 1) {
          Bb = this.aimOrigin;
          for (let bb = 0; bb < 3; bb++) Bb[bb] = Mb.position[bb] + (this.goal[bb] - this.smoothed[bb]) * Fb
        }
        if (Ib && !Vb.lookDirection && void 0 === Vb.lookAt) {
          const wb = this.targets.lookHeading(gb),
            Mb = this.targets.pitch(gb),
            eb = 1 - Math.exp(-bb / 50),
            pb = (0, Hb.u)(this.eyeHeading + (0, Hb.v)(this.eyeHeading, wb) * eb),
            Vb = this.eyePitch + (Mb - this.eyePitch) * eb,
            lb = gb !== this.XO.localPlayerId && Number.isFinite(pb) && Number.isFinite(Vb) && !Ob;
          this.eyeHeading = lb ? pb : (0, Hb.u)(wb), this.eyePitch = lb ? Vb : Mb, this.base.heading = this.eyeHeading, this.base.pitch = this.eyePitch
        } else {
          var sb;
          this.eyeHeading = NaN, this.eyePitch = NaN, Jb(Bb, Vb.lookDirection, null !== (sb = Vb.lookAt) && void 0 !== sb ? sb : gb, this.targets, this.base)
        }
        wb.apply(this.base, Mb), Mb.fov = tb(Vb, this.XO)
      }
      continueFrom(bb) {
        bb instanceof Nb && (0, eb.w)(bb.settings.target, this.settings.target) && ((0, Hb.i)(bb.base, this.base), (0, lb.k)(bb.goal, this.goal), (0, lb.k)(bb.lastFeet, this.lastFeet), this.foundFeet = bb.foundFeet, (0, lb.k)(bb.smoothed, this.smoothed), (0, lb.k)(bb.UF, this.UF), this.started = bb.started, this.eyeHeading = bb.eyeHeading, this.eyePitch = bb.eyePitch, !0 === bb.settings.avoidTerrain && (this.distance = bb.distance))
      }
      reset(bb) {
        Wb(this.base, bb), this.UF.fill(0), this.started = !1, this.distance = -1, this.eyeHeading = NaN, this.eyePitch = NaN
      }
      pullIn(bb, wb, Mb) {
        const eb = this.targets.aimPoint(bb);
        if (!eb) return 1;
        const Hb = Mb.position,
          pb = zb(eb, Hb);
        if (!(pb > 0)) return 1;
        const Vb = this.toCamera;
        for (let lb = 0; lb < 3; lb++) Vb[lb] = (Hb[lb] - eb[lb]) / pb;
        const gb = function(bb, wb, Mb) {
          return bb < 0 || wb < bb ? wb : wb + (bb - wb) * Math.exp(-Mb / 150)
        }(this.distance, function(bb, wb, Mb, eb) {
          const Hb = bb.raycastTerrain(wb, Mb, eb);
          return null !== Hb && Number.isFinite(Hb) ? Math.min(eb, Math.max(0, Hb - .2)) : eb
        }(this.XO, eb, Vb, pb), wb);
        if (pb - gb < .001) return this.distance = -1, 1;
        this.distance = gb;
        for (let lb = 0; lb < 3; lb++) Hb[lb] = eb[lb] + Vb[lb] * gb;
        return gb / pb
      }
      placeGoal(bb, wb) {
        const Mb = this.settings.offset;
        let eb = Mb[0],
          Hb = Mb[2];
        if ("target" === this.settings.offsetSpace) {
          const bb = this.targets.heading(wb),
            pb = Math.cos(bb),
            Vb = Math.sin(bb);
          eb = Mb[0] * pb + Mb[2] * Vb, Hb = -Mb[0] * Vb + Mb[2] * pb
        }
        this.goal[0] = bb[0] + eb, this.goal[1] = bb[1] + Mb[1], this.goal[2] = bb[2] + Hb
      }
    }
    class vb {
      constructor(bb, wb, Mb, eb) {
        var Hb, pb;
        this.settings = bb, this.XO = wb, this.sampler = void 0, this.base = void 0, this.resolveTarget = void 0, this.elapsedMs = 0, this.sampler = bb.keyframes.length > 0 ? new Yb(bb.keyframes, null === (Hb = bb.smooth) || void 0 === Hb || Hb, null !== (pb = bb.loop) && void 0 !== pb && pb) : null, this.base = (0, lb.h)(eb, (0, lb.o)()), this.resolveTarget = bb => Mb.aimPoint(bb)
      }
      update(bb, wb, Mb) {
        this.elapsedMs += bb;
        const eb = tb(this.settings, this.XO);
        this.sampler ? this.sampler.sample(this.elapsedMs, this.resolveTarget, eb, this.base) : this.base.fov = eb, (0, lb.k)(this.base.position, Mb.position), Mb.fov = this.base.fov, wb.apply(this.base, Mb)
      }
      continueFrom(bb) {
        bb instanceof vb && (0, eb.w)(bb.settings.keyframes, this.settings.keyframes) && (this.elapsedMs = bb.elapsedMs, (0, lb.h)(bb.base, this.base))
      }
      reset(bb) {
        Wb(this.base, bb), Number.isFinite(this.elapsedMs) || (this.elapsedMs = 0)
      }
    }

    function Qb(bb, wb) {
      return (0, eb.x)(bb, wb)
    }
    class Gb {
      constructor(bb, wb, Mb) {
        var eb;
        this.settings = bb, this.XO = wb, this.pose = void 0, this.lastGoodPose = void 0, this.look = void 0, this.targets = void 0, this.mode = void 0, this.warnedNonFinite = !1;
        const Hb = null !== Mb && Mb.settings.mode === bb.mode,
          pb = Hb ? Mb.pose : wb.getDefaultPose();
        this.pose = (0, lb.h)(pb, (0, lb.o)()), this.lastGoodPose = (0, lb.h)(Hb ? Mb.lastGoodPose : pb, (0, lb.o)()), this.look = new Fb(bb.playerLook), this.targets = null !== (eb = null === Mb || void 0 === Mb ? void 0 : Mb.targets) && void 0 !== eb ? eb : new fb(wb);
        const Vb = (0, lb.h)(pb, (0, lb.o)());
        Hb && Mb.look.unapply(Vb, Vb), this.mode = function(bb, wb, Mb, eb) {
          switch (bb.mode) {
            case "fixed":
              return new Sb(bb, wb, Mb, eb);
            case "follow":
              return new Nb(bb, wb, Mb, eb);
            case "path":
              return new vb(bb, wb, Mb, eb);
            case "frame":
              return new Eb(bb, wb, Mb, eb)
          }
        }(bb, wb, this.targets, Vb), Hb && (this.look.continueFrom(Mb.look), this.mode.continueFrom(Mb.mode))
      }
      update(bb, wb) {
        return this.look.update(bb, wb), this.mode.update(bb, this.look, this.pose), (0, lb.s)(this.pose) ? (0, lb.h)(this.pose, this.lastGoodPose) : (this.warnedNonFinite || (console.warn("Scripted camera produced a non-finite pose; holding the last good one"), this.warnedNonFinite = !0), (0, lb.h)(this.lastGoodPose, this.pose), this.mode.reset((0, lb.s)(this.lastGoodPose) ? this.lastGoodPose : this.XO.getDefaultPose())), this.pose
      }
    }

    function qb(bb) {
      return [0, 0, bb[2], bb[3]]
    }
    class ab {
      constructor(bb) {
        this.XO = bb, this.settings = {
          mode: "default"
        }, this.pending = null, this.fade = new gb, this.shot = null, this.blend = null, this.mixed = (0, lb.o)(), this.output = (0, lb.o)(), this.hasOutput = !1, this.loadingPositions = [], this.loadingSlots = Array.from({
          length: 3
        }, (() => [0, 0, 0]))
      }
      setSettings(bb) {
        const wb = (0, Lb.d)(bb);
        if ((0, eb.w)(wb, this.pending ? this.pending.settings : this.settings)) return;
        const Mb = Qb(this.settings, wb);
        if (void 0 !== wb.transition && !Mb) return this.pending = {
          settings: wb,
          shot: "default" === wb.mode ? null : new Gb(wb, this.XO, null)
        }, void this.fade.fadeOut(wb.transition);
        const Hb = null !== this.pending;
        this.pending = null, !Hb && Mb || this.fade.fadeIn(eb.o.minTransitionFadeMs), this.show(wb, !1)
      }
      show(bb, wb) {
        var Mb, Hb;
        if ((0, eb.w)(bb, this.settings)) return;
        const Vb = !wb && Qb(this.settings, bb);
        this.settings = bb;
        const gb = null !== this.blend && this.blend.elapsedMs > 0,
          Lb = (0, lb.h)(this.hasOutput ? this.output : this.XO.getDefaultPose(), (0, lb.o)());
        if (this.shot = "default" === bb.mode ? null : new Gb(bb, this.XO, wb ? null : this.shot), Vb) return;
        const Ib = wb || !this.shot && !this.hasOutput ? 0 : null !== (Mb = bb.blendInMs) && void 0 !== Mb ? Mb : 0;
        if (Ib <= 0) return void(this.blend = null);
        const Ob = (0, pb.p)(null !== (Hb = bb.blendEasing) && void 0 !== Hb ? Hb : "easeInOut");
        this.blend = {
          from: Lb,
          fromScripted: this.hasOutput,
          headingDelta: NaN,
          elapsedMs: 0,
          durationMs: Ib,
          easing: gb ? qb(Ob) : Ob
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
      update(bb, wb) {
        const Mb = Number.isFinite(bb) && bb > 0 ? bb : 0;
        if (this.fade.advance(Mb) && null !== this.pending) {
          const {
            settings: bb
          } = this.pending;
          this.pending = null, this.show(bb, !0)
        }
        this.loadingPositions.length = 0;
        const eb = this.pending;
        if (null !== eb && void 0 !== eb && eb.shot) {
          const bb = "path" === eb.settings.mode ? 0 : Mb;
          this.noteLoadingPosition(eb.shot.update(bb, lb.e).position)
        }
        if (!this.isActive()) return this.hasOutput = !1, null;
        const Vb = this.shot ? this.shot.update(Mb, wb) : this.XO.getDefaultPose();
        this.shot && this.noteLoadingPosition(Vb.position);
        const gb = this.blend;
        if (!gb) return this.writeOutput(Vb);
        gb.elapsedMs += Mb;
        const Lb = Math.min(1, gb.elapsedMs / gb.durationMs);
        if (gb.headingDelta = Number.isFinite(gb.headingDelta) ? (0, Hb.z)(gb.headingDelta, Vb.heading - gb.from.heading) : (0, Hb.v)(gb.from.heading, Vb.heading), (0, lb.u)(gb.from, Vb, gb.headingDelta, (0, pb.m)(Lb, gb.easing), this.mixed), Lb >= 1) {
          if (this.blend = null, !this.shot) return this.hasOutput = !1, null
        } else gb.fromScripted && this.noteLoadingPosition(gb.from.position);
        return this.writeOutput(this.mixed)
      }
      noteLoadingPosition(bb) {
        if (bb.every(Number.isFinite)) {
          const wb = this.loadingPositions;
          wb.push((0, lb.k)(bb, this.loadingSlots[wb.length]))
        }
      }
      writeOutput(bb) {
        const wb = this.output;
        (0, lb.s)(bb) ? (0, lb.h)(bb, wb) : this.hasOutput || (0, lb.h)(this.XO.getDefaultPose(), wb), wb.pitch = (0, Hb.f)(wb.pitch);
        const Mb = this.XO.getDefaultFov(),
          pb = Number.isFinite(Mb) && Mb > 0 && Mb < 180,
          Vb = pb ? Math.min(eb.o.minFov, Mb) : eb.o.minFov,
          gb = pb ? Math.max(eb.o.maxFov, Mb) : eb.o.maxFov;
        return wb.fov = Number.isFinite(wb.fov) ? Math.min(gb, Math.max(Vb, wb.fov)) : gb, this.hasOutput = !0, wb
      }
    }
  },
  40530: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Hb,
      h: () => gb,
      k: () => Vb,
      o: () => pb,
      s: () => Lb,
      t: () => lb,
      u: () => Ib
    });
    var eb = Mb(37947);
    const Hb = {
      DW: 0,
      cW: 0
    };

    function pb() {
      return {
        position: [0, 0, 0],
        heading: 0,
        pitch: 0,
        fov: 0
      }
    }

    function Vb(bb, wb) {
      return wb[0] = bb[0], wb[1] = bb[1], wb[2] = bb[2], wb
    }

    function gb(bb, wb) {
      return Vb(bb.position, wb.position), wb.heading = bb.heading, wb.pitch = bb.pitch, wb.fov = bb.fov, wb
    }

    function lb(bb, wb) {
      return Array.isArray(bb) && bb.length === wb && bb.every(Number.isFinite)
    }

    function Lb(bb) {
      return lb(bb.position, 3) && Number.isFinite(bb.heading) && Number.isFinite(bb.pitch) && Number.isFinite(bb.fov)
    }

    function Ib(bb, wb, Mb, Hb, pb) {
      for (let eb = 0; eb < 3; eb++) pb.position[eb] = bb.position[eb] + (wb.position[eb] - bb.position[eb]) * Hb;
      return pb.heading = (0, eb.u)(bb.heading + Mb * Hb), pb.pitch = bb.pitch + (wb.pitch - bb.pitch) * Hb, pb.fov = bb.fov + (wb.fov - bb.fov) * Hb, pb
    }
  },
  40553: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => jb,
      f: () => tb
    });
    var eb = Mb(40549),
      Hb = Mb(40530);
    const pb = eb.j,
      Vb = eb.s,
      gb = eb.k;

    function lb(bb, wb, Mb, eb) {
      return Number.isFinite(bb) ? Math.min(Mb, Math.max(wb, bb)) : eb
    }

    function Lb(bb, wb, Mb) {
      return void 0 !== bb && Number.isFinite(bb) ? Math.min(Mb, Math.max(wb, bb)) : void 0
    }

    function Ib(bb) {
      const wb = eb.o.maxCoordinate;
      return [Math.min(wb, Math.max(-wb, bb[0])), Math.min(wb, Math.max(-wb, bb[1])), Math.min(wb, Math.max(-wb, bb[2]))]
    }

    function Ob(bb) {
      return "string" === typeof bb ? bb : (0, Hb.t)(bb, 3) ? Ib(bb) : void 0
    }
    const Ub = new RegExp(eb.v);

    function tb(bb) {
      return "string" === typeof bb && Ub.test(bb)
    }

    function Cb(bb) {
      const wb = [];
      if (!Array.isArray(bb)) return wb;
      for (const Mb of bb.slice(0, eb.o.maxFrameTargets)) {
        const bb = Ob(Mb);
        void 0 === bb || "string" === typeof bb && !tb(bb) || wb.push(bb)
      }
      return wb
    }

    function Eb(bb) {
      if (!(0, Hb.t)(bb, 3)) return;
      const wb = Math.max(Math.abs(bb[0]), Math.abs(bb[1]), Math.abs(bb[2])),
        Mb = Math.hypot(bb[0] / wb, bb[1] / wb, bb[2] / wb);
      return 0 === wb || wb * Mb < eb.o.minDirectionLength ? void 0 : [bb[0] / wb / Mb, bb[1] / wb / Mb, bb[2] / wb / Mb]
    }

    function Fb(bb) {
      if (void 0 !== bb) return "string" === typeof bb ? pb.includes(bb) ? bb : void 0 : (0, Hb.t)(bb, 4) ? [lb(bb[0], 0, 1, 0), lb(bb[1], eb.o.minEasingY, eb.o.maxEasingY, 0), lb(bb[2], 0, 1, 1), lb(bb[3], eb.o.minEasingY, eb.o.maxEasingY, 1)] : "linear"
    }

    function Bb(bb) {
      if (bb) return {
        maxYaw: lb(bb.maxYaw, 0, eb.o.maxPlayerLook, 0),
        maxPitch: lb(bb.maxPitch, 0, eb.o.maxPlayerLook, 0),
        returnMs: Lb(bb.returnMs, 0, eb.o.maxReturnMs)
      }
    }
    const sb = new RegExp(eb.e);

    function mb(bb) {
      var wb;
      if ("object" !== typeof bb || null === bb) return;
      const Mb = eb.o.maxTransitionMs,
        Hb = eb.o.minTransitionFadeMs;
      return {
        colour: "string" === typeof bb.colour && sb.test(bb.colour) ? bb.colour : eb.g,
        outMs: lb(bb.outMs, Hb, Mb, Hb),
        holdMs: lb(null !== (wb = bb.holdMs) && void 0 !== wb ? wb : 0, 0, Mb, 0),
        inMs: lb(bb.inMs, Hb, Mb, Hb)
      }
    }

    function hb(bb) {
      return !0 === bb || void 0
    }

    function zb(bb) {
      if ("object" !== typeof bb || null === bb) return !1;
      const wb = bb.lookAt;
      return Number.isFinite(bb.timeMs) && (0, Hb.t)(bb.position, 3) && (void 0 === wb || "string" === typeof wb || (0, Hb.t)(wb, 3))
    }

    function Xb(bb) {
      return {
        ...bb,
        timeMs: lb(bb.timeMs, 0, eb.o.maxPathMs, 0),
        position: Ib(bb.position),
        lookAt: Ob(bb.lookAt),
        lookDirection: Eb(bb.lookDirection),
        fov: Lb(bb.fov, eb.o.minFov, eb.o.maxFov),
        easing: Fb(bb.easing)
      }
    }

    function xb(bb) {
      const wb = [];
      if (!Array.isArray(bb)) return wb;
      for (const Mb of bb.slice(0, eb.o.maxKeyframes)) {
        if (!zb(Mb)) continue;
        const bb = Xb(Mb);
        (0 === wb.length || bb.timeMs > wb[wb.length - 1].timeMs) && wb.push(bb)
      }
      return wb
    }

    function jb(bb) {
      if ("object" !== typeof bb || null === bb) return {
        mode: "default"
      };
      const wb = {
          blendInMs: Lb(bb.blendInMs, 0, eb.o.maxBlendInMs),
          blendEasing: Fb(bb.blendEasing),
          transition: mb(bb.transition),
          letterbox: hb(bb.letterbox),
          hideHud: hb(bb.hideHud)
        },
        Mb = {
          mode: "default",
          ...wb
        };
      if ("default" === bb.mode || "fixed" === bb.mode && !(0, Hb.t)(bb.position, 3)) return Mb;
      const pb = {
        ...wb,
        fov: Lb(bb.fov, eb.o.minFov, eb.o.maxFov),
        playerFacing: (Ub = bb.playerFacing, Vb.includes(Ub) ? Ub : void 0),
        playerLook: Bb(bb.playerLook)
      };
      var Ub, tb, sb;
      switch (bb.mode) {
        case "fixed":
          return {
            ...bb, ...pb, position: Ib(bb.position), lookAt: Ob(bb.lookAt), lookDirection: Eb(bb.lookDirection)
          };
        case "follow":
          return {
            ...bb, ...pb, target: "string" === typeof bb.target ? bb.target : void 0, anchor: (sb = bb.anchor, gb.includes(sb) ? sb : void 0), lookAt: Ob(bb.lookAt), offset: (tb = bb.offset, Array.isArray(tb) ? [lb(tb[0], -eb.o.maxOffset, eb.o.maxOffset, 0), lb(tb[1], -eb.o.maxOffset, eb.o.maxOffset, 0), lb(tb[2], -eb.o.maxOffset, eb.o.maxOffset, 0)] : [0, 0, 0]), lookDirection: Eb(bb.lookDirection), smoothMs: Lb(bb.smoothMs, 0, eb.o.maxSmoothMs)
          };
        case "path":
          return {
            ...bb, ...pb, keyframes: xb(bb.keyframes)
          };
        case "frame":
          return {
            ...bb, ...pb, targets: Cb(bb.targets), viewHeading: Lb(bb.viewHeading, -eb.o.maxFrameHeading, eb.o.maxFrameHeading), viewElevation: Lb(bb.viewElevation, 0, eb.o.maxFrameElevation), padding: Lb(bb.padding, 0, eb.o.maxFrameDistance), closestDistance: Lb(bb.closestDistance, 0, eb.o.maxFrameDistance), furthestDistance: Lb(bb.furthestDistance, 0, eb.o.maxFrameDistance), smoothMs: Lb(bb.smoothMs, 0, eb.o.maxSmoothMs)
          };
        default:
          return Mb
      }
    }
  },
  40586: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => eb
    });
    const eb = {
      message: [{
        translationKey: "general:bunnyHoppingDisabled"
      }],
      timeoutLength: 2e3,
      type: "Error"
    }
  },
  40457: (bb, wb, Mb) => {
    function eb(bb, wb) {
      return wb.set(bb), wb
    }
    Mb.d(wb, {
      c: () => eb
    })
  },
  40451: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Vb
    });
    var eb = Mb(3567),
      Hb = Mb.n(eb);
    const pb = [1, 1, 1];

    function Vb(bb) {
      if (!bb) return [...pb];
      try {
        const [wb, Mb, eb] = Hb()(bb).rgb().array();
        return [wb / 255, Mb / 255, eb / 255]
      } catch (wb) {
        return console.warn(`Invalid groundArrowPath colour "${bb}":`, wb), [...pb]
      }
    }
  },
  40577: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => gb,
      d: () => Lb,
      e: () => lb
    });
    var eb = Mb(332),
      Hb = Mb(4139);
    const pb = /\/textures\/skyBoxes\/(space_blue|space_lightblue|space_red_2|space_white)\/(_[np][xyz]\.jpg)$/,
      Vb = 512;

    function gb(bb) {
      var wb;
      const Mb = Math.min(screen.width, screen.height) * (null !== (wb = (0, eb.c)()) && void 0 !== wb ? wb : (0, Hb.k)());
      return Math.max(window.innerHeight * (0, Hb.k)(), Mb) / (0, Hb.n)(bb)
    }

    function lb(bb, wb, Mb) {
      return wb / (2 * Math.tan(Mb / 2)) > Vb ? bb : Lb(bb)
    }

    function Lb(bb) {
      return bb.map((bb => bb.replace(pb, "/textures/skyBoxes/$1/1024/$2")))
    }
  },
  40446: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Hb
    });
    var eb = Mb(225);

    function Hb(bb, wb, Mb, Hb, pb, Vb, gb, lb, Lb, Ib, Ob) {
      const Ub = eb.e.gO,
        tb = pb - Mb;
      let Cb = tb * (Vb - Hb);
      Ib.fill(0, 0, Cb);
      for (let eb = Math.floor((lb - 1) / Ub);
        (eb + 1) * Ub > gb; eb--) {
        const Eb = eb * Ub;
        for (let Fb = Math.floor(Mb / Ub); Fb * Ub < pb; Fb++) {
          const Bb = Fb * Ub,
            sb = Math.max(Mb - Bb, 0),
            mb = Math.min(pb - Bb, Ub);
          for (let pb = Math.floor(Hb / Ub); pb * Ub < Vb; pb++) {
            const hb = bb(Fb, eb, pb);
            if (!hb) continue;
            const zb = pb * Ub,
              Xb = Math.max(Hb - zb, 0),
              xb = Math.min(Vb - zb, Ub),
              jb = hb.vt,
              Kb = hb.GU,
              rb = Kb.data;
            for (let bb = Math.min(lb - 1 - Eb, Ub - 1); bb >= Math.max(gb - Eb, 0); bb--) {
              const eb = jb[bb],
                pb = eb === wb;
              if (pb || 0 !== Lb[eb]) {
                for (let wb = sb; wb < mb; wb++)
                  for (let Vb = Xb; Vb < xb; Vb++) {
                    const gb = (zb + Vb - Hb) * tb + Bb + wb - Mb;
                    if (0 !== Ib[gb]) continue;
                    const lb = pb ? rb[Kb.index(wb, bb, Vb)] : eb;
                    0 !== Lb[lb] && (Ib[gb] = lb, Ob[gb] = Eb + bb, Cb--)
                  }
                if (0 === Cb) return
              }
            }
          }
        }
      }
    }
  },
  35144: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => pb,
      f: () => gb,
      i: () => Vb,
      j: () => Hb,
      n: () => eb
    });
    const eb = {
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
      Hb = "/textures/dayNight/sun.png",
      pb = "/textures/dayNight/moon.png",
      Vb = "/textures/dayNight/stars",
      gb = ["_px.png", "_py.png", "_pz.png", "_nx.png", "_ny.png", "_nz.png"]
  },
  40549: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Ob,
      g: () => Ub,
      j: () => eb,
      k: () => Hb,
      o: () => Lb,
      s: () => pb,
      v: () => Ib,
      w: () => lb,
      x: () => gb
    });
    const eb = ["linear", "easeIn", "easeOut", "easeInOut"],
      Hb = ["feet", "eye"],
      pb = ["movement", "camera", "cursor"],
      Vb = ["targets", "playerFacing", "blendInMs", "blendEasing", "transition", "letterbox", "hideHud"];

    function gb(bb, wb) {
      return lb(bb, wb, Vb)
    }

    function lb(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      if (bb === wb || Number.isNaN(bb) && Number.isNaN(wb)) return !0;
      if ("object" !== typeof bb || "object" !== typeof wb || null === bb || null === wb || Array.isArray(bb) !== Array.isArray(wb)) return !1;
      const eb = bb,
        Hb = wb;
      for (const pb of new Set([...Object.keys(eb), ...Object.keys(Hb)]))
        if (!Mb.includes(pb) && !lb(eb[pb], Hb[pb])) return !1;
      return !0
    }
    const Lb = {
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
      Ib = "^-[1-9][0-9]*$",
      Ob = "^#[0-9a-fA-F]{6}$",
      Ub = "#000000"
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);