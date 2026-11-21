export const id = 193;
export const ids = [193];
export const modules = {
  40922: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      MobPreview: () => HQ
    });
    var LQ = wQ(53),
      qQ = wQ(1070),
      oQ = wQ.n(qQ),
      DQ = wQ(40929),
      kQ = wQ(9137),
      vQ = wQ(40933),
      mQ = wQ(1107);

    function uQ(QQ) {
      return kQ.d.openMob(QQ)
    }
    const HQ = (0, LQ.memo)((function(QQ) {
      let {
        mobType: FQ,
        variation: wQ = null,
        animation: qQ = vQ.i,
        className: kQ
      } = QQ;
      const HQ = (0, LQ.useRef)(null),
        bQ = (0, LQ.useMemo)((() => ({
          mobType: FQ,
          variation: wQ,
          animation: qQ
        })), [FQ, wQ, qQ]);
      return (0, DQ.d)(HQ, uQ, bQ), (0, mQ.jsx)("div", {
        className: oQ()("MobPreview", kQ),
        ref: HQ
      })
    }))
  },
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
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);