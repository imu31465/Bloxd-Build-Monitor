export const id = 106;
export const ids = [106];
export const modules = {
  35607: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => uB,
      g: () => iB
    });
    var VB = dB(933),
      yB = dB.n(VB),
      pB = dB(62),
      lB = dB(1317),
      JB = dB(1679),
      YB = dB(1727),
      gB = dB(21),
      oB = dB(2139),
      kB = dB(35616),
      LB = dB(35624),
      OB = dB(35628),
      DB = dB(980);
    const uB = (0, pB.memo)((function() {
      const {
        isTouchScreen: BB,
        clientEscMenuOptions: TB,
        scriptedCameraFacing: dB,
        crosshairShownOverride: VB
      } = (0, gB.m)(["isTouchScreen", "clientEscMenuOptions", "scriptedCameraFacing", "crosshairShownOverride"]), JB = (0, oB.j)("gunshotOrigin"), uB = (0, pB.useRef)(null), EB = (0, pB.useRef)(!1), [vB, mB] = (0, pB.useState)(HB);
      (0, lB.e)("cameraZoomSet", mB), (0, pB.useEffect)((() => {
        mB(HB())
      }), []);
      const NB = (0, YB.i)("heldItemAim"),
        fB = NB.gun;
      (0, pB.useEffect)((() => (0, LB.h)("crosshairAccuracy", iB)), []), (0, lB.e)("mouseState", (BB => {
        let {
          isDown: TB
        } = BB;
        EB.current = TB, uB.current && (uB.current.style.transform = TB ? "scale(1.4)" : "scale(1)")
      }));
      const sB = (0, OB.i)(BB, TB.touchActionButtons);
      return (null !== VB && void 0 !== VB ? VB : (0, kB.f)(NB, vB > 1, sB, JB)) ? "movement" === dB || "cursor" === dB ? null : (0, DB.jsxs)(DB.Fragment, {
        children: [fB && (0, DB.jsx)(tB, {}), !fB && (0, DB.jsx)("div", {
          className: yB()("Crosshair", {
            Touch: BB
          }),
          ref: uB,
          style: {
            transform: EB.current ? "scale(1.4)" : "scale(1)"
          },
          children: "+"
        })]
      }) : null
    }));

    function HB() {
      return JB.gameBridge.lookup("cameraZoom", null)
    }
    const EB = [{
        current: null
      }, {
        current: null
      }, {
        current: null
      }, {
        current: null
      }],
      vB = {
        current: null
      };
    let mB = 0;

    function iB(BB) {
      EB[0].current || vB.current ? NB(BB) : mB = BB
    }

    function NB(BB) {
      if (EB[0].current) {
        const TB = `${(0,kB.e)(BB)}vh`;
        EB[0].current.style.transform = `translateX(calc(0px - ${TB}))`, EB[1].current.style.transform = `translateX(calc(0px + ${TB}))`, EB[2].current.style.transform = `translateY(calc(0px - ${TB}))`, EB[3].current.style.transform = `translateY(calc(0px + ${TB}))`
      }
      vB.current && (vB.current.style.filter = `blur(${Math.round(BB/10)}px)`)
    }

    function tB() {
      const BB = (0, lB.f)("aimingOverlay", "none"),
        TB = "1.2vh",
        dB = "0.3vh";
      return (0, pB.useEffect)((() => {
        mB && NB(mB)
      }), []), (0, DB.jsxs)(DB.Fragment, {
        children: ["sniper" === BB && (0, DB.jsxs)("div", {
          ref: vB,
          className: "GunCrosshairOverlayWrapper",
          children: [(0, DB.jsx)("div", {
            className: "GunCrosshairOverlay"
          }), (0, DB.jsx)("div", {
            className: "GunCrosshairOverlayLine1"
          }), (0, DB.jsx)("div", {
            className: "GunCrosshairOverlayLine2"
          }), (0, DB.jsx)("div", {
            className: "GunCrosshairOverlayDot"
          })]
        }), (0, DB.jsxs)("div", {
          className: "GunCrosshairWrapper",
          style: {
            opacity: "sniper" === BB ? 0 : 1
          },
          children: [(0, DB.jsx)("div", {
            className: "GunCrosshair",
            style: {
              width: TB,
              height: dB,
              top: "49.85vh",
              left: "calc(50vw - 0.6vh)"
            },
            ref: EB[0]
          }), (0, DB.jsx)("div", {
            className: "GunCrosshair",
            style: {
              width: TB,
              height: dB,
              top: "49.85vh",
              left: "calc(50vw - 0.6vh)"
            },
            ref: EB[1]
          }), (0, DB.jsx)("div", {
            className: "GunCrosshair",
            style: {
              width: dB,
              height: TB,
              top: "49.4vh",
              left: "calc(50vw - 0.15vh)"
            },
            ref: EB[2]
          }), (0, DB.jsx)("div", {
            className: "GunCrosshair",
            style: {
              width: dB,
              height: TB,
              top: "49.4vh",
              left: "calc(50vw - 0.15vh)"
            },
            ref: EB[3]
          })]
        })]
      })
    }
  },
  35741: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => pB,
      i: () => YB,
      l: () => lB
    });
    var VB = dB(572),
      yB = dB(2385);

    function pB(BB) {
      return BB === (0, yB.d)().yTB ? (0, yB.d)().rK : BB
    }

    function lB(BB) {
      return !(0, VB.M)(BB) && pB(BB) === (0, yB.d)().rK
    }
    const JB = "gravity";

    function YB() {
      return (0, yB.d)().physics[JB][1]
    }
  },
  35725: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => mB
    });
    var VB = dB(35732),
      yB = dB(184),
      pB = dB(4258),
      lB = dB(35764),
      JB = dB(35741),
      YB = dB(287),
      gB = dB.n(YB),
      oB = dB(1089),
      kB = dB(2385),
      LB = dB(35755),
      OB = dB(24),
      DB = dB(21),
      uB = dB(35746);
    const HB = new Set(["note"]);
    const EB = {
      stop: () => EB,
      fade: () => EB,
      rate: () => EB,
      stopsAtOnce: () => !1,
      isAlive: () => !1,
      getDurationMs: () => 0,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => EB,
      setPannerAttr: () => EB,
      setPosition: () => EB
    };
    class vB {
      constructor(BB) {
        let TB, {
          src: dB,
          volumeScalar: yB,
          isSoundSprite: JB
        } = BB;
        this._howl = void 0, this._volumeMultiplier = void 0, this._spriteTrackSrc = void 0, this._loadFailed = !1, JB ? (TB = (0, VB.g)(dB), this._spriteTrackSrc = TB) : TB = {
          src: oB.clientSideServerUrls.staticUrl + dB
        }, this._volumeMultiplier = new lB.j, this._volumeMultiplier.setMultiplierType("persistentScalar", yB), this._howl = new pB.Howl({
          ...TB,
          pool: 15
        }), this._howl.once("loaderror", (() => {
          this._loadFailed = !0
        }))
      }
      play() {
        let BB, TB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
          dB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (TB) {
          var VB;
          if (null === (VB = this._spriteTrackSrc) || void 0 === VB || !VB.sprite[TB]) throw new Error("No such sprite in your spritetrack");
          BB = this._howl.play(TB)
        } else BB = this._howl.play();
        dB && this._howl.loop(!0, BB);
        let yB = 1;
        this._howl.volume(this._volumeMultiplier.getTotalMultipliedVal(), BB);
        const pB = {
          stop: () => (this._howl.stop(BB), pB),
          fade: (TB, dB, VB) => (this._howl.fade(TB, dB, VB, BB), pB),
          rate: TB => (this._howl.rate(TB, BB), pB),
          stopsAtOnce: () => this._howl.playing(BB) && !this._howl._playLock,
          isAlive: () => {
            const TB = this._howl._soundById(BB);
            return !this._loadFailed && !!TB && !TB._ended
          },
          getDurationMs: () => this._howl._soundById(BB) ? 1e3 * this._howl.duration(BB) / this._howl.rate(BB) : 0,
          getVolume: () => yB * this._volumeMultiplier.getTotalMultipliedVal(),
          getRelativeVolume: () => yB,
          setRelativeVolume: TB => {
            if (TB > 1) throw new Error("Volume should be <= 1");
            return yB = DB.d.get("soundOnFromAd") ? TB : 0, this._howl.volume(Math.min(1, yB * this._volumeMultiplier.getTotalMultipliedVal()), BB), pB
          },
          setPannerAttr: TB => {
            let {
              coneInnerAngle: dB,
              coneOuterAngle: VB = 360,
              coneOuterGain: yB,
              distanceModel: lB,
              maxDistance: JB,
              panningModel: YB,
              refDistance: gB,
              rolloffFactor: oB
            } = TB;
            return this._setPannerAttr({
              id: BB,
              coneInnerAngle: dB,
              coneOuterAngle: VB,
              coneOuterGain: yB,
              distanceModel: lB,
              maxDistance: JB,
              panningModel: YB,
              refDistance: gB,
              rolloffFactor: oB
            }), pB
          },
          setPosition: TB => (this._howl.pos(TB[2], TB[1], TB[0], BB), pB)
        };
        return pB
      }
      setGlobalVolume(BB) {
        this._volumeMultiplier.setMultiplierType("globalVolume", BB), this._howl.volume(BB)
      }
      _setPannerAttr(BB) {
        let {
          id: TB,
          coneInnerAngle: dB = 360,
          coneOuterAngle: VB = 360,
          coneOuterGain: yB = 0,
          distanceModel: pB = "inverse",
          maxDistance: lB = 1e3,
          panningModel: JB = "HRTF",
          refDistance: YB = LB.f,
          rolloffFactor: gB = 1
        } = BB;
        this._howl.pannerAttr({
          coneOuterAngle: VB
        }, TB);
        const oB = {
          coneInnerAngle: dB,
          coneOuterAngle: VB,
          coneOuterGain: yB,
          distanceModel: pB,
          maxDistance: lB,
          panningModel: JB,
          refDistance: YB,
          rolloffFactor: gB
        };
        this._howl.pannerAttr(oB, TB)
      }
    }
    const mB = new class {
      constructor() {
        this.stereoSheets = {}, this.spatialSheets = {}, this.spatialVoices = new uB.e, OB.h.subscribe("appManagerUpdated|soundVolume", (BB => {
          const TB = Object.values(this.stereoSheets).concat(Object.values(this.spatialSheets));
          for (const dB of TB) dB.setGlobalVolume(BB)
        }))
      }
      play(BB, TB) {
        var dB;
        let pB, lB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null === (dB = (0, kB.d)()) || void 0 === dB ? void 0 : dB.rK,
          YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : LB.c,
          oB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : LB.f,
          OB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        var mB;
        (0, kB.d)() ? pB = !!Array.isArray(lB) || (0, JB.e)(lB) !== (null === (mB = (0, kB.d)()) || void 0 === mB ? void 0 : mB.rK): pB = !1;
        const iB = pB ? this.spatialSheets : this.stereoSheets,
          NB = (0, VB.h)(BB);
        if (!iB[NB]) {
          const BB = new vB({
            src: NB,
            isSoundSprite: !0,
            volumeScalar: 1
          });
          BB.setGlobalVolume(DB.d.get("soundVolume")), iB[NB] = BB
        }
        const tB = iB[NB];
        if (!pB) {
          const dB = tB.play(BB, OB);
          return dB.setRelativeVolume(TB), dB
        }
        const fB = (0, kB.d)(),
          sB = Array.isArray(lB) ? lB : fB.Km.Dv(lB),
          MB = fB.Km.Dv(fB.rK);
        if (!sB || gB().sqrDist(sB, MB) > YB * YB) return EB;
        let zB;
        if (!OB) {
          if (!this.spatialVoices.admit({
              group: HB.has(NB) ? null : (0, uB.k)(BB),
              loudness: (0, uB.h)(TB, gB().cg(sB, MB), oB),
              startMs: performance.now(),
              getDurationMs: () => {
                var BB, TB;
                return null !== (BB = null === (TB = zB) || void 0 === TB ? void 0 : TB.getDurationMs()) && void 0 !== BB ? BB : 0
              },
              isAlive: () => {
                var BB, TB;
                return null !== (BB = null === (TB = zB) || void 0 === TB ? void 0 : TB.isAlive()) && void 0 !== BB && BB
              },
              canStop: () => {
                var BB, TB;
                return null !== (BB = null === (TB = zB) || void 0 === TB ? void 0 : TB.stopsAtOnce()) && void 0 !== BB && BB
              },
              stop: () => {
                var BB;
                null === (BB = zB) || void 0 === BB || BB.stop()
              }
            })) return EB
        }
        return zB = tB.play(BB, OB), zB.setRelativeVolume(TB), zB.setPannerAttr({
          refDistance: oB
        }), zB.setPosition([sB[0], sB[1] + yB.c.kE * yB.c.playerEyeToHeightRatio, sB[2]]), zB
      }
    }
  },
  35814: (BB, TB, dB) => {
    function VB(BB, TB) {
      var dB, VB, yB, pB, lB, JB, YB, gB;
      return BB.name === TB.name && ((null === (dB = BB.attributes) || void 0 === dB || null === (VB = dB.customAttributes) || void 0 === VB ? void 0 : VB.stackKey) === (null === (yB = TB.attributes) || void 0 === yB || null === (pB = yB.customAttributes) || void 0 === pB ? void 0 : pB.stackKey) && (!0 !== (null === (lB = BB.attributes) || void 0 === lB || null === (JB = lB.customAttributes) || void 0 === JB ? void 0 : JB.unstackable) && !0 !== (null === (YB = TB.attributes) || void 0 === YB || null === (gB = YB.customAttributes) || void 0 === gB ? void 0 : gB.unstackable)))
    }
    dB.d(TB, {
      c: () => VB
    })
  },
  5839: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => lB,
      h: () => yB,
      i: () => YB,
      l: () => pB,
      o: () => gB,
      q: () => VB,
      s: () => JB
    });
    let VB = function(BB) {
        return BB[BB.DEFAULT = 0] = "DEFAULT", BB[BB.BOAT = 1] = "BOAT", BB[BB.GLIDER = 2] = "GLIDER", BB[BB.BALLOON = 3] = "BALLOON", BB[BB.SLEEPING = 4] = "SLEEPING", BB[BB.RIDING_MOB = 5] = "RIDING_MOB", BB[BB.CAR = 6] = "CAR", BB[BB.HOVERCRAFT = 7] = "HOVERCRAFT", BB
      }({}),
      yB = function(BB) {
        return BB[BB.WOOD = 0] = "WOOD", BB[BB.OBSIDIAN = 1] = "OBSIDIAN", BB[BB.SPEED = 2] = "SPEED", BB
      }({}),
      pB = function(BB) {
        return BB[BB.WOOD = 0] = "WOOD", BB[BB.IRON = 1] = "IRON", BB[BB.GOLD = 2] = "GOLD", BB[BB.DIAMOND = 3] = "DIAMOND", BB
      }({}),
      lB = function(BB) {
        return BB[BB.YELLOW = 0] = "YELLOW", BB[BB.WHITE = 1] = "WHITE", BB[BB.RED = 2] = "RED", BB[BB.PURPLE = 3] = "PURPLE", BB[BB.PINK = 4] = "PINK", BB[BB.ORANGE = 5] = "ORANGE", BB[BB.MAGENTA = 6] = "MAGENTA", BB[BB.LIME = 7] = "LIME", BB[BB.LIGHT_GRAY = 8] = "LIGHT_GRAY", BB[BB.LIGHT_BLUE = 9] = "LIGHT_BLUE", BB[BB.GREEN = 10] = "GREEN", BB[BB.GRAY = 11] = "GRAY", BB[BB.CYAN = 12] = "CYAN", BB[BB.BROWN = 13] = "BROWN", BB[BB.BLUE = 14] = "BLUE", BB[BB.BLACK = 15] = "BLACK", BB
      }({}),
      JB = function(BB) {
        return BB[BB.ROTATION_1 = 0] = "ROTATION_1", BB[BB.ROTATION_2 = 1] = "ROTATION_2", BB[BB.ROTATION_3 = 2] = "ROTATION_3", BB[BB.ROTATION_4 = 3] = "ROTATION_4", BB
      }({}),
      YB = function(BB) {
        return BB[BB.KART = 0] = "KART", BB[BB.OFF_ROADER = 1] = "OFF_ROADER", BB[BB.CAR = 2] = "CAR", BB[BB.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", BB[BB.ARMORED_CAR = 4] = "ARMORED_CAR", BB[BB.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", BB[BB.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", BB[BB.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", BB
      }({});
    VB.DEFAULT, VB.BOAT, yB.SPEED, VB.GLIDER, pB.DIAMOND, VB.BALLOON, lB.BLACK, VB.SLEEPING, JB.ROTATION_4, VB.RIDING_MOB, VB.CAR, YB.MOONSTONE_MINING_DRILL, VB.HOVERCRAFT;
    let gB = function(BB) {
      return BB[BB.NORMAL = 0] = "NORMAL", BB[BB.GLIDING = 1] = "GLIDING", BB[BB.FLOATING = 2] = "FLOATING", BB
    }({})
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);