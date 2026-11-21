/*! For license information please see x17cru.111.30d61288.chunk.js.LICENSE.txt */
export const id = 111;
export const ids = [111];
export const modules = {
  6087: function(dd, Jd, kd) {
    var pd;
    ! function() {
      var Nd, Wd = 1e9,
        Pd = {
          precision: 20,
          rounding: 4,
          toExpNeg: -7,
          toExpPos: 21,
          LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
        },
        Zd = !0,
        gd = "[DecimalError] ",
        Cd = gd + "Invalid argument: ",
        Kd = gd + "Exponent out of range: ",
        od = Math.floor,
        ld = Math.pow,
        Qd = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        Ld = 1e7,
        Od = 9007199254740991,
        ed = od(1286742750677284.5),
        Rd = {};

      function Id(dd, Jd) {
        var kd, pd, Nd, Wd, Pd, gd, Cd, Kd, od = dd.constructor,
          ld = od.precision;
        if (!dd.s || !Jd.s) return Jd.s || (Jd = new od(dd)), Zd ? Yd(Jd, ld) : Jd;
        if (Cd = dd.d, Kd = Jd.d, Pd = dd.e, Nd = Jd.e, Cd = Cd.slice(), Wd = Pd - Nd) {
          for (Wd < 0 ? (pd = Cd, Wd = -Wd, gd = Kd.length) : (pd = Kd, Nd = Pd, gd = Cd.length), Wd > (gd = (Pd = Math.ceil(ld / 7)) > gd ? Pd + 1 : gd + 1) && (Wd = gd, pd.length = 1), pd.reverse(); Wd--;) pd.push(0);
          pd.reverse()
        }
        for ((gd = Cd.length) - (Wd = Kd.length) < 0 && (Wd = gd, pd = Kd, Kd = Cd, Cd = pd), kd = 0; Wd;) kd = (Cd[--Wd] = Cd[Wd] + Kd[Wd] + kd) / Ld | 0, Cd[Wd] %= Ld;
        for (kd && (Cd.unshift(kd), ++Nd), gd = Cd.length; 0 == Cd[--gd];) Cd.pop();
        return Jd.d = Cd, Jd.e = Nd, Zd ? Yd(Jd, ld) : Jd
      }

      function Gd(dd, Jd, kd) {
        if (dd !== ~~dd || dd < Jd || dd > kd) throw Error(Cd + dd)
      }

      function vd(dd) {
        var Jd, kd, pd, Nd = dd.length - 1,
          Wd = "",
          Pd = dd[0];
        if (Nd > 0) {
          for (Wd += Pd, Jd = 1; Jd < Nd; Jd++)(kd = 7 - (pd = dd[Jd] + "").length) && (Wd += ad(kd)), Wd += pd;
          (kd = 7 - (pd = (Pd = dd[Jd]) + "").length) && (Wd += ad(kd))
        } else if (0 === Pd) return "0";
        for (; Pd % 10 === 0;) Pd /= 10;
        return Wd + Pd
      }
      Rd.absoluteValue = Rd.abs = function() {
        var dd = new this.constructor(this);
        return dd.s && (dd.s = 1), dd
      }, Rd.comparedTo = Rd.cmp = function(dd) {
        var Jd, kd, pd, Nd, Wd = this;
        if (dd = new Wd.constructor(dd), Wd.s !== dd.s) return Wd.s || -dd.s;
        if (Wd.e !== dd.e) return Wd.e > dd.e ^ Wd.s < 0 ? 1 : -1;
        for (Jd = 0, kd = (pd = Wd.d.length) < (Nd = dd.d.length) ? pd : Nd; Jd < kd; ++Jd)
          if (Wd.d[Jd] !== dd.d[Jd]) return Wd.d[Jd] > dd.d[Jd] ^ Wd.s < 0 ? 1 : -1;
        return pd === Nd ? 0 : pd > Nd ^ Wd.s < 0 ? 1 : -1
      }, Rd.decimalPlaces = Rd.dp = function() {
        var dd = this,
          Jd = dd.d.length - 1,
          kd = 7 * (Jd - dd.e);
        if (Jd = dd.d[Jd])
          for (; Jd % 10 == 0; Jd /= 10) kd--;
        return kd < 0 ? 0 : kd
      }, Rd.dividedBy = Rd.div = function(dd) {
        return xd(this, new this.constructor(dd))
      }, Rd.dividedToIntegerBy = Rd.idiv = function(dd) {
        var Jd = this.constructor;
        return Yd(xd(this, new Jd(dd), 0, 1), Jd.precision)
      }, Rd.equals = Rd.eq = function(dd) {
        return !this.cmp(dd)
      }, Rd.exponent = function() {
        return Bd(this)
      }, Rd.greaterThan = Rd.gt = function(dd) {
        return this.cmp(dd) > 0
      }, Rd.greaterThanOrEqualTo = Rd.gte = function(dd) {
        return this.cmp(dd) >= 0
      }, Rd.isInteger = Rd.isint = function() {
        return this.e > this.d.length - 2
      }, Rd.isNegative = Rd.isneg = function() {
        return this.s < 0
      }, Rd.isPositive = Rd.ispos = function() {
        return this.s > 0
      }, Rd.isZero = function() {
        return 0 === this.s
      }, Rd.lessThan = Rd.lt = function(dd) {
        return this.cmp(dd) < 0
      }, Rd.lessThanOrEqualTo = Rd.lte = function(dd) {
        return this.cmp(dd) < 1
      }, Rd.logarithm = Rd.log = function(dd) {
        var Jd, kd = this,
          pd = kd.constructor,
          Wd = pd.precision,
          Pd = Wd + 5;
        if (void 0 === dd) dd = new pd(10);
        else if ((dd = new pd(dd)).s < 1 || dd.eq(Nd)) throw Error(gd + "NaN");
        if (kd.s < 1) throw Error(gd + (kd.s ? "NaN" : "-Infinity"));
        return kd.eq(Nd) ? new pd(0) : (Zd = !1, Jd = xd(Md(kd, Pd), Md(dd, Pd), Pd), Zd = !0, Yd(Jd, Wd))
      }, Rd.minus = Rd.sub = function(dd) {
        var Jd = this;
        return dd = new Jd.constructor(dd), Jd.s == dd.s ? md(Jd, dd) : Id(Jd, (dd.s = -dd.s, dd))
      }, Rd.modulo = Rd.mod = function(dd) {
        var Jd, kd = this,
          pd = kd.constructor,
          Nd = pd.precision;
        if (!(dd = new pd(dd)).s) throw Error(gd + "NaN");
        return kd.s ? (Zd = !1, Jd = xd(kd, dd, 0, 1).times(dd), Zd = !0, kd.minus(Jd)) : Yd(new pd(kd), Nd)
      }, Rd.naturalExponential = Rd.exp = function() {
        return qd(this)
      }, Rd.naturalLogarithm = Rd.ln = function() {
        return Md(this)
      }, Rd.negated = Rd.neg = function() {
        var dd = new this.constructor(this);
        return dd.s = -dd.s || 0, dd
      }, Rd.plus = Rd.add = function(dd) {
        var Jd = this;
        return dd = new Jd.constructor(dd), Jd.s == dd.s ? Id(Jd, dd) : md(Jd, (dd.s = -dd.s, dd))
      }, Rd.precision = Rd.sd = function(dd) {
        var Jd, kd, pd, Nd = this;
        if (void 0 !== dd && dd !== !!dd && 1 !== dd && 0 !== dd) throw Error(Cd + dd);
        if (Jd = Bd(Nd) + 1, kd = 7 * (pd = Nd.d.length - 1) + 1, pd = Nd.d[pd]) {
          for (; pd % 10 == 0; pd /= 10) kd--;
          for (pd = Nd.d[0]; pd >= 10; pd /= 10) kd++
        }
        return dd && Jd > kd ? Jd : kd
      }, Rd.squareRoot = Rd.sqrt = function() {
        var dd, Jd, kd, pd, Nd, Wd, Pd, Cd = this,
          Kd = Cd.constructor;
        if (Cd.s < 1) {
          if (!Cd.s) return new Kd(0);
          throw Error(gd + "NaN")
        }
        for (dd = Bd(Cd), Zd = !1, 0 == (Nd = Math.sqrt(+Cd)) || Nd == 1 / 0 ? (((Jd = vd(Cd.d)).length + dd) % 2 == 0 && (Jd += "0"), Nd = Math.sqrt(Jd), dd = od((dd + 1) / 2) - (dd < 0 || dd % 2), pd = new Kd(Jd = Nd == 1 / 0 ? "1e" + dd : (Jd = Nd.toExponential()).slice(0, Jd.indexOf("e") + 1) + dd)) : pd = new Kd(Nd.toString()), Nd = Pd = (kd = Kd.precision) + 3;;)
          if (pd = (Wd = pd).plus(xd(Cd, Wd, Pd + 2)).times(.5), vd(Wd.d).slice(0, Pd) === (Jd = vd(pd.d)).slice(0, Pd)) {
            if (Jd = Jd.slice(Pd - 3, Pd + 1), Nd == Pd && "4999" == Jd) {
              if (Yd(Wd, kd + 1, 0), Wd.times(Wd).eq(Cd)) {
                pd = Wd;
                break
              }
            } else if ("9999" != Jd) break;
            Pd += 4
          } return Zd = !0, Yd(pd, kd)
      }, Rd.times = Rd.mul = function(dd) {
        var Jd, kd, pd, Nd, Wd, Pd, gd, Cd, Kd, od = this,
          ld = od.constructor,
          Qd = od.d,
          Od = (dd = new ld(dd)).d;
        if (!od.s || !dd.s) return new ld(0);
        for (dd.s *= od.s, kd = od.e + dd.e, (Cd = Qd.length) < (Kd = Od.length) && (Wd = Qd, Qd = Od, Od = Wd, Pd = Cd, Cd = Kd, Kd = Pd), Wd = [], pd = Pd = Cd + Kd; pd--;) Wd.push(0);
        for (pd = Kd; --pd >= 0;) {
          for (Jd = 0, Nd = Cd + pd; Nd > pd;) gd = Wd[Nd] + Od[pd] * Qd[Nd - pd - 1] + Jd, Wd[Nd--] = gd % Ld | 0, Jd = gd / Ld | 0;
          Wd[Nd] = (Wd[Nd] + Jd) % Ld | 0
        }
        for (; !Wd[--Pd];) Wd.pop();
        return Jd ? ++kd : Wd.shift(), dd.d = Wd, dd.e = kd, Zd ? Yd(dd, ld.precision) : dd
      }, Rd.toDecimalPlaces = Rd.todp = function(dd, Jd) {
        var kd = this,
          pd = kd.constructor;
        return kd = new pd(kd), void 0 === dd ? kd : (Gd(dd, 0, Wd), void 0 === Jd ? Jd = pd.rounding : Gd(Jd, 0, 8), Yd(kd, dd + Bd(kd) + 1, Jd))
      }, Rd.toExponential = function(dd, Jd) {
        var kd, pd = this,
          Nd = pd.constructor;
        return void 0 === dd ? kd = bd(pd, !0) : (Gd(dd, 0, Wd), void 0 === Jd ? Jd = Nd.rounding : Gd(Jd, 0, 8), kd = bd(pd = Yd(new Nd(pd), dd + 1, Jd), !0, dd + 1)), kd
      }, Rd.toFixed = function(dd, Jd) {
        var kd, pd, Nd = this,
          Pd = Nd.constructor;
        return void 0 === dd ? bd(Nd) : (Gd(dd, 0, Wd), void 0 === Jd ? Jd = Pd.rounding : Gd(Jd, 0, 8), kd = bd((pd = Yd(new Pd(Nd), dd + Bd(Nd) + 1, Jd)).abs(), !1, dd + Bd(pd) + 1), Nd.isneg() && !Nd.isZero() ? "-" + kd : kd)
      }, Rd.toInteger = Rd.toint = function() {
        var dd = this,
          Jd = dd.constructor;
        return Yd(new Jd(dd), Bd(dd) + 1, Jd.rounding)
      }, Rd.toNumber = function() {
        return +this
      }, Rd.toPower = Rd.pow = function(dd) {
        var Jd, kd, pd, Wd, Pd, Cd, Kd = this,
          ld = Kd.constructor,
          Qd = +(dd = new ld(dd));
        if (!dd.s) return new ld(Nd);
        if (!(Kd = new ld(Kd)).s) {
          if (dd.s < 1) throw Error(gd + "Infinity");
          return Kd
        }
        if (Kd.eq(Nd)) return Kd;
        if (pd = ld.precision, dd.eq(Nd)) return Yd(Kd, pd);
        if (Cd = (Jd = dd.e) >= (kd = dd.d.length - 1), Pd = Kd.s, Cd) {
          if ((kd = Qd < 0 ? -Qd : Qd) <= Od) {
            for (Wd = new ld(Nd), Jd = Math.ceil(pd / 7 + 4), Zd = !1; kd % 2 && Sd((Wd = Wd.times(Kd)).d, Jd), 0 !== (kd = od(kd / 2));) Sd((Kd = Kd.times(Kd)).d, Jd);
            return Zd = !0, dd.s < 0 ? new ld(Nd).div(Wd) : Yd(Wd, pd)
          }
        } else if (Pd < 0) throw Error(gd + "NaN");
        return Pd = Pd < 0 && 1 & dd.d[Math.max(Jd, kd)] ? -1 : 1, Kd.s = 1, Zd = !1, Wd = dd.times(Md(Kd, pd + 12)), Zd = !0, (Wd = qd(Wd)).s = Pd, Wd
      }, Rd.toPrecision = function(dd, Jd) {
        var kd, pd, Nd = this,
          Pd = Nd.constructor;
        return void 0 === dd ? pd = bd(Nd, (kd = Bd(Nd)) <= Pd.toExpNeg || kd >= Pd.toExpPos) : (Gd(dd, 1, Wd), void 0 === Jd ? Jd = Pd.rounding : Gd(Jd, 0, 8), pd = bd(Nd = Yd(new Pd(Nd), dd, Jd), dd <= (kd = Bd(Nd)) || kd <= Pd.toExpNeg, dd)), pd
      }, Rd.toSignificantDigits = Rd.tosd = function(dd, Jd) {
        var kd = this.constructor;
        return void 0 === dd ? (dd = kd.precision, Jd = kd.rounding) : (Gd(dd, 1, Wd), void 0 === Jd ? Jd = kd.rounding : Gd(Jd, 0, 8)), Yd(new kd(this), dd, Jd)
      }, Rd.toString = Rd.valueOf = Rd.val = Rd.toJSON = function() {
        var dd = this,
          Jd = Bd(dd),
          kd = dd.constructor;
        return bd(dd, Jd <= kd.toExpNeg || Jd >= kd.toExpPos)
      };
      var xd = function() {
        function dd(dd, Jd) {
          var kd, pd = 0,
            Nd = dd.length;
          for (dd = dd.slice(); Nd--;) kd = dd[Nd] * Jd + pd, dd[Nd] = kd % Ld | 0, pd = kd / Ld | 0;
          return pd && dd.unshift(pd), dd
        }

        function Jd(dd, Jd, kd, pd) {
          var Nd, Wd;
          if (kd != pd) Wd = kd > pd ? 1 : -1;
          else
            for (Nd = Wd = 0; Nd < kd; Nd++)
              if (dd[Nd] != Jd[Nd]) {
                Wd = dd[Nd] > Jd[Nd] ? 1 : -1;
                break
              } return Wd
        }

        function kd(dd, Jd, kd) {
          for (var pd = 0; kd--;) dd[kd] -= pd, pd = dd[kd] < Jd[kd] ? 1 : 0, dd[kd] = pd * Ld + dd[kd] - Jd[kd];
          for (; !dd[0] && dd.length > 1;) dd.shift()
        }
        return function(pd, Nd, Wd, Pd) {
          var Zd, Cd, Kd, od, ld, Qd, Od, ed, Rd, Id, Gd, vd, xd, qd, sd, ad, Md, Fd, md = pd.constructor,
            bd = pd.s == Nd.s ? 1 : -1,
            Sd = pd.d,
            jd = Nd.d;
          if (!pd.s) return new md(pd);
          if (!Nd.s) throw Error(gd + "Division by zero");
          for (Cd = pd.e - Nd.e, Md = jd.length, sd = Sd.length, ed = (Od = new md(bd)).d = [], Kd = 0; jd[Kd] == (Sd[Kd] || 0);) ++Kd;
          if (jd[Kd] > (Sd[Kd] || 0) && --Cd, (vd = null == Wd ? Wd = md.precision : Pd ? Wd + (Bd(pd) - Bd(Nd)) + 1 : Wd) < 0) return new md(0);
          if (vd = vd / 7 + 2 | 0, Kd = 0, 1 == Md)
            for (od = 0, jd = jd[0], vd++;
              (Kd < sd || od) && vd--; Kd++) xd = od * Ld + (Sd[Kd] || 0), ed[Kd] = xd / jd | 0, od = xd % jd | 0;
          else {
            for ((od = Ld / (jd[0] + 1) | 0) > 1 && (jd = dd(jd, od), Sd = dd(Sd, od), Md = jd.length, sd = Sd.length), qd = Md, Id = (Rd = Sd.slice(0, Md)).length; Id < Md;) Rd[Id++] = 0;
            (Fd = jd.slice()).unshift(0), ad = jd[0], jd[1] >= Ld / 2 && ++ad;
            do {
              od = 0, (Zd = Jd(jd, Rd, Md, Id)) < 0 ? (Gd = Rd[0], Md != Id && (Gd = Gd * Ld + (Rd[1] || 0)), (od = Gd / ad | 0) > 1 ? (od >= Ld && (od = Ld - 1), 1 == (Zd = Jd(ld = dd(jd, od), Rd, Qd = ld.length, Id = Rd.length)) && (od--, kd(ld, Md < Qd ? Fd : jd, Qd))) : (0 == od && (Zd = od = 1), ld = jd.slice()), (Qd = ld.length) < Id && ld.unshift(0), kd(Rd, ld, Id), -1 == Zd && (Zd = Jd(jd, Rd, Md, Id = Rd.length)) < 1 && (od++, kd(Rd, Md < Id ? Fd : jd, Id)), Id = Rd.length) : 0 === Zd && (od++, Rd = [0]), ed[Kd++] = od, Zd && Rd[0] ? Rd[Id++] = Sd[qd] || 0 : (Rd = [Sd[qd]], Id = 1)
            } while ((qd++ < sd || void 0 !== Rd[0]) && vd--)
          }
          return ed[0] || ed.shift(), Od.e = Cd, Yd(Od, Pd ? Wd + Bd(Od) + 1 : Wd)
        }
      }();

      function qd(dd, Jd) {
        var kd, pd, Wd, Pd, gd, Cd = 0,
          od = 0,
          Qd = dd.constructor,
          Ld = Qd.precision;
        if (Bd(dd) > 16) throw Error(Kd + Bd(dd));
        if (!dd.s) return new Qd(Nd);
        for (null == Jd ? (Zd = !1, gd = Ld) : gd = Jd, Pd = new Qd(.03125); dd.abs().gte(.1);) dd = dd.times(Pd), od += 5;
        for (gd += Math.log(ld(2, od)) / Math.LN10 * 2 + 5 | 0, kd = pd = Wd = new Qd(Nd), Qd.precision = gd;;) {
          if (pd = Yd(pd.times(dd), gd), kd = kd.times(++Cd), vd((Pd = Wd.plus(xd(pd, kd, gd))).d).slice(0, gd) === vd(Wd.d).slice(0, gd)) {
            for (; od--;) Wd = Yd(Wd.times(Wd), gd);
            return Qd.precision = Ld, null == Jd ? (Zd = !0, Yd(Wd, Ld)) : Wd
          }
          Wd = Pd
        }
      }

      function Bd(dd) {
        for (var Jd = 7 * dd.e, kd = dd.d[0]; kd >= 10; kd /= 10) Jd++;
        return Jd
      }

      function sd(dd, Jd, kd) {
        if (Jd > dd.LN10.sd()) throw Zd = !0, kd && (dd.precision = kd), Error(gd + "LN10 precision limit exceeded");
        return Yd(new dd(dd.LN10), Jd)
      }

      function ad(dd) {
        for (var Jd = ""; dd--;) Jd += "0";
        return Jd
      }

      function Md(dd, Jd) {
        var kd, pd, Wd, Pd, Cd, Kd, od, ld, Qd, Ld = 1,
          Od = dd,
          ed = Od.d,
          Rd = Od.constructor,
          Id = Rd.precision;
        if (Od.s < 1) throw Error(gd + (Od.s ? "NaN" : "-Infinity"));
        if (Od.eq(Nd)) return new Rd(0);
        if (null == Jd ? (Zd = !1, ld = Id) : ld = Jd, Od.eq(10)) return null == Jd && (Zd = !0), sd(Rd, ld);
        if (ld += 10, Rd.precision = ld, pd = (kd = vd(ed)).charAt(0), Pd = Bd(Od), !(Math.abs(Pd) < 15e14)) return od = sd(Rd, ld + 2, Id).times(Pd + ""), Od = Md(new Rd(pd + "." + kd.slice(1)), ld - 10).plus(od), Rd.precision = Id, null == Jd ? (Zd = !0, Yd(Od, Id)) : Od;
        for (; pd < 7 && 1 != pd || 1 == pd && kd.charAt(1) > 3;) pd = (kd = vd((Od = Od.times(dd)).d)).charAt(0), Ld++;
        for (Pd = Bd(Od), pd > 1 ? (Od = new Rd("0." + kd), Pd++) : Od = new Rd(pd + "." + kd.slice(1)), Kd = Cd = Od = xd(Od.minus(Nd), Od.plus(Nd), ld), Qd = Yd(Od.times(Od), ld), Wd = 3;;) {
          if (Cd = Yd(Cd.times(Qd), ld), vd((od = Kd.plus(xd(Cd, new Rd(Wd), ld))).d).slice(0, ld) === vd(Kd.d).slice(0, ld)) return Kd = Kd.times(2), 0 !== Pd && (Kd = Kd.plus(sd(Rd, ld + 2, Id).times(Pd + ""))), Kd = xd(Kd, new Rd(Ld), ld), Rd.precision = Id, null == Jd ? (Zd = !0, Yd(Kd, Id)) : Kd;
          Kd = od, Wd += 2
        }
      }

      function Fd(dd, Jd) {
        var kd, pd, Nd;
        for ((kd = Jd.indexOf(".")) > -1 && (Jd = Jd.replace(".", "")), (pd = Jd.search(/e/i)) > 0 ? (kd < 0 && (kd = pd), kd += +Jd.slice(pd + 1), Jd = Jd.substring(0, pd)) : kd < 0 && (kd = Jd.length), pd = 0; 48 === Jd.charCodeAt(pd);) ++pd;
        for (Nd = Jd.length; 48 === Jd.charCodeAt(Nd - 1);) --Nd;
        if (Jd = Jd.slice(pd, Nd)) {
          if (Nd -= pd, kd = kd - pd - 1, dd.e = od(kd / 7), dd.d = [], pd = (kd + 1) % 7, kd < 0 && (pd += 7), pd < Nd) {
            for (pd && dd.d.push(+Jd.slice(0, pd)), Nd -= 7; pd < Nd;) dd.d.push(+Jd.slice(pd, pd += 7));
            pd = 7 - (Jd = Jd.slice(pd)).length
          } else pd -= Nd;
          for (; pd--;) Jd += "0";
          if (dd.d.push(+Jd), Zd && (dd.e > ed || dd.e < -ed)) throw Error(Kd + kd)
        } else dd.s = 0, dd.e = 0, dd.d = [0];
        return dd
      }

      function Yd(dd, Jd, kd) {
        var pd, Nd, Wd, Pd, gd, Cd, Qd, Od, Rd = dd.d;
        for (Pd = 1, Wd = Rd[0]; Wd >= 10; Wd /= 10) Pd++;
        if ((pd = Jd - Pd) < 0) pd += 7, Nd = Jd, Qd = Rd[Od = 0];
        else {
          if ((Od = Math.ceil((pd + 1) / 7)) >= (Wd = Rd.length)) return dd;
          for (Qd = Wd = Rd[Od], Pd = 1; Wd >= 10; Wd /= 10) Pd++;
          Nd = (pd %= 7) - 7 + Pd
        }
        if (void 0 !== kd && (gd = Qd / (Wd = ld(10, Pd - Nd - 1)) % 10 | 0, Cd = Jd < 0 || void 0 !== Rd[Od + 1] || Qd % Wd, Cd = kd < 4 ? (gd || Cd) && (0 == kd || kd == (dd.s < 0 ? 3 : 2)) : gd > 5 || 5 == gd && (4 == kd || Cd || 6 == kd && (pd > 0 ? Nd > 0 ? Qd / ld(10, Pd - Nd) : 0 : Rd[Od - 1]) % 10 & 1 || kd == (dd.s < 0 ? 8 : 7))), Jd < 1 || !Rd[0]) return Cd ? (Wd = Bd(dd), Rd.length = 1, Jd = Jd - Wd - 1, Rd[0] = ld(10, (7 - Jd % 7) % 7), dd.e = od(-Jd / 7) || 0) : (Rd.length = 1, Rd[0] = dd.e = dd.s = 0), dd;
        if (0 == pd ? (Rd.length = Od, Wd = 1, Od--) : (Rd.length = Od + 1, Wd = ld(10, 7 - pd), Rd[Od] = Nd > 0 ? (Qd / ld(10, Pd - Nd) % ld(10, Nd) | 0) * Wd : 0), Cd)
          for (;;) {
            if (0 == Od) {
              (Rd[0] += Wd) == Ld && (Rd[0] = 1, ++dd.e);
              break
            }
            if (Rd[Od] += Wd, Rd[Od] != Ld) break;
            Rd[Od--] = 0, Wd = 1
          }
        for (pd = Rd.length; 0 === Rd[--pd];) Rd.pop();
        if (Zd && (dd.e > ed || dd.e < -ed)) throw Error(Kd + Bd(dd));
        return dd
      }

      function md(dd, Jd) {
        var kd, pd, Nd, Wd, Pd, gd, Cd, Kd, od, ld, Qd = dd.constructor,
          Od = Qd.precision;
        if (!dd.s || !Jd.s) return Jd.s ? Jd.s = -Jd.s : Jd = new Qd(dd), Zd ? Yd(Jd, Od) : Jd;
        if (Cd = dd.d, ld = Jd.d, pd = Jd.e, Kd = dd.e, Cd = Cd.slice(), Pd = Kd - pd) {
          for ((od = Pd < 0) ? (kd = Cd, Pd = -Pd, gd = ld.length) : (kd = ld, pd = Kd, gd = Cd.length), Pd > (Nd = Math.max(Math.ceil(Od / 7), gd) + 2) && (Pd = Nd, kd.length = 1), kd.reverse(), Nd = Pd; Nd--;) kd.push(0);
          kd.reverse()
        } else {
          for ((od = (Nd = Cd.length) < (gd = ld.length)) && (gd = Nd), Nd = 0; Nd < gd; Nd++)
            if (Cd[Nd] != ld[Nd]) {
              od = Cd[Nd] < ld[Nd];
              break
            } Pd = 0
        }
        for (od && (kd = Cd, Cd = ld, ld = kd, Jd.s = -Jd.s), gd = Cd.length, Nd = ld.length - gd; Nd > 0; --Nd) Cd[gd++] = 0;
        for (Nd = ld.length; Nd > Pd;) {
          if (Cd[--Nd] < ld[Nd]) {
            for (Wd = Nd; Wd && 0 === Cd[--Wd];) Cd[Wd] = Ld - 1;
            --Cd[Wd], Cd[Nd] += Ld
          }
          Cd[Nd] -= ld[Nd]
        }
        for (; 0 === Cd[--gd];) Cd.pop();
        for (; 0 === Cd[0]; Cd.shift()) --pd;
        return Cd[0] ? (Jd.d = Cd, Jd.e = pd, Zd ? Yd(Jd, Od) : Jd) : new Qd(0)
      }

      function bd(dd, Jd, kd) {
        var pd, Nd = Bd(dd),
          Wd = vd(dd.d),
          Pd = Wd.length;
        return Jd ? (kd && (pd = kd - Pd) > 0 ? Wd = Wd.charAt(0) + "." + Wd.slice(1) + ad(pd) : Pd > 1 && (Wd = Wd.charAt(0) + "." + Wd.slice(1)), Wd = Wd + (Nd < 0 ? "e" : "e+") + Nd) : Nd < 0 ? (Wd = "0." + ad(-Nd - 1) + Wd, kd && (pd = kd - Pd) > 0 && (Wd += ad(pd))) : Nd >= Pd ? (Wd += ad(Nd + 1 - Pd), kd && (pd = kd - Nd - 1) > 0 && (Wd = Wd + "." + ad(pd))) : ((pd = Nd + 1) < Pd && (Wd = Wd.slice(0, pd) + "." + Wd.slice(pd)), kd && (pd = kd - Pd) > 0 && (Nd + 1 === Pd && (Wd += "."), Wd += ad(pd))), dd.s < 0 ? "-" + Wd : Wd
      }

      function Sd(dd, Jd) {
        if (dd.length > Jd) return dd.length = Jd, !0
      }

      function jd(dd) {
        if (!dd || "object" !== typeof dd) throw Error(gd + "Object expected");
        var Jd, kd, pd, Nd = ["precision", 1, Wd, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
        for (Jd = 0; Jd < Nd.length; Jd += 3)
          if (void 0 !== (pd = dd[kd = Nd[Jd]])) {
            if (!(od(pd) === pd && pd >= Nd[Jd + 1] && pd <= Nd[Jd + 2])) throw Error(Cd + kd + ": " + pd);
            this[kd] = pd
          } if (void 0 !== (pd = dd[kd = "LN10"])) {
          if (pd != Math.LN10) throw Error(Cd + kd + ": " + pd);
          this[kd] = new this(pd)
        }
        return this
      }
      Pd = function dd(Jd) {
        var kd, pd, Nd;

        function Wd(dd) {
          var Jd = this;
          if (!(Jd instanceof Wd)) return new Wd(dd);
          if (Jd.constructor = Wd, dd instanceof Wd) return Jd.s = dd.s, Jd.e = dd.e, void(Jd.d = (dd = dd.d) ? dd.slice() : dd);
          if ("number" === typeof dd) {
            if (0 * dd !== 0) throw Error(Cd + dd);
            if (dd > 0) Jd.s = 1;
            else {
              if (!(dd < 0)) return Jd.s = 0, Jd.e = 0, void(Jd.d = [0]);
              dd = -dd, Jd.s = -1
            }
            return dd === ~~dd && dd < 1e7 ? (Jd.e = 0, void(Jd.d = [dd])) : Fd(Jd, dd.toString())
          }
          if ("string" !== typeof dd) throw Error(Cd + dd);
          if (45 === dd.charCodeAt(0) ? (dd = dd.slice(1), Jd.s = -1) : Jd.s = 1, !Qd.test(dd)) throw Error(Cd + dd);
          Fd(Jd, dd)
        }
        if (Wd.prototype = Rd, Wd.ROUND_UP = 0, Wd.ROUND_DOWN = 1, Wd.ROUND_CEIL = 2, Wd.ROUND_FLOOR = 3, Wd.ROUND_HALF_UP = 4, Wd.ROUND_HALF_DOWN = 5, Wd.ROUND_HALF_EVEN = 6, Wd.ROUND_HALF_CEIL = 7, Wd.ROUND_HALF_FLOOR = 8, Wd.clone = dd, Wd.config = Wd.set = jd, void 0 === Jd && (Jd = {}), Jd)
          for (Nd = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], kd = 0; kd < Nd.length;) Jd.hasOwnProperty(pd = Nd[kd++]) || (Jd[pd] = this[pd]);
        return Wd.config(Jd), Wd
      }(Pd), Pd.default = Pd.Decimal = Pd, Nd = new Pd(1), void 0 === (pd = function() {
        return Pd
      }.call(Jd, kd, Jd, dd)) || (dd.exports = pd)
    }()
  },
  5642: (dd, Jd, kd) => {
    var pd = kd(5124)(kd(4968), "DataView");
    dd.exports = pd
  },
  5102: (dd, Jd, kd) => {
    var pd = kd(5109),
      Nd = kd(5153),
      Wd = kd(5160),
      Pd = kd(5168),
      Zd = kd(5173);

    function gd(dd) {
      var Jd = -1,
        kd = null == dd ? 0 : dd.length;
      for (this.clear(); ++Jd < kd;) {
        var pd = dd[Jd];
        this.set(pd[0], pd[1])
      }
    }
    gd.prototype.clear = pd, gd.prototype.delete = Nd, gd.prototype.get = Wd, gd.prototype.has = Pd, gd.prototype.set = Zd, dd.exports = gd
  },
  5182: (dd, Jd, kd) => {
    var pd = kd(5187),
      Nd = kd(5196),
      Wd = kd(5211),
      Pd = kd(5217),
      Zd = kd(5219);

    function gd(dd) {
      var Jd = -1,
        kd = null == dd ? 0 : dd.length;
      for (this.clear(); ++Jd < kd;) {
        var pd = dd[Jd];
        this.set(pd[0], pd[1])
      }
    }
    gd.prototype.clear = pd, gd.prototype.delete = Nd, gd.prototype.get = Wd, gd.prototype.has = Pd, gd.prototype.set = Zd, dd.exports = gd
  },
  5223: (dd, Jd, kd) => {
    var pd = kd(5124)(kd(4968), "Map");
    dd.exports = pd
  },
  5090: (dd, Jd, kd) => {
    var pd = kd(5093),
      Nd = kd(5229),
      Wd = kd(5248),
      Pd = kd(5254),
      Zd = kd(5260);

    function gd(dd) {
      var Jd = -1,
        kd = null == dd ? 0 : dd.length;
      for (this.clear(); ++Jd < kd;) {
        var pd = dd[Jd];
        this.set(pd[0], pd[1])
      }
    }
    gd.prototype.clear = pd, gd.prototype.delete = Nd, gd.prototype.get = Wd, gd.prototype.has = Pd, gd.prototype.set = Zd, dd.exports = gd
  },
  5647: (dd, Jd, kd) => {
    var pd = kd(5124)(kd(4968), "Promise");
    dd.exports = pd
  },
  5652: (dd, Jd, kd) => {
    var pd = kd(5124)(kd(4968), "Set");
    dd.exports = pd
  },
  5492: (dd, Jd, kd) => {
    var pd = kd(5090),
      Nd = kd(5500),
      Wd = kd(5503);

    function Pd(dd) {
      var Jd = -1,
        kd = null == dd ? 0 : dd.length;
      for (this.__data__ = new pd; ++Jd < kd;) this.add(dd[Jd])
    }
    Pd.prototype.add = Pd.prototype.push = Nd, Pd.prototype.has = Wd, dd.exports = Pd
  },
  5447: (dd, Jd, kd) => {
    var pd = kd(5182),
      Nd = kd(5452),
      Wd = kd(5457),
      Pd = kd(5460),
      Zd = kd(5463),
      gd = kd(5468);

    function Cd(dd) {
      var Jd = this.__data__ = new pd(dd);
      this.size = Jd.size
    }
    Cd.prototype.clear = Nd, Cd.prototype.delete = Wd, Cd.prototype.get = Pd, Cd.prototype.has = Zd, Cd.prototype.set = gd, dd.exports = Cd
  },
  5010: (dd, Jd, kd) => {
    var pd = kd(4968).Symbol;
    dd.exports = pd
  },
  5522: (dd, Jd, kd) => {
    var pd = kd(4968).Uint8Array;
    dd.exports = pd
  },
  5655: (dd, Jd, kd) => {
    var pd = kd(5124)(kd(4968), "WeakMap");
    dd.exports = pd
  },
  5798: dd => {
    dd.exports = function(dd, Jd, kd) {
      switch (kd.length) {
        case 0:
          return dd.call(Jd);
        case 1:
          return dd.call(Jd, kd[0]);
        case 2:
          return dd.call(Jd, kd[0], kd[1]);
        case 3:
          return dd.call(Jd, kd[0], kd[1], kd[2])
      }
      return dd.apply(Jd, kd)
    }
  },
  6133: dd => {
    dd.exports = function(dd, Jd) {
      for (var kd = -1, pd = null == dd ? 0 : dd.length; ++kd < pd;)
        if (!Jd(dd[kd], kd, dd)) return !1;
      return !0
    }
  },
  5557: dd => {
    dd.exports = function(dd, Jd) {
      for (var kd = -1, pd = null == dd ? 0 : dd.length, Nd = 0, Wd = []; ++kd < pd;) {
        var Pd = dd[kd];
        Jd(Pd, kd, dd) && (Wd[Nd++] = Pd)
      }
      return Wd
    }
  },
  5869: (dd, Jd, kd) => {
    var pd = kd(5872);
    dd.exports = function(dd, Jd) {
      return !!(null == dd ? 0 : dd.length) && pd(dd, Jd, 0) > -1
    }
  },
  5897: dd => {
    dd.exports = function(dd, Jd, kd) {
      for (var pd = -1, Nd = null == dd ? 0 : dd.length; ++pd < Nd;)
        if (kd(Jd, dd[pd])) return !0;
      return !1
    }
  },
  5572: (dd, Jd, kd) => {
    var pd = kd(5574),
      Nd = kd(5414),
      Wd = kd(5039),
      Pd = kd(5583),
      Zd = kd(5371),
      gd = kd(5594),
      Cd = Object.prototype.hasOwnProperty;
    dd.exports = function(dd, Jd) {
      var kd = Wd(dd),
        Kd = !kd && Nd(dd),
        od = !kd && !Kd && Pd(dd),
        ld = !kd && !Kd && !od && gd(dd),
        Qd = kd || Kd || od || ld,
        Ld = Qd ? pd(dd.length, String) : [],
        Od = Ld.length;
      for (var ed in dd) !Jd && !Cd.call(dd, ed) || Qd && ("length" == ed || od && ("offset" == ed || "parent" == ed) || ld && ("buffer" == ed || "byteLength" == ed || "byteOffset" == ed) || Zd(ed, Od)) || Ld.push(ed);
      return Ld
    }
  },
  5276: dd => {
    dd.exports = function(dd, Jd) {
      for (var kd = -1, pd = null == dd ? 0 : dd.length, Nd = Array(pd); ++kd < pd;) Nd[kd] = Jd(dd[kd], kd, dd);
      return Nd
    }
  },
  5397: dd => {
    dd.exports = function(dd, Jd) {
      for (var kd = -1, pd = Jd.length, Nd = dd.length; ++kd < pd;) dd[Nd + kd] = Jd[kd];
      return dd
    }
  },
  5506: dd => {
    dd.exports = function(dd, Jd) {
      for (var kd = -1, pd = null == dd ? 0 : dd.length; ++kd < pd;)
        if (Jd(dd[kd], kd, dd)) return !0;
      return !1
    }
  },
  5957: dd => {
    dd.exports = function(dd) {
      return dd.split("")
    }
  },
  5202: (dd, Jd, kd) => {
    var pd = kd(5204);
    dd.exports = function(dd, Jd) {
      for (var kd = dd.length; kd--;)
        if (pd(dd[kd][0], Jd)) return kd;
      return -1
    }
  },
  6123: (dd, Jd, kd) => {
    var pd = kd(5825);
    dd.exports = function(dd, Jd, kd) {
      "__proto__" == Jd && pd ? pd(dd, Jd, {
        configurable: !0,
        enumerable: !0,
        value: kd,
        writable: !0
      }) : dd[Jd] = kd
    }
  },
  5730: (dd, Jd, kd) => {
    var pd = kd(5739),
      Nd = kd(5759)(pd);
    dd.exports = Nd
  },
  6137: (dd, Jd, kd) => {
    var pd = kd(5730);
    dd.exports = function(dd, Jd) {
      var kd = !0;
      return pd(dd, (function(dd, pd, Nd) {
        return kd = !!Jd(dd, pd, Nd)
      })), kd
    }
  },
  6051: (dd, Jd, kd) => {
    var pd = kd(4999);
    dd.exports = function(dd, Jd, kd) {
      for (var Nd = -1, Wd = dd.length; ++Nd < Wd;) {
        var Pd = dd[Nd],
          Zd = Jd(Pd);
        if (null != Zd && (void 0 === gd ? Zd === Zd && !pd(Zd) : kd(Zd, gd))) var gd = Zd,
          Cd = Pd
      }
      return Cd
    }
  },
  5878: dd => {
    dd.exports = function(dd, Jd, kd, pd) {
      for (var Nd = dd.length, Wd = kd + (pd ? 1 : -1); pd ? Wd-- : ++Wd < Nd;)
        if (Jd(dd[Wd], Wd, dd)) return Wd;
      return -1
    }
  },
  5390: (dd, Jd, kd) => {
    var pd = kd(5397),
      Nd = kd(5406);
    dd.exports = function dd(Jd, kd, Wd, Pd, Zd) {
      var gd = -1,
        Cd = Jd.length;
      for (Wd || (Wd = Nd), Zd || (Zd = []); ++gd < Cd;) {
        var Kd = Jd[gd];
        kd > 0 && Wd(Kd) ? kd > 1 ? dd(Kd, kd - 1, Wd, Pd, Zd) : pd(Zd, Kd) : Pd || (Zd[Zd.length] = Kd)
      }
      return Zd
    }
  },
  5748: (dd, Jd, kd) => {
    var pd = kd(5755)();
    dd.exports = pd
  },
  5739: (dd, Jd, kd) => {
    var pd = kd(5748),
      Nd = kd(5568);
    dd.exports = function(dd, Jd) {
      return dd && pd(dd, Jd, Nd)
    }
  },
  5067: (dd, Jd, kd) => {
    var pd = kd(5071),
      Nd = kd(5285);
    dd.exports = function(dd, Jd) {
      for (var kd = 0, Wd = (Jd = pd(Jd, dd)).length; null != dd && kd < Wd;) dd = dd[Nd(Jd[kd++])];
      return kd && kd == Wd ? dd : void 0
    }
  },
  5550: (dd, Jd, kd) => {
    var pd = kd(5397),
      Nd = kd(5039);
    dd.exports = function(dd, Jd, kd) {
      var Wd = Jd(dd);
      return Nd(dd) ? Wd : pd(Wd, kd(dd))
    }
  },
  5002: (dd, Jd, kd) => {
    var pd = kd(5010),
      Nd = kd(5017),
      Wd = kd(5020),
      Pd = pd ? pd.toStringTag : void 0;
    dd.exports = function(dd) {
      return null == dd ? void 0 === dd ? "[object Undefined]" : "[object Null]" : Pd && Pd in Object(dd) ? Nd(dd) : Wd(dd)
    }
  },
  6057: dd => {
    dd.exports = function(dd, Jd) {
      return dd > Jd
    }
  },
  5693: dd => {
    dd.exports = function(dd, Jd) {
      return null != dd && Jd in Object(dd)
    }
  },
  5872: (dd, Jd, kd) => {
    var pd = kd(5878),
      Nd = kd(5884),
      Wd = kd(5888);
    dd.exports = function(dd, Jd, kd) {
      return Jd === Jd ? Wd(dd, Jd, kd) : pd(dd, Nd, kd)
    }
  },
  5416: (dd, Jd, kd) => {
    var pd = kd(5002),
      Nd = kd(5027);
    dd.exports = function(dd) {
      return Nd(dd) && "[object Arguments]" == pd(dd)
    }
  },
  5473: (dd, Jd, kd) => {
    var pd = kd(5481),
      Nd = kd(5027);
    dd.exports = function dd(Jd, kd, Wd, Pd, Zd) {
      return Jd === kd || (null == Jd || null == kd || !Nd(Jd) && !Nd(kd) ? Jd !== Jd && kd !== kd : pd(Jd, kd, Wd, Pd, dd, Zd))
    }
  },
  5481: (dd, Jd, kd) => {
    var pd = kd(5447),
      Nd = kd(5485),
      Wd = kd(5516),
      Pd = kd(5540),
      Zd = kd(5633),
      gd = kd(5039),
      Cd = kd(5583),
      Kd = kd(5594),
      od = "[object Arguments]",
      ld = "[object Array]",
      Qd = "[object Object]",
      Ld = Object.prototype.hasOwnProperty;
    dd.exports = function(dd, Jd, kd, Od, ed, Rd) {
      var Id = gd(dd),
        Gd = gd(Jd),
        vd = Id ? ld : Zd(dd),
        xd = Gd ? ld : Zd(Jd),
        qd = (vd = vd == od ? Qd : vd) == Qd,
        Bd = (xd = xd == od ? Qd : xd) == Qd,
        sd = vd == xd;
      if (sd && Cd(dd)) {
        if (!Cd(Jd)) return !1;
        Id = !0, qd = !1
      }
      if (sd && !qd) return Rd || (Rd = new pd), Id || Kd(dd) ? Nd(dd, Jd, kd, Od, ed, Rd) : Wd(dd, Jd, vd, kd, Od, ed, Rd);
      if (!(1 & kd)) {
        var ad = qd && Ld.call(dd, "__wrapped__"),
          Md = Bd && Ld.call(Jd, "__wrapped__");
        if (ad || Md) {
          var Fd = ad ? dd.value() : dd,
            Yd = Md ? Jd.value() : Jd;
          return Rd || (Rd = new pd), ed(Fd, Yd, kd, Od, Rd)
        }
      }
      return !!sd && (Rd || (Rd = new pd), Pd(dd, Jd, kd, Od, ed, Rd))
    }
  },
  5445: (dd, Jd, kd) => {
    var pd = kd(5447),
      Nd = kd(5473);
    dd.exports = function(dd, Jd, kd, Wd) {
      var Pd = kd.length,
        Zd = Pd,
        gd = !Wd;
      if (null == dd) return !Zd;
      for (dd = Object(dd); Pd--;) {
        var Cd = kd[Pd];
        if (gd && Cd[2] ? Cd[1] !== dd[Cd[0]] : !(Cd[0] in dd)) return !1
      }
      for (; ++Pd < Zd;) {
        var Kd = (Cd = kd[Pd])[0],
          od = dd[Kd],
          ld = Cd[1];
        if (gd && Cd[2]) {
          if (void 0 === od && !(Kd in dd)) return !1
        } else {
          var Qd = new pd;
          if (Wd) var Ld = Wd(od, ld, Kd, dd, Jd, Qd);
          if (!(void 0 === Ld ? Nd(ld, od, 3, Wd, Qd) : Ld)) return !1
        }
      }
      return !0
    }
  },
  5884: dd => {
    dd.exports = function(dd) {
      return dd !== dd
    }
  },
  5128: (dd, Jd, kd) => {
    var pd = kd(5131),
      Nd = kd(5136),
      Wd = kd(4952),
      Pd = kd(5145),
      Zd = /^\[object .+?Constructor\]$/,
      gd = Function.prototype,
      Cd = Object.prototype,
      Kd = gd.toString,
      od = Cd.hasOwnProperty,
      ld = RegExp("^" + Kd.call(od).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    dd.exports = function(dd) {
      return !(!Wd(dd) || Nd(dd)) && (pd(dd) ? ld : Zd).test(Pd(dd))
    }
  },
  5603: (dd, Jd, kd) => {
    var pd = kd(5002),
      Nd = kd(5362),
      Wd = kd(5027),
      Pd = {};
    Pd["[object Float32Array]"] = Pd["[object Float64Array]"] = Pd["[object Int8Array]"] = Pd["[object Int16Array]"] = Pd["[object Int32Array]"] = Pd["[object Uint8Array]"] = Pd["[object Uint8ClampedArray]"] = Pd["[object Uint16Array]"] = Pd["[object Uint32Array]"] = !0, Pd["[object Arguments]"] = Pd["[object Array]"] = Pd["[object ArrayBuffer]"] = Pd["[object Boolean]"] = Pd["[object DataView]"] = Pd["[object Date]"] = Pd["[object Error]"] = Pd["[object Function]"] = Pd["[object Map]"] = Pd["[object Number]"] = Pd["[object Object]"] = Pd["[object RegExp]"] = Pd["[object Set]"] = Pd["[object String]"] = Pd["[object WeakMap]"] = !1, dd.exports = function(dd) {
      return Wd(dd) && Nd(dd.length) && !!Pd[pd(dd)]
    }
  },
  5427: (dd, Jd, kd) => {
    var pd = kd(5436),
      Nd = kd(5682),
      Wd = kd(5706),
      Pd = kd(5039),
      Zd = kd(5708);
    dd.exports = function(dd) {
      return "function" == typeof dd ? dd : null == dd ? Wd : "object" == typeof dd ? Pd(dd) ? Nd(dd[0], dd[1]) : pd(dd) : Zd(dd)
    }
  },
  5617: (dd, Jd, kd) => {
    var pd = kd(5619),
      Nd = kd(5623),
      Wd = Object.prototype.hasOwnProperty;
    dd.exports = function(dd) {
      if (!pd(dd)) return Nd(dd);
      var Jd = [];
      for (var kd in Object(dd)) Wd.call(dd, kd) && "constructor" != kd && Jd.push(kd);
      return Jd
    }
  },
  6066: dd => {
    dd.exports = function(dd, Jd) {
      return dd < Jd
    }
  },
  5728: (dd, Jd, kd) => {
    var pd = kd(5730),
      Nd = kd(5359);
    dd.exports = function(dd, Jd) {
      var kd = -1,
        Wd = Nd(dd) ? Array(dd.length) : [];
      return pd(dd, (function(dd, pd, Nd) {
        Wd[++kd] = Jd(dd, pd, Nd)
      })), Wd
    }
  },
  5436: (dd, Jd, kd) => {
    var pd = kd(5445),
      Nd = kd(5662),
      Wd = kd(5675);
    dd.exports = function(dd) {
      var Jd = Nd(dd);
      return 1 == Jd.length && Jd[0][2] ? Wd(Jd[0][0], Jd[0][1]) : function(kd) {
        return kd === dd || pd(kd, dd, Jd)
      }
    }
  },
  5682: (dd, Jd, kd) => {
    var pd = kd(5473),
      Nd = kd(5064),
      Wd = kd(5688),
      Pd = kd(5073),
      Zd = kd(5668),
      gd = kd(5675),
      Cd = kd(5285);
    dd.exports = function(dd, Jd) {
      return Pd(dd) && Zd(Jd) ? gd(Cd(dd), Jd) : function(kd) {
        var Pd = Nd(kd, dd);
        return void 0 === Pd && Pd === Jd ? Wd(kd, dd) : pd(Jd, Pd, 3)
      }
    }
  },
  5423: (dd, Jd, kd) => {
    var pd = kd(5276),
      Nd = kd(5067),
      Wd = kd(5427),
      Pd = kd(5728),
      Zd = kd(5767),
      gd = kd(5606),
      Cd = kd(5775),
      Kd = kd(5706),
      od = kd(5039);
    dd.exports = function(dd, Jd, kd) {
      Jd = Jd.length ? pd(Jd, (function(dd) {
        return od(dd) ? function(Jd) {
          return Nd(Jd, 1 === dd.length ? dd[0] : dd)
        } : dd
      })) : [Kd];
      var ld = -1;
      Jd = pd(Jd, gd(Wd));
      var Qd = Pd(dd, (function(dd, kd, Nd) {
        return {
          criteria: pd(Jd, (function(Jd) {
            return Jd(dd)
          })),
          index: ++ld,
          value: dd
        }
      }));
      return Zd(Qd, (function(dd, Jd) {
        return Cd(dd, Jd, kd)
      }))
    }
  },
  5712: dd => {
    dd.exports = function(dd) {
      return function(Jd) {
        return null == Jd ? void 0 : Jd[dd]
      }
    }
  },
  5719: (dd, Jd, kd) => {
    var pd = kd(5067);
    dd.exports = function(dd) {
      return function(Jd) {
        return pd(Jd, dd)
      }
    }
  },
  5347: dd => {
    var Jd = Math.ceil,
      kd = Math.max;
    dd.exports = function(dd, pd, Nd, Wd) {
      for (var Pd = -1, Zd = kd(Jd((pd - dd) / (Nd || 1)), 0), gd = Array(Zd); Zd--;) gd[Wd ? Zd : ++Pd] = dd, dd += Nd;
      return gd
    }
  },
  5789: (dd, Jd, kd) => {
    var pd = kd(5706),
      Nd = kd(5796),
      Wd = kd(5801);
    dd.exports = function(dd, Jd) {
      return Wd(Nd(dd, Jd, pd), dd + "")
    }
  },
  5809: (dd, Jd, kd) => {
    var pd = kd(5816),
      Nd = kd(5825),
      Wd = kd(5706),
      Pd = Nd ? function(dd, Jd) {
        return Nd(dd, "toString", {
          configurable: !0,
          enumerable: !1,
          value: pd(Jd),
          writable: !0
        })
      } : Wd;
    dd.exports = Pd
  },
  5937: dd => {
    dd.exports = function(dd, Jd, kd) {
      var pd = -1,
        Nd = dd.length;
      Jd < 0 && (Jd = -Jd > Nd ? 0 : Nd + Jd), (kd = kd > Nd ? Nd : kd) < 0 && (kd += Nd), Nd = Jd > kd ? 0 : kd - Jd >>> 0, Jd >>>= 0;
      for (var Wd = Array(Nd); ++pd < Nd;) Wd[pd] = dd[pd + Jd];
      return Wd
    }
  },
  6201: (dd, Jd, kd) => {
    var pd = kd(5730);
    dd.exports = function(dd, Jd) {
      var kd;
      return pd(dd, (function(dd, pd, Nd) {
        return !(kd = Jd(dd, pd, Nd))
      })), !!kd
    }
  },
  5767: dd => {
    dd.exports = function(dd, Jd) {
      var kd = dd.length;
      for (dd.sort(Jd); kd--;) dd[kd] = dd[kd].value;
      return dd
    }
  },
  5574: dd => {
    dd.exports = function(dd, Jd) {
      for (var kd = -1, pd = Array(dd); ++kd < dd;) pd[kd] = Jd(kd);
      return pd
    }
  },
  5273: (dd, Jd, kd) => {
    var pd = kd(5010),
      Nd = kd(5276),
      Wd = kd(5039),
      Pd = kd(4999),
      Zd = pd ? pd.prototype : void 0,
      gd = Zd ? Zd.toString : void 0;
    dd.exports = function dd(Jd) {
      if ("string" == typeof Jd) return Jd;
      if (Wd(Jd)) return Nd(Jd, dd) + "";
      if (Pd(Jd)) return gd ? gd.call(Jd) : "";
      var kd = Jd + "";
      return "0" == kd && 1 / Jd == -1 / 0 ? "-0" : kd
    }
  },
  4992: (dd, Jd, kd) => {
    var pd = kd(4994),
      Nd = /^\s+/;
    dd.exports = function(dd) {
      return dd ? dd.slice(0, pd(dd) + 1).replace(Nd, "") : dd
    }
  },
  5606: dd => {
    dd.exports = function(dd) {
      return function(Jd) {
        return dd(Jd)
      }
    }
  },
  5864: (dd, Jd, kd) => {
    var pd = kd(5492),
      Nd = kd(5869),
      Wd = kd(5897),
      Pd = kd(5513),
      Zd = kd(5899),
      gd = kd(5538);
    dd.exports = function(dd, Jd, kd) {
      var Cd = -1,
        Kd = Nd,
        od = dd.length,
        ld = !0,
        Qd = [],
        Ld = Qd;
      if (kd) ld = !1, Kd = Wd;
      else if (od >= 200) {
        var Od = Jd ? null : Zd(dd);
        if (Od) return gd(Od);
        ld = !1, Kd = Pd, Ld = new pd
      } else Ld = Jd ? [] : Qd;
      dd: for (; ++Cd < od;) {
        var ed = dd[Cd],
          Rd = Jd ? Jd(ed) : ed;
        if (ed = kd || 0 !== ed ? ed : 0, ld && Rd === Rd) {
          for (var Id = Ld.length; Id--;)
            if (Ld[Id] === Rd) continue dd;
          Jd && Ld.push(Rd), Qd.push(ed)
        } else Kd(Ld, Rd, kd) || (Ld !== Qd && Ld.push(Rd), Qd.push(ed))
      }
      return Qd
    }
  },
  5513: dd => {
    dd.exports = function(dd, Jd) {
      return dd.has(Jd)
    }
  },
  5071: (dd, Jd, kd) => {
    var pd = kd(5039),
      Nd = kd(5073),
      Wd = kd(5075),
      Pd = kd(5268);
    dd.exports = function(dd, Jd) {
      return pd(dd) ? dd : Nd(dd, Jd) ? [dd] : Wd(Pd(dd))
    }
  },
  5933: (dd, Jd, kd) => {
    var pd = kd(5937);
    dd.exports = function(dd, Jd, kd) {
      var Nd = dd.length;
      return kd = void 0 === kd ? Nd : kd, !Jd && kd >= Nd ? dd : pd(dd, Jd, kd)
    }
  },
  5781: (dd, Jd, kd) => {
    var pd = kd(4999);
    dd.exports = function(dd, Jd) {
      if (dd !== Jd) {
        var kd = void 0 !== dd,
          Nd = null === dd,
          Wd = dd === dd,
          Pd = pd(dd),
          Zd = void 0 !== Jd,
          gd = null === Jd,
          Cd = Jd === Jd,
          Kd = pd(Jd);
        if (!gd && !Kd && !Pd && dd > Jd || Pd && Zd && Cd && !gd && !Kd || Nd && Zd && Cd || !kd && Cd || !Wd) return 1;
        if (!Nd && !Pd && !Kd && dd < Jd || Kd && kd && Wd && !Nd && !Pd || gd && kd && Wd || !Zd && Wd || !Cd) return -1
      }
      return 0
    }
  },
  5775: (dd, Jd, kd) => {
    var pd = kd(5781);
    dd.exports = function(dd, Jd, kd) {
      for (var Nd = -1, Wd = dd.criteria, Pd = Jd.criteria, Zd = Wd.length, gd = kd.length; ++Nd < Zd;) {
        var Cd = pd(Wd[Nd], Pd[Nd]);
        if (Cd) return Nd >= gd ? Cd : Cd * ("desc" == kd[Nd] ? -1 : 1)
      }
      return dd.index - Jd.index
    }
  },
  5139: (dd, Jd, kd) => {
    var pd = kd(4968)["__core-js_shared__"];
    dd.exports = pd
  },
  5759: (dd, Jd, kd) => {
    var pd = kd(5359);
    dd.exports = function(dd, Jd) {
      return function(kd, Nd) {
        if (null == kd) return kd;
        if (!pd(kd)) return dd(kd, Nd);
        for (var Wd = kd.length, Pd = Jd ? Wd : -1, Zd = Object(kd);
          (Jd ? Pd-- : ++Pd < Wd) && !1 !== Nd(Zd[Pd], Pd, Zd););
        return kd
      }
    }
  },
  5755: dd => {
    dd.exports = function(dd) {
      return function(Jd, kd, pd) {
        for (var Nd = -1, Wd = Object(Jd), Pd = pd(Jd), Zd = Pd.length; Zd--;) {
          var gd = Pd[dd ? Zd : ++Nd];
          if (!1 === kd(Wd[gd], gd, Wd)) break
        }
        return Jd
      }
    }
  },
  5928: (dd, Jd, kd) => {
    var pd = kd(5933),
      Nd = kd(5946),
      Wd = kd(5954),
      Pd = kd(5268);
    dd.exports = function(dd) {
      return function(Jd) {
        Jd = Pd(Jd);
        var kd = Nd(Jd) ? Wd(Jd) : void 0,
          Zd = kd ? kd[0] : Jd.charAt(0),
          gd = kd ? pd(kd, 1).join("") : Jd.slice(1);
        return Zd[dd]() + gd
      }
    }
  },
  6216: (dd, Jd, kd) => {
    var pd = kd(5427),
      Nd = kd(5359),
      Wd = kd(5568);
    dd.exports = function(dd) {
      return function(Jd, kd, Pd) {
        var Zd = Object(Jd);
        if (!Nd(Jd)) {
          var gd = pd(kd, 3);
          Jd = Wd(Jd), kd = function(dd) {
            return gd(Zd[dd], dd, Zd)
          }
        }
        var Cd = dd(Jd, kd, Pd);
        return Cd > -1 ? Zd[gd ? Jd[Cd] : Cd] : void 0
      }
    }
  },
  5345: (dd, Jd, kd) => {
    var pd = kd(5347),
      Nd = kd(5356),
      Wd = kd(5380);
    dd.exports = function(dd) {
      return function(Jd, kd, Pd) {
        return Pd && "number" != typeof Pd && Nd(Jd, kd, Pd) && (kd = Pd = void 0), Jd = Wd(Jd), void 0 === kd ? (kd = Jd, Jd = 0) : kd = Wd(kd), Pd = void 0 === Pd ? Jd < kd ? 1 : -1 : Wd(Pd), pd(Jd, kd, Pd, dd)
      }
    }
  },
  5899: (dd, Jd, kd) => {
    var pd = kd(5652),
      Nd = kd(5906),
      Wd = kd(5538),
      Pd = pd && 1 / Wd(new pd([, -0]))[1] == 1 / 0 ? function(dd) {
        return new pd(dd)
      } : Nd;
    dd.exports = Pd
  },
  5825: (dd, Jd, kd) => {
    var pd = kd(5124),
      Nd = function() {
        try {
          var dd = pd(Object, "defineProperty");
          return dd({}, "", {}), dd
        } catch (Jd) {}
      }();
    dd.exports = Nd
  },
  5485: (dd, Jd, kd) => {
    var pd = kd(5492),
      Nd = kd(5506),
      Wd = kd(5513);
    dd.exports = function(dd, Jd, kd, Pd, Zd, gd) {
      var Cd = 1 & kd,
        Kd = dd.length,
        od = Jd.length;
      if (Kd != od && !(Cd && od > Kd)) return !1;
      var ld = gd.get(dd),
        Qd = gd.get(Jd);
      if (ld && Qd) return ld == Jd && Qd == dd;
      var Ld = -1,
        Od = !0,
        ed = 2 & kd ? new pd : void 0;
      for (gd.set(dd, Jd), gd.set(Jd, dd); ++Ld < Kd;) {
        var Rd = dd[Ld],
          Id = Jd[Ld];
        if (Pd) var Gd = Cd ? Pd(Id, Rd, Ld, Jd, dd, gd) : Pd(Rd, Id, Ld, dd, Jd, gd);
        if (void 0 !== Gd) {
          if (Gd) continue;
          Od = !1;
          break
        }
        if (ed) {
          if (!Nd(Jd, (function(dd, Jd) {
              if (!Wd(ed, Jd) && (Rd === dd || Zd(Rd, dd, kd, Pd, gd))) return ed.push(Jd)
            }))) {
            Od = !1;
            break
          }
        } else if (Rd !== Id && !Zd(Rd, Id, kd, Pd, gd)) {
          Od = !1;
          break
        }
      }
      return gd.delete(dd), gd.delete(Jd), Od
    }
  },
  5516: (dd, Jd, kd) => {
    var pd = kd(5010),
      Nd = kd(5522),
      Wd = kd(5204),
      Pd = kd(5485),
      Zd = kd(5530),
      gd = kd(5538),
      Cd = pd ? pd.prototype : void 0,
      Kd = Cd ? Cd.valueOf : void 0;
    dd.exports = function(dd, Jd, kd, pd, Cd, od, ld) {
      switch (kd) {
        case "[object DataView]":
          if (dd.byteLength != Jd.byteLength || dd.byteOffset != Jd.byteOffset) return !1;
          dd = dd.buffer, Jd = Jd.buffer;
        case "[object ArrayBuffer]":
          return !(dd.byteLength != Jd.byteLength || !od(new Nd(dd), new Nd(Jd)));
        case "[object Boolean]":
        case "[object Date]":
        case "[object Number]":
          return Wd(+dd, +Jd);
        case "[object Error]":
          return dd.name == Jd.name && dd.message == Jd.message;
        case "[object RegExp]":
        case "[object String]":
          return dd == Jd + "";
        case "[object Map]":
          var Qd = Zd;
        case "[object Set]":
          var Ld = 1 & pd;
          if (Qd || (Qd = gd), dd.size != Jd.size && !Ld) return !1;
          var Od = ld.get(dd);
          if (Od) return Od == Jd;
          pd |= 2, ld.set(dd, Jd);
          var ed = Pd(Qd(dd), Qd(Jd), pd, Cd, od, ld);
          return ld.delete(dd), ed;
        case "[object Symbol]":
          if (Kd) return Kd.call(dd) == Kd.call(Jd)
      }
      return !1
    }
  },
  5540: (dd, Jd, kd) => {
    var pd = kd(5545),
      Nd = Object.prototype.hasOwnProperty;
    dd.exports = function(dd, Jd, kd, Wd, Pd, Zd) {
      var gd = 1 & kd,
        Cd = pd(dd),
        Kd = Cd.length;
      if (Kd != pd(Jd).length && !gd) return !1;
      for (var od = Kd; od--;) {
        var ld = Cd[od];
        if (!(gd ? ld in Jd : Nd.call(Jd, ld))) return !1
      }
      var Qd = Zd.get(dd),
        Ld = Zd.get(Jd);
      if (Qd && Ld) return Qd == Jd && Ld == dd;
      var Od = !0;
      Zd.set(dd, Jd), Zd.set(Jd, dd);
      for (var ed = gd; ++od < Kd;) {
        var Rd = dd[ld = Cd[od]],
          Id = Jd[ld];
        if (Wd) var Gd = gd ? Wd(Id, Rd, ld, Jd, dd, Zd) : Wd(Rd, Id, ld, dd, Jd, Zd);
        if (!(void 0 === Gd ? Rd === Id || Pd(Rd, Id, kd, Wd, Zd) : Gd)) {
          Od = !1;
          break
        }
        ed || (ed = "constructor" == ld)
      }
      if (Od && !ed) {
        var vd = dd.constructor,
          xd = Jd.constructor;
        vd == xd || !("constructor" in dd) || !("constructor" in Jd) || "function" == typeof vd && vd instanceof vd && "function" == typeof xd && xd instanceof xd || (Od = !1)
      }
      return Zd.delete(dd), Zd.delete(Jd), Od
    }
  },
  4975: (dd, Jd, kd) => {
    var pd = "object" == typeof kd.g && kd.g && kd.g.Object === Object && kd.g;
    dd.exports = pd
  },
  5545: (dd, Jd, kd) => {
    var pd = kd(5550),
      Nd = kd(5552),
      Wd = kd(5568);
    dd.exports = function(dd) {
      return pd(dd, Wd, Nd)
    }
  },
  5235: (dd, Jd, kd) => {
    var pd = kd(5243);
    dd.exports = function(dd, Jd) {
      var kd = dd.__data__;
      return pd(Jd) ? kd["string" == typeof Jd ? "string" : "hash"] : kd.map
    }
  },
  5662: (dd, Jd, kd) => {
    var pd = kd(5668),
      Nd = kd(5568);
    dd.exports = function(dd) {
      for (var Jd = Nd(dd), kd = Jd.length; kd--;) {
        var Wd = Jd[kd],
          Pd = dd[Wd];
        Jd[kd] = [Wd, Pd, pd(Pd)]
      }
      return Jd
    }
  },
  5124: (dd, Jd, kd) => {
    var pd = kd(5128),
      Nd = kd(5150);
    dd.exports = function(dd, Jd) {
      var kd = Nd(dd, Jd);
      return pd(kd) ? kd : void 0
    }
  },
  6170: (dd, Jd, kd) => {
    var pd = kd(5629)(Object.getPrototypeOf, Object);
    dd.exports = pd
  },
  5017: (dd, Jd, kd) => {
    var pd = kd(5010),
      Nd = Object.prototype,
      Wd = Nd.hasOwnProperty,
      Pd = Nd.toString,
      Zd = pd ? pd.toStringTag : void 0;
    dd.exports = function(dd) {
      var Jd = Wd.call(dd, Zd),
        kd = dd[Zd];
      try {
        dd[Zd] = void 0;
        var pd = !0
      } catch (gd) {}
      var Nd = Pd.call(dd);
      return pd && (Jd ? dd[Zd] = kd : delete dd[Zd]), Nd
    }
  },
  5552: (dd, Jd, kd) => {
    var pd = kd(5557),
      Nd = kd(5566),
      Wd = Object.prototype.propertyIsEnumerable,
      Pd = Object.getOwnPropertySymbols,
      Zd = Pd ? function(dd) {
        return null == dd ? [] : (dd = Object(dd), pd(Pd(dd), (function(Jd) {
          return Wd.call(dd, Jd)
        })))
      } : Nd;
    dd.exports = Zd
  },
  5633: (dd, Jd, kd) => {
    var pd = kd(5642),
      Nd = kd(5223),
      Wd = kd(5647),
      Pd = kd(5652),
      Zd = kd(5655),
      gd = kd(5002),
      Cd = kd(5145),
      Kd = "[object Map]",
      od = "[object Promise]",
      ld = "[object Set]",
      Qd = "[object WeakMap]",
      Ld = "[object DataView]",
      Od = Cd(pd),
      ed = Cd(Nd),
      Rd = Cd(Wd),
      Id = Cd(Pd),
      Gd = Cd(Zd),
      vd = gd;
    (pd && vd(new pd(new ArrayBuffer(1))) != Ld || Nd && vd(new Nd) != Kd || Wd && vd(Wd.resolve()) != od || Pd && vd(new Pd) != ld || Zd && vd(new Zd) != Qd) && (vd = function(dd) {
      var Jd = gd(dd),
        kd = "[object Object]" == Jd ? dd.constructor : void 0,
        pd = kd ? Cd(kd) : "";
      if (pd) switch (pd) {
        case Od:
          return Ld;
        case ed:
          return Kd;
        case Rd:
          return od;
        case Id:
          return ld;
        case Gd:
          return Qd
      }
      return Jd
    }), dd.exports = vd
  },
  5150: dd => {
    dd.exports = function(dd, Jd) {
      return null == dd ? void 0 : dd[Jd]
    }
  },
  5698: (dd, Jd, kd) => {
    var pd = kd(5071),
      Nd = kd(5414),
      Wd = kd(5039),
      Pd = kd(5371),
      Zd = kd(5362),
      gd = kd(5285);
    dd.exports = function(dd, Jd, kd) {
      for (var Cd = -1, Kd = (Jd = pd(Jd, dd)).length, od = !1; ++Cd < Kd;) {
        var ld = gd(Jd[Cd]);
        if (!(od = null != dd && kd(dd, ld))) break;
        dd = dd[ld]
      }
      return od || ++Cd != Kd ? od : !!(Kd = null == dd ? 0 : dd.length) && Zd(Kd) && Pd(ld, Kd) && (Wd(dd) || Nd(dd))
    }
  },
  5946: dd => {
    var Jd = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
    dd.exports = function(dd) {
      return Jd.test(dd)
    }
  },
  5109: (dd, Jd, kd) => {
    var pd = kd(5116);
    dd.exports = function() {
      this.__data__ = pd ? pd(null) : {}, this.size = 0
    }
  },
  5153: dd => {
    dd.exports = function(dd) {
      var Jd = this.has(dd) && delete this.__data__[dd];
      return this.size -= Jd ? 1 : 0, Jd
    }
  },
  5160: (dd, Jd, kd) => {
    var pd = kd(5116),
      Nd = Object.prototype.hasOwnProperty;
    dd.exports = function(dd) {
      var Jd = this.__data__;
      if (pd) {
        var kd = Jd[dd];
        return "__lodash_hash_undefined__" === kd ? void 0 : kd
      }
      return Nd.call(Jd, dd) ? Jd[dd] : void 0
    }
  },
  5168: (dd, Jd, kd) => {
    var pd = kd(5116),
      Nd = Object.prototype.hasOwnProperty;
    dd.exports = function(dd) {
      var Jd = this.__data__;
      return pd ? void 0 !== Jd[dd] : Nd.call(Jd, dd)
    }
  },
  5173: (dd, Jd, kd) => {
    var pd = kd(5116);
    dd.exports = function(dd, Jd) {
      var kd = this.__data__;
      return this.size += this.has(dd) ? 0 : 1, kd[dd] = pd && void 0 === Jd ? "__lodash_hash_undefined__" : Jd, this
    }
  },
  5406: (dd, Jd, kd) => {
    var pd = kd(5010),
      Nd = kd(5414),
      Wd = kd(5039),
      Pd = pd ? pd.isConcatSpreadable : void 0;
    dd.exports = function(dd) {
      return Wd(dd) || Nd(dd) || !!(Pd && dd && dd[Pd])
    }
  },
  5371: dd => {
    var Jd = /^(?:0|[1-9]\d*)$/;
    dd.exports = function(dd, kd) {
      var pd = typeof dd;
      return !!(kd = null == kd ? 9007199254740991 : kd) && ("number" == pd || "symbol" != pd && Jd.test(dd)) && dd > -1 && dd % 1 == 0 && dd < kd
    }
  },
  5356: (dd, Jd, kd) => {
    var pd = kd(5204),
      Nd = kd(5359),
      Wd = kd(5371),
      Pd = kd(4952);
    dd.exports = function(dd, Jd, kd) {
      if (!Pd(kd)) return !1;
      var Zd = typeof Jd;
      return !!("number" == Zd ? Nd(kd) && Wd(Jd, kd.length) : "string" == Zd && Jd in kd) && pd(kd[Jd], dd)
    }
  },
  5073: (dd, Jd, kd) => {
    var pd = kd(5039),
      Nd = kd(4999),
      Wd = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      Pd = /^\w*$/;
    dd.exports = function(dd, Jd) {
      if (pd(dd)) return !1;
      var kd = typeof dd;
      return !("number" != kd && "symbol" != kd && "boolean" != kd && null != dd && !Nd(dd)) || (Pd.test(dd) || !Wd.test(dd) || null != Jd && dd in Object(Jd))
    }
  },
  5243: dd => {
    dd.exports = function(dd) {
      var Jd = typeof dd;
      return "string" == Jd || "number" == Jd || "symbol" == Jd || "boolean" == Jd ? "__proto__" !== dd : null === dd
    }
  },
  5136: (dd, Jd, kd) => {
    var pd = kd(5139),
      Nd = function() {
        var dd = /[^.]+$/.exec(pd && pd.keys && pd.keys.IE_PROTO || "");
        return dd ? "Symbol(src)_1." + dd : ""
      }();
    dd.exports = function(dd) {
      return !!Nd && Nd in dd
    }
  },
  5619: dd => {
    var Jd = Object.prototype;
    dd.exports = function(dd) {
      var kd = dd && dd.constructor;
      return dd === ("function" == typeof kd && kd.prototype || Jd)
    }
  },
  5668: (dd, Jd, kd) => {
    var pd = kd(4952);
    dd.exports = function(dd) {
      return dd === dd && !pd(dd)
    }
  },
  5187: dd => {
    dd.exports = function() {
      this.__data__ = [], this.size = 0
    }
  },
  5196: (dd, Jd, kd) => {
    var pd = kd(5202),
      Nd = Array.prototype.splice;
    dd.exports = function(dd) {
      var Jd = this.__data__,
        kd = pd(Jd, dd);
      return !(kd < 0) && (kd == Jd.length - 1 ? Jd.pop() : Nd.call(Jd, kd, 1), --this.size, !0)
    }
  },
  5211: (dd, Jd, kd) => {
    var pd = kd(5202);
    dd.exports = function(dd) {
      var Jd = this.__data__,
        kd = pd(Jd, dd);
      return kd < 0 ? void 0 : Jd[kd][1]
    }
  },
  5217: (dd, Jd, kd) => {
    var pd = kd(5202);
    dd.exports = function(dd) {
      return pd(this.__data__, dd) > -1
    }
  },
  5219: (dd, Jd, kd) => {
    var pd = kd(5202);
    dd.exports = function(dd, Jd) {
      var kd = this.__data__,
        Nd = pd(kd, dd);
      return Nd < 0 ? (++this.size, kd.push([dd, Jd])) : kd[Nd][1] = Jd, this
    }
  },
  5093: (dd, Jd, kd) => {
    var pd = kd(5102),
      Nd = kd(5182),
      Wd = kd(5223);
    dd.exports = function() {
      this.size = 0, this.__data__ = {
        hash: new pd,
        map: new(Wd || Nd),
        string: new pd
      }
    }
  },
  5229: (dd, Jd, kd) => {
    var pd = kd(5235);
    dd.exports = function(dd) {
      var Jd = pd(this, dd).delete(dd);
      return this.size -= Jd ? 1 : 0, Jd
    }
  },
  5248: (dd, Jd, kd) => {
    var pd = kd(5235);
    dd.exports = function(dd) {
      return pd(this, dd).get(dd)
    }
  },
  5254: (dd, Jd, kd) => {
    var pd = kd(5235);
    dd.exports = function(dd) {
      return pd(this, dd).has(dd)
    }
  },
  5260: (dd, Jd, kd) => {
    var pd = kd(5235);
    dd.exports = function(dd, Jd) {
      var kd = pd(this, dd),
        Nd = kd.size;
      return kd.set(dd, Jd), this.size += kd.size == Nd ? 0 : 1, this
    }
  },
  5530: dd => {
    dd.exports = function(dd) {
      var Jd = -1,
        kd = Array(dd.size);
      return dd.forEach((function(dd, pd) {
        kd[++Jd] = [pd, dd]
      })), kd
    }
  },
  5675: dd => {
    dd.exports = function(dd, Jd) {
      return function(kd) {
        return null != kd && (kd[dd] === Jd && (void 0 !== Jd || dd in Object(kd)))
      }
    }
  },
  5079: (dd, Jd, kd) => {
    var pd = kd(5083);
    dd.exports = function(dd) {
      var Jd = pd(dd, (function(dd) {
          return 500 === kd.size && kd.clear(), dd
        })),
        kd = Jd.cache;
      return Jd
    }
  },
  5116: (dd, Jd, kd) => {
    var pd = kd(5124)(Object, "create");
    dd.exports = pd
  },
  5623: (dd, Jd, kd) => {
    var pd = kd(5629)(Object.keys, Object);
    dd.exports = pd
  },
  5610: (dd, Jd, kd) => {
    dd = kd.nmd(dd);
    var pd = kd(4975),
      Nd = Jd && !Jd.nodeType && Jd,
      Wd = Nd && dd && !dd.nodeType && dd,
      Pd = Wd && Wd.exports === Nd && pd.process,
      Zd = function() {
        try {
          var dd = Wd && Wd.require && Wd.require("util").types;
          return dd || Pd && Pd.binding && Pd.binding("util")
        } catch (Jd) {}
      }();
    dd.exports = Zd
  },
  5020: dd => {
    var Jd = Object.prototype.toString;
    dd.exports = function(dd) {
      return Jd.call(dd)
    }
  },
  5629: dd => {
    dd.exports = function(dd, Jd) {
      return function(kd) {
        return dd(Jd(kd))
      }
    }
  },
  5796: (dd, Jd, kd) => {
    var pd = kd(5798),
      Nd = Math.max;
    dd.exports = function(dd, Jd, kd) {
      return Jd = Nd(void 0 === Jd ? dd.length - 1 : Jd, 0),
        function() {
          for (var Wd = arguments, Pd = -1, Zd = Nd(Wd.length - Jd, 0), gd = Array(Zd); ++Pd < Zd;) gd[Pd] = Wd[Jd + Pd];
          Pd = -1;
          for (var Cd = Array(Jd + 1); ++Pd < Jd;) Cd[Pd] = Wd[Pd];
          return Cd[Jd] = kd(gd), pd(dd, this, Cd)
        }
    }
  },
  4968: (dd, Jd, kd) => {
    var pd = kd(4975),
      Nd = "object" == typeof self && self && self.Object === Object && self,
      Wd = pd || Nd || Function("return this")();
    dd.exports = Wd
  },
  5500: dd => {
    dd.exports = function(dd) {
      return this.__data__.set(dd, "__lodash_hash_undefined__"), this
    }
  },
  5503: dd => {
    dd.exports = function(dd) {
      return this.__data__.has(dd)
    }
  },
  5538: dd => {
    dd.exports = function(dd) {
      var Jd = -1,
        kd = Array(dd.size);
      return dd.forEach((function(dd) {
        kd[++Jd] = dd
      })), kd
    }
  },
  5801: (dd, Jd, kd) => {
    var pd = kd(5809),
      Nd = kd(5832)(pd);
    dd.exports = Nd
  },
  5832: dd => {
    var Jd = Date.now;
    dd.exports = function(dd) {
      var kd = 0,
        pd = 0;
      return function() {
        var Nd = Jd(),
          Wd = 16 - (Nd - pd);
        if (pd = Nd, Wd > 0) {
          if (++kd >= 800) return arguments[0]
        } else kd = 0;
        return dd.apply(void 0, arguments)
      }
    }
  },
  5452: (dd, Jd, kd) => {
    var pd = kd(5182);
    dd.exports = function() {
      this.__data__ = new pd, this.size = 0
    }
  },
  5457: dd => {
    dd.exports = function(dd) {
      var Jd = this.__data__,
        kd = Jd.delete(dd);
      return this.size = Jd.size, kd
    }
  },
  5460: dd => {
    dd.exports = function(dd) {
      return this.__data__.get(dd)
    }
  },
  5463: dd => {
    dd.exports = function(dd) {
      return this.__data__.has(dd)
    }
  },
  5468: (dd, Jd, kd) => {
    var pd = kd(5182),
      Nd = kd(5223),
      Wd = kd(5090);
    dd.exports = function(dd, Jd) {
      var kd = this.__data__;
      if (kd instanceof pd) {
        var Pd = kd.__data__;
        if (!Nd || Pd.length < 199) return Pd.push([dd, Jd]), this.size = ++kd.size, this;
        kd = this.__data__ = new Wd(Pd)
      }
      return kd.set(dd, Jd), this.size = kd.size, this
    }
  },
  5888: dd => {
    dd.exports = function(dd, Jd, kd) {
      for (var pd = kd - 1, Nd = dd.length; ++pd < Nd;)
        if (dd[pd] === Jd) return pd;
      return -1
    }
  },
  5954: (dd, Jd, kd) => {
    var pd = kd(5957),
      Nd = kd(5946),
      Wd = kd(5961);
    dd.exports = function(dd) {
      return Nd(dd) ? Wd(dd) : pd(dd)
    }
  },
  5075: (dd, Jd, kd) => {
    var pd = kd(5079),
      Nd = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      Wd = /\\(\\)?/g,
      Pd = pd((function(dd) {
        var Jd = [];
        return 46 === dd.charCodeAt(0) && Jd.push(""), dd.replace(Nd, (function(dd, kd, pd, Nd) {
          Jd.push(pd ? Nd.replace(Wd, "$1") : kd || dd)
        })), Jd
      }));
    dd.exports = Pd
  },
  5285: (dd, Jd, kd) => {
    var pd = kd(4999);
    dd.exports = function(dd) {
      if ("string" == typeof dd || pd(dd)) return dd;
      var Jd = dd + "";
      return "0" == Jd && 1 / dd == -1 / 0 ? "-0" : Jd
    }
  },
  5145: dd => {
    var Jd = Function.prototype.toString;
    dd.exports = function(dd) {
      if (null != dd) {
        try {
          return Jd.call(dd)
        } catch (kd) {}
        try {
          return dd + ""
        } catch (kd) {}
      }
      return ""
    }
  },
  4994: dd => {
    var Jd = /\s/;
    dd.exports = function(dd) {
      for (var kd = dd.length; kd-- && Jd.test(dd.charAt(kd)););
      return kd
    }
  },
  5961: dd => {
    var Jd = "\\ud800-\\udfff",
      kd = "[" + Jd + "]",
      pd = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
      Nd = "\\ud83c[\\udffb-\\udfff]",
      Wd = "[^" + Jd + "]",
      Pd = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      Zd = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      gd = "(?:" + pd + "|" + Nd + ")" + "?",
      Cd = "[\\ufe0e\\ufe0f]?",
      Kd = Cd + gd + ("(?:\\u200d(?:" + [Wd, Pd, Zd].join("|") + ")" + Cd + gd + ")*"),
      od = "(?:" + [Wd + pd + "?", pd, Pd, Zd, kd].join("|") + ")",
      ld = RegExp(Nd + "(?=" + Nd + ")|" + od + Kd, "g");
    dd.exports = function(dd) {
      return dd.match(ld) || []
    }
  },
  5816: dd => {
    dd.exports = function(dd) {
      return function() {
        return dd
      }
    }
  },
  4945: (dd, Jd, kd) => {
    var pd = kd(4952),
      Nd = kd(4960),
      Wd = kd(4984),
      Pd = Math.max,
      Zd = Math.min;
    dd.exports = function(dd, Jd, kd) {
      var gd, Cd, Kd, od, ld, Qd, Ld = 0,
        Od = !1,
        ed = !1,
        Rd = !0;
      if ("function" != typeof dd) throw new TypeError("Expected a function");

      function Id(Jd) {
        var kd = gd,
          pd = Cd;
        return gd = Cd = void 0, Ld = Jd, od = dd.apply(pd, kd)
      }

      function Gd(dd) {
        var kd = dd - Qd;
        return void 0 === Qd || kd >= Jd || kd < 0 || ed && dd - Ld >= Kd
      }

      function vd() {
        var dd = Nd();
        if (Gd(dd)) return xd(dd);
        ld = setTimeout(vd, function(dd) {
          var kd = Jd - (dd - Qd);
          return ed ? Zd(kd, Kd - (dd - Ld)) : kd
        }(dd))
      }

      function xd(dd) {
        return ld = void 0, Rd && gd ? Id(dd) : (gd = Cd = void 0, od)
      }

      function qd() {
        var dd = Nd(),
          kd = Gd(dd);
        if (gd = arguments, Cd = this, Qd = dd, kd) {
          if (void 0 === ld) return function(dd) {
            return Ld = dd, ld = setTimeout(vd, Jd), Od ? Id(dd) : od
          }(Qd);
          if (ed) return clearTimeout(ld), ld = setTimeout(vd, Jd), Id(Qd)
        }
        return void 0 === ld && (ld = setTimeout(vd, Jd)), od
      }
      return Jd = Wd(Jd) || 0, pd(kd) && (Od = !!kd.leading, Kd = (ed = "maxWait" in kd) ? Pd(Wd(kd.maxWait) || 0, Jd) : Kd, Rd = "trailing" in kd ? !!kd.trailing : Rd), qd.cancel = function() {
        void 0 !== ld && clearTimeout(ld), Ld = 0, gd = Qd = Cd = ld = void 0
      }, qd.flush = function() {
        return void 0 === ld ? od : xd(Nd())
      }, qd
    }
  },
  5204: dd => {
    dd.exports = function(dd, Jd) {
      return dd === Jd || dd !== dd && Jd !== Jd
    }
  },
  6126: (dd, Jd, kd) => {
    var pd = kd(6133),
      Nd = kd(6137),
      Wd = kd(5427),
      Pd = kd(5039),
      Zd = kd(5356);
    dd.exports = function(dd, Jd, kd) {
      var gd = Pd(dd) ? pd : Nd;
      return kd && Zd(dd, Jd, kd) && (Jd = void 0), gd(dd, Wd(Jd, 3))
    }
  },
  6214: (dd, Jd, kd) => {
    var pd = kd(6216)(kd(6223));
    dd.exports = pd
  },
  6223: (dd, Jd, kd) => {
    var pd = kd(5878),
      Nd = kd(5427),
      Wd = kd(6230),
      Pd = Math.max;
    dd.exports = function(dd, Jd, kd) {
      var Zd = null == dd ? 0 : dd.length;
      if (!Zd) return -1;
      var gd = null == kd ? 0 : Wd(kd);
      return gd < 0 && (gd = Pd(Zd + gd, 0)), pd(dd, Nd(Jd, 3), gd)
    }
  },
  6072: (dd, Jd, kd) => {
    var pd = kd(5390),
      Nd = kd(6077);
    dd.exports = function(dd, Jd) {
      return pd(Nd(dd, Jd), 1)
    }
  },
  5064: (dd, Jd, kd) => {
    var pd = kd(5067);
    dd.exports = function(dd, Jd, kd) {
      var Nd = null == dd ? void 0 : pd(dd, Jd);
      return void 0 === Nd ? kd : Nd
    }
  },
  5688: (dd, Jd, kd) => {
    var pd = kd(5693),
      Nd = kd(5698);
    dd.exports = function(dd, Jd) {
      return null != dd && Nd(dd, Jd, pd)
    }
  },
  5706: dd => {
    dd.exports = function(dd) {
      return dd
    }
  },
  5414: (dd, Jd, kd) => {
    var pd = kd(5416),
      Nd = kd(5027),
      Wd = Object.prototype,
      Pd = Wd.hasOwnProperty,
      Zd = Wd.propertyIsEnumerable,
      gd = pd(function() {
        return arguments
      }()) ? pd : function(dd) {
        return Nd(dd) && Pd.call(dd, "callee") && !Zd.call(dd, "callee")
      };
    dd.exports = gd
  },
  5039: dd => {
    var Jd = Array.isArray;
    dd.exports = Jd
  },
  5359: (dd, Jd, kd) => {
    var pd = kd(5131),
      Nd = kd(5362);
    dd.exports = function(dd) {
      return null != dd && Nd(dd.length) && !pd(dd)
    }
  },
  6177: (dd, Jd, kd) => {
    var pd = kd(5002),
      Nd = kd(5027);
    dd.exports = function(dd) {
      return !0 === dd || !1 === dd || Nd(dd) && "[object Boolean]" == pd(dd)
    }
  },
  5583: (dd, Jd, kd) => {
    dd = kd.nmd(dd);
    var pd = kd(4968),
      Nd = kd(5585),
      Wd = Jd && !Jd.nodeType && Jd,
      Pd = Wd && dd && !dd.nodeType && dd,
      Zd = Pd && Pd.exports === Wd ? pd.kL : void 0,
      gd = (Zd ? Zd.isBuffer : void 0) || Nd;
    dd.exports = gd
  },
  6085: (dd, Jd, kd) => {
    var pd = kd(5473);
    dd.exports = function(dd, Jd) {
      return pd(dd, Jd)
    }
  },
  5131: (dd, Jd, kd) => {
    var pd = kd(5002),
      Nd = kd(4952);
    dd.exports = function(dd) {
      if (!Nd(dd)) return !1;
      var Jd = pd(dd);
      return "[object Function]" == Jd || "[object GeneratorFunction]" == Jd || "[object AsyncFunction]" == Jd || "[object Proxy]" == Jd
    }
  },
  5362: dd => {
    dd.exports = function(dd) {
      return "number" == typeof dd && dd > -1 && dd % 1 == 0 && dd <= 9007199254740991
    }
  },
  5048: (dd, Jd, kd) => {
    var pd = kd(5057);
    dd.exports = function(dd) {
      return pd(dd) && dd != +dd
    }
  },
  5289: dd => {
    dd.exports = function(dd) {
      return null == dd
    }
  },
  5057: (dd, Jd, kd) => {
    var pd = kd(5002),
      Nd = kd(5027);
    dd.exports = function(dd) {
      return "number" == typeof dd || Nd(dd) && "[object Number]" == pd(dd)
    }
  },
  4952: dd => {
    dd.exports = function(dd) {
      var Jd = typeof dd;
      return null != dd && ("object" == Jd || "function" == Jd)
    }
  },
  5027: dd => {
    dd.exports = function(dd) {
      return null != dd && "object" == typeof dd
    }
  },
  6167: (dd, Jd, kd) => {
    var pd = kd(5002),
      Nd = kd(6170),
      Wd = kd(5027),
      Pd = Function.prototype,
      Zd = Object.prototype,
      gd = Pd.toString,
      Cd = Zd.hasOwnProperty,
      Kd = gd.call(Object);
    dd.exports = function(dd) {
      if (!Wd(dd) || "[object Object]" != pd(dd)) return !1;
      var Jd = Nd(dd);
      if (null === Jd) return !0;
      var kd = Cd.call(Jd, "constructor") && Jd.constructor;
      return "function" == typeof kd && kd instanceof kd && gd.call(kd) == Kd
    }
  },
  5035: (dd, Jd, kd) => {
    var pd = kd(5002),
      Nd = kd(5039),
      Wd = kd(5027);
    dd.exports = function(dd) {
      return "string" == typeof dd || !Nd(dd) && Wd(dd) && "[object String]" == pd(dd)
    }
  },
  4999: (dd, Jd, kd) => {
    var pd = kd(5002),
      Nd = kd(5027);
    dd.exports = function(dd) {
      return "symbol" == typeof dd || Nd(dd) && "[object Symbol]" == pd(dd)
    }
  },
  5594: (dd, Jd, kd) => {
    var pd = kd(5603),
      Nd = kd(5606),
      Wd = kd(5610),
      Pd = Wd && Wd.isTypedArray,
      Zd = Pd ? Nd(Pd) : pd;
    dd.exports = Zd
  },
  5568: (dd, Jd, kd) => {
    var pd = kd(5572),
      Nd = kd(5617),
      Wd = kd(5359);
    dd.exports = function(dd) {
      return Wd(dd) ? pd(dd) : Nd(dd)
    }
  },
  6154: dd => {
    dd.exports = function(dd) {
      var Jd = null == dd ? 0 : dd.length;
      return Jd ? dd[Jd - 1] : void 0
    }
  },
  6077: (dd, Jd, kd) => {
    var pd = kd(5276),
      Nd = kd(5427),
      Wd = kd(5728),
      Pd = kd(5039);
    dd.exports = function(dd, Jd) {
      return (Pd(dd) ? pd : Wd)(dd, Nd(Jd, 3))
    }
  },
  6119: (dd, Jd, kd) => {
    var pd = kd(6123),
      Nd = kd(5739),
      Wd = kd(5427);
    dd.exports = function(dd, Jd) {
      var kd = {};
      return Jd = Wd(Jd, 3), Nd(dd, (function(dd, Nd, Wd) {
        pd(kd, Nd, Jd(dd, Nd, Wd))
      })), kd
    }
  },
  6043: (dd, Jd, kd) => {
    var pd = kd(6051),
      Nd = kd(6057),
      Wd = kd(5706);
    dd.exports = function(dd) {
      return dd && dd.length ? pd(dd, Wd, Nd) : void 0
    }
  },
  5083: (dd, Jd, kd) => {
    var pd = kd(5090);

    function Nd(dd, Jd) {
      if ("function" != typeof dd || null != Jd && "function" != typeof Jd) throw new TypeError("Expected a function");
      var kd = function() {
        var pd = arguments,
          Nd = Jd ? Jd.apply(this, pd) : pd[0],
          Wd = kd.cache;
        if (Wd.has(Nd)) return Wd.get(Nd);
        var Pd = dd.apply(this, pd);
        return kd.cache = Wd.set(Nd, Pd) || Wd, Pd
      };
      return kd.cache = new(Nd.Cache || pd), kd
    }
    Nd.Cache = pd, dd.exports = Nd
  },
  6062: (dd, Jd, kd) => {
    var pd = kd(6051),
      Nd = kd(6066),
      Wd = kd(5706);
    dd.exports = function(dd) {
      return dd && dd.length ? pd(dd, Wd, Nd) : void 0
    }
  },
  5906: dd => {
    dd.exports = function() {}
  },
  4960: (dd, Jd, kd) => {
    var pd = kd(4968);
    dd.exports = function() {
      return pd.Date.now()
    }
  },
  5708: (dd, Jd, kd) => {
    var pd = kd(5712),
      Nd = kd(5719),
      Wd = kd(5073),
      Pd = kd(5285);
    dd.exports = function(dd) {
      return Wd(dd) ? pd(Pd(dd)) : Nd(dd)
    }
  },
  5336: (dd, Jd, kd) => {
    var pd = kd(5345)();
    dd.exports = pd
  },
  6198: (dd, Jd, kd) => {
    var pd = kd(5506),
      Nd = kd(5427),
      Wd = kd(6201),
      Pd = kd(5039),
      Zd = kd(5356);
    dd.exports = function(dd, Jd, kd) {
      var gd = Pd(dd) ? pd : Wd;
      return kd && Zd(dd, Jd, kd) && (Jd = void 0), gd(dd, Nd(Jd, 3))
    }
  },
  5388: (dd, Jd, kd) => {
    var pd = kd(5390),
      Nd = kd(5423),
      Wd = kd(5789),
      Pd = kd(5356),
      Zd = Wd((function(dd, Jd) {
        if (null == dd) return [];
        var kd = Jd.length;
        return kd > 1 && Pd(dd, Jd[0], Jd[1]) ? Jd = [] : kd > 2 && Pd(Jd[0], Jd[1], Jd[2]) && (Jd = [Jd[0]]), Nd(dd, pd(Jd, 1), [])
      }));
    dd.exports = Zd
  },
  5566: dd => {
    dd.exports = function() {
      return []
    }
  },
  5585: dd => {
    dd.exports = function() {
      return !1
    }
  },
  4938: (dd, Jd, kd) => {
    var pd = kd(4945),
      Nd = kd(4952);
    dd.exports = function(dd, Jd, kd) {
      var Wd = !0,
        Pd = !0;
      if ("function" != typeof dd) throw new TypeError("Expected a function");
      return Nd(kd) && (Wd = "leading" in kd ? !!kd.leading : Wd, Pd = "trailing" in kd ? !!kd.trailing : Pd), pd(dd, Jd, {
        leading: Wd,
        maxWait: Jd,
        trailing: Pd
      })
    }
  },
  5380: (dd, Jd, kd) => {
    var pd = kd(4984),
      Nd = 1 / 0;
    dd.exports = function(dd) {
      return dd ? (dd = pd(dd)) === Nd || dd === -1 / 0 ? 17976931348623157e292 * (dd < 0 ? -1 : 1) : dd === dd ? dd : 0 : 0 === dd ? dd : 0
    }
  },
  6230: (dd, Jd, kd) => {
    var pd = kd(5380);
    dd.exports = function(dd) {
      var Jd = pd(dd),
        kd = Jd % 1;
      return Jd === Jd ? kd ? Jd - kd : Jd : 0
    }
  },
  4984: (dd, Jd, kd) => {
    var pd = kd(4992),
      Nd = kd(4952),
      Wd = kd(4999),
      Pd = /^[-+]0x[0-9a-f]+$/i,
      Zd = /^0b[01]+$/i,
      gd = /^0o[0-7]+$/i,
      Cd = parseInt;
    dd.exports = function(dd) {
      if ("number" == typeof dd) return dd;
      if (Wd(dd)) return NaN;
      if (Nd(dd)) {
        var Jd = "function" == typeof dd.valueOf ? dd.valueOf() : dd;
        dd = Nd(Jd) ? Jd + "" : Jd
      }
      if ("string" != typeof dd) return 0 === dd ? dd : +dd;
      dd = pd(dd);
      var kd = Zd.test(dd);
      return kd || gd.test(dd) ? Cd(dd.slice(2), kd ? 2 : 8) : Pd.test(dd) ? NaN : +dd
    }
  },
  5268: (dd, Jd, kd) => {
    var pd = kd(5273);
    dd.exports = function(dd) {
      return null == dd ? "" : pd(dd)
    }
  },
  5860: (dd, Jd, kd) => {
    var pd = kd(5427),
      Nd = kd(5864);
    dd.exports = function(dd, Jd) {
      return dd && dd.length ? Nd(dd, pd(Jd, 2)) : []
    }
  },
  5919: (dd, Jd, kd) => {
    var pd = kd(5928)("toUpperCase");
    dd.exports = pd
  },
  5992: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => nJ
    });
    var pd = kd(56),
      Nd = kd(4845),
      Wd = kd.n(Nd);
    const {
      getOwnPropertyNames: Pd,
      getOwnPropertySymbols: Zd
    } = Object, {
      hasOwnProperty: gd
    } = Object.prototype;

    function Cd(dd, Jd) {
      return function(kd, pd, Nd) {
        return dd(kd, pd, Nd) && Jd(kd, pd, Nd)
      }
    }

    function Kd(dd) {
      return function(Jd, kd, pd) {
        if (!Jd || !kd || "object" !== typeof Jd || "object" !== typeof kd) return dd(Jd, kd, pd);
        const {
          cache: Nd
        } = pd, Wd = Nd.get(Jd), Pd = Nd.get(kd);
        if (Wd && Pd) return Wd === kd && Pd === Jd;
        Nd.set(Jd, kd), Nd.set(kd, Jd);
        const Zd = dd(Jd, kd, pd);
        return Nd.delete(Jd), Nd.delete(kd), Zd
      }
    }

    function od(dd) {
      return Pd(dd).concat(Zd(dd))
    }
    const ld = Object.hasOwn || ((dd, Jd) => gd.call(dd, Jd));

    function Qd(dd, Jd) {
      return dd === Jd || !dd && !Jd && dd !== dd && Jd !== Jd
    }
    const {
      getOwnPropertyDescriptor: Ld,
      keys: Od
    } = Object;

    function ed(dd, Jd) {
      return dd.byteLength === Jd.byteLength && md(new Uint8Array(dd), new Uint8Array(Jd))
    }

    function Rd(dd, Jd, kd) {
      let pd = dd.length;
      if (Jd.length !== pd) return !1;
      for (; pd-- > 0;)
        if (!kd.equals(dd[pd], Jd[pd], pd, pd, dd, Jd, kd)) return !1;
      return !0
    }

    function Id(dd, Jd) {
      return dd.byteLength === Jd.byteLength && md(new Uint8Array(dd.buffer, dd.byteOffset, dd.byteLength), new Uint8Array(Jd.buffer, Jd.byteOffset, Jd.byteLength))
    }

    function Gd(dd, Jd) {
      return Qd(dd.getTime(), Jd.getTime())
    }

    function vd(dd, Jd) {
      return dd.name === Jd.name && dd.message === Jd.message && dd.cause === Jd.cause && dd.stack === Jd.stack
    }

    function xd(dd, Jd) {
      return dd === Jd
    }

    function qd(dd, Jd, kd) {
      const pd = dd.size;
      if (pd !== Jd.size) return !1;
      if (!pd) return !0;
      const Nd = new Array(pd),
        Wd = dd.entries();
      let Pd, Zd, gd = 0;
      for (;
        (Pd = Wd.next()) && !Pd.done;) {
        const pd = Jd.entries();
        let Wd = !1,
          Cd = 0;
        for (;
          (Zd = pd.next()) && !Zd.done;) {
          if (Nd[Cd]) {
            Cd++;
            continue
          }
          const pd = Pd.value,
            Kd = Zd.value;
          if (kd.equals(pd[0], Kd[0], gd, Cd, dd, Jd, kd) && kd.equals(pd[1], Kd[1], pd[0], Kd[0], dd, Jd, kd)) {
            Wd = Nd[Cd] = !0;
            break
          }
          Cd++
        }
        if (!Wd) return !1;
        gd++
      }
      return !0
    }
    const Bd = Qd;

    function sd(dd, Jd, kd) {
      const pd = Od(dd);
      let Nd = pd.length;
      if (Od(Jd).length !== Nd) return !1;
      for (; Nd-- > 0;)
        if (!Sd(dd, Jd, kd, pd[Nd])) return !1;
      return !0
    }

    function ad(dd, Jd, kd) {
      const pd = od(dd);
      let Nd, Wd, Pd, Zd = pd.length;
      if (od(Jd).length !== Zd) return !1;
      for (; Zd-- > 0;) {
        if (Nd = pd[Zd], !Sd(dd, Jd, kd, Nd)) return !1;
        if (Wd = Ld(dd, Nd), Pd = Ld(Jd, Nd), (Wd || Pd) && (!Wd || !Pd || Wd.configurable !== Pd.configurable || Wd.enumerable !== Pd.enumerable || Wd.writable !== Pd.writable)) return !1
      }
      return !0
    }

    function Md(dd, Jd) {
      return Qd(dd.valueOf(), Jd.valueOf())
    }

    function Fd(dd, Jd) {
      return dd.source === Jd.source && dd.flags === Jd.flags
    }

    function Yd(dd, Jd, kd) {
      const pd = dd.size;
      if (pd !== Jd.size) return !1;
      if (!pd) return !0;
      const Nd = new Array(pd),
        Wd = dd.values();
      let Pd, Zd;
      for (;
        (Pd = Wd.next()) && !Pd.done;) {
        const pd = Jd.values();
        let Wd = !1,
          gd = 0;
        for (;
          (Zd = pd.next()) && !Zd.done;) {
          if (!Nd[gd] && kd.equals(Pd.value, Zd.value, Pd.value, Zd.value, dd, Jd, kd)) {
            Wd = Nd[gd] = !0;
            break
          }
          gd++
        }
        if (!Wd) return !1
      }
      return !0
    }

    function md(dd, Jd) {
      let kd = dd.byteLength;
      if (Jd.byteLength !== kd || dd.byteOffset !== Jd.byteOffset) return !1;
      for (; kd-- > 0;)
        if (dd[kd] !== Jd[kd]) return !1;
      return !0
    }

    function bd(dd, Jd) {
      return dd.hostname === Jd.hostname && dd.pathname === Jd.pathname && dd.protocol === Jd.protocol && dd.port === Jd.port && dd.hash === Jd.hash && dd.username === Jd.username && dd.password === Jd.password
    }

    function Sd(dd, Jd, kd, pd) {
      return !("_owner" !== pd && "__o" !== pd && "__v" !== pd || !dd.$$typeof && !Jd.$$typeof) || ld(Jd, pd) && kd.equals(dd[pd], Jd[pd], pd, pd, dd, Jd, kd)
    }
    const jd = {
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
      Xd = Object.prototype.toString;

    function fd(dd) {
      let {
        areArrayBuffersEqual: Jd,
        areArraysEqual: kd,
        areDataViewsEqual: pd,
        areDatesEqual: Nd,
        areErrorsEqual: Wd,
        areFunctionsEqual: Pd,
        areMapsEqual: Zd,
        areNumbersEqual: gd,
        areObjectsEqual: Cd,
        arePrimitiveWrappersEqual: Kd,
        areRegExpsEqual: od,
        areSetsEqual: ld,
        areTypedArraysEqual: Qd,
        areUrlsEqual: Ld,
        unknownTagComparators: Od
      } = dd;
      return function(dd, ed, Rd) {
        if (dd === ed) return !0;
        if (null == dd || null == ed) return !1;
        const Id = typeof dd;
        if (Id !== typeof ed) return !1;
        if ("object" !== Id) return "number" === Id ? gd(dd, ed, Rd) : "function" === Id && Pd(dd, ed, Rd);
        const Gd = dd.constructor;
        if (Gd !== ed.constructor) return !1;
        if (Gd === Object) return Cd(dd, ed, Rd);
        if (Array.isArray(dd)) return kd(dd, ed, Rd);
        if (Gd === Date) return Nd(dd, ed, Rd);
        if (Gd === RegExp) return od(dd, ed, Rd);
        if (Gd === Map) return Zd(dd, ed, Rd);
        if (Gd === Set) return ld(dd, ed, Rd);
        const vd = Xd.call(dd);
        if ("[object Date]" === vd) return Nd(dd, ed, Rd);
        if ("[object RegExp]" === vd) return od(dd, ed, Rd);
        if ("[object Map]" === vd) return Zd(dd, ed, Rd);
        if ("[object Set]" === vd) return ld(dd, ed, Rd);
        if ("[object Object]" === vd) return "function" !== typeof dd.then && "function" !== typeof ed.then && Cd(dd, ed, Rd);
        if ("[object URL]" === vd) return Ld(dd, ed, Rd);
        if ("[object Error]" === vd) return Wd(dd, ed, Rd);
        if ("[object Arguments]" === vd) return Cd(dd, ed, Rd);
        if (jd[vd]) return Qd(dd, ed, Rd);
        if ("[object ArrayBuffer]" === vd) return Jd(dd, ed, Rd);
        if ("[object DataView]" === vd) return pd(dd, ed, Rd);
        if ("[object Boolean]" === vd || "[object Number]" === vd || "[object String]" === vd) return Kd(dd, ed, Rd);
        if (Od) {
          let Jd = Od[vd];
          if (!Jd) {
            const kd = null != (xd = dd) ? xd[Symbol.toStringTag] : void 0;
            kd && (Jd = Od[kd])
          }
          if (Jd) return Jd(dd, ed, Rd)
        }
        var xd;
        return !1
      }
    }
    const nd = Ud();
    Ud({
      strict: !0
    }), Ud({
      circular: !0
    }), Ud({
      circular: !0,
      strict: !0
    }), Ud({
      createInternalComparator: () => Qd
    }), Ud({
      strict: !0,
      createInternalComparator: () => Qd
    }), Ud({
      circular: !0,
      createInternalComparator: () => Qd
    }), Ud({
      circular: !0,
      createInternalComparator: () => Qd,
      strict: !0
    });

    function Ud() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const {
        circular: Jd = !1,
        createInternalComparator: kd,
        createState: pd,
        strict: Nd = !1
      } = dd, Wd = function(dd) {
        let {
          circular: Jd,
          createCustomConfig: kd,
          strict: pd
        } = dd, Nd = {
          areArrayBuffersEqual: ed,
          areArraysEqual: pd ? ad : Rd,
          areDataViewsEqual: Id,
          areDatesEqual: Gd,
          areErrorsEqual: vd,
          areFunctionsEqual: xd,
          areMapsEqual: pd ? Cd(qd, ad) : qd,
          areNumbersEqual: Bd,
          areObjectsEqual: pd ? ad : sd,
          arePrimitiveWrappersEqual: Md,
          areRegExpsEqual: Fd,
          areSetsEqual: pd ? Cd(Yd, ad) : Yd,
          areTypedArraysEqual: pd ? Cd(md, ad) : md,
          areUrlsEqual: bd,
          unknownTagComparators: void 0
        };
        if (kd && (Nd = Object.assign({}, Nd, kd(Nd))), Jd) {
          const dd = Kd(Nd.areArraysEqual),
            Jd = Kd(Nd.areMapsEqual),
            kd = Kd(Nd.areObjectsEqual),
            pd = Kd(Nd.areSetsEqual);
          Nd = Object.assign({}, Nd, {
            areArraysEqual: dd,
            areMapsEqual: Jd,
            areObjectsEqual: kd,
            areSetsEqual: pd
          })
        }
        return Nd
      }(dd), Pd = fd(Wd);
      var Zd;
      return function(dd) {
        let {
          circular: Jd,
          comparator: kd,
          createState: pd,
          equals: Nd,
          strict: Wd
        } = dd;
        if (pd) return function(dd, Pd) {
          const {
            cache: Zd = (Jd ? new WeakMap : void 0),
            meta: gd
          } = pd();
          return kd(dd, Pd, {
            cache: Zd,
            equals: Nd,
            meta: gd,
            strict: Wd
          })
        };
        if (Jd) return function(dd, Jd) {
          return kd(dd, Jd, {
            cache: new WeakMap,
            equals: Nd,
            meta: void 0,
            strict: Wd
          })
        };
        const Pd = {
          cache: void 0,
          equals: Nd,
          meta: void 0,
          strict: Wd
        };
        return function(dd, Jd) {
          return kd(dd, Jd, Pd)
        }
      }({
        circular: Jd,
        comparator: Pd,
        createState: pd,
        equals: kd ? kd(Pd) : (Zd = Pd, function(dd, Jd, kd, pd, Nd, Wd, Pd) {
          return Zd(dd, Jd, Pd)
        }),
        strict: Nd
      })
    }

    function yd(dd) {
      var Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        kd = -1;
      requestAnimationFrame((function pd(Nd) {
        kd < 0 && (kd = Nd), Nd - kd > Jd ? (dd(Nd), kd = -1) : function(dd) {
          "undefined" !== typeof requestAnimationFrame && requestAnimationFrame(dd)
        }(pd)
      }))
    }

    function Dd(dd) {
      return Dd = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(dd) {
        return typeof dd
      } : function(dd) {
        return dd && "function" == typeof Symbol && dd.constructor === Symbol && dd !== Symbol.prototype ? "symbol" : typeof dd
      }, Dd(dd)
    }

    function Td(dd) {
      return function(dd) {
        if (Array.isArray(dd)) return dd
      }(dd) || function(dd) {
        if ("undefined" !== typeof Symbol && null != dd[Symbol.iterator] || null != dd["@@iterator"]) return Array.from(dd)
      }(dd) || function(dd, Jd) {
        if (!dd) return;
        if ("string" === typeof dd) return Ed(dd, Jd);
        var kd = Object.prototype.toString.call(dd).slice(8, -1);
        "Object" === kd && dd.constructor && (kd = dd.constructor.name);
        if ("Map" === kd || "Set" === kd) return Array.from(dd);
        if ("Arguments" === kd || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(kd)) return Ed(dd, Jd)
      }(dd) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Ed(dd, Jd) {
      (null == Jd || Jd > dd.length) && (Jd = dd.length);
      for (var kd = 0, pd = new Array(Jd); kd < Jd; kd++) pd[kd] = dd[kd];
      return pd
    }

    function cd() {
      var dd = function() {
          return null
        },
        Jd = !1,
        kd = function kd(pd) {
          if (!Jd) {
            if (Array.isArray(pd)) {
              if (!pd.length) return;
              var Nd = Td(pd),
                Wd = Nd[0],
                Pd = Nd.slice(1);
              return "number" === typeof Wd ? void yd(kd.bind(null, Pd), Wd) : (kd(Wd), void yd(kd.bind(null, Pd)))
            }
            "object" === Dd(pd) && dd(pd), "function" === typeof pd && pd()
          }
        };
      return {
        stop: function() {
          Jd = !0
        },
        start: function(dd) {
          Jd = !1, kd(dd)
        },
        subscribe: function(Jd) {
          return dd = Jd,
            function() {
              dd = function() {
                return null
              }
            }
        }
      }
    }

    function hd(dd) {
      return hd = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(dd) {
        return typeof dd
      } : function(dd) {
        return dd && "function" == typeof Symbol && dd.constructor === Symbol && dd !== Symbol.prototype ? "symbol" : typeof dd
      }, hd(dd)
    }

    function rd(dd, Jd) {
      var kd = Object.keys(dd);
      if (Object.getOwnPropertySymbols) {
        var pd = Object.getOwnPropertySymbols(dd);
        Jd && (pd = pd.filter((function(Jd) {
          return Object.getOwnPropertyDescriptor(dd, Jd).enumerable
        }))), kd.push.apply(kd, pd)
      }
      return kd
    }

    function ud(dd) {
      for (var Jd = 1; Jd < arguments.length; Jd++) {
        var kd = null != arguments[Jd] ? arguments[Jd] : {};
        Jd % 2 ? rd(Object(kd), !0).forEach((function(Jd) {
          td(dd, Jd, kd[Jd])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(dd, Object.getOwnPropertyDescriptors(kd)) : rd(Object(kd)).forEach((function(Jd) {
          Object.defineProperty(dd, Jd, Object.getOwnPropertyDescriptor(kd, Jd))
        }))
      }
      return dd
    }

    function td(dd, Jd, kd) {
      return (Jd = function(dd) {
        var Jd = function(dd, Jd) {
          if ("object" !== hd(dd) || null === dd) return dd;
          var kd = dd[Symbol.toPrimitive];
          if (void 0 !== kd) {
            var pd = kd.call(dd, Jd || "default");
            if ("object" !== hd(pd)) return pd;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === Jd ? String : Number)(dd)
        }(dd, "string");
        return "symbol" === hd(Jd) ? Jd : String(Jd)
      }(Jd)) in dd ? Object.defineProperty(dd, Jd, {
        value: kd,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : dd[Jd] = kd, dd
    }
    var Vd = function(dd) {
        return dd
      },
      zd = function(dd, Jd) {
        return Object.keys(Jd).reduce((function(kd, pd) {
          return ud(ud({}, kd), {}, td({}, pd, dd(pd, Jd[pd])))
        }), {})
      },
      Hd = function(dd, Jd, kd) {
        return dd.map((function(dd) {
          return "".concat((pd = dd, pd.replace(/([A-Z])/g, (function(dd) {
            return "-".concat(dd.toLowerCase())
          }))), " ").concat(Jd, "ms ").concat(kd);
          var pd
        })).join(",")
      };

    function wd(dd, Jd) {
      return function(dd) {
        if (Array.isArray(dd)) return dd
      }(dd) || function(dd, Jd) {
        var kd = null == dd ? null : "undefined" != typeof Symbol && dd[Symbol.iterator] || dd["@@iterator"];
        if (null != kd) {
          var pd, Nd, Wd, Pd, Zd = [],
            gd = !0,
            Cd = !1;
          try {
            if (Wd = (kd = kd.call(dd)).next, 0 === Jd) {
              if (Object(kd) !== kd) return;
              gd = !1
            } else
              for (; !(gd = (pd = Wd.call(kd)).done) && (Zd.push(pd.value), Zd.length !== Jd); gd = !0);
          } catch (dd) {
            Cd = !0, Nd = dd
          } finally {
            try {
              if (!gd && null != kd.return && (Pd = kd.return(), Object(Pd) !== Pd)) return
            } finally {
              if (Cd) throw Nd
            }
          }
          return Zd
        }
      }(dd, Jd) || dJ(dd, Jd) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Ad(dd) {
      return function(dd) {
        if (Array.isArray(dd)) return JJ(dd)
      }(dd) || function(dd) {
        if ("undefined" !== typeof Symbol && null != dd[Symbol.iterator] || null != dd["@@iterator"]) return Array.from(dd)
      }(dd) || dJ(dd) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function dJ(dd, Jd) {
      if (dd) {
        if ("string" === typeof dd) return JJ(dd, Jd);
        var kd = Object.prototype.toString.call(dd).slice(8, -1);
        return "Object" === kd && dd.constructor && (kd = dd.constructor.name), "Map" === kd || "Set" === kd ? Array.from(dd) : "Arguments" === kd || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(kd) ? JJ(dd, Jd) : void 0
      }
    }

    function JJ(dd, Jd) {
      (null == Jd || Jd > dd.length) && (Jd = dd.length);
      for (var kd = 0, pd = new Array(Jd); kd < Jd; kd++) pd[kd] = dd[kd];
      return pd
    }
    var kJ = 1e-4,
      pJ = function(dd, Jd) {
        return [0, 3 * dd, 3 * Jd - 6 * dd, 3 * dd - 3 * Jd + 1]
      },
      NJ = function(dd, Jd) {
        return dd.map((function(dd, kd) {
          return dd * Math.pow(Jd, kd)
        })).reduce((function(dd, Jd) {
          return dd + Jd
        }))
      },
      WJ = function(dd, Jd) {
        return function(kd) {
          var pd = pJ(dd, Jd);
          return NJ(pd, kd)
        }
      },
      PJ = function() {
        for (var dd = arguments.length, Jd = new Array(dd), kd = 0; kd < dd; kd++) Jd[kd] = arguments[kd];
        var pd = Jd[0],
          Nd = Jd[1],
          Wd = Jd[2],
          Pd = Jd[3];
        if (1 === Jd.length) switch (Jd[0]) {
          case "linear":
            pd = 0, Nd = 0, Wd = 1, Pd = 1;
            break;
          case "ease":
            pd = .25, Nd = .1, Wd = .25, Pd = 1;
            break;
          case "ease-in":
            pd = .42, Nd = 0, Wd = 1, Pd = 1;
            break;
          case "ease-out":
            pd = .42, Nd = 0, Wd = .58, Pd = 1;
            break;
          case "ease-in-out":
            pd = 0, Nd = 0, Wd = .58, Pd = 1;
            break;
          default:
            var Zd = Jd[0].split("(");
            if ("cubic-bezier" === Zd[0] && 4 === Zd[1].split(")")[0].split(",").length) {
              var gd = wd(Zd[1].split(")")[0].split(",").map((function(dd) {
                return parseFloat(dd)
              })), 4);
              pd = gd[0], Nd = gd[1], Wd = gd[2], Pd = gd[3]
            }
        } [pd, Wd, Nd, Pd].every((function(dd) {
          return "number" === typeof dd && dd >= 0 && dd <= 1
        }));
        var Cd, Kd, od = WJ(pd, Wd),
          ld = WJ(Nd, Pd),
          Qd = (Cd = pd, Kd = Wd, function(dd) {
            var Jd = pJ(Cd, Kd),
              kd = [].concat(Ad(Jd.map((function(dd, Jd) {
                return dd * Jd
              })).slice(1)), [0]);
            return NJ(kd, dd)
          }),
          Ld = function(dd) {
            for (var Jd, kd = dd > 1 ? 1 : dd, pd = kd, Nd = 0; Nd < 8; ++Nd) {
              var Wd = od(pd) - kd,
                Pd = Qd(pd);
              if (Math.abs(Wd - kd) < kJ || Pd < kJ) return ld(pd);
              pd = (Jd = pd - Wd / Pd) > 1 ? 1 : Jd < 0 ? 0 : Jd
            }
            return ld(pd)
          };
        return Ld.isStepper = !1, Ld
      },
      ZJ = function() {
        for (var dd = arguments.length, Jd = new Array(dd), kd = 0; kd < dd; kd++) Jd[kd] = arguments[kd];
        var pd = Jd[0];
        if ("string" === typeof pd) switch (pd) {
          case "ease":
          case "ease-in-out":
          case "ease-out":
          case "ease-in":
          case "linear":
            return PJ(pd);
          case "spring":
            return function() {
              var dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                Jd = dd.stiff,
                kd = void 0 === Jd ? 100 : Jd,
                pd = dd.damping,
                Nd = void 0 === pd ? 8 : pd,
                Wd = dd.dt,
                Pd = void 0 === Wd ? 17 : Wd,
                Zd = function(dd, Jd, pd) {
                  var Wd = pd + (-(dd - Jd) * kd - pd * Nd) * Pd / 1e3,
                    Zd = pd * Pd / 1e3 + dd;
                  return Math.abs(Zd - Jd) < kJ && Math.abs(Wd) < kJ ? [Jd, 0] : [Zd, Wd]
                };
              return Zd.isStepper = !0, Zd.dt = Pd, Zd
            }();
          default:
            if ("cubic-bezier" === pd.split("(")[0]) return PJ(pd)
        }
        return "function" === typeof pd ? pd : null
      };

    function gJ(dd) {
      return gJ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(dd) {
        return typeof dd
      } : function(dd) {
        return dd && "function" == typeof Symbol && dd.constructor === Symbol && dd !== Symbol.prototype ? "symbol" : typeof dd
      }, gJ(dd)
    }

    function CJ(dd) {
      return function(dd) {
        if (Array.isArray(dd)) return OJ(dd)
      }(dd) || function(dd) {
        if ("undefined" !== typeof Symbol && null != dd[Symbol.iterator] || null != dd["@@iterator"]) return Array.from(dd)
      }(dd) || LJ(dd) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function KJ(dd, Jd) {
      var kd = Object.keys(dd);
      if (Object.getOwnPropertySymbols) {
        var pd = Object.getOwnPropertySymbols(dd);
        Jd && (pd = pd.filter((function(Jd) {
          return Object.getOwnPropertyDescriptor(dd, Jd).enumerable
        }))), kd.push.apply(kd, pd)
      }
      return kd
    }

    function oJ(dd) {
      for (var Jd = 1; Jd < arguments.length; Jd++) {
        var kd = null != arguments[Jd] ? arguments[Jd] : {};
        Jd % 2 ? KJ(Object(kd), !0).forEach((function(Jd) {
          lJ(dd, Jd, kd[Jd])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(dd, Object.getOwnPropertyDescriptors(kd)) : KJ(Object(kd)).forEach((function(Jd) {
          Object.defineProperty(dd, Jd, Object.getOwnPropertyDescriptor(kd, Jd))
        }))
      }
      return dd
    }

    function lJ(dd, Jd, kd) {
      return (Jd = function(dd) {
        var Jd = function(dd, Jd) {
          if ("object" !== gJ(dd) || null === dd) return dd;
          var kd = dd[Symbol.toPrimitive];
          if (void 0 !== kd) {
            var pd = kd.call(dd, Jd || "default");
            if ("object" !== gJ(pd)) return pd;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === Jd ? String : Number)(dd)
        }(dd, "string");
        return "symbol" === gJ(Jd) ? Jd : String(Jd)
      }(Jd)) in dd ? Object.defineProperty(dd, Jd, {
        value: kd,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : dd[Jd] = kd, dd
    }

    function QJ(dd, Jd) {
      return function(dd) {
        if (Array.isArray(dd)) return dd
      }(dd) || function(dd, Jd) {
        var kd = null == dd ? null : "undefined" != typeof Symbol && dd[Symbol.iterator] || dd["@@iterator"];
        if (null != kd) {
          var pd, Nd, Wd, Pd, Zd = [],
            gd = !0,
            Cd = !1;
          try {
            if (Wd = (kd = kd.call(dd)).next, 0 === Jd) {
              if (Object(kd) !== kd) return;
              gd = !1
            } else
              for (; !(gd = (pd = Wd.call(kd)).done) && (Zd.push(pd.value), Zd.length !== Jd); gd = !0);
          } catch (dd) {
            Cd = !0, Nd = dd
          } finally {
            try {
              if (!gd && null != kd.return && (Pd = kd.return(), Object(Pd) !== Pd)) return
            } finally {
              if (Cd) throw Nd
            }
          }
          return Zd
        }
      }(dd, Jd) || LJ(dd, Jd) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function LJ(dd, Jd) {
      if (dd) {
        if ("string" === typeof dd) return OJ(dd, Jd);
        var kd = Object.prototype.toString.call(dd).slice(8, -1);
        return "Object" === kd && dd.constructor && (kd = dd.constructor.name), "Map" === kd || "Set" === kd ? Array.from(dd) : "Arguments" === kd || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(kd) ? OJ(dd, Jd) : void 0
      }
    }

    function OJ(dd, Jd) {
      (null == Jd || Jd > dd.length) && (Jd = dd.length);
      for (var kd = 0, pd = new Array(Jd); kd < Jd; kd++) pd[kd] = dd[kd];
      return pd
    }
    var eJ = function(dd, Jd, kd) {
        return dd + (Jd - dd) * kd
      },
      RJ = function(dd) {
        return dd.from !== dd.to
      },
      IJ = function dd(Jd, kd, pd) {
        var Nd = zd((function(dd, kd) {
          if (RJ(kd)) {
            var pd = QJ(Jd(kd.from, kd.to, kd.hO), 2),
              Nd = pd[0],
              Wd = pd[1];
            return oJ(oJ({}, kd), {}, {
              from: Nd,
              hO: Wd
            })
          }
          return kd
        }), kd);
        return pd < 1 ? zd((function(dd, Jd) {
          return RJ(Jd) ? oJ(oJ({}, Jd), {}, {
            hO: eJ(Jd.hO, Nd[dd].hO, pd),
            from: eJ(Jd.from, Nd[dd].from, pd)
          }) : Jd
        }), kd) : dd(Jd, Nd, pd - 1)
      };
    const GJ = function(dd, Jd, kd, pd, Nd) {
      var Wd, Pd, Zd, gd, Cd = (Wd = dd, Pd = Jd, [Object.keys(Wd), Object.keys(Pd)].reduce((function(dd, Jd) {
          return dd.filter((function(dd) {
            return Jd.includes(dd)
          }))
        }))),
        Kd = Cd.reduce((function(kd, pd) {
          return oJ(oJ({}, kd), {}, lJ({}, pd, [dd[pd], Jd[pd]]))
        }), {}),
        od = Cd.reduce((function(kd, pd) {
          return oJ(oJ({}, kd), {}, lJ({}, pd, {
            from: dd[pd],
            hO: 0,
            to: Jd[pd]
          }))
        }), {}),
        ld = -1,
        Qd = function() {
          return null
        };
      return Qd = kd.isStepper ? function(pd) {
          Zd || (Zd = pd);
          var Wd = (pd - Zd) / kd.dt;
          od = IJ(kd, od, Wd), Nd(oJ(oJ(oJ({}, dd), Jd), zd((function(dd, Jd) {
            return Jd.from
          }), od))), Zd = pd, Object.values(od).filter(RJ).length && (ld = requestAnimationFrame(Qd))
        } : function(Wd) {
          gd || (gd = Wd);
          var Pd = (Wd - gd) / pd,
            Zd = zd((function(dd, Jd) {
              return eJ.apply(void 0, CJ(Jd).concat([kd(Pd)]))
            }), Kd);
          if (Nd(oJ(oJ(oJ({}, dd), Jd), Zd)), Pd < 1) ld = requestAnimationFrame(Qd);
          else {
            var Cd = zd((function(dd, Jd) {
              return eJ.apply(void 0, CJ(Jd).concat([kd(1)]))
            }), Kd);
            Nd(oJ(oJ(oJ({}, dd), Jd), Cd))
          }
        },
        function() {
          return requestAnimationFrame(Qd),
            function() {
              cancelAnimationFrame(ld)
            }
        }
    };

    function vJ(dd) {
      return vJ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(dd) {
        return typeof dd
      } : function(dd) {
        return dd && "function" == typeof Symbol && dd.constructor === Symbol && dd !== Symbol.prototype ? "symbol" : typeof dd
      }, vJ(dd)
    }
    var xJ = ["children", "ZQ", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];

    function qJ(dd, Jd) {
      if (null == dd) return {};
      var kd, pd, Nd = function(dd, Jd) {
        if (null == dd) return {};
        var kd, pd, Nd = {},
          Wd = Object.keys(dd);
        for (pd = 0; pd < Wd.length; pd++) kd = Wd[pd], Jd.indexOf(kd) >= 0 || (Nd[kd] = dd[kd]);
        return Nd
      }(dd, Jd);
      if (Object.getOwnPropertySymbols) {
        var Wd = Object.getOwnPropertySymbols(dd);
        for (pd = 0; pd < Wd.length; pd++) kd = Wd[pd], Jd.indexOf(kd) >= 0 || Object.prototype.propertyIsEnumerable.call(dd, kd) && (Nd[kd] = dd[kd])
      }
      return Nd
    }

    function BJ(dd) {
      return function(dd) {
        if (Array.isArray(dd)) return sJ(dd)
      }(dd) || function(dd) {
        if ("undefined" !== typeof Symbol && null != dd[Symbol.iterator] || null != dd["@@iterator"]) return Array.from(dd)
      }(dd) || function(dd, Jd) {
        if (!dd) return;
        if ("string" === typeof dd) return sJ(dd, Jd);
        var kd = Object.prototype.toString.call(dd).slice(8, -1);
        "Object" === kd && dd.constructor && (kd = dd.constructor.name);
        if ("Map" === kd || "Set" === kd) return Array.from(dd);
        if ("Arguments" === kd || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(kd)) return sJ(dd, Jd)
      }(dd) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function sJ(dd, Jd) {
      (null == Jd || Jd > dd.length) && (Jd = dd.length);
      for (var kd = 0, pd = new Array(Jd); kd < Jd; kd++) pd[kd] = dd[kd];
      return pd
    }

    function iJ(dd, Jd) {
      var kd = Object.keys(dd);
      if (Object.getOwnPropertySymbols) {
        var pd = Object.getOwnPropertySymbols(dd);
        Jd && (pd = pd.filter((function(Jd) {
          return Object.getOwnPropertyDescriptor(dd, Jd).enumerable
        }))), kd.push.apply(kd, pd)
      }
      return kd
    }

    function aJ(dd) {
      for (var Jd = 1; Jd < arguments.length; Jd++) {
        var kd = null != arguments[Jd] ? arguments[Jd] : {};
        Jd % 2 ? iJ(Object(kd), !0).forEach((function(Jd) {
          MJ(dd, Jd, kd[Jd])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(dd, Object.getOwnPropertyDescriptors(kd)) : iJ(Object(kd)).forEach((function(Jd) {
          Object.defineProperty(dd, Jd, Object.getOwnPropertyDescriptor(kd, Jd))
        }))
      }
      return dd
    }

    function MJ(dd, Jd, kd) {
      return (Jd = YJ(Jd)) in dd ? Object.defineProperty(dd, Jd, {
        value: kd,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : dd[Jd] = kd, dd
    }

    function FJ(dd, Jd) {
      for (var kd = 0; kd < Jd.length; kd++) {
        var pd = Jd[kd];
        pd.enumerable = pd.enumerable || !1, pd.configurable = !0, "value" in pd && (pd.writable = !0), Object.defineProperty(dd, YJ(pd.key), pd)
      }
    }

    function YJ(dd) {
      var Jd = function(dd, Jd) {
        if ("object" !== vJ(dd) || null === dd) return dd;
        var kd = dd[Symbol.toPrimitive];
        if (void 0 !== kd) {
          var pd = kd.call(dd, Jd || "default");
          if ("object" !== vJ(pd)) return pd;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Jd ? String : Number)(dd)
      }(dd, "string");
      return "symbol" === vJ(Jd) ? Jd : String(Jd)
    }

    function mJ(dd, Jd) {
      return mJ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(dd, Jd) {
        return dd.__proto__ = Jd, dd
      }, mJ(dd, Jd)
    }

    function bJ(dd) {
      var Jd = function() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (dd) {
          return !1
        }
      }();
      return function() {
        var kd, pd = XJ(dd);
        if (Jd) {
          var Nd = XJ(this).constructor;
          kd = Reflect.construct(pd, arguments, Nd)
        } else kd = pd.apply(this, arguments);
        return SJ(this, kd)
      }
    }

    function SJ(dd, Jd) {
      if (Jd && ("object" === vJ(Jd) || "function" === typeof Jd)) return Jd;
      if (void 0 !== Jd) throw new TypeError("Derived constructors may only return object or undefined");
      return jJ(dd)
    }

    function jJ(dd) {
      if (void 0 === dd) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return dd
    }

    function XJ(dd) {
      return XJ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(dd) {
        return dd.__proto__ || Object.getPrototypeOf(dd)
      }, XJ(dd)
    }
    var fJ = function(dd) {
      ! function(dd, Jd) {
        if ("function" !== typeof Jd && null !== Jd) throw new TypeError("Super expression must either be null or a function");
        dd.prototype = Object.create(Jd && Jd.prototype, {
          constructor: {
            value: dd,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(dd, "prototype", {
          writable: !1
        }), Jd && mJ(dd, Jd)
      }(Pd, dd);
      var Jd, kd, Nd, Wd = bJ(Pd);

      function Pd(dd, Jd) {
        var kd;
        ! function(dd, Jd) {
          if (!(dd instanceof Jd)) throw new TypeError("Cannot call a class as a function")
        }(this, Pd);
        var pd = (kd = Wd.call(this, dd, Jd)).props,
          Nd = pd.isActive,
          Zd = pd.attributeName,
          gd = pd.from,
          Cd = pd.to,
          Kd = pd.steps,
          od = pd.children,
          ld = pd.duration;
        if (kd.handleStyleChange = kd.handleStyleChange.bind(jJ(kd)), kd.changeStyle = kd.changeStyle.bind(jJ(kd)), !Nd || ld <= 0) return kd.state = {
          style: {}
        }, "function" === typeof od && (kd.state = {
          style: Cd
        }), SJ(kd);
        if (Kd && Kd.length) kd.state = {
          style: Kd[0].style
        };
        else if (gd) {
          if ("function" === typeof od) return kd.state = {
            style: gd
          }, SJ(kd);
          kd.state = {
            style: Zd ? MJ({}, Zd, gd) : gd
          }
        } else kd.state = {
          style: {}
        };
        return kd
      }
      return Jd = Pd, (kd = [{
        key: "componentDidMount",
        value: function() {
          var dd = this.props,
            Jd = dd.isActive,
            kd = dd.canBegin;
          this.mounted = !0, Jd && kd && this.runAnimation(this.props)
        }
      }, {
        key: "componentDidUpdate",
        value: function(dd) {
          var Jd = this.props,
            kd = Jd.isActive,
            pd = Jd.canBegin,
            Nd = Jd.attributeName,
            Wd = Jd.shouldReAnimate,
            Pd = Jd.to,
            Zd = Jd.from,
            gd = this.state.style;
          if (pd)
            if (kd) {
              if (!(nd(dd.to, Pd) && dd.canBegin && dd.isActive)) {
                var Cd = !dd.canBegin || !dd.isActive;
                this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
                var Kd = Cd || Wd ? Zd : dd.to;
                if (this.state && gd) {
                  var od = {
                    style: Nd ? MJ({}, Nd, Kd) : Kd
                  };
                  (Nd && gd[Nd] !== Kd || !Nd && gd !== Kd) && this.setState(od)
                }
                this.runAnimation(aJ(aJ({}, this.props), {}, {
                  from: Kd,
                  ZQ: 0
                }))
              }
            } else {
              var ld = {
                style: Nd ? MJ({}, Nd, Pd) : Pd
              };
              this.state && gd && (Nd && gd[Nd] !== Pd || !Nd && gd !== Pd) && this.setState(ld)
            }
        }
      }, {
        key: "componentWillUnmount",
        value: function() {
          this.mounted = !1;
          var dd = this.props.onAnimationEnd;
          this.unSubscribe && this.unSubscribe(), this.manager && (this.manager.stop(), this.manager = null), this.stopJSAnimation && this.stopJSAnimation(), dd && dd()
        }
      }, {
        key: "handleStyleChange",
        value: function(dd) {
          this.changeStyle(dd)
        }
      }, {
        key: "changeStyle",
        value: function(dd) {
          this.mounted && this.setState({
            style: dd
          })
        }
      }, {
        key: "runJSAnimation",
        value: function(dd) {
          var Jd = this,
            kd = dd.from,
            pd = dd.to,
            Nd = dd.duration,
            Wd = dd.easing,
            Pd = dd.ZQ,
            Zd = dd.onAnimationEnd,
            gd = dd.onAnimationStart,
            Cd = GJ(kd, pd, ZJ(Wd), Nd, this.changeStyle);
          this.manager.start([gd, Pd, function() {
            Jd.stopJSAnimation = Cd()
          }, Nd, Zd])
        }
      }, {
        key: "runStepAnimation",
        value: function(dd) {
          var Jd = this,
            kd = dd.steps,
            pd = dd.ZQ,
            Nd = dd.onAnimationStart,
            Wd = kd[0],
            Pd = Wd.style,
            Zd = Wd.duration,
            gd = void 0 === Zd ? 0 : Zd;
          return this.manager.start([Nd].concat(BJ(kd.reduce((function(dd, pd, Nd) {
            if (0 === Nd) return dd;
            var Wd = pd.duration,
              Pd = pd.easing,
              Zd = void 0 === Pd ? "ease" : Pd,
              gd = pd.style,
              Cd = pd.properties,
              Kd = pd.onAnimationEnd,
              od = Nd > 0 ? kd[Nd - 1] : pd,
              ld = Cd || Object.keys(gd);
            if ("function" === typeof Zd || "spring" === Zd) return [].concat(BJ(dd), [Jd.runJSAnimation.bind(Jd, {
              from: od.style,
              to: gd,
              duration: Wd,
              easing: Zd
            }), Wd]);
            var Qd = Hd(ld, Wd, Zd),
              Ld = aJ(aJ(aJ({}, od.style), gd), {}, {
                transition: Qd
              });
            return [].concat(BJ(dd), [Ld, Wd, Kd]).filter(Vd)
          }), [Pd, Math.max(gd, pd)])), [dd.onAnimationEnd]))
        }
      }, {
        key: "runAnimation",
        value: function(dd) {
          this.manager || (this.manager = cd());
          var Jd = dd.ZQ,
            kd = dd.duration,
            pd = dd.attributeName,
            Nd = dd.to,
            Wd = dd.easing,
            Pd = dd.onAnimationStart,
            Zd = dd.onAnimationEnd,
            gd = dd.steps,
            Cd = dd.children,
            Kd = this.manager;
          if (this.unSubscribe = Kd.subscribe(this.handleStyleChange), "function" !== typeof Wd && "function" !== typeof Cd && "spring" !== Wd)
            if (gd.length > 1) this.runStepAnimation(dd);
            else {
              var od = pd ? MJ({}, pd, Nd) : Nd,
                ld = Hd(Object.keys(od), kd, Wd);
              Kd.start([Pd, Jd, aJ(aJ({}, od), {}, {
                transition: ld
              }), kd, Zd])
            }
          else this.runJSAnimation(dd)
        }
      }, {
        key: "render",
        value: function() {
          var dd = this.props,
            Jd = dd.children,
            kd = (dd.ZQ, dd.duration),
            Nd = (dd.attributeName, dd.easing, dd.isActive),
            Wd = (dd.steps, dd.from, dd.to, dd.canBegin, dd.onAnimationEnd, dd.shouldReAnimate, dd.onAnimationReStart, qJ(dd, xJ)),
            Pd = pd.Children.count(Jd),
            Zd = this.state.style;
          if ("function" === typeof Jd) return Jd(Zd);
          if (!Nd || 0 === Pd || kd <= 0) return Jd;
          var gd = function(dd) {
            var Jd = dd.props,
              kd = Jd.style,
              Nd = void 0 === kd ? {} : kd,
              Pd = Jd.className;
            return (0, pd.cloneElement)(dd, aJ(aJ({}, Wd), {}, {
              style: aJ(aJ({}, Nd), Zd),
              className: Pd
            }))
          };
          return 1 === Pd ? gd(pd.Children.only(Jd)) : pd.createElement("div", null, pd.Children.map(Jd, (function(dd) {
            return gd(dd)
          })))
        }
      }]) && FJ(Jd.prototype, kd), Nd && FJ(Jd, Nd), Object.defineProperty(Jd, "prototype", {
        writable: !1
      }), Pd
    }(pd.PureComponent);
    fJ.displayName = "Animate", fJ.defaultProps = {
      ZQ: 0,
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
    }, fJ.propTypes = {
      from: Wd().oneOfType([Wd().object, Wd().string]),
      to: Wd().oneOfType([Wd().object, Wd().string]),
      attributeName: Wd().string,
      duration: Wd().number,
      ZQ: Wd().number,
      easing: Wd().oneOfType([Wd().string, Wd().func]),
      steps: Wd().arrayOf(Wd().shape({
        duration: Wd().number.isRequired,
        style: Wd().object.isRequired,
        easing: Wd().oneOfType([Wd().oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]), Wd().func]),
        properties: Wd().arrayOf("string"),
        onAnimationEnd: Wd().func
      })),
      children: Wd().oneOfType([Wd().node, Wd().func]),
      isActive: Wd().bool,
      canBegin: Wd().bool,
      onAnimationEnd: Wd().func,
      shouldReAnimate: Wd().bool,
      onAnimationStart: Wd().func,
      onAnimationReStart: Wd().func
    };
    const nJ = fJ
  },
  6244: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Td
    });
    var pd, Nd = kd(56),
      Wd = kd(4935),
      Pd = kd(5992),
      Zd = kd(5131),
      gd = kd.n(Zd),
      Cd = kd(6043),
      Kd = kd.n(Cd),
      od = kd(5289),
      ld = kd.n(od),
      Qd = kd(5048),
      Ld = kd.n(Qd),
      Od = kd(6085),
      ed = kd.n(Od),
      Rd = kd(6237),
      Id = kd(5978),
      Gd = kd(5843),
      vd = kd(6152),
      xd = kd(5854),
      qd = kd(5029),
      Bd = kd(6019),
      sd = kd(5297),
      ad = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"],
      Md = ["key"];

    function Fd(dd) {
      return Fd = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(dd) {
        return typeof dd
      } : function(dd) {
        return dd && "function" == typeof Symbol && dd.constructor === Symbol && dd !== Symbol.prototype ? "symbol" : typeof dd
      }, Fd(dd)
    }

    function Yd(dd, Jd) {
      if (null == dd) return {};
      var kd, pd, Nd = function(dd, Jd) {
        if (null == dd) return {};
        var kd = {};
        for (var pd in dd)
          if (Object.prototype.hasOwnProperty.call(dd, pd)) {
            if (Jd.indexOf(pd) >= 0) continue;
            kd[pd] = dd[pd]
          } return kd
      }(dd, Jd);
      if (Object.getOwnPropertySymbols) {
        var Wd = Object.getOwnPropertySymbols(dd);
        for (pd = 0; pd < Wd.length; pd++) kd = Wd[pd], Jd.indexOf(kd) >= 0 || Object.prototype.propertyIsEnumerable.call(dd, kd) && (Nd[kd] = dd[kd])
      }
      return Nd
    }

    function md() {
      return md = Object.assign ? Object.assign.bind() : function(dd) {
        for (var Jd = 1; Jd < arguments.length; Jd++) {
          var kd = arguments[Jd];
          for (var pd in kd) Object.prototype.hasOwnProperty.call(kd, pd) && (dd[pd] = kd[pd])
        }
        return dd
      }, md.apply(this, arguments)
    }

    function bd(dd, Jd) {
      var kd = Object.keys(dd);
      if (Object.getOwnPropertySymbols) {
        var pd = Object.getOwnPropertySymbols(dd);
        Jd && (pd = pd.filter((function(Jd) {
          return Object.getOwnPropertyDescriptor(dd, Jd).enumerable
        }))), kd.push.apply(kd, pd)
      }
      return kd
    }

    function Sd(dd) {
      for (var Jd = 1; Jd < arguments.length; Jd++) {
        var kd = null != arguments[Jd] ? arguments[Jd] : {};
        Jd % 2 ? bd(Object(kd), !0).forEach((function(Jd) {
          yd(dd, Jd, kd[Jd])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(dd, Object.getOwnPropertyDescriptors(kd)) : bd(Object(kd)).forEach((function(Jd) {
          Object.defineProperty(dd, Jd, Object.getOwnPropertyDescriptor(kd, Jd))
        }))
      }
      return dd
    }

    function jd(dd, Jd) {
      for (var kd = 0; kd < Jd.length; kd++) {
        var pd = Jd[kd];
        pd.enumerable = pd.enumerable || !1, pd.configurable = !0, "value" in pd && (pd.writable = !0), Object.defineProperty(dd, Dd(pd.key), pd)
      }
    }

    function Xd(dd, Jd, kd) {
      return Jd = nd(Jd),
        function(dd, Jd) {
          if (Jd && ("object" === Fd(Jd) || "function" === typeof Jd)) return Jd;
          if (void 0 !== Jd) throw new TypeError("Derived constructors may only return object or undefined");
          return function(dd) {
            if (void 0 === dd) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return dd
          }(dd)
        }(dd, fd() ? Reflect.construct(Jd, kd || [], nd(dd).constructor) : Jd.apply(dd, kd))
    }

    function fd() {
      try {
        var dd = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (dd) {}
      return (fd = function() {
        return !!dd
      })()
    }

    function nd(dd) {
      return nd = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(dd) {
        return dd.__proto__ || Object.getPrototypeOf(dd)
      }, nd(dd)
    }

    function Ud(dd, Jd) {
      return Ud = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(dd, Jd) {
        return dd.__proto__ = Jd, dd
      }, Ud(dd, Jd)
    }

    function yd(dd, Jd, kd) {
      return (Jd = Dd(Jd)) in dd ? Object.defineProperty(dd, Jd, {
        value: kd,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : dd[Jd] = kd, dd
    }

    function Dd(dd) {
      var Jd = function(dd, Jd) {
        if ("object" != Fd(dd) || !dd) return dd;
        var kd = dd[Symbol.toPrimitive];
        if (void 0 !== kd) {
          var pd = kd.call(dd, Jd || "default");
          if ("object" != Fd(pd)) return pd;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Jd ? String : Number)(dd)
      }(dd, "string");
      return "symbol" == Fd(Jd) ? Jd : Jd + ""
    }
    var Td = function(dd) {
      function Jd() {
        var dd;
        ! function(dd, Jd) {
          if (!(dd instanceof Jd)) throw new TypeError("Cannot call a class as a function")
        }(this, Jd);
        for (var kd = arguments.length, pd = new Array(kd), Nd = 0; Nd < kd; Nd++) pd[Nd] = arguments[Nd];
        return yd(dd = Xd(this, Jd, [].concat(pd)), "state", {
          isAnimationFinished: !0
        }), yd(dd, "id", (0, qd.G)("recharts-area-")), yd(dd, "handleAnimationEnd", (function() {
          var Jd = dd.props.onAnimationEnd;
          dd.setState({
            isAnimationFinished: !0
          }), gd()(Jd) && Jd()
        })), yd(dd, "handleAnimationStart", (function() {
          var Jd = dd.props.onAnimationStart;
          dd.setState({
            isAnimationFinished: !1
          }), gd()(Jd) && Jd()
        })), dd
      }
      return function(dd, Jd) {
        if ("function" !== typeof Jd && null !== Jd) throw new TypeError("Super expression must either be null or a function");
        dd.prototype = Object.create(Jd && Jd.prototype, {
          constructor: {
            value: dd,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(dd, "prototype", {
          writable: !1
        }), Jd && Ud(dd, Jd)
      }(Jd, dd), kd = Jd, pd = [{
        key: "renderDots",
        value: function(dd, kd, pd) {
          var Wd = this.props.isAnimationActive,
            Pd = this.state.isAnimationFinished;
          if (Wd && !Pd) return null;
          var Zd = this.props,
            gd = Zd.dot,
            Cd = Zd.points,
            Kd = Zd.dataKey,
            od = (0, sd.e)(this.props, !1),
            ld = (0, sd.e)(gd, !0),
            Qd = Cd.map((function(dd, kd) {
              var pd = Sd(Sd(Sd({
                key: "dot-".concat(kd),
                r: 3
              }, od), ld), {}, {
                index: kd,
                cx: dd.x,
                cy: dd.y,
                dataKey: Kd,
                value: dd.value,
                payload: dd.payload,
                points: Cd
              });
              return Jd.renderDotItem(gd, pd)
            })),
            Ld = {
              clipPath: dd ? "url(#clipPath-".concat(kd ? "" : "dots-").concat(pd, ")") : null
            };
          return Nd.createElement(Gd.e, md({
            className: "recharts-area-dots"
          }, Ld), Qd)
        }
      }, {
        key: "renderHorizontalRect",
        value: function(dd) {
          var Jd = this.props,
            kd = Jd.baseLine,
            pd = Jd.points,
            Wd = Jd.strokeWidth,
            Pd = pd[0].x,
            Zd = pd[pd.length - 1].x,
            gd = dd * Math.abs(Pd - Zd),
            Cd = Kd()(pd.map((function(dd) {
              return dd.y || 0
            })));
          return (0, qd.B)(kd) && "number" === typeof kd ? Cd = Math.max(kd, Cd) : kd && Array.isArray(kd) && kd.length && (Cd = Math.max(Kd()(kd.map((function(dd) {
            return dd.y || 0
          }))), Cd)), (0, qd.B)(Cd) ? Nd.createElement("rect", {
            x: Pd < Zd ? Pd : Pd - gd,
            y: 0,
            width: gd,
            height: Math.floor(Cd + (Wd ? parseInt("".concat(Wd), 10) : 1))
          }) : null
        }
      }, {
        key: "renderVerticalRect",
        value: function(dd) {
          var Jd = this.props,
            kd = Jd.baseLine,
            pd = Jd.points,
            Wd = Jd.strokeWidth,
            Pd = pd[0].y,
            Zd = pd[pd.length - 1].y,
            gd = dd * Math.abs(Pd - Zd),
            Cd = Kd()(pd.map((function(dd) {
              return dd.x || 0
            })));
          return (0, qd.B)(kd) && "number" === typeof kd ? Cd = Math.max(kd, Cd) : kd && Array.isArray(kd) && kd.length && (Cd = Math.max(Kd()(kd.map((function(dd) {
            return dd.x || 0
          }))), Cd)), (0, qd.B)(Cd) ? Nd.createElement("rect", {
            x: 0,
            y: Pd < Zd ? Pd : Pd - gd,
            width: Cd + (Wd ? parseInt("".concat(Wd), 10) : 1),
            height: Math.floor(gd)
          }) : null
        }
      }, {
        key: "renderClipRect",
        value: function(dd) {
          return "vertical" === this.props.layout ? this.renderVerticalRect(dd) : this.renderHorizontalRect(dd)
        }
      }, {
        key: "renderAreaStatically",
        value: function(dd, Jd, kd, pd) {
          var Wd = this.props,
            Pd = Wd.layout,
            Zd = Wd.type,
            gd = Wd.stroke,
            Cd = Wd.connectNulls,
            Kd = Wd.isRange,
            od = (Wd.ref, Yd(Wd, ad));
          return Nd.createElement(Gd.e, {
            clipPath: kd ? "url(#clipPath-".concat(pd, ")") : null
          }, Nd.createElement(Rd.e, md({}, (0, sd.e)(od, !0), {
            points: dd,
            connectNulls: Cd,
            type: Zd,
            baseLine: Jd,
            layout: Pd,
            stroke: "none",
            className: "recharts-area-area"
          })), "none" !== gd && Nd.createElement(Rd.e, md({}, (0, sd.e)(this.props, !1), {
            className: "recharts-area-curve",
            layout: Pd,
            type: Zd,
            connectNulls: Cd,
            fill: "none",
            points: dd
          })), "none" !== gd && Kd && Nd.createElement(Rd.e, md({}, (0, sd.e)(this.props, !1), {
            className: "recharts-area-curve",
            layout: Pd,
            type: Zd,
            connectNulls: Cd,
            fill: "none",
            points: Jd
          })))
        }
      }, {
        key: "renderAreaWithAnimation",
        value: function(dd, Jd) {
          var kd = this,
            pd = this.props,
            Wd = pd.points,
            Zd = pd.baseLine,
            gd = pd.isAnimationActive,
            Cd = pd.animationBegin,
            Kd = pd.animationDuration,
            od = pd.animationEasing,
            Qd = pd.animationId,
            Od = this.state,
            ed = Od.prevPoints,
            Rd = Od.prevBaseLine;
          return Nd.createElement(Pd.d, {
            ZQ: Cd,
            duration: Kd,
            isActive: gd,
            easing: od,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "area-".concat(Qd),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(pd) {
            var Pd = pd.t;
            if (ed) {
              var gd, Cd = ed.length / Wd.length,
                Kd = Wd.map((function(dd, Jd) {
                  var kd = Math.floor(Jd * Cd);
                  if (ed[kd]) {
                    var pd = ed[kd],
                      Nd = (0, qd.s)(pd.x, dd.x),
                      Wd = (0, qd.s)(pd.y, dd.y);
                    return Sd(Sd({}, dd), {}, {
                      x: Nd(Pd),
                      y: Wd(Pd)
                    })
                  }
                  return dd
                }));
              return gd = (0, qd.B)(Zd) && "number" === typeof Zd ? (0, qd.s)(Rd, Zd)(Pd) : ld()(Zd) || Ld()(Zd) ? (0, qd.s)(Rd, 0)(Pd) : Zd.map((function(dd, Jd) {
                var kd = Math.floor(Jd * Cd);
                if (Rd[kd]) {
                  var pd = Rd[kd],
                    Nd = (0, qd.s)(pd.x, dd.x),
                    Wd = (0, qd.s)(pd.y, dd.y);
                  return Sd(Sd({}, dd), {}, {
                    x: Nd(Pd),
                    y: Wd(Pd)
                  })
                }
                return dd
              })), kd.renderAreaStatically(Kd, gd, dd, Jd)
            }
            return Nd.createElement(Gd.e, null, Nd.createElement("defs", null, Nd.createElement("clipPath", {
              id: "animationClipPath-".concat(Jd)
            }, kd.renderClipRect(Pd))), Nd.createElement(Gd.e, {
              clipPath: "url(#animationClipPath-".concat(Jd, ")")
            }, kd.renderAreaStatically(Wd, Zd, dd, Jd)))
          }))
        }
      }, {
        key: "renderArea",
        value: function(dd, Jd) {
          var kd = this.props,
            pd = kd.points,
            Nd = kd.baseLine,
            Wd = kd.isAnimationActive,
            Pd = this.state,
            Zd = Pd.prevPoints,
            gd = Pd.prevBaseLine,
            Cd = Pd.totalLength;
          return Wd && pd && pd.length && (!Zd && Cd > 0 || !ed()(Zd, pd) || !ed()(gd, Nd)) ? this.renderAreaWithAnimation(dd, Jd) : this.renderAreaStatically(pd, Nd, dd, Jd)
        }
      }, {
        key: "render",
        value: function() {
          var dd, Jd = this.props,
            kd = Jd.hide,
            pd = Jd.dot,
            Pd = Jd.points,
            Zd = Jd.className,
            gd = Jd.top,
            Cd = Jd.left,
            Kd = Jd.xAxis,
            od = Jd.yAxis,
            Qd = Jd.width,
            Ld = Jd.height,
            Od = Jd.isAnimationActive,
            ed = Jd.id;
          if (kd || !Pd || !Pd.length) return null;
          var Rd = this.state.isAnimationFinished,
            Id = 1 === Pd.length,
            xd = (0, Wd.b)("recharts-area", Zd),
            qd = Kd && Kd.allowDataOverflow,
            Bd = od && od.allowDataOverflow,
            ad = qd || Bd,
            Md = ld()(ed) ? this.id : ed,
            Fd = null !== (dd = (0, sd.e)(pd, !1)) && void 0 !== dd ? dd : {
              r: 3,
              strokeWidth: 2
            },
            Yd = Fd.r,
            md = void 0 === Yd ? 3 : Yd,
            bd = Fd.strokeWidth,
            Sd = void 0 === bd ? 2 : bd,
            jd = ((0, sd.s)(pd) ? pd : {}).clipDot,
            Xd = void 0 === jd || jd,
            fd = 2 * md + Sd;
          return Nd.createElement(Gd.e, {
            className: xd
          }, qd || Bd ? Nd.createElement("defs", null, Nd.createElement("clipPath", {
            id: "clipPath-".concat(Md)
          }, Nd.createElement("rect", {
            x: qd ? Cd : Cd - Qd / 2,
            y: Bd ? gd : gd - Ld / 2,
            width: qd ? Qd : 2 * Qd,
            height: Bd ? Ld : 2 * Ld
          })), !Xd && Nd.createElement("clipPath", {
            id: "clipPath-dots-".concat(Md)
          }, Nd.createElement("rect", {
            x: Cd - fd / 2,
            y: gd - fd / 2,
            width: Qd + fd,
            height: Ld + fd
          }))) : null, Id ? null : this.renderArea(ad, Md), (pd || Id) && this.renderDots(ad, Xd, Md), (!Od || Rd) && vd.e.renderCallByParent(this.props, Pd))
        }
      }], Zd = [{
        key: "getDerivedStateFromProps",
        value: function(dd, Jd) {
          return dd.animationId !== Jd.prevAnimationId ? {
            prevAnimationId: dd.animationId,
            curPoints: dd.points,
            curBaseLine: dd.baseLine,
            prevPoints: Jd.curPoints,
            prevBaseLine: Jd.curBaseLine
          } : dd.points !== Jd.curPoints || dd.baseLine !== Jd.curBaseLine ? {
            curPoints: dd.points,
            curBaseLine: dd.baseLine
          } : null
        }
      }], pd && jd(kd.prototype, pd), Zd && jd(kd, Zd), Object.defineProperty(kd, "prototype", {
        writable: !1
      }), kd;
      var kd, pd, Zd
    }(Nd.PureComponent);
    pd = Td, yd(Td, "displayName", "Area"), yd(Td, "defaultProps", {
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
      isAnimationActive: !xd.b.isSsr,
      animationBegin: 0,
      animationDuration: 1500,
      animationEasing: "ease"
    }), yd(Td, "getBaseValue", (function(dd, Jd, kd, pd) {
      var Nd = dd.layout,
        Wd = dd.baseValue,
        Pd = Jd.props.baseValue,
        Zd = null !== Pd && void 0 !== Pd ? Pd : Wd;
      if ((0, qd.B)(Zd) && "number" === typeof Zd) return Zd;
      var gd = "horizontal" === Nd ? pd : kd,
        Cd = gd.scale.domain();
      if ("number" === gd.type) {
        var Kd = Math.max(Cd[0], Cd[1]),
          od = Math.min(Cd[0], Cd[1]);
        return "dataMin" === Zd ? od : "dataMax" === Zd || Kd < 0 ? Kd : Math.max(Math.min(Cd[0], Cd[1]), 0)
      }
      return "dataMin" === Zd ? Cd[0] : "dataMax" === Zd ? Cd[1] : Cd[0]
    })), yd(Td, "getComposedData", (function(dd) {
      var Jd, kd = dd.props,
        Nd = dd.item,
        Wd = dd.xAxis,
        Pd = dd.yAxis,
        Zd = dd.xAxisTicks,
        gd = dd.yAxisTicks,
        Cd = dd.bandSize,
        Kd = dd.dataKey,
        od = dd.stackedData,
        ld = dd.dataStartIndex,
        Qd = dd.displayedData,
        Ld = dd.offset,
        Od = kd.layout,
        ed = od && od.length,
        Rd = pd.getBaseValue(kd, Nd, Wd, Pd),
        Id = "horizontal" === Od,
        Gd = !1,
        vd = Qd.map((function(dd, Jd) {
          var kd;
          ed ? kd = od[ld + Jd] : (kd = (0, Bd.U)(dd, Kd), Array.isArray(kd) ? Gd = !0 : kd = [Rd, kd]);
          var pd = null == kd[1] || ed && null == (0, Bd.U)(dd, Kd);
          return Id ? {
            x: (0, Bd.x)({
              axis: Wd,
              ticks: Zd,
              bandSize: Cd,
              entry: dd,
              index: Jd
            }),
            y: pd ? null : Pd.scale(kd[1]),
            value: kd,
            payload: dd
          } : {
            x: pd ? null : Wd.scale(kd[1]),
            y: (0, Bd.x)({
              axis: Pd,
              ticks: gd,
              bandSize: Cd,
              entry: dd,
              index: Jd
            }),
            value: kd,
            payload: dd
          }
        }));
      return Jd = ed || Gd ? vd.map((function(dd) {
        var Jd = Array.isArray(dd.value) ? dd.value[0] : null;
        return Id ? {
          x: dd.x,
          y: null != Jd && null != dd.y ? Pd.scale(Jd) : null
        } : {
          x: null != Jd ? Wd.scale(Jd) : null,
          y: dd.y
        }
      })) : Id ? Pd.scale(Rd) : Wd.scale(Rd), Sd({
        points: vd,
        baseLine: Jd,
        layout: Od,
        isRange: Gd
      }, Ld)
    })), yd(Td, "renderDotItem", (function(dd, Jd) {
      var kd;
      if (Nd.isValidElement(dd)) kd = Nd.cloneElement(dd, Jd);
      else if (gd()(dd)) kd = dd(Jd);
      else {
        var pd = (0, Wd.b)("recharts-area-dot", "boolean" !== typeof dd ? dd.className : ""),
          Pd = Jd.key,
          Zd = Yd(Jd, Md);
        kd = Nd.createElement(Id.e, md({}, Zd, {
          key: Pd,
          className: pd
        }))
      }
      return kd
    }))
  },
  6145: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => ud
    });
    var pd = kd(56),
      Nd = kd(4935),
      Wd = kd(5992),
      Pd = kd(6085),
      Zd = kd.n(Pd),
      gd = kd(5289),
      Cd = kd.n(gd),
      Kd = kd(5843),
      od = kd(6092),
      ld = kd(6149),
      Qd = kd(6152),
      Ld = kd(5029),
      Od = kd(5297),
      ed = kd(5854),
      Rd = kd(6019),
      Id = kd(5317),
      Gd = kd(5836),
      vd = kd(6163),
      xd = ["x", "y"];

    function qd(dd) {
      return qd = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(dd) {
        return typeof dd
      } : function(dd) {
        return dd && "function" == typeof Symbol && dd.constructor === Symbol && dd !== Symbol.prototype ? "symbol" : typeof dd
      }, qd(dd)
    }

    function Bd() {
      return Bd = Object.assign ? Object.assign.bind() : function(dd) {
        for (var Jd = 1; Jd < arguments.length; Jd++) {
          var kd = arguments[Jd];
          for (var pd in kd) Object.prototype.hasOwnProperty.call(kd, pd) && (dd[pd] = kd[pd])
        }
        return dd
      }, Bd.apply(this, arguments)
    }

    function sd(dd, Jd) {
      var kd = Object.keys(dd);
      if (Object.getOwnPropertySymbols) {
        var pd = Object.getOwnPropertySymbols(dd);
        Jd && (pd = pd.filter((function(Jd) {
          return Object.getOwnPropertyDescriptor(dd, Jd).enumerable
        }))), kd.push.apply(kd, pd)
      }
      return kd
    }

    function ad(dd) {
      for (var Jd = 1; Jd < arguments.length; Jd++) {
        var kd = null != arguments[Jd] ? arguments[Jd] : {};
        Jd % 2 ? sd(Object(kd), !0).forEach((function(Jd) {
          Md(dd, Jd, kd[Jd])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(dd, Object.getOwnPropertyDescriptors(kd)) : sd(Object(kd)).forEach((function(Jd) {
          Object.defineProperty(dd, Jd, Object.getOwnPropertyDescriptor(kd, Jd))
        }))
      }
      return dd
    }

    function Md(dd, Jd, kd) {
      return (Jd = function(dd) {
        var Jd = function(dd, Jd) {
          if ("object" != qd(dd) || !dd) return dd;
          var kd = dd[Symbol.toPrimitive];
          if (void 0 !== kd) {
            var pd = kd.call(dd, Jd || "default");
            if ("object" != qd(pd)) return pd;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === Jd ? String : Number)(dd)
        }(dd, "string");
        return "symbol" == qd(Jd) ? Jd : Jd + ""
      }(Jd)) in dd ? Object.defineProperty(dd, Jd, {
        value: kd,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : dd[Jd] = kd, dd
    }

    function Fd(dd, Jd) {
      if (null == dd) return {};
      var kd, pd, Nd = function(dd, Jd) {
        if (null == dd) return {};
        var kd = {};
        for (var pd in dd)
          if (Object.prototype.hasOwnProperty.call(dd, pd)) {
            if (Jd.indexOf(pd) >= 0) continue;
            kd[pd] = dd[pd]
          } return kd
      }(dd, Jd);
      if (Object.getOwnPropertySymbols) {
        var Wd = Object.getOwnPropertySymbols(dd);
        for (pd = 0; pd < Wd.length; pd++) kd = Wd[pd], Jd.indexOf(kd) >= 0 || Object.prototype.propertyIsEnumerable.call(dd, kd) && (Nd[kd] = dd[kd])
      }
      return Nd
    }

    function Yd(dd, Jd) {
      var kd = dd.x,
        pd = dd.y,
        Nd = Fd(dd, xd),
        Wd = "".concat(kd),
        Pd = parseInt(Wd, 10),
        Zd = "".concat(pd),
        gd = parseInt(Zd, 10),
        Cd = "".concat(Jd.height || Nd.height),
        Kd = parseInt(Cd, 10),
        od = "".concat(Jd.width || Nd.width),
        ld = parseInt(od, 10);
      return ad(ad(ad(ad(ad({}, Jd), Nd), Pd ? {
        x: Pd
      } : {}), gd ? {
        y: gd
      } : {}), {}, {
        height: Kd,
        width: ld,
        name: Jd.name,
        radius: Jd.radius
      })
    }

    function md(dd) {
      return pd.createElement(vd.b, Bd({
        shapeType: "rectangle",
        propTransformer: Yd,
        activeClassName: "recharts-active-bar"
      }, dd))
    }
    var bd, Sd = ["value", "background"];

    function jd(dd) {
      return jd = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(dd) {
        return typeof dd
      } : function(dd) {
        return dd && "function" == typeof Symbol && dd.constructor === Symbol && dd !== Symbol.prototype ? "symbol" : typeof dd
      }, jd(dd)
    }

    function Xd(dd, Jd) {
      if (null == dd) return {};
      var kd, pd, Nd = function(dd, Jd) {
        if (null == dd) return {};
        var kd = {};
        for (var pd in dd)
          if (Object.prototype.hasOwnProperty.call(dd, pd)) {
            if (Jd.indexOf(pd) >= 0) continue;
            kd[pd] = dd[pd]
          } return kd
      }(dd, Jd);
      if (Object.getOwnPropertySymbols) {
        var Wd = Object.getOwnPropertySymbols(dd);
        for (pd = 0; pd < Wd.length; pd++) kd = Wd[pd], Jd.indexOf(kd) >= 0 || Object.prototype.propertyIsEnumerable.call(dd, kd) && (Nd[kd] = dd[kd])
      }
      return Nd
    }

    function fd() {
      return fd = Object.assign ? Object.assign.bind() : function(dd) {
        for (var Jd = 1; Jd < arguments.length; Jd++) {
          var kd = arguments[Jd];
          for (var pd in kd) Object.prototype.hasOwnProperty.call(kd, pd) && (dd[pd] = kd[pd])
        }
        return dd
      }, fd.apply(this, arguments)
    }

    function nd(dd, Jd) {
      var kd = Object.keys(dd);
      if (Object.getOwnPropertySymbols) {
        var pd = Object.getOwnPropertySymbols(dd);
        Jd && (pd = pd.filter((function(Jd) {
          return Object.getOwnPropertyDescriptor(dd, Jd).enumerable
        }))), kd.push.apply(kd, pd)
      }
      return kd
    }

    function Ud(dd) {
      for (var Jd = 1; Jd < arguments.length; Jd++) {
        var kd = null != arguments[Jd] ? arguments[Jd] : {};
        Jd % 2 ? nd(Object(kd), !0).forEach((function(Jd) {
          hd(dd, Jd, kd[Jd])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(dd, Object.getOwnPropertyDescriptors(kd)) : nd(Object(kd)).forEach((function(Jd) {
          Object.defineProperty(dd, Jd, Object.getOwnPropertyDescriptor(kd, Jd))
        }))
      }
      return dd
    }

    function yd(dd, Jd) {
      for (var kd = 0; kd < Jd.length; kd++) {
        var pd = Jd[kd];
        pd.enumerable = pd.enumerable || !1, pd.configurable = !0, "value" in pd && (pd.writable = !0), Object.defineProperty(dd, rd(pd.key), pd)
      }
    }

    function Dd(dd, Jd, kd) {
      return Jd = Ed(Jd),
        function(dd, Jd) {
          if (Jd && ("object" === jd(Jd) || "function" === typeof Jd)) return Jd;
          if (void 0 !== Jd) throw new TypeError("Derived constructors may only return object or undefined");
          return function(dd) {
            if (void 0 === dd) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return dd
          }(dd)
        }(dd, Td() ? Reflect.construct(Jd, kd || [], Ed(dd).constructor) : Jd.apply(dd, kd))
    }

    function Td() {
      try {
        var dd = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (dd) {}
      return (Td = function() {
        return !!dd
      })()
    }

    function Ed(dd) {
      return Ed = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(dd) {
        return dd.__proto__ || Object.getPrototypeOf(dd)
      }, Ed(dd)
    }

    function cd(dd, Jd) {
      return cd = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(dd, Jd) {
        return dd.__proto__ = Jd, dd
      }, cd(dd, Jd)
    }

    function hd(dd, Jd, kd) {
      return (Jd = rd(Jd)) in dd ? Object.defineProperty(dd, Jd, {
        value: kd,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : dd[Jd] = kd, dd
    }

    function rd(dd) {
      var Jd = function(dd, Jd) {
        if ("object" != jd(dd) || !dd) return dd;
        var kd = dd[Symbol.toPrimitive];
        if (void 0 !== kd) {
          var pd = kd.call(dd, Jd || "default");
          if ("object" != jd(pd)) return pd;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Jd ? String : Number)(dd)
      }(dd, "string");
      return "symbol" == jd(Jd) ? Jd : Jd + ""
    }
    var ud = function(dd) {
      function Jd() {
        var dd;
        ! function(dd, Jd) {
          if (!(dd instanceof Jd)) throw new TypeError("Cannot call a class as a function")
        }(this, Jd);
        for (var kd = arguments.length, pd = new Array(kd), Nd = 0; Nd < kd; Nd++) pd[Nd] = arguments[Nd];
        return hd(dd = Dd(this, Jd, [].concat(pd)), "state", {
          isAnimationFinished: !1
        }), hd(dd, "id", (0, Ld.G)("recharts-bar-")), hd(dd, "handleAnimationEnd", (function() {
          var Jd = dd.props.onAnimationEnd;
          dd.setState({
            isAnimationFinished: !0
          }), Jd && Jd()
        })), hd(dd, "handleAnimationStart", (function() {
          var Jd = dd.props.onAnimationStart;
          dd.setState({
            isAnimationFinished: !1
          }), Jd && Jd()
        })), dd
      }
      return function(dd, Jd) {
        if ("function" !== typeof Jd && null !== Jd) throw new TypeError("Super expression must either be null or a function");
        dd.prototype = Object.create(Jd && Jd.prototype, {
          constructor: {
            value: dd,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(dd, "prototype", {
          writable: !1
        }), Jd && cd(dd, Jd)
      }(Jd, dd), kd = Jd, Pd = [{
        key: "renderRectanglesStatically",
        value: function(dd) {
          var Jd = this,
            kd = this.props,
            Nd = kd.shape,
            Wd = kd.dataKey,
            Pd = kd.activeIndex,
            Zd = kd.activeBar,
            gd = (0, Od.e)(this.props, !1);
          return dd && dd.map((function(dd, kd) {
            var Cd = kd === Pd,
              od = Cd ? Zd : Nd,
              ld = Ud(Ud(Ud({}, gd), dd), {}, {
                isActive: Cd,
                option: od,
                index: kd,
                dataKey: Wd,
                onAnimationStart: Jd.handleAnimationStart,
                onAnimationEnd: Jd.handleAnimationEnd
              });
            return pd.createElement(Kd.e, fd({
              className: "recharts-bar-rectangle"
            }, (0, Id.n)(Jd.props, dd, kd), {
              key: "rectangle-".concat(null === dd || void 0 === dd ? void 0 : dd.x, "-").concat(null === dd || void 0 === dd ? void 0 : dd.y, "-").concat(null === dd || void 0 === dd ? void 0 : dd.value, "-").concat(kd)
            }), pd.createElement(md, ld))
          }))
        }
      }, {
        key: "renderRectanglesWithAnimation",
        value: function() {
          var dd = this,
            Jd = this.props,
            kd = Jd.data,
            Nd = Jd.layout,
            Pd = Jd.isAnimationActive,
            Zd = Jd.animationBegin,
            gd = Jd.animationDuration,
            Cd = Jd.animationEasing,
            od = Jd.animationId,
            ld = this.state.prevData;
          return pd.createElement(Wd.d, {
            ZQ: Zd,
            duration: gd,
            isActive: Pd,
            easing: Cd,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "bar-".concat(od),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(Jd) {
            var Wd = Jd.t,
              Pd = kd.map((function(dd, Jd) {
                var kd = ld && ld[Jd];
                if (kd) {
                  var pd = (0, Ld.s)(kd.x, dd.x),
                    Pd = (0, Ld.s)(kd.y, dd.y),
                    Zd = (0, Ld.s)(kd.width, dd.width),
                    gd = (0, Ld.s)(kd.height, dd.height);
                  return Ud(Ud({}, dd), {}, {
                    x: pd(Wd),
                    y: Pd(Wd),
                    width: Zd(Wd),
                    height: gd(Wd)
                  })
                }
                if ("horizontal" === Nd) {
                  var Cd = (0, Ld.s)(0, dd.height)(Wd);
                  return Ud(Ud({}, dd), {}, {
                    y: dd.y + dd.height - Cd,
                    height: Cd
                  })
                }
                var Kd = (0, Ld.s)(0, dd.width)(Wd);
                return Ud(Ud({}, dd), {}, {
                  width: Kd
                })
              }));
            return pd.createElement(Kd.e, null, dd.renderRectanglesStatically(Pd))
          }))
        }
      }, {
        key: "renderRectangles",
        value: function() {
          var dd = this.props,
            Jd = dd.data,
            kd = dd.isAnimationActive,
            pd = this.state.prevData;
          return !(kd && Jd && Jd.length) || pd && Zd()(pd, Jd) ? this.renderRectanglesStatically(Jd) : this.renderRectanglesWithAnimation()
        }
      }, {
        key: "renderBackground",
        value: function() {
          var dd = this,
            Jd = this.props,
            kd = Jd.data,
            Nd = Jd.dataKey,
            Wd = Jd.activeIndex,
            Pd = (0, Od.e)(this.props.background, !1);
          return kd.map((function(Jd, kd) {
            Jd.value;
            var Zd = Jd.background,
              gd = Xd(Jd, Sd);
            if (!Zd) return null;
            var Cd = Ud(Ud(Ud(Ud(Ud({}, gd), {}, {
              fill: "#eee"
            }, Zd), Pd), (0, Id.n)(dd.props, Jd, kd)), {}, {
              onAnimationStart: dd.handleAnimationStart,
              onAnimationEnd: dd.handleAnimationEnd,
              dataKey: Nd,
              index: kd,
              className: "recharts-bar-background-rectangle"
            });
            return pd.createElement(md, fd({
              key: "background-bar-".concat(kd),
              option: dd.props.background,
              isActive: kd === Wd
            }, Cd))
          }))
        }
      }, {
        key: "renderErrorBar",
        value: function(dd, Jd) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var kd = this.props,
            Nd = kd.data,
            Wd = kd.xAxis,
            Pd = kd.yAxis,
            Zd = kd.layout,
            gd = kd.children,
            Cd = (0, Od.i)(gd, od.b);
          if (!Cd) return null;
          var ld = "vertical" === Zd ? Nd[0].height / 2 : Nd[0].width / 2,
            Qd = function(dd, Jd) {
              var kd = Array.isArray(dd.value) ? dd.value[1] : dd.value;
              return {
                x: dd.x,
                y: dd.y,
                value: kd,
                errorVal: (0, Rd.U)(dd, Jd)
              }
            },
            Ld = {
              clipPath: dd ? "url(#clipPath-".concat(Jd, ")") : null
            };
          return pd.createElement(Kd.e, Ld, Cd.map((function(dd) {
            return pd.cloneElement(dd, {
              key: "error-bar-".concat(Jd, "-").concat(dd.props.dataKey),
              data: Nd,
              xAxis: Wd,
              yAxis: Pd,
              layout: Zd,
              offset: ld,
              dataPointFormatter: Qd
            })
          })))
        }
      }, {
        key: "render",
        value: function() {
          var dd = this.props,
            Jd = dd.hide,
            kd = dd.data,
            Wd = dd.className,
            Pd = dd.xAxis,
            Zd = dd.yAxis,
            gd = dd.left,
            od = dd.top,
            ld = dd.width,
            Ld = dd.height,
            Od = dd.isAnimationActive,
            ed = dd.background,
            Rd = dd.id;
          if (Jd || !kd || !kd.length) return null;
          var Id = this.state.isAnimationFinished,
            Gd = (0, Nd.b)("recharts-bar", Wd),
            vd = Pd && Pd.allowDataOverflow,
            xd = Zd && Zd.allowDataOverflow,
            qd = vd || xd,
            Bd = Cd()(Rd) ? this.id : Rd;
          return pd.createElement(Kd.e, {
            className: Gd
          }, vd || xd ? pd.createElement("defs", null, pd.createElement("clipPath", {
            id: "clipPath-".concat(Bd)
          }, pd.createElement("rect", {
            x: vd ? gd : gd - ld / 2,
            y: xd ? od : od - Ld / 2,
            width: vd ? ld : 2 * ld,
            height: xd ? Ld : 2 * Ld
          }))) : null, pd.createElement(Kd.e, {
            className: "recharts-bar-rectangles",
            clipPath: qd ? "url(#clipPath-".concat(Bd, ")") : null
          }, ed ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(qd, Bd), (!Od || Id) && Qd.e.renderCallByParent(this.props, kd))
        }
      }], gd = [{
        key: "getDerivedStateFromProps",
        value: function(dd, Jd) {
          return dd.animationId !== Jd.prevAnimationId ? {
            prevAnimationId: dd.animationId,
            curData: dd.data,
            prevData: Jd.curData
          } : dd.data !== Jd.curData ? {
            curData: dd.data
          } : null
        }
      }], Pd && yd(kd.prototype, Pd), gd && yd(kd, gd), Object.defineProperty(kd, "prototype", {
        writable: !1
      }), kd;
      var kd, Pd, gd
    }(pd.PureComponent);
    bd = ud, hd(ud, "displayName", "Bar"), hd(ud, "defaultProps", {
      xAxisId: 0,
      yAxisId: 0,
      legendType: "rect",
      minPointSize: 0,
      hide: !1,
      data: [],
      layout: "vertical",
      activeBar: !1,
      isAnimationActive: !ed.b.isSsr,
      animationBegin: 0,
      animationDuration: 400,
      animationEasing: "ease"
    }), hd(ud, "getComposedData", (function(dd) {
      var Jd = dd.props,
        kd = dd.item,
        pd = dd.barPosition,
        Nd = dd.bandSize,
        Wd = dd.xAxis,
        Pd = dd.yAxis,
        Zd = dd.xAxisTicks,
        gd = dd.yAxisTicks,
        Cd = dd.stackedData,
        Kd = dd.dataStartIndex,
        od = dd.displayedData,
        Qd = dd.offset,
        ed = (0, Rd.j)(pd, kd);
      if (!ed) return null;
      var Id = Jd.layout,
        vd = kd.type.defaultProps,
        xd = void 0 !== vd ? Ud(Ud({}, vd), kd.props) : kd.props,
        qd = xd.dataKey,
        Bd = xd.children,
        sd = xd.minPointSize,
        ad = "horizontal" === Id ? Pd : Wd,
        Md = Cd ? ad.scale.domain() : null,
        Fd = (0, Rd.u)({
          numericAxis: ad
        }),
        Yd = (0, Od.i)(Bd, ld.c),
        md = od.map((function(dd, Jd) {
          var pd, od, ld, Qd, Od, vd;
          Cd ? pd = (0, Rd.gb)(Cd[Kd + Jd], Md) : (pd = (0, Rd.U)(dd, qd), Array.isArray(pd) || (pd = [Fd, pd]));
          var xd = function(dd) {
            var Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return function(kd, pd) {
              if ("number" === typeof dd) return dd;
              var Nd = (0, Ld.B)(kd) || (0, Ld.v)(kd);
              return Nd ? dd(kd, pd) : (Nd || (0, Gd.e)(!1), Jd)
            }
          }(sd, bd.defaultProps.minPointSize)(pd[1], Jd);
          if ("horizontal" === Id) {
            var Bd, ad = [Pd.scale(pd[0]), Pd.scale(pd[1])],
              md = ad[0],
              Sd = ad[1];
            od = (0, Rd.w)({
              axis: Wd,
              ticks: Zd,
              bandSize: Nd,
              offset: ed.offset,
              entry: dd,
              index: Jd
            }), ld = null !== (Bd = null !== Sd && void 0 !== Sd ? Sd : md) && void 0 !== Bd ? Bd : void 0, Qd = ed.size;
            var jd = md - Sd;
            if (Od = Number.isNaN(jd) ? 0 : jd, vd = {
                x: od,
                y: Pd.y,
                width: Qd,
                height: Pd.height
              }, Math.abs(xd) > 0 && Math.abs(Od) < Math.abs(xd)) {
              var Xd = (0, Ld.D)(Od || xd) * (Math.abs(xd) - Math.abs(Od));
              ld -= Xd, Od += Xd
            }
          } else {
            var fd = [Wd.scale(pd[0]), Wd.scale(pd[1])],
              nd = fd[0],
              yd = fd[1];
            if (od = nd, ld = (0, Rd.w)({
                axis: Pd,
                ticks: gd,
                bandSize: Nd,
                offset: ed.offset,
                entry: dd,
                index: Jd
              }), Qd = yd - nd, Od = ed.size, vd = {
                x: Wd.x,
                y: ld,
                width: Wd.width,
                height: Od
              }, Math.abs(xd) > 0 && Math.abs(Qd) < Math.abs(xd)) Qd += (0, Ld.D)(Qd || xd) * (Math.abs(xd) - Math.abs(Qd))
          }
          return Ud(Ud(Ud({}, dd), {}, {
            x: od,
            y: ld,
            width: Qd,
            height: Od,
            value: Cd ? pd : pd[1],
            payload: dd,
            background: vd
          }, Yd && Yd[Jd] && Yd[Jd].props), {}, {
            tooltipPayload: [(0, Rd.T)(kd, dd)],
            tooltipPosition: {
              x: od + Qd / 2,
              y: ld + Od / 2
            }
          })
        }));
      return Ud({
        data: md,
        layout: Id
      }, Qd)
    }))
  },
  6259: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => jd
    });
    var pd = kd(56),
      Nd = kd(5131),
      Wd = kd.n(Nd),
      Pd = kd(5064),
      Zd = kd.n(Pd),
      gd = kd(4935),
      Cd = kd(5312),
      Kd = kd(5843),
      od = kd(6001),
      ld = kd(6107),
      Qd = kd(5029),
      Ld = kd(5317),
      Od = kd(5297),
      ed = kd(6261),
      Rd = ["viewBox"],
      Id = ["viewBox"],
      Gd = ["ticks"];

    function vd(dd) {
      return vd = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(dd) {
        return typeof dd
      } : function(dd) {
        return dd && "function" == typeof Symbol && dd.constructor === Symbol && dd !== Symbol.prototype ? "symbol" : typeof dd
      }, vd(dd)
    }

    function xd() {
      return xd = Object.assign ? Object.assign.bind() : function(dd) {
        for (var Jd = 1; Jd < arguments.length; Jd++) {
          var kd = arguments[Jd];
          for (var pd in kd) Object.prototype.hasOwnProperty.call(kd, pd) && (dd[pd] = kd[pd])
        }
        return dd
      }, xd.apply(this, arguments)
    }

    function qd(dd, Jd) {
      var kd = Object.keys(dd);
      if (Object.getOwnPropertySymbols) {
        var pd = Object.getOwnPropertySymbols(dd);
        Jd && (pd = pd.filter((function(Jd) {
          return Object.getOwnPropertyDescriptor(dd, Jd).enumerable
        }))), kd.push.apply(kd, pd)
      }
      return kd
    }

    function Bd(dd) {
      for (var Jd = 1; Jd < arguments.length; Jd++) {
        var kd = null != arguments[Jd] ? arguments[Jd] : {};
        Jd % 2 ? qd(Object(kd), !0).forEach((function(Jd) {
          bd(dd, Jd, kd[Jd])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(dd, Object.getOwnPropertyDescriptors(kd)) : qd(Object(kd)).forEach((function(Jd) {
          Object.defineProperty(dd, Jd, Object.getOwnPropertyDescriptor(kd, Jd))
        }))
      }
      return dd
    }

    function sd(dd, Jd) {
      if (null == dd) return {};
      var kd, pd, Nd = function(dd, Jd) {
        if (null == dd) return {};
        var kd = {};
        for (var pd in dd)
          if (Object.prototype.hasOwnProperty.call(dd, pd)) {
            if (Jd.indexOf(pd) >= 0) continue;
            kd[pd] = dd[pd]
          } return kd
      }(dd, Jd);
      if (Object.getOwnPropertySymbols) {
        var Wd = Object.getOwnPropertySymbols(dd);
        for (pd = 0; pd < Wd.length; pd++) kd = Wd[pd], Jd.indexOf(kd) >= 0 || Object.prototype.propertyIsEnumerable.call(dd, kd) && (Nd[kd] = dd[kd])
      }
      return Nd
    }

    function ad(dd, Jd) {
      for (var kd = 0; kd < Jd.length; kd++) {
        var pd = Jd[kd];
        pd.enumerable = pd.enumerable || !1, pd.configurable = !0, "value" in pd && (pd.writable = !0), Object.defineProperty(dd, Sd(pd.key), pd)
      }
    }

    function Md(dd, Jd, kd) {
      return Jd = Yd(Jd),
        function(dd, Jd) {
          if (Jd && ("object" === vd(Jd) || "function" === typeof Jd)) return Jd;
          if (void 0 !== Jd) throw new TypeError("Derived constructors may only return object or undefined");
          return function(dd) {
            if (void 0 === dd) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return dd
          }(dd)
        }(dd, Fd() ? Reflect.construct(Jd, kd || [], Yd(dd).constructor) : Jd.apply(dd, kd))
    }

    function Fd() {
      try {
        var dd = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (dd) {}
      return (Fd = function() {
        return !!dd
      })()
    }

    function Yd(dd) {
      return Yd = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(dd) {
        return dd.__proto__ || Object.getPrototypeOf(dd)
      }, Yd(dd)
    }

    function md(dd, Jd) {
      return md = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(dd, Jd) {
        return dd.__proto__ = Jd, dd
      }, md(dd, Jd)
    }

    function bd(dd, Jd, kd) {
      return (Jd = Sd(Jd)) in dd ? Object.defineProperty(dd, Jd, {
        value: kd,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : dd[Jd] = kd, dd
    }

    function Sd(dd) {
      var Jd = function(dd, Jd) {
        if ("object" != vd(dd) || !dd) return dd;
        var kd = dd[Symbol.toPrimitive];
        if (void 0 !== kd) {
          var pd = kd.call(dd, Jd || "default");
          if ("object" != vd(pd)) return pd;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Jd ? String : Number)(dd)
      }(dd, "string");
      return "symbol" == vd(Jd) ? Jd : Jd + ""
    }
    var jd = function(dd) {
      function Jd(dd) {
        var kd;
        return function(dd, Jd) {
          if (!(dd instanceof Jd)) throw new TypeError("Cannot call a class as a function")
        }(this, Jd), (kd = Md(this, Jd, [dd])).state = {
          fontSize: "",
          letterSpacing: ""
        }, kd
      }
      return function(dd, Jd) {
        if ("function" !== typeof Jd && null !== Jd) throw new TypeError("Super expression must either be null or a function");
        dd.prototype = Object.create(Jd && Jd.prototype, {
          constructor: {
            value: dd,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(dd, "prototype", {
          writable: !1
        }), Jd && md(dd, Jd)
      }(Jd, dd), kd = Jd, Pd = [{
        key: "renderTickItem",
        value: function(dd, Jd, kd) {
          var Nd = (0, gd.b)(Jd.className, "recharts-cartesian-axis-tick-value");
          return pd.isValidElement(dd) ? pd.cloneElement(dd, Bd(Bd({}, Jd), {}, {
            className: Nd
          })) : Wd()(dd) ? dd(Bd(Bd({}, Jd), {}, {
            className: Nd
          })) : pd.createElement(od.c, xd({}, Jd, {
            className: "recharts-cartesian-axis-tick-value"
          }), kd)
        }
      }], (Nd = [{
        key: "shouldComponentUpdate",
        value: function(dd, Jd) {
          var kd = dd.viewBox,
            pd = sd(dd, Rd),
            Nd = this.props,
            Wd = Nd.viewBox,
            Pd = sd(Nd, Id);
          return !(0, Cd.d)(kd, Wd) || !(0, Cd.d)(pd, Pd) || !(0, Cd.d)(Jd, this.state)
        }
      }, {
        key: "componentDidMount",
        value: function() {
          var dd = this.layerReference;
          if (dd) {
            var Jd = dd.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];
            Jd && this.setState({
              fontSize: window.getComputedStyle(Jd).fontSize,
              letterSpacing: window.getComputedStyle(Jd).letterSpacing
            })
          }
        }
      }, {
        key: "getTickLineCoord",
        value: function(dd) {
          var Jd, kd, pd, Nd, Wd, Pd, Zd = this.props,
            gd = Zd.x,
            Cd = Zd.y,
            Kd = Zd.width,
            od = Zd.height,
            ld = Zd.orientation,
            Ld = Zd.tickSize,
            Od = Zd.mirror,
            ed = Zd.tickMargin,
            Rd = Od ? -1 : 1,
            Id = dd.tickSize || Ld,
            Gd = (0, Qd.B)(dd.tickCoord) ? dd.tickCoord : dd.coordinate;
          switch (ld) {
            case "top":
              Jd = kd = dd.coordinate, Pd = (pd = (Nd = Cd + +!Od * od) - Rd * Id) - Rd * ed, Wd = Gd;
              break;
            case "left":
              pd = Nd = dd.coordinate, Wd = (Jd = (kd = gd + +!Od * Kd) - Rd * Id) - Rd * ed, Pd = Gd;
              break;
            case "right":
              pd = Nd = dd.coordinate, Wd = (Jd = (kd = gd + +Od * Kd) + Rd * Id) + Rd * ed, Pd = Gd;
              break;
            default:
              Jd = kd = dd.coordinate, Pd = (pd = (Nd = Cd + +Od * od) + Rd * Id) + Rd * ed, Wd = Gd
          }
          return {
            line: {
              x1: Jd,
              y1: pd,
              x2: kd,
              y2: Nd
            },
            Do: {
              x: Wd,
              y: Pd
            }
          }
        }
      }, {
        key: "getTickTextAnchor",
        value: function() {
          var dd, Jd = this.props,
            kd = Jd.orientation,
            pd = Jd.mirror;
          switch (kd) {
            case "left":
              dd = pd ? "start" : "end";
              break;
            case "right":
              dd = pd ? "end" : "start";
              break;
            default:
              dd = "middle"
          }
          return dd
        }
      }, {
        key: "getTickVerticalAnchor",
        value: function() {
          var dd = this.props,
            Jd = dd.orientation,
            kd = dd.mirror,
            pd = "end";
          switch (Jd) {
            case "left":
            case "right":
              pd = "middle";
              break;
            case "top":
              pd = kd ? "start" : "end";
              break;
            default:
              pd = kd ? "end" : "start"
          }
          return pd
        }
      }, {
        key: "renderAxisLine",
        value: function() {
          var dd = this.props,
            Jd = dd.x,
            kd = dd.y,
            Nd = dd.width,
            Wd = dd.height,
            Pd = dd.orientation,
            Cd = dd.mirror,
            Kd = dd.axisLine,
            od = Bd(Bd(Bd({}, (0, Od.e)(this.props, !1)), (0, Od.e)(Kd, !1)), {}, {
              fill: "none"
            });
          if ("top" === Pd || "bottom" === Pd) {
            var ld = +("top" === Pd && !Cd || "bottom" === Pd && Cd);
            od = Bd(Bd({}, od), {}, {
              x1: Jd,
              y1: kd + ld * Wd,
              x2: Jd + Nd,
              y2: kd + ld * Wd
            })
          } else {
            var Qd = +("left" === Pd && !Cd || "right" === Pd && Cd);
            od = Bd(Bd({}, od), {}, {
              x1: Jd + Qd * Nd,
              y1: kd,
              x2: Jd + Qd * Nd,
              y2: kd + Wd
            })
          }
          return pd.createElement("line", xd({}, od, {
            className: (0, gd.b)("recharts-cartesian-axis-line", Zd()(Kd, "className"))
          }))
        }
      }, {
        key: "renderTicks",
        value: function(dd, kd, Nd) {
          var Pd = this,
            Cd = this.props,
            od = Cd.tickLine,
            ld = Cd.stroke,
            Qd = Cd.Do,
            Rd = Cd.tickFormatter,
            Id = Cd.unit,
            Gd = (0, ed.d)(Bd(Bd({}, this.props), {}, {
              ticks: dd
            }), kd, Nd),
            vd = this.getTickTextAnchor(),
            qd = this.getTickVerticalAnchor(),
            sd = (0, Od.e)(this.props, !1),
            ad = (0, Od.e)(Qd, !1),
            Md = Bd(Bd({}, sd), {}, {
              fill: "none"
            }, (0, Od.e)(od, !1)),
            Fd = Gd.map((function(dd, kd) {
              var Nd = Pd.getTickLineCoord(dd),
                Cd = Nd.line,
                Od = Nd.Do,
                ed = Bd(Bd(Bd(Bd({
                  textAnchor: vd,
                  verticalAnchor: qd
                }, sd), {}, {
                  stroke: "none",
                  fill: ld
                }, ad), Od), {}, {
                  index: kd,
                  payload: dd,
                  visibleTicksCount: Gd.length,
                  tickFormatter: Rd
                });
              return pd.createElement(Kd.e, xd({
                className: "recharts-cartesian-axis-tick",
                key: "tick-".concat(dd.value, "-").concat(dd.coordinate, "-").concat(dd.tickCoord)
              }, (0, Ld.n)(Pd.props, dd, kd)), od && pd.createElement("line", xd({}, Md, Cd, {
                className: (0, gd.b)("recharts-cartesian-axis-tick-line", Zd()(od, "className"))
              })), Qd && Jd.renderTickItem(Qd, ed, "".concat(Wd()(Rd) ? Rd(dd.value, kd) : dd.value).concat(Id || "")))
            }));
          return pd.createElement("g", {
            className: "recharts-cartesian-axis-ticks"
          }, Fd)
        }
      }, {
        key: "render",
        value: function() {
          var dd = this,
            Jd = this.props,
            kd = Jd.axisLine,
            Nd = Jd.width,
            Pd = Jd.height,
            Zd = Jd.ticksGenerator,
            Cd = Jd.className;
          if (Jd.hide) return null;
          var od = this.props,
            Qd = od.ticks,
            Ld = sd(od, Gd),
            Od = Qd;
          return Wd()(Zd) && (Od = Qd && Qd.length > 0 ? Zd(this.props) : Zd(Ld)), Nd <= 0 || Pd <= 0 || !Od || !Od.length ? null : pd.createElement(Kd.e, {
            className: (0, gd.b)("recharts-cartesian-axis", Cd),
            ref: function(Jd) {
              dd.layerReference = Jd
            }
          }, kd && this.renderAxisLine(), this.renderTicks(Od, this.state.fontSize, this.state.letterSpacing), ld.c.renderCallByParent(this.props))
        }
      }]) && ad(kd.prototype, Nd), Pd && ad(kd, Pd), Object.defineProperty(kd, "prototype", {
        writable: !1
      }), kd;
      var kd, Nd, Pd
    }(pd.Component);
    bd(jd, "displayName", "CartesianAxis"), bd(jd, "defaultProps", {
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
      Do: !0,
      mirror: !1,
      minTickGap: 5,
      tickSize: 6,
      tickMargin: 2,
      interval: "preserveEnd"
    })
  },
  6271: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => bd
    });
    var pd = kd(56),
      Nd = kd(5131),
      Wd = kd.n(Nd),
      Pd = kd(5295),
      Zd = kd(5029),
      gd = kd(5297),
      Cd = kd(6019),
      Kd = kd(6261),
      od = kd(6259),
      ld = kd(6210),
      Qd = ["x1", "y1", "x2", "y2", "key"],
      Ld = ["offset"];

    function Od(dd) {
      return Od = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(dd) {
        return typeof dd
      } : function(dd) {
        return dd && "function" == typeof Symbol && dd.constructor === Symbol && dd !== Symbol.prototype ? "symbol" : typeof dd
      }, Od(dd)
    }

    function ed(dd, Jd) {
      var kd = Object.keys(dd);
      if (Object.getOwnPropertySymbols) {
        var pd = Object.getOwnPropertySymbols(dd);
        Jd && (pd = pd.filter((function(Jd) {
          return Object.getOwnPropertyDescriptor(dd, Jd).enumerable
        }))), kd.push.apply(kd, pd)
      }
      return kd
    }

    function Rd(dd) {
      for (var Jd = 1; Jd < arguments.length; Jd++) {
        var kd = null != arguments[Jd] ? arguments[Jd] : {};
        Jd % 2 ? ed(Object(kd), !0).forEach((function(Jd) {
          Id(dd, Jd, kd[Jd])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(dd, Object.getOwnPropertyDescriptors(kd)) : ed(Object(kd)).forEach((function(Jd) {
          Object.defineProperty(dd, Jd, Object.getOwnPropertyDescriptor(kd, Jd))
        }))
      }
      return dd
    }

    function Id(dd, Jd, kd) {
      return (Jd = function(dd) {
        var Jd = function(dd, Jd) {
          if ("object" != Od(dd) || !dd) return dd;
          var kd = dd[Symbol.toPrimitive];
          if (void 0 !== kd) {
            var pd = kd.call(dd, Jd || "default");
            if ("object" != Od(pd)) return pd;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === Jd ? String : Number)(dd)
        }(dd, "string");
        return "symbol" == Od(Jd) ? Jd : Jd + ""
      }(Jd)) in dd ? Object.defineProperty(dd, Jd, {
        value: kd,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : dd[Jd] = kd, dd
    }

    function Gd() {
      return Gd = Object.assign ? Object.assign.bind() : function(dd) {
        for (var Jd = 1; Jd < arguments.length; Jd++) {
          var kd = arguments[Jd];
          for (var pd in kd) Object.prototype.hasOwnProperty.call(kd, pd) && (dd[pd] = kd[pd])
        }
        return dd
      }, Gd.apply(this, arguments)
    }

    function vd(dd, Jd) {
      if (null == dd) return {};
      var kd, pd, Nd = function(dd, Jd) {
        if (null == dd) return {};
        var kd = {};
        for (var pd in dd)
          if (Object.prototype.hasOwnProperty.call(dd, pd)) {
            if (Jd.indexOf(pd) >= 0) continue;
            kd[pd] = dd[pd]
          } return kd
      }(dd, Jd);
      if (Object.getOwnPropertySymbols) {
        var Wd = Object.getOwnPropertySymbols(dd);
        for (pd = 0; pd < Wd.length; pd++) kd = Wd[pd], Jd.indexOf(kd) >= 0 || Object.prototype.propertyIsEnumerable.call(dd, kd) && (Nd[kd] = dd[kd])
      }
      return Nd
    }
    var xd = function(dd) {
      var Jd = dd.fill;
      if (!Jd || "none" === Jd) return null;
      var kd = dd.fillOpacity,
        Nd = dd.x,
        Wd = dd.y,
        Pd = dd.width,
        Zd = dd.height,
        gd = dd.ry;
      return pd.createElement("rect", {
        x: Nd,
        y: Wd,
        ry: gd,
        width: Pd,
        height: Zd,
        stroke: "none",
        fill: Jd,
        fillOpacity: kd,
        className: "recharts-cartesian-grid-bg"
      })
    };

    function qd(dd, Jd) {
      var kd;
      if (pd.isValidElement(dd)) kd = pd.cloneElement(dd, Jd);
      else if (Wd()(dd)) kd = dd(Jd);
      else {
        var Nd = Jd.x1,
          Pd = Jd.y1,
          Zd = Jd.x2,
          Cd = Jd.y2,
          Kd = Jd.key,
          od = vd(Jd, Qd),
          ld = (0, gd.e)(od, !1),
          Od = (ld.offset, vd(ld, Ld));
        kd = pd.createElement("line", Gd({}, Od, {
          x1: Nd,
          y1: Pd,
          x2: Zd,
          y2: Cd,
          fill: "none",
          key: Kd
        }))
      }
      return kd
    }

    function Bd(dd) {
      var Jd = dd.x,
        kd = dd.width,
        Nd = dd.horizontal,
        Wd = void 0 === Nd || Nd,
        Pd = dd.horizontalPoints;
      if (!Wd || !Pd || !Pd.length) return null;
      var Zd = Pd.map((function(pd, Nd) {
        var Pd = Rd(Rd({}, dd), {}, {
          x1: Jd,
          y1: pd,
          x2: Jd + kd,
          y2: pd,
          key: "line-".concat(Nd),
          index: Nd
        });
        return qd(Wd, Pd)
      }));
      return pd.createElement("g", {
        className: "recharts-cartesian-grid-horizontal"
      }, Zd)
    }

    function sd(dd) {
      var Jd = dd.y,
        kd = dd.height,
        Nd = dd.vertical,
        Wd = void 0 === Nd || Nd,
        Pd = dd.verticalPoints;
      if (!Wd || !Pd || !Pd.length) return null;
      var Zd = Pd.map((function(pd, Nd) {
        var Pd = Rd(Rd({}, dd), {}, {
          x1: pd,
          y1: Jd,
          x2: pd,
          y2: Jd + kd,
          key: "line-".concat(Nd),
          index: Nd
        });
        return qd(Wd, Pd)
      }));
      return pd.createElement("g", {
        className: "recharts-cartesian-grid-vertical"
      }, Zd)
    }

    function ad(dd) {
      var Jd = dd.horizontalFill,
        kd = dd.fillOpacity,
        Nd = dd.x,
        Wd = dd.y,
        Pd = dd.width,
        Zd = dd.height,
        gd = dd.horizontalPoints,
        Cd = dd.horizontal;
      if (!(void 0 === Cd || Cd) || !Jd || !Jd.length) return null;
      var Kd = gd.map((function(dd) {
        return Math.round(dd + Wd - Wd)
      })).sort((function(dd, Jd) {
        return dd - Jd
      }));
      Wd !== Kd[0] && Kd.unshift(0);
      var od = Kd.map((function(dd, gd) {
        var Cd = !Kd[gd + 1] ? Wd + Zd - dd : Kd[gd + 1] - dd;
        if (Cd <= 0) return null;
        var od = gd % Jd.length;
        return pd.createElement("rect", {
          key: "react-".concat(gd),
          y: dd,
          x: Nd,
          height: Cd,
          width: Pd,
          stroke: "none",
          fill: Jd[od],
          fillOpacity: kd,
          className: "recharts-cartesian-grid-bg"
        })
      }));
      return pd.createElement("g", {
        className: "recharts-cartesian-gridstripes-horizontal"
      }, od)
    }

    function Md(dd) {
      var Jd = dd.vertical,
        kd = void 0 === Jd || Jd,
        Nd = dd.verticalFill,
        Wd = dd.fillOpacity,
        Pd = dd.x,
        Zd = dd.y,
        gd = dd.width,
        Cd = dd.height,
        Kd = dd.verticalPoints;
      if (!kd || !Nd || !Nd.length) return null;
      var od = Kd.map((function(dd) {
        return Math.round(dd + Pd - Pd)
      })).sort((function(dd, Jd) {
        return dd - Jd
      }));
      Pd !== od[0] && od.unshift(0);
      var ld = od.map((function(dd, Jd) {
        var kd = !od[Jd + 1] ? Pd + gd - dd : od[Jd + 1] - dd;
        if (kd <= 0) return null;
        var Kd = Jd % Nd.length;
        return pd.createElement("rect", {
          key: "react-".concat(Jd),
          x: dd,
          y: Zd,
          width: kd,
          height: Cd,
          stroke: "none",
          fill: Nd[Kd],
          fillOpacity: Wd,
          className: "recharts-cartesian-grid-bg"
        })
      }));
      return pd.createElement("g", {
        className: "recharts-cartesian-gridstripes-vertical"
      }, ld)
    }
    var Fd = function(dd, Jd) {
        var kd = dd.xAxis,
          pd = dd.width,
          Nd = dd.height,
          Wd = dd.offset;
        return (0, Cd.y)((0, Kd.d)(Rd(Rd(Rd({}, od.b.defaultProps), kd), {}, {
          ticks: (0, Cd.P)(kd, !0),
          viewBox: {
            x: 0,
            y: 0,
            width: pd,
            height: Nd
          }
        })), Wd.left, Wd.left + Wd.width, Jd)
      },
      Yd = function(dd, Jd) {
        var kd = dd.yAxis,
          pd = dd.width,
          Nd = dd.height,
          Wd = dd.offset;
        return (0, Cd.y)((0, Kd.d)(Rd(Rd(Rd({}, od.b.defaultProps), kd), {}, {
          ticks: (0, Cd.P)(kd, !0),
          viewBox: {
            x: 0,
            y: 0,
            width: pd,
            height: Nd
          }
        })), Wd.top, Wd.top + Wd.height, Jd)
      },
      md = {
        horizontal: !0,
        vertical: !0,
        horizontalPoints: [],
        verticalPoints: [],
        stroke: "#ccc",
        fill: "none",
        verticalFill: [],
        horizontalFill: []
      };

    function bd(dd) {
      var Jd, kd, Nd, gd, Cd, Kd, od = (0, ld.i)(),
        Qd = (0, ld.f)(),
        Ld = (0, ld.o)(),
        ed = Rd(Rd({}, dd), {}, {
          stroke: null !== (Jd = dd.stroke) && void 0 !== Jd ? Jd : md.stroke,
          fill: null !== (kd = dd.fill) && void 0 !== kd ? kd : md.fill,
          horizontal: null !== (Nd = dd.horizontal) && void 0 !== Nd ? Nd : md.horizontal,
          horizontalFill: null !== (gd = dd.horizontalFill) && void 0 !== gd ? gd : md.horizontalFill,
          vertical: null !== (Cd = dd.vertical) && void 0 !== Cd ? Cd : md.vertical,
          verticalFill: null !== (Kd = dd.verticalFill) && void 0 !== Kd ? Kd : md.verticalFill,
          x: (0, Zd.B)(dd.x) ? dd.x : Ld.left,
          y: (0, Zd.B)(dd.y) ? dd.y : Ld.top,
          width: (0, Zd.B)(dd.width) ? dd.width : Ld.width,
          height: (0, Zd.B)(dd.height) ? dd.height : Ld.height
        }),
        Id = ed.x,
        vd = ed.y,
        qd = ed.width,
        bd = ed.height,
        Sd = ed.syncWithTicks,
        jd = ed.horizontalValues,
        Xd = ed.verticalValues,
        fd = (0, ld.c)(),
        nd = (0, ld.w)();
      if (!(0, Zd.B)(qd) || qd <= 0 || !(0, Zd.B)(bd) || bd <= 0 || !(0, Zd.B)(Id) || Id !== +Id || !(0, Zd.B)(vd) || vd !== +vd) return null;
      var Ud = ed.verticalCoordinatesGenerator || Fd,
        yd = ed.horizontalCoordinatesGenerator || Yd,
        Dd = ed.horizontalPoints,
        Td = ed.verticalPoints;
      if ((!Dd || !Dd.length) && Wd()(yd)) {
        var Ed = jd && jd.length,
          cd = yd({
            yAxis: nd ? Rd(Rd({}, nd), {}, {
              ticks: Ed ? jd : nd.ticks
            }) : void 0,
            width: od,
            height: Qd,
            offset: Ld
          }, !!Ed || Sd);
        (0, Pd.e)(Array.isArray(cd), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(Od(cd), "]")), Array.isArray(cd) && (Dd = cd)
      }
      if ((!Td || !Td.length) && Wd()(Ud)) {
        var hd = Xd && Xd.length,
          rd = Ud({
            xAxis: fd ? Rd(Rd({}, fd), {}, {
              ticks: hd ? Xd : fd.ticks
            }) : void 0,
            width: od,
            height: Qd,
            offset: Ld
          }, !!hd || Sd);
        (0, Pd.e)(Array.isArray(rd), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(Od(rd), "]")), Array.isArray(rd) && (Td = rd)
      }
      return pd.createElement("g", {
        className: "recharts-cartesian-grid"
      }, pd.createElement(xd, {
        fill: ed.fill,
        fillOpacity: ed.fillOpacity,
        x: ed.x,
        y: ed.y,
        width: ed.width,
        height: ed.height,
        ry: ed.ry
      }), pd.createElement(Bd, Gd({}, ed, {
        offset: Ld,
        horizontalPoints: Dd,
        xAxis: fd,
        yAxis: nd
      })), pd.createElement(sd, Gd({}, ed, {
        offset: Ld,
        verticalPoints: Td,
        xAxis: fd,
        yAxis: nd
      })), pd.createElement(ad, Gd({}, ed, {
        horizontalPoints: Dd
      })), pd.createElement(Md, Gd({}, ed, {
        verticalPoints: Td
      })))
    }
    bd.displayName = "CartesianGrid"
  },
  6092: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => vd
    });
    var pd = kd(56),
      Nd = kd(5836),
      Wd = kd(5843),
      Pd = kd(5297),
      Zd = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];

    function gd(dd) {
      return gd = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(dd) {
        return typeof dd
      } : function(dd) {
        return dd && "function" == typeof Symbol && dd.constructor === Symbol && dd !== Symbol.prototype ? "symbol" : typeof dd
      }, gd(dd)
    }

    function Cd() {
      return Cd = Object.assign ? Object.assign.bind() : function(dd) {
        for (var Jd = 1; Jd < arguments.length; Jd++) {
          var kd = arguments[Jd];
          for (var pd in kd) Object.prototype.hasOwnProperty.call(kd, pd) && (dd[pd] = kd[pd])
        }
        return dd
      }, Cd.apply(this, arguments)
    }

    function Kd(dd, Jd) {
      return function(dd) {
        if (Array.isArray(dd)) return dd
      }(dd) || function(dd, Jd) {
        var kd = null == dd ? null : "undefined" != typeof Symbol && dd[Symbol.iterator] || dd["@@iterator"];
        if (null != kd) {
          var pd, Nd, Wd, Pd, Zd = [],
            gd = !0,
            Cd = !1;
          try {
            if (Wd = (kd = kd.call(dd)).next, 0 === Jd) {
              if (Object(kd) !== kd) return;
              gd = !1
            } else
              for (; !(gd = (pd = Wd.call(kd)).done) && (Zd.push(pd.value), Zd.length !== Jd); gd = !0);
          } catch (dd) {
            Cd = !0, Nd = dd
          } finally {
            try {
              if (!gd && null != kd.return && (Pd = kd.return(), Object(Pd) !== Pd)) return
            } finally {
              if (Cd) throw Nd
            }
          }
          return Zd
        }
      }(dd, Jd) || function(dd, Jd) {
        if (!dd) return;
        if ("string" === typeof dd) return od(dd, Jd);
        var kd = Object.prototype.toString.call(dd).slice(8, -1);
        "Object" === kd && dd.constructor && (kd = dd.constructor.name);
        if ("Map" === kd || "Set" === kd) return Array.from(dd);
        if ("Arguments" === kd || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(kd)) return od(dd, Jd)
      }(dd, Jd) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function od(dd, Jd) {
      (null == Jd || Jd > dd.length) && (Jd = dd.length);
      for (var kd = 0, pd = new Array(Jd); kd < Jd; kd++) pd[kd] = dd[kd];
      return pd
    }

    function ld(dd, Jd) {
      if (null == dd) return {};
      var kd, pd, Nd = function(dd, Jd) {
        if (null == dd) return {};
        var kd = {};
        for (var pd in dd)
          if (Object.prototype.hasOwnProperty.call(dd, pd)) {
            if (Jd.indexOf(pd) >= 0) continue;
            kd[pd] = dd[pd]
          } return kd
      }(dd, Jd);
      if (Object.getOwnPropertySymbols) {
        var Wd = Object.getOwnPropertySymbols(dd);
        for (pd = 0; pd < Wd.length; pd++) kd = Wd[pd], Jd.indexOf(kd) >= 0 || Object.prototype.propertyIsEnumerable.call(dd, kd) && (Nd[kd] = dd[kd])
      }
      return Nd
    }

    function Qd(dd, Jd) {
      for (var kd = 0; kd < Jd.length; kd++) {
        var pd = Jd[kd];
        pd.enumerable = pd.enumerable || !1, pd.configurable = !0, "value" in pd && (pd.writable = !0), Object.defineProperty(dd, Gd(pd.key), pd)
      }
    }

    function Ld(dd, Jd, kd) {
      return Jd = ed(Jd),
        function(dd, Jd) {
          if (Jd && ("object" === gd(Jd) || "function" === typeof Jd)) return Jd;
          if (void 0 !== Jd) throw new TypeError("Derived constructors may only return object or undefined");
          return function(dd) {
            if (void 0 === dd) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return dd
          }(dd)
        }(dd, Od() ? Reflect.construct(Jd, kd || [], ed(dd).constructor) : Jd.apply(dd, kd))
    }

    function Od() {
      try {
        var dd = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (dd) {}
      return (Od = function() {
        return !!dd
      })()
    }

    function ed(dd) {
      return ed = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(dd) {
        return dd.__proto__ || Object.getPrototypeOf(dd)
      }, ed(dd)
    }

    function Rd(dd, Jd) {
      return Rd = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(dd, Jd) {
        return dd.__proto__ = Jd, dd
      }, Rd(dd, Jd)
    }

    function Id(dd, Jd, kd) {
      return (Jd = Gd(Jd)) in dd ? Object.defineProperty(dd, Jd, {
        value: kd,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : dd[Jd] = kd, dd
    }

    function Gd(dd) {
      var Jd = function(dd, Jd) {
        if ("object" != gd(dd) || !dd) return dd;
        var kd = dd[Symbol.toPrimitive];
        if (void 0 !== kd) {
          var pd = kd.call(dd, Jd || "default");
          if ("object" != gd(pd)) return pd;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Jd ? String : Number)(dd)
      }(dd, "string");
      return "symbol" == gd(Jd) ? Jd : Jd + ""
    }
    var vd = function(dd) {
      function Jd() {
        return function(dd, Jd) {
          if (!(dd instanceof Jd)) throw new TypeError("Cannot call a class as a function")
        }(this, Jd), Ld(this, Jd, arguments)
      }
      return function(dd, Jd) {
        if ("function" !== typeof Jd && null !== Jd) throw new TypeError("Super expression must either be null or a function");
        dd.prototype = Object.create(Jd && Jd.prototype, {
          constructor: {
            value: dd,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(dd, "prototype", {
          writable: !1
        }), Jd && Rd(dd, Jd)
      }(Jd, dd), kd = Jd, (gd = [{
        key: "render",
        value: function() {
          var dd = this.props,
            Jd = dd.offset,
            kd = dd.layout,
            gd = dd.width,
            od = dd.dataKey,
            Qd = dd.data,
            Ld = dd.dataPointFormatter,
            Od = dd.xAxis,
            ed = dd.yAxis,
            Rd = ld(dd, Zd),
            Id = (0, Pd.e)(Rd, !1);
          "x" === this.props.direction && "number" !== Od.type && (0, Nd.e)(!1);
          var Gd = Qd.map((function(dd) {
            var Nd = Ld(dd, od),
              Pd = Nd.x,
              Zd = Nd.y,
              ld = Nd.value,
              Qd = Nd.errorVal;
            if (!Qd) return null;
            var Rd, Gd, vd = [];
            if (Array.isArray(Qd)) {
              var xd = Kd(Qd, 2);
              Rd = xd[0], Gd = xd[1]
            } else Rd = Gd = Qd;
            if ("vertical" === kd) {
              var qd = Od.scale,
                Bd = Zd + Jd,
                sd = Bd + gd,
                ad = Bd - gd,
                Md = qd(ld - Rd),
                Fd = qd(ld + Gd);
              vd.push({
                x1: Fd,
                y1: sd,
                x2: Fd,
                y2: ad
              }), vd.push({
                x1: Md,
                y1: Bd,
                x2: Fd,
                y2: Bd
              }), vd.push({
                x1: Md,
                y1: sd,
                x2: Md,
                y2: ad
              })
            } else if ("horizontal" === kd) {
              var Yd = ed.scale,
                md = Pd + Jd,
                bd = md - gd,
                Sd = md + gd,
                jd = Yd(ld - Rd),
                Xd = Yd(ld + Gd);
              vd.push({
                x1: bd,
                y1: Xd,
                x2: Sd,
                y2: Xd
              }), vd.push({
                x1: md,
                y1: jd,
                x2: md,
                y2: Xd
              }), vd.push({
                x1: bd,
                y1: jd,
                x2: Sd,
                y2: jd
              })
            }
            return pd.createElement(Wd.e, Cd({
              className: "recharts-errorBar",
              key: "bar-".concat(vd.map((function(dd) {
                return "".concat(dd.x1, "-").concat(dd.x2, "-").concat(dd.y1, "-").concat(dd.y2)
              })))
            }, Id), vd.map((function(dd) {
              return pd.createElement("line", Cd({}, dd, {
                key: "line-".concat(dd.x1, "-").concat(dd.x2, "-").concat(dd.y1, "-").concat(dd.y2)
              }))
            })))
          }));
          return pd.createElement(Wd.e, {
            className: "recharts-errorBars"
          }, Gd)
        }
      }]) && Qd(kd.prototype, gd), od && Qd(kd, od), Object.defineProperty(kd, "prototype", {
        writable: !1
      }), kd;
      var kd, gd, od
    }(pd.Component);
    Id(vd, "defaultProps", {
      stroke: "black",
      strokeWidth: 1.5,
      width: 5,
      offset: 0,
      layout: "horizontal"
    }), Id(vd, "displayName", "ErrorBar")
  },
  6250: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => yd
    });
    var pd = kd(56),
      Nd = kd(5992),
      Wd = kd(5131),
      Pd = kd.n(Wd),
      Zd = kd(5289),
      gd = kd.n(Zd),
      Cd = kd(6085),
      Kd = kd.n(Cd),
      od = kd(4935),
      ld = kd(6237),
      Qd = kd(5978),
      Ld = kd(5843),
      Od = kd(6152),
      ed = kd(6092),
      Rd = kd(5029),
      Id = kd(5297),
      Gd = kd(5854),
      vd = kd(6019),
      xd = ["type", "layout", "connectNulls", "ref"],
      qd = ["key"];

    function Bd(dd) {
      return Bd = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(dd) {
        return typeof dd
      } : function(dd) {
        return dd && "function" == typeof Symbol && dd.constructor === Symbol && dd !== Symbol.prototype ? "symbol" : typeof dd
      }, Bd(dd)
    }

    function sd(dd, Jd) {
      if (null == dd) return {};
      var kd, pd, Nd = function(dd, Jd) {
        if (null == dd) return {};
        var kd = {};
        for (var pd in dd)
          if (Object.prototype.hasOwnProperty.call(dd, pd)) {
            if (Jd.indexOf(pd) >= 0) continue;
            kd[pd] = dd[pd]
          } return kd
      }(dd, Jd);
      if (Object.getOwnPropertySymbols) {
        var Wd = Object.getOwnPropertySymbols(dd);
        for (pd = 0; pd < Wd.length; pd++) kd = Wd[pd], Jd.indexOf(kd) >= 0 || Object.prototype.propertyIsEnumerable.call(dd, kd) && (Nd[kd] = dd[kd])
      }
      return Nd
    }

    function ad() {
      return ad = Object.assign ? Object.assign.bind() : function(dd) {
        for (var Jd = 1; Jd < arguments.length; Jd++) {
          var kd = arguments[Jd];
          for (var pd in kd) Object.prototype.hasOwnProperty.call(kd, pd) && (dd[pd] = kd[pd])
        }
        return dd
      }, ad.apply(this, arguments)
    }

    function Md(dd, Jd) {
      var kd = Object.keys(dd);
      if (Object.getOwnPropertySymbols) {
        var pd = Object.getOwnPropertySymbols(dd);
        Jd && (pd = pd.filter((function(Jd) {
          return Object.getOwnPropertyDescriptor(dd, Jd).enumerable
        }))), kd.push.apply(kd, pd)
      }
      return kd
    }

    function Fd(dd) {
      for (var Jd = 1; Jd < arguments.length; Jd++) {
        var kd = null != arguments[Jd] ? arguments[Jd] : {};
        Jd % 2 ? Md(Object(kd), !0).forEach((function(Jd) {
          nd(dd, Jd, kd[Jd])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(dd, Object.getOwnPropertyDescriptors(kd)) : Md(Object(kd)).forEach((function(Jd) {
          Object.defineProperty(dd, Jd, Object.getOwnPropertyDescriptor(kd, Jd))
        }))
      }
      return dd
    }

    function Yd(dd) {
      return function(dd) {
        if (Array.isArray(dd)) return md(dd)
      }(dd) || function(dd) {
        if ("undefined" !== typeof Symbol && null != dd[Symbol.iterator] || null != dd["@@iterator"]) return Array.from(dd)
      }(dd) || function(dd, Jd) {
        if (!dd) return;
        if ("string" === typeof dd) return md(dd, Jd);
        var kd = Object.prototype.toString.call(dd).slice(8, -1);
        "Object" === kd && dd.constructor && (kd = dd.constructor.name);
        if ("Map" === kd || "Set" === kd) return Array.from(dd);
        if ("Arguments" === kd || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(kd)) return md(dd, Jd)
      }(dd) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function md(dd, Jd) {
      (null == Jd || Jd > dd.length) && (Jd = dd.length);
      for (var kd = 0, pd = new Array(Jd); kd < Jd; kd++) pd[kd] = dd[kd];
      return pd
    }

    function bd(dd, Jd) {
      for (var kd = 0; kd < Jd.length; kd++) {
        var pd = Jd[kd];
        pd.enumerable = pd.enumerable || !1, pd.configurable = !0, "value" in pd && (pd.writable = !0), Object.defineProperty(dd, Ud(pd.key), pd)
      }
    }

    function Sd(dd, Jd, kd) {
      return Jd = Xd(Jd),
        function(dd, Jd) {
          if (Jd && ("object" === Bd(Jd) || "function" === typeof Jd)) return Jd;
          if (void 0 !== Jd) throw new TypeError("Derived constructors may only return object or undefined");
          return function(dd) {
            if (void 0 === dd) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return dd
          }(dd)
        }(dd, jd() ? Reflect.construct(Jd, kd || [], Xd(dd).constructor) : Jd.apply(dd, kd))
    }

    function jd() {
      try {
        var dd = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (dd) {}
      return (jd = function() {
        return !!dd
      })()
    }

    function Xd(dd) {
      return Xd = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(dd) {
        return dd.__proto__ || Object.getPrototypeOf(dd)
      }, Xd(dd)
    }

    function fd(dd, Jd) {
      return fd = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(dd, Jd) {
        return dd.__proto__ = Jd, dd
      }, fd(dd, Jd)
    }

    function nd(dd, Jd, kd) {
      return (Jd = Ud(Jd)) in dd ? Object.defineProperty(dd, Jd, {
        value: kd,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : dd[Jd] = kd, dd
    }

    function Ud(dd) {
      var Jd = function(dd, Jd) {
        if ("object" != Bd(dd) || !dd) return dd;
        var kd = dd[Symbol.toPrimitive];
        if (void 0 !== kd) {
          var pd = kd.call(dd, Jd || "default");
          if ("object" != Bd(pd)) return pd;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Jd ? String : Number)(dd)
      }(dd, "string");
      return "symbol" == Bd(Jd) ? Jd : Jd + ""
    }
    var yd = function(dd) {
      function Jd() {
        var dd;
        ! function(dd, Jd) {
          if (!(dd instanceof Jd)) throw new TypeError("Cannot call a class as a function")
        }(this, Jd);
        for (var kd = arguments.length, pd = new Array(kd), Nd = 0; Nd < kd; Nd++) pd[Nd] = arguments[Nd];
        return nd(dd = Sd(this, Jd, [].concat(pd)), "state", {
          isAnimationFinished: !0,
          totalLength: 0
        }), nd(dd, "generateSimpleStrokeDasharray", (function(dd, Jd) {
          return "".concat(Jd, "px ").concat(dd - Jd, "px")
        })), nd(dd, "getStrokeDasharray", (function(kd, pd, Nd) {
          var Wd = Nd.reduce((function(dd, Jd) {
            return dd + Jd
          }));
          if (!Wd) return dd.generateSimpleStrokeDasharray(pd, kd);
          for (var Pd = Math.floor(kd / Wd), Zd = kd % Wd, gd = pd - kd, Cd = [], Kd = 0, od = 0; Kd < Nd.length; od += Nd[Kd], ++Kd)
            if (od + Nd[Kd] > Zd) {
              Cd = [].concat(Yd(Nd.slice(0, Kd)), [Zd - od]);
              break
            } var ld = Cd.length % 2 === 0 ? [0, gd] : [gd];
          return [].concat(Yd(Jd.repeat(Nd, Pd)), Yd(Cd), ld).map((function(dd) {
            return "".concat(dd, "px")
          })).join(", ")
        })), nd(dd, "id", (0, Rd.G)("recharts-line-")), nd(dd, "pathRef", (function(Jd) {
          dd.mainCurve = Jd
        })), nd(dd, "handleAnimationEnd", (function() {
          dd.setState({
            isAnimationFinished: !0
          }), dd.props.onAnimationEnd && dd.props.onAnimationEnd()
        })), nd(dd, "handleAnimationStart", (function() {
          dd.setState({
            isAnimationFinished: !1
          }), dd.props.onAnimationStart && dd.props.onAnimationStart()
        })), dd
      }
      return function(dd, Jd) {
        if ("function" !== typeof Jd && null !== Jd) throw new TypeError("Super expression must either be null or a function");
        dd.prototype = Object.create(Jd && Jd.prototype, {
          constructor: {
            value: dd,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(dd, "prototype", {
          writable: !1
        }), Jd && fd(dd, Jd)
      }(Jd, dd), kd = Jd, Wd = [{
        key: "componentDidMount",
        value: function() {
          if (this.props.isAnimationActive) {
            var dd = this.getTotalLength();
            this.setState({
              totalLength: dd
            })
          }
        }
      }, {
        key: "componentDidUpdate",
        value: function() {
          if (this.props.isAnimationActive) {
            var dd = this.getTotalLength();
            dd !== this.state.totalLength && this.setState({
              totalLength: dd
            })
          }
        }
      }, {
        key: "getTotalLength",
        value: function() {
          var dd = this.mainCurve;
          try {
            return dd && dd.getTotalLength && dd.getTotalLength() || 0
          } catch (Jd) {
            return 0
          }
        }
      }, {
        key: "renderErrorBar",
        value: function(dd, Jd) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var kd = this.props,
            Nd = kd.points,
            Wd = kd.xAxis,
            Pd = kd.yAxis,
            Zd = kd.layout,
            gd = kd.children,
            Cd = (0, Id.i)(gd, ed.b);
          if (!Cd) return null;
          var Kd = function(dd, Jd) {
              return {
                x: dd.x,
                y: dd.y,
                value: dd.value,
                errorVal: (0, vd.U)(dd.payload, Jd)
              }
            },
            od = {
              clipPath: dd ? "url(#clipPath-".concat(Jd, ")") : null
            };
          return pd.createElement(Ld.e, od, Cd.map((function(dd) {
            return pd.cloneElement(dd, {
              key: "bar-".concat(dd.props.dataKey),
              data: Nd,
              xAxis: Wd,
              yAxis: Pd,
              layout: Zd,
              dataPointFormatter: Kd
            })
          })))
        }
      }, {
        key: "renderDots",
        value: function(dd, kd, Nd) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var Wd = this.props,
            Pd = Wd.dot,
            Zd = Wd.points,
            gd = Wd.dataKey,
            Cd = (0, Id.e)(this.props, !1),
            Kd = (0, Id.e)(Pd, !0),
            od = Zd.map((function(dd, kd) {
              var pd = Fd(Fd(Fd({
                key: "dot-".concat(kd),
                r: 3
              }, Cd), Kd), {}, {
                index: kd,
                cx: dd.x,
                cy: dd.y,
                value: dd.value,
                dataKey: gd,
                payload: dd.payload,
                points: Zd
              });
              return Jd.renderDotItem(Pd, pd)
            })),
            ld = {
              clipPath: dd ? "url(#clipPath-".concat(kd ? "" : "dots-").concat(Nd, ")") : null
            };
          return pd.createElement(Ld.e, ad({
            className: "recharts-line-dots",
            key: "dots"
          }, ld), od)
        }
      }, {
        key: "renderCurveStatically",
        value: function(dd, Jd, kd, Nd) {
          var Wd = this.props,
            Pd = Wd.type,
            Zd = Wd.layout,
            gd = Wd.connectNulls,
            Cd = (Wd.ref, sd(Wd, xd)),
            Kd = Fd(Fd(Fd({}, (0, Id.e)(Cd, !0)), {}, {
              fill: "none",
              className: "recharts-line-curve",
              clipPath: Jd ? "url(#clipPath-".concat(kd, ")") : null,
              points: dd
            }, Nd), {}, {
              type: Pd,
              layout: Zd,
              connectNulls: gd
            });
          return pd.createElement(ld.e, ad({}, Kd, {
            pathRef: this.pathRef
          }))
        }
      }, {
        key: "renderCurveWithAnimation",
        value: function(dd, Jd) {
          var kd = this,
            Wd = this.props,
            Pd = Wd.points,
            Zd = Wd.strokeDasharray,
            gd = Wd.isAnimationActive,
            Cd = Wd.animationBegin,
            Kd = Wd.animationDuration,
            od = Wd.animationEasing,
            ld = Wd.animationId,
            Qd = Wd.animateNewValues,
            Ld = Wd.width,
            Od = Wd.height,
            ed = this.state,
            Id = ed.prevPoints,
            Gd = ed.totalLength;
          return pd.createElement(Nd.d, {
            ZQ: Cd,
            duration: Kd,
            isActive: gd,
            easing: od,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "line-".concat(ld),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(pd) {
            var Nd = pd.t;
            if (Id) {
              var Wd = Id.length / Pd.length,
                gd = Pd.map((function(dd, Jd) {
                  var kd = Math.floor(Jd * Wd);
                  if (Id[kd]) {
                    var pd = Id[kd],
                      Pd = (0, Rd.s)(pd.x, dd.x),
                      Zd = (0, Rd.s)(pd.y, dd.y);
                    return Fd(Fd({}, dd), {}, {
                      x: Pd(Nd),
                      y: Zd(Nd)
                    })
                  }
                  if (Qd) {
                    var gd = (0, Rd.s)(2 * Ld, dd.x),
                      Cd = (0, Rd.s)(Od / 2, dd.y);
                    return Fd(Fd({}, dd), {}, {
                      x: gd(Nd),
                      y: Cd(Nd)
                    })
                  }
                  return Fd(Fd({}, dd), {}, {
                    x: dd.x,
                    y: dd.y
                  })
                }));
              return kd.renderCurveStatically(gd, dd, Jd)
            }
            var Cd, Kd = (0, Rd.s)(0, Gd)(Nd);
            if (Zd) {
              var od = "".concat(Zd).split(/[,\s]+/gim).map((function(dd) {
                return parseFloat(dd)
              }));
              Cd = kd.getStrokeDasharray(Kd, Gd, od)
            } else Cd = kd.generateSimpleStrokeDasharray(Gd, Kd);
            return kd.renderCurveStatically(Pd, dd, Jd, {
              strokeDasharray: Cd
            })
          }))
        }
      }, {
        key: "renderCurve",
        value: function(dd, Jd) {
          var kd = this.props,
            pd = kd.points,
            Nd = kd.isAnimationActive,
            Wd = this.state,
            Pd = Wd.prevPoints,
            Zd = Wd.totalLength;
          return Nd && pd && pd.length && (!Pd && Zd > 0 || !Kd()(Pd, pd)) ? this.renderCurveWithAnimation(dd, Jd) : this.renderCurveStatically(pd, dd, Jd)
        }
      }, {
        key: "render",
        value: function() {
          var dd, Jd = this.props,
            kd = Jd.hide,
            Nd = Jd.dot,
            Wd = Jd.points,
            Pd = Jd.className,
            Zd = Jd.xAxis,
            Cd = Jd.yAxis,
            Kd = Jd.top,
            ld = Jd.left,
            Qd = Jd.width,
            ed = Jd.height,
            Rd = Jd.isAnimationActive,
            Gd = Jd.id;
          if (kd || !Wd || !Wd.length) return null;
          var vd = this.state.isAnimationFinished,
            xd = 1 === Wd.length,
            qd = (0, od.b)("recharts-line", Pd),
            Bd = Zd && Zd.allowDataOverflow,
            sd = Cd && Cd.allowDataOverflow,
            ad = Bd || sd,
            Md = gd()(Gd) ? this.id : Gd,
            Fd = null !== (dd = (0, Id.e)(Nd, !1)) && void 0 !== dd ? dd : {
              r: 3,
              strokeWidth: 2
            },
            Yd = Fd.r,
            md = void 0 === Yd ? 3 : Yd,
            bd = Fd.strokeWidth,
            Sd = void 0 === bd ? 2 : bd,
            jd = ((0, Id.s)(Nd) ? Nd : {}).clipDot,
            Xd = void 0 === jd || jd,
            fd = 2 * md + Sd;
          return pd.createElement(Ld.e, {
            className: qd
          }, Bd || sd ? pd.createElement("defs", null, pd.createElement("clipPath", {
            id: "clipPath-".concat(Md)
          }, pd.createElement("rect", {
            x: Bd ? ld : ld - Qd / 2,
            y: sd ? Kd : Kd - ed / 2,
            width: Bd ? Qd : 2 * Qd,
            height: sd ? ed : 2 * ed
          })), !Xd && pd.createElement("clipPath", {
            id: "clipPath-dots-".concat(Md)
          }, pd.createElement("rect", {
            x: ld - fd / 2,
            y: Kd - fd / 2,
            width: Qd + fd,
            height: ed + fd
          }))) : null, !xd && this.renderCurve(ad, Md), this.renderErrorBar(ad, Md), (xd || Nd) && this.renderDots(ad, Xd, Md), (!Rd || vd) && Od.e.renderCallByParent(this.props, Wd))
        }
      }], Zd = [{
        key: "getDerivedStateFromProps",
        value: function(dd, Jd) {
          return dd.animationId !== Jd.prevAnimationId ? {
            prevAnimationId: dd.animationId,
            curPoints: dd.points,
            prevPoints: Jd.curPoints
          } : dd.points !== Jd.curPoints ? {
            curPoints: dd.points
          } : null
        }
      }, {
        key: "repeat",
        value: function(dd, Jd) {
          for (var kd = dd.length % 2 !== 0 ? [].concat(Yd(dd), [0]) : dd, pd = [], Nd = 0; Nd < Jd; ++Nd) pd = [].concat(Yd(pd), Yd(kd));
          return pd
        }
      }, {
        key: "renderDotItem",
        value: function(dd, Jd) {
          var kd;
          if (pd.isValidElement(dd)) kd = pd.cloneElement(dd, Jd);
          else if (Pd()(dd)) kd = dd(Jd);
          else {
            var Nd = Jd.key,
              Wd = sd(Jd, qd),
              Zd = (0, od.b)("recharts-line-dot", "boolean" !== typeof dd ? dd.className : "");
            kd = pd.createElement(Qd.e, ad({
              key: Nd
            }, Wd, {
              className: Zd
            }))
          }
          return kd
        }
      }], Wd && bd(kd.prototype, Wd), Zd && bd(kd, Zd), Object.defineProperty(kd, "prototype", {
        writable: !1
      }), kd;
      var kd, Wd, Zd
    }(pd.PureComponent);
    nd(yd, "displayName", "Line"), nd(yd, "defaultProps", {
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
      isAnimationActive: !Gd.b.isSsr,
      animateNewValues: !0,
      animationBegin: 0,
      animationDuration: 1500,
      animationEasing: "ease",
      hide: !1,
      label: !1
    }), nd(yd, "getComposedData", (function(dd) {
      var Jd = dd.props,
        kd = dd.xAxis,
        pd = dd.yAxis,
        Nd = dd.xAxisTicks,
        Wd = dd.yAxisTicks,
        Pd = dd.dataKey,
        Zd = dd.bandSize,
        Cd = dd.displayedData,
        Kd = dd.offset,
        od = Jd.layout;
      return Fd({
        points: Cd.map((function(dd, Jd) {
          var Cd = (0, vd.U)(dd, Pd);
          return "horizontal" === od ? {
            x: (0, vd.x)({
              axis: kd,
              ticks: Nd,
              bandSize: Zd,
              entry: dd,
              index: Jd
            }),
            y: gd()(Cd) ? null : pd.scale(Cd),
            value: Cd,
            payload: dd
          } : {
            x: gd()(Cd) ? null : kd.scale(Cd),
            y: (0, vd.x)({
              axis: pd,
              ticks: Wd,
              bandSize: Zd,
              entry: dd,
              index: Jd
            }),
            value: Cd,
            payload: dd
          }
        })),
        layout: od
      }, Kd)
    }))
  },
  6194: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Sd
    });
    var pd = kd(56),
      Nd = kd(5131),
      Wd = kd.n(Nd),
      Pd = kd(6198),
      Zd = kd.n(Pd),
      gd = kd(4935),
      Cd = kd(5843),
      Kd = kd(6107),
      od = kd(6113),
      ld = kd(5029),
      Qd = kd(6117),
      Ld = kd(5295),
      Od = kd(5297),
      ed = kd(6210);

    function Rd(dd) {
      return Rd = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(dd) {
        return typeof dd
      } : function(dd) {
        return dd && "function" == typeof Symbol && dd.constructor === Symbol && dd !== Symbol.prototype ? "symbol" : typeof dd
      }, Rd(dd)
    }

    function Id(dd, Jd) {
      for (var kd = 0; kd < Jd.length; kd++) {
        var pd = Jd[kd];
        pd.enumerable = pd.enumerable || !1, pd.configurable = !0, "value" in pd && (pd.writable = !0), Object.defineProperty(dd, Md(pd.key), pd)
      }
    }

    function Gd(dd, Jd, kd) {
      return Jd = xd(Jd),
        function(dd, Jd) {
          if (Jd && ("object" === Rd(Jd) || "function" === typeof Jd)) return Jd;
          if (void 0 !== Jd) throw new TypeError("Derived constructors may only return object or undefined");
          return function(dd) {
            if (void 0 === dd) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return dd
          }(dd)
        }(dd, vd() ? Reflect.construct(Jd, kd || [], xd(dd).constructor) : Jd.apply(dd, kd))
    }

    function vd() {
      try {
        var dd = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (dd) {}
      return (vd = function() {
        return !!dd
      })()
    }

    function xd(dd) {
      return xd = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(dd) {
        return dd.__proto__ || Object.getPrototypeOf(dd)
      }, xd(dd)
    }

    function qd(dd, Jd) {
      return qd = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(dd, Jd) {
        return dd.__proto__ = Jd, dd
      }, qd(dd, Jd)
    }

    function Bd(dd, Jd) {
      var kd = Object.keys(dd);
      if (Object.getOwnPropertySymbols) {
        var pd = Object.getOwnPropertySymbols(dd);
        Jd && (pd = pd.filter((function(Jd) {
          return Object.getOwnPropertyDescriptor(dd, Jd).enumerable
        }))), kd.push.apply(kd, pd)
      }
      return kd
    }

    function sd(dd) {
      for (var Jd = 1; Jd < arguments.length; Jd++) {
        var kd = null != arguments[Jd] ? arguments[Jd] : {};
        Jd % 2 ? Bd(Object(kd), !0).forEach((function(Jd) {
          ad(dd, Jd, kd[Jd])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(dd, Object.getOwnPropertyDescriptors(kd)) : Bd(Object(kd)).forEach((function(Jd) {
          Object.defineProperty(dd, Jd, Object.getOwnPropertyDescriptor(kd, Jd))
        }))
      }
      return dd
    }

    function ad(dd, Jd, kd) {
      return (Jd = Md(Jd)) in dd ? Object.defineProperty(dd, Jd, {
        value: kd,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : dd[Jd] = kd, dd
    }

    function Md(dd) {
      var Jd = function(dd, Jd) {
        if ("object" != Rd(dd) || !dd) return dd;
        var kd = dd[Symbol.toPrimitive];
        if (void 0 !== kd) {
          var pd = kd.call(dd, Jd || "default");
          if ("object" != Rd(pd)) return pd;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Jd ? String : Number)(dd)
      }(dd, "string");
      return "symbol" == Rd(Jd) ? Jd : Jd + ""
    }

    function Fd(dd, Jd) {
      return function(dd) {
        if (Array.isArray(dd)) return dd
      }(dd) || function(dd, Jd) {
        var kd = null == dd ? null : "undefined" != typeof Symbol && dd[Symbol.iterator] || dd["@@iterator"];
        if (null != kd) {
          var pd, Nd, Wd, Pd, Zd = [],
            gd = !0,
            Cd = !1;
          try {
            if (Wd = (kd = kd.call(dd)).next, 0 === Jd) {
              if (Object(kd) !== kd) return;
              gd = !1
            } else
              for (; !(gd = (pd = Wd.call(kd)).done) && (Zd.push(pd.value), Zd.length !== Jd); gd = !0);
          } catch (dd) {
            Cd = !0, Nd = dd
          } finally {
            try {
              if (!gd && null != kd.return && (Pd = kd.return(), Object(Pd) !== Pd)) return
            } finally {
              if (Cd) throw Nd
            }
          }
          return Zd
        }
      }(dd, Jd) || function(dd, Jd) {
        if (!dd) return;
        if ("string" === typeof dd) return Yd(dd, Jd);
        var kd = Object.prototype.toString.call(dd).slice(8, -1);
        "Object" === kd && dd.constructor && (kd = dd.constructor.name);
        if ("Map" === kd || "Set" === kd) return Array.from(dd);
        if ("Arguments" === kd || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(kd)) return Yd(dd, Jd)
      }(dd, Jd) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Yd(dd, Jd) {
      (null == Jd || Jd > dd.length) && (Jd = dd.length);
      for (var kd = 0, pd = new Array(Jd); kd < Jd; kd++) pd[kd] = dd[kd];
      return pd
    }

    function md() {
      return md = Object.assign ? Object.assign.bind() : function(dd) {
        for (var Jd = 1; Jd < arguments.length; Jd++) {
          var kd = arguments[Jd];
          for (var pd in kd) Object.prototype.hasOwnProperty.call(kd, pd) && (dd[pd] = kd[pd])
        }
        return dd
      }, md.apply(this, arguments)
    }

    function bd(dd) {
      var Jd = dd.x,
        kd = dd.y,
        Nd = dd.segment,
        Pd = dd.xAxisId,
        Rd = dd.yAxisId,
        Id = dd.shape,
        Gd = dd.className,
        vd = dd.alwaysShow,
        xd = (0, ed.m)(),
        qd = (0, ed.t)(Pd),
        Bd = (0, ed.v)(Rd),
        ad = (0, ed.s)();
      if (!xd || !ad) return null;
      (0, Ld.e)(void 0 === vd, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
      var Md = function(dd, Jd, kd, pd, Nd, Wd, Pd, gd, Cd) {
        var Kd = Nd.x,
          ld = Nd.y,
          Qd = Nd.width,
          Ld = Nd.height;
        if (kd) {
          var Od = Cd.y,
            ed = dd.y.apply(Od, {
              position: Wd
            });
          if ((0, od.e)(Cd, "discard") && !dd.y.isInRange(ed)) return null;
          var Rd = [{
            x: Kd + Qd,
            y: ed
          }, {
            x: Kd,
            y: ed
          }];
          return "left" === gd ? Rd.reverse() : Rd
        }
        if (Jd) {
          var Id = Cd.x,
            Gd = dd.x.apply(Id, {
              position: Wd
            });
          if ((0, od.e)(Cd, "discard") && !dd.x.isInRange(Gd)) return null;
          var vd = [{
            x: Gd,
            y: ld + Ld
          }, {
            x: Gd,
            y: ld
          }];
          return "top" === Pd ? vd.reverse() : vd
        }
        if (pd) {
          var xd = Cd.segment.map((function(Jd) {
            return dd.apply(Jd, {
              position: Wd
            })
          }));
          return (0, od.e)(Cd, "discard") && Zd()(xd, (function(Jd) {
            return !dd.isInRange(Jd)
          })) ? null : xd
        }
        return null
      }((0, Qd.e)({
        x: qd.scale,
        y: Bd.scale
      }), (0, ld.z)(Jd), (0, ld.z)(kd), Nd && 2 === Nd.length, ad, dd.position, qd.orientation, Bd.orientation, dd);
      if (!Md) return null;
      var Yd = Fd(Md, 2),
        bd = Yd[0],
        Sd = bd.x,
        jd = bd.y,
        Xd = Yd[1],
        fd = Xd.x,
        nd = Xd.y,
        Ud = sd(sd({
          clipPath: (0, od.e)(dd, "hidden") ? "url(#".concat(xd, ")") : void 0
        }, (0, Od.e)(dd, !0)), {}, {
          x1: Sd,
          y1: jd,
          x2: fd,
          y2: nd
        });
      return pd.createElement(Cd.e, {
        className: (0, gd.b)("recharts-reference-line", Gd)
      }, function(dd, Jd) {
        return pd.isValidElement(dd) ? pd.cloneElement(dd, Jd) : Wd()(dd) ? dd(Jd) : pd.createElement("line", md({}, Jd, {
          className: "recharts-reference-line-line"
        }))
      }(Id, Ud), Kd.c.renderCallByParent(dd, (0, Qd.h)({
        x1: Sd,
        y1: jd,
        x2: fd,
        y2: nd
      })))
    }
    var Sd = function(dd) {
      function Jd() {
        return function(dd, Jd) {
          if (!(dd instanceof Jd)) throw new TypeError("Cannot call a class as a function")
        }(this, Jd), Gd(this, Jd, arguments)
      }
      return function(dd, Jd) {
        if ("function" !== typeof Jd && null !== Jd) throw new TypeError("Super expression must either be null or a function");
        dd.prototype = Object.create(Jd && Jd.prototype, {
          constructor: {
            value: dd,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(dd, "prototype", {
          writable: !1
        }), Jd && qd(dd, Jd)
      }(Jd, dd), kd = Jd, (Nd = [{
        key: "render",
        value: function() {
          return pd.createElement(bd, this.props)
        }
      }]) && Id(kd.prototype, Nd), Wd && Id(kd, Wd), Object.defineProperty(kd, "prototype", {
        writable: !1
      }), kd;
      var kd, Nd, Wd
    }(pd.Component);
    ad(Sd, "displayName", "ReferenceLine"), ad(Sd, "defaultProps", {
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
  6254: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Id
    });
    var pd = kd(56),
      Nd = kd(4935),
      Wd = kd(6210),
      Pd = kd(6259),
      Zd = kd(6019);

    function gd(dd) {
      return gd = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(dd) {
        return typeof dd
      } : function(dd) {
        return dd && "function" == typeof Symbol && dd.constructor === Symbol && dd !== Symbol.prototype ? "symbol" : typeof dd
      }, gd(dd)
    }

    function Cd(dd, Jd) {
      for (var kd = 0; kd < Jd.length; kd++) {
        var pd = Jd[kd];
        pd.enumerable = pd.enumerable || !1, pd.configurable = !0, "value" in pd && (pd.writable = !0), Object.defineProperty(dd, Od(pd.key), pd)
      }
    }

    function Kd(dd, Jd, kd) {
      return Jd = ld(Jd),
        function(dd, Jd) {
          if (Jd && ("object" === gd(Jd) || "function" === typeof Jd)) return Jd;
          if (void 0 !== Jd) throw new TypeError("Derived constructors may only return object or undefined");
          return function(dd) {
            if (void 0 === dd) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return dd
          }(dd)
        }(dd, od() ? Reflect.construct(Jd, kd || [], ld(dd).constructor) : Jd.apply(dd, kd))
    }

    function od() {
      try {
        var dd = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (dd) {}
      return (od = function() {
        return !!dd
      })()
    }

    function ld(dd) {
      return ld = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(dd) {
        return dd.__proto__ || Object.getPrototypeOf(dd)
      }, ld(dd)
    }

    function Qd(dd, Jd) {
      return Qd = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(dd, Jd) {
        return dd.__proto__ = Jd, dd
      }, Qd(dd, Jd)
    }

    function Ld(dd, Jd, kd) {
      return (Jd = Od(Jd)) in dd ? Object.defineProperty(dd, Jd, {
        value: kd,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : dd[Jd] = kd, dd
    }

    function Od(dd) {
      var Jd = function(dd, Jd) {
        if ("object" != gd(dd) || !dd) return dd;
        var kd = dd[Symbol.toPrimitive];
        if (void 0 !== kd) {
          var pd = kd.call(dd, Jd || "default");
          if ("object" != gd(pd)) return pd;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Jd ? String : Number)(dd)
      }(dd, "string");
      return "symbol" == gd(Jd) ? Jd : Jd + ""
    }

    function ed() {
      return ed = Object.assign ? Object.assign.bind() : function(dd) {
        for (var Jd = 1; Jd < arguments.length; Jd++) {
          var kd = arguments[Jd];
          for (var pd in kd) Object.prototype.hasOwnProperty.call(kd, pd) && (dd[pd] = kd[pd])
        }
        return dd
      }, ed.apply(this, arguments)
    }

    function Rd(dd) {
      var Jd = dd.xAxisId,
        kd = (0, Wd.i)(),
        gd = (0, Wd.f)(),
        Cd = (0, Wd.t)(Jd);
      return null == Cd ? null : pd.createElement(Pd.b, ed({}, Cd, {
        className: (0, Nd.b)("recharts-".concat(Cd.axisType, " ").concat(Cd.axisType), Cd.className),
        viewBox: {
          x: 0,
          y: 0,
          width: kd,
          height: gd
        },
        ticksGenerator: function(dd) {
          return (0, Zd.P)(dd, !0)
        }
      }))
    }
    var Id = function(dd) {
      function Jd() {
        return function(dd, Jd) {
          if (!(dd instanceof Jd)) throw new TypeError("Cannot call a class as a function")
        }(this, Jd), Kd(this, Jd, arguments)
      }
      return function(dd, Jd) {
        if ("function" !== typeof Jd && null !== Jd) throw new TypeError("Super expression must either be null or a function");
        dd.prototype = Object.create(Jd && Jd.prototype, {
          constructor: {
            value: dd,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(dd, "prototype", {
          writable: !1
        }), Jd && Qd(dd, Jd)
      }(Jd, dd), kd = Jd, (Nd = [{
        key: "render",
        value: function() {
          return pd.createElement(Rd, this.props)
        }
      }]) && Cd(kd.prototype, Nd), Wd && Cd(kd, Wd), Object.defineProperty(kd, "prototype", {
        writable: !1
      }), kd;
      var kd, Nd, Wd
    }(pd.Component);
    Ld(Id, "displayName", "XAxis"), Ld(Id, "defaultProps", {
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
  6263: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Id
    });
    var pd = kd(56),
      Nd = kd(4935),
      Wd = kd(6210),
      Pd = kd(6259),
      Zd = kd(6019);

    function gd(dd) {
      return gd = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(dd) {
        return typeof dd
      } : function(dd) {
        return dd && "function" == typeof Symbol && dd.constructor === Symbol && dd !== Symbol.prototype ? "symbol" : typeof dd
      }, gd(dd)
    }

    function Cd(dd, Jd) {
      for (var kd = 0; kd < Jd.length; kd++) {
        var pd = Jd[kd];
        pd.enumerable = pd.enumerable || !1, pd.configurable = !0, "value" in pd && (pd.writable = !0), Object.defineProperty(dd, Od(pd.key), pd)
      }
    }

    function Kd(dd, Jd, kd) {
      return Jd = ld(Jd),
        function(dd, Jd) {
          if (Jd && ("object" === gd(Jd) || "function" === typeof Jd)) return Jd;
          if (void 0 !== Jd) throw new TypeError("Derived constructors may only return object or undefined");
          return function(dd) {
            if (void 0 === dd) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return dd
          }(dd)
        }(dd, od() ? Reflect.construct(Jd, kd || [], ld(dd).constructor) : Jd.apply(dd, kd))
    }

    function od() {
      try {
        var dd = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (dd) {}
      return (od = function() {
        return !!dd
      })()
    }

    function ld(dd) {
      return ld = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(dd) {
        return dd.__proto__ || Object.getPrototypeOf(dd)
      }, ld(dd)
    }

    function Qd(dd, Jd) {
      return Qd = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(dd, Jd) {
        return dd.__proto__ = Jd, dd
      }, Qd(dd, Jd)
    }

    function Ld(dd, Jd, kd) {
      return (Jd = Od(Jd)) in dd ? Object.defineProperty(dd, Jd, {
        value: kd,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : dd[Jd] = kd, dd
    }

    function Od(dd) {
      var Jd = function(dd, Jd) {
        if ("object" != gd(dd) || !dd) return dd;
        var kd = dd[Symbol.toPrimitive];
        if (void 0 !== kd) {
          var pd = kd.call(dd, Jd || "default");
          if ("object" != gd(pd)) return pd;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Jd ? String : Number)(dd)
      }(dd, "string");
      return "symbol" == gd(Jd) ? Jd : Jd + ""
    }

    function ed() {
      return ed = Object.assign ? Object.assign.bind() : function(dd) {
        for (var Jd = 1; Jd < arguments.length; Jd++) {
          var kd = arguments[Jd];
          for (var pd in kd) Object.prototype.hasOwnProperty.call(kd, pd) && (dd[pd] = kd[pd])
        }
        return dd
      }, ed.apply(this, arguments)
    }
    var Rd = function(dd) {
        var Jd = dd.yAxisId,
          kd = (0, Wd.i)(),
          gd = (0, Wd.f)(),
          Cd = (0, Wd.v)(Jd);
        return null == Cd ? null : pd.createElement(Pd.b, ed({}, Cd, {
          className: (0, Nd.b)("recharts-".concat(Cd.axisType, " ").concat(Cd.axisType), Cd.className),
          viewBox: {
            x: 0,
            y: 0,
            width: kd,
            height: gd
          },
          ticksGenerator: function(dd) {
            return (0, Zd.P)(dd, !0)
          }
        }))
      },
      Id = function(dd) {
        function Jd() {
          return function(dd, Jd) {
            if (!(dd instanceof Jd)) throw new TypeError("Cannot call a class as a function")
          }(this, Jd), Kd(this, Jd, arguments)
        }
        return function(dd, Jd) {
          if ("function" !== typeof Jd && null !== Jd) throw new TypeError("Super expression must either be null or a function");
          dd.prototype = Object.create(Jd && Jd.prototype, {
            constructor: {
              value: dd,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(dd, "prototype", {
            writable: !1
          }), Jd && Qd(dd, Jd)
        }(Jd, dd), kd = Jd, (Nd = [{
          key: "render",
          value: function() {
            return pd.createElement(Rd, this.props)
          }
        }]) && Cd(kd.prototype, Nd), Wd && Cd(kd, Wd), Object.defineProperty(kd, "prototype", {
          writable: !1
        }), kd;
        var kd, Nd, Wd
      }(pd.Component);
    Ld(Id, "displayName", "YAxis"), Ld(Id, "defaultProps", {
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
  6261: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Od
    });
    var pd = kd(5131),
      Nd = kd.n(pd),
      Wd = kd(5029),
      Pd = kd(6010),
      Zd = kd(5854),
      gd = kd(6117);

    function Cd(dd, Jd, kd) {
      if (Jd < 1) return [];
      if (1 === Jd && void 0 === kd) return dd;
      for (var pd = [], Nd = 0; Nd < dd.length; Nd += Jd) {
        if (void 0 !== kd && !0 !== kd(dd[Nd])) return;
        pd.push(dd[Nd])
      }
      return pd
    }

    function Kd(dd, Jd, kd, pd, Nd) {
      if (dd * Jd < dd * pd || dd * Jd > dd * Nd) return !1;
      var Wd = kd();
      return dd * (Jd - dd * Wd / 2 - pd) >= 0 && dd * (Jd + dd * Wd / 2 - Nd) <= 0
    }

    function od(dd) {
      return od = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(dd) {
        return typeof dd
      } : function(dd) {
        return dd && "function" == typeof Symbol && dd.constructor === Symbol && dd !== Symbol.prototype ? "symbol" : typeof dd
      }, od(dd)
    }

    function ld(dd, Jd) {
      var kd = Object.keys(dd);
      if (Object.getOwnPropertySymbols) {
        var pd = Object.getOwnPropertySymbols(dd);
        Jd && (pd = pd.filter((function(Jd) {
          return Object.getOwnPropertyDescriptor(dd, Jd).enumerable
        }))), kd.push.apply(kd, pd)
      }
      return kd
    }

    function Qd(dd) {
      for (var Jd = 1; Jd < arguments.length; Jd++) {
        var kd = null != arguments[Jd] ? arguments[Jd] : {};
        Jd % 2 ? ld(Object(kd), !0).forEach((function(Jd) {
          Ld(dd, Jd, kd[Jd])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(dd, Object.getOwnPropertyDescriptors(kd)) : ld(Object(kd)).forEach((function(Jd) {
          Object.defineProperty(dd, Jd, Object.getOwnPropertyDescriptor(kd, Jd))
        }))
      }
      return dd
    }

    function Ld(dd, Jd, kd) {
      return (Jd = function(dd) {
        var Jd = function(dd, Jd) {
          if ("object" != od(dd) || !dd) return dd;
          var kd = dd[Symbol.toPrimitive];
          if (void 0 !== kd) {
            var pd = kd.call(dd, Jd || "default");
            if ("object" != od(pd)) return pd;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === Jd ? String : Number)(dd)
        }(dd, "string");
        return "symbol" == od(Jd) ? Jd : Jd + ""
      }(Jd)) in dd ? Object.defineProperty(dd, Jd, {
        value: kd,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : dd[Jd] = kd, dd
    }

    function Od(dd, Jd, kd) {
      var pd = dd.Do,
        od = dd.ticks,
        ld = dd.viewBox,
        Ld = dd.minTickGap,
        Od = dd.orientation,
        ed = dd.interval,
        Rd = dd.tickFormatter,
        Id = dd.unit,
        Gd = dd.angle;
      if (!od || !od.length || !pd) return [];
      if ((0, Wd.B)(ed) || Zd.b.isSsr) return function(dd, Jd) {
        return Cd(dd, Jd + 1)
      }(od, "number" === typeof ed && (0, Wd.B)(ed) ? ed : 0);
      var vd = [],
        xd = "top" === Od || "bottom" === Od ? "width" : "height",
        qd = Id && "width" === xd ? (0, Pd.h)(Id, {
          fontSize: Jd,
          letterSpacing: kd
        }) : {
          width: 0,
          height: 0
        },
        Bd = function(dd, pd) {
          var Wd = Nd()(Rd) ? Rd(dd.value, pd) : dd.value;
          return "width" === xd ? function(dd, Jd, kd) {
            var pd = {
              width: dd.width + Jd.width,
              height: dd.height + Jd.height
            };
            return (0, gd.g)(pd, kd)
          }((0, Pd.h)(Wd, {
            fontSize: Jd,
            letterSpacing: kd
          }), qd, Gd) : (0, Pd.h)(Wd, {
            fontSize: Jd,
            letterSpacing: kd
          })[xd]
        },
        sd = od.length >= 2 ? (0, Wd.D)(od[1].coordinate - od[0].coordinate) : 1,
        ad = function(dd, Jd, kd) {
          var pd = "width" === kd,
            Nd = dd.x,
            Wd = dd.y,
            Pd = dd.width,
            Zd = dd.height;
          return 1 === Jd ? {
            start: pd ? Nd : Wd,
            end: pd ? Nd + Pd : Wd + Zd
          } : {
            start: pd ? Nd + Pd : Wd + Zd,
            end: pd ? Nd : Wd
          }
        }(ld, sd, xd);
      return "equidistantPreserveStart" === ed ? function(dd, Jd, kd, pd, Nd) {
        for (var Wd, Pd = (pd || []).slice(), Zd = Jd.start, gd = Jd.end, od = 0, ld = 1, Qd = Zd, Ld = function() {
            var Jd = null === pd || void 0 === pd ? void 0 : pd[od];
            if (void 0 === Jd) return {
              v: Cd(pd, ld)
            };
            var Wd, Pd = od,
              Ld = function() {
                return void 0 === Wd && (Wd = kd(Jd, Pd)), Wd
              },
              Od = Jd.coordinate,
              ed = 0 === od || Kd(dd, Od, Ld, Qd, gd);
            ed || (od = 0, Qd = Zd, ld += 1), ed && (Qd = Od + dd * (Ld() / 2 + Nd), od += ld)
          }; ld <= Pd.length;)
          if (Wd = Ld()) return Wd.v;
        return []
      }(sd, ad, Bd, od, Ld) : (vd = "preserveStart" === ed || "preserveStartEnd" === ed ? function(dd, Jd, kd, pd, Nd, Wd) {
        var Pd = (pd || []).slice(),
          Zd = Pd.length,
          gd = Jd.start,
          Cd = Jd.end;
        if (Wd) {
          var od = pd[Zd - 1],
            ld = kd(od, Zd - 1),
            Ld = dd * (od.coordinate + dd * ld / 2 - Cd);
          Pd[Zd - 1] = od = Qd(Qd({}, od), {}, {
            tickCoord: Ld > 0 ? od.coordinate - Ld * dd : od.coordinate
          }), Kd(dd, od.tickCoord, (function() {
            return ld
          }), gd, Cd) && (Cd = od.tickCoord - dd * (ld / 2 + Nd), Pd[Zd - 1] = Qd(Qd({}, od), {}, {
            isShow: !0
          }))
        }
        for (var Od = Wd ? Zd - 1 : Zd, ed = function(Jd) {
            var pd, Wd = Pd[Jd],
              Zd = function() {
                return void 0 === pd && (pd = kd(Wd, Jd)), pd
              };
            if (0 === Jd) {
              var od = dd * (Wd.coordinate - dd * Zd() / 2 - gd);
              Pd[Jd] = Wd = Qd(Qd({}, Wd), {}, {
                tickCoord: od < 0 ? Wd.coordinate - od * dd : Wd.coordinate
              })
            } else Pd[Jd] = Wd = Qd(Qd({}, Wd), {}, {
              tickCoord: Wd.coordinate
            });
            Kd(dd, Wd.tickCoord, Zd, gd, Cd) && (gd = Wd.tickCoord + dd * (Zd() / 2 + Nd), Pd[Jd] = Qd(Qd({}, Wd), {}, {
              isShow: !0
            }))
          }, Rd = 0; Rd < Od; Rd++) ed(Rd);
        return Pd
      }(sd, ad, Bd, od, Ld, "preserveStartEnd" === ed) : function(dd, Jd, kd, pd, Nd) {
        for (var Wd = (pd || []).slice(), Pd = Wd.length, Zd = Jd.start, gd = Jd.end, Cd = function(Jd) {
            var pd, Cd = Wd[Jd],
              od = function() {
                return void 0 === pd && (pd = kd(Cd, Jd)), pd
              };
            if (Jd === Pd - 1) {
              var ld = dd * (Cd.coordinate + dd * od() / 2 - gd);
              Wd[Jd] = Cd = Qd(Qd({}, Cd), {}, {
                tickCoord: ld > 0 ? Cd.coordinate - ld * dd : Cd.coordinate
              })
            } else Wd[Jd] = Cd = Qd(Qd({}, Cd), {}, {
              tickCoord: Cd.coordinate
            });
            Kd(dd, Cd.tickCoord, od, Zd, gd) && (gd = Cd.tickCoord - dd * (od() / 2 + Nd), Wd[Jd] = Qd(Qd({}, Cd), {}, {
              isShow: !0
            }))
          }, od = Pd - 1; od >= 0; od--) Cd(od);
        return Wd
      }(sd, ad, Bd, od, Ld), vd.filter((function(dd) {
        return dd.isShow
      })))
    }
  },
  6276: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => gd
    });
    var pd = kd(5332),
      Nd = kd(6145),
      Wd = kd(6254),
      Pd = kd(6263),
      Zd = kd(6117),
      gd = (0, pd.e)({
        chartName: "BarChart",
        GraphicalChild: Nd.c,
        defaultTooltipEventType: "axis",
        validateTooltipEventTypes: ["axis", "item"],
        axisComponents: [{
          axisType: "xAxis",
          AxisComp: Wd.b
        }, {
          axisType: "yAxis",
          AxisComp: Pd.b
        }],
        formatAxisMap: Zd.f
      })
  },
  5323: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => WJ
    });
    var pd = kd(5332),
      Nd = kd(6244),
      Wd = kd(6145),
      Pd = kd(6250),
      Zd = kd(56),
      gd = kd(5992),
      Cd = kd(5289),
      Kd = kd.n(Cd),
      od = kd(6085),
      ld = kd.n(od),
      Qd = kd(5131),
      Ld = kd.n(Qd),
      Od = kd(4935),
      ed = kd(5843),
      Rd = kd(6152),
      Id = kd(5297),
      Gd = kd(5854);

    function vd(dd) {
      return vd = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(dd) {
        return typeof dd
      } : function(dd) {
        return dd && "function" == typeof Symbol && dd.constructor === Symbol && dd !== Symbol.prototype ? "symbol" : typeof dd
      }, vd(dd)
    }

    function xd(dd, Jd) {
      for (var kd = 0; kd < Jd.length; kd++) {
        var pd = Jd[kd];
        pd.enumerable = pd.enumerable || !1, pd.configurable = !0, "value" in pd && (pd.writable = !0), Object.defineProperty(dd, Fd(pd.key), pd)
      }
    }

    function qd(dd, Jd, kd) {
      return Jd = sd(Jd),
        function(dd, Jd) {
          if (Jd && ("object" === vd(Jd) || "function" === typeof Jd)) return Jd;
          if (void 0 !== Jd) throw new TypeError("Derived constructors may only return object or undefined");
          return function(dd) {
            if (void 0 === dd) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return dd
          }(dd)
        }(dd, Bd() ? Reflect.construct(Jd, kd || [], sd(dd).constructor) : Jd.apply(dd, kd))
    }

    function Bd() {
      try {
        var dd = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (dd) {}
      return (Bd = function() {
        return !!dd
      })()
    }

    function sd(dd) {
      return sd = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(dd) {
        return dd.__proto__ || Object.getPrototypeOf(dd)
      }, sd(dd)
    }

    function ad(dd, Jd) {
      return ad = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(dd, Jd) {
        return dd.__proto__ = Jd, dd
      }, ad(dd, Jd)
    }

    function Md(dd, Jd, kd) {
      return (Jd = Fd(Jd)) in dd ? Object.defineProperty(dd, Jd, {
        value: kd,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : dd[Jd] = kd, dd
    }

    function Fd(dd) {
      var Jd = function(dd, Jd) {
        if ("object" != vd(dd) || !dd) return dd;
        var kd = dd[Symbol.toPrimitive];
        if (void 0 !== kd) {
          var pd = kd.call(dd, Jd || "default");
          if ("object" != vd(pd)) return pd;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Jd ? String : Number)(dd)
      }(dd, "string");
      return "symbol" == vd(Jd) ? Jd : Jd + ""
    }
    var Yd = function(dd) {
      function Jd() {
        return function(dd, Jd) {
          if (!(dd instanceof Jd)) throw new TypeError("Cannot call a class as a function")
        }(this, Jd), qd(this, Jd, arguments)
      }
      return function(dd, Jd) {
        if ("function" !== typeof Jd && null !== Jd) throw new TypeError("Super expression must either be null or a function");
        dd.prototype = Object.create(Jd && Jd.prototype, {
          constructor: {
            value: dd,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(dd, "prototype", {
          writable: !1
        }), Jd && ad(dd, Jd)
      }(Jd, dd), kd = Jd, (pd = [{
        key: "render",
        value: function() {
          return null
        }
      }]) && xd(kd.prototype, pd), Nd && xd(kd, Nd), Object.defineProperty(kd, "prototype", {
        writable: !1
      }), kd;
      var kd, pd, Nd
    }(Zd.Component);
    Md(Yd, "displayName", "ZAxis"), Md(Yd, "defaultProps", {
      zAxisId: 0,
      range: [64, 64],
      scale: "auto",
      type: "number"
    });
    var md = kd(6237),
      bd = kd(6092),
      Sd = kd(6149),
      jd = kd(5029),
      Xd = kd(6019),
      fd = kd(5317),
      nd = kd(5913),
      Ud = kd(6163),
      yd = ["option", "isActive"];

    function Dd() {
      return Dd = Object.assign ? Object.assign.bind() : function(dd) {
        for (var Jd = 1; Jd < arguments.length; Jd++) {
          var kd = arguments[Jd];
          for (var pd in kd) Object.prototype.hasOwnProperty.call(kd, pd) && (dd[pd] = kd[pd])
        }
        return dd
      }, Dd.apply(this, arguments)
    }

    function Td(dd, Jd) {
      if (null == dd) return {};
      var kd, pd, Nd = function(dd, Jd) {
        if (null == dd) return {};
        var kd = {};
        for (var pd in dd)
          if (Object.prototype.hasOwnProperty.call(dd, pd)) {
            if (Jd.indexOf(pd) >= 0) continue;
            kd[pd] = dd[pd]
          } return kd
      }(dd, Jd);
      if (Object.getOwnPropertySymbols) {
        var Wd = Object.getOwnPropertySymbols(dd);
        for (pd = 0; pd < Wd.length; pd++) kd = Wd[pd], Jd.indexOf(kd) >= 0 || Object.prototype.propertyIsEnumerable.call(dd, kd) && (Nd[kd] = dd[kd])
      }
      return Nd
    }

    function Ed(dd) {
      var Jd = dd.option,
        kd = dd.isActive,
        pd = Td(dd, yd);
      return "string" === typeof Jd ? Zd.createElement(Ud.b, Dd({
        option: Zd.createElement(nd.c, Dd({
          type: Jd
        }, pd)),
        isActive: kd,
        shapeType: "symbols"
      }, pd)) : Zd.createElement(Ud.b, Dd({
        option: Jd,
        isActive: kd,
        shapeType: "symbols"
      }, pd))
    }

    function cd(dd) {
      return cd = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(dd) {
        return typeof dd
      } : function(dd) {
        return dd && "function" == typeof Symbol && dd.constructor === Symbol && dd !== Symbol.prototype ? "symbol" : typeof dd
      }, cd(dd)
    }

    function hd() {
      return hd = Object.assign ? Object.assign.bind() : function(dd) {
        for (var Jd = 1; Jd < arguments.length; Jd++) {
          var kd = arguments[Jd];
          for (var pd in kd) Object.prototype.hasOwnProperty.call(kd, pd) && (dd[pd] = kd[pd])
        }
        return dd
      }, hd.apply(this, arguments)
    }

    function rd(dd, Jd) {
      var kd = Object.keys(dd);
      if (Object.getOwnPropertySymbols) {
        var pd = Object.getOwnPropertySymbols(dd);
        Jd && (pd = pd.filter((function(Jd) {
          return Object.getOwnPropertyDescriptor(dd, Jd).enumerable
        }))), kd.push.apply(kd, pd)
      }
      return kd
    }

    function ud(dd) {
      for (var Jd = 1; Jd < arguments.length; Jd++) {
        var kd = null != arguments[Jd] ? arguments[Jd] : {};
        Jd % 2 ? rd(Object(kd), !0).forEach((function(Jd) {
          Ad(dd, Jd, kd[Jd])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(dd, Object.getOwnPropertyDescriptors(kd)) : rd(Object(kd)).forEach((function(Jd) {
          Object.defineProperty(dd, Jd, Object.getOwnPropertyDescriptor(kd, Jd))
        }))
      }
      return dd
    }

    function td(dd, Jd) {
      for (var kd = 0; kd < Jd.length; kd++) {
        var pd = Jd[kd];
        pd.enumerable = pd.enumerable || !1, pd.configurable = !0, "value" in pd && (pd.writable = !0), Object.defineProperty(dd, dJ(pd.key), pd)
      }
    }

    function Vd(dd, Jd, kd) {
      return Jd = Hd(Jd),
        function(dd, Jd) {
          if (Jd && ("object" === cd(Jd) || "function" === typeof Jd)) return Jd;
          if (void 0 !== Jd) throw new TypeError("Derived constructors may only return object or undefined");
          return function(dd) {
            if (void 0 === dd) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return dd
          }(dd)
        }(dd, zd() ? Reflect.construct(Jd, kd || [], Hd(dd).constructor) : Jd.apply(dd, kd))
    }

    function zd() {
      try {
        var dd = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (dd) {}
      return (zd = function() {
        return !!dd
      })()
    }

    function Hd(dd) {
      return Hd = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(dd) {
        return dd.__proto__ || Object.getPrototypeOf(dd)
      }, Hd(dd)
    }

    function wd(dd, Jd) {
      return wd = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(dd, Jd) {
        return dd.__proto__ = Jd, dd
      }, wd(dd, Jd)
    }

    function Ad(dd, Jd, kd) {
      return (Jd = dJ(Jd)) in dd ? Object.defineProperty(dd, Jd, {
        value: kd,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : dd[Jd] = kd, dd
    }

    function dJ(dd) {
      var Jd = function(dd, Jd) {
        if ("object" != cd(dd) || !dd) return dd;
        var kd = dd[Symbol.toPrimitive];
        if (void 0 !== kd) {
          var pd = kd.call(dd, Jd || "default");
          if ("object" != cd(pd)) return pd;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Jd ? String : Number)(dd)
      }(dd, "string");
      return "symbol" == cd(Jd) ? Jd : Jd + ""
    }
    var JJ = function(dd) {
      function Jd() {
        var dd;
        ! function(dd, Jd) {
          if (!(dd instanceof Jd)) throw new TypeError("Cannot call a class as a function")
        }(this, Jd);
        for (var kd = arguments.length, pd = new Array(kd), Nd = 0; Nd < kd; Nd++) pd[Nd] = arguments[Nd];
        return Ad(dd = Vd(this, Jd, [].concat(pd)), "state", {
          isAnimationFinished: !1
        }), Ad(dd, "handleAnimationEnd", (function() {
          dd.setState({
            isAnimationFinished: !0
          })
        })), Ad(dd, "handleAnimationStart", (function() {
          dd.setState({
            isAnimationFinished: !1
          })
        })), Ad(dd, "id", (0, jd.G)("recharts-scatter-")), dd
      }
      return function(dd, Jd) {
        if ("function" !== typeof Jd && null !== Jd) throw new TypeError("Super expression must either be null or a function");
        dd.prototype = Object.create(Jd && Jd.prototype, {
          constructor: {
            value: dd,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(dd, "prototype", {
          writable: !1
        }), Jd && wd(dd, Jd)
      }(Jd, dd), kd = Jd, pd = [{
        key: "renderSymbolsStatically",
        value: function(dd) {
          var Jd = this,
            kd = this.props,
            pd = kd.shape,
            Nd = kd.activeShape,
            Wd = kd.activeIndex,
            Pd = (0, Id.e)(this.props, !1);
          return dd.map((function(dd, kd) {
            var gd = Wd === kd,
              Cd = gd ? Nd : pd,
              Kd = ud(ud({}, Pd), dd);
            return Zd.createElement(ed.e, hd({
              className: "recharts-scatter-symbol",
              key: "symbol-".concat(null === dd || void 0 === dd ? void 0 : dd.cx, "-").concat(null === dd || void 0 === dd ? void 0 : dd.cy, "-").concat(null === dd || void 0 === dd ? void 0 : dd.size, "-").concat(kd)
            }, (0, fd.n)(Jd.props, dd, kd), {
              role: "img"
            }), Zd.createElement(Ed, hd({
              option: Cd,
              isActive: gd,
              key: "symbol-".concat(kd)
            }, Kd)))
          }))
        }
      }, {
        key: "renderSymbolsWithAnimation",
        value: function() {
          var dd = this,
            Jd = this.props,
            kd = Jd.points,
            pd = Jd.isAnimationActive,
            Nd = Jd.animationBegin,
            Wd = Jd.animationDuration,
            Pd = Jd.animationEasing,
            Cd = Jd.animationId,
            Kd = this.state.prevPoints;
          return Zd.createElement(gd.d, {
            ZQ: Nd,
            duration: Wd,
            isActive: pd,
            easing: Pd,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "pie-".concat(Cd),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(Jd) {
            var pd = Jd.t,
              Nd = kd.map((function(dd, Jd) {
                var kd = Kd && Kd[Jd];
                if (kd) {
                  var Nd = (0, jd.s)(kd.cx, dd.cx),
                    Wd = (0, jd.s)(kd.cy, dd.cy),
                    Pd = (0, jd.s)(kd.size, dd.size);
                  return ud(ud({}, dd), {}, {
                    cx: Nd(pd),
                    cy: Wd(pd),
                    size: Pd(pd)
                  })
                }
                var Zd = (0, jd.s)(0, dd.size);
                return ud(ud({}, dd), {}, {
                  size: Zd(pd)
                })
              }));
            return Zd.createElement(ed.e, null, dd.renderSymbolsStatically(Nd))
          }))
        }
      }, {
        key: "renderSymbols",
        value: function() {
          var dd = this.props,
            Jd = dd.points,
            kd = dd.isAnimationActive,
            pd = this.state.prevPoints;
          return !(kd && Jd && Jd.length) || pd && ld()(pd, Jd) ? this.renderSymbolsStatically(Jd) : this.renderSymbolsWithAnimation()
        }
      }, {
        key: "renderErrorBar",
        value: function() {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var dd = this.props,
            Jd = dd.points,
            kd = dd.xAxis,
            pd = dd.yAxis,
            Nd = dd.children,
            Wd = (0, Id.i)(Nd, bd.b);
          return Wd ? Wd.map((function(dd, Nd) {
            var Wd = dd.props,
              Pd = Wd.direction,
              gd = Wd.dataKey;
            return Zd.cloneElement(dd, {
              key: "".concat(Pd, "-").concat(gd, "-").concat(Jd[Nd]),
              data: Jd,
              xAxis: kd,
              yAxis: pd,
              layout: "x" === Pd ? "vertical" : "horizontal",
              dataPointFormatter: function(dd, Jd) {
                return {
                  x: dd.cx,
                  y: dd.cy,
                  value: "x" === Pd ? +dd.node.x : +dd.node.y,
                  errorVal: (0, Xd.U)(dd, Jd)
                }
              }
            })
          })) : null
        }
      }, {
        key: "renderLine",
        value: function() {
          var dd, Jd, kd = this.props,
            pd = kd.points,
            Nd = kd.line,
            Wd = kd.lineType,
            Pd = kd.lineJointType,
            gd = (0, Id.e)(this.props, !1),
            Cd = (0, Id.e)(Nd, !1);
          if ("joint" === Wd) dd = pd.map((function(dd) {
            return {
              x: dd.cx,
              y: dd.cy
            }
          }));
          else if ("fitting" === Wd) {
            var Kd = (0, jd.k)(pd),
              od = Kd.xmin,
              ld = Kd.xmax,
              Qd = Kd.a,
              Od = Kd.b,
              Rd = function(dd) {
                return Qd * dd + Od
              };
            dd = [{
              x: od,
              y: Rd(od)
            }, {
              x: ld,
              y: Rd(ld)
            }]
          }
          var Gd = ud(ud(ud({}, gd), {}, {
            fill: "none",
            stroke: gd && gd.fill
          }, Cd), {}, {
            points: dd
          });
          return Jd = Zd.isValidElement(Nd) ? Zd.cloneElement(Nd, Gd) : Ld()(Nd) ? Nd(Gd) : Zd.createElement(md.e, hd({}, Gd, {
            type: Pd
          })), Zd.createElement(ed.e, {
            className: "recharts-scatter-line",
            key: "recharts-scatter-line"
          }, Jd)
        }
      }, {
        key: "render",
        value: function() {
          var dd = this.props,
            Jd = dd.hide,
            kd = dd.points,
            pd = dd.line,
            Nd = dd.className,
            Wd = dd.xAxis,
            Pd = dd.yAxis,
            gd = dd.left,
            Cd = dd.top,
            od = dd.width,
            ld = dd.height,
            Qd = dd.id,
            Ld = dd.isAnimationActive;
          if (Jd || !kd || !kd.length) return null;
          var Id = this.state.isAnimationFinished,
            Gd = (0, Od.b)("recharts-scatter", Nd),
            vd = Wd && Wd.allowDataOverflow,
            xd = Pd && Pd.allowDataOverflow,
            qd = vd || xd,
            Bd = Kd()(Qd) ? this.id : Qd;
          return Zd.createElement(ed.e, {
            className: Gd,
            clipPath: qd ? "url(#clipPath-".concat(Bd, ")") : null
          }, vd || xd ? Zd.createElement("defs", null, Zd.createElement("clipPath", {
            id: "clipPath-".concat(Bd)
          }, Zd.createElement("rect", {
            x: vd ? gd : gd - od / 2,
            y: xd ? Cd : Cd - ld / 2,
            width: vd ? od : 2 * od,
            height: xd ? ld : 2 * ld
          }))) : null, pd && this.renderLine(), this.renderErrorBar(), Zd.createElement(ed.e, {
            key: "recharts-scatter-symbols"
          }, this.renderSymbols()), (!Ld || Id) && Rd.e.renderCallByParent(this.props, kd))
        }
      }], Nd = [{
        key: "getDerivedStateFromProps",
        value: function(dd, Jd) {
          return dd.animationId !== Jd.prevAnimationId ? {
            prevAnimationId: dd.animationId,
            curPoints: dd.points,
            prevPoints: Jd.curPoints
          } : dd.points !== Jd.curPoints ? {
            curPoints: dd.points
          } : null
        }
      }], pd && td(kd.prototype, pd), Nd && td(kd, Nd), Object.defineProperty(kd, "prototype", {
        writable: !1
      }), kd;
      var kd, pd, Nd
    }(Zd.PureComponent);
    Ad(JJ, "displayName", "Scatter"), Ad(JJ, "defaultProps", {
      xAxisId: 0,
      yAxisId: 0,
      zAxisId: 0,
      legendType: "circle",
      lineType: "joint",
      lineJointType: "linear",
      data: [],
      shape: "circle",
      hide: !1,
      isAnimationActive: !Gd.b.isSsr,
      animationBegin: 0,
      animationDuration: 400,
      animationEasing: "linear"
    }), Ad(JJ, "getComposedData", (function(dd) {
      var Jd = dd.xAxis,
        kd = dd.yAxis,
        pd = dd.zAxis,
        Nd = dd.item,
        Wd = dd.displayedData,
        Pd = dd.xAxisTicks,
        Zd = dd.yAxisTicks,
        gd = dd.offset,
        Cd = Nd.props.tooltipType,
        od = (0, Id.i)(Nd.props.children, Sd.c),
        ld = Kd()(Jd.dataKey) ? Nd.props.dataKey : Jd.dataKey,
        Qd = Kd()(kd.dataKey) ? Nd.props.dataKey : kd.dataKey,
        Ld = pd && pd.dataKey,
        Od = pd ? pd.range : Yd.defaultProps.range,
        ed = Od && Od[0],
        Rd = Jd.scale.bandwidth ? Jd.scale.bandwidth() : 0,
        Gd = kd.scale.bandwidth ? kd.scale.bandwidth() : 0,
        vd = Wd.map((function(dd, Wd) {
          var gd = (0, Xd.U)(dd, ld),
            Od = (0, Xd.U)(dd, Qd),
            Id = !Kd()(Ld) && (0, Xd.U)(dd, Ld) || "-",
            vd = [{
              name: Kd()(Jd.dataKey) ? Nd.props.name : Jd.name || Jd.dataKey,
              unit: Jd.unit || "",
              value: gd,
              payload: dd,
              dataKey: ld,
              type: Cd
            }, {
              name: Kd()(kd.dataKey) ? Nd.props.name : kd.name || kd.dataKey,
              unit: kd.unit || "",
              value: Od,
              payload: dd,
              dataKey: Qd,
              type: Cd
            }];
          "-" !== Id && vd.push({
            name: pd.name || pd.dataKey,
            unit: pd.unit || "",
            value: Id,
            payload: dd,
            dataKey: Ld,
            type: Cd
          });
          var xd = (0, Xd.x)({
              axis: Jd,
              ticks: Pd,
              bandSize: Rd,
              entry: dd,
              index: Wd,
              dataKey: ld
            }),
            qd = (0, Xd.x)({
              axis: kd,
              ticks: Zd,
              bandSize: Gd,
              entry: dd,
              index: Wd,
              dataKey: Qd
            }),
            Bd = "-" !== Id ? pd.scale(Id) : ed,
            sd = Math.sqrt(Math.max(Bd, 0) / Math.PI);
          return ud(ud({}, dd), {}, {
            cx: xd,
            cy: qd,
            x: xd - sd,
            y: qd - sd,
            xAxis: Jd,
            yAxis: kd,
            zAxis: pd,
            width: 2 * sd,
            height: 2 * sd,
            size: Bd,
            node: {
              x: gd,
              y: Od,
              z: Id
            },
            tooltipPayload: vd,
            tooltipPosition: {
              x: xd,
              y: qd
            },
            payload: dd
          }, od && od[Wd] && od[Wd].props)
        }));
      return ud({
        points: vd
      }, gd)
    }));
    var kJ = kd(6254),
      pJ = kd(6263),
      NJ = kd(6117),
      WJ = (0, pd.e)({
        chartName: "ComposedChart",
        GraphicalChild: [Pd.d, Nd.d, Wd.c, JJ],
        axisComponents: [{
          axisType: "xAxis",
          AxisComp: kJ.b
        }, {
          axisType: "yAxis",
          AxisComp: pJ.b
        }, {
          axisType: "zAxis",
          AxisComp: Yd
        }],
        formatAxisMap: NJ.f
      })
  },
  5332: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Tk
    });
    var pd = kd(56),
      Nd = kd(5289),
      Wd = kd.n(Nd),
      Pd = kd(5131),
      Zd = kd.n(Pd),
      gd = kd(5336),
      Cd = kd.n(gd),
      Kd = kd(5064),
      od = kd.n(Kd),
      ld = kd(5388),
      Qd = kd.n(ld),
      Ld = kd(4938),
      Od = kd.n(Ld),
      ed = kd(4935),
      Rd = kd(5836),
      Id = kd(5841),
      Gd = kd(5843),
      vd = kd(5850),
      xd = kd(5911),
      qd = kd(5978),
      Bd = kd(5987),
      sd = kd(5297),
      ad = kd(6021),
      Md = kd(6001),
      Fd = kd(6019),
      Yd = kd(5029);

    function md(dd) {
      return md = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(dd) {
        return typeof dd
      } : function(dd) {
        return dd && "function" == typeof Symbol && dd.constructor === Symbol && dd !== Symbol.prototype ? "symbol" : typeof dd
      }, md(dd)
    }

    function bd(dd, Jd) {
      var kd = Object.keys(dd);
      if (Object.getOwnPropertySymbols) {
        var pd = Object.getOwnPropertySymbols(dd);
        Jd && (pd = pd.filter((function(Jd) {
          return Object.getOwnPropertyDescriptor(dd, Jd).enumerable
        }))), kd.push.apply(kd, pd)
      }
      return kd
    }

    function Sd(dd) {
      for (var Jd = 1; Jd < arguments.length; Jd++) {
        var kd = null != arguments[Jd] ? arguments[Jd] : {};
        Jd % 2 ? bd(Object(kd), !0).forEach((function(Jd) {
          jd(dd, Jd, kd[Jd])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(dd, Object.getOwnPropertyDescriptors(kd)) : bd(Object(kd)).forEach((function(Jd) {
          Object.defineProperty(dd, Jd, Object.getOwnPropertyDescriptor(kd, Jd))
        }))
      }
      return dd
    }

    function jd(dd, Jd, kd) {
      return (Jd = function(dd) {
        var Jd = function(dd, Jd) {
          if ("object" != md(dd) || !dd) return dd;
          var kd = dd[Symbol.toPrimitive];
          if (void 0 !== kd) {
            var pd = kd.call(dd, Jd || "default");
            if ("object" != md(pd)) return pd;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === Jd ? String : Number)(dd)
        }(dd, "string");
        return "symbol" == md(Jd) ? Jd : Jd + ""
      }(Jd)) in dd ? Object.defineProperty(dd, Jd, {
        value: kd,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : dd[Jd] = kd, dd
    }
    var Xd = ["Webkit", "Moz", "O", "ms"];

    function fd(dd) {
      return fd = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(dd) {
        return typeof dd
      } : function(dd) {
        return dd && "function" == typeof Symbol && dd.constructor === Symbol && dd !== Symbol.prototype ? "symbol" : typeof dd
      }, fd(dd)
    }

    function nd() {
      return nd = Object.assign ? Object.assign.bind() : function(dd) {
        for (var Jd = 1; Jd < arguments.length; Jd++) {
          var kd = arguments[Jd];
          for (var pd in kd) Object.prototype.hasOwnProperty.call(kd, pd) && (dd[pd] = kd[pd])
        }
        return dd
      }, nd.apply(this, arguments)
    }

    function Ud(dd, Jd) {
      var kd = Object.keys(dd);
      if (Object.getOwnPropertySymbols) {
        var pd = Object.getOwnPropertySymbols(dd);
        Jd && (pd = pd.filter((function(Jd) {
          return Object.getOwnPropertyDescriptor(dd, Jd).enumerable
        }))), kd.push.apply(kd, pd)
      }
      return kd
    }

    function yd(dd) {
      for (var Jd = 1; Jd < arguments.length; Jd++) {
        var kd = null != arguments[Jd] ? arguments[Jd] : {};
        Jd % 2 ? Ud(Object(kd), !0).forEach((function(Jd) {
          rd(dd, Jd, kd[Jd])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(dd, Object.getOwnPropertyDescriptors(kd)) : Ud(Object(kd)).forEach((function(Jd) {
          Object.defineProperty(dd, Jd, Object.getOwnPropertyDescriptor(kd, Jd))
        }))
      }
      return dd
    }

    function Dd(dd, Jd) {
      for (var kd = 0; kd < Jd.length; kd++) {
        var pd = Jd[kd];
        pd.enumerable = pd.enumerable || !1, pd.configurable = !0, "value" in pd && (pd.writable = !0), Object.defineProperty(dd, ud(pd.key), pd)
      }
    }

    function Td(dd, Jd, kd) {
      return Jd = cd(Jd),
        function(dd, Jd) {
          if (Jd && ("object" === fd(Jd) || "function" === typeof Jd)) return Jd;
          if (void 0 !== Jd) throw new TypeError("Derived constructors may only return object or undefined");
          return function(dd) {
            if (void 0 === dd) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return dd
          }(dd)
        }(dd, Ed() ? Reflect.construct(Jd, kd || [], cd(dd).constructor) : Jd.apply(dd, kd))
    }

    function Ed() {
      try {
        var dd = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (dd) {}
      return (Ed = function() {
        return !!dd
      })()
    }

    function cd(dd) {
      return cd = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(dd) {
        return dd.__proto__ || Object.getPrototypeOf(dd)
      }, cd(dd)
    }

    function hd(dd, Jd) {
      return hd = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(dd, Jd) {
        return dd.__proto__ = Jd, dd
      }, hd(dd, Jd)
    }

    function rd(dd, Jd, kd) {
      return (Jd = ud(Jd)) in dd ? Object.defineProperty(dd, Jd, {
        value: kd,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : dd[Jd] = kd, dd
    }

    function ud(dd) {
      var Jd = function(dd, Jd) {
        if ("object" != fd(dd) || !dd) return dd;
        var kd = dd[Symbol.toPrimitive];
        if (void 0 !== kd) {
          var pd = kd.call(dd, Jd || "default");
          if ("object" != fd(pd)) return pd;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Jd ? String : Number)(dd)
      }(dd, "string");
      return "symbol" == fd(Jd) ? Jd : Jd + ""
    }
    var td = function(dd) {
        return dd.changedTouches && !!dd.changedTouches.length
      },
      Vd = function(dd) {
        function Jd(dd) {
          var kd;
          return function(dd, Jd) {
            if (!(dd instanceof Jd)) throw new TypeError("Cannot call a class as a function")
          }(this, Jd), rd(kd = Td(this, Jd, [dd]), "handleDrag", (function(dd) {
            kd.leaveTimer && (clearTimeout(kd.leaveTimer), kd.leaveTimer = null), kd.state.isTravellerMoving ? kd.handleTravellerMove(dd) : kd.state.isSlideMoving && kd.handleSlideDrag(dd)
          })), rd(kd, "handleTouchMove", (function(dd) {
            null != dd.changedTouches && dd.changedTouches.length > 0 && kd.handleDrag(dd.changedTouches[0])
          })), rd(kd, "handleDragEnd", (function() {
            kd.setState({
              isTravellerMoving: !1,
              isSlideMoving: !1
            }, (function() {
              var dd = kd.props,
                Jd = dd.endIndex,
                pd = dd.onDragEnd,
                Nd = dd.startIndex;
              null === pd || void 0 === pd || pd({
                endIndex: Jd,
                startIndex: Nd
              })
            })), kd.detachDragEndListener()
          })), rd(kd, "handleLeaveWrapper", (function() {
            (kd.state.isTravellerMoving || kd.state.isSlideMoving) && (kd.leaveTimer = window.setTimeout(kd.handleDragEnd, kd.props.leaveTimeOut))
          })), rd(kd, "handleEnterSlideOrTraveller", (function() {
            kd.setState({
              isTextActive: !0
            })
          })), rd(kd, "handleLeaveSlideOrTraveller", (function() {
            kd.setState({
              isTextActive: !1
            })
          })), rd(kd, "handleSlideDragStart", (function(dd) {
            var Jd = td(dd) ? dd.changedTouches[0] : dd;
            kd.setState({
              isTravellerMoving: !1,
              isSlideMoving: !0,
              slideMoveStartX: Jd.pageX
            }), kd.attachDragEndListener()
          })), kd.travellerDragStartHandlers = {
            startX: kd.handleTravellerDragStart.bind(kd, "startX"),
            endX: kd.handleTravellerDragStart.bind(kd, "endX")
          }, kd.state = {}, kd
        }
        return function(dd, Jd) {
          if ("function" !== typeof Jd && null !== Jd) throw new TypeError("Super expression must either be null or a function");
          dd.prototype = Object.create(Jd && Jd.prototype, {
            constructor: {
              value: dd,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(dd, "prototype", {
            writable: !1
          }), Jd && hd(dd, Jd)
        }(Jd, dd), kd = Jd, Nd = [{
          key: "componentWillUnmount",
          value: function() {
            this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.detachDragEndListener()
          }
        }, {
          key: "getIndex",
          value: function(dd) {
            var kd = dd.startX,
              pd = dd.endX,
              Nd = this.state.scaleValues,
              Wd = this.props,
              Pd = Wd.gap,
              Zd = Wd.data.length - 1,
              gd = Math.min(kd, pd),
              Cd = Math.max(kd, pd),
              Kd = Jd.getIndexInRange(Nd, gd),
              od = Jd.getIndexInRange(Nd, Cd);
            return {
              startIndex: Kd - Kd % Pd,
              endIndex: od === Zd ? Zd : od - od % Pd
            }
          }
        }, {
          key: "getTextOfTick",
          value: function(dd) {
            var Jd = this.props,
              kd = Jd.data,
              pd = Jd.tickFormatter,
              Nd = Jd.dataKey,
              Wd = (0, Fd.U)(kd[dd], Nd, dd);
            return Zd()(pd) ? pd(Wd, dd) : Wd
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
          value: function(dd) {
            var Jd = this.state,
              kd = Jd.slideMoveStartX,
              pd = Jd.startX,
              Nd = Jd.endX,
              Wd = this.props,
              Pd = Wd.x,
              Zd = Wd.width,
              gd = Wd.travellerWidth,
              Cd = Wd.startIndex,
              Kd = Wd.endIndex,
              od = Wd.onChange,
              ld = dd.pageX - kd;
            ld > 0 ? ld = Math.min(ld, Pd + Zd - gd - Nd, Pd + Zd - gd - pd) : ld < 0 && (ld = Math.max(ld, Pd - pd, Pd - Nd));
            var Qd = this.getIndex({
              startX: pd + ld,
              endX: Nd + ld
            });
            Qd.startIndex === Cd && Qd.endIndex === Kd || !od || od(Qd), this.setState({
              startX: pd + ld,
              endX: Nd + ld,
              slideMoveStartX: dd.pageX
            })
          }
        }, {
          key: "handleTravellerDragStart",
          value: function(dd, Jd) {
            var kd = td(Jd) ? Jd.changedTouches[0] : Jd;
            this.setState({
              isSlideMoving: !1,
              isTravellerMoving: !0,
              movingTravellerId: dd,
              brushMoveStartX: kd.pageX
            }), this.attachDragEndListener()
          }
        }, {
          key: "handleTravellerMove",
          value: function(dd) {
            var Jd = this.state,
              kd = Jd.brushMoveStartX,
              pd = Jd.movingTravellerId,
              Nd = Jd.endX,
              Wd = Jd.startX,
              Pd = this.state[pd],
              Zd = this.props,
              gd = Zd.x,
              Cd = Zd.width,
              Kd = Zd.travellerWidth,
              od = Zd.onChange,
              ld = Zd.gap,
              Qd = Zd.data,
              Ld = {
                startX: this.state.startX,
                endX: this.state.endX
              },
              Od = dd.pageX - kd;
            Od > 0 ? Od = Math.min(Od, gd + Cd - Kd - Pd) : Od < 0 && (Od = Math.max(Od, gd - Pd)), Ld[pd] = Pd + Od;
            var ed = this.getIndex(Ld),
              Rd = ed.startIndex,
              Id = ed.endIndex;
            this.setState(rd(rd({}, pd, Pd + Od), "brushMoveStartX", dd.pageX), (function() {
              od && function() {
                var dd = Qd.length - 1;
                return "startX" === pd && (Nd > Wd ? Rd % ld === 0 : Id % ld === 0) || Nd < Wd && Id === dd || "endX" === pd && (Nd > Wd ? Id % ld === 0 : Rd % ld === 0) || Nd > Wd && Id === dd
              }() && od(ed)
            }))
          }
        }, {
          key: "handleTravellerMoveKeyboard",
          value: function(dd, Jd) {
            var kd = this,
              pd = this.state,
              Nd = pd.scaleValues,
              Wd = pd.startX,
              Pd = pd.endX,
              Zd = this.state[Jd],
              gd = Nd.indexOf(Zd);
            if (-1 !== gd) {
              var Cd = gd + dd;
              if (!(-1 === Cd || Cd >= Nd.length)) {
                var Kd = Nd[Cd];
                "startX" === Jd && Kd >= Pd || "endX" === Jd && Kd <= Wd || this.setState(rd({}, Jd, Kd), (function() {
                  kd.props.onChange(kd.getIndex({
                    startX: kd.state.startX,
                    endX: kd.state.endX
                  }))
                }))
              }
            }
          }
        }, {
          key: "renderBackground",
          value: function() {
            var dd = this.props,
              Jd = dd.x,
              kd = dd.y,
              Nd = dd.width,
              Wd = dd.height,
              Pd = dd.fill,
              Zd = dd.stroke;
            return pd.createElement("rect", {
              stroke: Zd,
              fill: Pd,
              x: Jd,
              y: kd,
              width: Nd,
              height: Wd
            })
          }
        }, {
          key: "renderPanorama",
          value: function() {
            var dd = this.props,
              Jd = dd.x,
              kd = dd.y,
              Nd = dd.width,
              Wd = dd.height,
              Pd = dd.data,
              Zd = dd.children,
              gd = dd.padding,
              Cd = pd.Children.only(Zd);
            return Cd ? pd.cloneElement(Cd, {
              x: Jd,
              y: kd,
              width: Nd,
              height: Wd,
              margin: gd,
              compact: !0,
              data: Pd
            }) : null
          }
        }, {
          key: "renderTravellerLayer",
          value: function(dd, kd) {
            var Nd, Wd, Pd = this,
              Zd = this.props,
              gd = Zd.y,
              Cd = Zd.travellerWidth,
              Kd = Zd.height,
              od = Zd.traveller,
              ld = Zd.ariaLabel,
              Qd = Zd.data,
              Ld = Zd.startIndex,
              Od = Zd.endIndex,
              ed = Math.max(dd, this.props.x),
              Rd = yd(yd({}, (0, sd.e)(this.props, !1)), {}, {
                x: ed,
                y: gd,
                width: Cd,
                height: Kd
              }),
              Id = ld || "Min value: ".concat(null === (Nd = Qd[Ld]) || void 0 === Nd ? void 0 : Nd.name, ", Max value: ").concat(null === (Wd = Qd[Od]) || void 0 === Wd ? void 0 : Wd.name);
            return pd.createElement(Gd.e, {
              tabIndex: 0,
              role: "slider",
              "aria-label": Id,
              "aria-valuenow": dd,
              className: "recharts-brush-traveller",
              onMouseEnter: this.handleEnterSlideOrTraveller,
              onMouseLeave: this.handleLeaveSlideOrTraveller,
              onMouseDown: this.travellerDragStartHandlers[kd],
              onTouchStart: this.travellerDragStartHandlers[kd],
              onKeyDown: function(dd) {
                ["ArrowLeft", "ArrowRight"].includes(dd.key) && (dd.preventDefault(), dd.stopPropagation(), Pd.handleTravellerMoveKeyboard("ArrowRight" === dd.key ? 1 : -1, kd))
              },
              onFocus: function() {
                Pd.setState({
                  isTravellerFocused: !0
                })
              },
              onBlur: function() {
                Pd.setState({
                  isTravellerFocused: !1
                })
              },
              style: {
                cursor: "col-resize"
              }
            }, Jd.renderTraveller(od, Rd))
          }
        }, {
          key: "renderSlide",
          value: function(dd, Jd) {
            var kd = this.props,
              Nd = kd.y,
              Wd = kd.height,
              Pd = kd.stroke,
              Zd = kd.travellerWidth,
              gd = Math.min(dd, Jd) + Zd,
              Cd = Math.max(Math.abs(Jd - dd) - Zd, 0);
            return pd.createElement("rect", {
              className: "recharts-brush-slide",
              onMouseEnter: this.handleEnterSlideOrTraveller,
              onMouseLeave: this.handleLeaveSlideOrTraveller,
              onMouseDown: this.handleSlideDragStart,
              onTouchStart: this.handleSlideDragStart,
              style: {
                cursor: "move"
              },
              stroke: "none",
              fill: Pd,
              fillOpacity: .2,
              x: gd,
              y: Nd,
              width: Cd,
              height: Wd
            })
          }
        }, {
          key: "renderText",
          value: function() {
            var dd = this.props,
              Jd = dd.startIndex,
              kd = dd.endIndex,
              Nd = dd.y,
              Wd = dd.height,
              Pd = dd.travellerWidth,
              Zd = dd.stroke,
              gd = this.state,
              Cd = gd.startX,
              Kd = gd.endX,
              od = {
                pointerEvents: "none",
                fill: Zd
              };
            return pd.createElement(Gd.e, {
              className: "recharts-brush-texts"
            }, pd.createElement(Md.c, nd({
              textAnchor: "end",
              verticalAnchor: "middle",
              x: Math.min(Cd, Kd) - 5,
              y: Nd + Wd / 2
            }, od), this.getTextOfTick(Jd)), pd.createElement(Md.c, nd({
              textAnchor: "start",
              verticalAnchor: "middle",
              x: Math.max(Cd, Kd) + Pd + 5,
              y: Nd + Wd / 2
            }, od), this.getTextOfTick(kd)))
          }
        }, {
          key: "render",
          value: function() {
            var dd = this.props,
              Jd = dd.data,
              kd = dd.className,
              Nd = dd.children,
              Wd = dd.x,
              Pd = dd.y,
              Zd = dd.width,
              gd = dd.height,
              Cd = dd.alwaysShowText,
              Kd = this.state,
              od = Kd.startX,
              ld = Kd.endX,
              Qd = Kd.isTextActive,
              Ld = Kd.isSlideMoving,
              Od = Kd.isTravellerMoving,
              Rd = Kd.isTravellerFocused;
            if (!Jd || !Jd.length || !(0, Yd.B)(Wd) || !(0, Yd.B)(Pd) || !(0, Yd.B)(Zd) || !(0, Yd.B)(gd) || Zd <= 0 || gd <= 0) return null;
            var Id = (0, ed.b)("recharts-brush", kd),
              vd = 1 === pd.Children.count(Nd),
              xd = function(dd, Jd) {
                if (!dd) return null;
                var kd = dd.replace(/(\w)/, (function(dd) {
                    return dd.toUpperCase()
                  })),
                  pd = Xd.reduce((function(dd, pd) {
                    return Sd(Sd({}, dd), {}, jd({}, pd + kd, Jd))
                  }), {});
                return pd[dd] = Jd, pd
              }("userSelect", "none");
            return pd.createElement(Gd.e, {
              className: Id,
              onMouseLeave: this.handleLeaveWrapper,
              onTouchMove: this.handleTouchMove,
              style: xd
            }, this.renderBackground(), vd && this.renderPanorama(), this.renderSlide(od, ld), this.renderTravellerLayer(od, "startX"), this.renderTravellerLayer(ld, "endX"), (Qd || Ld || Od || Rd || Cd) && this.renderText())
          }
        }], Wd = [{
          key: "renderDefaultTraveller",
          value: function(dd) {
            var Jd = dd.x,
              kd = dd.y,
              Nd = dd.width,
              Wd = dd.height,
              Pd = dd.stroke,
              Zd = Math.floor(kd + Wd / 2) - 1;
            return pd.createElement(pd.Fragment, null, pd.createElement("rect", {
              x: Jd,
              y: kd,
              width: Nd,
              height: Wd,
              fill: Pd,
              stroke: "none"
            }), pd.createElement("line", {
              x1: Jd + 1,
              y1: Zd,
              x2: Jd + Nd - 1,
              y2: Zd,
              fill: "none",
              stroke: "#fff"
            }), pd.createElement("line", {
              x1: Jd + 1,
              y1: Zd + 2,
              x2: Jd + Nd - 1,
              y2: Zd + 2,
              fill: "none",
              stroke: "#fff"
            }))
          }
        }, {
          key: "renderTraveller",
          value: function(dd, kd) {
            return pd.isValidElement(dd) ? pd.cloneElement(dd, kd) : Zd()(dd) ? dd(kd) : Jd.renderDefaultTraveller(kd)
          }
        }, {
          key: "getDerivedStateFromProps",
          value: function(dd, Jd) {
            var kd = dd.data,
              pd = dd.width,
              Nd = dd.x,
              Wd = dd.travellerWidth,
              Pd = dd.updateId,
              Zd = dd.startIndex,
              gd = dd.endIndex;
            if (kd !== Jd.prevData || Pd !== Jd.prevUpdateId) return yd({
              prevData: kd,
              prevTravellerWidth: Wd,
              prevUpdateId: Pd,
              prevX: Nd,
              prevWidth: pd
            }, kd && kd.length ? function(dd) {
              var Jd = dd.data,
                kd = dd.startIndex,
                pd = dd.endIndex,
                Nd = dd.x,
                Wd = dd.width,
                Pd = dd.travellerWidth;
              if (!Jd || !Jd.length) return {};
              var Zd = Jd.length,
                gd = (0, ad.g)().domain(Cd()(0, Zd)).range([Nd, Nd + Wd - Pd]),
                Kd = gd.domain().map((function(dd) {
                  return gd(dd)
                }));
              return {
                isTextActive: !1,
                isSlideMoving: !1,
                isTravellerMoving: !1,
                isTravellerFocused: !1,
                startX: gd(kd),
                endX: gd(pd),
                scale: gd,
                scaleValues: Kd
              }
            }({
              data: kd,
              width: pd,
              x: Nd,
              travellerWidth: Wd,
              startIndex: Zd,
              endIndex: gd
            }) : {
              scale: null,
              scaleValues: null
            });
            if (Jd.scale && (pd !== Jd.prevWidth || Nd !== Jd.prevX || Wd !== Jd.prevTravellerWidth)) {
              Jd.scale.range([Nd, Nd + pd - Wd]);
              var Kd = Jd.scale.domain().map((function(dd) {
                return Jd.scale(dd)
              }));
              return {
                prevData: kd,
                prevTravellerWidth: Wd,
                prevUpdateId: Pd,
                prevX: Nd,
                prevWidth: pd,
                startX: Jd.scale(dd.startIndex),
                endX: Jd.scale(dd.endIndex),
                scaleValues: Kd
              }
            }
            return null
          }
        }, {
          key: "getIndexInRange",
          value: function(dd, Jd) {
            for (var kd = 0, pd = dd.length - 1; pd - kd > 1;) {
              var Nd = Math.floor((kd + pd) / 2);
              dd[Nd] > Jd ? pd = Nd : kd = Nd
            }
            return Jd >= dd[pd] ? pd : kd
          }
        }], Nd && Dd(kd.prototype, Nd), Wd && Dd(kd, Wd), Object.defineProperty(kd, "prototype", {
          writable: !1
        }), kd;
        var kd, Nd, Wd
      }(pd.PureComponent);
    rd(Vd, "displayName", "Brush"), rd(Vd, "defaultProps", {
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
    var zd = kd(6010),
      Hd = kd(6097),
      wd = kd(6107),
      Ad = kd(6113),
      dJ = kd(6117),
      JJ = kd(5295);

    function kJ() {
      return kJ = Object.assign ? Object.assign.bind() : function(dd) {
        for (var Jd = 1; Jd < arguments.length; Jd++) {
          var kd = arguments[Jd];
          for (var pd in kd) Object.prototype.hasOwnProperty.call(kd, pd) && (dd[pd] = kd[pd])
        }
        return dd
      }, kJ.apply(this, arguments)
    }

    function pJ(dd) {
      return pJ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(dd) {
        return typeof dd
      } : function(dd) {
        return dd && "function" == typeof Symbol && dd.constructor === Symbol && dd !== Symbol.prototype ? "symbol" : typeof dd
      }, pJ(dd)
    }

    function NJ(dd, Jd) {
      var kd = Object.keys(dd);
      if (Object.getOwnPropertySymbols) {
        var pd = Object.getOwnPropertySymbols(dd);
        Jd && (pd = pd.filter((function(Jd) {
          return Object.getOwnPropertyDescriptor(dd, Jd).enumerable
        }))), kd.push.apply(kd, pd)
      }
      return kd
    }

    function WJ(dd) {
      for (var Jd = 1; Jd < arguments.length; Jd++) {
        var kd = null != arguments[Jd] ? arguments[Jd] : {};
        Jd % 2 ? NJ(Object(kd), !0).forEach((function(Jd) {
          oJ(dd, Jd, kd[Jd])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(dd, Object.getOwnPropertyDescriptors(kd)) : NJ(Object(kd)).forEach((function(Jd) {
          Object.defineProperty(dd, Jd, Object.getOwnPropertyDescriptor(kd, Jd))
        }))
      }
      return dd
    }

    function PJ(dd, Jd) {
      for (var kd = 0; kd < Jd.length; kd++) {
        var pd = Jd[kd];
        pd.enumerable = pd.enumerable || !1, pd.configurable = !0, "value" in pd && (pd.writable = !0), Object.defineProperty(dd, lJ(pd.key), pd)
      }
    }

    function ZJ(dd, Jd, kd) {
      return Jd = CJ(Jd),
        function(dd, Jd) {
          if (Jd && ("object" === pJ(Jd) || "function" === typeof Jd)) return Jd;
          if (void 0 !== Jd) throw new TypeError("Derived constructors may only return object or undefined");
          return function(dd) {
            if (void 0 === dd) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return dd
          }(dd)
        }(dd, gJ() ? Reflect.construct(Jd, kd || [], CJ(dd).constructor) : Jd.apply(dd, kd))
    }

    function gJ() {
      try {
        var dd = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (dd) {}
      return (gJ = function() {
        return !!dd
      })()
    }

    function CJ(dd) {
      return CJ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(dd) {
        return dd.__proto__ || Object.getPrototypeOf(dd)
      }, CJ(dd)
    }

    function KJ(dd, Jd) {
      return KJ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(dd, Jd) {
        return dd.__proto__ = Jd, dd
      }, KJ(dd, Jd)
    }

    function oJ(dd, Jd, kd) {
      return (Jd = lJ(Jd)) in dd ? Object.defineProperty(dd, Jd, {
        value: kd,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : dd[Jd] = kd, dd
    }

    function lJ(dd) {
      var Jd = function(dd, Jd) {
        if ("object" != pJ(dd) || !dd) return dd;
        var kd = dd[Symbol.toPrimitive];
        if (void 0 !== kd) {
          var pd = kd.call(dd, Jd || "default");
          if ("object" != pJ(pd)) return pd;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Jd ? String : Number)(dd)
      }(dd, "string");
      return "symbol" == pJ(Jd) ? Jd : Jd + ""
    }
    var QJ = function(dd) {
      function Jd() {
        return function(dd, Jd) {
          if (!(dd instanceof Jd)) throw new TypeError("Cannot call a class as a function")
        }(this, Jd), ZJ(this, Jd, arguments)
      }
      return function(dd, Jd) {
        if ("function" !== typeof Jd && null !== Jd) throw new TypeError("Super expression must either be null or a function");
        dd.prototype = Object.create(Jd && Jd.prototype, {
          constructor: {
            value: dd,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(dd, "prototype", {
          writable: !1
        }), Jd && KJ(dd, Jd)
      }(Jd, dd), kd = Jd, (Nd = [{
        key: "render",
        value: function() {
          var dd = this.props,
            kd = dd.x,
            Nd = dd.y,
            Wd = dd.r,
            Pd = dd.alwaysShow,
            Zd = dd.clipPathId,
            gd = (0, Yd.z)(kd),
            Cd = (0, Yd.z)(Nd);
          if ((0, JJ.e)(void 0 === Pd, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !gd || !Cd) return null;
          var Kd = function(dd) {
            var Jd = dd.x,
              kd = dd.y,
              pd = dd.xAxis,
              Nd = dd.yAxis,
              Wd = (0, dJ.e)({
                x: pd.scale,
                y: Nd.scale
              }),
              Pd = Wd.apply({
                x: Jd,
                y: kd
              }, {
                bandAware: !0
              });
            return (0, Ad.e)(dd, "discard") && !Wd.isInRange(Pd) ? null : Pd
          }(this.props);
          if (!Kd) return null;
          var od = Kd.x,
            ld = Kd.y,
            Qd = this.props,
            Ld = Qd.shape,
            Od = Qd.className,
            Rd = WJ(WJ({
              clipPath: (0, Ad.e)(this.props, "hidden") ? "url(#".concat(Zd, ")") : void 0
            }, (0, sd.e)(this.props, !0)), {}, {
              cx: od,
              cy: ld
            });
          return pd.createElement(Gd.e, {
            className: (0, ed.b)("recharts-reference-dot", Od)
          }, Jd.renderDot(Ld, Rd), wd.c.renderCallByParent(this.props, {
            x: od - Wd,
            y: ld - Wd,
            width: 2 * Wd,
            height: 2 * Wd
          }))
        }
      }]) && PJ(kd.prototype, Nd), Wd && PJ(kd, Wd), Object.defineProperty(kd, "prototype", {
        writable: !1
      }), kd;
      var kd, Nd, Wd
    }(pd.Component);
    oJ(QJ, "displayName", "ReferenceDot"), oJ(QJ, "defaultProps", {
      isFront: !1,
      ifOverflow: "discard",
      xAxisId: 0,
      yAxisId: 0,
      r: 10,
      fill: "#fff",
      stroke: "#ccc",
      fillOpacity: 1,
      strokeWidth: 1
    }), oJ(QJ, "renderDot", (function(dd, Jd) {
      return pd.isValidElement(dd) ? pd.cloneElement(dd, Jd) : Zd()(dd) ? dd(Jd) : pd.createElement(qd.e, kJ({}, Jd, {
        cx: Jd.cx,
        cy: Jd.cy,
        className: "recharts-reference-dot-dot"
      }))
    }));
    var LJ = kd(6194);

    function OJ() {
      return OJ = Object.assign ? Object.assign.bind() : function(dd) {
        for (var Jd = 1; Jd < arguments.length; Jd++) {
          var kd = arguments[Jd];
          for (var pd in kd) Object.prototype.hasOwnProperty.call(kd, pd) && (dd[pd] = kd[pd])
        }
        return dd
      }, OJ.apply(this, arguments)
    }

    function eJ(dd) {
      return eJ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(dd) {
        return typeof dd
      } : function(dd) {
        return dd && "function" == typeof Symbol && dd.constructor === Symbol && dd !== Symbol.prototype ? "symbol" : typeof dd
      }, eJ(dd)
    }

    function RJ(dd, Jd) {
      var kd = Object.keys(dd);
      if (Object.getOwnPropertySymbols) {
        var pd = Object.getOwnPropertySymbols(dd);
        Jd && (pd = pd.filter((function(Jd) {
          return Object.getOwnPropertyDescriptor(dd, Jd).enumerable
        }))), kd.push.apply(kd, pd)
      }
      return kd
    }

    function IJ(dd) {
      for (var Jd = 1; Jd < arguments.length; Jd++) {
        var kd = null != arguments[Jd] ? arguments[Jd] : {};
        Jd % 2 ? RJ(Object(kd), !0).forEach((function(Jd) {
          sJ(dd, Jd, kd[Jd])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(dd, Object.getOwnPropertyDescriptors(kd)) : RJ(Object(kd)).forEach((function(Jd) {
          Object.defineProperty(dd, Jd, Object.getOwnPropertyDescriptor(kd, Jd))
        }))
      }
      return dd
    }

    function GJ(dd, Jd) {
      for (var kd = 0; kd < Jd.length; kd++) {
        var pd = Jd[kd];
        pd.enumerable = pd.enumerable || !1, pd.configurable = !0, "value" in pd && (pd.writable = !0), Object.defineProperty(dd, iJ(pd.key), pd)
      }
    }

    function vJ(dd, Jd, kd) {
      return Jd = qJ(Jd),
        function(dd, Jd) {
          if (Jd && ("object" === eJ(Jd) || "function" === typeof Jd)) return Jd;
          if (void 0 !== Jd) throw new TypeError("Derived constructors may only return object or undefined");
          return function(dd) {
            if (void 0 === dd) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return dd
          }(dd)
        }(dd, xJ() ? Reflect.construct(Jd, kd || [], qJ(dd).constructor) : Jd.apply(dd, kd))
    }

    function xJ() {
      try {
        var dd = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (dd) {}
      return (xJ = function() {
        return !!dd
      })()
    }

    function qJ(dd) {
      return qJ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(dd) {
        return dd.__proto__ || Object.getPrototypeOf(dd)
      }, qJ(dd)
    }

    function BJ(dd, Jd) {
      return BJ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(dd, Jd) {
        return dd.__proto__ = Jd, dd
      }, BJ(dd, Jd)
    }

    function sJ(dd, Jd, kd) {
      return (Jd = iJ(Jd)) in dd ? Object.defineProperty(dd, Jd, {
        value: kd,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : dd[Jd] = kd, dd
    }

    function iJ(dd) {
      var Jd = function(dd, Jd) {
        if ("object" != eJ(dd) || !dd) return dd;
        var kd = dd[Symbol.toPrimitive];
        if (void 0 !== kd) {
          var pd = kd.call(dd, Jd || "default");
          if ("object" != eJ(pd)) return pd;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Jd ? String : Number)(dd)
      }(dd, "string");
      return "symbol" == eJ(Jd) ? Jd : Jd + ""
    }
    var aJ = function(dd) {
      function Jd() {
        return function(dd, Jd) {
          if (!(dd instanceof Jd)) throw new TypeError("Cannot call a class as a function")
        }(this, Jd), vJ(this, Jd, arguments)
      }
      return function(dd, Jd) {
        if ("function" !== typeof Jd && null !== Jd) throw new TypeError("Super expression must either be null or a function");
        dd.prototype = Object.create(Jd && Jd.prototype, {
          constructor: {
            value: dd,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(dd, "prototype", {
          writable: !1
        }), Jd && BJ(dd, Jd)
      }(Jd, dd), kd = Jd, (Nd = [{
        key: "render",
        value: function() {
          var dd = this.props,
            kd = dd.x1,
            Nd = dd.x2,
            Wd = dd.y1,
            Pd = dd.y2,
            Zd = dd.className,
            gd = dd.alwaysShow,
            Cd = dd.clipPathId;
          (0, JJ.e)(void 0 === gd, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
          var Kd = (0, Yd.z)(kd),
            od = (0, Yd.z)(Nd),
            ld = (0, Yd.z)(Wd),
            Qd = (0, Yd.z)(Pd),
            Ld = this.props.shape;
          if (!Kd && !od && !ld && !Qd && !Ld) return null;
          var Od = function(dd, Jd, kd, pd, Nd) {
            var Wd = Nd.x1,
              Pd = Nd.x2,
              Zd = Nd.y1,
              gd = Nd.y2,
              Cd = Nd.xAxis,
              Kd = Nd.yAxis;
            if (!Cd || !Kd) return null;
            var od = (0, dJ.e)({
                x: Cd.scale,
                y: Kd.scale
              }),
              ld = {
                x: dd ? od.x.apply(Wd, {
                  position: "start"
                }) : od.x.rangeMin,
                y: kd ? od.y.apply(Zd, {
                  position: "start"
                }) : od.y.rangeMin
              },
              Qd = {
                x: Jd ? od.x.apply(Pd, {
                  position: "end"
                }) : od.x.rangeMax,
                y: pd ? od.y.apply(gd, {
                  position: "end"
                }) : od.y.rangeMax
              };
            return !(0, Ad.e)(Nd, "discard") || od.isInRange(ld) && od.isInRange(Qd) ? (0, dJ.j)(ld, Qd) : null
          }(Kd, od, ld, Qd, this.props);
          if (!Od && !Ld) return null;
          var Rd = (0, Ad.e)(this.props, "hidden") ? "url(#".concat(Cd, ")") : void 0;
          return pd.createElement(Gd.e, {
            className: (0, ed.b)("recharts-reference-area", Zd)
          }, Jd.renderRect(Ld, IJ(IJ({
            clipPath: Rd
          }, (0, sd.e)(this.props, !0)), Od)), wd.c.renderCallByParent(this.props, Od))
        }
      }]) && GJ(kd.prototype, Nd), Wd && GJ(kd, Wd), Object.defineProperty(kd, "prototype", {
        writable: !1
      }), kd;
      var kd, Nd, Wd
    }(pd.Component);

    function MJ(dd) {
      return function(dd) {
        if (Array.isArray(dd)) return FJ(dd)
      }(dd) || function(dd) {
        if ("undefined" !== typeof Symbol && null != dd[Symbol.iterator] || null != dd["@@iterator"]) return Array.from(dd)
      }(dd) || function(dd, Jd) {
        if (!dd) return;
        if ("string" === typeof dd) return FJ(dd, Jd);
        var kd = Object.prototype.toString.call(dd).slice(8, -1);
        "Object" === kd && dd.constructor && (kd = dd.constructor.name);
        if ("Map" === kd || "Set" === kd) return Array.from(dd);
        if ("Arguments" === kd || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(kd)) return FJ(dd, Jd)
      }(dd) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function FJ(dd, Jd) {
      (null == Jd || Jd > dd.length) && (Jd = dd.length);
      for (var kd = 0, pd = new Array(Jd); kd < Jd; kd++) pd[kd] = dd[kd];
      return pd
    }
    sJ(aJ, "displayName", "ReferenceArea"), sJ(aJ, "defaultProps", {
      isFront: !1,
      ifOverflow: "discard",
      xAxisId: 0,
      yAxisId: 0,
      r: 10,
      fill: "#ccc",
      fillOpacity: .5,
      stroke: "none",
      strokeWidth: 1
    }), sJ(aJ, "renderRect", (function(dd, Jd) {
      return pd.isValidElement(dd) ? pd.cloneElement(dd, Jd) : Zd()(dd) ? dd(Jd) : pd.createElement(Bd.c, OJ({}, Jd, {
        className: "recharts-reference-area-rect"
      }))
    }));
    var YJ = function(dd, Jd, kd, pd, Nd) {
        var Wd = (0, sd.i)(dd, LJ.b),
          Pd = (0, sd.i)(dd, QJ),
          Zd = [].concat(MJ(Wd), MJ(Pd)),
          gd = (0, sd.i)(dd, aJ),
          Cd = "".concat(pd, "Id"),
          Kd = pd[0],
          od = Jd;
        if (Zd.length && (od = Zd.reduce((function(dd, Jd) {
            if (Jd.props[Cd] === kd && (0, Ad.e)(Jd.props, "extendDomain") && (0, Yd.B)(Jd.props[Kd])) {
              var pd = Jd.props[Kd];
              return [Math.min(dd[0], pd), Math.max(dd[1], pd)]
            }
            return dd
          }), od)), gd.length) {
          var ld = "".concat(Kd, "1"),
            Qd = "".concat(Kd, "2");
          od = gd.reduce((function(dd, Jd) {
            if (Jd.props[Cd] === kd && (0, Ad.e)(Jd.props, "extendDomain") && (0, Yd.B)(Jd.props[ld]) && (0, Yd.B)(Jd.props[Qd])) {
              var pd = Jd.props[ld],
                Nd = Jd.props[Qd];
              return [Math.min(dd[0], pd, Nd), Math.max(dd[1], pd, Nd)]
            }
            return dd
          }), od)
        }
        return Nd && Nd.length && (od = Nd.reduce((function(dd, Jd) {
          return (0, Yd.B)(Jd) ? [Math.min(dd[0], Jd), Math.max(dd[1], Jd)] : dd
        }), od)), od
      },
      mJ = kd(6110),
      bJ = kd(5312),
      SJ = kd(31),
      jJ = new(kd.n(SJ)()),
      XJ = "recharts.syncMouseEvents",
      fJ = kd(5317);

    function nJ(dd) {
      return nJ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(dd) {
        return typeof dd
      } : function(dd) {
        return dd && "function" == typeof Symbol && dd.constructor === Symbol && dd !== Symbol.prototype ? "symbol" : typeof dd
      }, nJ(dd)
    }

    function UJ(dd, Jd) {
      for (var kd = 0; kd < Jd.length; kd++) {
        var pd = Jd[kd];
        pd.enumerable = pd.enumerable || !1, pd.configurable = !0, "value" in pd && (pd.writable = !0), Object.defineProperty(dd, DJ(pd.key), pd)
      }
    }

    function yJ(dd, Jd, kd) {
      return (Jd = DJ(Jd)) in dd ? Object.defineProperty(dd, Jd, {
        value: kd,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : dd[Jd] = kd, dd
    }

    function DJ(dd) {
      var Jd = function(dd, Jd) {
        if ("object" != nJ(dd) || !dd) return dd;
        var kd = dd[Symbol.toPrimitive];
        if (void 0 !== kd) {
          var pd = kd.call(dd, Jd || "default");
          if ("object" != nJ(pd)) return pd;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Jd ? String : Number)(dd)
      }(dd, "string");
      return "symbol" == nJ(Jd) ? Jd : Jd + ""
    }
    var TJ = function() {
      return dd = function dd() {
        ! function(dd, Jd) {
          if (!(dd instanceof Jd)) throw new TypeError("Cannot call a class as a function")
        }(this, dd), yJ(this, "activeIndex", 0), yJ(this, "coordinateList", []), yJ(this, "layout", "horizontal")
      }, (Jd = [{
        key: "setDetails",
        value: function(dd) {
          var Jd, kd = dd.coordinateList,
            pd = void 0 === kd ? null : kd,
            Nd = dd.container,
            Wd = void 0 === Nd ? null : Nd,
            Pd = dd.layout,
            Zd = void 0 === Pd ? null : Pd,
            gd = dd.offset,
            Cd = void 0 === gd ? null : gd,
            Kd = dd.mouseHandlerCallback,
            od = void 0 === Kd ? null : Kd;
          this.coordinateList = null !== (Jd = null !== pd && void 0 !== pd ? pd : this.coordinateList) && void 0 !== Jd ? Jd : [], this.container = null !== Wd && void 0 !== Wd ? Wd : this.container, this.layout = null !== Zd && void 0 !== Zd ? Zd : this.layout, this.offset = null !== Cd && void 0 !== Cd ? Cd : this.offset, this.mouseHandlerCallback = null !== od && void 0 !== od ? od : this.mouseHandlerCallback, this.activeIndex = Math.min(Math.max(this.activeIndex, 0), this.coordinateList.length - 1)
        }
      }, {
        key: "focus",
        value: function() {
          this.spoofMouse()
        }
      }, {
        key: "keyboardEvent",
        value: function(dd) {
          if (0 !== this.coordinateList.length) switch (dd.key) {
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
        value: function(dd) {
          this.activeIndex = dd
        }
      }, {
        key: "spoofMouse",
        value: function() {
          var dd, Jd;
          if ("horizontal" === this.layout && 0 !== this.coordinateList.length) {
            var kd = this.container.getBoundingClientRect(),
              pd = kd.x,
              Nd = kd.y,
              Wd = kd.height,
              Pd = this.coordinateList[this.activeIndex].coordinate,
              Zd = (null === (dd = window) || void 0 === dd ? void 0 : dd.scrollX) || 0,
              gd = (null === (Jd = window) || void 0 === Jd ? void 0 : Jd.scrollY) || 0,
              Cd = pd + Pd + Zd,
              Kd = Nd + this.offset.top + Wd / 2 + gd;
            this.mouseHandlerCallback({
              pageX: Cd,
              pageY: Kd
            })
          }
        }
      }]) && UJ(dd.prototype, Jd), kd && UJ(dd, kd), Object.defineProperty(dd, "prototype", {
        writable: !1
      }), dd;
      var dd, Jd, kd
    }();
    var EJ = kd(6163),
      cJ = kd(6237);

    function hJ(dd) {
      return hJ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(dd) {
        return typeof dd
      } : function(dd) {
        return dd && "function" == typeof Symbol && dd.constructor === Symbol && dd !== Symbol.prototype ? "symbol" : typeof dd
      }, hJ(dd)
    }
    var rJ = ["x", "y", "top", "left", "width", "height", "className"];

    function uJ() {
      return uJ = Object.assign ? Object.assign.bind() : function(dd) {
        for (var Jd = 1; Jd < arguments.length; Jd++) {
          var kd = arguments[Jd];
          for (var pd in kd) Object.prototype.hasOwnProperty.call(kd, pd) && (dd[pd] = kd[pd])
        }
        return dd
      }, uJ.apply(this, arguments)
    }

    function tJ(dd, Jd) {
      var kd = Object.keys(dd);
      if (Object.getOwnPropertySymbols) {
        var pd = Object.getOwnPropertySymbols(dd);
        Jd && (pd = pd.filter((function(Jd) {
          return Object.getOwnPropertyDescriptor(dd, Jd).enumerable
        }))), kd.push.apply(kd, pd)
      }
      return kd
    }

    function VJ(dd, Jd, kd) {
      return (Jd = function(dd) {
        var Jd = function(dd, Jd) {
          if ("object" != hJ(dd) || !dd) return dd;
          var kd = dd[Symbol.toPrimitive];
          if (void 0 !== kd) {
            var pd = kd.call(dd, Jd || "default");
            if ("object" != hJ(pd)) return pd;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === Jd ? String : Number)(dd)
        }(dd, "string");
        return "symbol" == hJ(Jd) ? Jd : Jd + ""
      }(Jd)) in dd ? Object.defineProperty(dd, Jd, {
        value: kd,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : dd[Jd] = kd, dd
    }

    function zJ(dd, Jd) {
      if (null == dd) return {};
      var kd, pd, Nd = function(dd, Jd) {
        if (null == dd) return {};
        var kd = {};
        for (var pd in dd)
          if (Object.prototype.hasOwnProperty.call(dd, pd)) {
            if (Jd.indexOf(pd) >= 0) continue;
            kd[pd] = dd[pd]
          } return kd
      }(dd, Jd);
      if (Object.getOwnPropertySymbols) {
        var Wd = Object.getOwnPropertySymbols(dd);
        for (pd = 0; pd < Wd.length; pd++) kd = Wd[pd], Jd.indexOf(kd) >= 0 || Object.prototype.propertyIsEnumerable.call(dd, kd) && (Nd[kd] = dd[kd])
      }
      return Nd
    }
    var HJ = function(dd, Jd, kd, pd, Nd, Wd) {
        return "M".concat(dd, ",").concat(Nd, "v").concat(pd, "M").concat(Wd, ",").concat(Jd, "h").concat(kd)
      },
      wJ = function(dd) {
        var Jd = dd.x,
          kd = void 0 === Jd ? 0 : Jd,
          Nd = dd.y,
          Wd = void 0 === Nd ? 0 : Nd,
          Pd = dd.top,
          Zd = void 0 === Pd ? 0 : Pd,
          gd = dd.left,
          Cd = void 0 === gd ? 0 : gd,
          Kd = dd.width,
          od = void 0 === Kd ? 0 : Kd,
          ld = dd.height,
          Qd = void 0 === ld ? 0 : ld,
          Ld = dd.className,
          Od = function(dd) {
            for (var Jd = 1; Jd < arguments.length; Jd++) {
              var kd = null != arguments[Jd] ? arguments[Jd] : {};
              Jd % 2 ? tJ(Object(kd), !0).forEach((function(Jd) {
                VJ(dd, Jd, kd[Jd])
              })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(dd, Object.getOwnPropertyDescriptors(kd)) : tJ(Object(kd)).forEach((function(Jd) {
                Object.defineProperty(dd, Jd, Object.getOwnPropertyDescriptor(kd, Jd))
              }))
            }
            return dd
          }({
            x: kd,
            y: Wd,
            top: Zd,
            left: Cd,
            width: od,
            height: Qd
          }, zJ(dd, rJ));
        return (0, Yd.B)(kd) && (0, Yd.B)(Wd) && (0, Yd.B)(od) && (0, Yd.B)(Qd) && (0, Yd.B)(Zd) && (0, Yd.B)(Cd) ? pd.createElement("path", uJ({}, (0, sd.e)(Od, !0), {
          className: (0, ed.b)("recharts-cross", Ld),
          d: HJ(kd, Wd, od, Qd, Zd, Cd)
        })) : null
      };

    function AJ(dd) {
      var Jd = dd.cx,
        kd = dd.cy,
        pd = dd.radius,
        Nd = dd.startAngle,
        Wd = dd.endAngle;
      return {
        points: [(0, mJ.j)(Jd, kd, pd, Nd), (0, mJ.j)(Jd, kd, pd, Wd)],
        cx: Jd,
        cy: kd,
        radius: pd,
        startAngle: Nd,
        endAngle: Wd
      }
    }
    var dk = kd(6185);

    function Jk(dd, Jd, kd) {
      var pd, Nd, Wd, Pd;
      if ("horizontal" === dd) Wd = pd = Jd.x, Nd = kd.top, Pd = kd.top + kd.height;
      else if ("vertical" === dd) Pd = Nd = Jd.y, pd = kd.left, Wd = kd.left + kd.width;
      else if (null != Jd.cx && null != Jd.cy) {
        if ("centric" !== dd) return AJ(Jd);
        var Zd = Jd.cx,
          gd = Jd.cy,
          Cd = Jd.innerRadius,
          Kd = Jd.outerRadius,
          od = Jd.angle,
          ld = (0, mJ.j)(Zd, gd, Cd, od),
          Qd = (0, mJ.j)(Zd, gd, Kd, od);
        pd = ld.x, Nd = ld.y, Wd = Qd.x, Pd = Qd.y
      }
      return [{
        x: pd,
        y: Nd
      }, {
        x: Wd,
        y: Pd
      }]
    }

    function kk(dd) {
      return kk = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(dd) {
        return typeof dd
      } : function(dd) {
        return dd && "function" == typeof Symbol && dd.constructor === Symbol && dd !== Symbol.prototype ? "symbol" : typeof dd
      }, kk(dd)
    }

    function pk(dd, Jd) {
      var kd = Object.keys(dd);
      if (Object.getOwnPropertySymbols) {
        var pd = Object.getOwnPropertySymbols(dd);
        Jd && (pd = pd.filter((function(Jd) {
          return Object.getOwnPropertyDescriptor(dd, Jd).enumerable
        }))), kd.push.apply(kd, pd)
      }
      return kd
    }

    function Nk(dd) {
      for (var Jd = 1; Jd < arguments.length; Jd++) {
        var kd = null != arguments[Jd] ? arguments[Jd] : {};
        Jd % 2 ? pk(Object(kd), !0).forEach((function(Jd) {
          Wk(dd, Jd, kd[Jd])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(dd, Object.getOwnPropertyDescriptors(kd)) : pk(Object(kd)).forEach((function(Jd) {
          Object.defineProperty(dd, Jd, Object.getOwnPropertyDescriptor(kd, Jd))
        }))
      }
      return dd
    }

    function Wk(dd, Jd, kd) {
      return (Jd = function(dd) {
        var Jd = function(dd, Jd) {
          if ("object" != kk(dd) || !dd) return dd;
          var kd = dd[Symbol.toPrimitive];
          if (void 0 !== kd) {
            var pd = kd.call(dd, Jd || "default");
            if ("object" != kk(pd)) return pd;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === Jd ? String : Number)(dd)
        }(dd, "string");
        return "symbol" == kk(Jd) ? Jd : Jd + ""
      }(Jd)) in dd ? Object.defineProperty(dd, Jd, {
        value: kd,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : dd[Jd] = kd, dd
    }

    function Pk(dd) {
      var Jd, kd, Nd, Wd = dd.element,
        Pd = dd.tooltipEventType,
        Zd = dd.isActive,
        gd = dd.activeCoordinate,
        Cd = dd.activePayload,
        Kd = dd.offset,
        od = dd.activeTooltipIndex,
        ld = dd.tooltipAxisBandSize,
        Qd = dd.layout,
        Ld = dd.chartName,
        Od = null !== (Jd = Wd.props.cursor) && void 0 !== Jd ? Jd : null === (kd = Wd.type.defaultProps) || void 0 === kd ? void 0 : kd.cursor;
      if (!Wd || !Od || !Zd || !gd || "ScatterChart" !== Ld && "axis" !== Pd) return null;
      var Rd = cJ.e;
      if ("ScatterChart" === Ld) Nd = gd, Rd = wJ;
      else if ("BarChart" === Ld) Nd = function(dd, Jd, kd, pd) {
        var Nd = pd / 2;
        return {
          stroke: "none",
          fill: "#ccc",
          x: "horizontal" === dd ? Jd.x - Nd : kd.left + .5,
          y: "horizontal" === dd ? kd.top + .5 : Jd.y - Nd,
          width: "horizontal" === dd ? pd : kd.width - 1,
          height: "horizontal" === dd ? kd.height - 1 : pd
        }
      }(Qd, gd, Kd, ld), Rd = Bd.c;
      else if ("radial" === Qd) {
        var Id = AJ(gd),
          Gd = Id.cx,
          vd = Id.cy,
          xd = Id.radius;
        Nd = {
          cx: Gd,
          cy: vd,
          startAngle: Id.startAngle,
          endAngle: Id.endAngle,
          innerRadius: xd,
          outerRadius: xd
        }, Rd = dk.c
      } else Nd = {
        points: Jk(Qd, gd, Kd)
      }, Rd = cJ.e;
      var qd = Nk(Nk(Nk(Nk({
        stroke: "#ccc",
        pointerEvents: "none"
      }, Kd), Nd), (0, sd.e)(Od, !1)), {}, {
        payload: Cd,
        payloadIndex: od,
        className: (0, ed.b)("recharts-tooltip-cursor", Od.className)
      });
      return (0, pd.isValidElement)(Od) ? (0, pd.cloneElement)(Od, qd) : (0, pd.createElement)(Rd, qd)
    }
    var Zk = kd(6210),
      gk = ["item"],
      Ck = ["children", "className", "width", "height", "style", "compact", "title", "desc"];

    function Kk(dd) {
      return Kk = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(dd) {
        return typeof dd
      } : function(dd) {
        return dd && "function" == typeof Symbol && dd.constructor === Symbol && dd !== Symbol.prototype ? "symbol" : typeof dd
      }, Kk(dd)
    }

    function lk() {
      return lk = Object.assign ? Object.assign.bind() : function(dd) {
        for (var Jd = 1; Jd < arguments.length; Jd++) {
          var kd = arguments[Jd];
          for (var pd in kd) Object.prototype.hasOwnProperty.call(kd, pd) && (dd[pd] = kd[pd])
        }
        return dd
      }, lk.apply(this, arguments)
    }

    function Qk(dd, Jd) {
      return function(dd) {
        if (Array.isArray(dd)) return dd
      }(dd) || function(dd, Jd) {
        var kd = null == dd ? null : "undefined" != typeof Symbol && dd[Symbol.iterator] || dd["@@iterator"];
        if (null != kd) {
          var pd, Nd, Wd, Pd, Zd = [],
            gd = !0,
            Cd = !1;
          try {
            if (Wd = (kd = kd.call(dd)).next, 0 === Jd) {
              if (Object(kd) !== kd) return;
              gd = !1
            } else
              for (; !(gd = (pd = Wd.call(kd)).done) && (Zd.push(pd.value), Zd.length !== Jd); gd = !0);
          } catch (dd) {
            Cd = !0, Nd = dd
          } finally {
            try {
              if (!gd && null != kd.return && (Pd = kd.return(), Object(Pd) !== Pd)) return
            } finally {
              if (Cd) throw Nd
            }
          }
          return Zd
        }
      }(dd, Jd) || xk(dd, Jd) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Lk(dd, Jd) {
      if (null == dd) return {};
      var kd, pd, Nd = function(dd, Jd) {
        if (null == dd) return {};
        var kd = {};
        for (var pd in dd)
          if (Object.prototype.hasOwnProperty.call(dd, pd)) {
            if (Jd.indexOf(pd) >= 0) continue;
            kd[pd] = dd[pd]
          } return kd
      }(dd, Jd);
      if (Object.getOwnPropertySymbols) {
        var Wd = Object.getOwnPropertySymbols(dd);
        for (pd = 0; pd < Wd.length; pd++) kd = Wd[pd], Jd.indexOf(kd) >= 0 || Object.prototype.propertyIsEnumerable.call(dd, kd) && (Nd[kd] = dd[kd])
      }
      return Nd
    }

    function Ok(dd, Jd) {
      for (var kd = 0; kd < Jd.length; kd++) {
        var pd = Jd[kd];
        pd.enumerable = pd.enumerable || !1, pd.configurable = !0, "value" in pd && (pd.writable = !0), Object.defineProperty(dd, ak(pd.key), pd)
      }
    }

    function ek(dd, Jd, kd) {
      return Jd = Ik(Jd),
        function(dd, Jd) {
          if (Jd && ("object" === Kk(Jd) || "function" === typeof Jd)) return Jd;
          if (void 0 !== Jd) throw new TypeError("Derived constructors may only return object or undefined");
          return function(dd) {
            if (void 0 === dd) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return dd
          }(dd)
        }(dd, Rk() ? Reflect.construct(Jd, kd || [], Ik(dd).constructor) : Jd.apply(dd, kd))
    }

    function Rk() {
      try {
        var dd = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (dd) {}
      return (Rk = function() {
        return !!dd
      })()
    }

    function Ik(dd) {
      return Ik = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(dd) {
        return dd.__proto__ || Object.getPrototypeOf(dd)
      }, Ik(dd)
    }

    function Gk(dd, Jd) {
      return Gk = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(dd, Jd) {
        return dd.__proto__ = Jd, dd
      }, Gk(dd, Jd)
    }

    function vk(dd) {
      return function(dd) {
        if (Array.isArray(dd)) return qk(dd)
      }(dd) || function(dd) {
        if ("undefined" !== typeof Symbol && null != dd[Symbol.iterator] || null != dd["@@iterator"]) return Array.from(dd)
      }(dd) || xk(dd) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function xk(dd, Jd) {
      if (dd) {
        if ("string" === typeof dd) return qk(dd, Jd);
        var kd = Object.prototype.toString.call(dd).slice(8, -1);
        return "Object" === kd && dd.constructor && (kd = dd.constructor.name), "Map" === kd || "Set" === kd ? Array.from(dd) : "Arguments" === kd || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(kd) ? qk(dd, Jd) : void 0
      }
    }

    function qk(dd, Jd) {
      (null == Jd || Jd > dd.length) && (Jd = dd.length);
      for (var kd = 0, pd = new Array(Jd); kd < Jd; kd++) pd[kd] = dd[kd];
      return pd
    }

    function Bk(dd, Jd) {
      var kd = Object.keys(dd);
      if (Object.getOwnPropertySymbols) {
        var pd = Object.getOwnPropertySymbols(dd);
        Jd && (pd = pd.filter((function(Jd) {
          return Object.getOwnPropertyDescriptor(dd, Jd).enumerable
        }))), kd.push.apply(kd, pd)
      }
      return kd
    }

    function sk(dd) {
      for (var Jd = 1; Jd < arguments.length; Jd++) {
        var kd = null != arguments[Jd] ? arguments[Jd] : {};
        Jd % 2 ? Bk(Object(kd), !0).forEach((function(Jd) {
          ik(dd, Jd, kd[Jd])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(dd, Object.getOwnPropertyDescriptors(kd)) : Bk(Object(kd)).forEach((function(Jd) {
          Object.defineProperty(dd, Jd, Object.getOwnPropertyDescriptor(kd, Jd))
        }))
      }
      return dd
    }

    function ik(dd, Jd, kd) {
      return (Jd = ak(Jd)) in dd ? Object.defineProperty(dd, Jd, {
        value: kd,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : dd[Jd] = kd, dd
    }

    function ak(dd) {
      var Jd = function(dd, Jd) {
        if ("object" != Kk(dd) || !dd) return dd;
        var kd = dd[Symbol.toPrimitive];
        if (void 0 !== kd) {
          var pd = kd.call(dd, Jd || "default");
          if ("object" != Kk(pd)) return pd;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Jd ? String : Number)(dd)
      }(dd, "string");
      return "symbol" == Kk(Jd) ? Jd : Jd + ""
    }
    var Mk = {
        xAxis: ["bottom", "top"],
        yAxis: ["left", "right"]
      },
      Fk = {
        width: "100%",
        height: "100%"
      },
      Yk = {
        x: 0,
        y: 0
      };

    function mk(dd) {
      return dd
    }
    var bk = function(dd, Jd) {
      var kd = Jd.graphicalItems,
        pd = Jd.dataStartIndex,
        Nd = Jd.dataEndIndex,
        Wd = (null !== kd && void 0 !== kd ? kd : []).reduce((function(dd, Jd) {
          var kd = Jd.props.data;
          return kd && kd.length ? [].concat(vk(dd), vk(kd)) : dd
        }), []);
      return Wd.length > 0 ? Wd : dd && dd.length && (0, Yd.B)(pd) && (0, Yd.B)(Nd) ? dd.slice(pd, Nd + 1) : []
    };

    function Sk(dd) {
      return "number" === dd ? [0, "auto"] : void 0
    }
    var jk = function(dd, Jd, kd, pd) {
        var Nd = dd.graphicalItems,
          Wd = dd.tooltipAxis,
          Pd = bk(Jd, dd);
        return kd < 0 || !Nd || !Nd.length || kd >= Pd.length ? null : Nd.reduce((function(Nd, Zd) {
          var gd, Cd, Kd = null !== (gd = Zd.props.data) && void 0 !== gd ? gd : Jd;
          if (Kd && dd.dataStartIndex + dd.dataEndIndex !== 0 && dd.dataEndIndex - dd.dataStartIndex >= kd && (Kd = Kd.slice(dd.dataStartIndex, dd.dataEndIndex + 1)), Wd.dataKey && !Wd.allowDuplicatedCategory) {
            var od = void 0 === Kd ? Pd : Kd;
            Cd = (0, Yd.h)(od, Wd.dataKey, pd)
          } else Cd = Kd && Kd[kd] || Pd[kd];
          return Cd ? [].concat(vk(Nd), [(0, Fd.T)(Zd, Cd)]) : Nd
        }), [])
      },
      Xk = function(dd, Jd, kd, pd) {
        var Nd = pd || {
            x: dd.chartX,
            y: dd.chartY
          },
          Wd = function(dd, Jd) {
            return "horizontal" === Jd ? dd.x : "vertical" === Jd ? dd.y : "centric" === Jd ? dd.angle : dd.radius
          }(Nd, kd),
          Pd = dd.orderedTooltipTicks,
          Zd = dd.tooltipAxis,
          gd = dd.tooltipTicks,
          Cd = (0, Fd.d)(Wd, Pd, gd, Zd);
        if (Cd >= 0 && gd) {
          var Kd = gd[Cd] && gd[Cd].value,
            od = jk(dd, Jd, Cd, Kd),
            ld = function(dd, Jd, kd, pd) {
              var Nd = Jd.find((function(dd) {
                return dd && dd.index === kd
              }));
              if (Nd) {
                if ("horizontal" === dd) return {
                  x: Nd.coordinate,
                  y: pd.y
                };
                if ("vertical" === dd) return {
                  x: pd.x,
                  y: Nd.coordinate
                };
                if ("centric" === dd) {
                  var Wd = Nd.coordinate,
                    Pd = pd.radius;
                  return sk(sk(sk({}, pd), (0, mJ.j)(pd.cx, pd.cy, Pd, Wd)), {}, {
                    angle: Wd,
                    radius: Pd
                  })
                }
                var Zd = Nd.coordinate,
                  gd = pd.angle;
                return sk(sk(sk({}, pd), (0, mJ.j)(pd.cx, pd.cy, Zd, gd)), {}, {
                  angle: gd,
                  radius: Zd
                })
              }
              return Yk
            }(kd, Pd, Cd, Nd);
          return {
            activeTooltipIndex: Cd,
            activeLabel: Kd,
            activePayload: od,
            activeCoordinate: ld
          }
        }
        return null
      },
      fk = function(dd, Jd) {
        var kd = Jd.axes,
          pd = Jd.graphicalItems,
          Nd = Jd.axisType,
          Pd = Jd.axisIdKey,
          Zd = Jd.stackGroups,
          gd = Jd.dataStartIndex,
          Kd = Jd.dataEndIndex,
          od = dd.layout,
          ld = dd.children,
          Qd = dd.stackOffset,
          Ld = (0, Fd.V)(od, Nd);
        return kd.reduce((function(Jd, kd) {
          var Od, ed = void 0 !== kd.type.defaultProps ? sk(sk({}, kd.type.defaultProps), kd.props) : kd.props,
            Rd = ed.type,
            Id = ed.dataKey,
            Gd = ed.allowDataOverflow,
            vd = ed.allowDuplicatedCategory,
            xd = ed.scale,
            qd = ed.ticks,
            Bd = ed.includeHidden,
            sd = ed[Pd];
          if (Jd[sd]) return Jd;
          var ad, Md, md, bd = bk(dd.data, {
              graphicalItems: pd.filter((function(dd) {
                var Jd;
                return (Pd in dd.props ? dd.props[Pd] : null === (Jd = dd.type.defaultProps) || void 0 === Jd ? void 0 : Jd[Pd]) === sd
              })),
              dataStartIndex: gd,
              dataEndIndex: Kd
            }),
            Sd = bd.length;
          (function(dd, Jd, kd) {
            if ("number" === kd && !0 === Jd && Array.isArray(dd)) {
              var pd = null === dd || void 0 === dd ? void 0 : dd[0],
                Nd = null === dd || void 0 === dd ? void 0 : dd[1];
              if (pd && Nd && (0, Yd.B)(pd) && (0, Yd.B)(Nd)) return !0
            }
            return !1
          })(ed.domain, Gd, Rd) && (ad = (0, Fd.db)(ed.domain, null, Gd), !Ld || "number" !== Rd && "auto" === xd || (md = (0, Fd.A)(bd, Id, "category")));
          var jd = Sk(Rd);
          if (!ad || 0 === ad.length) {
            var Xd, fd = null !== (Xd = ed.domain) && void 0 !== Xd ? Xd : jd;
            if (Id) {
              if (ad = (0, Fd.A)(bd, Id, Rd), "category" === Rd && Ld) {
                var nd = (0, Yd.q)(ad);
                vd && nd ? (Md = ad, ad = Cd()(0, Sd)) : vd || (ad = (0, Fd.Z)(fd, ad, kd).reduce((function(dd, Jd) {
                  return dd.indexOf(Jd) >= 0 ? dd : [].concat(vk(dd), [Jd])
                }), []))
              } else if ("category" === Rd) ad = vd ? ad.filter((function(dd) {
                return "" !== dd && !Wd()(dd)
              })) : (0, Fd.Z)(fd, ad, kd).reduce((function(dd, Jd) {
                return dd.indexOf(Jd) >= 0 || "" === Jd || Wd()(Jd) ? dd : [].concat(vk(dd), [Jd])
              }), []);
              else if ("number" === Rd) {
                var Ud = (0, Fd.$)(bd, pd.filter((function(dd) {
                  var Jd, kd, pd = Pd in dd.props ? dd.props[Pd] : null === (Jd = dd.type.defaultProps) || void 0 === Jd ? void 0 : Jd[Pd],
                    Nd = "hide" in dd.props ? dd.props.hide : null === (kd = dd.type.defaultProps) || void 0 === kd ? void 0 : kd.hide;
                  return pd === sd && (Bd || !Nd)
                })), Id, Nd, od);
                Ud && (ad = Ud)
              }!Ld || "number" !== Rd && "auto" === xd || (md = (0, Fd.A)(bd, Id, "category"))
            } else ad = Ld ? Cd()(0, Sd) : Zd && Zd[sd] && Zd[sd].hasStack && "number" === Rd ? "expand" === Qd ? [0, 1] : (0, Fd.G)(Zd[sd].stackGroups, gd, Kd) : (0, Fd.E)(bd, pd.filter((function(dd) {
              var Jd = Pd in dd.props ? dd.props[Pd] : dd.type.defaultProps[Pd],
                kd = "hide" in dd.props ? dd.props.hide : dd.type.defaultProps.hide;
              return Jd === sd && (Bd || !kd)
            })), Rd, od, !0);
            if ("number" === Rd) ad = YJ(ld, ad, sd, Nd, qd), fd && (ad = (0, Fd.db)(fd, ad, Gd));
            else if ("category" === Rd && fd) {
              var yd = fd;
              ad.every((function(dd) {
                return yd.indexOf(dd) >= 0
              })) && (ad = yd)
            }
          }
          return sk(sk({}, Jd), {}, ik({}, sd, sk(sk({}, ed), {}, {
            axisType: Nd,
            domain: ad,
            categoricalDomain: md,
            duplicateDomain: Md,
            originalDomain: null !== (Od = ed.domain) && void 0 !== Od ? Od : jd,
            isCategorical: Ld,
            layout: od
          })))
        }), {})
      },
      nk = function(dd, Jd) {
        var kd = Jd.axisType,
          pd = void 0 === kd ? "xAxis" : kd,
          Nd = Jd.AxisComp,
          Wd = Jd.graphicalItems,
          Pd = Jd.stackGroups,
          Zd = Jd.dataStartIndex,
          gd = Jd.dataEndIndex,
          Kd = dd.children,
          ld = "".concat(pd, "Id"),
          Qd = (0, sd.i)(Kd, Nd),
          Ld = {};
        return Qd && Qd.length ? Ld = fk(dd, {
          axes: Qd,
          graphicalItems: Wd,
          axisType: pd,
          axisIdKey: ld,
          stackGroups: Pd,
          dataStartIndex: Zd,
          dataEndIndex: gd
        }) : Wd && Wd.length && (Ld = function(dd, Jd) {
          var kd = Jd.graphicalItems,
            pd = Jd.Axis,
            Nd = Jd.axisType,
            Wd = Jd.axisIdKey,
            Pd = Jd.stackGroups,
            Zd = Jd.dataStartIndex,
            gd = Jd.dataEndIndex,
            Kd = dd.layout,
            ld = dd.children,
            Qd = bk(dd.data, {
              graphicalItems: kd,
              dataStartIndex: Zd,
              dataEndIndex: gd
            }),
            Ld = Qd.length,
            Od = (0, Fd.V)(Kd, Nd),
            ed = -1;
          return kd.reduce((function(dd, Jd) {
            var Rd, Id = (void 0 !== Jd.type.defaultProps ? sk(sk({}, Jd.type.defaultProps), Jd.props) : Jd.props)[Wd],
              Gd = Sk("number");
            return dd[Id] ? dd : (ed++, Od ? Rd = Cd()(0, Ld) : Pd && Pd[Id] && Pd[Id].hasStack ? (Rd = (0, Fd.G)(Pd[Id].stackGroups, Zd, gd), Rd = YJ(ld, Rd, Id, Nd)) : (Rd = (0, Fd.db)(Gd, (0, Fd.E)(Qd, kd.filter((function(dd) {
              var Jd, kd, pd = Wd in dd.props ? dd.props[Wd] : null === (Jd = dd.type.defaultProps) || void 0 === Jd ? void 0 : Jd[Wd],
                Nd = "hide" in dd.props ? dd.props.hide : null === (kd = dd.type.defaultProps) || void 0 === kd ? void 0 : kd.hide;
              return pd === Id && !Nd
            })), "number", Kd), pd.defaultProps.allowDataOverflow), Rd = YJ(ld, Rd, Id, Nd)), sk(sk({}, dd), {}, ik({}, Id, sk(sk({
              axisType: Nd
            }, pd.defaultProps), {}, {
              hide: !0,
              orientation: od()(Mk, "".concat(Nd, ".").concat(ed % 2), null),
              domain: Rd,
              originalDomain: Gd,
              isCategorical: Od,
              layout: Kd
            }))))
          }), {})
        }(dd, {
          Axis: Nd,
          graphicalItems: Wd,
          axisType: pd,
          axisIdKey: ld,
          stackGroups: Pd,
          dataStartIndex: Zd,
          dataEndIndex: gd
        })), Ld
      },
      Uk = function(dd) {
        var Jd = dd.children,
          kd = dd.defaultShowTooltip,
          pd = (0, sd.m)(Jd, Vd),
          Nd = 0,
          Wd = 0;
        return dd.data && 0 !== dd.data.length && (Wd = dd.data.length - 1), pd && pd.props && (pd.props.startIndex >= 0 && (Nd = pd.props.startIndex), pd.props.endIndex >= 0 && (Wd = pd.props.endIndex)), {
          chartX: 0,
          chartY: 0,
          dataStartIndex: Nd,
          dataEndIndex: Wd,
          activeTooltipIndex: -1,
          isTooltipActive: Boolean(kd)
        }
      },
      yk = function(dd) {
        return "horizontal" === dd ? {
          numericAxisName: "yAxis",
          cateAxisName: "xAxis"
        } : "vertical" === dd ? {
          numericAxisName: "xAxis",
          cateAxisName: "yAxis"
        } : "centric" === dd ? {
          numericAxisName: "radiusAxis",
          cateAxisName: "angleAxis"
        } : {
          numericAxisName: "angleAxis",
          cateAxisName: "radiusAxis"
        }
      },
      Dk = function(dd, Jd) {
        return "xAxis" === Jd ? dd[Jd].width : "yAxis" === Jd ? dd[Jd].height : void 0
      },
      Tk = function(dd) {
        var Jd = dd.chartName,
          kd = dd.GraphicalChild,
          Nd = dd.defaultTooltipEventType,
          Pd = void 0 === Nd ? "axis" : Nd,
          gd = dd.validateTooltipEventTypes,
          Cd = void 0 === gd ? ["axis"] : gd,
          Kd = dd.axisComponents,
          ld = dd.legendContent,
          Ld = dd.formatAxisMap,
          ad = dd.defaultProps,
          Md = function(dd, Jd) {
            var kd = Jd.graphicalItems,
              pd = Jd.stackGroups,
              Nd = Jd.offset,
              Pd = Jd.updateId,
              Zd = Jd.dataStartIndex,
              gd = Jd.dataEndIndex,
              Cd = dd.barSize,
              od = dd.layout,
              ld = dd.barGap,
              Qd = dd.barCategoryGap,
              Ld = dd.maxBarSize,
              Od = yk(od),
              ed = Od.numericAxisName,
              Id = Od.cateAxisName,
              Gd = function(dd) {
                return !(!dd || !dd.length) && dd.some((function(dd) {
                  var Jd = (0, sd.q)(dd && dd.type);
                  return Jd && Jd.indexOf("Bar") >= 0
                }))
              }(kd),
              vd = [];
            return kd.forEach((function(kd, Od) {
              var xd = bk(dd.data, {
                  graphicalItems: [kd],
                  dataStartIndex: Zd,
                  dataEndIndex: gd
                }),
                qd = void 0 !== kd.type.defaultProps ? sk(sk({}, kd.type.defaultProps), kd.props) : kd.props,
                Bd = qd.dataKey,
                ad = qd.maxBarSize,
                Md = qd["".concat(ed, "Id")],
                Yd = qd["".concat(Id, "Id")],
                md = Kd.reduce((function(dd, kd) {
                  var pd = Jd["".concat(kd.axisType, "Map")],
                    Nd = qd["".concat(kd.axisType, "Id")];
                  pd && pd[Nd] || "zAxis" === kd.axisType || (0, Rd.e)(!1);
                  var Wd = pd[Nd];
                  return sk(sk({}, dd), {}, ik(ik({}, kd.axisType, Wd), "".concat(kd.axisType, "Ticks"), (0, Fd.P)(Wd)))
                }), {}),
                bd = md[Id],
                Sd = md["".concat(Id, "Ticks")],
                jd = pd && pd[Md] && pd[Md].hasStack && (0, Fd.O)(kd, pd[Md].stackGroups),
                Xd = (0, sd.q)(kd.type).indexOf("Bar") >= 0,
                fd = (0, Fd.m)(bd, Sd),
                nd = [],
                Ud = Gd && (0, Fd.s)({
                  barSize: Cd,
                  stackGroups: pd,
                  totalSize: Dk(md, Id)
                });
              if (Xd) {
                var yd, Dd, Td = Wd()(ad) ? Ld : ad,
                  Ed = null !== (yd = null !== (Dd = (0, Fd.m)(bd, Sd, !0)) && void 0 !== Dd ? Dd : Td) && void 0 !== yd ? yd : 0;
                nd = (0, Fd.q)({
                  barGap: ld,
                  barCategoryGap: Qd,
                  bandSize: Ed !== fd ? Ed : fd,
                  sizeList: Ud[Yd],
                  maxBarSize: Td
                }), Ed !== fd && (nd = nd.map((function(dd) {
                  return sk(sk({}, dd), {}, {
                    position: sk(sk({}, dd.position), {}, {
                      offset: dd.position.offset - Ed / 2
                    })
                  })
                })))
              }
              var cd = kd && kd.type && kd.type.getComposedData;
              cd && vd.push({
                props: sk(sk({}, cd(sk(sk({}, md), {}, {
                  displayedData: xd,
                  props: dd,
                  dataKey: Bd,
                  item: kd,
                  bandSize: fd,
                  barPosition: nd,
                  offset: Nd,
                  stackedData: jd,
                  layout: od,
                  dataStartIndex: Zd,
                  dataEndIndex: gd
                }))), {}, ik(ik(ik({
                  key: kd.key || "item-".concat(Od)
                }, ed, md[ed]), Id, md[Id]), "animationId", Pd)),
                childIndex: (0, sd.w)(kd, dd.children),
                item: kd
              })
            })), vd
          },
          md = function(dd, pd) {
            var Nd = dd.props,
              Wd = dd.dataStartIndex,
              Pd = dd.dataEndIndex,
              Zd = dd.updateId;
            if (!(0, sd.A)({
                props: Nd
              })) return null;
            var gd = Nd.children,
              Cd = Nd.layout,
              ld = Nd.stackOffset,
              Od = Nd.data,
              ed = Nd.reverseStackOrder,
              Rd = yk(Cd),
              Id = Rd.numericAxisName,
              Gd = Rd.cateAxisName,
              vd = (0, sd.i)(gd, kd),
              qd = (0, Fd.N)(Od, vd, "".concat(Id, "Id"), "".concat(Gd, "Id"), ld, ed),
              Bd = Kd.reduce((function(dd, Jd) {
                var kd = "".concat(Jd.axisType, "Map");
                return sk(sk({}, dd), {}, ik({}, kd, nk(Nd, sk(sk({}, Jd), {}, {
                  graphicalItems: vd,
                  stackGroups: Jd.axisType === Id && qd,
                  dataStartIndex: Wd,
                  dataEndIndex: Pd
                }))))
              }), {}),
              ad = function(dd, Jd) {
                var kd = dd.props,
                  pd = dd.graphicalItems,
                  Nd = dd.xAxisMap,
                  Wd = void 0 === Nd ? {} : Nd,
                  Pd = dd.yAxisMap,
                  Zd = void 0 === Pd ? {} : Pd,
                  gd = kd.width,
                  Cd = kd.height,
                  Kd = kd.children,
                  ld = kd.margin || {},
                  Qd = (0, sd.m)(Kd, Vd),
                  Ld = (0, sd.m)(Kd, xd.d),
                  Od = Object.keys(Zd).reduce((function(dd, Jd) {
                    var kd = Zd[Jd],
                      pd = kd.orientation;
                    return kd.mirror || kd.hide ? dd : sk(sk({}, dd), {}, ik({}, pd, dd[pd] + kd.width))
                  }), {
                    left: ld.left || 0,
                    right: ld.right || 0
                  }),
                  ed = Object.keys(Wd).reduce((function(dd, Jd) {
                    var kd = Wd[Jd],
                      pd = kd.orientation;
                    return kd.mirror || kd.hide ? dd : sk(sk({}, dd), {}, ik({}, pd, od()(dd, "".concat(pd)) + kd.height))
                  }), {
                    top: ld.top || 0,
                    bottom: ld.bottom || 0
                  }),
                  Rd = sk(sk({}, ed), Od),
                  Id = Rd.bottom;
                Qd && (Rd.bottom += Qd.props.height || Vd.defaultProps.height), Ld && Jd && (Rd = (0, Fd.b)(Rd, pd, kd, Jd));
                var Gd = gd - Rd.left - Rd.right,
                  vd = Cd - Rd.top - Rd.bottom;
                return sk(sk({
                  brushBottom: Id
                }, Rd), {}, {
                  width: Math.max(Gd, 0),
                  height: Math.max(vd, 0)
                })
              }(sk(sk({}, Bd), {}, {
                props: Nd,
                graphicalItems: vd
              }), null === pd || void 0 === pd ? void 0 : pd.legendBBox);
            Object.keys(Bd).forEach((function(dd) {
              Bd[dd] = Ld(Nd, Bd[dd], ad, dd.replace("Map", ""), Jd)
            }));
            var md = function(dd) {
                var Jd = (0, Yd.i)(dd),
                  kd = (0, Fd.P)(Jd, !1, !0);
                return {
                  tooltipTicks: kd,
                  orderedTooltipTicks: Qd()(kd, (function(dd) {
                    return dd.coordinate
                  })),
                  tooltipAxis: Jd,
                  tooltipAxisBandSize: (0, Fd.m)(Jd, kd)
                }
              }(Bd["".concat(Gd, "Map")]),
              bd = Md(Nd, sk(sk({}, Bd), {}, {
                dataStartIndex: Wd,
                dataEndIndex: Pd,
                updateId: Zd,
                graphicalItems: vd,
                stackGroups: qd,
                offset: ad
              }));
            return sk(sk({
              formattedGraphicalItems: bd,
              graphicalItems: vd,
              offset: ad,
              stackGroups: qd
            }, md), Bd)
          },
          bd = function(dd) {
            function kd(dd) {
              var Nd, Pd, gd;
              return function(dd, Jd) {
                if (!(dd instanceof Jd)) throw new TypeError("Cannot call a class as a function")
              }(this, kd), ik(gd = ek(this, kd, [dd]), "eventEmitterSymbol", Symbol("rechartsEventEmitter")), ik(gd, "accessibilityManager", new TJ), ik(gd, "handleLegendBBoxUpdate", (function(dd) {
                if (dd) {
                  var Jd = gd.state,
                    kd = Jd.dataStartIndex,
                    pd = Jd.dataEndIndex,
                    Nd = Jd.updateId;
                  gd.setState(sk({
                    legendBBox: dd
                  }, md({
                    props: gd.props,
                    dataStartIndex: kd,
                    dataEndIndex: pd,
                    updateId: Nd
                  }, sk(sk({}, gd.state), {}, {
                    legendBBox: dd
                  }))))
                }
              })), ik(gd, "handleReceiveSyncEvent", (function(dd, Jd, kd) {
                if (gd.props.syncId === dd) {
                  if (kd === gd.eventEmitterSymbol && "function" !== typeof gd.props.syncMethod) return;
                  gd.applySyncEvent(Jd)
                }
              })), ik(gd, "handleBrushChange", (function(dd) {
                var Jd = dd.startIndex,
                  kd = dd.endIndex;
                if (Jd !== gd.state.dataStartIndex || kd !== gd.state.dataEndIndex) {
                  var pd = gd.state.updateId;
                  gd.setState((function() {
                    return sk({
                      dataStartIndex: Jd,
                      dataEndIndex: kd
                    }, md({
                      props: gd.props,
                      dataStartIndex: Jd,
                      dataEndIndex: kd,
                      updateId: pd
                    }, gd.state))
                  })), gd.triggerSyncEvent({
                    dataStartIndex: Jd,
                    dataEndIndex: kd
                  })
                }
              })), ik(gd, "handleMouseEnter", (function(dd) {
                var Jd = gd.getMouseInfo(dd);
                if (Jd) {
                  var kd = sk(sk({}, Jd), {}, {
                    isTooltipActive: !0
                  });
                  gd.setState(kd), gd.triggerSyncEvent(kd);
                  var pd = gd.props.onMouseEnter;
                  Zd()(pd) && pd(kd, dd)
                }
              })), ik(gd, "triggeredAfterMouseMove", (function(dd) {
                var Jd = gd.getMouseInfo(dd),
                  kd = Jd ? sk(sk({}, Jd), {}, {
                    isTooltipActive: !0
                  }) : {
                    isTooltipActive: !1
                  };
                gd.setState(kd), gd.triggerSyncEvent(kd);
                var pd = gd.props.onMouseMove;
                Zd()(pd) && pd(kd, dd)
              })), ik(gd, "handleItemMouseEnter", (function(dd) {
                gd.setState((function() {
                  return {
                    isTooltipActive: !0,
                    activeItem: dd,
                    activePayload: dd.tooltipPayload,
                    activeCoordinate: dd.tooltipPosition || {
                      x: dd.cx,
                      y: dd.cy
                    }
                  }
                }))
              })), ik(gd, "handleItemMouseLeave", (function() {
                gd.setState((function() {
                  return {
                    isTooltipActive: !1
                  }
                }))
              })), ik(gd, "handleMouseMove", (function(dd) {
                dd.persist(), gd.throttleTriggeredAfterMouseMove(dd)
              })), ik(gd, "handleMouseLeave", (function(dd) {
                gd.throttleTriggeredAfterMouseMove.cancel();
                var Jd = {
                  isTooltipActive: !1
                };
                gd.setState(Jd), gd.triggerSyncEvent(Jd);
                var kd = gd.props.onMouseLeave;
                Zd()(kd) && kd(Jd, dd)
              })), ik(gd, "handleOuterEvent", (function(dd) {
                var Jd, kd = (0, sd.r)(dd),
                  pd = od()(gd.props, "".concat(kd));
                kd && Zd()(pd) && pd(null !== (Jd = /.*touch.*/i.test(kd) ? gd.getMouseInfo(dd.changedTouches[0]) : gd.getMouseInfo(dd)) && void 0 !== Jd ? Jd : {}, dd)
              })), ik(gd, "handleClick", (function(dd) {
                var Jd = gd.getMouseInfo(dd);
                if (Jd) {
                  var kd = sk(sk({}, Jd), {}, {
                    isTooltipActive: !0
                  });
                  gd.setState(kd), gd.triggerSyncEvent(kd);
                  var pd = gd.props.onClick;
                  Zd()(pd) && pd(kd, dd)
                }
              })), ik(gd, "handleMouseDown", (function(dd) {
                var Jd = gd.props.onMouseDown;
                Zd()(Jd) && Jd(gd.getMouseInfo(dd), dd)
              })), ik(gd, "handleMouseUp", (function(dd) {
                var Jd = gd.props.onMouseUp;
                Zd()(Jd) && Jd(gd.getMouseInfo(dd), dd)
              })), ik(gd, "handleTouchMove", (function(dd) {
                null != dd.changedTouches && dd.changedTouches.length > 0 && gd.throttleTriggeredAfterMouseMove(dd.changedTouches[0])
              })), ik(gd, "handleTouchStart", (function(dd) {
                null != dd.changedTouches && dd.changedTouches.length > 0 && gd.handleMouseDown(dd.changedTouches[0])
              })), ik(gd, "handleTouchEnd", (function(dd) {
                null != dd.changedTouches && dd.changedTouches.length > 0 && gd.handleMouseUp(dd.changedTouches[0])
              })), ik(gd, "handleDoubleClick", (function(dd) {
                var Jd = gd.props.onDoubleClick;
                Zd()(Jd) && Jd(gd.getMouseInfo(dd), dd)
              })), ik(gd, "handleContextMenu", (function(dd) {
                var Jd = gd.props.onContextMenu;
                Zd()(Jd) && Jd(gd.getMouseInfo(dd), dd)
              })), ik(gd, "triggerSyncEvent", (function(dd) {
                void 0 !== gd.props.syncId && jJ.emit(XJ, gd.props.syncId, dd, gd.eventEmitterSymbol)
              })), ik(gd, "applySyncEvent", (function(dd) {
                var Jd = gd.props,
                  kd = Jd.layout,
                  pd = Jd.syncMethod,
                  Nd = gd.state.updateId,
                  Wd = dd.dataStartIndex,
                  Pd = dd.dataEndIndex;
                if (void 0 !== dd.dataStartIndex || void 0 !== dd.dataEndIndex) gd.setState(sk({
                  dataStartIndex: Wd,
                  dataEndIndex: Pd
                }, md({
                  props: gd.props,
                  dataStartIndex: Wd,
                  dataEndIndex: Pd,
                  updateId: Nd
                }, gd.state)));
                else if (void 0 !== dd.activeTooltipIndex) {
                  var Zd = dd.chartX,
                    Cd = dd.chartY,
                    Kd = dd.activeTooltipIndex,
                    od = gd.state,
                    ld = od.offset,
                    Qd = od.tooltipTicks;
                  if (!ld) return;
                  if ("function" === typeof pd) Kd = pd(Qd, dd);
                  else if ("value" === pd) {
                    Kd = -1;
                    for (var Ld = 0; Ld < Qd.length; Ld++)
                      if (Qd[Ld].value === dd.activeLabel) {
                        Kd = Ld;
                        break
                      }
                  }
                  var Od = sk(sk({}, ld), {}, {
                      x: ld.left,
                      y: ld.top
                    }),
                    ed = Math.min(Zd, Od.x + Od.width),
                    Rd = Math.min(Cd, Od.y + Od.height),
                    Id = Qd[Kd] && Qd[Kd].value,
                    Gd = jk(gd.state, gd.props.data, Kd),
                    vd = Qd[Kd] ? {
                      x: "horizontal" === kd ? Qd[Kd].coordinate : ed,
                      y: "horizontal" === kd ? Rd : Qd[Kd].coordinate
                    } : Yk;
                  gd.setState(sk(sk({}, dd), {}, {
                    activeLabel: Id,
                    activeCoordinate: vd,
                    activePayload: Gd,
                    activeTooltipIndex: Kd
                  }))
                } else gd.setState(dd)
              })), ik(gd, "renderCursor", (function(dd) {
                var kd, Nd = gd.state,
                  Wd = Nd.isTooltipActive,
                  Pd = Nd.activeCoordinate,
                  Zd = Nd.activePayload,
                  Cd = Nd.offset,
                  Kd = Nd.activeTooltipIndex,
                  od = Nd.tooltipAxisBandSize,
                  ld = gd.getTooltipEventType(),
                  Qd = null !== (kd = dd.props.active) && void 0 !== kd ? kd : Wd,
                  Ld = gd.props.layout,
                  Od = dd.key || "_recharts-cursor";
                return pd.createElement(Pk, {
                  key: Od,
                  activeCoordinate: Pd,
                  activePayload: Zd,
                  activeTooltipIndex: Kd,
                  chartName: Jd,
                  element: dd,
                  isActive: Qd,
                  layout: Ld,
                  offset: Cd,
                  tooltipAxisBandSize: od,
                  tooltipEventType: ld
                })
              })), ik(gd, "renderPolarAxis", (function(dd, Jd, kd) {
                var Nd = od()(dd, "type.axisType"),
                  Wd = od()(gd.state, "".concat(Nd, "Map")),
                  Pd = dd.type.defaultProps,
                  Zd = void 0 !== Pd ? sk(sk({}, Pd), dd.props) : dd.props,
                  Cd = Wd && Wd[Zd["".concat(Nd, "Id")]];
                return (0, pd.cloneElement)(dd, sk(sk({}, Cd), {}, {
                  className: (0, ed.b)(Nd, Cd.className),
                  key: dd.key || "".concat(Jd, "-").concat(kd),
                  ticks: (0, Fd.P)(Cd, !0)
                }))
              })), ik(gd, "renderPolarGrid", (function(dd) {
                var Jd = dd.props,
                  kd = Jd.radialLines,
                  Nd = Jd.polarAngles,
                  Wd = Jd.polarRadius,
                  Pd = gd.state,
                  Zd = Pd.radiusAxisMap,
                  Cd = Pd.angleAxisMap,
                  Kd = (0, Yd.i)(Zd),
                  od = (0, Yd.i)(Cd),
                  ld = od.cx,
                  Qd = od.cy,
                  Ld = od.innerRadius,
                  Od = od.outerRadius;
                return (0, pd.cloneElement)(dd, {
                  polarAngles: Array.isArray(Nd) ? Nd : (0, Fd.P)(od, !0).map((function(dd) {
                    return dd.coordinate
                  })),
                  polarRadius: Array.isArray(Wd) ? Wd : (0, Fd.P)(Kd, !0).map((function(dd) {
                    return dd.coordinate
                  })),
                  cx: ld,
                  cy: Qd,
                  innerRadius: Ld,
                  outerRadius: Od,
                  key: dd.key || "polar-grid",
                  radialLines: kd
                })
              })), ik(gd, "renderLegend", (function() {
                var dd = gd.state.formattedGraphicalItems,
                  Jd = gd.props,
                  kd = Jd.children,
                  Nd = Jd.width,
                  Wd = Jd.height,
                  Pd = gd.props.margin || {},
                  Zd = Nd - (Pd.left || 0) - (Pd.right || 0),
                  Cd = (0, Hd.b)({
                    children: kd,
                    formattedGraphicalItems: dd,
                    legendWidth: Zd,
                    legendContent: ld
                  });
                if (!Cd) return null;
                var Kd = Cd.item,
                  od = Lk(Cd, gk);
                return (0, pd.cloneElement)(Kd, sk(sk({}, od), {}, {
                  chartWidth: Nd,
                  chartHeight: Wd,
                  margin: Pd,
                  onBBoxUpdate: gd.handleLegendBBoxUpdate
                }))
              })), ik(gd, "renderTooltip", (function() {
                var dd, Jd = gd.props,
                  kd = Jd.children,
                  Nd = Jd.accessibilityLayer,
                  Wd = (0, sd.m)(kd, vd.e);
                if (!Wd) return null;
                var Pd = gd.state,
                  Zd = Pd.isTooltipActive,
                  Cd = Pd.activeCoordinate,
                  Kd = Pd.activePayload,
                  od = Pd.activeLabel,
                  ld = Pd.offset,
                  Qd = null !== (dd = Wd.props.active) && void 0 !== dd ? dd : Zd;
                return (0, pd.cloneElement)(Wd, {
                  viewBox: sk(sk({}, ld), {}, {
                    x: ld.left,
                    y: ld.top
                  }),
                  active: Qd,
                  label: od,
                  payload: Qd ? Kd : [],
                  coordinate: Cd,
                  accessibilityLayer: Nd
                })
              })), ik(gd, "renderBrush", (function(dd) {
                var Jd = gd.props,
                  kd = Jd.margin,
                  Nd = Jd.data,
                  Wd = gd.state,
                  Pd = Wd.offset,
                  Zd = Wd.dataStartIndex,
                  Cd = Wd.dataEndIndex,
                  Kd = Wd.updateId;
                return (0, pd.cloneElement)(dd, {
                  key: dd.key || "_recharts-brush",
                  onChange: (0, Fd.g)(gd.handleBrushChange, dd.props.onChange),
                  data: Nd,
                  x: (0, Yd.B)(dd.props.x) ? dd.props.x : Pd.left,
                  y: (0, Yd.B)(dd.props.y) ? dd.props.y : Pd.top + Pd.height + Pd.brushBottom - (kd.bottom || 0),
                  width: (0, Yd.B)(dd.props.width) ? dd.props.width : Pd.width,
                  startIndex: Zd,
                  endIndex: Cd,
                  updateId: "brush-".concat(Kd)
                })
              })), ik(gd, "renderReferenceElement", (function(dd, Jd, kd) {
                if (!dd) return null;
                var Nd = gd.clipPathId,
                  Wd = gd.state,
                  Pd = Wd.xAxisMap,
                  Zd = Wd.yAxisMap,
                  Cd = Wd.offset,
                  Kd = dd.type.defaultProps || {},
                  od = dd.props,
                  ld = od.xAxisId,
                  Qd = void 0 === ld ? Kd.xAxisId : ld,
                  Ld = od.yAxisId,
                  Od = void 0 === Ld ? Kd.yAxisId : Ld;
                return (0, pd.cloneElement)(dd, {
                  key: dd.key || "".concat(Jd, "-").concat(kd),
                  xAxis: Pd[Qd],
                  yAxis: Zd[Od],
                  viewBox: {
                    x: Cd.left,
                    y: Cd.top,
                    width: Cd.width,
                    height: Cd.height
                  },
                  clipPathId: Nd
                })
              })), ik(gd, "renderActivePoints", (function(dd) {
                var Jd = dd.item,
                  pd = dd.activePoint,
                  Nd = dd.basePoint,
                  Wd = dd.childIndex,
                  Pd = dd.isRange,
                  Zd = [],
                  gd = Jd.props.key,
                  Cd = void 0 !== Jd.item.type.defaultProps ? sk(sk({}, Jd.item.type.defaultProps), Jd.item.props) : Jd.item.props,
                  Kd = Cd.activeDot,
                  od = sk(sk({
                    index: Wd,
                    dataKey: Cd.dataKey,
                    cx: pd.x,
                    cy: pd.y,
                    r: 4,
                    fill: (0, Fd.J)(Jd.item),
                    strokeWidth: 2,
                    stroke: "#fff",
                    payload: pd.payload,
                    value: pd.value
                  }, (0, sd.e)(Kd, !1)), (0, fJ.j)(Kd));
                return Zd.push(kd.renderActiveDot(Kd, od, "".concat(gd, "-activePoint-").concat(Wd))), Nd ? Zd.push(kd.renderActiveDot(Kd, sk(sk({}, od), {}, {
                  cx: Nd.x,
                  cy: Nd.y
                }), "".concat(gd, "-basePoint-").concat(Wd))) : Pd && Zd.push(null), Zd
              })), ik(gd, "renderGraphicChild", (function(dd, Jd, kd) {
                var Nd = gd.filterFormatItem(dd, Jd, kd);
                if (!Nd) return null;
                var Pd = gd.getTooltipEventType(),
                  Zd = gd.state,
                  Cd = Zd.isTooltipActive,
                  Kd = Zd.tooltipAxis,
                  od = Zd.activeTooltipIndex,
                  ld = Zd.activeLabel,
                  Qd = gd.props.children,
                  Ld = (0, sd.m)(Qd, vd.e),
                  Od = Nd.props,
                  ed = Od.points,
                  Rd = Od.isRange,
                  Id = Od.baseLine,
                  Gd = void 0 !== Nd.item.type.defaultProps ? sk(sk({}, Nd.item.type.defaultProps), Nd.item.props) : Nd.item.props,
                  xd = Gd.activeDot,
                  qd = Gd.hide,
                  Bd = Gd.activeBar,
                  ad = Gd.activeShape,
                  Md = Boolean(!qd && Cd && Ld && (xd || Bd || ad)),
                  md = {};
                "axis" !== Pd && Ld && "click" === Ld.props.trigger ? md = {
                  onClick: (0, Fd.g)(gd.handleItemMouseEnter, dd.props.onClick)
                } : "axis" !== Pd && (md = {
                  onMouseLeave: (0, Fd.g)(gd.handleItemMouseLeave, dd.props.onMouseLeave),
                  onMouseEnter: (0, Fd.g)(gd.handleItemMouseEnter, dd.props.onMouseEnter)
                });
                var bd = (0, pd.cloneElement)(dd, sk(sk({}, Nd.props), md));
                if (Md) {
                  if (!(od >= 0)) {
                    var Sd, jd = (null !== (Sd = gd.getItemByXY(gd.state.activeCoordinate)) && void 0 !== Sd ? Sd : {
                        graphicalItem: bd
                      }).graphicalItem,
                      Xd = jd.item,
                      fd = void 0 === Xd ? dd : Xd,
                      nd = jd.childIndex,
                      Ud = sk(sk(sk({}, Nd.props), md), {}, {
                        activeIndex: nd
                      });
                    return [(0, pd.cloneElement)(fd, Ud), null, null]
                  }
                  var yd, Dd;
                  if (Kd.dataKey && !Kd.allowDuplicatedCategory) {
                    var Td = "function" === typeof Kd.dataKey ? function(dd) {
                      return "function" === typeof Kd.dataKey ? Kd.dataKey(dd.payload) : null
                    } : "payload.".concat(Kd.dataKey.toString());
                    yd = (0, Yd.h)(ed, Td, ld), Dd = Rd && Id && (0, Yd.h)(Id, Td, ld)
                  } else yd = null === ed || void 0 === ed ? void 0 : ed[od], Dd = Rd && Id && Id[od];
                  if (ad || Bd) {
                    var Ed = void 0 !== dd.props.activeIndex ? dd.props.activeIndex : od;
                    return [(0, pd.cloneElement)(dd, sk(sk(sk({}, Nd.props), md), {}, {
                      activeIndex: Ed
                    })), null, null]
                  }
                  if (!Wd()(yd)) return [bd].concat(vk(gd.renderActivePoints({
                    item: Nd,
                    activePoint: yd,
                    basePoint: Dd,
                    childIndex: od,
                    isRange: Rd
                  })))
                }
                return Rd ? [bd, null, null] : [bd, null]
              })), ik(gd, "renderCustomized", (function(dd, Jd, kd) {
                return (0, pd.cloneElement)(dd, sk(sk({
                  key: "recharts-customized-".concat(kd)
                }, gd.props), gd.state))
              })), ik(gd, "renderMap", {
                CartesianGrid: {
                  handler: mk,
                  once: !0
                },
                ReferenceArea: {
                  handler: gd.renderReferenceElement
                },
                ReferenceLine: {
                  handler: mk
                },
                ReferenceDot: {
                  handler: gd.renderReferenceElement
                },
                XAxis: {
                  handler: mk
                },
                YAxis: {
                  handler: mk
                },
                Brush: {
                  handler: gd.renderBrush,
                  once: !0
                },
                Bar: {
                  handler: gd.renderGraphicChild
                },
                Line: {
                  handler: gd.renderGraphicChild
                },
                Area: {
                  handler: gd.renderGraphicChild
                },
                Radar: {
                  handler: gd.renderGraphicChild
                },
                RadialBar: {
                  handler: gd.renderGraphicChild
                },
                Scatter: {
                  handler: gd.renderGraphicChild
                },
                Pie: {
                  handler: gd.renderGraphicChild
                },
                Funnel: {
                  handler: gd.renderGraphicChild
                },
                Tooltip: {
                  handler: gd.renderCursor,
                  once: !0
                },
                PolarGrid: {
                  handler: gd.renderPolarGrid,
                  once: !0
                },
                PolarAngleAxis: {
                  handler: gd.renderPolarAxis
                },
                PolarRadiusAxis: {
                  handler: gd.renderPolarAxis
                },
                Customized: {
                  handler: gd.renderCustomized
                }
              }), gd.clipPathId = "".concat(null !== (Nd = dd.id) && void 0 !== Nd ? Nd : (0, Yd.G)("recharts"), "-clip"), gd.throttleTriggeredAfterMouseMove = Od()(gd.triggeredAfterMouseMove, null !== (Pd = dd.throttleDelay) && void 0 !== Pd ? Pd : 1e3 / 60), gd.state = {}, gd
            }
            return function(dd, Jd) {
              if ("function" !== typeof Jd && null !== Jd) throw new TypeError("Super expression must either be null or a function");
              dd.prototype = Object.create(Jd && Jd.prototype, {
                constructor: {
                  value: dd,
                  writable: !0,
                  configurable: !0
                }
              }), Object.defineProperty(dd, "prototype", {
                writable: !1
              }), Jd && Gk(dd, Jd)
            }(kd, dd), Nd = kd, gd = [{
              key: "componentDidMount",
              value: function() {
                var dd, Jd;
                this.addListener(), this.accessibilityManager.setDetails({
                  container: this.container,
                  offset: {
                    left: null !== (dd = this.props.margin.left) && void 0 !== dd ? dd : 0,
                    top: null !== (Jd = this.props.margin.top) && void 0 !== Jd ? Jd : 0
                  },
                  coordinateList: this.state.tooltipTicks,
                  mouseHandlerCallback: this.triggeredAfterMouseMove,
                  layout: this.props.layout
                }), this.displayDefaultTooltip()
              }
            }, {
              key: "displayDefaultTooltip",
              value: function() {
                var dd = this.props,
                  Jd = dd.children,
                  kd = dd.data,
                  pd = dd.height,
                  Nd = dd.layout,
                  Wd = (0, sd.m)(Jd, vd.e);
                if (Wd) {
                  var Pd = Wd.props.defaultIndex;
                  if (!("number" !== typeof Pd || Pd < 0 || Pd > this.state.tooltipTicks.length - 1)) {
                    var Zd = this.state.tooltipTicks[Pd] && this.state.tooltipTicks[Pd].value,
                      gd = jk(this.state, kd, Pd, Zd),
                      Cd = this.state.tooltipTicks[Pd].coordinate,
                      Kd = (this.state.offset.top + pd) / 2,
                      od = "horizontal" === Nd ? {
                        x: Cd,
                        y: Kd
                      } : {
                        y: Cd,
                        x: Kd
                      },
                      ld = this.state.formattedGraphicalItems.find((function(dd) {
                        return "Scatter" === dd.item.type.name
                      }));
                    ld && (od = sk(sk({}, od), ld.props.points[Pd].tooltipPosition), gd = ld.props.points[Pd].tooltipPayload);
                    var Qd = {
                      activeTooltipIndex: Pd,
                      isTooltipActive: !0,
                      activeLabel: Zd,
                      activePayload: gd,
                      activeCoordinate: od
                    };
                    this.setState(Qd), this.renderCursor(Wd), this.accessibilityManager.setIndex(Pd)
                  }
                }
              }
            }, {
              key: "getSnapshotBeforeUpdate",
              value: function(dd, Jd) {
                return this.props.accessibilityLayer ? (this.state.tooltipTicks !== Jd.tooltipTicks && this.accessibilityManager.setDetails({
                  coordinateList: this.state.tooltipTicks
                }), this.props.layout !== dd.layout && this.accessibilityManager.setDetails({
                  layout: this.props.layout
                }), this.props.margin !== dd.margin && this.accessibilityManager.setDetails({
                  offset: {
                    left: null !== (kd = this.props.margin.left) && void 0 !== kd ? kd : 0,
                    top: null !== (pd = this.props.margin.top) && void 0 !== pd ? pd : 0
                  }
                }), null) : null;
                var kd, pd
              }
            }, {
              key: "componentDidUpdate",
              value: function(dd) {
                (0, sd.t)([(0, sd.m)(dd.children, vd.e)], [(0, sd.m)(this.props.children, vd.e)]) || this.displayDefaultTooltip()
              }
            }, {
              key: "componentWillUnmount",
              value: function() {
                this.removeListener(), this.throttleTriggeredAfterMouseMove.cancel()
              }
            }, {
              key: "getTooltipEventType",
              value: function() {
                var dd = (0, sd.m)(this.props.children, vd.e);
                if (dd && "boolean" === typeof dd.props.shared) {
                  var Jd = dd.props.shared ? "axis" : "item";
                  return Cd.indexOf(Jd) >= 0 ? Jd : Pd
                }
                return Pd
              }
            }, {
              key: "getMouseInfo",
              value: function(dd) {
                if (!this.container) return null;
                var Jd = this.container,
                  kd = Jd.getBoundingClientRect(),
                  pd = (0, zd.e)(kd),
                  Nd = {
                    chartX: Math.round(dd.pageX - pd.left),
                    chartY: Math.round(dd.pageY - pd.top)
                  },
                  Wd = kd.width / Jd.offsetWidth || 1,
                  Pd = this.inRange(Nd.chartX, Nd.chartY, Wd);
                if (!Pd) return null;
                var Zd = this.state,
                  gd = Zd.xAxisMap,
                  Cd = Zd.yAxisMap,
                  Kd = this.getTooltipEventType(),
                  od = Xk(this.state, this.props.data, this.props.layout, Pd);
                if ("axis" !== Kd && gd && Cd) {
                  var ld = (0, Yd.i)(gd).scale,
                    Qd = (0, Yd.i)(Cd).scale,
                    Ld = ld && ld.invert ? ld.invert(Nd.chartX) : null,
                    Od = Qd && Qd.invert ? Qd.invert(Nd.chartY) : null;
                  return sk(sk({}, Nd), {}, {
                    xValue: Ld,
                    yValue: Od
                  }, od)
                }
                return od ? sk(sk({}, Nd), od) : null
              }
            }, {
              key: "inRange",
              value: function(dd, Jd) {
                var kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                  pd = this.props.layout,
                  Nd = dd / kd,
                  Wd = Jd / kd;
                if ("horizontal" === pd || "vertical" === pd) {
                  var Pd = this.state.offset;
                  return Nd >= Pd.left && Nd <= Pd.left + Pd.width && Wd >= Pd.top && Wd <= Pd.top + Pd.height ? {
                    x: Nd,
                    y: Wd
                  } : null
                }
                var Zd = this.state,
                  gd = Zd.angleAxisMap,
                  Cd = Zd.radiusAxisMap;
                if (gd && Cd) {
                  var Kd = (0, Yd.i)(gd);
                  return (0, mJ.f)({
                    x: Nd,
                    y: Wd
                  }, Kd)
                }
                return null
              }
            }, {
              key: "parseEventsOfWrapper",
              value: function() {
                var dd = this.props.children,
                  Jd = this.getTooltipEventType(),
                  kd = (0, sd.m)(dd, vd.e),
                  pd = {};
                return kd && "axis" === Jd && (pd = "click" === kd.props.trigger ? {
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
                }), sk(sk({}, (0, fJ.j)(this.props, this.handleOuterEvent)), pd)
              }
            }, {
              key: "addListener",
              value: function() {
                jJ.on(XJ, this.handleReceiveSyncEvent)
              }
            }, {
              key: "removeListener",
              value: function() {
                jJ.removeListener(XJ, this.handleReceiveSyncEvent)
              }
            }, {
              key: "filterFormatItem",
              value: function(dd, Jd, kd) {
                for (var pd = this.state.formattedGraphicalItems, Nd = 0, Wd = pd.length; Nd < Wd; Nd++) {
                  var Pd = pd[Nd];
                  if (Pd.item === dd || Pd.props.key === dd.key || Jd === (0, sd.q)(Pd.item.type) && kd === Pd.childIndex) return Pd
                }
                return null
              }
            }, {
              key: "renderClipPath",
              value: function() {
                var dd = this.clipPathId,
                  Jd = this.state.offset,
                  kd = Jd.left,
                  Nd = Jd.top,
                  Wd = Jd.height,
                  Pd = Jd.width;
                return pd.createElement("defs", null, pd.createElement("clipPath", {
                  id: dd
                }, pd.createElement("rect", {
                  x: kd,
                  y: Nd,
                  height: Wd,
                  width: Pd
                })))
              }
            }, {
              key: "getXScales",
              value: function() {
                var dd = this.state.xAxisMap;
                return dd ? Object.entries(dd).reduce((function(dd, Jd) {
                  var kd = Qk(Jd, 2),
                    pd = kd[0],
                    Nd = kd[1];
                  return sk(sk({}, dd), {}, ik({}, pd, Nd.scale))
                }), {}) : null
              }
            }, {
              key: "getYScales",
              value: function() {
                var dd = this.state.yAxisMap;
                return dd ? Object.entries(dd).reduce((function(dd, Jd) {
                  var kd = Qk(Jd, 2),
                    pd = kd[0],
                    Nd = kd[1];
                  return sk(sk({}, dd), {}, ik({}, pd, Nd.scale))
                }), {}) : null
              }
            }, {
              key: "getXScaleByAxisId",
              value: function(dd) {
                var Jd;
                return null === (Jd = this.state.xAxisMap) || void 0 === Jd || null === (Jd = Jd[dd]) || void 0 === Jd ? void 0 : Jd.scale
              }
            }, {
              key: "getYScaleByAxisId",
              value: function(dd) {
                var Jd;
                return null === (Jd = this.state.yAxisMap) || void 0 === Jd || null === (Jd = Jd[dd]) || void 0 === Jd ? void 0 : Jd.scale
              }
            }, {
              key: "getItemByXY",
              value: function(dd) {
                var Jd = this.state,
                  kd = Jd.formattedGraphicalItems,
                  pd = Jd.activeItem;
                if (kd && kd.length)
                  for (var Nd = 0, Wd = kd.length; Nd < Wd; Nd++) {
                    var Pd = kd[Nd],
                      Zd = Pd.props,
                      gd = Pd.item,
                      Cd = void 0 !== gd.type.defaultProps ? sk(sk({}, gd.type.defaultProps), gd.props) : gd.props,
                      Kd = (0, sd.q)(gd.type);
                    if ("Bar" === Kd) {
                      var od = (Zd.data || []).find((function(Jd) {
                        return (0, Bd.f)(dd, Jd)
                      }));
                      if (od) return {
                        graphicalItem: Pd,
                        payload: od
                      }
                    } else if ("RadialBar" === Kd) {
                      var ld = (Zd.data || []).find((function(Jd) {
                        return (0, mJ.f)(dd, Jd)
                      }));
                      if (ld) return {
                        graphicalItem: Pd,
                        payload: ld
                      }
                    } else if ((0, EJ.i)(Pd, pd) || (0, EJ.l)(Pd, pd) || (0, EJ.m)(Pd, pd)) {
                      var Qd = (0, EJ.f)({
                          graphicalItem: Pd,
                          activeTooltipItem: pd,
                          itemData: Cd.data
                        }),
                        Ld = void 0 === Cd.activeIndex ? Qd : Cd.activeIndex;
                      return {
                        graphicalItem: sk(sk({}, Pd), {}, {
                          childIndex: Ld
                        }),
                        payload: (0, EJ.m)(Pd, pd) ? Cd.data[Qd] : Pd.props.data[Qd]
                      }
                    }
                  }
                return null
              }
            }, {
              key: "render",
              value: function() {
                var dd = this;
                if (!(0, sd.A)(this)) return null;
                var Jd, kd, Nd = this.props,
                  Wd = Nd.children,
                  Pd = Nd.className,
                  Zd = Nd.width,
                  gd = Nd.height,
                  Cd = Nd.style,
                  Kd = Nd.compact,
                  od = Nd.title,
                  ld = Nd.desc,
                  Qd = Lk(Nd, Ck),
                  Ld = (0, sd.e)(Qd, !1);
                if (Kd) return pd.createElement(Zk.b, {
                  state: this.state,
                  width: this.props.width,
                  height: this.props.height,
                  clipPathId: this.clipPathId
                }, pd.createElement(Id.c, lk({}, Ld, {
                  width: Zd,
                  height: gd,
                  title: od,
                  desc: ld
                }), this.renderClipPath(), (0, sd.z)(Wd, this.renderMap)));
                this.props.accessibilityLayer && (Ld.tabIndex = null !== (Jd = this.props.tabIndex) && void 0 !== Jd ? Jd : 0, Ld.role = null !== (kd = this.props.role) && void 0 !== kd ? kd : "application", Ld.onKeyDown = function(Jd) {
                  dd.accessibilityManager.keyboardEvent(Jd)
                }, Ld.onFocus = function() {
                  dd.accessibilityManager.focus()
                });
                var Od = this.parseEventsOfWrapper();
                return pd.createElement(Zk.b, {
                  state: this.state,
                  width: this.props.width,
                  height: this.props.height,
                  clipPathId: this.clipPathId
                }, pd.createElement("div", lk({
                  className: (0, ed.b)("recharts-wrapper", Pd),
                  style: sk({
                    position: "relative",
                    cursor: "default",
                    width: Zd,
                    height: gd
                  }, Cd)
                }, Od, {
                  ref: function(Jd) {
                    dd.container = Jd
                  }
                }), pd.createElement(Id.c, lk({}, Ld, {
                  width: Zd,
                  height: gd,
                  title: od,
                  desc: ld,
                  style: Fk
                }), this.renderClipPath(), (0, sd.z)(Wd, this.renderMap)), this.renderLegend(), this.renderTooltip()))
              }
            }], gd && Ok(Nd.prototype, gd), Kd && Ok(Nd, Kd), Object.defineProperty(Nd, "prototype", {
              writable: !1
            }), Nd;
            var Nd, gd, Kd
          }(pd.Component);
        ik(bd, "displayName", Jd), ik(bd, "defaultProps", sk({
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
        }, ad)), ik(bd, "getDerivedStateFromProps", (function(dd, Jd) {
          var kd = dd.dataKey,
            pd = dd.data,
            Nd = dd.children,
            Pd = dd.width,
            Zd = dd.height,
            gd = dd.layout,
            Cd = dd.stackOffset,
            Kd = dd.margin,
            od = Jd.dataStartIndex,
            ld = Jd.dataEndIndex;
          if (void 0 === Jd.updateId) {
            var Qd = Uk(dd);
            return sk(sk(sk({}, Qd), {}, {
              updateId: 0
            }, md(sk(sk({
              props: dd
            }, Qd), {}, {
              updateId: 0
            }), Jd)), {}, {
              prevDataKey: kd,
              prevData: pd,
              prevWidth: Pd,
              prevHeight: Zd,
              prevLayout: gd,
              prevStackOffset: Cd,
              prevMargin: Kd,
              prevChildren: Nd
            })
          }
          if (kd !== Jd.prevDataKey || pd !== Jd.prevData || Pd !== Jd.prevWidth || Zd !== Jd.prevHeight || gd !== Jd.prevLayout || Cd !== Jd.prevStackOffset || !(0, bJ.d)(Kd, Jd.prevMargin)) {
            var Ld = Uk(dd),
              Od = {
                chartX: Jd.chartX,
                chartY: Jd.chartY,
                isTooltipActive: Jd.isTooltipActive
              },
              ed = sk(sk({}, Xk(Jd, pd, gd)), {}, {
                updateId: Jd.updateId + 1
              }),
              Rd = sk(sk(sk({}, Ld), Od), ed);
            return sk(sk(sk({}, Rd), md(sk({
              props: dd
            }, Rd), Jd)), {}, {
              prevDataKey: kd,
              prevData: pd,
              prevWidth: Pd,
              prevHeight: Zd,
              prevLayout: gd,
              prevStackOffset: Cd,
              prevMargin: Kd,
              prevChildren: Nd
            })
          }
          if (!(0, sd.t)(Nd, Jd.prevChildren)) {
            var Id, Gd, vd, xd, qd = (0, sd.m)(Nd, Vd),
              Bd = qd && null !== (Id = null === (Gd = qd.props) || void 0 === Gd ? void 0 : Gd.startIndex) && void 0 !== Id ? Id : od,
              ad = qd && null !== (vd = null === (xd = qd.props) || void 0 === xd ? void 0 : xd.endIndex) && void 0 !== vd ? vd : ld,
              Md = Bd !== od || ad !== ld,
              Fd = !Wd()(pd) && !Md ? Jd.updateId : Jd.updateId + 1;
            return sk(sk({
              updateId: Fd
            }, md(sk(sk({
              props: dd
            }, Jd), {}, {
              updateId: Fd,
              dataStartIndex: Bd,
              dataEndIndex: ad
            }), Jd)), {}, {
              prevChildren: Nd,
              dataStartIndex: Bd,
              dataEndIndex: ad
            })
          }
          return null
        })), ik(bd, "renderActiveDot", (function(dd, Jd, kd) {
          var Nd;
          return Nd = (0, pd.isValidElement)(dd) ? (0, pd.cloneElement)(dd, Jd) : Zd()(dd) ? dd(Jd) : pd.createElement(qd.e, Jd), pd.createElement(Gd.e, {
            className: "recharts-active-dot",
            key: kd
          }, Nd)
        }));
        var Sd = (0, pd.forwardRef)((function(dd, Jd) {
          return pd.createElement(bd, lk({}, dd, {
            ref: Jd
          }))
        }));
        return Sd.displayName = bd.displayName, Sd
      }
  },
  6149: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => pd
    });
    var pd = function(dd) {
      return null
    };
    pd.displayName = "Cell"
  },
  6107: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => md
    });
    var pd = kd(56),
      Nd = kd(5289),
      Wd = kd.n(Nd),
      Pd = kd(5131),
      Zd = kd.n(Pd),
      gd = kd(4952),
      Cd = kd.n(gd),
      Kd = kd(4935),
      od = kd(6001),
      ld = kd(5297),
      Qd = kd(5029),
      Ld = kd(6110);

    function Od(dd) {
      return Od = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(dd) {
        return typeof dd
      } : function(dd) {
        return dd && "function" == typeof Symbol && dd.constructor === Symbol && dd !== Symbol.prototype ? "symbol" : typeof dd
      }, Od(dd)
    }
    var ed = ["offset"];

    function Rd(dd) {
      return function(dd) {
        if (Array.isArray(dd)) return Id(dd)
      }(dd) || function(dd) {
        if ("undefined" !== typeof Symbol && null != dd[Symbol.iterator] || null != dd["@@iterator"]) return Array.from(dd)
      }(dd) || function(dd, Jd) {
        if (!dd) return;
        if ("string" === typeof dd) return Id(dd, Jd);
        var kd = Object.prototype.toString.call(dd).slice(8, -1);
        "Object" === kd && dd.constructor && (kd = dd.constructor.name);
        if ("Map" === kd || "Set" === kd) return Array.from(dd);
        if ("Arguments" === kd || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(kd)) return Id(dd, Jd)
      }(dd) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Id(dd, Jd) {
      (null == Jd || Jd > dd.length) && (Jd = dd.length);
      for (var kd = 0, pd = new Array(Jd); kd < Jd; kd++) pd[kd] = dd[kd];
      return pd
    }

    function Gd(dd, Jd) {
      if (null == dd) return {};
      var kd, pd, Nd = function(dd, Jd) {
        if (null == dd) return {};
        var kd = {};
        for (var pd in dd)
          if (Object.prototype.hasOwnProperty.call(dd, pd)) {
            if (Jd.indexOf(pd) >= 0) continue;
            kd[pd] = dd[pd]
          } return kd
      }(dd, Jd);
      if (Object.getOwnPropertySymbols) {
        var Wd = Object.getOwnPropertySymbols(dd);
        for (pd = 0; pd < Wd.length; pd++) kd = Wd[pd], Jd.indexOf(kd) >= 0 || Object.prototype.propertyIsEnumerable.call(dd, kd) && (Nd[kd] = dd[kd])
      }
      return Nd
    }

    function vd(dd, Jd) {
      var kd = Object.keys(dd);
      if (Object.getOwnPropertySymbols) {
        var pd = Object.getOwnPropertySymbols(dd);
        Jd && (pd = pd.filter((function(Jd) {
          return Object.getOwnPropertyDescriptor(dd, Jd).enumerable
        }))), kd.push.apply(kd, pd)
      }
      return kd
    }

    function xd(dd) {
      for (var Jd = 1; Jd < arguments.length; Jd++) {
        var kd = null != arguments[Jd] ? arguments[Jd] : {};
        Jd % 2 ? vd(Object(kd), !0).forEach((function(Jd) {
          qd(dd, Jd, kd[Jd])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(dd, Object.getOwnPropertyDescriptors(kd)) : vd(Object(kd)).forEach((function(Jd) {
          Object.defineProperty(dd, Jd, Object.getOwnPropertyDescriptor(kd, Jd))
        }))
      }
      return dd
    }

    function qd(dd, Jd, kd) {
      return (Jd = function(dd) {
        var Jd = function(dd, Jd) {
          if ("object" != Od(dd) || !dd) return dd;
          var kd = dd[Symbol.toPrimitive];
          if (void 0 !== kd) {
            var pd = kd.call(dd, Jd || "default");
            if ("object" != Od(pd)) return pd;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === Jd ? String : Number)(dd)
        }(dd, "string");
        return "symbol" == Od(Jd) ? Jd : Jd + ""
      }(Jd)) in dd ? Object.defineProperty(dd, Jd, {
        value: kd,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : dd[Jd] = kd, dd
    }

    function Bd() {
      return Bd = Object.assign ? Object.assign.bind() : function(dd) {
        for (var Jd = 1; Jd < arguments.length; Jd++) {
          var kd = arguments[Jd];
          for (var pd in kd) Object.prototype.hasOwnProperty.call(kd, pd) && (dd[pd] = kd[pd])
        }
        return dd
      }, Bd.apply(this, arguments)
    }
    var sd = function(dd) {
        var Jd = dd.value,
          kd = dd.formatter,
          pd = Wd()(dd.children) ? Jd : dd.children;
        return Zd()(kd) ? kd(pd) : pd
      },
      ad = function(dd, Jd, kd) {
        var Nd, Pd, Zd = dd.position,
          gd = dd.viewBox,
          Cd = dd.offset,
          od = dd.className,
          ld = gd,
          Od = ld.cx,
          ed = ld.cy,
          Rd = ld.innerRadius,
          Id = ld.outerRadius,
          Gd = ld.startAngle,
          vd = ld.endAngle,
          xd = ld.clockWise,
          qd = (Rd + Id) / 2,
          sd = function(dd, Jd) {
            return (0, Qd.D)(Jd - dd) * Math.min(Math.abs(Jd - dd), 360)
          }(Gd, vd),
          ad = sd >= 0 ? 1 : -1;
        "insideStart" === Zd ? (Nd = Gd + ad * Cd, Pd = xd) : "insideEnd" === Zd ? (Nd = vd - ad * Cd, Pd = !xd) : "end" === Zd && (Nd = vd + ad * Cd, Pd = xd), Pd = sd <= 0 ? Pd : !Pd;
        var Md = (0, Ld.j)(Od, ed, qd, Nd),
          Fd = (0, Ld.j)(Od, ed, qd, Nd + 359 * (Pd ? 1 : -1)),
          Yd = "M".concat(Md.x, ",").concat(Md.y, "\n    A").concat(qd, ",").concat(qd, ",0,1,").concat(Pd ? 0 : 1, ",\n    ").concat(Fd.x, ",").concat(Fd.y),
          md = Wd()(dd.id) ? (0, Qd.G)("recharts-radial-line-") : dd.id;
        return pd.createElement("text", Bd({}, kd, {
          dominantBaseline: "central",
          className: (0, Kd.b)("recharts-radial-bar-label", od)
        }), pd.createElement("defs", null, pd.createElement("path", {
          id: md,
          d: Yd
        })), pd.createElement("textPath", {
          xlinkHref: "#".concat(md)
        }, Jd))
      },
      Md = function(dd) {
        var Jd = dd.viewBox,
          kd = dd.offset,
          pd = dd.position,
          Nd = Jd,
          Wd = Nd.cx,
          Pd = Nd.cy,
          Zd = Nd.innerRadius,
          gd = Nd.outerRadius,
          Cd = (Nd.startAngle + Nd.endAngle) / 2;
        if ("outside" === pd) {
          var Kd = (0, Ld.j)(Wd, Pd, gd + kd, Cd),
            od = Kd.x;
          return {
            x: od,
            y: Kd.y,
            textAnchor: od >= Wd ? "start" : "end",
            verticalAnchor: "middle"
          }
        }
        if ("center" === pd) return {
          x: Wd,
          y: Pd,
          textAnchor: "middle",
          verticalAnchor: "middle"
        };
        if ("centerTop" === pd) return {
          x: Wd,
          y: Pd,
          textAnchor: "middle",
          verticalAnchor: "start"
        };
        if ("centerBottom" === pd) return {
          x: Wd,
          y: Pd,
          textAnchor: "middle",
          verticalAnchor: "end"
        };
        var ld = (Zd + gd) / 2,
          Qd = (0, Ld.j)(Wd, Pd, ld, Cd);
        return {
          x: Qd.x,
          y: Qd.y,
          textAnchor: "middle",
          verticalAnchor: "middle"
        }
      },
      Fd = function(dd) {
        var Jd = dd.viewBox,
          kd = dd.parentViewBox,
          pd = dd.offset,
          Nd = dd.position,
          Wd = Jd,
          Pd = Wd.x,
          Zd = Wd.y,
          gd = Wd.width,
          Kd = Wd.height,
          od = Kd >= 0 ? 1 : -1,
          ld = od * pd,
          Ld = od > 0 ? "end" : "start",
          Od = od > 0 ? "start" : "end",
          ed = gd >= 0 ? 1 : -1,
          Rd = ed * pd,
          Id = ed > 0 ? "end" : "start",
          Gd = ed > 0 ? "start" : "end";
        if ("top" === Nd) return xd(xd({}, {
          x: Pd + gd / 2,
          y: Zd - od * pd,
          textAnchor: "middle",
          verticalAnchor: Ld
        }), kd ? {
          height: Math.max(Zd - kd.y, 0),
          width: gd
        } : {});
        if ("bottom" === Nd) return xd(xd({}, {
          x: Pd + gd / 2,
          y: Zd + Kd + ld,
          textAnchor: "middle",
          verticalAnchor: Od
        }), kd ? {
          height: Math.max(kd.y + kd.height - (Zd + Kd), 0),
          width: gd
        } : {});
        if ("left" === Nd) {
          var vd = {
            x: Pd - Rd,
            y: Zd + Kd / 2,
            textAnchor: Id,
            verticalAnchor: "middle"
          };
          return xd(xd({}, vd), kd ? {
            width: Math.max(vd.x - kd.x, 0),
            height: Kd
          } : {})
        }
        if ("right" === Nd) {
          var qd = {
            x: Pd + gd + Rd,
            y: Zd + Kd / 2,
            textAnchor: Gd,
            verticalAnchor: "middle"
          };
          return xd(xd({}, qd), kd ? {
            width: Math.max(kd.x + kd.width - qd.x, 0),
            height: Kd
          } : {})
        }
        var Bd = kd ? {
          width: gd,
          height: Kd
        } : {};
        return "insideLeft" === Nd ? xd({
          x: Pd + Rd,
          y: Zd + Kd / 2,
          textAnchor: Gd,
          verticalAnchor: "middle"
        }, Bd) : "insideRight" === Nd ? xd({
          x: Pd + gd - Rd,
          y: Zd + Kd / 2,
          textAnchor: Id,
          verticalAnchor: "middle"
        }, Bd) : "insideTop" === Nd ? xd({
          x: Pd + gd / 2,
          y: Zd + ld,
          textAnchor: "middle",
          verticalAnchor: Od
        }, Bd) : "insideBottom" === Nd ? xd({
          x: Pd + gd / 2,
          y: Zd + Kd - ld,
          textAnchor: "middle",
          verticalAnchor: Ld
        }, Bd) : "insideTopLeft" === Nd ? xd({
          x: Pd + Rd,
          y: Zd + ld,
          textAnchor: Gd,
          verticalAnchor: Od
        }, Bd) : "insideTopRight" === Nd ? xd({
          x: Pd + gd - Rd,
          y: Zd + ld,
          textAnchor: Id,
          verticalAnchor: Od
        }, Bd) : "insideBottomLeft" === Nd ? xd({
          x: Pd + Rd,
          y: Zd + Kd - ld,
          textAnchor: Gd,
          verticalAnchor: Ld
        }, Bd) : "insideBottomRight" === Nd ? xd({
          x: Pd + gd - Rd,
          y: Zd + Kd - ld,
          textAnchor: Id,
          verticalAnchor: Ld
        }, Bd) : Cd()(Nd) && ((0, Qd.B)(Nd.x) || (0, Qd.C)(Nd.x)) && ((0, Qd.B)(Nd.y) || (0, Qd.C)(Nd.y)) ? xd({
          x: Pd + (0, Qd.m)(Nd.x, gd),
          y: Zd + (0, Qd.m)(Nd.y, Kd),
          textAnchor: "end",
          verticalAnchor: "end"
        }, Bd) : xd({
          x: Pd + gd / 2,
          y: Zd + Kd / 2,
          textAnchor: "middle",
          verticalAnchor: "middle"
        }, Bd)
      },
      Yd = function(dd) {
        return "cx" in dd && (0, Qd.B)(dd.cx)
      };

    function md(dd) {
      var Jd, kd = dd.offset,
        Nd = xd({
          offset: void 0 === kd ? 5 : kd
        }, Gd(dd, ed)),
        Pd = Nd.viewBox,
        gd = Nd.position,
        Cd = Nd.value,
        Qd = Nd.children,
        Ld = Nd.content,
        Od = Nd.className,
        Rd = void 0 === Od ? "" : Od,
        Id = Nd.textBreakAll;
      if (!Pd || Wd()(Cd) && Wd()(Qd) && !(0, pd.isValidElement)(Ld) && !Zd()(Ld)) return null;
      if ((0, pd.isValidElement)(Ld)) return (0, pd.cloneElement)(Ld, Nd);
      if (Zd()(Ld)) {
        if (Jd = (0, pd.createElement)(Ld, Nd), (0, pd.isValidElement)(Jd)) return Jd
      } else Jd = sd(Nd);
      var vd = Yd(Pd),
        qd = (0, ld.e)(Nd, !0);
      if (vd && ("insideStart" === gd || "insideEnd" === gd || "end" === gd)) return ad(Nd, Jd, qd);
      var md = vd ? Md(Nd) : Fd(Nd);
      return pd.createElement(od.c, Bd({
        className: (0, Kd.b)("recharts-label", Rd)
      }, qd, md, {
        breakAll: Id
      }), Jd)
    }
    md.displayName = "Label";
    var bd = function(dd) {
      var Jd = dd.cx,
        kd = dd.cy,
        pd = dd.angle,
        Nd = dd.startAngle,
        Wd = dd.endAngle,
        Pd = dd.r,
        Zd = dd.radius,
        gd = dd.innerRadius,
        Cd = dd.outerRadius,
        Kd = dd.x,
        od = dd.y,
        ld = dd.top,
        Ld = dd.left,
        Od = dd.width,
        ed = dd.height,
        Rd = dd.clockWise,
        Id = dd.labelViewBox;
      if (Id) return Id;
      if ((0, Qd.B)(Od) && (0, Qd.B)(ed)) {
        if ((0, Qd.B)(Kd) && (0, Qd.B)(od)) return {
          x: Kd,
          y: od,
          width: Od,
          height: ed
        };
        if ((0, Qd.B)(ld) && (0, Qd.B)(Ld)) return {
          x: ld,
          y: Ld,
          width: Od,
          height: ed
        }
      }
      return (0, Qd.B)(Kd) && (0, Qd.B)(od) ? {
        x: Kd,
        y: od,
        width: 0,
        height: 0
      } : (0, Qd.B)(Jd) && (0, Qd.B)(kd) ? {
        cx: Jd,
        cy: kd,
        startAngle: Nd || pd || 0,
        endAngle: Wd || pd || 0,
        innerRadius: gd || 0,
        outerRadius: Cd || Zd || Pd || 0,
        clockWise: Rd
      } : dd.viewBox ? dd.viewBox : {}
    };
    md.parseViewBox = bd, md.renderCallByParent = function(dd, Jd) {
      var kd = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!dd || !dd.children && kd && !dd.label) return null;
      var Nd = dd.children,
        Wd = bd(dd),
        Pd = (0, ld.i)(Nd, md).map((function(dd, kd) {
          return (0, pd.cloneElement)(dd, {
            viewBox: Jd || Wd,
            key: "label-".concat(kd)
          })
        }));
      if (!kd) return Pd;
      var gd = function(dd, Jd) {
        return dd ? !0 === dd ? pd.createElement(md, {
          key: "label-implicit",
          viewBox: Jd
        }) : (0, Qd.z)(dd) ? pd.createElement(md, {
          key: "label-implicit",
          viewBox: Jd,
          value: dd
        }) : (0, pd.isValidElement)(dd) ? dd.type === md ? (0, pd.cloneElement)(dd, {
          key: "label-implicit",
          viewBox: Jd
        }) : pd.createElement(md, {
          key: "label-implicit",
          content: dd,
          viewBox: Jd
        }) : Zd()(dd) ? pd.createElement(md, {
          key: "label-implicit",
          content: dd,
          viewBox: Jd
        }) : Cd()(dd) ? pd.createElement(md, Bd({
          viewBox: Jd
        }, dd, {
          key: "label-implicit"
        })) : null : null
      }(dd.label, Jd || Wd);
      return [gd].concat(Rd(Pd))
    }
  },
  6152: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Fd
    });
    var pd = kd(56),
      Nd = kd(5289),
      Wd = kd.n(Nd),
      Pd = kd(4952),
      Zd = kd.n(Pd),
      gd = kd(5131),
      Cd = kd.n(gd),
      Kd = kd(6154),
      od = kd.n(Kd),
      ld = kd(6107),
      Qd = kd(5843),
      Ld = kd(5297),
      Od = kd(6019);

    function ed(dd) {
      return ed = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(dd) {
        return typeof dd
      } : function(dd) {
        return dd && "function" == typeof Symbol && dd.constructor === Symbol && dd !== Symbol.prototype ? "symbol" : typeof dd
      }, ed(dd)
    }
    var Rd = ["valueAccessor"],
      Id = ["data", "dataKey", "clockWise", "id", "textBreakAll"];

    function Gd(dd) {
      return function(dd) {
        if (Array.isArray(dd)) return vd(dd)
      }(dd) || function(dd) {
        if ("undefined" !== typeof Symbol && null != dd[Symbol.iterator] || null != dd["@@iterator"]) return Array.from(dd)
      }(dd) || function(dd, Jd) {
        if (!dd) return;
        if ("string" === typeof dd) return vd(dd, Jd);
        var kd = Object.prototype.toString.call(dd).slice(8, -1);
        "Object" === kd && dd.constructor && (kd = dd.constructor.name);
        if ("Map" === kd || "Set" === kd) return Array.from(dd);
        if ("Arguments" === kd || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(kd)) return vd(dd, Jd)
      }(dd) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function vd(dd, Jd) {
      (null == Jd || Jd > dd.length) && (Jd = dd.length);
      for (var kd = 0, pd = new Array(Jd); kd < Jd; kd++) pd[kd] = dd[kd];
      return pd
    }

    function xd() {
      return xd = Object.assign ? Object.assign.bind() : function(dd) {
        for (var Jd = 1; Jd < arguments.length; Jd++) {
          var kd = arguments[Jd];
          for (var pd in kd) Object.prototype.hasOwnProperty.call(kd, pd) && (dd[pd] = kd[pd])
        }
        return dd
      }, xd.apply(this, arguments)
    }

    function qd(dd, Jd) {
      var kd = Object.keys(dd);
      if (Object.getOwnPropertySymbols) {
        var pd = Object.getOwnPropertySymbols(dd);
        Jd && (pd = pd.filter((function(Jd) {
          return Object.getOwnPropertyDescriptor(dd, Jd).enumerable
        }))), kd.push.apply(kd, pd)
      }
      return kd
    }

    function Bd(dd) {
      for (var Jd = 1; Jd < arguments.length; Jd++) {
        var kd = null != arguments[Jd] ? arguments[Jd] : {};
        Jd % 2 ? qd(Object(kd), !0).forEach((function(Jd) {
          sd(dd, Jd, kd[Jd])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(dd, Object.getOwnPropertyDescriptors(kd)) : qd(Object(kd)).forEach((function(Jd) {
          Object.defineProperty(dd, Jd, Object.getOwnPropertyDescriptor(kd, Jd))
        }))
      }
      return dd
    }

    function sd(dd, Jd, kd) {
      return (Jd = function(dd) {
        var Jd = function(dd, Jd) {
          if ("object" != ed(dd) || !dd) return dd;
          var kd = dd[Symbol.toPrimitive];
          if (void 0 !== kd) {
            var pd = kd.call(dd, Jd || "default");
            if ("object" != ed(pd)) return pd;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === Jd ? String : Number)(dd)
        }(dd, "string");
        return "symbol" == ed(Jd) ? Jd : Jd + ""
      }(Jd)) in dd ? Object.defineProperty(dd, Jd, {
        value: kd,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : dd[Jd] = kd, dd
    }

    function ad(dd, Jd) {
      if (null == dd) return {};
      var kd, pd, Nd = function(dd, Jd) {
        if (null == dd) return {};
        var kd = {};
        for (var pd in dd)
          if (Object.prototype.hasOwnProperty.call(dd, pd)) {
            if (Jd.indexOf(pd) >= 0) continue;
            kd[pd] = dd[pd]
          } return kd
      }(dd, Jd);
      if (Object.getOwnPropertySymbols) {
        var Wd = Object.getOwnPropertySymbols(dd);
        for (pd = 0; pd < Wd.length; pd++) kd = Wd[pd], Jd.indexOf(kd) >= 0 || Object.prototype.propertyIsEnumerable.call(dd, kd) && (Nd[kd] = dd[kd])
      }
      return Nd
    }
    var Md = function(dd) {
      return Array.isArray(dd.value) ? od()(dd.value) : dd.value
    };

    function Fd(dd) {
      var Jd = dd.valueAccessor,
        kd = void 0 === Jd ? Md : Jd,
        Nd = ad(dd, Rd),
        Pd = Nd.data,
        Zd = Nd.dataKey,
        gd = Nd.clockWise,
        Cd = Nd.id,
        Kd = Nd.textBreakAll,
        od = ad(Nd, Id);
      return Pd && Pd.length ? pd.createElement(Qd.e, {
        className: "recharts-label-list"
      }, Pd.map((function(dd, Jd) {
        var Nd = Wd()(Zd) ? kd(dd, Jd) : (0, Od.U)(dd && dd.payload, Zd),
          Pd = Wd()(Cd) ? {} : {
            id: "".concat(Cd, "-").concat(Jd)
          };
        return pd.createElement(ld.c, xd({}, (0, Ld.e)(dd, !0), od, Pd, {
          parentViewBox: dd.parentViewBox,
          value: Nd,
          textBreakAll: Kd,
          viewBox: ld.c.parseViewBox(Wd()(gd) ? dd : Bd(Bd({}, dd), {}, {
            clockWise: gd
          })),
          key: "label-".concat(Jd),
          index: Jd
        }))
      }))) : null
    }
    Fd.displayName = "LabelList", Fd.renderCallByParent = function(dd, Jd) {
      var kd = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!dd || !dd.children && kd && !dd.label) return null;
      var Nd = dd.children,
        Wd = (0, Ld.i)(Nd, Fd).map((function(dd, kd) {
          return (0, pd.cloneElement)(dd, {
            data: Jd,
            key: "labelList-".concat(kd)
          })
        }));
      return kd ? [function(dd, Jd) {
        return dd ? !0 === dd ? pd.createElement(Fd, {
          key: "labelList-implicit",
          data: Jd
        }) : pd.isValidElement(dd) || Cd()(dd) ? pd.createElement(Fd, {
          key: "labelList-implicit",
          data: Jd,
          content: dd
        }) : Zd()(dd) ? pd.createElement(Fd, xd({
          data: Jd
        }, dd, {
          key: "labelList-implicit"
        })) : null : null
      }(dd.label, Jd)].concat(Gd(Wd)) : Wd
    }
  },
  5911: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Dd
    });
    var pd = kd(56),
      Nd = kd(5131),
      Wd = kd.n(Nd),
      Pd = kd(4935),
      Zd = kd(5295),
      gd = kd(5841),
      Cd = kd(5913),
      Kd = kd(5317);

    function od(dd) {
      return od = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(dd) {
        return typeof dd
      } : function(dd) {
        return dd && "function" == typeof Symbol && dd.constructor === Symbol && dd !== Symbol.prototype ? "symbol" : typeof dd
      }, od(dd)
    }

    function ld() {
      return ld = Object.assign ? Object.assign.bind() : function(dd) {
        for (var Jd = 1; Jd < arguments.length; Jd++) {
          var kd = arguments[Jd];
          for (var pd in kd) Object.prototype.hasOwnProperty.call(kd, pd) && (dd[pd] = kd[pd])
        }
        return dd
      }, ld.apply(this, arguments)
    }

    function Qd(dd, Jd) {
      var kd = Object.keys(dd);
      if (Object.getOwnPropertySymbols) {
        var pd = Object.getOwnPropertySymbols(dd);
        Jd && (pd = pd.filter((function(Jd) {
          return Object.getOwnPropertyDescriptor(dd, Jd).enumerable
        }))), kd.push.apply(kd, pd)
      }
      return kd
    }

    function Ld(dd, Jd) {
      for (var kd = 0; kd < Jd.length; kd++) {
        var pd = Jd[kd];
        pd.enumerable = pd.enumerable || !1, pd.configurable = !0, "value" in pd && (pd.writable = !0), Object.defineProperty(dd, vd(pd.key), pd)
      }
    }

    function Od(dd, Jd, kd) {
      return Jd = Rd(Jd),
        function(dd, Jd) {
          if (Jd && ("object" === od(Jd) || "function" === typeof Jd)) return Jd;
          if (void 0 !== Jd) throw new TypeError("Derived constructors may only return object or undefined");
          return function(dd) {
            if (void 0 === dd) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return dd
          }(dd)
        }(dd, ed() ? Reflect.construct(Jd, kd || [], Rd(dd).constructor) : Jd.apply(dd, kd))
    }

    function ed() {
      try {
        var dd = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (dd) {}
      return (ed = function() {
        return !!dd
      })()
    }

    function Rd(dd) {
      return Rd = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(dd) {
        return dd.__proto__ || Object.getPrototypeOf(dd)
      }, Rd(dd)
    }

    function Id(dd, Jd) {
      return Id = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(dd, Jd) {
        return dd.__proto__ = Jd, dd
      }, Id(dd, Jd)
    }

    function Gd(dd, Jd, kd) {
      return (Jd = vd(Jd)) in dd ? Object.defineProperty(dd, Jd, {
        value: kd,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : dd[Jd] = kd, dd
    }

    function vd(dd) {
      var Jd = function(dd, Jd) {
        if ("object" != od(dd) || !dd) return dd;
        var kd = dd[Symbol.toPrimitive];
        if (void 0 !== kd) {
          var pd = kd.call(dd, Jd || "default");
          if ("object" != od(pd)) return pd;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Jd ? String : Number)(dd)
      }(dd, "string");
      return "symbol" == od(Jd) ? Jd : Jd + ""
    }
    var xd = 32,
      qd = function(dd) {
        function Jd() {
          return function(dd, Jd) {
            if (!(dd instanceof Jd)) throw new TypeError("Cannot call a class as a function")
          }(this, Jd), Od(this, Jd, arguments)
        }
        return function(dd, Jd) {
          if ("function" !== typeof Jd && null !== Jd) throw new TypeError("Super expression must either be null or a function");
          dd.prototype = Object.create(Jd && Jd.prototype, {
            constructor: {
              value: dd,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(dd, "prototype", {
            writable: !1
          }), Jd && Id(dd, Jd)
        }(Jd, dd), kd = Jd, Nd = [{
          key: "renderIcon",
          value: function(dd) {
            var Jd = this.props.inactiveColor,
              kd = 16,
              Nd = xd / 6,
              Wd = xd / 3,
              Pd = dd.inactive ? Jd : dd.color;
            if ("plainline" === dd.type) return pd.createElement("line", {
              strokeWidth: 4,
              fill: "none",
              stroke: Pd,
              strokeDasharray: dd.payload.strokeDasharray,
              x1: 0,
              y1: kd,
              x2: xd,
              y2: kd,
              className: "recharts-legend-icon"
            });
            if ("line" === dd.type) return pd.createElement("path", {
              strokeWidth: 4,
              fill: "none",
              stroke: Pd,
              d: "M0,".concat(kd, "h").concat(Wd, "\n            A").concat(Nd, ",").concat(Nd, ",0,1,1,").concat(2 * Wd, ",").concat(kd, "\n            H").concat(xd, "M").concat(2 * Wd, ",").concat(kd, "\n            A").concat(Nd, ",").concat(Nd, ",0,1,1,").concat(Wd, ",").concat(kd),
              className: "recharts-legend-icon"
            });
            if ("rect" === dd.type) return pd.createElement("path", {
              stroke: "none",
              fill: Pd,
              d: "M0,".concat(4, "h").concat(xd, "v").concat(24, "h").concat(-32, "z"),
              className: "recharts-legend-icon"
            });
            if (pd.isValidElement(dd.legendIcon)) {
              var Zd = function(dd) {
                for (var Jd = 1; Jd < arguments.length; Jd++) {
                  var kd = null != arguments[Jd] ? arguments[Jd] : {};
                  Jd % 2 ? Qd(Object(kd), !0).forEach((function(Jd) {
                    Gd(dd, Jd, kd[Jd])
                  })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(dd, Object.getOwnPropertyDescriptors(kd)) : Qd(Object(kd)).forEach((function(Jd) {
                    Object.defineProperty(dd, Jd, Object.getOwnPropertyDescriptor(kd, Jd))
                  }))
                }
                return dd
              }({}, dd);
              return delete Zd.legendIcon, pd.cloneElement(dd.legendIcon, Zd)
            }
            return pd.createElement(Cd.c, {
              fill: Pd,
              cx: kd,
              cy: kd,
              size: xd,
              sizeType: "diameter",
              type: dd.type
            })
          }
        }, {
          key: "renderItems",
          value: function() {
            var dd = this,
              Jd = this.props,
              kd = Jd.payload,
              Nd = Jd.iconSize,
              Cd = Jd.layout,
              od = Jd.formatter,
              Qd = Jd.inactiveColor,
              Ld = {
                x: 0,
                y: 0,
                width: xd,
                height: xd
              },
              Od = {
                display: "horizontal" === Cd ? "inline-block" : "block",
                marginRight: 10
              },
              ed = {
                display: "inline-block",
                verticalAlign: "middle",
                marginRight: 4
              };
            return kd.map((function(Jd, kd) {
              var Cd = Jd.formatter || od,
                Rd = (0, Pd.b)(Gd(Gd({
                  "recharts-legend-item": !0
                }, "legend-item-".concat(kd), !0), "inactive", Jd.inactive));
              if ("none" === Jd.type) return null;
              var Id = Wd()(Jd.value) ? null : Jd.value;
              (0, Zd.e)(!Wd()(Jd.value), 'The name property is also required when using a function for the dataKey of a chart\'s cartesian components. Ex: <Bar name="Name of my Data"/>');
              var vd = Jd.inactive ? Qd : Jd.color;
              return pd.createElement("li", ld({
                className: Rd,
                style: Od,
                key: "legend-item-".concat(kd)
              }, (0, Kd.n)(dd.props, Jd, kd)), pd.createElement(gd.c, {
                width: Nd,
                height: Nd,
                viewBox: Ld,
                style: ed
              }, dd.renderIcon(Jd)), pd.createElement("span", {
                className: "recharts-legend-item-text",
                style: {
                  color: vd
                }
              }, Cd ? Cd(Id, Jd, kd) : Id))
            }))
          }
        }, {
          key: "render",
          value: function() {
            var dd = this.props,
              Jd = dd.payload,
              kd = dd.layout,
              Nd = dd.align;
            if (!Jd || !Jd.length) return null;
            var Wd = {
              padding: 0,
              margin: 0,
              textAlign: "horizontal" === kd ? Nd : "left"
            };
            return pd.createElement("ul", {
              className: "recharts-default-legend",
              style: Wd
            }, this.renderItems())
          }
        }], Nd && Ld(kd.prototype, Nd), od && Ld(kd, od), Object.defineProperty(kd, "prototype", {
          writable: !1
        }), kd;
        var kd, Nd, od
      }(pd.PureComponent);
    Gd(qd, "displayName", "Legend"), Gd(qd, "defaultProps", {
      iconSize: 14,
      layout: "horizontal",
      align: "center",
      verticalAlign: "middle",
      inactiveColor: "#ccc"
    });
    var Bd = kd(5029),
      sd = kd(5856);

    function ad(dd) {
      return ad = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(dd) {
        return typeof dd
      } : function(dd) {
        return dd && "function" == typeof Symbol && dd.constructor === Symbol && dd !== Symbol.prototype ? "symbol" : typeof dd
      }, ad(dd)
    }
    var Md = ["ref"];

    function Fd(dd, Jd) {
      var kd = Object.keys(dd);
      if (Object.getOwnPropertySymbols) {
        var pd = Object.getOwnPropertySymbols(dd);
        Jd && (pd = pd.filter((function(Jd) {
          return Object.getOwnPropertyDescriptor(dd, Jd).enumerable
        }))), kd.push.apply(kd, pd)
      }
      return kd
    }

    function Yd(dd) {
      for (var Jd = 1; Jd < arguments.length; Jd++) {
        var kd = null != arguments[Jd] ? arguments[Jd] : {};
        Jd % 2 ? Fd(Object(kd), !0).forEach((function(Jd) {
          fd(dd, Jd, kd[Jd])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(dd, Object.getOwnPropertyDescriptors(kd)) : Fd(Object(kd)).forEach((function(Jd) {
          Object.defineProperty(dd, Jd, Object.getOwnPropertyDescriptor(kd, Jd))
        }))
      }
      return dd
    }

    function md(dd, Jd) {
      for (var kd = 0; kd < Jd.length; kd++) {
        var pd = Jd[kd];
        pd.enumerable = pd.enumerable || !1, pd.configurable = !0, "value" in pd && (pd.writable = !0), Object.defineProperty(dd, nd(pd.key), pd)
      }
    }

    function bd(dd, Jd, kd) {
      return Jd = jd(Jd),
        function(dd, Jd) {
          if (Jd && ("object" === ad(Jd) || "function" === typeof Jd)) return Jd;
          if (void 0 !== Jd) throw new TypeError("Derived constructors may only return object or undefined");
          return function(dd) {
            if (void 0 === dd) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return dd
          }(dd)
        }(dd, Sd() ? Reflect.construct(Jd, kd || [], jd(dd).constructor) : Jd.apply(dd, kd))
    }

    function Sd() {
      try {
        var dd = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (dd) {}
      return (Sd = function() {
        return !!dd
      })()
    }

    function jd(dd) {
      return jd = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(dd) {
        return dd.__proto__ || Object.getPrototypeOf(dd)
      }, jd(dd)
    }

    function Xd(dd, Jd) {
      return Xd = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(dd, Jd) {
        return dd.__proto__ = Jd, dd
      }, Xd(dd, Jd)
    }

    function fd(dd, Jd, kd) {
      return (Jd = nd(Jd)) in dd ? Object.defineProperty(dd, Jd, {
        value: kd,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : dd[Jd] = kd, dd
    }

    function nd(dd) {
      var Jd = function(dd, Jd) {
        if ("object" != ad(dd) || !dd) return dd;
        var kd = dd[Symbol.toPrimitive];
        if (void 0 !== kd) {
          var pd = kd.call(dd, Jd || "default");
          if ("object" != ad(pd)) return pd;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Jd ? String : Number)(dd)
      }(dd, "string");
      return "symbol" == ad(Jd) ? Jd : Jd + ""
    }

    function Ud(dd, Jd) {
      if (null == dd) return {};
      var kd, pd, Nd = function(dd, Jd) {
        if (null == dd) return {};
        var kd = {};
        for (var pd in dd)
          if (Object.prototype.hasOwnProperty.call(dd, pd)) {
            if (Jd.indexOf(pd) >= 0) continue;
            kd[pd] = dd[pd]
          } return kd
      }(dd, Jd);
      if (Object.getOwnPropertySymbols) {
        var Wd = Object.getOwnPropertySymbols(dd);
        for (pd = 0; pd < Wd.length; pd++) kd = Wd[pd], Jd.indexOf(kd) >= 0 || Object.prototype.propertyIsEnumerable.call(dd, kd) && (Nd[kd] = dd[kd])
      }
      return Nd
    }

    function yd(dd) {
      return dd.value
    }
    var Dd = function(dd) {
      function Jd() {
        var dd;
        ! function(dd, Jd) {
          if (!(dd instanceof Jd)) throw new TypeError("Cannot call a class as a function")
        }(this, Jd);
        for (var kd = arguments.length, pd = new Array(kd), Nd = 0; Nd < kd; Nd++) pd[Nd] = arguments[Nd];
        return fd(dd = bd(this, Jd, [].concat(pd)), "lastBoundingBox", {
          width: -1,
          height: -1
        }), dd
      }
      return function(dd, Jd) {
        if ("function" !== typeof Jd && null !== Jd) throw new TypeError("Super expression must either be null or a function");
        dd.prototype = Object.create(Jd && Jd.prototype, {
          constructor: {
            value: dd,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(dd, "prototype", {
          writable: !1
        }), Jd && Xd(dd, Jd)
      }(Jd, dd), kd = Jd, Wd = [{
        key: "getWithHeight",
        value: function(dd, Jd) {
          var kd = Yd(Yd({}, this.defaultProps), dd.props).layout;
          return "vertical" === kd && (0, Bd.B)(dd.props.height) ? {
            height: dd.props.height
          } : "horizontal" === kd ? {
            width: dd.props.width || Jd
          } : null
        }
      }], (Nd = [{
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
            var dd = this.wrapperNode.getBoundingClientRect();
            return dd.height = this.wrapperNode.offsetHeight, dd.width = this.wrapperNode.offsetWidth, dd
          }
          return null
        }
      }, {
        key: "updateBBox",
        value: function() {
          var dd = this.props.onBBoxUpdate,
            Jd = this.getBBox();
          Jd ? (Math.abs(Jd.width - this.lastBoundingBox.width) > 1 || Math.abs(Jd.height - this.lastBoundingBox.height) > 1) && (this.lastBoundingBox.width = Jd.width, this.lastBoundingBox.height = Jd.height, dd && dd(Jd)) : -1 === this.lastBoundingBox.width && -1 === this.lastBoundingBox.height || (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, dd && dd(null))
        }
      }, {
        key: "getBBoxSnapshot",
        value: function() {
          return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? Yd({}, this.lastBoundingBox) : {
            width: 0,
            height: 0
          }
        }
      }, {
        key: "getDefaultPosition",
        value: function(dd) {
          var Jd, kd, pd = this.props,
            Nd = pd.layout,
            Wd = pd.align,
            Pd = pd.verticalAlign,
            Zd = pd.margin,
            gd = pd.chartWidth,
            Cd = pd.chartHeight;
          return dd && (void 0 !== dd.left && null !== dd.left || void 0 !== dd.right && null !== dd.right) || (Jd = "center" === Wd && "vertical" === Nd ? {
            left: ((gd || 0) - this.getBBoxSnapshot().width) / 2
          } : "right" === Wd ? {
            right: Zd && Zd.right || 0
          } : {
            left: Zd && Zd.left || 0
          }), dd && (void 0 !== dd.top && null !== dd.top || void 0 !== dd.bottom && null !== dd.bottom) || (kd = "middle" === Pd ? {
            top: ((Cd || 0) - this.getBBoxSnapshot().height) / 2
          } : "bottom" === Pd ? {
            bottom: Zd && Zd.bottom || 0
          } : {
            top: Zd && Zd.top || 0
          }), Yd(Yd({}, Jd), kd)
        }
      }, {
        key: "render",
        value: function() {
          var dd = this,
            Jd = this.props,
            kd = Jd.content,
            Nd = Jd.width,
            Wd = Jd.height,
            Pd = Jd.wrapperStyle,
            Zd = Jd.payloadUniqBy,
            gd = Jd.payload,
            Cd = Yd(Yd({
              position: "absolute",
              width: Nd || "auto",
              height: Wd || "auto"
            }, this.getDefaultPosition(Pd)), Pd);
          return pd.createElement("div", {
            className: "recharts-legend-wrapper",
            style: Cd,
            ref: function(Jd) {
              dd.wrapperNode = Jd
            }
          }, function(dd, Jd) {
            if (pd.isValidElement(dd)) return pd.cloneElement(dd, Jd);
            if ("function" === typeof dd) return pd.createElement(dd, Jd);
            Jd.ref;
            var kd = Ud(Jd, Md);
            return pd.createElement(qd, kd)
          }(kd, Yd(Yd({}, this.props), {}, {
            payload: (0, sd.c)(gd, Zd, yd)
          })))
        }
      }]) && md(kd.prototype, Nd), Wd && md(kd, Wd), Object.defineProperty(kd, "prototype", {
        writable: !1
      }), kd;
      var kd, Nd, Wd
    }(pd.PureComponent);
    fd(Dd, "displayName", "Legend"), fd(Dd, "defaultProps", {
      iconSize: 14,
      layout: "horizontal",
      align: "center",
      verticalAlign: "bottom"
    })
  },
  4929: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => ed
    });
    var pd = kd(4935),
      Nd = kd(56),
      Wd = kd(4938),
      Pd = kd.n(Wd),
      Zd = kd(5029),
      gd = kd(5295),
      Cd = kd(5297);

    function Kd(dd) {
      return Kd = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(dd) {
        return typeof dd
      } : function(dd) {
        return dd && "function" == typeof Symbol && dd.constructor === Symbol && dd !== Symbol.prototype ? "symbol" : typeof dd
      }, Kd(dd)
    }

    function od(dd, Jd) {
      var kd = Object.keys(dd);
      if (Object.getOwnPropertySymbols) {
        var pd = Object.getOwnPropertySymbols(dd);
        Jd && (pd = pd.filter((function(Jd) {
          return Object.getOwnPropertyDescriptor(dd, Jd).enumerable
        }))), kd.push.apply(kd, pd)
      }
      return kd
    }

    function ld(dd) {
      for (var Jd = 1; Jd < arguments.length; Jd++) {
        var kd = null != arguments[Jd] ? arguments[Jd] : {};
        Jd % 2 ? od(Object(kd), !0).forEach((function(Jd) {
          Qd(dd, Jd, kd[Jd])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(dd, Object.getOwnPropertyDescriptors(kd)) : od(Object(kd)).forEach((function(Jd) {
          Object.defineProperty(dd, Jd, Object.getOwnPropertyDescriptor(kd, Jd))
        }))
      }
      return dd
    }

    function Qd(dd, Jd, kd) {
      return (Jd = function(dd) {
        var Jd = function(dd, Jd) {
          if ("object" != Kd(dd) || !dd) return dd;
          var kd = dd[Symbol.toPrimitive];
          if (void 0 !== kd) {
            var pd = kd.call(dd, Jd || "default");
            if ("object" != Kd(pd)) return pd;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === Jd ? String : Number)(dd)
        }(dd, "string");
        return "symbol" == Kd(Jd) ? Jd : Jd + ""
      }(Jd)) in dd ? Object.defineProperty(dd, Jd, {
        value: kd,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : dd[Jd] = kd, dd
    }

    function Ld(dd, Jd) {
      return function(dd) {
        if (Array.isArray(dd)) return dd
      }(dd) || function(dd, Jd) {
        var kd = null == dd ? null : "undefined" != typeof Symbol && dd[Symbol.iterator] || dd["@@iterator"];
        if (null != kd) {
          var pd, Nd, Wd, Pd, Zd = [],
            gd = !0,
            Cd = !1;
          try {
            if (Wd = (kd = kd.call(dd)).next, 0 === Jd) {
              if (Object(kd) !== kd) return;
              gd = !1
            } else
              for (; !(gd = (pd = Wd.call(kd)).done) && (Zd.push(pd.value), Zd.length !== Jd); gd = !0);
          } catch (dd) {
            Cd = !0, Nd = dd
          } finally {
            try {
              if (!gd && null != kd.return && (Pd = kd.return(), Object(Pd) !== Pd)) return
            } finally {
              if (Cd) throw Nd
            }
          }
          return Zd
        }
      }(dd, Jd) || function(dd, Jd) {
        if (!dd) return;
        if ("string" === typeof dd) return Od(dd, Jd);
        var kd = Object.prototype.toString.call(dd).slice(8, -1);
        "Object" === kd && dd.constructor && (kd = dd.constructor.name);
        if ("Map" === kd || "Set" === kd) return Array.from(dd);
        if ("Arguments" === kd || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(kd)) return Od(dd, Jd)
      }(dd, Jd) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Od(dd, Jd) {
      (null == Jd || Jd > dd.length) && (Jd = dd.length);
      for (var kd = 0, pd = new Array(Jd); kd < Jd; kd++) pd[kd] = dd[kd];
      return pd
    }
    var ed = (0, Nd.forwardRef)((function(dd, Jd) {
      var kd = dd.aspect,
        Wd = dd.initialDimension,
        Kd = void 0 === Wd ? {
          width: -1,
          height: -1
        } : Wd,
        od = dd.width,
        Qd = void 0 === od ? "100%" : od,
        Od = dd.height,
        ed = void 0 === Od ? "100%" : Od,
        Rd = dd.minWidth,
        Id = void 0 === Rd ? 0 : Rd,
        Gd = dd.minHeight,
        vd = dd.maxHeight,
        xd = dd.children,
        qd = dd.debounce,
        Bd = void 0 === qd ? 0 : qd,
        sd = dd.id,
        ad = dd.className,
        Md = dd.xI,
        Fd = dd.style,
        Yd = void 0 === Fd ? {} : Fd,
        md = (0, Nd.useRef)(null),
        bd = (0, Nd.useRef)();
      bd.current = Md, (0, Nd.useImperativeHandle)(Jd, (function() {
        return Object.defineProperty(md.current, "current", {
          get: function() {
            return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), md.current
          },
          configurable: !0
        })
      }));
      var Sd = Ld((0, Nd.useState)({
          containerWidth: Kd.width,
          containerHeight: Kd.height
        }), 2),
        jd = Sd[0],
        Xd = Sd[1],
        fd = (0, Nd.useCallback)((function(dd, Jd) {
          Xd((function(kd) {
            var pd = Math.round(dd),
              Nd = Math.round(Jd);
            return kd.containerWidth === pd && kd.containerHeight === Nd ? kd : {
              containerWidth: pd,
              containerHeight: Nd
            }
          }))
        }), []);
      (0, Nd.useEffect)((function() {
        var dd = function(dd) {
          var Jd, kd = dd[0].contentRect,
            pd = kd.width,
            Nd = kd.height;
          fd(pd, Nd), null === (Jd = bd.current) || void 0 === Jd || Jd.call(bd, pd, Nd)
        };
        Bd > 0 && (dd = Pd()(dd, Bd, {
          trailing: !0,
          leading: !1
        }));
        var Jd = new ResizeObserver(dd),
          kd = md.current.getBoundingClientRect(),
          pd = kd.width,
          Nd = kd.height;
        return fd(pd, Nd), Jd.observe(md.current),
          function() {
            Jd.disconnect()
          }
      }), [fd, Bd]);
      var nd = (0, Nd.useMemo)((function() {
        var dd = jd.containerWidth,
          Jd = jd.containerHeight;
        if (dd < 0 || Jd < 0) return null;
        (0, gd.e)((0, Zd.C)(Qd) || (0, Zd.C)(ed), "The width(%s) and height(%s) are both fixed numbers,\n       maybe you don't need to use a ResponsiveContainer.", Qd, ed), (0, gd.e)(!kd || kd > 0, "The aspect(%s) must be greater than zero.", kd);
        var pd = (0, Zd.C)(Qd) ? dd : Qd,
          Wd = (0, Zd.C)(ed) ? Jd : ed;
        kd && kd > 0 && (pd ? Wd = pd / kd : Wd && (pd = Wd * kd), vd && Wd > vd && (Wd = vd)), (0, gd.e)(pd > 0 || Wd > 0, "The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.", pd, Wd, Qd, ed, Id, Gd, kd);
        var Pd = !Array.isArray(xd) && (0, Cd.q)(xd.type).endsWith("Chart");
        return Nd.Children.map(xd, (function(dd) {
          return Nd.isValidElement(dd) ? (0, Nd.cloneElement)(dd, ld({
            width: pd,
            height: Wd
          }, Pd ? {
            style: ld({
              height: "100%",
              width: "100%",
              maxHeight: Wd,
              maxWidth: pd
            }, dd.props.style)
          } : {})) : dd
        }))
      }), [kd, xd, ed, vd, Gd, Id, jd, Qd]);
      return Nd.createElement("div", {
        id: sd ? "".concat(sd) : void 0,
        className: (0, pd.b)("recharts-responsive-container", ad),
        style: ld(ld({}, Yd), {}, {
          width: Qd,
          height: ed,
          minWidth: Id,
          minHeight: Gd,
          maxHeight: vd
        }),
        ref: md
      }, nd)
    }))
  },
  6001: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Td
    });
    var pd = kd(56),
      Nd = kd(5289),
      Wd = kd.n(Nd),
      Pd = kd(4935),
      Zd = kd(5029),
      gd = kd(5854),
      Cd = kd(5297),
      Kd = kd(6010);

    function od(dd) {
      return od = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(dd) {
        return typeof dd
      } : function(dd) {
        return dd && "function" == typeof Symbol && dd.constructor === Symbol && dd !== Symbol.prototype ? "symbol" : typeof dd
      }, od(dd)
    }

    function ld(dd, Jd) {
      return function(dd) {
        if (Array.isArray(dd)) return dd
      }(dd) || function(dd, Jd) {
        var kd = null == dd ? null : "undefined" != typeof Symbol && dd[Symbol.iterator] || dd["@@iterator"];
        if (null != kd) {
          var pd, Nd, Wd, Pd, Zd = [],
            gd = !0,
            Cd = !1;
          try {
            if (Wd = (kd = kd.call(dd)).next, 0 === Jd) {
              if (Object(kd) !== kd) return;
              gd = !1
            } else
              for (; !(gd = (pd = Wd.call(kd)).done) && (Zd.push(pd.value), Zd.length !== Jd); gd = !0);
          } catch (dd) {
            Cd = !0, Nd = dd
          } finally {
            try {
              if (!gd && null != kd.return && (Pd = kd.return(), Object(Pd) !== Pd)) return
            } finally {
              if (Cd) throw Nd
            }
          }
          return Zd
        }
      }(dd, Jd) || function(dd, Jd) {
        if (!dd) return;
        if ("string" === typeof dd) return Qd(dd, Jd);
        var kd = Object.prototype.toString.call(dd).slice(8, -1);
        "Object" === kd && dd.constructor && (kd = dd.constructor.name);
        if ("Map" === kd || "Set" === kd) return Array.from(dd);
        if ("Arguments" === kd || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(kd)) return Qd(dd, Jd)
      }(dd, Jd) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Qd(dd, Jd) {
      (null == Jd || Jd > dd.length) && (Jd = dd.length);
      for (var kd = 0, pd = new Array(Jd); kd < Jd; kd++) pd[kd] = dd[kd];
      return pd
    }

    function Ld(dd, Jd) {
      for (var kd = 0; kd < Jd.length; kd++) {
        var pd = Jd[kd];
        pd.enumerable = pd.enumerable || !1, pd.configurable = !0, "value" in pd && (pd.writable = !0), Object.defineProperty(dd, Od(pd.key), pd)
      }
    }

    function Od(dd) {
      var Jd = function(dd, Jd) {
        if ("object" != od(dd) || !dd) return dd;
        var kd = dd[Symbol.toPrimitive];
        if (void 0 !== kd) {
          var pd = kd.call(dd, Jd || "default");
          if ("object" != od(pd)) return pd;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Jd ? String : Number)(dd)
      }(dd, "string");
      return "symbol" == od(Jd) ? Jd : Jd + ""
    }
    var ed = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
      Rd = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
      Id = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
      Gd = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
      vd = {
        cm: 96 / 2.54,
        mm: 96 / 25.4,
        pt: 96 / 72,
        pc: 16,
        in: 96,
        Q: 96 / 101.6,
        px: 1
      },
      xd = Object.keys(vd),
      qd = "NaN";
    var Bd = function() {
      function dd(Jd, kd) {
        ! function(dd, Jd) {
          if (!(dd instanceof Jd)) throw new TypeError("Cannot call a class as a function")
        }(this, dd), this.num = Jd, this.unit = kd, this.num = Jd, this.unit = kd, Number.isNaN(Jd) && (this.unit = ""), "" === kd || Id.test(kd) || (this.num = NaN, this.unit = ""), xd.includes(kd) && (this.num = function(dd, Jd) {
          return dd * vd[Jd]
        }(Jd, kd), this.unit = "px")
      }
      return Jd = dd, pd = [{
        key: "parse",
        value: function(Jd) {
          var kd, pd = ld(null !== (kd = Gd.exec(Jd)) && void 0 !== kd ? kd : [], 3),
            Nd = pd[1],
            Wd = pd[2];
          return new dd(parseFloat(Nd), null !== Wd && void 0 !== Wd ? Wd : "")
        }
      }], (kd = [{
        key: "add",
        value: function(Jd) {
          return this.unit !== Jd.unit ? new dd(NaN, "") : new dd(this.num + Jd.num, this.unit)
        }
      }, {
        key: "subtract",
        value: function(Jd) {
          return this.unit !== Jd.unit ? new dd(NaN, "") : new dd(this.num - Jd.num, this.unit)
        }
      }, {
        key: "multiply",
        value: function(Jd) {
          return "" !== this.unit && "" !== Jd.unit && this.unit !== Jd.unit ? new dd(NaN, "") : new dd(this.num * Jd.num, this.unit || Jd.unit)
        }
      }, {
        key: "divide",
        value: function(Jd) {
          return "" !== this.unit && "" !== Jd.unit && this.unit !== Jd.unit ? new dd(NaN, "") : new dd(this.num / Jd.num, this.unit || Jd.unit)
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
      }]) && Ld(Jd.prototype, kd), pd && Ld(Jd, pd), Object.defineProperty(Jd, "prototype", {
        writable: !1
      }), Jd;
      var Jd, kd, pd
    }();

    function sd(dd) {
      if (dd.includes(qd)) return qd;
      for (var Jd = dd; Jd.includes("*") || Jd.includes("/");) {
        var kd, pd = ld(null !== (kd = ed.exec(Jd)) && void 0 !== kd ? kd : [], 4),
          Nd = pd[1],
          Wd = pd[2],
          Pd = pd[3],
          Zd = Bd.parse(null !== Nd && void 0 !== Nd ? Nd : ""),
          gd = Bd.parse(null !== Pd && void 0 !== Pd ? Pd : ""),
          Cd = "*" === Wd ? Zd.multiply(gd) : Zd.divide(gd);
        if (Cd.isNaN()) return qd;
        Jd = Jd.replace(ed, Cd.toString())
      }
      for (; Jd.includes("+") || /.-\d+(?:\.\d+)?/.test(Jd);) {
        var Kd, od = ld(null !== (Kd = Rd.exec(Jd)) && void 0 !== Kd ? Kd : [], 4),
          Qd = od[1],
          Ld = od[2],
          Od = od[3],
          Id = Bd.parse(null !== Qd && void 0 !== Qd ? Qd : ""),
          Gd = Bd.parse(null !== Od && void 0 !== Od ? Od : ""),
          vd = "+" === Ld ? Id.add(Gd) : Id.subtract(Gd);
        if (vd.isNaN()) return qd;
        Jd = Jd.replace(Rd, vd.toString())
      }
      return Jd
    }
    var ad = /\(([^()]*)\)/;

    function Md(dd) {
      var Jd = dd.replace(/\s+/g, "");
      return Jd = function(dd) {
        for (var Jd = dd; Jd.includes("(");) {
          var kd = ld(ad.exec(Jd), 2)[1];
          Jd = Jd.replace(ad, sd(kd))
        }
        return Jd
      }(Jd), Jd = sd(Jd)
    }

    function Fd(dd) {
      var Jd = function(dd) {
        try {
          return Md(dd)
        } catch (Jd) {
          return qd
        }
      }(dd.slice(5, -1));
      return Jd === qd ? "" : Jd
    }
    var Yd = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"],
      md = ["dx", "dy", "angle", "className", "breakAll"];

    function bd() {
      return bd = Object.assign ? Object.assign.bind() : function(dd) {
        for (var Jd = 1; Jd < arguments.length; Jd++) {
          var kd = arguments[Jd];
          for (var pd in kd) Object.prototype.hasOwnProperty.call(kd, pd) && (dd[pd] = kd[pd])
        }
        return dd
      }, bd.apply(this, arguments)
    }

    function Sd(dd, Jd) {
      if (null == dd) return {};
      var kd, pd, Nd = function(dd, Jd) {
        if (null == dd) return {};
        var kd = {};
        for (var pd in dd)
          if (Object.prototype.hasOwnProperty.call(dd, pd)) {
            if (Jd.indexOf(pd) >= 0) continue;
            kd[pd] = dd[pd]
          } return kd
      }(dd, Jd);
      if (Object.getOwnPropertySymbols) {
        var Wd = Object.getOwnPropertySymbols(dd);
        for (pd = 0; pd < Wd.length; pd++) kd = Wd[pd], Jd.indexOf(kd) >= 0 || Object.prototype.propertyIsEnumerable.call(dd, kd) && (Nd[kd] = dd[kd])
      }
      return Nd
    }

    function jd(dd, Jd) {
      return function(dd) {
        if (Array.isArray(dd)) return dd
      }(dd) || function(dd, Jd) {
        var kd = null == dd ? null : "undefined" != typeof Symbol && dd[Symbol.iterator] || dd["@@iterator"];
        if (null != kd) {
          var pd, Nd, Wd, Pd, Zd = [],
            gd = !0,
            Cd = !1;
          try {
            if (Wd = (kd = kd.call(dd)).next, 0 === Jd) {
              if (Object(kd) !== kd) return;
              gd = !1
            } else
              for (; !(gd = (pd = Wd.call(kd)).done) && (Zd.push(pd.value), Zd.length !== Jd); gd = !0);
          } catch (dd) {
            Cd = !0, Nd = dd
          } finally {
            try {
              if (!gd && null != kd.return && (Pd = kd.return(), Object(Pd) !== Pd)) return
            } finally {
              if (Cd) throw Nd
            }
          }
          return Zd
        }
      }(dd, Jd) || function(dd, Jd) {
        if (!dd) return;
        if ("string" === typeof dd) return Xd(dd, Jd);
        var kd = Object.prototype.toString.call(dd).slice(8, -1);
        "Object" === kd && dd.constructor && (kd = dd.constructor.name);
        if ("Map" === kd || "Set" === kd) return Array.from(dd);
        if ("Arguments" === kd || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(kd)) return Xd(dd, Jd)
      }(dd, Jd) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Xd(dd, Jd) {
      (null == Jd || Jd > dd.length) && (Jd = dd.length);
      for (var kd = 0, pd = new Array(Jd); kd < Jd; kd++) pd[kd] = dd[kd];
      return pd
    }
    var fd = /[ \f\n\r\t\v\u2028\u2029]+/,
      nd = function(dd) {
        var Jd = dd.children,
          kd = dd.breakAll,
          pd = dd.style;
        try {
          var Nd = [];
          return Wd()(Jd) || (Nd = kd ? Jd.toString().split("") : Jd.toString().split(fd)), {
            wordsWithComputedWidth: Nd.map((function(dd) {
              return {
                word: dd,
                width: (0, Kd.h)(dd, pd).width
              }
            })),
            spaceWidth: kd ? 0 : (0, Kd.h)("\xa0", pd).width
          }
        } catch (Pd) {
          return null
        }
      },
      Ud = function(dd) {
        return [{
          words: Wd()(dd) ? [] : dd.toString().split(fd)
        }]
      },
      yd = function(dd) {
        var Jd = dd.width,
          kd = dd.scaleToFit,
          pd = dd.children,
          Nd = dd.style,
          Wd = dd.breakAll,
          Pd = dd.maxLines;
        if ((Jd || kd) && !gd.b.isSsr) {
          var Cd = nd({
            breakAll: Wd,
            children: pd,
            style: Nd
          });
          return Cd ? function(dd, Jd, kd, pd, Nd) {
            var Wd = dd.maxLines,
              Pd = dd.children,
              gd = dd.style,
              Cd = dd.breakAll,
              Kd = (0, Zd.B)(Wd),
              od = Pd,
              ld = function() {
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).reduce((function(dd, Jd) {
                  var Wd = Jd.word,
                    Pd = Jd.width,
                    Zd = dd[dd.length - 1];
                  if (Zd && (null == pd || Nd || Zd.width + Pd + kd < Number(pd))) Zd.words.push(Wd), Zd.width += Pd + kd;
                  else {
                    var gd = {
                      words: [Wd],
                      width: Pd
                    };
                    dd.push(gd)
                  }
                  return dd
                }), [])
              },
              Qd = ld(Jd);
            if (!Kd) return Qd;
            for (var Ld, Od = function(dd) {
                var Jd = od.slice(0, dd),
                  kd = nd({
                    breakAll: Cd,
                    style: gd,
                    children: Jd + "\u2026"
                  }).wordsWithComputedWidth,
                  Nd = ld(kd),
                  Pd = Nd.length > Wd || function(dd) {
                    return dd.reduce((function(dd, Jd) {
                      return dd.width > Jd.width ? dd : Jd
                    }))
                  }(Nd).width > Number(pd);
                return [Pd, Nd]
              }, ed = 0, Rd = od.length - 1, Id = 0; ed <= Rd && Id <= od.length - 1;) {
              var Gd = Math.floor((ed + Rd) / 2),
                vd = jd(Od(Gd - 1), 2),
                xd = vd[0],
                qd = vd[1],
                Bd = jd(Od(Gd), 1)[0];
              if (xd || Bd || (ed = Gd + 1), xd && Bd && (Rd = Gd - 1), !xd && Bd) {
                Ld = qd;
                break
              }
              Id++
            }
            return Ld || Qd
          }({
            breakAll: Wd,
            children: pd,
            maxLines: Pd,
            style: Nd
          }, Cd.wordsWithComputedWidth, Cd.spaceWidth, Jd, kd) : Ud(pd)
        }
        return Ud(pd)
      },
      Dd = "#808080",
      Td = function(dd) {
        var Jd = dd.x,
          kd = void 0 === Jd ? 0 : Jd,
          Nd = dd.y,
          Wd = void 0 === Nd ? 0 : Nd,
          gd = dd.lineHeight,
          Kd = void 0 === gd ? "1em" : gd,
          od = dd.capHeight,
          ld = void 0 === od ? "0.71em" : od,
          Qd = dd.scaleToFit,
          Ld = void 0 !== Qd && Qd,
          Od = dd.textAnchor,
          ed = void 0 === Od ? "start" : Od,
          Rd = dd.verticalAnchor,
          Id = void 0 === Rd ? "end" : Rd,
          Gd = dd.fill,
          vd = void 0 === Gd ? Dd : Gd,
          xd = Sd(dd, Yd),
          qd = (0, pd.useMemo)((function() {
            return yd({
              breakAll: xd.breakAll,
              children: xd.children,
              maxLines: xd.maxLines,
              scaleToFit: Ld,
              style: xd.style,
              width: xd.width
            })
          }), [xd.breakAll, xd.children, xd.maxLines, Ld, xd.style, xd.width]),
          Bd = xd.dx,
          sd = xd.dy,
          ad = xd.angle,
          Md = xd.className,
          jd = xd.breakAll,
          Xd = Sd(xd, md);
        if (!(0, Zd.z)(kd) || !(0, Zd.z)(Wd)) return null;
        var fd, nd = kd + ((0, Zd.B)(Bd) ? Bd : 0),
          Ud = Wd + ((0, Zd.B)(sd) ? sd : 0);
        switch (Id) {
          case "start":
            fd = Fd("calc(".concat(ld, ")"));
            break;
          case "middle":
            fd = Fd("calc(".concat((qd.length - 1) / 2, " * -").concat(Kd, " + (").concat(ld, " / 2))"));
            break;
          default:
            fd = Fd("calc(".concat(qd.length - 1, " * -").concat(Kd, ")"))
        }
        var Td = [];
        if (Ld) {
          var Ed = qd[0].width,
            cd = xd.width;
          Td.push("scale(".concat(((0, Zd.B)(cd) ? cd / Ed : 1) / Ed, ")"))
        }
        return ad && Td.push("rotate(".concat(ad, ", ").concat(nd, ", ").concat(Ud, ")")), Td.length && (Xd.transform = Td.join(" ")), pd.createElement("text", bd({}, (0, Cd.e)(Xd, !0), {
          x: nd,
          y: Ud,
          className: (0, Pd.b)("recharts-text", Md),
          textAnchor: ed,
          fill: vd.includes("url") ? Dd : vd
        }), qd.map((function(dd, Jd) {
          var kd = dd.words.join(jd ? "" : " ");
          return pd.createElement("tspan", {
            x: nd,
            dy: 0 === Jd ? fd : Kd,
            key: "".concat(kd, "-").concat(Jd)
          }, kd)
        })))
      }
  },
  5850: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => wd
    });
    var pd = kd(56),
      Nd = kd(5388),
      Wd = kd.n(Nd),
      Pd = kd(5289),
      Zd = kd.n(Pd),
      gd = kd(4935),
      Cd = kd(5029);

    function Kd(dd) {
      return Kd = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(dd) {
        return typeof dd
      } : function(dd) {
        return dd && "function" == typeof Symbol && dd.constructor === Symbol && dd !== Symbol.prototype ? "symbol" : typeof dd
      }, Kd(dd)
    }

    function od() {
      return od = Object.assign ? Object.assign.bind() : function(dd) {
        for (var Jd = 1; Jd < arguments.length; Jd++) {
          var kd = arguments[Jd];
          for (var pd in kd) Object.prototype.hasOwnProperty.call(kd, pd) && (dd[pd] = kd[pd])
        }
        return dd
      }, od.apply(this, arguments)
    }

    function ld(dd, Jd) {
      return function(dd) {
        if (Array.isArray(dd)) return dd
      }(dd) || function(dd, Jd) {
        var kd = null == dd ? null : "undefined" != typeof Symbol && dd[Symbol.iterator] || dd["@@iterator"];
        if (null != kd) {
          var pd, Nd, Wd, Pd, Zd = [],
            gd = !0,
            Cd = !1;
          try {
            if (Wd = (kd = kd.call(dd)).next, 0 === Jd) {
              if (Object(kd) !== kd) return;
              gd = !1
            } else
              for (; !(gd = (pd = Wd.call(kd)).done) && (Zd.push(pd.value), Zd.length !== Jd); gd = !0);
          } catch (dd) {
            Cd = !0, Nd = dd
          } finally {
            try {
              if (!gd && null != kd.return && (Pd = kd.return(), Object(Pd) !== Pd)) return
            } finally {
              if (Cd) throw Nd
            }
          }
          return Zd
        }
      }(dd, Jd) || function(dd, Jd) {
        if (!dd) return;
        if ("string" === typeof dd) return Qd(dd, Jd);
        var kd = Object.prototype.toString.call(dd).slice(8, -1);
        "Object" === kd && dd.constructor && (kd = dd.constructor.name);
        if ("Map" === kd || "Set" === kd) return Array.from(dd);
        if ("Arguments" === kd || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(kd)) return Qd(dd, Jd)
      }(dd, Jd) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Qd(dd, Jd) {
      (null == Jd || Jd > dd.length) && (Jd = dd.length);
      for (var kd = 0, pd = new Array(Jd); kd < Jd; kd++) pd[kd] = dd[kd];
      return pd
    }

    function Ld(dd, Jd) {
      var kd = Object.keys(dd);
      if (Object.getOwnPropertySymbols) {
        var pd = Object.getOwnPropertySymbols(dd);
        Jd && (pd = pd.filter((function(Jd) {
          return Object.getOwnPropertyDescriptor(dd, Jd).enumerable
        }))), kd.push.apply(kd, pd)
      }
      return kd
    }

    function Od(dd) {
      for (var Jd = 1; Jd < arguments.length; Jd++) {
        var kd = null != arguments[Jd] ? arguments[Jd] : {};
        Jd % 2 ? Ld(Object(kd), !0).forEach((function(Jd) {
          ed(dd, Jd, kd[Jd])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(dd, Object.getOwnPropertyDescriptors(kd)) : Ld(Object(kd)).forEach((function(Jd) {
          Object.defineProperty(dd, Jd, Object.getOwnPropertyDescriptor(kd, Jd))
        }))
      }
      return dd
    }

    function ed(dd, Jd, kd) {
      return (Jd = function(dd) {
        var Jd = function(dd, Jd) {
          if ("object" != Kd(dd) || !dd) return dd;
          var kd = dd[Symbol.toPrimitive];
          if (void 0 !== kd) {
            var pd = kd.call(dd, Jd || "default");
            if ("object" != Kd(pd)) return pd;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === Jd ? String : Number)(dd)
        }(dd, "string");
        return "symbol" == Kd(Jd) ? Jd : Jd + ""
      }(Jd)) in dd ? Object.defineProperty(dd, Jd, {
        value: kd,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : dd[Jd] = kd, dd
    }

    function Rd(dd) {
      return Array.isArray(dd) && (0, Cd.z)(dd[0]) && (0, Cd.z)(dd[1]) ? dd.join(" ~ ") : dd
    }
    var Id = function(dd) {
      var Jd = dd.separator,
        kd = void 0 === Jd ? " : " : Jd,
        Nd = dd.contentStyle,
        Pd = void 0 === Nd ? {} : Nd,
        Kd = dd.itemStyle,
        Qd = void 0 === Kd ? {} : Kd,
        Ld = dd.labelStyle,
        ed = void 0 === Ld ? {} : Ld,
        Id = dd.payload,
        Gd = dd.formatter,
        vd = dd.itemSorter,
        xd = dd.wrapperClassName,
        qd = dd.labelClassName,
        Bd = dd.label,
        sd = dd.labelFormatter,
        ad = dd.accessibilityLayer,
        Md = void 0 !== ad && ad,
        Fd = Od({
          margin: 0,
          padding: 10,
          backgroundColor: "#fff",
          border: "1px solid #ccc",
          whiteSpace: "nowrap"
        }, Pd),
        Yd = Od({
          margin: 0
        }, ed),
        md = !Zd()(Bd),
        bd = md ? Bd : "",
        Sd = (0, gd.b)("recharts-default-tooltip", xd),
        jd = (0, gd.b)("recharts-tooltip-label", qd);
      md && sd && void 0 !== Id && null !== Id && (bd = sd(Bd, Id));
      var Xd = Md ? {
        role: "status",
        "aria-live": "assertive"
      } : {};
      return pd.createElement("div", od({
        className: Sd,
        style: Fd
      }, Xd), pd.createElement("p", {
        className: jd,
        style: Yd
      }, pd.isValidElement(bd) ? bd : "".concat(bd)), function() {
        if (Id && Id.length) {
          var dd = (vd ? Wd()(Id, vd) : Id).map((function(dd, Jd) {
            if ("none" === dd.type) return null;
            var Nd = Od({
                display: "block",
                paddingTop: 4,
                paddingBottom: 4,
                color: dd.color || "#000"
              }, Qd),
              Wd = dd.formatter || Gd || Rd,
              Pd = dd.value,
              Zd = dd.name,
              gd = Pd,
              Kd = Zd;
            if (Wd && null != gd && null != Kd) {
              var od = Wd(Pd, Zd, dd, Jd, Id);
              if (Array.isArray(od)) {
                var Ld = ld(od, 2);
                gd = Ld[0], Kd = Ld[1]
              } else gd = od
            }
            return pd.createElement("li", {
              className: "recharts-tooltip-item",
              key: "tooltip-item-".concat(Jd),
              style: Nd
            }, (0, Cd.z)(Kd) ? pd.createElement("span", {
              className: "recharts-tooltip-item-name"
            }, Kd) : null, (0, Cd.z)(Kd) ? pd.createElement("span", {
              className: "recharts-tooltip-item-separator"
            }, kd) : null, pd.createElement("span", {
              className: "recharts-tooltip-item-value"
            }, gd), pd.createElement("span", {
              className: "recharts-tooltip-item-unit"
            }, dd.unit || ""))
          }));
          return pd.createElement("ul", {
            className: "recharts-tooltip-item-list",
            style: {
              padding: 0,
              margin: 0
            }
          }, dd)
        }
        return null
      }())
    };

    function Gd(dd) {
      return Gd = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(dd) {
        return typeof dd
      } : function(dd) {
        return dd && "function" == typeof Symbol && dd.constructor === Symbol && dd !== Symbol.prototype ? "symbol" : typeof dd
      }, Gd(dd)
    }

    function vd(dd, Jd, kd) {
      return (Jd = function(dd) {
        var Jd = function(dd, Jd) {
          if ("object" != Gd(dd) || !dd) return dd;
          var kd = dd[Symbol.toPrimitive];
          if (void 0 !== kd) {
            var pd = kd.call(dd, Jd || "default");
            if ("object" != Gd(pd)) return pd;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === Jd ? String : Number)(dd)
        }(dd, "string");
        return "symbol" == Gd(Jd) ? Jd : Jd + ""
      }(Jd)) in dd ? Object.defineProperty(dd, Jd, {
        value: kd,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : dd[Jd] = kd, dd
    }
    var xd = "recharts-tooltip-wrapper",
      qd = {
        visibility: "hidden"
      };

    function Bd(dd) {
      var Jd = dd.coordinate,
        kd = dd.translateX,
        pd = dd.translateY;
      return (0, gd.b)(xd, vd(vd(vd(vd({}, "".concat(xd, "-right"), (0, Cd.B)(kd) && Jd && (0, Cd.B)(Jd.x) && kd >= Jd.x), "".concat(xd, "-left"), (0, Cd.B)(kd) && Jd && (0, Cd.B)(Jd.x) && kd < Jd.x), "".concat(xd, "-bottom"), (0, Cd.B)(pd) && Jd && (0, Cd.B)(Jd.y) && pd >= Jd.y), "".concat(xd, "-top"), (0, Cd.B)(pd) && Jd && (0, Cd.B)(Jd.y) && pd < Jd.y))
    }

    function sd(dd) {
      var Jd = dd.allowEscapeViewBox,
        kd = dd.coordinate,
        pd = dd.key,
        Nd = dd.offsetTopLeft,
        Wd = dd.position,
        Pd = dd.reverseDirection,
        Zd = dd.tooltipDimension,
        gd = dd.viewBox,
        Kd = dd.viewBoxDimension;
      if (Wd && (0, Cd.B)(Wd[pd])) return Wd[pd];
      var od = kd[pd] - Zd - Nd,
        ld = kd[pd] + Nd;
      return Jd[pd] ? Pd[pd] ? od : ld : Pd[pd] ? od < gd[pd] ? Math.max(ld, gd[pd]) : Math.max(od, gd[pd]) : ld + Zd > gd[pd] + Kd ? Math.max(od, gd[pd]) : Math.max(ld, gd[pd])
    }

    function ad(dd) {
      return ad = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(dd) {
        return typeof dd
      } : function(dd) {
        return dd && "function" == typeof Symbol && dd.constructor === Symbol && dd !== Symbol.prototype ? "symbol" : typeof dd
      }, ad(dd)
    }

    function Md(dd, Jd) {
      var kd = Object.keys(dd);
      if (Object.getOwnPropertySymbols) {
        var pd = Object.getOwnPropertySymbols(dd);
        Jd && (pd = pd.filter((function(Jd) {
          return Object.getOwnPropertyDescriptor(dd, Jd).enumerable
        }))), kd.push.apply(kd, pd)
      }
      return kd
    }

    function Fd(dd) {
      for (var Jd = 1; Jd < arguments.length; Jd++) {
        var kd = null != arguments[Jd] ? arguments[Jd] : {};
        Jd % 2 ? Md(Object(kd), !0).forEach((function(Jd) {
          Xd(dd, Jd, kd[Jd])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(dd, Object.getOwnPropertyDescriptors(kd)) : Md(Object(kd)).forEach((function(Jd) {
          Object.defineProperty(dd, Jd, Object.getOwnPropertyDescriptor(kd, Jd))
        }))
      }
      return dd
    }

    function Yd(dd, Jd) {
      for (var kd = 0; kd < Jd.length; kd++) {
        var pd = Jd[kd];
        pd.enumerable = pd.enumerable || !1, pd.configurable = !0, "value" in pd && (pd.writable = !0), Object.defineProperty(dd, fd(pd.key), pd)
      }
    }

    function md(dd, Jd, kd) {
      return Jd = Sd(Jd),
        function(dd, Jd) {
          if (Jd && ("object" === ad(Jd) || "function" === typeof Jd)) return Jd;
          if (void 0 !== Jd) throw new TypeError("Derived constructors may only return object or undefined");
          return function(dd) {
            if (void 0 === dd) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return dd
          }(dd)
        }(dd, bd() ? Reflect.construct(Jd, kd || [], Sd(dd).constructor) : Jd.apply(dd, kd))
    }

    function bd() {
      try {
        var dd = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (dd) {}
      return (bd = function() {
        return !!dd
      })()
    }

    function Sd(dd) {
      return Sd = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(dd) {
        return dd.__proto__ || Object.getPrototypeOf(dd)
      }, Sd(dd)
    }

    function jd(dd, Jd) {
      return jd = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(dd, Jd) {
        return dd.__proto__ = Jd, dd
      }, jd(dd, Jd)
    }

    function Xd(dd, Jd, kd) {
      return (Jd = fd(Jd)) in dd ? Object.defineProperty(dd, Jd, {
        value: kd,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : dd[Jd] = kd, dd
    }

    function fd(dd) {
      var Jd = function(dd, Jd) {
        if ("object" != ad(dd) || !dd) return dd;
        var kd = dd[Symbol.toPrimitive];
        if (void 0 !== kd) {
          var pd = kd.call(dd, Jd || "default");
          if ("object" != ad(pd)) return pd;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Jd ? String : Number)(dd)
      }(dd, "string");
      return "symbol" == ad(Jd) ? Jd : Jd + ""
    }
    var nd = function(dd) {
        function Jd() {
          var dd;
          ! function(dd, Jd) {
            if (!(dd instanceof Jd)) throw new TypeError("Cannot call a class as a function")
          }(this, Jd);
          for (var kd = arguments.length, pd = new Array(kd), Nd = 0; Nd < kd; Nd++) pd[Nd] = arguments[Nd];
          return Xd(dd = md(this, Jd, [].concat(pd)), "state", {
            dismissed: !1,
            dismissedAtCoordinate: {
              x: 0,
              y: 0
            },
            lastBoundingBox: {
              width: -1,
              height: -1
            }
          }), Xd(dd, "handleKeyDown", (function(Jd) {
            var kd, pd, Nd, Wd;
            "Escape" === Jd.key && dd.setState({
              dismissed: !0,
              dismissedAtCoordinate: {
                x: null !== (kd = null === (pd = dd.props.coordinate) || void 0 === pd ? void 0 : pd.x) && void 0 !== kd ? kd : 0,
                y: null !== (Nd = null === (Wd = dd.props.coordinate) || void 0 === Wd ? void 0 : Wd.y) && void 0 !== Nd ? Nd : 0
              }
            })
          })), dd
        }
        return function(dd, Jd) {
          if ("function" !== typeof Jd && null !== Jd) throw new TypeError("Super expression must either be null or a function");
          dd.prototype = Object.create(Jd && Jd.prototype, {
            constructor: {
              value: dd,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(dd, "prototype", {
            writable: !1
          }), Jd && jd(dd, Jd)
        }(Jd, dd), kd = Jd, (Nd = [{
          key: "updateBBox",
          value: function() {
            if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
              var dd = this.wrapperNode.getBoundingClientRect();
              (Math.abs(dd.width - this.state.lastBoundingBox.width) > 1 || Math.abs(dd.height - this.state.lastBoundingBox.height) > 1) && this.setState({
                lastBoundingBox: {
                  width: dd.width,
                  height: dd.height
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
            var dd, Jd;
            this.props.active && this.updateBBox(), this.state.dismissed && ((null === (dd = this.props.coordinate) || void 0 === dd ? void 0 : dd.x) === this.state.dismissedAtCoordinate.x && (null === (Jd = this.props.coordinate) || void 0 === Jd ? void 0 : Jd.y) === this.state.dismissedAtCoordinate.y || (this.state.dismissed = !1))
          }
        }, {
          key: "render",
          value: function() {
            var dd = this,
              Jd = this.props,
              kd = Jd.active,
              Nd = Jd.allowEscapeViewBox,
              Wd = Jd.animationDuration,
              Pd = Jd.animationEasing,
              Zd = Jd.children,
              gd = Jd.coordinate,
              Cd = Jd.hasPayload,
              Kd = Jd.isAnimationActive,
              od = Jd.offset,
              ld = Jd.position,
              Qd = Jd.reverseDirection,
              Ld = Jd.useTranslate3d,
              Od = Jd.viewBox,
              ed = Jd.wrapperStyle,
              Rd = function(dd) {
                var Jd, kd, pd = dd.allowEscapeViewBox,
                  Nd = dd.coordinate,
                  Wd = dd.offsetTopLeft,
                  Pd = dd.position,
                  Zd = dd.reverseDirection,
                  gd = dd.tooltipBox,
                  Cd = dd.useTranslate3d,
                  Kd = dd.viewBox;
                return {
                  cssProperties: gd.height > 0 && gd.width > 0 && Nd ? function(dd) {
                    var Jd = dd.translateX,
                      kd = dd.translateY;
                    return {
                      transform: dd.useTranslate3d ? "translate3d(".concat(Jd, "px, ").concat(kd, "px, 0)") : "translate(".concat(Jd, "px, ").concat(kd, "px)")
                    }
                  }({
                    translateX: Jd = sd({
                      allowEscapeViewBox: pd,
                      coordinate: Nd,
                      key: "x",
                      offsetTopLeft: Wd,
                      position: Pd,
                      reverseDirection: Zd,
                      tooltipDimension: gd.width,
                      viewBox: Kd,
                      viewBoxDimension: Kd.width
                    }),
                    translateY: kd = sd({
                      allowEscapeViewBox: pd,
                      coordinate: Nd,
                      key: "y",
                      offsetTopLeft: Wd,
                      position: Pd,
                      reverseDirection: Zd,
                      tooltipDimension: gd.height,
                      viewBox: Kd,
                      viewBoxDimension: Kd.height
                    }),
                    useTranslate3d: Cd
                  }) : qd,
                  cssClasses: Bd({
                    translateX: Jd,
                    translateY: kd,
                    coordinate: Nd
                  })
                }
              }({
                allowEscapeViewBox: Nd,
                coordinate: gd,
                offsetTopLeft: od,
                position: ld,
                reverseDirection: Qd,
                tooltipBox: this.state.lastBoundingBox,
                useTranslate3d: Ld,
                viewBox: Od
              }),
              Id = Rd.cssClasses,
              Gd = Rd.cssProperties,
              vd = Fd(Fd({
                transition: Kd && kd ? "transform ".concat(Wd, "ms ").concat(Pd) : void 0
              }, Gd), {}, {
                pointerEvents: "none",
                visibility: !this.state.dismissed && kd && Cd ? "visible" : "hidden",
                position: "absolute",
                top: 0,
                left: 0
              }, ed);
            return pd.createElement("div", {
              tabIndex: -1,
              className: Id,
              style: vd,
              ref: function(Jd) {
                dd.wrapperNode = Jd
              }
            }, Zd)
          }
        }]) && Yd(kd.prototype, Nd), Wd && Yd(kd, Wd), Object.defineProperty(kd, "prototype", {
          writable: !1
        }), kd;
        var kd, Nd, Wd
      }(pd.PureComponent),
      Ud = kd(5854),
      yd = kd(5856);

    function Dd(dd) {
      return Dd = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(dd) {
        return typeof dd
      } : function(dd) {
        return dd && "function" == typeof Symbol && dd.constructor === Symbol && dd !== Symbol.prototype ? "symbol" : typeof dd
      }, Dd(dd)
    }

    function Td(dd, Jd) {
      var kd = Object.keys(dd);
      if (Object.getOwnPropertySymbols) {
        var pd = Object.getOwnPropertySymbols(dd);
        Jd && (pd = pd.filter((function(Jd) {
          return Object.getOwnPropertyDescriptor(dd, Jd).enumerable
        }))), kd.push.apply(kd, pd)
      }
      return kd
    }

    function Ed(dd) {
      for (var Jd = 1; Jd < arguments.length; Jd++) {
        var kd = null != arguments[Jd] ? arguments[Jd] : {};
        Jd % 2 ? Td(Object(kd), !0).forEach((function(Jd) {
          Vd(dd, Jd, kd[Jd])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(dd, Object.getOwnPropertyDescriptors(kd)) : Td(Object(kd)).forEach((function(Jd) {
          Object.defineProperty(dd, Jd, Object.getOwnPropertyDescriptor(kd, Jd))
        }))
      }
      return dd
    }

    function cd(dd, Jd) {
      for (var kd = 0; kd < Jd.length; kd++) {
        var pd = Jd[kd];
        pd.enumerable = pd.enumerable || !1, pd.configurable = !0, "value" in pd && (pd.writable = !0), Object.defineProperty(dd, zd(pd.key), pd)
      }
    }

    function hd(dd, Jd, kd) {
      return Jd = ud(Jd),
        function(dd, Jd) {
          if (Jd && ("object" === Dd(Jd) || "function" === typeof Jd)) return Jd;
          if (void 0 !== Jd) throw new TypeError("Derived constructors may only return object or undefined");
          return function(dd) {
            if (void 0 === dd) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return dd
          }(dd)
        }(dd, rd() ? Reflect.construct(Jd, kd || [], ud(dd).constructor) : Jd.apply(dd, kd))
    }

    function rd() {
      try {
        var dd = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (dd) {}
      return (rd = function() {
        return !!dd
      })()
    }

    function ud(dd) {
      return ud = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(dd) {
        return dd.__proto__ || Object.getPrototypeOf(dd)
      }, ud(dd)
    }

    function td(dd, Jd) {
      return td = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(dd, Jd) {
        return dd.__proto__ = Jd, dd
      }, td(dd, Jd)
    }

    function Vd(dd, Jd, kd) {
      return (Jd = zd(Jd)) in dd ? Object.defineProperty(dd, Jd, {
        value: kd,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : dd[Jd] = kd, dd
    }

    function zd(dd) {
      var Jd = function(dd, Jd) {
        if ("object" != Dd(dd) || !dd) return dd;
        var kd = dd[Symbol.toPrimitive];
        if (void 0 !== kd) {
          var pd = kd.call(dd, Jd || "default");
          if ("object" != Dd(pd)) return pd;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Jd ? String : Number)(dd)
      }(dd, "string");
      return "symbol" == Dd(Jd) ? Jd : Jd + ""
    }

    function Hd(dd) {
      return dd.dataKey
    }
    var wd = function(dd) {
      function Jd() {
        return function(dd, Jd) {
          if (!(dd instanceof Jd)) throw new TypeError("Cannot call a class as a function")
        }(this, Jd), hd(this, Jd, arguments)
      }
      return function(dd, Jd) {
        if ("function" !== typeof Jd && null !== Jd) throw new TypeError("Super expression must either be null or a function");
        dd.prototype = Object.create(Jd && Jd.prototype, {
          constructor: {
            value: dd,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(dd, "prototype", {
          writable: !1
        }), Jd && td(dd, Jd)
      }(Jd, dd), kd = Jd, (Nd = [{
        key: "render",
        value: function() {
          var dd = this,
            Jd = this.props,
            kd = Jd.active,
            Nd = Jd.allowEscapeViewBox,
            Wd = Jd.animationDuration,
            Pd = Jd.animationEasing,
            Zd = Jd.content,
            gd = Jd.coordinate,
            Cd = Jd.filterNull,
            Kd = Jd.isAnimationActive,
            od = Jd.offset,
            ld = Jd.payload,
            Qd = Jd.payloadUniqBy,
            Ld = Jd.position,
            Od = Jd.reverseDirection,
            ed = Jd.useTranslate3d,
            Rd = Jd.viewBox,
            Gd = Jd.wrapperStyle,
            vd = null !== ld && void 0 !== ld ? ld : [];
          Cd && vd.length && (vd = (0, yd.c)(ld.filter((function(Jd) {
            return null != Jd.value && (!0 !== Jd.hide || dd.props.includeHidden)
          })), Qd, Hd));
          var xd = vd.length > 0;
          return pd.createElement(nd, {
            allowEscapeViewBox: Nd,
            animationDuration: Wd,
            animationEasing: Pd,
            isAnimationActive: Kd,
            active: kd,
            coordinate: gd,
            hasPayload: xd,
            offset: od,
            position: Ld,
            reverseDirection: Od,
            useTranslate3d: ed,
            viewBox: Rd,
            wrapperStyle: Gd
          }, function(dd, Jd) {
            return pd.isValidElement(dd) ? pd.cloneElement(dd, Jd) : "function" === typeof dd ? pd.createElement(dd, Jd) : pd.createElement(Id, Jd)
          }(Zd, Ed(Ed({}, this.props), {}, {
            payload: vd
          })))
        }
      }]) && cd(kd.prototype, Nd), Wd && cd(kd, Wd), Object.defineProperty(kd, "prototype", {
        writable: !1
      }), kd;
      var kd, Nd, Wd
    }(pd.PureComponent);
    Vd(wd, "displayName", "Tooltip"), Vd(wd, "defaultProps", {
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
      isAnimationActive: !Ud.b.isSsr,
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
  5843: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Cd
    });
    var pd = kd(56),
      Nd = kd(4935),
      Wd = kd(5297),
      Pd = ["children", "className"];

    function Zd() {
      return Zd = Object.assign ? Object.assign.bind() : function(dd) {
        for (var Jd = 1; Jd < arguments.length; Jd++) {
          var kd = arguments[Jd];
          for (var pd in kd) Object.prototype.hasOwnProperty.call(kd, pd) && (dd[pd] = kd[pd])
        }
        return dd
      }, Zd.apply(this, arguments)
    }

    function gd(dd, Jd) {
      if (null == dd) return {};
      var kd, pd, Nd = function(dd, Jd) {
        if (null == dd) return {};
        var kd = {};
        for (var pd in dd)
          if (Object.prototype.hasOwnProperty.call(dd, pd)) {
            if (Jd.indexOf(pd) >= 0) continue;
            kd[pd] = dd[pd]
          } return kd
      }(dd, Jd);
      if (Object.getOwnPropertySymbols) {
        var Wd = Object.getOwnPropertySymbols(dd);
        for (pd = 0; pd < Wd.length; pd++) kd = Wd[pd], Jd.indexOf(kd) >= 0 || Object.prototype.propertyIsEnumerable.call(dd, kd) && (Nd[kd] = dd[kd])
      }
      return Nd
    }
    var Cd = pd.forwardRef((function(dd, Jd) {
      var kd = dd.children,
        Cd = dd.className,
        Kd = gd(dd, Pd),
        od = (0, Nd.b)("recharts-layer", Cd);
      return pd.createElement("g", Zd({
        className: od
      }, (0, Wd.e)(Kd, !0), {
        ref: Jd
      }), kd)
    }))
  },
  5841: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Cd
    });
    var pd = kd(56),
      Nd = kd(4935),
      Wd = kd(5297),
      Pd = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];

    function Zd() {
      return Zd = Object.assign ? Object.assign.bind() : function(dd) {
        for (var Jd = 1; Jd < arguments.length; Jd++) {
          var kd = arguments[Jd];
          for (var pd in kd) Object.prototype.hasOwnProperty.call(kd, pd) && (dd[pd] = kd[pd])
        }
        return dd
      }, Zd.apply(this, arguments)
    }

    function gd(dd, Jd) {
      if (null == dd) return {};
      var kd, pd, Nd = function(dd, Jd) {
        if (null == dd) return {};
        var kd = {};
        for (var pd in dd)
          if (Object.prototype.hasOwnProperty.call(dd, pd)) {
            if (Jd.indexOf(pd) >= 0) continue;
            kd[pd] = dd[pd]
          } return kd
      }(dd, Jd);
      if (Object.getOwnPropertySymbols) {
        var Wd = Object.getOwnPropertySymbols(dd);
        for (pd = 0; pd < Wd.length; pd++) kd = Wd[pd], Jd.indexOf(kd) >= 0 || Object.prototype.propertyIsEnumerable.call(dd, kd) && (Nd[kd] = dd[kd])
      }
      return Nd
    }

    function Cd(dd) {
      var Jd = dd.children,
        kd = dd.width,
        Cd = dd.height,
        Kd = dd.viewBox,
        od = dd.className,
        ld = dd.style,
        Qd = dd.title,
        Ld = dd.desc,
        Od = gd(dd, Pd),
        ed = Kd || {
          width: kd,
          height: Cd,
          x: 0,
          y: 0
        },
        Rd = (0, Nd.b)("recharts-surface", od);
      return pd.createElement("svg", Zd({}, (0, Wd.e)(Od, !0, "svg"), {
        className: Rd,
        width: kd,
        height: Cd,
        style: ld,
        viewBox: "".concat(ed.x, " ").concat(ed.y, " ").concat(ed.width, " ").concat(ed.height)
      }), pd.createElement("title", null, Qd), pd.createElement("desc", null, Ld), Jd)
    }
  },
  6210: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Gd,
      c: () => qd,
      f: () => Yd,
      i: () => Fd,
      m: () => vd,
      o: () => Md,
      s: () => ad,
      t: () => xd,
      v: () => sd,
      w: () => Bd
    });
    var pd = kd(56),
      Nd = kd(5836),
      Wd = kd(6214),
      Pd = kd.n(Wd),
      Zd = kd(6126),
      gd = kd.n(Zd),
      Cd = kd(5083),
      Kd = kd.n(Cd)()((function(dd) {
        return {
          x: dd.left,
          y: dd.top,
          width: dd.width,
          height: dd.height
        }
      }), (function(dd) {
        return ["l", dd.left, "t", dd.top, "w", dd.width, "h", dd.height].join("")
      })),
      od = kd(5029);
    var ld = (0, pd.createContext)(void 0),
      Qd = (0, pd.createContext)(void 0),
      Ld = (0, pd.createContext)(void 0),
      Od = (0, pd.createContext)({}),
      ed = (0, pd.createContext)(void 0),
      Rd = (0, pd.createContext)(0),
      Id = (0, pd.createContext)(0),
      Gd = function(dd) {
        var Jd = dd.state,
          kd = Jd.xAxisMap,
          Nd = Jd.yAxisMap,
          Wd = Jd.offset,
          Pd = dd.clipPathId,
          Zd = dd.children,
          gd = dd.width,
          Cd = dd.height,
          od = Kd(Wd);
        return pd.createElement(ld.Provider, {
          value: kd
        }, pd.createElement(Qd.Provider, {
          value: Nd
        }, pd.createElement(Od.Provider, {
          value: Wd
        }, pd.createElement(Ld.Provider, {
          value: od
        }, pd.createElement(ed.Provider, {
          value: Pd
        }, pd.createElement(Rd.Provider, {
          value: Cd
        }, pd.createElement(Id.Provider, {
          value: gd
        }, Zd)))))))
      },
      vd = function() {
        return (0, pd.useContext)(ed)
      };
    var xd = function(dd) {
        var Jd = (0, pd.useContext)(ld);
        null == Jd && (0, Nd.e)(!1);
        var kd = Jd[dd];
        return null == kd && (0, Nd.e)(!1), kd
      },
      qd = function() {
        var dd = (0, pd.useContext)(ld);
        return (0, od.i)(dd)
      },
      Bd = function() {
        var dd = (0, pd.useContext)(Qd);
        return Pd()(dd, (function(dd) {
          return gd()(dd.domain, Number.isFinite)
        })) || (0, od.i)(dd)
      },
      sd = function(dd) {
        var Jd = (0, pd.useContext)(Qd);
        null == Jd && (0, Nd.e)(!1);
        var kd = Jd[dd];
        return null == kd && (0, Nd.e)(!1), kd
      },
      ad = function() {
        return (0, pd.useContext)(Ld)
      },
      Md = function() {
        return (0, pd.useContext)(Od)
      },
      Fd = function() {
        return (0, pd.useContext)(Id)
      },
      Yd = function() {
        return (0, pd.useContext)(Rd)
      }
  },
  6237: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Hd
    });
    var pd = kd(56);

    function Nd() {}

    function Wd(dd, Jd, kd) {
      dd._context.bezierCurveTo((2 * dd._x0 + dd._x1) / 3, (2 * dd._y0 + dd._y1) / 3, (dd._x0 + 2 * dd._x1) / 3, (dd._y0 + 2 * dd._y1) / 3, (dd._x0 + 4 * dd._x1 + Jd) / 6, (dd._y0 + 4 * dd._y1 + kd) / 6)
    }

    function Pd(dd) {
      this._context = dd
    }

    function Zd(dd) {
      this._context = dd
    }

    function gd(dd) {
      this._context = dd
    }
    Pd.prototype = {
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
            Wd(this, this._x1, this._y1);
          case 2:
            this._context.lineTo(this._x1, this._y1)
        }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
      },
      point: function(dd, Jd) {
        switch (dd = +dd, Jd = +Jd, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(dd, Jd) : this._context.moveTo(dd, Jd);
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
          default:
            Wd(this, dd, Jd)
        }
        this._x0 = this._x1, this._x1 = dd, this._y0 = this._y1, this._y1 = Jd
      }
    }, Zd.prototype = {
      areaStart: Nd,
      areaEnd: Nd,
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
      point: function(dd, Jd) {
        switch (dd = +dd, Jd = +Jd, this._point) {
          case 0:
            this._point = 1, this._x2 = dd, this._y2 = Jd;
            break;
          case 1:
            this._point = 2, this._x3 = dd, this._y3 = Jd;
            break;
          case 2:
            this._point = 3, this._x4 = dd, this._y4 = Jd, this._context.moveTo((this._x0 + 4 * this._x1 + dd) / 6, (this._y0 + 4 * this._y1 + Jd) / 6);
            break;
          default:
            Wd(this, dd, Jd)
        }
        this._x0 = this._x1, this._x1 = dd, this._y0 = this._y1, this._y1 = Jd
      }
    }, gd.prototype = {
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
      point: function(dd, Jd) {
        switch (dd = +dd, Jd = +Jd, this._point) {
          case 0:
            this._point = 1;
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3;
            var kd = (this._x0 + 4 * this._x1 + dd) / 6,
              pd = (this._y0 + 4 * this._y1 + Jd) / 6;
            this._line ? this._context.lineTo(kd, pd) : this._context.moveTo(kd, pd);
            break;
          case 3:
            this._point = 4;
          default:
            Wd(this, dd, Jd)
        }
        this._x0 = this._x1, this._x1 = dd, this._y0 = this._y1, this._y1 = Jd
      }
    };
    class Cd {
      constructor(dd, Jd) {
        this._context = dd, this._x = Jd
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
      point(dd, Jd) {
        switch (dd = +dd, Jd = +Jd, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(dd, Jd) : this._context.moveTo(dd, Jd);
            break;
          case 1:
            this._point = 2;
          default:
            this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + dd) / 2, this._y0, this._x0, Jd, dd, Jd) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + Jd) / 2, dd, this._y0, dd, Jd)
        }
        this._x0 = dd, this._y0 = Jd
      }
    }

    function Kd(dd) {
      this._context = dd
    }

    function od(dd) {
      this._context = dd
    }

    function ld(dd) {
      return new od(dd)
    }

    function Qd(dd) {
      return dd < 0 ? -1 : 1
    }

    function Ld(dd, Jd, kd) {
      var pd = dd._x1 - dd._x0,
        Nd = Jd - dd._x1,
        Wd = (dd._y1 - dd._y0) / (pd || Nd < 0 && -0),
        Pd = (kd - dd._y1) / (Nd || pd < 0 && -0),
        Zd = (Wd * Nd + Pd * pd) / (pd + Nd);
      return (Qd(Wd) + Qd(Pd)) * Math.min(Math.abs(Wd), Math.abs(Pd), .5 * Math.abs(Zd)) || 0
    }

    function Od(dd, Jd) {
      var kd = dd._x1 - dd._x0;
      return kd ? (3 * (dd._y1 - dd._y0) / kd - Jd) / 2 : Jd
    }

    function ed(dd, Jd, kd) {
      var pd = dd._x0,
        Nd = dd._y0,
        Wd = dd._x1,
        Pd = dd._y1,
        Zd = (Wd - pd) / 3;
      dd._context.bezierCurveTo(pd + Zd, Nd + Zd * Jd, Wd - Zd, Pd - Zd * kd, Wd, Pd)
    }

    function Rd(dd) {
      this._context = dd
    }

    function Id(dd) {
      this._context = new Gd(dd)
    }

    function Gd(dd) {
      this._context = dd
    }

    function vd(dd) {
      this._context = dd
    }

    function xd(dd) {
      var Jd, kd, pd = dd.length - 1,
        Nd = new Array(pd),
        Wd = new Array(pd),
        Pd = new Array(pd);
      for (Nd[0] = 0, Wd[0] = 2, Pd[0] = dd[0] + 2 * dd[1], Jd = 1; Jd < pd - 1; ++Jd) Nd[Jd] = 1, Wd[Jd] = 4, Pd[Jd] = 4 * dd[Jd] + 2 * dd[Jd + 1];
      for (Nd[pd - 1] = 2, Wd[pd - 1] = 7, Pd[pd - 1] = 8 * dd[pd - 1] + dd[pd], Jd = 1; Jd < pd; ++Jd) kd = Nd[Jd] / Wd[Jd - 1], Wd[Jd] -= kd, Pd[Jd] -= kd * Pd[Jd - 1];
      for (Nd[pd - 1] = Pd[pd - 1] / Wd[pd - 1], Jd = pd - 2; Jd >= 0; --Jd) Nd[Jd] = (Pd[Jd] - Nd[Jd + 1]) / Wd[Jd];
      for (Wd[pd - 1] = (dd[pd] + Nd[pd - 1]) / 2, Jd = 0; Jd < pd - 1; ++Jd) Wd[Jd] = 2 * dd[Jd + 1] - Nd[Jd + 1];
      return [Nd, Wd]
    }

    function qd(dd, Jd) {
      this._context = dd, this._t = Jd
    }
    Kd.prototype = {
      areaStart: Nd,
      areaEnd: Nd,
      lineStart: function() {
        this._point = 0
      },
      lineEnd: function() {
        this._point && this._context.closePath()
      },
      point: function(dd, Jd) {
        dd = +dd, Jd = +Jd, this._point ? this._context.lineTo(dd, Jd) : (this._point = 1, this._context.moveTo(dd, Jd))
      }
    }, od.prototype = {
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
      point: function(dd, Jd) {
        switch (dd = +dd, Jd = +Jd, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(dd, Jd) : this._context.moveTo(dd, Jd);
            break;
          case 1:
            this._point = 2;
          default:
            this._context.lineTo(dd, Jd)
        }
      }
    }, Rd.prototype = {
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
            ed(this, this._t0, Od(this, this._t0))
        }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
      },
      point: function(dd, Jd) {
        var kd = NaN;
        if (Jd = +Jd, (dd = +dd) !== this._x1 || Jd !== this._y1) {
          switch (this._point) {
            case 0:
              this._point = 1, this._line ? this._context.lineTo(dd, Jd) : this._context.moveTo(dd, Jd);
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              this._point = 3, ed(this, Od(this, kd = Ld(this, dd, Jd)), kd);
              break;
            default:
              ed(this, this._t0, kd = Ld(this, dd, Jd))
          }
          this._x0 = this._x1, this._x1 = dd, this._y0 = this._y1, this._y1 = Jd, this._t0 = kd
        }
      }
    }, (Id.prototype = Object.create(Rd.prototype)).point = function(dd, Jd) {
      Rd.prototype.point.call(this, Jd, dd)
    }, Gd.prototype = {
      moveTo: function(dd, Jd) {
        this._context.moveTo(Jd, dd)
      },
      closePath: function() {
        this._context.closePath()
      },
      lineTo: function(dd, Jd) {
        this._context.lineTo(Jd, dd)
      },
      bezierCurveTo: function(dd, Jd, kd, pd, Nd, Wd) {
        this._context.bezierCurveTo(Jd, dd, pd, kd, Wd, Nd)
      }
    }, vd.prototype = {
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
        var dd = this._x,
          Jd = this._y,
          kd = dd.length;
        if (kd)
          if (this._line ? this._context.lineTo(dd[0], Jd[0]) : this._context.moveTo(dd[0], Jd[0]), 2 === kd) this._context.lineTo(dd[1], Jd[1]);
          else
            for (var pd = xd(dd), Nd = xd(Jd), Wd = 0, Pd = 1; Pd < kd; ++Wd, ++Pd) this._context.bezierCurveTo(pd[0][Wd], Nd[0][Wd], pd[1][Wd], Nd[1][Wd], dd[Pd], Jd[Pd]);
        (this._line || 0 !== this._line && 1 === kd) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null
      },
      point: function(dd, Jd) {
        this._x.push(+dd), this._y.push(+Jd)
      }
    }, qd.prototype = {
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
      point: function(dd, Jd) {
        switch (dd = +dd, Jd = +Jd, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(dd, Jd) : this._context.moveTo(dd, Jd);
            break;
          case 1:
            this._point = 2;
          default:
            if (this._t <= 0) this._context.lineTo(this._x, Jd), this._context.lineTo(dd, Jd);
            else {
              var kd = this._x * (1 - this._t) + dd * this._t;
              this._context.lineTo(kd, this._y), this._context.lineTo(kd, Jd)
            }
        }
        this._x = dd, this._y = Jd
      }
    };
    var Bd = kd(6101),
      sd = kd(5967),
      ad = kd(5972);

    function Md(dd) {
      return dd[0]
    }

    function Fd(dd) {
      return dd[1]
    }

    function Yd(dd, Jd) {
      var kd = (0, sd.d)(!0),
        pd = null,
        Nd = ld,
        Wd = null,
        Pd = (0, ad.c)(Zd);

      function Zd(Zd) {
        var gd, Cd, Kd, od = (Zd = (0, Bd.e)(Zd)).length,
          ld = !1;
        for (null == pd && (Wd = Nd(Kd = Pd())), gd = 0; gd <= od; ++gd) !(gd < od && kd(Cd = Zd[gd], gd, Zd)) === ld && ((ld = !ld) ? Wd.lineStart() : Wd.lineEnd()), ld && Wd.point(+dd(Cd, gd, Zd), +Jd(Cd, gd, Zd));
        if (Kd) return Wd = null, Kd + "" || null
      }
      return dd = "function" === typeof dd ? dd : void 0 === dd ? Md : (0, sd.d)(dd), Jd = "function" === typeof Jd ? Jd : void 0 === Jd ? Fd : (0, sd.d)(Jd), Zd.x = function(Jd) {
        return arguments.length ? (dd = "function" === typeof Jd ? Jd : (0, sd.d)(+Jd), Zd) : dd
      }, Zd.y = function(dd) {
        return arguments.length ? (Jd = "function" === typeof dd ? dd : (0, sd.d)(+dd), Zd) : Jd
      }, Zd.defined = function(dd) {
        return arguments.length ? (kd = "function" === typeof dd ? dd : (0, sd.d)(!!dd), Zd) : kd
      }, Zd.curve = function(dd) {
        return arguments.length ? (Nd = dd, null != pd && (Wd = Nd(pd)), Zd) : Nd
      }, Zd.context = function(dd) {
        return arguments.length ? (null == dd ? pd = Wd = null : Wd = Nd(pd = dd), Zd) : pd
      }, Zd
    }

    function md(dd, Jd, kd) {
      var pd = null,
        Nd = (0, sd.d)(!0),
        Wd = null,
        Pd = ld,
        Zd = null,
        gd = (0, ad.c)(Cd);

      function Cd(Cd) {
        var Kd, od, ld, Qd, Ld, Od = (Cd = (0, Bd.e)(Cd)).length,
          ed = !1,
          Rd = new Array(Od),
          Id = new Array(Od);
        for (null == Wd && (Zd = Pd(Ld = gd())), Kd = 0; Kd <= Od; ++Kd) {
          if (!(Kd < Od && Nd(Qd = Cd[Kd], Kd, Cd)) === ed)
            if (ed = !ed) od = Kd, Zd.areaStart(), Zd.lineStart();
            else {
              for (Zd.lineEnd(), Zd.lineStart(), ld = Kd - 1; ld >= od; --ld) Zd.point(Rd[ld], Id[ld]);
              Zd.lineEnd(), Zd.areaEnd()
            } ed && (Rd[Kd] = +dd(Qd, Kd, Cd), Id[Kd] = +Jd(Qd, Kd, Cd), Zd.point(pd ? +pd(Qd, Kd, Cd) : Rd[Kd], kd ? +kd(Qd, Kd, Cd) : Id[Kd]))
        }
        if (Ld) return Zd = null, Ld + "" || null
      }

      function Kd() {
        return Yd().defined(Nd).curve(Pd).context(Wd)
      }
      return dd = "function" === typeof dd ? dd : void 0 === dd ? Md : (0, sd.d)(+dd), Jd = "function" === typeof Jd ? Jd : void 0 === Jd ? (0, sd.d)(0) : (0, sd.d)(+Jd), kd = "function" === typeof kd ? kd : void 0 === kd ? Fd : (0, sd.d)(+kd), Cd.x = function(Jd) {
        return arguments.length ? (dd = "function" === typeof Jd ? Jd : (0, sd.d)(+Jd), pd = null, Cd) : dd
      }, Cd.x0 = function(Jd) {
        return arguments.length ? (dd = "function" === typeof Jd ? Jd : (0, sd.d)(+Jd), Cd) : dd
      }, Cd.x1 = function(dd) {
        return arguments.length ? (pd = null == dd ? null : "function" === typeof dd ? dd : (0, sd.d)(+dd), Cd) : pd
      }, Cd.y = function(dd) {
        return arguments.length ? (Jd = "function" === typeof dd ? dd : (0, sd.d)(+dd), kd = null, Cd) : Jd
      }, Cd.y0 = function(dd) {
        return arguments.length ? (Jd = "function" === typeof dd ? dd : (0, sd.d)(+dd), Cd) : Jd
      }, Cd.y1 = function(dd) {
        return arguments.length ? (kd = null == dd ? null : "function" === typeof dd ? dd : (0, sd.d)(+dd), Cd) : kd
      }, Cd.lineX0 = Cd.lineY0 = function() {
        return Kd().x(dd).y(Jd)
      }, Cd.lineY1 = function() {
        return Kd().x(dd).y(kd)
      }, Cd.lineX1 = function() {
        return Kd().x(pd).y(Jd)
      }, Cd.defined = function(dd) {
        return arguments.length ? (Nd = "function" === typeof dd ? dd : (0, sd.d)(!!dd), Cd) : Nd
      }, Cd.curve = function(dd) {
        return arguments.length ? (Pd = dd, null != Wd && (Zd = Pd(Wd)), Cd) : Pd
      }, Cd.context = function(dd) {
        return arguments.length ? (null == dd ? Wd = Zd = null : Zd = Pd(Wd = dd), Cd) : Wd
      }, Cd
    }
    var bd = kd(5919),
      Sd = kd.n(bd),
      jd = kd(5131),
      Xd = kd.n(jd),
      fd = kd(4935),
      nd = kd(5317),
      Ud = kd(5297),
      yd = kd(5029);

    function Dd(dd) {
      return Dd = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(dd) {
        return typeof dd
      } : function(dd) {
        return dd && "function" == typeof Symbol && dd.constructor === Symbol && dd !== Symbol.prototype ? "symbol" : typeof dd
      }, Dd(dd)
    }

    function Td() {
      return Td = Object.assign ? Object.assign.bind() : function(dd) {
        for (var Jd = 1; Jd < arguments.length; Jd++) {
          var kd = arguments[Jd];
          for (var pd in kd) Object.prototype.hasOwnProperty.call(kd, pd) && (dd[pd] = kd[pd])
        }
        return dd
      }, Td.apply(this, arguments)
    }

    function Ed(dd, Jd) {
      var kd = Object.keys(dd);
      if (Object.getOwnPropertySymbols) {
        var pd = Object.getOwnPropertySymbols(dd);
        Jd && (pd = pd.filter((function(Jd) {
          return Object.getOwnPropertyDescriptor(dd, Jd).enumerable
        }))), kd.push.apply(kd, pd)
      }
      return kd
    }

    function cd(dd) {
      for (var Jd = 1; Jd < arguments.length; Jd++) {
        var kd = null != arguments[Jd] ? arguments[Jd] : {};
        Jd % 2 ? Ed(Object(kd), !0).forEach((function(Jd) {
          hd(dd, Jd, kd[Jd])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(dd, Object.getOwnPropertyDescriptors(kd)) : Ed(Object(kd)).forEach((function(Jd) {
          Object.defineProperty(dd, Jd, Object.getOwnPropertyDescriptor(kd, Jd))
        }))
      }
      return dd
    }

    function hd(dd, Jd, kd) {
      return (Jd = function(dd) {
        var Jd = function(dd, Jd) {
          if ("object" != Dd(dd) || !dd) return dd;
          var kd = dd[Symbol.toPrimitive];
          if (void 0 !== kd) {
            var pd = kd.call(dd, Jd || "default");
            if ("object" != Dd(pd)) return pd;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === Jd ? String : Number)(dd)
        }(dd, "string");
        return "symbol" == Dd(Jd) ? Jd : Jd + ""
      }(Jd)) in dd ? Object.defineProperty(dd, Jd, {
        value: kd,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : dd[Jd] = kd, dd
    }
    var rd = {
        curveBasisClosed: function(dd) {
          return new Zd(dd)
        },
        curveBasisOpen: function(dd) {
          return new gd(dd)
        },
        curveBasis: function(dd) {
          return new Pd(dd)
        },
        curveBumpX: function(dd) {
          return new Cd(dd, !0)
        },
        curveBumpY: function(dd) {
          return new Cd(dd, !1)
        },
        curveLinearClosed: function(dd) {
          return new Kd(dd)
        },
        curveLinear: ld,
        curveMonotoneX: function(dd) {
          return new Rd(dd)
        },
        curveMonotoneY: function(dd) {
          return new Id(dd)
        },
        curveNatural: function(dd) {
          return new vd(dd)
        },
        curveStep: function(dd) {
          return new qd(dd, .5)
        },
        curveStepAfter: function(dd) {
          return new qd(dd, 1)
        },
        curveStepBefore: function(dd) {
          return new qd(dd, 0)
        }
      },
      ud = function(dd) {
        return dd.x === +dd.x && dd.y === +dd.y
      },
      td = function(dd) {
        return dd.x
      },
      Vd = function(dd) {
        return dd.y
      },
      zd = function(dd) {
        var Jd, kd = dd.type,
          pd = void 0 === kd ? "linear" : kd,
          Nd = dd.points,
          Wd = void 0 === Nd ? [] : Nd,
          Pd = dd.baseLine,
          Zd = dd.layout,
          gd = dd.connectNulls,
          Cd = void 0 !== gd && gd,
          Kd = function(dd, Jd) {
            if (Xd()(dd)) return dd;
            var kd = "curve".concat(Sd()(dd));
            return "curveMonotone" !== kd && "curveBump" !== kd || !Jd ? rd[kd] || ld : rd["".concat(kd).concat("vertical" === Jd ? "Y" : "X")]
          }(pd, Zd),
          od = Cd ? Wd.filter((function(dd) {
            return ud(dd)
          })) : Wd;
        if (Array.isArray(Pd)) {
          var Qd = Cd ? Pd.filter((function(dd) {
              return ud(dd)
            })) : Pd,
            Ld = od.map((function(dd, Jd) {
              return cd(cd({}, dd), {}, {
                base: Qd[Jd]
              })
            }));
          return (Jd = "vertical" === Zd ? md().y(Vd).x1(td).x0((function(dd) {
            return dd.base.x
          })) : md().x(td).y1(Vd).y0((function(dd) {
            return dd.base.y
          }))).defined(ud).curve(Kd), Jd(Ld)
        }
        return (Jd = "vertical" === Zd && (0, yd.B)(Pd) ? md().y(Vd).x1(td).x0(Pd) : (0, yd.B)(Pd) ? md().x(td).y1(Vd).y0(Pd) : Yd().x(td).y(Vd)).defined(ud).curve(Kd), Jd(od)
      },
      Hd = function(dd) {
        var Jd = dd.className,
          kd = dd.points,
          Nd = dd.path,
          Wd = dd.pathRef;
        if ((!kd || !kd.length) && !Nd) return null;
        var Pd = kd && kd.length ? zd(dd) : Nd;
        return pd.createElement("path", Td({}, (0, Ud.e)(dd, !1), (0, nd.j)(dd), {
          className: (0, fd.b)("recharts-curve", Jd),
          d: Pd,
          ref: Wd
        }))
      }
  },
  5978: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => gd
    });
    var pd = kd(56),
      Nd = kd(4935),
      Wd = kd(5317),
      Pd = kd(5297);

    function Zd() {
      return Zd = Object.assign ? Object.assign.bind() : function(dd) {
        for (var Jd = 1; Jd < arguments.length; Jd++) {
          var kd = arguments[Jd];
          for (var pd in kd) Object.prototype.hasOwnProperty.call(kd, pd) && (dd[pd] = kd[pd])
        }
        return dd
      }, Zd.apply(this, arguments)
    }
    var gd = function(dd) {
      var Jd = dd.cx,
        kd = dd.cy,
        gd = dd.r,
        Cd = dd.className,
        Kd = (0, Nd.b)("recharts-dot", Cd);
      return Jd === +Jd && kd === +kd && gd === +gd ? pd.createElement("circle", Zd({}, (0, Pd.e)(dd, !1), (0, Wd.j)(dd), {
        className: Kd,
        cx: Jd,
        cy: kd,
        r: gd
      })) : null
    }
  },
  5987: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Rd,
      f: () => Od
    });
    var pd = kd(56),
      Nd = kd(4935),
      Wd = kd(5992),
      Pd = kd(5297);

    function Zd(dd) {
      return Zd = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(dd) {
        return typeof dd
      } : function(dd) {
        return dd && "function" == typeof Symbol && dd.constructor === Symbol && dd !== Symbol.prototype ? "symbol" : typeof dd
      }, Zd(dd)
    }

    function gd() {
      return gd = Object.assign ? Object.assign.bind() : function(dd) {
        for (var Jd = 1; Jd < arguments.length; Jd++) {
          var kd = arguments[Jd];
          for (var pd in kd) Object.prototype.hasOwnProperty.call(kd, pd) && (dd[pd] = kd[pd])
        }
        return dd
      }, gd.apply(this, arguments)
    }

    function Cd(dd, Jd) {
      return function(dd) {
        if (Array.isArray(dd)) return dd
      }(dd) || function(dd, Jd) {
        var kd = null == dd ? null : "undefined" != typeof Symbol && dd[Symbol.iterator] || dd["@@iterator"];
        if (null != kd) {
          var pd, Nd, Wd, Pd, Zd = [],
            gd = !0,
            Cd = !1;
          try {
            if (Wd = (kd = kd.call(dd)).next, 0 === Jd) {
              if (Object(kd) !== kd) return;
              gd = !1
            } else
              for (; !(gd = (pd = Wd.call(kd)).done) && (Zd.push(pd.value), Zd.length !== Jd); gd = !0);
          } catch (dd) {
            Cd = !0, Nd = dd
          } finally {
            try {
              if (!gd && null != kd.return && (Pd = kd.return(), Object(Pd) !== Pd)) return
            } finally {
              if (Cd) throw Nd
            }
          }
          return Zd
        }
      }(dd, Jd) || function(dd, Jd) {
        if (!dd) return;
        if ("string" === typeof dd) return Kd(dd, Jd);
        var kd = Object.prototype.toString.call(dd).slice(8, -1);
        "Object" === kd && dd.constructor && (kd = dd.constructor.name);
        if ("Map" === kd || "Set" === kd) return Array.from(dd);
        if ("Arguments" === kd || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(kd)) return Kd(dd, Jd)
      }(dd, Jd) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Kd(dd, Jd) {
      (null == Jd || Jd > dd.length) && (Jd = dd.length);
      for (var kd = 0, pd = new Array(Jd); kd < Jd; kd++) pd[kd] = dd[kd];
      return pd
    }

    function od(dd, Jd) {
      var kd = Object.keys(dd);
      if (Object.getOwnPropertySymbols) {
        var pd = Object.getOwnPropertySymbols(dd);
        Jd && (pd = pd.filter((function(Jd) {
          return Object.getOwnPropertyDescriptor(dd, Jd).enumerable
        }))), kd.push.apply(kd, pd)
      }
      return kd
    }

    function ld(dd) {
      for (var Jd = 1; Jd < arguments.length; Jd++) {
        var kd = null != arguments[Jd] ? arguments[Jd] : {};
        Jd % 2 ? od(Object(kd), !0).forEach((function(Jd) {
          Qd(dd, Jd, kd[Jd])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(dd, Object.getOwnPropertyDescriptors(kd)) : od(Object(kd)).forEach((function(Jd) {
          Object.defineProperty(dd, Jd, Object.getOwnPropertyDescriptor(kd, Jd))
        }))
      }
      return dd
    }

    function Qd(dd, Jd, kd) {
      return (Jd = function(dd) {
        var Jd = function(dd, Jd) {
          if ("object" != Zd(dd) || !dd) return dd;
          var kd = dd[Symbol.toPrimitive];
          if (void 0 !== kd) {
            var pd = kd.call(dd, Jd || "default");
            if ("object" != Zd(pd)) return pd;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === Jd ? String : Number)(dd)
        }(dd, "string");
        return "symbol" == Zd(Jd) ? Jd : Jd + ""
      }(Jd)) in dd ? Object.defineProperty(dd, Jd, {
        value: kd,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : dd[Jd] = kd, dd
    }
    var Ld = function(dd, Jd, kd, pd, Nd) {
        var Wd, Pd = Math.min(Math.abs(kd) / 2, Math.abs(pd) / 2),
          Zd = pd >= 0 ? 1 : -1,
          gd = kd >= 0 ? 1 : -1,
          Cd = pd >= 0 && kd >= 0 || pd < 0 && kd < 0 ? 1 : 0;
        if (Pd > 0 && Nd instanceof Array) {
          for (var Kd = [0, 0, 0, 0], od = 0; od < 4; od++) Kd[od] = Nd[od] > Pd ? Pd : Nd[od];
          Wd = "M".concat(dd, ",").concat(Jd + Zd * Kd[0]), Kd[0] > 0 && (Wd += "A ".concat(Kd[0], ",").concat(Kd[0], ",0,0,").concat(Cd, ",").concat(dd + gd * Kd[0], ",").concat(Jd)), Wd += "L ".concat(dd + kd - gd * Kd[1], ",").concat(Jd), Kd[1] > 0 && (Wd += "A ".concat(Kd[1], ",").concat(Kd[1], ",0,0,").concat(Cd, ",\n        ").concat(dd + kd, ",").concat(Jd + Zd * Kd[1])), Wd += "L ".concat(dd + kd, ",").concat(Jd + pd - Zd * Kd[2]), Kd[2] > 0 && (Wd += "A ".concat(Kd[2], ",").concat(Kd[2], ",0,0,").concat(Cd, ",\n        ").concat(dd + kd - gd * Kd[2], ",").concat(Jd + pd)), Wd += "L ".concat(dd + gd * Kd[3], ",").concat(Jd + pd), Kd[3] > 0 && (Wd += "A ".concat(Kd[3], ",").concat(Kd[3], ",0,0,").concat(Cd, ",\n        ").concat(dd, ",").concat(Jd + pd - Zd * Kd[3])), Wd += "Z"
        } else if (Pd > 0 && Nd === +Nd && Nd > 0) {
          var ld = Math.min(Pd, Nd);
          Wd = "M ".concat(dd, ",").concat(Jd + Zd * ld, "\n            A ").concat(ld, ",").concat(ld, ",0,0,").concat(Cd, ",").concat(dd + gd * ld, ",").concat(Jd, "\n            L ").concat(dd + kd - gd * ld, ",").concat(Jd, "\n            A ").concat(ld, ",").concat(ld, ",0,0,").concat(Cd, ",").concat(dd + kd, ",").concat(Jd + Zd * ld, "\n            L ").concat(dd + kd, ",").concat(Jd + pd - Zd * ld, "\n            A ").concat(ld, ",").concat(ld, ",0,0,").concat(Cd, ",").concat(dd + kd - gd * ld, ",").concat(Jd + pd, "\n            L ").concat(dd + gd * ld, ",").concat(Jd + pd, "\n            A ").concat(ld, ",").concat(ld, ",0,0,").concat(Cd, ",").concat(dd, ",").concat(Jd + pd - Zd * ld, " Z")
        } else Wd = "M ".concat(dd, ",").concat(Jd, " h ").concat(kd, " v ").concat(pd, " h ").concat(-kd, " Z");
        return Wd
      },
      Od = function(dd, Jd) {
        if (!dd || !Jd) return !1;
        var kd = dd.x,
          pd = dd.y,
          Nd = Jd.x,
          Wd = Jd.y,
          Pd = Jd.width,
          Zd = Jd.height;
        if (Math.abs(Pd) > 0 && Math.abs(Zd) > 0) {
          var gd = Math.min(Nd, Nd + Pd),
            Cd = Math.max(Nd, Nd + Pd),
            Kd = Math.min(Wd, Wd + Zd),
            od = Math.max(Wd, Wd + Zd);
          return kd >= gd && kd <= Cd && pd >= Kd && pd <= od
        }
        return !1
      },
      ed = {
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
      Rd = function(dd) {
        var Jd = ld(ld({}, ed), dd),
          kd = (0, pd.useRef)(),
          Zd = Cd((0, pd.useState)(-1), 2),
          Kd = Zd[0],
          od = Zd[1];
        (0, pd.useEffect)((function() {
          if (kd.current && kd.current.getTotalLength) try {
            var dd = kd.current.getTotalLength();
            dd && od(dd)
          } catch (Jd) {}
        }), []);
        var Qd = Jd.x,
          Od = Jd.y,
          Rd = Jd.width,
          Id = Jd.height,
          Gd = Jd.radius,
          vd = Jd.className,
          xd = Jd.animationEasing,
          qd = Jd.animationDuration,
          Bd = Jd.animationBegin,
          sd = Jd.isAnimationActive,
          ad = Jd.isUpdateAnimationActive;
        if (Qd !== +Qd || Od !== +Od || Rd !== +Rd || Id !== +Id || 0 === Rd || 0 === Id) return null;
        var Md = (0, Nd.b)("recharts-rectangle", vd);
        return ad ? pd.createElement(Wd.d, {
          canBegin: Kd > 0,
          from: {
            width: Rd,
            height: Id,
            x: Qd,
            y: Od
          },
          to: {
            width: Rd,
            height: Id,
            x: Qd,
            y: Od
          },
          duration: qd,
          animationEasing: xd,
          isActive: ad
        }, (function(dd) {
          var Nd = dd.width,
            Zd = dd.height,
            Cd = dd.x,
            od = dd.y;
          return pd.createElement(Wd.d, {
            canBegin: Kd > 0,
            from: "0px ".concat(-1 === Kd ? 1 : Kd, "px"),
            to: "".concat(Kd, "px 0px"),
            attributeName: "strokeDasharray",
            ZQ: Bd,
            duration: qd,
            isActive: sd,
            easing: xd
          }, pd.createElement("path", gd({}, (0, Pd.e)(Jd, !0), {
            className: Md,
            d: Ld(Cd, od, Nd, Zd, Gd),
            ref: kd
          })))
        })) : pd.createElement("path", gd({}, (0, Pd.e)(Jd, !0), {
          className: Md,
          d: Ld(Qd, Od, Rd, Id, Gd)
        }))
      }
  },
  6185: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => ed
    });
    var pd = kd(56),
      Nd = kd(4935),
      Wd = kd(5297),
      Pd = kd(6110),
      Zd = kd(5029);

    function gd(dd) {
      return gd = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(dd) {
        return typeof dd
      } : function(dd) {
        return dd && "function" == typeof Symbol && dd.constructor === Symbol && dd !== Symbol.prototype ? "symbol" : typeof dd
      }, gd(dd)
    }

    function Cd() {
      return Cd = Object.assign ? Object.assign.bind() : function(dd) {
        for (var Jd = 1; Jd < arguments.length; Jd++) {
          var kd = arguments[Jd];
          for (var pd in kd) Object.prototype.hasOwnProperty.call(kd, pd) && (dd[pd] = kd[pd])
        }
        return dd
      }, Cd.apply(this, arguments)
    }

    function Kd(dd, Jd) {
      var kd = Object.keys(dd);
      if (Object.getOwnPropertySymbols) {
        var pd = Object.getOwnPropertySymbols(dd);
        Jd && (pd = pd.filter((function(Jd) {
          return Object.getOwnPropertyDescriptor(dd, Jd).enumerable
        }))), kd.push.apply(kd, pd)
      }
      return kd
    }

    function od(dd) {
      for (var Jd = 1; Jd < arguments.length; Jd++) {
        var kd = null != arguments[Jd] ? arguments[Jd] : {};
        Jd % 2 ? Kd(Object(kd), !0).forEach((function(Jd) {
          ld(dd, Jd, kd[Jd])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(dd, Object.getOwnPropertyDescriptors(kd)) : Kd(Object(kd)).forEach((function(Jd) {
          Object.defineProperty(dd, Jd, Object.getOwnPropertyDescriptor(kd, Jd))
        }))
      }
      return dd
    }

    function ld(dd, Jd, kd) {
      return (Jd = function(dd) {
        var Jd = function(dd, Jd) {
          if ("object" != gd(dd) || !dd) return dd;
          var kd = dd[Symbol.toPrimitive];
          if (void 0 !== kd) {
            var pd = kd.call(dd, Jd || "default");
            if ("object" != gd(pd)) return pd;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === Jd ? String : Number)(dd)
        }(dd, "string");
        return "symbol" == gd(Jd) ? Jd : Jd + ""
      }(Jd)) in dd ? Object.defineProperty(dd, Jd, {
        value: kd,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : dd[Jd] = kd, dd
    }
    var Qd = function(dd) {
        var Jd = dd.cx,
          kd = dd.cy,
          pd = dd.radius,
          Nd = dd.angle,
          Wd = dd.sign,
          Zd = dd.isExternal,
          gd = dd.cornerRadius,
          Cd = dd.cornerIsExternal,
          Kd = gd * (Zd ? 1 : -1) + pd,
          od = Math.asin(gd / Kd) / Pd.e,
          ld = Cd ? Nd : Nd + Wd * od,
          Qd = Cd ? Nd - Wd * od : Nd;
        return {
          center: (0, Pd.j)(Jd, kd, Kd, ld),
          circleTangency: (0, Pd.j)(Jd, kd, pd, ld),
          lineTangency: (0, Pd.j)(Jd, kd, Kd * Math.cos(od * Pd.e), Qd),
          nZ: od
        }
      },
      Ld = function(dd) {
        var Jd = dd.cx,
          kd = dd.cy,
          pd = dd.innerRadius,
          Nd = dd.outerRadius,
          Wd = dd.startAngle,
          gd = function(dd, Jd) {
            return (0, Zd.D)(Jd - dd) * Math.min(Math.abs(Jd - dd), 359.999)
          }(Wd, dd.endAngle),
          Cd = Wd + gd,
          Kd = (0, Pd.j)(Jd, kd, Nd, Wd),
          od = (0, Pd.j)(Jd, kd, Nd, Cd),
          ld = "M ".concat(Kd.x, ",").concat(Kd.y, "\n    A ").concat(Nd, ",").concat(Nd, ",0,\n    ").concat(+(Math.abs(gd) > 180), ",").concat(+(Wd > Cd), ",\n    ").concat(od.x, ",").concat(od.y, "\n  ");
        if (pd > 0) {
          var Qd = (0, Pd.j)(Jd, kd, pd, Wd),
            Ld = (0, Pd.j)(Jd, kd, pd, Cd);
          ld += "L ".concat(Ld.x, ",").concat(Ld.y, "\n            A ").concat(pd, ",").concat(pd, ",0,\n            ").concat(+(Math.abs(gd) > 180), ",").concat(+(Wd <= Cd), ",\n            ").concat(Qd.x, ",").concat(Qd.y, " Z")
        } else ld += "L ".concat(Jd, ",").concat(kd, " Z");
        return ld
      },
      Od = {
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
      ed = function(dd) {
        var Jd = od(od({}, Od), dd),
          kd = Jd.cx,
          Pd = Jd.cy,
          gd = Jd.innerRadius,
          Kd = Jd.outerRadius,
          ld = Jd.cornerRadius,
          ed = Jd.forceCornerRadius,
          Rd = Jd.cornerIsExternal,
          Id = Jd.startAngle,
          Gd = Jd.endAngle,
          vd = Jd.className;
        if (Kd < gd || Id === Gd) return null;
        var xd, qd = (0, Nd.b)("recharts-sector", vd),
          Bd = Kd - gd,
          sd = (0, Zd.m)(ld, Bd, 0, !0);
        return xd = sd > 0 && Math.abs(Id - Gd) < 360 ? function(dd) {
          var Jd = dd.cx,
            kd = dd.cy,
            pd = dd.innerRadius,
            Nd = dd.outerRadius,
            Wd = dd.cornerRadius,
            Pd = dd.forceCornerRadius,
            gd = dd.cornerIsExternal,
            Cd = dd.startAngle,
            Kd = dd.endAngle,
            od = (0, Zd.D)(Kd - Cd),
            ld = Qd({
              cx: Jd,
              cy: kd,
              radius: Nd,
              angle: Cd,
              sign: od,
              cornerRadius: Wd,
              cornerIsExternal: gd
            }),
            Od = ld.circleTangency,
            ed = ld.lineTangency,
            Rd = ld.nZ,
            Id = Qd({
              cx: Jd,
              cy: kd,
              radius: Nd,
              angle: Kd,
              sign: -od,
              cornerRadius: Wd,
              cornerIsExternal: gd
            }),
            Gd = Id.circleTangency,
            vd = Id.lineTangency,
            xd = Id.nZ,
            qd = gd ? Math.abs(Cd - Kd) : Math.abs(Cd - Kd) - Rd - xd;
          if (qd < 0) return Pd ? "M ".concat(ed.x, ",").concat(ed.y, "\n        a").concat(Wd, ",").concat(Wd, ",0,0,1,").concat(2 * Wd, ",0\n        a").concat(Wd, ",").concat(Wd, ",0,0,1,").concat(2 * -Wd, ",0\n      ") : Ld({
            cx: Jd,
            cy: kd,
            innerRadius: pd,
            outerRadius: Nd,
            startAngle: Cd,
            endAngle: Kd
          });
          var Bd = "M ".concat(ed.x, ",").concat(ed.y, "\n    A").concat(Wd, ",").concat(Wd, ",0,0,").concat(+(od < 0), ",").concat(Od.x, ",").concat(Od.y, "\n    A").concat(Nd, ",").concat(Nd, ",0,").concat(+(qd > 180), ",").concat(+(od < 0), ",").concat(Gd.x, ",").concat(Gd.y, "\n    A").concat(Wd, ",").concat(Wd, ",0,0,").concat(+(od < 0), ",").concat(vd.x, ",").concat(vd.y, "\n  ");
          if (pd > 0) {
            var sd = Qd({
                cx: Jd,
                cy: kd,
                radius: pd,
                angle: Cd,
                sign: od,
                isExternal: !0,
                cornerRadius: Wd,
                cornerIsExternal: gd
              }),
              ad = sd.circleTangency,
              Md = sd.lineTangency,
              Fd = sd.nZ,
              Yd = Qd({
                cx: Jd,
                cy: kd,
                radius: pd,
                angle: Kd,
                sign: -od,
                isExternal: !0,
                cornerRadius: Wd,
                cornerIsExternal: gd
              }),
              md = Yd.circleTangency,
              bd = Yd.lineTangency,
              Sd = Yd.nZ,
              jd = gd ? Math.abs(Cd - Kd) : Math.abs(Cd - Kd) - Fd - Sd;
            if (jd < 0 && 0 === Wd) return "".concat(Bd, "L").concat(Jd, ",").concat(kd, "Z");
            Bd += "L".concat(bd.x, ",").concat(bd.y, "\n      A").concat(Wd, ",").concat(Wd, ",0,0,").concat(+(od < 0), ",").concat(md.x, ",").concat(md.y, "\n      A").concat(pd, ",").concat(pd, ",0,").concat(+(jd > 180), ",").concat(+(od > 0), ",").concat(ad.x, ",").concat(ad.y, "\n      A").concat(Wd, ",").concat(Wd, ",0,0,").concat(+(od < 0), ",").concat(Md.x, ",").concat(Md.y, "Z")
          } else Bd += "L".concat(Jd, ",").concat(kd, "Z");
          return Bd
        }({
          cx: kd,
          cy: Pd,
          innerRadius: gd,
          outerRadius: Kd,
          cornerRadius: Math.min(sd, Bd / 2),
          forceCornerRadius: ed,
          cornerIsExternal: Rd,
          startAngle: Id,
          endAngle: Gd
        }) : Ld({
          cx: kd,
          cy: Pd,
          innerRadius: gd,
          outerRadius: Kd,
          startAngle: Id,
          endAngle: Gd
        }), pd.createElement("path", Cd({}, (0, Wd.e)(Jd, !0), {
          className: qd,
          d: xd,
          role: "img"
        }))
      }
  },
  5913: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => cd
    });
    var pd = kd(56),
      Nd = kd(5919),
      Wd = kd.n(Nd);
    Math.abs, Math.atan2;
    const Pd = Math.cos,
      Zd = (Math.max, Math.min, Math.sin),
      gd = Math.sqrt,
      Cd = Math.PI,
      Kd = 2 * Cd;
    const od = {
        draw(dd, Jd) {
          const kd = gd(Jd / Cd);
          dd.moveTo(kd, 0), dd.arc(0, 0, kd, 0, Kd)
        }
      },
      ld = {
        draw(dd, Jd) {
          const kd = gd(Jd / 5) / 2;
          dd.moveTo(-3 * kd, -kd), dd.lineTo(-kd, -kd), dd.lineTo(-kd, -3 * kd), dd.lineTo(kd, -3 * kd), dd.lineTo(kd, -kd), dd.lineTo(3 * kd, -kd), dd.lineTo(3 * kd, kd), dd.lineTo(kd, kd), dd.lineTo(kd, 3 * kd), dd.lineTo(-kd, 3 * kd), dd.lineTo(-kd, kd), dd.lineTo(-3 * kd, kd), dd.closePath()
        }
      },
      Qd = gd(1 / 3),
      Ld = 2 * Qd,
      Od = {
        draw(dd, Jd) {
          const kd = gd(Jd / Ld),
            pd = kd * Qd;
          dd.moveTo(0, -kd), dd.lineTo(pd, 0), dd.lineTo(0, kd), dd.lineTo(-pd, 0), dd.closePath()
        }
      },
      ed = {
        draw(dd, Jd) {
          const kd = gd(Jd),
            pd = -kd / 2;
          dd.rect(pd, pd, kd, kd)
        }
      },
      Rd = Zd(Cd / 10) / Zd(7 * Cd / 10),
      Id = Zd(Kd / 10) * Rd,
      Gd = -Pd(Kd / 10) * Rd,
      vd = {
        draw(dd, Jd) {
          const kd = gd(.8908130915292852 * Jd),
            pd = Id * kd,
            Nd = Gd * kd;
          dd.moveTo(0, -kd), dd.lineTo(pd, Nd);
          for (let Wd = 1; Wd < 5; ++Wd) {
            const Jd = Kd * Wd / 5,
              gd = Pd(Jd),
              Cd = Zd(Jd);
            dd.lineTo(Cd * kd, -gd * kd), dd.lineTo(gd * pd - Cd * Nd, Cd * pd + gd * Nd)
          }
          dd.closePath()
        }
      },
      xd = gd(3),
      qd = {
        draw(dd, Jd) {
          const kd = -gd(Jd / (3 * xd));
          dd.moveTo(0, 2 * kd), dd.lineTo(-xd * kd, -kd), dd.lineTo(xd * kd, -kd), dd.closePath()
        }
      },
      Bd = -.5,
      sd = gd(3) / 2,
      ad = 1 / gd(12),
      Md = 3 * (ad / 2 + 1),
      Fd = {
        draw(dd, Jd) {
          const kd = gd(Jd / Md),
            pd = kd / 2,
            Nd = kd * ad,
            Wd = pd,
            Pd = kd * ad + kd,
            Zd = -Wd,
            Cd = Pd;
          dd.moveTo(pd, Nd), dd.lineTo(Wd, Pd), dd.lineTo(Zd, Cd), dd.lineTo(Bd * pd - sd * Nd, sd * pd + Bd * Nd), dd.lineTo(Bd * Wd - sd * Pd, sd * Wd + Bd * Pd), dd.lineTo(Bd * Zd - sd * Cd, sd * Zd + Bd * Cd), dd.lineTo(Bd * pd + sd * Nd, Bd * Nd - sd * pd), dd.lineTo(Bd * Wd + sd * Pd, Bd * Pd - sd * Wd), dd.lineTo(Bd * Zd + sd * Cd, Bd * Cd - sd * Zd), dd.closePath()
        }
      };
    var Yd = kd(5967),
      md = kd(5972);
    gd(3), gd(3);
    var bd = kd(4935),
      Sd = kd(5297);

    function jd(dd) {
      return jd = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(dd) {
        return typeof dd
      } : function(dd) {
        return dd && "function" == typeof Symbol && dd.constructor === Symbol && dd !== Symbol.prototype ? "symbol" : typeof dd
      }, jd(dd)
    }
    var Xd = ["type", "size", "sizeType"];

    function fd() {
      return fd = Object.assign ? Object.assign.bind() : function(dd) {
        for (var Jd = 1; Jd < arguments.length; Jd++) {
          var kd = arguments[Jd];
          for (var pd in kd) Object.prototype.hasOwnProperty.call(kd, pd) && (dd[pd] = kd[pd])
        }
        return dd
      }, fd.apply(this, arguments)
    }

    function nd(dd, Jd) {
      var kd = Object.keys(dd);
      if (Object.getOwnPropertySymbols) {
        var pd = Object.getOwnPropertySymbols(dd);
        Jd && (pd = pd.filter((function(Jd) {
          return Object.getOwnPropertyDescriptor(dd, Jd).enumerable
        }))), kd.push.apply(kd, pd)
      }
      return kd
    }

    function Ud(dd) {
      for (var Jd = 1; Jd < arguments.length; Jd++) {
        var kd = null != arguments[Jd] ? arguments[Jd] : {};
        Jd % 2 ? nd(Object(kd), !0).forEach((function(Jd) {
          yd(dd, Jd, kd[Jd])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(dd, Object.getOwnPropertyDescriptors(kd)) : nd(Object(kd)).forEach((function(Jd) {
          Object.defineProperty(dd, Jd, Object.getOwnPropertyDescriptor(kd, Jd))
        }))
      }
      return dd
    }

    function yd(dd, Jd, kd) {
      return (Jd = function(dd) {
        var Jd = function(dd, Jd) {
          if ("object" != jd(dd) || !dd) return dd;
          var kd = dd[Symbol.toPrimitive];
          if (void 0 !== kd) {
            var pd = kd.call(dd, Jd || "default");
            if ("object" != jd(pd)) return pd;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === Jd ? String : Number)(dd)
        }(dd, "string");
        return "symbol" == jd(Jd) ? Jd : Jd + ""
      }(Jd)) in dd ? Object.defineProperty(dd, Jd, {
        value: kd,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : dd[Jd] = kd, dd
    }

    function Dd(dd, Jd) {
      if (null == dd) return {};
      var kd, pd, Nd = function(dd, Jd) {
        if (null == dd) return {};
        var kd = {};
        for (var pd in dd)
          if (Object.prototype.hasOwnProperty.call(dd, pd)) {
            if (Jd.indexOf(pd) >= 0) continue;
            kd[pd] = dd[pd]
          } return kd
      }(dd, Jd);
      if (Object.getOwnPropertySymbols) {
        var Wd = Object.getOwnPropertySymbols(dd);
        for (pd = 0; pd < Wd.length; pd++) kd = Wd[pd], Jd.indexOf(kd) >= 0 || Object.prototype.propertyIsEnumerable.call(dd, kd) && (Nd[kd] = dd[kd])
      }
      return Nd
    }
    var Td = {
        symbolCircle: od,
        symbolCross: ld,
        symbolDiamond: Od,
        symbolSquare: ed,
        symbolStar: vd,
        symbolTriangle: qd,
        symbolWye: Fd
      },
      Ed = Math.PI / 180,
      cd = function(dd) {
        var Jd = dd.type,
          kd = void 0 === Jd ? "circle" : Jd,
          Nd = dd.size,
          Pd = void 0 === Nd ? 64 : Nd,
          Zd = dd.sizeType,
          gd = void 0 === Zd ? "area" : Zd,
          Cd = Ud(Ud({}, Dd(dd, Xd)), {}, {
            type: kd,
            size: Pd,
            sizeType: gd
          }),
          Kd = Cd.className,
          ld = Cd.cx,
          Qd = Cd.cy,
          Ld = (0, Sd.e)(Cd, !0);
        return ld === +ld && Qd === +Qd && Pd === +Pd ? pd.createElement("path", fd({}, Ld, {
          className: (0, bd.b)("recharts-symbols", Kd),
          transform: "translate(".concat(ld, ", ").concat(Qd, ")"),
          d: function() {
            var dd = function(dd) {
                var Jd = "symbol".concat(Wd()(dd));
                return Td[Jd] || od
              }(kd),
              Jd = function(dd, Jd) {
                let kd = null,
                  pd = (0, md.c)(Nd);

                function Nd() {
                  let Nd;
                  if (kd || (kd = Nd = pd()), dd.apply(this, arguments).draw(kd, +Jd.apply(this, arguments)), Nd) return kd = null, Nd + "" || null
                }
                return dd = "function" === typeof dd ? dd : (0, Yd.d)(dd || od), Jd = "function" === typeof Jd ? Jd : (0, Yd.d)(void 0 === Jd ? 64 : +Jd), Nd.type = function(Jd) {
                  return arguments.length ? (dd = "function" === typeof Jd ? Jd : (0, Yd.d)(Jd), Nd) : dd
                }, Nd.size = function(dd) {
                  return arguments.length ? (Jd = "function" === typeof dd ? dd : (0, Yd.d)(+dd), Nd) : Jd
                }, Nd.context = function(dd) {
                  return arguments.length ? (kd = null == dd ? null : dd, Nd) : kd
                }, Nd
              }().type(dd).size(function(dd, Jd, kd) {
                if ("area" === Jd) return dd;
                switch (kd) {
                  case "cross":
                    return 5 * dd * dd / 9;
                  case "diamond":
                    return .5 * dd * dd / Math.sqrt(3);
                  case "square":
                    return dd * dd;
                  case "star":
                    var pd = 18 * Ed;
                    return 1.25 * dd * dd * (Math.tan(pd) - Math.tan(2 * pd) * Math.pow(Math.tan(pd), 2));
                  case "triangle":
                    return Math.sqrt(3) * dd * dd / 4;
                  case "wye":
                    return (21 - 10 * Math.sqrt(3)) * dd * dd / 8;
                  default:
                    return Math.PI * dd * dd / 4
                }
              }(Pd, gd, kd));
            return Jd()
          }()
        })) : null
      };
    cd.registerSymbol = function(dd, Jd) {
      Td["symbol".concat(Wd()(dd))] = Jd
    }
  },
  6163: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => yd,
      f: () => ud,
      i: () => Dd,
      l: () => Td,
      m: () => Ed
    });
    var pd = kd(56),
      Nd = kd(5131),
      Wd = kd.n(Nd),
      Pd = kd(6167),
      Zd = kd.n(Pd),
      gd = kd(6177),
      Cd = kd.n(gd),
      Kd = kd(6085),
      od = kd.n(Kd),
      ld = kd(5987),
      Qd = kd(4935),
      Ld = kd(5992),
      Od = kd(5297);

    function ed(dd) {
      return ed = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(dd) {
        return typeof dd
      } : function(dd) {
        return dd && "function" == typeof Symbol && dd.constructor === Symbol && dd !== Symbol.prototype ? "symbol" : typeof dd
      }, ed(dd)
    }

    function Rd() {
      return Rd = Object.assign ? Object.assign.bind() : function(dd) {
        for (var Jd = 1; Jd < arguments.length; Jd++) {
          var kd = arguments[Jd];
          for (var pd in kd) Object.prototype.hasOwnProperty.call(kd, pd) && (dd[pd] = kd[pd])
        }
        return dd
      }, Rd.apply(this, arguments)
    }

    function Id(dd, Jd) {
      return function(dd) {
        if (Array.isArray(dd)) return dd
      }(dd) || function(dd, Jd) {
        var kd = null == dd ? null : "undefined" != typeof Symbol && dd[Symbol.iterator] || dd["@@iterator"];
        if (null != kd) {
          var pd, Nd, Wd, Pd, Zd = [],
            gd = !0,
            Cd = !1;
          try {
            if (Wd = (kd = kd.call(dd)).next, 0 === Jd) {
              if (Object(kd) !== kd) return;
              gd = !1
            } else
              for (; !(gd = (pd = Wd.call(kd)).done) && (Zd.push(pd.value), Zd.length !== Jd); gd = !0);
          } catch (dd) {
            Cd = !0, Nd = dd
          } finally {
            try {
              if (!gd && null != kd.return && (Pd = kd.return(), Object(Pd) !== Pd)) return
            } finally {
              if (Cd) throw Nd
            }
          }
          return Zd
        }
      }(dd, Jd) || function(dd, Jd) {
        if (!dd) return;
        if ("string" === typeof dd) return Gd(dd, Jd);
        var kd = Object.prototype.toString.call(dd).slice(8, -1);
        "Object" === kd && dd.constructor && (kd = dd.constructor.name);
        if ("Map" === kd || "Set" === kd) return Array.from(dd);
        if ("Arguments" === kd || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(kd)) return Gd(dd, Jd)
      }(dd, Jd) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Gd(dd, Jd) {
      (null == Jd || Jd > dd.length) && (Jd = dd.length);
      for (var kd = 0, pd = new Array(Jd); kd < Jd; kd++) pd[kd] = dd[kd];
      return pd
    }

    function vd(dd, Jd) {
      var kd = Object.keys(dd);
      if (Object.getOwnPropertySymbols) {
        var pd = Object.getOwnPropertySymbols(dd);
        Jd && (pd = pd.filter((function(Jd) {
          return Object.getOwnPropertyDescriptor(dd, Jd).enumerable
        }))), kd.push.apply(kd, pd)
      }
      return kd
    }

    function xd(dd) {
      for (var Jd = 1; Jd < arguments.length; Jd++) {
        var kd = null != arguments[Jd] ? arguments[Jd] : {};
        Jd % 2 ? vd(Object(kd), !0).forEach((function(Jd) {
          qd(dd, Jd, kd[Jd])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(dd, Object.getOwnPropertyDescriptors(kd)) : vd(Object(kd)).forEach((function(Jd) {
          Object.defineProperty(dd, Jd, Object.getOwnPropertyDescriptor(kd, Jd))
        }))
      }
      return dd
    }

    function qd(dd, Jd, kd) {
      return (Jd = function(dd) {
        var Jd = function(dd, Jd) {
          if ("object" != ed(dd) || !dd) return dd;
          var kd = dd[Symbol.toPrimitive];
          if (void 0 !== kd) {
            var pd = kd.call(dd, Jd || "default");
            if ("object" != ed(pd)) return pd;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === Jd ? String : Number)(dd)
        }(dd, "string");
        return "symbol" == ed(Jd) ? Jd : Jd + ""
      }(Jd)) in dd ? Object.defineProperty(dd, Jd, {
        value: kd,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : dd[Jd] = kd, dd
    }
    var Bd = function(dd, Jd, kd, pd, Nd) {
        var Wd, Pd = kd - pd;
        return Wd = "M ".concat(dd, ",").concat(Jd), Wd += "L ".concat(dd + kd, ",").concat(Jd), Wd += "L ".concat(dd + kd - Pd / 2, ",").concat(Jd + Nd), Wd += "L ".concat(dd + kd - Pd / 2 - pd, ",").concat(Jd + Nd), Wd += "L ".concat(dd, ",").concat(Jd, " Z")
      },
      sd = {
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
      ad = function(dd) {
        var Jd = xd(xd({}, sd), dd),
          kd = (0, pd.useRef)(),
          Nd = Id((0, pd.useState)(-1), 2),
          Wd = Nd[0],
          Pd = Nd[1];
        (0, pd.useEffect)((function() {
          if (kd.current && kd.current.getTotalLength) try {
            var dd = kd.current.getTotalLength();
            dd && Pd(dd)
          } catch (Jd) {}
        }), []);
        var Zd = Jd.x,
          gd = Jd.y,
          Cd = Jd.upperWidth,
          Kd = Jd.lowerWidth,
          od = Jd.height,
          ld = Jd.className,
          ed = Jd.animationEasing,
          Gd = Jd.animationDuration,
          vd = Jd.animationBegin,
          qd = Jd.isUpdateAnimationActive;
        if (Zd !== +Zd || gd !== +gd || Cd !== +Cd || Kd !== +Kd || od !== +od || 0 === Cd && 0 === Kd || 0 === od) return null;
        var ad = (0, Qd.b)("recharts-trapezoid", ld);
        return qd ? pd.createElement(Ld.d, {
          canBegin: Wd > 0,
          from: {
            upperWidth: 0,
            lowerWidth: 0,
            height: od,
            x: Zd,
            y: gd
          },
          to: {
            upperWidth: Cd,
            lowerWidth: Kd,
            height: od,
            x: Zd,
            y: gd
          },
          duration: Gd,
          animationEasing: ed,
          isActive: qd
        }, (function(dd) {
          var Nd = dd.upperWidth,
            Pd = dd.lowerWidth,
            Zd = dd.height,
            gd = dd.x,
            Cd = dd.y;
          return pd.createElement(Ld.d, {
            canBegin: Wd > 0,
            from: "0px ".concat(-1 === Wd ? 1 : Wd, "px"),
            to: "".concat(Wd, "px 0px"),
            attributeName: "strokeDasharray",
            ZQ: vd,
            duration: Gd,
            easing: ed
          }, pd.createElement("path", Rd({}, (0, Od.e)(Jd, !0), {
            className: ad,
            d: Bd(gd, Cd, Nd, Pd, Zd),
            ref: kd
          })))
        })) : pd.createElement("g", null, pd.createElement("path", Rd({}, (0, Od.e)(Jd, !0), {
          className: ad,
          d: Bd(Zd, gd, Cd, Kd, od)
        })))
      },
      Md = kd(6185),
      Fd = kd(5843),
      Yd = kd(5913),
      md = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];

    function bd(dd) {
      return bd = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(dd) {
        return typeof dd
      } : function(dd) {
        return dd && "function" == typeof Symbol && dd.constructor === Symbol && dd !== Symbol.prototype ? "symbol" : typeof dd
      }, bd(dd)
    }

    function Sd(dd, Jd) {
      if (null == dd) return {};
      var kd, pd, Nd = function(dd, Jd) {
        if (null == dd) return {};
        var kd = {};
        for (var pd in dd)
          if (Object.prototype.hasOwnProperty.call(dd, pd)) {
            if (Jd.indexOf(pd) >= 0) continue;
            kd[pd] = dd[pd]
          } return kd
      }(dd, Jd);
      if (Object.getOwnPropertySymbols) {
        var Wd = Object.getOwnPropertySymbols(dd);
        for (pd = 0; pd < Wd.length; pd++) kd = Wd[pd], Jd.indexOf(kd) >= 0 || Object.prototype.propertyIsEnumerable.call(dd, kd) && (Nd[kd] = dd[kd])
      }
      return Nd
    }

    function jd(dd, Jd) {
      var kd = Object.keys(dd);
      if (Object.getOwnPropertySymbols) {
        var pd = Object.getOwnPropertySymbols(dd);
        Jd && (pd = pd.filter((function(Jd) {
          return Object.getOwnPropertyDescriptor(dd, Jd).enumerable
        }))), kd.push.apply(kd, pd)
      }
      return kd
    }

    function Xd(dd) {
      for (var Jd = 1; Jd < arguments.length; Jd++) {
        var kd = null != arguments[Jd] ? arguments[Jd] : {};
        Jd % 2 ? jd(Object(kd), !0).forEach((function(Jd) {
          fd(dd, Jd, kd[Jd])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(dd, Object.getOwnPropertyDescriptors(kd)) : jd(Object(kd)).forEach((function(Jd) {
          Object.defineProperty(dd, Jd, Object.getOwnPropertyDescriptor(kd, Jd))
        }))
      }
      return dd
    }

    function fd(dd, Jd, kd) {
      return (Jd = function(dd) {
        var Jd = function(dd, Jd) {
          if ("object" != bd(dd) || !dd) return dd;
          var kd = dd[Symbol.toPrimitive];
          if (void 0 !== kd) {
            var pd = kd.call(dd, Jd || "default");
            if ("object" != bd(pd)) return pd;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === Jd ? String : Number)(dd)
        }(dd, "string");
        return "symbol" == bd(Jd) ? Jd : Jd + ""
      }(Jd)) in dd ? Object.defineProperty(dd, Jd, {
        value: kd,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : dd[Jd] = kd, dd
    }

    function nd(dd, Jd) {
      return Xd(Xd({}, Jd), dd)
    }

    function Ud(dd) {
      var Jd = dd.shapeType,
        kd = dd.elementProps;
      switch (Jd) {
        case "rectangle":
          return pd.createElement(ld.c, kd);
        case "trapezoid":
          return pd.createElement(ad, kd);
        case "sector":
          return pd.createElement(Md.c, kd);
        case "symbols":
          if (function(dd) {
              return "symbols" === dd
            }(Jd)) return pd.createElement(Yd.c, kd);
          break;
        default:
          return null
      }
    }

    function yd(dd) {
      var Jd, kd = dd.option,
        Nd = dd.shapeType,
        Pd = dd.propTransformer,
        gd = void 0 === Pd ? nd : Pd,
        Kd = dd.activeClassName,
        od = void 0 === Kd ? "recharts-active-shape" : Kd,
        ld = dd.isActive,
        Qd = Sd(dd, md);
      if ((0, pd.isValidElement)(kd)) Jd = (0, pd.cloneElement)(kd, Xd(Xd({}, Qd), function(dd) {
        return (0, pd.isValidElement)(dd) ? dd.props : dd
      }(kd)));
      else if (Wd()(kd)) Jd = kd(Qd);
      else if (Zd()(kd) && !Cd()(kd)) {
        var Ld = gd(kd, Qd);
        Jd = pd.createElement(Ud, {
          shapeType: Nd,
          elementProps: Ld
        })
      } else {
        var Od = Qd;
        Jd = pd.createElement(Ud, {
          shapeType: Nd,
          elementProps: Od
        })
      }
      return ld ? pd.createElement(Fd.e, {
        className: od
      }, Jd) : Jd
    }

    function Dd(dd, Jd) {
      return null != Jd && "trapezoids" in dd.props
    }

    function Td(dd, Jd) {
      return null != Jd && "sectors" in dd.props
    }

    function Ed(dd, Jd) {
      return null != Jd && "points" in dd.props
    }

    function cd(dd, Jd) {
      var kd, pd, Nd = dd.x === (null === Jd || void 0 === Jd || null === (kd = Jd.labelViewBox) || void 0 === kd ? void 0 : kd.x) || dd.x === Jd.x,
        Wd = dd.y === (null === Jd || void 0 === Jd || null === (pd = Jd.labelViewBox) || void 0 === pd ? void 0 : pd.y) || dd.y === Jd.y;
      return Nd && Wd
    }

    function hd(dd, Jd) {
      var kd = dd.endAngle === Jd.endAngle,
        pd = dd.startAngle === Jd.startAngle;
      return kd && pd
    }

    function rd(dd, Jd) {
      var kd = dd.x === Jd.x,
        pd = dd.y === Jd.y,
        Nd = dd.z === Jd.z;
      return kd && pd && Nd
    }

    function ud(dd) {
      var Jd = dd.activeTooltipItem,
        kd = dd.graphicalItem,
        pd = dd.itemData,
        Nd = function(dd, Jd) {
          var kd;
          return Dd(dd, Jd) ? kd = "trapezoids" : Td(dd, Jd) ? kd = "sectors" : Ed(dd, Jd) && (kd = "points"), kd
        }(kd, Jd),
        Wd = function(dd, Jd) {
          var kd, pd;
          return Dd(dd, Jd) ? null === (kd = Jd.tooltipPayload) || void 0 === kd || null === (kd = kd[0]) || void 0 === kd || null === (kd = kd.payload) || void 0 === kd ? void 0 : kd.payload : Td(dd, Jd) ? null === (pd = Jd.tooltipPayload) || void 0 === pd || null === (pd = pd[0]) || void 0 === pd || null === (pd = pd.payload) || void 0 === pd ? void 0 : pd.payload : Ed(dd, Jd) ? Jd.payload : {}
        }(kd, Jd),
        Pd = pd.filter((function(dd, pd) {
          var Pd = od()(Wd, dd),
            Zd = kd.props[Nd].filter((function(dd) {
              var pd = function(dd, Jd) {
                var kd;
                return Dd(dd, Jd) ? kd = cd : Td(dd, Jd) ? kd = hd : Ed(dd, Jd) && (kd = rd), kd
              }(kd, Jd);
              return pd(dd, Jd)
            })),
            gd = kd.props[Nd].indexOf(Zd[Zd.length - 1]);
          return Pd && pd === gd
        }));
      return pd.indexOf(Pd[Pd.length - 1])
    }
  },
  6117: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => xd,
      f: () => Rd,
      g: () => qd,
      h: () => Gd,
      j: () => Id
    });
    var pd = kd(6119),
      Nd = kd.n(pd),
      Wd = kd(6126),
      Pd = kd.n(Wd),
      Zd = kd(6019),
      gd = kd(5297),
      Cd = kd(5029),
      Kd = kd(6145);

    function od(dd) {
      return od = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(dd) {
        return typeof dd
      } : function(dd) {
        return dd && "function" == typeof Symbol && dd.constructor === Symbol && dd !== Symbol.prototype ? "symbol" : typeof dd
      }, od(dd)
    }

    function ld(dd, Jd) {
      for (var kd = 0; kd < Jd.length; kd++) {
        var pd = Jd[kd];
        pd.enumerable = pd.enumerable || !1, pd.configurable = !0, "value" in pd && (pd.writable = !0), Object.defineProperty(dd, ed(pd.key), pd)
      }
    }

    function Qd(dd, Jd) {
      var kd = Object.keys(dd);
      if (Object.getOwnPropertySymbols) {
        var pd = Object.getOwnPropertySymbols(dd);
        Jd && (pd = pd.filter((function(Jd) {
          return Object.getOwnPropertyDescriptor(dd, Jd).enumerable
        }))), kd.push.apply(kd, pd)
      }
      return kd
    }

    function Ld(dd) {
      for (var Jd = 1; Jd < arguments.length; Jd++) {
        var kd = null != arguments[Jd] ? arguments[Jd] : {};
        Jd % 2 ? Qd(Object(kd), !0).forEach((function(Jd) {
          Od(dd, Jd, kd[Jd])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(dd, Object.getOwnPropertyDescriptors(kd)) : Qd(Object(kd)).forEach((function(Jd) {
          Object.defineProperty(dd, Jd, Object.getOwnPropertyDescriptor(kd, Jd))
        }))
      }
      return dd
    }

    function Od(dd, Jd, kd) {
      return (Jd = ed(Jd)) in dd ? Object.defineProperty(dd, Jd, {
        value: kd,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : dd[Jd] = kd, dd
    }

    function ed(dd) {
      var Jd = function(dd, Jd) {
        if ("object" != od(dd) || !dd) return dd;
        var kd = dd[Symbol.toPrimitive];
        if (void 0 !== kd) {
          var pd = kd.call(dd, Jd || "default");
          if ("object" != od(pd)) return pd;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Jd ? String : Number)(dd)
      }(dd, "string");
      return "symbol" == od(Jd) ? Jd : Jd + ""
    }
    var Rd = function(dd, Jd, kd, pd, Nd) {
        var Wd = dd.width,
          Pd = dd.height,
          od = dd.layout,
          ld = dd.children,
          Qd = Object.keys(Jd),
          ed = {
            left: kd.left,
            leftMirror: kd.left,
            right: Wd - kd.right,
            rightMirror: Wd - kd.right,
            top: kd.top,
            topMirror: kd.top,
            bottom: Pd - kd.bottom,
            bottomMirror: Pd - kd.bottom
          },
          Rd = !!(0, gd.m)(ld, Kd.c);
        return Qd.reduce((function(Wd, Pd) {
          var gd, Kd, ld, Qd, Id, Gd = Jd[Pd],
            vd = Gd.orientation,
            xd = Gd.domain,
            qd = Gd.padding,
            Bd = void 0 === qd ? {} : qd,
            sd = Gd.mirror,
            ad = Gd.reversed,
            Md = "".concat(vd).concat(sd ? "Mirror" : "");
          if ("number" === Gd.type && ("gap" === Gd.padding || "no-gap" === Gd.padding)) {
            var Fd = xd[1] - xd[0],
              Yd = 1 / 0,
              md = Gd.categoricalDomain.sort(Cd.e);
            if (md.forEach((function(dd, Jd) {
                Jd > 0 && (Yd = Math.min((dd || 0) - (md[Jd - 1] || 0), Yd))
              })), Number.isFinite(Yd)) {
              var bd = Yd / Fd,
                Sd = "vertical" === Gd.layout ? kd.height : kd.width;
              if ("gap" === Gd.padding && (gd = bd * Sd / 2), "no-gap" === Gd.padding) {
                var jd = (0, Cd.m)(dd.barCategoryGap, bd * Sd),
                  Xd = bd * Sd / 2;
                gd = Xd - jd - (Xd - jd) / Sd * jd
              }
            }
          }
          Kd = "xAxis" === pd ? [kd.left + (Bd.left || 0) + (gd || 0), kd.left + kd.width - (Bd.right || 0) - (gd || 0)] : "yAxis" === pd ? "horizontal" === od ? [kd.top + kd.height - (Bd.bottom || 0), kd.top + (Bd.top || 0)] : [kd.top + (Bd.top || 0) + (gd || 0), kd.top + kd.height - (Bd.bottom || 0) - (gd || 0)] : Gd.range, ad && (Kd = [Kd[1], Kd[0]]);
          var fd = (0, Zd.cb)(Gd, Nd, Rd),
            nd = fd.scale,
            Ud = fd.realScaleType;
          nd.domain(xd).range(Kd), (0, Zd.e)(nd);
          var yd = (0, Zd.Q)(nd, Ld(Ld({}, Gd), {}, {
            realScaleType: Ud
          }));
          "xAxis" === pd ? (Id = "top" === vd && !sd || "bottom" === vd && sd, ld = kd.left, Qd = ed[Md] - Id * Gd.height) : "yAxis" === pd && (Id = "left" === vd && !sd || "right" === vd && sd, ld = ed[Md] - Id * Gd.width, Qd = kd.top);
          var Dd = Ld(Ld(Ld({}, Gd), yd), {}, {
            realScaleType: Ud,
            x: ld,
            y: Qd,
            scale: nd,
            width: "xAxis" === pd ? kd.width : Gd.width,
            height: "yAxis" === pd ? kd.height : Gd.height
          });
          return Dd.bandSize = (0, Zd.m)(Dd, yd), Gd.hide || "xAxis" !== pd ? Gd.hide || (ed[Md] += (Id ? -1 : 1) * Dd.width) : ed[Md] += (Id ? -1 : 1) * Dd.height, Ld(Ld({}, Wd), {}, Od({}, Pd, Dd))
        }), {})
      },
      Id = function(dd, Jd) {
        var kd = dd.x,
          pd = dd.y,
          Nd = Jd.x,
          Wd = Jd.y;
        return {
          x: Math.min(kd, Nd),
          y: Math.min(pd, Wd),
          width: Math.abs(Nd - kd),
          height: Math.abs(Wd - pd)
        }
      },
      Gd = function(dd) {
        var Jd = dd.x1,
          kd = dd.y1,
          pd = dd.x2,
          Nd = dd.y2;
        return Id({
          x: Jd,
          y: kd
        }, {
          x: pd,
          y: Nd
        })
      },
      vd = function() {
        function dd(Jd) {
          ! function(dd, Jd) {
            if (!(dd instanceof Jd)) throw new TypeError("Cannot call a class as a function")
          }(this, dd), this.scale = Jd
        }
        return Jd = dd, kd = [{
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
          value: function(dd) {
            var Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              kd = Jd.bandAware,
              pd = Jd.position;
            if (void 0 !== dd) {
              if (pd) switch (pd) {
                case "start":
                default:
                  return this.scale(dd);
                case "middle":
                  var Nd = this.bandwidth ? this.bandwidth() / 2 : 0;
                  return this.scale(dd) + Nd;
                case "end":
                  var Wd = this.bandwidth ? this.bandwidth() : 0;
                  return this.scale(dd) + Wd
              }
              if (kd) {
                var Pd = this.bandwidth ? this.bandwidth() / 2 : 0;
                return this.scale(dd) + Pd
              }
              return this.scale(dd)
            }
          }
        }, {
          key: "isInRange",
          value: function(dd) {
            var Jd = this.range(),
              kd = Jd[0],
              pd = Jd[Jd.length - 1];
            return kd <= pd ? dd >= kd && dd <= pd : dd >= pd && dd <= kd
          }
        }], pd = [{
          key: "create",
          value: function(Jd) {
            return new dd(Jd)
          }
        }], kd && ld(Jd.prototype, kd), pd && ld(Jd, pd), Object.defineProperty(Jd, "prototype", {
          writable: !1
        }), Jd;
        var Jd, kd, pd
      }();
    Od(vd, "EPS", 1e-4);
    var xd = function(dd) {
      var Jd = Object.keys(dd).reduce((function(Jd, kd) {
        return Ld(Ld({}, Jd), {}, Od({}, kd, vd.create(dd[kd])))
      }), {});
      return Ld(Ld({}, Jd), {}, {
        apply: function(dd) {
          var kd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            pd = kd.bandAware,
            Wd = kd.position;
          return Nd()(dd, (function(dd, kd) {
            return Jd[kd].apply(dd, {
              bandAware: pd,
              position: Wd
            })
          }))
        },
        isInRange: function(dd) {
          return Pd()(dd, (function(dd, kd) {
            return Jd[kd].isInRange(dd)
          }))
        }
      })
    };
    var qd = function(dd) {
      var Jd = dd.width,
        kd = dd.height,
        pd = function(dd) {
          return (dd % 180 + 180) % 180
        }(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0),
        Nd = pd * Math.PI / 180,
        Wd = Math.atan(kd / Jd),
        Pd = Nd > Wd && Nd < Math.PI - Wd ? kd / Math.sin(Nd) : Jd / Math.cos(Nd);
      return Math.abs(Pd)
    }
  },
  6019: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => XP,
      d: () => mP,
      e: () => uP,
      g: () => cP,
      j: () => tP,
      m: () => gZ,
      q: () => jP,
      s: () => SP,
      u: () => kZ,
      w: () => JZ,
      x: () => dZ,
      y: () => DP,
      A: () => YP,
      E: () => UP,
      G: () => NZ,
      J: () => bP,
      N: () => wP,
      O: () => pZ,
      P: () => TP,
      Q: () => AP,
      T: () => KZ,
      U: () => FP,
      V: () => yP,
      Z: () => CZ,
      $: () => nP,
      cb: () => hP,
      db: () => ZZ,
      gb: () => VP
    });
    var pd = {};
    kd.r(pd), kd.d(pd, {
      scaleBand: () => Nd.d,
      scaleDiverging: () => oW,
      scaleDivergingLog: () => lW,
      scaleDivergingPow: () => LW,
      scaleDivergingSqrt: () => OW,
      scaleDivergingSymlog: () => QW,
      scaleIdentity: () => zJ,
      scaleImplicit: () => Kk.e,
      scaleLinear: () => VJ,
      scaleLog: () => Wk,
      scaleOrdinal: () => Kk.c,
      scalePoint: () => Nd.g,
      scalePow: () => ek,
      scaleQuantile: () => Fk,
      scaleQuantize: () => Yk,
      scaleRadial: () => Gk,
      scaleSequential: () => NW,
      scaleSequentialLog: () => WW,
      scaleSequentialPow: () => ZW,
      scaleSequentialQuantile: () => CW,
      scaleSequentialSqrt: () => gW,
      scaleSequentialSymlog: () => PW,
      scaleSqrt: () => Rk,
      scaleSymlog: () => Ck,
      scaleThreshold: () => mk,
      scaleTime: () => dW,
      scaleUtc: () => JW,
      tickFormat: () => uJ
    });
    var Nd = kd(6021);
    const Wd = Math.sqrt(50),
      Pd = Math.sqrt(10),
      Zd = Math.sqrt(2);

    function gd(dd, Jd, kd) {
      const pd = (Jd - dd) / Math.max(0, kd),
        Nd = Math.floor(Math.log10(pd)),
        Cd = pd / Math.pow(10, Nd),
        Kd = Cd >= Wd ? 10 : Cd >= Pd ? 5 : Cd >= Zd ? 2 : 1;
      let od, ld, Qd;
      return Nd < 0 ? (Qd = Math.pow(10, -Nd) / Kd, od = Math.round(dd * Qd), ld = Math.round(Jd * Qd), od / Qd < dd && ++od, ld / Qd > Jd && --ld, Qd = -Qd) : (Qd = Math.pow(10, Nd) * Kd, od = Math.round(dd / Qd), ld = Math.round(Jd / Qd), od * Qd < dd && ++od, ld * Qd > Jd && --ld), ld < od && .5 <= kd && kd < 2 ? gd(dd, Jd, 2 * kd) : [od, ld, Qd]
    }

    function Cd(dd, Jd, kd) {
      if (!((kd = +kd) > 0)) return [];
      if ((dd = +dd) === (Jd = +Jd)) return [dd];
      const pd = Jd < dd,
        [Nd, Wd, Pd] = pd ? gd(Jd, dd, kd) : gd(dd, Jd, kd);
      if (!(Wd >= Nd)) return [];
      const Zd = Wd - Nd + 1,
        Cd = new Array(Zd);
      if (pd)
        if (Pd < 0)
          for (let gd = 0; gd < Zd; ++gd) Cd[gd] = (Wd - gd) / -Pd;
        else
          for (let gd = 0; gd < Zd; ++gd) Cd[gd] = (Wd - gd) * Pd;
      else if (Pd < 0)
        for (let gd = 0; gd < Zd; ++gd) Cd[gd] = (Nd + gd) / -Pd;
      else
        for (let gd = 0; gd < Zd; ++gd) Cd[gd] = (Nd + gd) * Pd;
      return Cd
    }

    function Kd(dd, Jd, kd) {
      return gd(dd = +dd, Jd = +Jd, kd = +kd)[2]
    }

    function od(dd, Jd, kd) {
      kd = +kd;
      const pd = (Jd = +Jd) < (dd = +dd),
        Nd = pd ? Kd(Jd, dd, kd) : Kd(dd, Jd, kd);
      return (pd ? -1 : 1) * (Nd < 0 ? 1 / -Nd : Nd)
    }

    function ld(dd, Jd) {
      return null == dd || null == Jd ? NaN : dd < Jd ? -1 : dd > Jd ? 1 : dd >= Jd ? 0 : NaN
    }

    function Qd(dd, Jd) {
      return null == dd || null == Jd ? NaN : Jd < dd ? -1 : Jd > dd ? 1 : Jd >= dd ? 0 : NaN
    }

    function Ld(dd) {
      let Jd, kd, pd;

      function Nd(dd, pd) {
        let Nd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : dd.length;
        if (Nd < Wd) {
          if (0 !== Jd(pd, pd)) return Wd;
          do {
            const Jd = Nd + Wd >>> 1;
            kd(dd[Jd], pd) < 0 ? Nd = Jd + 1 : Wd = Jd
          } while (Nd < Wd)
        }
        return Nd
      }
      return 2 !== dd.length ? (Jd = ld, kd = (Jd, kd) => ld(dd(Jd), kd), pd = (Jd, kd) => dd(Jd) - kd) : (Jd = dd === ld || dd === Qd ? dd : Od, kd = dd, pd = dd), {
        left: Nd,
        center: function(dd, Jd) {
          let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          const Wd = Nd(dd, Jd, kd, (arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : dd.length) - 1);
          return Wd > kd && pd(dd[Wd - 1], Jd) > -pd(dd[Wd], Jd) ? Wd - 1 : Wd
        },
        right: function(dd, pd) {
          let Nd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : dd.length;
          if (Nd < Wd) {
            if (0 !== Jd(pd, pd)) return Wd;
            do {
              const Jd = Nd + Wd >>> 1;
              kd(dd[Jd], pd) <= 0 ? Nd = Jd + 1 : Wd = Jd
            } while (Nd < Wd)
          }
          return Nd
        }
      }
    }

    function Od() {
      return 0
    }

    function ed(dd) {
      return null === dd ? NaN : +dd
    }
    const Rd = Ld(ld),
      Id = Rd.right,
      Gd = (Rd.left, Ld(ed).center, Id);

    function vd(dd, Jd, kd) {
      dd.prototype = Jd.prototype = kd, kd.constructor = dd
    }

    function xd(dd, Jd) {
      var kd = Object.create(dd.prototype);
      for (var pd in Jd) kd[pd] = Jd[pd];
      return kd
    }

    function qd() {}
    var Bd = .7,
      sd = 1 / Bd,
      ad = "\\s*([+-]?\\d+)\\s*",
      Md = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      Fd = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      Yd = /^#([0-9a-f]{3,8})$/,
      md = new RegExp(`^rgb\\(${ad},${ad},${ad}\\)$`),
      bd = new RegExp(`^rgb\\(${Fd},${Fd},${Fd}\\)$`),
      Sd = new RegExp(`^rgba\\(${ad},${ad},${ad},${Md}\\)$`),
      jd = new RegExp(`^rgba\\(${Fd},${Fd},${Fd},${Md}\\)$`),
      Xd = new RegExp(`^hsl\\(${Md},${Fd},${Fd}\\)$`),
      fd = new RegExp(`^hsla\\(${Md},${Fd},${Fd},${Md}\\)$`),
      nd = {
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

    function Ud() {
      return this.rgb().formatHex()
    }

    function yd() {
      return this.rgb().formatRgb()
    }

    function Dd(dd) {
      var Jd, kd;
      return dd = (dd + "").trim().toLowerCase(), (Jd = Yd.exec(dd)) ? (kd = Jd[1].length, Jd = parseInt(Jd[1], 16), 6 === kd ? Td(Jd) : 3 === kd ? new hd(Jd >> 8 & 15 | Jd >> 4 & 240, Jd >> 4 & 15 | 240 & Jd, (15 & Jd) << 4 | 15 & Jd, 1) : 8 === kd ? Ed(Jd >> 24 & 255, Jd >> 16 & 255, Jd >> 8 & 255, (255 & Jd) / 255) : 4 === kd ? Ed(Jd >> 12 & 15 | Jd >> 8 & 240, Jd >> 8 & 15 | Jd >> 4 & 240, Jd >> 4 & 15 | 240 & Jd, ((15 & Jd) << 4 | 15 & Jd) / 255) : null) : (Jd = md.exec(dd)) ? new hd(Jd[1], Jd[2], Jd[3], 1) : (Jd = bd.exec(dd)) ? new hd(255 * Jd[1] / 100, 255 * Jd[2] / 100, 255 * Jd[3] / 100, 1) : (Jd = Sd.exec(dd)) ? Ed(Jd[1], Jd[2], Jd[3], Jd[4]) : (Jd = jd.exec(dd)) ? Ed(255 * Jd[1] / 100, 255 * Jd[2] / 100, 255 * Jd[3] / 100, Jd[4]) : (Jd = Xd.exec(dd)) ? Hd(Jd[1], Jd[2] / 100, Jd[3] / 100, 1) : (Jd = fd.exec(dd)) ? Hd(Jd[1], Jd[2] / 100, Jd[3] / 100, Jd[4]) : nd.hasOwnProperty(dd) ? Td(nd[dd]) : "transparent" === dd ? new hd(NaN, NaN, NaN, 0) : null
    }

    function Td(dd) {
      return new hd(dd >> 16 & 255, dd >> 8 & 255, 255 & dd, 1)
    }

    function Ed(dd, Jd, kd, pd) {
      return pd <= 0 && (dd = Jd = kd = NaN), new hd(dd, Jd, kd, pd)
    }

    function cd(dd, Jd, kd, pd) {
      return 1 === arguments.length ? ((Nd = dd) instanceof qd || (Nd = Dd(Nd)), Nd ? new hd((Nd = Nd.rgb()).r, Nd.g, Nd.b, Nd.opacity) : new hd) : new hd(dd, Jd, kd, null == pd ? 1 : pd);
      var Nd
    }

    function hd(dd, Jd, kd, pd) {
      this.r = +dd, this.g = +Jd, this.b = +kd, this.opacity = +pd
    }

    function rd() {
      return `#${zd(this.r)}${zd(this.g)}${zd(this.b)}`
    }

    function ud() {
      const dd = td(this.opacity);
      return `${1===dd?"rgb(":"rgba("}${Vd(this.r)}, ${Vd(this.g)}, ${Vd(this.b)}${1===dd?")":`, ${dd})`}`
    }

    function td(dd) {
      return isNaN(dd) ? 1 : Math.max(0, Math.min(1, dd))
    }

    function Vd(dd) {
      return Math.max(0, Math.min(255, Math.round(dd) || 0))
    }

    function zd(dd) {
      return ((dd = Vd(dd)) < 16 ? "0" : "") + dd.toString(16)
    }

    function Hd(dd, Jd, kd, pd) {
      return pd <= 0 ? dd = Jd = kd = NaN : kd <= 0 || kd >= 1 ? dd = Jd = NaN : Jd <= 0 && (dd = NaN), new Ad(dd, Jd, kd, pd)
    }

    function wd(dd) {
      if (dd instanceof Ad) return new Ad(dd.h, dd.s, dd.l, dd.opacity);
      if (dd instanceof qd || (dd = Dd(dd)), !dd) return new Ad;
      if (dd instanceof Ad) return dd;
      var Jd = (dd = dd.rgb()).r / 255,
        kd = dd.g / 255,
        pd = dd.b / 255,
        Nd = Math.min(Jd, kd, pd),
        Wd = Math.max(Jd, kd, pd),
        Pd = NaN,
        Zd = Wd - Nd,
        gd = (Wd + Nd) / 2;
      return Zd ? (Pd = Jd === Wd ? (kd - pd) / Zd + 6 * (kd < pd) : kd === Wd ? (pd - Jd) / Zd + 2 : (Jd - kd) / Zd + 4, Zd /= gd < .5 ? Wd + Nd : 2 - Wd - Nd, Pd *= 60) : Zd = gd > 0 && gd < 1 ? 0 : Pd, new Ad(Pd, Zd, gd, dd.opacity)
    }

    function Ad(dd, Jd, kd, pd) {
      this.h = +dd, this.s = +Jd, this.l = +kd, this.opacity = +pd
    }

    function dJ(dd) {
      return (dd = (dd || 0) % 360) < 0 ? dd + 360 : dd
    }

    function JJ(dd) {
      return Math.max(0, Math.min(1, dd || 0))
    }

    function kJ(dd, Jd, kd) {
      return 255 * (dd < 60 ? Jd + (kd - Jd) * dd / 60 : dd < 180 ? kd : dd < 240 ? Jd + (kd - Jd) * (240 - dd) / 60 : Jd)
    }

    function pJ(dd, Jd, kd, pd, Nd) {
      var Wd = dd * dd,
        Pd = Wd * dd;
      return ((1 - 3 * dd + 3 * Wd - Pd) * Jd + (4 - 6 * Wd + 3 * Pd) * kd + (1 + 3 * dd + 3 * Wd - 3 * Pd) * pd + Pd * Nd) / 6
    }
    vd(qd, Dd, {
      copy(dd) {
        return Object.assign(new this.constructor, this, dd)
      },
      displayable() {
        return this.rgb().displayable()
      },
      hex: Ud,
      formatHex: Ud,
      formatHex8: function() {
        return this.rgb().formatHex8()
      },
      formatHsl: function() {
        return wd(this).formatHsl()
      },
      formatRgb: yd,
      toString: yd
    }), vd(hd, cd, xd(qd, {
      brighter(dd) {
        return dd = null == dd ? sd : Math.pow(sd, dd), new hd(this.r * dd, this.g * dd, this.b * dd, this.opacity)
      },
      darker(dd) {
        return dd = null == dd ? Bd : Math.pow(Bd, dd), new hd(this.r * dd, this.g * dd, this.b * dd, this.opacity)
      },
      rgb() {
        return this
      },
      clamp() {
        return new hd(Vd(this.r), Vd(this.g), Vd(this.b), td(this.opacity))
      },
      displayable() {
        return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1
      },
      hex: rd,
      formatHex: rd,
      formatHex8: function() {
        return `#${zd(this.r)}${zd(this.g)}${zd(this.b)}${zd(255*(isNaN(this.opacity)?1:this.opacity))}`
      },
      formatRgb: ud,
      toString: ud
    })), vd(Ad, (function(dd, Jd, kd, pd) {
      return 1 === arguments.length ? wd(dd) : new Ad(dd, Jd, kd, null == pd ? 1 : pd)
    }), xd(qd, {
      brighter(dd) {
        return dd = null == dd ? sd : Math.pow(sd, dd), new Ad(this.h, this.s, this.l * dd, this.opacity)
      },
      darker(dd) {
        return dd = null == dd ? Bd : Math.pow(Bd, dd), new Ad(this.h, this.s, this.l * dd, this.opacity)
      },
      rgb() {
        var dd = this.h % 360 + 360 * (this.h < 0),
          Jd = isNaN(dd) || isNaN(this.s) ? 0 : this.s,
          kd = this.l,
          pd = kd + (kd < .5 ? kd : 1 - kd) * Jd,
          Nd = 2 * kd - pd;
        return new hd(kJ(dd >= 240 ? dd - 240 : dd + 120, Nd, pd), kJ(dd, Nd, pd), kJ(dd < 120 ? dd + 240 : dd - 120, Nd, pd), this.opacity)
      },
      clamp() {
        return new Ad(dJ(this.h), JJ(this.s), JJ(this.l), td(this.opacity))
      },
      displayable() {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
      },
      formatHsl() {
        const dd = td(this.opacity);
        return `${1===dd?"hsl(":"hsla("}${dJ(this.h)}, ${100*JJ(this.s)}%, ${100*JJ(this.l)}%${1===dd?")":`, ${dd})`}`
      }
    }));
    const NJ = dd => () => dd;

    function WJ(dd, Jd) {
      return function(kd) {
        return dd + kd * Jd
      }
    }

    function PJ(dd) {
      return 1 === (dd = +dd) ? ZJ : function(Jd, kd) {
        return kd - Jd ? function(dd, Jd, kd) {
          return dd = Math.pow(dd, kd), Jd = Math.pow(Jd, kd) - dd, kd = 1 / kd,
            function(pd) {
              return Math.pow(dd + pd * Jd, kd)
            }
        }(Jd, kd, dd) : NJ(isNaN(Jd) ? kd : Jd)
      }
    }

    function ZJ(dd, Jd) {
      var kd = Jd - dd;
      return kd ? WJ(dd, kd) : NJ(isNaN(dd) ? Jd : dd)
    }
    const gJ = function dd(Jd) {
      var kd = PJ(Jd);

      function pd(dd, Jd) {
        var pd = kd((dd = cd(dd)).r, (Jd = cd(Jd)).r),
          Nd = kd(dd.g, Jd.g),
          Wd = kd(dd.b, Jd.b),
          Pd = ZJ(dd.opacity, Jd.opacity);
        return function(Jd) {
          return dd.r = pd(Jd), dd.g = Nd(Jd), dd.b = Wd(Jd), dd.opacity = Pd(Jd), dd + ""
        }
      }
      return pd.gamma = dd, pd
    }(1);

    function CJ(dd) {
      return function(Jd) {
        var kd, pd, Nd = Jd.length,
          Wd = new Array(Nd),
          Pd = new Array(Nd),
          Zd = new Array(Nd);
        for (kd = 0; kd < Nd; ++kd) pd = cd(Jd[kd]), Wd[kd] = pd.r || 0, Pd[kd] = pd.g || 0, Zd[kd] = pd.b || 0;
        return Wd = dd(Wd), Pd = dd(Pd), Zd = dd(Zd), pd.opacity = 1,
          function(dd) {
            return pd.r = Wd(dd), pd.g = Pd(dd), pd.b = Zd(dd), pd + ""
          }
      }
    }
    CJ((function(dd) {
      var Jd = dd.length - 1;
      return function(kd) {
        var pd = kd <= 0 ? kd = 0 : kd >= 1 ? (kd = 1, Jd - 1) : Math.floor(kd * Jd),
          Nd = dd[pd],
          Wd = dd[pd + 1],
          Pd = pd > 0 ? dd[pd - 1] : 2 * Nd - Wd,
          Zd = pd < Jd - 1 ? dd[pd + 2] : 2 * Wd - Nd;
        return pJ((kd - pd / Jd) * Jd, Pd, Nd, Wd, Zd)
      }
    })), CJ((function(dd) {
      var Jd = dd.length;
      return function(kd) {
        var pd = Math.floor(((kd %= 1) < 0 ? ++kd : kd) * Jd),
          Nd = dd[(pd + Jd - 1) % Jd],
          Wd = dd[pd % Jd],
          Pd = dd[(pd + 1) % Jd],
          Zd = dd[(pd + 2) % Jd];
        return pJ((kd - pd / Jd) * Jd, Nd, Wd, Pd, Zd)
      }
    }));

    function KJ(dd, Jd) {
      var kd, pd = Jd ? Jd.length : 0,
        Nd = dd ? Math.min(pd, dd.length) : 0,
        Wd = new Array(Nd),
        Pd = new Array(pd);
      for (kd = 0; kd < Nd; ++kd) Wd[kd] = IJ(dd[kd], Jd[kd]);
      for (; kd < pd; ++kd) Pd[kd] = Jd[kd];
      return function(dd) {
        for (kd = 0; kd < Nd; ++kd) Pd[kd] = Wd[kd](dd);
        return Pd
      }
    }

    function oJ(dd, Jd) {
      var kd = new Date;
      return dd = +dd, Jd = +Jd,
        function(pd) {
          return kd.setTime(dd * (1 - pd) + Jd * pd), kd
        }
    }

    function lJ(dd, Jd) {
      return dd = +dd, Jd = +Jd,
        function(kd) {
          return dd * (1 - kd) + Jd * kd
        }
    }

    function QJ(dd, Jd) {
      var kd, pd = {},
        Nd = {};
      for (kd in null !== dd && "object" === typeof dd || (dd = {}), null !== Jd && "object" === typeof Jd || (Jd = {}), Jd) kd in dd ? pd[kd] = IJ(dd[kd], Jd[kd]) : Nd[kd] = Jd[kd];
      return function(dd) {
        for (kd in pd) Nd[kd] = pd[kd](dd);
        return Nd
      }
    }
    var LJ = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      OJ = new RegExp(LJ.source, "g");

    function eJ(dd, Jd) {
      var kd, pd, Nd, Wd = LJ.lastIndex = OJ.lastIndex = 0,
        Pd = -1,
        Zd = [],
        gd = [];
      for (dd += "", Jd += "";
        (kd = LJ.exec(dd)) && (pd = OJ.exec(Jd));)(Nd = pd.index) > Wd && (Nd = Jd.slice(Wd, Nd), Zd[Pd] ? Zd[Pd] += Nd : Zd[++Pd] = Nd), (kd = kd[0]) === (pd = pd[0]) ? Zd[Pd] ? Zd[Pd] += pd : Zd[++Pd] = pd : (Zd[++Pd] = null, gd.push({
        i: Pd,
        x: lJ(kd, pd)
      })), Wd = OJ.lastIndex;
      return Wd < Jd.length && (Nd = Jd.slice(Wd), Zd[Pd] ? Zd[Pd] += Nd : Zd[++Pd] = Nd), Zd.length < 2 ? gd[0] ? function(dd) {
        return function(Jd) {
          return dd(Jd) + ""
        }
      }(gd[0].x) : function(dd) {
        return function() {
          return dd
        }
      }(Jd) : (Jd = gd.length, function(dd) {
        for (var kd, pd = 0; pd < Jd; ++pd) Zd[(kd = gd[pd]).i] = kd.x(dd);
        return Zd.join("")
      })
    }

    function RJ(dd, Jd) {
      Jd || (Jd = []);
      var kd, pd = dd ? Math.min(Jd.length, dd.length) : 0,
        Nd = Jd.slice();
      return function(Wd) {
        for (kd = 0; kd < pd; ++kd) Nd[kd] = dd[kd] * (1 - Wd) + Jd[kd] * Wd;
        return Nd
      }
    }

    function IJ(dd, Jd) {
      var kd, pd, Nd = typeof Jd;
      return null == Jd || "boolean" === Nd ? NJ(Jd) : ("number" === Nd ? lJ : "string" === Nd ? (kd = Dd(Jd)) ? (Jd = kd, gJ) : eJ : Jd instanceof Dd ? gJ : Jd instanceof Date ? oJ : (pd = Jd, !ArrayBuffer.isView(pd) || pd instanceof DataView ? Array.isArray(Jd) ? KJ : "function" !== typeof Jd.valueOf && "function" !== typeof Jd.toString || isNaN(Jd) ? QJ : lJ : RJ))(dd, Jd)
    }

    function GJ(dd, Jd) {
      return dd = +dd, Jd = +Jd,
        function(kd) {
          return Math.round(dd * (1 - kd) + Jd * kd)
        }
    }

    function vJ(dd) {
      return +dd
    }
    var xJ = [0, 1];

    function qJ(dd) {
      return dd
    }

    function BJ(dd, Jd) {
      return (Jd -= dd = +dd) ? function(kd) {
        return (kd - dd) / Jd
      } : (kd = isNaN(Jd) ? NaN : .5, function() {
        return kd
      });
      var kd
    }

    function sJ(dd, Jd, kd) {
      var pd = dd[0],
        Nd = dd[1],
        Wd = Jd[0],
        Pd = Jd[1];
      return Nd < pd ? (pd = BJ(Nd, pd), Wd = kd(Pd, Wd)) : (pd = BJ(pd, Nd), Wd = kd(Wd, Pd)),
        function(dd) {
          return Wd(pd(dd))
        }
    }

    function iJ(dd, Jd, kd) {
      var pd = Math.min(dd.length, Jd.length) - 1,
        Nd = new Array(pd),
        Wd = new Array(pd),
        Pd = -1;
      for (dd[pd] < dd[0] && (dd = dd.slice().reverse(), Jd = Jd.slice().reverse()); ++Pd < pd;) Nd[Pd] = BJ(dd[Pd], dd[Pd + 1]), Wd[Pd] = kd(Jd[Pd], Jd[Pd + 1]);
      return function(Jd) {
        var kd = Gd(dd, Jd, 1, pd) - 1;
        return Wd[kd](Nd[kd](Jd))
      }
    }

    function aJ(dd, Jd) {
      return Jd.domain(dd.domain()).range(dd.range()).interpolate(dd.interpolate()).clamp(dd.clamp()).unknown(dd.unknown())
    }

    function MJ() {
      var dd, Jd, kd, pd, Nd, Wd, Pd = xJ,
        Zd = xJ,
        gd = IJ,
        Cd = qJ;

      function Kd() {
        var dd = Math.min(Pd.length, Zd.length);
        return Cd !== qJ && (Cd = function(dd, Jd) {
          var kd;
          return dd > Jd && (kd = dd, dd = Jd, Jd = kd),
            function(kd) {
              return Math.max(dd, Math.min(Jd, kd))
            }
        }(Pd[0], Pd[dd - 1])), pd = dd > 2 ? iJ : sJ, Nd = Wd = null, od
      }

      function od(Jd) {
        return null == Jd || isNaN(Jd = +Jd) ? kd : (Nd || (Nd = pd(Pd.map(dd), Zd, gd)))(dd(Cd(Jd)))
      }
      return od.invert = function(kd) {
          return Cd(Jd((Wd || (Wd = pd(Zd, Pd.map(dd), lJ)))(kd)))
        }, od.domain = function(dd) {
          return arguments.length ? (Pd = Array.from(dd, vJ), Kd()) : Pd.slice()
        }, od.range = function(dd) {
          return arguments.length ? (Zd = Array.from(dd), Kd()) : Zd.slice()
        }, od.rangeRound = function(dd) {
          return Zd = Array.from(dd), gd = GJ, Kd()
        }, od.clamp = function(dd) {
          return arguments.length ? (Cd = !!dd || qJ, Kd()) : Cd !== qJ
        }, od.interpolate = function(dd) {
          return arguments.length ? (gd = dd, Kd()) : gd
        }, od.unknown = function(dd) {
          return arguments.length ? (kd = dd, od) : kd
        },
        function(kd, pd) {
          return dd = kd, Jd = pd, Kd()
        }
    }

    function FJ() {
      return MJ()(qJ, qJ)
    }
    var YJ, mJ = kd(6029),
      bJ = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

    function SJ(dd) {
      if (!(Jd = bJ.exec(dd))) throw new Error("invalid format: " + dd);
      var Jd;
      return new jJ({
        fill: Jd[1],
        align: Jd[2],
        sign: Jd[3],
        symbol: Jd[4],
        zero: Jd[5],
        width: Jd[6],
        comma: Jd[7],
        precision: Jd[8] && Jd[8].slice(1),
        trim: Jd[9],
        type: Jd[10]
      })
    }

    function jJ(dd) {
      this.fill = void 0 === dd.fill ? " " : dd.fill + "", this.align = void 0 === dd.align ? ">" : dd.align + "", this.sign = void 0 === dd.sign ? "-" : dd.sign + "", this.symbol = void 0 === dd.symbol ? "" : dd.symbol + "", this.zero = !!dd.zero, this.width = void 0 === dd.width ? void 0 : +dd.width, this.comma = !!dd.comma, this.precision = void 0 === dd.precision ? void 0 : +dd.precision, this.trim = !!dd.trim, this.type = void 0 === dd.type ? "" : dd.type + ""
    }

    function XJ(dd, Jd) {
      if (!isFinite(dd) || 0 === dd) return null;
      var kd = (dd = Jd ? dd.toExponential(Jd - 1) : dd.toExponential()).indexOf("e"),
        pd = dd.slice(0, kd);
      return [pd.length > 1 ? pd[0] + pd.slice(2) : pd, +dd.slice(kd + 1)]
    }

    function fJ(dd) {
      return (dd = XJ(Math.abs(dd))) ? dd[1] : NaN
    }

    function nJ(dd, Jd) {
      var kd = XJ(dd, Jd);
      if (!kd) return dd + "";
      var pd = kd[0],
        Nd = kd[1];
      return Nd < 0 ? "0." + new Array(-Nd).join("0") + pd : pd.length > Nd + 1 ? pd.slice(0, Nd + 1) + "." + pd.slice(Nd + 1) : pd + new Array(Nd - pd.length + 2).join("0")
    }
    SJ.prototype = jJ.prototype, jJ.prototype.toString = function() {
      return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (void 0 === this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type
    };
    const UJ = {
      "%": (dd, Jd) => (100 * dd).toFixed(Jd),
      b: dd => Math.round(dd).toString(2),
      c: dd => dd + "",
      d: function(dd) {
        return Math.abs(dd = Math.round(dd)) >= 1e21 ? dd.toLocaleString("en").replace(/,/g, "") : dd.toString(10)
      },
      e: (dd, Jd) => dd.toExponential(Jd),
      f: (dd, Jd) => dd.toFixed(Jd),
      g: (dd, Jd) => dd.toPrecision(Jd),
      o: dd => Math.round(dd).toString(8),
      p: (dd, Jd) => nJ(100 * dd, Jd),
      r: nJ,
      s: function(dd, Jd) {
        var kd = XJ(dd, Jd);
        if (!kd) return YJ = void 0, dd.toPrecision(Jd);
        var pd = kd[0],
          Nd = kd[1],
          Wd = Nd - (YJ = 3 * Math.max(-8, Math.min(8, Math.floor(Nd / 3)))) + 1,
          Pd = pd.length;
        return Wd === Pd ? pd : Wd > Pd ? pd + new Array(Wd - Pd + 1).join("0") : Wd > 0 ? pd.slice(0, Wd) + "." + pd.slice(Wd) : "0." + new Array(1 - Wd).join("0") + XJ(dd, Math.max(0, Jd + Wd - 1))[0]
      },
      X: dd => Math.round(dd).toString(16).toUpperCase(),
      x: dd => Math.round(dd).toString(16)
    };

    function yJ(dd) {
      return dd
    }
    var DJ, TJ, EJ, cJ = Array.prototype.map,
      hJ = ["y", "z", "a", "f", "p", "n", "\xb5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];

    function rJ(dd) {
      var Jd, kd, pd = void 0 === dd.grouping || void 0 === dd.thousands ? yJ : (Jd = cJ.call(dd.grouping, Number), kd = dd.thousands + "", function(dd, pd) {
          for (var Nd = dd.length, Wd = [], Pd = 0, Zd = Jd[0], gd = 0; Nd > 0 && Zd > 0 && (gd + Zd + 1 > pd && (Zd = Math.max(1, pd - gd)), Wd.push(dd.substring(Nd -= Zd, Nd + Zd)), !((gd += Zd + 1) > pd));) Zd = Jd[Pd = (Pd + 1) % Jd.length];
          return Wd.reverse().join(kd)
        }),
        Nd = void 0 === dd.currency ? "" : dd.currency[0] + "",
        Wd = void 0 === dd.currency ? "" : dd.currency[1] + "",
        Pd = void 0 === dd.decimal ? "." : dd.decimal + "",
        Zd = void 0 === dd.numerals ? yJ : function(dd) {
          return function(Jd) {
            return Jd.replace(/[0-9]/g, (function(Jd) {
              return dd[+Jd]
            }))
          }
        }(cJ.call(dd.numerals, String)),
        gd = void 0 === dd.percent ? "%" : dd.percent + "",
        Cd = void 0 === dd.minus ? "\u2212" : dd.minus + "",
        Kd = void 0 === dd.nan ? "NaN" : dd.nan + "";

      function od(dd, Jd) {
        var kd = (dd = SJ(dd)).fill,
          od = dd.align,
          ld = dd.sign,
          Qd = dd.symbol,
          Ld = dd.zero,
          Od = dd.width,
          ed = dd.comma,
          Rd = dd.precision,
          Id = dd.trim,
          Gd = dd.type;
        "n" === Gd ? (ed = !0, Gd = "g") : UJ[Gd] || (void 0 === Rd && (Rd = 12), Id = !0, Gd = "g"), (Ld || "0" === kd && "=" === od) && (Ld = !0, kd = "0", od = "=");
        var vd = (Jd && void 0 !== Jd.prefix ? Jd.prefix : "") + ("$" === Qd ? Nd : "#" === Qd && /[boxX]/.test(Gd) ? "0" + Gd.toLowerCase() : ""),
          xd = ("$" === Qd ? Wd : /[%p]/.test(Gd) ? gd : "") + (Jd && void 0 !== Jd.suffix ? Jd.suffix : ""),
          qd = UJ[Gd],
          Bd = /[defgprs%]/.test(Gd);

        function sd(dd) {
          var Jd, Nd, Wd, gd = vd,
            Qd = xd;
          if ("c" === Gd) Qd = qd(dd) + Qd, dd = "";
          else {
            var sd = (dd = +dd) < 0 || 1 / dd < 0;
            if (dd = isNaN(dd) ? Kd : qd(Math.abs(dd), Rd), Id && (dd = function(dd) {
                dd: for (var Jd, kd = dd.length, pd = 1, Nd = -1; pd < kd; ++pd) switch (dd[pd]) {
                  case ".":
                    Nd = Jd = pd;
                    break;
                  case "0":
                    0 === Nd && (Nd = pd), Jd = pd;
                    break;
                  default:
                    if (!+dd[pd]) break dd;
                    Nd > 0 && (Nd = 0)
                }
                return Nd > 0 ? dd.slice(0, Nd) + dd.slice(Jd + 1) : dd
              }(dd)), sd && 0 === +dd && "+" !== ld && (sd = !1), gd = (sd ? "(" === ld ? ld : Cd : "-" === ld || "(" === ld ? "" : ld) + gd, Qd = ("s" !== Gd || isNaN(dd) || void 0 === YJ ? "" : hJ[8 + YJ / 3]) + Qd + (sd && "(" === ld ? ")" : ""), Bd)
              for (Jd = -1, Nd = dd.length; ++Jd < Nd;)
                if (48 > (Wd = dd.charCodeAt(Jd)) || Wd > 57) {
                  Qd = (46 === Wd ? Pd + dd.slice(Jd + 1) : dd.slice(Jd)) + Qd, dd = dd.slice(0, Jd);
                  break
                }
          }
          ed && !Ld && (dd = pd(dd, 1 / 0));
          var ad = gd.length + dd.length + Qd.length,
            Md = ad < Od ? new Array(Od - ad + 1).join(kd) : "";
          switch (ed && Ld && (dd = pd(Md + dd, Md.length ? Od - Qd.length : 1 / 0), Md = ""), od) {
            case "<":
              dd = gd + dd + Qd + Md;
              break;
            case "=":
              dd = gd + Md + dd + Qd;
              break;
            case "^":
              dd = Md.slice(0, ad = Md.length >> 1) + gd + dd + Qd + Md.slice(ad);
              break;
            default:
              dd = Md + gd + dd + Qd
          }
          return Zd(dd)
        }
        return Rd = void 0 === Rd ? 6 : /[gprs]/.test(Gd) ? Math.max(1, Math.min(21, Rd)) : Math.max(0, Math.min(20, Rd)), sd.toString = function() {
          return dd + ""
        }, sd
      }
      return {
        format: od,
        formatPrefix: function(dd, Jd) {
          var kd = 3 * Math.max(-8, Math.min(8, Math.floor(fJ(Jd) / 3))),
            pd = Math.pow(10, -kd),
            Nd = od(((dd = SJ(dd)).type = "f", dd), {
              suffix: hJ[8 + kd / 3]
            });
          return function(dd) {
            return Nd(pd * dd)
          }
        }
      }
    }

    function uJ(dd, Jd, kd, pd) {
      var Nd, Wd = od(dd, Jd, kd);
      switch ((pd = SJ(null == pd ? ",f" : pd)).type) {
        case "s":
          var Pd = Math.max(Math.abs(dd), Math.abs(Jd));
          return null != pd.precision || isNaN(Nd = function(dd, Jd) {
            return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(fJ(Jd) / 3))) - fJ(Math.abs(dd)))
          }(Wd, Pd)) || (pd.precision = Nd), EJ(pd, Pd);
        case "":
        case "e":
        case "g":
        case "p":
        case "r":
          null != pd.precision || isNaN(Nd = function(dd, Jd) {
            return dd = Math.abs(dd), Jd = Math.abs(Jd) - dd, Math.max(0, fJ(Jd) - fJ(dd)) + 1
          }(Wd, Math.max(Math.abs(dd), Math.abs(Jd)))) || (pd.precision = Nd - ("e" === pd.type));
          break;
        case "f":
        case "%":
          null != pd.precision || isNaN(Nd = function(dd) {
            return Math.max(0, -fJ(Math.abs(dd)))
          }(Wd)) || (pd.precision = Nd - 2 * ("%" === pd.type))
      }
      return TJ(pd)
    }

    function tJ(dd) {
      var Jd = dd.domain;
      return dd.ticks = function(dd) {
        var kd = Jd();
        return Cd(kd[0], kd[kd.length - 1], null == dd ? 10 : dd)
      }, dd.tickFormat = function(dd, kd) {
        var pd = Jd();
        return uJ(pd[0], pd[pd.length - 1], null == dd ? 10 : dd, kd)
      }, dd.nice = function(kd) {
        null == kd && (kd = 10);
        var pd, Nd, Wd = Jd(),
          Pd = 0,
          Zd = Wd.length - 1,
          gd = Wd[Pd],
          Cd = Wd[Zd],
          od = 10;
        for (Cd < gd && (Nd = gd, gd = Cd, Cd = Nd, Nd = Pd, Pd = Zd, Zd = Nd); od-- > 0;) {
          if ((Nd = Kd(gd, Cd, kd)) === pd) return Wd[Pd] = gd, Wd[Zd] = Cd, Jd(Wd);
          if (Nd > 0) gd = Math.floor(gd / Nd) * Nd, Cd = Math.ceil(Cd / Nd) * Nd;
          else {
            if (!(Nd < 0)) break;
            gd = Math.ceil(gd * Nd) / Nd, Cd = Math.floor(Cd * Nd) / Nd
          }
          pd = Nd
        }
        return dd
      }, dd
    }

    function VJ() {
      var dd = FJ();
      return dd.copy = function() {
        return aJ(dd, VJ())
      }, mJ.f.apply(dd, arguments), tJ(dd)
    }

    function zJ(dd) {
      var Jd;

      function kd(dd) {
        return null == dd || isNaN(dd = +dd) ? Jd : dd
      }
      return kd.invert = kd, kd.domain = kd.range = function(Jd) {
        return arguments.length ? (dd = Array.from(Jd, vJ), kd) : dd.slice()
      }, kd.unknown = function(dd) {
        return arguments.length ? (Jd = dd, kd) : Jd
      }, kd.copy = function() {
        return zJ(dd).unknown(Jd)
      }, dd = arguments.length ? Array.from(dd, vJ) : [0, 1], tJ(kd)
    }

    function HJ(dd, Jd) {
      var kd, pd = 0,
        Nd = (dd = dd.slice()).length - 1,
        Wd = dd[pd],
        Pd = dd[Nd];
      return Pd < Wd && (kd = pd, pd = Nd, Nd = kd, kd = Wd, Wd = Pd, Pd = kd), dd[pd] = Jd.floor(Wd), dd[Nd] = Jd.ceil(Pd), dd
    }

    function wJ(dd) {
      return Math.log(dd)
    }

    function AJ(dd) {
      return Math.exp(dd)
    }

    function dk(dd) {
      return -Math.log(-dd)
    }

    function Jk(dd) {
      return -Math.exp(-dd)
    }

    function kk(dd) {
      return isFinite(dd) ? +("1e" + dd) : dd < 0 ? 0 : dd
    }

    function pk(dd) {
      return (Jd, kd) => -dd(-Jd, kd)
    }

    function Nk(dd) {
      const Jd = dd(wJ, AJ),
        kd = Jd.domain;
      let pd, Nd, Wd = 10;

      function Pd() {
        return pd = function(dd) {
          return dd === Math.E ? Math.log : 10 === dd && Math.log10 || 2 === dd && Math.log2 || (dd = Math.log(dd), Jd => Math.log(Jd) / dd)
        }(Wd), Nd = function(dd) {
          return 10 === dd ? kk : dd === Math.E ? Math.exp : Jd => Math.pow(dd, Jd)
        }(Wd), kd()[0] < 0 ? (pd = pk(pd), Nd = pk(Nd), dd(dk, Jk)) : dd(wJ, AJ), Jd
      }
      return Jd.base = function(dd) {
        return arguments.length ? (Wd = +dd, Pd()) : Wd
      }, Jd.domain = function(dd) {
        return arguments.length ? (kd(dd), Pd()) : kd()
      }, Jd.ticks = dd => {
        const Jd = kd();
        let Pd = Jd[0],
          Zd = Jd[Jd.length - 1];
        const gd = Zd < Pd;
        gd && ([Pd, Zd] = [Zd, Pd]);
        let Kd, od, ld = pd(Pd),
          Qd = pd(Zd);
        const Ld = null == dd ? 10 : +dd;
        let Od = [];
        if (!(Wd % 1) && Qd - ld < Ld) {
          if (ld = Math.floor(ld), Qd = Math.ceil(Qd), Pd > 0) {
            for (; ld <= Qd; ++ld)
              for (Kd = 1; Kd < Wd; ++Kd)
                if (od = ld < 0 ? Kd / Nd(-ld) : Kd * Nd(ld), !(od < Pd)) {
                  if (od > Zd) break;
                  Od.push(od)
                }
          } else
            for (; ld <= Qd; ++ld)
              for (Kd = Wd - 1; Kd >= 1; --Kd)
                if (od = ld > 0 ? Kd / Nd(-ld) : Kd * Nd(ld), !(od < Pd)) {
                  if (od > Zd) break;
                  Od.push(od)
                } 2 * Od.length < Ld && (Od = Cd(Pd, Zd, Ld))
        } else Od = Cd(ld, Qd, Math.min(Qd - ld, Ld)).map(Nd);
        return gd ? Od.reverse() : Od
      }, Jd.tickFormat = (dd, kd) => {
        if (null == dd && (dd = 10), null == kd && (kd = 10 === Wd ? "s" : ","), "function" !== typeof kd && (Wd % 1 || null != (kd = SJ(kd)).precision || (kd.trim = !0), kd = TJ(kd)), dd === 1 / 0) return kd;
        const Pd = Math.max(1, Wd * dd / Jd.ticks().length);
        return dd => {
          let Jd = dd / Nd(Math.round(pd(dd)));
          return Jd * Wd < Wd - .5 && (Jd *= Wd), Jd <= Pd ? kd(dd) : ""
        }
      }, Jd.nice = () => kd(HJ(kd(), {
        floor: dd => Nd(Math.floor(pd(dd))),
        ceil: dd => Nd(Math.ceil(pd(dd)))
      })), Jd
    }

    function Wk() {
      const dd = Nk(MJ()).domain([1, 10]);
      return dd.copy = () => aJ(dd, Wk()).base(dd.base()), mJ.f.apply(dd, arguments), dd
    }

    function Pk(dd) {
      return function(Jd) {
        return Math.sign(Jd) * Math.log1p(Math.abs(Jd / dd))
      }
    }

    function Zk(dd) {
      return function(Jd) {
        return Math.sign(Jd) * Math.expm1(Math.abs(Jd)) * dd
      }
    }

    function gk(dd) {
      var Jd = 1,
        kd = dd(Pk(Jd), Zk(Jd));
      return kd.constant = function(kd) {
        return arguments.length ? dd(Pk(Jd = +kd), Zk(Jd)) : Jd
      }, tJ(kd)
    }

    function Ck() {
      var dd = gk(MJ());
      return dd.copy = function() {
        return aJ(dd, Ck()).constant(dd.constant())
      }, mJ.f.apply(dd, arguments)
    }
    DJ = rJ({
      thousands: ",",
      grouping: [3],
      currency: ["$", ""]
    }), TJ = DJ.format, EJ = DJ.formatPrefix;
    var Kk = kd(6036);

    function lk(dd) {
      return function(Jd) {
        return Jd < 0 ? -Math.pow(-Jd, dd) : Math.pow(Jd, dd)
      }
    }

    function Qk(dd) {
      return dd < 0 ? -Math.sqrt(-dd) : Math.sqrt(dd)
    }

    function Lk(dd) {
      return dd < 0 ? -dd * dd : dd * dd
    }

    function Ok(dd) {
      var Jd = dd(qJ, qJ),
        kd = 1;
      return Jd.exponent = function(Jd) {
        return arguments.length ? 1 === (kd = +Jd) ? dd(qJ, qJ) : .5 === kd ? dd(Qk, Lk) : dd(lk(kd), lk(1 / kd)) : kd
      }, tJ(Jd)
    }

    function ek() {
      var dd = Ok(MJ());
      return dd.copy = function() {
        return aJ(dd, ek()).exponent(dd.exponent())
      }, mJ.f.apply(dd, arguments), dd
    }

    function Rk() {
      return ek.apply(null, arguments).exponent(.5)
    }

    function Ik(dd) {
      return Math.sign(dd) * dd * dd
    }

    function Gk() {
      var dd, Jd = FJ(),
        kd = [0, 1],
        pd = !1;

      function Nd(kd) {
        var Nd = function(dd) {
          return Math.sign(dd) * Math.sqrt(Math.abs(dd))
        }(Jd(kd));
        return isNaN(Nd) ? dd : pd ? Math.round(Nd) : Nd
      }
      return Nd.invert = function(dd) {
        return Jd.invert(Ik(dd))
      }, Nd.domain = function(dd) {
        return arguments.length ? (Jd.domain(dd), Nd) : Jd.domain()
      }, Nd.range = function(dd) {
        return arguments.length ? (Jd.range((kd = Array.from(dd, vJ)).map(Ik)), Nd) : kd.slice()
      }, Nd.rangeRound = function(dd) {
        return Nd.range(dd).round(!0)
      }, Nd.round = function(dd) {
        return arguments.length ? (pd = !!dd, Nd) : pd
      }, Nd.clamp = function(dd) {
        return arguments.length ? (Jd.clamp(dd), Nd) : Jd.clamp()
      }, Nd.unknown = function(Jd) {
        return arguments.length ? (dd = Jd, Nd) : dd
      }, Nd.copy = function() {
        return Gk(Jd.domain(), kd).round(pd).clamp(Jd.clamp()).unknown(dd)
      }, mJ.f.apply(Nd, arguments), tJ(Nd)
    }

    function vk(dd, Jd) {
      let kd;
      if (void 0 === Jd)
        for (const pd of dd) null != pd && (kd < pd || void 0 === kd && pd >= pd) && (kd = pd);
      else {
        let pd = -1;
        for (let Nd of dd) null != (Nd = Jd(Nd, ++pd, dd)) && (kd < Nd || void 0 === kd && Nd >= Nd) && (kd = Nd)
      }
      return kd
    }

    function xk(dd, Jd) {
      let kd;
      if (void 0 === Jd)
        for (const pd of dd) null != pd && (kd > pd || void 0 === kd && pd >= pd) && (kd = pd);
      else {
        let pd = -1;
        for (let Nd of dd) null != (Nd = Jd(Nd, ++pd, dd)) && (kd > Nd || void 0 === kd && Nd >= Nd) && (kd = Nd)
      }
      return kd
    }

    function qk() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ld;
      if (dd === ld) return Bk;
      if ("function" !== typeof dd) throw new TypeError("compare is not a function");
      return (Jd, kd) => {
        const pd = dd(Jd, kd);
        return pd || 0 === pd ? pd : (0 === dd(kd, kd)) - (0 === dd(Jd, Jd))
      }
    }

    function Bk(dd, Jd) {
      return (null == dd || !(dd >= dd)) - (null == Jd || !(Jd >= Jd)) || (dd < Jd ? -1 : dd > Jd ? 1 : 0)
    }

    function sk(dd, Jd) {
      let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1 / 0,
        Nd = arguments.length > 4 ? arguments[4] : void 0;
      if (Jd = Math.floor(Jd), kd = Math.floor(Math.max(0, kd)), pd = Math.floor(Math.min(dd.length - 1, pd)), !(kd <= Jd && Jd <= pd)) return dd;
      for (Nd = void 0 === Nd ? Bk : qk(Nd); pd > kd;) {
        if (pd - kd > 600) {
          const Wd = pd - kd + 1,
            Pd = Jd - kd + 1,
            Zd = Math.log(Wd),
            gd = .5 * Math.exp(2 * Zd / 3),
            Cd = .5 * Math.sqrt(Zd * gd * (Wd - gd) / Wd) * (Pd - Wd / 2 < 0 ? -1 : 1);
          sk(dd, Jd, Math.max(kd, Math.floor(Jd - Pd * gd / Wd + Cd)), Math.min(pd, Math.floor(Jd + (Wd - Pd) * gd / Wd + Cd)), Nd)
        }
        const Wd = dd[Jd];
        let Pd = kd,
          Zd = pd;
        for (ik(dd, kd, Jd), Nd(dd[pd], Wd) > 0 && ik(dd, kd, pd); Pd < Zd;) {
          for (ik(dd, Pd, Zd), ++Pd, --Zd; Nd(dd[Pd], Wd) < 0;) ++Pd;
          for (; Nd(dd[Zd], Wd) > 0;) --Zd
        }
        0 === Nd(dd[kd], Wd) ? ik(dd, kd, Zd) : (++Zd, ik(dd, Zd, pd)), Zd <= Jd && (kd = Zd + 1), Jd <= Zd && (pd = Zd - 1)
      }
      return dd
    }

    function ik(dd, Jd, kd) {
      const pd = dd[Jd];
      dd[Jd] = dd[kd], dd[kd] = pd
    }

    function ak(dd, Jd, kd) {
      if (dd = Float64Array.from(function*(dd, Jd) {
          if (void 0 === Jd)
            for (let kd of dd) null != kd && (kd = +kd) >= kd && (yield kd);
          else {
            let kd = -1;
            for (let pd of dd) null != (pd = Jd(pd, ++kd, dd)) && (pd = +pd) >= pd && (yield pd)
          }
        }(dd, kd)), (pd = dd.length) && !isNaN(Jd = +Jd)) {
        if (Jd <= 0 || pd < 2) return xk(dd);
        if (Jd >= 1) return vk(dd);
        var pd, Nd = (pd - 1) * Jd,
          Wd = Math.floor(Nd),
          Pd = vk(sk(dd, Wd).subarray(0, Wd + 1));
        return Pd + (xk(dd.subarray(Wd + 1)) - Pd) * (Nd - Wd)
      }
    }

    function Mk(dd, Jd) {
      let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ed;
      if ((pd = dd.length) && !isNaN(Jd = +Jd)) {
        if (Jd <= 0 || pd < 2) return +kd(dd[0], 0, dd);
        if (Jd >= 1) return +kd(dd[pd - 1], pd - 1, dd);
        var pd, Nd = (pd - 1) * Jd,
          Wd = Math.floor(Nd),
          Pd = +kd(dd[Wd], Wd, dd);
        return Pd + (+kd(dd[Wd + 1], Wd + 1, dd) - Pd) * (Nd - Wd)
      }
    }

    function Fk() {
      var dd, Jd = [],
        kd = [],
        pd = [];

      function Nd() {
        var dd = 0,
          Nd = Math.max(1, kd.length);
        for (pd = new Array(Nd - 1); ++dd < Nd;) pd[dd - 1] = Mk(Jd, dd / Nd);
        return Wd
      }

      function Wd(Jd) {
        return null == Jd || isNaN(Jd = +Jd) ? dd : kd[Gd(pd, Jd)]
      }
      return Wd.invertExtent = function(dd) {
        var Nd = kd.indexOf(dd);
        return Nd < 0 ? [NaN, NaN] : [Nd > 0 ? pd[Nd - 1] : Jd[0], Nd < pd.length ? pd[Nd] : Jd[Jd.length - 1]]
      }, Wd.domain = function(dd) {
        if (!arguments.length) return Jd.slice();
        Jd = [];
        for (let kd of dd) null == kd || isNaN(kd = +kd) || Jd.push(kd);
        return Jd.sort(ld), Nd()
      }, Wd.range = function(dd) {
        return arguments.length ? (kd = Array.from(dd), Nd()) : kd.slice()
      }, Wd.unknown = function(Jd) {
        return arguments.length ? (dd = Jd, Wd) : dd
      }, Wd.quantiles = function() {
        return pd.slice()
      }, Wd.copy = function() {
        return Fk().domain(Jd).range(kd).unknown(dd)
      }, mJ.f.apply(Wd, arguments)
    }

    function Yk() {
      var dd, Jd = 0,
        kd = 1,
        pd = 1,
        Nd = [.5],
        Wd = [0, 1];

      function Pd(Jd) {
        return null != Jd && Jd <= Jd ? Wd[Gd(Nd, Jd, 0, pd)] : dd
      }

      function Zd() {
        var dd = -1;
        for (Nd = new Array(pd); ++dd < pd;) Nd[dd] = ((dd + 1) * kd - (dd - pd) * Jd) / (pd + 1);
        return Pd
      }
      return Pd.domain = function(dd) {
        return arguments.length ? ([Jd, kd] = dd, Jd = +Jd, kd = +kd, Zd()) : [Jd, kd]
      }, Pd.range = function(dd) {
        return arguments.length ? (pd = (Wd = Array.from(dd)).length - 1, Zd()) : Wd.slice()
      }, Pd.invertExtent = function(dd) {
        var Pd = Wd.indexOf(dd);
        return Pd < 0 ? [NaN, NaN] : Pd < 1 ? [Jd, Nd[0]] : Pd >= pd ? [Nd[pd - 1], kd] : [Nd[Pd - 1], Nd[Pd]]
      }, Pd.unknown = function(Jd) {
        return arguments.length ? (dd = Jd, Pd) : Pd
      }, Pd.thresholds = function() {
        return Nd.slice()
      }, Pd.copy = function() {
        return Yk().domain([Jd, kd]).range(Wd).unknown(dd)
      }, mJ.f.apply(tJ(Pd), arguments)
    }

    function mk() {
      var dd, Jd = [.5],
        kd = [0, 1],
        pd = 1;

      function Nd(Nd) {
        return null != Nd && Nd <= Nd ? kd[Gd(Jd, Nd, 0, pd)] : dd
      }
      return Nd.domain = function(dd) {
        return arguments.length ? (Jd = Array.from(dd), pd = Math.min(Jd.length, kd.length - 1), Nd) : Jd.slice()
      }, Nd.range = function(dd) {
        return arguments.length ? (kd = Array.from(dd), pd = Math.min(Jd.length, kd.length - 1), Nd) : kd.slice()
      }, Nd.invertExtent = function(dd) {
        var pd = kd.indexOf(dd);
        return [Jd[pd - 1], Jd[pd]]
      }, Nd.unknown = function(Jd) {
        return arguments.length ? (dd = Jd, Nd) : dd
      }, Nd.copy = function() {
        return mk().domain(Jd).range(kd).unknown(dd)
      }, mJ.f.apply(Nd, arguments)
    }
    const bk = 1e3,
      Sk = 6e4,
      jk = 36e5,
      Xk = 864e5,
      fk = 6048e5,
      nk = 2592e6,
      Uk = 31536e6,
      yk = new Date,
      Dk = new Date;

    function Tk(dd, Jd, kd, pd) {
      function Nd(Jd) {
        return dd(Jd = 0 === arguments.length ? new Date : new Date(+Jd)), Jd
      }
      return Nd.floor = Jd => (dd(Jd = new Date(+Jd)), Jd), Nd.ceil = kd => (dd(kd = new Date(kd - 1)), Jd(kd, 1), dd(kd), kd), Nd.round = dd => {
        const Jd = Nd(dd),
          kd = Nd.ceil(dd);
        return dd - Jd < kd - dd ? Jd : kd
      }, Nd.offset = (dd, kd) => (Jd(dd = new Date(+dd), null == kd ? 1 : Math.floor(kd)), dd), Nd.range = (kd, pd, Wd) => {
        const Pd = [];
        if (kd = Nd.ceil(kd), Wd = null == Wd ? 1 : Math.floor(Wd), !(kd < pd) || !(Wd > 0)) return Pd;
        let Zd;
        do {
          Pd.push(Zd = new Date(+kd)), Jd(kd, Wd), dd(kd)
        } while (Zd < kd && kd < pd);
        return Pd
      }, Nd.filter = kd => Tk((Jd => {
        if (Jd >= Jd)
          for (; dd(Jd), !kd(Jd);) Jd.setTime(Jd - 1)
      }), ((dd, pd) => {
        if (dd >= dd)
          if (pd < 0)
            for (; ++pd <= 0;)
              for (; Jd(dd, -1), !kd(dd););
          else
            for (; --pd >= 0;)
              for (; Jd(dd, 1), !kd(dd););
      })), kd && (Nd.count = (Jd, pd) => (yk.setTime(+Jd), Dk.setTime(+pd), dd(yk), dd(Dk), Math.floor(kd(yk, Dk))), Nd.every = dd => (dd = Math.floor(dd), isFinite(dd) && dd > 0 ? dd > 1 ? Nd.filter(pd ? Jd => pd(Jd) % dd === 0 : Jd => Nd.count(0, Jd) % dd === 0) : Nd : null)), Nd
    }
    const Ek = Tk((() => {}), ((dd, Jd) => {
      dd.setTime(+dd + Jd)
    }), ((dd, Jd) => Jd - dd));
    Ek.every = dd => (dd = Math.floor(dd), isFinite(dd) && dd > 0 ? dd > 1 ? Tk((Jd => {
      Jd.setTime(Math.floor(Jd / dd) * dd)
    }), ((Jd, kd) => {
      Jd.setTime(+Jd + kd * dd)
    }), ((Jd, kd) => (kd - Jd) / dd)) : Ek : null);
    Ek.range;
    const ck = Tk((dd => {
        dd.setTime(dd - dd.getMilliseconds())
      }), ((dd, Jd) => {
        dd.setTime(+dd + Jd * bk)
      }), ((dd, Jd) => (Jd - dd) / bk), (dd => dd.getUTCSeconds())),
      hk = (ck.range, Tk((dd => {
        dd.setTime(dd - dd.getMilliseconds() - dd.getSeconds() * bk)
      }), ((dd, Jd) => {
        dd.setTime(+dd + Jd * Sk)
      }), ((dd, Jd) => (Jd - dd) / Sk), (dd => dd.getMinutes()))),
      rk = (hk.range, Tk((dd => {
        dd.setUTCSeconds(0, 0)
      }), ((dd, Jd) => {
        dd.setTime(+dd + Jd * Sk)
      }), ((dd, Jd) => (Jd - dd) / Sk), (dd => dd.getUTCMinutes()))),
      uk = (rk.range, Tk((dd => {
        dd.setTime(dd - dd.getMilliseconds() - dd.getSeconds() * bk - dd.getMinutes() * Sk)
      }), ((dd, Jd) => {
        dd.setTime(+dd + Jd * jk)
      }), ((dd, Jd) => (Jd - dd) / jk), (dd => dd.getHours()))),
      tk = (uk.range, Tk((dd => {
        dd.setUTCMinutes(0, 0, 0)
      }), ((dd, Jd) => {
        dd.setTime(+dd + Jd * jk)
      }), ((dd, Jd) => (Jd - dd) / jk), (dd => dd.getUTCHours()))),
      Vk = (tk.range, Tk((dd => dd.setHours(0, 0, 0, 0)), ((dd, Jd) => dd.setDate(dd.getDate() + Jd)), ((dd, Jd) => (Jd - dd - (Jd.getTimezoneOffset() - dd.getTimezoneOffset()) * Sk) / Xk), (dd => dd.getDate() - 1))),
      zk = (Vk.range, Tk((dd => {
        dd.setUTCHours(0, 0, 0, 0)
      }), ((dd, Jd) => {
        dd.setUTCDate(dd.getUTCDate() + Jd)
      }), ((dd, Jd) => (Jd - dd) / Xk), (dd => dd.getUTCDate() - 1))),
      Hk = (zk.range, Tk((dd => {
        dd.setUTCHours(0, 0, 0, 0)
      }), ((dd, Jd) => {
        dd.setUTCDate(dd.getUTCDate() + Jd)
      }), ((dd, Jd) => (Jd - dd) / Xk), (dd => Math.floor(dd / Xk))));
    Hk.range;

    function wk(dd) {
      return Tk((Jd => {
        Jd.setDate(Jd.getDate() - (Jd.getDay() + 7 - dd) % 7), Jd.setHours(0, 0, 0, 0)
      }), ((dd, Jd) => {
        dd.setDate(dd.getDate() + 7 * Jd)
      }), ((dd, Jd) => (Jd - dd - (Jd.getTimezoneOffset() - dd.getTimezoneOffset()) * Sk) / fk))
    }
    const Ak = wk(0),
      dp = wk(1),
      Jp = wk(2),
      kp = wk(3),
      pp = wk(4),
      Np = wk(5),
      Wp = wk(6);
    Ak.range, dp.range, Jp.range, kp.range, pp.range, Np.range, Wp.range;

    function Pp(dd) {
      return Tk((Jd => {
        Jd.setUTCDate(Jd.getUTCDate() - (Jd.getUTCDay() + 7 - dd) % 7), Jd.setUTCHours(0, 0, 0, 0)
      }), ((dd, Jd) => {
        dd.setUTCDate(dd.getUTCDate() + 7 * Jd)
      }), ((dd, Jd) => (Jd - dd) / fk))
    }
    const Zp = Pp(0),
      gp = Pp(1),
      Cp = Pp(2),
      Kp = Pp(3),
      op = Pp(4),
      lp = Pp(5),
      Qp = Pp(6),
      Lp = (Zp.range, gp.range, Cp.range, Kp.range, op.range, lp.range, Qp.range, Tk((dd => {
        dd.setDate(1), dd.setHours(0, 0, 0, 0)
      }), ((dd, Jd) => {
        dd.setMonth(dd.getMonth() + Jd)
      }), ((dd, Jd) => Jd.getMonth() - dd.getMonth() + 12 * (Jd.getFullYear() - dd.getFullYear())), (dd => dd.getMonth()))),
      Op = (Lp.range, Tk((dd => {
        dd.setUTCDate(1), dd.setUTCHours(0, 0, 0, 0)
      }), ((dd, Jd) => {
        dd.setUTCMonth(dd.getUTCMonth() + Jd)
      }), ((dd, Jd) => Jd.getUTCMonth() - dd.getUTCMonth() + 12 * (Jd.getUTCFullYear() - dd.getUTCFullYear())), (dd => dd.getUTCMonth()))),
      ep = (Op.range, Tk((dd => {
        dd.setMonth(0, 1), dd.setHours(0, 0, 0, 0)
      }), ((dd, Jd) => {
        dd.setFullYear(dd.getFullYear() + Jd)
      }), ((dd, Jd) => Jd.getFullYear() - dd.getFullYear()), (dd => dd.getFullYear())));
    ep.every = dd => isFinite(dd = Math.floor(dd)) && dd > 0 ? Tk((Jd => {
      Jd.setFullYear(Math.floor(Jd.getFullYear() / dd) * dd), Jd.setMonth(0, 1), Jd.setHours(0, 0, 0, 0)
    }), ((Jd, kd) => {
      Jd.setFullYear(Jd.getFullYear() + kd * dd)
    })) : null;
    ep.range;
    const Rp = Tk((dd => {
      dd.setUTCMonth(0, 1), dd.setUTCHours(0, 0, 0, 0)
    }), ((dd, Jd) => {
      dd.setUTCFullYear(dd.getUTCFullYear() + Jd)
    }), ((dd, Jd) => Jd.getUTCFullYear() - dd.getUTCFullYear()), (dd => dd.getUTCFullYear()));
    Rp.every = dd => isFinite(dd = Math.floor(dd)) && dd > 0 ? Tk((Jd => {
      Jd.setUTCFullYear(Math.floor(Jd.getUTCFullYear() / dd) * dd), Jd.setUTCMonth(0, 1), Jd.setUTCHours(0, 0, 0, 0)
    }), ((Jd, kd) => {
      Jd.setUTCFullYear(Jd.getUTCFullYear() + kd * dd)
    })) : null;
    Rp.range;

    function Ip(dd, Jd, kd, pd, Nd, Wd) {
      const Pd = [
        [ck, 1, bk],
        [ck, 5, 5e3],
        [ck, 15, 15e3],
        [ck, 30, 3e4],
        [Wd, 1, Sk],
        [Wd, 5, 3e5],
        [Wd, 15, 9e5],
        [Wd, 30, 18e5],
        [Nd, 1, jk],
        [Nd, 3, 108e5],
        [Nd, 6, 216e5],
        [Nd, 12, 432e5],
        [pd, 1, Xk],
        [pd, 2, 1728e5],
        [kd, 1, fk],
        [Jd, 1, nk],
        [Jd, 3, 7776e6],
        [dd, 1, Uk]
      ];

      function Zd(Jd, kd, pd) {
        const Nd = Math.abs(kd - Jd) / pd,
          Wd = Ld((dd => {
            let [, , Jd] = dd;
            return Jd
          })).right(Pd, Nd);
        if (Wd === Pd.length) return dd.every(od(Jd / Uk, kd / Uk, pd));
        if (0 === Wd) return Ek.every(Math.max(od(Jd, kd, pd), 1));
        const [Zd, gd] = Pd[Nd / Pd[Wd - 1][2] < Pd[Wd][2] / Nd ? Wd - 1 : Wd];
        return Zd.every(gd)
      }
      return [function(dd, Jd, kd) {
        const pd = Jd < dd;
        pd && ([dd, Jd] = [Jd, dd]);
        const Nd = kd && "function" === typeof kd.range ? kd : Zd(dd, Jd, kd),
          Wd = Nd ? Nd.range(dd, +Jd + 1) : [];
        return pd ? Wd.reverse() : Wd
      }, Zd]
    }
    const [Gp, vp] = Ip(Rp, Op, Zp, Hk, tk, rk), [xp, qp] = Ip(ep, Lp, Ak, Vk, uk, hk);

    function Bp(dd) {
      if (0 <= dd.y && dd.y < 100) {
        var Jd = new Date(-1, dd.m, dd.d, dd.H, dd.M, dd.S, dd.L);
        return Jd.setFullYear(dd.y), Jd
      }
      return new Date(dd.y, dd.m, dd.d, dd.H, dd.M, dd.S, dd.L)
    }

    function sp(dd) {
      if (0 <= dd.y && dd.y < 100) {
        var Jd = new Date(Date.UTC(-1, dd.m, dd.d, dd.H, dd.M, dd.S, dd.L));
        return Jd.setUTCFullYear(dd.y), Jd
      }
      return new Date(Date.UTC(dd.y, dd.m, dd.d, dd.H, dd.M, dd.S, dd.L))
    }

    function ip(dd, Jd, kd) {
      return {
        y: dd,
        m: Jd,
        d: kd,
        H: 0,
        M: 0,
        S: 0,
        L: 0
      }
    }
    var ap, Mp, Fp, Yp = {
        "-": "",
        _: " ",
        0: "0"
      },
      mp = /^\s*\d+/,
      bp = /^%/,
      Sp = /[\\^$*+?|[\]().{}]/g;

    function jp(dd, Jd, kd) {
      var pd = dd < 0 ? "-" : "",
        Nd = (pd ? -dd : dd) + "",
        Wd = Nd.length;
      return pd + (Wd < kd ? new Array(kd - Wd + 1).join(Jd) + Nd : Nd)
    }

    function Xp(dd) {
      return dd.replace(Sp, "\\$&")
    }

    function fp(dd) {
      return new RegExp("^(?:" + dd.map(Xp).join("|") + ")", "i")
    }

    function np(dd) {
      return new Map(dd.map(((dd, Jd) => [dd.toLowerCase(), Jd])))
    }

    function Up(dd, Jd, kd) {
      var pd = mp.exec(Jd.slice(kd, kd + 1));
      return pd ? (dd.w = +pd[0], kd + pd[0].length) : -1
    }

    function yp(dd, Jd, kd) {
      var pd = mp.exec(Jd.slice(kd, kd + 1));
      return pd ? (dd.u = +pd[0], kd + pd[0].length) : -1
    }

    function Dp(dd, Jd, kd) {
      var pd = mp.exec(Jd.slice(kd, kd + 2));
      return pd ? (dd.U = +pd[0], kd + pd[0].length) : -1
    }

    function Tp(dd, Jd, kd) {
      var pd = mp.exec(Jd.slice(kd, kd + 2));
      return pd ? (dd.V = +pd[0], kd + pd[0].length) : -1
    }

    function Ep(dd, Jd, kd) {
      var pd = mp.exec(Jd.slice(kd, kd + 2));
      return pd ? (dd.W = +pd[0], kd + pd[0].length) : -1
    }

    function cp(dd, Jd, kd) {
      var pd = mp.exec(Jd.slice(kd, kd + 4));
      return pd ? (dd.y = +pd[0], kd + pd[0].length) : -1
    }

    function hp(dd, Jd, kd) {
      var pd = mp.exec(Jd.slice(kd, kd + 2));
      return pd ? (dd.y = +pd[0] + (+pd[0] > 68 ? 1900 : 2e3), kd + pd[0].length) : -1
    }

    function rp(dd, Jd, kd) {
      var pd = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(Jd.slice(kd, kd + 6));
      return pd ? (dd.Z = pd[1] ? 0 : -(pd[2] + (pd[3] || "00")), kd + pd[0].length) : -1
    }

    function tp(dd, Jd, kd) {
      var pd = mp.exec(Jd.slice(kd, kd + 1));
      return pd ? (dd.q = 3 * pd[0] - 3, kd + pd[0].length) : -1
    }

    function Vp(dd, Jd, kd) {
      var pd = mp.exec(Jd.slice(kd, kd + 2));
      return pd ? (dd.m = pd[0] - 1, kd + pd[0].length) : -1
    }

    function zp(dd, Jd, kd) {
      var pd = mp.exec(Jd.slice(kd, kd + 2));
      return pd ? (dd.d = +pd[0], kd + pd[0].length) : -1
    }

    function Hp(dd, Jd, kd) {
      var pd = mp.exec(Jd.slice(kd, kd + 3));
      return pd ? (dd.m = 0, dd.d = +pd[0], kd + pd[0].length) : -1
    }

    function wp(dd, Jd, kd) {
      var pd = mp.exec(Jd.slice(kd, kd + 2));
      return pd ? (dd.H = +pd[0], kd + pd[0].length) : -1
    }

    function Ap(dd, Jd, kd) {
      var pd = mp.exec(Jd.slice(kd, kd + 2));
      return pd ? (dd.M = +pd[0], kd + pd[0].length) : -1
    }

    function dN(dd, Jd, kd) {
      var pd = mp.exec(Jd.slice(kd, kd + 2));
      return pd ? (dd.S = +pd[0], kd + pd[0].length) : -1
    }

    function JN(dd, Jd, kd) {
      var pd = mp.exec(Jd.slice(kd, kd + 3));
      return pd ? (dd.L = +pd[0], kd + pd[0].length) : -1
    }

    function kN(dd, Jd, kd) {
      var pd = mp.exec(Jd.slice(kd, kd + 6));
      return pd ? (dd.L = Math.floor(pd[0] / 1e3), kd + pd[0].length) : -1
    }

    function pN(dd, Jd, kd) {
      var pd = bp.exec(Jd.slice(kd, kd + 1));
      return pd ? kd + pd[0].length : -1
    }

    function NN(dd, Jd, kd) {
      var pd = mp.exec(Jd.slice(kd));
      return pd ? (dd.Q = +pd[0], kd + pd[0].length) : -1
    }

    function WN(dd, Jd, kd) {
      var pd = mp.exec(Jd.slice(kd));
      return pd ? (dd.s = +pd[0], kd + pd[0].length) : -1
    }

    function PN(dd, Jd) {
      return jp(dd.getDate(), Jd, 2)
    }

    function ZN(dd, Jd) {
      return jp(dd.getHours(), Jd, 2)
    }

    function gN(dd, Jd) {
      return jp(dd.getHours() % 12 || 12, Jd, 2)
    }

    function CN(dd, Jd) {
      return jp(1 + Vk.count(ep(dd), dd), Jd, 3)
    }

    function KN(dd, Jd) {
      return jp(dd.getMilliseconds(), Jd, 3)
    }

    function oN(dd, Jd) {
      return KN(dd, Jd) + "000"
    }

    function lN(dd, Jd) {
      return jp(dd.getMonth() + 1, Jd, 2)
    }

    function QN(dd, Jd) {
      return jp(dd.getMinutes(), Jd, 2)
    }

    function LN(dd, Jd) {
      return jp(dd.getSeconds(), Jd, 2)
    }

    function ON(dd) {
      var Jd = dd.getDay();
      return 0 === Jd ? 7 : Jd
    }

    function eN(dd, Jd) {
      return jp(Ak.count(ep(dd) - 1, dd), Jd, 2)
    }

    function RN(dd) {
      var Jd = dd.getDay();
      return Jd >= 4 || 0 === Jd ? pp(dd) : pp.ceil(dd)
    }

    function IN(dd, Jd) {
      return dd = RN(dd), jp(pp.count(ep(dd), dd) + (4 === ep(dd).getDay()), Jd, 2)
    }

    function GN(dd) {
      return dd.getDay()
    }

    function vN(dd, Jd) {
      return jp(dp.count(ep(dd) - 1, dd), Jd, 2)
    }

    function xN(dd, Jd) {
      return jp(dd.getFullYear() % 100, Jd, 2)
    }

    function qN(dd, Jd) {
      return jp((dd = RN(dd)).getFullYear() % 100, Jd, 2)
    }

    function BN(dd, Jd) {
      return jp(dd.getFullYear() % 1e4, Jd, 4)
    }

    function sN(dd, Jd) {
      var kd = dd.getDay();
      return jp((dd = kd >= 4 || 0 === kd ? pp(dd) : pp.ceil(dd)).getFullYear() % 1e4, Jd, 4)
    }

    function iN(dd) {
      var Jd = dd.getTimezoneOffset();
      return (Jd > 0 ? "-" : (Jd *= -1, "+")) + jp(Jd / 60 | 0, "0", 2) + jp(Jd % 60, "0", 2)
    }

    function aN(dd, Jd) {
      return jp(dd.getUTCDate(), Jd, 2)
    }

    function MN(dd, Jd) {
      return jp(dd.getUTCHours(), Jd, 2)
    }

    function FN(dd, Jd) {
      return jp(dd.getUTCHours() % 12 || 12, Jd, 2)
    }

    function YN(dd, Jd) {
      return jp(1 + zk.count(Rp(dd), dd), Jd, 3)
    }

    function mN(dd, Jd) {
      return jp(dd.getUTCMilliseconds(), Jd, 3)
    }

    function bN(dd, Jd) {
      return mN(dd, Jd) + "000"
    }

    function SN(dd, Jd) {
      return jp(dd.getUTCMonth() + 1, Jd, 2)
    }

    function jN(dd, Jd) {
      return jp(dd.getUTCMinutes(), Jd, 2)
    }

    function XN(dd, Jd) {
      return jp(dd.getUTCSeconds(), Jd, 2)
    }

    function fN(dd) {
      var Jd = dd.getUTCDay();
      return 0 === Jd ? 7 : Jd
    }

    function nN(dd, Jd) {
      return jp(Zp.count(Rp(dd) - 1, dd), Jd, 2)
    }

    function UN(dd) {
      var Jd = dd.getUTCDay();
      return Jd >= 4 || 0 === Jd ? op(dd) : op.ceil(dd)
    }

    function yN(dd, Jd) {
      return dd = UN(dd), jp(op.count(Rp(dd), dd) + (4 === Rp(dd).getUTCDay()), Jd, 2)
    }

    function DN(dd) {
      return dd.getUTCDay()
    }

    function TN(dd, Jd) {
      return jp(gp.count(Rp(dd) - 1, dd), Jd, 2)
    }

    function EN(dd, Jd) {
      return jp(dd.getUTCFullYear() % 100, Jd, 2)
    }

    function cN(dd, Jd) {
      return jp((dd = UN(dd)).getUTCFullYear() % 100, Jd, 2)
    }

    function hN(dd, Jd) {
      return jp(dd.getUTCFullYear() % 1e4, Jd, 4)
    }

    function rN(dd, Jd) {
      var kd = dd.getUTCDay();
      return jp((dd = kd >= 4 || 0 === kd ? op(dd) : op.ceil(dd)).getUTCFullYear() % 1e4, Jd, 4)
    }

    function uN() {
      return "+0000"
    }

    function tN() {
      return "%"
    }

    function VN(dd) {
      return +dd
    }

    function zN(dd) {
      return Math.floor(+dd / 1e3)
    }

    function HN(dd) {
      return new Date(dd)
    }

    function wN(dd) {
      return dd instanceof Date ? +dd : +new Date(+dd)
    }

    function AN(dd, Jd, kd, pd, Nd, Wd, Pd, Zd, gd, Cd) {
      var Kd = FJ(),
        od = Kd.invert,
        ld = Kd.domain,
        Qd = Cd(".%L"),
        Ld = Cd(":%S"),
        Od = Cd("%I:%M"),
        ed = Cd("%I %p"),
        Rd = Cd("%a %d"),
        Id = Cd("%b %d"),
        Gd = Cd("%B"),
        vd = Cd("%Y");

      function xd(dd) {
        return (gd(dd) < dd ? Qd : Zd(dd) < dd ? Ld : Pd(dd) < dd ? Od : Wd(dd) < dd ? ed : pd(dd) < dd ? Nd(dd) < dd ? Rd : Id : kd(dd) < dd ? Gd : vd)(dd)
      }
      return Kd.invert = function(dd) {
        return new Date(od(dd))
      }, Kd.domain = function(dd) {
        return arguments.length ? ld(Array.from(dd, wN)) : ld().map(HN)
      }, Kd.ticks = function(Jd) {
        var kd = ld();
        return dd(kd[0], kd[kd.length - 1], null == Jd ? 10 : Jd)
      }, Kd.tickFormat = function(dd, Jd) {
        return null == Jd ? xd : Cd(Jd)
      }, Kd.nice = function(dd) {
        var kd = ld();
        return dd && "function" === typeof dd.range || (dd = Jd(kd[0], kd[kd.length - 1], null == dd ? 10 : dd)), dd ? ld(HJ(kd, dd)) : Kd
      }, Kd.copy = function() {
        return aJ(Kd, AN(dd, Jd, kd, pd, Nd, Wd, Pd, Zd, gd, Cd))
      }, Kd
    }

    function dW() {
      return mJ.f.apply(AN(xp, qp, ep, Lp, Ak, Vk, uk, hk, ck, Mp).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments)
    }

    function JW() {
      return mJ.f.apply(AN(Gp, vp, Rp, Op, Zp, zk, tk, rk, ck, Fp).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments)
    }

    function kW() {
      var dd, Jd, kd, pd, Nd, Wd = 0,
        Pd = 1,
        Zd = qJ,
        gd = !1;

      function Cd(Jd) {
        return null == Jd || isNaN(Jd = +Jd) ? Nd : Zd(0 === kd ? .5 : (Jd = (pd(Jd) - dd) * kd, gd ? Math.max(0, Math.min(1, Jd)) : Jd))
      }

      function Kd(dd) {
        return function(Jd) {
          var kd, pd;
          return arguments.length ? ([kd, pd] = Jd, Zd = dd(kd, pd), Cd) : [Zd(0), Zd(1)]
        }
      }
      return Cd.domain = function(Nd) {
          return arguments.length ? ([Wd, Pd] = Nd, dd = pd(Wd = +Wd), Jd = pd(Pd = +Pd), kd = dd === Jd ? 0 : 1 / (Jd - dd), Cd) : [Wd, Pd]
        }, Cd.clamp = function(dd) {
          return arguments.length ? (gd = !!dd, Cd) : gd
        }, Cd.interpolator = function(dd) {
          return arguments.length ? (Zd = dd, Cd) : Zd
        }, Cd.range = Kd(IJ), Cd.rangeRound = Kd(GJ), Cd.unknown = function(dd) {
          return arguments.length ? (Nd = dd, Cd) : Nd
        },
        function(Nd) {
          return pd = Nd, dd = Nd(Wd), Jd = Nd(Pd), kd = dd === Jd ? 0 : 1 / (Jd - dd), Cd
        }
    }

    function pW(dd, Jd) {
      return Jd.domain(dd.domain()).interpolator(dd.interpolator()).clamp(dd.clamp()).unknown(dd.unknown())
    }

    function NW() {
      var dd = tJ(kW()(qJ));
      return dd.copy = function() {
        return pW(dd, NW())
      }, mJ.c.apply(dd, arguments)
    }

    function WW() {
      var dd = Nk(kW()).domain([1, 10]);
      return dd.copy = function() {
        return pW(dd, WW()).base(dd.base())
      }, mJ.c.apply(dd, arguments)
    }

    function PW() {
      var dd = gk(kW());
      return dd.copy = function() {
        return pW(dd, PW()).constant(dd.constant())
      }, mJ.c.apply(dd, arguments)
    }

    function ZW() {
      var dd = Ok(kW());
      return dd.copy = function() {
        return pW(dd, ZW()).exponent(dd.exponent())
      }, mJ.c.apply(dd, arguments)
    }

    function gW() {
      return ZW.apply(null, arguments).exponent(.5)
    }

    function CW() {
      var dd = [],
        Jd = qJ;

      function kd(kd) {
        if (null != kd && !isNaN(kd = +kd)) return Jd((Gd(dd, kd, 1) - 1) / (dd.length - 1))
      }
      return kd.domain = function(Jd) {
        if (!arguments.length) return dd.slice();
        dd = [];
        for (let kd of Jd) null == kd || isNaN(kd = +kd) || dd.push(kd);
        return dd.sort(ld), kd
      }, kd.interpolator = function(dd) {
        return arguments.length ? (Jd = dd, kd) : Jd
      }, kd.range = function() {
        return dd.map(((kd, pd) => Jd(pd / (dd.length - 1))))
      }, kd.quantiles = function(Jd) {
        return Array.from({
          length: Jd + 1
        }, ((kd, pd) => ak(dd, pd / Jd)))
      }, kd.copy = function() {
        return CW(Jd).domain(dd)
      }, mJ.c.apply(kd, arguments)
    }

    function KW() {
      var dd, Jd, kd, pd, Nd, Wd, Pd, Zd = 0,
        gd = .5,
        Cd = 1,
        Kd = 1,
        od = qJ,
        ld = !1;

      function Qd(dd) {
        return isNaN(dd = +dd) ? Pd : (dd = .5 + ((dd = +Wd(dd)) - Jd) * (Kd * dd < Kd * Jd ? pd : Nd), od(ld ? Math.max(0, Math.min(1, dd)) : dd))
      }

      function Ld(dd) {
        return function(Jd) {
          var kd, pd, Nd;
          return arguments.length ? ([kd, pd, Nd] = Jd, od = function(dd, Jd) {
            void 0 === Jd && (Jd = dd, dd = IJ);
            for (var kd = 0, pd = Jd.length - 1, Nd = Jd[0], Wd = new Array(pd < 0 ? 0 : pd); kd < pd;) Wd[kd] = dd(Nd, Nd = Jd[++kd]);
            return function(dd) {
              var Jd = Math.max(0, Math.min(pd - 1, Math.floor(dd *= pd)));
              return Wd[Jd](dd - Jd)
            }
          }(dd, [kd, pd, Nd]), Qd) : [od(0), od(.5), od(1)]
        }
      }
      return Qd.domain = function(Pd) {
          return arguments.length ? ([Zd, gd, Cd] = Pd, dd = Wd(Zd = +Zd), Jd = Wd(gd = +gd), kd = Wd(Cd = +Cd), pd = dd === Jd ? 0 : .5 / (Jd - dd), Nd = Jd === kd ? 0 : .5 / (kd - Jd), Kd = Jd < dd ? -1 : 1, Qd) : [Zd, gd, Cd]
        }, Qd.clamp = function(dd) {
          return arguments.length ? (ld = !!dd, Qd) : ld
        }, Qd.interpolator = function(dd) {
          return arguments.length ? (od = dd, Qd) : od
        }, Qd.range = Ld(IJ), Qd.rangeRound = Ld(GJ), Qd.unknown = function(dd) {
          return arguments.length ? (Pd = dd, Qd) : Pd
        },
        function(Pd) {
          return Wd = Pd, dd = Pd(Zd), Jd = Pd(gd), kd = Pd(Cd), pd = dd === Jd ? 0 : .5 / (Jd - dd), Nd = Jd === kd ? 0 : .5 / (kd - Jd), Kd = Jd < dd ? -1 : 1, Qd
        }
    }

    function oW() {
      var dd = tJ(KW()(qJ));
      return dd.copy = function() {
        return pW(dd, oW())
      }, mJ.c.apply(dd, arguments)
    }

    function lW() {
      var dd = Nk(KW()).domain([.1, 1, 10]);
      return dd.copy = function() {
        return pW(dd, lW()).base(dd.base())
      }, mJ.c.apply(dd, arguments)
    }

    function QW() {
      var dd = gk(KW());
      return dd.copy = function() {
        return pW(dd, QW()).constant(dd.constant())
      }, mJ.c.apply(dd, arguments)
    }

    function LW() {
      var dd = Ok(KW());
      return dd.copy = function() {
        return pW(dd, LW()).exponent(dd.exponent())
      }, mJ.c.apply(dd, arguments)
    }

    function OW() {
      return LW.apply(null, arguments).exponent(.5)
    }

    function eW(dd, Jd) {
      if ((Nd = dd.length) > 1)
        for (var kd, pd, Nd, Wd = 1, Pd = dd[Jd[0]], Zd = Pd.length; Wd < Nd; ++Wd)
          for (pd = Pd, Pd = dd[Jd[Wd]], kd = 0; kd < Zd; ++kd) Pd[kd][1] += Pd[kd][0] = isNaN(pd[kd][1]) ? pd[kd][0] : pd[kd][1]
    }! function(dd) {
      ap = function(dd) {
        var Jd = dd.dateTime,
          kd = dd.date,
          pd = dd.time,
          Nd = dd.periods,
          Wd = dd.days,
          Pd = dd.shortDays,
          Zd = dd.months,
          gd = dd.shortMonths,
          Cd = fp(Nd),
          Kd = np(Nd),
          od = fp(Wd),
          ld = np(Wd),
          Qd = fp(Pd),
          Ld = np(Pd),
          Od = fp(Zd),
          ed = np(Zd),
          Rd = fp(gd),
          Id = np(gd),
          Gd = {
            a: function(dd) {
              return Pd[dd.getDay()]
            },
            A: function(dd) {
              return Wd[dd.getDay()]
            },
            b: function(dd) {
              return gd[dd.getMonth()]
            },
            B: function(dd) {
              return Zd[dd.getMonth()]
            },
            c: null,
            d: PN,
            e: PN,
            f: oN,
            g: qN,
            G: sN,
            H: ZN,
            I: gN,
            j: CN,
            L: KN,
            m: lN,
            M: QN,
            p: function(dd) {
              return Nd[+(dd.getHours() >= 12)]
            },
            q: function(dd) {
              return 1 + ~~(dd.getMonth() / 3)
            },
            Q: VN,
            s: zN,
            S: LN,
            u: ON,
            U: eN,
            V: IN,
            w: GN,
            W: vN,
            x: null,
            X: null,
            y: xN,
            Y: BN,
            Z: iN,
            "%": tN
          },
          vd = {
            a: function(dd) {
              return Pd[dd.getUTCDay()]
            },
            A: function(dd) {
              return Wd[dd.getUTCDay()]
            },
            b: function(dd) {
              return gd[dd.getUTCMonth()]
            },
            B: function(dd) {
              return Zd[dd.getUTCMonth()]
            },
            c: null,
            d: aN,
            e: aN,
            f: bN,
            g: cN,
            G: rN,
            H: MN,
            I: FN,
            j: YN,
            L: mN,
            m: SN,
            M: jN,
            p: function(dd) {
              return Nd[+(dd.getUTCHours() >= 12)]
            },
            q: function(dd) {
              return 1 + ~~(dd.getUTCMonth() / 3)
            },
            Q: VN,
            s: zN,
            S: XN,
            u: fN,
            U: nN,
            V: yN,
            w: DN,
            W: TN,
            x: null,
            X: null,
            y: EN,
            Y: hN,
            Z: uN,
            "%": tN
          },
          xd = {
            a: function(dd, Jd, kd) {
              var pd = Qd.exec(Jd.slice(kd));
              return pd ? (dd.w = Ld.get(pd[0].toLowerCase()), kd + pd[0].length) : -1
            },
            A: function(dd, Jd, kd) {
              var pd = od.exec(Jd.slice(kd));
              return pd ? (dd.w = ld.get(pd[0].toLowerCase()), kd + pd[0].length) : -1
            },
            b: function(dd, Jd, kd) {
              var pd = Rd.exec(Jd.slice(kd));
              return pd ? (dd.m = Id.get(pd[0].toLowerCase()), kd + pd[0].length) : -1
            },
            B: function(dd, Jd, kd) {
              var pd = Od.exec(Jd.slice(kd));
              return pd ? (dd.m = ed.get(pd[0].toLowerCase()), kd + pd[0].length) : -1
            },
            c: function(dd, kd, pd) {
              return sd(dd, Jd, kd, pd)
            },
            d: zp,
            e: zp,
            f: kN,
            g: hp,
            G: cp,
            H: wp,
            I: wp,
            j: Hp,
            L: JN,
            m: Vp,
            M: Ap,
            p: function(dd, Jd, kd) {
              var pd = Cd.exec(Jd.slice(kd));
              return pd ? (dd.p = Kd.get(pd[0].toLowerCase()), kd + pd[0].length) : -1
            },
            q: tp,
            Q: NN,
            s: WN,
            S: dN,
            u: yp,
            U: Dp,
            V: Tp,
            w: Up,
            W: Ep,
            x: function(dd, Jd, pd) {
              return sd(dd, kd, Jd, pd)
            },
            X: function(dd, Jd, kd) {
              return sd(dd, pd, Jd, kd)
            },
            y: hp,
            Y: cp,
            Z: rp,
            "%": pN
          };

        function qd(dd, Jd) {
          return function(kd) {
            var pd, Nd, Wd, Pd = [],
              Zd = -1,
              gd = 0,
              Cd = dd.length;
            for (kd instanceof Date || (kd = new Date(+kd)); ++Zd < Cd;) 37 === dd.charCodeAt(Zd) && (Pd.push(dd.slice(gd, Zd)), null != (Nd = Yp[pd = dd.charAt(++Zd)]) ? pd = dd.charAt(++Zd) : Nd = "e" === pd ? " " : "0", (Wd = Jd[pd]) && (pd = Wd(kd, Nd)), Pd.push(pd), gd = Zd + 1);
            return Pd.push(dd.slice(gd, Zd)), Pd.join("")
          }
        }

        function Bd(dd, Jd) {
          return function(kd) {
            var pd, Nd, Wd = ip(1900, void 0, 1);
            if (sd(Wd, dd, kd += "", 0) != kd.length) return null;
            if ("Q" in Wd) return new Date(Wd.Q);
            if ("s" in Wd) return new Date(1e3 * Wd.s + ("L" in Wd ? Wd.L : 0));
            if (Jd && !("Z" in Wd) && (Wd.Z = 0), "p" in Wd && (Wd.H = Wd.H % 12 + 12 * Wd.p), void 0 === Wd.m && (Wd.m = "q" in Wd ? Wd.q : 0), "V" in Wd) {
              if (Wd.V < 1 || Wd.V > 53) return null;
              "w" in Wd || (Wd.w = 1), "Z" in Wd ? (Nd = (pd = sp(ip(Wd.y, 0, 1))).getUTCDay(), pd = Nd > 4 || 0 === Nd ? gp.ceil(pd) : gp(pd), pd = zk.offset(pd, 7 * (Wd.V - 1)), Wd.y = pd.getUTCFullYear(), Wd.m = pd.getUTCMonth(), Wd.d = pd.getUTCDate() + (Wd.w + 6) % 7) : (Nd = (pd = Bp(ip(Wd.y, 0, 1))).getDay(), pd = Nd > 4 || 0 === Nd ? dp.ceil(pd) : dp(pd), pd = Vk.offset(pd, 7 * (Wd.V - 1)), Wd.y = pd.getFullYear(), Wd.m = pd.getMonth(), Wd.d = pd.getDate() + (Wd.w + 6) % 7)
            } else("W" in Wd || "U" in Wd) && ("w" in Wd || (Wd.w = "u" in Wd ? Wd.u % 7 : "W" in Wd ? 1 : 0), Nd = "Z" in Wd ? sp(ip(Wd.y, 0, 1)).getUTCDay() : Bp(ip(Wd.y, 0, 1)).getDay(), Wd.m = 0, Wd.d = "W" in Wd ? (Wd.w + 6) % 7 + 7 * Wd.W - (Nd + 5) % 7 : Wd.w + 7 * Wd.U - (Nd + 6) % 7);
            return "Z" in Wd ? (Wd.H += Wd.Z / 100 | 0, Wd.M += Wd.Z % 100, sp(Wd)) : Bp(Wd)
          }
        }

        function sd(dd, Jd, kd, pd) {
          for (var Nd, Wd, Pd = 0, Zd = Jd.length, gd = kd.length; Pd < Zd;) {
            if (pd >= gd) return -1;
            if (37 === (Nd = Jd.charCodeAt(Pd++))) {
              if (Nd = Jd.charAt(Pd++), !(Wd = xd[Nd in Yp ? Jd.charAt(Pd++) : Nd]) || (pd = Wd(dd, kd, pd)) < 0) return -1
            } else if (Nd != kd.charCodeAt(pd++)) return -1
          }
          return pd
        }
        return Gd.x = qd(kd, Gd), Gd.X = qd(pd, Gd), Gd.c = qd(Jd, Gd), vd.x = qd(kd, vd), vd.X = qd(pd, vd), vd.c = qd(Jd, vd), {
          format: function(dd) {
            var Jd = qd(dd += "", Gd);
            return Jd.toString = function() {
              return dd
            }, Jd
          },
          parse: function(dd) {
            var Jd = Bd(dd += "", !1);
            return Jd.toString = function() {
              return dd
            }, Jd
          },
          utcFormat: function(dd) {
            var Jd = qd(dd += "", vd);
            return Jd.toString = function() {
              return dd
            }, Jd
          },
          utcParse: function(dd) {
            var Jd = Bd(dd += "", !0);
            return Jd.toString = function() {
              return dd
            }, Jd
          }
        }
      }(dd), Mp = ap.format, ap.parse, Fp = ap.utcFormat, ap.utcParse
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
    var RW = kd(6101),
      IW = kd(5967);

    function GW(dd) {
      for (var Jd = dd.length, kd = new Array(Jd); --Jd >= 0;) kd[Jd] = Jd;
      return kd
    }

    function vW(dd, Jd) {
      return dd[Jd]
    }

    function xW(dd) {
      const Jd = [];
      return Jd.key = dd, Jd
    }
    var qW = kd(6043),
      BW = kd.n(qW),
      sW = kd(6062),
      iW = kd.n(sW),
      aW = kd(5289),
      MW = kd.n(aW),
      FW = kd(5131),
      YW = kd.n(FW),
      mW = kd(5035),
      bW = kd.n(mW),
      SW = kd(5064),
      jW = kd.n(SW),
      XW = kd(6072),
      fW = kd.n(XW),
      nW = kd(5048),
      UW = kd.n(nW),
      yW = kd(5919),
      DW = kd.n(yW),
      TW = kd(6085),
      EW = kd.n(TW),
      cW = kd(5388),
      hW = kd.n(cW),
      rW = kd(6087),
      uW = kd.n(rW);

    function tW(dd) {
      return function(dd) {
        if (Array.isArray(dd)) return VW(dd)
      }(dd) || function(dd) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(dd)) return Array.from(dd)
      }(dd) || function(dd, Jd) {
        if (!dd) return;
        if ("string" === typeof dd) return VW(dd, Jd);
        var kd = Object.prototype.toString.call(dd).slice(8, -1);
        "Object" === kd && dd.constructor && (kd = dd.constructor.name);
        if ("Map" === kd || "Set" === kd) return Array.from(dd);
        if ("Arguments" === kd || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(kd)) return VW(dd, Jd)
      }(dd) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function VW(dd, Jd) {
      (null == Jd || Jd > dd.length) && (Jd = dd.length);
      for (var kd = 0, pd = new Array(Jd); kd < Jd; kd++) pd[kd] = dd[kd];
      return pd
    }
    var zW = function(dd) {
        return dd
      },
      HW = {
        "@@functional/placeholder": !0
      },
      wW = function(dd) {
        return dd === HW
      },
      AW = function(dd) {
        return function Jd() {
          return 0 === arguments.length || 1 === arguments.length && wW(arguments.length <= 0 ? void 0 : arguments[0]) ? Jd : dd.apply(void 0, arguments)
        }
      },
      dP = function dd(Jd, kd) {
        return 1 === Jd ? kd : AW((function() {
          for (var pd = arguments.length, Nd = new Array(pd), Wd = 0; Wd < pd; Wd++) Nd[Wd] = arguments[Wd];
          var Pd = Nd.filter((function(dd) {
            return dd !== HW
          })).length;
          return Pd >= Jd ? kd.apply(void 0, Nd) : dd(Jd - Pd, AW((function() {
            for (var dd = arguments.length, Jd = new Array(dd), pd = 0; pd < dd; pd++) Jd[pd] = arguments[pd];
            var Wd = Nd.map((function(dd) {
              return wW(dd) ? Jd.shift() : dd
            }));
            return kd.apply(void 0, tW(Wd).concat(Jd))
          })))
        }))
      },
      JP = function(dd) {
        return dP(dd.length, dd)
      },
      kP = function(dd, Jd) {
        for (var kd = [], pd = dd; pd < Jd; ++pd) kd[pd - dd] = pd;
        return kd
      },
      pP = JP((function(dd, Jd) {
        return Array.isArray(Jd) ? Jd.map(dd) : Object.keys(Jd).map((function(dd) {
          return Jd[dd]
        })).map(dd)
      })),
      NP = function() {
        for (var dd = arguments.length, Jd = new Array(dd), kd = 0; kd < dd; kd++) Jd[kd] = arguments[kd];
        if (!Jd.length) return zW;
        var pd = Jd.reverse(),
          Nd = pd[0],
          Wd = pd.slice(1);
        return function() {
          return Wd.reduce((function(dd, Jd) {
            return Jd(dd)
          }), Nd.apply(void 0, arguments))
        }
      },
      WP = function(dd) {
        return Array.isArray(dd) ? dd.reverse() : dd.split("").reverse.join("")
      },
      PP = function(dd) {
        var Jd = null,
          kd = null;
        return function() {
          for (var pd = arguments.length, Nd = new Array(pd), Wd = 0; Wd < pd; Wd++) Nd[Wd] = arguments[Wd];
          return Jd && Nd.every((function(dd, kd) {
            return dd === Jd[kd]
          })) ? kd : (Jd = Nd, kd = dd.apply(void 0, Nd))
        }
      };
    const ZP = {
      rangeStep: function(dd, Jd, kd) {
        for (var pd = new(uW())(dd), Nd = 0, Wd = []; pd.lt(Jd) && Nd < 1e5;) Wd.push(pd.toNumber()), pd = pd.add(kd), Nd++;
        return Wd
      },
      getDigitCount: function(dd) {
        return 0 === dd ? 1 : Math.floor(new(uW())(dd).abs().log(10).toNumber()) + 1
      },
      interpolateNumber: JP((function(dd, Jd, kd) {
        var pd = +dd;
        return pd + kd * (+Jd - pd)
      })),
      uninterpolateNumber: JP((function(dd, Jd, kd) {
        var pd = Jd - +dd;
        return (kd - dd) / (pd = pd || 1 / 0)
      })),
      uninterpolateTruncation: JP((function(dd, Jd, kd) {
        var pd = Jd - +dd;
        return pd = pd || 1 / 0, Math.max(0, Math.min(1, (kd - dd) / pd))
      }))
    };

    function gP(dd) {
      return function(dd) {
        if (Array.isArray(dd)) return oP(dd)
      }(dd) || function(dd) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(dd)) return Array.from(dd)
      }(dd) || KP(dd) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function CP(dd, Jd) {
      return function(dd) {
        if (Array.isArray(dd)) return dd
      }(dd) || function(dd, Jd) {
        if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(dd))) return;
        var kd = [],
          pd = !0,
          Nd = !1,
          Wd = void 0;
        try {
          for (var Pd, Zd = dd[Symbol.iterator](); !(pd = (Pd = Zd.next()).done) && (kd.push(Pd.value), !Jd || kd.length !== Jd); pd = !0);
        } catch (gd) {
          Nd = !0, Wd = gd
        } finally {
          try {
            pd || null == Zd.return || Zd.return()
          } finally {
            if (Nd) throw Wd
          }
        }
        return kd
      }(dd, Jd) || KP(dd, Jd) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function KP(dd, Jd) {
      if (dd) {
        if ("string" === typeof dd) return oP(dd, Jd);
        var kd = Object.prototype.toString.call(dd).slice(8, -1);
        return "Object" === kd && dd.constructor && (kd = dd.constructor.name), "Map" === kd || "Set" === kd ? Array.from(dd) : "Arguments" === kd || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(kd) ? oP(dd, Jd) : void 0
      }
    }

    function oP(dd, Jd) {
      (null == Jd || Jd > dd.length) && (Jd = dd.length);
      for (var kd = 0, pd = new Array(Jd); kd < Jd; kd++) pd[kd] = dd[kd];
      return pd
    }

    function lP(dd) {
      var Jd = CP(dd, 2),
        kd = Jd[0],
        pd = Jd[1],
        Nd = kd,
        Wd = pd;
      return kd > pd && (Nd = pd, Wd = kd), [Nd, Wd]
    }

    function QP(dd, Jd, kd) {
      if (dd.lte(0)) return new(uW())(0);
      var pd = ZP.getDigitCount(dd.toNumber()),
        Nd = new(uW())(10).pow(pd),
        Wd = dd.div(Nd),
        Pd = 1 !== pd ? .05 : .1,
        Zd = new(uW())(Math.ceil(Wd.div(Pd).toNumber())).add(kd).mul(Pd).mul(Nd);
      return Jd ? Zd : new(uW())(Math.ceil(Zd))
    }

    function LP(dd, Jd, kd) {
      var pd = 1,
        Nd = new(uW())(dd);
      if (!Nd.isint() && kd) {
        var Wd = Math.abs(dd);
        Wd < 1 ? (pd = new(uW())(10).pow(ZP.getDigitCount(dd) - 1), Nd = new(uW())(Math.floor(Nd.div(pd).toNumber())).mul(pd)) : Wd > 1 && (Nd = new(uW())(Math.floor(dd)))
      } else 0 === dd ? Nd = new(uW())(Math.floor((Jd - 1) / 2)) : kd || (Nd = new(uW())(Math.floor(dd)));
      var Pd = Math.floor((Jd - 1) / 2);
      return NP(pP((function(dd) {
        return Nd.add(new(uW())(dd - Pd).mul(pd)).toNumber()
      })), kP)(0, Jd)
    }

    function OP(dd, Jd, kd, pd) {
      var Nd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      if (!Number.isFinite((Jd - dd) / (kd - 1))) return {
        step: new(uW())(0),
        tickMin: new(uW())(0),
        tickMax: new(uW())(0)
      };
      var Wd, Pd = QP(new(uW())(Jd).sub(dd).div(kd - 1), pd, Nd);
      Wd = dd <= 0 && Jd >= 0 ? new(uW())(0) : (Wd = new(uW())(dd).add(Jd).div(2)).sub(new(uW())(Wd).mod(Pd));
      var Zd = Math.ceil(Wd.sub(dd).div(Pd).toNumber()),
        gd = Math.ceil(new(uW())(Jd).sub(Wd).div(Pd).toNumber()),
        Cd = Zd + gd + 1;
      return Cd > kd ? OP(dd, Jd, kd, pd, Nd + 1) : (Cd < kd && (gd = Jd > 0 ? gd + (kd - Cd) : gd, Zd = Jd > 0 ? Zd : Zd + (kd - Cd)), {
        step: Pd,
        tickMin: Wd.sub(new(uW())(Zd).mul(Pd)),
        tickMax: Wd.add(new(uW())(gd).mul(Pd))
      })
    }
    var eP = PP((function(dd) {
        var Jd = CP(dd, 2),
          kd = Jd[0],
          pd = Jd[1],
          Nd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
          Wd = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Pd = Math.max(Nd, 2),
          Zd = CP(lP([kd, pd]), 2),
          gd = Zd[0],
          Cd = Zd[1];
        if (gd === -1 / 0 || Cd === 1 / 0) {
          var Kd = Cd === 1 / 0 ? [gd].concat(gP(kP(0, Nd - 1).map((function() {
            return 1 / 0
          })))) : [].concat(gP(kP(0, Nd - 1).map((function() {
            return -1 / 0
          }))), [Cd]);
          return kd > pd ? WP(Kd) : Kd
        }
        if (gd === Cd) return LP(gd, Nd, Wd);
        var od = OP(gd, Cd, Pd, Wd),
          ld = od.step,
          Qd = od.tickMin,
          Ld = od.tickMax,
          Od = ZP.rangeStep(Qd, Ld.add(new(uW())(.1).mul(ld)), ld);
        return kd > pd ? WP(Od) : Od
      })),
      RP = (PP((function(dd) {
        var Jd = CP(dd, 2),
          kd = Jd[0],
          pd = Jd[1],
          Nd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
          Wd = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Pd = Math.max(Nd, 2),
          Zd = CP(lP([kd, pd]), 2),
          gd = Zd[0],
          Cd = Zd[1];
        if (gd === -1 / 0 || Cd === 1 / 0) return [kd, pd];
        if (gd === Cd) return LP(gd, Nd, Wd);
        var Kd = QP(new(uW())(Cd).sub(gd).div(Pd - 1), Wd, 0),
          od = NP(pP((function(dd) {
            return new(uW())(gd).add(new(uW())(dd).mul(Kd)).toNumber()
          })), kP)(0, Pd).filter((function(dd) {
            return dd >= gd && dd <= Cd
          }));
        return kd > pd ? WP(od) : od
      })), PP((function(dd, Jd) {
        var kd = CP(dd, 2),
          pd = kd[0],
          Nd = kd[1],
          Wd = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Pd = CP(lP([pd, Nd]), 2),
          Zd = Pd[0],
          gd = Pd[1];
        if (Zd === -1 / 0 || gd === 1 / 0) return [pd, Nd];
        if (Zd === gd) return [Zd];
        var Cd = Math.max(Jd, 2),
          Kd = QP(new(uW())(gd).sub(Zd).div(Cd - 1), Wd, 0),
          od = [].concat(gP(ZP.rangeStep(new(uW())(Zd), new(uW())(gd).sub(new(uW())(.99).mul(Kd)), Kd)), [gd]);
        return pd > Nd ? WP(od) : od
      }))),
      IP = kd(6092),
      GP = kd(5029),
      vP = kd(5297),
      xP = kd(6097);

    function qP(dd) {
      return qP = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(dd) {
        return typeof dd
      } : function(dd) {
        return dd && "function" == typeof Symbol && dd.constructor === Symbol && dd !== Symbol.prototype ? "symbol" : typeof dd
      }, qP(dd)
    }

    function BP(dd) {
      return function(dd) {
        if (Array.isArray(dd)) return sP(dd)
      }(dd) || function(dd) {
        if ("undefined" !== typeof Symbol && null != dd[Symbol.iterator] || null != dd["@@iterator"]) return Array.from(dd)
      }(dd) || function(dd, Jd) {
        if (!dd) return;
        if ("string" === typeof dd) return sP(dd, Jd);
        var kd = Object.prototype.toString.call(dd).slice(8, -1);
        "Object" === kd && dd.constructor && (kd = dd.constructor.name);
        if ("Map" === kd || "Set" === kd) return Array.from(dd);
        if ("Arguments" === kd || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(kd)) return sP(dd, Jd)
      }(dd) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function sP(dd, Jd) {
      (null == Jd || Jd > dd.length) && (Jd = dd.length);
      for (var kd = 0, pd = new Array(Jd); kd < Jd; kd++) pd[kd] = dd[kd];
      return pd
    }

    function iP(dd, Jd) {
      var kd = Object.keys(dd);
      if (Object.getOwnPropertySymbols) {
        var pd = Object.getOwnPropertySymbols(dd);
        Jd && (pd = pd.filter((function(Jd) {
          return Object.getOwnPropertyDescriptor(dd, Jd).enumerable
        }))), kd.push.apply(kd, pd)
      }
      return kd
    }

    function aP(dd) {
      for (var Jd = 1; Jd < arguments.length; Jd++) {
        var kd = null != arguments[Jd] ? arguments[Jd] : {};
        Jd % 2 ? iP(Object(kd), !0).forEach((function(Jd) {
          MP(dd, Jd, kd[Jd])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(dd, Object.getOwnPropertyDescriptors(kd)) : iP(Object(kd)).forEach((function(Jd) {
          Object.defineProperty(dd, Jd, Object.getOwnPropertyDescriptor(kd, Jd))
        }))
      }
      return dd
    }

    function MP(dd, Jd, kd) {
      return (Jd = function(dd) {
        var Jd = function(dd, Jd) {
          if ("object" != qP(dd) || !dd) return dd;
          var kd = dd[Symbol.toPrimitive];
          if (void 0 !== kd) {
            var pd = kd.call(dd, Jd || "default");
            if ("object" != qP(pd)) return pd;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === Jd ? String : Number)(dd)
        }(dd, "string");
        return "symbol" == qP(Jd) ? Jd : Jd + ""
      }(Jd)) in dd ? Object.defineProperty(dd, Jd, {
        value: kd,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : dd[Jd] = kd, dd
    }

    function FP(dd, Jd, kd) {
      return MW()(dd) || MW()(Jd) ? kd : (0, GP.z)(Jd) ? jW()(dd, Jd, kd) : YW()(Jd) ? Jd(dd) : kd
    }

    function YP(dd, Jd, kd, pd) {
      var Nd = fW()(dd, (function(dd) {
        return FP(dd, Jd)
      }));
      if ("number" === kd) {
        var Wd = Nd.filter((function(dd) {
          return (0, GP.B)(dd) || parseFloat(dd)
        }));
        return Wd.length ? [iW()(Wd), BW()(Wd)] : [1 / 0, -1 / 0]
      }
      return (pd ? Nd.filter((function(dd) {
        return !MW()(dd)
      })) : Nd).map((function(dd) {
        return (0, GP.z)(dd) || dd instanceof Date ? dd : ""
      }))
    }
    var mP = function(dd) {
        var Jd, kd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          pd = arguments.length > 2 ? arguments[2] : void 0,
          Nd = arguments.length > 3 ? arguments[3] : void 0,
          Wd = -1,
          Pd = null !== (Jd = null === kd || void 0 === kd ? void 0 : kd.length) && void 0 !== Jd ? Jd : 0;
        if (Pd <= 1) return 0;
        if (Nd && "angleAxis" === Nd.axisType && Math.abs(Math.abs(Nd.range[1] - Nd.range[0]) - 360) <= 1e-6)
          for (var Zd = Nd.range, gd = 0; gd < Pd; gd++) {
            var Cd = gd > 0 ? pd[gd - 1].coordinate : pd[Pd - 1].coordinate,
              Kd = pd[gd].coordinate,
              od = gd >= Pd - 1 ? pd[0].coordinate : pd[gd + 1].coordinate,
              ld = void 0;
            if ((0, GP.D)(Kd - Cd) !== (0, GP.D)(od - Kd)) {
              var Qd = [];
              if ((0, GP.D)(od - Kd) === (0, GP.D)(Zd[1] - Zd[0])) {
                ld = od;
                var Ld = Kd + Zd[1] - Zd[0];
                Qd[0] = Math.min(Ld, (Ld + Cd) / 2), Qd[1] = Math.max(Ld, (Ld + Cd) / 2)
              } else {
                ld = Cd;
                var Od = od + Zd[1] - Zd[0];
                Qd[0] = Math.min(Kd, (Od + Kd) / 2), Qd[1] = Math.max(Kd, (Od + Kd) / 2)
              }
              var ed = [Math.min(Kd, (ld + Kd) / 2), Math.max(Kd, (ld + Kd) / 2)];
              if (dd > ed[0] && dd <= ed[1] || dd >= Qd[0] && dd <= Qd[1]) {
                Wd = pd[gd].index;
                break
              }
            } else {
              var Rd = Math.min(Cd, od),
                Id = Math.max(Cd, od);
              if (dd > (Rd + Kd) / 2 && dd <= (Id + Kd) / 2) {
                Wd = pd[gd].index;
                break
              }
            }
          } else
            for (var Gd = 0; Gd < Pd; Gd++)
              if (0 === Gd && dd <= (kd[Gd].coordinate + kd[Gd + 1].coordinate) / 2 || Gd > 0 && Gd < Pd - 1 && dd > (kd[Gd].coordinate + kd[Gd - 1].coordinate) / 2 && dd <= (kd[Gd].coordinate + kd[Gd + 1].coordinate) / 2 || Gd === Pd - 1 && dd > (kd[Gd].coordinate + kd[Gd - 1].coordinate) / 2) {
                Wd = kd[Gd].index;
                break
              } return Wd
      },
      bP = function(dd) {
        var Jd, kd, pd = dd.type.displayName,
          Nd = null !== (Jd = dd.type) && void 0 !== Jd && Jd.defaultProps ? aP(aP({}, dd.type.defaultProps), dd.props) : dd.props,
          Wd = Nd.stroke,
          Pd = Nd.fill;
        switch (pd) {
          case "Line":
            kd = Wd;
            break;
          case "Area":
          case "Radar":
            kd = Wd && "none" !== Wd ? Wd : Pd;
            break;
          default:
            kd = Pd
        }
        return kd
      },
      SP = function(dd) {
        var Jd = dd.barSize,
          kd = dd.totalSize,
          pd = dd.stackGroups,
          Nd = void 0 === pd ? {} : pd;
        if (!Nd) return {};
        for (var Wd = {}, Pd = Object.keys(Nd), Zd = 0, gd = Pd.length; Zd < gd; Zd++)
          for (var Cd = Nd[Pd[Zd]].stackGroups, Kd = Object.keys(Cd), od = 0, ld = Kd.length; od < ld; od++) {
            var Qd = Cd[Kd[od]],
              Ld = Qd.items,
              Od = Qd.cateAxisId,
              ed = Ld.filter((function(dd) {
                return (0, vP.q)(dd.type).indexOf("Bar") >= 0
              }));
            if (ed && ed.length) {
              var Rd = ed[0].type.defaultProps,
                Id = void 0 !== Rd ? aP(aP({}, Rd), ed[0].props) : ed[0].props,
                Gd = Id.barSize,
                vd = Id[Od];
              Wd[vd] || (Wd[vd] = []);
              var xd = MW()(Gd) ? Jd : Gd;
              Wd[vd].push({
                item: ed[0],
                stackList: ed.slice(1),
                barSize: MW()(xd) ? void 0 : (0, GP.m)(xd, kd, 0)
              })
            }
          }
        return Wd
      },
      jP = function(dd) {
        var Jd = dd.barGap,
          kd = dd.barCategoryGap,
          pd = dd.bandSize,
          Nd = dd.sizeList,
          Wd = void 0 === Nd ? [] : Nd,
          Pd = dd.maxBarSize,
          Zd = Wd.length;
        if (Zd < 1) return null;
        var gd, Cd = (0, GP.m)(Jd, pd, 0, !0),
          Kd = [];
        if (Wd[0].barSize === +Wd[0].barSize) {
          var od = !1,
            ld = pd / Zd,
            Qd = Wd.reduce((function(dd, Jd) {
              return dd + Jd.barSize || 0
            }), 0);
          (Qd += (Zd - 1) * Cd) >= pd && (Qd -= (Zd - 1) * Cd, Cd = 0), Qd >= pd && ld > 0 && (od = !0, Qd = Zd * (ld *= .9));
          var Ld = {
            offset: ((pd - Qd) / 2 | 0) - Cd,
            size: 0
          };
          gd = Wd.reduce((function(dd, Jd) {
            var kd = {
                item: Jd.item,
                position: {
                  offset: Ld.offset + Ld.size + Cd,
                  size: od ? ld : Jd.barSize
                }
              },
              pd = [].concat(BP(dd), [kd]);
            return Ld = pd[pd.length - 1].position, Jd.stackList && Jd.stackList.length && Jd.stackList.forEach((function(dd) {
              pd.push({
                item: dd,
                position: Ld
              })
            })), pd
          }), Kd)
        } else {
          var Od = (0, GP.m)(kd, pd, 0, !0);
          pd - 2 * Od - (Zd - 1) * Cd <= 0 && (Cd = 0);
          var ed = (pd - 2 * Od - (Zd - 1) * Cd) / Zd;
          ed > 1 && (ed >>= 0);
          var Rd = Pd === +Pd ? Math.min(ed, Pd) : ed;
          gd = Wd.reduce((function(dd, Jd, kd) {
            var pd = [].concat(BP(dd), [{
              item: Jd.item,
              position: {
                offset: Od + (ed + Cd) * kd + (ed - Rd) / 2,
                size: Rd
              }
            }]);
            return Jd.stackList && Jd.stackList.length && Jd.stackList.forEach((function(dd) {
              pd.push({
                item: dd,
                position: pd[pd.length - 1].position
              })
            })), pd
          }), Kd)
        }
        return gd
      },
      XP = function(dd, Jd, kd, pd) {
        var Nd = kd.children,
          Wd = kd.width,
          Pd = kd.margin,
          Zd = Wd - (Pd.left || 0) - (Pd.right || 0),
          gd = (0, xP.b)({
            children: Nd,
            legendWidth: Zd
          });
        if (gd) {
          var Cd = pd || {},
            Kd = Cd.width,
            od = Cd.height,
            ld = gd.align,
            Qd = gd.verticalAlign,
            Ld = gd.layout;
          if (("vertical" === Ld || "horizontal" === Ld && "middle" === Qd) && "center" !== ld && (0, GP.B)(dd[ld])) return aP(aP({}, dd), {}, MP({}, ld, dd[ld] + (Kd || 0)));
          if (("horizontal" === Ld || "vertical" === Ld && "center" === ld) && "middle" !== Qd && (0, GP.B)(dd[Qd])) return aP(aP({}, dd), {}, MP({}, Qd, dd[Qd] + (od || 0)))
        }
        return dd
      },
      fP = function(dd, Jd, kd, pd, Nd) {
        var Wd = Jd.props.children,
          Pd = (0, vP.i)(Wd, IP.b).filter((function(dd) {
            return function(dd, Jd, kd) {
              return !!MW()(Jd) || ("horizontal" === dd ? "yAxis" === Jd : "vertical" === dd || "x" === kd ? "xAxis" === Jd : "y" !== kd || "yAxis" === Jd)
            }(pd, Nd, dd.props.direction)
          }));
        if (Pd && Pd.length) {
          var Zd = Pd.map((function(dd) {
            return dd.props.dataKey
          }));
          return dd.reduce((function(dd, Jd) {
            var pd = FP(Jd, kd);
            if (MW()(pd)) return dd;
            var Nd = Array.isArray(pd) ? [iW()(pd), BW()(pd)] : [pd, pd],
              Wd = Zd.reduce((function(dd, kd) {
                var pd = FP(Jd, kd, 0),
                  Wd = Nd[0] - Math.abs(Array.isArray(pd) ? pd[0] : pd),
                  Pd = Nd[1] + Math.abs(Array.isArray(pd) ? pd[1] : pd);
                return [Math.min(Wd, dd[0]), Math.max(Pd, dd[1])]
              }), [1 / 0, -1 / 0]);
            return [Math.min(Wd[0], dd[0]), Math.max(Wd[1], dd[1])]
          }), [1 / 0, -1 / 0])
        }
        return null
      },
      nP = function(dd, Jd, kd, pd, Nd) {
        var Wd = Jd.map((function(Jd) {
          return fP(dd, Jd, kd, Nd, pd)
        })).filter((function(dd) {
          return !MW()(dd)
        }));
        return Wd && Wd.length ? Wd.reduce((function(dd, Jd) {
          return [Math.min(dd[0], Jd[0]), Math.max(dd[1], Jd[1])]
        }), [1 / 0, -1 / 0]) : null
      },
      UP = function(dd, Jd, kd, pd, Nd) {
        var Wd = Jd.map((function(Jd) {
          var Wd = Jd.props.dataKey;
          return "number" === kd && Wd && fP(dd, Jd, Wd, pd) || YP(dd, Wd, kd, Nd)
        }));
        if ("number" === kd) return Wd.reduce((function(dd, Jd) {
          return [Math.min(dd[0], Jd[0]), Math.max(dd[1], Jd[1])]
        }), [1 / 0, -1 / 0]);
        var Pd = {};
        return Wd.reduce((function(dd, Jd) {
          for (var kd = 0, pd = Jd.length; kd < pd; kd++) Pd[Jd[kd]] || (Pd[Jd[kd]] = !0, dd.push(Jd[kd]));
          return dd
        }), [])
      },
      yP = function(dd, Jd) {
        return "horizontal" === dd && "xAxis" === Jd || "vertical" === dd && "yAxis" === Jd || "centric" === dd && "angleAxis" === Jd || "radial" === dd && "radiusAxis" === Jd
      },
      DP = function(dd, Jd, kd, pd) {
        if (pd) return dd.map((function(dd) {
          return dd.coordinate
        }));
        var Nd, Wd, Pd = dd.map((function(dd) {
          return dd.coordinate === Jd && (Nd = !0), dd.coordinate === kd && (Wd = !0), dd.coordinate
        }));
        return Nd || Pd.push(Jd), Wd || Pd.push(kd), Pd
      },
      TP = function(dd, Jd, kd) {
        if (!dd) return null;
        var pd = dd.scale,
          Nd = dd.duplicateDomain,
          Wd = dd.type,
          Pd = dd.range,
          Zd = "scaleBand" === dd.realScaleType ? pd.bandwidth() / 2 : 2,
          gd = (Jd || kd) && "category" === Wd && pd.bandwidth ? pd.bandwidth() / Zd : 0;
        return gd = "angleAxis" === dd.axisType && (null === Pd || void 0 === Pd ? void 0 : Pd.length) >= 2 ? 2 * (0, GP.D)(Pd[0] - Pd[1]) * gd : gd, Jd && (dd.ticks || dd.niceTicks) ? (dd.ticks || dd.niceTicks).map((function(dd) {
          var Jd = Nd ? Nd.indexOf(dd) : dd;
          return {
            coordinate: pd(Jd) + gd,
            value: dd,
            offset: gd
          }
        })).filter((function(dd) {
          return !UW()(dd.coordinate)
        })) : dd.isCategorical && dd.categoricalDomain ? dd.categoricalDomain.map((function(dd, Jd) {
          return {
            coordinate: pd(dd) + gd,
            value: dd,
            index: Jd,
            offset: gd
          }
        })) : pd.ticks && !kd ? pd.ticks(dd.tickCount).map((function(dd) {
          return {
            coordinate: pd(dd) + gd,
            value: dd,
            offset: gd
          }
        })) : pd.domain().map((function(dd, Jd) {
          return {
            coordinate: pd(dd) + gd,
            value: Nd ? Nd[dd] : dd,
            index: Jd,
            offset: gd
          }
        }))
      },
      EP = new WeakMap,
      cP = function(dd, Jd) {
        if ("function" !== typeof Jd) return dd;
        EP.has(dd) || EP.set(dd, new WeakMap);
        var kd = EP.get(dd);
        if (kd.has(Jd)) return kd.get(Jd);
        var pd = function() {
          dd.apply(void 0, arguments), Jd.apply(void 0, arguments)
        };
        return kd.set(Jd, pd), pd
      },
      hP = function(dd, Jd, kd) {
        var Wd = dd.scale,
          Pd = dd.type,
          Zd = dd.layout,
          gd = dd.axisType;
        if ("auto" === Wd) return "radial" === Zd && "radiusAxis" === gd ? {
          scale: Nd.d(),
          realScaleType: "band"
        } : "radial" === Zd && "angleAxis" === gd ? {
          scale: VJ(),
          realScaleType: "linear"
        } : "category" === Pd && Jd && (Jd.indexOf("LineChart") >= 0 || Jd.indexOf("AreaChart") >= 0 || Jd.indexOf("ComposedChart") >= 0 && !kd) ? {
          scale: Nd.g(),
          realScaleType: "point"
        } : "category" === Pd ? {
          scale: Nd.d(),
          realScaleType: "band"
        } : {
          scale: VJ(),
          realScaleType: "linear"
        };
        if (bW()(Wd)) {
          var Cd = "scale".concat(DW()(Wd));
          return {
            scale: (pd[Cd] || Nd.g)(),
            realScaleType: pd[Cd] ? Cd : "point"
          }
        }
        return YW()(Wd) ? {
          scale: Wd
        } : {
          scale: Nd.g(),
          realScaleType: "point"
        }
      },
      rP = 1e-4,
      uP = function(dd) {
        var Jd = dd.domain();
        if (Jd && !(Jd.length <= 2)) {
          var kd = Jd.length,
            pd = dd.range(),
            Nd = Math.min(pd[0], pd[1]) - rP,
            Wd = Math.max(pd[0], pd[1]) + rP,
            Pd = dd(Jd[0]),
            Zd = dd(Jd[kd - 1]);
          (Pd < Nd || Pd > Wd || Zd < Nd || Zd > Wd) && dd.domain([Jd[0], Jd[kd - 1]])
        }
      },
      tP = function(dd, Jd) {
        if (!dd) return null;
        for (var kd = 0, pd = dd.length; kd < pd; kd++)
          if (dd[kd].item === Jd) return dd[kd].position;
        return null
      },
      VP = function(dd, Jd) {
        if (!Jd || 2 !== Jd.length || !(0, GP.B)(Jd[0]) || !(0, GP.B)(Jd[1])) return dd;
        var kd = Math.min(Jd[0], Jd[1]),
          pd = Math.max(Jd[0], Jd[1]),
          Nd = [dd[0], dd[1]];
        return (!(0, GP.B)(dd[0]) || dd[0] < kd) && (Nd[0] = kd), (!(0, GP.B)(dd[1]) || dd[1] > pd) && (Nd[1] = pd), Nd[0] > pd && (Nd[0] = pd), Nd[1] < kd && (Nd[1] = kd), Nd
      },
      zP = {
        sign: function(dd) {
          var Jd = dd.length;
          if (!(Jd <= 0))
            for (var kd = 0, pd = dd[0].length; kd < pd; ++kd)
              for (var Nd = 0, Wd = 0, Pd = 0; Pd < Jd; ++Pd) {
                var Zd = UW()(dd[Pd][kd][1]) ? dd[Pd][kd][0] : dd[Pd][kd][1];
                Zd >= 0 ? (dd[Pd][kd][0] = Nd, dd[Pd][kd][1] = Nd + Zd, Nd = dd[Pd][kd][1]) : (dd[Pd][kd][0] = Wd, dd[Pd][kd][1] = Wd + Zd, Wd = dd[Pd][kd][1])
              }
        },
        expand: function(dd, Jd) {
          if ((pd = dd.length) > 0) {
            for (var kd, pd, Nd, Wd = 0, Pd = dd[0].length; Wd < Pd; ++Wd) {
              for (Nd = kd = 0; kd < pd; ++kd) Nd += dd[kd][Wd][1] || 0;
              if (Nd)
                for (kd = 0; kd < pd; ++kd) dd[kd][Wd][1] /= Nd
            }
            eW(dd, Jd)
          }
        },
        none: eW,
        silhouette: function(dd, Jd) {
          if ((kd = dd.length) > 0) {
            for (var kd, pd = 0, Nd = dd[Jd[0]], Wd = Nd.length; pd < Wd; ++pd) {
              for (var Pd = 0, Zd = 0; Pd < kd; ++Pd) Zd += dd[Pd][pd][1] || 0;
              Nd[pd][1] += Nd[pd][0] = -Zd / 2
            }
            eW(dd, Jd)
          }
        },
        wiggle: function(dd, Jd) {
          if ((Nd = dd.length) > 0 && (pd = (kd = dd[Jd[0]]).length) > 0) {
            for (var kd, pd, Nd, Wd = 0, Pd = 1; Pd < pd; ++Pd) {
              for (var Zd = 0, gd = 0, Cd = 0; Zd < Nd; ++Zd) {
                for (var Kd = dd[Jd[Zd]], od = Kd[Pd][1] || 0, ld = (od - (Kd[Pd - 1][1] || 0)) / 2, Qd = 0; Qd < Zd; ++Qd) {
                  var Ld = dd[Jd[Qd]];
                  ld += (Ld[Pd][1] || 0) - (Ld[Pd - 1][1] || 0)
                }
                gd += od, Cd += ld * od
              }
              kd[Pd - 1][1] += kd[Pd - 1][0] = Wd, gd && (Wd -= Cd / gd)
            }
            kd[Pd - 1][1] += kd[Pd - 1][0] = Wd, eW(dd, Jd)
          }
        },
        positive: function(dd) {
          var Jd = dd.length;
          if (!(Jd <= 0))
            for (var kd = 0, pd = dd[0].length; kd < pd; ++kd)
              for (var Nd = 0, Wd = 0; Wd < Jd; ++Wd) {
                var Pd = UW()(dd[Wd][kd][1]) ? dd[Wd][kd][0] : dd[Wd][kd][1];
                Pd >= 0 ? (dd[Wd][kd][0] = Nd, dd[Wd][kd][1] = Nd + Pd, Nd = dd[Wd][kd][1]) : (dd[Wd][kd][0] = 0, dd[Wd][kd][1] = 0)
              }
        }
      },
      HP = function(dd, Jd, kd) {
        var pd = Jd.map((function(dd) {
            return dd.props.dataKey
          })),
          Nd = zP[kd],
          Wd = function() {
            var dd = (0, IW.d)([]),
              Jd = GW,
              kd = eW,
              pd = vW;

            function Nd(Nd) {
              var Wd, Pd, Zd = Array.from(dd.apply(this, arguments), xW),
                gd = Zd.length,
                Cd = -1;
              for (const dd of Nd)
                for (Wd = 0, ++Cd; Wd < gd; ++Wd)(Zd[Wd][Cd] = [0, +pd(dd, Zd[Wd].key, Cd, Nd)]).data = dd;
              for (Wd = 0, Pd = (0, RW.e)(Jd(Zd)); Wd < gd; ++Wd) Zd[Pd[Wd]].index = Wd;
              return kd(Zd, Pd), Zd
            }
            return Nd.keys = function(Jd) {
              return arguments.length ? (dd = "function" === typeof Jd ? Jd : (0, IW.d)(Array.from(Jd)), Nd) : dd
            }, Nd.value = function(dd) {
              return arguments.length ? (pd = "function" === typeof dd ? dd : (0, IW.d)(+dd), Nd) : pd
            }, Nd.order = function(dd) {
              return arguments.length ? (Jd = null == dd ? GW : "function" === typeof dd ? dd : (0, IW.d)(Array.from(dd)), Nd) : Jd
            }, Nd.offset = function(dd) {
              return arguments.length ? (kd = null == dd ? eW : dd, Nd) : kd
            }, Nd
          }().keys(pd).value((function(dd, Jd) {
            return +FP(dd, Jd, 0)
          })).order(GW).offset(Nd);
        return Wd(dd)
      },
      wP = function(dd, Jd, kd, pd, Nd, Wd) {
        if (!dd) return null;
        var Pd = (Wd ? Jd.reverse() : Jd).reduce((function(dd, Jd) {
          var Nd, Wd = null !== (Nd = Jd.type) && void 0 !== Nd && Nd.defaultProps ? aP(aP({}, Jd.type.defaultProps), Jd.props) : Jd.props,
            Pd = Wd.stackId;
          if (Wd.hide) return dd;
          var Zd = Wd[kd],
            gd = dd[Zd] || {
              hasStack: !1,
              stackGroups: {}
            };
          if ((0, GP.z)(Pd)) {
            var Cd = gd.stackGroups[Pd] || {
              numericAxisId: kd,
              cateAxisId: pd,
              items: []
            };
            Cd.items.push(Jd), gd.hasStack = !0, gd.stackGroups[Pd] = Cd
          } else gd.stackGroups[(0, GP.G)("_stackId_")] = {
            numericAxisId: kd,
            cateAxisId: pd,
            items: [Jd]
          };
          return aP(aP({}, dd), {}, MP({}, Zd, gd))
        }), {});
        return Object.keys(Pd).reduce((function(Jd, Wd) {
          var Zd = Pd[Wd];
          if (Zd.hasStack) {
            Zd.stackGroups = Object.keys(Zd.stackGroups).reduce((function(Jd, Wd) {
              var Pd = Zd.stackGroups[Wd];
              return aP(aP({}, Jd), {}, MP({}, Wd, {
                numericAxisId: kd,
                cateAxisId: pd,
                items: Pd.items,
                stackedData: HP(dd, Pd.items, Nd)
              }))
            }), {})
          }
          return aP(aP({}, Jd), {}, MP({}, Wd, Zd))
        }), {})
      },
      AP = function(dd, Jd) {
        var kd = Jd.realScaleType,
          pd = Jd.type,
          Nd = Jd.tickCount,
          Wd = Jd.originalDomain,
          Pd = Jd.allowDecimals,
          Zd = kd || Jd.scale;
        if ("auto" !== Zd && "linear" !== Zd) return null;
        if (Nd && "number" === pd && Wd && ("auto" === Wd[0] || "auto" === Wd[1])) {
          var gd = dd.domain();
          if (!gd.length) return null;
          var Cd = eP(gd, Nd, Pd);
          return dd.domain([iW()(Cd), BW()(Cd)]), {
            niceTicks: Cd
          }
        }
        if (Nd && "number" === pd) {
          var Kd = dd.domain();
          return {
            niceTicks: RP(Kd, Nd, Pd)
          }
        }
        return null
      };

    function dZ(dd) {
      var Jd = dd.axis,
        kd = dd.ticks,
        pd = dd.bandSize,
        Nd = dd.entry,
        Wd = dd.index,
        Pd = dd.dataKey;
      if ("category" === Jd.type) {
        if (!Jd.allowDuplicatedCategory && Jd.dataKey && !MW()(Nd[Jd.dataKey])) {
          var Zd = (0, GP.h)(kd, "value", Nd[Jd.dataKey]);
          if (Zd) return Zd.coordinate + pd / 2
        }
        return kd[Wd] ? kd[Wd].coordinate + pd / 2 : null
      }
      var gd = FP(Nd, MW()(Pd) ? Jd.dataKey : Pd);
      return MW()(gd) ? null : Jd.scale(gd)
    }
    var JZ = function(dd) {
        var Jd = dd.axis,
          kd = dd.ticks,
          pd = dd.offset,
          Nd = dd.bandSize,
          Wd = dd.entry,
          Pd = dd.index;
        if ("category" === Jd.type) return kd[Pd] ? kd[Pd].coordinate + pd : null;
        var Zd = FP(Wd, Jd.dataKey, Jd.domain[Pd]);
        return MW()(Zd) ? null : Jd.scale(Zd) - Nd / 2 + pd
      },
      kZ = function(dd) {
        var Jd = dd.numericAxis,
          kd = Jd.scale.domain();
        if ("number" === Jd.type) {
          var pd = Math.min(kd[0], kd[1]),
            Nd = Math.max(kd[0], kd[1]);
          return pd <= 0 && Nd >= 0 ? 0 : Nd < 0 ? Nd : pd
        }
        return kd[0]
      },
      pZ = function(dd, Jd) {
        var kd, pd = (null !== (kd = dd.type) && void 0 !== kd && kd.defaultProps ? aP(aP({}, dd.type.defaultProps), dd.props) : dd.props).stackId;
        if ((0, GP.z)(pd)) {
          var Nd = Jd[pd];
          if (Nd) {
            var Wd = Nd.items.indexOf(dd);
            return Wd >= 0 ? Nd.stackedData[Wd] : null
          }
        }
        return null
      },
      NZ = function(dd, Jd, kd) {
        return Object.keys(dd).reduce((function(pd, Nd) {
          var Wd = dd[Nd].stackedData.reduce((function(dd, pd) {
            var Nd = pd.slice(Jd, kd + 1).reduce((function(dd, Jd) {
              return [iW()(Jd.concat([dd[0]]).filter(GP.B)), BW()(Jd.concat([dd[1]]).filter(GP.B))]
            }), [1 / 0, -1 / 0]);
            return [Math.min(dd[0], Nd[0]), Math.max(dd[1], Nd[1])]
          }), [1 / 0, -1 / 0]);
          return [Math.min(Wd[0], pd[0]), Math.max(Wd[1], pd[1])]
        }), [1 / 0, -1 / 0]).map((function(dd) {
          return dd === 1 / 0 || dd === -1 / 0 ? 0 : dd
        }))
      },
      WZ = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
      PZ = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
      ZZ = function(dd, Jd, kd) {
        if (YW()(dd)) return dd(Jd, kd);
        if (!Array.isArray(dd)) return Jd;
        var pd = [];
        if ((0, GP.B)(dd[0])) pd[0] = kd ? dd[0] : Math.min(dd[0], Jd[0]);
        else if (WZ.test(dd[0])) {
          var Nd = +WZ.exec(dd[0])[1];
          pd[0] = Jd[0] - Nd
        } else YW()(dd[0]) ? pd[0] = dd[0](Jd[0]) : pd[0] = Jd[0];
        if ((0, GP.B)(dd[1])) pd[1] = kd ? dd[1] : Math.max(dd[1], Jd[1]);
        else if (PZ.test(dd[1])) {
          var Wd = +PZ.exec(dd[1])[1];
          pd[1] = Jd[1] + Wd
        } else YW()(dd[1]) ? pd[1] = dd[1](Jd[1]) : pd[1] = Jd[1];
        return pd
      },
      gZ = function(dd, Jd, kd) {
        if (dd && dd.scale && dd.scale.bandwidth) {
          var pd = dd.scale.bandwidth();
          if (!kd || pd > 0) return pd
        }
        if (dd && Jd && Jd.length >= 2) {
          for (var Nd = hW()(Jd, (function(dd) {
              return dd.coordinate
            })), Wd = 1 / 0, Pd = 1, Zd = Nd.length; Pd < Zd; Pd++) {
            var gd = Nd[Pd],
              Cd = Nd[Pd - 1];
            Wd = Math.min((gd.coordinate || 0) - (Cd.coordinate || 0), Wd)
          }
          return Wd === 1 / 0 ? 0 : Wd
        }
        return kd ? void 0 : 0
      },
      CZ = function(dd, Jd, kd) {
        return dd && dd.length ? EW()(dd, jW()(kd, "type.defaultProps.domain")) ? Jd : dd : Jd
      },
      KZ = function(dd, Jd) {
        var kd = dd.type.defaultProps ? aP(aP({}, dd.type.defaultProps), dd.props) : dd.props,
          pd = kd.dataKey,
          Nd = kd.name,
          Wd = kd.unit,
          Pd = kd.formatter,
          Zd = kd.tooltipType,
          gd = kd.chartType,
          Cd = kd.hide;
        return aP(aP({}, (0, vP.e)(dd, !1)), {}, {
          dataKey: pd,
          unit: Wd,
          formatter: Pd,
          name: Nd || pd,
          color: bP(dd),
          value: FP(Jd, pd),
          type: Zd,
          payload: Jd,
          chartType: gd,
          hide: Cd
        })
      }
  },
  6010: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => ld,
      h: () => od
    });
    var pd = kd(5854);

    function Nd(dd) {
      return Nd = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(dd) {
        return typeof dd
      } : function(dd) {
        return dd && "function" == typeof Symbol && dd.constructor === Symbol && dd !== Symbol.prototype ? "symbol" : typeof dd
      }, Nd(dd)
    }

    function Wd(dd, Jd) {
      var kd = Object.keys(dd);
      if (Object.getOwnPropertySymbols) {
        var pd = Object.getOwnPropertySymbols(dd);
        Jd && (pd = pd.filter((function(Jd) {
          return Object.getOwnPropertyDescriptor(dd, Jd).enumerable
        }))), kd.push.apply(kd, pd)
      }
      return kd
    }

    function Pd(dd) {
      for (var Jd = 1; Jd < arguments.length; Jd++) {
        var kd = null != arguments[Jd] ? arguments[Jd] : {};
        Jd % 2 ? Wd(Object(kd), !0).forEach((function(Jd) {
          Zd(dd, Jd, kd[Jd])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(dd, Object.getOwnPropertyDescriptors(kd)) : Wd(Object(kd)).forEach((function(Jd) {
          Object.defineProperty(dd, Jd, Object.getOwnPropertyDescriptor(kd, Jd))
        }))
      }
      return dd
    }

    function Zd(dd, Jd, kd) {
      return (Jd = function(dd) {
        var Jd = function(dd, Jd) {
          if ("object" != Nd(dd) || !dd) return dd;
          var kd = dd[Symbol.toPrimitive];
          if (void 0 !== kd) {
            var pd = kd.call(dd, Jd || "default");
            if ("object" != Nd(pd)) return pd;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === Jd ? String : Number)(dd)
        }(dd, "string");
        return "symbol" == Nd(Jd) ? Jd : Jd + ""
      }(Jd)) in dd ? Object.defineProperty(dd, Jd, {
        value: kd,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : dd[Jd] = kd, dd
    }
    var gd = {
        widthCache: {},
        cacheCount: 0
      },
      Cd = {
        position: "absolute",
        top: "-20000px",
        left: 0,
        padding: 0,
        margin: 0,
        border: "none",
        whiteSpace: "pre"
      },
      Kd = "recharts_measurement_span";
    var od = function(dd) {
        var Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (void 0 === dd || null === dd || pd.b.isSsr) return {
          width: 0,
          height: 0
        };
        var kd = function(dd) {
            var Jd = Pd({}, dd);
            return Object.keys(Jd).forEach((function(dd) {
              Jd[dd] || delete Jd[dd]
            })), Jd
          }(Jd),
          Nd = JSON.stringify({
            text: dd,
            copyStyle: kd
          });
        if (gd.widthCache[Nd]) return gd.widthCache[Nd];
        try {
          var Wd = document.getElementById(Kd);
          Wd || ((Wd = document.createElement("span")).setAttribute("id", Kd), Wd.setAttribute("aria-hidden", "true"), document.body.appendChild(Wd));
          var Zd = Pd(Pd({}, Cd), kd);
          Object.assign(Wd.style, Zd), Wd.textContent = "".concat(dd);
          var od = Wd.getBoundingClientRect(),
            ld = {
              width: od.width,
              height: od.height
            };
          return gd.widthCache[Nd] = ld, ++gd.cacheCount > 2e3 && (gd.cacheCount = 0, gd.widthCache = {}), ld
        } catch (Qd) {
          return {
            width: 0,
            height: 0
          }
        }
      },
      ld = function(dd) {
        return {
          top: dd.top + window.scrollY - document.documentElement.clientTop,
          left: dd.left + window.scrollX - document.documentElement.clientLeft
        }
      }
  },
  5029: (dd, Jd, kd) => {
    kd.d(Jd, {
      B: () => Od,
      C: () => Ld,
      D: () => Qd,
      G: () => Gd,
      e: () => Md,
      h: () => sd,
      i: () => xd,
      k: () => ad,
      m: () => vd,
      q: () => qd,
      s: () => Bd,
      v: () => ed,
      z: () => Rd
    });
    var pd = kd(5035),
      Nd = kd.n(pd),
      Wd = kd(5048),
      Pd = kd.n(Wd),
      Zd = kd(5064),
      gd = kd.n(Zd),
      Cd = kd(5057),
      Kd = kd.n(Cd),
      od = kd(5289),
      ld = kd.n(od),
      Qd = function(dd) {
        return 0 === dd ? 0 : dd > 0 ? 1 : -1
      },
      Ld = function(dd) {
        return Nd()(dd) && dd.indexOf("%") === dd.length - 1
      },
      Od = function(dd) {
        return Kd()(dd) && !Pd()(dd)
      },
      ed = function(dd) {
        return ld()(dd)
      },
      Rd = function(dd) {
        return Od(dd) || Nd()(dd)
      },
      Id = 0,
      Gd = function(dd) {
        var Jd = ++Id;
        return "".concat(dd || "").concat(Jd)
      },
      vd = function(dd, Jd) {
        var kd, pd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Wd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!Od(dd) && !Nd()(dd)) return pd;
        if (Ld(dd)) {
          var Zd = dd.indexOf("%");
          kd = Jd * parseFloat(dd.slice(0, Zd)) / 100
        } else kd = +dd;
        return Pd()(kd) && (kd = pd), Wd && kd > Jd && (kd = Jd), kd
      },
      xd = function(dd) {
        if (!dd) return null;
        var Jd = Object.keys(dd);
        return Jd && Jd.length ? dd[Jd[0]] : null
      },
      qd = function(dd) {
        if (!Array.isArray(dd)) return !1;
        for (var Jd = dd.length, kd = {}, pd = 0; pd < Jd; pd++) {
          if (kd[dd[pd]]) return !0;
          kd[dd[pd]] = !0
        }
        return !1
      },
      Bd = function(dd, Jd) {
        return Od(dd) && Od(Jd) ? function(kd) {
          return dd + kd * (Jd - dd)
        } : function() {
          return Jd
        }
      };

    function sd(dd, Jd, kd) {
      return dd && dd.length ? dd.find((function(dd) {
        return dd && ("function" === typeof Jd ? Jd(dd) : gd()(dd, Jd)) === kd
      })) : null
    }
    var ad = function(dd) {
        if (!dd || !dd.length) return null;
        for (var Jd = dd.length, kd = 0, pd = 0, Nd = 0, Wd = 0, Pd = 1 / 0, Zd = -1 / 0, gd = 0, Cd = 0, Kd = 0; Kd < Jd; Kd++) kd += gd = dd[Kd].cx || 0, pd += Cd = dd[Kd].cy || 0, Nd += gd * Cd, Wd += gd * gd, Pd = Math.min(Pd, gd), Zd = Math.max(Zd, gd);
        var od = Jd * Wd !== kd * kd ? (Jd * Nd - kd * pd) / (Jd * Wd - kd * kd) : 0;
        return {
          xmin: Pd,
          xmax: Zd,
          a: od,
          b: (pd - od * kd) / Jd
        }
      },
      Md = function(dd, Jd) {
        return Od(dd) && Od(Jd) ? dd - Jd : Nd()(dd) && Nd()(Jd) ? dd.localeCompare(Jd) : dd instanceof Date && Jd instanceof Date ? dd.getTime() - Jd.getTime() : String(dd).localeCompare(String(Jd))
      }
  },
  5854: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => pd
    });
    var pd = {
      isSsr: !("undefined" !== typeof window && window.document && window.document.createElement && window.setTimeout),
      get: function(dd) {
        return pd[dd]
      },
      set: function(dd, Jd) {
        if ("string" === typeof dd) pd[dd] = Jd;
        else {
          var kd = Object.keys(dd);
          kd && kd.length && kd.forEach((function(Jd) {
            pd[Jd] = dd[Jd]
          }))
        }
      }
    }
  },
  6113: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => pd
    });
    var pd = function(dd, Jd) {
      var kd = dd.alwaysShow,
        pd = dd.ifOverflow;
      return kd && (pd = "extendDomain"), pd === Jd
    }
  },
  5295: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => pd
    });
    var pd = function(dd, Jd) {
      for (var kd = arguments.length, pd = new Array(kd > 2 ? kd - 2 : 0), Nd = 2; Nd < kd; Nd++) pd[Nd - 2] = arguments[Nd]
    }
  },
  6110: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Zd,
      f: () => ld,
      j: () => Cd
    });
    kd(5289), kd(56), kd(5131);

    function pd(dd) {
      return pd = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(dd) {
        return typeof dd
      } : function(dd) {
        return dd && "function" == typeof Symbol && dd.constructor === Symbol && dd !== Symbol.prototype ? "symbol" : typeof dd
      }, pd(dd)
    }

    function Nd(dd, Jd) {
      var kd = Object.keys(dd);
      if (Object.getOwnPropertySymbols) {
        var pd = Object.getOwnPropertySymbols(dd);
        Jd && (pd = pd.filter((function(Jd) {
          return Object.getOwnPropertyDescriptor(dd, Jd).enumerable
        }))), kd.push.apply(kd, pd)
      }
      return kd
    }

    function Wd(dd) {
      for (var Jd = 1; Jd < arguments.length; Jd++) {
        var kd = null != arguments[Jd] ? arguments[Jd] : {};
        Jd % 2 ? Nd(Object(kd), !0).forEach((function(Jd) {
          Pd(dd, Jd, kd[Jd])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(dd, Object.getOwnPropertyDescriptors(kd)) : Nd(Object(kd)).forEach((function(Jd) {
          Object.defineProperty(dd, Jd, Object.getOwnPropertyDescriptor(kd, Jd))
        }))
      }
      return dd
    }

    function Pd(dd, Jd, kd) {
      return (Jd = function(dd) {
        var Jd = function(dd, Jd) {
          if ("object" != pd(dd) || !dd) return dd;
          var kd = dd[Symbol.toPrimitive];
          if (void 0 !== kd) {
            var Nd = kd.call(dd, Jd || "default");
            if ("object" != pd(Nd)) return Nd;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === Jd ? String : Number)(dd)
        }(dd, "string");
        return "symbol" == pd(Jd) ? Jd : Jd + ""
      }(Jd)) in dd ? Object.defineProperty(dd, Jd, {
        value: kd,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : dd[Jd] = kd, dd
    }
    var Zd = Math.PI / 180,
      gd = function(dd) {
        return 180 * dd / Math.PI
      },
      Cd = function(dd, Jd, kd, pd) {
        return {
          x: dd + Math.cos(-Zd * pd) * kd,
          y: Jd + Math.sin(-Zd * pd) * kd
        }
      },
      Kd = function(dd, Jd) {
        var kd = dd.x,
          pd = dd.y,
          Nd = Jd.cx,
          Wd = Jd.cy,
          Pd = function(dd, Jd) {
            var kd = dd.x,
              pd = dd.y,
              Nd = Jd.x,
              Wd = Jd.y;
            return Math.sqrt(Math.pow(kd - Nd, 2) + Math.pow(pd - Wd, 2))
          }({
            x: kd,
            y: pd
          }, {
            x: Nd,
            y: Wd
          });
        if (Pd <= 0) return {
          radius: Pd
        };
        var Zd = (kd - Nd) / Pd,
          Cd = Math.acos(Zd);
        return pd > Wd && (Cd = 2 * Math.PI - Cd), {
          radius: Pd,
          angle: gd(Cd),
          angleInRadian: Cd
        }
      },
      od = function(dd, Jd) {
        var kd = Jd.startAngle,
          pd = Jd.endAngle,
          Nd = Math.floor(kd / 360),
          Wd = Math.floor(pd / 360);
        return dd + 360 * Math.min(Nd, Wd)
      },
      ld = function(dd, Jd) {
        var kd = dd.x,
          pd = dd.y,
          Nd = Kd({
            x: kd,
            y: pd
          }, Jd),
          Pd = Nd.radius,
          Zd = Nd.angle,
          gd = Jd.innerRadius,
          Cd = Jd.outerRadius;
        if (Pd < gd || Pd > Cd) return !1;
        if (0 === Pd) return !0;
        var ld, Qd = function(dd) {
            var Jd = dd.startAngle,
              kd = dd.endAngle,
              pd = Math.floor(Jd / 360),
              Nd = Math.floor(kd / 360),
              Wd = Math.min(pd, Nd);
            return {
              startAngle: Jd - 360 * Wd,
              endAngle: kd - 360 * Wd
            }
          }(Jd),
          Ld = Qd.startAngle,
          Od = Qd.endAngle,
          ed = Zd;
        if (Ld <= Od) {
          for (; ed > Od;) ed -= 360;
          for (; ed < Ld;) ed += 360;
          ld = ed >= Ld && ed <= Od
        } else {
          for (; ed > Ld;) ed -= 360;
          for (; ed < Od;) ed += 360;
          ld = ed >= Od && ed <= Ld
        }
        return ld ? Wd(Wd({}, Jd), {}, {
          radius: Pd,
          angle: od(ed, Jd)
        }) : null
      }
  },
  5297: (dd, Jd, kd) => {
    kd.d(Jd, {
      A: () => md,
      e: () => Xd,
      i: () => Fd,
      m: () => Yd,
      q: () => Bd,
      r: () => yd,
      s: () => jd,
      t: () => fd,
      w: () => Dd,
      z: () => Ud
    });
    var pd = kd(5064),
      Nd = kd.n(pd),
      Wd = kd(5289),
      Pd = kd.n(Wd),
      Zd = kd(5035),
      gd = kd.n(Zd),
      Cd = kd(5131),
      Kd = kd.n(Cd),
      od = kd(4952),
      ld = kd.n(od),
      Qd = kd(56),
      Ld = kd(5305),
      Od = kd(5029),
      ed = kd(5312),
      Rd = kd(5317),
      Id = ["children"],
      Gd = ["children"];

    function vd(dd, Jd) {
      if (null == dd) return {};
      var kd, pd, Nd = function(dd, Jd) {
        if (null == dd) return {};
        var kd = {};
        for (var pd in dd)
          if (Object.prototype.hasOwnProperty.call(dd, pd)) {
            if (Jd.indexOf(pd) >= 0) continue;
            kd[pd] = dd[pd]
          } return kd
      }(dd, Jd);
      if (Object.getOwnPropertySymbols) {
        var Wd = Object.getOwnPropertySymbols(dd);
        for (pd = 0; pd < Wd.length; pd++) kd = Wd[pd], Jd.indexOf(kd) >= 0 || Object.prototype.propertyIsEnumerable.call(dd, kd) && (Nd[kd] = dd[kd])
      }
      return Nd
    }

    function xd(dd) {
      return xd = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(dd) {
        return typeof dd
      } : function(dd) {
        return dd && "function" == typeof Symbol && dd.constructor === Symbol && dd !== Symbol.prototype ? "symbol" : typeof dd
      }, xd(dd)
    }
    var qd = {
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
      Bd = function(dd) {
        return "string" === typeof dd ? dd : dd ? dd.displayName || dd.name || "Component" : ""
      },
      sd = null,
      ad = null,
      Md = function dd(Jd) {
        if (Jd === sd && Array.isArray(ad)) return ad;
        var kd = [];
        return Qd.Children.forEach(Jd, (function(Jd) {
          Pd()(Jd) || ((0, Ld.isFragment)(Jd) ? kd = kd.concat(dd(Jd.props.children)) : kd.push(Jd))
        })), ad = kd, sd = Jd, kd
      };

    function Fd(dd, Jd) {
      var kd = [],
        pd = [];
      return pd = Array.isArray(Jd) ? Jd.map((function(dd) {
        return Bd(dd)
      })) : [Bd(Jd)], Md(dd).forEach((function(dd) {
        var Jd = Nd()(dd, "type.displayName") || Nd()(dd, "type.name"); - 1 !== pd.indexOf(Jd) && kd.push(dd)
      })), kd
    }

    function Yd(dd, Jd) {
      var kd = Fd(dd, Jd);
      return kd && kd[0]
    }
    var md = function(dd) {
        if (!dd || !dd.props) return !1;
        var Jd = dd.props,
          kd = Jd.width,
          pd = Jd.height;
        return !(!(0, Od.B)(kd) || kd <= 0 || !(0, Od.B)(pd) || pd <= 0)
      },
      bd = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"],
      Sd = function(dd) {
        return dd && dd.type && gd()(dd.type) && bd.indexOf(dd.type) >= 0
      },
      jd = function(dd) {
        return dd && "object" === xd(dd) && "clipDot" in dd
      },
      Xd = function(dd, Jd, kd) {
        if (!dd || "function" === typeof dd || "boolean" === typeof dd) return null;
        var pd = dd;
        if ((0, Qd.isValidElement)(dd) && (pd = dd.props), !ld()(pd)) return null;
        var Nd = {};
        return Object.keys(pd).forEach((function(dd) {
          var Wd;
          (function(dd, Jd, kd, pd) {
            var Nd, Wd = null !== (Nd = null === Rd.g || void 0 === Rd.g ? void 0 : Rd.g[pd]) && void 0 !== Nd ? Nd : [];
            return Jd.startsWith("data-") || !Kd()(dd) && (pd && Wd.includes(Jd) || Rd.h.includes(Jd)) || kd && Rd.d.includes(Jd)
          })(null === (Wd = pd) || void 0 === Wd ? void 0 : Wd[dd], dd, Jd, kd) && (Nd[dd] = pd[dd])
        })), Nd
      },
      fd = function dd(Jd, kd) {
        if (Jd === kd) return !0;
        var pd = Qd.Children.count(Jd);
        if (pd !== Qd.Children.count(kd)) return !1;
        if (0 === pd) return !0;
        if (1 === pd) return nd(Array.isArray(Jd) ? Jd[0] : Jd, Array.isArray(kd) ? kd[0] : kd);
        for (var Nd = 0; Nd < pd; Nd++) {
          var Wd = Jd[Nd],
            Pd = kd[Nd];
          if (Array.isArray(Wd) || Array.isArray(Pd)) {
            if (!dd(Wd, Pd)) return !1
          } else if (!nd(Wd, Pd)) return !1
        }
        return !0
      },
      nd = function(dd, Jd) {
        if (Pd()(dd) && Pd()(Jd)) return !0;
        if (!Pd()(dd) && !Pd()(Jd)) {
          var kd = dd.props || {},
            pd = kd.children,
            Nd = vd(kd, Id),
            Wd = Jd.props || {},
            Zd = Wd.children,
            gd = vd(Wd, Gd);
          return pd && Zd ? (0, ed.d)(Nd, gd) && fd(pd, Zd) : !pd && !Zd && (0, ed.d)(Nd, gd)
        }
        return !1
      },
      Ud = function(dd, Jd) {
        var kd = [],
          pd = {};
        return Md(dd).forEach((function(dd, Nd) {
          if (Sd(dd)) kd.push(dd);
          else if (dd) {
            var Wd = Bd(dd.type),
              Pd = Jd[Wd] || {},
              Zd = Pd.handler,
              gd = Pd.once;
            if (Zd && (!gd || !pd[Wd])) {
              var Cd = Zd(dd, Wd, Nd);
              kd.push(Cd), pd[Wd] = !0
            }
          }
        })), kd
      },
      yd = function(dd) {
        var Jd = dd && dd.type;
        return Jd && qd[Jd] ? qd[Jd] : null
      },
      Dd = function(dd, Jd) {
        return Md(Jd).indexOf(dd)
      }
  },
  5312: (dd, Jd, kd) => {
    function pd(dd, Jd) {
      for (var kd in dd)
        if ({}.hasOwnProperty.call(dd, kd) && (!{}.hasOwnProperty.call(Jd, kd) || dd[kd] !== Jd[kd])) return !1;
      for (var pd in Jd)
        if ({}.hasOwnProperty.call(Jd, pd) && !{}.hasOwnProperty.call(dd, pd)) return !1;
      return !0
    }
    kd.d(Jd, {
      d: () => pd
    })
  },
  6097: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Kd
    });
    var pd = kd(5911),
      Nd = kd(6019),
      Wd = kd(5297);

    function Pd(dd) {
      return Pd = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(dd) {
        return typeof dd
      } : function(dd) {
        return dd && "function" == typeof Symbol && dd.constructor === Symbol && dd !== Symbol.prototype ? "symbol" : typeof dd
      }, Pd(dd)
    }

    function Zd(dd, Jd) {
      var kd = Object.keys(dd);
      if (Object.getOwnPropertySymbols) {
        var pd = Object.getOwnPropertySymbols(dd);
        Jd && (pd = pd.filter((function(Jd) {
          return Object.getOwnPropertyDescriptor(dd, Jd).enumerable
        }))), kd.push.apply(kd, pd)
      }
      return kd
    }

    function gd(dd) {
      for (var Jd = 1; Jd < arguments.length; Jd++) {
        var kd = null != arguments[Jd] ? arguments[Jd] : {};
        Jd % 2 ? Zd(Object(kd), !0).forEach((function(Jd) {
          Cd(dd, Jd, kd[Jd])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(dd, Object.getOwnPropertyDescriptors(kd)) : Zd(Object(kd)).forEach((function(Jd) {
          Object.defineProperty(dd, Jd, Object.getOwnPropertyDescriptor(kd, Jd))
        }))
      }
      return dd
    }

    function Cd(dd, Jd, kd) {
      return (Jd = function(dd) {
        var Jd = function(dd, Jd) {
          if ("object" != Pd(dd) || !dd) return dd;
          var kd = dd[Symbol.toPrimitive];
          if (void 0 !== kd) {
            var pd = kd.call(dd, Jd || "default");
            if ("object" != Pd(pd)) return pd;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === Jd ? String : Number)(dd)
        }(dd, "string");
        return "symbol" == Pd(Jd) ? Jd : Jd + ""
      }(Jd)) in dd ? Object.defineProperty(dd, Jd, {
        value: kd,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : dd[Jd] = kd, dd
    }
    var Kd = function(dd) {
      var Jd = dd.children,
        kd = dd.formattedGraphicalItems,
        Pd = dd.legendWidth,
        Zd = dd.legendContent,
        Cd = (0, Wd.m)(Jd, pd.d);
      if (!Cd) return null;
      var Kd, od = pd.d.defaultProps,
        ld = void 0 !== od ? gd(gd({}, od), Cd.props) : {};
      return Kd = Cd.props && Cd.props.payload ? Cd.props && Cd.props.payload : "children" === Zd ? (kd || []).reduce((function(dd, Jd) {
        var kd = Jd.item,
          pd = Jd.props,
          Nd = pd.sectors || pd.data || [];
        return dd.concat(Nd.map((function(dd) {
          return {
            type: Cd.props.iconType || kd.props.legendType,
            value: dd.name,
            color: dd.fill,
            payload: dd
          }
        })))
      }), []) : (kd || []).map((function(dd) {
        var Jd = dd.item,
          kd = Jd.type.defaultProps,
          pd = void 0 !== kd ? gd(gd({}, kd), Jd.props) : {},
          Wd = pd.dataKey,
          Pd = pd.name,
          Zd = pd.legendType;
        return {
          inactive: pd.hide,
          dataKey: Wd,
          type: ld.iconType || Zd || "square",
          color: (0, Nd.J)(Jd),
          value: Pd || Wd,
          payload: pd
        }
      })), gd(gd(gd({}, ld), pd.d.getWithHeight(Cd, Pd)), {}, {
        payload: Kd,
        item: Cd
      })
    }
  },
  5856: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Zd
    });
    var pd = kd(5860),
      Nd = kd.n(pd),
      Wd = kd(5131),
      Pd = kd.n(Wd);

    function Zd(dd, Jd, kd) {
      return !0 === Jd ? Nd()(dd, kd) : Pd()(Jd) ? Nd()(dd, Jd) : dd
    }
  },
  5317: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Kd,
      g: () => Cd,
      h: () => Zd,
      j: () => od,
      n: () => ld
    });
    var pd = kd(56),
      Nd = kd(4952),
      Wd = kd.n(Nd);

    function Pd(dd) {
      return Pd = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(dd) {
        return typeof dd
      } : function(dd) {
        return dd && "function" == typeof Symbol && dd.constructor === Symbol && dd !== Symbol.prototype ? "symbol" : typeof dd
      }, Pd(dd)
    }
    var Zd = ["aria-activedescendant", "aria-atomic", "aria-autocomplete", "aria-busy", "aria-checked", "aria-colcount", "aria-colindex", "aria-colspan", "aria-controls", "aria-current", "aria-describedby", "aria-details", "aria-disabled", "aria-errormessage", "aria-expanded", "aria-flowto", "aria-haspopup", "aria-hidden", "aria-invalid", "aria-keyshortcuts", "aria-label", "aria-labelledby", "aria-level", "aria-live", "aria-modal", "aria-multiline", "aria-multiselectable", "aria-orientation", "aria-owns", "aria-placeholder", "aria-posinset", "aria-pressed", "aria-readonly", "aria-relevant", "aria-required", "aria-roledescription", "aria-rowcount", "aria-rowindex", "aria-rowspan", "aria-selected", "aria-setsize", "aria-sort", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext", "className", "color", "height", "id", "lang", "max", "media", "method", "min", "name", "style", "target", "width", "role", "tabIndex", "accentHeight", "accumulate", "additive", "alignmentBaseline", "allowReorder", "alphabetic", "amplitude", "arabicForm", "ascent", "attributeName", "attributeType", "autoReverse", "azimuth", "baseFrequency", "baselineShift", "baseProfile", "bbox", "ZQ", "bias", "by", "calcMode", "capHeight", "clip", "clipPath", "clipPathUnits", "clipRule", "colorInterpolation", "colorInterpolationFilters", "colorProfile", "colorRendering", "contentScriptType", "contentStyleType", "cursor", "cx", "cy", "d", "decelerate", "descent", "diffuseConstant", "direction", "display", "divisor", "dominantBaseline", "dur", "dx", "dy", "edgeMode", "elevation", "enableBackground", "end", "exponent", "externalResourcesRequired", "fill", "fillOpacity", "fillRule", "filter", "filterRes", "filterUnits", "floodColor", "floodOpacity", "focusable", "fontFamily", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontWeight", "format", "from", "fx", "fy", "g1", "g2", "glyphName", "glyphOrientationHorizontal", "glyphOrientationVertical", "glyphRef", "gradientTransform", "gradientUnits", "hanging", "horizAdvX", "horizOriginX", "href", "ideographic", "imageRendering", "in2", "in", "intercept", "k1", "k2", "k3", "k4", "k", "kernelMatrix", "kernelUnitLength", "kerning", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "letterSpacing", "lightingColor", "limitingConeAngle", "local", "markerEnd", "markerHeight", "markerMid", "markerStart", "markerUnits", "markerWidth", "mask", "maskContentUnits", "maskUnits", "mathematical", "mode", "numOctaves", "offset", "opacity", "operator", "order", "orient", "orientation", "origin", "overflow", "overlinePosition", "overlineThickness", "paintOrder", "panose1", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointerEvents", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "r", "radius", "refX", "refY", "renderingIntent", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "restart", "result", "rotate", "rx", "ry", "seed", "shapeRendering", "slope", "spacing", "specularConstant", "specularExponent", "speed", "spreadMethod", "startOffset", "stdDeviation", "stemh", "stemv", "stitchTiles", "stopColor", "stopOpacity", "strikethroughPosition", "strikethroughThickness", "string", "stroke", "strokeDasharray", "strokeDashoffset", "strokeLinecap", "strokeLinejoin", "strokeMiterlimit", "strokeOpacity", "strokeWidth", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textAnchor", "textDecoration", "textLength", "textRendering", "to", "transform", "u1", "u2", "underlinePosition", "underlineThickness", "unicode", "unicodeBidi", "unicodeRange", "unitsPerEm", "vAlphabetic", "values", "vectorEffect", "version", "vertAdvY", "vertOriginX", "vertOriginY", "vHanging", "vIdeographic", "viewTarget", "visibility", "vMathematical", "widths", "wordSpacing", "writingMode", "x1", "x2", "x", "xChannelSelector", "xHeight", "xlinkActuate", "xlinkArcrole", "xlinkHref", "xlinkRole", "xlinkShow", "xlinkTitle", "xlinkType", "xmlBase", "xmlLang", "xmlns", "xmlnsXlink", "xmlSpace", "y1", "y2", "y", "yChannelSelector", "z", "zoomAndPan", "ref", "key", "angle"],
      gd = ["points", "pathLength"],
      Cd = {
        svg: ["viewBox", "children"],
        polygon: gd,
        polyline: gd
      },
      Kd = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"],
      od = function(dd, Jd) {
        if (!dd || "function" === typeof dd || "boolean" === typeof dd) return null;
        var kd = dd;
        if ((0, pd.isValidElement)(dd) && (kd = dd.props), !Wd()(kd)) return null;
        var Nd = {};
        return Object.keys(kd).forEach((function(dd) {
          Kd.includes(dd) && (Nd[dd] = Jd || function(Jd) {
            return kd[dd](kd, Jd)
          })
        })), Nd
      },
      ld = function(dd, Jd, kd) {
        if (!Wd()(dd) || "object" !== Pd(dd)) return null;
        var pd = null;
        return Object.keys(dd).forEach((function(Nd) {
          var Wd = dd[Nd];
          Kd.includes(Nd) && "function" === typeof Wd && (pd || (pd = {}), pd[Nd] = function(dd, Jd, kd) {
            return function(pd) {
              return dd(Jd, kd, pd), null
            }
          }(Wd, Jd, kd))
        })), pd
      }
  },
  5307: (dd, Jd) => {
    var kd, pd = Symbol.for("react.element"),
      Nd = Symbol.for("react.portal"),
      Wd = Symbol.for("react.fragment"),
      Pd = Symbol.for("react.strict_mode"),
      Zd = Symbol.for("react.profiler"),
      gd = Symbol.for("react.provider"),
      Cd = Symbol.for("react.context"),
      Kd = Symbol.for("react.server_context"),
      od = Symbol.for("react.forward_ref"),
      ld = Symbol.for("react.suspense"),
      Qd = Symbol.for("react.suspense_list"),
      Ld = Symbol.for("react.memo"),
      Od = Symbol.for("react.lazy"),
      ed = Symbol.for("react.offscreen");

    function Rd(dd) {
      if ("object" === typeof dd && null !== dd) {
        var Jd = dd.$$typeof;
        switch (Jd) {
          case pd:
            switch (dd = dd.type) {
              case Wd:
              case Zd:
              case Pd:
              case ld:
              case Qd:
                return dd;
              default:
                switch (dd = dd && dd.$$typeof) {
                  case Kd:
                  case Cd:
                  case od:
                  case Od:
                  case Ld:
                  case gd:
                    return dd;
                  default:
                    return Jd
                }
            }
          case Nd:
            return Jd
        }
      }
    }
    kd = Symbol.for("react.module.reference"), Jd.isFragment = function(dd) {
      return Rd(dd) === Wd
    }
  },
  5305: (dd, Jd, kd) => {
    dd.exports = kd(5307)
  },
  4935: (dd, Jd, kd) => {
    function pd(dd) {
      var Jd, kd, Nd = "";
      if ("string" == typeof dd || "number" == typeof dd) Nd += dd;
      else if ("object" == typeof dd)
        if (Array.isArray(dd)) {
          var Wd = dd.length;
          for (Jd = 0; Jd < Wd; Jd++) dd[Jd] && (kd = pd(dd[Jd])) && (Nd && (Nd += " "), Nd += kd)
        } else
          for (kd in dd) dd[kd] && (Nd && (Nd += " "), Nd += kd);
      return Nd
    }
    kd.d(Jd, {
      b: () => Nd
    });
    const Nd = function() {
      for (var dd, Jd, kd = 0, Nd = "", Wd = arguments.length; kd < Wd; kd++)(dd = arguments[kd]) && (Jd = pd(dd)) && (Nd && (Nd += " "), Nd += Jd);
      return Nd
    }
  },
  6021: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Wd,
      g: () => Zd
    });
    var pd = kd(6029),
      Nd = kd(6036);

    function Wd() {
      var dd, Jd, kd = (0, Nd.c)().unknown(void 0),
        Pd = kd.domain,
        Zd = kd.range,
        gd = 0,
        Cd = 1,
        Kd = !1,
        od = 0,
        ld = 0,
        Qd = .5;

      function Ld() {
        var kd = Pd().length,
          pd = Cd < gd,
          Nd = pd ? Cd : gd,
          Wd = pd ? gd : Cd;
        dd = (Wd - Nd) / Math.max(1, kd - od + 2 * ld), Kd && (dd = Math.floor(dd)), Nd += (Wd - Nd - dd * (kd - od)) * Qd, Jd = dd * (1 - od), Kd && (Nd = Math.round(Nd), Jd = Math.round(Jd));
        var Ld = function(dd, Jd, kd) {
          dd = +dd, Jd = +Jd, kd = (Nd = arguments.length) < 2 ? (Jd = dd, dd = 0, 1) : Nd < 3 ? 1 : +kd;
          for (var pd = -1, Nd = 0 | Math.max(0, Math.ceil((Jd - dd) / kd)), Wd = new Array(Nd); ++pd < Nd;) Wd[pd] = dd + pd * kd;
          return Wd
        }(kd).map((function(Jd) {
          return Nd + dd * Jd
        }));
        return Zd(pd ? Ld.reverse() : Ld)
      }
      return delete kd.unknown, kd.domain = function(dd) {
        return arguments.length ? (Pd(dd), Ld()) : Pd()
      }, kd.range = function(dd) {
        return arguments.length ? ([gd, Cd] = dd, gd = +gd, Cd = +Cd, Ld()) : [gd, Cd]
      }, kd.rangeRound = function(dd) {
        return [gd, Cd] = dd, gd = +gd, Cd = +Cd, Kd = !0, Ld()
      }, kd.bandwidth = function() {
        return Jd
      }, kd.step = function() {
        return dd
      }, kd.round = function(dd) {
        return arguments.length ? (Kd = !!dd, Ld()) : Kd
      }, kd.padding = function(dd) {
        return arguments.length ? (od = Math.min(1, ld = +dd), Ld()) : od
      }, kd.paddingInner = function(dd) {
        return arguments.length ? (od = Math.min(1, dd), Ld()) : od
      }, kd.paddingOuter = function(dd) {
        return arguments.length ? (ld = +dd, Ld()) : ld
      }, kd.align = function(dd) {
        return arguments.length ? (Qd = Math.max(0, Math.min(1, dd)), Ld()) : Qd
      }, kd.copy = function() {
        return Wd(Pd(), [gd, Cd]).round(Kd).paddingInner(od).paddingOuter(ld).align(Qd)
      }, pd.f.apply(Ld(), arguments)
    }

    function Pd(dd) {
      var Jd = dd.copy;
      return dd.padding = dd.paddingOuter, delete dd.paddingInner, delete dd.paddingOuter, dd.copy = function() {
        return Pd(Jd())
      }, dd
    }

    function Zd() {
      return Pd(Wd.apply(null, arguments).paddingInner(1))
    }
  },
  6029: (dd, Jd, kd) => {
    function pd(dd, Jd) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          this.range(dd);
          break;
        default:
          this.range(Jd).domain(dd)
      }
      return this
    }

    function Nd(dd, Jd) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          "function" === typeof dd ? this.interpolator(dd) : this.range(dd);
          break;
        default:
          this.domain(dd), "function" === typeof Jd ? this.interpolator(Jd) : this.range(Jd)
      }
      return this
    }
    kd.d(Jd, {
      c: () => Nd,
      f: () => pd
    })
  },
  6036: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Kd,
      e: () => Cd
    });
    class pd extends Map {
      constructor(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Zd;
        if (super(), Object.defineProperties(this, {
            _intern: {
              value: new Map
            },
            _key: {
              value: Jd
            }
          }), null != dd)
          for (const [kd, pd] of dd) this.set(kd, pd)
      }
      get(dd) {
        return super.get(Nd(this, dd))
      }
      has(dd) {
        return super.has(Nd(this, dd))
      }
      set(dd, Jd) {
        return super.set(Wd(this, dd), Jd)
      }
      delete(dd) {
        return super.delete(Pd(this, dd))
      }
    }
    Set;

    function Nd(dd, Jd) {
      let {
        _intern: kd,
        _key: pd
      } = dd;
      const Nd = pd(Jd);
      return kd.has(Nd) ? kd.get(Nd) : Jd
    }

    function Wd(dd, Jd) {
      let {
        _intern: kd,
        _key: pd
      } = dd;
      const Nd = pd(Jd);
      return kd.has(Nd) ? kd.get(Nd) : (kd.set(Nd, Jd), Jd)
    }

    function Pd(dd, Jd) {
      let {
        _intern: kd,
        _key: pd
      } = dd;
      const Nd = pd(Jd);
      return kd.has(Nd) && (Jd = kd.get(Nd), kd.delete(Nd)), Jd
    }

    function Zd(dd) {
      return null !== dd && "object" === typeof dd ? dd.valueOf() : dd
    }
    var gd = kd(6029);
    const Cd = Symbol("implicit");

    function Kd() {
      var dd = new pd,
        Jd = [],
        kd = [],
        Nd = Cd;

      function Wd(pd) {
        let Wd = dd.get(pd);
        if (void 0 === Wd) {
          if (Nd !== Cd) return Nd;
          dd.set(pd, Wd = Jd.push(pd) - 1)
        }
        return kd[Wd % kd.length]
      }
      return Wd.domain = function(kd) {
        if (!arguments.length) return Jd.slice();
        Jd = [], dd = new pd;
        for (const pd of kd) dd.has(pd) || dd.set(pd, Jd.push(pd) - 1);
        return Wd
      }, Wd.range = function(dd) {
        return arguments.length ? (kd = Array.from(dd), Wd) : kd.slice()
      }, Wd.unknown = function(dd) {
        return arguments.length ? (Nd = dd, Wd) : Nd
      }, Wd.copy = function() {
        return Kd(Jd, kd).unknown(Nd)
      }, gd.f.apply(Wd, arguments), Wd
    }
  },
  6101: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => pd
    });
    Array.prototype.slice;

    function pd(dd) {
      return "object" === typeof dd && "length" in dd ? dd : Array.from(dd)
    }
  },
  5967: (dd, Jd, kd) => {
    function pd(dd) {
      return function() {
        return dd
      }
    }
    kd.d(Jd, {
      d: () => pd
    })
  },
  5972: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Cd
    });
    const pd = Math.PI,
      Nd = 2 * pd,
      Wd = 1e-6,
      Pd = Nd - Wd;

    function Zd(dd) {
      this._ += dd[0];
      for (let Jd = 1, kd = dd.length; Jd < kd; ++Jd) this._ += arguments[Jd] + dd[Jd]
    }
    class gd {
      constructor(dd) {
        this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = null == dd ? Zd : function(dd) {
          let Jd = Math.floor(dd);
          if (!(Jd >= 0)) throw new Error(`invalid digits: ${dd}`);
          if (Jd > 15) return Zd;
          const kd = 10 ** Jd;
          return function(dd) {
            this._ += dd[0];
            for (let Jd = 1, pd = dd.length; Jd < pd; ++Jd) this._ += Math.round(arguments[Jd] * kd) / kd + dd[Jd]
          }
        }(dd)
      }
      moveTo(dd, Jd) {
        this._append`M${this._x0=this._x1=+dd},${this._y0=this._y1=+Jd}`
      }
      closePath() {
        null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`)
      }
      lineTo(dd, Jd) {
        this._append`L${this._x1=+dd},${this._y1=+Jd}`
      }
      quadraticCurveTo(dd, Jd, kd, pd) {
        this._append`Q${+dd},${+Jd},${this._x1=+kd},${this._y1=+pd}`
      }
      bezierCurveTo(dd, Jd, kd, pd, Nd, Wd) {
        this._append`C${+dd},${+Jd},${+kd},${+pd},${this._x1=+Nd},${this._y1=+Wd}`
      }
      arcTo(dd, Jd, kd, Nd, Pd) {
        if (dd = +dd, Jd = +Jd, kd = +kd, Nd = +Nd, (Pd = +Pd) < 0) throw new Error(`negative radius: ${Pd}`);
        let Zd = this._x1,
          gd = this._y1,
          Cd = kd - dd,
          Kd = Nd - Jd,
          od = Zd - dd,
          ld = gd - Jd,
          Qd = od * od + ld * ld;
        if (null === this._x1) this._append`M${this._x1=dd},${this._y1=Jd}`;
        else if (Qd > Wd)
          if (Math.abs(ld * Cd - Kd * od) > Wd && Pd) {
            let Ld = kd - Zd,
              Od = Nd - gd,
              ed = Cd * Cd + Kd * Kd,
              Rd = Ld * Ld + Od * Od,
              Id = Math.sqrt(ed),
              Gd = Math.sqrt(Qd),
              vd = Pd * Math.tan((pd - Math.acos((ed + Qd - Rd) / (2 * Id * Gd))) / 2),
              xd = vd / Gd,
              qd = vd / Id;
            Math.abs(xd - 1) > Wd && this._append`L${dd+xd*od},${Jd+xd*ld}`, this._append`A${Pd},${Pd},0,0,${+(ld*Ld>od*Od)},${this._x1=dd+qd*Cd},${this._y1=Jd+qd*Kd}`
          } else this._append`L${this._x1=dd},${this._y1=Jd}`;
        else;
      }
      arc(dd, Jd, kd, Zd, gd, Cd) {
        if (dd = +dd, Jd = +Jd, Cd = !!Cd, (kd = +kd) < 0) throw new Error(`negative radius: ${kd}`);
        let Kd = kd * Math.cos(Zd),
          od = kd * Math.sin(Zd),
          ld = dd + Kd,
          Qd = Jd + od,
          Ld = 1 ^ Cd,
          Od = Cd ? Zd - gd : gd - Zd;
        null === this._x1 ? this._append`M${ld},${Qd}` : (Math.abs(this._x1 - ld) > Wd || Math.abs(this._y1 - Qd) > Wd) && this._append`L${ld},${Qd}`, kd && (Od < 0 && (Od = Od % Nd + Nd), Od > Pd ? this._append`A${kd},${kd},0,1,${Ld},${dd-Kd},${Jd-od}A${kd},${kd},0,1,${Ld},${this._x1=ld},${this._y1=Qd}` : Od > Wd && this._append`A${kd},${kd},0,${+(Od>=pd)},${Ld},${this._x1=dd+kd*Math.cos(gd)},${this._y1=Jd+kd*Math.sin(gd)}`)
      }
      rect(dd, Jd, kd, pd) {
        this._append`M${this._x0=this._x1=+dd},${this._y0=this._y1=+Jd}h${kd=+kd}v${+pd}h${-kd}Z`
      }
      toString() {
        return this._
      }
    }

    function Cd(dd) {
      let Jd = 3;
      return dd.digits = function(kd) {
        if (!arguments.length) return Jd;
        if (null == kd) Jd = null;
        else {
          const dd = Math.floor(kd);
          if (!(dd >= 0)) throw new RangeError(`invalid digits: ${kd}`);
          Jd = dd
        }
        return dd
      }, () => new gd(Jd)
    }
    gd.prototype
  },
  5836: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Wd
    });
    var pd = !0,
      Nd = "Invariant failed";

    function Wd(dd, Jd) {
      if (!dd) {
        if (pd) throw new Error(Nd);
        var kd = "function" === typeof Jd ? Jd() : Jd,
          Wd = kd ? "".concat(Nd, ": ").concat(kd) : Nd;
        throw new Error(Wd)
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);