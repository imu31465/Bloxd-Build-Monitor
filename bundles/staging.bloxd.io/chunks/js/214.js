export const id = 214;
export const ids = [214];
export const modules = {
  40732: (dd, Od, md) => {
    md.d(Od, {
      e: () => Wd
    });
    class Wd {
      constructor(dd, Od) {
        this.read = dd, this.apply = Od, this.release = null
      }
      turn(dd, Od) {
        const md = null === this.release ? this.read() : this.release.transitionMs;
        this.stop(!1), this.apply({
          forcedCameraDirectionTransitionMs: Od,
          forcedCameraDirection: [dd[0], dd[1], dd[2]]
        }), this.release = {
          timer: setTimeout((() => {
            this.stop(!0)
          }), Od + 100),
          transitionMs: md
        }
      }
      dispose() {
        this.stop(!0)
      }
      stop(dd) {
        null !== this.release && (clearTimeout(this.release.timer), dd && this.apply({
          forcedCameraDirection: null,
          forcedCameraDirectionTransitionMs: this.release.transitionMs
        }), this.release = null)
      }
    }
  },
  40251: (dd, Od, md) => {
    md.d(Od, {
      e: () => Rd,
      i: () => Fd
    });
    const Wd = new Map;

    function Fd(dd, Od) {
      Wd.set(dd, Od)
    }

    function Rd(dd) {
      return dd ? Wd.get(dd) : void 0
    }
  },
  37915: (dd, Od, md) => {
    md.d(Od, {
      d: () => Qd,
      h: () => Kd,
      l: () => vd,
      m: () => hd,
      o: () => pd
    });
    var Wd = md(708),
      Fd = md(1906),
      Rd = md(5571);
    class Xd {
      constructor(dd, Od) {
        this.width = dd, this.Mt = Od, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(dd * Od)
      }
      push(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const md = this.data,
          Wd = this.next * this.width;
        for (let Fd = 0; Fd < this.width; Fd++) md[Wd + Fd] = dd[Od + Fd];
        this.next = (this.next + 1) % this.Mt, this.size = Math.min(this.size + 1, this.Mt)
      }
      rows() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1 / 0;
        const md = [],
          Wd = (this.next - this.size + this.Mt) % this.Mt;
        for (let Fd = 0; Fd < this.size; Fd++) {
          const Rd = (Wd + Fd) % this.Mt * this.width;
          this.data[Rd + dd] >= Od && md.push(Array.from(this.data.subarray(Rd, Rd + this.width)))
        }
        return md
      }
      lines() {
        return this.rows().map((dd => dd.join(",")))
      }
    }
    const Kd = 10,
      hd = {
        idle: 0,
        kQ: 1,
        sV: 2,
        rV: 3,
        Ly: 4
      },
      vd = {
        none: 0,
        skipped: 1,
        paced: 2,
        drawn: 3
      },
      Qd = {
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
      td = 12e3,
      od = ["nowMs", "dtMs", "rawX", "rawY", "turnedX", "turnedY", "outcome", "velocityX", "velocityY", "limit"],
      Nd = ["timeStamp", "nowMs", "movementX", "movementY", "locked"],
      qd = ["nowMs", "dtMs", "heading", "pitch", "kind"],
      Hd = ["nowMs", "source", "headingBefore", "pitchBefore", "headingAfter", "pitchAfter"],
      yd = ["nowMs", "change", "count"];

    function bd(dd) {
      return "js" === dd ? Qd.jsClient : Qd.wasmClient
    }
    class Td {
      constructor() {
        this.steps = new Xd(Kd, td), this.events = new Xd(Nd.length, td), this.frames = new Xd(qd.length, td), this.cameraSets = new Xd(Rd.h, 256), this.changes = new Xd(yd.length, 256)
      }
    }
    const pd = new class {
      constructor() {
        this.rings = null, this.sample = new Float64Array(Nd.length), this.startedClient = null, this.startedAtMs = 0
      }
      get client() {
        return this.startedClient
      }
      start(dd, Od) {
        this.startedClient = dd, this.startedAtMs = performance.now(), null !== this.rings ? this.change(bd(dd)) : Od && this.allocate()
      }
      lockGained() {
        this.allocate(), this.change(Qd.lockGained)
      }
      allocate() {
        null === this.rings && (this.rings = new Td, null !== this.startedClient && this.changeAt(this.startedAtMs, bd(this.startedClient), 1))
      }
      step(dd, Od) {
        var md;
        dd[Od + 6] !== hd.Ly && (null === (md = this.rings) || void 0 === md || md.steps.push(dd, Od))
      }
      cameraSet(dd, Od) {
        var md;
        null === (md = this.rings) || void 0 === md || md.cameraSets.push(dd, Od)
      }
      mouseMove(dd, Od) {
        const md = this.rings;
        if (null === md) return;
        const Wd = this.sample;
        Wd[0] = dd.timeStamp, Wd[1] = performance.now(), Wd[2] = dd.movementX, Wd[3] = dd.movementY, Wd[4] = Od ? 1 : 0, md.events.push(Wd)
      }
      frame(dd, Od, md, Wd) {
        const Fd = this.rings;
        if (null === Fd || Wd === vd.none) return;
        const Rd = this.sample;
        Rd[0] = performance.now(), Rd[1] = dd, Rd[2] = Od, Rd[3] = md, Rd[4] = Wd, Fd.frames.push(Rd)
      }
      change(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.changeAt(performance.now(), dd, Od)
      }
      changeAt(dd, Od, md) {
        const Wd = this.rings;
        if (null === Wd) return;
        const Fd = this.sample;
        Fd[0] = dd, Fd[1] = Od, Fd[2] = md, Wd.changes.push(Fd)
      }
      dumpText() {
        var dd, Od;
        const md = this.rings;
        return [`look records (${this.startedClient}): ${od.join(",")}`, ...null !== (dd = null === md || void 0 === md ? void 0 : md.steps.lines()) && void 0 !== dd ? dd : [], `mousemove events: ${Nd.join(",")}`, ...null !== (Od = null === md || void 0 === md ? void 0 : md.events.lines()) && void 0 !== Od ? Od : []].join("\n")
      }
      toJson(dd, Od) {
        var md;
        const Fd = dd - 6e4,
          Rd = this.rings,
          Xd = function(dd, Od) {
            var md;
            let Wd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            const Rd = null !== (md = null === dd || void 0 === dd ? void 0 : dd.rows(Wd, Fd)) && void 0 !== md ? md : [];
            return {
              columns: Od,
              fromMs: 0 === Rd.length ? null : Rd[0][Wd],
              rows: Rd
            }
          };
        return {
          version: Wd.c,
          client: null !== (md = this.startedClient) && void 0 !== md ? md : "not started",
          savedAt: (new Date).toISOString(),
          savedAtMs: dd,
          keptMs: 6e4,
          page: window.location.href,
          userAgent: navigator.userAgent,
          devicePixelRatio: window.devicePixelRatio,
          screen: {
            width: window.screen.width,
            height: window.screen.height
          },
          tb: null !== document.pointerLockElement,
          visibility: document.visibilityState,
          ...Od,
          outcomes: hd,
          frameKinds: vd,
          changes: Qd,
          lookSteps: Xd(null === Rd || void 0 === Rd ? void 0 : Rd.steps, od),
          mouseMoves: Xd(null === Rd || void 0 === Rd ? void 0 : Rd.events, Nd, 1),
          frames: Xd(null === Rd || void 0 === Rd ? void 0 : Rd.frames, qd),
          cameraSets: Xd(null === Rd || void 0 === Rd ? void 0 : Rd.cameraSets, Hd),
          pageChanges: Xd(null === Rd || void 0 === Rd ? void 0 : Rd.changes, yd)
        }
      }
      save(dd) {
        const Od = JSON.stringify(this.toJson(performance.now(), dd));
        (0, Fd.e)(new Blob([Od], {
          type: "application/json"
        }), `bloxd-mouse-look-${(new Date).toISOString().replace(/[:.]/g,"-")}.json`)
      }
    }
  },
  41306: (dd, Od, md) => {
    md.d(Od, {
      d: () => Fd
    });
    var Wd = md(39750);

    function Fd(dd, Od, md) {
      var Fd, Rd, Xd, Kd, hd, vd, Qd;
      const td = (0, Wd.e)(dd, Od, md[0], md[1], md[2]),
        od = td ? null !== (Fd = td.textCell) && void 0 !== Fd ? Fd : td.rect.anchor : md,
        Nd = Od(od[0], od[1], od[2]);
      return {
        pos: [md[0], md[1], md[2]],
        noticeboardSpan: td && {
          width: td.rect.width,
          height: td.rect.height
        },
        text: null !== (Rd = null === Nd || void 0 === Nd || null === (Xd = Nd.persisted) || void 0 === Xd || null === (Kd = Xd.shared) || void 0 === Kd ? void 0 : Kd.text) && void 0 !== Rd ? Rd : "",
        textSize: null !== (hd = null === Nd || void 0 === Nd || null === (vd = Nd.persisted) || void 0 === vd || null === (Qd = vd.shared) || void 0 === Qd ? void 0 : Qd.textSize) && void 0 !== hd ? hd : null
      }
    }
  },
  40048: (dd, Od, md) => {
    function Wd(dd) {
      switch (dd.kind) {
        case void 0:
        case "flatEmissive":
          return !1;
        case "chevronPath":
        case "furnaceFire":
          return !0
      }
    }
    md.d(Od, {
      b: () => Fd,
      f: () => Rd,
      i: () => Wd
    });
    const Fd = 4,
      Rd = 3
  },
  40765: (dd, Od, md) => {
    md.d(Od, {
      e: () => Fd,
      g: () => Rd
    });
    var Wd = md(405);
    const Fd = new Set(["bedwars", "bridgeBattle", "buildAFactory2", "classic", "clutch", "containmentBreach", "cooking", "defusal", "frontline", "goalRush", "greenville", "hideseek", "luckyBedwars", "murderMystery", "ninetyNineNights", "oneBlock", "plots", "pvpCiv", "secretSanta", "shooting", "skyIslands", "skyblock", "tsunami"]);
    class Rd {
      constructor(dd) {
        this.importGame = dd, this.loads = new Map, this.loaded = new Map
      }
      load(dd) {
        const Od = (0, Wd.Gb)(dd);
        if (!Fd.has(Od)) return Promise.resolve(void 0);
        let md = this.loads.get(Od);
        return md || (md = this.importGame(Od).then((dd => {
          const md = dd.default;
          if ("function" !== typeof md) throw new Error(`${Od}'s client code has no default-exported factory`);
          return this.loaded.set(Od, md), md
        })).catch((dd => {
          throw this.loads.delete(Od), dd
        })), this.loads.set(Od, md)), md
      }
      loadedFactory(dd) {
        const Od = (0, Wd.Gb)(dd);
        if (!Fd.has(Od)) return;
        const md = this.loaded.get(Od);
        if (!md) throw new Error(`${Od}'s client code started before it loaded`);
        return md
      }
    }
  },
  40763: (dd, Od, md) => {
    function Wd(dd, Od) {
      return Object.values({
        ...dd,
        ...Od
      }).filter((dd => null !== dd))
    }
    md.d(Od, {
      e: () => Wd
    })
  },
  41310: (dd, Od, md) => {
    md.d(Od, {
      b: () => Xd
    });
    var Wd = md(5819),
      Fd = md(35549),
      Rd = md(4509);

    function Xd(dd) {
      if (dd === Wd.e) return 0;
      const Od = (0, Rd.d)(dd);
      if (void 0 !== Od && Od <= Fd.MAX_BLOCK_ID) return Od;
      const md = (0, Rd.d)(dd.split("|")[0]);
      if (void 0 !== md && md <= Fd.MAX_BLOCK_ID && (0, Fd.rootMetaDescOf)(md) === dd) return md;
      throw new Error(`Invalid block name. You sent ${dd}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`)
    }
  },
  40812: (dd, Od, md) => {
    md.d(Od, {
      c: () => Fd
    });
    var Wd = md(29);
    class Fd {
      constructor(dd) {
        this.screen = dd, this.hidesHud = !1
      }
      show(dd, Od) {
        this.screen.setFade(dd.colour, dd.alpha), this.screen.setLetterbox(!0 === Od.letterbox, dd.alpha < 1), this.setHudHidden(!0 === Od.hideHud)
      }
      clear() {
        this.screen.clear(), this.setHudHidden(!1)
      }
      setHudHidden(dd) {
        this.hidesHud !== dd && (this.hidesHud = dd, Wd.e.set({
          isUiHiddenByCamera: dd
        }))
      }
    }
  },
  40808: (dd, Od, md) => {
    md.d(Od, {
      b: () => Rd,
      c: () => Fd
    });
    var Wd = md(38295);

    function Fd(dd) {
      var Od;
      const md = "default" === dd.mode ? "movement" : null !== (Od = dd.playerFacing) && void 0 !== Od ? Od : "movement";
      return "cursor" === md ? {
        facing: md,
        mouseTurns: null
      } : {
        facing: md,
        mouseTurns: "default" !== dd.mode && void 0 !== dd.playerLook ? "look" : "view"
      }
    }

    function Rd(dd, Od, md, Fd, Rd, Xd) {
      return Xd.mV = 0, Xd.RV = 0, Xd.pointedAt = void 0, void 0 !== Fd ? Rd ? (Xd.pointedAt = Fd, dd) : (0, Wd.w)(Fd.heading) : Rd ? (Xd.mV = Od, Xd.RV = md, dd) : (0, Wd.w)(dd + Od)
    }
  },
  40789: (dd, Od, md) => {
    md.d(Od, {
      c: () => ed
    });
    var Wd = md(40797),
      Fd = md(38295),
      Rd = md(38524);

    function Xd(dd, Od, md, Wd) {
      if (!(Wd > 0)) return Od;
      const Fd = Od > dd ? Math.min(Od, dd + md / Wd) : Math.max(Od, dd - md / Wd);
      return Math.abs(Od - Fd) < 1e-9 ? Od : Fd
    }
    class Kd {
      constructor() {
        this.phase = null, this.outMs = 0, this.holdMs = 0, this.inMs = 0, this.XV = 0, this.sinceTurnMs = 1 / 0, this.clearMs = 1 / 0, this.waiting = null, this.screen = {
          colour: Wd.d,
          alpha: 0
        }
      }
      getScreen() {
        return this.screen
      }
      fadeOut(dd) {
        !this.isGoingOut() && this.sinceTurnMs < Wd.l.minFadeTurnMs ? this.waiting = {
          turn: "out",
          transition: dd
        } : (this.waiting = null, this.startOut(dd))
      }
      fadeIn(dd) {
        this.isGoingOut() ? this.sinceTurnMs < Wd.l.minFadeTurnMs ? this.waiting = {
          turn: "in",
          minMs: dd
        } : (this.waiting = null, this.startIn(dd)) : this.waiting = null
      }
      advance(dd) {
        const Od = this.waiting;
        if (null === Od) return this.step(dd);
        const md = Wd.l.minFadeTurnMs - this.sinceTurnMs;
        if (md > dd) return this.step(dd);
        const Fd = this.step(md);
        return this.waiting = null, "out" === Od.turn ? this.startOut(Od.transition) : this.startIn(Od.minMs), this.step(dd - md) || Fd
      }
      isGoingOut() {
        return "out" === this.phase || "hold" === this.phase
      }
      startOut(dd) {
        ("in" === this.phase || null === this.phase && this.clearMs < Wd.l.minFadeTurnMs) && (this.sinceTurnMs = 0), this.phase = "out", 0 === this.screen.alpha && (this.screen.colour = dd.colour), this.outMs = dd.outMs, this.holdMs = dd.holdMs, this.inMs = dd.inMs
      }
      startIn(dd) {
        this.isGoingOut() && (this.sinceTurnMs = 0), this.phase = "in", this.inMs = Math.max(dd, this.inMs)
      }
      step(dd) {
        const Od = this.screen;
        this.sinceTurnMs += dd, null === this.phase && (this.clearMs += dd);
        let md = !1,
          Fd = dd;
        if ("out" === this.phase) {
          const Wd = (1 - Od.alpha) * this.outMs;
          if (Od.alpha = Xd(Od.alpha, 1, dd, this.outMs), Od.alpha < 1) return !1;
          this.phase = "hold", this.XV = 0, Fd = Math.max(0, dd - Wd), md = !0
        }
        let Rd = dd;
        if ("hold" === this.phase) {
          this.XV += Fd;
          const dd = Math.min(this.XV - this.holdMs, this.sinceTurnMs - Wd.l.minFadeTurnMs);
          if (dd < 0 || md) return md;
          this.phase = "in", this.sinceTurnMs = dd, Rd = dd
        }
        return "in" === this.phase && (Od.alpha = Xd(Od.alpha, 0, Rd, this.inMs), Od.alpha <= 0 && (this.phase = null, this.clearMs = 0)), md
      }
    }
    var hd = md(40780),
      vd = md(40802),
      Qd = md(2057),
      td = md(38222);

    function od(dd, Od) {
      for (let md = 0; md < Od.length; md++) Od[md] = dd[md]
    }

    function Nd(dd, Od) {
      var md;
      return null !== (md = dd.fov) && void 0 !== md ? md : Od.getDefaultFov()
    }

    function qd(dd, Od, md, Wd, Fd) {
      const Rd = 2 / Wd,
        Xd = Math.exp(-Rd * Fd);
      for (let Kd = 0; Kd < dd.length; Kd++) {
        const Wd = dd[Kd] - md[Kd],
          hd = (Od[Kd] + Rd * Wd) * Fd;
        dd[Kd] = md[Kd] + (Wd + hd) * Xd, Od[Kd] = (Od[Kd] - Rd * hd) * Xd
      }
    }
    class Hd {
      constructor(dd, Od, md, Wd) {
        var Rd, Xd, Kd, hd, vd;
        this.settings = dd, this.Bt = Od, this.targets = md, this.base = void 0, this.closestDistance = void 0, this.furthestDistance = void 0, this.goal = void 0, this.framedTargets = !1, this.smoothed = [0, 0, 0, 0, 0, 0], this.Gy = [0, 0, 0, 0, 0, 0], this.started = !1, this.angles = {
          heading: 0,
          pitch: 0
        }, this.points = [], this.forward = [0, 0, 0], this.base = {
          heading: (0, Fd.w)((0, Qd.n)(null !== (Rd = dd.viewHeading) && void 0 !== Rd ? Rd : 0)),
          pitch: (0, Fd.h)((0, Qd.n)(null !== (Xd = dd.viewElevation) && void 0 !== Xd ? Xd : 45))
        }, this.closestDistance = null !== (Kd = dd.closestDistance) && void 0 !== Kd ? Kd : Math.min(6, null !== (hd = dd.furthestDistance) && void 0 !== hd ? hd : 1 / 0), this.furthestDistance = null !== (vd = dd.furthestDistance) && void 0 !== vd ? vd : Math.max(64, this.closestDistance);
        const td = (0, Fd.g)(this.base.heading, this.base.pitch, this.forward),
          od = Wd.position,
          Nd = this.closestDistance;
        this.goal = [od[0] + td[0] * Nd, od[1] + td[1] * Nd, od[2] + td[2] * Nd, Nd, this.base.heading, this.base.pitch]
      }
      update(dd, Od, md) {
        var Wd, Rd;
        this.placeGoal(null !== (Wd = this.settings.fov) && void 0 !== Wd ? Wd : this.Bt.getBaseFov()), this.goal[4] = (0, Fd.B)(this.smoothed[4], this.base.heading), this.goal[5] = this.base.pitch;
        const Xd = null !== (Rd = this.settings.smoothMs) && void 0 !== Rd ? Rd : 400;
        !this.started || Xd < 1 ? (od(this.goal, this.smoothed), this.Gy.fill(0), this.started = !0) : qd(this.smoothed, this.Gy, this.goal, Xd, dd), this.angles.heading = this.smoothed[4], this.angles.pitch = (0, Fd.h)(this.smoothed[5]), Od.apply(this.angles, md);
        const Kd = (0, Fd.g)(md.heading, md.pitch, this.forward);
        for (let Fd = 0; Fd < 3; Fd++) md.position[Fd] = this.smoothed[Fd] - Kd[Fd] * this.smoothed[3];
        md.fov = Nd(this.settings, this.Bt)
      }
      continueFrom(dd) {
        dd instanceof Hd && (od(dd.goal, this.goal), od(dd.smoothed, this.smoothed), od(dd.Gy, this.Gy), this.framedTargets = dd.framedTargets, this.started = dd.started)
      }
      reset() {
        this.Gy.fill(0), this.started = !1
      }
      placeGoal(dd) {
        var Od;
        let md = 0;
        for (const Qd of this.settings.targets) {
          const dd = this.targets.currentAimPoint(Qd);
          dd && (0, hd.i)(dd, this.pointAt(md++))
        }
        if (md > 0) this.framedTargets = !0;
        else if (!this.framedTargets) {
          const dd = this.targets.aimPoint(this.Bt.localPlayerId);
          dd && (0, hd.i)(dd, this.pointAt(md++))
        }
        const Wd = this.goal;
        if (0 === md) return void(Wd[3] = this.withinDistances(Wd[3]));
        for (let hd = 0; hd < 3; hd++) {
          let dd = 1 / 0,
            Od = -1 / 0;
          for (let Wd = 0; Wd < md; Wd++) dd = Math.min(dd, this.points[Wd][hd]), Od = Math.max(Od, this.points[Wd][hd]);
          Wd[hd] = (dd + Od) / 2
        }
        let Fd = 0;
        for (let hd = 0; hd < md; hd++) {
          const dd = this.points[hd];
          Fd = Math.max(Fd, Math.hypot(dd[0] - Wd[0], dd[1] - Wd[1], dd[2] - Wd[2]))
        }
        const Rd = Math.tan((0, Qd.n)(dd) / 2),
          Xd = Math.atan(Rd * (!0 === this.settings.letterbox ? td.g : 1)),
          Kd = Math.atan(Rd * this.Bt.getAspectRatio()),
          vd = (Fd + (null !== (Od = this.settings.padding) && void 0 !== Od ? Od : 2)) / Math.sin(Math.min(Xd, Kd));
        Wd[3] = this.withinDistances(vd)
      }
      withinDistances(dd) {
        return Math.min(this.furthestDistance, Math.max(this.closestDistance, dd))
      }
      pointAt(dd) {
        return dd === this.points.length && this.points.push([0, 0, 0]), this.points[dd]
      }
    }
    class yd {
      constructor(dd) {
        this.limits = dd, this.yawOffset = 0, this.pitchOffset = 0, this.Yy = 0, this.pointedAt = null
      }
      continueFrom(dd) {
        this.limits && (this.yawOffset = dd.yawOffset, this.pitchOffset = dd.pitchOffset, this.Yy = dd.Yy)
      }
      update(dd, Od) {
        const md = this.limits;
        if (!md) return;
        const Wd = Number.isFinite(Od.mV) ? Od.mV : 0,
          Fd = Number.isFinite(Od.RV) ? Od.RV : 0;
        if (Od.pointedAt) this.Yy = 0, this.pointedAt = {
          heading: Od.pointedAt.heading,
          pitch: Od.pointedAt.pitch
        };
        else if (0 !== Wd || 0 !== Fd) this.Yy = 0, this.yawOffset += Wd, this.pitchOffset += Fd;
        else {
          const Od = Math.max(0, this.Yy + dd - 200) - Math.max(0, this.Yy - 200);
          if (this.Yy += dd, void 0 !== md.returnMs && Od > 0) {
            const dd = md.returnMs > 0 ? Math.exp(-3 * Od / md.returnMs) : 0;
            this.yawOffset *= dd, this.pitchOffset *= dd
          }
        }
        this.clampOffsets(md)
      }
      clampOffsets(dd) {
        if (dd.maxYaw >= 180) this.yawOffset = (0, Fd.x)(0, this.yawOffset);
        else {
          const Od = (0, Qd.n)(dd.maxYaw);
          this.yawOffset = Math.max(-Od, Math.min(Od, this.yawOffset))
        }
        const Od = (0, Qd.n)(dd.maxPitch);
        this.pitchOffset = Math.max(-Od, Math.min(Od, this.pitchOffset))
      }
      apply(dd, Od) {
        this.pointedAt && this.limits && (this.yawOffset = (0, Fd.x)(dd.heading, this.pointedAt.heading), this.pitchOffset = this.pointedAt.pitch - dd.pitch, this.pointedAt = null, this.clampOffsets(this.limits));
        const md = (0, Fd.h)(dd.pitch + this.pitchOffset);
        this.pitchOffset = md - dd.pitch, Od.heading = (0, Fd.w)(dd.heading + this.yawOffset), Od.pitch = md
      }
      unapply(dd, Od) {
        Od.heading = (0, Fd.w)(dd.heading - this.yawOffset), Od.pitch = (0, Fd.h)(dd.pitch - this.pitchOffset)
      }
    }
    const bd = 1e-6;

    function Td(dd) {
      return Math.sqrt(dd[0] * dd[0] + dd[1] * dd[1] + dd[2] * dd[2])
    }

    function pd(dd, Od, md, Wd, Fd) {
      const Rd = Fd * Fd,
        Xd = Rd * Fd;
      return (2 * Xd - 3 * Rd + 1) * dd + (Xd - 2 * Rd + Fd) * Od + (-2 * Xd + 3 * Rd) * md + (Xd - Rd) * Wd
    }

    function Yd(dd, Od, md, Wd, Fd) {
      const Rd = Fd * Fd;
      return (6 * Rd - 6 * Fd) * dd + (3 * Rd - 4 * Fd + 1) * Od + (-6 * Rd + 6 * Fd) * md + (3 * Rd - 2 * Fd) * Wd
    }

    function gd(dd, Od) {
      const md = Od[0] - dd[0],
        Wd = Od[1] - dd[1],
        Fd = Od[2] - dd[2];
      return Math.sqrt(md * md + Wd * Wd + Fd * Fd)
    }

    function wd(dd, Od, md, Wd, Fd, Rd) {
      for (let Xd = 0; Xd < 3; Xd++) Rd[Xd] = Fd ? dd[Xd] * Wd : md[Xd] - Od[Xd];
      return Fd && function(dd, Od) {
        const md = Td(dd);
        if (md > Od) {
          const Wd = Od / md;
          dd[0] *= Wd, dd[1] *= Wd, dd[2] *= Wd
        }
      }(Rd, 3 * gd(Od, md)), Rd
    }

    function Ed(dd, Od, md, Wd) {
      for (let Fd = 0; Fd < 3; Fd++) Wd[Fd] = 6 * (Od[Fd] - dd[Fd]) - 2 * md[Fd];
      if (Td(Wd) < bd)
        for (let Fd = 0; Fd < 3; Fd++) Wd[Fd] = Od[Fd] - dd[Fd];
      return Wd
    }

    function Jd(dd, Od) {
      return [2 * Od[0] - dd[0], 2 * Od[1] - dd[1], 2 * Od[2] - dd[2]]
    }

    function Ud(dd, Od, md, Wd, Fd, Rd, Xd) {
      if (!Rd && !Xd) return 0;
      const Kd = Rd ? dd : 2 * Od - md,
        hd = Xd ? md : 2 * Od - dd,
        vd = Rd ? Wd : Fd,
        Qd = Xd ? Fd : Wd,
        td = (Od - Kd) / vd,
        od = (hd - Od) / Qd;
      if (td * od <= 0) return 0;
      const Nd = (hd - Kd) / (vd + Qd),
        qd = 3 * Math.min(Math.abs(td), Math.abs(od));
      return Math.max(-qd, Math.min(qd, Nd))
    }

    function xd(dd, Od, md, Wd, Fd, Rd, Xd) {
      const {
        u: Kd,
        segmentMs: hd
      } = dd;
      if (!dd.curved) return md + (Wd - md) * Kd;
      return pd(md, Ud(Od, md, Wd, dd.beforeMs, hd, Rd, !0) * hd, Wd, Ud(md, Wd, Fd, hd, dd.afterMs, !0, Xd) * hd, Kd)
    }

    function Bd(dd) {
      return Math.abs(dd.pitch) >= Fd.c
    }
    class Sd {
      constructor(dd, Od, md, Wd, Fd) {
        this.nodes = dd, this.prevNodes = md, this.nextNodes = Wd, this.tangents = void 0, this.derivative = [0, 0, 0], this.beforeAngles = {
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
        }, this.tangents = dd.map(((dd, md) => this.nodeTangent(Od, Fd, md)))
      }
      sample(dd, Od, md) {
        const {
          index: Wd,
          toIndex: Rd,
          segmentMs: Xd,
          curved: Kd
        } = dd, hd = this.fromAngles, vd = this.toAngles, Qd = this.nodeAngles(Wd, md.position, Od, hd), td = this.nodeAngles(Rd, md.position, Od, vd);
        if (Xd > 0 && "aim" !== Qd && "aim" !== td && this.liveTangent(dd, hd)) return md.heading = (0, Fd.w)(hd.heading), void(md.pitch = hd.pitch);
        if ("none" === Qd && "none" === td) return;
        !Kd && Xd > 0 && ("tangent" === Qd && this.liveTangent(dd, hd), "tangent" === td && this.liveTangent(dd, vd)), "none" === Qd ? (0, Fd.l)(vd, hd) : "none" === td && (0, Fd.l)(hd, vd);
        const od = Kd && dd.beforeIndex >= 0 && "none" !== this.nodeAngles(dd.beforeIndex, md.position, Od, this.beforeAngles),
          Nd = Kd && dd.afterIndex >= 0 && "none" !== this.nodeAngles(dd.afterIndex, md.position, Od, this.afterAngles),
          qd = (0, Fd.B)(hd.heading, vd.heading),
          Hd = xd(dd, od ? (0, Fd.B)(hd.heading, this.beforeAngles.heading) : 0, hd.heading, qd, Nd ? (0, Fd.B)(qd, this.afterAngles.heading) : 0, od, Nd);
        md.heading = (0, Fd.w)(Hd), md.pitch = (0, Fd.h)(xd(dd, this.beforeAngles.pitch, hd.pitch, vd.pitch, this.afterAngles.pitch, od, Nd))
      }
      nodeAngles(dd, Od, md, Wd) {
        const Fd = this.rawNodeAngles(dd, Od, md, Wd);
        return "none" !== Fd && Bd(Wd) && !this.borrowHeading(this.prevNodes[dd], Od, md, Wd) && this.borrowHeading(this.nextNodes[dd], Od, md, Wd), Fd
      }
      borrowHeading(dd, Od, md, Wd) {
        const Fd = this.borrowedAngles;
        return !(dd < 0 || "none" === this.rawNodeAngles(dd, Od, md, Fd) || Bd(Fd)) && (Wd.heading = Fd.heading, !0)
      }
      rawNodeAngles(dd, Od, md, Wd) {
        const Rd = this.nodes[dd].keyframe;
        if (Rd.lookDirection) return (0, Fd.o)(Rd.lookDirection, Wd), "aim";
        if (void 0 !== Rd.lookAt) {
          const dd = md(Rd.lookAt);
          if (dd) return (0, Fd.t)(Od, dd, Wd), "aim"
        }
        const Xd = this.tangents[dd];
        return Xd ? ((0, Fd.l)(Xd, Wd), "tangent") : "none"
      }
      liveTangent(dd, Od) {
        const md = this.nodes[dd.index].position,
          Wd = this.nodes[dd.toIndex].position,
          Rd = this.derivative;
        for (let Fd = 0; Fd < 3; Fd++) Rd[Fd] = Yd(md[Fd], dd.fromTangent[Fd], Wd[Fd], dd.toTangent[Fd], dd.u);
        return Td(Rd) > 1e-9 ? ((0, Fd.o)(Rd, Od), !0) : !(gd(md, Wd) < bd) && ((0, Fd.o)(Ed(md, Wd, dd.u < .5 ? dd.toTangent : dd.fromTangent, Rd), Od), !0)
      }
      nodeTangent(dd, Od, md) {
        var Wd;
        const Rd = dd[md];
        if (Td(Rd) > 1e-9) return (0, Fd.o)(Rd, {
          heading: 0,
          pitch: 0
        });
        const Xd = null !== (Wd = this.restDirectionTo(md, md + 1, dd, Od)) && void 0 !== Wd ? Wd : this.restDirectionTo(md, md - 1, dd, Od);
        return Xd ? (0, Fd.o)(Xd, {
          heading: 0,
          pitch: 0
        }) : null
      }
      restDirectionTo(dd, Od, md, Wd) {
        const Fd = this.nodes[dd],
          Rd = this.nodes[Od];
        if (!Rd || gd(Fd.position, Rd.position) < bd) return null;
        const [Xd, Kd] = Od > dd ? [Fd, Rd] : [Rd, Fd], hd = wd(md[Od], Xd.position, Kd.position, Kd.timeMs - Xd.timeMs, Wd, [0, 0, 0]);
        return Ed(Xd.position, Kd.position, hd, [0, 0, 0])
      }
    }

    function sd(dd, Od) {
      const md = dd.lookDirection || Od.lookDirection ? function(dd, Od) {
        if (!dd || !Od) return dd === Od;
        const md = Td(dd),
          Wd = Td(Od);
        return Math.hypot(dd[0] / md - Od[0] / Wd, dd[1] / md - Od[1] / Wd, dd[2] / md - Od[2] / Wd) < bd
      }(dd.lookDirection, Od.lookDirection) : (Wd = dd.lookAt, Fd = Od.lookAt, "object" !== typeof Wd || "object" !== typeof Fd ? Wd === Fd : gd(Wd, Fd) < bd);
      var Wd, Fd;
      return gd(dd.position, Od.position) < bd && dd.fov === Od.fov && md
    }
    class ud {
      constructor(dd, Od, md) {
        if (this.smooth = Od, this.nodes = void 0, this.velocities = void 0, this.prevNodes = void 0, this.nextNodes = void 0, this.prevGaps = void 0, this.nextGaps = void 0, this.loopMs = void 0, this.aim = void 0, this.segment = {
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
          }, 0 === dd.length) throw new Error("A camera path needs at least one keyframe");
        for (let Rd = 1; Rd < dd.length; Rd++)
          if (!(dd[Rd].timeMs > dd[Rd - 1].timeMs)) throw new Error("Camera path keyframe times must strictly increase");
        this.nodes = dd.map((dd => {
          var Od;
          return {
            timeMs: dd.timeMs,
            position: [...dd.position],
            keyframe: dd,
            easing: (0, Rd.s)(null !== (Od = dd.easing) && void 0 !== Od ? Od : "linear")
          }
        }));
        const Wd = this.nodes[0],
          Fd = this.nodes[this.nodes.length - 1],
          Xd = md && this.nodes.length > 1;
        Xd && !sd(Wd.keyframe, Fd.keyframe) && this.nodes.push({
          ...Wd,
          timeMs: Fd.timeMs + (Fd.timeMs - Wd.timeMs) / (this.nodes.length - 1)
        }), this.loopMs = Xd ? this.nodes[this.nodes.length - 1].timeMs - Wd.timeMs : 0, this.prevNodes = this.nodes.map(((dd, Od) => this.neighbour(Od, -1))), this.nextNodes = this.nodes.map(((dd, Od) => this.neighbour(Od, 1))), this.prevGaps = this.prevNodes.map(((dd, Od) => dd >= 0 ? this.gapMs(Od, -1) : 0)), this.nextGaps = this.nextNodes.map(((dd, Od) => dd >= 0 ? this.gapMs(Od, 1) : 0)), this.velocities = this.nodes.map(((dd, Od) => {
          const md = this.prevNodes[Od],
            Wd = this.nextNodes[Od];
          return function(dd, Od, md, Wd, Fd, Rd) {
            if (Rd[0] = 0, Rd[1] = 0, Rd[2] = 0, !dd && !md) return Rd;
            const Xd = null !== dd && void 0 !== dd ? dd : Jd(null !== md && void 0 !== md ? md : Od, Od),
              Kd = null !== md && void 0 !== md ? md : Jd(null !== dd && void 0 !== dd ? dd : Od, Od),
              hd = dd ? Wd : Fd,
              vd = md ? Fd : Wd,
              Qd = gd(Xd, Od),
              td = gd(Od, Kd);
            if (Qd < bd || td < bd) return Rd;
            const od = Math.sqrt(Qd),
              Nd = Math.sqrt(td),
              qd = (od + Nd) / (hd + vd);
            for (let Hd = 0; Hd < 3; Hd++) {
              const dd = (Od[Hd] - Xd[Hd]) / od - (Kd[Hd] - Xd[Hd]) / (od + Nd) + (Kd[Hd] - Od[Hd]) / Nd;
              Rd[Hd] = dd * qd
            }
            return Rd
          }(md >= 0 ? this.nodes[md].position : null, dd.position, Wd >= 0 ? this.nodes[Wd].position : null, this.prevGaps[Od], this.nextGaps[Od], [0, 0, 0])
        })), this.aim = new Sd(this.nodes, this.velocities, this.prevNodes, this.nextNodes, Od)
      }
      sample(dd, Od, md, Wd) {
        const Fd = this.findSegment(this.pathTime(dd));
        this.samplePosition(Fd, Wd.position), this.aim.sample(Fd, Od, Wd);
        const {
          beforeIndex: Rd,
          afterIndex: Xd
        } = Fd;
        Wd.fov = xd(Fd, Rd >= 0 ? this.fovAt(Rd, md) : 0, this.fovAt(Fd.index, md), this.fovAt(Fd.toIndex, md), Xd >= 0 ? this.fovAt(Xd, md) : 0, Rd >= 0, Xd >= 0)
      }
      pathTime(dd) {
        const Od = this.nodes[0].timeMs;
        if (this.loopMs <= 0 || dd <= Od) return dd;
        const md = dd - Od;
        return Od + md - this.loopMs * Math.floor(md / this.loopMs)
      }
      findSegment(dd) {
        const Od = this.nodes,
          md = this.segment;
        let Wd = md.index;
        for (dd < Od[Wd].timeMs && (Wd = 0); Wd < Od.length - 2 && Od[Wd + 1].timeMs <= dd;) Wd++;
        const Fd = Math.min(Wd + 1, Od.length - 1),
          Xd = Od[Fd].timeMs - Od[Wd].timeMs;
        return md.index = Wd, md.toIndex = Fd, md.segmentMs = Xd, md.u = Xd > 0 ? (0, Rd.p)((dd - Od[Wd].timeMs) / Xd, Od[Wd].easing) : 1, md.curved = this.smooth && Xd > 0, md.beforeIndex = this.prevNodes[Wd], md.afterIndex = this.nextNodes[Fd], md.beforeMs = this.prevGaps[Wd], md.afterMs = this.nextGaps[Fd], md
      }
      samplePosition(dd, Od) {
        const {
          fromTangent: md,
          toTangent: Wd,
          curved: Fd
        } = dd, Rd = this.nodes[dd.index].position, Xd = this.nodes[dd.toIndex].position;
        wd(this.velocities[dd.index], Rd, Xd, dd.segmentMs, Fd, md), wd(this.velocities[dd.toIndex], Rd, Xd, dd.segmentMs, Fd, Wd);
        const Kd = dd.u;
        for (let hd = 0; hd < 3; hd++) Od[hd] = Fd ? pd(Rd[hd], md[hd], Xd[hd], Wd[hd], Kd) : Rd[hd] + (Xd[hd] - Rd[hd]) * Kd
      }
      fovAt(dd, Od) {
        var md;
        return null !== (md = this.nodes[dd].keyframe.fov) && void 0 !== md ? md : Od
      }
      neighbour(dd, Od) {
        const md = this.nodes.length - 1,
          Wd = dd + Od;
        return Wd >= 0 && Wd <= md ? Wd : this.loopMs <= 0 || md < 2 ? -1 : Wd < 0 ? md - 1 : 1
      }
      gapMs(dd, Od) {
        const md = this.nodes.length - 1;
        if (1 === Od) {
          const Od = dd === md ? 0 : dd;
          return this.nodes[Od + 1].timeMs - this.nodes[Od].timeMs
        }
        const Wd = 0 === dd ? md : dd;
        return this.nodes[Wd].timeMs - this.nodes[Wd - 1].timeMs
      }
    }

    function Vd(dd, Od, md) {
      return null !== md && Number.isFinite(md) ? (dd.set(Od, md), md) : dd.get(Od)
    }
    class Ad {
      constructor(dd) {
        this.Bt = dd, this.lastFeet = new Map, this.lastAimPoints = new Map, this.lastHeadings = new Map, this.lastPitches = new Map, this.lastLookHeadings = new Map, this.readFeet = void 0, this.readAimPoint = void 0, this.readFeet = Od => dd.getEntityPosition(Od), this.readAimPoint = Od => dd.getEntityAimPoint(Od)
      }
      aimPoint(dd) {
        return "string" !== typeof dd ? (0, hd.o)(dd, 3) ? dd : null : this.resolve(dd, this.readAimPoint, this.lastAimPoints)
      }
      currentAimPoint(dd) {
        const Od = "string" === typeof dd ? this.Bt.getEntityAimPoint(dd) : dd;
        return Od && (0, hd.o)(Od, 3) ? Od : null
      }
      feetPosition(dd) {
        return this.resolve(dd, this.readFeet, this.lastFeet)
      }
      heading(dd) {
        const Od = Vd(this.lastHeadings, dd, this.Bt.getEntityHeading(dd));
        return void 0 !== Od ? Od : dd === this.Bt.localPlayerId ? 0 : this.heading(this.Bt.localPlayerId)
      }
      pitch(dd) {
        var Od;
        return null !== (Od = Vd(this.lastPitches, dd, this.Bt.getEntityPitch(dd))) && void 0 !== Od ? Od : 0
      }
      lookHeading(dd) {
        var Od;
        return null !== (Od = Vd(this.lastLookHeadings, dd, this.Bt.getEntityLookHeading(dd))) && void 0 !== Od ? Od : this.heading(dd)
      }
      resolve(dd, Od, md) {
        const Wd = Od(dd);
        let Fd = md.get(dd);
        return Wd && (0, hd.o)(Wd, 3) ? (Fd || (Fd = [0, 0, 0], md.set(dd, Fd)), Fd[0] = Wd[0], Fd[1] = Wd[1], Fd[2] = Wd[2], Fd) : Fd || (dd === this.Bt.localPlayerId ? null : this.resolve(this.Bt.localPlayerId, Od, md))
      }
    }

    function rd(dd) {
      return {
        heading: dd.heading,
        pitch: dd.pitch
      }
    }

    function Gd(dd, Od) {
      Number.isFinite(dd.heading) && Number.isFinite(dd.pitch) || (0, Fd.l)(Od, dd)
    }

    function nd(dd, Od, md, Wd, Rd) {
      if (Od) return void(0, Fd.o)(Od, Rd);
      const Xd = Wd.aimPoint(md);
      Xd && (0, Fd.t)(dd, Xd, Rd)
    }
    class Ld {
      constructor(dd, Od, md, Wd) {
        this.settings = dd, this.Bt = Od, this.targets = md, this.base = void 0, this.base = rd(Wd)
      }
      update(dd, Od, md) {
        var Wd;
        const Fd = this.settings;
        (0, hd.i)(Fd.position, md.position), nd(Fd.position, Fd.lookDirection, null !== (Wd = Fd.lookAt) && void 0 !== Wd ? Wd : this.Bt.localPlayerId, this.targets, this.base), Od.apply(this.base, md), md.fov = Nd(Fd, this.Bt)
      }
      continueFrom(dd) {
        dd instanceof Ld && (0, Fd.l)(dd.base, this.base)
      }
      reset(dd) {
        Gd(this.base, dd)
      }
    }
    class Pd {
      constructor(dd, Od, md, Wd) {
        this.settings = dd, this.Bt = Od, this.targets = md, this.base = void 0, this.goal = void 0, this.lastFeet = [0, 0, 0], this.foundFeet = !1, this.smoothed = [0, 0, 0], this.Gy = [0, 0, 0], this.started = !1, this.distance = -1, this.toCamera = [0, 0, 0], this.aimOrigin = [0, 0, 0], this.eyeHeading = NaN, this.eyePitch = NaN, this.base = rd(Wd), this.goal = [...Wd.position]
      }
      update(dd, Od, md) {
        var Wd, Rd;
        const Xd = this.settings,
          Kd = null !== (Wd = Xd.target) && void 0 !== Wd ? Wd : this.Bt.localPlayerId,
          vd = this.targets.feetPosition(Kd),
          Qd = "eye" === Xd.anchor;
        let td = !1;
        var od;
        vd && (td = this.foundFeet && gd(this.lastFeet, vd) > 32 + .1 * dd, (0, hd.i)(vd, this.lastFeet), this.foundFeet = !0, this.placeGoal(null !== (od = Qd ? this.targets.aimPoint(Kd) : null) && void 0 !== od ? od : vd, Kd));
        const Hd = null !== (Rd = Xd.smoothMs) && void 0 !== Rd ? Rd : 0;
        !this.started || Hd < 1 || td ? ((0, hd.i)(this.goal, this.smoothed), this.Gy.fill(0), this.started = !0) : qd(this.smoothed, this.Gy, this.goal, Hd, dd), td && (this.distance = -1), (0, hd.i)(this.smoothed, md.position);
        const yd = !0 === Xd.avoidTerrain ? this.pullIn(Kd, dd, md) : 1;
        let bd = this.goal;
        if ("target" === Xd.offsetSpace) bd = md.position;
        else if (yd < 1) {
          bd = this.aimOrigin;
          for (let dd = 0; dd < 3; dd++) bd[dd] = md.position[dd] + (this.goal[dd] - this.smoothed[dd]) * yd
        }
        if (Qd && !Xd.lookDirection && void 0 === Xd.lookAt) {
          const Od = this.targets.lookHeading(Kd),
            md = this.targets.pitch(Kd),
            Wd = 1 - Math.exp(-dd / 50),
            Rd = (0, Fd.w)(this.eyeHeading + (0, Fd.x)(this.eyeHeading, Od) * Wd),
            Xd = this.eyePitch + (md - this.eyePitch) * Wd,
            hd = Kd !== this.Bt.localPlayerId && Number.isFinite(Rd) && Number.isFinite(Xd) && !td;
          this.eyeHeading = hd ? Rd : (0, Fd.w)(Od), this.eyePitch = hd ? Xd : md, this.base.heading = this.eyeHeading, this.base.pitch = this.eyePitch
        } else {
          var Td;
          this.eyeHeading = NaN, this.eyePitch = NaN, nd(bd, Xd.lookDirection, null !== (Td = Xd.lookAt) && void 0 !== Td ? Td : Kd, this.targets, this.base)
        }
        Od.apply(this.base, md), md.fov = Nd(Xd, this.Bt)
      }
      continueFrom(dd) {
        dd instanceof Pd && (0, Wd.o)(dd.settings.target, this.settings.target) && ((0, Fd.l)(dd.base, this.base), (0, hd.i)(dd.goal, this.goal), (0, hd.i)(dd.lastFeet, this.lastFeet), this.foundFeet = dd.foundFeet, (0, hd.i)(dd.smoothed, this.smoothed), (0, hd.i)(dd.Gy, this.Gy), this.started = dd.started, this.eyeHeading = dd.eyeHeading, this.eyePitch = dd.eyePitch, !0 === dd.settings.avoidTerrain && (this.distance = dd.distance))
      }
      reset(dd) {
        Gd(this.base, dd), this.Gy.fill(0), this.started = !1, this.distance = -1, this.eyeHeading = NaN, this.eyePitch = NaN
      }
      pullIn(dd, Od, md) {
        const Wd = this.targets.aimPoint(dd);
        if (!Wd) return 1;
        const Fd = md.position,
          Rd = gd(Wd, Fd);
        if (!(Rd > 0)) return 1;
        const Xd = this.toCamera;
        for (let hd = 0; hd < 3; hd++) Xd[hd] = (Fd[hd] - Wd[hd]) / Rd;
        const Kd = function(dd, Od, md) {
          return dd < 0 || Od < dd ? Od : Od + (dd - Od) * Math.exp(-md / 150)
        }(this.distance, function(dd, Od, md, Wd) {
          const Fd = dd.raycastTerrain(Od, md, Wd);
          return null !== Fd && Number.isFinite(Fd) ? Math.min(Wd, Math.max(0, Fd - .2)) : Wd
        }(this.Bt, Wd, Xd, Rd), Od);
        if (Rd - Kd < .001) return this.distance = -1, 1;
        this.distance = Kd;
        for (let hd = 0; hd < 3; hd++) Fd[hd] = Wd[hd] + Xd[hd] * Kd;
        return Kd / Rd
      }
      placeGoal(dd, Od) {
        const md = this.settings.offset;
        let Wd = md[0],
          Fd = md[2];
        if ("target" === this.settings.offsetSpace) {
          const dd = this.targets.heading(Od),
            Rd = Math.cos(dd),
            Xd = Math.sin(dd);
          Wd = md[0] * Rd + md[2] * Xd, Fd = -md[0] * Xd + md[2] * Rd
        }
        this.goal[0] = dd[0] + Wd, this.goal[1] = dd[1] + md[1], this.goal[2] = dd[2] + Fd
      }
    }
    class zd {
      constructor(dd, Od, md, Wd) {
        var Fd, Rd;
        this.settings = dd, this.Bt = Od, this.sampler = void 0, this.base = void 0, this.resolveTarget = void 0, this.elapsedMs = 0, this.sampler = dd.keyframes.length > 0 ? new ud(dd.keyframes, null === (Fd = dd.smooth) || void 0 === Fd || Fd, null !== (Rd = dd.loop) && void 0 !== Rd && Rd) : null, this.base = (0, hd.g)(Wd, (0, hd.j)()), this.resolveTarget = dd => md.aimPoint(dd)
      }
      update(dd, Od, md) {
        this.elapsedMs += dd;
        const Wd = Nd(this.settings, this.Bt);
        this.sampler ? this.sampler.sample(this.elapsedMs, this.resolveTarget, Wd, this.base) : this.base.fov = Wd, (0, hd.i)(this.base.position, md.position), md.fov = this.base.fov, Od.apply(this.base, md)
      }
      continueFrom(dd) {
        dd instanceof zd && (0, Wd.o)(dd.settings.keyframes, this.settings.keyframes) && (this.elapsedMs = dd.elapsedMs, (0, hd.g)(dd.base, this.base))
      }
      reset(dd) {
        Gd(this.base, dd), Number.isFinite(this.elapsedMs) || (this.elapsedMs = 0)
      }
    }

    function cd(dd, Od) {
      return (0, Wd.s)(dd, Od)
    }
    class jd {
      constructor(dd, Od, md) {
        var Wd;
        this.settings = dd, this.Bt = Od, this.pose = void 0, this.lastGoodPose = void 0, this.look = void 0, this.targets = void 0, this.mode = void 0, this.warnedNonFinite = !1;
        const Fd = null !== md && md.settings.mode === dd.mode,
          Rd = Fd ? md.pose : Od.getDefaultPose();
        this.pose = (0, hd.g)(Rd, (0, hd.j)()), this.lastGoodPose = (0, hd.g)(Fd ? md.lastGoodPose : Rd, (0, hd.j)()), this.look = new yd(dd.playerLook), this.targets = null !== (Wd = null === md || void 0 === md ? void 0 : md.targets) && void 0 !== Wd ? Wd : new Ad(Od);
        const Xd = (0, hd.g)(Rd, (0, hd.j)());
        Fd && md.look.unapply(Xd, Xd), this.mode = function(dd, Od, md, Wd) {
          switch (dd.mode) {
            case "fixed":
              return new Ld(dd, Od, md, Wd);
            case "follow":
              return new Pd(dd, Od, md, Wd);
            case "path":
              return new zd(dd, Od, md, Wd);
            case "frame":
              return new Hd(dd, Od, md, Wd)
          }
        }(dd, Od, this.targets, Xd), Fd && (this.look.continueFrom(md.look), this.mode.continueFrom(md.mode))
      }
      update(dd, Od) {
        return this.look.update(dd, Od), this.mode.update(dd, this.look, this.pose), (0, hd.k)(this.pose) ? (0, hd.g)(this.pose, this.lastGoodPose) : (this.warnedNonFinite || (console.warn("Scripted camera produced a non-finite pose; holding the last good one"), this.warnedNonFinite = !0), (0, hd.g)(this.lastGoodPose, this.pose), this.mode.reset((0, hd.k)(this.lastGoodPose) ? this.lastGoodPose : this.Bt.getDefaultPose())), this.pose
      }
    }

    function Dd(dd) {
      return [0, 0, dd[2], dd[3]]
    }
    class ed {
      constructor(dd) {
        this.Bt = dd, this.settings = {
          mode: "default"
        }, this.pending = null, this.fade = new Kd, this.shot = null, this.blend = null, this.mixed = (0, hd.j)(), this.output = (0, hd.j)(), this.hasOutput = !1, this.loadingPositions = [], this.loadingSlots = Array.from({
          length: 3
        }, (() => [0, 0, 0]))
      }
      setSettings(dd) {
        const Od = (0, vd.c)(dd);
        if ((0, Wd.o)(Od, this.pending ? this.pending.settings : this.settings)) return;
        const md = cd(this.settings, Od);
        if (void 0 !== Od.transition && !md) return this.pending = {
          settings: Od,
          shot: "default" === Od.mode ? null : new jd(Od, this.Bt, null)
        }, void this.fade.fadeOut(Od.transition);
        const Fd = null !== this.pending;
        this.pending = null, !Fd && md || this.fade.fadeIn(Wd.l.minTransitionFadeMs), this.show(Od, !1)
      }
      show(dd, Od) {
        var md, Fd;
        if ((0, Wd.o)(dd, this.settings)) return;
        const Xd = !Od && cd(this.settings, dd);
        this.settings = dd;
        const Kd = null !== this.blend && this.blend.elapsedMs > 0,
          vd = (0, hd.g)(this.hasOutput ? this.output : this.Bt.getDefaultPose(), (0, hd.j)());
        if (this.shot = "default" === dd.mode ? null : new jd(dd, this.Bt, Od ? null : this.shot), Xd) return;
        const Qd = Od || !this.shot && !this.hasOutput ? 0 : null !== (md = dd.blendInMs) && void 0 !== md ? md : 0;
        if (Qd <= 0) return void(this.blend = null);
        const td = (0, Rd.s)(null !== (Fd = dd.blendEasing) && void 0 !== Fd ? Fd : "easeInOut");
        this.blend = {
          from: vd,
          fromScripted: this.hasOutput,
          headingDelta: NaN,
          elapsedMs: 0,
          durationMs: Qd,
          easing: Kd ? Dd(td) : td
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
      update(dd, Od) {
        const md = Number.isFinite(dd) && dd > 0 ? dd : 0;
        if (this.fade.advance(md) && null !== this.pending) {
          const {
            settings: dd
          } = this.pending;
          this.pending = null, this.show(dd, !0)
        }
        this.loadingPositions.length = 0;
        const Wd = this.pending;
        if (null !== Wd && void 0 !== Wd && Wd.shot) {
          const dd = "path" === Wd.settings.mode ? 0 : md;
          this.noteLoadingPosition(Wd.shot.update(dd, hd.d).position)
        }
        if (!this.isActive()) return this.hasOutput = !1, null;
        const Xd = this.shot ? this.shot.update(md, Od) : this.Bt.getDefaultPose();
        this.shot && this.noteLoadingPosition(Xd.position);
        const Kd = this.blend;
        if (!Kd) return this.writeOutput(Xd);
        Kd.elapsedMs += md;
        const vd = Math.min(1, Kd.elapsedMs / Kd.durationMs);
        if (Kd.headingDelta = Number.isFinite(Kd.headingDelta) ? (0, Fd.B)(Kd.headingDelta, Xd.heading - Kd.from.heading) : (0, Fd.x)(Kd.from.heading, Xd.heading), (0, hd.s)(Kd.from, Xd, Kd.headingDelta, (0, Rd.p)(vd, Kd.easing), this.mixed), vd >= 1) {
          if (this.blend = null, !this.shot) return this.hasOutput = !1, null
        } else Kd.fromScripted && this.noteLoadingPosition(Kd.from.position);
        return this.writeOutput(this.mixed)
      }
      noteLoadingPosition(dd) {
        if (dd.every(Number.isFinite)) {
          const Od = this.loadingPositions;
          Od.push((0, hd.i)(dd, this.loadingSlots[Od.length]))
        }
      }
      writeOutput(dd) {
        const Od = this.output;
        (0, hd.k)(dd) ? (0, hd.g)(dd, Od) : this.hasOutput || (0, hd.g)(this.Bt.getDefaultPose(), Od), Od.pitch = (0, Fd.h)(Od.pitch);
        const md = this.Bt.getDefaultFov(),
          Rd = Number.isFinite(md) && md > 0 && md < 180,
          Xd = Rd ? Math.min(Wd.l.minFov, md) : Wd.l.minFov,
          Kd = Rd ? Math.max(Wd.l.maxFov, md) : Wd.l.maxFov;
        return Od.fov = Number.isFinite(Od.fov) ? Math.min(Kd, Math.max(Xd, Od.fov)) : Kd, this.hasOutput = !0, Od
      }
    }
  },
  40780: (dd, Od, md) => {
    md.d(Od, {
      d: () => Fd,
      g: () => Kd,
      i: () => Xd,
      j: () => Rd,
      k: () => vd,
      o: () => hd,
      s: () => Qd
    });
    var Wd = md(38295);
    const Fd = {
      mV: 0,
      RV: 0
    };

    function Rd() {
      return {
        position: [0, 0, 0],
        heading: 0,
        pitch: 0,
        fov: 0
      }
    }

    function Xd(dd, Od) {
      return Od[0] = dd[0], Od[1] = dd[1], Od[2] = dd[2], Od
    }

    function Kd(dd, Od) {
      return Xd(dd.position, Od.position), Od.heading = dd.heading, Od.pitch = dd.pitch, Od.fov = dd.fov, Od
    }

    function hd(dd, Od) {
      return Array.isArray(dd) && dd.length === Od && dd.every(Number.isFinite)
    }

    function vd(dd) {
      return hd(dd.position, 3) && Number.isFinite(dd.heading) && Number.isFinite(dd.pitch) && Number.isFinite(dd.fov)
    }

    function Qd(dd, Od, md, Fd, Rd) {
      for (let Wd = 0; Wd < 3; Wd++) Rd.position[Wd] = dd.position[Wd] + (Od.position[Wd] - dd.position[Wd]) * Fd;
      return Rd.heading = (0, Wd.w)(dd.heading + md * Fd), Rd.pitch = dd.pitch + (Od.pitch - dd.pitch) * Fd, Rd.fov = dd.fov + (Od.fov - dd.fov) * Fd, Rd
    }
  },
  40802: (dd, Od, md) => {
    md.d(Od, {
      c: () => Jd,
      d: () => Nd
    });
    var Wd = md(40797),
      Fd = md(40780);
    const Rd = Wd.h,
      Xd = Wd.m,
      Kd = Wd.k;

    function hd(dd, Od, md, Wd) {
      return Number.isFinite(dd) ? Math.min(md, Math.max(Od, dd)) : Wd
    }

    function vd(dd, Od, md) {
      return void 0 !== dd && Number.isFinite(dd) ? Math.min(md, Math.max(Od, dd)) : void 0
    }

    function Qd(dd) {
      const Od = Wd.l.maxCoordinate;
      return [Math.min(Od, Math.max(-Od, dd[0])), Math.min(Od, Math.max(-Od, dd[1])), Math.min(Od, Math.max(-Od, dd[2]))]
    }

    function td(dd) {
      return "string" === typeof dd ? dd : (0, Fd.o)(dd, 3) ? Qd(dd) : void 0
    }
    const od = new RegExp(Wd.n);

    function Nd(dd) {
      return "string" === typeof dd && od.test(dd)
    }

    function qd(dd) {
      const Od = [];
      if (!Array.isArray(dd)) return Od;
      for (const md of dd.slice(0, Wd.l.maxFrameTargets)) {
        const dd = td(md);
        void 0 === dd || "string" === typeof dd && !Nd(dd) || Od.push(dd)
      }
      return Od
    }

    function Hd(dd) {
      if (!(0, Fd.o)(dd, 3)) return;
      const Od = Math.max(Math.abs(dd[0]), Math.abs(dd[1]), Math.abs(dd[2])),
        md = Math.hypot(dd[0] / Od, dd[1] / Od, dd[2] / Od);
      return 0 === Od || Od * md < Wd.l.minDirectionLength ? void 0 : [dd[0] / Od / md, dd[1] / Od / md, dd[2] / Od / md]
    }

    function yd(dd) {
      if (void 0 !== dd) return "string" === typeof dd ? Rd.includes(dd) ? dd : void 0 : (0, Fd.o)(dd, 4) ? [hd(dd[0], 0, 1, 0), hd(dd[1], Wd.l.minEasingY, Wd.l.maxEasingY, 0), hd(dd[2], 0, 1, 1), hd(dd[3], Wd.l.minEasingY, Wd.l.maxEasingY, 1)] : "linear"
    }

    function bd(dd) {
      if (dd) return {
        maxYaw: hd(dd.maxYaw, 0, Wd.l.maxPlayerLook, 0),
        maxPitch: hd(dd.maxPitch, 0, Wd.l.maxPlayerLook, 0),
        returnMs: vd(dd.returnMs, 0, Wd.l.maxReturnMs)
      }
    }
    const Td = new RegExp(Wd.b);

    function pd(dd) {
      var Od;
      if ("object" !== typeof dd || null === dd) return;
      const md = Wd.l.maxTransitionMs,
        Fd = Wd.l.minTransitionFadeMs;
      return {
        colour: "string" === typeof dd.colour && Td.test(dd.colour) ? dd.colour : Wd.d,
        outMs: hd(dd.outMs, Fd, md, Fd),
        holdMs: hd(null !== (Od = dd.holdMs) && void 0 !== Od ? Od : 0, 0, md, 0),
        inMs: hd(dd.inMs, Fd, md, Fd)
      }
    }

    function Yd(dd) {
      return !0 === dd || void 0
    }

    function gd(dd) {
      if ("object" !== typeof dd || null === dd) return !1;
      const Od = dd.lookAt;
      return Number.isFinite(dd.timeMs) && (0, Fd.o)(dd.position, 3) && (void 0 === Od || "string" === typeof Od || (0, Fd.o)(Od, 3))
    }

    function wd(dd) {
      return {
        ...dd,
        timeMs: hd(dd.timeMs, 0, Wd.l.maxPathMs, 0),
        position: Qd(dd.position),
        lookAt: td(dd.lookAt),
        lookDirection: Hd(dd.lookDirection),
        fov: vd(dd.fov, Wd.l.minFov, Wd.l.maxFov),
        easing: yd(dd.easing)
      }
    }

    function Ed(dd) {
      const Od = [];
      if (!Array.isArray(dd)) return Od;
      for (const md of dd.slice(0, Wd.l.maxKeyframes)) {
        if (!gd(md)) continue;
        const dd = wd(md);
        (0 === Od.length || dd.timeMs > Od[Od.length - 1].timeMs) && Od.push(dd)
      }
      return Od
    }

    function Jd(dd) {
      if ("object" !== typeof dd || null === dd) return {
        mode: "default"
      };
      const Od = {
          blendInMs: vd(dd.blendInMs, 0, Wd.l.maxBlendInMs),
          blendEasing: yd(dd.blendEasing),
          transition: pd(dd.transition),
          letterbox: Yd(dd.letterbox),
          hideHud: Yd(dd.hideHud)
        },
        md = {
          mode: "default",
          ...Od
        };
      if ("default" === dd.mode || "fixed" === dd.mode && !(0, Fd.o)(dd.position, 3)) return md;
      const Rd = {
        ...Od,
        fov: vd(dd.fov, Wd.l.minFov, Wd.l.maxFov),
        playerFacing: (od = dd.playerFacing, Xd.includes(od) ? od : void 0),
        playerLook: bd(dd.playerLook)
      };
      var od, Nd, Td;
      switch (dd.mode) {
        case "fixed":
          return {
            ...dd, ...Rd, position: Qd(dd.position), lookAt: td(dd.lookAt), lookDirection: Hd(dd.lookDirection)
          };
        case "follow":
          return {
            ...dd, ...Rd, target: "string" === typeof dd.target ? dd.target : void 0, anchor: (Td = dd.anchor, Kd.includes(Td) ? Td : void 0), lookAt: td(dd.lookAt), offset: (Nd = dd.offset, Array.isArray(Nd) ? [hd(Nd[0], -Wd.l.maxOffset, Wd.l.maxOffset, 0), hd(Nd[1], -Wd.l.maxOffset, Wd.l.maxOffset, 0), hd(Nd[2], -Wd.l.maxOffset, Wd.l.maxOffset, 0)] : [0, 0, 0]), lookDirection: Hd(dd.lookDirection), smoothMs: vd(dd.smoothMs, 0, Wd.l.maxSmoothMs)
          };
        case "path":
          return {
            ...dd, ...Rd, keyframes: Ed(dd.keyframes)
          };
        case "frame":
          return {
            ...dd, ...Rd, targets: qd(dd.targets), viewHeading: vd(dd.viewHeading, -Wd.l.maxFrameHeading, Wd.l.maxFrameHeading), viewElevation: vd(dd.viewElevation, 0, Wd.l.maxFrameElevation), padding: vd(dd.padding, 0, Wd.l.maxFrameDistance), closestDistance: vd(dd.closestDistance, 0, Wd.l.maxFrameDistance), furthestDistance: vd(dd.furthestDistance, 0, Wd.l.maxFrameDistance), smoothMs: vd(dd.smoothMs, 0, Wd.l.maxSmoothMs)
          };
        default:
          return md
      }
    }
  },
  40831: (dd, Od, md) => {
    md.d(Od, {
      e: () => Wd
    });
    const Wd = {
      message: [{
        translationKey: "general:bunnyHoppingDisabled"
      }],
      timeoutLength: 2e3,
      type: "Error"
    }
  },
  40714: (dd, Od, md) => {
    function Wd(dd, Od) {
      return Od.set(dd), Od
    }
    md.d(Od, {
      c: () => Wd
    })
  },
  40706: (dd, Od, md) => {
    md.d(Od, {
      b: () => Xd
    });
    var Wd = md(3452),
      Fd = md.n(Wd);
    const Rd = [1, 1, 1];

    function Xd(dd) {
      if (!dd) return [...Rd];
      try {
        const [Od, md, Wd] = Fd()(dd).rgb().array();
        return [Od / 255, md / 255, Wd / 255]
      } catch (Od) {
        return console.warn(`Invalid groundArrowPath colour "${dd}":`, Od), [...Rd]
      }
    }
  },
  40828: (dd, Od, md) => {
    md.d(Od, {
      c: () => Kd,
      e: () => vd,
      h: () => hd
    });
    var Wd = md(339),
      Fd = md(3973);
    const Rd = /\/textures\/skyBoxes\/(space_blue|space_lightblue|space_red_2|space_white)\/(_[np][xyz]\.jpg)$/,
      Xd = 512;

    function Kd(dd) {
      var Od;
      const md = Math.min(screen.width, screen.height) * (null !== (Od = (0, Wd.c)()) && void 0 !== Od ? Od : (0, Fd.m)());
      return Math.max(window.innerHeight * (0, Fd.m)(), md) / (0, Fd.o)(dd)
    }

    function hd(dd, Od, md) {
      return Od / (2 * Math.tan(md / 2)) > Xd ? dd : vd(dd)
    }

    function vd(dd) {
      return dd.map((dd => dd.replace(Rd, "/textures/skyBoxes/$1/1024/$2")))
    }
  },
  40697: (dd, Od, md) => {
    md.d(Od, {
      b: () => Fd
    });
    var Wd = md(218);

    function Fd(dd, Od, md, Fd, Rd, Xd, Kd, hd, vd, Qd, td) {
      const od = Wd.i.Qt,
        Nd = Rd - md;
      let qd = Nd * (Xd - Fd);
      Qd.fill(0, 0, qd);
      for (let Wd = Math.floor((hd - 1) / od);
        (Wd + 1) * od > Kd; Wd--) {
        const Hd = Wd * od;
        for (let yd = Math.floor(md / od); yd * od < Rd; yd++) {
          const bd = yd * od,
            Td = Math.max(md - bd, 0),
            pd = Math.min(Rd - bd, od);
          for (let Rd = Math.floor(Fd / od); Rd * od < Xd; Rd++) {
            const Yd = dd(yd, Wd, Rd);
            if (!Yd) continue;
            const gd = Rd * od,
              wd = Math.max(Fd - gd, 0),
              Ed = Math.min(Xd - gd, od),
              Jd = Yd.Wq,
              Ud = Yd.QN,
              xd = Ud.data;
            for (let dd = Math.min(hd - 1 - Hd, od - 1); dd >= Math.max(Kd - Hd, 0); dd--) {
              const Wd = Jd[dd],
                Rd = Wd === Od;
              if (Rd || 0 !== vd[Wd]) {
                for (let Od = Td; Od < pd; Od++)
                  for (let Xd = wd; Xd < Ed; Xd++) {
                    const Kd = (gd + Xd - Fd) * Nd + bd + Od - md;
                    if (0 !== Qd[Kd]) continue;
                    const hd = Rd ? xd[Ud.index(Od, dd, Xd)] : Wd;
                    0 !== vd[hd] && (Qd[Kd] = hd, td[Kd] = Hd + dd, qd--)
                  }
                if (0 === qd) return
              }
            }
          }
        }
      }
    }
  },
  35354: (dd, Od, md) => {
    md.d(Od, {
      c: () => Rd,
      d: () => Kd,
      h: () => Xd,
      i: () => Fd,
      k: () => Wd
    });
    const Wd = {
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
      Fd = "/textures/dayNight/sun.png",
      Rd = "/textures/dayNight/moon.png",
      Xd = "/textures/dayNight/stars",
      Kd = ["_px.png", "_py.png", "_pz.png", "_nx.png", "_ny.png", "_nz.png"]
  },
  40797: (dd, Od, md) => {
    md.d(Od, {
      b: () => td,
      d: () => od,
      h: () => Wd,
      k: () => Fd,
      l: () => vd,
      m: () => Rd,
      n: () => Qd,
      o: () => hd,
      s: () => Kd
    });
    const Wd = ["linear", "easeIn", "easeOut", "easeInOut"],
      Fd = ["feet", "eye"],
      Rd = ["movement", "camera", "cursor"],
      Xd = ["targets", "playerFacing", "blendInMs", "blendEasing", "transition", "letterbox", "hideHud"];

    function Kd(dd, Od) {
      return hd(dd, Od, Xd)
    }

    function hd(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      if (dd === Od || Number.isNaN(dd) && Number.isNaN(Od)) return !0;
      if ("object" !== typeof dd || "object" !== typeof Od || null === dd || null === Od || Array.isArray(dd) !== Array.isArray(Od)) return !1;
      const Wd = dd,
        Fd = Od;
      for (const Rd of new Set([...Object.keys(Wd), ...Object.keys(Fd)]))
        if (!md.includes(Rd) && !hd(Wd[Rd], Fd[Rd])) return !1;
      return !0
    }
    const vd = {
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
      Qd = "^-[1-9][0-9]*$",
      td = "^#[0-9a-fA-F]{6}$",
      od = "#000000"
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);