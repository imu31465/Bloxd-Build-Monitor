/*! For license information please see sn3sfj.119.6ce20181.chunk.js.LICENSE.txt */
export const id = 119;
export const ids = [119];
export const modules = {
  6328: function(pp, ip, cp) {
    var Op;
    ! function() {
      var op, Ip = 1e9,
        Sp = {
          precision: 20,
          rounding: 4,
          toExpNeg: -7,
          toExpPos: 21,
          LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
        },
        xp = !0,
        Lp = "[DecimalError] ",
        Yp = Lp + "Invalid argument: ",
        Dp = Lp + "Exponent out of range: ",
        Ap = Math.floor,
        Pp = Math.pow,
        Wp = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        yp = 1e7,
        Up = 9007199254740991,
        wp = Ap(1286742750677284.5),
        vp = {};

      function tp(pp, ip) {
        var cp, Op, op, Ip, Sp, Lp, Yp, Dp, Ap = pp.constructor,
          Pp = Ap.precision;
        if (!pp.s || !ip.s) return ip.s || (ip = new Ap(pp)), xp ? Cp(ip, Pp) : ip;
        if (Yp = pp.d, Dp = ip.d, Sp = pp.e, op = ip.e, Yp = Yp.slice(), Ip = Sp - op) {
          for (Ip < 0 ? (Op = Yp, Ip = -Ip, Lp = Dp.length) : (Op = Dp, op = Sp, Lp = Yp.length), Ip > (Lp = (Sp = Math.ceil(Pp / 7)) > Lp ? Sp + 1 : Lp + 1) && (Ip = Lp, Op.length = 1), Op.reverse(); Ip--;) Op.push(0);
          Op.reverse()
        }
        for ((Lp = Yp.length) - (Ip = Dp.length) < 0 && (Ip = Lp, Op = Dp, Dp = Yp, Yp = Op), cp = 0; Ip;) cp = (Yp[--Ip] = Yp[Ip] + Dp[Ip] + cp) / yp | 0, Yp[Ip] %= yp;
        for (cp && (Yp.unshift(cp), ++op), Lp = Yp.length; 0 == Yp[--Lp];) Yp.pop();
        return ip.d = Yp, ip.e = op, xp ? Cp(ip, Pp) : ip
      }

      function Hp(pp, ip, cp) {
        if (pp !== ~~pp || pp < ip || pp > cp) throw Error(Yp + pp)
      }

      function dp(pp) {
        var ip, cp, Op, op = pp.length - 1,
          Ip = "",
          Sp = pp[0];
        if (op > 0) {
          for (Ip += Sp, ip = 1; ip < op; ip++)(cp = 7 - (Op = pp[ip] + "").length) && (Ip += Rp(cp)), Ip += Op;
          (cp = 7 - (Op = (Sp = pp[ip]) + "").length) && (Ip += Rp(cp))
        } else if (0 === Sp) return "0";
        for (; Sp % 10 === 0;) Sp /= 10;
        return Ip + Sp
      }
      vp.absoluteValue = vp.abs = function() {
        var pp = new this.constructor(this);
        return pp.s && (pp.s = 1), pp
      }, vp.comparedTo = vp.cmp = function(pp) {
        var ip, cp, Op, op, Ip = this;
        if (pp = new Ip.constructor(pp), Ip.s !== pp.s) return Ip.s || -pp.s;
        if (Ip.e !== pp.e) return Ip.e > pp.e ^ Ip.s < 0 ? 1 : -1;
        for (ip = 0, cp = (Op = Ip.d.length) < (op = pp.d.length) ? Op : op; ip < cp; ++ip)
          if (Ip.d[ip] !== pp.d[ip]) return Ip.d[ip] > pp.d[ip] ^ Ip.s < 0 ? 1 : -1;
        return Op === op ? 0 : Op > op ^ Ip.s < 0 ? 1 : -1
      }, vp.decimalPlaces = vp.dp = function() {
        var pp = this,
          ip = pp.d.length - 1,
          cp = 7 * (ip - pp.e);
        if (ip = pp.d[ip])
          for (; ip % 10 == 0; ip /= 10) cp--;
        return cp < 0 ? 0 : cp
      }, vp.dividedBy = vp.div = function(pp) {
        return ep(this, new this.constructor(pp))
      }, vp.dividedToIntegerBy = vp.idiv = function(pp) {
        var ip = this.constructor;
        return Cp(ep(this, new ip(pp), 0, 1), ip.precision)
      }, vp.equals = vp.eq = function(pp) {
        return !this.cmp(pp)
      }, vp.exponent = function() {
        return kp(this)
      }, vp.greaterThan = vp.gt = function(pp) {
        return this.cmp(pp) > 0
      }, vp.greaterThanOrEqualTo = vp.gte = function(pp) {
        return this.cmp(pp) >= 0
      }, vp.isInteger = vp.isint = function() {
        return this.e > this.d.length - 2
      }, vp.isNegative = vp.isneg = function() {
        return this.s < 0
      }, vp.isPositive = vp.ispos = function() {
        return this.s > 0
      }, vp.isZero = function() {
        return 0 === this.s
      }, vp.lessThan = vp.lt = function(pp) {
        return this.cmp(pp) < 0
      }, vp.lessThanOrEqualTo = vp.lte = function(pp) {
        return this.cmp(pp) < 1
      }, vp.logarithm = vp.log = function(pp) {
        var ip, cp = this,
          Op = cp.constructor,
          Ip = Op.precision,
          Sp = Ip + 5;
        if (void 0 === pp) pp = new Op(10);
        else if ((pp = new Op(pp)).s < 1 || pp.eq(op)) throw Error(Lp + "NaN");
        if (cp.s < 1) throw Error(Lp + (cp.s ? "NaN" : "-Infinity"));
        return cp.eq(op) ? new Op(0) : (xp = !1, ip = ep(qp(cp, Sp), qp(pp, Sp), Sp), xp = !0, Cp(ip, Ip))
      }, vp.minus = vp.sub = function(pp) {
        var ip = this;
        return pp = new ip.constructor(pp), ip.s == pp.s ? Ep(ip, pp) : tp(ip, (pp.s = -pp.s, pp))
      }, vp.modulo = vp.mod = function(pp) {
        var ip, cp = this,
          Op = cp.constructor,
          op = Op.precision;
        if (!(pp = new Op(pp)).s) throw Error(Lp + "NaN");
        return cp.s ? (xp = !1, ip = ep(cp, pp, 0, 1).times(pp), xp = !0, cp.minus(ip)) : Cp(new Op(cp), op)
      }, vp.naturalExponential = vp.exp = function() {
        return jp(this)
      }, vp.naturalLogarithm = vp.ln = function() {
        return qp(this)
      }, vp.negated = vp.neg = function() {
        var pp = new this.constructor(this);
        return pp.s = -pp.s || 0, pp
      }, vp.plus = vp.add = function(pp) {
        var ip = this;
        return pp = new ip.constructor(pp), ip.s == pp.s ? tp(ip, pp) : Ep(ip, (pp.s = -pp.s, pp))
      }, vp.precision = vp.sd = function(pp) {
        var ip, cp, Op, op = this;
        if (void 0 !== pp && pp !== !!pp && 1 !== pp && 0 !== pp) throw Error(Yp + pp);
        if (ip = kp(op) + 1, cp = 7 * (Op = op.d.length - 1) + 1, Op = op.d[Op]) {
          for (; Op % 10 == 0; Op /= 10) cp--;
          for (Op = op.d[0]; Op >= 10; Op /= 10) cp++
        }
        return pp && ip > cp ? ip : cp
      }, vp.squareRoot = vp.sqrt = function() {
        var pp, ip, cp, Op, op, Ip, Sp, Yp = this,
          Dp = Yp.constructor;
        if (Yp.s < 1) {
          if (!Yp.s) return new Dp(0);
          throw Error(Lp + "NaN")
        }
        for (pp = kp(Yp), xp = !1, 0 == (op = Math.sqrt(+Yp)) || op == 1 / 0 ? (((ip = dp(Yp.d)).length + pp) % 2 == 0 && (ip += "0"), op = Math.sqrt(ip), pp = Ap((pp + 1) / 2) - (pp < 0 || pp % 2), Op = new Dp(ip = op == 1 / 0 ? "1e" + pp : (ip = op.toExponential()).slice(0, ip.indexOf("e") + 1) + pp)) : Op = new Dp(op.toString()), op = Sp = (cp = Dp.precision) + 3;;)
          if (Op = (Ip = Op).plus(ep(Yp, Ip, Sp + 2)).times(.5), dp(Ip.d).slice(0, Sp) === (ip = dp(Op.d)).slice(0, Sp)) {
            if (ip = ip.slice(Sp - 3, Sp + 1), op == Sp && "4999" == ip) {
              if (Cp(Ip, cp + 1, 0), Ip.times(Ip).eq(Yp)) {
                Op = Ip;
                break
              }
            } else if ("9999" != ip) break;
            Sp += 4
          } return xp = !0, Cp(Op, cp)
      }, vp.times = vp.mul = function(pp) {
        var ip, cp, Op, op, Ip, Sp, Lp, Yp, Dp, Ap = this,
          Pp = Ap.constructor,
          Wp = Ap.d,
          Up = (pp = new Pp(pp)).d;
        if (!Ap.s || !pp.s) return new Pp(0);
        for (pp.s *= Ap.s, cp = Ap.e + pp.e, (Yp = Wp.length) < (Dp = Up.length) && (Ip = Wp, Wp = Up, Up = Ip, Sp = Yp, Yp = Dp, Dp = Sp), Ip = [], Op = Sp = Yp + Dp; Op--;) Ip.push(0);
        for (Op = Dp; --Op >= 0;) {
          for (ip = 0, op = Yp + Op; op > Op;) Lp = Ip[op] + Up[Op] * Wp[op - Op - 1] + ip, Ip[op--] = Lp % yp | 0, ip = Lp / yp | 0;
          Ip[op] = (Ip[op] + ip) % yp | 0
        }
        for (; !Ip[--Sp];) Ip.pop();
        return ip ? ++cp : Ip.shift(), pp.d = Ip, pp.e = cp, xp ? Cp(pp, Pp.precision) : pp
      }, vp.toDecimalPlaces = vp.todp = function(pp, ip) {
        var cp = this,
          Op = cp.constructor;
        return cp = new Op(cp), void 0 === pp ? cp : (Hp(pp, 0, Ip), void 0 === ip ? ip = Op.rounding : Hp(ip, 0, 8), Cp(cp, pp + kp(cp) + 1, ip))
      }, vp.toExponential = function(pp, ip) {
        var cp, Op = this,
          op = Op.constructor;
        return void 0 === pp ? cp = Xp(Op, !0) : (Hp(pp, 0, Ip), void 0 === ip ? ip = op.rounding : Hp(ip, 0, 8), cp = Xp(Op = Cp(new op(Op), pp + 1, ip), !0, pp + 1)), cp
      }, vp.toFixed = function(pp, ip) {
        var cp, Op, op = this,
          Sp = op.constructor;
        return void 0 === pp ? Xp(op) : (Hp(pp, 0, Ip), void 0 === ip ? ip = Sp.rounding : Hp(ip, 0, 8), cp = Xp((Op = Cp(new Sp(op), pp + kp(op) + 1, ip)).abs(), !1, pp + kp(Op) + 1), op.isneg() && !op.isZero() ? "-" + cp : cp)
      }, vp.toInteger = vp.toint = function() {
        var pp = this,
          ip = pp.constructor;
        return Cp(new ip(pp), kp(pp) + 1, ip.rounding)
      }, vp.toNumber = function() {
        return +this
      }, vp.toPower = vp.pow = function(pp) {
        var ip, cp, Op, Ip, Sp, Yp, Dp = this,
          Pp = Dp.constructor,
          Wp = +(pp = new Pp(pp));
        if (!pp.s) return new Pp(op);
        if (!(Dp = new Pp(Dp)).s) {
          if (pp.s < 1) throw Error(Lp + "Infinity");
          return Dp
        }
        if (Dp.eq(op)) return Dp;
        if (Op = Pp.precision, pp.eq(op)) return Cp(Dp, Op);
        if (Yp = (ip = pp.e) >= (cp = pp.d.length - 1), Sp = Dp.s, Yp) {
          if ((cp = Wp < 0 ? -Wp : Wp) <= Up) {
            for (Ip = new Pp(op), ip = Math.ceil(Op / 7 + 4), xp = !1; cp % 2 && lp((Ip = Ip.times(Dp)).d, ip), 0 !== (cp = Ap(cp / 2));) lp((Dp = Dp.times(Dp)).d, ip);
            return xp = !0, pp.s < 0 ? new Pp(op).div(Ip) : Cp(Ip, Op)
          }
        } else if (Sp < 0) throw Error(Lp + "NaN");
        return Sp = Sp < 0 && 1 & pp.d[Math.max(ip, cp)] ? -1 : 1, Dp.s = 1, xp = !1, Ip = pp.times(qp(Dp, Op + 12)), xp = !0, (Ip = jp(Ip)).s = Sp, Ip
      }, vp.toPrecision = function(pp, ip) {
        var cp, Op, op = this,
          Sp = op.constructor;
        return void 0 === pp ? Op = Xp(op, (cp = kp(op)) <= Sp.toExpNeg || cp >= Sp.toExpPos) : (Hp(pp, 1, Ip), void 0 === ip ? ip = Sp.rounding : Hp(ip, 0, 8), Op = Xp(op = Cp(new Sp(op), pp, ip), pp <= (cp = kp(op)) || cp <= Sp.toExpNeg, pp)), Op
      }, vp.toSignificantDigits = vp.tosd = function(pp, ip) {
        var cp = this.constructor;
        return void 0 === pp ? (pp = cp.precision, ip = cp.rounding) : (Hp(pp, 1, Ip), void 0 === ip ? ip = cp.rounding : Hp(ip, 0, 8)), Cp(new cp(this), pp, ip)
      }, vp.toString = vp.valueOf = vp.val = vp.toJSON = function() {
        var pp = this,
          ip = kp(pp),
          cp = pp.constructor;
        return Xp(pp, ip <= cp.toExpNeg || ip >= cp.toExpPos)
      };
      var ep = function() {
        function pp(pp, ip) {
          var cp, Op = 0,
            op = pp.length;
          for (pp = pp.slice(); op--;) cp = pp[op] * ip + Op, pp[op] = cp % yp | 0, Op = cp / yp | 0;
          return Op && pp.unshift(Op), pp
        }

        function ip(pp, ip, cp, Op) {
          var op, Ip;
          if (cp != Op) Ip = cp > Op ? 1 : -1;
          else
            for (op = Ip = 0; op < cp; op++)
              if (pp[op] != ip[op]) {
                Ip = pp[op] > ip[op] ? 1 : -1;
                break
              } return Ip
        }

        function cp(pp, ip, cp) {
          for (var Op = 0; cp--;) pp[cp] -= Op, Op = pp[cp] < ip[cp] ? 1 : 0, pp[cp] = Op * yp + pp[cp] - ip[cp];
          for (; !pp[0] && pp.length > 1;) pp.shift()
        }
        return function(Op, op, Ip, Sp) {
          var xp, Yp, Dp, Ap, Pp, Wp, Up, wp, vp, tp, Hp, dp, ep, jp, mp, Rp, qp, Mp, Ep = Op.constructor,
            Xp = Op.s == op.s ? 1 : -1,
            lp = Op.d,
            Qp = op.d;
          if (!Op.s) return new Ep(Op);
          if (!op.s) throw Error(Lp + "Division by zero");
          for (Yp = Op.e - op.e, qp = Qp.length, mp = lp.length, wp = (Up = new Ep(Xp)).d = [], Dp = 0; Qp[Dp] == (lp[Dp] || 0);) ++Dp;
          if (Qp[Dp] > (lp[Dp] || 0) && --Yp, (dp = null == Ip ? Ip = Ep.precision : Sp ? Ip + (kp(Op) - kp(op)) + 1 : Ip) < 0) return new Ep(0);
          if (dp = dp / 7 + 2 | 0, Dp = 0, 1 == qp)
            for (Ap = 0, Qp = Qp[0], dp++;
              (Dp < mp || Ap) && dp--; Dp++) ep = Ap * yp + (lp[Dp] || 0), wp[Dp] = ep / Qp | 0, Ap = ep % Qp | 0;
          else {
            for ((Ap = yp / (Qp[0] + 1) | 0) > 1 && (Qp = pp(Qp, Ap), lp = pp(lp, Ap), qp = Qp.length, mp = lp.length), jp = qp, tp = (vp = lp.slice(0, qp)).length; tp < qp;) vp[tp++] = 0;
            (Mp = Qp.slice()).unshift(0), Rp = Qp[0], Qp[1] >= yp / 2 && ++Rp;
            do {
              Ap = 0, (xp = ip(Qp, vp, qp, tp)) < 0 ? (Hp = vp[0], qp != tp && (Hp = Hp * yp + (vp[1] || 0)), (Ap = Hp / Rp | 0) > 1 ? (Ap >= yp && (Ap = yp - 1), 1 == (xp = ip(Pp = pp(Qp, Ap), vp, Wp = Pp.length, tp = vp.length)) && (Ap--, cp(Pp, qp < Wp ? Mp : Qp, Wp))) : (0 == Ap && (xp = Ap = 1), Pp = Qp.slice()), (Wp = Pp.length) < tp && Pp.unshift(0), cp(vp, Pp, tp), -1 == xp && (xp = ip(Qp, vp, qp, tp = vp.length)) < 1 && (Ap++, cp(vp, qp < tp ? Mp : Qp, tp)), tp = vp.length) : 0 === xp && (Ap++, vp = [0]), wp[Dp++] = Ap, xp && vp[0] ? vp[tp++] = lp[jp] || 0 : (vp = [lp[jp]], tp = 1)
            } while ((jp++ < mp || void 0 !== vp[0]) && dp--)
          }
          return wp[0] || wp.shift(), Up.e = Yp, Cp(Up, Sp ? Ip + kp(Up) + 1 : Ip)
        }
      }();

      function jp(pp, ip) {
        var cp, Op, Ip, Sp, Lp, Yp = 0,
          Ap = 0,
          Wp = pp.constructor,
          yp = Wp.precision;
        if (kp(pp) > 16) throw Error(Dp + kp(pp));
        if (!pp.s) return new Wp(op);
        for (null == ip ? (xp = !1, Lp = yp) : Lp = ip, Sp = new Wp(.03125); pp.abs().gte(.1);) pp = pp.times(Sp), Ap += 5;
        for (Lp += Math.log(Pp(2, Ap)) / Math.LN10 * 2 + 5 | 0, cp = Op = Ip = new Wp(op), Wp.precision = Lp;;) {
          if (Op = Cp(Op.times(pp), Lp), cp = cp.times(++Yp), dp((Sp = Ip.plus(ep(Op, cp, Lp))).d).slice(0, Lp) === dp(Ip.d).slice(0, Lp)) {
            for (; Ap--;) Ip = Cp(Ip.times(Ip), Lp);
            return Wp.precision = yp, null == ip ? (xp = !0, Cp(Ip, yp)) : Ip
          }
          Ip = Sp
        }
      }

      function kp(pp) {
        for (var ip = 7 * pp.e, cp = pp.d[0]; cp >= 10; cp /= 10) ip++;
        return ip
      }

      function mp(pp, ip, cp) {
        if (ip > pp.LN10.sd()) throw xp = !0, cp && (pp.precision = cp), Error(Lp + "LN10 precision limit exceeded");
        return Cp(new pp(pp.LN10), ip)
      }

      function Rp(pp) {
        for (var ip = ""; pp--;) ip += "0";
        return ip
      }

      function qp(pp, ip) {
        var cp, Op, Ip, Sp, Yp, Dp, Ap, Pp, Wp, yp = 1,
          Up = pp,
          wp = Up.d,
          vp = Up.constructor,
          tp = vp.precision;
        if (Up.s < 1) throw Error(Lp + (Up.s ? "NaN" : "-Infinity"));
        if (Up.eq(op)) return new vp(0);
        if (null == ip ? (xp = !1, Pp = tp) : Pp = ip, Up.eq(10)) return null == ip && (xp = !0), mp(vp, Pp);
        if (Pp += 10, vp.precision = Pp, Op = (cp = dp(wp)).charAt(0), Sp = kp(Up), !(Math.abs(Sp) < 15e14)) return Ap = mp(vp, Pp + 2, tp).times(Sp + ""), Up = qp(new vp(Op + "." + cp.slice(1)), Pp - 10).plus(Ap), vp.precision = tp, null == ip ? (xp = !0, Cp(Up, tp)) : Up;
        for (; Op < 7 && 1 != Op || 1 == Op && cp.charAt(1) > 3;) Op = (cp = dp((Up = Up.times(pp)).d)).charAt(0), yp++;
        for (Sp = kp(Up), Op > 1 ? (Up = new vp("0." + cp), Sp++) : Up = new vp(Op + "." + cp.slice(1)), Dp = Yp = Up = ep(Up.minus(op), Up.plus(op), Pp), Wp = Cp(Up.times(Up), Pp), Ip = 3;;) {
          if (Yp = Cp(Yp.times(Wp), Pp), dp((Ap = Dp.plus(ep(Yp, new vp(Ip), Pp))).d).slice(0, Pp) === dp(Dp.d).slice(0, Pp)) return Dp = Dp.times(2), 0 !== Sp && (Dp = Dp.plus(mp(vp, Pp + 2, tp).times(Sp + ""))), Dp = ep(Dp, new vp(yp), Pp), vp.precision = tp, null == ip ? (xp = !0, Cp(Dp, tp)) : Dp;
          Dp = Ap, Ip += 2
        }
      }

      function Mp(pp, ip) {
        var cp, Op, op;
        for ((cp = ip.indexOf(".")) > -1 && (ip = ip.replace(".", "")), (Op = ip.search(/e/i)) > 0 ? (cp < 0 && (cp = Op), cp += +ip.slice(Op + 1), ip = ip.substring(0, Op)) : cp < 0 && (cp = ip.length), Op = 0; 48 === ip.charCodeAt(Op);) ++Op;
        for (op = ip.length; 48 === ip.charCodeAt(op - 1);) --op;
        if (ip = ip.slice(Op, op)) {
          if (op -= Op, cp = cp - Op - 1, pp.e = Ap(cp / 7), pp.d = [], Op = (cp + 1) % 7, cp < 0 && (Op += 7), Op < op) {
            for (Op && pp.d.push(+ip.slice(0, Op)), op -= 7; Op < op;) pp.d.push(+ip.slice(Op, Op += 7));
            Op = 7 - (ip = ip.slice(Op)).length
          } else Op -= op;
          for (; Op--;) ip += "0";
          if (pp.d.push(+ip), xp && (pp.e > wp || pp.e < -wp)) throw Error(Dp + cp)
        } else pp.s = 0, pp.e = 0, pp.d = [0];
        return pp
      }

      function Cp(pp, ip, cp) {
        var Op, op, Ip, Sp, Lp, Yp, Wp, Up, vp = pp.d;
        for (Sp = 1, Ip = vp[0]; Ip >= 10; Ip /= 10) Sp++;
        if ((Op = ip - Sp) < 0) Op += 7, op = ip, Wp = vp[Up = 0];
        else {
          if ((Up = Math.ceil((Op + 1) / 7)) >= (Ip = vp.length)) return pp;
          for (Wp = Ip = vp[Up], Sp = 1; Ip >= 10; Ip /= 10) Sp++;
          op = (Op %= 7) - 7 + Sp
        }
        if (void 0 !== cp && (Lp = Wp / (Ip = Pp(10, Sp - op - 1)) % 10 | 0, Yp = ip < 0 || void 0 !== vp[Up + 1] || Wp % Ip, Yp = cp < 4 ? (Lp || Yp) && (0 == cp || cp == (pp.s < 0 ? 3 : 2)) : Lp > 5 || 5 == Lp && (4 == cp || Yp || 6 == cp && (Op > 0 ? op > 0 ? Wp / Pp(10, Sp - op) : 0 : vp[Up - 1]) % 10 & 1 || cp == (pp.s < 0 ? 8 : 7))), ip < 1 || !vp[0]) return Yp ? (Ip = kp(pp), vp.length = 1, ip = ip - Ip - 1, vp[0] = Pp(10, (7 - ip % 7) % 7), pp.e = Ap(-ip / 7) || 0) : (vp.length = 1, vp[0] = pp.e = pp.s = 0), pp;
        if (0 == Op ? (vp.length = Up, Ip = 1, Up--) : (vp.length = Up + 1, Ip = Pp(10, 7 - Op), vp[Up] = op > 0 ? (Wp / Pp(10, Sp - op) % Pp(10, op) | 0) * Ip : 0), Yp)
          for (;;) {
            if (0 == Up) {
              (vp[0] += Ip) == yp && (vp[0] = 1, ++pp.e);
              break
            }
            if (vp[Up] += Ip, vp[Up] != yp) break;
            vp[Up--] = 0, Ip = 1
          }
        for (Op = vp.length; 0 === vp[--Op];) vp.pop();
        if (xp && (pp.e > wp || pp.e < -wp)) throw Error(Dp + kp(pp));
        return pp
      }

      function Ep(pp, ip) {
        var cp, Op, op, Ip, Sp, Lp, Yp, Dp, Ap, Pp, Wp = pp.constructor,
          Up = Wp.precision;
        if (!pp.s || !ip.s) return ip.s ? ip.s = -ip.s : ip = new Wp(pp), xp ? Cp(ip, Up) : ip;
        if (Yp = pp.d, Pp = ip.d, Op = ip.e, Dp = pp.e, Yp = Yp.slice(), Sp = Dp - Op) {
          for ((Ap = Sp < 0) ? (cp = Yp, Sp = -Sp, Lp = Pp.length) : (cp = Pp, Op = Dp, Lp = Yp.length), Sp > (op = Math.max(Math.ceil(Up / 7), Lp) + 2) && (Sp = op, cp.length = 1), cp.reverse(), op = Sp; op--;) cp.push(0);
          cp.reverse()
        } else {
          for ((Ap = (op = Yp.length) < (Lp = Pp.length)) && (Lp = op), op = 0; op < Lp; op++)
            if (Yp[op] != Pp[op]) {
              Ap = Yp[op] < Pp[op];
              break
            } Sp = 0
        }
        for (Ap && (cp = Yp, Yp = Pp, Pp = cp, ip.s = -ip.s), Lp = Yp.length, op = Pp.length - Lp; op > 0; --op) Yp[Lp++] = 0;
        for (op = Pp.length; op > Sp;) {
          if (Yp[--op] < Pp[op]) {
            for (Ip = op; Ip && 0 === Yp[--Ip];) Yp[Ip] = yp - 1;
            --Yp[Ip], Yp[op] += yp
          }
          Yp[op] -= Pp[op]
        }
        for (; 0 === Yp[--Lp];) Yp.pop();
        for (; 0 === Yp[0]; Yp.shift()) --Op;
        return Yp[0] ? (ip.d = Yp, ip.e = Op, xp ? Cp(ip, Up) : ip) : new Wp(0)
      }

      function Xp(pp, ip, cp) {
        var Op, op = kp(pp),
          Ip = dp(pp.d),
          Sp = Ip.length;
        return ip ? (cp && (Op = cp - Sp) > 0 ? Ip = Ip.charAt(0) + "." + Ip.slice(1) + Rp(Op) : Sp > 1 && (Ip = Ip.charAt(0) + "." + Ip.slice(1)), Ip = Ip + (op < 0 ? "e" : "e+") + op) : op < 0 ? (Ip = "0." + Rp(-op - 1) + Ip, cp && (Op = cp - Sp) > 0 && (Ip += Rp(Op))) : op >= Sp ? (Ip += Rp(op + 1 - Sp), cp && (Op = cp - op - 1) > 0 && (Ip = Ip + "." + Rp(Op))) : ((Op = op + 1) < Sp && (Ip = Ip.slice(0, Op) + "." + Ip.slice(Op)), cp && (Op = cp - Sp) > 0 && (op + 1 === Sp && (Ip += "."), Ip += Rp(Op))), pp.s < 0 ? "-" + Ip : Ip
      }

      function lp(pp, ip) {
        if (pp.length > ip) return pp.length = ip, !0
      }

      function Qp(pp) {
        if (!pp || "object" !== typeof pp) throw Error(Lp + "Object expected");
        var ip, cp, Op, op = ["precision", 1, Ip, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
        for (ip = 0; ip < op.length; ip += 3)
          if (void 0 !== (Op = pp[cp = op[ip]])) {
            if (!(Ap(Op) === Op && Op >= op[ip + 1] && Op <= op[ip + 2])) throw Error(Yp + cp + ": " + Op);
            this[cp] = Op
          } if (void 0 !== (Op = pp[cp = "LN10"])) {
          if (Op != Math.LN10) throw Error(Yp + cp + ": " + Op);
          this[cp] = new this(Op)
        }
        return this
      }
      Sp = function pp(ip) {
        var cp, Op, op;

        function Ip(pp) {
          var ip = this;
          if (!(ip instanceof Ip)) return new Ip(pp);
          if (ip.constructor = Ip, pp instanceof Ip) return ip.s = pp.s, ip.e = pp.e, void(ip.d = (pp = pp.d) ? pp.slice() : pp);
          if ("number" === typeof pp) {
            if (0 * pp !== 0) throw Error(Yp + pp);
            if (pp > 0) ip.s = 1;
            else {
              if (!(pp < 0)) return ip.s = 0, ip.e = 0, void(ip.d = [0]);
              pp = -pp, ip.s = -1
            }
            return pp === ~~pp && pp < 1e7 ? (ip.e = 0, void(ip.d = [pp])) : Mp(ip, pp.toString())
          }
          if ("string" !== typeof pp) throw Error(Yp + pp);
          if (45 === pp.charCodeAt(0) ? (pp = pp.slice(1), ip.s = -1) : ip.s = 1, !Wp.test(pp)) throw Error(Yp + pp);
          Mp(ip, pp)
        }
        if (Ip.prototype = vp, Ip.ROUND_UP = 0, Ip.ROUND_DOWN = 1, Ip.ROUND_CEIL = 2, Ip.ROUND_FLOOR = 3, Ip.ROUND_HALF_UP = 4, Ip.ROUND_HALF_DOWN = 5, Ip.ROUND_HALF_EVEN = 6, Ip.ROUND_HALF_CEIL = 7, Ip.ROUND_HALF_FLOOR = 8, Ip.clone = pp, Ip.config = Ip.set = Qp, void 0 === ip && (ip = {}), ip)
          for (op = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], cp = 0; cp < op.length;) ip.hasOwnProperty(Op = op[cp++]) || (ip[Op] = this[Op]);
        return Ip.config(ip), Ip
      }(Sp), Sp.default = Sp.Decimal = Sp, op = new Sp(1), void 0 === (Op = function() {
        return Sp
      }.call(ip, cp, ip, pp)) || (pp.exports = Op)
    }()
  },
  5946: (pp, ip, cp) => {
    var Op = cp(5398)(cp(5231), "DataView");
    pp.exports = Op
  },
  5373: (pp, ip, cp) => {
    var Op = cp(5381),
      op = cp(5443),
      Ip = cp(5452),
      Sp = cp(5460),
      xp = cp(5463);

    function Lp(pp) {
      var ip = -1,
        cp = null == pp ? 0 : pp.length;
      for (this.clear(); ++ip < cp;) {
        var Op = pp[ip];
        this.set(Op[0], Op[1])
      }
    }
    Lp.prototype.clear = Op, Lp.prototype.delete = op, Lp.prototype.get = Ip, Lp.prototype.has = Sp, Lp.prototype.set = xp, pp.exports = Lp
  },
  5469: (pp, ip, cp) => {
    var Op = cp(5475),
      op = cp(5477),
      Ip = cp(5496),
      Sp = cp(5498),
      xp = cp(5506);

    function Lp(pp) {
      var ip = -1,
        cp = null == pp ? 0 : pp.length;
      for (this.clear(); ++ip < cp;) {
        var Op = pp[ip];
        this.set(Op[0], Op[1])
      }
    }
    Lp.prototype.clear = Op, Lp.prototype.delete = op, Lp.prototype.get = Ip, Lp.prototype.has = Sp, Lp.prototype.set = xp, pp.exports = Lp
  },
  5515: (pp, ip, cp) => {
    var Op = cp(5398)(cp(5231), "Map");
    pp.exports = Op
  },
  5364: (pp, ip, cp) => {
    var Op = cp(5367),
      op = cp(5518),
      Ip = cp(5536),
      Sp = cp(5542),
      xp = cp(5551);

    function Lp(pp) {
      var ip = -1,
        cp = null == pp ? 0 : pp.length;
      for (this.clear(); ++ip < cp;) {
        var Op = pp[ip];
        this.set(Op[0], Op[1])
      }
    }
    Lp.prototype.clear = Op, Lp.prototype.delete = op, Lp.prototype.get = Ip, Lp.prototype.has = Sp, Lp.prototype.set = xp, pp.exports = Lp
  },
  5955: (pp, ip, cp) => {
    var Op = cp(5398)(cp(5231), "Promise");
    pp.exports = Op
  },
  5964: (pp, ip, cp) => {
    var Op = cp(5398)(cp(5231), "Set");
    pp.exports = Op
  },
  5791: (pp, ip, cp) => {
    var Op = cp(5364),
      op = cp(5794),
      Ip = cp(5801);

    function Sp(pp) {
      var ip = -1,
        cp = null == pp ? 0 : pp.length;
      for (this.__data__ = new Op; ++ip < cp;) this.add(pp[ip])
    }
    Sp.prototype.add = Sp.prototype.push = op, Sp.prototype.has = Ip, pp.exports = Sp
  },
  5738: (pp, ip, cp) => {
    var Op = cp(5469),
      op = cp(5745),
      Ip = cp(5749),
      Sp = cp(5755),
      xp = cp(5760),
      Lp = cp(5767);

    function Yp(pp) {
      var ip = this.__data__ = new Op(pp);
      this.size = ip.size
    }
    Yp.prototype.clear = op, Yp.prototype.delete = Ip, Yp.prototype.get = Sp, Yp.prototype.has = xp, Yp.prototype.set = Lp, pp.exports = Yp
  },
  5272: (pp, ip, cp) => {
    var Op = cp(5231).Symbol;
    pp.exports = Op
  },
  5822: (pp, ip, cp) => {
    var Op = cp(5231).Uint8Array;
    pp.exports = Op
  },
  5968: (pp, ip, cp) => {
    var Op = cp(5398)(cp(5231), "WeakMap");
    pp.exports = Op
  },
  6058: pp => {
    pp.exports = function(pp, ip, cp) {
      switch (cp.length) {
        case 0:
          return pp.call(ip);
        case 1:
          return pp.call(ip, cp[0]);
        case 2:
          return pp.call(ip, cp[0], cp[1]);
        case 3:
          return pp.call(ip, cp[0], cp[1], cp[2])
      }
      return pp.apply(ip, cp)
    }
  },
  6391: pp => {
    pp.exports = function(pp, ip) {
      for (var cp = -1, Op = null == pp ? 0 : pp.length; ++cp < Op;)
        if (!ip(pp[cp], cp, pp)) return !1;
      return !0
    }
  },
  5873: pp => {
    pp.exports = function(pp, ip) {
      for (var cp = -1, Op = null == pp ? 0 : pp.length, op = 0, Ip = []; ++cp < Op;) {
        var Sp = pp[cp];
        ip(Sp, cp, pp) && (Ip[op++] = Sp)
      }
      return Ip
    }
  },
  6136: (pp, ip, cp) => {
    var Op = cp(6142);
    pp.exports = function(pp, ip) {
      return !!(null == pp ? 0 : pp.length) && Op(pp, ip, 0) > -1
    }
  },
  6167: pp => {
    pp.exports = function(pp, ip, cp) {
      for (var Op = -1, op = null == pp ? 0 : pp.length; ++Op < op;)
        if (cp(ip, pp[Op])) return !0;
      return !1
    }
  },
  5884: (pp, ip, cp) => {
    var Op = cp(5889),
      op = cp(5715),
      Ip = cp(5310),
      Sp = cp(5895),
      xp = cp(5674),
      Lp = cp(5910),
      Yp = Object.prototype.hasOwnProperty;
    pp.exports = function(pp, ip) {
      var cp = Ip(pp),
        Dp = !cp && op(pp),
        Ap = !cp && !Dp && Sp(pp),
        Pp = !cp && !Dp && !Ap && Lp(pp),
        Wp = cp || Dp || Ap || Pp,
        yp = Wp ? Op(pp.length, String) : [],
        Up = yp.length;
      for (var wp in pp) !ip && !Yp.call(pp, wp) || Wp && ("length" == wp || Ap && ("offset" == wp || "parent" == wp) || Pp && ("buffer" == wp || "byteLength" == wp || "byteOffset" == wp) || xp(wp, Up)) || yp.push(wp);
      return yp
    }
  },
  5565: pp => {
    pp.exports = function(pp, ip) {
      for (var cp = -1, Op = null == pp ? 0 : pp.length, op = Array(Op); ++cp < Op;) op[cp] = ip(pp[cp], cp, pp);
      return op
    }
  },
  5706: pp => {
    pp.exports = function(pp, ip) {
      for (var cp = -1, Op = ip.length, op = pp.length; ++cp < Op;) pp[op + cp] = ip[cp];
      return pp
    }
  },
  5805: pp => {
    pp.exports = function(pp, ip) {
      for (var cp = -1, Op = null == pp ? 0 : pp.length; ++cp < Op;)
        if (ip(pp[cp], cp, pp)) return !0;
      return !1
    }
  },
  6219: pp => {
    pp.exports = function(pp) {
      return pp.split("")
    }
  },
  5483: (pp, ip, cp) => {
    var Op = cp(5492);
    pp.exports = function(pp, ip) {
      for (var cp = pp.length; cp--;)
        if (Op(pp[cp][0], ip)) return cp;
      return -1
    }
  },
  6379: (pp, ip, cp) => {
    var Op = cp(6084);
    pp.exports = function(pp, ip, cp) {
      "__proto__" == ip && Op ? Op(pp, ip, {
        configurable: !0,
        enumerable: !0,
        value: cp,
        writable: !0
      }) : pp[ip] = cp
    }
  },
  6028: (pp, ip, cp) => {
    var Op = cp(6030),
      op = cp(6037)(Op);
    pp.exports = op
  },
  6393: (pp, ip, cp) => {
    var Op = cp(6028);
    pp.exports = function(pp, ip) {
      var cp = !0;
      return Op(pp, (function(pp, Op, op) {
        return cp = !!ip(pp, Op, op)
      })), cp
    }
  },
  6300: (pp, ip, cp) => {
    var Op = cp(5257);
    pp.exports = function(pp, ip, cp) {
      for (var op = -1, Ip = pp.length; ++op < Ip;) {
        var Sp = pp[op],
          xp = ip(Sp);
        if (null != xp && (void 0 === Lp ? xp === xp && !Op(xp) : cp(xp, Lp))) var Lp = xp,
          Yp = Sp
      }
      return Yp
    }
  },
  6149: pp => {
    pp.exports = function(pp, ip, cp, Op) {
      for (var op = pp.length, Ip = cp + (Op ? 1 : -1); Op ? Ip-- : ++Ip < op;)
        if (ip(pp[Ip], Ip, pp)) return Ip;
      return -1
    }
  },
  5699: (pp, ip, cp) => {
    var Op = cp(5706),
      op = cp(5713);
    pp.exports = function pp(ip, cp, Ip, Sp, xp) {
      var Lp = -1,
        Yp = ip.length;
      for (Ip || (Ip = op), xp || (xp = []); ++Lp < Yp;) {
        var Dp = ip[Lp];
        cp > 0 && Ip(Dp) ? cp > 1 ? pp(Dp, cp - 1, Ip, Sp, xp) : Op(xp, Dp) : Sp || (xp[xp.length] = Dp)
      }
      return xp
    }
  },
  6033: (pp, ip, cp) => {
    var Op = cp(6035)();
    pp.exports = Op
  },
  6030: (pp, ip, cp) => {
    var Op = cp(6033),
      op = cp(5882);
    pp.exports = function(pp, ip) {
      return pp && Op(pp, ip, op)
    }
  },
  5332: (pp, ip, cp) => {
    var Op = cp(5340),
      op = cp(5569);
    pp.exports = function(pp, ip) {
      for (var cp = 0, Ip = (ip = Op(ip, pp)).length; null != pp && cp < Ip;) pp = pp[op(ip[cp++])];
      return cp && cp == Ip ? pp : void 0
    }
  },
  5856: (pp, ip, cp) => {
    var Op = cp(5706),
      op = cp(5310);
    pp.exports = function(pp, ip, cp) {
      var Ip = ip(pp);
      return op(pp) ? Ip : Op(Ip, cp(pp))
    }
  },
  5266: (pp, ip, cp) => {
    var Op = cp(5272),
      op = cp(5277),
      Ip = cp(5284),
      Sp = Op ? Op.toStringTag : void 0;
    pp.exports = function(pp) {
      return null == pp ? void 0 === pp ? "[object Undefined]" : "[object Null]" : Sp && Sp in Object(pp) ? op(pp) : Ip(pp)
    }
  },
  6303: pp => {
    pp.exports = function(pp, ip) {
      return pp > ip
    }
  },
  5994: pp => {
    pp.exports = function(pp, ip) {
      return null != pp && ip in Object(pp)
    }
  },
  6142: (pp, ip, cp) => {
    var Op = cp(6149),
      op = cp(6157),
      Ip = cp(6162);
    pp.exports = function(pp, ip, cp) {
      return ip === ip ? Ip(pp, ip, cp) : Op(pp, op, cp)
    }
  },
  5718: (pp, ip, cp) => {
    var Op = cp(5266),
      op = cp(5292);
    pp.exports = function(pp) {
      return op(pp) && "[object Arguments]" == Op(pp)
    }
  },
  5770: (pp, ip, cp) => {
    var Op = cp(5778),
      op = cp(5292);
    pp.exports = function pp(ip, cp, Ip, Sp, xp) {
      return ip === cp || (null == ip || null == cp || !op(ip) && !op(cp) ? ip !== ip && cp !== cp : Op(ip, cp, Ip, Sp, pp, xp))
    }
  },
  5778: (pp, ip, cp) => {
    var Op = cp(5738),
      op = cp(5784),
      Ip = cp(5818),
      Sp = cp(5840),
      xp = cp(5943),
      Lp = cp(5310),
      Yp = cp(5895),
      Dp = cp(5910),
      Ap = "[object Arguments]",
      Pp = "[object Array]",
      Wp = "[object Object]",
      yp = Object.prototype.hasOwnProperty;
    pp.exports = function(pp, ip, cp, Up, wp, vp) {
      var tp = Lp(pp),
        Hp = Lp(ip),
        dp = tp ? Pp : xp(pp),
        ep = Hp ? Pp : xp(ip),
        jp = (dp = dp == Ap ? Wp : dp) == Wp,
        kp = (ep = ep == Ap ? Wp : ep) == Wp,
        mp = dp == ep;
      if (mp && Yp(pp)) {
        if (!Yp(ip)) return !1;
        tp = !0, jp = !1
      }
      if (mp && !jp) return vp || (vp = new Op), tp || Dp(pp) ? op(pp, ip, cp, Up, wp, vp) : Ip(pp, ip, dp, cp, Up, wp, vp);
      if (!(1 & cp)) {
        var Rp = jp && yp.call(pp, "__wrapped__"),
          qp = kp && yp.call(ip, "__wrapped__");
        if (Rp || qp) {
          var Mp = Rp ? pp.value() : pp,
            Cp = qp ? ip.value() : ip;
          return vp || (vp = new Op), wp(Mp, Cp, cp, Up, vp)
        }
      }
      return !!mp && (vp || (vp = new Op), Sp(pp, ip, cp, Up, wp, vp))
    }
  },
  5736: (pp, ip, cp) => {
    var Op = cp(5738),
      op = cp(5770);
    pp.exports = function(pp, ip, cp, Ip) {
      var Sp = cp.length,
        xp = Sp,
        Lp = !Ip;
      if (null == pp) return !xp;
      for (pp = Object(pp); Sp--;) {
        var Yp = cp[Sp];
        if (Lp && Yp[2] ? Yp[1] !== pp[Yp[0]] : !(Yp[0] in pp)) return !1
      }
      for (; ++Sp < xp;) {
        var Dp = (Yp = cp[Sp])[0],
          Ap = pp[Dp],
          Pp = Yp[1];
        if (Lp && Yp[2]) {
          if (void 0 === Ap && !(Dp in pp)) return !1
        } else {
          var Wp = new Op;
          if (Ip) var yp = Ip(Ap, Pp, Dp, pp, ip, Wp);
          if (!(void 0 === yp ? op(Pp, Ap, 3, Ip, Wp) : yp)) return !1
        }
      }
      return !0
    }
  },
  6157: pp => {
    pp.exports = function(pp) {
      return pp !== pp
    }
  },
  5403: (pp, ip, cp) => {
    var Op = cp(5405),
      op = cp(5410),
      Ip = cp(5214),
      Sp = cp(5427),
      xp = /^\[object .+?Constructor\]$/,
      Lp = Function.prototype,
      Yp = Object.prototype,
      Dp = Lp.toString,
      Ap = Yp.hasOwnProperty,
      Pp = RegExp("^" + Dp.call(Ap).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    pp.exports = function(pp) {
      return !(!Ip(pp) || op(pp)) && (Op(pp) ? Pp : xp).test(Sp(pp))
    }
  },
  5916: (pp, ip, cp) => {
    var Op = cp(5266),
      op = cp(5669),
      Ip = cp(5292),
      Sp = {};
    Sp["[object Float32Array]"] = Sp["[object Float64Array]"] = Sp["[object Int8Array]"] = Sp["[object Int16Array]"] = Sp["[object Int32Array]"] = Sp["[object Uint8Array]"] = Sp["[object Uint8ClampedArray]"] = Sp["[object Uint16Array]"] = Sp["[object Uint32Array]"] = !0, Sp["[object Arguments]"] = Sp["[object Array]"] = Sp["[object ArrayBuffer]"] = Sp["[object Boolean]"] = Sp["[object DataView]"] = Sp["[object Date]"] = Sp["[object Error]"] = Sp["[object Function]"] = Sp["[object Map]"] = Sp["[object Number]"] = Sp["[object Object]"] = Sp["[object RegExp]"] = Sp["[object Set]"] = Sp["[object String]"] = Sp["[object WeakMap]"] = !1, pp.exports = function(pp) {
      return Ip(pp) && op(pp.length) && !!Sp[Op(pp)]
    }
  },
  5727: (pp, ip, cp) => {
    var Op = cp(5729),
      op = cp(5984),
      Ip = cp(6004),
      Sp = cp(5310),
      xp = cp(6006);
    pp.exports = function(pp) {
      return "function" == typeof pp ? pp : null == pp ? Ip : "object" == typeof pp ? Sp(pp) ? op(pp[0], pp[1]) : Op(pp) : xp(pp)
    }
  },
  5930: (pp, ip, cp) => {
    var Op = cp(5933),
      op = cp(5938),
      Ip = Object.prototype.hasOwnProperty;
    pp.exports = function(pp) {
      if (!Op(pp)) return op(pp);
      var ip = [];
      for (var cp in Object(pp)) Ip.call(pp, cp) && "constructor" != cp && ip.push(cp);
      return ip
    }
  },
  6309: pp => {
    pp.exports = function(pp, ip) {
      return pp < ip
    }
  },
  6025: (pp, ip, cp) => {
    var Op = cp(6028),
      op = cp(5660);
    pp.exports = function(pp, ip) {
      var cp = -1,
        Ip = op(pp) ? Array(pp.length) : [];
      return Op(pp, (function(pp, Op, op) {
        Ip[++cp] = ip(pp, Op, op)
      })), Ip
    }
  },
  5729: (pp, ip, cp) => {
    var Op = cp(5736),
      op = cp(5971),
      Ip = cp(5977);
    pp.exports = function(pp) {
      var ip = op(pp);
      return 1 == ip.length && ip[0][2] ? Ip(ip[0][0], ip[0][1]) : function(cp) {
        return cp === pp || Op(cp, pp, ip)
      }
    }
  },
  5984: (pp, ip, cp) => {
    var Op = cp(5770),
      op = cp(5326),
      Ip = cp(5986),
      Sp = cp(5345),
      xp = cp(5974),
      Lp = cp(5977),
      Yp = cp(5569);
    pp.exports = function(pp, ip) {
      return Sp(pp) && xp(ip) ? Lp(Yp(pp), ip) : function(cp) {
        var Sp = op(cp, pp);
        return void 0 === Sp && Sp === ip ? Ip(cp, pp) : Op(ip, Sp, 3)
      }
    }
  },
  5724: (pp, ip, cp) => {
    var Op = cp(5565),
      op = cp(5332),
      Ip = cp(5727),
      Sp = cp(6025),
      xp = cp(6039),
      Lp = cp(5918),
      Yp = cp(6043),
      Dp = cp(6004),
      Ap = cp(5310);
    pp.exports = function(pp, ip, cp) {
      ip = ip.length ? Op(ip, (function(pp) {
        return Ap(pp) ? function(ip) {
          return op(ip, 1 === pp.length ? pp[0] : pp)
        } : pp
      })) : [Dp];
      var Pp = -1;
      ip = Op(ip, Lp(Ip));
      var Wp = Sp(pp, (function(pp, cp, op) {
        return {
          criteria: Op(ip, (function(ip) {
            return ip(pp)
          })),
          index: ++Pp,
          value: pp
        }
      }));
      return xp(Wp, (function(pp, ip) {
        return Yp(pp, ip, cp)
      }))
    }
  },
  6014: pp => {
    pp.exports = function(pp) {
      return function(ip) {
        return null == ip ? void 0 : ip[pp]
      }
    }
  },
  6018: (pp, ip, cp) => {
    var Op = cp(5332);
    pp.exports = function(pp) {
      return function(ip) {
        return Op(ip, pp)
      }
    }
  },
  5652: pp => {
    var ip = Math.ceil,
      cp = Math.max;
    pp.exports = function(pp, Op, op, Ip) {
      for (var Sp = -1, xp = cp(ip((Op - pp) / (op || 1)), 0), Lp = Array(xp); xp--;) Lp[Ip ? xp : ++Sp] = pp, pp += op;
      return Lp
    }
  },
  6049: (pp, ip, cp) => {
    var Op = cp(6004),
      op = cp(6056),
      Ip = cp(6066);
    pp.exports = function(pp, ip) {
      return Ip(op(pp, ip, Op), pp + "")
    }
  },
  6075: (pp, ip, cp) => {
    var Op = cp(6081),
      op = cp(6084),
      Ip = cp(6004),
      Sp = op ? function(pp, ip) {
        return op(pp, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Op(ip),
          writable: !0
        })
      } : Ip;
    pp.exports = Sp
  },
  6206: pp => {
    pp.exports = function(pp, ip, cp) {
      var Op = -1,
        op = pp.length;
      ip < 0 && (ip = -ip > op ? 0 : op + ip), (cp = cp > op ? op : cp) < 0 && (cp += op), op = ip > cp ? 0 : cp - ip >>> 0, ip >>>= 0;
      for (var Ip = Array(op); ++Op < op;) Ip[Op] = pp[Op + ip];
      return Ip
    }
  },
  6461: (pp, ip, cp) => {
    var Op = cp(6028);
    pp.exports = function(pp, ip) {
      var cp;
      return Op(pp, (function(pp, Op, op) {
        return !(cp = ip(pp, Op, op))
      })), !!cp
    }
  },
  6039: pp => {
    pp.exports = function(pp, ip) {
      var cp = pp.length;
      for (pp.sort(ip); cp--;) pp[cp] = pp[cp].value;
      return pp
    }
  },
  5889: pp => {
    pp.exports = function(pp, ip) {
      for (var cp = -1, Op = Array(pp); ++cp < pp;) Op[cp] = ip(cp);
      return Op
    }
  },
  5557: (pp, ip, cp) => {
    var Op = cp(5272),
      op = cp(5565),
      Ip = cp(5310),
      Sp = cp(5257),
      xp = Op ? Op.prototype : void 0,
      Lp = xp ? xp.toString : void 0;
    pp.exports = function pp(ip) {
      if ("string" == typeof ip) return ip;
      if (Ip(ip)) return op(ip, pp) + "";
      if (Sp(ip)) return Lp ? Lp.call(ip) : "";
      var cp = ip + "";
      return "0" == cp && 1 / ip == -1 / 0 ? "-0" : cp
    }
  },
  5242: (pp, ip, cp) => {
    var Op = cp(5248),
      op = /^\s+/;
    pp.exports = function(pp) {
      return pp ? pp.slice(0, Op(pp) + 1).replace(op, "") : pp
    }
  },
  5918: pp => {
    pp.exports = function(pp) {
      return function(ip) {
        return pp(ip)
      }
    }
  },
  6130: (pp, ip, cp) => {
    var Op = cp(5791),
      op = cp(6136),
      Ip = cp(6167),
      Sp = cp(5810),
      xp = cp(6172),
      Lp = cp(5833);
    pp.exports = function(pp, ip, cp) {
      var Yp = -1,
        Dp = op,
        Ap = pp.length,
        Pp = !0,
        Wp = [],
        yp = Wp;
      if (cp) Pp = !1, Dp = Ip;
      else if (Ap >= 200) {
        var Up = ip ? null : xp(pp);
        if (Up) return Lp(Up);
        Pp = !1, Dp = Sp, yp = new Op
      } else yp = ip ? [] : Wp;
      pp: for (; ++Yp < Ap;) {
        var wp = pp[Yp],
          vp = ip ? ip(wp) : wp;
        if (wp = cp || 0 !== wp ? wp : 0, Pp && vp === vp) {
          for (var tp = yp.length; tp--;)
            if (yp[tp] === vp) continue pp;
          ip && yp.push(vp), Wp.push(wp)
        } else Dp(yp, vp, cp) || (yp !== Wp && yp.push(vp), Wp.push(wp))
      }
      return Wp
    }
  },
  5810: pp => {
    pp.exports = function(pp, ip) {
      return pp.has(ip)
    }
  },
  5340: (pp, ip, cp) => {
    var Op = cp(5310),
      op = cp(5345),
      Ip = cp(5350),
      Sp = cp(5555);
    pp.exports = function(pp, ip) {
      return Op(pp) ? pp : op(pp, ip) ? [pp] : Ip(Sp(pp))
    }
  },
  6200: (pp, ip, cp) => {
    var Op = cp(6206);
    pp.exports = function(pp, ip, cp) {
      var op = pp.length;
      return cp = void 0 === cp ? op : cp, !ip && cp >= op ? pp : Op(pp, ip, cp)
    }
  },
  6047: (pp, ip, cp) => {
    var Op = cp(5257);
    pp.exports = function(pp, ip) {
      if (pp !== ip) {
        var cp = void 0 !== pp,
          op = null === pp,
          Ip = pp === pp,
          Sp = Op(pp),
          xp = void 0 !== ip,
          Lp = null === ip,
          Yp = ip === ip,
          Dp = Op(ip);
        if (!Lp && !Dp && !Sp && pp > ip || Sp && xp && Yp && !Lp && !Dp || op && xp && Yp || !cp && Yp || !Ip) return 1;
        if (!op && !Sp && !Dp && pp < ip || Dp && cp && Ip && !op && !Sp || Lp && cp && Ip || !xp && Ip || !Yp) return -1
      }
      return 0
    }
  },
  6043: (pp, ip, cp) => {
    var Op = cp(6047);
    pp.exports = function(pp, ip, cp) {
      for (var op = -1, Ip = pp.criteria, Sp = ip.criteria, xp = Ip.length, Lp = cp.length; ++op < xp;) {
        var Yp = Op(Ip[op], Sp[op]);
        if (Yp) return op >= Lp ? Yp : Yp * ("desc" == cp[op] ? -1 : 1)
      }
      return pp.index - ip.index
    }
  },
  5419: (pp, ip, cp) => {
    var Op = cp(5231)["__core-js_shared__"];
    pp.exports = Op
  },
  6037: (pp, ip, cp) => {
    var Op = cp(5660);
    pp.exports = function(pp, ip) {
      return function(cp, op) {
        if (null == cp) return cp;
        if (!Op(cp)) return pp(cp, op);
        for (var Ip = cp.length, Sp = ip ? Ip : -1, xp = Object(cp);
          (ip ? Sp-- : ++Sp < Ip) && !1 !== op(xp[Sp], Sp, xp););
        return cp
      }
    }
  },
  6035: pp => {
    pp.exports = function(pp) {
      return function(ip, cp, Op) {
        for (var op = -1, Ip = Object(ip), Sp = Op(ip), xp = Sp.length; xp--;) {
          var Lp = Sp[pp ? xp : ++op];
          if (!1 === cp(Ip[Lp], Lp, Ip)) break
        }
        return ip
      }
    }
  },
  6198: (pp, ip, cp) => {
    var Op = cp(6200),
      op = cp(6209),
      Ip = cp(6214),
      Sp = cp(5555);
    pp.exports = function(pp) {
      return function(ip) {
        ip = Sp(ip);
        var cp = op(ip) ? Ip(ip) : void 0,
          xp = cp ? cp[0] : ip.charAt(0),
          Lp = cp ? Op(cp, 1).join("") : ip.slice(1);
        return xp[pp]() + Lp
      }
    }
  },
  6482: (pp, ip, cp) => {
    var Op = cp(5727),
      op = cp(5660),
      Ip = cp(5882);
    pp.exports = function(pp) {
      return function(ip, cp, Sp) {
        var xp = Object(ip);
        if (!op(ip)) {
          var Lp = Op(cp, 3);
          ip = Ip(ip), cp = function(pp) {
            return Lp(xp[pp], pp, xp)
          }
        }
        var Yp = pp(ip, cp, Sp);
        return Yp > -1 ? xp[Lp ? ip[Yp] : Yp] : void 0
      }
    }
  },
  5647: (pp, ip, cp) => {
    var Op = cp(5652),
      op = cp(5655),
      Ip = cp(5683);
    pp.exports = function(pp) {
      return function(ip, cp, Sp) {
        return Sp && "number" != typeof Sp && op(ip, cp, Sp) && (cp = Sp = void 0), ip = Ip(ip), void 0 === cp ? (cp = ip, ip = 0) : cp = Ip(cp), Sp = void 0 === Sp ? ip < cp ? 1 : -1 : Ip(Sp), Op(ip, cp, Sp, pp)
      }
    }
  },
  6172: (pp, ip, cp) => {
    var Op = cp(5964),
      op = cp(6177),
      Ip = cp(5833),
      Sp = Op && 1 / Ip(new Op([, -0]))[1] == 1 / 0 ? function(pp) {
        return new Op(pp)
      } : op;
    pp.exports = Sp
  },
  6084: (pp, ip, cp) => {
    var Op = cp(5398),
      op = function() {
        try {
          var pp = Op(Object, "defineProperty");
          return pp({}, "", {}), pp
        } catch (ip) {}
      }();
    pp.exports = op
  },
  5784: (pp, ip, cp) => {
    var Op = cp(5791),
      op = cp(5805),
      Ip = cp(5810);
    pp.exports = function(pp, ip, cp, Sp, xp, Lp) {
      var Yp = 1 & cp,
        Dp = pp.length,
        Ap = ip.length;
      if (Dp != Ap && !(Yp && Ap > Dp)) return !1;
      var Pp = Lp.get(pp),
        Wp = Lp.get(ip);
      if (Pp && Wp) return Pp == ip && Wp == pp;
      var yp = -1,
        Up = !0,
        wp = 2 & cp ? new Op : void 0;
      for (Lp.set(pp, ip), Lp.set(ip, pp); ++yp < Dp;) {
        var vp = pp[yp],
          tp = ip[yp];
        if (Sp) var Hp = Yp ? Sp(tp, vp, yp, ip, pp, Lp) : Sp(vp, tp, yp, pp, ip, Lp);
        if (void 0 !== Hp) {
          if (Hp) continue;
          Up = !1;
          break
        }
        if (wp) {
          if (!op(ip, (function(pp, ip) {
              if (!Ip(wp, ip) && (vp === pp || xp(vp, pp, cp, Sp, Lp))) return wp.push(ip)
            }))) {
            Up = !1;
            break
          }
        } else if (vp !== tp && !xp(vp, tp, cp, Sp, Lp)) {
          Up = !1;
          break
        }
      }
      return Lp.delete(pp), Lp.delete(ip), Up
    }
  },
  5818: (pp, ip, cp) => {
    var Op = cp(5272),
      op = cp(5822),
      Ip = cp(5492),
      Sp = cp(5784),
      xp = cp(5826),
      Lp = cp(5833),
      Yp = Op ? Op.prototype : void 0,
      Dp = Yp ? Yp.valueOf : void 0;
    pp.exports = function(pp, ip, cp, Op, Yp, Ap, Pp) {
      switch (cp) {
        case "[object DataView]":
          if (pp.byteLength != ip.byteLength || pp.byteOffset != ip.byteOffset) return !1;
          pp = pp.buffer, ip = ip.buffer;
        case "[object ArrayBuffer]":
          return !(pp.byteLength != ip.byteLength || !Ap(new op(pp), new op(ip)));
        case "[object Boolean]":
        case "[object Date]":
        case "[object Number]":
          return Ip(+pp, +ip);
        case "[object Error]":
          return pp.name == ip.name && pp.message == ip.message;
        case "[object RegExp]":
        case "[object String]":
          return pp == ip + "";
        case "[object Map]":
          var Wp = xp;
        case "[object Set]":
          var yp = 1 & Op;
          if (Wp || (Wp = Lp), pp.size != ip.size && !yp) return !1;
          var Up = Pp.get(pp);
          if (Up) return Up == ip;
          Op |= 2, Pp.set(pp, ip);
          var wp = Sp(Wp(pp), Wp(ip), Op, Yp, Ap, Pp);
          return Pp.delete(pp), wp;
        case "[object Symbol]":
          if (Dp) return Dp.call(pp) == Dp.call(ip)
      }
      return !1
    }
  },
  5840: (pp, ip, cp) => {
    var Op = cp(5849),
      op = Object.prototype.hasOwnProperty;
    pp.exports = function(pp, ip, cp, Ip, Sp, xp) {
      var Lp = 1 & cp,
        Yp = Op(pp),
        Dp = Yp.length;
      if (Dp != Op(ip).length && !Lp) return !1;
      for (var Ap = Dp; Ap--;) {
        var Pp = Yp[Ap];
        if (!(Lp ? Pp in ip : op.call(ip, Pp))) return !1
      }
      var Wp = xp.get(pp),
        yp = xp.get(ip);
      if (Wp && yp) return Wp == ip && yp == pp;
      var Up = !0;
      xp.set(pp, ip), xp.set(ip, pp);
      for (var wp = Lp; ++Ap < Dp;) {
        var vp = pp[Pp = Yp[Ap]],
          tp = ip[Pp];
        if (Ip) var Hp = Lp ? Ip(tp, vp, Pp, ip, pp, xp) : Ip(vp, tp, Pp, pp, ip, xp);
        if (!(void 0 === Hp ? vp === tp || Sp(vp, tp, cp, Ip, xp) : Hp)) {
          Up = !1;
          break
        }
        wp || (wp = "constructor" == Pp)
      }
      if (Up && !wp) {
        var dp = pp.constructor,
          ep = ip.constructor;
        dp == ep || !("constructor" in pp) || !("constructor" in ip) || "function" == typeof dp && dp instanceof dp && "function" == typeof ep && ep instanceof ep || (Up = !1)
      }
      return xp.delete(pp), xp.delete(ip), Up
    }
  },
  5235: (pp, ip, cp) => {
    var Op = "object" == typeof cp.g && cp.g && cp.g.Object === Object && cp.g;
    pp.exports = Op
  },
  5849: (pp, ip, cp) => {
    var Op = cp(5856),
      op = cp(5864),
      Ip = cp(5882);
    pp.exports = function(pp) {
      return Op(pp, Ip, op)
    }
  },
  5521: (pp, ip, cp) => {
    var Op = cp(5530);
    pp.exports = function(pp, ip) {
      var cp = pp.__data__;
      return Op(ip) ? cp["string" == typeof ip ? "string" : "hash"] : cp.map
    }
  },
  5971: (pp, ip, cp) => {
    var Op = cp(5974),
      op = cp(5882);
    pp.exports = function(pp) {
      for (var ip = op(pp), cp = ip.length; cp--;) {
        var Ip = ip[cp],
          Sp = pp[Ip];
        ip[cp] = [Ip, Sp, Op(Sp)]
      }
      return ip
    }
  },
  5398: (pp, ip, cp) => {
    var Op = cp(5403),
      op = cp(5436);
    pp.exports = function(pp, ip) {
      var cp = op(pp, ip);
      return Op(cp) ? cp : void 0
    }
  },
  6436: (pp, ip, cp) => {
    var Op = cp(5941)(Object.getPrototypeOf, Object);
    pp.exports = Op
  },
  5277: (pp, ip, cp) => {
    var Op = cp(5272),
      op = Object.prototype,
      Ip = op.hasOwnProperty,
      Sp = op.toString,
      xp = Op ? Op.toStringTag : void 0;
    pp.exports = function(pp) {
      var ip = Ip.call(pp, xp),
        cp = pp[xp];
      try {
        pp[xp] = void 0;
        var Op = !0
      } catch (Lp) {}
      var op = Sp.call(pp);
      return Op && (ip ? pp[xp] = cp : delete pp[xp]), op
    }
  },
  5864: (pp, ip, cp) => {
    var Op = cp(5873),
      op = cp(5877),
      Ip = Object.prototype.propertyIsEnumerable,
      Sp = Object.getOwnPropertySymbols,
      xp = Sp ? function(pp) {
        return null == pp ? [] : (pp = Object(pp), Op(Sp(pp), (function(ip) {
          return Ip.call(pp, ip)
        })))
      } : op;
    pp.exports = xp
  },
  5943: (pp, ip, cp) => {
    var Op = cp(5946),
      op = cp(5515),
      Ip = cp(5955),
      Sp = cp(5964),
      xp = cp(5968),
      Lp = cp(5266),
      Yp = cp(5427),
      Dp = "[object Map]",
      Ap = "[object Promise]",
      Pp = "[object Set]",
      Wp = "[object WeakMap]",
      yp = "[object DataView]",
      Up = Yp(Op),
      wp = Yp(op),
      vp = Yp(Ip),
      tp = Yp(Sp),
      Hp = Yp(xp),
      dp = Lp;
    (Op && dp(new Op(new ArrayBuffer(1))) != yp || op && dp(new op) != Dp || Ip && dp(Ip.resolve()) != Ap || Sp && dp(new Sp) != Pp || xp && dp(new xp) != Wp) && (dp = function(pp) {
      var ip = Lp(pp),
        cp = "[object Object]" == ip ? pp.constructor : void 0,
        Op = cp ? Yp(cp) : "";
      if (Op) switch (Op) {
        case Up:
          return yp;
        case wp:
          return Dp;
        case vp:
          return Ap;
        case tp:
          return Pp;
        case Hp:
          return Wp
      }
      return ip
    }), pp.exports = dp
  },
  5436: pp => {
    pp.exports = function(pp, ip) {
      return null == pp ? void 0 : pp[ip]
    }
  },
  5998: (pp, ip, cp) => {
    var Op = cp(5340),
      op = cp(5715),
      Ip = cp(5310),
      Sp = cp(5674),
      xp = cp(5669),
      Lp = cp(5569);
    pp.exports = function(pp, ip, cp) {
      for (var Yp = -1, Dp = (ip = Op(ip, pp)).length, Ap = !1; ++Yp < Dp;) {
        var Pp = Lp(ip[Yp]);
        if (!(Ap = null != pp && cp(pp, Pp))) break;
        pp = pp[Pp]
      }
      return Ap || ++Yp != Dp ? Ap : !!(Dp = null == pp ? 0 : pp.length) && xp(Dp) && Sp(Pp, Dp) && (Ip(pp) || op(pp))
    }
  },
  6209: pp => {
    var ip = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
    pp.exports = function(pp) {
      return ip.test(pp)
    }
  },
  5381: (pp, ip, cp) => {
    var Op = cp(5389);
    pp.exports = function() {
      this.__data__ = Op ? Op(null) : {}, this.size = 0
    }
  },
  5443: pp => {
    pp.exports = function(pp) {
      var ip = this.has(pp) && delete this.__data__[pp];
      return this.size -= ip ? 1 : 0, ip
    }
  },
  5452: (pp, ip, cp) => {
    var Op = cp(5389),
      op = Object.prototype.hasOwnProperty;
    pp.exports = function(pp) {
      var ip = this.__data__;
      if (Op) {
        var cp = ip[pp];
        return "__lodash_hash_undefined__" === cp ? void 0 : cp
      }
      return op.call(ip, pp) ? ip[pp] : void 0
    }
  },
  5460: (pp, ip, cp) => {
    var Op = cp(5389),
      op = Object.prototype.hasOwnProperty;
    pp.exports = function(pp) {
      var ip = this.__data__;
      return Op ? void 0 !== ip[pp] : op.call(ip, pp)
    }
  },
  5463: (pp, ip, cp) => {
    var Op = cp(5389);
    pp.exports = function(pp, ip) {
      var cp = this.__data__;
      return this.size += this.has(pp) ? 0 : 1, cp[pp] = Op && void 0 === ip ? "__lodash_hash_undefined__" : ip, this
    }
  },
  5713: (pp, ip, cp) => {
    var Op = cp(5272),
      op = cp(5715),
      Ip = cp(5310),
      Sp = Op ? Op.isConcatSpreadable : void 0;
    pp.exports = function(pp) {
      return Ip(pp) || op(pp) || !!(Sp && pp && pp[Sp])
    }
  },
  5674: pp => {
    var ip = /^(?:0|[1-9]\d*)$/;
    pp.exports = function(pp, cp) {
      var Op = typeof pp;
      return !!(cp = null == cp ? 9007199254740991 : cp) && ("number" == Op || "symbol" != Op && ip.test(pp)) && pp > -1 && pp % 1 == 0 && pp < cp
    }
  },
  5655: (pp, ip, cp) => {
    var Op = cp(5492),
      op = cp(5660),
      Ip = cp(5674),
      Sp = cp(5214);
    pp.exports = function(pp, ip, cp) {
      if (!Sp(cp)) return !1;
      var xp = typeof ip;
      return !!("number" == xp ? op(cp) && Ip(ip, cp.length) : "string" == xp && ip in cp) && Op(cp[ip], pp)
    }
  },
  5345: (pp, ip, cp) => {
    var Op = cp(5310),
      op = cp(5257),
      Ip = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      Sp = /^\w*$/;
    pp.exports = function(pp, ip) {
      if (Op(pp)) return !1;
      var cp = typeof pp;
      return !("number" != cp && "symbol" != cp && "boolean" != cp && null != pp && !op(pp)) || (Sp.test(pp) || !Ip.test(pp) || null != ip && pp in Object(ip))
    }
  },
  5530: pp => {
    pp.exports = function(pp) {
      var ip = typeof pp;
      return "string" == ip || "number" == ip || "symbol" == ip || "boolean" == ip ? "__proto__" !== pp : null === pp
    }
  },
  5410: (pp, ip, cp) => {
    var Op = cp(5419),
      op = function() {
        var pp = /[^.]+$/.exec(Op && Op.keys && Op.keys.IE_PROTO || "");
        return pp ? "Symbol(src)_1." + pp : ""
      }();
    pp.exports = function(pp) {
      return !!op && op in pp
    }
  },
  5933: pp => {
    var ip = Object.prototype;
    pp.exports = function(pp) {
      var cp = pp && pp.constructor;
      return pp === ("function" == typeof cp && cp.prototype || ip)
    }
  },
  5974: (pp, ip, cp) => {
    var Op = cp(5214);
    pp.exports = function(pp) {
      return pp === pp && !Op(pp)
    }
  },
  5475: pp => {
    pp.exports = function() {
      this.__data__ = [], this.size = 0
    }
  },
  5477: (pp, ip, cp) => {
    var Op = cp(5483),
      op = Array.prototype.splice;
    pp.exports = function(pp) {
      var ip = this.__data__,
        cp = Op(ip, pp);
      return !(cp < 0) && (cp == ip.length - 1 ? ip.pop() : op.call(ip, cp, 1), --this.size, !0)
    }
  },
  5496: (pp, ip, cp) => {
    var Op = cp(5483);
    pp.exports = function(pp) {
      var ip = this.__data__,
        cp = Op(ip, pp);
      return cp < 0 ? void 0 : ip[cp][1]
    }
  },
  5498: (pp, ip, cp) => {
    var Op = cp(5483);
    pp.exports = function(pp) {
      return Op(this.__data__, pp) > -1
    }
  },
  5506: (pp, ip, cp) => {
    var Op = cp(5483);
    pp.exports = function(pp, ip) {
      var cp = this.__data__,
        op = Op(cp, pp);
      return op < 0 ? (++this.size, cp.push([pp, ip])) : cp[op][1] = ip, this
    }
  },
  5367: (pp, ip, cp) => {
    var Op = cp(5373),
      op = cp(5469),
      Ip = cp(5515);
    pp.exports = function() {
      this.size = 0, this.__data__ = {
        hash: new Op,
        map: new(Ip || op),
        string: new Op
      }
    }
  },
  5518: (pp, ip, cp) => {
    var Op = cp(5521);
    pp.exports = function(pp) {
      var ip = Op(this, pp).delete(pp);
      return this.size -= ip ? 1 : 0, ip
    }
  },
  5536: (pp, ip, cp) => {
    var Op = cp(5521);
    pp.exports = function(pp) {
      return Op(this, pp).get(pp)
    }
  },
  5542: (pp, ip, cp) => {
    var Op = cp(5521);
    pp.exports = function(pp) {
      return Op(this, pp).has(pp)
    }
  },
  5551: (pp, ip, cp) => {
    var Op = cp(5521);
    pp.exports = function(pp, ip) {
      var cp = Op(this, pp),
        op = cp.size;
      return cp.set(pp, ip), this.size += cp.size == op ? 0 : 1, this
    }
  },
  5826: pp => {
    pp.exports = function(pp) {
      var ip = -1,
        cp = Array(pp.size);
      return pp.forEach((function(pp, Op) {
        cp[++ip] = [Op, pp]
      })), cp
    }
  },
  5977: pp => {
    pp.exports = function(pp, ip) {
      return function(cp) {
        return null != cp && (cp[pp] === ip && (void 0 !== ip || pp in Object(cp)))
      }
    }
  },
  5354: (pp, ip, cp) => {
    var Op = cp(5362);
    pp.exports = function(pp) {
      var ip = Op(pp, (function(pp) {
          return 500 === cp.size && cp.clear(), pp
        })),
        cp = ip.cache;
      return ip
    }
  },
  5389: (pp, ip, cp) => {
    var Op = cp(5398)(Object, "create");
    pp.exports = Op
  },
  5938: (pp, ip, cp) => {
    var Op = cp(5941)(Object.keys, Object);
    pp.exports = Op
  },
  5927: (pp, ip, cp) => {
    pp = cp.nmd(pp);
    var Op = cp(5235),
      op = ip && !ip.nodeType && ip,
      Ip = op && pp && !pp.nodeType && pp,
      Sp = Ip && Ip.exports === op && Op.process,
      xp = function() {
        try {
          var pp = Ip && Ip.require && Ip.require("util").types;
          return pp || Sp && Sp.binding && Sp.binding("util")
        } catch (ip) {}
      }();
    pp.exports = xp
  },
  5284: pp => {
    var ip = Object.prototype.toString;
    pp.exports = function(pp) {
      return ip.call(pp)
    }
  },
  5941: pp => {
    pp.exports = function(pp, ip) {
      return function(cp) {
        return pp(ip(cp))
      }
    }
  },
  6056: (pp, ip, cp) => {
    var Op = cp(6058),
      op = Math.max;
    pp.exports = function(pp, ip, cp) {
      return ip = op(void 0 === ip ? pp.length - 1 : ip, 0),
        function() {
          for (var Ip = arguments, Sp = -1, xp = op(Ip.length - ip, 0), Lp = Array(xp); ++Sp < xp;) Lp[Sp] = Ip[ip + Sp];
          Sp = -1;
          for (var Yp = Array(ip + 1); ++Sp < ip;) Yp[Sp] = Ip[Sp];
          return Yp[ip] = cp(Lp), Op(pp, this, Yp)
        }
    }
  },
  5231: (pp, ip, cp) => {
    var Op = cp(5235),
      op = "object" == typeof self && self && self.Object === Object && self,
      Ip = Op || op || Function("return this")();
    pp.exports = Ip
  },
  5794: pp => {
    pp.exports = function(pp) {
      return this.__data__.set(pp, "__lodash_hash_undefined__"), this
    }
  },
  5801: pp => {
    pp.exports = function(pp) {
      return this.__data__.has(pp)
    }
  },
  5833: pp => {
    pp.exports = function(pp) {
      var ip = -1,
        cp = Array(pp.size);
      return pp.forEach((function(pp) {
        cp[++ip] = pp
      })), cp
    }
  },
  6066: (pp, ip, cp) => {
    var Op = cp(6075),
      op = cp(6087)(Op);
    pp.exports = op
  },
  6087: pp => {
    var ip = Date.now;
    pp.exports = function(pp) {
      var cp = 0,
        Op = 0;
      return function() {
        var op = ip(),
          Ip = 16 - (op - Op);
        if (Op = op, Ip > 0) {
          if (++cp >= 800) return arguments[0]
        } else cp = 0;
        return pp.apply(void 0, arguments)
      }
    }
  },
  5745: (pp, ip, cp) => {
    var Op = cp(5469);
    pp.exports = function() {
      this.__data__ = new Op, this.size = 0
    }
  },
  5749: pp => {
    pp.exports = function(pp) {
      var ip = this.__data__,
        cp = ip.delete(pp);
      return this.size = ip.size, cp
    }
  },
  5755: pp => {
    pp.exports = function(pp) {
      return this.__data__.get(pp)
    }
  },
  5760: pp => {
    pp.exports = function(pp) {
      return this.__data__.has(pp)
    }
  },
  5767: (pp, ip, cp) => {
    var Op = cp(5469),
      op = cp(5515),
      Ip = cp(5364);
    pp.exports = function(pp, ip) {
      var cp = this.__data__;
      if (cp instanceof Op) {
        var Sp = cp.__data__;
        if (!op || Sp.length < 199) return Sp.push([pp, ip]), this.size = ++cp.size, this;
        cp = this.__data__ = new Ip(Sp)
      }
      return cp.set(pp, ip), this.size = cp.size, this
    }
  },
  6162: pp => {
    pp.exports = function(pp, ip, cp) {
      for (var Op = cp - 1, op = pp.length; ++Op < op;)
        if (pp[Op] === ip) return Op;
      return -1
    }
  },
  6214: (pp, ip, cp) => {
    var Op = cp(6219),
      op = cp(6209),
      Ip = cp(6224);
    pp.exports = function(pp) {
      return op(pp) ? Ip(pp) : Op(pp)
    }
  },
  5350: (pp, ip, cp) => {
    var Op = cp(5354),
      op = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      Ip = /\\(\\)?/g,
      Sp = Op((function(pp) {
        var ip = [];
        return 46 === pp.charCodeAt(0) && ip.push(""), pp.replace(op, (function(pp, cp, Op, op) {
          ip.push(Op ? op.replace(Ip, "$1") : cp || pp)
        })), ip
      }));
    pp.exports = Sp
  },
  5569: (pp, ip, cp) => {
    var Op = cp(5257);
    pp.exports = function(pp) {
      if ("string" == typeof pp || Op(pp)) return pp;
      var ip = pp + "";
      return "0" == ip && 1 / pp == -1 / 0 ? "-0" : ip
    }
  },
  5427: pp => {
    var ip = Function.prototype.toString;
    pp.exports = function(pp) {
      if (null != pp) {
        try {
          return ip.call(pp)
        } catch (cp) {}
        try {
          return pp + ""
        } catch (cp) {}
      }
      return ""
    }
  },
  5248: pp => {
    var ip = /\s/;
    pp.exports = function(pp) {
      for (var cp = pp.length; cp-- && ip.test(pp.charAt(cp)););
      return cp
    }
  },
  6224: pp => {
    var ip = "\\ud800-\\udfff",
      cp = "[" + ip + "]",
      Op = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
      op = "\\ud83c[\\udffb-\\udfff]",
      Ip = "[^" + ip + "]",
      Sp = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      xp = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      Lp = "(?:" + Op + "|" + op + ")" + "?",
      Yp = "[\\ufe0e\\ufe0f]?",
      Dp = Yp + Lp + ("(?:\\u200d(?:" + [Ip, Sp, xp].join("|") + ")" + Yp + Lp + ")*"),
      Ap = "(?:" + [Ip + Op + "?", Op, Sp, xp, cp].join("|") + ")",
      Pp = RegExp(op + "(?=" + op + ")|" + Ap + Dp, "g");
    pp.exports = function(pp) {
      return pp.match(Pp) || []
    }
  },
  6081: pp => {
    pp.exports = function(pp) {
      return function() {
        return pp
      }
    }
  },
  5212: (pp, ip, cp) => {
    var Op = cp(5214),
      op = cp(5222),
      Ip = cp(5238),
      Sp = Math.max,
      xp = Math.min;
    pp.exports = function(pp, ip, cp) {
      var Lp, Yp, Dp, Ap, Pp, Wp, yp = 0,
        Up = !1,
        wp = !1,
        vp = !0;
      if ("function" != typeof pp) throw new TypeError("Expected a function");

      function tp(ip) {
        var cp = Lp,
          Op = Yp;
        return Lp = Yp = void 0, yp = ip, Ap = pp.apply(Op, cp)
      }

      function Hp(pp) {
        var cp = pp - Wp;
        return void 0 === Wp || cp >= ip || cp < 0 || wp && pp - yp >= Dp
      }

      function dp() {
        var pp = op();
        if (Hp(pp)) return ep(pp);
        Pp = setTimeout(dp, function(pp) {
          var cp = ip - (pp - Wp);
          return wp ? xp(cp, Dp - (pp - yp)) : cp
        }(pp))
      }

      function ep(pp) {
        return Pp = void 0, vp && Lp ? tp(pp) : (Lp = Yp = void 0, Ap)
      }

      function jp() {
        var pp = op(),
          cp = Hp(pp);
        if (Lp = arguments, Yp = this, Wp = pp, cp) {
          if (void 0 === Pp) return function(pp) {
            return yp = pp, Pp = setTimeout(dp, ip), Up ? tp(pp) : Ap
          }(Wp);
          if (wp) return clearTimeout(Pp), Pp = setTimeout(dp, ip), tp(Wp)
        }
        return void 0 === Pp && (Pp = setTimeout(dp, ip)), Ap
      }
      return ip = Ip(ip) || 0, Op(cp) && (Up = !!cp.leading, Dp = (wp = "maxWait" in cp) ? Sp(Ip(cp.maxWait) || 0, ip) : Dp, vp = "trailing" in cp ? !!cp.trailing : vp), jp.cancel = function() {
        void 0 !== Pp && clearTimeout(Pp), yp = 0, Lp = Wp = Yp = Pp = void 0
      }, jp.flush = function() {
        return void 0 === Pp ? Ap : ep(op())
      }, jp
    }
  },
  5492: pp => {
    pp.exports = function(pp, ip) {
      return pp === ip || pp !== pp && ip !== ip
    }
  },
  6383: (pp, ip, cp) => {
    var Op = cp(6391),
      op = cp(6393),
      Ip = cp(5727),
      Sp = cp(5310),
      xp = cp(5655);
    pp.exports = function(pp, ip, cp) {
      var Lp = Sp(pp) ? Op : op;
      return cp && xp(pp, ip, cp) && (ip = void 0), Lp(pp, Ip(ip, 3))
    }
  },
  6475: (pp, ip, cp) => {
    var Op = cp(6482)(cp(6484));
    pp.exports = Op
  },
  6484: (pp, ip, cp) => {
    var Op = cp(6149),
      op = cp(5727),
      Ip = cp(6490),
      Sp = Math.max;
    pp.exports = function(pp, ip, cp) {
      var xp = null == pp ? 0 : pp.length;
      if (!xp) return -1;
      var Lp = null == cp ? 0 : Ip(cp);
      return Lp < 0 && (Lp = Sp(xp + Lp, 0)), Op(pp, op(ip, 3), Lp)
    }
  },
  6312: (pp, ip, cp) => {
    var Op = cp(5699),
      op = cp(6314);
    pp.exports = function(pp, ip) {
      return Op(op(pp, ip), 1)
    }
  },
  5326: (pp, ip, cp) => {
    var Op = cp(5332);
    pp.exports = function(pp, ip, cp) {
      var op = null == pp ? void 0 : Op(pp, ip);
      return void 0 === op ? cp : op
    }
  },
  5986: (pp, ip, cp) => {
    var Op = cp(5994),
      op = cp(5998);
    pp.exports = function(pp, ip) {
      return null != pp && op(pp, ip, Op)
    }
  },
  6004: pp => {
    pp.exports = function(pp) {
      return pp
    }
  },
  5715: (pp, ip, cp) => {
    var Op = cp(5718),
      op = cp(5292),
      Ip = Object.prototype,
      Sp = Ip.hasOwnProperty,
      xp = Ip.propertyIsEnumerable,
      Lp = Op(function() {
        return arguments
      }()) ? Op : function(pp) {
        return op(pp) && Sp.call(pp, "callee") && !xp.call(pp, "callee")
      };
    pp.exports = Lp
  },
  5310: pp => {
    var ip = Array.isArray;
    pp.exports = ip
  },
  5660: (pp, ip, cp) => {
    var Op = cp(5405),
      op = cp(5669);
    pp.exports = function(pp) {
      return null != pp && op(pp.length) && !Op(pp)
    }
  },
  6443: (pp, ip, cp) => {
    var Op = cp(5266),
      op = cp(5292);
    pp.exports = function(pp) {
      return !0 === pp || !1 === pp || op(pp) && "[object Boolean]" == Op(pp)
    }
  },
  5895: (pp, ip, cp) => {
    pp = cp.nmd(pp);
    var Op = cp(5231),
      op = cp(5903),
      Ip = ip && !ip.nodeType && ip,
      Sp = Ip && pp && !pp.nodeType && pp,
      xp = Sp && Sp.exports === Ip ? Op.my : void 0,
      Lp = (xp ? xp.isBuffer : void 0) || op;
    pp.exports = Lp
  },
  6322: (pp, ip, cp) => {
    var Op = cp(5770);
    pp.exports = function(pp, ip) {
      return Op(pp, ip)
    }
  },
  5405: (pp, ip, cp) => {
    var Op = cp(5266),
      op = cp(5214);
    pp.exports = function(pp) {
      if (!op(pp)) return !1;
      var ip = Op(pp);
      return "[object Function]" == ip || "[object GeneratorFunction]" == ip || "[object AsyncFunction]" == ip || "[object Proxy]" == ip
    }
  },
  5669: pp => {
    pp.exports = function(pp) {
      return "number" == typeof pp && pp > -1 && pp % 1 == 0 && pp <= 9007199254740991
    }
  },
  5319: (pp, ip, cp) => {
    var Op = cp(5323);
    pp.exports = function(pp) {
      return Op(pp) && pp != +pp
    }
  },
  5575: pp => {
    pp.exports = function(pp) {
      return null == pp
    }
  },
  5323: (pp, ip, cp) => {
    var Op = cp(5266),
      op = cp(5292);
    pp.exports = function(pp) {
      return "number" == typeof pp || op(pp) && "[object Number]" == Op(pp)
    }
  },
  5214: pp => {
    pp.exports = function(pp) {
      var ip = typeof pp;
      return null != pp && ("object" == ip || "function" == ip)
    }
  },
  5292: pp => {
    pp.exports = function(pp) {
      return null != pp && "object" == typeof pp
    }
  },
  6434: (pp, ip, cp) => {
    var Op = cp(5266),
      op = cp(6436),
      Ip = cp(5292),
      Sp = Function.prototype,
      xp = Object.prototype,
      Lp = Sp.toString,
      Yp = xp.hasOwnProperty,
      Dp = Lp.call(Object);
    pp.exports = function(pp) {
      if (!Ip(pp) || "[object Object]" != Op(pp)) return !1;
      var ip = op(pp);
      if (null === ip) return !0;
      var cp = Yp.call(ip, "constructor") && ip.constructor;
      return "function" == typeof cp && cp instanceof cp && Lp.call(cp) == Dp
    }
  },
  5301: (pp, ip, cp) => {
    var Op = cp(5266),
      op = cp(5310),
      Ip = cp(5292);
    pp.exports = function(pp) {
      return "string" == typeof pp || !op(pp) && Ip(pp) && "[object String]" == Op(pp)
    }
  },
  5257: (pp, ip, cp) => {
    var Op = cp(5266),
      op = cp(5292);
    pp.exports = function(pp) {
      return "symbol" == typeof pp || op(pp) && "[object Symbol]" == Op(pp)
    }
  },
  5910: (pp, ip, cp) => {
    var Op = cp(5916),
      op = cp(5918),
      Ip = cp(5927),
      Sp = Ip && Ip.isTypedArray,
      xp = Sp ? op(Sp) : Op;
    pp.exports = xp
  },
  5882: (pp, ip, cp) => {
    var Op = cp(5884),
      op = cp(5930),
      Ip = cp(5660);
    pp.exports = function(pp) {
      return Ip(pp) ? Op(pp) : op(pp)
    }
  },
  6419: pp => {
    pp.exports = function(pp) {
      var ip = null == pp ? 0 : pp.length;
      return ip ? pp[ip - 1] : void 0
    }
  },
  6314: (pp, ip, cp) => {
    var Op = cp(5565),
      op = cp(5727),
      Ip = cp(6025),
      Sp = cp(5310);
    pp.exports = function(pp, ip) {
      return (Sp(pp) ? Op : Ip)(pp, op(ip, 3))
    }
  },
  6375: (pp, ip, cp) => {
    var Op = cp(6379),
      op = cp(6030),
      Ip = cp(5727);
    pp.exports = function(pp, ip) {
      var cp = {};
      return ip = Ip(ip, 3), op(pp, (function(pp, op, Ip) {
        Op(cp, op, ip(pp, op, Ip))
      })), cp
    }
  },
  6297: (pp, ip, cp) => {
    var Op = cp(6300),
      op = cp(6303),
      Ip = cp(6004);
    pp.exports = function(pp) {
      return pp && pp.length ? Op(pp, Ip, op) : void 0
    }
  },
  5362: (pp, ip, cp) => {
    var Op = cp(5364);

    function op(pp, ip) {
      if ("function" != typeof pp || null != ip && "function" != typeof ip) throw new TypeError("Expected a function");
      var cp = function() {
        var Op = arguments,
          op = ip ? ip.apply(this, Op) : Op[0],
          Ip = cp.cache;
        if (Ip.has(op)) return Ip.get(op);
        var Sp = pp.apply(this, Op);
        return cp.cache = Ip.set(op, Sp) || Ip, Sp
      };
      return cp.cache = new(op.Cache || Op), cp
    }
    op.Cache = Op, pp.exports = op
  },
  6305: (pp, ip, cp) => {
    var Op = cp(6300),
      op = cp(6309),
      Ip = cp(6004);
    pp.exports = function(pp) {
      return pp && pp.length ? Op(pp, Ip, op) : void 0
    }
  },
  6177: pp => {
    pp.exports = function() {}
  },
  5222: (pp, ip, cp) => {
    var Op = cp(5231);
    pp.exports = function() {
      return Op.Date.now()
    }
  },
  6006: (pp, ip, cp) => {
    var Op = cp(6014),
      op = cp(6018),
      Ip = cp(5345),
      Sp = cp(5569);
    pp.exports = function(pp) {
      return Ip(pp) ? Op(Sp(pp)) : op(pp)
    }
  },
  5642: (pp, ip, cp) => {
    var Op = cp(5647)();
    pp.exports = Op
  },
  6458: (pp, ip, cp) => {
    var Op = cp(5805),
      op = cp(5727),
      Ip = cp(6461),
      Sp = cp(5310),
      xp = cp(5655);
    pp.exports = function(pp, ip, cp) {
      var Lp = Sp(pp) ? Op : Ip;
      return cp && xp(pp, ip, cp) && (ip = void 0), Lp(pp, op(ip, 3))
    }
  },
  5692: (pp, ip, cp) => {
    var Op = cp(5699),
      op = cp(5724),
      Ip = cp(6049),
      Sp = cp(5655),
      xp = Ip((function(pp, ip) {
        if (null == pp) return [];
        var cp = ip.length;
        return cp > 1 && Sp(pp, ip[0], ip[1]) ? ip = [] : cp > 2 && Sp(ip[0], ip[1], ip[2]) && (ip = [ip[0]]), op(pp, Op(ip, 1), [])
      }));
    pp.exports = xp
  },
  5877: pp => {
    pp.exports = function() {
      return []
    }
  },
  5903: pp => {
    pp.exports = function() {
      return !1
    }
  },
  5207: (pp, ip, cp) => {
    var Op = cp(5212),
      op = cp(5214);
    pp.exports = function(pp, ip, cp) {
      var Ip = !0,
        Sp = !0;
      if ("function" != typeof pp) throw new TypeError("Expected a function");
      return op(cp) && (Ip = "leading" in cp ? !!cp.leading : Ip, Sp = "trailing" in cp ? !!cp.trailing : Sp), Op(pp, ip, {
        leading: Ip,
        maxWait: ip,
        trailing: Sp
      })
    }
  },
  5683: (pp, ip, cp) => {
    var Op = cp(5238),
      op = 1 / 0;
    pp.exports = function(pp) {
      return pp ? (pp = Op(pp)) === op || pp === -1 / 0 ? 17976931348623157e292 * (pp < 0 ? -1 : 1) : pp === pp ? pp : 0 : 0 === pp ? pp : 0
    }
  },
  6490: (pp, ip, cp) => {
    var Op = cp(5683);
    pp.exports = function(pp) {
      var ip = Op(pp),
        cp = ip % 1;
      return ip === ip ? cp ? ip - cp : ip : 0
    }
  },
  5238: (pp, ip, cp) => {
    var Op = cp(5242),
      op = cp(5214),
      Ip = cp(5257),
      Sp = /^[-+]0x[0-9a-f]+$/i,
      xp = /^0b[01]+$/i,
      Lp = /^0o[0-7]+$/i,
      Yp = parseInt;
    pp.exports = function(pp) {
      if ("number" == typeof pp) return pp;
      if (Ip(pp)) return NaN;
      if (op(pp)) {
        var ip = "function" == typeof pp.valueOf ? pp.valueOf() : pp;
        pp = op(ip) ? ip + "" : ip
      }
      if ("string" != typeof pp) return 0 === pp ? pp : +pp;
      pp = Op(pp);
      var cp = xp.test(pp);
      return cp || Lp.test(pp) ? Yp(pp.slice(2), cp ? 2 : 8) : Sp.test(pp) ? NaN : +pp
    }
  },
  5555: (pp, ip, cp) => {
    var Op = cp(5557);
    pp.exports = function(pp) {
      return null == pp ? "" : Op(pp)
    }
  },
  6123: (pp, ip, cp) => {
    var Op = cp(5727),
      op = cp(6130);
    pp.exports = function(pp, ip) {
      return pp && pp.length ? op(pp, Op(ip, 2)) : []
    }
  },
  6192: (pp, ip, cp) => {
    var Op = cp(6198)("toUpperCase");
    pp.exports = Op
  },
  6256: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Ti
    });
    var Op = cp(62),
      op = cp(5081),
      Ip = cp.n(op);
    const {
      getOwnPropertyNames: Sp,
      getOwnPropertySymbols: xp
    } = Object, {
      hasOwnProperty: Lp
    } = Object.prototype;

    function Yp(pp, ip) {
      return function(cp, Op, op) {
        return pp(cp, Op, op) && ip(cp, Op, op)
      }
    }

    function Dp(pp) {
      return function(ip, cp, Op) {
        if (!ip || !cp || "object" !== typeof ip || "object" !== typeof cp) return pp(ip, cp, Op);
        const {
          cache: op
        } = Op, Ip = op.get(ip), Sp = op.get(cp);
        if (Ip && Sp) return Ip === cp && Sp === ip;
        op.set(ip, cp), op.set(cp, ip);
        const xp = pp(ip, cp, Op);
        return op.delete(ip), op.delete(cp), xp
      }
    }

    function Ap(pp) {
      return Sp(pp).concat(xp(pp))
    }
    const Pp = Object.hasOwn || ((pp, ip) => Lp.call(pp, ip));

    function Wp(pp, ip) {
      return pp === ip || !pp && !ip && pp !== pp && ip !== ip
    }
    const {
      getOwnPropertyDescriptor: yp,
      keys: Up
    } = Object;

    function wp(pp, ip) {
      return pp.byteLength === ip.byteLength && Ep(new Uint8Array(pp), new Uint8Array(ip))
    }

    function vp(pp, ip, cp) {
      let Op = pp.length;
      if (ip.length !== Op) return !1;
      for (; Op-- > 0;)
        if (!cp.equals(pp[Op], ip[Op], Op, Op, pp, ip, cp)) return !1;
      return !0
    }

    function tp(pp, ip) {
      return pp.byteLength === ip.byteLength && Ep(new Uint8Array(pp.buffer, pp.byteOffset, pp.byteLength), new Uint8Array(ip.buffer, ip.byteOffset, ip.byteLength))
    }

    function Hp(pp, ip) {
      return Wp(pp.getTime(), ip.getTime())
    }

    function dp(pp, ip) {
      return pp.name === ip.name && pp.message === ip.message && pp.cause === ip.cause && pp.stack === ip.stack
    }

    function ep(pp, ip) {
      return pp === ip
    }

    function jp(pp, ip, cp) {
      const Op = pp.size;
      if (Op !== ip.size) return !1;
      if (!Op) return !0;
      const op = new Array(Op),
        Ip = pp.entries();
      let Sp, xp, Lp = 0;
      for (;
        (Sp = Ip.next()) && !Sp.done;) {
        const Op = ip.entries();
        let Ip = !1,
          Yp = 0;
        for (;
          (xp = Op.next()) && !xp.done;) {
          if (op[Yp]) {
            Yp++;
            continue
          }
          const Op = Sp.value,
            Dp = xp.value;
          if (cp.equals(Op[0], Dp[0], Lp, Yp, pp, ip, cp) && cp.equals(Op[1], Dp[1], Op[0], Dp[0], pp, ip, cp)) {
            Ip = op[Yp] = !0;
            break
          }
          Yp++
        }
        if (!Ip) return !1;
        Lp++
      }
      return !0
    }
    const kp = Wp;

    function mp(pp, ip, cp) {
      const Op = Up(pp);
      let op = Op.length;
      if (Up(ip).length !== op) return !1;
      for (; op-- > 0;)
        if (!lp(pp, ip, cp, Op[op])) return !1;
      return !0
    }

    function Rp(pp, ip, cp) {
      const Op = Ap(pp);
      let op, Ip, Sp, xp = Op.length;
      if (Ap(ip).length !== xp) return !1;
      for (; xp-- > 0;) {
        if (op = Op[xp], !lp(pp, ip, cp, op)) return !1;
        if (Ip = yp(pp, op), Sp = yp(ip, op), (Ip || Sp) && (!Ip || !Sp || Ip.configurable !== Sp.configurable || Ip.enumerable !== Sp.enumerable || Ip.writable !== Sp.writable)) return !1
      }
      return !0
    }

    function qp(pp, ip) {
      return Wp(pp.valueOf(), ip.valueOf())
    }

    function Mp(pp, ip) {
      return pp.source === ip.source && pp.flags === ip.flags
    }

    function Cp(pp, ip, cp) {
      const Op = pp.size;
      if (Op !== ip.size) return !1;
      if (!Op) return !0;
      const op = new Array(Op),
        Ip = pp.values();
      let Sp, xp;
      for (;
        (Sp = Ip.next()) && !Sp.done;) {
        const Op = ip.values();
        let Ip = !1,
          Lp = 0;
        for (;
          (xp = Op.next()) && !xp.done;) {
          if (!op[Lp] && cp.equals(Sp.value, xp.value, Sp.value, xp.value, pp, ip, cp)) {
            Ip = op[Lp] = !0;
            break
          }
          Lp++
        }
        if (!Ip) return !1
      }
      return !0
    }

    function Ep(pp, ip) {
      let cp = pp.byteLength;
      if (ip.byteLength !== cp || pp.byteOffset !== ip.byteOffset) return !1;
      for (; cp-- > 0;)
        if (pp[cp] !== ip[cp]) return !1;
      return !0
    }

    function Xp(pp, ip) {
      return pp.hostname === ip.hostname && pp.pathname === ip.pathname && pp.protocol === ip.protocol && pp.port === ip.port && pp.hash === ip.hash && pp.username === ip.username && pp.password === ip.password
    }

    function lp(pp, ip, cp, Op) {
      return !("_owner" !== Op && "__o" !== Op && "__v" !== Op || !pp.$$typeof && !ip.$$typeof) || Pp(ip, Op) && cp.equals(pp[Op], ip[Op], Op, Op, pp, ip, cp)
    }
    const Qp = {
        "[object Int8Array]": !0,
        "[object Uint8Array]": !0,
        "[object Uint8ClampedArray]": !0,
        "[object Int16Array]": !0,
        "[object Uint16Array]": !0,
        "[object Int32Array]": !0,
        "[object Uint32Array]": !0,
        "[object Float16Array]": !0,
        "[object Float32Array]": !0,
        "[object Float64Array]": !0,
        "[object BigInt64Array]": !0,
        "[object BigUint64Array]": !0
      },
      Jp = Object.prototype.toString;

    function Bp(pp) {
      let {
        areArrayBuffersEqual: ip,
        areArraysEqual: cp,
        areDataViewsEqual: Op,
        areDatesEqual: op,
        areErrorsEqual: Ip,
        areFunctionsEqual: Sp,
        areMapsEqual: xp,
        areNumbersEqual: Lp,
        areObjectsEqual: Yp,
        arePrimitiveWrappersEqual: Dp,
        areRegExpsEqual: Ap,
        areSetsEqual: Pp,
        areTypedArraysEqual: Wp,
        areUrlsEqual: yp,
        unknownTagComparators: Up
      } = pp;
      return function(pp, wp, vp) {
        if (pp === wp) return !0;
        if (null == pp || null == wp) return !1;
        const tp = typeof pp;
        if (tp !== typeof wp) return !1;
        if ("object" !== tp) return "number" === tp ? Lp(pp, wp, vp) : "function" === tp && Sp(pp, wp, vp);
        const Hp = pp.constructor;
        if (Hp !== wp.constructor) return !1;
        if (Hp === Object) return Yp(pp, wp, vp);
        if (Array.isArray(pp)) return cp(pp, wp, vp);
        if (Hp === Date) return op(pp, wp, vp);
        if (Hp === RegExp) return Ap(pp, wp, vp);
        if (Hp === Map) return xp(pp, wp, vp);
        if (Hp === Set) return Pp(pp, wp, vp);
        const dp = Jp.call(pp);
        if ("[object Date]" === dp) return op(pp, wp, vp);
        if ("[object RegExp]" === dp) return Ap(pp, wp, vp);
        if ("[object Map]" === dp) return xp(pp, wp, vp);
        if ("[object Set]" === dp) return Pp(pp, wp, vp);
        if ("[object Object]" === dp) return "function" !== typeof pp.then && "function" !== typeof wp.then && Yp(pp, wp, vp);
        if ("[object URL]" === dp) return yp(pp, wp, vp);
        if ("[object Error]" === dp) return Ip(pp, wp, vp);
        if ("[object Arguments]" === dp) return Yp(pp, wp, vp);
        if (Qp[dp]) return Wp(pp, wp, vp);
        if ("[object ArrayBuffer]" === dp) return ip(pp, wp, vp);
        if ("[object DataView]" === dp) return Op(pp, wp, vp);
        if ("[object Boolean]" === dp || "[object Number]" === dp || "[object String]" === dp) return Dp(pp, wp, vp);
        if (Up) {
          let ip = Up[dp];
          if (!ip) {
            const cp = null != (ep = pp) ? ep[Symbol.toStringTag] : void 0;
            cp && (ip = Up[cp])
          }
          if (ip) return ip(pp, wp, vp)
        }
        var ep;
        return !1
      }
    }
    const Np = Tp();
    Tp({
      strict: !0
    }), Tp({
      circular: !0
    }), Tp({
      circular: !0,
      strict: !0
    }), Tp({
      createInternalComparator: () => Wp
    }), Tp({
      strict: !0,
      createInternalComparator: () => Wp
    }), Tp({
      circular: !0,
      createInternalComparator: () => Wp
    }), Tp({
      circular: !0,
      createInternalComparator: () => Wp,
      strict: !0
    });

    function Tp() {
      let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const {
        circular: ip = !1,
        createInternalComparator: cp,
        createState: Op,
        strict: op = !1
      } = pp, Ip = function(pp) {
        let {
          circular: ip,
          createCustomConfig: cp,
          strict: Op
        } = pp, op = {
          areArrayBuffersEqual: wp,
          areArraysEqual: Op ? Rp : vp,
          areDataViewsEqual: tp,
          areDatesEqual: Hp,
          areErrorsEqual: dp,
          areFunctionsEqual: ep,
          areMapsEqual: Op ? Yp(jp, Rp) : jp,
          areNumbersEqual: kp,
          areObjectsEqual: Op ? Rp : mp,
          arePrimitiveWrappersEqual: qp,
          areRegExpsEqual: Mp,
          areSetsEqual: Op ? Yp(Cp, Rp) : Cp,
          areTypedArraysEqual: Op ? Yp(Ep, Rp) : Ep,
          areUrlsEqual: Xp,
          unknownTagComparators: void 0
        };
        if (cp && (op = Object.assign({}, op, cp(op))), ip) {
          const pp = Dp(op.areArraysEqual),
            ip = Dp(op.areMapsEqual),
            cp = Dp(op.areObjectsEqual),
            Op = Dp(op.areSetsEqual);
          op = Object.assign({}, op, {
            areArraysEqual: pp,
            areMapsEqual: ip,
            areObjectsEqual: cp,
            areSetsEqual: Op
          })
        }
        return op
      }(pp), Sp = Bp(Ip);
      var xp;
      return function(pp) {
        let {
          circular: ip,
          comparator: cp,
          createState: Op,
          equals: op,
          strict: Ip
        } = pp;
        if (Op) return function(pp, Sp) {
          const {
            cache: xp = (ip ? new WeakMap : void 0),
            meta: Lp
          } = Op();
          return cp(pp, Sp, {
            cache: xp,
            equals: op,
            meta: Lp,
            strict: Ip
          })
        };
        if (ip) return function(pp, ip) {
          return cp(pp, ip, {
            cache: new WeakMap,
            equals: op,
            meta: void 0,
            strict: Ip
          })
        };
        const Sp = {
          cache: void 0,
          equals: op,
          meta: void 0,
          strict: Ip
        };
        return function(pp, ip) {
          return cp(pp, ip, Sp)
        }
      }({
        circular: ip,
        comparator: Sp,
        createState: Op,
        equals: cp ? cp(Sp) : (xp = Sp, function(pp, ip, cp, Op, op, Ip, Sp) {
          return xp(pp, ip, Sp)
        }),
        strict: op
      })
    }

    function fp(pp) {
      var ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        cp = -1;
      requestAnimationFrame((function Op(op) {
        cp < 0 && (cp = op), op - cp > ip ? (pp(op), cp = -1) : function(pp) {
          "undefined" !== typeof requestAnimationFrame && requestAnimationFrame(pp)
        }(Op)
      }))
    }

    function bp(pp) {
      return bp = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
        return typeof pp
      } : function(pp) {
        return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
      }, bp(pp)
    }

    function hp(pp) {
      return function(pp) {
        if (Array.isArray(pp)) return pp
      }(pp) || function(pp) {
        if ("undefined" !== typeof Symbol && null != pp[Symbol.iterator] || null != pp["@@iterator"]) return Array.from(pp)
      }(pp) || function(pp, ip) {
        if (!pp) return;
        if ("string" === typeof pp) return ap(pp, ip);
        var cp = Object.prototype.toString.call(pp).slice(8, -1);
        "Object" === cp && pp.constructor && (cp = pp.constructor.name);
        if ("Map" === cp || "Set" === cp) return Array.from(pp);
        if ("Arguments" === cp || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cp)) return ap(pp, ip)
      }(pp) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function ap(pp, ip) {
      (null == ip || ip > pp.length) && (ip = pp.length);
      for (var cp = 0, Op = new Array(ip); cp < ip; cp++) Op[cp] = pp[cp];
      return Op
    }

    function np() {
      var pp = function() {
          return null
        },
        ip = !1,
        cp = function cp(Op) {
          if (!ip) {
            if (Array.isArray(Op)) {
              if (!Op.length) return;
              var op = hp(Op),
                Ip = op[0],
                Sp = op.slice(1);
              return "number" === typeof Ip ? void fp(cp.bind(null, Sp), Ip) : (cp(Ip), void fp(cp.bind(null, Sp)))
            }
            "object" === bp(Op) && pp(Op), "function" === typeof Op && Op()
          }
        };
      return {
        stop: function() {
          ip = !0
        },
        start: function(pp) {
          ip = !1, cp(pp)
        },
        subscribe: function(ip) {
          return pp = ip,
            function() {
              pp = function() {
                return null
              }
            }
        }
      }
    }

    function Fp(pp) {
      return Fp = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
        return typeof pp
      } : function(pp) {
        return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
      }, Fp(pp)
    }

    function gp(pp, ip) {
      var cp = Object.keys(pp);
      if (Object.getOwnPropertySymbols) {
        var Op = Object.getOwnPropertySymbols(pp);
        ip && (Op = Op.filter((function(ip) {
          return Object.getOwnPropertyDescriptor(pp, ip).enumerable
        }))), cp.push.apply(cp, Op)
      }
      return cp
    }

    function Gp(pp) {
      for (var ip = 1; ip < arguments.length; ip++) {
        var cp = null != arguments[ip] ? arguments[ip] : {};
        ip % 2 ? gp(Object(cp), !0).forEach((function(ip) {
          rp(pp, ip, cp[ip])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : gp(Object(cp)).forEach((function(ip) {
          Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
        }))
      }
      return pp
    }

    function rp(pp, ip, cp) {
      return (ip = function(pp) {
        var ip = function(pp, ip) {
          if ("object" !== Fp(pp) || null === pp) return pp;
          var cp = pp[Symbol.toPrimitive];
          if (void 0 !== cp) {
            var Op = cp.call(pp, ip || "default");
            if ("object" !== Fp(Op)) return Op;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === ip ? String : Number)(pp)
        }(pp, "string");
        return "symbol" === Fp(ip) ? ip : String(ip)
      }(ip)) in pp ? Object.defineProperty(pp, ip, {
        value: cp,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : pp[ip] = cp, pp
    }
    var Zp = function(pp) {
        return pp
      },
      zp = function(pp, ip) {
        return Object.keys(ip).reduce((function(cp, Op) {
          return Gp(Gp({}, cp), {}, rp({}, Op, pp(Op, ip[Op])))
        }), {})
      },
      sp = function(pp, ip, cp) {
        return pp.map((function(pp) {
          return "".concat((Op = pp, Op.replace(/([A-Z])/g, (function(pp) {
            return "-".concat(pp.toLowerCase())
          }))), " ").concat(ip, "ms ").concat(cp);
          var Op
        })).join(",")
      };

    function Kp(pp, ip) {
      return function(pp) {
        if (Array.isArray(pp)) return pp
      }(pp) || function(pp, ip) {
        var cp = null == pp ? null : "undefined" != typeof Symbol && pp[Symbol.iterator] || pp["@@iterator"];
        if (null != cp) {
          var Op, op, Ip, Sp, xp = [],
            Lp = !0,
            Yp = !1;
          try {
            if (Ip = (cp = cp.call(pp)).next, 0 === ip) {
              if (Object(cp) !== cp) return;
              Lp = !1
            } else
              for (; !(Lp = (Op = Ip.call(cp)).done) && (xp.push(Op.value), xp.length !== ip); Lp = !0);
          } catch (pp) {
            Yp = !0, op = pp
          } finally {
            try {
              if (!Lp && null != cp.return && (Sp = cp.return(), Object(Sp) !== Sp)) return
            } finally {
              if (Yp) throw op
            }
          }
          return xp
        }
      }(pp, ip) || ii(pp, ip) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Vp(pp) {
      return function(pp) {
        if (Array.isArray(pp)) return ci(pp)
      }(pp) || function(pp) {
        if ("undefined" !== typeof Symbol && null != pp[Symbol.iterator] || null != pp["@@iterator"]) return Array.from(pp)
      }(pp) || ii(pp) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function ii(pp, ip) {
      if (pp) {
        if ("string" === typeof pp) return ci(pp, ip);
        var cp = Object.prototype.toString.call(pp).slice(8, -1);
        return "Object" === cp && pp.constructor && (cp = pp.constructor.name), "Map" === cp || "Set" === cp ? Array.from(pp) : "Arguments" === cp || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cp) ? ci(pp, ip) : void 0
      }
    }

    function ci(pp, ip) {
      (null == ip || ip > pp.length) && (ip = pp.length);
      for (var cp = 0, Op = new Array(ip); cp < ip; cp++) Op[cp] = pp[cp];
      return Op
    }
    var Oi = 1e-4,
      oi = function(pp, ip) {
        return [0, 3 * pp, 3 * ip - 6 * pp, 3 * pp - 3 * ip + 1]
      },
      Ii = function(pp, ip) {
        return pp.map((function(pp, cp) {
          return pp * Math.pow(ip, cp)
        })).reduce((function(pp, ip) {
          return pp + ip
        }))
      },
      Si = function(pp, ip) {
        return function(cp) {
          var Op = oi(pp, ip);
          return Ii(Op, cp)
        }
      },
      xi = function() {
        for (var pp = arguments.length, ip = new Array(pp), cp = 0; cp < pp; cp++) ip[cp] = arguments[cp];
        var Op = ip[0],
          op = ip[1],
          Ip = ip[2],
          Sp = ip[3];
        if (1 === ip.length) switch (ip[0]) {
          case "linear":
            Op = 0, op = 0, Ip = 1, Sp = 1;
            break;
          case "ease":
            Op = .25, op = .1, Ip = .25, Sp = 1;
            break;
          case "ease-in":
            Op = .42, op = 0, Ip = 1, Sp = 1;
            break;
          case "ease-out":
            Op = .42, op = 0, Ip = .58, Sp = 1;
            break;
          case "ease-in-out":
            Op = 0, op = 0, Ip = .58, Sp = 1;
            break;
          default:
            var xp = ip[0].split("(");
            if ("cubic-bezier" === xp[0] && 4 === xp[1].split(")")[0].split(",").length) {
              var Lp = Kp(xp[1].split(")")[0].split(",").map((function(pp) {
                return parseFloat(pp)
              })), 4);
              Op = Lp[0], op = Lp[1], Ip = Lp[2], Sp = Lp[3]
            }
        } [Op, Ip, op, Sp].every((function(pp) {
          return "number" === typeof pp && pp >= 0 && pp <= 1
        }));
        var Yp, Dp, Ap = Si(Op, Ip),
          Pp = Si(op, Sp),
          Wp = (Yp = Op, Dp = Ip, function(pp) {
            var ip = oi(Yp, Dp),
              cp = [].concat(Vp(ip.map((function(pp, ip) {
                return pp * ip
              })).slice(1)), [0]);
            return Ii(cp, pp)
          }),
          yp = function(pp) {
            for (var ip, cp = pp > 1 ? 1 : pp, Op = cp, op = 0; op < 8; ++op) {
              var Ip = Ap(Op) - cp,
                Sp = Wp(Op);
              if (Math.abs(Ip - cp) < Oi || Sp < Oi) return Pp(Op);
              Op = (ip = Op - Ip / Sp) > 1 ? 1 : ip < 0 ? 0 : ip
            }
            return Pp(Op)
          };
        return yp.isStepper = !1, yp
      },
      Li = function() {
        for (var pp = arguments.length, ip = new Array(pp), cp = 0; cp < pp; cp++) ip[cp] = arguments[cp];
        var Op = ip[0];
        if ("string" === typeof Op) switch (Op) {
          case "ease":
          case "ease-in-out":
          case "ease-out":
          case "ease-in":
          case "linear":
            return xi(Op);
          case "spring":
            return function() {
              var pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                ip = pp.stiff,
                cp = void 0 === ip ? 100 : ip,
                Op = pp.damping,
                op = void 0 === Op ? 8 : Op,
                Ip = pp.dt,
                Sp = void 0 === Ip ? 17 : Ip,
                xp = function(pp, ip, Op) {
                  var Ip = Op + (-(pp - ip) * cp - Op * op) * Sp / 1e3,
                    xp = Op * Sp / 1e3 + pp;
                  return Math.abs(xp - ip) < Oi && Math.abs(Ip) < Oi ? [ip, 0] : [xp, Ip]
                };
              return xp.isStepper = !0, xp.dt = Sp, xp
            }();
          default:
            if ("cubic-bezier" === Op.split("(")[0]) return xi(Op)
        }
        return "function" === typeof Op ? Op : null
      };

    function Yi(pp) {
      return Yi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
        return typeof pp
      } : function(pp) {
        return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
      }, Yi(pp)
    }

    function Di(pp) {
      return function(pp) {
        if (Array.isArray(pp)) return wi(pp)
      }(pp) || function(pp) {
        if ("undefined" !== typeof Symbol && null != pp[Symbol.iterator] || null != pp["@@iterator"]) return Array.from(pp)
      }(pp) || Ui(pp) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Ai(pp, ip) {
      var cp = Object.keys(pp);
      if (Object.getOwnPropertySymbols) {
        var Op = Object.getOwnPropertySymbols(pp);
        ip && (Op = Op.filter((function(ip) {
          return Object.getOwnPropertyDescriptor(pp, ip).enumerable
        }))), cp.push.apply(cp, Op)
      }
      return cp
    }

    function Pi(pp) {
      for (var ip = 1; ip < arguments.length; ip++) {
        var cp = null != arguments[ip] ? arguments[ip] : {};
        ip % 2 ? Ai(Object(cp), !0).forEach((function(ip) {
          Wi(pp, ip, cp[ip])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : Ai(Object(cp)).forEach((function(ip) {
          Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
        }))
      }
      return pp
    }

    function Wi(pp, ip, cp) {
      return (ip = function(pp) {
        var ip = function(pp, ip) {
          if ("object" !== Yi(pp) || null === pp) return pp;
          var cp = pp[Symbol.toPrimitive];
          if (void 0 !== cp) {
            var Op = cp.call(pp, ip || "default");
            if ("object" !== Yi(Op)) return Op;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === ip ? String : Number)(pp)
        }(pp, "string");
        return "symbol" === Yi(ip) ? ip : String(ip)
      }(ip)) in pp ? Object.defineProperty(pp, ip, {
        value: cp,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : pp[ip] = cp, pp
    }

    function yi(pp, ip) {
      return function(pp) {
        if (Array.isArray(pp)) return pp
      }(pp) || function(pp, ip) {
        var cp = null == pp ? null : "undefined" != typeof Symbol && pp[Symbol.iterator] || pp["@@iterator"];
        if (null != cp) {
          var Op, op, Ip, Sp, xp = [],
            Lp = !0,
            Yp = !1;
          try {
            if (Ip = (cp = cp.call(pp)).next, 0 === ip) {
              if (Object(cp) !== cp) return;
              Lp = !1
            } else
              for (; !(Lp = (Op = Ip.call(cp)).done) && (xp.push(Op.value), xp.length !== ip); Lp = !0);
          } catch (pp) {
            Yp = !0, op = pp
          } finally {
            try {
              if (!Lp && null != cp.return && (Sp = cp.return(), Object(Sp) !== Sp)) return
            } finally {
              if (Yp) throw op
            }
          }
          return xp
        }
      }(pp, ip) || Ui(pp, ip) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Ui(pp, ip) {
      if (pp) {
        if ("string" === typeof pp) return wi(pp, ip);
        var cp = Object.prototype.toString.call(pp).slice(8, -1);
        return "Object" === cp && pp.constructor && (cp = pp.constructor.name), "Map" === cp || "Set" === cp ? Array.from(pp) : "Arguments" === cp || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cp) ? wi(pp, ip) : void 0
      }
    }

    function wi(pp, ip) {
      (null == ip || ip > pp.length) && (ip = pp.length);
      for (var cp = 0, Op = new Array(ip); cp < ip; cp++) Op[cp] = pp[cp];
      return Op
    }
    var vi = function(pp, ip, cp) {
        return pp + (ip - pp) * cp
      },
      ti = function(pp) {
        return pp.from !== pp.to
      },
      Hi = function pp(ip, cp, Op) {
        var op = zp((function(pp, cp) {
          if (ti(cp)) {
            var Op = yi(ip(cp.from, cp.to, cp.tw), 2),
              op = Op[0],
              Ip = Op[1];
            return Pi(Pi({}, cp), {}, {
              from: op,
              tw: Ip
            })
          }
          return cp
        }), cp);
        return Op < 1 ? zp((function(pp, ip) {
          return ti(ip) ? Pi(Pi({}, ip), {}, {
            tw: vi(ip.tw, op[pp].tw, Op),
            from: vi(ip.from, op[pp].from, Op)
          }) : ip
        }), cp) : pp(ip, op, Op - 1)
      };
    const di = function(pp, ip, cp, Op, op) {
      var Ip, Sp, xp, Lp, Yp = (Ip = pp, Sp = ip, [Object.keys(Ip), Object.keys(Sp)].reduce((function(pp, ip) {
          return pp.filter((function(pp) {
            return ip.includes(pp)
          }))
        }))),
        Dp = Yp.reduce((function(cp, Op) {
          return Pi(Pi({}, cp), {}, Wi({}, Op, [pp[Op], ip[Op]]))
        }), {}),
        Ap = Yp.reduce((function(cp, Op) {
          return Pi(Pi({}, cp), {}, Wi({}, Op, {
            from: pp[Op],
            tw: 0,
            to: ip[Op]
          }))
        }), {}),
        Pp = -1,
        Wp = function() {
          return null
        };
      return Wp = cp.isStepper ? function(Op) {
          xp || (xp = Op);
          var Ip = (Op - xp) / cp.dt;
          Ap = Hi(cp, Ap, Ip), op(Pi(Pi(Pi({}, pp), ip), zp((function(pp, ip) {
            return ip.from
          }), Ap))), xp = Op, Object.values(Ap).filter(ti).length && (Pp = requestAnimationFrame(Wp))
        } : function(Ip) {
          Lp || (Lp = Ip);
          var Sp = (Ip - Lp) / Op,
            xp = zp((function(pp, ip) {
              return vi.apply(void 0, Di(ip).concat([cp(Sp)]))
            }), Dp);
          if (op(Pi(Pi(Pi({}, pp), ip), xp)), Sp < 1) Pp = requestAnimationFrame(Wp);
          else {
            var Yp = zp((function(pp, ip) {
              return vi.apply(void 0, Di(ip).concat([cp(1)]))
            }), Dp);
            op(Pi(Pi(Pi({}, pp), ip), Yp))
          }
        },
        function() {
          return requestAnimationFrame(Wp),
            function() {
              cancelAnimationFrame(Pp)
            }
        }
    };

    function ei(pp) {
      return ei = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
        return typeof pp
      } : function(pp) {
        return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
      }, ei(pp)
    }
    var ui = ["children", "mW", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];

    function ji(pp, ip) {
      if (null == pp) return {};
      var cp, Op, op = function(pp, ip) {
        if (null == pp) return {};
        var cp, Op, op = {},
          Ip = Object.keys(pp);
        for (Op = 0; Op < Ip.length; Op++) cp = Ip[Op], ip.indexOf(cp) >= 0 || (op[cp] = pp[cp]);
        return op
      }(pp, ip);
      if (Object.getOwnPropertySymbols) {
        var Ip = Object.getOwnPropertySymbols(pp);
        for (Op = 0; Op < Ip.length; Op++) cp = Ip[Op], ip.indexOf(cp) >= 0 || Object.prototype.propertyIsEnumerable.call(pp, cp) && (op[cp] = pp[cp])
      }
      return op
    }

    function ki(pp) {
      return function(pp) {
        if (Array.isArray(pp)) return mi(pp)
      }(pp) || function(pp) {
        if ("undefined" !== typeof Symbol && null != pp[Symbol.iterator] || null != pp["@@iterator"]) return Array.from(pp)
      }(pp) || function(pp, ip) {
        if (!pp) return;
        if ("string" === typeof pp) return mi(pp, ip);
        var cp = Object.prototype.toString.call(pp).slice(8, -1);
        "Object" === cp && pp.constructor && (cp = pp.constructor.name);
        if ("Map" === cp || "Set" === cp) return Array.from(pp);
        if ("Arguments" === cp || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cp)) return mi(pp, ip)
      }(pp) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function mi(pp, ip) {
      (null == ip || ip > pp.length) && (ip = pp.length);
      for (var cp = 0, Op = new Array(ip); cp < ip; cp++) Op[cp] = pp[cp];
      return Op
    }

    function Ri(pp, ip) {
      var cp = Object.keys(pp);
      if (Object.getOwnPropertySymbols) {
        var Op = Object.getOwnPropertySymbols(pp);
        ip && (Op = Op.filter((function(ip) {
          return Object.getOwnPropertyDescriptor(pp, ip).enumerable
        }))), cp.push.apply(cp, Op)
      }
      return cp
    }

    function qi(pp) {
      for (var ip = 1; ip < arguments.length; ip++) {
        var cp = null != arguments[ip] ? arguments[ip] : {};
        ip % 2 ? Ri(Object(cp), !0).forEach((function(ip) {
          Mi(pp, ip, cp[ip])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : Ri(Object(cp)).forEach((function(ip) {
          Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
        }))
      }
      return pp
    }

    function Mi(pp, ip, cp) {
      return (ip = Ei(ip)) in pp ? Object.defineProperty(pp, ip, {
        value: cp,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : pp[ip] = cp, pp
    }

    function Ci(pp, ip) {
      for (var cp = 0; cp < ip.length; cp++) {
        var Op = ip[cp];
        Op.enumerable = Op.enumerable || !1, Op.configurable = !0, "value" in Op && (Op.writable = !0), Object.defineProperty(pp, Ei(Op.key), Op)
      }
    }

    function Ei(pp) {
      var ip = function(pp, ip) {
        if ("object" !== ei(pp) || null === pp) return pp;
        var cp = pp[Symbol.toPrimitive];
        if (void 0 !== cp) {
          var Op = cp.call(pp, ip || "default");
          if ("object" !== ei(Op)) return Op;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ip ? String : Number)(pp)
      }(pp, "string");
      return "symbol" === ei(ip) ? ip : String(ip)
    }

    function Xi(pp, ip) {
      return Xi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(pp, ip) {
        return pp.__proto__ = ip, pp
      }, Xi(pp, ip)
    }

    function li(pp) {
      var ip = function() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (pp) {
          return !1
        }
      }();
      return function() {
        var cp, Op = Bi(pp);
        if (ip) {
          var op = Bi(this).constructor;
          cp = Reflect.construct(Op, arguments, op)
        } else cp = Op.apply(this, arguments);
        return Qi(this, cp)
      }
    }

    function Qi(pp, ip) {
      if (ip && ("object" === ei(ip) || "function" === typeof ip)) return ip;
      if (void 0 !== ip) throw new TypeError("Derived constructors may only return object or undefined");
      return Ji(pp)
    }

    function Ji(pp) {
      if (void 0 === pp) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return pp
    }

    function Bi(pp) {
      return Bi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(pp) {
        return pp.__proto__ || Object.getPrototypeOf(pp)
      }, Bi(pp)
    }
    var Ni = function(pp) {
      ! function(pp, ip) {
        if ("function" !== typeof ip && null !== ip) throw new TypeError("Super expression must either be null or a function");
        pp.prototype = Object.create(ip && ip.prototype, {
          constructor: {
            value: pp,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(pp, "prototype", {
          writable: !1
        }), ip && Xi(pp, ip)
      }(Sp, pp);
      var ip, cp, op, Ip = li(Sp);

      function Sp(pp, ip) {
        var cp;
        ! function(pp, ip) {
          if (!(pp instanceof ip)) throw new TypeError("Cannot call a class as a function")
        }(this, Sp);
        var Op = (cp = Ip.call(this, pp, ip)).props,
          op = Op.isActive,
          xp = Op.attributeName,
          Lp = Op.from,
          Yp = Op.to,
          Dp = Op.steps,
          Ap = Op.children,
          Pp = Op.duration;
        if (cp.handleStyleChange = cp.handleStyleChange.bind(Ji(cp)), cp.changeStyle = cp.changeStyle.bind(Ji(cp)), !op || Pp <= 0) return cp.state = {
          style: {}
        }, "function" === typeof Ap && (cp.state = {
          style: Yp
        }), Qi(cp);
        if (Dp && Dp.length) cp.state = {
          style: Dp[0].style
        };
        else if (Lp) {
          if ("function" === typeof Ap) return cp.state = {
            style: Lp
          }, Qi(cp);
          cp.state = {
            style: xp ? Mi({}, xp, Lp) : Lp
          }
        } else cp.state = {
          style: {}
        };
        return cp
      }
      return ip = Sp, (cp = [{
        key: "componentDidMount",
        value: function() {
          var pp = this.props,
            ip = pp.isActive,
            cp = pp.canBegin;
          this.mounted = !0, ip && cp && this.runAnimation(this.props)
        }
      }, {
        key: "componentDidUpdate",
        value: function(pp) {
          var ip = this.props,
            cp = ip.isActive,
            Op = ip.canBegin,
            op = ip.attributeName,
            Ip = ip.shouldReAnimate,
            Sp = ip.to,
            xp = ip.from,
            Lp = this.state.style;
          if (Op)
            if (cp) {
              if (!(Np(pp.to, Sp) && pp.canBegin && pp.isActive)) {
                var Yp = !pp.canBegin || !pp.isActive;
                this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
                var Dp = Yp || Ip ? xp : pp.to;
                if (this.state && Lp) {
                  var Ap = {
                    style: op ? Mi({}, op, Dp) : Dp
                  };
                  (op && Lp[op] !== Dp || !op && Lp !== Dp) && this.setState(Ap)
                }
                this.runAnimation(qi(qi({}, this.props), {}, {
                  from: Dp,
                  mW: 0
                }))
              }
            } else {
              var Pp = {
                style: op ? Mi({}, op, Sp) : Sp
              };
              this.state && Lp && (op && Lp[op] !== Sp || !op && Lp !== Sp) && this.setState(Pp)
            }
        }
      }, {
        key: "componentWillUnmount",
        value: function() {
          this.mounted = !1;
          var pp = this.props.onAnimationEnd;
          this.unSubscribe && this.unSubscribe(), this.manager && (this.manager.stop(), this.manager = null), this.stopJSAnimation && this.stopJSAnimation(), pp && pp()
        }
      }, {
        key: "handleStyleChange",
        value: function(pp) {
          this.changeStyle(pp)
        }
      }, {
        key: "changeStyle",
        value: function(pp) {
          this.mounted && this.setState({
            style: pp
          })
        }
      }, {
        key: "runJSAnimation",
        value: function(pp) {
          var ip = this,
            cp = pp.from,
            Op = pp.to,
            op = pp.duration,
            Ip = pp.easing,
            Sp = pp.mW,
            xp = pp.onAnimationEnd,
            Lp = pp.onAnimationStart,
            Yp = di(cp, Op, Li(Ip), op, this.changeStyle);
          this.manager.start([Lp, Sp, function() {
            ip.stopJSAnimation = Yp()
          }, op, xp])
        }
      }, {
        key: "runStepAnimation",
        value: function(pp) {
          var ip = this,
            cp = pp.steps,
            Op = pp.mW,
            op = pp.onAnimationStart,
            Ip = cp[0],
            Sp = Ip.style,
            xp = Ip.duration,
            Lp = void 0 === xp ? 0 : xp;
          return this.manager.start([op].concat(ki(cp.reduce((function(pp, Op, op) {
            if (0 === op) return pp;
            var Ip = Op.duration,
              Sp = Op.easing,
              xp = void 0 === Sp ? "ease" : Sp,
              Lp = Op.style,
              Yp = Op.properties,
              Dp = Op.onAnimationEnd,
              Ap = op > 0 ? cp[op - 1] : Op,
              Pp = Yp || Object.keys(Lp);
            if ("function" === typeof xp || "spring" === xp) return [].concat(ki(pp), [ip.runJSAnimation.bind(ip, {
              from: Ap.style,
              to: Lp,
              duration: Ip,
              easing: xp
            }), Ip]);
            var Wp = sp(Pp, Ip, xp),
              yp = qi(qi(qi({}, Ap.style), Lp), {}, {
                transition: Wp
              });
            return [].concat(ki(pp), [yp, Ip, Dp]).filter(Zp)
          }), [Sp, Math.max(Lp, Op)])), [pp.onAnimationEnd]))
        }
      }, {
        key: "runAnimation",
        value: function(pp) {
          this.manager || (this.manager = np());
          var ip = pp.mW,
            cp = pp.duration,
            Op = pp.attributeName,
            op = pp.to,
            Ip = pp.easing,
            Sp = pp.onAnimationStart,
            xp = pp.onAnimationEnd,
            Lp = pp.steps,
            Yp = pp.children,
            Dp = this.manager;
          if (this.unSubscribe = Dp.subscribe(this.handleStyleChange), "function" !== typeof Ip && "function" !== typeof Yp && "spring" !== Ip)
            if (Lp.length > 1) this.runStepAnimation(pp);
            else {
              var Ap = Op ? Mi({}, Op, op) : op,
                Pp = sp(Object.keys(Ap), cp, Ip);
              Dp.start([Sp, ip, qi(qi({}, Ap), {}, {
                transition: Pp
              }), cp, xp])
            }
          else this.runJSAnimation(pp)
        }
      }, {
        key: "render",
        value: function() {
          var pp = this.props,
            ip = pp.children,
            cp = (pp.mW, pp.duration),
            op = (pp.attributeName, pp.easing, pp.isActive),
            Ip = (pp.steps, pp.from, pp.to, pp.canBegin, pp.onAnimationEnd, pp.shouldReAnimate, pp.onAnimationReStart, ji(pp, ui)),
            Sp = Op.Children.count(ip),
            xp = this.state.style;
          if ("function" === typeof ip) return ip(xp);
          if (!op || 0 === Sp || cp <= 0) return ip;
          var Lp = function(pp) {
            var ip = pp.props,
              cp = ip.style,
              op = void 0 === cp ? {} : cp,
              Sp = ip.className;
            return (0, Op.cloneElement)(pp, qi(qi({}, Ip), {}, {
              style: qi(qi({}, op), xp),
              className: Sp
            }))
          };
          return 1 === Sp ? Lp(Op.Children.only(ip)) : Op.createElement("div", null, Op.Children.map(ip, (function(pp) {
            return Lp(pp)
          })))
        }
      }]) && Ci(ip.prototype, cp), op && Ci(ip, op), Object.defineProperty(ip, "prototype", {
        writable: !1
      }), Sp
    }(Op.PureComponent);
    Ni.displayName = "Animate", Ni.defaultProps = {
      mW: 0,
      duration: 1e3,
      from: "",
      to: "",
      attributeName: "",
      easing: "ease",
      isActive: !0,
      canBegin: !0,
      steps: [],
      onAnimationEnd: function() {},
      onAnimationStart: function() {}
    }, Ni.propTypes = {
      from: Ip().oneOfType([Ip().object, Ip().string]),
      to: Ip().oneOfType([Ip().object, Ip().string]),
      attributeName: Ip().string,
      duration: Ip().number,
      mW: Ip().number,
      easing: Ip().oneOfType([Ip().string, Ip().func]),
      steps: Ip().arrayOf(Ip().shape({
        duration: Ip().number.isRequired,
        style: Ip().object.isRequired,
        easing: Ip().oneOfType([Ip().oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]), Ip().func]),
        properties: Ip().arrayOf("string"),
        onAnimationEnd: Ip().func
      })),
      children: Ip().oneOfType([Ip().node, Ip().func]),
      isActive: Ip().bool,
      canBegin: Ip().bool,
      onAnimationEnd: Ip().func,
      shouldReAnimate: Ip().bool,
      onAnimationStart: Ip().func,
      onAnimationReStart: Ip().func
    };
    const Ti = Ni
  },
  6497: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => hp
    });
    var Op, op = cp(62),
      Ip = cp(5203),
      Sp = cp(6256),
      xp = cp(5405),
      Lp = cp.n(xp),
      Yp = cp(6297),
      Dp = cp.n(Yp),
      Ap = cp(5575),
      Pp = cp.n(Ap),
      Wp = cp(5319),
      yp = cp.n(Wp),
      Up = cp(6322),
      wp = cp.n(Up),
      vp = cp(6493),
      tp = cp(6238),
      Hp = cp(6103),
      dp = cp(6414),
      ep = cp(6115),
      jp = cp(5299),
      kp = cp(6266),
      mp = cp(5588),
      Rp = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"],
      qp = ["key"];

    function Mp(pp) {
      return Mp = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
        return typeof pp
      } : function(pp) {
        return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
      }, Mp(pp)
    }

    function Cp(pp, ip) {
      if (null == pp) return {};
      var cp, Op, op = function(pp, ip) {
        if (null == pp) return {};
        var cp = {};
        for (var Op in pp)
          if (Object.prototype.hasOwnProperty.call(pp, Op)) {
            if (ip.indexOf(Op) >= 0) continue;
            cp[Op] = pp[Op]
          } return cp
      }(pp, ip);
      if (Object.getOwnPropertySymbols) {
        var Ip = Object.getOwnPropertySymbols(pp);
        for (Op = 0; Op < Ip.length; Op++) cp = Ip[Op], ip.indexOf(cp) >= 0 || Object.prototype.propertyIsEnumerable.call(pp, cp) && (op[cp] = pp[cp])
      }
      return op
    }

    function Ep() {
      return Ep = Object.assign ? Object.assign.bind() : function(pp) {
        for (var ip = 1; ip < arguments.length; ip++) {
          var cp = arguments[ip];
          for (var Op in cp) Object.prototype.hasOwnProperty.call(cp, Op) && (pp[Op] = cp[Op])
        }
        return pp
      }, Ep.apply(this, arguments)
    }

    function Xp(pp, ip) {
      var cp = Object.keys(pp);
      if (Object.getOwnPropertySymbols) {
        var Op = Object.getOwnPropertySymbols(pp);
        ip && (Op = Op.filter((function(ip) {
          return Object.getOwnPropertyDescriptor(pp, ip).enumerable
        }))), cp.push.apply(cp, Op)
      }
      return cp
    }

    function lp(pp) {
      for (var ip = 1; ip < arguments.length; ip++) {
        var cp = null != arguments[ip] ? arguments[ip] : {};
        ip % 2 ? Xp(Object(cp), !0).forEach((function(ip) {
          fp(pp, ip, cp[ip])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : Xp(Object(cp)).forEach((function(ip) {
          Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
        }))
      }
      return pp
    }

    function Qp(pp, ip) {
      for (var cp = 0; cp < ip.length; cp++) {
        var Op = ip[cp];
        Op.enumerable = Op.enumerable || !1, Op.configurable = !0, "value" in Op && (Op.writable = !0), Object.defineProperty(pp, bp(Op.key), Op)
      }
    }

    function Jp(pp, ip, cp) {
      return ip = Np(ip),
        function(pp, ip) {
          if (ip && ("object" === Mp(ip) || "function" === typeof ip)) return ip;
          if (void 0 !== ip) throw new TypeError("Derived constructors may only return object or undefined");
          return function(pp) {
            if (void 0 === pp) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return pp
          }(pp)
        }(pp, Bp() ? Reflect.construct(ip, cp || [], Np(pp).constructor) : ip.apply(pp, cp))
    }

    function Bp() {
      try {
        var pp = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (pp) {}
      return (Bp = function() {
        return !!pp
      })()
    }

    function Np(pp) {
      return Np = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(pp) {
        return pp.__proto__ || Object.getPrototypeOf(pp)
      }, Np(pp)
    }

    function Tp(pp, ip) {
      return Tp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(pp, ip) {
        return pp.__proto__ = ip, pp
      }, Tp(pp, ip)
    }

    function fp(pp, ip, cp) {
      return (ip = bp(ip)) in pp ? Object.defineProperty(pp, ip, {
        value: cp,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : pp[ip] = cp, pp
    }

    function bp(pp) {
      var ip = function(pp, ip) {
        if ("object" != Mp(pp) || !pp) return pp;
        var cp = pp[Symbol.toPrimitive];
        if (void 0 !== cp) {
          var Op = cp.call(pp, ip || "default");
          if ("object" != Mp(Op)) return Op;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ip ? String : Number)(pp)
      }(pp, "string");
      return "symbol" == Mp(ip) ? ip : ip + ""
    }
    var hp = function(pp) {
      function ip() {
        var pp;
        ! function(pp, ip) {
          if (!(pp instanceof ip)) throw new TypeError("Cannot call a class as a function")
        }(this, ip);
        for (var cp = arguments.length, Op = new Array(cp), op = 0; op < cp; op++) Op[op] = arguments[op];
        return fp(pp = Jp(this, ip, [].concat(Op)), "state", {
          isAnimationFinished: !0
        }), fp(pp, "id", (0, jp.J)("recharts-area-")), fp(pp, "handleAnimationEnd", (function() {
          var ip = pp.props.onAnimationEnd;
          pp.setState({
            isAnimationFinished: !0
          }), Lp()(ip) && ip()
        })), fp(pp, "handleAnimationStart", (function() {
          var ip = pp.props.onAnimationStart;
          pp.setState({
            isAnimationFinished: !1
          }), Lp()(ip) && ip()
        })), pp
      }
      return function(pp, ip) {
        if ("function" !== typeof ip && null !== ip) throw new TypeError("Super expression must either be null or a function");
        pp.prototype = Object.create(ip && ip.prototype, {
          constructor: {
            value: pp,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(pp, "prototype", {
          writable: !1
        }), ip && Tp(pp, ip)
      }(ip, pp), cp = ip, Op = [{
        key: "renderDots",
        value: function(pp, cp, Op) {
          var Ip = this.props.isAnimationActive,
            Sp = this.state.isAnimationFinished;
          if (Ip && !Sp) return null;
          var xp = this.props,
            Lp = xp.dot,
            Yp = xp.points,
            Dp = xp.dataKey,
            Ap = (0, mp.d)(this.props, !1),
            Pp = (0, mp.d)(Lp, !0),
            Wp = Yp.map((function(pp, cp) {
              var Op = lp(lp(lp({
                key: "dot-".concat(cp),
                r: 3
              }, Ap), Pp), {}, {
                index: cp,
                cx: pp.x,
                cy: pp.y,
                dataKey: Dp,
                value: pp.value,
                payload: pp.payload,
                points: Yp
              });
              return ip.renderDotItem(Lp, Op)
            })),
            yp = {
              clipPath: pp ? "url(#clipPath-".concat(cp ? "" : "dots-").concat(Op, ")") : null
            };
          return op.createElement(Hp.b, Ep({
            className: "recharts-area-dots"
          }, yp), Wp)
        }
      }, {
        key: "renderHorizontalRect",
        value: function(pp) {
          var ip = this.props,
            cp = ip.baseLine,
            Op = ip.points,
            Ip = ip.strokeWidth,
            Sp = Op[0].x,
            xp = Op[Op.length - 1].x,
            Lp = pp * Math.abs(Sp - xp),
            Yp = Dp()(Op.map((function(pp) {
              return pp.y || 0
            })));
          return (0, jp.D)(cp) && "number" === typeof cp ? Yp = Math.max(cp, Yp) : cp && Array.isArray(cp) && cp.length && (Yp = Math.max(Dp()(cp.map((function(pp) {
            return pp.y || 0
          }))), Yp)), (0, jp.D)(Yp) ? op.createElement("rect", {
            x: Sp < xp ? Sp : Sp - Lp,
            y: 0,
            width: Lp,
            height: Math.floor(Yp + (Ip ? parseInt("".concat(Ip), 10) : 1))
          }) : null
        }
      }, {
        key: "renderVerticalRect",
        value: function(pp) {
          var ip = this.props,
            cp = ip.baseLine,
            Op = ip.points,
            Ip = ip.strokeWidth,
            Sp = Op[0].y,
            xp = Op[Op.length - 1].y,
            Lp = pp * Math.abs(Sp - xp),
            Yp = Dp()(Op.map((function(pp) {
              return pp.x || 0
            })));
          return (0, jp.D)(cp) && "number" === typeof cp ? Yp = Math.max(cp, Yp) : cp && Array.isArray(cp) && cp.length && (Yp = Math.max(Dp()(cp.map((function(pp) {
            return pp.x || 0
          }))), Yp)), (0, jp.D)(Yp) ? op.createElement("rect", {
            x: 0,
            y: Sp < xp ? Sp : Sp - Lp,
            width: Yp + (Ip ? parseInt("".concat(Ip), 10) : 1),
            height: Math.floor(Lp)
          }) : null
        }
      }, {
        key: "renderClipRect",
        value: function(pp) {
          return "vertical" === this.props.layout ? this.renderVerticalRect(pp) : this.renderHorizontalRect(pp)
        }
      }, {
        key: "renderAreaStatically",
        value: function(pp, ip, cp, Op) {
          var Ip = this.props,
            Sp = Ip.layout,
            xp = Ip.type,
            Lp = Ip.stroke,
            Yp = Ip.connectNulls,
            Dp = Ip.isRange,
            Ap = (Ip.ref, Cp(Ip, Rp));
          return op.createElement(Hp.b, {
            clipPath: cp ? "url(#clipPath-".concat(Op, ")") : null
          }, op.createElement(vp.d, Ep({}, (0, mp.d)(Ap, !0), {
            points: pp,
            connectNulls: Yp,
            type: xp,
            baseLine: ip,
            layout: Sp,
            stroke: "none",
            className: "recharts-area-area"
          })), "none" !== Lp && op.createElement(vp.d, Ep({}, (0, mp.d)(this.props, !1), {
            className: "recharts-area-curve",
            layout: Sp,
            type: xp,
            connectNulls: Yp,
            fill: "none",
            points: pp
          })), "none" !== Lp && Dp && op.createElement(vp.d, Ep({}, (0, mp.d)(this.props, !1), {
            className: "recharts-area-curve",
            layout: Sp,
            type: xp,
            connectNulls: Yp,
            fill: "none",
            points: ip
          })))
        }
      }, {
        key: "renderAreaWithAnimation",
        value: function(pp, ip) {
          var cp = this,
            Op = this.props,
            Ip = Op.points,
            xp = Op.baseLine,
            Lp = Op.isAnimationActive,
            Yp = Op.animationBegin,
            Dp = Op.animationDuration,
            Ap = Op.animationEasing,
            Wp = Op.animationId,
            Up = this.state,
            wp = Up.prevPoints,
            vp = Up.prevBaseLine;
          return op.createElement(Sp.c, {
            mW: Yp,
            duration: Dp,
            isActive: Lp,
            easing: Ap,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "area-".concat(Wp),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(Op) {
            var Sp = Op.t;
            if (wp) {
              var Lp, Yp = wp.length / Ip.length,
                Dp = Ip.map((function(pp, ip) {
                  var cp = Math.floor(ip * Yp);
                  if (wp[cp]) {
                    var Op = wp[cp],
                      op = (0, jp.x)(Op.x, pp.x),
                      Ip = (0, jp.x)(Op.y, pp.y);
                    return lp(lp({}, pp), {}, {
                      x: op(Sp),
                      y: Ip(Sp)
                    })
                  }
                  return pp
                }));
              return Lp = (0, jp.D)(xp) && "number" === typeof xp ? (0, jp.x)(vp, xp)(Sp) : Pp()(xp) || yp()(xp) ? (0, jp.x)(vp, 0)(Sp) : xp.map((function(pp, ip) {
                var cp = Math.floor(ip * Yp);
                if (vp[cp]) {
                  var Op = vp[cp],
                    op = (0, jp.x)(Op.x, pp.x),
                    Ip = (0, jp.x)(Op.y, pp.y);
                  return lp(lp({}, pp), {}, {
                    x: op(Sp),
                    y: Ip(Sp)
                  })
                }
                return pp
              })), cp.renderAreaStatically(Dp, Lp, pp, ip)
            }
            return op.createElement(Hp.b, null, op.createElement("defs", null, op.createElement("clipPath", {
              id: "animationClipPath-".concat(ip)
            }, cp.renderClipRect(Sp))), op.createElement(Hp.b, {
              clipPath: "url(#animationClipPath-".concat(ip, ")")
            }, cp.renderAreaStatically(Ip, xp, pp, ip)))
          }))
        }
      }, {
        key: "renderArea",
        value: function(pp, ip) {
          var cp = this.props,
            Op = cp.points,
            op = cp.baseLine,
            Ip = cp.isAnimationActive,
            Sp = this.state,
            xp = Sp.prevPoints,
            Lp = Sp.prevBaseLine,
            Yp = Sp.totalLength;
          return Ip && Op && Op.length && (!xp && Yp > 0 || !wp()(xp, Op) || !wp()(Lp, op)) ? this.renderAreaWithAnimation(pp, ip) : this.renderAreaStatically(Op, op, pp, ip)
        }
      }, {
        key: "render",
        value: function() {
          var pp, ip = this.props,
            cp = ip.hide,
            Op = ip.dot,
            Sp = ip.points,
            xp = ip.className,
            Lp = ip.top,
            Yp = ip.left,
            Dp = ip.xAxis,
            Ap = ip.yAxis,
            Wp = ip.width,
            yp = ip.height,
            Up = ip.isAnimationActive,
            wp = ip.id;
          if (cp || !Sp || !Sp.length) return null;
          var vp = this.state.isAnimationFinished,
            tp = 1 === Sp.length,
            ep = (0, Ip.d)("recharts-area", xp),
            jp = Dp && Dp.allowDataOverflow,
            kp = Ap && Ap.allowDataOverflow,
            Rp = jp || kp,
            qp = Pp()(wp) ? this.id : wp,
            Mp = null !== (pp = (0, mp.d)(Op, !1)) && void 0 !== pp ? pp : {
              r: 3,
              strokeWidth: 2
            },
            Cp = Mp.r,
            Ep = void 0 === Cp ? 3 : Cp,
            Xp = Mp.strokeWidth,
            lp = void 0 === Xp ? 2 : Xp,
            Qp = ((0, mp.n)(Op) ? Op : {}).clipDot,
            Jp = void 0 === Qp || Qp,
            Bp = 2 * Ep + lp;
          return op.createElement(Hp.b, {
            className: ep
          }, jp || kp ? op.createElement("defs", null, op.createElement("clipPath", {
            id: "clipPath-".concat(qp)
          }, op.createElement("rect", {
            x: jp ? Yp : Yp - Wp / 2,
            y: kp ? Lp : Lp - yp / 2,
            width: jp ? Wp : 2 * Wp,
            height: kp ? yp : 2 * yp
          })), !Jp && op.createElement("clipPath", {
            id: "clipPath-dots-".concat(qp)
          }, op.createElement("rect", {
            x: Yp - Bp / 2,
            y: Lp - Bp / 2,
            width: Wp + Bp,
            height: yp + Bp
          }))) : null, tp ? null : this.renderArea(Rp, qp), (Op || tp) && this.renderDots(Rp, Jp, qp), (!Up || vp) && dp.e.renderCallByParent(this.props, Sp))
        }
      }], xp = [{
        key: "getDerivedStateFromProps",
        value: function(pp, ip) {
          return pp.animationId !== ip.prevAnimationId ? {
            prevAnimationId: pp.animationId,
            curPoints: pp.points,
            curBaseLine: pp.baseLine,
            prevPoints: ip.curPoints,
            prevBaseLine: ip.curBaseLine
          } : pp.points !== ip.curPoints || pp.baseLine !== ip.curBaseLine ? {
            curPoints: pp.points,
            curBaseLine: pp.baseLine
          } : null
        }
      }], Op && Qp(cp.prototype, Op), xp && Qp(cp, xp), Object.defineProperty(cp, "prototype", {
        writable: !1
      }), cp;
      var cp, Op, xp
    }(op.PureComponent);
    Op = hp, fp(hp, "displayName", "Area"), fp(hp, "defaultProps", {
      stroke: "#3182bd",
      fill: "#3182bd",
      fillOpacity: .6,
      xAxisId: 0,
      yAxisId: 0,
      legendType: "line",
      connectNulls: !1,
      points: [],
      dot: !1,
      activeDot: !0,
      hide: !1,
      isAnimationActive: !ep.e.isSsr,
      animationBegin: 0,
      animationDuration: 1500,
      animationEasing: "ease"
    }), fp(hp, "getBaseValue", (function(pp, ip, cp, Op) {
      var op = pp.layout,
        Ip = pp.baseValue,
        Sp = ip.props.baseValue,
        xp = null !== Sp && void 0 !== Sp ? Sp : Ip;
      if ((0, jp.D)(xp) && "number" === typeof xp) return xp;
      var Lp = "horizontal" === op ? Op : cp,
        Yp = Lp.scale.domain();
      if ("number" === Lp.type) {
        var Dp = Math.max(Yp[0], Yp[1]),
          Ap = Math.min(Yp[0], Yp[1]);
        return "dataMin" === xp ? Ap : "dataMax" === xp || Dp < 0 ? Dp : Math.max(Math.min(Yp[0], Yp[1]), 0)
      }
      return "dataMin" === xp ? Yp[0] : "dataMax" === xp ? Yp[1] : Yp[0]
    })), fp(hp, "getComposedData", (function(pp) {
      var ip, cp = pp.props,
        op = pp.item,
        Ip = pp.xAxis,
        Sp = pp.yAxis,
        xp = pp.xAxisTicks,
        Lp = pp.yAxisTicks,
        Yp = pp.bandSize,
        Dp = pp.dataKey,
        Ap = pp.stackedData,
        Pp = pp.dataStartIndex,
        Wp = pp.displayedData,
        yp = pp.offset,
        Up = cp.layout,
        wp = Ap && Ap.length,
        vp = Op.getBaseValue(cp, op, Ip, Sp),
        tp = "horizontal" === Up,
        Hp = !1,
        dp = Wp.map((function(pp, ip) {
          var cp;
          wp ? cp = Ap[Pp + ip] : (cp = (0, kp.fb)(pp, Dp), Array.isArray(cp) ? Hp = !0 : cp = [vp, cp]);
          var Op = null == cp[1] || wp && null == (0, kp.fb)(pp, Dp);
          return tp ? {
            x: (0, kp.F)({
              axis: Ip,
              ticks: xp,
              bandSize: Yp,
              entry: pp,
              index: ip
            }),
            y: Op ? null : Sp.scale(cp[1]),
            value: cp,
            payload: pp
          } : {
            x: Op ? null : Ip.scale(cp[1]),
            y: (0, kp.F)({
              axis: Sp,
              ticks: Lp,
              bandSize: Yp,
              entry: pp,
              index: ip
            }),
            value: cp,
            payload: pp
          }
        }));
      return ip = wp || Hp ? dp.map((function(pp) {
        var ip = Array.isArray(pp.value) ? pp.value[0] : null;
        return tp ? {
          x: pp.x,
          y: null != ip && null != pp.y ? Sp.scale(ip) : null
        } : {
          x: null != ip ? Ip.scale(ip) : null,
          y: pp.y
        }
      })) : tp ? Sp.scale(vp) : Ip.scale(vp), lp({
        points: dp,
        baseLine: ip,
        layout: Up,
        isRange: Hp
      }, yp)
    })), fp(hp, "renderDotItem", (function(pp, ip) {
      var cp;
      if (op.isValidElement(pp)) cp = op.cloneElement(pp, ip);
      else if (Lp()(pp)) cp = pp(ip);
      else {
        var Op = (0, Ip.d)("recharts-area-dot", "boolean" !== typeof pp ? pp.className : ""),
          Sp = ip.key,
          xp = Cp(ip, qp);
        cp = op.createElement(tp.c, Ep({}, xp, {
          key: Sp,
          className: Op
        }))
      }
      return cp
    }))
  },
  6402: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Gp
    });
    var Op = cp(62),
      op = cp(5203),
      Ip = cp(6256),
      Sp = cp(6322),
      xp = cp.n(Sp),
      Lp = cp(5575),
      Yp = cp.n(Lp),
      Dp = cp(6103),
      Ap = cp(6332),
      Pp = cp(6410),
      Wp = cp(6414),
      yp = cp(5299),
      Up = cp(5588),
      wp = cp(6115),
      vp = cp(6266),
      tp = cp(5619),
      Hp = cp(6096),
      dp = cp(6425),
      ep = ["x", "y"];

    function jp(pp) {
      return jp = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
        return typeof pp
      } : function(pp) {
        return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
      }, jp(pp)
    }

    function kp() {
      return kp = Object.assign ? Object.assign.bind() : function(pp) {
        for (var ip = 1; ip < arguments.length; ip++) {
          var cp = arguments[ip];
          for (var Op in cp) Object.prototype.hasOwnProperty.call(cp, Op) && (pp[Op] = cp[Op])
        }
        return pp
      }, kp.apply(this, arguments)
    }

    function mp(pp, ip) {
      var cp = Object.keys(pp);
      if (Object.getOwnPropertySymbols) {
        var Op = Object.getOwnPropertySymbols(pp);
        ip && (Op = Op.filter((function(ip) {
          return Object.getOwnPropertyDescriptor(pp, ip).enumerable
        }))), cp.push.apply(cp, Op)
      }
      return cp
    }

    function Rp(pp) {
      for (var ip = 1; ip < arguments.length; ip++) {
        var cp = null != arguments[ip] ? arguments[ip] : {};
        ip % 2 ? mp(Object(cp), !0).forEach((function(ip) {
          qp(pp, ip, cp[ip])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : mp(Object(cp)).forEach((function(ip) {
          Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
        }))
      }
      return pp
    }

    function qp(pp, ip, cp) {
      return (ip = function(pp) {
        var ip = function(pp, ip) {
          if ("object" != jp(pp) || !pp) return pp;
          var cp = pp[Symbol.toPrimitive];
          if (void 0 !== cp) {
            var Op = cp.call(pp, ip || "default");
            if ("object" != jp(Op)) return Op;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === ip ? String : Number)(pp)
        }(pp, "string");
        return "symbol" == jp(ip) ? ip : ip + ""
      }(ip)) in pp ? Object.defineProperty(pp, ip, {
        value: cp,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : pp[ip] = cp, pp
    }

    function Mp(pp, ip) {
      if (null == pp) return {};
      var cp, Op, op = function(pp, ip) {
        if (null == pp) return {};
        var cp = {};
        for (var Op in pp)
          if (Object.prototype.hasOwnProperty.call(pp, Op)) {
            if (ip.indexOf(Op) >= 0) continue;
            cp[Op] = pp[Op]
          } return cp
      }(pp, ip);
      if (Object.getOwnPropertySymbols) {
        var Ip = Object.getOwnPropertySymbols(pp);
        for (Op = 0; Op < Ip.length; Op++) cp = Ip[Op], ip.indexOf(cp) >= 0 || Object.prototype.propertyIsEnumerable.call(pp, cp) && (op[cp] = pp[cp])
      }
      return op
    }

    function Cp(pp, ip) {
      var cp = pp.x,
        Op = pp.y,
        op = Mp(pp, ep),
        Ip = "".concat(cp),
        Sp = parseInt(Ip, 10),
        xp = "".concat(Op),
        Lp = parseInt(xp, 10),
        Yp = "".concat(ip.height || op.height),
        Dp = parseInt(Yp, 10),
        Ap = "".concat(ip.width || op.width),
        Pp = parseInt(Ap, 10);
      return Rp(Rp(Rp(Rp(Rp({}, ip), op), Sp ? {
        x: Sp
      } : {}), Lp ? {
        y: Lp
      } : {}), {}, {
        height: Dp,
        width: Pp,
        name: ip.name,
        radius: ip.radius
      })
    }

    function Ep(pp) {
      return Op.createElement(dp.d, kp({
        shapeType: "rectangle",
        propTransformer: Cp,
        activeClassName: "recharts-active-bar"
      }, pp))
    }
    var Xp, lp = ["value", "background"];

    function Qp(pp) {
      return Qp = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
        return typeof pp
      } : function(pp) {
        return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
      }, Qp(pp)
    }

    function Jp(pp, ip) {
      if (null == pp) return {};
      var cp, Op, op = function(pp, ip) {
        if (null == pp) return {};
        var cp = {};
        for (var Op in pp)
          if (Object.prototype.hasOwnProperty.call(pp, Op)) {
            if (ip.indexOf(Op) >= 0) continue;
            cp[Op] = pp[Op]
          } return cp
      }(pp, ip);
      if (Object.getOwnPropertySymbols) {
        var Ip = Object.getOwnPropertySymbols(pp);
        for (Op = 0; Op < Ip.length; Op++) cp = Ip[Op], ip.indexOf(cp) >= 0 || Object.prototype.propertyIsEnumerable.call(pp, cp) && (op[cp] = pp[cp])
      }
      return op
    }

    function Bp() {
      return Bp = Object.assign ? Object.assign.bind() : function(pp) {
        for (var ip = 1; ip < arguments.length; ip++) {
          var cp = arguments[ip];
          for (var Op in cp) Object.prototype.hasOwnProperty.call(cp, Op) && (pp[Op] = cp[Op])
        }
        return pp
      }, Bp.apply(this, arguments)
    }

    function Np(pp, ip) {
      var cp = Object.keys(pp);
      if (Object.getOwnPropertySymbols) {
        var Op = Object.getOwnPropertySymbols(pp);
        ip && (Op = Op.filter((function(ip) {
          return Object.getOwnPropertyDescriptor(pp, ip).enumerable
        }))), cp.push.apply(cp, Op)
      }
      return cp
    }

    function Tp(pp) {
      for (var ip = 1; ip < arguments.length; ip++) {
        var cp = null != arguments[ip] ? arguments[ip] : {};
        ip % 2 ? Np(Object(cp), !0).forEach((function(ip) {
          Fp(pp, ip, cp[ip])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : Np(Object(cp)).forEach((function(ip) {
          Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
        }))
      }
      return pp
    }

    function fp(pp, ip) {
      for (var cp = 0; cp < ip.length; cp++) {
        var Op = ip[cp];
        Op.enumerable = Op.enumerable || !1, Op.configurable = !0, "value" in Op && (Op.writable = !0), Object.defineProperty(pp, gp(Op.key), Op)
      }
    }

    function bp(pp, ip, cp) {
      return ip = ap(ip),
        function(pp, ip) {
          if (ip && ("object" === Qp(ip) || "function" === typeof ip)) return ip;
          if (void 0 !== ip) throw new TypeError("Derived constructors may only return object or undefined");
          return function(pp) {
            if (void 0 === pp) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return pp
          }(pp)
        }(pp, hp() ? Reflect.construct(ip, cp || [], ap(pp).constructor) : ip.apply(pp, cp))
    }

    function hp() {
      try {
        var pp = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (pp) {}
      return (hp = function() {
        return !!pp
      })()
    }

    function ap(pp) {
      return ap = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(pp) {
        return pp.__proto__ || Object.getPrototypeOf(pp)
      }, ap(pp)
    }

    function np(pp, ip) {
      return np = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(pp, ip) {
        return pp.__proto__ = ip, pp
      }, np(pp, ip)
    }

    function Fp(pp, ip, cp) {
      return (ip = gp(ip)) in pp ? Object.defineProperty(pp, ip, {
        value: cp,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : pp[ip] = cp, pp
    }

    function gp(pp) {
      var ip = function(pp, ip) {
        if ("object" != Qp(pp) || !pp) return pp;
        var cp = pp[Symbol.toPrimitive];
        if (void 0 !== cp) {
          var Op = cp.call(pp, ip || "default");
          if ("object" != Qp(Op)) return Op;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ip ? String : Number)(pp)
      }(pp, "string");
      return "symbol" == Qp(ip) ? ip : ip + ""
    }
    var Gp = function(pp) {
      function ip() {
        var pp;
        ! function(pp, ip) {
          if (!(pp instanceof ip)) throw new TypeError("Cannot call a class as a function")
        }(this, ip);
        for (var cp = arguments.length, Op = new Array(cp), op = 0; op < cp; op++) Op[op] = arguments[op];
        return Fp(pp = bp(this, ip, [].concat(Op)), "state", {
          isAnimationFinished: !1
        }), Fp(pp, "id", (0, yp.J)("recharts-bar-")), Fp(pp, "handleAnimationEnd", (function() {
          var ip = pp.props.onAnimationEnd;
          pp.setState({
            isAnimationFinished: !0
          }), ip && ip()
        })), Fp(pp, "handleAnimationStart", (function() {
          var ip = pp.props.onAnimationStart;
          pp.setState({
            isAnimationFinished: !1
          }), ip && ip()
        })), pp
      }
      return function(pp, ip) {
        if ("function" !== typeof ip && null !== ip) throw new TypeError("Super expression must either be null or a function");
        pp.prototype = Object.create(ip && ip.prototype, {
          constructor: {
            value: pp,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(pp, "prototype", {
          writable: !1
        }), ip && np(pp, ip)
      }(ip, pp), cp = ip, Sp = [{
        key: "renderRectanglesStatically",
        value: function(pp) {
          var ip = this,
            cp = this.props,
            op = cp.shape,
            Ip = cp.dataKey,
            Sp = cp.activeIndex,
            xp = cp.activeBar,
            Lp = (0, Up.d)(this.props, !1);
          return pp && pp.map((function(pp, cp) {
            var Yp = cp === Sp,
              Ap = Yp ? xp : op,
              Pp = Tp(Tp(Tp({}, Lp), pp), {}, {
                isActive: Yp,
                option: Ap,
                index: cp,
                dataKey: Ip,
                onAnimationStart: ip.handleAnimationStart,
                onAnimationEnd: ip.handleAnimationEnd
              });
            return Op.createElement(Dp.b, Bp({
              className: "recharts-bar-rectangle"
            }, (0, tp.i)(ip.props, pp, cp), {
              key: "rectangle-".concat(null === pp || void 0 === pp ? void 0 : pp.x, "-").concat(null === pp || void 0 === pp ? void 0 : pp.y, "-").concat(null === pp || void 0 === pp ? void 0 : pp.value, "-").concat(cp)
            }), Op.createElement(Ep, Pp))
          }))
        }
      }, {
        key: "renderRectanglesWithAnimation",
        value: function() {
          var pp = this,
            ip = this.props,
            cp = ip.data,
            op = ip.layout,
            Sp = ip.isAnimationActive,
            xp = ip.animationBegin,
            Lp = ip.animationDuration,
            Yp = ip.animationEasing,
            Ap = ip.animationId,
            Pp = this.state.prevData;
          return Op.createElement(Ip.c, {
            mW: xp,
            duration: Lp,
            isActive: Sp,
            easing: Yp,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "bar-".concat(Ap),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(ip) {
            var Ip = ip.t,
              Sp = cp.map((function(pp, ip) {
                var cp = Pp && Pp[ip];
                if (cp) {
                  var Op = (0, yp.x)(cp.x, pp.x),
                    Sp = (0, yp.x)(cp.y, pp.y),
                    xp = (0, yp.x)(cp.width, pp.width),
                    Lp = (0, yp.x)(cp.height, pp.height);
                  return Tp(Tp({}, pp), {}, {
                    x: Op(Ip),
                    y: Sp(Ip),
                    width: xp(Ip),
                    height: Lp(Ip)
                  })
                }
                if ("horizontal" === op) {
                  var Yp = (0, yp.x)(0, pp.height)(Ip);
                  return Tp(Tp({}, pp), {}, {
                    y: pp.y + pp.height - Yp,
                    height: Yp
                  })
                }
                var Dp = (0, yp.x)(0, pp.width)(Ip);
                return Tp(Tp({}, pp), {}, {
                  width: Dp
                })
              }));
            return Op.createElement(Dp.b, null, pp.renderRectanglesStatically(Sp))
          }))
        }
      }, {
        key: "renderRectangles",
        value: function() {
          var pp = this.props,
            ip = pp.data,
            cp = pp.isAnimationActive,
            Op = this.state.prevData;
          return !(cp && ip && ip.length) || Op && xp()(Op, ip) ? this.renderRectanglesStatically(ip) : this.renderRectanglesWithAnimation()
        }
      }, {
        key: "renderBackground",
        value: function() {
          var pp = this,
            ip = this.props,
            cp = ip.data,
            op = ip.dataKey,
            Ip = ip.activeIndex,
            Sp = (0, Up.d)(this.props.background, !1);
          return cp.map((function(ip, cp) {
            ip.value;
            var xp = ip.background,
              Lp = Jp(ip, lp);
            if (!xp) return null;
            var Yp = Tp(Tp(Tp(Tp(Tp({}, Lp), {}, {
              fill: "#eee"
            }, xp), Sp), (0, tp.i)(pp.props, ip, cp)), {}, {
              onAnimationStart: pp.handleAnimationStart,
              onAnimationEnd: pp.handleAnimationEnd,
              dataKey: op,
              index: cp,
              className: "recharts-bar-background-rectangle"
            });
            return Op.createElement(Ep, Bp({
              key: "background-bar-".concat(cp),
              option: pp.props.background,
              isActive: cp === Ip
            }, Yp))
          }))
        }
      }, {
        key: "renderErrorBar",
        value: function(pp, ip) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var cp = this.props,
            op = cp.data,
            Ip = cp.xAxis,
            Sp = cp.yAxis,
            xp = cp.layout,
            Lp = cp.children,
            Yp = (0, Up.h)(Lp, Ap.b);
          if (!Yp) return null;
          var Pp = "vertical" === xp ? op[0].height / 2 : op[0].width / 2,
            Wp = function(pp, ip) {
              var cp = Array.isArray(pp.value) ? pp.value[1] : pp.value;
              return {
                x: pp.x,
                y: pp.y,
                value: cp,
                errorVal: (0, vp.fb)(pp, ip)
              }
            },
            yp = {
              clipPath: pp ? "url(#clipPath-".concat(ip, ")") : null
            };
          return Op.createElement(Dp.b, yp, Yp.map((function(pp) {
            return Op.cloneElement(pp, {
              key: "error-bar-".concat(ip, "-").concat(pp.props.dataKey),
              data: op,
              xAxis: Ip,
              yAxis: Sp,
              layout: xp,
              offset: Pp,
              dataPointFormatter: Wp
            })
          })))
        }
      }, {
        key: "render",
        value: function() {
          var pp = this.props,
            ip = pp.hide,
            cp = pp.data,
            Ip = pp.className,
            Sp = pp.xAxis,
            xp = pp.yAxis,
            Lp = pp.left,
            Ap = pp.top,
            Pp = pp.width,
            yp = pp.height,
            Up = pp.isAnimationActive,
            wp = pp.background,
            vp = pp.id;
          if (ip || !cp || !cp.length) return null;
          var tp = this.state.isAnimationFinished,
            Hp = (0, op.d)("recharts-bar", Ip),
            dp = Sp && Sp.allowDataOverflow,
            ep = xp && xp.allowDataOverflow,
            jp = dp || ep,
            kp = Yp()(vp) ? this.id : vp;
          return Op.createElement(Dp.b, {
            className: Hp
          }, dp || ep ? Op.createElement("defs", null, Op.createElement("clipPath", {
            id: "clipPath-".concat(kp)
          }, Op.createElement("rect", {
            x: dp ? Lp : Lp - Pp / 2,
            y: ep ? Ap : Ap - yp / 2,
            width: dp ? Pp : 2 * Pp,
            height: ep ? yp : 2 * yp
          }))) : null, Op.createElement(Dp.b, {
            className: "recharts-bar-rectangles",
            clipPath: jp ? "url(#clipPath-".concat(kp, ")") : null
          }, wp ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(jp, kp), (!Up || tp) && Wp.e.renderCallByParent(this.props, cp))
        }
      }], Lp = [{
        key: "getDerivedStateFromProps",
        value: function(pp, ip) {
          return pp.animationId !== ip.prevAnimationId ? {
            prevAnimationId: pp.animationId,
            curData: pp.data,
            prevData: ip.curData
          } : pp.data !== ip.curData ? {
            curData: pp.data
          } : null
        }
      }], Sp && fp(cp.prototype, Sp), Lp && fp(cp, Lp), Object.defineProperty(cp, "prototype", {
        writable: !1
      }), cp;
      var cp, Sp, Lp
    }(Op.PureComponent);
    Xp = Gp, Fp(Gp, "displayName", "Bar"), Fp(Gp, "defaultProps", {
      xAxisId: 0,
      yAxisId: 0,
      legendType: "rect",
      minPointSize: 0,
      hide: !1,
      data: [],
      layout: "vertical",
      activeBar: !1,
      isAnimationActive: !wp.e.isSsr,
      animationBegin: 0,
      animationDuration: 400,
      animationEasing: "ease"
    }), Fp(Gp, "getComposedData", (function(pp) {
      var ip = pp.props,
        cp = pp.item,
        Op = pp.barPosition,
        op = pp.bandSize,
        Ip = pp.xAxis,
        Sp = pp.yAxis,
        xp = pp.xAxisTicks,
        Lp = pp.yAxisTicks,
        Yp = pp.stackedData,
        Dp = pp.dataStartIndex,
        Ap = pp.displayedData,
        Wp = pp.offset,
        wp = (0, vp.p)(Op, cp);
      if (!wp) return null;
      var tp = ip.layout,
        dp = cp.type.defaultProps,
        ep = void 0 !== dp ? Tp(Tp({}, dp), cp.props) : cp.props,
        jp = ep.dataKey,
        kp = ep.children,
        mp = ep.minPointSize,
        Rp = "horizontal" === tp ? Sp : Ip,
        qp = Yp ? Rp.scale.domain() : null,
        Mp = (0, vp.A)({
          numericAxis: Rp
        }),
        Cp = (0, Up.h)(kp, Pp.b),
        Ep = Ap.map((function(pp, ip) {
          var Op, Ap, Pp, Wp, Up, dp;
          Yp ? Op = (0, vp.wb)(Yp[Dp + ip], qp) : (Op = (0, vp.fb)(pp, jp), Array.isArray(Op) || (Op = [Mp, Op]));
          var ep = function(pp) {
            var ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return function(cp, Op) {
              if ("number" === typeof pp) return pp;
              var op = (0, yp.D)(cp) || (0, yp.z)(cp);
              return op ? pp(cp, Op) : (op || (0, Hp.d)(!1), ip)
            }
          }(mp, Xp.defaultProps.minPointSize)(Op[1], ip);
          if ("horizontal" === tp) {
            var kp, Rp = [Sp.scale(Op[0]), Sp.scale(Op[1])],
              Ep = Rp[0],
              lp = Rp[1];
            Ap = (0, vp.E)({
              axis: Ip,
              ticks: xp,
              bandSize: op,
              offset: wp.offset,
              entry: pp,
              index: ip
            }), Pp = null !== (kp = null !== lp && void 0 !== lp ? lp : Ep) && void 0 !== kp ? kp : void 0, Wp = wp.size;
            var Qp = Ep - lp;
            if (Up = Number.isNaN(Qp) ? 0 : Qp, dp = {
                x: Ap,
                y: Sp.y,
                width: Wp,
                height: Sp.height
              }, Math.abs(ep) > 0 && Math.abs(Up) < Math.abs(ep)) {
              var Jp = (0, yp.I)(Up || ep) * (Math.abs(ep) - Math.abs(Up));
              Pp -= Jp, Up += Jp
            }
          } else {
            var Bp = [Ip.scale(Op[0]), Ip.scale(Op[1])],
              Np = Bp[0],
              fp = Bp[1];
            if (Ap = Np, Pp = (0, vp.E)({
                axis: Sp,
                ticks: Lp,
                bandSize: op,
                offset: wp.offset,
                entry: pp,
                index: ip
              }), Wp = fp - Np, Up = wp.size, dp = {
                x: Ip.x,
                y: Pp,
                width: Ip.width,
                height: Up
              }, Math.abs(ep) > 0 && Math.abs(Wp) < Math.abs(ep)) Wp += (0, yp.I)(Wp || ep) * (Math.abs(ep) - Math.abs(Wp))
          }
          return Tp(Tp(Tp({}, pp), {}, {
            x: Ap,
            y: Pp,
            width: Wp,
            height: Up,
            value: Yp ? Op : Op[1],
            payload: pp,
            background: dp
          }, Cp && Cp[ip] && Cp[ip].props), {}, {
            tooltipPayload: [(0, vp.cb)(cp, pp)],
            tooltipPosition: {
              x: Ap + Wp / 2,
              y: Pp + Up / 2
            }
          })
        }));
      return Tp({
        data: Ep,
        layout: tp
      }, Wp)
    }))
  },
  6517: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Qp
    });
    var Op = cp(62),
      op = cp(5405),
      Ip = cp.n(op),
      Sp = cp(5326),
      xp = cp.n(Sp),
      Lp = cp(5203),
      Yp = cp(5610),
      Dp = cp(6103),
      Ap = cp(6262),
      Pp = cp(6352),
      Wp = cp(5299),
      yp = cp(5619),
      Up = cp(5588),
      wp = cp(6520),
      vp = ["viewBox"],
      tp = ["viewBox"],
      Hp = ["ticks"];

    function dp(pp) {
      return dp = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
        return typeof pp
      } : function(pp) {
        return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
      }, dp(pp)
    }

    function ep() {
      return ep = Object.assign ? Object.assign.bind() : function(pp) {
        for (var ip = 1; ip < arguments.length; ip++) {
          var cp = arguments[ip];
          for (var Op in cp) Object.prototype.hasOwnProperty.call(cp, Op) && (pp[Op] = cp[Op])
        }
        return pp
      }, ep.apply(this, arguments)
    }

    function jp(pp, ip) {
      var cp = Object.keys(pp);
      if (Object.getOwnPropertySymbols) {
        var Op = Object.getOwnPropertySymbols(pp);
        ip && (Op = Op.filter((function(ip) {
          return Object.getOwnPropertyDescriptor(pp, ip).enumerable
        }))), cp.push.apply(cp, Op)
      }
      return cp
    }

    function kp(pp) {
      for (var ip = 1; ip < arguments.length; ip++) {
        var cp = null != arguments[ip] ? arguments[ip] : {};
        ip % 2 ? jp(Object(cp), !0).forEach((function(ip) {
          Xp(pp, ip, cp[ip])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : jp(Object(cp)).forEach((function(ip) {
          Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
        }))
      }
      return pp
    }

    function mp(pp, ip) {
      if (null == pp) return {};
      var cp, Op, op = function(pp, ip) {
        if (null == pp) return {};
        var cp = {};
        for (var Op in pp)
          if (Object.prototype.hasOwnProperty.call(pp, Op)) {
            if (ip.indexOf(Op) >= 0) continue;
            cp[Op] = pp[Op]
          } return cp
      }(pp, ip);
      if (Object.getOwnPropertySymbols) {
        var Ip = Object.getOwnPropertySymbols(pp);
        for (Op = 0; Op < Ip.length; Op++) cp = Ip[Op], ip.indexOf(cp) >= 0 || Object.prototype.propertyIsEnumerable.call(pp, cp) && (op[cp] = pp[cp])
      }
      return op
    }

    function Rp(pp, ip) {
      for (var cp = 0; cp < ip.length; cp++) {
        var Op = ip[cp];
        Op.enumerable = Op.enumerable || !1, Op.configurable = !0, "value" in Op && (Op.writable = !0), Object.defineProperty(pp, lp(Op.key), Op)
      }
    }

    function qp(pp, ip, cp) {
      return ip = Cp(ip),
        function(pp, ip) {
          if (ip && ("object" === dp(ip) || "function" === typeof ip)) return ip;
          if (void 0 !== ip) throw new TypeError("Derived constructors may only return object or undefined");
          return function(pp) {
            if (void 0 === pp) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return pp
          }(pp)
        }(pp, Mp() ? Reflect.construct(ip, cp || [], Cp(pp).constructor) : ip.apply(pp, cp))
    }

    function Mp() {
      try {
        var pp = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (pp) {}
      return (Mp = function() {
        return !!pp
      })()
    }

    function Cp(pp) {
      return Cp = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(pp) {
        return pp.__proto__ || Object.getPrototypeOf(pp)
      }, Cp(pp)
    }

    function Ep(pp, ip) {
      return Ep = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(pp, ip) {
        return pp.__proto__ = ip, pp
      }, Ep(pp, ip)
    }

    function Xp(pp, ip, cp) {
      return (ip = lp(ip)) in pp ? Object.defineProperty(pp, ip, {
        value: cp,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : pp[ip] = cp, pp
    }

    function lp(pp) {
      var ip = function(pp, ip) {
        if ("object" != dp(pp) || !pp) return pp;
        var cp = pp[Symbol.toPrimitive];
        if (void 0 !== cp) {
          var Op = cp.call(pp, ip || "default");
          if ("object" != dp(Op)) return Op;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ip ? String : Number)(pp)
      }(pp, "string");
      return "symbol" == dp(ip) ? ip : ip + ""
    }
    var Qp = function(pp) {
      function ip(pp) {
        var cp;
        return function(pp, ip) {
          if (!(pp instanceof ip)) throw new TypeError("Cannot call a class as a function")
        }(this, ip), (cp = qp(this, ip, [pp])).state = {
          fontSize: "",
          letterSpacing: ""
        }, cp
      }
      return function(pp, ip) {
        if ("function" !== typeof ip && null !== ip) throw new TypeError("Super expression must either be null or a function");
        pp.prototype = Object.create(ip && ip.prototype, {
          constructor: {
            value: pp,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(pp, "prototype", {
          writable: !1
        }), ip && Ep(pp, ip)
      }(ip, pp), cp = ip, Sp = [{
        key: "renderTickItem",
        value: function(pp, ip, cp) {
          var op = (0, Lp.d)(ip.className, "recharts-cartesian-axis-tick-value");
          return Op.isValidElement(pp) ? Op.cloneElement(pp, kp(kp({}, ip), {}, {
            className: op
          })) : Ip()(pp) ? pp(kp(kp({}, ip), {}, {
            className: op
          })) : Op.createElement(Ap.c, ep({}, ip, {
            className: "recharts-cartesian-axis-tick-value"
          }), cp)
        }
      }], (op = [{
        key: "shouldComponentUpdate",
        value: function(pp, ip) {
          var cp = pp.viewBox,
            Op = mp(pp, vp),
            op = this.props,
            Ip = op.viewBox,
            Sp = mp(op, tp);
          return !(0, Yp.b)(cp, Ip) || !(0, Yp.b)(Op, Sp) || !(0, Yp.b)(ip, this.state)
        }
      }, {
        key: "componentDidMount",
        value: function() {
          var pp = this.layerReference;
          if (pp) {
            var ip = pp.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];
            ip && this.setState({
              fontSize: window.getComputedStyle(ip).fontSize,
              letterSpacing: window.getComputedStyle(ip).letterSpacing
            })
          }
        }
      }, {
        key: "getTickLineCoord",
        value: function(pp) {
          var ip, cp, Op, op, Ip, Sp, xp = this.props,
            Lp = xp.x,
            Yp = xp.y,
            Dp = xp.width,
            Ap = xp.height,
            Pp = xp.orientation,
            yp = xp.tickSize,
            Up = xp.mirror,
            wp = xp.tickMargin,
            vp = Up ? -1 : 1,
            tp = pp.tickSize || yp,
            Hp = (0, Wp.D)(pp.tickCoord) ? pp.tickCoord : pp.coordinate;
          switch (Pp) {
            case "top":
              ip = cp = pp.coordinate, Sp = (Op = (op = Yp + +!Up * Ap) - vp * tp) - vp * wp, Ip = Hp;
              break;
            case "left":
              Op = op = pp.coordinate, Ip = (ip = (cp = Lp + +!Up * Dp) - vp * tp) - vp * wp, Sp = Hp;
              break;
            case "right":
              Op = op = pp.coordinate, Ip = (ip = (cp = Lp + +Up * Dp) + vp * tp) + vp * wp, Sp = Hp;
              break;
            default:
              ip = cp = pp.coordinate, Sp = (Op = (op = Yp + +Up * Ap) + vp * tp) + vp * wp, Ip = Hp
          }
          return {
            line: {
              x1: ip,
              y1: Op,
              x2: cp,
              y2: op
            },
            LP: {
              x: Ip,
              y: Sp
            }
          }
        }
      }, {
        key: "getTickTextAnchor",
        value: function() {
          var pp, ip = this.props,
            cp = ip.orientation,
            Op = ip.mirror;
          switch (cp) {
            case "left":
              pp = Op ? "start" : "end";
              break;
            case "right":
              pp = Op ? "end" : "start";
              break;
            default:
              pp = "middle"
          }
          return pp
        }
      }, {
        key: "getTickVerticalAnchor",
        value: function() {
          var pp = this.props,
            ip = pp.orientation,
            cp = pp.mirror,
            Op = "end";
          switch (ip) {
            case "left":
            case "right":
              Op = "middle";
              break;
            case "top":
              Op = cp ? "start" : "end";
              break;
            default:
              Op = cp ? "end" : "start"
          }
          return Op
        }
      }, {
        key: "renderAxisLine",
        value: function() {
          var pp = this.props,
            ip = pp.x,
            cp = pp.y,
            op = pp.width,
            Ip = pp.height,
            Sp = pp.orientation,
            Yp = pp.mirror,
            Dp = pp.axisLine,
            Ap = kp(kp(kp({}, (0, Up.d)(this.props, !1)), (0, Up.d)(Dp, !1)), {}, {
              fill: "none"
            });
          if ("top" === Sp || "bottom" === Sp) {
            var Pp = +("top" === Sp && !Yp || "bottom" === Sp && Yp);
            Ap = kp(kp({}, Ap), {}, {
              x1: ip,
              y1: cp + Pp * Ip,
              x2: ip + op,
              y2: cp + Pp * Ip
            })
          } else {
            var Wp = +("left" === Sp && !Yp || "right" === Sp && Yp);
            Ap = kp(kp({}, Ap), {}, {
              x1: ip + Wp * op,
              y1: cp,
              x2: ip + Wp * op,
              y2: cp + Ip
            })
          }
          return Op.createElement("line", ep({}, Ap, {
            className: (0, Lp.d)("recharts-cartesian-axis-line", xp()(Dp, "className"))
          }))
        }
      }, {
        key: "renderTicks",
        value: function(pp, cp, op) {
          var Sp = this,
            Yp = this.props,
            Ap = Yp.tickLine,
            Pp = Yp.stroke,
            Wp = Yp.LP,
            vp = Yp.tickFormatter,
            tp = Yp.unit,
            Hp = (0, wp.c)(kp(kp({}, this.props), {}, {
              ticks: pp
            }), cp, op),
            dp = this.getTickTextAnchor(),
            jp = this.getTickVerticalAnchor(),
            mp = (0, Up.d)(this.props, !1),
            Rp = (0, Up.d)(Wp, !1),
            qp = kp(kp({}, mp), {}, {
              fill: "none"
            }, (0, Up.d)(Ap, !1)),
            Mp = Hp.map((function(pp, cp) {
              var op = Sp.getTickLineCoord(pp),
                Yp = op.line,
                Up = op.LP,
                wp = kp(kp(kp(kp({
                  textAnchor: dp,
                  verticalAnchor: jp
                }, mp), {}, {
                  stroke: "none",
                  fill: Pp
                }, Rp), Up), {}, {
                  index: cp,
                  payload: pp,
                  visibleTicksCount: Hp.length,
                  tickFormatter: vp
                });
              return Op.createElement(Dp.b, ep({
                className: "recharts-cartesian-axis-tick",
                key: "tick-".concat(pp.value, "-").concat(pp.coordinate, "-").concat(pp.tickCoord)
              }, (0, yp.i)(Sp.props, pp, cp)), Ap && Op.createElement("line", ep({}, qp, Yp, {
                className: (0, Lp.d)("recharts-cartesian-axis-tick-line", xp()(Ap, "className"))
              })), Wp && ip.renderTickItem(Wp, wp, "".concat(Ip()(vp) ? vp(pp.value, cp) : pp.value).concat(tp || "")))
            }));
          return Op.createElement("g", {
            className: "recharts-cartesian-axis-ticks"
          }, Mp)
        }
      }, {
        key: "render",
        value: function() {
          var pp = this,
            ip = this.props,
            cp = ip.axisLine,
            op = ip.width,
            Sp = ip.height,
            xp = ip.ticksGenerator,
            Yp = ip.className;
          if (ip.hide) return null;
          var Ap = this.props,
            Wp = Ap.ticks,
            yp = mp(Ap, Hp),
            Up = Wp;
          return Ip()(xp) && (Up = Wp && Wp.length > 0 ? xp(this.props) : xp(yp)), op <= 0 || Sp <= 0 || !Up || !Up.length ? null : Op.createElement(Dp.b, {
            className: (0, Lp.d)("recharts-cartesian-axis", Yp),
            ref: function(ip) {
              pp.layerReference = ip
            }
          }, cp && this.renderAxisLine(), this.renderTicks(Up, this.state.fontSize, this.state.letterSpacing), Pp.e.renderCallByParent(this.props))
        }
      }]) && Rp(cp.prototype, op), Sp && Rp(cp, Sp), Object.defineProperty(cp, "prototype", {
        writable: !1
      }), cp;
      var cp, op, Sp
    }(Op.Component);
    Xp(Qp, "displayName", "CartesianAxis"), Xp(Qp, "defaultProps", {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      viewBox: {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      },
      orientation: "bottom",
      ticks: [],
      stroke: "#666",
      tickLine: !0,
      axisLine: !0,
      LP: !0,
      mirror: !1,
      minTickGap: 5,
      tickSize: 6,
      tickMargin: 2,
      interval: "preserveEnd"
    })
  },
  6532: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Xp
    });
    var Op = cp(62),
      op = cp(5405),
      Ip = cp.n(op),
      Sp = cp(5582),
      xp = cp(5299),
      Lp = cp(5588),
      Yp = cp(6266),
      Dp = cp(6520),
      Ap = cp(6517),
      Pp = cp(6470),
      Wp = ["x1", "y1", "x2", "y2", "key"],
      yp = ["offset"];

    function Up(pp) {
      return Up = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
        return typeof pp
      } : function(pp) {
        return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
      }, Up(pp)
    }

    function wp(pp, ip) {
      var cp = Object.keys(pp);
      if (Object.getOwnPropertySymbols) {
        var Op = Object.getOwnPropertySymbols(pp);
        ip && (Op = Op.filter((function(ip) {
          return Object.getOwnPropertyDescriptor(pp, ip).enumerable
        }))), cp.push.apply(cp, Op)
      }
      return cp
    }

    function vp(pp) {
      for (var ip = 1; ip < arguments.length; ip++) {
        var cp = null != arguments[ip] ? arguments[ip] : {};
        ip % 2 ? wp(Object(cp), !0).forEach((function(ip) {
          tp(pp, ip, cp[ip])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : wp(Object(cp)).forEach((function(ip) {
          Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
        }))
      }
      return pp
    }

    function tp(pp, ip, cp) {
      return (ip = function(pp) {
        var ip = function(pp, ip) {
          if ("object" != Up(pp) || !pp) return pp;
          var cp = pp[Symbol.toPrimitive];
          if (void 0 !== cp) {
            var Op = cp.call(pp, ip || "default");
            if ("object" != Up(Op)) return Op;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === ip ? String : Number)(pp)
        }(pp, "string");
        return "symbol" == Up(ip) ? ip : ip + ""
      }(ip)) in pp ? Object.defineProperty(pp, ip, {
        value: cp,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : pp[ip] = cp, pp
    }

    function Hp() {
      return Hp = Object.assign ? Object.assign.bind() : function(pp) {
        for (var ip = 1; ip < arguments.length; ip++) {
          var cp = arguments[ip];
          for (var Op in cp) Object.prototype.hasOwnProperty.call(cp, Op) && (pp[Op] = cp[Op])
        }
        return pp
      }, Hp.apply(this, arguments)
    }

    function dp(pp, ip) {
      if (null == pp) return {};
      var cp, Op, op = function(pp, ip) {
        if (null == pp) return {};
        var cp = {};
        for (var Op in pp)
          if (Object.prototype.hasOwnProperty.call(pp, Op)) {
            if (ip.indexOf(Op) >= 0) continue;
            cp[Op] = pp[Op]
          } return cp
      }(pp, ip);
      if (Object.getOwnPropertySymbols) {
        var Ip = Object.getOwnPropertySymbols(pp);
        for (Op = 0; Op < Ip.length; Op++) cp = Ip[Op], ip.indexOf(cp) >= 0 || Object.prototype.propertyIsEnumerable.call(pp, cp) && (op[cp] = pp[cp])
      }
      return op
    }
    var ep = function(pp) {
      var ip = pp.fill;
      if (!ip || "none" === ip) return null;
      var cp = pp.fillOpacity,
        op = pp.x,
        Ip = pp.y,
        Sp = pp.width,
        xp = pp.height,
        Lp = pp.ry;
      return Op.createElement("rect", {
        x: op,
        y: Ip,
        ry: Lp,
        width: Sp,
        height: xp,
        stroke: "none",
        fill: ip,
        fillOpacity: cp,
        className: "recharts-cartesian-grid-bg"
      })
    };

    function jp(pp, ip) {
      var cp;
      if (Op.isValidElement(pp)) cp = Op.cloneElement(pp, ip);
      else if (Ip()(pp)) cp = pp(ip);
      else {
        var op = ip.x1,
          Sp = ip.y1,
          xp = ip.x2,
          Yp = ip.y2,
          Dp = ip.key,
          Ap = dp(ip, Wp),
          Pp = (0, Lp.d)(Ap, !1),
          Up = (Pp.offset, dp(Pp, yp));
        cp = Op.createElement("line", Hp({}, Up, {
          x1: op,
          y1: Sp,
          x2: xp,
          y2: Yp,
          fill: "none",
          key: Dp
        }))
      }
      return cp
    }

    function kp(pp) {
      var ip = pp.x,
        cp = pp.width,
        op = pp.horizontal,
        Ip = void 0 === op || op,
        Sp = pp.horizontalPoints;
      if (!Ip || !Sp || !Sp.length) return null;
      var xp = Sp.map((function(Op, op) {
        var Sp = vp(vp({}, pp), {}, {
          x1: ip,
          y1: Op,
          x2: ip + cp,
          y2: Op,
          key: "line-".concat(op),
          index: op
        });
        return jp(Ip, Sp)
      }));
      return Op.createElement("g", {
        className: "recharts-cartesian-grid-horizontal"
      }, xp)
    }

    function mp(pp) {
      var ip = pp.y,
        cp = pp.height,
        op = pp.vertical,
        Ip = void 0 === op || op,
        Sp = pp.verticalPoints;
      if (!Ip || !Sp || !Sp.length) return null;
      var xp = Sp.map((function(Op, op) {
        var Sp = vp(vp({}, pp), {}, {
          x1: Op,
          y1: ip,
          x2: Op,
          y2: ip + cp,
          key: "line-".concat(op),
          index: op
        });
        return jp(Ip, Sp)
      }));
      return Op.createElement("g", {
        className: "recharts-cartesian-grid-vertical"
      }, xp)
    }

    function Rp(pp) {
      var ip = pp.horizontalFill,
        cp = pp.fillOpacity,
        op = pp.x,
        Ip = pp.y,
        Sp = pp.width,
        xp = pp.height,
        Lp = pp.horizontalPoints,
        Yp = pp.horizontal;
      if (!(void 0 === Yp || Yp) || !ip || !ip.length) return null;
      var Dp = Lp.map((function(pp) {
        return Math.round(pp + Ip - Ip)
      })).sort((function(pp, ip) {
        return pp - ip
      }));
      Ip !== Dp[0] && Dp.unshift(0);
      var Ap = Dp.map((function(pp, Lp) {
        var Yp = !Dp[Lp + 1] ? Ip + xp - pp : Dp[Lp + 1] - pp;
        if (Yp <= 0) return null;
        var Ap = Lp % ip.length;
        return Op.createElement("rect", {
          key: "react-".concat(Lp),
          y: pp,
          x: op,
          height: Yp,
          width: Sp,
          stroke: "none",
          fill: ip[Ap],
          fillOpacity: cp,
          className: "recharts-cartesian-grid-bg"
        })
      }));
      return Op.createElement("g", {
        className: "recharts-cartesian-gridstripes-horizontal"
      }, Ap)
    }

    function qp(pp) {
      var ip = pp.vertical,
        cp = void 0 === ip || ip,
        op = pp.verticalFill,
        Ip = pp.fillOpacity,
        Sp = pp.x,
        xp = pp.y,
        Lp = pp.width,
        Yp = pp.height,
        Dp = pp.verticalPoints;
      if (!cp || !op || !op.length) return null;
      var Ap = Dp.map((function(pp) {
        return Math.round(pp + Sp - Sp)
      })).sort((function(pp, ip) {
        return pp - ip
      }));
      Sp !== Ap[0] && Ap.unshift(0);
      var Pp = Ap.map((function(pp, ip) {
        var cp = !Ap[ip + 1] ? Sp + Lp - pp : Ap[ip + 1] - pp;
        if (cp <= 0) return null;
        var Dp = ip % op.length;
        return Op.createElement("rect", {
          key: "react-".concat(ip),
          x: pp,
          y: xp,
          width: cp,
          height: Yp,
          stroke: "none",
          fill: op[Dp],
          fillOpacity: Ip,
          className: "recharts-cartesian-grid-bg"
        })
      }));
      return Op.createElement("g", {
        className: "recharts-cartesian-gridstripes-vertical"
      }, Pp)
    }
    var Mp = function(pp, ip) {
        var cp = pp.xAxis,
          Op = pp.width,
          op = pp.height,
          Ip = pp.offset;
        return (0, Yp.J)((0, Dp.c)(vp(vp(vp({}, Ap.e.defaultProps), cp), {}, {
          ticks: (0, Yp.Z)(cp, !0),
          viewBox: {
            x: 0,
            y: 0,
            width: Op,
            height: op
          }
        })), Ip.left, Ip.left + Ip.width, ip)
      },
      Cp = function(pp, ip) {
        var cp = pp.yAxis,
          Op = pp.width,
          op = pp.height,
          Ip = pp.offset;
        return (0, Yp.J)((0, Dp.c)(vp(vp(vp({}, Ap.e.defaultProps), cp), {}, {
          ticks: (0, Yp.Z)(cp, !0),
          viewBox: {
            x: 0,
            y: 0,
            width: Op,
            height: op
          }
        })), Ip.top, Ip.top + Ip.height, ip)
      },
      Ep = {
        horizontal: !0,
        vertical: !0,
        horizontalPoints: [],
        verticalPoints: [],
        stroke: "#ccc",
        fill: "none",
        verticalFill: [],
        horizontalFill: []
      };

    function Xp(pp) {
      var ip, cp, op, Lp, Yp, Dp, Ap = (0, Pp.l)(),
        Wp = (0, Pp.i)(),
        yp = (0, Pp.p)(),
        wp = vp(vp({}, pp), {}, {
          stroke: null !== (ip = pp.stroke) && void 0 !== ip ? ip : Ep.stroke,
          fill: null !== (cp = pp.fill) && void 0 !== cp ? cp : Ep.fill,
          horizontal: null !== (op = pp.horizontal) && void 0 !== op ? op : Ep.horizontal,
          horizontalFill: null !== (Lp = pp.horizontalFill) && void 0 !== Lp ? Lp : Ep.horizontalFill,
          vertical: null !== (Yp = pp.vertical) && void 0 !== Yp ? Yp : Ep.vertical,
          verticalFill: null !== (Dp = pp.verticalFill) && void 0 !== Dp ? Dp : Ep.verticalFill,
          x: (0, xp.D)(pp.x) ? pp.x : yp.left,
          y: (0, xp.D)(pp.y) ? pp.y : yp.top,
          width: (0, xp.D)(pp.width) ? pp.width : yp.width,
          height: (0, xp.D)(pp.height) ? pp.height : yp.height
        }),
        tp = wp.x,
        dp = wp.y,
        jp = wp.width,
        Xp = wp.height,
        lp = wp.syncWithTicks,
        Qp = wp.horizontalValues,
        Jp = wp.verticalValues,
        Bp = (0, Pp.e)(),
        Np = (0, Pp.B)();
      if (!(0, xp.D)(jp) || jp <= 0 || !(0, xp.D)(Xp) || Xp <= 0 || !(0, xp.D)(tp) || tp !== +tp || !(0, xp.D)(dp) || dp !== +dp) return null;
      var Tp = wp.verticalCoordinatesGenerator || Mp,
        fp = wp.horizontalCoordinatesGenerator || Cp,
        bp = wp.horizontalPoints,
        hp = wp.verticalPoints;
      if ((!bp || !bp.length) && Ip()(fp)) {
        var ap = Qp && Qp.length,
          np = fp({
            yAxis: Np ? vp(vp({}, Np), {}, {
              ticks: ap ? Qp : Np.ticks
            }) : void 0,
            width: Ap,
            height: Wp,
            offset: yp
          }, !!ap || lp);
        (0, Sp.d)(Array.isArray(np), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(Up(np), "]")), Array.isArray(np) && (bp = np)
      }
      if ((!hp || !hp.length) && Ip()(Tp)) {
        var Fp = Jp && Jp.length,
          gp = Tp({
            xAxis: Bp ? vp(vp({}, Bp), {}, {
              ticks: Fp ? Jp : Bp.ticks
            }) : void 0,
            width: Ap,
            height: Wp,
            offset: yp
          }, !!Fp || lp);
        (0, Sp.d)(Array.isArray(gp), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(Up(gp), "]")), Array.isArray(gp) && (hp = gp)
      }
      return Op.createElement("g", {
        className: "recharts-cartesian-grid"
      }, Op.createElement(ep, {
        fill: wp.fill,
        fillOpacity: wp.fillOpacity,
        x: wp.x,
        y: wp.y,
        width: wp.width,
        height: wp.height,
        ry: wp.ry
      }), Op.createElement(kp, Hp({}, wp, {
        offset: yp,
        horizontalPoints: bp,
        xAxis: Bp,
        yAxis: Np
      })), Op.createElement(mp, Hp({}, wp, {
        offset: yp,
        verticalPoints: hp,
        xAxis: Bp,
        yAxis: Np
      })), Op.createElement(Rp, Hp({}, wp, {
        horizontalPoints: bp
      })), Op.createElement(qp, Hp({}, wp, {
        verticalPoints: hp
      })))
    }
    Xp.displayName = "CartesianGrid"
  },
  6332: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => dp
    });
    var Op = cp(62),
      op = cp(6096),
      Ip = cp(6103),
      Sp = cp(5588),
      xp = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];

    function Lp(pp) {
      return Lp = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
        return typeof pp
      } : function(pp) {
        return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
      }, Lp(pp)
    }

    function Yp() {
      return Yp = Object.assign ? Object.assign.bind() : function(pp) {
        for (var ip = 1; ip < arguments.length; ip++) {
          var cp = arguments[ip];
          for (var Op in cp) Object.prototype.hasOwnProperty.call(cp, Op) && (pp[Op] = cp[Op])
        }
        return pp
      }, Yp.apply(this, arguments)
    }

    function Dp(pp, ip) {
      return function(pp) {
        if (Array.isArray(pp)) return pp
      }(pp) || function(pp, ip) {
        var cp = null == pp ? null : "undefined" != typeof Symbol && pp[Symbol.iterator] || pp["@@iterator"];
        if (null != cp) {
          var Op, op, Ip, Sp, xp = [],
            Lp = !0,
            Yp = !1;
          try {
            if (Ip = (cp = cp.call(pp)).next, 0 === ip) {
              if (Object(cp) !== cp) return;
              Lp = !1
            } else
              for (; !(Lp = (Op = Ip.call(cp)).done) && (xp.push(Op.value), xp.length !== ip); Lp = !0);
          } catch (pp) {
            Yp = !0, op = pp
          } finally {
            try {
              if (!Lp && null != cp.return && (Sp = cp.return(), Object(Sp) !== Sp)) return
            } finally {
              if (Yp) throw op
            }
          }
          return xp
        }
      }(pp, ip) || function(pp, ip) {
        if (!pp) return;
        if ("string" === typeof pp) return Ap(pp, ip);
        var cp = Object.prototype.toString.call(pp).slice(8, -1);
        "Object" === cp && pp.constructor && (cp = pp.constructor.name);
        if ("Map" === cp || "Set" === cp) return Array.from(pp);
        if ("Arguments" === cp || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cp)) return Ap(pp, ip)
      }(pp, ip) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Ap(pp, ip) {
      (null == ip || ip > pp.length) && (ip = pp.length);
      for (var cp = 0, Op = new Array(ip); cp < ip; cp++) Op[cp] = pp[cp];
      return Op
    }

    function Pp(pp, ip) {
      if (null == pp) return {};
      var cp, Op, op = function(pp, ip) {
        if (null == pp) return {};
        var cp = {};
        for (var Op in pp)
          if (Object.prototype.hasOwnProperty.call(pp, Op)) {
            if (ip.indexOf(Op) >= 0) continue;
            cp[Op] = pp[Op]
          } return cp
      }(pp, ip);
      if (Object.getOwnPropertySymbols) {
        var Ip = Object.getOwnPropertySymbols(pp);
        for (Op = 0; Op < Ip.length; Op++) cp = Ip[Op], ip.indexOf(cp) >= 0 || Object.prototype.propertyIsEnumerable.call(pp, cp) && (op[cp] = pp[cp])
      }
      return op
    }

    function Wp(pp, ip) {
      for (var cp = 0; cp < ip.length; cp++) {
        var Op = ip[cp];
        Op.enumerable = Op.enumerable || !1, Op.configurable = !0, "value" in Op && (Op.writable = !0), Object.defineProperty(pp, Hp(Op.key), Op)
      }
    }

    function yp(pp, ip, cp) {
      return ip = wp(ip),
        function(pp, ip) {
          if (ip && ("object" === Lp(ip) || "function" === typeof ip)) return ip;
          if (void 0 !== ip) throw new TypeError("Derived constructors may only return object or undefined");
          return function(pp) {
            if (void 0 === pp) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return pp
          }(pp)
        }(pp, Up() ? Reflect.construct(ip, cp || [], wp(pp).constructor) : ip.apply(pp, cp))
    }

    function Up() {
      try {
        var pp = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (pp) {}
      return (Up = function() {
        return !!pp
      })()
    }

    function wp(pp) {
      return wp = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(pp) {
        return pp.__proto__ || Object.getPrototypeOf(pp)
      }, wp(pp)
    }

    function vp(pp, ip) {
      return vp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(pp, ip) {
        return pp.__proto__ = ip, pp
      }, vp(pp, ip)
    }

    function tp(pp, ip, cp) {
      return (ip = Hp(ip)) in pp ? Object.defineProperty(pp, ip, {
        value: cp,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : pp[ip] = cp, pp
    }

    function Hp(pp) {
      var ip = function(pp, ip) {
        if ("object" != Lp(pp) || !pp) return pp;
        var cp = pp[Symbol.toPrimitive];
        if (void 0 !== cp) {
          var Op = cp.call(pp, ip || "default");
          if ("object" != Lp(Op)) return Op;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ip ? String : Number)(pp)
      }(pp, "string");
      return "symbol" == Lp(ip) ? ip : ip + ""
    }
    var dp = function(pp) {
      function ip() {
        return function(pp, ip) {
          if (!(pp instanceof ip)) throw new TypeError("Cannot call a class as a function")
        }(this, ip), yp(this, ip, arguments)
      }
      return function(pp, ip) {
        if ("function" !== typeof ip && null !== ip) throw new TypeError("Super expression must either be null or a function");
        pp.prototype = Object.create(ip && ip.prototype, {
          constructor: {
            value: pp,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(pp, "prototype", {
          writable: !1
        }), ip && vp(pp, ip)
      }(ip, pp), cp = ip, (Lp = [{
        key: "render",
        value: function() {
          var pp = this.props,
            ip = pp.offset,
            cp = pp.layout,
            Lp = pp.width,
            Ap = pp.dataKey,
            Wp = pp.data,
            yp = pp.dataPointFormatter,
            Up = pp.xAxis,
            wp = pp.yAxis,
            vp = Pp(pp, xp),
            tp = (0, Sp.d)(vp, !1);
          "x" === this.props.direction && "number" !== Up.type && (0, op.d)(!1);
          var Hp = Wp.map((function(pp) {
            var op = yp(pp, Ap),
              Sp = op.x,
              xp = op.y,
              Pp = op.value,
              Wp = op.errorVal;
            if (!Wp) return null;
            var vp, Hp, dp = [];
            if (Array.isArray(Wp)) {
              var ep = Dp(Wp, 2);
              vp = ep[0], Hp = ep[1]
            } else vp = Hp = Wp;
            if ("vertical" === cp) {
              var jp = Up.scale,
                kp = xp + ip,
                mp = kp + Lp,
                Rp = kp - Lp,
                qp = jp(Pp - vp),
                Mp = jp(Pp + Hp);
              dp.push({
                x1: Mp,
                y1: mp,
                x2: Mp,
                y2: Rp
              }), dp.push({
                x1: qp,
                y1: kp,
                x2: Mp,
                y2: kp
              }), dp.push({
                x1: qp,
                y1: mp,
                x2: qp,
                y2: Rp
              })
            } else if ("horizontal" === cp) {
              var Cp = wp.scale,
                Ep = Sp + ip,
                Xp = Ep - Lp,
                lp = Ep + Lp,
                Qp = Cp(Pp - vp),
                Jp = Cp(Pp + Hp);
              dp.push({
                x1: Xp,
                y1: Jp,
                x2: lp,
                y2: Jp
              }), dp.push({
                x1: Ep,
                y1: Qp,
                x2: Ep,
                y2: Jp
              }), dp.push({
                x1: Xp,
                y1: Qp,
                x2: lp,
                y2: Qp
              })
            }
            return Op.createElement(Ip.b, Yp({
              className: "recharts-errorBar",
              key: "bar-".concat(dp.map((function(pp) {
                return "".concat(pp.x1, "-").concat(pp.x2, "-").concat(pp.y1, "-").concat(pp.y2)
              })))
            }, tp), dp.map((function(pp) {
              return Op.createElement("line", Yp({}, pp, {
                key: "line-".concat(pp.x1, "-").concat(pp.x2, "-").concat(pp.y1, "-").concat(pp.y2)
              }))
            })))
          }));
          return Op.createElement(Ip.b, {
            className: "recharts-errorBars"
          }, Hp)
        }
      }]) && Wp(cp.prototype, Lp), Ap && Wp(cp, Ap), Object.defineProperty(cp, "prototype", {
        writable: !1
      }), cp;
      var cp, Lp, Ap
    }(Op.Component);
    tp(dp, "defaultProps", {
      stroke: "black",
      strokeWidth: 1.5,
      width: 5,
      offset: 0,
      layout: "horizontal"
    }), tp(dp, "displayName", "ErrorBar")
  },
  6504: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => fp
    });
    var Op = cp(62),
      op = cp(6256),
      Ip = cp(5405),
      Sp = cp.n(Ip),
      xp = cp(5575),
      Lp = cp.n(xp),
      Yp = cp(6322),
      Dp = cp.n(Yp),
      Ap = cp(5203),
      Pp = cp(6493),
      Wp = cp(6238),
      yp = cp(6103),
      Up = cp(6414),
      wp = cp(6332),
      vp = cp(5299),
      tp = cp(5588),
      Hp = cp(6115),
      dp = cp(6266),
      ep = ["type", "layout", "connectNulls", "ref"],
      jp = ["key"];

    function kp(pp) {
      return kp = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
        return typeof pp
      } : function(pp) {
        return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
      }, kp(pp)
    }

    function mp(pp, ip) {
      if (null == pp) return {};
      var cp, Op, op = function(pp, ip) {
        if (null == pp) return {};
        var cp = {};
        for (var Op in pp)
          if (Object.prototype.hasOwnProperty.call(pp, Op)) {
            if (ip.indexOf(Op) >= 0) continue;
            cp[Op] = pp[Op]
          } return cp
      }(pp, ip);
      if (Object.getOwnPropertySymbols) {
        var Ip = Object.getOwnPropertySymbols(pp);
        for (Op = 0; Op < Ip.length; Op++) cp = Ip[Op], ip.indexOf(cp) >= 0 || Object.prototype.propertyIsEnumerable.call(pp, cp) && (op[cp] = pp[cp])
      }
      return op
    }

    function Rp() {
      return Rp = Object.assign ? Object.assign.bind() : function(pp) {
        for (var ip = 1; ip < arguments.length; ip++) {
          var cp = arguments[ip];
          for (var Op in cp) Object.prototype.hasOwnProperty.call(cp, Op) && (pp[Op] = cp[Op])
        }
        return pp
      }, Rp.apply(this, arguments)
    }

    function qp(pp, ip) {
      var cp = Object.keys(pp);
      if (Object.getOwnPropertySymbols) {
        var Op = Object.getOwnPropertySymbols(pp);
        ip && (Op = Op.filter((function(ip) {
          return Object.getOwnPropertyDescriptor(pp, ip).enumerable
        }))), cp.push.apply(cp, Op)
      }
      return cp
    }

    function Mp(pp) {
      for (var ip = 1; ip < arguments.length; ip++) {
        var cp = null != arguments[ip] ? arguments[ip] : {};
        ip % 2 ? qp(Object(cp), !0).forEach((function(ip) {
          Np(pp, ip, cp[ip])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : qp(Object(cp)).forEach((function(ip) {
          Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
        }))
      }
      return pp
    }

    function Cp(pp) {
      return function(pp) {
        if (Array.isArray(pp)) return Ep(pp)
      }(pp) || function(pp) {
        if ("undefined" !== typeof Symbol && null != pp[Symbol.iterator] || null != pp["@@iterator"]) return Array.from(pp)
      }(pp) || function(pp, ip) {
        if (!pp) return;
        if ("string" === typeof pp) return Ep(pp, ip);
        var cp = Object.prototype.toString.call(pp).slice(8, -1);
        "Object" === cp && pp.constructor && (cp = pp.constructor.name);
        if ("Map" === cp || "Set" === cp) return Array.from(pp);
        if ("Arguments" === cp || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cp)) return Ep(pp, ip)
      }(pp) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Ep(pp, ip) {
      (null == ip || ip > pp.length) && (ip = pp.length);
      for (var cp = 0, Op = new Array(ip); cp < ip; cp++) Op[cp] = pp[cp];
      return Op
    }

    function Xp(pp, ip) {
      for (var cp = 0; cp < ip.length; cp++) {
        var Op = ip[cp];
        Op.enumerable = Op.enumerable || !1, Op.configurable = !0, "value" in Op && (Op.writable = !0), Object.defineProperty(pp, Tp(Op.key), Op)
      }
    }

    function lp(pp, ip, cp) {
      return ip = Jp(ip),
        function(pp, ip) {
          if (ip && ("object" === kp(ip) || "function" === typeof ip)) return ip;
          if (void 0 !== ip) throw new TypeError("Derived constructors may only return object or undefined");
          return function(pp) {
            if (void 0 === pp) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return pp
          }(pp)
        }(pp, Qp() ? Reflect.construct(ip, cp || [], Jp(pp).constructor) : ip.apply(pp, cp))
    }

    function Qp() {
      try {
        var pp = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (pp) {}
      return (Qp = function() {
        return !!pp
      })()
    }

    function Jp(pp) {
      return Jp = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(pp) {
        return pp.__proto__ || Object.getPrototypeOf(pp)
      }, Jp(pp)
    }

    function Bp(pp, ip) {
      return Bp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(pp, ip) {
        return pp.__proto__ = ip, pp
      }, Bp(pp, ip)
    }

    function Np(pp, ip, cp) {
      return (ip = Tp(ip)) in pp ? Object.defineProperty(pp, ip, {
        value: cp,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : pp[ip] = cp, pp
    }

    function Tp(pp) {
      var ip = function(pp, ip) {
        if ("object" != kp(pp) || !pp) return pp;
        var cp = pp[Symbol.toPrimitive];
        if (void 0 !== cp) {
          var Op = cp.call(pp, ip || "default");
          if ("object" != kp(Op)) return Op;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ip ? String : Number)(pp)
      }(pp, "string");
      return "symbol" == kp(ip) ? ip : ip + ""
    }
    var fp = function(pp) {
      function ip() {
        var pp;
        ! function(pp, ip) {
          if (!(pp instanceof ip)) throw new TypeError("Cannot call a class as a function")
        }(this, ip);
        for (var cp = arguments.length, Op = new Array(cp), op = 0; op < cp; op++) Op[op] = arguments[op];
        return Np(pp = lp(this, ip, [].concat(Op)), "state", {
          isAnimationFinished: !0,
          totalLength: 0
        }), Np(pp, "generateSimpleStrokeDasharray", (function(pp, ip) {
          return "".concat(ip, "px ").concat(pp - ip, "px")
        })), Np(pp, "getStrokeDasharray", (function(cp, Op, op) {
          var Ip = op.reduce((function(pp, ip) {
            return pp + ip
          }));
          if (!Ip) return pp.generateSimpleStrokeDasharray(Op, cp);
          for (var Sp = Math.floor(cp / Ip), xp = cp % Ip, Lp = Op - cp, Yp = [], Dp = 0, Ap = 0; Dp < op.length; Ap += op[Dp], ++Dp)
            if (Ap + op[Dp] > xp) {
              Yp = [].concat(Cp(op.slice(0, Dp)), [xp - Ap]);
              break
            } var Pp = Yp.length % 2 === 0 ? [0, Lp] : [Lp];
          return [].concat(Cp(ip.repeat(op, Sp)), Cp(Yp), Pp).map((function(pp) {
            return "".concat(pp, "px")
          })).join(", ")
        })), Np(pp, "id", (0, vp.J)("recharts-line-")), Np(pp, "pathRef", (function(ip) {
          pp.mainCurve = ip
        })), Np(pp, "handleAnimationEnd", (function() {
          pp.setState({
            isAnimationFinished: !0
          }), pp.props.onAnimationEnd && pp.props.onAnimationEnd()
        })), Np(pp, "handleAnimationStart", (function() {
          pp.setState({
            isAnimationFinished: !1
          }), pp.props.onAnimationStart && pp.props.onAnimationStart()
        })), pp
      }
      return function(pp, ip) {
        if ("function" !== typeof ip && null !== ip) throw new TypeError("Super expression must either be null or a function");
        pp.prototype = Object.create(ip && ip.prototype, {
          constructor: {
            value: pp,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(pp, "prototype", {
          writable: !1
        }), ip && Bp(pp, ip)
      }(ip, pp), cp = ip, Ip = [{
        key: "componentDidMount",
        value: function() {
          if (this.props.isAnimationActive) {
            var pp = this.getTotalLength();
            this.setState({
              totalLength: pp
            })
          }
        }
      }, {
        key: "componentDidUpdate",
        value: function() {
          if (this.props.isAnimationActive) {
            var pp = this.getTotalLength();
            pp !== this.state.totalLength && this.setState({
              totalLength: pp
            })
          }
        }
      }, {
        key: "getTotalLength",
        value: function() {
          var pp = this.mainCurve;
          try {
            return pp && pp.getTotalLength && pp.getTotalLength() || 0
          } catch (ip) {
            return 0
          }
        }
      }, {
        key: "renderErrorBar",
        value: function(pp, ip) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var cp = this.props,
            op = cp.points,
            Ip = cp.xAxis,
            Sp = cp.yAxis,
            xp = cp.layout,
            Lp = cp.children,
            Yp = (0, tp.h)(Lp, wp.b);
          if (!Yp) return null;
          var Dp = function(pp, ip) {
              return {
                x: pp.x,
                y: pp.y,
                value: pp.value,
                errorVal: (0, dp.fb)(pp.payload, ip)
              }
            },
            Ap = {
              clipPath: pp ? "url(#clipPath-".concat(ip, ")") : null
            };
          return Op.createElement(yp.b, Ap, Yp.map((function(pp) {
            return Op.cloneElement(pp, {
              key: "bar-".concat(pp.props.dataKey),
              data: op,
              xAxis: Ip,
              yAxis: Sp,
              layout: xp,
              dataPointFormatter: Dp
            })
          })))
        }
      }, {
        key: "renderDots",
        value: function(pp, cp, op) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var Ip = this.props,
            Sp = Ip.dot,
            xp = Ip.points,
            Lp = Ip.dataKey,
            Yp = (0, tp.d)(this.props, !1),
            Dp = (0, tp.d)(Sp, !0),
            Ap = xp.map((function(pp, cp) {
              var Op = Mp(Mp(Mp({
                key: "dot-".concat(cp),
                r: 3
              }, Yp), Dp), {}, {
                index: cp,
                cx: pp.x,
                cy: pp.y,
                value: pp.value,
                dataKey: Lp,
                payload: pp.payload,
                points: xp
              });
              return ip.renderDotItem(Sp, Op)
            })),
            Pp = {
              clipPath: pp ? "url(#clipPath-".concat(cp ? "" : "dots-").concat(op, ")") : null
            };
          return Op.createElement(yp.b, Rp({
            className: "recharts-line-dots",
            key: "dots"
          }, Pp), Ap)
        }
      }, {
        key: "renderCurveStatically",
        value: function(pp, ip, cp, op) {
          var Ip = this.props,
            Sp = Ip.type,
            xp = Ip.layout,
            Lp = Ip.connectNulls,
            Yp = (Ip.ref, mp(Ip, ep)),
            Dp = Mp(Mp(Mp({}, (0, tp.d)(Yp, !0)), {}, {
              fill: "none",
              className: "recharts-line-curve",
              clipPath: ip ? "url(#clipPath-".concat(cp, ")") : null,
              points: pp
            }, op), {}, {
              type: Sp,
              layout: xp,
              connectNulls: Lp
            });
          return Op.createElement(Pp.d, Rp({}, Dp, {
            pathRef: this.pathRef
          }))
        }
      }, {
        key: "renderCurveWithAnimation",
        value: function(pp, ip) {
          var cp = this,
            Ip = this.props,
            Sp = Ip.points,
            xp = Ip.strokeDasharray,
            Lp = Ip.isAnimationActive,
            Yp = Ip.animationBegin,
            Dp = Ip.animationDuration,
            Ap = Ip.animationEasing,
            Pp = Ip.animationId,
            Wp = Ip.animateNewValues,
            yp = Ip.width,
            Up = Ip.height,
            wp = this.state,
            tp = wp.prevPoints,
            Hp = wp.totalLength;
          return Op.createElement(op.c, {
            mW: Yp,
            duration: Dp,
            isActive: Lp,
            easing: Ap,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "line-".concat(Pp),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(Op) {
            var op = Op.t;
            if (tp) {
              var Ip = tp.length / Sp.length,
                Lp = Sp.map((function(pp, ip) {
                  var cp = Math.floor(ip * Ip);
                  if (tp[cp]) {
                    var Op = tp[cp],
                      Sp = (0, vp.x)(Op.x, pp.x),
                      xp = (0, vp.x)(Op.y, pp.y);
                    return Mp(Mp({}, pp), {}, {
                      x: Sp(op),
                      y: xp(op)
                    })
                  }
                  if (Wp) {
                    var Lp = (0, vp.x)(2 * yp, pp.x),
                      Yp = (0, vp.x)(Up / 2, pp.y);
                    return Mp(Mp({}, pp), {}, {
                      x: Lp(op),
                      y: Yp(op)
                    })
                  }
                  return Mp(Mp({}, pp), {}, {
                    x: pp.x,
                    y: pp.y
                  })
                }));
              return cp.renderCurveStatically(Lp, pp, ip)
            }
            var Yp, Dp = (0, vp.x)(0, Hp)(op);
            if (xp) {
              var Ap = "".concat(xp).split(/[,\s]+/gim).map((function(pp) {
                return parseFloat(pp)
              }));
              Yp = cp.getStrokeDasharray(Dp, Hp, Ap)
            } else Yp = cp.generateSimpleStrokeDasharray(Hp, Dp);
            return cp.renderCurveStatically(Sp, pp, ip, {
              strokeDasharray: Yp
            })
          }))
        }
      }, {
        key: "renderCurve",
        value: function(pp, ip) {
          var cp = this.props,
            Op = cp.points,
            op = cp.isAnimationActive,
            Ip = this.state,
            Sp = Ip.prevPoints,
            xp = Ip.totalLength;
          return op && Op && Op.length && (!Sp && xp > 0 || !Dp()(Sp, Op)) ? this.renderCurveWithAnimation(pp, ip) : this.renderCurveStatically(Op, pp, ip)
        }
      }, {
        key: "render",
        value: function() {
          var pp, ip = this.props,
            cp = ip.hide,
            op = ip.dot,
            Ip = ip.points,
            Sp = ip.className,
            xp = ip.xAxis,
            Yp = ip.yAxis,
            Dp = ip.top,
            Pp = ip.left,
            Wp = ip.width,
            wp = ip.height,
            vp = ip.isAnimationActive,
            Hp = ip.id;
          if (cp || !Ip || !Ip.length) return null;
          var dp = this.state.isAnimationFinished,
            ep = 1 === Ip.length,
            jp = (0, Ap.d)("recharts-line", Sp),
            kp = xp && xp.allowDataOverflow,
            mp = Yp && Yp.allowDataOverflow,
            Rp = kp || mp,
            qp = Lp()(Hp) ? this.id : Hp,
            Mp = null !== (pp = (0, tp.d)(op, !1)) && void 0 !== pp ? pp : {
              r: 3,
              strokeWidth: 2
            },
            Cp = Mp.r,
            Ep = void 0 === Cp ? 3 : Cp,
            Xp = Mp.strokeWidth,
            lp = void 0 === Xp ? 2 : Xp,
            Qp = ((0, tp.n)(op) ? op : {}).clipDot,
            Jp = void 0 === Qp || Qp,
            Bp = 2 * Ep + lp;
          return Op.createElement(yp.b, {
            className: jp
          }, kp || mp ? Op.createElement("defs", null, Op.createElement("clipPath", {
            id: "clipPath-".concat(qp)
          }, Op.createElement("rect", {
            x: kp ? Pp : Pp - Wp / 2,
            y: mp ? Dp : Dp - wp / 2,
            width: kp ? Wp : 2 * Wp,
            height: mp ? wp : 2 * wp
          })), !Jp && Op.createElement("clipPath", {
            id: "clipPath-dots-".concat(qp)
          }, Op.createElement("rect", {
            x: Pp - Bp / 2,
            y: Dp - Bp / 2,
            width: Wp + Bp,
            height: wp + Bp
          }))) : null, !ep && this.renderCurve(Rp, qp), this.renderErrorBar(Rp, qp), (ep || op) && this.renderDots(Rp, Jp, qp), (!vp || dp) && Up.e.renderCallByParent(this.props, Ip))
        }
      }], xp = [{
        key: "getDerivedStateFromProps",
        value: function(pp, ip) {
          return pp.animationId !== ip.prevAnimationId ? {
            prevAnimationId: pp.animationId,
            curPoints: pp.points,
            prevPoints: ip.curPoints
          } : pp.points !== ip.curPoints ? {
            curPoints: pp.points
          } : null
        }
      }, {
        key: "repeat",
        value: function(pp, ip) {
          for (var cp = pp.length % 2 !== 0 ? [].concat(Cp(pp), [0]) : pp, Op = [], op = 0; op < ip; ++op) Op = [].concat(Cp(Op), Cp(cp));
          return Op
        }
      }, {
        key: "renderDotItem",
        value: function(pp, ip) {
          var cp;
          if (Op.isValidElement(pp)) cp = Op.cloneElement(pp, ip);
          else if (Sp()(pp)) cp = pp(ip);
          else {
            var op = ip.key,
              Ip = mp(ip, jp),
              xp = (0, Ap.d)("recharts-line-dot", "boolean" !== typeof pp ? pp.className : "");
            cp = Op.createElement(Wp.c, Rp({
              key: op
            }, Ip, {
              className: xp
            }))
          }
          return cp
        }
      }], Ip && Xp(cp.prototype, Ip), xp && Xp(cp, xp), Object.defineProperty(cp, "prototype", {
        writable: !1
      }), cp;
      var cp, Ip, xp
    }(Op.PureComponent);
    Np(fp, "displayName", "Line"), Np(fp, "defaultProps", {
      xAxisId: 0,
      yAxisId: 0,
      connectNulls: !1,
      activeDot: !0,
      dot: !0,
      legendType: "line",
      stroke: "#3182bd",
      strokeWidth: 1,
      fill: "#fff",
      points: [],
      isAnimationActive: !Hp.e.isSsr,
      animateNewValues: !0,
      animationBegin: 0,
      animationDuration: 1500,
      animationEasing: "ease",
      hide: !1,
      label: !1
    }), Np(fp, "getComposedData", (function(pp) {
      var ip = pp.props,
        cp = pp.xAxis,
        Op = pp.yAxis,
        op = pp.xAxisTicks,
        Ip = pp.yAxisTicks,
        Sp = pp.dataKey,
        xp = pp.bandSize,
        Yp = pp.displayedData,
        Dp = pp.offset,
        Ap = ip.layout;
      return Mp({
        points: Yp.map((function(pp, ip) {
          var Yp = (0, dp.fb)(pp, Sp);
          return "horizontal" === Ap ? {
            x: (0, dp.F)({
              axis: cp,
              ticks: op,
              bandSize: xp,
              entry: pp,
              index: ip
            }),
            y: Lp()(Yp) ? null : Op.scale(Yp),
            value: Yp,
            payload: pp
          } : {
            x: Lp()(Yp) ? null : cp.scale(Yp),
            y: (0, dp.F)({
              axis: Op,
              ticks: Ip,
              bandSize: xp,
              entry: pp,
              index: ip
            }),
            value: Yp,
            payload: pp
          }
        })),
        layout: Ap
      }, Dp)
    }))
  },
  6453: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => lp
    });
    var Op = cp(62),
      op = cp(5405),
      Ip = cp.n(op),
      Sp = cp(6458),
      xp = cp.n(Sp),
      Lp = cp(5203),
      Yp = cp(6103),
      Dp = cp(6352),
      Ap = cp(6360),
      Pp = cp(5299),
      Wp = cp(6368),
      yp = cp(5582),
      Up = cp(5588),
      wp = cp(6470);

    function vp(pp) {
      return vp = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
        return typeof pp
      } : function(pp) {
        return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
      }, vp(pp)
    }

    function tp(pp, ip) {
      for (var cp = 0; cp < ip.length; cp++) {
        var Op = ip[cp];
        Op.enumerable = Op.enumerable || !1, Op.configurable = !0, "value" in Op && (Op.writable = !0), Object.defineProperty(pp, qp(Op.key), Op)
      }
    }

    function Hp(pp, ip, cp) {
      return ip = ep(ip),
        function(pp, ip) {
          if (ip && ("object" === vp(ip) || "function" === typeof ip)) return ip;
          if (void 0 !== ip) throw new TypeError("Derived constructors may only return object or undefined");
          return function(pp) {
            if (void 0 === pp) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return pp
          }(pp)
        }(pp, dp() ? Reflect.construct(ip, cp || [], ep(pp).constructor) : ip.apply(pp, cp))
    }

    function dp() {
      try {
        var pp = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (pp) {}
      return (dp = function() {
        return !!pp
      })()
    }

    function ep(pp) {
      return ep = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(pp) {
        return pp.__proto__ || Object.getPrototypeOf(pp)
      }, ep(pp)
    }

    function jp(pp, ip) {
      return jp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(pp, ip) {
        return pp.__proto__ = ip, pp
      }, jp(pp, ip)
    }

    function kp(pp, ip) {
      var cp = Object.keys(pp);
      if (Object.getOwnPropertySymbols) {
        var Op = Object.getOwnPropertySymbols(pp);
        ip && (Op = Op.filter((function(ip) {
          return Object.getOwnPropertyDescriptor(pp, ip).enumerable
        }))), cp.push.apply(cp, Op)
      }
      return cp
    }

    function mp(pp) {
      for (var ip = 1; ip < arguments.length; ip++) {
        var cp = null != arguments[ip] ? arguments[ip] : {};
        ip % 2 ? kp(Object(cp), !0).forEach((function(ip) {
          Rp(pp, ip, cp[ip])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : kp(Object(cp)).forEach((function(ip) {
          Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
        }))
      }
      return pp
    }

    function Rp(pp, ip, cp) {
      return (ip = qp(ip)) in pp ? Object.defineProperty(pp, ip, {
        value: cp,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : pp[ip] = cp, pp
    }

    function qp(pp) {
      var ip = function(pp, ip) {
        if ("object" != vp(pp) || !pp) return pp;
        var cp = pp[Symbol.toPrimitive];
        if (void 0 !== cp) {
          var Op = cp.call(pp, ip || "default");
          if ("object" != vp(Op)) return Op;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ip ? String : Number)(pp)
      }(pp, "string");
      return "symbol" == vp(ip) ? ip : ip + ""
    }

    function Mp(pp, ip) {
      return function(pp) {
        if (Array.isArray(pp)) return pp
      }(pp) || function(pp, ip) {
        var cp = null == pp ? null : "undefined" != typeof Symbol && pp[Symbol.iterator] || pp["@@iterator"];
        if (null != cp) {
          var Op, op, Ip, Sp, xp = [],
            Lp = !0,
            Yp = !1;
          try {
            if (Ip = (cp = cp.call(pp)).next, 0 === ip) {
              if (Object(cp) !== cp) return;
              Lp = !1
            } else
              for (; !(Lp = (Op = Ip.call(cp)).done) && (xp.push(Op.value), xp.length !== ip); Lp = !0);
          } catch (pp) {
            Yp = !0, op = pp
          } finally {
            try {
              if (!Lp && null != cp.return && (Sp = cp.return(), Object(Sp) !== Sp)) return
            } finally {
              if (Yp) throw op
            }
          }
          return xp
        }
      }(pp, ip) || function(pp, ip) {
        if (!pp) return;
        if ("string" === typeof pp) return Cp(pp, ip);
        var cp = Object.prototype.toString.call(pp).slice(8, -1);
        "Object" === cp && pp.constructor && (cp = pp.constructor.name);
        if ("Map" === cp || "Set" === cp) return Array.from(pp);
        if ("Arguments" === cp || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cp)) return Cp(pp, ip)
      }(pp, ip) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Cp(pp, ip) {
      (null == ip || ip > pp.length) && (ip = pp.length);
      for (var cp = 0, Op = new Array(ip); cp < ip; cp++) Op[cp] = pp[cp];
      return Op
    }

    function Ep() {
      return Ep = Object.assign ? Object.assign.bind() : function(pp) {
        for (var ip = 1; ip < arguments.length; ip++) {
          var cp = arguments[ip];
          for (var Op in cp) Object.prototype.hasOwnProperty.call(cp, Op) && (pp[Op] = cp[Op])
        }
        return pp
      }, Ep.apply(this, arguments)
    }

    function Xp(pp) {
      var ip = pp.x,
        cp = pp.y,
        op = pp.segment,
        Sp = pp.xAxisId,
        vp = pp.yAxisId,
        tp = pp.shape,
        Hp = pp.className,
        dp = pp.alwaysShow,
        ep = (0, wp.m)(),
        jp = (0, wp.x)(Sp),
        kp = (0, wp.y)(vp),
        Rp = (0, wp.t)();
      if (!ep || !Rp) return null;
      (0, yp.d)(void 0 === dp, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
      var qp = function(pp, ip, cp, Op, op, Ip, Sp, Lp, Yp) {
        var Dp = op.x,
          Pp = op.y,
          Wp = op.width,
          yp = op.height;
        if (cp) {
          var Up = Yp.y,
            wp = pp.y.apply(Up, {
              position: Ip
            });
          if ((0, Ap.d)(Yp, "discard") && !pp.y.isInRange(wp)) return null;
          var vp = [{
            x: Dp + Wp,
            y: wp
          }, {
            x: Dp,
            y: wp
          }];
          return "left" === Lp ? vp.reverse() : vp
        }
        if (ip) {
          var tp = Yp.x,
            Hp = pp.x.apply(tp, {
              position: Ip
            });
          if ((0, Ap.d)(Yp, "discard") && !pp.x.isInRange(Hp)) return null;
          var dp = [{
            x: Hp,
            y: Pp + yp
          }, {
            x: Hp,
            y: Pp
          }];
          return "top" === Sp ? dp.reverse() : dp
        }
        if (Op) {
          var ep = Yp.segment.map((function(ip) {
            return pp.apply(ip, {
              position: Ip
            })
          }));
          return (0, Ap.d)(Yp, "discard") && xp()(ep, (function(ip) {
            return !pp.isInRange(ip)
          })) ? null : ep
        }
        return null
      }((0, Wp.c)({
        x: jp.scale,
        y: kp.scale
      }), (0, Pp.B)(ip), (0, Pp.B)(cp), op && 2 === op.length, Rp, pp.position, jp.orientation, kp.orientation, pp);
      if (!qp) return null;
      var Cp = Mp(qp, 2),
        Xp = Cp[0],
        lp = Xp.x,
        Qp = Xp.y,
        Jp = Cp[1],
        Bp = Jp.x,
        Np = Jp.y,
        Tp = mp(mp({
          clipPath: (0, Ap.d)(pp, "hidden") ? "url(#".concat(ep, ")") : void 0
        }, (0, Up.d)(pp, !0)), {}, {
          x1: lp,
          y1: Qp,
          x2: Bp,
          y2: Np
        });
      return Op.createElement(Yp.b, {
        className: (0, Lp.d)("recharts-reference-line", Hp)
      }, function(pp, ip) {
        return Op.isValidElement(pp) ? Op.cloneElement(pp, ip) : Ip()(pp) ? pp(ip) : Op.createElement("line", Ep({}, ip, {
          className: "recharts-reference-line-line"
        }))
      }(tp, Tp), Dp.e.renderCallByParent(pp, (0, Wp.i)({
        x1: lp,
        y1: Qp,
        x2: Bp,
        y2: Np
      })))
    }
    var lp = function(pp) {
      function ip() {
        return function(pp, ip) {
          if (!(pp instanceof ip)) throw new TypeError("Cannot call a class as a function")
        }(this, ip), Hp(this, ip, arguments)
      }
      return function(pp, ip) {
        if ("function" !== typeof ip && null !== ip) throw new TypeError("Super expression must either be null or a function");
        pp.prototype = Object.create(ip && ip.prototype, {
          constructor: {
            value: pp,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(pp, "prototype", {
          writable: !1
        }), ip && jp(pp, ip)
      }(ip, pp), cp = ip, (op = [{
        key: "render",
        value: function() {
          return Op.createElement(Xp, this.props)
        }
      }]) && tp(cp.prototype, op), Ip && tp(cp, Ip), Object.defineProperty(cp, "prototype", {
        writable: !1
      }), cp;
      var cp, op, Ip
    }(Op.Component);
    Rp(lp, "displayName", "ReferenceLine"), Rp(lp, "defaultProps", {
      isFront: !1,
      ifOverflow: "discard",
      xAxisId: 0,
      yAxisId: 0,
      fill: "none",
      stroke: "#ccc",
      fillOpacity: 1,
      strokeWidth: 1,
      position: "middle"
    })
  },
  6512: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => tp
    });
    var Op = cp(62),
      op = cp(5203),
      Ip = cp(6470),
      Sp = cp(6517),
      xp = cp(6266);

    function Lp(pp) {
      return Lp = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
        return typeof pp
      } : function(pp) {
        return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
      }, Lp(pp)
    }

    function Yp(pp, ip) {
      for (var cp = 0; cp < ip.length; cp++) {
        var Op = ip[cp];
        Op.enumerable = Op.enumerable || !1, Op.configurable = !0, "value" in Op && (Op.writable = !0), Object.defineProperty(pp, Up(Op.key), Op)
      }
    }

    function Dp(pp, ip, cp) {
      return ip = Pp(ip),
        function(pp, ip) {
          if (ip && ("object" === Lp(ip) || "function" === typeof ip)) return ip;
          if (void 0 !== ip) throw new TypeError("Derived constructors may only return object or undefined");
          return function(pp) {
            if (void 0 === pp) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return pp
          }(pp)
        }(pp, Ap() ? Reflect.construct(ip, cp || [], Pp(pp).constructor) : ip.apply(pp, cp))
    }

    function Ap() {
      try {
        var pp = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (pp) {}
      return (Ap = function() {
        return !!pp
      })()
    }

    function Pp(pp) {
      return Pp = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(pp) {
        return pp.__proto__ || Object.getPrototypeOf(pp)
      }, Pp(pp)
    }

    function Wp(pp, ip) {
      return Wp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(pp, ip) {
        return pp.__proto__ = ip, pp
      }, Wp(pp, ip)
    }

    function yp(pp, ip, cp) {
      return (ip = Up(ip)) in pp ? Object.defineProperty(pp, ip, {
        value: cp,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : pp[ip] = cp, pp
    }

    function Up(pp) {
      var ip = function(pp, ip) {
        if ("object" != Lp(pp) || !pp) return pp;
        var cp = pp[Symbol.toPrimitive];
        if (void 0 !== cp) {
          var Op = cp.call(pp, ip || "default");
          if ("object" != Lp(Op)) return Op;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ip ? String : Number)(pp)
      }(pp, "string");
      return "symbol" == Lp(ip) ? ip : ip + ""
    }

    function wp() {
      return wp = Object.assign ? Object.assign.bind() : function(pp) {
        for (var ip = 1; ip < arguments.length; ip++) {
          var cp = arguments[ip];
          for (var Op in cp) Object.prototype.hasOwnProperty.call(cp, Op) && (pp[Op] = cp[Op])
        }
        return pp
      }, wp.apply(this, arguments)
    }

    function vp(pp) {
      var ip = pp.xAxisId,
        cp = (0, Ip.l)(),
        Lp = (0, Ip.i)(),
        Yp = (0, Ip.x)(ip);
      return null == Yp ? null : Op.createElement(Sp.e, wp({}, Yp, {
        className: (0, op.d)("recharts-".concat(Yp.axisType, " ").concat(Yp.axisType), Yp.className),
        viewBox: {
          x: 0,
          y: 0,
          width: cp,
          height: Lp
        },
        ticksGenerator: function(pp) {
          return (0, xp.Z)(pp, !0)
        }
      }))
    }
    var tp = function(pp) {
      function ip() {
        return function(pp, ip) {
          if (!(pp instanceof ip)) throw new TypeError("Cannot call a class as a function")
        }(this, ip), Dp(this, ip, arguments)
      }
      return function(pp, ip) {
        if ("function" !== typeof ip && null !== ip) throw new TypeError("Super expression must either be null or a function");
        pp.prototype = Object.create(ip && ip.prototype, {
          constructor: {
            value: pp,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(pp, "prototype", {
          writable: !1
        }), ip && Wp(pp, ip)
      }(ip, pp), cp = ip, (op = [{
        key: "render",
        value: function() {
          return Op.createElement(vp, this.props)
        }
      }]) && Yp(cp.prototype, op), Ip && Yp(cp, Ip), Object.defineProperty(cp, "prototype", {
        writable: !1
      }), cp;
      var cp, op, Ip
    }(Op.Component);
    yp(tp, "displayName", "XAxis"), yp(tp, "defaultProps", {
      allowDecimals: !0,
      hide: !1,
      orientation: "bottom",
      width: 0,
      height: 30,
      mirror: !1,
      xAxisId: 0,
      tickCount: 5,
      type: "category",
      padding: {
        left: 0,
        right: 0
      },
      allowDataOverflow: !1,
      scale: "auto",
      reversed: !1,
      allowDuplicatedCategory: !0
    })
  },
  6524: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => tp
    });
    var Op = cp(62),
      op = cp(5203),
      Ip = cp(6470),
      Sp = cp(6517),
      xp = cp(6266);

    function Lp(pp) {
      return Lp = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
        return typeof pp
      } : function(pp) {
        return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
      }, Lp(pp)
    }

    function Yp(pp, ip) {
      for (var cp = 0; cp < ip.length; cp++) {
        var Op = ip[cp];
        Op.enumerable = Op.enumerable || !1, Op.configurable = !0, "value" in Op && (Op.writable = !0), Object.defineProperty(pp, Up(Op.key), Op)
      }
    }

    function Dp(pp, ip, cp) {
      return ip = Pp(ip),
        function(pp, ip) {
          if (ip && ("object" === Lp(ip) || "function" === typeof ip)) return ip;
          if (void 0 !== ip) throw new TypeError("Derived constructors may only return object or undefined");
          return function(pp) {
            if (void 0 === pp) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return pp
          }(pp)
        }(pp, Ap() ? Reflect.construct(ip, cp || [], Pp(pp).constructor) : ip.apply(pp, cp))
    }

    function Ap() {
      try {
        var pp = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (pp) {}
      return (Ap = function() {
        return !!pp
      })()
    }

    function Pp(pp) {
      return Pp = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(pp) {
        return pp.__proto__ || Object.getPrototypeOf(pp)
      }, Pp(pp)
    }

    function Wp(pp, ip) {
      return Wp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(pp, ip) {
        return pp.__proto__ = ip, pp
      }, Wp(pp, ip)
    }

    function yp(pp, ip, cp) {
      return (ip = Up(ip)) in pp ? Object.defineProperty(pp, ip, {
        value: cp,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : pp[ip] = cp, pp
    }

    function Up(pp) {
      var ip = function(pp, ip) {
        if ("object" != Lp(pp) || !pp) return pp;
        var cp = pp[Symbol.toPrimitive];
        if (void 0 !== cp) {
          var Op = cp.call(pp, ip || "default");
          if ("object" != Lp(Op)) return Op;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ip ? String : Number)(pp)
      }(pp, "string");
      return "symbol" == Lp(ip) ? ip : ip + ""
    }

    function wp() {
      return wp = Object.assign ? Object.assign.bind() : function(pp) {
        for (var ip = 1; ip < arguments.length; ip++) {
          var cp = arguments[ip];
          for (var Op in cp) Object.prototype.hasOwnProperty.call(cp, Op) && (pp[Op] = cp[Op])
        }
        return pp
      }, wp.apply(this, arguments)
    }
    var vp = function(pp) {
        var ip = pp.yAxisId,
          cp = (0, Ip.l)(),
          Lp = (0, Ip.i)(),
          Yp = (0, Ip.y)(ip);
        return null == Yp ? null : Op.createElement(Sp.e, wp({}, Yp, {
          className: (0, op.d)("recharts-".concat(Yp.axisType, " ").concat(Yp.axisType), Yp.className),
          viewBox: {
            x: 0,
            y: 0,
            width: cp,
            height: Lp
          },
          ticksGenerator: function(pp) {
            return (0, xp.Z)(pp, !0)
          }
        }))
      },
      tp = function(pp) {
        function ip() {
          return function(pp, ip) {
            if (!(pp instanceof ip)) throw new TypeError("Cannot call a class as a function")
          }(this, ip), Dp(this, ip, arguments)
        }
        return function(pp, ip) {
          if ("function" !== typeof ip && null !== ip) throw new TypeError("Super expression must either be null or a function");
          pp.prototype = Object.create(ip && ip.prototype, {
            constructor: {
              value: pp,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(pp, "prototype", {
            writable: !1
          }), ip && Wp(pp, ip)
        }(ip, pp), cp = ip, (op = [{
          key: "render",
          value: function() {
            return Op.createElement(vp, this.props)
          }
        }]) && Yp(cp.prototype, op), Ip && Yp(cp, Ip), Object.defineProperty(cp, "prototype", {
          writable: !1
        }), cp;
        var cp, op, Ip
      }(Op.Component);
    yp(tp, "displayName", "YAxis"), yp(tp, "defaultProps", {
      allowDuplicatedCategory: !0,
      allowDecimals: !0,
      hide: !1,
      orientation: "left",
      width: 60,
      height: 0,
      mirror: !1,
      yAxisId: 0,
      tickCount: 5,
      type: "number",
      padding: {
        top: 0,
        bottom: 0
      },
      allowDataOverflow: !1,
      scale: "auto",
      reversed: !1
    })
  },
  6520: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Up
    });
    var Op = cp(5405),
      op = cp.n(Op),
      Ip = cp(5299),
      Sp = cp(6264),
      xp = cp(6115),
      Lp = cp(6368);

    function Yp(pp, ip, cp) {
      if (ip < 1) return [];
      if (1 === ip && void 0 === cp) return pp;
      for (var Op = [], op = 0; op < pp.length; op += ip) {
        if (void 0 !== cp && !0 !== cp(pp[op])) return;
        Op.push(pp[op])
      }
      return Op
    }

    function Dp(pp, ip, cp, Op, op) {
      if (pp * ip < pp * Op || pp * ip > pp * op) return !1;
      var Ip = cp();
      return pp * (ip - pp * Ip / 2 - Op) >= 0 && pp * (ip + pp * Ip / 2 - op) <= 0
    }

    function Ap(pp) {
      return Ap = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
        return typeof pp
      } : function(pp) {
        return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
      }, Ap(pp)
    }

    function Pp(pp, ip) {
      var cp = Object.keys(pp);
      if (Object.getOwnPropertySymbols) {
        var Op = Object.getOwnPropertySymbols(pp);
        ip && (Op = Op.filter((function(ip) {
          return Object.getOwnPropertyDescriptor(pp, ip).enumerable
        }))), cp.push.apply(cp, Op)
      }
      return cp
    }

    function Wp(pp) {
      for (var ip = 1; ip < arguments.length; ip++) {
        var cp = null != arguments[ip] ? arguments[ip] : {};
        ip % 2 ? Pp(Object(cp), !0).forEach((function(ip) {
          yp(pp, ip, cp[ip])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : Pp(Object(cp)).forEach((function(ip) {
          Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
        }))
      }
      return pp
    }

    function yp(pp, ip, cp) {
      return (ip = function(pp) {
        var ip = function(pp, ip) {
          if ("object" != Ap(pp) || !pp) return pp;
          var cp = pp[Symbol.toPrimitive];
          if (void 0 !== cp) {
            var Op = cp.call(pp, ip || "default");
            if ("object" != Ap(Op)) return Op;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === ip ? String : Number)(pp)
        }(pp, "string");
        return "symbol" == Ap(ip) ? ip : ip + ""
      }(ip)) in pp ? Object.defineProperty(pp, ip, {
        value: cp,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : pp[ip] = cp, pp
    }

    function Up(pp, ip, cp) {
      var Op = pp.LP,
        Ap = pp.ticks,
        Pp = pp.viewBox,
        yp = pp.minTickGap,
        Up = pp.orientation,
        wp = pp.interval,
        vp = pp.tickFormatter,
        tp = pp.unit,
        Hp = pp.angle;
      if (!Ap || !Ap.length || !Op) return [];
      if ((0, Ip.D)(wp) || xp.e.isSsr) return function(pp, ip) {
        return Yp(pp, ip + 1)
      }(Ap, "number" === typeof wp && (0, Ip.D)(wp) ? wp : 0);
      var dp = [],
        ep = "top" === Up || "bottom" === Up ? "width" : "height",
        jp = tp && "width" === ep ? (0, Sp.g)(tp, {
          fontSize: ip,
          letterSpacing: cp
        }) : {
          width: 0,
          height: 0
        },
        kp = function(pp, Op) {
          var Ip = op()(vp) ? vp(pp.value, Op) : pp.value;
          return "width" === ep ? function(pp, ip, cp) {
            var Op = {
              width: pp.width + ip.width,
              height: pp.height + ip.height
            };
            return (0, Lp.e)(Op, cp)
          }((0, Sp.g)(Ip, {
            fontSize: ip,
            letterSpacing: cp
          }), jp, Hp) : (0, Sp.g)(Ip, {
            fontSize: ip,
            letterSpacing: cp
          })[ep]
        },
        mp = Ap.length >= 2 ? (0, Ip.I)(Ap[1].coordinate - Ap[0].coordinate) : 1,
        Rp = function(pp, ip, cp) {
          var Op = "width" === cp,
            op = pp.x,
            Ip = pp.y,
            Sp = pp.width,
            xp = pp.height;
          return 1 === ip ? {
            start: Op ? op : Ip,
            end: Op ? op + Sp : Ip + xp
          } : {
            start: Op ? op + Sp : Ip + xp,
            end: Op ? op : Ip
          }
        }(Pp, mp, ep);
      return "equidistantPreserveStart" === wp ? function(pp, ip, cp, Op, op) {
        for (var Ip, Sp = (Op || []).slice(), xp = ip.start, Lp = ip.end, Ap = 0, Pp = 1, Wp = xp, yp = function() {
            var ip = null === Op || void 0 === Op ? void 0 : Op[Ap];
            if (void 0 === ip) return {
              v: Yp(Op, Pp)
            };
            var Ip, Sp = Ap,
              yp = function() {
                return void 0 === Ip && (Ip = cp(ip, Sp)), Ip
              },
              Up = ip.coordinate,
              wp = 0 === Ap || Dp(pp, Up, yp, Wp, Lp);
            wp || (Ap = 0, Wp = xp, Pp += 1), wp && (Wp = Up + pp * (yp() / 2 + op), Ap += Pp)
          }; Pp <= Sp.length;)
          if (Ip = yp()) return Ip.v;
        return []
      }(mp, Rp, kp, Ap, yp) : (dp = "preserveStart" === wp || "preserveStartEnd" === wp ? function(pp, ip, cp, Op, op, Ip) {
        var Sp = (Op || []).slice(),
          xp = Sp.length,
          Lp = ip.start,
          Yp = ip.end;
        if (Ip) {
          var Ap = Op[xp - 1],
            Pp = cp(Ap, xp - 1),
            yp = pp * (Ap.coordinate + pp * Pp / 2 - Yp);
          Sp[xp - 1] = Ap = Wp(Wp({}, Ap), {}, {
            tickCoord: yp > 0 ? Ap.coordinate - yp * pp : Ap.coordinate
          }), Dp(pp, Ap.tickCoord, (function() {
            return Pp
          }), Lp, Yp) && (Yp = Ap.tickCoord - pp * (Pp / 2 + op), Sp[xp - 1] = Wp(Wp({}, Ap), {}, {
            isShow: !0
          }))
        }
        for (var Up = Ip ? xp - 1 : xp, wp = function(ip) {
            var Op, Ip = Sp[ip],
              xp = function() {
                return void 0 === Op && (Op = cp(Ip, ip)), Op
              };
            if (0 === ip) {
              var Ap = pp * (Ip.coordinate - pp * xp() / 2 - Lp);
              Sp[ip] = Ip = Wp(Wp({}, Ip), {}, {
                tickCoord: Ap < 0 ? Ip.coordinate - Ap * pp : Ip.coordinate
              })
            } else Sp[ip] = Ip = Wp(Wp({}, Ip), {}, {
              tickCoord: Ip.coordinate
            });
            Dp(pp, Ip.tickCoord, xp, Lp, Yp) && (Lp = Ip.tickCoord + pp * (xp() / 2 + op), Sp[ip] = Wp(Wp({}, Ip), {}, {
              isShow: !0
            }))
          }, vp = 0; vp < Up; vp++) wp(vp);
        return Sp
      }(mp, Rp, kp, Ap, yp, "preserveStartEnd" === wp) : function(pp, ip, cp, Op, op) {
        for (var Ip = (Op || []).slice(), Sp = Ip.length, xp = ip.start, Lp = ip.end, Yp = function(ip) {
            var Op, Yp = Ip[ip],
              Ap = function() {
                return void 0 === Op && (Op = cp(Yp, ip)), Op
              };
            if (ip === Sp - 1) {
              var Pp = pp * (Yp.coordinate + pp * Ap() / 2 - Lp);
              Ip[ip] = Yp = Wp(Wp({}, Yp), {}, {
                tickCoord: Pp > 0 ? Yp.coordinate - Pp * pp : Yp.coordinate
              })
            } else Ip[ip] = Yp = Wp(Wp({}, Yp), {}, {
              tickCoord: Yp.coordinate
            });
            Dp(pp, Yp.tickCoord, Ap, xp, Lp) && (Lp = Yp.tickCoord - pp * (Ap() / 2 + op), Ip[ip] = Wp(Wp({}, Yp), {}, {
              isShow: !0
            }))
          }, Ap = Sp - 1; Ap >= 0; Ap--) Yp(Ap);
        return Ip
      }(mp, Rp, kp, Ap, yp), dp.filter((function(pp) {
        return pp.isShow
      })))
    }
  },
  6537: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Lp
    });
    var Op = cp(5633),
      op = cp(6402),
      Ip = cp(6512),
      Sp = cp(6524),
      xp = cp(6368),
      Lp = (0, Op.c)({
        chartName: "BarChart",
        GraphicalChild: op.d,
        defaultTooltipEventType: "axis",
        validateTooltipEventTypes: ["axis", "item"],
        axisComponents: [{
          axisType: "xAxis",
          AxisComp: Ip.c
        }, {
          axisType: "yAxis",
          AxisComp: Sp.b
        }],
        formatAxisMap: xp.d
      })
  },
  5624: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Si
    });
    var Op = cp(5633),
      op = cp(6497),
      Ip = cp(6402),
      Sp = cp(6504),
      xp = cp(62),
      Lp = cp(6256),
      Yp = cp(5575),
      Dp = cp.n(Yp),
      Ap = cp(6322),
      Pp = cp.n(Ap),
      Wp = cp(5405),
      yp = cp.n(Wp),
      Up = cp(5203),
      wp = cp(6103),
      vp = cp(6414),
      tp = cp(5588),
      Hp = cp(6115);

    function dp(pp) {
      return dp = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
        return typeof pp
      } : function(pp) {
        return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
      }, dp(pp)
    }

    function ep(pp, ip) {
      for (var cp = 0; cp < ip.length; cp++) {
        var Op = ip[cp];
        Op.enumerable = Op.enumerable || !1, Op.configurable = !0, "value" in Op && (Op.writable = !0), Object.defineProperty(pp, Mp(Op.key), Op)
      }
    }

    function jp(pp, ip, cp) {
      return ip = mp(ip),
        function(pp, ip) {
          if (ip && ("object" === dp(ip) || "function" === typeof ip)) return ip;
          if (void 0 !== ip) throw new TypeError("Derived constructors may only return object or undefined");
          return function(pp) {
            if (void 0 === pp) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return pp
          }(pp)
        }(pp, kp() ? Reflect.construct(ip, cp || [], mp(pp).constructor) : ip.apply(pp, cp))
    }

    function kp() {
      try {
        var pp = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (pp) {}
      return (kp = function() {
        return !!pp
      })()
    }

    function mp(pp) {
      return mp = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(pp) {
        return pp.__proto__ || Object.getPrototypeOf(pp)
      }, mp(pp)
    }

    function Rp(pp, ip) {
      return Rp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(pp, ip) {
        return pp.__proto__ = ip, pp
      }, Rp(pp, ip)
    }

    function qp(pp, ip, cp) {
      return (ip = Mp(ip)) in pp ? Object.defineProperty(pp, ip, {
        value: cp,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : pp[ip] = cp, pp
    }

    function Mp(pp) {
      var ip = function(pp, ip) {
        if ("object" != dp(pp) || !pp) return pp;
        var cp = pp[Symbol.toPrimitive];
        if (void 0 !== cp) {
          var Op = cp.call(pp, ip || "default");
          if ("object" != dp(Op)) return Op;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ip ? String : Number)(pp)
      }(pp, "string");
      return "symbol" == dp(ip) ? ip : ip + ""
    }
    var Cp = function(pp) {
      function ip() {
        return function(pp, ip) {
          if (!(pp instanceof ip)) throw new TypeError("Cannot call a class as a function")
        }(this, ip), jp(this, ip, arguments)
      }
      return function(pp, ip) {
        if ("function" !== typeof ip && null !== ip) throw new TypeError("Super expression must either be null or a function");
        pp.prototype = Object.create(ip && ip.prototype, {
          constructor: {
            value: pp,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(pp, "prototype", {
          writable: !1
        }), ip && Rp(pp, ip)
      }(ip, pp), cp = ip, (Op = [{
        key: "render",
        value: function() {
          return null
        }
      }]) && ep(cp.prototype, Op), op && ep(cp, op), Object.defineProperty(cp, "prototype", {
        writable: !1
      }), cp;
      var cp, Op, op
    }(xp.Component);
    qp(Cp, "displayName", "ZAxis"), qp(Cp, "defaultProps", {
      zAxisId: 0,
      range: [64, 64],
      scale: "auto",
      type: "number"
    });
    var Ep = cp(6493),
      Xp = cp(6332),
      lp = cp(6410),
      Qp = cp(5299),
      Jp = cp(6266),
      Bp = cp(5619),
      Np = cp(6190),
      Tp = cp(6425),
      fp = ["option", "isActive"];

    function bp() {
      return bp = Object.assign ? Object.assign.bind() : function(pp) {
        for (var ip = 1; ip < arguments.length; ip++) {
          var cp = arguments[ip];
          for (var Op in cp) Object.prototype.hasOwnProperty.call(cp, Op) && (pp[Op] = cp[Op])
        }
        return pp
      }, bp.apply(this, arguments)
    }

    function hp(pp, ip) {
      if (null == pp) return {};
      var cp, Op, op = function(pp, ip) {
        if (null == pp) return {};
        var cp = {};
        for (var Op in pp)
          if (Object.prototype.hasOwnProperty.call(pp, Op)) {
            if (ip.indexOf(Op) >= 0) continue;
            cp[Op] = pp[Op]
          } return cp
      }(pp, ip);
      if (Object.getOwnPropertySymbols) {
        var Ip = Object.getOwnPropertySymbols(pp);
        for (Op = 0; Op < Ip.length; Op++) cp = Ip[Op], ip.indexOf(cp) >= 0 || Object.prototype.propertyIsEnumerable.call(pp, cp) && (op[cp] = pp[cp])
      }
      return op
    }

    function ap(pp) {
      var ip = pp.option,
        cp = pp.isActive,
        Op = hp(pp, fp);
      return "string" === typeof ip ? xp.createElement(Tp.d, bp({
        option: xp.createElement(Np.c, bp({
          type: ip
        }, Op)),
        isActive: cp,
        shapeType: "symbols"
      }, Op)) : xp.createElement(Tp.d, bp({
        option: ip,
        isActive: cp,
        shapeType: "symbols"
      }, Op))
    }

    function np(pp) {
      return np = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
        return typeof pp
      } : function(pp) {
        return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
      }, np(pp)
    }

    function Fp() {
      return Fp = Object.assign ? Object.assign.bind() : function(pp) {
        for (var ip = 1; ip < arguments.length; ip++) {
          var cp = arguments[ip];
          for (var Op in cp) Object.prototype.hasOwnProperty.call(cp, Op) && (pp[Op] = cp[Op])
        }
        return pp
      }, Fp.apply(this, arguments)
    }

    function gp(pp, ip) {
      var cp = Object.keys(pp);
      if (Object.getOwnPropertySymbols) {
        var Op = Object.getOwnPropertySymbols(pp);
        ip && (Op = Op.filter((function(ip) {
          return Object.getOwnPropertyDescriptor(pp, ip).enumerable
        }))), cp.push.apply(cp, Op)
      }
      return cp
    }

    function Gp(pp) {
      for (var ip = 1; ip < arguments.length; ip++) {
        var cp = null != arguments[ip] ? arguments[ip] : {};
        ip % 2 ? gp(Object(cp), !0).forEach((function(ip) {
          Vp(pp, ip, cp[ip])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : gp(Object(cp)).forEach((function(ip) {
          Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
        }))
      }
      return pp
    }

    function rp(pp, ip) {
      for (var cp = 0; cp < ip.length; cp++) {
        var Op = ip[cp];
        Op.enumerable = Op.enumerable || !1, Op.configurable = !0, "value" in Op && (Op.writable = !0), Object.defineProperty(pp, ii(Op.key), Op)
      }
    }

    function Zp(pp, ip, cp) {
      return ip = sp(ip),
        function(pp, ip) {
          if (ip && ("object" === np(ip) || "function" === typeof ip)) return ip;
          if (void 0 !== ip) throw new TypeError("Derived constructors may only return object or undefined");
          return function(pp) {
            if (void 0 === pp) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return pp
          }(pp)
        }(pp, zp() ? Reflect.construct(ip, cp || [], sp(pp).constructor) : ip.apply(pp, cp))
    }

    function zp() {
      try {
        var pp = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (pp) {}
      return (zp = function() {
        return !!pp
      })()
    }

    function sp(pp) {
      return sp = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(pp) {
        return pp.__proto__ || Object.getPrototypeOf(pp)
      }, sp(pp)
    }

    function Kp(pp, ip) {
      return Kp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(pp, ip) {
        return pp.__proto__ = ip, pp
      }, Kp(pp, ip)
    }

    function Vp(pp, ip, cp) {
      return (ip = ii(ip)) in pp ? Object.defineProperty(pp, ip, {
        value: cp,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : pp[ip] = cp, pp
    }

    function ii(pp) {
      var ip = function(pp, ip) {
        if ("object" != np(pp) || !pp) return pp;
        var cp = pp[Symbol.toPrimitive];
        if (void 0 !== cp) {
          var Op = cp.call(pp, ip || "default");
          if ("object" != np(Op)) return Op;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ip ? String : Number)(pp)
      }(pp, "string");
      return "symbol" == np(ip) ? ip : ip + ""
    }
    var ci = function(pp) {
      function ip() {
        var pp;
        ! function(pp, ip) {
          if (!(pp instanceof ip)) throw new TypeError("Cannot call a class as a function")
        }(this, ip);
        for (var cp = arguments.length, Op = new Array(cp), op = 0; op < cp; op++) Op[op] = arguments[op];
        return Vp(pp = Zp(this, ip, [].concat(Op)), "state", {
          isAnimationFinished: !1
        }), Vp(pp, "handleAnimationEnd", (function() {
          pp.setState({
            isAnimationFinished: !0
          })
        })), Vp(pp, "handleAnimationStart", (function() {
          pp.setState({
            isAnimationFinished: !1
          })
        })), Vp(pp, "id", (0, Qp.J)("recharts-scatter-")), pp
      }
      return function(pp, ip) {
        if ("function" !== typeof ip && null !== ip) throw new TypeError("Super expression must either be null or a function");
        pp.prototype = Object.create(ip && ip.prototype, {
          constructor: {
            value: pp,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(pp, "prototype", {
          writable: !1
        }), ip && Kp(pp, ip)
      }(ip, pp), cp = ip, Op = [{
        key: "renderSymbolsStatically",
        value: function(pp) {
          var ip = this,
            cp = this.props,
            Op = cp.shape,
            op = cp.activeShape,
            Ip = cp.activeIndex,
            Sp = (0, tp.d)(this.props, !1);
          return pp.map((function(pp, cp) {
            var Lp = Ip === cp,
              Yp = Lp ? op : Op,
              Dp = Gp(Gp({}, Sp), pp);
            return xp.createElement(wp.b, Fp({
              className: "recharts-scatter-symbol",
              key: "symbol-".concat(null === pp || void 0 === pp ? void 0 : pp.cx, "-").concat(null === pp || void 0 === pp ? void 0 : pp.cy, "-").concat(null === pp || void 0 === pp ? void 0 : pp.size, "-").concat(cp)
            }, (0, Bp.i)(ip.props, pp, cp), {
              role: "img"
            }), xp.createElement(ap, Fp({
              option: Yp,
              isActive: Lp,
              key: "symbol-".concat(cp)
            }, Dp)))
          }))
        }
      }, {
        key: "renderSymbolsWithAnimation",
        value: function() {
          var pp = this,
            ip = this.props,
            cp = ip.points,
            Op = ip.isAnimationActive,
            op = ip.animationBegin,
            Ip = ip.animationDuration,
            Sp = ip.animationEasing,
            Yp = ip.animationId,
            Dp = this.state.prevPoints;
          return xp.createElement(Lp.c, {
            mW: op,
            duration: Ip,
            isActive: Op,
            easing: Sp,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "pie-".concat(Yp),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(ip) {
            var Op = ip.t,
              op = cp.map((function(pp, ip) {
                var cp = Dp && Dp[ip];
                if (cp) {
                  var op = (0, Qp.x)(cp.cx, pp.cx),
                    Ip = (0, Qp.x)(cp.cy, pp.cy),
                    Sp = (0, Qp.x)(cp.size, pp.size);
                  return Gp(Gp({}, pp), {}, {
                    cx: op(Op),
                    cy: Ip(Op),
                    size: Sp(Op)
                  })
                }
                var xp = (0, Qp.x)(0, pp.size);
                return Gp(Gp({}, pp), {}, {
                  size: xp(Op)
                })
              }));
            return xp.createElement(wp.b, null, pp.renderSymbolsStatically(op))
          }))
        }
      }, {
        key: "renderSymbols",
        value: function() {
          var pp = this.props,
            ip = pp.points,
            cp = pp.isAnimationActive,
            Op = this.state.prevPoints;
          return !(cp && ip && ip.length) || Op && Pp()(Op, ip) ? this.renderSymbolsStatically(ip) : this.renderSymbolsWithAnimation()
        }
      }, {
        key: "renderErrorBar",
        value: function() {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var pp = this.props,
            ip = pp.points,
            cp = pp.xAxis,
            Op = pp.yAxis,
            op = pp.children,
            Ip = (0, tp.h)(op, Xp.b);
          return Ip ? Ip.map((function(pp, op) {
            var Ip = pp.props,
              Sp = Ip.direction,
              Lp = Ip.dataKey;
            return xp.cloneElement(pp, {
              key: "".concat(Sp, "-").concat(Lp, "-").concat(ip[op]),
              data: ip,
              xAxis: cp,
              yAxis: Op,
              layout: "x" === Sp ? "vertical" : "horizontal",
              dataPointFormatter: function(pp, ip) {
                return {
                  x: pp.cx,
                  y: pp.cy,
                  value: "x" === Sp ? +pp.node.x : +pp.node.y,
                  errorVal: (0, Jp.fb)(pp, ip)
                }
              }
            })
          })) : null
        }
      }, {
        key: "renderLine",
        value: function() {
          var pp, ip, cp = this.props,
            Op = cp.points,
            op = cp.line,
            Ip = cp.lineType,
            Sp = cp.lineJointType,
            Lp = (0, tp.d)(this.props, !1),
            Yp = (0, tp.d)(op, !1);
          if ("joint" === Ip) pp = Op.map((function(pp) {
            return {
              x: pp.cx,
              y: pp.cy
            }
          }));
          else if ("fitting" === Ip) {
            var Dp = (0, Qp.n)(Op),
              Ap = Dp.xmin,
              Pp = Dp.xmax,
              Wp = Dp.a,
              Up = Dp.b,
              vp = function(pp) {
                return Wp * pp + Up
              };
            pp = [{
              x: Ap,
              y: vp(Ap)
            }, {
              x: Pp,
              y: vp(Pp)
            }]
          }
          var Hp = Gp(Gp(Gp({}, Lp), {}, {
            fill: "none",
            stroke: Lp && Lp.fill
          }, Yp), {}, {
            points: pp
          });
          return ip = xp.isValidElement(op) ? xp.cloneElement(op, Hp) : yp()(op) ? op(Hp) : xp.createElement(Ep.d, Fp({}, Hp, {
            type: Sp
          })), xp.createElement(wp.b, {
            className: "recharts-scatter-line",
            key: "recharts-scatter-line"
          }, ip)
        }
      }, {
        key: "render",
        value: function() {
          var pp = this.props,
            ip = pp.hide,
            cp = pp.points,
            Op = pp.line,
            op = pp.className,
            Ip = pp.xAxis,
            Sp = pp.yAxis,
            Lp = pp.left,
            Yp = pp.top,
            Ap = pp.width,
            Pp = pp.height,
            Wp = pp.id,
            yp = pp.isAnimationActive;
          if (ip || !cp || !cp.length) return null;
          var tp = this.state.isAnimationFinished,
            Hp = (0, Up.d)("recharts-scatter", op),
            dp = Ip && Ip.allowDataOverflow,
            ep = Sp && Sp.allowDataOverflow,
            jp = dp || ep,
            kp = Dp()(Wp) ? this.id : Wp;
          return xp.createElement(wp.b, {
            className: Hp,
            clipPath: jp ? "url(#clipPath-".concat(kp, ")") : null
          }, dp || ep ? xp.createElement("defs", null, xp.createElement("clipPath", {
            id: "clipPath-".concat(kp)
          }, xp.createElement("rect", {
            x: dp ? Lp : Lp - Ap / 2,
            y: ep ? Yp : Yp - Pp / 2,
            width: dp ? Ap : 2 * Ap,
            height: ep ? Pp : 2 * Pp
          }))) : null, Op && this.renderLine(), this.renderErrorBar(), xp.createElement(wp.b, {
            key: "recharts-scatter-symbols"
          }, this.renderSymbols()), (!yp || tp) && vp.e.renderCallByParent(this.props, cp))
        }
      }], op = [{
        key: "getDerivedStateFromProps",
        value: function(pp, ip) {
          return pp.animationId !== ip.prevAnimationId ? {
            prevAnimationId: pp.animationId,
            curPoints: pp.points,
            prevPoints: ip.curPoints
          } : pp.points !== ip.curPoints ? {
            curPoints: pp.points
          } : null
        }
      }], Op && rp(cp.prototype, Op), op && rp(cp, op), Object.defineProperty(cp, "prototype", {
        writable: !1
      }), cp;
      var cp, Op, op
    }(xp.PureComponent);
    Vp(ci, "displayName", "Scatter"), Vp(ci, "defaultProps", {
      xAxisId: 0,
      yAxisId: 0,
      zAxisId: 0,
      legendType: "circle",
      lineType: "joint",
      lineJointType: "linear",
      data: [],
      shape: "circle",
      hide: !1,
      isAnimationActive: !Hp.e.isSsr,
      animationBegin: 0,
      animationDuration: 400,
      animationEasing: "linear"
    }), Vp(ci, "getComposedData", (function(pp) {
      var ip = pp.xAxis,
        cp = pp.yAxis,
        Op = pp.zAxis,
        op = pp.item,
        Ip = pp.displayedData,
        Sp = pp.xAxisTicks,
        xp = pp.yAxisTicks,
        Lp = pp.offset,
        Yp = op.props.tooltipType,
        Ap = (0, tp.h)(op.props.children, lp.b),
        Pp = Dp()(ip.dataKey) ? op.props.dataKey : ip.dataKey,
        Wp = Dp()(cp.dataKey) ? op.props.dataKey : cp.dataKey,
        yp = Op && Op.dataKey,
        Up = Op ? Op.range : Cp.defaultProps.range,
        wp = Up && Up[0],
        vp = ip.scale.bandwidth ? ip.scale.bandwidth() : 0,
        Hp = cp.scale.bandwidth ? cp.scale.bandwidth() : 0,
        dp = Ip.map((function(pp, Ip) {
          var Lp = (0, Jp.fb)(pp, Pp),
            Up = (0, Jp.fb)(pp, Wp),
            tp = !Dp()(yp) && (0, Jp.fb)(pp, yp) || "-",
            dp = [{
              name: Dp()(ip.dataKey) ? op.props.name : ip.name || ip.dataKey,
              unit: ip.unit || "",
              value: Lp,
              payload: pp,
              dataKey: Pp,
              type: Yp
            }, {
              name: Dp()(cp.dataKey) ? op.props.name : cp.name || cp.dataKey,
              unit: cp.unit || "",
              value: Up,
              payload: pp,
              dataKey: Wp,
              type: Yp
            }];
          "-" !== tp && dp.push({
            name: Op.name || Op.dataKey,
            unit: Op.unit || "",
            value: tp,
            payload: pp,
            dataKey: yp,
            type: Yp
          });
          var ep = (0, Jp.F)({
              axis: ip,
              ticks: Sp,
              bandSize: vp,
              entry: pp,
              index: Ip,
              dataKey: Pp
            }),
            jp = (0, Jp.F)({
              axis: cp,
              ticks: xp,
              bandSize: Hp,
              entry: pp,
              index: Ip,
              dataKey: Wp
            }),
            kp = "-" !== tp ? Op.scale(tp) : wp,
            mp = Math.sqrt(Math.max(kp, 0) / Math.PI);
          return Gp(Gp({}, pp), {}, {
            cx: ep,
            cy: jp,
            x: ep - mp,
            y: jp - mp,
            xAxis: ip,
            yAxis: cp,
            zAxis: Op,
            width: 2 * mp,
            height: 2 * mp,
            size: kp,
            node: {
              x: Lp,
              y: Up,
              z: tp
            },
            tooltipPayload: dp,
            tooltipPosition: {
              x: ep,
              y: jp
            },
            payload: pp
          }, Ap && Ap[Ip] && Ap[Ip].props)
        }));
      return Gp({
        points: dp
      }, Lp)
    }));
    var Oi = cp(6512),
      oi = cp(6524),
      Ii = cp(6368),
      Si = (0, Op.c)({
        chartName: "ComposedChart",
        GraphicalChild: [Sp.c, op.c, Ip.d, ci],
        axisComponents: [{
          axisType: "xAxis",
          AxisComp: Oi.c
        }, {
          axisType: "yAxis",
          AxisComp: oi.b
        }, {
          axisType: "zAxis",
          AxisComp: Cp
        }],
        formatAxisMap: Ii.d
      })
  },
  5633: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => ac
    });
    var Op = cp(62),
      op = cp(5575),
      Ip = cp.n(op),
      Sp = cp(5405),
      xp = cp.n(Sp),
      Lp = cp(5642),
      Yp = cp.n(Lp),
      Dp = cp(5326),
      Ap = cp.n(Dp),
      Pp = cp(5692),
      Wp = cp.n(Pp),
      yp = cp(5207),
      Up = cp.n(yp),
      wp = cp(5203),
      vp = cp(6096),
      tp = cp(6101),
      Hp = cp(6103),
      dp = cp(6112),
      ep = cp(6183),
      jp = cp(6238),
      kp = cp(6247),
      mp = cp(5588),
      Rp = cp(6271),
      qp = cp(6262),
      Mp = cp(6266),
      Cp = cp(5299);

    function Ep(pp) {
      return Ep = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
        return typeof pp
      } : function(pp) {
        return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
      }, Ep(pp)
    }

    function Xp(pp, ip) {
      var cp = Object.keys(pp);
      if (Object.getOwnPropertySymbols) {
        var Op = Object.getOwnPropertySymbols(pp);
        ip && (Op = Op.filter((function(ip) {
          return Object.getOwnPropertyDescriptor(pp, ip).enumerable
        }))), cp.push.apply(cp, Op)
      }
      return cp
    }

    function lp(pp) {
      for (var ip = 1; ip < arguments.length; ip++) {
        var cp = null != arguments[ip] ? arguments[ip] : {};
        ip % 2 ? Xp(Object(cp), !0).forEach((function(ip) {
          Qp(pp, ip, cp[ip])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : Xp(Object(cp)).forEach((function(ip) {
          Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
        }))
      }
      return pp
    }

    function Qp(pp, ip, cp) {
      return (ip = function(pp) {
        var ip = function(pp, ip) {
          if ("object" != Ep(pp) || !pp) return pp;
          var cp = pp[Symbol.toPrimitive];
          if (void 0 !== cp) {
            var Op = cp.call(pp, ip || "default");
            if ("object" != Ep(Op)) return Op;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === ip ? String : Number)(pp)
        }(pp, "string");
        return "symbol" == Ep(ip) ? ip : ip + ""
      }(ip)) in pp ? Object.defineProperty(pp, ip, {
        value: cp,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : pp[ip] = cp, pp
    }
    var Jp = ["Webkit", "Moz", "O", "ms"];

    function Bp(pp) {
      return Bp = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
        return typeof pp
      } : function(pp) {
        return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
      }, Bp(pp)
    }

    function Np() {
      return Np = Object.assign ? Object.assign.bind() : function(pp) {
        for (var ip = 1; ip < arguments.length; ip++) {
          var cp = arguments[ip];
          for (var Op in cp) Object.prototype.hasOwnProperty.call(cp, Op) && (pp[Op] = cp[Op])
        }
        return pp
      }, Np.apply(this, arguments)
    }

    function Tp(pp, ip) {
      var cp = Object.keys(pp);
      if (Object.getOwnPropertySymbols) {
        var Op = Object.getOwnPropertySymbols(pp);
        ip && (Op = Op.filter((function(ip) {
          return Object.getOwnPropertyDescriptor(pp, ip).enumerable
        }))), cp.push.apply(cp, Op)
      }
      return cp
    }

    function fp(pp) {
      for (var ip = 1; ip < arguments.length; ip++) {
        var cp = null != arguments[ip] ? arguments[ip] : {};
        ip % 2 ? Tp(Object(cp), !0).forEach((function(ip) {
          gp(pp, ip, cp[ip])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : Tp(Object(cp)).forEach((function(ip) {
          Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
        }))
      }
      return pp
    }

    function bp(pp, ip) {
      for (var cp = 0; cp < ip.length; cp++) {
        var Op = ip[cp];
        Op.enumerable = Op.enumerable || !1, Op.configurable = !0, "value" in Op && (Op.writable = !0), Object.defineProperty(pp, Gp(Op.key), Op)
      }
    }

    function hp(pp, ip, cp) {
      return ip = np(ip),
        function(pp, ip) {
          if (ip && ("object" === Bp(ip) || "function" === typeof ip)) return ip;
          if (void 0 !== ip) throw new TypeError("Derived constructors may only return object or undefined");
          return function(pp) {
            if (void 0 === pp) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return pp
          }(pp)
        }(pp, ap() ? Reflect.construct(ip, cp || [], np(pp).constructor) : ip.apply(pp, cp))
    }

    function ap() {
      try {
        var pp = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (pp) {}
      return (ap = function() {
        return !!pp
      })()
    }

    function np(pp) {
      return np = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(pp) {
        return pp.__proto__ || Object.getPrototypeOf(pp)
      }, np(pp)
    }

    function Fp(pp, ip) {
      return Fp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(pp, ip) {
        return pp.__proto__ = ip, pp
      }, Fp(pp, ip)
    }

    function gp(pp, ip, cp) {
      return (ip = Gp(ip)) in pp ? Object.defineProperty(pp, ip, {
        value: cp,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : pp[ip] = cp, pp
    }

    function Gp(pp) {
      var ip = function(pp, ip) {
        if ("object" != Bp(pp) || !pp) return pp;
        var cp = pp[Symbol.toPrimitive];
        if (void 0 !== cp) {
          var Op = cp.call(pp, ip || "default");
          if ("object" != Bp(Op)) return Op;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ip ? String : Number)(pp)
      }(pp, "string");
      return "symbol" == Bp(ip) ? ip : ip + ""
    }
    var rp = function(pp) {
        return pp.changedTouches && !!pp.changedTouches.length
      },
      Zp = function(pp) {
        function ip(pp) {
          var cp;
          return function(pp, ip) {
            if (!(pp instanceof ip)) throw new TypeError("Cannot call a class as a function")
          }(this, ip), gp(cp = hp(this, ip, [pp]), "handleDrag", (function(pp) {
            cp.leaveTimer && (clearTimeout(cp.leaveTimer), cp.leaveTimer = null), cp.state.isTravellerMoving ? cp.handleTravellerMove(pp) : cp.state.isSlideMoving && cp.handleSlideDrag(pp)
          })), gp(cp, "handleTouchMove", (function(pp) {
            null != pp.changedTouches && pp.changedTouches.length > 0 && cp.handleDrag(pp.changedTouches[0])
          })), gp(cp, "handleDragEnd", (function() {
            cp.setState({
              isTravellerMoving: !1,
              isSlideMoving: !1
            }, (function() {
              var pp = cp.props,
                ip = pp.endIndex,
                Op = pp.onDragEnd,
                op = pp.startIndex;
              null === Op || void 0 === Op || Op({
                endIndex: ip,
                startIndex: op
              })
            })), cp.detachDragEndListener()
          })), gp(cp, "handleLeaveWrapper", (function() {
            (cp.state.isTravellerMoving || cp.state.isSlideMoving) && (cp.leaveTimer = window.setTimeout(cp.handleDragEnd, cp.props.leaveTimeOut))
          })), gp(cp, "handleEnterSlideOrTraveller", (function() {
            cp.setState({
              isTextActive: !0
            })
          })), gp(cp, "handleLeaveSlideOrTraveller", (function() {
            cp.setState({
              isTextActive: !1
            })
          })), gp(cp, "handleSlideDragStart", (function(pp) {
            var ip = rp(pp) ? pp.changedTouches[0] : pp;
            cp.setState({
              isTravellerMoving: !1,
              isSlideMoving: !0,
              slideMoveStartX: ip.pageX
            }), cp.attachDragEndListener()
          })), cp.travellerDragStartHandlers = {
            startX: cp.handleTravellerDragStart.bind(cp, "startX"),
            endX: cp.handleTravellerDragStart.bind(cp, "endX")
          }, cp.state = {}, cp
        }
        return function(pp, ip) {
          if ("function" !== typeof ip && null !== ip) throw new TypeError("Super expression must either be null or a function");
          pp.prototype = Object.create(ip && ip.prototype, {
            constructor: {
              value: pp,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(pp, "prototype", {
            writable: !1
          }), ip && Fp(pp, ip)
        }(ip, pp), cp = ip, op = [{
          key: "componentWillUnmount",
          value: function() {
            this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.detachDragEndListener()
          }
        }, {
          key: "getIndex",
          value: function(pp) {
            var cp = pp.startX,
              Op = pp.endX,
              op = this.state.scaleValues,
              Ip = this.props,
              Sp = Ip.gap,
              xp = Ip.data.length - 1,
              Lp = Math.min(cp, Op),
              Yp = Math.max(cp, Op),
              Dp = ip.getIndexInRange(op, Lp),
              Ap = ip.getIndexInRange(op, Yp);
            return {
              startIndex: Dp - Dp % Sp,
              endIndex: Ap === xp ? xp : Ap - Ap % Sp
            }
          }
        }, {
          key: "getTextOfTick",
          value: function(pp) {
            var ip = this.props,
              cp = ip.data,
              Op = ip.tickFormatter,
              op = ip.dataKey,
              Ip = (0, Mp.fb)(cp[pp], op, pp);
            return xp()(Op) ? Op(Ip, pp) : Ip
          }
        }, {
          key: "attachDragEndListener",
          value: function() {
            window.addEventListener("mouseup", this.handleDragEnd, !0), window.addEventListener("touchend", this.handleDragEnd, !0), window.addEventListener("mousemove", this.handleDrag, !0)
          }
        }, {
          key: "detachDragEndListener",
          value: function() {
            window.removeEventListener("mouseup", this.handleDragEnd, !0), window.removeEventListener("touchend", this.handleDragEnd, !0), window.removeEventListener("mousemove", this.handleDrag, !0)
          }
        }, {
          key: "handleSlideDrag",
          value: function(pp) {
            var ip = this.state,
              cp = ip.slideMoveStartX,
              Op = ip.startX,
              op = ip.endX,
              Ip = this.props,
              Sp = Ip.x,
              xp = Ip.width,
              Lp = Ip.travellerWidth,
              Yp = Ip.startIndex,
              Dp = Ip.endIndex,
              Ap = Ip.onChange,
              Pp = pp.pageX - cp;
            Pp > 0 ? Pp = Math.min(Pp, Sp + xp - Lp - op, Sp + xp - Lp - Op) : Pp < 0 && (Pp = Math.max(Pp, Sp - Op, Sp - op));
            var Wp = this.getIndex({
              startX: Op + Pp,
              endX: op + Pp
            });
            Wp.startIndex === Yp && Wp.endIndex === Dp || !Ap || Ap(Wp), this.setState({
              startX: Op + Pp,
              endX: op + Pp,
              slideMoveStartX: pp.pageX
            })
          }
        }, {
          key: "handleTravellerDragStart",
          value: function(pp, ip) {
            var cp = rp(ip) ? ip.changedTouches[0] : ip;
            this.setState({
              isSlideMoving: !1,
              isTravellerMoving: !0,
              movingTravellerId: pp,
              brushMoveStartX: cp.pageX
            }), this.attachDragEndListener()
          }
        }, {
          key: "handleTravellerMove",
          value: function(pp) {
            var ip = this.state,
              cp = ip.brushMoveStartX,
              Op = ip.movingTravellerId,
              op = ip.endX,
              Ip = ip.startX,
              Sp = this.state[Op],
              xp = this.props,
              Lp = xp.x,
              Yp = xp.width,
              Dp = xp.travellerWidth,
              Ap = xp.onChange,
              Pp = xp.gap,
              Wp = xp.data,
              yp = {
                startX: this.state.startX,
                endX: this.state.endX
              },
              Up = pp.pageX - cp;
            Up > 0 ? Up = Math.min(Up, Lp + Yp - Dp - Sp) : Up < 0 && (Up = Math.max(Up, Lp - Sp)), yp[Op] = Sp + Up;
            var wp = this.getIndex(yp),
              vp = wp.startIndex,
              tp = wp.endIndex;
            this.setState(gp(gp({}, Op, Sp + Up), "brushMoveStartX", pp.pageX), (function() {
              Ap && function() {
                var pp = Wp.length - 1;
                return "startX" === Op && (op > Ip ? vp % Pp === 0 : tp % Pp === 0) || op < Ip && tp === pp || "endX" === Op && (op > Ip ? tp % Pp === 0 : vp % Pp === 0) || op > Ip && tp === pp
              }() && Ap(wp)
            }))
          }
        }, {
          key: "handleTravellerMoveKeyboard",
          value: function(pp, ip) {
            var cp = this,
              Op = this.state,
              op = Op.scaleValues,
              Ip = Op.startX,
              Sp = Op.endX,
              xp = this.state[ip],
              Lp = op.indexOf(xp);
            if (-1 !== Lp) {
              var Yp = Lp + pp;
              if (!(-1 === Yp || Yp >= op.length)) {
                var Dp = op[Yp];
                "startX" === ip && Dp >= Sp || "endX" === ip && Dp <= Ip || this.setState(gp({}, ip, Dp), (function() {
                  cp.props.onChange(cp.getIndex({
                    startX: cp.state.startX,
                    endX: cp.state.endX
                  }))
                }))
              }
            }
          }
        }, {
          key: "renderBackground",
          value: function() {
            var pp = this.props,
              ip = pp.x,
              cp = pp.y,
              op = pp.width,
              Ip = pp.height,
              Sp = pp.fill,
              xp = pp.stroke;
            return Op.createElement("rect", {
              stroke: xp,
              fill: Sp,
              x: ip,
              y: cp,
              width: op,
              height: Ip
            })
          }
        }, {
          key: "renderPanorama",
          value: function() {
            var pp = this.props,
              ip = pp.x,
              cp = pp.y,
              op = pp.width,
              Ip = pp.height,
              Sp = pp.data,
              xp = pp.children,
              Lp = pp.padding,
              Yp = Op.Children.only(xp);
            return Yp ? Op.cloneElement(Yp, {
              x: ip,
              y: cp,
              width: op,
              height: Ip,
              margin: Lp,
              compact: !0,
              data: Sp
            }) : null
          }
        }, {
          key: "renderTravellerLayer",
          value: function(pp, cp) {
            var op, Ip, Sp = this,
              xp = this.props,
              Lp = xp.y,
              Yp = xp.travellerWidth,
              Dp = xp.height,
              Ap = xp.traveller,
              Pp = xp.ariaLabel,
              Wp = xp.data,
              yp = xp.startIndex,
              Up = xp.endIndex,
              wp = Math.max(pp, this.props.x),
              vp = fp(fp({}, (0, mp.d)(this.props, !1)), {}, {
                x: wp,
                y: Lp,
                width: Yp,
                height: Dp
              }),
              tp = Pp || "Min value: ".concat(null === (op = Wp[yp]) || void 0 === op ? void 0 : op.name, ", Max value: ").concat(null === (Ip = Wp[Up]) || void 0 === Ip ? void 0 : Ip.name);
            return Op.createElement(Hp.b, {
              tabIndex: 0,
              role: "slider",
              "aria-label": tp,
              "aria-valuenow": pp,
              className: "recharts-brush-traveller",
              onMouseEnter: this.handleEnterSlideOrTraveller,
              onMouseLeave: this.handleLeaveSlideOrTraveller,
              onMouseDown: this.travellerDragStartHandlers[cp],
              onTouchStart: this.travellerDragStartHandlers[cp],
              onKeyDown: function(pp) {
                ["ArrowLeft", "ArrowRight"].includes(pp.key) && (pp.preventDefault(), pp.stopPropagation(), Sp.handleTravellerMoveKeyboard("ArrowRight" === pp.key ? 1 : -1, cp))
              },
              onFocus: function() {
                Sp.setState({
                  isTravellerFocused: !0
                })
              },
              onBlur: function() {
                Sp.setState({
                  isTravellerFocused: !1
                })
              },
              style: {
                cursor: "col-resize"
              }
            }, ip.renderTraveller(Ap, vp))
          }
        }, {
          key: "renderSlide",
          value: function(pp, ip) {
            var cp = this.props,
              op = cp.y,
              Ip = cp.height,
              Sp = cp.stroke,
              xp = cp.travellerWidth,
              Lp = Math.min(pp, ip) + xp,
              Yp = Math.max(Math.abs(ip - pp) - xp, 0);
            return Op.createElement("rect", {
              className: "recharts-brush-slide",
              onMouseEnter: this.handleEnterSlideOrTraveller,
              onMouseLeave: this.handleLeaveSlideOrTraveller,
              onMouseDown: this.handleSlideDragStart,
              onTouchStart: this.handleSlideDragStart,
              style: {
                cursor: "move"
              },
              stroke: "none",
              fill: Sp,
              fillOpacity: .2,
              x: Lp,
              y: op,
              width: Yp,
              height: Ip
            })
          }
        }, {
          key: "renderText",
          value: function() {
            var pp = this.props,
              ip = pp.startIndex,
              cp = pp.endIndex,
              op = pp.y,
              Ip = pp.height,
              Sp = pp.travellerWidth,
              xp = pp.stroke,
              Lp = this.state,
              Yp = Lp.startX,
              Dp = Lp.endX,
              Ap = {
                pointerEvents: "none",
                fill: xp
              };
            return Op.createElement(Hp.b, {
              className: "recharts-brush-texts"
            }, Op.createElement(qp.c, Np({
              textAnchor: "end",
              verticalAnchor: "middle",
              x: Math.min(Yp, Dp) - 5,
              y: op + Ip / 2
            }, Ap), this.getTextOfTick(ip)), Op.createElement(qp.c, Np({
              textAnchor: "start",
              verticalAnchor: "middle",
              x: Math.max(Yp, Dp) + Sp + 5,
              y: op + Ip / 2
            }, Ap), this.getTextOfTick(cp)))
          }
        }, {
          key: "render",
          value: function() {
            var pp = this.props,
              ip = pp.data,
              cp = pp.className,
              op = pp.children,
              Ip = pp.x,
              Sp = pp.y,
              xp = pp.width,
              Lp = pp.height,
              Yp = pp.alwaysShowText,
              Dp = this.state,
              Ap = Dp.startX,
              Pp = Dp.endX,
              Wp = Dp.isTextActive,
              yp = Dp.isSlideMoving,
              Up = Dp.isTravellerMoving,
              vp = Dp.isTravellerFocused;
            if (!ip || !ip.length || !(0, Cp.D)(Ip) || !(0, Cp.D)(Sp) || !(0, Cp.D)(xp) || !(0, Cp.D)(Lp) || xp <= 0 || Lp <= 0) return null;
            var tp = (0, wp.d)("recharts-brush", cp),
              dp = 1 === Op.Children.count(op),
              ep = function(pp, ip) {
                if (!pp) return null;
                var cp = pp.replace(/(\w)/, (function(pp) {
                    return pp.toUpperCase()
                  })),
                  Op = Jp.reduce((function(pp, Op) {
                    return lp(lp({}, pp), {}, Qp({}, Op + cp, ip))
                  }), {});
                return Op[pp] = ip, Op
              }("userSelect", "none");
            return Op.createElement(Hp.b, {
              className: tp,
              onMouseLeave: this.handleLeaveWrapper,
              onTouchMove: this.handleTouchMove,
              style: ep
            }, this.renderBackground(), dp && this.renderPanorama(), this.renderSlide(Ap, Pp), this.renderTravellerLayer(Ap, "startX"), this.renderTravellerLayer(Pp, "endX"), (Wp || yp || Up || vp || Yp) && this.renderText())
          }
        }], Ip = [{
          key: "renderDefaultTraveller",
          value: function(pp) {
            var ip = pp.x,
              cp = pp.y,
              op = pp.width,
              Ip = pp.height,
              Sp = pp.stroke,
              xp = Math.floor(cp + Ip / 2) - 1;
            return Op.createElement(Op.Fragment, null, Op.createElement("rect", {
              x: ip,
              y: cp,
              width: op,
              height: Ip,
              fill: Sp,
              stroke: "none"
            }), Op.createElement("line", {
              x1: ip + 1,
              y1: xp,
              x2: ip + op - 1,
              y2: xp,
              fill: "none",
              stroke: "#fff"
            }), Op.createElement("line", {
              x1: ip + 1,
              y1: xp + 2,
              x2: ip + op - 1,
              y2: xp + 2,
              fill: "none",
              stroke: "#fff"
            }))
          }
        }, {
          key: "renderTraveller",
          value: function(pp, cp) {
            return Op.isValidElement(pp) ? Op.cloneElement(pp, cp) : xp()(pp) ? pp(cp) : ip.renderDefaultTraveller(cp)
          }
        }, {
          key: "getDerivedStateFromProps",
          value: function(pp, ip) {
            var cp = pp.data,
              Op = pp.width,
              op = pp.x,
              Ip = pp.travellerWidth,
              Sp = pp.updateId,
              xp = pp.startIndex,
              Lp = pp.endIndex;
            if (cp !== ip.prevData || Sp !== ip.prevUpdateId) return fp({
              prevData: cp,
              prevTravellerWidth: Ip,
              prevUpdateId: Sp,
              prevX: op,
              prevWidth: Op
            }, cp && cp.length ? function(pp) {
              var ip = pp.data,
                cp = pp.startIndex,
                Op = pp.endIndex,
                op = pp.x,
                Ip = pp.width,
                Sp = pp.travellerWidth;
              if (!ip || !ip.length) return {};
              var xp = ip.length,
                Lp = (0, Rp.d)().domain(Yp()(0, xp)).range([op, op + Ip - Sp]),
                Dp = Lp.domain().map((function(pp) {
                  return Lp(pp)
                }));
              return {
                isTextActive: !1,
                isSlideMoving: !1,
                isTravellerMoving: !1,
                isTravellerFocused: !1,
                startX: Lp(cp),
                endX: Lp(Op),
                scale: Lp,
                scaleValues: Dp
              }
            }({
              data: cp,
              width: Op,
              x: op,
              travellerWidth: Ip,
              startIndex: xp,
              endIndex: Lp
            }) : {
              scale: null,
              scaleValues: null
            });
            if (ip.scale && (Op !== ip.prevWidth || op !== ip.prevX || Ip !== ip.prevTravellerWidth)) {
              ip.scale.range([op, op + Op - Ip]);
              var Dp = ip.scale.domain().map((function(pp) {
                return ip.scale(pp)
              }));
              return {
                prevData: cp,
                prevTravellerWidth: Ip,
                prevUpdateId: Sp,
                prevX: op,
                prevWidth: Op,
                startX: ip.scale(pp.startIndex),
                endX: ip.scale(pp.endIndex),
                scaleValues: Dp
              }
            }
            return null
          }
        }, {
          key: "getIndexInRange",
          value: function(pp, ip) {
            for (var cp = 0, Op = pp.length - 1; Op - cp > 1;) {
              var op = Math.floor((cp + Op) / 2);
              pp[op] > ip ? Op = op : cp = op
            }
            return ip >= pp[Op] ? Op : cp
          }
        }], op && bp(cp.prototype, op), Ip && bp(cp, Ip), Object.defineProperty(cp, "prototype", {
          writable: !1
        }), cp;
        var cp, op, Ip
      }(Op.PureComponent);
    gp(Zp, "displayName", "Brush"), gp(Zp, "defaultProps", {
      height: 40,
      travellerWidth: 5,
      gap: 1,
      fill: "#fff",
      stroke: "#666",
      padding: {
        top: 1,
        right: 1,
        bottom: 1,
        left: 1
      },
      leaveTimeOut: 1e3,
      alwaysShowText: !1
    });
    var zp = cp(6264),
      sp = cp(6336),
      Kp = cp(6352),
      Vp = cp(6360),
      ii = cp(6368),
      ci = cp(5582);

    function Oi() {
      return Oi = Object.assign ? Object.assign.bind() : function(pp) {
        for (var ip = 1; ip < arguments.length; ip++) {
          var cp = arguments[ip];
          for (var Op in cp) Object.prototype.hasOwnProperty.call(cp, Op) && (pp[Op] = cp[Op])
        }
        return pp
      }, Oi.apply(this, arguments)
    }

    function oi(pp) {
      return oi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
        return typeof pp
      } : function(pp) {
        return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
      }, oi(pp)
    }

    function Ii(pp, ip) {
      var cp = Object.keys(pp);
      if (Object.getOwnPropertySymbols) {
        var Op = Object.getOwnPropertySymbols(pp);
        ip && (Op = Op.filter((function(ip) {
          return Object.getOwnPropertyDescriptor(pp, ip).enumerable
        }))), cp.push.apply(cp, Op)
      }
      return cp
    }

    function Si(pp) {
      for (var ip = 1; ip < arguments.length; ip++) {
        var cp = null != arguments[ip] ? arguments[ip] : {};
        ip % 2 ? Ii(Object(cp), !0).forEach((function(ip) {
          Pi(pp, ip, cp[ip])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : Ii(Object(cp)).forEach((function(ip) {
          Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
        }))
      }
      return pp
    }

    function xi(pp, ip) {
      for (var cp = 0; cp < ip.length; cp++) {
        var Op = ip[cp];
        Op.enumerable = Op.enumerable || !1, Op.configurable = !0, "value" in Op && (Op.writable = !0), Object.defineProperty(pp, Wi(Op.key), Op)
      }
    }

    function Li(pp, ip, cp) {
      return ip = Di(ip),
        function(pp, ip) {
          if (ip && ("object" === oi(ip) || "function" === typeof ip)) return ip;
          if (void 0 !== ip) throw new TypeError("Derived constructors may only return object or undefined");
          return function(pp) {
            if (void 0 === pp) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return pp
          }(pp)
        }(pp, Yi() ? Reflect.construct(ip, cp || [], Di(pp).constructor) : ip.apply(pp, cp))
    }

    function Yi() {
      try {
        var pp = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (pp) {}
      return (Yi = function() {
        return !!pp
      })()
    }

    function Di(pp) {
      return Di = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(pp) {
        return pp.__proto__ || Object.getPrototypeOf(pp)
      }, Di(pp)
    }

    function Ai(pp, ip) {
      return Ai = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(pp, ip) {
        return pp.__proto__ = ip, pp
      }, Ai(pp, ip)
    }

    function Pi(pp, ip, cp) {
      return (ip = Wi(ip)) in pp ? Object.defineProperty(pp, ip, {
        value: cp,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : pp[ip] = cp, pp
    }

    function Wi(pp) {
      var ip = function(pp, ip) {
        if ("object" != oi(pp) || !pp) return pp;
        var cp = pp[Symbol.toPrimitive];
        if (void 0 !== cp) {
          var Op = cp.call(pp, ip || "default");
          if ("object" != oi(Op)) return Op;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ip ? String : Number)(pp)
      }(pp, "string");
      return "symbol" == oi(ip) ? ip : ip + ""
    }
    var yi = function(pp) {
      function ip() {
        return function(pp, ip) {
          if (!(pp instanceof ip)) throw new TypeError("Cannot call a class as a function")
        }(this, ip), Li(this, ip, arguments)
      }
      return function(pp, ip) {
        if ("function" !== typeof ip && null !== ip) throw new TypeError("Super expression must either be null or a function");
        pp.prototype = Object.create(ip && ip.prototype, {
          constructor: {
            value: pp,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(pp, "prototype", {
          writable: !1
        }), ip && Ai(pp, ip)
      }(ip, pp), cp = ip, (op = [{
        key: "render",
        value: function() {
          var pp = this.props,
            cp = pp.x,
            op = pp.y,
            Ip = pp.r,
            Sp = pp.alwaysShow,
            xp = pp.clipPathId,
            Lp = (0, Cp.B)(cp),
            Yp = (0, Cp.B)(op);
          if ((0, ci.d)(void 0 === Sp, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !Lp || !Yp) return null;
          var Dp = function(pp) {
            var ip = pp.x,
              cp = pp.y,
              Op = pp.xAxis,
              op = pp.yAxis,
              Ip = (0, ii.c)({
                x: Op.scale,
                y: op.scale
              }),
              Sp = Ip.apply({
                x: ip,
                y: cp
              }, {
                bandAware: !0
              });
            return (0, Vp.d)(pp, "discard") && !Ip.isInRange(Sp) ? null : Sp
          }(this.props);
          if (!Dp) return null;
          var Ap = Dp.x,
            Pp = Dp.y,
            Wp = this.props,
            yp = Wp.shape,
            Up = Wp.className,
            vp = Si(Si({
              clipPath: (0, Vp.d)(this.props, "hidden") ? "url(#".concat(xp, ")") : void 0
            }, (0, mp.d)(this.props, !0)), {}, {
              cx: Ap,
              cy: Pp
            });
          return Op.createElement(Hp.b, {
            className: (0, wp.d)("recharts-reference-dot", Up)
          }, ip.renderDot(yp, vp), Kp.e.renderCallByParent(this.props, {
            x: Ap - Ip,
            y: Pp - Ip,
            width: 2 * Ip,
            height: 2 * Ip
          }))
        }
      }]) && xi(cp.prototype, op), Ip && xi(cp, Ip), Object.defineProperty(cp, "prototype", {
        writable: !1
      }), cp;
      var cp, op, Ip
    }(Op.Component);
    Pi(yi, "displayName", "ReferenceDot"), Pi(yi, "defaultProps", {
      isFront: !1,
      ifOverflow: "discard",
      xAxisId: 0,
      yAxisId: 0,
      r: 10,
      fill: "#fff",
      stroke: "#ccc",
      fillOpacity: 1,
      strokeWidth: 1
    }), Pi(yi, "renderDot", (function(pp, ip) {
      return Op.isValidElement(pp) ? Op.cloneElement(pp, ip) : xp()(pp) ? pp(ip) : Op.createElement(jp.c, Oi({}, ip, {
        cx: ip.cx,
        cy: ip.cy,
        className: "recharts-reference-dot-dot"
      }))
    }));
    var Ui = cp(6453);

    function wi() {
      return wi = Object.assign ? Object.assign.bind() : function(pp) {
        for (var ip = 1; ip < arguments.length; ip++) {
          var cp = arguments[ip];
          for (var Op in cp) Object.prototype.hasOwnProperty.call(cp, Op) && (pp[Op] = cp[Op])
        }
        return pp
      }, wi.apply(this, arguments)
    }

    function vi(pp) {
      return vi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
        return typeof pp
      } : function(pp) {
        return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
      }, vi(pp)
    }

    function ti(pp, ip) {
      var cp = Object.keys(pp);
      if (Object.getOwnPropertySymbols) {
        var Op = Object.getOwnPropertySymbols(pp);
        ip && (Op = Op.filter((function(ip) {
          return Object.getOwnPropertyDescriptor(pp, ip).enumerable
        }))), cp.push.apply(cp, Op)
      }
      return cp
    }

    function Hi(pp) {
      for (var ip = 1; ip < arguments.length; ip++) {
        var cp = null != arguments[ip] ? arguments[ip] : {};
        ip % 2 ? ti(Object(cp), !0).forEach((function(ip) {
          mi(pp, ip, cp[ip])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : ti(Object(cp)).forEach((function(ip) {
          Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
        }))
      }
      return pp
    }

    function di(pp, ip) {
      for (var cp = 0; cp < ip.length; cp++) {
        var Op = ip[cp];
        Op.enumerable = Op.enumerable || !1, Op.configurable = !0, "value" in Op && (Op.writable = !0), Object.defineProperty(pp, Ri(Op.key), Op)
      }
    }

    function ei(pp, ip, cp) {
      return ip = ji(ip),
        function(pp, ip) {
          if (ip && ("object" === vi(ip) || "function" === typeof ip)) return ip;
          if (void 0 !== ip) throw new TypeError("Derived constructors may only return object or undefined");
          return function(pp) {
            if (void 0 === pp) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return pp
          }(pp)
        }(pp, ui() ? Reflect.construct(ip, cp || [], ji(pp).constructor) : ip.apply(pp, cp))
    }

    function ui() {
      try {
        var pp = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (pp) {}
      return (ui = function() {
        return !!pp
      })()
    }

    function ji(pp) {
      return ji = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(pp) {
        return pp.__proto__ || Object.getPrototypeOf(pp)
      }, ji(pp)
    }

    function ki(pp, ip) {
      return ki = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(pp, ip) {
        return pp.__proto__ = ip, pp
      }, ki(pp, ip)
    }

    function mi(pp, ip, cp) {
      return (ip = Ri(ip)) in pp ? Object.defineProperty(pp, ip, {
        value: cp,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : pp[ip] = cp, pp
    }

    function Ri(pp) {
      var ip = function(pp, ip) {
        if ("object" != vi(pp) || !pp) return pp;
        var cp = pp[Symbol.toPrimitive];
        if (void 0 !== cp) {
          var Op = cp.call(pp, ip || "default");
          if ("object" != vi(Op)) return Op;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ip ? String : Number)(pp)
      }(pp, "string");
      return "symbol" == vi(ip) ? ip : ip + ""
    }
    var qi = function(pp) {
      function ip() {
        return function(pp, ip) {
          if (!(pp instanceof ip)) throw new TypeError("Cannot call a class as a function")
        }(this, ip), ei(this, ip, arguments)
      }
      return function(pp, ip) {
        if ("function" !== typeof ip && null !== ip) throw new TypeError("Super expression must either be null or a function");
        pp.prototype = Object.create(ip && ip.prototype, {
          constructor: {
            value: pp,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(pp, "prototype", {
          writable: !1
        }), ip && ki(pp, ip)
      }(ip, pp), cp = ip, (op = [{
        key: "render",
        value: function() {
          var pp = this.props,
            cp = pp.x1,
            op = pp.x2,
            Ip = pp.y1,
            Sp = pp.y2,
            xp = pp.className,
            Lp = pp.alwaysShow,
            Yp = pp.clipPathId;
          (0, ci.d)(void 0 === Lp, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
          var Dp = (0, Cp.B)(cp),
            Ap = (0, Cp.B)(op),
            Pp = (0, Cp.B)(Ip),
            Wp = (0, Cp.B)(Sp),
            yp = this.props.shape;
          if (!Dp && !Ap && !Pp && !Wp && !yp) return null;
          var Up = function(pp, ip, cp, Op, op) {
            var Ip = op.x1,
              Sp = op.x2,
              xp = op.y1,
              Lp = op.y2,
              Yp = op.xAxis,
              Dp = op.yAxis;
            if (!Yp || !Dp) return null;
            var Ap = (0, ii.c)({
                x: Yp.scale,
                y: Dp.scale
              }),
              Pp = {
                x: pp ? Ap.x.apply(Ip, {
                  position: "start"
                }) : Ap.x.rangeMin,
                y: cp ? Ap.y.apply(xp, {
                  position: "start"
                }) : Ap.y.rangeMin
              },
              Wp = {
                x: ip ? Ap.x.apply(Sp, {
                  position: "end"
                }) : Ap.x.rangeMax,
                y: Op ? Ap.y.apply(Lp, {
                  position: "end"
                }) : Ap.y.rangeMax
              };
            return !(0, Vp.d)(op, "discard") || Ap.isInRange(Pp) && Ap.isInRange(Wp) ? (0, ii.k)(Pp, Wp) : null
          }(Dp, Ap, Pp, Wp, this.props);
          if (!Up && !yp) return null;
          var vp = (0, Vp.d)(this.props, "hidden") ? "url(#".concat(Yp, ")") : void 0;
          return Op.createElement(Hp.b, {
            className: (0, wp.d)("recharts-reference-area", xp)
          }, ip.renderRect(yp, Hi(Hi({
            clipPath: vp
          }, (0, mp.d)(this.props, !0)), Up)), Kp.e.renderCallByParent(this.props, Up))
        }
      }]) && di(cp.prototype, op), Ip && di(cp, Ip), Object.defineProperty(cp, "prototype", {
        writable: !1
      }), cp;
      var cp, op, Ip
    }(Op.Component);

    function Mi(pp) {
      return function(pp) {
        if (Array.isArray(pp)) return Ci(pp)
      }(pp) || function(pp) {
        if ("undefined" !== typeof Symbol && null != pp[Symbol.iterator] || null != pp["@@iterator"]) return Array.from(pp)
      }(pp) || function(pp, ip) {
        if (!pp) return;
        if ("string" === typeof pp) return Ci(pp, ip);
        var cp = Object.prototype.toString.call(pp).slice(8, -1);
        "Object" === cp && pp.constructor && (cp = pp.constructor.name);
        if ("Map" === cp || "Set" === cp) return Array.from(pp);
        if ("Arguments" === cp || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cp)) return Ci(pp, ip)
      }(pp) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Ci(pp, ip) {
      (null == ip || ip > pp.length) && (ip = pp.length);
      for (var cp = 0, Op = new Array(ip); cp < ip; cp++) Op[cp] = pp[cp];
      return Op
    }
    mi(qi, "displayName", "ReferenceArea"), mi(qi, "defaultProps", {
      isFront: !1,
      ifOverflow: "discard",
      xAxisId: 0,
      yAxisId: 0,
      r: 10,
      fill: "#ccc",
      fillOpacity: .5,
      stroke: "none",
      strokeWidth: 1
    }), mi(qi, "renderRect", (function(pp, ip) {
      return Op.isValidElement(pp) ? Op.cloneElement(pp, ip) : xp()(pp) ? pp(ip) : Op.createElement(kp.d, wi({}, ip, {
        className: "recharts-reference-area-rect"
      }))
    }));
    var Ei = function(pp, ip, cp, Op, op) {
        var Ip = (0, mp.h)(pp, Ui.d),
          Sp = (0, mp.h)(pp, yi),
          xp = [].concat(Mi(Ip), Mi(Sp)),
          Lp = (0, mp.h)(pp, qi),
          Yp = "".concat(Op, "Id"),
          Dp = Op[0],
          Ap = ip;
        if (xp.length && (Ap = xp.reduce((function(pp, ip) {
            if (ip.props[Yp] === cp && (0, Vp.d)(ip.props, "extendDomain") && (0, Cp.D)(ip.props[Dp])) {
              var Op = ip.props[Dp];
              return [Math.min(pp[0], Op), Math.max(pp[1], Op)]
            }
            return pp
          }), Ap)), Lp.length) {
          var Pp = "".concat(Dp, "1"),
            Wp = "".concat(Dp, "2");
          Ap = Lp.reduce((function(pp, ip) {
            if (ip.props[Yp] === cp && (0, Vp.d)(ip.props, "extendDomain") && (0, Cp.D)(ip.props[Pp]) && (0, Cp.D)(ip.props[Wp])) {
              var Op = ip.props[Pp],
                op = ip.props[Wp];
              return [Math.min(pp[0], Op, op), Math.max(pp[1], Op, op)]
            }
            return pp
          }), Ap)
        }
        return op && op.length && (Ap = op.reduce((function(pp, ip) {
          return (0, Cp.D)(ip) ? [Math.min(pp[0], ip), Math.max(pp[1], ip)] : pp
        }), Ap)), Ap
      },
      Xi = cp(6357),
      li = cp(5610),
      Qi = cp(42),
      Ji = new(cp.n(Qi)()),
      Bi = "recharts.syncMouseEvents",
      Ni = cp(5619);

    function Ti(pp) {
      return Ti = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
        return typeof pp
      } : function(pp) {
        return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
      }, Ti(pp)
    }

    function fi(pp, ip) {
      for (var cp = 0; cp < ip.length; cp++) {
        var Op = ip[cp];
        Op.enumerable = Op.enumerable || !1, Op.configurable = !0, "value" in Op && (Op.writable = !0), Object.defineProperty(pp, ai(Op.key), Op)
      }
    }

    function bi(pp, ip, cp) {
      return (ip = ai(ip)) in pp ? Object.defineProperty(pp, ip, {
        value: cp,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : pp[ip] = cp, pp
    }

    function ai(pp) {
      var ip = function(pp, ip) {
        if ("object" != Ti(pp) || !pp) return pp;
        var cp = pp[Symbol.toPrimitive];
        if (void 0 !== cp) {
          var Op = cp.call(pp, ip || "default");
          if ("object" != Ti(Op)) return Op;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ip ? String : Number)(pp)
      }(pp, "string");
      return "symbol" == Ti(ip) ? ip : ip + ""
    }
    var ni = function() {
      return pp = function pp() {
        ! function(pp, ip) {
          if (!(pp instanceof ip)) throw new TypeError("Cannot call a class as a function")
        }(this, pp), bi(this, "activeIndex", 0), bi(this, "coordinateList", []), bi(this, "layout", "horizontal")
      }, (ip = [{
        key: "setDetails",
        value: function(pp) {
          var ip, cp = pp.coordinateList,
            Op = void 0 === cp ? null : cp,
            op = pp.container,
            Ip = void 0 === op ? null : op,
            Sp = pp.layout,
            xp = void 0 === Sp ? null : Sp,
            Lp = pp.offset,
            Yp = void 0 === Lp ? null : Lp,
            Dp = pp.mouseHandlerCallback,
            Ap = void 0 === Dp ? null : Dp;
          this.coordinateList = null !== (ip = null !== Op && void 0 !== Op ? Op : this.coordinateList) && void 0 !== ip ? ip : [], this.container = null !== Ip && void 0 !== Ip ? Ip : this.container, this.layout = null !== xp && void 0 !== xp ? xp : this.layout, this.offset = null !== Yp && void 0 !== Yp ? Yp : this.offset, this.mouseHandlerCallback = null !== Ap && void 0 !== Ap ? Ap : this.mouseHandlerCallback, this.activeIndex = Math.min(Math.max(this.activeIndex, 0), this.coordinateList.length - 1)
        }
      }, {
        key: "focus",
        value: function() {
          this.spoofMouse()
        }
      }, {
        key: "keyboardEvent",
        value: function(pp) {
          if (0 !== this.coordinateList.length) switch (pp.key) {
            case "ArrowRight":
              if ("horizontal" !== this.layout) return;
              this.activeIndex = Math.min(this.activeIndex + 1, this.coordinateList.length - 1), this.spoofMouse();
              break;
            case "ArrowLeft":
              if ("horizontal" !== this.layout) return;
              this.activeIndex = Math.max(this.activeIndex - 1, 0), this.spoofMouse()
          }
        }
      }, {
        key: "setIndex",
        value: function(pp) {
          this.activeIndex = pp
        }
      }, {
        key: "spoofMouse",
        value: function() {
          var pp, ip;
          if ("horizontal" === this.layout && 0 !== this.coordinateList.length) {
            var cp = this.container.getBoundingClientRect(),
              Op = cp.x,
              op = cp.y,
              Ip = cp.height,
              Sp = this.coordinateList[this.activeIndex].coordinate,
              xp = (null === (pp = window) || void 0 === pp ? void 0 : pp.scrollX) || 0,
              Lp = (null === (ip = window) || void 0 === ip ? void 0 : ip.scrollY) || 0,
              Yp = Op + Sp + xp,
              Dp = op + this.offset.top + Ip / 2 + Lp;
            this.mouseHandlerCallback({
              pageX: Yp,
              pageY: Dp
            })
          }
        }
      }]) && fi(pp.prototype, ip), cp && fi(pp, cp), Object.defineProperty(pp, "prototype", {
        writable: !1
      }), pp;
      var pp, ip, cp
    }();
    var Fi = cp(6425),
      gi = cp(6493);

    function Gi(pp) {
      return Gi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
        return typeof pp
      } : function(pp) {
        return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
      }, Gi(pp)
    }
    var ri = ["x", "y", "top", "left", "width", "height", "className"];

    function Zi() {
      return Zi = Object.assign ? Object.assign.bind() : function(pp) {
        for (var ip = 1; ip < arguments.length; ip++) {
          var cp = arguments[ip];
          for (var Op in cp) Object.prototype.hasOwnProperty.call(cp, Op) && (pp[Op] = cp[Op])
        }
        return pp
      }, Zi.apply(this, arguments)
    }

    function zi(pp, ip) {
      var cp = Object.keys(pp);
      if (Object.getOwnPropertySymbols) {
        var Op = Object.getOwnPropertySymbols(pp);
        ip && (Op = Op.filter((function(ip) {
          return Object.getOwnPropertyDescriptor(pp, ip).enumerable
        }))), cp.push.apply(cp, Op)
      }
      return cp
    }

    function si(pp, ip, cp) {
      return (ip = function(pp) {
        var ip = function(pp, ip) {
          if ("object" != Gi(pp) || !pp) return pp;
          var cp = pp[Symbol.toPrimitive];
          if (void 0 !== cp) {
            var Op = cp.call(pp, ip || "default");
            if ("object" != Gi(Op)) return Op;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === ip ? String : Number)(pp)
        }(pp, "string");
        return "symbol" == Gi(ip) ? ip : ip + ""
      }(ip)) in pp ? Object.defineProperty(pp, ip, {
        value: cp,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : pp[ip] = cp, pp
    }

    function Ki(pp, ip) {
      if (null == pp) return {};
      var cp, Op, op = function(pp, ip) {
        if (null == pp) return {};
        var cp = {};
        for (var Op in pp)
          if (Object.prototype.hasOwnProperty.call(pp, Op)) {
            if (ip.indexOf(Op) >= 0) continue;
            cp[Op] = pp[Op]
          } return cp
      }(pp, ip);
      if (Object.getOwnPropertySymbols) {
        var Ip = Object.getOwnPropertySymbols(pp);
        for (Op = 0; Op < Ip.length; Op++) cp = Ip[Op], ip.indexOf(cp) >= 0 || Object.prototype.propertyIsEnumerable.call(pp, cp) && (op[cp] = pp[cp])
      }
      return op
    }
    var Vi = function(pp, ip, cp, Op, op, Ip) {
        return "M".concat(pp, ",").concat(op, "v").concat(Op, "M").concat(Ip, ",").concat(ip, "h").concat(cp)
      },
      pc = function(pp) {
        var ip = pp.x,
          cp = void 0 === ip ? 0 : ip,
          op = pp.y,
          Ip = void 0 === op ? 0 : op,
          Sp = pp.top,
          xp = void 0 === Sp ? 0 : Sp,
          Lp = pp.left,
          Yp = void 0 === Lp ? 0 : Lp,
          Dp = pp.width,
          Ap = void 0 === Dp ? 0 : Dp,
          Pp = pp.height,
          Wp = void 0 === Pp ? 0 : Pp,
          yp = pp.className,
          Up = function(pp) {
            for (var ip = 1; ip < arguments.length; ip++) {
              var cp = null != arguments[ip] ? arguments[ip] : {};
              ip % 2 ? zi(Object(cp), !0).forEach((function(ip) {
                si(pp, ip, cp[ip])
              })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : zi(Object(cp)).forEach((function(ip) {
                Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
              }))
            }
            return pp
          }({
            x: cp,
            y: Ip,
            top: xp,
            left: Yp,
            width: Ap,
            height: Wp
          }, Ki(pp, ri));
        return (0, Cp.D)(cp) && (0, Cp.D)(Ip) && (0, Cp.D)(Ap) && (0, Cp.D)(Wp) && (0, Cp.D)(xp) && (0, Cp.D)(Yp) ? Op.createElement("path", Zi({}, (0, mp.d)(Up, !0), {
          className: (0, wp.d)("recharts-cross", yp),
          d: Vi(cp, Ip, Ap, Wp, xp, Yp)
        })) : null
      };

    function ic(pp) {
      var ip = pp.cx,
        cp = pp.cy,
        Op = pp.radius,
        op = pp.startAngle,
        Ip = pp.endAngle;
      return {
        points: [(0, Xi.i)(ip, cp, Op, op), (0, Xi.i)(ip, cp, Op, Ip)],
        cx: ip,
        cy: cp,
        radius: Op,
        startAngle: op,
        endAngle: Ip
      }
    }
    var cc = cp(6448);

    function Oc(pp, ip, cp) {
      var Op, op, Ip, Sp;
      if ("horizontal" === pp) Ip = Op = ip.x, op = cp.top, Sp = cp.top + cp.height;
      else if ("vertical" === pp) Sp = op = ip.y, Op = cp.left, Ip = cp.left + cp.width;
      else if (null != ip.cx && null != ip.cy) {
        if ("centric" !== pp) return ic(ip);
        var xp = ip.cx,
          Lp = ip.cy,
          Yp = ip.innerRadius,
          Dp = ip.outerRadius,
          Ap = ip.angle,
          Pp = (0, Xi.i)(xp, Lp, Yp, Ap),
          Wp = (0, Xi.i)(xp, Lp, Dp, Ap);
        Op = Pp.x, op = Pp.y, Ip = Wp.x, Sp = Wp.y
      }
      return [{
        x: Op,
        y: op
      }, {
        x: Ip,
        y: Sp
      }]
    }

    function oc(pp) {
      return oc = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
        return typeof pp
      } : function(pp) {
        return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
      }, oc(pp)
    }

    function Ic(pp, ip) {
      var cp = Object.keys(pp);
      if (Object.getOwnPropertySymbols) {
        var Op = Object.getOwnPropertySymbols(pp);
        ip && (Op = Op.filter((function(ip) {
          return Object.getOwnPropertyDescriptor(pp, ip).enumerable
        }))), cp.push.apply(cp, Op)
      }
      return cp
    }

    function Sc(pp) {
      for (var ip = 1; ip < arguments.length; ip++) {
        var cp = null != arguments[ip] ? arguments[ip] : {};
        ip % 2 ? Ic(Object(cp), !0).forEach((function(ip) {
          xc(pp, ip, cp[ip])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : Ic(Object(cp)).forEach((function(ip) {
          Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
        }))
      }
      return pp
    }

    function xc(pp, ip, cp) {
      return (ip = function(pp) {
        var ip = function(pp, ip) {
          if ("object" != oc(pp) || !pp) return pp;
          var cp = pp[Symbol.toPrimitive];
          if (void 0 !== cp) {
            var Op = cp.call(pp, ip || "default");
            if ("object" != oc(Op)) return Op;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === ip ? String : Number)(pp)
        }(pp, "string");
        return "symbol" == oc(ip) ? ip : ip + ""
      }(ip)) in pp ? Object.defineProperty(pp, ip, {
        value: cp,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : pp[ip] = cp, pp
    }

    function Lc(pp) {
      var ip, cp, op, Ip = pp.element,
        Sp = pp.tooltipEventType,
        xp = pp.isActive,
        Lp = pp.activeCoordinate,
        Yp = pp.activePayload,
        Dp = pp.offset,
        Ap = pp.activeTooltipIndex,
        Pp = pp.tooltipAxisBandSize,
        Wp = pp.layout,
        yp = pp.chartName,
        Up = null !== (ip = Ip.props.cursor) && void 0 !== ip ? ip : null === (cp = Ip.type.defaultProps) || void 0 === cp ? void 0 : cp.cursor;
      if (!Ip || !Up || !xp || !Lp || "ScatterChart" !== yp && "axis" !== Sp) return null;
      var vp = gi.d;
      if ("ScatterChart" === yp) op = Lp, vp = pc;
      else if ("BarChart" === yp) op = function(pp, ip, cp, Op) {
        var op = Op / 2;
        return {
          stroke: "none",
          fill: "#ccc",
          x: "horizontal" === pp ? ip.x - op : cp.left + .5,
          y: "horizontal" === pp ? cp.top + .5 : ip.y - op,
          width: "horizontal" === pp ? Op : cp.width - 1,
          height: "horizontal" === pp ? cp.height - 1 : Op
        }
      }(Wp, Lp, Dp, Pp), vp = kp.d;
      else if ("radial" === Wp) {
        var tp = ic(Lp),
          Hp = tp.cx,
          dp = tp.cy,
          ep = tp.radius;
        op = {
          cx: Hp,
          cy: dp,
          startAngle: tp.startAngle,
          endAngle: tp.endAngle,
          innerRadius: ep,
          outerRadius: ep
        }, vp = cc.c
      } else op = {
        points: Oc(Wp, Lp, Dp)
      }, vp = gi.d;
      var jp = Sc(Sc(Sc(Sc({
        stroke: "#ccc",
        pointerEvents: "none"
      }, Dp), op), (0, mp.d)(Up, !1)), {}, {
        payload: Yp,
        payloadIndex: Ap,
        className: (0, wp.d)("recharts-tooltip-cursor", Up.className)
      });
      return (0, Op.isValidElement)(Up) ? (0, Op.cloneElement)(Up, jp) : (0, Op.createElement)(vp, jp)
    }
    var Yc = cp(6470),
      Dc = ["item"],
      Ac = ["children", "className", "width", "height", "style", "compact", "title", "desc"];

    function Pc(pp) {
      return Pc = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
        return typeof pp
      } : function(pp) {
        return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
      }, Pc(pp)
    }

    function Wc() {
      return Wc = Object.assign ? Object.assign.bind() : function(pp) {
        for (var ip = 1; ip < arguments.length; ip++) {
          var cp = arguments[ip];
          for (var Op in cp) Object.prototype.hasOwnProperty.call(cp, Op) && (pp[Op] = cp[Op])
        }
        return pp
      }, Wc.apply(this, arguments)
    }

    function yc(pp, ip) {
      return function(pp) {
        if (Array.isArray(pp)) return pp
      }(pp) || function(pp, ip) {
        var cp = null == pp ? null : "undefined" != typeof Symbol && pp[Symbol.iterator] || pp["@@iterator"];
        if (null != cp) {
          var Op, op, Ip, Sp, xp = [],
            Lp = !0,
            Yp = !1;
          try {
            if (Ip = (cp = cp.call(pp)).next, 0 === ip) {
              if (Object(cp) !== cp) return;
              Lp = !1
            } else
              for (; !(Lp = (Op = Ip.call(cp)).done) && (xp.push(Op.value), xp.length !== ip); Lp = !0);
          } catch (pp) {
            Yp = !0, op = pp
          } finally {
            try {
              if (!Lp && null != cp.return && (Sp = cp.return(), Object(Sp) !== Sp)) return
            } finally {
              if (Yp) throw op
            }
          }
          return xp
        }
      }(pp, ip) || uc(pp, ip) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Uc(pp, ip) {
      if (null == pp) return {};
      var cp, Op, op = function(pp, ip) {
        if (null == pp) return {};
        var cp = {};
        for (var Op in pp)
          if (Object.prototype.hasOwnProperty.call(pp, Op)) {
            if (ip.indexOf(Op) >= 0) continue;
            cp[Op] = pp[Op]
          } return cp
      }(pp, ip);
      if (Object.getOwnPropertySymbols) {
        var Ip = Object.getOwnPropertySymbols(pp);
        for (Op = 0; Op < Ip.length; Op++) cp = Ip[Op], ip.indexOf(cp) >= 0 || Object.prototype.propertyIsEnumerable.call(pp, cp) && (op[cp] = pp[cp])
      }
      return op
    }

    function wc(pp, ip) {
      for (var cp = 0; cp < ip.length; cp++) {
        var Op = ip[cp];
        Op.enumerable = Op.enumerable || !1, Op.configurable = !0, "value" in Op && (Op.writable = !0), Object.defineProperty(pp, qc(Op.key), Op)
      }
    }

    function vc(pp, ip, cp) {
      return ip = Hc(ip),
        function(pp, ip) {
          if (ip && ("object" === Pc(ip) || "function" === typeof ip)) return ip;
          if (void 0 !== ip) throw new TypeError("Derived constructors may only return object or undefined");
          return function(pp) {
            if (void 0 === pp) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return pp
          }(pp)
        }(pp, tc() ? Reflect.construct(ip, cp || [], Hc(pp).constructor) : ip.apply(pp, cp))
    }

    function tc() {
      try {
        var pp = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (pp) {}
      return (tc = function() {
        return !!pp
      })()
    }

    function Hc(pp) {
      return Hc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(pp) {
        return pp.__proto__ || Object.getPrototypeOf(pp)
      }, Hc(pp)
    }

    function dc(pp, ip) {
      return dc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(pp, ip) {
        return pp.__proto__ = ip, pp
      }, dc(pp, ip)
    }

    function ec(pp) {
      return function(pp) {
        if (Array.isArray(pp)) return jc(pp)
      }(pp) || function(pp) {
        if ("undefined" !== typeof Symbol && null != pp[Symbol.iterator] || null != pp["@@iterator"]) return Array.from(pp)
      }(pp) || uc(pp) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function uc(pp, ip) {
      if (pp) {
        if ("string" === typeof pp) return jc(pp, ip);
        var cp = Object.prototype.toString.call(pp).slice(8, -1);
        return "Object" === cp && pp.constructor && (cp = pp.constructor.name), "Map" === cp || "Set" === cp ? Array.from(pp) : "Arguments" === cp || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cp) ? jc(pp, ip) : void 0
      }
    }

    function jc(pp, ip) {
      (null == ip || ip > pp.length) && (ip = pp.length);
      for (var cp = 0, Op = new Array(ip); cp < ip; cp++) Op[cp] = pp[cp];
      return Op
    }

    function kc(pp, ip) {
      var cp = Object.keys(pp);
      if (Object.getOwnPropertySymbols) {
        var Op = Object.getOwnPropertySymbols(pp);
        ip && (Op = Op.filter((function(ip) {
          return Object.getOwnPropertyDescriptor(pp, ip).enumerable
        }))), cp.push.apply(cp, Op)
      }
      return cp
    }

    function mc(pp) {
      for (var ip = 1; ip < arguments.length; ip++) {
        var cp = null != arguments[ip] ? arguments[ip] : {};
        ip % 2 ? kc(Object(cp), !0).forEach((function(ip) {
          Rc(pp, ip, cp[ip])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : kc(Object(cp)).forEach((function(ip) {
          Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
        }))
      }
      return pp
    }

    function Rc(pp, ip, cp) {
      return (ip = qc(ip)) in pp ? Object.defineProperty(pp, ip, {
        value: cp,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : pp[ip] = cp, pp
    }

    function qc(pp) {
      var ip = function(pp, ip) {
        if ("object" != Pc(pp) || !pp) return pp;
        var cp = pp[Symbol.toPrimitive];
        if (void 0 !== cp) {
          var Op = cp.call(pp, ip || "default");
          if ("object" != Pc(Op)) return Op;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ip ? String : Number)(pp)
      }(pp, "string");
      return "symbol" == Pc(ip) ? ip : ip + ""
    }
    var Mc = {
        xAxis: ["bottom", "top"],
        yAxis: ["left", "right"]
      },
      Cc = {
        width: "100%",
        height: "100%"
      },
      Ec = {
        x: 0,
        y: 0
      };

    function Xc(pp) {
      return pp
    }
    var lc = function(pp, ip) {
      var cp = ip.graphicalItems,
        Op = ip.dataStartIndex,
        op = ip.dataEndIndex,
        Ip = (null !== cp && void 0 !== cp ? cp : []).reduce((function(pp, ip) {
          var cp = ip.props.data;
          return cp && cp.length ? [].concat(ec(pp), ec(cp)) : pp
        }), []);
      return Ip.length > 0 ? Ip : pp && pp.length && (0, Cp.D)(Op) && (0, Cp.D)(op) ? pp.slice(Op, op + 1) : []
    };

    function Qc(pp) {
      return "number" === pp ? [0, "auto"] : void 0
    }
    var Jc = function(pp, ip, cp, Op) {
        var op = pp.graphicalItems,
          Ip = pp.tooltipAxis,
          Sp = lc(ip, pp);
        return cp < 0 || !op || !op.length || cp >= Sp.length ? null : op.reduce((function(op, xp) {
          var Lp, Yp, Dp = null !== (Lp = xp.props.data) && void 0 !== Lp ? Lp : ip;
          if (Dp && pp.dataStartIndex + pp.dataEndIndex !== 0 && pp.dataEndIndex - pp.dataStartIndex >= cp && (Dp = Dp.slice(pp.dataStartIndex, pp.dataEndIndex + 1)), Ip.dataKey && !Ip.allowDuplicatedCategory) {
            var Ap = void 0 === Dp ? Sp : Dp;
            Yp = (0, Cp.h)(Ap, Ip.dataKey, Op)
          } else Yp = Dp && Dp[cp] || Sp[cp];
          return Yp ? [].concat(ec(op), [(0, Mp.cb)(xp, Yp)]) : op
        }), [])
      },
      Bc = function(pp, ip, cp, Op) {
        var op = Op || {
            x: pp.chartX,
            y: pp.chartY
          },
          Ip = function(pp, ip) {
            return "horizontal" === ip ? pp.x : "vertical" === ip ? pp.y : "centric" === ip ? pp.angle : pp.radius
          }(op, cp),
          Sp = pp.orderedTooltipTicks,
          xp = pp.tooltipAxis,
          Lp = pp.tooltipTicks,
          Yp = (0, Mp.g)(Ip, Sp, Lp, xp);
        if (Yp >= 0 && Lp) {
          var Dp = Lp[Yp] && Lp[Yp].value,
            Ap = Jc(pp, ip, Yp, Dp),
            Pp = function(pp, ip, cp, Op) {
              var op = ip.find((function(pp) {
                return pp && pp.index === cp
              }));
              if (op) {
                if ("horizontal" === pp) return {
                  x: op.coordinate,
                  y: Op.y
                };
                if ("vertical" === pp) return {
                  x: Op.x,
                  y: op.coordinate
                };
                if ("centric" === pp) {
                  var Ip = op.coordinate,
                    Sp = Op.radius;
                  return mc(mc(mc({}, Op), (0, Xi.i)(Op.cx, Op.cy, Sp, Ip)), {}, {
                    angle: Ip,
                    radius: Sp
                  })
                }
                var xp = op.coordinate,
                  Lp = Op.angle;
                return mc(mc(mc({}, Op), (0, Xi.i)(Op.cx, Op.cy, xp, Lp)), {}, {
                  angle: Lp,
                  radius: xp
                })
              }
              return Ec
            }(cp, Sp, Yp, op);
          return {
            activeTooltipIndex: Yp,
            activeLabel: Dp,
            activePayload: Ap,
            activeCoordinate: Pp
          }
        }
        return null
      },
      Nc = function(pp, ip) {
        var cp = ip.axes,
          Op = ip.graphicalItems,
          op = ip.axisType,
          Sp = ip.axisIdKey,
          xp = ip.stackGroups,
          Lp = ip.dataStartIndex,
          Dp = ip.dataEndIndex,
          Ap = pp.layout,
          Pp = pp.children,
          Wp = pp.stackOffset,
          yp = (0, Mp.hb)(Ap, op);
        return cp.reduce((function(ip, cp) {
          var Up, wp = void 0 !== cp.type.defaultProps ? mc(mc({}, cp.type.defaultProps), cp.props) : cp.props,
            vp = wp.type,
            tp = wp.dataKey,
            Hp = wp.allowDataOverflow,
            dp = wp.allowDuplicatedCategory,
            ep = wp.scale,
            jp = wp.ticks,
            kp = wp.includeHidden,
            mp = wp[Sp];
          if (ip[mp]) return ip;
          var Rp, qp, Ep, Xp = lc(pp.data, {
              graphicalItems: Op.filter((function(pp) {
                var ip;
                return (Sp in pp.props ? pp.props[Sp] : null === (ip = pp.type.defaultProps) || void 0 === ip ? void 0 : ip[Sp]) === mp
              })),
              dataStartIndex: Lp,
              dataEndIndex: Dp
            }),
            lp = Xp.length;
          (function(pp, ip, cp) {
            if ("number" === cp && !0 === ip && Array.isArray(pp)) {
              var Op = null === pp || void 0 === pp ? void 0 : pp[0],
                op = null === pp || void 0 === pp ? void 0 : pp[1];
              if (Op && op && (0, Cp.D)(Op) && (0, Cp.D)(op)) return !0
            }
            return !1
          })(wp.domain, Hp, vp) && (Rp = (0, Mp.tb)(wp.domain, null, Hp), !yp || "number" !== vp && "auto" === ep || (Ep = (0, Mp.M)(Xp, tp, "category")));
          var Qp = Qc(vp);
          if (!Rp || 0 === Rp.length) {
            var Jp, Bp = null !== (Jp = wp.domain) && void 0 !== Jp ? Jp : Qp;
            if (tp) {
              if (Rp = (0, Mp.M)(Xp, tp, vp), "category" === vp && yp) {
                var Np = (0, Cp.t)(Rp);
                dp && Np ? (qp = Rp, Rp = Yp()(0, lp)) : dp || (Rp = (0, Mp.lb)(Bp, Rp, cp).reduce((function(pp, ip) {
                  return pp.indexOf(ip) >= 0 ? pp : [].concat(ec(pp), [ip])
                }), []))
              } else if ("category" === vp) Rp = dp ? Rp.filter((function(pp) {
                return "" !== pp && !Ip()(pp)
              })) : (0, Mp.lb)(Bp, Rp, cp).reduce((function(pp, ip) {
                return pp.indexOf(ip) >= 0 || "" === ip || Ip()(ip) ? pp : [].concat(ec(pp), [ip])
              }), []);
              else if ("number" === vp) {
                var Tp = (0, Mp.ob)(Xp, Op.filter((function(pp) {
                  var ip, cp, Op = Sp in pp.props ? pp.props[Sp] : null === (ip = pp.type.defaultProps) || void 0 === ip ? void 0 : ip[Sp],
                    op = "hide" in pp.props ? pp.props.hide : null === (cp = pp.type.defaultProps) || void 0 === cp ? void 0 : cp.hide;
                  return Op === mp && (kp || !op)
                })), tp, op, Ap);
                Tp && (Rp = Tp)
              }!yp || "number" !== vp && "auto" === ep || (Ep = (0, Mp.M)(Xp, tp, "category"))
            } else Rp = yp ? Yp()(0, lp) : xp && xp[mp] && xp[mp].hasStack && "number" === vp ? "expand" === Wp ? [0, 1] : (0, Mp.R)(xp[mp].stackGroups, Lp, Dp) : (0, Mp.Q)(Xp, Op.filter((function(pp) {
              var ip = Sp in pp.props ? pp.props[Sp] : pp.type.defaultProps[Sp],
                cp = "hide" in pp.props ? pp.props.hide : pp.type.defaultProps.hide;
              return ip === mp && (kp || !cp)
            })), vp, Ap, !0);
            if ("number" === vp) Rp = Ei(Pp, Rp, mp, op, jp), Bp && (Rp = (0, Mp.tb)(Bp, Rp, Hp));
            else if ("category" === vp && Bp) {
              var fp = Bp;
              Rp.every((function(pp) {
                return fp.indexOf(pp) >= 0
              })) && (Rp = fp)
            }
          }
          return mc(mc({}, ip), {}, Rc({}, mp, mc(mc({}, wp), {}, {
            axisType: op,
            domain: Rp,
            categoricalDomain: Ep,
            duplicateDomain: qp,
            originalDomain: null !== (Up = wp.domain) && void 0 !== Up ? Up : Qp,
            isCategorical: yp,
            layout: Ap
          })))
        }), {})
      },
      Tc = function(pp, ip) {
        var cp = ip.axisType,
          Op = void 0 === cp ? "xAxis" : cp,
          op = ip.AxisComp,
          Ip = ip.graphicalItems,
          Sp = ip.stackGroups,
          xp = ip.dataStartIndex,
          Lp = ip.dataEndIndex,
          Dp = pp.children,
          Pp = "".concat(Op, "Id"),
          Wp = (0, mp.h)(Dp, op),
          yp = {};
        return Wp && Wp.length ? yp = Nc(pp, {
          axes: Wp,
          graphicalItems: Ip,
          axisType: Op,
          axisIdKey: Pp,
          stackGroups: Sp,
          dataStartIndex: xp,
          dataEndIndex: Lp
        }) : Ip && Ip.length && (yp = function(pp, ip) {
          var cp = ip.graphicalItems,
            Op = ip.Axis,
            op = ip.axisType,
            Ip = ip.axisIdKey,
            Sp = ip.stackGroups,
            xp = ip.dataStartIndex,
            Lp = ip.dataEndIndex,
            Dp = pp.layout,
            Pp = pp.children,
            Wp = lc(pp.data, {
              graphicalItems: cp,
              dataStartIndex: xp,
              dataEndIndex: Lp
            }),
            yp = Wp.length,
            Up = (0, Mp.hb)(Dp, op),
            wp = -1;
          return cp.reduce((function(pp, ip) {
            var vp, tp = (void 0 !== ip.type.defaultProps ? mc(mc({}, ip.type.defaultProps), ip.props) : ip.props)[Ip],
              Hp = Qc("number");
            return pp[tp] ? pp : (wp++, Up ? vp = Yp()(0, yp) : Sp && Sp[tp] && Sp[tp].hasStack ? (vp = (0, Mp.R)(Sp[tp].stackGroups, xp, Lp), vp = Ei(Pp, vp, tp, op)) : (vp = (0, Mp.tb)(Hp, (0, Mp.Q)(Wp, cp.filter((function(pp) {
              var ip, cp, Op = Ip in pp.props ? pp.props[Ip] : null === (ip = pp.type.defaultProps) || void 0 === ip ? void 0 : ip[Ip],
                op = "hide" in pp.props ? pp.props.hide : null === (cp = pp.type.defaultProps) || void 0 === cp ? void 0 : cp.hide;
              return Op === tp && !op
            })), "number", Dp), Op.defaultProps.allowDataOverflow), vp = Ei(Pp, vp, tp, op)), mc(mc({}, pp), {}, Rc({}, tp, mc(mc({
              axisType: op
            }, Op.defaultProps), {}, {
              hide: !0,
              orientation: Ap()(Mc, "".concat(op, ".").concat(wp % 2), null),
              domain: vp,
              originalDomain: Hp,
              isCategorical: Up,
              layout: Dp
            }))))
          }), {})
        }(pp, {
          Axis: op,
          graphicalItems: Ip,
          axisType: Op,
          axisIdKey: Pp,
          stackGroups: Sp,
          dataStartIndex: xp,
          dataEndIndex: Lp
        })), yp
      },
      fc = function(pp) {
        var ip = pp.children,
          cp = pp.defaultShowTooltip,
          Op = (0, mp.i)(ip, Zp),
          op = 0,
          Ip = 0;
        return pp.data && 0 !== pp.data.length && (Ip = pp.data.length - 1), Op && Op.props && (Op.props.startIndex >= 0 && (op = Op.props.startIndex), Op.props.endIndex >= 0 && (Ip = Op.props.endIndex)), {
          chartX: 0,
          chartY: 0,
          dataStartIndex: op,
          dataEndIndex: Ip,
          activeTooltipIndex: -1,
          isTooltipActive: Boolean(cp)
        }
      },
      bc = function(pp) {
        return "horizontal" === pp ? {
          numericAxisName: "yAxis",
          cateAxisName: "xAxis"
        } : "vertical" === pp ? {
          numericAxisName: "xAxis",
          cateAxisName: "yAxis"
        } : "centric" === pp ? {
          numericAxisName: "radiusAxis",
          cateAxisName: "angleAxis"
        } : {
          numericAxisName: "angleAxis",
          cateAxisName: "radiusAxis"
        }
      },
      hc = function(pp, ip) {
        return "xAxis" === ip ? pp[ip].width : "yAxis" === ip ? pp[ip].height : void 0
      },
      ac = function(pp) {
        var ip = pp.chartName,
          cp = pp.GraphicalChild,
          op = pp.defaultTooltipEventType,
          Sp = void 0 === op ? "axis" : op,
          Lp = pp.validateTooltipEventTypes,
          Yp = void 0 === Lp ? ["axis"] : Lp,
          Dp = pp.axisComponents,
          Pp = pp.legendContent,
          yp = pp.formatAxisMap,
          Rp = pp.defaultProps,
          qp = function(pp, ip) {
            var cp = ip.graphicalItems,
              Op = ip.stackGroups,
              op = ip.offset,
              Sp = ip.updateId,
              xp = ip.dataStartIndex,
              Lp = ip.dataEndIndex,
              Yp = pp.barSize,
              Ap = pp.layout,
              Pp = pp.barGap,
              Wp = pp.barCategoryGap,
              yp = pp.maxBarSize,
              Up = bc(Ap),
              wp = Up.numericAxisName,
              tp = Up.cateAxisName,
              Hp = function(pp) {
                return !(!pp || !pp.length) && pp.some((function(pp) {
                  var ip = (0, mp.k)(pp && pp.type);
                  return ip && ip.indexOf("Bar") >= 0
                }))
              }(cp),
              dp = [];
            return cp.forEach((function(cp, Up) {
              var ep = lc(pp.data, {
                  graphicalItems: [cp],
                  dataStartIndex: xp,
                  dataEndIndex: Lp
                }),
                jp = void 0 !== cp.type.defaultProps ? mc(mc({}, cp.type.defaultProps), cp.props) : cp.props,
                kp = jp.dataKey,
                Rp = jp.maxBarSize,
                qp = jp["".concat(wp, "Id")],
                Cp = jp["".concat(tp, "Id")],
                Ep = Dp.reduce((function(pp, cp) {
                  var Op = ip["".concat(cp.axisType, "Map")],
                    op = jp["".concat(cp.axisType, "Id")];
                  Op && Op[op] || "zAxis" === cp.axisType || (0, vp.d)(!1);
                  var Ip = Op[op];
                  return mc(mc({}, pp), {}, Rc(Rc({}, cp.axisType, Ip), "".concat(cp.axisType, "Ticks"), (0, Mp.Z)(Ip)))
                }), {}),
                Xp = Ep[tp],
                lp = Ep["".concat(tp, "Ticks")],
                Qp = Op && Op[qp] && Op[qp].hasStack && (0, Mp.W)(cp, Op[qp].stackGroups),
                Jp = (0, mp.k)(cp.type).indexOf("Bar") >= 0,
                Bp = (0, Mp.r)(Xp, lp),
                Np = [],
                Tp = Hp && (0, Mp.x)({
                  barSize: Yp,
                  stackGroups: Op,
                  totalSize: hc(Ep, tp)
                });
              if (Jp) {
                var fp, bp, hp = Ip()(Rp) ? yp : Rp,
                  ap = null !== (fp = null !== (bp = (0, Mp.r)(Xp, lp, !0)) && void 0 !== bp ? bp : hp) && void 0 !== fp ? fp : 0;
                Np = (0, Mp.t)({
                  barGap: Pp,
                  barCategoryGap: Wp,
                  bandSize: ap !== Bp ? ap : Bp,
                  sizeList: Tp[Cp],
                  maxBarSize: hp
                }), ap !== Bp && (Np = Np.map((function(pp) {
                  return mc(mc({}, pp), {}, {
                    position: mc(mc({}, pp.position), {}, {
                      offset: pp.position.offset - ap / 2
                    })
                  })
                })))
              }
              var np = cp && cp.type && cp.type.getComposedData;
              np && dp.push({
                props: mc(mc({}, np(mc(mc({}, Ep), {}, {
                  displayedData: ep,
                  props: pp,
                  dataKey: kp,
                  item: cp,
                  bandSize: Bp,
                  barPosition: Np,
                  offset: op,
                  stackedData: Qp,
                  layout: Ap,
                  dataStartIndex: xp,
                  dataEndIndex: Lp
                }))), {}, Rc(Rc(Rc({
                  key: cp.key || "item-".concat(Up)
                }, wp, Ep[wp]), tp, Ep[tp]), "animationId", Sp)),
                childIndex: (0, mp.r)(cp, pp.children),
                item: cp
              })
            })), dp
          },
          Ep = function(pp, Op) {
            var op = pp.props,
              Ip = pp.dataStartIndex,
              Sp = pp.dataEndIndex,
              xp = pp.updateId;
            if (!(0, mp.y)({
                props: op
              })) return null;
            var Lp = op.children,
              Yp = op.layout,
              Pp = op.stackOffset,
              Up = op.data,
              wp = op.reverseStackOrder,
              vp = bc(Yp),
              tp = vp.numericAxisName,
              Hp = vp.cateAxisName,
              dp = (0, mp.h)(Lp, cp),
              jp = (0, Mp.V)(Up, dp, "".concat(tp, "Id"), "".concat(Hp, "Id"), Pp, wp),
              kp = Dp.reduce((function(pp, ip) {
                var cp = "".concat(ip.axisType, "Map");
                return mc(mc({}, pp), {}, Rc({}, cp, Tc(op, mc(mc({}, ip), {}, {
                  graphicalItems: dp,
                  stackGroups: ip.axisType === tp && jp,
                  dataStartIndex: Ip,
                  dataEndIndex: Sp
                }))))
              }), {}),
              Rp = function(pp, ip) {
                var cp = pp.props,
                  Op = pp.graphicalItems,
                  op = pp.xAxisMap,
                  Ip = void 0 === op ? {} : op,
                  Sp = pp.yAxisMap,
                  xp = void 0 === Sp ? {} : Sp,
                  Lp = cp.width,
                  Yp = cp.height,
                  Dp = cp.children,
                  Pp = cp.margin || {},
                  Wp = (0, mp.i)(Dp, Zp),
                  yp = (0, mp.i)(Dp, ep.e),
                  Up = Object.keys(xp).reduce((function(pp, ip) {
                    var cp = xp[ip],
                      Op = cp.orientation;
                    return cp.mirror || cp.hide ? pp : mc(mc({}, pp), {}, Rc({}, Op, pp[Op] + cp.width))
                  }), {
                    left: Pp.left || 0,
                    right: Pp.right || 0
                  }),
                  wp = Object.keys(Ip).reduce((function(pp, ip) {
                    var cp = Ip[ip],
                      Op = cp.orientation;
                    return cp.mirror || cp.hide ? pp : mc(mc({}, pp), {}, Rc({}, Op, Ap()(pp, "".concat(Op)) + cp.height))
                  }), {
                    top: Pp.top || 0,
                    bottom: Pp.bottom || 0
                  }),
                  vp = mc(mc({}, wp), Up),
                  tp = vp.bottom;
                Wp && (vp.bottom += Wp.props.height || Zp.defaultProps.height), yp && ip && (vp = (0, Mp.d)(vp, Op, cp, ip));
                var Hp = Lp - vp.left - vp.right,
                  dp = Yp - vp.top - vp.bottom;
                return mc(mc({
                  brushBottom: tp
                }, vp), {}, {
                  width: Math.max(Hp, 0),
                  height: Math.max(dp, 0)
                })
              }(mc(mc({}, kp), {}, {
                props: op,
                graphicalItems: dp
              }), null === Op || void 0 === Op ? void 0 : Op.legendBBox);
            Object.keys(kp).forEach((function(pp) {
              kp[pp] = yp(op, kp[pp], Rp, pp.replace("Map", ""), ip)
            }));
            var Ep = function(pp) {
                var ip = (0, Cp.k)(pp),
                  cp = (0, Mp.Z)(ip, !1, !0);
                return {
                  tooltipTicks: cp,
                  orderedTooltipTicks: Wp()(cp, (function(pp) {
                    return pp.coordinate
                  })),
                  tooltipAxis: ip,
                  tooltipAxisBandSize: (0, Mp.r)(ip, cp)
                }
              }(kp["".concat(Hp, "Map")]),
              Xp = qp(op, mc(mc({}, kp), {}, {
                dataStartIndex: Ip,
                dataEndIndex: Sp,
                updateId: xp,
                graphicalItems: dp,
                stackGroups: jp,
                offset: Rp
              }));
            return mc(mc({
              formattedGraphicalItems: Xp,
              graphicalItems: dp,
              offset: Rp,
              stackGroups: jp
            }, Ep), kp)
          },
          Xp = function(pp) {
            function cp(pp) {
              var op, Sp, Lp;
              return function(pp, ip) {
                if (!(pp instanceof ip)) throw new TypeError("Cannot call a class as a function")
              }(this, cp), Rc(Lp = vc(this, cp, [pp]), "eventEmitterSymbol", Symbol("rechartsEventEmitter")), Rc(Lp, "accessibilityManager", new ni), Rc(Lp, "handleLegendBBoxUpdate", (function(pp) {
                if (pp) {
                  var ip = Lp.state,
                    cp = ip.dataStartIndex,
                    Op = ip.dataEndIndex,
                    op = ip.updateId;
                  Lp.setState(mc({
                    legendBBox: pp
                  }, Ep({
                    props: Lp.props,
                    dataStartIndex: cp,
                    dataEndIndex: Op,
                    updateId: op
                  }, mc(mc({}, Lp.state), {}, {
                    legendBBox: pp
                  }))))
                }
              })), Rc(Lp, "handleReceiveSyncEvent", (function(pp, ip, cp) {
                if (Lp.props.syncId === pp) {
                  if (cp === Lp.eventEmitterSymbol && "function" !== typeof Lp.props.syncMethod) return;
                  Lp.applySyncEvent(ip)
                }
              })), Rc(Lp, "handleBrushChange", (function(pp) {
                var ip = pp.startIndex,
                  cp = pp.endIndex;
                if (ip !== Lp.state.dataStartIndex || cp !== Lp.state.dataEndIndex) {
                  var Op = Lp.state.updateId;
                  Lp.setState((function() {
                    return mc({
                      dataStartIndex: ip,
                      dataEndIndex: cp
                    }, Ep({
                      props: Lp.props,
                      dataStartIndex: ip,
                      dataEndIndex: cp,
                      updateId: Op
                    }, Lp.state))
                  })), Lp.triggerSyncEvent({
                    dataStartIndex: ip,
                    dataEndIndex: cp
                  })
                }
              })), Rc(Lp, "handleMouseEnter", (function(pp) {
                var ip = Lp.getMouseInfo(pp);
                if (ip) {
                  var cp = mc(mc({}, ip), {}, {
                    isTooltipActive: !0
                  });
                  Lp.setState(cp), Lp.triggerSyncEvent(cp);
                  var Op = Lp.props.onMouseEnter;
                  xp()(Op) && Op(cp, pp)
                }
              })), Rc(Lp, "triggeredAfterMouseMove", (function(pp) {
                var ip = Lp.getMouseInfo(pp),
                  cp = ip ? mc(mc({}, ip), {}, {
                    isTooltipActive: !0
                  }) : {
                    isTooltipActive: !1
                  };
                Lp.setState(cp), Lp.triggerSyncEvent(cp);
                var Op = Lp.props.onMouseMove;
                xp()(Op) && Op(cp, pp)
              })), Rc(Lp, "handleItemMouseEnter", (function(pp) {
                Lp.setState((function() {
                  return {
                    isTooltipActive: !0,
                    activeItem: pp,
                    activePayload: pp.tooltipPayload,
                    activeCoordinate: pp.tooltipPosition || {
                      x: pp.cx,
                      y: pp.cy
                    }
                  }
                }))
              })), Rc(Lp, "handleItemMouseLeave", (function() {
                Lp.setState((function() {
                  return {
                    isTooltipActive: !1
                  }
                }))
              })), Rc(Lp, "handleMouseMove", (function(pp) {
                pp.persist(), Lp.throttleTriggeredAfterMouseMove(pp)
              })), Rc(Lp, "handleMouseLeave", (function(pp) {
                Lp.throttleTriggeredAfterMouseMove.cancel();
                var ip = {
                  isTooltipActive: !1
                };
                Lp.setState(ip), Lp.triggerSyncEvent(ip);
                var cp = Lp.props.onMouseLeave;
                xp()(cp) && cp(ip, pp)
              })), Rc(Lp, "handleOuterEvent", (function(pp) {
                var ip, cp = (0, mp.m)(pp),
                  Op = Ap()(Lp.props, "".concat(cp));
                cp && xp()(Op) && Op(null !== (ip = /.*touch.*/i.test(cp) ? Lp.getMouseInfo(pp.changedTouches[0]) : Lp.getMouseInfo(pp)) && void 0 !== ip ? ip : {}, pp)
              })), Rc(Lp, "handleClick", (function(pp) {
                var ip = Lp.getMouseInfo(pp);
                if (ip) {
                  var cp = mc(mc({}, ip), {}, {
                    isTooltipActive: !0
                  });
                  Lp.setState(cp), Lp.triggerSyncEvent(cp);
                  var Op = Lp.props.onClick;
                  xp()(Op) && Op(cp, pp)
                }
              })), Rc(Lp, "handleMouseDown", (function(pp) {
                var ip = Lp.props.onMouseDown;
                xp()(ip) && ip(Lp.getMouseInfo(pp), pp)
              })), Rc(Lp, "handleMouseUp", (function(pp) {
                var ip = Lp.props.onMouseUp;
                xp()(ip) && ip(Lp.getMouseInfo(pp), pp)
              })), Rc(Lp, "handleTouchMove", (function(pp) {
                null != pp.changedTouches && pp.changedTouches.length > 0 && Lp.throttleTriggeredAfterMouseMove(pp.changedTouches[0])
              })), Rc(Lp, "handleTouchStart", (function(pp) {
                null != pp.changedTouches && pp.changedTouches.length > 0 && Lp.handleMouseDown(pp.changedTouches[0])
              })), Rc(Lp, "handleTouchEnd", (function(pp) {
                null != pp.changedTouches && pp.changedTouches.length > 0 && Lp.handleMouseUp(pp.changedTouches[0])
              })), Rc(Lp, "handleDoubleClick", (function(pp) {
                var ip = Lp.props.onDoubleClick;
                xp()(ip) && ip(Lp.getMouseInfo(pp), pp)
              })), Rc(Lp, "handleContextMenu", (function(pp) {
                var ip = Lp.props.onContextMenu;
                xp()(ip) && ip(Lp.getMouseInfo(pp), pp)
              })), Rc(Lp, "triggerSyncEvent", (function(pp) {
                void 0 !== Lp.props.syncId && Ji.emit(Bi, Lp.props.syncId, pp, Lp.eventEmitterSymbol)
              })), Rc(Lp, "applySyncEvent", (function(pp) {
                var ip = Lp.props,
                  cp = ip.layout,
                  Op = ip.syncMethod,
                  op = Lp.state.updateId,
                  Ip = pp.dataStartIndex,
                  Sp = pp.dataEndIndex;
                if (void 0 !== pp.dataStartIndex || void 0 !== pp.dataEndIndex) Lp.setState(mc({
                  dataStartIndex: Ip,
                  dataEndIndex: Sp
                }, Ep({
                  props: Lp.props,
                  dataStartIndex: Ip,
                  dataEndIndex: Sp,
                  updateId: op
                }, Lp.state)));
                else if (void 0 !== pp.activeTooltipIndex) {
                  var xp = pp.chartX,
                    Yp = pp.chartY,
                    Dp = pp.activeTooltipIndex,
                    Ap = Lp.state,
                    Pp = Ap.offset,
                    Wp = Ap.tooltipTicks;
                  if (!Pp) return;
                  if ("function" === typeof Op) Dp = Op(Wp, pp);
                  else if ("value" === Op) {
                    Dp = -1;
                    for (var yp = 0; yp < Wp.length; yp++)
                      if (Wp[yp].value === pp.activeLabel) {
                        Dp = yp;
                        break
                      }
                  }
                  var Up = mc(mc({}, Pp), {}, {
                      x: Pp.left,
                      y: Pp.top
                    }),
                    wp = Math.min(xp, Up.x + Up.width),
                    vp = Math.min(Yp, Up.y + Up.height),
                    tp = Wp[Dp] && Wp[Dp].value,
                    Hp = Jc(Lp.state, Lp.props.data, Dp),
                    dp = Wp[Dp] ? {
                      x: "horizontal" === cp ? Wp[Dp].coordinate : wp,
                      y: "horizontal" === cp ? vp : Wp[Dp].coordinate
                    } : Ec;
                  Lp.setState(mc(mc({}, pp), {}, {
                    activeLabel: tp,
                    activeCoordinate: dp,
                    activePayload: Hp,
                    activeTooltipIndex: Dp
                  }))
                } else Lp.setState(pp)
              })), Rc(Lp, "renderCursor", (function(pp) {
                var cp, op = Lp.state,
                  Ip = op.isTooltipActive,
                  Sp = op.activeCoordinate,
                  xp = op.activePayload,
                  Yp = op.offset,
                  Dp = op.activeTooltipIndex,
                  Ap = op.tooltipAxisBandSize,
                  Pp = Lp.getTooltipEventType(),
                  Wp = null !== (cp = pp.props.active) && void 0 !== cp ? cp : Ip,
                  yp = Lp.props.layout,
                  Up = pp.key || "_recharts-cursor";
                return Op.createElement(Lc, {
                  key: Up,
                  activeCoordinate: Sp,
                  activePayload: xp,
                  activeTooltipIndex: Dp,
                  chartName: ip,
                  element: pp,
                  isActive: Wp,
                  layout: yp,
                  offset: Yp,
                  tooltipAxisBandSize: Ap,
                  tooltipEventType: Pp
                })
              })), Rc(Lp, "renderPolarAxis", (function(pp, ip, cp) {
                var op = Ap()(pp, "type.axisType"),
                  Ip = Ap()(Lp.state, "".concat(op, "Map")),
                  Sp = pp.type.defaultProps,
                  xp = void 0 !== Sp ? mc(mc({}, Sp), pp.props) : pp.props,
                  Yp = Ip && Ip[xp["".concat(op, "Id")]];
                return (0, Op.cloneElement)(pp, mc(mc({}, Yp), {}, {
                  className: (0, wp.d)(op, Yp.className),
                  key: pp.key || "".concat(ip, "-").concat(cp),
                  ticks: (0, Mp.Z)(Yp, !0)
                }))
              })), Rc(Lp, "renderPolarGrid", (function(pp) {
                var ip = pp.props,
                  cp = ip.radialLines,
                  op = ip.polarAngles,
                  Ip = ip.polarRadius,
                  Sp = Lp.state,
                  xp = Sp.radiusAxisMap,
                  Yp = Sp.angleAxisMap,
                  Dp = (0, Cp.k)(xp),
                  Ap = (0, Cp.k)(Yp),
                  Pp = Ap.cx,
                  Wp = Ap.cy,
                  yp = Ap.innerRadius,
                  Up = Ap.outerRadius;
                return (0, Op.cloneElement)(pp, {
                  polarAngles: Array.isArray(op) ? op : (0, Mp.Z)(Ap, !0).map((function(pp) {
                    return pp.coordinate
                  })),
                  polarRadius: Array.isArray(Ip) ? Ip : (0, Mp.Z)(Dp, !0).map((function(pp) {
                    return pp.coordinate
                  })),
                  cx: Pp,
                  cy: Wp,
                  innerRadius: yp,
                  outerRadius: Up,
                  key: pp.key || "polar-grid",
                  radialLines: cp
                })
              })), Rc(Lp, "renderLegend", (function() {
                var pp = Lp.state.formattedGraphicalItems,
                  ip = Lp.props,
                  cp = ip.children,
                  op = ip.width,
                  Ip = ip.height,
                  Sp = Lp.props.margin || {},
                  xp = op - (Sp.left || 0) - (Sp.right || 0),
                  Yp = (0, sp.c)({
                    children: cp,
                    formattedGraphicalItems: pp,
                    legendWidth: xp,
                    legendContent: Pp
                  });
                if (!Yp) return null;
                var Dp = Yp.item,
                  Ap = Uc(Yp, Dc);
                return (0, Op.cloneElement)(Dp, mc(mc({}, Ap), {}, {
                  chartWidth: op,
                  chartHeight: Ip,
                  margin: Sp,
                  onBBoxUpdate: Lp.handleLegendBBoxUpdate
                }))
              })), Rc(Lp, "renderTooltip", (function() {
                var pp, ip = Lp.props,
                  cp = ip.children,
                  op = ip.accessibilityLayer,
                  Ip = (0, mp.i)(cp, dp.d);
                if (!Ip) return null;
                var Sp = Lp.state,
                  xp = Sp.isTooltipActive,
                  Yp = Sp.activeCoordinate,
                  Dp = Sp.activePayload,
                  Ap = Sp.activeLabel,
                  Pp = Sp.offset,
                  Wp = null !== (pp = Ip.props.active) && void 0 !== pp ? pp : xp;
                return (0, Op.cloneElement)(Ip, {
                  viewBox: mc(mc({}, Pp), {}, {
                    x: Pp.left,
                    y: Pp.top
                  }),
                  active: Wp,
                  label: Ap,
                  payload: Wp ? Dp : [],
                  coordinate: Yp,
                  accessibilityLayer: op
                })
              })), Rc(Lp, "renderBrush", (function(pp) {
                var ip = Lp.props,
                  cp = ip.margin,
                  op = ip.data,
                  Ip = Lp.state,
                  Sp = Ip.offset,
                  xp = Ip.dataStartIndex,
                  Yp = Ip.dataEndIndex,
                  Dp = Ip.updateId;
                return (0, Op.cloneElement)(pp, {
                  key: pp.key || "_recharts-brush",
                  onChange: (0, Mp.l)(Lp.handleBrushChange, pp.props.onChange),
                  data: op,
                  x: (0, Cp.D)(pp.props.x) ? pp.props.x : Sp.left,
                  y: (0, Cp.D)(pp.props.y) ? pp.props.y : Sp.top + Sp.height + Sp.brushBottom - (cp.bottom || 0),
                  width: (0, Cp.D)(pp.props.width) ? pp.props.width : Sp.width,
                  startIndex: xp,
                  endIndex: Yp,
                  updateId: "brush-".concat(Dp)
                })
              })), Rc(Lp, "renderReferenceElement", (function(pp, ip, cp) {
                if (!pp) return null;
                var op = Lp.clipPathId,
                  Ip = Lp.state,
                  Sp = Ip.xAxisMap,
                  xp = Ip.yAxisMap,
                  Yp = Ip.offset,
                  Dp = pp.type.defaultProps || {},
                  Ap = pp.props,
                  Pp = Ap.xAxisId,
                  Wp = void 0 === Pp ? Dp.xAxisId : Pp,
                  yp = Ap.yAxisId,
                  Up = void 0 === yp ? Dp.yAxisId : yp;
                return (0, Op.cloneElement)(pp, {
                  key: pp.key || "".concat(ip, "-").concat(cp),
                  xAxis: Sp[Wp],
                  yAxis: xp[Up],
                  viewBox: {
                    x: Yp.left,
                    y: Yp.top,
                    width: Yp.width,
                    height: Yp.height
                  },
                  clipPathId: op
                })
              })), Rc(Lp, "renderActivePoints", (function(pp) {
                var ip = pp.item,
                  Op = pp.activePoint,
                  op = pp.basePoint,
                  Ip = pp.childIndex,
                  Sp = pp.isRange,
                  xp = [],
                  Lp = ip.props.key,
                  Yp = void 0 !== ip.item.type.defaultProps ? mc(mc({}, ip.item.type.defaultProps), ip.item.props) : ip.item.props,
                  Dp = Yp.activeDot,
                  Ap = mc(mc({
                    index: Ip,
                    dataKey: Yp.dataKey,
                    cx: Op.x,
                    cy: Op.y,
                    r: 4,
                    fill: (0, Mp.T)(ip.item),
                    strokeWidth: 2,
                    stroke: "#fff",
                    payload: Op.payload,
                    value: Op.value
                  }, (0, mp.d)(Dp, !1)), (0, Ni.h)(Dp));
                return xp.push(cp.renderActiveDot(Dp, Ap, "".concat(Lp, "-activePoint-").concat(Ip))), op ? xp.push(cp.renderActiveDot(Dp, mc(mc({}, Ap), {}, {
                  cx: op.x,
                  cy: op.y
                }), "".concat(Lp, "-basePoint-").concat(Ip))) : Sp && xp.push(null), xp
              })), Rc(Lp, "renderGraphicChild", (function(pp, ip, cp) {
                var op = Lp.filterFormatItem(pp, ip, cp);
                if (!op) return null;
                var Sp = Lp.getTooltipEventType(),
                  xp = Lp.state,
                  Yp = xp.isTooltipActive,
                  Dp = xp.tooltipAxis,
                  Ap = xp.activeTooltipIndex,
                  Pp = xp.activeLabel,
                  Wp = Lp.props.children,
                  yp = (0, mp.i)(Wp, dp.d),
                  Up = op.props,
                  wp = Up.points,
                  vp = Up.isRange,
                  tp = Up.baseLine,
                  Hp = void 0 !== op.item.type.defaultProps ? mc(mc({}, op.item.type.defaultProps), op.item.props) : op.item.props,
                  ep = Hp.activeDot,
                  jp = Hp.hide,
                  kp = Hp.activeBar,
                  Rp = Hp.activeShape,
                  qp = Boolean(!jp && Yp && yp && (ep || kp || Rp)),
                  Ep = {};
                "axis" !== Sp && yp && "click" === yp.props.trigger ? Ep = {
                  onClick: (0, Mp.l)(Lp.handleItemMouseEnter, pp.props.onClick)
                } : "axis" !== Sp && (Ep = {
                  onMouseLeave: (0, Mp.l)(Lp.handleItemMouseLeave, pp.props.onMouseLeave),
                  onMouseEnter: (0, Mp.l)(Lp.handleItemMouseEnter, pp.props.onMouseEnter)
                });
                var Xp = (0, Op.cloneElement)(pp, mc(mc({}, op.props), Ep));
                if (qp) {
                  if (!(Ap >= 0)) {
                    var lp, Qp = (null !== (lp = Lp.getItemByXY(Lp.state.activeCoordinate)) && void 0 !== lp ? lp : {
                        graphicalItem: Xp
                      }).graphicalItem,
                      Jp = Qp.item,
                      Bp = void 0 === Jp ? pp : Jp,
                      Np = Qp.childIndex,
                      Tp = mc(mc(mc({}, op.props), Ep), {}, {
                        activeIndex: Np
                      });
                    return [(0, Op.cloneElement)(Bp, Tp), null, null]
                  }
                  var fp, bp;
                  if (Dp.dataKey && !Dp.allowDuplicatedCategory) {
                    var hp = "function" === typeof Dp.dataKey ? function(pp) {
                      return "function" === typeof Dp.dataKey ? Dp.dataKey(pp.payload) : null
                    } : "payload.".concat(Dp.dataKey.toString());
                    fp = (0, Cp.h)(wp, hp, Pp), bp = vp && tp && (0, Cp.h)(tp, hp, Pp)
                  } else fp = null === wp || void 0 === wp ? void 0 : wp[Ap], bp = vp && tp && tp[Ap];
                  if (Rp || kp) {
                    var ap = void 0 !== pp.props.activeIndex ? pp.props.activeIndex : Ap;
                    return [(0, Op.cloneElement)(pp, mc(mc(mc({}, op.props), Ep), {}, {
                      activeIndex: ap
                    })), null, null]
                  }
                  if (!Ip()(fp)) return [Xp].concat(ec(Lp.renderActivePoints({
                    item: op,
                    activePoint: fp,
                    basePoint: bp,
                    childIndex: Ap,
                    isRange: vp
                  })))
                }
                return vp ? [Xp, null, null] : [Xp, null]
              })), Rc(Lp, "renderCustomized", (function(pp, ip, cp) {
                return (0, Op.cloneElement)(pp, mc(mc({
                  key: "recharts-customized-".concat(cp)
                }, Lp.props), Lp.state))
              })), Rc(Lp, "renderMap", {
                CartesianGrid: {
                  handler: Xc,
                  once: !0
                },
                ReferenceArea: {
                  handler: Lp.renderReferenceElement
                },
                ReferenceLine: {
                  handler: Xc
                },
                ReferenceDot: {
                  handler: Lp.renderReferenceElement
                },
                XAxis: {
                  handler: Xc
                },
                YAxis: {
                  handler: Xc
                },
                Brush: {
                  handler: Lp.renderBrush,
                  once: !0
                },
                Bar: {
                  handler: Lp.renderGraphicChild
                },
                Line: {
                  handler: Lp.renderGraphicChild
                },
                Area: {
                  handler: Lp.renderGraphicChild
                },
                Radar: {
                  handler: Lp.renderGraphicChild
                },
                RadialBar: {
                  handler: Lp.renderGraphicChild
                },
                Scatter: {
                  handler: Lp.renderGraphicChild
                },
                Pie: {
                  handler: Lp.renderGraphicChild
                },
                Funnel: {
                  handler: Lp.renderGraphicChild
                },
                Tooltip: {
                  handler: Lp.renderCursor,
                  once: !0
                },
                PolarGrid: {
                  handler: Lp.renderPolarGrid,
                  once: !0
                },
                PolarAngleAxis: {
                  handler: Lp.renderPolarAxis
                },
                PolarRadiusAxis: {
                  handler: Lp.renderPolarAxis
                },
                Customized: {
                  handler: Lp.renderCustomized
                }
              }), Lp.clipPathId = "".concat(null !== (op = pp.id) && void 0 !== op ? op : (0, Cp.J)("recharts"), "-clip"), Lp.throttleTriggeredAfterMouseMove = Up()(Lp.triggeredAfterMouseMove, null !== (Sp = pp.throttleDelay) && void 0 !== Sp ? Sp : 1e3 / 60), Lp.state = {}, Lp
            }
            return function(pp, ip) {
              if ("function" !== typeof ip && null !== ip) throw new TypeError("Super expression must either be null or a function");
              pp.prototype = Object.create(ip && ip.prototype, {
                constructor: {
                  value: pp,
                  writable: !0,
                  configurable: !0
                }
              }), Object.defineProperty(pp, "prototype", {
                writable: !1
              }), ip && dc(pp, ip)
            }(cp, pp), op = cp, Lp = [{
              key: "componentDidMount",
              value: function() {
                var pp, ip;
                this.addListener(), this.accessibilityManager.setDetails({
                  container: this.container,
                  offset: {
                    left: null !== (pp = this.props.margin.left) && void 0 !== pp ? pp : 0,
                    top: null !== (ip = this.props.margin.top) && void 0 !== ip ? ip : 0
                  },
                  coordinateList: this.state.tooltipTicks,
                  mouseHandlerCallback: this.triggeredAfterMouseMove,
                  layout: this.props.layout
                }), this.displayDefaultTooltip()
              }
            }, {
              key: "displayDefaultTooltip",
              value: function() {
                var pp = this.props,
                  ip = pp.children,
                  cp = pp.data,
                  Op = pp.height,
                  op = pp.layout,
                  Ip = (0, mp.i)(ip, dp.d);
                if (Ip) {
                  var Sp = Ip.props.defaultIndex;
                  if (!("number" !== typeof Sp || Sp < 0 || Sp > this.state.tooltipTicks.length - 1)) {
                    var xp = this.state.tooltipTicks[Sp] && this.state.tooltipTicks[Sp].value,
                      Lp = Jc(this.state, cp, Sp, xp),
                      Yp = this.state.tooltipTicks[Sp].coordinate,
                      Dp = (this.state.offset.top + Op) / 2,
                      Ap = "horizontal" === op ? {
                        x: Yp,
                        y: Dp
                      } : {
                        y: Yp,
                        x: Dp
                      },
                      Pp = this.state.formattedGraphicalItems.find((function(pp) {
                        return "Scatter" === pp.item.type.name
                      }));
                    Pp && (Ap = mc(mc({}, Ap), Pp.props.points[Sp].tooltipPosition), Lp = Pp.props.points[Sp].tooltipPayload);
                    var Wp = {
                      activeTooltipIndex: Sp,
                      isTooltipActive: !0,
                      activeLabel: xp,
                      activePayload: Lp,
                      activeCoordinate: Ap
                    };
                    this.setState(Wp), this.renderCursor(Ip), this.accessibilityManager.setIndex(Sp)
                  }
                }
              }
            }, {
              key: "getSnapshotBeforeUpdate",
              value: function(pp, ip) {
                return this.props.accessibilityLayer ? (this.state.tooltipTicks !== ip.tooltipTicks && this.accessibilityManager.setDetails({
                  coordinateList: this.state.tooltipTicks
                }), this.props.layout !== pp.layout && this.accessibilityManager.setDetails({
                  layout: this.props.layout
                }), this.props.margin !== pp.margin && this.accessibilityManager.setDetails({
                  offset: {
                    left: null !== (cp = this.props.margin.left) && void 0 !== cp ? cp : 0,
                    top: null !== (Op = this.props.margin.top) && void 0 !== Op ? Op : 0
                  }
                }), null) : null;
                var cp, Op
              }
            }, {
              key: "componentDidUpdate",
              value: function(pp) {
                (0, mp.p)([(0, mp.i)(pp.children, dp.d)], [(0, mp.i)(this.props.children, dp.d)]) || this.displayDefaultTooltip()
              }
            }, {
              key: "componentWillUnmount",
              value: function() {
                this.removeListener(), this.throttleTriggeredAfterMouseMove.cancel()
              }
            }, {
              key: "getTooltipEventType",
              value: function() {
                var pp = (0, mp.i)(this.props.children, dp.d);
                if (pp && "boolean" === typeof pp.props.shared) {
                  var ip = pp.props.shared ? "axis" : "item";
                  return Yp.indexOf(ip) >= 0 ? ip : Sp
                }
                return Sp
              }
            }, {
              key: "getMouseInfo",
              value: function(pp) {
                if (!this.container) return null;
                var ip = this.container,
                  cp = ip.getBoundingClientRect(),
                  Op = (0, zp.c)(cp),
                  op = {
                    chartX: Math.round(pp.pageX - Op.left),
                    chartY: Math.round(pp.pageY - Op.top)
                  },
                  Ip = cp.width / ip.offsetWidth || 1,
                  Sp = this.inRange(op.chartX, op.chartY, Ip);
                if (!Sp) return null;
                var xp = this.state,
                  Lp = xp.xAxisMap,
                  Yp = xp.yAxisMap,
                  Dp = this.getTooltipEventType(),
                  Ap = Bc(this.state, this.props.data, this.props.layout, Sp);
                if ("axis" !== Dp && Lp && Yp) {
                  var Pp = (0, Cp.k)(Lp).scale,
                    Wp = (0, Cp.k)(Yp).scale,
                    yp = Pp && Pp.invert ? Pp.invert(op.chartX) : null,
                    Up = Wp && Wp.invert ? Wp.invert(op.chartY) : null;
                  return mc(mc({}, op), {}, {
                    xValue: yp,
                    yValue: Up
                  }, Ap)
                }
                return Ap ? mc(mc({}, op), Ap) : null
              }
            }, {
              key: "inRange",
              value: function(pp, ip) {
                var cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                  Op = this.props.layout,
                  op = pp / cp,
                  Ip = ip / cp;
                if ("horizontal" === Op || "vertical" === Op) {
                  var Sp = this.state.offset;
                  return op >= Sp.left && op <= Sp.left + Sp.width && Ip >= Sp.top && Ip <= Sp.top + Sp.height ? {
                    x: op,
                    y: Ip
                  } : null
                }
                var xp = this.state,
                  Lp = xp.angleAxisMap,
                  Yp = xp.radiusAxisMap;
                if (Lp && Yp) {
                  var Dp = (0, Cp.k)(Lp);
                  return (0, Xi.f)({
                    x: op,
                    y: Ip
                  }, Dp)
                }
                return null
              }
            }, {
              key: "parseEventsOfWrapper",
              value: function() {
                var pp = this.props.children,
                  ip = this.getTooltipEventType(),
                  cp = (0, mp.i)(pp, dp.d),
                  Op = {};
                return cp && "axis" === ip && (Op = "click" === cp.props.trigger ? {
                  onClick: this.handleClick
                } : {
                  onMouseEnter: this.handleMouseEnter,
                  onDoubleClick: this.handleDoubleClick,
                  onMouseMove: this.handleMouseMove,
                  onMouseLeave: this.handleMouseLeave,
                  onTouchMove: this.handleTouchMove,
                  onTouchStart: this.handleTouchStart,
                  onTouchEnd: this.handleTouchEnd,
                  onContextMenu: this.handleContextMenu
                }), mc(mc({}, (0, Ni.h)(this.props, this.handleOuterEvent)), Op)
              }
            }, {
              key: "addListener",
              value: function() {
                Ji.on(Bi, this.handleReceiveSyncEvent)
              }
            }, {
              key: "removeListener",
              value: function() {
                Ji.removeListener(Bi, this.handleReceiveSyncEvent)
              }
            }, {
              key: "filterFormatItem",
              value: function(pp, ip, cp) {
                for (var Op = this.state.formattedGraphicalItems, op = 0, Ip = Op.length; op < Ip; op++) {
                  var Sp = Op[op];
                  if (Sp.item === pp || Sp.props.key === pp.key || ip === (0, mp.k)(Sp.item.type) && cp === Sp.childIndex) return Sp
                }
                return null
              }
            }, {
              key: "renderClipPath",
              value: function() {
                var pp = this.clipPathId,
                  ip = this.state.offset,
                  cp = ip.left,
                  op = ip.top,
                  Ip = ip.height,
                  Sp = ip.width;
                return Op.createElement("defs", null, Op.createElement("clipPath", {
                  id: pp
                }, Op.createElement("rect", {
                  x: cp,
                  y: op,
                  height: Ip,
                  width: Sp
                })))
              }
            }, {
              key: "getXScales",
              value: function() {
                var pp = this.state.xAxisMap;
                return pp ? Object.entries(pp).reduce((function(pp, ip) {
                  var cp = yc(ip, 2),
                    Op = cp[0],
                    op = cp[1];
                  return mc(mc({}, pp), {}, Rc({}, Op, op.scale))
                }), {}) : null
              }
            }, {
              key: "getYScales",
              value: function() {
                var pp = this.state.yAxisMap;
                return pp ? Object.entries(pp).reduce((function(pp, ip) {
                  var cp = yc(ip, 2),
                    Op = cp[0],
                    op = cp[1];
                  return mc(mc({}, pp), {}, Rc({}, Op, op.scale))
                }), {}) : null
              }
            }, {
              key: "getXScaleByAxisId",
              value: function(pp) {
                var ip;
                return null === (ip = this.state.xAxisMap) || void 0 === ip || null === (ip = ip[pp]) || void 0 === ip ? void 0 : ip.scale
              }
            }, {
              key: "getYScaleByAxisId",
              value: function(pp) {
                var ip;
                return null === (ip = this.state.yAxisMap) || void 0 === ip || null === (ip = ip[pp]) || void 0 === ip ? void 0 : ip.scale
              }
            }, {
              key: "getItemByXY",
              value: function(pp) {
                var ip = this.state,
                  cp = ip.formattedGraphicalItems,
                  Op = ip.activeItem;
                if (cp && cp.length)
                  for (var op = 0, Ip = cp.length; op < Ip; op++) {
                    var Sp = cp[op],
                      xp = Sp.props,
                      Lp = Sp.item,
                      Yp = void 0 !== Lp.type.defaultProps ? mc(mc({}, Lp.type.defaultProps), Lp.props) : Lp.props,
                      Dp = (0, mp.k)(Lp.type);
                    if ("Bar" === Dp) {
                      var Ap = (xp.data || []).find((function(ip) {
                        return (0, kp.g)(pp, ip)
                      }));
                      if (Ap) return {
                        graphicalItem: Sp,
                        payload: Ap
                      }
                    } else if ("RadialBar" === Dp) {
                      var Pp = (xp.data || []).find((function(ip) {
                        return (0, Xi.f)(pp, ip)
                      }));
                      if (Pp) return {
                        graphicalItem: Sp,
                        payload: Pp
                      }
                    } else if ((0, Fi.h)(Sp, Op) || (0, Fi.i)(Sp, Op) || (0, Fi.l)(Sp, Op)) {
                      var Wp = (0, Fi.f)({
                          graphicalItem: Sp,
                          activeTooltipItem: Op,
                          itemData: Yp.data
                        }),
                        yp = void 0 === Yp.activeIndex ? Wp : Yp.activeIndex;
                      return {
                        graphicalItem: mc(mc({}, Sp), {}, {
                          childIndex: yp
                        }),
                        payload: (0, Fi.l)(Sp, Op) ? Yp.data[Wp] : Sp.props.data[Wp]
                      }
                    }
                  }
                return null
              }
            }, {
              key: "render",
              value: function() {
                var pp = this;
                if (!(0, mp.y)(this)) return null;
                var ip, cp, op = this.props,
                  Ip = op.children,
                  Sp = op.className,
                  xp = op.width,
                  Lp = op.height,
                  Yp = op.style,
                  Dp = op.compact,
                  Ap = op.title,
                  Pp = op.desc,
                  Wp = Uc(op, Ac),
                  yp = (0, mp.d)(Wp, !1);
                if (Dp) return Op.createElement(Yc.b, {
                  state: this.state,
                  width: this.props.width,
                  height: this.props.height,
                  clipPathId: this.clipPathId
                }, Op.createElement(tp.c, Wc({}, yp, {
                  width: xp,
                  height: Lp,
                  title: Ap,
                  desc: Pp
                }), this.renderClipPath(), (0, mp.u)(Ip, this.renderMap)));
                this.props.accessibilityLayer && (yp.tabIndex = null !== (ip = this.props.tabIndex) && void 0 !== ip ? ip : 0, yp.role = null !== (cp = this.props.role) && void 0 !== cp ? cp : "application", yp.onKeyDown = function(ip) {
                  pp.accessibilityManager.keyboardEvent(ip)
                }, yp.onFocus = function() {
                  pp.accessibilityManager.focus()
                });
                var Up = this.parseEventsOfWrapper();
                return Op.createElement(Yc.b, {
                  state: this.state,
                  width: this.props.width,
                  height: this.props.height,
                  clipPathId: this.clipPathId
                }, Op.createElement("div", Wc({
                  className: (0, wp.d)("recharts-wrapper", Sp),
                  style: mc({
                    position: "relative",
                    cursor: "default",
                    width: xp,
                    height: Lp
                  }, Yp)
                }, Up, {
                  ref: function(ip) {
                    pp.container = ip
                  }
                }), Op.createElement(tp.c, Wc({}, yp, {
                  width: xp,
                  height: Lp,
                  title: Ap,
                  desc: Pp,
                  style: Cc
                }), this.renderClipPath(), (0, mp.u)(Ip, this.renderMap)), this.renderLegend(), this.renderTooltip()))
              }
            }], Lp && wc(op.prototype, Lp), Dp && wc(op, Dp), Object.defineProperty(op, "prototype", {
              writable: !1
            }), op;
            var op, Lp, Dp
          }(Op.Component);
        Rc(Xp, "displayName", ip), Rc(Xp, "defaultProps", mc({
          layout: "horizontal",
          stackOffset: "none",
          barCategoryGap: "10%",
          barGap: 4,
          margin: {
            top: 5,
            right: 5,
            bottom: 5,
            left: 5
          },
          reverseStackOrder: !1,
          syncMethod: "index"
        }, Rp)), Rc(Xp, "getDerivedStateFromProps", (function(pp, ip) {
          var cp = pp.dataKey,
            Op = pp.data,
            op = pp.children,
            Sp = pp.width,
            xp = pp.height,
            Lp = pp.layout,
            Yp = pp.stackOffset,
            Dp = pp.margin,
            Ap = ip.dataStartIndex,
            Pp = ip.dataEndIndex;
          if (void 0 === ip.updateId) {
            var Wp = fc(pp);
            return mc(mc(mc({}, Wp), {}, {
              updateId: 0
            }, Ep(mc(mc({
              props: pp
            }, Wp), {}, {
              updateId: 0
            }), ip)), {}, {
              prevDataKey: cp,
              prevData: Op,
              prevWidth: Sp,
              prevHeight: xp,
              prevLayout: Lp,
              prevStackOffset: Yp,
              prevMargin: Dp,
              prevChildren: op
            })
          }
          if (cp !== ip.prevDataKey || Op !== ip.prevData || Sp !== ip.prevWidth || xp !== ip.prevHeight || Lp !== ip.prevLayout || Yp !== ip.prevStackOffset || !(0, li.b)(Dp, ip.prevMargin)) {
            var yp = fc(pp),
              Up = {
                chartX: ip.chartX,
                chartY: ip.chartY,
                isTooltipActive: ip.isTooltipActive
              },
              wp = mc(mc({}, Bc(ip, Op, Lp)), {}, {
                updateId: ip.updateId + 1
              }),
              vp = mc(mc(mc({}, yp), Up), wp);
            return mc(mc(mc({}, vp), Ep(mc({
              props: pp
            }, vp), ip)), {}, {
              prevDataKey: cp,
              prevData: Op,
              prevWidth: Sp,
              prevHeight: xp,
              prevLayout: Lp,
              prevStackOffset: Yp,
              prevMargin: Dp,
              prevChildren: op
            })
          }
          if (!(0, mp.p)(op, ip.prevChildren)) {
            var tp, Hp, dp, ep, jp = (0, mp.i)(op, Zp),
              kp = jp && null !== (tp = null === (Hp = jp.props) || void 0 === Hp ? void 0 : Hp.startIndex) && void 0 !== tp ? tp : Ap,
              Rp = jp && null !== (dp = null === (ep = jp.props) || void 0 === ep ? void 0 : ep.endIndex) && void 0 !== dp ? dp : Pp,
              qp = kp !== Ap || Rp !== Pp,
              Mp = !Ip()(Op) && !qp ? ip.updateId : ip.updateId + 1;
            return mc(mc({
              updateId: Mp
            }, Ep(mc(mc({
              props: pp
            }, ip), {}, {
              updateId: Mp,
              dataStartIndex: kp,
              dataEndIndex: Rp
            }), ip)), {}, {
              prevChildren: op,
              dataStartIndex: kp,
              dataEndIndex: Rp
            })
          }
          return null
        })), Rc(Xp, "renderActiveDot", (function(pp, ip, cp) {
          var op;
          return op = (0, Op.isValidElement)(pp) ? (0, Op.cloneElement)(pp, ip) : xp()(pp) ? pp(ip) : Op.createElement(jp.c, ip), Op.createElement(Hp.b, {
            className: "recharts-active-dot",
            key: cp
          }, op)
        }));
        var lp = (0, Op.forwardRef)((function(pp, ip) {
          return Op.createElement(Xp, Wc({}, pp, {
            ref: ip
          }))
        }));
        return lp.displayName = Xp.displayName, lp
      }
  },
  6410: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Op
    });
    var Op = function(pp) {
      return null
    };
    Op.displayName = "Cell"
  },
  6352: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Ep
    });
    var Op = cp(62),
      op = cp(5575),
      Ip = cp.n(op),
      Sp = cp(5405),
      xp = cp.n(Sp),
      Lp = cp(5214),
      Yp = cp.n(Lp),
      Dp = cp(5203),
      Ap = cp(6262),
      Pp = cp(5588),
      Wp = cp(5299),
      yp = cp(6357);

    function Up(pp) {
      return Up = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
        return typeof pp
      } : function(pp) {
        return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
      }, Up(pp)
    }
    var wp = ["offset"];

    function vp(pp) {
      return function(pp) {
        if (Array.isArray(pp)) return tp(pp)
      }(pp) || function(pp) {
        if ("undefined" !== typeof Symbol && null != pp[Symbol.iterator] || null != pp["@@iterator"]) return Array.from(pp)
      }(pp) || function(pp, ip) {
        if (!pp) return;
        if ("string" === typeof pp) return tp(pp, ip);
        var cp = Object.prototype.toString.call(pp).slice(8, -1);
        "Object" === cp && pp.constructor && (cp = pp.constructor.name);
        if ("Map" === cp || "Set" === cp) return Array.from(pp);
        if ("Arguments" === cp || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cp)) return tp(pp, ip)
      }(pp) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function tp(pp, ip) {
      (null == ip || ip > pp.length) && (ip = pp.length);
      for (var cp = 0, Op = new Array(ip); cp < ip; cp++) Op[cp] = pp[cp];
      return Op
    }

    function Hp(pp, ip) {
      if (null == pp) return {};
      var cp, Op, op = function(pp, ip) {
        if (null == pp) return {};
        var cp = {};
        for (var Op in pp)
          if (Object.prototype.hasOwnProperty.call(pp, Op)) {
            if (ip.indexOf(Op) >= 0) continue;
            cp[Op] = pp[Op]
          } return cp
      }(pp, ip);
      if (Object.getOwnPropertySymbols) {
        var Ip = Object.getOwnPropertySymbols(pp);
        for (Op = 0; Op < Ip.length; Op++) cp = Ip[Op], ip.indexOf(cp) >= 0 || Object.prototype.propertyIsEnumerable.call(pp, cp) && (op[cp] = pp[cp])
      }
      return op
    }

    function dp(pp, ip) {
      var cp = Object.keys(pp);
      if (Object.getOwnPropertySymbols) {
        var Op = Object.getOwnPropertySymbols(pp);
        ip && (Op = Op.filter((function(ip) {
          return Object.getOwnPropertyDescriptor(pp, ip).enumerable
        }))), cp.push.apply(cp, Op)
      }
      return cp
    }

    function ep(pp) {
      for (var ip = 1; ip < arguments.length; ip++) {
        var cp = null != arguments[ip] ? arguments[ip] : {};
        ip % 2 ? dp(Object(cp), !0).forEach((function(ip) {
          jp(pp, ip, cp[ip])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : dp(Object(cp)).forEach((function(ip) {
          Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
        }))
      }
      return pp
    }

    function jp(pp, ip, cp) {
      return (ip = function(pp) {
        var ip = function(pp, ip) {
          if ("object" != Up(pp) || !pp) return pp;
          var cp = pp[Symbol.toPrimitive];
          if (void 0 !== cp) {
            var Op = cp.call(pp, ip || "default");
            if ("object" != Up(Op)) return Op;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === ip ? String : Number)(pp)
        }(pp, "string");
        return "symbol" == Up(ip) ? ip : ip + ""
      }(ip)) in pp ? Object.defineProperty(pp, ip, {
        value: cp,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : pp[ip] = cp, pp
    }

    function kp() {
      return kp = Object.assign ? Object.assign.bind() : function(pp) {
        for (var ip = 1; ip < arguments.length; ip++) {
          var cp = arguments[ip];
          for (var Op in cp) Object.prototype.hasOwnProperty.call(cp, Op) && (pp[Op] = cp[Op])
        }
        return pp
      }, kp.apply(this, arguments)
    }
    var mp = function(pp) {
        var ip = pp.value,
          cp = pp.formatter,
          Op = Ip()(pp.children) ? ip : pp.children;
        return xp()(cp) ? cp(Op) : Op
      },
      Rp = function(pp, ip, cp) {
        var op, Sp, xp = pp.position,
          Lp = pp.viewBox,
          Yp = pp.offset,
          Ap = pp.className,
          Pp = Lp,
          Up = Pp.cx,
          wp = Pp.cy,
          vp = Pp.innerRadius,
          tp = Pp.outerRadius,
          Hp = Pp.startAngle,
          dp = Pp.endAngle,
          ep = Pp.clockWise,
          jp = (vp + tp) / 2,
          mp = function(pp, ip) {
            return (0, Wp.I)(ip - pp) * Math.min(Math.abs(ip - pp), 360)
          }(Hp, dp),
          Rp = mp >= 0 ? 1 : -1;
        "insideStart" === xp ? (op = Hp + Rp * Yp, Sp = ep) : "insideEnd" === xp ? (op = dp - Rp * Yp, Sp = !ep) : "end" === xp && (op = dp + Rp * Yp, Sp = ep), Sp = mp <= 0 ? Sp : !Sp;
        var qp = (0, yp.i)(Up, wp, jp, op),
          Mp = (0, yp.i)(Up, wp, jp, op + 359 * (Sp ? 1 : -1)),
          Cp = "M".concat(qp.x, ",").concat(qp.y, "\n    A").concat(jp, ",").concat(jp, ",0,1,").concat(Sp ? 0 : 1, ",\n    ").concat(Mp.x, ",").concat(Mp.y),
          Ep = Ip()(pp.id) ? (0, Wp.J)("recharts-radial-line-") : pp.id;
        return Op.createElement("text", kp({}, cp, {
          dominantBaseline: "central",
          className: (0, Dp.d)("recharts-radial-bar-label", Ap)
        }), Op.createElement("defs", null, Op.createElement("path", {
          id: Ep,
          d: Cp
        })), Op.createElement("textPath", {
          xlinkHref: "#".concat(Ep)
        }, ip))
      },
      qp = function(pp) {
        var ip = pp.viewBox,
          cp = pp.offset,
          Op = pp.position,
          op = ip,
          Ip = op.cx,
          Sp = op.cy,
          xp = op.innerRadius,
          Lp = op.outerRadius,
          Yp = (op.startAngle + op.endAngle) / 2;
        if ("outside" === Op) {
          var Dp = (0, yp.i)(Ip, Sp, Lp + cp, Yp),
            Ap = Dp.x;
          return {
            x: Ap,
            y: Dp.y,
            textAnchor: Ap >= Ip ? "start" : "end",
            verticalAnchor: "middle"
          }
        }
        if ("center" === Op) return {
          x: Ip,
          y: Sp,
          textAnchor: "middle",
          verticalAnchor: "middle"
        };
        if ("centerTop" === Op) return {
          x: Ip,
          y: Sp,
          textAnchor: "middle",
          verticalAnchor: "start"
        };
        if ("centerBottom" === Op) return {
          x: Ip,
          y: Sp,
          textAnchor: "middle",
          verticalAnchor: "end"
        };
        var Pp = (xp + Lp) / 2,
          Wp = (0, yp.i)(Ip, Sp, Pp, Yp);
        return {
          x: Wp.x,
          y: Wp.y,
          textAnchor: "middle",
          verticalAnchor: "middle"
        }
      },
      Mp = function(pp) {
        var ip = pp.viewBox,
          cp = pp.parentViewBox,
          Op = pp.offset,
          op = pp.position,
          Ip = ip,
          Sp = Ip.x,
          xp = Ip.y,
          Lp = Ip.width,
          Dp = Ip.height,
          Ap = Dp >= 0 ? 1 : -1,
          Pp = Ap * Op,
          yp = Ap > 0 ? "end" : "start",
          Up = Ap > 0 ? "start" : "end",
          wp = Lp >= 0 ? 1 : -1,
          vp = wp * Op,
          tp = wp > 0 ? "end" : "start",
          Hp = wp > 0 ? "start" : "end";
        if ("top" === op) return ep(ep({}, {
          x: Sp + Lp / 2,
          y: xp - Ap * Op,
          textAnchor: "middle",
          verticalAnchor: yp
        }), cp ? {
          height: Math.max(xp - cp.y, 0),
          width: Lp
        } : {});
        if ("bottom" === op) return ep(ep({}, {
          x: Sp + Lp / 2,
          y: xp + Dp + Pp,
          textAnchor: "middle",
          verticalAnchor: Up
        }), cp ? {
          height: Math.max(cp.y + cp.height - (xp + Dp), 0),
          width: Lp
        } : {});
        if ("left" === op) {
          var dp = {
            x: Sp - vp,
            y: xp + Dp / 2,
            textAnchor: tp,
            verticalAnchor: "middle"
          };
          return ep(ep({}, dp), cp ? {
            width: Math.max(dp.x - cp.x, 0),
            height: Dp
          } : {})
        }
        if ("right" === op) {
          var jp = {
            x: Sp + Lp + vp,
            y: xp + Dp / 2,
            textAnchor: Hp,
            verticalAnchor: "middle"
          };
          return ep(ep({}, jp), cp ? {
            width: Math.max(cp.x + cp.width - jp.x, 0),
            height: Dp
          } : {})
        }
        var kp = cp ? {
          width: Lp,
          height: Dp
        } : {};
        return "insideLeft" === op ? ep({
          x: Sp + vp,
          y: xp + Dp / 2,
          textAnchor: Hp,
          verticalAnchor: "middle"
        }, kp) : "insideRight" === op ? ep({
          x: Sp + Lp - vp,
          y: xp + Dp / 2,
          textAnchor: tp,
          verticalAnchor: "middle"
        }, kp) : "insideTop" === op ? ep({
          x: Sp + Lp / 2,
          y: xp + Pp,
          textAnchor: "middle",
          verticalAnchor: Up
        }, kp) : "insideBottom" === op ? ep({
          x: Sp + Lp / 2,
          y: xp + Dp - Pp,
          textAnchor: "middle",
          verticalAnchor: yp
        }, kp) : "insideTopLeft" === op ? ep({
          x: Sp + vp,
          y: xp + Pp,
          textAnchor: Hp,
          verticalAnchor: Up
        }, kp) : "insideTopRight" === op ? ep({
          x: Sp + Lp - vp,
          y: xp + Pp,
          textAnchor: tp,
          verticalAnchor: Up
        }, kp) : "insideBottomLeft" === op ? ep({
          x: Sp + vp,
          y: xp + Dp - Pp,
          textAnchor: Hp,
          verticalAnchor: yp
        }, kp) : "insideBottomRight" === op ? ep({
          x: Sp + Lp - vp,
          y: xp + Dp - Pp,
          textAnchor: tp,
          verticalAnchor: yp
        }, kp) : Yp()(op) && ((0, Wp.D)(op.x) || (0, Wp.F)(op.x)) && ((0, Wp.D)(op.y) || (0, Wp.F)(op.y)) ? ep({
          x: Sp + (0, Wp.r)(op.x, Lp),
          y: xp + (0, Wp.r)(op.y, Dp),
          textAnchor: "end",
          verticalAnchor: "end"
        }, kp) : ep({
          x: Sp + Lp / 2,
          y: xp + Dp / 2,
          textAnchor: "middle",
          verticalAnchor: "middle"
        }, kp)
      },
      Cp = function(pp) {
        return "cx" in pp && (0, Wp.D)(pp.cx)
      };

    function Ep(pp) {
      var ip, cp = pp.offset,
        op = ep({
          offset: void 0 === cp ? 5 : cp
        }, Hp(pp, wp)),
        Sp = op.viewBox,
        Lp = op.position,
        Yp = op.value,
        Wp = op.children,
        yp = op.content,
        Up = op.className,
        vp = void 0 === Up ? "" : Up,
        tp = op.textBreakAll;
      if (!Sp || Ip()(Yp) && Ip()(Wp) && !(0, Op.isValidElement)(yp) && !xp()(yp)) return null;
      if ((0, Op.isValidElement)(yp)) return (0, Op.cloneElement)(yp, op);
      if (xp()(yp)) {
        if (ip = (0, Op.createElement)(yp, op), (0, Op.isValidElement)(ip)) return ip
      } else ip = mp(op);
      var dp = Cp(Sp),
        jp = (0, Pp.d)(op, !0);
      if (dp && ("insideStart" === Lp || "insideEnd" === Lp || "end" === Lp)) return Rp(op, ip, jp);
      var Ep = dp ? qp(op) : Mp(op);
      return Op.createElement(Ap.c, kp({
        className: (0, Dp.d)("recharts-label", vp)
      }, jp, Ep, {
        breakAll: tp
      }), ip)
    }
    Ep.displayName = "Label";
    var Xp = function(pp) {
      var ip = pp.cx,
        cp = pp.cy,
        Op = pp.angle,
        op = pp.startAngle,
        Ip = pp.endAngle,
        Sp = pp.r,
        xp = pp.radius,
        Lp = pp.innerRadius,
        Yp = pp.outerRadius,
        Dp = pp.x,
        Ap = pp.y,
        Pp = pp.top,
        yp = pp.left,
        Up = pp.width,
        wp = pp.height,
        vp = pp.clockWise,
        tp = pp.labelViewBox;
      if (tp) return tp;
      if ((0, Wp.D)(Up) && (0, Wp.D)(wp)) {
        if ((0, Wp.D)(Dp) && (0, Wp.D)(Ap)) return {
          x: Dp,
          y: Ap,
          width: Up,
          height: wp
        };
        if ((0, Wp.D)(Pp) && (0, Wp.D)(yp)) return {
          x: Pp,
          y: yp,
          width: Up,
          height: wp
        }
      }
      return (0, Wp.D)(Dp) && (0, Wp.D)(Ap) ? {
        x: Dp,
        y: Ap,
        width: 0,
        height: 0
      } : (0, Wp.D)(ip) && (0, Wp.D)(cp) ? {
        cx: ip,
        cy: cp,
        startAngle: op || Op || 0,
        endAngle: Ip || Op || 0,
        innerRadius: Lp || 0,
        outerRadius: Yp || xp || Sp || 0,
        clockWise: vp
      } : pp.viewBox ? pp.viewBox : {}
    };
    Ep.parseViewBox = Xp, Ep.renderCallByParent = function(pp, ip) {
      var cp = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!pp || !pp.children && cp && !pp.label) return null;
      var op = pp.children,
        Ip = Xp(pp),
        Sp = (0, Pp.h)(op, Ep).map((function(pp, cp) {
          return (0, Op.cloneElement)(pp, {
            viewBox: ip || Ip,
            key: "label-".concat(cp)
          })
        }));
      if (!cp) return Sp;
      var Lp = function(pp, ip) {
        return pp ? !0 === pp ? Op.createElement(Ep, {
          key: "label-implicit",
          viewBox: ip
        }) : (0, Wp.B)(pp) ? Op.createElement(Ep, {
          key: "label-implicit",
          viewBox: ip,
          value: pp
        }) : (0, Op.isValidElement)(pp) ? pp.type === Ep ? (0, Op.cloneElement)(pp, {
          key: "label-implicit",
          viewBox: ip
        }) : Op.createElement(Ep, {
          key: "label-implicit",
          content: pp,
          viewBox: ip
        }) : xp()(pp) ? Op.createElement(Ep, {
          key: "label-implicit",
          content: pp,
          viewBox: ip
        }) : Yp()(pp) ? Op.createElement(Ep, kp({
          viewBox: ip
        }, pp, {
          key: "label-implicit"
        })) : null : null
      }(pp.label, ip || Ip);
      return [Lp].concat(vp(Sp))
    }
  },
  6414: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Mp
    });
    var Op = cp(62),
      op = cp(5575),
      Ip = cp.n(op),
      Sp = cp(5214),
      xp = cp.n(Sp),
      Lp = cp(5405),
      Yp = cp.n(Lp),
      Dp = cp(6419),
      Ap = cp.n(Dp),
      Pp = cp(6352),
      Wp = cp(6103),
      yp = cp(5588),
      Up = cp(6266);

    function wp(pp) {
      return wp = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
        return typeof pp
      } : function(pp) {
        return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
      }, wp(pp)
    }
    var vp = ["valueAccessor"],
      tp = ["data", "dataKey", "clockWise", "id", "textBreakAll"];

    function Hp(pp) {
      return function(pp) {
        if (Array.isArray(pp)) return dp(pp)
      }(pp) || function(pp) {
        if ("undefined" !== typeof Symbol && null != pp[Symbol.iterator] || null != pp["@@iterator"]) return Array.from(pp)
      }(pp) || function(pp, ip) {
        if (!pp) return;
        if ("string" === typeof pp) return dp(pp, ip);
        var cp = Object.prototype.toString.call(pp).slice(8, -1);
        "Object" === cp && pp.constructor && (cp = pp.constructor.name);
        if ("Map" === cp || "Set" === cp) return Array.from(pp);
        if ("Arguments" === cp || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cp)) return dp(pp, ip)
      }(pp) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function dp(pp, ip) {
      (null == ip || ip > pp.length) && (ip = pp.length);
      for (var cp = 0, Op = new Array(ip); cp < ip; cp++) Op[cp] = pp[cp];
      return Op
    }

    function ep() {
      return ep = Object.assign ? Object.assign.bind() : function(pp) {
        for (var ip = 1; ip < arguments.length; ip++) {
          var cp = arguments[ip];
          for (var Op in cp) Object.prototype.hasOwnProperty.call(cp, Op) && (pp[Op] = cp[Op])
        }
        return pp
      }, ep.apply(this, arguments)
    }

    function jp(pp, ip) {
      var cp = Object.keys(pp);
      if (Object.getOwnPropertySymbols) {
        var Op = Object.getOwnPropertySymbols(pp);
        ip && (Op = Op.filter((function(ip) {
          return Object.getOwnPropertyDescriptor(pp, ip).enumerable
        }))), cp.push.apply(cp, Op)
      }
      return cp
    }

    function kp(pp) {
      for (var ip = 1; ip < arguments.length; ip++) {
        var cp = null != arguments[ip] ? arguments[ip] : {};
        ip % 2 ? jp(Object(cp), !0).forEach((function(ip) {
          mp(pp, ip, cp[ip])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : jp(Object(cp)).forEach((function(ip) {
          Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
        }))
      }
      return pp
    }

    function mp(pp, ip, cp) {
      return (ip = function(pp) {
        var ip = function(pp, ip) {
          if ("object" != wp(pp) || !pp) return pp;
          var cp = pp[Symbol.toPrimitive];
          if (void 0 !== cp) {
            var Op = cp.call(pp, ip || "default");
            if ("object" != wp(Op)) return Op;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === ip ? String : Number)(pp)
        }(pp, "string");
        return "symbol" == wp(ip) ? ip : ip + ""
      }(ip)) in pp ? Object.defineProperty(pp, ip, {
        value: cp,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : pp[ip] = cp, pp
    }

    function Rp(pp, ip) {
      if (null == pp) return {};
      var cp, Op, op = function(pp, ip) {
        if (null == pp) return {};
        var cp = {};
        for (var Op in pp)
          if (Object.prototype.hasOwnProperty.call(pp, Op)) {
            if (ip.indexOf(Op) >= 0) continue;
            cp[Op] = pp[Op]
          } return cp
      }(pp, ip);
      if (Object.getOwnPropertySymbols) {
        var Ip = Object.getOwnPropertySymbols(pp);
        for (Op = 0; Op < Ip.length; Op++) cp = Ip[Op], ip.indexOf(cp) >= 0 || Object.prototype.propertyIsEnumerable.call(pp, cp) && (op[cp] = pp[cp])
      }
      return op
    }
    var qp = function(pp) {
      return Array.isArray(pp.value) ? Ap()(pp.value) : pp.value
    };

    function Mp(pp) {
      var ip = pp.valueAccessor,
        cp = void 0 === ip ? qp : ip,
        op = Rp(pp, vp),
        Sp = op.data,
        xp = op.dataKey,
        Lp = op.clockWise,
        Yp = op.id,
        Dp = op.textBreakAll,
        Ap = Rp(op, tp);
      return Sp && Sp.length ? Op.createElement(Wp.b, {
        className: "recharts-label-list"
      }, Sp.map((function(pp, ip) {
        var op = Ip()(xp) ? cp(pp, ip) : (0, Up.fb)(pp && pp.payload, xp),
          Sp = Ip()(Yp) ? {} : {
            id: "".concat(Yp, "-").concat(ip)
          };
        return Op.createElement(Pp.e, ep({}, (0, yp.d)(pp, !0), Ap, Sp, {
          parentViewBox: pp.parentViewBox,
          value: op,
          textBreakAll: Dp,
          viewBox: Pp.e.parseViewBox(Ip()(Lp) ? pp : kp(kp({}, pp), {}, {
            clockWise: Lp
          })),
          key: "label-".concat(ip),
          index: ip
        }))
      }))) : null
    }
    Mp.displayName = "LabelList", Mp.renderCallByParent = function(pp, ip) {
      var cp = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!pp || !pp.children && cp && !pp.label) return null;
      var op = pp.children,
        Ip = (0, yp.h)(op, Mp).map((function(pp, cp) {
          return (0, Op.cloneElement)(pp, {
            data: ip,
            key: "labelList-".concat(cp)
          })
        }));
      return cp ? [function(pp, ip) {
        return pp ? !0 === pp ? Op.createElement(Mp, {
          key: "labelList-implicit",
          data: ip
        }) : Op.isValidElement(pp) || Yp()(pp) ? Op.createElement(Mp, {
          key: "labelList-implicit",
          data: ip,
          content: pp
        }) : xp()(pp) ? Op.createElement(Mp, ep({
          data: ip
        }, pp, {
          key: "labelList-implicit"
        })) : null : null
      }(pp.label, ip)].concat(Hp(Ip)) : Ip
    }
  },
  6183: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => bp
    });
    var Op = cp(62),
      op = cp(5405),
      Ip = cp.n(op),
      Sp = cp(5203),
      xp = cp(5582),
      Lp = cp(6101),
      Yp = cp(6190),
      Dp = cp(5619);

    function Ap(pp) {
      return Ap = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
        return typeof pp
      } : function(pp) {
        return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
      }, Ap(pp)
    }

    function Pp() {
      return Pp = Object.assign ? Object.assign.bind() : function(pp) {
        for (var ip = 1; ip < arguments.length; ip++) {
          var cp = arguments[ip];
          for (var Op in cp) Object.prototype.hasOwnProperty.call(cp, Op) && (pp[Op] = cp[Op])
        }
        return pp
      }, Pp.apply(this, arguments)
    }

    function Wp(pp, ip) {
      var cp = Object.keys(pp);
      if (Object.getOwnPropertySymbols) {
        var Op = Object.getOwnPropertySymbols(pp);
        ip && (Op = Op.filter((function(ip) {
          return Object.getOwnPropertyDescriptor(pp, ip).enumerable
        }))), cp.push.apply(cp, Op)
      }
      return cp
    }

    function yp(pp, ip) {
      for (var cp = 0; cp < ip.length; cp++) {
        var Op = ip[cp];
        Op.enumerable = Op.enumerable || !1, Op.configurable = !0, "value" in Op && (Op.writable = !0), Object.defineProperty(pp, dp(Op.key), Op)
      }
    }

    function Up(pp, ip, cp) {
      return ip = vp(ip),
        function(pp, ip) {
          if (ip && ("object" === Ap(ip) || "function" === typeof ip)) return ip;
          if (void 0 !== ip) throw new TypeError("Derived constructors may only return object or undefined");
          return function(pp) {
            if (void 0 === pp) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return pp
          }(pp)
        }(pp, wp() ? Reflect.construct(ip, cp || [], vp(pp).constructor) : ip.apply(pp, cp))
    }

    function wp() {
      try {
        var pp = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (pp) {}
      return (wp = function() {
        return !!pp
      })()
    }

    function vp(pp) {
      return vp = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(pp) {
        return pp.__proto__ || Object.getPrototypeOf(pp)
      }, vp(pp)
    }

    function tp(pp, ip) {
      return tp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(pp, ip) {
        return pp.__proto__ = ip, pp
      }, tp(pp, ip)
    }

    function Hp(pp, ip, cp) {
      return (ip = dp(ip)) in pp ? Object.defineProperty(pp, ip, {
        value: cp,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : pp[ip] = cp, pp
    }

    function dp(pp) {
      var ip = function(pp, ip) {
        if ("object" != Ap(pp) || !pp) return pp;
        var cp = pp[Symbol.toPrimitive];
        if (void 0 !== cp) {
          var Op = cp.call(pp, ip || "default");
          if ("object" != Ap(Op)) return Op;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ip ? String : Number)(pp)
      }(pp, "string");
      return "symbol" == Ap(ip) ? ip : ip + ""
    }
    var ep = 32,
      jp = function(pp) {
        function ip() {
          return function(pp, ip) {
            if (!(pp instanceof ip)) throw new TypeError("Cannot call a class as a function")
          }(this, ip), Up(this, ip, arguments)
        }
        return function(pp, ip) {
          if ("function" !== typeof ip && null !== ip) throw new TypeError("Super expression must either be null or a function");
          pp.prototype = Object.create(ip && ip.prototype, {
            constructor: {
              value: pp,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(pp, "prototype", {
            writable: !1
          }), ip && tp(pp, ip)
        }(ip, pp), cp = ip, op = [{
          key: "renderIcon",
          value: function(pp) {
            var ip = this.props.inactiveColor,
              cp = 16,
              op = ep / 6,
              Ip = ep / 3,
              Sp = pp.inactive ? ip : pp.color;
            if ("plainline" === pp.type) return Op.createElement("line", {
              strokeWidth: 4,
              fill: "none",
              stroke: Sp,
              strokeDasharray: pp.payload.strokeDasharray,
              x1: 0,
              y1: cp,
              x2: ep,
              y2: cp,
              className: "recharts-legend-icon"
            });
            if ("line" === pp.type) return Op.createElement("path", {
              strokeWidth: 4,
              fill: "none",
              stroke: Sp,
              d: "M0,".concat(cp, "h").concat(Ip, "\n            A").concat(op, ",").concat(op, ",0,1,1,").concat(2 * Ip, ",").concat(cp, "\n            H").concat(ep, "M").concat(2 * Ip, ",").concat(cp, "\n            A").concat(op, ",").concat(op, ",0,1,1,").concat(Ip, ",").concat(cp),
              className: "recharts-legend-icon"
            });
            if ("rect" === pp.type) return Op.createElement("path", {
              stroke: "none",
              fill: Sp,
              d: "M0,".concat(4, "h").concat(ep, "v").concat(24, "h").concat(-32, "z"),
              className: "recharts-legend-icon"
            });
            if (Op.isValidElement(pp.legendIcon)) {
              var xp = function(pp) {
                for (var ip = 1; ip < arguments.length; ip++) {
                  var cp = null != arguments[ip] ? arguments[ip] : {};
                  ip % 2 ? Wp(Object(cp), !0).forEach((function(ip) {
                    Hp(pp, ip, cp[ip])
                  })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : Wp(Object(cp)).forEach((function(ip) {
                    Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
                  }))
                }
                return pp
              }({}, pp);
              return delete xp.legendIcon, Op.cloneElement(pp.legendIcon, xp)
            }
            return Op.createElement(Yp.c, {
              fill: Sp,
              cx: cp,
              cy: cp,
              size: ep,
              sizeType: "diameter",
              type: pp.type
            })
          }
        }, {
          key: "renderItems",
          value: function() {
            var pp = this,
              ip = this.props,
              cp = ip.payload,
              op = ip.iconSize,
              Yp = ip.layout,
              Ap = ip.formatter,
              Wp = ip.inactiveColor,
              yp = {
                x: 0,
                y: 0,
                width: ep,
                height: ep
              },
              Up = {
                display: "horizontal" === Yp ? "inline-block" : "block",
                marginRight: 10
              },
              wp = {
                display: "inline-block",
                verticalAlign: "middle",
                marginRight: 4
              };
            return cp.map((function(ip, cp) {
              var Yp = ip.formatter || Ap,
                vp = (0, Sp.d)(Hp(Hp({
                  "recharts-legend-item": !0
                }, "legend-item-".concat(cp), !0), "inactive", ip.inactive));
              if ("none" === ip.type) return null;
              var tp = Ip()(ip.value) ? null : ip.value;
              (0, xp.d)(!Ip()(ip.value), 'The name property is also required when using a function for the dataKey of a chart\'s cartesian components. Ex: <Bar name="Name of my Data"/>');
              var dp = ip.inactive ? Wp : ip.color;
              return Op.createElement("li", Pp({
                className: vp,
                style: Up,
                key: "legend-item-".concat(cp)
              }, (0, Dp.i)(pp.props, ip, cp)), Op.createElement(Lp.c, {
                width: op,
                height: op,
                viewBox: yp,
                style: wp
              }, pp.renderIcon(ip)), Op.createElement("span", {
                className: "recharts-legend-item-text",
                style: {
                  color: dp
                }
              }, Yp ? Yp(tp, ip, cp) : tp))
            }))
          }
        }, {
          key: "render",
          value: function() {
            var pp = this.props,
              ip = pp.payload,
              cp = pp.layout,
              op = pp.align;
            if (!ip || !ip.length) return null;
            var Ip = {
              padding: 0,
              margin: 0,
              textAlign: "horizontal" === cp ? op : "left"
            };
            return Op.createElement("ul", {
              className: "recharts-default-legend",
              style: Ip
            }, this.renderItems())
          }
        }], op && yp(cp.prototype, op), Ap && yp(cp, Ap), Object.defineProperty(cp, "prototype", {
          writable: !1
        }), cp;
        var cp, op, Ap
      }(Op.PureComponent);
    Hp(jp, "displayName", "Legend"), Hp(jp, "defaultProps", {
      iconSize: 14,
      layout: "horizontal",
      align: "center",
      verticalAlign: "middle",
      inactiveColor: "#ccc"
    });
    var kp = cp(5299),
      mp = cp(6121);

    function Rp(pp) {
      return Rp = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
        return typeof pp
      } : function(pp) {
        return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
      }, Rp(pp)
    }
    var qp = ["ref"];

    function Mp(pp, ip) {
      var cp = Object.keys(pp);
      if (Object.getOwnPropertySymbols) {
        var Op = Object.getOwnPropertySymbols(pp);
        ip && (Op = Op.filter((function(ip) {
          return Object.getOwnPropertyDescriptor(pp, ip).enumerable
        }))), cp.push.apply(cp, Op)
      }
      return cp
    }

    function Cp(pp) {
      for (var ip = 1; ip < arguments.length; ip++) {
        var cp = null != arguments[ip] ? arguments[ip] : {};
        ip % 2 ? Mp(Object(cp), !0).forEach((function(ip) {
          Bp(pp, ip, cp[ip])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : Mp(Object(cp)).forEach((function(ip) {
          Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
        }))
      }
      return pp
    }

    function Ep(pp, ip) {
      for (var cp = 0; cp < ip.length; cp++) {
        var Op = ip[cp];
        Op.enumerable = Op.enumerable || !1, Op.configurable = !0, "value" in Op && (Op.writable = !0), Object.defineProperty(pp, Np(Op.key), Op)
      }
    }

    function Xp(pp, ip, cp) {
      return ip = Qp(ip),
        function(pp, ip) {
          if (ip && ("object" === Rp(ip) || "function" === typeof ip)) return ip;
          if (void 0 !== ip) throw new TypeError("Derived constructors may only return object or undefined");
          return function(pp) {
            if (void 0 === pp) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return pp
          }(pp)
        }(pp, lp() ? Reflect.construct(ip, cp || [], Qp(pp).constructor) : ip.apply(pp, cp))
    }

    function lp() {
      try {
        var pp = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (pp) {}
      return (lp = function() {
        return !!pp
      })()
    }

    function Qp(pp) {
      return Qp = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(pp) {
        return pp.__proto__ || Object.getPrototypeOf(pp)
      }, Qp(pp)
    }

    function Jp(pp, ip) {
      return Jp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(pp, ip) {
        return pp.__proto__ = ip, pp
      }, Jp(pp, ip)
    }

    function Bp(pp, ip, cp) {
      return (ip = Np(ip)) in pp ? Object.defineProperty(pp, ip, {
        value: cp,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : pp[ip] = cp, pp
    }

    function Np(pp) {
      var ip = function(pp, ip) {
        if ("object" != Rp(pp) || !pp) return pp;
        var cp = pp[Symbol.toPrimitive];
        if (void 0 !== cp) {
          var Op = cp.call(pp, ip || "default");
          if ("object" != Rp(Op)) return Op;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ip ? String : Number)(pp)
      }(pp, "string");
      return "symbol" == Rp(ip) ? ip : ip + ""
    }

    function Tp(pp, ip) {
      if (null == pp) return {};
      var cp, Op, op = function(pp, ip) {
        if (null == pp) return {};
        var cp = {};
        for (var Op in pp)
          if (Object.prototype.hasOwnProperty.call(pp, Op)) {
            if (ip.indexOf(Op) >= 0) continue;
            cp[Op] = pp[Op]
          } return cp
      }(pp, ip);
      if (Object.getOwnPropertySymbols) {
        var Ip = Object.getOwnPropertySymbols(pp);
        for (Op = 0; Op < Ip.length; Op++) cp = Ip[Op], ip.indexOf(cp) >= 0 || Object.prototype.propertyIsEnumerable.call(pp, cp) && (op[cp] = pp[cp])
      }
      return op
    }

    function fp(pp) {
      return pp.value
    }
    var bp = function(pp) {
      function ip() {
        var pp;
        ! function(pp, ip) {
          if (!(pp instanceof ip)) throw new TypeError("Cannot call a class as a function")
        }(this, ip);
        for (var cp = arguments.length, Op = new Array(cp), op = 0; op < cp; op++) Op[op] = arguments[op];
        return Bp(pp = Xp(this, ip, [].concat(Op)), "lastBoundingBox", {
          width: -1,
          height: -1
        }), pp
      }
      return function(pp, ip) {
        if ("function" !== typeof ip && null !== ip) throw new TypeError("Super expression must either be null or a function");
        pp.prototype = Object.create(ip && ip.prototype, {
          constructor: {
            value: pp,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(pp, "prototype", {
          writable: !1
        }), ip && Jp(pp, ip)
      }(ip, pp), cp = ip, Ip = [{
        key: "getWithHeight",
        value: function(pp, ip) {
          var cp = Cp(Cp({}, this.defaultProps), pp.props).layout;
          return "vertical" === cp && (0, kp.D)(pp.props.height) ? {
            height: pp.props.height
          } : "horizontal" === cp ? {
            width: pp.props.width || ip
          } : null
        }
      }], (op = [{
        key: "componentDidMount",
        value: function() {
          this.updateBBox()
        }
      }, {
        key: "componentDidUpdate",
        value: function() {
          this.updateBBox()
        }
      }, {
        key: "getBBox",
        value: function() {
          if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
            var pp = this.wrapperNode.getBoundingClientRect();
            return pp.height = this.wrapperNode.offsetHeight, pp.width = this.wrapperNode.offsetWidth, pp
          }
          return null
        }
      }, {
        key: "updateBBox",
        value: function() {
          var pp = this.props.onBBoxUpdate,
            ip = this.getBBox();
          ip ? (Math.abs(ip.width - this.lastBoundingBox.width) > 1 || Math.abs(ip.height - this.lastBoundingBox.height) > 1) && (this.lastBoundingBox.width = ip.width, this.lastBoundingBox.height = ip.height, pp && pp(ip)) : -1 === this.lastBoundingBox.width && -1 === this.lastBoundingBox.height || (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, pp && pp(null))
        }
      }, {
        key: "getBBoxSnapshot",
        value: function() {
          return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? Cp({}, this.lastBoundingBox) : {
            width: 0,
            height: 0
          }
        }
      }, {
        key: "getDefaultPosition",
        value: function(pp) {
          var ip, cp, Op = this.props,
            op = Op.layout,
            Ip = Op.align,
            Sp = Op.verticalAlign,
            xp = Op.margin,
            Lp = Op.chartWidth,
            Yp = Op.chartHeight;
          return pp && (void 0 !== pp.left && null !== pp.left || void 0 !== pp.right && null !== pp.right) || (ip = "center" === Ip && "vertical" === op ? {
            left: ((Lp || 0) - this.getBBoxSnapshot().width) / 2
          } : "right" === Ip ? {
            right: xp && xp.right || 0
          } : {
            left: xp && xp.left || 0
          }), pp && (void 0 !== pp.top && null !== pp.top || void 0 !== pp.bottom && null !== pp.bottom) || (cp = "middle" === Sp ? {
            top: ((Yp || 0) - this.getBBoxSnapshot().height) / 2
          } : "bottom" === Sp ? {
            bottom: xp && xp.bottom || 0
          } : {
            top: xp && xp.top || 0
          }), Cp(Cp({}, ip), cp)
        }
      }, {
        key: "render",
        value: function() {
          var pp = this,
            ip = this.props,
            cp = ip.content,
            op = ip.width,
            Ip = ip.height,
            Sp = ip.wrapperStyle,
            xp = ip.payloadUniqBy,
            Lp = ip.payload,
            Yp = Cp(Cp({
              position: "absolute",
              width: op || "auto",
              height: Ip || "auto"
            }, this.getDefaultPosition(Sp)), Sp);
          return Op.createElement("div", {
            className: "recharts-legend-wrapper",
            style: Yp,
            ref: function(ip) {
              pp.wrapperNode = ip
            }
          }, function(pp, ip) {
            if (Op.isValidElement(pp)) return Op.cloneElement(pp, ip);
            if ("function" === typeof pp) return Op.createElement(pp, ip);
            ip.ref;
            var cp = Tp(ip, qp);
            return Op.createElement(jp, cp)
          }(cp, Cp(Cp({}, this.props), {}, {
            payload: (0, mp.e)(Lp, xp, fp)
          })))
        }
      }]) && Ep(cp.prototype, op), Ip && Ep(cp, Ip), Object.defineProperty(cp, "prototype", {
        writable: !1
      }), cp;
      var cp, op, Ip
    }(Op.PureComponent);
    Bp(bp, "displayName", "Legend"), Bp(bp, "defaultProps", {
      iconSize: 14,
      layout: "horizontal",
      align: "center",
      verticalAlign: "bottom"
    })
  },
  5195: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => wp
    });
    var Op = cp(5203),
      op = cp(62),
      Ip = cp(5207),
      Sp = cp.n(Ip),
      xp = cp(5299),
      Lp = cp(5582),
      Yp = cp(5588);

    function Dp(pp) {
      return Dp = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
        return typeof pp
      } : function(pp) {
        return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
      }, Dp(pp)
    }

    function Ap(pp, ip) {
      var cp = Object.keys(pp);
      if (Object.getOwnPropertySymbols) {
        var Op = Object.getOwnPropertySymbols(pp);
        ip && (Op = Op.filter((function(ip) {
          return Object.getOwnPropertyDescriptor(pp, ip).enumerable
        }))), cp.push.apply(cp, Op)
      }
      return cp
    }

    function Pp(pp) {
      for (var ip = 1; ip < arguments.length; ip++) {
        var cp = null != arguments[ip] ? arguments[ip] : {};
        ip % 2 ? Ap(Object(cp), !0).forEach((function(ip) {
          Wp(pp, ip, cp[ip])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : Ap(Object(cp)).forEach((function(ip) {
          Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
        }))
      }
      return pp
    }

    function Wp(pp, ip, cp) {
      return (ip = function(pp) {
        var ip = function(pp, ip) {
          if ("object" != Dp(pp) || !pp) return pp;
          var cp = pp[Symbol.toPrimitive];
          if (void 0 !== cp) {
            var Op = cp.call(pp, ip || "default");
            if ("object" != Dp(Op)) return Op;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === ip ? String : Number)(pp)
        }(pp, "string");
        return "symbol" == Dp(ip) ? ip : ip + ""
      }(ip)) in pp ? Object.defineProperty(pp, ip, {
        value: cp,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : pp[ip] = cp, pp
    }

    function yp(pp, ip) {
      return function(pp) {
        if (Array.isArray(pp)) return pp
      }(pp) || function(pp, ip) {
        var cp = null == pp ? null : "undefined" != typeof Symbol && pp[Symbol.iterator] || pp["@@iterator"];
        if (null != cp) {
          var Op, op, Ip, Sp, xp = [],
            Lp = !0,
            Yp = !1;
          try {
            if (Ip = (cp = cp.call(pp)).next, 0 === ip) {
              if (Object(cp) !== cp) return;
              Lp = !1
            } else
              for (; !(Lp = (Op = Ip.call(cp)).done) && (xp.push(Op.value), xp.length !== ip); Lp = !0);
          } catch (pp) {
            Yp = !0, op = pp
          } finally {
            try {
              if (!Lp && null != cp.return && (Sp = cp.return(), Object(Sp) !== Sp)) return
            } finally {
              if (Yp) throw op
            }
          }
          return xp
        }
      }(pp, ip) || function(pp, ip) {
        if (!pp) return;
        if ("string" === typeof pp) return Up(pp, ip);
        var cp = Object.prototype.toString.call(pp).slice(8, -1);
        "Object" === cp && pp.constructor && (cp = pp.constructor.name);
        if ("Map" === cp || "Set" === cp) return Array.from(pp);
        if ("Arguments" === cp || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cp)) return Up(pp, ip)
      }(pp, ip) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Up(pp, ip) {
      (null == ip || ip > pp.length) && (ip = pp.length);
      for (var cp = 0, Op = new Array(ip); cp < ip; cp++) Op[cp] = pp[cp];
      return Op
    }
    var wp = (0, op.forwardRef)((function(pp, ip) {
      var cp = pp.aspect,
        Ip = pp.initialDimension,
        Dp = void 0 === Ip ? {
          width: -1,
          height: -1
        } : Ip,
        Ap = pp.width,
        Wp = void 0 === Ap ? "100%" : Ap,
        Up = pp.height,
        wp = void 0 === Up ? "100%" : Up,
        vp = pp.minWidth,
        tp = void 0 === vp ? 0 : vp,
        Hp = pp.minHeight,
        dp = pp.maxHeight,
        ep = pp.children,
        jp = pp.debounce,
        kp = void 0 === jp ? 0 : jp,
        mp = pp.id,
        Rp = pp.className,
        qp = pp.mH,
        Mp = pp.style,
        Cp = void 0 === Mp ? {} : Mp,
        Ep = (0, op.useRef)(null),
        Xp = (0, op.useRef)();
      Xp.current = qp, (0, op.useImperativeHandle)(ip, (function() {
        return Object.defineProperty(Ep.current, "current", {
          get: function() {
            return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), Ep.current
          },
          configurable: !0
        })
      }));
      var lp = yp((0, op.useState)({
          containerWidth: Dp.width,
          containerHeight: Dp.height
        }), 2),
        Qp = lp[0],
        Jp = lp[1],
        Bp = (0, op.useCallback)((function(pp, ip) {
          Jp((function(cp) {
            var Op = Math.round(pp),
              op = Math.round(ip);
            return cp.containerWidth === Op && cp.containerHeight === op ? cp : {
              containerWidth: Op,
              containerHeight: op
            }
          }))
        }), []);
      (0, op.useEffect)((function() {
        var pp = function(pp) {
          var ip, cp = pp[0].contentRect,
            Op = cp.width,
            op = cp.height;
          Bp(Op, op), null === (ip = Xp.current) || void 0 === ip || ip.call(Xp, Op, op)
        };
        kp > 0 && (pp = Sp()(pp, kp, {
          trailing: !0,
          leading: !1
        }));
        var ip = new ResizeObserver(pp),
          cp = Ep.current.getBoundingClientRect(),
          Op = cp.width,
          op = cp.height;
        return Bp(Op, op), ip.observe(Ep.current),
          function() {
            ip.disconnect()
          }
      }), [Bp, kp]);
      var Np = (0, op.useMemo)((function() {
        var pp = Qp.containerWidth,
          ip = Qp.containerHeight;
        if (pp < 0 || ip < 0) return null;
        (0, Lp.d)((0, xp.F)(Wp) || (0, xp.F)(wp), "The width(%s) and height(%s) are both fixed numbers,\n       maybe you don't need to use a ResponsiveContainer.", Wp, wp), (0, Lp.d)(!cp || cp > 0, "The aspect(%s) must be greater than zero.", cp);
        var Op = (0, xp.F)(Wp) ? pp : Wp,
          Ip = (0, xp.F)(wp) ? ip : wp;
        cp && cp > 0 && (Op ? Ip = Op / cp : Ip && (Op = Ip * cp), dp && Ip > dp && (Ip = dp)), (0, Lp.d)(Op > 0 || Ip > 0, "The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.", Op, Ip, Wp, wp, tp, Hp, cp);
        var Sp = !Array.isArray(ep) && (0, Yp.k)(ep.type).endsWith("Chart");
        return op.Children.map(ep, (function(pp) {
          return op.isValidElement(pp) ? (0, op.cloneElement)(pp, Pp({
            width: Op,
            height: Ip
          }, Sp ? {
            style: Pp({
              height: "100%",
              width: "100%",
              maxHeight: Ip,
              maxWidth: Op
            }, pp.props.style)
          } : {})) : pp
        }))
      }), [cp, ep, wp, dp, Hp, tp, Qp, Wp]);
      return op.createElement("div", {
        id: mp ? "".concat(mp) : void 0,
        className: (0, Op.d)("recharts-responsive-container", Rp),
        style: Pp(Pp({}, Cp), {}, {
          width: Wp,
          height: wp,
          minWidth: tp,
          minHeight: Hp,
          maxHeight: dp
        }),
        ref: Ep
      }, Np)
    }))
  },
  6262: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => hp
    });
    var Op = cp(62),
      op = cp(5575),
      Ip = cp.n(op),
      Sp = cp(5203),
      xp = cp(5299),
      Lp = cp(6115),
      Yp = cp(5588),
      Dp = cp(6264);

    function Ap(pp) {
      return Ap = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
        return typeof pp
      } : function(pp) {
        return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
      }, Ap(pp)
    }

    function Pp(pp, ip) {
      return function(pp) {
        if (Array.isArray(pp)) return pp
      }(pp) || function(pp, ip) {
        var cp = null == pp ? null : "undefined" != typeof Symbol && pp[Symbol.iterator] || pp["@@iterator"];
        if (null != cp) {
          var Op, op, Ip, Sp, xp = [],
            Lp = !0,
            Yp = !1;
          try {
            if (Ip = (cp = cp.call(pp)).next, 0 === ip) {
              if (Object(cp) !== cp) return;
              Lp = !1
            } else
              for (; !(Lp = (Op = Ip.call(cp)).done) && (xp.push(Op.value), xp.length !== ip); Lp = !0);
          } catch (pp) {
            Yp = !0, op = pp
          } finally {
            try {
              if (!Lp && null != cp.return && (Sp = cp.return(), Object(Sp) !== Sp)) return
            } finally {
              if (Yp) throw op
            }
          }
          return xp
        }
      }(pp, ip) || function(pp, ip) {
        if (!pp) return;
        if ("string" === typeof pp) return Wp(pp, ip);
        var cp = Object.prototype.toString.call(pp).slice(8, -1);
        "Object" === cp && pp.constructor && (cp = pp.constructor.name);
        if ("Map" === cp || "Set" === cp) return Array.from(pp);
        if ("Arguments" === cp || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cp)) return Wp(pp, ip)
      }(pp, ip) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Wp(pp, ip) {
      (null == ip || ip > pp.length) && (ip = pp.length);
      for (var cp = 0, Op = new Array(ip); cp < ip; cp++) Op[cp] = pp[cp];
      return Op
    }

    function yp(pp, ip) {
      for (var cp = 0; cp < ip.length; cp++) {
        var Op = ip[cp];
        Op.enumerable = Op.enumerable || !1, Op.configurable = !0, "value" in Op && (Op.writable = !0), Object.defineProperty(pp, Up(Op.key), Op)
      }
    }

    function Up(pp) {
      var ip = function(pp, ip) {
        if ("object" != Ap(pp) || !pp) return pp;
        var cp = pp[Symbol.toPrimitive];
        if (void 0 !== cp) {
          var Op = cp.call(pp, ip || "default");
          if ("object" != Ap(Op)) return Op;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ip ? String : Number)(pp)
      }(pp, "string");
      return "symbol" == Ap(ip) ? ip : ip + ""
    }
    var wp = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
      vp = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
      tp = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
      Hp = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
      dp = {
        cm: 96 / 2.54,
        mm: 96 / 25.4,
        pt: 96 / 72,
        pc: 16,
        in: 96,
        Q: 96 / 101.6,
        px: 1
      },
      ep = Object.keys(dp),
      jp = "NaN";
    var kp = function() {
      function pp(ip, cp) {
        ! function(pp, ip) {
          if (!(pp instanceof ip)) throw new TypeError("Cannot call a class as a function")
        }(this, pp), this.num = ip, this.unit = cp, this.num = ip, this.unit = cp, Number.isNaN(ip) && (this.unit = ""), "" === cp || tp.test(cp) || (this.num = NaN, this.unit = ""), ep.includes(cp) && (this.num = function(pp, ip) {
          return pp * dp[ip]
        }(ip, cp), this.unit = "px")
      }
      return ip = pp, Op = [{
        key: "parse",
        value: function(ip) {
          var cp, Op = Pp(null !== (cp = Hp.exec(ip)) && void 0 !== cp ? cp : [], 3),
            op = Op[1],
            Ip = Op[2];
          return new pp(parseFloat(op), null !== Ip && void 0 !== Ip ? Ip : "")
        }
      }], (cp = [{
        key: "add",
        value: function(ip) {
          return this.unit !== ip.unit ? new pp(NaN, "") : new pp(this.num + ip.num, this.unit)
        }
      }, {
        key: "subtract",
        value: function(ip) {
          return this.unit !== ip.unit ? new pp(NaN, "") : new pp(this.num - ip.num, this.unit)
        }
      }, {
        key: "multiply",
        value: function(ip) {
          return "" !== this.unit && "" !== ip.unit && this.unit !== ip.unit ? new pp(NaN, "") : new pp(this.num * ip.num, this.unit || ip.unit)
        }
      }, {
        key: "divide",
        value: function(ip) {
          return "" !== this.unit && "" !== ip.unit && this.unit !== ip.unit ? new pp(NaN, "") : new pp(this.num / ip.num, this.unit || ip.unit)
        }
      }, {
        key: "toString",
        value: function() {
          return "".concat(this.num).concat(this.unit)
        }
      }, {
        key: "isNaN",
        value: function() {
          return Number.isNaN(this.num)
        }
      }]) && yp(ip.prototype, cp), Op && yp(ip, Op), Object.defineProperty(ip, "prototype", {
        writable: !1
      }), ip;
      var ip, cp, Op
    }();

    function mp(pp) {
      if (pp.includes(jp)) return jp;
      for (var ip = pp; ip.includes("*") || ip.includes("/");) {
        var cp, Op = Pp(null !== (cp = wp.exec(ip)) && void 0 !== cp ? cp : [], 4),
          op = Op[1],
          Ip = Op[2],
          Sp = Op[3],
          xp = kp.parse(null !== op && void 0 !== op ? op : ""),
          Lp = kp.parse(null !== Sp && void 0 !== Sp ? Sp : ""),
          Yp = "*" === Ip ? xp.multiply(Lp) : xp.divide(Lp);
        if (Yp.isNaN()) return jp;
        ip = ip.replace(wp, Yp.toString())
      }
      for (; ip.includes("+") || /.-\d+(?:\.\d+)?/.test(ip);) {
        var Dp, Ap = Pp(null !== (Dp = vp.exec(ip)) && void 0 !== Dp ? Dp : [], 4),
          Wp = Ap[1],
          yp = Ap[2],
          Up = Ap[3],
          tp = kp.parse(null !== Wp && void 0 !== Wp ? Wp : ""),
          Hp = kp.parse(null !== Up && void 0 !== Up ? Up : ""),
          dp = "+" === yp ? tp.add(Hp) : tp.subtract(Hp);
        if (dp.isNaN()) return jp;
        ip = ip.replace(vp, dp.toString())
      }
      return ip
    }
    var Rp = /\(([^()]*)\)/;

    function qp(pp) {
      var ip = pp.replace(/\s+/g, "");
      return ip = function(pp) {
        for (var ip = pp; ip.includes("(");) {
          var cp = Pp(Rp.exec(ip), 2)[1];
          ip = ip.replace(Rp, mp(cp))
        }
        return ip
      }(ip), ip = mp(ip)
    }

    function Mp(pp) {
      var ip = function(pp) {
        try {
          return qp(pp)
        } catch (ip) {
          return jp
        }
      }(pp.slice(5, -1));
      return ip === jp ? "" : ip
    }
    var Cp = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"],
      Ep = ["dx", "dy", "angle", "className", "breakAll"];

    function Xp() {
      return Xp = Object.assign ? Object.assign.bind() : function(pp) {
        for (var ip = 1; ip < arguments.length; ip++) {
          var cp = arguments[ip];
          for (var Op in cp) Object.prototype.hasOwnProperty.call(cp, Op) && (pp[Op] = cp[Op])
        }
        return pp
      }, Xp.apply(this, arguments)
    }

    function lp(pp, ip) {
      if (null == pp) return {};
      var cp, Op, op = function(pp, ip) {
        if (null == pp) return {};
        var cp = {};
        for (var Op in pp)
          if (Object.prototype.hasOwnProperty.call(pp, Op)) {
            if (ip.indexOf(Op) >= 0) continue;
            cp[Op] = pp[Op]
          } return cp
      }(pp, ip);
      if (Object.getOwnPropertySymbols) {
        var Ip = Object.getOwnPropertySymbols(pp);
        for (Op = 0; Op < Ip.length; Op++) cp = Ip[Op], ip.indexOf(cp) >= 0 || Object.prototype.propertyIsEnumerable.call(pp, cp) && (op[cp] = pp[cp])
      }
      return op
    }

    function Qp(pp, ip) {
      return function(pp) {
        if (Array.isArray(pp)) return pp
      }(pp) || function(pp, ip) {
        var cp = null == pp ? null : "undefined" != typeof Symbol && pp[Symbol.iterator] || pp["@@iterator"];
        if (null != cp) {
          var Op, op, Ip, Sp, xp = [],
            Lp = !0,
            Yp = !1;
          try {
            if (Ip = (cp = cp.call(pp)).next, 0 === ip) {
              if (Object(cp) !== cp) return;
              Lp = !1
            } else
              for (; !(Lp = (Op = Ip.call(cp)).done) && (xp.push(Op.value), xp.length !== ip); Lp = !0);
          } catch (pp) {
            Yp = !0, op = pp
          } finally {
            try {
              if (!Lp && null != cp.return && (Sp = cp.return(), Object(Sp) !== Sp)) return
            } finally {
              if (Yp) throw op
            }
          }
          return xp
        }
      }(pp, ip) || function(pp, ip) {
        if (!pp) return;
        if ("string" === typeof pp) return Jp(pp, ip);
        var cp = Object.prototype.toString.call(pp).slice(8, -1);
        "Object" === cp && pp.constructor && (cp = pp.constructor.name);
        if ("Map" === cp || "Set" === cp) return Array.from(pp);
        if ("Arguments" === cp || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cp)) return Jp(pp, ip)
      }(pp, ip) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Jp(pp, ip) {
      (null == ip || ip > pp.length) && (ip = pp.length);
      for (var cp = 0, Op = new Array(ip); cp < ip; cp++) Op[cp] = pp[cp];
      return Op
    }
    var Bp = /[ \f\n\r\t\v\u2028\u2029]+/,
      Np = function(pp) {
        var ip = pp.children,
          cp = pp.breakAll,
          Op = pp.style;
        try {
          var op = [];
          return Ip()(ip) || (op = cp ? ip.toString().split("") : ip.toString().split(Bp)), {
            wordsWithComputedWidth: op.map((function(pp) {
              return {
                word: pp,
                width: (0, Dp.g)(pp, Op).width
              }
            })),
            spaceWidth: cp ? 0 : (0, Dp.g)("\xa0", Op).width
          }
        } catch (Sp) {
          return null
        }
      },
      Tp = function(pp) {
        return [{
          words: Ip()(pp) ? [] : pp.toString().split(Bp)
        }]
      },
      fp = function(pp) {
        var ip = pp.width,
          cp = pp.scaleToFit,
          Op = pp.children,
          op = pp.style,
          Ip = pp.breakAll,
          Sp = pp.maxLines;
        if ((ip || cp) && !Lp.e.isSsr) {
          var Yp = Np({
            breakAll: Ip,
            children: Op,
            style: op
          });
          return Yp ? function(pp, ip, cp, Op, op) {
            var Ip = pp.maxLines,
              Sp = pp.children,
              Lp = pp.style,
              Yp = pp.breakAll,
              Dp = (0, xp.D)(Ip),
              Ap = Sp,
              Pp = function() {
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).reduce((function(pp, ip) {
                  var Ip = ip.word,
                    Sp = ip.width,
                    xp = pp[pp.length - 1];
                  if (xp && (null == Op || op || xp.width + Sp + cp < Number(Op))) xp.words.push(Ip), xp.width += Sp + cp;
                  else {
                    var Lp = {
                      words: [Ip],
                      width: Sp
                    };
                    pp.push(Lp)
                  }
                  return pp
                }), [])
              },
              Wp = Pp(ip);
            if (!Dp) return Wp;
            for (var yp, Up = function(pp) {
                var ip = Ap.slice(0, pp),
                  cp = Np({
                    breakAll: Yp,
                    style: Lp,
                    children: ip + "\u2026"
                  }).wordsWithComputedWidth,
                  op = Pp(cp),
                  Sp = op.length > Ip || function(pp) {
                    return pp.reduce((function(pp, ip) {
                      return pp.width > ip.width ? pp : ip
                    }))
                  }(op).width > Number(Op);
                return [Sp, op]
              }, wp = 0, vp = Ap.length - 1, tp = 0; wp <= vp && tp <= Ap.length - 1;) {
              var Hp = Math.floor((wp + vp) / 2),
                dp = Qp(Up(Hp - 1), 2),
                ep = dp[0],
                jp = dp[1],
                kp = Qp(Up(Hp), 1)[0];
              if (ep || kp || (wp = Hp + 1), ep && kp && (vp = Hp - 1), !ep && kp) {
                yp = jp;
                break
              }
              tp++
            }
            return yp || Wp
          }({
            breakAll: Ip,
            children: Op,
            maxLines: Sp,
            style: op
          }, Yp.wordsWithComputedWidth, Yp.spaceWidth, ip, cp) : Tp(Op)
        }
        return Tp(Op)
      },
      bp = "#808080",
      hp = function(pp) {
        var ip = pp.x,
          cp = void 0 === ip ? 0 : ip,
          op = pp.y,
          Ip = void 0 === op ? 0 : op,
          Lp = pp.lineHeight,
          Dp = void 0 === Lp ? "1em" : Lp,
          Ap = pp.capHeight,
          Pp = void 0 === Ap ? "0.71em" : Ap,
          Wp = pp.scaleToFit,
          yp = void 0 !== Wp && Wp,
          Up = pp.textAnchor,
          wp = void 0 === Up ? "start" : Up,
          vp = pp.verticalAnchor,
          tp = void 0 === vp ? "end" : vp,
          Hp = pp.fill,
          dp = void 0 === Hp ? bp : Hp,
          ep = lp(pp, Cp),
          jp = (0, Op.useMemo)((function() {
            return fp({
              breakAll: ep.breakAll,
              children: ep.children,
              maxLines: ep.maxLines,
              scaleToFit: yp,
              style: ep.style,
              width: ep.width
            })
          }), [ep.breakAll, ep.children, ep.maxLines, yp, ep.style, ep.width]),
          kp = ep.dx,
          mp = ep.dy,
          Rp = ep.angle,
          qp = ep.className,
          Qp = ep.breakAll,
          Jp = lp(ep, Ep);
        if (!(0, xp.B)(cp) || !(0, xp.B)(Ip)) return null;
        var Bp, Np = cp + ((0, xp.D)(kp) ? kp : 0),
          Tp = Ip + ((0, xp.D)(mp) ? mp : 0);
        switch (tp) {
          case "start":
            Bp = Mp("calc(".concat(Pp, ")"));
            break;
          case "middle":
            Bp = Mp("calc(".concat((jp.length - 1) / 2, " * -").concat(Dp, " + (").concat(Pp, " / 2))"));
            break;
          default:
            Bp = Mp("calc(".concat(jp.length - 1, " * -").concat(Dp, ")"))
        }
        var hp = [];
        if (yp) {
          var ap = jp[0].width,
            np = ep.width;
          hp.push("scale(".concat(((0, xp.D)(np) ? np / ap : 1) / ap, ")"))
        }
        return Rp && hp.push("rotate(".concat(Rp, ", ").concat(Np, ", ").concat(Tp, ")")), hp.length && (Jp.transform = hp.join(" ")), Op.createElement("text", Xp({}, (0, Yp.d)(Jp, !0), {
          x: Np,
          y: Tp,
          className: (0, Sp.d)("recharts-text", qp),
          textAnchor: wp,
          fill: dp.includes("url") ? bp : dp
        }), jp.map((function(pp, ip) {
          var cp = pp.words.join(Qp ? "" : " ");
          return Op.createElement("tspan", {
            x: Np,
            dy: 0 === ip ? Bp : Dp,
            key: "".concat(cp, "-").concat(ip)
          }, cp)
        })))
      }
  },
  6112: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Kp
    });
    var Op = cp(62),
      op = cp(5692),
      Ip = cp.n(op),
      Sp = cp(5575),
      xp = cp.n(Sp),
      Lp = cp(5203),
      Yp = cp(5299);

    function Dp(pp) {
      return Dp = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
        return typeof pp
      } : function(pp) {
        return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
      }, Dp(pp)
    }

    function Ap() {
      return Ap = Object.assign ? Object.assign.bind() : function(pp) {
        for (var ip = 1; ip < arguments.length; ip++) {
          var cp = arguments[ip];
          for (var Op in cp) Object.prototype.hasOwnProperty.call(cp, Op) && (pp[Op] = cp[Op])
        }
        return pp
      }, Ap.apply(this, arguments)
    }

    function Pp(pp, ip) {
      return function(pp) {
        if (Array.isArray(pp)) return pp
      }(pp) || function(pp, ip) {
        var cp = null == pp ? null : "undefined" != typeof Symbol && pp[Symbol.iterator] || pp["@@iterator"];
        if (null != cp) {
          var Op, op, Ip, Sp, xp = [],
            Lp = !0,
            Yp = !1;
          try {
            if (Ip = (cp = cp.call(pp)).next, 0 === ip) {
              if (Object(cp) !== cp) return;
              Lp = !1
            } else
              for (; !(Lp = (Op = Ip.call(cp)).done) && (xp.push(Op.value), xp.length !== ip); Lp = !0);
          } catch (pp) {
            Yp = !0, op = pp
          } finally {
            try {
              if (!Lp && null != cp.return && (Sp = cp.return(), Object(Sp) !== Sp)) return
            } finally {
              if (Yp) throw op
            }
          }
          return xp
        }
      }(pp, ip) || function(pp, ip) {
        if (!pp) return;
        if ("string" === typeof pp) return Wp(pp, ip);
        var cp = Object.prototype.toString.call(pp).slice(8, -1);
        "Object" === cp && pp.constructor && (cp = pp.constructor.name);
        if ("Map" === cp || "Set" === cp) return Array.from(pp);
        if ("Arguments" === cp || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cp)) return Wp(pp, ip)
      }(pp, ip) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Wp(pp, ip) {
      (null == ip || ip > pp.length) && (ip = pp.length);
      for (var cp = 0, Op = new Array(ip); cp < ip; cp++) Op[cp] = pp[cp];
      return Op
    }

    function yp(pp, ip) {
      var cp = Object.keys(pp);
      if (Object.getOwnPropertySymbols) {
        var Op = Object.getOwnPropertySymbols(pp);
        ip && (Op = Op.filter((function(ip) {
          return Object.getOwnPropertyDescriptor(pp, ip).enumerable
        }))), cp.push.apply(cp, Op)
      }
      return cp
    }

    function Up(pp) {
      for (var ip = 1; ip < arguments.length; ip++) {
        var cp = null != arguments[ip] ? arguments[ip] : {};
        ip % 2 ? yp(Object(cp), !0).forEach((function(ip) {
          wp(pp, ip, cp[ip])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : yp(Object(cp)).forEach((function(ip) {
          Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
        }))
      }
      return pp
    }

    function wp(pp, ip, cp) {
      return (ip = function(pp) {
        var ip = function(pp, ip) {
          if ("object" != Dp(pp) || !pp) return pp;
          var cp = pp[Symbol.toPrimitive];
          if (void 0 !== cp) {
            var Op = cp.call(pp, ip || "default");
            if ("object" != Dp(Op)) return Op;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === ip ? String : Number)(pp)
        }(pp, "string");
        return "symbol" == Dp(ip) ? ip : ip + ""
      }(ip)) in pp ? Object.defineProperty(pp, ip, {
        value: cp,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : pp[ip] = cp, pp
    }

    function vp(pp) {
      return Array.isArray(pp) && (0, Yp.B)(pp[0]) && (0, Yp.B)(pp[1]) ? pp.join(" ~ ") : pp
    }
    var tp = function(pp) {
      var ip = pp.separator,
        cp = void 0 === ip ? " : " : ip,
        op = pp.contentStyle,
        Sp = void 0 === op ? {} : op,
        Dp = pp.itemStyle,
        Wp = void 0 === Dp ? {} : Dp,
        yp = pp.labelStyle,
        wp = void 0 === yp ? {} : yp,
        tp = pp.payload,
        Hp = pp.formatter,
        dp = pp.itemSorter,
        ep = pp.wrapperClassName,
        jp = pp.labelClassName,
        kp = pp.label,
        mp = pp.labelFormatter,
        Rp = pp.accessibilityLayer,
        qp = void 0 !== Rp && Rp,
        Mp = Up({
          margin: 0,
          padding: 10,
          backgroundColor: "#fff",
          border: "1px solid #ccc",
          whiteSpace: "nowrap"
        }, Sp),
        Cp = Up({
          margin: 0
        }, wp),
        Ep = !xp()(kp),
        Xp = Ep ? kp : "",
        lp = (0, Lp.d)("recharts-default-tooltip", ep),
        Qp = (0, Lp.d)("recharts-tooltip-label", jp);
      Ep && mp && void 0 !== tp && null !== tp && (Xp = mp(kp, tp));
      var Jp = qp ? {
        role: "status",
        "aria-live": "assertive"
      } : {};
      return Op.createElement("div", Ap({
        className: lp,
        style: Mp
      }, Jp), Op.createElement("p", {
        className: Qp,
        style: Cp
      }, Op.isValidElement(Xp) ? Xp : "".concat(Xp)), function() {
        if (tp && tp.length) {
          var pp = (dp ? Ip()(tp, dp) : tp).map((function(pp, ip) {
            if ("none" === pp.type) return null;
            var op = Up({
                display: "block",
                paddingTop: 4,
                paddingBottom: 4,
                color: pp.color || "#000"
              }, Wp),
              Ip = pp.formatter || Hp || vp,
              Sp = pp.value,
              xp = pp.name,
              Lp = Sp,
              Dp = xp;
            if (Ip && null != Lp && null != Dp) {
              var Ap = Ip(Sp, xp, pp, ip, tp);
              if (Array.isArray(Ap)) {
                var yp = Pp(Ap, 2);
                Lp = yp[0], Dp = yp[1]
              } else Lp = Ap
            }
            return Op.createElement("li", {
              className: "recharts-tooltip-item",
              key: "tooltip-item-".concat(ip),
              style: op
            }, (0, Yp.B)(Dp) ? Op.createElement("span", {
              className: "recharts-tooltip-item-name"
            }, Dp) : null, (0, Yp.B)(Dp) ? Op.createElement("span", {
              className: "recharts-tooltip-item-separator"
            }, cp) : null, Op.createElement("span", {
              className: "recharts-tooltip-item-value"
            }, Lp), Op.createElement("span", {
              className: "recharts-tooltip-item-unit"
            }, pp.unit || ""))
          }));
          return Op.createElement("ul", {
            className: "recharts-tooltip-item-list",
            style: {
              padding: 0,
              margin: 0
            }
          }, pp)
        }
        return null
      }())
    };

    function Hp(pp) {
      return Hp = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
        return typeof pp
      } : function(pp) {
        return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
      }, Hp(pp)
    }

    function dp(pp, ip, cp) {
      return (ip = function(pp) {
        var ip = function(pp, ip) {
          if ("object" != Hp(pp) || !pp) return pp;
          var cp = pp[Symbol.toPrimitive];
          if (void 0 !== cp) {
            var Op = cp.call(pp, ip || "default");
            if ("object" != Hp(Op)) return Op;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === ip ? String : Number)(pp)
        }(pp, "string");
        return "symbol" == Hp(ip) ? ip : ip + ""
      }(ip)) in pp ? Object.defineProperty(pp, ip, {
        value: cp,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : pp[ip] = cp, pp
    }
    var ep = "recharts-tooltip-wrapper",
      jp = {
        visibility: "hidden"
      };

    function kp(pp) {
      var ip = pp.coordinate,
        cp = pp.translateX,
        Op = pp.translateY;
      return (0, Lp.d)(ep, dp(dp(dp(dp({}, "".concat(ep, "-right"), (0, Yp.D)(cp) && ip && (0, Yp.D)(ip.x) && cp >= ip.x), "".concat(ep, "-left"), (0, Yp.D)(cp) && ip && (0, Yp.D)(ip.x) && cp < ip.x), "".concat(ep, "-bottom"), (0, Yp.D)(Op) && ip && (0, Yp.D)(ip.y) && Op >= ip.y), "".concat(ep, "-top"), (0, Yp.D)(Op) && ip && (0, Yp.D)(ip.y) && Op < ip.y))
    }

    function mp(pp) {
      var ip = pp.allowEscapeViewBox,
        cp = pp.coordinate,
        Op = pp.key,
        op = pp.offsetTopLeft,
        Ip = pp.position,
        Sp = pp.reverseDirection,
        xp = pp.tooltipDimension,
        Lp = pp.viewBox,
        Dp = pp.viewBoxDimension;
      if (Ip && (0, Yp.D)(Ip[Op])) return Ip[Op];
      var Ap = cp[Op] - xp - op,
        Pp = cp[Op] + op;
      return ip[Op] ? Sp[Op] ? Ap : Pp : Sp[Op] ? Ap < Lp[Op] ? Math.max(Pp, Lp[Op]) : Math.max(Ap, Lp[Op]) : Pp + xp > Lp[Op] + Dp ? Math.max(Ap, Lp[Op]) : Math.max(Pp, Lp[Op])
    }

    function Rp(pp) {
      return Rp = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
        return typeof pp
      } : function(pp) {
        return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
      }, Rp(pp)
    }

    function qp(pp, ip) {
      var cp = Object.keys(pp);
      if (Object.getOwnPropertySymbols) {
        var Op = Object.getOwnPropertySymbols(pp);
        ip && (Op = Op.filter((function(ip) {
          return Object.getOwnPropertyDescriptor(pp, ip).enumerable
        }))), cp.push.apply(cp, Op)
      }
      return cp
    }

    function Mp(pp) {
      for (var ip = 1; ip < arguments.length; ip++) {
        var cp = null != arguments[ip] ? arguments[ip] : {};
        ip % 2 ? qp(Object(cp), !0).forEach((function(ip) {
          Jp(pp, ip, cp[ip])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : qp(Object(cp)).forEach((function(ip) {
          Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
        }))
      }
      return pp
    }

    function Cp(pp, ip) {
      for (var cp = 0; cp < ip.length; cp++) {
        var Op = ip[cp];
        Op.enumerable = Op.enumerable || !1, Op.configurable = !0, "value" in Op && (Op.writable = !0), Object.defineProperty(pp, Bp(Op.key), Op)
      }
    }

    function Ep(pp, ip, cp) {
      return ip = lp(ip),
        function(pp, ip) {
          if (ip && ("object" === Rp(ip) || "function" === typeof ip)) return ip;
          if (void 0 !== ip) throw new TypeError("Derived constructors may only return object or undefined");
          return function(pp) {
            if (void 0 === pp) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return pp
          }(pp)
        }(pp, Xp() ? Reflect.construct(ip, cp || [], lp(pp).constructor) : ip.apply(pp, cp))
    }

    function Xp() {
      try {
        var pp = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (pp) {}
      return (Xp = function() {
        return !!pp
      })()
    }

    function lp(pp) {
      return lp = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(pp) {
        return pp.__proto__ || Object.getPrototypeOf(pp)
      }, lp(pp)
    }

    function Qp(pp, ip) {
      return Qp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(pp, ip) {
        return pp.__proto__ = ip, pp
      }, Qp(pp, ip)
    }

    function Jp(pp, ip, cp) {
      return (ip = Bp(ip)) in pp ? Object.defineProperty(pp, ip, {
        value: cp,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : pp[ip] = cp, pp
    }

    function Bp(pp) {
      var ip = function(pp, ip) {
        if ("object" != Rp(pp) || !pp) return pp;
        var cp = pp[Symbol.toPrimitive];
        if (void 0 !== cp) {
          var Op = cp.call(pp, ip || "default");
          if ("object" != Rp(Op)) return Op;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ip ? String : Number)(pp)
      }(pp, "string");
      return "symbol" == Rp(ip) ? ip : ip + ""
    }
    var Np = function(pp) {
        function ip() {
          var pp;
          ! function(pp, ip) {
            if (!(pp instanceof ip)) throw new TypeError("Cannot call a class as a function")
          }(this, ip);
          for (var cp = arguments.length, Op = new Array(cp), op = 0; op < cp; op++) Op[op] = arguments[op];
          return Jp(pp = Ep(this, ip, [].concat(Op)), "state", {
            dismissed: !1,
            dismissedAtCoordinate: {
              x: 0,
              y: 0
            },
            lastBoundingBox: {
              width: -1,
              height: -1
            }
          }), Jp(pp, "handleKeyDown", (function(ip) {
            var cp, Op, op, Ip;
            "Escape" === ip.key && pp.setState({
              dismissed: !0,
              dismissedAtCoordinate: {
                x: null !== (cp = null === (Op = pp.props.coordinate) || void 0 === Op ? void 0 : Op.x) && void 0 !== cp ? cp : 0,
                y: null !== (op = null === (Ip = pp.props.coordinate) || void 0 === Ip ? void 0 : Ip.y) && void 0 !== op ? op : 0
              }
            })
          })), pp
        }
        return function(pp, ip) {
          if ("function" !== typeof ip && null !== ip) throw new TypeError("Super expression must either be null or a function");
          pp.prototype = Object.create(ip && ip.prototype, {
            constructor: {
              value: pp,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(pp, "prototype", {
            writable: !1
          }), ip && Qp(pp, ip)
        }(ip, pp), cp = ip, (op = [{
          key: "updateBBox",
          value: function() {
            if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
              var pp = this.wrapperNode.getBoundingClientRect();
              (Math.abs(pp.width - this.state.lastBoundingBox.width) > 1 || Math.abs(pp.height - this.state.lastBoundingBox.height) > 1) && this.setState({
                lastBoundingBox: {
                  width: pp.width,
                  height: pp.height
                }
              })
            } else - 1 === this.state.lastBoundingBox.width && -1 === this.state.lastBoundingBox.height || this.setState({
              lastBoundingBox: {
                width: -1,
                height: -1
              }
            })
          }
        }, {
          key: "componentDidMount",
          value: function() {
            document.addEventListener("keydown", this.handleKeyDown), this.updateBBox()
          }
        }, {
          key: "componentWillUnmount",
          value: function() {
            document.removeEventListener("keydown", this.handleKeyDown)
          }
        }, {
          key: "componentDidUpdate",
          value: function() {
            var pp, ip;
            this.props.active && this.updateBBox(), this.state.dismissed && ((null === (pp = this.props.coordinate) || void 0 === pp ? void 0 : pp.x) === this.state.dismissedAtCoordinate.x && (null === (ip = this.props.coordinate) || void 0 === ip ? void 0 : ip.y) === this.state.dismissedAtCoordinate.y || (this.state.dismissed = !1))
          }
        }, {
          key: "render",
          value: function() {
            var pp = this,
              ip = this.props,
              cp = ip.active,
              op = ip.allowEscapeViewBox,
              Ip = ip.animationDuration,
              Sp = ip.animationEasing,
              xp = ip.children,
              Lp = ip.coordinate,
              Yp = ip.hasPayload,
              Dp = ip.isAnimationActive,
              Ap = ip.offset,
              Pp = ip.position,
              Wp = ip.reverseDirection,
              yp = ip.useTranslate3d,
              Up = ip.viewBox,
              wp = ip.wrapperStyle,
              vp = function(pp) {
                var ip, cp, Op = pp.allowEscapeViewBox,
                  op = pp.coordinate,
                  Ip = pp.offsetTopLeft,
                  Sp = pp.position,
                  xp = pp.reverseDirection,
                  Lp = pp.tooltipBox,
                  Yp = pp.useTranslate3d,
                  Dp = pp.viewBox;
                return {
                  cssProperties: Lp.height > 0 && Lp.width > 0 && op ? function(pp) {
                    var ip = pp.translateX,
                      cp = pp.translateY;
                    return {
                      transform: pp.useTranslate3d ? "translate3d(".concat(ip, "px, ").concat(cp, "px, 0)") : "translate(".concat(ip, "px, ").concat(cp, "px)")
                    }
                  }({
                    translateX: ip = mp({
                      allowEscapeViewBox: Op,
                      coordinate: op,
                      key: "x",
                      offsetTopLeft: Ip,
                      position: Sp,
                      reverseDirection: xp,
                      tooltipDimension: Lp.width,
                      viewBox: Dp,
                      viewBoxDimension: Dp.width
                    }),
                    translateY: cp = mp({
                      allowEscapeViewBox: Op,
                      coordinate: op,
                      key: "y",
                      offsetTopLeft: Ip,
                      position: Sp,
                      reverseDirection: xp,
                      tooltipDimension: Lp.height,
                      viewBox: Dp,
                      viewBoxDimension: Dp.height
                    }),
                    useTranslate3d: Yp
                  }) : jp,
                  cssClasses: kp({
                    translateX: ip,
                    translateY: cp,
                    coordinate: op
                  })
                }
              }({
                allowEscapeViewBox: op,
                coordinate: Lp,
                offsetTopLeft: Ap,
                position: Pp,
                reverseDirection: Wp,
                tooltipBox: this.state.lastBoundingBox,
                useTranslate3d: yp,
                viewBox: Up
              }),
              tp = vp.cssClasses,
              Hp = vp.cssProperties,
              dp = Mp(Mp({
                transition: Dp && cp ? "transform ".concat(Ip, "ms ").concat(Sp) : void 0
              }, Hp), {}, {
                pointerEvents: "none",
                visibility: !this.state.dismissed && cp && Yp ? "visible" : "hidden",
                position: "absolute",
                top: 0,
                left: 0
              }, wp);
            return Op.createElement("div", {
              tabIndex: -1,
              className: tp,
              style: dp,
              ref: function(ip) {
                pp.wrapperNode = ip
              }
            }, xp)
          }
        }]) && Cp(cp.prototype, op), Ip && Cp(cp, Ip), Object.defineProperty(cp, "prototype", {
          writable: !1
        }), cp;
        var cp, op, Ip
      }(Op.PureComponent),
      Tp = cp(6115),
      fp = cp(6121);

    function bp(pp) {
      return bp = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
        return typeof pp
      } : function(pp) {
        return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
      }, bp(pp)
    }

    function hp(pp, ip) {
      var cp = Object.keys(pp);
      if (Object.getOwnPropertySymbols) {
        var Op = Object.getOwnPropertySymbols(pp);
        ip && (Op = Op.filter((function(ip) {
          return Object.getOwnPropertyDescriptor(pp, ip).enumerable
        }))), cp.push.apply(cp, Op)
      }
      return cp
    }

    function ap(pp) {
      for (var ip = 1; ip < arguments.length; ip++) {
        var cp = null != arguments[ip] ? arguments[ip] : {};
        ip % 2 ? hp(Object(cp), !0).forEach((function(ip) {
          Zp(pp, ip, cp[ip])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : hp(Object(cp)).forEach((function(ip) {
          Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
        }))
      }
      return pp
    }

    function np(pp, ip) {
      for (var cp = 0; cp < ip.length; cp++) {
        var Op = ip[cp];
        Op.enumerable = Op.enumerable || !1, Op.configurable = !0, "value" in Op && (Op.writable = !0), Object.defineProperty(pp, zp(Op.key), Op)
      }
    }

    function Fp(pp, ip, cp) {
      return ip = Gp(ip),
        function(pp, ip) {
          if (ip && ("object" === bp(ip) || "function" === typeof ip)) return ip;
          if (void 0 !== ip) throw new TypeError("Derived constructors may only return object or undefined");
          return function(pp) {
            if (void 0 === pp) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return pp
          }(pp)
        }(pp, gp() ? Reflect.construct(ip, cp || [], Gp(pp).constructor) : ip.apply(pp, cp))
    }

    function gp() {
      try {
        var pp = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (pp) {}
      return (gp = function() {
        return !!pp
      })()
    }

    function Gp(pp) {
      return Gp = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(pp) {
        return pp.__proto__ || Object.getPrototypeOf(pp)
      }, Gp(pp)
    }

    function rp(pp, ip) {
      return rp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(pp, ip) {
        return pp.__proto__ = ip, pp
      }, rp(pp, ip)
    }

    function Zp(pp, ip, cp) {
      return (ip = zp(ip)) in pp ? Object.defineProperty(pp, ip, {
        value: cp,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : pp[ip] = cp, pp
    }

    function zp(pp) {
      var ip = function(pp, ip) {
        if ("object" != bp(pp) || !pp) return pp;
        var cp = pp[Symbol.toPrimitive];
        if (void 0 !== cp) {
          var Op = cp.call(pp, ip || "default");
          if ("object" != bp(Op)) return Op;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ip ? String : Number)(pp)
      }(pp, "string");
      return "symbol" == bp(ip) ? ip : ip + ""
    }

    function sp(pp) {
      return pp.dataKey
    }
    var Kp = function(pp) {
      function ip() {
        return function(pp, ip) {
          if (!(pp instanceof ip)) throw new TypeError("Cannot call a class as a function")
        }(this, ip), Fp(this, ip, arguments)
      }
      return function(pp, ip) {
        if ("function" !== typeof ip && null !== ip) throw new TypeError("Super expression must either be null or a function");
        pp.prototype = Object.create(ip && ip.prototype, {
          constructor: {
            value: pp,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(pp, "prototype", {
          writable: !1
        }), ip && rp(pp, ip)
      }(ip, pp), cp = ip, (op = [{
        key: "render",
        value: function() {
          var pp = this,
            ip = this.props,
            cp = ip.active,
            op = ip.allowEscapeViewBox,
            Ip = ip.animationDuration,
            Sp = ip.animationEasing,
            xp = ip.content,
            Lp = ip.coordinate,
            Yp = ip.filterNull,
            Dp = ip.isAnimationActive,
            Ap = ip.offset,
            Pp = ip.payload,
            Wp = ip.payloadUniqBy,
            yp = ip.position,
            Up = ip.reverseDirection,
            wp = ip.useTranslate3d,
            vp = ip.viewBox,
            Hp = ip.wrapperStyle,
            dp = null !== Pp && void 0 !== Pp ? Pp : [];
          Yp && dp.length && (dp = (0, fp.e)(Pp.filter((function(ip) {
            return null != ip.value && (!0 !== ip.hide || pp.props.includeHidden)
          })), Wp, sp));
          var ep = dp.length > 0;
          return Op.createElement(Np, {
            allowEscapeViewBox: op,
            animationDuration: Ip,
            animationEasing: Sp,
            isAnimationActive: Dp,
            active: cp,
            coordinate: Lp,
            hasPayload: ep,
            offset: Ap,
            position: yp,
            reverseDirection: Up,
            useTranslate3d: wp,
            viewBox: vp,
            wrapperStyle: Hp
          }, function(pp, ip) {
            return Op.isValidElement(pp) ? Op.cloneElement(pp, ip) : "function" === typeof pp ? Op.createElement(pp, ip) : Op.createElement(tp, ip)
          }(xp, ap(ap({}, this.props), {}, {
            payload: dp
          })))
        }
      }]) && np(cp.prototype, op), Ip && np(cp, Ip), Object.defineProperty(cp, "prototype", {
        writable: !1
      }), cp;
      var cp, op, Ip
    }(Op.PureComponent);
    Zp(Kp, "displayName", "Tooltip"), Zp(Kp, "defaultProps", {
      accessibilityLayer: !1,
      allowEscapeViewBox: {
        x: !1,
        y: !1
      },
      animationDuration: 400,
      animationEasing: "ease",
      contentStyle: {},
      coordinate: {
        x: 0,
        y: 0
      },
      cursor: !0,
      cursorStyle: {},
      filterNull: !0,
      isAnimationActive: !Tp.e.isSsr,
      itemStyle: {},
      labelStyle: {},
      offset: 10,
      reverseDirection: {
        x: !1,
        y: !1
      },
      separator: " : ",
      trigger: "hover",
      useTranslate3d: !1,
      viewBox: {
        x: 0,
        y: 0,
        height: 0,
        width: 0
      },
      wrapperStyle: {}
    })
  },
  6103: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Yp
    });
    var Op = cp(62),
      op = cp(5203),
      Ip = cp(5588),
      Sp = ["children", "className"];

    function xp() {
      return xp = Object.assign ? Object.assign.bind() : function(pp) {
        for (var ip = 1; ip < arguments.length; ip++) {
          var cp = arguments[ip];
          for (var Op in cp) Object.prototype.hasOwnProperty.call(cp, Op) && (pp[Op] = cp[Op])
        }
        return pp
      }, xp.apply(this, arguments)
    }

    function Lp(pp, ip) {
      if (null == pp) return {};
      var cp, Op, op = function(pp, ip) {
        if (null == pp) return {};
        var cp = {};
        for (var Op in pp)
          if (Object.prototype.hasOwnProperty.call(pp, Op)) {
            if (ip.indexOf(Op) >= 0) continue;
            cp[Op] = pp[Op]
          } return cp
      }(pp, ip);
      if (Object.getOwnPropertySymbols) {
        var Ip = Object.getOwnPropertySymbols(pp);
        for (Op = 0; Op < Ip.length; Op++) cp = Ip[Op], ip.indexOf(cp) >= 0 || Object.prototype.propertyIsEnumerable.call(pp, cp) && (op[cp] = pp[cp])
      }
      return op
    }
    var Yp = Op.forwardRef((function(pp, ip) {
      var cp = pp.children,
        Yp = pp.className,
        Dp = Lp(pp, Sp),
        Ap = (0, op.d)("recharts-layer", Yp);
      return Op.createElement("g", xp({
        className: Ap
      }, (0, Ip.d)(Dp, !0), {
        ref: ip
      }), cp)
    }))
  },
  6101: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Yp
    });
    var Op = cp(62),
      op = cp(5203),
      Ip = cp(5588),
      Sp = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];

    function xp() {
      return xp = Object.assign ? Object.assign.bind() : function(pp) {
        for (var ip = 1; ip < arguments.length; ip++) {
          var cp = arguments[ip];
          for (var Op in cp) Object.prototype.hasOwnProperty.call(cp, Op) && (pp[Op] = cp[Op])
        }
        return pp
      }, xp.apply(this, arguments)
    }

    function Lp(pp, ip) {
      if (null == pp) return {};
      var cp, Op, op = function(pp, ip) {
        if (null == pp) return {};
        var cp = {};
        for (var Op in pp)
          if (Object.prototype.hasOwnProperty.call(pp, Op)) {
            if (ip.indexOf(Op) >= 0) continue;
            cp[Op] = pp[Op]
          } return cp
      }(pp, ip);
      if (Object.getOwnPropertySymbols) {
        var Ip = Object.getOwnPropertySymbols(pp);
        for (Op = 0; Op < Ip.length; Op++) cp = Ip[Op], ip.indexOf(cp) >= 0 || Object.prototype.propertyIsEnumerable.call(pp, cp) && (op[cp] = pp[cp])
      }
      return op
    }

    function Yp(pp) {
      var ip = pp.children,
        cp = pp.width,
        Yp = pp.height,
        Dp = pp.viewBox,
        Ap = pp.className,
        Pp = pp.style,
        Wp = pp.title,
        yp = pp.desc,
        Up = Lp(pp, Sp),
        wp = Dp || {
          width: cp,
          height: Yp,
          x: 0,
          y: 0
        },
        vp = (0, op.d)("recharts-surface", Ap);
      return Op.createElement("svg", xp({}, (0, Ip.d)(Up, !0, "svg"), {
        className: vp,
        width: cp,
        height: Yp,
        style: Pp,
        viewBox: "".concat(wp.x, " ").concat(wp.y, " ").concat(wp.width, " ").concat(wp.height)
      }), Op.createElement("title", null, Wp), Op.createElement("desc", null, yp), ip)
    }
  },
  6470: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Hp,
      e: () => jp,
      i: () => Cp,
      l: () => Mp,
      m: () => dp,
      p: () => qp,
      t: () => Rp,
      x: () => ep,
      y: () => mp,
      B: () => kp
    });
    var Op = cp(62),
      op = cp(6096),
      Ip = cp(6475),
      Sp = cp.n(Ip),
      xp = cp(6383),
      Lp = cp.n(xp),
      Yp = cp(5362),
      Dp = cp.n(Yp)()((function(pp) {
        return {
          x: pp.left,
          y: pp.top,
          width: pp.width,
          height: pp.height
        }
      }), (function(pp) {
        return ["l", pp.left, "t", pp.top, "w", pp.width, "h", pp.height].join("")
      })),
      Ap = cp(5299);
    var Pp = (0, Op.createContext)(void 0),
      Wp = (0, Op.createContext)(void 0),
      yp = (0, Op.createContext)(void 0),
      Up = (0, Op.createContext)({}),
      wp = (0, Op.createContext)(void 0),
      vp = (0, Op.createContext)(0),
      tp = (0, Op.createContext)(0),
      Hp = function(pp) {
        var ip = pp.state,
          cp = ip.xAxisMap,
          op = ip.yAxisMap,
          Ip = ip.offset,
          Sp = pp.clipPathId,
          xp = pp.children,
          Lp = pp.width,
          Yp = pp.height,
          Ap = Dp(Ip);
        return Op.createElement(Pp.Provider, {
          value: cp
        }, Op.createElement(Wp.Provider, {
          value: op
        }, Op.createElement(Up.Provider, {
          value: Ip
        }, Op.createElement(yp.Provider, {
          value: Ap
        }, Op.createElement(wp.Provider, {
          value: Sp
        }, Op.createElement(vp.Provider, {
          value: Yp
        }, Op.createElement(tp.Provider, {
          value: Lp
        }, xp)))))))
      },
      dp = function() {
        return (0, Op.useContext)(wp)
      };
    var ep = function(pp) {
        var ip = (0, Op.useContext)(Pp);
        null == ip && (0, op.d)(!1);
        var cp = ip[pp];
        return null == cp && (0, op.d)(!1), cp
      },
      jp = function() {
        var pp = (0, Op.useContext)(Pp);
        return (0, Ap.k)(pp)
      },
      kp = function() {
        var pp = (0, Op.useContext)(Wp);
        return Sp()(pp, (function(pp) {
          return Lp()(pp.domain, Number.isFinite)
        })) || (0, Ap.k)(pp)
      },
      mp = function(pp) {
        var ip = (0, Op.useContext)(Wp);
        null == ip && (0, op.d)(!1);
        var cp = ip[pp];
        return null == cp && (0, op.d)(!1), cp
      },
      Rp = function() {
        return (0, Op.useContext)(yp)
      },
      qp = function() {
        return (0, Op.useContext)(Up)
      },
      Mp = function() {
        return (0, Op.useContext)(tp)
      },
      Cp = function() {
        return (0, Op.useContext)(vp)
      }
  },
  6493: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => sp
    });
    var Op = cp(62);

    function op() {}

    function Ip(pp, ip, cp) {
      pp._context.bezierCurveTo((2 * pp._x0 + pp._x1) / 3, (2 * pp._y0 + pp._y1) / 3, (pp._x0 + 2 * pp._x1) / 3, (pp._y0 + 2 * pp._y1) / 3, (pp._x0 + 4 * pp._x1 + ip) / 6, (pp._y0 + 4 * pp._y1 + cp) / 6)
    }

    function Sp(pp) {
      this._context = pp
    }

    function xp(pp) {
      this._context = pp
    }

    function Lp(pp) {
      this._context = pp
    }
    Sp.prototype = {
      areaStart: function() {
        this._line = 0
      },
      areaEnd: function() {
        this._line = NaN
      },
      lineStart: function() {
        this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
      },
      lineEnd: function() {
        switch (this._point) {
          case 3:
            Ip(this, this._x1, this._y1);
          case 2:
            this._context.lineTo(this._x1, this._y1)
        }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
      },
      point: function(pp, ip) {
        switch (pp = +pp, ip = +ip, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(pp, ip) : this._context.moveTo(pp, ip);
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
          default:
            Ip(this, pp, ip)
        }
        this._x0 = this._x1, this._x1 = pp, this._y0 = this._y1, this._y1 = ip
      }
    }, xp.prototype = {
      areaStart: op,
      areaEnd: op,
      lineStart: function() {
        this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0
      },
      lineEnd: function() {
        switch (this._point) {
          case 1:
            this._context.moveTo(this._x2, this._y2), this._context.closePath();
            break;
          case 2:
            this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
            break;
          case 3:
            this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4)
        }
      },
      point: function(pp, ip) {
        switch (pp = +pp, ip = +ip, this._point) {
          case 0:
            this._point = 1, this._x2 = pp, this._y2 = ip;
            break;
          case 1:
            this._point = 2, this._x3 = pp, this._y3 = ip;
            break;
          case 2:
            this._point = 3, this._x4 = pp, this._y4 = ip, this._context.moveTo((this._x0 + 4 * this._x1 + pp) / 6, (this._y0 + 4 * this._y1 + ip) / 6);
            break;
          default:
            Ip(this, pp, ip)
        }
        this._x0 = this._x1, this._x1 = pp, this._y0 = this._y1, this._y1 = ip
      }
    }, Lp.prototype = {
      areaStart: function() {
        this._line = 0
      },
      areaEnd: function() {
        this._line = NaN
      },
      lineStart: function() {
        this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
      },
      lineEnd: function() {
        (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
      },
      point: function(pp, ip) {
        switch (pp = +pp, ip = +ip, this._point) {
          case 0:
            this._point = 1;
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3;
            var cp = (this._x0 + 4 * this._x1 + pp) / 6,
              Op = (this._y0 + 4 * this._y1 + ip) / 6;
            this._line ? this._context.lineTo(cp, Op) : this._context.moveTo(cp, Op);
            break;
          case 3:
            this._point = 4;
          default:
            Ip(this, pp, ip)
        }
        this._x0 = this._x1, this._x1 = pp, this._y0 = this._y1, this._y1 = ip
      }
    };
    class Yp {
      constructor(pp, ip) {
        this._context = pp, this._x = ip
      }
      areaStart() {
        this._line = 0
      }
      areaEnd() {
        this._line = NaN
      }
      lineStart() {
        this._point = 0
      }
      lineEnd() {
        (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
      }
      point(pp, ip) {
        switch (pp = +pp, ip = +ip, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(pp, ip) : this._context.moveTo(pp, ip);
            break;
          case 1:
            this._point = 2;
          default:
            this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + pp) / 2, this._y0, this._x0, ip, pp, ip) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + ip) / 2, pp, this._y0, pp, ip)
        }
        this._x0 = pp, this._y0 = ip
      }
    }

    function Dp(pp) {
      this._context = pp
    }

    function Ap(pp) {
      this._context = pp
    }

    function Pp(pp) {
      return new Ap(pp)
    }

    function Wp(pp) {
      return pp < 0 ? -1 : 1
    }

    function yp(pp, ip, cp) {
      var Op = pp._x1 - pp._x0,
        op = ip - pp._x1,
        Ip = (pp._y1 - pp._y0) / (Op || op < 0 && -0),
        Sp = (cp - pp._y1) / (op || Op < 0 && -0),
        xp = (Ip * op + Sp * Op) / (Op + op);
      return (Wp(Ip) + Wp(Sp)) * Math.min(Math.abs(Ip), Math.abs(Sp), .5 * Math.abs(xp)) || 0
    }

    function Up(pp, ip) {
      var cp = pp._x1 - pp._x0;
      return cp ? (3 * (pp._y1 - pp._y0) / cp - ip) / 2 : ip
    }

    function wp(pp, ip, cp) {
      var Op = pp._x0,
        op = pp._y0,
        Ip = pp._x1,
        Sp = pp._y1,
        xp = (Ip - Op) / 3;
      pp._context.bezierCurveTo(Op + xp, op + xp * ip, Ip - xp, Sp - xp * cp, Ip, Sp)
    }

    function vp(pp) {
      this._context = pp
    }

    function tp(pp) {
      this._context = new Hp(pp)
    }

    function Hp(pp) {
      this._context = pp
    }

    function dp(pp) {
      this._context = pp
    }

    function ep(pp) {
      var ip, cp, Op = pp.length - 1,
        op = new Array(Op),
        Ip = new Array(Op),
        Sp = new Array(Op);
      for (op[0] = 0, Ip[0] = 2, Sp[0] = pp[0] + 2 * pp[1], ip = 1; ip < Op - 1; ++ip) op[ip] = 1, Ip[ip] = 4, Sp[ip] = 4 * pp[ip] + 2 * pp[ip + 1];
      for (op[Op - 1] = 2, Ip[Op - 1] = 7, Sp[Op - 1] = 8 * pp[Op - 1] + pp[Op], ip = 1; ip < Op; ++ip) cp = op[ip] / Ip[ip - 1], Ip[ip] -= cp, Sp[ip] -= cp * Sp[ip - 1];
      for (op[Op - 1] = Sp[Op - 1] / Ip[Op - 1], ip = Op - 2; ip >= 0; --ip) op[ip] = (Sp[ip] - op[ip + 1]) / Ip[ip];
      for (Ip[Op - 1] = (pp[Op] + op[Op - 1]) / 2, ip = 0; ip < Op - 1; ++ip) Ip[ip] = 2 * pp[ip + 1] - op[ip + 1];
      return [op, Ip]
    }

    function jp(pp, ip) {
      this._context = pp, this._t = ip
    }
    Dp.prototype = {
      areaStart: op,
      areaEnd: op,
      lineStart: function() {
        this._point = 0
      },
      lineEnd: function() {
        this._point && this._context.closePath()
      },
      point: function(pp, ip) {
        pp = +pp, ip = +ip, this._point ? this._context.lineTo(pp, ip) : (this._point = 1, this._context.moveTo(pp, ip))
      }
    }, Ap.prototype = {
      areaStart: function() {
        this._line = 0
      },
      areaEnd: function() {
        this._line = NaN
      },
      lineStart: function() {
        this._point = 0
      },
      lineEnd: function() {
        (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
      },
      point: function(pp, ip) {
        switch (pp = +pp, ip = +ip, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(pp, ip) : this._context.moveTo(pp, ip);
            break;
          case 1:
            this._point = 2;
          default:
            this._context.lineTo(pp, ip)
        }
      }
    }, vp.prototype = {
      areaStart: function() {
        this._line = 0
      },
      areaEnd: function() {
        this._line = NaN
      },
      lineStart: function() {
        this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0
      },
      lineEnd: function() {
        switch (this._point) {
          case 2:
            this._context.lineTo(this._x1, this._y1);
            break;
          case 3:
            wp(this, this._t0, Up(this, this._t0))
        }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
      },
      point: function(pp, ip) {
        var cp = NaN;
        if (ip = +ip, (pp = +pp) !== this._x1 || ip !== this._y1) {
          switch (this._point) {
            case 0:
              this._point = 1, this._line ? this._context.lineTo(pp, ip) : this._context.moveTo(pp, ip);
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              this._point = 3, wp(this, Up(this, cp = yp(this, pp, ip)), cp);
              break;
            default:
              wp(this, this._t0, cp = yp(this, pp, ip))
          }
          this._x0 = this._x1, this._x1 = pp, this._y0 = this._y1, this._y1 = ip, this._t0 = cp
        }
      }
    }, (tp.prototype = Object.create(vp.prototype)).point = function(pp, ip) {
      vp.prototype.point.call(this, ip, pp)
    }, Hp.prototype = {
      moveTo: function(pp, ip) {
        this._context.moveTo(ip, pp)
      },
      closePath: function() {
        this._context.closePath()
      },
      lineTo: function(pp, ip) {
        this._context.lineTo(ip, pp)
      },
      bezierCurveTo: function(pp, ip, cp, Op, op, Ip) {
        this._context.bezierCurveTo(ip, pp, Op, cp, Ip, op)
      }
    }, dp.prototype = {
      areaStart: function() {
        this._line = 0
      },
      areaEnd: function() {
        this._line = NaN
      },
      lineStart: function() {
        this._x = [], this._y = []
      },
      lineEnd: function() {
        var pp = this._x,
          ip = this._y,
          cp = pp.length;
        if (cp)
          if (this._line ? this._context.lineTo(pp[0], ip[0]) : this._context.moveTo(pp[0], ip[0]), 2 === cp) this._context.lineTo(pp[1], ip[1]);
          else
            for (var Op = ep(pp), op = ep(ip), Ip = 0, Sp = 1; Sp < cp; ++Ip, ++Sp) this._context.bezierCurveTo(Op[0][Ip], op[0][Ip], Op[1][Ip], op[1][Ip], pp[Sp], ip[Sp]);
        (this._line || 0 !== this._line && 1 === cp) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null
      },
      point: function(pp, ip) {
        this._x.push(+pp), this._y.push(+ip)
      }
    }, jp.prototype = {
      areaStart: function() {
        this._line = 0
      },
      areaEnd: function() {
        this._line = NaN
      },
      lineStart: function() {
        this._x = this._y = NaN, this._point = 0
      },
      lineEnd: function() {
        0 < this._t && this._t < 1 && 2 === this._point && this._context.lineTo(this._x, this._y), (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line)
      },
      point: function(pp, ip) {
        switch (pp = +pp, ip = +ip, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(pp, ip) : this._context.moveTo(pp, ip);
            break;
          case 1:
            this._point = 2;
          default:
            if (this._t <= 0) this._context.lineTo(this._x, ip), this._context.lineTo(pp, ip);
            else {
              var cp = this._x * (1 - this._t) + pp * this._t;
              this._context.lineTo(cp, this._y), this._context.lineTo(cp, ip)
            }
        }
        this._x = pp, this._y = ip
      }
    };
    var kp = cp(6344),
      mp = cp(6229),
      Rp = cp(6231);

    function qp(pp) {
      return pp[0]
    }

    function Mp(pp) {
      return pp[1]
    }

    function Cp(pp, ip) {
      var cp = (0, mp.c)(!0),
        Op = null,
        op = Pp,
        Ip = null,
        Sp = (0, Rp.d)(xp);

      function xp(xp) {
        var Lp, Yp, Dp, Ap = (xp = (0, kp.d)(xp)).length,
          Pp = !1;
        for (null == Op && (Ip = op(Dp = Sp())), Lp = 0; Lp <= Ap; ++Lp) !(Lp < Ap && cp(Yp = xp[Lp], Lp, xp)) === Pp && ((Pp = !Pp) ? Ip.lineStart() : Ip.lineEnd()), Pp && Ip.point(+pp(Yp, Lp, xp), +ip(Yp, Lp, xp));
        if (Dp) return Ip = null, Dp + "" || null
      }
      return pp = "function" === typeof pp ? pp : void 0 === pp ? qp : (0, mp.c)(pp), ip = "function" === typeof ip ? ip : void 0 === ip ? Mp : (0, mp.c)(ip), xp.x = function(ip) {
        return arguments.length ? (pp = "function" === typeof ip ? ip : (0, mp.c)(+ip), xp) : pp
      }, xp.y = function(pp) {
        return arguments.length ? (ip = "function" === typeof pp ? pp : (0, mp.c)(+pp), xp) : ip
      }, xp.defined = function(pp) {
        return arguments.length ? (cp = "function" === typeof pp ? pp : (0, mp.c)(!!pp), xp) : cp
      }, xp.curve = function(pp) {
        return arguments.length ? (op = pp, null != Op && (Ip = op(Op)), xp) : op
      }, xp.context = function(pp) {
        return arguments.length ? (null == pp ? Op = Ip = null : Ip = op(Op = pp), xp) : Op
      }, xp
    }

    function Ep(pp, ip, cp) {
      var Op = null,
        op = (0, mp.c)(!0),
        Ip = null,
        Sp = Pp,
        xp = null,
        Lp = (0, Rp.d)(Yp);

      function Yp(Yp) {
        var Dp, Ap, Pp, Wp, yp, Up = (Yp = (0, kp.d)(Yp)).length,
          wp = !1,
          vp = new Array(Up),
          tp = new Array(Up);
        for (null == Ip && (xp = Sp(yp = Lp())), Dp = 0; Dp <= Up; ++Dp) {
          if (!(Dp < Up && op(Wp = Yp[Dp], Dp, Yp)) === wp)
            if (wp = !wp) Ap = Dp, xp.areaStart(), xp.lineStart();
            else {
              for (xp.lineEnd(), xp.lineStart(), Pp = Dp - 1; Pp >= Ap; --Pp) xp.point(vp[Pp], tp[Pp]);
              xp.lineEnd(), xp.areaEnd()
            } wp && (vp[Dp] = +pp(Wp, Dp, Yp), tp[Dp] = +ip(Wp, Dp, Yp), xp.point(Op ? +Op(Wp, Dp, Yp) : vp[Dp], cp ? +cp(Wp, Dp, Yp) : tp[Dp]))
        }
        if (yp) return xp = null, yp + "" || null
      }

      function Dp() {
        return Cp().defined(op).curve(Sp).context(Ip)
      }
      return pp = "function" === typeof pp ? pp : void 0 === pp ? qp : (0, mp.c)(+pp), ip = "function" === typeof ip ? ip : void 0 === ip ? (0, mp.c)(0) : (0, mp.c)(+ip), cp = "function" === typeof cp ? cp : void 0 === cp ? Mp : (0, mp.c)(+cp), Yp.x = function(ip) {
        return arguments.length ? (pp = "function" === typeof ip ? ip : (0, mp.c)(+ip), Op = null, Yp) : pp
      }, Yp.x0 = function(ip) {
        return arguments.length ? (pp = "function" === typeof ip ? ip : (0, mp.c)(+ip), Yp) : pp
      }, Yp.x1 = function(pp) {
        return arguments.length ? (Op = null == pp ? null : "function" === typeof pp ? pp : (0, mp.c)(+pp), Yp) : Op
      }, Yp.y = function(pp) {
        return arguments.length ? (ip = "function" === typeof pp ? pp : (0, mp.c)(+pp), cp = null, Yp) : ip
      }, Yp.y0 = function(pp) {
        return arguments.length ? (ip = "function" === typeof pp ? pp : (0, mp.c)(+pp), Yp) : ip
      }, Yp.y1 = function(pp) {
        return arguments.length ? (cp = null == pp ? null : "function" === typeof pp ? pp : (0, mp.c)(+pp), Yp) : cp
      }, Yp.lineX0 = Yp.lineY0 = function() {
        return Dp().x(pp).y(ip)
      }, Yp.lineY1 = function() {
        return Dp().x(pp).y(cp)
      }, Yp.lineX1 = function() {
        return Dp().x(Op).y(ip)
      }, Yp.defined = function(pp) {
        return arguments.length ? (op = "function" === typeof pp ? pp : (0, mp.c)(!!pp), Yp) : op
      }, Yp.curve = function(pp) {
        return arguments.length ? (Sp = pp, null != Ip && (xp = Sp(Ip)), Yp) : Sp
      }, Yp.context = function(pp) {
        return arguments.length ? (null == pp ? Ip = xp = null : xp = Sp(Ip = pp), Yp) : Ip
      }, Yp
    }
    var Xp = cp(6192),
      lp = cp.n(Xp),
      Qp = cp(5405),
      Jp = cp.n(Qp),
      Bp = cp(5203),
      Np = cp(5619),
      Tp = cp(5588),
      fp = cp(5299);

    function bp(pp) {
      return bp = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
        return typeof pp
      } : function(pp) {
        return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
      }, bp(pp)
    }

    function hp() {
      return hp = Object.assign ? Object.assign.bind() : function(pp) {
        for (var ip = 1; ip < arguments.length; ip++) {
          var cp = arguments[ip];
          for (var Op in cp) Object.prototype.hasOwnProperty.call(cp, Op) && (pp[Op] = cp[Op])
        }
        return pp
      }, hp.apply(this, arguments)
    }

    function ap(pp, ip) {
      var cp = Object.keys(pp);
      if (Object.getOwnPropertySymbols) {
        var Op = Object.getOwnPropertySymbols(pp);
        ip && (Op = Op.filter((function(ip) {
          return Object.getOwnPropertyDescriptor(pp, ip).enumerable
        }))), cp.push.apply(cp, Op)
      }
      return cp
    }

    function np(pp) {
      for (var ip = 1; ip < arguments.length; ip++) {
        var cp = null != arguments[ip] ? arguments[ip] : {};
        ip % 2 ? ap(Object(cp), !0).forEach((function(ip) {
          Fp(pp, ip, cp[ip])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : ap(Object(cp)).forEach((function(ip) {
          Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
        }))
      }
      return pp
    }

    function Fp(pp, ip, cp) {
      return (ip = function(pp) {
        var ip = function(pp, ip) {
          if ("object" != bp(pp) || !pp) return pp;
          var cp = pp[Symbol.toPrimitive];
          if (void 0 !== cp) {
            var Op = cp.call(pp, ip || "default");
            if ("object" != bp(Op)) return Op;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === ip ? String : Number)(pp)
        }(pp, "string");
        return "symbol" == bp(ip) ? ip : ip + ""
      }(ip)) in pp ? Object.defineProperty(pp, ip, {
        value: cp,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : pp[ip] = cp, pp
    }
    var gp = {
        curveBasisClosed: function(pp) {
          return new xp(pp)
        },
        curveBasisOpen: function(pp) {
          return new Lp(pp)
        },
        curveBasis: function(pp) {
          return new Sp(pp)
        },
        curveBumpX: function(pp) {
          return new Yp(pp, !0)
        },
        curveBumpY: function(pp) {
          return new Yp(pp, !1)
        },
        curveLinearClosed: function(pp) {
          return new Dp(pp)
        },
        curveLinear: Pp,
        curveMonotoneX: function(pp) {
          return new vp(pp)
        },
        curveMonotoneY: function(pp) {
          return new tp(pp)
        },
        curveNatural: function(pp) {
          return new dp(pp)
        },
        curveStep: function(pp) {
          return new jp(pp, .5)
        },
        curveStepAfter: function(pp) {
          return new jp(pp, 1)
        },
        curveStepBefore: function(pp) {
          return new jp(pp, 0)
        }
      },
      Gp = function(pp) {
        return pp.x === +pp.x && pp.y === +pp.y
      },
      rp = function(pp) {
        return pp.x
      },
      Zp = function(pp) {
        return pp.y
      },
      zp = function(pp) {
        var ip, cp = pp.type,
          Op = void 0 === cp ? "linear" : cp,
          op = pp.points,
          Ip = void 0 === op ? [] : op,
          Sp = pp.baseLine,
          xp = pp.layout,
          Lp = pp.connectNulls,
          Yp = void 0 !== Lp && Lp,
          Dp = function(pp, ip) {
            if (Jp()(pp)) return pp;
            var cp = "curve".concat(lp()(pp));
            return "curveMonotone" !== cp && "curveBump" !== cp || !ip ? gp[cp] || Pp : gp["".concat(cp).concat("vertical" === ip ? "Y" : "X")]
          }(Op, xp),
          Ap = Yp ? Ip.filter((function(pp) {
            return Gp(pp)
          })) : Ip;
        if (Array.isArray(Sp)) {
          var Wp = Yp ? Sp.filter((function(pp) {
              return Gp(pp)
            })) : Sp,
            yp = Ap.map((function(pp, ip) {
              return np(np({}, pp), {}, {
                base: Wp[ip]
              })
            }));
          return (ip = "vertical" === xp ? Ep().y(Zp).x1(rp).x0((function(pp) {
            return pp.base.x
          })) : Ep().x(rp).y1(Zp).y0((function(pp) {
            return pp.base.y
          }))).defined(Gp).curve(Dp), ip(yp)
        }
        return (ip = "vertical" === xp && (0, fp.D)(Sp) ? Ep().y(Zp).x1(rp).x0(Sp) : (0, fp.D)(Sp) ? Ep().x(rp).y1(Zp).y0(Sp) : Cp().x(rp).y(Zp)).defined(Gp).curve(Dp), ip(Ap)
      },
      sp = function(pp) {
        var ip = pp.className,
          cp = pp.points,
          op = pp.path,
          Ip = pp.pathRef;
        if ((!cp || !cp.length) && !op) return null;
        var Sp = cp && cp.length ? zp(pp) : op;
        return Op.createElement("path", hp({}, (0, Tp.d)(pp, !1), (0, Np.h)(pp), {
          className: (0, Bp.d)("recharts-curve", ip),
          d: Sp,
          ref: Ip
        }))
      }
  },
  6238: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Lp
    });
    var Op = cp(62),
      op = cp(5203),
      Ip = cp(5619),
      Sp = cp(5588);

    function xp() {
      return xp = Object.assign ? Object.assign.bind() : function(pp) {
        for (var ip = 1; ip < arguments.length; ip++) {
          var cp = arguments[ip];
          for (var Op in cp) Object.prototype.hasOwnProperty.call(cp, Op) && (pp[Op] = cp[Op])
        }
        return pp
      }, xp.apply(this, arguments)
    }
    var Lp = function(pp) {
      var ip = pp.cx,
        cp = pp.cy,
        Lp = pp.r,
        Yp = pp.className,
        Dp = (0, op.d)("recharts-dot", Yp);
      return ip === +ip && cp === +cp && Lp === +Lp ? Op.createElement("circle", xp({}, (0, Sp.d)(pp, !1), (0, Ip.h)(pp), {
        className: Dp,
        cx: ip,
        cy: cp,
        r: Lp
      })) : null
    }
  },
  6247: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => vp,
      g: () => Up
    });
    var Op = cp(62),
      op = cp(5203),
      Ip = cp(6256),
      Sp = cp(5588);

    function xp(pp) {
      return xp = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
        return typeof pp
      } : function(pp) {
        return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
      }, xp(pp)
    }

    function Lp() {
      return Lp = Object.assign ? Object.assign.bind() : function(pp) {
        for (var ip = 1; ip < arguments.length; ip++) {
          var cp = arguments[ip];
          for (var Op in cp) Object.prototype.hasOwnProperty.call(cp, Op) && (pp[Op] = cp[Op])
        }
        return pp
      }, Lp.apply(this, arguments)
    }

    function Yp(pp, ip) {
      return function(pp) {
        if (Array.isArray(pp)) return pp
      }(pp) || function(pp, ip) {
        var cp = null == pp ? null : "undefined" != typeof Symbol && pp[Symbol.iterator] || pp["@@iterator"];
        if (null != cp) {
          var Op, op, Ip, Sp, xp = [],
            Lp = !0,
            Yp = !1;
          try {
            if (Ip = (cp = cp.call(pp)).next, 0 === ip) {
              if (Object(cp) !== cp) return;
              Lp = !1
            } else
              for (; !(Lp = (Op = Ip.call(cp)).done) && (xp.push(Op.value), xp.length !== ip); Lp = !0);
          } catch (pp) {
            Yp = !0, op = pp
          } finally {
            try {
              if (!Lp && null != cp.return && (Sp = cp.return(), Object(Sp) !== Sp)) return
            } finally {
              if (Yp) throw op
            }
          }
          return xp
        }
      }(pp, ip) || function(pp, ip) {
        if (!pp) return;
        if ("string" === typeof pp) return Dp(pp, ip);
        var cp = Object.prototype.toString.call(pp).slice(8, -1);
        "Object" === cp && pp.constructor && (cp = pp.constructor.name);
        if ("Map" === cp || "Set" === cp) return Array.from(pp);
        if ("Arguments" === cp || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cp)) return Dp(pp, ip)
      }(pp, ip) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Dp(pp, ip) {
      (null == ip || ip > pp.length) && (ip = pp.length);
      for (var cp = 0, Op = new Array(ip); cp < ip; cp++) Op[cp] = pp[cp];
      return Op
    }

    function Ap(pp, ip) {
      var cp = Object.keys(pp);
      if (Object.getOwnPropertySymbols) {
        var Op = Object.getOwnPropertySymbols(pp);
        ip && (Op = Op.filter((function(ip) {
          return Object.getOwnPropertyDescriptor(pp, ip).enumerable
        }))), cp.push.apply(cp, Op)
      }
      return cp
    }

    function Pp(pp) {
      for (var ip = 1; ip < arguments.length; ip++) {
        var cp = null != arguments[ip] ? arguments[ip] : {};
        ip % 2 ? Ap(Object(cp), !0).forEach((function(ip) {
          Wp(pp, ip, cp[ip])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : Ap(Object(cp)).forEach((function(ip) {
          Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
        }))
      }
      return pp
    }

    function Wp(pp, ip, cp) {
      return (ip = function(pp) {
        var ip = function(pp, ip) {
          if ("object" != xp(pp) || !pp) return pp;
          var cp = pp[Symbol.toPrimitive];
          if (void 0 !== cp) {
            var Op = cp.call(pp, ip || "default");
            if ("object" != xp(Op)) return Op;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === ip ? String : Number)(pp)
        }(pp, "string");
        return "symbol" == xp(ip) ? ip : ip + ""
      }(ip)) in pp ? Object.defineProperty(pp, ip, {
        value: cp,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : pp[ip] = cp, pp
    }
    var yp = function(pp, ip, cp, Op, op) {
        var Ip, Sp = Math.min(Math.abs(cp) / 2, Math.abs(Op) / 2),
          xp = Op >= 0 ? 1 : -1,
          Lp = cp >= 0 ? 1 : -1,
          Yp = Op >= 0 && cp >= 0 || Op < 0 && cp < 0 ? 1 : 0;
        if (Sp > 0 && op instanceof Array) {
          for (var Dp = [0, 0, 0, 0], Ap = 0; Ap < 4; Ap++) Dp[Ap] = op[Ap] > Sp ? Sp : op[Ap];
          Ip = "M".concat(pp, ",").concat(ip + xp * Dp[0]), Dp[0] > 0 && (Ip += "A ".concat(Dp[0], ",").concat(Dp[0], ",0,0,").concat(Yp, ",").concat(pp + Lp * Dp[0], ",").concat(ip)), Ip += "L ".concat(pp + cp - Lp * Dp[1], ",").concat(ip), Dp[1] > 0 && (Ip += "A ".concat(Dp[1], ",").concat(Dp[1], ",0,0,").concat(Yp, ",\n        ").concat(pp + cp, ",").concat(ip + xp * Dp[1])), Ip += "L ".concat(pp + cp, ",").concat(ip + Op - xp * Dp[2]), Dp[2] > 0 && (Ip += "A ".concat(Dp[2], ",").concat(Dp[2], ",0,0,").concat(Yp, ",\n        ").concat(pp + cp - Lp * Dp[2], ",").concat(ip + Op)), Ip += "L ".concat(pp + Lp * Dp[3], ",").concat(ip + Op), Dp[3] > 0 && (Ip += "A ".concat(Dp[3], ",").concat(Dp[3], ",0,0,").concat(Yp, ",\n        ").concat(pp, ",").concat(ip + Op - xp * Dp[3])), Ip += "Z"
        } else if (Sp > 0 && op === +op && op > 0) {
          var Pp = Math.min(Sp, op);
          Ip = "M ".concat(pp, ",").concat(ip + xp * Pp, "\n            A ").concat(Pp, ",").concat(Pp, ",0,0,").concat(Yp, ",").concat(pp + Lp * Pp, ",").concat(ip, "\n            L ").concat(pp + cp - Lp * Pp, ",").concat(ip, "\n            A ").concat(Pp, ",").concat(Pp, ",0,0,").concat(Yp, ",").concat(pp + cp, ",").concat(ip + xp * Pp, "\n            L ").concat(pp + cp, ",").concat(ip + Op - xp * Pp, "\n            A ").concat(Pp, ",").concat(Pp, ",0,0,").concat(Yp, ",").concat(pp + cp - Lp * Pp, ",").concat(ip + Op, "\n            L ").concat(pp + Lp * Pp, ",").concat(ip + Op, "\n            A ").concat(Pp, ",").concat(Pp, ",0,0,").concat(Yp, ",").concat(pp, ",").concat(ip + Op - xp * Pp, " Z")
        } else Ip = "M ".concat(pp, ",").concat(ip, " h ").concat(cp, " v ").concat(Op, " h ").concat(-cp, " Z");
        return Ip
      },
      Up = function(pp, ip) {
        if (!pp || !ip) return !1;
        var cp = pp.x,
          Op = pp.y,
          op = ip.x,
          Ip = ip.y,
          Sp = ip.width,
          xp = ip.height;
        if (Math.abs(Sp) > 0 && Math.abs(xp) > 0) {
          var Lp = Math.min(op, op + Sp),
            Yp = Math.max(op, op + Sp),
            Dp = Math.min(Ip, Ip + xp),
            Ap = Math.max(Ip, Ip + xp);
          return cp >= Lp && cp <= Yp && Op >= Dp && Op <= Ap
        }
        return !1
      },
      wp = {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        radius: 0,
        isAnimationActive: !1,
        isUpdateAnimationActive: !1,
        animationBegin: 0,
        animationDuration: 1500,
        animationEasing: "ease"
      },
      vp = function(pp) {
        var ip = Pp(Pp({}, wp), pp),
          cp = (0, Op.useRef)(),
          xp = Yp((0, Op.useState)(-1), 2),
          Dp = xp[0],
          Ap = xp[1];
        (0, Op.useEffect)((function() {
          if (cp.current && cp.current.getTotalLength) try {
            var pp = cp.current.getTotalLength();
            pp && Ap(pp)
          } catch (ip) {}
        }), []);
        var Wp = ip.x,
          Up = ip.y,
          vp = ip.width,
          tp = ip.height,
          Hp = ip.radius,
          dp = ip.className,
          ep = ip.animationEasing,
          jp = ip.animationDuration,
          kp = ip.animationBegin,
          mp = ip.isAnimationActive,
          Rp = ip.isUpdateAnimationActive;
        if (Wp !== +Wp || Up !== +Up || vp !== +vp || tp !== +tp || 0 === vp || 0 === tp) return null;
        var qp = (0, op.d)("recharts-rectangle", dp);
        return Rp ? Op.createElement(Ip.c, {
          canBegin: Dp > 0,
          from: {
            width: vp,
            height: tp,
            x: Wp,
            y: Up
          },
          to: {
            width: vp,
            height: tp,
            x: Wp,
            y: Up
          },
          duration: jp,
          animationEasing: ep,
          isActive: Rp
        }, (function(pp) {
          var op = pp.width,
            xp = pp.height,
            Yp = pp.x,
            Ap = pp.y;
          return Op.createElement(Ip.c, {
            canBegin: Dp > 0,
            from: "0px ".concat(-1 === Dp ? 1 : Dp, "px"),
            to: "".concat(Dp, "px 0px"),
            attributeName: "strokeDasharray",
            mW: kp,
            duration: jp,
            isActive: mp,
            easing: ep
          }, Op.createElement("path", Lp({}, (0, Sp.d)(ip, !0), {
            className: qp,
            d: yp(Yp, Ap, op, xp, Hp),
            ref: cp
          })))
        })) : Op.createElement("path", Lp({}, (0, Sp.d)(ip, !0), {
          className: qp,
          d: yp(Wp, Up, vp, tp, Hp)
        }))
      }
  },
  6448: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => wp
    });
    var Op = cp(62),
      op = cp(5203),
      Ip = cp(5588),
      Sp = cp(6357),
      xp = cp(5299);

    function Lp(pp) {
      return Lp = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
        return typeof pp
      } : function(pp) {
        return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
      }, Lp(pp)
    }

    function Yp() {
      return Yp = Object.assign ? Object.assign.bind() : function(pp) {
        for (var ip = 1; ip < arguments.length; ip++) {
          var cp = arguments[ip];
          for (var Op in cp) Object.prototype.hasOwnProperty.call(cp, Op) && (pp[Op] = cp[Op])
        }
        return pp
      }, Yp.apply(this, arguments)
    }

    function Dp(pp, ip) {
      var cp = Object.keys(pp);
      if (Object.getOwnPropertySymbols) {
        var Op = Object.getOwnPropertySymbols(pp);
        ip && (Op = Op.filter((function(ip) {
          return Object.getOwnPropertyDescriptor(pp, ip).enumerable
        }))), cp.push.apply(cp, Op)
      }
      return cp
    }

    function Ap(pp) {
      for (var ip = 1; ip < arguments.length; ip++) {
        var cp = null != arguments[ip] ? arguments[ip] : {};
        ip % 2 ? Dp(Object(cp), !0).forEach((function(ip) {
          Pp(pp, ip, cp[ip])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : Dp(Object(cp)).forEach((function(ip) {
          Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
        }))
      }
      return pp
    }

    function Pp(pp, ip, cp) {
      return (ip = function(pp) {
        var ip = function(pp, ip) {
          if ("object" != Lp(pp) || !pp) return pp;
          var cp = pp[Symbol.toPrimitive];
          if (void 0 !== cp) {
            var Op = cp.call(pp, ip || "default");
            if ("object" != Lp(Op)) return Op;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === ip ? String : Number)(pp)
        }(pp, "string");
        return "symbol" == Lp(ip) ? ip : ip + ""
      }(ip)) in pp ? Object.defineProperty(pp, ip, {
        value: cp,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : pp[ip] = cp, pp
    }
    var Wp = function(pp) {
        var ip = pp.cx,
          cp = pp.cy,
          Op = pp.radius,
          op = pp.angle,
          Ip = pp.sign,
          xp = pp.isExternal,
          Lp = pp.cornerRadius,
          Yp = pp.cornerIsExternal,
          Dp = Lp * (xp ? 1 : -1) + Op,
          Ap = Math.asin(Lp / Dp) / Sp.c,
          Pp = Yp ? op : op + Ip * Ap,
          Wp = Yp ? op - Ip * Ap : op;
        return {
          center: (0, Sp.i)(ip, cp, Dp, Pp),
          circleTangency: (0, Sp.i)(ip, cp, Op, Pp),
          lineTangency: (0, Sp.i)(ip, cp, Dp * Math.cos(Ap * Sp.c), Wp),
          fi: Ap
        }
      },
      yp = function(pp) {
        var ip = pp.cx,
          cp = pp.cy,
          Op = pp.innerRadius,
          op = pp.outerRadius,
          Ip = pp.startAngle,
          Lp = function(pp, ip) {
            return (0, xp.I)(ip - pp) * Math.min(Math.abs(ip - pp), 359.999)
          }(Ip, pp.endAngle),
          Yp = Ip + Lp,
          Dp = (0, Sp.i)(ip, cp, op, Ip),
          Ap = (0, Sp.i)(ip, cp, op, Yp),
          Pp = "M ".concat(Dp.x, ",").concat(Dp.y, "\n    A ").concat(op, ",").concat(op, ",0,\n    ").concat(+(Math.abs(Lp) > 180), ",").concat(+(Ip > Yp), ",\n    ").concat(Ap.x, ",").concat(Ap.y, "\n  ");
        if (Op > 0) {
          var Wp = (0, Sp.i)(ip, cp, Op, Ip),
            yp = (0, Sp.i)(ip, cp, Op, Yp);
          Pp += "L ".concat(yp.x, ",").concat(yp.y, "\n            A ").concat(Op, ",").concat(Op, ",0,\n            ").concat(+(Math.abs(Lp) > 180), ",").concat(+(Ip <= Yp), ",\n            ").concat(Wp.x, ",").concat(Wp.y, " Z")
        } else Pp += "L ".concat(ip, ",").concat(cp, " Z");
        return Pp
      },
      Up = {
        cx: 0,
        cy: 0,
        innerRadius: 0,
        outerRadius: 0,
        startAngle: 0,
        endAngle: 0,
        cornerRadius: 0,
        forceCornerRadius: !1,
        cornerIsExternal: !1
      },
      wp = function(pp) {
        var ip = Ap(Ap({}, Up), pp),
          cp = ip.cx,
          Sp = ip.cy,
          Lp = ip.innerRadius,
          Dp = ip.outerRadius,
          Pp = ip.cornerRadius,
          wp = ip.forceCornerRadius,
          vp = ip.cornerIsExternal,
          tp = ip.startAngle,
          Hp = ip.endAngle,
          dp = ip.className;
        if (Dp < Lp || tp === Hp) return null;
        var ep, jp = (0, op.d)("recharts-sector", dp),
          kp = Dp - Lp,
          mp = (0, xp.r)(Pp, kp, 0, !0);
        return ep = mp > 0 && Math.abs(tp - Hp) < 360 ? function(pp) {
          var ip = pp.cx,
            cp = pp.cy,
            Op = pp.innerRadius,
            op = pp.outerRadius,
            Ip = pp.cornerRadius,
            Sp = pp.forceCornerRadius,
            Lp = pp.cornerIsExternal,
            Yp = pp.startAngle,
            Dp = pp.endAngle,
            Ap = (0, xp.I)(Dp - Yp),
            Pp = Wp({
              cx: ip,
              cy: cp,
              radius: op,
              angle: Yp,
              sign: Ap,
              cornerRadius: Ip,
              cornerIsExternal: Lp
            }),
            Up = Pp.circleTangency,
            wp = Pp.lineTangency,
            vp = Pp.fi,
            tp = Wp({
              cx: ip,
              cy: cp,
              radius: op,
              angle: Dp,
              sign: -Ap,
              cornerRadius: Ip,
              cornerIsExternal: Lp
            }),
            Hp = tp.circleTangency,
            dp = tp.lineTangency,
            ep = tp.fi,
            jp = Lp ? Math.abs(Yp - Dp) : Math.abs(Yp - Dp) - vp - ep;
          if (jp < 0) return Sp ? "M ".concat(wp.x, ",").concat(wp.y, "\n        a").concat(Ip, ",").concat(Ip, ",0,0,1,").concat(2 * Ip, ",0\n        a").concat(Ip, ",").concat(Ip, ",0,0,1,").concat(2 * -Ip, ",0\n      ") : yp({
            cx: ip,
            cy: cp,
            innerRadius: Op,
            outerRadius: op,
            startAngle: Yp,
            endAngle: Dp
          });
          var kp = "M ".concat(wp.x, ",").concat(wp.y, "\n    A").concat(Ip, ",").concat(Ip, ",0,0,").concat(+(Ap < 0), ",").concat(Up.x, ",").concat(Up.y, "\n    A").concat(op, ",").concat(op, ",0,").concat(+(jp > 180), ",").concat(+(Ap < 0), ",").concat(Hp.x, ",").concat(Hp.y, "\n    A").concat(Ip, ",").concat(Ip, ",0,0,").concat(+(Ap < 0), ",").concat(dp.x, ",").concat(dp.y, "\n  ");
          if (Op > 0) {
            var mp = Wp({
                cx: ip,
                cy: cp,
                radius: Op,
                angle: Yp,
                sign: Ap,
                isExternal: !0,
                cornerRadius: Ip,
                cornerIsExternal: Lp
              }),
              Rp = mp.circleTangency,
              qp = mp.lineTangency,
              Mp = mp.fi,
              Cp = Wp({
                cx: ip,
                cy: cp,
                radius: Op,
                angle: Dp,
                sign: -Ap,
                isExternal: !0,
                cornerRadius: Ip,
                cornerIsExternal: Lp
              }),
              Ep = Cp.circleTangency,
              Xp = Cp.lineTangency,
              lp = Cp.fi,
              Qp = Lp ? Math.abs(Yp - Dp) : Math.abs(Yp - Dp) - Mp - lp;
            if (Qp < 0 && 0 === Ip) return "".concat(kp, "L").concat(ip, ",").concat(cp, "Z");
            kp += "L".concat(Xp.x, ",").concat(Xp.y, "\n      A").concat(Ip, ",").concat(Ip, ",0,0,").concat(+(Ap < 0), ",").concat(Ep.x, ",").concat(Ep.y, "\n      A").concat(Op, ",").concat(Op, ",0,").concat(+(Qp > 180), ",").concat(+(Ap > 0), ",").concat(Rp.x, ",").concat(Rp.y, "\n      A").concat(Ip, ",").concat(Ip, ",0,0,").concat(+(Ap < 0), ",").concat(qp.x, ",").concat(qp.y, "Z")
          } else kp += "L".concat(ip, ",").concat(cp, "Z");
          return kp
        }({
          cx: cp,
          cy: Sp,
          innerRadius: Lp,
          outerRadius: Dp,
          cornerRadius: Math.min(mp, kp / 2),
          forceCornerRadius: wp,
          cornerIsExternal: vp,
          startAngle: tp,
          endAngle: Hp
        }) : yp({
          cx: cp,
          cy: Sp,
          innerRadius: Lp,
          outerRadius: Dp,
          startAngle: tp,
          endAngle: Hp
        }), Op.createElement("path", Yp({}, (0, Ip.d)(ip, !0), {
          className: jp,
          d: ep,
          role: "img"
        }))
      }
  },
  6190: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => np
    });
    var Op = cp(62),
      op = cp(6192),
      Ip = cp.n(op);
    Math.abs, Math.atan2;
    const Sp = Math.cos,
      xp = (Math.max, Math.min, Math.sin),
      Lp = Math.sqrt,
      Yp = Math.PI,
      Dp = 2 * Yp;
    const Ap = {
        draw(pp, ip) {
          const cp = Lp(ip / Yp);
          pp.moveTo(cp, 0), pp.arc(0, 0, cp, 0, Dp)
        }
      },
      Pp = {
        draw(pp, ip) {
          const cp = Lp(ip / 5) / 2;
          pp.moveTo(-3 * cp, -cp), pp.lineTo(-cp, -cp), pp.lineTo(-cp, -3 * cp), pp.lineTo(cp, -3 * cp), pp.lineTo(cp, -cp), pp.lineTo(3 * cp, -cp), pp.lineTo(3 * cp, cp), pp.lineTo(cp, cp), pp.lineTo(cp, 3 * cp), pp.lineTo(-cp, 3 * cp), pp.lineTo(-cp, cp), pp.lineTo(-3 * cp, cp), pp.closePath()
        }
      },
      Wp = Lp(1 / 3),
      yp = 2 * Wp,
      Up = {
        draw(pp, ip) {
          const cp = Lp(ip / yp),
            Op = cp * Wp;
          pp.moveTo(0, -cp), pp.lineTo(Op, 0), pp.lineTo(0, cp), pp.lineTo(-Op, 0), pp.closePath()
        }
      },
      wp = {
        draw(pp, ip) {
          const cp = Lp(ip),
            Op = -cp / 2;
          pp.rect(Op, Op, cp, cp)
        }
      },
      vp = xp(Yp / 10) / xp(7 * Yp / 10),
      tp = xp(Dp / 10) * vp,
      Hp = -Sp(Dp / 10) * vp,
      dp = {
        draw(pp, ip) {
          const cp = Lp(.8908130915292852 * ip),
            Op = tp * cp,
            op = Hp * cp;
          pp.moveTo(0, -cp), pp.lineTo(Op, op);
          for (let Ip = 1; Ip < 5; ++Ip) {
            const ip = Dp * Ip / 5,
              Lp = Sp(ip),
              Yp = xp(ip);
            pp.lineTo(Yp * cp, -Lp * cp), pp.lineTo(Lp * Op - Yp * op, Yp * Op + Lp * op)
          }
          pp.closePath()
        }
      },
      ep = Lp(3),
      jp = {
        draw(pp, ip) {
          const cp = -Lp(ip / (3 * ep));
          pp.moveTo(0, 2 * cp), pp.lineTo(-ep * cp, -cp), pp.lineTo(ep * cp, -cp), pp.closePath()
        }
      },
      kp = -.5,
      mp = Lp(3) / 2,
      Rp = 1 / Lp(12),
      qp = 3 * (Rp / 2 + 1),
      Mp = {
        draw(pp, ip) {
          const cp = Lp(ip / qp),
            Op = cp / 2,
            op = cp * Rp,
            Ip = Op,
            Sp = cp * Rp + cp,
            xp = -Ip,
            Yp = Sp;
          pp.moveTo(Op, op), pp.lineTo(Ip, Sp), pp.lineTo(xp, Yp), pp.lineTo(kp * Op - mp * op, mp * Op + kp * op), pp.lineTo(kp * Ip - mp * Sp, mp * Ip + kp * Sp), pp.lineTo(kp * xp - mp * Yp, mp * xp + kp * Yp), pp.lineTo(kp * Op + mp * op, kp * op - mp * Op), pp.lineTo(kp * Ip + mp * Sp, kp * Sp - mp * Ip), pp.lineTo(kp * xp + mp * Yp, kp * Yp - mp * xp), pp.closePath()
        }
      };
    var Cp = cp(6229),
      Ep = cp(6231);
    Lp(3), Lp(3);
    var Xp = cp(5203),
      lp = cp(5588);

    function Qp(pp) {
      return Qp = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
        return typeof pp
      } : function(pp) {
        return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
      }, Qp(pp)
    }
    var Jp = ["type", "size", "sizeType"];

    function Bp() {
      return Bp = Object.assign ? Object.assign.bind() : function(pp) {
        for (var ip = 1; ip < arguments.length; ip++) {
          var cp = arguments[ip];
          for (var Op in cp) Object.prototype.hasOwnProperty.call(cp, Op) && (pp[Op] = cp[Op])
        }
        return pp
      }, Bp.apply(this, arguments)
    }

    function Np(pp, ip) {
      var cp = Object.keys(pp);
      if (Object.getOwnPropertySymbols) {
        var Op = Object.getOwnPropertySymbols(pp);
        ip && (Op = Op.filter((function(ip) {
          return Object.getOwnPropertyDescriptor(pp, ip).enumerable
        }))), cp.push.apply(cp, Op)
      }
      return cp
    }

    function Tp(pp) {
      for (var ip = 1; ip < arguments.length; ip++) {
        var cp = null != arguments[ip] ? arguments[ip] : {};
        ip % 2 ? Np(Object(cp), !0).forEach((function(ip) {
          fp(pp, ip, cp[ip])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : Np(Object(cp)).forEach((function(ip) {
          Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
        }))
      }
      return pp
    }

    function fp(pp, ip, cp) {
      return (ip = function(pp) {
        var ip = function(pp, ip) {
          if ("object" != Qp(pp) || !pp) return pp;
          var cp = pp[Symbol.toPrimitive];
          if (void 0 !== cp) {
            var Op = cp.call(pp, ip || "default");
            if ("object" != Qp(Op)) return Op;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === ip ? String : Number)(pp)
        }(pp, "string");
        return "symbol" == Qp(ip) ? ip : ip + ""
      }(ip)) in pp ? Object.defineProperty(pp, ip, {
        value: cp,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : pp[ip] = cp, pp
    }

    function bp(pp, ip) {
      if (null == pp) return {};
      var cp, Op, op = function(pp, ip) {
        if (null == pp) return {};
        var cp = {};
        for (var Op in pp)
          if (Object.prototype.hasOwnProperty.call(pp, Op)) {
            if (ip.indexOf(Op) >= 0) continue;
            cp[Op] = pp[Op]
          } return cp
      }(pp, ip);
      if (Object.getOwnPropertySymbols) {
        var Ip = Object.getOwnPropertySymbols(pp);
        for (Op = 0; Op < Ip.length; Op++) cp = Ip[Op], ip.indexOf(cp) >= 0 || Object.prototype.propertyIsEnumerable.call(pp, cp) && (op[cp] = pp[cp])
      }
      return op
    }
    var hp = {
        symbolCircle: Ap,
        symbolCross: Pp,
        symbolDiamond: Up,
        symbolSquare: wp,
        symbolStar: dp,
        symbolTriangle: jp,
        symbolWye: Mp
      },
      ap = Math.PI / 180,
      np = function(pp) {
        var ip = pp.type,
          cp = void 0 === ip ? "circle" : ip,
          op = pp.size,
          Sp = void 0 === op ? 64 : op,
          xp = pp.sizeType,
          Lp = void 0 === xp ? "area" : xp,
          Yp = Tp(Tp({}, bp(pp, Jp)), {}, {
            type: cp,
            size: Sp,
            sizeType: Lp
          }),
          Dp = Yp.className,
          Pp = Yp.cx,
          Wp = Yp.cy,
          yp = (0, lp.d)(Yp, !0);
        return Pp === +Pp && Wp === +Wp && Sp === +Sp ? Op.createElement("path", Bp({}, yp, {
          className: (0, Xp.d)("recharts-symbols", Dp),
          transform: "translate(".concat(Pp, ", ").concat(Wp, ")"),
          d: function() {
            var pp = function(pp) {
                var ip = "symbol".concat(Ip()(pp));
                return hp[ip] || Ap
              }(cp),
              ip = function(pp, ip) {
                let cp = null,
                  Op = (0, Ep.d)(op);

                function op() {
                  let op;
                  if (cp || (cp = op = Op()), pp.apply(this, arguments).draw(cp, +ip.apply(this, arguments)), op) return cp = null, op + "" || null
                }
                return pp = "function" === typeof pp ? pp : (0, Cp.c)(pp || Ap), ip = "function" === typeof ip ? ip : (0, Cp.c)(void 0 === ip ? 64 : +ip), op.type = function(ip) {
                  return arguments.length ? (pp = "function" === typeof ip ? ip : (0, Cp.c)(ip), op) : pp
                }, op.size = function(pp) {
                  return arguments.length ? (ip = "function" === typeof pp ? pp : (0, Cp.c)(+pp), op) : ip
                }, op.context = function(pp) {
                  return arguments.length ? (cp = null == pp ? null : pp, op) : cp
                }, op
              }().type(pp).size(function(pp, ip, cp) {
                if ("area" === ip) return pp;
                switch (cp) {
                  case "cross":
                    return 5 * pp * pp / 9;
                  case "diamond":
                    return .5 * pp * pp / Math.sqrt(3);
                  case "square":
                    return pp * pp;
                  case "star":
                    var Op = 18 * ap;
                    return 1.25 * pp * pp * (Math.tan(Op) - Math.tan(2 * Op) * Math.pow(Math.tan(Op), 2));
                  case "triangle":
                    return Math.sqrt(3) * pp * pp / 4;
                  case "wye":
                    return (21 - 10 * Math.sqrt(3)) * pp * pp / 8;
                  default:
                    return Math.PI * pp * pp / 4
                }
              }(Sp, Lp, cp));
            return ip()
          }()
        })) : null
      };
    np.registerSymbol = function(pp, ip) {
      hp["symbol".concat(Ip()(pp))] = ip
    }
  },
  6425: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => fp,
      f: () => Gp,
      h: () => bp,
      i: () => hp,
      l: () => ap
    });
    var Op = cp(62),
      op = cp(5405),
      Ip = cp.n(op),
      Sp = cp(6434),
      xp = cp.n(Sp),
      Lp = cp(6443),
      Yp = cp.n(Lp),
      Dp = cp(6322),
      Ap = cp.n(Dp),
      Pp = cp(6247),
      Wp = cp(5203),
      yp = cp(6256),
      Up = cp(5588);

    function wp(pp) {
      return wp = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
        return typeof pp
      } : function(pp) {
        return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
      }, wp(pp)
    }

    function vp() {
      return vp = Object.assign ? Object.assign.bind() : function(pp) {
        for (var ip = 1; ip < arguments.length; ip++) {
          var cp = arguments[ip];
          for (var Op in cp) Object.prototype.hasOwnProperty.call(cp, Op) && (pp[Op] = cp[Op])
        }
        return pp
      }, vp.apply(this, arguments)
    }

    function tp(pp, ip) {
      return function(pp) {
        if (Array.isArray(pp)) return pp
      }(pp) || function(pp, ip) {
        var cp = null == pp ? null : "undefined" != typeof Symbol && pp[Symbol.iterator] || pp["@@iterator"];
        if (null != cp) {
          var Op, op, Ip, Sp, xp = [],
            Lp = !0,
            Yp = !1;
          try {
            if (Ip = (cp = cp.call(pp)).next, 0 === ip) {
              if (Object(cp) !== cp) return;
              Lp = !1
            } else
              for (; !(Lp = (Op = Ip.call(cp)).done) && (xp.push(Op.value), xp.length !== ip); Lp = !0);
          } catch (pp) {
            Yp = !0, op = pp
          } finally {
            try {
              if (!Lp && null != cp.return && (Sp = cp.return(), Object(Sp) !== Sp)) return
            } finally {
              if (Yp) throw op
            }
          }
          return xp
        }
      }(pp, ip) || function(pp, ip) {
        if (!pp) return;
        if ("string" === typeof pp) return Hp(pp, ip);
        var cp = Object.prototype.toString.call(pp).slice(8, -1);
        "Object" === cp && pp.constructor && (cp = pp.constructor.name);
        if ("Map" === cp || "Set" === cp) return Array.from(pp);
        if ("Arguments" === cp || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cp)) return Hp(pp, ip)
      }(pp, ip) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Hp(pp, ip) {
      (null == ip || ip > pp.length) && (ip = pp.length);
      for (var cp = 0, Op = new Array(ip); cp < ip; cp++) Op[cp] = pp[cp];
      return Op
    }

    function dp(pp, ip) {
      var cp = Object.keys(pp);
      if (Object.getOwnPropertySymbols) {
        var Op = Object.getOwnPropertySymbols(pp);
        ip && (Op = Op.filter((function(ip) {
          return Object.getOwnPropertyDescriptor(pp, ip).enumerable
        }))), cp.push.apply(cp, Op)
      }
      return cp
    }

    function ep(pp) {
      for (var ip = 1; ip < arguments.length; ip++) {
        var cp = null != arguments[ip] ? arguments[ip] : {};
        ip % 2 ? dp(Object(cp), !0).forEach((function(ip) {
          jp(pp, ip, cp[ip])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : dp(Object(cp)).forEach((function(ip) {
          Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
        }))
      }
      return pp
    }

    function jp(pp, ip, cp) {
      return (ip = function(pp) {
        var ip = function(pp, ip) {
          if ("object" != wp(pp) || !pp) return pp;
          var cp = pp[Symbol.toPrimitive];
          if (void 0 !== cp) {
            var Op = cp.call(pp, ip || "default");
            if ("object" != wp(Op)) return Op;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === ip ? String : Number)(pp)
        }(pp, "string");
        return "symbol" == wp(ip) ? ip : ip + ""
      }(ip)) in pp ? Object.defineProperty(pp, ip, {
        value: cp,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : pp[ip] = cp, pp
    }
    var kp = function(pp, ip, cp, Op, op) {
        var Ip, Sp = cp - Op;
        return Ip = "M ".concat(pp, ",").concat(ip), Ip += "L ".concat(pp + cp, ",").concat(ip), Ip += "L ".concat(pp + cp - Sp / 2, ",").concat(ip + op), Ip += "L ".concat(pp + cp - Sp / 2 - Op, ",").concat(ip + op), Ip += "L ".concat(pp, ",").concat(ip, " Z")
      },
      mp = {
        x: 0,
        y: 0,
        upperWidth: 0,
        lowerWidth: 0,
        height: 0,
        isUpdateAnimationActive: !1,
        animationBegin: 0,
        animationDuration: 1500,
        animationEasing: "ease"
      },
      Rp = function(pp) {
        var ip = ep(ep({}, mp), pp),
          cp = (0, Op.useRef)(),
          op = tp((0, Op.useState)(-1), 2),
          Ip = op[0],
          Sp = op[1];
        (0, Op.useEffect)((function() {
          if (cp.current && cp.current.getTotalLength) try {
            var pp = cp.current.getTotalLength();
            pp && Sp(pp)
          } catch (ip) {}
        }), []);
        var xp = ip.x,
          Lp = ip.y,
          Yp = ip.upperWidth,
          Dp = ip.lowerWidth,
          Ap = ip.height,
          Pp = ip.className,
          wp = ip.animationEasing,
          Hp = ip.animationDuration,
          dp = ip.animationBegin,
          jp = ip.isUpdateAnimationActive;
        if (xp !== +xp || Lp !== +Lp || Yp !== +Yp || Dp !== +Dp || Ap !== +Ap || 0 === Yp && 0 === Dp || 0 === Ap) return null;
        var Rp = (0, Wp.d)("recharts-trapezoid", Pp);
        return jp ? Op.createElement(yp.c, {
          canBegin: Ip > 0,
          from: {
            upperWidth: 0,
            lowerWidth: 0,
            height: Ap,
            x: xp,
            y: Lp
          },
          to: {
            upperWidth: Yp,
            lowerWidth: Dp,
            height: Ap,
            x: xp,
            y: Lp
          },
          duration: Hp,
          animationEasing: wp,
          isActive: jp
        }, (function(pp) {
          var op = pp.upperWidth,
            Sp = pp.lowerWidth,
            xp = pp.height,
            Lp = pp.x,
            Yp = pp.y;
          return Op.createElement(yp.c, {
            canBegin: Ip > 0,
            from: "0px ".concat(-1 === Ip ? 1 : Ip, "px"),
            to: "".concat(Ip, "px 0px"),
            attributeName: "strokeDasharray",
            mW: dp,
            duration: Hp,
            easing: wp
          }, Op.createElement("path", vp({}, (0, Up.d)(ip, !0), {
            className: Rp,
            d: kp(Lp, Yp, op, Sp, xp),
            ref: cp
          })))
        })) : Op.createElement("g", null, Op.createElement("path", vp({}, (0, Up.d)(ip, !0), {
          className: Rp,
          d: kp(xp, Lp, Yp, Dp, Ap)
        })))
      },
      qp = cp(6448),
      Mp = cp(6103),
      Cp = cp(6190),
      Ep = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];

    function Xp(pp) {
      return Xp = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
        return typeof pp
      } : function(pp) {
        return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
      }, Xp(pp)
    }

    function lp(pp, ip) {
      if (null == pp) return {};
      var cp, Op, op = function(pp, ip) {
        if (null == pp) return {};
        var cp = {};
        for (var Op in pp)
          if (Object.prototype.hasOwnProperty.call(pp, Op)) {
            if (ip.indexOf(Op) >= 0) continue;
            cp[Op] = pp[Op]
          } return cp
      }(pp, ip);
      if (Object.getOwnPropertySymbols) {
        var Ip = Object.getOwnPropertySymbols(pp);
        for (Op = 0; Op < Ip.length; Op++) cp = Ip[Op], ip.indexOf(cp) >= 0 || Object.prototype.propertyIsEnumerable.call(pp, cp) && (op[cp] = pp[cp])
      }
      return op
    }

    function Qp(pp, ip) {
      var cp = Object.keys(pp);
      if (Object.getOwnPropertySymbols) {
        var Op = Object.getOwnPropertySymbols(pp);
        ip && (Op = Op.filter((function(ip) {
          return Object.getOwnPropertyDescriptor(pp, ip).enumerable
        }))), cp.push.apply(cp, Op)
      }
      return cp
    }

    function Jp(pp) {
      for (var ip = 1; ip < arguments.length; ip++) {
        var cp = null != arguments[ip] ? arguments[ip] : {};
        ip % 2 ? Qp(Object(cp), !0).forEach((function(ip) {
          Bp(pp, ip, cp[ip])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : Qp(Object(cp)).forEach((function(ip) {
          Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
        }))
      }
      return pp
    }

    function Bp(pp, ip, cp) {
      return (ip = function(pp) {
        var ip = function(pp, ip) {
          if ("object" != Xp(pp) || !pp) return pp;
          var cp = pp[Symbol.toPrimitive];
          if (void 0 !== cp) {
            var Op = cp.call(pp, ip || "default");
            if ("object" != Xp(Op)) return Op;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === ip ? String : Number)(pp)
        }(pp, "string");
        return "symbol" == Xp(ip) ? ip : ip + ""
      }(ip)) in pp ? Object.defineProperty(pp, ip, {
        value: cp,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : pp[ip] = cp, pp
    }

    function Np(pp, ip) {
      return Jp(Jp({}, ip), pp)
    }

    function Tp(pp) {
      var ip = pp.shapeType,
        cp = pp.elementProps;
      switch (ip) {
        case "rectangle":
          return Op.createElement(Pp.d, cp);
        case "trapezoid":
          return Op.createElement(Rp, cp);
        case "sector":
          return Op.createElement(qp.c, cp);
        case "symbols":
          if (function(pp) {
              return "symbols" === pp
            }(ip)) return Op.createElement(Cp.c, cp);
          break;
        default:
          return null
      }
    }

    function fp(pp) {
      var ip, cp = pp.option,
        op = pp.shapeType,
        Sp = pp.propTransformer,
        Lp = void 0 === Sp ? Np : Sp,
        Dp = pp.activeClassName,
        Ap = void 0 === Dp ? "recharts-active-shape" : Dp,
        Pp = pp.isActive,
        Wp = lp(pp, Ep);
      if ((0, Op.isValidElement)(cp)) ip = (0, Op.cloneElement)(cp, Jp(Jp({}, Wp), function(pp) {
        return (0, Op.isValidElement)(pp) ? pp.props : pp
      }(cp)));
      else if (Ip()(cp)) ip = cp(Wp);
      else if (xp()(cp) && !Yp()(cp)) {
        var yp = Lp(cp, Wp);
        ip = Op.createElement(Tp, {
          shapeType: op,
          elementProps: yp
        })
      } else {
        var Up = Wp;
        ip = Op.createElement(Tp, {
          shapeType: op,
          elementProps: Up
        })
      }
      return Pp ? Op.createElement(Mp.b, {
        className: Ap
      }, ip) : ip
    }

    function bp(pp, ip) {
      return null != ip && "trapezoids" in pp.props
    }

    function hp(pp, ip) {
      return null != ip && "sectors" in pp.props
    }

    function ap(pp, ip) {
      return null != ip && "points" in pp.props
    }

    function np(pp, ip) {
      var cp, Op, op = pp.x === (null === ip || void 0 === ip || null === (cp = ip.labelViewBox) || void 0 === cp ? void 0 : cp.x) || pp.x === ip.x,
        Ip = pp.y === (null === ip || void 0 === ip || null === (Op = ip.labelViewBox) || void 0 === Op ? void 0 : Op.y) || pp.y === ip.y;
      return op && Ip
    }

    function Fp(pp, ip) {
      var cp = pp.endAngle === ip.endAngle,
        Op = pp.startAngle === ip.startAngle;
      return cp && Op
    }

    function gp(pp, ip) {
      var cp = pp.x === ip.x,
        Op = pp.y === ip.y,
        op = pp.z === ip.z;
      return cp && Op && op
    }

    function Gp(pp) {
      var ip = pp.activeTooltipItem,
        cp = pp.graphicalItem,
        Op = pp.itemData,
        op = function(pp, ip) {
          var cp;
          return bp(pp, ip) ? cp = "trapezoids" : hp(pp, ip) ? cp = "sectors" : ap(pp, ip) && (cp = "points"), cp
        }(cp, ip),
        Ip = function(pp, ip) {
          var cp, Op;
          return bp(pp, ip) ? null === (cp = ip.tooltipPayload) || void 0 === cp || null === (cp = cp[0]) || void 0 === cp || null === (cp = cp.payload) || void 0 === cp ? void 0 : cp.payload : hp(pp, ip) ? null === (Op = ip.tooltipPayload) || void 0 === Op || null === (Op = Op[0]) || void 0 === Op || null === (Op = Op.payload) || void 0 === Op ? void 0 : Op.payload : ap(pp, ip) ? ip.payload : {}
        }(cp, ip),
        Sp = Op.filter((function(pp, Op) {
          var Sp = Ap()(Ip, pp),
            xp = cp.props[op].filter((function(pp) {
              var Op = function(pp, ip) {
                var cp;
                return bp(pp, ip) ? cp = np : hp(pp, ip) ? cp = Fp : ap(pp, ip) && (cp = gp), cp
              }(cp, ip);
              return Op(pp, ip)
            })),
            Lp = cp.props[op].indexOf(xp[xp.length - 1]);
          return Sp && Op === Lp
        }));
      return Op.indexOf(Sp[Sp.length - 1])
    }
  },
  6368: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => ep,
      d: () => vp,
      e: () => jp,
      i: () => Hp,
      k: () => tp
    });
    var Op = cp(6375),
      op = cp.n(Op),
      Ip = cp(6383),
      Sp = cp.n(Ip),
      xp = cp(6266),
      Lp = cp(5588),
      Yp = cp(5299),
      Dp = cp(6402);

    function Ap(pp) {
      return Ap = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
        return typeof pp
      } : function(pp) {
        return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
      }, Ap(pp)
    }

    function Pp(pp, ip) {
      for (var cp = 0; cp < ip.length; cp++) {
        var Op = ip[cp];
        Op.enumerable = Op.enumerable || !1, Op.configurable = !0, "value" in Op && (Op.writable = !0), Object.defineProperty(pp, wp(Op.key), Op)
      }
    }

    function Wp(pp, ip) {
      var cp = Object.keys(pp);
      if (Object.getOwnPropertySymbols) {
        var Op = Object.getOwnPropertySymbols(pp);
        ip && (Op = Op.filter((function(ip) {
          return Object.getOwnPropertyDescriptor(pp, ip).enumerable
        }))), cp.push.apply(cp, Op)
      }
      return cp
    }

    function yp(pp) {
      for (var ip = 1; ip < arguments.length; ip++) {
        var cp = null != arguments[ip] ? arguments[ip] : {};
        ip % 2 ? Wp(Object(cp), !0).forEach((function(ip) {
          Up(pp, ip, cp[ip])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : Wp(Object(cp)).forEach((function(ip) {
          Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
        }))
      }
      return pp
    }

    function Up(pp, ip, cp) {
      return (ip = wp(ip)) in pp ? Object.defineProperty(pp, ip, {
        value: cp,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : pp[ip] = cp, pp
    }

    function wp(pp) {
      var ip = function(pp, ip) {
        if ("object" != Ap(pp) || !pp) return pp;
        var cp = pp[Symbol.toPrimitive];
        if (void 0 !== cp) {
          var Op = cp.call(pp, ip || "default");
          if ("object" != Ap(Op)) return Op;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ip ? String : Number)(pp)
      }(pp, "string");
      return "symbol" == Ap(ip) ? ip : ip + ""
    }
    var vp = function(pp, ip, cp, Op, op) {
        var Ip = pp.width,
          Sp = pp.height,
          Ap = pp.layout,
          Pp = pp.children,
          Wp = Object.keys(ip),
          wp = {
            left: cp.left,
            leftMirror: cp.left,
            right: Ip - cp.right,
            rightMirror: Ip - cp.right,
            top: cp.top,
            topMirror: cp.top,
            bottom: Sp - cp.bottom,
            bottomMirror: Sp - cp.bottom
          },
          vp = !!(0, Lp.i)(Pp, Dp.d);
        return Wp.reduce((function(Ip, Sp) {
          var Lp, Dp, Pp, Wp, tp, Hp = ip[Sp],
            dp = Hp.orientation,
            ep = Hp.domain,
            jp = Hp.padding,
            kp = void 0 === jp ? {} : jp,
            mp = Hp.mirror,
            Rp = Hp.reversed,
            qp = "".concat(dp).concat(mp ? "Mirror" : "");
          if ("number" === Hp.type && ("gap" === Hp.padding || "no-gap" === Hp.padding)) {
            var Mp = ep[1] - ep[0],
              Cp = 1 / 0,
              Ep = Hp.categoricalDomain.sort(Yp.e);
            if (Ep.forEach((function(pp, ip) {
                ip > 0 && (Cp = Math.min((pp || 0) - (Ep[ip - 1] || 0), Cp))
              })), Number.isFinite(Cp)) {
              var Xp = Cp / Mp,
                lp = "vertical" === Hp.layout ? cp.height : cp.width;
              if ("gap" === Hp.padding && (Lp = Xp * lp / 2), "no-gap" === Hp.padding) {
                var Qp = (0, Yp.r)(pp.barCategoryGap, Xp * lp),
                  Jp = Xp * lp / 2;
                Lp = Jp - Qp - (Jp - Qp) / lp * Qp
              }
            }
          }
          Dp = "xAxis" === Op ? [cp.left + (kp.left || 0) + (Lp || 0), cp.left + cp.width - (kp.right || 0) - (Lp || 0)] : "yAxis" === Op ? "horizontal" === Ap ? [cp.top + cp.height - (kp.bottom || 0), cp.top + (kp.top || 0)] : [cp.top + (kp.top || 0) + (Lp || 0), cp.top + cp.height - (kp.bottom || 0) - (Lp || 0)] : Hp.range, Rp && (Dp = [Dp[1], Dp[0]]);
          var Bp = (0, xp.pb)(Hp, op, vp),
            Np = Bp.scale,
            Tp = Bp.realScaleType;
          Np.domain(ep).range(Dp), (0, xp.k)(Np);
          var fp = (0, xp.bb)(Np, yp(yp({}, Hp), {}, {
            realScaleType: Tp
          }));
          "xAxis" === Op ? (tp = "top" === dp && !mp || "bottom" === dp && mp, Pp = cp.left, Wp = wp[qp] - tp * Hp.height) : "yAxis" === Op && (tp = "left" === dp && !mp || "right" === dp && mp, Pp = wp[qp] - tp * Hp.width, Wp = cp.top);
          var bp = yp(yp(yp({}, Hp), fp), {}, {
            realScaleType: Tp,
            x: Pp,
            y: Wp,
            scale: Np,
            width: "xAxis" === Op ? cp.width : Hp.width,
            height: "yAxis" === Op ? cp.height : Hp.height
          });
          return bp.bandSize = (0, xp.r)(bp, fp), Hp.hide || "xAxis" !== Op ? Hp.hide || (wp[qp] += (tp ? -1 : 1) * bp.width) : wp[qp] += (tp ? -1 : 1) * bp.height, yp(yp({}, Ip), {}, Up({}, Sp, bp))
        }), {})
      },
      tp = function(pp, ip) {
        var cp = pp.x,
          Op = pp.y,
          op = ip.x,
          Ip = ip.y;
        return {
          x: Math.min(cp, op),
          y: Math.min(Op, Ip),
          width: Math.abs(op - cp),
          height: Math.abs(Ip - Op)
        }
      },
      Hp = function(pp) {
        var ip = pp.x1,
          cp = pp.y1,
          Op = pp.x2,
          op = pp.y2;
        return tp({
          x: ip,
          y: cp
        }, {
          x: Op,
          y: op
        })
      },
      dp = function() {
        function pp(ip) {
          ! function(pp, ip) {
            if (!(pp instanceof ip)) throw new TypeError("Cannot call a class as a function")
          }(this, pp), this.scale = ip
        }
        return ip = pp, cp = [{
          key: "domain",
          get: function() {
            return this.scale.domain
          }
        }, {
          key: "range",
          get: function() {
            return this.scale.range
          }
        }, {
          key: "rangeMin",
          get: function() {
            return this.range()[0]
          }
        }, {
          key: "rangeMax",
          get: function() {
            return this.range()[1]
          }
        }, {
          key: "bandwidth",
          get: function() {
            return this.scale.bandwidth
          }
        }, {
          key: "apply",
          value: function(pp) {
            var ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              cp = ip.bandAware,
              Op = ip.position;
            if (void 0 !== pp) {
              if (Op) switch (Op) {
                case "start":
                default:
                  return this.scale(pp);
                case "middle":
                  var op = this.bandwidth ? this.bandwidth() / 2 : 0;
                  return this.scale(pp) + op;
                case "end":
                  var Ip = this.bandwidth ? this.bandwidth() : 0;
                  return this.scale(pp) + Ip
              }
              if (cp) {
                var Sp = this.bandwidth ? this.bandwidth() / 2 : 0;
                return this.scale(pp) + Sp
              }
              return this.scale(pp)
            }
          }
        }, {
          key: "isInRange",
          value: function(pp) {
            var ip = this.range(),
              cp = ip[0],
              Op = ip[ip.length - 1];
            return cp <= Op ? pp >= cp && pp <= Op : pp >= Op && pp <= cp
          }
        }], Op = [{
          key: "create",
          value: function(ip) {
            return new pp(ip)
          }
        }], cp && Pp(ip.prototype, cp), Op && Pp(ip, Op), Object.defineProperty(ip, "prototype", {
          writable: !1
        }), ip;
        var ip, cp, Op
      }();
    Up(dp, "EPS", 1e-4);
    var ep = function(pp) {
      var ip = Object.keys(pp).reduce((function(ip, cp) {
        return yp(yp({}, ip), {}, Up({}, cp, dp.create(pp[cp])))
      }), {});
      return yp(yp({}, ip), {}, {
        apply: function(pp) {
          var cp = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            Op = cp.bandAware,
            Ip = cp.position;
          return op()(pp, (function(pp, cp) {
            return ip[cp].apply(pp, {
              bandAware: Op,
              position: Ip
            })
          }))
        },
        isInRange: function(pp) {
          return Sp()(pp, (function(pp, cp) {
            return ip[cp].isInRange(pp)
          }))
        }
      })
    };
    var jp = function(pp) {
      var ip = pp.width,
        cp = pp.height,
        Op = function(pp) {
          return (pp % 180 + 180) % 180
        }(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0),
        op = Op * Math.PI / 180,
        Ip = Math.atan(cp / ip),
        Sp = op > Ip && op < Math.PI - Ip ? cp / Math.sin(op) : ip / Math.cos(op);
      return Math.abs(Sp)
    }
  },
  6266: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => NS,
      g: () => lS,
      k: () => ZS,
      l: () => gS,
      p: () => zS,
      r: () => Dx,
      t: () => BS,
      x: () => JS,
      A: () => ox,
      E: () => Ox,
      F: () => cx,
      J: () => aS,
      M: () => XS,
      Q: () => bS,
      R: () => Sx,
      T: () => QS,
      V: () => px,
      W: () => Ix,
      Z: () => nS,
      bb: () => ix,
      cb: () => Px,
      fb: () => ES,
      hb: () => hS,
      lb: () => Ax,
      ob: () => fS,
      pb: () => GS,
      tb: () => Yx,
      wb: () => sS
    });
    var Op = {};
    cp.r(Op), cp.d(Op, {
      scaleBand: () => op.b,
      scaleDiverging: () => WI,
      scaleDivergingLog: () => yI,
      scaleDivergingPow: () => wI,
      scaleDivergingSqrt: () => vI,
      scaleDivergingSymlog: () => UI,
      scaleIdentity: () => Ki,
      scaleImplicit: () => Pc.f,
      scaleLinear: () => si,
      scaleLog: () => xc,
      scaleOrdinal: () => Pc.b,
      scalePoint: () => op.d,
      scalePow: () => vc,
      scaleQuantile: () => Cc,
      scaleQuantize: () => Ec,
      scaleRadial: () => dc,
      scaleSequential: () => SI,
      scaleSequentialLog: () => xI,
      scaleSequentialPow: () => YI,
      scaleSequentialQuantile: () => AI,
      scaleSequentialSqrt: () => DI,
      scaleSequentialSymlog: () => LI,
      scaleSqrt: () => tc,
      scaleSymlog: () => Ac,
      scaleThreshold: () => Xc,
      scaleTime: () => cI,
      scaleUtc: () => OI,
      tickFormat: () => Zi
    });
    var op = cp(6271);
    const Ip = Math.sqrt(50),
      Sp = Math.sqrt(10),
      xp = Math.sqrt(2);

    function Lp(pp, ip, cp) {
      const Op = (ip - pp) / Math.max(0, cp),
        op = Math.floor(Math.log10(Op)),
        Yp = Op / Math.pow(10, op),
        Dp = Yp >= Ip ? 10 : Yp >= Sp ? 5 : Yp >= xp ? 2 : 1;
      let Ap, Pp, Wp;
      return op < 0 ? (Wp = Math.pow(10, -op) / Dp, Ap = Math.round(pp * Wp), Pp = Math.round(ip * Wp), Ap / Wp < pp && ++Ap, Pp / Wp > ip && --Pp, Wp = -Wp) : (Wp = Math.pow(10, op) * Dp, Ap = Math.round(pp / Wp), Pp = Math.round(ip / Wp), Ap * Wp < pp && ++Ap, Pp * Wp > ip && --Pp), Pp < Ap && .5 <= cp && cp < 2 ? Lp(pp, ip, 2 * cp) : [Ap, Pp, Wp]
    }

    function Yp(pp, ip, cp) {
      if (!((cp = +cp) > 0)) return [];
      if ((pp = +pp) === (ip = +ip)) return [pp];
      const Op = ip < pp,
        [op, Ip, Sp] = Op ? Lp(ip, pp, cp) : Lp(pp, ip, cp);
      if (!(Ip >= op)) return [];
      const xp = Ip - op + 1,
        Yp = new Array(xp);
      if (Op)
        if (Sp < 0)
          for (let Lp = 0; Lp < xp; ++Lp) Yp[Lp] = (Ip - Lp) / -Sp;
        else
          for (let Lp = 0; Lp < xp; ++Lp) Yp[Lp] = (Ip - Lp) * Sp;
      else if (Sp < 0)
        for (let Lp = 0; Lp < xp; ++Lp) Yp[Lp] = (op + Lp) / -Sp;
      else
        for (let Lp = 0; Lp < xp; ++Lp) Yp[Lp] = (op + Lp) * Sp;
      return Yp
    }

    function Dp(pp, ip, cp) {
      return Lp(pp = +pp, ip = +ip, cp = +cp)[2]
    }

    function Ap(pp, ip, cp) {
      cp = +cp;
      const Op = (ip = +ip) < (pp = +pp),
        op = Op ? Dp(ip, pp, cp) : Dp(pp, ip, cp);
      return (Op ? -1 : 1) * (op < 0 ? 1 / -op : op)
    }

    function Pp(pp, ip) {
      return null == pp || null == ip ? NaN : pp < ip ? -1 : pp > ip ? 1 : pp >= ip ? 0 : NaN
    }

    function Wp(pp, ip) {
      return null == pp || null == ip ? NaN : ip < pp ? -1 : ip > pp ? 1 : ip >= pp ? 0 : NaN
    }

    function yp(pp) {
      let ip, cp, Op;

      function op(pp, Op) {
        let op = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Ip = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : pp.length;
        if (op < Ip) {
          if (0 !== ip(Op, Op)) return Ip;
          do {
            const ip = op + Ip >>> 1;
            cp(pp[ip], Op) < 0 ? op = ip + 1 : Ip = ip
          } while (op < Ip)
        }
        return op
      }
      return 2 !== pp.length ? (ip = Pp, cp = (ip, cp) => Pp(pp(ip), cp), Op = (ip, cp) => pp(ip) - cp) : (ip = pp === Pp || pp === Wp ? pp : Up, cp = pp, Op = pp), {
        left: op,
        center: function(pp, ip) {
          let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          const Ip = op(pp, ip, cp, (arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : pp.length) - 1);
          return Ip > cp && Op(pp[Ip - 1], ip) > -Op(pp[Ip], ip) ? Ip - 1 : Ip
        },
        right: function(pp, Op) {
          let op = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            Ip = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : pp.length;
          if (op < Ip) {
            if (0 !== ip(Op, Op)) return Ip;
            do {
              const ip = op + Ip >>> 1;
              cp(pp[ip], Op) <= 0 ? op = ip + 1 : Ip = ip
            } while (op < Ip)
          }
          return op
        }
      }
    }

    function Up() {
      return 0
    }

    function wp(pp) {
      return null === pp ? NaN : +pp
    }
    const vp = yp(Pp),
      tp = vp.right,
      Hp = (vp.left, yp(wp).center, tp);

    function dp(pp, ip, cp) {
      pp.prototype = ip.prototype = cp, cp.constructor = pp
    }

    function ep(pp, ip) {
      var cp = Object.create(pp.prototype);
      for (var Op in ip) cp[Op] = ip[Op];
      return cp
    }

    function jp() {}
    var kp = .7,
      mp = 1 / kp,
      Rp = "\\s*([+-]?\\d+)\\s*",
      qp = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      Mp = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      Cp = /^#([0-9a-f]{3,8})$/,
      Ep = new RegExp(`^rgb\\(${Rp},${Rp},${Rp}\\)$`),
      Xp = new RegExp(`^rgb\\(${Mp},${Mp},${Mp}\\)$`),
      lp = new RegExp(`^rgba\\(${Rp},${Rp},${Rp},${qp}\\)$`),
      Qp = new RegExp(`^rgba\\(${Mp},${Mp},${Mp},${qp}\\)$`),
      Jp = new RegExp(`^hsl\\(${qp},${Mp},${Mp}\\)$`),
      Bp = new RegExp(`^hsla\\(${qp},${Mp},${Mp},${qp}\\)$`),
      Np = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
      };

    function Tp() {
      return this.rgb().formatHex()
    }

    function fp() {
      return this.rgb().formatRgb()
    }

    function bp(pp) {
      var ip, cp;
      return pp = (pp + "").trim().toLowerCase(), (ip = Cp.exec(pp)) ? (cp = ip[1].length, ip = parseInt(ip[1], 16), 6 === cp ? hp(ip) : 3 === cp ? new Fp(ip >> 8 & 15 | ip >> 4 & 240, ip >> 4 & 15 | 240 & ip, (15 & ip) << 4 | 15 & ip, 1) : 8 === cp ? ap(ip >> 24 & 255, ip >> 16 & 255, ip >> 8 & 255, (255 & ip) / 255) : 4 === cp ? ap(ip >> 12 & 15 | ip >> 8 & 240, ip >> 8 & 15 | ip >> 4 & 240, ip >> 4 & 15 | 240 & ip, ((15 & ip) << 4 | 15 & ip) / 255) : null) : (ip = Ep.exec(pp)) ? new Fp(ip[1], ip[2], ip[3], 1) : (ip = Xp.exec(pp)) ? new Fp(255 * ip[1] / 100, 255 * ip[2] / 100, 255 * ip[3] / 100, 1) : (ip = lp.exec(pp)) ? ap(ip[1], ip[2], ip[3], ip[4]) : (ip = Qp.exec(pp)) ? ap(255 * ip[1] / 100, 255 * ip[2] / 100, 255 * ip[3] / 100, ip[4]) : (ip = Jp.exec(pp)) ? sp(ip[1], ip[2] / 100, ip[3] / 100, 1) : (ip = Bp.exec(pp)) ? sp(ip[1], ip[2] / 100, ip[3] / 100, ip[4]) : Np.hasOwnProperty(pp) ? hp(Np[pp]) : "transparent" === pp ? new Fp(NaN, NaN, NaN, 0) : null
    }

    function hp(pp) {
      return new Fp(pp >> 16 & 255, pp >> 8 & 255, 255 & pp, 1)
    }

    function ap(pp, ip, cp, Op) {
      return Op <= 0 && (pp = ip = cp = NaN), new Fp(pp, ip, cp, Op)
    }

    function np(pp, ip, cp, Op) {
      return 1 === arguments.length ? ((op = pp) instanceof jp || (op = bp(op)), op ? new Fp((op = op.rgb()).r, op.g, op.b, op.opacity) : new Fp) : new Fp(pp, ip, cp, null == Op ? 1 : Op);
      var op
    }

    function Fp(pp, ip, cp, Op) {
      this.r = +pp, this.g = +ip, this.b = +cp, this.opacity = +Op
    }

    function gp() {
      return `#${zp(this.r)}${zp(this.g)}${zp(this.b)}`
    }

    function Gp() {
      const pp = rp(this.opacity);
      return `${1===pp?"rgb(":"rgba("}${Zp(this.r)}, ${Zp(this.g)}, ${Zp(this.b)}${1===pp?")":`, ${pp})`}`
    }

    function rp(pp) {
      return isNaN(pp) ? 1 : Math.max(0, Math.min(1, pp))
    }

    function Zp(pp) {
      return Math.max(0, Math.min(255, Math.round(pp) || 0))
    }

    function zp(pp) {
      return ((pp = Zp(pp)) < 16 ? "0" : "") + pp.toString(16)
    }

    function sp(pp, ip, cp, Op) {
      return Op <= 0 ? pp = ip = cp = NaN : cp <= 0 || cp >= 1 ? pp = ip = NaN : ip <= 0 && (pp = NaN), new Vp(pp, ip, cp, Op)
    }

    function Kp(pp) {
      if (pp instanceof Vp) return new Vp(pp.h, pp.s, pp.l, pp.opacity);
      if (pp instanceof jp || (pp = bp(pp)), !pp) return new Vp;
      if (pp instanceof Vp) return pp;
      var ip = (pp = pp.rgb()).r / 255,
        cp = pp.g / 255,
        Op = pp.b / 255,
        op = Math.min(ip, cp, Op),
        Ip = Math.max(ip, cp, Op),
        Sp = NaN,
        xp = Ip - op,
        Lp = (Ip + op) / 2;
      return xp ? (Sp = ip === Ip ? (cp - Op) / xp + 6 * (cp < Op) : cp === Ip ? (Op - ip) / xp + 2 : (ip - cp) / xp + 4, xp /= Lp < .5 ? Ip + op : 2 - Ip - op, Sp *= 60) : xp = Lp > 0 && Lp < 1 ? 0 : Sp, new Vp(Sp, xp, Lp, pp.opacity)
    }

    function Vp(pp, ip, cp, Op) {
      this.h = +pp, this.s = +ip, this.l = +cp, this.opacity = +Op
    }

    function ii(pp) {
      return (pp = (pp || 0) % 360) < 0 ? pp + 360 : pp
    }

    function ci(pp) {
      return Math.max(0, Math.min(1, pp || 0))
    }

    function Oi(pp, ip, cp) {
      return 255 * (pp < 60 ? ip + (cp - ip) * pp / 60 : pp < 180 ? cp : pp < 240 ? ip + (cp - ip) * (240 - pp) / 60 : ip)
    }

    function oi(pp, ip, cp, Op, op) {
      var Ip = pp * pp,
        Sp = Ip * pp;
      return ((1 - 3 * pp + 3 * Ip - Sp) * ip + (4 - 6 * Ip + 3 * Sp) * cp + (1 + 3 * pp + 3 * Ip - 3 * Sp) * Op + Sp * op) / 6
    }
    dp(jp, bp, {
      copy(pp) {
        return Object.assign(new this.constructor, this, pp)
      },
      displayable() {
        return this.rgb().displayable()
      },
      hex: Tp,
      formatHex: Tp,
      formatHex8: function() {
        return this.rgb().formatHex8()
      },
      formatHsl: function() {
        return Kp(this).formatHsl()
      },
      formatRgb: fp,
      toString: fp
    }), dp(Fp, np, ep(jp, {
      brighter(pp) {
        return pp = null == pp ? mp : Math.pow(mp, pp), new Fp(this.r * pp, this.g * pp, this.b * pp, this.opacity)
      },
      darker(pp) {
        return pp = null == pp ? kp : Math.pow(kp, pp), new Fp(this.r * pp, this.g * pp, this.b * pp, this.opacity)
      },
      rgb() {
        return this
      },
      clamp() {
        return new Fp(Zp(this.r), Zp(this.g), Zp(this.b), rp(this.opacity))
      },
      displayable() {
        return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1
      },
      hex: gp,
      formatHex: gp,
      formatHex8: function() {
        return `#${zp(this.r)}${zp(this.g)}${zp(this.b)}${zp(255*(isNaN(this.opacity)?1:this.opacity))}`
      },
      formatRgb: Gp,
      toString: Gp
    })), dp(Vp, (function(pp, ip, cp, Op) {
      return 1 === arguments.length ? Kp(pp) : new Vp(pp, ip, cp, null == Op ? 1 : Op)
    }), ep(jp, {
      brighter(pp) {
        return pp = null == pp ? mp : Math.pow(mp, pp), new Vp(this.h, this.s, this.l * pp, this.opacity)
      },
      darker(pp) {
        return pp = null == pp ? kp : Math.pow(kp, pp), new Vp(this.h, this.s, this.l * pp, this.opacity)
      },
      rgb() {
        var pp = this.h % 360 + 360 * (this.h < 0),
          ip = isNaN(pp) || isNaN(this.s) ? 0 : this.s,
          cp = this.l,
          Op = cp + (cp < .5 ? cp : 1 - cp) * ip,
          op = 2 * cp - Op;
        return new Fp(Oi(pp >= 240 ? pp - 240 : pp + 120, op, Op), Oi(pp, op, Op), Oi(pp < 120 ? pp + 240 : pp - 120, op, Op), this.opacity)
      },
      clamp() {
        return new Vp(ii(this.h), ci(this.s), ci(this.l), rp(this.opacity))
      },
      displayable() {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
      },
      formatHsl() {
        const pp = rp(this.opacity);
        return `${1===pp?"hsl(":"hsla("}${ii(this.h)}, ${100*ci(this.s)}%, ${100*ci(this.l)}%${1===pp?")":`, ${pp})`}`
      }
    }));
    const Ii = pp => () => pp;

    function Si(pp, ip) {
      return function(cp) {
        return pp + cp * ip
      }
    }

    function xi(pp) {
      return 1 === (pp = +pp) ? Li : function(ip, cp) {
        return cp - ip ? function(pp, ip, cp) {
          return pp = Math.pow(pp, cp), ip = Math.pow(ip, cp) - pp, cp = 1 / cp,
            function(Op) {
              return Math.pow(pp + Op * ip, cp)
            }
        }(ip, cp, pp) : Ii(isNaN(ip) ? cp : ip)
      }
    }

    function Li(pp, ip) {
      var cp = ip - pp;
      return cp ? Si(pp, cp) : Ii(isNaN(pp) ? ip : pp)
    }
    const Yi = function pp(ip) {
      var cp = xi(ip);

      function Op(pp, ip) {
        var Op = cp((pp = np(pp)).r, (ip = np(ip)).r),
          op = cp(pp.g, ip.g),
          Ip = cp(pp.b, ip.b),
          Sp = Li(pp.opacity, ip.opacity);
        return function(ip) {
          return pp.r = Op(ip), pp.g = op(ip), pp.b = Ip(ip), pp.opacity = Sp(ip), pp + ""
        }
      }
      return Op.gamma = pp, Op
    }(1);

    function Di(pp) {
      return function(ip) {
        var cp, Op, op = ip.length,
          Ip = new Array(op),
          Sp = new Array(op),
          xp = new Array(op);
        for (cp = 0; cp < op; ++cp) Op = np(ip[cp]), Ip[cp] = Op.r || 0, Sp[cp] = Op.g || 0, xp[cp] = Op.b || 0;
        return Ip = pp(Ip), Sp = pp(Sp), xp = pp(xp), Op.opacity = 1,
          function(pp) {
            return Op.r = Ip(pp), Op.g = Sp(pp), Op.b = xp(pp), Op + ""
          }
      }
    }
    Di((function(pp) {
      var ip = pp.length - 1;
      return function(cp) {
        var Op = cp <= 0 ? cp = 0 : cp >= 1 ? (cp = 1, ip - 1) : Math.floor(cp * ip),
          op = pp[Op],
          Ip = pp[Op + 1],
          Sp = Op > 0 ? pp[Op - 1] : 2 * op - Ip,
          xp = Op < ip - 1 ? pp[Op + 2] : 2 * Ip - op;
        return oi((cp - Op / ip) * ip, Sp, op, Ip, xp)
      }
    })), Di((function(pp) {
      var ip = pp.length;
      return function(cp) {
        var Op = Math.floor(((cp %= 1) < 0 ? ++cp : cp) * ip),
          op = pp[(Op + ip - 1) % ip],
          Ip = pp[Op % ip],
          Sp = pp[(Op + 1) % ip],
          xp = pp[(Op + 2) % ip];
        return oi((cp - Op / ip) * ip, op, Ip, Sp, xp)
      }
    }));

    function Ai(pp, ip) {
      var cp, Op = ip ? ip.length : 0,
        op = pp ? Math.min(Op, pp.length) : 0,
        Ip = new Array(op),
        Sp = new Array(Op);
      for (cp = 0; cp < op; ++cp) Ip[cp] = Hi(pp[cp], ip[cp]);
      for (; cp < Op; ++cp) Sp[cp] = ip[cp];
      return function(pp) {
        for (cp = 0; cp < op; ++cp) Sp[cp] = Ip[cp](pp);
        return Sp
      }
    }

    function Pi(pp, ip) {
      var cp = new Date;
      return pp = +pp, ip = +ip,
        function(Op) {
          return cp.setTime(pp * (1 - Op) + ip * Op), cp
        }
    }

    function Wi(pp, ip) {
      return pp = +pp, ip = +ip,
        function(cp) {
          return pp * (1 - cp) + ip * cp
        }
    }

    function yi(pp, ip) {
      var cp, Op = {},
        op = {};
      for (cp in null !== pp && "object" === typeof pp || (pp = {}), null !== ip && "object" === typeof ip || (ip = {}), ip) cp in pp ? Op[cp] = Hi(pp[cp], ip[cp]) : op[cp] = ip[cp];
      return function(pp) {
        for (cp in Op) op[cp] = Op[cp](pp);
        return op
      }
    }
    var Ui = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      wi = new RegExp(Ui.source, "g");

    function vi(pp, ip) {
      var cp, Op, op, Ip = Ui.lastIndex = wi.lastIndex = 0,
        Sp = -1,
        xp = [],
        Lp = [];
      for (pp += "", ip += "";
        (cp = Ui.exec(pp)) && (Op = wi.exec(ip));)(op = Op.index) > Ip && (op = ip.slice(Ip, op), xp[Sp] ? xp[Sp] += op : xp[++Sp] = op), (cp = cp[0]) === (Op = Op[0]) ? xp[Sp] ? xp[Sp] += Op : xp[++Sp] = Op : (xp[++Sp] = null, Lp.push({
        i: Sp,
        x: Wi(cp, Op)
      })), Ip = wi.lastIndex;
      return Ip < ip.length && (op = ip.slice(Ip), xp[Sp] ? xp[Sp] += op : xp[++Sp] = op), xp.length < 2 ? Lp[0] ? function(pp) {
        return function(ip) {
          return pp(ip) + ""
        }
      }(Lp[0].x) : function(pp) {
        return function() {
          return pp
        }
      }(ip) : (ip = Lp.length, function(pp) {
        for (var cp, Op = 0; Op < ip; ++Op) xp[(cp = Lp[Op]).i] = cp.x(pp);
        return xp.join("")
      })
    }

    function ti(pp, ip) {
      ip || (ip = []);
      var cp, Op = pp ? Math.min(ip.length, pp.length) : 0,
        op = ip.slice();
      return function(Ip) {
        for (cp = 0; cp < Op; ++cp) op[cp] = pp[cp] * (1 - Ip) + ip[cp] * Ip;
        return op
      }
    }

    function Hi(pp, ip) {
      var cp, Op, op = typeof ip;
      return null == ip || "boolean" === op ? Ii(ip) : ("number" === op ? Wi : "string" === op ? (cp = bp(ip)) ? (ip = cp, Yi) : vi : ip instanceof bp ? Yi : ip instanceof Date ? Pi : (Op = ip, !ArrayBuffer.isView(Op) || Op instanceof DataView ? Array.isArray(ip) ? Ai : "function" !== typeof ip.valueOf && "function" !== typeof ip.toString || isNaN(ip) ? yi : Wi : ti))(pp, ip)
    }

    function di(pp, ip) {
      return pp = +pp, ip = +ip,
        function(cp) {
          return Math.round(pp * (1 - cp) + ip * cp)
        }
    }

    function ei(pp) {
      return +pp
    }
    var ui = [0, 1];

    function ji(pp) {
      return pp
    }

    function ki(pp, ip) {
      return (ip -= pp = +pp) ? function(cp) {
        return (cp - pp) / ip
      } : (cp = isNaN(ip) ? NaN : .5, function() {
        return cp
      });
      var cp
    }

    function mi(pp, ip, cp) {
      var Op = pp[0],
        op = pp[1],
        Ip = ip[0],
        Sp = ip[1];
      return op < Op ? (Op = ki(op, Op), Ip = cp(Sp, Ip)) : (Op = ki(Op, op), Ip = cp(Ip, Sp)),
        function(pp) {
          return Ip(Op(pp))
        }
    }

    function Ri(pp, ip, cp) {
      var Op = Math.min(pp.length, ip.length) - 1,
        op = new Array(Op),
        Ip = new Array(Op),
        Sp = -1;
      for (pp[Op] < pp[0] && (pp = pp.slice().reverse(), ip = ip.slice().reverse()); ++Sp < Op;) op[Sp] = ki(pp[Sp], pp[Sp + 1]), Ip[Sp] = cp(ip[Sp], ip[Sp + 1]);
      return function(ip) {
        var cp = Hp(pp, ip, 1, Op) - 1;
        return Ip[cp](op[cp](ip))
      }
    }

    function qi(pp, ip) {
      return ip.domain(pp.domain()).range(pp.range()).interpolate(pp.interpolate()).clamp(pp.clamp()).unknown(pp.unknown())
    }

    function Mi() {
      var pp, ip, cp, Op, op, Ip, Sp = ui,
        xp = ui,
        Lp = Hi,
        Yp = ji;

      function Dp() {
        var pp = Math.min(Sp.length, xp.length);
        return Yp !== ji && (Yp = function(pp, ip) {
          var cp;
          return pp > ip && (cp = pp, pp = ip, ip = cp),
            function(cp) {
              return Math.max(pp, Math.min(ip, cp))
            }
        }(Sp[0], Sp[pp - 1])), Op = pp > 2 ? Ri : mi, op = Ip = null, Ap
      }

      function Ap(ip) {
        return null == ip || isNaN(ip = +ip) ? cp : (op || (op = Op(Sp.map(pp), xp, Lp)))(pp(Yp(ip)))
      }
      return Ap.invert = function(cp) {
          return Yp(ip((Ip || (Ip = Op(xp, Sp.map(pp), Wi)))(cp)))
        }, Ap.domain = function(pp) {
          return arguments.length ? (Sp = Array.from(pp, ei), Dp()) : Sp.slice()
        }, Ap.range = function(pp) {
          return arguments.length ? (xp = Array.from(pp), Dp()) : xp.slice()
        }, Ap.rangeRound = function(pp) {
          return xp = Array.from(pp), Lp = di, Dp()
        }, Ap.clamp = function(pp) {
          return arguments.length ? (Yp = !!pp || ji, Dp()) : Yp !== ji
        }, Ap.interpolate = function(pp) {
          return arguments.length ? (Lp = pp, Dp()) : Lp
        }, Ap.unknown = function(pp) {
          return arguments.length ? (cp = pp, Ap) : cp
        },
        function(cp, Op) {
          return pp = cp, ip = Op, Dp()
        }
    }

    function Ci() {
      return Mi()(ji, ji)
    }
    var Ei, Xi = cp(6280),
      li = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

    function Qi(pp) {
      if (!(ip = li.exec(pp))) throw new Error("invalid format: " + pp);
      var ip;
      return new Ji({
        fill: ip[1],
        align: ip[2],
        sign: ip[3],
        symbol: ip[4],
        zero: ip[5],
        width: ip[6],
        comma: ip[7],
        precision: ip[8] && ip[8].slice(1),
        trim: ip[9],
        type: ip[10]
      })
    }

    function Ji(pp) {
      this.fill = void 0 === pp.fill ? " " : pp.fill + "", this.align = void 0 === pp.align ? ">" : pp.align + "", this.sign = void 0 === pp.sign ? "-" : pp.sign + "", this.symbol = void 0 === pp.symbol ? "" : pp.symbol + "", this.zero = !!pp.zero, this.width = void 0 === pp.width ? void 0 : +pp.width, this.comma = !!pp.comma, this.precision = void 0 === pp.precision ? void 0 : +pp.precision, this.trim = !!pp.trim, this.type = void 0 === pp.type ? "" : pp.type + ""
    }

    function Bi(pp, ip) {
      if (!isFinite(pp) || 0 === pp) return null;
      var cp = (pp = ip ? pp.toExponential(ip - 1) : pp.toExponential()).indexOf("e"),
        Op = pp.slice(0, cp);
      return [Op.length > 1 ? Op[0] + Op.slice(2) : Op, +pp.slice(cp + 1)]
    }

    function Ni(pp) {
      return (pp = Bi(Math.abs(pp))) ? pp[1] : NaN
    }

    function Ti(pp, ip) {
      var cp = Bi(pp, ip);
      if (!cp) return pp + "";
      var Op = cp[0],
        op = cp[1];
      return op < 0 ? "0." + new Array(-op).join("0") + Op : Op.length > op + 1 ? Op.slice(0, op + 1) + "." + Op.slice(op + 1) : Op + new Array(op - Op.length + 2).join("0")
    }
    Qi.prototype = Ji.prototype, Ji.prototype.toString = function() {
      return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (void 0 === this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type
    };
    const fi = {
      "%": (pp, ip) => (100 * pp).toFixed(ip),
      b: pp => Math.round(pp).toString(2),
      c: pp => pp + "",
      d: function(pp) {
        return Math.abs(pp = Math.round(pp)) >= 1e21 ? pp.toLocaleString("en").replace(/,/g, "") : pp.toString(10)
      },
      e: (pp, ip) => pp.toExponential(ip),
      f: (pp, ip) => pp.toFixed(ip),
      g: (pp, ip) => pp.toPrecision(ip),
      o: pp => Math.round(pp).toString(8),
      p: (pp, ip) => Ti(100 * pp, ip),
      r: Ti,
      s: function(pp, ip) {
        var cp = Bi(pp, ip);
        if (!cp) return Ei = void 0, pp.toPrecision(ip);
        var Op = cp[0],
          op = cp[1],
          Ip = op - (Ei = 3 * Math.max(-8, Math.min(8, Math.floor(op / 3)))) + 1,
          Sp = Op.length;
        return Ip === Sp ? Op : Ip > Sp ? Op + new Array(Ip - Sp + 1).join("0") : Ip > 0 ? Op.slice(0, Ip) + "." + Op.slice(Ip) : "0." + new Array(1 - Ip).join("0") + Bi(pp, Math.max(0, ip + Ip - 1))[0]
      },
      X: pp => Math.round(pp).toString(16).toUpperCase(),
      x: pp => Math.round(pp).toString(16)
    };

    function bi(pp) {
      return pp
    }
    var ai, ni, Fi, gi = Array.prototype.map,
      Gi = ["y", "z", "a", "f", "p", "n", "\xb5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];

    function ri(pp) {
      var ip, cp, Op = void 0 === pp.grouping || void 0 === pp.thousands ? bi : (ip = gi.call(pp.grouping, Number), cp = pp.thousands + "", function(pp, Op) {
          for (var op = pp.length, Ip = [], Sp = 0, xp = ip[0], Lp = 0; op > 0 && xp > 0 && (Lp + xp + 1 > Op && (xp = Math.max(1, Op - Lp)), Ip.push(pp.substring(op -= xp, op + xp)), !((Lp += xp + 1) > Op));) xp = ip[Sp = (Sp + 1) % ip.length];
          return Ip.reverse().join(cp)
        }),
        op = void 0 === pp.currency ? "" : pp.currency[0] + "",
        Ip = void 0 === pp.currency ? "" : pp.currency[1] + "",
        Sp = void 0 === pp.decimal ? "." : pp.decimal + "",
        xp = void 0 === pp.numerals ? bi : function(pp) {
          return function(ip) {
            return ip.replace(/[0-9]/g, (function(ip) {
              return pp[+ip]
            }))
          }
        }(gi.call(pp.numerals, String)),
        Lp = void 0 === pp.percent ? "%" : pp.percent + "",
        Yp = void 0 === pp.minus ? "\u2212" : pp.minus + "",
        Dp = void 0 === pp.nan ? "NaN" : pp.nan + "";

      function Ap(pp, ip) {
        var cp = (pp = Qi(pp)).fill,
          Ap = pp.align,
          Pp = pp.sign,
          Wp = pp.symbol,
          yp = pp.zero,
          Up = pp.width,
          wp = pp.comma,
          vp = pp.precision,
          tp = pp.trim,
          Hp = pp.type;
        "n" === Hp ? (wp = !0, Hp = "g") : fi[Hp] || (void 0 === vp && (vp = 12), tp = !0, Hp = "g"), (yp || "0" === cp && "=" === Ap) && (yp = !0, cp = "0", Ap = "=");
        var dp = (ip && void 0 !== ip.prefix ? ip.prefix : "") + ("$" === Wp ? op : "#" === Wp && /[boxX]/.test(Hp) ? "0" + Hp.toLowerCase() : ""),
          ep = ("$" === Wp ? Ip : /[%p]/.test(Hp) ? Lp : "") + (ip && void 0 !== ip.suffix ? ip.suffix : ""),
          jp = fi[Hp],
          kp = /[defgprs%]/.test(Hp);

        function mp(pp) {
          var ip, op, Ip, Lp = dp,
            Wp = ep;
          if ("c" === Hp) Wp = jp(pp) + Wp, pp = "";
          else {
            var mp = (pp = +pp) < 0 || 1 / pp < 0;
            if (pp = isNaN(pp) ? Dp : jp(Math.abs(pp), vp), tp && (pp = function(pp) {
                pp: for (var ip, cp = pp.length, Op = 1, op = -1; Op < cp; ++Op) switch (pp[Op]) {
                  case ".":
                    op = ip = Op;
                    break;
                  case "0":
                    0 === op && (op = Op), ip = Op;
                    break;
                  default:
                    if (!+pp[Op]) break pp;
                    op > 0 && (op = 0)
                }
                return op > 0 ? pp.slice(0, op) + pp.slice(ip + 1) : pp
              }(pp)), mp && 0 === +pp && "+" !== Pp && (mp = !1), Lp = (mp ? "(" === Pp ? Pp : Yp : "-" === Pp || "(" === Pp ? "" : Pp) + Lp, Wp = ("s" !== Hp || isNaN(pp) || void 0 === Ei ? "" : Gi[8 + Ei / 3]) + Wp + (mp && "(" === Pp ? ")" : ""), kp)
              for (ip = -1, op = pp.length; ++ip < op;)
                if (48 > (Ip = pp.charCodeAt(ip)) || Ip > 57) {
                  Wp = (46 === Ip ? Sp + pp.slice(ip + 1) : pp.slice(ip)) + Wp, pp = pp.slice(0, ip);
                  break
                }
          }
          wp && !yp && (pp = Op(pp, 1 / 0));
          var Rp = Lp.length + pp.length + Wp.length,
            qp = Rp < Up ? new Array(Up - Rp + 1).join(cp) : "";
          switch (wp && yp && (pp = Op(qp + pp, qp.length ? Up - Wp.length : 1 / 0), qp = ""), Ap) {
            case "<":
              pp = Lp + pp + Wp + qp;
              break;
            case "=":
              pp = Lp + qp + pp + Wp;
              break;
            case "^":
              pp = qp.slice(0, Rp = qp.length >> 1) + Lp + pp + Wp + qp.slice(Rp);
              break;
            default:
              pp = qp + Lp + pp + Wp
          }
          return xp(pp)
        }
        return vp = void 0 === vp ? 6 : /[gprs]/.test(Hp) ? Math.max(1, Math.min(21, vp)) : Math.max(0, Math.min(20, vp)), mp.toString = function() {
          return pp + ""
        }, mp
      }
      return {
        format: Ap,
        formatPrefix: function(pp, ip) {
          var cp = 3 * Math.max(-8, Math.min(8, Math.floor(Ni(ip) / 3))),
            Op = Math.pow(10, -cp),
            op = Ap(((pp = Qi(pp)).type = "f", pp), {
              suffix: Gi[8 + cp / 3]
            });
          return function(pp) {
            return op(Op * pp)
          }
        }
      }
    }

    function Zi(pp, ip, cp, Op) {
      var op, Ip = Ap(pp, ip, cp);
      switch ((Op = Qi(null == Op ? ",f" : Op)).type) {
        case "s":
          var Sp = Math.max(Math.abs(pp), Math.abs(ip));
          return null != Op.precision || isNaN(op = function(pp, ip) {
            return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(Ni(ip) / 3))) - Ni(Math.abs(pp)))
          }(Ip, Sp)) || (Op.precision = op), Fi(Op, Sp);
        case "":
        case "e":
        case "g":
        case "p":
        case "r":
          null != Op.precision || isNaN(op = function(pp, ip) {
            return pp = Math.abs(pp), ip = Math.abs(ip) - pp, Math.max(0, Ni(ip) - Ni(pp)) + 1
          }(Ip, Math.max(Math.abs(pp), Math.abs(ip)))) || (Op.precision = op - ("e" === Op.type));
          break;
        case "f":
        case "%":
          null != Op.precision || isNaN(op = function(pp) {
            return Math.max(0, -Ni(Math.abs(pp)))
          }(Ip)) || (Op.precision = op - 2 * ("%" === Op.type))
      }
      return ni(Op)
    }

    function zi(pp) {
      var ip = pp.domain;
      return pp.ticks = function(pp) {
        var cp = ip();
        return Yp(cp[0], cp[cp.length - 1], null == pp ? 10 : pp)
      }, pp.tickFormat = function(pp, cp) {
        var Op = ip();
        return Zi(Op[0], Op[Op.length - 1], null == pp ? 10 : pp, cp)
      }, pp.nice = function(cp) {
        null == cp && (cp = 10);
        var Op, op, Ip = ip(),
          Sp = 0,
          xp = Ip.length - 1,
          Lp = Ip[Sp],
          Yp = Ip[xp],
          Ap = 10;
        for (Yp < Lp && (op = Lp, Lp = Yp, Yp = op, op = Sp, Sp = xp, xp = op); Ap-- > 0;) {
          if ((op = Dp(Lp, Yp, cp)) === Op) return Ip[Sp] = Lp, Ip[xp] = Yp, ip(Ip);
          if (op > 0) Lp = Math.floor(Lp / op) * op, Yp = Math.ceil(Yp / op) * op;
          else {
            if (!(op < 0)) break;
            Lp = Math.ceil(Lp * op) / op, Yp = Math.floor(Yp * op) / op
          }
          Op = op
        }
        return pp
      }, pp
    }

    function si() {
      var pp = Ci();
      return pp.copy = function() {
        return qi(pp, si())
      }, Xi.d.apply(pp, arguments), zi(pp)
    }

    function Ki(pp) {
      var ip;

      function cp(pp) {
        return null == pp || isNaN(pp = +pp) ? ip : pp
      }
      return cp.invert = cp, cp.domain = cp.range = function(ip) {
        return arguments.length ? (pp = Array.from(ip, ei), cp) : pp.slice()
      }, cp.unknown = function(pp) {
        return arguments.length ? (ip = pp, cp) : ip
      }, cp.copy = function() {
        return Ki(pp).unknown(ip)
      }, pp = arguments.length ? Array.from(pp, ei) : [0, 1], zi(cp)
    }

    function Vi(pp, ip) {
      var cp, Op = 0,
        op = (pp = pp.slice()).length - 1,
        Ip = pp[Op],
        Sp = pp[op];
      return Sp < Ip && (cp = Op, Op = op, op = cp, cp = Ip, Ip = Sp, Sp = cp), pp[Op] = ip.floor(Ip), pp[op] = ip.ceil(Sp), pp
    }

    function pc(pp) {
      return Math.log(pp)
    }

    function ic(pp) {
      return Math.exp(pp)
    }

    function cc(pp) {
      return -Math.log(-pp)
    }

    function Oc(pp) {
      return -Math.exp(-pp)
    }

    function oc(pp) {
      return isFinite(pp) ? +("1e" + pp) : pp < 0 ? 0 : pp
    }

    function Ic(pp) {
      return (ip, cp) => -pp(-ip, cp)
    }

    function Sc(pp) {
      const ip = pp(pc, ic),
        cp = ip.domain;
      let Op, op, Ip = 10;

      function Sp() {
        return Op = function(pp) {
          return pp === Math.E ? Math.log : 10 === pp && Math.log10 || 2 === pp && Math.log2 || (pp = Math.log(pp), ip => Math.log(ip) / pp)
        }(Ip), op = function(pp) {
          return 10 === pp ? oc : pp === Math.E ? Math.exp : ip => Math.pow(pp, ip)
        }(Ip), cp()[0] < 0 ? (Op = Ic(Op), op = Ic(op), pp(cc, Oc)) : pp(pc, ic), ip
      }
      return ip.base = function(pp) {
        return arguments.length ? (Ip = +pp, Sp()) : Ip
      }, ip.domain = function(pp) {
        return arguments.length ? (cp(pp), Sp()) : cp()
      }, ip.ticks = pp => {
        const ip = cp();
        let Sp = ip[0],
          xp = ip[ip.length - 1];
        const Lp = xp < Sp;
        Lp && ([Sp, xp] = [xp, Sp]);
        let Dp, Ap, Pp = Op(Sp),
          Wp = Op(xp);
        const yp = null == pp ? 10 : +pp;
        let Up = [];
        if (!(Ip % 1) && Wp - Pp < yp) {
          if (Pp = Math.floor(Pp), Wp = Math.ceil(Wp), Sp > 0) {
            for (; Pp <= Wp; ++Pp)
              for (Dp = 1; Dp < Ip; ++Dp)
                if (Ap = Pp < 0 ? Dp / op(-Pp) : Dp * op(Pp), !(Ap < Sp)) {
                  if (Ap > xp) break;
                  Up.push(Ap)
                }
          } else
            for (; Pp <= Wp; ++Pp)
              for (Dp = Ip - 1; Dp >= 1; --Dp)
                if (Ap = Pp > 0 ? Dp / op(-Pp) : Dp * op(Pp), !(Ap < Sp)) {
                  if (Ap > xp) break;
                  Up.push(Ap)
                } 2 * Up.length < yp && (Up = Yp(Sp, xp, yp))
        } else Up = Yp(Pp, Wp, Math.min(Wp - Pp, yp)).map(op);
        return Lp ? Up.reverse() : Up
      }, ip.tickFormat = (pp, cp) => {
        if (null == pp && (pp = 10), null == cp && (cp = 10 === Ip ? "s" : ","), "function" !== typeof cp && (Ip % 1 || null != (cp = Qi(cp)).precision || (cp.trim = !0), cp = ni(cp)), pp === 1 / 0) return cp;
        const Sp = Math.max(1, Ip * pp / ip.ticks().length);
        return pp => {
          let ip = pp / op(Math.round(Op(pp)));
          return ip * Ip < Ip - .5 && (ip *= Ip), ip <= Sp ? cp(pp) : ""
        }
      }, ip.nice = () => cp(Vi(cp(), {
        floor: pp => op(Math.floor(Op(pp))),
        ceil: pp => op(Math.ceil(Op(pp)))
      })), ip
    }

    function xc() {
      const pp = Sc(Mi()).domain([1, 10]);
      return pp.copy = () => qi(pp, xc()).base(pp.base()), Xi.d.apply(pp, arguments), pp
    }

    function Lc(pp) {
      return function(ip) {
        return Math.sign(ip) * Math.log1p(Math.abs(ip / pp))
      }
    }

    function Yc(pp) {
      return function(ip) {
        return Math.sign(ip) * Math.expm1(Math.abs(ip)) * pp
      }
    }

    function Dc(pp) {
      var ip = 1,
        cp = pp(Lc(ip), Yc(ip));
      return cp.constant = function(cp) {
        return arguments.length ? pp(Lc(ip = +cp), Yc(ip)) : ip
      }, zi(cp)
    }

    function Ac() {
      var pp = Dc(Mi());
      return pp.copy = function() {
        return qi(pp, Ac()).constant(pp.constant())
      }, Xi.d.apply(pp, arguments)
    }
    ai = ri({
      thousands: ",",
      grouping: [3],
      currency: ["$", ""]
    }), ni = ai.format, Fi = ai.formatPrefix;
    var Pc = cp(6288);

    function Wc(pp) {
      return function(ip) {
        return ip < 0 ? -Math.pow(-ip, pp) : Math.pow(ip, pp)
      }
    }

    function yc(pp) {
      return pp < 0 ? -Math.sqrt(-pp) : Math.sqrt(pp)
    }

    function Uc(pp) {
      return pp < 0 ? -pp * pp : pp * pp
    }

    function wc(pp) {
      var ip = pp(ji, ji),
        cp = 1;
      return ip.exponent = function(ip) {
        return arguments.length ? 1 === (cp = +ip) ? pp(ji, ji) : .5 === cp ? pp(yc, Uc) : pp(Wc(cp), Wc(1 / cp)) : cp
      }, zi(ip)
    }

    function vc() {
      var pp = wc(Mi());
      return pp.copy = function() {
        return qi(pp, vc()).exponent(pp.exponent())
      }, Xi.d.apply(pp, arguments), pp
    }

    function tc() {
      return vc.apply(null, arguments).exponent(.5)
    }

    function Hc(pp) {
      return Math.sign(pp) * pp * pp
    }

    function dc() {
      var pp, ip = Ci(),
        cp = [0, 1],
        Op = !1;

      function op(cp) {
        var op = function(pp) {
          return Math.sign(pp) * Math.sqrt(Math.abs(pp))
        }(ip(cp));
        return isNaN(op) ? pp : Op ? Math.round(op) : op
      }
      return op.invert = function(pp) {
        return ip.invert(Hc(pp))
      }, op.domain = function(pp) {
        return arguments.length ? (ip.domain(pp), op) : ip.domain()
      }, op.range = function(pp) {
        return arguments.length ? (ip.range((cp = Array.from(pp, ei)).map(Hc)), op) : cp.slice()
      }, op.rangeRound = function(pp) {
        return op.range(pp).round(!0)
      }, op.round = function(pp) {
        return arguments.length ? (Op = !!pp, op) : Op
      }, op.clamp = function(pp) {
        return arguments.length ? (ip.clamp(pp), op) : ip.clamp()
      }, op.unknown = function(ip) {
        return arguments.length ? (pp = ip, op) : pp
      }, op.copy = function() {
        return dc(ip.domain(), cp).round(Op).clamp(ip.clamp()).unknown(pp)
      }, Xi.d.apply(op, arguments), zi(op)
    }

    function ec(pp, ip) {
      let cp;
      if (void 0 === ip)
        for (const Op of pp) null != Op && (cp < Op || void 0 === cp && Op >= Op) && (cp = Op);
      else {
        let Op = -1;
        for (let op of pp) null != (op = ip(op, ++Op, pp)) && (cp < op || void 0 === cp && op >= op) && (cp = op)
      }
      return cp
    }

    function uc(pp, ip) {
      let cp;
      if (void 0 === ip)
        for (const Op of pp) null != Op && (cp > Op || void 0 === cp && Op >= Op) && (cp = Op);
      else {
        let Op = -1;
        for (let op of pp) null != (op = ip(op, ++Op, pp)) && (cp > op || void 0 === cp && op >= op) && (cp = op)
      }
      return cp
    }

    function jc() {
      let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pp;
      if (pp === Pp) return kc;
      if ("function" !== typeof pp) throw new TypeError("compare is not a function");
      return (ip, cp) => {
        const Op = pp(ip, cp);
        return Op || 0 === Op ? Op : (0 === pp(cp, cp)) - (0 === pp(ip, ip))
      }
    }

    function kc(pp, ip) {
      return (null == pp || !(pp >= pp)) - (null == ip || !(ip >= ip)) || (pp < ip ? -1 : pp > ip ? 1 : 0)
    }

    function mc(pp, ip) {
      let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1 / 0,
        op = arguments.length > 4 ? arguments[4] : void 0;
      if (ip = Math.floor(ip), cp = Math.floor(Math.max(0, cp)), Op = Math.floor(Math.min(pp.length - 1, Op)), !(cp <= ip && ip <= Op)) return pp;
      for (op = void 0 === op ? kc : jc(op); Op > cp;) {
        if (Op - cp > 600) {
          const Ip = Op - cp + 1,
            Sp = ip - cp + 1,
            xp = Math.log(Ip),
            Lp = .5 * Math.exp(2 * xp / 3),
            Yp = .5 * Math.sqrt(xp * Lp * (Ip - Lp) / Ip) * (Sp - Ip / 2 < 0 ? -1 : 1);
          mc(pp, ip, Math.max(cp, Math.floor(ip - Sp * Lp / Ip + Yp)), Math.min(Op, Math.floor(ip + (Ip - Sp) * Lp / Ip + Yp)), op)
        }
        const Ip = pp[ip];
        let Sp = cp,
          xp = Op;
        for (Rc(pp, cp, ip), op(pp[Op], Ip) > 0 && Rc(pp, cp, Op); Sp < xp;) {
          for (Rc(pp, Sp, xp), ++Sp, --xp; op(pp[Sp], Ip) < 0;) ++Sp;
          for (; op(pp[xp], Ip) > 0;) --xp
        }
        0 === op(pp[cp], Ip) ? Rc(pp, cp, xp) : (++xp, Rc(pp, xp, Op)), xp <= ip && (cp = xp + 1), ip <= xp && (Op = xp - 1)
      }
      return pp
    }

    function Rc(pp, ip, cp) {
      const Op = pp[ip];
      pp[ip] = pp[cp], pp[cp] = Op
    }

    function qc(pp, ip, cp) {
      if (pp = Float64Array.from(function*(pp, ip) {
          if (void 0 === ip)
            for (let cp of pp) null != cp && (cp = +cp) >= cp && (yield cp);
          else {
            let cp = -1;
            for (let Op of pp) null != (Op = ip(Op, ++cp, pp)) && (Op = +Op) >= Op && (yield Op)
          }
        }(pp, cp)), (Op = pp.length) && !isNaN(ip = +ip)) {
        if (ip <= 0 || Op < 2) return uc(pp);
        if (ip >= 1) return ec(pp);
        var Op, op = (Op - 1) * ip,
          Ip = Math.floor(op),
          Sp = ec(mc(pp, Ip).subarray(0, Ip + 1));
        return Sp + (uc(pp.subarray(Ip + 1)) - Sp) * (op - Ip)
      }
    }

    function Mc(pp, ip) {
      let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : wp;
      if ((Op = pp.length) && !isNaN(ip = +ip)) {
        if (ip <= 0 || Op < 2) return +cp(pp[0], 0, pp);
        if (ip >= 1) return +cp(pp[Op - 1], Op - 1, pp);
        var Op, op = (Op - 1) * ip,
          Ip = Math.floor(op),
          Sp = +cp(pp[Ip], Ip, pp);
        return Sp + (+cp(pp[Ip + 1], Ip + 1, pp) - Sp) * (op - Ip)
      }
    }

    function Cc() {
      var pp, ip = [],
        cp = [],
        Op = [];

      function op() {
        var pp = 0,
          op = Math.max(1, cp.length);
        for (Op = new Array(op - 1); ++pp < op;) Op[pp - 1] = Mc(ip, pp / op);
        return Ip
      }

      function Ip(ip) {
        return null == ip || isNaN(ip = +ip) ? pp : cp[Hp(Op, ip)]
      }
      return Ip.invertExtent = function(pp) {
        var op = cp.indexOf(pp);
        return op < 0 ? [NaN, NaN] : [op > 0 ? Op[op - 1] : ip[0], op < Op.length ? Op[op] : ip[ip.length - 1]]
      }, Ip.domain = function(pp) {
        if (!arguments.length) return ip.slice();
        ip = [];
        for (let cp of pp) null == cp || isNaN(cp = +cp) || ip.push(cp);
        return ip.sort(Pp), op()
      }, Ip.range = function(pp) {
        return arguments.length ? (cp = Array.from(pp), op()) : cp.slice()
      }, Ip.unknown = function(ip) {
        return arguments.length ? (pp = ip, Ip) : pp
      }, Ip.quantiles = function() {
        return Op.slice()
      }, Ip.copy = function() {
        return Cc().domain(ip).range(cp).unknown(pp)
      }, Xi.d.apply(Ip, arguments)
    }

    function Ec() {
      var pp, ip = 0,
        cp = 1,
        Op = 1,
        op = [.5],
        Ip = [0, 1];

      function Sp(ip) {
        return null != ip && ip <= ip ? Ip[Hp(op, ip, 0, Op)] : pp
      }

      function xp() {
        var pp = -1;
        for (op = new Array(Op); ++pp < Op;) op[pp] = ((pp + 1) * cp - (pp - Op) * ip) / (Op + 1);
        return Sp
      }
      return Sp.domain = function(pp) {
        return arguments.length ? ([ip, cp] = pp, ip = +ip, cp = +cp, xp()) : [ip, cp]
      }, Sp.range = function(pp) {
        return arguments.length ? (Op = (Ip = Array.from(pp)).length - 1, xp()) : Ip.slice()
      }, Sp.invertExtent = function(pp) {
        var Sp = Ip.indexOf(pp);
        return Sp < 0 ? [NaN, NaN] : Sp < 1 ? [ip, op[0]] : Sp >= Op ? [op[Op - 1], cp] : [op[Sp - 1], op[Sp]]
      }, Sp.unknown = function(ip) {
        return arguments.length ? (pp = ip, Sp) : Sp
      }, Sp.thresholds = function() {
        return op.slice()
      }, Sp.copy = function() {
        return Ec().domain([ip, cp]).range(Ip).unknown(pp)
      }, Xi.d.apply(zi(Sp), arguments)
    }

    function Xc() {
      var pp, ip = [.5],
        cp = [0, 1],
        Op = 1;

      function op(op) {
        return null != op && op <= op ? cp[Hp(ip, op, 0, Op)] : pp
      }
      return op.domain = function(pp) {
        return arguments.length ? (ip = Array.from(pp), Op = Math.min(ip.length, cp.length - 1), op) : ip.slice()
      }, op.range = function(pp) {
        return arguments.length ? (cp = Array.from(pp), Op = Math.min(ip.length, cp.length - 1), op) : cp.slice()
      }, op.invertExtent = function(pp) {
        var Op = cp.indexOf(pp);
        return [ip[Op - 1], ip[Op]]
      }, op.unknown = function(ip) {
        return arguments.length ? (pp = ip, op) : pp
      }, op.copy = function() {
        return Xc().domain(ip).range(cp).unknown(pp)
      }, Xi.d.apply(op, arguments)
    }
    const lc = 1e3,
      Qc = 6e4,
      Jc = 36e5,
      Bc = 864e5,
      Nc = 6048e5,
      Tc = 2592e6,
      fc = 31536e6,
      bc = new Date,
      hc = new Date;

    function ac(pp, ip, cp, Op) {
      function op(ip) {
        return pp(ip = 0 === arguments.length ? new Date : new Date(+ip)), ip
      }
      return op.floor = ip => (pp(ip = new Date(+ip)), ip), op.ceil = cp => (pp(cp = new Date(cp - 1)), ip(cp, 1), pp(cp), cp), op.round = pp => {
        const ip = op(pp),
          cp = op.ceil(pp);
        return pp - ip < cp - pp ? ip : cp
      }, op.offset = (pp, cp) => (ip(pp = new Date(+pp), null == cp ? 1 : Math.floor(cp)), pp), op.range = (cp, Op, Ip) => {
        const Sp = [];
        if (cp = op.ceil(cp), Ip = null == Ip ? 1 : Math.floor(Ip), !(cp < Op) || !(Ip > 0)) return Sp;
        let xp;
        do {
          Sp.push(xp = new Date(+cp)), ip(cp, Ip), pp(cp)
        } while (xp < cp && cp < Op);
        return Sp
      }, op.filter = cp => ac((ip => {
        if (ip >= ip)
          for (; pp(ip), !cp(ip);) ip.setTime(ip - 1)
      }), ((pp, Op) => {
        if (pp >= pp)
          if (Op < 0)
            for (; ++Op <= 0;)
              for (; ip(pp, -1), !cp(pp););
          else
            for (; --Op >= 0;)
              for (; ip(pp, 1), !cp(pp););
      })), cp && (op.count = (ip, Op) => (bc.setTime(+ip), hc.setTime(+Op), pp(bc), pp(hc), Math.floor(cp(bc, hc))), op.every = pp => (pp = Math.floor(pp), isFinite(pp) && pp > 0 ? pp > 1 ? op.filter(Op ? ip => Op(ip) % pp === 0 : ip => op.count(0, ip) % pp === 0) : op : null)), op
    }
    const nc = ac((() => {}), ((pp, ip) => {
      pp.setTime(+pp + ip)
    }), ((pp, ip) => ip - pp));
    nc.every = pp => (pp = Math.floor(pp), isFinite(pp) && pp > 0 ? pp > 1 ? ac((ip => {
      ip.setTime(Math.floor(ip / pp) * pp)
    }), ((ip, cp) => {
      ip.setTime(+ip + cp * pp)
    }), ((ip, cp) => (cp - ip) / pp)) : nc : null);
    nc.range;
    const Fc = ac((pp => {
        pp.setTime(pp - pp.getMilliseconds())
      }), ((pp, ip) => {
        pp.setTime(+pp + ip * lc)
      }), ((pp, ip) => (ip - pp) / lc), (pp => pp.getUTCSeconds())),
      gc = (Fc.range, ac((pp => {
        pp.setTime(pp - pp.getMilliseconds() - pp.getSeconds() * lc)
      }), ((pp, ip) => {
        pp.setTime(+pp + ip * Qc)
      }), ((pp, ip) => (ip - pp) / Qc), (pp => pp.getMinutes()))),
      Gc = (gc.range, ac((pp => {
        pp.setUTCSeconds(0, 0)
      }), ((pp, ip) => {
        pp.setTime(+pp + ip * Qc)
      }), ((pp, ip) => (ip - pp) / Qc), (pp => pp.getUTCMinutes()))),
      rc = (Gc.range, ac((pp => {
        pp.setTime(pp - pp.getMilliseconds() - pp.getSeconds() * lc - pp.getMinutes() * Qc)
      }), ((pp, ip) => {
        pp.setTime(+pp + ip * Jc)
      }), ((pp, ip) => (ip - pp) / Jc), (pp => pp.getHours()))),
      Zc = (rc.range, ac((pp => {
        pp.setUTCMinutes(0, 0, 0)
      }), ((pp, ip) => {
        pp.setTime(+pp + ip * Jc)
      }), ((pp, ip) => (ip - pp) / Jc), (pp => pp.getUTCHours()))),
      zc = (Zc.range, ac((pp => pp.setHours(0, 0, 0, 0)), ((pp, ip) => pp.setDate(pp.getDate() + ip)), ((pp, ip) => (ip - pp - (ip.getTimezoneOffset() - pp.getTimezoneOffset()) * Qc) / Bc), (pp => pp.getDate() - 1))),
      sc = (zc.range, ac((pp => {
        pp.setUTCHours(0, 0, 0, 0)
      }), ((pp, ip) => {
        pp.setUTCDate(pp.getUTCDate() + ip)
      }), ((pp, ip) => (ip - pp) / Bc), (pp => pp.getUTCDate() - 1))),
      Kc = (sc.range, ac((pp => {
        pp.setUTCHours(0, 0, 0, 0)
      }), ((pp, ip) => {
        pp.setUTCDate(pp.getUTCDate() + ip)
      }), ((pp, ip) => (ip - pp) / Bc), (pp => Math.floor(pp / Bc))));
    Kc.range;

    function Vc(pp) {
      return ac((ip => {
        ip.setDate(ip.getDate() - (ip.getDay() + 7 - pp) % 7), ip.setHours(0, 0, 0, 0)
      }), ((pp, ip) => {
        pp.setDate(pp.getDate() + 7 * ip)
      }), ((pp, ip) => (ip - pp - (ip.getTimezoneOffset() - pp.getTimezoneOffset()) * Qc) / Nc))
    }
    const pO = Vc(0),
      iO = Vc(1),
      cO = Vc(2),
      OO = Vc(3),
      oO = Vc(4),
      IO = Vc(5),
      SO = Vc(6);
    pO.range, iO.range, cO.range, OO.range, oO.range, IO.range, SO.range;

    function xO(pp) {
      return ac((ip => {
        ip.setUTCDate(ip.getUTCDate() - (ip.getUTCDay() + 7 - pp) % 7), ip.setUTCHours(0, 0, 0, 0)
      }), ((pp, ip) => {
        pp.setUTCDate(pp.getUTCDate() + 7 * ip)
      }), ((pp, ip) => (ip - pp) / Nc))
    }
    const LO = xO(0),
      YO = xO(1),
      DO = xO(2),
      AO = xO(3),
      PO = xO(4),
      WO = xO(5),
      yO = xO(6),
      UO = (LO.range, YO.range, DO.range, AO.range, PO.range, WO.range, yO.range, ac((pp => {
        pp.setDate(1), pp.setHours(0, 0, 0, 0)
      }), ((pp, ip) => {
        pp.setMonth(pp.getMonth() + ip)
      }), ((pp, ip) => ip.getMonth() - pp.getMonth() + 12 * (ip.getFullYear() - pp.getFullYear())), (pp => pp.getMonth()))),
      wO = (UO.range, ac((pp => {
        pp.setUTCDate(1), pp.setUTCHours(0, 0, 0, 0)
      }), ((pp, ip) => {
        pp.setUTCMonth(pp.getUTCMonth() + ip)
      }), ((pp, ip) => ip.getUTCMonth() - pp.getUTCMonth() + 12 * (ip.getUTCFullYear() - pp.getUTCFullYear())), (pp => pp.getUTCMonth()))),
      vO = (wO.range, ac((pp => {
        pp.setMonth(0, 1), pp.setHours(0, 0, 0, 0)
      }), ((pp, ip) => {
        pp.setFullYear(pp.getFullYear() + ip)
      }), ((pp, ip) => ip.getFullYear() - pp.getFullYear()), (pp => pp.getFullYear())));
    vO.every = pp => isFinite(pp = Math.floor(pp)) && pp > 0 ? ac((ip => {
      ip.setFullYear(Math.floor(ip.getFullYear() / pp) * pp), ip.setMonth(0, 1), ip.setHours(0, 0, 0, 0)
    }), ((ip, cp) => {
      ip.setFullYear(ip.getFullYear() + cp * pp)
    })) : null;
    vO.range;
    const tO = ac((pp => {
      pp.setUTCMonth(0, 1), pp.setUTCHours(0, 0, 0, 0)
    }), ((pp, ip) => {
      pp.setUTCFullYear(pp.getUTCFullYear() + ip)
    }), ((pp, ip) => ip.getUTCFullYear() - pp.getUTCFullYear()), (pp => pp.getUTCFullYear()));
    tO.every = pp => isFinite(pp = Math.floor(pp)) && pp > 0 ? ac((ip => {
      ip.setUTCFullYear(Math.floor(ip.getUTCFullYear() / pp) * pp), ip.setUTCMonth(0, 1), ip.setUTCHours(0, 0, 0, 0)
    }), ((ip, cp) => {
      ip.setUTCFullYear(ip.getUTCFullYear() + cp * pp)
    })) : null;
    tO.range;

    function HO(pp, ip, cp, Op, op, Ip) {
      const Sp = [
        [Fc, 1, lc],
        [Fc, 5, 5e3],
        [Fc, 15, 15e3],
        [Fc, 30, 3e4],
        [Ip, 1, Qc],
        [Ip, 5, 3e5],
        [Ip, 15, 9e5],
        [Ip, 30, 18e5],
        [op, 1, Jc],
        [op, 3, 108e5],
        [op, 6, 216e5],
        [op, 12, 432e5],
        [Op, 1, Bc],
        [Op, 2, 1728e5],
        [cp, 1, Nc],
        [ip, 1, Tc],
        [ip, 3, 7776e6],
        [pp, 1, fc]
      ];

      function xp(ip, cp, Op) {
        const op = Math.abs(cp - ip) / Op,
          Ip = yp((pp => {
            let [, , ip] = pp;
            return ip
          })).right(Sp, op);
        if (Ip === Sp.length) return pp.every(Ap(ip / fc, cp / fc, Op));
        if (0 === Ip) return nc.every(Math.max(Ap(ip, cp, Op), 1));
        const [xp, Lp] = Sp[op / Sp[Ip - 1][2] < Sp[Ip][2] / op ? Ip - 1 : Ip];
        return xp.every(Lp)
      }
      return [function(pp, ip, cp) {
        const Op = ip < pp;
        Op && ([pp, ip] = [ip, pp]);
        const op = cp && "function" === typeof cp.range ? cp : xp(pp, ip, cp),
          Ip = op ? op.range(pp, +ip + 1) : [];
        return Op ? Ip.reverse() : Ip
      }, xp]
    }
    const [dO, eO] = HO(tO, wO, LO, Kc, Zc, Gc), [uO, jO] = HO(vO, UO, pO, zc, rc, gc);

    function kO(pp) {
      if (0 <= pp.y && pp.y < 100) {
        var ip = new Date(-1, pp.m, pp.d, pp.H, pp.M, pp.S, pp.L);
        return ip.setFullYear(pp.y), ip
      }
      return new Date(pp.y, pp.m, pp.d, pp.H, pp.M, pp.S, pp.L)
    }

    function mO(pp) {
      if (0 <= pp.y && pp.y < 100) {
        var ip = new Date(Date.UTC(-1, pp.m, pp.d, pp.H, pp.M, pp.S, pp.L));
        return ip.setUTCFullYear(pp.y), ip
      }
      return new Date(Date.UTC(pp.y, pp.m, pp.d, pp.H, pp.M, pp.S, pp.L))
    }

    function RO(pp, ip, cp) {
      return {
        y: pp,
        m: ip,
        d: cp,
        H: 0,
        M: 0,
        S: 0,
        L: 0
      }
    }
    var qO, MO, CO, EO = {
        "-": "",
        _: " ",
        0: "0"
      },
      XO = /^\s*\d+/,
      lO = /^%/,
      QO = /[\\^$*+?|[\]().{}]/g;

    function JO(pp, ip, cp) {
      var Op = pp < 0 ? "-" : "",
        op = (Op ? -pp : pp) + "",
        Ip = op.length;
      return Op + (Ip < cp ? new Array(cp - Ip + 1).join(ip) + op : op)
    }

    function BO(pp) {
      return pp.replace(QO, "\\$&")
    }

    function NO(pp) {
      return new RegExp("^(?:" + pp.map(BO).join("|") + ")", "i")
    }

    function TO(pp) {
      return new Map(pp.map(((pp, ip) => [pp.toLowerCase(), ip])))
    }

    function fO(pp, ip, cp) {
      var Op = XO.exec(ip.slice(cp, cp + 1));
      return Op ? (pp.w = +Op[0], cp + Op[0].length) : -1
    }

    function bO(pp, ip, cp) {
      var Op = XO.exec(ip.slice(cp, cp + 1));
      return Op ? (pp.u = +Op[0], cp + Op[0].length) : -1
    }

    function hO(pp, ip, cp) {
      var Op = XO.exec(ip.slice(cp, cp + 2));
      return Op ? (pp.U = +Op[0], cp + Op[0].length) : -1
    }

    function aO(pp, ip, cp) {
      var Op = XO.exec(ip.slice(cp, cp + 2));
      return Op ? (pp.V = +Op[0], cp + Op[0].length) : -1
    }

    function nO(pp, ip, cp) {
      var Op = XO.exec(ip.slice(cp, cp + 2));
      return Op ? (pp.W = +Op[0], cp + Op[0].length) : -1
    }

    function FO(pp, ip, cp) {
      var Op = XO.exec(ip.slice(cp, cp + 4));
      return Op ? (pp.y = +Op[0], cp + Op[0].length) : -1
    }

    function gO(pp, ip, cp) {
      var Op = XO.exec(ip.slice(cp, cp + 2));
      return Op ? (pp.y = +Op[0] + (+Op[0] > 68 ? 1900 : 2e3), cp + Op[0].length) : -1
    }

    function GO(pp, ip, cp) {
      var Op = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(ip.slice(cp, cp + 6));
      return Op ? (pp.Z = Op[1] ? 0 : -(Op[2] + (Op[3] || "00")), cp + Op[0].length) : -1
    }

    function rO(pp, ip, cp) {
      var Op = XO.exec(ip.slice(cp, cp + 1));
      return Op ? (pp.q = 3 * Op[0] - 3, cp + Op[0].length) : -1
    }

    function ZO(pp, ip, cp) {
      var Op = XO.exec(ip.slice(cp, cp + 2));
      return Op ? (pp.m = Op[0] - 1, cp + Op[0].length) : -1
    }

    function zO(pp, ip, cp) {
      var Op = XO.exec(ip.slice(cp, cp + 2));
      return Op ? (pp.d = +Op[0], cp + Op[0].length) : -1
    }

    function sO(pp, ip, cp) {
      var Op = XO.exec(ip.slice(cp, cp + 3));
      return Op ? (pp.m = 0, pp.d = +Op[0], cp + Op[0].length) : -1
    }

    function KO(pp, ip, cp) {
      var Op = XO.exec(ip.slice(cp, cp + 2));
      return Op ? (pp.H = +Op[0], cp + Op[0].length) : -1
    }

    function VO(pp, ip, cp) {
      var Op = XO.exec(ip.slice(cp, cp + 2));
      return Op ? (pp.M = +Op[0], cp + Op[0].length) : -1
    }

    function po(pp, ip, cp) {
      var Op = XO.exec(ip.slice(cp, cp + 2));
      return Op ? (pp.S = +Op[0], cp + Op[0].length) : -1
    }

    function io(pp, ip, cp) {
      var Op = XO.exec(ip.slice(cp, cp + 3));
      return Op ? (pp.L = +Op[0], cp + Op[0].length) : -1
    }

    function co(pp, ip, cp) {
      var Op = XO.exec(ip.slice(cp, cp + 6));
      return Op ? (pp.L = Math.floor(Op[0] / 1e3), cp + Op[0].length) : -1
    }

    function Oo(pp, ip, cp) {
      var Op = lO.exec(ip.slice(cp, cp + 1));
      return Op ? cp + Op[0].length : -1
    }

    function oo(pp, ip, cp) {
      var Op = XO.exec(ip.slice(cp));
      return Op ? (pp.Q = +Op[0], cp + Op[0].length) : -1
    }

    function Io(pp, ip, cp) {
      var Op = XO.exec(ip.slice(cp));
      return Op ? (pp.s = +Op[0], cp + Op[0].length) : -1
    }

    function So(pp, ip) {
      return JO(pp.getDate(), ip, 2)
    }

    function xo(pp, ip) {
      return JO(pp.getHours(), ip, 2)
    }

    function Lo(pp, ip) {
      return JO(pp.getHours() % 12 || 12, ip, 2)
    }

    function Yo(pp, ip) {
      return JO(1 + zc.count(vO(pp), pp), ip, 3)
    }

    function Do(pp, ip) {
      return JO(pp.getMilliseconds(), ip, 3)
    }

    function Ao(pp, ip) {
      return Do(pp, ip) + "000"
    }

    function Po(pp, ip) {
      return JO(pp.getMonth() + 1, ip, 2)
    }

    function Wo(pp, ip) {
      return JO(pp.getMinutes(), ip, 2)
    }

    function yo(pp, ip) {
      return JO(pp.getSeconds(), ip, 2)
    }

    function Uo(pp) {
      var ip = pp.getDay();
      return 0 === ip ? 7 : ip
    }

    function wo(pp, ip) {
      return JO(pO.count(vO(pp) - 1, pp), ip, 2)
    }

    function vo(pp) {
      var ip = pp.getDay();
      return ip >= 4 || 0 === ip ? oO(pp) : oO.ceil(pp)
    }

    function to(pp, ip) {
      return pp = vo(pp), JO(oO.count(vO(pp), pp) + (4 === vO(pp).getDay()), ip, 2)
    }

    function Ho(pp) {
      return pp.getDay()
    }

    function eo(pp, ip) {
      return JO(iO.count(vO(pp) - 1, pp), ip, 2)
    }

    function uo(pp, ip) {
      return JO(pp.getFullYear() % 100, ip, 2)
    }

    function jo(pp, ip) {
      return JO((pp = vo(pp)).getFullYear() % 100, ip, 2)
    }

    function ko(pp, ip) {
      return JO(pp.getFullYear() % 1e4, ip, 4)
    }

    function mo(pp, ip) {
      var cp = pp.getDay();
      return JO((pp = cp >= 4 || 0 === cp ? oO(pp) : oO.ceil(pp)).getFullYear() % 1e4, ip, 4)
    }

    function Ro(pp) {
      var ip = pp.getTimezoneOffset();
      return (ip > 0 ? "-" : (ip *= -1, "+")) + JO(ip / 60 | 0, "0", 2) + JO(ip % 60, "0", 2)
    }

    function qo(pp, ip) {
      return JO(pp.getUTCDate(), ip, 2)
    }

    function Mo(pp, ip) {
      return JO(pp.getUTCHours(), ip, 2)
    }

    function Co(pp, ip) {
      return JO(pp.getUTCHours() % 12 || 12, ip, 2)
    }

    function Eo(pp, ip) {
      return JO(1 + sc.count(tO(pp), pp), ip, 3)
    }

    function Xo(pp, ip) {
      return JO(pp.getUTCMilliseconds(), ip, 3)
    }

    function Qo(pp, ip) {
      return Xo(pp, ip) + "000"
    }

    function Jo(pp, ip) {
      return JO(pp.getUTCMonth() + 1, ip, 2)
    }

    function Bo(pp, ip) {
      return JO(pp.getUTCMinutes(), ip, 2)
    }

    function No(pp, ip) {
      return JO(pp.getUTCSeconds(), ip, 2)
    }

    function To(pp) {
      var ip = pp.getUTCDay();
      return 0 === ip ? 7 : ip
    }

    function fo(pp, ip) {
      return JO(LO.count(tO(pp) - 1, pp), ip, 2)
    }

    function bo(pp) {
      var ip = pp.getUTCDay();
      return ip >= 4 || 0 === ip ? PO(pp) : PO.ceil(pp)
    }

    function ho(pp, ip) {
      return pp = bo(pp), JO(PO.count(tO(pp), pp) + (4 === tO(pp).getUTCDay()), ip, 2)
    }

    function ao(pp) {
      return pp.getUTCDay()
    }

    function no(pp, ip) {
      return JO(YO.count(tO(pp) - 1, pp), ip, 2)
    }

    function Fo(pp, ip) {
      return JO(pp.getUTCFullYear() % 100, ip, 2)
    }

    function go(pp, ip) {
      return JO((pp = bo(pp)).getUTCFullYear() % 100, ip, 2)
    }

    function Go(pp, ip) {
      return JO(pp.getUTCFullYear() % 1e4, ip, 4)
    }

    function ro(pp, ip) {
      var cp = pp.getUTCDay();
      return JO((pp = cp >= 4 || 0 === cp ? PO(pp) : PO.ceil(pp)).getUTCFullYear() % 1e4, ip, 4)
    }

    function Zo() {
      return "+0000"
    }

    function zo() {
      return "%"
    }

    function so(pp) {
      return +pp
    }

    function Ko(pp) {
      return Math.floor(+pp / 1e3)
    }

    function Vo(pp) {
      return new Date(pp)
    }

    function pI(pp) {
      return pp instanceof Date ? +pp : +new Date(+pp)
    }

    function iI(pp, ip, cp, Op, op, Ip, Sp, xp, Lp, Yp) {
      var Dp = Ci(),
        Ap = Dp.invert,
        Pp = Dp.domain,
        Wp = Yp(".%L"),
        yp = Yp(":%S"),
        Up = Yp("%I:%M"),
        wp = Yp("%I %p"),
        vp = Yp("%a %d"),
        tp = Yp("%b %d"),
        Hp = Yp("%B"),
        dp = Yp("%Y");

      function ep(pp) {
        return (Lp(pp) < pp ? Wp : xp(pp) < pp ? yp : Sp(pp) < pp ? Up : Ip(pp) < pp ? wp : Op(pp) < pp ? op(pp) < pp ? vp : tp : cp(pp) < pp ? Hp : dp)(pp)
      }
      return Dp.invert = function(pp) {
        return new Date(Ap(pp))
      }, Dp.domain = function(pp) {
        return arguments.length ? Pp(Array.from(pp, pI)) : Pp().map(Vo)
      }, Dp.ticks = function(ip) {
        var cp = Pp();
        return pp(cp[0], cp[cp.length - 1], null == ip ? 10 : ip)
      }, Dp.tickFormat = function(pp, ip) {
        return null == ip ? ep : Yp(ip)
      }, Dp.nice = function(pp) {
        var cp = Pp();
        return pp && "function" === typeof pp.range || (pp = ip(cp[0], cp[cp.length - 1], null == pp ? 10 : pp)), pp ? Pp(Vi(cp, pp)) : Dp
      }, Dp.copy = function() {
        return qi(Dp, iI(pp, ip, cp, Op, op, Ip, Sp, xp, Lp, Yp))
      }, Dp
    }

    function cI() {
      return Xi.d.apply(iI(uO, jO, vO, UO, pO, zc, rc, gc, Fc, MO).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments)
    }

    function OI() {
      return Xi.d.apply(iI(dO, eO, tO, wO, LO, sc, Zc, Gc, Fc, CO).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments)
    }

    function oI() {
      var pp, ip, cp, Op, op, Ip = 0,
        Sp = 1,
        xp = ji,
        Lp = !1;

      function Yp(ip) {
        return null == ip || isNaN(ip = +ip) ? op : xp(0 === cp ? .5 : (ip = (Op(ip) - pp) * cp, Lp ? Math.max(0, Math.min(1, ip)) : ip))
      }

      function Dp(pp) {
        return function(ip) {
          var cp, Op;
          return arguments.length ? ([cp, Op] = ip, xp = pp(cp, Op), Yp) : [xp(0), xp(1)]
        }
      }
      return Yp.domain = function(op) {
          return arguments.length ? ([Ip, Sp] = op, pp = Op(Ip = +Ip), ip = Op(Sp = +Sp), cp = pp === ip ? 0 : 1 / (ip - pp), Yp) : [Ip, Sp]
        }, Yp.clamp = function(pp) {
          return arguments.length ? (Lp = !!pp, Yp) : Lp
        }, Yp.interpolator = function(pp) {
          return arguments.length ? (xp = pp, Yp) : xp
        }, Yp.range = Dp(Hi), Yp.rangeRound = Dp(di), Yp.unknown = function(pp) {
          return arguments.length ? (op = pp, Yp) : op
        },
        function(op) {
          return Op = op, pp = op(Ip), ip = op(Sp), cp = pp === ip ? 0 : 1 / (ip - pp), Yp
        }
    }

    function II(pp, ip) {
      return ip.domain(pp.domain()).interpolator(pp.interpolator()).clamp(pp.clamp()).unknown(pp.unknown())
    }

    function SI() {
      var pp = zi(oI()(ji));
      return pp.copy = function() {
        return II(pp, SI())
      }, Xi.b.apply(pp, arguments)
    }

    function xI() {
      var pp = Sc(oI()).domain([1, 10]);
      return pp.copy = function() {
        return II(pp, xI()).base(pp.base())
      }, Xi.b.apply(pp, arguments)
    }

    function LI() {
      var pp = Dc(oI());
      return pp.copy = function() {
        return II(pp, LI()).constant(pp.constant())
      }, Xi.b.apply(pp, arguments)
    }

    function YI() {
      var pp = wc(oI());
      return pp.copy = function() {
        return II(pp, YI()).exponent(pp.exponent())
      }, Xi.b.apply(pp, arguments)
    }

    function DI() {
      return YI.apply(null, arguments).exponent(.5)
    }

    function AI() {
      var pp = [],
        ip = ji;

      function cp(cp) {
        if (null != cp && !isNaN(cp = +cp)) return ip((Hp(pp, cp, 1) - 1) / (pp.length - 1))
      }
      return cp.domain = function(ip) {
        if (!arguments.length) return pp.slice();
        pp = [];
        for (let cp of ip) null == cp || isNaN(cp = +cp) || pp.push(cp);
        return pp.sort(Pp), cp
      }, cp.interpolator = function(pp) {
        return arguments.length ? (ip = pp, cp) : ip
      }, cp.range = function() {
        return pp.map(((cp, Op) => ip(Op / (pp.length - 1))))
      }, cp.quantiles = function(ip) {
        return Array.from({
          length: ip + 1
        }, ((cp, Op) => qc(pp, Op / ip)))
      }, cp.copy = function() {
        return AI(ip).domain(pp)
      }, Xi.b.apply(cp, arguments)
    }

    function PI() {
      var pp, ip, cp, Op, op, Ip, Sp, xp = 0,
        Lp = .5,
        Yp = 1,
        Dp = 1,
        Ap = ji,
        Pp = !1;

      function Wp(pp) {
        return isNaN(pp = +pp) ? Sp : (pp = .5 + ((pp = +Ip(pp)) - ip) * (Dp * pp < Dp * ip ? Op : op), Ap(Pp ? Math.max(0, Math.min(1, pp)) : pp))
      }

      function yp(pp) {
        return function(ip) {
          var cp, Op, op;
          return arguments.length ? ([cp, Op, op] = ip, Ap = function(pp, ip) {
            void 0 === ip && (ip = pp, pp = Hi);
            for (var cp = 0, Op = ip.length - 1, op = ip[0], Ip = new Array(Op < 0 ? 0 : Op); cp < Op;) Ip[cp] = pp(op, op = ip[++cp]);
            return function(pp) {
              var ip = Math.max(0, Math.min(Op - 1, Math.floor(pp *= Op)));
              return Ip[ip](pp - ip)
            }
          }(pp, [cp, Op, op]), Wp) : [Ap(0), Ap(.5), Ap(1)]
        }
      }
      return Wp.domain = function(Sp) {
          return arguments.length ? ([xp, Lp, Yp] = Sp, pp = Ip(xp = +xp), ip = Ip(Lp = +Lp), cp = Ip(Yp = +Yp), Op = pp === ip ? 0 : .5 / (ip - pp), op = ip === cp ? 0 : .5 / (cp - ip), Dp = ip < pp ? -1 : 1, Wp) : [xp, Lp, Yp]
        }, Wp.clamp = function(pp) {
          return arguments.length ? (Pp = !!pp, Wp) : Pp
        }, Wp.interpolator = function(pp) {
          return arguments.length ? (Ap = pp, Wp) : Ap
        }, Wp.range = yp(Hi), Wp.rangeRound = yp(di), Wp.unknown = function(pp) {
          return arguments.length ? (Sp = pp, Wp) : Sp
        },
        function(Sp) {
          return Ip = Sp, pp = Sp(xp), ip = Sp(Lp), cp = Sp(Yp), Op = pp === ip ? 0 : .5 / (ip - pp), op = ip === cp ? 0 : .5 / (cp - ip), Dp = ip < pp ? -1 : 1, Wp
        }
    }

    function WI() {
      var pp = zi(PI()(ji));
      return pp.copy = function() {
        return II(pp, WI())
      }, Xi.b.apply(pp, arguments)
    }

    function yI() {
      var pp = Sc(PI()).domain([.1, 1, 10]);
      return pp.copy = function() {
        return II(pp, yI()).base(pp.base())
      }, Xi.b.apply(pp, arguments)
    }

    function UI() {
      var pp = Dc(PI());
      return pp.copy = function() {
        return II(pp, UI()).constant(pp.constant())
      }, Xi.b.apply(pp, arguments)
    }

    function wI() {
      var pp = wc(PI());
      return pp.copy = function() {
        return II(pp, wI()).exponent(pp.exponent())
      }, Xi.b.apply(pp, arguments)
    }

    function vI() {
      return wI.apply(null, arguments).exponent(.5)
    }

    function tI(pp, ip) {
      if ((op = pp.length) > 1)
        for (var cp, Op, op, Ip = 1, Sp = pp[ip[0]], xp = Sp.length; Ip < op; ++Ip)
          for (Op = Sp, Sp = pp[ip[Ip]], cp = 0; cp < xp; ++cp) Sp[cp][1] += Sp[cp][0] = isNaN(Op[cp][1]) ? Op[cp][0] : Op[cp][1]
    }! function(pp) {
      qO = function(pp) {
        var ip = pp.dateTime,
          cp = pp.date,
          Op = pp.time,
          op = pp.periods,
          Ip = pp.days,
          Sp = pp.shortDays,
          xp = pp.months,
          Lp = pp.shortMonths,
          Yp = NO(op),
          Dp = TO(op),
          Ap = NO(Ip),
          Pp = TO(Ip),
          Wp = NO(Sp),
          yp = TO(Sp),
          Up = NO(xp),
          wp = TO(xp),
          vp = NO(Lp),
          tp = TO(Lp),
          Hp = {
            a: function(pp) {
              return Sp[pp.getDay()]
            },
            A: function(pp) {
              return Ip[pp.getDay()]
            },
            b: function(pp) {
              return Lp[pp.getMonth()]
            },
            B: function(pp) {
              return xp[pp.getMonth()]
            },
            c: null,
            d: So,
            e: So,
            f: Ao,
            g: jo,
            G: mo,
            H: xo,
            I: Lo,
            j: Yo,
            L: Do,
            m: Po,
            M: Wo,
            p: function(pp) {
              return op[+(pp.getHours() >= 12)]
            },
            q: function(pp) {
              return 1 + ~~(pp.getMonth() / 3)
            },
            Q: so,
            s: Ko,
            S: yo,
            u: Uo,
            U: wo,
            V: to,
            w: Ho,
            W: eo,
            x: null,
            X: null,
            y: uo,
            Y: ko,
            Z: Ro,
            "%": zo
          },
          dp = {
            a: function(pp) {
              return Sp[pp.getUTCDay()]
            },
            A: function(pp) {
              return Ip[pp.getUTCDay()]
            },
            b: function(pp) {
              return Lp[pp.getUTCMonth()]
            },
            B: function(pp) {
              return xp[pp.getUTCMonth()]
            },
            c: null,
            d: qo,
            e: qo,
            f: Qo,
            g: go,
            G: ro,
            H: Mo,
            I: Co,
            j: Eo,
            L: Xo,
            m: Jo,
            M: Bo,
            p: function(pp) {
              return op[+(pp.getUTCHours() >= 12)]
            },
            q: function(pp) {
              return 1 + ~~(pp.getUTCMonth() / 3)
            },
            Q: so,
            s: Ko,
            S: No,
            u: To,
            U: fo,
            V: ho,
            w: ao,
            W: no,
            x: null,
            X: null,
            y: Fo,
            Y: Go,
            Z: Zo,
            "%": zo
          },
          ep = {
            a: function(pp, ip, cp) {
              var Op = Wp.exec(ip.slice(cp));
              return Op ? (pp.w = yp.get(Op[0].toLowerCase()), cp + Op[0].length) : -1
            },
            A: function(pp, ip, cp) {
              var Op = Ap.exec(ip.slice(cp));
              return Op ? (pp.w = Pp.get(Op[0].toLowerCase()), cp + Op[0].length) : -1
            },
            b: function(pp, ip, cp) {
              var Op = vp.exec(ip.slice(cp));
              return Op ? (pp.m = tp.get(Op[0].toLowerCase()), cp + Op[0].length) : -1
            },
            B: function(pp, ip, cp) {
              var Op = Up.exec(ip.slice(cp));
              return Op ? (pp.m = wp.get(Op[0].toLowerCase()), cp + Op[0].length) : -1
            },
            c: function(pp, cp, Op) {
              return mp(pp, ip, cp, Op)
            },
            d: zO,
            e: zO,
            f: co,
            g: gO,
            G: FO,
            H: KO,
            I: KO,
            j: sO,
            L: io,
            m: ZO,
            M: VO,
            p: function(pp, ip, cp) {
              var Op = Yp.exec(ip.slice(cp));
              return Op ? (pp.p = Dp.get(Op[0].toLowerCase()), cp + Op[0].length) : -1
            },
            q: rO,
            Q: oo,
            s: Io,
            S: po,
            u: bO,
            U: hO,
            V: aO,
            w: fO,
            W: nO,
            x: function(pp, ip, Op) {
              return mp(pp, cp, ip, Op)
            },
            X: function(pp, ip, cp) {
              return mp(pp, Op, ip, cp)
            },
            y: gO,
            Y: FO,
            Z: GO,
            "%": Oo
          };

        function jp(pp, ip) {
          return function(cp) {
            var Op, op, Ip, Sp = [],
              xp = -1,
              Lp = 0,
              Yp = pp.length;
            for (cp instanceof Date || (cp = new Date(+cp)); ++xp < Yp;) 37 === pp.charCodeAt(xp) && (Sp.push(pp.slice(Lp, xp)), null != (op = EO[Op = pp.charAt(++xp)]) ? Op = pp.charAt(++xp) : op = "e" === Op ? " " : "0", (Ip = ip[Op]) && (Op = Ip(cp, op)), Sp.push(Op), Lp = xp + 1);
            return Sp.push(pp.slice(Lp, xp)), Sp.join("")
          }
        }

        function kp(pp, ip) {
          return function(cp) {
            var Op, op, Ip = RO(1900, void 0, 1);
            if (mp(Ip, pp, cp += "", 0) != cp.length) return null;
            if ("Q" in Ip) return new Date(Ip.Q);
            if ("s" in Ip) return new Date(1e3 * Ip.s + ("L" in Ip ? Ip.L : 0));
            if (ip && !("Z" in Ip) && (Ip.Z = 0), "p" in Ip && (Ip.H = Ip.H % 12 + 12 * Ip.p), void 0 === Ip.m && (Ip.m = "q" in Ip ? Ip.q : 0), "V" in Ip) {
              if (Ip.V < 1 || Ip.V > 53) return null;
              "w" in Ip || (Ip.w = 1), "Z" in Ip ? (op = (Op = mO(RO(Ip.y, 0, 1))).getUTCDay(), Op = op > 4 || 0 === op ? YO.ceil(Op) : YO(Op), Op = sc.offset(Op, 7 * (Ip.V - 1)), Ip.y = Op.getUTCFullYear(), Ip.m = Op.getUTCMonth(), Ip.d = Op.getUTCDate() + (Ip.w + 6) % 7) : (op = (Op = kO(RO(Ip.y, 0, 1))).getDay(), Op = op > 4 || 0 === op ? iO.ceil(Op) : iO(Op), Op = zc.offset(Op, 7 * (Ip.V - 1)), Ip.y = Op.getFullYear(), Ip.m = Op.getMonth(), Ip.d = Op.getDate() + (Ip.w + 6) % 7)
            } else("W" in Ip || "U" in Ip) && ("w" in Ip || (Ip.w = "u" in Ip ? Ip.u % 7 : "W" in Ip ? 1 : 0), op = "Z" in Ip ? mO(RO(Ip.y, 0, 1)).getUTCDay() : kO(RO(Ip.y, 0, 1)).getDay(), Ip.m = 0, Ip.d = "W" in Ip ? (Ip.w + 6) % 7 + 7 * Ip.W - (op + 5) % 7 : Ip.w + 7 * Ip.U - (op + 6) % 7);
            return "Z" in Ip ? (Ip.H += Ip.Z / 100 | 0, Ip.M += Ip.Z % 100, mO(Ip)) : kO(Ip)
          }
        }

        function mp(pp, ip, cp, Op) {
          for (var op, Ip, Sp = 0, xp = ip.length, Lp = cp.length; Sp < xp;) {
            if (Op >= Lp) return -1;
            if (37 === (op = ip.charCodeAt(Sp++))) {
              if (op = ip.charAt(Sp++), !(Ip = ep[op in EO ? ip.charAt(Sp++) : op]) || (Op = Ip(pp, cp, Op)) < 0) return -1
            } else if (op != cp.charCodeAt(Op++)) return -1
          }
          return Op
        }
        return Hp.x = jp(cp, Hp), Hp.X = jp(Op, Hp), Hp.c = jp(ip, Hp), dp.x = jp(cp, dp), dp.X = jp(Op, dp), dp.c = jp(ip, dp), {
          format: function(pp) {
            var ip = jp(pp += "", Hp);
            return ip.toString = function() {
              return pp
            }, ip
          },
          parse: function(pp) {
            var ip = kp(pp += "", !1);
            return ip.toString = function() {
              return pp
            }, ip
          },
          utcFormat: function(pp) {
            var ip = jp(pp += "", dp);
            return ip.toString = function() {
              return pp
            }, ip
          },
          utcParse: function(pp) {
            var ip = kp(pp += "", !0);
            return ip.toString = function() {
              return pp
            }, ip
          }
        }
      }(pp), MO = qO.format, qO.parse, CO = qO.utcFormat, qO.utcParse
    }({
      dateTime: "%x, %X",
      date: "%-m/%-d/%Y",
      time: "%-I:%M:%S %p",
      periods: ["AM", "PM"],
      days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    });
    var HI = cp(6344),
      dI = cp(6229);

    function eI(pp) {
      for (var ip = pp.length, cp = new Array(ip); --ip >= 0;) cp[ip] = ip;
      return cp
    }

    function uI(pp, ip) {
      return pp[ip]
    }

    function jI(pp) {
      const ip = [];
      return ip.key = pp, ip
    }
    var kI = cp(6297),
      mI = cp.n(kI),
      RI = cp(6305),
      qI = cp.n(RI),
      MI = cp(5575),
      CI = cp.n(MI),
      EI = cp(5405),
      XI = cp.n(EI),
      lI = cp(5301),
      QI = cp.n(lI),
      JI = cp(5326),
      BI = cp.n(JI),
      NI = cp(6312),
      TI = cp.n(NI),
      fI = cp(5319),
      bI = cp.n(fI),
      hI = cp(6192),
      aI = cp.n(hI),
      nI = cp(6322),
      FI = cp.n(nI),
      gI = cp(5692),
      GI = cp.n(gI),
      rI = cp(6328),
      ZI = cp.n(rI);

    function zI(pp) {
      return function(pp) {
        if (Array.isArray(pp)) return sI(pp)
      }(pp) || function(pp) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(pp)) return Array.from(pp)
      }(pp) || function(pp, ip) {
        if (!pp) return;
        if ("string" === typeof pp) return sI(pp, ip);
        var cp = Object.prototype.toString.call(pp).slice(8, -1);
        "Object" === cp && pp.constructor && (cp = pp.constructor.name);
        if ("Map" === cp || "Set" === cp) return Array.from(pp);
        if ("Arguments" === cp || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cp)) return sI(pp, ip)
      }(pp) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function sI(pp, ip) {
      (null == ip || ip > pp.length) && (ip = pp.length);
      for (var cp = 0, Op = new Array(ip); cp < ip; cp++) Op[cp] = pp[cp];
      return Op
    }
    var KI = function(pp) {
        return pp
      },
      VI = {
        "@@functional/placeholder": !0
      },
      pS = function(pp) {
        return pp === VI
      },
      iS = function(pp) {
        return function ip() {
          return 0 === arguments.length || 1 === arguments.length && pS(arguments.length <= 0 ? void 0 : arguments[0]) ? ip : pp.apply(void 0, arguments)
        }
      },
      cS = function pp(ip, cp) {
        return 1 === ip ? cp : iS((function() {
          for (var Op = arguments.length, op = new Array(Op), Ip = 0; Ip < Op; Ip++) op[Ip] = arguments[Ip];
          var Sp = op.filter((function(pp) {
            return pp !== VI
          })).length;
          return Sp >= ip ? cp.apply(void 0, op) : pp(ip - Sp, iS((function() {
            for (var pp = arguments.length, ip = new Array(pp), Op = 0; Op < pp; Op++) ip[Op] = arguments[Op];
            var Ip = op.map((function(pp) {
              return pS(pp) ? ip.shift() : pp
            }));
            return cp.apply(void 0, zI(Ip).concat(ip))
          })))
        }))
      },
      OS = function(pp) {
        return cS(pp.length, pp)
      },
      oS = function(pp, ip) {
        for (var cp = [], Op = pp; Op < ip; ++Op) cp[Op - pp] = Op;
        return cp
      },
      IS = OS((function(pp, ip) {
        return Array.isArray(ip) ? ip.map(pp) : Object.keys(ip).map((function(pp) {
          return ip[pp]
        })).map(pp)
      })),
      SS = function() {
        for (var pp = arguments.length, ip = new Array(pp), cp = 0; cp < pp; cp++) ip[cp] = arguments[cp];
        if (!ip.length) return KI;
        var Op = ip.reverse(),
          op = Op[0],
          Ip = Op.slice(1);
        return function() {
          return Ip.reduce((function(pp, ip) {
            return ip(pp)
          }), op.apply(void 0, arguments))
        }
      },
      xS = function(pp) {
        return Array.isArray(pp) ? pp.reverse() : pp.split("").reverse.join("")
      },
      LS = function(pp) {
        var ip = null,
          cp = null;
        return function() {
          for (var Op = arguments.length, op = new Array(Op), Ip = 0; Ip < Op; Ip++) op[Ip] = arguments[Ip];
          return ip && op.every((function(pp, cp) {
            return pp === ip[cp]
          })) ? cp : (ip = op, cp = pp.apply(void 0, op))
        }
      };
    const YS = {
      rangeStep: function(pp, ip, cp) {
        for (var Op = new(ZI())(pp), op = 0, Ip = []; Op.lt(ip) && op < 1e5;) Ip.push(Op.toNumber()), Op = Op.add(cp), op++;
        return Ip
      },
      getDigitCount: function(pp) {
        return 0 === pp ? 1 : Math.floor(new(ZI())(pp).abs().log(10).toNumber()) + 1
      },
      interpolateNumber: OS((function(pp, ip, cp) {
        var Op = +pp;
        return Op + cp * (+ip - Op)
      })),
      uninterpolateNumber: OS((function(pp, ip, cp) {
        var Op = ip - +pp;
        return (cp - pp) / (Op = Op || 1 / 0)
      })),
      uninterpolateTruncation: OS((function(pp, ip, cp) {
        var Op = ip - +pp;
        return Op = Op || 1 / 0, Math.max(0, Math.min(1, (cp - pp) / Op))
      }))
    };

    function DS(pp) {
      return function(pp) {
        if (Array.isArray(pp)) return WS(pp)
      }(pp) || function(pp) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(pp)) return Array.from(pp)
      }(pp) || PS(pp) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function AS(pp, ip) {
      return function(pp) {
        if (Array.isArray(pp)) return pp
      }(pp) || function(pp, ip) {
        if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(pp))) return;
        var cp = [],
          Op = !0,
          op = !1,
          Ip = void 0;
        try {
          for (var Sp, xp = pp[Symbol.iterator](); !(Op = (Sp = xp.next()).done) && (cp.push(Sp.value), !ip || cp.length !== ip); Op = !0);
        } catch (Lp) {
          op = !0, Ip = Lp
        } finally {
          try {
            Op || null == xp.return || xp.return()
          } finally {
            if (op) throw Ip
          }
        }
        return cp
      }(pp, ip) || PS(pp, ip) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function PS(pp, ip) {
      if (pp) {
        if ("string" === typeof pp) return WS(pp, ip);
        var cp = Object.prototype.toString.call(pp).slice(8, -1);
        return "Object" === cp && pp.constructor && (cp = pp.constructor.name), "Map" === cp || "Set" === cp ? Array.from(pp) : "Arguments" === cp || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cp) ? WS(pp, ip) : void 0
      }
    }

    function WS(pp, ip) {
      (null == ip || ip > pp.length) && (ip = pp.length);
      for (var cp = 0, Op = new Array(ip); cp < ip; cp++) Op[cp] = pp[cp];
      return Op
    }

    function yS(pp) {
      var ip = AS(pp, 2),
        cp = ip[0],
        Op = ip[1],
        op = cp,
        Ip = Op;
      return cp > Op && (op = Op, Ip = cp), [op, Ip]
    }

    function US(pp, ip, cp) {
      if (pp.lte(0)) return new(ZI())(0);
      var Op = YS.getDigitCount(pp.toNumber()),
        op = new(ZI())(10).pow(Op),
        Ip = pp.div(op),
        Sp = 1 !== Op ? .05 : .1,
        xp = new(ZI())(Math.ceil(Ip.div(Sp).toNumber())).add(cp).mul(Sp).mul(op);
      return ip ? xp : new(ZI())(Math.ceil(xp))
    }

    function wS(pp, ip, cp) {
      var Op = 1,
        op = new(ZI())(pp);
      if (!op.isint() && cp) {
        var Ip = Math.abs(pp);
        Ip < 1 ? (Op = new(ZI())(10).pow(YS.getDigitCount(pp) - 1), op = new(ZI())(Math.floor(op.div(Op).toNumber())).mul(Op)) : Ip > 1 && (op = new(ZI())(Math.floor(pp)))
      } else 0 === pp ? op = new(ZI())(Math.floor((ip - 1) / 2)) : cp || (op = new(ZI())(Math.floor(pp)));
      var Sp = Math.floor((ip - 1) / 2);
      return SS(IS((function(pp) {
        return op.add(new(ZI())(pp - Sp).mul(Op)).toNumber()
      })), oS)(0, ip)
    }

    function vS(pp, ip, cp, Op) {
      var op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      if (!Number.isFinite((ip - pp) / (cp - 1))) return {
        step: new(ZI())(0),
        tickMin: new(ZI())(0),
        tickMax: new(ZI())(0)
      };
      var Ip, Sp = US(new(ZI())(ip).sub(pp).div(cp - 1), Op, op);
      Ip = pp <= 0 && ip >= 0 ? new(ZI())(0) : (Ip = new(ZI())(pp).add(ip).div(2)).sub(new(ZI())(Ip).mod(Sp));
      var xp = Math.ceil(Ip.sub(pp).div(Sp).toNumber()),
        Lp = Math.ceil(new(ZI())(ip).sub(Ip).div(Sp).toNumber()),
        Yp = xp + Lp + 1;
      return Yp > cp ? vS(pp, ip, cp, Op, op + 1) : (Yp < cp && (Lp = ip > 0 ? Lp + (cp - Yp) : Lp, xp = ip > 0 ? xp : xp + (cp - Yp)), {
        step: Sp,
        tickMin: Ip.sub(new(ZI())(xp).mul(Sp)),
        tickMax: Ip.add(new(ZI())(Lp).mul(Sp))
      })
    }
    var tS = LS((function(pp) {
        var ip = AS(pp, 2),
          cp = ip[0],
          Op = ip[1],
          op = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
          Ip = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Sp = Math.max(op, 2),
          xp = AS(yS([cp, Op]), 2),
          Lp = xp[0],
          Yp = xp[1];
        if (Lp === -1 / 0 || Yp === 1 / 0) {
          var Dp = Yp === 1 / 0 ? [Lp].concat(DS(oS(0, op - 1).map((function() {
            return 1 / 0
          })))) : [].concat(DS(oS(0, op - 1).map((function() {
            return -1 / 0
          }))), [Yp]);
          return cp > Op ? xS(Dp) : Dp
        }
        if (Lp === Yp) return wS(Lp, op, Ip);
        var Ap = vS(Lp, Yp, Sp, Ip),
          Pp = Ap.step,
          Wp = Ap.tickMin,
          yp = Ap.tickMax,
          Up = YS.rangeStep(Wp, yp.add(new(ZI())(.1).mul(Pp)), Pp);
        return cp > Op ? xS(Up) : Up
      })),
      HS = (LS((function(pp) {
        var ip = AS(pp, 2),
          cp = ip[0],
          Op = ip[1],
          op = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
          Ip = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Sp = Math.max(op, 2),
          xp = AS(yS([cp, Op]), 2),
          Lp = xp[0],
          Yp = xp[1];
        if (Lp === -1 / 0 || Yp === 1 / 0) return [cp, Op];
        if (Lp === Yp) return wS(Lp, op, Ip);
        var Dp = US(new(ZI())(Yp).sub(Lp).div(Sp - 1), Ip, 0),
          Ap = SS(IS((function(pp) {
            return new(ZI())(Lp).add(new(ZI())(pp).mul(Dp)).toNumber()
          })), oS)(0, Sp).filter((function(pp) {
            return pp >= Lp && pp <= Yp
          }));
        return cp > Op ? xS(Ap) : Ap
      })), LS((function(pp, ip) {
        var cp = AS(pp, 2),
          Op = cp[0],
          op = cp[1],
          Ip = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Sp = AS(yS([Op, op]), 2),
          xp = Sp[0],
          Lp = Sp[1];
        if (xp === -1 / 0 || Lp === 1 / 0) return [Op, op];
        if (xp === Lp) return [xp];
        var Yp = Math.max(ip, 2),
          Dp = US(new(ZI())(Lp).sub(xp).div(Yp - 1), Ip, 0),
          Ap = [].concat(DS(YS.rangeStep(new(ZI())(xp), new(ZI())(Lp).sub(new(ZI())(.99).mul(Dp)), Dp)), [Lp]);
        return Op > op ? xS(Ap) : Ap
      }))),
      dS = cp(6332),
      eS = cp(5299),
      uS = cp(5588),
      jS = cp(6336);

    function kS(pp) {
      return kS = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
        return typeof pp
      } : function(pp) {
        return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
      }, kS(pp)
    }

    function mS(pp) {
      return function(pp) {
        if (Array.isArray(pp)) return RS(pp)
      }(pp) || function(pp) {
        if ("undefined" !== typeof Symbol && null != pp[Symbol.iterator] || null != pp["@@iterator"]) return Array.from(pp)
      }(pp) || function(pp, ip) {
        if (!pp) return;
        if ("string" === typeof pp) return RS(pp, ip);
        var cp = Object.prototype.toString.call(pp).slice(8, -1);
        "Object" === cp && pp.constructor && (cp = pp.constructor.name);
        if ("Map" === cp || "Set" === cp) return Array.from(pp);
        if ("Arguments" === cp || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cp)) return RS(pp, ip)
      }(pp) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function RS(pp, ip) {
      (null == ip || ip > pp.length) && (ip = pp.length);
      for (var cp = 0, Op = new Array(ip); cp < ip; cp++) Op[cp] = pp[cp];
      return Op
    }

    function qS(pp, ip) {
      var cp = Object.keys(pp);
      if (Object.getOwnPropertySymbols) {
        var Op = Object.getOwnPropertySymbols(pp);
        ip && (Op = Op.filter((function(ip) {
          return Object.getOwnPropertyDescriptor(pp, ip).enumerable
        }))), cp.push.apply(cp, Op)
      }
      return cp
    }

    function MS(pp) {
      for (var ip = 1; ip < arguments.length; ip++) {
        var cp = null != arguments[ip] ? arguments[ip] : {};
        ip % 2 ? qS(Object(cp), !0).forEach((function(ip) {
          CS(pp, ip, cp[ip])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : qS(Object(cp)).forEach((function(ip) {
          Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
        }))
      }
      return pp
    }

    function CS(pp, ip, cp) {
      return (ip = function(pp) {
        var ip = function(pp, ip) {
          if ("object" != kS(pp) || !pp) return pp;
          var cp = pp[Symbol.toPrimitive];
          if (void 0 !== cp) {
            var Op = cp.call(pp, ip || "default");
            if ("object" != kS(Op)) return Op;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === ip ? String : Number)(pp)
        }(pp, "string");
        return "symbol" == kS(ip) ? ip : ip + ""
      }(ip)) in pp ? Object.defineProperty(pp, ip, {
        value: cp,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : pp[ip] = cp, pp
    }

    function ES(pp, ip, cp) {
      return CI()(pp) || CI()(ip) ? cp : (0, eS.B)(ip) ? BI()(pp, ip, cp) : XI()(ip) ? ip(pp) : cp
    }

    function XS(pp, ip, cp, Op) {
      var op = TI()(pp, (function(pp) {
        return ES(pp, ip)
      }));
      if ("number" === cp) {
        var Ip = op.filter((function(pp) {
          return (0, eS.D)(pp) || parseFloat(pp)
        }));
        return Ip.length ? [qI()(Ip), mI()(Ip)] : [1 / 0, -1 / 0]
      }
      return (Op ? op.filter((function(pp) {
        return !CI()(pp)
      })) : op).map((function(pp) {
        return (0, eS.B)(pp) || pp instanceof Date ? pp : ""
      }))
    }
    var lS = function(pp) {
        var ip, cp = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          Op = arguments.length > 2 ? arguments[2] : void 0,
          op = arguments.length > 3 ? arguments[3] : void 0,
          Ip = -1,
          Sp = null !== (ip = null === cp || void 0 === cp ? void 0 : cp.length) && void 0 !== ip ? ip : 0;
        if (Sp <= 1) return 0;
        if (op && "angleAxis" === op.axisType && Math.abs(Math.abs(op.range[1] - op.range[0]) - 360) <= 1e-6)
          for (var xp = op.range, Lp = 0; Lp < Sp; Lp++) {
            var Yp = Lp > 0 ? Op[Lp - 1].coordinate : Op[Sp - 1].coordinate,
              Dp = Op[Lp].coordinate,
              Ap = Lp >= Sp - 1 ? Op[0].coordinate : Op[Lp + 1].coordinate,
              Pp = void 0;
            if ((0, eS.I)(Dp - Yp) !== (0, eS.I)(Ap - Dp)) {
              var Wp = [];
              if ((0, eS.I)(Ap - Dp) === (0, eS.I)(xp[1] - xp[0])) {
                Pp = Ap;
                var yp = Dp + xp[1] - xp[0];
                Wp[0] = Math.min(yp, (yp + Yp) / 2), Wp[1] = Math.max(yp, (yp + Yp) / 2)
              } else {
                Pp = Yp;
                var Up = Ap + xp[1] - xp[0];
                Wp[0] = Math.min(Dp, (Up + Dp) / 2), Wp[1] = Math.max(Dp, (Up + Dp) / 2)
              }
              var wp = [Math.min(Dp, (Pp + Dp) / 2), Math.max(Dp, (Pp + Dp) / 2)];
              if (pp > wp[0] && pp <= wp[1] || pp >= Wp[0] && pp <= Wp[1]) {
                Ip = Op[Lp].index;
                break
              }
            } else {
              var vp = Math.min(Yp, Ap),
                tp = Math.max(Yp, Ap);
              if (pp > (vp + Dp) / 2 && pp <= (tp + Dp) / 2) {
                Ip = Op[Lp].index;
                break
              }
            }
          } else
            for (var Hp = 0; Hp < Sp; Hp++)
              if (0 === Hp && pp <= (cp[Hp].coordinate + cp[Hp + 1].coordinate) / 2 || Hp > 0 && Hp < Sp - 1 && pp > (cp[Hp].coordinate + cp[Hp - 1].coordinate) / 2 && pp <= (cp[Hp].coordinate + cp[Hp + 1].coordinate) / 2 || Hp === Sp - 1 && pp > (cp[Hp].coordinate + cp[Hp - 1].coordinate) / 2) {
                Ip = cp[Hp].index;
                break
              } return Ip
      },
      QS = function(pp) {
        var ip, cp, Op = pp.type.displayName,
          op = null !== (ip = pp.type) && void 0 !== ip && ip.defaultProps ? MS(MS({}, pp.type.defaultProps), pp.props) : pp.props,
          Ip = op.stroke,
          Sp = op.fill;
        switch (Op) {
          case "Line":
            cp = Ip;
            break;
          case "Area":
          case "Radar":
            cp = Ip && "none" !== Ip ? Ip : Sp;
            break;
          default:
            cp = Sp
        }
        return cp
      },
      JS = function(pp) {
        var ip = pp.barSize,
          cp = pp.totalSize,
          Op = pp.stackGroups,
          op = void 0 === Op ? {} : Op;
        if (!op) return {};
        for (var Ip = {}, Sp = Object.keys(op), xp = 0, Lp = Sp.length; xp < Lp; xp++)
          for (var Yp = op[Sp[xp]].stackGroups, Dp = Object.keys(Yp), Ap = 0, Pp = Dp.length; Ap < Pp; Ap++) {
            var Wp = Yp[Dp[Ap]],
              yp = Wp.items,
              Up = Wp.cateAxisId,
              wp = yp.filter((function(pp) {
                return (0, uS.k)(pp.type).indexOf("Bar") >= 0
              }));
            if (wp && wp.length) {
              var vp = wp[0].type.defaultProps,
                tp = void 0 !== vp ? MS(MS({}, vp), wp[0].props) : wp[0].props,
                Hp = tp.barSize,
                dp = tp[Up];
              Ip[dp] || (Ip[dp] = []);
              var ep = CI()(Hp) ? ip : Hp;
              Ip[dp].push({
                item: wp[0],
                stackList: wp.slice(1),
                barSize: CI()(ep) ? void 0 : (0, eS.r)(ep, cp, 0)
              })
            }
          }
        return Ip
      },
      BS = function(pp) {
        var ip = pp.barGap,
          cp = pp.barCategoryGap,
          Op = pp.bandSize,
          op = pp.sizeList,
          Ip = void 0 === op ? [] : op,
          Sp = pp.maxBarSize,
          xp = Ip.length;
        if (xp < 1) return null;
        var Lp, Yp = (0, eS.r)(ip, Op, 0, !0),
          Dp = [];
        if (Ip[0].barSize === +Ip[0].barSize) {
          var Ap = !1,
            Pp = Op / xp,
            Wp = Ip.reduce((function(pp, ip) {
              return pp + ip.barSize || 0
            }), 0);
          (Wp += (xp - 1) * Yp) >= Op && (Wp -= (xp - 1) * Yp, Yp = 0), Wp >= Op && Pp > 0 && (Ap = !0, Wp = xp * (Pp *= .9));
          var yp = {
            offset: ((Op - Wp) / 2 | 0) - Yp,
            size: 0
          };
          Lp = Ip.reduce((function(pp, ip) {
            var cp = {
                item: ip.item,
                position: {
                  offset: yp.offset + yp.size + Yp,
                  size: Ap ? Pp : ip.barSize
                }
              },
              Op = [].concat(mS(pp), [cp]);
            return yp = Op[Op.length - 1].position, ip.stackList && ip.stackList.length && ip.stackList.forEach((function(pp) {
              Op.push({
                item: pp,
                position: yp
              })
            })), Op
          }), Dp)
        } else {
          var Up = (0, eS.r)(cp, Op, 0, !0);
          Op - 2 * Up - (xp - 1) * Yp <= 0 && (Yp = 0);
          var wp = (Op - 2 * Up - (xp - 1) * Yp) / xp;
          wp > 1 && (wp >>= 0);
          var vp = Sp === +Sp ? Math.min(wp, Sp) : wp;
          Lp = Ip.reduce((function(pp, ip, cp) {
            var Op = [].concat(mS(pp), [{
              item: ip.item,
              position: {
                offset: Up + (wp + Yp) * cp + (wp - vp) / 2,
                size: vp
              }
            }]);
            return ip.stackList && ip.stackList.length && ip.stackList.forEach((function(pp) {
              Op.push({
                item: pp,
                position: Op[Op.length - 1].position
              })
            })), Op
          }), Dp)
        }
        return Lp
      },
      NS = function(pp, ip, cp, Op) {
        var op = cp.children,
          Ip = cp.width,
          Sp = cp.margin,
          xp = Ip - (Sp.left || 0) - (Sp.right || 0),
          Lp = (0, jS.c)({
            children: op,
            legendWidth: xp
          });
        if (Lp) {
          var Yp = Op || {},
            Dp = Yp.width,
            Ap = Yp.height,
            Pp = Lp.align,
            Wp = Lp.verticalAlign,
            yp = Lp.layout;
          if (("vertical" === yp || "horizontal" === yp && "middle" === Wp) && "center" !== Pp && (0, eS.D)(pp[Pp])) return MS(MS({}, pp), {}, CS({}, Pp, pp[Pp] + (Dp || 0)));
          if (("horizontal" === yp || "vertical" === yp && "center" === Pp) && "middle" !== Wp && (0, eS.D)(pp[Wp])) return MS(MS({}, pp), {}, CS({}, Wp, pp[Wp] + (Ap || 0)))
        }
        return pp
      },
      TS = function(pp, ip, cp, Op, op) {
        var Ip = ip.props.children,
          Sp = (0, uS.h)(Ip, dS.b).filter((function(pp) {
            return function(pp, ip, cp) {
              return !!CI()(ip) || ("horizontal" === pp ? "yAxis" === ip : "vertical" === pp || "x" === cp ? "xAxis" === ip : "y" !== cp || "yAxis" === ip)
            }(Op, op, pp.props.direction)
          }));
        if (Sp && Sp.length) {
          var xp = Sp.map((function(pp) {
            return pp.props.dataKey
          }));
          return pp.reduce((function(pp, ip) {
            var Op = ES(ip, cp);
            if (CI()(Op)) return pp;
            var op = Array.isArray(Op) ? [qI()(Op), mI()(Op)] : [Op, Op],
              Ip = xp.reduce((function(pp, cp) {
                var Op = ES(ip, cp, 0),
                  Ip = op[0] - Math.abs(Array.isArray(Op) ? Op[0] : Op),
                  Sp = op[1] + Math.abs(Array.isArray(Op) ? Op[1] : Op);
                return [Math.min(Ip, pp[0]), Math.max(Sp, pp[1])]
              }), [1 / 0, -1 / 0]);
            return [Math.min(Ip[0], pp[0]), Math.max(Ip[1], pp[1])]
          }), [1 / 0, -1 / 0])
        }
        return null
      },
      fS = function(pp, ip, cp, Op, op) {
        var Ip = ip.map((function(ip) {
          return TS(pp, ip, cp, op, Op)
        })).filter((function(pp) {
          return !CI()(pp)
        }));
        return Ip && Ip.length ? Ip.reduce((function(pp, ip) {
          return [Math.min(pp[0], ip[0]), Math.max(pp[1], ip[1])]
        }), [1 / 0, -1 / 0]) : null
      },
      bS = function(pp, ip, cp, Op, op) {
        var Ip = ip.map((function(ip) {
          var Ip = ip.props.dataKey;
          return "number" === cp && Ip && TS(pp, ip, Ip, Op) || XS(pp, Ip, cp, op)
        }));
        if ("number" === cp) return Ip.reduce((function(pp, ip) {
          return [Math.min(pp[0], ip[0]), Math.max(pp[1], ip[1])]
        }), [1 / 0, -1 / 0]);
        var Sp = {};
        return Ip.reduce((function(pp, ip) {
          for (var cp = 0, Op = ip.length; cp < Op; cp++) Sp[ip[cp]] || (Sp[ip[cp]] = !0, pp.push(ip[cp]));
          return pp
        }), [])
      },
      hS = function(pp, ip) {
        return "horizontal" === pp && "xAxis" === ip || "vertical" === pp && "yAxis" === ip || "centric" === pp && "angleAxis" === ip || "radial" === pp && "radiusAxis" === ip
      },
      aS = function(pp, ip, cp, Op) {
        if (Op) return pp.map((function(pp) {
          return pp.coordinate
        }));
        var op, Ip, Sp = pp.map((function(pp) {
          return pp.coordinate === ip && (op = !0), pp.coordinate === cp && (Ip = !0), pp.coordinate
        }));
        return op || Sp.push(ip), Ip || Sp.push(cp), Sp
      },
      nS = function(pp, ip, cp) {
        if (!pp) return null;
        var Op = pp.scale,
          op = pp.duplicateDomain,
          Ip = pp.type,
          Sp = pp.range,
          xp = "scaleBand" === pp.realScaleType ? Op.bandwidth() / 2 : 2,
          Lp = (ip || cp) && "category" === Ip && Op.bandwidth ? Op.bandwidth() / xp : 0;
        return Lp = "angleAxis" === pp.axisType && (null === Sp || void 0 === Sp ? void 0 : Sp.length) >= 2 ? 2 * (0, eS.I)(Sp[0] - Sp[1]) * Lp : Lp, ip && (pp.ticks || pp.niceTicks) ? (pp.ticks || pp.niceTicks).map((function(pp) {
          var ip = op ? op.indexOf(pp) : pp;
          return {
            coordinate: Op(ip) + Lp,
            value: pp,
            offset: Lp
          }
        })).filter((function(pp) {
          return !bI()(pp.coordinate)
        })) : pp.isCategorical && pp.categoricalDomain ? pp.categoricalDomain.map((function(pp, ip) {
          return {
            coordinate: Op(pp) + Lp,
            value: pp,
            index: ip,
            offset: Lp
          }
        })) : Op.ticks && !cp ? Op.ticks(pp.tickCount).map((function(pp) {
          return {
            coordinate: Op(pp) + Lp,
            value: pp,
            offset: Lp
          }
        })) : Op.domain().map((function(pp, ip) {
          return {
            coordinate: Op(pp) + Lp,
            value: op ? op[pp] : pp,
            index: ip,
            offset: Lp
          }
        }))
      },
      FS = new WeakMap,
      gS = function(pp, ip) {
        if ("function" !== typeof ip) return pp;
        FS.has(pp) || FS.set(pp, new WeakMap);
        var cp = FS.get(pp);
        if (cp.has(ip)) return cp.get(ip);
        var Op = function() {
          pp.apply(void 0, arguments), ip.apply(void 0, arguments)
        };
        return cp.set(ip, Op), Op
      },
      GS = function(pp, ip, cp) {
        var Ip = pp.scale,
          Sp = pp.type,
          xp = pp.layout,
          Lp = pp.axisType;
        if ("auto" === Ip) return "radial" === xp && "radiusAxis" === Lp ? {
          scale: op.b(),
          realScaleType: "band"
        } : "radial" === xp && "angleAxis" === Lp ? {
          scale: si(),
          realScaleType: "linear"
        } : "category" === Sp && ip && (ip.indexOf("LineChart") >= 0 || ip.indexOf("AreaChart") >= 0 || ip.indexOf("ComposedChart") >= 0 && !cp) ? {
          scale: op.d(),
          realScaleType: "point"
        } : "category" === Sp ? {
          scale: op.b(),
          realScaleType: "band"
        } : {
          scale: si(),
          realScaleType: "linear"
        };
        if (QI()(Ip)) {
          var Yp = "scale".concat(aI()(Ip));
          return {
            scale: (Op[Yp] || op.d)(),
            realScaleType: Op[Yp] ? Yp : "point"
          }
        }
        return XI()(Ip) ? {
          scale: Ip
        } : {
          scale: op.d(),
          realScaleType: "point"
        }
      },
      rS = 1e-4,
      ZS = function(pp) {
        var ip = pp.domain();
        if (ip && !(ip.length <= 2)) {
          var cp = ip.length,
            Op = pp.range(),
            op = Math.min(Op[0], Op[1]) - rS,
            Ip = Math.max(Op[0], Op[1]) + rS,
            Sp = pp(ip[0]),
            xp = pp(ip[cp - 1]);
          (Sp < op || Sp > Ip || xp < op || xp > Ip) && pp.domain([ip[0], ip[cp - 1]])
        }
      },
      zS = function(pp, ip) {
        if (!pp) return null;
        for (var cp = 0, Op = pp.length; cp < Op; cp++)
          if (pp[cp].item === ip) return pp[cp].position;
        return null
      },
      sS = function(pp, ip) {
        if (!ip || 2 !== ip.length || !(0, eS.D)(ip[0]) || !(0, eS.D)(ip[1])) return pp;
        var cp = Math.min(ip[0], ip[1]),
          Op = Math.max(ip[0], ip[1]),
          op = [pp[0], pp[1]];
        return (!(0, eS.D)(pp[0]) || pp[0] < cp) && (op[0] = cp), (!(0, eS.D)(pp[1]) || pp[1] > Op) && (op[1] = Op), op[0] > Op && (op[0] = Op), op[1] < cp && (op[1] = cp), op
      },
      KS = {
        sign: function(pp) {
          var ip = pp.length;
          if (!(ip <= 0))
            for (var cp = 0, Op = pp[0].length; cp < Op; ++cp)
              for (var op = 0, Ip = 0, Sp = 0; Sp < ip; ++Sp) {
                var xp = bI()(pp[Sp][cp][1]) ? pp[Sp][cp][0] : pp[Sp][cp][1];
                xp >= 0 ? (pp[Sp][cp][0] = op, pp[Sp][cp][1] = op + xp, op = pp[Sp][cp][1]) : (pp[Sp][cp][0] = Ip, pp[Sp][cp][1] = Ip + xp, Ip = pp[Sp][cp][1])
              }
        },
        expand: function(pp, ip) {
          if ((Op = pp.length) > 0) {
            for (var cp, Op, op, Ip = 0, Sp = pp[0].length; Ip < Sp; ++Ip) {
              for (op = cp = 0; cp < Op; ++cp) op += pp[cp][Ip][1] || 0;
              if (op)
                for (cp = 0; cp < Op; ++cp) pp[cp][Ip][1] /= op
            }
            tI(pp, ip)
          }
        },
        none: tI,
        silhouette: function(pp, ip) {
          if ((cp = pp.length) > 0) {
            for (var cp, Op = 0, op = pp[ip[0]], Ip = op.length; Op < Ip; ++Op) {
              for (var Sp = 0, xp = 0; Sp < cp; ++Sp) xp += pp[Sp][Op][1] || 0;
              op[Op][1] += op[Op][0] = -xp / 2
            }
            tI(pp, ip)
          }
        },
        wiggle: function(pp, ip) {
          if ((op = pp.length) > 0 && (Op = (cp = pp[ip[0]]).length) > 0) {
            for (var cp, Op, op, Ip = 0, Sp = 1; Sp < Op; ++Sp) {
              for (var xp = 0, Lp = 0, Yp = 0; xp < op; ++xp) {
                for (var Dp = pp[ip[xp]], Ap = Dp[Sp][1] || 0, Pp = (Ap - (Dp[Sp - 1][1] || 0)) / 2, Wp = 0; Wp < xp; ++Wp) {
                  var yp = pp[ip[Wp]];
                  Pp += (yp[Sp][1] || 0) - (yp[Sp - 1][1] || 0)
                }
                Lp += Ap, Yp += Pp * Ap
              }
              cp[Sp - 1][1] += cp[Sp - 1][0] = Ip, Lp && (Ip -= Yp / Lp)
            }
            cp[Sp - 1][1] += cp[Sp - 1][0] = Ip, tI(pp, ip)
          }
        },
        positive: function(pp) {
          var ip = pp.length;
          if (!(ip <= 0))
            for (var cp = 0, Op = pp[0].length; cp < Op; ++cp)
              for (var op = 0, Ip = 0; Ip < ip; ++Ip) {
                var Sp = bI()(pp[Ip][cp][1]) ? pp[Ip][cp][0] : pp[Ip][cp][1];
                Sp >= 0 ? (pp[Ip][cp][0] = op, pp[Ip][cp][1] = op + Sp, op = pp[Ip][cp][1]) : (pp[Ip][cp][0] = 0, pp[Ip][cp][1] = 0)
              }
        }
      },
      VS = function(pp, ip, cp) {
        var Op = ip.map((function(pp) {
            return pp.props.dataKey
          })),
          op = KS[cp],
          Ip = function() {
            var pp = (0, dI.c)([]),
              ip = eI,
              cp = tI,
              Op = uI;

            function op(op) {
              var Ip, Sp, xp = Array.from(pp.apply(this, arguments), jI),
                Lp = xp.length,
                Yp = -1;
              for (const pp of op)
                for (Ip = 0, ++Yp; Ip < Lp; ++Ip)(xp[Ip][Yp] = [0, +Op(pp, xp[Ip].key, Yp, op)]).data = pp;
              for (Ip = 0, Sp = (0, HI.d)(ip(xp)); Ip < Lp; ++Ip) xp[Sp[Ip]].index = Ip;
              return cp(xp, Sp), xp
            }
            return op.keys = function(ip) {
              return arguments.length ? (pp = "function" === typeof ip ? ip : (0, dI.c)(Array.from(ip)), op) : pp
            }, op.value = function(pp) {
              return arguments.length ? (Op = "function" === typeof pp ? pp : (0, dI.c)(+pp), op) : Op
            }, op.order = function(pp) {
              return arguments.length ? (ip = null == pp ? eI : "function" === typeof pp ? pp : (0, dI.c)(Array.from(pp)), op) : ip
            }, op.offset = function(pp) {
              return arguments.length ? (cp = null == pp ? tI : pp, op) : cp
            }, op
          }().keys(Op).value((function(pp, ip) {
            return +ES(pp, ip, 0)
          })).order(eI).offset(op);
        return Ip(pp)
      },
      px = function(pp, ip, cp, Op, op, Ip) {
        if (!pp) return null;
        var Sp = (Ip ? ip.reverse() : ip).reduce((function(pp, ip) {
          var op, Ip = null !== (op = ip.type) && void 0 !== op && op.defaultProps ? MS(MS({}, ip.type.defaultProps), ip.props) : ip.props,
            Sp = Ip.stackId;
          if (Ip.hide) return pp;
          var xp = Ip[cp],
            Lp = pp[xp] || {
              hasStack: !1,
              stackGroups: {}
            };
          if ((0, eS.B)(Sp)) {
            var Yp = Lp.stackGroups[Sp] || {
              numericAxisId: cp,
              cateAxisId: Op,
              items: []
            };
            Yp.items.push(ip), Lp.hasStack = !0, Lp.stackGroups[Sp] = Yp
          } else Lp.stackGroups[(0, eS.J)("_stackId_")] = {
            numericAxisId: cp,
            cateAxisId: Op,
            items: [ip]
          };
          return MS(MS({}, pp), {}, CS({}, xp, Lp))
        }), {});
        return Object.keys(Sp).reduce((function(ip, Ip) {
          var xp = Sp[Ip];
          if (xp.hasStack) {
            xp.stackGroups = Object.keys(xp.stackGroups).reduce((function(ip, Ip) {
              var Sp = xp.stackGroups[Ip];
              return MS(MS({}, ip), {}, CS({}, Ip, {
                numericAxisId: cp,
                cateAxisId: Op,
                items: Sp.items,
                stackedData: VS(pp, Sp.items, op)
              }))
            }), {})
          }
          return MS(MS({}, ip), {}, CS({}, Ip, xp))
        }), {})
      },
      ix = function(pp, ip) {
        var cp = ip.realScaleType,
          Op = ip.type,
          op = ip.tickCount,
          Ip = ip.originalDomain,
          Sp = ip.allowDecimals,
          xp = cp || ip.scale;
        if ("auto" !== xp && "linear" !== xp) return null;
        if (op && "number" === Op && Ip && ("auto" === Ip[0] || "auto" === Ip[1])) {
          var Lp = pp.domain();
          if (!Lp.length) return null;
          var Yp = tS(Lp, op, Sp);
          return pp.domain([qI()(Yp), mI()(Yp)]), {
            niceTicks: Yp
          }
        }
        if (op && "number" === Op) {
          var Dp = pp.domain();
          return {
            niceTicks: HS(Dp, op, Sp)
          }
        }
        return null
      };

    function cx(pp) {
      var ip = pp.axis,
        cp = pp.ticks,
        Op = pp.bandSize,
        op = pp.entry,
        Ip = pp.index,
        Sp = pp.dataKey;
      if ("category" === ip.type) {
        if (!ip.allowDuplicatedCategory && ip.dataKey && !CI()(op[ip.dataKey])) {
          var xp = (0, eS.h)(cp, "value", op[ip.dataKey]);
          if (xp) return xp.coordinate + Op / 2
        }
        return cp[Ip] ? cp[Ip].coordinate + Op / 2 : null
      }
      var Lp = ES(op, CI()(Sp) ? ip.dataKey : Sp);
      return CI()(Lp) ? null : ip.scale(Lp)
    }
    var Ox = function(pp) {
        var ip = pp.axis,
          cp = pp.ticks,
          Op = pp.offset,
          op = pp.bandSize,
          Ip = pp.entry,
          Sp = pp.index;
        if ("category" === ip.type) return cp[Sp] ? cp[Sp].coordinate + Op : null;
        var xp = ES(Ip, ip.dataKey, ip.domain[Sp]);
        return CI()(xp) ? null : ip.scale(xp) - op / 2 + Op
      },
      ox = function(pp) {
        var ip = pp.numericAxis,
          cp = ip.scale.domain();
        if ("number" === ip.type) {
          var Op = Math.min(cp[0], cp[1]),
            op = Math.max(cp[0], cp[1]);
          return Op <= 0 && op >= 0 ? 0 : op < 0 ? op : Op
        }
        return cp[0]
      },
      Ix = function(pp, ip) {
        var cp, Op = (null !== (cp = pp.type) && void 0 !== cp && cp.defaultProps ? MS(MS({}, pp.type.defaultProps), pp.props) : pp.props).stackId;
        if ((0, eS.B)(Op)) {
          var op = ip[Op];
          if (op) {
            var Ip = op.items.indexOf(pp);
            return Ip >= 0 ? op.stackedData[Ip] : null
          }
        }
        return null
      },
      Sx = function(pp, ip, cp) {
        return Object.keys(pp).reduce((function(Op, op) {
          var Ip = pp[op].stackedData.reduce((function(pp, Op) {
            var op = Op.slice(ip, cp + 1).reduce((function(pp, ip) {
              return [qI()(ip.concat([pp[0]]).filter(eS.D)), mI()(ip.concat([pp[1]]).filter(eS.D))]
            }), [1 / 0, -1 / 0]);
            return [Math.min(pp[0], op[0]), Math.max(pp[1], op[1])]
          }), [1 / 0, -1 / 0]);
          return [Math.min(Ip[0], Op[0]), Math.max(Ip[1], Op[1])]
        }), [1 / 0, -1 / 0]).map((function(pp) {
          return pp === 1 / 0 || pp === -1 / 0 ? 0 : pp
        }))
      },
      xx = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
      Lx = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
      Yx = function(pp, ip, cp) {
        if (XI()(pp)) return pp(ip, cp);
        if (!Array.isArray(pp)) return ip;
        var Op = [];
        if ((0, eS.D)(pp[0])) Op[0] = cp ? pp[0] : Math.min(pp[0], ip[0]);
        else if (xx.test(pp[0])) {
          var op = +xx.exec(pp[0])[1];
          Op[0] = ip[0] - op
        } else XI()(pp[0]) ? Op[0] = pp[0](ip[0]) : Op[0] = ip[0];
        if ((0, eS.D)(pp[1])) Op[1] = cp ? pp[1] : Math.max(pp[1], ip[1]);
        else if (Lx.test(pp[1])) {
          var Ip = +Lx.exec(pp[1])[1];
          Op[1] = ip[1] + Ip
        } else XI()(pp[1]) ? Op[1] = pp[1](ip[1]) : Op[1] = ip[1];
        return Op
      },
      Dx = function(pp, ip, cp) {
        if (pp && pp.scale && pp.scale.bandwidth) {
          var Op = pp.scale.bandwidth();
          if (!cp || Op > 0) return Op
        }
        if (pp && ip && ip.length >= 2) {
          for (var op = GI()(ip, (function(pp) {
              return pp.coordinate
            })), Ip = 1 / 0, Sp = 1, xp = op.length; Sp < xp; Sp++) {
            var Lp = op[Sp],
              Yp = op[Sp - 1];
            Ip = Math.min((Lp.coordinate || 0) - (Yp.coordinate || 0), Ip)
          }
          return Ip === 1 / 0 ? 0 : Ip
        }
        return cp ? void 0 : 0
      },
      Ax = function(pp, ip, cp) {
        return pp && pp.length ? FI()(pp, BI()(cp, "type.defaultProps.domain")) ? ip : pp : ip
      },
      Px = function(pp, ip) {
        var cp = pp.type.defaultProps ? MS(MS({}, pp.type.defaultProps), pp.props) : pp.props,
          Op = cp.dataKey,
          op = cp.name,
          Ip = cp.unit,
          Sp = cp.formatter,
          xp = cp.tooltipType,
          Lp = cp.chartType,
          Yp = cp.hide;
        return MS(MS({}, (0, uS.d)(pp, !1)), {}, {
          dataKey: Op,
          unit: Ip,
          formatter: Sp,
          name: op || Op,
          color: QS(pp),
          value: ES(ip, Op),
          type: xp,
          payload: ip,
          chartType: Lp,
          hide: Yp
        })
      }
  },
  6264: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Pp,
      g: () => Ap
    });
    var Op = cp(6115);

    function op(pp) {
      return op = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
        return typeof pp
      } : function(pp) {
        return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
      }, op(pp)
    }

    function Ip(pp, ip) {
      var cp = Object.keys(pp);
      if (Object.getOwnPropertySymbols) {
        var Op = Object.getOwnPropertySymbols(pp);
        ip && (Op = Op.filter((function(ip) {
          return Object.getOwnPropertyDescriptor(pp, ip).enumerable
        }))), cp.push.apply(cp, Op)
      }
      return cp
    }

    function Sp(pp) {
      for (var ip = 1; ip < arguments.length; ip++) {
        var cp = null != arguments[ip] ? arguments[ip] : {};
        ip % 2 ? Ip(Object(cp), !0).forEach((function(ip) {
          xp(pp, ip, cp[ip])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : Ip(Object(cp)).forEach((function(ip) {
          Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
        }))
      }
      return pp
    }

    function xp(pp, ip, cp) {
      return (ip = function(pp) {
        var ip = function(pp, ip) {
          if ("object" != op(pp) || !pp) return pp;
          var cp = pp[Symbol.toPrimitive];
          if (void 0 !== cp) {
            var Op = cp.call(pp, ip || "default");
            if ("object" != op(Op)) return Op;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === ip ? String : Number)(pp)
        }(pp, "string");
        return "symbol" == op(ip) ? ip : ip + ""
      }(ip)) in pp ? Object.defineProperty(pp, ip, {
        value: cp,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : pp[ip] = cp, pp
    }
    var Lp = {
        widthCache: {},
        cacheCount: 0
      },
      Yp = {
        position: "absolute",
        top: "-20000px",
        left: 0,
        padding: 0,
        margin: 0,
        border: "none",
        whiteSpace: "pre"
      },
      Dp = "recharts_measurement_span";
    var Ap = function(pp) {
        var ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (void 0 === pp || null === pp || Op.e.isSsr) return {
          width: 0,
          height: 0
        };
        var cp = function(pp) {
            var ip = Sp({}, pp);
            return Object.keys(ip).forEach((function(pp) {
              ip[pp] || delete ip[pp]
            })), ip
          }(ip),
          op = JSON.stringify({
            text: pp,
            copyStyle: cp
          });
        if (Lp.widthCache[op]) return Lp.widthCache[op];
        try {
          var Ip = document.getElementById(Dp);
          Ip || ((Ip = document.createElement("span")).setAttribute("id", Dp), Ip.setAttribute("aria-hidden", "true"), document.body.appendChild(Ip));
          var xp = Sp(Sp({}, Yp), cp);
          Object.assign(Ip.style, xp), Ip.textContent = "".concat(pp);
          var Ap = Ip.getBoundingClientRect(),
            Pp = {
              width: Ap.width,
              height: Ap.height
            };
          return Lp.widthCache[op] = Pp, ++Lp.cacheCount > 2e3 && (Lp.cacheCount = 0, Lp.widthCache = {}), Pp
        } catch (Wp) {
          return {
            width: 0,
            height: 0
          }
        }
      },
      Pp = function(pp) {
        return {
          top: pp.top + window.scrollY - document.documentElement.clientTop,
          left: pp.left + window.scrollX - document.documentElement.clientLeft
        }
      }
  },
  5299: (pp, ip, cp) => {
    cp.d(ip, {
      B: () => vp,
      D: () => Up,
      F: () => yp,
      I: () => Wp,
      J: () => Hp,
      e: () => qp,
      h: () => mp,
      k: () => ep,
      n: () => Rp,
      r: () => dp,
      t: () => jp,
      x: () => kp,
      z: () => wp
    });
    var Op = cp(5301),
      op = cp.n(Op),
      Ip = cp(5319),
      Sp = cp.n(Ip),
      xp = cp(5326),
      Lp = cp.n(xp),
      Yp = cp(5323),
      Dp = cp.n(Yp),
      Ap = cp(5575),
      Pp = cp.n(Ap),
      Wp = function(pp) {
        return 0 === pp ? 0 : pp > 0 ? 1 : -1
      },
      yp = function(pp) {
        return op()(pp) && pp.indexOf("%") === pp.length - 1
      },
      Up = function(pp) {
        return Dp()(pp) && !Sp()(pp)
      },
      wp = function(pp) {
        return Pp()(pp)
      },
      vp = function(pp) {
        return Up(pp) || op()(pp)
      },
      tp = 0,
      Hp = function(pp) {
        var ip = ++tp;
        return "".concat(pp || "").concat(ip)
      },
      dp = function(pp, ip) {
        var cp, Op = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Ip = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!Up(pp) && !op()(pp)) return Op;
        if (yp(pp)) {
          var xp = pp.indexOf("%");
          cp = ip * parseFloat(pp.slice(0, xp)) / 100
        } else cp = +pp;
        return Sp()(cp) && (cp = Op), Ip && cp > ip && (cp = ip), cp
      },
      ep = function(pp) {
        if (!pp) return null;
        var ip = Object.keys(pp);
        return ip && ip.length ? pp[ip[0]] : null
      },
      jp = function(pp) {
        if (!Array.isArray(pp)) return !1;
        for (var ip = pp.length, cp = {}, Op = 0; Op < ip; Op++) {
          if (cp[pp[Op]]) return !0;
          cp[pp[Op]] = !0
        }
        return !1
      },
      kp = function(pp, ip) {
        return Up(pp) && Up(ip) ? function(cp) {
          return pp + cp * (ip - pp)
        } : function() {
          return ip
        }
      };

    function mp(pp, ip, cp) {
      return pp && pp.length ? pp.find((function(pp) {
        return pp && ("function" === typeof ip ? ip(pp) : Lp()(pp, ip)) === cp
      })) : null
    }
    var Rp = function(pp) {
        if (!pp || !pp.length) return null;
        for (var ip = pp.length, cp = 0, Op = 0, op = 0, Ip = 0, Sp = 1 / 0, xp = -1 / 0, Lp = 0, Yp = 0, Dp = 0; Dp < ip; Dp++) cp += Lp = pp[Dp].cx || 0, Op += Yp = pp[Dp].cy || 0, op += Lp * Yp, Ip += Lp * Lp, Sp = Math.min(Sp, Lp), xp = Math.max(xp, Lp);
        var Ap = ip * Ip !== cp * cp ? (ip * op - cp * Op) / (ip * Ip - cp * cp) : 0;
        return {
          xmin: Sp,
          xmax: xp,
          a: Ap,
          b: (Op - Ap * cp) / ip
        }
      },
      qp = function(pp, ip) {
        return Up(pp) && Up(ip) ? pp - ip : op()(pp) && op()(ip) ? pp.localeCompare(ip) : pp instanceof Date && ip instanceof Date ? pp.getTime() - ip.getTime() : String(pp).localeCompare(String(ip))
      }
  },
  6115: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Op
    });
    var Op = {
      isSsr: !("undefined" !== typeof window && window.document && window.document.createElement && window.setTimeout),
      get: function(pp) {
        return Op[pp]
      },
      set: function(pp, ip) {
        if ("string" === typeof pp) Op[pp] = ip;
        else {
          var cp = Object.keys(pp);
          cp && cp.length && cp.forEach((function(ip) {
            Op[ip] = pp[ip]
          }))
        }
      }
    }
  },
  6360: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Op
    });
    var Op = function(pp, ip) {
      var cp = pp.alwaysShow,
        Op = pp.ifOverflow;
      return cp && (Op = "extendDomain"), Op === ip
    }
  },
  5582: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Op
    });
    var Op = function(pp, ip) {
      for (var cp = arguments.length, Op = new Array(cp > 2 ? cp - 2 : 0), op = 2; op < cp; op++) Op[op - 2] = arguments[op]
    }
  },
  6357: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => xp,
      f: () => Pp,
      i: () => Yp
    });
    cp(5575), cp(62), cp(5405);

    function Op(pp) {
      return Op = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
        return typeof pp
      } : function(pp) {
        return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
      }, Op(pp)
    }

    function op(pp, ip) {
      var cp = Object.keys(pp);
      if (Object.getOwnPropertySymbols) {
        var Op = Object.getOwnPropertySymbols(pp);
        ip && (Op = Op.filter((function(ip) {
          return Object.getOwnPropertyDescriptor(pp, ip).enumerable
        }))), cp.push.apply(cp, Op)
      }
      return cp
    }

    function Ip(pp) {
      for (var ip = 1; ip < arguments.length; ip++) {
        var cp = null != arguments[ip] ? arguments[ip] : {};
        ip % 2 ? op(Object(cp), !0).forEach((function(ip) {
          Sp(pp, ip, cp[ip])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : op(Object(cp)).forEach((function(ip) {
          Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
        }))
      }
      return pp
    }

    function Sp(pp, ip, cp) {
      return (ip = function(pp) {
        var ip = function(pp, ip) {
          if ("object" != Op(pp) || !pp) return pp;
          var cp = pp[Symbol.toPrimitive];
          if (void 0 !== cp) {
            var op = cp.call(pp, ip || "default");
            if ("object" != Op(op)) return op;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === ip ? String : Number)(pp)
        }(pp, "string");
        return "symbol" == Op(ip) ? ip : ip + ""
      }(ip)) in pp ? Object.defineProperty(pp, ip, {
        value: cp,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : pp[ip] = cp, pp
    }
    var xp = Math.PI / 180,
      Lp = function(pp) {
        return 180 * pp / Math.PI
      },
      Yp = function(pp, ip, cp, Op) {
        return {
          x: pp + Math.cos(-xp * Op) * cp,
          y: ip + Math.sin(-xp * Op) * cp
        }
      },
      Dp = function(pp, ip) {
        var cp = pp.x,
          Op = pp.y,
          op = ip.cx,
          Ip = ip.cy,
          Sp = function(pp, ip) {
            var cp = pp.x,
              Op = pp.y,
              op = ip.x,
              Ip = ip.y;
            return Math.sqrt(Math.pow(cp - op, 2) + Math.pow(Op - Ip, 2))
          }({
            x: cp,
            y: Op
          }, {
            x: op,
            y: Ip
          });
        if (Sp <= 0) return {
          radius: Sp
        };
        var xp = (cp - op) / Sp,
          Yp = Math.acos(xp);
        return Op > Ip && (Yp = 2 * Math.PI - Yp), {
          radius: Sp,
          angle: Lp(Yp),
          angleInRadian: Yp
        }
      },
      Ap = function(pp, ip) {
        var cp = ip.startAngle,
          Op = ip.endAngle,
          op = Math.floor(cp / 360),
          Ip = Math.floor(Op / 360);
        return pp + 360 * Math.min(op, Ip)
      },
      Pp = function(pp, ip) {
        var cp = pp.x,
          Op = pp.y,
          op = Dp({
            x: cp,
            y: Op
          }, ip),
          Sp = op.radius,
          xp = op.angle,
          Lp = ip.innerRadius,
          Yp = ip.outerRadius;
        if (Sp < Lp || Sp > Yp) return !1;
        if (0 === Sp) return !0;
        var Pp, Wp = function(pp) {
            var ip = pp.startAngle,
              cp = pp.endAngle,
              Op = Math.floor(ip / 360),
              op = Math.floor(cp / 360),
              Ip = Math.min(Op, op);
            return {
              startAngle: ip - 360 * Ip,
              endAngle: cp - 360 * Ip
            }
          }(ip),
          yp = Wp.startAngle,
          Up = Wp.endAngle,
          wp = xp;
        if (yp <= Up) {
          for (; wp > Up;) wp -= 360;
          for (; wp < yp;) wp += 360;
          Pp = wp >= yp && wp <= Up
        } else {
          for (; wp > yp;) wp -= 360;
          for (; wp < Up;) wp += 360;
          Pp = wp >= Up && wp <= yp
        }
        return Pp ? Ip(Ip({}, ip), {}, {
          radius: Sp,
          angle: Ap(wp, ip)
        }) : null
      }
  },
  5588: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Jp,
      h: () => Mp,
      i: () => Cp,
      k: () => kp,
      m: () => fp,
      n: () => Qp,
      p: () => Bp,
      r: () => bp,
      u: () => Tp,
      y: () => Ep
    });
    var Op = cp(5326),
      op = cp.n(Op),
      Ip = cp(5575),
      Sp = cp.n(Ip),
      xp = cp(5301),
      Lp = cp.n(xp),
      Yp = cp(5405),
      Dp = cp.n(Yp),
      Ap = cp(5214),
      Pp = cp.n(Ap),
      Wp = cp(62),
      yp = cp(5596),
      Up = cp(5299),
      wp = cp(5610),
      vp = cp(5619),
      tp = ["children"],
      Hp = ["children"];

    function dp(pp, ip) {
      if (null == pp) return {};
      var cp, Op, op = function(pp, ip) {
        if (null == pp) return {};
        var cp = {};
        for (var Op in pp)
          if (Object.prototype.hasOwnProperty.call(pp, Op)) {
            if (ip.indexOf(Op) >= 0) continue;
            cp[Op] = pp[Op]
          } return cp
      }(pp, ip);
      if (Object.getOwnPropertySymbols) {
        var Ip = Object.getOwnPropertySymbols(pp);
        for (Op = 0; Op < Ip.length; Op++) cp = Ip[Op], ip.indexOf(cp) >= 0 || Object.prototype.propertyIsEnumerable.call(pp, cp) && (op[cp] = pp[cp])
      }
      return op
    }

    function ep(pp) {
      return ep = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
        return typeof pp
      } : function(pp) {
        return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
      }, ep(pp)
    }
    var jp = {
        click: "onClick",
        mousedown: "onMouseDown",
        mouseup: "onMouseUp",
        mouseover: "onMouseOver",
        mousemove: "onMouseMove",
        mouseout: "onMouseOut",
        mouseenter: "onMouseEnter",
        mouseleave: "onMouseLeave",
        touchcancel: "onTouchCancel",
        touchend: "onTouchEnd",
        touchmove: "onTouchMove",
        touchstart: "onTouchStart",
        contextmenu: "onContextMenu",
        dblclick: "onDoubleClick"
      },
      kp = function(pp) {
        return "string" === typeof pp ? pp : pp ? pp.displayName || pp.name || "Component" : ""
      },
      mp = null,
      Rp = null,
      qp = function pp(ip) {
        if (ip === mp && Array.isArray(Rp)) return Rp;
        var cp = [];
        return Wp.Children.forEach(ip, (function(ip) {
          Sp()(ip) || ((0, yp.isFragment)(ip) ? cp = cp.concat(pp(ip.props.children)) : cp.push(ip))
        })), Rp = cp, mp = ip, cp
      };

    function Mp(pp, ip) {
      var cp = [],
        Op = [];
      return Op = Array.isArray(ip) ? ip.map((function(pp) {
        return kp(pp)
      })) : [kp(ip)], qp(pp).forEach((function(pp) {
        var ip = op()(pp, "type.displayName") || op()(pp, "type.name"); - 1 !== Op.indexOf(ip) && cp.push(pp)
      })), cp
    }

    function Cp(pp, ip) {
      var cp = Mp(pp, ip);
      return cp && cp[0]
    }
    var Ep = function(pp) {
        if (!pp || !pp.props) return !1;
        var ip = pp.props,
          cp = ip.width,
          Op = ip.height;
        return !(!(0, Up.D)(cp) || cp <= 0 || !(0, Up.D)(Op) || Op <= 0)
      },
      Xp = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"],
      lp = function(pp) {
        return pp && pp.type && Lp()(pp.type) && Xp.indexOf(pp.type) >= 0
      },
      Qp = function(pp) {
        return pp && "object" === ep(pp) && "clipDot" in pp
      },
      Jp = function(pp, ip, cp) {
        if (!pp || "function" === typeof pp || "boolean" === typeof pp) return null;
        var Op = pp;
        if ((0, Wp.isValidElement)(pp) && (Op = pp.props), !Pp()(Op)) return null;
        var op = {};
        return Object.keys(Op).forEach((function(pp) {
          var Ip;
          (function(pp, ip, cp, Op) {
            var op, Ip = null !== (op = null === vp.e || void 0 === vp.e ? void 0 : vp.e[Op]) && void 0 !== op ? op : [];
            return ip.startsWith("data-") || !Dp()(pp) && (Op && Ip.includes(ip) || vp.g.includes(ip)) || cp && vp.d.includes(ip)
          })(null === (Ip = Op) || void 0 === Ip ? void 0 : Ip[pp], pp, ip, cp) && (op[pp] = Op[pp])
        })), op
      },
      Bp = function pp(ip, cp) {
        if (ip === cp) return !0;
        var Op = Wp.Children.count(ip);
        if (Op !== Wp.Children.count(cp)) return !1;
        if (0 === Op) return !0;
        if (1 === Op) return Np(Array.isArray(ip) ? ip[0] : ip, Array.isArray(cp) ? cp[0] : cp);
        for (var op = 0; op < Op; op++) {
          var Ip = ip[op],
            Sp = cp[op];
          if (Array.isArray(Ip) || Array.isArray(Sp)) {
            if (!pp(Ip, Sp)) return !1
          } else if (!Np(Ip, Sp)) return !1
        }
        return !0
      },
      Np = function(pp, ip) {
        if (Sp()(pp) && Sp()(ip)) return !0;
        if (!Sp()(pp) && !Sp()(ip)) {
          var cp = pp.props || {},
            Op = cp.children,
            op = dp(cp, tp),
            Ip = ip.props || {},
            xp = Ip.children,
            Lp = dp(Ip, Hp);
          return Op && xp ? (0, wp.b)(op, Lp) && Bp(Op, xp) : !Op && !xp && (0, wp.b)(op, Lp)
        }
        return !1
      },
      Tp = function(pp, ip) {
        var cp = [],
          Op = {};
        return qp(pp).forEach((function(pp, op) {
          if (lp(pp)) cp.push(pp);
          else if (pp) {
            var Ip = kp(pp.type),
              Sp = ip[Ip] || {},
              xp = Sp.handler,
              Lp = Sp.once;
            if (xp && (!Lp || !Op[Ip])) {
              var Yp = xp(pp, Ip, op);
              cp.push(Yp), Op[Ip] = !0
            }
          }
        })), cp
      },
      fp = function(pp) {
        var ip = pp && pp.type;
        return ip && jp[ip] ? jp[ip] : null
      },
      bp = function(pp, ip) {
        return qp(ip).indexOf(pp)
      }
  },
  5610: (pp, ip, cp) => {
    function Op(pp, ip) {
      for (var cp in pp)
        if ({}.hasOwnProperty.call(pp, cp) && (!{}.hasOwnProperty.call(ip, cp) || pp[cp] !== ip[cp])) return !1;
      for (var Op in ip)
        if ({}.hasOwnProperty.call(ip, Op) && !{}.hasOwnProperty.call(pp, Op)) return !1;
      return !0
    }
    cp.d(ip, {
      b: () => Op
    })
  },
  6336: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Dp
    });
    var Op = cp(6183),
      op = cp(6266),
      Ip = cp(5588);

    function Sp(pp) {
      return Sp = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
        return typeof pp
      } : function(pp) {
        return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
      }, Sp(pp)
    }

    function xp(pp, ip) {
      var cp = Object.keys(pp);
      if (Object.getOwnPropertySymbols) {
        var Op = Object.getOwnPropertySymbols(pp);
        ip && (Op = Op.filter((function(ip) {
          return Object.getOwnPropertyDescriptor(pp, ip).enumerable
        }))), cp.push.apply(cp, Op)
      }
      return cp
    }

    function Lp(pp) {
      for (var ip = 1; ip < arguments.length; ip++) {
        var cp = null != arguments[ip] ? arguments[ip] : {};
        ip % 2 ? xp(Object(cp), !0).forEach((function(ip) {
          Yp(pp, ip, cp[ip])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : xp(Object(cp)).forEach((function(ip) {
          Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
        }))
      }
      return pp
    }

    function Yp(pp, ip, cp) {
      return (ip = function(pp) {
        var ip = function(pp, ip) {
          if ("object" != Sp(pp) || !pp) return pp;
          var cp = pp[Symbol.toPrimitive];
          if (void 0 !== cp) {
            var Op = cp.call(pp, ip || "default");
            if ("object" != Sp(Op)) return Op;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === ip ? String : Number)(pp)
        }(pp, "string");
        return "symbol" == Sp(ip) ? ip : ip + ""
      }(ip)) in pp ? Object.defineProperty(pp, ip, {
        value: cp,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : pp[ip] = cp, pp
    }
    var Dp = function(pp) {
      var ip = pp.children,
        cp = pp.formattedGraphicalItems,
        Sp = pp.legendWidth,
        xp = pp.legendContent,
        Yp = (0, Ip.i)(ip, Op.e);
      if (!Yp) return null;
      var Dp, Ap = Op.e.defaultProps,
        Pp = void 0 !== Ap ? Lp(Lp({}, Ap), Yp.props) : {};
      return Dp = Yp.props && Yp.props.payload ? Yp.props && Yp.props.payload : "children" === xp ? (cp || []).reduce((function(pp, ip) {
        var cp = ip.item,
          Op = ip.props,
          op = Op.sectors || Op.data || [];
        return pp.concat(op.map((function(pp) {
          return {
            type: Yp.props.iconType || cp.props.legendType,
            value: pp.name,
            color: pp.fill,
            payload: pp
          }
        })))
      }), []) : (cp || []).map((function(pp) {
        var ip = pp.item,
          cp = ip.type.defaultProps,
          Op = void 0 !== cp ? Lp(Lp({}, cp), ip.props) : {},
          Ip = Op.dataKey,
          Sp = Op.name,
          xp = Op.legendType;
        return {
          inactive: Op.hide,
          dataKey: Ip,
          type: Pp.iconType || xp || "square",
          color: (0, op.T)(ip),
          value: Sp || Ip,
          payload: Op
        }
      })), Lp(Lp(Lp({}, Pp), Op.e.getWithHeight(Yp, Sp)), {}, {
        payload: Dp,
        item: Yp
      })
    }
  },
  6121: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => xp
    });
    var Op = cp(6123),
      op = cp.n(Op),
      Ip = cp(5405),
      Sp = cp.n(Ip);

    function xp(pp, ip, cp) {
      return !0 === ip ? op()(pp, cp) : Sp()(ip) ? op()(pp, ip) : pp
    }
  },
  5619: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Dp,
      e: () => Yp,
      g: () => xp,
      h: () => Ap,
      i: () => Pp
    });
    var Op = cp(62),
      op = cp(5214),
      Ip = cp.n(op);

    function Sp(pp) {
      return Sp = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
        return typeof pp
      } : function(pp) {
        return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
      }, Sp(pp)
    }
    var xp = ["aria-activedescendant", "aria-atomic", "aria-autocomplete", "aria-busy", "aria-checked", "aria-colcount", "aria-colindex", "aria-colspan", "aria-controls", "aria-current", "aria-describedby", "aria-details", "aria-disabled", "aria-errormessage", "aria-expanded", "aria-flowto", "aria-haspopup", "aria-hidden", "aria-invalid", "aria-keyshortcuts", "aria-label", "aria-labelledby", "aria-level", "aria-live", "aria-modal", "aria-multiline", "aria-multiselectable", "aria-orientation", "aria-owns", "aria-placeholder", "aria-posinset", "aria-pressed", "aria-readonly", "aria-relevant", "aria-required", "aria-roledescription", "aria-rowcount", "aria-rowindex", "aria-rowspan", "aria-selected", "aria-setsize", "aria-sort", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext", "className", "color", "height", "id", "lang", "max", "media", "method", "min", "name", "style", "target", "width", "role", "tabIndex", "accentHeight", "accumulate", "additive", "alignmentBaseline", "allowReorder", "alphabetic", "amplitude", "arabicForm", "ascent", "attributeName", "attributeType", "autoReverse", "azimuth", "baseFrequency", "baselineShift", "baseProfile", "bbox", "mW", "bias", "by", "calcMode", "capHeight", "clip", "clipPath", "clipPathUnits", "clipRule", "colorInterpolation", "colorInterpolationFilters", "colorProfile", "colorRendering", "contentScriptType", "contentStyleType", "cursor", "cx", "cy", "d", "decelerate", "descent", "diffuseConstant", "direction", "display", "divisor", "dominantBaseline", "dur", "dx", "dy", "edgeMode", "elevation", "enableBackground", "end", "exponent", "externalResourcesRequired", "fill", "fillOpacity", "fillRule", "filter", "filterRes", "filterUnits", "floodColor", "floodOpacity", "focusable", "fontFamily", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontWeight", "format", "from", "fx", "fy", "g1", "g2", "glyphName", "glyphOrientationHorizontal", "glyphOrientationVertical", "glyphRef", "gradientTransform", "gradientUnits", "hanging", "horizAdvX", "horizOriginX", "href", "ideographic", "imageRendering", "in2", "in", "intercept", "k1", "k2", "k3", "k4", "k", "kernelMatrix", "kernelUnitLength", "kerning", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "letterSpacing", "lightingColor", "limitingConeAngle", "local", "markerEnd", "markerHeight", "markerMid", "markerStart", "markerUnits", "markerWidth", "mask", "maskContentUnits", "maskUnits", "mathematical", "mode", "numOctaves", "offset", "opacity", "operator", "order", "orient", "orientation", "origin", "overflow", "overlinePosition", "overlineThickness", "paintOrder", "panose1", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointerEvents", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "r", "radius", "refX", "refY", "renderingIntent", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "restart", "result", "rotate", "rx", "ry", "seed", "shapeRendering", "slope", "spacing", "specularConstant", "specularExponent", "speed", "spreadMethod", "startOffset", "stdDeviation", "stemh", "stemv", "stitchTiles", "stopColor", "stopOpacity", "strikethroughPosition", "strikethroughThickness", "string", "stroke", "strokeDasharray", "strokeDashoffset", "strokeLinecap", "strokeLinejoin", "strokeMiterlimit", "strokeOpacity", "strokeWidth", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textAnchor", "textDecoration", "textLength", "textRendering", "to", "transform", "u1", "u2", "underlinePosition", "underlineThickness", "unicode", "unicodeBidi", "unicodeRange", "unitsPerEm", "vAlphabetic", "values", "vectorEffect", "version", "vertAdvY", "vertOriginX", "vertOriginY", "vHanging", "vIdeographic", "viewTarget", "visibility", "vMathematical", "widths", "wordSpacing", "writingMode", "x1", "x2", "x", "xChannelSelector", "xHeight", "xlinkActuate", "xlinkArcrole", "xlinkHref", "xlinkRole", "xlinkShow", "xlinkTitle", "xlinkType", "xmlBase", "xmlLang", "xmlns", "xmlnsXlink", "xmlSpace", "y1", "y2", "y", "yChannelSelector", "z", "zoomAndPan", "ref", "key", "angle"],
      Lp = ["points", "pathLength"],
      Yp = {
        svg: ["viewBox", "children"],
        polygon: Lp,
        polyline: Lp
      },
      Dp = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"],
      Ap = function(pp, ip) {
        if (!pp || "function" === typeof pp || "boolean" === typeof pp) return null;
        var cp = pp;
        if ((0, Op.isValidElement)(pp) && (cp = pp.props), !Ip()(cp)) return null;
        var op = {};
        return Object.keys(cp).forEach((function(pp) {
          Dp.includes(pp) && (op[pp] = ip || function(ip) {
            return cp[pp](cp, ip)
          })
        })), op
      },
      Pp = function(pp, ip, cp) {
        if (!Ip()(pp) || "object" !== Sp(pp)) return null;
        var Op = null;
        return Object.keys(pp).forEach((function(op) {
          var Ip = pp[op];
          Dp.includes(op) && "function" === typeof Ip && (Op || (Op = {}), Op[op] = function(pp, ip, cp) {
            return function(Op) {
              return pp(ip, cp, Op), null
            }
          }(Ip, ip, cp))
        })), Op
      }
  },
  5602: (pp, ip) => {
    var cp, Op = Symbol.for("react.element"),
      op = Symbol.for("react.portal"),
      Ip = Symbol.for("react.fragment"),
      Sp = Symbol.for("react.strict_mode"),
      xp = Symbol.for("react.profiler"),
      Lp = Symbol.for("react.provider"),
      Yp = Symbol.for("react.context"),
      Dp = Symbol.for("react.server_context"),
      Ap = Symbol.for("react.forward_ref"),
      Pp = Symbol.for("react.suspense"),
      Wp = Symbol.for("react.suspense_list"),
      yp = Symbol.for("react.memo"),
      Up = Symbol.for("react.lazy"),
      wp = Symbol.for("react.offscreen");

    function vp(pp) {
      if ("object" === typeof pp && null !== pp) {
        var ip = pp.$$typeof;
        switch (ip) {
          case Op:
            switch (pp = pp.type) {
              case Ip:
              case xp:
              case Sp:
              case Pp:
              case Wp:
                return pp;
              default:
                switch (pp = pp && pp.$$typeof) {
                  case Dp:
                  case Yp:
                  case Ap:
                  case Up:
                  case yp:
                  case Lp:
                    return pp;
                  default:
                    return ip
                }
            }
          case op:
            return ip
        }
      }
    }
    cp = Symbol.for("react.module.reference"), ip.isFragment = function(pp) {
      return vp(pp) === Ip
    }
  },
  5596: (pp, ip, cp) => {
    pp.exports = cp(5602)
  },
  5203: (pp, ip, cp) => {
    function Op(pp) {
      var ip, cp, op = "";
      if ("string" == typeof pp || "number" == typeof pp) op += pp;
      else if ("object" == typeof pp)
        if (Array.isArray(pp)) {
          var Ip = pp.length;
          for (ip = 0; ip < Ip; ip++) pp[ip] && (cp = Op(pp[ip])) && (op && (op += " "), op += cp)
        } else
          for (cp in pp) pp[cp] && (op && (op += " "), op += cp);
      return op
    }
    cp.d(ip, {
      d: () => op
    });
    const op = function() {
      for (var pp, ip, cp = 0, op = "", Ip = arguments.length; cp < Ip; cp++)(pp = arguments[cp]) && (ip = Op(pp)) && (op && (op += " "), op += ip);
      return op
    }
  },
  6271: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Ip,
      d: () => xp
    });
    var Op = cp(6280),
      op = cp(6288);

    function Ip() {
      var pp, ip, cp = (0, op.b)().unknown(void 0),
        Sp = cp.domain,
        xp = cp.range,
        Lp = 0,
        Yp = 1,
        Dp = !1,
        Ap = 0,
        Pp = 0,
        Wp = .5;

      function yp() {
        var cp = Sp().length,
          Op = Yp < Lp,
          op = Op ? Yp : Lp,
          Ip = Op ? Lp : Yp;
        pp = (Ip - op) / Math.max(1, cp - Ap + 2 * Pp), Dp && (pp = Math.floor(pp)), op += (Ip - op - pp * (cp - Ap)) * Wp, ip = pp * (1 - Ap), Dp && (op = Math.round(op), ip = Math.round(ip));
        var yp = function(pp, ip, cp) {
          pp = +pp, ip = +ip, cp = (op = arguments.length) < 2 ? (ip = pp, pp = 0, 1) : op < 3 ? 1 : +cp;
          for (var Op = -1, op = 0 | Math.max(0, Math.ceil((ip - pp) / cp)), Ip = new Array(op); ++Op < op;) Ip[Op] = pp + Op * cp;
          return Ip
        }(cp).map((function(ip) {
          return op + pp * ip
        }));
        return xp(Op ? yp.reverse() : yp)
      }
      return delete cp.unknown, cp.domain = function(pp) {
        return arguments.length ? (Sp(pp), yp()) : Sp()
      }, cp.range = function(pp) {
        return arguments.length ? ([Lp, Yp] = pp, Lp = +Lp, Yp = +Yp, yp()) : [Lp, Yp]
      }, cp.rangeRound = function(pp) {
        return [Lp, Yp] = pp, Lp = +Lp, Yp = +Yp, Dp = !0, yp()
      }, cp.bandwidth = function() {
        return ip
      }, cp.step = function() {
        return pp
      }, cp.round = function(pp) {
        return arguments.length ? (Dp = !!pp, yp()) : Dp
      }, cp.padding = function(pp) {
        return arguments.length ? (Ap = Math.min(1, Pp = +pp), yp()) : Ap
      }, cp.paddingInner = function(pp) {
        return arguments.length ? (Ap = Math.min(1, pp), yp()) : Ap
      }, cp.paddingOuter = function(pp) {
        return arguments.length ? (Pp = +pp, yp()) : Pp
      }, cp.align = function(pp) {
        return arguments.length ? (Wp = Math.max(0, Math.min(1, pp)), yp()) : Wp
      }, cp.copy = function() {
        return Ip(Sp(), [Lp, Yp]).round(Dp).paddingInner(Ap).paddingOuter(Pp).align(Wp)
      }, Op.d.apply(yp(), arguments)
    }

    function Sp(pp) {
      var ip = pp.copy;
      return pp.padding = pp.paddingOuter, delete pp.paddingInner, delete pp.paddingOuter, pp.copy = function() {
        return Sp(ip())
      }, pp
    }

    function xp() {
      return Sp(Ip.apply(null, arguments).paddingInner(1))
    }
  },
  6280: (pp, ip, cp) => {
    function Op(pp, ip) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          this.range(pp);
          break;
        default:
          this.range(ip).domain(pp)
      }
      return this
    }

    function op(pp, ip) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          "function" === typeof pp ? this.interpolator(pp) : this.range(pp);
          break;
        default:
          this.domain(pp), "function" === typeof ip ? this.interpolator(ip) : this.range(ip)
      }
      return this
    }
    cp.d(ip, {
      b: () => op,
      d: () => Op
    })
  },
  6288: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Dp,
      f: () => Yp
    });
    class Op extends Map {
      constructor(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : xp;
        if (super(), Object.defineProperties(this, {
            _intern: {
              value: new Map
            },
            _key: {
              value: ip
            }
          }), null != pp)
          for (const [cp, Op] of pp) this.set(cp, Op)
      }
      get(pp) {
        return super.get(op(this, pp))
      }
      has(pp) {
        return super.has(op(this, pp))
      }
      set(pp, ip) {
        return super.set(Ip(this, pp), ip)
      }
      delete(pp) {
        return super.delete(Sp(this, pp))
      }
    }
    Set;

    function op(pp, ip) {
      let {
        _intern: cp,
        _key: Op
      } = pp;
      const op = Op(ip);
      return cp.has(op) ? cp.get(op) : ip
    }

    function Ip(pp, ip) {
      let {
        _intern: cp,
        _key: Op
      } = pp;
      const op = Op(ip);
      return cp.has(op) ? cp.get(op) : (cp.set(op, ip), ip)
    }

    function Sp(pp, ip) {
      let {
        _intern: cp,
        _key: Op
      } = pp;
      const op = Op(ip);
      return cp.has(op) && (ip = cp.get(op), cp.delete(op)), ip
    }

    function xp(pp) {
      return null !== pp && "object" === typeof pp ? pp.valueOf() : pp
    }
    var Lp = cp(6280);
    const Yp = Symbol("implicit");

    function Dp() {
      var pp = new Op,
        ip = [],
        cp = [],
        op = Yp;

      function Ip(Op) {
        let Ip = pp.get(Op);
        if (void 0 === Ip) {
          if (op !== Yp) return op;
          pp.set(Op, Ip = ip.push(Op) - 1)
        }
        return cp[Ip % cp.length]
      }
      return Ip.domain = function(cp) {
        if (!arguments.length) return ip.slice();
        ip = [], pp = new Op;
        for (const Op of cp) pp.has(Op) || pp.set(Op, ip.push(Op) - 1);
        return Ip
      }, Ip.range = function(pp) {
        return arguments.length ? (cp = Array.from(pp), Ip) : cp.slice()
      }, Ip.unknown = function(pp) {
        return arguments.length ? (op = pp, Ip) : op
      }, Ip.copy = function() {
        return Dp(ip, cp).unknown(op)
      }, Lp.d.apply(Ip, arguments), Ip
    }
  },
  6344: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Op
    });
    Array.prototype.slice;

    function Op(pp) {
      return "object" === typeof pp && "length" in pp ? pp : Array.from(pp)
    }
  },
  6229: (pp, ip, cp) => {
    function Op(pp) {
      return function() {
        return pp
      }
    }
    cp.d(ip, {
      c: () => Op
    })
  },
  6231: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Yp
    });
    const Op = Math.PI,
      op = 2 * Op,
      Ip = 1e-6,
      Sp = op - Ip;

    function xp(pp) {
      this._ += pp[0];
      for (let ip = 1, cp = pp.length; ip < cp; ++ip) this._ += arguments[ip] + pp[ip]
    }
    class Lp {
      constructor(pp) {
        this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = null == pp ? xp : function(pp) {
          let ip = Math.floor(pp);
          if (!(ip >= 0)) throw new Error(`invalid digits: ${pp}`);
          if (ip > 15) return xp;
          const cp = 10 ** ip;
          return function(pp) {
            this._ += pp[0];
            for (let ip = 1, Op = pp.length; ip < Op; ++ip) this._ += Math.round(arguments[ip] * cp) / cp + pp[ip]
          }
        }(pp)
      }
      moveTo(pp, ip) {
        this._append`M${this._x0=this._x1=+pp},${this._y0=this._y1=+ip}`
      }
      closePath() {
        null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`)
      }
      lineTo(pp, ip) {
        this._append`L${this._x1=+pp},${this._y1=+ip}`
      }
      quadraticCurveTo(pp, ip, cp, Op) {
        this._append`Q${+pp},${+ip},${this._x1=+cp},${this._y1=+Op}`
      }
      bezierCurveTo(pp, ip, cp, Op, op, Ip) {
        this._append`C${+pp},${+ip},${+cp},${+Op},${this._x1=+op},${this._y1=+Ip}`
      }
      arcTo(pp, ip, cp, op, Sp) {
        if (pp = +pp, ip = +ip, cp = +cp, op = +op, (Sp = +Sp) < 0) throw new Error(`negative radius: ${Sp}`);
        let xp = this._x1,
          Lp = this._y1,
          Yp = cp - pp,
          Dp = op - ip,
          Ap = xp - pp,
          Pp = Lp - ip,
          Wp = Ap * Ap + Pp * Pp;
        if (null === this._x1) this._append`M${this._x1=pp},${this._y1=ip}`;
        else if (Wp > Ip)
          if (Math.abs(Pp * Yp - Dp * Ap) > Ip && Sp) {
            let yp = cp - xp,
              Up = op - Lp,
              wp = Yp * Yp + Dp * Dp,
              vp = yp * yp + Up * Up,
              tp = Math.sqrt(wp),
              Hp = Math.sqrt(Wp),
              dp = Sp * Math.tan((Op - Math.acos((wp + Wp - vp) / (2 * tp * Hp))) / 2),
              ep = dp / Hp,
              jp = dp / tp;
            Math.abs(ep - 1) > Ip && this._append`L${pp+ep*Ap},${ip+ep*Pp}`, this._append`A${Sp},${Sp},0,0,${+(Pp*yp>Ap*Up)},${this._x1=pp+jp*Yp},${this._y1=ip+jp*Dp}`
          } else this._append`L${this._x1=pp},${this._y1=ip}`;
        else;
      }
      arc(pp, ip, cp, xp, Lp, Yp) {
        if (pp = +pp, ip = +ip, Yp = !!Yp, (cp = +cp) < 0) throw new Error(`negative radius: ${cp}`);
        let Dp = cp * Math.cos(xp),
          Ap = cp * Math.sin(xp),
          Pp = pp + Dp,
          Wp = ip + Ap,
          yp = 1 ^ Yp,
          Up = Yp ? xp - Lp : Lp - xp;
        null === this._x1 ? this._append`M${Pp},${Wp}` : (Math.abs(this._x1 - Pp) > Ip || Math.abs(this._y1 - Wp) > Ip) && this._append`L${Pp},${Wp}`, cp && (Up < 0 && (Up = Up % op + op), Up > Sp ? this._append`A${cp},${cp},0,1,${yp},${pp-Dp},${ip-Ap}A${cp},${cp},0,1,${yp},${this._x1=Pp},${this._y1=Wp}` : Up > Ip && this._append`A${cp},${cp},0,${+(Up>=Op)},${yp},${this._x1=pp+cp*Math.cos(Lp)},${this._y1=ip+cp*Math.sin(Lp)}`)
      }
      rect(pp, ip, cp, Op) {
        this._append`M${this._x0=this._x1=+pp},${this._y0=this._y1=+ip}h${cp=+cp}v${+Op}h${-cp}Z`
      }
      toString() {
        return this._
      }
    }

    function Yp(pp) {
      let ip = 3;
      return pp.digits = function(cp) {
        if (!arguments.length) return ip;
        if (null == cp) ip = null;
        else {
          const pp = Math.floor(cp);
          if (!(pp >= 0)) throw new RangeError(`invalid digits: ${cp}`);
          ip = pp
        }
        return pp
      }, () => new Lp(ip)
    }
    Lp.prototype
  },
  6096: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Ip
    });
    var Op = !0,
      op = "Invariant failed";

    function Ip(pp, ip) {
      if (!pp) {
        if (Op) throw new Error(op);
        var cp = "function" === typeof ip ? ip() : ip,
          Ip = cp ? "".concat(op, ": ").concat(cp) : op;
        throw new Error(Ip)
      }
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);