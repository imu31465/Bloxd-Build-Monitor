export const id = 299;
export const ids = [299];
export const modules = {
  41540: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Me,
      g: () => Pt,
      ChangeSet: () => Zt,
      k: () => Re,
      n: () => Ut,
      q: () => Le,
      s: () => Yt,
      t: () => It,
      u: () => De,
      B: () => Ue,
      x: () => Ae,
      E: () => ke,
      I: () => Ce,
      J: () => nt,
      K: () => wt,
      O: () => ue,
      S: () => Wt,
      W: () => ct,
      Y: () => Fe,
      Z: () => eV,
      $: () => vt,
      db: () => VV,
      fb: () => St
    });
    let Ot = [],
      qt = [];

    function Dt(tt) {
      if (tt < 768) return !1;
      for (let et = 0, Vt = Ot.length;;) {
        let Dt = et + Vt >> 1;
        if (tt < Ot[Dt]) Vt = Dt;
        else {
          if (!(tt >= qt[Dt])) return !0;
          et = Dt + 1
        }
        if (et == Vt) return !1
      }
    }

    function mt(tt) {
      return tt >= 127462 && tt <= 127487
    }(() => {
      let tt = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((tt => tt ? parseInt(tt, 36) : 1));
      for (let et = 0, Vt = 0; et < tt.length; et++)(et % 2 ? qt : Ot).push(Vt += tt[et])
    })();
    const dt = 8205;

    function jt(tt, et) {
      return (!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2] ? Ht : Xt)(tt, et, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function Ht(tt, et, Vt) {
      if (et == tt.length) return et;
      et && lt(tt.charCodeAt(et)) && Et(tt.charCodeAt(et - 1)) && et--;
      let Ot = Qt(tt, et);
      for (et += ft(Ot); et < tt.length;) {
        let qt = Qt(tt, et);
        if (Ot == dt || qt == dt || Vt && Dt(qt)) et += ft(qt), Ot = qt;
        else {
          if (!mt(qt)) break;
          {
            let Vt = 0,
              Ot = et - 2;
            for (; Ot >= 0 && mt(Qt(tt, Ot));) Vt++, Ot -= 2;
            if (Vt % 2 == 0) break;
            et += 2
          }
        }
      }
      return et
    }

    function Xt(tt, et, Vt) {
      for (; et > 0;) {
        let Ot = Ht(tt, et - 2, Vt);
        if (Ot < et) return Ot;
        et--
      }
      return 0
    }

    function Qt(tt, et) {
      let Vt = tt.charCodeAt(et);
      if (!Et(Vt) || et + 1 == tt.length) return Vt;
      let Ot = tt.charCodeAt(et + 1);
      return lt(Ot) ? Ot - 56320 + (Vt - 55296 << 10) + 65536 : Vt
    }

    function lt(tt) {
      return tt >= 56320 && tt < 57344
    }

    function Et(tt) {
      return tt >= 55296 && tt < 56320
    }

    function ft(tt) {
      return tt < 65536 ? 1 : 2
    }
    class wt {
      lineAt(tt) {
        if (tt < 0 || tt > this.length) throw new RangeError(`Invalid position ${tt} in document of length ${this.length}`);
        return this.lineInner(tt, !1, 1, 0)
      }
      line(tt) {
        if (tt < 1 || tt > this.lines) throw new RangeError(`Invalid line number ${tt} in ${this.lines}-line document`);
        return this.lineInner(tt, !0, 1, 0)
      }
      replace(tt, et, Vt) {
        [tt, et] = ht(this, tt, et);
        let Ot = [];
        return this.decompose(0, tt, Ot, 2), Vt.length && Vt.decompose(0, Vt.length, Ot, 3), this.decompose(et, this.length, Ot, 1), Nt.from(Ot, this.length - (et - tt) + Vt.length)
      }
      append(tt) {
        return this.replace(this.length, this.length, tt)
      }
      slice(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        [tt, et] = ht(this, tt, et);
        let Vt = [];
        return this.decompose(tt, et, Vt, 0), Nt.from(Vt, et - tt)
      }
      eq(tt) {
        if (tt == this) return !0;
        if (tt.length != this.length || tt.lines != this.lines) return !1;
        let et = this.scanIdentical(tt, 1),
          Vt = this.length - this.scanIdentical(tt, -1),
          Ot = new Jt(this),
          qt = new Jt(tt);
        for (let Dt = et, mt = et;;) {
          if (Ot.next(Dt), qt.next(Dt), Dt = 0, Ot.lineBreak != qt.lineBreak || Ot.done != qt.done || Ot.value != qt.value) return !1;
          if (mt += Ot.value.length, Ot.done || mt >= Vt) return !0
        }
      }
      iter() {
        return new Jt(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1)
      }
      iterRange(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        return new Ct(this, tt, et)
      }
      iterLines(tt, et) {
        let Vt;
        if (null == tt) Vt = this.iter();
        else {
          null == et && (et = this.lines + 1);
          let Ot = this.line(tt).from;
          Vt = this.iterRange(Ot, Math.max(Ot, et == this.lines + 1 ? this.length : et <= 1 ? 0 : this.line(et - 1).to))
        }
        return new ut(Vt)
      }
      toString() {
        return this.sliceString(0)
      }
      toJSON() {
        let tt = [];
        return this.flatten(tt), tt
      }
      constructor() {}
      static of (tt) {
        if (0 == tt.length) throw new RangeError("A document must have at least one line");
        return 1 != tt.length || tt[0] ? tt.length <= 32 ? new yt(tt) : Nt.from(yt.split(tt, [])) : wt.empty
      }
    }
    class yt extends wt {
      constructor(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(tt) {
          let et = -1;
          for (let Vt of tt) et += Vt.length + 1;
          return et
        }(tt);
        super(), this.text = tt, this.length = et
      }
      get lines() {
        return this.text.length
      }
      get children() {
        return null
      }
      lineInner(tt, et, Vt, Ot) {
        for (let qt = 0;; qt++) {
          let Dt = this.text[qt],
            mt = Ot + Dt.length;
          if ((et ? Vt : mt) >= tt) return new Kt(Ot, mt, Vt, Dt);
          Ot = mt + 1, Vt++
        }
      }
      decompose(tt, et, Vt, Ot) {
        let qt = tt <= 0 && et >= this.length ? this : new yt(bt(this.text, tt, et), Math.min(et, this.length) - Math.max(0, tt));
        if (1 & Ot) {
          let tt = Vt.pop(),
            et = Mt(qt.text, tt.text.slice(), 0, qt.length);
          if (et.length <= 32) Vt.push(new yt(et, tt.length + qt.length));
          else {
            let tt = et.length >> 1;
            Vt.push(new yt(et.slice(0, tt)), new yt(et.slice(tt)))
          }
        } else Vt.push(qt)
      }
      replace(tt, et, Vt) {
        if (!(Vt instanceof yt)) return super.replace(tt, et, Vt);
        [tt, et] = ht(this, tt, et);
        let Ot = Mt(this.text, Mt(Vt.text, bt(this.text, 0, tt)), et),
          qt = this.length + Vt.length - (et - tt);
        return Ot.length <= 32 ? new yt(Ot, qt) : Nt.from(yt.split(Ot, []), qt)
      }
      sliceString(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [tt, et] = ht(this, tt, et);
        let Ot = "";
        for (let qt = 0, Dt = 0; qt <= et && Dt < this.text.length; Dt++) {
          let mt = this.text[Dt],
            dt = qt + mt.length;
          qt > tt && Dt && (Ot += Vt), tt < dt && et > qt && (Ot += mt.slice(Math.max(0, tt - qt), et - qt)), qt = dt + 1
        }
        return Ot
      }
      flatten(tt) {
        for (let et of this.text) tt.push(et)
      }
      scanIdentical() {
        return 0
      }
      static split(tt, et) {
        let Vt = [],
          Ot = -1;
        for (let qt of tt) Vt.push(qt), Ot += qt.length + 1, 32 == Vt.length && (et.push(new yt(Vt, Ot)), Vt = [], Ot = -1);
        return Ot > -1 && et.push(new yt(Vt, Ot)), et
      }
    }
    class Nt extends wt {
      constructor(tt, et) {
        super(), this.children = tt, this.length = et, this.lines = 0;
        for (let Vt of tt) this.lines += Vt.lines
      }
      lineInner(tt, et, Vt, Ot) {
        for (let qt = 0;; qt++) {
          let Dt = this.children[qt],
            mt = Ot + Dt.length,
            dt = Vt + Dt.lines - 1;
          if ((et ? dt : mt) >= tt) return Dt.lineInner(tt, et, Vt, Ot);
          Ot = mt + 1, Vt = dt + 1
        }
      }
      decompose(tt, et, Vt, Ot) {
        for (let qt = 0, Dt = 0; Dt <= et && qt < this.children.length; qt++) {
          let mt = this.children[qt],
            dt = Dt + mt.length;
          if (tt <= dt && et >= Dt) {
            let qt = Ot & ((Dt <= tt ? 1 : 0) | (dt >= et ? 2 : 0));
            Dt >= tt && dt <= et && !qt ? Vt.push(mt) : mt.decompose(tt - Dt, et - Dt, Vt, qt)
          }
          Dt = dt + 1
        }
      }
      replace(tt, et, Vt) {
        if ([tt, et] = ht(this, tt, et), Vt.lines < this.lines)
          for (let Ot = 0, qt = 0; Ot < this.children.length; Ot++) {
            let Dt = this.children[Ot],
              mt = qt + Dt.length;
            if (tt >= qt && et <= mt) {
              let dt = Dt.replace(tt - qt, et - qt, Vt),
                jt = this.lines - Dt.lines + dt.lines;
              if (dt.lines < jt >> 4 && dt.lines > jt >> 6) {
                let qt = this.children.slice();
                return qt[Ot] = dt, new Nt(qt, this.length - (et - tt) + Vt.length)
              }
              return super.replace(qt, mt, dt)
            }
            qt = mt + 1
          }
        return super.replace(tt, et, Vt)
      }
      sliceString(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [tt, et] = ht(this, tt, et);
        let Ot = "";
        for (let qt = 0, Dt = 0; qt < this.children.length && Dt <= et; qt++) {
          let mt = this.children[qt],
            dt = Dt + mt.length;
          Dt > tt && qt && (Ot += Vt), tt < dt && et > Dt && (Ot += mt.sliceString(tt - Dt, et - Dt, Vt)), Dt = dt + 1
        }
        return Ot
      }
      flatten(tt) {
        for (let et of this.children) et.flatten(tt)
      }
      scanIdentical(tt, et) {
        if (!(tt instanceof Nt)) return 0;
        let Vt = 0,
          [Ot, qt, Dt, mt] = et > 0 ? [0, 0, this.children.length, tt.children.length] : [this.children.length - 1, tt.children.length - 1, -1, -1];
        for (;; Ot += et, qt += et) {
          if (Ot == Dt || qt == mt) return Vt;
          let dt = this.children[Ot],
            jt = tt.children[qt];
          if (dt != jt) return Vt + dt.scanIdentical(jt, et);
          Vt += dt.length + 1
        }
      }
      static from(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tt.reduce(((tt, et) => tt + et.length + 1), -1),
          Vt = 0;
        for (let lt of tt) Vt += lt.lines;
        if (Vt < 32) {
          let Vt = [];
          for (let et of tt) et.flatten(Vt);
          return new yt(Vt, et)
        }
        let Ot = Math.max(32, Vt >> 5),
          qt = Ot << 1,
          Dt = Ot >> 1,
          mt = [],
          dt = 0,
          jt = -1,
          Ht = [];

        function Xt(tt) {
          let et;
          if (tt.lines > qt && tt instanceof Nt)
            for (let Vt of tt.children) Xt(Vt);
          else tt.lines > Dt && (dt > Dt || !dt) ? (Qt(), mt.push(tt)) : tt instanceof yt && dt && (et = Ht[Ht.length - 1]) instanceof yt && tt.lines + et.lines <= 32 ? (dt += tt.lines, jt += tt.length + 1, Ht[Ht.length - 1] = new yt(et.text.concat(tt.text), et.length + 1 + tt.length)) : (dt + tt.lines > Ot && Qt(), dt += tt.lines, jt += tt.length + 1, Ht.push(tt))
        }

        function Qt() {
          0 != dt && (mt.push(1 == Ht.length ? Ht[0] : Nt.from(Ht, jt)), jt = -1, dt = Ht.length = 0)
        }
        for (let lt of tt) Xt(lt);
        return Qt(), 1 == mt.length ? mt[0] : new Nt(mt, et)
      }
    }

    function Mt(tt, et) {
      let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e9;
      for (let qt = 0, Dt = 0, mt = !0; Dt < tt.length && qt <= Ot; Dt++) {
        let dt = tt[Dt],
          jt = qt + dt.length;
        jt >= Vt && (jt > Ot && (dt = dt.slice(0, Ot - qt)), qt < Vt && (dt = dt.slice(Vt - qt)), mt ? (et[et.length - 1] += dt, mt = !1) : et.push(dt)), qt = jt + 1
      }
      return et
    }

    function bt(tt, et, Vt) {
      return Mt(tt, [""], et, Vt)
    }
    wt.empty = new yt([""], 0);
    class Jt {
      constructor(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.dir = et, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [tt], this.offsets = [et > 0 ? 1 : (tt instanceof yt ? tt.text.length : tt.children.length) << 1]
      }
      nextInner(tt, et) {
        for (this.done = this.lineBreak = !1;;) {
          let Vt = this.nodes.length - 1,
            Ot = this.nodes[Vt],
            qt = this.offsets[Vt],
            Dt = qt >> 1,
            mt = Ot instanceof yt ? Ot.text.length : Ot.children.length;
          if (Dt == (et > 0 ? mt : 0)) {
            if (0 == Vt) return this.done = !0, this.value = "", this;
            et > 0 && this.offsets[Vt - 1]++, this.nodes.pop(), this.offsets.pop()
          } else if ((1 & qt) == (et > 0 ? 0 : 1)) {
            if (this.offsets[Vt] += et, 0 == tt) return this.lineBreak = !0, this.value = "\n", this;
            tt--
          } else if (Ot instanceof yt) {
            let qt = Ot.text[Dt + (et < 0 ? -1 : 0)];
            if (this.offsets[Vt] += et, qt.length > Math.max(0, tt)) return this.value = 0 == tt ? qt : et > 0 ? qt.slice(tt) : qt.slice(0, qt.length - tt), this;
            tt -= qt.length
          } else {
            let qt = Ot.children[Dt + (et < 0 ? -1 : 0)];
            tt > qt.length ? (tt -= qt.length, this.offsets[Vt] += et) : (et < 0 && this.offsets[Vt]--, this.nodes.push(qt), this.offsets.push(et > 0 ? 1 : (qt instanceof yt ? qt.text.length : qt.children.length) << 1))
          }
        }
      }
      next() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return tt < 0 && (this.nextInner(-tt, -this.dir), tt = this.value.length), this.nextInner(tt, this.dir)
      }
    }
    class Ct {
      constructor(tt, et, Vt) {
        this.value = "", this.done = !1, this.cursor = new Jt(tt, et > Vt ? -1 : 1), this.pos = et > Vt ? tt.length : 0, this.from = Math.min(et, Vt), this.to = Math.max(et, Vt)
      }
      nextInner(tt, et) {
        if (et < 0 ? this.pos <= this.from : this.pos >= this.to) return this.value = "", this.done = !0, this;
        tt += Math.max(0, et < 0 ? this.pos - this.to : this.from - this.pos);
        let Vt = et < 0 ? this.pos - this.from : this.to - this.pos;
        tt > Vt && (tt = Vt), Vt -= tt;
        let {
          value: Ot
        } = this.cursor.next(tt);
        return this.pos += (Ot.length + tt) * et, this.value = Ot.length <= Vt ? Ot : et < 0 ? Ot.slice(Ot.length - Vt) : Ot.slice(0, Vt), this.done = !this.value, this
      }
      next() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return tt < 0 ? tt = Math.max(tt, this.from - this.pos) : tt > 0 && (tt = Math.min(tt, this.to - this.pos)), this.nextInner(tt, this.cursor.dir)
      }
      get lineBreak() {
        return this.cursor.lineBreak && "" != this.value
      }
    }
    class ut {
      constructor(tt) {
        this.inner = tt, this.afterBreak = !0, this.value = "", this.done = !1
      }
      next() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          {
            done: et,
            lineBreak: Vt,
            value: Ot
          } = this.inner.next(tt);
        return et && this.afterBreak ? (this.value = "", this.afterBreak = !1) : et ? (this.done = !0, this.value = "") : Vt ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = Ot, this.afterBreak = !1), this
      }
      get lineBreak() {
        return !1
      }
    }
    "undefined" != typeof Symbol && (wt.prototype[Symbol.iterator] = function() {
      return this.iter()
    }, Jt.prototype[Symbol.iterator] = Ct.prototype[Symbol.iterator] = ut.prototype[Symbol.iterator] = function() {
      return this
    });
    class Kt {
      constructor(tt, et, Vt, Ot) {
        this.from = tt, this.to = et, this.number = Vt, this.text = Ot
      }
      get length() {
        return this.to - this.from
      }
    }

    function ht(tt, et, Vt) {
      return [et = Math.max(0, Math.min(tt.length, et)), Math.max(et, Math.min(tt.length, Vt))]
    }

    function vt(tt, et) {
      return jt(tt, et, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function Wt(tt, et) {
      let Vt = tt.charCodeAt(et);
      if (!((Ot = Vt) >= 55296 && Ot < 56320) || et + 1 == tt.length) return Vt;
      var Ot;
      let qt = tt.charCodeAt(et + 1);
      return function(tt) {
        return tt >= 56320 && tt < 57344
      }(qt) ? qt - 56320 + (Vt - 55296 << 10) + 65536 : Vt
    }

    function St(tt) {
      return tt <= 65535 ? String.fromCharCode(tt) : (tt -= 65536, String.fromCharCode(55296 + (tt >> 10), 56320 + (1023 & tt)))
    }

    function ct(tt) {
      return tt < 65536 ? 1 : 2
    }
    const Rt = /\r\n?|\n/;
    var It = function(tt) {
      return tt[tt.Simple = 0] = "Simple", tt[tt.TrackDel = 1] = "TrackDel", tt[tt.TrackBefore = 2] = "TrackBefore", tt[tt.TrackAfter = 3] = "TrackAfter", tt
    }(It || (It = {}));
    class Pt {
      constructor(tt) {
        this.sections = tt
      }
      get length() {
        let tt = 0;
        for (let et = 0; et < this.sections.length; et += 2) tt += this.sections[et];
        return tt
      }
      get newLength() {
        let tt = 0;
        for (let et = 0; et < this.sections.length; et += 2) {
          let Vt = this.sections[et + 1];
          tt += Vt < 0 ? this.sections[et] : Vt
        }
        return tt
      }
      get empty() {
        return 0 == this.sections.length || 2 == this.sections.length && this.sections[1] < 0
      }
      iterGaps(tt) {
        for (let et = 0, Vt = 0, Ot = 0; et < this.sections.length;) {
          let qt = this.sections[et++],
            Dt = this.sections[et++];
          Dt < 0 ? (tt(Vt, Ot, qt), Ot += qt) : Ot += Dt, Vt += qt
        }
      }
      iterChangedRanges(tt) {
        kt(this, tt, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get invertedDesc() {
        let tt = [];
        for (let et = 0; et < this.sections.length;) {
          let Vt = this.sections[et++],
            Ot = this.sections[et++];
          Ot < 0 ? tt.push(Vt, Ot) : tt.push(Ot, Vt)
        }
        return new Pt(tt)
      }
      composeDesc(tt) {
        return this.empty ? tt : tt.empty ? this : zt(this, tt)
      }
      mapDesc(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return tt.empty ? this : Gt(this, tt, et)
      }
      mapPos(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : It.Simple,
          Ot = 0,
          qt = 0;
        for (let Dt = 0; Dt < this.sections.length;) {
          let mt = this.sections[Dt++],
            dt = this.sections[Dt++],
            jt = Ot + mt;
          if (dt < 0) {
            if (jt > tt) return qt + (tt - Ot);
            qt += mt
          } else {
            if (Vt != It.Simple && jt >= tt && (Vt == It.TrackDel && Ot < tt && jt > tt || Vt == It.TrackBefore && Ot < tt || Vt == It.TrackAfter && jt > tt)) return null;
            if (jt > tt || jt == tt && et < 0 && !mt) return tt == Ot || et < 0 ? qt : qt + dt;
            qt += dt
          }
          Ot = jt
        }
        if (tt > Ot) throw new RangeError(`Position ${tt} is out of range for changeset of length ${Ot}`);
        return qt
      }
      touchesRange(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tt;
        for (let Vt = 0, Ot = 0; Vt < this.sections.length && Ot <= et;) {
          let qt = Ot + this.sections[Vt++];
          if (this.sections[Vt++] >= 0 && Ot <= et && qt >= tt) return !(Ot < tt && qt > et) || "cover";
          Ot = qt
        }
        return !1
      }
      toString() {
        let tt = "";
        for (let et = 0; et < this.sections.length;) {
          let Vt = this.sections[et++],
            Ot = this.sections[et++];
          tt += (tt ? " " : "") + Vt + (Ot >= 0 ? ":" + Ot : "")
        }
        return tt
      }
      toJSON() {
        return this.sections
      }
      static fromJSON(tt) {
        if (!Array.isArray(tt) || tt.length % 2 || tt.some((tt => "number" != typeof tt))) throw new RangeError("Invalid JSON representation of ChangeDesc");
        return new Pt(tt)
      }
      static create(tt) {
        return new Pt(tt)
      }
    }
    class Zt extends Pt {
      constructor(tt, et) {
        super(tt), this.inserted = et
      }
      apply(tt) {
        if (this.length != tt.length) throw new RangeError("Applying change set to a document with the wrong length");
        return kt(this, ((et, Vt, Ot, qt, Dt) => tt = tt.replace(Ot, Ot + (Vt - et), Dt)), !1), tt
      }
      mapDesc(tt) {
        return Gt(this, tt, arguments.length > 1 && void 0 !== arguments[1] && arguments[1], !0)
      }
      invert(tt) {
        let et = this.sections.slice(),
          Vt = [];
        for (let Ot = 0, qt = 0; Ot < et.length; Ot += 2) {
          let Dt = et[Ot],
            mt = et[Ot + 1];
          if (mt >= 0) {
            et[Ot] = mt, et[Ot + 1] = Dt;
            let dt = Ot >> 1;
            for (; Vt.length < dt;) Vt.push(wt.empty);
            Vt.push(Dt ? tt.slice(qt, qt + Dt) : wt.empty)
          }
          qt += Dt
        }
        return new Zt(et, Vt)
      }
      compose(tt) {
        return this.empty ? tt : tt.empty ? this : zt(this, tt, !0)
      }
      map(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return tt.empty ? this : Gt(this, tt, et, !0)
      }
      iterChanges(tt) {
        kt(this, tt, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get desc() {
        return Pt.create(this.sections)
      }
      filter(tt) {
        let et = [],
          Vt = [],
          Ot = [],
          qt = new ot(this);
        tt: for (let Dt = 0, mt = 0;;) {
          let dt = Dt == tt.length ? 1e9 : tt[Dt++];
          for (; mt < dt || mt == dt && 0 == qt.len;) {
            if (qt.done) break tt;
            let tt = Math.min(qt.len, dt - mt);
            Lt(Ot, tt, -1);
            let Dt = -1 == qt.ins ? -1 : 0 == qt.off ? qt.ins : 0;
            Lt(et, tt, Dt), Dt > 0 && Ft(Vt, et, qt.text), qt.forward(tt), mt += tt
          }
          let jt = tt[Dt++];
          for (; mt < jt;) {
            if (qt.done) break tt;
            let tt = Math.min(qt.len, jt - mt);
            Lt(et, tt, -1), Lt(Ot, tt, -1 == qt.ins ? -1 : 0 == qt.off ? qt.ins : 0), qt.forward(tt), mt += tt
          }
        }
        return {
          changes: new Zt(et, Vt),
          filtered: Pt.create(Ot)
        }
      }
      toJSON() {
        let tt = [];
        for (let et = 0; et < this.sections.length; et += 2) {
          let Vt = this.sections[et],
            Ot = this.sections[et + 1];
          Ot < 0 ? tt.push(Vt) : 0 == Ot ? tt.push([Vt]) : tt.push([Vt].concat(this.inserted[et >> 1].toJSON()))
        }
        return tt
      }
      static of (tt, et, Vt) {
        let Ot = [],
          qt = [],
          Dt = 0,
          mt = null;

        function dt() {
          if (!(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && !Ot.length) return;
          Dt < et && Lt(Ot, et - Dt, -1);
          let tt = new Zt(Ot, qt);
          mt = mt ? mt.compose(tt.map(mt)) : tt, Ot = [], qt = [], Dt = 0
        }
        return function tt(jt) {
          if (Array.isArray(jt))
            for (let et of jt) tt(et);
          else if (jt instanceof Zt) {
            if (jt.length != et) throw new RangeError(`Mismatched change set length (got ${jt.length}, expected ${et})`);
            dt(), mt = mt ? mt.compose(jt.map(mt)) : jt
          } else {
            let {
              from: tt,
              to: mt = tt,
              insert: Ht
            } = jt;
            if (tt > mt || tt < 0 || mt > et) throw new RangeError(`Invalid change range ${tt} to ${mt} (in doc of length ${et})`);
            let Xt = Ht ? "string" == typeof Ht ? wt.of(Ht.split(Vt || Rt)) : Ht : wt.empty,
              Qt = Xt.length;
            if (tt == mt && 0 == Qt) return;
            tt < Dt && dt(), tt > Dt && Lt(Ot, tt - Dt, -1), Lt(Ot, mt - tt, Qt), Ft(qt, Ot, Xt), Dt = mt
          }
        }(tt), dt(!mt), mt
      }
      static empty(tt) {
        return new Zt(tt ? [tt, -1] : [], [])
      }
      static fromJSON(tt) {
        if (!Array.isArray(tt)) throw new RangeError("Invalid JSON representation of ChangeSet");
        let et = [],
          Vt = [];
        for (let Ot = 0; Ot < tt.length; Ot++) {
          let qt = tt[Ot];
          if ("number" == typeof qt) et.push(qt, -1);
          else {
            if (!Array.isArray(qt) || "number" != typeof qt[0] || qt.some(((tt, et) => et && "string" != typeof tt))) throw new RangeError("Invalid JSON representation of ChangeSet");
            if (1 == qt.length) et.push(qt[0], 0);
            else {
              for (; Vt.length < Ot;) Vt.push(wt.empty);
              Vt[Ot] = wt.of(qt.slice(1)), et.push(qt[0], Vt[Ot].length)
            }
          }
        }
        return new Zt(et, Vt)
      }
      static createSet(tt, et) {
        return new Zt(tt, et)
      }
    }

    function Lt(tt, et, Vt) {
      let Ot = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (0 == et && Vt <= 0) return;
      let qt = tt.length - 2;
      qt >= 0 && Vt <= 0 && Vt == tt[qt + 1] ? tt[qt] += et : qt >= 0 && 0 == et && 0 == tt[qt] ? tt[qt + 1] += Vt : Ot ? (tt[qt] += et, tt[qt + 1] += Vt) : tt.push(et, Vt)
    }

    function Ft(tt, et, Vt) {
      if (0 == Vt.length) return;
      let Ot = et.length - 2 >> 1;
      if (Ot < tt.length) tt[tt.length - 1] = tt[tt.length - 1].append(Vt);
      else {
        for (; tt.length < Ot;) tt.push(wt.empty);
        tt.push(Vt)
      }
    }

    function kt(tt, et, Vt) {
      let Ot = tt.inserted;
      for (let qt = 0, Dt = 0, mt = 0; mt < tt.sections.length;) {
        let dt = tt.sections[mt++],
          jt = tt.sections[mt++];
        if (jt < 0) qt += dt, Dt += dt;
        else {
          let Ht = qt,
            Xt = Dt,
            Qt = wt.empty;
          for (; Ht += dt, Xt += jt, jt && Ot && (Qt = Qt.append(Ot[mt - 2 >> 1])), !(Vt || mt == tt.sections.length || tt.sections[mt + 1] < 0);) dt = tt.sections[mt++], jt = tt.sections[mt++];
          et(qt, Ht, Dt, Xt, Qt), qt = Ht, Dt = Xt
        }
      }
    }

    function Gt(tt, et, Vt) {
      let Ot = [],
        qt = arguments.length > 3 && void 0 !== arguments[3] && arguments[3] ? [] : null,
        Dt = new ot(tt),
        mt = new ot(et),
        dt = 0;
      for (let jt = -1;;) {
        if (++dt > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - likely malformed ChangeSet");
        if (Dt.done && mt.len || mt.done && Dt.len) throw new Error("Mismatched change set lengths");
        if (-1 == Dt.ins && -1 == mt.ins) {
          let tt = Math.min(Dt.len, mt.len);
          Lt(Ot, tt, -1), Dt.forward(tt), mt.forward(tt)
        } else if (mt.ins >= 0 && (Dt.ins < 0 || jt == Dt.i || 0 == Dt.off && (mt.len < Dt.len || mt.len == Dt.len && !Vt))) {
          let tt = mt.len;
          for (Lt(Ot, mt.ins, -1); tt;) {
            if (++dt > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-b");
            let et = Math.min(Dt.len, tt);
            Dt.ins >= 0 && jt < Dt.i && Dt.len <= et && (Lt(Ot, 0, Dt.ins), qt && Ft(qt, Ot, Dt.text), jt = Dt.i), Dt.forward(et), tt -= et
          }
          mt.next()
        } else {
          if (!(Dt.ins >= 0)) {
            if (Dt.done && mt.done) return qt ? Zt.createSet(Ot, qt) : Pt.create(Ot);
            throw new Error("Mismatched change set lengths")
          } {
            let tt = 0,
              et = Dt.len;
            for (; et;) {
              if (++dt > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-a");
              if (-1 == mt.ins) {
                let Vt = Math.min(et, mt.len);
                tt += Vt, et -= Vt, mt.forward(Vt)
              } else {
                if (!(0 == mt.ins && mt.len < et)) break;
                et -= mt.len, mt.next()
              }
            }
            Lt(Ot, tt, jt < Dt.i ? Dt.ins : 0), qt && jt < Dt.i && Ft(qt, Ot, Dt.text), jt = Dt.i, Dt.forward(Dt.len - et)
          }
        }
      }
    }

    function zt(tt, et) {
      let Vt = [],
        Ot = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? [] : null,
        qt = new ot(tt),
        Dt = new ot(et),
        mt = 0;
      for (let dt = !1;;) {
        if (++mt > 2e6) throw new Error("BLOXD CODEMIRROR: composeSets exceeded max iterations - likely malformed ChangeSet");
        if (qt.done && Dt.done) return Ot ? Zt.createSet(Vt, Ot) : Pt.create(Vt);
        if (0 == qt.ins) Lt(Vt, qt.len, 0, dt), qt.next();
        else if (0 != Dt.len || Dt.done) {
          if (qt.done || Dt.done) throw new Error("Mismatched change set lengths");
          {
            let tt = Math.min(qt.len2, Dt.len),
              et = Vt.length;
            if (-1 == qt.ins) {
              let et = -1 == Dt.ins ? -1 : Dt.off ? 0 : Dt.ins;
              Lt(Vt, tt, et, dt), Ot && et && Ft(Ot, Vt, Dt.text)
            } else - 1 == Dt.ins ? (Lt(Vt, qt.off ? 0 : qt.len, tt, dt), Ot && Ft(Ot, Vt, qt.textBit(tt))) : (Lt(Vt, qt.off ? 0 : qt.len, Dt.off ? 0 : Dt.ins, dt), Ot && !Dt.off && Ft(Ot, Vt, Dt.text));
            dt = (qt.ins > tt || Dt.ins >= 0 && Dt.len > tt) && (dt || Vt.length > et), qt.forward2(tt), Dt.forward(tt)
          }
        } else Lt(Vt, 0, Dt.ins, dt), Ot && Ft(Ot, Vt, Dt.text), Dt.next()
      }
    }
    class ot {
      constructor(tt) {
        this.set = tt, this.i = 0, this.next()
      }
      next() {
        let {
          sections: tt
        } = this.set;
        this.i < tt.length ? (this.len = tt[this.i++], this.ins = tt[this.i++]) : (this.len = 0, this.ins = -2), this.off = 0
      }
      get done() {
        return -2 == this.ins
      }
      get len2() {
        return this.ins < 0 ? this.len : this.ins
      }
      get text() {
        let {
          inserted: tt
        } = this.set, et = this.i - 2 >> 1;
        return et >= tt.length ? wt.empty : tt[et]
      }
      textBit(tt) {
        let {
          inserted: et
        } = this.set, Vt = this.i - 2 >> 1;
        return Vt >= et.length && !tt ? wt.empty : et[Vt].slice(this.off, null == tt ? void 0 : this.off + tt)
      }
      forward(tt) {
        tt == this.len ? this.next() : (this.len -= tt, this.off += tt)
      }
      forward2(tt) {
        -1 == this.ins ? this.forward(tt) : tt == this.ins ? this.next() : (this.ins -= tt, this.off += tt)
      }
    }
    class rt {
      constructor(tt, et, Vt) {
        this.from = tt, this.to = et, this.flags = Vt
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
        let tt = 7 & this.flags;
        return 7 == tt ? null : tt
      }
      get goalColumn() {
        let tt = this.flags >> 6;
        return 16777215 == tt ? void 0 : tt
      }
      map(tt) {
        let et, Vt, Ot = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return this.empty ? et = Vt = tt.mapPos(this.from, Ot) : (et = tt.mapPos(this.from, 1), Vt = tt.mapPos(this.to, -1)), et == this.from && Vt == this.to ? this : new rt(et, Vt, this.flags)
      }
      extend(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tt,
          Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (tt <= this.anchor && et >= this.anchor) return Ut.range(tt, et, void 0, void 0, Vt);
        let Ot = Math.abs(tt - this.anchor) > Math.abs(et - this.anchor) ? tt : et;
        return Ut.range(this.anchor, Ot, void 0, void 0, Vt)
      }
      eq(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.anchor == tt.anchor && this.head == tt.head && this.goalColumn == tt.goalColumn && (!et || !this.empty || this.assoc == tt.assoc)
      }
      toJSON() {
        return {
          anchor: this.anchor,
          head: this.head
        }
      }
      static fromJSON(tt) {
        if (!tt || "number" != typeof tt.anchor || "number" != typeof tt.head) throw new RangeError("Invalid JSON representation for SelectionRange");
        return Ut.range(tt.anchor, tt.head)
      }
      static create(tt, et, Vt) {
        return new rt(tt, et, Vt)
      }
    }
    class Ut {
      constructor(tt, et) {
        this.nw = tt, this.mainIndex = et
      }
      map(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return tt.empty ? this : Ut.create(this.nw.map((Vt => Vt.map(tt, et))), this.mainIndex)
      }
      eq(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.nw.length != tt.nw.length || this.mainIndex != tt.mainIndex) return !1;
        for (let Vt = 0; Vt < this.nw.length; Vt++)
          if (!this.nw[Vt].eq(tt.nw[Vt], et)) return !1;
        return !0
      }
      get main() {
        return this.nw[this.mainIndex]
      }
      asSingle() {
        return 1 == this.nw.length ? this : new Ut([this.main], 0)
      }
      addRange(tt) {
        let et = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return Ut.create([tt].concat(this.nw), et ? 0 : this.mainIndex + 1)
      }
      replaceRange(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.mainIndex,
          Vt = this.nw.slice();
        return Vt[et] = tt, Ut.create(Vt, this.mainIndex)
      }
      toJSON() {
        return {
          nw: this.nw.map((tt => tt.toJSON())),
          main: this.mainIndex
        }
      }
      static fromJSON(tt) {
        if (!tt || !Array.isArray(tt.nw) || "number" != typeof tt.main || tt.main >= tt.nw.length) throw new RangeError("Invalid JSON representation for EditorSelection");
        return new Ut(tt.nw.map((tt => rt.fromJSON(tt))), tt.main)
      }
      static single(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tt;
        return new Ut([Ut.range(tt, et)], 0)
      }
      static create(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (0 == tt.length) throw new RangeError("A selection needs at least one range");
        for (let Vt = 0, Ot = 0; Ot < tt.length; Ot++) {
          let qt = tt[Ot];
          if (qt.empty ? qt.from <= Vt : qt.from < Vt) return Ut.normalized(tt.slice(), et);
          Vt = qt.to
        }
        return new Ut(tt, et)
      }
      static cursor(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Vt = arguments.length > 2 ? arguments[2] : void 0,
          Ot = arguments.length > 3 ? arguments[3] : void 0;
        return rt.create(tt, tt, (0 == et ? 0 : et < 0 ? 8 : 16) | (null == Vt ? 7 : Math.min(6, Vt)) | (null !== Ot && void 0 !== Ot ? Ot : 16777215) << 6)
      }
      static range(tt, et, Vt, Ot, qt) {
        let Dt = (null !== Vt && void 0 !== Vt ? Vt : 16777215) << 6 | (null == Ot ? 7 : Math.min(6, Ot));
        return qt || tt == et || (qt = et < tt ? 1 : -1), et < tt ? rt.create(et, tt, 48 | Dt) : rt.create(tt, et, (qt ? qt < 0 ? 8 : 16 : 0) | Dt)
      }
      static normalized(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Vt = tt[et];
        tt.sort(((tt, et) => tt.from - et.from)), et = tt.indexOf(Vt);
        for (let Ot = 1; Ot < tt.length; Ot++) {
          let Vt = tt[Ot],
            qt = tt[Ot - 1];
          if (Vt.empty ? Vt.from <= qt.to : Vt.from < qt.to) {
            let Dt = qt.from,
              mt = Math.max(Vt.to, qt.to);
            Ot <= et && et--, tt.splice(--Ot, 2, Vt.anchor > Vt.head ? Ut.range(mt, Dt) : Ut.range(Dt, mt))
          }
        }
        return new Ut(tt, et)
      }
    }

    function At(tt, et) {
      for (let Vt of tt.nw)
        if (Vt.to > et) throw new RangeError("Selection points outside of document")
    }
    let it = 0;
    class Yt {
      constructor(tt, et, Vt, Ot, qt) {
        this.combine = tt, this.compareInput = et, this.compare = Vt, this.isStatic = Ot, this.id = it++, this.default = tt([]), this.extensions = "function" == typeof qt ? qt(this) : qt
      }
      get reader() {
        return this
      }
      static define() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return new Yt(tt.combine || (tt => tt), tt.compareInput || ((tt, et) => tt === et), tt.compare || (tt.combine ? (tt, et) => tt === et : Bt), !!tt.static, tt.enables)
      }
      of(tt) {
        return new pt([], this, 0, tt)
      }
      compute(tt, et) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new pt(tt, this, 1, et)
      }
      computeN(tt, et) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new pt(tt, this, 2, et)
      }
      from(tt, et) {
        return et || (et = tt => tt), this.compute([tt], (Vt => et(Vt.field(tt))))
      }
    }

    function Bt(tt, et) {
      return tt == et || tt.length == et.length && tt.every(((tt, Vt) => tt === et[Vt]))
    }
    class pt {
      constructor(tt, et, Vt, Ot) {
        this.dependencies = tt, this.facet = et, this.type = Vt, this.value = Ot, this.id = it++
      }
      dynamicSlot(tt) {
        var et;
        let Vt = this.value,
          Ot = this.facet.compareInput,
          qt = this.id,
          Dt = tt[qt] >> 1,
          mt = 2 == this.type,
          dt = !1,
          jt = !1,
          Ht = [];
        for (let Xt of this.dependencies) "doc" == Xt ? dt = !0 : "selection" == Xt ? jt = !0 : 0 == (1 & (null !== (et = tt[Xt.id]) && void 0 !== et ? et : 1)) && Ht.push(tt[Xt.id]);
        return {
          create: tt => (tt.values[Dt] = Vt(tt), 1),
          update(tt, et) {
            if (dt && et.docChanged || jt && (et.docChanged || et.selection) || Tt(tt, Ht)) {
              let et = Vt(tt);
              if (mt ? !xt(et, tt.values[Dt], Ot) : !Ot(et, tt.values[Dt])) return tt.values[Dt] = et, 1
            }
            return 0
          },
          reconfigure: (tt, et) => {
            let dt, jt = et.config.address[qt];
            if (null != jt) {
              let qt = Qe(et, jt);
              if (this.dependencies.every((Vt => Vt instanceof Yt ? et.facet(Vt) === tt.facet(Vt) : !(Vt instanceof nt) || et.field(Vt, !1) == tt.field(Vt, !1))) || (mt ? xt(dt = Vt(tt), qt, Ot) : Ot(dt = Vt(tt), qt))) return tt.values[Dt] = qt, 0
            } else dt = Vt(tt);
            return tt.values[Dt] = dt, 1
          }
        }
      }
    }

    function xt(tt, et, Vt) {
      if (tt.length != et.length) return !1;
      for (let Ot = 0; Ot < tt.length; Ot++)
        if (!Vt(tt[Ot], et[Ot])) return !1;
      return !0
    }

    function Tt(tt, et) {
      let Vt = !1;
      for (let Ot of et) 1 & Xe(tt, Ot) && (Vt = !0);
      return Vt
    }

    function gt(tt, et, Vt) {
      let Ot = Vt.map((et => tt[et.id])),
        qt = Vt.map((tt => tt.type)),
        Dt = Ot.filter((tt => !(1 & tt))),
        mt = tt[et.id] >> 1;

      function dt(tt) {
        let Vt = [];
        for (let et = 0; et < Ot.length; et++) {
          let Dt = Qe(tt, Ot[et]);
          if (2 == qt[et])
            for (let tt of Dt) Vt.push(tt);
          else Vt.push(Dt)
        }
        return et.combine(Vt)
      }
      return {
        create(tt) {
          for (let et of Ot) Xe(tt, et);
          return tt.values[mt] = dt(tt), 1
        },
        update(tt, Vt) {
          if (!Tt(tt, Dt)) return 0;
          let Ot = dt(tt);
          return et.compare(Ot, tt.values[mt]) ? 0 : (tt.values[mt] = Ot, 1)
        },
        reconfigure(tt, qt) {
          let Dt = Tt(tt, Ot),
            jt = qt.config.facets[et.id],
            Ht = qt.facet(et);
          if (jt && !Dt && Bt(Vt, jt)) return tt.values[mt] = Ht, 0;
          let Xt = dt(tt);
          return et.compare(Xt, Ht) ? (tt.values[mt] = Ht, 0) : (tt.values[mt] = Xt, 1)
        }
      }
    }
    const st = Yt.define({
      static: !0
    });
    class nt {
      constructor(tt, et, Vt, Ot, qt) {
        this.id = tt, this.createF = et, this.updateF = Vt, this.compareF = Ot, this.spec = qt, this.provides = void 0
      }
      static define(tt) {
        let et = new nt(it++, tt.create, tt.update, tt.compare || ((tt, et) => tt === et), tt);
        return tt.provide && (et.provides = tt.provide(et)), et
      }
      create(tt) {
        let et = tt.facet(st).find((tt => tt.field == this));
        return ((null === et || void 0 === et ? void 0 : et.create) || this.createF)(tt)
      }
      slot(tt) {
        let et = tt[this.id] >> 1;
        return {
          create: tt => (tt.values[et] = this.create(tt), 1),
          update: (tt, Vt) => {
            let Ot = tt.values[et],
              qt = this.updateF(Ot, Vt);
            return this.compareF(Ot, qt) ? 0 : (tt.values[et] = qt, 1)
          },
          reconfigure: (tt, Vt) => {
            let Ot, qt = tt.facet(st),
              Dt = Vt.facet(st);
            return (Ot = qt.find((tt => tt.field == this))) && Ot != Dt.find((tt => tt.field == this)) ? (tt.values[et] = Ot.create(tt), 1) : null != Vt.config.address[this.id] ? (tt.values[et] = Vt.field(this), 0) : (tt.values[et] = this.create(tt), 1)
          }
        }
      }
      init(tt) {
        return [this, st.of({
          field: this,
          create: tt
        })]
      }
      get extension() {
        return this
      }
    }
    const te = 4,
      ee = 3,
      Ve = 2,
      Oe = 1;

    function qe(tt) {
      return et => new me(et, tt)
    }
    const De = {
      highest: qe(0),
      high: qe(Oe),
      default: qe(Ve),
      low: qe(ee),
      lowest: qe(te)
    };
    class me {
      constructor(tt, et) {
        this.inner = tt, this.prec = et
      }
    }
    class de {
      of(tt) {
        return new je(this, tt)
      }
      reconfigure(tt) {
        return de.reconfigure.of({
          compartment: this,
          extension: tt
        })
      }
      get(tt) {
        return tt.config.compartments.get(this)
      }
    }
    class je {
      constructor(tt, et) {
        this.compartment = tt, this.inner = et
      }
    }
    class He {
      constructor(tt, et, Vt, Ot, qt, Dt) {
        for (this.base = tt, this.compartments = et, this.dynamicSlots = Vt, this.address = Ot, this.staticValues = qt, this.facets = Dt, this.statusTemplate = []; this.statusTemplate.length < Vt.length;) this.statusTemplate.push(0)
      }
      staticFacet(tt) {
        let et = this.address[tt.id];
        return null == et ? tt.default : this.staticValues[et >> 1]
      }
      static resolve(tt, et, Vt) {
        let Ot = [],
          qt = Object.create(null),
          Dt = new Map;
        for (let Qt of function(tt, et, Vt) {
            let Ot = [
                [],
                [],
                [],
                [],
                []
              ],
              qt = new Map;

            function Dt(tt, mt) {
              let dt = qt.get(tt);
              if (null != dt) {
                if (dt <= mt) return;
                let et = Ot[dt].indexOf(tt);
                et > -1 && Ot[dt].splice(et, 1), tt instanceof je && Vt.delete(tt.compartment)
              }
              if (qt.set(tt, mt), Array.isArray(tt))
                for (let et of tt) Dt(et, mt);
              else if (tt instanceof je) {
                if (Vt.has(tt.compartment)) throw new RangeError("Duplicate use of compartment in extensions");
                let Ot = et.get(tt.compartment) || tt.inner;
                Vt.set(tt.compartment, Ot), Dt(Ot, mt)
              } else if (tt instanceof me) Dt(tt.inner, tt.prec);
              else if (tt instanceof nt) Ot[mt].push(tt), tt.provides && Dt(tt.provides, mt);
              else if (tt instanceof pt) Ot[mt].push(tt), tt.facet.extensions && Dt(tt.facet.extensions, Ve);
              else {
                let et = tt.extension;
                if (!et) throw new Error(`Unrecognized extension value in extension set (${tt}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
                Dt(et, mt)
              }
            }
            return Dt(tt, Ve), Ot.reduce(((tt, et) => tt.concat(et)))
          }(tt, et, Dt)) Qt instanceof nt ? Ot.push(Qt) : (qt[Qt.facet.id] || (qt[Qt.facet.id] = [])).push(Qt);
        let mt = Object.create(null),
          dt = [],
          jt = [];
        for (let Qt of Ot) mt[Qt.id] = jt.length << 1, jt.push((tt => Qt.slot(tt)));
        let Ht = null === Vt || void 0 === Vt ? void 0 : Vt.config.facets;
        for (let Qt in qt) {
          let tt = qt[Qt],
            et = tt[0].facet,
            Ot = Ht && Ht[Qt] || [];
          if (tt.every((tt => 0 == tt.type)))
            if (mt[et.id] = dt.length << 1 | 1, Bt(Ot, tt)) dt.push(Vt.facet(et));
            else {
              let Ot = et.combine(tt.map((tt => tt.value)));
              dt.push(Vt && et.compare(Ot, Vt.facet(et)) ? Vt.facet(et) : Ot)
            }
          else {
            for (let et of tt) 0 == et.type ? (mt[et.id] = dt.length << 1 | 1, dt.push(et.value)) : (mt[et.id] = jt.length << 1, jt.push((tt => et.dynamicSlot(tt))));
            mt[et.id] = jt.length << 1, jt.push((Vt => gt(Vt, et, tt)))
          }
        }
        let Xt = jt.map((tt => tt(mt)));
        return new He(tt, Dt, Xt, mt, dt, qt)
      }
    }

    function Xe(tt, et) {
      if (1 & et) return 2;
      let Vt = et >> 1,
        Ot = tt.status[Vt];
      if (4 == Ot) throw new Error("Cyclic dependency between fields and/or facets");
      if (2 & Ot) return Ot;
      tt.status[Vt] = 4;
      let qt = tt.computeSlot(tt, tt.config.dynamicSlots[Vt]);
      return tt.status[Vt] = 2 | qt
    }

    function Qe(tt, et) {
      return 1 & et ? tt.config.staticValues[et >> 1] : tt.values[et >> 1]
    }
    const le = Yt.define(),
      Ee = Yt.define({
        combine: tt => tt.some((tt => tt)),
        static: !0
      }),
      fe = Yt.define({
        combine: tt => tt.length ? tt[0] : void 0,
        static: !0
      }),
      we = Yt.define(),
      ye = Yt.define(),
      Ne = Yt.define(),
      ae = Yt.define({
        combine: tt => !!tt.length && tt[0]
      });
    class Me {
      constructor(tt, et) {
        this.type = tt, this.value = et
      }
      static define() {
        return new be
      }
    }
    class be {
      of(tt) {
        return new Me(this, tt)
      }
    }
    class Je {
      constructor(tt) {
        this.map = tt
      }
      of(tt) {
        return new Ce(this, tt)
      }
    }
    class Ce {
      constructor(tt, et) {
        this.type = tt, this.value = et
      }
      map(tt) {
        let et = this.type.map(this.value, tt);
        return void 0 === et ? void 0 : et == this.value ? this : new Ce(this.type, et)
      }
      is(tt) {
        return this.type == tt
      }
      static define() {
        return new Je((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).map || (tt => tt))
      }
      static mapEffects(tt, et) {
        if (!tt.length) return tt;
        let Vt = [];
        for (let Ot of tt) {
          let tt = Ot.map(et);
          tt && Vt.push(tt)
        }
        return Vt
      }
    }
    Ce.reconfigure = Ce.define(), Ce.appendConfig = Ce.define();
    class ue {
      constructor(tt, et, Vt, Ot, qt, Dt) {
        this.startState = tt, this.changes = et, this.selection = Vt, this.effects = Ot, this.annotations = qt, this.scrollIntoView = Dt, this._doc = null, this._state = null, Vt && At(Vt, et.newLength), qt.some((tt => tt.type == ue.time)) || (this.annotations = qt.concat(ue.time.of(Date.now())))
      }
      static create(tt, et, Vt, Ot, qt, Dt) {
        return new ue(tt, et, Vt, Ot, qt, Dt)
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
      annotation(tt) {
        for (let et of this.annotations)
          if (et.type == tt) return et.value
      }
      get docChanged() {
        return !this.changes.empty
      }
      get reconfigured() {
        return this.startState.config != this.state.config
      }
      isUserEvent(tt) {
        let et = this.annotation(ue.userEvent);
        return !(!et || !(et == tt || et.length > tt.length && et.slice(0, tt.length) == tt && "." == et[tt.length]))
      }
    }

    function Ke(tt, et) {
      let Vt = [];
      for (let Ot = 0, qt = 0;;) {
        let Dt, mt;
        if (Ot < tt.length && (qt == et.length || et[qt] >= tt[Ot])) Dt = tt[Ot++], mt = tt[Ot++];
        else {
          if (!(qt < et.length)) return Vt;
          Dt = et[qt++], mt = et[qt++]
        }!Vt.length || Vt[Vt.length - 1] < Dt ? Vt.push(Dt, mt) : Vt[Vt.length - 1] < mt && (Vt[Vt.length - 1] = mt)
      }
    }

    function he(tt, et, Vt) {
      var Ot;
      let qt, Dt, mt;
      return Vt ? (qt = et.changes, Dt = Zt.empty(et.changes.length), mt = tt.changes.compose(et.changes)) : (qt = et.changes.map(tt.changes), Dt = tt.changes.mapDesc(et.changes, !0), mt = tt.changes.compose(qt)), {
        changes: mt,
        selection: et.selection ? et.selection.map(Dt) : null === (Ot = tt.selection) || void 0 === Ot ? void 0 : Ot.map(qt),
        effects: Ce.mapEffects(tt.effects, qt).concat(Ce.mapEffects(et.effects, Dt)),
        annotations: tt.annotations.length ? tt.annotations.concat(et.annotations) : et.annotations,
        scrollIntoView: tt.scrollIntoView || et.scrollIntoView
      }
    }

    function ve(tt, et, Vt) {
      let Ot = et.selection,
        qt = ce(et.annotations);
      return et.userEvent && (qt = qt.concat(ue.userEvent.of(et.userEvent))), {
        changes: et.changes instanceof Zt ? et.changes : Zt.of(et.changes || [], Vt, tt.facet(fe)),
        selection: Ot && (Ot instanceof Ut ? Ot : Ut.single(Ot.anchor, Ot.head)),
        effects: ce(et.effects),
        annotations: qt,
        scrollIntoView: !!et.scrollIntoView
      }
    }

    function We(tt, et, Vt) {
      let Ot = ve(tt, et.length ? et[0] : {}, tt.doc.length);
      et.length && !1 === et[0].filter && (Vt = !1);
      for (let Dt = 1; Dt < et.length; Dt++) {
        !1 === et[Dt].filter && (Vt = !1);
        let qt = !!et[Dt].sequential;
        Ot = he(Ot, ve(tt, et[Dt], qt ? Ot.changes.newLength : tt.doc.length), qt)
      }
      let qt = ue.create(tt, Ot.changes, Ot.selection, Ot.effects, Ot.annotations, Ot.scrollIntoView);
      return function(tt) {
        let et = tt.startState,
          Vt = et.facet(Ne),
          Ot = tt;
        for (let qt = Vt.length - 1; qt >= 0; qt--) {
          let Dt = Vt[qt](tt);
          Dt && Object.keys(Dt).length && (Ot = he(Ot, ve(et, Dt, tt.changes.newLength), !0))
        }
        return Ot == tt ? tt : ue.create(et, tt.changes, tt.selection, Ot.effects, Ot.annotations, Ot.scrollIntoView)
      }(Vt ? function(tt) {
        let et = tt.startState,
          Vt = !0;
        for (let qt of et.facet(we)) {
          let et = qt(tt);
          if (!1 === et) {
            Vt = !1;
            break
          }
          Array.isArray(et) && (Vt = !0 === Vt ? et : Ke(Vt, et))
        }
        if (!0 !== Vt) {
          let Ot, qt;
          if (!1 === Vt) qt = tt.changes.invertedDesc, Ot = Zt.empty(et.doc.length);
          else {
            let et = tt.changes.filter(Vt);
            Ot = et.changes, qt = et.filtered.mapDesc(et.changes).invertedDesc
          }
          tt = ue.create(et, Ot, tt.selection && tt.selection.map(qt), Ce.mapEffects(tt.effects, qt), tt.annotations, tt.scrollIntoView)
        }
        let Ot = et.facet(ye);
        for (let qt = Ot.length - 1; qt >= 0; qt--) {
          let Vt = Ot[qt](tt);
          tt = Vt instanceof ue ? Vt : Array.isArray(Vt) && 1 == Vt.length && Vt[0] instanceof ue ? Vt[0] : We(et, ce(Vt), !1)
        }
        return tt
      }(qt) : qt)
    }
    ue.time = Me.define(), ue.userEvent = Me.define(), ue.addToHistory = Me.define(), ue.remote = Me.define();
    const Se = [];

    function ce(tt) {
      return null == tt ? Se : Array.isArray(tt) ? tt : [tt]
    }
    var Re = function(tt) {
      return tt[tt.Word = 0] = "Word", tt[tt.Space = 1] = "Space", tt[tt.Other = 2] = "Other", tt
    }(Re || (Re = {}));
    const Ie = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
    let Pe;
    try {
      Pe = new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u")
    } catch (OV) {}

    function Ze(tt) {
      return et => {
        if (!/\S/.test(et)) return Re.Space;
        if (function(tt) {
            if (Pe) return Pe.test(tt);
            for (let et = 0; et < tt.length; et++) {
              let Vt = tt[et];
              if (/\w/.test(Vt) || Vt > "\x80" && (Vt.toUpperCase() != Vt.toLowerCase() || Ie.test(Vt))) return !0
            }
            return !1
          }(et)) return Re.Word;
        for (let Vt = 0; Vt < tt.length; Vt++)
          if (et.indexOf(tt[Vt]) > -1) return Re.Word;
        return Re.Other
      }
    }
    class Le {
      constructor(tt, et, Vt, Ot, qt, Dt) {
        this.config = tt, this.doc = et, this.selection = Vt, this.values = Ot, this.status = tt.statusTemplate.slice(), this.computeSlot = qt, Dt && (Dt._state = this);
        for (let mt = 0; mt < this.config.dynamicSlots.length; mt++) Xe(this, mt << 1);
        this.computeSlot = null
      }
      field(tt) {
        let et = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Vt = this.config.address[tt.id];
        if (null != Vt) return Xe(this, Vt), Qe(this, Vt);
        if (et) throw new RangeError("Field is not present in this state")
      }
      update() {
        for (var tt = arguments.length, et = new Array(tt), Vt = 0; Vt < tt; Vt++) et[Vt] = arguments[Vt];
        return We(this, et, !0)
      }
      applyTransaction(tt) {
        let et, Vt = this.config,
          {
            base: Ot,
            compartments: qt
          } = Vt;
        for (let mt of tt.effects) mt.is(de.reconfigure) ? (Vt && (qt = new Map, Vt.compartments.forEach(((tt, et) => qt.set(et, tt))), Vt = null), qt.set(mt.value.compartment, mt.value.extension)) : mt.is(Ce.reconfigure) ? (Vt = null, Ot = mt.value) : mt.is(Ce.appendConfig) && (Vt = null, Ot = ce(Ot).concat(mt.value));
        if (Vt) et = tt.startState.values.slice();
        else {
          Vt = He.resolve(Ot, qt, this), et = new Le(Vt, this.doc, this.selection, Vt.dynamicSlots.map((() => null)), ((tt, et) => et.reconfigure(tt, this)), null).values
        }
        let Dt = tt.startState.facet(Ee) ? tt.newSelection : tt.newSelection.asSingle();
        new Le(Vt, tt.newDoc, Dt, et, ((et, Vt) => Vt.update(et, tt)), tt)
      }
      replaceSelection(tt) {
        return "string" == typeof tt && (tt = this.toText(tt)), this.changeByRange((et => ({
          changes: {
            from: et.from,
            to: et.to,
            insert: tt
          },
          range: Ut.cursor(et.from + tt.length)
        })))
      }
      changeByRange(tt) {
        let et = this.selection,
          Vt = tt(et.nw[0]),
          Ot = this.changes(Vt.changes),
          qt = [Vt.range],
          Dt = ce(Vt.effects);
        for (let mt = 1; mt < et.nw.length; mt++) {
          let Vt = tt(et.nw[mt]),
            dt = this.changes(Vt.changes),
            jt = dt.map(Ot);
          for (let tt = 0; tt < mt; tt++) qt[tt] = qt[tt].map(jt);
          let Ht = Ot.mapDesc(dt, !0);
          qt.push(Vt.range.map(Ht)), Ot = Ot.compose(jt), Dt = Ce.mapEffects(Dt, jt).concat(Ce.mapEffects(ce(Vt.effects), Ht))
        }
        return {
          changes: Ot,
          selection: Ut.create(qt, et.mainIndex),
          effects: Dt
        }
      }
      changes() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return tt instanceof Zt ? tt : Zt.of(tt, this.doc.length, this.facet(Le.lineSeparator))
      }
      toText(tt) {
        return wt.of(tt.split(this.facet(Le.lineSeparator) || Rt))
      }
      sliceDoc() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.doc.length;
        return this.doc.sliceString(tt, et, this.lineBreak)
      }
      facet(tt) {
        let et = this.config.address[tt.id];
        return null == et ? tt.default : (Xe(this, et), Qe(this, et))
      }
      toJSON(tt) {
        let et = {
          doc: this.sliceDoc(),
          selection: this.selection.toJSON()
        };
        if (tt)
          for (let Vt in tt) {
            let Ot = tt[Vt];
            Ot instanceof nt && null != this.config.address[Ot.id] && (et[Vt] = Ot.spec.toJSON(this.field(tt[Vt]), this))
          }
        return et
      }
      static fromJSON(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          Vt = arguments.length > 2 ? arguments[2] : void 0;
        if (!tt || "string" != typeof tt.doc) throw new RangeError("Invalid JSON representation for EditorState");
        let Ot = [];
        if (Vt)
          for (let qt in Vt)
            if (Object.prototype.hasOwnProperty.call(tt, qt)) {
              let et = Vt[qt],
                Dt = tt[qt];
              Ot.push(et.init((tt => et.spec.fromJSON(Dt, tt))))
            } return Le.create({
          doc: tt.doc,
          selection: Ut.fromJSON(tt.selection),
          extensions: et.extensions ? Ot.concat([et.extensions]) : Ot
        })
      }
      static create() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          et = He.resolve(tt.extensions || [], new Map),
          Vt = tt.doc instanceof wt ? tt.doc : wt.of((tt.doc || "").split(et.staticFacet(Le.lineSeparator) || Rt)),
          Ot = tt.selection ? tt.selection instanceof Ut ? tt.selection : Ut.single(tt.selection.anchor, tt.selection.head) : Ut.single(0);
        return At(Ot, Vt.length), et.staticFacet(Ee) || (Ot = Ot.asSingle()), new Le(et, Vt, Ot, et.dynamicSlots.map((() => null)), ((tt, et) => et.create(tt)), null)
      }
      get tabSize() {
        return this.facet(Le.tabSize)
      }
      get lineBreak() {
        return this.facet(Le.lineSeparator) || "\n"
      }
      get readOnly() {
        return this.facet(ae)
      }
      phrase(tt) {
        for (var et = arguments.length, Vt = new Array(et > 1 ? et - 1 : 0), Ot = 1; Ot < et; Ot++) Vt[Ot - 1] = arguments[Ot];
        for (let qt of this.facet(Le.phrases))
          if (Object.prototype.hasOwnProperty.call(qt, tt)) {
            tt = qt[tt];
            break
          } return Vt.length && (tt = tt.replace(/\$(\$|\d*)/g, ((tt, et) => {
          if ("$" == et) return "$";
          let Ot = +(et || 1);
          return !Ot || Ot > Vt.length ? tt : Vt[Ot - 1]
        }))), tt
      }
      languageDataAt(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          Ot = [];
        for (let qt of this.facet(le))
          for (let Dt of qt(this, et, Vt)) Object.prototype.hasOwnProperty.call(Dt, tt) && Ot.push(Dt[tt]);
        return Ot
      }
      charCategorizer(tt) {
        let et = this.languageDataAt("wordChars", tt);
        return Ze(et.length ? et[0] : "")
      }
      wordAt(tt) {
        let {
          text: et,
          from: Vt,
          length: Ot
        } = this.doc.lineAt(tt), qt = this.charCategorizer(tt), Dt = tt - Vt, mt = tt - Vt;
        for (; Dt > 0;) {
          let tt = vt(et, Dt, !1);
          if (qt(et.slice(tt, Dt)) != Re.Word) break;
          Dt = tt
        }
        for (; mt < Ot;) {
          let tt = vt(et, mt);
          if (qt(et.slice(mt, tt)) != Re.Word) break;
          mt = tt
        }
        return Dt == mt ? null : Ut.range(Dt + Vt, mt + Vt)
      }
    }

    function Fe(tt, et) {
      let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        Ot = {};
      for (let qt of tt)
        for (let tt of Object.keys(qt)) {
          let et = qt[tt],
            Dt = Ot[tt];
          if (void 0 === Dt) Ot[tt] = et;
          else if (Dt === et || void 0 === et);
          else {
            if (!Object.hasOwnProperty.call(Vt, tt)) throw new Error("Config merge conflict for field " + tt);
            Ot[tt] = Vt[tt](Dt, et)
          }
        }
      for (let qt in et) void 0 === Ot[qt] && (Ot[qt] = et[qt]);
      return Ot
    }
    Le.allowMultipleSelections = Ee, Le.tabSize = Yt.define({
      combine: tt => tt.length ? tt[0] : 4
    }), Le.lineSeparator = fe, Le.readOnly = ae, Le.phrases = Yt.define({
      compare(tt, et) {
        let Vt = Object.keys(tt),
          Ot = Object.keys(et);
        return Vt.length == Ot.length && Vt.every((Vt => tt[Vt] == et[Vt]))
      }
    }), Le.languageData = le, Le.changeFilter = we, Le.transactionFilter = ye, Le.transactionExtender = Ne, de.reconfigure = Ce.define();
    class ke {
      eq(tt) {
        return this == tt
      }
      range(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tt;
        return ze.create(tt, et, this)
      }
    }

    function Ge(tt, et) {
      return tt == et || tt.constructor == et.constructor && tt.eq(et)
    }
    ke.prototype.startSide = ke.prototype.endSide = 0, ke.prototype.point = !1, ke.prototype.mapMode = It.TrackDel;
    class ze {
      constructor(tt, et, Vt) {
        this.from = tt, this.to = et, this.value = Vt
      }
      static create(tt, et, Vt) {
        return new ze(tt, et, Vt)
      }
    }

    function oe(tt, et) {
      return tt.from - et.from || tt.value.startSide - et.value.startSide
    }
    class re {
      constructor(tt, et, Vt, Ot) {
        this.from = tt, this.to = et, this.value = Vt, this.iOt = Ot
      }
      get length() {
        return this.to[this.to.length - 1]
      }
      findIndex(tt, et, Vt) {
        let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          qt = Vt ? this.to : this.from;
        for (let Dt = Ot, mt = qt.length;;) {
          if (Dt == mt) return Dt;
          let Ot = Dt + mt >> 1,
            dt = qt[Ot] - tt || (Vt ? this.value[Ot].endSide : this.value[Ot].startSide) - et;
          if (Ot == Dt) return dt >= 0 ? Dt : mt;
          dt >= 0 ? mt = Ot : Dt = Ot + 1
        }
      }
      between(tt, et, Vt, Ot) {
        for (let qt = this.findIndex(et, -1e9, !0), Dt = this.findIndex(Vt, 1e9, !1, qt); qt < Dt; qt++)
          if (!1 === Ot(this.from[qt] + tt, this.to[qt] + tt, this.value[qt])) return !1
      }
      map(tt, et) {
        let Vt = [],
          Ot = [],
          qt = [],
          Dt = -1,
          mt = -1;
        for (let dt = 0; dt < this.value.length; dt++) {
          let jt, Ht, Xt = this.value[dt],
            Qt = this.from[dt] + tt,
            lt = this.to[dt] + tt;
          if (Qt == lt) {
            let tt = et.mapPos(Qt, Xt.startSide, Xt.mapMode);
            if (null == tt) continue;
            if (jt = Ht = tt, Xt.startSide != Xt.endSide && (Ht = et.mapPos(Qt, Xt.endSide), Ht < jt)) continue
          } else if (jt = et.mapPos(Qt, Xt.startSide), Ht = et.mapPos(lt, Xt.endSide), jt > Ht || jt == Ht && Xt.startSide > 0 && Xt.endSide <= 0) continue;
          (Ht - jt || Xt.endSide - Xt.startSide) < 0 || (Dt < 0 && (Dt = jt), Xt.point && (mt = Math.max(mt, Ht - jt)), Vt.push(Xt), Ot.push(jt - Dt), qt.push(Ht - Dt))
        }
        return {
          mapped: Vt.length ? new re(Ot, qt, Vt, mt) : null,
          pos: Dt
        }
      }
    }
    class Ue {
      constructor(tt, et, Vt, Ot) {
        this.chunkPos = tt, this.chunk = et, this.nextLayer = Vt, this.iOt = Ot
      }
      static create(tt, et, Vt, Ot) {
        return new Ue(tt, et, Vt, Ot)
      }
      get length() {
        let tt = this.chunk.length - 1;
        return tt < 0 ? 0 : Math.max(this.chunkEnd(tt), this.nextLayer.length)
      }
      get size() {
        if (this.sE) return 0;
        let tt = this.nextLayer.size;
        for (let et of this.chunk) tt += et.value.length;
        return tt
      }
      chunkEnd(tt) {
        return this.chunkPos[tt] + this.chunk[tt].length
      }
      update(tt) {
        let {
          add: et = [],
          sort: Vt = !1,
          filterFrom: Ot = 0,
          filterTo: qt = this.length
        } = tt, Dt = tt.filter;
        if (0 == et.length && !Dt) return this;
        if (Vt && (et = et.slice().sort(oe)), this.sE) return et.length ? Ue.of(et) : this;
        let mt = new Ye(this, null, -1).goto(0),
          dt = 0,
          jt = [],
          Ht = new Ae;
        for (; mt.value || dt < et.length;)
          if (dt < et.length && (mt.from - et[dt].from || mt.startSide - et[dt].value.startSide) >= 0) {
            let tt = et[dt++];
            Ht.addInner(tt.from, tt.to, tt.value) || jt.push(tt)
          } else 1 == mt.rangeIndex && mt.chunkIndex < this.chunk.length && (dt == et.length || this.chunkEnd(mt.chunkIndex) < et[dt].from) && (!Dt || Ot > this.chunkEnd(mt.chunkIndex) || qt < this.chunkPos[mt.chunkIndex]) && Ht.addChunk(this.chunkPos[mt.chunkIndex], this.chunk[mt.chunkIndex]) ? mt.nextChunk() : ((!Dt || Ot > mt.to || qt < mt.from || Dt(mt.from, mt.to, mt.value)) && (Ht.addInner(mt.from, mt.to, mt.value) || jt.push(ze.create(mt.from, mt.to, mt.value))), mt.next());
        return Ht.finishInner(this.nextLayer.sE && !jt.length ? Ue.empty : this.nextLayer.update({
          add: jt,
          filter: Dt,
          filterFrom: Ot,
          filterTo: qt
        }))
      }
      map(tt) {
        if (tt.empty || this.sE) return this;
        let et = [],
          Vt = [],
          Ot = -1;
        for (let Dt = 0; Dt < this.chunk.length; Dt++) {
          let qt = this.chunkPos[Dt],
            mt = this.chunk[Dt],
            dt = tt.touchesRange(qt, qt + mt.length);
          if (!1 === dt) Ot = Math.max(Ot, mt.iOt), et.push(mt), Vt.push(tt.mapPos(qt));
          else if (!0 === dt) {
            let {
              mapped: Dt,
              pos: dt
            } = mt.map(qt, tt);
            Dt && (Ot = Math.max(Ot, Dt.iOt), et.push(Dt), Vt.push(dt))
          }
        }
        let qt = this.nextLayer.map(tt);
        return 0 == et.length ? qt : new Ue(Vt, et, qt || Ue.empty, Ot)
      }
      between(tt, et, Vt) {
        if (!this.sE) {
          for (let Ot = 0; Ot < this.chunk.length; Ot++) {
            let qt = this.chunkPos[Ot],
              Dt = this.chunk[Ot];
            if (et >= qt && tt <= qt + Dt.length && !1 === Dt.between(qt, tt - qt, et - qt, Vt)) return
          }
          this.nextLayer.between(tt, et, Vt)
        }
      }
      iter() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return Be.from([this]).goto(tt)
      }
      get sE() {
        return this.nextLayer == this
      }
      static iter(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Be.from(tt).goto(et)
      }
      static compare(tt, et, Vt, Ot) {
        let qt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1,
          Dt = tt.filter((tt => tt.iOt > 0 || !tt.sE && tt.iOt >= qt)),
          mt = et.filter((tt => tt.iOt > 0 || !tt.sE && tt.iOt >= qt)),
          dt = ie(Dt, mt, Vt),
          jt = new xe(Dt, dt, qt),
          Ht = new xe(mt, dt, qt);
        Vt.iterGaps(((tt, et, Vt) => Te(jt, tt, Ht, et, Vt, Ot))), Vt.empty && 0 == Vt.length && Te(jt, 0, Ht, 0, 0, Ot)
      }
      static eq(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Ot = arguments.length > 3 ? arguments[3] : void 0;
        null == Ot && (Ot = 999999999);
        let qt = tt.filter((tt => !tt.sE && et.indexOf(tt) < 0)),
          Dt = et.filter((et => !et.sE && tt.indexOf(et) < 0));
        if (qt.length != Dt.length) return !1;
        if (!qt.length) return !0;
        let mt = ie(qt, Dt),
          dt = new xe(qt, mt, 0).goto(Vt),
          jt = new xe(Dt, mt, 0).goto(Vt);
        for (;;) {
          if (dt.to != jt.to || !ge(dt.active, jt.active) || dt.point && (!jt.point || !Ge(dt.point, jt.point))) return !1;
          if (dt.to > Ot) return !0;
          dt.next(), jt.next()
        }
      }
      static spans(tt, et, Vt, Ot) {
        let qt = new xe(tt, null, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1).goto(et),
          Dt = et,
          mt = qt.openStart;
        for (;;) {
          let tt = Math.min(qt.to, Vt);
          if (qt.point) {
            let Vt = qt.activeForPoint(qt.to),
              dt = qt.pointFrom < et ? Vt.length + 1 : qt.point.startSide < 0 ? Vt.length : Math.min(Vt.length, mt);
            Ot.point(Dt, tt, qt.point, Vt, dt, qt.pointRank), mt = Math.min(qt.openEnd(tt), Vt.length)
          } else tt > Dt && (Ot.span(Dt, tt, qt.active, mt), mt = qt.openEnd(tt));
          if (qt.to > Vt) return mt + (qt.point && qt.to > Vt ? 1 : 0);
          Dt = qt.to, qt.next()
        }
      }
      static of (tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Vt = new Ae;
        for (let Ot of tt instanceof ze ? [tt] : et ? function(tt) {
            if (tt.length > 1)
              for (let et = tt[0], Vt = 1; Vt < tt.length; Vt++) {
                let Ot = tt[Vt];
                if (oe(et, Ot) > 0) return tt.slice().sort(oe);
                et = Ot
              }
            return tt
          }(tt) : tt) Vt.add(Ot.from, Ot.to, Ot.value);
        return Vt.finish()
      }
      static join(tt) {
        if (!tt.length) return Ue.empty;
        let et = tt[tt.length - 1];
        for (let Vt = tt.length - 2; Vt >= 0; Vt--)
          for (let Ot = tt[Vt]; Ot != Ue.empty; Ot = Ot.nextLayer) et = new Ue(Ot.chunkPos, Ot.chunk, et, Math.max(Ot.iOt, et.iOt));
        return et
      }
    }
    Ue.empty = new Ue([], [], null, -1), Ue.empty.nextLayer = Ue.empty;
    class Ae {
      finishChunk(tt) {
        this.chunks.push(new re(this.from, this.to, this.value, this.iOt)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.iOt), this.iOt = -1, tt && (this.from = [], this.to = [], this.value = [])
      }
      constructor() {
        this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.iOt = -1, this.setMaxPoint = -1, this.nextLayer = null
      }
      add(tt, et, Vt) {
        this.addInner(tt, et, Vt) || (this.nextLayer || (this.nextLayer = new Ae)).add(tt, et, Vt)
      }
      addInner(tt, et, Vt) {
        let Ot = tt - this.lastTo || Vt.startSide - this.last.endSide;
        if (Ot <= 0 && (tt - this.lastFrom || Vt.startSide - this.last.startSide) < 0) throw new Error("Ranges must be added sorted by `from` position and `startSide`");
        return !(Ot < 0) && (250 == this.from.length && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = tt), this.from.push(tt - this.chunkStart), this.to.push(et - this.chunkStart), this.last = Vt, this.lastFrom = tt, this.lastTo = et, this.value.push(Vt), Vt.point && (this.iOt = Math.max(this.iOt, et - tt)), !0)
      }
      addChunk(tt, et) {
        if ((tt - this.lastTo || et.value[0].startSide - this.last.endSide) < 0) return !1;
        this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, et.iOt), this.chunks.push(et), this.chunkPos.push(tt);
        let Vt = et.value.length - 1;
        return this.last = et.value[Vt], this.lastFrom = et.from[Vt] + tt, this.lastTo = et.to[Vt] + tt, !0
      }
      finish() {
        return this.finishInner(Ue.empty)
      }
      finishInner(tt) {
        if (this.from.length && this.finishChunk(!1), 0 == this.chunks.length) return tt;
        let et = Ue.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(tt) : tt, this.setMaxPoint);
        return this.from = null, et
      }
    }

    function ie(tt, et, Vt) {
      let Ot = new Map;
      for (let Dt of tt)
        for (let tt = 0; tt < Dt.chunk.length; tt++) Dt.chunk[tt].iOt <= 0 && Ot.set(Dt.chunk[tt], Dt.chunkPos[tt]);
      let qt = new Set;
      for (let Dt of et)
        for (let tt = 0; tt < Dt.chunk.length; tt++) {
          let et = Ot.get(Dt.chunk[tt]);
          null == et || (Vt ? Vt.mapPos(et) : et) != Dt.chunkPos[tt] || (null === Vt || void 0 === Vt ? void 0 : Vt.touchesRange(et, et + Dt.chunk[tt].length)) || qt.add(Dt.chunk[tt])
        }
      return qt
    }
    class Ye {
      constructor(tt, et, Vt) {
        let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.layer = tt, this.skip = et, this.YOt = Vt, this.rank = Ot
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      get endSide() {
        return this.value ? this.value.endSide : 0
      }
      goto(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(tt, et, !1), this
      }
      gotoInner(tt, et, Vt) {
        for (; this.chunkIndex < this.layer.chunk.length;) {
          let et = this.layer.chunk[this.chunkIndex];
          if (!(this.skip && this.skip.has(et) || this.layer.chunkEnd(this.chunkIndex) < tt || et.iOt < this.YOt)) break;
          this.chunkIndex++, Vt = !1
        }
        if (this.chunkIndex < this.layer.chunk.length) {
          let Ot = this.layer.chunk[this.chunkIndex].findIndex(tt - this.layer.chunkPos[this.chunkIndex], et, !0);
          (!Vt || this.rangeIndex < Ot) && this.setRangeIndex(Ot)
        }
        this.next()
      }
      forward(tt, et) {
        (this.to - tt || this.endSide - et) < 0 && this.gotoInner(tt, et, !0)
      }
      next() {
        for (;;) {
          if (this.chunkIndex == this.layer.chunk.length) {
            this.from = this.to = 1e9, this.value = null;
            break
          } {
            let tt = this.layer.chunkPos[this.chunkIndex],
              et = this.layer.chunk[this.chunkIndex],
              Vt = tt + et.from[this.rangeIndex];
            if (this.from = Vt, this.to = tt + et.to[this.rangeIndex], this.value = et.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.YOt < 0 || this.value.point && this.to - this.from >= this.YOt) break
          }
        }
      }
      setRangeIndex(tt) {
        if (tt == this.layer.chunk[this.chunkIndex].value.length) {
          if (this.chunkIndex++, this.skip)
            for (; this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]);) this.chunkIndex++;
          this.rangeIndex = 0
        } else this.rangeIndex = tt
      }
      nextChunk() {
        this.chunkIndex++, this.rangeIndex = 0, this.next()
      }
      compare(tt) {
        return this.from - tt.from || this.startSide - tt.startSide || this.rank - tt.rank || this.to - tt.to || this.endSide - tt.endSide
      }
    }
    class Be {
      constructor(tt) {
        this.heap = tt
      }
      static from(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          Ot = [];
        for (let qt = 0; qt < tt.length; qt++)
          for (let Dt = tt[qt]; !Dt.sE; Dt = Dt.nextLayer) Dt.iOt >= Vt && Ot.push(new Ye(Dt, et, Vt, qt));
        return 1 == Ot.length ? Ot[0] : new Be(Ot)
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      goto(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        for (let Vt of this.heap) Vt.goto(tt, et);
        for (let Vt = this.heap.length >> 1; Vt >= 0; Vt--) pe(this.heap, Vt);
        return this.next(), this
      }
      forward(tt, et) {
        for (let Vt of this.heap) Vt.forward(tt, et);
        for (let Vt = this.heap.length >> 1; Vt >= 0; Vt--) pe(this.heap, Vt);
        (this.to - tt || this.value.endSide - et) < 0 && this.next()
      }
      next() {
        if (0 == this.heap.length) this.from = this.to = 1e9, this.value = null, this.rank = -1;
        else {
          let tt = this.heap[0];
          this.from = tt.from, this.to = tt.to, this.value = tt.value, this.rank = tt.rank, tt.value && tt.next(), pe(this.heap, 0)
        }
      }
    }

    function pe(tt, et) {
      for (let Vt = tt[et];;) {
        let Ot = 1 + (et << 1);
        if (Ot >= tt.length) break;
        let qt = tt[Ot];
        if (Ot + 1 < tt.length && qt.compare(tt[Ot + 1]) >= 0 && (qt = tt[Ot + 1], Ot++), Vt.compare(qt) < 0) break;
        tt[Ot] = Vt, tt[et] = qt, et = Ot
      }
    }
    class xe {
      constructor(tt, et, Vt) {
        this.YOt = Vt, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = Be.from(tt, et, Vt)
      }
      goto(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.cursor.goto(tt, et), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = tt, this.endSide = et, this.openStart = -1, this.next(), this
      }
      forward(tt, et) {
        for (; this.minActive > -1 && (this.activeTo[this.minActive] - tt || this.active[this.minActive].endSide - et) < 0;) this.removeActive(this.minActive);
        this.cursor.forward(tt, et)
      }
      removeActive(tt) {
        se(this.active, tt), se(this.activeTo, tt), se(this.activeRank, tt), this.minActive = tV(this.active, this.activeTo)
      }
      addActive(tt) {
        let et = 0,
          {
            value: Vt,
            to: Ot,
            rank: qt
          } = this.cursor;
        for (; et < this.activeRank.length && (qt - this.activeRank[et] || Ot - this.activeTo[et]) > 0;) et++;
        ne(this.active, et, Vt), ne(this.activeTo, et, Ot), ne(this.activeRank, et, qt), tt && ne(tt, et, this.cursor.from), this.minActive = tV(this.active, this.activeTo)
      }
      next() {
        let tt = this.to,
          et = this.point;
        this.point = null;
        let Vt = this.openStart < 0 ? [] : null;
        for (;;) {
          let Ot = this.minActive;
          if (Ot > -1 && (this.activeTo[Ot] - this.cursor.from || this.active[Ot].endSide - this.cursor.startSide) < 0) {
            if (this.activeTo[Ot] > tt) {
              this.to = this.activeTo[Ot], this.endSide = this.active[Ot].endSide;
              break
            }
            this.removeActive(Ot), Vt && se(Vt, Ot)
          } else {
            if (!this.cursor.value) {
              this.to = this.endSide = 1e9;
              break
            }
            if (this.cursor.from > tt) {
              this.to = this.cursor.from, this.endSide = this.cursor.startSide;
              break
            } {
              let tt = this.cursor.value;
              if (tt.point) {
                if (!(et && this.cursor.to == this.to && this.cursor.from < this.cursor.to)) {
                  this.point = tt, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = tt.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
                  break
                }
                this.cursor.next()
              } else this.addActive(Vt), this.cursor.next()
            }
          }
        }
        if (Vt) {
          this.openStart = 0;
          for (let et = Vt.length - 1; et >= 0 && Vt[et] < tt; et--) this.openStart++
        }
      }
      activeForPoint(tt) {
        if (!this.active.length) return this.active;
        let et = [];
        for (let Vt = this.active.length - 1; Vt >= 0 && !(this.activeRank[Vt] < this.pointRank); Vt--)(this.activeTo[Vt] > tt || this.activeTo[Vt] == tt && this.active[Vt].endSide >= this.point.endSide) && et.push(this.active[Vt]);
        return et.reverse()
      }
      openEnd(tt) {
        let et = 0;
        for (let Vt = this.activeTo.length - 1; Vt >= 0 && this.activeTo[Vt] > tt; Vt--) et++;
        return et
      }
    }

    function Te(tt, et, Vt, Ot, qt, Dt) {
      tt.goto(et), Vt.goto(Ot);
      let mt = Ot + qt,
        dt = Ot,
        jt = Ot - et,
        Ht = !!Dt.boundChange;
      for (let Xt = !1;;) {
        let et = tt.to + jt - Vt.to,
          Ot = et || tt.endSide - Vt.endSide,
          qt = Ot < 0 ? tt.to + jt : Vt.to,
          Qt = Math.min(qt, mt);
        if (tt.point || Vt.point ? (tt.point && Vt.point && Ge(tt.point, Vt.point) && ge(tt.activeForPoint(tt.to), Vt.activeForPoint(Vt.to)) || Dt.comparePoint(dt, Qt, tt.point, Vt.point), Xt = !1) : (Xt && Dt.boundChange(dt), Qt > dt && !ge(tt.active, Vt.active) && Dt.compareRange(dt, Qt, tt.active, Vt.active), Ht && Qt < mt && (et || tt.openEnd(qt) != Vt.openEnd(qt)) && (Xt = !0)), qt > mt) break;
        dt = qt, Ot <= 0 && tt.next(), Ot >= 0 && Vt.next()
      }
    }

    function ge(tt, et) {
      if (tt.length != et.length) return !1;
      for (let Vt = 0; Vt < tt.length; Vt++)
        if (tt[Vt] != et[Vt] && !Ge(tt[Vt], et[Vt])) return !1;
      return !0
    }

    function se(tt, et) {
      for (let Vt = et, Ot = tt.length - 1; Vt < Ot; Vt++) tt[Vt] = tt[Vt + 1];
      tt.pop()
    }

    function ne(tt, et, Vt) {
      for (let Ot = tt.length - 1; Ot >= et; Ot--) tt[Ot + 1] = tt[Ot];
      tt[et] = Vt
    }

    function tV(tt, et) {
      let Vt = -1,
        Ot = 1e9;
      for (let qt = 0; qt < et.length; qt++)(et[qt] - Ot || tt[qt].endSide - tt[Vt].endSide) < 0 && (Vt = qt, Ot = et[qt]);
      return Vt
    }

    function eV(tt, et) {
      let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : tt.length,
        Ot = 0;
      for (let qt = 0; qt < Vt && qt < tt.length;) 9 == tt.charCodeAt(qt) ? (Ot += et - Ot % et, qt++) : (Ot++, qt = vt(tt, qt));
      return Ot
    }

    function VV(tt, et, Vt, Ot) {
      for (let qt = 0, Dt = 0;;) {
        if (Dt >= et) return qt;
        if (qt == tt.length) break;
        Dt += 9 == tt.charCodeAt(qt) ? Vt - Dt % Vt : 1, qt = vt(tt, qt)
      }
      return !0 === Ot ? -1 : tt.length
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);