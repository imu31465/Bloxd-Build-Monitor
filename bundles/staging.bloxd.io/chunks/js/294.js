export const id = 294;
export const ids = [294];
export const modules = {
  41356: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => IT,
      h: () => Nm,
      ChangeSet: () => Gm,
      k: () => eT,
      o: () => lm,
      q: () => PT,
      s: () => Bm,
      u: () => em,
      x: () => aT,
      C: () => MT,
      y: () => uT,
      G: () => yT,
      J: () => nT,
      M: () => Fm,
      O: () => Ym,
      Q: () => JT,
      R: () => Zm,
      U: () => bm,
      Y: () => HT,
      $: () => Tf,
      ab: () => zm,
      eb: () => ff,
      gb: () => km
    });
    let hm = [],
      Am = [];

    function am(mm) {
      if (mm < 768) return !1;
      for (let Tm = 0, fm = hm.length;;) {
        let am = Tm + fm >> 1;
        if (mm < hm[am]) fm = am;
        else {
          if (!(mm >= Am[am])) return !0;
          Tm = am + 1
        }
        if (Tm == fm) return !1
      }
    }

    function xm(mm) {
      return mm >= 127462 && mm <= 127487
    }(() => {
      let mm = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((mm => mm ? parseInt(mm, 36) : 1));
      for (let Tm = 0, fm = 0; Tm < mm.length; Tm++)(Tm % 2 ? Am : hm).push(fm += mm[Tm])
    })();
    const wm = 8205;

    function Dm(mm, Tm) {
      return (!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2] ? im : Rm)(mm, Tm, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function im(mm, Tm, fm) {
      if (Tm == mm.length) return Tm;
      Tm && Em(mm.charCodeAt(Tm)) && om(mm.charCodeAt(Tm - 1)) && Tm--;
      let hm = pm(mm, Tm);
      for (Tm += Om(hm); Tm < mm.length;) {
        let Am = pm(mm, Tm);
        if (hm == wm || Am == wm || fm && am(Am)) Tm += Om(Am), hm = Am;
        else {
          if (!xm(Am)) break;
          {
            let fm = 0,
              hm = Tm - 2;
            for (; hm >= 0 && xm(pm(mm, hm));) fm++, hm -= 2;
            if (fm % 2 == 0) break;
            Tm += 2
          }
        }
      }
      return Tm
    }

    function Rm(mm, Tm, fm) {
      for (; Tm > 0;) {
        let hm = im(mm, Tm - 2, fm);
        if (hm < Tm) return hm;
        Tm--
      }
      return 0
    }

    function pm(mm, Tm) {
      let fm = mm.charCodeAt(Tm);
      if (!om(fm) || Tm + 1 == mm.length) return fm;
      let hm = mm.charCodeAt(Tm + 1);
      return Em(hm) ? hm - 56320 + (fm - 55296 << 10) + 65536 : fm
    }

    function Em(mm) {
      return mm >= 56320 && mm < 57344
    }

    function om(mm) {
      return mm >= 55296 && mm < 56320
    }

    function Om(mm) {
      return mm < 65536 ? 1 : 2
    }
    class Ym {
      lineAt(mm) {
        if (mm < 0 || mm > this.length) throw new RangeError(`Invalid position ${mm} in document of length ${this.length}`);
        return this.lineInner(mm, !1, 1, 0)
      }
      line(mm) {
        if (mm < 1 || mm > this.lines) throw new RangeError(`Invalid line number ${mm} in ${this.lines}-line document`);
        return this.lineInner(mm, !0, 1, 0)
      }
      replace(mm, Tm, fm) {
        [mm, Tm] = cm(this, mm, Tm);
        let hm = [];
        return this.decompose(0, mm, hm, 2), fm.length && fm.decompose(0, fm.length, hm, 3), this.decompose(Tm, this.length, hm, 1), jm.from(hm, this.length - (Tm - mm) + fm.length)
      }
      append(mm) {
        return this.replace(this.length, this.length, mm)
      }
      slice(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        [mm, Tm] = cm(this, mm, Tm);
        let fm = [];
        return this.decompose(mm, Tm, fm, 0), jm.from(fm, Tm - mm)
      }
      eq(mm) {
        if (mm == this) return !0;
        if (mm.length != this.length || mm.lines != this.lines) return !1;
        let Tm = this.scanIdentical(mm, 1),
          fm = this.length - this.scanIdentical(mm, -1),
          hm = new Km(this),
          Am = new Km(mm);
        for (let am = Tm, xm = Tm;;) {
          if (hm.next(am), Am.next(am), am = 0, hm.lineBreak != Am.lineBreak || hm.done != Am.done || hm.value != Am.value) return !1;
          if (xm += hm.value.length, hm.done || xm >= fm) return !0
        }
      }
      iter() {
        return new Km(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1)
      }
      iterRange(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        return new Qm(this, mm, Tm)
      }
      iterLines(mm, Tm) {
        let fm;
        if (null == mm) fm = this.iter();
        else {
          null == Tm && (Tm = this.lines + 1);
          let hm = this.line(mm).from;
          fm = this.iterRange(hm, Math.max(hm, Tm == this.lines + 1 ? this.length : Tm <= 1 ? 0 : this.line(Tm - 1).to))
        }
        return new nm(fm)
      }
      toString() {
        return this.sliceString(0)
      }
      toJSON() {
        let mm = [];
        return this.flatten(mm), mm
      }
      constructor() {}
      static of (mm) {
        if (0 == mm.length) throw new RangeError("A document must have at least one line");
        return 1 != mm.length || mm[0] ? mm.length <= 32 ? new qm(mm) : jm.from(qm.split(mm, [])) : Ym.empty
      }
    }
    class qm extends Ym {
      constructor(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(mm) {
          let Tm = -1;
          for (let fm of mm) Tm += fm.length + 1;
          return Tm
        }(mm);
        super(), this.text = mm, this.length = Tm
      }
      get lines() {
        return this.text.length
      }
      get children() {
        return null
      }
      lineInner(mm, Tm, fm, hm) {
        for (let Am = 0;; Am++) {
          let am = this.text[Am],
            xm = hm + am.length;
          if ((Tm ? fm : xm) >= mm) return new Jm(hm, xm, fm, am);
          hm = xm + 1, fm++
        }
      }
      decompose(mm, Tm, fm, hm) {
        let Am = mm <= 0 && Tm >= this.length ? this : new qm(Im(this.text, mm, Tm), Math.min(Tm, this.length) - Math.max(0, mm));
        if (1 & hm) {
          let mm = fm.pop(),
            Tm = Vm(Am.text, mm.text.slice(), 0, Am.length);
          if (Tm.length <= 32) fm.push(new qm(Tm, mm.length + Am.length));
          else {
            let mm = Tm.length >> 1;
            fm.push(new qm(Tm.slice(0, mm)), new qm(Tm.slice(mm)))
          }
        } else fm.push(Am)
      }
      replace(mm, Tm, fm) {
        if (!(fm instanceof qm)) return super.replace(mm, Tm, fm);
        [mm, Tm] = cm(this, mm, Tm);
        let hm = Vm(this.text, Vm(fm.text, Im(this.text, 0, mm)), Tm),
          Am = this.length + fm.length - (Tm - mm);
        return hm.length <= 32 ? new qm(hm, Am) : jm.from(qm.split(hm, []), Am)
      }
      sliceString(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [mm, Tm] = cm(this, mm, Tm);
        let hm = "";
        for (let Am = 0, am = 0; Am <= Tm && am < this.text.length; am++) {
          let xm = this.text[am],
            wm = Am + xm.length;
          Am > mm && am && (hm += fm), mm < wm && Tm > Am && (hm += xm.slice(Math.max(0, mm - Am), Tm - Am)), Am = wm + 1
        }
        return hm
      }
      flatten(mm) {
        for (let Tm of this.text) mm.push(Tm)
      }
      scanIdentical() {
        return 0
      }
      static split(mm, Tm) {
        let fm = [],
          hm = -1;
        for (let Am of mm) fm.push(Am), hm += Am.length + 1, 32 == fm.length && (Tm.push(new qm(fm, hm)), fm = [], hm = -1);
        return hm > -1 && Tm.push(new qm(fm, hm)), Tm
      }
    }
    class jm extends Ym {
      constructor(mm, Tm) {
        super(), this.children = mm, this.length = Tm, this.lines = 0;
        for (let fm of mm) this.lines += fm.lines
      }
      lineInner(mm, Tm, fm, hm) {
        for (let Am = 0;; Am++) {
          let am = this.children[Am],
            xm = hm + am.length,
            wm = fm + am.lines - 1;
          if ((Tm ? wm : xm) >= mm) return am.lineInner(mm, Tm, fm, hm);
          hm = xm + 1, fm = wm + 1
        }
      }
      decompose(mm, Tm, fm, hm) {
        for (let Am = 0, am = 0; am <= Tm && Am < this.children.length; Am++) {
          let xm = this.children[Am],
            wm = am + xm.length;
          if (mm <= wm && Tm >= am) {
            let Am = hm & ((am <= mm ? 1 : 0) | (wm >= Tm ? 2 : 0));
            am >= mm && wm <= Tm && !Am ? fm.push(xm) : xm.decompose(mm - am, Tm - am, fm, Am)
          }
          am = wm + 1
        }
      }
      replace(mm, Tm, fm) {
        if ([mm, Tm] = cm(this, mm, Tm), fm.lines < this.lines)
          for (let hm = 0, Am = 0; hm < this.children.length; hm++) {
            let am = this.children[hm],
              xm = Am + am.length;
            if (mm >= Am && Tm <= xm) {
              let wm = am.replace(mm - Am, Tm - Am, fm),
                Dm = this.lines - am.lines + wm.lines;
              if (wm.lines < Dm >> 4 && wm.lines > Dm >> 6) {
                let Am = this.children.slice();
                return Am[hm] = wm, new jm(Am, this.length - (Tm - mm) + fm.length)
              }
              return super.replace(Am, xm, wm)
            }
            Am = xm + 1
          }
        return super.replace(mm, Tm, fm)
      }
      sliceString(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [mm, Tm] = cm(this, mm, Tm);
        let hm = "";
        for (let Am = 0, am = 0; Am < this.children.length && am <= Tm; Am++) {
          let xm = this.children[Am],
            wm = am + xm.length;
          am > mm && Am && (hm += fm), mm < wm && Tm > am && (hm += xm.sliceString(mm - am, Tm - am, fm)), am = wm + 1
        }
        return hm
      }
      flatten(mm) {
        for (let Tm of this.children) Tm.flatten(mm)
      }
      scanIdentical(mm, Tm) {
        if (!(mm instanceof jm)) return 0;
        let fm = 0,
          [hm, Am, am, xm] = Tm > 0 ? [0, 0, this.children.length, mm.children.length] : [this.children.length - 1, mm.children.length - 1, -1, -1];
        for (;; hm += Tm, Am += Tm) {
          if (hm == am || Am == xm) return fm;
          let wm = this.children[hm],
            Dm = mm.children[Am];
          if (wm != Dm) return fm + wm.scanIdentical(Dm, Tm);
          fm += wm.length + 1
        }
      }
      static from(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mm.reduce(((mm, Tm) => mm + Tm.length + 1), -1),
          fm = 0;
        for (let Em of mm) fm += Em.lines;
        if (fm < 32) {
          let fm = [];
          for (let Tm of mm) Tm.flatten(fm);
          return new qm(fm, Tm)
        }
        let hm = Math.max(32, fm >> 5),
          Am = hm << 1,
          am = hm >> 1,
          xm = [],
          wm = 0,
          Dm = -1,
          im = [];

        function Rm(mm) {
          let Tm;
          if (mm.lines > Am && mm instanceof jm)
            for (let fm of mm.children) Rm(fm);
          else mm.lines > am && (wm > am || !wm) ? (pm(), xm.push(mm)) : mm instanceof qm && wm && (Tm = im[im.length - 1]) instanceof qm && mm.lines + Tm.lines <= 32 ? (wm += mm.lines, Dm += mm.length + 1, im[im.length - 1] = new qm(Tm.text.concat(mm.text), Tm.length + 1 + mm.length)) : (wm + mm.lines > hm && pm(), wm += mm.lines, Dm += mm.length + 1, im.push(mm))
        }

        function pm() {
          0 != wm && (xm.push(1 == im.length ? im[0] : jm.from(im, Dm)), Dm = -1, wm = im.length = 0)
        }
        for (let Em of mm) Rm(Em);
        return pm(), 1 == xm.length ? xm[0] : new jm(xm, Tm)
      }
    }

    function Vm(mm, Tm) {
      let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e9;
      for (let Am = 0, am = 0, xm = !0; am < mm.length && Am <= hm; am++) {
        let wm = mm[am],
          Dm = Am + wm.length;
        Dm >= fm && (Dm > hm && (wm = wm.slice(0, hm - Am)), Am < fm && (wm = wm.slice(fm - Am)), xm ? (Tm[Tm.length - 1] += wm, xm = !1) : Tm.push(wm)), Am = Dm + 1
      }
      return Tm
    }

    function Im(mm, Tm, fm) {
      return Vm(mm, [""], Tm, fm)
    }
    Ym.empty = new qm([""], 0);
    class Km {
      constructor(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.dir = Tm, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [mm], this.offsets = [Tm > 0 ? 1 : (mm instanceof qm ? mm.text.length : mm.children.length) << 1]
      }
      nextInner(mm, Tm) {
        for (this.done = this.lineBreak = !1;;) {
          let fm = this.nodes.length - 1,
            hm = this.nodes[fm],
            Am = this.offsets[fm],
            am = Am >> 1,
            xm = hm instanceof qm ? hm.text.length : hm.children.length;
          if (am == (Tm > 0 ? xm : 0)) {
            if (0 == fm) return this.done = !0, this.value = "", this;
            Tm > 0 && this.offsets[fm - 1]++, this.nodes.pop(), this.offsets.pop()
          } else if ((1 & Am) == (Tm > 0 ? 0 : 1)) {
            if (this.offsets[fm] += Tm, 0 == mm) return this.lineBreak = !0, this.value = "\n", this;
            mm--
          } else if (hm instanceof qm) {
            let Am = hm.text[am + (Tm < 0 ? -1 : 0)];
            if (this.offsets[fm] += Tm, Am.length > Math.max(0, mm)) return this.value = 0 == mm ? Am : Tm > 0 ? Am.slice(mm) : Am.slice(0, Am.length - mm), this;
            mm -= Am.length
          } else {
            let Am = hm.children[am + (Tm < 0 ? -1 : 0)];
            mm > Am.length ? (mm -= Am.length, this.offsets[fm] += Tm) : (Tm < 0 && this.offsets[fm]--, this.nodes.push(Am), this.offsets.push(Tm > 0 ? 1 : (Am instanceof qm ? Am.text.length : Am.children.length) << 1))
          }
        }
      }
      next() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return mm < 0 && (this.nextInner(-mm, -this.dir), mm = this.value.length), this.nextInner(mm, this.dir)
      }
    }
    class Qm {
      constructor(mm, Tm, fm) {
        this.value = "", this.done = !1, this.cursor = new Km(mm, Tm > fm ? -1 : 1), this.pos = Tm > fm ? mm.length : 0, this.from = Math.min(Tm, fm), this.to = Math.max(Tm, fm)
      }
      nextInner(mm, Tm) {
        if (Tm < 0 ? this.pos <= this.from : this.pos >= this.to) return this.value = "", this.done = !0, this;
        mm += Math.max(0, Tm < 0 ? this.pos - this.to : this.from - this.pos);
        let fm = Tm < 0 ? this.pos - this.from : this.to - this.pos;
        mm > fm && (mm = fm), fm -= mm;
        let {
          value: hm
        } = this.cursor.next(mm);
        return this.pos += (hm.length + mm) * Tm, this.value = hm.length <= fm ? hm : Tm < 0 ? hm.slice(hm.length - fm) : hm.slice(0, fm), this.done = !this.value, this
      }
      next() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return mm < 0 ? mm = Math.max(mm, this.from - this.pos) : mm > 0 && (mm = Math.min(mm, this.to - this.pos)), this.nextInner(mm, this.cursor.dir)
      }
      get lineBreak() {
        return this.cursor.lineBreak && "" != this.value
      }
    }
    class nm {
      constructor(mm) {
        this.inner = mm, this.afterBreak = !0, this.value = "", this.done = !1
      }
      next() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          {
            done: Tm,
            lineBreak: fm,
            value: hm
          } = this.inner.next(mm);
        return Tm && this.afterBreak ? (this.value = "", this.afterBreak = !1) : Tm ? (this.done = !0, this.value = "") : fm ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = hm, this.afterBreak = !1), this
      }
      get lineBreak() {
        return !1
      }
    }
    "undefined" != typeof Symbol && (Ym.prototype[Symbol.iterator] = function() {
      return this.iter()
    }, Km.prototype[Symbol.iterator] = Qm.prototype[Symbol.iterator] = nm.prototype[Symbol.iterator] = function() {
      return this
    });
    class Jm {
      constructor(mm, Tm, fm, hm) {
        this.from = mm, this.to = Tm, this.number = fm, this.text = hm
      }
      get length() {
        return this.to - this.from
      }
    }

    function cm(mm, Tm, fm) {
      return [Tm = Math.max(0, Math.min(mm.length, Tm)), Math.max(Tm, Math.min(mm.length, fm))]
    }

    function zm(mm, Tm) {
      return Dm(mm, Tm, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function Zm(mm, Tm) {
      let fm = mm.charCodeAt(Tm);
      if (!((hm = fm) >= 55296 && hm < 56320) || Tm + 1 == mm.length) return fm;
      var hm;
      let Am = mm.charCodeAt(Tm + 1);
      return function(mm) {
        return mm >= 56320 && mm < 57344
      }(Am) ? Am - 56320 + (fm - 55296 << 10) + 65536 : fm
    }

    function km(mm) {
      return mm <= 65535 ? String.fromCharCode(mm) : (mm -= 65536, String.fromCharCode(55296 + (mm >> 10), 56320 + (1023 & mm)))
    }

    function bm(mm) {
      return mm < 65536 ? 1 : 2
    }
    const Sm = /\r\n?|\n/;
    var em = function(mm) {
      return mm[mm.Simple = 0] = "Simple", mm[mm.TrackDel = 1] = "TrackDel", mm[mm.TrackBefore = 2] = "TrackBefore", mm[mm.TrackAfter = 3] = "TrackAfter", mm
    }(em || (em = {}));
    class Nm {
      constructor(mm) {
        this.sections = mm
      }
      get length() {
        let mm = 0;
        for (let Tm = 0; Tm < this.sections.length; Tm += 2) mm += this.sections[Tm];
        return mm
      }
      get newLength() {
        let mm = 0;
        for (let Tm = 0; Tm < this.sections.length; Tm += 2) {
          let fm = this.sections[Tm + 1];
          mm += fm < 0 ? this.sections[Tm] : fm
        }
        return mm
      }
      get empty() {
        return 0 == this.sections.length || 2 == this.sections.length && this.sections[1] < 0
      }
      iterGaps(mm) {
        for (let Tm = 0, fm = 0, hm = 0; Tm < this.sections.length;) {
          let Am = this.sections[Tm++],
            am = this.sections[Tm++];
          am < 0 ? (mm(fm, hm, Am), hm += Am) : hm += am, fm += Am
        }
      }
      iterChangedRanges(mm) {
        Hm(this, mm, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get invertedDesc() {
        let mm = [];
        for (let Tm = 0; Tm < this.sections.length;) {
          let fm = this.sections[Tm++],
            hm = this.sections[Tm++];
          hm < 0 ? mm.push(fm, hm) : mm.push(hm, fm)
        }
        return new Nm(mm)
      }
      composeDesc(mm) {
        return this.empty ? mm : mm.empty ? this : Cm(this, mm)
      }
      mapDesc(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return mm.empty ? this : ym(this, mm, Tm)
      }
      mapPos(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : em.Simple,
          hm = 0,
          Am = 0;
        for (let am = 0; am < this.sections.length;) {
          let xm = this.sections[am++],
            wm = this.sections[am++],
            Dm = hm + xm;
          if (wm < 0) {
            if (Dm > mm) return Am + (mm - hm);
            Am += xm
          } else {
            if (fm != em.Simple && Dm >= mm && (fm == em.TrackDel && hm < mm && Dm > mm || fm == em.TrackBefore && hm < mm || fm == em.TrackAfter && Dm > mm)) return null;
            if (Dm > mm || Dm == mm && Tm < 0 && !xm) return mm == hm || Tm < 0 ? Am : Am + wm;
            Am += wm
          }
          hm = Dm
        }
        if (mm > hm) throw new RangeError(`Position ${mm} is out of range for changeset of length ${hm}`);
        return Am
      }
      touchesRange(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mm;
        for (let fm = 0, hm = 0; fm < this.sections.length && hm <= Tm;) {
          let Am = hm + this.sections[fm++];
          if (this.sections[fm++] >= 0 && hm <= Tm && Am >= mm) return !(hm < mm && Am > Tm) || "cover";
          hm = Am
        }
        return !1
      }
      toString() {
        let mm = "";
        for (let Tm = 0; Tm < this.sections.length;) {
          let fm = this.sections[Tm++],
            hm = this.sections[Tm++];
          mm += (mm ? " " : "") + fm + (hm >= 0 ? ":" + hm : "")
        }
        return mm
      }
      toJSON() {
        return this.sections
      }
      static fromJSON(mm) {
        if (!Array.isArray(mm) || mm.length % 2 || mm.some((mm => "number" != typeof mm))) throw new RangeError("Invalid JSON representation of ChangeDesc");
        return new Nm(mm)
      }
      static create(mm) {
        return new Nm(mm)
      }
    }
    class Gm extends Nm {
      constructor(mm, Tm) {
        super(mm), this.inserted = Tm
      }
      apply(mm) {
        if (this.length != mm.length) throw new RangeError("Applying change set to a document with the wrong length");
        return Hm(this, ((Tm, fm, hm, Am, am) => mm = mm.replace(hm, hm + (fm - Tm), am)), !1), mm
      }
      mapDesc(mm) {
        return ym(this, mm, arguments.length > 1 && void 0 !== arguments[1] && arguments[1], !0)
      }
      invert(mm) {
        let Tm = this.sections.slice(),
          fm = [];
        for (let hm = 0, Am = 0; hm < Tm.length; hm += 2) {
          let am = Tm[hm],
            xm = Tm[hm + 1];
          if (xm >= 0) {
            Tm[hm] = xm, Tm[hm + 1] = am;
            let wm = hm >> 1;
            for (; fm.length < wm;) fm.push(Ym.empty);
            fm.push(am ? mm.slice(Am, Am + am) : Ym.empty)
          }
          Am += am
        }
        return new Gm(Tm, fm)
      }
      compose(mm) {
        return this.empty ? mm : mm.empty ? this : Cm(this, mm, !0)
      }
      map(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return mm.empty ? this : ym(this, mm, Tm, !0)
      }
      iterChanges(mm) {
        Hm(this, mm, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get desc() {
        return Nm.create(this.sections)
      }
      filter(mm) {
        let Tm = [],
          fm = [],
          hm = [],
          Am = new rm(this);
        mm: for (let am = 0, xm = 0;;) {
          let wm = am == mm.length ? 1e9 : mm[am++];
          for (; xm < wm || xm == wm && 0 == Am.len;) {
            if (Am.done) break mm;
            let mm = Math.min(Am.len, wm - xm);
            Xm(hm, mm, -1);
            let am = -1 == Am.ins ? -1 : 0 == Am.off ? Am.ins : 0;
            Xm(Tm, mm, am), am > 0 && Pm(fm, Tm, Am.text), Am.forward(mm), xm += mm
          }
          let Dm = mm[am++];
          for (; xm < Dm;) {
            if (Am.done) break mm;
            let mm = Math.min(Am.len, Dm - xm);
            Xm(Tm, mm, -1), Xm(hm, mm, -1 == Am.ins ? -1 : 0 == Am.off ? Am.ins : 0), Am.forward(mm), xm += mm
          }
        }
        return {
          changes: new Gm(Tm, fm),
          filtered: Nm.create(hm)
        }
      }
      toJSON() {
        let mm = [];
        for (let Tm = 0; Tm < this.sections.length; Tm += 2) {
          let fm = this.sections[Tm],
            hm = this.sections[Tm + 1];
          hm < 0 ? mm.push(fm) : 0 == hm ? mm.push([fm]) : mm.push([fm].concat(this.inserted[Tm >> 1].toJSON()))
        }
        return mm
      }
      static of (mm, Tm, fm) {
        let hm = [],
          Am = [],
          am = 0,
          xm = null;

        function wm() {
          if (!(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && !hm.length) return;
          am < Tm && Xm(hm, Tm - am, -1);
          let mm = new Gm(hm, Am);
          xm = xm ? xm.compose(mm.map(xm)) : mm, hm = [], Am = [], am = 0
        }
        return function mm(Dm) {
          if (Array.isArray(Dm))
            for (let Tm of Dm) mm(Tm);
          else if (Dm instanceof Gm) {
            if (Dm.length != Tm) throw new RangeError(`Mismatched change set length (got ${Dm.length}, expected ${Tm})`);
            wm(), xm = xm ? xm.compose(Dm.map(xm)) : Dm
          } else {
            let {
              from: mm,
              to: xm = mm,
              insert: im
            } = Dm;
            if (mm > xm || mm < 0 || xm > Tm) throw new RangeError(`Invalid change range ${mm} to ${xm} (in doc of length ${Tm})`);
            let Rm = im ? "string" == typeof im ? Ym.of(im.split(fm || Sm)) : im : Ym.empty,
              pm = Rm.length;
            if (mm == xm && 0 == pm) return;
            mm < am && wm(), mm > am && Xm(hm, mm - am, -1), Xm(hm, xm - mm, pm), Pm(Am, hm, Rm), am = xm
          }
        }(mm), wm(!xm), xm
      }
      static empty(mm) {
        return new Gm(mm ? [mm, -1] : [], [])
      }
      static fromJSON(mm) {
        if (!Array.isArray(mm)) throw new RangeError("Invalid JSON representation of ChangeSet");
        let Tm = [],
          fm = [];
        for (let hm = 0; hm < mm.length; hm++) {
          let Am = mm[hm];
          if ("number" == typeof Am) Tm.push(Am, -1);
          else {
            if (!Array.isArray(Am) || "number" != typeof Am[0] || Am.some(((mm, Tm) => Tm && "string" != typeof mm))) throw new RangeError("Invalid JSON representation of ChangeSet");
            if (1 == Am.length) Tm.push(Am[0], 0);
            else {
              for (; fm.length < hm;) fm.push(Ym.empty);
              fm[hm] = Ym.of(Am.slice(1)), Tm.push(Am[0], fm[hm].length)
            }
          }
        }
        return new Gm(Tm, fm)
      }
      static createSet(mm, Tm) {
        return new Gm(mm, Tm)
      }
    }

    function Xm(mm, Tm, fm) {
      let hm = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (0 == Tm && fm <= 0) return;
      let Am = mm.length - 2;
      Am >= 0 && fm <= 0 && fm == mm[Am + 1] ? mm[Am] += Tm : Am >= 0 && 0 == Tm && 0 == mm[Am] ? mm[Am + 1] += fm : hm ? (mm[Am] += Tm, mm[Am + 1] += fm) : mm.push(Tm, fm)
    }

    function Pm(mm, Tm, fm) {
      if (0 == fm.length) return;
      let hm = Tm.length - 2 >> 1;
      if (hm < mm.length) mm[mm.length - 1] = mm[mm.length - 1].append(fm);
      else {
        for (; mm.length < hm;) mm.push(Ym.empty);
        mm.push(fm)
      }
    }

    function Hm(mm, Tm, fm) {
      let hm = mm.inserted;
      for (let Am = 0, am = 0, xm = 0; xm < mm.sections.length;) {
        let wm = mm.sections[xm++],
          Dm = mm.sections[xm++];
        if (Dm < 0) Am += wm, am += wm;
        else {
          let im = Am,
            Rm = am,
            pm = Ym.empty;
          for (; im += wm, Rm += Dm, Dm && hm && (pm = pm.append(hm[xm - 2 >> 1])), !(fm || xm == mm.sections.length || mm.sections[xm + 1] < 0);) wm = mm.sections[xm++], Dm = mm.sections[xm++];
          Tm(Am, im, am, Rm, pm), Am = im, am = Rm
        }
      }
    }

    function ym(mm, Tm, fm) {
      let hm = [],
        Am = arguments.length > 3 && void 0 !== arguments[3] && arguments[3] ? [] : null,
        am = new rm(mm),
        xm = new rm(Tm),
        wm = 0;
      for (let Dm = -1;;) {
        if (++wm > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - likely malformed ChangeSet");
        if (am.done && xm.len || xm.done && am.len) throw new Error("Mismatched change set lengths");
        if (-1 == am.ins && -1 == xm.ins) {
          let mm = Math.min(am.len, xm.len);
          Xm(hm, mm, -1), am.forward(mm), xm.forward(mm)
        } else if (xm.ins >= 0 && (am.ins < 0 || Dm == am.i || 0 == am.off && (xm.len < am.len || xm.len == am.len && !fm))) {
          let mm = xm.len;
          for (Xm(hm, xm.ins, -1); mm;) {
            if (++wm > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-b");
            let Tm = Math.min(am.len, mm);
            am.ins >= 0 && Dm < am.i && am.len <= Tm && (Xm(hm, 0, am.ins), Am && Pm(Am, hm, am.text), Dm = am.i), am.forward(Tm), mm -= Tm
          }
          xm.next()
        } else {
          if (!(am.ins >= 0)) {
            if (am.done && xm.done) return Am ? Gm.createSet(hm, Am) : Nm.create(hm);
            throw new Error("Mismatched change set lengths")
          } {
            let mm = 0,
              Tm = am.len;
            for (; Tm;) {
              if (++wm > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-a");
              if (-1 == xm.ins) {
                let fm = Math.min(Tm, xm.len);
                mm += fm, Tm -= fm, xm.forward(fm)
              } else {
                if (!(0 == xm.ins && xm.len < Tm)) break;
                Tm -= xm.len, xm.next()
              }
            }
            Xm(hm, mm, Dm < am.i ? am.ins : 0), Am && Dm < am.i && Pm(Am, hm, am.text), Dm = am.i, am.forward(am.len - Tm)
          }
        }
      }
    }

    function Cm(mm, Tm) {
      let fm = [],
        hm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? [] : null,
        Am = new rm(mm),
        am = new rm(Tm),
        xm = 0;
      for (let wm = !1;;) {
        if (++xm > 2e6) throw new Error("BLOXD CODEMIRROR: composeSets exceeded max iterations - likely malformed ChangeSet");
        if (Am.done && am.done) return hm ? Gm.createSet(fm, hm) : Nm.create(fm);
        if (0 == Am.ins) Xm(fm, Am.len, 0, wm), Am.next();
        else if (0 != am.len || am.done) {
          if (Am.done || am.done) throw new Error("Mismatched change set lengths");
          {
            let mm = Math.min(Am.len2, am.len),
              Tm = fm.length;
            if (-1 == Am.ins) {
              let Tm = -1 == am.ins ? -1 : am.off ? 0 : am.ins;
              Xm(fm, mm, Tm, wm), hm && Tm && Pm(hm, fm, am.text)
            } else - 1 == am.ins ? (Xm(fm, Am.off ? 0 : Am.len, mm, wm), hm && Pm(hm, fm, Am.textBit(mm))) : (Xm(fm, Am.off ? 0 : Am.len, am.off ? 0 : am.ins, wm), hm && !am.off && Pm(hm, fm, am.text));
            wm = (Am.ins > mm || am.ins >= 0 && am.len > mm) && (wm || fm.length > Tm), Am.forward2(mm), am.forward(mm)
          }
        } else Xm(fm, 0, am.ins, wm), hm && Pm(hm, fm, am.text), am.next()
      }
    }
    class rm {
      constructor(mm) {
        this.set = mm, this.i = 0, this.next()
      }
      next() {
        let {
          sections: mm
        } = this.set;
        this.i < mm.length ? (this.len = mm[this.i++], this.ins = mm[this.i++]) : (this.len = 0, this.ins = -2), this.off = 0
      }
      get done() {
        return -2 == this.ins
      }
      get len2() {
        return this.ins < 0 ? this.len : this.ins
      }
      get text() {
        let {
          inserted: mm
        } = this.set, Tm = this.i - 2 >> 1;
        return Tm >= mm.length ? Ym.empty : mm[Tm]
      }
      textBit(mm) {
        let {
          inserted: Tm
        } = this.set, fm = this.i - 2 >> 1;
        return fm >= Tm.length && !mm ? Ym.empty : Tm[fm].slice(this.off, null == mm ? void 0 : this.off + mm)
      }
      forward(mm) {
        mm == this.len ? this.next() : (this.len -= mm, this.off += mm)
      }
      forward2(mm) {
        -1 == this.ins ? this.forward(mm) : mm == this.ins ? this.next() : (this.ins -= mm, this.off += mm)
      }
    }
    class sm {
      constructor(mm, Tm, fm) {
        this.from = mm, this.to = Tm, this.flags = fm
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
        let mm = 7 & this.flags;
        return 7 == mm ? null : mm
      }
      get goalColumn() {
        let mm = this.flags >> 6;
        return 16777215 == mm ? void 0 : mm
      }
      map(mm) {
        let Tm, fm, hm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return this.empty ? Tm = fm = mm.mapPos(this.from, hm) : (Tm = mm.mapPos(this.from, 1), fm = mm.mapPos(this.to, -1)), Tm == this.from && fm == this.to ? this : new sm(Tm, fm, this.flags)
      }
      extend(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mm,
          fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (mm <= this.anchor && Tm >= this.anchor) return lm.range(mm, Tm, void 0, void 0, fm);
        let hm = Math.abs(mm - this.anchor) > Math.abs(Tm - this.anchor) ? mm : Tm;
        return lm.range(this.anchor, hm, void 0, void 0, fm)
      }
      eq(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.anchor == mm.anchor && this.head == mm.head && this.goalColumn == mm.goalColumn && (!Tm || !this.empty || this.assoc == mm.assoc)
      }
      toJSON() {
        return {
          anchor: this.anchor,
          head: this.head
        }
      }
      static fromJSON(mm) {
        if (!mm || "number" != typeof mm.anchor || "number" != typeof mm.head) throw new RangeError("Invalid JSON representation for SelectionRange");
        return lm.range(mm.anchor, mm.head)
      }
      static create(mm, Tm, fm) {
        return new sm(mm, Tm, fm)
      }
    }
    class lm {
      constructor(mm, Tm) {
        this.mo = mm, this.mainIndex = Tm
      }
      map(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return mm.empty ? this : lm.create(this.mo.map((fm => fm.map(mm, Tm))), this.mainIndex)
      }
      eq(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.mo.length != mm.mo.length || this.mainIndex != mm.mainIndex) return !1;
        for (let fm = 0; fm < this.mo.length; fm++)
          if (!this.mo[fm].eq(mm.mo[fm], Tm)) return !1;
        return !0
      }
      get main() {
        return this.mo[this.mainIndex]
      }
      asSingle() {
        return 1 == this.mo.length ? this : new lm([this.main], 0)
      }
      addRange(mm) {
        let Tm = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return lm.create([mm].concat(this.mo), Tm ? 0 : this.mainIndex + 1)
      }
      replaceRange(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.mainIndex,
          fm = this.mo.slice();
        return fm[Tm] = mm, lm.create(fm, this.mainIndex)
      }
      toJSON() {
        return {
          mo: this.mo.map((mm => mm.toJSON())),
          main: this.mainIndex
        }
      }
      static fromJSON(mm) {
        if (!mm || !Array.isArray(mm.mo) || "number" != typeof mm.main || mm.main >= mm.mo.length) throw new RangeError("Invalid JSON representation for EditorSelection");
        return new lm(mm.mo.map((mm => sm.fromJSON(mm))), mm.main)
      }
      static single(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mm;
        return new lm([lm.range(mm, Tm)], 0)
      }
      static create(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (0 == mm.length) throw new RangeError("A selection needs at least one range");
        for (let fm = 0, hm = 0; hm < mm.length; hm++) {
          let Am = mm[hm];
          if (Am.empty ? Am.from <= fm : Am.from < fm) return lm.normalized(mm.slice(), Tm);
          fm = Am.to
        }
        return new lm(mm, Tm)
      }
      static cursor(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          fm = arguments.length > 2 ? arguments[2] : void 0,
          hm = arguments.length > 3 ? arguments[3] : void 0;
        return sm.create(mm, mm, (0 == Tm ? 0 : Tm < 0 ? 8 : 16) | (null == fm ? 7 : Math.min(6, fm)) | (null !== hm && void 0 !== hm ? hm : 16777215) << 6)
      }
      static range(mm, Tm, fm, hm, Am) {
        let am = (null !== fm && void 0 !== fm ? fm : 16777215) << 6 | (null == hm ? 7 : Math.min(6, hm));
        return Am || mm == Tm || (Am = Tm < mm ? 1 : -1), Tm < mm ? sm.create(Tm, mm, 48 | am) : sm.create(mm, Tm, (Am ? Am < 0 ? 8 : 16 : 0) | am)
      }
      static normalized(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          fm = mm[Tm];
        mm.sort(((mm, Tm) => mm.from - Tm.from)), Tm = mm.indexOf(fm);
        for (let hm = 1; hm < mm.length; hm++) {
          let fm = mm[hm],
            Am = mm[hm - 1];
          if (fm.empty ? fm.from <= Am.to : fm.from < Am.to) {
            let am = Am.from,
              xm = Math.max(fm.to, Am.to);
            hm <= Tm && Tm--, mm.splice(--hm, 2, fm.anchor > fm.head ? lm.range(xm, am) : lm.range(am, xm))
          }
        }
        return new lm(mm, Tm)
      }
    }

    function Mm(mm, Tm) {
      for (let fm of mm.mo)
        if (fm.to > Tm) throw new RangeError("Selection points outside of document")
    }
    let um = 0;
    class Bm {
      constructor(mm, Tm, fm, hm, Am) {
        this.combine = mm, this.compareInput = Tm, this.compare = fm, this.isStatic = hm, this.id = um++, this.default = mm([]), this.extensions = "function" == typeof Am ? Am(this) : Am
      }
      get reader() {
        return this
      }
      static define() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return new Bm(mm.combine || (mm => mm), mm.compareInput || ((mm, Tm) => mm === Tm), mm.compare || (mm.combine ? (mm, Tm) => mm === Tm : Lm), !!mm.static, mm.enables)
      }
      of(mm) {
        return new tm([], this, 0, mm)
      }
      compute(mm, Tm) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new tm(mm, this, 1, Tm)
      }
      computeN(mm, Tm) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new tm(mm, this, 2, Tm)
      }
      from(mm, Tm) {
        return Tm || (Tm = mm => mm), this.compute([mm], (fm => Tm(fm.field(mm))))
      }
    }

    function Lm(mm, Tm) {
      return mm == Tm || mm.length == Tm.length && mm.every(((mm, fm) => mm === Tm[fm]))
    }
    class tm {
      constructor(mm, Tm, fm, hm) {
        this.dependencies = mm, this.facet = Tm, this.type = fm, this.value = hm, this.id = um++
      }
      dynamicSlot(mm) {
        var Tm;
        let fm = this.value,
          hm = this.facet.compareInput,
          Am = this.id,
          am = mm[Am] >> 1,
          xm = 2 == this.type,
          wm = !1,
          Dm = !1,
          im = [];
        for (let Rm of this.dependencies) "doc" == Rm ? wm = !0 : "selection" == Rm ? Dm = !0 : 0 == (1 & (null !== (Tm = mm[Rm.id]) && void 0 !== Tm ? Tm : 1)) && im.push(mm[Rm.id]);
        return {
          create: mm => (mm.values[am] = fm(mm), 1),
          update(mm, Tm) {
            if (wm && Tm.docChanged || Dm && (Tm.docChanged || Tm.selection) || dm(mm, im)) {
              let Tm = fm(mm);
              if (xm ? !Um(Tm, mm.values[am], hm) : !hm(Tm, mm.values[am])) return mm.values[am] = Tm, 1
            }
            return 0
          },
          reconfigure: (mm, Tm) => {
            let wm, Dm = Tm.config.address[Am];
            if (null != Dm) {
              let Am = pT(Tm, Dm);
              if (this.dependencies.every((fm => fm instanceof Bm ? Tm.facet(fm) === mm.facet(fm) : !(fm instanceof Fm) || Tm.field(fm, !1) == mm.field(fm, !1))) || (xm ? Um(wm = fm(mm), Am, hm) : hm(wm = fm(mm), Am))) return mm.values[am] = Am, 0
            } else wm = fm(mm);
            return mm.values[am] = wm, 1
          }
        }
      }
    }

    function Um(mm, Tm, fm) {
      if (mm.length != Tm.length) return !1;
      for (let hm = 0; hm < mm.length; hm++)
        if (!fm(mm[hm], Tm[hm])) return !1;
      return !0
    }

    function dm(mm, Tm) {
      let fm = !1;
      for (let hm of Tm) 1 & RT(mm, hm) && (fm = !0);
      return fm
    }

    function gm(mm, Tm, fm) {
      let hm = fm.map((Tm => mm[Tm.id])),
        Am = fm.map((mm => mm.type)),
        am = hm.filter((mm => !(1 & mm))),
        xm = mm[Tm.id] >> 1;

      function wm(mm) {
        let fm = [];
        for (let Tm = 0; Tm < hm.length; Tm++) {
          let am = pT(mm, hm[Tm]);
          if (2 == Am[Tm])
            for (let mm of am) fm.push(mm);
          else fm.push(am)
        }
        return Tm.combine(fm)
      }
      return {
        create(mm) {
          for (let Tm of hm) RT(mm, Tm);
          return mm.values[xm] = wm(mm), 1
        },
        update(mm, fm) {
          if (!dm(mm, am)) return 0;
          let hm = wm(mm);
          return Tm.compare(hm, mm.values[xm]) ? 0 : (mm.values[xm] = hm, 1)
        },
        reconfigure(mm, Am) {
          let am = dm(mm, hm),
            Dm = Am.config.facets[Tm.id],
            im = Am.facet(Tm);
          if (Dm && !am && Lm(fm, Dm)) return mm.values[xm] = im, 0;
          let Rm = wm(mm);
          return Tm.compare(Rm, im) ? (mm.values[xm] = im, 0) : (mm.values[xm] = Rm, 1)
        }
      }
    }
    const Wm = Bm.define({
      static: !0
    });
    class Fm {
      constructor(mm, Tm, fm, hm, Am) {
        this.id = mm, this.createF = Tm, this.updateF = fm, this.compareF = hm, this.spec = Am, this.provides = void 0
      }
      static define(mm) {
        let Tm = new Fm(um++, mm.create, mm.update, mm.compare || ((mm, Tm) => mm === Tm), mm);
        return mm.provide && (Tm.provides = mm.provide(Tm)), Tm
      }
      create(mm) {
        let Tm = mm.facet(Wm).find((mm => mm.field == this));
        return ((null === Tm || void 0 === Tm ? void 0 : Tm.create) || this.createF)(mm)
      }
      slot(mm) {
        let Tm = mm[this.id] >> 1;
        return {
          create: mm => (mm.values[Tm] = this.create(mm), 1),
          update: (mm, fm) => {
            let hm = mm.values[Tm],
              Am = this.updateF(hm, fm);
            return this.compareF(hm, Am) ? 0 : (mm.values[Tm] = Am, 1)
          },
          reconfigure: (mm, fm) => {
            let hm, Am = mm.facet(Wm),
              am = fm.facet(Wm);
            return (hm = Am.find((mm => mm.field == this))) && hm != am.find((mm => mm.field == this)) ? (mm.values[Tm] = hm.create(mm), 1) : null != fm.config.address[this.id] ? (mm.values[Tm] = fm.field(this), 0) : (mm.values[Tm] = this.create(mm), 1)
          }
        }
      }
      init(mm) {
        return [this, Wm.of({
          field: this,
          create: mm
        })]
      }
      get extension() {
        return this
      }
    }
    const mT = 4,
      TT = 3,
      fT = 2,
      hT = 1;

    function AT(mm) {
      return Tm => new xT(Tm, mm)
    }
    const aT = {
      highest: AT(0),
      high: AT(hT),
      default: AT(fT),
      low: AT(TT),
      lowest: AT(mT)
    };
    class xT {
      constructor(mm, Tm) {
        this.inner = mm, this.prec = Tm
      }
    }
    class wT {
      of(mm) {
        return new DT(this, mm)
      }
      reconfigure(mm) {
        return wT.reconfigure.of({
          compartment: this,
          extension: mm
        })
      }
      get(mm) {
        return mm.config.compartments.get(this)
      }
    }
    class DT {
      constructor(mm, Tm) {
        this.compartment = mm, this.inner = Tm
      }
    }
    class iT {
      constructor(mm, Tm, fm, hm, Am, am) {
        for (this.base = mm, this.compartments = Tm, this.dynamicSlots = fm, this.address = hm, this.staticValues = Am, this.facets = am, this.statusTemplate = []; this.statusTemplate.length < fm.length;) this.statusTemplate.push(0)
      }
      staticFacet(mm) {
        let Tm = this.address[mm.id];
        return null == Tm ? mm.default : this.staticValues[Tm >> 1]
      }
      static resolve(mm, Tm, fm) {
        let hm = [],
          Am = Object.create(null),
          am = new Map;
        for (let pm of function(mm, Tm, fm) {
            let hm = [
                [],
                [],
                [],
                [],
                []
              ],
              Am = new Map;

            function am(mm, xm) {
              let wm = Am.get(mm);
              if (null != wm) {
                if (wm <= xm) return;
                let Tm = hm[wm].indexOf(mm);
                Tm > -1 && hm[wm].splice(Tm, 1), mm instanceof DT && fm.delete(mm.compartment)
              }
              if (Am.set(mm, xm), Array.isArray(mm))
                for (let Tm of mm) am(Tm, xm);
              else if (mm instanceof DT) {
                if (fm.has(mm.compartment)) throw new RangeError("Duplicate use of compartment in extensions");
                let hm = Tm.get(mm.compartment) || mm.inner;
                fm.set(mm.compartment, hm), am(hm, xm)
              } else if (mm instanceof xT) am(mm.inner, mm.prec);
              else if (mm instanceof Fm) hm[xm].push(mm), mm.provides && am(mm.provides, xm);
              else if (mm instanceof tm) hm[xm].push(mm), mm.facet.extensions && am(mm.facet.extensions, fT);
              else {
                let Tm = mm.extension;
                if (!Tm) throw new Error(`Unrecognized extension value in extension set (${mm}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
                am(Tm, xm)
              }
            }
            return am(mm, fT), hm.reduce(((mm, Tm) => mm.concat(Tm)))
          }(mm, Tm, am)) pm instanceof Fm ? hm.push(pm) : (Am[pm.facet.id] || (Am[pm.facet.id] = [])).push(pm);
        let xm = Object.create(null),
          wm = [],
          Dm = [];
        for (let pm of hm) xm[pm.id] = Dm.length << 1, Dm.push((mm => pm.slot(mm)));
        let im = null === fm || void 0 === fm ? void 0 : fm.config.facets;
        for (let pm in Am) {
          let mm = Am[pm],
            Tm = mm[0].facet,
            hm = im && im[pm] || [];
          if (mm.every((mm => 0 == mm.type)))
            if (xm[Tm.id] = wm.length << 1 | 1, Lm(hm, mm)) wm.push(fm.facet(Tm));
            else {
              let hm = Tm.combine(mm.map((mm => mm.value)));
              wm.push(fm && Tm.compare(hm, fm.facet(Tm)) ? fm.facet(Tm) : hm)
            }
          else {
            for (let Tm of mm) 0 == Tm.type ? (xm[Tm.id] = wm.length << 1 | 1, wm.push(Tm.value)) : (xm[Tm.id] = Dm.length << 1, Dm.push((mm => Tm.dynamicSlot(mm))));
            xm[Tm.id] = Dm.length << 1, Dm.push((fm => gm(fm, Tm, mm)))
          }
        }
        let Rm = Dm.map((mm => mm(xm)));
        return new iT(mm, am, Rm, xm, wm, Am)
      }
    }

    function RT(mm, Tm) {
      if (1 & Tm) return 2;
      let fm = Tm >> 1,
        hm = mm.status[fm];
      if (4 == hm) throw new Error("Cyclic dependency between fields and/or facets");
      if (2 & hm) return hm;
      mm.status[fm] = 4;
      let Am = mm.computeSlot(mm, mm.config.dynamicSlots[fm]);
      return mm.status[fm] = 2 | Am
    }

    function pT(mm, Tm) {
      return 1 & Tm ? mm.config.staticValues[Tm >> 1] : mm.values[Tm >> 1]
    }
    const ET = Bm.define(),
      oT = Bm.define({
        combine: mm => mm.some((mm => mm)),
        static: !0
      }),
      OT = Bm.define({
        combine: mm => mm.length ? mm[0] : void 0,
        static: !0
      }),
      YT = Bm.define(),
      qT = Bm.define(),
      jT = Bm.define(),
      VT = Bm.define({
        combine: mm => !!mm.length && mm[0]
      });
    class IT {
      constructor(mm, Tm) {
        this.type = mm, this.value = Tm
      }
      static define() {
        return new KT
      }
    }
    class KT {
      of(mm) {
        return new IT(this, mm)
      }
    }
    class QT {
      constructor(mm) {
        this.map = mm
      }
      of(mm) {
        return new nT(this, mm)
      }
    }
    class nT {
      constructor(mm, Tm) {
        this.type = mm, this.value = Tm
      }
      map(mm) {
        let Tm = this.type.map(this.value, mm);
        return void 0 === Tm ? void 0 : Tm == this.value ? this : new nT(this.type, Tm)
      }
      is(mm) {
        return this.type == mm
      }
      static define() {
        return new QT((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).map || (mm => mm))
      }
      static mapEffects(mm, Tm) {
        if (!mm.length) return mm;
        let fm = [];
        for (let hm of mm) {
          let mm = hm.map(Tm);
          mm && fm.push(mm)
        }
        return fm
      }
    }
    nT.reconfigure = nT.define(), nT.appendConfig = nT.define();
    class JT {
      constructor(mm, Tm, fm, hm, Am, am) {
        this.startState = mm, this.changes = Tm, this.selection = fm, this.effects = hm, this.annotations = Am, this.scrollIntoView = am, this._doc = null, this._state = null, fm && Mm(fm, Tm.newLength), Am.some((mm => mm.type == JT.time)) || (this.annotations = Am.concat(JT.time.of(Date.now())))
      }
      static create(mm, Tm, fm, hm, Am, am) {
        return new JT(mm, Tm, fm, hm, Am, am)
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
      annotation(mm) {
        for (let Tm of this.annotations)
          if (Tm.type == mm) return Tm.value
      }
      get docChanged() {
        return !this.changes.empty
      }
      get reconfigured() {
        return this.startState.config != this.state.config
      }
      isUserEvent(mm) {
        let Tm = this.annotation(JT.userEvent);
        return !(!Tm || !(Tm == mm || Tm.length > mm.length && Tm.slice(0, mm.length) == mm && "." == Tm[mm.length]))
      }
    }

    function cT(mm, Tm) {
      let fm = [];
      for (let hm = 0, Am = 0;;) {
        let am, xm;
        if (hm < mm.length && (Am == Tm.length || Tm[Am] >= mm[hm])) am = mm[hm++], xm = mm[hm++];
        else {
          if (!(Am < Tm.length)) return fm;
          am = Tm[Am++], xm = Tm[Am++]
        }!fm.length || fm[fm.length - 1] < am ? fm.push(am, xm) : fm[fm.length - 1] < xm && (fm[fm.length - 1] = xm)
      }
    }

    function zT(mm, Tm, fm) {
      var hm;
      let Am, am, xm;
      return fm ? (Am = Tm.changes, am = Gm.empty(Tm.changes.length), xm = mm.changes.compose(Tm.changes)) : (Am = Tm.changes.map(mm.changes), am = mm.changes.mapDesc(Tm.changes, !0), xm = mm.changes.compose(Am)), {
        changes: xm,
        selection: Tm.selection ? Tm.selection.map(am) : null === (hm = mm.selection) || void 0 === hm ? void 0 : hm.map(Am),
        effects: nT.mapEffects(mm.effects, Am).concat(nT.mapEffects(Tm.effects, am)),
        annotations: mm.annotations.length ? mm.annotations.concat(Tm.annotations) : Tm.annotations,
        scrollIntoView: mm.scrollIntoView || Tm.scrollIntoView
      }
    }

    function ZT(mm, Tm, fm) {
      let hm = Tm.selection,
        Am = ST(Tm.annotations);
      return Tm.userEvent && (Am = Am.concat(JT.userEvent.of(Tm.userEvent))), {
        changes: Tm.changes instanceof Gm ? Tm.changes : Gm.of(Tm.changes || [], fm, mm.facet(OT)),
        selection: hm && (hm instanceof lm ? hm : lm.single(hm.anchor, hm.head)),
        effects: ST(Tm.effects),
        annotations: Am,
        scrollIntoView: !!Tm.scrollIntoView
      }
    }

    function kT(mm, Tm, fm) {
      let hm = ZT(mm, Tm.length ? Tm[0] : {}, mm.doc.length);
      Tm.length && !1 === Tm[0].filter && (fm = !1);
      for (let am = 1; am < Tm.length; am++) {
        !1 === Tm[am].filter && (fm = !1);
        let Am = !!Tm[am].sequential;
        hm = zT(hm, ZT(mm, Tm[am], Am ? hm.changes.newLength : mm.doc.length), Am)
      }
      let Am = JT.create(mm, hm.changes, hm.selection, hm.effects, hm.annotations, hm.scrollIntoView);
      return function(mm) {
        let Tm = mm.startState,
          fm = Tm.facet(jT),
          hm = mm;
        for (let Am = fm.length - 1; Am >= 0; Am--) {
          let am = fm[Am](mm);
          am && Object.keys(am).length && (hm = zT(hm, ZT(Tm, am, mm.changes.newLength), !0))
        }
        return hm == mm ? mm : JT.create(Tm, mm.changes, mm.selection, hm.effects, hm.annotations, hm.scrollIntoView)
      }(fm ? function(mm) {
        let Tm = mm.startState,
          fm = !0;
        for (let Am of Tm.facet(YT)) {
          let Tm = Am(mm);
          if (!1 === Tm) {
            fm = !1;
            break
          }
          Array.isArray(Tm) && (fm = !0 === fm ? Tm : cT(fm, Tm))
        }
        if (!0 !== fm) {
          let hm, Am;
          if (!1 === fm) Am = mm.changes.invertedDesc, hm = Gm.empty(Tm.doc.length);
          else {
            let Tm = mm.changes.filter(fm);
            hm = Tm.changes, Am = Tm.filtered.mapDesc(Tm.changes).invertedDesc
          }
          mm = JT.create(Tm, hm, mm.selection && mm.selection.map(Am), nT.mapEffects(mm.effects, Am), mm.annotations, mm.scrollIntoView)
        }
        let hm = Tm.facet(qT);
        for (let Am = hm.length - 1; Am >= 0; Am--) {
          let fm = hm[Am](mm);
          mm = fm instanceof JT ? fm : Array.isArray(fm) && 1 == fm.length && fm[0] instanceof JT ? fm[0] : kT(Tm, ST(fm), !1)
        }
        return mm
      }(Am) : Am)
    }
    JT.time = IT.define(), JT.userEvent = IT.define(), JT.addToHistory = IT.define(), JT.remote = IT.define();
    const bT = [];

    function ST(mm) {
      return null == mm ? bT : Array.isArray(mm) ? mm : [mm]
    }
    var eT = function(mm) {
      return mm[mm.Word = 0] = "Word", mm[mm.Space = 1] = "Space", mm[mm.Other = 2] = "Other", mm
    }(eT || (eT = {}));
    const NT = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
    let GT;
    try {
      GT = new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u")
    } catch (hf) {}

    function XT(mm) {
      return Tm => {
        if (!/\S/.test(Tm)) return eT.Space;
        if (function(mm) {
            if (GT) return GT.test(mm);
            for (let Tm = 0; Tm < mm.length; Tm++) {
              let fm = mm[Tm];
              if (/\w/.test(fm) || fm > "\x80" && (fm.toUpperCase() != fm.toLowerCase() || NT.test(fm))) return !0
            }
            return !1
          }(Tm)) return eT.Word;
        for (let fm = 0; fm < mm.length; fm++)
          if (Tm.indexOf(mm[fm]) > -1) return eT.Word;
        return eT.Other
      }
    }
    class PT {
      constructor(mm, Tm, fm, hm, Am, am) {
        this.config = mm, this.doc = Tm, this.selection = fm, this.values = hm, this.status = mm.statusTemplate.slice(), this.computeSlot = Am, am && (am._state = this);
        for (let xm = 0; xm < this.config.dynamicSlots.length; xm++) RT(this, xm << 1);
        this.computeSlot = null
      }
      field(mm) {
        let Tm = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          fm = this.config.address[mm.id];
        if (null != fm) return RT(this, fm), pT(this, fm);
        if (Tm) throw new RangeError("Field is not present in this state")
      }
      update() {
        for (var mm = arguments.length, Tm = new Array(mm), fm = 0; fm < mm; fm++) Tm[fm] = arguments[fm];
        return kT(this, Tm, !0)
      }
      applyTransaction(mm) {
        let Tm, fm = this.config,
          {
            base: hm,
            compartments: Am
          } = fm;
        for (let xm of mm.effects) xm.is(wT.reconfigure) ? (fm && (Am = new Map, fm.compartments.forEach(((mm, Tm) => Am.set(Tm, mm))), fm = null), Am.set(xm.value.compartment, xm.value.extension)) : xm.is(nT.reconfigure) ? (fm = null, hm = xm.value) : xm.is(nT.appendConfig) && (fm = null, hm = ST(hm).concat(xm.value));
        if (fm) Tm = mm.startState.values.slice();
        else {
          fm = iT.resolve(hm, Am, this), Tm = new PT(fm, this.doc, this.selection, fm.dynamicSlots.map((() => null)), ((mm, Tm) => Tm.reconfigure(mm, this)), null).values
        }
        let am = mm.startState.facet(oT) ? mm.newSelection : mm.newSelection.asSingle();
        new PT(fm, mm.newDoc, am, Tm, ((Tm, fm) => fm.update(Tm, mm)), mm)
      }
      replaceSelection(mm) {
        return "string" == typeof mm && (mm = this.toText(mm)), this.changeByRange((Tm => ({
          changes: {
            from: Tm.from,
            to: Tm.to,
            insert: mm
          },
          range: lm.cursor(Tm.from + mm.length)
        })))
      }
      changeByRange(mm) {
        let Tm = this.selection,
          fm = mm(Tm.mo[0]),
          hm = this.changes(fm.changes),
          Am = [fm.range],
          am = ST(fm.effects);
        for (let xm = 1; xm < Tm.mo.length; xm++) {
          let fm = mm(Tm.mo[xm]),
            wm = this.changes(fm.changes),
            Dm = wm.map(hm);
          for (let mm = 0; mm < xm; mm++) Am[mm] = Am[mm].map(Dm);
          let im = hm.mapDesc(wm, !0);
          Am.push(fm.range.map(im)), hm = hm.compose(Dm), am = nT.mapEffects(am, Dm).concat(nT.mapEffects(ST(fm.effects), im))
        }
        return {
          changes: hm,
          selection: lm.create(Am, Tm.mainIndex),
          effects: am
        }
      }
      changes() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return mm instanceof Gm ? mm : Gm.of(mm, this.doc.length, this.facet(PT.lineSeparator))
      }
      toText(mm) {
        return Ym.of(mm.split(this.facet(PT.lineSeparator) || Sm))
      }
      sliceDoc() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.doc.length;
        return this.doc.sliceString(mm, Tm, this.lineBreak)
      }
      facet(mm) {
        let Tm = this.config.address[mm.id];
        return null == Tm ? mm.default : (RT(this, Tm), pT(this, Tm))
      }
      toJSON(mm) {
        let Tm = {
          doc: this.sliceDoc(),
          selection: this.selection.toJSON()
        };
        if (mm)
          for (let fm in mm) {
            let hm = mm[fm];
            hm instanceof Fm && null != this.config.address[hm.id] && (Tm[fm] = hm.spec.toJSON(this.field(mm[fm]), this))
          }
        return Tm
      }
      static fromJSON(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          fm = arguments.length > 2 ? arguments[2] : void 0;
        if (!mm || "string" != typeof mm.doc) throw new RangeError("Invalid JSON representation for EditorState");
        let hm = [];
        if (fm)
          for (let Am in fm)
            if (Object.prototype.hasOwnProperty.call(mm, Am)) {
              let Tm = fm[Am],
                am = mm[Am];
              hm.push(Tm.init((mm => Tm.spec.fromJSON(am, mm))))
            } return PT.create({
          doc: mm.doc,
          selection: lm.fromJSON(mm.selection),
          extensions: Tm.extensions ? hm.concat([Tm.extensions]) : hm
        })
      }
      static create() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          Tm = iT.resolve(mm.extensions || [], new Map),
          fm = mm.doc instanceof Ym ? mm.doc : Ym.of((mm.doc || "").split(Tm.staticFacet(PT.lineSeparator) || Sm)),
          hm = mm.selection ? mm.selection instanceof lm ? mm.selection : lm.single(mm.selection.anchor, mm.selection.head) : lm.single(0);
        return Mm(hm, fm.length), Tm.staticFacet(oT) || (hm = hm.asSingle()), new PT(Tm, fm, hm, Tm.dynamicSlots.map((() => null)), ((mm, Tm) => Tm.create(mm)), null)
      }
      get tabSize() {
        return this.facet(PT.tabSize)
      }
      get lineBreak() {
        return this.facet(PT.lineSeparator) || "\n"
      }
      get readOnly() {
        return this.facet(VT)
      }
      phrase(mm) {
        for (var Tm = arguments.length, fm = new Array(Tm > 1 ? Tm - 1 : 0), hm = 1; hm < Tm; hm++) fm[hm - 1] = arguments[hm];
        for (let Am of this.facet(PT.phrases))
          if (Object.prototype.hasOwnProperty.call(Am, mm)) {
            mm = Am[mm];
            break
          } return fm.length && (mm = mm.replace(/\$(\$|\d*)/g, ((mm, Tm) => {
          if ("$" == Tm) return "$";
          let hm = +(Tm || 1);
          return !hm || hm > fm.length ? mm : fm[hm - 1]
        }))), mm
      }
      languageDataAt(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          hm = [];
        for (let Am of this.facet(ET))
          for (let am of Am(this, Tm, fm)) Object.prototype.hasOwnProperty.call(am, mm) && hm.push(am[mm]);
        return hm
      }
      charCategorizer(mm) {
        let Tm = this.languageDataAt("wordChars", mm);
        return XT(Tm.length ? Tm[0] : "")
      }
      wordAt(mm) {
        let {
          text: Tm,
          from: fm,
          length: hm
        } = this.doc.lineAt(mm), Am = this.charCategorizer(mm), am = mm - fm, xm = mm - fm;
        for (; am > 0;) {
          let mm = zm(Tm, am, !1);
          if (Am(Tm.slice(mm, am)) != eT.Word) break;
          am = mm
        }
        for (; xm < hm;) {
          let mm = zm(Tm, xm);
          if (Am(Tm.slice(xm, mm)) != eT.Word) break;
          xm = mm
        }
        return am == xm ? null : lm.range(am + fm, xm + fm)
      }
    }

    function HT(mm, Tm) {
      let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        hm = {};
      for (let Am of mm)
        for (let mm of Object.keys(Am)) {
          let Tm = Am[mm],
            am = hm[mm];
          if (void 0 === am) hm[mm] = Tm;
          else if (am === Tm || void 0 === Tm);
          else {
            if (!Object.hasOwnProperty.call(fm, mm)) throw new Error("Config merge conflict for field " + mm);
            hm[mm] = fm[mm](am, Tm)
          }
        }
      for (let Am in Tm) void 0 === hm[Am] && (hm[Am] = Tm[Am]);
      return hm
    }
    PT.allowMultipleSelections = oT, PT.tabSize = Bm.define({
      combine: mm => mm.length ? mm[0] : 4
    }), PT.lineSeparator = OT, PT.readOnly = VT, PT.phrases = Bm.define({
      compare(mm, Tm) {
        let fm = Object.keys(mm),
          hm = Object.keys(Tm);
        return fm.length == hm.length && fm.every((fm => mm[fm] == Tm[fm]))
      }
    }), PT.languageData = ET, PT.changeFilter = YT, PT.transactionFilter = qT, PT.transactionExtender = jT, wT.reconfigure = nT.define();
    class yT {
      eq(mm) {
        return this == mm
      }
      range(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mm;
        return rT.create(mm, Tm, this)
      }
    }

    function CT(mm, Tm) {
      return mm == Tm || mm.constructor == Tm.constructor && mm.eq(Tm)
    }
    yT.prototype.startSide = yT.prototype.endSide = 0, yT.prototype.point = !1, yT.prototype.mapMode = em.TrackDel;
    class rT {
      constructor(mm, Tm, fm) {
        this.from = mm, this.to = Tm, this.value = fm
      }
      static create(mm, Tm, fm) {
        return new rT(mm, Tm, fm)
      }
    }

    function sT(mm, Tm) {
      return mm.from - Tm.from || mm.value.startSide - Tm.value.startSide
    }
    class lT {
      constructor(mm, Tm, fm, hm) {
        this.from = mm, this.to = Tm, this.value = fm, this.Ehm = hm
      }
      get length() {
        return this.to[this.to.length - 1]
      }
      findIndex(mm, Tm, fm) {
        let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Am = fm ? this.to : this.from;
        for (let am = hm, xm = Am.length;;) {
          if (am == xm) return am;
          let hm = am + xm >> 1,
            wm = Am[hm] - mm || (fm ? this.value[hm].endSide : this.value[hm].startSide) - Tm;
          if (hm == am) return wm >= 0 ? am : xm;
          wm >= 0 ? xm = hm : am = hm + 1
        }
      }
      between(mm, Tm, fm, hm) {
        for (let Am = this.findIndex(Tm, -1e9, !0), am = this.findIndex(fm, 1e9, !1, Am); Am < am; Am++)
          if (!1 === hm(this.from[Am] + mm, this.to[Am] + mm, this.value[Am])) return !1
      }
      map(mm, Tm) {
        let fm = [],
          hm = [],
          Am = [],
          am = -1,
          xm = -1;
        for (let wm = 0; wm < this.value.length; wm++) {
          let Dm, im, Rm = this.value[wm],
            pm = this.from[wm] + mm,
            Em = this.to[wm] + mm;
          if (pm == Em) {
            let mm = Tm.mapPos(pm, Rm.startSide, Rm.mapMode);
            if (null == mm) continue;
            if (Dm = im = mm, Rm.startSide != Rm.endSide && (im = Tm.mapPos(pm, Rm.endSide), im < Dm)) continue
          } else if (Dm = Tm.mapPos(pm, Rm.startSide), im = Tm.mapPos(Em, Rm.endSide), Dm > im || Dm == im && Rm.startSide > 0 && Rm.endSide <= 0) continue;
          (im - Dm || Rm.endSide - Rm.startSide) < 0 || (am < 0 && (am = Dm), Rm.point && (xm = Math.max(xm, im - Dm)), fm.push(Rm), hm.push(Dm - am), Am.push(im - am))
        }
        return {
          mapped: fm.length ? new lT(hm, Am, fm, xm) : null,
          pos: am
        }
      }
    }
    class MT {
      constructor(mm, Tm, fm, hm) {
        this.chunkPos = mm, this.chunk = Tm, this.nextLayer = fm, this.Ehm = hm
      }
      static create(mm, Tm, fm, hm) {
        return new MT(mm, Tm, fm, hm)
      }
      get length() {
        let mm = this.chunk.length - 1;
        return mm < 0 ? 0 : Math.max(this.chunkEnd(mm), this.nextLayer.length)
      }
      get size() {
        if (this.ZO) return 0;
        let mm = this.nextLayer.size;
        for (let Tm of this.chunk) mm += Tm.value.length;
        return mm
      }
      chunkEnd(mm) {
        return this.chunkPos[mm] + this.chunk[mm].length
      }
      update(mm) {
        let {
          add: Tm = [],
          sort: fm = !1,
          filterFrom: hm = 0,
          filterTo: Am = this.length
        } = mm, am = mm.filter;
        if (0 == Tm.length && !am) return this;
        if (fm && (Tm = Tm.slice().sort(sT)), this.ZO) return Tm.length ? MT.of(Tm) : this;
        let xm = new LT(this, null, -1).goto(0),
          wm = 0,
          Dm = [],
          im = new uT;
        for (; xm.value || wm < Tm.length;)
          if (wm < Tm.length && (xm.from - Tm[wm].from || xm.startSide - Tm[wm].value.startSide) >= 0) {
            let mm = Tm[wm++];
            im.addInner(mm.from, mm.to, mm.value) || Dm.push(mm)
          } else 1 == xm.rangeIndex && xm.chunkIndex < this.chunk.length && (wm == Tm.length || this.chunkEnd(xm.chunkIndex) < Tm[wm].from) && (!am || hm > this.chunkEnd(xm.chunkIndex) || Am < this.chunkPos[xm.chunkIndex]) && im.addChunk(this.chunkPos[xm.chunkIndex], this.chunk[xm.chunkIndex]) ? xm.nextChunk() : ((!am || hm > xm.to || Am < xm.from || am(xm.from, xm.to, xm.value)) && (im.addInner(xm.from, xm.to, xm.value) || Dm.push(rT.create(xm.from, xm.to, xm.value))), xm.next());
        return im.finishInner(this.nextLayer.ZO && !Dm.length ? MT.empty : this.nextLayer.update({
          add: Dm,
          filter: am,
          filterFrom: hm,
          filterTo: Am
        }))
      }
      map(mm) {
        if (mm.empty || this.ZO) return this;
        let Tm = [],
          fm = [],
          hm = -1;
        for (let am = 0; am < this.chunk.length; am++) {
          let Am = this.chunkPos[am],
            xm = this.chunk[am],
            wm = mm.touchesRange(Am, Am + xm.length);
          if (!1 === wm) hm = Math.max(hm, xm.Ehm), Tm.push(xm), fm.push(mm.mapPos(Am));
          else if (!0 === wm) {
            let {
              mapped: am,
              pos: wm
            } = xm.map(Am, mm);
            am && (hm = Math.max(hm, am.Ehm), Tm.push(am), fm.push(wm))
          }
        }
        let Am = this.nextLayer.map(mm);
        return 0 == Tm.length ? Am : new MT(fm, Tm, Am || MT.empty, hm)
      }
      between(mm, Tm, fm) {
        if (!this.ZO) {
          for (let hm = 0; hm < this.chunk.length; hm++) {
            let Am = this.chunkPos[hm],
              am = this.chunk[hm];
            if (Tm >= Am && mm <= Am + am.length && !1 === am.between(Am, mm - Am, Tm - Am, fm)) return
          }
          this.nextLayer.between(mm, Tm, fm)
        }
      }
      iter() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return vT.from([this]).goto(mm)
      }
      get ZO() {
        return this.nextLayer == this
      }
      static iter(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return vT.from(mm).goto(Tm)
      }
      static compare(mm, Tm, fm, hm) {
        let Am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1,
          am = mm.filter((mm => mm.Ehm > 0 || !mm.ZO && mm.Ehm >= Am)),
          xm = Tm.filter((mm => mm.Ehm > 0 || !mm.ZO && mm.Ehm >= Am)),
          wm = BT(am, xm, fm),
          Dm = new UT(am, wm, Am),
          im = new UT(xm, wm, Am);
        fm.iterGaps(((mm, Tm, fm) => dT(Dm, mm, im, Tm, fm, hm))), fm.empty && 0 == fm.length && dT(Dm, 0, im, 0, 0, hm)
      }
      static eq(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          hm = arguments.length > 3 ? arguments[3] : void 0;
        null == hm && (hm = 999999999);
        let Am = mm.filter((mm => !mm.ZO && Tm.indexOf(mm) < 0)),
          am = Tm.filter((Tm => !Tm.ZO && mm.indexOf(Tm) < 0));
        if (Am.length != am.length) return !1;
        if (!Am.length) return !0;
        let xm = BT(Am, am),
          wm = new UT(Am, xm, 0).goto(fm),
          Dm = new UT(am, xm, 0).goto(fm);
        for (;;) {
          if (wm.to != Dm.to || !gT(wm.active, Dm.active) || wm.point && (!Dm.point || !CT(wm.point, Dm.point))) return !1;
          if (wm.to > hm) return !0;
          wm.next(), Dm.next()
        }
      }
      static spans(mm, Tm, fm, hm) {
        let Am = new UT(mm, null, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1).goto(Tm),
          am = Tm,
          xm = Am.openStart;
        for (;;) {
          let mm = Math.min(Am.to, fm);
          if (Am.point) {
            let fm = Am.activeForPoint(Am.to),
              wm = Am.pointFrom < Tm ? fm.length + 1 : Am.point.startSide < 0 ? fm.length : Math.min(fm.length, xm);
            hm.point(am, mm, Am.point, fm, wm, Am.pointRank), xm = Math.min(Am.openEnd(mm), fm.length)
          } else mm > am && (hm.span(am, mm, Am.active, xm), xm = Am.openEnd(mm));
          if (Am.to > fm) return xm + (Am.point && Am.to > fm ? 1 : 0);
          am = Am.to, Am.next()
        }
      }
      static of (mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          fm = new uT;
        for (let hm of mm instanceof rT ? [mm] : Tm ? function(mm) {
            if (mm.length > 1)
              for (let Tm = mm[0], fm = 1; fm < mm.length; fm++) {
                let hm = mm[fm];
                if (sT(Tm, hm) > 0) return mm.slice().sort(sT);
                Tm = hm
              }
            return mm
          }(mm) : mm) fm.add(hm.from, hm.to, hm.value);
        return fm.finish()
      }
      static join(mm) {
        if (!mm.length) return MT.empty;
        let Tm = mm[mm.length - 1];
        for (let fm = mm.length - 2; fm >= 0; fm--)
          for (let hm = mm[fm]; hm != MT.empty; hm = hm.nextLayer) Tm = new MT(hm.chunkPos, hm.chunk, Tm, Math.max(hm.Ehm, Tm.Ehm));
        return Tm
      }
    }
    MT.empty = new MT([], [], null, -1), MT.empty.nextLayer = MT.empty;
    class uT {
      finishChunk(mm) {
        this.chunks.push(new lT(this.from, this.to, this.value, this.Ehm)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.Ehm), this.Ehm = -1, mm && (this.from = [], this.to = [], this.value = [])
      }
      constructor() {
        this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.Ehm = -1, this.setMaxPoint = -1, this.nextLayer = null
      }
      add(mm, Tm, fm) {
        this.addInner(mm, Tm, fm) || (this.nextLayer || (this.nextLayer = new uT)).add(mm, Tm, fm)
      }
      addInner(mm, Tm, fm) {
        let hm = mm - this.lastTo || fm.startSide - this.last.endSide;
        if (hm <= 0 && (mm - this.lastFrom || fm.startSide - this.last.startSide) < 0) throw new Error("Ranges must be added sorted by `from` position and `startSide`");
        return !(hm < 0) && (250 == this.from.length && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = mm), this.from.push(mm - this.chunkStart), this.to.push(Tm - this.chunkStart), this.last = fm, this.lastFrom = mm, this.lastTo = Tm, this.value.push(fm), fm.point && (this.Ehm = Math.max(this.Ehm, Tm - mm)), !0)
      }
      addChunk(mm, Tm) {
        if ((mm - this.lastTo || Tm.value[0].startSide - this.last.endSide) < 0) return !1;
        this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, Tm.Ehm), this.chunks.push(Tm), this.chunkPos.push(mm);
        let fm = Tm.value.length - 1;
        return this.last = Tm.value[fm], this.lastFrom = Tm.from[fm] + mm, this.lastTo = Tm.to[fm] + mm, !0
      }
      finish() {
        return this.finishInner(MT.empty)
      }
      finishInner(mm) {
        if (this.from.length && this.finishChunk(!1), 0 == this.chunks.length) return mm;
        let Tm = MT.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(mm) : mm, this.setMaxPoint);
        return this.from = null, Tm
      }
    }

    function BT(mm, Tm, fm) {
      let hm = new Map;
      for (let am of mm)
        for (let mm = 0; mm < am.chunk.length; mm++) am.chunk[mm].Ehm <= 0 && hm.set(am.chunk[mm], am.chunkPos[mm]);
      let Am = new Set;
      for (let am of Tm)
        for (let mm = 0; mm < am.chunk.length; mm++) {
          let Tm = hm.get(am.chunk[mm]);
          null == Tm || (fm ? fm.mapPos(Tm) : Tm) != am.chunkPos[mm] || (null === fm || void 0 === fm ? void 0 : fm.touchesRange(Tm, Tm + am.chunk[mm].length)) || Am.add(am.chunk[mm])
        }
      return Am
    }
    class LT {
      constructor(mm, Tm, fm) {
        let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.layer = mm, this.skip = Tm, this.ohm = fm, this.rank = hm
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      get endSide() {
        return this.value ? this.value.endSide : 0
      }
      goto(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(mm, Tm, !1), this
      }
      gotoInner(mm, Tm, fm) {
        for (; this.chunkIndex < this.layer.chunk.length;) {
          let Tm = this.layer.chunk[this.chunkIndex];
          if (!(this.skip && this.skip.has(Tm) || this.layer.chunkEnd(this.chunkIndex) < mm || Tm.Ehm < this.ohm)) break;
          this.chunkIndex++, fm = !1
        }
        if (this.chunkIndex < this.layer.chunk.length) {
          let hm = this.layer.chunk[this.chunkIndex].findIndex(mm - this.layer.chunkPos[this.chunkIndex], Tm, !0);
          (!fm || this.rangeIndex < hm) && this.setRangeIndex(hm)
        }
        this.next()
      }
      forward(mm, Tm) {
        (this.to - mm || this.endSide - Tm) < 0 && this.gotoInner(mm, Tm, !0)
      }
      next() {
        for (;;) {
          if (this.chunkIndex == this.layer.chunk.length) {
            this.from = this.to = 1e9, this.value = null;
            break
          } {
            let mm = this.layer.chunkPos[this.chunkIndex],
              Tm = this.layer.chunk[this.chunkIndex],
              fm = mm + Tm.from[this.rangeIndex];
            if (this.from = fm, this.to = mm + Tm.to[this.rangeIndex], this.value = Tm.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.ohm < 0 || this.value.point && this.to - this.from >= this.ohm) break
          }
        }
      }
      setRangeIndex(mm) {
        if (mm == this.layer.chunk[this.chunkIndex].value.length) {
          if (this.chunkIndex++, this.skip)
            for (; this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]);) this.chunkIndex++;
          this.rangeIndex = 0
        } else this.rangeIndex = mm
      }
      nextChunk() {
        this.chunkIndex++, this.rangeIndex = 0, this.next()
      }
      compare(mm) {
        return this.from - mm.from || this.startSide - mm.startSide || this.rank - mm.rank || this.to - mm.to || this.endSide - mm.endSide
      }
    }
    class vT {
      constructor(mm) {
        this.heap = mm
      }
      static from(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          hm = [];
        for (let Am = 0; Am < mm.length; Am++)
          for (let am = mm[Am]; !am.ZO; am = am.nextLayer) am.Ehm >= fm && hm.push(new LT(am, Tm, fm, Am));
        return 1 == hm.length ? hm[0] : new vT(hm)
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      goto(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        for (let fm of this.heap) fm.goto(mm, Tm);
        for (let fm = this.heap.length >> 1; fm >= 0; fm--) tT(this.heap, fm);
        return this.next(), this
      }
      forward(mm, Tm) {
        for (let fm of this.heap) fm.forward(mm, Tm);
        for (let fm = this.heap.length >> 1; fm >= 0; fm--) tT(this.heap, fm);
        (this.to - mm || this.value.endSide - Tm) < 0 && this.next()
      }
      next() {
        if (0 == this.heap.length) this.from = this.to = 1e9, this.value = null, this.rank = -1;
        else {
          let mm = this.heap[0];
          this.from = mm.from, this.to = mm.to, this.value = mm.value, this.rank = mm.rank, mm.value && mm.next(), tT(this.heap, 0)
        }
      }
    }

    function tT(mm, Tm) {
      for (let fm = mm[Tm];;) {
        let hm = 1 + (Tm << 1);
        if (hm >= mm.length) break;
        let Am = mm[hm];
        if (hm + 1 < mm.length && Am.compare(mm[hm + 1]) >= 0 && (Am = mm[hm + 1], hm++), fm.compare(Am) < 0) break;
        mm[hm] = fm, mm[Tm] = Am, Tm = hm
      }
    }
    class UT {
      constructor(mm, Tm, fm) {
        this.ohm = fm, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = vT.from(mm, Tm, fm)
      }
      goto(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.cursor.goto(mm, Tm), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = mm, this.endSide = Tm, this.openStart = -1, this.next(), this
      }
      forward(mm, Tm) {
        for (; this.minActive > -1 && (this.activeTo[this.minActive] - mm || this.active[this.minActive].endSide - Tm) < 0;) this.removeActive(this.minActive);
        this.cursor.forward(mm, Tm)
      }
      removeActive(mm) {
        WT(this.active, mm), WT(this.activeTo, mm), WT(this.activeRank, mm), this.minActive = mf(this.active, this.activeTo)
      }
      addActive(mm) {
        let Tm = 0,
          {
            value: fm,
            to: hm,
            rank: Am
          } = this.cursor;
        for (; Tm < this.activeRank.length && (Am - this.activeRank[Tm] || hm - this.activeTo[Tm]) > 0;) Tm++;
        FT(this.active, Tm, fm), FT(this.activeTo, Tm, hm), FT(this.activeRank, Tm, Am), mm && FT(mm, Tm, this.cursor.from), this.minActive = mf(this.active, this.activeTo)
      }
      next() {
        let mm = this.to,
          Tm = this.point;
        this.point = null;
        let fm = this.openStart < 0 ? [] : null;
        for (;;) {
          let hm = this.minActive;
          if (hm > -1 && (this.activeTo[hm] - this.cursor.from || this.active[hm].endSide - this.cursor.startSide) < 0) {
            if (this.activeTo[hm] > mm) {
              this.to = this.activeTo[hm], this.endSide = this.active[hm].endSide;
              break
            }
            this.removeActive(hm), fm && WT(fm, hm)
          } else {
            if (!this.cursor.value) {
              this.to = this.endSide = 1e9;
              break
            }
            if (this.cursor.from > mm) {
              this.to = this.cursor.from, this.endSide = this.cursor.startSide;
              break
            } {
              let mm = this.cursor.value;
              if (mm.point) {
                if (!(Tm && this.cursor.to == this.to && this.cursor.from < this.cursor.to)) {
                  this.point = mm, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = mm.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
                  break
                }
                this.cursor.next()
              } else this.addActive(fm), this.cursor.next()
            }
          }
        }
        if (fm) {
          this.openStart = 0;
          for (let Tm = fm.length - 1; Tm >= 0 && fm[Tm] < mm; Tm--) this.openStart++
        }
      }
      activeForPoint(mm) {
        if (!this.active.length) return this.active;
        let Tm = [];
        for (let fm = this.active.length - 1; fm >= 0 && !(this.activeRank[fm] < this.pointRank); fm--)(this.activeTo[fm] > mm || this.activeTo[fm] == mm && this.active[fm].endSide >= this.point.endSide) && Tm.push(this.active[fm]);
        return Tm.reverse()
      }
      openEnd(mm) {
        let Tm = 0;
        for (let fm = this.activeTo.length - 1; fm >= 0 && this.activeTo[fm] > mm; fm--) Tm++;
        return Tm
      }
    }

    function dT(mm, Tm, fm, hm, Am, am) {
      mm.goto(Tm), fm.goto(hm);
      let xm = hm + Am,
        wm = hm,
        Dm = hm - Tm,
        im = !!am.boundChange;
      for (let Rm = !1;;) {
        let Tm = mm.to + Dm - fm.to,
          hm = Tm || mm.endSide - fm.endSide,
          Am = hm < 0 ? mm.to + Dm : fm.to,
          pm = Math.min(Am, xm);
        if (mm.point || fm.point ? (mm.point && fm.point && CT(mm.point, fm.point) && gT(mm.activeForPoint(mm.to), fm.activeForPoint(fm.to)) || am.comparePoint(wm, pm, mm.point, fm.point), Rm = !1) : (Rm && am.boundChange(wm), pm > wm && !gT(mm.active, fm.active) && am.compareRange(wm, pm, mm.active, fm.active), im && pm < xm && (Tm || mm.openEnd(Am) != fm.openEnd(Am)) && (Rm = !0)), Am > xm) break;
        wm = Am, hm <= 0 && mm.next(), hm >= 0 && fm.next()
      }
    }

    function gT(mm, Tm) {
      if (mm.length != Tm.length) return !1;
      for (let fm = 0; fm < mm.length; fm++)
        if (mm[fm] != Tm[fm] && !CT(mm[fm], Tm[fm])) return !1;
      return !0
    }

    function WT(mm, Tm) {
      for (let fm = Tm, hm = mm.length - 1; fm < hm; fm++) mm[fm] = mm[fm + 1];
      mm.pop()
    }

    function FT(mm, Tm, fm) {
      for (let hm = mm.length - 1; hm >= Tm; hm--) mm[hm + 1] = mm[hm];
      mm[Tm] = fm
    }

    function mf(mm, Tm) {
      let fm = -1,
        hm = 1e9;
      for (let Am = 0; Am < Tm.length; Am++)(Tm[Am] - hm || mm[Am].endSide - mm[fm].endSide) < 0 && (fm = Am, hm = Tm[Am]);
      return fm
    }

    function Tf(mm, Tm) {
      let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : mm.length,
        hm = 0;
      for (let Am = 0; Am < fm && Am < mm.length;) 9 == mm.charCodeAt(Am) ? (hm += Tm - hm % Tm, Am++) : (hm++, Am = zm(mm, Am));
      return hm
    }

    function ff(mm, Tm, fm, hm) {
      for (let Am = 0, am = 0;;) {
        if (am >= Tm) return Am;
        if (Am == mm.length) break;
        am += 9 == mm.charCodeAt(Am) ? fm - am % fm : 1, Am = zm(mm, Am)
      }
      return !0 === hm ? -1 : mm.length
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);