export const id = 614;
export const ids = [614];
export const modules = {
  53759: (dd, Od, md) => {
    md.d(Od, {
      c: () => YO,
      f: () => Vd,
      ChangeSet: () => Ad,
      i: () => uO,
      j: () => jd,
      m: () => rO,
      p: () => Id,
      t: () => ud,
      v: () => XO,
      B: () => jO,
      z: () => DO,
      F: () => nO,
      I: () => aO,
      M: () => dO,
      N: () => Hd,
      Q: () => EO,
      S: () => xd,
      T: () => Sd,
      W: () => GO,
      Y: () => mm,
      ab: () => Ud,
      bb: () => Wm,
      eb: () => Bd
    });
    let Wd = [],
      Fd = [];

    function Rd(dd) {
      if (dd < 768) return !1;
      for (let Od = 0, md = Wd.length;;) {
        let Rd = Od + md >> 1;
        if (dd < Wd[Rd]) md = Rd;
        else {
          if (!(dd >= Fd[Rd])) return !0;
          Od = Rd + 1
        }
        if (Od == md) return !1
      }
    }

    function Xd(dd) {
      return dd >= 127462 && dd <= 127487
    }(() => {
      let dd = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((dd => dd ? parseInt(dd, 36) : 1));
      for (let Od = 0, md = 0; Od < dd.length; Od++)(Od % 2 ? Fd : Wd).push(md += dd[Od])
    })();
    const Kd = 8205;

    function hd(dd, Od) {
      return (!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2] ? vd : Qd)(dd, Od, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function vd(dd, Od, md) {
      if (Od == dd.length) return Od;
      Od && od(dd.charCodeAt(Od)) && Nd(dd.charCodeAt(Od - 1)) && Od--;
      let Wd = td(dd, Od);
      for (Od += qd(Wd); Od < dd.length;) {
        let Fd = td(dd, Od);
        if (Wd == Kd || Fd == Kd || md && Rd(Fd)) Od += qd(Fd), Wd = Fd;
        else {
          if (!Xd(Fd)) break;
          {
            let md = 0,
              Wd = Od - 2;
            for (; Wd >= 0 && Xd(td(dd, Wd));) md++, Wd -= 2;
            if (md % 2 == 0) break;
            Od += 2
          }
        }
      }
      return Od
    }

    function Qd(dd, Od, md) {
      for (; Od > 0;) {
        let Wd = vd(dd, Od - 2, md);
        if (Wd < Od) return Wd;
        Od--
      }
      return 0
    }

    function td(dd, Od) {
      let md = dd.charCodeAt(Od);
      if (!Nd(md) || Od + 1 == dd.length) return md;
      let Wd = dd.charCodeAt(Od + 1);
      return od(Wd) ? Wd - 56320 + (md - 55296 << 10) + 65536 : md
    }

    function od(dd) {
      return dd >= 56320 && dd < 57344
    }

    function Nd(dd) {
      return dd >= 55296 && dd < 56320
    }

    function qd(dd) {
      return dd < 65536 ? 1 : 2
    }
    class Hd {
      lineAt(dd) {
        if (dd < 0 || dd > this.length) throw new RangeError(`Invalid position ${dd} in document of length ${this.length}`);
        return this.lineInner(dd, !1, 1, 0)
      }
      line(dd) {
        if (dd < 1 || dd > this.lines) throw new RangeError(`Invalid line number ${dd} in ${this.lines}-line document`);
        return this.lineInner(dd, !0, 1, 0)
      }
      replace(dd, Od, md) {
        [dd, Od] = Jd(this, dd, Od);
        let Wd = [];
        return this.decompose(0, dd, Wd, 2), md.length && md.decompose(0, md.length, Wd, 3), this.decompose(Od, this.length, Wd, 1), bd.from(Wd, this.length - (Od - dd) + md.length)
      }
      append(dd) {
        return this.replace(this.length, this.length, dd)
      }
      slice(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        [dd, Od] = Jd(this, dd, Od);
        let md = [];
        return this.decompose(dd, Od, md, 0), bd.from(md, Od - dd)
      }
      eq(dd) {
        if (dd == this) return !0;
        if (dd.length != this.length || dd.lines != this.lines) return !1;
        let Od = this.scanIdentical(dd, 1),
          md = this.length - this.scanIdentical(dd, -1),
          Wd = new Yd(this),
          Fd = new Yd(dd);
        for (let Rd = Od, Xd = Od;;) {
          if (Wd.next(Rd), Fd.next(Rd), Rd = 0, Wd.lineBreak != Fd.lineBreak || Wd.done != Fd.done || Wd.value != Fd.value) return !1;
          if (Xd += Wd.value.length, Wd.done || Xd >= md) return !0
        }
      }
      iter() {
        return new Yd(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1)
      }
      iterRange(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        return new gd(this, dd, Od)
      }
      iterLines(dd, Od) {
        let md;
        if (null == dd) md = this.iter();
        else {
          null == Od && (Od = this.lines + 1);
          let Wd = this.line(dd).from;
          md = this.iterRange(Wd, Math.max(Wd, Od == this.lines + 1 ? this.length : Od <= 1 ? 0 : this.line(Od - 1).to))
        }
        return new wd(md)
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
        return 1 != dd.length || dd[0] ? dd.length <= 32 ? new yd(dd) : bd.from(yd.split(dd, [])) : Hd.empty
      }
    }
    class yd extends Hd {
      constructor(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(dd) {
          let Od = -1;
          for (let md of dd) Od += md.length + 1;
          return Od
        }(dd);
        super(), this.text = dd, this.length = Od
      }
      get lines() {
        return this.text.length
      }
      get children() {
        return null
      }
      lineInner(dd, Od, md, Wd) {
        for (let Fd = 0;; Fd++) {
          let Rd = this.text[Fd],
            Xd = Wd + Rd.length;
          if ((Od ? md : Xd) >= dd) return new Ed(Wd, Xd, md, Rd);
          Wd = Xd + 1, md++
        }
      }
      decompose(dd, Od, md, Wd) {
        let Fd = dd <= 0 && Od >= this.length ? this : new yd(pd(this.text, dd, Od), Math.min(Od, this.length) - Math.max(0, dd));
        if (1 & Wd) {
          let dd = md.pop(),
            Od = Td(Fd.text, dd.text.slice(), 0, Fd.length);
          if (Od.length <= 32) md.push(new yd(Od, dd.length + Fd.length));
          else {
            let dd = Od.length >> 1;
            md.push(new yd(Od.slice(0, dd)), new yd(Od.slice(dd)))
          }
        } else md.push(Fd)
      }
      replace(dd, Od, md) {
        if (!(md instanceof yd)) return super.replace(dd, Od, md);
        [dd, Od] = Jd(this, dd, Od);
        let Wd = Td(this.text, Td(md.text, pd(this.text, 0, dd)), Od),
          Fd = this.length + md.length - (Od - dd);
        return Wd.length <= 32 ? new yd(Wd, Fd) : bd.from(yd.split(Wd, []), Fd)
      }
      sliceString(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [dd, Od] = Jd(this, dd, Od);
        let Wd = "";
        for (let Fd = 0, Rd = 0; Fd <= Od && Rd < this.text.length; Rd++) {
          let Xd = this.text[Rd],
            Kd = Fd + Xd.length;
          Fd > dd && Rd && (Wd += md), dd < Kd && Od > Fd && (Wd += Xd.slice(Math.max(0, dd - Fd), Od - Fd)), Fd = Kd + 1
        }
        return Wd
      }
      flatten(dd) {
        for (let Od of this.text) dd.push(Od)
      }
      scanIdentical() {
        return 0
      }
      static split(dd, Od) {
        let md = [],
          Wd = -1;
        for (let Fd of dd) md.push(Fd), Wd += Fd.length + 1, 32 == md.length && (Od.push(new yd(md, Wd)), md = [], Wd = -1);
        return Wd > -1 && Od.push(new yd(md, Wd)), Od
      }
    }
    class bd extends Hd {
      constructor(dd, Od) {
        super(), this.children = dd, this.length = Od, this.lines = 0;
        for (let md of dd) this.lines += md.lines
      }
      lineInner(dd, Od, md, Wd) {
        for (let Fd = 0;; Fd++) {
          let Rd = this.children[Fd],
            Xd = Wd + Rd.length,
            Kd = md + Rd.lines - 1;
          if ((Od ? Kd : Xd) >= dd) return Rd.lineInner(dd, Od, md, Wd);
          Wd = Xd + 1, md = Kd + 1
        }
      }
      decompose(dd, Od, md, Wd) {
        for (let Fd = 0, Rd = 0; Rd <= Od && Fd < this.children.length; Fd++) {
          let Xd = this.children[Fd],
            Kd = Rd + Xd.length;
          if (dd <= Kd && Od >= Rd) {
            let Fd = Wd & ((Rd <= dd ? 1 : 0) | (Kd >= Od ? 2 : 0));
            Rd >= dd && Kd <= Od && !Fd ? md.push(Xd) : Xd.decompose(dd - Rd, Od - Rd, md, Fd)
          }
          Rd = Kd + 1
        }
      }
      replace(dd, Od, md) {
        if ([dd, Od] = Jd(this, dd, Od), md.lines < this.lines)
          for (let Wd = 0, Fd = 0; Wd < this.children.length; Wd++) {
            let Rd = this.children[Wd],
              Xd = Fd + Rd.length;
            if (dd >= Fd && Od <= Xd) {
              let Kd = Rd.replace(dd - Fd, Od - Fd, md),
                hd = this.lines - Rd.lines + Kd.lines;
              if (Kd.lines < hd >> 4 && Kd.lines > hd >> 6) {
                let Fd = this.children.slice();
                return Fd[Wd] = Kd, new bd(Fd, this.length - (Od - dd) + md.length)
              }
              return super.replace(Fd, Xd, Kd)
            }
            Fd = Xd + 1
          }
        return super.replace(dd, Od, md)
      }
      sliceString(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [dd, Od] = Jd(this, dd, Od);
        let Wd = "";
        for (let Fd = 0, Rd = 0; Fd < this.children.length && Rd <= Od; Fd++) {
          let Xd = this.children[Fd],
            Kd = Rd + Xd.length;
          Rd > dd && Fd && (Wd += md), dd < Kd && Od > Rd && (Wd += Xd.sliceString(dd - Rd, Od - Rd, md)), Rd = Kd + 1
        }
        return Wd
      }
      flatten(dd) {
        for (let Od of this.children) Od.flatten(dd)
      }
      scanIdentical(dd, Od) {
        if (!(dd instanceof bd)) return 0;
        let md = 0,
          [Wd, Fd, Rd, Xd] = Od > 0 ? [0, 0, this.children.length, dd.children.length] : [this.children.length - 1, dd.children.length - 1, -1, -1];
        for (;; Wd += Od, Fd += Od) {
          if (Wd == Rd || Fd == Xd) return md;
          let Kd = this.children[Wd],
            hd = dd.children[Fd];
          if (Kd != hd) return md + Kd.scanIdentical(hd, Od);
          md += Kd.length + 1
        }
      }
      static from(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dd.reduce(((dd, Od) => dd + Od.length + 1), -1),
          md = 0;
        for (let od of dd) md += od.lines;
        if (md < 32) {
          let md = [];
          for (let Od of dd) Od.flatten(md);
          return new yd(md, Od)
        }
        let Wd = Math.max(32, md >> 5),
          Fd = Wd << 1,
          Rd = Wd >> 1,
          Xd = [],
          Kd = 0,
          hd = -1,
          vd = [];

        function Qd(dd) {
          let Od;
          if (dd.lines > Fd && dd instanceof bd)
            for (let md of dd.children) Qd(md);
          else dd.lines > Rd && (Kd > Rd || !Kd) ? (td(), Xd.push(dd)) : dd instanceof yd && Kd && (Od = vd[vd.length - 1]) instanceof yd && dd.lines + Od.lines <= 32 ? (Kd += dd.lines, hd += dd.length + 1, vd[vd.length - 1] = new yd(Od.text.concat(dd.text), Od.length + 1 + dd.length)) : (Kd + dd.lines > Wd && td(), Kd += dd.lines, hd += dd.length + 1, vd.push(dd))
        }

        function td() {
          0 != Kd && (Xd.push(1 == vd.length ? vd[0] : bd.from(vd, hd)), hd = -1, Kd = vd.length = 0)
        }
        for (let od of dd) Qd(od);
        return td(), 1 == Xd.length ? Xd[0] : new bd(Xd, Od)
      }
    }

    function Td(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e9;
      for (let Fd = 0, Rd = 0, Xd = !0; Rd < dd.length && Fd <= Wd; Rd++) {
        let Kd = dd[Rd],
          hd = Fd + Kd.length;
        hd >= md && (hd > Wd && (Kd = Kd.slice(0, Wd - Fd)), Fd < md && (Kd = Kd.slice(md - Fd)), Xd ? (Od[Od.length - 1] += Kd, Xd = !1) : Od.push(Kd)), Fd = hd + 1
      }
      return Od
    }

    function pd(dd, Od, md) {
      return Td(dd, [""], Od, md)
    }
    Hd.empty = new yd([""], 0);
    class Yd {
      constructor(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.dir = Od, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [dd], this.offsets = [Od > 0 ? 1 : (dd instanceof yd ? dd.text.length : dd.children.length) << 1]
      }
      nextInner(dd, Od) {
        for (this.done = this.lineBreak = !1;;) {
          let md = this.nodes.length - 1,
            Wd = this.nodes[md],
            Fd = this.offsets[md],
            Rd = Fd >> 1,
            Xd = Wd instanceof yd ? Wd.text.length : Wd.children.length;
          if (Rd == (Od > 0 ? Xd : 0)) {
            if (0 == md) return this.done = !0, this.value = "", this;
            Od > 0 && this.offsets[md - 1]++, this.nodes.pop(), this.offsets.pop()
          } else if ((1 & Fd) == (Od > 0 ? 0 : 1)) {
            if (this.offsets[md] += Od, 0 == dd) return this.lineBreak = !0, this.value = "\n", this;
            dd--
          } else if (Wd instanceof yd) {
            let Fd = Wd.text[Rd + (Od < 0 ? -1 : 0)];
            if (this.offsets[md] += Od, Fd.length > Math.max(0, dd)) return this.value = 0 == dd ? Fd : Od > 0 ? Fd.slice(dd) : Fd.slice(0, Fd.length - dd), this;
            dd -= Fd.length
          } else {
            let Fd = Wd.children[Rd + (Od < 0 ? -1 : 0)];
            dd > Fd.length ? (dd -= Fd.length, this.offsets[md] += Od) : (Od < 0 && this.offsets[md]--, this.nodes.push(Fd), this.offsets.push(Od > 0 ? 1 : (Fd instanceof yd ? Fd.text.length : Fd.children.length) << 1))
          }
        }
      }
      next() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return dd < 0 && (this.nextInner(-dd, -this.dir), dd = this.value.length), this.nextInner(dd, this.dir)
      }
    }
    class gd {
      constructor(dd, Od, md) {
        this.value = "", this.done = !1, this.cursor = new Yd(dd, Od > md ? -1 : 1), this.pos = Od > md ? dd.length : 0, this.from = Math.min(Od, md), this.to = Math.max(Od, md)
      }
      nextInner(dd, Od) {
        if (Od < 0 ? this.pos <= this.from : this.pos >= this.to) return this.value = "", this.done = !0, this;
        dd += Math.max(0, Od < 0 ? this.pos - this.to : this.from - this.pos);
        let md = Od < 0 ? this.pos - this.from : this.to - this.pos;
        dd > md && (dd = md), md -= dd;
        let {
          value: Wd
        } = this.cursor.next(dd);
        return this.pos += (Wd.length + dd) * Od, this.value = Wd.length <= md ? Wd : Od < 0 ? Wd.slice(Wd.length - md) : Wd.slice(0, md), this.done = !this.value, this
      }
      next() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return dd < 0 ? dd = Math.max(dd, this.from - this.pos) : dd > 0 && (dd = Math.min(dd, this.to - this.pos)), this.nextInner(dd, this.cursor.dir)
      }
      get lineBreak() {
        return this.cursor.lineBreak && "" != this.value
      }
    }
    class wd {
      constructor(dd) {
        this.inner = dd, this.afterBreak = !0, this.value = "", this.done = !1
      }
      next() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          {
            done: Od,
            lineBreak: md,
            value: Wd
          } = this.inner.next(dd);
        return Od && this.afterBreak ? (this.value = "", this.afterBreak = !1) : Od ? (this.done = !0, this.value = "") : md ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = Wd, this.afterBreak = !1), this
      }
      get lineBreak() {
        return !1
      }
    }
    "undefined" != typeof Symbol && (Hd.prototype[Symbol.iterator] = function() {
      return this.iter()
    }, Yd.prototype[Symbol.iterator] = gd.prototype[Symbol.iterator] = wd.prototype[Symbol.iterator] = function() {
      return this
    });
    class Ed {
      constructor(dd, Od, md, Wd) {
        this.from = dd, this.to = Od, this.number = md, this.text = Wd
      }
      get length() {
        return this.to - this.from
      }
    }

    function Jd(dd, Od, md) {
      return [Od = Math.max(0, Math.min(dd.length, Od)), Math.max(Od, Math.min(dd.length, md))]
    }

    function Ud(dd, Od) {
      return hd(dd, Od, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function xd(dd, Od) {
      let md = dd.charCodeAt(Od);
      if (!((Wd = md) >= 55296 && Wd < 56320) || Od + 1 == dd.length) return md;
      var Wd;
      let Fd = dd.charCodeAt(Od + 1);
      return function(dd) {
        return dd >= 56320 && dd < 57344
      }(Fd) ? Fd - 56320 + (md - 55296 << 10) + 65536 : md
    }

    function Bd(dd) {
      return dd <= 65535 ? String.fromCharCode(dd) : (dd -= 65536, String.fromCharCode(55296 + (dd >> 10), 56320 + (1023 & dd)))
    }

    function Sd(dd) {
      return dd < 65536 ? 1 : 2
    }
    const sd = /\r\n?|\n/;
    var ud = function(dd) {
      return dd[dd.Simple = 0] = "Simple", dd[dd.TrackDel = 1] = "TrackDel", dd[dd.TrackBefore = 2] = "TrackBefore", dd[dd.TrackAfter = 3] = "TrackAfter", dd
    }(ud || (ud = {}));
    class Vd {
      constructor(dd) {
        this.sections = dd
      }
      get length() {
        let dd = 0;
        for (let Od = 0; Od < this.sections.length; Od += 2) dd += this.sections[Od];
        return dd
      }
      get newLength() {
        let dd = 0;
        for (let Od = 0; Od < this.sections.length; Od += 2) {
          let md = this.sections[Od + 1];
          dd += md < 0 ? this.sections[Od] : md
        }
        return dd
      }
      get empty() {
        return 0 == this.sections.length || 2 == this.sections.length && this.sections[1] < 0
      }
      iterGaps(dd) {
        for (let Od = 0, md = 0, Wd = 0; Od < this.sections.length;) {
          let Fd = this.sections[Od++],
            Rd = this.sections[Od++];
          Rd < 0 ? (dd(md, Wd, Fd), Wd += Fd) : Wd += Rd, md += Fd
        }
      }
      iterChangedRanges(dd) {
        nd(this, dd, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get invertedDesc() {
        let dd = [];
        for (let Od = 0; Od < this.sections.length;) {
          let md = this.sections[Od++],
            Wd = this.sections[Od++];
          Wd < 0 ? dd.push(md, Wd) : dd.push(Wd, md)
        }
        return new Vd(dd)
      }
      composeDesc(dd) {
        return this.empty ? dd : dd.empty ? this : Pd(this, dd)
      }
      mapDesc(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return dd.empty ? this : Ld(this, dd, Od)
      }
      mapPos(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ud.Simple,
          Wd = 0,
          Fd = 0;
        for (let Rd = 0; Rd < this.sections.length;) {
          let Xd = this.sections[Rd++],
            Kd = this.sections[Rd++],
            hd = Wd + Xd;
          if (Kd < 0) {
            if (hd > dd) return Fd + (dd - Wd);
            Fd += Xd
          } else {
            if (md != ud.Simple && hd >= dd && (md == ud.TrackDel && Wd < dd && hd > dd || md == ud.TrackBefore && Wd < dd || md == ud.TrackAfter && hd > dd)) return null;
            if (hd > dd || hd == dd && Od < 0 && !Xd) return dd == Wd || Od < 0 ? Fd : Fd + Kd;
            Fd += Kd
          }
          Wd = hd
        }
        if (dd > Wd) throw new RangeError(`Position ${dd} is out of range for changeset of length ${Wd}`);
        return Fd
      }
      touchesRange(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dd;
        for (let md = 0, Wd = 0; md < this.sections.length && Wd <= Od;) {
          let Fd = Wd + this.sections[md++];
          if (this.sections[md++] >= 0 && Wd <= Od && Fd >= dd) return !(Wd < dd && Fd > Od) || "cover";
          Wd = Fd
        }
        return !1
      }
      toString() {
        let dd = "";
        for (let Od = 0; Od < this.sections.length;) {
          let md = this.sections[Od++],
            Wd = this.sections[Od++];
          dd += (dd ? " " : "") + md + (Wd >= 0 ? ":" + Wd : "")
        }
        return dd
      }
      toJSON() {
        return this.sections
      }
      static fromJSON(dd) {
        if (!Array.isArray(dd) || dd.length % 2 || dd.some((dd => "number" != typeof dd))) throw new RangeError("Invalid JSON representation of ChangeDesc");
        return new Vd(dd)
      }
      static create(dd) {
        return new Vd(dd)
      }
    }
    class Ad extends Vd {
      constructor(dd, Od) {
        super(dd), this.inserted = Od
      }
      apply(dd) {
        if (this.length != dd.length) throw new RangeError("Applying change set to a document with the wrong length");
        return nd(this, ((Od, md, Wd, Fd, Rd) => dd = dd.replace(Wd, Wd + (md - Od), Rd)), !1), dd
      }
      mapDesc(dd) {
        return Ld(this, dd, arguments.length > 1 && void 0 !== arguments[1] && arguments[1], !0)
      }
      invert(dd) {
        let Od = this.sections.slice(),
          md = [];
        for (let Wd = 0, Fd = 0; Wd < Od.length; Wd += 2) {
          let Rd = Od[Wd],
            Xd = Od[Wd + 1];
          if (Xd >= 0) {
            Od[Wd] = Xd, Od[Wd + 1] = Rd;
            let Kd = Wd >> 1;
            for (; md.length < Kd;) md.push(Hd.empty);
            md.push(Rd ? dd.slice(Fd, Fd + Rd) : Hd.empty)
          }
          Fd += Rd
        }
        return new Ad(Od, md)
      }
      compose(dd) {
        return this.empty ? dd : dd.empty ? this : Pd(this, dd, !0)
      }
      map(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return dd.empty ? this : Ld(this, dd, Od, !0)
      }
      iterChanges(dd) {
        nd(this, dd, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get desc() {
        return Vd.create(this.sections)
      }
      filter(dd) {
        let Od = [],
          md = [],
          Wd = [],
          Fd = new zd(this);
        dd: for (let Rd = 0, Xd = 0;;) {
          let Kd = Rd == dd.length ? 1e9 : dd[Rd++];
          for (; Xd < Kd || Xd == Kd && 0 == Fd.len;) {
            if (Fd.done) break dd;
            let dd = Math.min(Fd.len, Kd - Xd);
            rd(Wd, dd, -1);
            let Rd = -1 == Fd.ins ? -1 : 0 == Fd.off ? Fd.ins : 0;
            rd(Od, dd, Rd), Rd > 0 && Gd(md, Od, Fd.text), Fd.forward(dd), Xd += dd
          }
          let hd = dd[Rd++];
          for (; Xd < hd;) {
            if (Fd.done) break dd;
            let dd = Math.min(Fd.len, hd - Xd);
            rd(Od, dd, -1), rd(Wd, dd, -1 == Fd.ins ? -1 : 0 == Fd.off ? Fd.ins : 0), Fd.forward(dd), Xd += dd
          }
        }
        return {
          changes: new Ad(Od, md),
          filtered: Vd.create(Wd)
        }
      }
      toJSON() {
        let dd = [];
        for (let Od = 0; Od < this.sections.length; Od += 2) {
          let md = this.sections[Od],
            Wd = this.sections[Od + 1];
          Wd < 0 ? dd.push(md) : 0 == Wd ? dd.push([md]) : dd.push([md].concat(this.inserted[Od >> 1].toJSON()))
        }
        return dd
      }
      static of (dd, Od, md) {
        let Wd = [],
          Fd = [],
          Rd = 0,
          Xd = null;

        function Kd() {
          if (!(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && !Wd.length) return;
          Rd < Od && rd(Wd, Od - Rd, -1);
          let dd = new Ad(Wd, Fd);
          Xd = Xd ? Xd.compose(dd.map(Xd)) : dd, Wd = [], Fd = [], Rd = 0
        }
        return function dd(hd) {
          if (Array.isArray(hd))
            for (let Od of hd) dd(Od);
          else if (hd instanceof Ad) {
            if (hd.length != Od) throw new RangeError(`Mismatched change set length (got ${hd.length}, expected ${Od})`);
            Kd(), Xd = Xd ? Xd.compose(hd.map(Xd)) : hd
          } else {
            let {
              from: dd,
              to: Xd = dd,
              insert: vd
            } = hd;
            if (dd > Xd || dd < 0 || Xd > Od) throw new RangeError(`Invalid change range ${dd} to ${Xd} (in doc of length ${Od})`);
            let Qd = vd ? "string" == typeof vd ? Hd.of(vd.split(md || sd)) : vd : Hd.empty,
              td = Qd.length;
            if (dd == Xd && 0 == td) return;
            dd < Rd && Kd(), dd > Rd && rd(Wd, dd - Rd, -1), rd(Wd, Xd - dd, td), Gd(Fd, Wd, Qd), Rd = Xd
          }
        }(dd), Kd(!Xd), Xd
      }
      static empty(dd) {
        return new Ad(dd ? [dd, -1] : [], [])
      }
      static fromJSON(dd) {
        if (!Array.isArray(dd)) throw new RangeError("Invalid JSON representation of ChangeSet");
        let Od = [],
          md = [];
        for (let Wd = 0; Wd < dd.length; Wd++) {
          let Fd = dd[Wd];
          if ("number" == typeof Fd) Od.push(Fd, -1);
          else {
            if (!Array.isArray(Fd) || "number" != typeof Fd[0] || Fd.some(((dd, Od) => Od && "string" != typeof dd))) throw new RangeError("Invalid JSON representation of ChangeSet");
            if (1 == Fd.length) Od.push(Fd[0], 0);
            else {
              for (; md.length < Wd;) md.push(Hd.empty);
              md[Wd] = Hd.of(Fd.slice(1)), Od.push(Fd[0], md[Wd].length)
            }
          }
        }
        return new Ad(Od, md)
      }
      static createSet(dd, Od) {
        return new Ad(dd, Od)
      }
    }

    function rd(dd, Od, md) {
      let Wd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (0 == Od && md <= 0) return;
      let Fd = dd.length - 2;
      Fd >= 0 && md <= 0 && md == dd[Fd + 1] ? dd[Fd] += Od : Fd >= 0 && 0 == Od && 0 == dd[Fd] ? dd[Fd + 1] += md : Wd ? (dd[Fd] += Od, dd[Fd + 1] += md) : dd.push(Od, md)
    }

    function Gd(dd, Od, md) {
      if (0 == md.length) return;
      let Wd = Od.length - 2 >> 1;
      if (Wd < dd.length) dd[dd.length - 1] = dd[dd.length - 1].append(md);
      else {
        for (; dd.length < Wd;) dd.push(Hd.empty);
        dd.push(md)
      }
    }

    function nd(dd, Od, md) {
      let Wd = dd.inserted;
      for (let Fd = 0, Rd = 0, Xd = 0; Xd < dd.sections.length;) {
        let Kd = dd.sections[Xd++],
          hd = dd.sections[Xd++];
        if (hd < 0) Fd += Kd, Rd += Kd;
        else {
          let vd = Fd,
            Qd = Rd,
            td = Hd.empty;
          for (; vd += Kd, Qd += hd, hd && Wd && (td = td.append(Wd[Xd - 2 >> 1])), !(md || Xd == dd.sections.length || dd.sections[Xd + 1] < 0);) Kd = dd.sections[Xd++], hd = dd.sections[Xd++];
          Od(Fd, vd, Rd, Qd, td), Fd = vd, Rd = Qd
        }
      }
    }

    function Ld(dd, Od, md) {
      let Wd = [],
        Fd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3] ? [] : null,
        Rd = new zd(dd),
        Xd = new zd(Od),
        Kd = 0;
      for (let hd = -1;;) {
        if (++Kd > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - likely malformed ChangeSet");
        if (Rd.done && Xd.len || Xd.done && Rd.len) throw new Error("Mismatched change set lengths");
        if (-1 == Rd.ins && -1 == Xd.ins) {
          let dd = Math.min(Rd.len, Xd.len);
          rd(Wd, dd, -1), Rd.forward(dd), Xd.forward(dd)
        } else if (Xd.ins >= 0 && (Rd.ins < 0 || hd == Rd.i || 0 == Rd.off && (Xd.len < Rd.len || Xd.len == Rd.len && !md))) {
          let dd = Xd.len;
          for (rd(Wd, Xd.ins, -1); dd;) {
            if (++Kd > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-b");
            let Od = Math.min(Rd.len, dd);
            Rd.ins >= 0 && hd < Rd.i && Rd.len <= Od && (rd(Wd, 0, Rd.ins), Fd && Gd(Fd, Wd, Rd.text), hd = Rd.i), Rd.forward(Od), dd -= Od
          }
          Xd.next()
        } else {
          if (!(Rd.ins >= 0)) {
            if (Rd.done && Xd.done) return Fd ? Ad.createSet(Wd, Fd) : Vd.create(Wd);
            throw new Error("Mismatched change set lengths")
          } {
            let dd = 0,
              Od = Rd.len;
            for (; Od;) {
              if (++Kd > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-a");
              if (-1 == Xd.ins) {
                let md = Math.min(Od, Xd.len);
                dd += md, Od -= md, Xd.forward(md)
              } else {
                if (!(0 == Xd.ins && Xd.len < Od)) break;
                Od -= Xd.len, Xd.next()
              }
            }
            rd(Wd, dd, hd < Rd.i ? Rd.ins : 0), Fd && hd < Rd.i && Gd(Fd, Wd, Rd.text), hd = Rd.i, Rd.forward(Rd.len - Od)
          }
        }
      }
    }

    function Pd(dd, Od) {
      let md = [],
        Wd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? [] : null,
        Fd = new zd(dd),
        Rd = new zd(Od),
        Xd = 0;
      for (let Kd = !1;;) {
        if (++Xd > 2e6) throw new Error("BLOXD CODEMIRROR: composeSets exceeded max iterations - likely malformed ChangeSet");
        if (Fd.done && Rd.done) return Wd ? Ad.createSet(md, Wd) : Vd.create(md);
        if (0 == Fd.ins) rd(md, Fd.len, 0, Kd), Fd.next();
        else if (0 != Rd.len || Rd.done) {
          if (Fd.done || Rd.done) throw new Error("Mismatched change set lengths");
          {
            let dd = Math.min(Fd.len2, Rd.len),
              Od = md.length;
            if (-1 == Fd.ins) {
              let Od = -1 == Rd.ins ? -1 : Rd.off ? 0 : Rd.ins;
              rd(md, dd, Od, Kd), Wd && Od && Gd(Wd, md, Rd.text)
            } else - 1 == Rd.ins ? (rd(md, Fd.off ? 0 : Fd.len, dd, Kd), Wd && Gd(Wd, md, Fd.textBit(dd))) : (rd(md, Fd.off ? 0 : Fd.len, Rd.off ? 0 : Rd.ins, Kd), Wd && !Rd.off && Gd(Wd, md, Rd.text));
            Kd = (Fd.ins > dd || Rd.ins >= 0 && Rd.len > dd) && (Kd || md.length > Od), Fd.forward2(dd), Rd.forward(dd)
          }
        } else rd(md, 0, Rd.ins, Kd), Wd && Gd(Wd, md, Rd.text), Rd.next()
      }
    }
    class zd {
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
        } = this.set, Od = this.i - 2 >> 1;
        return Od >= dd.length ? Hd.empty : dd[Od]
      }
      textBit(dd) {
        let {
          inserted: Od
        } = this.set, md = this.i - 2 >> 1;
        return md >= Od.length && !dd ? Hd.empty : Od[md].slice(this.off, null == dd ? void 0 : this.off + dd)
      }
      forward(dd) {
        dd == this.len ? this.next() : (this.len -= dd, this.off += dd)
      }
      forward2(dd) {
        -1 == this.ins ? this.forward(dd) : dd == this.ins ? this.next() : (this.ins -= dd, this.off += dd)
      }
    }
    class cd {
      constructor(dd, Od, md) {
        this.from = dd, this.to = Od, this.flags = md
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
        let Od, md, Wd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return this.empty ? Od = md = dd.mapPos(this.from, Wd) : (Od = dd.mapPos(this.from, 1), md = dd.mapPos(this.to, -1)), Od == this.from && md == this.to ? this : new cd(Od, md, this.flags)
      }
      extend(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dd,
          md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (dd <= this.anchor && Od >= this.anchor) return jd.range(dd, Od, void 0, void 0, md);
        let Wd = Math.abs(dd - this.anchor) > Math.abs(Od - this.anchor) ? dd : Od;
        return jd.range(this.anchor, Wd, void 0, void 0, md)
      }
      eq(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.anchor == dd.anchor && this.head == dd.head && this.goalColumn == dd.goalColumn && (!Od || !this.empty || this.assoc == dd.assoc)
      }
      toJSON() {
        return {
          anchor: this.anchor,
          head: this.head
        }
      }
      static fromJSON(dd) {
        if (!dd || "number" != typeof dd.anchor || "number" != typeof dd.head) throw new RangeError("Invalid JSON representation for SelectionRange");
        return jd.range(dd.anchor, dd.head)
      }
      static create(dd, Od, md) {
        return new cd(dd, Od, md)
      }
    }
    class jd {
      constructor(dd, Od) {
        this.By = dd, this.mainIndex = Od
      }
      map(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return dd.empty ? this : jd.create(this.By.map((md => md.map(dd, Od))), this.mainIndex)
      }
      eq(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.By.length != dd.By.length || this.mainIndex != dd.mainIndex) return !1;
        for (let md = 0; md < this.By.length; md++)
          if (!this.By[md].eq(dd.By[md], Od)) return !1;
        return !0
      }
      get main() {
        return this.By[this.mainIndex]
      }
      asSingle() {
        return 1 == this.By.length ? this : new jd([this.main], 0)
      }
      addRange(dd) {
        let Od = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return jd.create([dd].concat(this.By), Od ? 0 : this.mainIndex + 1)
      }
      replaceRange(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.mainIndex,
          md = this.By.slice();
        return md[Od] = dd, jd.create(md, this.mainIndex)
      }
      toJSON() {
        return {
          By: this.By.map((dd => dd.toJSON())),
          main: this.mainIndex
        }
      }
      static fromJSON(dd) {
        if (!dd || !Array.isArray(dd.By) || "number" != typeof dd.main || dd.main >= dd.By.length) throw new RangeError("Invalid JSON representation for EditorSelection");
        return new jd(dd.By.map((dd => cd.fromJSON(dd))), dd.main)
      }
      static single(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dd;
        return new jd([jd.range(dd, Od)], 0)
      }
      static create(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (0 == dd.length) throw new RangeError("A selection needs at least one range");
        for (let md = 0, Wd = 0; Wd < dd.length; Wd++) {
          let Fd = dd[Wd];
          if (Fd.empty ? Fd.from <= md : Fd.from < md) return jd.normalized(dd.slice(), Od);
          md = Fd.to
        }
        return new jd(dd, Od)
      }
      static cursor(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          md = arguments.length > 2 ? arguments[2] : void 0,
          Wd = arguments.length > 3 ? arguments[3] : void 0;
        return cd.create(dd, dd, (0 == Od ? 0 : Od < 0 ? 8 : 16) | (null == md ? 7 : Math.min(6, md)) | (null !== Wd && void 0 !== Wd ? Wd : 16777215) << 6)
      }
      static range(dd, Od, md, Wd, Fd) {
        let Rd = (null !== md && void 0 !== md ? md : 16777215) << 6 | (null == Wd ? 7 : Math.min(6, Wd));
        return Fd || dd == Od || (Fd = Od < dd ? 1 : -1), Od < dd ? cd.create(Od, dd, 48 | Rd) : cd.create(dd, Od, (Fd ? Fd < 0 ? 8 : 16 : 0) | Rd)
      }
      static normalized(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          md = dd[Od];
        dd.sort(((dd, Od) => dd.from - Od.from)), Od = dd.indexOf(md);
        for (let Wd = 1; Wd < dd.length; Wd++) {
          let md = dd[Wd],
            Fd = dd[Wd - 1];
          if (md.empty ? md.from <= Fd.to : md.from < Fd.to) {
            let Rd = Fd.from,
              Xd = Math.max(md.to, Fd.to);
            Wd <= Od && Od--, dd.splice(--Wd, 2, md.anchor > md.head ? jd.range(Xd, Rd) : jd.range(Rd, Xd))
          }
        }
        return new jd(dd, Od)
      }
    }

    function Dd(dd, Od) {
      for (let md of dd.By)
        if (md.to > Od) throw new RangeError("Selection points outside of document")
    }
    let ed = 0;
    class Id {
      constructor(dd, Od, md, Wd, Fd) {
        this.combine = dd, this.compareInput = Od, this.compare = md, this.isStatic = Wd, this.id = ed++, this.default = dd([]), this.extensions = "function" == typeof Fd ? Fd(this) : Fd
      }
      get reader() {
        return this
      }
      static define() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return new Id(dd.combine || (dd => dd), dd.compareInput || ((dd, Od) => dd === Od), dd.compare || (dd.combine ? (dd, Od) => dd === Od : ld), !!dd.static, dd.enables)
      }
      of(dd) {
        return new Cd([], this, 0, dd)
      }
      compute(dd, Od) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new Cd(dd, this, 1, Od)
      }
      computeN(dd, Od) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new Cd(dd, this, 2, Od)
      }
      from(dd, Od) {
        return Od || (Od = dd => dd), this.compute([dd], (md => Od(md.field(dd))))
      }
    }

    function ld(dd, Od) {
      return dd == Od || dd.length == Od.length && dd.every(((dd, md) => dd === Od[md]))
    }
    class Cd {
      constructor(dd, Od, md, Wd) {
        this.dependencies = dd, this.facet = Od, this.type = md, this.value = Wd, this.id = ed++
      }
      dynamicSlot(dd) {
        var Od;
        let md = this.value,
          Wd = this.facet.compareInput,
          Fd = this.id,
          Rd = dd[Fd] >> 1,
          Xd = 2 == this.type,
          Kd = !1,
          hd = !1,
          vd = [];
        for (let Qd of this.dependencies) "doc" == Qd ? Kd = !0 : "selection" == Qd ? hd = !0 : 0 == (1 & (null !== (Od = dd[Qd.id]) && void 0 !== Od ? Od : 1)) && vd.push(dd[Qd.id]);
        return {
          create: dd => (dd.values[Rd] = md(dd), 1),
          update(dd, Od) {
            if (Kd && Od.docChanged || hd && (Od.docChanged || Od.selection) || kd(dd, vd)) {
              let Od = md(dd);
              if (Xd ? !Zd(Od, dd.values[Rd], Wd) : !Wd(Od, dd.values[Rd])) return dd.values[Rd] = Od, 1
            }
            return 0
          },
          reconfigure: (dd, Od) => {
            let Kd, hd = Od.config.address[Fd];
            if (null != hd) {
              let Fd = oO(Od, hd);
              if (this.dependencies.every((md => md instanceof Id ? Od.facet(md) === dd.facet(md) : !(md instanceof dO) || Od.field(md, !1) == dd.field(md, !1))) || (Xd ? Zd(Kd = md(dd), Fd, Wd) : Wd(Kd = md(dd), Fd))) return dd.values[Rd] = Fd, 0
            } else Kd = md(dd);
            return dd.values[Rd] = Kd, 1
          }
        }
      }
    }

    function Zd(dd, Od, md) {
      if (dd.length != Od.length) return !1;
      for (let Wd = 0; Wd < dd.length; Wd++)
        if (!md(dd[Wd], Od[Wd])) return !1;
      return !0
    }

    function kd(dd, Od) {
      let md = !1;
      for (let Wd of Od) 1 & tO(dd, Wd) && (md = !0);
      return md
    }

    function fd(dd, Od, md) {
      let Wd = md.map((Od => dd[Od.id])),
        Fd = md.map((dd => dd.type)),
        Rd = Wd.filter((dd => !(1 & dd))),
        Xd = dd[Od.id] >> 1;

      function Kd(dd) {
        let md = [];
        for (let Od = 0; Od < Wd.length; Od++) {
          let Rd = oO(dd, Wd[Od]);
          if (2 == Fd[Od])
            for (let dd of Rd) md.push(dd);
          else md.push(Rd)
        }
        return Od.combine(md)
      }
      return {
        create(dd) {
          for (let Od of Wd) tO(dd, Od);
          return dd.values[Xd] = Kd(dd), 1
        },
        update(dd, md) {
          if (!kd(dd, Rd)) return 0;
          let Wd = Kd(dd);
          return Od.compare(Wd, dd.values[Xd]) ? 0 : (dd.values[Xd] = Wd, 1)
        },
        reconfigure(dd, Fd) {
          let Rd = kd(dd, Wd),
            hd = Fd.config.facets[Od.id],
            vd = Fd.facet(Od);
          if (hd && !Rd && ld(md, hd)) return dd.values[Xd] = vd, 0;
          let Qd = Kd(dd);
          return Od.compare(Qd, vd) ? (dd.values[Xd] = vd, 0) : (dd.values[Xd] = Qd, 1)
        }
      }
    }
    const Md = Id.define({
      static: !0
    });
    class dO {
      constructor(dd, Od, md, Wd, Fd) {
        this.id = dd, this.createF = Od, this.updateF = md, this.compareF = Wd, this.spec = Fd, this.provides = void 0
      }
      static define(dd) {
        let Od = new dO(ed++, dd.create, dd.update, dd.compare || ((dd, Od) => dd === Od), dd);
        return dd.provide && (Od.provides = dd.provide(Od)), Od
      }
      create(dd) {
        let Od = dd.facet(Md).find((dd => dd.field == this));
        return ((null === Od || void 0 === Od ? void 0 : Od.create) || this.createF)(dd)
      }
      slot(dd) {
        let Od = dd[this.id] >> 1;
        return {
          create: dd => (dd.values[Od] = this.create(dd), 1),
          update: (dd, md) => {
            let Wd = dd.values[Od],
              Fd = this.updateF(Wd, md);
            return this.compareF(Wd, Fd) ? 0 : (dd.values[Od] = Fd, 1)
          },
          reconfigure: (dd, md) => {
            let Wd, Fd = dd.facet(Md),
              Rd = md.facet(Md);
            return (Wd = Fd.find((dd => dd.field == this))) && Wd != Rd.find((dd => dd.field == this)) ? (dd.values[Od] = Wd.create(dd), 1) : null != md.config.address[this.id] ? (dd.values[Od] = md.field(this), 0) : (dd.values[Od] = this.create(dd), 1)
          }
        }
      }
      init(dd) {
        return [this, Md.of({
          field: this,
          create: dd
        })]
      }
      get extension() {
        return this
      }
    }
    const OO = 4,
      mO = 3,
      WO = 2,
      FO = 1;

    function RO(dd) {
      return Od => new KO(Od, dd)
    }
    const XO = {
      highest: RO(0),
      high: RO(FO),
      default: RO(WO),
      low: RO(mO),
      lowest: RO(OO)
    };
    class KO {
      constructor(dd, Od) {
        this.inner = dd, this.prec = Od
      }
    }
    class hO {
      of(dd) {
        return new vO(this, dd)
      }
      reconfigure(dd) {
        return hO.reconfigure.of({
          compartment: this,
          extension: dd
        })
      }
      get(dd) {
        return dd.config.compartments.get(this)
      }
    }
    class vO {
      constructor(dd, Od) {
        this.compartment = dd, this.inner = Od
      }
    }
    class QO {
      constructor(dd, Od, md, Wd, Fd, Rd) {
        for (this.base = dd, this.compartments = Od, this.dynamicSlots = md, this.address = Wd, this.staticValues = Fd, this.facets = Rd, this.statusTemplate = []; this.statusTemplate.length < md.length;) this.statusTemplate.push(0)
      }
      staticFacet(dd) {
        let Od = this.address[dd.id];
        return null == Od ? dd.default : this.staticValues[Od >> 1]
      }
      static resolve(dd, Od, md) {
        let Wd = [],
          Fd = Object.create(null),
          Rd = new Map;
        for (let td of function(dd, Od, md) {
            let Wd = [
                [],
                [],
                [],
                [],
                []
              ],
              Fd = new Map;

            function Rd(dd, Xd) {
              let Kd = Fd.get(dd);
              if (null != Kd) {
                if (Kd <= Xd) return;
                let Od = Wd[Kd].indexOf(dd);
                Od > -1 && Wd[Kd].splice(Od, 1), dd instanceof vO && md.delete(dd.compartment)
              }
              if (Fd.set(dd, Xd), Array.isArray(dd))
                for (let Od of dd) Rd(Od, Xd);
              else if (dd instanceof vO) {
                if (md.has(dd.compartment)) throw new RangeError("Duplicate use of compartment in extensions");
                let Wd = Od.get(dd.compartment) || dd.inner;
                md.set(dd.compartment, Wd), Rd(Wd, Xd)
              } else if (dd instanceof KO) Rd(dd.inner, dd.prec);
              else if (dd instanceof dO) Wd[Xd].push(dd), dd.provides && Rd(dd.provides, Xd);
              else if (dd instanceof Cd) Wd[Xd].push(dd), dd.facet.extensions && Rd(dd.facet.extensions, WO);
              else {
                let Od = dd.extension;
                if (!Od) throw new Error(`Unrecognized extension value in extension set (${dd}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
                Rd(Od, Xd)
              }
            }
            return Rd(dd, WO), Wd.reduce(((dd, Od) => dd.concat(Od)))
          }(dd, Od, Rd)) td instanceof dO ? Wd.push(td) : (Fd[td.facet.id] || (Fd[td.facet.id] = [])).push(td);
        let Xd = Object.create(null),
          Kd = [],
          hd = [];
        for (let td of Wd) Xd[td.id] = hd.length << 1, hd.push((dd => td.slot(dd)));
        let vd = null === md || void 0 === md ? void 0 : md.config.facets;
        for (let td in Fd) {
          let dd = Fd[td],
            Od = dd[0].facet,
            Wd = vd && vd[td] || [];
          if (dd.every((dd => 0 == dd.type)))
            if (Xd[Od.id] = Kd.length << 1 | 1, ld(Wd, dd)) Kd.push(md.facet(Od));
            else {
              let Wd = Od.combine(dd.map((dd => dd.value)));
              Kd.push(md && Od.compare(Wd, md.facet(Od)) ? md.facet(Od) : Wd)
            }
          else {
            for (let Od of dd) 0 == Od.type ? (Xd[Od.id] = Kd.length << 1 | 1, Kd.push(Od.value)) : (Xd[Od.id] = hd.length << 1, hd.push((dd => Od.dynamicSlot(dd))));
            Xd[Od.id] = hd.length << 1, hd.push((md => fd(md, Od, dd)))
          }
        }
        let Qd = hd.map((dd => dd(Xd)));
        return new QO(dd, Rd, Qd, Xd, Kd, Fd)
      }
    }

    function tO(dd, Od) {
      if (1 & Od) return 2;
      let md = Od >> 1,
        Wd = dd.status[md];
      if (4 == Wd) throw new Error("Cyclic dependency between fields and/or facets");
      if (2 & Wd) return Wd;
      dd.status[md] = 4;
      let Fd = dd.computeSlot(dd, dd.config.dynamicSlots[md]);
      return dd.status[md] = 2 | Fd
    }

    function oO(dd, Od) {
      return 1 & Od ? dd.config.staticValues[Od >> 1] : dd.values[Od >> 1]
    }
    const NO = Id.define(),
      qO = Id.define({
        combine: dd => dd.some((dd => dd)),
        static: !0
      }),
      HO = Id.define({
        combine: dd => dd.length ? dd[0] : void 0,
        static: !0
      }),
      yO = Id.define(),
      bO = Id.define(),
      TO = Id.define(),
      pO = Id.define({
        combine: dd => !!dd.length && dd[0]
      });
    class YO {
      constructor(dd, Od) {
        this.type = dd, this.value = Od
      }
      static define() {
        return new gO
      }
    }
    class gO {
      of(dd) {
        return new YO(this, dd)
      }
    }
    class wO {
      constructor(dd) {
        this.map = dd
      }
      of(dd) {
        return new aO(this, dd)
      }
    }
    class aO {
      constructor(dd, Od) {
        this.type = dd, this.value = Od
      }
      map(dd) {
        let Od = this.type.map(this.value, dd);
        return void 0 === Od ? void 0 : Od == this.value ? this : new aO(this.type, Od)
      }
      is(dd) {
        return this.type == dd
      }
      static define() {
        return new wO((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).map || (dd => dd))
      }
      static mapEffects(dd, Od) {
        if (!dd.length) return dd;
        let md = [];
        for (let Wd of dd) {
          let dd = Wd.map(Od);
          dd && md.push(dd)
        }
        return md
      }
    }
    aO.reconfigure = aO.define(), aO.appendConfig = aO.define();
    class EO {
      constructor(dd, Od, md, Wd, Fd, Rd) {
        this.startState = dd, this.changes = Od, this.selection = md, this.effects = Wd, this.annotations = Fd, this.scrollIntoView = Rd, this._doc = null, this._state = null, md && Dd(md, Od.newLength), Fd.some((dd => dd.type == EO.time)) || (this.annotations = Fd.concat(EO.time.of(Date.now())))
      }
      static create(dd, Od, md, Wd, Fd, Rd) {
        return new EO(dd, Od, md, Wd, Fd, Rd)
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
        for (let Od of this.annotations)
          if (Od.type == dd) return Od.value
      }
      get docChanged() {
        return !this.changes.empty
      }
      get reconfigured() {
        return this.startState.config != this.state.config
      }
      isUserEvent(dd) {
        let Od = this.annotation(EO.userEvent);
        return !(!Od || !(Od == dd || Od.length > dd.length && Od.slice(0, dd.length) == dd && "." == Od[dd.length]))
      }
    }

    function JO(dd, Od) {
      let md = [];
      for (let Wd = 0, Fd = 0;;) {
        let Rd, Xd;
        if (Wd < dd.length && (Fd == Od.length || Od[Fd] >= dd[Wd])) Rd = dd[Wd++], Xd = dd[Wd++];
        else {
          if (!(Fd < Od.length)) return md;
          Rd = Od[Fd++], Xd = Od[Fd++]
        }!md.length || md[md.length - 1] < Rd ? md.push(Rd, Xd) : md[md.length - 1] < Xd && (md[md.length - 1] = Xd)
      }
    }

    function UO(dd, Od, md) {
      var Wd;
      let Fd, Rd, Xd;
      return md ? (Fd = Od.changes, Rd = Ad.empty(Od.changes.length), Xd = dd.changes.compose(Od.changes)) : (Fd = Od.changes.map(dd.changes), Rd = dd.changes.mapDesc(Od.changes, !0), Xd = dd.changes.compose(Fd)), {
        changes: Xd,
        selection: Od.selection ? Od.selection.map(Rd) : null === (Wd = dd.selection) || void 0 === Wd ? void 0 : Wd.map(Fd),
        effects: aO.mapEffects(dd.effects, Fd).concat(aO.mapEffects(Od.effects, Rd)),
        annotations: dd.annotations.length ? dd.annotations.concat(Od.annotations) : Od.annotations,
        scrollIntoView: dd.scrollIntoView || Od.scrollIntoView
      }
    }

    function xO(dd, Od, md) {
      let Wd = Od.selection,
        Fd = sO(Od.annotations);
      return Od.userEvent && (Fd = Fd.concat(EO.userEvent.of(Od.userEvent))), {
        changes: Od.changes instanceof Ad ? Od.changes : Ad.of(Od.changes || [], md, dd.facet(HO)),
        selection: Wd && (Wd instanceof jd ? Wd : jd.single(Wd.anchor, Wd.head)),
        effects: sO(Od.effects),
        annotations: Fd,
        scrollIntoView: !!Od.scrollIntoView
      }
    }

    function BO(dd, Od, md) {
      let Wd = xO(dd, Od.length ? Od[0] : {}, dd.doc.length);
      Od.length && !1 === Od[0].filter && (md = !1);
      for (let Rd = 1; Rd < Od.length; Rd++) {
        !1 === Od[Rd].filter && (md = !1);
        let Fd = !!Od[Rd].sequential;
        Wd = UO(Wd, xO(dd, Od[Rd], Fd ? Wd.changes.newLength : dd.doc.length), Fd)
      }
      let Fd = EO.create(dd, Wd.changes, Wd.selection, Wd.effects, Wd.annotations, Wd.scrollIntoView);
      return function(dd) {
        let Od = dd.startState,
          md = Od.facet(TO),
          Wd = dd;
        for (let Fd = md.length - 1; Fd >= 0; Fd--) {
          let Rd = md[Fd](dd);
          Rd && Object.keys(Rd).length && (Wd = UO(Wd, xO(Od, Rd, dd.changes.newLength), !0))
        }
        return Wd == dd ? dd : EO.create(Od, dd.changes, dd.selection, Wd.effects, Wd.annotations, Wd.scrollIntoView)
      }(md ? function(dd) {
        let Od = dd.startState,
          md = !0;
        for (let Fd of Od.facet(yO)) {
          let Od = Fd(dd);
          if (!1 === Od) {
            md = !1;
            break
          }
          Array.isArray(Od) && (md = !0 === md ? Od : JO(md, Od))
        }
        if (!0 !== md) {
          let Wd, Fd;
          if (!1 === md) Fd = dd.changes.invertedDesc, Wd = Ad.empty(Od.doc.length);
          else {
            let Od = dd.changes.filter(md);
            Wd = Od.changes, Fd = Od.filtered.mapDesc(Od.changes).invertedDesc
          }
          dd = EO.create(Od, Wd, dd.selection && dd.selection.map(Fd), aO.mapEffects(dd.effects, Fd), dd.annotations, dd.scrollIntoView)
        }
        let Wd = Od.facet(bO);
        for (let Fd = Wd.length - 1; Fd >= 0; Fd--) {
          let md = Wd[Fd](dd);
          dd = md instanceof EO ? md : Array.isArray(md) && 1 == md.length && md[0] instanceof EO ? md[0] : BO(Od, sO(md), !1)
        }
        return dd
      }(Fd) : Fd)
    }
    EO.time = YO.define(), EO.userEvent = YO.define(), EO.addToHistory = YO.define(), EO.remote = YO.define();
    const SO = [];

    function sO(dd) {
      return null == dd ? SO : Array.isArray(dd) ? dd : [dd]
    }
    var uO = function(dd) {
      return dd[dd.Word = 0] = "Word", dd[dd.Space = 1] = "Space", dd[dd.Other = 2] = "Other", dd
    }(uO || (uO = {}));
    const VO = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
    let iO;
    try {
      iO = new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u")
    } catch (Fm) {}

    function AO(dd) {
      return Od => {
        if (!/\S/.test(Od)) return uO.Space;
        if (function(dd) {
            if (iO) return iO.test(dd);
            for (let Od = 0; Od < dd.length; Od++) {
              let md = dd[Od];
              if (/\w/.test(md) || md > "\x80" && (md.toUpperCase() != md.toLowerCase() || VO.test(md))) return !0
            }
            return !1
          }(Od)) return uO.Word;
        for (let md = 0; md < dd.length; md++)
          if (Od.indexOf(dd[md]) > -1) return uO.Word;
        return uO.Other
      }
    }
    class rO {
      constructor(dd, Od, md, Wd, Fd, Rd) {
        this.config = dd, this.doc = Od, this.selection = md, this.values = Wd, this.status = dd.statusTemplate.slice(), this.computeSlot = Fd, Rd && (Rd._state = this);
        for (let Xd = 0; Xd < this.config.dynamicSlots.length; Xd++) tO(this, Xd << 1);
        this.computeSlot = null
      }
      field(dd) {
        let Od = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          md = this.config.address[dd.id];
        if (null != md) return tO(this, md), oO(this, md);
        if (Od) throw new RangeError("Field is not present in this state")
      }
      update() {
        for (var dd = arguments.length, Od = new Array(dd), md = 0; md < dd; md++) Od[md] = arguments[md];
        return BO(this, Od, !0)
      }
      applyTransaction(dd) {
        let Od, md = this.config,
          {
            base: Wd,
            compartments: Fd
          } = md;
        for (let Xd of dd.effects) Xd.is(hO.reconfigure) ? (md && (Fd = new Map, md.compartments.forEach(((dd, Od) => Fd.set(Od, dd))), md = null), Fd.set(Xd.value.compartment, Xd.value.extension)) : Xd.is(aO.reconfigure) ? (md = null, Wd = Xd.value) : Xd.is(aO.appendConfig) && (md = null, Wd = sO(Wd).concat(Xd.value));
        if (md) Od = dd.startState.values.slice();
        else {
          md = QO.resolve(Wd, Fd, this), Od = new rO(md, this.doc, this.selection, md.dynamicSlots.map((() => null)), ((dd, Od) => Od.reconfigure(dd, this)), null).values
        }
        let Rd = dd.startState.facet(qO) ? dd.newSelection : dd.newSelection.asSingle();
        new rO(md, dd.newDoc, Rd, Od, ((Od, md) => md.update(Od, dd)), dd)
      }
      replaceSelection(dd) {
        return "string" == typeof dd && (dd = this.toText(dd)), this.changeByRange((Od => ({
          changes: {
            from: Od.from,
            to: Od.to,
            insert: dd
          },
          range: jd.cursor(Od.from + dd.length)
        })))
      }
      changeByRange(dd) {
        let Od = this.selection,
          md = dd(Od.By[0]),
          Wd = this.changes(md.changes),
          Fd = [md.range],
          Rd = sO(md.effects);
        for (let Xd = 1; Xd < Od.By.length; Xd++) {
          let md = dd(Od.By[Xd]),
            Kd = this.changes(md.changes),
            hd = Kd.map(Wd);
          for (let dd = 0; dd < Xd; dd++) Fd[dd] = Fd[dd].map(hd);
          let vd = Wd.mapDesc(Kd, !0);
          Fd.push(md.range.map(vd)), Wd = Wd.compose(hd), Rd = aO.mapEffects(Rd, hd).concat(aO.mapEffects(sO(md.effects), vd))
        }
        return {
          changes: Wd,
          selection: jd.create(Fd, Od.mainIndex),
          effects: Rd
        }
      }
      changes() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return dd instanceof Ad ? dd : Ad.of(dd, this.doc.length, this.facet(rO.lineSeparator))
      }
      toText(dd) {
        return Hd.of(dd.split(this.facet(rO.lineSeparator) || sd))
      }
      sliceDoc() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.doc.length;
        return this.doc.sliceString(dd, Od, this.lineBreak)
      }
      facet(dd) {
        let Od = this.config.address[dd.id];
        return null == Od ? dd.default : (tO(this, Od), oO(this, Od))
      }
      toJSON(dd) {
        let Od = {
          doc: this.sliceDoc(),
          selection: this.selection.toJSON()
        };
        if (dd)
          for (let md in dd) {
            let Wd = dd[md];
            Wd instanceof dO && null != this.config.address[Wd.id] && (Od[md] = Wd.spec.toJSON(this.field(dd[md]), this))
          }
        return Od
      }
      static fromJSON(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          md = arguments.length > 2 ? arguments[2] : void 0;
        if (!dd || "string" != typeof dd.doc) throw new RangeError("Invalid JSON representation for EditorState");
        let Wd = [];
        if (md)
          for (let Fd in md)
            if (Object.prototype.hasOwnProperty.call(dd, Fd)) {
              let Od = md[Fd],
                Rd = dd[Fd];
              Wd.push(Od.init((dd => Od.spec.fromJSON(Rd, dd))))
            } return rO.create({
          doc: dd.doc,
          selection: jd.fromJSON(dd.selection),
          extensions: Od.extensions ? Wd.concat([Od.extensions]) : Wd
        })
      }
      static create() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          Od = QO.resolve(dd.extensions || [], new Map),
          md = dd.doc instanceof Hd ? dd.doc : Hd.of((dd.doc || "").split(Od.staticFacet(rO.lineSeparator) || sd)),
          Wd = dd.selection ? dd.selection instanceof jd ? dd.selection : jd.single(dd.selection.anchor, dd.selection.head) : jd.single(0);
        return Dd(Wd, md.length), Od.staticFacet(qO) || (Wd = Wd.asSingle()), new rO(Od, md, Wd, Od.dynamicSlots.map((() => null)), ((dd, Od) => Od.create(dd)), null)
      }
      get tabSize() {
        return this.facet(rO.tabSize)
      }
      get lineBreak() {
        return this.facet(rO.lineSeparator) || "\n"
      }
      get readOnly() {
        return this.facet(pO)
      }
      phrase(dd) {
        for (var Od = arguments.length, md = new Array(Od > 1 ? Od - 1 : 0), Wd = 1; Wd < Od; Wd++) md[Wd - 1] = arguments[Wd];
        for (let Fd of this.facet(rO.phrases))
          if (Object.prototype.hasOwnProperty.call(Fd, dd)) {
            dd = Fd[dd];
            break
          } return md.length && (dd = dd.replace(/\$(\$|\d*)/g, ((dd, Od) => {
          if ("$" == Od) return "$";
          let Wd = +(Od || 1);
          return !Wd || Wd > md.length ? dd : md[Wd - 1]
        }))), dd
      }
      languageDataAt(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          Wd = [];
        for (let Fd of this.facet(NO))
          for (let Rd of Fd(this, Od, md)) Object.prototype.hasOwnProperty.call(Rd, dd) && Wd.push(Rd[dd]);
        return Wd
      }
      charCategorizer(dd) {
        let Od = this.languageDataAt("wordChars", dd);
        return AO(Od.length ? Od[0] : "")
      }
      wordAt(dd) {
        let {
          text: Od,
          from: md,
          length: Wd
        } = this.doc.lineAt(dd), Fd = this.charCategorizer(dd), Rd = dd - md, Xd = dd - md;
        for (; Rd > 0;) {
          let dd = Ud(Od, Rd, !1);
          if (Fd(Od.slice(dd, Rd)) != uO.Word) break;
          Rd = dd
        }
        for (; Xd < Wd;) {
          let dd = Ud(Od, Xd);
          if (Fd(Od.slice(Xd, dd)) != uO.Word) break;
          Xd = dd
        }
        return Rd == Xd ? null : jd.range(Rd + md, Xd + md)
      }
    }

    function GO(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        Wd = {};
      for (let Fd of dd)
        for (let dd of Object.keys(Fd)) {
          let Od = Fd[dd],
            Rd = Wd[dd];
          if (void 0 === Rd) Wd[dd] = Od;
          else if (Rd === Od || void 0 === Od);
          else {
            if (!Object.hasOwnProperty.call(md, dd)) throw new Error("Config merge conflict for field " + dd);
            Wd[dd] = md[dd](Rd, Od)
          }
        }
      for (let Fd in Od) void 0 === Wd[Fd] && (Wd[Fd] = Od[Fd]);
      return Wd
    }
    rO.allowMultipleSelections = qO, rO.tabSize = Id.define({
      combine: dd => dd.length ? dd[0] : 4
    }), rO.lineSeparator = HO, rO.readOnly = pO, rO.phrases = Id.define({
      compare(dd, Od) {
        let md = Object.keys(dd),
          Wd = Object.keys(Od);
        return md.length == Wd.length && md.every((md => dd[md] == Od[md]))
      }
    }), rO.languageData = NO, rO.changeFilter = yO, rO.transactionFilter = bO, rO.transactionExtender = TO, hO.reconfigure = aO.define();
    class nO {
      eq(dd) {
        return this == dd
      }
      range(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dd;
        return PO.create(dd, Od, this)
      }
    }

    function LO(dd, Od) {
      return dd == Od || dd.constructor == Od.constructor && dd.eq(Od)
    }
    nO.prototype.startSide = nO.prototype.endSide = 0, nO.prototype.point = !1, nO.prototype.mapMode = ud.TrackDel;
    class PO {
      constructor(dd, Od, md) {
        this.from = dd, this.to = Od, this.value = md
      }
      static create(dd, Od, md) {
        return new PO(dd, Od, md)
      }
    }

    function zO(dd, Od) {
      return dd.from - Od.from || dd.value.startSide - Od.value.startSide
    }
    class cO {
      constructor(dd, Od, md, Wd) {
        this.from = dd, this.to = Od, this.value = md, this.XRd = Wd
      }
      get length() {
        return this.to[this.to.length - 1]
      }
      findIndex(dd, Od, md) {
        let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Fd = md ? this.to : this.from;
        for (let Rd = Wd, Xd = Fd.length;;) {
          if (Rd == Xd) return Rd;
          let Wd = Rd + Xd >> 1,
            Kd = Fd[Wd] - dd || (md ? this.value[Wd].endSide : this.value[Wd].startSide) - Od;
          if (Wd == Rd) return Kd >= 0 ? Rd : Xd;
          Kd >= 0 ? Xd = Wd : Rd = Wd + 1
        }
      }
      between(dd, Od, md, Wd) {
        for (let Fd = this.findIndex(Od, -1e9, !0), Rd = this.findIndex(md, 1e9, !1, Fd); Fd < Rd; Fd++)
          if (!1 === Wd(this.from[Fd] + dd, this.to[Fd] + dd, this.value[Fd])) return !1
      }
      map(dd, Od) {
        let md = [],
          Wd = [],
          Fd = [],
          Rd = -1,
          Xd = -1;
        for (let Kd = 0; Kd < this.value.length; Kd++) {
          let hd, vd, Qd = this.value[Kd],
            td = this.from[Kd] + dd,
            od = this.to[Kd] + dd;
          if (td == od) {
            let dd = Od.mapPos(td, Qd.startSide, Qd.mapMode);
            if (null == dd) continue;
            if (hd = vd = dd, Qd.startSide != Qd.endSide && (vd = Od.mapPos(td, Qd.endSide), vd < hd)) continue
          } else if (hd = Od.mapPos(td, Qd.startSide), vd = Od.mapPos(od, Qd.endSide), hd > vd || hd == vd && Qd.startSide > 0 && Qd.endSide <= 0) continue;
          (vd - hd || Qd.endSide - Qd.startSide) < 0 || (Rd < 0 && (Rd = hd), Qd.point && (Xd = Math.max(Xd, vd - hd)), md.push(Qd), Wd.push(hd - Rd), Fd.push(vd - Rd))
        }
        return {
          mapped: md.length ? new cO(Wd, Fd, md, Xd) : null,
          pos: Rd
        }
      }
    }
    class jO {
      constructor(dd, Od, md, Wd) {
        this.chunkPos = dd, this.chunk = Od, this.nextLayer = md, this.XRd = Wd
      }
      static create(dd, Od, md, Wd) {
        return new jO(dd, Od, md, Wd)
      }
      get length() {
        let dd = this.chunk.length - 1;
        return dd < 0 ? 0 : Math.max(this.chunkEnd(dd), this.nextLayer.length)
      }
      get size() {
        if (this.Nt) return 0;
        let dd = this.nextLayer.size;
        for (let Od of this.chunk) dd += Od.value.length;
        return dd
      }
      chunkEnd(dd) {
        return this.chunkPos[dd] + this.chunk[dd].length
      }
      update(dd) {
        let {
          add: Od = [],
          sort: md = !1,
          filterFrom: Wd = 0,
          filterTo: Fd = this.length
        } = dd, Rd = dd.filter;
        if (0 == Od.length && !Rd) return this;
        if (md && (Od = Od.slice().sort(zO)), this.Nt) return Od.length ? jO.of(Od) : this;
        let Xd = new IO(this, null, -1).goto(0),
          Kd = 0,
          hd = [],
          vd = new DO;
        for (; Xd.value || Kd < Od.length;)
          if (Kd < Od.length && (Xd.from - Od[Kd].from || Xd.startSide - Od[Kd].value.startSide) >= 0) {
            let dd = Od[Kd++];
            vd.addInner(dd.from, dd.to, dd.value) || hd.push(dd)
          } else 1 == Xd.rangeIndex && Xd.chunkIndex < this.chunk.length && (Kd == Od.length || this.chunkEnd(Xd.chunkIndex) < Od[Kd].from) && (!Rd || Wd > this.chunkEnd(Xd.chunkIndex) || Fd < this.chunkPos[Xd.chunkIndex]) && vd.addChunk(this.chunkPos[Xd.chunkIndex], this.chunk[Xd.chunkIndex]) ? Xd.nextChunk() : ((!Rd || Wd > Xd.to || Fd < Xd.from || Rd(Xd.from, Xd.to, Xd.value)) && (vd.addInner(Xd.from, Xd.to, Xd.value) || hd.push(PO.create(Xd.from, Xd.to, Xd.value))), Xd.next());
        return vd.finishInner(this.nextLayer.Nt && !hd.length ? jO.empty : this.nextLayer.update({
          add: hd,
          filter: Rd,
          filterFrom: Wd,
          filterTo: Fd
        }))
      }
      map(dd) {
        if (dd.empty || this.Nt) return this;
        let Od = [],
          md = [],
          Wd = -1;
        for (let Rd = 0; Rd < this.chunk.length; Rd++) {
          let Fd = this.chunkPos[Rd],
            Xd = this.chunk[Rd],
            Kd = dd.touchesRange(Fd, Fd + Xd.length);
          if (!1 === Kd) Wd = Math.max(Wd, Xd.XRd), Od.push(Xd), md.push(dd.mapPos(Fd));
          else if (!0 === Kd) {
            let {
              mapped: Rd,
              pos: Kd
            } = Xd.map(Fd, dd);
            Rd && (Wd = Math.max(Wd, Rd.XRd), Od.push(Rd), md.push(Kd))
          }
        }
        let Fd = this.nextLayer.map(dd);
        return 0 == Od.length ? Fd : new jO(md, Od, Fd || jO.empty, Wd)
      }
      between(dd, Od, md) {
        if (!this.Nt) {
          for (let Wd = 0; Wd < this.chunk.length; Wd++) {
            let Fd = this.chunkPos[Wd],
              Rd = this.chunk[Wd];
            if (Od >= Fd && dd <= Fd + Rd.length && !1 === Rd.between(Fd, dd - Fd, Od - Fd, md)) return
          }
          this.nextLayer.between(dd, Od, md)
        }
      }
      iter() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return lO.from([this]).goto(dd)
      }
      get Nt() {
        return this.nextLayer == this
      }
      static iter(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return lO.from(dd).goto(Od)
      }
      static compare(dd, Od, md, Wd) {
        let Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1,
          Rd = dd.filter((dd => dd.XRd > 0 || !dd.Nt && dd.XRd >= Fd)),
          Xd = Od.filter((dd => dd.XRd > 0 || !dd.Nt && dd.XRd >= Fd)),
          Kd = eO(Rd, Xd, md),
          hd = new ZO(Rd, Kd, Fd),
          vd = new ZO(Xd, Kd, Fd);
        md.iterGaps(((dd, Od, md) => kO(hd, dd, vd, Od, md, Wd))), md.empty && 0 == md.length && kO(hd, 0, vd, 0, 0, Wd)
      }
      static eq(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Wd = arguments.length > 3 ? arguments[3] : void 0;
        null == Wd && (Wd = 999999999);
        let Fd = dd.filter((dd => !dd.Nt && Od.indexOf(dd) < 0)),
          Rd = Od.filter((Od => !Od.Nt && dd.indexOf(Od) < 0));
        if (Fd.length != Rd.length) return !1;
        if (!Fd.length) return !0;
        let Xd = eO(Fd, Rd),
          Kd = new ZO(Fd, Xd, 0).goto(md),
          hd = new ZO(Rd, Xd, 0).goto(md);
        for (;;) {
          if (Kd.to != hd.to || !fO(Kd.active, hd.active) || Kd.point && (!hd.point || !LO(Kd.point, hd.point))) return !1;
          if (Kd.to > Wd) return !0;
          Kd.next(), hd.next()
        }
      }
      static spans(dd, Od, md, Wd) {
        let Fd = new ZO(dd, null, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1).goto(Od),
          Rd = Od,
          Xd = Fd.openStart;
        for (;;) {
          let dd = Math.min(Fd.to, md);
          if (Fd.point) {
            let md = Fd.activeForPoint(Fd.to),
              Kd = Fd.pointFrom < Od ? md.length + 1 : Fd.point.startSide < 0 ? md.length : Math.min(md.length, Xd);
            Wd.point(Rd, dd, Fd.point, md, Kd, Fd.pointRank), Xd = Math.min(Fd.openEnd(dd), md.length)
          } else dd > Rd && (Wd.span(Rd, dd, Fd.active, Xd), Xd = Fd.openEnd(dd));
          if (Fd.to > md) return Xd + (Fd.point && Fd.to > md ? 1 : 0);
          Rd = Fd.to, Fd.next()
        }
      }
      static of (dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          md = new DO;
        for (let Wd of dd instanceof PO ? [dd] : Od ? function(dd) {
            if (dd.length > 1)
              for (let Od = dd[0], md = 1; md < dd.length; md++) {
                let Wd = dd[md];
                if (zO(Od, Wd) > 0) return dd.slice().sort(zO);
                Od = Wd
              }
            return dd
          }(dd) : dd) md.add(Wd.from, Wd.to, Wd.value);
        return md.finish()
      }
      static join(dd) {
        if (!dd.length) return jO.empty;
        let Od = dd[dd.length - 1];
        for (let md = dd.length - 2; md >= 0; md--)
          for (let Wd = dd[md]; Wd != jO.empty; Wd = Wd.nextLayer) Od = new jO(Wd.chunkPos, Wd.chunk, Od, Math.max(Wd.XRd, Od.XRd));
        return Od
      }
    }
    jO.empty = new jO([], [], null, -1), jO.empty.nextLayer = jO.empty;
    class DO {
      finishChunk(dd) {
        this.chunks.push(new cO(this.from, this.to, this.value, this.XRd)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.XRd), this.XRd = -1, dd && (this.from = [], this.to = [], this.value = [])
      }
      constructor() {
        this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.XRd = -1, this.setMaxPoint = -1, this.nextLayer = null
      }
      add(dd, Od, md) {
        this.addInner(dd, Od, md) || (this.nextLayer || (this.nextLayer = new DO)).add(dd, Od, md)
      }
      addInner(dd, Od, md) {
        let Wd = dd - this.lastTo || md.startSide - this.last.endSide;
        if (Wd <= 0 && (dd - this.lastFrom || md.startSide - this.last.startSide) < 0) throw new Error("Ranges must be added sorted by `from` position and `startSide`");
        return !(Wd < 0) && (250 == this.from.length && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = dd), this.from.push(dd - this.chunkStart), this.to.push(Od - this.chunkStart), this.last = md, this.lastFrom = dd, this.lastTo = Od, this.value.push(md), md.point && (this.XRd = Math.max(this.XRd, Od - dd)), !0)
      }
      addChunk(dd, Od) {
        if ((dd - this.lastTo || Od.value[0].startSide - this.last.endSide) < 0) return !1;
        this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, Od.XRd), this.chunks.push(Od), this.chunkPos.push(dd);
        let md = Od.value.length - 1;
        return this.last = Od.value[md], this.lastFrom = Od.from[md] + dd, this.lastTo = Od.to[md] + dd, !0
      }
      finish() {
        return this.finishInner(jO.empty)
      }
      finishInner(dd) {
        if (this.from.length && this.finishChunk(!1), 0 == this.chunks.length) return dd;
        let Od = jO.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(dd) : dd, this.setMaxPoint);
        return this.from = null, Od
      }
    }

    function eO(dd, Od, md) {
      let Wd = new Map;
      for (let Rd of dd)
        for (let dd = 0; dd < Rd.chunk.length; dd++) Rd.chunk[dd].XRd <= 0 && Wd.set(Rd.chunk[dd], Rd.chunkPos[dd]);
      let Fd = new Set;
      for (let Rd of Od)
        for (let dd = 0; dd < Rd.chunk.length; dd++) {
          let Od = Wd.get(Rd.chunk[dd]);
          null == Od || (md ? md.mapPos(Od) : Od) != Rd.chunkPos[dd] || (null === md || void 0 === md ? void 0 : md.touchesRange(Od, Od + Rd.chunk[dd].length)) || Fd.add(Rd.chunk[dd])
        }
      return Fd
    }
    class IO {
      constructor(dd, Od, md) {
        let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.layer = dd, this.skip = Od, this.KRd = md, this.rank = Wd
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      get endSide() {
        return this.value ? this.value.endSide : 0
      }
      goto(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(dd, Od, !1), this
      }
      gotoInner(dd, Od, md) {
        for (; this.chunkIndex < this.layer.chunk.length;) {
          let Od = this.layer.chunk[this.chunkIndex];
          if (!(this.skip && this.skip.has(Od) || this.layer.chunkEnd(this.chunkIndex) < dd || Od.XRd < this.KRd)) break;
          this.chunkIndex++, md = !1
        }
        if (this.chunkIndex < this.layer.chunk.length) {
          let Wd = this.layer.chunk[this.chunkIndex].findIndex(dd - this.layer.chunkPos[this.chunkIndex], Od, !0);
          (!md || this.rangeIndex < Wd) && this.setRangeIndex(Wd)
        }
        this.next()
      }
      forward(dd, Od) {
        (this.to - dd || this.endSide - Od) < 0 && this.gotoInner(dd, Od, !0)
      }
      next() {
        for (;;) {
          if (this.chunkIndex == this.layer.chunk.length) {
            this.from = this.to = 1e9, this.value = null;
            break
          } {
            let dd = this.layer.chunkPos[this.chunkIndex],
              Od = this.layer.chunk[this.chunkIndex],
              md = dd + Od.from[this.rangeIndex];
            if (this.from = md, this.to = dd + Od.to[this.rangeIndex], this.value = Od.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.KRd < 0 || this.value.point && this.to - this.from >= this.KRd) break
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
    class lO {
      constructor(dd) {
        this.heap = dd
      }
      static from(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          Wd = [];
        for (let Fd = 0; Fd < dd.length; Fd++)
          for (let Rd = dd[Fd]; !Rd.Nt; Rd = Rd.nextLayer) Rd.XRd >= md && Wd.push(new IO(Rd, Od, md, Fd));
        return 1 == Wd.length ? Wd[0] : new lO(Wd)
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      goto(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        for (let md of this.heap) md.goto(dd, Od);
        for (let md = this.heap.length >> 1; md >= 0; md--) CO(this.heap, md);
        return this.next(), this
      }
      forward(dd, Od) {
        for (let md of this.heap) md.forward(dd, Od);
        for (let md = this.heap.length >> 1; md >= 0; md--) CO(this.heap, md);
        (this.to - dd || this.value.endSide - Od) < 0 && this.next()
      }
      next() {
        if (0 == this.heap.length) this.from = this.to = 1e9, this.value = null, this.rank = -1;
        else {
          let dd = this.heap[0];
          this.from = dd.from, this.to = dd.to, this.value = dd.value, this.rank = dd.rank, dd.value && dd.next(), CO(this.heap, 0)
        }
      }
    }

    function CO(dd, Od) {
      for (let md = dd[Od];;) {
        let Wd = 1 + (Od << 1);
        if (Wd >= dd.length) break;
        let Fd = dd[Wd];
        if (Wd + 1 < dd.length && Fd.compare(dd[Wd + 1]) >= 0 && (Fd = dd[Wd + 1], Wd++), md.compare(Fd) < 0) break;
        dd[Wd] = md, dd[Od] = Fd, Od = Wd
      }
    }
    class ZO {
      constructor(dd, Od, md) {
        this.KRd = md, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = lO.from(dd, Od, md)
      }
      goto(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.cursor.goto(dd, Od), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = dd, this.endSide = Od, this.openStart = -1, this.next(), this
      }
      forward(dd, Od) {
        for (; this.minActive > -1 && (this.activeTo[this.minActive] - dd || this.active[this.minActive].endSide - Od) < 0;) this.removeActive(this.minActive);
        this.cursor.forward(dd, Od)
      }
      removeActive(dd) {
        MO(this.active, dd), MO(this.activeTo, dd), MO(this.activeRank, dd), this.minActive = Om(this.active, this.activeTo)
      }
      addActive(dd) {
        let Od = 0,
          {
            value: md,
            to: Wd,
            rank: Fd
          } = this.cursor;
        for (; Od < this.activeRank.length && (Fd - this.activeRank[Od] || Wd - this.activeTo[Od]) > 0;) Od++;
        dm(this.active, Od, md), dm(this.activeTo, Od, Wd), dm(this.activeRank, Od, Fd), dd && dm(dd, Od, this.cursor.from), this.minActive = Om(this.active, this.activeTo)
      }
      next() {
        let dd = this.to,
          Od = this.point;
        this.point = null;
        let md = this.openStart < 0 ? [] : null;
        for (;;) {
          let Wd = this.minActive;
          if (Wd > -1 && (this.activeTo[Wd] - this.cursor.from || this.active[Wd].endSide - this.cursor.startSide) < 0) {
            if (this.activeTo[Wd] > dd) {
              this.to = this.activeTo[Wd], this.endSide = this.active[Wd].endSide;
              break
            }
            this.removeActive(Wd), md && MO(md, Wd)
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
                if (!(Od && this.cursor.to == this.to && this.cursor.from < this.cursor.to)) {
                  this.point = dd, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = dd.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
                  break
                }
                this.cursor.next()
              } else this.addActive(md), this.cursor.next()
            }
          }
        }
        if (md) {
          this.openStart = 0;
          for (let Od = md.length - 1; Od >= 0 && md[Od] < dd; Od--) this.openStart++
        }
      }
      activeForPoint(dd) {
        if (!this.active.length) return this.active;
        let Od = [];
        for (let md = this.active.length - 1; md >= 0 && !(this.activeRank[md] < this.pointRank); md--)(this.activeTo[md] > dd || this.activeTo[md] == dd && this.active[md].endSide >= this.point.endSide) && Od.push(this.active[md]);
        return Od.reverse()
      }
      openEnd(dd) {
        let Od = 0;
        for (let md = this.activeTo.length - 1; md >= 0 && this.activeTo[md] > dd; md--) Od++;
        return Od
      }
    }

    function kO(dd, Od, md, Wd, Fd, Rd) {
      dd.goto(Od), md.goto(Wd);
      let Xd = Wd + Fd,
        Kd = Wd,
        hd = Wd - Od,
        vd = !!Rd.boundChange;
      for (let Qd = !1;;) {
        let Od = dd.to + hd - md.to,
          Wd = Od || dd.endSide - md.endSide,
          Fd = Wd < 0 ? dd.to + hd : md.to,
          td = Math.min(Fd, Xd);
        if (dd.point || md.point ? (dd.point && md.point && LO(dd.point, md.point) && fO(dd.activeForPoint(dd.to), md.activeForPoint(md.to)) || Rd.comparePoint(Kd, td, dd.point, md.point), Qd = !1) : (Qd && Rd.boundChange(Kd), td > Kd && !fO(dd.active, md.active) && Rd.compareRange(Kd, td, dd.active, md.active), vd && td < Xd && (Od || dd.openEnd(Fd) != md.openEnd(Fd)) && (Qd = !0)), Fd > Xd) break;
        Kd = Fd, Wd <= 0 && dd.next(), Wd >= 0 && md.next()
      }
    }

    function fO(dd, Od) {
      if (dd.length != Od.length) return !1;
      for (let md = 0; md < dd.length; md++)
        if (dd[md] != Od[md] && !LO(dd[md], Od[md])) return !1;
      return !0
    }

    function MO(dd, Od) {
      for (let md = Od, Wd = dd.length - 1; md < Wd; md++) dd[md] = dd[md + 1];
      dd.pop()
    }

    function dm(dd, Od, md) {
      for (let Wd = dd.length - 1; Wd >= Od; Wd--) dd[Wd + 1] = dd[Wd];
      dd[Od] = md
    }

    function Om(dd, Od) {
      let md = -1,
        Wd = 1e9;
      for (let Fd = 0; Fd < Od.length; Fd++)(Od[Fd] - Wd || dd[Fd].endSide - dd[md].endSide) < 0 && (md = Fd, Wd = Od[Fd]);
      return md
    }

    function mm(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : dd.length,
        Wd = 0;
      for (let Fd = 0; Fd < md && Fd < dd.length;) 9 == dd.charCodeAt(Fd) ? (Wd += Od - Wd % Od, Fd++) : (Wd++, Fd = Ud(dd, Fd));
      return Wd
    }

    function Wm(dd, Od, md, Wd) {
      for (let Fd = 0, Rd = 0;;) {
        if (Rd >= Od) return Fd;
        if (Fd == dd.length) break;
        Rd += 9 == dd.charCodeAt(Fd) ? md - Rd % md : 1, Fd = Ud(dd, Fd)
      }
      return !0 === Wd ? -1 : dd.length
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);