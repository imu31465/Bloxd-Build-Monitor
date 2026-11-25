export const id = 207;
export const ids = [207];
export const modules = {
  41772: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => TQ
    });
    var wQ = XQ(61),
      qQ = XQ(2978);

    function TQ(QQ, WQ, XQ) {
      const TQ = (0, wQ.useRef)(null),
        {
          width: zQ,
          height: sQ
        } = (0, qQ.d)(QQ);
      (0, wQ.useEffect)((() => {
        const XQ = WQ(QQ.current);
        return TQ.current = XQ, () => {
          XQ.close(), TQ.current = null
        }
      }), [QQ, WQ]), (0, wQ.useEffect)((() => {
        zQ <= 0 || sQ <= 0 || TQ.current.resize(zQ, sQ)
      }), [zQ, sQ]), (0, wQ.useEffect)((() => {
        TQ.current.show(XQ)
      }), [XQ])
    }
  },
  41774: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => rQ,
      d: () => JQ,
      h: () => FQ
    });
    var wQ = XQ(37437),
      qQ = XQ(38918);

    function TQ(QQ, WQ) {
      let [XQ, wQ, qQ] = QQ;
      return [0, .5, 1].map((QQ => ({
        timeFraction: QQ,
        rotation: {
          Zw: "catmull-rom-spline",
          point: [XQ, wQ, qQ + (.5 === QQ ? WQ : 0)]
        }
      })))
    }

    function zQ(QQ, WQ, XQ) {
      return {
        ew: 3200,
        loop: !0,
        xw: {
          Root: {
            timeline: [0, .5, 1].map((QQ => ({
              timeFraction: QQ,
              position: {
                Zw: "catmull-rom-spline",
                point: [0, .5 === QQ ? .18 : 0, 0]
              }
            })))
          },
          HeadMesh: {
            timeline: [0, .25, .75, 1].map((QQ => ({
              timeFraction: QQ,
              rotation: {
                Zw: "catmull-rom-spline",
                point: [0, .25 === QQ ? .12 : .75 === QQ ? -.12 : 0, 0]
              }
            })))
          },
          ArmLeftMesh: {
            timeline: TQ(QQ, XQ)
          },
          ArmRightMesh: {
            timeline: TQ(WQ, -XQ)
          }
        }
      }
    }
    const sQ = zQ([0, 0, 0], [0, 0, 0], .07),
      FQ = (0, qQ.e)((0, wQ.f)(sQ), "mobIdle"),
      PQ = zQ([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
      gQ = zQ([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
      JQ = (0, qQ.e)((0, wQ.f)(PQ), "gunReady"),
      rQ = (0, qQ.e)((0, wQ.f)(gQ), "gunAimed")
  },
  38918: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => qQ,
      f: () => TQ
    });
    const wQ = new WeakMap;

    function qQ(QQ, WQ) {
      return wQ.set(QQ, WQ), QQ
    }

    function TQ(QQ) {
      var WQ;
      return null !== (WQ = wQ.get(QQ)) && void 0 !== WQ ? WQ : null
    }
  },
  34548: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => zQ,
      c: () => qQ,
      f: () => gQ
    });
    var wQ = XQ(1626);

    function qQ(QQ) {
      var WQ;
      return {
        ...zQ.store,
        yaw: zQ.store.yaw + (null !== (WQ = wQ.c[QQ].previewYaw) && void 0 !== WQ ? WQ : 0)
      }
    }
    const TQ = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      zQ = {
        player: TQ,
        store: {
          ...TQ,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function sQ(QQ, WQ) {
      QQ instanceof Promise ? QQ.then(WQ).catch((QQ => {
        console.error("Couldn't open the preview", QQ)
      })) : WQ(QQ)
    }
    class FQ {
      constructor(QQ) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, sQ(QQ, (QQ => {
          this.closed ? QQ.close() : (this.opened = QQ, null !== this.size && QQ.resize(this.size.width, this.size.height), null !== this.view && QQ.show(this.view))
        }))
      }
      show(QQ) {
        var WQ;
        this.view = QQ, null === (WQ = this.opened) || void 0 === WQ || WQ.show(QQ)
      }
      resize(QQ, WQ) {
        var XQ;
        this.size = {
          width: QQ,
          height: WQ
        }, null === (XQ = this.opened) || void 0 === XQ || XQ.resize(QQ, WQ)
      }
      close() {
        var QQ;
        this.closed = !0, null === (QQ = this.opened) || void 0 === QQ || QQ.close(), this.opened = null
      }
    }
    class PQ {
      constructor(QQ) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(QQ).then((QQ => QQ.ready)), sQ(QQ, (QQ => {
          this.closed ? QQ.close() : (this.opened = QQ, null !== this.size && QQ.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var QQ, WQ;
        return null !== (QQ = null === (WQ = this.opened) || void 0 === WQ ? void 0 : WQ.isReady()) && void 0 !== QQ && QQ
      }
      setCosmetic(QQ, WQ) {
        var XQ;
        null === (XQ = this.opened) || void 0 === XQ || XQ.setCosmetic(QQ, WQ)
      }
      playEmote(QQ) {
        var WQ;
        null === (WQ = this.opened) || void 0 === WQ || WQ.playEmote(QQ)
      }
      setOrbit(QQ) {
        var WQ;
        null === (WQ = this.opened) || void 0 === WQ || WQ.setOrbit(QQ)
      }
      resetCamera() {
        var QQ;
        null === (QQ = this.opened) || void 0 === QQ || QQ.resetCamera()
      }
      async untilDrawn(QQ) {
        var WQ;
        await this.ready, await (null === (WQ = this.opened) || void 0 === WQ ? void 0 : WQ.untilDrawn(QQ))
      }
      resize(QQ, WQ) {
        var XQ;
        this.size = {
          width: QQ,
          height: WQ
        }, null === (XQ = this.opened) || void 0 === XQ || XQ.resize(QQ, WQ)
      }
      close() {
        var QQ;
        this.closed = !0, null === (QQ = this.opened) || void 0 === QQ || QQ.close(), this.opened = null
      }
    }
    const gQ = new class {
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
        return new FQ(this.current().openMob(QQ))
      }
      openPet(QQ) {
        return new FQ(this.current().openPet(QQ))
      }
      openMobLineup(QQ) {
        return new FQ(this.current().openMobLineup(QQ))
      }
      openCharacter(QQ, WQ) {
        return new PQ(this.current().openCharacter(QQ, WQ))
      }
    }
  },
  34541: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => wQ.b,
      d: () => wQ.c,
      h: () => wQ.f
    });
    var wQ = XQ(34548);
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
    class TQ {
      constructor() {
        this.mobScene = new qQ((() => Promise.all([XQ.e(75), XQ.e(241), XQ.e(240), XQ.e(262), XQ.e(101), XQ.e(263), XQ.e(78), XQ.e(77), XQ.e(260), XQ.e(76), XQ.e(270), XQ.e(264), XQ.e(269), XQ.e(267), XQ.e(259), XQ.e(283), XQ.e(237), XQ.e(253), XQ.e(265), XQ.e(268), XQ.e(80), XQ.e(190), XQ.e(231), XQ.e(100), XQ.e(243), XQ.e(234), XQ.e(250), XQ.e(123), XQ.e(251), XQ.e(79), XQ.e(255)]).then((() => XQ(41294))))), this.characterScene = new qQ((() => Promise.all([XQ.e(75), XQ.e(241), XQ.e(240), XQ.e(262), XQ.e(101), XQ.e(263), XQ.e(78), XQ.e(77), XQ.e(260), XQ.e(76), XQ.e(270), XQ.e(264), XQ.e(269), XQ.e(267), XQ.e(259), XQ.e(283), XQ.e(237), XQ.e(253), XQ.e(265), XQ.e(268), XQ.e(80), XQ.e(190), XQ.e(231), XQ.e(100), XQ.e(243), XQ.e(234), XQ.e(250), XQ.e(123), XQ.e(251), XQ.e(79), XQ.e(254)]).then((() => XQ(41401)))))
      }
      openMob(QQ) {
        return this.mobScene.run((WQ => WQ.openMobPreview(QQ)))
      }
      openPet(QQ) {
        return this.mobScene.run((WQ => WQ.openPetPreview(QQ)))
      }
      openMobLineup(QQ) {
        return this.mobScene.run((WQ => WQ.openMobLineupPreview(QQ)))
      }
      openCharacter(QQ, WQ) {
        return this.characterScene.run((XQ => XQ.openCharacterPreview(QQ, WQ)))
      }
    }
    wQ.f.setDefaultHost((() => new TQ))
  },
  42004: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      FrontlineMvpLineup: () => JQ
    });
    var wQ = XQ(61),
      qQ = XQ(1081),
      TQ = XQ.n(qQ),
      zQ = XQ(34541),
      sQ = XQ(41774),
      FQ = XQ(41772),
      PQ = XQ(1145);

    function gQ(QQ) {
      return zQ.h.openMobLineup(QQ)
    }
    const JQ = (0, wQ.memo)((function(QQ) {
      let {
        players: WQ,
        className: XQ
      } = QQ;
      const qQ = (0, wQ.useRef)(null),
        zQ = (0, wQ.useMemo)((() => WQ.map((QQ => {
          let {
            cosmetics: WQ,
            size: XQ,
            heldGun: wQ
          } = QQ;
          return {
            cosmetics: WQ,
            size: XQ,
            Qp: wQ.name,
            animation: wQ.aimed ? sQ.b : sQ.d
          }
        }))), [WQ]),
        JQ = function(QQ) {
          const [WQ, XQ] = (0, wQ.useState)([]);
          return (0, wQ.useEffect)((() => {
            XQ(QQ.map((() => !1)));
            const WQ = QQ.map(((QQ, WQ) => {
              let {
                showAfterMs: wQ
              } = QQ;
              return window.setTimeout((() => {
                XQ((QQ => QQ.map(((QQ, XQ) => QQ || XQ === WQ))))
              }), wQ)
            }));
            return () => {
              for (const QQ of WQ) window.clearTimeout(QQ)
            }
          }), [QQ]), WQ
        }(WQ),
        rQ = (0, wQ.useMemo)((() => ({
          figures: zQ,
          shown: JQ
        })), [zQ, JQ]);
      return (0, FQ.e)(qQ, gQ, rQ), (0, PQ.jsx)("div", {
        className: TQ()("MobPreview", XQ),
        ref: qQ
      })
    }))
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);