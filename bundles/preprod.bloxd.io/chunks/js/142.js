export const id = 142;
export const ids = [142];
export const modules = {
  37898: (WW, iW, OW) => {
    function mW(WW, iW, OW, mW) {
      return !(OW && !WW.aimable) && (!iW || WW.gun && "head" !== mW)
    }

    function EW(WW) {
      return Math.max(.1 * WW, 1)
    }

    function NW(WW, iW) {
      return !WW && iW
    }
    OW.d(iW, {
      d: () => NW,
      f: () => EW,
      i: () => mW
    })
  },
  37902: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => LW,
      h: () => PW
    });
    let mW = null;
    const EW = {
        crosshairAccuracy: [],
        turnDamageIndicators: [],
        turnSoundCues: []
      },
      NW = {
        crosshairAccuracy: WW => {
          const iW = EW.crosshairAccuracy.at(-1);
          iW ? iW.hook(WW) : mW = WW
        },
        turnDamageIndicators: WW => {
          var iW;
          null === (iW = EW.turnDamageIndicators.at(-1)) || void 0 === iW || iW.hook(WW)
        },
        turnSoundCues: WW => {
          var iW;
          null === (iW = EW.turnSoundCues.at(-1)) || void 0 === iW || iW.hook(WW)
        }
      };

    function PW(WW, iW) {
      const OW = {
          hook: iW
        },
        PW = EW[WW];
      if (PW.push(OW), "crosshairAccuracy" === WW && null !== mW) {
        const WW = mW;
        mW = null, NW.crosshairAccuracy(WW)
      }
      return () => {
        const WW = PW.indexOf(OW); - 1 !== WW && PW.splice(WW, 1)
      }
    }

    function LW() {
      return NW
    }
  },
  35177: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => NW,
      d: () => EW
    });
    var mW = OW(25);

    function EW(WW, iW) {
      return WW && !iW
    }

    function NW() {
      return EW(mW.d.get("isTouchScreen"), mW.d.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  38986: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => ZW,
      e: () => PW
    });
    var mW = OW(5745),
      EW = OW(5725),
      NW = OW(344);
    const PW = {
      "Maple Door": {
        positions: [{
          block: "Maple Door",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Maple Door Top",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Maple Door|meta|rot1|open": {
        positions: [{
          block: "Maple Door|meta|rot1|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Maple Door Top|meta|rot1|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Maple Door|meta|rot2|closed": {
        positions: [{
          block: "Maple Door|meta|rot2|closed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Maple Door Top|meta|rot2|closed",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Maple Door|meta|rot2|open": {
        positions: [{
          block: "Maple Door|meta|rot2|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Maple Door Top|meta|rot2|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Maple Door|meta|rot3|closed": {
        positions: [{
          block: "Maple Door|meta|rot3|closed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Maple Door Top|meta|rot3|closed",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Maple Door|meta|rot3|open": {
        positions: [{
          block: "Maple Door|meta|rot3|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Maple Door Top|meta|rot3|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Maple Door|meta|rot4|closed": {
        positions: [{
          block: "Maple Door|meta|rot4|closed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Maple Door Top|meta|rot4|closed",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Maple Door|meta|rot4|open": {
        positions: [{
          block: "Maple Door|meta|rot4|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Maple Door Top|meta|rot4|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Pine Door": {
        positions: [{
          block: "Pine Door",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Pine Door Top",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Pine Door|meta|rot1|open": {
        positions: [{
          block: "Pine Door|meta|rot1|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Pine Door Top|meta|rot1|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Pine Door|meta|rot2|closed": {
        positions: [{
          block: "Pine Door|meta|rot2|closed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Pine Door Top|meta|rot2|closed",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Pine Door|meta|rot2|open": {
        positions: [{
          block: "Pine Door|meta|rot2|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Pine Door Top|meta|rot2|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Pine Door|meta|rot3|closed": {
        positions: [{
          block: "Pine Door|meta|rot3|closed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Pine Door Top|meta|rot3|closed",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Pine Door|meta|rot3|open": {
        positions: [{
          block: "Pine Door|meta|rot3|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Pine Door Top|meta|rot3|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Pine Door|meta|rot4|closed": {
        positions: [{
          block: "Pine Door|meta|rot4|closed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Pine Door Top|meta|rot4|closed",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Pine Door|meta|rot4|open": {
        positions: [{
          block: "Pine Door|meta|rot4|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Pine Door Top|meta|rot4|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Plum Door": {
        positions: [{
          block: "Plum Door",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Plum Door Top",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Plum Door|meta|rot1|open": {
        positions: [{
          block: "Plum Door|meta|rot1|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Plum Door Top|meta|rot1|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Plum Door|meta|rot2|closed": {
        positions: [{
          block: "Plum Door|meta|rot2|closed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Plum Door Top|meta|rot2|closed",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Plum Door|meta|rot2|open": {
        positions: [{
          block: "Plum Door|meta|rot2|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Plum Door Top|meta|rot2|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Plum Door|meta|rot3|closed": {
        positions: [{
          block: "Plum Door|meta|rot3|closed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Plum Door Top|meta|rot3|closed",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Plum Door|meta|rot3|open": {
        positions: [{
          block: "Plum Door|meta|rot3|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Plum Door Top|meta|rot3|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Plum Door|meta|rot4|closed": {
        positions: [{
          block: "Plum Door|meta|rot4|closed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Plum Door Top|meta|rot4|closed",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Plum Door|meta|rot4|open": {
        positions: [{
          block: "Plum Door|meta|rot4|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Plum Door Top|meta|rot4|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Cedar Door": {
        positions: [{
          block: "Cedar Door",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Cedar Door Top",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Cedar Door|meta|rot1|open": {
        positions: [{
          block: "Cedar Door|meta|rot1|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Cedar Door Top|meta|rot1|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Cedar Door|meta|rot2|closed": {
        positions: [{
          block: "Cedar Door|meta|rot2|closed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Cedar Door Top|meta|rot2|closed",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Cedar Door|meta|rot2|open": {
        positions: [{
          block: "Cedar Door|meta|rot2|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Cedar Door Top|meta|rot2|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Cedar Door|meta|rot3|closed": {
        positions: [{
          block: "Cedar Door|meta|rot3|closed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Cedar Door Top|meta|rot3|closed",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Cedar Door|meta|rot3|open": {
        positions: [{
          block: "Cedar Door|meta|rot3|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Cedar Door Top|meta|rot3|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Cedar Door|meta|rot4|closed": {
        positions: [{
          block: "Cedar Door|meta|rot4|closed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Cedar Door Top|meta|rot4|closed",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Cedar Door|meta|rot4|open": {
        positions: [{
          block: "Cedar Door|meta|rot4|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Cedar Door Top|meta|rot4|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Aspen Door": {
        positions: [{
          block: "Aspen Door",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Aspen Door Top",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Aspen Door|meta|rot1|open": {
        positions: [{
          block: "Aspen Door|meta|rot1|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Aspen Door Top|meta|rot1|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Aspen Door|meta|rot2|closed": {
        positions: [{
          block: "Aspen Door|meta|rot2|closed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Aspen Door Top|meta|rot2|closed",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Aspen Door|meta|rot2|open": {
        positions: [{
          block: "Aspen Door|meta|rot2|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Aspen Door Top|meta|rot2|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Aspen Door|meta|rot3|closed": {
        positions: [{
          block: "Aspen Door|meta|rot3|closed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Aspen Door Top|meta|rot3|closed",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Aspen Door|meta|rot3|open": {
        positions: [{
          block: "Aspen Door|meta|rot3|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Aspen Door Top|meta|rot3|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Aspen Door|meta|rot4|closed": {
        positions: [{
          block: "Aspen Door|meta|rot4|closed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Aspen Door Top|meta|rot4|closed",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Aspen Door|meta|rot4|open": {
        positions: [{
          block: "Aspen Door|meta|rot4|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Aspen Door Top|meta|rot4|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Jungle Door": {
        positions: [{
          block: "Jungle Door",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Jungle Door Top",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Jungle Door|meta|rot1|open": {
        positions: [{
          block: "Jungle Door|meta|rot1|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Jungle Door Top|meta|rot1|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Jungle Door|meta|rot2|closed": {
        positions: [{
          block: "Jungle Door|meta|rot2|closed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Jungle Door Top|meta|rot2|closed",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Jungle Door|meta|rot2|open": {
        positions: [{
          block: "Jungle Door|meta|rot2|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Jungle Door Top|meta|rot2|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Jungle Door|meta|rot3|closed": {
        positions: [{
          block: "Jungle Door|meta|rot3|closed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Jungle Door Top|meta|rot3|closed",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Jungle Door|meta|rot3|open": {
        positions: [{
          block: "Jungle Door|meta|rot3|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Jungle Door Top|meta|rot3|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Jungle Door|meta|rot4|closed": {
        positions: [{
          block: "Jungle Door|meta|rot4|closed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Jungle Door Top|meta|rot4|closed",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Jungle Door|meta|rot4|open": {
        positions: [{
          block: "Jungle Door|meta|rot4|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Jungle Door Top|meta|rot4|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Palm Door": {
        positions: [{
          block: "Palm Door",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Palm Door Top",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Palm Door|meta|rot1|open": {
        positions: [{
          block: "Palm Door|meta|rot1|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Palm Door Top|meta|rot1|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Palm Door|meta|rot2|closed": {
        positions: [{
          block: "Palm Door|meta|rot2|closed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Palm Door Top|meta|rot2|closed",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Palm Door|meta|rot2|open": {
        positions: [{
          block: "Palm Door|meta|rot2|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Palm Door Top|meta|rot2|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Palm Door|meta|rot3|closed": {
        positions: [{
          block: "Palm Door|meta|rot3|closed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Palm Door Top|meta|rot3|closed",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Palm Door|meta|rot3|open": {
        positions: [{
          block: "Palm Door|meta|rot3|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Palm Door Top|meta|rot3|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Palm Door|meta|rot4|closed": {
        positions: [{
          block: "Palm Door|meta|rot4|closed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Palm Door Top|meta|rot4|closed",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Palm Door|meta|rot4|open": {
        positions: [{
          block: "Palm Door|meta|rot4|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Palm Door Top|meta|rot4|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Pear Door": {
        positions: [{
          block: "Pear Door",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Pear Door Top",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Pear Door|meta|rot1|open": {
        positions: [{
          block: "Pear Door|meta|rot1|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Pear Door Top|meta|rot1|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Pear Door|meta|rot2|closed": {
        positions: [{
          block: "Pear Door|meta|rot2|closed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Pear Door Top|meta|rot2|closed",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Pear Door|meta|rot2|open": {
        positions: [{
          block: "Pear Door|meta|rot2|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Pear Door Top|meta|rot2|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Pear Door|meta|rot3|closed": {
        positions: [{
          block: "Pear Door|meta|rot3|closed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Pear Door Top|meta|rot3|closed",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Pear Door|meta|rot3|open": {
        positions: [{
          block: "Pear Door|meta|rot3|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Pear Door Top|meta|rot3|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Pear Door|meta|rot4|closed": {
        positions: [{
          block: "Pear Door|meta|rot4|closed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Pear Door Top|meta|rot4|closed",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Pear Door|meta|rot4|open": {
        positions: [{
          block: "Pear Door|meta|rot4|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Pear Door Top|meta|rot4|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Cherry Door": {
        positions: [{
          block: "Cherry Door",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Cherry Door Top",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Cherry Door|meta|rot1|open": {
        positions: [{
          block: "Cherry Door|meta|rot1|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Cherry Door Top|meta|rot1|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Cherry Door|meta|rot2|closed": {
        positions: [{
          block: "Cherry Door|meta|rot2|closed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Cherry Door Top|meta|rot2|closed",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Cherry Door|meta|rot2|open": {
        positions: [{
          block: "Cherry Door|meta|rot2|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Cherry Door Top|meta|rot2|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Cherry Door|meta|rot3|closed": {
        positions: [{
          block: "Cherry Door|meta|rot3|closed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Cherry Door Top|meta|rot3|closed",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Cherry Door|meta|rot3|open": {
        positions: [{
          block: "Cherry Door|meta|rot3|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Cherry Door Top|meta|rot3|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Cherry Door|meta|rot4|closed": {
        positions: [{
          block: "Cherry Door|meta|rot4|closed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Cherry Door Top|meta|rot4|closed",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Cherry Door|meta|rot4|open": {
        positions: [{
          block: "Cherry Door|meta|rot4|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Cherry Door Top|meta|rot4|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Spectral Door": {
        positions: [{
          block: "Spectral Door",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Spectral Door Top",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Spectral Door|meta|rot1|open": {
        positions: [{
          block: "Spectral Door|meta|rot1|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Spectral Door Top|meta|rot1|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Spectral Door|meta|rot2|closed": {
        positions: [{
          block: "Spectral Door|meta|rot2|closed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Spectral Door Top|meta|rot2|closed",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Spectral Door|meta|rot2|open": {
        positions: [{
          block: "Spectral Door|meta|rot2|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Spectral Door Top|meta|rot2|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Spectral Door|meta|rot3|closed": {
        positions: [{
          block: "Spectral Door|meta|rot3|closed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Spectral Door Top|meta|rot3|closed",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Spectral Door|meta|rot3|open": {
        positions: [{
          block: "Spectral Door|meta|rot3|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Spectral Door Top|meta|rot3|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Spectral Door|meta|rot4|closed": {
        positions: [{
          block: "Spectral Door|meta|rot4|closed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Spectral Door Top|meta|rot4|closed",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Spectral Door|meta|rot4|open": {
        positions: [{
          block: "Spectral Door|meta|rot4|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Spectral Door Top|meta|rot4|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Mango Door": {
        positions: [{
          block: "Mango Door",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Mango Door Top",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Mango Door|meta|rot1|open": {
        positions: [{
          block: "Mango Door|meta|rot1|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Mango Door Top|meta|rot1|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Mango Door|meta|rot2|closed": {
        positions: [{
          block: "Mango Door|meta|rot2|closed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Mango Door Top|meta|rot2|closed",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Mango Door|meta|rot2|open": {
        positions: [{
          block: "Mango Door|meta|rot2|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Mango Door Top|meta|rot2|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Mango Door|meta|rot3|closed": {
        positions: [{
          block: "Mango Door|meta|rot3|closed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Mango Door Top|meta|rot3|closed",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Mango Door|meta|rot3|open": {
        positions: [{
          block: "Mango Door|meta|rot3|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Mango Door Top|meta|rot3|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Mango Door|meta|rot4|closed": {
        positions: [{
          block: "Mango Door|meta|rot4|closed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Mango Door Top|meta|rot4|closed",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Mango Door|meta|rot4|open": {
        positions: [{
          block: "Mango Door|meta|rot4|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Mango Door Top|meta|rot4|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "White Bed": {
        positions: [{
          block: "White Bed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_White Bed Head",
          x: 0,
          y: 0,
          z: -1
        }]
      },
      "White Bed|meta|rot2": {
        positions: [{
          block: "White Bed|meta|rot2",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_White Bed Head|meta|rot2",
          x: -1,
          y: 0,
          z: 0
        }]
      },
      "White Bed|meta|rot3": {
        positions: [{
          block: "White Bed|meta|rot3",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_White Bed Head|meta|rot3",
          x: 0,
          y: 0,
          z: 1
        }]
      },
      "White Bed|meta|rot4": {
        positions: [{
          block: "White Bed|meta|rot4",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_White Bed Head|meta|rot4",
          x: 1,
          y: 0,
          z: 0
        }]
      },
      "Orange Bed": {
        positions: [{
          block: "Orange Bed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Orange Bed Head",
          x: 0,
          y: 0,
          z: -1
        }]
      },
      "Orange Bed|meta|rot2": {
        positions: [{
          block: "Orange Bed|meta|rot2",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Orange Bed Head|meta|rot2",
          x: -1,
          y: 0,
          z: 0
        }]
      },
      "Orange Bed|meta|rot3": {
        positions: [{
          block: "Orange Bed|meta|rot3",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Orange Bed Head|meta|rot3",
          x: 0,
          y: 0,
          z: 1
        }]
      },
      "Orange Bed|meta|rot4": {
        positions: [{
          block: "Orange Bed|meta|rot4",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Orange Bed Head|meta|rot4",
          x: 1,
          y: 0,
          z: 0
        }]
      },
      "Magenta Bed": {
        positions: [{
          block: "Magenta Bed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Magenta Bed Head",
          x: 0,
          y: 0,
          z: -1
        }]
      },
      "Magenta Bed|meta|rot2": {
        positions: [{
          block: "Magenta Bed|meta|rot2",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Magenta Bed Head|meta|rot2",
          x: -1,
          y: 0,
          z: 0
        }]
      },
      "Magenta Bed|meta|rot3": {
        positions: [{
          block: "Magenta Bed|meta|rot3",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Magenta Bed Head|meta|rot3",
          x: 0,
          y: 0,
          z: 1
        }]
      },
      "Magenta Bed|meta|rot4": {
        positions: [{
          block: "Magenta Bed|meta|rot4",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Magenta Bed Head|meta|rot4",
          x: 1,
          y: 0,
          z: 0
        }]
      },
      "Light Blue Bed": {
        positions: [{
          block: "Light Blue Bed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Light Blue Bed Head",
          x: 0,
          y: 0,
          z: -1
        }]
      },
      "Light Blue Bed|meta|rot2": {
        positions: [{
          block: "Light Blue Bed|meta|rot2",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Light Blue Bed Head|meta|rot2",
          x: -1,
          y: 0,
          z: 0
        }]
      },
      "Light Blue Bed|meta|rot3": {
        positions: [{
          block: "Light Blue Bed|meta|rot3",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Light Blue Bed Head|meta|rot3",
          x: 0,
          y: 0,
          z: 1
        }]
      },
      "Light Blue Bed|meta|rot4": {
        positions: [{
          block: "Light Blue Bed|meta|rot4",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Light Blue Bed Head|meta|rot4",
          x: 1,
          y: 0,
          z: 0
        }]
      },
      "Yellow Bed": {
        positions: [{
          block: "Yellow Bed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Yellow Bed Head",
          x: 0,
          y: 0,
          z: -1
        }]
      },
      "Yellow Bed|meta|rot2": {
        positions: [{
          block: "Yellow Bed|meta|rot2",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Yellow Bed Head|meta|rot2",
          x: -1,
          y: 0,
          z: 0
        }]
      },
      "Yellow Bed|meta|rot3": {
        positions: [{
          block: "Yellow Bed|meta|rot3",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Yellow Bed Head|meta|rot3",
          x: 0,
          y: 0,
          z: 1
        }]
      },
      "Yellow Bed|meta|rot4": {
        positions: [{
          block: "Yellow Bed|meta|rot4",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Yellow Bed Head|meta|rot4",
          x: 1,
          y: 0,
          z: 0
        }]
      },
      "Lime Bed": {
        positions: [{
          block: "Lime Bed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Lime Bed Head",
          x: 0,
          y: 0,
          z: -1
        }]
      },
      "Lime Bed|meta|rot2": {
        positions: [{
          block: "Lime Bed|meta|rot2",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Lime Bed Head|meta|rot2",
          x: -1,
          y: 0,
          z: 0
        }]
      },
      "Lime Bed|meta|rot3": {
        positions: [{
          block: "Lime Bed|meta|rot3",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Lime Bed Head|meta|rot3",
          x: 0,
          y: 0,
          z: 1
        }]
      },
      "Lime Bed|meta|rot4": {
        positions: [{
          block: "Lime Bed|meta|rot4",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Lime Bed Head|meta|rot4",
          x: 1,
          y: 0,
          z: 0
        }]
      },
      "Pink Bed": {
        positions: [{
          block: "Pink Bed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Pink Bed Head",
          x: 0,
          y: 0,
          z: -1
        }]
      },
      "Pink Bed|meta|rot2": {
        positions: [{
          block: "Pink Bed|meta|rot2",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Pink Bed Head|meta|rot2",
          x: -1,
          y: 0,
          z: 0
        }]
      },
      "Pink Bed|meta|rot3": {
        positions: [{
          block: "Pink Bed|meta|rot3",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Pink Bed Head|meta|rot3",
          x: 0,
          y: 0,
          z: 1
        }]
      },
      "Pink Bed|meta|rot4": {
        positions: [{
          block: "Pink Bed|meta|rot4",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Pink Bed Head|meta|rot4",
          x: 1,
          y: 0,
          z: 0
        }]
      },
      "Gray Bed": {
        positions: [{
          block: "Gray Bed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Gray Bed Head",
          x: 0,
          y: 0,
          z: -1
        }]
      },
      "Gray Bed|meta|rot2": {
        positions: [{
          block: "Gray Bed|meta|rot2",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Gray Bed Head|meta|rot2",
          x: -1,
          y: 0,
          z: 0
        }]
      },
      "Gray Bed|meta|rot3": {
        positions: [{
          block: "Gray Bed|meta|rot3",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Gray Bed Head|meta|rot3",
          x: 0,
          y: 0,
          z: 1
        }]
      },
      "Gray Bed|meta|rot4": {
        positions: [{
          block: "Gray Bed|meta|rot4",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Gray Bed Head|meta|rot4",
          x: 1,
          y: 0,
          z: 0
        }]
      },
      "Light Gray Bed": {
        positions: [{
          block: "Light Gray Bed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Light Gray Bed Head",
          x: 0,
          y: 0,
          z: -1
        }]
      },
      "Light Gray Bed|meta|rot2": {
        positions: [{
          block: "Light Gray Bed|meta|rot2",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Light Gray Bed Head|meta|rot2",
          x: -1,
          y: 0,
          z: 0
        }]
      },
      "Light Gray Bed|meta|rot3": {
        positions: [{
          block: "Light Gray Bed|meta|rot3",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Light Gray Bed Head|meta|rot3",
          x: 0,
          y: 0,
          z: 1
        }]
      },
      "Light Gray Bed|meta|rot4": {
        positions: [{
          block: "Light Gray Bed|meta|rot4",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Light Gray Bed Head|meta|rot4",
          x: 1,
          y: 0,
          z: 0
        }]
      },
      "Cyan Bed": {
        positions: [{
          block: "Cyan Bed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Cyan Bed Head",
          x: 0,
          y: 0,
          z: -1
        }]
      },
      "Cyan Bed|meta|rot2": {
        positions: [{
          block: "Cyan Bed|meta|rot2",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Cyan Bed Head|meta|rot2",
          x: -1,
          y: 0,
          z: 0
        }]
      },
      "Cyan Bed|meta|rot3": {
        positions: [{
          block: "Cyan Bed|meta|rot3",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Cyan Bed Head|meta|rot3",
          x: 0,
          y: 0,
          z: 1
        }]
      },
      "Cyan Bed|meta|rot4": {
        positions: [{
          block: "Cyan Bed|meta|rot4",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Cyan Bed Head|meta|rot4",
          x: 1,
          y: 0,
          z: 0
        }]
      },
      "Purple Bed": {
        positions: [{
          block: "Purple Bed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Purple Bed Head",
          x: 0,
          y: 0,
          z: -1
        }]
      },
      "Purple Bed|meta|rot2": {
        positions: [{
          block: "Purple Bed|meta|rot2",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Purple Bed Head|meta|rot2",
          x: -1,
          y: 0,
          z: 0
        }]
      },
      "Purple Bed|meta|rot3": {
        positions: [{
          block: "Purple Bed|meta|rot3",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Purple Bed Head|meta|rot3",
          x: 0,
          y: 0,
          z: 1
        }]
      },
      "Purple Bed|meta|rot4": {
        positions: [{
          block: "Purple Bed|meta|rot4",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Purple Bed Head|meta|rot4",
          x: 1,
          y: 0,
          z: 0
        }]
      },
      "Blue Bed": {
        positions: [{
          block: "Blue Bed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Blue Bed Head",
          x: 0,
          y: 0,
          z: -1
        }]
      },
      "Blue Bed|meta|rot2": {
        positions: [{
          block: "Blue Bed|meta|rot2",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Blue Bed Head|meta|rot2",
          x: -1,
          y: 0,
          z: 0
        }]
      },
      "Blue Bed|meta|rot3": {
        positions: [{
          block: "Blue Bed|meta|rot3",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Blue Bed Head|meta|rot3",
          x: 0,
          y: 0,
          z: 1
        }]
      },
      "Blue Bed|meta|rot4": {
        positions: [{
          block: "Blue Bed|meta|rot4",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Blue Bed Head|meta|rot4",
          x: 1,
          y: 0,
          z: 0
        }]
      },
      "Brown Bed": {
        positions: [{
          block: "Brown Bed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Brown Bed Head",
          x: 0,
          y: 0,
          z: -1
        }]
      },
      "Brown Bed|meta|rot2": {
        positions: [{
          block: "Brown Bed|meta|rot2",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Brown Bed Head|meta|rot2",
          x: -1,
          y: 0,
          z: 0
        }]
      },
      "Brown Bed|meta|rot3": {
        positions: [{
          block: "Brown Bed|meta|rot3",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Brown Bed Head|meta|rot3",
          x: 0,
          y: 0,
          z: 1
        }]
      },
      "Brown Bed|meta|rot4": {
        positions: [{
          block: "Brown Bed|meta|rot4",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Brown Bed Head|meta|rot4",
          x: 1,
          y: 0,
          z: 0
        }]
      },
      "Green Bed": {
        positions: [{
          block: "Green Bed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Green Bed Head",
          x: 0,
          y: 0,
          z: -1
        }]
      },
      "Green Bed|meta|rot2": {
        positions: [{
          block: "Green Bed|meta|rot2",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Green Bed Head|meta|rot2",
          x: -1,
          y: 0,
          z: 0
        }]
      },
      "Green Bed|meta|rot3": {
        positions: [{
          block: "Green Bed|meta|rot3",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Green Bed Head|meta|rot3",
          x: 0,
          y: 0,
          z: 1
        }]
      },
      "Green Bed|meta|rot4": {
        positions: [{
          block: "Green Bed|meta|rot4",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Green Bed Head|meta|rot4",
          x: 1,
          y: 0,
          z: 0
        }]
      },
      "Red Bed": {
        positions: [{
          block: "Red Bed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Red Bed Head",
          x: 0,
          y: 0,
          z: -1
        }]
      },
      "Red Bed|meta|rot2": {
        positions: [{
          block: "Red Bed|meta|rot2",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Red Bed Head|meta|rot2",
          x: -1,
          y: 0,
          z: 0
        }]
      },
      "Red Bed|meta|rot3": {
        positions: [{
          block: "Red Bed|meta|rot3",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Red Bed Head|meta|rot3",
          x: 0,
          y: 0,
          z: 1
        }]
      },
      "Red Bed|meta|rot4": {
        positions: [{
          block: "Red Bed|meta|rot4",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Red Bed Head|meta|rot4",
          x: 1,
          y: 0,
          z: 0
        }]
      },
      "Black Bed": {
        positions: [{
          block: "Black Bed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Black Bed Head",
          x: 0,
          y: 0,
          z: -1
        }]
      },
      "Black Bed|meta|rot2": {
        positions: [{
          block: "Black Bed|meta|rot2",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Black Bed Head|meta|rot2",
          x: -1,
          y: 0,
          z: 0
        }]
      },
      "Black Bed|meta|rot3": {
        positions: [{
          block: "Black Bed|meta|rot3",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Black Bed Head|meta|rot3",
          x: 0,
          y: 0,
          z: 1
        }]
      },
      "Black Bed|meta|rot4": {
        positions: [{
          block: "Black Bed|meta|rot4",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Black Bed Head|meta|rot4",
          x: 1,
          y: 0,
          z: 0
        }]
      },
      "Tall Grass": {
        positions: [{
          block: "Tall Grass",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "Tall Grass|Top",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Jungle Tall Grass": {
        positions: [{
          block: "Jungle Tall Grass",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "Jungle Tall Grass|Top",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "White Strongbed": {
        positions: [{
          block: "White Strongbed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_White Strongbed Head",
          x: 0,
          y: 0,
          z: -1
        }]
      },
      "White Strongbed|meta|rot2": {
        positions: [{
          block: "White Strongbed|meta|rot2",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_White Strongbed Head|meta|rot2",
          x: -1,
          y: 0,
          z: 0
        }]
      },
      "White Strongbed|meta|rot3": {
        positions: [{
          block: "White Strongbed|meta|rot3",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_White Strongbed Head|meta|rot3",
          x: 0,
          y: 0,
          z: 1
        }]
      },
      "White Strongbed|meta|rot4": {
        positions: [{
          block: "White Strongbed|meta|rot4",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_White Strongbed Head|meta|rot4",
          x: 1,
          y: 0,
          z: 0
        }]
      },
      "Orange Strongbed": {
        positions: [{
          block: "Orange Strongbed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Orange Strongbed Head",
          x: 0,
          y: 0,
          z: -1
        }]
      },
      "Orange Strongbed|meta|rot2": {
        positions: [{
          block: "Orange Strongbed|meta|rot2",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Orange Strongbed Head|meta|rot2",
          x: -1,
          y: 0,
          z: 0
        }]
      },
      "Orange Strongbed|meta|rot3": {
        positions: [{
          block: "Orange Strongbed|meta|rot3",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Orange Strongbed Head|meta|rot3",
          x: 0,
          y: 0,
          z: 1
        }]
      },
      "Orange Strongbed|meta|rot4": {
        positions: [{
          block: "Orange Strongbed|meta|rot4",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Orange Strongbed Head|meta|rot4",
          x: 1,
          y: 0,
          z: 0
        }]
      },
      "Magenta Strongbed": {
        positions: [{
          block: "Magenta Strongbed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Magenta Strongbed Head",
          x: 0,
          y: 0,
          z: -1
        }]
      },
      "Magenta Strongbed|meta|rot2": {
        positions: [{
          block: "Magenta Strongbed|meta|rot2",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Magenta Strongbed Head|meta|rot2",
          x: -1,
          y: 0,
          z: 0
        }]
      },
      "Magenta Strongbed|meta|rot3": {
        positions: [{
          block: "Magenta Strongbed|meta|rot3",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Magenta Strongbed Head|meta|rot3",
          x: 0,
          y: 0,
          z: 1
        }]
      },
      "Magenta Strongbed|meta|rot4": {
        positions: [{
          block: "Magenta Strongbed|meta|rot4",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Magenta Strongbed Head|meta|rot4",
          x: 1,
          y: 0,
          z: 0
        }]
      },
      "Light Blue Strongbed": {
        positions: [{
          block: "Light Blue Strongbed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Light Blue Strongbed Head",
          x: 0,
          y: 0,
          z: -1
        }]
      },
      "Light Blue Strongbed|meta|rot2": {
        positions: [{
          block: "Light Blue Strongbed|meta|rot2",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Light Blue Strongbed Head|meta|rot2",
          x: -1,
          y: 0,
          z: 0
        }]
      },
      "Light Blue Strongbed|meta|rot3": {
        positions: [{
          block: "Light Blue Strongbed|meta|rot3",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Light Blue Strongbed Head|meta|rot3",
          x: 0,
          y: 0,
          z: 1
        }]
      },
      "Light Blue Strongbed|meta|rot4": {
        positions: [{
          block: "Light Blue Strongbed|meta|rot4",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Light Blue Strongbed Head|meta|rot4",
          x: 1,
          y: 0,
          z: 0
        }]
      },
      "Yellow Strongbed": {
        positions: [{
          block: "Yellow Strongbed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Yellow Strongbed Head",
          x: 0,
          y: 0,
          z: -1
        }]
      },
      "Yellow Strongbed|meta|rot2": {
        positions: [{
          block: "Yellow Strongbed|meta|rot2",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Yellow Strongbed Head|meta|rot2",
          x: -1,
          y: 0,
          z: 0
        }]
      },
      "Yellow Strongbed|meta|rot3": {
        positions: [{
          block: "Yellow Strongbed|meta|rot3",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Yellow Strongbed Head|meta|rot3",
          x: 0,
          y: 0,
          z: 1
        }]
      },
      "Yellow Strongbed|meta|rot4": {
        positions: [{
          block: "Yellow Strongbed|meta|rot4",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Yellow Strongbed Head|meta|rot4",
          x: 1,
          y: 0,
          z: 0
        }]
      },
      "Lime Strongbed": {
        positions: [{
          block: "Lime Strongbed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Lime Strongbed Head",
          x: 0,
          y: 0,
          z: -1
        }]
      },
      "Lime Strongbed|meta|rot2": {
        positions: [{
          block: "Lime Strongbed|meta|rot2",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Lime Strongbed Head|meta|rot2",
          x: -1,
          y: 0,
          z: 0
        }]
      },
      "Lime Strongbed|meta|rot3": {
        positions: [{
          block: "Lime Strongbed|meta|rot3",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Lime Strongbed Head|meta|rot3",
          x: 0,
          y: 0,
          z: 1
        }]
      },
      "Lime Strongbed|meta|rot4": {
        positions: [{
          block: "Lime Strongbed|meta|rot4",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Lime Strongbed Head|meta|rot4",
          x: 1,
          y: 0,
          z: 0
        }]
      },
      "Pink Strongbed": {
        positions: [{
          block: "Pink Strongbed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Pink Strongbed Head",
          x: 0,
          y: 0,
          z: -1
        }]
      },
      "Pink Strongbed|meta|rot2": {
        positions: [{
          block: "Pink Strongbed|meta|rot2",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Pink Strongbed Head|meta|rot2",
          x: -1,
          y: 0,
          z: 0
        }]
      },
      "Pink Strongbed|meta|rot3": {
        positions: [{
          block: "Pink Strongbed|meta|rot3",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Pink Strongbed Head|meta|rot3",
          x: 0,
          y: 0,
          z: 1
        }]
      },
      "Pink Strongbed|meta|rot4": {
        positions: [{
          block: "Pink Strongbed|meta|rot4",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Pink Strongbed Head|meta|rot4",
          x: 1,
          y: 0,
          z: 0
        }]
      },
      "Gray Strongbed": {
        positions: [{
          block: "Gray Strongbed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Gray Strongbed Head",
          x: 0,
          y: 0,
          z: -1
        }]
      },
      "Gray Strongbed|meta|rot2": {
        positions: [{
          block: "Gray Strongbed|meta|rot2",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Gray Strongbed Head|meta|rot2",
          x: -1,
          y: 0,
          z: 0
        }]
      },
      "Gray Strongbed|meta|rot3": {
        positions: [{
          block: "Gray Strongbed|meta|rot3",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Gray Strongbed Head|meta|rot3",
          x: 0,
          y: 0,
          z: 1
        }]
      },
      "Gray Strongbed|meta|rot4": {
        positions: [{
          block: "Gray Strongbed|meta|rot4",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Gray Strongbed Head|meta|rot4",
          x: 1,
          y: 0,
          z: 0
        }]
      },
      "Light Gray Strongbed": {
        positions: [{
          block: "Light Gray Strongbed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Light Gray Strongbed Head",
          x: 0,
          y: 0,
          z: -1
        }]
      },
      "Light Gray Strongbed|meta|rot2": {
        positions: [{
          block: "Light Gray Strongbed|meta|rot2",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Light Gray Strongbed Head|meta|rot2",
          x: -1,
          y: 0,
          z: 0
        }]
      },
      "Light Gray Strongbed|meta|rot3": {
        positions: [{
          block: "Light Gray Strongbed|meta|rot3",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Light Gray Strongbed Head|meta|rot3",
          x: 0,
          y: 0,
          z: 1
        }]
      },
      "Light Gray Strongbed|meta|rot4": {
        positions: [{
          block: "Light Gray Strongbed|meta|rot4",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Light Gray Strongbed Head|meta|rot4",
          x: 1,
          y: 0,
          z: 0
        }]
      },
      "Cyan Strongbed": {
        positions: [{
          block: "Cyan Strongbed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Cyan Strongbed Head",
          x: 0,
          y: 0,
          z: -1
        }]
      },
      "Cyan Strongbed|meta|rot2": {
        positions: [{
          block: "Cyan Strongbed|meta|rot2",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Cyan Strongbed Head|meta|rot2",
          x: -1,
          y: 0,
          z: 0
        }]
      },
      "Cyan Strongbed|meta|rot3": {
        positions: [{
          block: "Cyan Strongbed|meta|rot3",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Cyan Strongbed Head|meta|rot3",
          x: 0,
          y: 0,
          z: 1
        }]
      },
      "Cyan Strongbed|meta|rot4": {
        positions: [{
          block: "Cyan Strongbed|meta|rot4",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Cyan Strongbed Head|meta|rot4",
          x: 1,
          y: 0,
          z: 0
        }]
      },
      "Purple Strongbed": {
        positions: [{
          block: "Purple Strongbed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Purple Strongbed Head",
          x: 0,
          y: 0,
          z: -1
        }]
      },
      "Purple Strongbed|meta|rot2": {
        positions: [{
          block: "Purple Strongbed|meta|rot2",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Purple Strongbed Head|meta|rot2",
          x: -1,
          y: 0,
          z: 0
        }]
      },
      "Purple Strongbed|meta|rot3": {
        positions: [{
          block: "Purple Strongbed|meta|rot3",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Purple Strongbed Head|meta|rot3",
          x: 0,
          y: 0,
          z: 1
        }]
      },
      "Purple Strongbed|meta|rot4": {
        positions: [{
          block: "Purple Strongbed|meta|rot4",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Purple Strongbed Head|meta|rot4",
          x: 1,
          y: 0,
          z: 0
        }]
      },
      "Blue Strongbed": {
        positions: [{
          block: "Blue Strongbed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Blue Strongbed Head",
          x: 0,
          y: 0,
          z: -1
        }]
      },
      "Blue Strongbed|meta|rot2": {
        positions: [{
          block: "Blue Strongbed|meta|rot2",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Blue Strongbed Head|meta|rot2",
          x: -1,
          y: 0,
          z: 0
        }]
      },
      "Blue Strongbed|meta|rot3": {
        positions: [{
          block: "Blue Strongbed|meta|rot3",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Blue Strongbed Head|meta|rot3",
          x: 0,
          y: 0,
          z: 1
        }]
      },
      "Blue Strongbed|meta|rot4": {
        positions: [{
          block: "Blue Strongbed|meta|rot4",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Blue Strongbed Head|meta|rot4",
          x: 1,
          y: 0,
          z: 0
        }]
      },
      "Brown Strongbed": {
        positions: [{
          block: "Brown Strongbed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Brown Strongbed Head",
          x: 0,
          y: 0,
          z: -1
        }]
      },
      "Brown Strongbed|meta|rot2": {
        positions: [{
          block: "Brown Strongbed|meta|rot2",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Brown Strongbed Head|meta|rot2",
          x: -1,
          y: 0,
          z: 0
        }]
      },
      "Brown Strongbed|meta|rot3": {
        positions: [{
          block: "Brown Strongbed|meta|rot3",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Brown Strongbed Head|meta|rot3",
          x: 0,
          y: 0,
          z: 1
        }]
      },
      "Brown Strongbed|meta|rot4": {
        positions: [{
          block: "Brown Strongbed|meta|rot4",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Brown Strongbed Head|meta|rot4",
          x: 1,
          y: 0,
          z: 0
        }]
      },
      "Green Strongbed": {
        positions: [{
          block: "Green Strongbed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Green Strongbed Head",
          x: 0,
          y: 0,
          z: -1
        }]
      },
      "Green Strongbed|meta|rot2": {
        positions: [{
          block: "Green Strongbed|meta|rot2",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Green Strongbed Head|meta|rot2",
          x: -1,
          y: 0,
          z: 0
        }]
      },
      "Green Strongbed|meta|rot3": {
        positions: [{
          block: "Green Strongbed|meta|rot3",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Green Strongbed Head|meta|rot3",
          x: 0,
          y: 0,
          z: 1
        }]
      },
      "Green Strongbed|meta|rot4": {
        positions: [{
          block: "Green Strongbed|meta|rot4",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Green Strongbed Head|meta|rot4",
          x: 1,
          y: 0,
          z: 0
        }]
      },
      "Red Strongbed": {
        positions: [{
          block: "Red Strongbed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Red Strongbed Head",
          x: 0,
          y: 0,
          z: -1
        }]
      },
      "Red Strongbed|meta|rot2": {
        positions: [{
          block: "Red Strongbed|meta|rot2",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Red Strongbed Head|meta|rot2",
          x: -1,
          y: 0,
          z: 0
        }]
      },
      "Red Strongbed|meta|rot3": {
        positions: [{
          block: "Red Strongbed|meta|rot3",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Red Strongbed Head|meta|rot3",
          x: 0,
          y: 0,
          z: 1
        }]
      },
      "Red Strongbed|meta|rot4": {
        positions: [{
          block: "Red Strongbed|meta|rot4",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Red Strongbed Head|meta|rot4",
          x: 1,
          y: 0,
          z: 0
        }]
      },
      "Black Strongbed": {
        positions: [{
          block: "Black Strongbed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Black Strongbed Head",
          x: 0,
          y: 0,
          z: -1
        }]
      },
      "Black Strongbed|meta|rot2": {
        positions: [{
          block: "Black Strongbed|meta|rot2",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Black Strongbed Head|meta|rot2",
          x: -1,
          y: 0,
          z: 0
        }]
      },
      "Black Strongbed|meta|rot3": {
        positions: [{
          block: "Black Strongbed|meta|rot3",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Black Strongbed Head|meta|rot3",
          x: 0,
          y: 0,
          z: 1
        }]
      },
      "Black Strongbed|meta|rot4": {
        positions: [{
          block: "Black Strongbed|meta|rot4",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Black Strongbed Head|meta|rot4",
          x: 1,
          y: 0,
          z: 0
        }]
      },
      "Leaf Bed": {
        positions: [{
          block: "Leaf Bed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Leaf Bed Head",
          x: 0,
          y: 0,
          z: -1
        }]
      },
      "Leaf Bed|meta|rot2": {
        positions: [{
          block: "Leaf Bed|meta|rot2",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Leaf Bed Head|meta|rot2",
          x: -1,
          y: 0,
          z: 0
        }]
      },
      "Leaf Bed|meta|rot3": {
        positions: [{
          block: "Leaf Bed|meta|rot3",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Leaf Bed Head|meta|rot3",
          x: 0,
          y: 0,
          z: 1
        }]
      },
      "Leaf Bed|meta|rot4": {
        positions: [{
          block: "Leaf Bed|meta|rot4",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Leaf Bed Head|meta|rot4",
          x: 1,
          y: 0,
          z: 0
        }]
      },
      "Vending Machine": {
        positions: [{
          block: "Vending Machine",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Vending Machine Top",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Vending Machine|meta|rot2": {
        positions: [{
          block: "Vending Machine|meta|rot2",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Vending Machine Top|meta|rot2",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Vending Machine|meta|rot3": {
        positions: [{
          block: "Vending Machine|meta|rot3",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Vending Machine Top|meta|rot3",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Vending Machine|meta|rot4": {
        positions: [{
          block: "Vending Machine|meta|rot4",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Vending Machine Top|meta|rot4",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      ...LW("White"),
      ...LW("Orange"),
      ...LW("Magenta"),
      ...LW("Light Blue"),
      ...LW("Yellow"),
      ...LW("Lime"),
      ...LW("Pink"),
      ...LW("Gray"),
      ...LW("Light Gray"),
      ...LW("Cyan"),
      ...LW("Purple"),
      ...LW("Blue"),
      ...LW("Brown"),
      ...LW("Green"),
      ...LW("Red"),
      ...LW("Black"),
      ...LW("Draugr"),
      ...LW("Skull"),
      ...LW("Rainbow"),
      ...cW("Sheep"),
      ...cW("Cow"),
      ...cW("Pig"),
      ...cW("Horse"),
      ...cW("Camel"),
      ...cW("Wolf"),
      ...cW("Deer"),
      ...cW("Wildcat"),
      ...wW("Radar"),
      ...wW("Inactive Radar"),
      ...wW("Active Radar"),
      ...tW("Magenta"),
      ...tW("Light Gray"),
      ...tW("Red"),
      ...tW("White"),
      ...tW("Orange"),
      ...tW("Light Blue"),
      ...tW("Yellow"),
      ...tW("Lime"),
      ...tW("Pink"),
      ...tW("Gray"),
      ...tW("Cyan"),
      ...tW("Purple"),
      ...tW("Blue"),
      ...tW("Brown"),
      ...tW("Green"),
      ...tW("Black"),
      "Auto Miner": {
        positions: [{
          block: "Auto Miner",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Auto Miner Body",
          x: 0,
          y: 1,
          z: -1
        }, {
          block: "_Auto Miner Drill Front",
          x: 0,
          y: 1,
          z: -2
        }, {
          block: "_Auto Miner Drill Back",
          x: 0,
          y: 1,
          z: 0
        }, {
          block: "_Auto Miner Foot Front",
          x: 0,
          y: 0,
          z: -2
        }]
      },
      "Auto Miner|meta|rot2": {
        positions: [{
          block: "Auto Miner|meta|rot2",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Auto Miner Body|meta|rot2",
          x: -1,
          y: 1,
          z: 0
        }, {
          block: "_Auto Miner Drill Front|meta|rot2",
          x: -2,
          y: 1,
          z: 0
        }, {
          block: "_Auto Miner Drill Back|meta|rot2",
          x: 0,
          y: 1,
          z: 0
        }, {
          block: "_Auto Miner Foot Front|meta|rot2",
          x: -2,
          y: 0,
          z: 0
        }]
      },
      "Auto Miner|meta|rot3": {
        positions: [{
          block: "Auto Miner|meta|rot3",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Auto Miner Body|meta|rot3",
          x: 0,
          y: 1,
          z: 1
        }, {
          block: "_Auto Miner Drill Front|meta|rot3",
          x: 0,
          y: 1,
          z: 2
        }, {
          block: "_Auto Miner Drill Back|meta|rot3",
          x: 0,
          y: 1,
          z: 0
        }, {
          block: "_Auto Miner Foot Front|meta|rot3",
          x: 0,
          y: 0,
          z: 2
        }]
      },
      "Auto Miner|meta|rot4": {
        positions: [{
          block: "Auto Miner|meta|rot4",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Auto Miner Body|meta|rot4",
          x: 1,
          y: 1,
          z: 0
        }, {
          block: "_Auto Miner Drill Front|meta|rot4",
          x: 2,
          y: 1,
          z: 0
        }, {
          block: "_Auto Miner Drill Back|meta|rot4",
          x: 0,
          y: 1,
          z: 0
        }, {
          block: "_Auto Miner Foot Front|meta|rot4",
          x: 2,
          y: 0,
          z: 0
        }]
      },
      ... function() {
        const WW = "Lunite Auto Miner";
        return {
          [WW]: {
            positions: [{
              block: WW,
              x: 0,
              y: 0,
              z: 0
            }, {
              block: "_Lunite Auto Miner Body",
              x: 0,
              y: 1,
              z: -1
            }, {
              block: "_Lunite Auto Miner Drill Front",
              x: 0,
              y: 1,
              z: -2
            }, {
              block: "_Lunite Auto Miner Drill Back",
              x: 0,
              y: 1,
              z: 0
            }, {
              block: "_Lunite Auto Miner Foot Front",
              x: 0,
              y: 0,
              z: -2
            }]
          },
          [`${WW}|meta|rot2`]: {
            positions: [{
              block: `${WW}|meta|rot2`,
              x: 0,
              y: 0,
              z: 0
            }, {
              block: "_Lunite Auto Miner Body|meta|rot2",
              x: -1,
              y: 1,
              z: 0
            }, {
              block: "_Lunite Auto Miner Drill Front|meta|rot2",
              x: -2,
              y: 1,
              z: 0
            }, {
              block: "_Lunite Auto Miner Drill Back|meta|rot2",
              x: 0,
              y: 1,
              z: 0
            }, {
              block: "_Lunite Auto Miner Foot Front|meta|rot2",
              x: -2,
              y: 0,
              z: 0
            }]
          },
          [`${WW}|meta|rot3`]: {
            positions: [{
              block: `${WW}|meta|rot3`,
              x: 0,
              y: 0,
              z: 0
            }, {
              block: "_Lunite Auto Miner Body|meta|rot3",
              x: 0,
              y: 1,
              z: 1
            }, {
              block: "_Lunite Auto Miner Drill Front|meta|rot3",
              x: 0,
              y: 1,
              z: 2
            }, {
              block: "_Lunite Auto Miner Drill Back|meta|rot3",
              x: 0,
              y: 1,
              z: 0
            }, {
              block: "_Lunite Auto Miner Foot Front|meta|rot3",
              x: 0,
              y: 0,
              z: 2
            }]
          },
          [`${WW}|meta|rot4`]: {
            positions: [{
              block: `${WW}|meta|rot4`,
              x: 0,
              y: 0,
              z: 0
            }, {
              block: "_Lunite Auto Miner Body|meta|rot4",
              x: 1,
              y: 1,
              z: 0
            }, {
              block: "_Lunite Auto Miner Drill Front|meta|rot4",
              x: 2,
              y: 1,
              z: 0
            }, {
              block: "_Lunite Auto Miner Drill Back|meta|rot4",
              x: 0,
              y: 1,
              z: 0
            }, {
              block: "_Lunite Auto Miner Foot Front|meta|rot4",
              x: 2,
              y: 0,
              z: 0
            }]
          }
        }
      }(),
      ... function() {
        const WW = {
            1: WW => ({
              x: 0,
              z: WW
            }),
            2: WW => ({
              x: WW,
              z: 0
            }),
            3: WW => ({
              x: 0,
              z: -WW
            }),
            4: WW => ({
              x: -WW,
              z: 0
            })
          },
          iW = {};
        for (let OW = 1; OW <= 4; OW++) {
          const EW = 1 === OW ? "" : `|meta|rot${OW}`;
          iW[`${mW.d[0].block}${EW}`] = {
            positions: mW.d.map((iW => {
              let {
                block: mW,
                y: NW,
                z: PW
              } = iW;
              return {
                block: `${mW}${EW}`,
                y: NW,
                ...WW[OW](PW)
              }
            }))
          }
        }
        return iW
      }(),
      ... function() {
        const WW = {};
        for (let iW = 1; iW <= mW.l; iW++) {
          const OW = (0, mW.xc)(iW),
            EW = mW.o[iW - 1],
            NW = [{
              block: OW,
              x: 0,
              y: 0,
              z: 0
            }];
          for (const WW of mW.h)
            for (let iW = 1; iW <= EW; iW++) {
              if ("southwest" === WW && 1 === iW) continue;
              const {
                x: OW,
                z: EW
              } = mW.i[WW];
              NW.push({
                block: (0, mW.tc)(WW, iW),
                x: OW,
                y: iW - 1,
                z: EW
              })
            }
          WW[OW] = {
            positions: NW
          }
        }
        return WW
      }(),
      "Solar Panel": {
        positions: [{
          block: "Solar Panel",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Solar Panel SE",
          x: 1,
          y: 0,
          z: 0
        }, {
          block: "_Solar Panel NW",
          x: 0,
          y: 0,
          z: -1
        }, {
          block: "_Solar Panel NE",
          x: 1,
          y: 0,
          z: -1
        }]
      },
      "Solar Panel|meta|rot2": {
        positions: [{
          block: "Solar Panel|meta|rot2",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Solar Panel SE|meta|rot2",
          x: 0,
          y: 0,
          z: -1
        }, {
          block: "_Solar Panel NW|meta|rot2",
          x: -1,
          y: 0,
          z: 0
        }, {
          block: "_Solar Panel NE|meta|rot2",
          x: -1,
          y: 0,
          z: -1
        }]
      },
      "Solar Panel|meta|rot3": {
        positions: [{
          block: "Solar Panel|meta|rot3",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Solar Panel SE|meta|rot3",
          x: -1,
          y: 0,
          z: 0
        }, {
          block: "_Solar Panel NW|meta|rot3",
          x: 0,
          y: 0,
          z: 1
        }, {
          block: "_Solar Panel NE|meta|rot3",
          x: -1,
          y: 0,
          z: 1
        }]
      },
      "Solar Panel|meta|rot4": {
        positions: [{
          block: "Solar Panel|meta|rot4",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Solar Panel SE|meta|rot4",
          x: 0,
          y: 0,
          z: 1
        }, {
          block: "_Solar Panel NW|meta|rot4",
          x: 1,
          y: 0,
          z: 0
        }, {
          block: "_Solar Panel NE|meta|rot4",
          x: 1,
          y: 0,
          z: 1
        }]
      },
      "Homestead Core": {
        positions: [{
          block: "Homestead Core",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Homestead Core Mid",
          x: 0,
          y: 1,
          z: 0
        }, {
          block: "_Homestead Core Top",
          x: 0,
          y: 2,
          z: 0
        }]
      }
    };

    function LW(WW) {
      return {
        [`${WW} Banner`]: {
          positions: [{
            block: `${WW} Banner`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${WW} Banner Flag|meta|rot1|bot`,
            x: 0,
            y: 1,
            z: 0
          }]
        },
        [`${WW} Banner|meta|rot2|bot`]: {
          positions: [{
            block: `${WW} Banner|meta|rot2|bot`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${WW} Banner Flag|meta|rot2|bot`,
            x: 0,
            y: 1,
            z: 0
          }]
        },
        [`${WW} Banner|meta|rot3|bot`]: {
          positions: [{
            block: `${WW} Banner|meta|rot3|bot`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${WW} Banner Flag|meta|rot3|bot`,
            x: 0,
            y: 1,
            z: 0
          }]
        },
        [`${WW} Banner|meta|rot4|bot`]: {
          positions: [{
            block: `${WW} Banner|meta|rot4|bot`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${WW} Banner Flag|meta|rot4|bot`,
            x: 0,
            y: 1,
            z: 0
          }]
        },
        [`${WW} Banner|meta|rot1|side`]: {
          positions: [{
            block: `${WW} Banner|meta|rot1|side`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${WW} Banner Flag|meta|rot1|side`,
            x: 0,
            y: -1,
            z: 0
          }]
        },
        [`${WW} Banner|meta|rot2|side`]: {
          positions: [{
            block: `${WW} Banner|meta|rot2|side`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${WW} Banner Flag|meta|rot2|side`,
            x: 0,
            y: -1,
            z: 0
          }]
        },
        [`${WW} Banner|meta|rot3|side`]: {
          positions: [{
            block: `${WW} Banner|meta|rot3|side`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${WW} Banner Flag|meta|rot3|side`,
            x: 0,
            y: -1,
            z: 0
          }]
        },
        [`${WW} Banner|meta|rot4|side`]: {
          positions: [{
            block: `${WW} Banner|meta|rot4|side`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${WW} Banner Flag|meta|rot4|side`,
            x: 0,
            y: -1,
            z: 0
          }]
        },
        [`${WW} Banner|meta|rot1|top`]: {
          positions: [{
            block: `${WW} Banner|meta|rot1|top`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${WW} Banner Flag`,
            x: 0,
            y: -1,
            z: 0
          }]
        },
        [`${WW} Banner|meta|rot2|top`]: {
          positions: [{
            block: `${WW} Banner|meta|rot2|top`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${WW} Banner Flag|meta|rot2|top`,
            x: 0,
            y: -1,
            z: 0
          }]
        },
        [`${WW} Banner|meta|rot3|top`]: {
          positions: [{
            block: `${WW} Banner|meta|rot3|top`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${WW} Banner Flag|meta|rot3|top`,
            x: 0,
            y: -1,
            z: 0
          }]
        },
        [`${WW} Banner|meta|rot4|top`]: {
          positions: [{
            block: `${WW} Banner|meta|rot4|top`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${WW} Banner Flag|meta|rot4|top`,
            x: 0,
            y: -1,
            z: 0
          }]
        }
      }
    }

    function cW(WW) {
      const iW = (0, NW.Xb)(WW);
      return {
        [iW]: {
          positions: [{
            block: iW,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${iW} Top Left`,
            x: 0,
            y: 1,
            z: 0
          }, {
            block: `_${iW} Top Right`,
            x: -1,
            y: 1,
            z: 0
          }, {
            block: `_${iW} Bottom Right`,
            x: -1,
            y: 0,
            z: 0
          }]
        },
        [`${iW}|meta|rot2`]: {
          positions: [{
            block: `${iW}|meta|rot2`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${iW} Top Left|meta|rot2`,
            x: 0,
            y: 1,
            z: 0
          }, {
            block: `_${iW} Top Right|meta|rot2`,
            x: 0,
            y: 1,
            z: 1
          }, {
            block: `_${iW} Bottom Right|meta|rot2`,
            x: 0,
            y: 0,
            z: 1
          }]
        },
        [`${iW}|meta|rot3`]: {
          positions: [{
            block: `${iW}|meta|rot3`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${iW} Top Left|meta|rot3`,
            x: 0,
            y: 1,
            z: 0
          }, {
            block: `_${iW} Top Right|meta|rot3`,
            x: 1,
            y: 1,
            z: 0
          }, {
            block: `_${iW} Bottom Right|meta|rot3`,
            x: 1,
            y: 0,
            z: 0
          }]
        },
        [`${iW}|meta|rot4`]: {
          positions: [{
            block: `${iW}|meta|rot4`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${iW} Top Left|meta|rot4`,
            x: 0,
            y: 1,
            z: 0
          }, {
            block: `_${iW} Top Right|meta|rot4`,
            x: 0,
            y: 1,
            z: -1
          }, {
            block: `_${iW} Bottom Right|meta|rot4`,
            x: 0,
            y: 0,
            z: -1
          }]
        }
      }
    }

    function wW(WW) {
      const iW = `_${WW} Back`,
        OW = `_${WW} Dish`;
      return {
        [WW]: {
          positions: [{
            block: WW,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: iW,
            x: 0,
            y: 0,
            z: -1
          }, {
            block: OW,
            x: 0,
            y: 1,
            z: -1
          }]
        },
        [`${WW}|meta|rot2`]: {
          positions: [{
            block: `${WW}|meta|rot2`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `${iW}|meta|rot2`,
            x: -1,
            y: 0,
            z: 0
          }, {
            block: `${OW}|meta|rot2`,
            x: -1,
            y: 1,
            z: 0
          }]
        },
        [`${WW}|meta|rot3`]: {
          positions: [{
            block: `${WW}|meta|rot3`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `${iW}|meta|rot3`,
            x: 0,
            y: 0,
            z: 1
          }, {
            block: `${OW}|meta|rot3`,
            x: 0,
            y: 1,
            z: 1
          }]
        },
        [`${WW}|meta|rot4`]: {
          positions: [{
            block: `${WW}|meta|rot4`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `${iW}|meta|rot4`,
            x: 1,
            y: 0,
            z: 0
          }, {
            block: `${OW}|meta|rot4`,
            x: 1,
            y: 1,
            z: 0
          }]
        }
      }
    }

    function tW(WW) {
      const iW = `Small ${WW} Pod`;
      return {
        [iW]: {
          positions: [{
            block: iW,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_Small ${WW} Pod Mid`,
            x: 0,
            y: 1,
            z: 0
          }, {
            block: `_Small ${WW} Pod Top`,
            x: 0,
            y: 2,
            z: 0
          }]
        }
      }
    }
    for (const xW in PW) {
      for (const WW of PW[xW].positions)
        if (WW.id = EW.j[WW.block].id, xW === WW.block && (0 !== WW.x || 0 !== WW.y || 0 !== WW.z)) throw new Error(`Multiblock "${xW}" has main block "${WW.block}" at non-origin position (${WW.x}, ${WW.y}, ${WW.z}) - if you need to do something like this, you'll need to rethink your approach: Banners are a good template to follow.`);
      PW[EW.j[xW].id] = PW[xW]
    }
    const ZW = {};
    for (const xW in PW)
      for (const {
          block: WW,
          x: iW,
          y: OW,
          z: mW
        }
        of PW[xW].positions) {
        const NW = {
          mainMultiblock: xW,
          compX: iW,
          compY: OW,
          compZ: mW
        };
        ZW[WW] = NW, ZW[EW.j[WW].id] = NW
      }
  },
  39392: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => cW,
      h: () => LW
    });
    var mW = OW(5725),
      EW = OW(5772),
      NW = OW(5774);
    const PW = EW.o.map((WW => {
      let {
        dx: iW,
        dz: OW
      } = WW;
      return [iW, 0, OW]
    }));

    function LW(WW) {
      const iW = mW.j[WW];
      return !!iW && WW !== mW.d && !iW.model && !iW.dl && !1 !== iW.solid && !iW.sj
    }
    class cW {
      constructor(WW) {
        this.model = WW, this.reshapeOffsets = [...PW, [0, -1, 0]]
      }
      handles(WW) {
        const iW = mW.j[WW];
        return (null === iW || void 0 === iW ? void 0 : iW.model) === this.model && void 0 !== iW.attachedTop
      }
      affects(WW) {
        return this.handles(WW) || LW(WW) || (0, NW.x)(mW.j[WW])
      }
      shape(WW, iW, OW, PW, cW) {
        let wW = this.handles(WW(iW, OW + 1, PW)) ? EW.e : 0;
        return EW.o.forEach(((cW, tW) => {
          let {
            dx: ZW,
            dz: xW
          } = cW;
          const lW = WW(iW + ZW, OW, PW + xW);
          (this.handles(lW) || LW(lW) || function(WW, iW) {
            const OW = mW.j[WW];
            return (0, NW.x)(OW) && (0, NW.q)(OW.meta.rot) === (0 !== EW.o[iW].dx)
          }(lW, tW)) && (wW |= 1 << tW)
        })), (0, mW.l)((0, EW.f)(mW.j[cW].meta.rootName, wW))
      }
    }
  },
  39189: (WW, iW, OW) => {
    function mW(WW, iW) {
      var OW;
      iW || (iW = {});
      const mW = null !== (OW = iW.customAttributes) && void 0 !== OW ? OW : {};
      var EW, NW, PW;
      "Gun" === (null === WW || void 0 === WW ? void 0 : WW.type) && (mW.shotsLeft = null !== (EW = null !== (NW = mW.shotsLeft) && void 0 !== NW ? NW : null === (PW = mW.gunStats) || void 0 === PW ? void 0 : PW.clipSize) && void 0 !== EW ? EW : WW.clipSize);
      if (mW.enchantmentTier && (mW.enchantmentTier = mW.enchantmentTier.toString()), mW.enchantments)
        for (const ZW in mW.enchantments) {
          const WW = mW.enchantments[ZW];
          if ("number" !== typeof WW) {
            const iW = parseInt(WW);
            isNaN(iW) || iW < 0 ? mW.enchantments[ZW] = void 0 : mW.enchantments[ZW] = iW > 1e9 ? 1e9 : iW
          }
        }
      if (mW.enchantmentData)
        for (const ZW in mW.enchantmentData) {
          const WW = mW.enchantmentData[ZW];
          if (!WW) continue;
          if ("object" !== typeof WW) {
            mW.enchantmentData[ZW] = void 0;
            continue
          }
          const iW = WW.icon,
            OW = WW.description;
          var LW, cW, wW, tW;
          if ("string" !== typeof iW) mW.enchantmentData[ZW].icon = null !== (LW = null === iW || void 0 === iW || null === (cW = iW.toString) || void 0 === cW ? void 0 : cW.call(iW)) && void 0 !== LW ? LW : void 0;
          if ("string" !== typeof OW) mW.enchantmentData[ZW].description = null !== (wW = null === OW || void 0 === OW || null === (tW = OW.toString) || void 0 === tW ? void 0 : tW.call(OW)) && void 0 !== wW ? wW : void 0
        }
      return iW.customAttributes = mW, iW
    }
    OW.d(iW, {
      c: () => mW
    })
  },
  39389: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => YW,
      i: () => UW,
      k: () => cW,
      o: () => ZW,
      r: () => yW
    });
    var mW = OW(5725),
      EW = OW(5754),
      NW = OW(39392);
    const PW = (0, mW.l)("Noticeboard"),
      LW = (0, mW.l)("Standing Noticeboard|meta|rot4|lrud");

    function cW(WW) {
      return PW <= WW && WW <= LW
    }
    const wW = new Uint8Array(LW - PW + 1);
    for (let TW = PW; TW <= LW; TW++) wW[TW - PW] = (0, EW.w)(mW.j[TW].meta.metaStr);
    const tW = 64,
      ZW = tW * tW,
      [xW, lW, AW, bW] = [0, 1, 2, 3];

    function jW(WW) {
      var iW, OW;
      return "string" === typeof(null === WW || void 0 === WW || null === (iW = WW.persisted) || void 0 === iW || null === (OW = iW.shared) || void 0 === OW ? void 0 : OW.text)
    }

    function UW(WW) {
      return jW(WW) && "" !== WW.persisted.shared.text.trim()
    }

    function kW(WW, iW) {
      let [OW, , mW] = iW;
      const [NW, , PW] = EW.y[WW][lW];
      return OW * NW + mW * PW
    }

    function sW(WW, iW, OW) {
      return OW[1] - iW[1] || kW(WW, iW) - kW(WW, OW)
    }

    function MW(WW, iW, OW, NW, LW) {
      var cW;
      let tW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : WW(iW[0], iW[1], iW[2]);
      if (!(wW[tW - PW] & 1 << OW)) return null;
      const [ZW, xW, lW] = EW.y[LW][OW], AW = [iW[0] + ZW, iW[1] + xW, iW[2] + lW], bW = WW(AW[0], AW[1], AW[2]), jW = null === (cW = mW.j[bW]) || void 0 === cW ? void 0 : cW.meta;
      return (null === jW || void 0 === jW ? void 0 : jW.rootId) === NW && jW.rot === LW && wW[bW - PW] & 1 << (1 ^ OW) ? AW : null
    }

    function KW(WW, iW, OW, NW) {
      const PW = WW(iW, OW, NW);
      if (!cW(PW)) return null;
      const {
        rootId: LW,
        rot: wW
      } = mW.j[PW].meta, ZW = (iW, OW) => {
        let mW = iW,
          EW = 1;
        for (let NW = MW(WW, mW, OW, LW, wW); NW && EW < tW; NW = MW(WW, mW, OW, LW, wW)) mW = NW, EW++;
        return {
          end: mW,
          cells: EW
        }
      }, jW = ZW(ZW([iW, OW, NW], xW).end, AW).end, UW = ZW(jW, lW).cells, [kW, , sW] = EW.y[wW][lW];
      let KW = 1;
      WW: for (; KW < tW; KW++)
        for (let iW = 0; iW < UW; iW++)
          if (!MW(WW, [jW[0] + kW * iW, jW[1] - KW + 1, jW[2] + sW * iW], bW, LW, wW)) break WW;
      return {
        anchor: jW,
        rootId: LW,
        rot: wW,
        width: UW,
        height: KW
      }
    }

    function SW(WW, iW) {
      for (const OW of function(WW) {
          let {
            anchor: iW,
            rot: OW,
            width: mW,
            height: NW
          } = WW;
          const [PW, , LW] = EW.y[OW][lW], cW = [];
          for (let EW = 0; EW < NW; EW++)
            for (let WW = 0; WW < mW; WW++) cW.push([iW[0] + PW * WW, iW[1] - EW, iW[2] + LW * WW]);
          return cW
        }(WW))
        if (jW(iW(OW[0], OW[1], OW[2]))) return OW;
      return null
    }

    function YW(WW, iW, OW, EW, NW) {
      const PW = WW(OW, EW, NW);
      if (!cW(PW)) return null;
      const {
        rootId: LW,
        rot: wW
      } = mW.j[PW].meta, tW = [
        [OW, EW, NW]
      ], xW = new Set([tW[0].join()]);
      let lW = tW[0],
        AW = null;
      for (let mW = 0; mW < tW.length; mW++) {
        const OW = tW[mW];
        if (sW(wW, OW, lW) < 0 && (lW = OW), jW(iW(OW[0], OW[1], OW[2]))) {
          const iW = KW(WW, OW[0], OW[1], OW[2]);
          (!AW || sW(wW, iW.anchor, AW.anchor) < 0) && (AW = iW)
        }
        for (let iW = 0; iW < 4 && tW.length < ZW; iW++) {
          const mW = MW(WW, OW, iW, LW, wW);
          mW && !xW.has(mW.join()) && (xW.add(mW.join()), tW.push(mW))
        }
      }
      return AW ??= KW(WW, lW[0], lW[1], lW[2]), {
        cells: tW,
        topLeft: lW,
        rect: AW,
        textCell: SW(AW, iW)
      }
    }

    function yW(WW, iW, OW, PW, LW) {
      if (null !== OW && cW(OW)) {
        const {
          rootName: WW,
          rot: iW
        } = mW.j[OW].meta;
        if (EW.y[iW].some((WW => {
            let [iW, OW, mW] = WW;
            return iW === PW[0] && OW === PW[1] && mW === PW[2]
          }))) return {
          root: WW,
          rot: iW
        }
      }
      const [wW, tW] = EW.r[LW], ZW = WW(iW[0] - wW, iW[1], iW[2] - tW);
      return {
        root: (0, NW.h)(ZW) ? EW.B : EW.z,
        rot: LW
      }
    }
  },
  39386: (WW, iW, OW) => {
    OW.d(iW, {
      B: () => xW,
      b: () => UW,
      d: () => MW,
      f: () => YW,
      i: () => yW,
      l: () => AW,
      p: () => ZW,
      s: () => lW,
      w: () => TW,
      z: () => JW
    });
    var mW = OW(7453),
      EW = OW(38208),
      NW = OW(5725);
    const PW = (0, NW.l)("Water"),
      LW = (0, NW.l)("Lava"),
      cW = (0, NW.l)("Air"),
      wW = {
        physicsState: {
          type: mW.p.CAR,
          tier: mW.g.KART
        },
        validBlockIds: "solidBlocks",
        meshSize: 4,
        placeSound: null
      },
      tW = {
        validBlockIds: "solidBlocks",
        meshSize: 4,
        placeSound: null,
        seats: [{
          role: "driver",
          localOffset: [0, .75, -.35]
        }]
      },
      ZW = {
        Boat: {
          meshItemName: "INTERNAL_MESH_Boat",
          physicsState: {
            type: mW.p.BOAT,
            tier: mW.f.WOOD
          },
          validBlockIds: [PW, LW],
          meshSize: 1.2,
          placeSound: "splash1"
        },
        "Obsidian Boat": {
          meshItemName: "INTERNAL_MESH_Obsidian Boat",
          physicsState: {
            type: mW.p.BOAT,
            tier: mW.f.OBSIDIAN
          },
          validBlockIds: [PW, LW],
          meshSize: 1.2,
          placeSound: "splash1"
        },
        Speedboat: {
          meshItemName: "INTERNAL_MESH_Speedboat",
          physicsState: {
            type: mW.p.BOAT,
            tier: mW.f.SPEED
          },
          validBlockIds: [PW],
          meshSize: 1.2,
          placeSound: "splash1"
        },
        Hovercraft: {
          meshItemName: "INTERNAL_MESH_Hovercraft",
          physicsState: {
            type: mW.p.HOVERCRAFT,
            tier: null
          },
          validBlockIds: "solidBlocksOrFluid",
          meshSize: 4,
          placeSound: null
        },
        "Yellow Kart": {
          ...wW,
          meshItemName: "INTERNAL_MESH_Yellow Kart"
        },
        "White Kart": {
          ...wW,
          meshItemName: "INTERNAL_MESH_White Kart"
        },
        "Red Kart": {
          ...wW,
          meshItemName: "INTERNAL_MESH_Red Kart"
        },
        "Purple Kart": {
          ...wW,
          meshItemName: "INTERNAL_MESH_Purple Kart"
        },
        "Pink Kart": {
          ...wW,
          meshItemName: "INTERNAL_MESH_Pink Kart"
        },
        "Orange Kart": {
          ...wW,
          meshItemName: "INTERNAL_MESH_Orange Kart"
        },
        "Magenta Kart": {
          ...wW,
          meshItemName: "INTERNAL_MESH_Magenta Kart"
        },
        "Lime Kart": {
          ...wW,
          meshItemName: "INTERNAL_MESH_Lime Kart"
        },
        "Light Gray Kart": {
          ...wW,
          meshItemName: "INTERNAL_MESH_Light Gray Kart"
        },
        "Light Blue Kart": {
          ...wW,
          meshItemName: "INTERNAL_MESH_Light Blue Kart"
        },
        "Green Kart": {
          ...wW,
          meshItemName: "INTERNAL_MESH_Green Kart"
        },
        "Gray Kart": {
          ...wW,
          meshItemName: "INTERNAL_MESH_Gray Kart"
        },
        "Cyan Kart": {
          ...wW,
          meshItemName: "INTERNAL_MESH_Cyan Kart"
        },
        "Brown Kart": {
          ...wW,
          meshItemName: "INTERNAL_MESH_Brown Kart"
        },
        "Blue Kart": {
          ...wW,
          meshItemName: "INTERNAL_MESH_Blue Kart"
        },
        "Black Kart": {
          ...wW,
          meshItemName: "INTERNAL_MESH_Black Kart"
        },
        "Off Roader": {
          meshItemName: "INTERNAL_MESH_Off Roader",
          physicsState: {
            type: mW.p.CAR,
            tier: mW.g.OFF_ROADER
          },
          validBlockIds: "solidBlocks",
          meshSize: 4,
          placeSound: null,
          seats: [{
            role: "driver",
            localOffset: [0, .25, -.2]
          }, {
            role: "passenger",
            localOffset: [0, .25, -1.2]
          }]
        },
        "Gold Mining Drill": {
          ...tW,
          meshItemName: "INTERNAL_MESH_Gold Mining Drill",
          physicsState: {
            type: mW.p.CAR,
            tier: mW.g.GOLD_MINING_DRILL
          }
        },
        "Iron Mining Drill": {
          ...tW,
          meshItemName: "INTERNAL_MESH_Iron Mining Drill",
          physicsState: {
            type: mW.p.CAR,
            tier: mW.g.IRON_MINING_DRILL
          }
        },
        "Diamond Mining Drill": {
          ...tW,
          meshItemName: "INTERNAL_MESH_Diamond Mining Drill",
          physicsState: {
            type: mW.p.CAR,
            tier: mW.g.DIAMOND_MINING_DRILL
          }
        },
        "Moonstone Mining Drill": {
          ...tW,
          meshItemName: "INTERNAL_MESH_Moonstone Mining Drill",
          physicsState: {
            type: mW.p.CAR,
            tier: mW.g.MOONSTONE_MINING_DRILL
          }
        },
        "Armored Car": {
          meshItemName: "INTERNAL_MESH_Armored Car",
          physicsState: {
            type: mW.p.CAR,
            tier: mW.g.ARMORED_CAR
          },
          validBlockIds: "solidBlocks",
          meshSize: 4,
          placeSound: null,
          seats: [{
            role: "driver",
            localOffset: [0, .25, -.2]
          }, {
            role: "passenger",
            localOffset: [0, .25, -1.2]
          }]
        },
        "Light Blue Car": {
          meshItemName: "INTERNAL_MESH_Car",
          physicsState: {
            type: mW.p.CAR,
            tier: mW.g.CAR
          },
          validBlockIds: "solidBlocks",
          meshSize: 4,
          placeSound: null
        }
      },
      xW = Object.values(ZW).map((WW => WW.meshItemName));

    function lW(WW) {
      for (const iW of EW.c)
        if (ZW[iW].meshItemName === WW) return iW;
      return null
    }

    function AW(WW, iW) {
      const OW = WW.validBlockIds;
      if (Array.isArray(OW)) return OW.includes(iW);
      if (iW === cW) return !1;
      if ("solidBlocks" === OW) return !0 !== NW.j[iW].dl;
      if ("solidBlocksOrFluid" === OW) return !0;
      throw new Error(`Unsupported validBlockIds for ${iW}: ${JSON.stringify(OW)}`)
    }
    const bW = {
        meshAttachment: {
          size: .12,
          offset: [0, 1.8, -.24],
          rotation: [0, 0, 0]
        }
      },
      jW = {
        "Yellow Balloon": {
          ...bW,
          physicsState: {
            type: mW.p.BALLOON,
            tier: mW.d.YELLOW
          }
        },
        "White Balloon": {
          ...bW,
          physicsState: {
            type: mW.p.BALLOON,
            tier: mW.d.WHITE
          }
        },
        "Red Balloon": {
          ...bW,
          physicsState: {
            type: mW.p.BALLOON,
            tier: mW.d.RED
          }
        },
        "Purple Balloon": {
          ...bW,
          physicsState: {
            type: mW.p.BALLOON,
            tier: mW.d.PURPLE
          }
        },
        "Pink Balloon": {
          ...bW,
          physicsState: {
            type: mW.p.BALLOON,
            tier: mW.d.PINK
          }
        },
        "Orange Balloon": {
          ...bW,
          physicsState: {
            type: mW.p.BALLOON,
            tier: mW.d.ORANGE
          }
        },
        "Magenta Balloon": {
          ...bW,
          physicsState: {
            type: mW.p.BALLOON,
            tier: mW.d.MAGENTA
          }
        },
        "Lime Balloon": {
          ...bW,
          physicsState: {
            type: mW.p.BALLOON,
            tier: mW.d.LIME
          }
        },
        "Light Gray Balloon": {
          ...bW,
          physicsState: {
            type: mW.p.BALLOON,
            tier: mW.d.LIGHT_GRAY
          }
        },
        "Light Blue Balloon": {
          ...bW,
          physicsState: {
            type: mW.p.BALLOON,
            tier: mW.d.LIGHT_BLUE
          }
        },
        "Green Balloon": {
          ...bW,
          physicsState: {
            type: mW.p.BALLOON,
            tier: mW.d.GREEN
          }
        },
        "Gray Balloon": {
          ...bW,
          physicsState: {
            type: mW.p.BALLOON,
            tier: mW.d.GRAY
          }
        },
        "Cyan Balloon": {
          ...bW,
          physicsState: {
            type: mW.p.BALLOON,
            tier: mW.d.CYAN
          }
        },
        "Brown Balloon": {
          ...bW,
          physicsState: {
            type: mW.p.BALLOON,
            tier: mW.d.BROWN
          }
        },
        "Blue Balloon": {
          ...bW,
          physicsState: {
            type: mW.p.BALLOON,
            tier: mW.d.BLUE
          }
        },
        "Black Balloon": {
          ...bW,
          physicsState: {
            type: mW.p.BALLOON,
            tier: mW.d.BLACK
          }
        }
      };

    function UW(WW) {
      var iW;
      return null === WW || void 0 === WW ? null : null !== (iW = jW[WW]) && void 0 !== iW ? iW : null
    }
    const kW = {
        meshAttachment: {
          size: 3,
          offset: [0, .72, .3],
          rotation: [-Math.PI / 2, Math.PI, Math.PI]
        }
      },
      sW = {
        "Wood Hang Glider": {
          ...kW,
          physicsState: {
            type: mW.p.GLIDER,
            tier: mW.k.WOOD
          }
        },
        "Iron Hang Glider": {
          ...kW,
          physicsState: {
            type: mW.p.GLIDER,
            tier: mW.k.IRON
          }
        },
        "Gold Hang Glider": {
          ...kW,
          physicsState: {
            type: mW.p.GLIDER,
            tier: mW.k.GOLD
          }
        },
        "Diamond Hang Glider": {
          ...kW,
          physicsState: {
            type: mW.p.GLIDER,
            tier: mW.k.DIAMOND
          }
        }
      };

    function MW(WW) {
      var iW;
      return null === WW || void 0 === WW ? null : null !== (iW = sW[WW]) && void 0 !== iW ? iW : null
    }
    const KW = new Set(Object.values(jW).map((WW => WW.physicsState.type))),
      SW = new Set(Object.values(sW).map((WW => WW.physicsState.type)));

    function YW(WW) {
      return KW.has(WW)
    }

    function yW(WW) {
      return SW.has(WW)
    }

    function TW(WW) {
      return WW === mW.p.DEFAULT || function(WW) {
        return KW.has(WW) || SW.has(WW)
      }(WW)
    }

    function JW(WW) {
      return !TW(WW) && WW !== mW.p.SLEEPING
    }
  },
  7453: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => PW,
      f: () => EW,
      g: () => cW,
      k: () => NW,
      m: () => wW,
      p: () => mW,
      s: () => LW
    });
    let mW = function(WW) {
        return WW[WW.DEFAULT = 0] = "DEFAULT", WW[WW.BOAT = 1] = "BOAT", WW[WW.GLIDER = 2] = "GLIDER", WW[WW.BALLOON = 3] = "BALLOON", WW[WW.SLEEPING = 4] = "SLEEPING", WW[WW.RIDING_MOB = 5] = "RIDING_MOB", WW[WW.CAR = 6] = "CAR", WW[WW.HOVERCRAFT = 7] = "HOVERCRAFT", WW
      }({}),
      EW = function(WW) {
        return WW[WW.WOOD = 0] = "WOOD", WW[WW.OBSIDIAN = 1] = "OBSIDIAN", WW[WW.SPEED = 2] = "SPEED", WW
      }({}),
      NW = function(WW) {
        return WW[WW.WOOD = 0] = "WOOD", WW[WW.IRON = 1] = "IRON", WW[WW.GOLD = 2] = "GOLD", WW[WW.DIAMOND = 3] = "DIAMOND", WW
      }({}),
      PW = function(WW) {
        return WW[WW.YELLOW = 0] = "YELLOW", WW[WW.WHITE = 1] = "WHITE", WW[WW.RED = 2] = "RED", WW[WW.PURPLE = 3] = "PURPLE", WW[WW.PINK = 4] = "PINK", WW[WW.ORANGE = 5] = "ORANGE", WW[WW.MAGENTA = 6] = "MAGENTA", WW[WW.LIME = 7] = "LIME", WW[WW.LIGHT_GRAY = 8] = "LIGHT_GRAY", WW[WW.LIGHT_BLUE = 9] = "LIGHT_BLUE", WW[WW.GREEN = 10] = "GREEN", WW[WW.GRAY = 11] = "GRAY", WW[WW.CYAN = 12] = "CYAN", WW[WW.BROWN = 13] = "BROWN", WW[WW.BLUE = 14] = "BLUE", WW[WW.BLACK = 15] = "BLACK", WW
      }({}),
      LW = function(WW) {
        return WW[WW.ROTATION_1 = 0] = "ROTATION_1", WW[WW.ROTATION_2 = 1] = "ROTATION_2", WW[WW.ROTATION_3 = 2] = "ROTATION_3", WW[WW.ROTATION_4 = 3] = "ROTATION_4", WW
      }({}),
      cW = function(WW) {
        return WW[WW.KART = 0] = "KART", WW[WW.OFF_ROADER = 1] = "OFF_ROADER", WW[WW.CAR = 2] = "CAR", WW[WW.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", WW[WW.ARMORED_CAR = 4] = "ARMORED_CAR", WW[WW.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", WW[WW.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", WW[WW.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", WW
      }({});
    mW.DEFAULT, mW.BOAT, EW.SPEED, mW.GLIDER, NW.DIAMOND, mW.BALLOON, PW.BLACK, mW.SLEEPING, LW.ROTATION_4, mW.RIDING_MOB, mW.CAR, cW.MOONSTONE_MINING_DRILL, mW.HOVERCRAFT;
    let wW = function(WW) {
      return WW[WW.NORMAL = 0] = "NORMAL", WW[WW.GLIDING = 1] = "GLIDING", WW[WW.FLOATING = 2] = "FLOATING", WW
    }({})
  },
  39396: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => NW,
      f: () => PW,
      g: () => EW,
      i: () => LW
    });
    var mW = OW(349);
    const EW = ["Snowball", "Snowball Launcher", "Pebble", "Reinforced Pebble", "Ball", "Reinforced Ball", "Mango", "Moonstone Orb", ...OW(639).t.map((WW => `${WW} Spawn Orb`)), "Fireball", "RPG", "Obby RPG", "Super RPG", "Grenade Launcher", "Iceball", "Bouncy Bomb", "Coconut", "Splash Speed Potion", "Splash Speed Potion II", "Splash Defense Potion", "Splash Defense Potion II", "Splash Strength Potion", "Splash Strength Potion II", "Splash Invisibility Potion", "Splash Jump Potion", "Splash Jump Potion II", "Splash Knockback Potion", "Splash Knockback Potion II", "Splash Poison Potion", "Splash Poison Potion II", "Splash Slowness Potion", "Splash Slowness Potion II", "Splash Weakness Potion", "Splash Weakness Potion II", "Splash Milk Potion", "Splash Instant Damage Potion", "Splash Instant Damage Potion II", "Splash Regeneration Potion", "Splash Regeneration Potion II", "Splash Instant Healing Potion", "Splash Instant Healing Potion II", "Splash Haste Potion", "Splash Haste Potion II", "Splash Shield Potion", "Splash Shield Potion II", "Splash Double Jump Potion", "Splash Heat Resistance Potion", "Splash X-Ray Vision Potion", "Splash Mining Yield Potion", "Splash Mining Yield Potion II", "Splash Brain Rot Potion", "Yellow Paintball Gun", "White Paintball Gun", "Red Paintball Gun", "Purple Paintball Gun", "Pink Paintball Gun", "Orange Paintball Gun", "Magenta Paintball Gun", "Lime Paintball Gun", "Light Gray Paintball Gun", "Light Blue Paintball Gun", "Green Paintball Gun", "Gray Paintball Gun", "Cyan Paintball Gun", "Brown Paintball Gun", "Blue Paintball Gun", "Black Paintball Gun", "Yellow Heavy Paintball Gun", "White Heavy Paintball Gun", "Red Heavy Paintball Gun", "Purple Heavy Paintball Gun", "Pink Heavy Paintball Gun", "Orange Heavy Paintball Gun", "Magenta Heavy Paintball Gun", "Lime Heavy Paintball Gun", "Light Gray Heavy Paintball Gun", "Light Blue Heavy Paintball Gun", "Green Heavy Paintball Gun", "Gray Heavy Paintball Gun", "Cyan Heavy Paintball Gun", "Brown Heavy Paintball Gun", "Blue Heavy Paintball Gun", "Black Heavy Paintball Gun", "Toxin Ball", "Splash Aura XP Potion", "Splash Aura XP Potion II", "Firecracker", "Rainbow Firecracker", "White Firecracker", "Orange Firecracker", "Magenta Firecracker", "Light Blue Firecracker", "Yellow Firecracker", "Lime Firecracker", "Pink Firecracker", "Gray Firecracker", "Light Gray Firecracker", "Cyan Firecracker", "Purple Firecracker", "Blue Firecracker", "Brown Firecracker", "Green Firecracker", "Red Firecracker", "Black Firecracker", "Firecracker Pebble", "Rainbow Firecracker Pebble", "White Firecracker Pebble", "Orange Firecracker Pebble", "Magenta Firecracker Pebble", "Light Blue Firecracker Pebble", "Yellow Firecracker Pebble", "Lime Firecracker Pebble", "Pink Firecracker Pebble", "Gray Firecracker Pebble", "Light Gray Firecracker Pebble", "Cyan Firecracker Pebble", "Purple Firecracker Pebble", "Blue Firecracker Pebble", "Brown Firecracker Pebble", "Green Firecracker Pebble", "Red Firecracker Pebble", "Black Firecracker Pebble", "Blinding Pebble", "Poop", "Wood Boomerang", "Stone Boomerang", "Iron Boomerang", "Gold Boomerang", "Diamond Boomerang", "Moonstone Boomerang", ...mW.j, "67 Base Projectile", "67 Boosted Projectile", "Capitano Grenade", "Scatter Pellet", "Lucky Bomb", "Unlucky Bomb", "Swap Orb"],
      NW = ["Obby RPG"];

    function PW(WW) {
      const iW = WW.indexOf("|");
      return -1 === iW ? {
        item: WW,
        clientPredictedThrower: null
      } : {
        item: WW.slice(0, iW),
        clientPredictedThrower: WW.slice(iW + 1)
      }
    }
    const LW = [...EW, "Arrow", "Arrow of Speed", "Arrow of Slowness", "Arrow of Poison", "Arrow of Weakness", "Arrow of Knockback", "Arrow of Strength", "Arrow of Defense", "Arrow of Invisibility", "Arrow of Jumping", "Arrow of Milk", "Arrow of Instant Damage", "Arrow of Regeneration", "Arrow of Instant Healing", "Arrow of Haste", "Arrow of Shield", "Arrow of Double Jump", "Arrow of Heat Resistance", "Arrow of X-Ray Vision", "Arrow of Mining Yield", "Arrow of Brain Rot", "Arrow of Aura XP", "Bullet"]
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);