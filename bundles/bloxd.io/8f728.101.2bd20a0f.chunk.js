export const id = 101;
export const ids = [101];
export const modules = {
  35259: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => ec,
      g: () => pc
    });
    var Vc = nc(912),
      Ic = nc.n(Vc),
      rB = nc(73),
      uc = nc(1252),
      sc = nc(1566),
      Mc = nc(1609),
      Pc = nc(27),
      qB = nc(1946),
      Oc = nc(35267),
      Tc = nc(35270),
      fc = nc(7787),
      mB = nc(957);
    const ec = (0, rB.memo)((function() {
      const {
        isTouchScreen: cB,
        clientEscMenuOptions: Bc,
        scriptedCameraFacing: nc,
        crosshairShownOverride: Vc
      } = (0, Pc.j)(["isTouchScreen", "clientEscMenuOptions", "scriptedCameraFacing", "crosshairShownOverride"]), sc = (0, qB.j)("gunshotOrigin"), ec = (0, rB.useRef)(null), Sc = (0, rB.useRef)(!1), [yB, zB] = (0, rB.useState)(tB);
      (0, uc.f)("cameraZoomSet", zB), (0, rB.useEffect)((() => {
        zB(tB())
      }), []);
      const hc = (0, Mc.g)("heldItemAim"),
        lc = hc.gun;
      (0, rB.useEffect)((() => (0, Tc.e)("crosshairAccuracy", pc)), []), (0, uc.f)("mouseState", (cB => {
        let {
          isDown: Bc
        } = cB;
        Sc.current = Bc, ec.current && (ec.current.style.transform = Bc ? "scale(1.4)" : "scale(1)")
      }));
      const Yc = (0, fc.f)(cB, Bc.touchActionButtons);
      return (null !== Vc && void 0 !== Vc ? Vc : (0, Oc.f)(hc, yB > 1, Yc, sc)) ? "movement" === nc || "cursor" === nc ? null : (0, mB.jsxs)(mB.Fragment, {
        children: [lc && (0, mB.jsx)(aB, {}), !lc && (0, mB.jsx)("div", {
          className: Ic()("Crosshair", {
            Touch: cB
          }),
          ref: ec,
          style: {
            transform: Sc.current ? "scale(1.4)" : "scale(1)"
          },
          children: "+"
        })]
      }) : null
    }));

    function tB() {
      return sc.gameBridge.lookup("cameraZoom", null)
    }
    const Sc = [{
        current: null
      }, {
        current: null
      }, {
        current: null
      }, {
        current: null
      }],
      yB = {
        current: null
      };
    let zB = 0;

    function pc(cB) {
      Sc[0].current || yB.current ? hc(cB) : zB = cB
    }

    function hc(cB) {
      if (Sc[0].current) {
        const Bc = `${(0,Oc.c)(cB)}vh`;
        Sc[0].current.style.transform = `translateX(calc(0px - ${Bc}))`, Sc[1].current.style.transform = `translateX(calc(0px + ${Bc}))`, Sc[2].current.style.transform = `translateY(calc(0px - ${Bc}))`, Sc[3].current.style.transform = `translateY(calc(0px + ${Bc}))`
      }
      yB.current && (yB.current.style.filter = `blur(${Math.round(cB/10)}px)`)
    }

    function aB() {
      const cB = (0, uc.g)("aimingOverlay", "none"),
        Bc = "1.2vh",
        nc = "0.3vh";
      return (0, rB.useEffect)((() => {
        zB && hc(zB)
      }), []), (0, mB.jsxs)(mB.Fragment, {
        children: ["sniper" === cB && (0, mB.jsxs)("div", {
          ref: yB,
          className: "GunCrosshairOverlayWrapper",
          children: [(0, mB.jsx)("div", {
            className: "GunCrosshairOverlay"
          }), (0, mB.jsx)("div", {
            className: "GunCrosshairOverlayLine1"
          }), (0, mB.jsx)("div", {
            className: "GunCrosshairOverlayLine2"
          }), (0, mB.jsx)("div", {
            className: "GunCrosshairOverlayDot"
          })]
        }), (0, mB.jsxs)("div", {
          className: "GunCrosshairWrapper",
          style: {
            opacity: "sniper" === cB ? 0 : 1
          },
          children: [(0, mB.jsx)("div", {
            className: "GunCrosshair",
            style: {
              width: Bc,
              height: nc,
              top: "49.85vh",
              left: "calc(50vw - 0.6vh)"
            },
            ref: Sc[0]
          }), (0, mB.jsx)("div", {
            className: "GunCrosshair",
            style: {
              width: Bc,
              height: nc,
              top: "49.85vh",
              left: "calc(50vw - 0.6vh)"
            },
            ref: Sc[1]
          }), (0, mB.jsx)("div", {
            className: "GunCrosshair",
            style: {
              width: nc,
              height: Bc,
              top: "49.4vh",
              left: "calc(50vw - 0.15vh)"
            },
            ref: Sc[2]
          }), (0, mB.jsx)("div", {
            className: "GunCrosshair",
            style: {
              width: nc,
              height: Bc,
              top: "49.4vh",
              left: "calc(50vw - 0.15vh)"
            },
            ref: Sc[3]
          })]
        })]
      })
    }
  },
  35377: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => rB,
      h: () => Mc,
      j: () => uc
    });
    var Vc = nc(569),
      Ic = nc(2187);

    function rB(cB) {
      return cB === (0, Ic.g)().tMc ? (0, Ic.g)().Pnc : cB
    }

    function uc(cB) {
      return !(0, Vc.E)(cB) && rB(cB) === (0, Ic.g)().Pnc
    }
    const sc = "gravity";

    function Mc() {
      return (0, Ic.g)().physics[sc][1]
    }
  },
  35363: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => zB
    });
    var Vc = nc(35371),
      Ic = nc(174),
      rB = nc(3907),
      uc = nc(35397),
      sc = nc(35377),
      Mc = nc(309),
      Pc = nc.n(Mc),
      qB = nc(1062),
      Oc = nc(2187),
      Tc = nc(35391),
      fc = nc(35),
      mB = nc(27),
      ec = nc(35383);
    const tB = new Set(["note"]);
    const Sc = {
      stop: () => Sc,
      fade: () => Sc,
      rate: () => Sc,
      stopsAtOnce: () => !1,
      isAlive: () => !1,
      getDurationMs: () => 0,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => Sc,
      setPannerAttr: () => Sc,
      setPosition: () => Sc
    };
    class yB {
      constructor(cB) {
        let Bc, {
          src: nc,
          volumeScalar: Ic,
          isSoundSprite: sc
        } = cB;
        this._howl = void 0, this._volumeMultiplier = void 0, this._spriteTrackSrc = void 0, this._loadFailed = !1, sc ? (Bc = (0, Vc.f)(nc), this._spriteTrackSrc = Bc) : Bc = {
          src: qB.clientSideServerUrls.staticUrl + nc
        }, this._volumeMultiplier = new uc.j, this._volumeMultiplier.setMultiplierType("persistentScalar", Ic), this._howl = new rB.Howl({
          ...Bc,
          pool: 15
        }), this._howl.once("loaderror", (() => {
          this._loadFailed = !0
        }))
      }
      play() {
        let cB, Bc = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
          nc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (Bc) {
          var Vc;
          if (null === (Vc = this._spriteTrackSrc) || void 0 === Vc || !Vc.sprite[Bc]) throw new Error("No such sprite in your spritetrack");
          cB = this._howl.play(Bc)
        } else cB = this._howl.play();
        nc && this._howl.loop(!0, cB);
        let Ic = 1;
        this._howl.volume(this._volumeMultiplier.getTotalMultipliedVal(), cB);
        const rB = {
          stop: () => (this._howl.stop(cB), rB),
          fade: (Bc, nc, Vc) => (this._howl.fade(Bc, nc, Vc, cB), rB),
          rate: Bc => (this._howl.rate(Bc, cB), rB),
          stopsAtOnce: () => this._howl.playing(cB) && !this._howl._playLock,
          isAlive: () => {
            const Bc = this._howl._soundById(cB);
            return !this._loadFailed && !!Bc && !Bc._ended
          },
          getDurationMs: () => this._howl._soundById(cB) ? 1e3 * this._howl.duration(cB) / this._howl.rate(cB) : 0,
          getVolume: () => Ic * this._volumeMultiplier.getTotalMultipliedVal(),
          getRelativeVolume: () => Ic,
          setRelativeVolume: Bc => {
            if (Bc > 1) throw new Error("Volume should be <= 1");
            return Ic = mB.d.get("soundOnFromAd") ? Bc : 0, this._howl.volume(Math.min(1, Ic * this._volumeMultiplier.getTotalMultipliedVal()), cB), rB
          },
          setPannerAttr: Bc => {
            let {
              coneInnerAngle: nc,
              coneOuterAngle: Vc = 360,
              coneOuterGain: Ic,
              distanceModel: uc,
              maxDistance: sc,
              panningModel: Mc,
              refDistance: Pc,
              rolloffFactor: qB
            } = Bc;
            return this._setPannerAttr({
              id: cB,
              coneInnerAngle: nc,
              coneOuterAngle: Vc,
              coneOuterGain: Ic,
              distanceModel: uc,
              maxDistance: sc,
              panningModel: Mc,
              refDistance: Pc,
              rolloffFactor: qB
            }), rB
          },
          setPosition: Bc => (this._howl.pos(Bc[2], Bc[1], Bc[0], cB), rB)
        };
        return rB
      }
      setGlobalVolume(cB) {
        this._volumeMultiplier.setMultiplierType("globalVolume", cB), this._howl.volume(cB)
      }
      _setPannerAttr(cB) {
        let {
          id: Bc,
          coneInnerAngle: nc = 360,
          coneOuterAngle: Vc = 360,
          coneOuterGain: Ic = 0,
          distanceModel: rB = "inverse",
          maxDistance: uc = 1e3,
          panningModel: sc = "HRTF",
          refDistance: Mc = Tc.g,
          rolloffFactor: Pc = 1
        } = cB;
        this._howl.pannerAttr({
          coneOuterAngle: Vc
        }, Bc);
        const qB = {
          coneInnerAngle: nc,
          coneOuterAngle: Vc,
          coneOuterGain: Ic,
          distanceModel: rB,
          maxDistance: uc,
          panningModel: sc,
          refDistance: Mc,
          rolloffFactor: Pc
        };
        this._howl.pannerAttr(qB, Bc)
      }
    }
    const zB = new class {
      constructor() {
        this.stereoSheets = {}, this.spatialSheets = {}, this.spatialVoices = new ec.e, fc.i.subscribe("appManagerUpdated|soundVolume", (cB => {
          const Bc = Object.values(this.stereoSheets).concat(Object.values(this.spatialSheets));
          for (const nc of Bc) nc.setGlobalVolume(cB)
        }))
      }
      play(cB, Bc) {
        var nc;
        let rB, uc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null === (nc = (0, Oc.g)()) || void 0 === nc ? void 0 : nc.Pnc,
          Mc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Tc.e,
          qB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Tc.g,
          fc = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        var zB;
        (0, Oc.g)() ? rB = !!Array.isArray(uc) || (0, sc.d)(uc) !== (null === (zB = (0, Oc.g)()) || void 0 === zB ? void 0 : zB.Pnc): rB = !1;
        const pc = rB ? this.spatialSheets : this.stereoSheets,
          hc = (0, Vc.i)(cB);
        if (!pc[hc]) {
          const cB = new yB({
            src: hc,
            isSoundSprite: !0,
            volumeScalar: 1
          });
          cB.setGlobalVolume(mB.d.get("soundVolume")), pc[hc] = cB
        }
        const aB = pc[hc];
        if (!rB) {
          const nc = aB.play(cB, fc);
          return nc.setRelativeVolume(Bc), nc
        }
        const lc = (0, Oc.g)(),
          Yc = Array.isArray(uc) ? uc : lc.BC.rC(uc),
          Lc = lc.BC.rC(lc.Pnc);
        if (!Yc || Pc().sqrDist(Yc, Lc) > Mc * Mc) return Sc;
        let gB;
        if (!fc) {
          if (!this.spatialVoices.admit({
              group: tB.has(hc) ? null : (0, ec.i)(cB),
              loudness: (0, ec.g)(Bc, Pc().cB(Yc, Lc), qB),
              startMs: performance.now(),
              getDurationMs: () => {
                var cB, Bc;
                return null !== (cB = null === (Bc = gB) || void 0 === Bc ? void 0 : Bc.getDurationMs()) && void 0 !== cB ? cB : 0
              },
              isAlive: () => {
                var cB, Bc;
                return null !== (cB = null === (Bc = gB) || void 0 === Bc ? void 0 : Bc.isAlive()) && void 0 !== cB && cB
              },
              canStop: () => {
                var cB, Bc;
                return null !== (cB = null === (Bc = gB) || void 0 === Bc ? void 0 : Bc.stopsAtOnce()) && void 0 !== cB && cB
              },
              stop: () => {
                var cB;
                null === (cB = gB) || void 0 === cB || cB.stop()
              }
            })) return Sc
        }
        return gB = aB.play(cB, fc), gB.setRelativeVolume(Bc), gB.setPannerAttr({
          refDistance: qB
        }), gB.setPosition([Yc[0], Yc[1] + Ic.e.wY * Ic.e.playerEyeToHeightRatio, Yc[2]]), gB
      }
    }
  },
  35451: (cB, Bc, nc) => {
    function Vc(cB, Bc) {
      var nc, Vc, Ic, rB, uc, sc, Mc, Pc;
      return cB.name === Bc.name && ((null === (nc = cB.attributes) || void 0 === nc || null === (Vc = nc.customAttributes) || void 0 === Vc ? void 0 : Vc.stackKey) === (null === (Ic = Bc.attributes) || void 0 === Ic || null === (rB = Ic.customAttributes) || void 0 === rB ? void 0 : rB.stackKey) && (!0 !== (null === (uc = cB.attributes) || void 0 === uc || null === (sc = uc.customAttributes) || void 0 === sc ? void 0 : sc.unstackable) && !0 !== (null === (Mc = Bc.attributes) || void 0 === Mc || null === (Pc = Mc.customAttributes) || void 0 === Pc ? void 0 : Pc.unstackable)))
    }
    nc.d(Bc, {
      e: () => Vc
    })
  },
  35538: (cB, Bc, nc) => {
    function Vc(cB) {
      return cB.includes("Leaf Bed")
    }

    function Ic(cB) {
      return / Bed(?: Head)?(?:\||$)/.test(cB) && !Vc(cB)
    }

    function rB(cB) {
      return cB.includes(" Strongbed")
    }

    function uc(cB) {
      return Vc(cB) || Ic(cB) || rB(cB)
    }
    nc.d(Bc, {
      c: () => uc,
      g: () => Vc,
      k: () => rB,
      o: () => Ic
    })
  },
  35531: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Pc
    });
    var Vc = nc(35538),
      Ic = nc(8235);
    const rB = [],
      uc = [],
      sc = [],
      Mc = [];
    for (const qB of Object.keys(Ic.o))(0, Vc.g)(qB) ? rB.push(qB) : (0, Vc.o)(qB) && uc.push(qB), (0, Vc.k)(qB) && sc.push(qB), (qB.includes(" Bed Head") || qB.includes(" Strongbed Head")) && Mc.push(qB);
    const Pc = {
      leafBeds: rB,
      woolBeds: uc,
      strongBeds: sc,
      beds: [...rB, ...uc, ...sc],
      bedHeads: Mc,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  5454: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => uc,
      f: () => Ic,
      i: () => Mc,
      k: () => rB,
      n: () => Pc,
      o: () => Vc,
      s: () => sc
    });
    let Vc = function(cB) {
        return cB[cB.DEFAULT = 0] = "DEFAULT", cB[cB.BOAT = 1] = "BOAT", cB[cB.GLIDER = 2] = "GLIDER", cB[cB.BALLOON = 3] = "BALLOON", cB[cB.SLEEPING = 4] = "SLEEPING", cB[cB.RIDING_MOB = 5] = "RIDING_MOB", cB[cB.CAR = 6] = "CAR", cB[cB.HOVERCRAFT = 7] = "HOVERCRAFT", cB
      }({}),
      Ic = function(cB) {
        return cB[cB.WOOD = 0] = "WOOD", cB[cB.OBSIDIAN = 1] = "OBSIDIAN", cB[cB.SPEED = 2] = "SPEED", cB
      }({}),
      rB = function(cB) {
        return cB[cB.WOOD = 0] = "WOOD", cB[cB.IRON = 1] = "IRON", cB[cB.GOLD = 2] = "GOLD", cB[cB.DIAMOND = 3] = "DIAMOND", cB
      }({}),
      uc = function(cB) {
        return cB[cB.YELLOW = 0] = "YELLOW", cB[cB.WHITE = 1] = "WHITE", cB[cB.RED = 2] = "RED", cB[cB.PURPLE = 3] = "PURPLE", cB[cB.PINK = 4] = "PINK", cB[cB.ORANGE = 5] = "ORANGE", cB[cB.MAGENTA = 6] = "MAGENTA", cB[cB.LIME = 7] = "LIME", cB[cB.LIGHT_GRAY = 8] = "LIGHT_GRAY", cB[cB.LIGHT_BLUE = 9] = "LIGHT_BLUE", cB[cB.GREEN = 10] = "GREEN", cB[cB.GRAY = 11] = "GRAY", cB[cB.CYAN = 12] = "CYAN", cB[cB.BROWN = 13] = "BROWN", cB[cB.BLUE = 14] = "BLUE", cB[cB.BLACK = 15] = "BLACK", cB
      }({}),
      sc = function(cB) {
        return cB[cB.ROTATION_1 = 0] = "ROTATION_1", cB[cB.ROTATION_2 = 1] = "ROTATION_2", cB[cB.ROTATION_3 = 2] = "ROTATION_3", cB[cB.ROTATION_4 = 3] = "ROTATION_4", cB
      }({}),
      Mc = function(cB) {
        return cB[cB.KART = 0] = "KART", cB[cB.OFF_ROADER = 1] = "OFF_ROADER", cB[cB.CAR = 2] = "CAR", cB[cB.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", cB[cB.ARMORED_CAR = 4] = "ARMORED_CAR", cB[cB.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", cB[cB.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", cB[cB.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", cB
      }({});
    Vc.DEFAULT, Vc.BOAT, Ic.SPEED, Vc.GLIDER, rB.DIAMOND, Vc.BALLOON, uc.BLACK, Vc.SLEEPING, sc.ROTATION_4, Vc.RIDING_MOB, Vc.CAR, Mc.MOONSTONE_MINING_DRILL, Vc.HOVERCRAFT;
    let Pc = function(cB) {
      return cB[cB.NORMAL = 0] = "NORMAL", cB[cB.GLIDING = 1] = "GLIDING", cB[cB.FLOATING = 2] = "FLOATING", cB
    }({})
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);