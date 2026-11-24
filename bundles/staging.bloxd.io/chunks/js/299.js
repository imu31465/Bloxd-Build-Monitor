export const id = 299;
export const ids = [299];
export const modules = {
  41548: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => di,
      f: () => lp,
      ChangeSet: () => Qp,
      i: () => Xi,
      l: () => ap,
      n: () => Bi,
      o: () => gp,
      r: () => Xp,
      u: () => Si,
      A: () => Fi,
      w: () => gi,
      B: () => Ti,
      C: () => ji,
      E: () => Vp,
      F: () => Up,
      I: () => ki,
      J: () => qp,
      N: () => Cp,
      P: () => Ni,
      Q: () => Oc,
      S: () => Rp,
      T: () => oc,
      W: () => Mp
    });
    let Op = [],
      op = [];

    function Ip(pp) {
      if (pp < 768) return !1;
      for (let ip = 0, cp = Op.length;;) {
        let Ip = ip + cp >> 1;
        if (pp < Op[Ip]) cp = Ip;
        else {
          if (!(pp >= op[Ip])) return !0;
          ip = Ip + 1
        }
        if (ip == cp) return !1
      }
    }

    function Sp(pp) {
      return pp >= 127462 && pp <= 127487
    }(() => {
      let pp = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((pp => pp ? parseInt(pp, 36) : 1));
      for (let ip = 0, cp = 0; ip < pp.length; ip++)(ip % 2 ? op : Op).push(cp += pp[ip])
    })();
    const xp = 8205;

    function Lp(pp, ip) {
      return (!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2] ? Yp : Dp)(pp, ip, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function Yp(pp, ip, cp) {
      if (ip == pp.length) return ip;
      ip && Pp(pp.charCodeAt(ip)) && Wp(pp.charCodeAt(ip - 1)) && ip--;
      let Op = Ap(pp, ip);
      for (ip += yp(Op); ip < pp.length;) {
        let op = Ap(pp, ip);
        if (Op == xp || op == xp || cp && Ip(op)) ip += yp(op), Op = op;
        else {
          if (!Sp(op)) break;
          {
            let cp = 0,
              Op = ip - 2;
            for (; Op >= 0 && Sp(Ap(pp, Op));) cp++, Op -= 2;
            if (cp % 2 == 0) break;
            ip += 2
          }
        }
      }
      return ip
    }

    function Dp(pp, ip, cp) {
      for (; ip > 0;) {
        let Op = Yp(pp, ip - 2, cp);
        if (Op < ip) return Op;
        ip--
      }
      return 0
    }

    function Ap(pp, ip) {
      let cp = pp.charCodeAt(ip);
      if (!Wp(cp) || ip + 1 == pp.length) return cp;
      let Op = pp.charCodeAt(ip + 1);
      return Pp(Op) ? Op - 56320 + (cp - 55296 << 10) + 65536 : cp
    }

    function Pp(pp) {
      return pp >= 56320 && pp < 57344
    }

    function Wp(pp) {
      return pp >= 55296 && pp < 56320
    }

    function yp(pp) {
      return pp < 65536 ? 1 : 2
    }
    class Up {
      lineAt(pp) {
        if (pp < 0 || pp > this.length) throw new RangeError(`Invalid position ${pp} in document of length ${this.length}`);
        return this.lineInner(pp, !1, 1, 0)
      }
      line(pp) {
        if (pp < 1 || pp > this.lines) throw new RangeError(`Invalid line number ${pp} in ${this.lines}-line document`);
        return this.lineInner(pp, !0, 1, 0)
      }
      replace(pp, ip, cp) {
        [pp, ip] = mp(this, pp, ip);
        let Op = [];
        return this.decompose(0, pp, Op, 2), cp.length && cp.decompose(0, cp.length, Op, 3), this.decompose(ip, this.length, Op, 1), vp.from(Op, this.length - (ip - pp) + cp.length)
      }
      append(pp) {
        return this.replace(this.length, this.length, pp)
      }
      slice(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        [pp, ip] = mp(this, pp, ip);
        let cp = [];
        return this.decompose(pp, ip, cp, 0), vp.from(cp, ip - pp)
      }
      eq(pp) {
        if (pp == this) return !0;
        if (pp.length != this.length || pp.lines != this.lines) return !1;
        let ip = this.scanIdentical(pp, 1),
          cp = this.length - this.scanIdentical(pp, -1),
          Op = new dp(this),
          op = new dp(pp);
        for (let Ip = ip, Sp = ip;;) {
          if (Op.next(Ip), op.next(Ip), Ip = 0, Op.lineBreak != op.lineBreak || Op.done != op.done || Op.value != op.value) return !1;
          if (Sp += Op.value.length, Op.done || Sp >= cp) return !0
        }
      }
      iter() {
        return new dp(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1)
      }
      iterRange(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        return new ep(this, pp, ip)
      }
      iterLines(pp, ip) {
        let cp;
        if (null == pp) cp = this.iter();
        else {
          null == ip && (ip = this.lines + 1);
          let Op = this.line(pp).from;
          cp = this.iterRange(Op, Math.max(Op, ip == this.lines + 1 ? this.length : ip <= 1 ? 0 : this.line(ip - 1).to))
        }
        return new jp(cp)
      }
      toString() {
        return this.sliceString(0)
      }
      toJSON() {
        let pp = [];
        return this.flatten(pp), pp
      }
      constructor() {}
      static of (pp) {
        if (0 == pp.length) throw new RangeError("A document must have at least one line");
        return 1 != pp.length || pp[0] ? pp.length <= 32 ? new wp(pp) : vp.from(wp.split(pp, [])) : Up.empty
      }
    }
    class wp extends Up {
      constructor(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(pp) {
          let ip = -1;
          for (let cp of pp) ip += cp.length + 1;
          return ip
        }(pp);
        super(), this.text = pp, this.length = ip
      }
      get lines() {
        return this.text.length
      }
      get children() {
        return null
      }
      lineInner(pp, ip, cp, Op) {
        for (let op = 0;; op++) {
          let Ip = this.text[op],
            Sp = Op + Ip.length;
          if ((ip ? cp : Sp) >= pp) return new kp(Op, Sp, cp, Ip);
          Op = Sp + 1, cp++
        }
      }
      decompose(pp, ip, cp, Op) {
        let op = pp <= 0 && ip >= this.length ? this : new wp(Hp(this.text, pp, ip), Math.min(ip, this.length) - Math.max(0, pp));
        if (1 & Op) {
          let pp = cp.pop(),
            ip = tp(op.text, pp.text.slice(), 0, op.length);
          if (ip.length <= 32) cp.push(new wp(ip, pp.length + op.length));
          else {
            let pp = ip.length >> 1;
            cp.push(new wp(ip.slice(0, pp)), new wp(ip.slice(pp)))
          }
        } else cp.push(op)
      }
      replace(pp, ip, cp) {
        if (!(cp instanceof wp)) return super.replace(pp, ip, cp);
        [pp, ip] = mp(this, pp, ip);
        let Op = tp(this.text, tp(cp.text, Hp(this.text, 0, pp)), ip),
          op = this.length + cp.length - (ip - pp);
        return Op.length <= 32 ? new wp(Op, op) : vp.from(wp.split(Op, []), op)
      }
      sliceString(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [pp, ip] = mp(this, pp, ip);
        let Op = "";
        for (let op = 0, Ip = 0; op <= ip && Ip < this.text.length; Ip++) {
          let Sp = this.text[Ip],
            xp = op + Sp.length;
          op > pp && Ip && (Op += cp), pp < xp && ip > op && (Op += Sp.slice(Math.max(0, pp - op), ip - op)), op = xp + 1
        }
        return Op
      }
      flatten(pp) {
        for (let ip of this.text) pp.push(ip)
      }
      scanIdentical() {
        return 0
      }
      static split(pp, ip) {
        let cp = [],
          Op = -1;
        for (let op of pp) cp.push(op), Op += op.length + 1, 32 == cp.length && (ip.push(new wp(cp, Op)), cp = [], Op = -1);
        return Op > -1 && ip.push(new wp(cp, Op)), ip
      }
    }
    class vp extends Up {
      constructor(pp, ip) {
        super(), this.children = pp, this.length = ip, this.lines = 0;
        for (let cp of pp) this.lines += cp.lines
      }
      lineInner(pp, ip, cp, Op) {
        for (let op = 0;; op++) {
          let Ip = this.children[op],
            Sp = Op + Ip.length,
            xp = cp + Ip.lines - 1;
          if ((ip ? xp : Sp) >= pp) return Ip.lineInner(pp, ip, cp, Op);
          Op = Sp + 1, cp = xp + 1
        }
      }
      decompose(pp, ip, cp, Op) {
        for (let op = 0, Ip = 0; Ip <= ip && op < this.children.length; op++) {
          let Sp = this.children[op],
            xp = Ip + Sp.length;
          if (pp <= xp && ip >= Ip) {
            let op = Op & ((Ip <= pp ? 1 : 0) | (xp >= ip ? 2 : 0));
            Ip >= pp && xp <= ip && !op ? cp.push(Sp) : Sp.decompose(pp - Ip, ip - Ip, cp, op)
          }
          Ip = xp + 1
        }
      }
      replace(pp, ip, cp) {
        if ([pp, ip] = mp(this, pp, ip), cp.lines < this.lines)
          for (let Op = 0, op = 0; Op < this.children.length; Op++) {
            let Ip = this.children[Op],
              Sp = op + Ip.length;
            if (pp >= op && ip <= Sp) {
              let xp = Ip.replace(pp - op, ip - op, cp),
                Lp = this.lines - Ip.lines + xp.lines;
              if (xp.lines < Lp >> 4 && xp.lines > Lp >> 6) {
                let op = this.children.slice();
                return op[Op] = xp, new vp(op, this.length - (ip - pp) + cp.length)
              }
              return super.replace(op, Sp, xp)
            }
            op = Sp + 1
          }
        return super.replace(pp, ip, cp)
      }
      sliceString(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [pp, ip] = mp(this, pp, ip);
        let Op = "";
        for (let op = 0, Ip = 0; op < this.children.length && Ip <= ip; op++) {
          let Sp = this.children[op],
            xp = Ip + Sp.length;
          Ip > pp && op && (Op += cp), pp < xp && ip > Ip && (Op += Sp.sliceString(pp - Ip, ip - Ip, cp)), Ip = xp + 1
        }
        return Op
      }
      flatten(pp) {
        for (let ip of this.children) ip.flatten(pp)
      }
      scanIdentical(pp, ip) {
        if (!(pp instanceof vp)) return 0;
        let cp = 0,
          [Op, op, Ip, Sp] = ip > 0 ? [0, 0, this.children.length, pp.children.length] : [this.children.length - 1, pp.children.length - 1, -1, -1];
        for (;; Op += ip, op += ip) {
          if (Op == Ip || op == Sp) return cp;
          let xp = this.children[Op],
            Lp = pp.children[op];
          if (xp != Lp) return cp + xp.scanIdentical(Lp, ip);
          cp += xp.length + 1
        }
      }
      static from(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pp.reduce(((pp, ip) => pp + ip.length + 1), -1),
          cp = 0;
        for (let Pp of pp) cp += Pp.lines;
        if (cp < 32) {
          let cp = [];
          for (let ip of pp) ip.flatten(cp);
          return new wp(cp, ip)
        }
        let Op = Math.max(32, cp >> 5),
          op = Op << 1,
          Ip = Op >> 1,
          Sp = [],
          xp = 0,
          Lp = -1,
          Yp = [];

        function Dp(pp) {
          let ip;
          if (pp.lines > op && pp instanceof vp)
            for (let cp of pp.children) Dp(cp);
          else pp.lines > Ip && (xp > Ip || !xp) ? (Ap(), Sp.push(pp)) : pp instanceof wp && xp && (ip = Yp[Yp.length - 1]) instanceof wp && pp.lines + ip.lines <= 32 ? (xp += pp.lines, Lp += pp.length + 1, Yp[Yp.length - 1] = new wp(ip.text.concat(pp.text), ip.length + 1 + pp.length)) : (xp + pp.lines > Op && Ap(), xp += pp.lines, Lp += pp.length + 1, Yp.push(pp))
        }

        function Ap() {
          0 != xp && (Sp.push(1 == Yp.length ? Yp[0] : vp.from(Yp, Lp)), Lp = -1, xp = Yp.length = 0)
        }
        for (let Pp of pp) Dp(Pp);
        return Ap(), 1 == Sp.length ? Sp[0] : new vp(Sp, ip)
      }
    }

    function tp(pp, ip) {
      let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e9;
      for (let op = 0, Ip = 0, Sp = !0; Ip < pp.length && op <= Op; Ip++) {
        let xp = pp[Ip],
          Lp = op + xp.length;
        Lp >= cp && (Lp > Op && (xp = xp.slice(0, Op - op)), op < cp && (xp = xp.slice(cp - op)), Sp ? (ip[ip.length - 1] += xp, Sp = !1) : ip.push(xp)), op = Lp + 1
      }
      return ip
    }

    function Hp(pp, ip, cp) {
      return tp(pp, [""], ip, cp)
    }
    Up.empty = new wp([""], 0);
    class dp {
      constructor(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.dir = ip, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [pp], this.offsets = [ip > 0 ? 1 : (pp instanceof wp ? pp.text.length : pp.children.length) << 1]
      }
      nextInner(pp, ip) {
        for (this.done = this.lineBreak = !1;;) {
          let cp = this.nodes.length - 1,
            Op = this.nodes[cp],
            op = this.offsets[cp],
            Ip = op >> 1,
            Sp = Op instanceof wp ? Op.text.length : Op.children.length;
          if (Ip == (ip > 0 ? Sp : 0)) {
            if (0 == cp) return this.done = !0, this.value = "", this;
            ip > 0 && this.offsets[cp - 1]++, this.nodes.pop(), this.offsets.pop()
          } else if ((1 & op) == (ip > 0 ? 0 : 1)) {
            if (this.offsets[cp] += ip, 0 == pp) return this.lineBreak = !0, this.value = "\n", this;
            pp--
          } else if (Op instanceof wp) {
            let op = Op.text[Ip + (ip < 0 ? -1 : 0)];
            if (this.offsets[cp] += ip, op.length > Math.max(0, pp)) return this.value = 0 == pp ? op : ip > 0 ? op.slice(pp) : op.slice(0, op.length - pp), this;
            pp -= op.length
          } else {
            let op = Op.children[Ip + (ip < 0 ? -1 : 0)];
            pp > op.length ? (pp -= op.length, this.offsets[cp] += ip) : (ip < 0 && this.offsets[cp]--, this.nodes.push(op), this.offsets.push(ip > 0 ? 1 : (op instanceof wp ? op.text.length : op.children.length) << 1))
          }
        }
      }
      next() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return pp < 0 && (this.nextInner(-pp, -this.dir), pp = this.value.length), this.nextInner(pp, this.dir)
      }
    }
    class ep {
      constructor(pp, ip, cp) {
        this.value = "", this.done = !1, this.cursor = new dp(pp, ip > cp ? -1 : 1), this.pos = ip > cp ? pp.length : 0, this.from = Math.min(ip, cp), this.to = Math.max(ip, cp)
      }
      nextInner(pp, ip) {
        if (ip < 0 ? this.pos <= this.from : this.pos >= this.to) return this.value = "", this.done = !0, this;
        pp += Math.max(0, ip < 0 ? this.pos - this.to : this.from - this.pos);
        let cp = ip < 0 ? this.pos - this.from : this.to - this.pos;
        pp > cp && (pp = cp), cp -= pp;
        let {
          value: Op
        } = this.cursor.next(pp);
        return this.pos += (Op.length + pp) * ip, this.value = Op.length <= cp ? Op : ip < 0 ? Op.slice(Op.length - cp) : Op.slice(0, cp), this.done = !this.value, this
      }
      next() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return pp < 0 ? pp = Math.max(pp, this.from - this.pos) : pp > 0 && (pp = Math.min(pp, this.to - this.pos)), this.nextInner(pp, this.cursor.dir)
      }
      get lineBreak() {
        return this.cursor.lineBreak && "" != this.value
      }
    }
    class jp {
      constructor(pp) {
        this.inner = pp, this.afterBreak = !0, this.value = "", this.done = !1
      }
      next() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          {
            done: ip,
            lineBreak: cp,
            value: Op
          } = this.inner.next(pp);
        return ip && this.afterBreak ? (this.value = "", this.afterBreak = !1) : ip ? (this.done = !0, this.value = "") : cp ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = Op, this.afterBreak = !1), this
      }
      get lineBreak() {
        return !1
      }
    }
    "undefined" != typeof Symbol && (Up.prototype[Symbol.iterator] = function() {
      return this.iter()
    }, dp.prototype[Symbol.iterator] = ep.prototype[Symbol.iterator] = jp.prototype[Symbol.iterator] = function() {
      return this
    });
    class kp {
      constructor(pp, ip, cp, Op) {
        this.from = pp, this.to = ip, this.number = cp, this.text = Op
      }
      get length() {
        return this.to - this.from
      }
    }

    function mp(pp, ip, cp) {
      return [ip = Math.max(0, Math.min(pp.length, ip)), Math.max(ip, Math.min(pp.length, cp))]
    }

    function Rp(pp, ip) {
      return Lp(pp, ip, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function qp(pp, ip) {
      let cp = pp.charCodeAt(ip);
      if (!((Op = cp) >= 55296 && Op < 56320) || ip + 1 == pp.length) return cp;
      var Op;
      let op = pp.charCodeAt(ip + 1);
      return function(pp) {
        return pp >= 56320 && pp < 57344
      }(op) ? op - 56320 + (cp - 55296 << 10) + 65536 : cp
    }

    function Mp(pp) {
      return pp <= 65535 ? String.fromCharCode(pp) : (pp -= 65536, String.fromCharCode(55296 + (pp >> 10), 56320 + (1023 & pp)))
    }

    function Cp(pp) {
      return pp < 65536 ? 1 : 2
    }
    const Ep = /\r\n?|\n/;
    var Xp = function(pp) {
      return pp[pp.Simple = 0] = "Simple", pp[pp.TrackDel = 1] = "TrackDel", pp[pp.TrackBefore = 2] = "TrackBefore", pp[pp.TrackAfter = 3] = "TrackAfter", pp
    }(Xp || (Xp = {}));
    class lp {
      constructor(pp) {
        this.sections = pp
      }
      get length() {
        let pp = 0;
        for (let ip = 0; ip < this.sections.length; ip += 2) pp += this.sections[ip];
        return pp
      }
      get newLength() {
        let pp = 0;
        for (let ip = 0; ip < this.sections.length; ip += 2) {
          let cp = this.sections[ip + 1];
          pp += cp < 0 ? this.sections[ip] : cp
        }
        return pp
      }
      get empty() {
        return 0 == this.sections.length || 2 == this.sections.length && this.sections[1] < 0
      }
      iterGaps(pp) {
        for (let ip = 0, cp = 0, Op = 0; ip < this.sections.length;) {
          let op = this.sections[ip++],
            Ip = this.sections[ip++];
          Ip < 0 ? (pp(cp, Op, op), Op += op) : Op += Ip, cp += op
        }
      }
      iterChangedRanges(pp) {
        Np(this, pp, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get invertedDesc() {
        let pp = [];
        for (let ip = 0; ip < this.sections.length;) {
          let cp = this.sections[ip++],
            Op = this.sections[ip++];
          Op < 0 ? pp.push(cp, Op) : pp.push(Op, cp)
        }
        return new lp(pp)
      }
      composeDesc(pp) {
        return this.empty ? pp : pp.empty ? this : fp(this, pp)
      }
      mapDesc(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return pp.empty ? this : Tp(this, pp, ip)
      }
      mapPos(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Xp.Simple,
          Op = 0,
          op = 0;
        for (let Ip = 0; Ip < this.sections.length;) {
          let Sp = this.sections[Ip++],
            xp = this.sections[Ip++],
            Lp = Op + Sp;
          if (xp < 0) {
            if (Lp > pp) return op + (pp - Op);
            op += Sp
          } else {
            if (cp != Xp.Simple && Lp >= pp && (cp == Xp.TrackDel && Op < pp && Lp > pp || cp == Xp.TrackBefore && Op < pp || cp == Xp.TrackAfter && Lp > pp)) return null;
            if (Lp > pp || Lp == pp && ip < 0 && !Sp) return pp == Op || ip < 0 ? op : op + xp;
            op += xp
          }
          Op = Lp
        }
        if (pp > Op) throw new RangeError(`Position ${pp} is out of range for changeset of length ${Op}`);
        return op
      }
      touchesRange(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pp;
        for (let cp = 0, Op = 0; cp < this.sections.length && Op <= ip;) {
          let op = Op + this.sections[cp++];
          if (this.sections[cp++] >= 0 && Op <= ip && op >= pp) return !(Op < pp && op > ip) || "cover";
          Op = op
        }
        return !1
      }
      toString() {
        let pp = "";
        for (let ip = 0; ip < this.sections.length;) {
          let cp = this.sections[ip++],
            Op = this.sections[ip++];
          pp += (pp ? " " : "") + cp + (Op >= 0 ? ":" + Op : "")
        }
        return pp
      }
      toJSON() {
        return this.sections
      }
      static fromJSON(pp) {
        if (!Array.isArray(pp) || pp.length % 2 || pp.some((pp => "number" != typeof pp))) throw new RangeError("Invalid JSON representation of ChangeDesc");
        return new lp(pp)
      }
      static create(pp) {
        return new lp(pp)
      }
    }
    class Qp extends lp {
      constructor(pp, ip) {
        super(pp), this.inserted = ip
      }
      apply(pp) {
        if (this.length != pp.length) throw new RangeError("Applying change set to a document with the wrong length");
        return Np(this, ((ip, cp, Op, op, Ip) => pp = pp.replace(Op, Op + (cp - ip), Ip)), !1), pp
      }
      mapDesc(pp) {
        return Tp(this, pp, arguments.length > 1 && void 0 !== arguments[1] && arguments[1], !0)
      }
      invert(pp) {
        let ip = this.sections.slice(),
          cp = [];
        for (let Op = 0, op = 0; Op < ip.length; Op += 2) {
          let Ip = ip[Op],
            Sp = ip[Op + 1];
          if (Sp >= 0) {
            ip[Op] = Sp, ip[Op + 1] = Ip;
            let xp = Op >> 1;
            for (; cp.length < xp;) cp.push(Up.empty);
            cp.push(Ip ? pp.slice(op, op + Ip) : Up.empty)
          }
          op += Ip
        }
        return new Qp(ip, cp)
      }
      compose(pp) {
        return this.empty ? pp : pp.empty ? this : fp(this, pp, !0)
      }
      map(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return pp.empty ? this : Tp(this, pp, ip, !0)
      }
      iterChanges(pp) {
        Np(this, pp, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get desc() {
        return lp.create(this.sections)
      }
      filter(pp) {
        let ip = [],
          cp = [],
          Op = [],
          op = new bp(this);
        pp: for (let Ip = 0, Sp = 0;;) {
          let xp = Ip == pp.length ? 1e9 : pp[Ip++];
          for (; Sp < xp || Sp == xp && 0 == op.len;) {
            if (op.done) break pp;
            let pp = Math.min(op.len, xp - Sp);
            Jp(Op, pp, -1);
            let Ip = -1 == op.ins ? -1 : 0 == op.off ? op.ins : 0;
            Jp(ip, pp, Ip), Ip > 0 && Bp(cp, ip, op.text), op.forward(pp), Sp += pp
          }
          let Lp = pp[Ip++];
          for (; Sp < Lp;) {
            if (op.done) break pp;
            let pp = Math.min(op.len, Lp - Sp);
            Jp(ip, pp, -1), Jp(Op, pp, -1 == op.ins ? -1 : 0 == op.off ? op.ins : 0), op.forward(pp), Sp += pp
          }
        }
        return {
          changes: new Qp(ip, cp),
          filtered: lp.create(Op)
        }
      }
      toJSON() {
        let pp = [];
        for (let ip = 0; ip < this.sections.length; ip += 2) {
          let cp = this.sections[ip],
            Op = this.sections[ip + 1];
          Op < 0 ? pp.push(cp) : 0 == Op ? pp.push([cp]) : pp.push([cp].concat(this.inserted[ip >> 1].toJSON()))
        }
        return pp
      }
      static of (pp, ip, cp) {
        let Op = [],
          op = [],
          Ip = 0,
          Sp = null;

        function xp() {
          if (!(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && !Op.length) return;
          Ip < ip && Jp(Op, ip - Ip, -1);
          let pp = new Qp(Op, op);
          Sp = Sp ? Sp.compose(pp.map(Sp)) : pp, Op = [], op = [], Ip = 0
        }
        return function pp(Lp) {
          if (Array.isArray(Lp))
            for (let ip of Lp) pp(ip);
          else if (Lp instanceof Qp) {
            if (Lp.length != ip) throw new RangeError(`Mismatched change set length (got ${Lp.length}, expected ${ip})`);
            xp(), Sp = Sp ? Sp.compose(Lp.map(Sp)) : Lp
          } else {
            let {
              from: pp,
              to: Sp = pp,
              insert: Yp
            } = Lp;
            if (pp > Sp || pp < 0 || Sp > ip) throw new RangeError(`Invalid change range ${pp} to ${Sp} (in doc of length ${ip})`);
            let Dp = Yp ? "string" == typeof Yp ? Up.of(Yp.split(cp || Ep)) : Yp : Up.empty,
              Ap = Dp.length;
            if (pp == Sp && 0 == Ap) return;
            pp < Ip && xp(), pp > Ip && Jp(Op, pp - Ip, -1), Jp(Op, Sp - pp, Ap), Bp(op, Op, Dp), Ip = Sp
          }
        }(pp), xp(!Sp), Sp
      }
      static empty(pp) {
        return new Qp(pp ? [pp, -1] : [], [])
      }
      static fromJSON(pp) {
        if (!Array.isArray(pp)) throw new RangeError("Invalid JSON representation of ChangeSet");
        let ip = [],
          cp = [];
        for (let Op = 0; Op < pp.length; Op++) {
          let op = pp[Op];
          if ("number" == typeof op) ip.push(op, -1);
          else {
            if (!Array.isArray(op) || "number" != typeof op[0] || op.some(((pp, ip) => ip && "string" != typeof pp))) throw new RangeError("Invalid JSON representation of ChangeSet");
            if (1 == op.length) ip.push(op[0], 0);
            else {
              for (; cp.length < Op;) cp.push(Up.empty);
              cp[Op] = Up.of(op.slice(1)), ip.push(op[0], cp[Op].length)
            }
          }
        }
        return new Qp(ip, cp)
      }
      static createSet(pp, ip) {
        return new Qp(pp, ip)
      }
    }

    function Jp(pp, ip, cp) {
      let Op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (0 == ip && cp <= 0) return;
      let op = pp.length - 2;
      op >= 0 && cp <= 0 && cp == pp[op + 1] ? pp[op] += ip : op >= 0 && 0 == ip && 0 == pp[op] ? pp[op + 1] += cp : Op ? (pp[op] += ip, pp[op + 1] += cp) : pp.push(ip, cp)
    }

    function Bp(pp, ip, cp) {
      if (0 == cp.length) return;
      let Op = ip.length - 2 >> 1;
      if (Op < pp.length) pp[pp.length - 1] = pp[pp.length - 1].append(cp);
      else {
        for (; pp.length < Op;) pp.push(Up.empty);
        pp.push(cp)
      }
    }

    function Np(pp, ip, cp) {
      let Op = pp.inserted;
      for (let op = 0, Ip = 0, Sp = 0; Sp < pp.sections.length;) {
        let xp = pp.sections[Sp++],
          Lp = pp.sections[Sp++];
        if (Lp < 0) op += xp, Ip += xp;
        else {
          let Yp = op,
            Dp = Ip,
            Ap = Up.empty;
          for (; Yp += xp, Dp += Lp, Lp && Op && (Ap = Ap.append(Op[Sp - 2 >> 1])), !(cp || Sp == pp.sections.length || pp.sections[Sp + 1] < 0);) xp = pp.sections[Sp++], Lp = pp.sections[Sp++];
          ip(op, Yp, Ip, Dp, Ap), op = Yp, Ip = Dp
        }
      }
    }

    function Tp(pp, ip, cp) {
      let Op = [],
        op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3] ? [] : null,
        Ip = new bp(pp),
        Sp = new bp(ip),
        xp = 0;
      for (let Lp = -1;;) {
        if (++xp > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - likely malformed ChangeSet");
        if (Ip.done && Sp.len || Sp.done && Ip.len) throw new Error("Mismatched change set lengths");
        if (-1 == Ip.ins && -1 == Sp.ins) {
          let pp = Math.min(Ip.len, Sp.len);
          Jp(Op, pp, -1), Ip.forward(pp), Sp.forward(pp)
        } else if (Sp.ins >= 0 && (Ip.ins < 0 || Lp == Ip.i || 0 == Ip.off && (Sp.len < Ip.len || Sp.len == Ip.len && !cp))) {
          let pp = Sp.len;
          for (Jp(Op, Sp.ins, -1); pp;) {
            if (++xp > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-b");
            let ip = Math.min(Ip.len, pp);
            Ip.ins >= 0 && Lp < Ip.i && Ip.len <= ip && (Jp(Op, 0, Ip.ins), op && Bp(op, Op, Ip.text), Lp = Ip.i), Ip.forward(ip), pp -= ip
          }
          Sp.next()
        } else {
          if (!(Ip.ins >= 0)) {
            if (Ip.done && Sp.done) return op ? Qp.createSet(Op, op) : lp.create(Op);
            throw new Error("Mismatched change set lengths")
          } {
            let pp = 0,
              ip = Ip.len;
            for (; ip;) {
              if (++xp > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-a");
              if (-1 == Sp.ins) {
                let cp = Math.min(ip, Sp.len);
                pp += cp, ip -= cp, Sp.forward(cp)
              } else {
                if (!(0 == Sp.ins && Sp.len < ip)) break;
                ip -= Sp.len, Sp.next()
              }
            }
            Jp(Op, pp, Lp < Ip.i ? Ip.ins : 0), op && Lp < Ip.i && Bp(op, Op, Ip.text), Lp = Ip.i, Ip.forward(Ip.len - ip)
          }
        }
      }
    }

    function fp(pp, ip) {
      let cp = [],
        Op = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? [] : null,
        op = new bp(pp),
        Ip = new bp(ip),
        Sp = 0;
      for (let xp = !1;;) {
        if (++Sp > 2e6) throw new Error("BLOXD CODEMIRROR: composeSets exceeded max iterations - likely malformed ChangeSet");
        if (op.done && Ip.done) return Op ? Qp.createSet(cp, Op) : lp.create(cp);
        if (0 == op.ins) Jp(cp, op.len, 0, xp), op.next();
        else if (0 != Ip.len || Ip.done) {
          if (op.done || Ip.done) throw new Error("Mismatched change set lengths");
          {
            let pp = Math.min(op.len2, Ip.len),
              ip = cp.length;
            if (-1 == op.ins) {
              let ip = -1 == Ip.ins ? -1 : Ip.off ? 0 : Ip.ins;
              Jp(cp, pp, ip, xp), Op && ip && Bp(Op, cp, Ip.text)
            } else - 1 == Ip.ins ? (Jp(cp, op.off ? 0 : op.len, pp, xp), Op && Bp(Op, cp, op.textBit(pp))) : (Jp(cp, op.off ? 0 : op.len, Ip.off ? 0 : Ip.ins, xp), Op && !Ip.off && Bp(Op, cp, Ip.text));
            xp = (op.ins > pp || Ip.ins >= 0 && Ip.len > pp) && (xp || cp.length > ip), op.forward2(pp), Ip.forward(pp)
          }
        } else Jp(cp, 0, Ip.ins, xp), Op && Bp(Op, cp, Ip.text), Ip.next()
      }
    }
    class bp {
      constructor(pp) {
        this.set = pp, this.i = 0, this.next()
      }
      next() {
        let {
          sections: pp
        } = this.set;
        this.i < pp.length ? (this.len = pp[this.i++], this.ins = pp[this.i++]) : (this.len = 0, this.ins = -2), this.off = 0
      }
      get done() {
        return -2 == this.ins
      }
      get len2() {
        return this.ins < 0 ? this.len : this.ins
      }
      get text() {
        let {
          inserted: pp
        } = this.set, ip = this.i - 2 >> 1;
        return ip >= pp.length ? Up.empty : pp[ip]
      }
      textBit(pp) {
        let {
          inserted: ip
        } = this.set, cp = this.i - 2 >> 1;
        return cp >= ip.length && !pp ? Up.empty : ip[cp].slice(this.off, null == pp ? void 0 : this.off + pp)
      }
      forward(pp) {
        pp == this.len ? this.next() : (this.len -= pp, this.off += pp)
      }
      forward2(pp) {
        -1 == this.ins ? this.forward(pp) : pp == this.ins ? this.next() : (this.ins -= pp, this.off += pp)
      }
    }
    class hp {
      constructor(pp, ip, cp) {
        this.from = pp, this.to = ip, this.flags = cp
      }
      get anchor() {
        return 32 & this.flags ? this.to : this.from
      }
      get head() {
        return 32 & this.flags ? this.from : this.to
      }
      get empty() {
        return this.from == this.to
      }
      get assoc() {
        return 8 & this.flags ? -1 : 16 & this.flags ? 1 : 0
      }
      get bidiLevel() {
        let pp = 7 & this.flags;
        return 7 == pp ? null : pp
      }
      get goalColumn() {
        let pp = this.flags >> 6;
        return 16777215 == pp ? void 0 : pp
      }
      map(pp) {
        let ip, cp, Op = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return this.empty ? ip = cp = pp.mapPos(this.from, Op) : (ip = pp.mapPos(this.from, 1), cp = pp.mapPos(this.to, -1)), ip == this.from && cp == this.to ? this : new hp(ip, cp, this.flags)
      }
      extend(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pp,
          cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (pp <= this.anchor && ip >= this.anchor) return ap.range(pp, ip, void 0, void 0, cp);
        let Op = Math.abs(pp - this.anchor) > Math.abs(ip - this.anchor) ? pp : ip;
        return ap.range(this.anchor, Op, void 0, void 0, cp)
      }
      eq(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.anchor == pp.anchor && this.head == pp.head && this.goalColumn == pp.goalColumn && (!ip || !this.empty || this.assoc == pp.assoc)
      }
      toJSON() {
        return {
          anchor: this.anchor,
          head: this.head
        }
      }
      static fromJSON(pp) {
        if (!pp || "number" != typeof pp.anchor || "number" != typeof pp.head) throw new RangeError("Invalid JSON representation for SelectionRange");
        return ap.range(pp.anchor, pp.head)
      }
      static create(pp, ip, cp) {
        return new hp(pp, ip, cp)
      }
    }
    class ap {
      constructor(pp, ip) {
        this.By = pp, this.mainIndex = ip
      }
      map(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return pp.empty ? this : ap.create(this.By.map((cp => cp.map(pp, ip))), this.mainIndex)
      }
      eq(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.By.length != pp.By.length || this.mainIndex != pp.mainIndex) return !1;
        for (let cp = 0; cp < this.By.length; cp++)
          if (!this.By[cp].eq(pp.By[cp], ip)) return !1;
        return !0
      }
      get main() {
        return this.By[this.mainIndex]
      }
      asSingle() {
        return 1 == this.By.length ? this : new ap([this.main], 0)
      }
      addRange(pp) {
        let ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return ap.create([pp].concat(this.By), ip ? 0 : this.mainIndex + 1)
      }
      replaceRange(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.mainIndex,
          cp = this.By.slice();
        return cp[ip] = pp, ap.create(cp, this.mainIndex)
      }
      toJSON() {
        return {
          By: this.By.map((pp => pp.toJSON())),
          main: this.mainIndex
        }
      }
      static fromJSON(pp) {
        if (!pp || !Array.isArray(pp.By) || "number" != typeof pp.main || pp.main >= pp.By.length) throw new RangeError("Invalid JSON representation for EditorSelection");
        return new ap(pp.By.map((pp => hp.fromJSON(pp))), pp.main)
      }
      static single(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pp;
        return new ap([ap.range(pp, ip)], 0)
      }
      static create(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (0 == pp.length) throw new RangeError("A selection needs at least one range");
        for (let cp = 0, Op = 0; Op < pp.length; Op++) {
          let op = pp[Op];
          if (op.empty ? op.from <= cp : op.from < cp) return ap.normalized(pp.slice(), ip);
          cp = op.to
        }
        return new ap(pp, ip)
      }
      static cursor(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cp = arguments.length > 2 ? arguments[2] : void 0,
          Op = arguments.length > 3 ? arguments[3] : void 0;
        return hp.create(pp, pp, (0 == ip ? 0 : ip < 0 ? 8 : 16) | (null == cp ? 7 : Math.min(6, cp)) | (null !== Op && void 0 !== Op ? Op : 16777215) << 6)
      }
      static range(pp, ip, cp, Op, op) {
        let Ip = (null !== cp && void 0 !== cp ? cp : 16777215) << 6 | (null == Op ? 7 : Math.min(6, Op));
        return op || pp == ip || (op = ip < pp ? 1 : -1), ip < pp ? hp.create(ip, pp, 48 | Ip) : hp.create(pp, ip, (op ? op < 0 ? 8 : 16 : 0) | Ip)
      }
      static normalized(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cp = pp[ip];
        pp.sort(((pp, ip) => pp.from - ip.from)), ip = pp.indexOf(cp);
        for (let Op = 1; Op < pp.length; Op++) {
          let cp = pp[Op],
            op = pp[Op - 1];
          if (cp.empty ? cp.from <= op.to : cp.from < op.to) {
            let Ip = op.from,
              Sp = Math.max(cp.to, op.to);
            Op <= ip && ip--, pp.splice(--Op, 2, cp.anchor > cp.head ? ap.range(Sp, Ip) : ap.range(Ip, Sp))
          }
        }
        return new ap(pp, ip)
      }
    }

    function np(pp, ip) {
      for (let cp of pp.By)
        if (cp.to > ip) throw new RangeError("Selection points outside of document")
    }
    let Fp = 0;
    class gp {
      constructor(pp, ip, cp, Op, op) {
        this.combine = pp, this.compareInput = ip, this.compare = cp, this.isStatic = Op, this.id = Fp++, this.default = pp([]), this.extensions = "function" == typeof op ? op(this) : op
      }
      get reader() {
        return this
      }
      static define() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return new gp(pp.combine || (pp => pp), pp.compareInput || ((pp, ip) => pp === ip), pp.compare || (pp.combine ? (pp, ip) => pp === ip : Gp), !!pp.static, pp.enables)
      }
      of(pp) {
        return new rp([], this, 0, pp)
      }
      compute(pp, ip) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new rp(pp, this, 1, ip)
      }
      computeN(pp, ip) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new rp(pp, this, 2, ip)
      }
      from(pp, ip) {
        return ip || (ip = pp => pp), this.compute([pp], (cp => ip(cp.field(pp))))
      }
    }

    function Gp(pp, ip) {
      return pp == ip || pp.length == ip.length && pp.every(((pp, cp) => pp === ip[cp]))
    }
    class rp {
      constructor(pp, ip, cp, Op) {
        this.dependencies = pp, this.facet = ip, this.type = cp, this.value = Op, this.id = Fp++
      }
      dynamicSlot(pp) {
        var ip;
        let cp = this.value,
          Op = this.facet.compareInput,
          op = this.id,
          Ip = pp[op] >> 1,
          Sp = 2 == this.type,
          xp = !1,
          Lp = !1,
          Yp = [];
        for (let Dp of this.dependencies) "doc" == Dp ? xp = !0 : "selection" == Dp ? Lp = !0 : 0 == (1 & (null !== (ip = pp[Dp.id]) && void 0 !== ip ? ip : 1)) && Yp.push(pp[Dp.id]);
        return {
          create: pp => (pp.values[Ip] = cp(pp), 1),
          update(pp, ip) {
            if (xp && ip.docChanged || Lp && (ip.docChanged || ip.selection) || zp(pp, Yp)) {
              let ip = cp(pp);
              if (Sp ? !Zp(ip, pp.values[Ip], Op) : !Op(ip, pp.values[Ip])) return pp.values[Ip] = ip, 1
            }
            return 0
          },
          reconfigure: (pp, ip) => {
            let xp, Lp = ip.config.address[op];
            if (null != Lp) {
              let op = Pi(ip, Lp);
              if (this.dependencies.every((cp => cp instanceof gp ? ip.facet(cp) === pp.facet(cp) : !(cp instanceof Vp) || ip.field(cp, !1) == pp.field(cp, !1))) || (Sp ? Zp(xp = cp(pp), op, Op) : Op(xp = cp(pp), op))) return pp.values[Ip] = op, 0
            } else xp = cp(pp);
            return pp.values[Ip] = xp, 1
          }
        }
      }
    }

    function Zp(pp, ip, cp) {
      if (pp.length != ip.length) return !1;
      for (let Op = 0; Op < pp.length; Op++)
        if (!cp(pp[Op], ip[Op])) return !1;
      return !0
    }

    function zp(pp, ip) {
      let cp = !1;
      for (let Op of ip) 1 & Ai(pp, Op) && (cp = !0);
      return cp
    }

    function sp(pp, ip, cp) {
      let Op = cp.map((ip => pp[ip.id])),
        op = cp.map((pp => pp.type)),
        Ip = Op.filter((pp => !(1 & pp))),
        Sp = pp[ip.id] >> 1;

      function xp(pp) {
        let cp = [];
        for (let ip = 0; ip < Op.length; ip++) {
          let Ip = Pi(pp, Op[ip]);
          if (2 == op[ip])
            for (let pp of Ip) cp.push(pp);
          else cp.push(Ip)
        }
        return ip.combine(cp)
      }
      return {
        create(pp) {
          for (let ip of Op) Ai(pp, ip);
          return pp.values[Sp] = xp(pp), 1
        },
        update(pp, cp) {
          if (!zp(pp, Ip)) return 0;
          let Op = xp(pp);
          return ip.compare(Op, pp.values[Sp]) ? 0 : (pp.values[Sp] = Op, 1)
        },
        reconfigure(pp, op) {
          let Ip = zp(pp, Op),
            Lp = op.config.facets[ip.id],
            Yp = op.facet(ip);
          if (Lp && !Ip && Gp(cp, Lp)) return pp.values[Sp] = Yp, 0;
          let Dp = xp(pp);
          return ip.compare(Dp, Yp) ? (pp.values[Sp] = Yp, 0) : (pp.values[Sp] = Dp, 1)
        }
      }
    }
    const Kp = gp.define({
      static: !0
    });
    class Vp {
      constructor(pp, ip, cp, Op, op) {
        this.id = pp, this.createF = ip, this.updateF = cp, this.compareF = Op, this.spec = op, this.provides = void 0
      }
      static define(pp) {
        let ip = new Vp(Fp++, pp.create, pp.update, pp.compare || ((pp, ip) => pp === ip), pp);
        return pp.provide && (ip.provides = pp.provide(ip)), ip
      }
      create(pp) {
        let ip = pp.facet(Kp).find((pp => pp.field == this));
        return ((null === ip || void 0 === ip ? void 0 : ip.create) || this.createF)(pp)
      }
      slot(pp) {
        let ip = pp[this.id] >> 1;
        return {
          create: pp => (pp.values[ip] = this.create(pp), 1),
          update: (pp, cp) => {
            let Op = pp.values[ip],
              op = this.updateF(Op, cp);
            return this.compareF(Op, op) ? 0 : (pp.values[ip] = op, 1)
          },
          reconfigure: (pp, cp) => {
            let Op, op = pp.facet(Kp),
              Ip = cp.facet(Kp);
            return (Op = op.find((pp => pp.field == this))) && Op != Ip.find((pp => pp.field == this)) ? (pp.values[ip] = Op.create(pp), 1) : null != cp.config.address[this.id] ? (pp.values[ip] = cp.field(this), 0) : (pp.values[ip] = this.create(pp), 1)
          }
        }
      }
      init(pp) {
        return [this, Kp.of({
          field: this,
          create: pp
        })]
      }
      get extension() {
        return this
      }
    }
    const ii = 4,
      ci = 3,
      Oi = 2,
      oi = 1;

    function Ii(pp) {
      return ip => new xi(ip, pp)
    }
    const Si = {
      highest: Ii(0),
      high: Ii(oi),
      default: Ii(Oi),
      low: Ii(ci),
      lowest: Ii(ii)
    };
    class xi {
      constructor(pp, ip) {
        this.inner = pp, this.prec = ip
      }
    }
    class Li {
      of(pp) {
        return new Yi(this, pp)
      }
      reconfigure(pp) {
        return Li.reconfigure.of({
          compartment: this,
          extension: pp
        })
      }
      get(pp) {
        return pp.config.compartments.get(this)
      }
    }
    class Yi {
      constructor(pp, ip) {
        this.compartment = pp, this.inner = ip
      }
    }
    class Di {
      constructor(pp, ip, cp, Op, op, Ip) {
        for (this.base = pp, this.compartments = ip, this.dynamicSlots = cp, this.address = Op, this.staticValues = op, this.facets = Ip, this.statusTemplate = []; this.statusTemplate.length < cp.length;) this.statusTemplate.push(0)
      }
      staticFacet(pp) {
        let ip = this.address[pp.id];
        return null == ip ? pp.default : this.staticValues[ip >> 1]
      }
      static resolve(pp, ip, cp) {
        let Op = [],
          op = Object.create(null),
          Ip = new Map;
        for (let Ap of function(pp, ip, cp) {
            let Op = [
                [],
                [],
                [],
                [],
                []
              ],
              op = new Map;

            function Ip(pp, Sp) {
              let xp = op.get(pp);
              if (null != xp) {
                if (xp <= Sp) return;
                let ip = Op[xp].indexOf(pp);
                ip > -1 && Op[xp].splice(ip, 1), pp instanceof Yi && cp.delete(pp.compartment)
              }
              if (op.set(pp, Sp), Array.isArray(pp))
                for (let ip of pp) Ip(ip, Sp);
              else if (pp instanceof Yi) {
                if (cp.has(pp.compartment)) throw new RangeError("Duplicate use of compartment in extensions");
                let Op = ip.get(pp.compartment) || pp.inner;
                cp.set(pp.compartment, Op), Ip(Op, Sp)
              } else if (pp instanceof xi) Ip(pp.inner, pp.prec);
              else if (pp instanceof Vp) Op[Sp].push(pp), pp.provides && Ip(pp.provides, Sp);
              else if (pp instanceof rp) Op[Sp].push(pp), pp.facet.extensions && Ip(pp.facet.extensions, Oi);
              else {
                let ip = pp.extension;
                if (!ip) throw new Error(`Unrecognized extension value in extension set (${pp}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
                Ip(ip, Sp)
              }
            }
            return Ip(pp, Oi), Op.reduce(((pp, ip) => pp.concat(ip)))
          }(pp, ip, Ip)) Ap instanceof Vp ? Op.push(Ap) : (op[Ap.facet.id] || (op[Ap.facet.id] = [])).push(Ap);
        let Sp = Object.create(null),
          xp = [],
          Lp = [];
        for (let Ap of Op) Sp[Ap.id] = Lp.length << 1, Lp.push((pp => Ap.slot(pp)));
        let Yp = null === cp || void 0 === cp ? void 0 : cp.config.facets;
        for (let Ap in op) {
          let pp = op[Ap],
            ip = pp[0].facet,
            Op = Yp && Yp[Ap] || [];
          if (pp.every((pp => 0 == pp.type)))
            if (Sp[ip.id] = xp.length << 1 | 1, Gp(Op, pp)) xp.push(cp.facet(ip));
            else {
              let Op = ip.combine(pp.map((pp => pp.value)));
              xp.push(cp && ip.compare(Op, cp.facet(ip)) ? cp.facet(ip) : Op)
            }
          else {
            for (let ip of pp) 0 == ip.type ? (Sp[ip.id] = xp.length << 1 | 1, xp.push(ip.value)) : (Sp[ip.id] = Lp.length << 1, Lp.push((pp => ip.dynamicSlot(pp))));
            Sp[ip.id] = Lp.length << 1, Lp.push((cp => sp(cp, ip, pp)))
          }
        }
        let Dp = Lp.map((pp => pp(Sp)));
        return new Di(pp, Ip, Dp, Sp, xp, op)
      }
    }

    function Ai(pp, ip) {
      if (1 & ip) return 2;
      let cp = ip >> 1,
        Op = pp.status[cp];
      if (4 == Op) throw new Error("Cyclic dependency between fields and/or facets");
      if (2 & Op) return Op;
      pp.status[cp] = 4;
      let op = pp.computeSlot(pp, pp.config.dynamicSlots[cp]);
      return pp.status[cp] = 2 | op
    }

    function Pi(pp, ip) {
      return 1 & ip ? pp.config.staticValues[ip >> 1] : pp.values[ip >> 1]
    }
    const Wi = gp.define(),
      yi = gp.define({
        combine: pp => pp.some((pp => pp)),
        static: !0
      }),
      Ui = gp.define({
        combine: pp => pp.length ? pp[0] : void 0,
        static: !0
      }),
      wi = gp.define(),
      vi = gp.define(),
      ti = gp.define(),
      Hi = gp.define({
        combine: pp => !!pp.length && pp[0]
      });
    class di {
      constructor(pp, ip) {
        this.type = pp, this.value = ip
      }
      static define() {
        return new ei
      }
    }
    class ei {
      of(pp) {
        return new di(this, pp)
      }
    }
    class ui {
      constructor(pp) {
        this.map = pp
      }
      of(pp) {
        return new ji(this, pp)
      }
    }
    class ji {
      constructor(pp, ip) {
        this.type = pp, this.value = ip
      }
      map(pp) {
        let ip = this.type.map(this.value, pp);
        return void 0 === ip ? void 0 : ip == this.value ? this : new ji(this.type, ip)
      }
      is(pp) {
        return this.type == pp
      }
      static define() {
        return new ui((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).map || (pp => pp))
      }
      static mapEffects(pp, ip) {
        if (!pp.length) return pp;
        let cp = [];
        for (let Op of pp) {
          let pp = Op.map(ip);
          pp && cp.push(pp)
        }
        return cp
      }
    }
    ji.reconfigure = ji.define(), ji.appendConfig = ji.define();
    class ki {
      constructor(pp, ip, cp, Op, op, Ip) {
        this.startState = pp, this.changes = ip, this.selection = cp, this.effects = Op, this.annotations = op, this.scrollIntoView = Ip, this._doc = null, this._state = null, cp && np(cp, ip.newLength), op.some((pp => pp.type == ki.time)) || (this.annotations = op.concat(ki.time.of(Date.now())))
      }
      static create(pp, ip, cp, Op, op, Ip) {
        return new ki(pp, ip, cp, Op, op, Ip)
      }
      get newDoc() {
        return this._doc || (this._doc = this.changes.apply(this.startState.doc))
      }
      get newSelection() {
        return this.selection || this.startState.selection.map(this.changes)
      }
      get state() {
        return this._state || this.startState.applyTransaction(this), this._state
      }
      annotation(pp) {
        for (let ip of this.annotations)
          if (ip.type == pp) return ip.value
      }
      get docChanged() {
        return !this.changes.empty
      }
      get reconfigured() {
        return this.startState.config != this.state.config
      }
      isUserEvent(pp) {
        let ip = this.annotation(ki.userEvent);
        return !(!ip || !(ip == pp || ip.length > pp.length && ip.slice(0, pp.length) == pp && "." == ip[pp.length]))
      }
    }

    function mi(pp, ip) {
      let cp = [];
      for (let Op = 0, op = 0;;) {
        let Ip, Sp;
        if (Op < pp.length && (op == ip.length || ip[op] >= pp[Op])) Ip = pp[Op++], Sp = pp[Op++];
        else {
          if (!(op < ip.length)) return cp;
          Ip = ip[op++], Sp = ip[op++]
        }!cp.length || cp[cp.length - 1] < Ip ? cp.push(Ip, Sp) : cp[cp.length - 1] < Sp && (cp[cp.length - 1] = Sp)
      }
    }

    function Ri(pp, ip, cp) {
      var Op;
      let op, Ip, Sp;
      return cp ? (op = ip.changes, Ip = Qp.empty(ip.changes.length), Sp = pp.changes.compose(ip.changes)) : (op = ip.changes.map(pp.changes), Ip = pp.changes.mapDesc(ip.changes, !0), Sp = pp.changes.compose(op)), {
        changes: Sp,
        selection: ip.selection ? ip.selection.map(Ip) : null === (Op = pp.selection) || void 0 === Op ? void 0 : Op.map(op),
        effects: ji.mapEffects(pp.effects, op).concat(ji.mapEffects(ip.effects, Ip)),
        annotations: pp.annotations.length ? pp.annotations.concat(ip.annotations) : ip.annotations,
        scrollIntoView: pp.scrollIntoView || ip.scrollIntoView
      }
    }

    function qi(pp, ip, cp) {
      let Op = ip.selection,
        op = Ei(ip.annotations);
      return ip.userEvent && (op = op.concat(ki.userEvent.of(ip.userEvent))), {
        changes: ip.changes instanceof Qp ? ip.changes : Qp.of(ip.changes || [], cp, pp.facet(Ui)),
        selection: Op && (Op instanceof ap ? Op : ap.single(Op.anchor, Op.head)),
        effects: Ei(ip.effects),
        annotations: op,
        scrollIntoView: !!ip.scrollIntoView
      }
    }

    function Mi(pp, ip, cp) {
      let Op = qi(pp, ip.length ? ip[0] : {}, pp.doc.length);
      ip.length && !1 === ip[0].filter && (cp = !1);
      for (let Ip = 1; Ip < ip.length; Ip++) {
        !1 === ip[Ip].filter && (cp = !1);
        let op = !!ip[Ip].sequential;
        Op = Ri(Op, qi(pp, ip[Ip], op ? Op.changes.newLength : pp.doc.length), op)
      }
      let op = ki.create(pp, Op.changes, Op.selection, Op.effects, Op.annotations, Op.scrollIntoView);
      return function(pp) {
        let ip = pp.startState,
          cp = ip.facet(ti),
          Op = pp;
        for (let op = cp.length - 1; op >= 0; op--) {
          let Ip = cp[op](pp);
          Ip && Object.keys(Ip).length && (Op = Ri(Op, qi(ip, Ip, pp.changes.newLength), !0))
        }
        return Op == pp ? pp : ki.create(ip, pp.changes, pp.selection, Op.effects, Op.annotations, Op.scrollIntoView)
      }(cp ? function(pp) {
        let ip = pp.startState,
          cp = !0;
        for (let op of ip.facet(wi)) {
          let ip = op(pp);
          if (!1 === ip) {
            cp = !1;
            break
          }
          Array.isArray(ip) && (cp = !0 === cp ? ip : mi(cp, ip))
        }
        if (!0 !== cp) {
          let Op, op;
          if (!1 === cp) op = pp.changes.invertedDesc, Op = Qp.empty(ip.doc.length);
          else {
            let ip = pp.changes.filter(cp);
            Op = ip.changes, op = ip.filtered.mapDesc(ip.changes).invertedDesc
          }
          pp = ki.create(ip, Op, pp.selection && pp.selection.map(op), ji.mapEffects(pp.effects, op), pp.annotations, pp.scrollIntoView)
        }
        let Op = ip.facet(vi);
        for (let op = Op.length - 1; op >= 0; op--) {
          let cp = Op[op](pp);
          pp = cp instanceof ki ? cp : Array.isArray(cp) && 1 == cp.length && cp[0] instanceof ki ? cp[0] : Mi(ip, Ei(cp), !1)
        }
        return pp
      }(op) : op)
    }
    ki.time = di.define(), ki.userEvent = di.define(), ki.addToHistory = di.define(), ki.remote = di.define();
    const Ci = [];

    function Ei(pp) {
      return null == pp ? Ci : Array.isArray(pp) ? pp : [pp]
    }
    var Xi = function(pp) {
      return pp[pp.Word = 0] = "Word", pp[pp.Space = 1] = "Space", pp[pp.Other = 2] = "Other", pp
    }(Xi || (Xi = {}));
    const li = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
    let Qi;
    try {
      Qi = new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u")
    } catch (Ic) {}

    function Ji(pp) {
      return ip => {
        if (!/\S/.test(ip)) return Xi.Space;
        if (function(pp) {
            if (Qi) return Qi.test(pp);
            for (let ip = 0; ip < pp.length; ip++) {
              let cp = pp[ip];
              if (/\w/.test(cp) || cp > "\x80" && (cp.toUpperCase() != cp.toLowerCase() || li.test(cp))) return !0
            }
            return !1
          }(ip)) return Xi.Word;
        for (let cp = 0; cp < pp.length; cp++)
          if (ip.indexOf(pp[cp]) > -1) return Xi.Word;
        return Xi.Other
      }
    }
    class Bi {
      constructor(pp, ip, cp, Op, op, Ip) {
        this.config = pp, this.doc = ip, this.selection = cp, this.values = Op, this.status = pp.statusTemplate.slice(), this.computeSlot = op, Ip && (Ip._state = this);
        for (let Sp = 0; Sp < this.config.dynamicSlots.length; Sp++) Ai(this, Sp << 1);
        this.computeSlot = null
      }
      field(pp) {
        let ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          cp = this.config.address[pp.id];
        if (null != cp) return Ai(this, cp), Pi(this, cp);
        if (ip) throw new RangeError("Field is not present in this state")
      }
      update() {
        for (var pp = arguments.length, ip = new Array(pp), cp = 0; cp < pp; cp++) ip[cp] = arguments[cp];
        return Mi(this, ip, !0)
      }
      applyTransaction(pp) {
        let ip, cp = this.config,
          {
            base: Op,
            compartments: op
          } = cp;
        for (let Sp of pp.effects) Sp.is(Li.reconfigure) ? (cp && (op = new Map, cp.compartments.forEach(((pp, ip) => op.set(ip, pp))), cp = null), op.set(Sp.value.compartment, Sp.value.extension)) : Sp.is(ji.reconfigure) ? (cp = null, Op = Sp.value) : Sp.is(ji.appendConfig) && (cp = null, Op = Ei(Op).concat(Sp.value));
        if (cp) ip = pp.startState.values.slice();
        else {
          cp = Di.resolve(Op, op, this), ip = new Bi(cp, this.doc, this.selection, cp.dynamicSlots.map((() => null)), ((pp, ip) => ip.reconfigure(pp, this)), null).values
        }
        let Ip = pp.startState.facet(yi) ? pp.newSelection : pp.newSelection.asSingle();
        new Bi(cp, pp.newDoc, Ip, ip, ((ip, cp) => cp.update(ip, pp)), pp)
      }
      replaceSelection(pp) {
        return "string" == typeof pp && (pp = this.toText(pp)), this.changeByRange((ip => ({
          changes: {
            from: ip.from,
            to: ip.to,
            insert: pp
          },
          range: ap.cursor(ip.from + pp.length)
        })))
      }
      changeByRange(pp) {
        let ip = this.selection,
          cp = pp(ip.By[0]),
          Op = this.changes(cp.changes),
          op = [cp.range],
          Ip = Ei(cp.effects);
        for (let Sp = 1; Sp < ip.By.length; Sp++) {
          let cp = pp(ip.By[Sp]),
            xp = this.changes(cp.changes),
            Lp = xp.map(Op);
          for (let pp = 0; pp < Sp; pp++) op[pp] = op[pp].map(Lp);
          let Yp = Op.mapDesc(xp, !0);
          op.push(cp.range.map(Yp)), Op = Op.compose(Lp), Ip = ji.mapEffects(Ip, Lp).concat(ji.mapEffects(Ei(cp.effects), Yp))
        }
        return {
          changes: Op,
          selection: ap.create(op, ip.mainIndex),
          effects: Ip
        }
      }
      changes() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return pp instanceof Qp ? pp : Qp.of(pp, this.doc.length, this.facet(Bi.lineSeparator))
      }
      toText(pp) {
        return Up.of(pp.split(this.facet(Bi.lineSeparator) || Ep))
      }
      sliceDoc() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.doc.length;
        return this.doc.sliceString(pp, ip, this.lineBreak)
      }
      facet(pp) {
        let ip = this.config.address[pp.id];
        return null == ip ? pp.default : (Ai(this, ip), Pi(this, ip))
      }
      toJSON(pp) {
        let ip = {
          doc: this.sliceDoc(),
          selection: this.selection.toJSON()
        };
        if (pp)
          for (let cp in pp) {
            let Op = pp[cp];
            Op instanceof Vp && null != this.config.address[Op.id] && (ip[cp] = Op.spec.toJSON(this.field(pp[cp]), this))
          }
        return ip
      }
      static fromJSON(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          cp = arguments.length > 2 ? arguments[2] : void 0;
        if (!pp || "string" != typeof pp.doc) throw new RangeError("Invalid JSON representation for EditorState");
        let Op = [];
        if (cp)
          for (let op in cp)
            if (Object.prototype.hasOwnProperty.call(pp, op)) {
              let ip = cp[op],
                Ip = pp[op];
              Op.push(ip.init((pp => ip.spec.fromJSON(Ip, pp))))
            } return Bi.create({
          doc: pp.doc,
          selection: ap.fromJSON(pp.selection),
          extensions: ip.extensions ? Op.concat([ip.extensions]) : Op
        })
      }
      static create() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          ip = Di.resolve(pp.extensions || [], new Map),
          cp = pp.doc instanceof Up ? pp.doc : Up.of((pp.doc || "").split(ip.staticFacet(Bi.lineSeparator) || Ep)),
          Op = pp.selection ? pp.selection instanceof ap ? pp.selection : ap.single(pp.selection.anchor, pp.selection.head) : ap.single(0);
        return np(Op, cp.length), ip.staticFacet(yi) || (Op = Op.asSingle()), new Bi(ip, cp, Op, ip.dynamicSlots.map((() => null)), ((pp, ip) => ip.create(pp)), null)
      }
      get tabSize() {
        return this.facet(Bi.tabSize)
      }
      get lineBreak() {
        return this.facet(Bi.lineSeparator) || "\n"
      }
      get readOnly() {
        return this.facet(Hi)
      }
      phrase(pp) {
        for (var ip = arguments.length, cp = new Array(ip > 1 ? ip - 1 : 0), Op = 1; Op < ip; Op++) cp[Op - 1] = arguments[Op];
        for (let op of this.facet(Bi.phrases))
          if (Object.prototype.hasOwnProperty.call(op, pp)) {
            pp = op[pp];
            break
          } return cp.length && (pp = pp.replace(/\$(\$|\d*)/g, ((pp, ip) => {
          if ("$" == ip) return "$";
          let Op = +(ip || 1);
          return !Op || Op > cp.length ? pp : cp[Op - 1]
        }))), pp
      }
      languageDataAt(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          Op = [];
        for (let op of this.facet(Wi))
          for (let Ip of op(this, ip, cp)) Object.prototype.hasOwnProperty.call(Ip, pp) && Op.push(Ip[pp]);
        return Op
      }
      charCategorizer(pp) {
        let ip = this.languageDataAt("wordChars", pp);
        return Ji(ip.length ? ip[0] : "")
      }
      wordAt(pp) {
        let {
          text: ip,
          from: cp,
          length: Op
        } = this.doc.lineAt(pp), op = this.charCategorizer(pp), Ip = pp - cp, Sp = pp - cp;
        for (; Ip > 0;) {
          let pp = Rp(ip, Ip, !1);
          if (op(ip.slice(pp, Ip)) != Xi.Word) break;
          Ip = pp
        }
        for (; Sp < Op;) {
          let pp = Rp(ip, Sp);
          if (op(ip.slice(Sp, pp)) != Xi.Word) break;
          Sp = pp
        }
        return Ip == Sp ? null : ap.range(Ip + cp, Sp + cp)
      }
    }

    function Ni(pp, ip) {
      let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        Op = {};
      for (let op of pp)
        for (let pp of Object.keys(op)) {
          let ip = op[pp],
            Ip = Op[pp];
          if (void 0 === Ip) Op[pp] = ip;
          else if (Ip === ip || void 0 === ip);
          else {
            if (!Object.hasOwnProperty.call(cp, pp)) throw new Error("Config merge conflict for field " + pp);
            Op[pp] = cp[pp](Ip, ip)
          }
        }
      for (let op in ip) void 0 === Op[op] && (Op[op] = ip[op]);
      return Op
    }
    Bi.allowMultipleSelections = yi, Bi.tabSize = gp.define({
      combine: pp => pp.length ? pp[0] : 4
    }), Bi.lineSeparator = Ui, Bi.readOnly = Hi, Bi.phrases = gp.define({
      compare(pp, ip) {
        let cp = Object.keys(pp),
          Op = Object.keys(ip);
        return cp.length == Op.length && cp.every((cp => pp[cp] == ip[cp]))
      }
    }), Bi.languageData = Wi, Bi.changeFilter = wi, Bi.transactionFilter = vi, Bi.transactionExtender = ti, Li.reconfigure = ji.define();
    class Ti {
      eq(pp) {
        return this == pp
      }
      range(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pp;
        return bi.create(pp, ip, this)
      }
    }

    function fi(pp, ip) {
      return pp == ip || pp.constructor == ip.constructor && pp.eq(ip)
    }
    Ti.prototype.startSide = Ti.prototype.endSide = 0, Ti.prototype.point = !1, Ti.prototype.mapMode = Xp.TrackDel;
    class bi {
      constructor(pp, ip, cp) {
        this.from = pp, this.to = ip, this.value = cp
      }
      static create(pp, ip, cp) {
        return new bi(pp, ip, cp)
      }
    }

    function ai(pp, ip) {
      return pp.from - ip.from || pp.value.startSide - ip.value.startSide
    }
    class ni {
      constructor(pp, ip, cp, Op) {
        this.from = pp, this.to = ip, this.value = cp, this.aOp = Op
      }
      get length() {
        return this.to[this.to.length - 1]
      }
      findIndex(pp, ip, cp) {
        let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          op = cp ? this.to : this.from;
        for (let Ip = Op, Sp = op.length;;) {
          if (Ip == Sp) return Ip;
          let Op = Ip + Sp >> 1,
            xp = op[Op] - pp || (cp ? this.value[Op].endSide : this.value[Op].startSide) - ip;
          if (Op == Ip) return xp >= 0 ? Ip : Sp;
          xp >= 0 ? Sp = Op : Ip = Op + 1
        }
      }
      between(pp, ip, cp, Op) {
        for (let op = this.findIndex(ip, -1e9, !0), Ip = this.findIndex(cp, 1e9, !1, op); op < Ip; op++)
          if (!1 === Op(this.from[op] + pp, this.to[op] + pp, this.value[op])) return !1
      }
      map(pp, ip) {
        let cp = [],
          Op = [],
          op = [],
          Ip = -1,
          Sp = -1;
        for (let xp = 0; xp < this.value.length; xp++) {
          let Lp, Yp, Dp = this.value[xp],
            Ap = this.from[xp] + pp,
            Pp = this.to[xp] + pp;
          if (Ap == Pp) {
            let pp = ip.mapPos(Ap, Dp.startSide, Dp.mapMode);
            if (null == pp) continue;
            if (Lp = Yp = pp, Dp.startSide != Dp.endSide && (Yp = ip.mapPos(Ap, Dp.endSide), Yp < Lp)) continue
          } else if (Lp = ip.mapPos(Ap, Dp.startSide), Yp = ip.mapPos(Pp, Dp.endSide), Lp > Yp || Lp == Yp && Dp.startSide > 0 && Dp.endSide <= 0) continue;
          (Yp - Lp || Dp.endSide - Dp.startSide) < 0 || (Ip < 0 && (Ip = Lp), Dp.point && (Sp = Math.max(Sp, Yp - Lp)), cp.push(Dp), Op.push(Lp - Ip), op.push(Yp - Ip))
        }
        return {
          mapped: cp.length ? new ni(Op, op, cp, Sp) : null,
          pos: Ip
        }
      }
    }
    class Fi {
      constructor(pp, ip, cp, Op) {
        this.chunkPos = pp, this.chunk = ip, this.nextLayer = cp, this.aOp = Op
      }
      static create(pp, ip, cp, Op) {
        return new Fi(pp, ip, cp, Op)
      }
      get length() {
        let pp = this.chunk.length - 1;
        return pp < 0 ? 0 : Math.max(this.chunkEnd(pp), this.nextLayer.length)
      }
      get size() {
        if (this.wy) return 0;
        let pp = this.nextLayer.size;
        for (let ip of this.chunk) pp += ip.value.length;
        return pp
      }
      chunkEnd(pp) {
        return this.chunkPos[pp] + this.chunk[pp].length
      }
      update(pp) {
        let {
          add: ip = [],
          sort: cp = !1,
          filterFrom: Op = 0,
          filterTo: op = this.length
        } = pp, Ip = pp.filter;
        if (0 == ip.length && !Ip) return this;
        if (cp && (ip = ip.slice().sort(ai)), this.wy) return ip.length ? Fi.of(ip) : this;
        let Sp = new ri(this, null, -1).goto(0),
          xp = 0,
          Lp = [],
          Yp = new gi;
        for (; Sp.value || xp < ip.length;)
          if (xp < ip.length && (Sp.from - ip[xp].from || Sp.startSide - ip[xp].value.startSide) >= 0) {
            let pp = ip[xp++];
            Yp.addInner(pp.from, pp.to, pp.value) || Lp.push(pp)
          } else 1 == Sp.rangeIndex && Sp.chunkIndex < this.chunk.length && (xp == ip.length || this.chunkEnd(Sp.chunkIndex) < ip[xp].from) && (!Ip || Op > this.chunkEnd(Sp.chunkIndex) || op < this.chunkPos[Sp.chunkIndex]) && Yp.addChunk(this.chunkPos[Sp.chunkIndex], this.chunk[Sp.chunkIndex]) ? Sp.nextChunk() : ((!Ip || Op > Sp.to || op < Sp.from || Ip(Sp.from, Sp.to, Sp.value)) && (Yp.addInner(Sp.from, Sp.to, Sp.value) || Lp.push(bi.create(Sp.from, Sp.to, Sp.value))), Sp.next());
        return Yp.finishInner(this.nextLayer.wy && !Lp.length ? Fi.empty : this.nextLayer.update({
          add: Lp,
          filter: Ip,
          filterFrom: Op,
          filterTo: op
        }))
      }
      map(pp) {
        if (pp.empty || this.wy) return this;
        let ip = [],
          cp = [],
          Op = -1;
        for (let Ip = 0; Ip < this.chunk.length; Ip++) {
          let op = this.chunkPos[Ip],
            Sp = this.chunk[Ip],
            xp = pp.touchesRange(op, op + Sp.length);
          if (!1 === xp) Op = Math.max(Op, Sp.aOp), ip.push(Sp), cp.push(pp.mapPos(op));
          else if (!0 === xp) {
            let {
              mapped: Ip,
              pos: xp
            } = Sp.map(op, pp);
            Ip && (Op = Math.max(Op, Ip.aOp), ip.push(Ip), cp.push(xp))
          }
        }
        let op = this.nextLayer.map(pp);
        return 0 == ip.length ? op : new Fi(cp, ip, op || Fi.empty, Op)
      }
      between(pp, ip, cp) {
        if (!this.wy) {
          for (let Op = 0; Op < this.chunk.length; Op++) {
            let op = this.chunkPos[Op],
              Ip = this.chunk[Op];
            if (ip >= op && pp <= op + Ip.length && !1 === Ip.between(op, pp - op, ip - op, cp)) return
          }
          this.nextLayer.between(pp, ip, cp)
        }
      }
      iter() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return Zi.from([this]).goto(pp)
      }
      get wy() {
        return this.nextLayer == this
      }
      static iter(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Zi.from(pp).goto(ip)
      }
      static compare(pp, ip, cp, Op) {
        let op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1,
          Ip = pp.filter((pp => pp.aOp > 0 || !pp.wy && pp.aOp >= op)),
          Sp = ip.filter((pp => pp.aOp > 0 || !pp.wy && pp.aOp >= op)),
          xp = Gi(Ip, Sp, cp),
          Lp = new si(Ip, xp, op),
          Yp = new si(Sp, xp, op);
        cp.iterGaps(((pp, ip, cp) => Ki(Lp, pp, Yp, ip, cp, Op))), cp.empty && 0 == cp.length && Ki(Lp, 0, Yp, 0, 0, Op)
      }
      static eq(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Op = arguments.length > 3 ? arguments[3] : void 0;
        null == Op && (Op = 999999999);
        let op = pp.filter((pp => !pp.wy && ip.indexOf(pp) < 0)),
          Ip = ip.filter((ip => !ip.wy && pp.indexOf(ip) < 0));
        if (op.length != Ip.length) return !1;
        if (!op.length) return !0;
        let Sp = Gi(op, Ip),
          xp = new si(op, Sp, 0).goto(cp),
          Lp = new si(Ip, Sp, 0).goto(cp);
        for (;;) {
          if (xp.to != Lp.to || !Vi(xp.active, Lp.active) || xp.point && (!Lp.point || !fi(xp.point, Lp.point))) return !1;
          if (xp.to > Op) return !0;
          xp.next(), Lp.next()
        }
      }
      static spans(pp, ip, cp, Op) {
        let op = new si(pp, null, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1).goto(ip),
          Ip = ip,
          Sp = op.openStart;
        for (;;) {
          let pp = Math.min(op.to, cp);
          if (op.point) {
            let cp = op.activeForPoint(op.to),
              xp = op.pointFrom < ip ? cp.length + 1 : op.point.startSide < 0 ? cp.length : Math.min(cp.length, Sp);
            Op.point(Ip, pp, op.point, cp, xp, op.pointRank), Sp = Math.min(op.openEnd(pp), cp.length)
          } else pp > Ip && (Op.span(Ip, pp, op.active, Sp), Sp = op.openEnd(pp));
          if (op.to > cp) return Sp + (op.point && op.to > cp ? 1 : 0);
          Ip = op.to, op.next()
        }
      }
      static of (pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cp = new gi;
        for (let Op of pp instanceof bi ? [pp] : ip ? function(pp) {
            if (pp.length > 1)
              for (let ip = pp[0], cp = 1; cp < pp.length; cp++) {
                let Op = pp[cp];
                if (ai(ip, Op) > 0) return pp.slice().sort(ai);
                ip = Op
              }
            return pp
          }(pp) : pp) cp.add(Op.from, Op.to, Op.value);
        return cp.finish()
      }
      static join(pp) {
        if (!pp.length) return Fi.empty;
        let ip = pp[pp.length - 1];
        for (let cp = pp.length - 2; cp >= 0; cp--)
          for (let Op = pp[cp]; Op != Fi.empty; Op = Op.nextLayer) ip = new Fi(Op.chunkPos, Op.chunk, ip, Math.max(Op.aOp, ip.aOp));
        return ip
      }
    }
    Fi.empty = new Fi([], [], null, -1), Fi.empty.nextLayer = Fi.empty;
    class gi {
      finishChunk(pp) {
        this.chunks.push(new ni(this.from, this.to, this.value, this.aOp)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.aOp), this.aOp = -1, pp && (this.from = [], this.to = [], this.value = [])
      }
      constructor() {
        this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.aOp = -1, this.setMaxPoint = -1, this.nextLayer = null
      }
      add(pp, ip, cp) {
        this.addInner(pp, ip, cp) || (this.nextLayer || (this.nextLayer = new gi)).add(pp, ip, cp)
      }
      addInner(pp, ip, cp) {
        let Op = pp - this.lastTo || cp.startSide - this.last.endSide;
        if (Op <= 0 && (pp - this.lastFrom || cp.startSide - this.last.startSide) < 0) throw new Error("Ranges must be added sorted by `from` position and `startSide`");
        return !(Op < 0) && (250 == this.from.length && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = pp), this.from.push(pp - this.chunkStart), this.to.push(ip - this.chunkStart), this.last = cp, this.lastFrom = pp, this.lastTo = ip, this.value.push(cp), cp.point && (this.aOp = Math.max(this.aOp, ip - pp)), !0)
      }
      addChunk(pp, ip) {
        if ((pp - this.lastTo || ip.value[0].startSide - this.last.endSide) < 0) return !1;
        this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, ip.aOp), this.chunks.push(ip), this.chunkPos.push(pp);
        let cp = ip.value.length - 1;
        return this.last = ip.value[cp], this.lastFrom = ip.from[cp] + pp, this.lastTo = ip.to[cp] + pp, !0
      }
      finish() {
        return this.finishInner(Fi.empty)
      }
      finishInner(pp) {
        if (this.from.length && this.finishChunk(!1), 0 == this.chunks.length) return pp;
        let ip = Fi.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(pp) : pp, this.setMaxPoint);
        return this.from = null, ip
      }
    }

    function Gi(pp, ip, cp) {
      let Op = new Map;
      for (let Ip of pp)
        for (let pp = 0; pp < Ip.chunk.length; pp++) Ip.chunk[pp].aOp <= 0 && Op.set(Ip.chunk[pp], Ip.chunkPos[pp]);
      let op = new Set;
      for (let Ip of ip)
        for (let pp = 0; pp < Ip.chunk.length; pp++) {
          let ip = Op.get(Ip.chunk[pp]);
          null == ip || (cp ? cp.mapPos(ip) : ip) != Ip.chunkPos[pp] || (null === cp || void 0 === cp ? void 0 : cp.touchesRange(ip, ip + Ip.chunk[pp].length)) || op.add(Ip.chunk[pp])
        }
      return op
    }
    class ri {
      constructor(pp, ip, cp) {
        let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.layer = pp, this.skip = ip, this.nOp = cp, this.rank = Op
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      get endSide() {
        return this.value ? this.value.endSide : 0
      }
      goto(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(pp, ip, !1), this
      }
      gotoInner(pp, ip, cp) {
        for (; this.chunkIndex < this.layer.chunk.length;) {
          let ip = this.layer.chunk[this.chunkIndex];
          if (!(this.skip && this.skip.has(ip) || this.layer.chunkEnd(this.chunkIndex) < pp || ip.aOp < this.nOp)) break;
          this.chunkIndex++, cp = !1
        }
        if (this.chunkIndex < this.layer.chunk.length) {
          let Op = this.layer.chunk[this.chunkIndex].findIndex(pp - this.layer.chunkPos[this.chunkIndex], ip, !0);
          (!cp || this.rangeIndex < Op) && this.setRangeIndex(Op)
        }
        this.next()
      }
      forward(pp, ip) {
        (this.to - pp || this.endSide - ip) < 0 && this.gotoInner(pp, ip, !0)
      }
      next() {
        for (;;) {
          if (this.chunkIndex == this.layer.chunk.length) {
            this.from = this.to = 1e9, this.value = null;
            break
          } {
            let pp = this.layer.chunkPos[this.chunkIndex],
              ip = this.layer.chunk[this.chunkIndex],
              cp = pp + ip.from[this.rangeIndex];
            if (this.from = cp, this.to = pp + ip.to[this.rangeIndex], this.value = ip.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.nOp < 0 || this.value.point && this.to - this.from >= this.nOp) break
          }
        }
      }
      setRangeIndex(pp) {
        if (pp == this.layer.chunk[this.chunkIndex].value.length) {
          if (this.chunkIndex++, this.skip)
            for (; this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]);) this.chunkIndex++;
          this.rangeIndex = 0
        } else this.rangeIndex = pp
      }
      nextChunk() {
        this.chunkIndex++, this.rangeIndex = 0, this.next()
      }
      compare(pp) {
        return this.from - pp.from || this.startSide - pp.startSide || this.rank - pp.rank || this.to - pp.to || this.endSide - pp.endSide
      }
    }
    class Zi {
      constructor(pp) {
        this.heap = pp
      }
      static from(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          Op = [];
        for (let op = 0; op < pp.length; op++)
          for (let Ip = pp[op]; !Ip.wy; Ip = Ip.nextLayer) Ip.aOp >= cp && Op.push(new ri(Ip, ip, cp, op));
        return 1 == Op.length ? Op[0] : new Zi(Op)
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      goto(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        for (let cp of this.heap) cp.goto(pp, ip);
        for (let cp = this.heap.length >> 1; cp >= 0; cp--) zi(this.heap, cp);
        return this.next(), this
      }
      forward(pp, ip) {
        for (let cp of this.heap) cp.forward(pp, ip);
        for (let cp = this.heap.length >> 1; cp >= 0; cp--) zi(this.heap, cp);
        (this.to - pp || this.value.endSide - ip) < 0 && this.next()
      }
      next() {
        if (0 == this.heap.length) this.from = this.to = 1e9, this.value = null, this.rank = -1;
        else {
          let pp = this.heap[0];
          this.from = pp.from, this.to = pp.to, this.value = pp.value, this.rank = pp.rank, pp.value && pp.next(), zi(this.heap, 0)
        }
      }
    }

    function zi(pp, ip) {
      for (let cp = pp[ip];;) {
        let Op = 1 + (ip << 1);
        if (Op >= pp.length) break;
        let op = pp[Op];
        if (Op + 1 < pp.length && op.compare(pp[Op + 1]) >= 0 && (op = pp[Op + 1], Op++), cp.compare(op) < 0) break;
        pp[Op] = cp, pp[ip] = op, ip = Op
      }
    }
    class si {
      constructor(pp, ip, cp) {
        this.nOp = cp, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = Zi.from(pp, ip, cp)
      }
      goto(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.cursor.goto(pp, ip), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = pp, this.endSide = ip, this.openStart = -1, this.next(), this
      }
      forward(pp, ip) {
        for (; this.minActive > -1 && (this.activeTo[this.minActive] - pp || this.active[this.minActive].endSide - ip) < 0;) this.removeActive(this.minActive);
        this.cursor.forward(pp, ip)
      }
      removeActive(pp) {
        pc(this.active, pp), pc(this.activeTo, pp), pc(this.activeRank, pp), this.minActive = cc(this.active, this.activeTo)
      }
      addActive(pp) {
        let ip = 0,
          {
            value: cp,
            to: Op,
            rank: op
          } = this.cursor;
        for (; ip < this.activeRank.length && (op - this.activeRank[ip] || Op - this.activeTo[ip]) > 0;) ip++;
        ic(this.active, ip, cp), ic(this.activeTo, ip, Op), ic(this.activeRank, ip, op), pp && ic(pp, ip, this.cursor.from), this.minActive = cc(this.active, this.activeTo)
      }
      next() {
        let pp = this.to,
          ip = this.point;
        this.point = null;
        let cp = this.openStart < 0 ? [] : null;
        for (;;) {
          let Op = this.minActive;
          if (Op > -1 && (this.activeTo[Op] - this.cursor.from || this.active[Op].endSide - this.cursor.startSide) < 0) {
            if (this.activeTo[Op] > pp) {
              this.to = this.activeTo[Op], this.endSide = this.active[Op].endSide;
              break
            }
            this.removeActive(Op), cp && pc(cp, Op)
          } else {
            if (!this.cursor.value) {
              this.to = this.endSide = 1e9;
              break
            }
            if (this.cursor.from > pp) {
              this.to = this.cursor.from, this.endSide = this.cursor.startSide;
              break
            } {
              let pp = this.cursor.value;
              if (pp.point) {
                if (!(ip && this.cursor.to == this.to && this.cursor.from < this.cursor.to)) {
                  this.point = pp, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = pp.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
                  break
                }
                this.cursor.next()
              } else this.addActive(cp), this.cursor.next()
            }
          }
        }
        if (cp) {
          this.openStart = 0;
          for (let ip = cp.length - 1; ip >= 0 && cp[ip] < pp; ip--) this.openStart++
        }
      }
      activeForPoint(pp) {
        if (!this.active.length) return this.active;
        let ip = [];
        for (let cp = this.active.length - 1; cp >= 0 && !(this.activeRank[cp] < this.pointRank); cp--)(this.activeTo[cp] > pp || this.activeTo[cp] == pp && this.active[cp].endSide >= this.point.endSide) && ip.push(this.active[cp]);
        return ip.reverse()
      }
      openEnd(pp) {
        let ip = 0;
        for (let cp = this.activeTo.length - 1; cp >= 0 && this.activeTo[cp] > pp; cp--) ip++;
        return ip
      }
    }

    function Ki(pp, ip, cp, Op, op, Ip) {
      pp.goto(ip), cp.goto(Op);
      let Sp = Op + op,
        xp = Op,
        Lp = Op - ip,
        Yp = !!Ip.boundChange;
      for (let Dp = !1;;) {
        let ip = pp.to + Lp - cp.to,
          Op = ip || pp.endSide - cp.endSide,
          op = Op < 0 ? pp.to + Lp : cp.to,
          Ap = Math.min(op, Sp);
        if (pp.point || cp.point ? (pp.point && cp.point && fi(pp.point, cp.point) && Vi(pp.activeForPoint(pp.to), cp.activeForPoint(cp.to)) || Ip.comparePoint(xp, Ap, pp.point, cp.point), Dp = !1) : (Dp && Ip.boundChange(xp), Ap > xp && !Vi(pp.active, cp.active) && Ip.compareRange(xp, Ap, pp.active, cp.active), Yp && Ap < Sp && (ip || pp.openEnd(op) != cp.openEnd(op)) && (Dp = !0)), op > Sp) break;
        xp = op, Op <= 0 && pp.next(), Op >= 0 && cp.next()
      }
    }

    function Vi(pp, ip) {
      if (pp.length != ip.length) return !1;
      for (let cp = 0; cp < pp.length; cp++)
        if (pp[cp] != ip[cp] && !fi(pp[cp], ip[cp])) return !1;
      return !0
    }

    function pc(pp, ip) {
      for (let cp = ip, Op = pp.length - 1; cp < Op; cp++) pp[cp] = pp[cp + 1];
      pp.pop()
    }

    function ic(pp, ip, cp) {
      for (let Op = pp.length - 1; Op >= ip; Op--) pp[Op + 1] = pp[Op];
      pp[ip] = cp
    }

    function cc(pp, ip) {
      let cp = -1,
        Op = 1e9;
      for (let op = 0; op < ip.length; op++)(ip[op] - Op || pp[op].endSide - pp[cp].endSide) < 0 && (cp = op, Op = ip[op]);
      return cp
    }

    function Oc(pp, ip) {
      let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : pp.length,
        Op = 0;
      for (let op = 0; op < cp && op < pp.length;) 9 == pp.charCodeAt(op) ? (Op += ip - Op % ip, op++) : (Op++, op = Rp(pp, op));
      return Op
    }

    function oc(pp, ip, cp, Op) {
      for (let op = 0, Ip = 0;;) {
        if (Ip >= ip) return op;
        if (op == pp.length) break;
        Ip += 9 == pp.charCodeAt(op) ? cp - Ip % cp : 1, op = Rp(pp, op)
      }
      return !0 === Op ? -1 : pp.length
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);