export const id = 192;
export const ids = [192];
export const modules = {
  40929: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => oQ
    });
    var LQ = wQ(53),
      qQ = wQ(2657);

    function oQ(QQ, FQ, wQ) {
      const oQ = (0, LQ.useRef)(null),
        {
          width: DQ,
          height: kQ
        } = (0, qQ.c)(QQ);
      (0, LQ.useEffect)((() => {
        const wQ = FQ(QQ.current);
        return oQ.current = wQ, () => {
          wQ.close(), oQ.current = null
        }
      }), [QQ, FQ]), (0, LQ.useEffect)((() => {
        DQ <= 0 || kQ <= 0 || oQ.current.resize(DQ, kQ)
      }), [DQ, kQ]), (0, LQ.useEffect)((() => {
        oQ.current.show(wQ)
      }), [wQ])
    }
  },
  40933: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => bQ,
      g: () => HQ,
      i: () => vQ
    });
    var LQ = wQ(36768),
      qQ = wQ(38164);

    function oQ(QQ, FQ) {
      let [wQ, LQ, qQ] = QQ;
      return [0, .5, 1].map((QQ => ({
        timeFraction: QQ,
        rotation: {
          MQ: "catmull-rom-spline",
          point: [wQ, LQ, qQ + (.5 === QQ ? FQ : 0)]
        }
      })))
    }

    function DQ(QQ, FQ, wQ) {
      return {
        YQ: 3200,
        loop: !0,
        AQ: {
          Root: {
            timeline: [0, .5, 1].map((QQ => ({
              timeFraction: QQ,
              position: {
                MQ: "catmull-rom-spline",
                point: [0, .5 === QQ ? .18 : 0, 0]
              }
            })))
          },
          HeadMesh: {
            timeline: [0, .25, .75, 1].map((QQ => ({
              timeFraction: QQ,
              rotation: {
                MQ: "catmull-rom-spline",
                point: [0, .25 === QQ ? .12 : .75 === QQ ? -.12 : 0, 0]
              }
            })))
          },
          ArmLeftMesh: {
            timeline: oQ(QQ, wQ)
          },
          ArmRightMesh: {
            timeline: oQ(FQ, -wQ)
          }
        }
      }
    }
    const kQ = DQ([0, 0, 0], [0, 0, 0], .07),
      vQ = (0, qQ.d)((0, LQ.h)(kQ), "mobIdle"),
      mQ = DQ([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
      uQ = DQ([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
      HQ = (0, qQ.d)((0, LQ.h)(mQ), "gunReady"),
      bQ = (0, qQ.d)((0, LQ.h)(uQ), "gunAimed")
  },
  38164: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => qQ,
      f: () => oQ
    });
    const LQ = new WeakMap;

    function qQ(QQ, FQ) {
      return LQ.set(QQ, FQ), QQ
    }

    function oQ(QQ) {
      var FQ;
      return null !== (FQ = LQ.get(QQ)) && void 0 !== FQ ? FQ : null
    }
  },
  9142: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => DQ,
      d: () => qQ,
      g: () => uQ
    });
    var LQ = wQ(1560);

    function qQ(QQ) {
      var FQ;
      return {
        ...DQ.store,
        yaw: DQ.store.yaw + (null !== (FQ = LQ.e[QQ].previewYaw) && void 0 !== FQ ? FQ : 0)
      }
    }
    const oQ = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      DQ = {
        player: oQ,
        store: {
          ...oQ,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function kQ(QQ, FQ) {
      QQ instanceof Promise ? QQ.then(FQ).catch((QQ => {
        console.error("Couldn't open the preview", QQ)
      })) : FQ(QQ)
    }
    class vQ {
      constructor(QQ) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, kQ(QQ, (QQ => {
          this.closed ? QQ.close() : (this.opened = QQ, null !== this.size && QQ.resize(this.size.width, this.size.height), null !== this.view && QQ.show(this.view))
        }))
      }
      show(QQ) {
        var FQ;
        this.view = QQ, null === (FQ = this.opened) || void 0 === FQ || FQ.show(QQ)
      }
      resize(QQ, FQ) {
        var wQ;
        this.size = {
          width: QQ,
          height: FQ
        }, null === (wQ = this.opened) || void 0 === wQ || wQ.resize(QQ, FQ)
      }
      close() {
        var QQ;
        this.closed = !0, null === (QQ = this.opened) || void 0 === QQ || QQ.close(), this.opened = null
      }
    }
    class mQ {
      constructor(QQ) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(QQ).then((QQ => QQ.ready)), kQ(QQ, (QQ => {
          this.closed ? QQ.close() : (this.opened = QQ, null !== this.size && QQ.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var QQ, FQ;
        return null !== (QQ = null === (FQ = this.opened) || void 0 === FQ ? void 0 : FQ.isReady()) && void 0 !== QQ && QQ
      }
      setCosmetic(QQ, FQ) {
        var wQ;
        null === (wQ = this.opened) || void 0 === wQ || wQ.setCosmetic(QQ, FQ)
      }
      playEmote(QQ) {
        var FQ;
        null === (FQ = this.opened) || void 0 === FQ || FQ.playEmote(QQ)
      }
      setOrbit(QQ) {
        var FQ;
        null === (FQ = this.opened) || void 0 === FQ || FQ.setOrbit(QQ)
      }
      resetCamera() {
        var QQ;
        null === (QQ = this.opened) || void 0 === QQ || QQ.resetCamera()
      }
      async untilDrawn(QQ) {
        var FQ;
        await this.ready, await (null === (FQ = this.opened) || void 0 === FQ ? void 0 : FQ.untilDrawn(QQ))
      }
      resize(QQ, FQ) {
        var wQ;
        this.size = {
          width: QQ,
          height: FQ
        }, null === (wQ = this.opened) || void 0 === wQ || wQ.resize(QQ, FQ)
      }
      close() {
        var QQ;
        this.closed = !0, null === (QQ = this.opened) || void 0 === QQ || QQ.close(), this.opened = null
      }
    }
    const uQ = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(QQ) {
        this.host = QQ
      }
      setDefaultHost(QQ) {
        this.makeDefault = QQ
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(QQ) {
        return new vQ(this.current().openMob(QQ))
      }
      openPet(QQ) {
        return new vQ(this.current().openPet(QQ))
      }
      openMobLineup(QQ) {
        return new vQ(this.current().openMobLineup(QQ))
      }
      openCharacter(QQ, FQ) {
        return new mQ(this.current().openCharacter(QQ, FQ))
      }
    }
  },
  9137: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => LQ.b,
      c: () => LQ.d,
      d: () => LQ.g
    });
    var LQ = wQ(9142);
    class qQ {
      constructor(QQ) {
        this.load = QQ, this.loaded = null, this.loading = null
      }
      run(QQ) {
        return null !== this.loaded ? QQ(this.loaded) : (this.loading ??= this.load().then((QQ => (this.loaded = QQ, QQ)), (QQ => {
          throw this.loading = null, QQ
        })), this.loading.then(QQ))
      }
    }
    class oQ {
      constructor() {
        this.mobScene = new qQ((() => Promise.all([wQ.e(70), wQ.e(227), wQ.e(226), wQ.e(246), wQ.e(95), wQ.e(247), wQ.e(73), wQ.e(72), wQ.e(244), wQ.e(71), wQ.e(254), wQ.e(248), wQ.e(253), wQ.e(251), wQ.e(243), wQ.e(265), wQ.e(223), wQ.e(238), wQ.e(249), wQ.e(252), wQ.e(75), wQ.e(197), wQ.e(217), wQ.e(94), wQ.e(220), wQ.e(235), wQ.e(114), wQ.e(236), wQ.e(74), wQ.e(113), wQ.e(155)]).then((() => wQ(40492))))), this.characterScene = new qQ((() => Promise.all([wQ.e(70), wQ.e(227), wQ.e(226), wQ.e(246), wQ.e(95), wQ.e(247), wQ.e(73), wQ.e(72), wQ.e(244), wQ.e(71), wQ.e(254), wQ.e(248), wQ.e(253), wQ.e(251), wQ.e(243), wQ.e(265), wQ.e(223), wQ.e(238), wQ.e(249), wQ.e(252), wQ.e(75), wQ.e(197), wQ.e(217), wQ.e(94), wQ.e(220), wQ.e(235), wQ.e(114), wQ.e(236), wQ.e(74), wQ.e(113), wQ.e(154)]).then((() => wQ(40583)))))
      }
      openMob(QQ) {
        return this.mobScene.run((FQ => FQ.openMobPreview(QQ)))
      }
      openPet(QQ) {
        return this.mobScene.run((FQ => FQ.openPetPreview(QQ)))
      }
      openMobLineup(QQ) {
        return this.mobScene.run((FQ => FQ.openMobLineupPreview(QQ)))
      }
      openCharacter(QQ, FQ) {
        return this.characterScene.run((wQ => wQ.openCharacterPreview(QQ, FQ)))
      }
    }
    LQ.g.setDefaultHost((() => new oQ))
  },
  41155: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      FrontlineMvpLineup: () => HQ
    });
    var LQ = wQ(53),
      qQ = wQ(1070),
      oQ = wQ.n(qQ),
      DQ = wQ(9137),
      kQ = wQ(40933),
      vQ = wQ(40929),
      mQ = wQ(1107);

    function uQ(QQ) {
      return DQ.d.openMobLineup(QQ)
    }
    const HQ = (0, LQ.memo)((function(QQ) {
      let {
        players: FQ,
        className: wQ
      } = QQ;
      const qQ = (0, LQ.useRef)(null),
        DQ = (0, LQ.useMemo)((() => FQ.map((QQ => {
          let {
            cosmetics: FQ,
            size: wQ,
            heldGun: LQ
          } = QQ;
          return {
            cosmetics: FQ,
            size: wQ,
            nC: LQ.name,
            animation: LQ.aimed ? kQ.e : kQ.g
          }
        }))), [FQ]),
        HQ = function(QQ) {
          const [FQ, wQ] = (0, LQ.useState)([]);
          return (0, LQ.useEffect)((() => {
            wQ(QQ.map((() => !1)));
            const FQ = QQ.map(((QQ, FQ) => {
              let {
                showAfterMs: LQ
              } = QQ;
              return window.setTimeout((() => {
                wQ((QQ => QQ.map(((QQ, wQ) => QQ || wQ === FQ))))
              }), LQ)
            }));
            return () => {
              for (const QQ of FQ) window.clearTimeout(QQ)
            }
          }), [QQ]), FQ
        }(FQ),
        bQ = (0, LQ.useMemo)((() => ({
          figures: DQ,
          shown: HQ
        })), [DQ, HQ]);
      return (0, vQ.d)(qQ, uQ, bQ), (0, mQ.jsx)("div", {
        className: oQ()("MobPreview", wQ),
        ref: qQ
      })
    }))
  },
  36768: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => kQ,
      h: () => DQ
    });
    var LQ = wQ(36753),
      qQ = wQ(317),
      oQ = wQ(1870);

    function DQ(QQ) {
      if ("YQ" in QQ) return CQ.createAnimationScript(QQ);
      return new mQ(QQ).createAnimationScript()
    }

    function kQ(QQ, FQ, wQ, qQ) {
      const oQ = QQ.YQ <= 0 ? 1 : FQ + wQ * Math.max(0, qQ) / QQ.YQ;
      return QQ.xQ === LQ.n.LoopOnLastFrame ? oQ % 1 : QQ.xQ === LQ.n.NoLoop && oQ >= 1 ? null : Math.min(1, oQ)
    }
    class vQ {
      createAnimationScript(QQ) {
        const {
          YQ: FQ,
          loop: wQ,
          AQ: LQ
        } = QQ;
        return {
          YQ: Math.round(FQ),
          xQ: this.createLoopMode(null !== wQ && void 0 !== wQ && wQ),
          AQ: this.createNodeSkeletonAnimationScript(null !== LQ && void 0 !== LQ ? LQ : null)
        }
      }
      createLoopMode(QQ) {
        switch (QQ) {
          case !1:
            return LQ.n.NoLoop;
          case !0:
            return LQ.n.LoopOnLastFrame;
          case "hold-on-last-frame":
            return LQ.n.HoldOnLastFrame
        }
        throw new Error(`Invalid loop mode schema: ${QQ}`)
      }
      createNodeSkeletonAnimationScript(QQ) {
        if (null === QQ) return null;
        const FQ = {};
        for (const wQ in QQ) {
          const LQ = QQ[wQ];
          FQ[wQ] = this.createNodeAnimationScript(LQ)
        }
        return FQ
      }
      createNodeAnimationScript(QQ) {
        const {
          timeline: FQ
        } = QQ, wQ = FQ.filter((QQ => Number.isFinite(QQ.timeFraction)));
        return wQ.sort(((QQ, FQ) => QQ.timeFraction - FQ.timeFraction)), {
          rotation: this.createTimelineFromKeyframes(wQ, "rotation", bQ),
          position: this.createTimelineFromKeyframes(wQ, "position", xQ)
        }
      }
      createTimelineFromKeyframes(QQ, FQ, wQ) {
        const LQ = [];
        for (const vQ of QQ) {
          const QQ = vQ[FQ];
          if (QQ) {
            const FQ = this.createAnimationFrameWithoutPrecomputes(vQ.timeFraction, QQ);
            uQ(FQ) && LQ.push(FQ)
          }
        }
        const qQ = [];
        for (let vQ = 0; vQ < LQ.length; vQ++) {
          var oQ, DQ, kQ;
          const QQ = LQ[vQ],
            FQ = null !== (oQ = LQ[vQ - 1]) && void 0 !== oQ ? oQ : QQ,
            mQ = null !== (DQ = LQ[vQ + 1]) && void 0 !== DQ ? DQ : QQ,
            uQ = null !== (kQ = LQ[vQ + 2]) && void 0 !== kQ ? kQ : mQ;
          qQ.push({
            ...QQ,
            ...wQ(FQ.post, FQ.timeFraction, QQ.post, QQ.timeFraction, mQ.pre, mQ.timeFraction, uQ.pre, uQ.timeFraction)
          })
        }
        return qQ
      }
      createAnimationFrameWithoutPrecomputes(QQ, FQ) {
        let wQ, LQ, qQ = null;
        var oQ;
        if ("object" === typeof FQ && "point" in FQ) qQ = null !== (oQ = FQ.MQ) && void 0 !== oQ ? oQ : null, wQ = FQ.point, LQ = FQ.point;
        else if ("object" === typeof FQ && "pre" in FQ) {
          var DQ;
          qQ = null !== (DQ = FQ.MQ) && void 0 !== DQ ? DQ : null, wQ = FQ.pre, LQ = FQ.post
        } else wQ = FQ, LQ = FQ;
        return {
          timeFraction: QQ,
          MQ: this.createLerpMode(qQ),
          pre: wQ,
          post: LQ
        }
      }
      createLerpMode(QQ) {
        return null === QQ ? LQ.j.Linear : vQ.LERP_MODE_SCHEMA_MAPPING[QQ]
      }
    }
    vQ.LERP_MODE_SCHEMA_MAPPING = {
      linear: LQ.j.Linear,
      "catmull-rom-spline": LQ.j.CatmullRomSpline
    };
    class mQ {
      constructor(QQ) {
        this.animationSchema = QQ
      }
      createAnimationScript() {
        const {
          animation_length: QQ,
          loop: FQ,
          bones: wQ
        } = this.animationSchema;
        return {
          YQ: Math.round(1e3 * QQ),
          xQ: this.createLoopMode(null !== FQ && void 0 !== FQ && FQ),
          AQ: this.createNodeSkeletonAnimationScript(null !== wQ && void 0 !== wQ ? wQ : null)
        }
      }
      createLoopMode(QQ) {
        switch (QQ) {
          case !1:
            return LQ.n.NoLoop;
          case !0:
            return LQ.n.LoopOnLastFrame;
          case "hold_on_last_frame":
            return LQ.n.HoldOnLastFrame
        }
        throw new Error(`Invalid Blockbench loop mode schema: ${QQ}`)
      }
      createNodeSkeletonAnimationScript(QQ) {
        if (null === QQ) return null;
        const FQ = {};
        for (const wQ in QQ) {
          const LQ = QQ[wQ];
          FQ[wQ] = this.createNodeAnimationScript(LQ)
        }
        return FQ
      }
      createNodeAnimationScript(QQ) {
        const {
          rotation: FQ,
          position: wQ
        } = QQ;
        return {
          rotation: this.createAnimationTimeline(null !== FQ && void 0 !== FQ ? FQ : null, tQ, bQ, !0),
          position: this.createAnimationTimeline(null !== wQ && void 0 !== wQ ? wQ : null, MQ, xQ, !1)
        }
      }
      createAnimationTimeline(QQ, FQ, wQ, LQ) {
        if (null === QQ) return [];
        if (Array.isArray(QQ)) {
          QQ = {
            "0.0": QQ
          }
        }
        const qQ = Object.entries(QQ).map((QQ => {
          let [wQ, LQ] = QQ;
          const qQ = Number(wQ) / this.animationSchema.animation_length;
          return this.createAnimationFrameWithoutPrecomputes(qQ, LQ, FQ)
        })).filter(uQ);
        qQ.sort(((QQ, FQ) => QQ.timeFraction - FQ.timeFraction)), LQ && function(QQ) {
          for (let FQ = 1; FQ < QQ.length; FQ++) {
            const wQ = QQ[FQ - 1].post,
              LQ = QQ[FQ],
              qQ = GQ(LQ.pre),
              oQ = GQ(LQ.post),
              DQ = cQ(wQ, LQ.pre);
            cQ(wQ, qQ) < DQ && (QQ[FQ] = {
              ...LQ,
              pre: qQ,
              post: oQ
            })
          }
        }(qQ);
        const oQ = [];
        for (let mQ = 0; mQ < qQ.length; mQ++) {
          var DQ, kQ, vQ;
          const QQ = qQ[mQ],
            FQ = null !== (DQ = qQ[mQ - 1]) && void 0 !== DQ ? DQ : QQ,
            LQ = null !== (kQ = qQ[mQ + 1]) && void 0 !== kQ ? kQ : QQ,
            uQ = null !== (vQ = qQ[mQ + 2]) && void 0 !== vQ ? vQ : LQ;
          oQ.push({
            ...QQ,
            ...wQ(FQ.post, FQ.timeFraction, QQ.post, QQ.timeFraction, LQ.pre, LQ.timeFraction, uQ.pre, uQ.timeFraction)
          })
        }
        return oQ
      }
      createAnimationFrameWithoutPrecomputes(QQ, FQ, wQ) {
        let LQ, qQ, oQ = null;
        if ("object" === typeof FQ && "post" in FQ) {
          var DQ;
          oQ = null !== (DQ = FQ.lerp_mode) && void 0 !== DQ ? DQ : null, qQ = AQ(FQ.post, wQ), LQ = FQ.pre ? AQ(FQ.pre, wQ) : qQ
        } else {
          const QQ = AQ(FQ, wQ);
          qQ = QQ, LQ = QQ
        }
        return {
          timeFraction: QQ,
          MQ: this.createLerpMode(oQ),
          pre: LQ,
          post: qQ
        }
      }
      createLerpMode(QQ) {
        return null === QQ ? LQ.j.Linear : mQ.LERP_MODE_SCHEMA_MAPPING[QQ]
      }
    }

    function uQ(QQ) {
      return Number.isFinite(QQ.timeFraction) && HQ(QQ.pre) && HQ(QQ.post)
    }

    function HQ(QQ) {
      return Number.isFinite(QQ[0]) && Number.isFinite(QQ[1]) && Number.isFinite(QQ[2])
    }

    function bQ(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ) {
      const vQ = oQ - FQ,
        mQ = oQ - LQ,
        uQ = kQ - LQ,
        HQ = [null, null, null];
      for (let bQ = 0; bQ < HQ.length; bQ++) HQ[bQ] = YQ(QQ[bQ], wQ[bQ], qQ[bQ], DQ[bQ], vQ, uQ);
      return {
        GQ: mQ,
        pQ: HQ
      }
    }

    function YQ(QQ, FQ, wQ, LQ, oQ, DQ) {
      return {
        CQ: qQ.e.computeShortestRotation(QQ, wQ) / oQ,
        SQ: qQ.e.computeShortestRotation(FQ, LQ) / DQ,
        delta: qQ.e.computeShortestRotation(FQ, wQ)
      }
    }

    function xQ(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ) {
      const vQ = oQ - FQ,
        mQ = oQ - LQ,
        uQ = kQ - LQ,
        HQ = [null, null, null];
      for (let bQ = 0; bQ < HQ.length; bQ++) HQ[bQ] = {
        CQ: (qQ[bQ] - QQ[bQ]) / vQ,
        SQ: (DQ[bQ] - wQ[bQ]) / uQ,
        delta: qQ[bQ] - wQ[bQ]
      };
      return {
        GQ: mQ,
        pQ: HQ
      }
    }

    function AQ(QQ, FQ) {
      return null === FQ ? QQ : FQ(QQ)
    }

    function tQ(QQ) {
      const [FQ, wQ, LQ] = QQ, DQ = -(0, oQ.n)(FQ), kQ = -(0, oQ.n)(wQ), vQ = (0, oQ.n)(LQ), mQ = qQ.e.quaternionFromEulerZYX(DQ, kQ, vQ);
      return qQ.e.eulerYXZFromQuaternion(mQ)
    }
    mQ.LERP_MODE_SCHEMA_MAPPING = {
      linear: LQ.j.Linear,
      catmullrom: LQ.j.CatmullRomSpline
    };
    const eQ = 1 / 16;

    function MQ(QQ) {
      return [-QQ[0] * eQ, QQ[1] * eQ, QQ[2] * eQ]
    }

    function GQ(QQ) {
      const [FQ, wQ, LQ] = QQ;
      return [FQ >= 0 ? Math.PI - FQ : -Math.PI - FQ, pQ(wQ + Math.PI), pQ(LQ + Math.PI)]
    }

    function pQ(QQ) {
      return qQ.e.mod(QQ + Math.PI, 2 * Math.PI) - Math.PI
    }

    function cQ(QQ, FQ) {
      return Math.abs(qQ.e.computeShortestRotation(QQ[0], FQ[0])) + Math.abs(qQ.e.computeShortestRotation(QQ[1], FQ[1])) + Math.abs(qQ.e.computeShortestRotation(QQ[2], FQ[2]))
    }
    const CQ = new vQ
  },
  36753: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => DQ,
      h: () => oQ,
      j: () => LQ,
      n: () => qQ
    });
    let LQ = function(QQ) {
        return QQ[QQ.Linear = 0] = "Linear", QQ[QQ.CatmullRomSpline = 1] = "CatmullRomSpline", QQ
      }({}),
      qQ = function(QQ) {
        return QQ[QQ.NoLoop = 0] = "NoLoop", QQ[QQ.LoopOnLastFrame = 1] = "LoopOnLastFrame", QQ[QQ.HoldOnLastFrame = 2] = "HoldOnLastFrame", QQ
      }({}),
      oQ = function(QQ) {
        return QQ[QQ.Movement = 0] = "Movement", QQ[QQ.Action = 1] = "Action", QQ[QQ.Emote = 2] = "Emote", QQ[QQ.Custom = 3] = "Custom", QQ
      }({}),
      DQ = function(QQ) {
        return QQ[QQ.Start = 0] = "Start", QQ[QQ.Stop = 1] = "Stop", QQ
      }({})
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);