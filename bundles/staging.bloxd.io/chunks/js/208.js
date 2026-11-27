export const id = 208;
export const ids = [208];
export const modules = {
  39943: (ee, ie, He) => {
    He.d(ie, {
      e: () => ye
    });
    class ye {
      constructor(ee, ie) {
        this.read = ee, this.apply = ie, this.release = null
      }
      turn(ee, ie) {
        const He = null === this.release ? this.read() : this.release.transitionMs;
        this.stop(!1), this.apply({
          forcedCameraDirectionTransitionMs: ie,
          forcedCameraDirection: [ee[0], ee[1], ee[2]]
        }), this.release = {
          timer: setTimeout((() => {
            this.stop(!0)
          }), ie + 100),
          transitionMs: He
        }
      }
      dispose() {
        this.stop(!0)
      }
      stop(ee) {
        null !== this.release && (clearTimeout(this.release.timer), ee && this.apply({
          forcedCameraDirection: null,
          forcedCameraDirectionTransitionMs: this.release.transitionMs
        }), this.release = null)
      }
    }
  },
  39452: (ee, ie, He) => {
    He.d(ie, {
      c: () => Me,
      d: () => be
    });
    const ye = new Map;

    function be(ee, ie) {
      ye.set(ee, ie)
    }

    function Me(ee) {
      return ee ? ye.get(ee) : void 0
    }
  },
  37163: (ee, ie, He) => {
    He.d(ie, {
      c: () => oe,
      f: () => Ue,
      i: () => Je,
      m: () => Fe,
      p: () => Be
    });
    var ye = He(618),
      be = He(1790),
      Me = He(5279);
    class Ke {
      constructor(ee, ie) {
        this.width = ee, this.bk = ie, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(ee * ie)
      }
      push(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const He = this.data,
          ye = this.next * this.width;
        for (let be = 0; be < this.width; be++) He[ye + be] = ee[ie + be];
        this.next = (this.next + 1) % this.bk, this.size = Math.min(this.size + 1, this.bk)
      }
      rows() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1 / 0;
        const He = [],
          ye = (this.next - this.size + this.bk) % this.bk;
        for (let be = 0; be < this.size; be++) {
          const Me = (ye + be) % this.bk * this.width;
          this.data[Me + ee] >= ie && He.push(Array.from(this.data.subarray(Me, Me + this.width)))
        }
        return He
      }
      lines() {
        return this.rows().map((ee => ee.join(",")))
      }
    }
    const Ue = 10,
      Fe = {
        idle: 0,
        KR: 1,
        hV: 2,
        rV: 3,
        dp: 4
      },
      Je = {
        none: 0,
        skipped: 1,
        paced: 2,
        drawn: 3
      },
      oe = {
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
      Re = 12e3,
      ke = ["nowMs", "dtMs", "rawX", "rawY", "turnedX", "turnedY", "outcome", "velocityX", "velocityY", "limit"],
      qe = ["timeStamp", "nowMs", "movementX", "movementY", "locked"],
      fe = ["nowMs", "dtMs", "heading", "pitch", "kind"],
      Te = ["nowMs", "source", "headingBefore", "pitchBefore", "headingAfter", "pitchAfter"],
      pe = ["nowMs", "change", "count"];

    function Xe(ee) {
      return "js" === ee ? oe.jsClient : oe.wasmClient
    }
    class ze {
      constructor() {
        this.steps = new Ke(Ue, Re), this.events = new Ke(qe.length, Re), this.frames = new Ke(fe.length, Re), this.cameraSets = new Ke(Me.f, 256), this.changes = new Ke(pe.length, 256)
      }
    }
    const Be = new class {
      constructor() {
        this.rings = null, this.sample = new Float64Array(qe.length), this.startedClient = null, this.startedAtMs = 0
      }
      get client() {
        return this.startedClient
      }
      start(ee, ie) {
        this.startedClient = ee, this.startedAtMs = performance.now(), null !== this.rings ? this.change(Xe(ee)) : ie && this.allocate()
      }
      lockGained() {
        this.allocate(), this.change(oe.lockGained)
      }
      allocate() {
        null === this.rings && (this.rings = new ze, null !== this.startedClient && this.changeAt(this.startedAtMs, Xe(this.startedClient), 1))
      }
      step(ee, ie) {
        var He;
        ee[ie + 6] !== Fe.dp && (null === (He = this.rings) || void 0 === He || He.steps.push(ee, ie))
      }
      cameraSet(ee, ie) {
        var He;
        null === (He = this.rings) || void 0 === He || He.cameraSets.push(ee, ie)
      }
      mouseMove(ee, ie) {
        const He = this.rings;
        if (null === He) return;
        const ye = this.sample;
        ye[0] = ee.timeStamp, ye[1] = performance.now(), ye[2] = ee.movementX, ye[3] = ee.movementY, ye[4] = ie ? 1 : 0, He.events.push(ye)
      }
      frame(ee, ie, He, ye) {
        const be = this.rings;
        if (null === be || ye === Je.none) return;
        const Me = this.sample;
        Me[0] = performance.now(), Me[1] = ee, Me[2] = ie, Me[3] = He, Me[4] = ye, be.frames.push(Me)
      }
      change(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.changeAt(performance.now(), ee, ie)
      }
      changeAt(ee, ie, He) {
        const ye = this.rings;
        if (null === ye) return;
        const be = this.sample;
        be[0] = ee, be[1] = ie, be[2] = He, ye.changes.push(be)
      }
      dumpText() {
        var ee, ie;
        const He = this.rings;
        return [`look records (${this.startedClient}): ${ke.join(",")}`, ...null !== (ee = null === He || void 0 === He ? void 0 : He.steps.lines()) && void 0 !== ee ? ee : [], `mousemove events: ${qe.join(",")}`, ...null !== (ie = null === He || void 0 === He ? void 0 : He.events.lines()) && void 0 !== ie ? ie : []].join("\n")
      }
      toJson(ee, ie) {
        var He;
        const be = ee - 6e4,
          Me = this.rings,
          Ke = function(ee, ie) {
            var He;
            let ye = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            const Me = null !== (He = null === ee || void 0 === ee ? void 0 : ee.rows(ye, be)) && void 0 !== He ? He : [];
            return {
              columns: ie,
              fromMs: 0 === Me.length ? null : Me[0][ye],
              rows: Me
            }
          };
        return {
          version: ye.b,
          client: null !== (He = this.startedClient) && void 0 !== He ? He : "not started",
          savedAt: (new Date).toISOString(),
          savedAtMs: ee,
          keptMs: 6e4,
          page: window.location.href,
          userAgent: navigator.userAgent,
          devicePixelRatio: window.devicePixelRatio,
          screen: {
            width: window.screen.width,
            height: window.screen.height
          },
          HX: null !== document.pointerLockElement,
          visibility: document.visibilityState,
          ...ie,
          outcomes: Fe,
          frameKinds: Je,
          changes: oe,
          lookSteps: Ke(null === Me || void 0 === Me ? void 0 : Me.steps, ke),
          mouseMoves: Ke(null === Me || void 0 === Me ? void 0 : Me.events, qe, 1),
          frames: Ke(null === Me || void 0 === Me ? void 0 : Me.frames, fe),
          cameraSets: Ke(null === Me || void 0 === Me ? void 0 : Me.cameraSets, Te),
          pageChanges: Ke(null === Me || void 0 === Me ? void 0 : Me.changes, pe)
        }
      }
      save(ee) {
        const ie = JSON.stringify(this.toJson(performance.now(), ee));
        (0, be.e)(new Blob([ie], {
          type: "application/json"
        }), `bloxd-mouse-look-${(new Date).toISOString().replace(/[:.]/g,"-")}.json`)
      }
    }
  },
  40499: (ee, ie, He) => {
    He.d(ie, {
      b: () => be
    });
    var ye = He(39023);

    function be(ee, ie, He) {
      var be, Me, Ke, Ue, Fe, Je, oe;
      const Re = (0, ye.d)(ee, ie, He[0], He[1], He[2]),
        ke = Re ? null !== (be = Re.textCell) && void 0 !== be ? be : Re.rect.anchor : He,
        qe = ie(ke[0], ke[1], ke[2]);
      return {
        pos: [He[0], He[1], He[2]],
        noticeboardSpan: Re && {
          width: Re.rect.width,
          height: Re.rect.height
        },
        text: null !== (Me = null === qe || void 0 === qe || null === (Ke = qe.persisted) || void 0 === Ke || null === (Ue = Ke.shared) || void 0 === Ue ? void 0 : Ue.text) && void 0 !== Me ? Me : "",
        textSize: null !== (Fe = null === qe || void 0 === qe || null === (Je = qe.persisted) || void 0 === Je || null === (oe = Je.shared) || void 0 === oe ? void 0 : oe.textSize) && void 0 !== Fe ? Fe : null
      }
    }
  },
  39305: (ee, ie, He) => {
    function ye(ee) {
      switch (ee.kind) {
        case void 0:
        case "flatEmissive":
          return !1;
        case "chevronPath":
        case "furnaceFire":
          return !0
      }
    }
    He.d(ie, {
      e: () => be,
      i: () => Me,
      l: () => ye
    });
    const be = 4,
      Me = 3
  },
  39992: (ee, ie, He) => {
    He.d(ie, {
      e: () => be,
      f: () => Me
    });
    var ye = He(347);
    const be = new Set(["bedwars", "bridgeBattle", "buildAFactory2", "classic", "clutch", "containmentBreach", "cooking", "defusal", "frontline", "goalRush", "greenville", "hideseek", "luckyBedwars", "murderMystery", "ninetyNineNights", "oneBlock", "plots", "pvpCiv", "secretSanta", "skyIslands", "skyblock", "tsunami"]);
    class Me {
      constructor(ee) {
        this.importGame = ee, this.loads = new Map, this.loaded = new Map
      }
      load(ee) {
        const ie = (0, ye.Xb)(ee);
        if (!be.has(ie)) return Promise.resolve(void 0);
        let He = this.loads.get(ie);
        return He || (He = this.importGame(ie).then((ee => {
          const He = ee.default;
          if ("function" !== typeof He) throw new Error(`${ie}'s client code has no default-exported factory`);
          return this.loaded.set(ie, He), He
        })).catch((ee => {
          throw this.loads.delete(ie), ee
        })), this.loads.set(ie, He)), He
      }
      loadedFactory(ee) {
        const ie = (0, ye.Xb)(ee);
        if (!be.has(ie)) return;
        const He = this.loaded.get(ie);
        if (!He) throw new Error(`${ie}'s client code started before it loaded`);
        return He
      }
    }
  },
  39983: (ee, ie, He) => {
    function ye(ee, ie) {
      return Object.values({
        ...ee,
        ...ie
      }).filter((ee => null !== ee))
    }
    He.d(ie, {
      b: () => ye
    })
  },
  40502: (ee, ie, He) => {
    He.d(ie, {
      b: () => Ke
    });
    var ye = He(10063),
      be = He(34897),
      Me = He(3608);

    function Ke(ee) {
      if (ee === ye.e) return 0;
      const ie = (0, Me.c)(ee);
      if (void 0 !== ie && ie <= be.MAX_BLOCK_ID) return ie;
      const He = (0, Me.c)(ee.split("|")[0]);
      if (void 0 !== He && He <= be.MAX_BLOCK_ID && (0, be.rootMetaDescOf)(He) === ee) return He;
      throw new Error(`Invalid block name. You sent ${ee}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`)
    }
  },
  40048: (ee, ie, He) => {
    He.d(ie, {
      b: () => be
    });
    var ye = He(18);
    class be {
      constructor(ee) {
        this.screen = ee, this.hidesHud = !1
      }
      show(ee, ie) {
        this.screen.setFade(ee.colour, ee.alpha), this.screen.setLetterbox(!0 === ie.letterbox, ee.alpha < 1), this.setHudHidden(!0 === ie.hideHud)
      }
      clear() {
        this.screen.clear(), this.setHudHidden(!1)
      }
      setHudHidden(ee) {
        this.hidesHud !== ee && (this.hidesHud = ee, ye.e.set({
          isUiHiddenByCamera: ee
        }))
      }
    }
  },
  40009: (ee, ie, He) => {
    He.d(ie, {
      B: () => oe,
      d: () => ye,
      f: () => ke,
      i: () => Re,
      k: () => Ke,
      o: () => fe,
      r: () => Fe,
      v: () => Te,
      x: () => Je,
      z: () => Ue
    });
    const ye = Math.PI / 2 - .001,
      be = 2 * Math.PI,
      Me = 1e-9;

    function Ke(ee, ie) {
      ie.heading = ee.heading, ie.pitch = ee.pitch
    }

    function Ue(ee, ie) {
      const He = ie - ee;
      return He - be * Math.floor((He + Math.PI) / be)
    }

    function Fe(ee, ie, He) {
      return ee + Ue(ee, ie) * He
    }

    function Je(ee) {
      if (!Number.isFinite(ee)) return ee;
      const ie = ee - be * Math.floor(ee / be);
      return ie < be ? ie : 0
    }

    function oe(ee, ie) {
      return ee + Ue(ee, ie)
    }

    function Re(ee) {
      return Math.max(-ye, Math.min(ye, ee))
    }

    function ke(ee, ie, He) {
      const ye = Math.cos(ie);
      return He[0] = ye * Math.sin(ee), He[1] = -Math.sin(ie), He[2] = ye * Math.cos(ee), He
    }

    function qe(ee, ie, He, ye) {
      const be = Math.sqrt(ee * ee + He * He);
      return be < Me && Math.abs(ie) < Me || (be >= Me && (ye.heading = Math.atan2(ee, He)), ye.pitch = Re(Math.atan2(-ie, be) + 0)), ye
    }

    function fe(ee, ie) {
      return qe(ee[0], ee[1], ee[2], ie)
    }

    function Te(ee, ie, He) {
      return qe(ie[0] - ee[0], ie[1] - ee[1], ie[2] - ee[2], He)
    }
  },
  40046: (ee, ie, He) => {
    He.d(ie, {
      e: () => Me,
      h: () => be
    });
    var ye = He(40009);

    function be(ee) {
      var ie;
      const He = "default" === ee.mode ? "movement" : null !== (ie = ee.playerFacing) && void 0 !== ie ? ie : "movement";
      return "cursor" === He ? {
        facing: He,
        mouseTurns: null
      } : {
        facing: He,
        mouseTurns: "default" !== ee.mode && void 0 !== ee.playerLook ? "look" : "view"
      }
    }

    function Me(ee, ie, He, be, Me, Ke) {
      return Ke.XV = 0, Ke.zV = 0, Ke.pointedAt = void 0, void 0 !== be ? Me ? (Ke.pointedAt = be, ee) : (0, ye.x)(be.heading) : Me ? (Ke.XV = ie, Ke.zV = He, ee) : (0, ye.x)(ee + ie)
    }
  },
  40019: (ee, ie, He) => {
    He.d(ie, {
      d: () => Se
    });
    var ye = He(40028),
      be = He(40009),
      Me = He(37819);

    function Ke(ee, ie, He, ye) {
      if (!(ye > 0)) return ie;
      const be = ie > ee ? Math.min(ie, ee + He / ye) : Math.max(ie, ee - He / ye);
      return Math.abs(ie - be) < 1e-9 ? ie : be
    }
    class Ue {
      constructor() {
        this.phase = null, this.outMs = 0, this.holdMs = 0, this.inMs = 0, this.heldMs = 0, this.sinceTurnMs = 1 / 0, this.clearMs = 1 / 0, this.waiting = null, this.screen = {
          colour: ye.d,
          alpha: 0
        }
      }
      getScreen() {
        return this.screen
      }
      fadeOut(ee) {
        !this.isGoingOut() && this.sinceTurnMs < ye.m.minFadeTurnMs ? this.waiting = {
          turn: "out",
          transition: ee
        } : (this.waiting = null, this.startOut(ee))
      }
      fadeIn(ee) {
        this.isGoingOut() ? this.sinceTurnMs < ye.m.minFadeTurnMs ? this.waiting = {
          turn: "in",
          minMs: ee
        } : (this.waiting = null, this.startIn(ee)) : this.waiting = null
      }
      advance(ee) {
        const ie = this.waiting;
        if (null === ie) return this.step(ee);
        const He = ye.m.minFadeTurnMs - this.sinceTurnMs;
        if (He > ee) return this.step(ee);
        const be = this.step(He);
        return this.waiting = null, "out" === ie.turn ? this.startOut(ie.transition) : this.startIn(ie.minMs), this.step(ee - He) || be
      }
      isGoingOut() {
        return "out" === this.phase || "hold" === this.phase
      }
      startOut(ee) {
        ("in" === this.phase || null === this.phase && this.clearMs < ye.m.minFadeTurnMs) && (this.sinceTurnMs = 0), this.phase = "out", 0 === this.screen.alpha && (this.screen.colour = ee.colour), this.outMs = ee.outMs, this.holdMs = ee.holdMs, this.inMs = ee.inMs
      }
      startIn(ee) {
        this.isGoingOut() && (this.sinceTurnMs = 0), this.phase = "in", this.inMs = Math.max(ee, this.inMs)
      }
      step(ee) {
        const ie = this.screen;
        this.sinceTurnMs += ee, null === this.phase && (this.clearMs += ee);
        let He = !1,
          be = ee;
        if ("out" === this.phase) {
          const ye = (1 - ie.alpha) * this.outMs;
          if (ie.alpha = Ke(ie.alpha, 1, ee, this.outMs), ie.alpha < 1) return !1;
          this.phase = "hold", this.heldMs = 0, be = Math.max(0, ee - ye), He = !0
        }
        let Me = ee;
        if ("hold" === this.phase) {
          this.heldMs += be;
          const ee = Math.min(this.heldMs - this.holdMs, this.sinceTurnMs - ye.m.minFadeTurnMs);
          if (ee < 0 || He) return He;
          this.phase = "in", this.sinceTurnMs = ee, Me = ee
        }
        return "in" === this.phase && (ie.alpha = Ke(ie.alpha, 0, Me, this.inMs), ie.alpha <= 0 && (this.phase = null, this.clearMs = 0)), He
      }
    }
    var Fe = He(40005),
      Je = He(40037),
      oe = He(1952),
      Re = He(37392);

    function ke(ee, ie) {
      for (let He = 0; He < ie.length; He++) ie[He] = ee[He]
    }

    function qe(ee, ie) {
      var He;
      return null !== (He = ee.fov) && void 0 !== He ? He : ie.getDefaultFov()
    }

    function fe(ee, ie, He, ye, be) {
      const Me = 2 / ye,
        Ke = Math.exp(-Me * be);
      for (let Ue = 0; Ue < ee.length; Ue++) {
        const ye = ee[Ue] - He[Ue],
          Fe = (ie[Ue] + Me * ye) * be;
        ee[Ue] = He[Ue] + (ye + Fe) * Ke, ie[Ue] = (ie[Ue] - Me * Fe) * Ke
      }
    }
    class Te {
      constructor(ee, ie, He, ye) {
        var Me, Ke, Ue, Fe, Je;
        this.settings = ee, this.xR = ie, this.targets = He, this.base = void 0, this.closestDistance = void 0, this.furthestDistance = void 0, this.goal = void 0, this.framedTargets = !1, this.smoothed = [0, 0, 0, 0, 0, 0], this.Op = [0, 0, 0, 0, 0, 0], this.started = !1, this.angles = {
          heading: 0,
          pitch: 0
        }, this.points = [], this.forward = [0, 0, 0], this.base = {
          heading: (0, be.x)((0, oe.f)(null !== (Me = ee.viewHeading) && void 0 !== Me ? Me : 0)),
          pitch: (0, be.i)((0, oe.f)(null !== (Ke = ee.viewElevation) && void 0 !== Ke ? Ke : 45))
        }, this.closestDistance = null !== (Ue = ee.closestDistance) && void 0 !== Ue ? Ue : Math.min(6, null !== (Fe = ee.furthestDistance) && void 0 !== Fe ? Fe : 1 / 0), this.furthestDistance = null !== (Je = ee.furthestDistance) && void 0 !== Je ? Je : Math.max(64, this.closestDistance);
        const Re = (0, be.f)(this.base.heading, this.base.pitch, this.forward),
          ke = ye.position,
          qe = this.closestDistance;
        this.goal = [ke[0] + Re[0] * qe, ke[1] + Re[1] * qe, ke[2] + Re[2] * qe, qe, this.base.heading, this.base.pitch]
      }
      update(ee, ie, He) {
        var ye, Me;
        this.placeGoal(null !== (ye = this.settings.fov) && void 0 !== ye ? ye : this.xR.getBaseFov()), this.goal[4] = (0, be.B)(this.smoothed[4], this.base.heading), this.goal[5] = this.base.pitch;
        const Ke = null !== (Me = this.settings.smoothMs) && void 0 !== Me ? Me : 400;
        !this.started || Ke < 1 ? (ke(this.goal, this.smoothed), this.Op.fill(0), this.started = !0) : fe(this.smoothed, this.Op, this.goal, Ke, ee), this.angles.heading = this.smoothed[4], this.angles.pitch = (0, be.i)(this.smoothed[5]), ie.apply(this.angles, He);
        const Ue = (0, be.f)(He.heading, He.pitch, this.forward);
        for (let be = 0; be < 3; be++) He.position[be] = this.smoothed[be] - Ue[be] * this.smoothed[3];
        He.fov = qe(this.settings, this.xR)
      }
      continueFrom(ee) {
        ee instanceof Te && (ke(ee.goal, this.goal), ke(ee.smoothed, this.smoothed), ke(ee.Op, this.Op), this.framedTargets = ee.framedTargets, this.started = ee.started)
      }
      reset() {
        this.Op.fill(0), this.started = !1
      }
      placeGoal(ee) {
        var ie;
        let He = 0;
        for (const oe of this.settings.targets) {
          const ee = this.targets.currentAimPoint(oe);
          ee && (0, Fe.j)(ee, this.pointAt(He++))
        }
        if (He > 0) this.framedTargets = !0;
        else if (!this.framedTargets) {
          const ee = this.targets.aimPoint(this.xR.localPlayerId);
          ee && (0, Fe.j)(ee, this.pointAt(He++))
        }
        const ye = this.goal;
        if (0 === He) return void(ye[3] = this.withinDistances(ye[3]));
        for (let Fe = 0; Fe < 3; Fe++) {
          let ee = 1 / 0,
            ie = -1 / 0;
          for (let ye = 0; ye < He; ye++) ee = Math.min(ee, this.points[ye][Fe]), ie = Math.max(ie, this.points[ye][Fe]);
          ye[Fe] = (ee + ie) / 2
        }
        let be = 0;
        for (let Fe = 0; Fe < He; Fe++) {
          const ee = this.points[Fe];
          be = Math.max(be, Math.hypot(ee[0] - ye[0], ee[1] - ye[1], ee[2] - ye[2]))
        }
        const Me = Math.tan((0, oe.f)(ee) / 2),
          Ke = Math.atan(Me * (!0 === this.settings.letterbox ? Re.d : 1)),
          Ue = Math.atan(Me * this.xR.getAspectRatio()),
          Je = (be + (null !== (ie = this.settings.padding) && void 0 !== ie ? ie : 2)) / Math.sin(Math.min(Ke, Ue));
        ye[3] = this.withinDistances(Je)
      }
      withinDistances(ee) {
        return Math.min(this.furthestDistance, Math.max(this.closestDistance, ee))
      }
      pointAt(ee) {
        return ee === this.points.length && this.points.push([0, 0, 0]), this.points[ee]
      }
    }
    class pe {
      constructor(ee) {
        this.limits = ee, this.yawOffset = 0, this.pitchOffset = 0, this.idleMs = 0, this.pointedAt = null
      }
      continueFrom(ee) {
        this.limits && (this.yawOffset = ee.yawOffset, this.pitchOffset = ee.pitchOffset, this.idleMs = ee.idleMs)
      }
      update(ee, ie) {
        const He = this.limits;
        if (!He) return;
        const ye = Number.isFinite(ie.XV) ? ie.XV : 0,
          be = Number.isFinite(ie.zV) ? ie.zV : 0;
        if (ie.pointedAt) this.idleMs = 0, this.pointedAt = {
          heading: ie.pointedAt.heading,
          pitch: ie.pointedAt.pitch
        };
        else if (0 !== ye || 0 !== be) this.idleMs = 0, this.yawOffset += ye, this.pitchOffset += be;
        else {
          const ie = Math.max(0, this.idleMs + ee - 200) - Math.max(0, this.idleMs - 200);
          if (this.idleMs += ee, void 0 !== He.returnMs && ie > 0) {
            const ee = He.returnMs > 0 ? Math.exp(-3 * ie / He.returnMs) : 0;
            this.yawOffset *= ee, this.pitchOffset *= ee
          }
        }
        this.clampOffsets(He)
      }
      clampOffsets(ee) {
        if (ee.maxYaw >= 180) this.yawOffset = (0, be.z)(0, this.yawOffset);
        else {
          const ie = (0, oe.f)(ee.maxYaw);
          this.yawOffset = Math.max(-ie, Math.min(ie, this.yawOffset))
        }
        const ie = (0, oe.f)(ee.maxPitch);
        this.pitchOffset = Math.max(-ie, Math.min(ie, this.pitchOffset))
      }
      apply(ee, ie) {
        this.pointedAt && this.limits && (this.yawOffset = (0, be.z)(ee.heading, this.pointedAt.heading), this.pitchOffset = this.pointedAt.pitch - ee.pitch, this.pointedAt = null, this.clampOffsets(this.limits));
        const He = (0, be.i)(ee.pitch + this.pitchOffset);
        this.pitchOffset = He - ee.pitch, ie.heading = (0, be.x)(ee.heading + this.yawOffset), ie.pitch = He
      }
      unapply(ee, ie) {
        ie.heading = (0, be.x)(ee.heading - this.yawOffset), ie.pitch = (0, be.i)(ee.pitch - this.pitchOffset)
      }
    }
    const Xe = 1e-6;

    function ze(ee) {
      return Math.sqrt(ee[0] * ee[0] + ee[1] * ee[1] + ee[2] * ee[2])
    }

    function Be(ee, ie, He, ye, be) {
      const Me = be * be,
        Ke = Me * be;
      return (2 * Ke - 3 * Me + 1) * ee + (Ke - 2 * Me + be) * ie + (-2 * Ke + 3 * Me) * He + (Ke - Me) * ye
    }

    function Ee(ee, ie, He, ye, be) {
      const Me = be * be;
      return (6 * Me - 6 * be) * ee + (3 * Me - 4 * be + 1) * ie + (-6 * Me + 6 * be) * He + (3 * Me - 2 * be) * ye
    }

    function ge(ee, ie) {
      const He = ie[0] - ee[0],
        ye = ie[1] - ee[1],
        be = ie[2] - ee[2];
      return Math.sqrt(He * He + ye * ye + be * be)
    }

    function Oe(ee, ie, He, ye, be, Me) {
      for (let Ke = 0; Ke < 3; Ke++) Me[Ke] = be ? ee[Ke] * ye : He[Ke] - ie[Ke];
      return be && function(ee, ie) {
        const He = ze(ee);
        if (He > ie) {
          const ye = ie / He;
          ee[0] *= ye, ee[1] *= ye, ee[2] *= ye
        }
      }(Me, 3 * ge(ie, He)), Me
    }

    function de(ee, ie, He, ye) {
      for (let be = 0; be < 3; be++) ye[be] = 6 * (ie[be] - ee[be]) - 2 * He[be];
      if (ze(ye) < Xe)
        for (let be = 0; be < 3; be++) ye[be] = ie[be] - ee[be];
      return ye
    }

    function We(ee, ie) {
      return [2 * ie[0] - ee[0], 2 * ie[1] - ee[1], 2 * ie[2] - ee[2]]
    }

    function te(ee, ie, He, ye, be, Me, Ke) {
      if (!Me && !Ke) return 0;
      const Ue = Me ? ee : 2 * ie - He,
        Fe = Ke ? He : 2 * ie - ee,
        Je = Me ? ye : be,
        oe = Ke ? be : ye,
        Re = (ie - Ue) / Je,
        ke = (Fe - ie) / oe;
      if (Re * ke <= 0) return 0;
      const qe = (Fe - Ue) / (Je + oe),
        fe = 3 * Math.min(Math.abs(Re), Math.abs(ke));
      return Math.max(-fe, Math.min(fe, qe))
    }

    function Ze(ee, ie, He, ye, be, Me, Ke) {
      const {
        u: Ue,
        segmentMs: Fe
      } = ee;
      if (!ee.curved) return He + (ye - He) * Ue;
      return Be(He, te(ie, He, ye, ee.beforeMs, Fe, Me, !0) * Fe, ye, te(He, ye, be, Fe, ee.afterMs, !0, Ke) * Fe, Ue)
    }

    function we(ee) {
      return Math.abs(ee.pitch) >= be.d
    }
    class De {
      constructor(ee, ie, He, ye, be) {
        this.nodes = ee, this.prevNodes = He, this.nextNodes = ye, this.tangents = void 0, this.derivative = [0, 0, 0], this.beforeAngles = {
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
        }, this.tangents = ee.map(((ee, He) => this.nodeTangent(ie, be, He)))
      }
      sample(ee, ie, He) {
        const {
          index: ye,
          toIndex: Me,
          segmentMs: Ke,
          curved: Ue
        } = ee, Fe = this.fromAngles, Je = this.toAngles, oe = this.nodeAngles(ye, He.position, ie, Fe), Re = this.nodeAngles(Me, He.position, ie, Je);
        if (Ke > 0 && "aim" !== oe && "aim" !== Re && this.liveTangent(ee, Fe)) return He.heading = (0, be.x)(Fe.heading), void(He.pitch = Fe.pitch);
        if ("none" === oe && "none" === Re) return;
        !Ue && Ke > 0 && ("tangent" === oe && this.liveTangent(ee, Fe), "tangent" === Re && this.liveTangent(ee, Je)), "none" === oe ? (0, be.k)(Je, Fe) : "none" === Re && (0, be.k)(Fe, Je);
        const ke = Ue && ee.beforeIndex >= 0 && "none" !== this.nodeAngles(ee.beforeIndex, He.position, ie, this.beforeAngles),
          qe = Ue && ee.afterIndex >= 0 && "none" !== this.nodeAngles(ee.afterIndex, He.position, ie, this.afterAngles),
          fe = (0, be.B)(Fe.heading, Je.heading),
          Te = Ze(ee, ke ? (0, be.B)(Fe.heading, this.beforeAngles.heading) : 0, Fe.heading, fe, qe ? (0, be.B)(fe, this.afterAngles.heading) : 0, ke, qe);
        He.heading = (0, be.x)(Te), He.pitch = (0, be.i)(Ze(ee, this.beforeAngles.pitch, Fe.pitch, Je.pitch, this.afterAngles.pitch, ke, qe))
      }
      nodeAngles(ee, ie, He, ye) {
        const be = this.rawNodeAngles(ee, ie, He, ye);
        return "none" !== be && we(ye) && !this.borrowHeading(this.prevNodes[ee], ie, He, ye) && this.borrowHeading(this.nextNodes[ee], ie, He, ye), be
      }
      borrowHeading(ee, ie, He, ye) {
        const be = this.borrowedAngles;
        return !(ee < 0 || "none" === this.rawNodeAngles(ee, ie, He, be) || we(be)) && (ye.heading = be.heading, !0)
      }
      rawNodeAngles(ee, ie, He, ye) {
        const Me = this.nodes[ee].keyframe;
        if (Me.lookDirection) return (0, be.o)(Me.lookDirection, ye), "aim";
        if (void 0 !== Me.lookAt) {
          const ee = He(Me.lookAt);
          if (ee) return (0, be.v)(ie, ee, ye), "aim"
        }
        const Ke = this.tangents[ee];
        return Ke ? ((0, be.k)(Ke, ye), "tangent") : "none"
      }
      liveTangent(ee, ie) {
        const He = this.nodes[ee.index].position,
          ye = this.nodes[ee.toIndex].position,
          Me = this.derivative;
        for (let be = 0; be < 3; be++) Me[be] = Ee(He[be], ee.fromTangent[be], ye[be], ee.toTangent[be], ee.u);
        return ze(Me) > 1e-9 ? ((0, be.o)(Me, ie), !0) : !(ge(He, ye) < Xe) && ((0, be.o)(de(He, ye, ee.u < .5 ? ee.toTangent : ee.fromTangent, Me), ie), !0)
      }
      nodeTangent(ee, ie, He) {
        var ye;
        const Me = ee[He];
        if (ze(Me) > 1e-9) return (0, be.o)(Me, {
          heading: 0,
          pitch: 0
        });
        const Ke = null !== (ye = this.restDirectionTo(He, He + 1, ee, ie)) && void 0 !== ye ? ye : this.restDirectionTo(He, He - 1, ee, ie);
        return Ke ? (0, be.o)(Ke, {
          heading: 0,
          pitch: 0
        }) : null
      }
      restDirectionTo(ee, ie, He, ye) {
        const be = this.nodes[ee],
          Me = this.nodes[ie];
        if (!Me || ge(be.position, Me.position) < Xe) return null;
        const [Ke, Ue] = ie > ee ? [be, Me] : [Me, be], Fe = Oe(He[ie], Ke.position, Ue.position, Ue.timeMs - Ke.timeMs, ye, [0, 0, 0]);
        return de(Ke.position, Ue.position, Fe, [0, 0, 0])
      }
    }

    function Pe(ee, ie) {
      const He = ee.lookDirection || ie.lookDirection ? function(ee, ie) {
        if (!ee || !ie) return ee === ie;
        const He = ze(ee),
          ye = ze(ie);
        return Math.hypot(ee[0] / He - ie[0] / ye, ee[1] / He - ie[1] / ye, ee[2] / He - ie[2] / ye) < Xe
      }(ee.lookDirection, ie.lookDirection) : (ye = ee.lookAt, be = ie.lookAt, "object" !== typeof ye || "object" !== typeof be ? ye === be : ge(ye, be) < Xe);
      var ye, be;
      return ge(ee.position, ie.position) < Xe && ee.fov === ie.fov && He
    }
    class Ae {
      constructor(ee, ie, He) {
        if (this.smooth = ie, this.nodes = void 0, this.velocities = void 0, this.prevNodes = void 0, this.nextNodes = void 0, this.prevGaps = void 0, this.nextGaps = void 0, this.loopMs = void 0, this.aim = void 0, this.segment = {
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
          }, 0 === ee.length) throw new Error("A camera path needs at least one keyframe");
        for (let Me = 1; Me < ee.length; Me++)
          if (!(ee[Me].timeMs > ee[Me - 1].timeMs)) throw new Error("Camera path keyframe times must strictly increase");
        this.nodes = ee.map((ee => {
          var ie;
          return {
            timeMs: ee.timeMs,
            position: [...ee.position],
            keyframe: ee,
            easing: (0, Me.o)(null !== (ie = ee.easing) && void 0 !== ie ? ie : "linear")
          }
        }));
        const ye = this.nodes[0],
          be = this.nodes[this.nodes.length - 1],
          Ke = He && this.nodes.length > 1;
        Ke && !Pe(ye.keyframe, be.keyframe) && this.nodes.push({
          ...ye,
          timeMs: be.timeMs + (be.timeMs - ye.timeMs) / (this.nodes.length - 1)
        }), this.loopMs = Ke ? this.nodes[this.nodes.length - 1].timeMs - ye.timeMs : 0, this.prevNodes = this.nodes.map(((ee, ie) => this.neighbour(ie, -1))), this.nextNodes = this.nodes.map(((ee, ie) => this.neighbour(ie, 1))), this.prevGaps = this.prevNodes.map(((ee, ie) => ee >= 0 ? this.gapMs(ie, -1) : 0)), this.nextGaps = this.nextNodes.map(((ee, ie) => ee >= 0 ? this.gapMs(ie, 1) : 0)), this.velocities = this.nodes.map(((ee, ie) => {
          const He = this.prevNodes[ie],
            ye = this.nextNodes[ie];
          return function(ee, ie, He, ye, be, Me) {
            if (Me[0] = 0, Me[1] = 0, Me[2] = 0, !ee && !He) return Me;
            const Ke = null !== ee && void 0 !== ee ? ee : We(null !== He && void 0 !== He ? He : ie, ie),
              Ue = null !== He && void 0 !== He ? He : We(null !== ee && void 0 !== ee ? ee : ie, ie),
              Fe = ee ? ye : be,
              Je = He ? be : ye,
              oe = ge(Ke, ie),
              Re = ge(ie, Ue);
            if (oe < Xe || Re < Xe) return Me;
            const ke = Math.sqrt(oe),
              qe = Math.sqrt(Re),
              fe = (ke + qe) / (Fe + Je);
            for (let Te = 0; Te < 3; Te++) {
              const ee = (ie[Te] - Ke[Te]) / ke - (Ue[Te] - Ke[Te]) / (ke + qe) + (Ue[Te] - ie[Te]) / qe;
              Me[Te] = ee * fe
            }
            return Me
          }(He >= 0 ? this.nodes[He].position : null, ee.position, ye >= 0 ? this.nodes[ye].position : null, this.prevGaps[ie], this.nextGaps[ie], [0, 0, 0])
        })), this.aim = new De(this.nodes, this.velocities, this.prevNodes, this.nextNodes, ie)
      }
      sample(ee, ie, He, ye) {
        const be = this.findSegment(this.pathTime(ee));
        this.samplePosition(be, ye.position), this.aim.sample(be, ie, ye);
        const {
          beforeIndex: Me,
          afterIndex: Ke
        } = be;
        ye.fov = Ze(be, Me >= 0 ? this.fovAt(Me, He) : 0, this.fovAt(be.index, He), this.fovAt(be.toIndex, He), Ke >= 0 ? this.fovAt(Ke, He) : 0, Me >= 0, Ke >= 0)
      }
      pathTime(ee) {
        const ie = this.nodes[0].timeMs;
        if (this.loopMs <= 0 || ee <= ie) return ee;
        const He = ee - ie;
        return ie + He - this.loopMs * Math.floor(He / this.loopMs)
      }
      findSegment(ee) {
        const ie = this.nodes,
          He = this.segment;
        let ye = He.index;
        for (ee < ie[ye].timeMs && (ye = 0); ye < ie.length - 2 && ie[ye + 1].timeMs <= ee;) ye++;
        const be = Math.min(ye + 1, ie.length - 1),
          Ke = ie[be].timeMs - ie[ye].timeMs;
        return He.index = ye, He.toIndex = be, He.segmentMs = Ke, He.u = Ke > 0 ? (0, Me.n)((ee - ie[ye].timeMs) / Ke, ie[ye].easing) : 1, He.curved = this.smooth && Ke > 0, He.beforeIndex = this.prevNodes[ye], He.afterIndex = this.nextNodes[be], He.beforeMs = this.prevGaps[ye], He.afterMs = this.nextGaps[be], He
      }
      samplePosition(ee, ie) {
        const {
          fromTangent: He,
          toTangent: ye,
          curved: be
        } = ee, Me = this.nodes[ee.index].position, Ke = this.nodes[ee.toIndex].position;
        Oe(this.velocities[ee.index], Me, Ke, ee.segmentMs, be, He), Oe(this.velocities[ee.toIndex], Me, Ke, ee.segmentMs, be, ye);
        const Ue = ee.u;
        for (let Fe = 0; Fe < 3; Fe++) ie[Fe] = be ? Be(Me[Fe], He[Fe], Ke[Fe], ye[Fe], Ue) : Me[Fe] + (Ke[Fe] - Me[Fe]) * Ue
      }
      fovAt(ee, ie) {
        var He;
        return null !== (He = this.nodes[ee].keyframe.fov) && void 0 !== He ? He : ie
      }
      neighbour(ee, ie) {
        const He = this.nodes.length - 1,
          ye = ee + ie;
        return ye >= 0 && ye <= He ? ye : this.loopMs <= 0 || He < 2 ? -1 : ye < 0 ? He - 1 : 1
      }
      gapMs(ee, ie) {
        const He = this.nodes.length - 1;
        if (1 === ie) {
          const ie = ee === He ? 0 : ee;
          return this.nodes[ie + 1].timeMs - this.nodes[ie].timeMs
        }
        const ye = 0 === ee ? He : ee;
        return this.nodes[ye].timeMs - this.nodes[ye - 1].timeMs
      }
    }

    function Ye(ee, ie, He) {
      return null !== He && Number.isFinite(He) ? (ee.set(ie, He), He) : ee.get(ie)
    }
    class Ve {
      constructor(ee) {
        this.xR = ee, this.lastFeet = new Map, this.lastAimPoints = new Map, this.lastHeadings = new Map, this.lastPitches = new Map, this.lastLookHeadings = new Map, this.readFeet = void 0, this.readAimPoint = void 0, this.readFeet = ie => ee.getEntityPosition(ie), this.readAimPoint = ie => ee.getEntityAimPoint(ie)
      }
      aimPoint(ee) {
        return "string" !== typeof ee ? (0, Fe.r)(ee, 3) ? ee : null : this.resolve(ee, this.readAimPoint, this.lastAimPoints)
      }
      currentAimPoint(ee) {
        const ie = "string" === typeof ee ? this.xR.getEntityAimPoint(ee) : ee;
        return ie && (0, Fe.r)(ie, 3) ? ie : null
      }
      feetPosition(ee) {
        return this.resolve(ee, this.readFeet, this.lastFeet)
      }
      heading(ee) {
        const ie = Ye(this.lastHeadings, ee, this.xR.getEntityHeading(ee));
        return void 0 !== ie ? ie : ee === this.xR.localPlayerId ? 0 : this.heading(this.xR.localPlayerId)
      }
      pitch(ee) {
        var ie;
        return null !== (ie = Ye(this.lastPitches, ee, this.xR.getEntityPitch(ee))) && void 0 !== ie ? ie : 0
      }
      lookHeading(ee) {
        var ie;
        return null !== (ie = Ye(this.lastLookHeadings, ee, this.xR.getEntityLookHeading(ee))) && void 0 !== ie ? ie : this.heading(ee)
      }
      resolve(ee, ie, He) {
        const ye = ie(ee);
        let be = He.get(ee);
        return ye && (0, Fe.r)(ye, 3) ? (be || (be = [0, 0, 0], He.set(ee, be)), be[0] = ye[0], be[1] = ye[1], be[2] = ye[2], be) : be || (ee === this.xR.localPlayerId ? null : this.resolve(this.xR.localPlayerId, ie, He))
      }
    }

    function ae(ee) {
      return {
        heading: ee.heading,
        pitch: ee.pitch
      }
    }

    function ce(ee, ie) {
      Number.isFinite(ee.heading) && Number.isFinite(ee.pitch) || (0, be.k)(ie, ee)
    }

    function xe(ee, ie, He, ye, Me) {
      if (ie) return void(0, be.o)(ie, Me);
      const Ke = ye.aimPoint(He);
      Ke && (0, be.v)(ee, Ke, Me)
    }
    class Le {
      constructor(ee, ie, He, ye) {
        this.settings = ee, this.xR = ie, this.targets = He, this.base = void 0, this.base = ae(ye)
      }
      update(ee, ie, He) {
        var ye;
        const be = this.settings;
        (0, Fe.j)(be.position, He.position), xe(be.position, be.lookDirection, null !== (ye = be.lookAt) && void 0 !== ye ? ye : this.xR.localPlayerId, this.targets, this.base), ie.apply(this.base, He), He.fov = qe(be, this.xR)
      }
      continueFrom(ee) {
        ee instanceof Le && (0, be.k)(ee.base, this.base)
      }
      reset(ee) {
        ce(this.base, ee)
      }
    }
    class Ce {
      constructor(ee, ie, He, ye) {
        this.settings = ee, this.xR = ie, this.targets = He, this.base = void 0, this.goal = void 0, this.lastFeet = [0, 0, 0], this.foundFeet = !1, this.smoothed = [0, 0, 0], this.Op = [0, 0, 0], this.started = !1, this.distance = -1, this.toCamera = [0, 0, 0], this.aimOrigin = [0, 0, 0], this.eyeHeading = NaN, this.eyePitch = NaN, this.base = ae(ye), this.goal = [...ye.position]
      }
      update(ee, ie, He) {
        var ye, Me;
        const Ke = this.settings,
          Ue = null !== (ye = Ke.target) && void 0 !== ye ? ye : this.xR.localPlayerId,
          Je = this.targets.feetPosition(Ue),
          oe = "eye" === Ke.anchor;
        let Re = !1;
        var ke;
        Je && (Re = this.foundFeet && ge(this.lastFeet, Je) > 32 + .1 * ee, (0, Fe.j)(Je, this.lastFeet), this.foundFeet = !0, this.placeGoal(null !== (ke = oe ? this.targets.aimPoint(Ue) : null) && void 0 !== ke ? ke : Je, Ue));
        const Te = null !== (Me = Ke.smoothMs) && void 0 !== Me ? Me : 0;
        !this.started || Te < 1 || Re ? ((0, Fe.j)(this.goal, this.smoothed), this.Op.fill(0), this.started = !0) : fe(this.smoothed, this.Op, this.goal, Te, ee), Re && (this.distance = -1), (0, Fe.j)(this.smoothed, He.position);
        const pe = !0 === Ke.avoidTerrain ? this.pullIn(Ue, ee, He) : 1;
        let Xe = this.goal;
        if ("target" === Ke.offsetSpace) Xe = He.position;
        else if (pe < 1) {
          Xe = this.aimOrigin;
          for (let ee = 0; ee < 3; ee++) Xe[ee] = He.position[ee] + (this.goal[ee] - this.smoothed[ee]) * pe
        }
        if (oe && !Ke.lookDirection && void 0 === Ke.lookAt) {
          const ie = this.targets.lookHeading(Ue),
            He = this.targets.pitch(Ue),
            ye = 1 - Math.exp(-ee / 50),
            Me = (0, be.x)(this.eyeHeading + (0, be.z)(this.eyeHeading, ie) * ye),
            Ke = this.eyePitch + (He - this.eyePitch) * ye,
            Fe = Ue !== this.xR.localPlayerId && Number.isFinite(Me) && Number.isFinite(Ke) && !Re;
          this.eyeHeading = Fe ? Me : (0, be.x)(ie), this.eyePitch = Fe ? Ke : He, this.base.heading = this.eyeHeading, this.base.pitch = this.eyePitch
        } else {
          var ze;
          this.eyeHeading = NaN, this.eyePitch = NaN, xe(Xe, Ke.lookDirection, null !== (ze = Ke.lookAt) && void 0 !== ze ? ze : Ue, this.targets, this.base)
        }
        ie.apply(this.base, He), He.fov = qe(Ke, this.xR)
      }
      continueFrom(ee) {
        ee instanceof Ce && (0, ye.q)(ee.settings.target, this.settings.target) && ((0, be.k)(ee.base, this.base), (0, Fe.j)(ee.goal, this.goal), (0, Fe.j)(ee.lastFeet, this.lastFeet), this.foundFeet = ee.foundFeet, (0, Fe.j)(ee.smoothed, this.smoothed), (0, Fe.j)(ee.Op, this.Op), this.started = ee.started, this.eyeHeading = ee.eyeHeading, this.eyePitch = ee.eyePitch, !0 === ee.settings.avoidTerrain && (this.distance = ee.distance))
      }
      reset(ee) {
        ce(this.base, ee), this.Op.fill(0), this.started = !1, this.distance = -1, this.eyeHeading = NaN, this.eyePitch = NaN
      }
      pullIn(ee, ie, He) {
        const ye = this.targets.aimPoint(ee);
        if (!ye) return 1;
        const be = He.position,
          Me = ge(ye, be);
        if (!(Me > 0)) return 1;
        const Ke = this.toCamera;
        for (let Fe = 0; Fe < 3; Fe++) Ke[Fe] = (be[Fe] - ye[Fe]) / Me;
        const Ue = function(ee, ie, He) {
          return ee < 0 || ie < ee ? ie : ie + (ee - ie) * Math.exp(-He / 150)
        }(this.distance, function(ee, ie, He, ye) {
          const be = ee.raycastTerrain(ie, He, ye);
          return null !== be && Number.isFinite(be) ? Math.min(ye, Math.max(0, be - .2)) : ye
        }(this.xR, ye, Ke, Me), ie);
        if (Me - Ue < .001) return this.distance = -1, 1;
        this.distance = Ue;
        for (let Fe = 0; Fe < 3; Fe++) be[Fe] = ye[Fe] + Ke[Fe] * Ue;
        return Ue / Me
      }
      placeGoal(ee, ie) {
        const He = this.settings.offset;
        let ye = He[0],
          be = He[2];
        if ("target" === this.settings.offsetSpace) {
          const ee = this.targets.heading(ie),
            Me = Math.cos(ee),
            Ke = Math.sin(ee);
          ye = He[0] * Me + He[2] * Ke, be = -He[0] * Ke + He[2] * Me
        }
        this.goal[0] = ee[0] + ye, this.goal[1] = ee[1] + He[1], this.goal[2] = ee[2] + be
      }
    }
    class ve {
      constructor(ee, ie, He, ye) {
        var be, Me;
        this.settings = ee, this.xR = ie, this.sampler = void 0, this.base = void 0, this.resolveTarget = void 0, this.elapsedMs = 0, this.sampler = ee.keyframes.length > 0 ? new Ae(ee.keyframes, null === (be = ee.smooth) || void 0 === be || be, null !== (Me = ee.loop) && void 0 !== Me && Me) : null, this.base = (0, Fe.i)(ye, (0, Fe.k)()), this.resolveTarget = ee => He.aimPoint(ee)
      }
      update(ee, ie, He) {
        this.elapsedMs += ee;
        const ye = qe(this.settings, this.xR);
        this.sampler ? this.sampler.sample(this.elapsedMs, this.resolveTarget, ye, this.base) : this.base.fov = ye, (0, Fe.j)(this.base.position, He.position), He.fov = this.base.fov, ie.apply(this.base, He)
      }
      continueFrom(ee) {
        ee instanceof ve && (0, ye.q)(ee.settings.keyframes, this.settings.keyframes) && (this.elapsedMs = ee.elapsedMs, (0, Fe.i)(ee.base, this.base))
      }
      reset(ee) {
        ce(this.base, ee), Number.isFinite(this.elapsedMs) || (this.elapsedMs = 0)
      }
    }

    function ue(ee, ie) {
      return (0, ye.s)(ee, ie)
    }
    class me {
      constructor(ee, ie, He) {
        var ye;
        this.settings = ee, this.xR = ie, this.pose = void 0, this.lastGoodPose = void 0, this.look = void 0, this.targets = void 0, this.mode = void 0, this.warnedNonFinite = !1;
        const be = null !== He && He.settings.mode === ee.mode,
          Me = be ? He.pose : ie.getDefaultPose();
        this.pose = (0, Fe.i)(Me, (0, Fe.k)()), this.lastGoodPose = (0, Fe.i)(be ? He.lastGoodPose : Me, (0, Fe.k)()), this.look = new pe(ee.playerLook), this.targets = null !== (ye = null === He || void 0 === He ? void 0 : He.targets) && void 0 !== ye ? ye : new Ve(ie);
        const Ke = (0, Fe.i)(Me, (0, Fe.k)());
        be && He.look.unapply(Ke, Ke), this.mode = function(ee, ie, He, ye) {
          switch (ee.mode) {
            case "fixed":
              return new Le(ee, ie, He, ye);
            case "follow":
              return new Ce(ee, ie, He, ye);
            case "path":
              return new ve(ee, ie, He, ye);
            case "frame":
              return new Te(ee, ie, He, ye)
          }
        }(ee, ie, this.targets, Ke), be && (this.look.continueFrom(He.look), this.mode.continueFrom(He.mode))
      }
      update(ee, ie) {
        return this.look.update(ee, ie), this.mode.update(ee, this.look, this.pose), (0, Fe.o)(this.pose) ? (0, Fe.i)(this.pose, this.lastGoodPose) : (this.warnedNonFinite || (console.warn("Scripted camera produced a non-finite pose; holding the last good one"), this.warnedNonFinite = !0), (0, Fe.i)(this.lastGoodPose, this.pose), this.mode.reset((0, Fe.o)(this.lastGoodPose) ? this.lastGoodPose : this.xR.getDefaultPose())), this.pose
      }
    }

    function le(ee) {
      return [0, 0, ee[2], ee[3]]
    }
    class Se {
      constructor(ee) {
        this.xR = ee, this.settings = {
          mode: "default"
        }, this.pending = null, this.fade = new Ue, this.shot = null, this.blend = null, this.mixed = (0, Fe.k)(), this.output = (0, Fe.k)(), this.hasOutput = !1, this.loadingPositions = [], this.loadingSlots = Array.from({
          length: 3
        }, (() => [0, 0, 0]))
      }
      setSettings(ee) {
        const ie = (0, Je.e)(ee);
        if ((0, ye.q)(ie, this.pending ? this.pending.settings : this.settings)) return;
        const He = ue(this.settings, ie);
        if (void 0 !== ie.transition && !He) return this.pending = {
          settings: ie,
          shot: "default" === ie.mode ? null : new me(ie, this.xR, null)
        }, void this.fade.fadeOut(ie.transition);
        const be = null !== this.pending;
        this.pending = null, !be && He || this.fade.fadeIn(ye.m.minTransitionFadeMs), this.show(ie, !1)
      }
      show(ee, ie) {
        var He, be;
        if ((0, ye.q)(ee, this.settings)) return;
        const Ke = !ie && ue(this.settings, ee);
        this.settings = ee;
        const Ue = null !== this.blend && this.blend.elapsedMs > 0,
          Je = (0, Fe.i)(this.hasOutput ? this.output : this.xR.getDefaultPose(), (0, Fe.k)());
        if (this.shot = "default" === ee.mode ? null : new me(ee, this.xR, ie ? null : this.shot), Ke) return;
        const oe = ie || !this.shot && !this.hasOutput ? 0 : null !== (He = ee.blendInMs) && void 0 !== He ? He : 0;
        if (oe <= 0) return void(this.blend = null);
        const Re = (0, Me.o)(null !== (be = ee.blendEasing) && void 0 !== be ? be : "easeInOut");
        this.blend = {
          from: Je,
          fromScripted: this.hasOutput,
          headingDelta: NaN,
          elapsedMs: 0,
          durationMs: oe,
          easing: Ue ? le(Re) : Re
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
      update(ee, ie) {
        const He = Number.isFinite(ee) && ee > 0 ? ee : 0;
        if (this.fade.advance(He) && null !== this.pending) {
          const {
            settings: ee
          } = this.pending;
          this.pending = null, this.show(ee, !0)
        }
        this.loadingPositions.length = 0;
        const ye = this.pending;
        if (null !== ye && void 0 !== ye && ye.shot) {
          const ee = "path" === ye.settings.mode ? 0 : He;
          this.noteLoadingPosition(ye.shot.update(ee, Fe.e).position)
        }
        if (!this.isActive()) return this.hasOutput = !1, null;
        const Ke = this.shot ? this.shot.update(He, ie) : this.xR.getDefaultPose();
        this.shot && this.noteLoadingPosition(Ke.position);
        const Ue = this.blend;
        if (!Ue) return this.writeOutput(Ke);
        Ue.elapsedMs += He;
        const Je = Math.min(1, Ue.elapsedMs / Ue.durationMs);
        if (Ue.headingDelta = Number.isFinite(Ue.headingDelta) ? (0, be.B)(Ue.headingDelta, Ke.heading - Ue.from.heading) : (0, be.z)(Ue.from.heading, Ke.heading), (0, Fe.s)(Ue.from, Ke, Ue.headingDelta, (0, Me.n)(Je, Ue.easing), this.mixed), Je >= 1) {
          if (this.blend = null, !this.shot) return this.hasOutput = !1, null
        } else Ue.fromScripted && this.noteLoadingPosition(Ue.from.position);
        return this.writeOutput(this.mixed)
      }
      noteLoadingPosition(ee) {
        if (ee.every(Number.isFinite)) {
          const ie = this.loadingPositions;
          ie.push((0, Fe.j)(ee, this.loadingSlots[ie.length]))
        }
      }
      writeOutput(ee) {
        const ie = this.output;
        (0, Fe.o)(ee) ? (0, Fe.i)(ee, ie) : this.hasOutput || (0, Fe.i)(this.xR.getDefaultPose(), ie), ie.pitch = (0, be.i)(ie.pitch);
        const He = this.xR.getDefaultFov(),
          Me = Number.isFinite(He) && He > 0 && He < 180,
          Ke = Me ? Math.min(ye.m.minFov, He) : ye.m.minFov,
          Ue = Me ? Math.max(ye.m.maxFov, He) : ye.m.maxFov;
        return ie.fov = Number.isFinite(ie.fov) ? Math.min(Ue, Math.max(Ke, ie.fov)) : Ue, this.hasOutput = !0, ie
      }
    }
  },
  40005: (ee, ie, He) => {
    He.d(ie, {
      e: () => be,
      i: () => Ue,
      j: () => Ke,
      k: () => Me,
      o: () => Je,
      r: () => Fe,
      s: () => oe
    });
    var ye = He(40009);
    const be = {
      XV: 0,
      zV: 0
    };

    function Me() {
      return {
        position: [0, 0, 0],
        heading: 0,
        pitch: 0,
        fov: 0
      }
    }

    function Ke(ee, ie) {
      return ie[0] = ee[0], ie[1] = ee[1], ie[2] = ee[2], ie
    }

    function Ue(ee, ie) {
      return Ke(ee.position, ie.position), ie.heading = ee.heading, ie.pitch = ee.pitch, ie.fov = ee.fov, ie
    }

    function Fe(ee, ie) {
      return Array.isArray(ee) && ee.length === ie && ee.every(Number.isFinite)
    }

    function Je(ee) {
      return Fe(ee.position, 3) && Number.isFinite(ee.heading) && Number.isFinite(ee.pitch) && Number.isFinite(ee.fov)
    }

    function oe(ee, ie, He, be, Me) {
      for (let ye = 0; ye < 3; ye++) Me.position[ye] = ee.position[ye] + (ie.position[ye] - ee.position[ye]) * be;
      return Me.heading = (0, ye.x)(ee.heading + He * be), Me.pitch = ee.pitch + (ie.pitch - ee.pitch) * be, Me.fov = ee.fov + (ie.fov - ee.fov) * be, Me
    }
  },
  40037: (ee, ie, He) => {
    He.d(ie, {
      e: () => We,
      h: () => qe
    });
    var ye = He(40028),
      be = He(40005);
    const Me = ye.f,
      Ke = ye.o,
      Ue = ye.j;

    function Fe(ee, ie, He, ye) {
      return Number.isFinite(ee) ? Math.min(He, Math.max(ie, ee)) : ye
    }

    function Je(ee, ie, He) {
      return void 0 !== ee && Number.isFinite(ee) ? Math.min(He, Math.max(ie, ee)) : void 0
    }

    function oe(ee) {
      const ie = ye.m.maxCoordinate;
      return [Math.min(ie, Math.max(-ie, ee[0])), Math.min(ie, Math.max(-ie, ee[1])), Math.min(ie, Math.max(-ie, ee[2]))]
    }

    function Re(ee) {
      return "string" === typeof ee ? ee : (0, be.r)(ee, 3) ? oe(ee) : void 0
    }
    const ke = new RegExp(ye.p);

    function qe(ee) {
      return "string" === typeof ee && ke.test(ee)
    }

    function fe(ee) {
      const ie = [];
      if (!Array.isArray(ee)) return ie;
      for (const He of ee.slice(0, ye.m.maxFrameTargets)) {
        const ee = Re(He);
        void 0 === ee || "string" === typeof ee && !qe(ee) || ie.push(ee)
      }
      return ie
    }

    function Te(ee) {
      if (!(0, be.r)(ee, 3)) return;
      const ie = Math.max(Math.abs(ee[0]), Math.abs(ee[1]), Math.abs(ee[2])),
        He = Math.hypot(ee[0] / ie, ee[1] / ie, ee[2] / ie);
      return 0 === ie || ie * He < ye.m.minDirectionLength ? void 0 : [ee[0] / ie / He, ee[1] / ie / He, ee[2] / ie / He]
    }

    function pe(ee) {
      if (void 0 !== ee) return "string" === typeof ee ? Me.includes(ee) ? ee : void 0 : (0, be.r)(ee, 4) ? [Fe(ee[0], 0, 1, 0), Fe(ee[1], ye.m.minEasingY, ye.m.maxEasingY, 0), Fe(ee[2], 0, 1, 1), Fe(ee[3], ye.m.minEasingY, ye.m.maxEasingY, 1)] : "linear"
    }

    function Xe(ee) {
      if (ee) return {
        maxYaw: Fe(ee.maxYaw, 0, ye.m.maxPlayerLook, 0),
        maxPitch: Fe(ee.maxPitch, 0, ye.m.maxPlayerLook, 0),
        returnMs: Je(ee.returnMs, 0, ye.m.maxReturnMs)
      }
    }
    const ze = new RegExp(ye.c);

    function Be(ee) {
      var ie;
      if ("object" !== typeof ee || null === ee) return;
      const He = ye.m.maxTransitionMs,
        be = ye.m.minTransitionFadeMs;
      return {
        colour: "string" === typeof ee.colour && ze.test(ee.colour) ? ee.colour : ye.d,
        outMs: Fe(ee.outMs, be, He, be),
        holdMs: Fe(null !== (ie = ee.holdMs) && void 0 !== ie ? ie : 0, 0, He, 0),
        inMs: Fe(ee.inMs, be, He, be)
      }
    }

    function Ee(ee) {
      return !0 === ee || void 0
    }

    function ge(ee) {
      if ("object" !== typeof ee || null === ee) return !1;
      const ie = ee.lookAt;
      return Number.isFinite(ee.timeMs) && (0, be.r)(ee.position, 3) && (void 0 === ie || "string" === typeof ie || (0, be.r)(ie, 3))
    }

    function Oe(ee) {
      return {
        ...ee,
        timeMs: Fe(ee.timeMs, 0, ye.m.maxPathMs, 0),
        position: oe(ee.position),
        lookAt: Re(ee.lookAt),
        lookDirection: Te(ee.lookDirection),
        fov: Je(ee.fov, ye.m.minFov, ye.m.maxFov),
        easing: pe(ee.easing)
      }
    }

    function de(ee) {
      const ie = [];
      if (!Array.isArray(ee)) return ie;
      for (const He of ee.slice(0, ye.m.maxKeyframes)) {
        if (!ge(He)) continue;
        const ee = Oe(He);
        (0 === ie.length || ee.timeMs > ie[ie.length - 1].timeMs) && ie.push(ee)
      }
      return ie
    }

    function We(ee) {
      if ("object" !== typeof ee || null === ee) return {
        mode: "default"
      };
      const ie = {
          blendInMs: Je(ee.blendInMs, 0, ye.m.maxBlendInMs),
          blendEasing: pe(ee.blendEasing),
          transition: Be(ee.transition),
          letterbox: Ee(ee.letterbox),
          hideHud: Ee(ee.hideHud)
        },
        He = {
          mode: "default",
          ...ie
        };
      if ("default" === ee.mode || "fixed" === ee.mode && !(0, be.r)(ee.position, 3)) return He;
      const Me = {
        ...ie,
        fov: Je(ee.fov, ye.m.minFov, ye.m.maxFov),
        playerFacing: (ke = ee.playerFacing, Ke.includes(ke) ? ke : void 0),
        playerLook: Xe(ee.playerLook)
      };
      var ke, qe, ze;
      switch (ee.mode) {
        case "fixed":
          return {
            ...ee, ...Me, position: oe(ee.position), lookAt: Re(ee.lookAt), lookDirection: Te(ee.lookDirection)
          };
        case "follow":
          return {
            ...ee, ...Me, target: "string" === typeof ee.target ? ee.target : void 0, anchor: (ze = ee.anchor, Ue.includes(ze) ? ze : void 0), lookAt: Re(ee.lookAt), offset: (qe = ee.offset, Array.isArray(qe) ? [Fe(qe[0], -ye.m.maxOffset, ye.m.maxOffset, 0), Fe(qe[1], -ye.m.maxOffset, ye.m.maxOffset, 0), Fe(qe[2], -ye.m.maxOffset, ye.m.maxOffset, 0)] : [0, 0, 0]), lookDirection: Te(ee.lookDirection), smoothMs: Je(ee.smoothMs, 0, ye.m.maxSmoothMs)
          };
        case "path":
          return {
            ...ee, ...Me, keyframes: de(ee.keyframes)
          };
        case "frame":
          return {
            ...ee, ...Me, targets: fe(ee.targets), viewHeading: Je(ee.viewHeading, -ye.m.maxFrameHeading, ye.m.maxFrameHeading), viewElevation: Je(ee.viewElevation, 0, ye.m.maxFrameElevation), padding: Je(ee.padding, 0, ye.m.maxFrameDistance), closestDistance: Je(ee.closestDistance, 0, ye.m.maxFrameDistance), furthestDistance: Je(ee.furthestDistance, 0, ye.m.maxFrameDistance), smoothMs: Je(ee.smoothMs, 0, ye.m.maxSmoothMs)
          };
        default:
          return He
      }
    }
  },
  40073: (ee, ie, He) => {
    He.d(ie, {
      c: () => ye
    });
    const ye = {
      message: [{
        translationKey: "general:bunnyHoppingDisabled"
      }],
      timeoutLength: 2e3,
      type: "Error"
    }
  },
  39922: (ee, ie, He) => {
    function ye(ee, ie) {
      return ie.set(ee), ie
    }
    He.d(ie, {
      c: () => ye
    })
  },
  39919: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ke
    });
    var ye = He(37454),
      be = He.n(ye);
    const Me = [1, 1, 1];

    function Ke(ee) {
      if (!ee) return [...Me];
      try {
        const [ie, He, ye] = be()(ee).rgb().array();
        return [ie / 255, He / 255, ye / 255]
      } catch (ie) {
        return console.warn(`Invalid groundArrowPath colour "${ee}":`, ie), [...Me]
      }
    }
  },
  40065: (ee, ie, He) => {
    He.d(ie, {
      b: () => Ue,
      f: () => Je,
      g: () => Fe
    });
    var ye = He(295),
      be = He(3128);
    const Me = /\/textures\/skyBoxes\/(space_blue|space_lightblue|space_red_2|space_white)\/(_[np][xyz]\.jpg)$/,
      Ke = 512;

    function Ue(ee) {
      var ie;
      const He = Math.min(screen.width, screen.height) * (null !== (ie = (0, ye.c)()) && void 0 !== ie ? ie : (0, be.o)());
      return Math.max(window.innerHeight * (0, be.o)(), He) / (0, be.r)(ee)
    }

    function Fe(ee, ie, He) {
      return ie / (2 * Math.tan(He / 2)) > Ke ? ee : Je(ee)
    }

    function Je(ee) {
      return ee.map((ee => ee.replace(Me, "/textures/skyBoxes/$1/1024/$2")))
    }
  },
  39916: (ee, ie, He) => {
    He.d(ie, {
      c: () => be
    });
    var ye = He(186);

    function be(ee, ie, He, be, Me, Ke, Ue, Fe, Je, oe, Re) {
      const ke = ye.g.BR,
        qe = Me - He;
      let fe = qe * (Ke - be);
      oe.fill(0, 0, fe);
      for (let ye = Math.floor((Fe - 1) / ke);
        (ye + 1) * ke > Ue; ye--) {
        const Te = ye * ke;
        for (let pe = Math.floor(He / ke); pe * ke < Me; pe++) {
          const Xe = pe * ke,
            ze = Math.max(He - Xe, 0),
            Be = Math.min(Me - Xe, ke);
          for (let Me = Math.floor(be / ke); Me * ke < Ke; Me++) {
            const Ee = ee(pe, ye, Me);
            if (!Ee) continue;
            const ge = Me * ke,
              Oe = Math.max(be - ge, 0),
              de = Math.min(Ke - ge, ke),
              We = Ee.yf,
              te = Ee.Uq,
              Ze = te.data;
            for (let ee = Math.min(Fe - 1 - Te, ke - 1); ee >= Math.max(Ue - Te, 0); ee--) {
              const ye = We[ee],
                Me = ye === ie;
              if (Me || 0 !== Je[ye]) {
                for (let ie = ze; ie < Be; ie++)
                  for (let Ke = Oe; Ke < de; Ke++) {
                    const Ue = (ge + Ke - be) * qe + Xe + ie - He;
                    if (0 !== oe[Ue]) continue;
                    const Fe = Me ? Ze[te.index(ie, ee, Ke)] : ye;
                    0 !== Je[Fe] && (oe[Ue] = Fe, Re[Ue] = Te + ee, fe--)
                  }
                if (0 === fe) return
              }
            }
          }
        }
      }
    }
  },
  34679: (ee, ie, He) => {
    He.d(ie, {
      e: () => Me,
      g: () => Ue,
      j: () => Ke,
      m: () => be,
      n: () => ye
    });
    const ye = {
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
      be = "/textures/dayNight/sun.png",
      Me = "/textures/dayNight/moon.png",
      Ke = "/textures/dayNight/stars",
      Ue = ["_px.png", "_py.png", "_pz.png", "_nx.png", "_ny.png", "_nz.png"]
  },
  40028: (ee, ie, He) => {
    He.d(ie, {
      c: () => Re,
      d: () => ke,
      f: () => ye,
      j: () => be,
      m: () => Je,
      o: () => Me,
      p: () => oe,
      q: () => Fe,
      s: () => Ue
    });
    const ye = ["linear", "easeIn", "easeOut", "easeInOut"],
      be = ["feet", "eye"],
      Me = ["movement", "camera", "cursor"],
      Ke = ["targets", "playerFacing", "blendInMs", "blendEasing", "transition", "letterbox", "hideHud"];

    function Ue(ee, ie) {
      return Fe(ee, ie, Ke)
    }

    function Fe(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      if (ee === ie || Number.isNaN(ee) && Number.isNaN(ie)) return !0;
      if ("object" !== typeof ee || "object" !== typeof ie || null === ee || null === ie || Array.isArray(ee) !== Array.isArray(ie)) return !1;
      const ye = ee,
        be = ie;
      for (const Me of new Set([...Object.keys(ye), ...Object.keys(be)]))
        if (!He.includes(Me) && !Fe(ye[Me], be[Me])) return !1;
      return !0
    }
    const Je = {
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
      oe = "^-[1-9][0-9]*$",
      Re = "^#[0-9a-fA-F]{6}$",
      ke = "#000000"
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);