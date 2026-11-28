export const id = 20;
export const ids = [20];
export const modules = {
  38259: (dd, Od, md) => {
    md.d(Od, {
      d: () => Xd,
      g: () => Fd,
      h: () => Rd
    });
    var Wd = md(66);

    function Fd(dd) {
      return Kd(dd, hd)
    }

    function Rd(dd) {
      return Kd(dd, vd)
    }

    function Xd(dd) {
      return `${Math.floor(dd/60)}:${String(dd%60).padStart(2,"0")}`
    }

    function Kd(dd, Od) {
      const [, md] = (0, Wd.useState)(null);
      return (0, Wd.useEffect)((() => {
        if (0 === dd) return;
        const Wd = window.setInterval((() => {
          const Wd = Od(dd);
          md((Od => (null === Od || void 0 === Od ? void 0 : Od.endsAt) === dd && Od.value === Wd ? Od : {
            endsAt: dd,
            value: Wd
          }))
        }), 250);
        return () => {
          window.clearInterval(Wd)
        }
      }), [dd, Od]), Od(dd)
    }

    function hd(dd) {
      return (dd - performance.now()) / 1e3
    }

    function vd(dd) {
      return Math.max(0, Math.ceil(hd(dd)))
    }
  },
  38298: (dd, Od, md) => {
    md.d(Od, {
      e: () => Fd
    });
    const Wd = [{
      maxDist: 30,
      timeBetweenSoftChecks: 1e3,
      softUpdateDist: 2,
      hardUpdateDist: 10
    }, {
      maxDist: 200,
      timeBetweenSoftChecks: 2e3,
      softUpdateDist: 5,
      hardUpdateDist: 20
    }, {
      maxDist: 1 / 0,
      timeBetweenSoftChecks: 5e3,
      softUpdateDist: 30,
      hardUpdateDist: 100
    }];

    function Fd(dd, Od, md) {
      const Fd = Math.abs(dd - Od),
        Rd = Date.now() - md;
      for (const Xd of Wd)
        if (dd < Xd.maxDist) return Fd >= Xd.hardUpdateDist || Rd > Xd.timeBetweenSoftChecks && Fd >= Xd.softUpdateDist;
      return !1
    }
  },
  40023: (dd, Od, md) => {
    md.d(Od, {
      c: () => Xd,
      d: () => Kd
    });
    var Wd = md(405),
      Fd = md(35549),
      Rd = md(4509);

    function Xd(dd) {
      const Od = (0, Rd.d)(dd);
      return (0, Wd.Kb)(dd, void 0 === Od ? void 0 : (0, Fd.displayNameOf)(Od))
    }

    function Kd(dd, Od) {
      return dd(Xd(Od))
    }
  },
  40026: (dd, Od, md) => {
    md.d(Od, {
      b: () => Rd,
      d: () => Kd,
      g: () => Xd
    });
    var Wd = md(3505);
    const Fd = "(max-height: 420px), (max-width: 650px)";

    function Rd() {
      return (0, Wd.d)(Fd)
    }

    function Xd(dd) {
      return (0, Wd.j)(Fd, dd)
    }

    function Kd() {
      return (0, Wd.f)(Fd)
    }
  },
  40028: (dd, Od, md) => {
    md.d(Od, {
      e: () => Xd,
      h: () => Rd
    });
    const Wd = new WeakMap;

    function Fd(dd) {
      let Od = Wd.get(dd);
      return Od || (Od = {
        hidden: dd.hidden,
        x: NaN,
        y: NaN
      }, Wd.set(dd, Od)), Od
    }

    function Rd(dd, Od) {
      const md = Fd(dd);
      md.hidden !== Od && (md.hidden = Od, dd.hidden = Od)
    }

    function Xd(dd, Od, md) {
      const Wd = Fd(dd);
      Wd.x === Od && Wd.y === md || (Wd.x = Od, Wd.y = md, dd.style.translate = `${Od}vw ${md}vh`)
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);