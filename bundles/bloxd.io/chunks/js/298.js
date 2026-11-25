export const id = 298;
export const ids = [298];
export const modules = {
  42017: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => aM,
      e: () => jM,
      g: () => PM
    });
    let OM = null,
      SM = null;

    function jM(MM, rM) {
      return OM = MM, SM = null, PM(rM), () => {
        OM === MM && (OM = null, SM = null)
      }
    }

    function aM() {
      return null === SM ? null : {
        ...SM
      }
    }

    function PM(MM) {
      var rM;
      null !== (rM = OM) && void 0 !== rM && rM(MM) && (SM = {
        ...MM
      })
    }
  },
  42031: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => SM,
      g: () => jM
    });
    let OM = null;

    function SM(MM, rM) {
      OM = {
        conn: MM,
        reason: rM
      }
    }

    function jM(MM) {
      var rM;
      const iM = (null === (rM = OM) || void 0 === rM ? void 0 : rM.conn) === MM ? OM.reason : null;
      return OM = null, iM
    }
  },
  42081: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => jM,
      c: () => SM
    });
    let OM = {
      fire: () => {},
      close: () => {}
    };

    function SM(MM) {
      OM = MM
    }

    function jM() {
      return OM
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);