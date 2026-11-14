export const id = 202;
export const ids = [202];
export const modules = {
  35625: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => uF,
      d: () => CF,
      f: () => AF
    });
    const CF = 1 / 2.2,
      AF = 2.2;
    Math.sqrt(5);
    let uF = .001
  },
  35650: (FF, WF, SF) => {
    function CF(FF) {
      return parseInt(FF.toString().replace(/\W/g, ""))
    }

    function AF(FF, WF) {
      let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(FF - WF) <= SF
    }

    function uF(FF, WF, SF) {
      let CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return FF < WF - CF || FF > SF + CF
    }

    function hF(FF, WF) {
      return FF === WF ? FF : Math.random() * (WF - FF) + FF
    }

    function bW(FF, WF, SF) {
      return FF + (WF - FF) * SF
    }

    function dF(FF, WF, SF) {
      let CF = gW(WF - FF, 360);
      return CF > 180 && (CF -= 360), FF + CF * eF(SF)
    }

    function PF(FF, WF, SF) {
      let CF;
      return CF = FF != WF ? eF((SF - FF) / (WF - FF)) : 0, CF
    }

    function RF(FF, WF, SF, CF, AF) {
      const uF = AF * AF,
        hF = AF * uF;
      return FF * (2 * hF - 3 * uF + 1) + SF * (-2 * hF + 3 * uF) + WF * (hF - 2 * uF + AF) + CF * (hF - uF)
    }

    function iW(FF, WF, SF, CF, AF) {
      const uF = AF * AF;
      return 6 * (uF - AF) * FF + (3 * uF - 4 * AF + 1) * WF + 6 * (-uF + AF) * SF + (3 * uF - 2 * AF) * CF
    }

    function eF(FF) {
      let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(SF, Math.max(WF, FF))
    }

    function EF(FF) {
      return FF -= 2 * Math.PI * Math.floor((FF + Math.PI) / (2 * Math.PI))
    }

    function QF(FF) {
      const WF = FF.toString(16);
      return FF <= 15 ? ("0" + WF).toUpperCase() : WF.toUpperCase()
    }

    function rW(FF) {
      if (Math.log2) return Math.floor(Math.log2(FF));
      if (FF < 0) return NaN;
      if (0 === FF) return -1 / 0;
      let WF = 0;
      if (FF < 1) {
        for (; FF < 1;) WF++, FF *= 2;
        WF = -WF
      } else if (FF > 1)
        for (; FF > 1;) WF++, FF = Math.floor(FF / 2);
      return WF
    }

    function gW(FF, WF) {
      return FF - Math.floor(FF / WF) * WF
    }

    function tW(FF, WF, SF) {
      return (FF - WF) / (SF - WF)
    }

    function TF(FF, WF, SF) {
      return FF * (SF - WF) + WF
    }

    function aW(FF, WF) {
      let SF = gW(WF - FF, 360);
      return SF > 180 && (SF -= 360), SF
    }

    function kW(FF, WF) {
      const SF = gW(FF, 2 * WF);
      return WF - Math.abs(SF - WF)
    }

    function qW(FF, WF, SF) {
      let CF = eF(SF);
      return CF = -2 * CF * CF * CF + 3 * CF * CF, WF * CF + FF * (1 - CF)
    }

    function VF(FF, WF, SF) {
      let CF;
      return CF = Math.abs(WF - FF) <= SF ? WF : FF + Math.sign(WF - FF) * SF, CF
    }

    function NF(FF, WF, SF) {
      const CF = aW(FF, WF);
      let AF;
      return AF = -SF < CF && CF < SF ? WF : VF(FF, WF = FF + CF, SF), AF
    }

    function DF(FF, WF, SF) {
      return (FF - WF) / (SF - WF)
    }

    function LF(FF, WF, SF) {
      return (SF - WF) * FF + WF
    }

    function mW(FF, WF) {
      const SF = FF % WF;
      return 0 === SF ? WF : mW(WF, SF)
    }
    SF.r(WF), SF.d(WF, {
      Clamp: () => eF,
      DeltaAngle: () => aW,
      Denormalize: () => TF,
      ExtractAsInt: () => CF,
      Hermite: () => RF,
      Hermite1stDerivative: () => iW,
      HighestCommonFactor: () => mW,
      ILog2: () => rW,
      InverseLerp: () => PF,
      Lerp: () => bW,
      LerpAngle: () => dF,
      MoveTowards: () => VF,
      MoveTowardsAngle: () => NF,
      Normalize: () => tW,
      NormalizeRadians: () => EF,
      OutsideRange: () => uF,
      PercentToRange: () => LF,
      PingPong: () => kW,
      RandomRange: () => hF,
      RangeToPercent: () => DF,
      Repeat: () => gW,
      SmoothStep: () => qW,
      ToHex: () => QF,
      WithinEpsilon: () => AF
    })
  },
  35617: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      Matrix: () => CF.b,
      Quaternion: () => CF.e,
      RegisterMathVector: () => CF.g,
      TmpVectors: () => CF.j,
      Vector2: () => CF.n,
      HC: () => CF.r,
      Vector4: () => CF.v
    });
    var CF = SF(35623);
    (0, CF.g)()
  },
  35631: (FF, WF, SF) => {
    function CF(FF, WF) {
      const SF = [];
      for (let CF = 0; CF < FF; ++CF) SF.push(WF());
      return SF
    }

    function AF(FF, WF) {
      return CF(FF, WF)
    }
    SF.d(WF, {
      e: () => CF,
      g: () => AF,
      h: () => hF
    });
    const uF = ["push", "splice", "pop", "shift", "unshift"];

    function hF(FF, WF) {
      const SF = uF.map((SF => function(FF, WF, SF) {
        const CF = FF[WF];
        if ("function" !== typeof CF) return null;
        const AF = function() {
          const CF = FF.length,
            uF = AF.previous.apply(FF, arguments);
          return SF(WF, CF), uF
        };
        return CF.next = AF, AF.previous = CF, FF[WF] = AF, () => {
          const SF = AF.previous;
          if (!SF) return;
          const CF = AF.next;
          CF ? (SF.next = CF, CF.previous = SF) : (SF.next = void 0, FF[WF] = SF), AF.next = void 0, AF.previous = void 0
        }
      }(FF, SF, WF)));
      return () => {
        for (const FF of SF) FF?.()
      }
    }
  },
  35660: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => uF,
      f: () => AF
    });
    const CF = {};

    function AF(FF, WF) {
      CF[FF] = WF
    }

    function uF(FF) {
      return CF[FF]
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);