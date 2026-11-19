export const id = 191;
export const ids = [191];
export const modules = {
  40582: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => iD
    });
    var ID = cD(53),
      pD = cD(2621);

    function iD(DD, CD, cD) {
      const iD = (0, ID.useRef)(null),
        {
          width: fD,
          height: bD
        } = (0, pD.e)(DD);
      (0, ID.useEffect)((() => {
        const cD = CD(DD.current);
        return iD.current = cD, () => {
          cD.close(), iD.current = null
        }
      }), [DD, CD]), (0, ID.useEffect)((() => {
        fD <= 0 || bD <= 0 || iD.current.resize(fD, bD)
      }), [fD, bD]), (0, ID.useEffect)((() => {
        iD.current.show(cD)
      }), [cD])
    }
  },
  40591: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => yD,
      e: () => BD,
      g: () => QD
    });
    var ID = cD(36517),
      pD = cD(38009);

    function iD(DD, CD) {
      let [cD, ID, pD] = DD;
      return [0, .5, 1].map((DD => ({
        timeFraction: DD,
        rotation: {
          Ui: "catmull-rom-spline",
          point: [cD, ID, pD + (.5 === DD ? CD : 0)]
        }
      })))
    }

    function fD(DD, CD, cD) {
      return {
        mi: 3200,
        loop: !0,
        Oi: {
          Root: {
            timeline: [0, .5, 1].map((DD => ({
              timeFraction: DD,
              position: {
                Ui: "catmull-rom-spline",
                point: [0, .5 === DD ? .18 : 0, 0]
              }
            })))
          },
          HeadMesh: {
            timeline: [0, .25, .75, 1].map((DD => ({
              timeFraction: DD,
              rotation: {
                Ui: "catmull-rom-spline",
                point: [0, .25 === DD ? .12 : .75 === DD ? -.12 : 0, 0]
              }
            })))
          },
          ArmLeftMesh: {
            timeline: iD(DD, cD)
          },
          ArmRightMesh: {
            timeline: iD(CD, -cD)
          }
        }
      }
    }
    const bD = fD([0, 0, 0], [0, 0, 0], .07),
      QD = (0, pD.e)((0, ID.f)(bD), "mobIdle"),
      wD = fD([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
      SD = fD([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
      BD = (0, pD.e)((0, ID.f)(wD), "gunReady"),
      yD = (0, pD.e)((0, ID.f)(SD), "gunAimed")
  },
  38009: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => pD,
      f: () => iD
    });
    const ID = new WeakMap;

    function pD(DD, CD) {
      return ID.set(DD, CD), DD
    }

    function iD(DD) {
      var CD;
      return null !== (CD = ID.get(DD)) && void 0 !== CD ? CD : null
    }
  },
  9080: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => fD,
      g: () => pD,
      h: () => SD
    });
    var ID = cD(1562);

    function pD(DD) {
      var CD;
      return {
        ...fD.store,
        yaw: fD.store.yaw + (null !== (CD = ID.c[DD].previewYaw) && void 0 !== CD ? CD : 0)
      }
    }
    const iD = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      fD = {
        player: iD,
        store: {
          ...iD,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function bD(DD, CD) {
      DD instanceof Promise ? DD.then(CD).catch((DD => {
        console.error("Couldn't open the preview", DD)
      })) : CD(DD)
    }
    class QD {
      constructor(DD) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, bD(DD, (DD => {
          this.closed ? DD.close() : (this.opened = DD, null !== this.size && DD.resize(this.size.width, this.size.height), null !== this.view && DD.show(this.view))
        }))
      }
      show(DD) {
        var CD;
        this.view = DD, null === (CD = this.opened) || void 0 === CD || CD.show(DD)
      }
      resize(DD, CD) {
        var cD;
        this.size = {
          width: DD,
          height: CD
        }, null === (cD = this.opened) || void 0 === cD || cD.resize(DD, CD)
      }
      close() {
        var DD;
        this.closed = !0, null === (DD = this.opened) || void 0 === DD || DD.close(), this.opened = null
      }
    }
    class wD {
      constructor(DD) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(DD).then((DD => DD.ready)), bD(DD, (DD => {
          this.closed ? DD.close() : (this.opened = DD, null !== this.size && DD.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var DD, CD;
        return null !== (DD = null === (CD = this.opened) || void 0 === CD ? void 0 : CD.isReady()) && void 0 !== DD && DD
      }
      setCosmetic(DD, CD) {
        var cD;
        null === (cD = this.opened) || void 0 === cD || cD.setCosmetic(DD, CD)
      }
      playEmote(DD) {
        var CD;
        null === (CD = this.opened) || void 0 === CD || CD.playEmote(DD)
      }
      setOrbit(DD) {
        var CD;
        null === (CD = this.opened) || void 0 === CD || CD.setOrbit(DD)
      }
      resetCamera() {
        var DD;
        null === (DD = this.opened) || void 0 === DD || DD.resetCamera()
      }
      async untilDrawn(DD) {
        var CD;
        await this.ready, await (null === (CD = this.opened) || void 0 === CD ? void 0 : CD.untilDrawn(DD))
      }
      resize(DD, CD) {
        var cD;
        this.size = {
          width: DD,
          height: CD
        }, null === (cD = this.opened) || void 0 === cD || cD.resize(DD, CD)
      }
      close() {
        var DD;
        this.closed = !0, null === (DD = this.opened) || void 0 === DD || DD.close(), this.opened = null
      }
    }
    const SD = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(DD) {
        this.host = DD
      }
      setDefaultHost(DD) {
        this.makeDefault = DD
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(DD) {
        return new QD(this.current().openMob(DD))
      }
      openPet(DD) {
        return new QD(this.current().openPet(DD))
      }
      openMobLineup(DD) {
        return new QD(this.current().openMobLineup(DD))
      }
      openCharacter(DD, CD) {
        return new wD(this.current().openCharacter(DD, CD))
      }
    }
  },
  9074: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => ID.c,
      e: () => ID.g,
      f: () => ID.h
    });
    var ID = cD(9080);
    class pD {
      constructor(DD) {
        this.load = DD, this.loaded = null, this.loading = null
      }
      run(DD) {
        return null !== this.loaded ? DD(this.loaded) : (this.loading ??= this.load().then((DD => (this.loaded = DD, DD)), (DD => {
          throw this.loading = null, DD
        })), this.loading.then(DD))
      }
    }
    class iD {
      constructor() {
        this.mobScene = new pD((() => Promise.all([cD.e(69), cD.e(226), cD.e(225), cD.e(244), cD.e(94), cD.e(245), cD.e(72), cD.e(71), cD.e(242), cD.e(70), cD.e(252), cD.e(246), cD.e(251), cD.e(249), cD.e(241), cD.e(218), cD.e(264), cD.e(222), cD.e(236), cD.e(247), cD.e(250), cD.e(74), cD.e(196), cD.e(215), cD.e(219), cD.e(93), cD.e(113), cD.e(234), cD.e(73), cD.e(112), cD.e(153)]).then((() => cD(40157))))), this.characterScene = new pD((() => Promise.all([cD.e(69), cD.e(226), cD.e(225), cD.e(244), cD.e(94), cD.e(245), cD.e(72), cD.e(71), cD.e(242), cD.e(70), cD.e(252), cD.e(246), cD.e(251), cD.e(249), cD.e(241), cD.e(218), cD.e(264), cD.e(222), cD.e(236), cD.e(247), cD.e(250), cD.e(74), cD.e(196), cD.e(215), cD.e(219), cD.e(93), cD.e(113), cD.e(234), cD.e(73), cD.e(112), cD.e(152)]).then((() => cD(40228)))))
      }
      openMob(DD) {
        return this.mobScene.run((CD => CD.openMobPreview(DD)))
      }
      openPet(DD) {
        return this.mobScene.run((CD => CD.openPetPreview(DD)))
      }
      openMobLineup(DD) {
        return this.mobScene.run((CD => CD.openMobLineupPreview(DD)))
      }
      openCharacter(DD, CD) {
        return this.characterScene.run((cD => cD.openCharacterPreview(DD, CD)))
      }
    }
    ID.h.setDefaultHost((() => new iD))
  },
  40845: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      FrontlineMvpLineup: () => BD
    });
    var ID = cD(53),
      pD = cD(1049),
      iD = cD.n(pD),
      fD = cD(9074),
      bD = cD(40591),
      QD = cD(40582),
      wD = cD(1093);

    function SD(DD) {
      return fD.f.openMobLineup(DD)
    }
    const BD = (0, ID.memo)((function(DD) {
      let {
        players: CD,
        className: cD
      } = DD;
      const pD = (0, ID.useRef)(null),
        fD = (0, ID.useMemo)((() => CD.map((DD => {
          let {
            cosmetics: CD,
            size: cD,
            heldGun: ID
          } = DD;
          return {
            cosmetics: CD,
            size: cD,
            gH: ID.name,
            animation: ID.aimed ? bD.c : bD.e
          }
        }))), [CD]),
        BD = function(DD) {
          const [CD, cD] = (0, ID.useState)([]);
          return (0, ID.useEffect)((() => {
            cD(DD.map((() => !1)));
            const CD = DD.map(((DD, CD) => {
              let {
                showAfterMs: ID
              } = DD;
              return window.setTimeout((() => {
                cD((DD => DD.map(((DD, cD) => DD || cD === CD))))
              }), ID)
            }));
            return () => {
              for (const DD of CD) window.clearTimeout(DD)
            }
          }), [DD]), CD
        }(CD),
        yD = (0, ID.useMemo)((() => ({
          figures: fD,
          shown: BD
        })), [fD, BD]);
      return (0, QD.e)(pD, SD, yD), (0, wD.jsx)("div", {
        className: iD()("MobPreview", cD),
        ref: pD
      })
    }))
  },
  36517: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => bD,
      f: () => fD
    });
    var ID = cD(36501),
      pD = cD(326),
      iD = cD(1865);

    function fD(DD) {
      if ("mi" in DD) return nD.createAnimationScript(DD);
      return new wD(DD).createAnimationScript()
    }

    function bD(DD, CD, cD, pD) {
      const iD = DD.mi <= 0 ? 1 : CD + cD * Math.max(0, pD) / DD.mi;
      return DD.ni === ID.h.LoopOnLastFrame ? iD % 1 : DD.ni === ID.h.NoLoop && iD >= 1 ? null : Math.min(1, iD)
    }
    class QD {
      createAnimationScript(DD) {
        const {
          mi: CD,
          loop: cD,
          Oi: ID
        } = DD;
        return {
          mi: Math.round(CD),
          ni: this.createLoopMode(null !== cD && void 0 !== cD && cD),
          Oi: this.createNodeSkeletonAnimationScript(null !== ID && void 0 !== ID ? ID : null)
        }
      }
      createLoopMode(DD) {
        switch (DD) {
          case !1:
            return ID.h.NoLoop;
          case !0:
            return ID.h.LoopOnLastFrame;
          case "hold-on-last-frame":
            return ID.h.HoldOnLastFrame
        }
        throw new Error(`Invalid loop mode schema: ${DD}`)
      }
      createNodeSkeletonAnimationScript(DD) {
        if (null === DD) return null;
        const CD = {};
        for (const cD in DD) {
          const ID = DD[cD];
          CD[cD] = this.createNodeAnimationScript(ID)
        }
        return CD
      }
      createNodeAnimationScript(DD) {
        const {
          timeline: CD
        } = DD, cD = CD.filter((DD => Number.isFinite(DD.timeFraction)));
        return cD.sort(((DD, CD) => DD.timeFraction - CD.timeFraction)), {
          rotation: this.createTimelineFromKeyframes(cD, "rotation", yD),
          position: this.createTimelineFromKeyframes(cD, "position", tD)
        }
      }
      createTimelineFromKeyframes(DD, CD, cD) {
        const ID = [];
        for (const QD of DD) {
          const DD = QD[CD];
          if (DD) {
            const CD = this.createAnimationFrameWithoutPrecomputes(QD.timeFraction, DD);
            SD(CD) && ID.push(CD)
          }
        }
        const pD = [];
        for (let QD = 0; QD < ID.length; QD++) {
          var iD, fD, bD;
          const DD = ID[QD],
            CD = null !== (iD = ID[QD - 1]) && void 0 !== iD ? iD : DD,
            wD = null !== (fD = ID[QD + 1]) && void 0 !== fD ? fD : DD,
            SD = null !== (bD = ID[QD + 2]) && void 0 !== bD ? bD : wD;
          pD.push({
            ...DD,
            ...cD(CD.post, CD.timeFraction, DD.post, DD.timeFraction, wD.pre, wD.timeFraction, SD.pre, SD.timeFraction)
          })
        }
        return pD
      }
      createAnimationFrameWithoutPrecomputes(DD, CD) {
        let cD, ID, pD = null;
        var iD;
        if ("object" === typeof CD && "point" in CD) pD = null !== (iD = CD.Ui) && void 0 !== iD ? iD : null, cD = CD.point, ID = CD.point;
        else if ("object" === typeof CD && "pre" in CD) {
          var fD;
          pD = null !== (fD = CD.Ui) && void 0 !== fD ? fD : null, cD = CD.pre, ID = CD.post
        } else cD = CD, ID = CD;
        return {
          timeFraction: DD,
          Ui: this.createLerpMode(pD),
          pre: cD,
          post: ID
        }
      }
      createLerpMode(DD) {
        return null === DD ? ID.e.Linear : QD.LERP_MODE_SCHEMA_MAPPING[DD]
      }
    }
    QD.LERP_MODE_SCHEMA_MAPPING = {
      linear: ID.e.Linear,
      "catmull-rom-spline": ID.e.CatmullRomSpline
    };
    class wD {
      constructor(DD) {
        this.animationSchema = DD
      }
      createAnimationScript() {
        const {
          animation_length: DD,
          loop: CD,
          bones: cD
        } = this.animationSchema;
        return {
          mi: Math.round(1e3 * DD),
          ni: this.createLoopMode(null !== CD && void 0 !== CD && CD),
          Oi: this.createNodeSkeletonAnimationScript(null !== cD && void 0 !== cD ? cD : null)
        }
      }
      createLoopMode(DD) {
        switch (DD) {
          case !1:
            return ID.h.NoLoop;
          case !0:
            return ID.h.LoopOnLastFrame;
          case "hold_on_last_frame":
            return ID.h.HoldOnLastFrame
        }
        throw new Error(`Invalid Blockbench loop mode schema: ${DD}`)
      }
      createNodeSkeletonAnimationScript(DD) {
        if (null === DD) return null;
        const CD = {};
        for (const cD in DD) {
          const ID = DD[cD];
          CD[cD] = this.createNodeAnimationScript(ID)
        }
        return CD
      }
      createNodeAnimationScript(DD) {
        const {
          rotation: CD,
          position: cD
        } = DD;
        return {
          rotation: this.createAnimationTimeline(null !== CD && void 0 !== CD ? CD : null, oD, yD, !0),
          position: this.createAnimationTimeline(null !== cD && void 0 !== cD ? cD : null, ND, tD, !1)
        }
      }
      createAnimationTimeline(DD, CD, cD, ID) {
        if (null === DD) return [];
        if (Array.isArray(DD)) {
          DD = {
            "0.0": DD
          }
        }
        const pD = Object.entries(DD).map((DD => {
          let [cD, ID] = DD;
          const pD = Number(cD) / this.animationSchema.animation_length;
          return this.createAnimationFrameWithoutPrecomputes(pD, ID, CD)
        })).filter(SD);
        pD.sort(((DD, CD) => DD.timeFraction - CD.timeFraction)), ID && function(DD) {
          for (let CD = 1; CD < DD.length; CD++) {
            const cD = DD[CD - 1].post,
              ID = DD[CD],
              pD = gD(ID.pre),
              iD = gD(ID.post),
              fD = mD(cD, ID.pre);
            mD(cD, pD) < fD && (DD[CD] = {
              ...ID,
              pre: pD,
              post: iD
            })
          }
        }(pD);
        const iD = [];
        for (let wD = 0; wD < pD.length; wD++) {
          var fD, bD, QD;
          const DD = pD[wD],
            CD = null !== (fD = pD[wD - 1]) && void 0 !== fD ? fD : DD,
            ID = null !== (bD = pD[wD + 1]) && void 0 !== bD ? bD : DD,
            SD = null !== (QD = pD[wD + 2]) && void 0 !== QD ? QD : ID;
          iD.push({
            ...DD,
            ...cD(CD.post, CD.timeFraction, DD.post, DD.timeFraction, ID.pre, ID.timeFraction, SD.pre, SD.timeFraction)
          })
        }
        return iD
      }
      createAnimationFrameWithoutPrecomputes(DD, CD, cD) {
        let ID, pD, iD = null;
        if ("object" === typeof CD && "post" in CD) {
          var fD;
          iD = null !== (fD = CD.lerp_mode) && void 0 !== fD ? fD : null, pD = ZD(CD.post, cD), ID = CD.pre ? ZD(CD.pre, cD) : pD
        } else {
          const DD = ZD(CD, cD);
          pD = DD, ID = DD
        }
        return {
          timeFraction: DD,
          Ui: this.createLerpMode(iD),
          pre: ID,
          post: pD
        }
      }
      createLerpMode(DD) {
        return null === DD ? ID.e.Linear : wD.LERP_MODE_SCHEMA_MAPPING[DD]
      }
    }

    function SD(DD) {
      return Number.isFinite(DD.timeFraction) && BD(DD.pre) && BD(DD.post)
    }

    function BD(DD) {
      return Number.isFinite(DD[0]) && Number.isFinite(DD[1]) && Number.isFinite(DD[2])
    }

    function yD(DD, CD, cD, ID, pD, iD, fD, bD) {
      const QD = iD - CD,
        wD = iD - ID,
        SD = bD - ID,
        BD = [null, null, null];
      for (let yD = 0; yD < BD.length; yD++) BD[yD] = MD(DD[yD], cD[yD], pD[yD], fD[yD], QD, SD);
      return {
        xi: wD,
        qi: BD
      }
    }

    function MD(DD, CD, cD, ID, iD, fD) {
      return {
        Ki: pD.e.computeShortestRotation(DD, cD) / iD,
        ai: pD.e.computeShortestRotation(CD, ID) / fD,
        delta: pD.e.computeShortestRotation(CD, cD)
      }
    }

    function tD(DD, CD, cD, ID, pD, iD, fD, bD) {
      const QD = iD - CD,
        wD = iD - ID,
        SD = bD - ID,
        BD = [null, null, null];
      for (let yD = 0; yD < BD.length; yD++) BD[yD] = {
        Ki: (pD[yD] - DD[yD]) / QD,
        ai: (fD[yD] - cD[yD]) / SD,
        delta: pD[yD] - cD[yD]
      };
      return {
        xi: wD,
        qi: BD
      }
    }

    function ZD(DD, CD) {
      return null === CD ? DD : CD(DD)
    }

    function oD(DD) {
      const [CD, cD, ID] = DD, fD = -(0, iD.o)(CD), bD = -(0, iD.o)(cD), QD = (0, iD.o)(ID), wD = pD.e.quaternionFromEulerZYX(fD, bD, QD);
      return pD.e.eulerYXZFromQuaternion(wD)
    }
    wD.LERP_MODE_SCHEMA_MAPPING = {
      linear: ID.e.Linear,
      catmullrom: ID.e.CatmullRomSpline
    };
    const vD = 1 / 16;

    function ND(DD) {
      return [-DD[0] * vD, DD[1] * vD, DD[2] * vD]
    }

    function gD(DD) {
      const [CD, cD, ID] = DD;
      return [CD >= 0 ? Math.PI - CD : -Math.PI - CD, XD(cD + Math.PI), XD(ID + Math.PI)]
    }

    function XD(DD) {
      return pD.e.mod(DD + Math.PI, 2 * Math.PI) - Math.PI
    }

    function mD(DD, CD) {
      return Math.abs(pD.e.computeShortestRotation(DD[0], CD[0])) + Math.abs(pD.e.computeShortestRotation(DD[1], CD[1])) + Math.abs(pD.e.computeShortestRotation(DD[2], CD[2]))
    }
    const nD = new QD
  },
  36501: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => fD,
      d: () => iD,
      e: () => ID,
      h: () => pD
    });
    let ID = function(DD) {
        return DD[DD.Linear = 0] = "Linear", DD[DD.CatmullRomSpline = 1] = "CatmullRomSpline", DD
      }({}),
      pD = function(DD) {
        return DD[DD.NoLoop = 0] = "NoLoop", DD[DD.LoopOnLastFrame = 1] = "LoopOnLastFrame", DD[DD.HoldOnLastFrame = 2] = "HoldOnLastFrame", DD
      }({}),
      iD = function(DD) {
        return DD[DD.Movement = 0] = "Movement", DD[DD.Action = 1] = "Action", DD[DD.Emote = 2] = "Emote", DD[DD.Custom = 3] = "Custom", DD
      }({}),
      fD = function(DD) {
        return DD[DD.Start = 0] = "Start", DD[DD.Stop = 1] = "Stop", DD
      }({})
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);