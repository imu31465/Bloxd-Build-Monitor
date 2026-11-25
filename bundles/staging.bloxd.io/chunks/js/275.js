export const id = 275;
export const ids = [275];
export const modules = {
  41138: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Xu,
      e: () => Zu,
      h: () => lu
    });
    let su = null,
      Uu = null;

    function Zu(uu, Eu) {
      return su = uu, Uu = null, lu(Eu), () => {
        su === uu && (su = null, Uu = null)
      }
    }

    function Xu() {
      return null === Uu ? null : {
        ...Uu
      }
    }

    function lu(uu) {
      var Eu;
      null !== (Eu = su) && void 0 !== Eu && Eu(uu) && (Uu = {
        ...uu
      })
    }
  },
  41149: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Uu,
      f: () => Zu
    });
    let su = null;

    function Uu(uu, Eu) {
      su = {
        conn: uu,
        reason: Eu
      }
    }

    function Zu(uu) {
      var Eu;
      const ju = (null === (Eu = su) || void 0 === Eu ? void 0 : Eu.conn) === uu ? su.reason : null;
      return su = null, ju
    }
  },
  41206: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Zu,
      d: () => Uu
    });
    let su = {
      fire: () => {},
      close: () => {}
    };

    function Uu(uu) {
      su = uu
    }

    function Zu() {
      return su
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);