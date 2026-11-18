export const id = 106;
export const ids = [106];
export const modules = {
  35669: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => GJ,
      c: () => mJ
    });
    var FJ = ZJ(926),
      UJ = ZJ.n(FJ),
      eJ = ZJ(47),
      XJ = ZJ(1326),
      AJ = ZJ(1703),
      qJ = ZJ(1743),
      jJ = ZJ(13),
      YJ = ZJ(2175),
      hJ = ZJ(35676),
      DJ = ZJ(35678),
      sJ = ZJ(35683),
      nJ = ZJ(990);
    const GJ = (0, eJ.memo)((function() {
      const {
        isTouchScreen: JJ,
        clientEscMenuOptions: cJ,
        scriptedCameraFacing: ZJ,
        crosshairShownOverride: FJ
      } = (0, jJ.j)(["isTouchScreen", "clientEscMenuOptions", "scriptedCameraFacing", "crosshairShownOverride"]), AJ = (0, YJ.f)("gunshotOrigin"), GJ = (0, eJ.useRef)(null), xJ = (0, eJ.useRef)(!1), [rJ, vJ] = (0, eJ.useState)(fJ);
      (0, XJ.i)("cameraZoomSet", vJ), (0, eJ.useEffect)((() => {
        vJ(fJ())
      }), []);
      const QJ = (0, qJ.f)("heldItemAim"),
        VJ = QJ.gun;
      (0, eJ.useEffect)((() => (0, DJ.g)("crosshairAccuracy", mJ)), []), (0, XJ.i)("mouseState", (JJ => {
        let {
          isDown: cJ
        } = JJ;
        xJ.current = cJ, GJ.current && (GJ.current.style.transform = cJ ? "scale(1.4)" : "scale(1)")
      }));
      const KJ = (0, sJ.f)(JJ, cJ.touchActionButtons);
      return (null !== FJ && void 0 !== FJ ? FJ : (0, hJ.d)(QJ, rJ > 1, KJ, AJ)) ? "movement" === ZJ || "cursor" === ZJ ? null : (0, nJ.jsxs)(nJ.Fragment, {
        children: [VJ && (0, nJ.jsx)(EJ, {}), !VJ && (0, nJ.jsx)("div", {
          className: UJ()("Crosshair", {
            Touch: JJ
          }),
          ref: GJ,
          style: {
            transform: xJ.current ? "scale(1.4)" : "scale(1)"
          },
          children: "+"
        })]
      }) : null
    }));

    function fJ() {
      return AJ.gameBridge.lookup("cameraZoom", null)
    }
    const xJ = [{
        current: null
      }, {
        current: null
      }, {
        current: null
      }, {
        current: null
      }],
      rJ = {
        current: null
      };
    let vJ = 0;

    function mJ(JJ) {
      xJ[0].current || rJ.current ? QJ(JJ) : vJ = JJ
    }

    function QJ(JJ) {
      if (xJ[0].current) {
        const cJ = `${(0,hJ.c)(JJ)}vh`;
        xJ[0].current.style.transform = `translateX(calc(0px - ${cJ}))`, xJ[1].current.style.transform = `translateX(calc(0px + ${cJ}))`, xJ[2].current.style.transform = `translateY(calc(0px - ${cJ}))`, xJ[3].current.style.transform = `translateY(calc(0px + ${cJ}))`
      }
      rJ.current && (rJ.current.style.filter = `blur(${Math.round(JJ/10)}px)`)
    }

    function EJ() {
      const JJ = (0, XJ.m)("aimingOverlay", "none"),
        cJ = "1.2vh",
        ZJ = "0.3vh";
      return (0, eJ.useEffect)((() => {
        vJ && QJ(vJ)
      }), []), (0, nJ.jsxs)(nJ.Fragment, {
        children: ["sniper" === JJ && (0, nJ.jsxs)("div", {
          ref: rJ,
          className: "GunCrosshairOverlayWrapper",
          children: [(0, nJ.jsx)("div", {
            className: "GunCrosshairOverlay"
          }), (0, nJ.jsx)("div", {
            className: "GunCrosshairOverlayLine1"
          }), (0, nJ.jsx)("div", {
            className: "GunCrosshairOverlayLine2"
          }), (0, nJ.jsx)("div", {
            className: "GunCrosshairOverlayDot"
          })]
        }), (0, nJ.jsxs)("div", {
          className: "GunCrosshairWrapper",
          style: {
            opacity: "sniper" === JJ ? 0 : 1
          },
          children: [(0, nJ.jsx)("div", {
            className: "GunCrosshair",
            style: {
              width: cJ,
              height: ZJ,
              top: "49.85vh",
              left: "calc(50vw - 0.6vh)"
            },
            ref: xJ[0]
          }), (0, nJ.jsx)("div", {
            className: "GunCrosshair",
            style: {
              width: cJ,
              height: ZJ,
              top: "49.85vh",
              left: "calc(50vw - 0.6vh)"
            },
            ref: xJ[1]
          }), (0, nJ.jsx)("div", {
            className: "GunCrosshair",
            style: {
              width: ZJ,
              height: cJ,
              top: "49.4vh",
              left: "calc(50vw - 0.15vh)"
            },
            ref: xJ[2]
          }), (0, nJ.jsx)("div", {
            className: "GunCrosshair",
            style: {
              width: ZJ,
              height: cJ,
              top: "49.4vh",
              left: "calc(50vw - 0.15vh)"
            },
            ref: xJ[3]
          })]
        })]
      })
    }
  },
  35797: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => eJ,
      d: () => qJ,
      f: () => XJ
    });
    var FJ = ZJ(535),
      UJ = ZJ(2401);

    function eJ(JJ) {
      return JJ === (0, UJ.h)().IJJ ? (0, UJ.h)().XM : JJ
    }

    function XJ(JJ) {
      return !(0, FJ.P)(JJ) && eJ(JJ) === (0, UJ.h)().XM
    }
    const AJ = "gravity";

    function qJ() {
      return (0, UJ.h)().physics[AJ][1]
    }
  },
  35783: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => vJ
    });
    var FJ = ZJ(35789),
      UJ = ZJ(157),
      eJ = ZJ(4259),
      XJ = ZJ(35815),
      AJ = ZJ(35797),
      qJ = ZJ(250),
      jJ = ZJ.n(qJ),
      YJ = ZJ(1098),
      hJ = ZJ(2401),
      DJ = ZJ(35813),
      sJ = ZJ(17),
      nJ = ZJ(13),
      GJ = ZJ(35806);
    const fJ = new Set(["note"]);
    const xJ = {
      stop: () => xJ,
      fade: () => xJ,
      rate: () => xJ,
      stopsAtOnce: () => !1,
      isAlive: () => !1,
      getDurationMs: () => 0,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => xJ,
      setPannerAttr: () => xJ,
      setPosition: () => xJ
    };
    class rJ {
      constructor(JJ) {
        let cJ, {
          src: ZJ,
          volumeScalar: UJ,
          isSoundSprite: AJ
        } = JJ;
        this._howl = void 0, this._volumeMultiplier = void 0, this._spriteTrackSrc = void 0, this._loadFailed = !1, AJ ? (cJ = (0, FJ.g)(ZJ), this._spriteTrackSrc = cJ) : cJ = {
          src: YJ.clientSideServerUrls.staticUrl + ZJ
        }, this._volumeMultiplier = new XJ.j, this._volumeMultiplier.setMultiplierType("persistentScalar", UJ), this._howl = new eJ.Howl({
          ...cJ,
          pool: 15
        }), this._howl.once("loaderror", (() => {
          this._loadFailed = !0
        }))
      }
      play() {
        let JJ, cJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
          ZJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (cJ) {
          var FJ;
          if (null === (FJ = this._spriteTrackSrc) || void 0 === FJ || !FJ.sprite[cJ]) throw new Error("No such sprite in your spritetrack");
          JJ = this._howl.play(cJ)
        } else JJ = this._howl.play();
        ZJ && this._howl.loop(!0, JJ);
        let UJ = 1;
        this._howl.volume(this._volumeMultiplier.getTotalMultipliedVal(), JJ);
        const eJ = {
          stop: () => (this._howl.stop(JJ), eJ),
          fade: (cJ, ZJ, FJ) => (this._howl.fade(cJ, ZJ, FJ, JJ), eJ),
          rate: cJ => (this._howl.rate(cJ, JJ), eJ),
          stopsAtOnce: () => this._howl.playing(JJ) && !this._howl._playLock,
          isAlive: () => {
            const cJ = this._howl._soundById(JJ);
            return !this._loadFailed && !!cJ && !cJ._ended
          },
          getDurationMs: () => this._howl._soundById(JJ) ? 1e3 * this._howl.duration(JJ) / this._howl.rate(JJ) : 0,
          getVolume: () => UJ * this._volumeMultiplier.getTotalMultipliedVal(),
          getRelativeVolume: () => UJ,
          setRelativeVolume: cJ => {
            if (cJ > 1) throw new Error("Volume should be <= 1");
            return UJ = nJ.d.get("soundOnFromAd") ? cJ : 0, this._howl.volume(Math.min(1, UJ * this._volumeMultiplier.getTotalMultipliedVal()), JJ), eJ
          },
          setPannerAttr: cJ => {
            let {
              coneInnerAngle: ZJ,
              coneOuterAngle: FJ = 360,
              coneOuterGain: UJ,
              distanceModel: XJ,
              maxDistance: AJ,
              panningModel: qJ,
              refDistance: jJ,
              rolloffFactor: YJ
            } = cJ;
            return this._setPannerAttr({
              id: JJ,
              coneInnerAngle: ZJ,
              coneOuterAngle: FJ,
              coneOuterGain: UJ,
              distanceModel: XJ,
              maxDistance: AJ,
              panningModel: qJ,
              refDistance: jJ,
              rolloffFactor: YJ
            }), eJ
          },
          setPosition: cJ => (this._howl.pos(cJ[2], cJ[1], cJ[0], JJ), eJ)
        };
        return eJ
      }
      setGlobalVolume(JJ) {
        this._volumeMultiplier.setMultiplierType("globalVolume", JJ), this._howl.volume(JJ)
      }
      _setPannerAttr(JJ) {
        let {
          id: cJ,
          coneInnerAngle: ZJ = 360,
          coneOuterAngle: FJ = 360,
          coneOuterGain: UJ = 0,
          distanceModel: eJ = "inverse",
          maxDistance: XJ = 1e3,
          panningModel: AJ = "HRTF",
          refDistance: qJ = DJ.k,
          rolloffFactor: jJ = 1
        } = JJ;
        this._howl.pannerAttr({
          coneOuterAngle: FJ
        }, cJ);
        const YJ = {
          coneInnerAngle: ZJ,
          coneOuterAngle: FJ,
          coneOuterGain: UJ,
          distanceModel: eJ,
          maxDistance: XJ,
          panningModel: AJ,
          refDistance: qJ,
          rolloffFactor: jJ
        };
        this._howl.pannerAttr(YJ, cJ)
      }
    }
    const vJ = new class {
      constructor() {
        this.stereoSheets = {}, this.spatialSheets = {}, this.spatialVoices = new GJ.d, sJ.i.subscribe("appManagerUpdated|soundVolume", (JJ => {
          const cJ = Object.values(this.stereoSheets).concat(Object.values(this.spatialSheets));
          for (const ZJ of cJ) ZJ.setGlobalVolume(JJ)
        }))
      }
      play(JJ, cJ) {
        var ZJ;
        let eJ, XJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null === (ZJ = (0, hJ.h)()) || void 0 === ZJ ? void 0 : ZJ.XM,
          qJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : DJ.g,
          YJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : DJ.k,
          sJ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        var vJ;
        (0, hJ.h)() ? eJ = !!Array.isArray(XJ) || (0, AJ.c)(XJ) !== (null === (vJ = (0, hJ.h)()) || void 0 === vJ ? void 0 : vJ.XM): eJ = !1;
        const mJ = eJ ? this.spatialSheets : this.stereoSheets,
          QJ = (0, FJ.h)(JJ);
        if (!mJ[QJ]) {
          const JJ = new rJ({
            src: QJ,
            isSoundSprite: !0,
            volumeScalar: 1
          });
          JJ.setGlobalVolume(nJ.d.get("soundVolume")), mJ[QJ] = JJ
        }
        const EJ = mJ[QJ];
        if (!eJ) {
          const ZJ = EJ.play(JJ, sJ);
          return ZJ.setRelativeVolume(cJ), ZJ
        }
        const VJ = (0, hJ.h)(),
          KJ = Array.isArray(XJ) ? XJ : VJ.qE.Om(XJ),
          yJ = VJ.qE.Om(VJ.XM);
        if (!KJ || jJ().sqrDist(KJ, yJ) > qJ * qJ) return xJ;
        let SJ;
        if (!sJ) {
          if (!this.spatialVoices.admit({
              group: fJ.has(QJ) ? null : (0, GJ.j)(JJ),
              loudness: (0, GJ.h)(cJ, jJ().DA(KJ, yJ), YJ),
              startMs: performance.now(),
              getDurationMs: () => {
                var JJ, cJ;
                return null !== (JJ = null === (cJ = SJ) || void 0 === cJ ? void 0 : cJ.getDurationMs()) && void 0 !== JJ ? JJ : 0
              },
              isAlive: () => {
                var JJ, cJ;
                return null !== (JJ = null === (cJ = SJ) || void 0 === cJ ? void 0 : cJ.isAlive()) && void 0 !== JJ && JJ
              },
              canStop: () => {
                var JJ, cJ;
                return null !== (JJ = null === (cJ = SJ) || void 0 === cJ ? void 0 : cJ.stopsAtOnce()) && void 0 !== JJ && JJ
              },
              stop: () => {
                var JJ;
                null === (JJ = SJ) || void 0 === JJ || JJ.stop()
              }
            })) return xJ
        }
        return SJ = EJ.play(JJ, sJ), SJ.setRelativeVolume(cJ), SJ.setPannerAttr({
          refDistance: YJ
        }), SJ.setPosition([KJ[0], KJ[1] + UJ.c.Dv * UJ.c.playerEyeToHeightRatio, KJ[2]]), SJ
      }
    }
  },
  35858: (JJ, cJ, ZJ) => {
    function FJ(JJ, cJ) {
      var ZJ, FJ, UJ, eJ, XJ, AJ, qJ, jJ;
      return JJ.name === cJ.name && ((null === (ZJ = JJ.attributes) || void 0 === ZJ || null === (FJ = ZJ.customAttributes) || void 0 === FJ ? void 0 : FJ.stackKey) === (null === (UJ = cJ.attributes) || void 0 === UJ || null === (eJ = UJ.customAttributes) || void 0 === eJ ? void 0 : eJ.stackKey) && (!0 !== (null === (XJ = JJ.attributes) || void 0 === XJ || null === (AJ = XJ.customAttributes) || void 0 === AJ ? void 0 : AJ.unstackable) && !0 !== (null === (qJ = cJ.attributes) || void 0 === qJ || null === (jJ = qJ.customAttributes) || void 0 === jJ ? void 0 : jJ.unstackable)))
    }
    ZJ.d(cJ, {
      c: () => FJ
    })
  },
  5817: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => XJ,
      h: () => UJ,
      j: () => qJ,
      m: () => eJ,
      p: () => jJ,
      s: () => FJ,
      v: () => AJ
    });
    let FJ = function(JJ) {
        return JJ[JJ.DEFAULT = 0] = "DEFAULT", JJ[JJ.BOAT = 1] = "BOAT", JJ[JJ.GLIDER = 2] = "GLIDER", JJ[JJ.BALLOON = 3] = "BALLOON", JJ[JJ.SLEEPING = 4] = "SLEEPING", JJ[JJ.RIDING_MOB = 5] = "RIDING_MOB", JJ[JJ.CAR = 6] = "CAR", JJ[JJ.HOVERCRAFT = 7] = "HOVERCRAFT", JJ
      }({}),
      UJ = function(JJ) {
        return JJ[JJ.WOOD = 0] = "WOOD", JJ[JJ.OBSIDIAN = 1] = "OBSIDIAN", JJ[JJ.SPEED = 2] = "SPEED", JJ
      }({}),
      eJ = function(JJ) {
        return JJ[JJ.WOOD = 0] = "WOOD", JJ[JJ.IRON = 1] = "IRON", JJ[JJ.GOLD = 2] = "GOLD", JJ[JJ.DIAMOND = 3] = "DIAMOND", JJ
      }({}),
      XJ = function(JJ) {
        return JJ[JJ.YELLOW = 0] = "YELLOW", JJ[JJ.WHITE = 1] = "WHITE", JJ[JJ.RED = 2] = "RED", JJ[JJ.PURPLE = 3] = "PURPLE", JJ[JJ.PINK = 4] = "PINK", JJ[JJ.ORANGE = 5] = "ORANGE", JJ[JJ.MAGENTA = 6] = "MAGENTA", JJ[JJ.LIME = 7] = "LIME", JJ[JJ.LIGHT_GRAY = 8] = "LIGHT_GRAY", JJ[JJ.LIGHT_BLUE = 9] = "LIGHT_BLUE", JJ[JJ.GREEN = 10] = "GREEN", JJ[JJ.GRAY = 11] = "GRAY", JJ[JJ.CYAN = 12] = "CYAN", JJ[JJ.BROWN = 13] = "BROWN", JJ[JJ.BLUE = 14] = "BLUE", JJ[JJ.BLACK = 15] = "BLACK", JJ
      }({}),
      AJ = function(JJ) {
        return JJ[JJ.ROTATION_1 = 0] = "ROTATION_1", JJ[JJ.ROTATION_2 = 1] = "ROTATION_2", JJ[JJ.ROTATION_3 = 2] = "ROTATION_3", JJ[JJ.ROTATION_4 = 3] = "ROTATION_4", JJ
      }({}),
      qJ = function(JJ) {
        return JJ[JJ.KART = 0] = "KART", JJ[JJ.OFF_ROADER = 1] = "OFF_ROADER", JJ[JJ.CAR = 2] = "CAR", JJ[JJ.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", JJ[JJ.ARMORED_CAR = 4] = "ARMORED_CAR", JJ[JJ.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", JJ[JJ.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", JJ[JJ.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", JJ
      }({});
    FJ.DEFAULT, FJ.BOAT, UJ.SPEED, FJ.GLIDER, eJ.DIAMOND, FJ.BALLOON, XJ.BLACK, FJ.SLEEPING, AJ.ROTATION_4, FJ.RIDING_MOB, FJ.CAR, qJ.MOONSTONE_MINING_DRILL, FJ.HOVERCRAFT;
    let jJ = function(JJ) {
      return JJ[JJ.NORMAL = 0] = "NORMAL", JJ[JJ.GLIDING = 1] = "GLIDING", JJ[JJ.FLOATING = 2] = "FLOATING", JJ
    }({})
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);