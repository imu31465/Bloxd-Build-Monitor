export const id = 142;
export const ids = [142];
export const modules = {
  37820: (RR, JR, GR) => {
    function yR(RR, JR, GR, yR) {
      return !(GR && !RR.aimable) && (!JR || RR.gun && "head" !== yR)
    }

    function tR(RR) {
      return Math.max(.1 * RR, 1)
    }

    function uR(RR, JR) {
      return !RR && JR
    }
    GR.d(JR, {
      e: () => uR,
      g: () => tR,
      h: () => yR
    })
  },
  37829: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => qR,
      e: () => ZR
    });
    let yR = null;
    const tR = {
        crosshairAccuracy: [],
        turnDamageIndicators: [],
        turnSoundCues: []
      },
      uR = {
        crosshairAccuracy: RR => {
          const JR = tR.crosshairAccuracy.at(-1);
          JR ? JR.hook(RR) : yR = RR
        },
        turnDamageIndicators: RR => {
          var JR;
          null === (JR = tR.turnDamageIndicators.at(-1)) || void 0 === JR || JR.hook(RR)
        },
        turnSoundCues: RR => {
          var JR;
          null === (JR = tR.turnSoundCues.at(-1)) || void 0 === JR || JR.hook(RR)
        }
      };

    function ZR(RR, JR) {
      const GR = {
          hook: JR
        },
        ZR = tR[RR];
      if (ZR.push(GR), "crosshairAccuracy" === RR && null !== yR) {
        const RR = yR;
        yR = null, uR.crosshairAccuracy(RR)
      }
      return () => {
        const RR = ZR.indexOf(GR); - 1 !== RR && ZR.splice(RR, 1)
      }
    }

    function qR() {
      return uR
    }
  },
  35099: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => uR,
      i: () => tR
    });
    var yR = GR(25);

    function tR(RR, JR) {
      return RR && !JR
    }

    function uR() {
      return tR(yR.d.get("isTouchScreen"), yR.d.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  38977: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => KR,
      f: () => ZR
    });
    var yR = GR(5871),
      tR = GR(5844),
      uR = GR(377);
    const ZR = {
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
      ...qR("White"),
      ...qR("Orange"),
      ...qR("Magenta"),
      ...qR("Light Blue"),
      ...qR("Yellow"),
      ...qR("Lime"),
      ...qR("Pink"),
      ...qR("Gray"),
      ...qR("Light Gray"),
      ...qR("Cyan"),
      ...qR("Purple"),
      ...qR("Blue"),
      ...qR("Brown"),
      ...qR("Green"),
      ...qR("Red"),
      ...qR("Black"),
      ...qR("Draugr"),
      ...qR("Skull"),
      ...qR("Rainbow"),
      ...iR("Sheep"),
      ...iR("Cow"),
      ...iR("Pig"),
      ...iR("Horse"),
      ...iR("Camel"),
      ...iR("Wolf"),
      ...iR("Deer"),
      ...iR("Wildcat"),
      ...fR("Radar"),
      ...fR("Inactive Radar"),
      ...fR("Active Radar"),
      ...VR("Magenta"),
      ...VR("Light Gray"),
      ...VR("Red"),
      ...VR("White"),
      ...VR("Orange"),
      ...VR("Light Blue"),
      ...VR("Yellow"),
      ...VR("Lime"),
      ...VR("Pink"),
      ...VR("Gray"),
      ...VR("Cyan"),
      ...VR("Purple"),
      ...VR("Blue"),
      ...VR("Brown"),
      ...VR("Green"),
      ...VR("Black"),
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
        const RR = "Lunite Auto Miner";
        return {
          [RR]: {
            positions: [{
              block: RR,
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
          [`${RR}|meta|rot2`]: {
            positions: [{
              block: `${RR}|meta|rot2`,
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
          [`${RR}|meta|rot3`]: {
            positions: [{
              block: `${RR}|meta|rot3`,
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
          [`${RR}|meta|rot4`]: {
            positions: [{
              block: `${RR}|meta|rot4`,
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
        const RR = {
            1: RR => ({
              x: 0,
              z: RR
            }),
            2: RR => ({
              x: RR,
              z: 0
            }),
            3: RR => ({
              x: 0,
              z: -RR
            }),
            4: RR => ({
              x: -RR,
              z: 0
            })
          },
          JR = {};
        for (let GR = 1; GR <= 4; GR++) {
          const tR = 1 === GR ? "" : `|meta|rot${GR}`;
          JR[`${yR.c[0].block}${tR}`] = {
            positions: yR.c.map((JR => {
              let {
                block: yR,
                y: uR,
                z: ZR
              } = JR;
              return {
                block: `${yR}${tR}`,
                y: uR,
                ...RR[GR](ZR)
              }
            }))
          }
        }
        return JR
      }(),
      ... function() {
        const RR = {};
        for (let JR = 1; JR <= yR.l; JR++) {
          const GR = (0, yR.fc)(JR),
            tR = yR.p[JR - 1],
            uR = [{
              block: GR,
              x: 0,
              y: 0,
              z: 0
            }];
          for (const RR of yR.g)
            for (let JR = 1; JR <= tR; JR++) {
              if ("southwest" === RR && 1 === JR) continue;
              const {
                x: GR,
                z: tR
              } = yR.i[RR];
              uR.push({
                block: (0, yR.ec)(RR, JR),
                x: GR,
                y: JR - 1,
                z: tR
              })
            }
          RR[GR] = {
            positions: uR
          }
        }
        return RR
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

    function qR(RR) {
      return {
        [`${RR} Banner`]: {
          positions: [{
            block: `${RR} Banner`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${RR} Banner Flag|meta|rot1|bot`,
            x: 0,
            y: 1,
            z: 0
          }]
        },
        [`${RR} Banner|meta|rot2|bot`]: {
          positions: [{
            block: `${RR} Banner|meta|rot2|bot`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${RR} Banner Flag|meta|rot2|bot`,
            x: 0,
            y: 1,
            z: 0
          }]
        },
        [`${RR} Banner|meta|rot3|bot`]: {
          positions: [{
            block: `${RR} Banner|meta|rot3|bot`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${RR} Banner Flag|meta|rot3|bot`,
            x: 0,
            y: 1,
            z: 0
          }]
        },
        [`${RR} Banner|meta|rot4|bot`]: {
          positions: [{
            block: `${RR} Banner|meta|rot4|bot`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${RR} Banner Flag|meta|rot4|bot`,
            x: 0,
            y: 1,
            z: 0
          }]
        },
        [`${RR} Banner|meta|rot1|side`]: {
          positions: [{
            block: `${RR} Banner|meta|rot1|side`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${RR} Banner Flag|meta|rot1|side`,
            x: 0,
            y: -1,
            z: 0
          }]
        },
        [`${RR} Banner|meta|rot2|side`]: {
          positions: [{
            block: `${RR} Banner|meta|rot2|side`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${RR} Banner Flag|meta|rot2|side`,
            x: 0,
            y: -1,
            z: 0
          }]
        },
        [`${RR} Banner|meta|rot3|side`]: {
          positions: [{
            block: `${RR} Banner|meta|rot3|side`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${RR} Banner Flag|meta|rot3|side`,
            x: 0,
            y: -1,
            z: 0
          }]
        },
        [`${RR} Banner|meta|rot4|side`]: {
          positions: [{
            block: `${RR} Banner|meta|rot4|side`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${RR} Banner Flag|meta|rot4|side`,
            x: 0,
            y: -1,
            z: 0
          }]
        },
        [`${RR} Banner|meta|rot1|top`]: {
          positions: [{
            block: `${RR} Banner|meta|rot1|top`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${RR} Banner Flag`,
            x: 0,
            y: -1,
            z: 0
          }]
        },
        [`${RR} Banner|meta|rot2|top`]: {
          positions: [{
            block: `${RR} Banner|meta|rot2|top`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${RR} Banner Flag|meta|rot2|top`,
            x: 0,
            y: -1,
            z: 0
          }]
        },
        [`${RR} Banner|meta|rot3|top`]: {
          positions: [{
            block: `${RR} Banner|meta|rot3|top`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${RR} Banner Flag|meta|rot3|top`,
            x: 0,
            y: -1,
            z: 0
          }]
        },
        [`${RR} Banner|meta|rot4|top`]: {
          positions: [{
            block: `${RR} Banner|meta|rot4|top`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${RR} Banner Flag|meta|rot4|top`,
            x: 0,
            y: -1,
            z: 0
          }]
        }
      }
    }

    function iR(RR) {
      const JR = (0, uR.Yb)(RR);
      return {
        [JR]: {
          positions: [{
            block: JR,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${JR} Top Left`,
            x: 0,
            y: 1,
            z: 0
          }, {
            block: `_${JR} Top Right`,
            x: -1,
            y: 1,
            z: 0
          }, {
            block: `_${JR} Bottom Right`,
            x: -1,
            y: 0,
            z: 0
          }]
        },
        [`${JR}|meta|rot2`]: {
          positions: [{
            block: `${JR}|meta|rot2`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${JR} Top Left|meta|rot2`,
            x: 0,
            y: 1,
            z: 0
          }, {
            block: `_${JR} Top Right|meta|rot2`,
            x: 0,
            y: 1,
            z: 1
          }, {
            block: `_${JR} Bottom Right|meta|rot2`,
            x: 0,
            y: 0,
            z: 1
          }]
        },
        [`${JR}|meta|rot3`]: {
          positions: [{
            block: `${JR}|meta|rot3`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${JR} Top Left|meta|rot3`,
            x: 0,
            y: 1,
            z: 0
          }, {
            block: `_${JR} Top Right|meta|rot3`,
            x: 1,
            y: 1,
            z: 0
          }, {
            block: `_${JR} Bottom Right|meta|rot3`,
            x: 1,
            y: 0,
            z: 0
          }]
        },
        [`${JR}|meta|rot4`]: {
          positions: [{
            block: `${JR}|meta|rot4`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${JR} Top Left|meta|rot4`,
            x: 0,
            y: 1,
            z: 0
          }, {
            block: `_${JR} Top Right|meta|rot4`,
            x: 0,
            y: 1,
            z: -1
          }, {
            block: `_${JR} Bottom Right|meta|rot4`,
            x: 0,
            y: 0,
            z: -1
          }]
        }
      }
    }

    function fR(RR) {
      const JR = `_${RR} Back`,
        GR = `_${RR} Dish`;
      return {
        [RR]: {
          positions: [{
            block: RR,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: JR,
            x: 0,
            y: 0,
            z: -1
          }, {
            block: GR,
            x: 0,
            y: 1,
            z: -1
          }]
        },
        [`${RR}|meta|rot2`]: {
          positions: [{
            block: `${RR}|meta|rot2`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `${JR}|meta|rot2`,
            x: -1,
            y: 0,
            z: 0
          }, {
            block: `${GR}|meta|rot2`,
            x: -1,
            y: 1,
            z: 0
          }]
        },
        [`${RR}|meta|rot3`]: {
          positions: [{
            block: `${RR}|meta|rot3`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `${JR}|meta|rot3`,
            x: 0,
            y: 0,
            z: 1
          }, {
            block: `${GR}|meta|rot3`,
            x: 0,
            y: 1,
            z: 1
          }]
        },
        [`${RR}|meta|rot4`]: {
          positions: [{
            block: `${RR}|meta|rot4`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `${JR}|meta|rot4`,
            x: 1,
            y: 0,
            z: 0
          }, {
            block: `${GR}|meta|rot4`,
            x: 1,
            y: 1,
            z: 0
          }]
        }
      }
    }

    function VR(RR) {
      const JR = `Small ${RR} Pod`;
      return {
        [JR]: {
          positions: [{
            block: JR,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_Small ${RR} Pod Mid`,
            x: 0,
            y: 1,
            z: 0
          }, {
            block: `_Small ${RR} Pod Top`,
            x: 0,
            y: 2,
            z: 0
          }]
        }
      }
    }
    for (const wR in ZR) {
      for (const RR of ZR[wR].positions)
        if (RR.id = tR.l[RR.block].id, wR === RR.block && (0 !== RR.x || 0 !== RR.y || 0 !== RR.z)) throw new Error(`Multiblock "${wR}" has main block "${RR.block}" at non-origin position (${RR.x}, ${RR.y}, ${RR.z}) - if you need to do something like this, you'll need to rethink your approach: Banners are a good template to follow.`);
      ZR[tR.l[wR].id] = ZR[wR]
    }
    const KR = {};
    for (const wR in ZR)
      for (const {
          block: RR,
          x: JR,
          y: GR,
          z: yR
        }
        of ZR[wR].positions) {
        const uR = {
          mainMultiblock: wR,
          compX: JR,
          compY: GR,
          compZ: yR
        };
        KR[RR] = uR, KR[tR.l[RR].id] = uR
      }
  },
  39380: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => iR,
      e: () => qR
    });
    var yR = GR(5844),
      tR = GR(5907),
      uR = GR(5912);
    const ZR = tR.s.map((RR => {
      let {
        dx: JR,
        dz: GR
      } = RR;
      return [JR, 0, GR]
    }));

    function qR(RR) {
      const JR = yR.l[RR];
      return !!JR && RR !== yR.d && !JR.model && !JR.Nr && !1 !== JR.solid && !JR.AL
    }
    class iR {
      constructor(RR) {
        this.model = RR, this.reshapeOffsets = [...ZR, [0, -1, 0]]
      }
      handles(RR) {
        const JR = yR.l[RR];
        return (null === JR || void 0 === JR ? void 0 : JR.model) === this.model && void 0 !== JR.attachedTop
      }
      affects(RR) {
        return this.handles(RR) || qR(RR) || (0, uR.v)(yR.l[RR])
      }
      shape(RR, JR, GR, ZR, iR) {
        let fR = this.handles(RR(JR, GR + 1, ZR)) ? tR.h : 0;
        return tR.s.forEach(((iR, VR) => {
          let {
            dx: KR,
            dz: wR
          } = iR;
          const rR = RR(JR + KR, GR, ZR + wR);
          (this.handles(rR) || qR(rR) || function(RR, JR) {
            const GR = yR.l[RR];
            return (0, uR.v)(GR) && (0, uR.r)(GR.meta.rot) === (0 !== tR.s[JR].dx)
          }(rR, VR)) && (fR |= 1 << VR)
        })), (0, yR.n)((0, tR.j)(yR.l[iR].meta.rootName, fR))
      }
    }
  },
  39158: (RR, JR, GR) => {
    function yR(RR, JR) {
      var GR;
      JR || (JR = {});
      const yR = null !== (GR = JR.customAttributes) && void 0 !== GR ? GR : {};
      var tR, uR, ZR;
      "Gun" === (null === RR || void 0 === RR ? void 0 : RR.type) && (yR.shotsLeft = null !== (tR = null !== (uR = yR.shotsLeft) && void 0 !== uR ? uR : null === (ZR = yR.gunStats) || void 0 === ZR ? void 0 : ZR.clipSize) && void 0 !== tR ? tR : RR.clipSize);
      if (yR.enchantmentTier && (yR.enchantmentTier = yR.enchantmentTier.toString()), yR.enchantments)
        for (const KR in yR.enchantments) {
          const RR = yR.enchantments[KR];
          if ("number" !== typeof RR) {
            const JR = parseInt(RR);
            isNaN(JR) || JR < 0 ? yR.enchantments[KR] = void 0 : yR.enchantments[KR] = JR > 1e9 ? 1e9 : JR
          }
        }
      if (yR.enchantmentData)
        for (const KR in yR.enchantmentData) {
          const RR = yR.enchantmentData[KR];
          if (!RR) continue;
          if ("object" !== typeof RR) {
            yR.enchantmentData[KR] = void 0;
            continue
          }
          const JR = RR.icon,
            GR = RR.description;
          var qR, iR, fR, VR;
          if ("string" !== typeof JR) yR.enchantmentData[KR].icon = null !== (qR = null === JR || void 0 === JR || null === (iR = JR.toString) || void 0 === iR ? void 0 : iR.call(JR)) && void 0 !== qR ? qR : void 0;
          if ("string" !== typeof GR) yR.enchantmentData[KR].description = null !== (fR = null === GR || void 0 === GR || null === (VR = GR.toString) || void 0 === VR ? void 0 : VR.call(GR)) && void 0 !== fR ? fR : void 0
        }
      return JR.customAttributes = yR, JR
    }
    GR.d(JR, {
      b: () => yR
    })
  },
  39375: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => MR,
      h: () => nR,
      j: () => iR,
      k: () => KR,
      l: () => BR
    });
    var yR = GR(5844),
      tR = GR(5886),
      uR = GR(39380);
    const ZR = (0, yR.n)("Noticeboard"),
      qR = (0, yR.n)("Standing Noticeboard|meta|rot4|lrud");

    function iR(RR) {
      return ZR <= RR && RR <= qR
    }
    const fR = new Uint8Array(qR - ZR + 1);
    for (let lR = ZR; lR <= qR; lR++) fR[lR - ZR] = (0, tR.r)(yR.l[lR].meta.metaStr);
    const VR = 64,
      KR = VR * VR,
      [wR, rR, eR, aR] = [0, 1, 2, 3];

    function LR(RR) {
      var JR, GR;
      return "string" === typeof(null === RR || void 0 === RR || null === (JR = RR.persisted) || void 0 === JR || null === (GR = JR.shared) || void 0 === GR ? void 0 : GR.text)
    }

    function nR(RR) {
      return LR(RR) && "" !== RR.persisted.shared.text.trim()
    }

    function UR(RR, JR) {
      let [GR, , yR] = JR;
      const [uR, , ZR] = tR.t[RR][rR];
      return GR * uR + yR * ZR
    }

    function WR(RR, JR, GR) {
      return GR[1] - JR[1] || UR(RR, JR) - UR(RR, GR)
    }

    function AR(RR, JR, GR, uR, qR) {
      var iR;
      let VR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : RR(JR[0], JR[1], JR[2]);
      if (!(fR[VR - ZR] & 1 << GR)) return null;
      const [KR, wR, rR] = tR.t[qR][GR], eR = [JR[0] + KR, JR[1] + wR, JR[2] + rR], aR = RR(eR[0], eR[1], eR[2]), LR = null === (iR = yR.l[aR]) || void 0 === iR ? void 0 : iR.meta;
      return (null === LR || void 0 === LR ? void 0 : LR.rootId) === uR && LR.rot === qR && fR[aR - ZR] & 1 << (1 ^ GR) ? eR : null
    }

    function CR(RR, JR, GR, uR) {
      const ZR = RR(JR, GR, uR);
      if (!iR(ZR)) return null;
      const {
        rootId: qR,
        rot: fR
      } = yR.l[ZR].meta, KR = (JR, GR) => {
        let yR = JR,
          tR = 1;
        for (let uR = AR(RR, yR, GR, qR, fR); uR && tR < VR; uR = AR(RR, yR, GR, qR, fR)) yR = uR, tR++;
        return {
          end: yR,
          cells: tR
        }
      }, LR = KR(KR([JR, GR, uR], wR).end, eR).end, nR = KR(LR, rR).cells, [UR, , WR] = tR.t[fR][rR];
      let CR = 1;
      RR: for (; CR < VR; CR++)
        for (let JR = 0; JR < nR; JR++)
          if (!AR(RR, [LR[0] + UR * JR, LR[1] - CR + 1, LR[2] + WR * JR], aR, qR, fR)) break RR;
      return {
        anchor: LR,
        rootId: qR,
        rot: fR,
        width: nR,
        height: CR
      }
    }

    function XR(RR, JR) {
      for (const GR of function(RR) {
          let {
            anchor: JR,
            rot: GR,
            width: yR,
            height: uR
          } = RR;
          const [ZR, , qR] = tR.t[GR][rR], iR = [];
          for (let tR = 0; tR < uR; tR++)
            for (let RR = 0; RR < yR; RR++) iR.push([JR[0] + ZR * RR, JR[1] - tR, JR[2] + qR * RR]);
          return iR
        }(RR))
        if (LR(JR(GR[0], GR[1], GR[2]))) return GR;
      return null
    }

    function MR(RR, JR, GR, tR, uR) {
      const ZR = RR(GR, tR, uR);
      if (!iR(ZR)) return null;
      const {
        rootId: qR,
        rot: fR
      } = yR.l[ZR].meta, VR = [
        [GR, tR, uR]
      ], wR = new Set([VR[0].join()]);
      let rR = VR[0],
        eR = null;
      for (let yR = 0; yR < VR.length; yR++) {
        const GR = VR[yR];
        if (WR(fR, GR, rR) < 0 && (rR = GR), LR(JR(GR[0], GR[1], GR[2]))) {
          const JR = CR(RR, GR[0], GR[1], GR[2]);
          (!eR || WR(fR, JR.anchor, eR.anchor) < 0) && (eR = JR)
        }
        for (let JR = 0; JR < 4 && VR.length < KR; JR++) {
          const yR = AR(RR, GR, JR, qR, fR);
          yR && !wR.has(yR.join()) && (wR.add(yR.join()), VR.push(yR))
        }
      }
      return eR ??= CR(RR, rR[0], rR[1], rR[2]), {
        cells: VR,
        topLeft: rR,
        rect: eR,
        textCell: XR(eR, JR)
      }
    }

    function BR(RR, JR, GR, ZR, qR) {
      if (null !== GR && iR(GR)) {
        const {
          rootName: RR,
          rot: JR
        } = yR.l[GR].meta;
        if (tR.t[JR].some((RR => {
            let [JR, GR, yR] = RR;
            return JR === ZR[0] && GR === ZR[1] && yR === ZR[2]
          }))) return {
          root: RR,
          rot: JR
        }
      }
      const [fR, VR] = tR.l[qR], KR = RR(JR[0] - fR, JR[1], JR[2] - VR);
      return {
        root: (0, uR.e)(KR) ? tR.A : tR.w,
        rot: qR
      }
    }
  },
  39368: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => nR,
      f: () => AR,
      h: () => MR,
      j: () => BR,
      m: () => eR,
      q: () => KR,
      r: () => rR,
      s: () => lR,
      v: () => pR,
      y: () => wR
    });
    var yR = GR(7588),
      tR = GR(38166),
      uR = GR(5844);
    const ZR = (0, uR.n)("Water"),
      qR = (0, uR.n)("Lava"),
      iR = (0, uR.n)("Air"),
      fR = {
        physicsState: {
          type: yR.k.CAR,
          tier: yR.d.KART
        },
        validBlockIds: "solidBlocks",
        meshSize: 4,
        placeSound: null
      },
      VR = {
        validBlockIds: "solidBlocks",
        meshSize: 4,
        placeSound: null,
        seats: [{
          role: "driver",
          localOffset: [0, .75, -.35]
        }]
      },
      KR = {
        Boat: {
          meshItemName: "INTERNAL_MESH_Boat",
          physicsState: {
            type: yR.k.BOAT,
            tier: yR.c.WOOD
          },
          validBlockIds: [ZR, qR],
          meshSize: 1.2,
          placeSound: "splash1"
        },
        "Obsidian Boat": {
          meshItemName: "INTERNAL_MESH_Obsidian Boat",
          physicsState: {
            type: yR.k.BOAT,
            tier: yR.c.OBSIDIAN
          },
          validBlockIds: [ZR, qR],
          meshSize: 1.2,
          placeSound: "splash1"
        },
        Speedboat: {
          meshItemName: "INTERNAL_MESH_Speedboat",
          physicsState: {
            type: yR.k.BOAT,
            tier: yR.c.SPEED
          },
          validBlockIds: [ZR],
          meshSize: 1.2,
          placeSound: "splash1"
        },
        Hovercraft: {
          meshItemName: "INTERNAL_MESH_Hovercraft",
          physicsState: {
            type: yR.k.HOVERCRAFT,
            tier: null
          },
          validBlockIds: "solidBlocksOrFluid",
          meshSize: 4,
          placeSound: null
        },
        "Yellow Kart": {
          ...fR,
          meshItemName: "INTERNAL_MESH_Yellow Kart"
        },
        "White Kart": {
          ...fR,
          meshItemName: "INTERNAL_MESH_White Kart"
        },
        "Red Kart": {
          ...fR,
          meshItemName: "INTERNAL_MESH_Red Kart"
        },
        "Purple Kart": {
          ...fR,
          meshItemName: "INTERNAL_MESH_Purple Kart"
        },
        "Pink Kart": {
          ...fR,
          meshItemName: "INTERNAL_MESH_Pink Kart"
        },
        "Orange Kart": {
          ...fR,
          meshItemName: "INTERNAL_MESH_Orange Kart"
        },
        "Magenta Kart": {
          ...fR,
          meshItemName: "INTERNAL_MESH_Magenta Kart"
        },
        "Lime Kart": {
          ...fR,
          meshItemName: "INTERNAL_MESH_Lime Kart"
        },
        "Light Gray Kart": {
          ...fR,
          meshItemName: "INTERNAL_MESH_Light Gray Kart"
        },
        "Light Blue Kart": {
          ...fR,
          meshItemName: "INTERNAL_MESH_Light Blue Kart"
        },
        "Green Kart": {
          ...fR,
          meshItemName: "INTERNAL_MESH_Green Kart"
        },
        "Gray Kart": {
          ...fR,
          meshItemName: "INTERNAL_MESH_Gray Kart"
        },
        "Cyan Kart": {
          ...fR,
          meshItemName: "INTERNAL_MESH_Cyan Kart"
        },
        "Brown Kart": {
          ...fR,
          meshItemName: "INTERNAL_MESH_Brown Kart"
        },
        "Blue Kart": {
          ...fR,
          meshItemName: "INTERNAL_MESH_Blue Kart"
        },
        "Black Kart": {
          ...fR,
          meshItemName: "INTERNAL_MESH_Black Kart"
        },
        "Off Roader": {
          meshItemName: "INTERNAL_MESH_Off Roader",
          physicsState: {
            type: yR.k.CAR,
            tier: yR.d.OFF_ROADER
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
          ...VR,
          meshItemName: "INTERNAL_MESH_Gold Mining Drill",
          physicsState: {
            type: yR.k.CAR,
            tier: yR.d.GOLD_MINING_DRILL
          }
        },
        "Iron Mining Drill": {
          ...VR,
          meshItemName: "INTERNAL_MESH_Iron Mining Drill",
          physicsState: {
            type: yR.k.CAR,
            tier: yR.d.IRON_MINING_DRILL
          }
        },
        "Diamond Mining Drill": {
          ...VR,
          meshItemName: "INTERNAL_MESH_Diamond Mining Drill",
          physicsState: {
            type: yR.k.CAR,
            tier: yR.d.DIAMOND_MINING_DRILL
          }
        },
        "Moonstone Mining Drill": {
          ...VR,
          meshItemName: "INTERNAL_MESH_Moonstone Mining Drill",
          physicsState: {
            type: yR.k.CAR,
            tier: yR.d.MOONSTONE_MINING_DRILL
          }
        },
        "Armored Car": {
          meshItemName: "INTERNAL_MESH_Armored Car",
          physicsState: {
            type: yR.k.CAR,
            tier: yR.d.ARMORED_CAR
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
            type: yR.k.CAR,
            tier: yR.d.CAR
          },
          validBlockIds: "solidBlocks",
          meshSize: 4,
          placeSound: null
        }
      },
      wR = Object.values(KR).map((RR => RR.meshItemName));

    function rR(RR) {
      for (const JR of tR.b)
        if (KR[JR].meshItemName === RR) return JR;
      return null
    }

    function eR(RR, JR) {
      const GR = RR.validBlockIds;
      if (Array.isArray(GR)) return GR.includes(JR);
      if (JR === iR) return !1;
      if ("solidBlocks" === GR) return !0 !== uR.l[JR].Nr;
      if ("solidBlocksOrFluid" === GR) return !0;
      throw new Error(`Unsupported validBlockIds for ${JR}: ${JSON.stringify(GR)}`)
    }
    const aR = {
        meshAttachment: {
          size: .12,
          offset: [0, 1.8, -.24],
          rotation: [0, 0, 0]
        }
      },
      LR = {
        "Yellow Balloon": {
          ...aR,
          physicsState: {
            type: yR.k.BALLOON,
            tier: yR.b.YELLOW
          }
        },
        "White Balloon": {
          ...aR,
          physicsState: {
            type: yR.k.BALLOON,
            tier: yR.b.WHITE
          }
        },
        "Red Balloon": {
          ...aR,
          physicsState: {
            type: yR.k.BALLOON,
            tier: yR.b.RED
          }
        },
        "Purple Balloon": {
          ...aR,
          physicsState: {
            type: yR.k.BALLOON,
            tier: yR.b.PURPLE
          }
        },
        "Pink Balloon": {
          ...aR,
          physicsState: {
            type: yR.k.BALLOON,
            tier: yR.b.PINK
          }
        },
        "Orange Balloon": {
          ...aR,
          physicsState: {
            type: yR.k.BALLOON,
            tier: yR.b.ORANGE
          }
        },
        "Magenta Balloon": {
          ...aR,
          physicsState: {
            type: yR.k.BALLOON,
            tier: yR.b.MAGENTA
          }
        },
        "Lime Balloon": {
          ...aR,
          physicsState: {
            type: yR.k.BALLOON,
            tier: yR.b.LIME
          }
        },
        "Light Gray Balloon": {
          ...aR,
          physicsState: {
            type: yR.k.BALLOON,
            tier: yR.b.LIGHT_GRAY
          }
        },
        "Light Blue Balloon": {
          ...aR,
          physicsState: {
            type: yR.k.BALLOON,
            tier: yR.b.LIGHT_BLUE
          }
        },
        "Green Balloon": {
          ...aR,
          physicsState: {
            type: yR.k.BALLOON,
            tier: yR.b.GREEN
          }
        },
        "Gray Balloon": {
          ...aR,
          physicsState: {
            type: yR.k.BALLOON,
            tier: yR.b.GRAY
          }
        },
        "Cyan Balloon": {
          ...aR,
          physicsState: {
            type: yR.k.BALLOON,
            tier: yR.b.CYAN
          }
        },
        "Brown Balloon": {
          ...aR,
          physicsState: {
            type: yR.k.BALLOON,
            tier: yR.b.BROWN
          }
        },
        "Blue Balloon": {
          ...aR,
          physicsState: {
            type: yR.k.BALLOON,
            tier: yR.b.BLUE
          }
        },
        "Black Balloon": {
          ...aR,
          physicsState: {
            type: yR.k.BALLOON,
            tier: yR.b.BLACK
          }
        }
      };

    function nR(RR) {
      var JR;
      return null === RR || void 0 === RR ? null : null !== (JR = LR[RR]) && void 0 !== JR ? JR : null
    }
    const UR = {
        meshAttachment: {
          size: 3,
          offset: [0, .72, .3],
          rotation: [-Math.PI / 2, Math.PI, Math.PI]
        }
      },
      WR = {
        "Wood Hang Glider": {
          ...UR,
          physicsState: {
            type: yR.k.GLIDER,
            tier: yR.g.WOOD
          }
        },
        "Iron Hang Glider": {
          ...UR,
          physicsState: {
            type: yR.k.GLIDER,
            tier: yR.g.IRON
          }
        },
        "Gold Hang Glider": {
          ...UR,
          physicsState: {
            type: yR.k.GLIDER,
            tier: yR.g.GOLD
          }
        },
        "Diamond Hang Glider": {
          ...UR,
          physicsState: {
            type: yR.k.GLIDER,
            tier: yR.g.DIAMOND
          }
        }
      };

    function AR(RR) {
      var JR;
      return null === RR || void 0 === RR ? null : null !== (JR = WR[RR]) && void 0 !== JR ? JR : null
    }
    const CR = new Set(Object.values(LR).map((RR => RR.physicsState.type))),
      XR = new Set(Object.values(WR).map((RR => RR.physicsState.type)));

    function MR(RR) {
      return CR.has(RR)
    }

    function BR(RR) {
      return XR.has(RR)
    }

    function lR(RR) {
      return RR === yR.k.DEFAULT || function(RR) {
        return CR.has(RR) || XR.has(RR)
      }(RR)
    }

    function pR(RR) {
      return !lR(RR) && RR !== yR.k.SLEEPING
    }
  },
  7588: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => ZR,
      c: () => tR,
      d: () => iR,
      g: () => uR,
      j: () => fR,
      k: () => yR,
      n: () => qR
    });
    let yR = function(RR) {
        return RR[RR.DEFAULT = 0] = "DEFAULT", RR[RR.BOAT = 1] = "BOAT", RR[RR.GLIDER = 2] = "GLIDER", RR[RR.BALLOON = 3] = "BALLOON", RR[RR.SLEEPING = 4] = "SLEEPING", RR[RR.RIDING_MOB = 5] = "RIDING_MOB", RR[RR.CAR = 6] = "CAR", RR[RR.HOVERCRAFT = 7] = "HOVERCRAFT", RR
      }({}),
      tR = function(RR) {
        return RR[RR.WOOD = 0] = "WOOD", RR[RR.OBSIDIAN = 1] = "OBSIDIAN", RR[RR.SPEED = 2] = "SPEED", RR
      }({}),
      uR = function(RR) {
        return RR[RR.WOOD = 0] = "WOOD", RR[RR.IRON = 1] = "IRON", RR[RR.GOLD = 2] = "GOLD", RR[RR.DIAMOND = 3] = "DIAMOND", RR
      }({}),
      ZR = function(RR) {
        return RR[RR.YELLOW = 0] = "YELLOW", RR[RR.WHITE = 1] = "WHITE", RR[RR.RED = 2] = "RED", RR[RR.PURPLE = 3] = "PURPLE", RR[RR.PINK = 4] = "PINK", RR[RR.ORANGE = 5] = "ORANGE", RR[RR.MAGENTA = 6] = "MAGENTA", RR[RR.LIME = 7] = "LIME", RR[RR.LIGHT_GRAY = 8] = "LIGHT_GRAY", RR[RR.LIGHT_BLUE = 9] = "LIGHT_BLUE", RR[RR.GREEN = 10] = "GREEN", RR[RR.GRAY = 11] = "GRAY", RR[RR.CYAN = 12] = "CYAN", RR[RR.BROWN = 13] = "BROWN", RR[RR.BLUE = 14] = "BLUE", RR[RR.BLACK = 15] = "BLACK", RR
      }({}),
      qR = function(RR) {
        return RR[RR.ROTATION_1 = 0] = "ROTATION_1", RR[RR.ROTATION_2 = 1] = "ROTATION_2", RR[RR.ROTATION_3 = 2] = "ROTATION_3", RR[RR.ROTATION_4 = 3] = "ROTATION_4", RR
      }({}),
      iR = function(RR) {
        return RR[RR.KART = 0] = "KART", RR[RR.OFF_ROADER = 1] = "OFF_ROADER", RR[RR.CAR = 2] = "CAR", RR[RR.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", RR[RR.ARMORED_CAR = 4] = "ARMORED_CAR", RR[RR.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", RR[RR.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", RR[RR.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", RR
      }({});
    yR.DEFAULT, yR.BOAT, tR.SPEED, yR.GLIDER, uR.DIAMOND, yR.BALLOON, ZR.BLACK, yR.SLEEPING, qR.ROTATION_4, yR.RIDING_MOB, yR.CAR, iR.MOONSTONE_MINING_DRILL, yR.HOVERCRAFT;
    let fR = function(RR) {
      return RR[RR.NORMAL = 0] = "NORMAL", RR[RR.GLIDING = 1] = "GLIDING", RR[RR.FLOATING = 2] = "FLOATING", RR
    }({})
  },
  39383: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => uR,
      e: () => ZR,
      g: () => tR,
      k: () => qR
    });
    var yR = GR(382);
    const tR = ["Snowball", "Snowball Launcher", "Pebble", "Reinforced Pebble", "Ball", "Reinforced Ball", "Mango", "Moonstone Orb", ...GR(671).v.map((RR => `${RR} Spawn Orb`)), "Fireball", "RPG", "Obby RPG", "Super RPG", "Grenade Launcher", "Iceball", "Bouncy Bomb", "Coconut", "Splash Speed Potion", "Splash Speed Potion II", "Splash Defense Potion", "Splash Defense Potion II", "Splash Strength Potion", "Splash Strength Potion II", "Splash Invisibility Potion", "Splash Jump Potion", "Splash Jump Potion II", "Splash Knockback Potion", "Splash Knockback Potion II", "Splash Poison Potion", "Splash Poison Potion II", "Splash Slowness Potion", "Splash Slowness Potion II", "Splash Weakness Potion", "Splash Weakness Potion II", "Splash Milk Potion", "Splash Instant Damage Potion", "Splash Instant Damage Potion II", "Splash Regeneration Potion", "Splash Regeneration Potion II", "Splash Instant Healing Potion", "Splash Instant Healing Potion II", "Splash Haste Potion", "Splash Haste Potion II", "Splash Shield Potion", "Splash Shield Potion II", "Splash Double Jump Potion", "Splash Heat Resistance Potion", "Splash X-Ray Vision Potion", "Splash Mining Yield Potion", "Splash Mining Yield Potion II", "Splash Brain Rot Potion", "Yellow Paintball Gun", "White Paintball Gun", "Red Paintball Gun", "Purple Paintball Gun", "Pink Paintball Gun", "Orange Paintball Gun", "Magenta Paintball Gun", "Lime Paintball Gun", "Light Gray Paintball Gun", "Light Blue Paintball Gun", "Green Paintball Gun", "Gray Paintball Gun", "Cyan Paintball Gun", "Brown Paintball Gun", "Blue Paintball Gun", "Black Paintball Gun", "Yellow Heavy Paintball Gun", "White Heavy Paintball Gun", "Red Heavy Paintball Gun", "Purple Heavy Paintball Gun", "Pink Heavy Paintball Gun", "Orange Heavy Paintball Gun", "Magenta Heavy Paintball Gun", "Lime Heavy Paintball Gun", "Light Gray Heavy Paintball Gun", "Light Blue Heavy Paintball Gun", "Green Heavy Paintball Gun", "Gray Heavy Paintball Gun", "Cyan Heavy Paintball Gun", "Brown Heavy Paintball Gun", "Blue Heavy Paintball Gun", "Black Heavy Paintball Gun", "Toxin Ball", "Splash Aura XP Potion", "Splash Aura XP Potion II", "Firecracker", "Rainbow Firecracker", "White Firecracker", "Orange Firecracker", "Magenta Firecracker", "Light Blue Firecracker", "Yellow Firecracker", "Lime Firecracker", "Pink Firecracker", "Gray Firecracker", "Light Gray Firecracker", "Cyan Firecracker", "Purple Firecracker", "Blue Firecracker", "Brown Firecracker", "Green Firecracker", "Red Firecracker", "Black Firecracker", "Firecracker Pebble", "Rainbow Firecracker Pebble", "White Firecracker Pebble", "Orange Firecracker Pebble", "Magenta Firecracker Pebble", "Light Blue Firecracker Pebble", "Yellow Firecracker Pebble", "Lime Firecracker Pebble", "Pink Firecracker Pebble", "Gray Firecracker Pebble", "Light Gray Firecracker Pebble", "Cyan Firecracker Pebble", "Purple Firecracker Pebble", "Blue Firecracker Pebble", "Brown Firecracker Pebble", "Green Firecracker Pebble", "Red Firecracker Pebble", "Black Firecracker Pebble", "Blinding Pebble", "Poop", "Wood Boomerang", "Stone Boomerang", "Iron Boomerang", "Gold Boomerang", "Diamond Boomerang", "Moonstone Boomerang", ...yR.g, "67 Base Projectile", "67 Boosted Projectile", "Capitano Grenade", "Scatter Pellet", "Lucky Bomb", "Unlucky Bomb", "Swap Orb"],
      uR = ["Obby RPG"];

    function ZR(RR) {
      const JR = RR.indexOf("|");
      return -1 === JR ? {
        item: RR,
        clientPredictedThrower: null
      } : {
        item: RR.slice(0, JR),
        clientPredictedThrower: RR.slice(JR + 1)
      }
    }
    const qR = [...tR, "Arrow", "Arrow of Speed", "Arrow of Slowness", "Arrow of Poison", "Arrow of Weakness", "Arrow of Knockback", "Arrow of Strength", "Arrow of Defense", "Arrow of Invisibility", "Arrow of Jumping", "Arrow of Milk", "Arrow of Instant Damage", "Arrow of Regeneration", "Arrow of Instant Healing", "Arrow of Haste", "Arrow of Shield", "Arrow of Double Jump", "Arrow of Heat Resistance", "Arrow of X-Ray Vision", "Arrow of Mining Yield", "Arrow of Brain Rot", "Arrow of Aura XP", "Bullet"]
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);