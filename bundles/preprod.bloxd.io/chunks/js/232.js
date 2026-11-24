export const id = 232;
export const ids = [232];
export const modules = {
  37324: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Ip,
      d: () => Op,
      g: () => op
    });
    const Op = 1 / 2.2,
      op = 2.2;
    Math.sqrt(5);
    let Ip = .001
  },
  37356: (pp, ip, cp) => {
    function Op(pp) {
      return parseInt(pp.toString().replace(/\W/g, ""))
    }

    function op(pp, ip) {
      let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(pp - ip) <= cp
    }

    function Ip(pp, ip, cp) {
      let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return pp < ip - Op || pp > cp + Op
    }

    function Sp(pp, ip) {
      return pp === ip ? pp : Math.random() * (ip - pp) + pp
    }

    function xp(pp, ip, cp) {
      return pp + (ip - pp) * cp
    }

    function Lp(pp, ip, cp) {
      let Op = wp(ip - pp, 360);
      return Op > 180 && (Op -= 360), pp + Op * Pp(cp)
    }

    function Yp(pp, ip, cp) {
      let Op;
      return Op = pp != ip ? Pp((cp - pp) / (ip - pp)) : 0, Op
    }

    function Dp(pp, ip, cp, Op, op) {
      const Ip = op * op,
        Sp = op * Ip;
      return pp * (2 * Sp - 3 * Ip + 1) + cp * (-2 * Sp + 3 * Ip) + ip * (Sp - 2 * Ip + op) + Op * (Sp - Ip)
    }

    function Ap(pp, ip, cp, Op, op) {
      const Ip = op * op;
      return 6 * (Ip - op) * pp + (3 * Ip - 4 * op + 1) * ip + 6 * (-Ip + op) * cp + (3 * Ip - 2 * op) * Op
    }

    function Pp(pp) {
      let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(cp, Math.max(ip, pp))
    }

    function Wp(pp) {
      return pp -= 2 * Math.PI * Math.floor((pp + Math.PI) / (2 * Math.PI))
    }

    function yp(pp) {
      const ip = pp.toString(16);
      return pp <= 15 ? ("0" + ip).toUpperCase() : ip.toUpperCase()
    }

    function Up(pp) {
      if (Math.log2) return Math.floor(Math.log2(pp));
      if (pp < 0) return NaN;
      if (0 === pp) return -1 / 0;
      let ip = 0;
      if (pp < 1) {
        for (; pp < 1;) ip++, pp *= 2;
        ip = -ip
      } else if (pp > 1)
        for (; pp > 1;) ip++, pp = Math.floor(pp / 2);
      return ip
    }

    function wp(pp, ip) {
      return pp - Math.floor(pp / ip) * ip
    }

    function vp(pp, ip, cp) {
      return (pp - ip) / (cp - ip)
    }

    function tp(pp, ip, cp) {
      return pp * (cp - ip) + ip
    }

    function Hp(pp, ip) {
      let cp = wp(ip - pp, 360);
      return cp > 180 && (cp -= 360), cp
    }

    function dp(pp, ip) {
      const cp = wp(pp, 2 * ip);
      return ip - Math.abs(cp - ip)
    }

    function ep(pp, ip, cp) {
      let Op = Pp(cp);
      return Op = -2 * Op * Op * Op + 3 * Op * Op, ip * Op + pp * (1 - Op)
    }

    function jp(pp, ip, cp) {
      let Op;
      return Op = Math.abs(ip - pp) <= cp ? ip : pp + Math.sign(ip - pp) * cp, Op
    }

    function kp(pp, ip, cp) {
      const Op = Hp(pp, ip);
      let op;
      return op = -cp < Op && Op < cp ? ip : jp(pp, ip = pp + Op, cp), op
    }

    function mp(pp, ip, cp) {
      return (pp - ip) / (cp - ip)
    }

    function Rp(pp, ip, cp) {
      return (cp - ip) * pp + ip
    }

    function qp(pp, ip) {
      const cp = pp % ip;
      return 0 === cp ? ip : qp(ip, cp)
    }
    cp.r(ip), cp.d(ip, {
      Clamp: () => Pp,
      DeltaAngle: () => Hp,
      Denormalize: () => tp,
      ExtractAsInt: () => Op,
      Hermite: () => Dp,
      Hermite1stDerivative: () => Ap,
      HighestCommonFactor: () => qp,
      ILog2: () => Up,
      InverseLerp: () => Yp,
      Lerp: () => xp,
      LerpAngle: () => Lp,
      MoveTowards: () => jp,
      MoveTowardsAngle: () => kp,
      Normalize: () => vp,
      NormalizeRadians: () => Wp,
      OutsideRange: () => Ip,
      PercentToRange: () => Rp,
      PingPong: () => dp,
      RandomRange: () => Sp,
      RangeToPercent: () => mp,
      Repeat: () => wp,
      SmoothStep: () => ep,
      ToHex: () => yp,
      WithinEpsilon: () => op
    })
  },
  37313: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      Matrix: () => Op.b,
      Quaternion: () => Op.f,
      RegisterMathVector: () => Op.h,
      TmpVectors: () => Op.i,
      Vector2: () => Op.l,
      Zy: () => Op.o,
      Vector4: () => Op.q
    });
    var Op = cp(37320);
    (0, Op.h)()
  },
  37329: (pp, ip, cp) => {
    function Op(pp, ip) {
      const cp = [];
      for (let Op = 0; Op < pp; ++Op) cp.push(ip());
      return cp
    }

    function op(pp, ip) {
      return Op(pp, ip)
    }
    cp.d(ip, {
      d: () => Op,
      g: () => op,
      j: () => Sp
    });
    const Ip = ["push", "splice", "pop", "shift", "unshift"];

    function Sp(pp, ip) {
      const cp = Ip.map((cp => function(pp, ip, cp) {
        const Op = pp[ip];
        if ("function" !== typeof Op) return null;
        const op = function() {
          const Op = pp.length,
            Ip = op.previous.apply(pp, arguments);
          return cp(ip, Op), Ip
        };
        return Op.next = op, op.previous = Op, pp[ip] = op, () => {
          const cp = op.previous;
          if (!cp) return;
          const Op = op.next;
          Op ? (cp.next = Op, Op.previous = cp) : (cp.next = void 0, pp[ip] = cp), op.next = void 0, op.previous = void 0
        }
      }(pp, cp, ip)));
      return () => {
        for (const pp of cp) pp?.()
      }
    }
  },
  37368: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Ip,
      g: () => op
    });
    const Op = {};

    function op(pp, ip) {
      Op[pp] = ip
    }

    function Ip(pp) {
      return Op[pp]
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);