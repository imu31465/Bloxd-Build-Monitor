export const id = 285;
export const ids = [285];
export const modules = {
  40415: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Za,
      h: () => Fb,
      ChangeSet: () => hb,
      i: () => Ia,
      m: () => lb,
      p: () => Ga,
      q: () => sb,
      t: () => db,
      u: () => Ma,
      y: () => la,
      x: () => ta,
      z: () => qa,
      B: () => xa,
      E: () => nb,
      G: () => Rb,
      I: () => ia,
      J: () => Nb,
      K: () => Hb,
      O: () => Qa,
      R: () => bU,
      T: () => pb,
      X: () => aU,
      $: () => Wb
    });
    let Ab = [],
      Mb = [];

    function Tb(bb) {
      if (bb < 768) return !1;
      for (let ab = 0, Ub = Ab.length;;) {
        let Tb = ab + Ub >> 1;
        if (bb < Ab[Tb]) Ub = Tb;
        else {
          if (!(bb >= Mb[Tb])) return !0;
          ab = Tb + 1
        }
        if (ab == Ub) return !1
      }
    }

    function Eb(bb) {
      return bb >= 127462 && bb <= 127487
    }(() => {
      let bb = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((bb => bb ? parseInt(bb, 36) : 1));
      for (let ab = 0, Ub = 0; ab < bb.length; ab++)(ab % 2 ? Mb : Ab).push(Ub += bb[ab])
    })();
    const Yb = 8205;

    function Bb(bb, ab) {
      return (!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2] ? eb : vb)(bb, ab, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function eb(bb, ab, Ub) {
      if (ab == bb.length) return ab;
      ab && Pb(bb.charCodeAt(ab)) && Xb(bb.charCodeAt(ab - 1)) && ab--;
      let Ab = Lb(bb, ab);
      for (ab += jb(Ab); ab < bb.length;) {
        let Mb = Lb(bb, ab);
        if (Ab == Yb || Mb == Yb || Ub && Tb(Mb)) ab += jb(Mb), Ab = Mb;
        else {
          if (!Eb(Mb)) break;
          {
            let Ub = 0,
              Ab = ab - 2;
            for (; Ab >= 0 && Eb(Lb(bb, Ab));) Ub++, Ab -= 2;
            if (Ub % 2 == 0) break;
            ab += 2
          }
        }
      }
      return ab
    }

    function vb(bb, ab, Ub) {
      for (; ab > 0;) {
        let Ab = eb(bb, ab - 2, Ub);
        if (Ab < ab) return Ab;
        ab--
      }
      return 0
    }

    function Lb(bb, ab) {
      let Ub = bb.charCodeAt(ab);
      if (!Xb(Ub) || ab + 1 == bb.length) return Ub;
      let Ab = bb.charCodeAt(ab + 1);
      return Pb(Ab) ? Ab - 56320 + (Ub - 55296 << 10) + 65536 : Ub
    }

    function Pb(bb) {
      return bb >= 56320 && bb < 57344
    }

    function Xb(bb) {
      return bb >= 55296 && bb < 56320
    }

    function jb(bb) {
      return bb < 65536 ? 1 : 2
    }
    class Rb {
      lineAt(bb) {
        if (bb < 0 || bb > this.length) throw new RangeError(`Invalid position ${bb} in document of length ${this.length}`);
        return this.lineInner(bb, !1, 1, 0)
      }
      line(bb) {
        if (bb < 1 || bb > this.lines) throw new RangeError(`Invalid line number ${bb} in ${this.lines}-line document`);
        return this.lineInner(bb, !0, 1, 0)
      }
      replace(bb, ab, Ub) {
        [bb, ab] = mb(this, bb, ab);
        let Ab = [];
        return this.decompose(0, bb, Ab, 2), Ub.length && Ub.decompose(0, Ub.length, Ab, 3), this.decompose(ab, this.length, Ab, 1), yb.from(Ab, this.length - (ab - bb) + Ub.length)
      }
      append(bb) {
        return this.replace(this.length, this.length, bb)
      }
      slice(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        [bb, ab] = mb(this, bb, ab);
        let Ub = [];
        return this.decompose(bb, ab, Ub, 0), yb.from(Ub, ab - bb)
      }
      eq(bb) {
        if (bb == this) return !0;
        if (bb.length != this.length || bb.lines != this.lines) return !1;
        let ab = this.scanIdentical(bb, 1),
          Ub = this.length - this.scanIdentical(bb, -1),
          Ab = new zb(this),
          Mb = new zb(bb);
        for (let Tb = ab, Eb = ab;;) {
          if (Ab.next(Tb), Mb.next(Tb), Tb = 0, Ab.lineBreak != Mb.lineBreak || Ab.done != Mb.done || Ab.value != Mb.value) return !1;
          if (Eb += Ab.value.length, Ab.done || Eb >= Ub) return !0
        }
      }
      iter() {
        return new zb(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1)
      }
      iterRange(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        return new xb(this, bb, ab)
      }
      iterLines(bb, ab) {
        let Ub;
        if (null == bb) Ub = this.iter();
        else {
          null == ab && (ab = this.lines + 1);
          let Ab = this.line(bb).from;
          Ub = this.iterRange(Ab, Math.max(Ab, ab == this.lines + 1 ? this.length : ab <= 1 ? 0 : this.line(ab - 1).to))
        }
        return new ib(Ub)
      }
      toString() {
        return this.sliceString(0)
      }
      toJSON() {
        let bb = [];
        return this.flatten(bb), bb
      }
      constructor() {}
      static of (bb) {
        if (0 == bb.length) throw new RangeError("A document must have at least one line");
        return 1 != bb.length || bb[0] ? bb.length <= 32 ? new kb(bb) : yb.from(kb.split(bb, [])) : Rb.empty
      }
    }
    class kb extends Rb {
      constructor(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(bb) {
          let ab = -1;
          for (let Ub of bb) ab += Ub.length + 1;
          return ab
        }(bb);
        super(), this.text = bb, this.length = ab
      }
      get lines() {
        return this.text.length
      }
      get children() {
        return null
      }
      lineInner(bb, ab, Ub, Ab) {
        for (let Mb = 0;; Mb++) {
          let Tb = this.text[Mb],
            Eb = Ab + Tb.length;
          if ((ab ? Ub : Eb) >= bb) return new fb(Ab, Eb, Ub, Tb);
          Ab = Eb + 1, Ub++
        }
      }
      decompose(bb, ab, Ub, Ab) {
        let Mb = bb <= 0 && ab >= this.length ? this : new kb(Db(this.text, bb, ab), Math.min(ab, this.length) - Math.max(0, bb));
        if (1 & Ab) {
          let bb = Ub.pop(),
            ab = Zb(Mb.text, bb.text.slice(), 0, Mb.length);
          if (ab.length <= 32) Ub.push(new kb(ab, bb.length + Mb.length));
          else {
            let bb = ab.length >> 1;
            Ub.push(new kb(ab.slice(0, bb)), new kb(ab.slice(bb)))
          }
        } else Ub.push(Mb)
      }
      replace(bb, ab, Ub) {
        if (!(Ub instanceof kb)) return super.replace(bb, ab, Ub);
        [bb, ab] = mb(this, bb, ab);
        let Ab = Zb(this.text, Zb(Ub.text, Db(this.text, 0, bb)), ab),
          Mb = this.length + Ub.length - (ab - bb);
        return Ab.length <= 32 ? new kb(Ab, Mb) : yb.from(kb.split(Ab, []), Mb)
      }
      sliceString(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [bb, ab] = mb(this, bb, ab);
        let Ab = "";
        for (let Mb = 0, Tb = 0; Mb <= ab && Tb < this.text.length; Tb++) {
          let Eb = this.text[Tb],
            Yb = Mb + Eb.length;
          Mb > bb && Tb && (Ab += Ub), bb < Yb && ab > Mb && (Ab += Eb.slice(Math.max(0, bb - Mb), ab - Mb)), Mb = Yb + 1
        }
        return Ab
      }
      flatten(bb) {
        for (let ab of this.text) bb.push(ab)
      }
      scanIdentical() {
        return 0
      }
      static split(bb, ab) {
        let Ub = [],
          Ab = -1;
        for (let Mb of bb) Ub.push(Mb), Ab += Mb.length + 1, 32 == Ub.length && (ab.push(new kb(Ub, Ab)), Ub = [], Ab = -1);
        return Ab > -1 && ab.push(new kb(Ub, Ab)), ab
      }
    }
    class yb extends Rb {
      constructor(bb, ab) {
        super(), this.children = bb, this.length = ab, this.lines = 0;
        for (let Ub of bb) this.lines += Ub.lines
      }
      lineInner(bb, ab, Ub, Ab) {
        for (let Mb = 0;; Mb++) {
          let Tb = this.children[Mb],
            Eb = Ab + Tb.length,
            Yb = Ub + Tb.lines - 1;
          if ((ab ? Yb : Eb) >= bb) return Tb.lineInner(bb, ab, Ub, Ab);
          Ab = Eb + 1, Ub = Yb + 1
        }
      }
      decompose(bb, ab, Ub, Ab) {
        for (let Mb = 0, Tb = 0; Tb <= ab && Mb < this.children.length; Mb++) {
          let Eb = this.children[Mb],
            Yb = Tb + Eb.length;
          if (bb <= Yb && ab >= Tb) {
            let Mb = Ab & ((Tb <= bb ? 1 : 0) | (Yb >= ab ? 2 : 0));
            Tb >= bb && Yb <= ab && !Mb ? Ub.push(Eb) : Eb.decompose(bb - Tb, ab - Tb, Ub, Mb)
          }
          Tb = Yb + 1
        }
      }
      replace(bb, ab, Ub) {
        if ([bb, ab] = mb(this, bb, ab), Ub.lines < this.lines)
          for (let Ab = 0, Mb = 0; Ab < this.children.length; Ab++) {
            let Tb = this.children[Ab],
              Eb = Mb + Tb.length;
            if (bb >= Mb && ab <= Eb) {
              let Yb = Tb.replace(bb - Mb, ab - Mb, Ub),
                Bb = this.lines - Tb.lines + Yb.lines;
              if (Yb.lines < Bb >> 4 && Yb.lines > Bb >> 6) {
                let Mb = this.children.slice();
                return Mb[Ab] = Yb, new yb(Mb, this.length - (ab - bb) + Ub.length)
              }
              return super.replace(Mb, Eb, Yb)
            }
            Mb = Eb + 1
          }
        return super.replace(bb, ab, Ub)
      }
      sliceString(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [bb, ab] = mb(this, bb, ab);
        let Ab = "";
        for (let Mb = 0, Tb = 0; Mb < this.children.length && Tb <= ab; Mb++) {
          let Eb = this.children[Mb],
            Yb = Tb + Eb.length;
          Tb > bb && Mb && (Ab += Ub), bb < Yb && ab > Tb && (Ab += Eb.sliceString(bb - Tb, ab - Tb, Ub)), Tb = Yb + 1
        }
        return Ab
      }
      flatten(bb) {
        for (let ab of this.children) ab.flatten(bb)
      }
      scanIdentical(bb, ab) {
        if (!(bb instanceof yb)) return 0;
        let Ub = 0,
          [Ab, Mb, Tb, Eb] = ab > 0 ? [0, 0, this.children.length, bb.children.length] : [this.children.length - 1, bb.children.length - 1, -1, -1];
        for (;; Ab += ab, Mb += ab) {
          if (Ab == Tb || Mb == Eb) return Ub;
          let Yb = this.children[Ab],
            Bb = bb.children[Mb];
          if (Yb != Bb) return Ub + Yb.scanIdentical(Bb, ab);
          Ub += Yb.length + 1
        }
      }
      static from(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bb.reduce(((bb, ab) => bb + ab.length + 1), -1),
          Ub = 0;
        for (let Pb of bb) Ub += Pb.lines;
        if (Ub < 32) {
          let Ub = [];
          for (let ab of bb) ab.flatten(Ub);
          return new kb(Ub, ab)
        }
        let Ab = Math.max(32, Ub >> 5),
          Mb = Ab << 1,
          Tb = Ab >> 1,
          Eb = [],
          Yb = 0,
          Bb = -1,
          eb = [];

        function vb(bb) {
          let ab;
          if (bb.lines > Mb && bb instanceof yb)
            for (let Ub of bb.children) vb(Ub);
          else bb.lines > Tb && (Yb > Tb || !Yb) ? (Lb(), Eb.push(bb)) : bb instanceof kb && Yb && (ab = eb[eb.length - 1]) instanceof kb && bb.lines + ab.lines <= 32 ? (Yb += bb.lines, Bb += bb.length + 1, eb[eb.length - 1] = new kb(ab.text.concat(bb.text), ab.length + 1 + bb.length)) : (Yb + bb.lines > Ab && Lb(), Yb += bb.lines, Bb += bb.length + 1, eb.push(bb))
        }

        function Lb() {
          0 != Yb && (Eb.push(1 == eb.length ? eb[0] : yb.from(eb, Bb)), Bb = -1, Yb = eb.length = 0)
        }
        for (let Pb of bb) vb(Pb);
        return Lb(), 1 == Eb.length ? Eb[0] : new yb(Eb, ab)
      }
    }

    function Zb(bb, ab) {
      let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e9;
      for (let Mb = 0, Tb = 0, Eb = !0; Tb < bb.length && Mb <= Ab; Tb++) {
        let Yb = bb[Tb],
          Bb = Mb + Yb.length;
        Bb >= Ub && (Bb > Ab && (Yb = Yb.slice(0, Ab - Mb)), Mb < Ub && (Yb = Yb.slice(Ub - Mb)), Eb ? (ab[ab.length - 1] += Yb, Eb = !1) : ab.push(Yb)), Mb = Bb + 1
      }
      return ab
    }

    function Db(bb, ab, Ub) {
      return Zb(bb, [""], ab, Ub)
    }
    Rb.empty = new kb([""], 0);
    class zb {
      constructor(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.dir = ab, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [bb], this.offsets = [ab > 0 ? 1 : (bb instanceof kb ? bb.text.length : bb.children.length) << 1]
      }
      nextInner(bb, ab) {
        for (this.done = this.lineBreak = !1;;) {
          let Ub = this.nodes.length - 1,
            Ab = this.nodes[Ub],
            Mb = this.offsets[Ub],
            Tb = Mb >> 1,
            Eb = Ab instanceof kb ? Ab.text.length : Ab.children.length;
          if (Tb == (ab > 0 ? Eb : 0)) {
            if (0 == Ub) return this.done = !0, this.value = "", this;
            ab > 0 && this.offsets[Ub - 1]++, this.nodes.pop(), this.offsets.pop()
          } else if ((1 & Mb) == (ab > 0 ? 0 : 1)) {
            if (this.offsets[Ub] += ab, 0 == bb) return this.lineBreak = !0, this.value = "\n", this;
            bb--
          } else if (Ab instanceof kb) {
            let Mb = Ab.text[Tb + (ab < 0 ? -1 : 0)];
            if (this.offsets[Ub] += ab, Mb.length > Math.max(0, bb)) return this.value = 0 == bb ? Mb : ab > 0 ? Mb.slice(bb) : Mb.slice(0, Mb.length - bb), this;
            bb -= Mb.length
          } else {
            let Mb = Ab.children[Tb + (ab < 0 ? -1 : 0)];
            bb > Mb.length ? (bb -= Mb.length, this.offsets[Ub] += ab) : (ab < 0 && this.offsets[Ub]--, this.nodes.push(Mb), this.offsets.push(ab > 0 ? 1 : (Mb instanceof kb ? Mb.text.length : Mb.children.length) << 1))
          }
        }
      }
      next() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return bb < 0 && (this.nextInner(-bb, -this.dir), bb = this.value.length), this.nextInner(bb, this.dir)
      }
    }
    class xb {
      constructor(bb, ab, Ub) {
        this.value = "", this.done = !1, this.cursor = new zb(bb, ab > Ub ? -1 : 1), this.pos = ab > Ub ? bb.length : 0, this.from = Math.min(ab, Ub), this.to = Math.max(ab, Ub)
      }
      nextInner(bb, ab) {
        if (ab < 0 ? this.pos <= this.from : this.pos >= this.to) return this.value = "", this.done = !0, this;
        bb += Math.max(0, ab < 0 ? this.pos - this.to : this.from - this.pos);
        let Ub = ab < 0 ? this.pos - this.from : this.to - this.pos;
        bb > Ub && (bb = Ub), Ub -= bb;
        let {
          value: Ab
        } = this.cursor.next(bb);
        return this.pos += (Ab.length + bb) * ab, this.value = Ab.length <= Ub ? Ab : ab < 0 ? Ab.slice(Ab.length - Ub) : Ab.slice(0, Ub), this.done = !this.value, this
      }
      next() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return bb < 0 ? bb = Math.max(bb, this.from - this.pos) : bb > 0 && (bb = Math.min(bb, this.to - this.pos)), this.nextInner(bb, this.cursor.dir)
      }
      get lineBreak() {
        return this.cursor.lineBreak && "" != this.value
      }
    }
    class ib {
      constructor(bb) {
        this.inner = bb, this.afterBreak = !0, this.value = "", this.done = !1
      }
      next() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          {
            done: ab,
            lineBreak: Ub,
            value: Ab
          } = this.inner.next(bb);
        return ab && this.afterBreak ? (this.value = "", this.afterBreak = !1) : ab ? (this.done = !0, this.value = "") : Ub ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = Ab, this.afterBreak = !1), this
      }
      get lineBreak() {
        return !1
      }
    }
    "undefined" != typeof Symbol && (Rb.prototype[Symbol.iterator] = function() {
      return this.iter()
    }, zb.prototype[Symbol.iterator] = xb.prototype[Symbol.iterator] = ib.prototype[Symbol.iterator] = function() {
      return this
    });
    class fb {
      constructor(bb, ab, Ub, Ab) {
        this.from = bb, this.to = ab, this.number = Ub, this.text = Ab
      }
      get length() {
        return this.to - this.from
      }
    }

    function mb(bb, ab, Ub) {
      return [ab = Math.max(0, Math.min(bb.length, ab)), Math.max(ab, Math.min(bb.length, Ub))]
    }

    function pb(bb, ab) {
      return Bb(bb, ab, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function Nb(bb, ab) {
      let Ub = bb.charCodeAt(ab);
      if (!((Ab = Ub) >= 55296 && Ab < 56320) || ab + 1 == bb.length) return Ub;
      var Ab;
      let Mb = bb.charCodeAt(ab + 1);
      return function(bb) {
        return bb >= 56320 && bb < 57344
      }(Mb) ? Mb - 56320 + (Ub - 55296 << 10) + 65536 : Ub
    }

    function Wb(bb) {
      return bb <= 65535 ? String.fromCharCode(bb) : (bb -= 65536, String.fromCharCode(55296 + (bb >> 10), 56320 + (1023 & bb)))
    }

    function Hb(bb) {
      return bb < 65536 ? 1 : 2
    }
    const Ib = /\r\n?|\n/;
    var db = function(bb) {
      return bb[bb.Simple = 0] = "Simple", bb[bb.TrackDel = 1] = "TrackDel", bb[bb.TrackBefore = 2] = "TrackBefore", bb[bb.TrackAfter = 3] = "TrackAfter", bb
    }(db || (db = {}));
    class Fb {
      constructor(bb) {
        this.sections = bb
      }
      get length() {
        let bb = 0;
        for (let ab = 0; ab < this.sections.length; ab += 2) bb += this.sections[ab];
        return bb
      }
      get newLength() {
        let bb = 0;
        for (let ab = 0; ab < this.sections.length; ab += 2) {
          let Ub = this.sections[ab + 1];
          bb += Ub < 0 ? this.sections[ab] : Ub
        }
        return bb
      }
      get empty() {
        return 0 == this.sections.length || 2 == this.sections.length && this.sections[1] < 0
      }
      iterGaps(bb) {
        for (let ab = 0, Ub = 0, Ab = 0; ab < this.sections.length;) {
          let Mb = this.sections[ab++],
            Tb = this.sections[ab++];
          Tb < 0 ? (bb(Ub, Ab, Mb), Ab += Mb) : Ab += Tb, Ub += Mb
        }
      }
      iterChangedRanges(bb) {
        qb(this, bb, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get invertedDesc() {
        let bb = [];
        for (let ab = 0; ab < this.sections.length;) {
          let Ub = this.sections[ab++],
            Ab = this.sections[ab++];
          Ab < 0 ? bb.push(Ub, Ab) : bb.push(Ab, Ub)
        }
        return new Fb(bb)
      }
      composeDesc(bb) {
        return this.empty ? bb : bb.empty ? this : rb(this, bb)
      }
      mapDesc(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return bb.empty ? this : ub(this, bb, ab)
      }
      mapPos(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : db.Simple,
          Ab = 0,
          Mb = 0;
        for (let Tb = 0; Tb < this.sections.length;) {
          let Eb = this.sections[Tb++],
            Yb = this.sections[Tb++],
            Bb = Ab + Eb;
          if (Yb < 0) {
            if (Bb > bb) return Mb + (bb - Ab);
            Mb += Eb
          } else {
            if (Ub != db.Simple && Bb >= bb && (Ub == db.TrackDel && Ab < bb && Bb > bb || Ub == db.TrackBefore && Ab < bb || Ub == db.TrackAfter && Bb > bb)) return null;
            if (Bb > bb || Bb == bb && ab < 0 && !Eb) return bb == Ab || ab < 0 ? Mb : Mb + Yb;
            Mb += Yb
          }
          Ab = Bb
        }
        if (bb > Ab) throw new RangeError(`Position ${bb} is out of range for changeset of length ${Ab}`);
        return Mb
      }
      touchesRange(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bb;
        for (let Ub = 0, Ab = 0; Ub < this.sections.length && Ab <= ab;) {
          let Mb = Ab + this.sections[Ub++];
          if (this.sections[Ub++] >= 0 && Ab <= ab && Mb >= bb) return !(Ab < bb && Mb > ab) || "cover";
          Ab = Mb
        }
        return !1
      }
      toString() {
        let bb = "";
        for (let ab = 0; ab < this.sections.length;) {
          let Ub = this.sections[ab++],
            Ab = this.sections[ab++];
          bb += (bb ? " " : "") + Ub + (Ab >= 0 ? ":" + Ab : "")
        }
        return bb
      }
      toJSON() {
        return this.sections
      }
      static fromJSON(bb) {
        if (!Array.isArray(bb) || bb.length % 2 || bb.some((bb => "number" != typeof bb))) throw new RangeError("Invalid JSON representation of ChangeDesc");
        return new Fb(bb)
      }
      static create(bb) {
        return new Fb(bb)
      }
    }
    class hb extends Fb {
      constructor(bb, ab) {
        super(bb), this.inserted = ab
      }
      apply(bb) {
        if (this.length != bb.length) throw new RangeError("Applying change set to a document with the wrong length");
        return qb(this, ((ab, Ub, Ab, Mb, Tb) => bb = bb.replace(Ab, Ab + (Ub - ab), Tb)), !1), bb
      }
      mapDesc(bb) {
        return ub(this, bb, arguments.length > 1 && void 0 !== arguments[1] && arguments[1], !0)
      }
      invert(bb) {
        let ab = this.sections.slice(),
          Ub = [];
        for (let Ab = 0, Mb = 0; Ab < ab.length; Ab += 2) {
          let Tb = ab[Ab],
            Eb = ab[Ab + 1];
          if (Eb >= 0) {
            ab[Ab] = Eb, ab[Ab + 1] = Tb;
            let Yb = Ab >> 1;
            for (; Ub.length < Yb;) Ub.push(Rb.empty);
            Ub.push(Tb ? bb.slice(Mb, Mb + Tb) : Rb.empty)
          }
          Mb += Tb
        }
        return new hb(ab, Ub)
      }
      compose(bb) {
        return this.empty ? bb : bb.empty ? this : rb(this, bb, !0)
      }
      map(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return bb.empty ? this : ub(this, bb, ab, !0)
      }
      iterChanges(bb) {
        qb(this, bb, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get desc() {
        return Fb.create(this.sections)
      }
      filter(bb) {
        let ab = [],
          Ub = [],
          Ab = [],
          Mb = new Kb(this);
        bb: for (let Tb = 0, Eb = 0;;) {
          let Yb = Tb == bb.length ? 1e9 : bb[Tb++];
          for (; Eb < Yb || Eb == Yb && 0 == Mb.len;) {
            if (Mb.done) break bb;
            let bb = Math.min(Mb.len, Yb - Eb);
            Gb(Ab, bb, -1);
            let Tb = -1 == Mb.ins ? -1 : 0 == Mb.off ? Mb.ins : 0;
            Gb(ab, bb, Tb), Tb > 0 && Qb(Ub, ab, Mb.text), Mb.forward(bb), Eb += bb
          }
          let Bb = bb[Tb++];
          for (; Eb < Bb;) {
            if (Mb.done) break bb;
            let bb = Math.min(Mb.len, Bb - Eb);
            Gb(ab, bb, -1), Gb(Ab, bb, -1 == Mb.ins ? -1 : 0 == Mb.off ? Mb.ins : 0), Mb.forward(bb), Eb += bb
          }
        }
        return {
          changes: new hb(ab, Ub),
          filtered: Fb.create(Ab)
        }
      }
      toJSON() {
        let bb = [];
        for (let ab = 0; ab < this.sections.length; ab += 2) {
          let Ub = this.sections[ab],
            Ab = this.sections[ab + 1];
          Ab < 0 ? bb.push(Ub) : 0 == Ab ? bb.push([Ub]) : bb.push([Ub].concat(this.inserted[ab >> 1].toJSON()))
        }
        return bb
      }
      static of (bb, ab, Ub) {
        let Ab = [],
          Mb = [],
          Tb = 0,
          Eb = null;

        function Yb() {
          if (!(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && !Ab.length) return;
          Tb < ab && Gb(Ab, ab - Tb, -1);
          let bb = new hb(Ab, Mb);
          Eb = Eb ? Eb.compose(bb.map(Eb)) : bb, Ab = [], Mb = [], Tb = 0
        }
        return function bb(Bb) {
          if (Array.isArray(Bb))
            for (let ab of Bb) bb(ab);
          else if (Bb instanceof hb) {
            if (Bb.length != ab) throw new RangeError(`Mismatched change set length (got ${Bb.length}, expected ${ab})`);
            Yb(), Eb = Eb ? Eb.compose(Bb.map(Eb)) : Bb
          } else {
            let {
              from: bb,
              to: Eb = bb,
              insert: eb
            } = Bb;
            if (bb > Eb || bb < 0 || Eb > ab) throw new RangeError(`Invalid change range ${bb} to ${Eb} (in doc of length ${ab})`);
            let vb = eb ? "string" == typeof eb ? Rb.of(eb.split(Ub || Ib)) : eb : Rb.empty,
              Lb = vb.length;
            if (bb == Eb && 0 == Lb) return;
            bb < Tb && Yb(), bb > Tb && Gb(Ab, bb - Tb, -1), Gb(Ab, Eb - bb, Lb), Qb(Mb, Ab, vb), Tb = Eb
          }
        }(bb), Yb(!Eb), Eb
      }
      static empty(bb) {
        return new hb(bb ? [bb, -1] : [], [])
      }
      static fromJSON(bb) {
        if (!Array.isArray(bb)) throw new RangeError("Invalid JSON representation of ChangeSet");
        let ab = [],
          Ub = [];
        for (let Ab = 0; Ab < bb.length; Ab++) {
          let Mb = bb[Ab];
          if ("number" == typeof Mb) ab.push(Mb, -1);
          else {
            if (!Array.isArray(Mb) || "number" != typeof Mb[0] || Mb.some(((bb, ab) => ab && "string" != typeof bb))) throw new RangeError("Invalid JSON representation of ChangeSet");
            if (1 == Mb.length) ab.push(Mb[0], 0);
            else {
              for (; Ub.length < Ab;) Ub.push(Rb.empty);
              Ub[Ab] = Rb.of(Mb.slice(1)), ab.push(Mb[0], Ub[Ab].length)
            }
          }
        }
        return new hb(ab, Ub)
      }
      static createSet(bb, ab) {
        return new hb(bb, ab)
      }
    }

    function Gb(bb, ab, Ub) {
      let Ab = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (0 == ab && Ub <= 0) return;
      let Mb = bb.length - 2;
      Mb >= 0 && Ub <= 0 && Ub == bb[Mb + 1] ? bb[Mb] += ab : Mb >= 0 && 0 == ab && 0 == bb[Mb] ? bb[Mb + 1] += Ub : Ab ? (bb[Mb] += ab, bb[Mb + 1] += Ub) : bb.push(ab, Ub)
    }

    function Qb(bb, ab, Ub) {
      if (0 == Ub.length) return;
      let Ab = ab.length - 2 >> 1;
      if (Ab < bb.length) bb[bb.length - 1] = bb[bb.length - 1].append(Ub);
      else {
        for (; bb.length < Ab;) bb.push(Rb.empty);
        bb.push(Ub)
      }
    }

    function qb(bb, ab, Ub) {
      let Ab = bb.inserted;
      for (let Mb = 0, Tb = 0, Eb = 0; Eb < bb.sections.length;) {
        let Yb = bb.sections[Eb++],
          Bb = bb.sections[Eb++];
        if (Bb < 0) Mb += Yb, Tb += Yb;
        else {
          let eb = Mb,
            vb = Tb,
            Lb = Rb.empty;
          for (; eb += Yb, vb += Bb, Bb && Ab && (Lb = Lb.append(Ab[Eb - 2 >> 1])), !(Ub || Eb == bb.sections.length || bb.sections[Eb + 1] < 0);) Yb = bb.sections[Eb++], Bb = bb.sections[Eb++];
          ab(Mb, eb, Tb, vb, Lb), Mb = eb, Tb = vb
        }
      }
    }

    function ub(bb, ab, Ub) {
      let Ab = [],
        Mb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3] ? [] : null,
        Tb = new Kb(bb),
        Eb = new Kb(ab),
        Yb = 0;
      for (let Bb = -1;;) {
        if (++Yb > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - likely malformed ChangeSet");
        if (Tb.done && Eb.len || Eb.done && Tb.len) throw new Error("Mismatched change set lengths");
        if (-1 == Tb.ins && -1 == Eb.ins) {
          let bb = Math.min(Tb.len, Eb.len);
          Gb(Ab, bb, -1), Tb.forward(bb), Eb.forward(bb)
        } else if (Eb.ins >= 0 && (Tb.ins < 0 || Bb == Tb.i || 0 == Tb.off && (Eb.len < Tb.len || Eb.len == Tb.len && !Ub))) {
          let bb = Eb.len;
          for (Gb(Ab, Eb.ins, -1); bb;) {
            if (++Yb > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-b");
            let ab = Math.min(Tb.len, bb);
            Tb.ins >= 0 && Bb < Tb.i && Tb.len <= ab && (Gb(Ab, 0, Tb.ins), Mb && Qb(Mb, Ab, Tb.text), Bb = Tb.i), Tb.forward(ab), bb -= ab
          }
          Eb.next()
        } else {
          if (!(Tb.ins >= 0)) {
            if (Tb.done && Eb.done) return Mb ? hb.createSet(Ab, Mb) : Fb.create(Ab);
            throw new Error("Mismatched change set lengths")
          } {
            let bb = 0,
              ab = Tb.len;
            for (; ab;) {
              if (++Yb > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-a");
              if (-1 == Eb.ins) {
                let Ub = Math.min(ab, Eb.len);
                bb += Ub, ab -= Ub, Eb.forward(Ub)
              } else {
                if (!(0 == Eb.ins && Eb.len < ab)) break;
                ab -= Eb.len, Eb.next()
              }
            }
            Gb(Ab, bb, Bb < Tb.i ? Tb.ins : 0), Mb && Bb < Tb.i && Qb(Mb, Ab, Tb.text), Bb = Tb.i, Tb.forward(Tb.len - ab)
          }
        }
      }
    }

    function rb(bb, ab) {
      let Ub = [],
        Ab = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? [] : null,
        Mb = new Kb(bb),
        Tb = new Kb(ab),
        Eb = 0;
      for (let Yb = !1;;) {
        if (++Eb > 2e6) throw new Error("BLOXD CODEMIRROR: composeSets exceeded max iterations - likely malformed ChangeSet");
        if (Mb.done && Tb.done) return Ab ? hb.createSet(Ub, Ab) : Fb.create(Ub);
        if (0 == Mb.ins) Gb(Ub, Mb.len, 0, Yb), Mb.next();
        else if (0 != Tb.len || Tb.done) {
          if (Mb.done || Tb.done) throw new Error("Mismatched change set lengths");
          {
            let bb = Math.min(Mb.len2, Tb.len),
              ab = Ub.length;
            if (-1 == Mb.ins) {
              let ab = -1 == Tb.ins ? -1 : Tb.off ? 0 : Tb.ins;
              Gb(Ub, bb, ab, Yb), Ab && ab && Qb(Ab, Ub, Tb.text)
            } else - 1 == Tb.ins ? (Gb(Ub, Mb.off ? 0 : Mb.len, bb, Yb), Ab && Qb(Ab, Ub, Mb.textBit(bb))) : (Gb(Ub, Mb.off ? 0 : Mb.len, Tb.off ? 0 : Tb.ins, Yb), Ab && !Tb.off && Qb(Ab, Ub, Tb.text));
            Yb = (Mb.ins > bb || Tb.ins >= 0 && Tb.len > bb) && (Yb || Ub.length > ab), Mb.forward2(bb), Tb.forward(bb)
          }
        } else Gb(Ub, 0, Tb.ins, Yb), Ab && Qb(Ab, Ub, Tb.text), Tb.next()
      }
    }
    class Kb {
      constructor(bb) {
        this.set = bb, this.i = 0, this.next()
      }
      next() {
        let {
          sections: bb
        } = this.set;
        this.i < bb.length ? (this.len = bb[this.i++], this.ins = bb[this.i++]) : (this.len = 0, this.ins = -2), this.off = 0
      }
      get done() {
        return -2 == this.ins
      }
      get len2() {
        return this.ins < 0 ? this.len : this.ins
      }
      get text() {
        let {
          inserted: bb
        } = this.set, ab = this.i - 2 >> 1;
        return ab >= bb.length ? Rb.empty : bb[ab]
      }
      textBit(bb) {
        let {
          inserted: ab
        } = this.set, Ub = this.i - 2 >> 1;
        return Ub >= ab.length && !bb ? Rb.empty : ab[Ub].slice(this.off, null == bb ? void 0 : this.off + bb)
      }
      forward(bb) {
        bb == this.len ? this.next() : (this.len -= bb, this.off += bb)
      }
      forward2(bb) {
        -1 == this.ins ? this.forward(bb) : bb == this.ins ? this.next() : (this.ins -= bb, this.off += bb)
      }
    }
    class ob {
      constructor(bb, ab, Ub) {
        this.from = bb, this.to = ab, this.flags = Ub
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
        let bb = 7 & this.flags;
        return 7 == bb ? null : bb
      }
      get goalColumn() {
        let bb = this.flags >> 6;
        return 16777215 == bb ? void 0 : bb
      }
      map(bb) {
        let ab, Ub, Ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return this.empty ? ab = Ub = bb.mapPos(this.from, Ab) : (ab = bb.mapPos(this.from, 1), Ub = bb.mapPos(this.to, -1)), ab == this.from && Ub == this.to ? this : new ob(ab, Ub, this.flags)
      }
      extend(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bb,
          Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (bb <= this.anchor && ab >= this.anchor) return lb.range(bb, ab, void 0, void 0, Ub);
        let Ab = Math.abs(bb - this.anchor) > Math.abs(ab - this.anchor) ? bb : ab;
        return lb.range(this.anchor, Ab, void 0, void 0, Ub)
      }
      eq(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.anchor == bb.anchor && this.head == bb.head && this.goalColumn == bb.goalColumn && (!ab || !this.empty || this.assoc == bb.assoc)
      }
      toJSON() {
        return {
          anchor: this.anchor,
          head: this.head
        }
      }
      static fromJSON(bb) {
        if (!bb || "number" != typeof bb.anchor || "number" != typeof bb.head) throw new RangeError("Invalid JSON representation for SelectionRange");
        return lb.range(bb.anchor, bb.head)
      }
      static create(bb, ab, Ub) {
        return new ob(bb, ab, Ub)
      }
    }
    class lb {
      constructor(bb, ab) {
        this.cj = bb, this.mainIndex = ab
      }
      map(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return bb.empty ? this : lb.create(this.cj.map((Ub => Ub.map(bb, ab))), this.mainIndex)
      }
      eq(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.cj.length != bb.cj.length || this.mainIndex != bb.mainIndex) return !1;
        for (let Ub = 0; Ub < this.cj.length; Ub++)
          if (!this.cj[Ub].eq(bb.cj[Ub], ab)) return !1;
        return !0
      }
      get main() {
        return this.cj[this.mainIndex]
      }
      asSingle() {
        return 1 == this.cj.length ? this : new lb([this.main], 0)
      }
      addRange(bb) {
        let ab = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return lb.create([bb].concat(this.cj), ab ? 0 : this.mainIndex + 1)
      }
      replaceRange(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.mainIndex,
          Ub = this.cj.slice();
        return Ub[ab] = bb, lb.create(Ub, this.mainIndex)
      }
      toJSON() {
        return {
          cj: this.cj.map((bb => bb.toJSON())),
          main: this.mainIndex
        }
      }
      static fromJSON(bb) {
        if (!bb || !Array.isArray(bb.cj) || "number" != typeof bb.main || bb.main >= bb.cj.length) throw new RangeError("Invalid JSON representation for EditorSelection");
        return new lb(bb.cj.map((bb => ob.fromJSON(bb))), bb.main)
      }
      static single(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bb;
        return new lb([lb.range(bb, ab)], 0)
      }
      static create(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (0 == bb.length) throw new RangeError("A selection needs at least one range");
        for (let Ub = 0, Ab = 0; Ab < bb.length; Ab++) {
          let Mb = bb[Ab];
          if (Mb.empty ? Mb.from <= Ub : Mb.from < Ub) return lb.normalized(bb.slice(), ab);
          Ub = Mb.to
        }
        return new lb(bb, ab)
      }
      static cursor(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Ub = arguments.length > 2 ? arguments[2] : void 0,
          Ab = arguments.length > 3 ? arguments[3] : void 0;
        return ob.create(bb, bb, (0 == ab ? 0 : ab < 0 ? 8 : 16) | (null == Ub ? 7 : Math.min(6, Ub)) | (null !== Ab && void 0 !== Ab ? Ab : 16777215) << 6)
      }
      static range(bb, ab, Ub, Ab, Mb) {
        let Tb = (null !== Ub && void 0 !== Ub ? Ub : 16777215) << 6 | (null == Ab ? 7 : Math.min(6, Ab));
        return Mb || bb == ab || (Mb = ab < bb ? 1 : -1), ab < bb ? ob.create(ab, bb, 48 | Tb) : ob.create(bb, ab, (Mb ? Mb < 0 ? 8 : 16 : 0) | Tb)
      }
      static normalized(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Ub = bb[ab];
        bb.sort(((bb, ab) => bb.from - ab.from)), ab = bb.indexOf(Ub);
        for (let Ab = 1; Ab < bb.length; Ab++) {
          let Ub = bb[Ab],
            Mb = bb[Ab - 1];
          if (Ub.empty ? Ub.from <= Mb.to : Ub.from < Mb.to) {
            let Tb = Mb.from,
              Eb = Math.max(Ub.to, Mb.to);
            Ab <= ab && ab--, bb.splice(--Ab, 2, Ub.anchor > Ub.head ? lb.range(Eb, Tb) : lb.range(Tb, Eb))
          }
        }
        return new lb(bb, ab)
      }
    }

    function tb(bb, ab) {
      for (let Ub of bb.cj)
        if (Ub.to > ab) throw new RangeError("Selection points outside of document")
    }
    let wb = 0;
    class sb {
      constructor(bb, ab, Ub, Ab, Mb) {
        this.combine = bb, this.compareInput = ab, this.compare = Ub, this.isStatic = Ab, this.id = wb++, this.default = bb([]), this.extensions = "function" == typeof Mb ? Mb(this) : Mb
      }
      get reader() {
        return this
      }
      static define() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return new sb(bb.combine || (bb => bb), bb.compareInput || ((bb, ab) => bb === ab), bb.compare || (bb.combine ? (bb, ab) => bb === ab : gb), !!bb.static, bb.enables)
      }
      of(bb) {
        return new Cb([], this, 0, bb)
      }
      compute(bb, ab) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new Cb(bb, this, 1, ab)
      }
      computeN(bb, ab) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new Cb(bb, this, 2, ab)
      }
      from(bb, ab) {
        return ab || (ab = bb => bb), this.compute([bb], (Ub => ab(Ub.field(bb))))
      }
    }

    function gb(bb, ab) {
      return bb == ab || bb.length == ab.length && bb.every(((bb, Ub) => bb === ab[Ub]))
    }
    class Cb {
      constructor(bb, ab, Ub, Ab) {
        this.dependencies = bb, this.facet = ab, this.type = Ub, this.value = Ab, this.id = wb++
      }
      dynamicSlot(bb) {
        var ab;
        let Ub = this.value,
          Ab = this.facet.compareInput,
          Mb = this.id,
          Tb = bb[Mb] >> 1,
          Eb = 2 == this.type,
          Yb = !1,
          Bb = !1,
          eb = [];
        for (let vb of this.dependencies) "doc" == vb ? Yb = !0 : "selection" == vb ? Bb = !0 : 0 == (1 & (null !== (ab = bb[vb.id]) && void 0 !== ab ? ab : 1)) && eb.push(bb[vb.id]);
        return {
          create: bb => (bb.values[Tb] = Ub(bb), 1),
          update(bb, ab) {
            if (Yb && ab.docChanged || Bb && (ab.docChanged || ab.selection) || Ob(bb, eb)) {
              let ab = Ub(bb);
              if (Eb ? !Vb(ab, bb.values[Tb], Ab) : !Ab(ab, bb.values[Tb])) return bb.values[Tb] = ab, 1
            }
            return 0
          },
          reconfigure: (bb, ab) => {
            let Yb, Bb = ab.config.address[Mb];
            if (null != Bb) {
              let Mb = va(ab, Bb);
              if (this.dependencies.every((Ub => Ub instanceof sb ? ab.facet(Ub) === bb.facet(Ub) : !(Ub instanceof nb) || ab.field(Ub, !1) == bb.field(Ub, !1))) || (Eb ? Vb(Yb = Ub(bb), Mb, Ab) : Ab(Yb = Ub(bb), Mb))) return bb.values[Tb] = Mb, 0
            } else Yb = Ub(bb);
            return bb.values[Tb] = Yb, 1
          }
        }
      }
    }

    function Vb(bb, ab, Ub) {
      if (bb.length != ab.length) return !1;
      for (let Ab = 0; Ab < bb.length; Ab++)
        if (!Ub(bb[Ab], ab[Ab])) return !1;
      return !0
    }

    function Ob(bb, ab) {
      let Ub = !1;
      for (let Ab of ab) 1 & ea(bb, Ab) && (Ub = !0);
      return Ub
    }

    function cb(bb, ab, Ub) {
      let Ab = Ub.map((ab => bb[ab.id])),
        Mb = Ub.map((bb => bb.type)),
        Tb = Ab.filter((bb => !(1 & bb))),
        Eb = bb[ab.id] >> 1;

      function Yb(bb) {
        let Ub = [];
        for (let ab = 0; ab < Ab.length; ab++) {
          let Tb = va(bb, Ab[ab]);
          if (2 == Mb[ab])
            for (let bb of Tb) Ub.push(bb);
          else Ub.push(Tb)
        }
        return ab.combine(Ub)
      }
      return {
        create(bb) {
          for (let ab of Ab) ea(bb, ab);
          return bb.values[Eb] = Yb(bb), 1
        },
        update(bb, Ub) {
          if (!Ob(bb, Tb)) return 0;
          let Ab = Yb(bb);
          return ab.compare(Ab, bb.values[Eb]) ? 0 : (bb.values[Eb] = Ab, 1)
        },
        reconfigure(bb, Mb) {
          let Tb = Ob(bb, Ab),
            Bb = Mb.config.facets[ab.id],
            eb = Mb.facet(ab);
          if (Bb && !Tb && gb(Ub, Bb)) return bb.values[Eb] = eb, 0;
          let vb = Yb(bb);
          return ab.compare(vb, eb) ? (bb.values[Eb] = eb, 0) : (bb.values[Eb] = vb, 1)
        }
      }
    }
    const Jb = sb.define({
      static: !0
    });
    class nb {
      constructor(bb, ab, Ub, Ab, Mb) {
        this.id = bb, this.createF = ab, this.updateF = Ub, this.compareF = Ab, this.spec = Mb, this.provides = void 0
      }
      static define(bb) {
        let ab = new nb(wb++, bb.create, bb.update, bb.compare || ((bb, ab) => bb === ab), bb);
        return bb.provide && (ab.provides = bb.provide(ab)), ab
      }
      create(bb) {
        let ab = bb.facet(Jb).find((bb => bb.field == this));
        return ((null === ab || void 0 === ab ? void 0 : ab.create) || this.createF)(bb)
      }
      slot(bb) {
        let ab = bb[this.id] >> 1;
        return {
          create: bb => (bb.values[ab] = this.create(bb), 1),
          update: (bb, Ub) => {
            let Ab = bb.values[ab],
              Mb = this.updateF(Ab, Ub);
            return this.compareF(Ab, Mb) ? 0 : (bb.values[ab] = Mb, 1)
          },
          reconfigure: (bb, Ub) => {
            let Ab, Mb = bb.facet(Jb),
              Tb = Ub.facet(Jb);
            return (Ab = Mb.find((bb => bb.field == this))) && Ab != Tb.find((bb => bb.field == this)) ? (bb.values[ab] = Ab.create(bb), 1) : null != Ub.config.address[this.id] ? (bb.values[ab] = Ub.field(this), 0) : (bb.values[ab] = this.create(bb), 1)
          }
        }
      }
      init(bb) {
        return [this, Jb.of({
          field: this,
          create: bb
        })]
      }
      get extension() {
        return this
      }
    }
    const Sb = 4,
      ba = 3,
      aa = 2,
      Ua = 1;

    function Aa(bb) {
      return ab => new Ta(ab, bb)
    }
    const Ma = {
      highest: Aa(0),
      high: Aa(Ua),
      default: Aa(aa),
      low: Aa(ba),
      lowest: Aa(Sb)
    };
    class Ta {
      constructor(bb, ab) {
        this.inner = bb, this.prec = ab
      }
    }
    class Ea {
      of(bb) {
        return new Ya(this, bb)
      }
      reconfigure(bb) {
        return Ea.reconfigure.of({
          compartment: this,
          extension: bb
        })
      }
      get(bb) {
        return bb.config.compartments.get(this)
      }
    }
    class Ya {
      constructor(bb, ab) {
        this.compartment = bb, this.inner = ab
      }
    }
    class Ba {
      constructor(bb, ab, Ub, Ab, Mb, Tb) {
        for (this.base = bb, this.compartments = ab, this.dynamicSlots = Ub, this.address = Ab, this.staticValues = Mb, this.facets = Tb, this.statusTemplate = []; this.statusTemplate.length < Ub.length;) this.statusTemplate.push(0)
      }
      staticFacet(bb) {
        let ab = this.address[bb.id];
        return null == ab ? bb.default : this.staticValues[ab >> 1]
      }
      static resolve(bb, ab, Ub) {
        let Ab = [],
          Mb = Object.create(null),
          Tb = new Map;
        for (let Lb of function(bb, ab, Ub) {
            let Ab = [
                [],
                [],
                [],
                [],
                []
              ],
              Mb = new Map;

            function Tb(bb, Eb) {
              let Yb = Mb.get(bb);
              if (null != Yb) {
                if (Yb <= Eb) return;
                let ab = Ab[Yb].indexOf(bb);
                ab > -1 && Ab[Yb].splice(ab, 1), bb instanceof Ya && Ub.delete(bb.compartment)
              }
              if (Mb.set(bb, Eb), Array.isArray(bb))
                for (let ab of bb) Tb(ab, Eb);
              else if (bb instanceof Ya) {
                if (Ub.has(bb.compartment)) throw new RangeError("Duplicate use of compartment in extensions");
                let Ab = ab.get(bb.compartment) || bb.inner;
                Ub.set(bb.compartment, Ab), Tb(Ab, Eb)
              } else if (bb instanceof Ta) Tb(bb.inner, bb.prec);
              else if (bb instanceof nb) Ab[Eb].push(bb), bb.provides && Tb(bb.provides, Eb);
              else if (bb instanceof Cb) Ab[Eb].push(bb), bb.facet.extensions && Tb(bb.facet.extensions, aa);
              else {
                let ab = bb.extension;
                if (!ab) throw new Error(`Unrecognized extension value in extension set (${bb}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
                Tb(ab, Eb)
              }
            }
            return Tb(bb, aa), Ab.reduce(((bb, ab) => bb.concat(ab)))
          }(bb, ab, Tb)) Lb instanceof nb ? Ab.push(Lb) : (Mb[Lb.facet.id] || (Mb[Lb.facet.id] = [])).push(Lb);
        let Eb = Object.create(null),
          Yb = [],
          Bb = [];
        for (let Lb of Ab) Eb[Lb.id] = Bb.length << 1, Bb.push((bb => Lb.slot(bb)));
        let eb = null === Ub || void 0 === Ub ? void 0 : Ub.config.facets;
        for (let Lb in Mb) {
          let bb = Mb[Lb],
            ab = bb[0].facet,
            Ab = eb && eb[Lb] || [];
          if (bb.every((bb => 0 == bb.type)))
            if (Eb[ab.id] = Yb.length << 1 | 1, gb(Ab, bb)) Yb.push(Ub.facet(ab));
            else {
              let Ab = ab.combine(bb.map((bb => bb.value)));
              Yb.push(Ub && ab.compare(Ab, Ub.facet(ab)) ? Ub.facet(ab) : Ab)
            }
          else {
            for (let ab of bb) 0 == ab.type ? (Eb[ab.id] = Yb.length << 1 | 1, Yb.push(ab.value)) : (Eb[ab.id] = Bb.length << 1, Bb.push((bb => ab.dynamicSlot(bb))));
            Eb[ab.id] = Bb.length << 1, Bb.push((Ub => cb(Ub, ab, bb)))
          }
        }
        let vb = Bb.map((bb => bb(Eb)));
        return new Ba(bb, Tb, vb, Eb, Yb, Mb)
      }
    }

    function ea(bb, ab) {
      if (1 & ab) return 2;
      let Ub = ab >> 1,
        Ab = bb.status[Ub];
      if (4 == Ab) throw new Error("Cyclic dependency between fields and/or facets");
      if (2 & Ab) return Ab;
      bb.status[Ub] = 4;
      let Mb = bb.computeSlot(bb, bb.config.dynamicSlots[Ub]);
      return bb.status[Ub] = 2 | Mb
    }

    function va(bb, ab) {
      return 1 & ab ? bb.config.staticValues[ab >> 1] : bb.values[ab >> 1]
    }
    const La = sb.define(),
      Pa = sb.define({
        combine: bb => bb.some((bb => bb)),
        static: !0
      }),
      Xa = sb.define({
        combine: bb => bb.length ? bb[0] : void 0,
        static: !0
      }),
      ja = sb.define(),
      Ra = sb.define(),
      ka = sb.define(),
      ya = sb.define({
        combine: bb => !!bb.length && bb[0]
      });
    class Za {
      constructor(bb, ab) {
        this.type = bb, this.value = ab
      }
      static define() {
        return new Da
      }
    }
    class Da {
      of(bb) {
        return new Za(this, bb)
      }
    }
    class za {
      constructor(bb) {
        this.map = bb
      }
      of(bb) {
        return new xa(this, bb)
      }
    }
    class xa {
      constructor(bb, ab) {
        this.type = bb, this.value = ab
      }
      map(bb) {
        let ab = this.type.map(this.value, bb);
        return void 0 === ab ? void 0 : ab == this.value ? this : new xa(this.type, ab)
      }
      is(bb) {
        return this.type == bb
      }
      static define() {
        return new za((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).map || (bb => bb))
      }
      static mapEffects(bb, ab) {
        if (!bb.length) return bb;
        let Ub = [];
        for (let Ab of bb) {
          let bb = Ab.map(ab);
          bb && Ub.push(bb)
        }
        return Ub
      }
    }
    xa.reconfigure = xa.define(), xa.appendConfig = xa.define();
    class ia {
      constructor(bb, ab, Ub, Ab, Mb, Tb) {
        this.startState = bb, this.changes = ab, this.selection = Ub, this.effects = Ab, this.annotations = Mb, this.scrollIntoView = Tb, this._doc = null, this._state = null, Ub && tb(Ub, ab.newLength), Mb.some((bb => bb.type == ia.time)) || (this.annotations = Mb.concat(ia.time.of(Date.now())))
      }
      static create(bb, ab, Ub, Ab, Mb, Tb) {
        return new ia(bb, ab, Ub, Ab, Mb, Tb)
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
      annotation(bb) {
        for (let ab of this.annotations)
          if (ab.type == bb) return ab.value
      }
      get docChanged() {
        return !this.changes.empty
      }
      get reconfigured() {
        return this.startState.config != this.state.config
      }
      isUserEvent(bb) {
        let ab = this.annotation(ia.userEvent);
        return !(!ab || !(ab == bb || ab.length > bb.length && ab.slice(0, bb.length) == bb && "." == ab[bb.length]))
      }
    }

    function fa(bb, ab) {
      let Ub = [];
      for (let Ab = 0, Mb = 0;;) {
        let Tb, Eb;
        if (Ab < bb.length && (Mb == ab.length || ab[Mb] >= bb[Ab])) Tb = bb[Ab++], Eb = bb[Ab++];
        else {
          if (!(Mb < ab.length)) return Ub;
          Tb = ab[Mb++], Eb = ab[Mb++]
        }!Ub.length || Ub[Ub.length - 1] < Tb ? Ub.push(Tb, Eb) : Ub[Ub.length - 1] < Eb && (Ub[Ub.length - 1] = Eb)
      }
    }

    function ma(bb, ab, Ub) {
      var Ab;
      let Mb, Tb, Eb;
      return Ub ? (Mb = ab.changes, Tb = hb.empty(ab.changes.length), Eb = bb.changes.compose(ab.changes)) : (Mb = ab.changes.map(bb.changes), Tb = bb.changes.mapDesc(ab.changes, !0), Eb = bb.changes.compose(Mb)), {
        changes: Eb,
        selection: ab.selection ? ab.selection.map(Tb) : null === (Ab = bb.selection) || void 0 === Ab ? void 0 : Ab.map(Mb),
        effects: xa.mapEffects(bb.effects, Mb).concat(xa.mapEffects(ab.effects, Tb)),
        annotations: bb.annotations.length ? bb.annotations.concat(ab.annotations) : ab.annotations,
        scrollIntoView: bb.scrollIntoView || ab.scrollIntoView
      }
    }

    function pa(bb, ab, Ub) {
      let Ab = ab.selection,
        Mb = Ha(ab.annotations);
      return ab.userEvent && (Mb = Mb.concat(ia.userEvent.of(ab.userEvent))), {
        changes: ab.changes instanceof hb ? ab.changes : hb.of(ab.changes || [], Ub, bb.facet(Xa)),
        selection: Ab && (Ab instanceof lb ? Ab : lb.single(Ab.anchor, Ab.head)),
        effects: Ha(ab.effects),
        annotations: Mb,
        scrollIntoView: !!ab.scrollIntoView
      }
    }

    function Na(bb, ab, Ub) {
      let Ab = pa(bb, ab.length ? ab[0] : {}, bb.doc.length);
      ab.length && !1 === ab[0].filter && (Ub = !1);
      for (let Tb = 1; Tb < ab.length; Tb++) {
        !1 === ab[Tb].filter && (Ub = !1);
        let Mb = !!ab[Tb].sequential;
        Ab = ma(Ab, pa(bb, ab[Tb], Mb ? Ab.changes.newLength : bb.doc.length), Mb)
      }
      let Mb = ia.create(bb, Ab.changes, Ab.selection, Ab.effects, Ab.annotations, Ab.scrollIntoView);
      return function(bb) {
        let ab = bb.startState,
          Ub = ab.facet(ka),
          Ab = bb;
        for (let Mb = Ub.length - 1; Mb >= 0; Mb--) {
          let Tb = Ub[Mb](bb);
          Tb && Object.keys(Tb).length && (Ab = ma(Ab, pa(ab, Tb, bb.changes.newLength), !0))
        }
        return Ab == bb ? bb : ia.create(ab, bb.changes, bb.selection, Ab.effects, Ab.annotations, Ab.scrollIntoView)
      }(Ub ? function(bb) {
        let ab = bb.startState,
          Ub = !0;
        for (let Mb of ab.facet(ja)) {
          let ab = Mb(bb);
          if (!1 === ab) {
            Ub = !1;
            break
          }
          Array.isArray(ab) && (Ub = !0 === Ub ? ab : fa(Ub, ab))
        }
        if (!0 !== Ub) {
          let Ab, Mb;
          if (!1 === Ub) Mb = bb.changes.invertedDesc, Ab = hb.empty(ab.doc.length);
          else {
            let ab = bb.changes.filter(Ub);
            Ab = ab.changes, Mb = ab.filtered.mapDesc(ab.changes).invertedDesc
          }
          bb = ia.create(ab, Ab, bb.selection && bb.selection.map(Mb), xa.mapEffects(bb.effects, Mb), bb.annotations, bb.scrollIntoView)
        }
        let Ab = ab.facet(Ra);
        for (let Mb = Ab.length - 1; Mb >= 0; Mb--) {
          let Ub = Ab[Mb](bb);
          bb = Ub instanceof ia ? Ub : Array.isArray(Ub) && 1 == Ub.length && Ub[0] instanceof ia ? Ub[0] : Na(ab, Ha(Ub), !1)
        }
        return bb
      }(Mb) : Mb)
    }
    ia.time = Za.define(), ia.userEvent = Za.define(), ia.addToHistory = Za.define(), ia.remote = Za.define();
    const Wa = [];

    function Ha(bb) {
      return null == bb ? Wa : Array.isArray(bb) ? bb : [bb]
    }
    var Ia = function(bb) {
      return bb[bb.Word = 0] = "Word", bb[bb.Space = 1] = "Space", bb[bb.Other = 2] = "Other", bb
    }(Ia || (Ia = {}));
    const da = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
    let Fa;
    try {
      Fa = new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u")
    } catch (UU) {}

    function ha(bb) {
      return ab => {
        if (!/\S/.test(ab)) return Ia.Space;
        if (function(bb) {
            if (Fa) return Fa.test(bb);
            for (let ab = 0; ab < bb.length; ab++) {
              let Ub = bb[ab];
              if (/\w/.test(Ub) || Ub > "\x80" && (Ub.toUpperCase() != Ub.toLowerCase() || da.test(Ub))) return !0
            }
            return !1
          }(ab)) return Ia.Word;
        for (let Ub = 0; Ub < bb.length; Ub++)
          if (ab.indexOf(bb[Ub]) > -1) return Ia.Word;
        return Ia.Other
      }
    }
    class Ga {
      constructor(bb, ab, Ub, Ab, Mb, Tb) {
        this.config = bb, this.doc = ab, this.selection = Ub, this.values = Ab, this.status = bb.statusTemplate.slice(), this.computeSlot = Mb, Tb && (Tb._state = this);
        for (let Eb = 0; Eb < this.config.dynamicSlots.length; Eb++) ea(this, Eb << 1);
        this.computeSlot = null
      }
      field(bb) {
        let ab = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Ub = this.config.address[bb.id];
        if (null != Ub) return ea(this, Ub), va(this, Ub);
        if (ab) throw new RangeError("Field is not present in this state")
      }
      update() {
        for (var bb = arguments.length, ab = new Array(bb), Ub = 0; Ub < bb; Ub++) ab[Ub] = arguments[Ub];
        return Na(this, ab, !0)
      }
      applyTransaction(bb) {
        let ab, Ub = this.config,
          {
            base: Ab,
            compartments: Mb
          } = Ub;
        for (let Eb of bb.effects) Eb.is(Ea.reconfigure) ? (Ub && (Mb = new Map, Ub.compartments.forEach(((bb, ab) => Mb.set(ab, bb))), Ub = null), Mb.set(Eb.value.compartment, Eb.value.extension)) : Eb.is(xa.reconfigure) ? (Ub = null, Ab = Eb.value) : Eb.is(xa.appendConfig) && (Ub = null, Ab = Ha(Ab).concat(Eb.value));
        if (Ub) ab = bb.startState.values.slice();
        else {
          Ub = Ba.resolve(Ab, Mb, this), ab = new Ga(Ub, this.doc, this.selection, Ub.dynamicSlots.map((() => null)), ((bb, ab) => ab.reconfigure(bb, this)), null).values
        }
        let Tb = bb.startState.facet(Pa) ? bb.newSelection : bb.newSelection.asSingle();
        new Ga(Ub, bb.newDoc, Tb, ab, ((ab, Ub) => Ub.update(ab, bb)), bb)
      }
      replaceSelection(bb) {
        return "string" == typeof bb && (bb = this.toText(bb)), this.changeByRange((ab => ({
          changes: {
            from: ab.from,
            to: ab.to,
            insert: bb
          },
          range: lb.cursor(ab.from + bb.length)
        })))
      }
      changeByRange(bb) {
        let ab = this.selection,
          Ub = bb(ab.cj[0]),
          Ab = this.changes(Ub.changes),
          Mb = [Ub.range],
          Tb = Ha(Ub.effects);
        for (let Eb = 1; Eb < ab.cj.length; Eb++) {
          let Ub = bb(ab.cj[Eb]),
            Yb = this.changes(Ub.changes),
            Bb = Yb.map(Ab);
          for (let bb = 0; bb < Eb; bb++) Mb[bb] = Mb[bb].map(Bb);
          let eb = Ab.mapDesc(Yb, !0);
          Mb.push(Ub.range.map(eb)), Ab = Ab.compose(Bb), Tb = xa.mapEffects(Tb, Bb).concat(xa.mapEffects(Ha(Ub.effects), eb))
        }
        return {
          changes: Ab,
          selection: lb.create(Mb, ab.mainIndex),
          effects: Tb
        }
      }
      changes() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return bb instanceof hb ? bb : hb.of(bb, this.doc.length, this.facet(Ga.lineSeparator))
      }
      toText(bb) {
        return Rb.of(bb.split(this.facet(Ga.lineSeparator) || Ib))
      }
      sliceDoc() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.doc.length;
        return this.doc.sliceString(bb, ab, this.lineBreak)
      }
      facet(bb) {
        let ab = this.config.address[bb.id];
        return null == ab ? bb.default : (ea(this, ab), va(this, ab))
      }
      toJSON(bb) {
        let ab = {
          doc: this.sliceDoc(),
          selection: this.selection.toJSON()
        };
        if (bb)
          for (let Ub in bb) {
            let Ab = bb[Ub];
            Ab instanceof nb && null != this.config.address[Ab.id] && (ab[Ub] = Ab.spec.toJSON(this.field(bb[Ub]), this))
          }
        return ab
      }
      static fromJSON(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          Ub = arguments.length > 2 ? arguments[2] : void 0;
        if (!bb || "string" != typeof bb.doc) throw new RangeError("Invalid JSON representation for EditorState");
        let Ab = [];
        if (Ub)
          for (let Mb in Ub)
            if (Object.prototype.hasOwnProperty.call(bb, Mb)) {
              let ab = Ub[Mb],
                Tb = bb[Mb];
              Ab.push(ab.init((bb => ab.spec.fromJSON(Tb, bb))))
            } return Ga.create({
          doc: bb.doc,
          selection: lb.fromJSON(bb.selection),
          extensions: ab.extensions ? Ab.concat([ab.extensions]) : Ab
        })
      }
      static create() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          ab = Ba.resolve(bb.extensions || [], new Map),
          Ub = bb.doc instanceof Rb ? bb.doc : Rb.of((bb.doc || "").split(ab.staticFacet(Ga.lineSeparator) || Ib)),
          Ab = bb.selection ? bb.selection instanceof lb ? bb.selection : lb.single(bb.selection.anchor, bb.selection.head) : lb.single(0);
        return tb(Ab, Ub.length), ab.staticFacet(Pa) || (Ab = Ab.asSingle()), new Ga(ab, Ub, Ab, ab.dynamicSlots.map((() => null)), ((bb, ab) => ab.create(bb)), null)
      }
      get tabSize() {
        return this.facet(Ga.tabSize)
      }
      get lineBreak() {
        return this.facet(Ga.lineSeparator) || "\n"
      }
      get readOnly() {
        return this.facet(ya)
      }
      phrase(bb) {
        for (var ab = arguments.length, Ub = new Array(ab > 1 ? ab - 1 : 0), Ab = 1; Ab < ab; Ab++) Ub[Ab - 1] = arguments[Ab];
        for (let Mb of this.facet(Ga.phrases))
          if (Object.prototype.hasOwnProperty.call(Mb, bb)) {
            bb = Mb[bb];
            break
          } return Ub.length && (bb = bb.replace(/\$(\$|\d*)/g, ((bb, ab) => {
          if ("$" == ab) return "$";
          let Ab = +(ab || 1);
          return !Ab || Ab > Ub.length ? bb : Ub[Ab - 1]
        }))), bb
      }
      languageDataAt(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          Ab = [];
        for (let Mb of this.facet(La))
          for (let Tb of Mb(this, ab, Ub)) Object.prototype.hasOwnProperty.call(Tb, bb) && Ab.push(Tb[bb]);
        return Ab
      }
      charCategorizer(bb) {
        let ab = this.languageDataAt("wordChars", bb);
        return ha(ab.length ? ab[0] : "")
      }
      wordAt(bb) {
        let {
          text: ab,
          from: Ub,
          length: Ab
        } = this.doc.lineAt(bb), Mb = this.charCategorizer(bb), Tb = bb - Ub, Eb = bb - Ub;
        for (; Tb > 0;) {
          let bb = pb(ab, Tb, !1);
          if (Mb(ab.slice(bb, Tb)) != Ia.Word) break;
          Tb = bb
        }
        for (; Eb < Ab;) {
          let bb = pb(ab, Eb);
          if (Mb(ab.slice(Eb, bb)) != Ia.Word) break;
          Eb = bb
        }
        return Tb == Eb ? null : lb.range(Tb + Ub, Eb + Ub)
      }
    }

    function Qa(bb, ab) {
      let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        Ab = {};
      for (let Mb of bb)
        for (let bb of Object.keys(Mb)) {
          let ab = Mb[bb],
            Tb = Ab[bb];
          if (void 0 === Tb) Ab[bb] = ab;
          else if (Tb === ab || void 0 === ab);
          else {
            if (!Object.hasOwnProperty.call(Ub, bb)) throw new Error("Config merge conflict for field " + bb);
            Ab[bb] = Ub[bb](Tb, ab)
          }
        }
      for (let Mb in ab) void 0 === Ab[Mb] && (Ab[Mb] = ab[Mb]);
      return Ab
    }
    Ga.allowMultipleSelections = Pa, Ga.tabSize = sb.define({
      combine: bb => bb.length ? bb[0] : 4
    }), Ga.lineSeparator = Xa, Ga.readOnly = ya, Ga.phrases = sb.define({
      compare(bb, ab) {
        let Ub = Object.keys(bb),
          Ab = Object.keys(ab);
        return Ub.length == Ab.length && Ub.every((Ub => bb[Ub] == ab[Ub]))
      }
    }), Ga.languageData = La, Ga.changeFilter = ja, Ga.transactionFilter = Ra, Ga.transactionExtender = ka, Ea.reconfigure = xa.define();
    class qa {
      eq(bb) {
        return this == bb
      }
      range(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bb;
        return ra.create(bb, ab, this)
      }
    }

    function ua(bb, ab) {
      return bb == ab || bb.constructor == ab.constructor && bb.eq(ab)
    }
    qa.prototype.startSide = qa.prototype.endSide = 0, qa.prototype.point = !1, qa.prototype.mapMode = db.TrackDel;
    class ra {
      constructor(bb, ab, Ub) {
        this.from = bb, this.to = ab, this.value = Ub
      }
      static create(bb, ab, Ub) {
        return new ra(bb, ab, Ub)
      }
    }

    function Ka(bb, ab) {
      return bb.from - ab.from || bb.value.startSide - ab.value.startSide
    }
    class oa {
      constructor(bb, ab, Ub, Ab) {
        this.from = bb, this.to = ab, this.value = Ub, this.tUb = Ab
      }
      get length() {
        return this.to[this.to.length - 1]
      }
      findIndex(bb, ab, Ub) {
        let Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Mb = Ub ? this.to : this.from;
        for (let Tb = Ab, Eb = Mb.length;;) {
          if (Tb == Eb) return Tb;
          let Ab = Tb + Eb >> 1,
            Yb = Mb[Ab] - bb || (Ub ? this.value[Ab].endSide : this.value[Ab].startSide) - ab;
          if (Ab == Tb) return Yb >= 0 ? Tb : Eb;
          Yb >= 0 ? Eb = Ab : Tb = Ab + 1
        }
      }
      between(bb, ab, Ub, Ab) {
        for (let Mb = this.findIndex(ab, -1e9, !0), Tb = this.findIndex(Ub, 1e9, !1, Mb); Mb < Tb; Mb++)
          if (!1 === Ab(this.from[Mb] + bb, this.to[Mb] + bb, this.value[Mb])) return !1
      }
      map(bb, ab) {
        let Ub = [],
          Ab = [],
          Mb = [],
          Tb = -1,
          Eb = -1;
        for (let Yb = 0; Yb < this.value.length; Yb++) {
          let Bb, eb, vb = this.value[Yb],
            Lb = this.from[Yb] + bb,
            Pb = this.to[Yb] + bb;
          if (Lb == Pb) {
            let bb = ab.mapPos(Lb, vb.startSide, vb.mapMode);
            if (null == bb) continue;
            if (Bb = eb = bb, vb.startSide != vb.endSide && (eb = ab.mapPos(Lb, vb.endSide), eb < Bb)) continue
          } else if (Bb = ab.mapPos(Lb, vb.startSide), eb = ab.mapPos(Pb, vb.endSide), Bb > eb || Bb == eb && vb.startSide > 0 && vb.endSide <= 0) continue;
          (eb - Bb || vb.endSide - vb.startSide) < 0 || (Tb < 0 && (Tb = Bb), vb.point && (Eb = Math.max(Eb, eb - Bb)), Ub.push(vb), Ab.push(Bb - Tb), Mb.push(eb - Tb))
        }
        return {
          mapped: Ub.length ? new oa(Ab, Mb, Ub, Eb) : null,
          pos: Tb
        }
      }
    }
    class la {
      constructor(bb, ab, Ub, Ab) {
        this.chunkPos = bb, this.chunk = ab, this.nextLayer = Ub, this.tUb = Ab
      }
      static create(bb, ab, Ub, Ab) {
        return new la(bb, ab, Ub, Ab)
      }
      get length() {
        let bb = this.chunk.length - 1;
        return bb < 0 ? 0 : Math.max(this.chunkEnd(bb), this.nextLayer.length)
      }
      get size() {
        if (this.lX) return 0;
        let bb = this.nextLayer.size;
        for (let ab of this.chunk) bb += ab.value.length;
        return bb
      }
      chunkEnd(bb) {
        return this.chunkPos[bb] + this.chunk[bb].length
      }
      update(bb) {
        let {
          add: ab = [],
          sort: Ub = !1,
          filterFrom: Ab = 0,
          filterTo: Mb = this.length
        } = bb, Tb = bb.filter;
        if (0 == ab.length && !Tb) return this;
        if (Ub && (ab = ab.slice().sort(Ka)), this.lX) return ab.length ? la.of(ab) : this;
        let Eb = new sa(this, null, -1).goto(0),
          Yb = 0,
          Bb = [],
          eb = new ta;
        for (; Eb.value || Yb < ab.length;)
          if (Yb < ab.length && (Eb.from - ab[Yb].from || Eb.startSide - ab[Yb].value.startSide) >= 0) {
            let bb = ab[Yb++];
            eb.addInner(bb.from, bb.to, bb.value) || Bb.push(bb)
          } else 1 == Eb.rangeIndex && Eb.chunkIndex < this.chunk.length && (Yb == ab.length || this.chunkEnd(Eb.chunkIndex) < ab[Yb].from) && (!Tb || Ab > this.chunkEnd(Eb.chunkIndex) || Mb < this.chunkPos[Eb.chunkIndex]) && eb.addChunk(this.chunkPos[Eb.chunkIndex], this.chunk[Eb.chunkIndex]) ? Eb.nextChunk() : ((!Tb || Ab > Eb.to || Mb < Eb.from || Tb(Eb.from, Eb.to, Eb.value)) && (eb.addInner(Eb.from, Eb.to, Eb.value) || Bb.push(ra.create(Eb.from, Eb.to, Eb.value))), Eb.next());
        return eb.finishInner(this.nextLayer.lX && !Bb.length ? la.empty : this.nextLayer.update({
          add: Bb,
          filter: Tb,
          filterFrom: Ab,
          filterTo: Mb
        }))
      }
      map(bb) {
        if (bb.empty || this.lX) return this;
        let ab = [],
          Ub = [],
          Ab = -1;
        for (let Tb = 0; Tb < this.chunk.length; Tb++) {
          let Mb = this.chunkPos[Tb],
            Eb = this.chunk[Tb],
            Yb = bb.touchesRange(Mb, Mb + Eb.length);
          if (!1 === Yb) Ab = Math.max(Ab, Eb.tUb), ab.push(Eb), Ub.push(bb.mapPos(Mb));
          else if (!0 === Yb) {
            let {
              mapped: Tb,
              pos: Yb
            } = Eb.map(Mb, bb);
            Tb && (Ab = Math.max(Ab, Tb.tUb), ab.push(Tb), Ub.push(Yb))
          }
        }
        let Mb = this.nextLayer.map(bb);
        return 0 == ab.length ? Mb : new la(Ub, ab, Mb || la.empty, Ab)
      }
      between(bb, ab, Ub) {
        if (!this.lX) {
          for (let Ab = 0; Ab < this.chunk.length; Ab++) {
            let Mb = this.chunkPos[Ab],
              Tb = this.chunk[Ab];
            if (ab >= Mb && bb <= Mb + Tb.length && !1 === Tb.between(Mb, bb - Mb, ab - Mb, Ub)) return
          }
          this.nextLayer.between(bb, ab, Ub)
        }
      }
      iter() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return ga.from([this]).goto(bb)
      }
      get lX() {
        return this.nextLayer == this
      }
      static iter(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return ga.from(bb).goto(ab)
      }
      static compare(bb, ab, Ub, Ab) {
        let Mb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1,
          Tb = bb.filter((bb => bb.tUb > 0 || !bb.lX && bb.tUb >= Mb)),
          Eb = ab.filter((bb => bb.tUb > 0 || !bb.lX && bb.tUb >= Mb)),
          Yb = wa(Tb, Eb, Ub),
          Bb = new Va(Tb, Yb, Mb),
          eb = new Va(Eb, Yb, Mb);
        Ub.iterGaps(((bb, ab, Ub) => Oa(Bb, bb, eb, ab, Ub, Ab))), Ub.empty && 0 == Ub.length && Oa(Bb, 0, eb, 0, 0, Ab)
      }
      static eq(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Ab = arguments.length > 3 ? arguments[3] : void 0;
        null == Ab && (Ab = 999999999);
        let Mb = bb.filter((bb => !bb.lX && ab.indexOf(bb) < 0)),
          Tb = ab.filter((ab => !ab.lX && bb.indexOf(ab) < 0));
        if (Mb.length != Tb.length) return !1;
        if (!Mb.length) return !0;
        let Eb = wa(Mb, Tb),
          Yb = new Va(Mb, Eb, 0).goto(Ub),
          Bb = new Va(Tb, Eb, 0).goto(Ub);
        for (;;) {
          if (Yb.to != Bb.to || !ca(Yb.active, Bb.active) || Yb.point && (!Bb.point || !ua(Yb.point, Bb.point))) return !1;
          if (Yb.to > Ab) return !0;
          Yb.next(), Bb.next()
        }
      }
      static spans(bb, ab, Ub, Ab) {
        let Mb = new Va(bb, null, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1).goto(ab),
          Tb = ab,
          Eb = Mb.openStart;
        for (;;) {
          let bb = Math.min(Mb.to, Ub);
          if (Mb.point) {
            let Ub = Mb.activeForPoint(Mb.to),
              Yb = Mb.pointFrom < ab ? Ub.length + 1 : Mb.point.startSide < 0 ? Ub.length : Math.min(Ub.length, Eb);
            Ab.point(Tb, bb, Mb.point, Ub, Yb, Mb.pointRank), Eb = Math.min(Mb.openEnd(bb), Ub.length)
          } else bb > Tb && (Ab.span(Tb, bb, Mb.active, Eb), Eb = Mb.openEnd(bb));
          if (Mb.to > Ub) return Eb + (Mb.point && Mb.to > Ub ? 1 : 0);
          Tb = Mb.to, Mb.next()
        }
      }
      static of (bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Ub = new ta;
        for (let Ab of bb instanceof ra ? [bb] : ab ? function(bb) {
            if (bb.length > 1)
              for (let ab = bb[0], Ub = 1; Ub < bb.length; Ub++) {
                let Ab = bb[Ub];
                if (Ka(ab, Ab) > 0) return bb.slice().sort(Ka);
                ab = Ab
              }
            return bb
          }(bb) : bb) Ub.add(Ab.from, Ab.to, Ab.value);
        return Ub.finish()
      }
      static join(bb) {
        if (!bb.length) return la.empty;
        let ab = bb[bb.length - 1];
        for (let Ub = bb.length - 2; Ub >= 0; Ub--)
          for (let Ab = bb[Ub]; Ab != la.empty; Ab = Ab.nextLayer) ab = new la(Ab.chunkPos, Ab.chunk, ab, Math.max(Ab.tUb, ab.tUb));
        return ab
      }
    }
    la.empty = new la([], [], null, -1), la.empty.nextLayer = la.empty;
    class ta {
      finishChunk(bb) {
        this.chunks.push(new oa(this.from, this.to, this.value, this.tUb)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.tUb), this.tUb = -1, bb && (this.from = [], this.to = [], this.value = [])
      }
      constructor() {
        this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.tUb = -1, this.setMaxPoint = -1, this.nextLayer = null
      }
      add(bb, ab, Ub) {
        this.addInner(bb, ab, Ub) || (this.nextLayer || (this.nextLayer = new ta)).add(bb, ab, Ub)
      }
      addInner(bb, ab, Ub) {
        let Ab = bb - this.lastTo || Ub.startSide - this.last.endSide;
        if (Ab <= 0 && (bb - this.lastFrom || Ub.startSide - this.last.startSide) < 0) throw new Error("Ranges must be added sorted by `from` position and `startSide`");
        return !(Ab < 0) && (250 == this.from.length && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = bb), this.from.push(bb - this.chunkStart), this.to.push(ab - this.chunkStart), this.last = Ub, this.lastFrom = bb, this.lastTo = ab, this.value.push(Ub), Ub.point && (this.tUb = Math.max(this.tUb, ab - bb)), !0)
      }
      addChunk(bb, ab) {
        if ((bb - this.lastTo || ab.value[0].startSide - this.last.endSide) < 0) return !1;
        this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, ab.tUb), this.chunks.push(ab), this.chunkPos.push(bb);
        let Ub = ab.value.length - 1;
        return this.last = ab.value[Ub], this.lastFrom = ab.from[Ub] + bb, this.lastTo = ab.to[Ub] + bb, !0
      }
      finish() {
        return this.finishInner(la.empty)
      }
      finishInner(bb) {
        if (this.from.length && this.finishChunk(!1), 0 == this.chunks.length) return bb;
        let ab = la.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(bb) : bb, this.setMaxPoint);
        return this.from = null, ab
      }
    }

    function wa(bb, ab, Ub) {
      let Ab = new Map;
      for (let Tb of bb)
        for (let bb = 0; bb < Tb.chunk.length; bb++) Tb.chunk[bb].tUb <= 0 && Ab.set(Tb.chunk[bb], Tb.chunkPos[bb]);
      let Mb = new Set;
      for (let Tb of ab)
        for (let bb = 0; bb < Tb.chunk.length; bb++) {
          let ab = Ab.get(Tb.chunk[bb]);
          null == ab || (Ub ? Ub.mapPos(ab) : ab) != Tb.chunkPos[bb] || (null === Ub || void 0 === Ub ? void 0 : Ub.touchesRange(ab, ab + Tb.chunk[bb].length)) || Mb.add(Tb.chunk[bb])
        }
      return Mb
    }
    class sa {
      constructor(bb, ab, Ub) {
        let Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.layer = bb, this.skip = ab, this.wUb = Ub, this.rank = Ab
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      get endSide() {
        return this.value ? this.value.endSide : 0
      }
      goto(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(bb, ab, !1), this
      }
      gotoInner(bb, ab, Ub) {
        for (; this.chunkIndex < this.layer.chunk.length;) {
          let ab = this.layer.chunk[this.chunkIndex];
          if (!(this.skip && this.skip.has(ab) || this.layer.chunkEnd(this.chunkIndex) < bb || ab.tUb < this.wUb)) break;
          this.chunkIndex++, Ub = !1
        }
        if (this.chunkIndex < this.layer.chunk.length) {
          let Ab = this.layer.chunk[this.chunkIndex].findIndex(bb - this.layer.chunkPos[this.chunkIndex], ab, !0);
          (!Ub || this.rangeIndex < Ab) && this.setRangeIndex(Ab)
        }
        this.next()
      }
      forward(bb, ab) {
        (this.to - bb || this.endSide - ab) < 0 && this.gotoInner(bb, ab, !0)
      }
      next() {
        for (;;) {
          if (this.chunkIndex == this.layer.chunk.length) {
            this.from = this.to = 1e9, this.value = null;
            break
          } {
            let bb = this.layer.chunkPos[this.chunkIndex],
              ab = this.layer.chunk[this.chunkIndex],
              Ub = bb + ab.from[this.rangeIndex];
            if (this.from = Ub, this.to = bb + ab.to[this.rangeIndex], this.value = ab.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.wUb < 0 || this.value.point && this.to - this.from >= this.wUb) break
          }
        }
      }
      setRangeIndex(bb) {
        if (bb == this.layer.chunk[this.chunkIndex].value.length) {
          if (this.chunkIndex++, this.skip)
            for (; this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]);) this.chunkIndex++;
          this.rangeIndex = 0
        } else this.rangeIndex = bb
      }
      nextChunk() {
        this.chunkIndex++, this.rangeIndex = 0, this.next()
      }
      compare(bb) {
        return this.from - bb.from || this.startSide - bb.startSide || this.rank - bb.rank || this.to - bb.to || this.endSide - bb.endSide
      }
    }
    class ga {
      constructor(bb) {
        this.heap = bb
      }
      static from(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          Ab = [];
        for (let Mb = 0; Mb < bb.length; Mb++)
          for (let Tb = bb[Mb]; !Tb.lX; Tb = Tb.nextLayer) Tb.tUb >= Ub && Ab.push(new sa(Tb, ab, Ub, Mb));
        return 1 == Ab.length ? Ab[0] : new ga(Ab)
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      goto(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        for (let Ub of this.heap) Ub.goto(bb, ab);
        for (let Ub = this.heap.length >> 1; Ub >= 0; Ub--) Ca(this.heap, Ub);
        return this.next(), this
      }
      forward(bb, ab) {
        for (let Ub of this.heap) Ub.forward(bb, ab);
        for (let Ub = this.heap.length >> 1; Ub >= 0; Ub--) Ca(this.heap, Ub);
        (this.to - bb || this.value.endSide - ab) < 0 && this.next()
      }
      next() {
        if (0 == this.heap.length) this.from = this.to = 1e9, this.value = null, this.rank = -1;
        else {
          let bb = this.heap[0];
          this.from = bb.from, this.to = bb.to, this.value = bb.value, this.rank = bb.rank, bb.value && bb.next(), Ca(this.heap, 0)
        }
      }
    }

    function Ca(bb, ab) {
      for (let Ub = bb[ab];;) {
        let Ab = 1 + (ab << 1);
        if (Ab >= bb.length) break;
        let Mb = bb[Ab];
        if (Ab + 1 < bb.length && Mb.compare(bb[Ab + 1]) >= 0 && (Mb = bb[Ab + 1], Ab++), Ub.compare(Mb) < 0) break;
        bb[Ab] = Ub, bb[ab] = Mb, ab = Ab
      }
    }
    class Va {
      constructor(bb, ab, Ub) {
        this.wUb = Ub, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = ga.from(bb, ab, Ub)
      }
      goto(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.cursor.goto(bb, ab), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = bb, this.endSide = ab, this.openStart = -1, this.next(), this
      }
      forward(bb, ab) {
        for (; this.minActive > -1 && (this.activeTo[this.minActive] - bb || this.active[this.minActive].endSide - ab) < 0;) this.removeActive(this.minActive);
        this.cursor.forward(bb, ab)
      }
      removeActive(bb) {
        Ja(this.active, bb), Ja(this.activeTo, bb), Ja(this.activeRank, bb), this.minActive = Sa(this.active, this.activeTo)
      }
      addActive(bb) {
        let ab = 0,
          {
            value: Ub,
            to: Ab,
            rank: Mb
          } = this.cursor;
        for (; ab < this.activeRank.length && (Mb - this.activeRank[ab] || Ab - this.activeTo[ab]) > 0;) ab++;
        na(this.active, ab, Ub), na(this.activeTo, ab, Ab), na(this.activeRank, ab, Mb), bb && na(bb, ab, this.cursor.from), this.minActive = Sa(this.active, this.activeTo)
      }
      next() {
        let bb = this.to,
          ab = this.point;
        this.point = null;
        let Ub = this.openStart < 0 ? [] : null;
        for (;;) {
          let Ab = this.minActive;
          if (Ab > -1 && (this.activeTo[Ab] - this.cursor.from || this.active[Ab].endSide - this.cursor.startSide) < 0) {
            if (this.activeTo[Ab] > bb) {
              this.to = this.activeTo[Ab], this.endSide = this.active[Ab].endSide;
              break
            }
            this.removeActive(Ab), Ub && Ja(Ub, Ab)
          } else {
            if (!this.cursor.value) {
              this.to = this.endSide = 1e9;
              break
            }
            if (this.cursor.from > bb) {
              this.to = this.cursor.from, this.endSide = this.cursor.startSide;
              break
            } {
              let bb = this.cursor.value;
              if (bb.point) {
                if (!(ab && this.cursor.to == this.to && this.cursor.from < this.cursor.to)) {
                  this.point = bb, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = bb.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
                  break
                }
                this.cursor.next()
              } else this.addActive(Ub), this.cursor.next()
            }
          }
        }
        if (Ub) {
          this.openStart = 0;
          for (let ab = Ub.length - 1; ab >= 0 && Ub[ab] < bb; ab--) this.openStart++
        }
      }
      activeForPoint(bb) {
        if (!this.active.length) return this.active;
        let ab = [];
        for (let Ub = this.active.length - 1; Ub >= 0 && !(this.activeRank[Ub] < this.pointRank); Ub--)(this.activeTo[Ub] > bb || this.activeTo[Ub] == bb && this.active[Ub].endSide >= this.point.endSide) && ab.push(this.active[Ub]);
        return ab.reverse()
      }
      openEnd(bb) {
        let ab = 0;
        for (let Ub = this.activeTo.length - 1; Ub >= 0 && this.activeTo[Ub] > bb; Ub--) ab++;
        return ab
      }
    }

    function Oa(bb, ab, Ub, Ab, Mb, Tb) {
      bb.goto(ab), Ub.goto(Ab);
      let Eb = Ab + Mb,
        Yb = Ab,
        Bb = Ab - ab,
        eb = !!Tb.boundChange;
      for (let vb = !1;;) {
        let ab = bb.to + Bb - Ub.to,
          Ab = ab || bb.endSide - Ub.endSide,
          Mb = Ab < 0 ? bb.to + Bb : Ub.to,
          Lb = Math.min(Mb, Eb);
        if (bb.point || Ub.point ? (bb.point && Ub.point && ua(bb.point, Ub.point) && ca(bb.activeForPoint(bb.to), Ub.activeForPoint(Ub.to)) || Tb.comparePoint(Yb, Lb, bb.point, Ub.point), vb = !1) : (vb && Tb.boundChange(Yb), Lb > Yb && !ca(bb.active, Ub.active) && Tb.compareRange(Yb, Lb, bb.active, Ub.active), eb && Lb < Eb && (ab || bb.openEnd(Mb) != Ub.openEnd(Mb)) && (vb = !0)), Mb > Eb) break;
        Yb = Mb, Ab <= 0 && bb.next(), Ab >= 0 && Ub.next()
      }
    }

    function ca(bb, ab) {
      if (bb.length != ab.length) return !1;
      for (let Ub = 0; Ub < bb.length; Ub++)
        if (bb[Ub] != ab[Ub] && !ua(bb[Ub], ab[Ub])) return !1;
      return !0
    }

    function Ja(bb, ab) {
      for (let Ub = ab, Ab = bb.length - 1; Ub < Ab; Ub++) bb[Ub] = bb[Ub + 1];
      bb.pop()
    }

    function na(bb, ab, Ub) {
      for (let Ab = bb.length - 1; Ab >= ab; Ab--) bb[Ab + 1] = bb[Ab];
      bb[ab] = Ub
    }

    function Sa(bb, ab) {
      let Ub = -1,
        Ab = 1e9;
      for (let Mb = 0; Mb < ab.length; Mb++)(ab[Mb] - Ab || bb[Mb].endSide - bb[Ub].endSide) < 0 && (Ub = Mb, Ab = ab[Mb]);
      return Ub
    }

    function bU(bb, ab) {
      let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : bb.length,
        Ab = 0;
      for (let Mb = 0; Mb < Ub && Mb < bb.length;) 9 == bb.charCodeAt(Mb) ? (Ab += ab - Ab % ab, Mb++) : (Ab++, Mb = pb(bb, Mb));
      return Ab
    }

    function aU(bb, ab, Ub, Ab) {
      for (let Mb = 0, Tb = 0;;) {
        if (Tb >= ab) return Mb;
        if (Mb == bb.length) break;
        Tb += 9 == bb.charCodeAt(Mb) ? Ub - Tb % Ub : 1, Mb = pb(bb, Mb)
      }
      return !0 === Ab ? -1 : bb.length
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);