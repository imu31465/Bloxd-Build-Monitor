export const id = 142;
export const ids = [142];
export const modules = {
  37933: (bb, wb, Mb) => {
    function eb(bb, wb, Mb, eb) {
      return !(Mb && !bb.aimable) && (!wb || bb.gun && "head" !== eb)
    }

    function Hb(bb) {
      return Math.max(.1 * bb, 1)
    }

    function pb(bb, wb) {
      return !bb && wb
    }
    Mb.d(wb, {
      b: () => pb,
      f: () => Hb,
      i: () => eb
    })
  },
  37936: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => gb,
      e: () => Vb
    });
    let eb = null;
    const Hb = {
        crosshairAccuracy: [],
        turnDamageIndicators: [],
        turnSoundCues: []
      },
      pb = {
        crosshairAccuracy: bb => {
          const wb = Hb.crosshairAccuracy.at(-1);
          wb ? wb.hook(bb) : eb = bb
        },
        turnDamageIndicators: bb => {
          var wb;
          null === (wb = Hb.turnDamageIndicators.at(-1)) || void 0 === wb || wb.hook(bb)
        },
        turnSoundCues: bb => {
          var wb;
          null === (wb = Hb.turnSoundCues.at(-1)) || void 0 === wb || wb.hook(bb)
        }
      };

    function Vb(bb, wb) {
      const Mb = {
          hook: wb
        },
        Vb = Hb[bb];
      if (Vb.push(Mb), "crosshairAccuracy" === bb && null !== eb) {
        const bb = eb;
        eb = null, pb.crosshairAccuracy(bb)
      }
      return () => {
        const bb = Vb.indexOf(Mb); - 1 !== bb && Vb.splice(bb, 1)
      }
    }

    function gb() {
      return pb
    }
  },
  35289: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => pb,
      i: () => Hb
    });
    var eb = Mb(26);

    function Hb(bb, wb) {
      return bb && !wb
    }

    function pb() {
      return Hb(eb.c.get("isTouchScreen"), eb.c.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  39047: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Ob,
      h: () => Vb
    });
    var eb = Mb(5890),
      Hb = Mb(5868),
      pb = Mb(382);
    const Vb = {
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
      ...gb("White"),
      ...gb("Orange"),
      ...gb("Magenta"),
      ...gb("Light Blue"),
      ...gb("Yellow"),
      ...gb("Lime"),
      ...gb("Pink"),
      ...gb("Gray"),
      ...gb("Light Gray"),
      ...gb("Cyan"),
      ...gb("Purple"),
      ...gb("Blue"),
      ...gb("Brown"),
      ...gb("Green"),
      ...gb("Red"),
      ...gb("Black"),
      ...gb("Draugr"),
      ...gb("Skull"),
      ...gb("Rainbow"),
      ...lb("Sheep"),
      ...lb("Cow"),
      ...lb("Pig"),
      ...lb("Horse"),
      ...lb("Camel"),
      ...lb("Wolf"),
      ...lb("Deer"),
      ...lb("Wildcat"),
      ...Lb("Radar"),
      ...Lb("Inactive Radar"),
      ...Lb("Active Radar"),
      ...Ib("Magenta"),
      ...Ib("Light Gray"),
      ...Ib("Red"),
      ...Ib("White"),
      ...Ib("Orange"),
      ...Ib("Light Blue"),
      ...Ib("Yellow"),
      ...Ib("Lime"),
      ...Ib("Pink"),
      ...Ib("Gray"),
      ...Ib("Cyan"),
      ...Ib("Purple"),
      ...Ib("Blue"),
      ...Ib("Brown"),
      ...Ib("Green"),
      ...Ib("Black"),
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
        const bb = "Lunite Auto Miner";
        return {
          [bb]: {
            positions: [{
              block: bb,
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
          [`${bb}|meta|rot2`]: {
            positions: [{
              block: `${bb}|meta|rot2`,
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
          [`${bb}|meta|rot3`]: {
            positions: [{
              block: `${bb}|meta|rot3`,
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
          [`${bb}|meta|rot4`]: {
            positions: [{
              block: `${bb}|meta|rot4`,
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
        const bb = {
            1: bb => ({
              x: 0,
              z: bb
            }),
            2: bb => ({
              x: bb,
              z: 0
            }),
            3: bb => ({
              x: 0,
              z: -bb
            }),
            4: bb => ({
              x: -bb,
              z: 0
            })
          },
          wb = {};
        for (let Mb = 1; Mb <= 4; Mb++) {
          const Hb = 1 === Mb ? "" : `|meta|rot${Mb}`;
          wb[`${eb.e[0].block}${Hb}`] = {
            positions: eb.e.map((wb => {
              let {
                block: eb,
                y: pb,
                z: Vb
              } = wb;
              return {
                block: `${eb}${Hb}`,
                y: pb,
                ...bb[Mb](Vb)
              }
            }))
          }
        }
        return wb
      }(),
      ... function() {
        const bb = {};
        for (let wb = 1; wb <= eb.n; wb++) {
          const Mb = (0, eb.hc)(wb),
            Hb = eb.o[wb - 1],
            pb = [{
              block: Mb,
              x: 0,
              y: 0,
              z: 0
            }];
          for (const bb of eb.i)
            for (let wb = 1; wb <= Hb; wb++) {
              if ("southwest" === bb && 1 === wb) continue;
              const {
                x: Mb,
                z: Hb
              } = eb.k[bb];
              pb.push({
                block: (0, eb.dc)(bb, wb),
                x: Mb,
                y: wb - 1,
                z: Hb
              })
            }
          bb[Mb] = {
            positions: pb
          }
        }
        return bb
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

    function gb(bb) {
      return {
        [`${bb} Banner`]: {
          positions: [{
            block: `${bb} Banner`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${bb} Banner Flag|meta|rot1|bot`,
            x: 0,
            y: 1,
            z: 0
          }]
        },
        [`${bb} Banner|meta|rot2|bot`]: {
          positions: [{
            block: `${bb} Banner|meta|rot2|bot`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${bb} Banner Flag|meta|rot2|bot`,
            x: 0,
            y: 1,
            z: 0
          }]
        },
        [`${bb} Banner|meta|rot3|bot`]: {
          positions: [{
            block: `${bb} Banner|meta|rot3|bot`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${bb} Banner Flag|meta|rot3|bot`,
            x: 0,
            y: 1,
            z: 0
          }]
        },
        [`${bb} Banner|meta|rot4|bot`]: {
          positions: [{
            block: `${bb} Banner|meta|rot4|bot`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${bb} Banner Flag|meta|rot4|bot`,
            x: 0,
            y: 1,
            z: 0
          }]
        },
        [`${bb} Banner|meta|rot1|side`]: {
          positions: [{
            block: `${bb} Banner|meta|rot1|side`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${bb} Banner Flag|meta|rot1|side`,
            x: 0,
            y: -1,
            z: 0
          }]
        },
        [`${bb} Banner|meta|rot2|side`]: {
          positions: [{
            block: `${bb} Banner|meta|rot2|side`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${bb} Banner Flag|meta|rot2|side`,
            x: 0,
            y: -1,
            z: 0
          }]
        },
        [`${bb} Banner|meta|rot3|side`]: {
          positions: [{
            block: `${bb} Banner|meta|rot3|side`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${bb} Banner Flag|meta|rot3|side`,
            x: 0,
            y: -1,
            z: 0
          }]
        },
        [`${bb} Banner|meta|rot4|side`]: {
          positions: [{
            block: `${bb} Banner|meta|rot4|side`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${bb} Banner Flag|meta|rot4|side`,
            x: 0,
            y: -1,
            z: 0
          }]
        },
        [`${bb} Banner|meta|rot1|top`]: {
          positions: [{
            block: `${bb} Banner|meta|rot1|top`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${bb} Banner Flag`,
            x: 0,
            y: -1,
            z: 0
          }]
        },
        [`${bb} Banner|meta|rot2|top`]: {
          positions: [{
            block: `${bb} Banner|meta|rot2|top`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${bb} Banner Flag|meta|rot2|top`,
            x: 0,
            y: -1,
            z: 0
          }]
        },
        [`${bb} Banner|meta|rot3|top`]: {
          positions: [{
            block: `${bb} Banner|meta|rot3|top`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${bb} Banner Flag|meta|rot3|top`,
            x: 0,
            y: -1,
            z: 0
          }]
        },
        [`${bb} Banner|meta|rot4|top`]: {
          positions: [{
            block: `${bb} Banner|meta|rot4|top`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${bb} Banner Flag|meta|rot4|top`,
            x: 0,
            y: -1,
            z: 0
          }]
        }
      }
    }

    function lb(bb) {
      const wb = (0, pb.$b)(bb);
      return {
        [wb]: {
          positions: [{
            block: wb,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${wb} Top Left`,
            x: 0,
            y: 1,
            z: 0
          }, {
            block: `_${wb} Top Right`,
            x: -1,
            y: 1,
            z: 0
          }, {
            block: `_${wb} Bottom Right`,
            x: -1,
            y: 0,
            z: 0
          }]
        },
        [`${wb}|meta|rot2`]: {
          positions: [{
            block: `${wb}|meta|rot2`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${wb} Top Left|meta|rot2`,
            x: 0,
            y: 1,
            z: 0
          }, {
            block: `_${wb} Top Right|meta|rot2`,
            x: 0,
            y: 1,
            z: 1
          }, {
            block: `_${wb} Bottom Right|meta|rot2`,
            x: 0,
            y: 0,
            z: 1
          }]
        },
        [`${wb}|meta|rot3`]: {
          positions: [{
            block: `${wb}|meta|rot3`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${wb} Top Left|meta|rot3`,
            x: 0,
            y: 1,
            z: 0
          }, {
            block: `_${wb} Top Right|meta|rot3`,
            x: 1,
            y: 1,
            z: 0
          }, {
            block: `_${wb} Bottom Right|meta|rot3`,
            x: 1,
            y: 0,
            z: 0
          }]
        },
        [`${wb}|meta|rot4`]: {
          positions: [{
            block: `${wb}|meta|rot4`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${wb} Top Left|meta|rot4`,
            x: 0,
            y: 1,
            z: 0
          }, {
            block: `_${wb} Top Right|meta|rot4`,
            x: 0,
            y: 1,
            z: -1
          }, {
            block: `_${wb} Bottom Right|meta|rot4`,
            x: 0,
            y: 0,
            z: -1
          }]
        }
      }
    }

    function Lb(bb) {
      const wb = `_${bb} Back`,
        Mb = `_${bb} Dish`;
      return {
        [bb]: {
          positions: [{
            block: bb,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: wb,
            x: 0,
            y: 0,
            z: -1
          }, {
            block: Mb,
            x: 0,
            y: 1,
            z: -1
          }]
        },
        [`${bb}|meta|rot2`]: {
          positions: [{
            block: `${bb}|meta|rot2`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `${wb}|meta|rot2`,
            x: -1,
            y: 0,
            z: 0
          }, {
            block: `${Mb}|meta|rot2`,
            x: -1,
            y: 1,
            z: 0
          }]
        },
        [`${bb}|meta|rot3`]: {
          positions: [{
            block: `${bb}|meta|rot3`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `${wb}|meta|rot3`,
            x: 0,
            y: 0,
            z: 1
          }, {
            block: `${Mb}|meta|rot3`,
            x: 0,
            y: 1,
            z: 1
          }]
        },
        [`${bb}|meta|rot4`]: {
          positions: [{
            block: `${bb}|meta|rot4`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `${wb}|meta|rot4`,
            x: 1,
            y: 0,
            z: 0
          }, {
            block: `${Mb}|meta|rot4`,
            x: 1,
            y: 1,
            z: 0
          }]
        }
      }
    }

    function Ib(bb) {
      const wb = `Small ${bb} Pod`;
      return {
        [wb]: {
          positions: [{
            block: wb,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_Small ${bb} Pod Mid`,
            x: 0,
            y: 1,
            z: 0
          }, {
            block: `_Small ${bb} Pod Top`,
            x: 0,
            y: 2,
            z: 0
          }]
        }
      }
    }
    for (const Ub in Vb) {
      for (const bb of Vb[Ub].positions)
        if (bb.id = Hb.g[bb.block].id, Ub === bb.block && (0 !== bb.x || 0 !== bb.y || 0 !== bb.z)) throw new Error(`Multiblock "${Ub}" has main block "${bb.block}" at non-origin position (${bb.x}, ${bb.y}, ${bb.z}) - if you need to do something like this, you'll need to rethink your approach: Banners are a good template to follow.`);
      Vb[Hb.g[Ub].id] = Vb[Ub]
    }
    const Ob = {};
    for (const Ub in Vb)
      for (const {
          block: bb,
          x: wb,
          y: Mb,
          z: eb
        }
        of Vb[Ub].positions) {
        const pb = {
          mainMultiblock: Ub,
          compX: wb,
          compY: Mb,
          compZ: eb
        };
        Ob[bb] = pb, Ob[Hb.g[bb].id] = pb
      }
  },
  39455: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => lb,
      i: () => gb
    });
    var eb = Mb(5868),
      Hb = Mb(5923),
      pb = Mb(5930);
    const Vb = Hb.p.map((bb => {
      let {
        dx: wb,
        dz: Mb
      } = bb;
      return [wb, 0, Mb]
    }));

    function gb(bb) {
      const wb = eb.g[bb];
      return !!wb && bb !== eb.e && !wb.model && !wb.ht && !1 !== wb.solid && !wb.lF
    }
    class lb {
      constructor(bb) {
        this.model = bb, this.reshapeOffsets = [...Vb, [0, -1, 0]]
      }
      handles(bb) {
        const wb = eb.g[bb];
        return (null === wb || void 0 === wb ? void 0 : wb.model) === this.model && void 0 !== wb.attachedTop
      }
      affects(bb) {
        return this.handles(bb) || gb(bb) || (0, pb.z)(eb.g[bb])
      }
      shape(bb, wb, Mb, Vb, lb) {
        let Lb = this.handles(bb(wb, Mb + 1, Vb)) ? Hb.h : 0;
        return Hb.p.forEach(((lb, Ib) => {
          let {
            dx: Ob,
            dz: Ub
          } = lb;
          const tb = bb(wb + Ob, Mb, Vb + Ub);
          (this.handles(tb) || gb(tb) || function(bb, wb) {
            const Mb = eb.g[bb];
            return (0, pb.z)(Mb) && (0, pb.v)(Mb.meta.rot) === (0 !== Hb.p[wb].dx)
          }(tb, Ib)) && (Lb |= 1 << Ib)
        })), (0, eb.i)((0, Hb.j)(eb.g[lb].meta.rootName, Lb))
      }
    }
  },
  39239: (bb, wb, Mb) => {
    function eb(bb, wb) {
      var Mb;
      wb || (wb = {});
      const eb = null !== (Mb = wb.customAttributes) && void 0 !== Mb ? Mb : {};
      var Hb, pb, Vb;
      "Gun" === (null === bb || void 0 === bb ? void 0 : bb.type) && (eb.shotsLeft = null !== (Hb = null !== (pb = eb.shotsLeft) && void 0 !== pb ? pb : null === (Vb = eb.gunStats) || void 0 === Vb ? void 0 : Vb.clipSize) && void 0 !== Hb ? Hb : bb.clipSize);
      if (eb.enchantmentTier && (eb.enchantmentTier = eb.enchantmentTier.toString()), eb.enchantments)
        for (const Ob in eb.enchantments) {
          const bb = eb.enchantments[Ob];
          if ("number" !== typeof bb) {
            const wb = parseInt(bb);
            isNaN(wb) || wb < 0 ? eb.enchantments[Ob] = void 0 : eb.enchantments[Ob] = wb > 1e9 ? 1e9 : wb
          }
        }
      if (eb.enchantmentData)
        for (const Ob in eb.enchantmentData) {
          const bb = eb.enchantmentData[Ob];
          if (!bb) continue;
          if ("object" !== typeof bb) {
            eb.enchantmentData[Ob] = void 0;
            continue
          }
          const wb = bb.icon,
            Mb = bb.description;
          var gb, lb, Lb, Ib;
          if ("string" !== typeof wb) eb.enchantmentData[Ob].icon = null !== (gb = null === wb || void 0 === wb || null === (lb = wb.toString) || void 0 === lb ? void 0 : lb.call(wb)) && void 0 !== gb ? gb : void 0;
          if ("string" !== typeof Mb) eb.enchantmentData[Ob].description = null !== (Lb = null === Mb || void 0 === Mb || null === (Ib = Mb.toString) || void 0 === Ib ? void 0 : Ib.call(Mb)) && void 0 !== Lb ? Lb : void 0
        }
      return wb.customAttributes = eb, wb
    }
    Mb.d(wb, {
      c: () => eb
    })
  },
  39448: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => xb,
      f: () => Bb,
      j: () => lb,
      n: () => Ob,
      p: () => jb
    });
    var eb = Mb(5868),
      Hb = Mb(5901),
      pb = Mb(39455);
    const Vb = (0, eb.i)("Noticeboard"),
      gb = (0, eb.i)("Standing Noticeboard|meta|rot4|lrud");

    function lb(bb) {
      return Vb <= bb && bb <= gb
    }
    const Lb = new Uint8Array(gb - Vb + 1);
    for (let Kb = Vb; Kb <= gb; Kb++) Lb[Kb - Vb] = (0, Hb.o)(eb.g[Kb].meta.metaStr);
    const Ib = 64,
      Ob = Ib * Ib,
      [Ub, tb, Cb, Eb] = [0, 1, 2, 3];

    function Fb(bb) {
      var wb, Mb;
      return "string" === typeof(null === bb || void 0 === bb || null === (wb = bb.persisted) || void 0 === wb || null === (Mb = wb.shared) || void 0 === Mb ? void 0 : Mb.text)
    }

    function Bb(bb) {
      return Fb(bb) && "" !== bb.persisted.shared.text.trim()
    }

    function sb(bb, wb) {
      let [Mb, , eb] = wb;
      const [pb, , Vb] = Hb.s[bb][tb];
      return Mb * pb + eb * Vb
    }

    function mb(bb, wb, Mb) {
      return Mb[1] - wb[1] || sb(bb, wb) - sb(bb, Mb)
    }

    function hb(bb, wb, Mb, pb, gb) {
      var lb;
      let Ib = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : bb(wb[0], wb[1], wb[2]);
      if (!(Lb[Ib - Vb] & 1 << Mb)) return null;
      const [Ob, Ub, tb] = Hb.s[gb][Mb], Cb = [wb[0] + Ob, wb[1] + Ub, wb[2] + tb], Eb = bb(Cb[0], Cb[1], Cb[2]), Fb = null === (lb = eb.g[Eb]) || void 0 === lb ? void 0 : lb.meta;
      return (null === Fb || void 0 === Fb ? void 0 : Fb.rootId) === pb && Fb.rot === gb && Lb[Eb - Vb] & 1 << (1 ^ Mb) ? Cb : null
    }

    function zb(bb, wb, Mb, pb) {
      const Vb = bb(wb, Mb, pb);
      if (!lb(Vb)) return null;
      const {
        rootId: gb,
        rot: Lb
      } = eb.g[Vb].meta, Ob = (wb, Mb) => {
        let eb = wb,
          Hb = 1;
        for (let pb = hb(bb, eb, Mb, gb, Lb); pb && Hb < Ib; pb = hb(bb, eb, Mb, gb, Lb)) eb = pb, Hb++;
        return {
          end: eb,
          cells: Hb
        }
      }, Fb = Ob(Ob([wb, Mb, pb], Ub).end, Cb).end, Bb = Ob(Fb, tb).cells, [sb, , mb] = Hb.s[Lb][tb];
      let zb = 1;
      bb: for (; zb < Ib; zb++)
        for (let wb = 0; wb < Bb; wb++)
          if (!hb(bb, [Fb[0] + sb * wb, Fb[1] - zb + 1, Fb[2] + mb * wb], Eb, gb, Lb)) break bb;
      return {
        anchor: Fb,
        rootId: gb,
        rot: Lb,
        width: Bb,
        height: zb
      }
    }

    function Xb(bb, wb) {
      for (const Mb of function(bb) {
          let {
            anchor: wb,
            rot: Mb,
            width: eb,
            height: pb
          } = bb;
          const [Vb, , gb] = Hb.s[Mb][tb], lb = [];
          for (let Hb = 0; Hb < pb; Hb++)
            for (let bb = 0; bb < eb; bb++) lb.push([wb[0] + Vb * bb, wb[1] - Hb, wb[2] + gb * bb]);
          return lb
        }(bb))
        if (Fb(wb(Mb[0], Mb[1], Mb[2]))) return Mb;
      return null
    }

    function xb(bb, wb, Mb, Hb, pb) {
      const Vb = bb(Mb, Hb, pb);
      if (!lb(Vb)) return null;
      const {
        rootId: gb,
        rot: Lb
      } = eb.g[Vb].meta, Ib = [
        [Mb, Hb, pb]
      ], Ub = new Set([Ib[0].join()]);
      let tb = Ib[0],
        Cb = null;
      for (let eb = 0; eb < Ib.length; eb++) {
        const Mb = Ib[eb];
        if (mb(Lb, Mb, tb) < 0 && (tb = Mb), Fb(wb(Mb[0], Mb[1], Mb[2]))) {
          const wb = zb(bb, Mb[0], Mb[1], Mb[2]);
          (!Cb || mb(Lb, wb.anchor, Cb.anchor) < 0) && (Cb = wb)
        }
        for (let wb = 0; wb < 4 && Ib.length < Ob; wb++) {
          const eb = hb(bb, Mb, wb, gb, Lb);
          eb && !Ub.has(eb.join()) && (Ub.add(eb.join()), Ib.push(eb))
        }
      }
      return Cb ??= zb(bb, tb[0], tb[1], tb[2]), {
        cells: Ib,
        topLeft: tb,
        rect: Cb,
        textCell: Xb(Cb, wb)
      }
    }

    function jb(bb, wb, Mb, Vb, gb) {
      if (null !== Mb && lb(Mb)) {
        const {
          rootName: bb,
          rot: wb
        } = eb.g[Mb].meta;
        if (Hb.s[wb].some((bb => {
            let [wb, Mb, eb] = bb;
            return wb === Vb[0] && Mb === Vb[1] && eb === Vb[2]
          }))) return {
          root: bb,
          rot: wb
        }
      }
      const [Lb, Ib] = Hb.k[gb], Ob = bb(wb[0] - Lb, wb[1], wb[2] - Ib);
      return {
        root: (0, pb.i)(Ob) ? Hb.x : Hb.v,
        rot: gb
      }
    }
  },
  39443: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Bb,
      e: () => hb,
      h: () => xb,
      k: () => jb,
      o: () => Cb,
      p: () => Ob,
      t: () => tb,
      u: () => Kb,
      v: () => rb,
      x: () => Ub
    });
    var eb = Mb(7634),
      Hb = Mb(38244),
      pb = Mb(5868);
    const Vb = (0, pb.i)("Water"),
      gb = (0, pb.i)("Lava"),
      lb = (0, pb.i)("Air"),
      Lb = {
        physicsState: {
          type: eb.r.CAR,
          tier: eb.j.KART
        },
        validBlockIds: "solidBlocks",
        meshSize: 4,
        placeSound: null
      },
      Ib = {
        validBlockIds: "solidBlocks",
        meshSize: 4,
        placeSound: null,
        seats: [{
          role: "driver",
          localOffset: [0, .75, -.35]
        }]
      },
      Ob = {
        Boat: {
          meshItemName: "INTERNAL_MESH_Boat",
          physicsState: {
            type: eb.r.BOAT,
            tier: eb.h.WOOD
          },
          validBlockIds: [Vb, gb],
          meshSize: 1.2,
          placeSound: "splash1"
        },
        "Obsidian Boat": {
          meshItemName: "INTERNAL_MESH_Obsidian Boat",
          physicsState: {
            type: eb.r.BOAT,
            tier: eb.h.OBSIDIAN
          },
          validBlockIds: [Vb, gb],
          meshSize: 1.2,
          placeSound: "splash1"
        },
        Speedboat: {
          meshItemName: "INTERNAL_MESH_Speedboat",
          physicsState: {
            type: eb.r.BOAT,
            tier: eb.h.SPEED
          },
          validBlockIds: [Vb],
          meshSize: 1.2,
          placeSound: "splash1"
        },
        Hovercraft: {
          meshItemName: "INTERNAL_MESH_Hovercraft",
          physicsState: {
            type: eb.r.HOVERCRAFT,
            tier: null
          },
          validBlockIds: "solidBlocksOrFluid",
          meshSize: 4,
          placeSound: null
        },
        "Yellow Kart": {
          ...Lb,
          meshItemName: "INTERNAL_MESH_Yellow Kart"
        },
        "White Kart": {
          ...Lb,
          meshItemName: "INTERNAL_MESH_White Kart"
        },
        "Red Kart": {
          ...Lb,
          meshItemName: "INTERNAL_MESH_Red Kart"
        },
        "Purple Kart": {
          ...Lb,
          meshItemName: "INTERNAL_MESH_Purple Kart"
        },
        "Pink Kart": {
          ...Lb,
          meshItemName: "INTERNAL_MESH_Pink Kart"
        },
        "Orange Kart": {
          ...Lb,
          meshItemName: "INTERNAL_MESH_Orange Kart"
        },
        "Magenta Kart": {
          ...Lb,
          meshItemName: "INTERNAL_MESH_Magenta Kart"
        },
        "Lime Kart": {
          ...Lb,
          meshItemName: "INTERNAL_MESH_Lime Kart"
        },
        "Light Gray Kart": {
          ...Lb,
          meshItemName: "INTERNAL_MESH_Light Gray Kart"
        },
        "Light Blue Kart": {
          ...Lb,
          meshItemName: "INTERNAL_MESH_Light Blue Kart"
        },
        "Green Kart": {
          ...Lb,
          meshItemName: "INTERNAL_MESH_Green Kart"
        },
        "Gray Kart": {
          ...Lb,
          meshItemName: "INTERNAL_MESH_Gray Kart"
        },
        "Cyan Kart": {
          ...Lb,
          meshItemName: "INTERNAL_MESH_Cyan Kart"
        },
        "Brown Kart": {
          ...Lb,
          meshItemName: "INTERNAL_MESH_Brown Kart"
        },
        "Blue Kart": {
          ...Lb,
          meshItemName: "INTERNAL_MESH_Blue Kart"
        },
        "Black Kart": {
          ...Lb,
          meshItemName: "INTERNAL_MESH_Black Kart"
        },
        "Off Roader": {
          meshItemName: "INTERNAL_MESH_Off Roader",
          physicsState: {
            type: eb.r.CAR,
            tier: eb.j.OFF_ROADER
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
          ...Ib,
          meshItemName: "INTERNAL_MESH_Gold Mining Drill",
          physicsState: {
            type: eb.r.CAR,
            tier: eb.j.GOLD_MINING_DRILL
          }
        },
        "Iron Mining Drill": {
          ...Ib,
          meshItemName: "INTERNAL_MESH_Iron Mining Drill",
          physicsState: {
            type: eb.r.CAR,
            tier: eb.j.IRON_MINING_DRILL
          }
        },
        "Diamond Mining Drill": {
          ...Ib,
          meshItemName: "INTERNAL_MESH_Diamond Mining Drill",
          physicsState: {
            type: eb.r.CAR,
            tier: eb.j.DIAMOND_MINING_DRILL
          }
        },
        "Moonstone Mining Drill": {
          ...Ib,
          meshItemName: "INTERNAL_MESH_Moonstone Mining Drill",
          physicsState: {
            type: eb.r.CAR,
            tier: eb.j.MOONSTONE_MINING_DRILL
          }
        },
        "Armored Car": {
          meshItemName: "INTERNAL_MESH_Armored Car",
          physicsState: {
            type: eb.r.CAR,
            tier: eb.j.ARMORED_CAR
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
            type: eb.r.CAR,
            tier: eb.j.CAR
          },
          validBlockIds: "solidBlocks",
          meshSize: 4,
          placeSound: null
        }
      },
      Ub = Object.values(Ob).map((bb => bb.meshItemName));

    function tb(bb) {
      for (const wb of Hb.e)
        if (Ob[wb].meshItemName === bb) return wb;
      return null
    }

    function Cb(bb, wb) {
      const Mb = bb.validBlockIds;
      if (Array.isArray(Mb)) return Mb.includes(wb);
      if (wb === lb) return !1;
      if ("solidBlocks" === Mb) return !0 !== pb.g[wb].ht;
      if ("solidBlocksOrFluid" === Mb) return !0;
      throw new Error(`Unsupported validBlockIds for ${wb}: ${JSON.stringify(Mb)}`)
    }
    const Eb = {
        meshAttachment: {
          size: .12,
          offset: [0, 1.8, -.24],
          rotation: [0, 0, 0]
        }
      },
      Fb = {
        "Yellow Balloon": {
          ...Eb,
          physicsState: {
            type: eb.r.BALLOON,
            tier: eb.e.YELLOW
          }
        },
        "White Balloon": {
          ...Eb,
          physicsState: {
            type: eb.r.BALLOON,
            tier: eb.e.WHITE
          }
        },
        "Red Balloon": {
          ...Eb,
          physicsState: {
            type: eb.r.BALLOON,
            tier: eb.e.RED
          }
        },
        "Purple Balloon": {
          ...Eb,
          physicsState: {
            type: eb.r.BALLOON,
            tier: eb.e.PURPLE
          }
        },
        "Pink Balloon": {
          ...Eb,
          physicsState: {
            type: eb.r.BALLOON,
            tier: eb.e.PINK
          }
        },
        "Orange Balloon": {
          ...Eb,
          physicsState: {
            type: eb.r.BALLOON,
            tier: eb.e.ORANGE
          }
        },
        "Magenta Balloon": {
          ...Eb,
          physicsState: {
            type: eb.r.BALLOON,
            tier: eb.e.MAGENTA
          }
        },
        "Lime Balloon": {
          ...Eb,
          physicsState: {
            type: eb.r.BALLOON,
            tier: eb.e.LIME
          }
        },
        "Light Gray Balloon": {
          ...Eb,
          physicsState: {
            type: eb.r.BALLOON,
            tier: eb.e.LIGHT_GRAY
          }
        },
        "Light Blue Balloon": {
          ...Eb,
          physicsState: {
            type: eb.r.BALLOON,
            tier: eb.e.LIGHT_BLUE
          }
        },
        "Green Balloon": {
          ...Eb,
          physicsState: {
            type: eb.r.BALLOON,
            tier: eb.e.GREEN
          }
        },
        "Gray Balloon": {
          ...Eb,
          physicsState: {
            type: eb.r.BALLOON,
            tier: eb.e.GRAY
          }
        },
        "Cyan Balloon": {
          ...Eb,
          physicsState: {
            type: eb.r.BALLOON,
            tier: eb.e.CYAN
          }
        },
        "Brown Balloon": {
          ...Eb,
          physicsState: {
            type: eb.r.BALLOON,
            tier: eb.e.BROWN
          }
        },
        "Blue Balloon": {
          ...Eb,
          physicsState: {
            type: eb.r.BALLOON,
            tier: eb.e.BLUE
          }
        },
        "Black Balloon": {
          ...Eb,
          physicsState: {
            type: eb.r.BALLOON,
            tier: eb.e.BLACK
          }
        }
      };

    function Bb(bb) {
      var wb;
      return null === bb || void 0 === bb ? null : null !== (wb = Fb[bb]) && void 0 !== wb ? wb : null
    }
    const sb = {
        meshAttachment: {
          size: 3,
          offset: [0, .72, .3],
          rotation: [-Math.PI / 2, Math.PI, Math.PI]
        }
      },
      mb = {
        "Wood Hang Glider": {
          ...sb,
          physicsState: {
            type: eb.r.GLIDER,
            tier: eb.n.WOOD
          }
        },
        "Iron Hang Glider": {
          ...sb,
          physicsState: {
            type: eb.r.GLIDER,
            tier: eb.n.IRON
          }
        },
        "Gold Hang Glider": {
          ...sb,
          physicsState: {
            type: eb.r.GLIDER,
            tier: eb.n.GOLD
          }
        },
        "Diamond Hang Glider": {
          ...sb,
          physicsState: {
            type: eb.r.GLIDER,
            tier: eb.n.DIAMOND
          }
        }
      };

    function hb(bb) {
      var wb;
      return null === bb || void 0 === bb ? null : null !== (wb = mb[bb]) && void 0 !== wb ? wb : null
    }
    const zb = new Set(Object.values(Fb).map((bb => bb.physicsState.type))),
      Xb = new Set(Object.values(mb).map((bb => bb.physicsState.type)));

    function xb(bb) {
      return zb.has(bb)
    }

    function jb(bb) {
      return Xb.has(bb)
    }

    function Kb(bb) {
      return bb === eb.r.DEFAULT || function(bb) {
        return zb.has(bb) || Xb.has(bb)
      }(bb)
    }

    function rb(bb) {
      return !Kb(bb) && bb !== eb.r.SLEEPING
    }
  },
  7634: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Vb,
      h: () => Hb,
      j: () => lb,
      n: () => pb,
      p: () => Lb,
      r: () => eb,
      t: () => gb
    });
    let eb = function(bb) {
        return bb[bb.DEFAULT = 0] = "DEFAULT", bb[bb.BOAT = 1] = "BOAT", bb[bb.GLIDER = 2] = "GLIDER", bb[bb.BALLOON = 3] = "BALLOON", bb[bb.SLEEPING = 4] = "SLEEPING", bb[bb.RIDING_MOB = 5] = "RIDING_MOB", bb[bb.CAR = 6] = "CAR", bb[bb.HOVERCRAFT = 7] = "HOVERCRAFT", bb
      }({}),
      Hb = function(bb) {
        return bb[bb.WOOD = 0] = "WOOD", bb[bb.OBSIDIAN = 1] = "OBSIDIAN", bb[bb.SPEED = 2] = "SPEED", bb
      }({}),
      pb = function(bb) {
        return bb[bb.WOOD = 0] = "WOOD", bb[bb.IRON = 1] = "IRON", bb[bb.GOLD = 2] = "GOLD", bb[bb.DIAMOND = 3] = "DIAMOND", bb
      }({}),
      Vb = function(bb) {
        return bb[bb.YELLOW = 0] = "YELLOW", bb[bb.WHITE = 1] = "WHITE", bb[bb.RED = 2] = "RED", bb[bb.PURPLE = 3] = "PURPLE", bb[bb.PINK = 4] = "PINK", bb[bb.ORANGE = 5] = "ORANGE", bb[bb.MAGENTA = 6] = "MAGENTA", bb[bb.LIME = 7] = "LIME", bb[bb.LIGHT_GRAY = 8] = "LIGHT_GRAY", bb[bb.LIGHT_BLUE = 9] = "LIGHT_BLUE", bb[bb.GREEN = 10] = "GREEN", bb[bb.GRAY = 11] = "GRAY", bb[bb.CYAN = 12] = "CYAN", bb[bb.BROWN = 13] = "BROWN", bb[bb.BLUE = 14] = "BLUE", bb[bb.BLACK = 15] = "BLACK", bb
      }({}),
      gb = function(bb) {
        return bb[bb.ROTATION_1 = 0] = "ROTATION_1", bb[bb.ROTATION_2 = 1] = "ROTATION_2", bb[bb.ROTATION_3 = 2] = "ROTATION_3", bb[bb.ROTATION_4 = 3] = "ROTATION_4", bb
      }({}),
      lb = function(bb) {
        return bb[bb.KART = 0] = "KART", bb[bb.OFF_ROADER = 1] = "OFF_ROADER", bb[bb.CAR = 2] = "CAR", bb[bb.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", bb[bb.ARMORED_CAR = 4] = "ARMORED_CAR", bb[bb.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", bb[bb.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", bb[bb.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", bb
      }({});
    eb.DEFAULT, eb.BOAT, Hb.SPEED, eb.GLIDER, pb.DIAMOND, eb.BALLOON, Vb.BLACK, eb.SLEEPING, gb.ROTATION_4, eb.RIDING_MOB, eb.CAR, lb.MOONSTONE_MINING_DRILL, eb.HOVERCRAFT;
    let Lb = function(bb) {
      return bb[bb.NORMAL = 0] = "NORMAL", bb[bb.GLIDING = 1] = "GLIDING", bb[bb.FLOATING = 2] = "FLOATING", bb
    }({})
  },
  39463: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => pb,
      g: () => Vb,
      k: () => Hb,
      n: () => gb
    });
    var eb = Mb(389);
    const Hb = ["Snowball", "Snowball Launcher", "Pebble", "Reinforced Pebble", "Ball", "Reinforced Ball", "Mango", "Moonstone Orb", ...Mb(655).w.map((bb => `${bb} Spawn Orb`)), "Fireball", "RPG", "Obby RPG", "Super RPG", "Grenade Launcher", "Iceball", "Bouncy Bomb", "Coconut", "Splash Speed Potion", "Splash Speed Potion II", "Splash Defense Potion", "Splash Defense Potion II", "Splash Strength Potion", "Splash Strength Potion II", "Splash Invisibility Potion", "Splash Jump Potion", "Splash Jump Potion II", "Splash Knockback Potion", "Splash Knockback Potion II", "Splash Poison Potion", "Splash Poison Potion II", "Splash Slowness Potion", "Splash Slowness Potion II", "Splash Weakness Potion", "Splash Weakness Potion II", "Splash Milk Potion", "Splash Instant Damage Potion", "Splash Instant Damage Potion II", "Splash Regeneration Potion", "Splash Regeneration Potion II", "Splash Instant Healing Potion", "Splash Instant Healing Potion II", "Splash Haste Potion", "Splash Haste Potion II", "Splash Shield Potion", "Splash Shield Potion II", "Splash Double Jump Potion", "Splash Heat Resistance Potion", "Splash X-Ray Vision Potion", "Splash Mining Yield Potion", "Splash Mining Yield Potion II", "Splash Brain Rot Potion", "Yellow Paintball Gun", "White Paintball Gun", "Red Paintball Gun", "Purple Paintball Gun", "Pink Paintball Gun", "Orange Paintball Gun", "Magenta Paintball Gun", "Lime Paintball Gun", "Light Gray Paintball Gun", "Light Blue Paintball Gun", "Green Paintball Gun", "Gray Paintball Gun", "Cyan Paintball Gun", "Brown Paintball Gun", "Blue Paintball Gun", "Black Paintball Gun", "Yellow Heavy Paintball Gun", "White Heavy Paintball Gun", "Red Heavy Paintball Gun", "Purple Heavy Paintball Gun", "Pink Heavy Paintball Gun", "Orange Heavy Paintball Gun", "Magenta Heavy Paintball Gun", "Lime Heavy Paintball Gun", "Light Gray Heavy Paintball Gun", "Light Blue Heavy Paintball Gun", "Green Heavy Paintball Gun", "Gray Heavy Paintball Gun", "Cyan Heavy Paintball Gun", "Brown Heavy Paintball Gun", "Blue Heavy Paintball Gun", "Black Heavy Paintball Gun", "Toxin Ball", "Splash Aura XP Potion", "Splash Aura XP Potion II", "Firecracker", "Rainbow Firecracker", "White Firecracker", "Orange Firecracker", "Magenta Firecracker", "Light Blue Firecracker", "Yellow Firecracker", "Lime Firecracker", "Pink Firecracker", "Gray Firecracker", "Light Gray Firecracker", "Cyan Firecracker", "Purple Firecracker", "Blue Firecracker", "Brown Firecracker", "Green Firecracker", "Red Firecracker", "Black Firecracker", "Firecracker Pebble", "Rainbow Firecracker Pebble", "White Firecracker Pebble", "Orange Firecracker Pebble", "Magenta Firecracker Pebble", "Light Blue Firecracker Pebble", "Yellow Firecracker Pebble", "Lime Firecracker Pebble", "Pink Firecracker Pebble", "Gray Firecracker Pebble", "Light Gray Firecracker Pebble", "Cyan Firecracker Pebble", "Purple Firecracker Pebble", "Blue Firecracker Pebble", "Brown Firecracker Pebble", "Green Firecracker Pebble", "Red Firecracker Pebble", "Black Firecracker Pebble", "Blinding Pebble", "Poop", "Wood Boomerang", "Stone Boomerang", "Iron Boomerang", "Gold Boomerang", "Diamond Boomerang", "Moonstone Boomerang", ...eb.i, "67 Base Projectile", "67 Boosted Projectile", "Capitano Grenade", "Scatter Pellet", "Lucky Bomb", "Unlucky Bomb", "Swap Orb"],
      pb = ["Obby RPG"];

    function Vb(bb) {
      const wb = bb.indexOf("|");
      return -1 === wb ? {
        item: bb,
        clientPredictedThrower: null
      } : {
        item: bb.slice(0, wb),
        clientPredictedThrower: bb.slice(wb + 1)
      }
    }
    const gb = [...Hb, "Arrow", "Arrow of Speed", "Arrow of Slowness", "Arrow of Poison", "Arrow of Weakness", "Arrow of Knockback", "Arrow of Strength", "Arrow of Defense", "Arrow of Invisibility", "Arrow of Jumping", "Arrow of Milk", "Arrow of Instant Damage", "Arrow of Regeneration", "Arrow of Instant Healing", "Arrow of Haste", "Arrow of Shield", "Arrow of Double Jump", "Arrow of Heat Resistance", "Arrow of X-Ray Vision", "Arrow of Mining Yield", "Arrow of Brain Rot", "Arrow of Aura XP", "Bullet"]
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);