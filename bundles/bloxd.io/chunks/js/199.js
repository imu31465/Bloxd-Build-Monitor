export const id = 199;
export const ids = [199];
export const modules = {
  41330: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => bC
    });
    var QC = ZC(48),
      wC = ZC(2734);

    function bC(CC, zC, ZC) {
      const bC = (0, QC.useRef)(null),
        {
          width: nC,
          height: fC
        } = (0, wC.e)(CC);
      (0, QC.useEffect)((() => {
        const ZC = zC(CC.current);
        return bC.current = ZC, () => {
          ZC.close(), bC.current = null
        }
      }), [CC, zC]), (0, QC.useEffect)((() => {
        nC <= 0 || fC <= 0 || bC.current.resize(nC, fC)
      }), [nC, fC]), (0, QC.useEffect)((() => {
        bC.current.show(ZC)
      }), [ZC])
    }
  },
  41336: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => NC,
      d: () => WC,
      e: () => oC
    });
    var QC = ZC(37023),
      wC = ZC(38454);

    function bC(CC, zC) {
      let [ZC, QC, wC] = CC;
      return [0, .5, 1].map((CC => ({
        timeFraction: CC,
        rotation: {
          nb: "catmull-rom-spline",
          point: [ZC, QC, wC + (.5 === CC ? zC : 0)]
        }
      })))
    }

    function nC(CC, zC, ZC) {
      return {
        Cb: 3200,
        loop: !0,
        Zb: {
          Root: {
            timeline: [0, .5, 1].map((CC => ({
              timeFraction: CC,
              position: {
                nb: "catmull-rom-spline",
                point: [0, .5 === CC ? .18 : 0, 0]
              }
            })))
          },
          HeadMesh: {
            timeline: [0, .25, .75, 1].map((CC => ({
              timeFraction: CC,
              rotation: {
                nb: "catmull-rom-spline",
                point: [0, .25 === CC ? .12 : .75 === CC ? -.12 : 0, 0]
              }
            })))
          },
          ArmLeftMesh: {
            timeline: bC(CC, ZC)
          },
          ArmRightMesh: {
            timeline: bC(zC, -ZC)
          }
        }
      }
    }
    const fC = nC([0, 0, 0], [0, 0, 0], .07),
      oC = (0, wC.b)((0, QC.f)(fC), "mobIdle"),
      qC = nC([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
      FC = nC([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
      WC = (0, wC.b)((0, QC.f)(qC), "gunReady"),
      NC = (0, wC.b)((0, QC.f)(FC), "gunAimed")
  },
  38454: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => wC,
      c: () => bC
    });
    const QC = new WeakMap;

    function wC(CC, zC) {
      return QC.set(CC, zC), CC
    }

    function bC(CC) {
      var zC;
      return null !== (zC = QC.get(CC)) && void 0 !== zC ? zC : null
    }
  },
  34194: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => nC,
      g: () => wC,
      i: () => FC
    });
    var QC = ZC(1501);

    function wC(CC) {
      var zC;
      return {
        ...nC.store,
        yaw: nC.store.yaw + (null !== (zC = QC.b[CC].previewYaw) && void 0 !== zC ? zC : 0)
      }
    }
    const bC = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      nC = {
        player: bC,
        store: {
          ...bC,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function fC(CC, zC) {
      CC instanceof Promise ? CC.then(zC).catch((CC => {
        console.error("Couldn't open the preview", CC)
      })) : zC(CC)
    }
    class oC {
      constructor(CC) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, fC(CC, (CC => {
          this.closed ? CC.close() : (this.opened = CC, null !== this.size && CC.resize(this.size.width, this.size.height), null !== this.view && CC.show(this.view))
        }))
      }
      show(CC) {
        var zC;
        this.view = CC, null === (zC = this.opened) || void 0 === zC || zC.show(CC)
      }
      resize(CC, zC) {
        var ZC;
        this.size = {
          width: CC,
          height: zC
        }, null === (ZC = this.opened) || void 0 === ZC || ZC.resize(CC, zC)
      }
      close() {
        var CC;
        this.closed = !0, null === (CC = this.opened) || void 0 === CC || CC.close(), this.opened = null
      }
    }
    class qC {
      constructor(CC) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(CC).then((CC => CC.ready)), fC(CC, (CC => {
          this.closed ? CC.close() : (this.opened = CC, null !== this.size && CC.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var CC, zC;
        return null !== (CC = null === (zC = this.opened) || void 0 === zC ? void 0 : zC.isReady()) && void 0 !== CC && CC
      }
      setCosmetic(CC, zC) {
        var ZC;
        null === (ZC = this.opened) || void 0 === ZC || ZC.setCosmetic(CC, zC)
      }
      playEmote(CC) {
        var zC;
        null === (zC = this.opened) || void 0 === zC || zC.playEmote(CC)
      }
      setOrbit(CC) {
        var zC;
        null === (zC = this.opened) || void 0 === zC || zC.setOrbit(CC)
      }
      resetCamera() {
        var CC;
        null === (CC = this.opened) || void 0 === CC || CC.resetCamera()
      }
      async untilDrawn(CC) {
        var zC;
        await this.ready, await (null === (zC = this.opened) || void 0 === zC ? void 0 : zC.untilDrawn(CC))
      }
      resize(CC, zC) {
        var ZC;
        this.size = {
          width: CC,
          height: zC
        }, null === (ZC = this.opened) || void 0 === ZC || ZC.resize(CC, zC)
      }
      close() {
        var CC;
        this.closed = !0, null === (CC = this.opened) || void 0 === CC || CC.close(), this.opened = null
      }
    }
    const FC = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(CC) {
        this.host = CC
      }
      setDefaultHost(CC) {
        this.makeDefault = CC
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(CC) {
        return new oC(this.current().openMob(CC))
      }
      openPet(CC) {
        return new oC(this.current().openPet(CC))
      }
      openMobLineup(CC) {
        return new oC(this.current().openMobLineup(CC))
      }
      openCharacter(CC, zC) {
        return new qC(this.current().openCharacter(CC, zC))
      }
    }
  },
  34185: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => QC.d,
      g: () => QC.g,
      k: () => QC.i
    });
    var QC = ZC(34194);
    class wC {
      constructor(CC) {
        this.load = CC, this.loaded = null, this.loading = null
      }
      run(CC) {
        return null !== this.loaded ? CC(this.loaded) : (this.loading ??= this.load().then((CC => (this.loaded = CC, CC)), (CC => {
          throw this.loading = null, CC
        })), this.loading.then(CC))
      }
    }
    class bC {
      constructor() {
        this.mobScene = new wC((() => Promise.all([ZC.e(72), ZC.e(232), ZC.e(231), ZC.e(254), ZC.e(96), ZC.e(255), ZC.e(75), ZC.e(74), ZC.e(252), ZC.e(73), ZC.e(262), ZC.e(256), ZC.e(261), ZC.e(259), ZC.e(251), ZC.e(274), ZC.e(228), ZC.e(244), ZC.e(257), ZC.e(260), ZC.e(77), ZC.e(186), ZC.e(222), ZC.e(95), ZC.e(225), ZC.e(240), ZC.e(120), ZC.e(241), ZC.e(76), ZC.e(119), ZC.e(246)]).then((() => ZC(40923))))), this.characterScene = new wC((() => Promise.all([ZC.e(72), ZC.e(232), ZC.e(231), ZC.e(254), ZC.e(96), ZC.e(255), ZC.e(75), ZC.e(74), ZC.e(252), ZC.e(73), ZC.e(262), ZC.e(256), ZC.e(261), ZC.e(259), ZC.e(251), ZC.e(274), ZC.e(228), ZC.e(244), ZC.e(257), ZC.e(260), ZC.e(77), ZC.e(186), ZC.e(222), ZC.e(95), ZC.e(225), ZC.e(240), ZC.e(120), ZC.e(241), ZC.e(76), ZC.e(119), ZC.e(245)]).then((() => ZC(41e3)))))
      }
      openMob(CC) {
        return this.mobScene.run((zC => zC.openMobPreview(CC)))
      }
      openPet(CC) {
        return this.mobScene.run((zC => zC.openPetPreview(CC)))
      }
      openMobLineup(CC) {
        return this.mobScene.run((zC => zC.openMobLineupPreview(CC)))
      }
      openCharacter(CC, zC) {
        return this.characterScene.run((ZC => ZC.openCharacterPreview(CC, zC)))
      }
    }
    QC.i.setDefaultHost((() => new bC))
  },
  41576: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      FrontlineMvpLineup: () => WC
    });
    var QC = ZC(48),
      wC = ZC(1002),
      bC = ZC.n(wC),
      nC = ZC(34185),
      fC = ZC(41336),
      oC = ZC(41330),
      qC = ZC(1056);

    function FC(CC) {
      return nC.k.openMobLineup(CC)
    }
    const WC = (0, QC.memo)((function(CC) {
      let {
        players: zC,
        className: ZC
      } = CC;
      const wC = (0, QC.useRef)(null),
        nC = (0, QC.useMemo)((() => zC.map((CC => {
          let {
            cosmetics: zC,
            size: ZC,
            heldGun: QC
          } = CC;
          return {
            cosmetics: zC,
            size: ZC,
            Hx: QC.name,
            animation: QC.aimed ? fC.c : fC.d
          }
        }))), [zC]),
        WC = function(CC) {
          const [zC, ZC] = (0, QC.useState)([]);
          return (0, QC.useEffect)((() => {
            ZC(CC.map((() => !1)));
            const zC = CC.map(((CC, zC) => {
              let {
                showAfterMs: QC
              } = CC;
              return window.setTimeout((() => {
                ZC((CC => CC.map(((CC, ZC) => CC || ZC === zC))))
              }), QC)
            }));
            return () => {
              for (const CC of zC) window.clearTimeout(CC)
            }
          }), [CC]), zC
        }(zC),
        NC = (0, QC.useMemo)((() => ({
          figures: nC,
          shown: WC
        })), [nC, WC]);
      return (0, oC.c)(wC, FC, NC), (0, qC.jsx)("div", {
        className: bC()("MobPreview", ZC),
        ref: wC
      })
    }))
  },
  37023: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => fC,
      f: () => nC
    });
    var QC = ZC(37014),
      wC = ZC(326),
      bC = ZC(1806);

    function nC(CC) {
      if ("Cb" in CC) return JC.createAnimationScript(CC);
      return new qC(CC).createAnimationScript()
    }

    function fC(CC, zC, ZC, wC) {
      const bC = CC.Cb <= 0 ? 1 : zC + ZC * Math.max(0, wC) / CC.Cb;
      return CC.zb === QC.g.LoopOnLastFrame ? bC % 1 : CC.zb === QC.g.NoLoop && bC >= 1 ? null : Math.min(1, bC)
    }
    class oC {
      createAnimationScript(CC) {
        const {
          Cb: zC,
          loop: ZC,
          Zb: QC
        } = CC;
        return {
          Cb: Math.round(zC),
          zb: this.createLoopMode(null !== ZC && void 0 !== ZC && ZC),
          Zb: this.createNodeSkeletonAnimationScript(null !== QC && void 0 !== QC ? QC : null)
        }
      }
      createLoopMode(CC) {
        switch (CC) {
          case !1:
            return QC.g.NoLoop;
          case !0:
            return QC.g.LoopOnLastFrame;
          case "hold-on-last-frame":
            return QC.g.HoldOnLastFrame
        }
        throw new Error(`Invalid loop mode schema: ${CC}`)
      }
      createNodeSkeletonAnimationScript(CC) {
        if (null === CC) return null;
        const zC = {};
        for (const ZC in CC) {
          const QC = CC[ZC];
          zC[ZC] = this.createNodeAnimationScript(QC)
        }
        return zC
      }
      createNodeAnimationScript(CC) {
        const {
          timeline: zC
        } = CC, ZC = zC.filter((CC => Number.isFinite(CC.timeFraction)));
        return ZC.sort(((CC, zC) => CC.timeFraction - zC.timeFraction)), {
          rotation: this.createTimelineFromKeyframes(ZC, "rotation", NC),
          position: this.createTimelineFromKeyframes(ZC, "position", gC)
        }
      }
      createTimelineFromKeyframes(CC, zC, ZC) {
        const QC = [];
        for (const oC of CC) {
          const CC = oC[zC];
          if (CC) {
            const zC = this.createAnimationFrameWithoutPrecomputes(oC.timeFraction, CC);
            FC(zC) && QC.push(zC)
          }
        }
        const wC = [];
        for (let oC = 0; oC < QC.length; oC++) {
          var bC, nC, fC;
          const CC = QC[oC],
            zC = null !== (bC = QC[oC - 1]) && void 0 !== bC ? bC : CC,
            qC = null !== (nC = QC[oC + 1]) && void 0 !== nC ? nC : CC,
            FC = null !== (fC = QC[oC + 2]) && void 0 !== fC ? fC : qC;
          wC.push({
            ...CC,
            ...ZC(zC.post, zC.timeFraction, CC.post, CC.timeFraction, qC.pre, qC.timeFraction, FC.pre, FC.timeFraction)
          })
        }
        return wC
      }
      createAnimationFrameWithoutPrecomputes(CC, zC) {
        let ZC, QC, wC = null;
        var bC;
        if ("object" === typeof zC && "point" in zC) wC = null !== (bC = zC.nb) && void 0 !== bC ? bC : null, ZC = zC.point, QC = zC.point;
        else if ("object" === typeof zC && "pre" in zC) {
          var nC;
          wC = null !== (nC = zC.nb) && void 0 !== nC ? nC : null, ZC = zC.pre, QC = zC.post
        } else ZC = zC, QC = zC;
        return {
          timeFraction: CC,
          nb: this.createLerpMode(wC),
          pre: ZC,
          post: QC
        }
      }
      createLerpMode(CC) {
        return null === CC ? QC.f.Linear : oC.LERP_MODE_SCHEMA_MAPPING[CC]
      }
    }
    oC.LERP_MODE_SCHEMA_MAPPING = {
      linear: QC.f.Linear,
      "catmull-rom-spline": QC.f.CatmullRomSpline
    };
    class qC {
      constructor(CC) {
        this.animationSchema = CC
      }
      createAnimationScript() {
        const {
          animation_length: CC,
          loop: zC,
          bones: ZC
        } = this.animationSchema;
        return {
          Cb: Math.round(1e3 * CC),
          zb: this.createLoopMode(null !== zC && void 0 !== zC && zC),
          Zb: this.createNodeSkeletonAnimationScript(null !== ZC && void 0 !== ZC ? ZC : null)
        }
      }
      createLoopMode(CC) {
        switch (CC) {
          case !1:
            return QC.g.NoLoop;
          case !0:
            return QC.g.LoopOnLastFrame;
          case "hold_on_last_frame":
            return QC.g.HoldOnLastFrame
        }
        throw new Error(`Invalid Blockbench loop mode schema: ${CC}`)
      }
      createNodeSkeletonAnimationScript(CC) {
        if (null === CC) return null;
        const zC = {};
        for (const ZC in CC) {
          const QC = CC[ZC];
          zC[ZC] = this.createNodeAnimationScript(QC)
        }
        return zC
      }
      createNodeAnimationScript(CC) {
        const {
          rotation: zC,
          position: ZC
        } = CC;
        return {
          rotation: this.createAnimationTimeline(null !== zC && void 0 !== zC ? zC : null, pC, NC, !0),
          position: this.createAnimationTimeline(null !== ZC && void 0 !== ZC ? ZC : null, GC, gC, !1)
        }
      }
      createAnimationTimeline(CC, zC, ZC, QC) {
        if (null === CC) return [];
        if (Array.isArray(CC)) {
          CC = {
            "0.0": CC
          }
        }
        const wC = Object.entries(CC).map((CC => {
          let [ZC, QC] = CC;
          const wC = Number(ZC) / this.animationSchema.animation_length;
          return this.createAnimationFrameWithoutPrecomputes(wC, QC, zC)
        })).filter(FC);
        wC.sort(((CC, zC) => CC.timeFraction - zC.timeFraction)), QC && function(CC) {
          for (let zC = 1; zC < CC.length; zC++) {
            const ZC = CC[zC - 1].post,
              QC = CC[zC],
              wC = RC(QC.pre),
              bC = RC(QC.post),
              nC = xC(ZC, QC.pre);
            xC(ZC, wC) < nC && (CC[zC] = {
              ...QC,
              pre: wC,
              post: bC
            })
          }
        }(wC);
        const bC = [];
        for (let qC = 0; qC < wC.length; qC++) {
          var nC, fC, oC;
          const CC = wC[qC],
            zC = null !== (nC = wC[qC - 1]) && void 0 !== nC ? nC : CC,
            QC = null !== (fC = wC[qC + 1]) && void 0 !== fC ? fC : CC,
            FC = null !== (oC = wC[qC + 2]) && void 0 !== oC ? oC : QC;
          bC.push({
            ...CC,
            ...ZC(zC.post, zC.timeFraction, CC.post, CC.timeFraction, QC.pre, QC.timeFraction, FC.pre, FC.timeFraction)
          })
        }
        return bC
      }
      createAnimationFrameWithoutPrecomputes(CC, zC, ZC) {
        let QC, wC, bC = null;
        if ("object" === typeof zC && "post" in zC) {
          var nC;
          bC = null !== (nC = zC.lerp_mode) && void 0 !== nC ? nC : null, wC = SC(zC.post, ZC), QC = zC.pre ? SC(zC.pre, ZC) : wC
        } else {
          const CC = SC(zC, ZC);
          wC = CC, QC = CC
        }
        return {
          timeFraction: CC,
          nb: this.createLerpMode(bC),
          pre: QC,
          post: wC
        }
      }
      createLerpMode(CC) {
        return null === CC ? QC.f.Linear : qC.LERP_MODE_SCHEMA_MAPPING[CC]
      }
    }

    function FC(CC) {
      return Number.isFinite(CC.timeFraction) && WC(CC.pre) && WC(CC.post)
    }

    function WC(CC) {
      return Number.isFinite(CC[0]) && Number.isFinite(CC[1]) && Number.isFinite(CC[2])
    }

    function NC(CC, zC, ZC, QC, wC, bC, nC, fC) {
      const oC = bC - zC,
        qC = bC - QC,
        FC = fC - QC,
        WC = [null, null, null];
      for (let NC = 0; NC < WC.length; NC++) WC[NC] = MC(CC[NC], ZC[NC], wC[NC], nC[NC], oC, FC);
      return {
        fb: qC,
        ob: WC
      }
    }

    function MC(CC, zC, ZC, QC, bC, nC) {
      return {
        Fb: wC.c.computeShortestRotation(CC, ZC) / bC,
        Wb: wC.c.computeShortestRotation(zC, QC) / nC,
        delta: wC.c.computeShortestRotation(zC, ZC)
      }
    }

    function gC(CC, zC, ZC, QC, wC, bC, nC, fC) {
      const oC = bC - zC,
        qC = bC - QC,
        FC = fC - QC,
        WC = [null, null, null];
      for (let NC = 0; NC < WC.length; NC++) WC[NC] = {
        Fb: (wC[NC] - CC[NC]) / oC,
        Wb: (nC[NC] - ZC[NC]) / FC,
        delta: wC[NC] - ZC[NC]
      };
      return {
        fb: qC,
        ob: WC
      }
    }

    function SC(CC, zC) {
      return null === zC ? CC : zC(CC)
    }

    function pC(CC) {
      const [zC, ZC, QC] = CC, nC = -(0, bC.j)(zC), fC = -(0, bC.j)(ZC), oC = (0, bC.j)(QC), qC = wC.c.quaternionFromEulerZYX(nC, fC, oC);
      return wC.c.eulerYXZFromQuaternion(qC)
    }
    qC.LERP_MODE_SCHEMA_MAPPING = {
      linear: QC.f.Linear,
      catmullrom: QC.f.CatmullRomSpline
    };
    const PC = 1 / 16;

    function GC(CC) {
      return [-CC[0] * PC, CC[1] * PC, CC[2] * PC]
    }

    function RC(CC) {
      const [zC, ZC, QC] = CC;
      return [zC >= 0 ? Math.PI - zC : -Math.PI - zC, AC(ZC + Math.PI), AC(QC + Math.PI)]
    }

    function AC(CC) {
      return wC.c.mod(CC + Math.PI, 2 * Math.PI) - Math.PI
    }

    function xC(CC, zC) {
      return Math.abs(wC.c.computeShortestRotation(CC[0], zC[0])) + Math.abs(wC.c.computeShortestRotation(CC[1], zC[1])) + Math.abs(wC.c.computeShortestRotation(CC[2], zC[2]))
    }
    const JC = new oC
  },
  37014: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => nC,
      d: () => bC,
      f: () => QC,
      g: () => wC
    });
    let QC = function(CC) {
        return CC[CC.Linear = 0] = "Linear", CC[CC.CatmullRomSpline = 1] = "CatmullRomSpline", CC
      }({}),
      wC = function(CC) {
        return CC[CC.NoLoop = 0] = "NoLoop", CC[CC.LoopOnLastFrame = 1] = "LoopOnLastFrame", CC[CC.HoldOnLastFrame = 2] = "HoldOnLastFrame", CC
      }({}),
      bC = function(CC) {
        return CC[CC.Movement = 0] = "Movement", CC[CC.Action = 1] = "Action", CC[CC.Emote = 2] = "Emote", CC[CC.Custom = 3] = "Custom", CC
      }({}),
      nC = function(CC) {
        return CC[CC.Start = 0] = "Start", CC[CC.Stop = 1] = "Stop", CC
      }({})
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);