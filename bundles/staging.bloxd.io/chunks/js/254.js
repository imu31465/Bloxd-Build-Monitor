export const id = 254;
export const ids = [254];
export const modules = {
  37920: (ee, ie, He) => {
    He.d(ie, {
      b: () => Me,
      d: () => ye,
      h: () => be
    });
    const ye = 1 / 2.2,
      be = 2.2;
    Math.sqrt(5);
    let Me = .001
  },
  37938: (ee, ie, He) => {
    function ye(ee) {
      return parseInt(ee.toString().replace(/\W/g, ""))
    }

    function be(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(ee - ie) <= He
    }

    function Me(ee, ie, He) {
      let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return ee < ie - ye || ee > He + ye
    }

    function Ke(ee, ie) {
      return ee === ie ? ee : Math.random() * (ie - ee) + ee
    }

    function Ue(ee, ie, He) {
      return ee + (ie - ee) * He
    }

    function Fe(ee, ie, He) {
      let ye = pe(ie - ee, 360);
      return ye > 180 && (ye -= 360), ee + ye * ke(He)
    }

    function Je(ee, ie, He) {
      let ye;
      return ye = ee != ie ? ke((He - ee) / (ie - ee)) : 0, ye
    }

    function oe(ee, ie, He, ye, be) {
      const Me = be * be,
        Ke = be * Me;
      return ee * (2 * Ke - 3 * Me + 1) + He * (-2 * Ke + 3 * Me) + ie * (Ke - 2 * Me + be) + ye * (Ke - Me)
    }

    function Re(ee, ie, He, ye, be) {
      const Me = be * be;
      return 6 * (Me - be) * ee + (3 * Me - 4 * be + 1) * ie + 6 * (-Me + be) * He + (3 * Me - 2 * be) * ye
    }

    function ke(ee) {
      let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(He, Math.max(ie, ee))
    }

    function qe(ee) {
      return ee -= 2 * Math.PI * Math.floor((ee + Math.PI) / (2 * Math.PI))
    }

    function fe(ee) {
      const ie = ee.toString(16);
      return ee <= 15 ? ("0" + ie).toUpperCase() : ie.toUpperCase()
    }

    function Te(ee) {
      if (Math.log2) return Math.floor(Math.log2(ee));
      if (ee < 0) return NaN;
      if (0 === ee) return -1 / 0;
      let ie = 0;
      if (ee < 1) {
        for (; ee < 1;) ie++, ee *= 2;
        ie = -ie
      } else if (ee > 1)
        for (; ee > 1;) ie++, ee = Math.floor(ee / 2);
      return ie
    }

    function pe(ee, ie) {
      return ee - Math.floor(ee / ie) * ie
    }

    function Xe(ee, ie, He) {
      return (ee - ie) / (He - ie)
    }

    function ze(ee, ie, He) {
      return ee * (He - ie) + ie
    }

    function Be(ee, ie) {
      let He = pe(ie - ee, 360);
      return He > 180 && (He -= 360), He
    }

    function Ee(ee, ie) {
      const He = pe(ee, 2 * ie);
      return ie - Math.abs(He - ie)
    }

    function ge(ee, ie, He) {
      let ye = ke(He);
      return ye = -2 * ye * ye * ye + 3 * ye * ye, ie * ye + ee * (1 - ye)
    }

    function Oe(ee, ie, He) {
      let ye;
      return ye = Math.abs(ie - ee) <= He ? ie : ee + Math.sign(ie - ee) * He, ye
    }

    function de(ee, ie, He) {
      const ye = Be(ee, ie);
      let be;
      return be = -He < ye && ye < He ? ie : Oe(ee, ie = ee + ye, He), be
    }

    function We(ee, ie, He) {
      return (ee - ie) / (He - ie)
    }

    function te(ee, ie, He) {
      return (He - ie) * ee + ie
    }

    function Ze(ee, ie) {
      const He = ee % ie;
      return 0 === He ? ie : Ze(ie, He)
    }
    He.r(ie), He.d(ie, {
      Clamp: () => ke,
      DeltaAngle: () => Be,
      Denormalize: () => ze,
      ExtractAsInt: () => ye,
      Hermite: () => oe,
      Hermite1stDerivative: () => Re,
      HighestCommonFactor: () => Ze,
      ILog2: () => Te,
      InverseLerp: () => Je,
      Lerp: () => Ue,
      LerpAngle: () => Fe,
      MoveTowards: () => Oe,
      MoveTowardsAngle: () => de,
      Normalize: () => Xe,
      NormalizeRadians: () => qe,
      OutsideRange: () => Me,
      PercentToRange: () => te,
      PingPong: () => Ee,
      RandomRange: () => Ke,
      RangeToPercent: () => We,
      Repeat: () => pe,
      SmoothStep: () => ge,
      ToHex: () => fe,
      WithinEpsilon: () => be
    })
  },
  37913: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      Matrix: () => ye.b,
      Quaternion: () => ye.f,
      RegisterMathVector: () => ye.h,
      TmpVectors: () => ye.j,
      Vector2: () => ye.n,
      rf: () => ye.p,
      Vector4: () => ye.s
    });
    var ye = He(37917);
    (0, ye.h)()
  },
  37925: (ee, ie, He) => {
    function ye(ee, ie) {
      const He = [];
      for (let ye = 0; ye < ee; ++ye) He.push(ie());
      return He
    }

    function be(ee, ie) {
      return ye(ee, ie)
    }
    He.d(ie, {
      c: () => ye,
      g: () => be,
      j: () => Ke
    });
    const Me = ["push", "splice", "pop", "shift", "unshift"];

    function Ke(ee, ie) {
      const He = Me.map((He => function(ee, ie, He) {
        const ye = ee[ie];
        if ("function" !== typeof ye) return null;
        const be = function() {
          const ye = ee.length,
            Me = be.previous.apply(ee, arguments);
          return He(ie, ye), Me
        };
        return ye.next = be, be.previous = ye, ee[ie] = be, () => {
          const He = be.previous;
          if (!He) return;
          const ye = be.next;
          ye ? (He.next = ye, ye.previous = He) : (He.next = void 0, ee[ie] = He), be.next = void 0, be.previous = void 0
        }
      }(ee, He, ie)));
      return () => {
        for (const ee of He) ee?.()
      }
    }
  },
  37949: (ee, ie, He) => {
    He.d(ie, {
      c: () => Me,
      e: () => be
    });
    const ye = {};

    function be(ee, ie) {
      ye[ee] = ie
    }

    function Me(ee) {
      return ye[ee]
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);