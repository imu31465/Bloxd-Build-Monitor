export const id = 293;
export const ids = [293];
export const modules = {
  40876: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => ye,
      e: () => Ik,
      ChangeSet: () => zk,
      f: () => qe,
      h: () => Xk,
      j: () => ve,
      n: () => Tk,
      p: () => qk,
      q: () => Se,
      w: () => Be,
      s: () => ce,
      A: () => he,
      D: () => Ce,
      E: () => Jk,
      I: () => Hk,
      K: () => Ae,
      L: () => dk,
      M: () => Fk,
      Q: () => Ee,
      S: () => ei,
      U: () => sk,
      Y: () => ii,
      ab: () => Vk
    });
    let Dk = [],
      fk = [];

    function Sk(kk) {
      if (kk < 768) return !1;
      for (let ek = 0, ik = Dk.length;;) {
        let Sk = ek + ik >> 1;
        if (kk < Dk[Sk]) ik = Sk;
        else {
          if (!(kk >= fk[Sk])) return !0;
          ek = Sk + 1
        }
        if (ek == ik) return !1
      }
    }

    function bk(kk) {
      return kk >= 127462 && kk <= 127487
    }(() => {
      let kk = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((kk => kk ? parseInt(kk, 36) : 1));
      for (let ek = 0, ik = 0; ek < kk.length; ek++)(ek % 2 ? fk : Dk).push(ik += kk[ek])
    })();
    const rk = 8205;

    function Pk(kk, ek) {
      return (!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2] ? mk : Mk)(kk, ek, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function mk(kk, ek, ik) {
      if (ek == kk.length) return ek;
      ek && xk(kk.charCodeAt(ek)) && nk(kk.charCodeAt(ek - 1)) && ek--;
      let Dk = Kk(kk, ek);
      for (ek += Uk(Dk); ek < kk.length;) {
        let fk = Kk(kk, ek);
        if (Dk == rk || fk == rk || ik && Sk(fk)) ek += Uk(fk), Dk = fk;
        else {
          if (!bk(fk)) break;
          {
            let ik = 0,
              Dk = ek - 2;
            for (; Dk >= 0 && bk(Kk(kk, Dk));) ik++, Dk -= 2;
            if (ik % 2 == 0) break;
            ek += 2
          }
        }
      }
      return ek
    }

    function Mk(kk, ek, ik) {
      for (; ek > 0;) {
        let Dk = mk(kk, ek - 2, ik);
        if (Dk < ek) return Dk;
        ek--
      }
      return 0
    }

    function Kk(kk, ek) {
      let ik = kk.charCodeAt(ek);
      if (!nk(ik) || ek + 1 == kk.length) return ik;
      let Dk = kk.charCodeAt(ek + 1);
      return xk(Dk) ? Dk - 56320 + (ik - 55296 << 10) + 65536 : ik
    }

    function xk(kk) {
      return kk >= 56320 && kk < 57344
    }

    function nk(kk) {
      return kk >= 55296 && kk < 56320
    }

    function Uk(kk) {
      return kk < 65536 ? 1 : 2
    }
    class Hk {
      lineAt(kk) {
        if (kk < 0 || kk > this.length) throw new RangeError(`Invalid position ${kk} in document of length ${this.length}`);
        return this.lineInner(kk, !1, 1, 0)
      }
      line(kk) {
        if (kk < 1 || kk > this.lines) throw new RangeError(`Invalid line number ${kk} in ${this.lines}-line document`);
        return this.lineInner(kk, !0, 1, 0)
      }
      replace(kk, ek, ik) {
        [kk, ek] = jk(this, kk, ek);
        let Dk = [];
        return this.decompose(0, kk, Dk, 2), ik.length && ik.decompose(0, ik.length, Dk, 3), this.decompose(ek, this.length, Dk, 1), lk.from(Dk, this.length - (ek - kk) + ik.length)
      }
      append(kk) {
        return this.replace(this.length, this.length, kk)
      }
      slice(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        [kk, ek] = jk(this, kk, ek);
        let ik = [];
        return this.decompose(kk, ek, ik, 0), lk.from(ik, ek - kk)
      }
      eq(kk) {
        if (kk == this) return !0;
        if (kk.length != this.length || kk.lines != this.lines) return !1;
        let ek = this.scanIdentical(kk, 1),
          ik = this.length - this.scanIdentical(kk, -1),
          Dk = new Yk(this),
          fk = new Yk(kk);
        for (let Sk = ek, bk = ek;;) {
          if (Dk.next(Sk), fk.next(Sk), Sk = 0, Dk.lineBreak != fk.lineBreak || Dk.done != fk.done || Dk.value != fk.value) return !1;
          if (bk += Dk.value.length, Dk.done || bk >= ik) return !0
        }
      }
      iter() {
        return new Yk(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1)
      }
      iterRange(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        return new Lk(this, kk, ek)
      }
      iterLines(kk, ek) {
        let ik;
        if (null == kk) ik = this.iter();
        else {
          null == ek && (ek = this.lines + 1);
          let Dk = this.line(kk).from;
          ik = this.iterRange(Dk, Math.max(Dk, ek == this.lines + 1 ? this.length : ek <= 1 ? 0 : this.line(ek - 1).to))
        }
        return new Ck(ik)
      }
      toString() {
        return this.sliceString(0)
      }
      toJSON() {
        let kk = [];
        return this.flatten(kk), kk
      }
      constructor() {}
      static of (kk) {
        if (0 == kk.length) throw new RangeError("A document must have at least one line");
        return 1 != kk.length || kk[0] ? kk.length <= 32 ? new wk(kk) : lk.from(wk.split(kk, [])) : Hk.empty
      }
    }
    class wk extends Hk {
      constructor(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(kk) {
          let ek = -1;
          for (let ik of kk) ek += ik.length + 1;
          return ek
        }(kk);
        super(), this.text = kk, this.length = ek
      }
      get lines() {
        return this.text.length
      }
      get children() {
        return null
      }
      lineInner(kk, ek, ik, Dk) {
        for (let fk = 0;; fk++) {
          let Sk = this.text[fk],
            bk = Dk + Sk.length;
          if ((ek ? ik : bk) >= kk) return new Ak(Dk, bk, ik, Sk);
          Dk = bk + 1, ik++
        }
      }
      decompose(kk, ek, ik, Dk) {
        let fk = kk <= 0 && ek >= this.length ? this : new wk(yk(this.text, kk, ek), Math.min(ek, this.length) - Math.max(0, kk));
        if (1 & Dk) {
          let kk = ik.pop(),
            ek = pk(fk.text, kk.text.slice(), 0, fk.length);
          if (ek.length <= 32) ik.push(new wk(ek, kk.length + fk.length));
          else {
            let kk = ek.length >> 1;
            ik.push(new wk(ek.slice(0, kk)), new wk(ek.slice(kk)))
          }
        } else ik.push(fk)
      }
      replace(kk, ek, ik) {
        if (!(ik instanceof wk)) return super.replace(kk, ek, ik);
        [kk, ek] = jk(this, kk, ek);
        let Dk = pk(this.text, pk(ik.text, yk(this.text, 0, kk)), ek),
          fk = this.length + ik.length - (ek - kk);
        return Dk.length <= 32 ? new wk(Dk, fk) : lk.from(wk.split(Dk, []), fk)
      }
      sliceString(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [kk, ek] = jk(this, kk, ek);
        let Dk = "";
        for (let fk = 0, Sk = 0; fk <= ek && Sk < this.text.length; Sk++) {
          let bk = this.text[Sk],
            rk = fk + bk.length;
          fk > kk && Sk && (Dk += ik), kk < rk && ek > fk && (Dk += bk.slice(Math.max(0, kk - fk), ek - fk)), fk = rk + 1
        }
        return Dk
      }
      flatten(kk) {
        for (let ek of this.text) kk.push(ek)
      }
      scanIdentical() {
        return 0
      }
      static split(kk, ek) {
        let ik = [],
          Dk = -1;
        for (let fk of kk) ik.push(fk), Dk += fk.length + 1, 32 == ik.length && (ek.push(new wk(ik, Dk)), ik = [], Dk = -1);
        return Dk > -1 && ek.push(new wk(ik, Dk)), ek
      }
    }
    class lk extends Hk {
      constructor(kk, ek) {
        super(), this.children = kk, this.length = ek, this.lines = 0;
        for (let ik of kk) this.lines += ik.lines
      }
      lineInner(kk, ek, ik, Dk) {
        for (let fk = 0;; fk++) {
          let Sk = this.children[fk],
            bk = Dk + Sk.length,
            rk = ik + Sk.lines - 1;
          if ((ek ? rk : bk) >= kk) return Sk.lineInner(kk, ek, ik, Dk);
          Dk = bk + 1, ik = rk + 1
        }
      }
      decompose(kk, ek, ik, Dk) {
        for (let fk = 0, Sk = 0; Sk <= ek && fk < this.children.length; fk++) {
          let bk = this.children[fk],
            rk = Sk + bk.length;
          if (kk <= rk && ek >= Sk) {
            let fk = Dk & ((Sk <= kk ? 1 : 0) | (rk >= ek ? 2 : 0));
            Sk >= kk && rk <= ek && !fk ? ik.push(bk) : bk.decompose(kk - Sk, ek - Sk, ik, fk)
          }
          Sk = rk + 1
        }
      }
      replace(kk, ek, ik) {
        if ([kk, ek] = jk(this, kk, ek), ik.lines < this.lines)
          for (let Dk = 0, fk = 0; Dk < this.children.length; Dk++) {
            let Sk = this.children[Dk],
              bk = fk + Sk.length;
            if (kk >= fk && ek <= bk) {
              let rk = Sk.replace(kk - fk, ek - fk, ik),
                Pk = this.lines - Sk.lines + rk.lines;
              if (rk.lines < Pk >> 4 && rk.lines > Pk >> 6) {
                let fk = this.children.slice();
                return fk[Dk] = rk, new lk(fk, this.length - (ek - kk) + ik.length)
              }
              return super.replace(fk, bk, rk)
            }
            fk = bk + 1
          }
        return super.replace(kk, ek, ik)
      }
      sliceString(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [kk, ek] = jk(this, kk, ek);
        let Dk = "";
        for (let fk = 0, Sk = 0; fk < this.children.length && Sk <= ek; fk++) {
          let bk = this.children[fk],
            rk = Sk + bk.length;
          Sk > kk && fk && (Dk += ik), kk < rk && ek > Sk && (Dk += bk.sliceString(kk - Sk, ek - Sk, ik)), Sk = rk + 1
        }
        return Dk
      }
      flatten(kk) {
        for (let ek of this.children) ek.flatten(kk)
      }
      scanIdentical(kk, ek) {
        if (!(kk instanceof lk)) return 0;
        let ik = 0,
          [Dk, fk, Sk, bk] = ek > 0 ? [0, 0, this.children.length, kk.children.length] : [this.children.length - 1, kk.children.length - 1, -1, -1];
        for (;; Dk += ek, fk += ek) {
          if (Dk == Sk || fk == bk) return ik;
          let rk = this.children[Dk],
            Pk = kk.children[fk];
          if (rk != Pk) return ik + rk.scanIdentical(Pk, ek);
          ik += rk.length + 1
        }
      }
      static from(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kk.reduce(((kk, ek) => kk + ek.length + 1), -1),
          ik = 0;
        for (let xk of kk) ik += xk.lines;
        if (ik < 32) {
          let ik = [];
          for (let ek of kk) ek.flatten(ik);
          return new wk(ik, ek)
        }
        let Dk = Math.max(32, ik >> 5),
          fk = Dk << 1,
          Sk = Dk >> 1,
          bk = [],
          rk = 0,
          Pk = -1,
          mk = [];

        function Mk(kk) {
          let ek;
          if (kk.lines > fk && kk instanceof lk)
            for (let ik of kk.children) Mk(ik);
          else kk.lines > Sk && (rk > Sk || !rk) ? (Kk(), bk.push(kk)) : kk instanceof wk && rk && (ek = mk[mk.length - 1]) instanceof wk && kk.lines + ek.lines <= 32 ? (rk += kk.lines, Pk += kk.length + 1, mk[mk.length - 1] = new wk(ek.text.concat(kk.text), ek.length + 1 + kk.length)) : (rk + kk.lines > Dk && Kk(), rk += kk.lines, Pk += kk.length + 1, mk.push(kk))
        }

        function Kk() {
          0 != rk && (bk.push(1 == mk.length ? mk[0] : lk.from(mk, Pk)), Pk = -1, rk = mk.length = 0)
        }
        for (let xk of kk) Mk(xk);
        return Kk(), 1 == bk.length ? bk[0] : new lk(bk, ek)
      }
    }

    function pk(kk, ek) {
      let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e9;
      for (let fk = 0, Sk = 0, bk = !0; Sk < kk.length && fk <= Dk; Sk++) {
        let rk = kk[Sk],
          Pk = fk + rk.length;
        Pk >= ik && (Pk > Dk && (rk = rk.slice(0, Dk - fk)), fk < ik && (rk = rk.slice(ik - fk)), bk ? (ek[ek.length - 1] += rk, bk = !1) : ek.push(rk)), fk = Pk + 1
      }
      return ek
    }

    function yk(kk, ek, ik) {
      return pk(kk, [""], ek, ik)
    }
    Hk.empty = new wk([""], 0);
    class Yk {
      constructor(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.dir = ek, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [kk], this.offsets = [ek > 0 ? 1 : (kk instanceof wk ? kk.text.length : kk.children.length) << 1]
      }
      nextInner(kk, ek) {
        for (this.done = this.lineBreak = !1;;) {
          let ik = this.nodes.length - 1,
            Dk = this.nodes[ik],
            fk = this.offsets[ik],
            Sk = fk >> 1,
            bk = Dk instanceof wk ? Dk.text.length : Dk.children.length;
          if (Sk == (ek > 0 ? bk : 0)) {
            if (0 == ik) return this.done = !0, this.value = "", this;
            ek > 0 && this.offsets[ik - 1]++, this.nodes.pop(), this.offsets.pop()
          } else if ((1 & fk) == (ek > 0 ? 0 : 1)) {
            if (this.offsets[ik] += ek, 0 == kk) return this.lineBreak = !0, this.value = "\n", this;
            kk--
          } else if (Dk instanceof wk) {
            let fk = Dk.text[Sk + (ek < 0 ? -1 : 0)];
            if (this.offsets[ik] += ek, fk.length > Math.max(0, kk)) return this.value = 0 == kk ? fk : ek > 0 ? fk.slice(kk) : fk.slice(0, fk.length - kk), this;
            kk -= fk.length
          } else {
            let fk = Dk.children[Sk + (ek < 0 ? -1 : 0)];
            kk > fk.length ? (kk -= fk.length, this.offsets[ik] += ek) : (ek < 0 && this.offsets[ik]--, this.nodes.push(fk), this.offsets.push(ek > 0 ? 1 : (fk instanceof wk ? fk.text.length : fk.children.length) << 1))
          }
        }
      }
      next() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return kk < 0 && (this.nextInner(-kk, -this.dir), kk = this.value.length), this.nextInner(kk, this.dir)
      }
    }
    class Lk {
      constructor(kk, ek, ik) {
        this.value = "", this.done = !1, this.cursor = new Yk(kk, ek > ik ? -1 : 1), this.pos = ek > ik ? kk.length : 0, this.from = Math.min(ek, ik), this.to = Math.max(ek, ik)
      }
      nextInner(kk, ek) {
        if (ek < 0 ? this.pos <= this.from : this.pos >= this.to) return this.value = "", this.done = !0, this;
        kk += Math.max(0, ek < 0 ? this.pos - this.to : this.from - this.pos);
        let ik = ek < 0 ? this.pos - this.from : this.to - this.pos;
        kk > ik && (kk = ik), ik -= kk;
        let {
          value: Dk
        } = this.cursor.next(kk);
        return this.pos += (Dk.length + kk) * ek, this.value = Dk.length <= ik ? Dk : ek < 0 ? Dk.slice(Dk.length - ik) : Dk.slice(0, ik), this.done = !this.value, this
      }
      next() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return kk < 0 ? kk = Math.max(kk, this.from - this.pos) : kk > 0 && (kk = Math.min(kk, this.to - this.pos)), this.nextInner(kk, this.cursor.dir)
      }
      get lineBreak() {
        return this.cursor.lineBreak && "" != this.value
      }
    }
    class Ck {
      constructor(kk) {
        this.inner = kk, this.afterBreak = !0, this.value = "", this.done = !1
      }
      next() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          {
            done: ek,
            lineBreak: ik,
            value: Dk
          } = this.inner.next(kk);
        return ek && this.afterBreak ? (this.value = "", this.afterBreak = !1) : ek ? (this.done = !0, this.value = "") : ik ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = Dk, this.afterBreak = !1), this
      }
      get lineBreak() {
        return !1
      }
    }
    "undefined" != typeof Symbol && (Hk.prototype[Symbol.iterator] = function() {
      return this.iter()
    }, Yk.prototype[Symbol.iterator] = Lk.prototype[Symbol.iterator] = Ck.prototype[Symbol.iterator] = function() {
      return this
    });
    class Ak {
      constructor(kk, ek, ik, Dk) {
        this.from = kk, this.to = ek, this.number = ik, this.text = Dk
      }
      get length() {
        return this.to - this.from
      }
    }

    function jk(kk, ek, ik) {
      return [ek = Math.max(0, Math.min(kk.length, ek)), Math.max(ek, Math.min(kk.length, ik))]
    }

    function sk(kk, ek) {
      return Pk(kk, ek, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function dk(kk, ek) {
      let ik = kk.charCodeAt(ek);
      if (!((Dk = ik) >= 55296 && Dk < 56320) || ek + 1 == kk.length) return ik;
      var Dk;
      let fk = kk.charCodeAt(ek + 1);
      return function(kk) {
        return kk >= 56320 && kk < 57344
      }(fk) ? fk - 56320 + (ik - 55296 << 10) + 65536 : ik
    }

    function Vk(kk) {
      return kk <= 65535 ? String.fromCharCode(kk) : (kk -= 65536, String.fromCharCode(55296 + (kk >> 10), 56320 + (1023 & kk)))
    }

    function Fk(kk) {
      return kk < 65536 ? 1 : 2
    }
    const uk = /\r\n?|\n/;
    var qk = function(kk) {
      return kk[kk.Simple = 0] = "Simple", kk[kk.TrackDel = 1] = "TrackDel", kk[kk.TrackBefore = 2] = "TrackBefore", kk[kk.TrackAfter = 3] = "TrackAfter", kk
    }(qk || (qk = {}));
    class Ik {
      constructor(kk) {
        this.sections = kk
      }
      get length() {
        let kk = 0;
        for (let ek = 0; ek < this.sections.length; ek += 2) kk += this.sections[ek];
        return kk
      }
      get newLength() {
        let kk = 0;
        for (let ek = 0; ek < this.sections.length; ek += 2) {
          let ik = this.sections[ek + 1];
          kk += ik < 0 ? this.sections[ek] : ik
        }
        return kk
      }
      get empty() {
        return 0 == this.sections.length || 2 == this.sections.length && this.sections[1] < 0
      }
      iterGaps(kk) {
        for (let ek = 0, ik = 0, Dk = 0; ek < this.sections.length;) {
          let fk = this.sections[ek++],
            Sk = this.sections[ek++];
          Sk < 0 ? (kk(ik, Dk, fk), Dk += fk) : Dk += Sk, ik += fk
        }
      }
      iterChangedRanges(kk) {
        Ek(this, kk, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get invertedDesc() {
        let kk = [];
        for (let ek = 0; ek < this.sections.length;) {
          let ik = this.sections[ek++],
            Dk = this.sections[ek++];
          Dk < 0 ? kk.push(ik, Dk) : kk.push(Dk, ik)
        }
        return new Ik(kk)
      }
      composeDesc(kk) {
        return this.empty ? kk : kk.empty ? this : ak(this, kk)
      }
      mapDesc(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return kk.empty ? this : hk(this, kk, ek)
      }
      mapPos(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : qk.Simple,
          Dk = 0,
          fk = 0;
        for (let Sk = 0; Sk < this.sections.length;) {
          let bk = this.sections[Sk++],
            rk = this.sections[Sk++],
            Pk = Dk + bk;
          if (rk < 0) {
            if (Pk > kk) return fk + (kk - Dk);
            fk += bk
          } else {
            if (ik != qk.Simple && Pk >= kk && (ik == qk.TrackDel && Dk < kk && Pk > kk || ik == qk.TrackBefore && Dk < kk || ik == qk.TrackAfter && Pk > kk)) return null;
            if (Pk > kk || Pk == kk && ek < 0 && !bk) return kk == Dk || ek < 0 ? fk : fk + rk;
            fk += rk
          }
          Dk = Pk
        }
        if (kk > Dk) throw new RangeError(`Position ${kk} is out of range for changeset of length ${Dk}`);
        return fk
      }
      touchesRange(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kk;
        for (let ik = 0, Dk = 0; ik < this.sections.length && Dk <= ek;) {
          let fk = Dk + this.sections[ik++];
          if (this.sections[ik++] >= 0 && Dk <= ek && fk >= kk) return !(Dk < kk && fk > ek) || "cover";
          Dk = fk
        }
        return !1
      }
      toString() {
        let kk = "";
        for (let ek = 0; ek < this.sections.length;) {
          let ik = this.sections[ek++],
            Dk = this.sections[ek++];
          kk += (kk ? " " : "") + ik + (Dk >= 0 ? ":" + Dk : "")
        }
        return kk
      }
      toJSON() {
        return this.sections
      }
      static fromJSON(kk) {
        if (!Array.isArray(kk) || kk.length % 2 || kk.some((kk => "number" != typeof kk))) throw new RangeError("Invalid JSON representation of ChangeDesc");
        return new Ik(kk)
      }
      static create(kk) {
        return new Ik(kk)
      }
    }
    class zk extends Ik {
      constructor(kk, ek) {
        super(kk), this.inserted = ek
      }
      apply(kk) {
        if (this.length != kk.length) throw new RangeError("Applying change set to a document with the wrong length");
        return Ek(this, ((ek, ik, Dk, fk, Sk) => kk = kk.replace(Dk, Dk + (ik - ek), Sk)), !1), kk
      }
      mapDesc(kk) {
        return hk(this, kk, arguments.length > 1 && void 0 !== arguments[1] && arguments[1], !0)
      }
      invert(kk) {
        let ek = this.sections.slice(),
          ik = [];
        for (let Dk = 0, fk = 0; Dk < ek.length; Dk += 2) {
          let Sk = ek[Dk],
            bk = ek[Dk + 1];
          if (bk >= 0) {
            ek[Dk] = bk, ek[Dk + 1] = Sk;
            let rk = Dk >> 1;
            for (; ik.length < rk;) ik.push(Hk.empty);
            ik.push(Sk ? kk.slice(fk, fk + Sk) : Hk.empty)
          }
          fk += Sk
        }
        return new zk(ek, ik)
      }
      compose(kk) {
        return this.empty ? kk : kk.empty ? this : ak(this, kk, !0)
      }
      map(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return kk.empty ? this : hk(this, kk, ek, !0)
      }
      iterChanges(kk) {
        Ek(this, kk, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get desc() {
        return Ik.create(this.sections)
      }
      filter(kk) {
        let ek = [],
          ik = [],
          Dk = [],
          fk = new Wk(this);
        kk: for (let Sk = 0, bk = 0;;) {
          let rk = Sk == kk.length ? 1e9 : kk[Sk++];
          for (; bk < rk || bk == rk && 0 == fk.len;) {
            if (fk.done) break kk;
            let kk = Math.min(fk.len, rk - bk);
            Qk(Dk, kk, -1);
            let Sk = -1 == fk.ins ? -1 : 0 == fk.off ? fk.ins : 0;
            Qk(ek, kk, Sk), Sk > 0 && vk(ik, ek, fk.text), fk.forward(kk), bk += kk
          }
          let Pk = kk[Sk++];
          for (; bk < Pk;) {
            if (fk.done) break kk;
            let kk = Math.min(fk.len, Pk - bk);
            Qk(ek, kk, -1), Qk(Dk, kk, -1 == fk.ins ? -1 : 0 == fk.off ? fk.ins : 0), fk.forward(kk), bk += kk
          }
        }
        return {
          changes: new zk(ek, ik),
          filtered: Ik.create(Dk)
        }
      }
      toJSON() {
        let kk = [];
        for (let ek = 0; ek < this.sections.length; ek += 2) {
          let ik = this.sections[ek],
            Dk = this.sections[ek + 1];
          Dk < 0 ? kk.push(ik) : 0 == Dk ? kk.push([ik]) : kk.push([ik].concat(this.inserted[ek >> 1].toJSON()))
        }
        return kk
      }
      static of (kk, ek, ik) {
        let Dk = [],
          fk = [],
          Sk = 0,
          bk = null;

        function rk() {
          if (!(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && !Dk.length) return;
          Sk < ek && Qk(Dk, ek - Sk, -1);
          let kk = new zk(Dk, fk);
          bk = bk ? bk.compose(kk.map(bk)) : kk, Dk = [], fk = [], Sk = 0
        }
        return function kk(Pk) {
          if (Array.isArray(Pk))
            for (let ek of Pk) kk(ek);
          else if (Pk instanceof zk) {
            if (Pk.length != ek) throw new RangeError(`Mismatched change set length (got ${Pk.length}, expected ${ek})`);
            rk(), bk = bk ? bk.compose(Pk.map(bk)) : Pk
          } else {
            let {
              from: kk,
              to: bk = kk,
              insert: mk
            } = Pk;
            if (kk > bk || kk < 0 || bk > ek) throw new RangeError(`Invalid change range ${kk} to ${bk} (in doc of length ${ek})`);
            let Mk = mk ? "string" == typeof mk ? Hk.of(mk.split(ik || uk)) : mk : Hk.empty,
              Kk = Mk.length;
            if (kk == bk && 0 == Kk) return;
            kk < Sk && rk(), kk > Sk && Qk(Dk, kk - Sk, -1), Qk(Dk, bk - kk, Kk), vk(fk, Dk, Mk), Sk = bk
          }
        }(kk), rk(!bk), bk
      }
      static empty(kk) {
        return new zk(kk ? [kk, -1] : [], [])
      }
      static fromJSON(kk) {
        if (!Array.isArray(kk)) throw new RangeError("Invalid JSON representation of ChangeSet");
        let ek = [],
          ik = [];
        for (let Dk = 0; Dk < kk.length; Dk++) {
          let fk = kk[Dk];
          if ("number" == typeof fk) ek.push(fk, -1);
          else {
            if (!Array.isArray(fk) || "number" != typeof fk[0] || fk.some(((kk, ek) => ek && "string" != typeof kk))) throw new RangeError("Invalid JSON representation of ChangeSet");
            if (1 == fk.length) ek.push(fk[0], 0);
            else {
              for (; ik.length < Dk;) ik.push(Hk.empty);
              ik[Dk] = Hk.of(fk.slice(1)), ek.push(fk[0], ik[Dk].length)
            }
          }
        }
        return new zk(ek, ik)
      }
      static createSet(kk, ek) {
        return new zk(kk, ek)
      }
    }

    function Qk(kk, ek, ik) {
      let Dk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (0 == ek && ik <= 0) return;
      let fk = kk.length - 2;
      fk >= 0 && ik <= 0 && ik == kk[fk + 1] ? kk[fk] += ek : fk >= 0 && 0 == ek && 0 == kk[fk] ? kk[fk + 1] += ik : Dk ? (kk[fk] += ek, kk[fk + 1] += ik) : kk.push(ek, ik)
    }

    function vk(kk, ek, ik) {
      if (0 == ik.length) return;
      let Dk = ek.length - 2 >> 1;
      if (Dk < kk.length) kk[kk.length - 1] = kk[kk.length - 1].append(ik);
      else {
        for (; kk.length < Dk;) kk.push(Hk.empty);
        kk.push(ik)
      }
    }

    function Ek(kk, ek, ik) {
      let Dk = kk.inserted;
      for (let fk = 0, Sk = 0, bk = 0; bk < kk.sections.length;) {
        let rk = kk.sections[bk++],
          Pk = kk.sections[bk++];
        if (Pk < 0) fk += rk, Sk += rk;
        else {
          let mk = fk,
            Mk = Sk,
            Kk = Hk.empty;
          for (; mk += rk, Mk += Pk, Pk && Dk && (Kk = Kk.append(Dk[bk - 2 >> 1])), !(ik || bk == kk.sections.length || kk.sections[bk + 1] < 0);) rk = kk.sections[bk++], Pk = kk.sections[bk++];
          ek(fk, mk, Sk, Mk, Kk), fk = mk, Sk = Mk
        }
      }
    }

    function hk(kk, ek, ik) {
      let Dk = [],
        fk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3] ? [] : null,
        Sk = new Wk(kk),
        bk = new Wk(ek),
        rk = 0;
      for (let Pk = -1;;) {
        if (++rk > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - likely malformed ChangeSet");
        if (Sk.done && bk.len || bk.done && Sk.len) throw new Error("Mismatched change set lengths");
        if (-1 == Sk.ins && -1 == bk.ins) {
          let kk = Math.min(Sk.len, bk.len);
          Qk(Dk, kk, -1), Sk.forward(kk), bk.forward(kk)
        } else if (bk.ins >= 0 && (Sk.ins < 0 || Pk == Sk.i || 0 == Sk.off && (bk.len < Sk.len || bk.len == Sk.len && !ik))) {
          let kk = bk.len;
          for (Qk(Dk, bk.ins, -1); kk;) {
            if (++rk > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-b");
            let ek = Math.min(Sk.len, kk);
            Sk.ins >= 0 && Pk < Sk.i && Sk.len <= ek && (Qk(Dk, 0, Sk.ins), fk && vk(fk, Dk, Sk.text), Pk = Sk.i), Sk.forward(ek), kk -= ek
          }
          bk.next()
        } else {
          if (!(Sk.ins >= 0)) {
            if (Sk.done && bk.done) return fk ? zk.createSet(Dk, fk) : Ik.create(Dk);
            throw new Error("Mismatched change set lengths")
          } {
            let kk = 0,
              ek = Sk.len;
            for (; ek;) {
              if (++rk > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-a");
              if (-1 == bk.ins) {
                let ik = Math.min(ek, bk.len);
                kk += ik, ek -= ik, bk.forward(ik)
              } else {
                if (!(0 == bk.ins && bk.len < ek)) break;
                ek -= bk.len, bk.next()
              }
            }
            Qk(Dk, kk, Pk < Sk.i ? Sk.ins : 0), fk && Pk < Sk.i && vk(fk, Dk, Sk.text), Pk = Sk.i, Sk.forward(Sk.len - ek)
          }
        }
      }
    }

    function ak(kk, ek) {
      let ik = [],
        Dk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? [] : null,
        fk = new Wk(kk),
        Sk = new Wk(ek),
        bk = 0;
      for (let rk = !1;;) {
        if (++bk > 2e6) throw new Error("BLOXD CODEMIRROR: composeSets exceeded max iterations - likely malformed ChangeSet");
        if (fk.done && Sk.done) return Dk ? zk.createSet(ik, Dk) : Ik.create(ik);
        if (0 == fk.ins) Qk(ik, fk.len, 0, rk), fk.next();
        else if (0 != Sk.len || Sk.done) {
          if (fk.done || Sk.done) throw new Error("Mismatched change set lengths");
          {
            let kk = Math.min(fk.len2, Sk.len),
              ek = ik.length;
            if (-1 == fk.ins) {
              let ek = -1 == Sk.ins ? -1 : Sk.off ? 0 : Sk.ins;
              Qk(ik, kk, ek, rk), Dk && ek && vk(Dk, ik, Sk.text)
            } else - 1 == Sk.ins ? (Qk(ik, fk.off ? 0 : fk.len, kk, rk), Dk && vk(Dk, ik, fk.textBit(kk))) : (Qk(ik, fk.off ? 0 : fk.len, Sk.off ? 0 : Sk.ins, rk), Dk && !Sk.off && vk(Dk, ik, Sk.text));
            rk = (fk.ins > kk || Sk.ins >= 0 && Sk.len > kk) && (rk || ik.length > ek), fk.forward2(kk), Sk.forward(kk)
          }
        } else Qk(ik, 0, Sk.ins, rk), Dk && vk(Dk, ik, Sk.text), Sk.next()
      }
    }
    class Wk {
      constructor(kk) {
        this.set = kk, this.i = 0, this.next()
      }
      next() {
        let {
          sections: kk
        } = this.set;
        this.i < kk.length ? (this.len = kk[this.i++], this.ins = kk[this.i++]) : (this.len = 0, this.ins = -2), this.off = 0
      }
      get done() {
        return -2 == this.ins
      }
      get len2() {
        return this.ins < 0 ? this.len : this.ins
      }
      get text() {
        let {
          inserted: kk
        } = this.set, ek = this.i - 2 >> 1;
        return ek >= kk.length ? Hk.empty : kk[ek]
      }
      textBit(kk) {
        let {
          inserted: ek
        } = this.set, ik = this.i - 2 >> 1;
        return ik >= ek.length && !kk ? Hk.empty : ek[ik].slice(this.off, null == kk ? void 0 : this.off + kk)
      }
      forward(kk) {
        kk == this.len ? this.next() : (this.len -= kk, this.off += kk)
      }
      forward2(kk) {
        -1 == this.ins ? this.forward(kk) : kk == this.ins ? this.next() : (this.ins -= kk, this.off += kk)
      }
    }
    class tk {
      constructor(kk, ek, ik) {
        this.from = kk, this.to = ek, this.flags = ik
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
        let kk = 7 & this.flags;
        return 7 == kk ? null : kk
      }
      get goalColumn() {
        let kk = this.flags >> 6;
        return 16777215 == kk ? void 0 : kk
      }
      map(kk) {
        let ek, ik, Dk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return this.empty ? ek = ik = kk.mapPos(this.from, Dk) : (ek = kk.mapPos(this.from, 1), ik = kk.mapPos(this.to, -1)), ek == this.from && ik == this.to ? this : new tk(ek, ik, this.flags)
      }
      extend(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kk,
          ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (kk <= this.anchor && ek >= this.anchor) return Xk.range(kk, ek, void 0, void 0, ik);
        let Dk = Math.abs(kk - this.anchor) > Math.abs(ek - this.anchor) ? kk : ek;
        return Xk.range(this.anchor, Dk, void 0, void 0, ik)
      }
      eq(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.anchor == kk.anchor && this.head == kk.head && this.goalColumn == kk.goalColumn && (!ek || !this.empty || this.assoc == kk.assoc)
      }
      toJSON() {
        return {
          anchor: this.anchor,
          head: this.head
        }
      }
      static fromJSON(kk) {
        if (!kk || "number" != typeof kk.anchor || "number" != typeof kk.head) throw new RangeError("Invalid JSON representation for SelectionRange");
        return Xk.range(kk.anchor, kk.head)
      }
      static create(kk, ek, ik) {
        return new tk(kk, ek, ik)
      }
    }
    class Xk {
      constructor(kk, ek) {
        this.lw = kk, this.mainIndex = ek
      }
      map(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return kk.empty ? this : Xk.create(this.lw.map((ik => ik.map(kk, ek))), this.mainIndex)
      }
      eq(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.lw.length != kk.lw.length || this.mainIndex != kk.mainIndex) return !1;
        for (let ik = 0; ik < this.lw.length; ik++)
          if (!this.lw[ik].eq(kk.lw[ik], ek)) return !1;
        return !0
      }
      get main() {
        return this.lw[this.mainIndex]
      }
      asSingle() {
        return 1 == this.lw.length ? this : new Xk([this.main], 0)
      }
      addRange(kk) {
        let ek = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return Xk.create([kk].concat(this.lw), ek ? 0 : this.mainIndex + 1)
      }
      replaceRange(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.mainIndex,
          ik = this.lw.slice();
        return ik[ek] = kk, Xk.create(ik, this.mainIndex)
      }
      toJSON() {
        return {
          lw: this.lw.map((kk => kk.toJSON())),
          main: this.mainIndex
        }
      }
      static fromJSON(kk) {
        if (!kk || !Array.isArray(kk.lw) || "number" != typeof kk.main || kk.main >= kk.lw.length) throw new RangeError("Invalid JSON representation for EditorSelection");
        return new Xk(kk.lw.map((kk => tk.fromJSON(kk))), kk.main)
      }
      static single(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kk;
        return new Xk([Xk.range(kk, ek)], 0)
      }
      static create(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (0 == kk.length) throw new RangeError("A selection needs at least one range");
        for (let ik = 0, Dk = 0; Dk < kk.length; Dk++) {
          let fk = kk[Dk];
          if (fk.empty ? fk.from <= ik : fk.from < ik) return Xk.normalized(kk.slice(), ek);
          ik = fk.to
        }
        return new Xk(kk, ek)
      }
      static cursor(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ik = arguments.length > 2 ? arguments[2] : void 0,
          Dk = arguments.length > 3 ? arguments[3] : void 0;
        return tk.create(kk, kk, (0 == ek ? 0 : ek < 0 ? 8 : 16) | (null == ik ? 7 : Math.min(6, ik)) | (null !== Dk && void 0 !== Dk ? Dk : 16777215) << 6)
      }
      static range(kk, ek, ik, Dk, fk) {
        let Sk = (null !== ik && void 0 !== ik ? ik : 16777215) << 6 | (null == Dk ? 7 : Math.min(6, Dk));
        return fk || kk == ek || (fk = ek < kk ? 1 : -1), ek < kk ? tk.create(ek, kk, 48 | Sk) : tk.create(kk, ek, (fk ? fk < 0 ? 8 : 16 : 0) | Sk)
      }
      static normalized(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ik = kk[ek];
        kk.sort(((kk, ek) => kk.from - ek.from)), ek = kk.indexOf(ik);
        for (let Dk = 1; Dk < kk.length; Dk++) {
          let ik = kk[Dk],
            fk = kk[Dk - 1];
          if (ik.empty ? ik.from <= fk.to : ik.from < fk.to) {
            let Sk = fk.from,
              bk = Math.max(ik.to, fk.to);
            Dk <= ek && ek--, kk.splice(--Dk, 2, ik.anchor > ik.head ? Xk.range(bk, Sk) : Xk.range(Sk, bk))
          }
        }
        return new Xk(kk, ek)
      }
    }

    function Bk(kk, ek) {
      for (let ik of kk.lw)
        if (ik.to > ek) throw new RangeError("Selection points outside of document")
    }
    let ck = 0;
    class Tk {
      constructor(kk, ek, ik, Dk, fk) {
        this.combine = kk, this.compareInput = ek, this.compare = ik, this.isStatic = Dk, this.id = ck++, this.default = kk([]), this.extensions = "function" == typeof fk ? fk(this) : fk
      }
      get reader() {
        return this
      }
      static define() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return new Tk(kk.combine || (kk => kk), kk.compareInput || ((kk, ek) => kk === ek), kk.compare || (kk.combine ? (kk, ek) => kk === ek : Zk), !!kk.static, kk.enables)
      }
      of(kk) {
        return new Ok([], this, 0, kk)
      }
      compute(kk, ek) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new Ok(kk, this, 1, ek)
      }
      computeN(kk, ek) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new Ok(kk, this, 2, ek)
      }
      from(kk, ek) {
        return ek || (ek = kk => kk), this.compute([kk], (ik => ek(ik.field(kk))))
      }
    }

    function Zk(kk, ek) {
      return kk == ek || kk.length == ek.length && kk.every(((kk, ik) => kk === ek[ik]))
    }
    class Ok {
      constructor(kk, ek, ik, Dk) {
        this.dependencies = kk, this.facet = ek, this.type = ik, this.value = Dk, this.id = ck++
      }
      dynamicSlot(kk) {
        var ek;
        let ik = this.value,
          Dk = this.facet.compareInput,
          fk = this.id,
          Sk = kk[fk] >> 1,
          bk = 2 == this.type,
          rk = !1,
          Pk = !1,
          mk = [];
        for (let Mk of this.dependencies) "doc" == Mk ? rk = !0 : "selection" == Mk ? Pk = !0 : 0 == (1 & (null !== (ek = kk[Mk.id]) && void 0 !== ek ? ek : 1)) && mk.push(kk[Mk.id]);
        return {
          create: kk => (kk.values[Sk] = ik(kk), 1),
          update(kk, ek) {
            if (rk && ek.docChanged || Pk && (ek.docChanged || ek.selection) || Gk(kk, mk)) {
              let ek = ik(kk);
              if (bk ? !gk(ek, kk.values[Sk], Dk) : !Dk(ek, kk.values[Sk])) return kk.values[Sk] = ek, 1
            }
            return 0
          },
          reconfigure: (kk, ek) => {
            let rk, Pk = ek.config.address[fk];
            if (null != Pk) {
              let fk = Ke(ek, Pk);
              if (this.dependencies.every((ik => ik instanceof Tk ? ek.facet(ik) === kk.facet(ik) : !(ik instanceof Jk) || ek.field(ik, !1) == kk.field(ik, !1))) || (bk ? gk(rk = ik(kk), fk, Dk) : Dk(rk = ik(kk), fk))) return kk.values[Sk] = fk, 0
            } else rk = ik(kk);
            return kk.values[Sk] = rk, 1
          }
        }
      }
    }

    function gk(kk, ek, ik) {
      if (kk.length != ek.length) return !1;
      for (let Dk = 0; Dk < kk.length; Dk++)
        if (!ik(kk[Dk], ek[Dk])) return !1;
      return !0
    }

    function Gk(kk, ek) {
      let ik = !1;
      for (let Dk of ek) 1 & Me(kk, Dk) && (ik = !0);
      return ik
    }

    function Nk(kk, ek, ik) {
      let Dk = ik.map((ek => kk[ek.id])),
        fk = ik.map((kk => kk.type)),
        Sk = Dk.filter((kk => !(1 & kk))),
        bk = kk[ek.id] >> 1;

      function rk(kk) {
        let ik = [];
        for (let ek = 0; ek < Dk.length; ek++) {
          let Sk = Ke(kk, Dk[ek]);
          if (2 == fk[ek])
            for (let kk of Sk) ik.push(kk);
          else ik.push(Sk)
        }
        return ek.combine(ik)
      }
      return {
        create(kk) {
          for (let ek of Dk) Me(kk, ek);
          return kk.values[bk] = rk(kk), 1
        },
        update(kk, ik) {
          if (!Gk(kk, Sk)) return 0;
          let Dk = rk(kk);
          return ek.compare(Dk, kk.values[bk]) ? 0 : (kk.values[bk] = Dk, 1)
        },
        reconfigure(kk, fk) {
          let Sk = Gk(kk, Dk),
            Pk = fk.config.facets[ek.id],
            mk = fk.facet(ek);
          if (Pk && !Sk && Zk(ik, Pk)) return kk.values[bk] = mk, 0;
          let Mk = rk(kk);
          return ek.compare(Mk, mk) ? (kk.values[bk] = mk, 0) : (kk.values[bk] = Mk, 1)
        }
      }
    }
    const Rk = Tk.define({
      static: !0
    });
    class Jk {
      constructor(kk, ek, ik, Dk, fk) {
        this.id = kk, this.createF = ek, this.updateF = ik, this.compareF = Dk, this.spec = fk, this.provides = void 0
      }
      static define(kk) {
        let ek = new Jk(ck++, kk.create, kk.update, kk.compare || ((kk, ek) => kk === ek), kk);
        return kk.provide && (ek.provides = kk.provide(ek)), ek
      }
      create(kk) {
        let ek = kk.facet(Rk).find((kk => kk.field == this));
        return ((null === ek || void 0 === ek ? void 0 : ek.create) || this.createF)(kk)
      }
      slot(kk) {
        let ek = kk[this.id] >> 1;
        return {
          create: kk => (kk.values[ek] = this.create(kk), 1),
          update: (kk, ik) => {
            let Dk = kk.values[ek],
              fk = this.updateF(Dk, ik);
            return this.compareF(Dk, fk) ? 0 : (kk.values[ek] = fk, 1)
          },
          reconfigure: (kk, ik) => {
            let Dk, fk = kk.facet(Rk),
              Sk = ik.facet(Rk);
            return (Dk = fk.find((kk => kk.field == this))) && Dk != Sk.find((kk => kk.field == this)) ? (kk.values[ek] = Dk.create(kk), 1) : null != ik.config.address[this.id] ? (kk.values[ek] = ik.field(this), 0) : (kk.values[ek] = this.create(kk), 1)
          }
        }
      }
      init(kk) {
        return [this, Rk.of({
          field: this,
          create: kk
        })]
      }
      get extension() {
        return this
      }
    }
    const ke = 4,
      ee = 3,
      ie = 2,
      De = 1;

    function fe(kk) {
      return ek => new be(ek, kk)
    }
    const Se = {
      highest: fe(0),
      high: fe(De),
      default: fe(ie),
      low: fe(ee),
      lowest: fe(ke)
    };
    class be {
      constructor(kk, ek) {
        this.inner = kk, this.prec = ek
      }
    }
    class re {
      of(kk) {
        return new Pe(this, kk)
      }
      reconfigure(kk) {
        return re.reconfigure.of({
          compartment: this,
          extension: kk
        })
      }
      get(kk) {
        return kk.config.compartments.get(this)
      }
    }
    class Pe {
      constructor(kk, ek) {
        this.compartment = kk, this.inner = ek
      }
    }
    class me {
      constructor(kk, ek, ik, Dk, fk, Sk) {
        for (this.base = kk, this.compartments = ek, this.dynamicSlots = ik, this.address = Dk, this.staticValues = fk, this.facets = Sk, this.statusTemplate = []; this.statusTemplate.length < ik.length;) this.statusTemplate.push(0)
      }
      staticFacet(kk) {
        let ek = this.address[kk.id];
        return null == ek ? kk.default : this.staticValues[ek >> 1]
      }
      static resolve(kk, ek, ik) {
        let Dk = [],
          fk = Object.create(null),
          Sk = new Map;
        for (let Kk of function(kk, ek, ik) {
            let Dk = [
                [],
                [],
                [],
                [],
                []
              ],
              fk = new Map;

            function Sk(kk, bk) {
              let rk = fk.get(kk);
              if (null != rk) {
                if (rk <= bk) return;
                let ek = Dk[rk].indexOf(kk);
                ek > -1 && Dk[rk].splice(ek, 1), kk instanceof Pe && ik.delete(kk.compartment)
              }
              if (fk.set(kk, bk), Array.isArray(kk))
                for (let ek of kk) Sk(ek, bk);
              else if (kk instanceof Pe) {
                if (ik.has(kk.compartment)) throw new RangeError("Duplicate use of compartment in extensions");
                let Dk = ek.get(kk.compartment) || kk.inner;
                ik.set(kk.compartment, Dk), Sk(Dk, bk)
              } else if (kk instanceof be) Sk(kk.inner, kk.prec);
              else if (kk instanceof Jk) Dk[bk].push(kk), kk.provides && Sk(kk.provides, bk);
              else if (kk instanceof Ok) Dk[bk].push(kk), kk.facet.extensions && Sk(kk.facet.extensions, ie);
              else {
                let ek = kk.extension;
                if (!ek) throw new Error(`Unrecognized extension value in extension set (${kk}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
                Sk(ek, bk)
              }
            }
            return Sk(kk, ie), Dk.reduce(((kk, ek) => kk.concat(ek)))
          }(kk, ek, Sk)) Kk instanceof Jk ? Dk.push(Kk) : (fk[Kk.facet.id] || (fk[Kk.facet.id] = [])).push(Kk);
        let bk = Object.create(null),
          rk = [],
          Pk = [];
        for (let Kk of Dk) bk[Kk.id] = Pk.length << 1, Pk.push((kk => Kk.slot(kk)));
        let mk = null === ik || void 0 === ik ? void 0 : ik.config.facets;
        for (let Kk in fk) {
          let kk = fk[Kk],
            ek = kk[0].facet,
            Dk = mk && mk[Kk] || [];
          if (kk.every((kk => 0 == kk.type)))
            if (bk[ek.id] = rk.length << 1 | 1, Zk(Dk, kk)) rk.push(ik.facet(ek));
            else {
              let Dk = ek.combine(kk.map((kk => kk.value)));
              rk.push(ik && ek.compare(Dk, ik.facet(ek)) ? ik.facet(ek) : Dk)
            }
          else {
            for (let ek of kk) 0 == ek.type ? (bk[ek.id] = rk.length << 1 | 1, rk.push(ek.value)) : (bk[ek.id] = Pk.length << 1, Pk.push((kk => ek.dynamicSlot(kk))));
            bk[ek.id] = Pk.length << 1, Pk.push((ik => Nk(ik, ek, kk)))
          }
        }
        let Mk = Pk.map((kk => kk(bk)));
        return new me(kk, Sk, Mk, bk, rk, fk)
      }
    }

    function Me(kk, ek) {
      if (1 & ek) return 2;
      let ik = ek >> 1,
        Dk = kk.status[ik];
      if (4 == Dk) throw new Error("Cyclic dependency between fields and/or facets");
      if (2 & Dk) return Dk;
      kk.status[ik] = 4;
      let fk = kk.computeSlot(kk, kk.config.dynamicSlots[ik]);
      return kk.status[ik] = 2 | fk
    }

    function Ke(kk, ek) {
      return 1 & ek ? kk.config.staticValues[ek >> 1] : kk.values[ek >> 1]
    }
    const xe = Tk.define(),
      ne = Tk.define({
        combine: kk => kk.some((kk => kk)),
        static: !0
      }),
      Ue = Tk.define({
        combine: kk => kk.length ? kk[0] : void 0,
        static: !0
      }),
      He = Tk.define(),
      we = Tk.define(),
      le = Tk.define(),
      pe = Tk.define({
        combine: kk => !!kk.length && kk[0]
      });
    class ye {
      constructor(kk, ek) {
        this.type = kk, this.value = ek
      }
      static define() {
        return new Ye
      }
    }
    class Ye {
      of(kk) {
        return new ye(this, kk)
      }
    }
    class Le {
      constructor(kk) {
        this.map = kk
      }
      of(kk) {
        return new Ce(this, kk)
      }
    }
    class Ce {
      constructor(kk, ek) {
        this.type = kk, this.value = ek
      }
      map(kk) {
        let ek = this.type.map(this.value, kk);
        return void 0 === ek ? void 0 : ek == this.value ? this : new Ce(this.type, ek)
      }
      is(kk) {
        return this.type == kk
      }
      static define() {
        return new Le((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).map || (kk => kk))
      }
      static mapEffects(kk, ek) {
        if (!kk.length) return kk;
        let ik = [];
        for (let Dk of kk) {
          let kk = Dk.map(ek);
          kk && ik.push(kk)
        }
        return ik
      }
    }
    Ce.reconfigure = Ce.define(), Ce.appendConfig = Ce.define();
    class Ae {
      constructor(kk, ek, ik, Dk, fk, Sk) {
        this.startState = kk, this.changes = ek, this.selection = ik, this.effects = Dk, this.annotations = fk, this.scrollIntoView = Sk, this._doc = null, this._state = null, ik && Bk(ik, ek.newLength), fk.some((kk => kk.type == Ae.time)) || (this.annotations = fk.concat(Ae.time.of(Date.now())))
      }
      static create(kk, ek, ik, Dk, fk, Sk) {
        return new Ae(kk, ek, ik, Dk, fk, Sk)
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
      annotation(kk) {
        for (let ek of this.annotations)
          if (ek.type == kk) return ek.value
      }
      get docChanged() {
        return !this.changes.empty
      }
      get reconfigured() {
        return this.startState.config != this.state.config
      }
      isUserEvent(kk) {
        let ek = this.annotation(Ae.userEvent);
        return !(!ek || !(ek == kk || ek.length > kk.length && ek.slice(0, kk.length) == kk && "." == ek[kk.length]))
      }
    }

    function je(kk, ek) {
      let ik = [];
      for (let Dk = 0, fk = 0;;) {
        let Sk, bk;
        if (Dk < kk.length && (fk == ek.length || ek[fk] >= kk[Dk])) Sk = kk[Dk++], bk = kk[Dk++];
        else {
          if (!(fk < ek.length)) return ik;
          Sk = ek[fk++], bk = ek[fk++]
        }!ik.length || ik[ik.length - 1] < Sk ? ik.push(Sk, bk) : ik[ik.length - 1] < bk && (ik[ik.length - 1] = bk)
      }
    }

    function se(kk, ek, ik) {
      var Dk;
      let fk, Sk, bk;
      return ik ? (fk = ek.changes, Sk = zk.empty(ek.changes.length), bk = kk.changes.compose(ek.changes)) : (fk = ek.changes.map(kk.changes), Sk = kk.changes.mapDesc(ek.changes, !0), bk = kk.changes.compose(fk)), {
        changes: bk,
        selection: ek.selection ? ek.selection.map(Sk) : null === (Dk = kk.selection) || void 0 === Dk ? void 0 : Dk.map(fk),
        effects: Ce.mapEffects(kk.effects, fk).concat(Ce.mapEffects(ek.effects, Sk)),
        annotations: kk.annotations.length ? kk.annotations.concat(ek.annotations) : ek.annotations,
        scrollIntoView: kk.scrollIntoView || ek.scrollIntoView
      }
    }

    function de(kk, ek, ik) {
      let Dk = ek.selection,
        fk = ue(ek.annotations);
      return ek.userEvent && (fk = fk.concat(Ae.userEvent.of(ek.userEvent))), {
        changes: ek.changes instanceof zk ? ek.changes : zk.of(ek.changes || [], ik, kk.facet(Ue)),
        selection: Dk && (Dk instanceof Xk ? Dk : Xk.single(Dk.anchor, Dk.head)),
        effects: ue(ek.effects),
        annotations: fk,
        scrollIntoView: !!ek.scrollIntoView
      }
    }

    function Ve(kk, ek, ik) {
      let Dk = de(kk, ek.length ? ek[0] : {}, kk.doc.length);
      ek.length && !1 === ek[0].filter && (ik = !1);
      for (let Sk = 1; Sk < ek.length; Sk++) {
        !1 === ek[Sk].filter && (ik = !1);
        let fk = !!ek[Sk].sequential;
        Dk = se(Dk, de(kk, ek[Sk], fk ? Dk.changes.newLength : kk.doc.length), fk)
      }
      let fk = Ae.create(kk, Dk.changes, Dk.selection, Dk.effects, Dk.annotations, Dk.scrollIntoView);
      return function(kk) {
        let ek = kk.startState,
          ik = ek.facet(le),
          Dk = kk;
        for (let fk = ik.length - 1; fk >= 0; fk--) {
          let Sk = ik[fk](kk);
          Sk && Object.keys(Sk).length && (Dk = se(Dk, de(ek, Sk, kk.changes.newLength), !0))
        }
        return Dk == kk ? kk : Ae.create(ek, kk.changes, kk.selection, Dk.effects, Dk.annotations, Dk.scrollIntoView)
      }(ik ? function(kk) {
        let ek = kk.startState,
          ik = !0;
        for (let fk of ek.facet(He)) {
          let ek = fk(kk);
          if (!1 === ek) {
            ik = !1;
            break
          }
          Array.isArray(ek) && (ik = !0 === ik ? ek : je(ik, ek))
        }
        if (!0 !== ik) {
          let Dk, fk;
          if (!1 === ik) fk = kk.changes.invertedDesc, Dk = zk.empty(ek.doc.length);
          else {
            let ek = kk.changes.filter(ik);
            Dk = ek.changes, fk = ek.filtered.mapDesc(ek.changes).invertedDesc
          }
          kk = Ae.create(ek, Dk, kk.selection && kk.selection.map(fk), Ce.mapEffects(kk.effects, fk), kk.annotations, kk.scrollIntoView)
        }
        let Dk = ek.facet(we);
        for (let fk = Dk.length - 1; fk >= 0; fk--) {
          let ik = Dk[fk](kk);
          kk = ik instanceof Ae ? ik : Array.isArray(ik) && 1 == ik.length && ik[0] instanceof Ae ? ik[0] : Ve(ek, ue(ik), !1)
        }
        return kk
      }(fk) : fk)
    }
    Ae.time = ye.define(), Ae.userEvent = ye.define(), Ae.addToHistory = ye.define(), Ae.remote = ye.define();
    const Fe = [];

    function ue(kk) {
      return null == kk ? Fe : Array.isArray(kk) ? kk : [kk]
    }
    var qe = function(kk) {
      return kk[kk.Word = 0] = "Word", kk[kk.Space = 1] = "Space", kk[kk.Other = 2] = "Other", kk
    }(qe || (qe = {}));
    const Ie = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
    let ze;
    try {
      ze = new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u")
    } catch (Di) {}

    function Qe(kk) {
      return ek => {
        if (!/\S/.test(ek)) return qe.Space;
        if (function(kk) {
            if (ze) return ze.test(kk);
            for (let ek = 0; ek < kk.length; ek++) {
              let ik = kk[ek];
              if (/\w/.test(ik) || ik > "\x80" && (ik.toUpperCase() != ik.toLowerCase() || Ie.test(ik))) return !0
            }
            return !1
          }(ek)) return qe.Word;
        for (let ik = 0; ik < kk.length; ik++)
          if (ek.indexOf(kk[ik]) > -1) return qe.Word;
        return qe.Other
      }
    }
    class ve {
      constructor(kk, ek, ik, Dk, fk, Sk) {
        this.config = kk, this.doc = ek, this.selection = ik, this.values = Dk, this.status = kk.statusTemplate.slice(), this.computeSlot = fk, Sk && (Sk._state = this);
        for (let bk = 0; bk < this.config.dynamicSlots.length; bk++) Me(this, bk << 1);
        this.computeSlot = null
      }
      field(kk) {
        let ek = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          ik = this.config.address[kk.id];
        if (null != ik) return Me(this, ik), Ke(this, ik);
        if (ek) throw new RangeError("Field is not present in this state")
      }
      update() {
        for (var kk = arguments.length, ek = new Array(kk), ik = 0; ik < kk; ik++) ek[ik] = arguments[ik];
        return Ve(this, ek, !0)
      }
      applyTransaction(kk) {
        let ek, ik = this.config,
          {
            base: Dk,
            compartments: fk
          } = ik;
        for (let bk of kk.effects) bk.is(re.reconfigure) ? (ik && (fk = new Map, ik.compartments.forEach(((kk, ek) => fk.set(ek, kk))), ik = null), fk.set(bk.value.compartment, bk.value.extension)) : bk.is(Ce.reconfigure) ? (ik = null, Dk = bk.value) : bk.is(Ce.appendConfig) && (ik = null, Dk = ue(Dk).concat(bk.value));
        if (ik) ek = kk.startState.values.slice();
        else {
          ik = me.resolve(Dk, fk, this), ek = new ve(ik, this.doc, this.selection, ik.dynamicSlots.map((() => null)), ((kk, ek) => ek.reconfigure(kk, this)), null).values
        }
        let Sk = kk.startState.facet(ne) ? kk.newSelection : kk.newSelection.asSingle();
        new ve(ik, kk.newDoc, Sk, ek, ((ek, ik) => ik.update(ek, kk)), kk)
      }
      replaceSelection(kk) {
        return "string" == typeof kk && (kk = this.toText(kk)), this.changeByRange((ek => ({
          changes: {
            from: ek.from,
            to: ek.to,
            insert: kk
          },
          range: Xk.cursor(ek.from + kk.length)
        })))
      }
      changeByRange(kk) {
        let ek = this.selection,
          ik = kk(ek.lw[0]),
          Dk = this.changes(ik.changes),
          fk = [ik.range],
          Sk = ue(ik.effects);
        for (let bk = 1; bk < ek.lw.length; bk++) {
          let ik = kk(ek.lw[bk]),
            rk = this.changes(ik.changes),
            Pk = rk.map(Dk);
          for (let kk = 0; kk < bk; kk++) fk[kk] = fk[kk].map(Pk);
          let mk = Dk.mapDesc(rk, !0);
          fk.push(ik.range.map(mk)), Dk = Dk.compose(Pk), Sk = Ce.mapEffects(Sk, Pk).concat(Ce.mapEffects(ue(ik.effects), mk))
        }
        return {
          changes: Dk,
          selection: Xk.create(fk, ek.mainIndex),
          effects: Sk
        }
      }
      changes() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return kk instanceof zk ? kk : zk.of(kk, this.doc.length, this.facet(ve.lineSeparator))
      }
      toText(kk) {
        return Hk.of(kk.split(this.facet(ve.lineSeparator) || uk))
      }
      sliceDoc() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.doc.length;
        return this.doc.sliceString(kk, ek, this.lineBreak)
      }
      facet(kk) {
        let ek = this.config.address[kk.id];
        return null == ek ? kk.default : (Me(this, ek), Ke(this, ek))
      }
      toJSON(kk) {
        let ek = {
          doc: this.sliceDoc(),
          selection: this.selection.toJSON()
        };
        if (kk)
          for (let ik in kk) {
            let Dk = kk[ik];
            Dk instanceof Jk && null != this.config.address[Dk.id] && (ek[ik] = Dk.spec.toJSON(this.field(kk[ik]), this))
          }
        return ek
      }
      static fromJSON(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          ik = arguments.length > 2 ? arguments[2] : void 0;
        if (!kk || "string" != typeof kk.doc) throw new RangeError("Invalid JSON representation for EditorState");
        let Dk = [];
        if (ik)
          for (let fk in ik)
            if (Object.prototype.hasOwnProperty.call(kk, fk)) {
              let ek = ik[fk],
                Sk = kk[fk];
              Dk.push(ek.init((kk => ek.spec.fromJSON(Sk, kk))))
            } return ve.create({
          doc: kk.doc,
          selection: Xk.fromJSON(kk.selection),
          extensions: ek.extensions ? Dk.concat([ek.extensions]) : Dk
        })
      }
      static create() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          ek = me.resolve(kk.extensions || [], new Map),
          ik = kk.doc instanceof Hk ? kk.doc : Hk.of((kk.doc || "").split(ek.staticFacet(ve.lineSeparator) || uk)),
          Dk = kk.selection ? kk.selection instanceof Xk ? kk.selection : Xk.single(kk.selection.anchor, kk.selection.head) : Xk.single(0);
        return Bk(Dk, ik.length), ek.staticFacet(ne) || (Dk = Dk.asSingle()), new ve(ek, ik, Dk, ek.dynamicSlots.map((() => null)), ((kk, ek) => ek.create(kk)), null)
      }
      get tabSize() {
        return this.facet(ve.tabSize)
      }
      get lineBreak() {
        return this.facet(ve.lineSeparator) || "\n"
      }
      get readOnly() {
        return this.facet(pe)
      }
      phrase(kk) {
        for (var ek = arguments.length, ik = new Array(ek > 1 ? ek - 1 : 0), Dk = 1; Dk < ek; Dk++) ik[Dk - 1] = arguments[Dk];
        for (let fk of this.facet(ve.phrases))
          if (Object.prototype.hasOwnProperty.call(fk, kk)) {
            kk = fk[kk];
            break
          } return ik.length && (kk = kk.replace(/\$(\$|\d*)/g, ((kk, ek) => {
          if ("$" == ek) return "$";
          let Dk = +(ek || 1);
          return !Dk || Dk > ik.length ? kk : ik[Dk - 1]
        }))), kk
      }
      languageDataAt(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          Dk = [];
        for (let fk of this.facet(xe))
          for (let Sk of fk(this, ek, ik)) Object.prototype.hasOwnProperty.call(Sk, kk) && Dk.push(Sk[kk]);
        return Dk
      }
      charCategorizer(kk) {
        let ek = this.languageDataAt("wordChars", kk);
        return Qe(ek.length ? ek[0] : "")
      }
      wordAt(kk) {
        let {
          text: ek,
          from: ik,
          length: Dk
        } = this.doc.lineAt(kk), fk = this.charCategorizer(kk), Sk = kk - ik, bk = kk - ik;
        for (; Sk > 0;) {
          let kk = sk(ek, Sk, !1);
          if (fk(ek.slice(kk, Sk)) != qe.Word) break;
          Sk = kk
        }
        for (; bk < Dk;) {
          let kk = sk(ek, bk);
          if (fk(ek.slice(bk, kk)) != qe.Word) break;
          bk = kk
        }
        return Sk == bk ? null : Xk.range(Sk + ik, bk + ik)
      }
    }

    function Ee(kk, ek) {
      let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        Dk = {};
      for (let fk of kk)
        for (let kk of Object.keys(fk)) {
          let ek = fk[kk],
            Sk = Dk[kk];
          if (void 0 === Sk) Dk[kk] = ek;
          else if (Sk === ek || void 0 === ek);
          else {
            if (!Object.hasOwnProperty.call(ik, kk)) throw new Error("Config merge conflict for field " + kk);
            Dk[kk] = ik[kk](Sk, ek)
          }
        }
      for (let fk in ek) void 0 === Dk[fk] && (Dk[fk] = ek[fk]);
      return Dk
    }
    ve.allowMultipleSelections = ne, ve.tabSize = Tk.define({
      combine: kk => kk.length ? kk[0] : 4
    }), ve.lineSeparator = Ue, ve.readOnly = pe, ve.phrases = Tk.define({
      compare(kk, ek) {
        let ik = Object.keys(kk),
          Dk = Object.keys(ek);
        return ik.length == Dk.length && ik.every((ik => kk[ik] == ek[ik]))
      }
    }), ve.languageData = xe, ve.changeFilter = He, ve.transactionFilter = we, ve.transactionExtender = le, re.reconfigure = Ce.define();
    class he {
      eq(kk) {
        return this == kk
      }
      range(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kk;
        return We.create(kk, ek, this)
      }
    }

    function ae(kk, ek) {
      return kk == ek || kk.constructor == ek.constructor && kk.eq(ek)
    }
    he.prototype.startSide = he.prototype.endSide = 0, he.prototype.point = !1, he.prototype.mapMode = qk.TrackDel;
    class We {
      constructor(kk, ek, ik) {
        this.from = kk, this.to = ek, this.value = ik
      }
      static create(kk, ek, ik) {
        return new We(kk, ek, ik)
      }
    }

    function te(kk, ek) {
      return kk.from - ek.from || kk.value.startSide - ek.value.startSide
    }
    class Xe {
      constructor(kk, ek, ik, Dk) {
        this.from = kk, this.to = ek, this.value = ik, this.Rik = Dk
      }
      get length() {
        return this.to[this.to.length - 1]
      }
      findIndex(kk, ek, ik) {
        let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          fk = ik ? this.to : this.from;
        for (let Sk = Dk, bk = fk.length;;) {
          if (Sk == bk) return Sk;
          let Dk = Sk + bk >> 1,
            rk = fk[Dk] - kk || (ik ? this.value[Dk].endSide : this.value[Dk].startSide) - ek;
          if (Dk == Sk) return rk >= 0 ? Sk : bk;
          rk >= 0 ? bk = Dk : Sk = Dk + 1
        }
      }
      between(kk, ek, ik, Dk) {
        for (let fk = this.findIndex(ek, -1e9, !0), Sk = this.findIndex(ik, 1e9, !1, fk); fk < Sk; fk++)
          if (!1 === Dk(this.from[fk] + kk, this.to[fk] + kk, this.value[fk])) return !1
      }
      map(kk, ek) {
        let ik = [],
          Dk = [],
          fk = [],
          Sk = -1,
          bk = -1;
        for (let rk = 0; rk < this.value.length; rk++) {
          let Pk, mk, Mk = this.value[rk],
            Kk = this.from[rk] + kk,
            xk = this.to[rk] + kk;
          if (Kk == xk) {
            let kk = ek.mapPos(Kk, Mk.startSide, Mk.mapMode);
            if (null == kk) continue;
            if (Pk = mk = kk, Mk.startSide != Mk.endSide && (mk = ek.mapPos(Kk, Mk.endSide), mk < Pk)) continue
          } else if (Pk = ek.mapPos(Kk, Mk.startSide), mk = ek.mapPos(xk, Mk.endSide), Pk > mk || Pk == mk && Mk.startSide > 0 && Mk.endSide <= 0) continue;
          (mk - Pk || Mk.endSide - Mk.startSide) < 0 || (Sk < 0 && (Sk = Pk), Mk.point && (bk = Math.max(bk, mk - Pk)), ik.push(Mk), Dk.push(Pk - Sk), fk.push(mk - Sk))
        }
        return {
          mapped: ik.length ? new Xe(Dk, fk, ik, bk) : null,
          pos: Sk
        }
      }
    }
    class Be {
      constructor(kk, ek, ik, Dk) {
        this.chunkPos = kk, this.chunk = ek, this.nextLayer = ik, this.Rik = Dk
      }
      static create(kk, ek, ik, Dk) {
        return new Be(kk, ek, ik, Dk)
      }
      get length() {
        let kk = this.chunk.length - 1;
        return kk < 0 ? 0 : Math.max(this.chunkEnd(kk), this.nextLayer.length)
      }
      get size() {
        if (this.uU) return 0;
        let kk = this.nextLayer.size;
        for (let ek of this.chunk) kk += ek.value.length;
        return kk
      }
      chunkEnd(kk) {
        return this.chunkPos[kk] + this.chunk[kk].length
      }
      update(kk) {
        let {
          add: ek = [],
          sort: ik = !1,
          filterFrom: Dk = 0,
          filterTo: fk = this.length
        } = kk, Sk = kk.filter;
        if (0 == ek.length && !Sk) return this;
        if (ik && (ek = ek.slice().sort(te)), this.uU) return ek.length ? Be.of(ek) : this;
        let bk = new oe(this, null, -1).goto(0),
          rk = 0,
          Pk = [],
          mk = new ce;
        for (; bk.value || rk < ek.length;)
          if (rk < ek.length && (bk.from - ek[rk].from || bk.startSide - ek[rk].value.startSide) >= 0) {
            let kk = ek[rk++];
            mk.addInner(kk.from, kk.to, kk.value) || Pk.push(kk)
          } else 1 == bk.rangeIndex && bk.chunkIndex < this.chunk.length && (rk == ek.length || this.chunkEnd(bk.chunkIndex) < ek[rk].from) && (!Sk || Dk > this.chunkEnd(bk.chunkIndex) || fk < this.chunkPos[bk.chunkIndex]) && mk.addChunk(this.chunkPos[bk.chunkIndex], this.chunk[bk.chunkIndex]) ? bk.nextChunk() : ((!Sk || Dk > bk.to || fk < bk.from || Sk(bk.from, bk.to, bk.value)) && (mk.addInner(bk.from, bk.to, bk.value) || Pk.push(We.create(bk.from, bk.to, bk.value))), bk.next());
        return mk.finishInner(this.nextLayer.uU && !Pk.length ? Be.empty : this.nextLayer.update({
          add: Pk,
          filter: Sk,
          filterFrom: Dk,
          filterTo: fk
        }))
      }
      map(kk) {
        if (kk.empty || this.uU) return this;
        let ek = [],
          ik = [],
          Dk = -1;
        for (let Sk = 0; Sk < this.chunk.length; Sk++) {
          let fk = this.chunkPos[Sk],
            bk = this.chunk[Sk],
            rk = kk.touchesRange(fk, fk + bk.length);
          if (!1 === rk) Dk = Math.max(Dk, bk.Rik), ek.push(bk), ik.push(kk.mapPos(fk));
          else if (!0 === rk) {
            let {
              mapped: Sk,
              pos: rk
            } = bk.map(fk, kk);
            Sk && (Dk = Math.max(Dk, Sk.Rik), ek.push(Sk), ik.push(rk))
          }
        }
        let fk = this.nextLayer.map(kk);
        return 0 == ek.length ? fk : new Be(ik, ek, fk || Be.empty, Dk)
      }
      between(kk, ek, ik) {
        if (!this.uU) {
          for (let Dk = 0; Dk < this.chunk.length; Dk++) {
            let fk = this.chunkPos[Dk],
              Sk = this.chunk[Dk];
            if (ek >= fk && kk <= fk + Sk.length && !1 === Sk.between(fk, kk - fk, ek - fk, ik)) return
          }
          this.nextLayer.between(kk, ek, ik)
        }
      }
      iter() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return Ze.from([this]).goto(kk)
      }
      get uU() {
        return this.nextLayer == this
      }
      static iter(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Ze.from(kk).goto(ek)
      }
      static compare(kk, ek, ik, Dk) {
        let fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1,
          Sk = kk.filter((kk => kk.Rik > 0 || !kk.uU && kk.Rik >= fk)),
          bk = ek.filter((kk => kk.Rik > 0 || !kk.uU && kk.Rik >= fk)),
          rk = Te(Sk, bk, ik),
          Pk = new ge(Sk, rk, fk),
          mk = new ge(bk, rk, fk);
        ik.iterGaps(((kk, ek, ik) => Ge(Pk, kk, mk, ek, ik, Dk))), ik.empty && 0 == ik.length && Ge(Pk, 0, mk, 0, 0, Dk)
      }
      static eq(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Dk = arguments.length > 3 ? arguments[3] : void 0;
        null == Dk && (Dk = 999999999);
        let fk = kk.filter((kk => !kk.uU && ek.indexOf(kk) < 0)),
          Sk = ek.filter((ek => !ek.uU && kk.indexOf(ek) < 0));
        if (fk.length != Sk.length) return !1;
        if (!fk.length) return !0;
        let bk = Te(fk, Sk),
          rk = new ge(fk, bk, 0).goto(ik),
          Pk = new ge(Sk, bk, 0).goto(ik);
        for (;;) {
          if (rk.to != Pk.to || !Ne(rk.active, Pk.active) || rk.point && (!Pk.point || !ae(rk.point, Pk.point))) return !1;
          if (rk.to > Dk) return !0;
          rk.next(), Pk.next()
        }
      }
      static spans(kk, ek, ik, Dk) {
        let fk = new ge(kk, null, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1).goto(ek),
          Sk = ek,
          bk = fk.openStart;
        for (;;) {
          let kk = Math.min(fk.to, ik);
          if (fk.point) {
            let ik = fk.activeForPoint(fk.to),
              rk = fk.pointFrom < ek ? ik.length + 1 : fk.point.startSide < 0 ? ik.length : Math.min(ik.length, bk);
            Dk.point(Sk, kk, fk.point, ik, rk, fk.pointRank), bk = Math.min(fk.openEnd(kk), ik.length)
          } else kk > Sk && (Dk.span(Sk, kk, fk.active, bk), bk = fk.openEnd(kk));
          if (fk.to > ik) return bk + (fk.point && fk.to > ik ? 1 : 0);
          Sk = fk.to, fk.next()
        }
      }
      static of (kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ik = new ce;
        for (let Dk of kk instanceof We ? [kk] : ek ? function(kk) {
            if (kk.length > 1)
              for (let ek = kk[0], ik = 1; ik < kk.length; ik++) {
                let Dk = kk[ik];
                if (te(ek, Dk) > 0) return kk.slice().sort(te);
                ek = Dk
              }
            return kk
          }(kk) : kk) ik.add(Dk.from, Dk.to, Dk.value);
        return ik.finish()
      }
      static join(kk) {
        if (!kk.length) return Be.empty;
        let ek = kk[kk.length - 1];
        for (let ik = kk.length - 2; ik >= 0; ik--)
          for (let Dk = kk[ik]; Dk != Be.empty; Dk = Dk.nextLayer) ek = new Be(Dk.chunkPos, Dk.chunk, ek, Math.max(Dk.Rik, ek.Rik));
        return ek
      }
    }
    Be.empty = new Be([], [], null, -1), Be.empty.nextLayer = Be.empty;
    class ce {
      finishChunk(kk) {
        this.chunks.push(new Xe(this.from, this.to, this.value, this.Rik)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.Rik), this.Rik = -1, kk && (this.from = [], this.to = [], this.value = [])
      }
      constructor() {
        this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.Rik = -1, this.setMaxPoint = -1, this.nextLayer = null
      }
      add(kk, ek, ik) {
        this.addInner(kk, ek, ik) || (this.nextLayer || (this.nextLayer = new ce)).add(kk, ek, ik)
      }
      addInner(kk, ek, ik) {
        let Dk = kk - this.lastTo || ik.startSide - this.last.endSide;
        if (Dk <= 0 && (kk - this.lastFrom || ik.startSide - this.last.startSide) < 0) throw new Error("Ranges must be added sorted by `from` position and `startSide`");
        return !(Dk < 0) && (250 == this.from.length && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = kk), this.from.push(kk - this.chunkStart), this.to.push(ek - this.chunkStart), this.last = ik, this.lastFrom = kk, this.lastTo = ek, this.value.push(ik), ik.point && (this.Rik = Math.max(this.Rik, ek - kk)), !0)
      }
      addChunk(kk, ek) {
        if ((kk - this.lastTo || ek.value[0].startSide - this.last.endSide) < 0) return !1;
        this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, ek.Rik), this.chunks.push(ek), this.chunkPos.push(kk);
        let ik = ek.value.length - 1;
        return this.last = ek.value[ik], this.lastFrom = ek.from[ik] + kk, this.lastTo = ek.to[ik] + kk, !0
      }
      finish() {
        return this.finishInner(Be.empty)
      }
      finishInner(kk) {
        if (this.from.length && this.finishChunk(!1), 0 == this.chunks.length) return kk;
        let ek = Be.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(kk) : kk, this.setMaxPoint);
        return this.from = null, ek
      }
    }

    function Te(kk, ek, ik) {
      let Dk = new Map;
      for (let Sk of kk)
        for (let kk = 0; kk < Sk.chunk.length; kk++) Sk.chunk[kk].Rik <= 0 && Dk.set(Sk.chunk[kk], Sk.chunkPos[kk]);
      let fk = new Set;
      for (let Sk of ek)
        for (let kk = 0; kk < Sk.chunk.length; kk++) {
          let ek = Dk.get(Sk.chunk[kk]);
          null == ek || (ik ? ik.mapPos(ek) : ek) != Sk.chunkPos[kk] || (null === ik || void 0 === ik ? void 0 : ik.touchesRange(ek, ek + Sk.chunk[kk].length)) || fk.add(Sk.chunk[kk])
        }
      return fk
    }
    class oe {
      constructor(kk, ek, ik) {
        let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.layer = kk, this.skip = ek, this.Jik = ik, this.rank = Dk
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      get endSide() {
        return this.value ? this.value.endSide : 0
      }
      goto(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(kk, ek, !1), this
      }
      gotoInner(kk, ek, ik) {
        for (; this.chunkIndex < this.layer.chunk.length;) {
          let ek = this.layer.chunk[this.chunkIndex];
          if (!(this.skip && this.skip.has(ek) || this.layer.chunkEnd(this.chunkIndex) < kk || ek.Rik < this.Jik)) break;
          this.chunkIndex++, ik = !1
        }
        if (this.chunkIndex < this.layer.chunk.length) {
          let Dk = this.layer.chunk[this.chunkIndex].findIndex(kk - this.layer.chunkPos[this.chunkIndex], ek, !0);
          (!ik || this.rangeIndex < Dk) && this.setRangeIndex(Dk)
        }
        this.next()
      }
      forward(kk, ek) {
        (this.to - kk || this.endSide - ek) < 0 && this.gotoInner(kk, ek, !0)
      }
      next() {
        for (;;) {
          if (this.chunkIndex == this.layer.chunk.length) {
            this.from = this.to = 1e9, this.value = null;
            break
          } {
            let kk = this.layer.chunkPos[this.chunkIndex],
              ek = this.layer.chunk[this.chunkIndex],
              ik = kk + ek.from[this.rangeIndex];
            if (this.from = ik, this.to = kk + ek.to[this.rangeIndex], this.value = ek.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.Jik < 0 || this.value.point && this.to - this.from >= this.Jik) break
          }
        }
      }
      setRangeIndex(kk) {
        if (kk == this.layer.chunk[this.chunkIndex].value.length) {
          if (this.chunkIndex++, this.skip)
            for (; this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]);) this.chunkIndex++;
          this.rangeIndex = 0
        } else this.rangeIndex = kk
      }
      nextChunk() {
        this.chunkIndex++, this.rangeIndex = 0, this.next()
      }
      compare(kk) {
        return this.from - kk.from || this.startSide - kk.startSide || this.rank - kk.rank || this.to - kk.to || this.endSide - kk.endSide
      }
    }
    class Ze {
      constructor(kk) {
        this.heap = kk
      }
      static from(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          Dk = [];
        for (let fk = 0; fk < kk.length; fk++)
          for (let Sk = kk[fk]; !Sk.uU; Sk = Sk.nextLayer) Sk.Rik >= ik && Dk.push(new oe(Sk, ek, ik, fk));
        return 1 == Dk.length ? Dk[0] : new Ze(Dk)
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      goto(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        for (let ik of this.heap) ik.goto(kk, ek);
        for (let ik = this.heap.length >> 1; ik >= 0; ik--) Oe(this.heap, ik);
        return this.next(), this
      }
      forward(kk, ek) {
        for (let ik of this.heap) ik.forward(kk, ek);
        for (let ik = this.heap.length >> 1; ik >= 0; ik--) Oe(this.heap, ik);
        (this.to - kk || this.value.endSide - ek) < 0 && this.next()
      }
      next() {
        if (0 == this.heap.length) this.from = this.to = 1e9, this.value = null, this.rank = -1;
        else {
          let kk = this.heap[0];
          this.from = kk.from, this.to = kk.to, this.value = kk.value, this.rank = kk.rank, kk.value && kk.next(), Oe(this.heap, 0)
        }
      }
    }

    function Oe(kk, ek) {
      for (let ik = kk[ek];;) {
        let Dk = 1 + (ek << 1);
        if (Dk >= kk.length) break;
        let fk = kk[Dk];
        if (Dk + 1 < kk.length && fk.compare(kk[Dk + 1]) >= 0 && (fk = kk[Dk + 1], Dk++), ik.compare(fk) < 0) break;
        kk[Dk] = ik, kk[ek] = fk, ek = Dk
      }
    }
    class ge {
      constructor(kk, ek, ik) {
        this.Jik = ik, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = Ze.from(kk, ek, ik)
      }
      goto(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.cursor.goto(kk, ek), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = kk, this.endSide = ek, this.openStart = -1, this.next(), this
      }
      forward(kk, ek) {
        for (; this.minActive > -1 && (this.activeTo[this.minActive] - kk || this.active[this.minActive].endSide - ek) < 0;) this.removeActive(this.minActive);
        this.cursor.forward(kk, ek)
      }
      removeActive(kk) {
        Re(this.active, kk), Re(this.activeTo, kk), Re(this.activeRank, kk), this.minActive = ki(this.active, this.activeTo)
      }
      addActive(kk) {
        let ek = 0,
          {
            value: ik,
            to: Dk,
            rank: fk
          } = this.cursor;
        for (; ek < this.activeRank.length && (fk - this.activeRank[ek] || Dk - this.activeTo[ek]) > 0;) ek++;
        Je(this.active, ek, ik), Je(this.activeTo, ek, Dk), Je(this.activeRank, ek, fk), kk && Je(kk, ek, this.cursor.from), this.minActive = ki(this.active, this.activeTo)
      }
      next() {
        let kk = this.to,
          ek = this.point;
        this.point = null;
        let ik = this.openStart < 0 ? [] : null;
        for (;;) {
          let Dk = this.minActive;
          if (Dk > -1 && (this.activeTo[Dk] - this.cursor.from || this.active[Dk].endSide - this.cursor.startSide) < 0) {
            if (this.activeTo[Dk] > kk) {
              this.to = this.activeTo[Dk], this.endSide = this.active[Dk].endSide;
              break
            }
            this.removeActive(Dk), ik && Re(ik, Dk)
          } else {
            if (!this.cursor.value) {
              this.to = this.endSide = 1e9;
              break
            }
            if (this.cursor.from > kk) {
              this.to = this.cursor.from, this.endSide = this.cursor.startSide;
              break
            } {
              let kk = this.cursor.value;
              if (kk.point) {
                if (!(ek && this.cursor.to == this.to && this.cursor.from < this.cursor.to)) {
                  this.point = kk, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = kk.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
                  break
                }
                this.cursor.next()
              } else this.addActive(ik), this.cursor.next()
            }
          }
        }
        if (ik) {
          this.openStart = 0;
          for (let ek = ik.length - 1; ek >= 0 && ik[ek] < kk; ek--) this.openStart++
        }
      }
      activeForPoint(kk) {
        if (!this.active.length) return this.active;
        let ek = [];
        for (let ik = this.active.length - 1; ik >= 0 && !(this.activeRank[ik] < this.pointRank); ik--)(this.activeTo[ik] > kk || this.activeTo[ik] == kk && this.active[ik].endSide >= this.point.endSide) && ek.push(this.active[ik]);
        return ek.reverse()
      }
      openEnd(kk) {
        let ek = 0;
        for (let ik = this.activeTo.length - 1; ik >= 0 && this.activeTo[ik] > kk; ik--) ek++;
        return ek
      }
    }

    function Ge(kk, ek, ik, Dk, fk, Sk) {
      kk.goto(ek), ik.goto(Dk);
      let bk = Dk + fk,
        rk = Dk,
        Pk = Dk - ek,
        mk = !!Sk.boundChange;
      for (let Mk = !1;;) {
        let ek = kk.to + Pk - ik.to,
          Dk = ek || kk.endSide - ik.endSide,
          fk = Dk < 0 ? kk.to + Pk : ik.to,
          Kk = Math.min(fk, bk);
        if (kk.point || ik.point ? (kk.point && ik.point && ae(kk.point, ik.point) && Ne(kk.activeForPoint(kk.to), ik.activeForPoint(ik.to)) || Sk.comparePoint(rk, Kk, kk.point, ik.point), Mk = !1) : (Mk && Sk.boundChange(rk), Kk > rk && !Ne(kk.active, ik.active) && Sk.compareRange(rk, Kk, kk.active, ik.active), mk && Kk < bk && (ek || kk.openEnd(fk) != ik.openEnd(fk)) && (Mk = !0)), fk > bk) break;
        rk = fk, Dk <= 0 && kk.next(), Dk >= 0 && ik.next()
      }
    }

    function Ne(kk, ek) {
      if (kk.length != ek.length) return !1;
      for (let ik = 0; ik < kk.length; ik++)
        if (kk[ik] != ek[ik] && !ae(kk[ik], ek[ik])) return !1;
      return !0
    }

    function Re(kk, ek) {
      for (let ik = ek, Dk = kk.length - 1; ik < Dk; ik++) kk[ik] = kk[ik + 1];
      kk.pop()
    }

    function Je(kk, ek, ik) {
      for (let Dk = kk.length - 1; Dk >= ek; Dk--) kk[Dk + 1] = kk[Dk];
      kk[ek] = ik
    }

    function ki(kk, ek) {
      let ik = -1,
        Dk = 1e9;
      for (let fk = 0; fk < ek.length; fk++)(ek[fk] - Dk || kk[fk].endSide - kk[ik].endSide) < 0 && (ik = fk, Dk = ek[fk]);
      return ik
    }

    function ei(kk, ek) {
      let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : kk.length,
        Dk = 0;
      for (let fk = 0; fk < ik && fk < kk.length;) 9 == kk.charCodeAt(fk) ? (Dk += ek - Dk % ek, fk++) : (Dk++, fk = sk(kk, fk));
      return Dk
    }

    function ii(kk, ek, ik, Dk) {
      for (let fk = 0, Sk = 0;;) {
        if (Sk >= ek) return fk;
        if (fk == kk.length) break;
        Sk += 9 == kk.charCodeAt(fk) ? ik - Sk % ik : 1, fk = sk(kk, fk)
      }
      return !0 === Dk ? -1 : kk.length
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);