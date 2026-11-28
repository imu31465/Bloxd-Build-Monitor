export const id = 260;
export const ids = [260];
export const modules = {
  38644: (dd, Od, md) => {
    md.d(Od, {
      b: () => Rd,
      c: () => Wd,
      f: () => Fd
    });
    const Wd = 1 / 2.2,
      Fd = 2.2;
    Math.sqrt(5);
    let Rd = .001
  },
  38663: (dd, Od, md) => {
    function Wd(dd) {
      return parseInt(dd.toString().replace(/\W/g, ""))
    }

    function Fd(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(dd - Od) <= md
    }

    function Rd(dd, Od, md) {
      let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return dd < Od - Wd || dd > md + Wd
    }

    function Xd(dd, Od) {
      return dd === Od ? dd : Math.random() * (Od - dd) + dd
    }

    function Kd(dd, Od, md) {
      return dd + (Od - dd) * md
    }

    function hd(dd, Od, md) {
      let Wd = yd(Od - dd, 360);
      return Wd > 180 && (Wd -= 360), dd + Wd * od(md)
    }

    function vd(dd, Od, md) {
      let Wd;
      return Wd = dd != Od ? od((md - dd) / (Od - dd)) : 0, Wd
    }

    function Qd(dd, Od, md, Wd, Fd) {
      const Rd = Fd * Fd,
        Xd = Fd * Rd;
      return dd * (2 * Xd - 3 * Rd + 1) + md * (-2 * Xd + 3 * Rd) + Od * (Xd - 2 * Rd + Fd) + Wd * (Xd - Rd)
    }

    function td(dd, Od, md, Wd, Fd) {
      const Rd = Fd * Fd;
      return 6 * (Rd - Fd) * dd + (3 * Rd - 4 * Fd + 1) * Od + 6 * (-Rd + Fd) * md + (3 * Rd - 2 * Fd) * Wd
    }

    function od(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(md, Math.max(Od, dd))
    }

    function Nd(dd) {
      return dd -= 2 * Math.PI * Math.floor((dd + Math.PI) / (2 * Math.PI))
    }

    function qd(dd) {
      const Od = dd.toString(16);
      return dd <= 15 ? ("0" + Od).toUpperCase() : Od.toUpperCase()
    }

    function Hd(dd) {
      if (Math.log2) return Math.floor(Math.log2(dd));
      if (dd < 0) return NaN;
      if (0 === dd) return -1 / 0;
      let Od = 0;
      if (dd < 1) {
        for (; dd < 1;) Od++, dd *= 2;
        Od = -Od
      } else if (dd > 1)
        for (; dd > 1;) Od++, dd = Math.floor(dd / 2);
      return Od
    }

    function yd(dd, Od) {
      return dd - Math.floor(dd / Od) * Od
    }

    function bd(dd, Od, md) {
      return (dd - Od) / (md - Od)
    }

    function Td(dd, Od, md) {
      return dd * (md - Od) + Od
    }

    function pd(dd, Od) {
      let md = yd(Od - dd, 360);
      return md > 180 && (md -= 360), md
    }

    function Yd(dd, Od) {
      const md = yd(dd, 2 * Od);
      return Od - Math.abs(md - Od)
    }

    function gd(dd, Od, md) {
      let Wd = od(md);
      return Wd = -2 * Wd * Wd * Wd + 3 * Wd * Wd, Od * Wd + dd * (1 - Wd)
    }

    function wd(dd, Od, md) {
      let Wd;
      return Wd = Math.abs(Od - dd) <= md ? Od : dd + Math.sign(Od - dd) * md, Wd
    }

    function Ed(dd, Od, md) {
      const Wd = pd(dd, Od);
      let Fd;
      return Fd = -md < Wd && Wd < md ? Od : wd(dd, Od = dd + Wd, md), Fd
    }

    function Jd(dd, Od, md) {
      return (dd - Od) / (md - Od)
    }

    function Ud(dd, Od, md) {
      return (md - Od) * dd + Od
    }

    function xd(dd, Od) {
      const md = dd % Od;
      return 0 === md ? Od : xd(Od, md)
    }
    md.r(Od), md.d(Od, {
      Clamp: () => od,
      DeltaAngle: () => pd,
      Denormalize: () => Td,
      ExtractAsInt: () => Wd,
      Hermite: () => Qd,
      Hermite1stDerivative: () => td,
      HighestCommonFactor: () => xd,
      ILog2: () => Hd,
      InverseLerp: () => vd,
      Lerp: () => Kd,
      LerpAngle: () => hd,
      MoveTowards: () => wd,
      MoveTowardsAngle: () => Ed,
      Normalize: () => bd,
      NormalizeRadians: () => Nd,
      OutsideRange: () => Rd,
      PercentToRange: () => Ud,
      PingPong: () => Yd,
      RandomRange: () => Xd,
      RangeToPercent: () => Jd,
      Repeat: () => yd,
      SmoothStep: () => gd,
      ToHex: () => qd,
      WithinEpsilon: () => Fd
    })
  },
  38627: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      Matrix: () => Wd.d,
      Quaternion: () => Wd.e,
      RegisterMathVector: () => Wd.f,
      TmpVectors: () => Wd.h,
      Vector2: () => Wd.i,
      Cq: () => Wd.j,
      Vector4: () => Wd.k
    });
    var Wd = md(38636);
    (0, Wd.f)()
  },
  38647: (dd, Od, md) => {
    function Wd(dd, Od) {
      const md = [];
      for (let Wd = 0; Wd < dd; ++Wd) md.push(Od());
      return md
    }

    function Fd(dd, Od) {
      return Wd(dd, Od)
    }
    md.d(Od, {
      e: () => Wd,
      f: () => Fd,
      i: () => Xd
    });
    const Rd = ["push", "splice", "pop", "shift", "unshift"];

    function Xd(dd, Od) {
      const md = Rd.map((md => function(dd, Od, md) {
        const Wd = dd[Od];
        if ("function" !== typeof Wd) return null;
        const Fd = function() {
          const Wd = dd.length,
            Rd = Fd.previous.apply(dd, arguments);
          return md(Od, Wd), Rd
        };
        return Wd.next = Fd, Fd.previous = Wd, dd[Od] = Fd, () => {
          const md = Fd.previous;
          if (!md) return;
          const Wd = Fd.next;
          Wd ? (md.next = Wd, Wd.previous = md) : (md.next = void 0, dd[Od] = md), Fd.next = void 0, Fd.previous = void 0
        }
      }(dd, md, Od)));
      return () => {
        for (const dd of md) dd?.()
      }
    }
  },
  38669: (dd, Od, md) => {
    md.d(Od, {
      c: () => Rd,
      e: () => Fd
    });
    const Wd = {};

    function Fd(dd, Od) {
      Wd[dd] = Od
    }

    function Rd(dd) {
      return Wd[dd]
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);