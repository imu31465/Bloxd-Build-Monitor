export const id = 286;
export const ids = [286];
export const modules = {
  41273: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => GJ,
      e: () => Sd,
      ChangeSet: () => jd,
      i: () => mJ,
      k: () => Ed,
      l: () => XJ,
      o: () => rd,
      s: () => bd,
      t: () => WJ,
      x: () => EJ,
      v: () => cJ,
      A: () => nJ,
      C: () => qJ,
      E: () => Ad,
      I: () => Od,
      J: () => BJ,
      K: () => Md,
      O: () => Yd,
      R: () => fJ,
      V: () => Jk,
      X: () => ad,
      Z: () => kk,
      _: () => Fd
    });
    let pd = [],
      Nd = [];

    function Wd(dd) {
      if (dd < 768) return !1;
      for (let Jd = 0, kd = pd.length;;) {
        let Wd = Jd + kd >> 1;
        if (dd < pd[Wd]) kd = Wd;
        else {
          if (!(dd >= Nd[Wd])) return !0;
          Jd = Wd + 1
        }
        if (Jd == kd) return !1
      }
    }

    function Pd(dd) {
      return dd >= 127462 && dd <= 127487
    }(() => {
      let dd = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((dd => dd ? parseInt(dd, 36) : 1));
      for (let Jd = 0, kd = 0; Jd < dd.length; Jd++)(Jd % 2 ? Nd : pd).push(kd += dd[Jd])
    })();
    const Zd = 8205;

    function gd(dd, Jd) {
      return (!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2] ? Cd : Kd)(dd, Jd, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function Cd(dd, Jd, kd) {
      if (Jd == dd.length) return Jd;
      Jd && ld(dd.charCodeAt(Jd)) && Qd(dd.charCodeAt(Jd - 1)) && Jd--;
      let pd = od(dd, Jd);
      for (Jd += Ld(pd); Jd < dd.length;) {
        let Nd = od(dd, Jd);
        if (pd == Zd || Nd == Zd || kd && Wd(Nd)) Jd += Ld(Nd), pd = Nd;
        else {
          if (!Pd(Nd)) break;
          {
            let kd = 0,
              pd = Jd - 2;
            for (; pd >= 0 && Pd(od(dd, pd));) kd++, pd -= 2;
            if (kd % 2 == 0) break;
            Jd += 2
          }
        }
      }
      return Jd
    }

    function Kd(dd, Jd, kd) {
      for (; Jd > 0;) {
        let pd = Cd(dd, Jd - 2, kd);
        if (pd < Jd) return pd;
        Jd--
      }
      return 0
    }

    function od(dd, Jd) {
      let kd = dd.charCodeAt(Jd);
      if (!Qd(kd) || Jd + 1 == dd.length) return kd;
      let pd = dd.charCodeAt(Jd + 1);
      return ld(pd) ? pd - 56320 + (kd - 55296 << 10) + 65536 : kd
    }

    function ld(dd) {
      return dd >= 56320 && dd < 57344
    }

    function Qd(dd) {
      return dd >= 55296 && dd < 56320
    }

    function Ld(dd) {
      return dd < 65536 ? 1 : 2
    }
    class Od {
      lineAt(dd) {
        if (dd < 0 || dd > this.length) throw new RangeError(`Invalid position ${dd} in document of length ${this.length}`);
        return this.lineInner(dd, !1, 1, 0)
      }
      line(dd) {
        if (dd < 1 || dd > this.lines) throw new RangeError(`Invalid line number ${dd} in ${this.lines}-line document`);
        return this.lineInner(dd, !0, 1, 0)
      }
      replace(dd, Jd, kd) {
        [dd, Jd] = sd(this, dd, Jd);
        let pd = [];
        return this.decompose(0, dd, pd, 2), kd.length && kd.decompose(0, kd.length, pd, 3), this.decompose(Jd, this.length, pd, 1), Rd.from(pd, this.length - (Jd - dd) + kd.length)
      }
      append(dd) {
        return this.replace(this.length, this.length, dd)
      }
      slice(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        [dd, Jd] = sd(this, dd, Jd);
        let kd = [];
        return this.decompose(dd, Jd, kd, 0), Rd.from(kd, Jd - dd)
      }
      eq(dd) {
        if (dd == this) return !0;
        if (dd.length != this.length || dd.lines != this.lines) return !1;
        let Jd = this.scanIdentical(dd, 1),
          kd = this.length - this.scanIdentical(dd, -1),
          pd = new vd(this),
          Nd = new vd(dd);
        for (let Wd = Jd, Pd = Jd;;) {
          if (pd.next(Wd), Nd.next(Wd), Wd = 0, pd.lineBreak != Nd.lineBreak || pd.done != Nd.done || pd.value != Nd.value) return !1;
          if (Pd += pd.value.length, pd.done || Pd >= kd) return !0
        }
      }
      iter() {
        return new vd(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1)
      }
      iterRange(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        return new xd(this, dd, Jd)
      }
      iterLines(dd, Jd) {
        let kd;
        if (null == dd) kd = this.iter();
        else {
          null == Jd && (Jd = this.lines + 1);
          let pd = this.line(dd).from;
          kd = this.iterRange(pd, Math.max(pd, Jd == this.lines + 1 ? this.length : Jd <= 1 ? 0 : this.line(Jd - 1).to))
        }
        return new qd(kd)
      }
      toString() {
        return this.sliceString(0)
      }
      toJSON() {
        let dd = [];
        return this.flatten(dd), dd
      }
      constructor() {}
      static of (dd) {
        if (0 == dd.length) throw new RangeError("A document must have at least one line");
        return 1 != dd.length || dd[0] ? dd.length <= 32 ? new ed(dd) : Rd.from(ed.split(dd, [])) : Od.empty
      }
    }
    class ed extends Od {
      constructor(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(dd) {
          let Jd = -1;
          for (let kd of dd) Jd += kd.length + 1;
          return Jd
        }(dd);
        super(), this.text = dd, this.length = Jd
      }
      get lines() {
        return this.text.length
      }
      get children() {
        return null
      }
      lineInner(dd, Jd, kd, pd) {
        for (let Nd = 0;; Nd++) {
          let Wd = this.text[Nd],
            Pd = pd + Wd.length;
          if ((Jd ? kd : Pd) >= dd) return new Bd(pd, Pd, kd, Wd);
          pd = Pd + 1, kd++
        }
      }
      decompose(dd, Jd, kd, pd) {
        let Nd = dd <= 0 && Jd >= this.length ? this : new ed(Gd(this.text, dd, Jd), Math.min(Jd, this.length) - Math.max(0, dd));
        if (1 & pd) {
          let dd = kd.pop(),
            Jd = Id(Nd.text, dd.text.slice(), 0, Nd.length);
          if (Jd.length <= 32) kd.push(new ed(Jd, dd.length + Nd.length));
          else {
            let dd = Jd.length >> 1;
            kd.push(new ed(Jd.slice(0, dd)), new ed(Jd.slice(dd)))
          }
        } else kd.push(Nd)
      }
      replace(dd, Jd, kd) {
        if (!(kd instanceof ed)) return super.replace(dd, Jd, kd);
        [dd, Jd] = sd(this, dd, Jd);
        let pd = Id(this.text, Id(kd.text, Gd(this.text, 0, dd)), Jd),
          Nd = this.length + kd.length - (Jd - dd);
        return pd.length <= 32 ? new ed(pd, Nd) : Rd.from(ed.split(pd, []), Nd)
      }
      sliceString(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [dd, Jd] = sd(this, dd, Jd);
        let pd = "";
        for (let Nd = 0, Wd = 0; Nd <= Jd && Wd < this.text.length; Wd++) {
          let Pd = this.text[Wd],
            Zd = Nd + Pd.length;
          Nd > dd && Wd && (pd += kd), dd < Zd && Jd > Nd && (pd += Pd.slice(Math.max(0, dd - Nd), Jd - Nd)), Nd = Zd + 1
        }
        return pd
      }
      flatten(dd) {
        for (let Jd of this.text) dd.push(Jd)
      }
      scanIdentical() {
        return 0
      }
      static split(dd, Jd) {
        let kd = [],
          pd = -1;
        for (let Nd of dd) kd.push(Nd), pd += Nd.length + 1, 32 == kd.length && (Jd.push(new ed(kd, pd)), kd = [], pd = -1);
        return pd > -1 && Jd.push(new ed(kd, pd)), Jd
      }
    }
    class Rd extends Od {
      constructor(dd, Jd) {
        super(), this.children = dd, this.length = Jd, this.lines = 0;
        for (let kd of dd) this.lines += kd.lines
      }
      lineInner(dd, Jd, kd, pd) {
        for (let Nd = 0;; Nd++) {
          let Wd = this.children[Nd],
            Pd = pd + Wd.length,
            Zd = kd + Wd.lines - 1;
          if ((Jd ? Zd : Pd) >= dd) return Wd.lineInner(dd, Jd, kd, pd);
          pd = Pd + 1, kd = Zd + 1
        }
      }
      decompose(dd, Jd, kd, pd) {
        for (let Nd = 0, Wd = 0; Wd <= Jd && Nd < this.children.length; Nd++) {
          let Pd = this.children[Nd],
            Zd = Wd + Pd.length;
          if (dd <= Zd && Jd >= Wd) {
            let Nd = pd & ((Wd <= dd ? 1 : 0) | (Zd >= Jd ? 2 : 0));
            Wd >= dd && Zd <= Jd && !Nd ? kd.push(Pd) : Pd.decompose(dd - Wd, Jd - Wd, kd, Nd)
          }
          Wd = Zd + 1
        }
      }
      replace(dd, Jd, kd) {
        if ([dd, Jd] = sd(this, dd, Jd), kd.lines < this.lines)
          for (let pd = 0, Nd = 0; pd < this.children.length; pd++) {
            let Wd = this.children[pd],
              Pd = Nd + Wd.length;
            if (dd >= Nd && Jd <= Pd) {
              let Zd = Wd.replace(dd - Nd, Jd - Nd, kd),
                gd = this.lines - Wd.lines + Zd.lines;
              if (Zd.lines < gd >> 4 && Zd.lines > gd >> 6) {
                let Nd = this.children.slice();
                return Nd[pd] = Zd, new Rd(Nd, this.length - (Jd - dd) + kd.length)
              }
              return super.replace(Nd, Pd, Zd)
            }
            Nd = Pd + 1
          }
        return super.replace(dd, Jd, kd)
      }
      sliceString(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [dd, Jd] = sd(this, dd, Jd);
        let pd = "";
        for (let Nd = 0, Wd = 0; Nd < this.children.length && Wd <= Jd; Nd++) {
          let Pd = this.children[Nd],
            Zd = Wd + Pd.length;
          Wd > dd && Nd && (pd += kd), dd < Zd && Jd > Wd && (pd += Pd.sliceString(dd - Wd, Jd - Wd, kd)), Wd = Zd + 1
        }
        return pd
      }
      flatten(dd) {
        for (let Jd of this.children) Jd.flatten(dd)
      }
      scanIdentical(dd, Jd) {
        if (!(dd instanceof Rd)) return 0;
        let kd = 0,
          [pd, Nd, Wd, Pd] = Jd > 0 ? [0, 0, this.children.length, dd.children.length] : [this.children.length - 1, dd.children.length - 1, -1, -1];
        for (;; pd += Jd, Nd += Jd) {
          if (pd == Wd || Nd == Pd) return kd;
          let Zd = this.children[pd],
            gd = dd.children[Nd];
          if (Zd != gd) return kd + Zd.scanIdentical(gd, Jd);
          kd += Zd.length + 1
        }
      }
      static from(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dd.reduce(((dd, Jd) => dd + Jd.length + 1), -1),
          kd = 0;
        for (let ld of dd) kd += ld.lines;
        if (kd < 32) {
          let kd = [];
          for (let Jd of dd) Jd.flatten(kd);
          return new ed(kd, Jd)
        }
        let pd = Math.max(32, kd >> 5),
          Nd = pd << 1,
          Wd = pd >> 1,
          Pd = [],
          Zd = 0,
          gd = -1,
          Cd = [];

        function Kd(dd) {
          let Jd;
          if (dd.lines > Nd && dd instanceof Rd)
            for (let kd of dd.children) Kd(kd);
          else dd.lines > Wd && (Zd > Wd || !Zd) ? (od(), Pd.push(dd)) : dd instanceof ed && Zd && (Jd = Cd[Cd.length - 1]) instanceof ed && dd.lines + Jd.lines <= 32 ? (Zd += dd.lines, gd += dd.length + 1, Cd[Cd.length - 1] = new ed(Jd.text.concat(dd.text), Jd.length + 1 + dd.length)) : (Zd + dd.lines > pd && od(), Zd += dd.lines, gd += dd.length + 1, Cd.push(dd))
        }

        function od() {
          0 != Zd && (Pd.push(1 == Cd.length ? Cd[0] : Rd.from(Cd, gd)), gd = -1, Zd = Cd.length = 0)
        }
        for (let ld of dd) Kd(ld);
        return od(), 1 == Pd.length ? Pd[0] : new Rd(Pd, Jd)
      }
    }

    function Id(dd, Jd) {
      let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e9;
      for (let Nd = 0, Wd = 0, Pd = !0; Wd < dd.length && Nd <= pd; Wd++) {
        let Zd = dd[Wd],
          gd = Nd + Zd.length;
        gd >= kd && (gd > pd && (Zd = Zd.slice(0, pd - Nd)), Nd < kd && (Zd = Zd.slice(kd - Nd)), Pd ? (Jd[Jd.length - 1] += Zd, Pd = !1) : Jd.push(Zd)), Nd = gd + 1
      }
      return Jd
    }

    function Gd(dd, Jd, kd) {
      return Id(dd, [""], Jd, kd)
    }
    Od.empty = new ed([""], 0);
    class vd {
      constructor(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.dir = Jd, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [dd], this.offsets = [Jd > 0 ? 1 : (dd instanceof ed ? dd.text.length : dd.children.length) << 1]
      }
      nextInner(dd, Jd) {
        for (this.done = this.lineBreak = !1;;) {
          let kd = this.nodes.length - 1,
            pd = this.nodes[kd],
            Nd = this.offsets[kd],
            Wd = Nd >> 1,
            Pd = pd instanceof ed ? pd.text.length : pd.children.length;
          if (Wd == (Jd > 0 ? Pd : 0)) {
            if (0 == kd) return this.done = !0, this.value = "", this;
            Jd > 0 && this.offsets[kd - 1]++, this.nodes.pop(), this.offsets.pop()
          } else if ((1 & Nd) == (Jd > 0 ? 0 : 1)) {
            if (this.offsets[kd] += Jd, 0 == dd) return this.lineBreak = !0, this.value = "\n", this;
            dd--
          } else if (pd instanceof ed) {
            let Nd = pd.text[Wd + (Jd < 0 ? -1 : 0)];
            if (this.offsets[kd] += Jd, Nd.length > Math.max(0, dd)) return this.value = 0 == dd ? Nd : Jd > 0 ? Nd.slice(dd) : Nd.slice(0, Nd.length - dd), this;
            dd -= Nd.length
          } else {
            let Nd = pd.children[Wd + (Jd < 0 ? -1 : 0)];
            dd > Nd.length ? (dd -= Nd.length, this.offsets[kd] += Jd) : (Jd < 0 && this.offsets[kd]--, this.nodes.push(Nd), this.offsets.push(Jd > 0 ? 1 : (Nd instanceof ed ? Nd.text.length : Nd.children.length) << 1))
          }
        }
      }
      next() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return dd < 0 && (this.nextInner(-dd, -this.dir), dd = this.value.length), this.nextInner(dd, this.dir)
      }
    }
    class xd {
      constructor(dd, Jd, kd) {
        this.value = "", this.done = !1, this.cursor = new vd(dd, Jd > kd ? -1 : 1), this.pos = Jd > kd ? dd.length : 0, this.from = Math.min(Jd, kd), this.to = Math.max(Jd, kd)
      }
      nextInner(dd, Jd) {
        if (Jd < 0 ? this.pos <= this.from : this.pos >= this.to) return this.value = "", this.done = !0, this;
        dd += Math.max(0, Jd < 0 ? this.pos - this.to : this.from - this.pos);
        let kd = Jd < 0 ? this.pos - this.from : this.to - this.pos;
        dd > kd && (dd = kd), kd -= dd;
        let {
          value: pd
        } = this.cursor.next(dd);
        return this.pos += (pd.length + dd) * Jd, this.value = pd.length <= kd ? pd : Jd < 0 ? pd.slice(pd.length - kd) : pd.slice(0, kd), this.done = !this.value, this
      }
      next() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return dd < 0 ? dd = Math.max(dd, this.from - this.pos) : dd > 0 && (dd = Math.min(dd, this.to - this.pos)), this.nextInner(dd, this.cursor.dir)
      }
      get lineBreak() {
        return this.cursor.lineBreak && "" != this.value
      }
    }
    class qd {
      constructor(dd) {
        this.inner = dd, this.afterBreak = !0, this.value = "", this.done = !1
      }
      next() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          {
            done: Jd,
            lineBreak: kd,
            value: pd
          } = this.inner.next(dd);
        return Jd && this.afterBreak ? (this.value = "", this.afterBreak = !1) : Jd ? (this.done = !0, this.value = "") : kd ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = pd, this.afterBreak = !1), this
      }
      get lineBreak() {
        return !1
      }
    }
    "undefined" != typeof Symbol && (Od.prototype[Symbol.iterator] = function() {
      return this.iter()
    }, vd.prototype[Symbol.iterator] = xd.prototype[Symbol.iterator] = qd.prototype[Symbol.iterator] = function() {
      return this
    });
    class Bd {
      constructor(dd, Jd, kd, pd) {
        this.from = dd, this.to = Jd, this.number = kd, this.text = pd
      }
      get length() {
        return this.to - this.from
      }
    }

    function sd(dd, Jd, kd) {
      return [Jd = Math.max(0, Math.min(dd.length, Jd)), Math.max(Jd, Math.min(dd.length, kd))]
    }

    function ad(dd, Jd) {
      return gd(dd, Jd, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function Md(dd, Jd) {
      let kd = dd.charCodeAt(Jd);
      if (!((pd = kd) >= 55296 && pd < 56320) || Jd + 1 == dd.length) return kd;
      var pd;
      let Nd = dd.charCodeAt(Jd + 1);
      return function(dd) {
        return dd >= 56320 && dd < 57344
      }(Nd) ? Nd - 56320 + (kd - 55296 << 10) + 65536 : kd
    }

    function Fd(dd) {
      return dd <= 65535 ? String.fromCharCode(dd) : (dd -= 65536, String.fromCharCode(55296 + (dd >> 10), 56320 + (1023 & dd)))
    }

    function Yd(dd) {
      return dd < 65536 ? 1 : 2
    }
    const md = /\r\n?|\n/;
    var bd = function(dd) {
      return dd[dd.Simple = 0] = "Simple", dd[dd.TrackDel = 1] = "TrackDel", dd[dd.TrackBefore = 2] = "TrackBefore", dd[dd.TrackAfter = 3] = "TrackAfter", dd
    }(bd || (bd = {}));
    class Sd {
      constructor(dd) {
        this.sections = dd
      }
      get length() {
        let dd = 0;
        for (let Jd = 0; Jd < this.sections.length; Jd += 2) dd += this.sections[Jd];
        return dd
      }
      get newLength() {
        let dd = 0;
        for (let Jd = 0; Jd < this.sections.length; Jd += 2) {
          let kd = this.sections[Jd + 1];
          dd += kd < 0 ? this.sections[Jd] : kd
        }
        return dd
      }
      get empty() {
        return 0 == this.sections.length || 2 == this.sections.length && this.sections[1] < 0
      }
      iterGaps(dd) {
        for (let Jd = 0, kd = 0, pd = 0; Jd < this.sections.length;) {
          let Nd = this.sections[Jd++],
            Wd = this.sections[Jd++];
          Wd < 0 ? (dd(kd, pd, Nd), pd += Nd) : pd += Wd, kd += Nd
        }
      }
      iterChangedRanges(dd) {
        nd(this, dd, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get invertedDesc() {
        let dd = [];
        for (let Jd = 0; Jd < this.sections.length;) {
          let kd = this.sections[Jd++],
            pd = this.sections[Jd++];
          pd < 0 ? dd.push(kd, pd) : dd.push(pd, kd)
        }
        return new Sd(dd)
      }
      composeDesc(dd) {
        return this.empty ? dd : dd.empty ? this : yd(this, dd)
      }
      mapDesc(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return dd.empty ? this : Ud(this, dd, Jd)
      }
      mapPos(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : bd.Simple,
          pd = 0,
          Nd = 0;
        for (let Wd = 0; Wd < this.sections.length;) {
          let Pd = this.sections[Wd++],
            Zd = this.sections[Wd++],
            gd = pd + Pd;
          if (Zd < 0) {
            if (gd > dd) return Nd + (dd - pd);
            Nd += Pd
          } else {
            if (kd != bd.Simple && gd >= dd && (kd == bd.TrackDel && pd < dd && gd > dd || kd == bd.TrackBefore && pd < dd || kd == bd.TrackAfter && gd > dd)) return null;
            if (gd > dd || gd == dd && Jd < 0 && !Pd) return dd == pd || Jd < 0 ? Nd : Nd + Zd;
            Nd += Zd
          }
          pd = gd
        }
        if (dd > pd) throw new RangeError(`Position ${dd} is out of range for changeset of length ${pd}`);
        return Nd
      }
      touchesRange(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dd;
        for (let kd = 0, pd = 0; kd < this.sections.length && pd <= Jd;) {
          let Nd = pd + this.sections[kd++];
          if (this.sections[kd++] >= 0 && pd <= Jd && Nd >= dd) return !(pd < dd && Nd > Jd) || "cover";
          pd = Nd
        }
        return !1
      }
      toString() {
        let dd = "";
        for (let Jd = 0; Jd < this.sections.length;) {
          let kd = this.sections[Jd++],
            pd = this.sections[Jd++];
          dd += (dd ? " " : "") + kd + (pd >= 0 ? ":" + pd : "")
        }
        return dd
      }
      toJSON() {
        return this.sections
      }
      static fromJSON(dd) {
        if (!Array.isArray(dd) || dd.length % 2 || dd.some((dd => "number" != typeof dd))) throw new RangeError("Invalid JSON representation of ChangeDesc");
        return new Sd(dd)
      }
      static create(dd) {
        return new Sd(dd)
      }
    }
    class jd extends Sd {
      constructor(dd, Jd) {
        super(dd), this.inserted = Jd
      }
      apply(dd) {
        if (this.length != dd.length) throw new RangeError("Applying change set to a document with the wrong length");
        return nd(this, ((Jd, kd, pd, Nd, Wd) => dd = dd.replace(pd, pd + (kd - Jd), Wd)), !1), dd
      }
      mapDesc(dd) {
        return Ud(this, dd, arguments.length > 1 && void 0 !== arguments[1] && arguments[1], !0)
      }
      invert(dd) {
        let Jd = this.sections.slice(),
          kd = [];
        for (let pd = 0, Nd = 0; pd < Jd.length; pd += 2) {
          let Wd = Jd[pd],
            Pd = Jd[pd + 1];
          if (Pd >= 0) {
            Jd[pd] = Pd, Jd[pd + 1] = Wd;
            let Zd = pd >> 1;
            for (; kd.length < Zd;) kd.push(Od.empty);
            kd.push(Wd ? dd.slice(Nd, Nd + Wd) : Od.empty)
          }
          Nd += Wd
        }
        return new jd(Jd, kd)
      }
      compose(dd) {
        return this.empty ? dd : dd.empty ? this : yd(this, dd, !0)
      }
      map(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return dd.empty ? this : Ud(this, dd, Jd, !0)
      }
      iterChanges(dd) {
        nd(this, dd, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get desc() {
        return Sd.create(this.sections)
      }
      filter(dd) {
        let Jd = [],
          kd = [],
          pd = [],
          Nd = new Dd(this);
        dd: for (let Wd = 0, Pd = 0;;) {
          let Zd = Wd == dd.length ? 1e9 : dd[Wd++];
          for (; Pd < Zd || Pd == Zd && 0 == Nd.len;) {
            if (Nd.done) break dd;
            let dd = Math.min(Nd.len, Zd - Pd);
            Xd(pd, dd, -1);
            let Wd = -1 == Nd.ins ? -1 : 0 == Nd.off ? Nd.ins : 0;
            Xd(Jd, dd, Wd), Wd > 0 && fd(kd, Jd, Nd.text), Nd.forward(dd), Pd += dd
          }
          let gd = dd[Wd++];
          for (; Pd < gd;) {
            if (Nd.done) break dd;
            let dd = Math.min(Nd.len, gd - Pd);
            Xd(Jd, dd, -1), Xd(pd, dd, -1 == Nd.ins ? -1 : 0 == Nd.off ? Nd.ins : 0), Nd.forward(dd), Pd += dd
          }
        }
        return {
          changes: new jd(Jd, kd),
          filtered: Sd.create(pd)
        }
      }
      toJSON() {
        let dd = [];
        for (let Jd = 0; Jd < this.sections.length; Jd += 2) {
          let kd = this.sections[Jd],
            pd = this.sections[Jd + 1];
          pd < 0 ? dd.push(kd) : 0 == pd ? dd.push([kd]) : dd.push([kd].concat(this.inserted[Jd >> 1].toJSON()))
        }
        return dd
      }
      static of (dd, Jd, kd) {
        let pd = [],
          Nd = [],
          Wd = 0,
          Pd = null;

        function Zd() {
          if (!(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && !pd.length) return;
          Wd < Jd && Xd(pd, Jd - Wd, -1);
          let dd = new jd(pd, Nd);
          Pd = Pd ? Pd.compose(dd.map(Pd)) : dd, pd = [], Nd = [], Wd = 0
        }
        return function dd(gd) {
          if (Array.isArray(gd))
            for (let Jd of gd) dd(Jd);
          else if (gd instanceof jd) {
            if (gd.length != Jd) throw new RangeError(`Mismatched change set length (got ${gd.length}, expected ${Jd})`);
            Zd(), Pd = Pd ? Pd.compose(gd.map(Pd)) : gd
          } else {
            let {
              from: dd,
              to: Pd = dd,
              insert: Cd
            } = gd;
            if (dd > Pd || dd < 0 || Pd > Jd) throw new RangeError(`Invalid change range ${dd} to ${Pd} (in doc of length ${Jd})`);
            let Kd = Cd ? "string" == typeof Cd ? Od.of(Cd.split(kd || md)) : Cd : Od.empty,
              od = Kd.length;
            if (dd == Pd && 0 == od) return;
            dd < Wd && Zd(), dd > Wd && Xd(pd, dd - Wd, -1), Xd(pd, Pd - dd, od), fd(Nd, pd, Kd), Wd = Pd
          }
        }(dd), Zd(!Pd), Pd
      }
      static empty(dd) {
        return new jd(dd ? [dd, -1] : [], [])
      }
      static fromJSON(dd) {
        if (!Array.isArray(dd)) throw new RangeError("Invalid JSON representation of ChangeSet");
        let Jd = [],
          kd = [];
        for (let pd = 0; pd < dd.length; pd++) {
          let Nd = dd[pd];
          if ("number" == typeof Nd) Jd.push(Nd, -1);
          else {
            if (!Array.isArray(Nd) || "number" != typeof Nd[0] || Nd.some(((dd, Jd) => Jd && "string" != typeof dd))) throw new RangeError("Invalid JSON representation of ChangeSet");
            if (1 == Nd.length) Jd.push(Nd[0], 0);
            else {
              for (; kd.length < pd;) kd.push(Od.empty);
              kd[pd] = Od.of(Nd.slice(1)), Jd.push(Nd[0], kd[pd].length)
            }
          }
        }
        return new jd(Jd, kd)
      }
      static createSet(dd, Jd) {
        return new jd(dd, Jd)
      }
    }

    function Xd(dd, Jd, kd) {
      let pd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (0 == Jd && kd <= 0) return;
      let Nd = dd.length - 2;
      Nd >= 0 && kd <= 0 && kd == dd[Nd + 1] ? dd[Nd] += Jd : Nd >= 0 && 0 == Jd && 0 == dd[Nd] ? dd[Nd + 1] += kd : pd ? (dd[Nd] += Jd, dd[Nd + 1] += kd) : dd.push(Jd, kd)
    }

    function fd(dd, Jd, kd) {
      if (0 == kd.length) return;
      let pd = Jd.length - 2 >> 1;
      if (pd < dd.length) dd[dd.length - 1] = dd[dd.length - 1].append(kd);
      else {
        for (; dd.length < pd;) dd.push(Od.empty);
        dd.push(kd)
      }
    }

    function nd(dd, Jd, kd) {
      let pd = dd.inserted;
      for (let Nd = 0, Wd = 0, Pd = 0; Pd < dd.sections.length;) {
        let Zd = dd.sections[Pd++],
          gd = dd.sections[Pd++];
        if (gd < 0) Nd += Zd, Wd += Zd;
        else {
          let Cd = Nd,
            Kd = Wd,
            od = Od.empty;
          for (; Cd += Zd, Kd += gd, gd && pd && (od = od.append(pd[Pd - 2 >> 1])), !(kd || Pd == dd.sections.length || dd.sections[Pd + 1] < 0);) Zd = dd.sections[Pd++], gd = dd.sections[Pd++];
          Jd(Nd, Cd, Wd, Kd, od), Nd = Cd, Wd = Kd
        }
      }
    }

    function Ud(dd, Jd, kd) {
      let pd = [],
        Nd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3] ? [] : null,
        Wd = new Dd(dd),
        Pd = new Dd(Jd),
        Zd = 0;
      for (let gd = -1;;) {
        if (++Zd > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - likely malformed ChangeSet");
        if (Wd.done && Pd.len || Pd.done && Wd.len) throw new Error("Mismatched change set lengths");
        if (-1 == Wd.ins && -1 == Pd.ins) {
          let dd = Math.min(Wd.len, Pd.len);
          Xd(pd, dd, -1), Wd.forward(dd), Pd.forward(dd)
        } else if (Pd.ins >= 0 && (Wd.ins < 0 || gd == Wd.i || 0 == Wd.off && (Pd.len < Wd.len || Pd.len == Wd.len && !kd))) {
          let dd = Pd.len;
          for (Xd(pd, Pd.ins, -1); dd;) {
            if (++Zd > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-b");
            let Jd = Math.min(Wd.len, dd);
            Wd.ins >= 0 && gd < Wd.i && Wd.len <= Jd && (Xd(pd, 0, Wd.ins), Nd && fd(Nd, pd, Wd.text), gd = Wd.i), Wd.forward(Jd), dd -= Jd
          }
          Pd.next()
        } else {
          if (!(Wd.ins >= 0)) {
            if (Wd.done && Pd.done) return Nd ? jd.createSet(pd, Nd) : Sd.create(pd);
            throw new Error("Mismatched change set lengths")
          } {
            let dd = 0,
              Jd = Wd.len;
            for (; Jd;) {
              if (++Zd > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-a");
              if (-1 == Pd.ins) {
                let kd = Math.min(Jd, Pd.len);
                dd += kd, Jd -= kd, Pd.forward(kd)
              } else {
                if (!(0 == Pd.ins && Pd.len < Jd)) break;
                Jd -= Pd.len, Pd.next()
              }
            }
            Xd(pd, dd, gd < Wd.i ? Wd.ins : 0), Nd && gd < Wd.i && fd(Nd, pd, Wd.text), gd = Wd.i, Wd.forward(Wd.len - Jd)
          }
        }
      }
    }

    function yd(dd, Jd) {
      let kd = [],
        pd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? [] : null,
        Nd = new Dd(dd),
        Wd = new Dd(Jd),
        Pd = 0;
      for (let Zd = !1;;) {
        if (++Pd > 2e6) throw new Error("BLOXD CODEMIRROR: composeSets exceeded max iterations - likely malformed ChangeSet");
        if (Nd.done && Wd.done) return pd ? jd.createSet(kd, pd) : Sd.create(kd);
        if (0 == Nd.ins) Xd(kd, Nd.len, 0, Zd), Nd.next();
        else if (0 != Wd.len || Wd.done) {
          if (Nd.done || Wd.done) throw new Error("Mismatched change set lengths");
          {
            let dd = Math.min(Nd.len2, Wd.len),
              Jd = kd.length;
            if (-1 == Nd.ins) {
              let Jd = -1 == Wd.ins ? -1 : Wd.off ? 0 : Wd.ins;
              Xd(kd, dd, Jd, Zd), pd && Jd && fd(pd, kd, Wd.text)
            } else - 1 == Wd.ins ? (Xd(kd, Nd.off ? 0 : Nd.len, dd, Zd), pd && fd(pd, kd, Nd.textBit(dd))) : (Xd(kd, Nd.off ? 0 : Nd.len, Wd.off ? 0 : Wd.ins, Zd), pd && !Wd.off && fd(pd, kd, Wd.text));
            Zd = (Nd.ins > dd || Wd.ins >= 0 && Wd.len > dd) && (Zd || kd.length > Jd), Nd.forward2(dd), Wd.forward(dd)
          }
        } else Xd(kd, 0, Wd.ins, Zd), pd && fd(pd, kd, Wd.text), Wd.next()
      }
    }
    class Dd {
      constructor(dd) {
        this.set = dd, this.i = 0, this.next()
      }
      next() {
        let {
          sections: dd
        } = this.set;
        this.i < dd.length ? (this.len = dd[this.i++], this.ins = dd[this.i++]) : (this.len = 0, this.ins = -2), this.off = 0
      }
      get done() {
        return -2 == this.ins
      }
      get len2() {
        return this.ins < 0 ? this.len : this.ins
      }
      get text() {
        let {
          inserted: dd
        } = this.set, Jd = this.i - 2 >> 1;
        return Jd >= dd.length ? Od.empty : dd[Jd]
      }
      textBit(dd) {
        let {
          inserted: Jd
        } = this.set, kd = this.i - 2 >> 1;
        return kd >= Jd.length && !dd ? Od.empty : Jd[kd].slice(this.off, null == dd ? void 0 : this.off + dd)
      }
      forward(dd) {
        dd == this.len ? this.next() : (this.len -= dd, this.off += dd)
      }
      forward2(dd) {
        -1 == this.ins ? this.forward(dd) : dd == this.ins ? this.next() : (this.ins -= dd, this.off += dd)
      }
    }
    class Td {
      constructor(dd, Jd, kd) {
        this.from = dd, this.to = Jd, this.flags = kd
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
        let dd = 7 & this.flags;
        return 7 == dd ? null : dd
      }
      get goalColumn() {
        let dd = this.flags >> 6;
        return 16777215 == dd ? void 0 : dd
      }
      map(dd) {
        let Jd, kd, pd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return this.empty ? Jd = kd = dd.mapPos(this.from, pd) : (Jd = dd.mapPos(this.from, 1), kd = dd.mapPos(this.to, -1)), Jd == this.from && kd == this.to ? this : new Td(Jd, kd, this.flags)
      }
      extend(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dd,
          kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (dd <= this.anchor && Jd >= this.anchor) return Ed.range(dd, Jd, void 0, void 0, kd);
        let pd = Math.abs(dd - this.anchor) > Math.abs(Jd - this.anchor) ? dd : Jd;
        return Ed.range(this.anchor, pd, void 0, void 0, kd)
      }
      eq(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.anchor == dd.anchor && this.head == dd.head && this.goalColumn == dd.goalColumn && (!Jd || !this.empty || this.assoc == dd.assoc)
      }
      toJSON() {
        return {
          anchor: this.anchor,
          head: this.head
        }
      }
      static fromJSON(dd) {
        if (!dd || "number" != typeof dd.anchor || "number" != typeof dd.head) throw new RangeError("Invalid JSON representation for SelectionRange");
        return Ed.range(dd.anchor, dd.head)
      }
      static create(dd, Jd, kd) {
        return new Td(dd, Jd, kd)
      }
    }
    class Ed {
      constructor(dd, Jd) {
        this.UO = dd, this.mainIndex = Jd
      }
      map(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return dd.empty ? this : Ed.create(this.UO.map((kd => kd.map(dd, Jd))), this.mainIndex)
      }
      eq(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.UO.length != dd.UO.length || this.mainIndex != dd.mainIndex) return !1;
        for (let kd = 0; kd < this.UO.length; kd++)
          if (!this.UO[kd].eq(dd.UO[kd], Jd)) return !1;
        return !0
      }
      get main() {
        return this.UO[this.mainIndex]
      }
      asSingle() {
        return 1 == this.UO.length ? this : new Ed([this.main], 0)
      }
      addRange(dd) {
        let Jd = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return Ed.create([dd].concat(this.UO), Jd ? 0 : this.mainIndex + 1)
      }
      replaceRange(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.mainIndex,
          kd = this.UO.slice();
        return kd[Jd] = dd, Ed.create(kd, this.mainIndex)
      }
      toJSON() {
        return {
          UO: this.UO.map((dd => dd.toJSON())),
          main: this.mainIndex
        }
      }
      static fromJSON(dd) {
        if (!dd || !Array.isArray(dd.UO) || "number" != typeof dd.main || dd.main >= dd.UO.length) throw new RangeError("Invalid JSON representation for EditorSelection");
        return new Ed(dd.UO.map((dd => Td.fromJSON(dd))), dd.main)
      }
      static single(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dd;
        return new Ed([Ed.range(dd, Jd)], 0)
      }
      static create(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (0 == dd.length) throw new RangeError("A selection needs at least one range");
        for (let kd = 0, pd = 0; pd < dd.length; pd++) {
          let Nd = dd[pd];
          if (Nd.empty ? Nd.from <= kd : Nd.from < kd) return Ed.normalized(dd.slice(), Jd);
          kd = Nd.to
        }
        return new Ed(dd, Jd)
      }
      static cursor(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          kd = arguments.length > 2 ? arguments[2] : void 0,
          pd = arguments.length > 3 ? arguments[3] : void 0;
        return Td.create(dd, dd, (0 == Jd ? 0 : Jd < 0 ? 8 : 16) | (null == kd ? 7 : Math.min(6, kd)) | (null !== pd && void 0 !== pd ? pd : 16777215) << 6)
      }
      static range(dd, Jd, kd, pd, Nd) {
        let Wd = (null !== kd && void 0 !== kd ? kd : 16777215) << 6 | (null == pd ? 7 : Math.min(6, pd));
        return Nd || dd == Jd || (Nd = Jd < dd ? 1 : -1), Jd < dd ? Td.create(Jd, dd, 48 | Wd) : Td.create(dd, Jd, (Nd ? Nd < 0 ? 8 : 16 : 0) | Wd)
      }
      static normalized(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          kd = dd[Jd];
        dd.sort(((dd, Jd) => dd.from - Jd.from)), Jd = dd.indexOf(kd);
        for (let pd = 1; pd < dd.length; pd++) {
          let kd = dd[pd],
            Nd = dd[pd - 1];
          if (kd.empty ? kd.from <= Nd.to : kd.from < Nd.to) {
            let Wd = Nd.from,
              Pd = Math.max(kd.to, Nd.to);
            pd <= Jd && Jd--, dd.splice(--pd, 2, kd.anchor > kd.head ? Ed.range(Pd, Wd) : Ed.range(Wd, Pd))
          }
        }
        return new Ed(dd, Jd)
      }
    }

    function cd(dd, Jd) {
      for (let kd of dd.UO)
        if (kd.to > Jd) throw new RangeError("Selection points outside of document")
    }
    let hd = 0;
    class rd {
      constructor(dd, Jd, kd, pd, Nd) {
        this.combine = dd, this.compareInput = Jd, this.compare = kd, this.isStatic = pd, this.id = hd++, this.default = dd([]), this.extensions = "function" == typeof Nd ? Nd(this) : Nd
      }
      get reader() {
        return this
      }
      static define() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return new rd(dd.combine || (dd => dd), dd.compareInput || ((dd, Jd) => dd === Jd), dd.compare || (dd.combine ? (dd, Jd) => dd === Jd : ud), !!dd.static, dd.enables)
      }
      of(dd) {
        return new td([], this, 0, dd)
      }
      compute(dd, Jd) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new td(dd, this, 1, Jd)
      }
      computeN(dd, Jd) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new td(dd, this, 2, Jd)
      }
      from(dd, Jd) {
        return Jd || (Jd = dd => dd), this.compute([dd], (kd => Jd(kd.field(dd))))
      }
    }

    function ud(dd, Jd) {
      return dd == Jd || dd.length == Jd.length && dd.every(((dd, kd) => dd === Jd[kd]))
    }
    class td {
      constructor(dd, Jd, kd, pd) {
        this.dependencies = dd, this.facet = Jd, this.type = kd, this.value = pd, this.id = hd++
      }
      dynamicSlot(dd) {
        var Jd;
        let kd = this.value,
          pd = this.facet.compareInput,
          Nd = this.id,
          Wd = dd[Nd] >> 1,
          Pd = 2 == this.type,
          Zd = !1,
          gd = !1,
          Cd = [];
        for (let Kd of this.dependencies) "doc" == Kd ? Zd = !0 : "selection" == Kd ? gd = !0 : 0 == (1 & (null !== (Jd = dd[Kd.id]) && void 0 !== Jd ? Jd : 1)) && Cd.push(dd[Kd.id]);
        return {
          create: dd => (dd.values[Wd] = kd(dd), 1),
          update(dd, Jd) {
            if (Zd && Jd.docChanged || gd && (Jd.docChanged || Jd.selection) || zd(dd, Cd)) {
              let Jd = kd(dd);
              if (Pd ? !Vd(Jd, dd.values[Wd], pd) : !pd(Jd, dd.values[Wd])) return dd.values[Wd] = Jd, 1
            }
            return 0
          },
          reconfigure: (dd, Jd) => {
            let Zd, gd = Jd.config.address[Nd];
            if (null != gd) {
              let Nd = oJ(Jd, gd);
              if (this.dependencies.every((kd => kd instanceof rd ? Jd.facet(kd) === dd.facet(kd) : !(kd instanceof Ad) || Jd.field(kd, !1) == dd.field(kd, !1))) || (Pd ? Vd(Zd = kd(dd), Nd, pd) : pd(Zd = kd(dd), Nd))) return dd.values[Wd] = Nd, 0
            } else Zd = kd(dd);
            return dd.values[Wd] = Zd, 1
          }
        }
      }
    }

    function Vd(dd, Jd, kd) {
      if (dd.length != Jd.length) return !1;
      for (let pd = 0; pd < dd.length; pd++)
        if (!kd(dd[pd], Jd[pd])) return !1;
      return !0
    }

    function zd(dd, Jd) {
      let kd = !1;
      for (let pd of Jd) 1 & KJ(dd, pd) && (kd = !0);
      return kd
    }

    function Hd(dd, Jd, kd) {
      let pd = kd.map((Jd => dd[Jd.id])),
        Nd = kd.map((dd => dd.type)),
        Wd = pd.filter((dd => !(1 & dd))),
        Pd = dd[Jd.id] >> 1;

      function Zd(dd) {
        let kd = [];
        for (let Jd = 0; Jd < pd.length; Jd++) {
          let Wd = oJ(dd, pd[Jd]);
          if (2 == Nd[Jd])
            for (let dd of Wd) kd.push(dd);
          else kd.push(Wd)
        }
        return Jd.combine(kd)
      }
      return {
        create(dd) {
          for (let Jd of pd) KJ(dd, Jd);
          return dd.values[Pd] = Zd(dd), 1
        },
        update(dd, kd) {
          if (!zd(dd, Wd)) return 0;
          let pd = Zd(dd);
          return Jd.compare(pd, dd.values[Pd]) ? 0 : (dd.values[Pd] = pd, 1)
        },
        reconfigure(dd, Nd) {
          let Wd = zd(dd, pd),
            gd = Nd.config.facets[Jd.id],
            Cd = Nd.facet(Jd);
          if (gd && !Wd && ud(kd, gd)) return dd.values[Pd] = Cd, 0;
          let Kd = Zd(dd);
          return Jd.compare(Kd, Cd) ? (dd.values[Pd] = Cd, 0) : (dd.values[Pd] = Kd, 1)
        }
      }
    }
    const wd = rd.define({
      static: !0
    });
    class Ad {
      constructor(dd, Jd, kd, pd, Nd) {
        this.id = dd, this.createF = Jd, this.updateF = kd, this.compareF = pd, this.spec = Nd, this.provides = void 0
      }
      static define(dd) {
        let Jd = new Ad(hd++, dd.create, dd.update, dd.compare || ((dd, Jd) => dd === Jd), dd);
        return dd.provide && (Jd.provides = dd.provide(Jd)), Jd
      }
      create(dd) {
        let Jd = dd.facet(wd).find((dd => dd.field == this));
        return ((null === Jd || void 0 === Jd ? void 0 : Jd.create) || this.createF)(dd)
      }
      slot(dd) {
        let Jd = dd[this.id] >> 1;
        return {
          create: dd => (dd.values[Jd] = this.create(dd), 1),
          update: (dd, kd) => {
            let pd = dd.values[Jd],
              Nd = this.updateF(pd, kd);
            return this.compareF(pd, Nd) ? 0 : (dd.values[Jd] = Nd, 1)
          },
          reconfigure: (dd, kd) => {
            let pd, Nd = dd.facet(wd),
              Wd = kd.facet(wd);
            return (pd = Nd.find((dd => dd.field == this))) && pd != Wd.find((dd => dd.field == this)) ? (dd.values[Jd] = pd.create(dd), 1) : null != kd.config.address[this.id] ? (dd.values[Jd] = kd.field(this), 0) : (dd.values[Jd] = this.create(dd), 1)
          }
        }
      }
      init(dd) {
        return [this, wd.of({
          field: this,
          create: dd
        })]
      }
      get extension() {
        return this
      }
    }
    const dJ = 4,
      JJ = 3,
      kJ = 2,
      pJ = 1;

    function NJ(dd) {
      return Jd => new PJ(Jd, dd)
    }
    const WJ = {
      highest: NJ(0),
      high: NJ(pJ),
      default: NJ(kJ),
      low: NJ(JJ),
      lowest: NJ(dJ)
    };
    class PJ {
      constructor(dd, Jd) {
        this.inner = dd, this.prec = Jd
      }
    }
    class ZJ {
      of(dd) {
        return new gJ(this, dd)
      }
      reconfigure(dd) {
        return ZJ.reconfigure.of({
          compartment: this,
          extension: dd
        })
      }
      get(dd) {
        return dd.config.compartments.get(this)
      }
    }
    class gJ {
      constructor(dd, Jd) {
        this.compartment = dd, this.inner = Jd
      }
    }
    class CJ {
      constructor(dd, Jd, kd, pd, Nd, Wd) {
        for (this.base = dd, this.compartments = Jd, this.dynamicSlots = kd, this.address = pd, this.staticValues = Nd, this.facets = Wd, this.statusTemplate = []; this.statusTemplate.length < kd.length;) this.statusTemplate.push(0)
      }
      staticFacet(dd) {
        let Jd = this.address[dd.id];
        return null == Jd ? dd.default : this.staticValues[Jd >> 1]
      }
      static resolve(dd, Jd, kd) {
        let pd = [],
          Nd = Object.create(null),
          Wd = new Map;
        for (let od of function(dd, Jd, kd) {
            let pd = [
                [],
                [],
                [],
                [],
                []
              ],
              Nd = new Map;

            function Wd(dd, Pd) {
              let Zd = Nd.get(dd);
              if (null != Zd) {
                if (Zd <= Pd) return;
                let Jd = pd[Zd].indexOf(dd);
                Jd > -1 && pd[Zd].splice(Jd, 1), dd instanceof gJ && kd.delete(dd.compartment)
              }
              if (Nd.set(dd, Pd), Array.isArray(dd))
                for (let Jd of dd) Wd(Jd, Pd);
              else if (dd instanceof gJ) {
                if (kd.has(dd.compartment)) throw new RangeError("Duplicate use of compartment in extensions");
                let pd = Jd.get(dd.compartment) || dd.inner;
                kd.set(dd.compartment, pd), Wd(pd, Pd)
              } else if (dd instanceof PJ) Wd(dd.inner, dd.prec);
              else if (dd instanceof Ad) pd[Pd].push(dd), dd.provides && Wd(dd.provides, Pd);
              else if (dd instanceof td) pd[Pd].push(dd), dd.facet.extensions && Wd(dd.facet.extensions, kJ);
              else {
                let Jd = dd.extension;
                if (!Jd) throw new Error(`Unrecognized extension value in extension set (${dd}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
                Wd(Jd, Pd)
              }
            }
            return Wd(dd, kJ), pd.reduce(((dd, Jd) => dd.concat(Jd)))
          }(dd, Jd, Wd)) od instanceof Ad ? pd.push(od) : (Nd[od.facet.id] || (Nd[od.facet.id] = [])).push(od);
        let Pd = Object.create(null),
          Zd = [],
          gd = [];
        for (let od of pd) Pd[od.id] = gd.length << 1, gd.push((dd => od.slot(dd)));
        let Cd = null === kd || void 0 === kd ? void 0 : kd.config.facets;
        for (let od in Nd) {
          let dd = Nd[od],
            Jd = dd[0].facet,
            pd = Cd && Cd[od] || [];
          if (dd.every((dd => 0 == dd.type)))
            if (Pd[Jd.id] = Zd.length << 1 | 1, ud(pd, dd)) Zd.push(kd.facet(Jd));
            else {
              let pd = Jd.combine(dd.map((dd => dd.value)));
              Zd.push(kd && Jd.compare(pd, kd.facet(Jd)) ? kd.facet(Jd) : pd)
            }
          else {
            for (let Jd of dd) 0 == Jd.type ? (Pd[Jd.id] = Zd.length << 1 | 1, Zd.push(Jd.value)) : (Pd[Jd.id] = gd.length << 1, gd.push((dd => Jd.dynamicSlot(dd))));
            Pd[Jd.id] = gd.length << 1, gd.push((kd => Hd(kd, Jd, dd)))
          }
        }
        let Kd = gd.map((dd => dd(Pd)));
        return new CJ(dd, Wd, Kd, Pd, Zd, Nd)
      }
    }

    function KJ(dd, Jd) {
      if (1 & Jd) return 2;
      let kd = Jd >> 1,
        pd = dd.status[kd];
      if (4 == pd) throw new Error("Cyclic dependency between fields and/or facets");
      if (2 & pd) return pd;
      dd.status[kd] = 4;
      let Nd = dd.computeSlot(dd, dd.config.dynamicSlots[kd]);
      return dd.status[kd] = 2 | Nd
    }

    function oJ(dd, Jd) {
      return 1 & Jd ? dd.config.staticValues[Jd >> 1] : dd.values[Jd >> 1]
    }
    const lJ = rd.define(),
      QJ = rd.define({
        combine: dd => dd.some((dd => dd)),
        static: !0
      }),
      LJ = rd.define({
        combine: dd => dd.length ? dd[0] : void 0,
        static: !0
      }),
      OJ = rd.define(),
      eJ = rd.define(),
      RJ = rd.define(),
      IJ = rd.define({
        combine: dd => !!dd.length && dd[0]
      });
    class GJ {
      constructor(dd, Jd) {
        this.type = dd, this.value = Jd
      }
      static define() {
        return new vJ
      }
    }
    class vJ {
      of(dd) {
        return new GJ(this, dd)
      }
    }
    class xJ {
      constructor(dd) {
        this.map = dd
      }
      of(dd) {
        return new qJ(this, dd)
      }
    }
    class qJ {
      constructor(dd, Jd) {
        this.type = dd, this.value = Jd
      }
      map(dd) {
        let Jd = this.type.map(this.value, dd);
        return void 0 === Jd ? void 0 : Jd == this.value ? this : new qJ(this.type, Jd)
      }
      is(dd) {
        return this.type == dd
      }
      static define() {
        return new xJ((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).map || (dd => dd))
      }
      static mapEffects(dd, Jd) {
        if (!dd.length) return dd;
        let kd = [];
        for (let pd of dd) {
          let dd = pd.map(Jd);
          dd && kd.push(dd)
        }
        return kd
      }
    }
    qJ.reconfigure = qJ.define(), qJ.appendConfig = qJ.define();
    class BJ {
      constructor(dd, Jd, kd, pd, Nd, Wd) {
        this.startState = dd, this.changes = Jd, this.selection = kd, this.effects = pd, this.annotations = Nd, this.scrollIntoView = Wd, this._doc = null, this._state = null, kd && cd(kd, Jd.newLength), Nd.some((dd => dd.type == BJ.time)) || (this.annotations = Nd.concat(BJ.time.of(Date.now())))
      }
      static create(dd, Jd, kd, pd, Nd, Wd) {
        return new BJ(dd, Jd, kd, pd, Nd, Wd)
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
      annotation(dd) {
        for (let Jd of this.annotations)
          if (Jd.type == dd) return Jd.value
      }
      get docChanged() {
        return !this.changes.empty
      }
      get reconfigured() {
        return this.startState.config != this.state.config
      }
      isUserEvent(dd) {
        let Jd = this.annotation(BJ.userEvent);
        return !(!Jd || !(Jd == dd || Jd.length > dd.length && Jd.slice(0, dd.length) == dd && "." == Jd[dd.length]))
      }
    }

    function sJ(dd, Jd) {
      let kd = [];
      for (let pd = 0, Nd = 0;;) {
        let Wd, Pd;
        if (pd < dd.length && (Nd == Jd.length || Jd[Nd] >= dd[pd])) Wd = dd[pd++], Pd = dd[pd++];
        else {
          if (!(Nd < Jd.length)) return kd;
          Wd = Jd[Nd++], Pd = Jd[Nd++]
        }!kd.length || kd[kd.length - 1] < Wd ? kd.push(Wd, Pd) : kd[kd.length - 1] < Pd && (kd[kd.length - 1] = Pd)
      }
    }

    function iJ(dd, Jd, kd) {
      var pd;
      let Nd, Wd, Pd;
      return kd ? (Nd = Jd.changes, Wd = jd.empty(Jd.changes.length), Pd = dd.changes.compose(Jd.changes)) : (Nd = Jd.changes.map(dd.changes), Wd = dd.changes.mapDesc(Jd.changes, !0), Pd = dd.changes.compose(Nd)), {
        changes: Pd,
        selection: Jd.selection ? Jd.selection.map(Wd) : null === (pd = dd.selection) || void 0 === pd ? void 0 : pd.map(Nd),
        effects: qJ.mapEffects(dd.effects, Nd).concat(qJ.mapEffects(Jd.effects, Wd)),
        annotations: dd.annotations.length ? dd.annotations.concat(Jd.annotations) : Jd.annotations,
        scrollIntoView: dd.scrollIntoView || Jd.scrollIntoView
      }
    }

    function aJ(dd, Jd, kd) {
      let pd = Jd.selection,
        Nd = YJ(Jd.annotations);
      return Jd.userEvent && (Nd = Nd.concat(BJ.userEvent.of(Jd.userEvent))), {
        changes: Jd.changes instanceof jd ? Jd.changes : jd.of(Jd.changes || [], kd, dd.facet(LJ)),
        selection: pd && (pd instanceof Ed ? pd : Ed.single(pd.anchor, pd.head)),
        effects: YJ(Jd.effects),
        annotations: Nd,
        scrollIntoView: !!Jd.scrollIntoView
      }
    }

    function MJ(dd, Jd, kd) {
      let pd = aJ(dd, Jd.length ? Jd[0] : {}, dd.doc.length);
      Jd.length && !1 === Jd[0].filter && (kd = !1);
      for (let Wd = 1; Wd < Jd.length; Wd++) {
        !1 === Jd[Wd].filter && (kd = !1);
        let Nd = !!Jd[Wd].sequential;
        pd = iJ(pd, aJ(dd, Jd[Wd], Nd ? pd.changes.newLength : dd.doc.length), Nd)
      }
      let Nd = BJ.create(dd, pd.changes, pd.selection, pd.effects, pd.annotations, pd.scrollIntoView);
      return function(dd) {
        let Jd = dd.startState,
          kd = Jd.facet(RJ),
          pd = dd;
        for (let Nd = kd.length - 1; Nd >= 0; Nd--) {
          let Wd = kd[Nd](dd);
          Wd && Object.keys(Wd).length && (pd = iJ(pd, aJ(Jd, Wd, dd.changes.newLength), !0))
        }
        return pd == dd ? dd : BJ.create(Jd, dd.changes, dd.selection, pd.effects, pd.annotations, pd.scrollIntoView)
      }(kd ? function(dd) {
        let Jd = dd.startState,
          kd = !0;
        for (let Nd of Jd.facet(OJ)) {
          let Jd = Nd(dd);
          if (!1 === Jd) {
            kd = !1;
            break
          }
          Array.isArray(Jd) && (kd = !0 === kd ? Jd : sJ(kd, Jd))
        }
        if (!0 !== kd) {
          let pd, Nd;
          if (!1 === kd) Nd = dd.changes.invertedDesc, pd = jd.empty(Jd.doc.length);
          else {
            let Jd = dd.changes.filter(kd);
            pd = Jd.changes, Nd = Jd.filtered.mapDesc(Jd.changes).invertedDesc
          }
          dd = BJ.create(Jd, pd, dd.selection && dd.selection.map(Nd), qJ.mapEffects(dd.effects, Nd), dd.annotations, dd.scrollIntoView)
        }
        let pd = Jd.facet(eJ);
        for (let Nd = pd.length - 1; Nd >= 0; Nd--) {
          let kd = pd[Nd](dd);
          dd = kd instanceof BJ ? kd : Array.isArray(kd) && 1 == kd.length && kd[0] instanceof BJ ? kd[0] : MJ(Jd, YJ(kd), !1)
        }
        return dd
      }(Nd) : Nd)
    }
    BJ.time = GJ.define(), BJ.userEvent = GJ.define(), BJ.addToHistory = GJ.define(), BJ.remote = GJ.define();
    const FJ = [];

    function YJ(dd) {
      return null == dd ? FJ : Array.isArray(dd) ? dd : [dd]
    }
    var mJ = function(dd) {
      return dd[dd.Word = 0] = "Word", dd[dd.Space = 1] = "Space", dd[dd.Other = 2] = "Other", dd
    }(mJ || (mJ = {}));
    const bJ = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
    let SJ;
    try {
      SJ = new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u")
    } catch (pk) {}

    function jJ(dd) {
      return Jd => {
        if (!/\S/.test(Jd)) return mJ.Space;
        if (function(dd) {
            if (SJ) return SJ.test(dd);
            for (let Jd = 0; Jd < dd.length; Jd++) {
              let kd = dd[Jd];
              if (/\w/.test(kd) || kd > "\x80" && (kd.toUpperCase() != kd.toLowerCase() || bJ.test(kd))) return !0
            }
            return !1
          }(Jd)) return mJ.Word;
        for (let kd = 0; kd < dd.length; kd++)
          if (Jd.indexOf(dd[kd]) > -1) return mJ.Word;
        return mJ.Other
      }
    }
    class XJ {
      constructor(dd, Jd, kd, pd, Nd, Wd) {
        this.config = dd, this.doc = Jd, this.selection = kd, this.values = pd, this.status = dd.statusTemplate.slice(), this.computeSlot = Nd, Wd && (Wd._state = this);
        for (let Pd = 0; Pd < this.config.dynamicSlots.length; Pd++) KJ(this, Pd << 1);
        this.computeSlot = null
      }
      field(dd) {
        let Jd = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          kd = this.config.address[dd.id];
        if (null != kd) return KJ(this, kd), oJ(this, kd);
        if (Jd) throw new RangeError("Field is not present in this state")
      }
      update() {
        for (var dd = arguments.length, Jd = new Array(dd), kd = 0; kd < dd; kd++) Jd[kd] = arguments[kd];
        return MJ(this, Jd, !0)
      }
      applyTransaction(dd) {
        let Jd, kd = this.config,
          {
            base: pd,
            compartments: Nd
          } = kd;
        for (let Pd of dd.effects) Pd.is(ZJ.reconfigure) ? (kd && (Nd = new Map, kd.compartments.forEach(((dd, Jd) => Nd.set(Jd, dd))), kd = null), Nd.set(Pd.value.compartment, Pd.value.extension)) : Pd.is(qJ.reconfigure) ? (kd = null, pd = Pd.value) : Pd.is(qJ.appendConfig) && (kd = null, pd = YJ(pd).concat(Pd.value));
        if (kd) Jd = dd.startState.values.slice();
        else {
          kd = CJ.resolve(pd, Nd, this), Jd = new XJ(kd, this.doc, this.selection, kd.dynamicSlots.map((() => null)), ((dd, Jd) => Jd.reconfigure(dd, this)), null).values
        }
        let Wd = dd.startState.facet(QJ) ? dd.newSelection : dd.newSelection.asSingle();
        new XJ(kd, dd.newDoc, Wd, Jd, ((Jd, kd) => kd.update(Jd, dd)), dd)
      }
      replaceSelection(dd) {
        return "string" == typeof dd && (dd = this.toText(dd)), this.changeByRange((Jd => ({
          changes: {
            from: Jd.from,
            to: Jd.to,
            insert: dd
          },
          range: Ed.cursor(Jd.from + dd.length)
        })))
      }
      changeByRange(dd) {
        let Jd = this.selection,
          kd = dd(Jd.UO[0]),
          pd = this.changes(kd.changes),
          Nd = [kd.range],
          Wd = YJ(kd.effects);
        for (let Pd = 1; Pd < Jd.UO.length; Pd++) {
          let kd = dd(Jd.UO[Pd]),
            Zd = this.changes(kd.changes),
            gd = Zd.map(pd);
          for (let dd = 0; dd < Pd; dd++) Nd[dd] = Nd[dd].map(gd);
          let Cd = pd.mapDesc(Zd, !0);
          Nd.push(kd.range.map(Cd)), pd = pd.compose(gd), Wd = qJ.mapEffects(Wd, gd).concat(qJ.mapEffects(YJ(kd.effects), Cd))
        }
        return {
          changes: pd,
          selection: Ed.create(Nd, Jd.mainIndex),
          effects: Wd
        }
      }
      changes() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return dd instanceof jd ? dd : jd.of(dd, this.doc.length, this.facet(XJ.lineSeparator))
      }
      toText(dd) {
        return Od.of(dd.split(this.facet(XJ.lineSeparator) || md))
      }
      sliceDoc() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.doc.length;
        return this.doc.sliceString(dd, Jd, this.lineBreak)
      }
      facet(dd) {
        let Jd = this.config.address[dd.id];
        return null == Jd ? dd.default : (KJ(this, Jd), oJ(this, Jd))
      }
      toJSON(dd) {
        let Jd = {
          doc: this.sliceDoc(),
          selection: this.selection.toJSON()
        };
        if (dd)
          for (let kd in dd) {
            let pd = dd[kd];
            pd instanceof Ad && null != this.config.address[pd.id] && (Jd[kd] = pd.spec.toJSON(this.field(dd[kd]), this))
          }
        return Jd
      }
      static fromJSON(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          kd = arguments.length > 2 ? arguments[2] : void 0;
        if (!dd || "string" != typeof dd.doc) throw new RangeError("Invalid JSON representation for EditorState");
        let pd = [];
        if (kd)
          for (let Nd in kd)
            if (Object.prototype.hasOwnProperty.call(dd, Nd)) {
              let Jd = kd[Nd],
                Wd = dd[Nd];
              pd.push(Jd.init((dd => Jd.spec.fromJSON(Wd, dd))))
            } return XJ.create({
          doc: dd.doc,
          selection: Ed.fromJSON(dd.selection),
          extensions: Jd.extensions ? pd.concat([Jd.extensions]) : pd
        })
      }
      static create() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          Jd = CJ.resolve(dd.extensions || [], new Map),
          kd = dd.doc instanceof Od ? dd.doc : Od.of((dd.doc || "").split(Jd.staticFacet(XJ.lineSeparator) || md)),
          pd = dd.selection ? dd.selection instanceof Ed ? dd.selection : Ed.single(dd.selection.anchor, dd.selection.head) : Ed.single(0);
        return cd(pd, kd.length), Jd.staticFacet(QJ) || (pd = pd.asSingle()), new XJ(Jd, kd, pd, Jd.dynamicSlots.map((() => null)), ((dd, Jd) => Jd.create(dd)), null)
      }
      get tabSize() {
        return this.facet(XJ.tabSize)
      }
      get lineBreak() {
        return this.facet(XJ.lineSeparator) || "\n"
      }
      get readOnly() {
        return this.facet(IJ)
      }
      phrase(dd) {
        for (var Jd = arguments.length, kd = new Array(Jd > 1 ? Jd - 1 : 0), pd = 1; pd < Jd; pd++) kd[pd - 1] = arguments[pd];
        for (let Nd of this.facet(XJ.phrases))
          if (Object.prototype.hasOwnProperty.call(Nd, dd)) {
            dd = Nd[dd];
            break
          } return kd.length && (dd = dd.replace(/\$(\$|\d*)/g, ((dd, Jd) => {
          if ("$" == Jd) return "$";
          let pd = +(Jd || 1);
          return !pd || pd > kd.length ? dd : kd[pd - 1]
        }))), dd
      }
      languageDataAt(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          pd = [];
        for (let Nd of this.facet(lJ))
          for (let Wd of Nd(this, Jd, kd)) Object.prototype.hasOwnProperty.call(Wd, dd) && pd.push(Wd[dd]);
        return pd
      }
      charCategorizer(dd) {
        let Jd = this.languageDataAt("wordChars", dd);
        return jJ(Jd.length ? Jd[0] : "")
      }
      wordAt(dd) {
        let {
          text: Jd,
          from: kd,
          length: pd
        } = this.doc.lineAt(dd), Nd = this.charCategorizer(dd), Wd = dd - kd, Pd = dd - kd;
        for (; Wd > 0;) {
          let dd = ad(Jd, Wd, !1);
          if (Nd(Jd.slice(dd, Wd)) != mJ.Word) break;
          Wd = dd
        }
        for (; Pd < pd;) {
          let dd = ad(Jd, Pd);
          if (Nd(Jd.slice(Pd, dd)) != mJ.Word) break;
          Pd = dd
        }
        return Wd == Pd ? null : Ed.range(Wd + kd, Pd + kd)
      }
    }

    function fJ(dd, Jd) {
      let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        pd = {};
      for (let Nd of dd)
        for (let dd of Object.keys(Nd)) {
          let Jd = Nd[dd],
            Wd = pd[dd];
          if (void 0 === Wd) pd[dd] = Jd;
          else if (Wd === Jd || void 0 === Jd);
          else {
            if (!Object.hasOwnProperty.call(kd, dd)) throw new Error("Config merge conflict for field " + dd);
            pd[dd] = kd[dd](Wd, Jd)
          }
        }
      for (let Nd in Jd) void 0 === pd[Nd] && (pd[Nd] = Jd[Nd]);
      return pd
    }
    XJ.allowMultipleSelections = QJ, XJ.tabSize = rd.define({
      combine: dd => dd.length ? dd[0] : 4
    }), XJ.lineSeparator = LJ, XJ.readOnly = IJ, XJ.phrases = rd.define({
      compare(dd, Jd) {
        let kd = Object.keys(dd),
          pd = Object.keys(Jd);
        return kd.length == pd.length && kd.every((kd => dd[kd] == Jd[kd]))
      }
    }), XJ.languageData = lJ, XJ.changeFilter = OJ, XJ.transactionFilter = eJ, XJ.transactionExtender = RJ, ZJ.reconfigure = qJ.define();
    class nJ {
      eq(dd) {
        return this == dd
      }
      range(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dd;
        return yJ.create(dd, Jd, this)
      }
    }

    function UJ(dd, Jd) {
      return dd == Jd || dd.constructor == Jd.constructor && dd.eq(Jd)
    }
    nJ.prototype.startSide = nJ.prototype.endSide = 0, nJ.prototype.point = !1, nJ.prototype.mapMode = bd.TrackDel;
    class yJ {
      constructor(dd, Jd, kd) {
        this.from = dd, this.to = Jd, this.value = kd
      }
      static create(dd, Jd, kd) {
        return new yJ(dd, Jd, kd)
      }
    }

    function DJ(dd, Jd) {
      return dd.from - Jd.from || dd.value.startSide - Jd.value.startSide
    }
    class TJ {
      constructor(dd, Jd, kd, pd) {
        this.from = dd, this.to = Jd, this.value = kd, this.mpd = pd
      }
      get length() {
        return this.to[this.to.length - 1]
      }
      findIndex(dd, Jd, kd) {
        let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Nd = kd ? this.to : this.from;
        for (let Wd = pd, Pd = Nd.length;;) {
          if (Wd == Pd) return Wd;
          let pd = Wd + Pd >> 1,
            Zd = Nd[pd] - dd || (kd ? this.value[pd].endSide : this.value[pd].startSide) - Jd;
          if (pd == Wd) return Zd >= 0 ? Wd : Pd;
          Zd >= 0 ? Pd = pd : Wd = pd + 1
        }
      }
      between(dd, Jd, kd, pd) {
        for (let Nd = this.findIndex(Jd, -1e9, !0), Wd = this.findIndex(kd, 1e9, !1, Nd); Nd < Wd; Nd++)
          if (!1 === pd(this.from[Nd] + dd, this.to[Nd] + dd, this.value[Nd])) return !1
      }
      map(dd, Jd) {
        let kd = [],
          pd = [],
          Nd = [],
          Wd = -1,
          Pd = -1;
        for (let Zd = 0; Zd < this.value.length; Zd++) {
          let gd, Cd, Kd = this.value[Zd],
            od = this.from[Zd] + dd,
            ld = this.to[Zd] + dd;
          if (od == ld) {
            let dd = Jd.mapPos(od, Kd.startSide, Kd.mapMode);
            if (null == dd) continue;
            if (gd = Cd = dd, Kd.startSide != Kd.endSide && (Cd = Jd.mapPos(od, Kd.endSide), Cd < gd)) continue
          } else if (gd = Jd.mapPos(od, Kd.startSide), Cd = Jd.mapPos(ld, Kd.endSide), gd > Cd || gd == Cd && Kd.startSide > 0 && Kd.endSide <= 0) continue;
          (Cd - gd || Kd.endSide - Kd.startSide) < 0 || (Wd < 0 && (Wd = gd), Kd.point && (Pd = Math.max(Pd, Cd - gd)), kd.push(Kd), pd.push(gd - Wd), Nd.push(Cd - Wd))
        }
        return {
          mapped: kd.length ? new TJ(pd, Nd, kd, Pd) : null,
          pos: Wd
        }
      }
    }
    class EJ {
      constructor(dd, Jd, kd, pd) {
        this.chunkPos = dd, this.chunk = Jd, this.nextLayer = kd, this.mpd = pd
      }
      static create(dd, Jd, kd, pd) {
        return new EJ(dd, Jd, kd, pd)
      }
      get length() {
        let dd = this.chunk.length - 1;
        return dd < 0 ? 0 : Math.max(this.chunkEnd(dd), this.nextLayer.length)
      }
      get size() {
        if (this.VQ) return 0;
        let dd = this.nextLayer.size;
        for (let Jd of this.chunk) dd += Jd.value.length;
        return dd
      }
      chunkEnd(dd) {
        return this.chunkPos[dd] + this.chunk[dd].length
      }
      update(dd) {
        let {
          add: Jd = [],
          sort: kd = !1,
          filterFrom: pd = 0,
          filterTo: Nd = this.length
        } = dd, Wd = dd.filter;
        if (0 == Jd.length && !Wd) return this;
        if (kd && (Jd = Jd.slice().sort(DJ)), this.VQ) return Jd.length ? EJ.of(Jd) : this;
        let Pd = new rJ(this, null, -1).goto(0),
          Zd = 0,
          gd = [],
          Cd = new cJ;
        for (; Pd.value || Zd < Jd.length;)
          if (Zd < Jd.length && (Pd.from - Jd[Zd].from || Pd.startSide - Jd[Zd].value.startSide) >= 0) {
            let dd = Jd[Zd++];
            Cd.addInner(dd.from, dd.to, dd.value) || gd.push(dd)
          } else 1 == Pd.rangeIndex && Pd.chunkIndex < this.chunk.length && (Zd == Jd.length || this.chunkEnd(Pd.chunkIndex) < Jd[Zd].from) && (!Wd || pd > this.chunkEnd(Pd.chunkIndex) || Nd < this.chunkPos[Pd.chunkIndex]) && Cd.addChunk(this.chunkPos[Pd.chunkIndex], this.chunk[Pd.chunkIndex]) ? Pd.nextChunk() : ((!Wd || pd > Pd.to || Nd < Pd.from || Wd(Pd.from, Pd.to, Pd.value)) && (Cd.addInner(Pd.from, Pd.to, Pd.value) || gd.push(yJ.create(Pd.from, Pd.to, Pd.value))), Pd.next());
        return Cd.finishInner(this.nextLayer.VQ && !gd.length ? EJ.empty : this.nextLayer.update({
          add: gd,
          filter: Wd,
          filterFrom: pd,
          filterTo: Nd
        }))
      }
      map(dd) {
        if (dd.empty || this.VQ) return this;
        let Jd = [],
          kd = [],
          pd = -1;
        for (let Wd = 0; Wd < this.chunk.length; Wd++) {
          let Nd = this.chunkPos[Wd],
            Pd = this.chunk[Wd],
            Zd = dd.touchesRange(Nd, Nd + Pd.length);
          if (!1 === Zd) pd = Math.max(pd, Pd.mpd), Jd.push(Pd), kd.push(dd.mapPos(Nd));
          else if (!0 === Zd) {
            let {
              mapped: Wd,
              pos: Zd
            } = Pd.map(Nd, dd);
            Wd && (pd = Math.max(pd, Wd.mpd), Jd.push(Wd), kd.push(Zd))
          }
        }
        let Nd = this.nextLayer.map(dd);
        return 0 == Jd.length ? Nd : new EJ(kd, Jd, Nd || EJ.empty, pd)
      }
      between(dd, Jd, kd) {
        if (!this.VQ) {
          for (let pd = 0; pd < this.chunk.length; pd++) {
            let Nd = this.chunkPos[pd],
              Wd = this.chunk[pd];
            if (Jd >= Nd && dd <= Nd + Wd.length && !1 === Wd.between(Nd, dd - Nd, Jd - Nd, kd)) return
          }
          this.nextLayer.between(dd, Jd, kd)
        }
      }
      iter() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return uJ.from([this]).goto(dd)
      }
      get VQ() {
        return this.nextLayer == this
      }
      static iter(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return uJ.from(dd).goto(Jd)
      }
      static compare(dd, Jd, kd, pd) {
        let Nd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1,
          Wd = dd.filter((dd => dd.mpd > 0 || !dd.VQ && dd.mpd >= Nd)),
          Pd = Jd.filter((dd => dd.mpd > 0 || !dd.VQ && dd.mpd >= Nd)),
          Zd = hJ(Wd, Pd, kd),
          gd = new VJ(Wd, Zd, Nd),
          Cd = new VJ(Pd, Zd, Nd);
        kd.iterGaps(((dd, Jd, kd) => zJ(gd, dd, Cd, Jd, kd, pd))), kd.empty && 0 == kd.length && zJ(gd, 0, Cd, 0, 0, pd)
      }
      static eq(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          pd = arguments.length > 3 ? arguments[3] : void 0;
        null == pd && (pd = 999999999);
        let Nd = dd.filter((dd => !dd.VQ && Jd.indexOf(dd) < 0)),
          Wd = Jd.filter((Jd => !Jd.VQ && dd.indexOf(Jd) < 0));
        if (Nd.length != Wd.length) return !1;
        if (!Nd.length) return !0;
        let Pd = hJ(Nd, Wd),
          Zd = new VJ(Nd, Pd, 0).goto(kd),
          gd = new VJ(Wd, Pd, 0).goto(kd);
        for (;;) {
          if (Zd.to != gd.to || !HJ(Zd.active, gd.active) || Zd.point && (!gd.point || !UJ(Zd.point, gd.point))) return !1;
          if (Zd.to > pd) return !0;
          Zd.next(), gd.next()
        }
      }
      static spans(dd, Jd, kd, pd) {
        let Nd = new VJ(dd, null, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1).goto(Jd),
          Wd = Jd,
          Pd = Nd.openStart;
        for (;;) {
          let dd = Math.min(Nd.to, kd);
          if (Nd.point) {
            let kd = Nd.activeForPoint(Nd.to),
              Zd = Nd.pointFrom < Jd ? kd.length + 1 : Nd.point.startSide < 0 ? kd.length : Math.min(kd.length, Pd);
            pd.point(Wd, dd, Nd.point, kd, Zd, Nd.pointRank), Pd = Math.min(Nd.openEnd(dd), kd.length)
          } else dd > Wd && (pd.span(Wd, dd, Nd.active, Pd), Pd = Nd.openEnd(dd));
          if (Nd.to > kd) return Pd + (Nd.point && Nd.to > kd ? 1 : 0);
          Wd = Nd.to, Nd.next()
        }
      }
      static of (dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          kd = new cJ;
        for (let pd of dd instanceof yJ ? [dd] : Jd ? function(dd) {
            if (dd.length > 1)
              for (let Jd = dd[0], kd = 1; kd < dd.length; kd++) {
                let pd = dd[kd];
                if (DJ(Jd, pd) > 0) return dd.slice().sort(DJ);
                Jd = pd
              }
            return dd
          }(dd) : dd) kd.add(pd.from, pd.to, pd.value);
        return kd.finish()
      }
      static join(dd) {
        if (!dd.length) return EJ.empty;
        let Jd = dd[dd.length - 1];
        for (let kd = dd.length - 2; kd >= 0; kd--)
          for (let pd = dd[kd]; pd != EJ.empty; pd = pd.nextLayer) Jd = new EJ(pd.chunkPos, pd.chunk, Jd, Math.max(pd.mpd, Jd.mpd));
        return Jd
      }
    }
    EJ.empty = new EJ([], [], null, -1), EJ.empty.nextLayer = EJ.empty;
    class cJ {
      finishChunk(dd) {
        this.chunks.push(new TJ(this.from, this.to, this.value, this.mpd)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.mpd), this.mpd = -1, dd && (this.from = [], this.to = [], this.value = [])
      }
      constructor() {
        this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.mpd = -1, this.setMaxPoint = -1, this.nextLayer = null
      }
      add(dd, Jd, kd) {
        this.addInner(dd, Jd, kd) || (this.nextLayer || (this.nextLayer = new cJ)).add(dd, Jd, kd)
      }
      addInner(dd, Jd, kd) {
        let pd = dd - this.lastTo || kd.startSide - this.last.endSide;
        if (pd <= 0 && (dd - this.lastFrom || kd.startSide - this.last.startSide) < 0) throw new Error("Ranges must be added sorted by `from` position and `startSide`");
        return !(pd < 0) && (250 == this.from.length && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = dd), this.from.push(dd - this.chunkStart), this.to.push(Jd - this.chunkStart), this.last = kd, this.lastFrom = dd, this.lastTo = Jd, this.value.push(kd), kd.point && (this.mpd = Math.max(this.mpd, Jd - dd)), !0)
      }
      addChunk(dd, Jd) {
        if ((dd - this.lastTo || Jd.value[0].startSide - this.last.endSide) < 0) return !1;
        this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, Jd.mpd), this.chunks.push(Jd), this.chunkPos.push(dd);
        let kd = Jd.value.length - 1;
        return this.last = Jd.value[kd], this.lastFrom = Jd.from[kd] + dd, this.lastTo = Jd.to[kd] + dd, !0
      }
      finish() {
        return this.finishInner(EJ.empty)
      }
      finishInner(dd) {
        if (this.from.length && this.finishChunk(!1), 0 == this.chunks.length) return dd;
        let Jd = EJ.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(dd) : dd, this.setMaxPoint);
        return this.from = null, Jd
      }
    }

    function hJ(dd, Jd, kd) {
      let pd = new Map;
      for (let Wd of dd)
        for (let dd = 0; dd < Wd.chunk.length; dd++) Wd.chunk[dd].mpd <= 0 && pd.set(Wd.chunk[dd], Wd.chunkPos[dd]);
      let Nd = new Set;
      for (let Wd of Jd)
        for (let dd = 0; dd < Wd.chunk.length; dd++) {
          let Jd = pd.get(Wd.chunk[dd]);
          null == Jd || (kd ? kd.mapPos(Jd) : Jd) != Wd.chunkPos[dd] || (null === kd || void 0 === kd ? void 0 : kd.touchesRange(Jd, Jd + Wd.chunk[dd].length)) || Nd.add(Wd.chunk[dd])
        }
      return Nd
    }
    class rJ {
      constructor(dd, Jd, kd) {
        let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.layer = dd, this.skip = Jd, this.bpd = kd, this.rank = pd
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      get endSide() {
        return this.value ? this.value.endSide : 0
      }
      goto(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(dd, Jd, !1), this
      }
      gotoInner(dd, Jd, kd) {
        for (; this.chunkIndex < this.layer.chunk.length;) {
          let Jd = this.layer.chunk[this.chunkIndex];
          if (!(this.skip && this.skip.has(Jd) || this.layer.chunkEnd(this.chunkIndex) < dd || Jd.mpd < this.bpd)) break;
          this.chunkIndex++, kd = !1
        }
        if (this.chunkIndex < this.layer.chunk.length) {
          let pd = this.layer.chunk[this.chunkIndex].findIndex(dd - this.layer.chunkPos[this.chunkIndex], Jd, !0);
          (!kd || this.rangeIndex < pd) && this.setRangeIndex(pd)
        }
        this.next()
      }
      forward(dd, Jd) {
        (this.to - dd || this.endSide - Jd) < 0 && this.gotoInner(dd, Jd, !0)
      }
      next() {
        for (;;) {
          if (this.chunkIndex == this.layer.chunk.length) {
            this.from = this.to = 1e9, this.value = null;
            break
          } {
            let dd = this.layer.chunkPos[this.chunkIndex],
              Jd = this.layer.chunk[this.chunkIndex],
              kd = dd + Jd.from[this.rangeIndex];
            if (this.from = kd, this.to = dd + Jd.to[this.rangeIndex], this.value = Jd.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.bpd < 0 || this.value.point && this.to - this.from >= this.bpd) break
          }
        }
      }
      setRangeIndex(dd) {
        if (dd == this.layer.chunk[this.chunkIndex].value.length) {
          if (this.chunkIndex++, this.skip)
            for (; this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]);) this.chunkIndex++;
          this.rangeIndex = 0
        } else this.rangeIndex = dd
      }
      nextChunk() {
        this.chunkIndex++, this.rangeIndex = 0, this.next()
      }
      compare(dd) {
        return this.from - dd.from || this.startSide - dd.startSide || this.rank - dd.rank || this.to - dd.to || this.endSide - dd.endSide
      }
    }
    class uJ {
      constructor(dd) {
        this.heap = dd
      }
      static from(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          pd = [];
        for (let Nd = 0; Nd < dd.length; Nd++)
          for (let Wd = dd[Nd]; !Wd.VQ; Wd = Wd.nextLayer) Wd.mpd >= kd && pd.push(new rJ(Wd, Jd, kd, Nd));
        return 1 == pd.length ? pd[0] : new uJ(pd)
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      goto(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        for (let kd of this.heap) kd.goto(dd, Jd);
        for (let kd = this.heap.length >> 1; kd >= 0; kd--) tJ(this.heap, kd);
        return this.next(), this
      }
      forward(dd, Jd) {
        for (let kd of this.heap) kd.forward(dd, Jd);
        for (let kd = this.heap.length >> 1; kd >= 0; kd--) tJ(this.heap, kd);
        (this.to - dd || this.value.endSide - Jd) < 0 && this.next()
      }
      next() {
        if (0 == this.heap.length) this.from = this.to = 1e9, this.value = null, this.rank = -1;
        else {
          let dd = this.heap[0];
          this.from = dd.from, this.to = dd.to, this.value = dd.value, this.rank = dd.rank, dd.value && dd.next(), tJ(this.heap, 0)
        }
      }
    }

    function tJ(dd, Jd) {
      for (let kd = dd[Jd];;) {
        let pd = 1 + (Jd << 1);
        if (pd >= dd.length) break;
        let Nd = dd[pd];
        if (pd + 1 < dd.length && Nd.compare(dd[pd + 1]) >= 0 && (Nd = dd[pd + 1], pd++), kd.compare(Nd) < 0) break;
        dd[pd] = kd, dd[Jd] = Nd, Jd = pd
      }
    }
    class VJ {
      constructor(dd, Jd, kd) {
        this.bpd = kd, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = uJ.from(dd, Jd, kd)
      }
      goto(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.cursor.goto(dd, Jd), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = dd, this.endSide = Jd, this.openStart = -1, this.next(), this
      }
      forward(dd, Jd) {
        for (; this.minActive > -1 && (this.activeTo[this.minActive] - dd || this.active[this.minActive].endSide - Jd) < 0;) this.removeActive(this.minActive);
        this.cursor.forward(dd, Jd)
      }
      removeActive(dd) {
        wJ(this.active, dd), wJ(this.activeTo, dd), wJ(this.activeRank, dd), this.minActive = dk(this.active, this.activeTo)
      }
      addActive(dd) {
        let Jd = 0,
          {
            value: kd,
            to: pd,
            rank: Nd
          } = this.cursor;
        for (; Jd < this.activeRank.length && (Nd - this.activeRank[Jd] || pd - this.activeTo[Jd]) > 0;) Jd++;
        AJ(this.active, Jd, kd), AJ(this.activeTo, Jd, pd), AJ(this.activeRank, Jd, Nd), dd && AJ(dd, Jd, this.cursor.from), this.minActive = dk(this.active, this.activeTo)
      }
      next() {
        let dd = this.to,
          Jd = this.point;
        this.point = null;
        let kd = this.openStart < 0 ? [] : null;
        for (;;) {
          let pd = this.minActive;
          if (pd > -1 && (this.activeTo[pd] - this.cursor.from || this.active[pd].endSide - this.cursor.startSide) < 0) {
            if (this.activeTo[pd] > dd) {
              this.to = this.activeTo[pd], this.endSide = this.active[pd].endSide;
              break
            }
            this.removeActive(pd), kd && wJ(kd, pd)
          } else {
            if (!this.cursor.value) {
              this.to = this.endSide = 1e9;
              break
            }
            if (this.cursor.from > dd) {
              this.to = this.cursor.from, this.endSide = this.cursor.startSide;
              break
            } {
              let dd = this.cursor.value;
              if (dd.point) {
                if (!(Jd && this.cursor.to == this.to && this.cursor.from < this.cursor.to)) {
                  this.point = dd, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = dd.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
                  break
                }
                this.cursor.next()
              } else this.addActive(kd), this.cursor.next()
            }
          }
        }
        if (kd) {
          this.openStart = 0;
          for (let Jd = kd.length - 1; Jd >= 0 && kd[Jd] < dd; Jd--) this.openStart++
        }
      }
      activeForPoint(dd) {
        if (!this.active.length) return this.active;
        let Jd = [];
        for (let kd = this.active.length - 1; kd >= 0 && !(this.activeRank[kd] < this.pointRank); kd--)(this.activeTo[kd] > dd || this.activeTo[kd] == dd && this.active[kd].endSide >= this.point.endSide) && Jd.push(this.active[kd]);
        return Jd.reverse()
      }
      openEnd(dd) {
        let Jd = 0;
        for (let kd = this.activeTo.length - 1; kd >= 0 && this.activeTo[kd] > dd; kd--) Jd++;
        return Jd
      }
    }

    function zJ(dd, Jd, kd, pd, Nd, Wd) {
      dd.goto(Jd), kd.goto(pd);
      let Pd = pd + Nd,
        Zd = pd,
        gd = pd - Jd,
        Cd = !!Wd.boundChange;
      for (let Kd = !1;;) {
        let Jd = dd.to + gd - kd.to,
          pd = Jd || dd.endSide - kd.endSide,
          Nd = pd < 0 ? dd.to + gd : kd.to,
          od = Math.min(Nd, Pd);
        if (dd.point || kd.point ? (dd.point && kd.point && UJ(dd.point, kd.point) && HJ(dd.activeForPoint(dd.to), kd.activeForPoint(kd.to)) || Wd.comparePoint(Zd, od, dd.point, kd.point), Kd = !1) : (Kd && Wd.boundChange(Zd), od > Zd && !HJ(dd.active, kd.active) && Wd.compareRange(Zd, od, dd.active, kd.active), Cd && od < Pd && (Jd || dd.openEnd(Nd) != kd.openEnd(Nd)) && (Kd = !0)), Nd > Pd) break;
        Zd = Nd, pd <= 0 && dd.next(), pd >= 0 && kd.next()
      }
    }

    function HJ(dd, Jd) {
      if (dd.length != Jd.length) return !1;
      for (let kd = 0; kd < dd.length; kd++)
        if (dd[kd] != Jd[kd] && !UJ(dd[kd], Jd[kd])) return !1;
      return !0
    }

    function wJ(dd, Jd) {
      for (let kd = Jd, pd = dd.length - 1; kd < pd; kd++) dd[kd] = dd[kd + 1];
      dd.pop()
    }

    function AJ(dd, Jd, kd) {
      for (let pd = dd.length - 1; pd >= Jd; pd--) dd[pd + 1] = dd[pd];
      dd[Jd] = kd
    }

    function dk(dd, Jd) {
      let kd = -1,
        pd = 1e9;
      for (let Nd = 0; Nd < Jd.length; Nd++)(Jd[Nd] - pd || dd[Nd].endSide - dd[kd].endSide) < 0 && (kd = Nd, pd = Jd[Nd]);
      return kd
    }

    function Jk(dd, Jd) {
      let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : dd.length,
        pd = 0;
      for (let Nd = 0; Nd < kd && Nd < dd.length;) 9 == dd.charCodeAt(Nd) ? (pd += Jd - pd % Jd, Nd++) : (pd++, Nd = ad(dd, Nd));
      return pd
    }

    function kk(dd, Jd, kd, pd) {
      for (let Nd = 0, Wd = 0;;) {
        if (Wd >= Jd) return Nd;
        if (Nd == dd.length) break;
        Wd += 9 == dd.charCodeAt(Nd) ? kd - Wd % kd : 1, Nd = ad(dd, Nd)
      }
      return !0 === pd ? -1 : dd.length
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);