export const id = 199;
export const ids = [199];
export const modules = {
  41421: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => KD
    });
    var pD = wD(58),
      sD = wD(2750);

    function KD(DD, zD, wD) {
      const KD = (0, pD.useRef)(null),
        {
          width: rD,
          height: LD
        } = (0, sD.d)(DD);
      (0, pD.useEffect)((() => {
        const wD = zD(DD.current);
        return KD.current = wD, () => {
          wD.close(), KD.current = null
        }
      }), [DD, zD]), (0, pD.useEffect)((() => {
        rD <= 0 || LD <= 0 || KD.current.resize(rD, LD)
      }), [rD, LD]), (0, pD.useEffect)((() => {
        KD.current.show(wD)
      }), [wD])
    }
  },
  41423: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => UD,
      d: () => AD,
      e: () => cD
    });
    var pD = wD(37164),
      sD = wD(38621);

    function KD(DD, zD) {
      let [wD, pD, sD] = DD;
      return [0, .5, 1].map((DD => ({
        timeFraction: DD,
        rotation: {
          XK: "catmull-rom-spline",
          point: [wD, pD, sD + (.5 === DD ? zD : 0)]
        }
      })))
    }

    function rD(DD, zD, wD) {
      return {
        nK: 3200,
        loop: !0,
        JK: {
          Root: {
            timeline: [0, .5, 1].map((DD => ({
              timeFraction: DD,
              position: {
                XK: "catmull-rom-spline",
                point: [0, .5 === DD ? .18 : 0, 0]
              }
            })))
          },
          HeadMesh: {
            timeline: [0, .25, .75, 1].map((DD => ({
              timeFraction: DD,
              rotation: {
                XK: "catmull-rom-spline",
                point: [0, .25 === DD ? .12 : .75 === DD ? -.12 : 0, 0]
              }
            })))
          },
          ArmLeftMesh: {
            timeline: KD(DD, wD)
          },
          ArmRightMesh: {
            timeline: KD(zD, -wD)
          }
        }
      }
    }
    const LD = rD([0, 0, 0], [0, 0, 0], .07),
      cD = (0, sD.d)((0, pD.f)(LD), "mobIdle"),
      gD = rD([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
      RD = rD([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
      AD = (0, sD.d)((0, pD.f)(gD), "gunReady"),
      UD = (0, sD.d)((0, pD.f)(RD), "gunAimed")
  },
  38621: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => sD,
      g: () => KD
    });
    const pD = new WeakMap;

    function sD(DD, zD) {
      return pD.set(DD, zD), DD
    }

    function KD(DD) {
      var zD;
      return null !== (zD = pD.get(DD)) && void 0 !== zD ? zD : null
    }
  },
  34238: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => rD,
      h: () => sD,
      j: () => RD
    });
    var pD = wD(1570);

    function sD(DD) {
      var zD;
      return {
        ...rD.store,
        yaw: rD.store.yaw + (null !== (zD = pD.b[DD].previewYaw) && void 0 !== zD ? zD : 0)
      }
    }
    const KD = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      rD = {
        player: KD,
        store: {
          ...KD,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function LD(DD, zD) {
      DD instanceof Promise ? DD.then(zD).catch((DD => {
        console.error("Couldn't open the preview", DD)
      })) : zD(DD)
    }
    class cD {
      constructor(DD) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, LD(DD, (DD => {
          this.closed ? DD.close() : (this.opened = DD, null !== this.size && DD.resize(this.size.width, this.size.height), null !== this.view && DD.show(this.view))
        }))
      }
      show(DD) {
        var zD;
        this.view = DD, null === (zD = this.opened) || void 0 === zD || zD.show(DD)
      }
      resize(DD, zD) {
        var wD;
        this.size = {
          width: DD,
          height: zD
        }, null === (wD = this.opened) || void 0 === wD || wD.resize(DD, zD)
      }
      close() {
        var DD;
        this.closed = !0, null === (DD = this.opened) || void 0 === DD || DD.close(), this.opened = null
      }
    }
    class gD {
      constructor(DD) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(DD).then((DD => DD.ready)), LD(DD, (DD => {
          this.closed ? DD.close() : (this.opened = DD, null !== this.size && DD.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var DD, zD;
        return null !== (DD = null === (zD = this.opened) || void 0 === zD ? void 0 : zD.isReady()) && void 0 !== DD && DD
      }
      setCosmetic(DD, zD) {
        var wD;
        null === (wD = this.opened) || void 0 === wD || wD.setCosmetic(DD, zD)
      }
      playEmote(DD) {
        var zD;
        null === (zD = this.opened) || void 0 === zD || zD.playEmote(DD)
      }
      setOrbit(DD) {
        var zD;
        null === (zD = this.opened) || void 0 === zD || zD.setOrbit(DD)
      }
      resetCamera() {
        var DD;
        null === (DD = this.opened) || void 0 === DD || DD.resetCamera()
      }
      async untilDrawn(DD) {
        var zD;
        await this.ready, await (null === (zD = this.opened) || void 0 === zD ? void 0 : zD.untilDrawn(DD))
      }
      resize(DD, zD) {
        var wD;
        this.size = {
          width: DD,
          height: zD
        }, null === (wD = this.opened) || void 0 === wD || wD.resize(DD, zD)
      }
      close() {
        var DD;
        this.closed = !0, null === (DD = this.opened) || void 0 === DD || DD.close(), this.opened = null
      }
    }
    const RD = new class {
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
        return new cD(this.current().openMob(DD))
      }
      openPet(DD) {
        return new cD(this.current().openPet(DD))
      }
      openMobLineup(DD) {
        return new cD(this.current().openMobLineup(DD))
      }
      openCharacter(DD, zD) {
        return new gD(this.current().openCharacter(DD, zD))
      }
    }
  },
  34233: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => pD.d,
      c: () => pD.h,
      e: () => pD.j
    });
    var pD = wD(34238);
    class sD {
      constructor(DD) {
        this.load = DD, this.loaded = null, this.loading = null
      }
      run(DD) {
        return null !== this.loaded ? DD(this.loaded) : (this.loading ??= this.load().then((DD => (this.loaded = DD, DD)), (DD => {
          throw this.loading = null, DD
        })), this.loading.then(DD))
      }
    }
    class KD {
      constructor() {
        this.mobScene = new sD((() => Promise.all([wD.e(72), wD.e(232), wD.e(231), wD.e(254), wD.e(96), wD.e(255), wD.e(75), wD.e(74), wD.e(252), wD.e(73), wD.e(262), wD.e(256), wD.e(261), wD.e(259), wD.e(251), wD.e(274), wD.e(228), wD.e(244), wD.e(257), wD.e(260), wD.e(77), wD.e(186), wD.e(222), wD.e(95), wD.e(225), wD.e(240), wD.e(120), wD.e(241), wD.e(76), wD.e(119), wD.e(246)]).then((() => wD(40998))))), this.characterScene = new sD((() => Promise.all([wD.e(72), wD.e(232), wD.e(231), wD.e(254), wD.e(96), wD.e(255), wD.e(75), wD.e(74), wD.e(252), wD.e(73), wD.e(262), wD.e(256), wD.e(261), wD.e(259), wD.e(251), wD.e(274), wD.e(228), wD.e(244), wD.e(257), wD.e(260), wD.e(77), wD.e(186), wD.e(222), wD.e(95), wD.e(225), wD.e(240), wD.e(120), wD.e(241), wD.e(76), wD.e(119), wD.e(245)]).then((() => wD(41087)))))
      }
      openMob(DD) {
        return this.mobScene.run((zD => zD.openMobPreview(DD)))
      }
      openPet(DD) {
        return this.mobScene.run((zD => zD.openPetPreview(DD)))
      }
      openMobLineup(DD) {
        return this.mobScene.run((zD => zD.openMobLineupPreview(DD)))
      }
      openCharacter(DD, zD) {
        return this.characterScene.run((wD => wD.openCharacterPreview(DD, zD)))
      }
    }
    pD.j.setDefaultHost((() => new KD))
  },
  41663: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      FrontlineMvpLineup: () => AD
    });
    var pD = wD(58),
      sD = wD(1044),
      KD = wD.n(sD),
      rD = wD(34233),
      LD = wD(41423),
      cD = wD(41421),
      gD = wD(1096);

    function RD(DD) {
      return rD.e.openMobLineup(DD)
    }
    const AD = (0, pD.memo)((function(DD) {
      let {
        players: zD,
        className: wD
      } = DD;
      const sD = (0, pD.useRef)(null),
        rD = (0, pD.useMemo)((() => zD.map((DD => {
          let {
            cosmetics: zD,
            size: wD,
            heldGun: pD
          } = DD;
          return {
            cosmetics: zD,
            size: wD,
            lE: pD.name,
            animation: pD.aimed ? LD.c : LD.d
          }
        }))), [zD]),
        AD = function(DD) {
          const [zD, wD] = (0, pD.useState)([]);
          return (0, pD.useEffect)((() => {
            wD(DD.map((() => !1)));
            const zD = DD.map(((DD, zD) => {
              let {
                showAfterMs: pD
              } = DD;
              return window.setTimeout((() => {
                wD((DD => DD.map(((DD, wD) => DD || wD === zD))))
              }), pD)
            }));
            return () => {
              for (const DD of zD) window.clearTimeout(DD)
            }
          }), [DD]), zD
        }(zD),
        UD = (0, pD.useMemo)((() => ({
          figures: rD,
          shown: AD
        })), [rD, AD]);
      return (0, cD.c)(sD, RD, UD), (0, gD.jsx)("div", {
        className: KD()("MobPreview", wD),
        ref: sD
      })
    }))
  },
  37164: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => LD,
      f: () => rD
    });
    var pD = wD(37151),
      sD = wD(351),
      KD = wD(1886);

    function rD(DD) {
      if ("nK" in DD) return ED.createAnimationScript(DD);
      return new gD(DD).createAnimationScript()
    }

    function LD(DD, zD, wD, sD) {
      const KD = DD.nK <= 0 ? 1 : zD + wD * Math.max(0, sD) / DD.nK;
      return DD.MK === pD.h.LoopOnLastFrame ? KD % 1 : DD.MK === pD.h.NoLoop && KD >= 1 ? null : Math.min(1, KD)
    }
    class cD {
      createAnimationScript(DD) {
        const {
          nK: zD,
          loop: wD,
          JK: pD
        } = DD;
        return {
          nK: Math.round(zD),
          MK: this.createLoopMode(null !== wD && void 0 !== wD && wD),
          JK: this.createNodeSkeletonAnimationScript(null !== pD && void 0 !== pD ? pD : null)
        }
      }
      createLoopMode(DD) {
        switch (DD) {
          case !1:
            return pD.h.NoLoop;
          case !0:
            return pD.h.LoopOnLastFrame;
          case "hold-on-last-frame":
            return pD.h.HoldOnLastFrame
        }
        throw new Error(`Invalid loop mode schema: ${DD}`)
      }
      createNodeSkeletonAnimationScript(DD) {
        if (null === DD) return null;
        const zD = {};
        for (const wD in DD) {
          const pD = DD[wD];
          zD[wD] = this.createNodeAnimationScript(pD)
        }
        return zD
      }
      createNodeAnimationScript(DD) {
        const {
          timeline: zD
        } = DD, wD = zD.filter((DD => Number.isFinite(DD.timeFraction)));
        return wD.sort(((DD, zD) => DD.timeFraction - zD.timeFraction)), {
          rotation: this.createTimelineFromKeyframes(wD, "rotation", UD),
          position: this.createTimelineFromKeyframes(wD, "position", ID)
        }
      }
      createTimelineFromKeyframes(DD, zD, wD) {
        const pD = [];
        for (const cD of DD) {
          const DD = cD[zD];
          if (DD) {
            const zD = this.createAnimationFrameWithoutPrecomputes(cD.timeFraction, DD);
            RD(zD) && pD.push(zD)
          }
        }
        const sD = [];
        for (let cD = 0; cD < pD.length; cD++) {
          var KD, rD, LD;
          const DD = pD[cD],
            zD = null !== (KD = pD[cD - 1]) && void 0 !== KD ? KD : DD,
            gD = null !== (rD = pD[cD + 1]) && void 0 !== rD ? rD : DD,
            RD = null !== (LD = pD[cD + 2]) && void 0 !== LD ? LD : gD;
          sD.push({
            ...DD,
            ...wD(zD.post, zD.timeFraction, DD.post, DD.timeFraction, gD.pre, gD.timeFraction, RD.pre, RD.timeFraction)
          })
        }
        return sD
      }
      createAnimationFrameWithoutPrecomputes(DD, zD) {
        let wD, pD, sD = null;
        var KD;
        if ("object" === typeof zD && "point" in zD) sD = null !== (KD = zD.XK) && void 0 !== KD ? KD : null, wD = zD.point, pD = zD.point;
        else if ("object" === typeof zD && "pre" in zD) {
          var rD;
          sD = null !== (rD = zD.XK) && void 0 !== rD ? rD : null, wD = zD.pre, pD = zD.post
        } else wD = zD, pD = zD;
        return {
          timeFraction: DD,
          XK: this.createLerpMode(sD),
          pre: wD,
          post: pD
        }
      }
      createLerpMode(DD) {
        return null === DD ? pD.e.Linear : cD.LERP_MODE_SCHEMA_MAPPING[DD]
      }
    }
    cD.LERP_MODE_SCHEMA_MAPPING = {
      linear: pD.e.Linear,
      "catmull-rom-spline": pD.e.CatmullRomSpline
    };
    class gD {
      constructor(DD) {
        this.animationSchema = DD
      }
      createAnimationScript() {
        const {
          animation_length: DD,
          loop: zD,
          bones: wD
        } = this.animationSchema;
        return {
          nK: Math.round(1e3 * DD),
          MK: this.createLoopMode(null !== zD && void 0 !== zD && zD),
          JK: this.createNodeSkeletonAnimationScript(null !== wD && void 0 !== wD ? wD : null)
        }
      }
      createLoopMode(DD) {
        switch (DD) {
          case !1:
            return pD.h.NoLoop;
          case !0:
            return pD.h.LoopOnLastFrame;
          case "hold_on_last_frame":
            return pD.h.HoldOnLastFrame
        }
        throw new Error(`Invalid Blockbench loop mode schema: ${DD}`)
      }
      createNodeSkeletonAnimationScript(DD) {
        if (null === DD) return null;
        const zD = {};
        for (const wD in DD) {
          const pD = DD[wD];
          zD[wD] = this.createNodeAnimationScript(pD)
        }
        return zD
      }
      createNodeAnimationScript(DD) {
        const {
          rotation: zD,
          position: wD
        } = DD;
        return {
          rotation: this.createAnimationTimeline(null !== zD && void 0 !== zD ? zD : null, GD, UD, !0),
          position: this.createAnimationTimeline(null !== wD && void 0 !== wD ? wD : null, nD, ID, !1)
        }
      }
      createAnimationTimeline(DD, zD, wD, pD) {
        if (null === DD) return [];
        if (Array.isArray(DD)) {
          DD = {
            "0.0": DD
          }
        }
        const sD = Object.entries(DD).map((DD => {
          let [wD, pD] = DD;
          const sD = Number(wD) / this.animationSchema.animation_length;
          return this.createAnimationFrameWithoutPrecomputes(sD, pD, zD)
        })).filter(RD);
        sD.sort(((DD, zD) => DD.timeFraction - zD.timeFraction)), pD && function(DD) {
          for (let zD = 1; zD < DD.length; zD++) {
            const wD = DD[zD - 1].post,
              pD = DD[zD],
              sD = MD(pD.pre),
              KD = MD(pD.post),
              rD = JD(wD, pD.pre);
            JD(wD, sD) < rD && (DD[zD] = {
              ...pD,
              pre: sD,
              post: KD
            })
          }
        }(sD);
        const KD = [];
        for (let gD = 0; gD < sD.length; gD++) {
          var rD, LD, cD;
          const DD = sD[gD],
            zD = null !== (rD = sD[gD - 1]) && void 0 !== rD ? rD : DD,
            pD = null !== (LD = sD[gD + 1]) && void 0 !== LD ? LD : DD,
            RD = null !== (cD = sD[gD + 2]) && void 0 !== cD ? cD : pD;
          KD.push({
            ...DD,
            ...wD(zD.post, zD.timeFraction, DD.post, DD.timeFraction, pD.pre, pD.timeFraction, RD.pre, RD.timeFraction)
          })
        }
        return KD
      }
      createAnimationFrameWithoutPrecomputes(DD, zD, wD) {
        let pD, sD, KD = null;
        if ("object" === typeof zD && "post" in zD) {
          var rD;
          KD = null !== (rD = zD.lerp_mode) && void 0 !== rD ? rD : null, sD = BD(zD.post, wD), pD = zD.pre ? BD(zD.pre, wD) : sD
        } else {
          const DD = BD(zD, wD);
          sD = DD, pD = DD
        }
        return {
          timeFraction: DD,
          XK: this.createLerpMode(KD),
          pre: pD,
          post: sD
        }
      }
      createLerpMode(DD) {
        return null === DD ? pD.e.Linear : gD.LERP_MODE_SCHEMA_MAPPING[DD]
      }
    }

    function RD(DD) {
      return Number.isFinite(DD.timeFraction) && AD(DD.pre) && AD(DD.post)
    }

    function AD(DD) {
      return Number.isFinite(DD[0]) && Number.isFinite(DD[1]) && Number.isFinite(DD[2])
    }

    function UD(DD, zD, wD, pD, sD, KD, rD, LD) {
      const cD = KD - zD,
        gD = KD - pD,
        RD = LD - pD,
        AD = [null, null, null];
      for (let UD = 0; UD < AD.length; UD++) AD[UD] = fD(DD[UD], wD[UD], sD[UD], rD[UD], cD, RD);
      return {
        VK: gD,
        PK: AD
      }
    }

    function fD(DD, zD, wD, pD, KD, rD) {
      return {
        xK: sD.c.computeShortestRotation(DD, wD) / KD,
        TK: sD.c.computeShortestRotation(zD, pD) / rD,
        delta: sD.c.computeShortestRotation(zD, wD)
      }
    }

    function ID(DD, zD, wD, pD, sD, KD, rD, LD) {
      const cD = KD - zD,
        gD = KD - pD,
        RD = LD - pD,
        AD = [null, null, null];
      for (let UD = 0; UD < AD.length; UD++) AD[UD] = {
        xK: (sD[UD] - DD[UD]) / cD,
        TK: (rD[UD] - wD[UD]) / RD,
        delta: sD[UD] - wD[UD]
      };
      return {
        VK: gD,
        PK: AD
      }
    }

    function BD(DD, zD) {
      return null === zD ? DD : zD(DD)
    }

    function GD(DD) {
      const [zD, wD, pD] = DD, rD = -(0, KD.l)(zD), LD = -(0, KD.l)(wD), cD = (0, KD.l)(pD), gD = sD.c.quaternionFromEulerZYX(rD, LD, cD);
      return sD.c.eulerYXZFromQuaternion(gD)
    }
    gD.LERP_MODE_SCHEMA_MAPPING = {
      linear: pD.e.Linear,
      catmullrom: pD.e.CatmullRomSpline
    };
    const hD = 1 / 16;

    function nD(DD) {
      return [-DD[0] * hD, DD[1] * hD, DD[2] * hD]
    }

    function MD(DD) {
      const [zD, wD, pD] = DD;
      return [zD >= 0 ? Math.PI - zD : -Math.PI - zD, OD(wD + Math.PI), OD(pD + Math.PI)]
    }

    function OD(DD) {
      return sD.c.mod(DD + Math.PI, 2 * Math.PI) - Math.PI
    }

    function JD(DD, zD) {
      return Math.abs(sD.c.computeShortestRotation(DD[0], zD[0])) + Math.abs(sD.c.computeShortestRotation(DD[1], zD[1])) + Math.abs(sD.c.computeShortestRotation(DD[2], zD[2]))
    }
    const ED = new cD
  },
  37151: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => rD,
      c: () => KD,
      e: () => pD,
      h: () => sD
    });
    let pD = function(DD) {
        return DD[DD.Linear = 0] = "Linear", DD[DD.CatmullRomSpline = 1] = "CatmullRomSpline", DD
      }({}),
      sD = function(DD) {
        return DD[DD.NoLoop = 0] = "NoLoop", DD[DD.LoopOnLastFrame = 1] = "LoopOnLastFrame", DD[DD.HoldOnLastFrame = 2] = "HoldOnLastFrame", DD
      }({}),
      KD = function(DD) {
        return DD[DD.Movement = 0] = "Movement", DD[DD.Action = 1] = "Action", DD[DD.Emote = 2] = "Emote", DD[DD.Custom = 3] = "Custom", DD
      }({}),
      rD = function(DD) {
        return DD[DD.Start = 0] = "Start", DD[DD.Stop = 1] = "Stop", DD
      }({})
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);