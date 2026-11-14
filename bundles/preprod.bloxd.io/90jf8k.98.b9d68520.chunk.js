export const id = 98;
export const ids = [98];
export const modules = {
  35138: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => rW,
      e: () => kW
    });
    var CF = SF(918),
      AF = SF.n(CF),
      uF = SF(46),
      hF = SF(1262),
      bW = SF(1576),
      dF = SF(1607),
      PF = SF(11),
      RF = SF(1955),
      iW = SF(35141),
      eF = SF(35144),
      EF = SF(7816),
      QF = SF(971);
    const rW = (0, uF.memo)((function() {
      const {
        isTouchScreen: FF,
        clientEscMenuOptions: WF,
        scriptedCameraFacing: SF,
        crosshairShownOverride: CF
      } = (0, PF.d)(["isTouchScreen", "clientEscMenuOptions", "scriptedCameraFacing", "crosshairShownOverride"]), bW = (0, RF.k)("gunshotOrigin"), rW = (0, uF.useRef)(null), tW = (0, uF.useRef)(!1), [TF, aW] = (0, uF.useState)(gW);
      (0, hF.e)("cameraZoomSet", aW), (0, uF.useEffect)((() => {
        aW(gW())
      }), []);
      const qW = (0, dF.e)("heldItemAim"),
        NF = qW.gun;
      (0, uF.useEffect)((() => (0, eF.f)("crosshairAccuracy", kW)), []), (0, hF.e)("mouseState", (FF => {
        let {
          isDown: WF
        } = FF;
        tW.current = WF, rW.current && (rW.current.style.transform = WF ? "scale(1.4)" : "scale(1)")
      }));
      const DF = (0, EF.h)(FF, WF.touchActionButtons);
      return (null !== CF && void 0 !== CF ? CF : (0, iW.g)(qW, TF > 1, DF, bW)) ? "movement" === SF || "cursor" === SF ? null : (0, QF.jsxs)(QF.Fragment, {
        children: [NF && (0, QF.jsx)(VF, {}), !NF && (0, QF.jsx)("div", {
          className: AF()("Crosshair", {
            Touch: FF
          }),
          ref: rW,
          style: {
            transform: tW.current ? "scale(1.4)" : "scale(1)"
          },
          children: "+"
        })]
      }) : null
    }));

    function gW() {
      return bW.gameBridge.lookup("cameraZoom", null)
    }
    const tW = [{
        current: null
      }, {
        current: null
      }, {
        current: null
      }, {
        current: null
      }],
      TF = {
        current: null
      };
    let aW = 0;

    function kW(FF) {
      tW[0].current || TF.current ? qW(FF) : aW = FF
    }

    function qW(FF) {
      if (tW[0].current) {
        const WF = `${(0,iW.d)(FF)}vh`;
        tW[0].current.style.transform = `translateX(calc(0px - ${WF}))`, tW[1].current.style.transform = `translateX(calc(0px + ${WF}))`, tW[2].current.style.transform = `translateY(calc(0px - ${WF}))`, tW[3].current.style.transform = `translateY(calc(0px + ${WF}))`
      }
      TF.current && (TF.current.style.filter = `blur(${Math.round(FF/10)}px)`)
    }

    function VF() {
      const FF = (0, hF.i)("aimingOverlay", "none"),
        WF = "1.2vh",
        SF = "0.3vh";
      return (0, uF.useEffect)((() => {
        aW && qW(aW)
      }), []), (0, QF.jsxs)(QF.Fragment, {
        children: ["sniper" === FF && (0, QF.jsxs)("div", {
          ref: TF,
          className: "GunCrosshairOverlayWrapper",
          children: [(0, QF.jsx)("div", {
            className: "GunCrosshairOverlay"
          }), (0, QF.jsx)("div", {
            className: "GunCrosshairOverlayLine1"
          }), (0, QF.jsx)("div", {
            className: "GunCrosshairOverlayLine2"
          }), (0, QF.jsx)("div", {
            className: "GunCrosshairOverlayDot"
          })]
        }), (0, QF.jsxs)("div", {
          className: "GunCrosshairWrapper",
          style: {
            opacity: "sniper" === FF ? 0 : 1
          },
          children: [(0, QF.jsx)("div", {
            className: "GunCrosshair",
            style: {
              width: WF,
              height: SF,
              top: "49.85vh",
              left: "calc(50vw - 0.6vh)"
            },
            ref: tW[0]
          }), (0, QF.jsx)("div", {
            className: "GunCrosshair",
            style: {
              width: WF,
              height: SF,
              top: "49.85vh",
              left: "calc(50vw - 0.6vh)"
            },
            ref: tW[1]
          }), (0, QF.jsx)("div", {
            className: "GunCrosshair",
            style: {
              width: SF,
              height: WF,
              top: "49.4vh",
              left: "calc(50vw - 0.15vh)"
            },
            ref: tW[2]
          }), (0, QF.jsx)("div", {
            className: "GunCrosshair",
            style: {
              width: SF,
              height: WF,
              top: "49.4vh",
              left: "calc(50vw - 0.15vh)"
            },
            ref: tW[3]
          })]
        })]
      })
    }
  },
  35256: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => uF,
      h: () => dF,
      j: () => hF
    });
    var CF = SF(568),
      AF = SF(2180);

    function uF(FF) {
      return FF === (0, AF.h)().UhF ? (0, AF.h)().vSF : FF
    }

    function hF(FF) {
      return !(0, CF.Q)(FF) && uF(FF) === (0, AF.h)().vSF
    }
    const bW = "gravity";

    function dF() {
      return (0, AF.h)().physics[bW][1]
    }
  },
  35243: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => aW
    });
    var CF = SF(35247),
      AF = SF(161),
      uF = SF(3855),
      hF = SF(35276),
      bW = SF(35256),
      dF = SF(282),
      PF = SF.n(dF),
      RF = SF(1056),
      iW = SF(2180),
      eF = SF(35269),
      EF = SF(20),
      QF = SF(11),
      rW = SF(35265);
    const gW = new Set(["note"]);
    const tW = {
      stop: () => tW,
      fade: () => tW,
      rate: () => tW,
      stopsAtOnce: () => !1,
      isAlive: () => !1,
      getDurationMs: () => 0,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => tW,
      setPannerAttr: () => tW,
      setPosition: () => tW
    };
    class TF {
      constructor(FF) {
        let WF, {
          src: SF,
          volumeScalar: AF,
          isSoundSprite: bW
        } = FF;
        this._howl = void 0, this._volumeMultiplier = void 0, this._spriteTrackSrc = void 0, this._loadFailed = !1, bW ? (WF = (0, CF.f)(SF), this._spriteTrackSrc = WF) : WF = {
          src: RF.clientSideServerUrls.staticUrl + SF
        }, this._volumeMultiplier = new hF.j, this._volumeMultiplier.setMultiplierType("persistentScalar", AF), this._howl = new uF.Howl({
          ...WF,
          pool: 15
        }), this._howl.once("loaderror", (() => {
          this._loadFailed = !0
        }))
      }
      play() {
        let FF, WF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
          SF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (WF) {
          var CF;
          if (null === (CF = this._spriteTrackSrc) || void 0 === CF || !CF.sprite[WF]) throw new Error("No such sprite in your spritetrack");
          FF = this._howl.play(WF)
        } else FF = this._howl.play();
        SF && this._howl.loop(!0, FF);
        let AF = 1;
        this._howl.volume(this._volumeMultiplier.getTotalMultipliedVal(), FF);
        const uF = {
          stop: () => (this._howl.stop(FF), uF),
          fade: (WF, SF, CF) => (this._howl.fade(WF, SF, CF, FF), uF),
          rate: WF => (this._howl.rate(WF, FF), uF),
          stopsAtOnce: () => this._howl.playing(FF) && !this._howl._playLock,
          isAlive: () => {
            const WF = this._howl._soundById(FF);
            return !this._loadFailed && !!WF && !WF._ended
          },
          getDurationMs: () => this._howl._soundById(FF) ? 1e3 * this._howl.duration(FF) / this._howl.rate(FF) : 0,
          getVolume: () => AF * this._volumeMultiplier.getTotalMultipliedVal(),
          getRelativeVolume: () => AF,
          setRelativeVolume: WF => {
            if (WF > 1) throw new Error("Volume should be <= 1");
            return AF = QF.b.get("soundOnFromAd") ? WF : 0, this._howl.volume(Math.min(1, AF * this._volumeMultiplier.getTotalMultipliedVal()), FF), uF
          },
          setPannerAttr: WF => {
            let {
              coneInnerAngle: SF,
              coneOuterAngle: CF = 360,
              coneOuterGain: AF,
              distanceModel: hF,
              maxDistance: bW,
              panningModel: dF,
              refDistance: PF,
              rolloffFactor: RF
            } = WF;
            return this._setPannerAttr({
              id: FF,
              coneInnerAngle: SF,
              coneOuterAngle: CF,
              coneOuterGain: AF,
              distanceModel: hF,
              maxDistance: bW,
              panningModel: dF,
              refDistance: PF,
              rolloffFactor: RF
            }), uF
          },
          setPosition: WF => (this._howl.pos(WF[2], WF[1], WF[0], FF), uF)
        };
        return uF
      }
      setGlobalVolume(FF) {
        this._volumeMultiplier.setMultiplierType("globalVolume", FF), this._howl.volume(FF)
      }
      _setPannerAttr(FF) {
        let {
          id: WF,
          coneInnerAngle: SF = 360,
          coneOuterAngle: CF = 360,
          coneOuterGain: AF = 0,
          distanceModel: uF = "inverse",
          maxDistance: hF = 1e3,
          panningModel: bW = "HRTF",
          refDistance: dF = eF.g,
          rolloffFactor: PF = 1
        } = FF;
        this._howl.pannerAttr({
          coneOuterAngle: CF
        }, WF);
        const RF = {
          coneInnerAngle: SF,
          coneOuterAngle: CF,
          coneOuterGain: AF,
          distanceModel: uF,
          maxDistance: hF,
          panningModel: bW,
          refDistance: dF,
          rolloffFactor: PF
        };
        this._howl.pannerAttr(RF, WF)
      }
    }
    const aW = new class {
      constructor() {
        this.stereoSheets = {}, this.spatialSheets = {}, this.spatialVoices = new rW.c, EF.j.subscribe("appManagerUpdated|soundVolume", (FF => {
          const WF = Object.values(this.stereoSheets).concat(Object.values(this.spatialSheets));
          for (const SF of WF) SF.setGlobalVolume(FF)
        }))
      }
      play(FF, WF) {
        var SF;
        let uF, hF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null === (SF = (0, iW.h)()) || void 0 === SF ? void 0 : SF.vSF,
          dF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : eF.f,
          RF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : eF.g,
          EF = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        var aW;
        (0, iW.h)() ? uF = !!Array.isArray(hF) || (0, bW.e)(hF) !== (null === (aW = (0, iW.h)()) || void 0 === aW ? void 0 : aW.vSF): uF = !1;
        const kW = uF ? this.spatialSheets : this.stereoSheets,
          qW = (0, CF.h)(FF);
        if (!kW[qW]) {
          const FF = new TF({
            src: qW,
            isSoundSprite: !0,
            volumeScalar: 1
          });
          FF.setGlobalVolume(QF.b.get("soundVolume")), kW[qW] = FF
        }
        const VF = kW[qW];
        if (!uF) {
          const SF = VF.play(FF, EF);
          return SF.setRelativeVolume(WF), SF
        }
        const NF = (0, iW.h)(),
          DF = Array.isArray(hF) ? hF : NF.qm.fD(hF),
          LF = NF.qm.fD(NF.vSF);
        if (!DF || PF().sqrDist(DF, LF) > dF * dF) return tW;
        let mW;
        if (!EF) {
          if (!this.spatialVoices.admit({
              group: gW.has(qW) ? null : (0, rW.j)(FF),
              loudness: (0, rW.f)(WF, PF().FF(DF, LF), RF),
              startMs: performance.now(),
              getDurationMs: () => {
                var FF, WF;
                return null !== (FF = null === (WF = mW) || void 0 === WF ? void 0 : WF.getDurationMs()) && void 0 !== FF ? FF : 0
              },
              isAlive: () => {
                var FF, WF;
                return null !== (FF = null === (WF = mW) || void 0 === WF ? void 0 : WF.isAlive()) && void 0 !== FF && FF
              },
              canStop: () => {
                var FF, WF;
                return null !== (FF = null === (WF = mW) || void 0 === WF ? void 0 : WF.stopsAtOnce()) && void 0 !== FF && FF
              },
              stop: () => {
                var FF;
                null === (FF = mW) || void 0 === FF || FF.stop()
              }
            })) return tW
        }
        return mW = VF.play(FF, EF), mW.setRelativeVolume(WF), mW.setPannerAttr({
          refDistance: RF
        }), mW.setPosition([DF[0], DF[1] + AF.h.aN * AF.h.playerEyeToHeightRatio, DF[2]]), mW
      }
    }
  },
  35319: (FF, WF, SF) => {
    function CF(FF, WF) {
      var SF, CF, AF, uF, hF, bW, dF, PF;
      return FF.name === WF.name && ((null === (SF = FF.attributes) || void 0 === SF || null === (CF = SF.customAttributes) || void 0 === CF ? void 0 : CF.stackKey) === (null === (AF = WF.attributes) || void 0 === AF || null === (uF = AF.customAttributes) || void 0 === uF ? void 0 : uF.stackKey) && (!0 !== (null === (hF = FF.attributes) || void 0 === hF || null === (bW = hF.customAttributes) || void 0 === bW ? void 0 : bW.unstackable) && !0 !== (null === (dF = WF.attributes) || void 0 === dF || null === (PF = dF.customAttributes) || void 0 === PF ? void 0 : PF.unstackable)))
    }
    SF.d(WF, {
      d: () => CF
    })
  },
  35405: (FF, WF, SF) => {
    function CF(FF) {
      return FF.includes("Leaf Bed")
    }

    function AF(FF) {
      return / Bed(?: Head)?(?:\||$)/.test(FF) && !CF(FF)
    }

    function uF(FF) {
      return FF.includes(" Strongbed")
    }

    function hF(FF) {
      return CF(FF) || AF(FF) || uF(FF)
    }
    SF.d(WF, {
      b: () => hF,
      f: () => CF,
      i: () => uF,
      m: () => AF
    })
  },
  35397: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => PF
    });
    var CF = SF(35405),
      AF = SF(8242);
    const uF = [],
      hF = [],
      bW = [],
      dF = [];
    for (const RF of Object.keys(AF.n))(0, CF.f)(RF) ? uF.push(RF) : (0, CF.m)(RF) && hF.push(RF), (0, CF.i)(RF) && bW.push(RF), (RF.includes(" Bed Head") || RF.includes(" Strongbed Head")) && dF.push(RF);
    const PF = {
      leafBeds: uF,
      woolBeds: hF,
      strongBeds: bW,
      beds: [...uF, ...hF, ...bW],
      bedHeads: dF,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  5450: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => hF,
      d: () => AF,
      e: () => dF,
      i: () => uF,
      j: () => PF,
      m: () => CF,
      q: () => bW
    });
    let CF = function(FF) {
        return FF[FF.DEFAULT = 0] = "DEFAULT", FF[FF.BOAT = 1] = "BOAT", FF[FF.GLIDER = 2] = "GLIDER", FF[FF.BALLOON = 3] = "BALLOON", FF[FF.SLEEPING = 4] = "SLEEPING", FF[FF.RIDING_MOB = 5] = "RIDING_MOB", FF[FF.CAR = 6] = "CAR", FF[FF.HOVERCRAFT = 7] = "HOVERCRAFT", FF
      }({}),
      AF = function(FF) {
        return FF[FF.WOOD = 0] = "WOOD", FF[FF.OBSIDIAN = 1] = "OBSIDIAN", FF[FF.SPEED = 2] = "SPEED", FF
      }({}),
      uF = function(FF) {
        return FF[FF.WOOD = 0] = "WOOD", FF[FF.IRON = 1] = "IRON", FF[FF.GOLD = 2] = "GOLD", FF[FF.DIAMOND = 3] = "DIAMOND", FF
      }({}),
      hF = function(FF) {
        return FF[FF.YELLOW = 0] = "YELLOW", FF[FF.WHITE = 1] = "WHITE", FF[FF.RED = 2] = "RED", FF[FF.PURPLE = 3] = "PURPLE", FF[FF.PINK = 4] = "PINK", FF[FF.ORANGE = 5] = "ORANGE", FF[FF.MAGENTA = 6] = "MAGENTA", FF[FF.LIME = 7] = "LIME", FF[FF.LIGHT_GRAY = 8] = "LIGHT_GRAY", FF[FF.LIGHT_BLUE = 9] = "LIGHT_BLUE", FF[FF.GREEN = 10] = "GREEN", FF[FF.GRAY = 11] = "GRAY", FF[FF.CYAN = 12] = "CYAN", FF[FF.BROWN = 13] = "BROWN", FF[FF.BLUE = 14] = "BLUE", FF[FF.BLACK = 15] = "BLACK", FF
      }({}),
      bW = function(FF) {
        return FF[FF.ROTATION_1 = 0] = "ROTATION_1", FF[FF.ROTATION_2 = 1] = "ROTATION_2", FF[FF.ROTATION_3 = 2] = "ROTATION_3", FF[FF.ROTATION_4 = 3] = "ROTATION_4", FF
      }({}),
      dF = function(FF) {
        return FF[FF.KART = 0] = "KART", FF[FF.OFF_ROADER = 1] = "OFF_ROADER", FF[FF.CAR = 2] = "CAR", FF[FF.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", FF[FF.ARMORED_CAR = 4] = "ARMORED_CAR", FF[FF.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", FF[FF.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", FF[FF.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", FF
      }({});
    CF.DEFAULT, CF.BOAT, AF.SPEED, CF.GLIDER, uF.DIAMOND, CF.BALLOON, hF.BLACK, CF.SLEEPING, bW.ROTATION_4, CF.RIDING_MOB, CF.CAR, dF.MOONSTONE_MINING_DRILL, CF.HOVERCRAFT;
    let PF = function(FF) {
      return FF[FF.NORMAL = 0] = "NORMAL", FF[FF.GLIDING = 1] = "GLIDING", FF[FF.FLOATING = 2] = "FLOATING", FF
    }({})
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);