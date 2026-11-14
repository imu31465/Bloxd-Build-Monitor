export const id = 98;
export const ids = [98];
export const modules = {
  34847: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => iR,
      e: () => oW
    });
    var wW = MW(897),
      CW = MW.n(wW),
      zR = MW(75),
      AW = MW(1253),
      bR = MW(1544),
      yR = MW(1571),
      NW = MW(27),
      eW = MW(1953),
      BW = MW(34855),
      tR = MW(34858),
      TW = MW(7753),
      gR = MW(940);
    const iR = (0, zR.memo)((function() {
      const {
        isTouchScreen: WW,
        clientEscMenuOptions: RW,
        scriptedCameraFacing: MW,
        crosshairShownOverride: wW
      } = (0, NW.i)(["isTouchScreen", "clientEscMenuOptions", "scriptedCameraFacing", "crosshairShownOverride"]), bR = (0, eW.h)("gunshotOrigin"), iR = (0, zR.useRef)(null), JW = (0, zR.useRef)(!1), [PW, IW] = (0, zR.useState)(YW);
      (0, AW.f)("cameraZoomSet", IW), (0, zR.useEffect)((() => {
        IW(YW())
      }), []);
      const lW = (0, yR.h)("heldItemAim"),
        fW = lW.gun;
      (0, zR.useEffect)((() => (0, tR.f)("crosshairAccuracy", oW)), []), (0, AW.f)("mouseState", (WW => {
        let {
          isDown: RW
        } = WW;
        JW.current = RW, iR.current && (iR.current.style.transform = RW ? "scale(1.4)" : "scale(1)")
      }));
      const QW = (0, TW.f)(WW, RW.touchActionButtons);
      return (null !== wW && void 0 !== wW ? wW : (0, BW.f)(lW, PW > 1, QW, bR)) ? "movement" === MW || "cursor" === MW ? null : (0, gR.jsxs)(gR.Fragment, {
        children: [fW && (0, gR.jsx)(FW, {}), !fW && (0, gR.jsx)("div", {
          className: CW()("Crosshair", {
            Touch: WW
          }),
          ref: iR,
          style: {
            transform: JW.current ? "scale(1.4)" : "scale(1)"
          },
          children: "+"
        })]
      }) : null
    }));

    function YW() {
      return bR.gameBridge.lookup("cameraZoom", null)
    }
    const JW = [{
        current: null
      }, {
        current: null
      }, {
        current: null
      }, {
        current: null
      }],
      PW = {
        current: null
      };
    let IW = 0;

    function oW(WW) {
      JW[0].current || PW.current ? lW(WW) : IW = WW
    }

    function lW(WW) {
      if (JW[0].current) {
        const RW = `${(0,BW.b)(WW)}vh`;
        JW[0].current.style.transform = `translateX(calc(0px - ${RW}))`, JW[1].current.style.transform = `translateX(calc(0px + ${RW}))`, JW[2].current.style.transform = `translateY(calc(0px - ${RW}))`, JW[3].current.style.transform = `translateY(calc(0px + ${RW}))`
      }
      PW.current && (PW.current.style.filter = `blur(${Math.round(WW/10)}px)`)
    }

    function FW() {
      const WW = (0, AW.i)("aimingOverlay", "none"),
        RW = "1.2vh",
        MW = "0.3vh";
      return (0, zR.useEffect)((() => {
        IW && lW(IW)
      }), []), (0, gR.jsxs)(gR.Fragment, {
        children: ["sniper" === WW && (0, gR.jsxs)("div", {
          ref: PW,
          className: "GunCrosshairOverlayWrapper",
          children: [(0, gR.jsx)("div", {
            className: "GunCrosshairOverlay"
          }), (0, gR.jsx)("div", {
            className: "GunCrosshairOverlayLine1"
          }), (0, gR.jsx)("div", {
            className: "GunCrosshairOverlayLine2"
          }), (0, gR.jsx)("div", {
            className: "GunCrosshairOverlayDot"
          })]
        }), (0, gR.jsxs)("div", {
          className: "GunCrosshairWrapper",
          style: {
            opacity: "sniper" === WW ? 0 : 1
          },
          children: [(0, gR.jsx)("div", {
            className: "GunCrosshair",
            style: {
              width: RW,
              height: MW,
              top: "49.85vh",
              left: "calc(50vw - 0.6vh)"
            },
            ref: JW[0]
          }), (0, gR.jsx)("div", {
            className: "GunCrosshair",
            style: {
              width: RW,
              height: MW,
              top: "49.85vh",
              left: "calc(50vw - 0.6vh)"
            },
            ref: JW[1]
          }), (0, gR.jsx)("div", {
            className: "GunCrosshair",
            style: {
              width: MW,
              height: RW,
              top: "49.4vh",
              left: "calc(50vw - 0.15vh)"
            },
            ref: JW[2]
          }), (0, gR.jsx)("div", {
            className: "GunCrosshair",
            style: {
              width: MW,
              height: RW,
              top: "49.4vh",
              left: "calc(50vw - 0.15vh)"
            },
            ref: JW[3]
          })]
        })]
      })
    }
  },
  34963: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => zR,
      h: () => yR,
      k: () => AW
    });
    var wW = MW(564),
      CW = MW(2154);

    function zR(WW) {
      return WW === (0, CW.e)().xbW ? (0, CW.e)().GRW : WW
    }

    function AW(WW) {
      return !(0, wW.S)(WW) && zR(WW) === (0, CW.e)().GRW
    }
    const bR = "gravity";

    function yR() {
      return (0, CW.e)().physics[bR][1]
    }
  },
  34954: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => IW
    });
    var wW = MW(34960),
      CW = MW(173),
      zR = MW(3835),
      AW = MW(34979),
      bR = MW(34963),
      yR = MW(290),
      NW = MW.n(yR),
      eW = MW(1033),
      BW = MW(2154),
      tR = MW(34973),
      TW = MW(33),
      gR = MW(27),
      iR = MW(34968);
    const YW = new Set(["note"]);
    const JW = {
      stop: () => JW,
      fade: () => JW,
      rate: () => JW,
      stopsAtOnce: () => !1,
      isAlive: () => !1,
      getDurationMs: () => 0,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => JW,
      setPannerAttr: () => JW,
      setPosition: () => JW
    };
    class PW {
      constructor(WW) {
        let RW, {
          src: MW,
          volumeScalar: CW,
          isSoundSprite: bR
        } = WW;
        this._howl = void 0, this._volumeMultiplier = void 0, this._spriteTrackSrc = void 0, this._loadFailed = !1, bR ? (RW = (0, wW.i)(MW), this._spriteTrackSrc = RW) : RW = {
          src: eW.clientSideServerUrls.staticUrl + MW
        }, this._volumeMultiplier = new AW.f, this._volumeMultiplier.setMultiplierType("persistentScalar", CW), this._howl = new zR.Howl({
          ...RW,
          pool: 15
        }), this._howl.once("loaderror", (() => {
          this._loadFailed = !0
        }))
      }
      play() {
        let WW, RW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
          MW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (RW) {
          var wW;
          if (null === (wW = this._spriteTrackSrc) || void 0 === wW || !wW.sprite[RW]) throw new Error("No such sprite in your spritetrack");
          WW = this._howl.play(RW)
        } else WW = this._howl.play();
        MW && this._howl.loop(!0, WW);
        let CW = 1;
        this._howl.volume(this._volumeMultiplier.getTotalMultipliedVal(), WW);
        const zR = {
          stop: () => (this._howl.stop(WW), zR),
          fade: (RW, MW, wW) => (this._howl.fade(RW, MW, wW, WW), zR),
          rate: RW => (this._howl.rate(RW, WW), zR),
          stopsAtOnce: () => this._howl.playing(WW) && !this._howl._playLock,
          isAlive: () => {
            const RW = this._howl._soundById(WW);
            return !this._loadFailed && !!RW && !RW._ended
          },
          getDurationMs: () => this._howl._soundById(WW) ? 1e3 * this._howl.duration(WW) / this._howl.rate(WW) : 0,
          getVolume: () => CW * this._volumeMultiplier.getTotalMultipliedVal(),
          getRelativeVolume: () => CW,
          setRelativeVolume: RW => {
            if (RW > 1) throw new Error("Volume should be <= 1");
            return CW = gR.b.get("soundOnFromAd") ? RW : 0, this._howl.volume(Math.min(1, CW * this._volumeMultiplier.getTotalMultipliedVal()), WW), zR
          },
          setPannerAttr: RW => {
            let {
              coneInnerAngle: MW,
              coneOuterAngle: wW = 360,
              coneOuterGain: CW,
              distanceModel: AW,
              maxDistance: bR,
              panningModel: yR,
              refDistance: NW,
              rolloffFactor: eW
            } = RW;
            return this._setPannerAttr({
              id: WW,
              coneInnerAngle: MW,
              coneOuterAngle: wW,
              coneOuterGain: CW,
              distanceModel: AW,
              maxDistance: bR,
              panningModel: yR,
              refDistance: NW,
              rolloffFactor: eW
            }), zR
          },
          setPosition: RW => (this._howl.pos(RW[2], RW[1], RW[0], WW), zR)
        };
        return zR
      }
      setGlobalVolume(WW) {
        this._volumeMultiplier.setMultiplierType("globalVolume", WW), this._howl.volume(WW)
      }
      _setPannerAttr(WW) {
        let {
          id: RW,
          coneInnerAngle: MW = 360,
          coneOuterAngle: wW = 360,
          coneOuterGain: CW = 0,
          distanceModel: zR = "inverse",
          maxDistance: AW = 1e3,
          panningModel: bR = "HRTF",
          refDistance: yR = tR.j,
          rolloffFactor: NW = 1
        } = WW;
        this._howl.pannerAttr({
          coneOuterAngle: wW
        }, RW);
        const eW = {
          coneInnerAngle: MW,
          coneOuterAngle: wW,
          coneOuterGain: CW,
          distanceModel: zR,
          maxDistance: AW,
          panningModel: bR,
          refDistance: yR,
          rolloffFactor: NW
        };
        this._howl.pannerAttr(eW, RW)
      }
    }
    const IW = new class {
      constructor() {
        this.stereoSheets = {}, this.spatialSheets = {}, this.spatialVoices = new iR.d, TW.k.subscribe("appManagerUpdated|soundVolume", (WW => {
          const RW = Object.values(this.stereoSheets).concat(Object.values(this.spatialSheets));
          for (const MW of RW) MW.setGlobalVolume(WW)
        }))
      }
      play(WW, RW) {
        var MW;
        let zR, AW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null === (MW = (0, BW.e)()) || void 0 === MW ? void 0 : MW.GRW,
          yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : tR.f,
          eW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : tR.j,
          TW = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        var IW;
        (0, BW.e)() ? zR = !!Array.isArray(AW) || (0, bR.e)(AW) !== (null === (IW = (0, BW.e)()) || void 0 === IW ? void 0 : IW.GRW): zR = !1;
        const oW = zR ? this.spatialSheets : this.stereoSheets,
          lW = (0, wW.l)(WW);
        if (!oW[lW]) {
          const WW = new PW({
            src: lW,
            isSoundSprite: !0,
            volumeScalar: 1
          });
          WW.setGlobalVolume(gR.b.get("soundVolume")), oW[lW] = WW
        }
        const FW = oW[lW];
        if (!zR) {
          const MW = FW.play(WW, TW);
          return MW.setRelativeVolume(RW), MW
        }
        const fW = (0, BW.e)(),
          QW = Array.isArray(AW) ? AW : fW.Yk.yX(AW),
          rR = fW.Yk.yX(fW.GRW);
        if (!QW || NW().sqrDist(QW, rR) > yR * yR) return JW;
        let cR;
        if (!TW) {
          if (!this.spatialVoices.admit({
              group: YW.has(lW) ? null : (0, iR.l)(WW),
              loudness: (0, iR.h)(RW, NW().WW(QW, rR), eW),
              startMs: performance.now(),
              getDurationMs: () => {
                var WW, RW;
                return null !== (WW = null === (RW = cR) || void 0 === RW ? void 0 : RW.getDurationMs()) && void 0 !== WW ? WW : 0
              },
              isAlive: () => {
                var WW, RW;
                return null !== (WW = null === (RW = cR) || void 0 === RW ? void 0 : RW.isAlive()) && void 0 !== WW && WW
              },
              canStop: () => {
                var WW, RW;
                return null !== (WW = null === (RW = cR) || void 0 === RW ? void 0 : RW.stopsAtOnce()) && void 0 !== WW && WW
              },
              stop: () => {
                var WW;
                null === (WW = cR) || void 0 === WW || WW.stop()
              }
            })) return JW
        }
        return cR = FW.play(WW, TW), cR.setRelativeVolume(RW), cR.setPannerAttr({
          refDistance: eW
        }), cR.setPosition([QW[0], QW[1] + CW.c.yI * CW.c.playerEyeToHeightRatio, QW[2]]), cR
      }
    }
  },
  35017: (WW, RW, MW) => {
    function wW(WW, RW) {
      var MW, wW, CW, zR, AW, bR, yR, NW;
      return WW.name === RW.name && ((null === (MW = WW.attributes) || void 0 === MW || null === (wW = MW.customAttributes) || void 0 === wW ? void 0 : wW.stackKey) === (null === (CW = RW.attributes) || void 0 === CW || null === (zR = CW.customAttributes) || void 0 === zR ? void 0 : zR.stackKey) && (!0 !== (null === (AW = WW.attributes) || void 0 === AW || null === (bR = AW.customAttributes) || void 0 === bR ? void 0 : bR.unstackable) && !0 !== (null === (yR = RW.attributes) || void 0 === yR || null === (NW = yR.customAttributes) || void 0 === NW ? void 0 : NW.unstackable)))
    }
    MW.d(RW, {
      c: () => wW
    })
  },
  35105: (WW, RW, MW) => {
    function wW(WW) {
      return WW.includes("Leaf Bed")
    }

    function CW(WW) {
      return / Bed(?: Head)?(?:\||$)/.test(WW) && !wW(WW)
    }

    function zR(WW) {
      return WW.includes(" Strongbed")
    }

    function AW(WW) {
      return wW(WW) || CW(WW) || zR(WW)
    }
    MW.d(RW, {
      c: () => AW,
      e: () => wW,
      h: () => zR,
      i: () => CW
    })
  },
  35096: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => NW
    });
    var wW = MW(35105),
      CW = MW(8180);
    const zR = [],
      AW = [],
      bR = [],
      yR = [];
    for (const eW of Object.keys(CW.m))(0, wW.e)(eW) ? zR.push(eW) : (0, wW.i)(eW) && AW.push(eW), (0, wW.h)(eW) && bR.push(eW), (eW.includes(" Bed Head") || eW.includes(" Strongbed Head")) && yR.push(eW);
    const NW = {
      leafBeds: zR,
      woolBeds: AW,
      strongBeds: bR,
      beds: [...zR, ...AW, ...bR],
      bedHeads: yR,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  5473: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => AW,
      e: () => CW,
      i: () => yR,
      j: () => zR,
      l: () => NW,
      p: () => wW,
      r: () => bR
    });
    let wW = function(WW) {
        return WW[WW.DEFAULT = 0] = "DEFAULT", WW[WW.BOAT = 1] = "BOAT", WW[WW.GLIDER = 2] = "GLIDER", WW[WW.BALLOON = 3] = "BALLOON", WW[WW.SLEEPING = 4] = "SLEEPING", WW[WW.RIDING_MOB = 5] = "RIDING_MOB", WW[WW.CAR = 6] = "CAR", WW[WW.HOVERCRAFT = 7] = "HOVERCRAFT", WW
      }({}),
      CW = function(WW) {
        return WW[WW.WOOD = 0] = "WOOD", WW[WW.OBSIDIAN = 1] = "OBSIDIAN", WW[WW.SPEED = 2] = "SPEED", WW
      }({}),
      zR = function(WW) {
        return WW[WW.WOOD = 0] = "WOOD", WW[WW.IRON = 1] = "IRON", WW[WW.GOLD = 2] = "GOLD", WW[WW.DIAMOND = 3] = "DIAMOND", WW
      }({}),
      AW = function(WW) {
        return WW[WW.YELLOW = 0] = "YELLOW", WW[WW.WHITE = 1] = "WHITE", WW[WW.RED = 2] = "RED", WW[WW.PURPLE = 3] = "PURPLE", WW[WW.PINK = 4] = "PINK", WW[WW.ORANGE = 5] = "ORANGE", WW[WW.MAGENTA = 6] = "MAGENTA", WW[WW.LIME = 7] = "LIME", WW[WW.LIGHT_GRAY = 8] = "LIGHT_GRAY", WW[WW.LIGHT_BLUE = 9] = "LIGHT_BLUE", WW[WW.GREEN = 10] = "GREEN", WW[WW.GRAY = 11] = "GRAY", WW[WW.CYAN = 12] = "CYAN", WW[WW.BROWN = 13] = "BROWN", WW[WW.BLUE = 14] = "BLUE", WW[WW.BLACK = 15] = "BLACK", WW
      }({}),
      bR = function(WW) {
        return WW[WW.ROTATION_1 = 0] = "ROTATION_1", WW[WW.ROTATION_2 = 1] = "ROTATION_2", WW[WW.ROTATION_3 = 2] = "ROTATION_3", WW[WW.ROTATION_4 = 3] = "ROTATION_4", WW
      }({}),
      yR = function(WW) {
        return WW[WW.KART = 0] = "KART", WW[WW.OFF_ROADER = 1] = "OFF_ROADER", WW[WW.CAR = 2] = "CAR", WW[WW.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", WW[WW.ARMORED_CAR = 4] = "ARMORED_CAR", WW[WW.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", WW[WW.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", WW[WW.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", WW
      }({});
    wW.DEFAULT, wW.BOAT, CW.SPEED, wW.GLIDER, zR.DIAMOND, wW.BALLOON, AW.BLACK, wW.SLEEPING, bR.ROTATION_4, wW.RIDING_MOB, wW.CAR, yR.MOONSTONE_MINING_DRILL, wW.HOVERCRAFT;
    let NW = function(WW) {
      return WW[WW.NORMAL = 0] = "NORMAL", WW[WW.GLIDING = 1] = "GLIDING", WW[WW.FLOATING = 2] = "FLOATING", WW
    }({})
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);