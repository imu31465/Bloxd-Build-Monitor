export const id = 142;
export const ids = [142];
export const modules = {
  38273: (dd, Od, md) => {
    function Wd(dd, Od, md, Wd) {
      return !(md && !dd.aimable) && (!Od || dd.gun && "head" !== Wd)
    }

    function Fd(dd) {
      return Math.max(.1 * dd, 1)
    }

    function Rd(dd, Od) {
      return !dd && Od
    }
    md.d(Od, {
      c: () => Rd,
      g: () => Fd,
      j: () => Wd
    })
  },
  38280: (dd, Od, md) => {
    md.d(Od, {
      d: () => Kd,
      h: () => Xd
    });
    let Wd = null;
    const Fd = {
        crosshairAccuracy: [],
        turnDamageIndicators: [],
        turnSoundCues: []
      },
      Rd = {
        crosshairAccuracy: dd => {
          const Od = Fd.crosshairAccuracy.at(-1);
          Od ? Od.hook(dd) : Wd = dd
        },
        turnDamageIndicators: dd => {
          var Od;
          null === (Od = Fd.turnDamageIndicators.at(-1)) || void 0 === Od || Od.hook(dd)
        },
        turnSoundCues: dd => {
          var Od;
          null === (Od = Fd.turnSoundCues.at(-1)) || void 0 === Od || Od.hook(dd)
        }
      };

    function Xd(dd, Od) {
      const md = {
          hook: Od
        },
        Xd = Fd[dd];
      if (Xd.push(md), "crosshairAccuracy" === dd && null !== Wd) {
        const dd = Wd;
        Wd = null, Rd.crosshairAccuracy(dd)
      }
      return () => {
        const dd = Xd.indexOf(md); - 1 !== dd && Xd.splice(dd, 1)
      }
    }

    function Kd() {
      return Rd
    }
  },
  35499: (dd, Od, md) => {
    md.d(Od, {
      b: () => Rd,
      f: () => Fd
    });
    var Wd = md(29);

    function Fd(dd, Od) {
      return dd && !Od
    }

    function Rd() {
      return Fd(Wd.e.get("isTouchScreen"), Wd.e.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  39354: (dd, Od, md) => {
    md.d(Od, {
      d: () => td,
      g: () => Xd
    });
    var Wd = md(5752),
      Fd = md(5733),
      Rd = md(405);
    const Xd = {
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
      ...Kd("White"),
      ...Kd("Orange"),
      ...Kd("Magenta"),
      ...Kd("Light Blue"),
      ...Kd("Yellow"),
      ...Kd("Lime"),
      ...Kd("Pink"),
      ...Kd("Gray"),
      ...Kd("Light Gray"),
      ...Kd("Cyan"),
      ...Kd("Purple"),
      ...Kd("Blue"),
      ...Kd("Brown"),
      ...Kd("Green"),
      ...Kd("Red"),
      ...Kd("Black"),
      ...Kd("Draugr"),
      ...Kd("Skull"),
      ...Kd("Rainbow"),
      ...hd("Sheep"),
      ...hd("Cow"),
      ...hd("Pig"),
      ...hd("Horse"),
      ...hd("Camel"),
      ...hd("Wolf"),
      ...hd("Deer"),
      ...hd("Wildcat"),
      ...vd("Radar"),
      ...vd("Inactive Radar"),
      ...vd("Active Radar"),
      ...Qd("Magenta"),
      ...Qd("Light Gray"),
      ...Qd("Red"),
      ...Qd("White"),
      ...Qd("Orange"),
      ...Qd("Light Blue"),
      ...Qd("Yellow"),
      ...Qd("Lime"),
      ...Qd("Pink"),
      ...Qd("Gray"),
      ...Qd("Cyan"),
      ...Qd("Purple"),
      ...Qd("Blue"),
      ...Qd("Brown"),
      ...Qd("Green"),
      ...Qd("Black"),
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
        const dd = "Lunite Auto Miner";
        return {
          [dd]: {
            positions: [{
              block: dd,
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
          [`${dd}|meta|rot2`]: {
            positions: [{
              block: `${dd}|meta|rot2`,
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
          [`${dd}|meta|rot3`]: {
            positions: [{
              block: `${dd}|meta|rot3`,
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
          [`${dd}|meta|rot4`]: {
            positions: [{
              block: `${dd}|meta|rot4`,
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
        const dd = {
            1: dd => ({
              x: 0,
              z: dd
            }),
            2: dd => ({
              x: dd,
              z: 0
            }),
            3: dd => ({
              x: 0,
              z: -dd
            }),
            4: dd => ({
              x: -dd,
              z: 0
            })
          },
          Od = {};
        for (let md = 1; md <= 4; md++) {
          const Fd = 1 === md ? "" : `|meta|rot${md}`;
          Od[`${Wd.b[0].block}${Fd}`] = {
            positions: Wd.b.map((Od => {
              let {
                block: Wd,
                y: Rd,
                z: Xd
              } = Od;
              return {
                block: `${Wd}${Fd}`,
                y: Rd,
                ...dd[md](Xd)
              }
            }))
          }
        }
        return Od
      }(),
      ... function() {
        const dd = {};
        for (let Od = 1; Od <= Wd.i; Od++) {
          const md = (0, Wd.dc)(Od),
            Fd = Wd.m[Od - 1],
            Rd = [{
              block: md,
              x: 0,
              y: 0,
              z: 0
            }];
          for (const dd of Wd.d)
            for (let Od = 1; Od <= Fd; Od++) {
              if ("southwest" === dd && 1 === Od) continue;
              const {
                x: md,
                z: Fd
              } = Wd.g[dd];
              Rd.push({
                block: (0, Wd.cc)(dd, Od),
                x: md,
                y: Od - 1,
                z: Fd
              })
            }
          dd[md] = {
            positions: Rd
          }
        }
        return dd
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

    function Kd(dd) {
      return {
        [`${dd} Banner`]: {
          positions: [{
            block: `${dd} Banner`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${dd} Banner Flag|meta|rot1|bot`,
            x: 0,
            y: 1,
            z: 0
          }]
        },
        [`${dd} Banner|meta|rot2|bot`]: {
          positions: [{
            block: `${dd} Banner|meta|rot2|bot`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${dd} Banner Flag|meta|rot2|bot`,
            x: 0,
            y: 1,
            z: 0
          }]
        },
        [`${dd} Banner|meta|rot3|bot`]: {
          positions: [{
            block: `${dd} Banner|meta|rot3|bot`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${dd} Banner Flag|meta|rot3|bot`,
            x: 0,
            y: 1,
            z: 0
          }]
        },
        [`${dd} Banner|meta|rot4|bot`]: {
          positions: [{
            block: `${dd} Banner|meta|rot4|bot`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${dd} Banner Flag|meta|rot4|bot`,
            x: 0,
            y: 1,
            z: 0
          }]
        },
        [`${dd} Banner|meta|rot1|side`]: {
          positions: [{
            block: `${dd} Banner|meta|rot1|side`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${dd} Banner Flag|meta|rot1|side`,
            x: 0,
            y: -1,
            z: 0
          }]
        },
        [`${dd} Banner|meta|rot2|side`]: {
          positions: [{
            block: `${dd} Banner|meta|rot2|side`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${dd} Banner Flag|meta|rot2|side`,
            x: 0,
            y: -1,
            z: 0
          }]
        },
        [`${dd} Banner|meta|rot3|side`]: {
          positions: [{
            block: `${dd} Banner|meta|rot3|side`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${dd} Banner Flag|meta|rot3|side`,
            x: 0,
            y: -1,
            z: 0
          }]
        },
        [`${dd} Banner|meta|rot4|side`]: {
          positions: [{
            block: `${dd} Banner|meta|rot4|side`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${dd} Banner Flag|meta|rot4|side`,
            x: 0,
            y: -1,
            z: 0
          }]
        },
        [`${dd} Banner|meta|rot1|top`]: {
          positions: [{
            block: `${dd} Banner|meta|rot1|top`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${dd} Banner Flag`,
            x: 0,
            y: -1,
            z: 0
          }]
        },
        [`${dd} Banner|meta|rot2|top`]: {
          positions: [{
            block: `${dd} Banner|meta|rot2|top`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${dd} Banner Flag|meta|rot2|top`,
            x: 0,
            y: -1,
            z: 0
          }]
        },
        [`${dd} Banner|meta|rot3|top`]: {
          positions: [{
            block: `${dd} Banner|meta|rot3|top`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${dd} Banner Flag|meta|rot3|top`,
            x: 0,
            y: -1,
            z: 0
          }]
        },
        [`${dd} Banner|meta|rot4|top`]: {
          positions: [{
            block: `${dd} Banner|meta|rot4|top`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${dd} Banner Flag|meta|rot4|top`,
            x: 0,
            y: -1,
            z: 0
          }]
        }
      }
    }

    function hd(dd) {
      const Od = (0, Rd.Ob)(dd);
      return {
        [Od]: {
          positions: [{
            block: Od,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${Od} Top Left`,
            x: 0,
            y: 1,
            z: 0
          }, {
            block: `_${Od} Top Right`,
            x: -1,
            y: 1,
            z: 0
          }, {
            block: `_${Od} Bottom Right`,
            x: -1,
            y: 0,
            z: 0
          }]
        },
        [`${Od}|meta|rot2`]: {
          positions: [{
            block: `${Od}|meta|rot2`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${Od} Top Left|meta|rot2`,
            x: 0,
            y: 1,
            z: 0
          }, {
            block: `_${Od} Top Right|meta|rot2`,
            x: 0,
            y: 1,
            z: 1
          }, {
            block: `_${Od} Bottom Right|meta|rot2`,
            x: 0,
            y: 0,
            z: 1
          }]
        },
        [`${Od}|meta|rot3`]: {
          positions: [{
            block: `${Od}|meta|rot3`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${Od} Top Left|meta|rot3`,
            x: 0,
            y: 1,
            z: 0
          }, {
            block: `_${Od} Top Right|meta|rot3`,
            x: 1,
            y: 1,
            z: 0
          }, {
            block: `_${Od} Bottom Right|meta|rot3`,
            x: 1,
            y: 0,
            z: 0
          }]
        },
        [`${Od}|meta|rot4`]: {
          positions: [{
            block: `${Od}|meta|rot4`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${Od} Top Left|meta|rot4`,
            x: 0,
            y: 1,
            z: 0
          }, {
            block: `_${Od} Top Right|meta|rot4`,
            x: 0,
            y: 1,
            z: -1
          }, {
            block: `_${Od} Bottom Right|meta|rot4`,
            x: 0,
            y: 0,
            z: -1
          }]
        }
      }
    }

    function vd(dd) {
      const Od = `_${dd} Back`,
        md = `_${dd} Dish`;
      return {
        [dd]: {
          positions: [{
            block: dd,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: Od,
            x: 0,
            y: 0,
            z: -1
          }, {
            block: md,
            x: 0,
            y: 1,
            z: -1
          }]
        },
        [`${dd}|meta|rot2`]: {
          positions: [{
            block: `${dd}|meta|rot2`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `${Od}|meta|rot2`,
            x: -1,
            y: 0,
            z: 0
          }, {
            block: `${md}|meta|rot2`,
            x: -1,
            y: 1,
            z: 0
          }]
        },
        [`${dd}|meta|rot3`]: {
          positions: [{
            block: `${dd}|meta|rot3`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `${Od}|meta|rot3`,
            x: 0,
            y: 0,
            z: 1
          }, {
            block: `${md}|meta|rot3`,
            x: 0,
            y: 1,
            z: 1
          }]
        },
        [`${dd}|meta|rot4`]: {
          positions: [{
            block: `${dd}|meta|rot4`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `${Od}|meta|rot4`,
            x: 1,
            y: 0,
            z: 0
          }, {
            block: `${md}|meta|rot4`,
            x: 1,
            y: 1,
            z: 0
          }]
        }
      }
    }

    function Qd(dd) {
      const Od = `Small ${dd} Pod`;
      return {
        [Od]: {
          positions: [{
            block: Od,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_Small ${dd} Pod Mid`,
            x: 0,
            y: 1,
            z: 0
          }, {
            block: `_Small ${dd} Pod Top`,
            x: 0,
            y: 2,
            z: 0
          }]
        }
      }
    }
    for (const od in Xd) {
      for (const dd of Xd[od].positions)
        if (dd.id = Fd.i[dd.block].id, od === dd.block && (0 !== dd.x || 0 !== dd.y || 0 !== dd.z)) throw new Error(`Multiblock "${od}" has main block "${dd.block}" at non-origin position (${dd.x}, ${dd.y}, ${dd.z}) - if you need to do something like this, you'll need to rethink your approach: Banners are a good template to follow.`);
      Xd[Fd.i[od].id] = Xd[od]
    }
    const td = {};
    for (const od in Xd)
      for (const {
          block: dd,
          x: Od,
          y: md,
          z: Wd
        }
        of Xd[od].positions) {
        const Rd = {
          mainMultiblock: od,
          compX: Od,
          compY: md,
          compZ: Wd
        };
        td[dd] = Rd, td[Fd.i[dd].id] = Rd
      }
  },
  39756: (dd, Od, md) => {
    md.d(Od, {
      e: () => hd,
      h: () => Kd
    });
    var Wd = md(5733),
      Fd = md(5774),
      Rd = md(5778);
    const Xd = Fd.x.map((dd => {
      let {
        dx: Od,
        dz: md
      } = dd;
      return [Od, 0, md]
    }));

    function Kd(dd) {
      const Od = Wd.i[dd];
      return !!Od && dd !== Wd.d && !Od.model && !Od.LN && !1 !== Od.solid && !Od.Sy
    }
    class hd {
      constructor(dd) {
        this.model = dd, this.reshapeOffsets = [...Xd, [0, -1, 0]]
      }
      handles(dd) {
        const Od = Wd.i[dd];
        return (null === Od || void 0 === Od ? void 0 : Od.model) === this.model && void 0 !== Od.attachedTop
      }
      affects(dd) {
        return this.handles(dd) || Kd(dd) || (0, Rd.s)(Wd.i[dd])
      }
      shape(dd, Od, md, Xd, hd) {
        let vd = this.handles(dd(Od, md + 1, Xd)) ? Fd.k : 0;
        return Fd.x.forEach(((hd, Qd) => {
          let {
            dx: td,
            dz: od
          } = hd;
          const Nd = dd(Od + td, md, Xd + od);
          (this.handles(Nd) || Kd(Nd) || function(dd, Od) {
            const md = Wd.i[dd];
            return (0, Rd.s)(md) && (0, Rd.p)(md.meta.rot) === (0 !== Fd.x[Od].dx)
          }(Nd, Qd)) && (vd |= 1 << Qd)
        })), (0, Wd.j)((0, Fd.m)(Wd.i[hd].meta.rootName, vd))
      }
    }
  },
  39557: (dd, Od, md) => {
    function Wd(dd, Od) {
      var md;
      Od || (Od = {});
      const Wd = null !== (md = Od.customAttributes) && void 0 !== md ? md : {};
      var Fd, Rd, Xd;
      "Gun" === (null === dd || void 0 === dd ? void 0 : dd.type) && (Wd.shotsLeft = null !== (Fd = null !== (Rd = Wd.shotsLeft) && void 0 !== Rd ? Rd : null === (Xd = Wd.gunStats) || void 0 === Xd ? void 0 : Xd.clipSize) && void 0 !== Fd ? Fd : dd.clipSize);
      if (Wd.enchantmentTier && (Wd.enchantmentTier = Wd.enchantmentTier.toString()), Wd.enchantments)
        for (const td in Wd.enchantments) {
          const dd = Wd.enchantments[td];
          if ("number" !== typeof dd) {
            const Od = parseInt(dd);
            isNaN(Od) || Od < 0 ? Wd.enchantments[td] = void 0 : Wd.enchantments[td] = Od > 1e9 ? 1e9 : Od
          }
        }
      if (Wd.enchantmentData)
        for (const td in Wd.enchantmentData) {
          const dd = Wd.enchantmentData[td];
          if (!dd) continue;
          if ("object" !== typeof dd) {
            Wd.enchantmentData[td] = void 0;
            continue
          }
          const Od = dd.icon,
            md = dd.description;
          var Kd, hd, vd, Qd;
          if ("string" !== typeof Od) Wd.enchantmentData[td].icon = null !== (Kd = null === Od || void 0 === Od || null === (hd = Od.toString) || void 0 === hd ? void 0 : hd.call(Od)) && void 0 !== Kd ? Kd : void 0;
          if ("string" !== typeof md) Wd.enchantmentData[td].description = null !== (vd = null === md || void 0 === md || null === (Qd = md.toString) || void 0 === Qd ? void 0 : Qd.call(md)) && void 0 !== vd ? vd : void 0
        }
      return Od.customAttributes = Wd, Od
    }
    md.d(Od, {
      c: () => Wd
    })
  },
  39750: (dd, Od, md) => {
    md.d(Od, {
      e: () => Ed,
      g: () => bd,
      k: () => hd,
      n: () => td,
      o: () => Jd
    });
    var Wd = md(5733),
      Fd = md(5759),
      Rd = md(39756);
    const Xd = (0, Wd.j)("Noticeboard"),
      Kd = (0, Wd.j)("Standing Noticeboard|meta|rot4|lrud");

    function hd(dd) {
      return Xd <= dd && dd <= Kd
    }
    const vd = new Uint8Array(Kd - Xd + 1);
    for (let Ud = Xd; Ud <= Kd; Ud++) vd[Ud - Xd] = (0, Fd.t)(Wd.i[Ud].meta.metaStr);
    const Qd = 64,
      td = Qd * Qd,
      [od, Nd, qd, Hd] = [0, 1, 2, 3];

    function yd(dd) {
      var Od, md;
      return "string" === typeof(null === dd || void 0 === dd || null === (Od = dd.persisted) || void 0 === Od || null === (md = Od.shared) || void 0 === md ? void 0 : md.text)
    }

    function bd(dd) {
      return yd(dd) && "" !== dd.persisted.shared.text.trim()
    }

    function Td(dd, Od) {
      let [md, , Wd] = Od;
      const [Rd, , Xd] = Fd.A[dd][Nd];
      return md * Rd + Wd * Xd
    }

    function pd(dd, Od, md) {
      return md[1] - Od[1] || Td(dd, Od) - Td(dd, md)
    }

    function Yd(dd, Od, md, Rd, Kd) {
      var hd;
      let Qd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : dd(Od[0], Od[1], Od[2]);
      if (!(vd[Qd - Xd] & 1 << md)) return null;
      const [td, od, Nd] = Fd.A[Kd][md], qd = [Od[0] + td, Od[1] + od, Od[2] + Nd], Hd = dd(qd[0], qd[1], qd[2]), yd = null === (hd = Wd.i[Hd]) || void 0 === hd ? void 0 : hd.meta;
      return (null === yd || void 0 === yd ? void 0 : yd.rootId) === Rd && yd.rot === Kd && vd[Hd - Xd] & 1 << (1 ^ md) ? qd : null
    }

    function gd(dd, Od, md, Rd) {
      const Xd = dd(Od, md, Rd);
      if (!hd(Xd)) return null;
      const {
        rootId: Kd,
        rot: vd
      } = Wd.i[Xd].meta, td = (Od, md) => {
        let Wd = Od,
          Fd = 1;
        for (let Rd = Yd(dd, Wd, md, Kd, vd); Rd && Fd < Qd; Rd = Yd(dd, Wd, md, Kd, vd)) Wd = Rd, Fd++;
        return {
          end: Wd,
          cells: Fd
        }
      }, yd = td(td([Od, md, Rd], od).end, qd).end, bd = td(yd, Nd).cells, [Td, , pd] = Fd.A[vd][Nd];
      let gd = 1;
      dd: for (; gd < Qd; gd++)
        for (let Od = 0; Od < bd; Od++)
          if (!Yd(dd, [yd[0] + Td * Od, yd[1] - gd + 1, yd[2] + pd * Od], Hd, Kd, vd)) break dd;
      return {
        anchor: yd,
        rootId: Kd,
        rot: vd,
        width: bd,
        height: gd
      }
    }

    function wd(dd, Od) {
      for (const md of function(dd) {
          let {
            anchor: Od,
            rot: md,
            width: Wd,
            height: Rd
          } = dd;
          const [Xd, , Kd] = Fd.A[md][Nd], hd = [];
          for (let Fd = 0; Fd < Rd; Fd++)
            for (let dd = 0; dd < Wd; dd++) hd.push([Od[0] + Xd * dd, Od[1] - Fd, Od[2] + Kd * dd]);
          return hd
        }(dd))
        if (yd(Od(md[0], md[1], md[2]))) return md;
      return null
    }

    function Ed(dd, Od, md, Fd, Rd) {
      const Xd = dd(md, Fd, Rd);
      if (!hd(Xd)) return null;
      const {
        rootId: Kd,
        rot: vd
      } = Wd.i[Xd].meta, Qd = [
        [md, Fd, Rd]
      ], od = new Set([Qd[0].join()]);
      let Nd = Qd[0],
        qd = null;
      for (let Wd = 0; Wd < Qd.length; Wd++) {
        const md = Qd[Wd];
        if (pd(vd, md, Nd) < 0 && (Nd = md), yd(Od(md[0], md[1], md[2]))) {
          const Od = gd(dd, md[0], md[1], md[2]);
          (!qd || pd(vd, Od.anchor, qd.anchor) < 0) && (qd = Od)
        }
        for (let Od = 0; Od < 4 && Qd.length < td; Od++) {
          const Wd = Yd(dd, md, Od, Kd, vd);
          Wd && !od.has(Wd.join()) && (od.add(Wd.join()), Qd.push(Wd))
        }
      }
      return qd ??= gd(dd, Nd[0], Nd[1], Nd[2]), {
        cells: Qd,
        topLeft: Nd,
        rect: qd,
        textCell: wd(qd, Od)
      }
    }

    function Jd(dd, Od, md, Xd, Kd) {
      if (null !== md && hd(md)) {
        const {
          rootName: dd,
          rot: Od
        } = Wd.i[md].meta;
        if (Fd.A[Od].some((dd => {
            let [Od, md, Wd] = dd;
            return Od === Xd[0] && md === Xd[1] && Wd === Xd[2]
          }))) return {
          root: dd,
          rot: Od
        }
      }
      const [vd, Qd] = Fd.o[Kd], td = dd(Od[0] - vd, Od[1], Od[2] - Qd);
      return {
        root: (0, Rd.h)(td) ? Fd.E : Fd.B,
        rot: Kd
      }
    }
  },
  39744: (dd, Od, md) => {
    md.d(Od, {
      e: () => bd,
      i: () => Yd,
      j: () => Ed,
      k: () => Jd,
      o: () => qd,
      p: () => td,
      q: () => Nd,
      u: () => Ud,
      v: () => xd,
      x: () => od
    });
    var Wd = md(7410),
      Fd = md(38594),
      Rd = md(5733);
    const Xd = (0, Rd.j)("Water"),
      Kd = (0, Rd.j)("Lava"),
      hd = (0, Rd.j)("Air"),
      vd = {
        physicsState: {
          type: Wd.q.CAR,
          tier: Wd.g.KART
        },
        validBlockIds: "solidBlocks",
        meshSize: 4,
        placeSound: null
      },
      Qd = {
        validBlockIds: "solidBlocks",
        meshSize: 4,
        placeSound: null,
        seats: [{
          role: "driver",
          localOffset: [0, .75, -.35]
        }]
      },
      td = {
        Boat: {
          meshItemName: "INTERNAL_MESH_Boat",
          physicsState: {
            type: Wd.q.BOAT,
            tier: Wd.f.WOOD
          },
          validBlockIds: [Xd, Kd],
          meshSize: 1.2,
          placeSound: "splash1"
        },
        "Obsidian Boat": {
          meshItemName: "INTERNAL_MESH_Obsidian Boat",
          physicsState: {
            type: Wd.q.BOAT,
            tier: Wd.f.OBSIDIAN
          },
          validBlockIds: [Xd, Kd],
          meshSize: 1.2,
          placeSound: "splash1"
        },
        Speedboat: {
          meshItemName: "INTERNAL_MESH_Speedboat",
          physicsState: {
            type: Wd.q.BOAT,
            tier: Wd.f.SPEED
          },
          validBlockIds: [Xd],
          meshSize: 1.2,
          placeSound: "splash1"
        },
        Hovercraft: {
          meshItemName: "INTERNAL_MESH_Hovercraft",
          physicsState: {
            type: Wd.q.HOVERCRAFT,
            tier: null
          },
          validBlockIds: "solidBlocksOrFluid",
          meshSize: 4,
          placeSound: null
        },
        "Yellow Kart": {
          ...vd,
          meshItemName: "INTERNAL_MESH_Yellow Kart"
        },
        "White Kart": {
          ...vd,
          meshItemName: "INTERNAL_MESH_White Kart"
        },
        "Red Kart": {
          ...vd,
          meshItemName: "INTERNAL_MESH_Red Kart"
        },
        "Purple Kart": {
          ...vd,
          meshItemName: "INTERNAL_MESH_Purple Kart"
        },
        "Pink Kart": {
          ...vd,
          meshItemName: "INTERNAL_MESH_Pink Kart"
        },
        "Orange Kart": {
          ...vd,
          meshItemName: "INTERNAL_MESH_Orange Kart"
        },
        "Magenta Kart": {
          ...vd,
          meshItemName: "INTERNAL_MESH_Magenta Kart"
        },
        "Lime Kart": {
          ...vd,
          meshItemName: "INTERNAL_MESH_Lime Kart"
        },
        "Light Gray Kart": {
          ...vd,
          meshItemName: "INTERNAL_MESH_Light Gray Kart"
        },
        "Light Blue Kart": {
          ...vd,
          meshItemName: "INTERNAL_MESH_Light Blue Kart"
        },
        "Green Kart": {
          ...vd,
          meshItemName: "INTERNAL_MESH_Green Kart"
        },
        "Gray Kart": {
          ...vd,
          meshItemName: "INTERNAL_MESH_Gray Kart"
        },
        "Cyan Kart": {
          ...vd,
          meshItemName: "INTERNAL_MESH_Cyan Kart"
        },
        "Brown Kart": {
          ...vd,
          meshItemName: "INTERNAL_MESH_Brown Kart"
        },
        "Blue Kart": {
          ...vd,
          meshItemName: "INTERNAL_MESH_Blue Kart"
        },
        "Black Kart": {
          ...vd,
          meshItemName: "INTERNAL_MESH_Black Kart"
        },
        "Off Roader": {
          meshItemName: "INTERNAL_MESH_Off Roader",
          physicsState: {
            type: Wd.q.CAR,
            tier: Wd.g.OFF_ROADER
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
          ...Qd,
          meshItemName: "INTERNAL_MESH_Gold Mining Drill",
          physicsState: {
            type: Wd.q.CAR,
            tier: Wd.g.GOLD_MINING_DRILL
          }
        },
        "Iron Mining Drill": {
          ...Qd,
          meshItemName: "INTERNAL_MESH_Iron Mining Drill",
          physicsState: {
            type: Wd.q.CAR,
            tier: Wd.g.IRON_MINING_DRILL
          }
        },
        "Diamond Mining Drill": {
          ...Qd,
          meshItemName: "INTERNAL_MESH_Diamond Mining Drill",
          physicsState: {
            type: Wd.q.CAR,
            tier: Wd.g.DIAMOND_MINING_DRILL
          }
        },
        "Moonstone Mining Drill": {
          ...Qd,
          meshItemName: "INTERNAL_MESH_Moonstone Mining Drill",
          physicsState: {
            type: Wd.q.CAR,
            tier: Wd.g.MOONSTONE_MINING_DRILL
          }
        },
        "Armored Car": {
          meshItemName: "INTERNAL_MESH_Armored Car",
          physicsState: {
            type: Wd.q.CAR,
            tier: Wd.g.ARMORED_CAR
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
            type: Wd.q.CAR,
            tier: Wd.g.CAR
          },
          validBlockIds: "solidBlocks",
          meshSize: 4,
          placeSound: null
        }
      },
      od = Object.values(td).map((dd => dd.meshItemName));

    function Nd(dd) {
      for (const Od of Fd.e)
        if (td[Od].meshItemName === dd) return Od;
      return null
    }

    function qd(dd, Od) {
      const md = dd.validBlockIds;
      if (Array.isArray(md)) return md.includes(Od);
      if (Od === hd) return !1;
      if ("solidBlocks" === md) return !0 !== Rd.i[Od].LN;
      if ("solidBlocksOrFluid" === md) return !0;
      throw new Error(`Unsupported validBlockIds for ${Od}: ${JSON.stringify(md)}`)
    }
    const Hd = {
        meshAttachment: {
          size: .12,
          offset: [0, 1.8, -.24],
          rotation: [0, 0, 0]
        }
      },
      yd = {
        "Yellow Balloon": {
          ...Hd,
          physicsState: {
            type: Wd.q.BALLOON,
            tier: Wd.c.YELLOW
          }
        },
        "White Balloon": {
          ...Hd,
          physicsState: {
            type: Wd.q.BALLOON,
            tier: Wd.c.WHITE
          }
        },
        "Red Balloon": {
          ...Hd,
          physicsState: {
            type: Wd.q.BALLOON,
            tier: Wd.c.RED
          }
        },
        "Purple Balloon": {
          ...Hd,
          physicsState: {
            type: Wd.q.BALLOON,
            tier: Wd.c.PURPLE
          }
        },
        "Pink Balloon": {
          ...Hd,
          physicsState: {
            type: Wd.q.BALLOON,
            tier: Wd.c.PINK
          }
        },
        "Orange Balloon": {
          ...Hd,
          physicsState: {
            type: Wd.q.BALLOON,
            tier: Wd.c.ORANGE
          }
        },
        "Magenta Balloon": {
          ...Hd,
          physicsState: {
            type: Wd.q.BALLOON,
            tier: Wd.c.MAGENTA
          }
        },
        "Lime Balloon": {
          ...Hd,
          physicsState: {
            type: Wd.q.BALLOON,
            tier: Wd.c.LIME
          }
        },
        "Light Gray Balloon": {
          ...Hd,
          physicsState: {
            type: Wd.q.BALLOON,
            tier: Wd.c.LIGHT_GRAY
          }
        },
        "Light Blue Balloon": {
          ...Hd,
          physicsState: {
            type: Wd.q.BALLOON,
            tier: Wd.c.LIGHT_BLUE
          }
        },
        "Green Balloon": {
          ...Hd,
          physicsState: {
            type: Wd.q.BALLOON,
            tier: Wd.c.GREEN
          }
        },
        "Gray Balloon": {
          ...Hd,
          physicsState: {
            type: Wd.q.BALLOON,
            tier: Wd.c.GRAY
          }
        },
        "Cyan Balloon": {
          ...Hd,
          physicsState: {
            type: Wd.q.BALLOON,
            tier: Wd.c.CYAN
          }
        },
        "Brown Balloon": {
          ...Hd,
          physicsState: {
            type: Wd.q.BALLOON,
            tier: Wd.c.BROWN
          }
        },
        "Blue Balloon": {
          ...Hd,
          physicsState: {
            type: Wd.q.BALLOON,
            tier: Wd.c.BLUE
          }
        },
        "Black Balloon": {
          ...Hd,
          physicsState: {
            type: Wd.q.BALLOON,
            tier: Wd.c.BLACK
          }
        }
      };

    function bd(dd) {
      var Od;
      return null === dd || void 0 === dd ? null : null !== (Od = yd[dd]) && void 0 !== Od ? Od : null
    }
    const Td = {
        meshAttachment: {
          size: 3,
          offset: [0, .72, .3],
          rotation: [-Math.PI / 2, Math.PI, Math.PI]
        }
      },
      pd = {
        "Wood Hang Glider": {
          ...Td,
          physicsState: {
            type: Wd.q.GLIDER,
            tier: Wd.k.WOOD
          }
        },
        "Iron Hang Glider": {
          ...Td,
          physicsState: {
            type: Wd.q.GLIDER,
            tier: Wd.k.IRON
          }
        },
        "Gold Hang Glider": {
          ...Td,
          physicsState: {
            type: Wd.q.GLIDER,
            tier: Wd.k.GOLD
          }
        },
        "Diamond Hang Glider": {
          ...Td,
          physicsState: {
            type: Wd.q.GLIDER,
            tier: Wd.k.DIAMOND
          }
        }
      };

    function Yd(dd) {
      var Od;
      return null === dd || void 0 === dd ? null : null !== (Od = pd[dd]) && void 0 !== Od ? Od : null
    }
    const gd = new Set(Object.values(yd).map((dd => dd.physicsState.type))),
      wd = new Set(Object.values(pd).map((dd => dd.physicsState.type)));

    function Ed(dd) {
      return gd.has(dd)
    }

    function Jd(dd) {
      return wd.has(dd)
    }

    function Ud(dd) {
      return dd === Wd.q.DEFAULT || function(dd) {
        return gd.has(dd) || wd.has(dd)
      }(dd)
    }

    function xd(dd) {
      return !Ud(dd) && dd !== Wd.q.SLEEPING
    }
  },
  7410: (dd, Od, md) => {
    md.d(Od, {
      c: () => Xd,
      f: () => Fd,
      g: () => hd,
      k: () => Rd,
      n: () => vd,
      q: () => Wd,
      t: () => Kd
    });
    let Wd = function(dd) {
        return dd[dd.DEFAULT = 0] = "DEFAULT", dd[dd.BOAT = 1] = "BOAT", dd[dd.GLIDER = 2] = "GLIDER", dd[dd.BALLOON = 3] = "BALLOON", dd[dd.SLEEPING = 4] = "SLEEPING", dd[dd.RIDING_MOB = 5] = "RIDING_MOB", dd[dd.CAR = 6] = "CAR", dd[dd.HOVERCRAFT = 7] = "HOVERCRAFT", dd
      }({}),
      Fd = function(dd) {
        return dd[dd.WOOD = 0] = "WOOD", dd[dd.OBSIDIAN = 1] = "OBSIDIAN", dd[dd.SPEED = 2] = "SPEED", dd
      }({}),
      Rd = function(dd) {
        return dd[dd.WOOD = 0] = "WOOD", dd[dd.IRON = 1] = "IRON", dd[dd.GOLD = 2] = "GOLD", dd[dd.DIAMOND = 3] = "DIAMOND", dd
      }({}),
      Xd = function(dd) {
        return dd[dd.YELLOW = 0] = "YELLOW", dd[dd.WHITE = 1] = "WHITE", dd[dd.RED = 2] = "RED", dd[dd.PURPLE = 3] = "PURPLE", dd[dd.PINK = 4] = "PINK", dd[dd.ORANGE = 5] = "ORANGE", dd[dd.MAGENTA = 6] = "MAGENTA", dd[dd.LIME = 7] = "LIME", dd[dd.LIGHT_GRAY = 8] = "LIGHT_GRAY", dd[dd.LIGHT_BLUE = 9] = "LIGHT_BLUE", dd[dd.GREEN = 10] = "GREEN", dd[dd.GRAY = 11] = "GRAY", dd[dd.CYAN = 12] = "CYAN", dd[dd.BROWN = 13] = "BROWN", dd[dd.BLUE = 14] = "BLUE", dd[dd.BLACK = 15] = "BLACK", dd
      }({}),
      Kd = function(dd) {
        return dd[dd.ROTATION_1 = 0] = "ROTATION_1", dd[dd.ROTATION_2 = 1] = "ROTATION_2", dd[dd.ROTATION_3 = 2] = "ROTATION_3", dd[dd.ROTATION_4 = 3] = "ROTATION_4", dd
      }({}),
      hd = function(dd) {
        return dd[dd.KART = 0] = "KART", dd[dd.OFF_ROADER = 1] = "OFF_ROADER", dd[dd.CAR = 2] = "CAR", dd[dd.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", dd[dd.ARMORED_CAR = 4] = "ARMORED_CAR", dd[dd.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", dd[dd.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", dd[dd.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", dd
      }({});
    Wd.DEFAULT, Wd.BOAT, Fd.SPEED, Wd.GLIDER, Rd.DIAMOND, Wd.BALLOON, Xd.BLACK, Wd.SLEEPING, Kd.ROTATION_4, Wd.RIDING_MOB, Wd.CAR, hd.MOONSTONE_MINING_DRILL, Wd.HOVERCRAFT;
    let vd = function(dd) {
      return dd[dd.NORMAL = 0] = "NORMAL", dd[dd.GLIDING = 1] = "GLIDING", dd[dd.FLOATING = 2] = "FLOATING", dd
    }({})
  },
  39760: (dd, Od, md) => {
    md.d(Od, {
      b: () => Rd,
      d: () => Xd,
      g: () => Fd,
      i: () => Kd
    });
    var Wd = md(408);
    const Fd = ["Snowball", "Snowball Launcher", "Pebble", "Reinforced Pebble", "Ball", "Reinforced Ball", "Mango", "Moonstone Orb", ...md(699).B.map((dd => `${dd} Spawn Orb`)), "Fireball", "RPG", "Obby RPG", "Super RPG", "Grenade Launcher", "Iceball", "Bouncy Bomb", "Coconut", "Splash Speed Potion", "Splash Speed Potion II", "Splash Defense Potion", "Splash Defense Potion II", "Splash Strength Potion", "Splash Strength Potion II", "Splash Invisibility Potion", "Splash Jump Potion", "Splash Jump Potion II", "Splash Knockback Potion", "Splash Knockback Potion II", "Splash Poison Potion", "Splash Poison Potion II", "Splash Slowness Potion", "Splash Slowness Potion II", "Splash Weakness Potion", "Splash Weakness Potion II", "Splash Milk Potion", "Splash Instant Damage Potion", "Splash Instant Damage Potion II", "Splash Regeneration Potion", "Splash Regeneration Potion II", "Splash Instant Healing Potion", "Splash Instant Healing Potion II", "Splash Haste Potion", "Splash Haste Potion II", "Splash Shield Potion", "Splash Shield Potion II", "Splash Double Jump Potion", "Splash Heat Resistance Potion", "Splash X-Ray Vision Potion", "Splash Mining Yield Potion", "Splash Mining Yield Potion II", "Splash Brain Rot Potion", "Yellow Paintball Gun", "White Paintball Gun", "Red Paintball Gun", "Purple Paintball Gun", "Pink Paintball Gun", "Orange Paintball Gun", "Magenta Paintball Gun", "Lime Paintball Gun", "Light Gray Paintball Gun", "Light Blue Paintball Gun", "Green Paintball Gun", "Gray Paintball Gun", "Cyan Paintball Gun", "Brown Paintball Gun", "Blue Paintball Gun", "Black Paintball Gun", "Yellow Heavy Paintball Gun", "White Heavy Paintball Gun", "Red Heavy Paintball Gun", "Purple Heavy Paintball Gun", "Pink Heavy Paintball Gun", "Orange Heavy Paintball Gun", "Magenta Heavy Paintball Gun", "Lime Heavy Paintball Gun", "Light Gray Heavy Paintball Gun", "Light Blue Heavy Paintball Gun", "Green Heavy Paintball Gun", "Gray Heavy Paintball Gun", "Cyan Heavy Paintball Gun", "Brown Heavy Paintball Gun", "Blue Heavy Paintball Gun", "Black Heavy Paintball Gun", "Toxin Ball", "Splash Aura XP Potion", "Splash Aura XP Potion II", "Firecracker", "Rainbow Firecracker", "White Firecracker", "Orange Firecracker", "Magenta Firecracker", "Light Blue Firecracker", "Yellow Firecracker", "Lime Firecracker", "Pink Firecracker", "Gray Firecracker", "Light Gray Firecracker", "Cyan Firecracker", "Purple Firecracker", "Blue Firecracker", "Brown Firecracker", "Green Firecracker", "Red Firecracker", "Black Firecracker", "Firecracker Pebble", "Rainbow Firecracker Pebble", "White Firecracker Pebble", "Orange Firecracker Pebble", "Magenta Firecracker Pebble", "Light Blue Firecracker Pebble", "Yellow Firecracker Pebble", "Lime Firecracker Pebble", "Pink Firecracker Pebble", "Gray Firecracker Pebble", "Light Gray Firecracker Pebble", "Cyan Firecracker Pebble", "Purple Firecracker Pebble", "Blue Firecracker Pebble", "Brown Firecracker Pebble", "Green Firecracker Pebble", "Red Firecracker Pebble", "Black Firecracker Pebble", "Blinding Pebble", "Poop", "Wood Boomerang", "Stone Boomerang", "Iron Boomerang", "Gold Boomerang", "Diamond Boomerang", "Moonstone Boomerang", ...Wd.l, "67 Base Projectile", "67 Boosted Projectile", "Capitano Grenade", "Scatter Pellet", "Lucky Bomb", "Unlucky Bomb", "Swap Orb"],
      Rd = ["Obby RPG"];

    function Xd(dd) {
      const Od = dd.indexOf("|");
      return -1 === Od ? {
        item: dd,
        clientPredictedThrower: null
      } : {
        item: dd.slice(0, Od),
        clientPredictedThrower: dd.slice(Od + 1)
      }
    }
    const Kd = [...Fd, "Arrow", "Arrow of Speed", "Arrow of Slowness", "Arrow of Poison", "Arrow of Weakness", "Arrow of Knockback", "Arrow of Strength", "Arrow of Defense", "Arrow of Invisibility", "Arrow of Jumping", "Arrow of Milk", "Arrow of Instant Damage", "Arrow of Regeneration", "Arrow of Instant Healing", "Arrow of Haste", "Arrow of Shield", "Arrow of Double Jump", "Arrow of Heat Resistance", "Arrow of X-Ray Vision", "Arrow of Mining Yield", "Arrow of Brain Rot", "Arrow of Aura XP", "Bullet"]
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);