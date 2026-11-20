export const id = 285;
export const ids = [285];
export const modules = {
  40738: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Cc,
      g: () => Db,
      ChangeSet: () => Eb,
      i: () => yc,
      j: () => db,
      m: () => ic,
      n: () => rb,
      r: () => Pb,
      s: () => Wc,
      z: () => dc,
      w: () => Ac,
      B: () => Gc,
      F: () => Lc,
      H: () => jb,
      L: () => lb,
      O: () => uc,
      S: () => gb,
      V: () => tb,
      X: () => Oc,
      Z: () => bs,
      _: () => Jb,
      bb: () => cs,
      db: () => Bb
    });
    let kb = [],
      Wb = [];

    function ab(bb) {
      if (bb < 768) return !1;
      for (let cb = 0, sb = kb.length;;) {
        let ab = cb + sb >> 1;
        if (bb < kb[ab]) sb = ab;
        else {
          if (!(bb >= Wb[ab])) return !0;
          cb = ab + 1
        }
        if (cb == sb) return !1
      }
    }

    function Tb(bb) {
      return bb >= 127462 && bb <= 127487
    }(() => {
      let bb = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((bb => bb ? parseInt(bb, 36) : 1));
      for (let cb = 0, sb = 0; cb < bb.length; cb++)(cb % 2 ? Wb : kb).push(sb += bb[cb])
    })();
    const Ub = 8205;

    function Ib(bb, cb) {
      return (!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2] ? Hb : fb)(bb, cb, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function Hb(bb, cb, sb) {
      if (cb == bb.length) return cb;
      cb && Xb(bb.charCodeAt(cb)) && nb(bb.charCodeAt(cb - 1)) && cb--;
      let kb = Mb(bb, cb);
      for (cb += mb(kb); cb < bb.length;) {
        let Wb = Mb(bb, cb);
        if (kb == Ub || Wb == Ub || sb && ab(Wb)) cb += mb(Wb), kb = Wb;
        else {
          if (!Tb(Wb)) break;
          {
            let sb = 0,
              kb = cb - 2;
            for (; kb >= 0 && Tb(Mb(bb, kb));) sb++, kb -= 2;
            if (sb % 2 == 0) break;
            cb += 2
          }
        }
      }
      return cb
    }

    function fb(bb, cb, sb) {
      for (; cb > 0;) {
        let kb = Hb(bb, cb - 2, sb);
        if (kb < cb) return kb;
        cb--
      }
      return 0
    }

    function Mb(bb, cb) {
      let sb = bb.charCodeAt(cb);
      if (!nb(sb) || cb + 1 == bb.length) return sb;
      let kb = bb.charCodeAt(cb + 1);
      return Xb(kb) ? kb - 56320 + (sb - 55296 << 10) + 65536 : sb
    }

    function Xb(bb) {
      return bb >= 56320 && bb < 57344
    }

    function nb(bb) {
      return bb >= 55296 && bb < 56320
    }

    function mb(bb) {
      return bb < 65536 ? 1 : 2
    }
    class lb {
      lineAt(bb) {
        if (bb < 0 || bb > this.length) throw new RangeError(`Invalid position ${bb} in document of length ${this.length}`);
        return this.lineInner(bb, !1, 1, 0)
      }
      line(bb) {
        if (bb < 1 || bb > this.lines) throw new RangeError(`Invalid line number ${bb} in ${this.lines}-line document`);
        return this.lineInner(bb, !0, 1, 0)
      }
      replace(bb, cb, sb) {
        [bb, cb] = hb(this, bb, cb);
        let kb = [];
        return this.decompose(0, bb, kb, 2), sb.length && sb.decompose(0, sb.length, kb, 3), this.decompose(cb, this.length, kb, 1), eb.from(kb, this.length - (cb - bb) + sb.length)
      }
      append(bb) {
        return this.replace(this.length, this.length, bb)
      }
      slice(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        [bb, cb] = hb(this, bb, cb);
        let sb = [];
        return this.decompose(bb, cb, sb, 0), eb.from(sb, cb - bb)
      }
      eq(bb) {
        if (bb == this) return !0;
        if (bb.length != this.length || bb.lines != this.lines) return !1;
        let cb = this.scanIdentical(bb, 1),
          sb = this.length - this.scanIdentical(bb, -1),
          kb = new Vb(this),
          Wb = new Vb(bb);
        for (let ab = cb, Tb = cb;;) {
          if (kb.next(ab), Wb.next(ab), ab = 0, kb.lineBreak != Wb.lineBreak || kb.done != Wb.done || kb.value != Wb.value) return !1;
          if (Tb += kb.value.length, kb.done || Tb >= sb) return !0
        }
      }
      iter() {
        return new Vb(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1)
      }
      iterRange(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        return new Lb(this, bb, cb)
      }
      iterLines(bb, cb) {
        let sb;
        if (null == bb) sb = this.iter();
        else {
          null == cb && (cb = this.lines + 1);
          let kb = this.line(bb).from;
          sb = this.iterRange(kb, Math.max(kb, cb == this.lines + 1 ? this.length : cb <= 1 ? 0 : this.line(cb - 1).to))
        }
        return new ub(sb)
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
        return 1 != bb.length || bb[0] ? bb.length <= 32 ? new Qb(bb) : eb.from(Qb.split(bb, [])) : lb.empty
      }
    }
    class Qb extends lb {
      constructor(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(bb) {
          let cb = -1;
          for (let sb of bb) cb += sb.length + 1;
          return cb
        }(bb);
        super(), this.text = bb, this.length = cb
      }
      get lines() {
        return this.text.length
      }
      get children() {
        return null
      }
      lineInner(bb, cb, sb, kb) {
        for (let Wb = 0;; Wb++) {
          let ab = this.text[Wb],
            Tb = kb + ab.length;
          if ((cb ? sb : Tb) >= bb) return new Yb(kb, Tb, sb, ab);
          kb = Tb + 1, sb++
        }
      }
      decompose(bb, cb, sb, kb) {
        let Wb = bb <= 0 && cb >= this.length ? this : new Qb(Nb(this.text, bb, cb), Math.min(cb, this.length) - Math.max(0, bb));
        if (1 & kb) {
          let bb = sb.pop(),
            cb = Cb(Wb.text, bb.text.slice(), 0, Wb.length);
          if (cb.length <= 32) sb.push(new Qb(cb, bb.length + Wb.length));
          else {
            let bb = cb.length >> 1;
            sb.push(new Qb(cb.slice(0, bb)), new Qb(cb.slice(bb)))
          }
        } else sb.push(Wb)
      }
      replace(bb, cb, sb) {
        if (!(sb instanceof Qb)) return super.replace(bb, cb, sb);
        [bb, cb] = hb(this, bb, cb);
        let kb = Cb(this.text, Cb(sb.text, Nb(this.text, 0, bb)), cb),
          Wb = this.length + sb.length - (cb - bb);
        return kb.length <= 32 ? new Qb(kb, Wb) : eb.from(Qb.split(kb, []), Wb)
      }
      sliceString(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [bb, cb] = hb(this, bb, cb);
        let kb = "";
        for (let Wb = 0, ab = 0; Wb <= cb && ab < this.text.length; ab++) {
          let Tb = this.text[ab],
            Ub = Wb + Tb.length;
          Wb > bb && ab && (kb += sb), bb < Ub && cb > Wb && (kb += Tb.slice(Math.max(0, bb - Wb), cb - Wb)), Wb = Ub + 1
        }
        return kb
      }
      flatten(bb) {
        for (let cb of this.text) bb.push(cb)
      }
      scanIdentical() {
        return 0
      }
      static split(bb, cb) {
        let sb = [],
          kb = -1;
        for (let Wb of bb) sb.push(Wb), kb += Wb.length + 1, 32 == sb.length && (cb.push(new Qb(sb, kb)), sb = [], kb = -1);
        return kb > -1 && cb.push(new Qb(sb, kb)), cb
      }
    }
    class eb extends lb {
      constructor(bb, cb) {
        super(), this.children = bb, this.length = cb, this.lines = 0;
        for (let sb of bb) this.lines += sb.lines
      }
      lineInner(bb, cb, sb, kb) {
        for (let Wb = 0;; Wb++) {
          let ab = this.children[Wb],
            Tb = kb + ab.length,
            Ub = sb + ab.lines - 1;
          if ((cb ? Ub : Tb) >= bb) return ab.lineInner(bb, cb, sb, kb);
          kb = Tb + 1, sb = Ub + 1
        }
      }
      decompose(bb, cb, sb, kb) {
        for (let Wb = 0, ab = 0; ab <= cb && Wb < this.children.length; Wb++) {
          let Tb = this.children[Wb],
            Ub = ab + Tb.length;
          if (bb <= Ub && cb >= ab) {
            let Wb = kb & ((ab <= bb ? 1 : 0) | (Ub >= cb ? 2 : 0));
            ab >= bb && Ub <= cb && !Wb ? sb.push(Tb) : Tb.decompose(bb - ab, cb - ab, sb, Wb)
          }
          ab = Ub + 1
        }
      }
      replace(bb, cb, sb) {
        if ([bb, cb] = hb(this, bb, cb), sb.lines < this.lines)
          for (let kb = 0, Wb = 0; kb < this.children.length; kb++) {
            let ab = this.children[kb],
              Tb = Wb + ab.length;
            if (bb >= Wb && cb <= Tb) {
              let Ub = ab.replace(bb - Wb, cb - Wb, sb),
                Ib = this.lines - ab.lines + Ub.lines;
              if (Ub.lines < Ib >> 4 && Ub.lines > Ib >> 6) {
                let Wb = this.children.slice();
                return Wb[kb] = Ub, new eb(Wb, this.length - (cb - bb) + sb.length)
              }
              return super.replace(Wb, Tb, Ub)
            }
            Wb = Tb + 1
          }
        return super.replace(bb, cb, sb)
      }
      sliceString(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [bb, cb] = hb(this, bb, cb);
        let kb = "";
        for (let Wb = 0, ab = 0; Wb < this.children.length && ab <= cb; Wb++) {
          let Tb = this.children[Wb],
            Ub = ab + Tb.length;
          ab > bb && Wb && (kb += sb), bb < Ub && cb > ab && (kb += Tb.sliceString(bb - ab, cb - ab, sb)), ab = Ub + 1
        }
        return kb
      }
      flatten(bb) {
        for (let cb of this.children) cb.flatten(bb)
      }
      scanIdentical(bb, cb) {
        if (!(bb instanceof eb)) return 0;
        let sb = 0,
          [kb, Wb, ab, Tb] = cb > 0 ? [0, 0, this.children.length, bb.children.length] : [this.children.length - 1, bb.children.length - 1, -1, -1];
        for (;; kb += cb, Wb += cb) {
          if (kb == ab || Wb == Tb) return sb;
          let Ub = this.children[kb],
            Ib = bb.children[Wb];
          if (Ub != Ib) return sb + Ub.scanIdentical(Ib, cb);
          sb += Ub.length + 1
        }
      }
      static from(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bb.reduce(((bb, cb) => bb + cb.length + 1), -1),
          sb = 0;
        for (let Xb of bb) sb += Xb.lines;
        if (sb < 32) {
          let sb = [];
          for (let cb of bb) cb.flatten(sb);
          return new Qb(sb, cb)
        }
        let kb = Math.max(32, sb >> 5),
          Wb = kb << 1,
          ab = kb >> 1,
          Tb = [],
          Ub = 0,
          Ib = -1,
          Hb = [];

        function fb(bb) {
          let cb;
          if (bb.lines > Wb && bb instanceof eb)
            for (let sb of bb.children) fb(sb);
          else bb.lines > ab && (Ub > ab || !Ub) ? (Mb(), Tb.push(bb)) : bb instanceof Qb && Ub && (cb = Hb[Hb.length - 1]) instanceof Qb && bb.lines + cb.lines <= 32 ? (Ub += bb.lines, Ib += bb.length + 1, Hb[Hb.length - 1] = new Qb(cb.text.concat(bb.text), cb.length + 1 + bb.length)) : (Ub + bb.lines > kb && Mb(), Ub += bb.lines, Ib += bb.length + 1, Hb.push(bb))
        }

        function Mb() {
          0 != Ub && (Tb.push(1 == Hb.length ? Hb[0] : eb.from(Hb, Ib)), Ib = -1, Ub = Hb.length = 0)
        }
        for (let Xb of bb) fb(Xb);
        return Mb(), 1 == Tb.length ? Tb[0] : new eb(Tb, cb)
      }
    }

    function Cb(bb, cb) {
      let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e9;
      for (let Wb = 0, ab = 0, Tb = !0; ab < bb.length && Wb <= kb; ab++) {
        let Ub = bb[ab],
          Ib = Wb + Ub.length;
        Ib >= sb && (Ib > kb && (Ub = Ub.slice(0, kb - Wb)), Wb < sb && (Ub = Ub.slice(sb - Wb)), Tb ? (cb[cb.length - 1] += Ub, Tb = !1) : cb.push(Ub)), Wb = Ib + 1
      }
      return cb
    }

    function Nb(bb, cb, sb) {
      return Cb(bb, [""], cb, sb)
    }
    lb.empty = new Qb([""], 0);
    class Vb {
      constructor(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.dir = cb, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [bb], this.offsets = [cb > 0 ? 1 : (bb instanceof Qb ? bb.text.length : bb.children.length) << 1]
      }
      nextInner(bb, cb) {
        for (this.done = this.lineBreak = !1;;) {
          let sb = this.nodes.length - 1,
            kb = this.nodes[sb],
            Wb = this.offsets[sb],
            ab = Wb >> 1,
            Tb = kb instanceof Qb ? kb.text.length : kb.children.length;
          if (ab == (cb > 0 ? Tb : 0)) {
            if (0 == sb) return this.done = !0, this.value = "", this;
            cb > 0 && this.offsets[sb - 1]++, this.nodes.pop(), this.offsets.pop()
          } else if ((1 & Wb) == (cb > 0 ? 0 : 1)) {
            if (this.offsets[sb] += cb, 0 == bb) return this.lineBreak = !0, this.value = "\n", this;
            bb--
          } else if (kb instanceof Qb) {
            let Wb = kb.text[ab + (cb < 0 ? -1 : 0)];
            if (this.offsets[sb] += cb, Wb.length > Math.max(0, bb)) return this.value = 0 == bb ? Wb : cb > 0 ? Wb.slice(bb) : Wb.slice(0, Wb.length - bb), this;
            bb -= Wb.length
          } else {
            let Wb = kb.children[ab + (cb < 0 ? -1 : 0)];
            bb > Wb.length ? (bb -= Wb.length, this.offsets[sb] += cb) : (cb < 0 && this.offsets[sb]--, this.nodes.push(Wb), this.offsets.push(cb > 0 ? 1 : (Wb instanceof Qb ? Wb.text.length : Wb.children.length) << 1))
          }
        }
      }
      next() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return bb < 0 && (this.nextInner(-bb, -this.dir), bb = this.value.length), this.nextInner(bb, this.dir)
      }
    }
    class Lb {
      constructor(bb, cb, sb) {
        this.value = "", this.done = !1, this.cursor = new Vb(bb, cb > sb ? -1 : 1), this.pos = cb > sb ? bb.length : 0, this.from = Math.min(cb, sb), this.to = Math.max(cb, sb)
      }
      nextInner(bb, cb) {
        if (cb < 0 ? this.pos <= this.from : this.pos >= this.to) return this.value = "", this.done = !0, this;
        bb += Math.max(0, cb < 0 ? this.pos - this.to : this.from - this.pos);
        let sb = cb < 0 ? this.pos - this.from : this.to - this.pos;
        bb > sb && (bb = sb), sb -= bb;
        let {
          value: kb
        } = this.cursor.next(bb);
        return this.pos += (kb.length + bb) * cb, this.value = kb.length <= sb ? kb : cb < 0 ? kb.slice(kb.length - sb) : kb.slice(0, sb), this.done = !this.value, this
      }
      next() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return bb < 0 ? bb = Math.max(bb, this.from - this.pos) : bb > 0 && (bb = Math.min(bb, this.to - this.pos)), this.nextInner(bb, this.cursor.dir)
      }
      get lineBreak() {
        return this.cursor.lineBreak && "" != this.value
      }
    }
    class ub {
      constructor(bb) {
        this.inner = bb, this.afterBreak = !0, this.value = "", this.done = !1
      }
      next() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          {
            done: cb,
            lineBreak: sb,
            value: kb
          } = this.inner.next(bb);
        return cb && this.afterBreak ? (this.value = "", this.afterBreak = !1) : cb ? (this.done = !0, this.value = "") : sb ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = kb, this.afterBreak = !1), this
      }
      get lineBreak() {
        return !1
      }
    }
    "undefined" != typeof Symbol && (lb.prototype[Symbol.iterator] = function() {
      return this.iter()
    }, Vb.prototype[Symbol.iterator] = Lb.prototype[Symbol.iterator] = ub.prototype[Symbol.iterator] = function() {
      return this
    });
    class Yb {
      constructor(bb, cb, sb, kb) {
        this.from = bb, this.to = cb, this.number = sb, this.text = kb
      }
      get length() {
        return this.to - this.from
      }
    }

    function hb(bb, cb, sb) {
      return [cb = Math.max(0, Math.min(bb.length, cb)), Math.max(cb, Math.min(bb.length, sb))]
    }

    function Jb(bb, cb) {
      return Ib(bb, cb, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function gb(bb, cb) {
      let sb = bb.charCodeAt(cb);
      if (!((kb = sb) >= 55296 && kb < 56320) || cb + 1 == bb.length) return sb;
      var kb;
      let Wb = bb.charCodeAt(cb + 1);
      return function(bb) {
        return bb >= 56320 && bb < 57344
      }(Wb) ? Wb - 56320 + (sb - 55296 << 10) + 65536 : sb
    }

    function Bb(bb) {
      return bb <= 65535 ? String.fromCharCode(bb) : (bb -= 65536, String.fromCharCode(55296 + (bb >> 10), 56320 + (1023 & bb)))
    }

    function tb(bb) {
      return bb < 65536 ? 1 : 2
    }
    const yb = /\r\n?|\n/;
    var Pb = function(bb) {
      return bb[bb.Simple = 0] = "Simple", bb[bb.TrackDel = 1] = "TrackDel", bb[bb.TrackBefore = 2] = "TrackBefore", bb[bb.TrackAfter = 3] = "TrackAfter", bb
    }(Pb || (Pb = {}));
    class Db {
      constructor(bb) {
        this.sections = bb
      }
      get length() {
        let bb = 0;
        for (let cb = 0; cb < this.sections.length; cb += 2) bb += this.sections[cb];
        return bb
      }
      get newLength() {
        let bb = 0;
        for (let cb = 0; cb < this.sections.length; cb += 2) {
          let sb = this.sections[cb + 1];
          bb += sb < 0 ? this.sections[cb] : sb
        }
        return bb
      }
      get empty() {
        return 0 == this.sections.length || 2 == this.sections.length && this.sections[1] < 0
      }
      iterGaps(bb) {
        for (let cb = 0, sb = 0, kb = 0; cb < this.sections.length;) {
          let Wb = this.sections[cb++],
            ab = this.sections[cb++];
          ab < 0 ? (bb(sb, kb, Wb), kb += Wb) : kb += ab, sb += Wb
        }
      }
      iterChangedRanges(bb) {
        Gb(this, bb, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get invertedDesc() {
        let bb = [];
        for (let cb = 0; cb < this.sections.length;) {
          let sb = this.sections[cb++],
            kb = this.sections[cb++];
          kb < 0 ? bb.push(sb, kb) : bb.push(kb, sb)
        }
        return new Db(bb)
      }
      composeDesc(bb) {
        return this.empty ? bb : bb.empty ? this : Zb(this, bb)
      }
      mapDesc(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return bb.empty ? this : Kb(this, bb, cb)
      }
      mapPos(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Pb.Simple,
          kb = 0,
          Wb = 0;
        for (let ab = 0; ab < this.sections.length;) {
          let Tb = this.sections[ab++],
            Ub = this.sections[ab++],
            Ib = kb + Tb;
          if (Ub < 0) {
            if (Ib > bb) return Wb + (bb - kb);
            Wb += Tb
          } else {
            if (sb != Pb.Simple && Ib >= bb && (sb == Pb.TrackDel && kb < bb && Ib > bb || sb == Pb.TrackBefore && kb < bb || sb == Pb.TrackAfter && Ib > bb)) return null;
            if (Ib > bb || Ib == bb && cb < 0 && !Tb) return bb == kb || cb < 0 ? Wb : Wb + Ub;
            Wb += Ub
          }
          kb = Ib
        }
        if (bb > kb) throw new RangeError(`Position ${bb} is out of range for changeset of length ${kb}`);
        return Wb
      }
      touchesRange(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bb;
        for (let sb = 0, kb = 0; sb < this.sections.length && kb <= cb;) {
          let Wb = kb + this.sections[sb++];
          if (this.sections[sb++] >= 0 && kb <= cb && Wb >= bb) return !(kb < bb && Wb > cb) || "cover";
          kb = Wb
        }
        return !1
      }
      toString() {
        let bb = "";
        for (let cb = 0; cb < this.sections.length;) {
          let sb = this.sections[cb++],
            kb = this.sections[cb++];
          bb += (bb ? " " : "") + sb + (kb >= 0 ? ":" + kb : "")
        }
        return bb
      }
      toJSON() {
        return this.sections
      }
      static fromJSON(bb) {
        if (!Array.isArray(bb) || bb.length % 2 || bb.some((bb => "number" != typeof bb))) throw new RangeError("Invalid JSON representation of ChangeDesc");
        return new Db(bb)
      }
      static create(bb) {
        return new Db(bb)
      }
    }
    class Eb extends Db {
      constructor(bb, cb) {
        super(bb), this.inserted = cb
      }
      apply(bb) {
        if (this.length != bb.length) throw new RangeError("Applying change set to a document with the wrong length");
        return Gb(this, ((cb, sb, kb, Wb, ab) => bb = bb.replace(kb, kb + (sb - cb), ab)), !1), bb
      }
      mapDesc(bb) {
        return Kb(this, bb, arguments.length > 1 && void 0 !== arguments[1] && arguments[1], !0)
      }
      invert(bb) {
        let cb = this.sections.slice(),
          sb = [];
        for (let kb = 0, Wb = 0; kb < cb.length; kb += 2) {
          let ab = cb[kb],
            Tb = cb[kb + 1];
          if (Tb >= 0) {
            cb[kb] = Tb, cb[kb + 1] = ab;
            let Ub = kb >> 1;
            for (; sb.length < Ub;) sb.push(lb.empty);
            sb.push(ab ? bb.slice(Wb, Wb + ab) : lb.empty)
          }
          Wb += ab
        }
        return new Eb(cb, sb)
      }
      compose(bb) {
        return this.empty ? bb : bb.empty ? this : Zb(this, bb, !0)
      }
      map(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return bb.empty ? this : Kb(this, bb, cb, !0)
      }
      iterChanges(bb) {
        Gb(this, bb, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get desc() {
        return Db.create(this.sections)
      }
      filter(bb) {
        let cb = [],
          sb = [],
          kb = [],
          Wb = new zb(this);
        bb: for (let ab = 0, Tb = 0;;) {
          let Ub = ab == bb.length ? 1e9 : bb[ab++];
          for (; Tb < Ub || Tb == Ub && 0 == Wb.len;) {
            if (Wb.done) break bb;
            let bb = Math.min(Wb.len, Ub - Tb);
            ib(kb, bb, -1);
            let ab = -1 == Wb.ins ? -1 : 0 == Wb.off ? Wb.ins : 0;
            ib(cb, bb, ab), ab > 0 && Ob(sb, cb, Wb.text), Wb.forward(bb), Tb += bb
          }
          let Ib = bb[ab++];
          for (; Tb < Ib;) {
            if (Wb.done) break bb;
            let bb = Math.min(Wb.len, Ib - Tb);
            ib(cb, bb, -1), ib(kb, bb, -1 == Wb.ins ? -1 : 0 == Wb.off ? Wb.ins : 0), Wb.forward(bb), Tb += bb
          }
        }
        return {
          changes: new Eb(cb, sb),
          filtered: Db.create(kb)
        }
      }
      toJSON() {
        let bb = [];
        for (let cb = 0; cb < this.sections.length; cb += 2) {
          let sb = this.sections[cb],
            kb = this.sections[cb + 1];
          kb < 0 ? bb.push(sb) : 0 == kb ? bb.push([sb]) : bb.push([sb].concat(this.inserted[cb >> 1].toJSON()))
        }
        return bb
      }
      static of (bb, cb, sb) {
        let kb = [],
          Wb = [],
          ab = 0,
          Tb = null;

        function Ub() {
          if (!(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && !kb.length) return;
          ab < cb && ib(kb, cb - ab, -1);
          let bb = new Eb(kb, Wb);
          Tb = Tb ? Tb.compose(bb.map(Tb)) : bb, kb = [], Wb = [], ab = 0
        }
        return function bb(Ib) {
          if (Array.isArray(Ib))
            for (let cb of Ib) bb(cb);
          else if (Ib instanceof Eb) {
            if (Ib.length != cb) throw new RangeError(`Mismatched change set length (got ${Ib.length}, expected ${cb})`);
            Ub(), Tb = Tb ? Tb.compose(Ib.map(Tb)) : Ib
          } else {
            let {
              from: bb,
              to: Tb = bb,
              insert: Hb
            } = Ib;
            if (bb > Tb || bb < 0 || Tb > cb) throw new RangeError(`Invalid change range ${bb} to ${Tb} (in doc of length ${cb})`);
            let fb = Hb ? "string" == typeof Hb ? lb.of(Hb.split(sb || yb)) : Hb : lb.empty,
              Mb = fb.length;
            if (bb == Tb && 0 == Mb) return;
            bb < ab && Ub(), bb > ab && ib(kb, bb - ab, -1), ib(kb, Tb - bb, Mb), Ob(Wb, kb, fb), ab = Tb
          }
        }(bb), Ub(!Tb), Tb
      }
      static empty(bb) {
        return new Eb(bb ? [bb, -1] : [], [])
      }
      static fromJSON(bb) {
        if (!Array.isArray(bb)) throw new RangeError("Invalid JSON representation of ChangeSet");
        let cb = [],
          sb = [];
        for (let kb = 0; kb < bb.length; kb++) {
          let Wb = bb[kb];
          if ("number" == typeof Wb) cb.push(Wb, -1);
          else {
            if (!Array.isArray(Wb) || "number" != typeof Wb[0] || Wb.some(((bb, cb) => cb && "string" != typeof bb))) throw new RangeError("Invalid JSON representation of ChangeSet");
            if (1 == Wb.length) cb.push(Wb[0], 0);
            else {
              for (; sb.length < kb;) sb.push(lb.empty);
              sb[kb] = lb.of(Wb.slice(1)), cb.push(Wb[0], sb[kb].length)
            }
          }
        }
        return new Eb(cb, sb)
      }
      static createSet(bb, cb) {
        return new Eb(bb, cb)
      }
    }

    function ib(bb, cb, sb) {
      let kb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (0 == cb && sb <= 0) return;
      let Wb = bb.length - 2;
      Wb >= 0 && sb <= 0 && sb == bb[Wb + 1] ? bb[Wb] += cb : Wb >= 0 && 0 == cb && 0 == bb[Wb] ? bb[Wb + 1] += sb : kb ? (bb[Wb] += cb, bb[Wb + 1] += sb) : bb.push(cb, sb)
    }

    function Ob(bb, cb, sb) {
      if (0 == sb.length) return;
      let kb = cb.length - 2 >> 1;
      if (kb < bb.length) bb[bb.length - 1] = bb[bb.length - 1].append(sb);
      else {
        for (; bb.length < kb;) bb.push(lb.empty);
        bb.push(sb)
      }
    }

    function Gb(bb, cb, sb) {
      let kb = bb.inserted;
      for (let Wb = 0, ab = 0, Tb = 0; Tb < bb.sections.length;) {
        let Ub = bb.sections[Tb++],
          Ib = bb.sections[Tb++];
        if (Ib < 0) Wb += Ub, ab += Ub;
        else {
          let Hb = Wb,
            fb = ab,
            Mb = lb.empty;
          for (; Hb += Ub, fb += Ib, Ib && kb && (Mb = Mb.append(kb[Tb - 2 >> 1])), !(sb || Tb == bb.sections.length || bb.sections[Tb + 1] < 0);) Ub = bb.sections[Tb++], Ib = bb.sections[Tb++];
          cb(Wb, Hb, ab, fb, Mb), Wb = Hb, ab = fb
        }
      }
    }

    function Kb(bb, cb, sb) {
      let kb = [],
        Wb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3] ? [] : null,
        ab = new zb(bb),
        Tb = new zb(cb),
        Ub = 0;
      for (let Ib = -1;;) {
        if (++Ub > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - likely malformed ChangeSet");
        if (ab.done && Tb.len || Tb.done && ab.len) throw new Error("Mismatched change set lengths");
        if (-1 == ab.ins && -1 == Tb.ins) {
          let bb = Math.min(ab.len, Tb.len);
          ib(kb, bb, -1), ab.forward(bb), Tb.forward(bb)
        } else if (Tb.ins >= 0 && (ab.ins < 0 || Ib == ab.i || 0 == ab.off && (Tb.len < ab.len || Tb.len == ab.len && !sb))) {
          let bb = Tb.len;
          for (ib(kb, Tb.ins, -1); bb;) {
            if (++Ub > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-b");
            let cb = Math.min(ab.len, bb);
            ab.ins >= 0 && Ib < ab.i && ab.len <= cb && (ib(kb, 0, ab.ins), Wb && Ob(Wb, kb, ab.text), Ib = ab.i), ab.forward(cb), bb -= cb
          }
          Tb.next()
        } else {
          if (!(ab.ins >= 0)) {
            if (ab.done && Tb.done) return Wb ? Eb.createSet(kb, Wb) : Db.create(kb);
            throw new Error("Mismatched change set lengths")
          } {
            let bb = 0,
              cb = ab.len;
            for (; cb;) {
              if (++Ub > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-a");
              if (-1 == Tb.ins) {
                let sb = Math.min(cb, Tb.len);
                bb += sb, cb -= sb, Tb.forward(sb)
              } else {
                if (!(0 == Tb.ins && Tb.len < cb)) break;
                cb -= Tb.len, Tb.next()
              }
            }
            ib(kb, bb, Ib < ab.i ? ab.ins : 0), Wb && Ib < ab.i && Ob(Wb, kb, ab.text), Ib = ab.i, ab.forward(ab.len - cb)
          }
        }
      }
    }

    function Zb(bb, cb) {
      let sb = [],
        kb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? [] : null,
        Wb = new zb(bb),
        ab = new zb(cb),
        Tb = 0;
      for (let Ub = !1;;) {
        if (++Tb > 2e6) throw new Error("BLOXD CODEMIRROR: composeSets exceeded max iterations - likely malformed ChangeSet");
        if (Wb.done && ab.done) return kb ? Eb.createSet(sb, kb) : Db.create(sb);
        if (0 == Wb.ins) ib(sb, Wb.len, 0, Ub), Wb.next();
        else if (0 != ab.len || ab.done) {
          if (Wb.done || ab.done) throw new Error("Mismatched change set lengths");
          {
            let bb = Math.min(Wb.len2, ab.len),
              cb = sb.length;
            if (-1 == Wb.ins) {
              let cb = -1 == ab.ins ? -1 : ab.off ? 0 : ab.ins;
              ib(sb, bb, cb, Ub), kb && cb && Ob(kb, sb, ab.text)
            } else - 1 == ab.ins ? (ib(sb, Wb.off ? 0 : Wb.len, bb, Ub), kb && Ob(kb, sb, Wb.textBit(bb))) : (ib(sb, Wb.off ? 0 : Wb.len, ab.off ? 0 : ab.ins, Ub), kb && !ab.off && Ob(kb, sb, ab.text));
            Ub = (Wb.ins > bb || ab.ins >= 0 && ab.len > bb) && (Ub || sb.length > cb), Wb.forward2(bb), ab.forward(bb)
          }
        } else ib(sb, 0, ab.ins, Ub), kb && Ob(kb, sb, ab.text), ab.next()
      }
    }
    class zb {
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
        } = this.set, cb = this.i - 2 >> 1;
        return cb >= bb.length ? lb.empty : bb[cb]
      }
      textBit(bb) {
        let {
          inserted: cb
        } = this.set, sb = this.i - 2 >> 1;
        return sb >= cb.length && !bb ? lb.empty : cb[sb].slice(this.off, null == bb ? void 0 : this.off + bb)
      }
      forward(bb) {
        bb == this.len ? this.next() : (this.len -= bb, this.off += bb)
      }
      forward2(bb) {
        -1 == this.ins ? this.forward(bb) : bb == this.ins ? this.next() : (this.ins -= bb, this.off += bb)
      }
    }
    class qb {
      constructor(bb, cb, sb) {
        this.from = bb, this.to = cb, this.flags = sb
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
        let cb, sb, kb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return this.empty ? cb = sb = bb.mapPos(this.from, kb) : (cb = bb.mapPos(this.from, 1), sb = bb.mapPos(this.to, -1)), cb == this.from && sb == this.to ? this : new qb(cb, sb, this.flags)
      }
      extend(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bb,
          sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (bb <= this.anchor && cb >= this.anchor) return db.range(bb, cb, void 0, void 0, sb);
        let kb = Math.abs(bb - this.anchor) > Math.abs(cb - this.anchor) ? bb : cb;
        return db.range(this.anchor, kb, void 0, void 0, sb)
      }
      eq(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.anchor == bb.anchor && this.head == bb.head && this.goalColumn == bb.goalColumn && (!cb || !this.empty || this.assoc == bb.assoc)
      }
      toJSON() {
        return {
          anchor: this.anchor,
          head: this.head
        }
      }
      static fromJSON(bb) {
        if (!bb || "number" != typeof bb.anchor || "number" != typeof bb.head) throw new RangeError("Invalid JSON representation for SelectionRange");
        return db.range(bb.anchor, bb.head)
      }
      static create(bb, cb, sb) {
        return new qb(bb, cb, sb)
      }
    }
    class db {
      constructor(bb, cb) {
        this.uQ = bb, this.mainIndex = cb
      }
      map(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return bb.empty ? this : db.create(this.uQ.map((sb => sb.map(bb, cb))), this.mainIndex)
      }
      eq(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.uQ.length != bb.uQ.length || this.mainIndex != bb.mainIndex) return !1;
        for (let sb = 0; sb < this.uQ.length; sb++)
          if (!this.uQ[sb].eq(bb.uQ[sb], cb)) return !1;
        return !0
      }
      get main() {
        return this.uQ[this.mainIndex]
      }
      asSingle() {
        return 1 == this.uQ.length ? this : new db([this.main], 0)
      }
      addRange(bb) {
        let cb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return db.create([bb].concat(this.uQ), cb ? 0 : this.mainIndex + 1)
      }
      replaceRange(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.mainIndex,
          sb = this.uQ.slice();
        return sb[cb] = bb, db.create(sb, this.mainIndex)
      }
      toJSON() {
        return {
          uQ: this.uQ.map((bb => bb.toJSON())),
          main: this.mainIndex
        }
      }
      static fromJSON(bb) {
        if (!bb || !Array.isArray(bb.uQ) || "number" != typeof bb.main || bb.main >= bb.uQ.length) throw new RangeError("Invalid JSON representation for EditorSelection");
        return new db(bb.uQ.map((bb => qb.fromJSON(bb))), bb.main)
      }
      static single(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bb;
        return new db([db.range(bb, cb)], 0)
      }
      static create(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (0 == bb.length) throw new RangeError("A selection needs at least one range");
        for (let sb = 0, kb = 0; kb < bb.length; kb++) {
          let Wb = bb[kb];
          if (Wb.empty ? Wb.from <= sb : Wb.from < sb) return db.normalized(bb.slice(), cb);
          sb = Wb.to
        }
        return new db(bb, cb)
      }
      static cursor(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          sb = arguments.length > 2 ? arguments[2] : void 0,
          kb = arguments.length > 3 ? arguments[3] : void 0;
        return qb.create(bb, bb, (0 == cb ? 0 : cb < 0 ? 8 : 16) | (null == sb ? 7 : Math.min(6, sb)) | (null !== kb && void 0 !== kb ? kb : 16777215) << 6)
      }
      static range(bb, cb, sb, kb, Wb) {
        let ab = (null !== sb && void 0 !== sb ? sb : 16777215) << 6 | (null == kb ? 7 : Math.min(6, kb));
        return Wb || bb == cb || (Wb = cb < bb ? 1 : -1), cb < bb ? qb.create(cb, bb, 48 | ab) : qb.create(bb, cb, (Wb ? Wb < 0 ? 8 : 16 : 0) | ab)
      }
      static normalized(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          sb = bb[cb];
        bb.sort(((bb, cb) => bb.from - cb.from)), cb = bb.indexOf(sb);
        for (let kb = 1; kb < bb.length; kb++) {
          let sb = bb[kb],
            Wb = bb[kb - 1];
          if (sb.empty ? sb.from <= Wb.to : sb.from < Wb.to) {
            let ab = Wb.from,
              Tb = Math.max(sb.to, Wb.to);
            kb <= cb && cb--, bb.splice(--kb, 2, sb.anchor > sb.head ? db.range(Tb, ab) : db.range(ab, Tb))
          }
        }
        return new db(bb, cb)
      }
    }

    function Ab(bb, cb) {
      for (let sb of bb.uQ)
        if (sb.to > cb) throw new RangeError("Selection points outside of document")
    }
    let wb = 0;
    class rb {
      constructor(bb, cb, sb, kb, Wb) {
        this.combine = bb, this.compareInput = cb, this.compare = sb, this.isStatic = kb, this.id = wb++, this.default = bb([]), this.extensions = "function" == typeof Wb ? Wb(this) : Wb
      }
      get reader() {
        return this
      }
      static define() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return new rb(bb.combine || (bb => bb), bb.compareInput || ((bb, cb) => bb === cb), bb.compare || (bb.combine ? (bb, cb) => bb === cb : ob), !!bb.static, bb.enables)
      }
      of(bb) {
        return new Sb([], this, 0, bb)
      }
      compute(bb, cb) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new Sb(bb, this, 1, cb)
      }
      computeN(bb, cb) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new Sb(bb, this, 2, cb)
      }
      from(bb, cb) {
        return cb || (cb = bb => bb), this.compute([bb], (sb => cb(sb.field(bb))))
      }
    }

    function ob(bb, cb) {
      return bb == cb || bb.length == cb.length && bb.every(((bb, sb) => bb === cb[sb]))
    }
    class Sb {
      constructor(bb, cb, sb, kb) {
        this.dependencies = bb, this.facet = cb, this.type = sb, this.value = kb, this.id = wb++
      }
      dynamicSlot(bb) {
        var cb;
        let sb = this.value,
          kb = this.facet.compareInput,
          Wb = this.id,
          ab = bb[Wb] >> 1,
          Tb = 2 == this.type,
          Ub = !1,
          Ib = !1,
          Hb = [];
        for (let fb of this.dependencies) "doc" == fb ? Ub = !0 : "selection" == fb ? Ib = !0 : 0 == (1 & (null !== (cb = bb[fb.id]) && void 0 !== cb ? cb : 1)) && Hb.push(bb[fb.id]);
        return {
          create: bb => (bb.values[ab] = sb(bb), 1),
          update(bb, cb) {
            if (Ub && cb.docChanged || Ib && (cb.docChanged || cb.selection) || vb(bb, Hb)) {
              let cb = sb(bb);
              if (Tb ? !Rb(cb, bb.values[ab], kb) : !kb(cb, bb.values[ab])) return bb.values[ab] = cb, 1
            }
            return 0
          },
          reconfigure: (bb, cb) => {
            let Ub, Ib = cb.config.address[Wb];
            if (null != Ib) {
              let Wb = fc(cb, Ib);
              if (this.dependencies.every((sb => sb instanceof rb ? cb.facet(sb) === bb.facet(sb) : !(sb instanceof jb) || cb.field(sb, !1) == bb.field(sb, !1))) || (Tb ? Rb(Ub = sb(bb), Wb, kb) : kb(Ub = sb(bb), Wb))) return bb.values[ab] = Wb, 0
            } else Ub = sb(bb);
            return bb.values[ab] = Ub, 1
          }
        }
      }
    }

    function Rb(bb, cb, sb) {
      if (bb.length != cb.length) return !1;
      for (let kb = 0; kb < bb.length; kb++)
        if (!sb(bb[kb], cb[kb])) return !1;
      return !0
    }

    function vb(bb, cb) {
      let sb = !1;
      for (let kb of cb) 1 & Hc(bb, kb) && (sb = !0);
      return sb
    }

    function Fb(bb, cb, sb) {
      let kb = sb.map((cb => bb[cb.id])),
        Wb = sb.map((bb => bb.type)),
        ab = kb.filter((bb => !(1 & bb))),
        Tb = bb[cb.id] >> 1;

      function Ub(bb) {
        let sb = [];
        for (let cb = 0; cb < kb.length; cb++) {
          let ab = fc(bb, kb[cb]);
          if (2 == Wb[cb])
            for (let bb of ab) sb.push(bb);
          else sb.push(ab)
        }
        return cb.combine(sb)
      }
      return {
        create(bb) {
          for (let cb of kb) Hc(bb, cb);
          return bb.values[Tb] = Ub(bb), 1
        },
        update(bb, sb) {
          if (!vb(bb, ab)) return 0;
          let kb = Ub(bb);
          return cb.compare(kb, bb.values[Tb]) ? 0 : (bb.values[Tb] = kb, 1)
        },
        reconfigure(bb, Wb) {
          let ab = vb(bb, kb),
            Ib = Wb.config.facets[cb.id],
            Hb = Wb.facet(cb);
          if (Ib && !ab && ob(sb, Ib)) return bb.values[Tb] = Hb, 0;
          let fb = Ub(bb);
          return cb.compare(fb, Hb) ? (bb.values[Tb] = Hb, 0) : (bb.values[Tb] = fb, 1)
        }
      }
    }
    const xb = rb.define({
      static: !0
    });
    class jb {
      constructor(bb, cb, sb, kb, Wb) {
        this.id = bb, this.createF = cb, this.updateF = sb, this.compareF = kb, this.spec = Wb, this.provides = void 0
      }
      static define(bb) {
        let cb = new jb(wb++, bb.create, bb.update, bb.compare || ((bb, cb) => bb === cb), bb);
        return bb.provide && (cb.provides = bb.provide(cb)), cb
      }
      create(bb) {
        let cb = bb.facet(xb).find((bb => bb.field == this));
        return ((null === cb || void 0 === cb ? void 0 : cb.create) || this.createF)(bb)
      }
      slot(bb) {
        let cb = bb[this.id] >> 1;
        return {
          create: bb => (bb.values[cb] = this.create(bb), 1),
          update: (bb, sb) => {
            let kb = bb.values[cb],
              Wb = this.updateF(kb, sb);
            return this.compareF(kb, Wb) ? 0 : (bb.values[cb] = Wb, 1)
          },
          reconfigure: (bb, sb) => {
            let kb, Wb = bb.facet(xb),
              ab = sb.facet(xb);
            return (kb = Wb.find((bb => bb.field == this))) && kb != ab.find((bb => bb.field == this)) ? (bb.values[cb] = kb.create(bb), 1) : null != sb.config.address[this.id] ? (bb.values[cb] = sb.field(this), 0) : (bb.values[cb] = this.create(bb), 1)
          }
        }
      }
      init(bb) {
        return [this, xb.of({
          field: this,
          create: bb
        })]
      }
      get extension() {
        return this
      }
    }
    const pb = 4,
      bc = 3,
      cc = 2,
      sc = 1;

    function kc(bb) {
      return cb => new ac(cb, bb)
    }
    const Wc = {
      highest: kc(0),
      high: kc(sc),
      default: kc(cc),
      low: kc(bc),
      lowest: kc(pb)
    };
    class ac {
      constructor(bb, cb) {
        this.inner = bb, this.prec = cb
      }
    }
    class Tc {
      of(bb) {
        return new Uc(this, bb)
      }
      reconfigure(bb) {
        return Tc.reconfigure.of({
          compartment: this,
          extension: bb
        })
      }
      get(bb) {
        return bb.config.compartments.get(this)
      }
    }
    class Uc {
      constructor(bb, cb) {
        this.compartment = bb, this.inner = cb
      }
    }
    class Ic {
      constructor(bb, cb, sb, kb, Wb, ab) {
        for (this.base = bb, this.compartments = cb, this.dynamicSlots = sb, this.address = kb, this.staticValues = Wb, this.facets = ab, this.statusTemplate = []; this.statusTemplate.length < sb.length;) this.statusTemplate.push(0)
      }
      staticFacet(bb) {
        let cb = this.address[bb.id];
        return null == cb ? bb.default : this.staticValues[cb >> 1]
      }
      static resolve(bb, cb, sb) {
        let kb = [],
          Wb = Object.create(null),
          ab = new Map;
        for (let Mb of function(bb, cb, sb) {
            let kb = [
                [],
                [],
                [],
                [],
                []
              ],
              Wb = new Map;

            function ab(bb, Tb) {
              let Ub = Wb.get(bb);
              if (null != Ub) {
                if (Ub <= Tb) return;
                let cb = kb[Ub].indexOf(bb);
                cb > -1 && kb[Ub].splice(cb, 1), bb instanceof Uc && sb.delete(bb.compartment)
              }
              if (Wb.set(bb, Tb), Array.isArray(bb))
                for (let cb of bb) ab(cb, Tb);
              else if (bb instanceof Uc) {
                if (sb.has(bb.compartment)) throw new RangeError("Duplicate use of compartment in extensions");
                let kb = cb.get(bb.compartment) || bb.inner;
                sb.set(bb.compartment, kb), ab(kb, Tb)
              } else if (bb instanceof ac) ab(bb.inner, bb.prec);
              else if (bb instanceof jb) kb[Tb].push(bb), bb.provides && ab(bb.provides, Tb);
              else if (bb instanceof Sb) kb[Tb].push(bb), bb.facet.extensions && ab(bb.facet.extensions, cc);
              else {
                let cb = bb.extension;
                if (!cb) throw new Error(`Unrecognized extension value in extension set (${bb}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
                ab(cb, Tb)
              }
            }
            return ab(bb, cc), kb.reduce(((bb, cb) => bb.concat(cb)))
          }(bb, cb, ab)) Mb instanceof jb ? kb.push(Mb) : (Wb[Mb.facet.id] || (Wb[Mb.facet.id] = [])).push(Mb);
        let Tb = Object.create(null),
          Ub = [],
          Ib = [];
        for (let Mb of kb) Tb[Mb.id] = Ib.length << 1, Ib.push((bb => Mb.slot(bb)));
        let Hb = null === sb || void 0 === sb ? void 0 : sb.config.facets;
        for (let Mb in Wb) {
          let bb = Wb[Mb],
            cb = bb[0].facet,
            kb = Hb && Hb[Mb] || [];
          if (bb.every((bb => 0 == bb.type)))
            if (Tb[cb.id] = Ub.length << 1 | 1, ob(kb, bb)) Ub.push(sb.facet(cb));
            else {
              let kb = cb.combine(bb.map((bb => bb.value)));
              Ub.push(sb && cb.compare(kb, sb.facet(cb)) ? sb.facet(cb) : kb)
            }
          else {
            for (let cb of bb) 0 == cb.type ? (Tb[cb.id] = Ub.length << 1 | 1, Ub.push(cb.value)) : (Tb[cb.id] = Ib.length << 1, Ib.push((bb => cb.dynamicSlot(bb))));
            Tb[cb.id] = Ib.length << 1, Ib.push((sb => Fb(sb, cb, bb)))
          }
        }
        let fb = Ib.map((bb => bb(Tb)));
        return new Ic(bb, ab, fb, Tb, Ub, Wb)
      }
    }

    function Hc(bb, cb) {
      if (1 & cb) return 2;
      let sb = cb >> 1,
        kb = bb.status[sb];
      if (4 == kb) throw new Error("Cyclic dependency between fields and/or facets");
      if (2 & kb) return kb;
      bb.status[sb] = 4;
      let Wb = bb.computeSlot(bb, bb.config.dynamicSlots[sb]);
      return bb.status[sb] = 2 | Wb
    }

    function fc(bb, cb) {
      return 1 & cb ? bb.config.staticValues[cb >> 1] : bb.values[cb >> 1]
    }
    const Mc = rb.define(),
      Xc = rb.define({
        combine: bb => bb.some((bb => bb)),
        static: !0
      }),
      nc = rb.define({
        combine: bb => bb.length ? bb[0] : void 0,
        static: !0
      }),
      mc = rb.define(),
      lc = rb.define(),
      Qc = rb.define(),
      ec = rb.define({
        combine: bb => !!bb.length && bb[0]
      });
    class Cc {
      constructor(bb, cb) {
        this.type = bb, this.value = cb
      }
      static define() {
        return new Nc
      }
    }
    class Nc {
      of(bb) {
        return new Cc(this, bb)
      }
    }
    class Vc {
      constructor(bb) {
        this.map = bb
      }
      of(bb) {
        return new Lc(this, bb)
      }
    }
    class Lc {
      constructor(bb, cb) {
        this.type = bb, this.value = cb
      }
      map(bb) {
        let cb = this.type.map(this.value, bb);
        return void 0 === cb ? void 0 : cb == this.value ? this : new Lc(this.type, cb)
      }
      is(bb) {
        return this.type == bb
      }
      static define() {
        return new Vc((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).map || (bb => bb))
      }
      static mapEffects(bb, cb) {
        if (!bb.length) return bb;
        let sb = [];
        for (let kb of bb) {
          let bb = kb.map(cb);
          bb && sb.push(bb)
        }
        return sb
      }
    }
    Lc.reconfigure = Lc.define(), Lc.appendConfig = Lc.define();
    class uc {
      constructor(bb, cb, sb, kb, Wb, ab) {
        this.startState = bb, this.changes = cb, this.selection = sb, this.effects = kb, this.annotations = Wb, this.scrollIntoView = ab, this._doc = null, this._state = null, sb && Ab(sb, cb.newLength), Wb.some((bb => bb.type == uc.time)) || (this.annotations = Wb.concat(uc.time.of(Date.now())))
      }
      static create(bb, cb, sb, kb, Wb, ab) {
        return new uc(bb, cb, sb, kb, Wb, ab)
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
        for (let cb of this.annotations)
          if (cb.type == bb) return cb.value
      }
      get docChanged() {
        return !this.changes.empty
      }
      get reconfigured() {
        return this.startState.config != this.state.config
      }
      isUserEvent(bb) {
        let cb = this.annotation(uc.userEvent);
        return !(!cb || !(cb == bb || cb.length > bb.length && cb.slice(0, bb.length) == bb && "." == cb[bb.length]))
      }
    }

    function Yc(bb, cb) {
      let sb = [];
      for (let kb = 0, Wb = 0;;) {
        let ab, Tb;
        if (kb < bb.length && (Wb == cb.length || cb[Wb] >= bb[kb])) ab = bb[kb++], Tb = bb[kb++];
        else {
          if (!(Wb < cb.length)) return sb;
          ab = cb[Wb++], Tb = cb[Wb++]
        }!sb.length || sb[sb.length - 1] < ab ? sb.push(ab, Tb) : sb[sb.length - 1] < Tb && (sb[sb.length - 1] = Tb)
      }
    }

    function hc(bb, cb, sb) {
      var kb;
      let Wb, ab, Tb;
      return sb ? (Wb = cb.changes, ab = Eb.empty(cb.changes.length), Tb = bb.changes.compose(cb.changes)) : (Wb = cb.changes.map(bb.changes), ab = bb.changes.mapDesc(cb.changes, !0), Tb = bb.changes.compose(Wb)), {
        changes: Tb,
        selection: cb.selection ? cb.selection.map(ab) : null === (kb = bb.selection) || void 0 === kb ? void 0 : kb.map(Wb),
        effects: Lc.mapEffects(bb.effects, Wb).concat(Lc.mapEffects(cb.effects, ab)),
        annotations: bb.annotations.length ? bb.annotations.concat(cb.annotations) : cb.annotations,
        scrollIntoView: bb.scrollIntoView || cb.scrollIntoView
      }
    }

    function Jc(bb, cb, sb) {
      let kb = cb.selection,
        Wb = tc(cb.annotations);
      return cb.userEvent && (Wb = Wb.concat(uc.userEvent.of(cb.userEvent))), {
        changes: cb.changes instanceof Eb ? cb.changes : Eb.of(cb.changes || [], sb, bb.facet(nc)),
        selection: kb && (kb instanceof db ? kb : db.single(kb.anchor, kb.head)),
        effects: tc(cb.effects),
        annotations: Wb,
        scrollIntoView: !!cb.scrollIntoView
      }
    }

    function gc(bb, cb, sb) {
      let kb = Jc(bb, cb.length ? cb[0] : {}, bb.doc.length);
      cb.length && !1 === cb[0].filter && (sb = !1);
      for (let ab = 1; ab < cb.length; ab++) {
        !1 === cb[ab].filter && (sb = !1);
        let Wb = !!cb[ab].sequential;
        kb = hc(kb, Jc(bb, cb[ab], Wb ? kb.changes.newLength : bb.doc.length), Wb)
      }
      let Wb = uc.create(bb, kb.changes, kb.selection, kb.effects, kb.annotations, kb.scrollIntoView);
      return function(bb) {
        let cb = bb.startState,
          sb = cb.facet(Qc),
          kb = bb;
        for (let Wb = sb.length - 1; Wb >= 0; Wb--) {
          let ab = sb[Wb](bb);
          ab && Object.keys(ab).length && (kb = hc(kb, Jc(cb, ab, bb.changes.newLength), !0))
        }
        return kb == bb ? bb : uc.create(cb, bb.changes, bb.selection, kb.effects, kb.annotations, kb.scrollIntoView)
      }(sb ? function(bb) {
        let cb = bb.startState,
          sb = !0;
        for (let Wb of cb.facet(mc)) {
          let cb = Wb(bb);
          if (!1 === cb) {
            sb = !1;
            break
          }
          Array.isArray(cb) && (sb = !0 === sb ? cb : Yc(sb, cb))
        }
        if (!0 !== sb) {
          let kb, Wb;
          if (!1 === sb) Wb = bb.changes.invertedDesc, kb = Eb.empty(cb.doc.length);
          else {
            let cb = bb.changes.filter(sb);
            kb = cb.changes, Wb = cb.filtered.mapDesc(cb.changes).invertedDesc
          }
          bb = uc.create(cb, kb, bb.selection && bb.selection.map(Wb), Lc.mapEffects(bb.effects, Wb), bb.annotations, bb.scrollIntoView)
        }
        let kb = cb.facet(lc);
        for (let Wb = kb.length - 1; Wb >= 0; Wb--) {
          let sb = kb[Wb](bb);
          bb = sb instanceof uc ? sb : Array.isArray(sb) && 1 == sb.length && sb[0] instanceof uc ? sb[0] : gc(cb, tc(sb), !1)
        }
        return bb
      }(Wb) : Wb)
    }
    uc.time = Cc.define(), uc.userEvent = Cc.define(), uc.addToHistory = Cc.define(), uc.remote = Cc.define();
    const Bc = [];

    function tc(bb) {
      return null == bb ? Bc : Array.isArray(bb) ? bb : [bb]
    }
    var yc = function(bb) {
      return bb[bb.Word = 0] = "Word", bb[bb.Space = 1] = "Space", bb[bb.Other = 2] = "Other", bb
    }(yc || (yc = {}));
    const Pc = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
    let Dc;
    try {
      Dc = new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u")
    } catch (ss) {}

    function Ec(bb) {
      return cb => {
        if (!/\S/.test(cb)) return yc.Space;
        if (function(bb) {
            if (Dc) return Dc.test(bb);
            for (let cb = 0; cb < bb.length; cb++) {
              let sb = bb[cb];
              if (/\w/.test(sb) || sb > "\x80" && (sb.toUpperCase() != sb.toLowerCase() || Pc.test(sb))) return !0
            }
            return !1
          }(cb)) return yc.Word;
        for (let sb = 0; sb < bb.length; sb++)
          if (cb.indexOf(bb[sb]) > -1) return yc.Word;
        return yc.Other
      }
    }
    class ic {
      constructor(bb, cb, sb, kb, Wb, ab) {
        this.config = bb, this.doc = cb, this.selection = sb, this.values = kb, this.status = bb.statusTemplate.slice(), this.computeSlot = Wb, ab && (ab._state = this);
        for (let Tb = 0; Tb < this.config.dynamicSlots.length; Tb++) Hc(this, Tb << 1);
        this.computeSlot = null
      }
      field(bb) {
        let cb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          sb = this.config.address[bb.id];
        if (null != sb) return Hc(this, sb), fc(this, sb);
        if (cb) throw new RangeError("Field is not present in this state")
      }
      update() {
        for (var bb = arguments.length, cb = new Array(bb), sb = 0; sb < bb; sb++) cb[sb] = arguments[sb];
        return gc(this, cb, !0)
      }
      applyTransaction(bb) {
        let cb, sb = this.config,
          {
            base: kb,
            compartments: Wb
          } = sb;
        for (let Tb of bb.effects) Tb.is(Tc.reconfigure) ? (sb && (Wb = new Map, sb.compartments.forEach(((bb, cb) => Wb.set(cb, bb))), sb = null), Wb.set(Tb.value.compartment, Tb.value.extension)) : Tb.is(Lc.reconfigure) ? (sb = null, kb = Tb.value) : Tb.is(Lc.appendConfig) && (sb = null, kb = tc(kb).concat(Tb.value));
        if (sb) cb = bb.startState.values.slice();
        else {
          sb = Ic.resolve(kb, Wb, this), cb = new ic(sb, this.doc, this.selection, sb.dynamicSlots.map((() => null)), ((bb, cb) => cb.reconfigure(bb, this)), null).values
        }
        let ab = bb.startState.facet(Xc) ? bb.newSelection : bb.newSelection.asSingle();
        new ic(sb, bb.newDoc, ab, cb, ((cb, sb) => sb.update(cb, bb)), bb)
      }
      replaceSelection(bb) {
        return "string" == typeof bb && (bb = this.toText(bb)), this.changeByRange((cb => ({
          changes: {
            from: cb.from,
            to: cb.to,
            insert: bb
          },
          range: db.cursor(cb.from + bb.length)
        })))
      }
      changeByRange(bb) {
        let cb = this.selection,
          sb = bb(cb.uQ[0]),
          kb = this.changes(sb.changes),
          Wb = [sb.range],
          ab = tc(sb.effects);
        for (let Tb = 1; Tb < cb.uQ.length; Tb++) {
          let sb = bb(cb.uQ[Tb]),
            Ub = this.changes(sb.changes),
            Ib = Ub.map(kb);
          for (let bb = 0; bb < Tb; bb++) Wb[bb] = Wb[bb].map(Ib);
          let Hb = kb.mapDesc(Ub, !0);
          Wb.push(sb.range.map(Hb)), kb = kb.compose(Ib), ab = Lc.mapEffects(ab, Ib).concat(Lc.mapEffects(tc(sb.effects), Hb))
        }
        return {
          changes: kb,
          selection: db.create(Wb, cb.mainIndex),
          effects: ab
        }
      }
      changes() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return bb instanceof Eb ? bb : Eb.of(bb, this.doc.length, this.facet(ic.lineSeparator))
      }
      toText(bb) {
        return lb.of(bb.split(this.facet(ic.lineSeparator) || yb))
      }
      sliceDoc() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.doc.length;
        return this.doc.sliceString(bb, cb, this.lineBreak)
      }
      facet(bb) {
        let cb = this.config.address[bb.id];
        return null == cb ? bb.default : (Hc(this, cb), fc(this, cb))
      }
      toJSON(bb) {
        let cb = {
          doc: this.sliceDoc(),
          selection: this.selection.toJSON()
        };
        if (bb)
          for (let sb in bb) {
            let kb = bb[sb];
            kb instanceof jb && null != this.config.address[kb.id] && (cb[sb] = kb.spec.toJSON(this.field(bb[sb]), this))
          }
        return cb
      }
      static fromJSON(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          sb = arguments.length > 2 ? arguments[2] : void 0;
        if (!bb || "string" != typeof bb.doc) throw new RangeError("Invalid JSON representation for EditorState");
        let kb = [];
        if (sb)
          for (let Wb in sb)
            if (Object.prototype.hasOwnProperty.call(bb, Wb)) {
              let cb = sb[Wb],
                ab = bb[Wb];
              kb.push(cb.init((bb => cb.spec.fromJSON(ab, bb))))
            } return ic.create({
          doc: bb.doc,
          selection: db.fromJSON(bb.selection),
          extensions: cb.extensions ? kb.concat([cb.extensions]) : kb
        })
      }
      static create() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          cb = Ic.resolve(bb.extensions || [], new Map),
          sb = bb.doc instanceof lb ? bb.doc : lb.of((bb.doc || "").split(cb.staticFacet(ic.lineSeparator) || yb)),
          kb = bb.selection ? bb.selection instanceof db ? bb.selection : db.single(bb.selection.anchor, bb.selection.head) : db.single(0);
        return Ab(kb, sb.length), cb.staticFacet(Xc) || (kb = kb.asSingle()), new ic(cb, sb, kb, cb.dynamicSlots.map((() => null)), ((bb, cb) => cb.create(bb)), null)
      }
      get tabSize() {
        return this.facet(ic.tabSize)
      }
      get lineBreak() {
        return this.facet(ic.lineSeparator) || "\n"
      }
      get readOnly() {
        return this.facet(ec)
      }
      phrase(bb) {
        for (var cb = arguments.length, sb = new Array(cb > 1 ? cb - 1 : 0), kb = 1; kb < cb; kb++) sb[kb - 1] = arguments[kb];
        for (let Wb of this.facet(ic.phrases))
          if (Object.prototype.hasOwnProperty.call(Wb, bb)) {
            bb = Wb[bb];
            break
          } return sb.length && (bb = bb.replace(/\$(\$|\d*)/g, ((bb, cb) => {
          if ("$" == cb) return "$";
          let kb = +(cb || 1);
          return !kb || kb > sb.length ? bb : sb[kb - 1]
        }))), bb
      }
      languageDataAt(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          kb = [];
        for (let Wb of this.facet(Mc))
          for (let ab of Wb(this, cb, sb)) Object.prototype.hasOwnProperty.call(ab, bb) && kb.push(ab[bb]);
        return kb
      }
      charCategorizer(bb) {
        let cb = this.languageDataAt("wordChars", bb);
        return Ec(cb.length ? cb[0] : "")
      }
      wordAt(bb) {
        let {
          text: cb,
          from: sb,
          length: kb
        } = this.doc.lineAt(bb), Wb = this.charCategorizer(bb), ab = bb - sb, Tb = bb - sb;
        for (; ab > 0;) {
          let bb = Jb(cb, ab, !1);
          if (Wb(cb.slice(bb, ab)) != yc.Word) break;
          ab = bb
        }
        for (; Tb < kb;) {
          let bb = Jb(cb, Tb);
          if (Wb(cb.slice(Tb, bb)) != yc.Word) break;
          Tb = bb
        }
        return ab == Tb ? null : db.range(ab + sb, Tb + sb)
      }
    }

    function Oc(bb, cb) {
      let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        kb = {};
      for (let Wb of bb)
        for (let bb of Object.keys(Wb)) {
          let cb = Wb[bb],
            ab = kb[bb];
          if (void 0 === ab) kb[bb] = cb;
          else if (ab === cb || void 0 === cb);
          else {
            if (!Object.hasOwnProperty.call(sb, bb)) throw new Error("Config merge conflict for field " + bb);
            kb[bb] = sb[bb](ab, cb)
          }
        }
      for (let Wb in cb) void 0 === kb[Wb] && (kb[Wb] = cb[Wb]);
      return kb
    }
    ic.allowMultipleSelections = Xc, ic.tabSize = rb.define({
      combine: bb => bb.length ? bb[0] : 4
    }), ic.lineSeparator = nc, ic.readOnly = ec, ic.phrases = rb.define({
      compare(bb, cb) {
        let sb = Object.keys(bb),
          kb = Object.keys(cb);
        return sb.length == kb.length && sb.every((sb => bb[sb] == cb[sb]))
      }
    }), ic.languageData = Mc, ic.changeFilter = mc, ic.transactionFilter = lc, ic.transactionExtender = Qc, Tc.reconfigure = Lc.define();
    class Gc {
      eq(bb) {
        return this == bb
      }
      range(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bb;
        return Zc.create(bb, cb, this)
      }
    }

    function Kc(bb, cb) {
      return bb == cb || bb.constructor == cb.constructor && bb.eq(cb)
    }
    Gc.prototype.startSide = Gc.prototype.endSide = 0, Gc.prototype.point = !1, Gc.prototype.mapMode = Pb.TrackDel;
    class Zc {
      constructor(bb, cb, sb) {
        this.from = bb, this.to = cb, this.value = sb
      }
      static create(bb, cb, sb) {
        return new Zc(bb, cb, sb)
      }
    }

    function zc(bb, cb) {
      return bb.from - cb.from || bb.value.startSide - cb.value.startSide
    }
    class qc {
      constructor(bb, cb, sb, kb) {
        this.from = bb, this.to = cb, this.value = sb, this.dsb = kb
      }
      get length() {
        return this.to[this.to.length - 1]
      }
      findIndex(bb, cb, sb) {
        let kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Wb = sb ? this.to : this.from;
        for (let ab = kb, Tb = Wb.length;;) {
          if (ab == Tb) return ab;
          let kb = ab + Tb >> 1,
            Ub = Wb[kb] - bb || (sb ? this.value[kb].endSide : this.value[kb].startSide) - cb;
          if (kb == ab) return Ub >= 0 ? ab : Tb;
          Ub >= 0 ? Tb = kb : ab = kb + 1
        }
      }
      between(bb, cb, sb, kb) {
        for (let Wb = this.findIndex(cb, -1e9, !0), ab = this.findIndex(sb, 1e9, !1, Wb); Wb < ab; Wb++)
          if (!1 === kb(this.from[Wb] + bb, this.to[Wb] + bb, this.value[Wb])) return !1
      }
      map(bb, cb) {
        let sb = [],
          kb = [],
          Wb = [],
          ab = -1,
          Tb = -1;
        for (let Ub = 0; Ub < this.value.length; Ub++) {
          let Ib, Hb, fb = this.value[Ub],
            Mb = this.from[Ub] + bb,
            Xb = this.to[Ub] + bb;
          if (Mb == Xb) {
            let bb = cb.mapPos(Mb, fb.startSide, fb.mapMode);
            if (null == bb) continue;
            if (Ib = Hb = bb, fb.startSide != fb.endSide && (Hb = cb.mapPos(Mb, fb.endSide), Hb < Ib)) continue
          } else if (Ib = cb.mapPos(Mb, fb.startSide), Hb = cb.mapPos(Xb, fb.endSide), Ib > Hb || Ib == Hb && fb.startSide > 0 && fb.endSide <= 0) continue;
          (Hb - Ib || fb.endSide - fb.startSide) < 0 || (ab < 0 && (ab = Ib), fb.point && (Tb = Math.max(Tb, Hb - Ib)), sb.push(fb), kb.push(Ib - ab), Wb.push(Hb - ab))
        }
        return {
          mapped: sb.length ? new qc(kb, Wb, sb, Tb) : null,
          pos: ab
        }
      }
    }
    class dc {
      constructor(bb, cb, sb, kb) {
        this.chunkPos = bb, this.chunk = cb, this.nextLayer = sb, this.dsb = kb
      }
      static create(bb, cb, sb, kb) {
        return new dc(bb, cb, sb, kb)
      }
      get length() {
        let bb = this.chunk.length - 1;
        return bb < 0 ? 0 : Math.max(this.chunkEnd(bb), this.nextLayer.length)
      }
      get size() {
        if (this.Ym) return 0;
        let bb = this.nextLayer.size;
        for (let cb of this.chunk) bb += cb.value.length;
        return bb
      }
      chunkEnd(bb) {
        return this.chunkPos[bb] + this.chunk[bb].length
      }
      update(bb) {
        let {
          add: cb = [],
          sort: sb = !1,
          filterFrom: kb = 0,
          filterTo: Wb = this.length
        } = bb, ab = bb.filter;
        if (0 == cb.length && !ab) return this;
        if (sb && (cb = cb.slice().sort(zc)), this.Ym) return cb.length ? dc.of(cb) : this;
        let Tb = new rc(this, null, -1).goto(0),
          Ub = 0,
          Ib = [],
          Hb = new Ac;
        for (; Tb.value || Ub < cb.length;)
          if (Ub < cb.length && (Tb.from - cb[Ub].from || Tb.startSide - cb[Ub].value.startSide) >= 0) {
            let bb = cb[Ub++];
            Hb.addInner(bb.from, bb.to, bb.value) || Ib.push(bb)
          } else 1 == Tb.rangeIndex && Tb.chunkIndex < this.chunk.length && (Ub == cb.length || this.chunkEnd(Tb.chunkIndex) < cb[Ub].from) && (!ab || kb > this.chunkEnd(Tb.chunkIndex) || Wb < this.chunkPos[Tb.chunkIndex]) && Hb.addChunk(this.chunkPos[Tb.chunkIndex], this.chunk[Tb.chunkIndex]) ? Tb.nextChunk() : ((!ab || kb > Tb.to || Wb < Tb.from || ab(Tb.from, Tb.to, Tb.value)) && (Hb.addInner(Tb.from, Tb.to, Tb.value) || Ib.push(Zc.create(Tb.from, Tb.to, Tb.value))), Tb.next());
        return Hb.finishInner(this.nextLayer.Ym && !Ib.length ? dc.empty : this.nextLayer.update({
          add: Ib,
          filter: ab,
          filterFrom: kb,
          filterTo: Wb
        }))
      }
      map(bb) {
        if (bb.empty || this.Ym) return this;
        let cb = [],
          sb = [],
          kb = -1;
        for (let ab = 0; ab < this.chunk.length; ab++) {
          let Wb = this.chunkPos[ab],
            Tb = this.chunk[ab],
            Ub = bb.touchesRange(Wb, Wb + Tb.length);
          if (!1 === Ub) kb = Math.max(kb, Tb.dsb), cb.push(Tb), sb.push(bb.mapPos(Wb));
          else if (!0 === Ub) {
            let {
              mapped: ab,
              pos: Ub
            } = Tb.map(Wb, bb);
            ab && (kb = Math.max(kb, ab.dsb), cb.push(ab), sb.push(Ub))
          }
        }
        let Wb = this.nextLayer.map(bb);
        return 0 == cb.length ? Wb : new dc(sb, cb, Wb || dc.empty, kb)
      }
      between(bb, cb, sb) {
        if (!this.Ym) {
          for (let kb = 0; kb < this.chunk.length; kb++) {
            let Wb = this.chunkPos[kb],
              ab = this.chunk[kb];
            if (cb >= Wb && bb <= Wb + ab.length && !1 === ab.between(Wb, bb - Wb, cb - Wb, sb)) return
          }
          this.nextLayer.between(bb, cb, sb)
        }
      }
      iter() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return oc.from([this]).goto(bb)
      }
      get Ym() {
        return this.nextLayer == this
      }
      static iter(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return oc.from(bb).goto(cb)
      }
      static compare(bb, cb, sb, kb) {
        let Wb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1,
          ab = bb.filter((bb => bb.dsb > 0 || !bb.Ym && bb.dsb >= Wb)),
          Tb = cb.filter((bb => bb.dsb > 0 || !bb.Ym && bb.dsb >= Wb)),
          Ub = wc(ab, Tb, sb),
          Ib = new Rc(ab, Ub, Wb),
          Hb = new Rc(Tb, Ub, Wb);
        sb.iterGaps(((bb, cb, sb) => vc(Ib, bb, Hb, cb, sb, kb))), sb.empty && 0 == sb.length && vc(Ib, 0, Hb, 0, 0, kb)
      }
      static eq(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          kb = arguments.length > 3 ? arguments[3] : void 0;
        null == kb && (kb = 999999999);
        let Wb = bb.filter((bb => !bb.Ym && cb.indexOf(bb) < 0)),
          ab = cb.filter((cb => !cb.Ym && bb.indexOf(cb) < 0));
        if (Wb.length != ab.length) return !1;
        if (!Wb.length) return !0;
        let Tb = wc(Wb, ab),
          Ub = new Rc(Wb, Tb, 0).goto(sb),
          Ib = new Rc(ab, Tb, 0).goto(sb);
        for (;;) {
          if (Ub.to != Ib.to || !Fc(Ub.active, Ib.active) || Ub.point && (!Ib.point || !Kc(Ub.point, Ib.point))) return !1;
          if (Ub.to > kb) return !0;
          Ub.next(), Ib.next()
        }
      }
      static spans(bb, cb, sb, kb) {
        let Wb = new Rc(bb, null, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1).goto(cb),
          ab = cb,
          Tb = Wb.openStart;
        for (;;) {
          let bb = Math.min(Wb.to, sb);
          if (Wb.point) {
            let sb = Wb.activeForPoint(Wb.to),
              Ub = Wb.pointFrom < cb ? sb.length + 1 : Wb.point.startSide < 0 ? sb.length : Math.min(sb.length, Tb);
            kb.point(ab, bb, Wb.point, sb, Ub, Wb.pointRank), Tb = Math.min(Wb.openEnd(bb), sb.length)
          } else bb > ab && (kb.span(ab, bb, Wb.active, Tb), Tb = Wb.openEnd(bb));
          if (Wb.to > sb) return Tb + (Wb.point && Wb.to > sb ? 1 : 0);
          ab = Wb.to, Wb.next()
        }
      }
      static of (bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          sb = new Ac;
        for (let kb of bb instanceof Zc ? [bb] : cb ? function(bb) {
            if (bb.length > 1)
              for (let cb = bb[0], sb = 1; sb < bb.length; sb++) {
                let kb = bb[sb];
                if (zc(cb, kb) > 0) return bb.slice().sort(zc);
                cb = kb
              }
            return bb
          }(bb) : bb) sb.add(kb.from, kb.to, kb.value);
        return sb.finish()
      }
      static join(bb) {
        if (!bb.length) return dc.empty;
        let cb = bb[bb.length - 1];
        for (let sb = bb.length - 2; sb >= 0; sb--)
          for (let kb = bb[sb]; kb != dc.empty; kb = kb.nextLayer) cb = new dc(kb.chunkPos, kb.chunk, cb, Math.max(kb.dsb, cb.dsb));
        return cb
      }
    }
    dc.empty = new dc([], [], null, -1), dc.empty.nextLayer = dc.empty;
    class Ac {
      finishChunk(bb) {
        this.chunks.push(new qc(this.from, this.to, this.value, this.dsb)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.dsb), this.dsb = -1, bb && (this.from = [], this.to = [], this.value = [])
      }
      constructor() {
        this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.dsb = -1, this.setMaxPoint = -1, this.nextLayer = null
      }
      add(bb, cb, sb) {
        this.addInner(bb, cb, sb) || (this.nextLayer || (this.nextLayer = new Ac)).add(bb, cb, sb)
      }
      addInner(bb, cb, sb) {
        let kb = bb - this.lastTo || sb.startSide - this.last.endSide;
        if (kb <= 0 && (bb - this.lastFrom || sb.startSide - this.last.startSide) < 0) throw new Error("Ranges must be added sorted by `from` position and `startSide`");
        return !(kb < 0) && (250 == this.from.length && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = bb), this.from.push(bb - this.chunkStart), this.to.push(cb - this.chunkStart), this.last = sb, this.lastFrom = bb, this.lastTo = cb, this.value.push(sb), sb.point && (this.dsb = Math.max(this.dsb, cb - bb)), !0)
      }
      addChunk(bb, cb) {
        if ((bb - this.lastTo || cb.value[0].startSide - this.last.endSide) < 0) return !1;
        this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, cb.dsb), this.chunks.push(cb), this.chunkPos.push(bb);
        let sb = cb.value.length - 1;
        return this.last = cb.value[sb], this.lastFrom = cb.from[sb] + bb, this.lastTo = cb.to[sb] + bb, !0
      }
      finish() {
        return this.finishInner(dc.empty)
      }
      finishInner(bb) {
        if (this.from.length && this.finishChunk(!1), 0 == this.chunks.length) return bb;
        let cb = dc.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(bb) : bb, this.setMaxPoint);
        return this.from = null, cb
      }
    }

    function wc(bb, cb, sb) {
      let kb = new Map;
      for (let ab of bb)
        for (let bb = 0; bb < ab.chunk.length; bb++) ab.chunk[bb].dsb <= 0 && kb.set(ab.chunk[bb], ab.chunkPos[bb]);
      let Wb = new Set;
      for (let ab of cb)
        for (let bb = 0; bb < ab.chunk.length; bb++) {
          let cb = kb.get(ab.chunk[bb]);
          null == cb || (sb ? sb.mapPos(cb) : cb) != ab.chunkPos[bb] || (null === sb || void 0 === sb ? void 0 : sb.touchesRange(cb, cb + ab.chunk[bb].length)) || Wb.add(ab.chunk[bb])
        }
      return Wb
    }
    class rc {
      constructor(bb, cb, sb) {
        let kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.layer = bb, this.skip = cb, this.Asb = sb, this.rank = kb
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      get endSide() {
        return this.value ? this.value.endSide : 0
      }
      goto(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(bb, cb, !1), this
      }
      gotoInner(bb, cb, sb) {
        for (; this.chunkIndex < this.layer.chunk.length;) {
          let cb = this.layer.chunk[this.chunkIndex];
          if (!(this.skip && this.skip.has(cb) || this.layer.chunkEnd(this.chunkIndex) < bb || cb.dsb < this.Asb)) break;
          this.chunkIndex++, sb = !1
        }
        if (this.chunkIndex < this.layer.chunk.length) {
          let kb = this.layer.chunk[this.chunkIndex].findIndex(bb - this.layer.chunkPos[this.chunkIndex], cb, !0);
          (!sb || this.rangeIndex < kb) && this.setRangeIndex(kb)
        }
        this.next()
      }
      forward(bb, cb) {
        (this.to - bb || this.endSide - cb) < 0 && this.gotoInner(bb, cb, !0)
      }
      next() {
        for (;;) {
          if (this.chunkIndex == this.layer.chunk.length) {
            this.from = this.to = 1e9, this.value = null;
            break
          } {
            let bb = this.layer.chunkPos[this.chunkIndex],
              cb = this.layer.chunk[this.chunkIndex],
              sb = bb + cb.from[this.rangeIndex];
            if (this.from = sb, this.to = bb + cb.to[this.rangeIndex], this.value = cb.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.Asb < 0 || this.value.point && this.to - this.from >= this.Asb) break
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
    class oc {
      constructor(bb) {
        this.heap = bb
      }
      static from(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          kb = [];
        for (let Wb = 0; Wb < bb.length; Wb++)
          for (let ab = bb[Wb]; !ab.Ym; ab = ab.nextLayer) ab.dsb >= sb && kb.push(new rc(ab, cb, sb, Wb));
        return 1 == kb.length ? kb[0] : new oc(kb)
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      goto(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        for (let sb of this.heap) sb.goto(bb, cb);
        for (let sb = this.heap.length >> 1; sb >= 0; sb--) Sc(this.heap, sb);
        return this.next(), this
      }
      forward(bb, cb) {
        for (let sb of this.heap) sb.forward(bb, cb);
        for (let sb = this.heap.length >> 1; sb >= 0; sb--) Sc(this.heap, sb);
        (this.to - bb || this.value.endSide - cb) < 0 && this.next()
      }
      next() {
        if (0 == this.heap.length) this.from = this.to = 1e9, this.value = null, this.rank = -1;
        else {
          let bb = this.heap[0];
          this.from = bb.from, this.to = bb.to, this.value = bb.value, this.rank = bb.rank, bb.value && bb.next(), Sc(this.heap, 0)
        }
      }
    }

    function Sc(bb, cb) {
      for (let sb = bb[cb];;) {
        let kb = 1 + (cb << 1);
        if (kb >= bb.length) break;
        let Wb = bb[kb];
        if (kb + 1 < bb.length && Wb.compare(bb[kb + 1]) >= 0 && (Wb = bb[kb + 1], kb++), sb.compare(Wb) < 0) break;
        bb[kb] = sb, bb[cb] = Wb, cb = kb
      }
    }
    class Rc {
      constructor(bb, cb, sb) {
        this.Asb = sb, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = oc.from(bb, cb, sb)
      }
      goto(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.cursor.goto(bb, cb), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = bb, this.endSide = cb, this.openStart = -1, this.next(), this
      }
      forward(bb, cb) {
        for (; this.minActive > -1 && (this.activeTo[this.minActive] - bb || this.active[this.minActive].endSide - cb) < 0;) this.removeActive(this.minActive);
        this.cursor.forward(bb, cb)
      }
      removeActive(bb) {
        xc(this.active, bb), xc(this.activeTo, bb), xc(this.activeRank, bb), this.minActive = pc(this.active, this.activeTo)
      }
      addActive(bb) {
        let cb = 0,
          {
            value: sb,
            to: kb,
            rank: Wb
          } = this.cursor;
        for (; cb < this.activeRank.length && (Wb - this.activeRank[cb] || kb - this.activeTo[cb]) > 0;) cb++;
        jc(this.active, cb, sb), jc(this.activeTo, cb, kb), jc(this.activeRank, cb, Wb), bb && jc(bb, cb, this.cursor.from), this.minActive = pc(this.active, this.activeTo)
      }
      next() {
        let bb = this.to,
          cb = this.point;
        this.point = null;
        let sb = this.openStart < 0 ? [] : null;
        for (;;) {
          let kb = this.minActive;
          if (kb > -1 && (this.activeTo[kb] - this.cursor.from || this.active[kb].endSide - this.cursor.startSide) < 0) {
            if (this.activeTo[kb] > bb) {
              this.to = this.activeTo[kb], this.endSide = this.active[kb].endSide;
              break
            }
            this.removeActive(kb), sb && xc(sb, kb)
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
                if (!(cb && this.cursor.to == this.to && this.cursor.from < this.cursor.to)) {
                  this.point = bb, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = bb.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
                  break
                }
                this.cursor.next()
              } else this.addActive(sb), this.cursor.next()
            }
          }
        }
        if (sb) {
          this.openStart = 0;
          for (let cb = sb.length - 1; cb >= 0 && sb[cb] < bb; cb--) this.openStart++
        }
      }
      activeForPoint(bb) {
        if (!this.active.length) return this.active;
        let cb = [];
        for (let sb = this.active.length - 1; sb >= 0 && !(this.activeRank[sb] < this.pointRank); sb--)(this.activeTo[sb] > bb || this.activeTo[sb] == bb && this.active[sb].endSide >= this.point.endSide) && cb.push(this.active[sb]);
        return cb.reverse()
      }
      openEnd(bb) {
        let cb = 0;
        for (let sb = this.activeTo.length - 1; sb >= 0 && this.activeTo[sb] > bb; sb--) cb++;
        return cb
      }
    }

    function vc(bb, cb, sb, kb, Wb, ab) {
      bb.goto(cb), sb.goto(kb);
      let Tb = kb + Wb,
        Ub = kb,
        Ib = kb - cb,
        Hb = !!ab.boundChange;
      for (let fb = !1;;) {
        let cb = bb.to + Ib - sb.to,
          kb = cb || bb.endSide - sb.endSide,
          Wb = kb < 0 ? bb.to + Ib : sb.to,
          Mb = Math.min(Wb, Tb);
        if (bb.point || sb.point ? (bb.point && sb.point && Kc(bb.point, sb.point) && Fc(bb.activeForPoint(bb.to), sb.activeForPoint(sb.to)) || ab.comparePoint(Ub, Mb, bb.point, sb.point), fb = !1) : (fb && ab.boundChange(Ub), Mb > Ub && !Fc(bb.active, sb.active) && ab.compareRange(Ub, Mb, bb.active, sb.active), Hb && Mb < Tb && (cb || bb.openEnd(Wb) != sb.openEnd(Wb)) && (fb = !0)), Wb > Tb) break;
        Ub = Wb, kb <= 0 && bb.next(), kb >= 0 && sb.next()
      }
    }

    function Fc(bb, cb) {
      if (bb.length != cb.length) return !1;
      for (let sb = 0; sb < bb.length; sb++)
        if (bb[sb] != cb[sb] && !Kc(bb[sb], cb[sb])) return !1;
      return !0
    }

    function xc(bb, cb) {
      for (let sb = cb, kb = bb.length - 1; sb < kb; sb++) bb[sb] = bb[sb + 1];
      bb.pop()
    }

    function jc(bb, cb, sb) {
      for (let kb = bb.length - 1; kb >= cb; kb--) bb[kb + 1] = bb[kb];
      bb[cb] = sb
    }

    function pc(bb, cb) {
      let sb = -1,
        kb = 1e9;
      for (let Wb = 0; Wb < cb.length; Wb++)(cb[Wb] - kb || bb[Wb].endSide - bb[sb].endSide) < 0 && (sb = Wb, kb = cb[Wb]);
      return sb
    }

    function bs(bb, cb) {
      let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : bb.length,
        kb = 0;
      for (let Wb = 0; Wb < sb && Wb < bb.length;) 9 == bb.charCodeAt(Wb) ? (kb += cb - kb % cb, Wb++) : (kb++, Wb = Jb(bb, Wb));
      return kb
    }

    function cs(bb, cb, sb, kb) {
      for (let Wb = 0, ab = 0;;) {
        if (ab >= cb) return Wb;
        if (Wb == bb.length) break;
        ab += 9 == bb.charCodeAt(Wb) ? sb - ab % sb : 1, Wb = Jb(bb, Wb)
      }
      return !0 === kb ? -1 : bb.length
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);