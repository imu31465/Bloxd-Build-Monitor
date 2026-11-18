export const id = 104;
export const ids = [104];
export const modules = {
  35390: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => Sy,
      i: () => Ty
    });
    var Uy = Wy(898),
      hy = Wy.n(Uy),
      fy = Wy(55),
      Zy = Wy(1268),
      cb = Wy(1572),
      Py = Wy(1612),
      oy = Wy(19),
      By = Wy(2005),
      Ky = Wy(35397),
      ey = Wy(35406),
      qb = Wy(35411),
      sy = Wy(952);
    const Sy = (0, fy.memo)((function() {
      const {
        isTouchScreen: yb,
        clientEscMenuOptions: bb,
        scriptedCameraFacing: Wy,
        crosshairShownOverride: Uy
      } = (0, oy.h)(["isTouchScreen", "clientEscMenuOptions", "scriptedCameraFacing", "crosshairShownOverride"]), cb = (0, By.k)("gunshotOrigin"), Sy = (0, fy.useRef)(null), ly = (0, fy.useRef)(!1), [mb, Cy] = (0, fy.useState)(Ey);
      (0, Zy.i)("cameraZoomSet", Cy), (0, fy.useEffect)((() => {
        Cy(Ey())
      }), []);
      const Vy = (0, Py.j)("heldItemAim"),
        gb = Vy.gun;
      (0, fy.useEffect)((() => (0, ey.d)("crosshairAccuracy", Ty)), []), (0, Zy.i)("mouseState", (yb => {
        let {
          isDown: bb
        } = yb;
        ly.current = bb, Sy.current && (Sy.current.style.transform = bb ? "scale(1.4)" : "scale(1)")
      }));
      const Gy = (0, qb.f)(yb, bb.touchActionButtons);
      return (null !== Uy && void 0 !== Uy ? Uy : (0, Ky.g)(Vy, mb > 1, Gy, cb)) ? "movement" === Wy || "cursor" === Wy ? null : (0, sy.jsxs)(sy.Fragment, {
        children: [gb && (0, sy.jsx)(Jy, {}), !gb && (0, sy.jsx)("div", {
          className: hy()("Crosshair", {
            Touch: yb
          }),
          ref: Sy,
          style: {
            transform: ly.current ? "scale(1.4)" : "scale(1)"
          },
          children: "+"
        })]
      }) : null
    }));

    function Ey() {
      return cb.gameBridge.lookup("cameraZoom", null)
    }
    const ly = [{
        current: null
      }, {
        current: null
      }, {
        current: null
      }, {
        current: null
      }],
      mb = {
        current: null
      };
    let Cy = 0;

    function Ty(yb) {
      ly[0].current || mb.current ? Vy(yb) : Cy = yb
    }

    function Vy(yb) {
      if (ly[0].current) {
        const bb = `${(0,Ky.d)(yb)}vh`;
        ly[0].current.style.transform = `translateX(calc(0px - ${bb}))`, ly[1].current.style.transform = `translateX(calc(0px + ${bb}))`, ly[2].current.style.transform = `translateY(calc(0px - ${bb}))`, ly[3].current.style.transform = `translateY(calc(0px + ${bb}))`
      }
      mb.current && (mb.current.style.filter = `blur(${Math.round(yb/10)}px)`)
    }

    function Jy() {
      const yb = (0, Zy.m)("aimingOverlay", "none"),
        bb = "1.2vh",
        Wy = "0.3vh";
      return (0, fy.useEffect)((() => {
        Cy && Vy(Cy)
      }), []), (0, sy.jsxs)(sy.Fragment, {
        children: ["sniper" === yb && (0, sy.jsxs)("div", {
          ref: mb,
          className: "GunCrosshairOverlayWrapper",
          children: [(0, sy.jsx)("div", {
            className: "GunCrosshairOverlay"
          }), (0, sy.jsx)("div", {
            className: "GunCrosshairOverlayLine1"
          }), (0, sy.jsx)("div", {
            className: "GunCrosshairOverlayLine2"
          }), (0, sy.jsx)("div", {
            className: "GunCrosshairOverlayDot"
          })]
        }), (0, sy.jsxs)("div", {
          className: "GunCrosshairWrapper",
          style: {
            opacity: "sniper" === yb ? 0 : 1
          },
          children: [(0, sy.jsx)("div", {
            className: "GunCrosshair",
            style: {
              width: bb,
              height: Wy,
              top: "49.85vh",
              left: "calc(50vw - 0.6vh)"
            },
            ref: ly[0]
          }), (0, sy.jsx)("div", {
            className: "GunCrosshair",
            style: {
              width: bb,
              height: Wy,
              top: "49.85vh",
              left: "calc(50vw - 0.6vh)"
            },
            ref: ly[1]
          }), (0, sy.jsx)("div", {
            className: "GunCrosshair",
            style: {
              width: Wy,
              height: bb,
              top: "49.4vh",
              left: "calc(50vw - 0.15vh)"
            },
            ref: ly[2]
          }), (0, sy.jsx)("div", {
            className: "GunCrosshair",
            style: {
              width: Wy,
              height: bb,
              top: "49.4vh",
              left: "calc(50vw - 0.15vh)"
            },
            ref: ly[3]
          })]
        })]
      })
    }
  },
  35525: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => fy,
      d: () => Py,
      f: () => Zy
    });
    var Uy = Wy(547),
      hy = Wy(2234);

    function fy(yb) {
      return yb === (0, hy.g)().Jcy ? (0, hy.g)().eWy : yb
    }

    function Zy(yb) {
      return !(0, Uy.D)(yb) && fy(yb) === (0, hy.g)().eWy
    }
    const cb = "gravity";

    function Py() {
      return (0, hy.g)().physics[cb][1]
    }
  },
  35519: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => Cy
    });
    var Uy = Wy(35521),
      hy = Wy(167),
      fy = Wy(4068),
      Zy = Wy(35540),
      cb = Wy(35525),
      Py = Wy(271),
      oy = Wy.n(Py),
      By = Wy(1052),
      Ky = Wy(2234),
      ey = Wy(35533),
      qb = Wy(23),
      sy = Wy(19),
      Sy = Wy(35527);
    const Ey = new Set(["note"]);
    const ly = {
      stop: () => ly,
      fade: () => ly,
      rate: () => ly,
      stopsAtOnce: () => !1,
      isAlive: () => !1,
      getDurationMs: () => 0,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => ly,
      setPannerAttr: () => ly,
      setPosition: () => ly
    };
    class mb {
      constructor(yb) {
        let bb, {
          src: Wy,
          volumeScalar: hy,
          isSoundSprite: cb
        } = yb;
        this._howl = void 0, this._volumeMultiplier = void 0, this._spriteTrackSrc = void 0, this._loadFailed = !1, cb ? (bb = (0, Uy.g)(Wy), this._spriteTrackSrc = bb) : bb = {
          src: By.clientSideServerUrls.staticUrl + Wy
        }, this._volumeMultiplier = new Zy.j, this._volumeMultiplier.setMultiplierType("persistentScalar", hy), this._howl = new fy.Howl({
          ...bb,
          pool: 15
        }), this._howl.once("loaderror", (() => {
          this._loadFailed = !0
        }))
      }
      play() {
        let yb, bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
          Wy = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (bb) {
          var Uy;
          if (null === (Uy = this._spriteTrackSrc) || void 0 === Uy || !Uy.sprite[bb]) throw new Error("No such sprite in your spritetrack");
          yb = this._howl.play(bb)
        } else yb = this._howl.play();
        Wy && this._howl.loop(!0, yb);
        let hy = 1;
        this._howl.volume(this._volumeMultiplier.getTotalMultipliedVal(), yb);
        const fy = {
          stop: () => (this._howl.stop(yb), fy),
          fade: (bb, Wy, Uy) => (this._howl.fade(bb, Wy, Uy, yb), fy),
          rate: bb => (this._howl.rate(bb, yb), fy),
          stopsAtOnce: () => this._howl.playing(yb) && !this._howl._playLock,
          isAlive: () => {
            const bb = this._howl._soundById(yb);
            return !this._loadFailed && !!bb && !bb._ended
          },
          getDurationMs: () => this._howl._soundById(yb) ? 1e3 * this._howl.duration(yb) / this._howl.rate(yb) : 0,
          getVolume: () => hy * this._volumeMultiplier.getTotalMultipliedVal(),
          getRelativeVolume: () => hy,
          setRelativeVolume: bb => {
            if (bb > 1) throw new Error("Volume should be <= 1");
            return hy = sy.d.get("soundOnFromAd") ? bb : 0, this._howl.volume(Math.min(1, hy * this._volumeMultiplier.getTotalMultipliedVal()), yb), fy
          },
          setPannerAttr: bb => {
            let {
              coneInnerAngle: Wy,
              coneOuterAngle: Uy = 360,
              coneOuterGain: hy,
              distanceModel: Zy,
              maxDistance: cb,
              panningModel: Py,
              refDistance: oy,
              rolloffFactor: By
            } = bb;
            return this._setPannerAttr({
              id: yb,
              coneInnerAngle: Wy,
              coneOuterAngle: Uy,
              coneOuterGain: hy,
              distanceModel: Zy,
              maxDistance: cb,
              panningModel: Py,
              refDistance: oy,
              rolloffFactor: By
            }), fy
          },
          setPosition: bb => (this._howl.pos(bb[2], bb[1], bb[0], yb), fy)
        };
        return fy
      }
      setGlobalVolume(yb) {
        this._volumeMultiplier.setMultiplierType("globalVolume", yb), this._howl.volume(yb)
      }
      _setPannerAttr(yb) {
        let {
          id: bb,
          coneInnerAngle: Wy = 360,
          coneOuterAngle: Uy = 360,
          coneOuterGain: hy = 0,
          distanceModel: fy = "inverse",
          maxDistance: Zy = 1e3,
          panningModel: cb = "HRTF",
          refDistance: Py = ey.g,
          rolloffFactor: oy = 1
        } = yb;
        this._howl.pannerAttr({
          coneOuterAngle: Uy
        }, bb);
        const By = {
          coneInnerAngle: Wy,
          coneOuterAngle: Uy,
          coneOuterGain: hy,
          distanceModel: fy,
          maxDistance: Zy,
          panningModel: cb,
          refDistance: Py,
          rolloffFactor: oy
        };
        this._howl.pannerAttr(By, bb)
      }
    }
    const Cy = new class {
      constructor() {
        this.stereoSheets = {}, this.spatialSheets = {}, this.spatialVoices = new Sy.d, qb.g.subscribe("appManagerUpdated|soundVolume", (yb => {
          const bb = Object.values(this.stereoSheets).concat(Object.values(this.spatialSheets));
          for (const Wy of bb) Wy.setGlobalVolume(yb)
        }))
      }
      play(yb, bb) {
        var Wy;
        let fy, Zy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null === (Wy = (0, Ky.g)()) || void 0 === Wy ? void 0 : Wy.eWy,
          Py = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ey.e,
          By = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : ey.g,
          qb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        var Cy;
        (0, Ky.g)() ? fy = !!Array.isArray(Zy) || (0, cb.c)(Zy) !== (null === (Cy = (0, Ky.g)()) || void 0 === Cy ? void 0 : Cy.eWy): fy = !1;
        const Ty = fy ? this.spatialSheets : this.stereoSheets,
          Vy = (0, Uy.k)(yb);
        if (!Ty[Vy]) {
          const yb = new mb({
            src: Vy,
            isSoundSprite: !0,
            volumeScalar: 1
          });
          yb.setGlobalVolume(sy.d.get("soundVolume")), Ty[Vy] = yb
        }
        const Jy = Ty[Vy];
        if (!fy) {
          const Wy = Jy.play(yb, qb);
          return Wy.setRelativeVolume(bb), Wy
        }
        const gb = (0, Ky.g)(),
          Gy = Array.isArray(Zy) ? Zy : gb.Km.Tl(Zy),
          Oy = gb.Km.Tl(gb.eWy);
        if (!Gy || oy().sqrDist(Gy, Oy) > Py * Py) return ly;
        let Ry;
        if (!qb) {
          if (!this.spatialVoices.admit({
              group: Ey.has(Vy) ? null : (0, Sy.f)(yb),
              loudness: (0, Sy.e)(bb, oy().yb(Gy, Oy), By),
              startMs: performance.now(),
              getDurationMs: () => {
                var yb, bb;
                return null !== (yb = null === (bb = Ry) || void 0 === bb ? void 0 : bb.getDurationMs()) && void 0 !== yb ? yb : 0
              },
              isAlive: () => {
                var yb, bb;
                return null !== (yb = null === (bb = Ry) || void 0 === bb ? void 0 : bb.isAlive()) && void 0 !== yb && yb
              },
              canStop: () => {
                var yb, bb;
                return null !== (yb = null === (bb = Ry) || void 0 === bb ? void 0 : bb.stopsAtOnce()) && void 0 !== yb && yb
              },
              stop: () => {
                var yb;
                null === (yb = Ry) || void 0 === yb || yb.stop()
              }
            })) return ly
        }
        return Ry = Jy.play(yb, qb), Ry.setRelativeVolume(bb), Ry.setPannerAttr({
          refDistance: By
        }), Ry.setPosition([Gy[0], Gy[1] + hy.c.oq * hy.c.playerEyeToHeightRatio, Gy[2]]), Ry
      }
    }
  },
  35576: (yb, bb, Wy) => {
    function Uy(yb, bb) {
      var Wy, Uy, hy, fy, Zy, cb, Py, oy;
      return yb.name === bb.name && ((null === (Wy = yb.attributes) || void 0 === Wy || null === (Uy = Wy.customAttributes) || void 0 === Uy ? void 0 : Uy.stackKey) === (null === (hy = bb.attributes) || void 0 === hy || null === (fy = hy.customAttributes) || void 0 === fy ? void 0 : fy.stackKey) && (!0 !== (null === (Zy = yb.attributes) || void 0 === Zy || null === (cb = Zy.customAttributes) || void 0 === cb ? void 0 : cb.unstackable) && !0 !== (null === (Py = bb.attributes) || void 0 === Py || null === (oy = Py.customAttributes) || void 0 === oy ? void 0 : oy.unstackable)))
    }
    Wy.d(bb, {
      d: () => Uy
    })
  },
  5736: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => Zy,
      g: () => hy,
      k: () => Py,
      l: () => fy,
      m: () => oy,
      q: () => Uy,
      t: () => cb
    });
    let Uy = function(yb) {
        return yb[yb.DEFAULT = 0] = "DEFAULT", yb[yb.BOAT = 1] = "BOAT", yb[yb.GLIDER = 2] = "GLIDER", yb[yb.BALLOON = 3] = "BALLOON", yb[yb.SLEEPING = 4] = "SLEEPING", yb[yb.RIDING_MOB = 5] = "RIDING_MOB", yb[yb.CAR = 6] = "CAR", yb[yb.HOVERCRAFT = 7] = "HOVERCRAFT", yb
      }({}),
      hy = function(yb) {
        return yb[yb.WOOD = 0] = "WOOD", yb[yb.OBSIDIAN = 1] = "OBSIDIAN", yb[yb.SPEED = 2] = "SPEED", yb
      }({}),
      fy = function(yb) {
        return yb[yb.WOOD = 0] = "WOOD", yb[yb.IRON = 1] = "IRON", yb[yb.GOLD = 2] = "GOLD", yb[yb.DIAMOND = 3] = "DIAMOND", yb
      }({}),
      Zy = function(yb) {
        return yb[yb.YELLOW = 0] = "YELLOW", yb[yb.WHITE = 1] = "WHITE", yb[yb.RED = 2] = "RED", yb[yb.PURPLE = 3] = "PURPLE", yb[yb.PINK = 4] = "PINK", yb[yb.ORANGE = 5] = "ORANGE", yb[yb.MAGENTA = 6] = "MAGENTA", yb[yb.LIME = 7] = "LIME", yb[yb.LIGHT_GRAY = 8] = "LIGHT_GRAY", yb[yb.LIGHT_BLUE = 9] = "LIGHT_BLUE", yb[yb.GREEN = 10] = "GREEN", yb[yb.GRAY = 11] = "GRAY", yb[yb.CYAN = 12] = "CYAN", yb[yb.BROWN = 13] = "BROWN", yb[yb.BLUE = 14] = "BLUE", yb[yb.BLACK = 15] = "BLACK", yb
      }({}),
      cb = function(yb) {
        return yb[yb.ROTATION_1 = 0] = "ROTATION_1", yb[yb.ROTATION_2 = 1] = "ROTATION_2", yb[yb.ROTATION_3 = 2] = "ROTATION_3", yb[yb.ROTATION_4 = 3] = "ROTATION_4", yb
      }({}),
      Py = function(yb) {
        return yb[yb.KART = 0] = "KART", yb[yb.OFF_ROADER = 1] = "OFF_ROADER", yb[yb.CAR = 2] = "CAR", yb[yb.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", yb[yb.ARMORED_CAR = 4] = "ARMORED_CAR", yb[yb.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", yb[yb.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", yb[yb.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", yb
      }({});
    Uy.DEFAULT, Uy.BOAT, hy.SPEED, Uy.GLIDER, fy.DIAMOND, Uy.BALLOON, Zy.BLACK, Uy.SLEEPING, cb.ROTATION_4, Uy.RIDING_MOB, Uy.CAR, Py.MOONSTONE_MINING_DRILL, Uy.HOVERCRAFT;
    let oy = function(yb) {
      return yb[yb.NORMAL = 0] = "NORMAL", yb[yb.GLIDING = 1] = "GLIDING", yb[yb.FLOATING = 2] = "FLOATING", yb
    }({})
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);