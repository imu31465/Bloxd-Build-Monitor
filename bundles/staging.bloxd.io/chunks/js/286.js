export const id = 286;
export const ids = [286];
export const modules = {
  40769: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => lu,
      f: () => vb,
      ChangeSet: () => tb,
      i: () => gu,
      j: () => Pb,
      k: () => Ju,
      n: () => yb,
      p: () => ib,
      t: () => Ou,
      x: () => Pu,
      w: () => qu,
      B: () => Nu,
      D: () => Cu,
      G: () => Qb,
      K: () => pb,
      O: () => du,
      Q: () => Db,
      T: () => zb,
      V: () => eu,
      X: () => bh,
      _: () => nb,
      $: () => uh,
      bb: () => xb
    });
    let Bb = [],
      Ob = [];

    function Gb(bb) {
      if (bb < 768) return !1;
      for (let ub = 0, hb = Bb.length;;) {
        let Gb = ub + hb >> 1;
        if (bb < Bb[Gb]) hb = Gb;
        else {
          if (!(bb >= Ob[Gb])) return !0;
          ub = Gb + 1
        }
        if (ub == hb) return !1
      }
    }

    function Ub(bb) {
      return bb >= 127462 && bb <= 127487
    }(() => {
      let bb = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((bb => bb ? parseInt(bb, 36) : 1));
      for (let ub = 0, hb = 0; ub < bb.length; ub++)(ub % 2 ? Ob : Bb).push(hb += bb[ub])
    })();
    const Lb = 8205;

    function Yb(bb, ub) {
      return (!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2] ? Sb : ab)(bb, ub, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function Sb(bb, ub, hb) {
      if (ub == bb.length) return ub;
      ub && wb(bb.charCodeAt(ub)) && Zb(bb.charCodeAt(ub - 1)) && ub--;
      let Bb = Hb(bb, ub);
      for (ub += Xb(Bb); ub < bb.length;) {
        let Ob = Hb(bb, ub);
        if (Bb == Lb || Ob == Lb || hb && Gb(Ob)) ub += Xb(Ob), Bb = Ob;
        else {
          if (!Ub(Ob)) break;
          {
            let hb = 0,
              Bb = ub - 2;
            for (; Bb >= 0 && Ub(Hb(bb, Bb));) hb++, Bb -= 2;
            if (hb % 2 == 0) break;
            ub += 2
          }
        }
      }
      return ub
    }

    function ab(bb, ub, hb) {
      for (; ub > 0;) {
        let Bb = Sb(bb, ub - 2, hb);
        if (Bb < ub) return Bb;
        ub--
      }
      return 0
    }

    function Hb(bb, ub) {
      let hb = bb.charCodeAt(ub);
      if (!Zb(hb) || ub + 1 == bb.length) return hb;
      let Bb = bb.charCodeAt(ub + 1);
      return wb(Bb) ? Bb - 56320 + (hb - 55296 << 10) + 65536 : hb
    }

    function wb(bb) {
      return bb >= 56320 && bb < 57344
    }

    function Zb(bb) {
      return bb >= 55296 && bb < 56320
    }

    function Xb(bb) {
      return bb < 65536 ? 1 : 2
    }
    class pb {
      lineAt(bb) {
        if (bb < 0 || bb > this.length) throw new RangeError(`Invalid position ${bb} in document of length ${this.length}`);
        return this.lineInner(bb, !1, 1, 0)
      }
      line(bb) {
        if (bb < 1 || bb > this.lines) throw new RangeError(`Invalid line number ${bb} in ${this.lines}-line document`);
        return this.lineInner(bb, !0, 1, 0)
      }
      replace(bb, ub, hb) {
        [bb, ub] = jb(this, bb, ub);
        let Bb = [];
        return this.decompose(0, bb, Bb, 2), hb.length && hb.decompose(0, hb.length, Bb, 3), this.decompose(ub, this.length, Bb, 1), Ab.from(Bb, this.length - (ub - bb) + hb.length)
      }
      append(bb) {
        return this.replace(this.length, this.length, bb)
      }
      slice(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        [bb, ub] = jb(this, bb, ub);
        let hb = [];
        return this.decompose(bb, ub, hb, 0), Ab.from(hb, ub - bb)
      }
      eq(bb) {
        if (bb == this) return !0;
        if (bb.length != this.length || bb.lines != this.lines) return !1;
        let ub = this.scanIdentical(bb, 1),
          hb = this.length - this.scanIdentical(bb, -1),
          Bb = new Wb(this),
          Ob = new Wb(bb);
        for (let Gb = ub, Ub = ub;;) {
          if (Bb.next(Gb), Ob.next(Gb), Gb = 0, Bb.lineBreak != Ob.lineBreak || Bb.done != Ob.done || Bb.value != Ob.value) return !1;
          if (Ub += Bb.value.length, Bb.done || Ub >= hb) return !0
        }
      }
      iter() {
        return new Wb(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1)
      }
      iterRange(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        return new Cb(this, bb, ub)
      }
      iterLines(bb, ub) {
        let hb;
        if (null == bb) hb = this.iter();
        else {
          null == ub && (ub = this.lines + 1);
          let Bb = this.line(bb).from;
          hb = this.iterRange(Bb, Math.max(Bb, ub == this.lines + 1 ? this.length : ub <= 1 ? 0 : this.line(ub - 1).to))
        }
        return new db(hb)
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
        return 1 != bb.length || bb[0] ? bb.length <= 32 ? new ob(bb) : Ab.from(ob.split(bb, [])) : pb.empty
      }
    }
    class ob extends pb {
      constructor(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(bb) {
          let ub = -1;
          for (let hb of bb) ub += hb.length + 1;
          return ub
        }(bb);
        super(), this.text = bb, this.length = ub
      }
      get lines() {
        return this.text.length
      }
      get children() {
        return null
      }
      lineInner(bb, ub, hb, Bb) {
        for (let Ob = 0;; Ob++) {
          let Gb = this.text[Ob],
            Ub = Bb + Gb.length;
          if ((ub ? hb : Ub) >= bb) return new rb(Bb, Ub, hb, Gb);
          Bb = Ub + 1, hb++
        }
      }
      decompose(bb, ub, hb, Bb) {
        let Ob = bb <= 0 && ub >= this.length ? this : new ob(Kb(this.text, bb, ub), Math.min(ub, this.length) - Math.max(0, bb));
        if (1 & Bb) {
          let bb = hb.pop(),
            ub = lb(Ob.text, bb.text.slice(), 0, Ob.length);
          if (ub.length <= 32) hb.push(new ob(ub, bb.length + Ob.length));
          else {
            let bb = ub.length >> 1;
            hb.push(new ob(ub.slice(0, bb)), new ob(ub.slice(bb)))
          }
        } else hb.push(Ob)
      }
      replace(bb, ub, hb) {
        if (!(hb instanceof ob)) return super.replace(bb, ub, hb);
        [bb, ub] = jb(this, bb, ub);
        let Bb = lb(this.text, lb(hb.text, Kb(this.text, 0, bb)), ub),
          Ob = this.length + hb.length - (ub - bb);
        return Bb.length <= 32 ? new ob(Bb, Ob) : Ab.from(ob.split(Bb, []), Ob)
      }
      sliceString(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [bb, ub] = jb(this, bb, ub);
        let Bb = "";
        for (let Ob = 0, Gb = 0; Ob <= ub && Gb < this.text.length; Gb++) {
          let Ub = this.text[Gb],
            Lb = Ob + Ub.length;
          Ob > bb && Gb && (Bb += hb), bb < Lb && ub > Ob && (Bb += Ub.slice(Math.max(0, bb - Ob), ub - Ob)), Ob = Lb + 1
        }
        return Bb
      }
      flatten(bb) {
        for (let ub of this.text) bb.push(ub)
      }
      scanIdentical() {
        return 0
      }
      static split(bb, ub) {
        let hb = [],
          Bb = -1;
        for (let Ob of bb) hb.push(Ob), Bb += Ob.length + 1, 32 == hb.length && (ub.push(new ob(hb, Bb)), hb = [], Bb = -1);
        return Bb > -1 && ub.push(new ob(hb, Bb)), ub
      }
    }
    class Ab extends pb {
      constructor(bb, ub) {
        super(), this.children = bb, this.length = ub, this.lines = 0;
        for (let hb of bb) this.lines += hb.lines
      }
      lineInner(bb, ub, hb, Bb) {
        for (let Ob = 0;; Ob++) {
          let Gb = this.children[Ob],
            Ub = Bb + Gb.length,
            Lb = hb + Gb.lines - 1;
          if ((ub ? Lb : Ub) >= bb) return Gb.lineInner(bb, ub, hb, Bb);
          Bb = Ub + 1, hb = Lb + 1
        }
      }
      decompose(bb, ub, hb, Bb) {
        for (let Ob = 0, Gb = 0; Gb <= ub && Ob < this.children.length; Ob++) {
          let Ub = this.children[Ob],
            Lb = Gb + Ub.length;
          if (bb <= Lb && ub >= Gb) {
            let Ob = Bb & ((Gb <= bb ? 1 : 0) | (Lb >= ub ? 2 : 0));
            Gb >= bb && Lb <= ub && !Ob ? hb.push(Ub) : Ub.decompose(bb - Gb, ub - Gb, hb, Ob)
          }
          Gb = Lb + 1
        }
      }
      replace(bb, ub, hb) {
        if ([bb, ub] = jb(this, bb, ub), hb.lines < this.lines)
          for (let Bb = 0, Ob = 0; Bb < this.children.length; Bb++) {
            let Gb = this.children[Bb],
              Ub = Ob + Gb.length;
            if (bb >= Ob && ub <= Ub) {
              let Lb = Gb.replace(bb - Ob, ub - Ob, hb),
                Yb = this.lines - Gb.lines + Lb.lines;
              if (Lb.lines < Yb >> 4 && Lb.lines > Yb >> 6) {
                let Ob = this.children.slice();
                return Ob[Bb] = Lb, new Ab(Ob, this.length - (ub - bb) + hb.length)
              }
              return super.replace(Ob, Ub, Lb)
            }
            Ob = Ub + 1
          }
        return super.replace(bb, ub, hb)
      }
      sliceString(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [bb, ub] = jb(this, bb, ub);
        let Bb = "";
        for (let Ob = 0, Gb = 0; Ob < this.children.length && Gb <= ub; Ob++) {
          let Ub = this.children[Ob],
            Lb = Gb + Ub.length;
          Gb > bb && Ob && (Bb += hb), bb < Lb && ub > Gb && (Bb += Ub.sliceString(bb - Gb, ub - Gb, hb)), Gb = Lb + 1
        }
        return Bb
      }
      flatten(bb) {
        for (let ub of this.children) ub.flatten(bb)
      }
      scanIdentical(bb, ub) {
        if (!(bb instanceof Ab)) return 0;
        let hb = 0,
          [Bb, Ob, Gb, Ub] = ub > 0 ? [0, 0, this.children.length, bb.children.length] : [this.children.length - 1, bb.children.length - 1, -1, -1];
        for (;; Bb += ub, Ob += ub) {
          if (Bb == Gb || Ob == Ub) return hb;
          let Lb = this.children[Bb],
            Yb = bb.children[Ob];
          if (Lb != Yb) return hb + Lb.scanIdentical(Yb, ub);
          hb += Lb.length + 1
        }
      }
      static from(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bb.reduce(((bb, ub) => bb + ub.length + 1), -1),
          hb = 0;
        for (let wb of bb) hb += wb.lines;
        if (hb < 32) {
          let hb = [];
          for (let ub of bb) ub.flatten(hb);
          return new ob(hb, ub)
        }
        let Bb = Math.max(32, hb >> 5),
          Ob = Bb << 1,
          Gb = Bb >> 1,
          Ub = [],
          Lb = 0,
          Yb = -1,
          Sb = [];

        function ab(bb) {
          let ub;
          if (bb.lines > Ob && bb instanceof Ab)
            for (let hb of bb.children) ab(hb);
          else bb.lines > Gb && (Lb > Gb || !Lb) ? (Hb(), Ub.push(bb)) : bb instanceof ob && Lb && (ub = Sb[Sb.length - 1]) instanceof ob && bb.lines + ub.lines <= 32 ? (Lb += bb.lines, Yb += bb.length + 1, Sb[Sb.length - 1] = new ob(ub.text.concat(bb.text), ub.length + 1 + bb.length)) : (Lb + bb.lines > Bb && Hb(), Lb += bb.lines, Yb += bb.length + 1, Sb.push(bb))
        }

        function Hb() {
          0 != Lb && (Ub.push(1 == Sb.length ? Sb[0] : Ab.from(Sb, Yb)), Yb = -1, Lb = Sb.length = 0)
        }
        for (let wb of bb) ab(wb);
        return Hb(), 1 == Ub.length ? Ub[0] : new Ab(Ub, ub)
      }
    }

    function lb(bb, ub) {
      let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e9;
      for (let Ob = 0, Gb = 0, Ub = !0; Gb < bb.length && Ob <= Bb; Gb++) {
        let Lb = bb[Gb],
          Yb = Ob + Lb.length;
        Yb >= hb && (Yb > Bb && (Lb = Lb.slice(0, Bb - Ob)), Ob < hb && (Lb = Lb.slice(hb - Ob)), Ub ? (ub[ub.length - 1] += Lb, Ub = !1) : ub.push(Lb)), Ob = Yb + 1
      }
      return ub
    }

    function Kb(bb, ub, hb) {
      return lb(bb, [""], ub, hb)
    }
    pb.empty = new ob([""], 0);
    class Wb {
      constructor(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.dir = ub, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [bb], this.offsets = [ub > 0 ? 1 : (bb instanceof ob ? bb.text.length : bb.children.length) << 1]
      }
      nextInner(bb, ub) {
        for (this.done = this.lineBreak = !1;;) {
          let hb = this.nodes.length - 1,
            Bb = this.nodes[hb],
            Ob = this.offsets[hb],
            Gb = Ob >> 1,
            Ub = Bb instanceof ob ? Bb.text.length : Bb.children.length;
          if (Gb == (ub > 0 ? Ub : 0)) {
            if (0 == hb) return this.done = !0, this.value = "", this;
            ub > 0 && this.offsets[hb - 1]++, this.nodes.pop(), this.offsets.pop()
          } else if ((1 & Ob) == (ub > 0 ? 0 : 1)) {
            if (this.offsets[hb] += ub, 0 == bb) return this.lineBreak = !0, this.value = "\n", this;
            bb--
          } else if (Bb instanceof ob) {
            let Ob = Bb.text[Gb + (ub < 0 ? -1 : 0)];
            if (this.offsets[hb] += ub, Ob.length > Math.max(0, bb)) return this.value = 0 == bb ? Ob : ub > 0 ? Ob.slice(bb) : Ob.slice(0, Ob.length - bb), this;
            bb -= Ob.length
          } else {
            let Ob = Bb.children[Gb + (ub < 0 ? -1 : 0)];
            bb > Ob.length ? (bb -= Ob.length, this.offsets[hb] += ub) : (ub < 0 && this.offsets[hb]--, this.nodes.push(Ob), this.offsets.push(ub > 0 ? 1 : (Ob instanceof ob ? Ob.text.length : Ob.children.length) << 1))
          }
        }
      }
      next() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return bb < 0 && (this.nextInner(-bb, -this.dir), bb = this.value.length), this.nextInner(bb, this.dir)
      }
    }
    class Cb {
      constructor(bb, ub, hb) {
        this.value = "", this.done = !1, this.cursor = new Wb(bb, ub > hb ? -1 : 1), this.pos = ub > hb ? bb.length : 0, this.from = Math.min(ub, hb), this.to = Math.max(ub, hb)
      }
      nextInner(bb, ub) {
        if (ub < 0 ? this.pos <= this.from : this.pos >= this.to) return this.value = "", this.done = !0, this;
        bb += Math.max(0, ub < 0 ? this.pos - this.to : this.from - this.pos);
        let hb = ub < 0 ? this.pos - this.from : this.to - this.pos;
        bb > hb && (bb = hb), hb -= bb;
        let {
          value: Bb
        } = this.cursor.next(bb);
        return this.pos += (Bb.length + bb) * ub, this.value = Bb.length <= hb ? Bb : ub < 0 ? Bb.slice(Bb.length - hb) : Bb.slice(0, hb), this.done = !this.value, this
      }
      next() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return bb < 0 ? bb = Math.max(bb, this.from - this.pos) : bb > 0 && (bb = Math.min(bb, this.to - this.pos)), this.nextInner(bb, this.cursor.dir)
      }
      get lineBreak() {
        return this.cursor.lineBreak && "" != this.value
      }
    }
    class db {
      constructor(bb) {
        this.inner = bb, this.afterBreak = !0, this.value = "", this.done = !1
      }
      next() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          {
            done: ub,
            lineBreak: hb,
            value: Bb
          } = this.inner.next(bb);
        return ub && this.afterBreak ? (this.value = "", this.afterBreak = !1) : ub ? (this.done = !0, this.value = "") : hb ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = Bb, this.afterBreak = !1), this
      }
      get lineBreak() {
        return !1
      }
    }
    "undefined" != typeof Symbol && (pb.prototype[Symbol.iterator] = function() {
      return this.iter()
    }, Wb.prototype[Symbol.iterator] = Cb.prototype[Symbol.iterator] = db.prototype[Symbol.iterator] = function() {
      return this
    });
    class rb {
      constructor(bb, ub, hb, Bb) {
        this.from = bb, this.to = ub, this.number = hb, this.text = Bb
      }
      get length() {
        return this.to - this.from
      }
    }

    function jb(bb, ub, hb) {
      return [ub = Math.max(0, Math.min(bb.length, ub)), Math.max(ub, Math.min(bb.length, hb))]
    }

    function nb(bb, ub) {
      return Yb(bb, ub, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function Db(bb, ub) {
      let hb = bb.charCodeAt(ub);
      if (!((Bb = hb) >= 55296 && Bb < 56320) || ub + 1 == bb.length) return hb;
      var Bb;
      let Ob = bb.charCodeAt(ub + 1);
      return function(bb) {
        return bb >= 56320 && bb < 57344
      }(Ob) ? Ob - 56320 + (hb - 55296 << 10) + 65536 : hb
    }

    function xb(bb) {
      return bb <= 65535 ? String.fromCharCode(bb) : (bb -= 65536, String.fromCharCode(55296 + (bb >> 10), 56320 + (1023 & bb)))
    }

    function zb(bb) {
      return bb < 65536 ? 1 : 2
    }
    const gb = /\r\n?|\n/;
    var ib = function(bb) {
      return bb[bb.Simple = 0] = "Simple", bb[bb.TrackDel = 1] = "TrackDel", bb[bb.TrackBefore = 2] = "TrackBefore", bb[bb.TrackAfter = 3] = "TrackAfter", bb
    }(ib || (ib = {}));
    class vb {
      constructor(bb) {
        this.sections = bb
      }
      get length() {
        let bb = 0;
        for (let ub = 0; ub < this.sections.length; ub += 2) bb += this.sections[ub];
        return bb
      }
      get newLength() {
        let bb = 0;
        for (let ub = 0; ub < this.sections.length; ub += 2) {
          let hb = this.sections[ub + 1];
          bb += hb < 0 ? this.sections[ub] : hb
        }
        return bb
      }
      get empty() {
        return 0 == this.sections.length || 2 == this.sections.length && this.sections[1] < 0
      }
      iterGaps(bb) {
        for (let ub = 0, hb = 0, Bb = 0; ub < this.sections.length;) {
          let Ob = this.sections[ub++],
            Gb = this.sections[ub++];
          Gb < 0 ? (bb(hb, Bb, Ob), Bb += Ob) : Bb += Gb, hb += Ob
        }
      }
      iterChangedRanges(bb) {
        Nb(this, bb, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get invertedDesc() {
        let bb = [];
        for (let ub = 0; ub < this.sections.length;) {
          let hb = this.sections[ub++],
            Bb = this.sections[ub++];
          Bb < 0 ? bb.push(hb, Bb) : bb.push(Bb, hb)
        }
        return new vb(bb)
      }
      composeDesc(bb) {
        return this.empty ? bb : bb.empty ? this : Mb(this, bb)
      }
      mapDesc(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return bb.empty ? this : sb(this, bb, ub)
      }
      mapPos(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ib.Simple,
          Bb = 0,
          Ob = 0;
        for (let Gb = 0; Gb < this.sections.length;) {
          let Ub = this.sections[Gb++],
            Lb = this.sections[Gb++],
            Yb = Bb + Ub;
          if (Lb < 0) {
            if (Yb > bb) return Ob + (bb - Bb);
            Ob += Ub
          } else {
            if (hb != ib.Simple && Yb >= bb && (hb == ib.TrackDel && Bb < bb && Yb > bb || hb == ib.TrackBefore && Bb < bb || hb == ib.TrackAfter && Yb > bb)) return null;
            if (Yb > bb || Yb == bb && ub < 0 && !Ub) return bb == Bb || ub < 0 ? Ob : Ob + Lb;
            Ob += Lb
          }
          Bb = Yb
        }
        if (bb > Bb) throw new RangeError(`Position ${bb} is out of range for changeset of length ${Bb}`);
        return Ob
      }
      touchesRange(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bb;
        for (let hb = 0, Bb = 0; hb < this.sections.length && Bb <= ub;) {
          let Ob = Bb + this.sections[hb++];
          if (this.sections[hb++] >= 0 && Bb <= ub && Ob >= bb) return !(Bb < bb && Ob > ub) || "cover";
          Bb = Ob
        }
        return !1
      }
      toString() {
        let bb = "";
        for (let ub = 0; ub < this.sections.length;) {
          let hb = this.sections[ub++],
            Bb = this.sections[ub++];
          bb += (bb ? " " : "") + hb + (Bb >= 0 ? ":" + Bb : "")
        }
        return bb
      }
      toJSON() {
        return this.sections
      }
      static fromJSON(bb) {
        if (!Array.isArray(bb) || bb.length % 2 || bb.some((bb => "number" != typeof bb))) throw new RangeError("Invalid JSON representation of ChangeDesc");
        return new vb(bb)
      }
      static create(bb) {
        return new vb(bb)
      }
    }
    class tb extends vb {
      constructor(bb, ub) {
        super(bb), this.inserted = ub
      }
      apply(bb) {
        if (this.length != bb.length) throw new RangeError("Applying change set to a document with the wrong length");
        return Nb(this, ((ub, hb, Bb, Ob, Gb) => bb = bb.replace(Bb, Bb + (hb - ub), Gb)), !1), bb
      }
      mapDesc(bb) {
        return sb(this, bb, arguments.length > 1 && void 0 !== arguments[1] && arguments[1], !0)
      }
      invert(bb) {
        let ub = this.sections.slice(),
          hb = [];
        for (let Bb = 0, Ob = 0; Bb < ub.length; Bb += 2) {
          let Gb = ub[Bb],
            Ub = ub[Bb + 1];
          if (Ub >= 0) {
            ub[Bb] = Ub, ub[Bb + 1] = Gb;
            let Lb = Bb >> 1;
            for (; hb.length < Lb;) hb.push(pb.empty);
            hb.push(Gb ? bb.slice(Ob, Ob + Gb) : pb.empty)
          }
          Ob += Gb
        }
        return new tb(ub, hb)
      }
      compose(bb) {
        return this.empty ? bb : bb.empty ? this : Mb(this, bb, !0)
      }
      map(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return bb.empty ? this : sb(this, bb, ub, !0)
      }
      iterChanges(bb) {
        Nb(this, bb, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get desc() {
        return vb.create(this.sections)
      }
      filter(bb) {
        let ub = [],
          hb = [],
          Bb = [],
          Ob = new mb(this);
        bb: for (let Gb = 0, Ub = 0;;) {
          let Lb = Gb == bb.length ? 1e9 : bb[Gb++];
          for (; Ub < Lb || Ub == Lb && 0 == Ob.len;) {
            if (Ob.done) break bb;
            let bb = Math.min(Ob.len, Lb - Ub);
            Jb(Bb, bb, -1);
            let Gb = -1 == Ob.ins ? -1 : 0 == Ob.off ? Ob.ins : 0;
            Jb(ub, bb, Gb), Gb > 0 && eb(hb, ub, Ob.text), Ob.forward(bb), Ub += bb
          }
          let Yb = bb[Gb++];
          for (; Ub < Yb;) {
            if (Ob.done) break bb;
            let bb = Math.min(Ob.len, Yb - Ub);
            Jb(ub, bb, -1), Jb(Bb, bb, -1 == Ob.ins ? -1 : 0 == Ob.off ? Ob.ins : 0), Ob.forward(bb), Ub += bb
          }
        }
        return {
          changes: new tb(ub, hb),
          filtered: vb.create(Bb)
        }
      }
      toJSON() {
        let bb = [];
        for (let ub = 0; ub < this.sections.length; ub += 2) {
          let hb = this.sections[ub],
            Bb = this.sections[ub + 1];
          Bb < 0 ? bb.push(hb) : 0 == Bb ? bb.push([hb]) : bb.push([hb].concat(this.inserted[ub >> 1].toJSON()))
        }
        return bb
      }
      static of (bb, ub, hb) {
        let Bb = [],
          Ob = [],
          Gb = 0,
          Ub = null;

        function Lb() {
          if (!(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && !Bb.length) return;
          Gb < ub && Jb(Bb, ub - Gb, -1);
          let bb = new tb(Bb, Ob);
          Ub = Ub ? Ub.compose(bb.map(Ub)) : bb, Bb = [], Ob = [], Gb = 0
        }
        return function bb(Yb) {
          if (Array.isArray(Yb))
            for (let ub of Yb) bb(ub);
          else if (Yb instanceof tb) {
            if (Yb.length != ub) throw new RangeError(`Mismatched change set length (got ${Yb.length}, expected ${ub})`);
            Lb(), Ub = Ub ? Ub.compose(Yb.map(Ub)) : Yb
          } else {
            let {
              from: bb,
              to: Ub = bb,
              insert: Sb
            } = Yb;
            if (bb > Ub || bb < 0 || Ub > ub) throw new RangeError(`Invalid change range ${bb} to ${Ub} (in doc of length ${ub})`);
            let ab = Sb ? "string" == typeof Sb ? pb.of(Sb.split(hb || gb)) : Sb : pb.empty,
              Hb = ab.length;
            if (bb == Ub && 0 == Hb) return;
            bb < Gb && Lb(), bb > Gb && Jb(Bb, bb - Gb, -1), Jb(Bb, Ub - bb, Hb), eb(Ob, Bb, ab), Gb = Ub
          }
        }(bb), Lb(!Ub), Ub
      }
      static empty(bb) {
        return new tb(bb ? [bb, -1] : [], [])
      }
      static fromJSON(bb) {
        if (!Array.isArray(bb)) throw new RangeError("Invalid JSON representation of ChangeSet");
        let ub = [],
          hb = [];
        for (let Bb = 0; Bb < bb.length; Bb++) {
          let Ob = bb[Bb];
          if ("number" == typeof Ob) ub.push(Ob, -1);
          else {
            if (!Array.isArray(Ob) || "number" != typeof Ob[0] || Ob.some(((bb, ub) => ub && "string" != typeof bb))) throw new RangeError("Invalid JSON representation of ChangeSet");
            if (1 == Ob.length) ub.push(Ob[0], 0);
            else {
              for (; hb.length < Bb;) hb.push(pb.empty);
              hb[Bb] = pb.of(Ob.slice(1)), ub.push(Ob[0], hb[Bb].length)
            }
          }
        }
        return new tb(ub, hb)
      }
      static createSet(bb, ub) {
        return new tb(bb, ub)
      }
    }

    function Jb(bb, ub, hb) {
      let Bb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (0 == ub && hb <= 0) return;
      let Ob = bb.length - 2;
      Ob >= 0 && hb <= 0 && hb == bb[Ob + 1] ? bb[Ob] += ub : Ob >= 0 && 0 == ub && 0 == bb[Ob] ? bb[Ob + 1] += hb : Bb ? (bb[Ob] += ub, bb[Ob + 1] += hb) : bb.push(ub, hb)
    }

    function eb(bb, ub, hb) {
      if (0 == hb.length) return;
      let Bb = ub.length - 2 >> 1;
      if (Bb < bb.length) bb[bb.length - 1] = bb[bb.length - 1].append(hb);
      else {
        for (; bb.length < Bb;) bb.push(pb.empty);
        bb.push(hb)
      }
    }

    function Nb(bb, ub, hb) {
      let Bb = bb.inserted;
      for (let Ob = 0, Gb = 0, Ub = 0; Ub < bb.sections.length;) {
        let Lb = bb.sections[Ub++],
          Yb = bb.sections[Ub++];
        if (Yb < 0) Ob += Lb, Gb += Lb;
        else {
          let Sb = Ob,
            ab = Gb,
            Hb = pb.empty;
          for (; Sb += Lb, ab += Yb, Yb && Bb && (Hb = Hb.append(Bb[Ub - 2 >> 1])), !(hb || Ub == bb.sections.length || bb.sections[Ub + 1] < 0);) Lb = bb.sections[Ub++], Yb = bb.sections[Ub++];
          ub(Ob, Sb, Gb, ab, Hb), Ob = Sb, Gb = ab
        }
      }
    }

    function sb(bb, ub, hb) {
      let Bb = [],
        Ob = arguments.length > 3 && void 0 !== arguments[3] && arguments[3] ? [] : null,
        Gb = new mb(bb),
        Ub = new mb(ub),
        Lb = 0;
      for (let Yb = -1;;) {
        if (++Lb > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - likely malformed ChangeSet");
        if (Gb.done && Ub.len || Ub.done && Gb.len) throw new Error("Mismatched change set lengths");
        if (-1 == Gb.ins && -1 == Ub.ins) {
          let bb = Math.min(Gb.len, Ub.len);
          Jb(Bb, bb, -1), Gb.forward(bb), Ub.forward(bb)
        } else if (Ub.ins >= 0 && (Gb.ins < 0 || Yb == Gb.i || 0 == Gb.off && (Ub.len < Gb.len || Ub.len == Gb.len && !hb))) {
          let bb = Ub.len;
          for (Jb(Bb, Ub.ins, -1); bb;) {
            if (++Lb > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-b");
            let ub = Math.min(Gb.len, bb);
            Gb.ins >= 0 && Yb < Gb.i && Gb.len <= ub && (Jb(Bb, 0, Gb.ins), Ob && eb(Ob, Bb, Gb.text), Yb = Gb.i), Gb.forward(ub), bb -= ub
          }
          Ub.next()
        } else {
          if (!(Gb.ins >= 0)) {
            if (Gb.done && Ub.done) return Ob ? tb.createSet(Bb, Ob) : vb.create(Bb);
            throw new Error("Mismatched change set lengths")
          } {
            let bb = 0,
              ub = Gb.len;
            for (; ub;) {
              if (++Lb > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-a");
              if (-1 == Ub.ins) {
                let hb = Math.min(ub, Ub.len);
                bb += hb, ub -= hb, Ub.forward(hb)
              } else {
                if (!(0 == Ub.ins && Ub.len < ub)) break;
                ub -= Ub.len, Ub.next()
              }
            }
            Jb(Bb, bb, Yb < Gb.i ? Gb.ins : 0), Ob && Yb < Gb.i && eb(Ob, Bb, Gb.text), Yb = Gb.i, Gb.forward(Gb.len - ub)
          }
        }
      }
    }

    function Mb(bb, ub) {
      let hb = [],
        Bb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? [] : null,
        Ob = new mb(bb),
        Gb = new mb(ub),
        Ub = 0;
      for (let Lb = !1;;) {
        if (++Ub > 2e6) throw new Error("BLOXD CODEMIRROR: composeSets exceeded max iterations - likely malformed ChangeSet");
        if (Ob.done && Gb.done) return Bb ? tb.createSet(hb, Bb) : vb.create(hb);
        if (0 == Ob.ins) Jb(hb, Ob.len, 0, Lb), Ob.next();
        else if (0 != Gb.len || Gb.done) {
          if (Ob.done || Gb.done) throw new Error("Mismatched change set lengths");
          {
            let bb = Math.min(Ob.len2, Gb.len),
              ub = hb.length;
            if (-1 == Ob.ins) {
              let ub = -1 == Gb.ins ? -1 : Gb.off ? 0 : Gb.ins;
              Jb(hb, bb, ub, Lb), Bb && ub && eb(Bb, hb, Gb.text)
            } else - 1 == Gb.ins ? (Jb(hb, Ob.off ? 0 : Ob.len, bb, Lb), Bb && eb(Bb, hb, Ob.textBit(bb))) : (Jb(hb, Ob.off ? 0 : Ob.len, Gb.off ? 0 : Gb.ins, Lb), Bb && !Gb.off && eb(Bb, hb, Gb.text));
            Lb = (Ob.ins > bb || Gb.ins >= 0 && Gb.len > bb) && (Lb || hb.length > ub), Ob.forward2(bb), Gb.forward(bb)
          }
        } else Jb(hb, 0, Gb.ins, Lb), Bb && eb(Bb, hb, Gb.text), Gb.next()
      }
    }
    class mb {
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
        } = this.set, ub = this.i - 2 >> 1;
        return ub >= bb.length ? pb.empty : bb[ub]
      }
      textBit(bb) {
        let {
          inserted: ub
        } = this.set, hb = this.i - 2 >> 1;
        return hb >= ub.length && !bb ? pb.empty : ub[hb].slice(this.off, null == bb ? void 0 : this.off + bb)
      }
      forward(bb) {
        bb == this.len ? this.next() : (this.len -= bb, this.off += bb)
      }
      forward2(bb) {
        -1 == this.ins ? this.forward(bb) : bb == this.ins ? this.next() : (this.ins -= bb, this.off += bb)
      }
    }
    class Ib {
      constructor(bb, ub, hb) {
        this.from = bb, this.to = ub, this.flags = hb
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
        let ub, hb, Bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return this.empty ? ub = hb = bb.mapPos(this.from, Bb) : (ub = bb.mapPos(this.from, 1), hb = bb.mapPos(this.to, -1)), ub == this.from && hb == this.to ? this : new Ib(ub, hb, this.flags)
      }
      extend(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bb,
          hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (bb <= this.anchor && ub >= this.anchor) return Pb.range(bb, ub, void 0, void 0, hb);
        let Bb = Math.abs(bb - this.anchor) > Math.abs(ub - this.anchor) ? bb : ub;
        return Pb.range(this.anchor, Bb, void 0, void 0, hb)
      }
      eq(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.anchor == bb.anchor && this.head == bb.head && this.goalColumn == bb.goalColumn && (!ub || !this.empty || this.assoc == bb.assoc)
      }
      toJSON() {
        return {
          anchor: this.anchor,
          head: this.head
        }
      }
      static fromJSON(bb) {
        if (!bb || "number" != typeof bb.anchor || "number" != typeof bb.head) throw new RangeError("Invalid JSON representation for SelectionRange");
        return Pb.range(bb.anchor, bb.head)
      }
      static create(bb, ub, hb) {
        return new Ib(bb, ub, hb)
      }
    }
    class Pb {
      constructor(bb, ub) {
        this.tp = bb, this.mainIndex = ub
      }
      map(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return bb.empty ? this : Pb.create(this.tp.map((hb => hb.map(bb, ub))), this.mainIndex)
      }
      eq(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.tp.length != bb.tp.length || this.mainIndex != bb.mainIndex) return !1;
        for (let hb = 0; hb < this.tp.length; hb++)
          if (!this.tp[hb].eq(bb.tp[hb], ub)) return !1;
        return !0
      }
      get main() {
        return this.tp[this.mainIndex]
      }
      asSingle() {
        return 1 == this.tp.length ? this : new Pb([this.main], 0)
      }
      addRange(bb) {
        let ub = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return Pb.create([bb].concat(this.tp), ub ? 0 : this.mainIndex + 1)
      }
      replaceRange(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.mainIndex,
          hb = this.tp.slice();
        return hb[ub] = bb, Pb.create(hb, this.mainIndex)
      }
      toJSON() {
        return {
          tp: this.tp.map((bb => bb.toJSON())),
          main: this.mainIndex
        }
      }
      static fromJSON(bb) {
        if (!bb || !Array.isArray(bb.tp) || "number" != typeof bb.main || bb.main >= bb.tp.length) throw new RangeError("Invalid JSON representation for EditorSelection");
        return new Pb(bb.tp.map((bb => Ib.fromJSON(bb))), bb.main)
      }
      static single(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bb;
        return new Pb([Pb.range(bb, ub)], 0)
      }
      static create(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (0 == bb.length) throw new RangeError("A selection needs at least one range");
        for (let hb = 0, Bb = 0; Bb < bb.length; Bb++) {
          let Ob = bb[Bb];
          if (Ob.empty ? Ob.from <= hb : Ob.from < hb) return Pb.normalized(bb.slice(), ub);
          hb = Ob.to
        }
        return new Pb(bb, ub)
      }
      static cursor(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          hb = arguments.length > 2 ? arguments[2] : void 0,
          Bb = arguments.length > 3 ? arguments[3] : void 0;
        return Ib.create(bb, bb, (0 == ub ? 0 : ub < 0 ? 8 : 16) | (null == hb ? 7 : Math.min(6, hb)) | (null !== Bb && void 0 !== Bb ? Bb : 16777215) << 6)
      }
      static range(bb, ub, hb, Bb, Ob) {
        let Gb = (null !== hb && void 0 !== hb ? hb : 16777215) << 6 | (null == Bb ? 7 : Math.min(6, Bb));
        return Ob || bb == ub || (Ob = ub < bb ? 1 : -1), ub < bb ? Ib.create(ub, bb, 48 | Gb) : Ib.create(bb, ub, (Ob ? Ob < 0 ? 8 : 16 : 0) | Gb)
      }
      static normalized(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          hb = bb[ub];
        bb.sort(((bb, ub) => bb.from - ub.from)), ub = bb.indexOf(hb);
        for (let Bb = 1; Bb < bb.length; Bb++) {
          let hb = bb[Bb],
            Ob = bb[Bb - 1];
          if (hb.empty ? hb.from <= Ob.to : hb.from < Ob.to) {
            let Gb = Ob.from,
              Ub = Math.max(hb.to, Ob.to);
            Bb <= ub && ub--, bb.splice(--Bb, 2, hb.anchor > hb.head ? Pb.range(Ub, Gb) : Pb.range(Gb, Ub))
          }
        }
        return new Pb(bb, ub)
      }
    }

    function qb(bb, ub) {
      for (let hb of bb.tp)
        if (hb.to > ub) throw new RangeError("Selection points outside of document")
    }
    let Eb = 0;
    class yb {
      constructor(bb, ub, hb, Bb, Ob) {
        this.combine = bb, this.compareInput = ub, this.compare = hb, this.isStatic = Bb, this.id = Eb++, this.default = bb([]), this.extensions = "function" == typeof Ob ? Ob(this) : Ob
      }
      get reader() {
        return this
      }
      static define() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return new yb(bb.combine || (bb => bb), bb.compareInput || ((bb, ub) => bb === ub), bb.compare || (bb.combine ? (bb, ub) => bb === ub : Vb), !!bb.static, bb.enables)
      }
      of(bb) {
        return new Fb([], this, 0, bb)
      }
      compute(bb, ub) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new Fb(bb, this, 1, ub)
      }
      computeN(bb, ub) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new Fb(bb, this, 2, ub)
      }
      from(bb, ub) {
        return ub || (ub = bb => bb), this.compute([bb], (hb => ub(hb.field(bb))))
      }
    }

    function Vb(bb, ub) {
      return bb == ub || bb.length == ub.length && bb.every(((bb, hb) => bb === ub[hb]))
    }
    class Fb {
      constructor(bb, ub, hb, Bb) {
        this.dependencies = bb, this.facet = ub, this.type = hb, this.value = Bb, this.id = Eb++
      }
      dynamicSlot(bb) {
        var ub;
        let hb = this.value,
          Bb = this.facet.compareInput,
          Ob = this.id,
          Gb = bb[Ob] >> 1,
          Ub = 2 == this.type,
          Lb = !1,
          Yb = !1,
          Sb = [];
        for (let ab of this.dependencies) "doc" == ab ? Lb = !0 : "selection" == ab ? Yb = !0 : 0 == (1 & (null !== (ub = bb[ab.id]) && void 0 !== ub ? ub : 1)) && Sb.push(bb[ab.id]);
        return {
          create: bb => (bb.values[Gb] = hb(bb), 1),
          update(bb, ub) {
            if (Lb && ub.docChanged || Yb && (ub.docChanged || ub.selection) || kb(bb, Sb)) {
              let ub = hb(bb);
              if (Ub ? !fb(ub, bb.values[Gb], Bb) : !Bb(ub, bb.values[Gb])) return bb.values[Gb] = ub, 1
            }
            return 0
          },
          reconfigure: (bb, ub) => {
            let Lb, Yb = ub.config.address[Ob];
            if (null != Yb) {
              let Ob = au(ub, Yb);
              if (this.dependencies.every((hb => hb instanceof yb ? ub.facet(hb) === bb.facet(hb) : !(hb instanceof Qb) || ub.field(hb, !1) == bb.field(hb, !1))) || (Ub ? fb(Lb = hb(bb), Ob, Bb) : Bb(Lb = hb(bb), Ob))) return bb.values[Gb] = Ob, 0
            } else Lb = hb(bb);
            return bb.values[Gb] = Lb, 1
          }
        }
      }
    }

    function fb(bb, ub, hb) {
      if (bb.length != ub.length) return !1;
      for (let Bb = 0; Bb < bb.length; Bb++)
        if (!hb(bb[Bb], ub[Bb])) return !1;
      return !0
    }

    function kb(bb, ub) {
      let hb = !1;
      for (let Bb of ub) 1 & Su(bb, Bb) && (hb = !0);
      return hb
    }

    function Tb(bb, ub, hb) {
      let Bb = hb.map((ub => bb[ub.id])),
        Ob = hb.map((bb => bb.type)),
        Gb = Bb.filter((bb => !(1 & bb))),
        Ub = bb[ub.id] >> 1;

      function Lb(bb) {
        let hb = [];
        for (let ub = 0; ub < Bb.length; ub++) {
          let Gb = au(bb, Bb[ub]);
          if (2 == Ob[ub])
            for (let bb of Gb) hb.push(bb);
          else hb.push(Gb)
        }
        return ub.combine(hb)
      }
      return {
        create(bb) {
          for (let ub of Bb) Su(bb, ub);
          return bb.values[Ub] = Lb(bb), 1
        },
        update(bb, hb) {
          if (!kb(bb, Gb)) return 0;
          let Bb = Lb(bb);
          return ub.compare(Bb, bb.values[Ub]) ? 0 : (bb.values[Ub] = Bb, 1)
        },
        reconfigure(bb, Ob) {
          let Gb = kb(bb, Bb),
            Yb = Ob.config.facets[ub.id],
            Sb = Ob.facet(ub);
          if (Yb && !Gb && Vb(hb, Yb)) return bb.values[Ub] = Sb, 0;
          let ab = Lb(bb);
          return ub.compare(ab, Sb) ? (bb.values[Ub] = Sb, 0) : (bb.values[Ub] = ab, 1)
        }
      }
    }
    const cb = yb.define({
      static: !0
    });
    class Qb {
      constructor(bb, ub, hb, Bb, Ob) {
        this.id = bb, this.createF = ub, this.updateF = hb, this.compareF = Bb, this.spec = Ob, this.provides = void 0
      }
      static define(bb) {
        let ub = new Qb(Eb++, bb.create, bb.update, bb.compare || ((bb, ub) => bb === ub), bb);
        return bb.provide && (ub.provides = bb.provide(ub)), ub
      }
      create(bb) {
        let ub = bb.facet(cb).find((bb => bb.field == this));
        return ((null === ub || void 0 === ub ? void 0 : ub.create) || this.createF)(bb)
      }
      slot(bb) {
        let ub = bb[this.id] >> 1;
        return {
          create: bb => (bb.values[ub] = this.create(bb), 1),
          update: (bb, hb) => {
            let Bb = bb.values[ub],
              Ob = this.updateF(Bb, hb);
            return this.compareF(Bb, Ob) ? 0 : (bb.values[ub] = Ob, 1)
          },
          reconfigure: (bb, hb) => {
            let Bb, Ob = bb.facet(cb),
              Gb = hb.facet(cb);
            return (Bb = Ob.find((bb => bb.field == this))) && Bb != Gb.find((bb => bb.field == this)) ? (bb.values[ub] = Bb.create(bb), 1) : null != hb.config.address[this.id] ? (bb.values[ub] = hb.field(this), 0) : (bb.values[ub] = this.create(bb), 1)
          }
        }
      }
      init(bb) {
        return [this, cb.of({
          field: this,
          create: bb
        })]
      }
      get extension() {
        return this
      }
    }
    const Rb = 4,
      bu = 3,
      uu = 2,
      hu = 1;

    function Bu(bb) {
      return ub => new Gu(ub, bb)
    }
    const Ou = {
      highest: Bu(0),
      high: Bu(hu),
      default: Bu(uu),
      low: Bu(bu),
      lowest: Bu(Rb)
    };
    class Gu {
      constructor(bb, ub) {
        this.inner = bb, this.prec = ub
      }
    }
    class Uu {
      of(bb) {
        return new Lu(this, bb)
      }
      reconfigure(bb) {
        return Uu.reconfigure.of({
          compartment: this,
          extension: bb
        })
      }
      get(bb) {
        return bb.config.compartments.get(this)
      }
    }
    class Lu {
      constructor(bb, ub) {
        this.compartment = bb, this.inner = ub
      }
    }
    class Yu {
      constructor(bb, ub, hb, Bb, Ob, Gb) {
        for (this.base = bb, this.compartments = ub, this.dynamicSlots = hb, this.address = Bb, this.staticValues = Ob, this.facets = Gb, this.statusTemplate = []; this.statusTemplate.length < hb.length;) this.statusTemplate.push(0)
      }
      staticFacet(bb) {
        let ub = this.address[bb.id];
        return null == ub ? bb.default : this.staticValues[ub >> 1]
      }
      static resolve(bb, ub, hb) {
        let Bb = [],
          Ob = Object.create(null),
          Gb = new Map;
        for (let Hb of function(bb, ub, hb) {
            let Bb = [
                [],
                [],
                [],
                [],
                []
              ],
              Ob = new Map;

            function Gb(bb, Ub) {
              let Lb = Ob.get(bb);
              if (null != Lb) {
                if (Lb <= Ub) return;
                let ub = Bb[Lb].indexOf(bb);
                ub > -1 && Bb[Lb].splice(ub, 1), bb instanceof Lu && hb.delete(bb.compartment)
              }
              if (Ob.set(bb, Ub), Array.isArray(bb))
                for (let ub of bb) Gb(ub, Ub);
              else if (bb instanceof Lu) {
                if (hb.has(bb.compartment)) throw new RangeError("Duplicate use of compartment in extensions");
                let Bb = ub.get(bb.compartment) || bb.inner;
                hb.set(bb.compartment, Bb), Gb(Bb, Ub)
              } else if (bb instanceof Gu) Gb(bb.inner, bb.prec);
              else if (bb instanceof Qb) Bb[Ub].push(bb), bb.provides && Gb(bb.provides, Ub);
              else if (bb instanceof Fb) Bb[Ub].push(bb), bb.facet.extensions && Gb(bb.facet.extensions, uu);
              else {
                let ub = bb.extension;
                if (!ub) throw new Error(`Unrecognized extension value in extension set (${bb}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
                Gb(ub, Ub)
              }
            }
            return Gb(bb, uu), Bb.reduce(((bb, ub) => bb.concat(ub)))
          }(bb, ub, Gb)) Hb instanceof Qb ? Bb.push(Hb) : (Ob[Hb.facet.id] || (Ob[Hb.facet.id] = [])).push(Hb);
        let Ub = Object.create(null),
          Lb = [],
          Yb = [];
        for (let Hb of Bb) Ub[Hb.id] = Yb.length << 1, Yb.push((bb => Hb.slot(bb)));
        let Sb = null === hb || void 0 === hb ? void 0 : hb.config.facets;
        for (let Hb in Ob) {
          let bb = Ob[Hb],
            ub = bb[0].facet,
            Bb = Sb && Sb[Hb] || [];
          if (bb.every((bb => 0 == bb.type)))
            if (Ub[ub.id] = Lb.length << 1 | 1, Vb(Bb, bb)) Lb.push(hb.facet(ub));
            else {
              let Bb = ub.combine(bb.map((bb => bb.value)));
              Lb.push(hb && ub.compare(Bb, hb.facet(ub)) ? hb.facet(ub) : Bb)
            }
          else {
            for (let ub of bb) 0 == ub.type ? (Ub[ub.id] = Lb.length << 1 | 1, Lb.push(ub.value)) : (Ub[ub.id] = Yb.length << 1, Yb.push((bb => ub.dynamicSlot(bb))));
            Ub[ub.id] = Yb.length << 1, Yb.push((hb => Tb(hb, ub, bb)))
          }
        }
        let ab = Yb.map((bb => bb(Ub)));
        return new Yu(bb, Gb, ab, Ub, Lb, Ob)
      }
    }

    function Su(bb, ub) {
      if (1 & ub) return 2;
      let hb = ub >> 1,
        Bb = bb.status[hb];
      if (4 == Bb) throw new Error("Cyclic dependency between fields and/or facets");
      if (2 & Bb) return Bb;
      bb.status[hb] = 4;
      let Ob = bb.computeSlot(bb, bb.config.dynamicSlots[hb]);
      return bb.status[hb] = 2 | Ob
    }

    function au(bb, ub) {
      return 1 & ub ? bb.config.staticValues[ub >> 1] : bb.values[ub >> 1]
    }
    const Hu = yb.define(),
      wu = yb.define({
        combine: bb => bb.some((bb => bb)),
        static: !0
      }),
      Zu = yb.define({
        combine: bb => bb.length ? bb[0] : void 0,
        static: !0
      }),
      Xu = yb.define(),
      pu = yb.define(),
      ou = yb.define(),
      Au = yb.define({
        combine: bb => !!bb.length && bb[0]
      });
    class lu {
      constructor(bb, ub) {
        this.type = bb, this.value = ub
      }
      static define() {
        return new Ku
      }
    }
    class Ku {
      of(bb) {
        return new lu(this, bb)
      }
    }
    class Wu {
      constructor(bb) {
        this.map = bb
      }
      of(bb) {
        return new Cu(this, bb)
      }
    }
    class Cu {
      constructor(bb, ub) {
        this.type = bb, this.value = ub
      }
      map(bb) {
        let ub = this.type.map(this.value, bb);
        return void 0 === ub ? void 0 : ub == this.value ? this : new Cu(this.type, ub)
      }
      is(bb) {
        return this.type == bb
      }
      static define() {
        return new Wu((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).map || (bb => bb))
      }
      static mapEffects(bb, ub) {
        if (!bb.length) return bb;
        let hb = [];
        for (let Bb of bb) {
          let bb = Bb.map(ub);
          bb && hb.push(bb)
        }
        return hb
      }
    }
    Cu.reconfigure = Cu.define(), Cu.appendConfig = Cu.define();
    class du {
      constructor(bb, ub, hb, Bb, Ob, Gb) {
        this.startState = bb, this.changes = ub, this.selection = hb, this.effects = Bb, this.annotations = Ob, this.scrollIntoView = Gb, this._doc = null, this._state = null, hb && qb(hb, ub.newLength), Ob.some((bb => bb.type == du.time)) || (this.annotations = Ob.concat(du.time.of(Date.now())))
      }
      static create(bb, ub, hb, Bb, Ob, Gb) {
        return new du(bb, ub, hb, Bb, Ob, Gb)
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
        for (let ub of this.annotations)
          if (ub.type == bb) return ub.value
      }
      get docChanged() {
        return !this.changes.empty
      }
      get reconfigured() {
        return this.startState.config != this.state.config
      }
      isUserEvent(bb) {
        let ub = this.annotation(du.userEvent);
        return !(!ub || !(ub == bb || ub.length > bb.length && ub.slice(0, bb.length) == bb && "." == ub[bb.length]))
      }
    }

    function ru(bb, ub) {
      let hb = [];
      for (let Bb = 0, Ob = 0;;) {
        let Gb, Ub;
        if (Bb < bb.length && (Ob == ub.length || ub[Ob] >= bb[Bb])) Gb = bb[Bb++], Ub = bb[Bb++];
        else {
          if (!(Ob < ub.length)) return hb;
          Gb = ub[Ob++], Ub = ub[Ob++]
        }!hb.length || hb[hb.length - 1] < Gb ? hb.push(Gb, Ub) : hb[hb.length - 1] < Ub && (hb[hb.length - 1] = Ub)
      }
    }

    function ju(bb, ub, hb) {
      var Bb;
      let Ob, Gb, Ub;
      return hb ? (Ob = ub.changes, Gb = tb.empty(ub.changes.length), Ub = bb.changes.compose(ub.changes)) : (Ob = ub.changes.map(bb.changes), Gb = bb.changes.mapDesc(ub.changes, !0), Ub = bb.changes.compose(Ob)), {
        changes: Ub,
        selection: ub.selection ? ub.selection.map(Gb) : null === (Bb = bb.selection) || void 0 === Bb ? void 0 : Bb.map(Ob),
        effects: Cu.mapEffects(bb.effects, Ob).concat(Cu.mapEffects(ub.effects, Gb)),
        annotations: bb.annotations.length ? bb.annotations.concat(ub.annotations) : ub.annotations,
        scrollIntoView: bb.scrollIntoView || ub.scrollIntoView
      }
    }

    function nu(bb, ub, hb) {
      let Bb = ub.selection,
        Ob = zu(ub.annotations);
      return ub.userEvent && (Ob = Ob.concat(du.userEvent.of(ub.userEvent))), {
        changes: ub.changes instanceof tb ? ub.changes : tb.of(ub.changes || [], hb, bb.facet(Zu)),
        selection: Bb && (Bb instanceof Pb ? Bb : Pb.single(Bb.anchor, Bb.head)),
        effects: zu(ub.effects),
        annotations: Ob,
        scrollIntoView: !!ub.scrollIntoView
      }
    }

    function Du(bb, ub, hb) {
      let Bb = nu(bb, ub.length ? ub[0] : {}, bb.doc.length);
      ub.length && !1 === ub[0].filter && (hb = !1);
      for (let Gb = 1; Gb < ub.length; Gb++) {
        !1 === ub[Gb].filter && (hb = !1);
        let Ob = !!ub[Gb].sequential;
        Bb = ju(Bb, nu(bb, ub[Gb], Ob ? Bb.changes.newLength : bb.doc.length), Ob)
      }
      let Ob = du.create(bb, Bb.changes, Bb.selection, Bb.effects, Bb.annotations, Bb.scrollIntoView);
      return function(bb) {
        let ub = bb.startState,
          hb = ub.facet(ou),
          Bb = bb;
        for (let Ob = hb.length - 1; Ob >= 0; Ob--) {
          let Gb = hb[Ob](bb);
          Gb && Object.keys(Gb).length && (Bb = ju(Bb, nu(ub, Gb, bb.changes.newLength), !0))
        }
        return Bb == bb ? bb : du.create(ub, bb.changes, bb.selection, Bb.effects, Bb.annotations, Bb.scrollIntoView)
      }(hb ? function(bb) {
        let ub = bb.startState,
          hb = !0;
        for (let Ob of ub.facet(Xu)) {
          let ub = Ob(bb);
          if (!1 === ub) {
            hb = !1;
            break
          }
          Array.isArray(ub) && (hb = !0 === hb ? ub : ru(hb, ub))
        }
        if (!0 !== hb) {
          let Bb, Ob;
          if (!1 === hb) Ob = bb.changes.invertedDesc, Bb = tb.empty(ub.doc.length);
          else {
            let ub = bb.changes.filter(hb);
            Bb = ub.changes, Ob = ub.filtered.mapDesc(ub.changes).invertedDesc
          }
          bb = du.create(ub, Bb, bb.selection && bb.selection.map(Ob), Cu.mapEffects(bb.effects, Ob), bb.annotations, bb.scrollIntoView)
        }
        let Bb = ub.facet(pu);
        for (let Ob = Bb.length - 1; Ob >= 0; Ob--) {
          let hb = Bb[Ob](bb);
          bb = hb instanceof du ? hb : Array.isArray(hb) && 1 == hb.length && hb[0] instanceof du ? hb[0] : Du(ub, zu(hb), !1)
        }
        return bb
      }(Ob) : Ob)
    }
    du.time = lu.define(), du.userEvent = lu.define(), du.addToHistory = lu.define(), du.remote = lu.define();
    const xu = [];

    function zu(bb) {
      return null == bb ? xu : Array.isArray(bb) ? bb : [bb]
    }
    var gu = function(bb) {
      return bb[bb.Word = 0] = "Word", bb[bb.Space = 1] = "Space", bb[bb.Other = 2] = "Other", bb
    }(gu || (gu = {}));
    const iu = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
    let vu;
    try {
      vu = new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u")
    } catch (hh) {}

    function tu(bb) {
      return ub => {
        if (!/\S/.test(ub)) return gu.Space;
        if (function(bb) {
            if (vu) return vu.test(bb);
            for (let ub = 0; ub < bb.length; ub++) {
              let hb = bb[ub];
              if (/\w/.test(hb) || hb > "\x80" && (hb.toUpperCase() != hb.toLowerCase() || iu.test(hb))) return !0
            }
            return !1
          }(ub)) return gu.Word;
        for (let hb = 0; hb < bb.length; hb++)
          if (ub.indexOf(bb[hb]) > -1) return gu.Word;
        return gu.Other
      }
    }
    class Ju {
      constructor(bb, ub, hb, Bb, Ob, Gb) {
        this.config = bb, this.doc = ub, this.selection = hb, this.values = Bb, this.status = bb.statusTemplate.slice(), this.computeSlot = Ob, Gb && (Gb._state = this);
        for (let Ub = 0; Ub < this.config.dynamicSlots.length; Ub++) Su(this, Ub << 1);
        this.computeSlot = null
      }
      field(bb) {
        let ub = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          hb = this.config.address[bb.id];
        if (null != hb) return Su(this, hb), au(this, hb);
        if (ub) throw new RangeError("Field is not present in this state")
      }
      update() {
        for (var bb = arguments.length, ub = new Array(bb), hb = 0; hb < bb; hb++) ub[hb] = arguments[hb];
        return Du(this, ub, !0)
      }
      applyTransaction(bb) {
        let ub, hb = this.config,
          {
            base: Bb,
            compartments: Ob
          } = hb;
        for (let Ub of bb.effects) Ub.is(Uu.reconfigure) ? (hb && (Ob = new Map, hb.compartments.forEach(((bb, ub) => Ob.set(ub, bb))), hb = null), Ob.set(Ub.value.compartment, Ub.value.extension)) : Ub.is(Cu.reconfigure) ? (hb = null, Bb = Ub.value) : Ub.is(Cu.appendConfig) && (hb = null, Bb = zu(Bb).concat(Ub.value));
        if (hb) ub = bb.startState.values.slice();
        else {
          hb = Yu.resolve(Bb, Ob, this), ub = new Ju(hb, this.doc, this.selection, hb.dynamicSlots.map((() => null)), ((bb, ub) => ub.reconfigure(bb, this)), null).values
        }
        let Gb = bb.startState.facet(wu) ? bb.newSelection : bb.newSelection.asSingle();
        new Ju(hb, bb.newDoc, Gb, ub, ((ub, hb) => hb.update(ub, bb)), bb)
      }
      replaceSelection(bb) {
        return "string" == typeof bb && (bb = this.toText(bb)), this.changeByRange((ub => ({
          changes: {
            from: ub.from,
            to: ub.to,
            insert: bb
          },
          range: Pb.cursor(ub.from + bb.length)
        })))
      }
      changeByRange(bb) {
        let ub = this.selection,
          hb = bb(ub.tp[0]),
          Bb = this.changes(hb.changes),
          Ob = [hb.range],
          Gb = zu(hb.effects);
        for (let Ub = 1; Ub < ub.tp.length; Ub++) {
          let hb = bb(ub.tp[Ub]),
            Lb = this.changes(hb.changes),
            Yb = Lb.map(Bb);
          for (let bb = 0; bb < Ub; bb++) Ob[bb] = Ob[bb].map(Yb);
          let Sb = Bb.mapDesc(Lb, !0);
          Ob.push(hb.range.map(Sb)), Bb = Bb.compose(Yb), Gb = Cu.mapEffects(Gb, Yb).concat(Cu.mapEffects(zu(hb.effects), Sb))
        }
        return {
          changes: Bb,
          selection: Pb.create(Ob, ub.mainIndex),
          effects: Gb
        }
      }
      changes() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return bb instanceof tb ? bb : tb.of(bb, this.doc.length, this.facet(Ju.lineSeparator))
      }
      toText(bb) {
        return pb.of(bb.split(this.facet(Ju.lineSeparator) || gb))
      }
      sliceDoc() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.doc.length;
        return this.doc.sliceString(bb, ub, this.lineBreak)
      }
      facet(bb) {
        let ub = this.config.address[bb.id];
        return null == ub ? bb.default : (Su(this, ub), au(this, ub))
      }
      toJSON(bb) {
        let ub = {
          doc: this.sliceDoc(),
          selection: this.selection.toJSON()
        };
        if (bb)
          for (let hb in bb) {
            let Bb = bb[hb];
            Bb instanceof Qb && null != this.config.address[Bb.id] && (ub[hb] = Bb.spec.toJSON(this.field(bb[hb]), this))
          }
        return ub
      }
      static fromJSON(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          hb = arguments.length > 2 ? arguments[2] : void 0;
        if (!bb || "string" != typeof bb.doc) throw new RangeError("Invalid JSON representation for EditorState");
        let Bb = [];
        if (hb)
          for (let Ob in hb)
            if (Object.prototype.hasOwnProperty.call(bb, Ob)) {
              let ub = hb[Ob],
                Gb = bb[Ob];
              Bb.push(ub.init((bb => ub.spec.fromJSON(Gb, bb))))
            } return Ju.create({
          doc: bb.doc,
          selection: Pb.fromJSON(bb.selection),
          extensions: ub.extensions ? Bb.concat([ub.extensions]) : Bb
        })
      }
      static create() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          ub = Yu.resolve(bb.extensions || [], new Map),
          hb = bb.doc instanceof pb ? bb.doc : pb.of((bb.doc || "").split(ub.staticFacet(Ju.lineSeparator) || gb)),
          Bb = bb.selection ? bb.selection instanceof Pb ? bb.selection : Pb.single(bb.selection.anchor, bb.selection.head) : Pb.single(0);
        return qb(Bb, hb.length), ub.staticFacet(wu) || (Bb = Bb.asSingle()), new Ju(ub, hb, Bb, ub.dynamicSlots.map((() => null)), ((bb, ub) => ub.create(bb)), null)
      }
      get tabSize() {
        return this.facet(Ju.tabSize)
      }
      get lineBreak() {
        return this.facet(Ju.lineSeparator) || "\n"
      }
      get readOnly() {
        return this.facet(Au)
      }
      phrase(bb) {
        for (var ub = arguments.length, hb = new Array(ub > 1 ? ub - 1 : 0), Bb = 1; Bb < ub; Bb++) hb[Bb - 1] = arguments[Bb];
        for (let Ob of this.facet(Ju.phrases))
          if (Object.prototype.hasOwnProperty.call(Ob, bb)) {
            bb = Ob[bb];
            break
          } return hb.length && (bb = bb.replace(/\$(\$|\d*)/g, ((bb, ub) => {
          if ("$" == ub) return "$";
          let Bb = +(ub || 1);
          return !Bb || Bb > hb.length ? bb : hb[Bb - 1]
        }))), bb
      }
      languageDataAt(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          Bb = [];
        for (let Ob of this.facet(Hu))
          for (let Gb of Ob(this, ub, hb)) Object.prototype.hasOwnProperty.call(Gb, bb) && Bb.push(Gb[bb]);
        return Bb
      }
      charCategorizer(bb) {
        let ub = this.languageDataAt("wordChars", bb);
        return tu(ub.length ? ub[0] : "")
      }
      wordAt(bb) {
        let {
          text: ub,
          from: hb,
          length: Bb
        } = this.doc.lineAt(bb), Ob = this.charCategorizer(bb), Gb = bb - hb, Ub = bb - hb;
        for (; Gb > 0;) {
          let bb = nb(ub, Gb, !1);
          if (Ob(ub.slice(bb, Gb)) != gu.Word) break;
          Gb = bb
        }
        for (; Ub < Bb;) {
          let bb = nb(ub, Ub);
          if (Ob(ub.slice(Ub, bb)) != gu.Word) break;
          Ub = bb
        }
        return Gb == Ub ? null : Pb.range(Gb + hb, Ub + hb)
      }
    }

    function eu(bb, ub) {
      let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        Bb = {};
      for (let Ob of bb)
        for (let bb of Object.keys(Ob)) {
          let ub = Ob[bb],
            Gb = Bb[bb];
          if (void 0 === Gb) Bb[bb] = ub;
          else if (Gb === ub || void 0 === ub);
          else {
            if (!Object.hasOwnProperty.call(hb, bb)) throw new Error("Config merge conflict for field " + bb);
            Bb[bb] = hb[bb](Gb, ub)
          }
        }
      for (let Ob in ub) void 0 === Bb[Ob] && (Bb[Ob] = ub[Ob]);
      return Bb
    }
    Ju.allowMultipleSelections = wu, Ju.tabSize = yb.define({
      combine: bb => bb.length ? bb[0] : 4
    }), Ju.lineSeparator = Zu, Ju.readOnly = Au, Ju.phrases = yb.define({
      compare(bb, ub) {
        let hb = Object.keys(bb),
          Bb = Object.keys(ub);
        return hb.length == Bb.length && hb.every((hb => bb[hb] == ub[hb]))
      }
    }), Ju.languageData = Hu, Ju.changeFilter = Xu, Ju.transactionFilter = pu, Ju.transactionExtender = ou, Uu.reconfigure = Cu.define();
    class Nu {
      eq(bb) {
        return this == bb
      }
      range(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bb;
        return Mu.create(bb, ub, this)
      }
    }

    function su(bb, ub) {
      return bb == ub || bb.constructor == ub.constructor && bb.eq(ub)
    }
    Nu.prototype.startSide = Nu.prototype.endSide = 0, Nu.prototype.point = !1, Nu.prototype.mapMode = ib.TrackDel;
    class Mu {
      constructor(bb, ub, hb) {
        this.from = bb, this.to = ub, this.value = hb
      }
      static create(bb, ub, hb) {
        return new Mu(bb, ub, hb)
      }
    }

    function mu(bb, ub) {
      return bb.from - ub.from || bb.value.startSide - ub.value.startSide
    }
    class Iu {
      constructor(bb, ub, hb, Bb) {
        this.from = bb, this.to = ub, this.value = hb, this.KBb = Bb
      }
      get length() {
        return this.to[this.to.length - 1]
      }
      findIndex(bb, ub, hb) {
        let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Ob = hb ? this.to : this.from;
        for (let Gb = Bb, Ub = Ob.length;;) {
          if (Gb == Ub) return Gb;
          let Bb = Gb + Ub >> 1,
            Lb = Ob[Bb] - bb || (hb ? this.value[Bb].endSide : this.value[Bb].startSide) - ub;
          if (Bb == Gb) return Lb >= 0 ? Gb : Ub;
          Lb >= 0 ? Ub = Bb : Gb = Bb + 1
        }
      }
      between(bb, ub, hb, Bb) {
        for (let Ob = this.findIndex(ub, -1e9, !0), Gb = this.findIndex(hb, 1e9, !1, Ob); Ob < Gb; Ob++)
          if (!1 === Bb(this.from[Ob] + bb, this.to[Ob] + bb, this.value[Ob])) return !1
      }
      map(bb, ub) {
        let hb = [],
          Bb = [],
          Ob = [],
          Gb = -1,
          Ub = -1;
        for (let Lb = 0; Lb < this.value.length; Lb++) {
          let Yb, Sb, ab = this.value[Lb],
            Hb = this.from[Lb] + bb,
            wb = this.to[Lb] + bb;
          if (Hb == wb) {
            let bb = ub.mapPos(Hb, ab.startSide, ab.mapMode);
            if (null == bb) continue;
            if (Yb = Sb = bb, ab.startSide != ab.endSide && (Sb = ub.mapPos(Hb, ab.endSide), Sb < Yb)) continue
          } else if (Yb = ub.mapPos(Hb, ab.startSide), Sb = ub.mapPos(wb, ab.endSide), Yb > Sb || Yb == Sb && ab.startSide > 0 && ab.endSide <= 0) continue;
          (Sb - Yb || ab.endSide - ab.startSide) < 0 || (Gb < 0 && (Gb = Yb), ab.point && (Ub = Math.max(Ub, Sb - Yb)), hb.push(ab), Bb.push(Yb - Gb), Ob.push(Sb - Gb))
        }
        return {
          mapped: hb.length ? new Iu(Bb, Ob, hb, Ub) : null,
          pos: Gb
        }
      }
    }
    class Pu {
      constructor(bb, ub, hb, Bb) {
        this.chunkPos = bb, this.chunk = ub, this.nextLayer = hb, this.KBb = Bb
      }
      static create(bb, ub, hb, Bb) {
        return new Pu(bb, ub, hb, Bb)
      }
      get length() {
        let bb = this.chunk.length - 1;
        return bb < 0 ? 0 : Math.max(this.chunkEnd(bb), this.nextLayer.length)
      }
      get size() {
        if (this.MZ) return 0;
        let bb = this.nextLayer.size;
        for (let ub of this.chunk) bb += ub.value.length;
        return bb
      }
      chunkEnd(bb) {
        return this.chunkPos[bb] + this.chunk[bb].length
      }
      update(bb) {
        let {
          add: ub = [],
          sort: hb = !1,
          filterFrom: Bb = 0,
          filterTo: Ob = this.length
        } = bb, Gb = bb.filter;
        if (0 == ub.length && !Gb) return this;
        if (hb && (ub = ub.slice().sort(mu)), this.MZ) return ub.length ? Pu.of(ub) : this;
        let Ub = new yu(this, null, -1).goto(0),
          Lb = 0,
          Yb = [],
          Sb = new qu;
        for (; Ub.value || Lb < ub.length;)
          if (Lb < ub.length && (Ub.from - ub[Lb].from || Ub.startSide - ub[Lb].value.startSide) >= 0) {
            let bb = ub[Lb++];
            Sb.addInner(bb.from, bb.to, bb.value) || Yb.push(bb)
          } else 1 == Ub.rangeIndex && Ub.chunkIndex < this.chunk.length && (Lb == ub.length || this.chunkEnd(Ub.chunkIndex) < ub[Lb].from) && (!Gb || Bb > this.chunkEnd(Ub.chunkIndex) || Ob < this.chunkPos[Ub.chunkIndex]) && Sb.addChunk(this.chunkPos[Ub.chunkIndex], this.chunk[Ub.chunkIndex]) ? Ub.nextChunk() : ((!Gb || Bb > Ub.to || Ob < Ub.from || Gb(Ub.from, Ub.to, Ub.value)) && (Sb.addInner(Ub.from, Ub.to, Ub.value) || Yb.push(Mu.create(Ub.from, Ub.to, Ub.value))), Ub.next());
        return Sb.finishInner(this.nextLayer.MZ && !Yb.length ? Pu.empty : this.nextLayer.update({
          add: Yb,
          filter: Gb,
          filterFrom: Bb,
          filterTo: Ob
        }))
      }
      map(bb) {
        if (bb.empty || this.MZ) return this;
        let ub = [],
          hb = [],
          Bb = -1;
        for (let Gb = 0; Gb < this.chunk.length; Gb++) {
          let Ob = this.chunkPos[Gb],
            Ub = this.chunk[Gb],
            Lb = bb.touchesRange(Ob, Ob + Ub.length);
          if (!1 === Lb) Bb = Math.max(Bb, Ub.KBb), ub.push(Ub), hb.push(bb.mapPos(Ob));
          else if (!0 === Lb) {
            let {
              mapped: Gb,
              pos: Lb
            } = Ub.map(Ob, bb);
            Gb && (Bb = Math.max(Bb, Gb.KBb), ub.push(Gb), hb.push(Lb))
          }
        }
        let Ob = this.nextLayer.map(bb);
        return 0 == ub.length ? Ob : new Pu(hb, ub, Ob || Pu.empty, Bb)
      }
      between(bb, ub, hb) {
        if (!this.MZ) {
          for (let Bb = 0; Bb < this.chunk.length; Bb++) {
            let Ob = this.chunkPos[Bb],
              Gb = this.chunk[Bb];
            if (ub >= Ob && bb <= Ob + Gb.length && !1 === Gb.between(Ob, bb - Ob, ub - Ob, hb)) return
          }
          this.nextLayer.between(bb, ub, hb)
        }
      }
      iter() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return Vu.from([this]).goto(bb)
      }
      get MZ() {
        return this.nextLayer == this
      }
      static iter(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Vu.from(bb).goto(ub)
      }
      static compare(bb, ub, hb, Bb) {
        let Ob = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1,
          Gb = bb.filter((bb => bb.KBb > 0 || !bb.MZ && bb.KBb >= Ob)),
          Ub = ub.filter((bb => bb.KBb > 0 || !bb.MZ && bb.KBb >= Ob)),
          Lb = Eu(Gb, Ub, hb),
          Yb = new fu(Gb, Lb, Ob),
          Sb = new fu(Ub, Lb, Ob);
        hb.iterGaps(((bb, ub, hb) => ku(Yb, bb, Sb, ub, hb, Bb))), hb.empty && 0 == hb.length && ku(Yb, 0, Sb, 0, 0, Bb)
      }
      static eq(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Bb = arguments.length > 3 ? arguments[3] : void 0;
        null == Bb && (Bb = 999999999);
        let Ob = bb.filter((bb => !bb.MZ && ub.indexOf(bb) < 0)),
          Gb = ub.filter((ub => !ub.MZ && bb.indexOf(ub) < 0));
        if (Ob.length != Gb.length) return !1;
        if (!Ob.length) return !0;
        let Ub = Eu(Ob, Gb),
          Lb = new fu(Ob, Ub, 0).goto(hb),
          Yb = new fu(Gb, Ub, 0).goto(hb);
        for (;;) {
          if (Lb.to != Yb.to || !Tu(Lb.active, Yb.active) || Lb.point && (!Yb.point || !su(Lb.point, Yb.point))) return !1;
          if (Lb.to > Bb) return !0;
          Lb.next(), Yb.next()
        }
      }
      static spans(bb, ub, hb, Bb) {
        let Ob = new fu(bb, null, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1).goto(ub),
          Gb = ub,
          Ub = Ob.openStart;
        for (;;) {
          let bb = Math.min(Ob.to, hb);
          if (Ob.point) {
            let hb = Ob.activeForPoint(Ob.to),
              Lb = Ob.pointFrom < ub ? hb.length + 1 : Ob.point.startSide < 0 ? hb.length : Math.min(hb.length, Ub);
            Bb.point(Gb, bb, Ob.point, hb, Lb, Ob.pointRank), Ub = Math.min(Ob.openEnd(bb), hb.length)
          } else bb > Gb && (Bb.span(Gb, bb, Ob.active, Ub), Ub = Ob.openEnd(bb));
          if (Ob.to > hb) return Ub + (Ob.point && Ob.to > hb ? 1 : 0);
          Gb = Ob.to, Ob.next()
        }
      }
      static of (bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          hb = new qu;
        for (let Bb of bb instanceof Mu ? [bb] : ub ? function(bb) {
            if (bb.length > 1)
              for (let ub = bb[0], hb = 1; hb < bb.length; hb++) {
                let Bb = bb[hb];
                if (mu(ub, Bb) > 0) return bb.slice().sort(mu);
                ub = Bb
              }
            return bb
          }(bb) : bb) hb.add(Bb.from, Bb.to, Bb.value);
        return hb.finish()
      }
      static join(bb) {
        if (!bb.length) return Pu.empty;
        let ub = bb[bb.length - 1];
        for (let hb = bb.length - 2; hb >= 0; hb--)
          for (let Bb = bb[hb]; Bb != Pu.empty; Bb = Bb.nextLayer) ub = new Pu(Bb.chunkPos, Bb.chunk, ub, Math.max(Bb.KBb, ub.KBb));
        return ub
      }
    }
    Pu.empty = new Pu([], [], null, -1), Pu.empty.nextLayer = Pu.empty;
    class qu {
      finishChunk(bb) {
        this.chunks.push(new Iu(this.from, this.to, this.value, this.KBb)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.KBb), this.KBb = -1, bb && (this.from = [], this.to = [], this.value = [])
      }
      constructor() {
        this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.KBb = -1, this.setMaxPoint = -1, this.nextLayer = null
      }
      add(bb, ub, hb) {
        this.addInner(bb, ub, hb) || (this.nextLayer || (this.nextLayer = new qu)).add(bb, ub, hb)
      }
      addInner(bb, ub, hb) {
        let Bb = bb - this.lastTo || hb.startSide - this.last.endSide;
        if (Bb <= 0 && (bb - this.lastFrom || hb.startSide - this.last.startSide) < 0) throw new Error("Ranges must be added sorted by `from` position and `startSide`");
        return !(Bb < 0) && (250 == this.from.length && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = bb), this.from.push(bb - this.chunkStart), this.to.push(ub - this.chunkStart), this.last = hb, this.lastFrom = bb, this.lastTo = ub, this.value.push(hb), hb.point && (this.KBb = Math.max(this.KBb, ub - bb)), !0)
      }
      addChunk(bb, ub) {
        if ((bb - this.lastTo || ub.value[0].startSide - this.last.endSide) < 0) return !1;
        this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, ub.KBb), this.chunks.push(ub), this.chunkPos.push(bb);
        let hb = ub.value.length - 1;
        return this.last = ub.value[hb], this.lastFrom = ub.from[hb] + bb, this.lastTo = ub.to[hb] + bb, !0
      }
      finish() {
        return this.finishInner(Pu.empty)
      }
      finishInner(bb) {
        if (this.from.length && this.finishChunk(!1), 0 == this.chunks.length) return bb;
        let ub = Pu.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(bb) : bb, this.setMaxPoint);
        return this.from = null, ub
      }
    }

    function Eu(bb, ub, hb) {
      let Bb = new Map;
      for (let Gb of bb)
        for (let bb = 0; bb < Gb.chunk.length; bb++) Gb.chunk[bb].KBb <= 0 && Bb.set(Gb.chunk[bb], Gb.chunkPos[bb]);
      let Ob = new Set;
      for (let Gb of ub)
        for (let bb = 0; bb < Gb.chunk.length; bb++) {
          let ub = Bb.get(Gb.chunk[bb]);
          null == ub || (hb ? hb.mapPos(ub) : ub) != Gb.chunkPos[bb] || (null === hb || void 0 === hb ? void 0 : hb.touchesRange(ub, ub + Gb.chunk[bb].length)) || Ob.add(Gb.chunk[bb])
        }
      return Ob
    }
    class yu {
      constructor(bb, ub, hb) {
        let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.layer = bb, this.skip = ub, this.WBb = hb, this.rank = Bb
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      get endSide() {
        return this.value ? this.value.endSide : 0
      }
      goto(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(bb, ub, !1), this
      }
      gotoInner(bb, ub, hb) {
        for (; this.chunkIndex < this.layer.chunk.length;) {
          let ub = this.layer.chunk[this.chunkIndex];
          if (!(this.skip && this.skip.has(ub) || this.layer.chunkEnd(this.chunkIndex) < bb || ub.KBb < this.WBb)) break;
          this.chunkIndex++, hb = !1
        }
        if (this.chunkIndex < this.layer.chunk.length) {
          let Bb = this.layer.chunk[this.chunkIndex].findIndex(bb - this.layer.chunkPos[this.chunkIndex], ub, !0);
          (!hb || this.rangeIndex < Bb) && this.setRangeIndex(Bb)
        }
        this.next()
      }
      forward(bb, ub) {
        (this.to - bb || this.endSide - ub) < 0 && this.gotoInner(bb, ub, !0)
      }
      next() {
        for (;;) {
          if (this.chunkIndex == this.layer.chunk.length) {
            this.from = this.to = 1e9, this.value = null;
            break
          } {
            let bb = this.layer.chunkPos[this.chunkIndex],
              ub = this.layer.chunk[this.chunkIndex],
              hb = bb + ub.from[this.rangeIndex];
            if (this.from = hb, this.to = bb + ub.to[this.rangeIndex], this.value = ub.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.WBb < 0 || this.value.point && this.to - this.from >= this.WBb) break
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
    class Vu {
      constructor(bb) {
        this.heap = bb
      }
      static from(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          Bb = [];
        for (let Ob = 0; Ob < bb.length; Ob++)
          for (let Gb = bb[Ob]; !Gb.MZ; Gb = Gb.nextLayer) Gb.KBb >= hb && Bb.push(new yu(Gb, ub, hb, Ob));
        return 1 == Bb.length ? Bb[0] : new Vu(Bb)
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      goto(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        for (let hb of this.heap) hb.goto(bb, ub);
        for (let hb = this.heap.length >> 1; hb >= 0; hb--) Fu(this.heap, hb);
        return this.next(), this
      }
      forward(bb, ub) {
        for (let hb of this.heap) hb.forward(bb, ub);
        for (let hb = this.heap.length >> 1; hb >= 0; hb--) Fu(this.heap, hb);
        (this.to - bb || this.value.endSide - ub) < 0 && this.next()
      }
      next() {
        if (0 == this.heap.length) this.from = this.to = 1e9, this.value = null, this.rank = -1;
        else {
          let bb = this.heap[0];
          this.from = bb.from, this.to = bb.to, this.value = bb.value, this.rank = bb.rank, bb.value && bb.next(), Fu(this.heap, 0)
        }
      }
    }

    function Fu(bb, ub) {
      for (let hb = bb[ub];;) {
        let Bb = 1 + (ub << 1);
        if (Bb >= bb.length) break;
        let Ob = bb[Bb];
        if (Bb + 1 < bb.length && Ob.compare(bb[Bb + 1]) >= 0 && (Ob = bb[Bb + 1], Bb++), hb.compare(Ob) < 0) break;
        bb[Bb] = hb, bb[ub] = Ob, ub = Bb
      }
    }
    class fu {
      constructor(bb, ub, hb) {
        this.WBb = hb, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = Vu.from(bb, ub, hb)
      }
      goto(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.cursor.goto(bb, ub), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = bb, this.endSide = ub, this.openStart = -1, this.next(), this
      }
      forward(bb, ub) {
        for (; this.minActive > -1 && (this.activeTo[this.minActive] - bb || this.active[this.minActive].endSide - ub) < 0;) this.removeActive(this.minActive);
        this.cursor.forward(bb, ub)
      }
      removeActive(bb) {
        cu(this.active, bb), cu(this.activeTo, bb), cu(this.activeRank, bb), this.minActive = Ru(this.active, this.activeTo)
      }
      addActive(bb) {
        let ub = 0,
          {
            value: hb,
            to: Bb,
            rank: Ob
          } = this.cursor;
        for (; ub < this.activeRank.length && (Ob - this.activeRank[ub] || Bb - this.activeTo[ub]) > 0;) ub++;
        Qu(this.active, ub, hb), Qu(this.activeTo, ub, Bb), Qu(this.activeRank, ub, Ob), bb && Qu(bb, ub, this.cursor.from), this.minActive = Ru(this.active, this.activeTo)
      }
      next() {
        let bb = this.to,
          ub = this.point;
        this.point = null;
        let hb = this.openStart < 0 ? [] : null;
        for (;;) {
          let Bb = this.minActive;
          if (Bb > -1 && (this.activeTo[Bb] - this.cursor.from || this.active[Bb].endSide - this.cursor.startSide) < 0) {
            if (this.activeTo[Bb] > bb) {
              this.to = this.activeTo[Bb], this.endSide = this.active[Bb].endSide;
              break
            }
            this.removeActive(Bb), hb && cu(hb, Bb)
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
                if (!(ub && this.cursor.to == this.to && this.cursor.from < this.cursor.to)) {
                  this.point = bb, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = bb.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
                  break
                }
                this.cursor.next()
              } else this.addActive(hb), this.cursor.next()
            }
          }
        }
        if (hb) {
          this.openStart = 0;
          for (let ub = hb.length - 1; ub >= 0 && hb[ub] < bb; ub--) this.openStart++
        }
      }
      activeForPoint(bb) {
        if (!this.active.length) return this.active;
        let ub = [];
        for (let hb = this.active.length - 1; hb >= 0 && !(this.activeRank[hb] < this.pointRank); hb--)(this.activeTo[hb] > bb || this.activeTo[hb] == bb && this.active[hb].endSide >= this.point.endSide) && ub.push(this.active[hb]);
        return ub.reverse()
      }
      openEnd(bb) {
        let ub = 0;
        for (let hb = this.activeTo.length - 1; hb >= 0 && this.activeTo[hb] > bb; hb--) ub++;
        return ub
      }
    }

    function ku(bb, ub, hb, Bb, Ob, Gb) {
      bb.goto(ub), hb.goto(Bb);
      let Ub = Bb + Ob,
        Lb = Bb,
        Yb = Bb - ub,
        Sb = !!Gb.boundChange;
      for (let ab = !1;;) {
        let ub = bb.to + Yb - hb.to,
          Bb = ub || bb.endSide - hb.endSide,
          Ob = Bb < 0 ? bb.to + Yb : hb.to,
          Hb = Math.min(Ob, Ub);
        if (bb.point || hb.point ? (bb.point && hb.point && su(bb.point, hb.point) && Tu(bb.activeForPoint(bb.to), hb.activeForPoint(hb.to)) || Gb.comparePoint(Lb, Hb, bb.point, hb.point), ab = !1) : (ab && Gb.boundChange(Lb), Hb > Lb && !Tu(bb.active, hb.active) && Gb.compareRange(Lb, Hb, bb.active, hb.active), Sb && Hb < Ub && (ub || bb.openEnd(Ob) != hb.openEnd(Ob)) && (ab = !0)), Ob > Ub) break;
        Lb = Ob, Bb <= 0 && bb.next(), Bb >= 0 && hb.next()
      }
    }

    function Tu(bb, ub) {
      if (bb.length != ub.length) return !1;
      for (let hb = 0; hb < bb.length; hb++)
        if (bb[hb] != ub[hb] && !su(bb[hb], ub[hb])) return !1;
      return !0
    }

    function cu(bb, ub) {
      for (let hb = ub, Bb = bb.length - 1; hb < Bb; hb++) bb[hb] = bb[hb + 1];
      bb.pop()
    }

    function Qu(bb, ub, hb) {
      for (let Bb = bb.length - 1; Bb >= ub; Bb--) bb[Bb + 1] = bb[Bb];
      bb[ub] = hb
    }

    function Ru(bb, ub) {
      let hb = -1,
        Bb = 1e9;
      for (let Ob = 0; Ob < ub.length; Ob++)(ub[Ob] - Bb || bb[Ob].endSide - bb[hb].endSide) < 0 && (hb = Ob, Bb = ub[Ob]);
      return hb
    }

    function bh(bb, ub) {
      let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : bb.length,
        Bb = 0;
      for (let Ob = 0; Ob < hb && Ob < bb.length;) 9 == bb.charCodeAt(Ob) ? (Bb += ub - Bb % ub, Ob++) : (Bb++, Ob = nb(bb, Ob));
      return Bb
    }

    function uh(bb, ub, hb, Bb) {
      for (let Ob = 0, Gb = 0;;) {
        if (Gb >= ub) return Ob;
        if (Ob == bb.length) break;
        Gb += 9 == bb.charCodeAt(Ob) ? hb - Gb % hb : 1, Ob = nb(bb, Ob)
      }
      return !0 === Bb ? -1 : bb.length
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);