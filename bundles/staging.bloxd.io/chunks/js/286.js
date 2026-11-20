export const id = 286;
export const ids = [286];
export const modules = {
  41044: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => HE,
      i: () => fq,
      ChangeSet: () => Mq,
      m: () => iE,
      q: () => kq,
      u: () => TE,
      x: () => Fq,
      B: () => Zq,
      C: () => lE,
      G: () => kE,
      E: () => RE,
      I: () => SE,
      J: () => QE,
      L: () => eq,
      O: () => Vq,
      Q: () => yE,
      U: () => hq,
      V: () => bq,
      Y: () => zE,
      Z: () => qg,
      $: () => vq,
      bb: () => Eg,
      cb: () => nq
    });
    let Yq = [],
      lq = [];

    function Oq(qq) {
      if (qq < 768) return !1;
      for (let Eq = 0, gq = Yq.length;;) {
        let Oq = Eq + gq >> 1;
        if (qq < Yq[Oq]) gq = Oq;
        else {
          if (!(qq >= lq[Oq])) return !0;
          Eq = Oq + 1
        }
        if (Eq == gq) return !1
      }
    }

    function mq(qq) {
      return qq >= 127462 && qq <= 127487
    }(() => {
      let qq = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((qq => qq ? parseInt(qq, 36) : 1));
      for (let Eq = 0, gq = 0; Eq < qq.length; Eq++)(Eq % 2 ? lq : Yq).push(gq += qq[Eq])
    })();
    const xq = 8205;

    function Aq(qq, Eq) {
      return (!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2] ? cq : uq)(qq, Eq, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function cq(qq, Eq, gq) {
      if (Eq == qq.length) return Eq;
      Eq && Wq(qq.charCodeAt(Eq)) && Nq(qq.charCodeAt(Eq - 1)) && Eq--;
      let Yq = Bq(qq, Eq);
      for (Eq += aq(Yq); Eq < qq.length;) {
        let lq = Bq(qq, Eq);
        if (Yq == xq || lq == xq || gq && Oq(lq)) Eq += aq(lq), Yq = lq;
        else {
          if (!mq(lq)) break;
          {
            let gq = 0,
              Yq = Eq - 2;
            for (; Yq >= 0 && mq(Bq(qq, Yq));) gq++, Yq -= 2;
            if (gq % 2 == 0) break;
            Eq += 2
          }
        }
      }
      return Eq
    }

    function uq(qq, Eq, gq) {
      for (; Eq > 0;) {
        let Yq = cq(qq, Eq - 2, gq);
        if (Yq < Eq) return Yq;
        Eq--
      }
      return 0
    }

    function Bq(qq, Eq) {
      let gq = qq.charCodeAt(Eq);
      if (!Nq(gq) || Eq + 1 == qq.length) return gq;
      let Yq = qq.charCodeAt(Eq + 1);
      return Wq(Yq) ? Yq - 56320 + (gq - 55296 << 10) + 65536 : gq
    }

    function Wq(qq) {
      return qq >= 56320 && qq < 57344
    }

    function Nq(qq) {
      return qq >= 55296 && qq < 56320
    }

    function aq(qq) {
      return qq < 65536 ? 1 : 2
    }
    class Vq {
      lineAt(qq) {
        if (qq < 0 || qq > this.length) throw new RangeError(`Invalid position ${qq} in document of length ${this.length}`);
        return this.lineInner(qq, !1, 1, 0)
      }
      line(qq) {
        if (qq < 1 || qq > this.lines) throw new RangeError(`Invalid line number ${qq} in ${this.lines}-line document`);
        return this.lineInner(qq, !0, 1, 0)
      }
      replace(qq, Eq, gq) {
        [qq, Eq] = rq(this, qq, Eq);
        let Yq = [];
        return this.decompose(0, qq, Yq, 2), gq.length && gq.decompose(0, gq.length, Yq, 3), this.decompose(Eq, this.length, Yq, 1), jq.from(Yq, this.length - (Eq - qq) + gq.length)
      }
      append(qq) {
        return this.replace(this.length, this.length, qq)
      }
      slice(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        [qq, Eq] = rq(this, qq, Eq);
        let gq = [];
        return this.decompose(qq, Eq, gq, 0), jq.from(gq, Eq - qq)
      }
      eq(qq) {
        if (qq == this) return !0;
        if (qq.length != this.length || qq.lines != this.lines) return !1;
        let Eq = this.scanIdentical(qq, 1),
          gq = this.length - this.scanIdentical(qq, -1),
          Yq = new Pq(this),
          lq = new Pq(qq);
        for (let Oq = Eq, mq = Eq;;) {
          if (Yq.next(Oq), lq.next(Oq), Oq = 0, Yq.lineBreak != lq.lineBreak || Yq.done != lq.done || Yq.value != lq.value) return !1;
          if (mq += Yq.value.length, Yq.done || mq >= gq) return !0
        }
      }
      iter() {
        return new Pq(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1)
      }
      iterRange(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        return new Qq(this, qq, Eq)
      }
      iterLines(qq, Eq) {
        let gq;
        if (null == qq) gq = this.iter();
        else {
          null == Eq && (Eq = this.lines + 1);
          let Yq = this.line(qq).from;
          gq = this.iterRange(Yq, Math.max(Yq, Eq == this.lines + 1 ? this.length : Eq <= 1 ? 0 : this.line(Eq - 1).to))
        }
        return new yq(gq)
      }
      toString() {
        return this.sliceString(0)
      }
      toJSON() {
        let qq = [];
        return this.flatten(qq), qq
      }
      constructor() {}
      static of (qq) {
        if (0 == qq.length) throw new RangeError("A document must have at least one line");
        return 1 != qq.length || qq[0] ? qq.length <= 32 ? new dq(qq) : jq.from(dq.split(qq, [])) : Vq.empty
      }
    }
    class dq extends Vq {
      constructor(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(qq) {
          let Eq = -1;
          for (let gq of qq) Eq += gq.length + 1;
          return Eq
        }(qq);
        super(), this.text = qq, this.length = Eq
      }
      get lines() {
        return this.text.length
      }
      get children() {
        return null
      }
      lineInner(qq, Eq, gq, Yq) {
        for (let lq = 0;; lq++) {
          let Oq = this.text[lq],
            mq = Yq + Oq.length;
          if ((Eq ? gq : mq) >= qq) return new tq(Yq, mq, gq, Oq);
          Yq = mq + 1, gq++
        }
      }
      decompose(qq, Eq, gq, Yq) {
        let lq = qq <= 0 && Eq >= this.length ? this : new dq(oq(this.text, qq, Eq), Math.min(Eq, this.length) - Math.max(0, qq));
        if (1 & Yq) {
          let qq = gq.pop(),
            Eq = Hq(lq.text, qq.text.slice(), 0, lq.length);
          if (Eq.length <= 32) gq.push(new dq(Eq, qq.length + lq.length));
          else {
            let qq = Eq.length >> 1;
            gq.push(new dq(Eq.slice(0, qq)), new dq(Eq.slice(qq)))
          }
        } else gq.push(lq)
      }
      replace(qq, Eq, gq) {
        if (!(gq instanceof dq)) return super.replace(qq, Eq, gq);
        [qq, Eq] = rq(this, qq, Eq);
        let Yq = Hq(this.text, Hq(gq.text, oq(this.text, 0, qq)), Eq),
          lq = this.length + gq.length - (Eq - qq);
        return Yq.length <= 32 ? new dq(Yq, lq) : jq.from(dq.split(Yq, []), lq)
      }
      sliceString(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [qq, Eq] = rq(this, qq, Eq);
        let Yq = "";
        for (let lq = 0, Oq = 0; lq <= Eq && Oq < this.text.length; Oq++) {
          let mq = this.text[Oq],
            xq = lq + mq.length;
          lq > qq && Oq && (Yq += gq), qq < xq && Eq > lq && (Yq += mq.slice(Math.max(0, qq - lq), Eq - lq)), lq = xq + 1
        }
        return Yq
      }
      flatten(qq) {
        for (let Eq of this.text) qq.push(Eq)
      }
      scanIdentical() {
        return 0
      }
      static split(qq, Eq) {
        let gq = [],
          Yq = -1;
        for (let lq of qq) gq.push(lq), Yq += lq.length + 1, 32 == gq.length && (Eq.push(new dq(gq, Yq)), gq = [], Yq = -1);
        return Yq > -1 && Eq.push(new dq(gq, Yq)), Eq
      }
    }
    class jq extends Vq {
      constructor(qq, Eq) {
        super(), this.children = qq, this.length = Eq, this.lines = 0;
        for (let gq of qq) this.lines += gq.lines
      }
      lineInner(qq, Eq, gq, Yq) {
        for (let lq = 0;; lq++) {
          let Oq = this.children[lq],
            mq = Yq + Oq.length,
            xq = gq + Oq.lines - 1;
          if ((Eq ? xq : mq) >= qq) return Oq.lineInner(qq, Eq, gq, Yq);
          Yq = mq + 1, gq = xq + 1
        }
      }
      decompose(qq, Eq, gq, Yq) {
        for (let lq = 0, Oq = 0; Oq <= Eq && lq < this.children.length; lq++) {
          let mq = this.children[lq],
            xq = Oq + mq.length;
          if (qq <= xq && Eq >= Oq) {
            let lq = Yq & ((Oq <= qq ? 1 : 0) | (xq >= Eq ? 2 : 0));
            Oq >= qq && xq <= Eq && !lq ? gq.push(mq) : mq.decompose(qq - Oq, Eq - Oq, gq, lq)
          }
          Oq = xq + 1
        }
      }
      replace(qq, Eq, gq) {
        if ([qq, Eq] = rq(this, qq, Eq), gq.lines < this.lines)
          for (let Yq = 0, lq = 0; Yq < this.children.length; Yq++) {
            let Oq = this.children[Yq],
              mq = lq + Oq.length;
            if (qq >= lq && Eq <= mq) {
              let xq = Oq.replace(qq - lq, Eq - lq, gq),
                Aq = this.lines - Oq.lines + xq.lines;
              if (xq.lines < Aq >> 4 && xq.lines > Aq >> 6) {
                let lq = this.children.slice();
                return lq[Yq] = xq, new jq(lq, this.length - (Eq - qq) + gq.length)
              }
              return super.replace(lq, mq, xq)
            }
            lq = mq + 1
          }
        return super.replace(qq, Eq, gq)
      }
      sliceString(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [qq, Eq] = rq(this, qq, Eq);
        let Yq = "";
        for (let lq = 0, Oq = 0; lq < this.children.length && Oq <= Eq; lq++) {
          let mq = this.children[lq],
            xq = Oq + mq.length;
          Oq > qq && lq && (Yq += gq), qq < xq && Eq > Oq && (Yq += mq.sliceString(qq - Oq, Eq - Oq, gq)), Oq = xq + 1
        }
        return Yq
      }
      flatten(qq) {
        for (let Eq of this.children) Eq.flatten(qq)
      }
      scanIdentical(qq, Eq) {
        if (!(qq instanceof jq)) return 0;
        let gq = 0,
          [Yq, lq, Oq, mq] = Eq > 0 ? [0, 0, this.children.length, qq.children.length] : [this.children.length - 1, qq.children.length - 1, -1, -1];
        for (;; Yq += Eq, lq += Eq) {
          if (Yq == Oq || lq == mq) return gq;
          let xq = this.children[Yq],
            Aq = qq.children[lq];
          if (xq != Aq) return gq + xq.scanIdentical(Aq, Eq);
          gq += xq.length + 1
        }
      }
      static from(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qq.reduce(((qq, Eq) => qq + Eq.length + 1), -1),
          gq = 0;
        for (let Wq of qq) gq += Wq.lines;
        if (gq < 32) {
          let gq = [];
          for (let Eq of qq) Eq.flatten(gq);
          return new dq(gq, Eq)
        }
        let Yq = Math.max(32, gq >> 5),
          lq = Yq << 1,
          Oq = Yq >> 1,
          mq = [],
          xq = 0,
          Aq = -1,
          cq = [];

        function uq(qq) {
          let Eq;
          if (qq.lines > lq && qq instanceof jq)
            for (let gq of qq.children) uq(gq);
          else qq.lines > Oq && (xq > Oq || !xq) ? (Bq(), mq.push(qq)) : qq instanceof dq && xq && (Eq = cq[cq.length - 1]) instanceof dq && qq.lines + Eq.lines <= 32 ? (xq += qq.lines, Aq += qq.length + 1, cq[cq.length - 1] = new dq(Eq.text.concat(qq.text), Eq.length + 1 + qq.length)) : (xq + qq.lines > Yq && Bq(), xq += qq.lines, Aq += qq.length + 1, cq.push(qq))
        }

        function Bq() {
          0 != xq && (mq.push(1 == cq.length ? cq[0] : jq.from(cq, Aq)), Aq = -1, xq = cq.length = 0)
        }
        for (let Wq of qq) uq(Wq);
        return Bq(), 1 == mq.length ? mq[0] : new jq(mq, Eq)
      }
    }

    function Hq(qq, Eq) {
      let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e9;
      for (let lq = 0, Oq = 0, mq = !0; Oq < qq.length && lq <= Yq; Oq++) {
        let xq = qq[Oq],
          Aq = lq + xq.length;
        Aq >= gq && (Aq > Yq && (xq = xq.slice(0, Yq - lq)), lq < gq && (xq = xq.slice(gq - lq)), mq ? (Eq[Eq.length - 1] += xq, mq = !1) : Eq.push(xq)), lq = Aq + 1
      }
      return Eq
    }

    function oq(qq, Eq, gq) {
      return Hq(qq, [""], Eq, gq)
    }
    Vq.empty = new dq([""], 0);
    class Pq {
      constructor(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.dir = Eq, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [qq], this.offsets = [Eq > 0 ? 1 : (qq instanceof dq ? qq.text.length : qq.children.length) << 1]
      }
      nextInner(qq, Eq) {
        for (this.done = this.lineBreak = !1;;) {
          let gq = this.nodes.length - 1,
            Yq = this.nodes[gq],
            lq = this.offsets[gq],
            Oq = lq >> 1,
            mq = Yq instanceof dq ? Yq.text.length : Yq.children.length;
          if (Oq == (Eq > 0 ? mq : 0)) {
            if (0 == gq) return this.done = !0, this.value = "", this;
            Eq > 0 && this.offsets[gq - 1]++, this.nodes.pop(), this.offsets.pop()
          } else if ((1 & lq) == (Eq > 0 ? 0 : 1)) {
            if (this.offsets[gq] += Eq, 0 == qq) return this.lineBreak = !0, this.value = "\n", this;
            qq--
          } else if (Yq instanceof dq) {
            let lq = Yq.text[Oq + (Eq < 0 ? -1 : 0)];
            if (this.offsets[gq] += Eq, lq.length > Math.max(0, qq)) return this.value = 0 == qq ? lq : Eq > 0 ? lq.slice(qq) : lq.slice(0, lq.length - qq), this;
            qq -= lq.length
          } else {
            let lq = Yq.children[Oq + (Eq < 0 ? -1 : 0)];
            qq > lq.length ? (qq -= lq.length, this.offsets[gq] += Eq) : (Eq < 0 && this.offsets[gq]--, this.nodes.push(lq), this.offsets.push(Eq > 0 ? 1 : (lq instanceof dq ? lq.text.length : lq.children.length) << 1))
          }
        }
      }
      next() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return qq < 0 && (this.nextInner(-qq, -this.dir), qq = this.value.length), this.nextInner(qq, this.dir)
      }
    }
    class Qq {
      constructor(qq, Eq, gq) {
        this.value = "", this.done = !1, this.cursor = new Pq(qq, Eq > gq ? -1 : 1), this.pos = Eq > gq ? qq.length : 0, this.from = Math.min(Eq, gq), this.to = Math.max(Eq, gq)
      }
      nextInner(qq, Eq) {
        if (Eq < 0 ? this.pos <= this.from : this.pos >= this.to) return this.value = "", this.done = !0, this;
        qq += Math.max(0, Eq < 0 ? this.pos - this.to : this.from - this.pos);
        let gq = Eq < 0 ? this.pos - this.from : this.to - this.pos;
        qq > gq && (qq = gq), gq -= qq;
        let {
          value: Yq
        } = this.cursor.next(qq);
        return this.pos += (Yq.length + qq) * Eq, this.value = Yq.length <= gq ? Yq : Eq < 0 ? Yq.slice(Yq.length - gq) : Yq.slice(0, gq), this.done = !this.value, this
      }
      next() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return qq < 0 ? qq = Math.max(qq, this.from - this.pos) : qq > 0 && (qq = Math.min(qq, this.to - this.pos)), this.nextInner(qq, this.cursor.dir)
      }
      get lineBreak() {
        return this.cursor.lineBreak && "" != this.value
      }
    }
    class yq {
      constructor(qq) {
        this.inner = qq, this.afterBreak = !0, this.value = "", this.done = !1
      }
      next() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          {
            done: Eq,
            lineBreak: gq,
            value: Yq
          } = this.inner.next(qq);
        return Eq && this.afterBreak ? (this.value = "", this.afterBreak = !1) : Eq ? (this.done = !0, this.value = "") : gq ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = Yq, this.afterBreak = !1), this
      }
      get lineBreak() {
        return !1
      }
    }
    "undefined" != typeof Symbol && (Vq.prototype[Symbol.iterator] = function() {
      return this.iter()
    }, Pq.prototype[Symbol.iterator] = Qq.prototype[Symbol.iterator] = yq.prototype[Symbol.iterator] = function() {
      return this
    });
    class tq {
      constructor(qq, Eq, gq, Yq) {
        this.from = qq, this.to = Eq, this.number = gq, this.text = Yq
      }
      get length() {
        return this.to - this.from
      }
    }

    function rq(qq, Eq, gq) {
      return [Eq = Math.max(0, Math.min(qq.length, Eq)), Math.max(Eq, Math.min(qq.length, gq))]
    }

    function vq(qq, Eq) {
      return Aq(qq, Eq, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function hq(qq, Eq) {
      let gq = qq.charCodeAt(Eq);
      if (!((Yq = gq) >= 55296 && Yq < 56320) || Eq + 1 == qq.length) return gq;
      var Yq;
      let lq = qq.charCodeAt(Eq + 1);
      return function(qq) {
        return qq >= 56320 && qq < 57344
      }(lq) ? lq - 56320 + (gq - 55296 << 10) + 65536 : gq
    }

    function nq(qq) {
      return qq <= 65535 ? String.fromCharCode(qq) : (qq -= 65536, String.fromCharCode(55296 + (qq >> 10), 56320 + (1023 & qq)))
    }

    function bq(qq) {
      return qq < 65536 ? 1 : 2
    }
    const iq = /\r\n?|\n/;
    var Zq = function(qq) {
      return qq[qq.Simple = 0] = "Simple", qq[qq.TrackDel = 1] = "TrackDel", qq[qq.TrackBefore = 2] = "TrackBefore", qq[qq.TrackAfter = 3] = "TrackAfter", qq
    }(Zq || (Zq = {}));
    class fq {
      constructor(qq) {
        this.sections = qq
      }
      get length() {
        let qq = 0;
        for (let Eq = 0; Eq < this.sections.length; Eq += 2) qq += this.sections[Eq];
        return qq
      }
      get newLength() {
        let qq = 0;
        for (let Eq = 0; Eq < this.sections.length; Eq += 2) {
          let gq = this.sections[Eq + 1];
          qq += gq < 0 ? this.sections[Eq] : gq
        }
        return qq
      }
      get empty() {
        return 0 == this.sections.length || 2 == this.sections.length && this.sections[1] < 0
      }
      iterGaps(qq) {
        for (let Eq = 0, gq = 0, Yq = 0; Eq < this.sections.length;) {
          let lq = this.sections[Eq++],
            Oq = this.sections[Eq++];
          Oq < 0 ? (qq(gq, Yq, lq), Yq += lq) : Yq += Oq, gq += lq
        }
      }
      iterChangedRanges(qq) {
        Sq(this, qq, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get invertedDesc() {
        let qq = [];
        for (let Eq = 0; Eq < this.sections.length;) {
          let gq = this.sections[Eq++],
            Yq = this.sections[Eq++];
          Yq < 0 ? qq.push(gq, Yq) : qq.push(Yq, gq)
        }
        return new fq(qq)
      }
      composeDesc(qq) {
        return this.empty ? qq : qq.empty ? this : Gq(this, qq)
      }
      mapDesc(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return qq.empty ? this : pq(this, qq, Eq)
      }
      mapPos(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Zq.Simple,
          Yq = 0,
          lq = 0;
        for (let Oq = 0; Oq < this.sections.length;) {
          let mq = this.sections[Oq++],
            xq = this.sections[Oq++],
            Aq = Yq + mq;
          if (xq < 0) {
            if (Aq > qq) return lq + (qq - Yq);
            lq += mq
          } else {
            if (gq != Zq.Simple && Aq >= qq && (gq == Zq.TrackDel && Yq < qq && Aq > qq || gq == Zq.TrackBefore && Yq < qq || gq == Zq.TrackAfter && Aq > qq)) return null;
            if (Aq > qq || Aq == qq && Eq < 0 && !mq) return qq == Yq || Eq < 0 ? lq : lq + xq;
            lq += xq
          }
          Yq = Aq
        }
        if (qq > Yq) throw new RangeError(`Position ${qq} is out of range for changeset of length ${Yq}`);
        return lq
      }
      touchesRange(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qq;
        for (let gq = 0, Yq = 0; gq < this.sections.length && Yq <= Eq;) {
          let lq = Yq + this.sections[gq++];
          if (this.sections[gq++] >= 0 && Yq <= Eq && lq >= qq) return !(Yq < qq && lq > Eq) || "cover";
          Yq = lq
        }
        return !1
      }
      toString() {
        let qq = "";
        for (let Eq = 0; Eq < this.sections.length;) {
          let gq = this.sections[Eq++],
            Yq = this.sections[Eq++];
          qq += (qq ? " " : "") + gq + (Yq >= 0 ? ":" + Yq : "")
        }
        return qq
      }
      toJSON() {
        return this.sections
      }
      static fromJSON(qq) {
        if (!Array.isArray(qq) || qq.length % 2 || qq.some((qq => "number" != typeof qq))) throw new RangeError("Invalid JSON representation of ChangeDesc");
        return new fq(qq)
      }
      static create(qq) {
        return new fq(qq)
      }
    }
    class Mq extends fq {
      constructor(qq, Eq) {
        super(qq), this.inserted = Eq
      }
      apply(qq) {
        if (this.length != qq.length) throw new RangeError("Applying change set to a document with the wrong length");
        return Sq(this, ((Eq, gq, Yq, lq, Oq) => qq = qq.replace(Yq, Yq + (gq - Eq), Oq)), !1), qq
      }
      mapDesc(qq) {
        return pq(this, qq, arguments.length > 1 && void 0 !== arguments[1] && arguments[1], !0)
      }
      invert(qq) {
        let Eq = this.sections.slice(),
          gq = [];
        for (let Yq = 0, lq = 0; Yq < Eq.length; Yq += 2) {
          let Oq = Eq[Yq],
            mq = Eq[Yq + 1];
          if (mq >= 0) {
            Eq[Yq] = mq, Eq[Yq + 1] = Oq;
            let xq = Yq >> 1;
            for (; gq.length < xq;) gq.push(Vq.empty);
            gq.push(Oq ? qq.slice(lq, lq + Oq) : Vq.empty)
          }
          lq += Oq
        }
        return new Mq(Eq, gq)
      }
      compose(qq) {
        return this.empty ? qq : qq.empty ? this : Gq(this, qq, !0)
      }
      map(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return qq.empty ? this : pq(this, qq, Eq, !0)
      }
      iterChanges(qq) {
        Sq(this, qq, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get desc() {
        return fq.create(this.sections)
      }
      filter(qq) {
        let Eq = [],
          gq = [],
          Yq = [],
          lq = new Lq(this);
        qq: for (let Oq = 0, mq = 0;;) {
          let xq = Oq == qq.length ? 1e9 : qq[Oq++];
          for (; mq < xq || mq == xq && 0 == lq.len;) {
            if (lq.done) break qq;
            let qq = Math.min(lq.len, xq - mq);
            Tq(Yq, qq, -1);
            let Oq = -1 == lq.ins ? -1 : 0 == lq.off ? lq.ins : 0;
            Tq(Eq, qq, Oq), Oq > 0 && zq(gq, Eq, lq.text), lq.forward(qq), mq += qq
          }
          let Aq = qq[Oq++];
          for (; mq < Aq;) {
            if (lq.done) break qq;
            let qq = Math.min(lq.len, Aq - mq);
            Tq(Eq, qq, -1), Tq(Yq, qq, -1 == lq.ins ? -1 : 0 == lq.off ? lq.ins : 0), lq.forward(qq), mq += qq
          }
        }
        return {
          changes: new Mq(Eq, gq),
          filtered: fq.create(Yq)
        }
      }
      toJSON() {
        let qq = [];
        for (let Eq = 0; Eq < this.sections.length; Eq += 2) {
          let gq = this.sections[Eq],
            Yq = this.sections[Eq + 1];
          Yq < 0 ? qq.push(gq) : 0 == Yq ? qq.push([gq]) : qq.push([gq].concat(this.inserted[Eq >> 1].toJSON()))
        }
        return qq
      }
      static of (qq, Eq, gq) {
        let Yq = [],
          lq = [],
          Oq = 0,
          mq = null;

        function xq() {
          if (!(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && !Yq.length) return;
          Oq < Eq && Tq(Yq, Eq - Oq, -1);
          let qq = new Mq(Yq, lq);
          mq = mq ? mq.compose(qq.map(mq)) : qq, Yq = [], lq = [], Oq = 0
        }
        return function qq(Aq) {
          if (Array.isArray(Aq))
            for (let Eq of Aq) qq(Eq);
          else if (Aq instanceof Mq) {
            if (Aq.length != Eq) throw new RangeError(`Mismatched change set length (got ${Aq.length}, expected ${Eq})`);
            xq(), mq = mq ? mq.compose(Aq.map(mq)) : Aq
          } else {
            let {
              from: qq,
              to: mq = qq,
              insert: cq
            } = Aq;
            if (qq > mq || qq < 0 || mq > Eq) throw new RangeError(`Invalid change range ${qq} to ${mq} (in doc of length ${Eq})`);
            let uq = cq ? "string" == typeof cq ? Vq.of(cq.split(gq || iq)) : cq : Vq.empty,
              Bq = uq.length;
            if (qq == mq && 0 == Bq) return;
            qq < Oq && xq(), qq > Oq && Tq(Yq, qq - Oq, -1), Tq(Yq, mq - qq, Bq), zq(lq, Yq, uq), Oq = mq
          }
        }(qq), xq(!mq), mq
      }
      static empty(qq) {
        return new Mq(qq ? [qq, -1] : [], [])
      }
      static fromJSON(qq) {
        if (!Array.isArray(qq)) throw new RangeError("Invalid JSON representation of ChangeSet");
        let Eq = [],
          gq = [];
        for (let Yq = 0; Yq < qq.length; Yq++) {
          let lq = qq[Yq];
          if ("number" == typeof lq) Eq.push(lq, -1);
          else {
            if (!Array.isArray(lq) || "number" != typeof lq[0] || lq.some(((qq, Eq) => Eq && "string" != typeof qq))) throw new RangeError("Invalid JSON representation of ChangeSet");
            if (1 == lq.length) Eq.push(lq[0], 0);
            else {
              for (; gq.length < Yq;) gq.push(Vq.empty);
              gq[Yq] = Vq.of(lq.slice(1)), Eq.push(lq[0], gq[Yq].length)
            }
          }
        }
        return new Mq(Eq, gq)
      }
      static createSet(qq, Eq) {
        return new Mq(qq, Eq)
      }
    }

    function Tq(qq, Eq, gq) {
      let Yq = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (0 == Eq && gq <= 0) return;
      let lq = qq.length - 2;
      lq >= 0 && gq <= 0 && gq == qq[lq + 1] ? qq[lq] += Eq : lq >= 0 && 0 == Eq && 0 == qq[lq] ? qq[lq + 1] += gq : Yq ? (qq[lq] += Eq, qq[lq + 1] += gq) : qq.push(Eq, gq)
    }

    function zq(qq, Eq, gq) {
      if (0 == gq.length) return;
      let Yq = Eq.length - 2 >> 1;
      if (Yq < qq.length) qq[qq.length - 1] = qq[qq.length - 1].append(gq);
      else {
        for (; qq.length < Yq;) qq.push(Vq.empty);
        qq.push(gq)
      }
    }

    function Sq(qq, Eq, gq) {
      let Yq = qq.inserted;
      for (let lq = 0, Oq = 0, mq = 0; mq < qq.sections.length;) {
        let xq = qq.sections[mq++],
          Aq = qq.sections[mq++];
        if (Aq < 0) lq += xq, Oq += xq;
        else {
          let cq = lq,
            uq = Oq,
            Bq = Vq.empty;
          for (; cq += xq, uq += Aq, Aq && Yq && (Bq = Bq.append(Yq[mq - 2 >> 1])), !(gq || mq == qq.sections.length || qq.sections[mq + 1] < 0);) xq = qq.sections[mq++], Aq = qq.sections[mq++];
          Eq(lq, cq, Oq, uq, Bq), lq = cq, Oq = uq
        }
      }
    }

    function pq(qq, Eq, gq) {
      let Yq = [],
        lq = arguments.length > 3 && void 0 !== arguments[3] && arguments[3] ? [] : null,
        Oq = new Lq(qq),
        mq = new Lq(Eq),
        xq = 0;
      for (let Aq = -1;;) {
        if (++xq > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - likely malformed ChangeSet");
        if (Oq.done && mq.len || mq.done && Oq.len) throw new Error("Mismatched change set lengths");
        if (-1 == Oq.ins && -1 == mq.ins) {
          let qq = Math.min(Oq.len, mq.len);
          Tq(Yq, qq, -1), Oq.forward(qq), mq.forward(qq)
        } else if (mq.ins >= 0 && (Oq.ins < 0 || Aq == Oq.i || 0 == Oq.off && (mq.len < Oq.len || mq.len == Oq.len && !gq))) {
          let qq = mq.len;
          for (Tq(Yq, mq.ins, -1); qq;) {
            if (++xq > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-b");
            let Eq = Math.min(Oq.len, qq);
            Oq.ins >= 0 && Aq < Oq.i && Oq.len <= Eq && (Tq(Yq, 0, Oq.ins), lq && zq(lq, Yq, Oq.text), Aq = Oq.i), Oq.forward(Eq), qq -= Eq
          }
          mq.next()
        } else {
          if (!(Oq.ins >= 0)) {
            if (Oq.done && mq.done) return lq ? Mq.createSet(Yq, lq) : fq.create(Yq);
            throw new Error("Mismatched change set lengths")
          } {
            let qq = 0,
              Eq = Oq.len;
            for (; Eq;) {
              if (++xq > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-a");
              if (-1 == mq.ins) {
                let gq = Math.min(Eq, mq.len);
                qq += gq, Eq -= gq, mq.forward(gq)
              } else {
                if (!(0 == mq.ins && mq.len < Eq)) break;
                Eq -= mq.len, mq.next()
              }
            }
            Tq(Yq, qq, Aq < Oq.i ? Oq.ins : 0), lq && Aq < Oq.i && zq(lq, Yq, Oq.text), Aq = Oq.i, Oq.forward(Oq.len - Eq)
          }
        }
      }
    }

    function Gq(qq, Eq) {
      let gq = [],
        Yq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? [] : null,
        lq = new Lq(qq),
        Oq = new Lq(Eq),
        mq = 0;
      for (let xq = !1;;) {
        if (++mq > 2e6) throw new Error("BLOXD CODEMIRROR: composeSets exceeded max iterations - likely malformed ChangeSet");
        if (lq.done && Oq.done) return Yq ? Mq.createSet(gq, Yq) : fq.create(gq);
        if (0 == lq.ins) Tq(gq, lq.len, 0, xq), lq.next();
        else if (0 != Oq.len || Oq.done) {
          if (lq.done || Oq.done) throw new Error("Mismatched change set lengths");
          {
            let qq = Math.min(lq.len2, Oq.len),
              Eq = gq.length;
            if (-1 == lq.ins) {
              let Eq = -1 == Oq.ins ? -1 : Oq.off ? 0 : Oq.ins;
              Tq(gq, qq, Eq, xq), Yq && Eq && zq(Yq, gq, Oq.text)
            } else - 1 == Oq.ins ? (Tq(gq, lq.off ? 0 : lq.len, qq, xq), Yq && zq(Yq, gq, lq.textBit(qq))) : (Tq(gq, lq.off ? 0 : lq.len, Oq.off ? 0 : Oq.ins, xq), Yq && !Oq.off && zq(Yq, gq, Oq.text));
            xq = (lq.ins > qq || Oq.ins >= 0 && Oq.len > qq) && (xq || gq.length > Eq), lq.forward2(qq), Oq.forward(qq)
          }
        } else Tq(gq, 0, Oq.ins, xq), Yq && zq(Yq, gq, Oq.text), Oq.next()
      }
    }
    class Lq {
      constructor(qq) {
        this.set = qq, this.i = 0, this.next()
      }
      next() {
        let {
          sections: qq
        } = this.set;
        this.i < qq.length ? (this.len = qq[this.i++], this.ins = qq[this.i++]) : (this.len = 0, this.ins = -2), this.off = 0
      }
      get done() {
        return -2 == this.ins
      }
      get len2() {
        return this.ins < 0 ? this.len : this.ins
      }
      get text() {
        let {
          inserted: qq
        } = this.set, Eq = this.i - 2 >> 1;
        return Eq >= qq.length ? Vq.empty : qq[Eq]
      }
      textBit(qq) {
        let {
          inserted: Eq
        } = this.set, gq = this.i - 2 >> 1;
        return gq >= Eq.length && !qq ? Vq.empty : Eq[gq].slice(this.off, null == qq ? void 0 : this.off + qq)
      }
      forward(qq) {
        qq == this.len ? this.next() : (this.len -= qq, this.off += qq)
      }
      forward2(qq) {
        -1 == this.ins ? this.forward(qq) : qq == this.ins ? this.next() : (this.ins -= qq, this.off += qq)
      }
    }
    class Jq {
      constructor(qq, Eq, gq) {
        this.from = qq, this.to = Eq, this.flags = gq
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
        let qq = 7 & this.flags;
        return 7 == qq ? null : qq
      }
      get goalColumn() {
        let qq = this.flags >> 6;
        return 16777215 == qq ? void 0 : qq
      }
      map(qq) {
        let Eq, gq, Yq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return this.empty ? Eq = gq = qq.mapPos(this.from, Yq) : (Eq = qq.mapPos(this.from, 1), gq = qq.mapPos(this.to, -1)), Eq == this.from && gq == this.to ? this : new Jq(Eq, gq, this.flags)
      }
      extend(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qq,
          gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (qq <= this.anchor && Eq >= this.anchor) return kq.range(qq, Eq, void 0, void 0, gq);
        let Yq = Math.abs(qq - this.anchor) > Math.abs(Eq - this.anchor) ? qq : Eq;
        return kq.range(this.anchor, Yq, void 0, void 0, gq)
      }
      eq(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.anchor == qq.anchor && this.head == qq.head && this.goalColumn == qq.goalColumn && (!Eq || !this.empty || this.assoc == qq.assoc)
      }
      toJSON() {
        return {
          anchor: this.anchor,
          head: this.head
        }
      }
      static fromJSON(qq) {
        if (!qq || "number" != typeof qq.anchor || "number" != typeof qq.head) throw new RangeError("Invalid JSON representation for SelectionRange");
        return kq.range(qq.anchor, qq.head)
      }
      static create(qq, Eq, gq) {
        return new Jq(qq, Eq, gq)
      }
    }
    class kq {
      constructor(qq, Eq) {
        this.zV = qq, this.mainIndex = Eq
      }
      map(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return qq.empty ? this : kq.create(this.zV.map((gq => gq.map(qq, Eq))), this.mainIndex)
      }
      eq(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.zV.length != qq.zV.length || this.mainIndex != qq.mainIndex) return !1;
        for (let gq = 0; gq < this.zV.length; gq++)
          if (!this.zV[gq].eq(qq.zV[gq], Eq)) return !1;
        return !0
      }
      get main() {
        return this.zV[this.mainIndex]
      }
      asSingle() {
        return 1 == this.zV.length ? this : new kq([this.main], 0)
      }
      addRange(qq) {
        let Eq = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return kq.create([qq].concat(this.zV), Eq ? 0 : this.mainIndex + 1)
      }
      replaceRange(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.mainIndex,
          gq = this.zV.slice();
        return gq[Eq] = qq, kq.create(gq, this.mainIndex)
      }
      toJSON() {
        return {
          zV: this.zV.map((qq => qq.toJSON())),
          main: this.mainIndex
        }
      }
      static fromJSON(qq) {
        if (!qq || !Array.isArray(qq.zV) || "number" != typeof qq.main || qq.main >= qq.zV.length) throw new RangeError("Invalid JSON representation for EditorSelection");
        return new kq(qq.zV.map((qq => Jq.fromJSON(qq))), qq.main)
      }
      static single(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qq;
        return new kq([kq.range(qq, Eq)], 0)
      }
      static create(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (0 == qq.length) throw new RangeError("A selection needs at least one range");
        for (let gq = 0, Yq = 0; Yq < qq.length; Yq++) {
          let lq = qq[Yq];
          if (lq.empty ? lq.from <= gq : lq.from < gq) return kq.normalized(qq.slice(), Eq);
          gq = lq.to
        }
        return new kq(qq, Eq)
      }
      static cursor(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gq = arguments.length > 2 ? arguments[2] : void 0,
          Yq = arguments.length > 3 ? arguments[3] : void 0;
        return Jq.create(qq, qq, (0 == Eq ? 0 : Eq < 0 ? 8 : 16) | (null == gq ? 7 : Math.min(6, gq)) | (null !== Yq && void 0 !== Yq ? Yq : 16777215) << 6)
      }
      static range(qq, Eq, gq, Yq, lq) {
        let Oq = (null !== gq && void 0 !== gq ? gq : 16777215) << 6 | (null == Yq ? 7 : Math.min(6, Yq));
        return lq || qq == Eq || (lq = Eq < qq ? 1 : -1), Eq < qq ? Jq.create(Eq, qq, 48 | Oq) : Jq.create(qq, Eq, (lq ? lq < 0 ? 8 : 16 : 0) | Oq)
      }
      static normalized(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gq = qq[Eq];
        qq.sort(((qq, Eq) => qq.from - Eq.from)), Eq = qq.indexOf(gq);
        for (let Yq = 1; Yq < qq.length; Yq++) {
          let gq = qq[Yq],
            lq = qq[Yq - 1];
          if (gq.empty ? gq.from <= lq.to : gq.from < lq.to) {
            let Oq = lq.from,
              mq = Math.max(gq.to, lq.to);
            Yq <= Eq && Eq--, qq.splice(--Yq, 2, gq.anchor > gq.head ? kq.range(mq, Oq) : kq.range(Oq, mq))
          }
        }
        return new kq(qq, Eq)
      }
    }

    function Rq(qq, Eq) {
      for (let gq of qq.zV)
        if (gq.to > Eq) throw new RangeError("Selection points outside of document")
    }
    let Uq = 0;
    class Fq {
      constructor(qq, Eq, gq, Yq, lq) {
        this.combine = qq, this.compareInput = Eq, this.compare = gq, this.isStatic = Yq, this.id = Uq++, this.default = qq([]), this.extensions = "function" == typeof lq ? lq(this) : lq
      }
      get reader() {
        return this
      }
      static define() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return new Fq(qq.combine || (qq => qq), qq.compareInput || ((qq, Eq) => qq === Eq), qq.compare || (qq.combine ? (qq, Eq) => qq === Eq : sq), !!qq.static, qq.enables)
      }
      of(qq) {
        return new Xq([], this, 0, qq)
      }
      compute(qq, Eq) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new Xq(qq, this, 1, Eq)
      }
      computeN(qq, Eq) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new Xq(qq, this, 2, Eq)
      }
      from(qq, Eq) {
        return Eq || (Eq = qq => qq), this.compute([qq], (gq => Eq(gq.field(qq))))
      }
    }

    function sq(qq, Eq) {
      return qq == Eq || qq.length == Eq.length && qq.every(((qq, gq) => qq === Eq[gq]))
    }
    class Xq {
      constructor(qq, Eq, gq, Yq) {
        this.dependencies = qq, this.facet = Eq, this.type = gq, this.value = Yq, this.id = Uq++
      }
      dynamicSlot(qq) {
        var Eq;
        let gq = this.value,
          Yq = this.facet.compareInput,
          lq = this.id,
          Oq = qq[lq] >> 1,
          mq = 2 == this.type,
          xq = !1,
          Aq = !1,
          cq = [];
        for (let uq of this.dependencies) "doc" == uq ? xq = !0 : "selection" == uq ? Aq = !0 : 0 == (1 & (null !== (Eq = qq[uq.id]) && void 0 !== Eq ? Eq : 1)) && cq.push(qq[uq.id]);
        return {
          create: qq => (qq.values[Oq] = gq(qq), 1),
          update(qq, Eq) {
            if (xq && Eq.docChanged || Aq && (Eq.docChanged || Eq.selection) || Kq(qq, cq)) {
              let Eq = gq(qq);
              if (mq ? !wq(Eq, qq.values[Oq], Yq) : !Yq(Eq, qq.values[Oq])) return qq.values[Oq] = Eq, 1
            }
            return 0
          },
          reconfigure: (qq, Eq) => {
            let xq, Aq = Eq.config.address[lq];
            if (null != Aq) {
              let lq = uE(Eq, Aq);
              if (this.dependencies.every((gq => gq instanceof Fq ? Eq.facet(gq) === qq.facet(gq) : !(gq instanceof eq) || Eq.field(gq, !1) == qq.field(gq, !1))) || (mq ? wq(xq = gq(qq), lq, Yq) : Yq(xq = gq(qq), lq))) return qq.values[Oq] = lq, 0
            } else xq = gq(qq);
            return qq.values[Oq] = xq, 1
          }
        }
      }
    }

    function wq(qq, Eq, gq) {
      if (qq.length != Eq.length) return !1;
      for (let Yq = 0; Yq < qq.length; Yq++)
        if (!gq(qq[Yq], Eq[Yq])) return !1;
      return !0
    }

    function Kq(qq, Eq) {
      let gq = !1;
      for (let Yq of Eq) 1 & cE(qq, Yq) && (gq = !0);
      return gq
    }

    function Cq(qq, Eq, gq) {
      let Yq = gq.map((Eq => qq[Eq.id])),
        lq = gq.map((qq => qq.type)),
        Oq = Yq.filter((qq => !(1 & qq))),
        mq = qq[Eq.id] >> 1;

      function xq(qq) {
        let gq = [];
        for (let Eq = 0; Eq < Yq.length; Eq++) {
          let Oq = uE(qq, Yq[Eq]);
          if (2 == lq[Eq])
            for (let qq of Oq) gq.push(qq);
          else gq.push(Oq)
        }
        return Eq.combine(gq)
      }
      return {
        create(qq) {
          for (let Eq of Yq) cE(qq, Eq);
          return qq.values[mq] = xq(qq), 1
        },
        update(qq, gq) {
          if (!Kq(qq, Oq)) return 0;
          let Yq = xq(qq);
          return Eq.compare(Yq, qq.values[mq]) ? 0 : (qq.values[mq] = Yq, 1)
        },
        reconfigure(qq, lq) {
          let Oq = Kq(qq, Yq),
            Aq = lq.config.facets[Eq.id],
            cq = lq.facet(Eq);
          if (Aq && !Oq && sq(gq, Aq)) return qq.values[mq] = cq, 0;
          let uq = xq(qq);
          return Eq.compare(uq, cq) ? (qq.values[mq] = cq, 0) : (qq.values[mq] = uq, 1)
        }
      }
    }
    const Iq = Fq.define({
      static: !0
    });
    class eq {
      constructor(qq, Eq, gq, Yq, lq) {
        this.id = qq, this.createF = Eq, this.updateF = gq, this.compareF = Yq, this.spec = lq, this.provides = void 0
      }
      static define(qq) {
        let Eq = new eq(Uq++, qq.create, qq.update, qq.compare || ((qq, Eq) => qq === Eq), qq);
        return qq.provide && (Eq.provides = qq.provide(Eq)), Eq
      }
      create(qq) {
        let Eq = qq.facet(Iq).find((qq => qq.field == this));
        return ((null === Eq || void 0 === Eq ? void 0 : Eq.create) || this.createF)(qq)
      }
      slot(qq) {
        let Eq = qq[this.id] >> 1;
        return {
          create: qq => (qq.values[Eq] = this.create(qq), 1),
          update: (qq, gq) => {
            let Yq = qq.values[Eq],
              lq = this.updateF(Yq, gq);
            return this.compareF(Yq, lq) ? 0 : (qq.values[Eq] = lq, 1)
          },
          reconfigure: (qq, gq) => {
            let Yq, lq = qq.facet(Iq),
              Oq = gq.facet(Iq);
            return (Yq = lq.find((qq => qq.field == this))) && Yq != Oq.find((qq => qq.field == this)) ? (qq.values[Eq] = Yq.create(qq), 1) : null != gq.config.address[this.id] ? (qq.values[Eq] = gq.field(this), 0) : (qq.values[Eq] = this.create(qq), 1)
          }
        }
      }
      init(qq) {
        return [this, Iq.of({
          field: this,
          create: qq
        })]
      }
      get extension() {
        return this
      }
    }
    const Dq = 4,
      qE = 3,
      EE = 2,
      gE = 1;

    function YE(qq) {
      return Eq => new OE(Eq, qq)
    }
    const lE = {
      highest: YE(0),
      high: YE(gE),
      default: YE(EE),
      low: YE(qE),
      lowest: YE(Dq)
    };
    class OE {
      constructor(qq, Eq) {
        this.inner = qq, this.prec = Eq
      }
    }
    class mE {
      of(qq) {
        return new xE(this, qq)
      }
      reconfigure(qq) {
        return mE.reconfigure.of({
          compartment: this,
          extension: qq
        })
      }
      get(qq) {
        return qq.config.compartments.get(this)
      }
    }
    class xE {
      constructor(qq, Eq) {
        this.compartment = qq, this.inner = Eq
      }
    }
    class AE {
      constructor(qq, Eq, gq, Yq, lq, Oq) {
        for (this.base = qq, this.compartments = Eq, this.dynamicSlots = gq, this.address = Yq, this.staticValues = lq, this.facets = Oq, this.statusTemplate = []; this.statusTemplate.length < gq.length;) this.statusTemplate.push(0)
      }
      staticFacet(qq) {
        let Eq = this.address[qq.id];
        return null == Eq ? qq.default : this.staticValues[Eq >> 1]
      }
      static resolve(qq, Eq, gq) {
        let Yq = [],
          lq = Object.create(null),
          Oq = new Map;
        for (let Bq of function(qq, Eq, gq) {
            let Yq = [
                [],
                [],
                [],
                [],
                []
              ],
              lq = new Map;

            function Oq(qq, mq) {
              let xq = lq.get(qq);
              if (null != xq) {
                if (xq <= mq) return;
                let Eq = Yq[xq].indexOf(qq);
                Eq > -1 && Yq[xq].splice(Eq, 1), qq instanceof xE && gq.delete(qq.compartment)
              }
              if (lq.set(qq, mq), Array.isArray(qq))
                for (let Eq of qq) Oq(Eq, mq);
              else if (qq instanceof xE) {
                if (gq.has(qq.compartment)) throw new RangeError("Duplicate use of compartment in extensions");
                let Yq = Eq.get(qq.compartment) || qq.inner;
                gq.set(qq.compartment, Yq), Oq(Yq, mq)
              } else if (qq instanceof OE) Oq(qq.inner, qq.prec);
              else if (qq instanceof eq) Yq[mq].push(qq), qq.provides && Oq(qq.provides, mq);
              else if (qq instanceof Xq) Yq[mq].push(qq), qq.facet.extensions && Oq(qq.facet.extensions, EE);
              else {
                let Eq = qq.extension;
                if (!Eq) throw new Error(`Unrecognized extension value in extension set (${qq}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
                Oq(Eq, mq)
              }
            }
            return Oq(qq, EE), Yq.reduce(((qq, Eq) => qq.concat(Eq)))
          }(qq, Eq, Oq)) Bq instanceof eq ? Yq.push(Bq) : (lq[Bq.facet.id] || (lq[Bq.facet.id] = [])).push(Bq);
        let mq = Object.create(null),
          xq = [],
          Aq = [];
        for (let Bq of Yq) mq[Bq.id] = Aq.length << 1, Aq.push((qq => Bq.slot(qq)));
        let cq = null === gq || void 0 === gq ? void 0 : gq.config.facets;
        for (let Bq in lq) {
          let qq = lq[Bq],
            Eq = qq[0].facet,
            Yq = cq && cq[Bq] || [];
          if (qq.every((qq => 0 == qq.type)))
            if (mq[Eq.id] = xq.length << 1 | 1, sq(Yq, qq)) xq.push(gq.facet(Eq));
            else {
              let Yq = Eq.combine(qq.map((qq => qq.value)));
              xq.push(gq && Eq.compare(Yq, gq.facet(Eq)) ? gq.facet(Eq) : Yq)
            }
          else {
            for (let Eq of qq) 0 == Eq.type ? (mq[Eq.id] = xq.length << 1 | 1, xq.push(Eq.value)) : (mq[Eq.id] = Aq.length << 1, Aq.push((qq => Eq.dynamicSlot(qq))));
            mq[Eq.id] = Aq.length << 1, Aq.push((gq => Cq(gq, Eq, qq)))
          }
        }
        let uq = Aq.map((qq => qq(mq)));
        return new AE(qq, Oq, uq, mq, xq, lq)
      }
    }

    function cE(qq, Eq) {
      if (1 & Eq) return 2;
      let gq = Eq >> 1,
        Yq = qq.status[gq];
      if (4 == Yq) throw new Error("Cyclic dependency between fields and/or facets");
      if (2 & Yq) return Yq;
      qq.status[gq] = 4;
      let lq = qq.computeSlot(qq, qq.config.dynamicSlots[gq]);
      return qq.status[gq] = 2 | lq
    }

    function uE(qq, Eq) {
      return 1 & Eq ? qq.config.staticValues[Eq >> 1] : qq.values[Eq >> 1]
    }
    const BE = Fq.define(),
      WE = Fq.define({
        combine: qq => qq.some((qq => qq)),
        static: !0
      }),
      NE = Fq.define({
        combine: qq => qq.length ? qq[0] : void 0,
        static: !0
      }),
      aE = Fq.define(),
      VE = Fq.define(),
      dE = Fq.define(),
      jE = Fq.define({
        combine: qq => !!qq.length && qq[0]
      });
    class HE {
      constructor(qq, Eq) {
        this.type = qq, this.value = Eq
      }
      static define() {
        return new oE
      }
    }
    class oE {
      of(qq) {
        return new HE(this, qq)
      }
    }
    class PE {
      constructor(qq) {
        this.map = qq
      }
      of(qq) {
        return new QE(this, qq)
      }
    }
    class QE {
      constructor(qq, Eq) {
        this.type = qq, this.value = Eq
      }
      map(qq) {
        let Eq = this.type.map(this.value, qq);
        return void 0 === Eq ? void 0 : Eq == this.value ? this : new QE(this.type, Eq)
      }
      is(qq) {
        return this.type == qq
      }
      static define() {
        return new PE((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).map || (qq => qq))
      }
      static mapEffects(qq, Eq) {
        if (!qq.length) return qq;
        let gq = [];
        for (let Yq of qq) {
          let qq = Yq.map(Eq);
          qq && gq.push(qq)
        }
        return gq
      }
    }
    QE.reconfigure = QE.define(), QE.appendConfig = QE.define();
    class yE {
      constructor(qq, Eq, gq, Yq, lq, Oq) {
        this.startState = qq, this.changes = Eq, this.selection = gq, this.effects = Yq, this.annotations = lq, this.scrollIntoView = Oq, this._doc = null, this._state = null, gq && Rq(gq, Eq.newLength), lq.some((qq => qq.type == yE.time)) || (this.annotations = lq.concat(yE.time.of(Date.now())))
      }
      static create(qq, Eq, gq, Yq, lq, Oq) {
        return new yE(qq, Eq, gq, Yq, lq, Oq)
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
      annotation(qq) {
        for (let Eq of this.annotations)
          if (Eq.type == qq) return Eq.value
      }
      get docChanged() {
        return !this.changes.empty
      }
      get reconfigured() {
        return this.startState.config != this.state.config
      }
      isUserEvent(qq) {
        let Eq = this.annotation(yE.userEvent);
        return !(!Eq || !(Eq == qq || Eq.length > qq.length && Eq.slice(0, qq.length) == qq && "." == Eq[qq.length]))
      }
    }

    function tE(qq, Eq) {
      let gq = [];
      for (let Yq = 0, lq = 0;;) {
        let Oq, mq;
        if (Yq < qq.length && (lq == Eq.length || Eq[lq] >= qq[Yq])) Oq = qq[Yq++], mq = qq[Yq++];
        else {
          if (!(lq < Eq.length)) return gq;
          Oq = Eq[lq++], mq = Eq[lq++]
        }!gq.length || gq[gq.length - 1] < Oq ? gq.push(Oq, mq) : gq[gq.length - 1] < mq && (gq[gq.length - 1] = mq)
      }
    }

    function rE(qq, Eq, gq) {
      var Yq;
      let lq, Oq, mq;
      return gq ? (lq = Eq.changes, Oq = Mq.empty(Eq.changes.length), mq = qq.changes.compose(Eq.changes)) : (lq = Eq.changes.map(qq.changes), Oq = qq.changes.mapDesc(Eq.changes, !0), mq = qq.changes.compose(lq)), {
        changes: mq,
        selection: Eq.selection ? Eq.selection.map(Oq) : null === (Yq = qq.selection) || void 0 === Yq ? void 0 : Yq.map(lq),
        effects: QE.mapEffects(qq.effects, lq).concat(QE.mapEffects(Eq.effects, Oq)),
        annotations: qq.annotations.length ? qq.annotations.concat(Eq.annotations) : Eq.annotations,
        scrollIntoView: qq.scrollIntoView || Eq.scrollIntoView
      }
    }

    function vE(qq, Eq, gq) {
      let Yq = Eq.selection,
        lq = bE(Eq.annotations);
      return Eq.userEvent && (lq = lq.concat(yE.userEvent.of(Eq.userEvent))), {
        changes: Eq.changes instanceof Mq ? Eq.changes : Mq.of(Eq.changes || [], gq, qq.facet(NE)),
        selection: Yq && (Yq instanceof kq ? Yq : kq.single(Yq.anchor, Yq.head)),
        effects: bE(Eq.effects),
        annotations: lq,
        scrollIntoView: !!Eq.scrollIntoView
      }
    }

    function hE(qq, Eq, gq) {
      let Yq = vE(qq, Eq.length ? Eq[0] : {}, qq.doc.length);
      Eq.length && !1 === Eq[0].filter && (gq = !1);
      for (let Oq = 1; Oq < Eq.length; Oq++) {
        !1 === Eq[Oq].filter && (gq = !1);
        let lq = !!Eq[Oq].sequential;
        Yq = rE(Yq, vE(qq, Eq[Oq], lq ? Yq.changes.newLength : qq.doc.length), lq)
      }
      let lq = yE.create(qq, Yq.changes, Yq.selection, Yq.effects, Yq.annotations, Yq.scrollIntoView);
      return function(qq) {
        let Eq = qq.startState,
          gq = Eq.facet(dE),
          Yq = qq;
        for (let lq = gq.length - 1; lq >= 0; lq--) {
          let Oq = gq[lq](qq);
          Oq && Object.keys(Oq).length && (Yq = rE(Yq, vE(Eq, Oq, qq.changes.newLength), !0))
        }
        return Yq == qq ? qq : yE.create(Eq, qq.changes, qq.selection, Yq.effects, Yq.annotations, Yq.scrollIntoView)
      }(gq ? function(qq) {
        let Eq = qq.startState,
          gq = !0;
        for (let lq of Eq.facet(aE)) {
          let Eq = lq(qq);
          if (!1 === Eq) {
            gq = !1;
            break
          }
          Array.isArray(Eq) && (gq = !0 === gq ? Eq : tE(gq, Eq))
        }
        if (!0 !== gq) {
          let Yq, lq;
          if (!1 === gq) lq = qq.changes.invertedDesc, Yq = Mq.empty(Eq.doc.length);
          else {
            let Eq = qq.changes.filter(gq);
            Yq = Eq.changes, lq = Eq.filtered.mapDesc(Eq.changes).invertedDesc
          }
          qq = yE.create(Eq, Yq, qq.selection && qq.selection.map(lq), QE.mapEffects(qq.effects, lq), qq.annotations, qq.scrollIntoView)
        }
        let Yq = Eq.facet(VE);
        for (let lq = Yq.length - 1; lq >= 0; lq--) {
          let gq = Yq[lq](qq);
          qq = gq instanceof yE ? gq : Array.isArray(gq) && 1 == gq.length && gq[0] instanceof yE ? gq[0] : hE(Eq, bE(gq), !1)
        }
        return qq
      }(lq) : lq)
    }
    yE.time = HE.define(), yE.userEvent = HE.define(), yE.addToHistory = HE.define(), yE.remote = HE.define();
    const nE = [];

    function bE(qq) {
      return null == qq ? nE : Array.isArray(qq) ? qq : [qq]
    }
    var iE = function(qq) {
      return qq[qq.Word = 0] = "Word", qq[qq.Space = 1] = "Space", qq[qq.Other = 2] = "Other", qq
    }(iE || (iE = {}));
    const ZE = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
    let fE;
    try {
      fE = new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u")
    } catch (gg) {}

    function ME(qq) {
      return Eq => {
        if (!/\S/.test(Eq)) return iE.Space;
        if (function(qq) {
            if (fE) return fE.test(qq);
            for (let Eq = 0; Eq < qq.length; Eq++) {
              let gq = qq[Eq];
              if (/\w/.test(gq) || gq > "\x80" && (gq.toUpperCase() != gq.toLowerCase() || ZE.test(gq))) return !0
            }
            return !1
          }(Eq)) return iE.Word;
        for (let gq = 0; gq < qq.length; gq++)
          if (Eq.indexOf(qq[gq]) > -1) return iE.Word;
        return iE.Other
      }
    }
    class TE {
      constructor(qq, Eq, gq, Yq, lq, Oq) {
        this.config = qq, this.doc = Eq, this.selection = gq, this.values = Yq, this.status = qq.statusTemplate.slice(), this.computeSlot = lq, Oq && (Oq._state = this);
        for (let mq = 0; mq < this.config.dynamicSlots.length; mq++) cE(this, mq << 1);
        this.computeSlot = null
      }
      field(qq) {
        let Eq = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          gq = this.config.address[qq.id];
        if (null != gq) return cE(this, gq), uE(this, gq);
        if (Eq) throw new RangeError("Field is not present in this state")
      }
      update() {
        for (var qq = arguments.length, Eq = new Array(qq), gq = 0; gq < qq; gq++) Eq[gq] = arguments[gq];
        return hE(this, Eq, !0)
      }
      applyTransaction(qq) {
        let Eq, gq = this.config,
          {
            base: Yq,
            compartments: lq
          } = gq;
        for (let mq of qq.effects) mq.is(mE.reconfigure) ? (gq && (lq = new Map, gq.compartments.forEach(((qq, Eq) => lq.set(Eq, qq))), gq = null), lq.set(mq.value.compartment, mq.value.extension)) : mq.is(QE.reconfigure) ? (gq = null, Yq = mq.value) : mq.is(QE.appendConfig) && (gq = null, Yq = bE(Yq).concat(mq.value));
        if (gq) Eq = qq.startState.values.slice();
        else {
          gq = AE.resolve(Yq, lq, this), Eq = new TE(gq, this.doc, this.selection, gq.dynamicSlots.map((() => null)), ((qq, Eq) => Eq.reconfigure(qq, this)), null).values
        }
        let Oq = qq.startState.facet(WE) ? qq.newSelection : qq.newSelection.asSingle();
        new TE(gq, qq.newDoc, Oq, Eq, ((Eq, gq) => gq.update(Eq, qq)), qq)
      }
      replaceSelection(qq) {
        return "string" == typeof qq && (qq = this.toText(qq)), this.changeByRange((Eq => ({
          changes: {
            from: Eq.from,
            to: Eq.to,
            insert: qq
          },
          range: kq.cursor(Eq.from + qq.length)
        })))
      }
      changeByRange(qq) {
        let Eq = this.selection,
          gq = qq(Eq.zV[0]),
          Yq = this.changes(gq.changes),
          lq = [gq.range],
          Oq = bE(gq.effects);
        for (let mq = 1; mq < Eq.zV.length; mq++) {
          let gq = qq(Eq.zV[mq]),
            xq = this.changes(gq.changes),
            Aq = xq.map(Yq);
          for (let qq = 0; qq < mq; qq++) lq[qq] = lq[qq].map(Aq);
          let cq = Yq.mapDesc(xq, !0);
          lq.push(gq.range.map(cq)), Yq = Yq.compose(Aq), Oq = QE.mapEffects(Oq, Aq).concat(QE.mapEffects(bE(gq.effects), cq))
        }
        return {
          changes: Yq,
          selection: kq.create(lq, Eq.mainIndex),
          effects: Oq
        }
      }
      changes() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return qq instanceof Mq ? qq : Mq.of(qq, this.doc.length, this.facet(TE.lineSeparator))
      }
      toText(qq) {
        return Vq.of(qq.split(this.facet(TE.lineSeparator) || iq))
      }
      sliceDoc() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.doc.length;
        return this.doc.sliceString(qq, Eq, this.lineBreak)
      }
      facet(qq) {
        let Eq = this.config.address[qq.id];
        return null == Eq ? qq.default : (cE(this, Eq), uE(this, Eq))
      }
      toJSON(qq) {
        let Eq = {
          doc: this.sliceDoc(),
          selection: this.selection.toJSON()
        };
        if (qq)
          for (let gq in qq) {
            let Yq = qq[gq];
            Yq instanceof eq && null != this.config.address[Yq.id] && (Eq[gq] = Yq.spec.toJSON(this.field(qq[gq]), this))
          }
        return Eq
      }
      static fromJSON(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          gq = arguments.length > 2 ? arguments[2] : void 0;
        if (!qq || "string" != typeof qq.doc) throw new RangeError("Invalid JSON representation for EditorState");
        let Yq = [];
        if (gq)
          for (let lq in gq)
            if (Object.prototype.hasOwnProperty.call(qq, lq)) {
              let Eq = gq[lq],
                Oq = qq[lq];
              Yq.push(Eq.init((qq => Eq.spec.fromJSON(Oq, qq))))
            } return TE.create({
          doc: qq.doc,
          selection: kq.fromJSON(qq.selection),
          extensions: Eq.extensions ? Yq.concat([Eq.extensions]) : Yq
        })
      }
      static create() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          Eq = AE.resolve(qq.extensions || [], new Map),
          gq = qq.doc instanceof Vq ? qq.doc : Vq.of((qq.doc || "").split(Eq.staticFacet(TE.lineSeparator) || iq)),
          Yq = qq.selection ? qq.selection instanceof kq ? qq.selection : kq.single(qq.selection.anchor, qq.selection.head) : kq.single(0);
        return Rq(Yq, gq.length), Eq.staticFacet(WE) || (Yq = Yq.asSingle()), new TE(Eq, gq, Yq, Eq.dynamicSlots.map((() => null)), ((qq, Eq) => Eq.create(qq)), null)
      }
      get tabSize() {
        return this.facet(TE.tabSize)
      }
      get lineBreak() {
        return this.facet(TE.lineSeparator) || "\n"
      }
      get readOnly() {
        return this.facet(jE)
      }
      phrase(qq) {
        for (var Eq = arguments.length, gq = new Array(Eq > 1 ? Eq - 1 : 0), Yq = 1; Yq < Eq; Yq++) gq[Yq - 1] = arguments[Yq];
        for (let lq of this.facet(TE.phrases))
          if (Object.prototype.hasOwnProperty.call(lq, qq)) {
            qq = lq[qq];
            break
          } return gq.length && (qq = qq.replace(/\$(\$|\d*)/g, ((qq, Eq) => {
          if ("$" == Eq) return "$";
          let Yq = +(Eq || 1);
          return !Yq || Yq > gq.length ? qq : gq[Yq - 1]
        }))), qq
      }
      languageDataAt(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          Yq = [];
        for (let lq of this.facet(BE))
          for (let Oq of lq(this, Eq, gq)) Object.prototype.hasOwnProperty.call(Oq, qq) && Yq.push(Oq[qq]);
        return Yq
      }
      charCategorizer(qq) {
        let Eq = this.languageDataAt("wordChars", qq);
        return ME(Eq.length ? Eq[0] : "")
      }
      wordAt(qq) {
        let {
          text: Eq,
          from: gq,
          length: Yq
        } = this.doc.lineAt(qq), lq = this.charCategorizer(qq), Oq = qq - gq, mq = qq - gq;
        for (; Oq > 0;) {
          let qq = vq(Eq, Oq, !1);
          if (lq(Eq.slice(qq, Oq)) != iE.Word) break;
          Oq = qq
        }
        for (; mq < Yq;) {
          let qq = vq(Eq, mq);
          if (lq(Eq.slice(mq, qq)) != iE.Word) break;
          mq = qq
        }
        return Oq == mq ? null : kq.range(Oq + gq, mq + gq)
      }
    }

    function zE(qq, Eq) {
      let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        Yq = {};
      for (let lq of qq)
        for (let qq of Object.keys(lq)) {
          let Eq = lq[qq],
            Oq = Yq[qq];
          if (void 0 === Oq) Yq[qq] = Eq;
          else if (Oq === Eq || void 0 === Eq);
          else {
            if (!Object.hasOwnProperty.call(gq, qq)) throw new Error("Config merge conflict for field " + qq);
            Yq[qq] = gq[qq](Oq, Eq)
          }
        }
      for (let lq in Eq) void 0 === Yq[lq] && (Yq[lq] = Eq[lq]);
      return Yq
    }
    TE.allowMultipleSelections = WE, TE.tabSize = Fq.define({
      combine: qq => qq.length ? qq[0] : 4
    }), TE.lineSeparator = NE, TE.readOnly = jE, TE.phrases = Fq.define({
      compare(qq, Eq) {
        let gq = Object.keys(qq),
          Yq = Object.keys(Eq);
        return gq.length == Yq.length && gq.every((gq => qq[gq] == Eq[gq]))
      }
    }), TE.languageData = BE, TE.changeFilter = aE, TE.transactionFilter = VE, TE.transactionExtender = dE, mE.reconfigure = QE.define();
    class SE {
      eq(qq) {
        return this == qq
      }
      range(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qq;
        return GE.create(qq, Eq, this)
      }
    }

    function pE(qq, Eq) {
      return qq == Eq || qq.constructor == Eq.constructor && qq.eq(Eq)
    }
    SE.prototype.startSide = SE.prototype.endSide = 0, SE.prototype.point = !1, SE.prototype.mapMode = Zq.TrackDel;
    class GE {
      constructor(qq, Eq, gq) {
        this.from = qq, this.to = Eq, this.value = gq
      }
      static create(qq, Eq, gq) {
        return new GE(qq, Eq, gq)
      }
    }

    function LE(qq, Eq) {
      return qq.from - Eq.from || qq.value.startSide - Eq.value.startSide
    }
    class JE {
      constructor(qq, Eq, gq, Yq) {
        this.from = qq, this.to = Eq, this.value = gq, this.zYq = Yq
      }
      get length() {
        return this.to[this.to.length - 1]
      }
      findIndex(qq, Eq, gq) {
        let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          lq = gq ? this.to : this.from;
        for (let Oq = Yq, mq = lq.length;;) {
          if (Oq == mq) return Oq;
          let Yq = Oq + mq >> 1,
            xq = lq[Yq] - qq || (gq ? this.value[Yq].endSide : this.value[Yq].startSide) - Eq;
          if (Yq == Oq) return xq >= 0 ? Oq : mq;
          xq >= 0 ? mq = Yq : Oq = Yq + 1
        }
      }
      between(qq, Eq, gq, Yq) {
        for (let lq = this.findIndex(Eq, -1e9, !0), Oq = this.findIndex(gq, 1e9, !1, lq); lq < Oq; lq++)
          if (!1 === Yq(this.from[lq] + qq, this.to[lq] + qq, this.value[lq])) return !1
      }
      map(qq, Eq) {
        let gq = [],
          Yq = [],
          lq = [],
          Oq = -1,
          mq = -1;
        for (let xq = 0; xq < this.value.length; xq++) {
          let Aq, cq, uq = this.value[xq],
            Bq = this.from[xq] + qq,
            Wq = this.to[xq] + qq;
          if (Bq == Wq) {
            let qq = Eq.mapPos(Bq, uq.startSide, uq.mapMode);
            if (null == qq) continue;
            if (Aq = cq = qq, uq.startSide != uq.endSide && (cq = Eq.mapPos(Bq, uq.endSide), cq < Aq)) continue
          } else if (Aq = Eq.mapPos(Bq, uq.startSide), cq = Eq.mapPos(Wq, uq.endSide), Aq > cq || Aq == cq && uq.startSide > 0 && uq.endSide <= 0) continue;
          (cq - Aq || uq.endSide - uq.startSide) < 0 || (Oq < 0 && (Oq = Aq), uq.point && (mq = Math.max(mq, cq - Aq)), gq.push(uq), Yq.push(Aq - Oq), lq.push(cq - Oq))
        }
        return {
          mapped: gq.length ? new JE(Yq, lq, gq, mq) : null,
          pos: Oq
        }
      }
    }
    class kE {
      constructor(qq, Eq, gq, Yq) {
        this.chunkPos = qq, this.chunk = Eq, this.nextLayer = gq, this.zYq = Yq
      }
      static create(qq, Eq, gq, Yq) {
        return new kE(qq, Eq, gq, Yq)
      }
      get length() {
        let qq = this.chunk.length - 1;
        return qq < 0 ? 0 : Math.max(this.chunkEnd(qq), this.nextLayer.length)
      }
      get size() {
        if (this.UN) return 0;
        let qq = this.nextLayer.size;
        for (let Eq of this.chunk) qq += Eq.value.length;
        return qq
      }
      chunkEnd(qq) {
        return this.chunkPos[qq] + this.chunk[qq].length
      }
      update(qq) {
        let {
          add: Eq = [],
          sort: gq = !1,
          filterFrom: Yq = 0,
          filterTo: lq = this.length
        } = qq, Oq = qq.filter;
        if (0 == Eq.length && !Oq) return this;
        if (gq && (Eq = Eq.slice().sort(LE)), this.UN) return Eq.length ? kE.of(Eq) : this;
        let mq = new FE(this, null, -1).goto(0),
          xq = 0,
          Aq = [],
          cq = new RE;
        for (; mq.value || xq < Eq.length;)
          if (xq < Eq.length && (mq.from - Eq[xq].from || mq.startSide - Eq[xq].value.startSide) >= 0) {
            let qq = Eq[xq++];
            cq.addInner(qq.from, qq.to, qq.value) || Aq.push(qq)
          } else 1 == mq.rangeIndex && mq.chunkIndex < this.chunk.length && (xq == Eq.length || this.chunkEnd(mq.chunkIndex) < Eq[xq].from) && (!Oq || Yq > this.chunkEnd(mq.chunkIndex) || lq < this.chunkPos[mq.chunkIndex]) && cq.addChunk(this.chunkPos[mq.chunkIndex], this.chunk[mq.chunkIndex]) ? mq.nextChunk() : ((!Oq || Yq > mq.to || lq < mq.from || Oq(mq.from, mq.to, mq.value)) && (cq.addInner(mq.from, mq.to, mq.value) || Aq.push(GE.create(mq.from, mq.to, mq.value))), mq.next());
        return cq.finishInner(this.nextLayer.UN && !Aq.length ? kE.empty : this.nextLayer.update({
          add: Aq,
          filter: Oq,
          filterFrom: Yq,
          filterTo: lq
        }))
      }
      map(qq) {
        if (qq.empty || this.UN) return this;
        let Eq = [],
          gq = [],
          Yq = -1;
        for (let Oq = 0; Oq < this.chunk.length; Oq++) {
          let lq = this.chunkPos[Oq],
            mq = this.chunk[Oq],
            xq = qq.touchesRange(lq, lq + mq.length);
          if (!1 === xq) Yq = Math.max(Yq, mq.zYq), Eq.push(mq), gq.push(qq.mapPos(lq));
          else if (!0 === xq) {
            let {
              mapped: Oq,
              pos: xq
            } = mq.map(lq, qq);
            Oq && (Yq = Math.max(Yq, Oq.zYq), Eq.push(Oq), gq.push(xq))
          }
        }
        let lq = this.nextLayer.map(qq);
        return 0 == Eq.length ? lq : new kE(gq, Eq, lq || kE.empty, Yq)
      }
      between(qq, Eq, gq) {
        if (!this.UN) {
          for (let Yq = 0; Yq < this.chunk.length; Yq++) {
            let lq = this.chunkPos[Yq],
              Oq = this.chunk[Yq];
            if (Eq >= lq && qq <= lq + Oq.length && !1 === Oq.between(lq, qq - lq, Eq - lq, gq)) return
          }
          this.nextLayer.between(qq, Eq, gq)
        }
      }
      iter() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return sE.from([this]).goto(qq)
      }
      get UN() {
        return this.nextLayer == this
      }
      static iter(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return sE.from(qq).goto(Eq)
      }
      static compare(qq, Eq, gq, Yq) {
        let lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1,
          Oq = qq.filter((qq => qq.zYq > 0 || !qq.UN && qq.zYq >= lq)),
          mq = Eq.filter((qq => qq.zYq > 0 || !qq.UN && qq.zYq >= lq)),
          xq = UE(Oq, mq, gq),
          Aq = new wE(Oq, xq, lq),
          cq = new wE(mq, xq, lq);
        gq.iterGaps(((qq, Eq, gq) => KE(Aq, qq, cq, Eq, gq, Yq))), gq.empty && 0 == gq.length && KE(Aq, 0, cq, 0, 0, Yq)
      }
      static eq(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Yq = arguments.length > 3 ? arguments[3] : void 0;
        null == Yq && (Yq = 999999999);
        let lq = qq.filter((qq => !qq.UN && Eq.indexOf(qq) < 0)),
          Oq = Eq.filter((Eq => !Eq.UN && qq.indexOf(Eq) < 0));
        if (lq.length != Oq.length) return !1;
        if (!lq.length) return !0;
        let mq = UE(lq, Oq),
          xq = new wE(lq, mq, 0).goto(gq),
          Aq = new wE(Oq, mq, 0).goto(gq);
        for (;;) {
          if (xq.to != Aq.to || !CE(xq.active, Aq.active) || xq.point && (!Aq.point || !pE(xq.point, Aq.point))) return !1;
          if (xq.to > Yq) return !0;
          xq.next(), Aq.next()
        }
      }
      static spans(qq, Eq, gq, Yq) {
        let lq = new wE(qq, null, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1).goto(Eq),
          Oq = Eq,
          mq = lq.openStart;
        for (;;) {
          let qq = Math.min(lq.to, gq);
          if (lq.point) {
            let gq = lq.activeForPoint(lq.to),
              xq = lq.pointFrom < Eq ? gq.length + 1 : lq.point.startSide < 0 ? gq.length : Math.min(gq.length, mq);
            Yq.point(Oq, qq, lq.point, gq, xq, lq.pointRank), mq = Math.min(lq.openEnd(qq), gq.length)
          } else qq > Oq && (Yq.span(Oq, qq, lq.active, mq), mq = lq.openEnd(qq));
          if (lq.to > gq) return mq + (lq.point && lq.to > gq ? 1 : 0);
          Oq = lq.to, lq.next()
        }
      }
      static of (qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gq = new RE;
        for (let Yq of qq instanceof GE ? [qq] : Eq ? function(qq) {
            if (qq.length > 1)
              for (let Eq = qq[0], gq = 1; gq < qq.length; gq++) {
                let Yq = qq[gq];
                if (LE(Eq, Yq) > 0) return qq.slice().sort(LE);
                Eq = Yq
              }
            return qq
          }(qq) : qq) gq.add(Yq.from, Yq.to, Yq.value);
        return gq.finish()
      }
      static join(qq) {
        if (!qq.length) return kE.empty;
        let Eq = qq[qq.length - 1];
        for (let gq = qq.length - 2; gq >= 0; gq--)
          for (let Yq = qq[gq]; Yq != kE.empty; Yq = Yq.nextLayer) Eq = new kE(Yq.chunkPos, Yq.chunk, Eq, Math.max(Yq.zYq, Eq.zYq));
        return Eq
      }
    }
    kE.empty = new kE([], [], null, -1), kE.empty.nextLayer = kE.empty;
    class RE {
      finishChunk(qq) {
        this.chunks.push(new JE(this.from, this.to, this.value, this.zYq)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.zYq), this.zYq = -1, qq && (this.from = [], this.to = [], this.value = [])
      }
      constructor() {
        this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.zYq = -1, this.setMaxPoint = -1, this.nextLayer = null
      }
      add(qq, Eq, gq) {
        this.addInner(qq, Eq, gq) || (this.nextLayer || (this.nextLayer = new RE)).add(qq, Eq, gq)
      }
      addInner(qq, Eq, gq) {
        let Yq = qq - this.lastTo || gq.startSide - this.last.endSide;
        if (Yq <= 0 && (qq - this.lastFrom || gq.startSide - this.last.startSide) < 0) throw new Error("Ranges must be added sorted by `from` position and `startSide`");
        return !(Yq < 0) && (250 == this.from.length && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = qq), this.from.push(qq - this.chunkStart), this.to.push(Eq - this.chunkStart), this.last = gq, this.lastFrom = qq, this.lastTo = Eq, this.value.push(gq), gq.point && (this.zYq = Math.max(this.zYq, Eq - qq)), !0)
      }
      addChunk(qq, Eq) {
        if ((qq - this.lastTo || Eq.value[0].startSide - this.last.endSide) < 0) return !1;
        this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, Eq.zYq), this.chunks.push(Eq), this.chunkPos.push(qq);
        let gq = Eq.value.length - 1;
        return this.last = Eq.value[gq], this.lastFrom = Eq.from[gq] + qq, this.lastTo = Eq.to[gq] + qq, !0
      }
      finish() {
        return this.finishInner(kE.empty)
      }
      finishInner(qq) {
        if (this.from.length && this.finishChunk(!1), 0 == this.chunks.length) return qq;
        let Eq = kE.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(qq) : qq, this.setMaxPoint);
        return this.from = null, Eq
      }
    }

    function UE(qq, Eq, gq) {
      let Yq = new Map;
      for (let Oq of qq)
        for (let qq = 0; qq < Oq.chunk.length; qq++) Oq.chunk[qq].zYq <= 0 && Yq.set(Oq.chunk[qq], Oq.chunkPos[qq]);
      let lq = new Set;
      for (let Oq of Eq)
        for (let qq = 0; qq < Oq.chunk.length; qq++) {
          let Eq = Yq.get(Oq.chunk[qq]);
          null == Eq || (gq ? gq.mapPos(Eq) : Eq) != Oq.chunkPos[qq] || (null === gq || void 0 === gq ? void 0 : gq.touchesRange(Eq, Eq + Oq.chunk[qq].length)) || lq.add(Oq.chunk[qq])
        }
      return lq
    }
    class FE {
      constructor(qq, Eq, gq) {
        let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.layer = qq, this.skip = Eq, this.SYq = gq, this.rank = Yq
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      get endSide() {
        return this.value ? this.value.endSide : 0
      }
      goto(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(qq, Eq, !1), this
      }
      gotoInner(qq, Eq, gq) {
        for (; this.chunkIndex < this.layer.chunk.length;) {
          let Eq = this.layer.chunk[this.chunkIndex];
          if (!(this.skip && this.skip.has(Eq) || this.layer.chunkEnd(this.chunkIndex) < qq || Eq.zYq < this.SYq)) break;
          this.chunkIndex++, gq = !1
        }
        if (this.chunkIndex < this.layer.chunk.length) {
          let Yq = this.layer.chunk[this.chunkIndex].findIndex(qq - this.layer.chunkPos[this.chunkIndex], Eq, !0);
          (!gq || this.rangeIndex < Yq) && this.setRangeIndex(Yq)
        }
        this.next()
      }
      forward(qq, Eq) {
        (this.to - qq || this.endSide - Eq) < 0 && this.gotoInner(qq, Eq, !0)
      }
      next() {
        for (;;) {
          if (this.chunkIndex == this.layer.chunk.length) {
            this.from = this.to = 1e9, this.value = null;
            break
          } {
            let qq = this.layer.chunkPos[this.chunkIndex],
              Eq = this.layer.chunk[this.chunkIndex],
              gq = qq + Eq.from[this.rangeIndex];
            if (this.from = gq, this.to = qq + Eq.to[this.rangeIndex], this.value = Eq.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.SYq < 0 || this.value.point && this.to - this.from >= this.SYq) break
          }
        }
      }
      setRangeIndex(qq) {
        if (qq == this.layer.chunk[this.chunkIndex].value.length) {
          if (this.chunkIndex++, this.skip)
            for (; this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]);) this.chunkIndex++;
          this.rangeIndex = 0
        } else this.rangeIndex = qq
      }
      nextChunk() {
        this.chunkIndex++, this.rangeIndex = 0, this.next()
      }
      compare(qq) {
        return this.from - qq.from || this.startSide - qq.startSide || this.rank - qq.rank || this.to - qq.to || this.endSide - qq.endSide
      }
    }
    class sE {
      constructor(qq) {
        this.heap = qq
      }
      static from(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          Yq = [];
        for (let lq = 0; lq < qq.length; lq++)
          for (let Oq = qq[lq]; !Oq.UN; Oq = Oq.nextLayer) Oq.zYq >= gq && Yq.push(new FE(Oq, Eq, gq, lq));
        return 1 == Yq.length ? Yq[0] : new sE(Yq)
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      goto(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        for (let gq of this.heap) gq.goto(qq, Eq);
        for (let gq = this.heap.length >> 1; gq >= 0; gq--) XE(this.heap, gq);
        return this.next(), this
      }
      forward(qq, Eq) {
        for (let gq of this.heap) gq.forward(qq, Eq);
        for (let gq = this.heap.length >> 1; gq >= 0; gq--) XE(this.heap, gq);
        (this.to - qq || this.value.endSide - Eq) < 0 && this.next()
      }
      next() {
        if (0 == this.heap.length) this.from = this.to = 1e9, this.value = null, this.rank = -1;
        else {
          let qq = this.heap[0];
          this.from = qq.from, this.to = qq.to, this.value = qq.value, this.rank = qq.rank, qq.value && qq.next(), XE(this.heap, 0)
        }
      }
    }

    function XE(qq, Eq) {
      for (let gq = qq[Eq];;) {
        let Yq = 1 + (Eq << 1);
        if (Yq >= qq.length) break;
        let lq = qq[Yq];
        if (Yq + 1 < qq.length && lq.compare(qq[Yq + 1]) >= 0 && (lq = qq[Yq + 1], Yq++), gq.compare(lq) < 0) break;
        qq[Yq] = gq, qq[Eq] = lq, Eq = Yq
      }
    }
    class wE {
      constructor(qq, Eq, gq) {
        this.SYq = gq, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = sE.from(qq, Eq, gq)
      }
      goto(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.cursor.goto(qq, Eq), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = qq, this.endSide = Eq, this.openStart = -1, this.next(), this
      }
      forward(qq, Eq) {
        for (; this.minActive > -1 && (this.activeTo[this.minActive] - qq || this.active[this.minActive].endSide - Eq) < 0;) this.removeActive(this.minActive);
        this.cursor.forward(qq, Eq)
      }
      removeActive(qq) {
        IE(this.active, qq), IE(this.activeTo, qq), IE(this.activeRank, qq), this.minActive = DE(this.active, this.activeTo)
      }
      addActive(qq) {
        let Eq = 0,
          {
            value: gq,
            to: Yq,
            rank: lq
          } = this.cursor;
        for (; Eq < this.activeRank.length && (lq - this.activeRank[Eq] || Yq - this.activeTo[Eq]) > 0;) Eq++;
        eE(this.active, Eq, gq), eE(this.activeTo, Eq, Yq), eE(this.activeRank, Eq, lq), qq && eE(qq, Eq, this.cursor.from), this.minActive = DE(this.active, this.activeTo)
      }
      next() {
        let qq = this.to,
          Eq = this.point;
        this.point = null;
        let gq = this.openStart < 0 ? [] : null;
        for (;;) {
          let Yq = this.minActive;
          if (Yq > -1 && (this.activeTo[Yq] - this.cursor.from || this.active[Yq].endSide - this.cursor.startSide) < 0) {
            if (this.activeTo[Yq] > qq) {
              this.to = this.activeTo[Yq], this.endSide = this.active[Yq].endSide;
              break
            }
            this.removeActive(Yq), gq && IE(gq, Yq)
          } else {
            if (!this.cursor.value) {
              this.to = this.endSide = 1e9;
              break
            }
            if (this.cursor.from > qq) {
              this.to = this.cursor.from, this.endSide = this.cursor.startSide;
              break
            } {
              let qq = this.cursor.value;
              if (qq.point) {
                if (!(Eq && this.cursor.to == this.to && this.cursor.from < this.cursor.to)) {
                  this.point = qq, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = qq.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
                  break
                }
                this.cursor.next()
              } else this.addActive(gq), this.cursor.next()
            }
          }
        }
        if (gq) {
          this.openStart = 0;
          for (let Eq = gq.length - 1; Eq >= 0 && gq[Eq] < qq; Eq--) this.openStart++
        }
      }
      activeForPoint(qq) {
        if (!this.active.length) return this.active;
        let Eq = [];
        for (let gq = this.active.length - 1; gq >= 0 && !(this.activeRank[gq] < this.pointRank); gq--)(this.activeTo[gq] > qq || this.activeTo[gq] == qq && this.active[gq].endSide >= this.point.endSide) && Eq.push(this.active[gq]);
        return Eq.reverse()
      }
      openEnd(qq) {
        let Eq = 0;
        for (let gq = this.activeTo.length - 1; gq >= 0 && this.activeTo[gq] > qq; gq--) Eq++;
        return Eq
      }
    }

    function KE(qq, Eq, gq, Yq, lq, Oq) {
      qq.goto(Eq), gq.goto(Yq);
      let mq = Yq + lq,
        xq = Yq,
        Aq = Yq - Eq,
        cq = !!Oq.boundChange;
      for (let uq = !1;;) {
        let Eq = qq.to + Aq - gq.to,
          Yq = Eq || qq.endSide - gq.endSide,
          lq = Yq < 0 ? qq.to + Aq : gq.to,
          Bq = Math.min(lq, mq);
        if (qq.point || gq.point ? (qq.point && gq.point && pE(qq.point, gq.point) && CE(qq.activeForPoint(qq.to), gq.activeForPoint(gq.to)) || Oq.comparePoint(xq, Bq, qq.point, gq.point), uq = !1) : (uq && Oq.boundChange(xq), Bq > xq && !CE(qq.active, gq.active) && Oq.compareRange(xq, Bq, qq.active, gq.active), cq && Bq < mq && (Eq || qq.openEnd(lq) != gq.openEnd(lq)) && (uq = !0)), lq > mq) break;
        xq = lq, Yq <= 0 && qq.next(), Yq >= 0 && gq.next()
      }
    }

    function CE(qq, Eq) {
      if (qq.length != Eq.length) return !1;
      for (let gq = 0; gq < qq.length; gq++)
        if (qq[gq] != Eq[gq] && !pE(qq[gq], Eq[gq])) return !1;
      return !0
    }

    function IE(qq, Eq) {
      for (let gq = Eq, Yq = qq.length - 1; gq < Yq; gq++) qq[gq] = qq[gq + 1];
      qq.pop()
    }

    function eE(qq, Eq, gq) {
      for (let Yq = qq.length - 1; Yq >= Eq; Yq--) qq[Yq + 1] = qq[Yq];
      qq[Eq] = gq
    }

    function DE(qq, Eq) {
      let gq = -1,
        Yq = 1e9;
      for (let lq = 0; lq < Eq.length; lq++)(Eq[lq] - Yq || qq[lq].endSide - qq[gq].endSide) < 0 && (gq = lq, Yq = Eq[lq]);
      return gq
    }

    function qg(qq, Eq) {
      let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : qq.length,
        Yq = 0;
      for (let lq = 0; lq < gq && lq < qq.length;) 9 == qq.charCodeAt(lq) ? (Yq += Eq - Yq % Eq, lq++) : (Yq++, lq = vq(qq, lq));
      return Yq
    }

    function Eg(qq, Eq, gq, Yq) {
      for (let lq = 0, Oq = 0;;) {
        if (Oq >= Eq) return lq;
        if (lq == qq.length) break;
        Oq += 9 == qq.charCodeAt(lq) ? gq - Oq % gq : 1, lq = vq(qq, lq)
      }
      return !0 === Yq ? -1 : qq.length
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);