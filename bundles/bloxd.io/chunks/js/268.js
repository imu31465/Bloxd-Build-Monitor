export const id = 268;
export const ids = [268];
export const modules = {
  40501: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => bk,
      g: () => Sk,
      h: () => rk
    });
    let Dk = null,
      fk = null;

    function Sk(kk, ek) {
      return Dk = kk, fk = null, rk(ek), () => {
        Dk === kk && (Dk = null, fk = null)
      }
    }

    function bk() {
      return null === fk ? null : {
        ...fk
      }
    }

    function rk(kk) {
      var ek;
      null !== (ek = Dk) && void 0 !== ek && ek(kk) && (fk = {
        ...kk
      })
    }
  },
  40513: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => fk,
      e: () => Sk
    });
    let Dk = null;

    function fk(kk, ek) {
      Dk = {
        conn: kk,
        reason: ek
      }
    }

    function Sk(kk) {
      var ek;
      const ik = (null === (ek = Dk) || void 0 === ek ? void 0 : ek.conn) === kk ? Dk.reason : null;
      return Dk = null, ik
    }
  },
  40578: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => Sk,
      h: () => fk
    });
    let Dk = {
      fire: () => {},
      close: () => {}
    };

    function fk(kk) {
      Dk = kk
    }

    function Sk() {
      return Dk
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);