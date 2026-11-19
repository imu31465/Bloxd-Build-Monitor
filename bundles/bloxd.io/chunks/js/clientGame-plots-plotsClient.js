export const id = 22;
export const ids = [22];
export const modules = {
  36025: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => iY,
      e: () => yY,
      g: () => sY,
      h: () => uY
    });
    var FY = DY(8745),
      AY = DY(36032),
      IY = DY(36034),
      RY = DY(8111),
      OY = DY(1430),
      gY = DY(61),
      aY = DY(76),
      vY = DY(1125);

    function uY() {
      var YY;
      return (0, OY.k)(AY.d, (0, AY.n)()), (0, vY.jsx)(vY.Fragment, {
        children: null === (YY = (0, AY.n)()) || void 0 === YY ? void 0 : YY.content
      })
    }

    function sY(YY) {
      var rY;
      let {
        show: DY
      } = YY;
      (0, OY.k)(AY.d, (0, AY.n)());
      const aY = null === (rY = (0, AY.n)()) || void 0 === rY ? void 0 : rY.menu;
      return (0, gY.useEffect)((() => {
        var YY;
        DY || (null === aY || void 0 === aY || null === (YY = aY.onClose) || void 0 === YY || YY.call(aY), (0, IY.t)())
      }), [DY, aY]), (0, gY.useEffect)((() => DY ? (0, RY.f)(IY.y, IY.i) : void 0), [DY]), (0, vY.jsx)(FY.d, {
        showing: DY,
        globallyUniqueKey: "clientGameMenu",
        children: null === aY || void 0 === aY ? void 0 : aY.content
      })
    }

    function iY(YY) {
      let {
        placement: rY = "bottom"
      } = YY;
      return (0, vY.jsx)("div", {
        id: `clientGameHud-${rY}`,
        style: {
          display: "contents"
        }
      })
    }

    function yY(YY) {
      let {
        children: rY,
        placement: DY = "bottom"
      } = YY;
      const [FY, AY] = (0, gY.useState)(null);
      return (0, gY.useEffect)((() => {
        AY(document.getElementById(`clientGameHud-${DY}`))
      }), [DY]), FY ? (0, aY.createPortal)(rY, FY) : null
    }
  },
  8745: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => IY
    });
    var FY = DY(4093),
      AY = DY(4097);

    function IY(YY) {
      let {
        children: rY,
        showing: DY,
        globallyUniqueKey: IY,
        alwaysMountChildren: RY = !1,
        doGameplayStartStopOnShow: OY = !0,
        keepsMovement: gY = !1
      } = YY;
      return (0, AY.b)(!0, DY, IY, gY), (0, FY.c)(OY, DY), DY || RY ? rY : null
    }
  },
  36130: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => IY,
      h: () => RY,
      j: () => OY,
      l: () => gY
    });
    var FY = DY(61),
      AY = DY(1143);
    const IY = 8,
      RY = "InGameHeaderContainer",
      OY = "TopRightElements";

    function gY(YY) {
      const [rY] = (0, AY.c)(), [DY, gY] = (0, FY.useState)(!1);
      return (0, FY.useLayoutEffect)((() => {
        if (!YY) return;
        const rY = document.querySelector(`.${RY}`),
          DY = document.querySelector(`.${OY}`),
          FY = () => {
            const FY = YY.getBoundingClientRect(),
              AY = rY ? rY.getBoundingClientRect().right : 0,
              RY = DY ? DY.getBoundingClientRect().left : window.innerWidth,
              OY = FY.left < AY + IY,
              aY = FY.right > RY - IY;
            gY(OY || aY)
          };
        FY();
        const AY = new ResizeObserver(FY);
        return AY.observe(YY), rY && AY.observe(rY), DY && AY.observe(DY), () => {
          AY.disconnect()
        }
      }), [YY, rY]), DY
    }
  },
  8111: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => IY,
      f: () => AY
    });
    let FY = null;
    const AY = function(YY) {
        const rY = {
          cycle: YY,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return FY = rY, () => {
          FY === rY && (FY = null)
        }
      },
      IY = () => {
        var YY;
        return null !== (YY = FY) && void 0 !== YY && YY.canCycle() ? FY.cycle : null
      }
  },
  36034: (YY, rY, DY) => {
    DY.d(rY, {
      C: () => EY,
      e: () => IY,
      i: () => QY,
      l: () => oY,
      n: () => OY,
      r: () => sY,
      t: () => WY,
      v: () => uY,
      x: () => mY,
      y: () => yY
    });
    var FY = DY(19),
      AY = DY(25);
    const IY = "clientGameInventoryButtonsChanged",
      RY = new Map;

    function OY() {
      return [...RY.values()].sort(((YY, rY) => {
        var DY, FY;
        return (null !== (DY = YY.order) && void 0 !== DY ? DY : 0) - (null !== (FY = rY.order) && void 0 !== FY ? FY : 0)
      }))
    }
    let gY = null;

    function aY(YY) {
      gY = YY
    }
    let vY = !1;

    function uY(YY) {
      vY = !0;
      try {
        YY.onClick()
      } finally {
        vY = !1
      }
      YY.panel && "clientGame" === FY.b.get("openInGameMenuName") && aY(YY.id)
    }

    function sY() {
      return vY
    }

    function iY() {
      return OY().filter((YY => YY.panel && !YY.disabled))
    }

    function yY(YY) {
      const rY = iY(),
        DY = rY.findIndex((YY => YY.id === gY));
      return !(DY < 0 || rY.length < 2) && (uY(rY[(DY + YY + rY.length) % rY.length]), !0)
    }

    function QY() {
      return null !== gY && iY().length > 1
    }

    function oY() {
      aY(null)
    }

    function WY() {
      "inventory" !== FY.b.get("openInGameMenuName") && aY(null)
    }

    function EY() {
      const YY = gY;
      return aY(null), YY
    }

    function mY(YY) {
      return RY.set(YY.id, YY), AY.g.vo(IY, OY(), !0), () => {
        RY.get(YY.id) === YY && (RY.delete(YY.id), AY.g.vo(IY, OY()))
      }
    }
  },
  36032: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => OY,
      f: () => oY,
      h: () => WY,
      j: () => sY,
      n: () => aY,
      o: () => QY,
      p: () => iY,
      q: () => vY
    });
    var FY = DY(19),
      AY = DY(25),
      IY = DY(1287),
      RY = DY(36034);
    const OY = "clientGameUiChanged";
    let gY = null;

    function aY() {
      return gY
    }

    function vY(YY, rY) {
      const DY = {
        content: YY,
        menu: rY
      };
      return gY = DY, AY.g.vo(OY, gY, !0), () => {
        gY === DY && (gY = null, yY = !1, oY(), AY.g.vo(OY, null))
      }
    }
    let uY = null;

    function sY() {
      return uY
    }

    function iY(YY) {
      return uY = YY, () => {
        uY === YY && (uY = null)
      }
    }
    let yY = !1;

    function QY() {
      const YY = FY.b.get("openInGameMenuName");
      "clientGame" !== YY && (yY = "inventory" === YY), (0, RY.r)() || (0, RY.l)(), (0, IY.k)(IY.d), FY.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function oY() {
      EY(!1)
    }

    function WY() {
      EY(yY)
    }

    function EY(YY) {
      "clientGame" === FY.b.get("openInGameMenuName") && FY.b.set({
        openInGameMenuName: YY ? "inventory" : null
      }), YY || (0, RY.l)(), yY = !1
    }
  },
  37894: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => RY,
      f: () => OY,
      g: () => gY
    });
    const FY = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      AY = [0, 1, 2, 0, 2, 3],
      IY = [4, 5];

    function RY(YY, rY, DY, FY, AY) {
      for (let RY = 0; RY < 6; RY++) IY.includes(RY) === AY && aY(YY, rY, DY, FY, RY)
    }

    function OY(YY, rY, DY, FY) {
      for (let AY = 0; AY < 6; AY++) aY(YY, rY, DY, FY, AY)
    }

    function gY(YY, rY, DY, IY, RY) {
      for (let OY = 0; OY < 6; OY++)
        for (const gY of [0, 1]) {
          const [aY, vY, uY] = [gY + 2, gY + 1, (gY + 3) % 4], sY = YY.length / 3;
          for (const [rY, AY] of [
              [gY, vY],
              [aY, vY],
              [aY, uY],
              [gY, uY]
            ])
            for (let gY = 0; gY < 3; gY++) {
              const aY = FY[3 * (4 * OY + rY) + gY],
                vY = FY[3 * (4 * OY + AY) + gY];
              YY.push((aY + (vY - aY) * RY) * IY / 2 + DY[gY])
            }
          for (const YY of AY) rY.push(sY + YY)
        }
    }

    function aY(YY, rY, DY, IY, RY) {
      let [OY, gY, aY] = DY, [vY, uY, sY] = IY;
      const iY = YY.length / 3;
      for (let AY = 4 * RY; AY < 4 * RY + 4; AY++) YY.push(FY[3 * AY] * vY / 2 + OY, FY[3 * AY + 1] * uY / 2 + gY, FY[3 * AY + 2] * sY / 2 + aY);
      for (const FY of AY) rY.push(iY + FY)
    }
  },
  36277: (YY, rY, DY) => {
    function FY(YY, rY) {
      return null === YY || null === rY ? YY === rY : YY[0] === rY[0] && YY[1] === rY[1] && YY[2] === rY[2]
    }

    function AY(YY) {
      return [YY[0] + .5, YY[1] + .5, YY[2] + .5]
    }
    DY.d(rY, {
      c: () => AY,
      g: () => FY
    })
  },
  36318: (YY, rY, DY) => {
    function FY(YY) {
      return YY.includes("Leaf Bed")
    }

    function AY(YY) {
      return / Bed(?: Head)?(?:\||$)/.test(YY) && !FY(YY)
    }

    function IY(YY) {
      return YY.includes(" Strongbed")
    }

    function RY(YY) {
      return FY(YY) || AY(YY) || IY(YY)
    }
    DY.d(rY, {
      e: () => RY,
      h: () => FY,
      i: () => IY,
      l: () => AY
    })
  },
  36314: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => aY
    });
    var FY = DY(36318),
      AY = DY(8830);
    const IY = [],
      RY = [],
      OY = [],
      gY = [];
    for (const vY of Object.keys(AY.m))(0, FY.h)(vY) ? IY.push(vY) : (0, FY.l)(vY) && RY.push(vY), (0, FY.i)(vY) && OY.push(vY), (vY.includes(" Bed Head") || vY.includes(" Strongbed Head")) && gY.push(vY);
    const aY = {
      leafBeds: IY,
      woolBeds: RY,
      strongBeds: OY,
      beds: [...IY, ...RY, ...OY],
      bedHeads: gY,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);