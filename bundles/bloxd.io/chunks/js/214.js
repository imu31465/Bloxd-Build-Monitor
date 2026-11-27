export const id = 214;
export const ids = [214];
export const modules = {
  40710: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Zr
    });
    class Zr {
      constructor(rr, Sr) {
        this.read = rr, this.apply = Sr, this.release = null
      }
      turn(rr, Sr) {
        const Qr = null === this.release ? this.read() : this.release.transitionMs;
        this.stop(!1), this.apply({
          forcedCameraDirectionTransitionMs: Sr,
          forcedCameraDirection: [rr[0], rr[1], rr[2]]
        }), this.release = {
          timer: setTimeout((() => {
            this.stop(!0)
          }), Sr + 100),
          transitionMs: Qr
        }
      }
      dispose() {
        this.stop(!0)
      }
      stop(rr) {
        null !== this.release && (clearTimeout(this.release.timer), rr && this.apply({
          forcedCameraDirection: null,
          forcedCameraDirectionTransitionMs: this.release.transitionMs
        }), this.release = null)
      }
    }
  },
  40221: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => ar,
      h: () => Wr
    });
    const Zr = new Map;

    function Wr(rr, Sr) {
      Zr.set(rr, Sr)
    }

    function ar(rr) {
      return rr ? Zr.get(rr) : void 0
    }
  },
  37815: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => pr,
      e: () => Ir,
      f: () => Er,
      h: () => fr,
      k: () => nr
    });
    var Zr = Qr(692),
      Wr = Qr(1904),
      ar = Qr(5617);
    class jr {
      constructor(rr, Sr) {
        this.width = rr, this.sx = Sr, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(rr * Sr)
      }
      push(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const Qr = this.data,
          Zr = this.next * this.width;
        for (let Wr = 0; Wr < this.width; Wr++) Qr[Zr + Wr] = rr[Sr + Wr];
        this.next = (this.next + 1) % this.sx, this.size = Math.min(this.size + 1, this.sx)
      }
      rows() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1 / 0;
        const Qr = [],
          Zr = (this.next - this.size + this.sx) % this.sx;
        for (let Wr = 0; Wr < this.size; Wr++) {
          const ar = (Zr + Wr) % this.sx * this.width;
          this.data[ar + rr] >= Sr && Qr.push(Array.from(this.data.subarray(ar, ar + this.width)))
        }
        return Qr
      }
      lines() {
        return this.rows().map((rr => rr.join(",")))
      }
    }
    const Ir = 10,
      fr = {
        idle: 0,
        sp: 1,
        tC: 2,
        YC: 3,
        Xh: 4
      },
      Er = {
        none: 0,
        skipped: 1,
        paced: 2,
        drawn: 3
      },
      pr = {
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
      xr = 12e3,
      mr = ["nowMs", "dtMs", "rawX", "rawY", "turnedX", "turnedY", "outcome", "velocityX", "velocityY", "limit"],
      Nr = ["timeStamp", "nowMs", "movementX", "movementY", "locked"],
      Ur = ["nowMs", "dtMs", "heading", "pitch", "kind"],
      tr = ["nowMs", "source", "headingBefore", "pitchBefore", "headingAfter", "pitchAfter"],
      hr = ["nowMs", "change", "count"];

    function zr(rr) {
      return "js" === rr ? pr.jsClient : pr.wasmClient
    }
    class Yr {
      constructor() {
        this.steps = new jr(Ir, xr), this.events = new jr(Nr.length, xr), this.frames = new jr(Ur.length, xr), this.cameraSets = new jr(ar.i, 256), this.changes = new jr(hr.length, 256)
      }
    }
    const nr = new class {
      constructor() {
        this.rings = null, this.sample = new Float64Array(Nr.length), this.startedClient = null, this.startedAtMs = 0
      }
      get client() {
        return this.startedClient
      }
      start(rr, Sr) {
        this.startedClient = rr, this.startedAtMs = performance.now(), null !== this.rings ? this.change(zr(rr)) : Sr && this.allocate()
      }
      lockGained() {
        this.allocate(), this.change(pr.lockGained)
      }
      allocate() {
        null === this.rings && (this.rings = new Yr, null !== this.startedClient && this.changeAt(this.startedAtMs, zr(this.startedClient), 1))
      }
      step(rr, Sr) {
        var Qr;
        rr[Sr + 6] !== fr.Xh && (null === (Qr = this.rings) || void 0 === Qr || Qr.steps.push(rr, Sr))
      }
      cameraSet(rr, Sr) {
        var Qr;
        null === (Qr = this.rings) || void 0 === Qr || Qr.cameraSets.push(rr, Sr)
      }
      mouseMove(rr, Sr) {
        const Qr = this.rings;
        if (null === Qr) return;
        const Zr = this.sample;
        Zr[0] = rr.timeStamp, Zr[1] = performance.now(), Zr[2] = rr.movementX, Zr[3] = rr.movementY, Zr[4] = Sr ? 1 : 0, Qr.events.push(Zr)
      }
      frame(rr, Sr, Qr, Zr) {
        const Wr = this.rings;
        if (null === Wr || Zr === Er.none) return;
        const ar = this.sample;
        ar[0] = performance.now(), ar[1] = rr, ar[2] = Sr, ar[3] = Qr, ar[4] = Zr, Wr.frames.push(ar)
      }
      change(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.changeAt(performance.now(), rr, Sr)
      }
      changeAt(rr, Sr, Qr) {
        const Zr = this.rings;
        if (null === Zr) return;
        const Wr = this.sample;
        Wr[0] = rr, Wr[1] = Sr, Wr[2] = Qr, Zr.changes.push(Wr)
      }
      dumpText() {
        var rr, Sr;
        const Qr = this.rings;
        return [`look records (${this.startedClient}): ${mr.join(",")}`, ...null !== (rr = null === Qr || void 0 === Qr ? void 0 : Qr.steps.lines()) && void 0 !== rr ? rr : [], `mousemove events: ${Nr.join(",")}`, ...null !== (Sr = null === Qr || void 0 === Qr ? void 0 : Qr.events.lines()) && void 0 !== Sr ? Sr : []].join("\n")
      }
      toJson(rr, Sr) {
        var Qr;
        const Wr = rr - 6e4,
          ar = this.rings,
          jr = function(rr, Sr) {
            var Qr;
            let Zr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            const ar = null !== (Qr = null === rr || void 0 === rr ? void 0 : rr.rows(Zr, Wr)) && void 0 !== Qr ? Qr : [];
            return {
              columns: Sr,
              fromMs: 0 === ar.length ? null : ar[0][Zr],
              rows: ar
            }
          };
        return {
          version: Zr.e,
          client: null !== (Qr = this.startedClient) && void 0 !== Qr ? Qr : "not started",
          savedAt: (new Date).toISOString(),
          savedAtMs: rr,
          keptMs: 6e4,
          page: window.location.href,
          userAgent: navigator.userAgent,
          devicePixelRatio: window.devicePixelRatio,
          screen: {
            width: window.screen.width,
            height: window.screen.height
          },
          Ez: null !== document.pointerLockElement,
          visibility: document.visibilityState,
          ...Sr,
          outcomes: fr,
          frameKinds: Er,
          changes: pr,
          lookSteps: jr(null === ar || void 0 === ar ? void 0 : ar.steps, mr),
          mouseMoves: jr(null === ar || void 0 === ar ? void 0 : ar.events, Nr, 1),
          frames: jr(null === ar || void 0 === ar ? void 0 : ar.frames, Ur),
          cameraSets: jr(null === ar || void 0 === ar ? void 0 : ar.cameraSets, tr),
          pageChanges: jr(null === ar || void 0 === ar ? void 0 : ar.changes, hr)
        }
      }
      save(rr) {
        const Sr = JSON.stringify(this.toJson(performance.now(), rr));
        (0, Wr.c)(new Blob([Sr], {
          type: "application/json"
        }), `bloxd-mouse-look-${(new Date).toISOString().replace(/[:.]/g,"-")}.json`)
      }
    }
  },
  41299: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Wr
    });
    var Zr = Qr(39715);

    function Wr(rr, Sr, Qr) {
      var Wr, ar, jr, Ir, fr, Er, pr;
      const xr = (0, Zr.b)(rr, Sr, Qr[0], Qr[1], Qr[2]),
        mr = xr ? null !== (Wr = xr.textCell) && void 0 !== Wr ? Wr : xr.rect.anchor : Qr,
        Nr = Sr(mr[0], mr[1], mr[2]);
      return {
        pos: [Qr[0], Qr[1], Qr[2]],
        noticeboardSpan: xr && {
          width: xr.rect.width,
          height: xr.rect.height
        },
        text: null !== (ar = null === Nr || void 0 === Nr || null === (jr = Nr.persisted) || void 0 === jr || null === (Ir = jr.shared) || void 0 === Ir ? void 0 : Ir.text) && void 0 !== ar ? ar : "",
        textSize: null !== (fr = null === Nr || void 0 === Nr || null === (Er = Nr.persisted) || void 0 === Er || null === (pr = Er.shared) || void 0 === pr ? void 0 : pr.textSize) && void 0 !== fr ? fr : null
      }
    }
  },
  40031: (rr, Sr, Qr) => {
    function Zr(rr) {
      switch (rr.kind) {
        case void 0:
        case "flatEmissive":
          return !1;
        case "chevronPath":
        case "furnaceFire":
          return !0
      }
    }
    Qr.d(Sr, {
      b: () => Wr,
      c: () => ar,
      f: () => Zr
    });
    const Wr = 4,
      ar = 3
  },
  40739: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Wr,
      f: () => ar
    });
    var Zr = Qr(379);
    const Wr = new Set(["bedwars", "bridgeBattle", "buildAFactory2", "classic", "clutch", "containmentBreach", "cooking", "defusal", "frontline", "goalRush", "greenville", "hideseek", "luckyBedwars", "murderMystery", "ninetyNineNights", "oneBlock", "plots", "pvpCiv", "secretSanta", "shooting", "skyIslands", "skyblock", "tsunami"]);
    class ar {
      constructor(rr) {
        this.importGame = rr, this.loads = new Map, this.loaded = new Map
      }
      load(rr) {
        const Sr = (0, Zr.Mb)(rr);
        if (!Wr.has(Sr)) return Promise.resolve(void 0);
        let Qr = this.loads.get(Sr);
        return Qr || (Qr = this.importGame(Sr).then((rr => {
          const Qr = rr.default;
          if ("function" !== typeof Qr) throw new Error(`${Sr}'s client code has no default-exported factory`);
          return this.loaded.set(Sr, Qr), Qr
        })).catch((rr => {
          throw this.loads.delete(Sr), rr
        })), this.loads.set(Sr, Qr)), Qr
      }
      loadedFactory(rr) {
        const Sr = (0, Zr.Mb)(rr);
        if (!Wr.has(Sr)) return;
        const Qr = this.loaded.get(Sr);
        if (!Qr) throw new Error(`${Sr}'s client code started before it loaded`);
        return Qr
      }
    }
  },
  40736: (rr, Sr, Qr) => {
    function Zr(rr, Sr) {
      return Object.values({
        ...rr,
        ...Sr
      }).filter((rr => null !== rr))
    }
    Qr.d(Sr, {
      c: () => Zr
    })
  },
  41303: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => jr
    });
    var Zr = Qr(5878),
      Wr = Qr(35472),
      ar = Qr(4489);

    function jr(rr) {
      if (rr === Zr.e) return 0;
      const Sr = (0, ar.e)(rr);
      if (void 0 !== Sr && Sr <= Wr.MAX_BLOCK_ID) return Sr;
      const Qr = (0, ar.e)(rr.split("|")[0]);
      if (void 0 !== Qr && Qr <= Wr.MAX_BLOCK_ID && (0, Wr.rootMetaDescOf)(Qr) === rr) return Qr;
      throw new Error(`Invalid block name. You sent ${rr}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`)
    }
  },
  40789: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Wr
    });
    var Zr = Qr(26);
    class Wr {
      constructor(rr) {
        this.screen = rr, this.hidesHud = !1
      }
      show(rr, Sr) {
        this.screen.setFade(rr.colour, rr.alpha), this.screen.setLetterbox(!0 === Sr.letterbox, rr.alpha < 1), this.setHudHidden(!0 === Sr.hideHud)
      }
      clear() {
        this.screen.clear(), this.setHudHidden(!1)
      }
      setHudHidden(rr) {
        this.hidesHud !== rr && (this.hidesHud = rr, Zr.c.set({
          isUiHiddenByCamera: rr
        }))
      }
    }
  },
  40781: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => ar,
      c: () => Wr
    });
    var Zr = Qr(38207);

    function Wr(rr) {
      var Sr;
      const Qr = "default" === rr.mode ? "movement" : null !== (Sr = rr.playerFacing) && void 0 !== Sr ? Sr : "movement";
      return "cursor" === Qr ? {
        facing: Qr,
        mouseTurns: null
      } : {
        facing: Qr,
        mouseTurns: "default" !== rr.mode && void 0 !== rr.playerLook ? "look" : "view"
      }
    }

    function ar(rr, Sr, Qr, Wr, ar, jr) {
      return jr.xR = 0, jr.yR = 0, jr.pointedAt = void 0, void 0 !== Wr ? ar ? (jr.pointedAt = Wr, rr) : (0, Zr.q)(Wr.heading) : ar ? (jr.xR = Sr, jr.yR = Qr, rr) : (0, Zr.q)(rr + Sr)
    }
  },
  40761: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => wr
    });
    var Zr = Qr(40770),
      Wr = Qr(38207),
      ar = Qr(38457);

    function jr(rr, Sr, Qr, Zr) {
      if (!(Zr > 0)) return Sr;
      const Wr = Sr > rr ? Math.min(Sr, rr + Qr / Zr) : Math.max(Sr, rr - Qr / Zr);
      return Math.abs(Sr - Wr) < 1e-9 ? Sr : Wr
    }
    class Ir {
      constructor() {
        this.phase = null, this.outMs = 0, this.holdMs = 0, this.inMs = 0, this.gR = 0, this.sinceTurnMs = 1 / 0, this.clearMs = 1 / 0, this.waiting = null, this.screen = {
          colour: Zr.d,
          alpha: 0
        }
      }
      getScreen() {
        return this.screen
      }
      fadeOut(rr) {
        !this.isGoingOut() && this.sinceTurnMs < Zr.j.minFadeTurnMs ? this.waiting = {
          turn: "out",
          transition: rr
        } : (this.waiting = null, this.startOut(rr))
      }
      fadeIn(rr) {
        this.isGoingOut() ? this.sinceTurnMs < Zr.j.minFadeTurnMs ? this.waiting = {
          turn: "in",
          minMs: rr
        } : (this.waiting = null, this.startIn(rr)) : this.waiting = null
      }
      advance(rr) {
        const Sr = this.waiting;
        if (null === Sr) return this.step(rr);
        const Qr = Zr.j.minFadeTurnMs - this.sinceTurnMs;
        if (Qr > rr) return this.step(rr);
        const Wr = this.step(Qr);
        return this.waiting = null, "out" === Sr.turn ? this.startOut(Sr.transition) : this.startIn(Sr.minMs), this.step(rr - Qr) || Wr
      }
      isGoingOut() {
        return "out" === this.phase || "hold" === this.phase
      }
      startOut(rr) {
        ("in" === this.phase || null === this.phase && this.clearMs < Zr.j.minFadeTurnMs) && (this.sinceTurnMs = 0), this.phase = "out", 0 === this.screen.alpha && (this.screen.colour = rr.colour), this.outMs = rr.outMs, this.holdMs = rr.holdMs, this.inMs = rr.inMs
      }
      startIn(rr) {
        this.isGoingOut() && (this.sinceTurnMs = 0), this.phase = "in", this.inMs = Math.max(rr, this.inMs)
      }
      step(rr) {
        const Sr = this.screen;
        this.sinceTurnMs += rr, null === this.phase && (this.clearMs += rr);
        let Qr = !1,
          Wr = rr;
        if ("out" === this.phase) {
          const Zr = (1 - Sr.alpha) * this.outMs;
          if (Sr.alpha = jr(Sr.alpha, 1, rr, this.outMs), Sr.alpha < 1) return !1;
          this.phase = "hold", this.gR = 0, Wr = Math.max(0, rr - Zr), Qr = !0
        }
        let ar = rr;
        if ("hold" === this.phase) {
          this.gR += Wr;
          const rr = Math.min(this.gR - this.holdMs, this.sinceTurnMs - Zr.j.minFadeTurnMs);
          if (rr < 0 || Qr) return Qr;
          this.phase = "in", this.sinceTurnMs = rr, ar = rr
        }
        return "in" === this.phase && (Sr.alpha = jr(Sr.alpha, 0, ar, this.inMs), Sr.alpha <= 0 && (this.phase = null, this.clearMs = 0)), Qr
      }
    }
    var fr = Qr(40748),
      Er = Qr(40775),
      pr = Qr(2049),
      xr = Qr(38133);

    function mr(rr, Sr) {
      for (let Qr = 0; Qr < Sr.length; Qr++) Sr[Qr] = rr[Qr]
    }

    function Nr(rr, Sr) {
      var Qr;
      return null !== (Qr = rr.fov) && void 0 !== Qr ? Qr : Sr.getDefaultFov()
    }

    function Ur(rr, Sr, Qr, Zr, Wr) {
      const ar = 2 / Zr,
        jr = Math.exp(-ar * Wr);
      for (let Ir = 0; Ir < rr.length; Ir++) {
        const Zr = rr[Ir] - Qr[Ir],
          fr = (Sr[Ir] + ar * Zr) * Wr;
        rr[Ir] = Qr[Ir] + (Zr + fr) * jr, Sr[Ir] = (Sr[Ir] - ar * fr) * jr
      }
    }
    class tr {
      constructor(rr, Sr, Qr, Zr) {
        var ar, jr, Ir, fr, Er;
        this.settings = rr, this.qx = Sr, this.targets = Qr, this.base = void 0, this.closestDistance = void 0, this.furthestDistance = void 0, this.goal = void 0, this.framedTargets = !1, this.smoothed = [0, 0, 0, 0, 0, 0], this.Lh = [0, 0, 0, 0, 0, 0], this.started = !1, this.angles = {
          heading: 0,
          pitch: 0
        }, this.points = [], this.forward = [0, 0, 0], this.base = {
          heading: (0, Wr.q)((0, pr.k)(null !== (ar = rr.viewHeading) && void 0 !== ar ? ar : 0)),
          pitch: (0, Wr.i)((0, pr.k)(null !== (jr = rr.viewElevation) && void 0 !== jr ? jr : 45))
        }, this.closestDistance = null !== (Ir = rr.closestDistance) && void 0 !== Ir ? Ir : Math.min(6, null !== (fr = rr.furthestDistance) && void 0 !== fr ? fr : 1 / 0), this.furthestDistance = null !== (Er = rr.furthestDistance) && void 0 !== Er ? Er : Math.max(64, this.closestDistance);
        const xr = (0, Wr.f)(this.base.heading, this.base.pitch, this.forward),
          mr = Zr.position,
          Nr = this.closestDistance;
        this.goal = [mr[0] + xr[0] * Nr, mr[1] + xr[1] * Nr, mr[2] + xr[2] * Nr, Nr, this.base.heading, this.base.pitch]
      }
      update(rr, Sr, Qr) {
        var Zr, ar;
        this.placeGoal(null !== (Zr = this.settings.fov) && void 0 !== Zr ? Zr : this.qx.getBaseFov()), this.goal[4] = (0, Wr.v)(this.smoothed[4], this.base.heading), this.goal[5] = this.base.pitch;
        const jr = null !== (ar = this.settings.smoothMs) && void 0 !== ar ? ar : 400;
        !this.started || jr < 1 ? (mr(this.goal, this.smoothed), this.Lh.fill(0), this.started = !0) : Ur(this.smoothed, this.Lh, this.goal, jr, rr), this.angles.heading = this.smoothed[4], this.angles.pitch = (0, Wr.i)(this.smoothed[5]), Sr.apply(this.angles, Qr);
        const Ir = (0, Wr.f)(Qr.heading, Qr.pitch, this.forward);
        for (let Wr = 0; Wr < 3; Wr++) Qr.position[Wr] = this.smoothed[Wr] - Ir[Wr] * this.smoothed[3];
        Qr.fov = Nr(this.settings, this.qx)
      }
      continueFrom(rr) {
        rr instanceof tr && (mr(rr.goal, this.goal), mr(rr.smoothed, this.smoothed), mr(rr.Lh, this.Lh), this.framedTargets = rr.framedTargets, this.started = rr.started)
      }
      reset() {
        this.Lh.fill(0), this.started = !1
      }
      placeGoal(rr) {
        var Sr;
        let Qr = 0;
        for (const pr of this.settings.targets) {
          const rr = this.targets.currentAimPoint(pr);
          rr && (0, fr.i)(rr, this.pointAt(Qr++))
        }
        if (Qr > 0) this.framedTargets = !0;
        else if (!this.framedTargets) {
          const rr = this.targets.aimPoint(this.qx.localPlayerId);
          rr && (0, fr.i)(rr, this.pointAt(Qr++))
        }
        const Zr = this.goal;
        if (0 === Qr) return void(Zr[3] = this.withinDistances(Zr[3]));
        for (let fr = 0; fr < 3; fr++) {
          let rr = 1 / 0,
            Sr = -1 / 0;
          for (let Zr = 0; Zr < Qr; Zr++) rr = Math.min(rr, this.points[Zr][fr]), Sr = Math.max(Sr, this.points[Zr][fr]);
          Zr[fr] = (rr + Sr) / 2
        }
        let Wr = 0;
        for (let fr = 0; fr < Qr; fr++) {
          const rr = this.points[fr];
          Wr = Math.max(Wr, Math.hypot(rr[0] - Zr[0], rr[1] - Zr[1], rr[2] - Zr[2]))
        }
        const ar = Math.tan((0, pr.k)(rr) / 2),
          jr = Math.atan(ar * (!0 === this.settings.letterbox ? xr.d : 1)),
          Ir = Math.atan(ar * this.qx.getAspectRatio()),
          Er = (Wr + (null !== (Sr = this.settings.padding) && void 0 !== Sr ? Sr : 2)) / Math.sin(Math.min(jr, Ir));
        Zr[3] = this.withinDistances(Er)
      }
      withinDistances(rr) {
        return Math.min(this.furthestDistance, Math.max(this.closestDistance, rr))
      }
      pointAt(rr) {
        return rr === this.points.length && this.points.push([0, 0, 0]), this.points[rr]
      }
    }
    class hr {
      constructor(rr) {
        this.limits = rr, this.yawOffset = 0, this.pitchOffset = 0, this.zh = 0, this.pointedAt = null
      }
      continueFrom(rr) {
        this.limits && (this.yawOffset = rr.yawOffset, this.pitchOffset = rr.pitchOffset, this.zh = rr.zh)
      }
      update(rr, Sr) {
        const Qr = this.limits;
        if (!Qr) return;
        const Zr = Number.isFinite(Sr.xR) ? Sr.xR : 0,
          Wr = Number.isFinite(Sr.yR) ? Sr.yR : 0;
        if (Sr.pointedAt) this.zh = 0, this.pointedAt = {
          heading: Sr.pointedAt.heading,
          pitch: Sr.pointedAt.pitch
        };
        else if (0 !== Zr || 0 !== Wr) this.zh = 0, this.yawOffset += Zr, this.pitchOffset += Wr;
        else {
          const Sr = Math.max(0, this.zh + rr - 200) - Math.max(0, this.zh - 200);
          if (this.zh += rr, void 0 !== Qr.returnMs && Sr > 0) {
            const rr = Qr.returnMs > 0 ? Math.exp(-3 * Sr / Qr.returnMs) : 0;
            this.yawOffset *= rr, this.pitchOffset *= rr
          }
        }
        this.clampOffsets(Qr)
      }
      clampOffsets(rr) {
        if (rr.maxYaw >= 180) this.yawOffset = (0, Wr.r)(0, this.yawOffset);
        else {
          const Sr = (0, pr.k)(rr.maxYaw);
          this.yawOffset = Math.max(-Sr, Math.min(Sr, this.yawOffset))
        }
        const Sr = (0, pr.k)(rr.maxPitch);
        this.pitchOffset = Math.max(-Sr, Math.min(Sr, this.pitchOffset))
      }
      apply(rr, Sr) {
        this.pointedAt && this.limits && (this.yawOffset = (0, Wr.r)(rr.heading, this.pointedAt.heading), this.pitchOffset = this.pointedAt.pitch - rr.pitch, this.pointedAt = null, this.clampOffsets(this.limits));
        const Qr = (0, Wr.i)(rr.pitch + this.pitchOffset);
        this.pitchOffset = Qr - rr.pitch, Sr.heading = (0, Wr.q)(rr.heading + this.yawOffset), Sr.pitch = Qr
      }
      unapply(rr, Sr) {
        Sr.heading = (0, Wr.q)(rr.heading - this.yawOffset), Sr.pitch = (0, Wr.i)(rr.pitch - this.pitchOffset)
      }
    }
    const zr = 1e-6;

    function Yr(rr) {
      return Math.sqrt(rr[0] * rr[0] + rr[1] * rr[1] + rr[2] * rr[2])
    }

    function nr(rr, Sr, Qr, Zr, Wr) {
      const ar = Wr * Wr,
        jr = ar * Wr;
      return (2 * jr - 3 * ar + 1) * rr + (jr - 2 * ar + Wr) * Sr + (-2 * jr + 3 * ar) * Qr + (jr - ar) * Zr
    }

    function er(rr, Sr, Qr, Zr, Wr) {
      const ar = Wr * Wr;
      return (6 * ar - 6 * Wr) * rr + (3 * ar - 4 * Wr + 1) * Sr + (-6 * ar + 6 * Wr) * Qr + (3 * ar - 2 * Wr) * Zr
    }

    function Kr(rr, Sr) {
      const Qr = Sr[0] - rr[0],
        Zr = Sr[1] - rr[1],
        Wr = Sr[2] - rr[2];
      return Math.sqrt(Qr * Qr + Zr * Zr + Wr * Wr)
    }

    function yr(rr, Sr, Qr, Zr, Wr, ar) {
      for (let jr = 0; jr < 3; jr++) ar[jr] = Wr ? rr[jr] * Zr : Qr[jr] - Sr[jr];
      return Wr && function(rr, Sr) {
        const Qr = Yr(rr);
        if (Qr > Sr) {
          const Zr = Sr / Qr;
          rr[0] *= Zr, rr[1] *= Zr, rr[2] *= Zr
        }
      }(ar, 3 * Kr(Sr, Qr)), ar
    }

    function Br(rr, Sr, Qr, Zr) {
      for (let Wr = 0; Wr < 3; Wr++) Zr[Wr] = 6 * (Sr[Wr] - rr[Wr]) - 2 * Qr[Wr];
      if (Yr(Zr) < zr)
        for (let Wr = 0; Wr < 3; Wr++) Zr[Wr] = Sr[Wr] - rr[Wr];
      return Zr
    }

    function Tr(rr, Sr) {
      return [2 * Sr[0] - rr[0], 2 * Sr[1] - rr[1], 2 * Sr[2] - rr[2]]
    }

    function vr(rr, Sr, Qr, Zr, Wr, ar, jr) {
      if (!ar && !jr) return 0;
      const Ir = ar ? rr : 2 * Sr - Qr,
        fr = jr ? Qr : 2 * Sr - rr,
        Er = ar ? Zr : Wr,
        pr = jr ? Wr : Zr,
        xr = (Sr - Ir) / Er,
        mr = (fr - Sr) / pr;
      if (xr * mr <= 0) return 0;
      const Nr = (fr - Ir) / (Er + pr),
        Ur = 3 * Math.min(Math.abs(xr), Math.abs(mr));
      return Math.max(-Ur, Math.min(Ur, Nr))
    }

    function Or(rr, Sr, Qr, Zr, Wr, ar, jr) {
      const {
        u: Ir,
        segmentMs: fr
      } = rr;
      if (!rr.curved) return Qr + (Zr - Qr) * Ir;
      return nr(Qr, vr(Sr, Qr, Zr, rr.beforeMs, fr, ar, !0) * fr, Zr, vr(Qr, Zr, Wr, fr, rr.afterMs, !0, jr) * fr, Ir)
    }

    function Lr(rr) {
      return Math.abs(rr.pitch) >= Wr.b
    }
    class lr {
      constructor(rr, Sr, Qr, Zr, Wr) {
        this.nodes = rr, this.prevNodes = Qr, this.nextNodes = Zr, this.tangents = void 0, this.derivative = [0, 0, 0], this.beforeAngles = {
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
        }, this.tangents = rr.map(((rr, Qr) => this.nodeTangent(Sr, Wr, Qr)))
      }
      sample(rr, Sr, Qr) {
        const {
          index: Zr,
          toIndex: ar,
          segmentMs: jr,
          curved: Ir
        } = rr, fr = this.fromAngles, Er = this.toAngles, pr = this.nodeAngles(Zr, Qr.position, Sr, fr), xr = this.nodeAngles(ar, Qr.position, Sr, Er);
        if (jr > 0 && "aim" !== pr && "aim" !== xr && this.liveTangent(rr, fr)) return Qr.heading = (0, Wr.q)(fr.heading), void(Qr.pitch = fr.pitch);
        if ("none" === pr && "none" === xr) return;
        !Ir && jr > 0 && ("tangent" === pr && this.liveTangent(rr, fr), "tangent" === xr && this.liveTangent(rr, Er)), "none" === pr ? (0, Wr.j)(Er, fr) : "none" === xr && (0, Wr.j)(fr, Er);
        const mr = Ir && rr.beforeIndex >= 0 && "none" !== this.nodeAngles(rr.beforeIndex, Qr.position, Sr, this.beforeAngles),
          Nr = Ir && rr.afterIndex >= 0 && "none" !== this.nodeAngles(rr.afterIndex, Qr.position, Sr, this.afterAngles),
          Ur = (0, Wr.v)(fr.heading, Er.heading),
          tr = Or(rr, mr ? (0, Wr.v)(fr.heading, this.beforeAngles.heading) : 0, fr.heading, Ur, Nr ? (0, Wr.v)(Ur, this.afterAngles.heading) : 0, mr, Nr);
        Qr.heading = (0, Wr.q)(tr), Qr.pitch = (0, Wr.i)(Or(rr, this.beforeAngles.pitch, fr.pitch, Er.pitch, this.afterAngles.pitch, mr, Nr))
      }
      nodeAngles(rr, Sr, Qr, Zr) {
        const Wr = this.rawNodeAngles(rr, Sr, Qr, Zr);
        return "none" !== Wr && Lr(Zr) && !this.borrowHeading(this.prevNodes[rr], Sr, Qr, Zr) && this.borrowHeading(this.nextNodes[rr], Sr, Qr, Zr), Wr
      }
      borrowHeading(rr, Sr, Qr, Zr) {
        const Wr = this.borrowedAngles;
        return !(rr < 0 || "none" === this.rawNodeAngles(rr, Sr, Qr, Wr) || Lr(Wr)) && (Zr.heading = Wr.heading, !0)
      }
      rawNodeAngles(rr, Sr, Qr, Zr) {
        const ar = this.nodes[rr].keyframe;
        if (ar.lookDirection) return (0, Wr.l)(ar.lookDirection, Zr), "aim";
        if (void 0 !== ar.lookAt) {
          const rr = Qr(ar.lookAt);
          if (rr) return (0, Wr.p)(Sr, rr, Zr), "aim"
        }
        const jr = this.tangents[rr];
        return jr ? ((0, Wr.j)(jr, Zr), "tangent") : "none"
      }
      liveTangent(rr, Sr) {
        const Qr = this.nodes[rr.index].position,
          Zr = this.nodes[rr.toIndex].position,
          ar = this.derivative;
        for (let Wr = 0; Wr < 3; Wr++) ar[Wr] = er(Qr[Wr], rr.fromTangent[Wr], Zr[Wr], rr.toTangent[Wr], rr.u);
        return Yr(ar) > 1e-9 ? ((0, Wr.l)(ar, Sr), !0) : !(Kr(Qr, Zr) < zr) && ((0, Wr.l)(Br(Qr, Zr, rr.u < .5 ? rr.toTangent : rr.fromTangent, ar), Sr), !0)
      }
      nodeTangent(rr, Sr, Qr) {
        var Zr;
        const ar = rr[Qr];
        if (Yr(ar) > 1e-9) return (0, Wr.l)(ar, {
          heading: 0,
          pitch: 0
        });
        const jr = null !== (Zr = this.restDirectionTo(Qr, Qr + 1, rr, Sr)) && void 0 !== Zr ? Zr : this.restDirectionTo(Qr, Qr - 1, rr, Sr);
        return jr ? (0, Wr.l)(jr, {
          heading: 0,
          pitch: 0
        }) : null
      }
      restDirectionTo(rr, Sr, Qr, Zr) {
        const Wr = this.nodes[rr],
          ar = this.nodes[Sr];
        if (!ar || Kr(Wr.position, ar.position) < zr) return null;
        const [jr, Ir] = Sr > rr ? [Wr, ar] : [ar, Wr], fr = yr(Qr[Sr], jr.position, Ir.position, Ir.timeMs - jr.timeMs, Zr, [0, 0, 0]);
        return Br(jr.position, Ir.position, fr, [0, 0, 0])
      }
    }

    function Xr(rr, Sr) {
      const Qr = rr.lookDirection || Sr.lookDirection ? function(rr, Sr) {
        if (!rr || !Sr) return rr === Sr;
        const Qr = Yr(rr),
          Zr = Yr(Sr);
        return Math.hypot(rr[0] / Qr - Sr[0] / Zr, rr[1] / Qr - Sr[1] / Zr, rr[2] / Qr - Sr[2] / Zr) < zr
      }(rr.lookDirection, Sr.lookDirection) : (Zr = rr.lookAt, Wr = Sr.lookAt, "object" !== typeof Zr || "object" !== typeof Wr ? Zr === Wr : Kr(Zr, Wr) < zr);
      var Zr, Wr;
      return Kr(rr.position, Sr.position) < zr && rr.fov === Sr.fov && Qr
    }
    class Pr {
      constructor(rr, Sr, Qr) {
        if (this.smooth = Sr, this.nodes = void 0, this.velocities = void 0, this.prevNodes = void 0, this.nextNodes = void 0, this.prevGaps = void 0, this.nextGaps = void 0, this.loopMs = void 0, this.aim = void 0, this.segment = {
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
          }, 0 === rr.length) throw new Error("A camera path needs at least one keyframe");
        for (let ar = 1; ar < rr.length; ar++)
          if (!(rr[ar].timeMs > rr[ar - 1].timeMs)) throw new Error("Camera path keyframe times must strictly increase");
        this.nodes = rr.map((rr => {
          var Sr;
          return {
            timeMs: rr.timeMs,
            position: [...rr.position],
            keyframe: rr,
            easing: (0, ar.s)(null !== (Sr = rr.easing) && void 0 !== Sr ? Sr : "linear")
          }
        }));
        const Zr = this.nodes[0],
          Wr = this.nodes[this.nodes.length - 1],
          jr = Qr && this.nodes.length > 1;
        jr && !Xr(Zr.keyframe, Wr.keyframe) && this.nodes.push({
          ...Zr,
          timeMs: Wr.timeMs + (Wr.timeMs - Zr.timeMs) / (this.nodes.length - 1)
        }), this.loopMs = jr ? this.nodes[this.nodes.length - 1].timeMs - Zr.timeMs : 0, this.prevNodes = this.nodes.map(((rr, Sr) => this.neighbour(Sr, -1))), this.nextNodes = this.nodes.map(((rr, Sr) => this.neighbour(Sr, 1))), this.prevGaps = this.prevNodes.map(((rr, Sr) => rr >= 0 ? this.gapMs(Sr, -1) : 0)), this.nextGaps = this.nextNodes.map(((rr, Sr) => rr >= 0 ? this.gapMs(Sr, 1) : 0)), this.velocities = this.nodes.map(((rr, Sr) => {
          const Qr = this.prevNodes[Sr],
            Zr = this.nextNodes[Sr];
          return function(rr, Sr, Qr, Zr, Wr, ar) {
            if (ar[0] = 0, ar[1] = 0, ar[2] = 0, !rr && !Qr) return ar;
            const jr = null !== rr && void 0 !== rr ? rr : Tr(null !== Qr && void 0 !== Qr ? Qr : Sr, Sr),
              Ir = null !== Qr && void 0 !== Qr ? Qr : Tr(null !== rr && void 0 !== rr ? rr : Sr, Sr),
              fr = rr ? Zr : Wr,
              Er = Qr ? Wr : Zr,
              pr = Kr(jr, Sr),
              xr = Kr(Sr, Ir);
            if (pr < zr || xr < zr) return ar;
            const mr = Math.sqrt(pr),
              Nr = Math.sqrt(xr),
              Ur = (mr + Nr) / (fr + Er);
            for (let tr = 0; tr < 3; tr++) {
              const rr = (Sr[tr] - jr[tr]) / mr - (Ir[tr] - jr[tr]) / (mr + Nr) + (Ir[tr] - Sr[tr]) / Nr;
              ar[tr] = rr * Ur
            }
            return ar
          }(Qr >= 0 ? this.nodes[Qr].position : null, rr.position, Zr >= 0 ? this.nodes[Zr].position : null, this.prevGaps[Sr], this.nextGaps[Sr], [0, 0, 0])
        })), this.aim = new lr(this.nodes, this.velocities, this.prevNodes, this.nextNodes, Sr)
      }
      sample(rr, Sr, Qr, Zr) {
        const Wr = this.findSegment(this.pathTime(rr));
        this.samplePosition(Wr, Zr.position), this.aim.sample(Wr, Sr, Zr);
        const {
          beforeIndex: ar,
          afterIndex: jr
        } = Wr;
        Zr.fov = Or(Wr, ar >= 0 ? this.fovAt(ar, Qr) : 0, this.fovAt(Wr.index, Qr), this.fovAt(Wr.toIndex, Qr), jr >= 0 ? this.fovAt(jr, Qr) : 0, ar >= 0, jr >= 0)
      }
      pathTime(rr) {
        const Sr = this.nodes[0].timeMs;
        if (this.loopMs <= 0 || rr <= Sr) return rr;
        const Qr = rr - Sr;
        return Sr + Qr - this.loopMs * Math.floor(Qr / this.loopMs)
      }
      findSegment(rr) {
        const Sr = this.nodes,
          Qr = this.segment;
        let Zr = Qr.index;
        for (rr < Sr[Zr].timeMs && (Zr = 0); Zr < Sr.length - 2 && Sr[Zr + 1].timeMs <= rr;) Zr++;
        const Wr = Math.min(Zr + 1, Sr.length - 1),
          jr = Sr[Wr].timeMs - Sr[Zr].timeMs;
        return Qr.index = Zr, Qr.toIndex = Wr, Qr.segmentMs = jr, Qr.u = jr > 0 ? (0, ar.r)((rr - Sr[Zr].timeMs) / jr, Sr[Zr].easing) : 1, Qr.curved = this.smooth && jr > 0, Qr.beforeIndex = this.prevNodes[Zr], Qr.afterIndex = this.nextNodes[Wr], Qr.beforeMs = this.prevGaps[Zr], Qr.afterMs = this.nextGaps[Wr], Qr
      }
      samplePosition(rr, Sr) {
        const {
          fromTangent: Qr,
          toTangent: Zr,
          curved: Wr
        } = rr, ar = this.nodes[rr.index].position, jr = this.nodes[rr.toIndex].position;
        yr(this.velocities[rr.index], ar, jr, rr.segmentMs, Wr, Qr), yr(this.velocities[rr.toIndex], ar, jr, rr.segmentMs, Wr, Zr);
        const Ir = rr.u;
        for (let fr = 0; fr < 3; fr++) Sr[fr] = Wr ? nr(ar[fr], Qr[fr], jr[fr], Zr[fr], Ir) : ar[fr] + (jr[fr] - ar[fr]) * Ir
      }
      fovAt(rr, Sr) {
        var Qr;
        return null !== (Qr = this.nodes[rr].keyframe.fov) && void 0 !== Qr ? Qr : Sr
      }
      neighbour(rr, Sr) {
        const Qr = this.nodes.length - 1,
          Zr = rr + Sr;
        return Zr >= 0 && Zr <= Qr ? Zr : this.loopMs <= 0 || Qr < 2 ? -1 : Zr < 0 ? Qr - 1 : 1
      }
      gapMs(rr, Sr) {
        const Qr = this.nodes.length - 1;
        if (1 === Sr) {
          const Sr = rr === Qr ? 0 : rr;
          return this.nodes[Sr + 1].timeMs - this.nodes[Sr].timeMs
        }
        const Zr = 0 === rr ? Qr : rr;
        return this.nodes[Zr].timeMs - this.nodes[Zr - 1].timeMs
      }
    }

    function Hr(rr, Sr, Qr) {
      return null !== Qr && Number.isFinite(Qr) ? (rr.set(Sr, Qr), Qr) : rr.get(Sr)
    }
    class qr {
      constructor(rr) {
        this.qx = rr, this.lastFeet = new Map, this.lastAimPoints = new Map, this.lastHeadings = new Map, this.lastPitches = new Map, this.lastLookHeadings = new Map, this.readFeet = void 0, this.readAimPoint = void 0, this.readFeet = Sr => rr.getEntityPosition(Sr), this.readAimPoint = Sr => rr.getEntityAimPoint(Sr)
      }
      aimPoint(rr) {
        return "string" !== typeof rr ? (0, fr.p)(rr, 3) ? rr : null : this.resolve(rr, this.readAimPoint, this.lastAimPoints)
      }
      currentAimPoint(rr) {
        const Sr = "string" === typeof rr ? this.qx.getEntityAimPoint(rr) : rr;
        return Sr && (0, fr.p)(Sr, 3) ? Sr : null
      }
      feetPosition(rr) {
        return this.resolve(rr, this.readFeet, this.lastFeet)
      }
      heading(rr) {
        const Sr = Hr(this.lastHeadings, rr, this.qx.getEntityHeading(rr));
        return void 0 !== Sr ? Sr : rr === this.qx.localPlayerId ? 0 : this.heading(this.qx.localPlayerId)
      }
      pitch(rr) {
        var Sr;
        return null !== (Sr = Hr(this.lastPitches, rr, this.qx.getEntityPitch(rr))) && void 0 !== Sr ? Sr : 0
      }
      lookHeading(rr) {
        var Sr;
        return null !== (Sr = Hr(this.lastLookHeadings, rr, this.qx.getEntityLookHeading(rr))) && void 0 !== Sr ? Sr : this.heading(rr)
      }
      resolve(rr, Sr, Qr) {
        const Zr = Sr(rr);
        let Wr = Qr.get(rr);
        return Zr && (0, fr.p)(Zr, 3) ? (Wr || (Wr = [0, 0, 0], Qr.set(rr, Wr)), Wr[0] = Zr[0], Wr[1] = Zr[1], Wr[2] = Zr[2], Wr) : Wr || (rr === this.qx.localPlayerId ? null : this.resolve(this.qx.localPlayerId, Sr, Qr))
      }
    }

    function Rr(rr) {
      return {
        heading: rr.heading,
        pitch: rr.pitch
      }
    }

    function gr(rr, Sr) {
      Number.isFinite(rr.heading) && Number.isFinite(rr.pitch) || (0, Wr.j)(Sr, rr)
    }

    function Cr(rr, Sr, Qr, Zr, ar) {
      if (Sr) return void(0, Wr.l)(Sr, ar);
      const jr = Zr.aimPoint(Qr);
      jr && (0, Wr.p)(rr, jr, ar)
    }
    class Mr {
      constructor(rr, Sr, Qr, Zr) {
        this.settings = rr, this.qx = Sr, this.targets = Qr, this.base = void 0, this.base = Rr(Zr)
      }
      update(rr, Sr, Qr) {
        var Zr;
        const Wr = this.settings;
        (0, fr.i)(Wr.position, Qr.position), Cr(Wr.position, Wr.lookDirection, null !== (Zr = Wr.lookAt) && void 0 !== Zr ? Zr : this.qx.localPlayerId, this.targets, this.base), Sr.apply(this.base, Qr), Qr.fov = Nr(Wr, this.qx)
      }
      continueFrom(rr) {
        rr instanceof Mr && (0, Wr.j)(rr.base, this.base)
      }
      reset(rr) {
        gr(this.base, rr)
      }
    }
    class Gr {
      constructor(rr, Sr, Qr, Zr) {
        this.settings = rr, this.qx = Sr, this.targets = Qr, this.base = void 0, this.goal = void 0, this.lastFeet = [0, 0, 0], this.foundFeet = !1, this.smoothed = [0, 0, 0], this.Lh = [0, 0, 0], this.started = !1, this.distance = -1, this.toCamera = [0, 0, 0], this.aimOrigin = [0, 0, 0], this.eyeHeading = NaN, this.eyePitch = NaN, this.base = Rr(Zr), this.goal = [...Zr.position]
      }
      update(rr, Sr, Qr) {
        var Zr, ar;
        const jr = this.settings,
          Ir = null !== (Zr = jr.target) && void 0 !== Zr ? Zr : this.qx.localPlayerId,
          Er = this.targets.feetPosition(Ir),
          pr = "eye" === jr.anchor;
        let xr = !1;
        var mr;
        Er && (xr = this.foundFeet && Kr(this.lastFeet, Er) > 32 + .1 * rr, (0, fr.i)(Er, this.lastFeet), this.foundFeet = !0, this.placeGoal(null !== (mr = pr ? this.targets.aimPoint(Ir) : null) && void 0 !== mr ? mr : Er, Ir));
        const tr = null !== (ar = jr.smoothMs) && void 0 !== ar ? ar : 0;
        !this.started || tr < 1 || xr ? ((0, fr.i)(this.goal, this.smoothed), this.Lh.fill(0), this.started = !0) : Ur(this.smoothed, this.Lh, this.goal, tr, rr), xr && (this.distance = -1), (0, fr.i)(this.smoothed, Qr.position);
        const hr = !0 === jr.avoidTerrain ? this.pullIn(Ir, rr, Qr) : 1;
        let zr = this.goal;
        if ("target" === jr.offsetSpace) zr = Qr.position;
        else if (hr < 1) {
          zr = this.aimOrigin;
          for (let rr = 0; rr < 3; rr++) zr[rr] = Qr.position[rr] + (this.goal[rr] - this.smoothed[rr]) * hr
        }
        if (pr && !jr.lookDirection && void 0 === jr.lookAt) {
          const Sr = this.targets.lookHeading(Ir),
            Qr = this.targets.pitch(Ir),
            Zr = 1 - Math.exp(-rr / 50),
            ar = (0, Wr.q)(this.eyeHeading + (0, Wr.r)(this.eyeHeading, Sr) * Zr),
            jr = this.eyePitch + (Qr - this.eyePitch) * Zr,
            fr = Ir !== this.qx.localPlayerId && Number.isFinite(ar) && Number.isFinite(jr) && !xr;
          this.eyeHeading = fr ? ar : (0, Wr.q)(Sr), this.eyePitch = fr ? jr : Qr, this.base.heading = this.eyeHeading, this.base.pitch = this.eyePitch
        } else {
          var Yr;
          this.eyeHeading = NaN, this.eyePitch = NaN, Cr(zr, jr.lookDirection, null !== (Yr = jr.lookAt) && void 0 !== Yr ? Yr : Ir, this.targets, this.base)
        }
        Sr.apply(this.base, Qr), Qr.fov = Nr(jr, this.qx)
      }
      continueFrom(rr) {
        rr instanceof Gr && (0, Zr.s)(rr.settings.target, this.settings.target) && ((0, Wr.j)(rr.base, this.base), (0, fr.i)(rr.goal, this.goal), (0, fr.i)(rr.lastFeet, this.lastFeet), this.foundFeet = rr.foundFeet, (0, fr.i)(rr.smoothed, this.smoothed), (0, fr.i)(rr.Lh, this.Lh), this.started = rr.started, this.eyeHeading = rr.eyeHeading, this.eyePitch = rr.eyePitch, !0 === rr.settings.avoidTerrain && (this.distance = rr.distance))
      }
      reset(rr) {
        gr(this.base, rr), this.Lh.fill(0), this.started = !1, this.distance = -1, this.eyeHeading = NaN, this.eyePitch = NaN
      }
      pullIn(rr, Sr, Qr) {
        const Zr = this.targets.aimPoint(rr);
        if (!Zr) return 1;
        const Wr = Qr.position,
          ar = Kr(Zr, Wr);
        if (!(ar > 0)) return 1;
        const jr = this.toCamera;
        for (let fr = 0; fr < 3; fr++) jr[fr] = (Wr[fr] - Zr[fr]) / ar;
        const Ir = function(rr, Sr, Qr) {
          return rr < 0 || Sr < rr ? Sr : Sr + (rr - Sr) * Math.exp(-Qr / 150)
        }(this.distance, function(rr, Sr, Qr, Zr) {
          const Wr = rr.raycastTerrain(Sr, Qr, Zr);
          return null !== Wr && Number.isFinite(Wr) ? Math.min(Zr, Math.max(0, Wr - .2)) : Zr
        }(this.qx, Zr, jr, ar), Sr);
        if (ar - Ir < .001) return this.distance = -1, 1;
        this.distance = Ir;
        for (let fr = 0; fr < 3; fr++) Wr[fr] = Zr[fr] + jr[fr] * Ir;
        return Ir / ar
      }
      placeGoal(rr, Sr) {
        const Qr = this.settings.offset;
        let Zr = Qr[0],
          Wr = Qr[2];
        if ("target" === this.settings.offsetSpace) {
          const rr = this.targets.heading(Sr),
            ar = Math.cos(rr),
            jr = Math.sin(rr);
          Zr = Qr[0] * ar + Qr[2] * jr, Wr = -Qr[0] * jr + Qr[2] * ar
        }
        this.goal[0] = rr[0] + Zr, this.goal[1] = rr[1] + Qr[1], this.goal[2] = rr[2] + Wr
      }
    }
    class kr {
      constructor(rr, Sr, Qr, Zr) {
        var Wr, ar;
        this.settings = rr, this.qx = Sr, this.sampler = void 0, this.base = void 0, this.resolveTarget = void 0, this.elapsedMs = 0, this.sampler = rr.keyframes.length > 0 ? new Pr(rr.keyframes, null === (Wr = rr.smooth) || void 0 === Wr || Wr, null !== (ar = rr.loop) && void 0 !== ar && ar) : null, this.base = (0, fr.f)(Zr, (0, fr.k)()), this.resolveTarget = rr => Qr.aimPoint(rr)
      }
      update(rr, Sr, Qr) {
        this.elapsedMs += rr;
        const Zr = Nr(this.settings, this.qx);
        this.sampler ? this.sampler.sample(this.elapsedMs, this.resolveTarget, Zr, this.base) : this.base.fov = Zr, (0, fr.i)(this.base.position, Qr.position), Qr.fov = this.base.fov, Sr.apply(this.base, Qr)
      }
      continueFrom(rr) {
        rr instanceof kr && (0, Zr.s)(rr.settings.keyframes, this.settings.keyframes) && (this.elapsedMs = rr.elapsedMs, (0, fr.f)(rr.base, this.base))
      }
      reset(rr) {
        gr(this.base, rr), Number.isFinite(this.elapsedMs) || (this.elapsedMs = 0)
      }
    }

    function Ar(rr, Sr) {
      return (0, Zr.v)(rr, Sr)
    }
    class Vr {
      constructor(rr, Sr, Qr) {
        var Zr;
        this.settings = rr, this.qx = Sr, this.pose = void 0, this.lastGoodPose = void 0, this.look = void 0, this.targets = void 0, this.mode = void 0, this.warnedNonFinite = !1;
        const Wr = null !== Qr && Qr.settings.mode === rr.mode,
          ar = Wr ? Qr.pose : Sr.getDefaultPose();
        this.pose = (0, fr.f)(ar, (0, fr.k)()), this.lastGoodPose = (0, fr.f)(Wr ? Qr.lastGoodPose : ar, (0, fr.k)()), this.look = new hr(rr.playerLook), this.targets = null !== (Zr = null === Qr || void 0 === Qr ? void 0 : Qr.targets) && void 0 !== Zr ? Zr : new qr(Sr);
        const jr = (0, fr.f)(ar, (0, fr.k)());
        Wr && Qr.look.unapply(jr, jr), this.mode = function(rr, Sr, Qr, Zr) {
          switch (rr.mode) {
            case "fixed":
              return new Mr(rr, Sr, Qr, Zr);
            case "follow":
              return new Gr(rr, Sr, Qr, Zr);
            case "path":
              return new kr(rr, Sr, Qr, Zr);
            case "frame":
              return new tr(rr, Sr, Qr, Zr)
          }
        }(rr, Sr, this.targets, jr), Wr && (this.look.continueFrom(Qr.look), this.mode.continueFrom(Qr.mode))
      }
      update(rr, Sr) {
        return this.look.update(rr, Sr), this.mode.update(rr, this.look, this.pose), (0, fr.o)(this.pose) ? (0, fr.f)(this.pose, this.lastGoodPose) : (this.warnedNonFinite || (console.warn("Scripted camera produced a non-finite pose; holding the last good one"), this.warnedNonFinite = !0), (0, fr.f)(this.lastGoodPose, this.pose), this.mode.reset((0, fr.o)(this.lastGoodPose) ? this.lastGoodPose : this.qx.getDefaultPose())), this.pose
      }
    }

    function ir(rr) {
      return [0, 0, rr[2], rr[3]]
    }
    class wr {
      constructor(rr) {
        this.qx = rr, this.settings = {
          mode: "default"
        }, this.pending = null, this.fade = new Ir, this.shot = null, this.blend = null, this.mixed = (0, fr.k)(), this.output = (0, fr.k)(), this.hasOutput = !1, this.loadingPositions = [], this.loadingSlots = Array.from({
          length: 3
        }, (() => [0, 0, 0]))
      }
      setSettings(rr) {
        const Sr = (0, Er.d)(rr);
        if ((0, Zr.s)(Sr, this.pending ? this.pending.settings : this.settings)) return;
        const Qr = Ar(this.settings, Sr);
        if (void 0 !== Sr.transition && !Qr) return this.pending = {
          settings: Sr,
          shot: "default" === Sr.mode ? null : new Vr(Sr, this.qx, null)
        }, void this.fade.fadeOut(Sr.transition);
        const Wr = null !== this.pending;
        this.pending = null, !Wr && Qr || this.fade.fadeIn(Zr.j.minTransitionFadeMs), this.show(Sr, !1)
      }
      show(rr, Sr) {
        var Qr, Wr;
        if ((0, Zr.s)(rr, this.settings)) return;
        const jr = !Sr && Ar(this.settings, rr);
        this.settings = rr;
        const Ir = null !== this.blend && this.blend.elapsedMs > 0,
          Er = (0, fr.f)(this.hasOutput ? this.output : this.qx.getDefaultPose(), (0, fr.k)());
        if (this.shot = "default" === rr.mode ? null : new Vr(rr, this.qx, Sr ? null : this.shot), jr) return;
        const pr = Sr || !this.shot && !this.hasOutput ? 0 : null !== (Qr = rr.blendInMs) && void 0 !== Qr ? Qr : 0;
        if (pr <= 0) return void(this.blend = null);
        const xr = (0, ar.s)(null !== (Wr = rr.blendEasing) && void 0 !== Wr ? Wr : "easeInOut");
        this.blend = {
          from: Er,
          fromScripted: this.hasOutput,
          headingDelta: NaN,
          elapsedMs: 0,
          durationMs: pr,
          easing: Ir ? ir(xr) : xr
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
      update(rr, Sr) {
        const Qr = Number.isFinite(rr) && rr > 0 ? rr : 0;
        if (this.fade.advance(Qr) && null !== this.pending) {
          const {
            settings: rr
          } = this.pending;
          this.pending = null, this.show(rr, !0)
        }
        this.loadingPositions.length = 0;
        const Zr = this.pending;
        if (null !== Zr && void 0 !== Zr && Zr.shot) {
          const rr = "path" === Zr.settings.mode ? 0 : Qr;
          this.noteLoadingPosition(Zr.shot.update(rr, fr.b).position)
        }
        if (!this.isActive()) return this.hasOutput = !1, null;
        const jr = this.shot ? this.shot.update(Qr, Sr) : this.qx.getDefaultPose();
        this.shot && this.noteLoadingPosition(jr.position);
        const Ir = this.blend;
        if (!Ir) return this.writeOutput(jr);
        Ir.elapsedMs += Qr;
        const Er = Math.min(1, Ir.elapsedMs / Ir.durationMs);
        if (Ir.headingDelta = Number.isFinite(Ir.headingDelta) ? (0, Wr.v)(Ir.headingDelta, jr.heading - Ir.from.heading) : (0, Wr.r)(Ir.from.heading, jr.heading), (0, fr.r)(Ir.from, jr, Ir.headingDelta, (0, ar.r)(Er, Ir.easing), this.mixed), Er >= 1) {
          if (this.blend = null, !this.shot) return this.hasOutput = !1, null
        } else Ir.fromScripted && this.noteLoadingPosition(Ir.from.position);
        return this.writeOutput(this.mixed)
      }
      noteLoadingPosition(rr) {
        if (rr.every(Number.isFinite)) {
          const Sr = this.loadingPositions;
          Sr.push((0, fr.i)(rr, this.loadingSlots[Sr.length]))
        }
      }
      writeOutput(rr) {
        const Sr = this.output;
        (0, fr.o)(rr) ? (0, fr.f)(rr, Sr) : this.hasOutput || (0, fr.f)(this.qx.getDefaultPose(), Sr), Sr.pitch = (0, Wr.i)(Sr.pitch);
        const Qr = this.qx.getDefaultFov(),
          ar = Number.isFinite(Qr) && Qr > 0 && Qr < 180,
          jr = ar ? Math.min(Zr.j.minFov, Qr) : Zr.j.minFov,
          Ir = ar ? Math.max(Zr.j.maxFov, Qr) : Zr.j.maxFov;
        return Sr.fov = Number.isFinite(Sr.fov) ? Math.min(Ir, Math.max(jr, Sr.fov)) : Ir, this.hasOutput = !0, Sr
      }
    }
  },
  40748: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Wr,
      f: () => Ir,
      i: () => jr,
      k: () => ar,
      o: () => Er,
      p: () => fr,
      r: () => pr
    });
    var Zr = Qr(38207);
    const Wr = {
      xR: 0,
      yR: 0
    };

    function ar() {
      return {
        position: [0, 0, 0],
        heading: 0,
        pitch: 0,
        fov: 0
      }
    }

    function jr(rr, Sr) {
      return Sr[0] = rr[0], Sr[1] = rr[1], Sr[2] = rr[2], Sr
    }

    function Ir(rr, Sr) {
      return jr(rr.position, Sr.position), Sr.heading = rr.heading, Sr.pitch = rr.pitch, Sr.fov = rr.fov, Sr
    }

    function fr(rr, Sr) {
      return Array.isArray(rr) && rr.length === Sr && rr.every(Number.isFinite)
    }

    function Er(rr) {
      return fr(rr.position, 3) && Number.isFinite(rr.heading) && Number.isFinite(rr.pitch) && Number.isFinite(rr.fov)
    }

    function pr(rr, Sr, Qr, Wr, ar) {
      for (let Zr = 0; Zr < 3; Zr++) ar.position[Zr] = rr.position[Zr] + (Sr.position[Zr] - rr.position[Zr]) * Wr;
      return ar.heading = (0, Zr.q)(rr.heading + Qr * Wr), ar.pitch = rr.pitch + (Sr.pitch - rr.pitch) * Wr, ar.fov = rr.fov + (Sr.fov - rr.fov) * Wr, ar
    }
  },
  40775: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Tr,
      e: () => Nr
    });
    var Zr = Qr(40770),
      Wr = Qr(40748);
    const ar = Zr.f,
      jr = Zr.n,
      Ir = Zr.h;

    function fr(rr, Sr, Qr, Zr) {
      return Number.isFinite(rr) ? Math.min(Qr, Math.max(Sr, rr)) : Zr
    }

    function Er(rr, Sr, Qr) {
      return void 0 !== rr && Number.isFinite(rr) ? Math.min(Qr, Math.max(Sr, rr)) : void 0
    }

    function pr(rr) {
      const Sr = Zr.j.maxCoordinate;
      return [Math.min(Sr, Math.max(-Sr, rr[0])), Math.min(Sr, Math.max(-Sr, rr[1])), Math.min(Sr, Math.max(-Sr, rr[2]))]
    }

    function xr(rr) {
      return "string" === typeof rr ? rr : (0, Wr.p)(rr, 3) ? pr(rr) : void 0
    }
    const mr = new RegExp(Zr.p);

    function Nr(rr) {
      return "string" === typeof rr && mr.test(rr)
    }

    function Ur(rr) {
      const Sr = [];
      if (!Array.isArray(rr)) return Sr;
      for (const Qr of rr.slice(0, Zr.j.maxFrameTargets)) {
        const rr = xr(Qr);
        void 0 === rr || "string" === typeof rr && !Nr(rr) || Sr.push(rr)
      }
      return Sr
    }

    function tr(rr) {
      if (!(0, Wr.p)(rr, 3)) return;
      const Sr = Math.max(Math.abs(rr[0]), Math.abs(rr[1]), Math.abs(rr[2])),
        Qr = Math.hypot(rr[0] / Sr, rr[1] / Sr, rr[2] / Sr);
      return 0 === Sr || Sr * Qr < Zr.j.minDirectionLength ? void 0 : [rr[0] / Sr / Qr, rr[1] / Sr / Qr, rr[2] / Sr / Qr]
    }

    function hr(rr) {
      if (void 0 !== rr) return "string" === typeof rr ? ar.includes(rr) ? rr : void 0 : (0, Wr.p)(rr, 4) ? [fr(rr[0], 0, 1, 0), fr(rr[1], Zr.j.minEasingY, Zr.j.maxEasingY, 0), fr(rr[2], 0, 1, 1), fr(rr[3], Zr.j.minEasingY, Zr.j.maxEasingY, 1)] : "linear"
    }

    function zr(rr) {
      if (rr) return {
        maxYaw: fr(rr.maxYaw, 0, Zr.j.maxPlayerLook, 0),
        maxPitch: fr(rr.maxPitch, 0, Zr.j.maxPlayerLook, 0),
        returnMs: Er(rr.returnMs, 0, Zr.j.maxReturnMs)
      }
    }
    const Yr = new RegExp(Zr.c);

    function nr(rr) {
      var Sr;
      if ("object" !== typeof rr || null === rr) return;
      const Qr = Zr.j.maxTransitionMs,
        Wr = Zr.j.minTransitionFadeMs;
      return {
        colour: "string" === typeof rr.colour && Yr.test(rr.colour) ? rr.colour : Zr.d,
        outMs: fr(rr.outMs, Wr, Qr, Wr),
        holdMs: fr(null !== (Sr = rr.holdMs) && void 0 !== Sr ? Sr : 0, 0, Qr, 0),
        inMs: fr(rr.inMs, Wr, Qr, Wr)
      }
    }

    function er(rr) {
      return !0 === rr || void 0
    }

    function Kr(rr) {
      if ("object" !== typeof rr || null === rr) return !1;
      const Sr = rr.lookAt;
      return Number.isFinite(rr.timeMs) && (0, Wr.p)(rr.position, 3) && (void 0 === Sr || "string" === typeof Sr || (0, Wr.p)(Sr, 3))
    }

    function yr(rr) {
      return {
        ...rr,
        timeMs: fr(rr.timeMs, 0, Zr.j.maxPathMs, 0),
        position: pr(rr.position),
        lookAt: xr(rr.lookAt),
        lookDirection: tr(rr.lookDirection),
        fov: Er(rr.fov, Zr.j.minFov, Zr.j.maxFov),
        easing: hr(rr.easing)
      }
    }

    function Br(rr) {
      const Sr = [];
      if (!Array.isArray(rr)) return Sr;
      for (const Qr of rr.slice(0, Zr.j.maxKeyframes)) {
        if (!Kr(Qr)) continue;
        const rr = yr(Qr);
        (0 === Sr.length || rr.timeMs > Sr[Sr.length - 1].timeMs) && Sr.push(rr)
      }
      return Sr
    }

    function Tr(rr) {
      if ("object" !== typeof rr || null === rr) return {
        mode: "default"
      };
      const Sr = {
          blendInMs: Er(rr.blendInMs, 0, Zr.j.maxBlendInMs),
          blendEasing: hr(rr.blendEasing),
          transition: nr(rr.transition),
          letterbox: er(rr.letterbox),
          hideHud: er(rr.hideHud)
        },
        Qr = {
          mode: "default",
          ...Sr
        };
      if ("default" === rr.mode || "fixed" === rr.mode && !(0, Wr.p)(rr.position, 3)) return Qr;
      const ar = {
        ...Sr,
        fov: Er(rr.fov, Zr.j.minFov, Zr.j.maxFov),
        playerFacing: (mr = rr.playerFacing, jr.includes(mr) ? mr : void 0),
        playerLook: zr(rr.playerLook)
      };
      var mr, Nr, Yr;
      switch (rr.mode) {
        case "fixed":
          return {
            ...rr, ...ar, position: pr(rr.position), lookAt: xr(rr.lookAt), lookDirection: tr(rr.lookDirection)
          };
        case "follow":
          return {
            ...rr, ...ar, target: "string" === typeof rr.target ? rr.target : void 0, anchor: (Yr = rr.anchor, Ir.includes(Yr) ? Yr : void 0), lookAt: xr(rr.lookAt), offset: (Nr = rr.offset, Array.isArray(Nr) ? [fr(Nr[0], -Zr.j.maxOffset, Zr.j.maxOffset, 0), fr(Nr[1], -Zr.j.maxOffset, Zr.j.maxOffset, 0), fr(Nr[2], -Zr.j.maxOffset, Zr.j.maxOffset, 0)] : [0, 0, 0]), lookDirection: tr(rr.lookDirection), smoothMs: Er(rr.smoothMs, 0, Zr.j.maxSmoothMs)
          };
        case "path":
          return {
            ...rr, ...ar, keyframes: Br(rr.keyframes)
          };
        case "frame":
          return {
            ...rr, ...ar, targets: Ur(rr.targets), viewHeading: Er(rr.viewHeading, -Zr.j.maxFrameHeading, Zr.j.maxFrameHeading), viewElevation: Er(rr.viewElevation, 0, Zr.j.maxFrameElevation), padding: Er(rr.padding, 0, Zr.j.maxFrameDistance), closestDistance: Er(rr.closestDistance, 0, Zr.j.maxFrameDistance), furthestDistance: Er(rr.furthestDistance, 0, Zr.j.maxFrameDistance), smoothMs: Er(rr.smoothMs, 0, Zr.j.maxSmoothMs)
          };
        default:
          return Qr
      }
    }
  },
  40808: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Zr
    });
    const Zr = {
      message: [{
        translationKey: "general:bunnyHoppingDisabled"
      }],
      timeoutLength: 2e3,
      type: "Error"
    }
  },
  40696: (rr, Sr, Qr) => {
    function Zr(rr, Sr) {
      return Sr.set(rr), Sr
    }
    Qr.d(Sr, {
      c: () => Zr
    })
  },
  40694: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => jr
    });
    var Zr = Qr(3452),
      Wr = Qr.n(Zr);
    const ar = [1, 1, 1];

    function jr(rr) {
      if (!rr) return [...ar];
      try {
        const [Sr, Qr, Zr] = Wr()(rr).rgb().array();
        return [Sr / 255, Qr / 255, Zr / 255]
      } catch (Sr) {
        return console.warn(`Invalid groundArrowPath colour "${rr}":`, Sr), [...ar]
      }
    }
  },
  40801: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Ir,
      f: () => Er,
      i: () => fr
    });
    var Zr = Qr(319),
      Wr = Qr(3995);
    const ar = /\/textures\/skyBoxes\/(space_blue|space_lightblue|space_red_2|space_white)\/(_[np][xyz]\.jpg)$/,
      jr = 512;

    function Ir(rr) {
      var Sr;
      const Qr = Math.min(screen.width, screen.height) * (null !== (Sr = (0, Zr.d)()) && void 0 !== Sr ? Sr : (0, Wr.m)());
      return Math.max(window.innerHeight * (0, Wr.m)(), Qr) / (0, Wr.n)(rr)
    }

    function fr(rr, Sr, Qr) {
      return Sr / (2 * Math.tan(Qr / 2)) > jr ? rr : Er(rr)
    }

    function Er(rr) {
      return rr.map((rr => rr.replace(ar, "/textures/skyBoxes/$1/1024/$2")))
    }
  },
  40686: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Wr
    });
    var Zr = Qr(208);

    function Wr(rr, Sr, Qr, Wr, ar, jr, Ir, fr, Er, pr, xr) {
      const mr = Zr.i.hx,
        Nr = ar - Qr;
      let Ur = Nr * (jr - Wr);
      pr.fill(0, 0, Ur);
      for (let Zr = Math.floor((fr - 1) / mr);
        (Zr + 1) * mr > Ir; Zr--) {
        const tr = Zr * mr;
        for (let hr = Math.floor(Qr / mr); hr * mr < ar; hr++) {
          const zr = hr * mr,
            Yr = Math.max(Qr - zr, 0),
            nr = Math.min(ar - zr, mr);
          for (let ar = Math.floor(Wr / mr); ar * mr < jr; ar++) {
            const er = rr(hr, Zr, ar);
            if (!er) continue;
            const Kr = ar * mr,
              yr = Math.max(Wr - Kr, 0),
              Br = Math.min(jr - Kr, mr),
              Tr = er.DN,
              vr = er.ZN,
              Or = vr.data;
            for (let rr = Math.min(fr - 1 - tr, mr - 1); rr >= Math.max(Ir - tr, 0); rr--) {
              const Zr = Tr[rr],
                ar = Zr === Sr;
              if (ar || 0 !== Er[Zr]) {
                for (let Sr = Yr; Sr < nr; Sr++)
                  for (let jr = yr; jr < Br; jr++) {
                    const Ir = (Kr + jr - Wr) * Nr + zr + Sr - Qr;
                    if (0 !== pr[Ir]) continue;
                    const fr = ar ? Or[vr.index(Sr, rr, jr)] : Zr;
                    0 !== Er[fr] && (pr[Ir] = fr, xr[Ir] = tr + rr, Ur--)
                  }
                if (0 === Ur) return
              }
            }
          }
        }
      }
    }
  },
  35261: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => ar,
      g: () => Ir,
      h: () => jr,
      l: () => Wr,
      o: () => Zr
    });
    const Zr = {
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
      Wr = "/textures/dayNight/sun.png",
      ar = "/textures/dayNight/moon.png",
      jr = "/textures/dayNight/stars",
      Ir = ["_px.png", "_py.png", "_pz.png", "_nx.png", "_ny.png", "_nz.png"]
  },
  40770: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => xr,
      d: () => mr,
      f: () => Zr,
      h: () => Wr,
      j: () => Er,
      n: () => ar,
      p: () => pr,
      s: () => fr,
      v: () => Ir
    });
    const Zr = ["linear", "easeIn", "easeOut", "easeInOut"],
      Wr = ["feet", "eye"],
      ar = ["movement", "camera", "cursor"],
      jr = ["targets", "playerFacing", "blendInMs", "blendEasing", "transition", "letterbox", "hideHud"];

    function Ir(rr, Sr) {
      return fr(rr, Sr, jr)
    }

    function fr(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      if (rr === Sr || Number.isNaN(rr) && Number.isNaN(Sr)) return !0;
      if ("object" !== typeof rr || "object" !== typeof Sr || null === rr || null === Sr || Array.isArray(rr) !== Array.isArray(Sr)) return !1;
      const Zr = rr,
        Wr = Sr;
      for (const ar of new Set([...Object.keys(Zr), ...Object.keys(Wr)]))
        if (!Qr.includes(ar) && !fr(Zr[ar], Wr[ar])) return !1;
      return !0
    }
    const Er = {
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
      pr = "^-[1-9][0-9]*$",
      xr = "^#[0-9a-fA-F]{6}$",
      mr = "#000000"
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);