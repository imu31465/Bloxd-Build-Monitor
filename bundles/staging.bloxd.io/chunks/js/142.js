export const id = 142;
export const ids = [142];
export const modules = {
  38191: (rr, Sr, Qr) => {
    function Zr(rr, Sr, Qr, Zr) {
      return !(Qr && !rr.aimable) && (!Sr || rr.gun && "head" !== Zr)
    }

    function Wr(rr) {
      return Math.max(.1 * rr, 1)
    }

    function ar(rr, Sr) {
      return !rr && Sr
    }
    Qr.d(Sr, {
      c: () => ar,
      d: () => Wr,
      g: () => Zr
    })
  },
  38193: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Ir,
      e: () => jr
    });
    let Zr = null;
    const Wr = {
        crosshairAccuracy: [],
        turnDamageIndicators: [],
        turnSoundCues: []
      },
      ar = {
        crosshairAccuracy: rr => {
          const Sr = Wr.crosshairAccuracy.at(-1);
          Sr ? Sr.hook(rr) : Zr = rr
        },
        turnDamageIndicators: rr => {
          var Sr;
          null === (Sr = Wr.turnDamageIndicators.at(-1)) || void 0 === Sr || Sr.hook(rr)
        },
        turnSoundCues: rr => {
          var Sr;
          null === (Sr = Wr.turnSoundCues.at(-1)) || void 0 === Sr || Sr.hook(rr)
        }
      };

    function jr(rr, Sr) {
      const Qr = {
          hook: Sr
        },
        jr = Wr[rr];
      if (jr.push(Qr), "crosshairAccuracy" === rr && null !== Zr) {
        const rr = Zr;
        Zr = null, ar.crosshairAccuracy(rr)
      }
      return () => {
        const rr = jr.indexOf(Qr); - 1 !== rr && jr.splice(rr, 1)
      }
    }

    function Ir() {
      return ar
    }
  },
  35416: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => ar,
      d: () => Wr
    });
    var Zr = Qr(26);

    function Wr(rr, Sr) {
      return rr && !Sr
    }

    function ar() {
      return Wr(Zr.c.get("isTouchScreen"), Zr.c.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  39311: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => xr,
      g: () => jr
    });
    var Zr = Qr(5806),
      Wr = Qr(5779),
      ar = Qr(379);
    const jr = {
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
      ...Ir("White"),
      ...Ir("Orange"),
      ...Ir("Magenta"),
      ...Ir("Light Blue"),
      ...Ir("Yellow"),
      ...Ir("Lime"),
      ...Ir("Pink"),
      ...Ir("Gray"),
      ...Ir("Light Gray"),
      ...Ir("Cyan"),
      ...Ir("Purple"),
      ...Ir("Blue"),
      ...Ir("Brown"),
      ...Ir("Green"),
      ...Ir("Red"),
      ...Ir("Black"),
      ...Ir("Draugr"),
      ...Ir("Skull"),
      ...Ir("Rainbow"),
      ...fr("Sheep"),
      ...fr("Cow"),
      ...fr("Pig"),
      ...fr("Horse"),
      ...fr("Camel"),
      ...fr("Wolf"),
      ...fr("Deer"),
      ...fr("Wildcat"),
      ...Er("Radar"),
      ...Er("Inactive Radar"),
      ...Er("Active Radar"),
      ...pr("Magenta"),
      ...pr("Light Gray"),
      ...pr("Red"),
      ...pr("White"),
      ...pr("Orange"),
      ...pr("Light Blue"),
      ...pr("Yellow"),
      ...pr("Lime"),
      ...pr("Pink"),
      ...pr("Gray"),
      ...pr("Cyan"),
      ...pr("Purple"),
      ...pr("Blue"),
      ...pr("Brown"),
      ...pr("Green"),
      ...pr("Black"),
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
        const rr = "Lunite Auto Miner";
        return {
          [rr]: {
            positions: [{
              block: rr,
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
          [`${rr}|meta|rot2`]: {
            positions: [{
              block: `${rr}|meta|rot2`,
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
          [`${rr}|meta|rot3`]: {
            positions: [{
              block: `${rr}|meta|rot3`,
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
          [`${rr}|meta|rot4`]: {
            positions: [{
              block: `${rr}|meta|rot4`,
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
        const rr = {
            1: rr => ({
              x: 0,
              z: rr
            }),
            2: rr => ({
              x: rr,
              z: 0
            }),
            3: rr => ({
              x: 0,
              z: -rr
            }),
            4: rr => ({
              x: -rr,
              z: 0
            })
          },
          Sr = {};
        for (let Qr = 1; Qr <= 4; Qr++) {
          const Wr = 1 === Qr ? "" : `|meta|rot${Qr}`;
          Sr[`${Zr.c[0].block}${Wr}`] = {
            positions: Zr.c.map((Sr => {
              let {
                block: Zr,
                y: ar,
                z: jr
              } = Sr;
              return {
                block: `${Zr}${Wr}`,
                y: ar,
                ...rr[Qr](jr)
              }
            }))
          }
        }
        return Sr
      }(),
      ... function() {
        const rr = {};
        for (let Sr = 1; Sr <= Zr.l; Sr++) {
          const Qr = (0, Zr.dc)(Sr),
            Wr = Zr.o[Sr - 1],
            ar = [{
              block: Qr,
              x: 0,
              y: 0,
              z: 0
            }];
          for (const rr of Zr.i)
            for (let Sr = 1; Sr <= Wr; Sr++) {
              if ("southwest" === rr && 1 === Sr) continue;
              const {
                x: Qr,
                z: Wr
              } = Zr.k[rr];
              ar.push({
                block: (0, Zr.$b)(rr, Sr),
                x: Qr,
                y: Sr - 1,
                z: Wr
              })
            }
          rr[Qr] = {
            positions: ar
          }
        }
        return rr
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

    function Ir(rr) {
      return {
        [`${rr} Banner`]: {
          positions: [{
            block: `${rr} Banner`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${rr} Banner Flag|meta|rot1|bot`,
            x: 0,
            y: 1,
            z: 0
          }]
        },
        [`${rr} Banner|meta|rot2|bot`]: {
          positions: [{
            block: `${rr} Banner|meta|rot2|bot`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${rr} Banner Flag|meta|rot2|bot`,
            x: 0,
            y: 1,
            z: 0
          }]
        },
        [`${rr} Banner|meta|rot3|bot`]: {
          positions: [{
            block: `${rr} Banner|meta|rot3|bot`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${rr} Banner Flag|meta|rot3|bot`,
            x: 0,
            y: 1,
            z: 0
          }]
        },
        [`${rr} Banner|meta|rot4|bot`]: {
          positions: [{
            block: `${rr} Banner|meta|rot4|bot`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${rr} Banner Flag|meta|rot4|bot`,
            x: 0,
            y: 1,
            z: 0
          }]
        },
        [`${rr} Banner|meta|rot1|side`]: {
          positions: [{
            block: `${rr} Banner|meta|rot1|side`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${rr} Banner Flag|meta|rot1|side`,
            x: 0,
            y: -1,
            z: 0
          }]
        },
        [`${rr} Banner|meta|rot2|side`]: {
          positions: [{
            block: `${rr} Banner|meta|rot2|side`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${rr} Banner Flag|meta|rot2|side`,
            x: 0,
            y: -1,
            z: 0
          }]
        },
        [`${rr} Banner|meta|rot3|side`]: {
          positions: [{
            block: `${rr} Banner|meta|rot3|side`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${rr} Banner Flag|meta|rot3|side`,
            x: 0,
            y: -1,
            z: 0
          }]
        },
        [`${rr} Banner|meta|rot4|side`]: {
          positions: [{
            block: `${rr} Banner|meta|rot4|side`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${rr} Banner Flag|meta|rot4|side`,
            x: 0,
            y: -1,
            z: 0
          }]
        },
        [`${rr} Banner|meta|rot1|top`]: {
          positions: [{
            block: `${rr} Banner|meta|rot1|top`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${rr} Banner Flag`,
            x: 0,
            y: -1,
            z: 0
          }]
        },
        [`${rr} Banner|meta|rot2|top`]: {
          positions: [{
            block: `${rr} Banner|meta|rot2|top`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${rr} Banner Flag|meta|rot2|top`,
            x: 0,
            y: -1,
            z: 0
          }]
        },
        [`${rr} Banner|meta|rot3|top`]: {
          positions: [{
            block: `${rr} Banner|meta|rot3|top`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${rr} Banner Flag|meta|rot3|top`,
            x: 0,
            y: -1,
            z: 0
          }]
        },
        [`${rr} Banner|meta|rot4|top`]: {
          positions: [{
            block: `${rr} Banner|meta|rot4|top`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${rr} Banner Flag|meta|rot4|top`,
            x: 0,
            y: -1,
            z: 0
          }]
        }
      }
    }

    function fr(rr) {
      const Sr = (0, ar.Qb)(rr);
      return {
        [Sr]: {
          positions: [{
            block: Sr,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${Sr} Top Left`,
            x: 0,
            y: 1,
            z: 0
          }, {
            block: `_${Sr} Top Right`,
            x: -1,
            y: 1,
            z: 0
          }, {
            block: `_${Sr} Bottom Right`,
            x: -1,
            y: 0,
            z: 0
          }]
        },
        [`${Sr}|meta|rot2`]: {
          positions: [{
            block: `${Sr}|meta|rot2`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${Sr} Top Left|meta|rot2`,
            x: 0,
            y: 1,
            z: 0
          }, {
            block: `_${Sr} Top Right|meta|rot2`,
            x: 0,
            y: 1,
            z: 1
          }, {
            block: `_${Sr} Bottom Right|meta|rot2`,
            x: 0,
            y: 0,
            z: 1
          }]
        },
        [`${Sr}|meta|rot3`]: {
          positions: [{
            block: `${Sr}|meta|rot3`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${Sr} Top Left|meta|rot3`,
            x: 0,
            y: 1,
            z: 0
          }, {
            block: `_${Sr} Top Right|meta|rot3`,
            x: 1,
            y: 1,
            z: 0
          }, {
            block: `_${Sr} Bottom Right|meta|rot3`,
            x: 1,
            y: 0,
            z: 0
          }]
        },
        [`${Sr}|meta|rot4`]: {
          positions: [{
            block: `${Sr}|meta|rot4`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${Sr} Top Left|meta|rot4`,
            x: 0,
            y: 1,
            z: 0
          }, {
            block: `_${Sr} Top Right|meta|rot4`,
            x: 0,
            y: 1,
            z: -1
          }, {
            block: `_${Sr} Bottom Right|meta|rot4`,
            x: 0,
            y: 0,
            z: -1
          }]
        }
      }
    }

    function Er(rr) {
      const Sr = `_${rr} Back`,
        Qr = `_${rr} Dish`;
      return {
        [rr]: {
          positions: [{
            block: rr,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: Sr,
            x: 0,
            y: 0,
            z: -1
          }, {
            block: Qr,
            x: 0,
            y: 1,
            z: -1
          }]
        },
        [`${rr}|meta|rot2`]: {
          positions: [{
            block: `${rr}|meta|rot2`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `${Sr}|meta|rot2`,
            x: -1,
            y: 0,
            z: 0
          }, {
            block: `${Qr}|meta|rot2`,
            x: -1,
            y: 1,
            z: 0
          }]
        },
        [`${rr}|meta|rot3`]: {
          positions: [{
            block: `${rr}|meta|rot3`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `${Sr}|meta|rot3`,
            x: 0,
            y: 0,
            z: 1
          }, {
            block: `${Qr}|meta|rot3`,
            x: 0,
            y: 1,
            z: 1
          }]
        },
        [`${rr}|meta|rot4`]: {
          positions: [{
            block: `${rr}|meta|rot4`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `${Sr}|meta|rot4`,
            x: 1,
            y: 0,
            z: 0
          }, {
            block: `${Qr}|meta|rot4`,
            x: 1,
            y: 1,
            z: 0
          }]
        }
      }
    }

    function pr(rr) {
      const Sr = `Small ${rr} Pod`;
      return {
        [Sr]: {
          positions: [{
            block: Sr,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_Small ${rr} Pod Mid`,
            x: 0,
            y: 1,
            z: 0
          }, {
            block: `_Small ${rr} Pod Top`,
            x: 0,
            y: 2,
            z: 0
          }]
        }
      }
    }
    for (const mr in jr) {
      for (const rr of jr[mr].positions)
        if (rr.id = Wr.j[rr.block].id, mr === rr.block && (0 !== rr.x || 0 !== rr.y || 0 !== rr.z)) throw new Error(`Multiblock "${mr}" has main block "${rr.block}" at non-origin position (${rr.x}, ${rr.y}, ${rr.z}) - if you need to do something like this, you'll need to rethink your approach: Banners are a good template to follow.`);
      jr[Wr.j[mr].id] = jr[mr]
    }
    const xr = {};
    for (const mr in jr)
      for (const {
          block: rr,
          x: Sr,
          y: Qr,
          z: Zr
        }
        of jr[mr].positions) {
        const ar = {
          mainMultiblock: mr,
          compX: Sr,
          compY: Qr,
          compZ: Zr
        };
        xr[rr] = ar, xr[Wr.j[rr].id] = ar
      }
  },
  39717: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => fr,
      e: () => Ir
    });
    var Zr = Qr(5779),
      Wr = Qr(5833),
      ar = Qr(5838);
    const jr = Wr.r.map((rr => {
      let {
        dx: Sr,
        dz: Qr
      } = rr;
      return [Sr, 0, Qr]
    }));

    function Ir(rr) {
      const Sr = Zr.j[rr];
      return !!Sr && rr !== Zr.d && !Sr.model && !Sr.HN && !1 !== Sr.solid && !Sr.Bh
    }
    class fr {
      constructor(rr) {
        this.model = rr, this.reshapeOffsets = [...jr, [0, -1, 0]]
      }
      handles(rr) {
        const Sr = Zr.j[rr];
        return (null === Sr || void 0 === Sr ? void 0 : Sr.model) === this.model && void 0 !== Sr.attachedTop
      }
      affects(rr) {
        return this.handles(rr) || Ir(rr) || (0, ar.y)(Zr.j[rr])
      }
      shape(rr, Sr, Qr, jr, fr) {
        let Er = this.handles(rr(Sr, Qr + 1, jr)) ? Wr.i : 0;
        return Wr.r.forEach(((fr, pr) => {
          let {
            dx: xr,
            dz: mr
          } = fr;
          const Nr = rr(Sr + xr, Qr, jr + mr);
          (this.handles(Nr) || Ir(Nr) || function(rr, Sr) {
            const Qr = Zr.j[rr];
            return (0, ar.y)(Qr) && (0, ar.r)(Qr.meta.rot) === (0 !== Wr.r[Sr].dx)
          }(Nr, pr)) && (Er |= 1 << pr)
        })), (0, Zr.k)((0, Wr.j)(Zr.j[fr].meta.rootName, Er))
      }
    }
  },
  39496: (rr, Sr, Qr) => {
    function Zr(rr, Sr) {
      var Qr;
      Sr || (Sr = {});
      const Zr = null !== (Qr = Sr.customAttributes) && void 0 !== Qr ? Qr : {};
      var Wr, ar, jr;
      "Gun" === (null === rr || void 0 === rr ? void 0 : rr.type) && (Zr.shotsLeft = null !== (Wr = null !== (ar = Zr.shotsLeft) && void 0 !== ar ? ar : null === (jr = Zr.gunStats) || void 0 === jr ? void 0 : jr.clipSize) && void 0 !== Wr ? Wr : rr.clipSize);
      if (Zr.enchantmentTier && (Zr.enchantmentTier = Zr.enchantmentTier.toString()), Zr.enchantments)
        for (const xr in Zr.enchantments) {
          const rr = Zr.enchantments[xr];
          if ("number" !== typeof rr) {
            const Sr = parseInt(rr);
            isNaN(Sr) || Sr < 0 ? Zr.enchantments[xr] = void 0 : Zr.enchantments[xr] = Sr > 1e9 ? 1e9 : Sr
          }
        }
      if (Zr.enchantmentData)
        for (const xr in Zr.enchantmentData) {
          const rr = Zr.enchantmentData[xr];
          if (!rr) continue;
          if ("object" !== typeof rr) {
            Zr.enchantmentData[xr] = void 0;
            continue
          }
          const Sr = rr.icon,
            Qr = rr.description;
          var Ir, fr, Er, pr;
          if ("string" !== typeof Sr) Zr.enchantmentData[xr].icon = null !== (Ir = null === Sr || void 0 === Sr || null === (fr = Sr.toString) || void 0 === fr ? void 0 : fr.call(Sr)) && void 0 !== Ir ? Ir : void 0;
          if ("string" !== typeof Qr) Zr.enchantmentData[xr].description = null !== (Er = null === Qr || void 0 === Qr || null === (pr = Qr.toString) || void 0 === pr ? void 0 : pr.call(Qr)) && void 0 !== Er ? Er : void 0
        }
      return Sr.customAttributes = Zr, Sr
    }
    Qr.d(Sr, {
      d: () => Zr
    })
  },
  39715: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Br,
      f: () => zr,
      g: () => fr,
      h: () => xr,
      j: () => Tr
    });
    var Zr = Qr(5779),
      Wr = Qr(5817),
      ar = Qr(39717);
    const jr = (0, Zr.k)("Noticeboard"),
      Ir = (0, Zr.k)("Standing Noticeboard|meta|rot4|lrud");

    function fr(rr) {
      return jr <= rr && rr <= Ir
    }
    const Er = new Uint8Array(Ir - jr + 1);
    for (let vr = jr; vr <= Ir; vr++) Er[vr - jr] = (0, Wr.w)(Zr.j[vr].meta.metaStr);
    const pr = 64,
      xr = pr * pr,
      [mr, Nr, Ur, tr] = [0, 1, 2, 3];

    function hr(rr) {
      var Sr, Qr;
      return "string" === typeof(null === rr || void 0 === rr || null === (Sr = rr.persisted) || void 0 === Sr || null === (Qr = Sr.shared) || void 0 === Qr ? void 0 : Qr.text)
    }

    function zr(rr) {
      return hr(rr) && "" !== rr.persisted.shared.text.trim()
    }

    function Yr(rr, Sr) {
      let [Qr, , Zr] = Sr;
      const [ar, , jr] = Wr.A[rr][Nr];
      return Qr * ar + Zr * jr
    }

    function nr(rr, Sr, Qr) {
      return Qr[1] - Sr[1] || Yr(rr, Sr) - Yr(rr, Qr)
    }

    function er(rr, Sr, Qr, ar, Ir) {
      var fr;
      let pr = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : rr(Sr[0], Sr[1], Sr[2]);
      if (!(Er[pr - jr] & 1 << Qr)) return null;
      const [xr, mr, Nr] = Wr.A[Ir][Qr], Ur = [Sr[0] + xr, Sr[1] + mr, Sr[2] + Nr], tr = rr(Ur[0], Ur[1], Ur[2]), hr = null === (fr = Zr.j[tr]) || void 0 === fr ? void 0 : fr.meta;
      return (null === hr || void 0 === hr ? void 0 : hr.rootId) === ar && hr.rot === Ir && Er[tr - jr] & 1 << (1 ^ Qr) ? Ur : null
    }

    function Kr(rr, Sr, Qr, ar) {
      const jr = rr(Sr, Qr, ar);
      if (!fr(jr)) return null;
      const {
        rootId: Ir,
        rot: Er
      } = Zr.j[jr].meta, xr = (Sr, Qr) => {
        let Zr = Sr,
          Wr = 1;
        for (let ar = er(rr, Zr, Qr, Ir, Er); ar && Wr < pr; ar = er(rr, Zr, Qr, Ir, Er)) Zr = ar, Wr++;
        return {
          end: Zr,
          cells: Wr
        }
      }, hr = xr(xr([Sr, Qr, ar], mr).end, Ur).end, zr = xr(hr, Nr).cells, [Yr, , nr] = Wr.A[Er][Nr];
      let Kr = 1;
      rr: for (; Kr < pr; Kr++)
        for (let Sr = 0; Sr < zr; Sr++)
          if (!er(rr, [hr[0] + Yr * Sr, hr[1] - Kr + 1, hr[2] + nr * Sr], tr, Ir, Er)) break rr;
      return {
        anchor: hr,
        rootId: Ir,
        rot: Er,
        width: zr,
        height: Kr
      }
    }

    function yr(rr, Sr) {
      for (const Qr of function(rr) {
          let {
            anchor: Sr,
            rot: Qr,
            width: Zr,
            height: ar
          } = rr;
          const [jr, , Ir] = Wr.A[Qr][Nr], fr = [];
          for (let Wr = 0; Wr < ar; Wr++)
            for (let rr = 0; rr < Zr; rr++) fr.push([Sr[0] + jr * rr, Sr[1] - Wr, Sr[2] + Ir * rr]);
          return fr
        }(rr))
        if (hr(Sr(Qr[0], Qr[1], Qr[2]))) return Qr;
      return null
    }

    function Br(rr, Sr, Qr, Wr, ar) {
      const jr = rr(Qr, Wr, ar);
      if (!fr(jr)) return null;
      const {
        rootId: Ir,
        rot: Er
      } = Zr.j[jr].meta, pr = [
        [Qr, Wr, ar]
      ], mr = new Set([pr[0].join()]);
      let Nr = pr[0],
        Ur = null;
      for (let Zr = 0; Zr < pr.length; Zr++) {
        const Qr = pr[Zr];
        if (nr(Er, Qr, Nr) < 0 && (Nr = Qr), hr(Sr(Qr[0], Qr[1], Qr[2]))) {
          const Sr = Kr(rr, Qr[0], Qr[1], Qr[2]);
          (!Ur || nr(Er, Sr.anchor, Ur.anchor) < 0) && (Ur = Sr)
        }
        for (let Sr = 0; Sr < 4 && pr.length < xr; Sr++) {
          const Zr = er(rr, Qr, Sr, Ir, Er);
          Zr && !mr.has(Zr.join()) && (mr.add(Zr.join()), pr.push(Zr))
        }
      }
      return Ur ??= Kr(rr, Nr[0], Nr[1], Nr[2]), {
        cells: pr,
        topLeft: Nr,
        rect: Ur,
        textCell: yr(Ur, Sr)
      }
    }

    function Tr(rr, Sr, Qr, jr, Ir) {
      if (null !== Qr && fr(Qr)) {
        const {
          rootName: rr,
          rot: Sr
        } = Zr.j[Qr].meta;
        if (Wr.A[Sr].some((rr => {
            let [Sr, Qr, Zr] = rr;
            return Sr === jr[0] && Qr === jr[1] && Zr === jr[2]
          }))) return {
          root: rr,
          rot: Sr
        }
      }
      const [Er, pr] = Wr.r[Ir], xr = rr(Sr[0] - Er, Sr[1], Sr[2] - pr);
      return {
        root: (0, ar.e)(xr) ? Wr.G : Wr.D,
        rot: Ir
      }
    }
  },
  39711: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      D: () => mr,
      b: () => zr,
      f: () => er,
      h: () => Br,
      k: () => Tr,
      o: () => Ur,
      r: () => xr,
      u: () => Nr,
      w: () => vr,
      z: () => Or
    });
    var Zr = Qr(7424),
      Wr = Qr(38528),
      ar = Qr(5779);
    const jr = (0, ar.k)("Water"),
      Ir = (0, ar.k)("Lava"),
      fr = (0, ar.k)("Air"),
      Er = {
        physicsState: {
          type: Zr.n.CAR,
          tier: Zr.f.KART
        },
        validBlockIds: "solidBlocks",
        meshSize: 4,
        placeSound: null
      },
      pr = {
        validBlockIds: "solidBlocks",
        meshSize: 4,
        placeSound: null,
        seats: [{
          role: "driver",
          localOffset: [0, .75, -.35]
        }]
      },
      xr = {
        Boat: {
          meshItemName: "INTERNAL_MESH_Boat",
          physicsState: {
            type: Zr.n.BOAT,
            tier: Zr.e.WOOD
          },
          validBlockIds: [jr, Ir],
          meshSize: 1.2,
          placeSound: "splash1"
        },
        "Obsidian Boat": {
          meshItemName: "INTERNAL_MESH_Obsidian Boat",
          physicsState: {
            type: Zr.n.BOAT,
            tier: Zr.e.OBSIDIAN
          },
          validBlockIds: [jr, Ir],
          meshSize: 1.2,
          placeSound: "splash1"
        },
        Speedboat: {
          meshItemName: "INTERNAL_MESH_Speedboat",
          physicsState: {
            type: Zr.n.BOAT,
            tier: Zr.e.SPEED
          },
          validBlockIds: [jr],
          meshSize: 1.2,
          placeSound: "splash1"
        },
        Hovercraft: {
          meshItemName: "INTERNAL_MESH_Hovercraft",
          physicsState: {
            type: Zr.n.HOVERCRAFT,
            tier: null
          },
          validBlockIds: "solidBlocksOrFluid",
          meshSize: 4,
          placeSound: null
        },
        "Yellow Kart": {
          ...Er,
          meshItemName: "INTERNAL_MESH_Yellow Kart"
        },
        "White Kart": {
          ...Er,
          meshItemName: "INTERNAL_MESH_White Kart"
        },
        "Red Kart": {
          ...Er,
          meshItemName: "INTERNAL_MESH_Red Kart"
        },
        "Purple Kart": {
          ...Er,
          meshItemName: "INTERNAL_MESH_Purple Kart"
        },
        "Pink Kart": {
          ...Er,
          meshItemName: "INTERNAL_MESH_Pink Kart"
        },
        "Orange Kart": {
          ...Er,
          meshItemName: "INTERNAL_MESH_Orange Kart"
        },
        "Magenta Kart": {
          ...Er,
          meshItemName: "INTERNAL_MESH_Magenta Kart"
        },
        "Lime Kart": {
          ...Er,
          meshItemName: "INTERNAL_MESH_Lime Kart"
        },
        "Light Gray Kart": {
          ...Er,
          meshItemName: "INTERNAL_MESH_Light Gray Kart"
        },
        "Light Blue Kart": {
          ...Er,
          meshItemName: "INTERNAL_MESH_Light Blue Kart"
        },
        "Green Kart": {
          ...Er,
          meshItemName: "INTERNAL_MESH_Green Kart"
        },
        "Gray Kart": {
          ...Er,
          meshItemName: "INTERNAL_MESH_Gray Kart"
        },
        "Cyan Kart": {
          ...Er,
          meshItemName: "INTERNAL_MESH_Cyan Kart"
        },
        "Brown Kart": {
          ...Er,
          meshItemName: "INTERNAL_MESH_Brown Kart"
        },
        "Blue Kart": {
          ...Er,
          meshItemName: "INTERNAL_MESH_Blue Kart"
        },
        "Black Kart": {
          ...Er,
          meshItemName: "INTERNAL_MESH_Black Kart"
        },
        "Off Roader": {
          meshItemName: "INTERNAL_MESH_Off Roader",
          physicsState: {
            type: Zr.n.CAR,
            tier: Zr.f.OFF_ROADER
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
          ...pr,
          meshItemName: "INTERNAL_MESH_Gold Mining Drill",
          physicsState: {
            type: Zr.n.CAR,
            tier: Zr.f.GOLD_MINING_DRILL
          }
        },
        "Iron Mining Drill": {
          ...pr,
          meshItemName: "INTERNAL_MESH_Iron Mining Drill",
          physicsState: {
            type: Zr.n.CAR,
            tier: Zr.f.IRON_MINING_DRILL
          }
        },
        "Diamond Mining Drill": {
          ...pr,
          meshItemName: "INTERNAL_MESH_Diamond Mining Drill",
          physicsState: {
            type: Zr.n.CAR,
            tier: Zr.f.DIAMOND_MINING_DRILL
          }
        },
        "Moonstone Mining Drill": {
          ...pr,
          meshItemName: "INTERNAL_MESH_Moonstone Mining Drill",
          physicsState: {
            type: Zr.n.CAR,
            tier: Zr.f.MOONSTONE_MINING_DRILL
          }
        },
        "Armored Car": {
          meshItemName: "INTERNAL_MESH_Armored Car",
          physicsState: {
            type: Zr.n.CAR,
            tier: Zr.f.ARMORED_CAR
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
            type: Zr.n.CAR,
            tier: Zr.f.CAR
          },
          validBlockIds: "solidBlocks",
          meshSize: 4,
          placeSound: null
        }
      },
      mr = Object.values(xr).map((rr => rr.meshItemName));

    function Nr(rr) {
      for (const Sr of Wr.e)
        if (xr[Sr].meshItemName === rr) return Sr;
      return null
    }

    function Ur(rr, Sr) {
      const Qr = rr.validBlockIds;
      if (Array.isArray(Qr)) return Qr.includes(Sr);
      if (Sr === fr) return !1;
      if ("solidBlocks" === Qr) return !0 !== ar.j[Sr].HN;
      if ("solidBlocksOrFluid" === Qr) return !0;
      throw new Error(`Unsupported validBlockIds for ${Sr}: ${JSON.stringify(Qr)}`)
    }
    const tr = {
        meshAttachment: {
          size: .12,
          offset: [0, 1.8, -.24],
          rotation: [0, 0, 0]
        }
      },
      hr = {
        "Yellow Balloon": {
          ...tr,
          physicsState: {
            type: Zr.n.BALLOON,
            tier: Zr.c.YELLOW
          }
        },
        "White Balloon": {
          ...tr,
          physicsState: {
            type: Zr.n.BALLOON,
            tier: Zr.c.WHITE
          }
        },
        "Red Balloon": {
          ...tr,
          physicsState: {
            type: Zr.n.BALLOON,
            tier: Zr.c.RED
          }
        },
        "Purple Balloon": {
          ...tr,
          physicsState: {
            type: Zr.n.BALLOON,
            tier: Zr.c.PURPLE
          }
        },
        "Pink Balloon": {
          ...tr,
          physicsState: {
            type: Zr.n.BALLOON,
            tier: Zr.c.PINK
          }
        },
        "Orange Balloon": {
          ...tr,
          physicsState: {
            type: Zr.n.BALLOON,
            tier: Zr.c.ORANGE
          }
        },
        "Magenta Balloon": {
          ...tr,
          physicsState: {
            type: Zr.n.BALLOON,
            tier: Zr.c.MAGENTA
          }
        },
        "Lime Balloon": {
          ...tr,
          physicsState: {
            type: Zr.n.BALLOON,
            tier: Zr.c.LIME
          }
        },
        "Light Gray Balloon": {
          ...tr,
          physicsState: {
            type: Zr.n.BALLOON,
            tier: Zr.c.LIGHT_GRAY
          }
        },
        "Light Blue Balloon": {
          ...tr,
          physicsState: {
            type: Zr.n.BALLOON,
            tier: Zr.c.LIGHT_BLUE
          }
        },
        "Green Balloon": {
          ...tr,
          physicsState: {
            type: Zr.n.BALLOON,
            tier: Zr.c.GREEN
          }
        },
        "Gray Balloon": {
          ...tr,
          physicsState: {
            type: Zr.n.BALLOON,
            tier: Zr.c.GRAY
          }
        },
        "Cyan Balloon": {
          ...tr,
          physicsState: {
            type: Zr.n.BALLOON,
            tier: Zr.c.CYAN
          }
        },
        "Brown Balloon": {
          ...tr,
          physicsState: {
            type: Zr.n.BALLOON,
            tier: Zr.c.BROWN
          }
        },
        "Blue Balloon": {
          ...tr,
          physicsState: {
            type: Zr.n.BALLOON,
            tier: Zr.c.BLUE
          }
        },
        "Black Balloon": {
          ...tr,
          physicsState: {
            type: Zr.n.BALLOON,
            tier: Zr.c.BLACK
          }
        }
      };

    function zr(rr) {
      var Sr;
      return null === rr || void 0 === rr ? null : null !== (Sr = hr[rr]) && void 0 !== Sr ? Sr : null
    }
    const Yr = {
        meshAttachment: {
          size: 3,
          offset: [0, .72, .3],
          rotation: [-Math.PI / 2, Math.PI, Math.PI]
        }
      },
      nr = {
        "Wood Hang Glider": {
          ...Yr,
          physicsState: {
            type: Zr.n.GLIDER,
            tier: Zr.j.WOOD
          }
        },
        "Iron Hang Glider": {
          ...Yr,
          physicsState: {
            type: Zr.n.GLIDER,
            tier: Zr.j.IRON
          }
        },
        "Gold Hang Glider": {
          ...Yr,
          physicsState: {
            type: Zr.n.GLIDER,
            tier: Zr.j.GOLD
          }
        },
        "Diamond Hang Glider": {
          ...Yr,
          physicsState: {
            type: Zr.n.GLIDER,
            tier: Zr.j.DIAMOND
          }
        }
      };

    function er(rr) {
      var Sr;
      return null === rr || void 0 === rr ? null : null !== (Sr = nr[rr]) && void 0 !== Sr ? Sr : null
    }
    const Kr = new Set(Object.values(hr).map((rr => rr.physicsState.type))),
      yr = new Set(Object.values(nr).map((rr => rr.physicsState.type)));

    function Br(rr) {
      return Kr.has(rr)
    }

    function Tr(rr) {
      return yr.has(rr)
    }

    function vr(rr) {
      return rr === Zr.n.DEFAULT || function(rr) {
        return Kr.has(rr) || yr.has(rr)
      }(rr)
    }

    function Or(rr) {
      return !vr(rr) && rr !== Zr.n.SLEEPING
    }
  },
  7424: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => jr,
      e: () => Wr,
      f: () => fr,
      j: () => ar,
      k: () => Er,
      n: () => Zr,
      p: () => Ir
    });
    let Zr = function(rr) {
        return rr[rr.DEFAULT = 0] = "DEFAULT", rr[rr.BOAT = 1] = "BOAT", rr[rr.GLIDER = 2] = "GLIDER", rr[rr.BALLOON = 3] = "BALLOON", rr[rr.SLEEPING = 4] = "SLEEPING", rr[rr.RIDING_MOB = 5] = "RIDING_MOB", rr[rr.CAR = 6] = "CAR", rr[rr.HOVERCRAFT = 7] = "HOVERCRAFT", rr
      }({}),
      Wr = function(rr) {
        return rr[rr.WOOD = 0] = "WOOD", rr[rr.OBSIDIAN = 1] = "OBSIDIAN", rr[rr.SPEED = 2] = "SPEED", rr
      }({}),
      ar = function(rr) {
        return rr[rr.WOOD = 0] = "WOOD", rr[rr.IRON = 1] = "IRON", rr[rr.GOLD = 2] = "GOLD", rr[rr.DIAMOND = 3] = "DIAMOND", rr
      }({}),
      jr = function(rr) {
        return rr[rr.YELLOW = 0] = "YELLOW", rr[rr.WHITE = 1] = "WHITE", rr[rr.RED = 2] = "RED", rr[rr.PURPLE = 3] = "PURPLE", rr[rr.PINK = 4] = "PINK", rr[rr.ORANGE = 5] = "ORANGE", rr[rr.MAGENTA = 6] = "MAGENTA", rr[rr.LIME = 7] = "LIME", rr[rr.LIGHT_GRAY = 8] = "LIGHT_GRAY", rr[rr.LIGHT_BLUE = 9] = "LIGHT_BLUE", rr[rr.GREEN = 10] = "GREEN", rr[rr.GRAY = 11] = "GRAY", rr[rr.CYAN = 12] = "CYAN", rr[rr.BROWN = 13] = "BROWN", rr[rr.BLUE = 14] = "BLUE", rr[rr.BLACK = 15] = "BLACK", rr
      }({}),
      Ir = function(rr) {
        return rr[rr.ROTATION_1 = 0] = "ROTATION_1", rr[rr.ROTATION_2 = 1] = "ROTATION_2", rr[rr.ROTATION_3 = 2] = "ROTATION_3", rr[rr.ROTATION_4 = 3] = "ROTATION_4", rr
      }({}),
      fr = function(rr) {
        return rr[rr.KART = 0] = "KART", rr[rr.OFF_ROADER = 1] = "OFF_ROADER", rr[rr.CAR = 2] = "CAR", rr[rr.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", rr[rr.ARMORED_CAR = 4] = "ARMORED_CAR", rr[rr.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", rr[rr.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", rr[rr.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", rr
      }({});
    Zr.DEFAULT, Zr.BOAT, Wr.SPEED, Zr.GLIDER, ar.DIAMOND, Zr.BALLOON, jr.BLACK, Zr.SLEEPING, Ir.ROTATION_4, Zr.RIDING_MOB, Zr.CAR, fr.MOONSTONE_MINING_DRILL, Zr.HOVERCRAFT;
    let Er = function(rr) {
      return rr[rr.NORMAL = 0] = "NORMAL", rr[rr.GLIDING = 1] = "GLIDING", rr[rr.FLOATING = 2] = "FLOATING", rr
    }({})
  },
  39720: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => ar,
      h: () => jr,
      k: () => Wr,
      o: () => Ir
    });
    var Zr = Qr(381);
    const Wr = ["Snowball", "Snowball Launcher", "Pebble", "Reinforced Pebble", "Ball", "Reinforced Ball", "Mango", "Moonstone Orb", ...Qr(683).t.map((rr => `${rr} Spawn Orb`)), "Fireball", "RPG", "Obby RPG", "Super RPG", "Grenade Launcher", "Iceball", "Bouncy Bomb", "Coconut", "Splash Speed Potion", "Splash Speed Potion II", "Splash Defense Potion", "Splash Defense Potion II", "Splash Strength Potion", "Splash Strength Potion II", "Splash Invisibility Potion", "Splash Jump Potion", "Splash Jump Potion II", "Splash Knockback Potion", "Splash Knockback Potion II", "Splash Poison Potion", "Splash Poison Potion II", "Splash Slowness Potion", "Splash Slowness Potion II", "Splash Weakness Potion", "Splash Weakness Potion II", "Splash Milk Potion", "Splash Instant Damage Potion", "Splash Instant Damage Potion II", "Splash Regeneration Potion", "Splash Regeneration Potion II", "Splash Instant Healing Potion", "Splash Instant Healing Potion II", "Splash Haste Potion", "Splash Haste Potion II", "Splash Shield Potion", "Splash Shield Potion II", "Splash Double Jump Potion", "Splash Heat Resistance Potion", "Splash X-Ray Vision Potion", "Splash Mining Yield Potion", "Splash Mining Yield Potion II", "Splash Brain Rot Potion", "Yellow Paintball Gun", "White Paintball Gun", "Red Paintball Gun", "Purple Paintball Gun", "Pink Paintball Gun", "Orange Paintball Gun", "Magenta Paintball Gun", "Lime Paintball Gun", "Light Gray Paintball Gun", "Light Blue Paintball Gun", "Green Paintball Gun", "Gray Paintball Gun", "Cyan Paintball Gun", "Brown Paintball Gun", "Blue Paintball Gun", "Black Paintball Gun", "Yellow Heavy Paintball Gun", "White Heavy Paintball Gun", "Red Heavy Paintball Gun", "Purple Heavy Paintball Gun", "Pink Heavy Paintball Gun", "Orange Heavy Paintball Gun", "Magenta Heavy Paintball Gun", "Lime Heavy Paintball Gun", "Light Gray Heavy Paintball Gun", "Light Blue Heavy Paintball Gun", "Green Heavy Paintball Gun", "Gray Heavy Paintball Gun", "Cyan Heavy Paintball Gun", "Brown Heavy Paintball Gun", "Blue Heavy Paintball Gun", "Black Heavy Paintball Gun", "Toxin Ball", "Splash Aura XP Potion", "Splash Aura XP Potion II", "Firecracker", "Rainbow Firecracker", "White Firecracker", "Orange Firecracker", "Magenta Firecracker", "Light Blue Firecracker", "Yellow Firecracker", "Lime Firecracker", "Pink Firecracker", "Gray Firecracker", "Light Gray Firecracker", "Cyan Firecracker", "Purple Firecracker", "Blue Firecracker", "Brown Firecracker", "Green Firecracker", "Red Firecracker", "Black Firecracker", "Firecracker Pebble", "Rainbow Firecracker Pebble", "White Firecracker Pebble", "Orange Firecracker Pebble", "Magenta Firecracker Pebble", "Light Blue Firecracker Pebble", "Yellow Firecracker Pebble", "Lime Firecracker Pebble", "Pink Firecracker Pebble", "Gray Firecracker Pebble", "Light Gray Firecracker Pebble", "Cyan Firecracker Pebble", "Purple Firecracker Pebble", "Blue Firecracker Pebble", "Brown Firecracker Pebble", "Green Firecracker Pebble", "Red Firecracker Pebble", "Black Firecracker Pebble", "Blinding Pebble", "Poop", "Wood Boomerang", "Stone Boomerang", "Iron Boomerang", "Gold Boomerang", "Diamond Boomerang", "Moonstone Boomerang", ...Zr.g, "67 Base Projectile", "67 Boosted Projectile", "Capitano Grenade", "Scatter Pellet", "Lucky Bomb", "Unlucky Bomb", "Swap Orb"],
      ar = ["Obby RPG"];

    function jr(rr) {
      const Sr = rr.indexOf("|");
      return -1 === Sr ? {
        item: rr,
        clientPredictedThrower: null
      } : {
        item: rr.slice(0, Sr),
        clientPredictedThrower: rr.slice(Sr + 1)
      }
    }
    const Ir = [...Wr, "Arrow", "Arrow of Speed", "Arrow of Slowness", "Arrow of Poison", "Arrow of Weakness", "Arrow of Knockback", "Arrow of Strength", "Arrow of Defense", "Arrow of Invisibility", "Arrow of Jumping", "Arrow of Milk", "Arrow of Instant Damage", "Arrow of Regeneration", "Arrow of Instant Healing", "Arrow of Haste", "Arrow of Shield", "Arrow of Double Jump", "Arrow of Heat Resistance", "Arrow of X-Ray Vision", "Arrow of Mining Yield", "Arrow of Brain Rot", "Arrow of Aura XP", "Bullet"]
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);