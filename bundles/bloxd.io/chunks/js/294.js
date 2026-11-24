export const id = 294;
export const ids = [294];
export const modules = {
  41315: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => PF,
      g: () => pk,
      ChangeSet: () => uk,
      h: () => nF,
      k: () => fk,
      m: () => bF,
      p: () => Yk,
      s: () => Gk,
      u: () => iF,
      A: () => fF,
      y: () => BF,
      E: () => UF,
      F: () => sF,
      I: () => Mk,
      J: () => wk,
      L: () => VF,
      M: () => vk,
      O: () => Ok,
      R: () => RF,
      V: () => FI,
      Y: () => Sk,
      $: () => II,
      db: () => Ek
    });
    let Xk = [],
      Tk = [];

    function ik(kk) {
      if (kk < 768) return !1;
      for (let Fk = 0, Ik = Xk.length;;) {
        let ik = Fk + Ik >> 1;
        if (kk < Xk[ik]) Ik = ik;
        else {
          if (!(kk >= Tk[ik])) return !0;
          Fk = ik + 1
        }
        if (Fk == Ik) return !1
      }
    }

    function yk(kk) {
      return kk >= 127462 && kk <= 127487
    }(() => {
      let kk = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((kk => kk ? parseInt(kk, 36) : 1));
      for (let Fk = 0, Ik = 0; Fk < kk.length; Fk++)(Fk % 2 ? Tk : Xk).push(Ik += kk[Fk])
    })();
    const lk = 8205;

    function ak(kk, Fk) {
      return (!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2] ? qk : Lk)(kk, Fk, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function qk(kk, Fk, Ik) {
      if (Fk == kk.length) return Fk;
      Fk && Zk(kk.charCodeAt(Fk)) && jk(kk.charCodeAt(Fk - 1)) && Fk--;
      let Xk = tk(kk, Fk);
      for (Fk += ek(Xk); Fk < kk.length;) {
        let Tk = tk(kk, Fk);
        if (Xk == lk || Tk == lk || Ik && ik(Tk)) Fk += ek(Tk), Xk = Tk;
        else {
          if (!yk(Tk)) break;
          {
            let Ik = 0,
              Xk = Fk - 2;
            for (; Xk >= 0 && yk(tk(kk, Xk));) Ik++, Xk -= 2;
            if (Ik % 2 == 0) break;
            Fk += 2
          }
        }
      }
      return Fk
    }

    function Lk(kk, Fk, Ik) {
      for (; Fk > 0;) {
        let Xk = qk(kk, Fk - 2, Ik);
        if (Xk < Fk) return Xk;
        Fk--
      }
      return 0
    }

    function tk(kk, Fk) {
      let Ik = kk.charCodeAt(Fk);
      if (!jk(Ik) || Fk + 1 == kk.length) return Ik;
      let Xk = kk.charCodeAt(Fk + 1);
      return Zk(Xk) ? Xk - 56320 + (Ik - 55296 << 10) + 65536 : Ik
    }

    function Zk(kk) {
      return kk >= 56320 && kk < 57344
    }

    function jk(kk) {
      return kk >= 55296 && kk < 56320
    }

    function ek(kk) {
      return kk < 65536 ? 1 : 2
    }
    class wk {
      lineAt(kk) {
        if (kk < 0 || kk > this.length) throw new RangeError(`Invalid position ${kk} in document of length ${this.length}`);
        return this.lineInner(kk, !1, 1, 0)
      }
      line(kk) {
        if (kk < 1 || kk > this.lines) throw new RangeError(`Invalid line number ${kk} in ${this.lines}-line document`);
        return this.lineInner(kk, !0, 1, 0)
      }
      replace(kk, Fk, Ik) {
        [kk, Fk] = zk(this, kk, Fk);
        let Xk = [];
        return this.decompose(0, kk, Xk, 2), Ik.length && Ik.decompose(0, Ik.length, Xk, 3), this.decompose(Fk, this.length, Xk, 1), Jk.from(Xk, this.length - (Fk - kk) + Ik.length)
      }
      append(kk) {
        return this.replace(this.length, this.length, kk)
      }
      slice(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        [kk, Fk] = zk(this, kk, Fk);
        let Ik = [];
        return this.decompose(kk, Fk, Ik, 0), Jk.from(Ik, Fk - kk)
      }
      eq(kk) {
        if (kk == this) return !0;
        if (kk.length != this.length || kk.lines != this.lines) return !1;
        let Fk = this.scanIdentical(kk, 1),
          Ik = this.length - this.scanIdentical(kk, -1),
          Xk = new Kk(this),
          Tk = new Kk(kk);
        for (let ik = Fk, yk = Fk;;) {
          if (Xk.next(ik), Tk.next(ik), ik = 0, Xk.lineBreak != Tk.lineBreak || Xk.done != Tk.done || Xk.value != Tk.value) return !1;
          if (yk += Xk.value.length, Xk.done || yk >= Ik) return !0
        }
      }
      iter() {
        return new Kk(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1)
      }
      iterRange(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        return new Qk(this, kk, Fk)
      }
      iterLines(kk, Fk) {
        let Ik;
        if (null == kk) Ik = this.iter();
        else {
          null == Fk && (Fk = this.lines + 1);
          let Xk = this.line(kk).from;
          Ik = this.iterRange(Xk, Math.max(Xk, Fk == this.lines + 1 ? this.length : Fk <= 1 ? 0 : this.line(Fk - 1).to))
        }
        return new sk(Ik)
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
        return 1 != kk.length || kk[0] ? kk.length <= 32 ? new Hk(kk) : Jk.from(Hk.split(kk, [])) : wk.empty
      }
    }
    class Hk extends wk {
      constructor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(kk) {
          let Fk = -1;
          for (let Ik of kk) Fk += Ik.length + 1;
          return Fk
        }(kk);
        super(), this.text = kk, this.length = Fk
      }
      get lines() {
        return this.text.length
      }
      get children() {
        return null
      }
      lineInner(kk, Fk, Ik, Xk) {
        for (let Tk = 0;; Tk++) {
          let ik = this.text[Tk],
            yk = Xk + ik.length;
          if ((Fk ? Ik : yk) >= kk) return new Vk(Xk, yk, Ik, ik);
          Xk = yk + 1, Ik++
        }
      }
      decompose(kk, Fk, Ik, Xk) {
        let Tk = kk <= 0 && Fk >= this.length ? this : new Hk(Pk(this.text, kk, Fk), Math.min(Fk, this.length) - Math.max(0, kk));
        if (1 & Xk) {
          let kk = Ik.pop(),
            Fk = xk(Tk.text, kk.text.slice(), 0, Tk.length);
          if (Fk.length <= 32) Ik.push(new Hk(Fk, kk.length + Tk.length));
          else {
            let kk = Fk.length >> 1;
            Ik.push(new Hk(Fk.slice(0, kk)), new Hk(Fk.slice(kk)))
          }
        } else Ik.push(Tk)
      }
      replace(kk, Fk, Ik) {
        if (!(Ik instanceof Hk)) return super.replace(kk, Fk, Ik);
        [kk, Fk] = zk(this, kk, Fk);
        let Xk = xk(this.text, xk(Ik.text, Pk(this.text, 0, kk)), Fk),
          Tk = this.length + Ik.length - (Fk - kk);
        return Xk.length <= 32 ? new Hk(Xk, Tk) : Jk.from(Hk.split(Xk, []), Tk)
      }
      sliceString(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [kk, Fk] = zk(this, kk, Fk);
        let Xk = "";
        for (let Tk = 0, ik = 0; Tk <= Fk && ik < this.text.length; ik++) {
          let yk = this.text[ik],
            lk = Tk + yk.length;
          Tk > kk && ik && (Xk += Ik), kk < lk && Fk > Tk && (Xk += yk.slice(Math.max(0, kk - Tk), Fk - Tk)), Tk = lk + 1
        }
        return Xk
      }
      flatten(kk) {
        for (let Fk of this.text) kk.push(Fk)
      }
      scanIdentical() {
        return 0
      }
      static split(kk, Fk) {
        let Ik = [],
          Xk = -1;
        for (let Tk of kk) Ik.push(Tk), Xk += Tk.length + 1, 32 == Ik.length && (Fk.push(new Hk(Ik, Xk)), Ik = [], Xk = -1);
        return Xk > -1 && Fk.push(new Hk(Ik, Xk)), Fk
      }
    }
    class Jk extends wk {
      constructor(kk, Fk) {
        super(), this.children = kk, this.length = Fk, this.lines = 0;
        for (let Ik of kk) this.lines += Ik.lines
      }
      lineInner(kk, Fk, Ik, Xk) {
        for (let Tk = 0;; Tk++) {
          let ik = this.children[Tk],
            yk = Xk + ik.length,
            lk = Ik + ik.lines - 1;
          if ((Fk ? lk : yk) >= kk) return ik.lineInner(kk, Fk, Ik, Xk);
          Xk = yk + 1, Ik = lk + 1
        }
      }
      decompose(kk, Fk, Ik, Xk) {
        for (let Tk = 0, ik = 0; ik <= Fk && Tk < this.children.length; Tk++) {
          let yk = this.children[Tk],
            lk = ik + yk.length;
          if (kk <= lk && Fk >= ik) {
            let Tk = Xk & ((ik <= kk ? 1 : 0) | (lk >= Fk ? 2 : 0));
            ik >= kk && lk <= Fk && !Tk ? Ik.push(yk) : yk.decompose(kk - ik, Fk - ik, Ik, Tk)
          }
          ik = lk + 1
        }
      }
      replace(kk, Fk, Ik) {
        if ([kk, Fk] = zk(this, kk, Fk), Ik.lines < this.lines)
          for (let Xk = 0, Tk = 0; Xk < this.children.length; Xk++) {
            let ik = this.children[Xk],
              yk = Tk + ik.length;
            if (kk >= Tk && Fk <= yk) {
              let lk = ik.replace(kk - Tk, Fk - Tk, Ik),
                ak = this.lines - ik.lines + lk.lines;
              if (lk.lines < ak >> 4 && lk.lines > ak >> 6) {
                let Tk = this.children.slice();
                return Tk[Xk] = lk, new Jk(Tk, this.length - (Fk - kk) + Ik.length)
              }
              return super.replace(Tk, yk, lk)
            }
            Tk = yk + 1
          }
        return super.replace(kk, Fk, Ik)
      }
      sliceString(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [kk, Fk] = zk(this, kk, Fk);
        let Xk = "";
        for (let Tk = 0, ik = 0; Tk < this.children.length && ik <= Fk; Tk++) {
          let yk = this.children[Tk],
            lk = ik + yk.length;
          ik > kk && Tk && (Xk += Ik), kk < lk && Fk > ik && (Xk += yk.sliceString(kk - ik, Fk - ik, Ik)), ik = lk + 1
        }
        return Xk
      }
      flatten(kk) {
        for (let Fk of this.children) Fk.flatten(kk)
      }
      scanIdentical(kk, Fk) {
        if (!(kk instanceof Jk)) return 0;
        let Ik = 0,
          [Xk, Tk, ik, yk] = Fk > 0 ? [0, 0, this.children.length, kk.children.length] : [this.children.length - 1, kk.children.length - 1, -1, -1];
        for (;; Xk += Fk, Tk += Fk) {
          if (Xk == ik || Tk == yk) return Ik;
          let lk = this.children[Xk],
            ak = kk.children[Tk];
          if (lk != ak) return Ik + lk.scanIdentical(ak, Fk);
          Ik += lk.length + 1
        }
      }
      static from(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kk.reduce(((kk, Fk) => kk + Fk.length + 1), -1),
          Ik = 0;
        for (let Zk of kk) Ik += Zk.lines;
        if (Ik < 32) {
          let Ik = [];
          for (let Fk of kk) Fk.flatten(Ik);
          return new Hk(Ik, Fk)
        }
        let Xk = Math.max(32, Ik >> 5),
          Tk = Xk << 1,
          ik = Xk >> 1,
          yk = [],
          lk = 0,
          ak = -1,
          qk = [];

        function Lk(kk) {
          let Fk;
          if (kk.lines > Tk && kk instanceof Jk)
            for (let Ik of kk.children) Lk(Ik);
          else kk.lines > ik && (lk > ik || !lk) ? (tk(), yk.push(kk)) : kk instanceof Hk && lk && (Fk = qk[qk.length - 1]) instanceof Hk && kk.lines + Fk.lines <= 32 ? (lk += kk.lines, ak += kk.length + 1, qk[qk.length - 1] = new Hk(Fk.text.concat(kk.text), Fk.length + 1 + kk.length)) : (lk + kk.lines > Xk && tk(), lk += kk.lines, ak += kk.length + 1, qk.push(kk))
        }

        function tk() {
          0 != lk && (yk.push(1 == qk.length ? qk[0] : Jk.from(qk, ak)), ak = -1, lk = qk.length = 0)
        }
        for (let Zk of kk) Lk(Zk);
        return tk(), 1 == yk.length ? yk[0] : new Jk(yk, Fk)
      }
    }

    function xk(kk, Fk) {
      let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e9;
      for (let Tk = 0, ik = 0, yk = !0; ik < kk.length && Tk <= Xk; ik++) {
        let lk = kk[ik],
          ak = Tk + lk.length;
        ak >= Ik && (ak > Xk && (lk = lk.slice(0, Xk - Tk)), Tk < Ik && (lk = lk.slice(Ik - Tk)), yk ? (Fk[Fk.length - 1] += lk, yk = !1) : Fk.push(lk)), Tk = ak + 1
      }
      return Fk
    }

    function Pk(kk, Fk, Ik) {
      return xk(kk, [""], Fk, Ik)
    }
    wk.empty = new Hk([""], 0);
    class Kk {
      constructor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.dir = Fk, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [kk], this.offsets = [Fk > 0 ? 1 : (kk instanceof Hk ? kk.text.length : kk.children.length) << 1]
      }
      nextInner(kk, Fk) {
        for (this.done = this.lineBreak = !1;;) {
          let Ik = this.nodes.length - 1,
            Xk = this.nodes[Ik],
            Tk = this.offsets[Ik],
            ik = Tk >> 1,
            yk = Xk instanceof Hk ? Xk.text.length : Xk.children.length;
          if (ik == (Fk > 0 ? yk : 0)) {
            if (0 == Ik) return this.done = !0, this.value = "", this;
            Fk > 0 && this.offsets[Ik - 1]++, this.nodes.pop(), this.offsets.pop()
          } else if ((1 & Tk) == (Fk > 0 ? 0 : 1)) {
            if (this.offsets[Ik] += Fk, 0 == kk) return this.lineBreak = !0, this.value = "\n", this;
            kk--
          } else if (Xk instanceof Hk) {
            let Tk = Xk.text[ik + (Fk < 0 ? -1 : 0)];
            if (this.offsets[Ik] += Fk, Tk.length > Math.max(0, kk)) return this.value = 0 == kk ? Tk : Fk > 0 ? Tk.slice(kk) : Tk.slice(0, Tk.length - kk), this;
            kk -= Tk.length
          } else {
            let Tk = Xk.children[ik + (Fk < 0 ? -1 : 0)];
            kk > Tk.length ? (kk -= Tk.length, this.offsets[Ik] += Fk) : (Fk < 0 && this.offsets[Ik]--, this.nodes.push(Tk), this.offsets.push(Fk > 0 ? 1 : (Tk instanceof Hk ? Tk.text.length : Tk.children.length) << 1))
          }
        }
      }
      next() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return kk < 0 && (this.nextInner(-kk, -this.dir), kk = this.value.length), this.nextInner(kk, this.dir)
      }
    }
    class Qk {
      constructor(kk, Fk, Ik) {
        this.value = "", this.done = !1, this.cursor = new Kk(kk, Fk > Ik ? -1 : 1), this.pos = Fk > Ik ? kk.length : 0, this.from = Math.min(Fk, Ik), this.to = Math.max(Fk, Ik)
      }
      nextInner(kk, Fk) {
        if (Fk < 0 ? this.pos <= this.from : this.pos >= this.to) return this.value = "", this.done = !0, this;
        kk += Math.max(0, Fk < 0 ? this.pos - this.to : this.from - this.pos);
        let Ik = Fk < 0 ? this.pos - this.from : this.to - this.pos;
        kk > Ik && (kk = Ik), Ik -= kk;
        let {
          value: Xk
        } = this.cursor.next(kk);
        return this.pos += (Xk.length + kk) * Fk, this.value = Xk.length <= Ik ? Xk : Fk < 0 ? Xk.slice(Xk.length - Ik) : Xk.slice(0, Ik), this.done = !this.value, this
      }
      next() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return kk < 0 ? kk = Math.max(kk, this.from - this.pos) : kk > 0 && (kk = Math.min(kk, this.to - this.pos)), this.nextInner(kk, this.cursor.dir)
      }
      get lineBreak() {
        return this.cursor.lineBreak && "" != this.value
      }
    }
    class sk {
      constructor(kk) {
        this.inner = kk, this.afterBreak = !0, this.value = "", this.done = !1
      }
      next() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          {
            done: Fk,
            lineBreak: Ik,
            value: Xk
          } = this.inner.next(kk);
        return Fk && this.afterBreak ? (this.value = "", this.afterBreak = !1) : Fk ? (this.done = !0, this.value = "") : Ik ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = Xk, this.afterBreak = !1), this
      }
      get lineBreak() {
        return !1
      }
    }
    "undefined" != typeof Symbol && (wk.prototype[Symbol.iterator] = function() {
      return this.iter()
    }, Kk.prototype[Symbol.iterator] = Qk.prototype[Symbol.iterator] = sk.prototype[Symbol.iterator] = function() {
      return this
    });
    class Vk {
      constructor(kk, Fk, Ik, Xk) {
        this.from = kk, this.to = Fk, this.number = Ik, this.text = Xk
      }
      get length() {
        return this.to - this.from
      }
    }

    function zk(kk, Fk, Ik) {
      return [Fk = Math.max(0, Math.min(kk.length, Fk)), Math.max(Fk, Math.min(kk.length, Ik))]
    }

    function Sk(kk, Fk) {
      return ak(kk, Fk, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function vk(kk, Fk) {
      let Ik = kk.charCodeAt(Fk);
      if (!((Xk = Ik) >= 55296 && Xk < 56320) || Fk + 1 == kk.length) return Ik;
      var Xk;
      let Tk = kk.charCodeAt(Fk + 1);
      return function(kk) {
        return kk >= 56320 && kk < 57344
      }(Tk) ? Tk - 56320 + (Ik - 55296 << 10) + 65536 : Ik
    }

    function Ek(kk) {
      return kk <= 65535 ? String.fromCharCode(kk) : (kk -= 65536, String.fromCharCode(55296 + (kk >> 10), 56320 + (1023 & kk)))
    }

    function Ok(kk) {
      return kk < 65536 ? 1 : 2
    }
    const nk = /\r\n?|\n/;
    var Gk = function(kk) {
      return kk[kk.Simple = 0] = "Simple", kk[kk.TrackDel = 1] = "TrackDel", kk[kk.TrackBefore = 2] = "TrackBefore", kk[kk.TrackAfter = 3] = "TrackAfter", kk
    }(Gk || (Gk = {}));
    class pk {
      constructor(kk) {
        this.sections = kk
      }
      get length() {
        let kk = 0;
        for (let Fk = 0; Fk < this.sections.length; Fk += 2) kk += this.sections[Fk];
        return kk
      }
      get newLength() {
        let kk = 0;
        for (let Fk = 0; Fk < this.sections.length; Fk += 2) {
          let Ik = this.sections[Fk + 1];
          kk += Ik < 0 ? this.sections[Fk] : Ik
        }
        return kk
      }
      get empty() {
        return 0 == this.sections.length || 2 == this.sections.length && this.sections[1] < 0
      }
      iterGaps(kk) {
        for (let Fk = 0, Ik = 0, Xk = 0; Fk < this.sections.length;) {
          let Tk = this.sections[Fk++],
            ik = this.sections[Fk++];
          ik < 0 ? (kk(Ik, Xk, Tk), Xk += Tk) : Xk += ik, Ik += Tk
        }
      }
      iterChangedRanges(kk) {
        Uk(this, kk, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get invertedDesc() {
        let kk = [];
        for (let Fk = 0; Fk < this.sections.length;) {
          let Ik = this.sections[Fk++],
            Xk = this.sections[Fk++];
          Xk < 0 ? kk.push(Ik, Xk) : kk.push(Xk, Ik)
        }
        return new pk(kk)
      }
      composeDesc(kk) {
        return this.empty ? kk : kk.empty ? this : Nk(this, kk)
      }
      mapDesc(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return kk.empty ? this : Ck(this, kk, Fk)
      }
      mapPos(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Gk.Simple,
          Xk = 0,
          Tk = 0;
        for (let ik = 0; ik < this.sections.length;) {
          let yk = this.sections[ik++],
            lk = this.sections[ik++],
            ak = Xk + yk;
          if (lk < 0) {
            if (ak > kk) return Tk + (kk - Xk);
            Tk += yk
          } else {
            if (Ik != Gk.Simple && ak >= kk && (Ik == Gk.TrackDel && Xk < kk && ak > kk || Ik == Gk.TrackBefore && Xk < kk || Ik == Gk.TrackAfter && ak > kk)) return null;
            if (ak > kk || ak == kk && Fk < 0 && !yk) return kk == Xk || Fk < 0 ? Tk : Tk + lk;
            Tk += lk
          }
          Xk = ak
        }
        if (kk > Xk) throw new RangeError(`Position ${kk} is out of range for changeset of length ${Xk}`);
        return Tk
      }
      touchesRange(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kk;
        for (let Ik = 0, Xk = 0; Ik < this.sections.length && Xk <= Fk;) {
          let Tk = Xk + this.sections[Ik++];
          if (this.sections[Ik++] >= 0 && Xk <= Fk && Tk >= kk) return !(Xk < kk && Tk > Fk) || "cover";
          Xk = Tk
        }
        return !1
      }
      toString() {
        let kk = "";
        for (let Fk = 0; Fk < this.sections.length;) {
          let Ik = this.sections[Fk++],
            Xk = this.sections[Fk++];
          kk += (kk ? " " : "") + Ik + (Xk >= 0 ? ":" + Xk : "")
        }
        return kk
      }
      toJSON() {
        return this.sections
      }
      static fromJSON(kk) {
        if (!Array.isArray(kk) || kk.length % 2 || kk.some((kk => "number" != typeof kk))) throw new RangeError("Invalid JSON representation of ChangeDesc");
        return new pk(kk)
      }
      static create(kk) {
        return new pk(kk)
      }
    }
    class uk extends pk {
      constructor(kk, Fk) {
        super(kk), this.inserted = Fk
      }
      apply(kk) {
        if (this.length != kk.length) throw new RangeError("Applying change set to a document with the wrong length");
        return Uk(this, ((Fk, Ik, Xk, Tk, ik) => kk = kk.replace(Xk, Xk + (Ik - Fk), ik)), !1), kk
      }
      mapDesc(kk) {
        return Ck(this, kk, arguments.length > 1 && void 0 !== arguments[1] && arguments[1], !0)
      }
      invert(kk) {
        let Fk = this.sections.slice(),
          Ik = [];
        for (let Xk = 0, Tk = 0; Xk < Fk.length; Xk += 2) {
          let ik = Fk[Xk],
            yk = Fk[Xk + 1];
          if (yk >= 0) {
            Fk[Xk] = yk, Fk[Xk + 1] = ik;
            let lk = Xk >> 1;
            for (; Ik.length < lk;) Ik.push(wk.empty);
            Ik.push(ik ? kk.slice(Tk, Tk + ik) : wk.empty)
          }
          Tk += ik
        }
        return new uk(Fk, Ik)
      }
      compose(kk) {
        return this.empty ? kk : kk.empty ? this : Nk(this, kk, !0)
      }
      map(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return kk.empty ? this : Ck(this, kk, Fk, !0)
      }
      iterChanges(kk) {
        Uk(this, kk, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get desc() {
        return pk.create(this.sections)
      }
      filter(kk) {
        let Fk = [],
          Ik = [],
          Xk = [],
          Tk = new ck(this);
        kk: for (let ik = 0, yk = 0;;) {
          let lk = ik == kk.length ? 1e9 : kk[ik++];
          for (; yk < lk || yk == lk && 0 == Tk.len;) {
            if (Tk.done) break kk;
            let kk = Math.min(Tk.len, lk - yk);
            bk(Xk, kk, -1);
            let ik = -1 == Tk.ins ? -1 : 0 == Tk.off ? Tk.ins : 0;
            bk(Fk, kk, ik), ik > 0 && Rk(Ik, Fk, Tk.text), Tk.forward(kk), yk += kk
          }
          let ak = kk[ik++];
          for (; yk < ak;) {
            if (Tk.done) break kk;
            let kk = Math.min(Tk.len, ak - yk);
            bk(Fk, kk, -1), bk(Xk, kk, -1 == Tk.ins ? -1 : 0 == Tk.off ? Tk.ins : 0), Tk.forward(kk), yk += kk
          }
        }
        return {
          changes: new uk(Fk, Ik),
          filtered: pk.create(Xk)
        }
      }
      toJSON() {
        let kk = [];
        for (let Fk = 0; Fk < this.sections.length; Fk += 2) {
          let Ik = this.sections[Fk],
            Xk = this.sections[Fk + 1];
          Xk < 0 ? kk.push(Ik) : 0 == Xk ? kk.push([Ik]) : kk.push([Ik].concat(this.inserted[Fk >> 1].toJSON()))
        }
        return kk
      }
      static of (kk, Fk, Ik) {
        let Xk = [],
          Tk = [],
          ik = 0,
          yk = null;

        function lk() {
          if (!(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && !Xk.length) return;
          ik < Fk && bk(Xk, Fk - ik, -1);
          let kk = new uk(Xk, Tk);
          yk = yk ? yk.compose(kk.map(yk)) : kk, Xk = [], Tk = [], ik = 0
        }
        return function kk(ak) {
          if (Array.isArray(ak))
            for (let Fk of ak) kk(Fk);
          else if (ak instanceof uk) {
            if (ak.length != Fk) throw new RangeError(`Mismatched change set length (got ${ak.length}, expected ${Fk})`);
            lk(), yk = yk ? yk.compose(ak.map(yk)) : ak
          } else {
            let {
              from: kk,
              to: yk = kk,
              insert: qk
            } = ak;
            if (kk > yk || kk < 0 || yk > Fk) throw new RangeError(`Invalid change range ${kk} to ${yk} (in doc of length ${Fk})`);
            let Lk = qk ? "string" == typeof qk ? wk.of(qk.split(Ik || nk)) : qk : wk.empty,
              tk = Lk.length;
            if (kk == yk && 0 == tk) return;
            kk < ik && lk(), kk > ik && bk(Xk, kk - ik, -1), bk(Xk, yk - kk, tk), Rk(Tk, Xk, Lk), ik = yk
          }
        }(kk), lk(!yk), yk
      }
      static empty(kk) {
        return new uk(kk ? [kk, -1] : [], [])
      }
      static fromJSON(kk) {
        if (!Array.isArray(kk)) throw new RangeError("Invalid JSON representation of ChangeSet");
        let Fk = [],
          Ik = [];
        for (let Xk = 0; Xk < kk.length; Xk++) {
          let Tk = kk[Xk];
          if ("number" == typeof Tk) Fk.push(Tk, -1);
          else {
            if (!Array.isArray(Tk) || "number" != typeof Tk[0] || Tk.some(((kk, Fk) => Fk && "string" != typeof kk))) throw new RangeError("Invalid JSON representation of ChangeSet");
            if (1 == Tk.length) Fk.push(Tk[0], 0);
            else {
              for (; Ik.length < Xk;) Ik.push(wk.empty);
              Ik[Xk] = wk.of(Tk.slice(1)), Fk.push(Tk[0], Ik[Xk].length)
            }
          }
        }
        return new uk(Fk, Ik)
      }
      static createSet(kk, Fk) {
        return new uk(kk, Fk)
      }
    }

    function bk(kk, Fk, Ik) {
      let Xk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (0 == Fk && Ik <= 0) return;
      let Tk = kk.length - 2;
      Tk >= 0 && Ik <= 0 && Ik == kk[Tk + 1] ? kk[Tk] += Fk : Tk >= 0 && 0 == Fk && 0 == kk[Tk] ? kk[Tk + 1] += Ik : Xk ? (kk[Tk] += Fk, kk[Tk + 1] += Ik) : kk.push(Fk, Ik)
    }

    function Rk(kk, Fk, Ik) {
      if (0 == Ik.length) return;
      let Xk = Fk.length - 2 >> 1;
      if (Xk < kk.length) kk[kk.length - 1] = kk[kk.length - 1].append(Ik);
      else {
        for (; kk.length < Xk;) kk.push(wk.empty);
        kk.push(Ik)
      }
    }

    function Uk(kk, Fk, Ik) {
      let Xk = kk.inserted;
      for (let Tk = 0, ik = 0, yk = 0; yk < kk.sections.length;) {
        let lk = kk.sections[yk++],
          ak = kk.sections[yk++];
        if (ak < 0) Tk += lk, ik += lk;
        else {
          let qk = Tk,
            Lk = ik,
            tk = wk.empty;
          for (; qk += lk, Lk += ak, ak && Xk && (tk = tk.append(Xk[yk - 2 >> 1])), !(Ik || yk == kk.sections.length || kk.sections[yk + 1] < 0);) lk = kk.sections[yk++], ak = kk.sections[yk++];
          Fk(Tk, qk, ik, Lk, tk), Tk = qk, ik = Lk
        }
      }
    }

    function Ck(kk, Fk, Ik) {
      let Xk = [],
        Tk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3] ? [] : null,
        ik = new ck(kk),
        yk = new ck(Fk),
        lk = 0;
      for (let ak = -1;;) {
        if (++lk > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - likely malformed ChangeSet");
        if (ik.done && yk.len || yk.done && ik.len) throw new Error("Mismatched change set lengths");
        if (-1 == ik.ins && -1 == yk.ins) {
          let kk = Math.min(ik.len, yk.len);
          bk(Xk, kk, -1), ik.forward(kk), yk.forward(kk)
        } else if (yk.ins >= 0 && (ik.ins < 0 || ak == ik.i || 0 == ik.off && (yk.len < ik.len || yk.len == ik.len && !Ik))) {
          let kk = yk.len;
          for (bk(Xk, yk.ins, -1); kk;) {
            if (++lk > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-b");
            let Fk = Math.min(ik.len, kk);
            ik.ins >= 0 && ak < ik.i && ik.len <= Fk && (bk(Xk, 0, ik.ins), Tk && Rk(Tk, Xk, ik.text), ak = ik.i), ik.forward(Fk), kk -= Fk
          }
          yk.next()
        } else {
          if (!(ik.ins >= 0)) {
            if (ik.done && yk.done) return Tk ? uk.createSet(Xk, Tk) : pk.create(Xk);
            throw new Error("Mismatched change set lengths")
          } {
            let kk = 0,
              Fk = ik.len;
            for (; Fk;) {
              if (++lk > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-a");
              if (-1 == yk.ins) {
                let Ik = Math.min(Fk, yk.len);
                kk += Ik, Fk -= Ik, yk.forward(Ik)
              } else {
                if (!(0 == yk.ins && yk.len < Fk)) break;
                Fk -= yk.len, yk.next()
              }
            }
            bk(Xk, kk, ak < ik.i ? ik.ins : 0), Tk && ak < ik.i && Rk(Tk, Xk, ik.text), ak = ik.i, ik.forward(ik.len - Fk)
          }
        }
      }
    }

    function Nk(kk, Fk) {
      let Ik = [],
        Xk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? [] : null,
        Tk = new ck(kk),
        ik = new ck(Fk),
        yk = 0;
      for (let lk = !1;;) {
        if (++yk > 2e6) throw new Error("BLOXD CODEMIRROR: composeSets exceeded max iterations - likely malformed ChangeSet");
        if (Tk.done && ik.done) return Xk ? uk.createSet(Ik, Xk) : pk.create(Ik);
        if (0 == Tk.ins) bk(Ik, Tk.len, 0, lk), Tk.next();
        else if (0 != ik.len || ik.done) {
          if (Tk.done || ik.done) throw new Error("Mismatched change set lengths");
          {
            let kk = Math.min(Tk.len2, ik.len),
              Fk = Ik.length;
            if (-1 == Tk.ins) {
              let Fk = -1 == ik.ins ? -1 : ik.off ? 0 : ik.ins;
              bk(Ik, kk, Fk, lk), Xk && Fk && Rk(Xk, Ik, ik.text)
            } else - 1 == ik.ins ? (bk(Ik, Tk.off ? 0 : Tk.len, kk, lk), Xk && Rk(Xk, Ik, Tk.textBit(kk))) : (bk(Ik, Tk.off ? 0 : Tk.len, ik.off ? 0 : ik.ins, lk), Xk && !ik.off && Rk(Xk, Ik, ik.text));
            lk = (Tk.ins > kk || ik.ins >= 0 && ik.len > kk) && (lk || Ik.length > Fk), Tk.forward2(kk), ik.forward(kk)
          }
        } else bk(Ik, 0, ik.ins, lk), Xk && Rk(Xk, Ik, ik.text), ik.next()
      }
    }
    class ck {
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
        } = this.set, Fk = this.i - 2 >> 1;
        return Fk >= kk.length ? wk.empty : kk[Fk]
      }
      textBit(kk) {
        let {
          inserted: Fk
        } = this.set, Ik = this.i - 2 >> 1;
        return Ik >= Fk.length && !kk ? wk.empty : Fk[Ik].slice(this.off, null == kk ? void 0 : this.off + kk)
      }
      forward(kk) {
        kk == this.len ? this.next() : (this.len -= kk, this.off += kk)
      }
      forward2(kk) {
        -1 == this.ins ? this.forward(kk) : kk == this.ins ? this.next() : (this.ins -= kk, this.off += kk)
      }
    }
    class Wk {
      constructor(kk, Fk, Ik) {
        this.from = kk, this.to = Fk, this.flags = Ik
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
        let Fk, Ik, Xk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return this.empty ? Fk = Ik = kk.mapPos(this.from, Xk) : (Fk = kk.mapPos(this.from, 1), Ik = kk.mapPos(this.to, -1)), Fk == this.from && Ik == this.to ? this : new Wk(Fk, Ik, this.flags)
      }
      extend(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kk,
          Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (kk <= this.anchor && Fk >= this.anchor) return fk.range(kk, Fk, void 0, void 0, Ik);
        let Xk = Math.abs(kk - this.anchor) > Math.abs(Fk - this.anchor) ? kk : Fk;
        return fk.range(this.anchor, Xk, void 0, void 0, Ik)
      }
      eq(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.anchor == kk.anchor && this.head == kk.head && this.goalColumn == kk.goalColumn && (!Fk || !this.empty || this.assoc == kk.assoc)
      }
      toJSON() {
        return {
          anchor: this.anchor,
          head: this.head
        }
      }
      static fromJSON(kk) {
        if (!kk || "number" != typeof kk.anchor || "number" != typeof kk.head) throw new RangeError("Invalid JSON representation for SelectionRange");
        return fk.range(kk.anchor, kk.head)
      }
      static create(kk, Fk, Ik) {
        return new Wk(kk, Fk, Ik)
      }
    }
    class fk {
      constructor(kk, Fk) {
        this.nZ = kk, this.mainIndex = Fk
      }
      map(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return kk.empty ? this : fk.create(this.nZ.map((Ik => Ik.map(kk, Fk))), this.mainIndex)
      }
      eq(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.nZ.length != kk.nZ.length || this.mainIndex != kk.mainIndex) return !1;
        for (let Ik = 0; Ik < this.nZ.length; Ik++)
          if (!this.nZ[Ik].eq(kk.nZ[Ik], Fk)) return !1;
        return !0
      }
      get main() {
        return this.nZ[this.mainIndex]
      }
      asSingle() {
        return 1 == this.nZ.length ? this : new fk([this.main], 0)
      }
      addRange(kk) {
        let Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return fk.create([kk].concat(this.nZ), Fk ? 0 : this.mainIndex + 1)
      }
      replaceRange(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.mainIndex,
          Ik = this.nZ.slice();
        return Ik[Fk] = kk, fk.create(Ik, this.mainIndex)
      }
      toJSON() {
        return {
          nZ: this.nZ.map((kk => kk.toJSON())),
          main: this.mainIndex
        }
      }
      static fromJSON(kk) {
        if (!kk || !Array.isArray(kk.nZ) || "number" != typeof kk.main || kk.main >= kk.nZ.length) throw new RangeError("Invalid JSON representation for EditorSelection");
        return new fk(kk.nZ.map((kk => Wk.fromJSON(kk))), kk.main)
      }
      static single(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kk;
        return new fk([fk.range(kk, Fk)], 0)
      }
      static create(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (0 == kk.length) throw new RangeError("A selection needs at least one range");
        for (let Ik = 0, Xk = 0; Xk < kk.length; Xk++) {
          let Tk = kk[Xk];
          if (Tk.empty ? Tk.from <= Ik : Tk.from < Ik) return fk.normalized(kk.slice(), Fk);
          Ik = Tk.to
        }
        return new fk(kk, Fk)
      }
      static cursor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Ik = arguments.length > 2 ? arguments[2] : void 0,
          Xk = arguments.length > 3 ? arguments[3] : void 0;
        return Wk.create(kk, kk, (0 == Fk ? 0 : Fk < 0 ? 8 : 16) | (null == Ik ? 7 : Math.min(6, Ik)) | (null !== Xk && void 0 !== Xk ? Xk : 16777215) << 6)
      }
      static range(kk, Fk, Ik, Xk, Tk) {
        let ik = (null !== Ik && void 0 !== Ik ? Ik : 16777215) << 6 | (null == Xk ? 7 : Math.min(6, Xk));
        return Tk || kk == Fk || (Tk = Fk < kk ? 1 : -1), Fk < kk ? Wk.create(Fk, kk, 48 | ik) : Wk.create(kk, Fk, (Tk ? Tk < 0 ? 8 : 16 : 0) | ik)
      }
      static normalized(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Ik = kk[Fk];
        kk.sort(((kk, Fk) => kk.from - Fk.from)), Fk = kk.indexOf(Ik);
        for (let Xk = 1; Xk < kk.length; Xk++) {
          let Ik = kk[Xk],
            Tk = kk[Xk - 1];
          if (Ik.empty ? Ik.from <= Tk.to : Ik.from < Tk.to) {
            let ik = Tk.from,
              yk = Math.max(Ik.to, Tk.to);
            Xk <= Fk && Fk--, kk.splice(--Xk, 2, Ik.anchor > Ik.head ? fk.range(yk, ik) : fk.range(ik, yk))
          }
        }
        return new fk(kk, Fk)
      }
    }

    function Bk(kk, Fk) {
      for (let Ik of kk.nZ)
        if (Ik.to > Fk) throw new RangeError("Selection points outside of document")
    }
    let dk = 0;
    class Yk {
      constructor(kk, Fk, Ik, Xk, Tk) {
        this.combine = kk, this.compareInput = Fk, this.compare = Ik, this.isStatic = Xk, this.id = dk++, this.default = kk([]), this.extensions = "function" == typeof Tk ? Tk(this) : Tk
      }
      get reader() {
        return this
      }
      static define() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return new Yk(kk.combine || (kk => kk), kk.compareInput || ((kk, Fk) => kk === Fk), kk.compare || (kk.combine ? (kk, Fk) => kk === Fk : Ak), !!kk.static, kk.enables)
      }
      of(kk) {
        return new gk([], this, 0, kk)
      }
      compute(kk, Fk) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new gk(kk, this, 1, Fk)
      }
      computeN(kk, Fk) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new gk(kk, this, 2, Fk)
      }
      from(kk, Fk) {
        return Fk || (Fk = kk => kk), this.compute([kk], (Ik => Fk(Ik.field(kk))))
      }
    }

    function Ak(kk, Fk) {
      return kk == Fk || kk.length == Fk.length && kk.every(((kk, Ik) => kk === Fk[Ik]))
    }
    class gk {
      constructor(kk, Fk, Ik, Xk) {
        this.dependencies = kk, this.facet = Fk, this.type = Ik, this.value = Xk, this.id = dk++
      }
      dynamicSlot(kk) {
        var Fk;
        let Ik = this.value,
          Xk = this.facet.compareInput,
          Tk = this.id,
          ik = kk[Tk] >> 1,
          yk = 2 == this.type,
          lk = !1,
          ak = !1,
          qk = [];
        for (let Lk of this.dependencies) "doc" == Lk ? lk = !0 : "selection" == Lk ? ak = !0 : 0 == (1 & (null !== (Fk = kk[Lk.id]) && void 0 !== Fk ? Fk : 1)) && qk.push(kk[Lk.id]);
        return {
          create: kk => (kk.values[ik] = Ik(kk), 1),
          update(kk, Fk) {
            if (lk && Fk.docChanged || ak && (Fk.docChanged || Fk.selection) || hk(kk, qk)) {
              let Fk = Ik(kk);
              if (yk ? !mk(Fk, kk.values[ik], Xk) : !Xk(Fk, kk.values[ik])) return kk.values[ik] = Fk, 1
            }
            return 0
          },
          reconfigure: (kk, Fk) => {
            let lk, ak = Fk.config.address[Tk];
            if (null != ak) {
              let Tk = tF(Fk, ak);
              if (this.dependencies.every((Ik => Ik instanceof Yk ? Fk.facet(Ik) === kk.facet(Ik) : !(Ik instanceof Mk) || Fk.field(Ik, !1) == kk.field(Ik, !1))) || (yk ? mk(lk = Ik(kk), Tk, Xk) : Xk(lk = Ik(kk), Tk))) return kk.values[ik] = Tk, 0
            } else lk = Ik(kk);
            return kk.values[ik] = lk, 1
          }
        }
      }
    }

    function mk(kk, Fk, Ik) {
      if (kk.length != Fk.length) return !1;
      for (let Xk = 0; Xk < kk.length; Xk++)
        if (!Ik(kk[Xk], Fk[Xk])) return !1;
      return !0
    }

    function hk(kk, Fk) {
      let Ik = !1;
      for (let Xk of Fk) 1 & LF(kk, Xk) && (Ik = !0);
      return Ik
    }

    function rk(kk, Fk, Ik) {
      let Xk = Ik.map((Fk => kk[Fk.id])),
        Tk = Ik.map((kk => kk.type)),
        ik = Xk.filter((kk => !(1 & kk))),
        yk = kk[Fk.id] >> 1;

      function lk(kk) {
        let Ik = [];
        for (let Fk = 0; Fk < Xk.length; Fk++) {
          let ik = tF(kk, Xk[Fk]);
          if (2 == Tk[Fk])
            for (let kk of ik) Ik.push(kk);
          else Ik.push(ik)
        }
        return Fk.combine(Ik)
      }
      return {
        create(kk) {
          for (let Fk of Xk) LF(kk, Fk);
          return kk.values[yk] = lk(kk), 1
        },
        update(kk, Ik) {
          if (!hk(kk, ik)) return 0;
          let Xk = lk(kk);
          return Fk.compare(Xk, kk.values[yk]) ? 0 : (kk.values[yk] = Xk, 1)
        },
        reconfigure(kk, Tk) {
          let ik = hk(kk, Xk),
            ak = Tk.config.facets[Fk.id],
            qk = Tk.facet(Fk);
          if (ak && !ik && Ak(Ik, ak)) return kk.values[yk] = qk, 0;
          let Lk = lk(kk);
          return Fk.compare(Lk, qk) ? (kk.values[yk] = qk, 0) : (kk.values[yk] = Lk, 1)
        }
      }
    }
    const Dk = Yk.define({
      static: !0
    });
    class Mk {
      constructor(kk, Fk, Ik, Xk, Tk) {
        this.id = kk, this.createF = Fk, this.updateF = Ik, this.compareF = Xk, this.spec = Tk, this.provides = void 0
      }
      static define(kk) {
        let Fk = new Mk(dk++, kk.create, kk.update, kk.compare || ((kk, Fk) => kk === Fk), kk);
        return kk.provide && (Fk.provides = kk.provide(Fk)), Fk
      }
      create(kk) {
        let Fk = kk.facet(Dk).find((kk => kk.field == this));
        return ((null === Fk || void 0 === Fk ? void 0 : Fk.create) || this.createF)(kk)
      }
      slot(kk) {
        let Fk = kk[this.id] >> 1;
        return {
          create: kk => (kk.values[Fk] = this.create(kk), 1),
          update: (kk, Ik) => {
            let Xk = kk.values[Fk],
              Tk = this.updateF(Xk, Ik);
            return this.compareF(Xk, Tk) ? 0 : (kk.values[Fk] = Tk, 1)
          },
          reconfigure: (kk, Ik) => {
            let Xk, Tk = kk.facet(Dk),
              ik = Ik.facet(Dk);
            return (Xk = Tk.find((kk => kk.field == this))) && Xk != ik.find((kk => kk.field == this)) ? (kk.values[Fk] = Xk.create(kk), 1) : null != Ik.config.address[this.id] ? (kk.values[Fk] = Ik.field(this), 0) : (kk.values[Fk] = this.create(kk), 1)
          }
        }
      }
      init(kk) {
        return [this, Dk.of({
          field: this,
          create: kk
        })]
      }
      get extension() {
        return this
      }
    }
    const kF = 4,
      FF = 3,
      IF = 2,
      XF = 1;

    function TF(kk) {
      return Fk => new yF(Fk, kk)
    }
    const iF = {
      highest: TF(0),
      high: TF(XF),
      default: TF(IF),
      low: TF(FF),
      lowest: TF(kF)
    };
    class yF {
      constructor(kk, Fk) {
        this.inner = kk, this.prec = Fk
      }
    }
    class lF {
      of(kk) {
        return new aF(this, kk)
      }
      reconfigure(kk) {
        return lF.reconfigure.of({
          compartment: this,
          extension: kk
        })
      }
      get(kk) {
        return kk.config.compartments.get(this)
      }
    }
    class aF {
      constructor(kk, Fk) {
        this.compartment = kk, this.inner = Fk
      }
    }
    class qF {
      constructor(kk, Fk, Ik, Xk, Tk, ik) {
        for (this.base = kk, this.compartments = Fk, this.dynamicSlots = Ik, this.address = Xk, this.staticValues = Tk, this.facets = ik, this.statusTemplate = []; this.statusTemplate.length < Ik.length;) this.statusTemplate.push(0)
      }
      staticFacet(kk) {
        let Fk = this.address[kk.id];
        return null == Fk ? kk.default : this.staticValues[Fk >> 1]
      }
      static resolve(kk, Fk, Ik) {
        let Xk = [],
          Tk = Object.create(null),
          ik = new Map;
        for (let tk of function(kk, Fk, Ik) {
            let Xk = [
                [],
                [],
                [],
                [],
                []
              ],
              Tk = new Map;

            function ik(kk, yk) {
              let lk = Tk.get(kk);
              if (null != lk) {
                if (lk <= yk) return;
                let Fk = Xk[lk].indexOf(kk);
                Fk > -1 && Xk[lk].splice(Fk, 1), kk instanceof aF && Ik.delete(kk.compartment)
              }
              if (Tk.set(kk, yk), Array.isArray(kk))
                for (let Fk of kk) ik(Fk, yk);
              else if (kk instanceof aF) {
                if (Ik.has(kk.compartment)) throw new RangeError("Duplicate use of compartment in extensions");
                let Xk = Fk.get(kk.compartment) || kk.inner;
                Ik.set(kk.compartment, Xk), ik(Xk, yk)
              } else if (kk instanceof yF) ik(kk.inner, kk.prec);
              else if (kk instanceof Mk) Xk[yk].push(kk), kk.provides && ik(kk.provides, yk);
              else if (kk instanceof gk) Xk[yk].push(kk), kk.facet.extensions && ik(kk.facet.extensions, IF);
              else {
                let Fk = kk.extension;
                if (!Fk) throw new Error(`Unrecognized extension value in extension set (${kk}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
                ik(Fk, yk)
              }
            }
            return ik(kk, IF), Xk.reduce(((kk, Fk) => kk.concat(Fk)))
          }(kk, Fk, ik)) tk instanceof Mk ? Xk.push(tk) : (Tk[tk.facet.id] || (Tk[tk.facet.id] = [])).push(tk);
        let yk = Object.create(null),
          lk = [],
          ak = [];
        for (let tk of Xk) yk[tk.id] = ak.length << 1, ak.push((kk => tk.slot(kk)));
        let qk = null === Ik || void 0 === Ik ? void 0 : Ik.config.facets;
        for (let tk in Tk) {
          let kk = Tk[tk],
            Fk = kk[0].facet,
            Xk = qk && qk[tk] || [];
          if (kk.every((kk => 0 == kk.type)))
            if (yk[Fk.id] = lk.length << 1 | 1, Ak(Xk, kk)) lk.push(Ik.facet(Fk));
            else {
              let Xk = Fk.combine(kk.map((kk => kk.value)));
              lk.push(Ik && Fk.compare(Xk, Ik.facet(Fk)) ? Ik.facet(Fk) : Xk)
            }
          else {
            for (let Fk of kk) 0 == Fk.type ? (yk[Fk.id] = lk.length << 1 | 1, lk.push(Fk.value)) : (yk[Fk.id] = ak.length << 1, ak.push((kk => Fk.dynamicSlot(kk))));
            yk[Fk.id] = ak.length << 1, ak.push((Ik => rk(Ik, Fk, kk)))
          }
        }
        let Lk = ak.map((kk => kk(yk)));
        return new qF(kk, ik, Lk, yk, lk, Tk)
      }
    }

    function LF(kk, Fk) {
      if (1 & Fk) return 2;
      let Ik = Fk >> 1,
        Xk = kk.status[Ik];
      if (4 == Xk) throw new Error("Cyclic dependency between fields and/or facets");
      if (2 & Xk) return Xk;
      kk.status[Ik] = 4;
      let Tk = kk.computeSlot(kk, kk.config.dynamicSlots[Ik]);
      return kk.status[Ik] = 2 | Tk
    }

    function tF(kk, Fk) {
      return 1 & Fk ? kk.config.staticValues[Fk >> 1] : kk.values[Fk >> 1]
    }
    const ZF = Yk.define(),
      jF = Yk.define({
        combine: kk => kk.some((kk => kk)),
        static: !0
      }),
      eF = Yk.define({
        combine: kk => kk.length ? kk[0] : void 0,
        static: !0
      }),
      wF = Yk.define(),
      HF = Yk.define(),
      JF = Yk.define(),
      xF = Yk.define({
        combine: kk => !!kk.length && kk[0]
      });
    class PF {
      constructor(kk, Fk) {
        this.type = kk, this.value = Fk
      }
      static define() {
        return new KF
      }
    }
    class KF {
      of(kk) {
        return new PF(this, kk)
      }
    }
    class QF {
      constructor(kk) {
        this.map = kk
      }
      of(kk) {
        return new sF(this, kk)
      }
    }
    class sF {
      constructor(kk, Fk) {
        this.type = kk, this.value = Fk
      }
      map(kk) {
        let Fk = this.type.map(this.value, kk);
        return void 0 === Fk ? void 0 : Fk == this.value ? this : new sF(this.type, Fk)
      }
      is(kk) {
        return this.type == kk
      }
      static define() {
        return new QF((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).map || (kk => kk))
      }
      static mapEffects(kk, Fk) {
        if (!kk.length) return kk;
        let Ik = [];
        for (let Xk of kk) {
          let kk = Xk.map(Fk);
          kk && Ik.push(kk)
        }
        return Ik
      }
    }
    sF.reconfigure = sF.define(), sF.appendConfig = sF.define();
    class VF {
      constructor(kk, Fk, Ik, Xk, Tk, ik) {
        this.startState = kk, this.changes = Fk, this.selection = Ik, this.effects = Xk, this.annotations = Tk, this.scrollIntoView = ik, this._doc = null, this._state = null, Ik && Bk(Ik, Fk.newLength), Tk.some((kk => kk.type == VF.time)) || (this.annotations = Tk.concat(VF.time.of(Date.now())))
      }
      static create(kk, Fk, Ik, Xk, Tk, ik) {
        return new VF(kk, Fk, Ik, Xk, Tk, ik)
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
        for (let Fk of this.annotations)
          if (Fk.type == kk) return Fk.value
      }
      get docChanged() {
        return !this.changes.empty
      }
      get reconfigured() {
        return this.startState.config != this.state.config
      }
      isUserEvent(kk) {
        let Fk = this.annotation(VF.userEvent);
        return !(!Fk || !(Fk == kk || Fk.length > kk.length && Fk.slice(0, kk.length) == kk && "." == Fk[kk.length]))
      }
    }

    function zF(kk, Fk) {
      let Ik = [];
      for (let Xk = 0, Tk = 0;;) {
        let ik, yk;
        if (Xk < kk.length && (Tk == Fk.length || Fk[Tk] >= kk[Xk])) ik = kk[Xk++], yk = kk[Xk++];
        else {
          if (!(Tk < Fk.length)) return Ik;
          ik = Fk[Tk++], yk = Fk[Tk++]
        }!Ik.length || Ik[Ik.length - 1] < ik ? Ik.push(ik, yk) : Ik[Ik.length - 1] < yk && (Ik[Ik.length - 1] = yk)
      }
    }

    function SF(kk, Fk, Ik) {
      var Xk;
      let Tk, ik, yk;
      return Ik ? (Tk = Fk.changes, ik = uk.empty(Fk.changes.length), yk = kk.changes.compose(Fk.changes)) : (Tk = Fk.changes.map(kk.changes), ik = kk.changes.mapDesc(Fk.changes, !0), yk = kk.changes.compose(Tk)), {
        changes: yk,
        selection: Fk.selection ? Fk.selection.map(ik) : null === (Xk = kk.selection) || void 0 === Xk ? void 0 : Xk.map(Tk),
        effects: sF.mapEffects(kk.effects, Tk).concat(sF.mapEffects(Fk.effects, ik)),
        annotations: kk.annotations.length ? kk.annotations.concat(Fk.annotations) : Fk.annotations,
        scrollIntoView: kk.scrollIntoView || Fk.scrollIntoView
      }
    }

    function oF(kk, Fk, Ik) {
      let Xk = Fk.selection,
        Tk = OF(Fk.annotations);
      return Fk.userEvent && (Tk = Tk.concat(VF.userEvent.of(Fk.userEvent))), {
        changes: Fk.changes instanceof uk ? Fk.changes : uk.of(Fk.changes || [], Ik, kk.facet(eF)),
        selection: Xk && (Xk instanceof fk ? Xk : fk.single(Xk.anchor, Xk.head)),
        effects: OF(Fk.effects),
        annotations: Tk,
        scrollIntoView: !!Fk.scrollIntoView
      }
    }

    function vF(kk, Fk, Ik) {
      let Xk = oF(kk, Fk.length ? Fk[0] : {}, kk.doc.length);
      Fk.length && !1 === Fk[0].filter && (Ik = !1);
      for (let ik = 1; ik < Fk.length; ik++) {
        !1 === Fk[ik].filter && (Ik = !1);
        let Tk = !!Fk[ik].sequential;
        Xk = SF(Xk, oF(kk, Fk[ik], Tk ? Xk.changes.newLength : kk.doc.length), Tk)
      }
      let Tk = VF.create(kk, Xk.changes, Xk.selection, Xk.effects, Xk.annotations, Xk.scrollIntoView);
      return function(kk) {
        let Fk = kk.startState,
          Ik = Fk.facet(JF),
          Xk = kk;
        for (let Tk = Ik.length - 1; Tk >= 0; Tk--) {
          let ik = Ik[Tk](kk);
          ik && Object.keys(ik).length && (Xk = SF(Xk, oF(Fk, ik, kk.changes.newLength), !0))
        }
        return Xk == kk ? kk : VF.create(Fk, kk.changes, kk.selection, Xk.effects, Xk.annotations, Xk.scrollIntoView)
      }(Ik ? function(kk) {
        let Fk = kk.startState,
          Ik = !0;
        for (let Tk of Fk.facet(wF)) {
          let Fk = Tk(kk);
          if (!1 === Fk) {
            Ik = !1;
            break
          }
          Array.isArray(Fk) && (Ik = !0 === Ik ? Fk : zF(Ik, Fk))
        }
        if (!0 !== Ik) {
          let Xk, Tk;
          if (!1 === Ik) Tk = kk.changes.invertedDesc, Xk = uk.empty(Fk.doc.length);
          else {
            let Fk = kk.changes.filter(Ik);
            Xk = Fk.changes, Tk = Fk.filtered.mapDesc(Fk.changes).invertedDesc
          }
          kk = VF.create(Fk, Xk, kk.selection && kk.selection.map(Tk), sF.mapEffects(kk.effects, Tk), kk.annotations, kk.scrollIntoView)
        }
        let Xk = Fk.facet(HF);
        for (let Tk = Xk.length - 1; Tk >= 0; Tk--) {
          let Ik = Xk[Tk](kk);
          kk = Ik instanceof VF ? Ik : Array.isArray(Ik) && 1 == Ik.length && Ik[0] instanceof VF ? Ik[0] : vF(Fk, OF(Ik), !1)
        }
        return kk
      }(Tk) : Tk)
    }
    VF.time = PF.define(), VF.userEvent = PF.define(), VF.addToHistory = PF.define(), VF.remote = PF.define();
    const EF = [];

    function OF(kk) {
      return null == kk ? EF : Array.isArray(kk) ? kk : [kk]
    }
    var nF = function(kk) {
      return kk[kk.Word = 0] = "Word", kk[kk.Space = 1] = "Space", kk[kk.Other = 2] = "Other", kk
    }(nF || (nF = {}));
    const GF = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
    let pF;
    try {
      pF = new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u")
    } catch (XI) {}

    function uF(kk) {
      return Fk => {
        if (!/\S/.test(Fk)) return nF.Space;
        if (function(kk) {
            if (pF) return pF.test(kk);
            for (let Fk = 0; Fk < kk.length; Fk++) {
              let Ik = kk[Fk];
              if (/\w/.test(Ik) || Ik > "\x80" && (Ik.toUpperCase() != Ik.toLowerCase() || GF.test(Ik))) return !0
            }
            return !1
          }(Fk)) return nF.Word;
        for (let Ik = 0; Ik < kk.length; Ik++)
          if (Fk.indexOf(kk[Ik]) > -1) return nF.Word;
        return nF.Other
      }
    }
    class bF {
      constructor(kk, Fk, Ik, Xk, Tk, ik) {
        this.config = kk, this.doc = Fk, this.selection = Ik, this.values = Xk, this.status = kk.statusTemplate.slice(), this.computeSlot = Tk, ik && (ik._state = this);
        for (let yk = 0; yk < this.config.dynamicSlots.length; yk++) LF(this, yk << 1);
        this.computeSlot = null
      }
      field(kk) {
        let Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Ik = this.config.address[kk.id];
        if (null != Ik) return LF(this, Ik), tF(this, Ik);
        if (Fk) throw new RangeError("Field is not present in this state")
      }
      update() {
        for (var kk = arguments.length, Fk = new Array(kk), Ik = 0; Ik < kk; Ik++) Fk[Ik] = arguments[Ik];
        return vF(this, Fk, !0)
      }
      applyTransaction(kk) {
        let Fk, Ik = this.config,
          {
            base: Xk,
            compartments: Tk
          } = Ik;
        for (let yk of kk.effects) yk.is(lF.reconfigure) ? (Ik && (Tk = new Map, Ik.compartments.forEach(((kk, Fk) => Tk.set(Fk, kk))), Ik = null), Tk.set(yk.value.compartment, yk.value.extension)) : yk.is(sF.reconfigure) ? (Ik = null, Xk = yk.value) : yk.is(sF.appendConfig) && (Ik = null, Xk = OF(Xk).concat(yk.value));
        if (Ik) Fk = kk.startState.values.slice();
        else {
          Ik = qF.resolve(Xk, Tk, this), Fk = new bF(Ik, this.doc, this.selection, Ik.dynamicSlots.map((() => null)), ((kk, Fk) => Fk.reconfigure(kk, this)), null).values
        }
        let ik = kk.startState.facet(jF) ? kk.newSelection : kk.newSelection.asSingle();
        new bF(Ik, kk.newDoc, ik, Fk, ((Fk, Ik) => Ik.update(Fk, kk)), kk)
      }
      replaceSelection(kk) {
        return "string" == typeof kk && (kk = this.toText(kk)), this.changeByRange((Fk => ({
          changes: {
            from: Fk.from,
            to: Fk.to,
            insert: kk
          },
          range: fk.cursor(Fk.from + kk.length)
        })))
      }
      changeByRange(kk) {
        let Fk = this.selection,
          Ik = kk(Fk.nZ[0]),
          Xk = this.changes(Ik.changes),
          Tk = [Ik.range],
          ik = OF(Ik.effects);
        for (let yk = 1; yk < Fk.nZ.length; yk++) {
          let Ik = kk(Fk.nZ[yk]),
            lk = this.changes(Ik.changes),
            ak = lk.map(Xk);
          for (let kk = 0; kk < yk; kk++) Tk[kk] = Tk[kk].map(ak);
          let qk = Xk.mapDesc(lk, !0);
          Tk.push(Ik.range.map(qk)), Xk = Xk.compose(ak), ik = sF.mapEffects(ik, ak).concat(sF.mapEffects(OF(Ik.effects), qk))
        }
        return {
          changes: Xk,
          selection: fk.create(Tk, Fk.mainIndex),
          effects: ik
        }
      }
      changes() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return kk instanceof uk ? kk : uk.of(kk, this.doc.length, this.facet(bF.lineSeparator))
      }
      toText(kk) {
        return wk.of(kk.split(this.facet(bF.lineSeparator) || nk))
      }
      sliceDoc() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.doc.length;
        return this.doc.sliceString(kk, Fk, this.lineBreak)
      }
      facet(kk) {
        let Fk = this.config.address[kk.id];
        return null == Fk ? kk.default : (LF(this, Fk), tF(this, Fk))
      }
      toJSON(kk) {
        let Fk = {
          doc: this.sliceDoc(),
          selection: this.selection.toJSON()
        };
        if (kk)
          for (let Ik in kk) {
            let Xk = kk[Ik];
            Xk instanceof Mk && null != this.config.address[Xk.id] && (Fk[Ik] = Xk.spec.toJSON(this.field(kk[Ik]), this))
          }
        return Fk
      }
      static fromJSON(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          Ik = arguments.length > 2 ? arguments[2] : void 0;
        if (!kk || "string" != typeof kk.doc) throw new RangeError("Invalid JSON representation for EditorState");
        let Xk = [];
        if (Ik)
          for (let Tk in Ik)
            if (Object.prototype.hasOwnProperty.call(kk, Tk)) {
              let Fk = Ik[Tk],
                ik = kk[Tk];
              Xk.push(Fk.init((kk => Fk.spec.fromJSON(ik, kk))))
            } return bF.create({
          doc: kk.doc,
          selection: fk.fromJSON(kk.selection),
          extensions: Fk.extensions ? Xk.concat([Fk.extensions]) : Xk
        })
      }
      static create() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          Fk = qF.resolve(kk.extensions || [], new Map),
          Ik = kk.doc instanceof wk ? kk.doc : wk.of((kk.doc || "").split(Fk.staticFacet(bF.lineSeparator) || nk)),
          Xk = kk.selection ? kk.selection instanceof fk ? kk.selection : fk.single(kk.selection.anchor, kk.selection.head) : fk.single(0);
        return Bk(Xk, Ik.length), Fk.staticFacet(jF) || (Xk = Xk.asSingle()), new bF(Fk, Ik, Xk, Fk.dynamicSlots.map((() => null)), ((kk, Fk) => Fk.create(kk)), null)
      }
      get tabSize() {
        return this.facet(bF.tabSize)
      }
      get lineBreak() {
        return this.facet(bF.lineSeparator) || "\n"
      }
      get readOnly() {
        return this.facet(xF)
      }
      phrase(kk) {
        for (var Fk = arguments.length, Ik = new Array(Fk > 1 ? Fk - 1 : 0), Xk = 1; Xk < Fk; Xk++) Ik[Xk - 1] = arguments[Xk];
        for (let Tk of this.facet(bF.phrases))
          if (Object.prototype.hasOwnProperty.call(Tk, kk)) {
            kk = Tk[kk];
            break
          } return Ik.length && (kk = kk.replace(/\$(\$|\d*)/g, ((kk, Fk) => {
          if ("$" == Fk) return "$";
          let Xk = +(Fk || 1);
          return !Xk || Xk > Ik.length ? kk : Ik[Xk - 1]
        }))), kk
      }
      languageDataAt(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          Xk = [];
        for (let Tk of this.facet(ZF))
          for (let ik of Tk(this, Fk, Ik)) Object.prototype.hasOwnProperty.call(ik, kk) && Xk.push(ik[kk]);
        return Xk
      }
      charCategorizer(kk) {
        let Fk = this.languageDataAt("wordChars", kk);
        return uF(Fk.length ? Fk[0] : "")
      }
      wordAt(kk) {
        let {
          text: Fk,
          from: Ik,
          length: Xk
        } = this.doc.lineAt(kk), Tk = this.charCategorizer(kk), ik = kk - Ik, yk = kk - Ik;
        for (; ik > 0;) {
          let kk = Sk(Fk, ik, !1);
          if (Tk(Fk.slice(kk, ik)) != nF.Word) break;
          ik = kk
        }
        for (; yk < Xk;) {
          let kk = Sk(Fk, yk);
          if (Tk(Fk.slice(yk, kk)) != nF.Word) break;
          yk = kk
        }
        return ik == yk ? null : fk.range(ik + Ik, yk + Ik)
      }
    }

    function RF(kk, Fk) {
      let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        Xk = {};
      for (let Tk of kk)
        for (let kk of Object.keys(Tk)) {
          let Fk = Tk[kk],
            ik = Xk[kk];
          if (void 0 === ik) Xk[kk] = Fk;
          else if (ik === Fk || void 0 === Fk);
          else {
            if (!Object.hasOwnProperty.call(Ik, kk)) throw new Error("Config merge conflict for field " + kk);
            Xk[kk] = Ik[kk](ik, Fk)
          }
        }
      for (let Tk in Fk) void 0 === Xk[Tk] && (Xk[Tk] = Fk[Tk]);
      return Xk
    }
    bF.allowMultipleSelections = jF, bF.tabSize = Yk.define({
      combine: kk => kk.length ? kk[0] : 4
    }), bF.lineSeparator = eF, bF.readOnly = xF, bF.phrases = Yk.define({
      compare(kk, Fk) {
        let Ik = Object.keys(kk),
          Xk = Object.keys(Fk);
        return Ik.length == Xk.length && Ik.every((Ik => kk[Ik] == Fk[Ik]))
      }
    }), bF.languageData = ZF, bF.changeFilter = wF, bF.transactionFilter = HF, bF.transactionExtender = JF, lF.reconfigure = sF.define();
    class UF {
      eq(kk) {
        return this == kk
      }
      range(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kk;
        return NF.create(kk, Fk, this)
      }
    }

    function CF(kk, Fk) {
      return kk == Fk || kk.constructor == Fk.constructor && kk.eq(Fk)
    }
    UF.prototype.startSide = UF.prototype.endSide = 0, UF.prototype.point = !1, UF.prototype.mapMode = Gk.TrackDel;
    class NF {
      constructor(kk, Fk, Ik) {
        this.from = kk, this.to = Fk, this.value = Ik
      }
      static create(kk, Fk, Ik) {
        return new NF(kk, Fk, Ik)
      }
    }

    function cF(kk, Fk) {
      return kk.from - Fk.from || kk.value.startSide - Fk.value.startSide
    }
    class WF {
      constructor(kk, Fk, Ik, Xk) {
        this.from = kk, this.to = Fk, this.value = Ik, this.tXk = Xk
      }
      get length() {
        return this.to[this.to.length - 1]
      }
      findIndex(kk, Fk, Ik) {
        let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Tk = Ik ? this.to : this.from;
        for (let ik = Xk, yk = Tk.length;;) {
          if (ik == yk) return ik;
          let Xk = ik + yk >> 1,
            lk = Tk[Xk] - kk || (Ik ? this.value[Xk].endSide : this.value[Xk].startSide) - Fk;
          if (Xk == ik) return lk >= 0 ? ik : yk;
          lk >= 0 ? yk = Xk : ik = Xk + 1
        }
      }
      between(kk, Fk, Ik, Xk) {
        for (let Tk = this.findIndex(Fk, -1e9, !0), ik = this.findIndex(Ik, 1e9, !1, Tk); Tk < ik; Tk++)
          if (!1 === Xk(this.from[Tk] + kk, this.to[Tk] + kk, this.value[Tk])) return !1
      }
      map(kk, Fk) {
        let Ik = [],
          Xk = [],
          Tk = [],
          ik = -1,
          yk = -1;
        for (let lk = 0; lk < this.value.length; lk++) {
          let ak, qk, Lk = this.value[lk],
            tk = this.from[lk] + kk,
            Zk = this.to[lk] + kk;
          if (tk == Zk) {
            let kk = Fk.mapPos(tk, Lk.startSide, Lk.mapMode);
            if (null == kk) continue;
            if (ak = qk = kk, Lk.startSide != Lk.endSide && (qk = Fk.mapPos(tk, Lk.endSide), qk < ak)) continue
          } else if (ak = Fk.mapPos(tk, Lk.startSide), qk = Fk.mapPos(Zk, Lk.endSide), ak > qk || ak == qk && Lk.startSide > 0 && Lk.endSide <= 0) continue;
          (qk - ak || Lk.endSide - Lk.startSide) < 0 || (ik < 0 && (ik = ak), Lk.point && (yk = Math.max(yk, qk - ak)), Ik.push(Lk), Xk.push(ak - ik), Tk.push(qk - ik))
        }
        return {
          mapped: Ik.length ? new WF(Xk, Tk, Ik, yk) : null,
          pos: ik
        }
      }
    }
    class fF {
      constructor(kk, Fk, Ik, Xk) {
        this.chunkPos = kk, this.chunk = Fk, this.nextLayer = Ik, this.tXk = Xk
      }
      static create(kk, Fk, Ik, Xk) {
        return new fF(kk, Fk, Ik, Xk)
      }
      get length() {
        let kk = this.chunk.length - 1;
        return kk < 0 ? 0 : Math.max(this.chunkEnd(kk), this.nextLayer.length)
      }
      get size() {
        if (this.ye) return 0;
        let kk = this.nextLayer.size;
        for (let Fk of this.chunk) kk += Fk.value.length;
        return kk
      }
      chunkEnd(kk) {
        return this.chunkPos[kk] + this.chunk[kk].length
      }
      update(kk) {
        let {
          add: Fk = [],
          sort: Ik = !1,
          filterFrom: Xk = 0,
          filterTo: Tk = this.length
        } = kk, ik = kk.filter;
        if (0 == Fk.length && !ik) return this;
        if (Ik && (Fk = Fk.slice().sort(cF)), this.ye) return Fk.length ? fF.of(Fk) : this;
        let yk = new YF(this, null, -1).goto(0),
          lk = 0,
          ak = [],
          qk = new BF;
        for (; yk.value || lk < Fk.length;)
          if (lk < Fk.length && (yk.from - Fk[lk].from || yk.startSide - Fk[lk].value.startSide) >= 0) {
            let kk = Fk[lk++];
            qk.addInner(kk.from, kk.to, kk.value) || ak.push(kk)
          } else 1 == yk.rangeIndex && yk.chunkIndex < this.chunk.length && (lk == Fk.length || this.chunkEnd(yk.chunkIndex) < Fk[lk].from) && (!ik || Xk > this.chunkEnd(yk.chunkIndex) || Tk < this.chunkPos[yk.chunkIndex]) && qk.addChunk(this.chunkPos[yk.chunkIndex], this.chunk[yk.chunkIndex]) ? yk.nextChunk() : ((!ik || Xk > yk.to || Tk < yk.from || ik(yk.from, yk.to, yk.value)) && (qk.addInner(yk.from, yk.to, yk.value) || ak.push(NF.create(yk.from, yk.to, yk.value))), yk.next());
        return qk.finishInner(this.nextLayer.ye && !ak.length ? fF.empty : this.nextLayer.update({
          add: ak,
          filter: ik,
          filterFrom: Xk,
          filterTo: Tk
        }))
      }
      map(kk) {
        if (kk.empty || this.ye) return this;
        let Fk = [],
          Ik = [],
          Xk = -1;
        for (let ik = 0; ik < this.chunk.length; ik++) {
          let Tk = this.chunkPos[ik],
            yk = this.chunk[ik],
            lk = kk.touchesRange(Tk, Tk + yk.length);
          if (!1 === lk) Xk = Math.max(Xk, yk.tXk), Fk.push(yk), Ik.push(kk.mapPos(Tk));
          else if (!0 === lk) {
            let {
              mapped: ik,
              pos: lk
            } = yk.map(Tk, kk);
            ik && (Xk = Math.max(Xk, ik.tXk), Fk.push(ik), Ik.push(lk))
          }
        }
        let Tk = this.nextLayer.map(kk);
        return 0 == Fk.length ? Tk : new fF(Ik, Fk, Tk || fF.empty, Xk)
      }
      between(kk, Fk, Ik) {
        if (!this.ye) {
          for (let Xk = 0; Xk < this.chunk.length; Xk++) {
            let Tk = this.chunkPos[Xk],
              ik = this.chunk[Xk];
            if (Fk >= Tk && kk <= Tk + ik.length && !1 === ik.between(Tk, kk - Tk, Fk - Tk, Ik)) return
          }
          this.nextLayer.between(kk, Fk, Ik)
        }
      }
      iter() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return AF.from([this]).goto(kk)
      }
      get ye() {
        return this.nextLayer == this
      }
      static iter(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return AF.from(kk).goto(Fk)
      }
      static compare(kk, Fk, Ik, Xk) {
        let Tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1,
          ik = kk.filter((kk => kk.tXk > 0 || !kk.ye && kk.tXk >= Tk)),
          yk = Fk.filter((kk => kk.tXk > 0 || !kk.ye && kk.tXk >= Tk)),
          lk = dF(ik, yk, Ik),
          ak = new mF(ik, lk, Tk),
          qk = new mF(yk, lk, Tk);
        Ik.iterGaps(((kk, Fk, Ik) => hF(ak, kk, qk, Fk, Ik, Xk))), Ik.empty && 0 == Ik.length && hF(ak, 0, qk, 0, 0, Xk)
      }
      static eq(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Xk = arguments.length > 3 ? arguments[3] : void 0;
        null == Xk && (Xk = 999999999);
        let Tk = kk.filter((kk => !kk.ye && Fk.indexOf(kk) < 0)),
          ik = Fk.filter((Fk => !Fk.ye && kk.indexOf(Fk) < 0));
        if (Tk.length != ik.length) return !1;
        if (!Tk.length) return !0;
        let yk = dF(Tk, ik),
          lk = new mF(Tk, yk, 0).goto(Ik),
          ak = new mF(ik, yk, 0).goto(Ik);
        for (;;) {
          if (lk.to != ak.to || !rF(lk.active, ak.active) || lk.point && (!ak.point || !CF(lk.point, ak.point))) return !1;
          if (lk.to > Xk) return !0;
          lk.next(), ak.next()
        }
      }
      static spans(kk, Fk, Ik, Xk) {
        let Tk = new mF(kk, null, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1).goto(Fk),
          ik = Fk,
          yk = Tk.openStart;
        for (;;) {
          let kk = Math.min(Tk.to, Ik);
          if (Tk.point) {
            let Ik = Tk.activeForPoint(Tk.to),
              lk = Tk.pointFrom < Fk ? Ik.length + 1 : Tk.point.startSide < 0 ? Ik.length : Math.min(Ik.length, yk);
            Xk.point(ik, kk, Tk.point, Ik, lk, Tk.pointRank), yk = Math.min(Tk.openEnd(kk), Ik.length)
          } else kk > ik && (Xk.span(ik, kk, Tk.active, yk), yk = Tk.openEnd(kk));
          if (Tk.to > Ik) return yk + (Tk.point && Tk.to > Ik ? 1 : 0);
          ik = Tk.to, Tk.next()
        }
      }
      static of (kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Ik = new BF;
        for (let Xk of kk instanceof NF ? [kk] : Fk ? function(kk) {
            if (kk.length > 1)
              for (let Fk = kk[0], Ik = 1; Ik < kk.length; Ik++) {
                let Xk = kk[Ik];
                if (cF(Fk, Xk) > 0) return kk.slice().sort(cF);
                Fk = Xk
              }
            return kk
          }(kk) : kk) Ik.add(Xk.from, Xk.to, Xk.value);
        return Ik.finish()
      }
      static join(kk) {
        if (!kk.length) return fF.empty;
        let Fk = kk[kk.length - 1];
        for (let Ik = kk.length - 2; Ik >= 0; Ik--)
          for (let Xk = kk[Ik]; Xk != fF.empty; Xk = Xk.nextLayer) Fk = new fF(Xk.chunkPos, Xk.chunk, Fk, Math.max(Xk.tXk, Fk.tXk));
        return Fk
      }
    }
    fF.empty = new fF([], [], null, -1), fF.empty.nextLayer = fF.empty;
    class BF {
      finishChunk(kk) {
        this.chunks.push(new WF(this.from, this.to, this.value, this.tXk)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.tXk), this.tXk = -1, kk && (this.from = [], this.to = [], this.value = [])
      }
      constructor() {
        this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.tXk = -1, this.setMaxPoint = -1, this.nextLayer = null
      }
      add(kk, Fk, Ik) {
        this.addInner(kk, Fk, Ik) || (this.nextLayer || (this.nextLayer = new BF)).add(kk, Fk, Ik)
      }
      addInner(kk, Fk, Ik) {
        let Xk = kk - this.lastTo || Ik.startSide - this.last.endSide;
        if (Xk <= 0 && (kk - this.lastFrom || Ik.startSide - this.last.startSide) < 0) throw new Error("Ranges must be added sorted by `from` position and `startSide`");
        return !(Xk < 0) && (250 == this.from.length && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = kk), this.from.push(kk - this.chunkStart), this.to.push(Fk - this.chunkStart), this.last = Ik, this.lastFrom = kk, this.lastTo = Fk, this.value.push(Ik), Ik.point && (this.tXk = Math.max(this.tXk, Fk - kk)), !0)
      }
      addChunk(kk, Fk) {
        if ((kk - this.lastTo || Fk.value[0].startSide - this.last.endSide) < 0) return !1;
        this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, Fk.tXk), this.chunks.push(Fk), this.chunkPos.push(kk);
        let Ik = Fk.value.length - 1;
        return this.last = Fk.value[Ik], this.lastFrom = Fk.from[Ik] + kk, this.lastTo = Fk.to[Ik] + kk, !0
      }
      finish() {
        return this.finishInner(fF.empty)
      }
      finishInner(kk) {
        if (this.from.length && this.finishChunk(!1), 0 == this.chunks.length) return kk;
        let Fk = fF.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(kk) : kk, this.setMaxPoint);
        return this.from = null, Fk
      }
    }

    function dF(kk, Fk, Ik) {
      let Xk = new Map;
      for (let ik of kk)
        for (let kk = 0; kk < ik.chunk.length; kk++) ik.chunk[kk].tXk <= 0 && Xk.set(ik.chunk[kk], ik.chunkPos[kk]);
      let Tk = new Set;
      for (let ik of Fk)
        for (let kk = 0; kk < ik.chunk.length; kk++) {
          let Fk = Xk.get(ik.chunk[kk]);
          null == Fk || (Ik ? Ik.mapPos(Fk) : Fk) != ik.chunkPos[kk] || (null === Ik || void 0 === Ik ? void 0 : Ik.touchesRange(Fk, Fk + ik.chunk[kk].length)) || Tk.add(ik.chunk[kk])
        }
      return Tk
    }
    class YF {
      constructor(kk, Fk, Ik) {
        let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.layer = kk, this.skip = Fk, this.ZXk = Ik, this.rank = Xk
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      get endSide() {
        return this.value ? this.value.endSide : 0
      }
      goto(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(kk, Fk, !1), this
      }
      gotoInner(kk, Fk, Ik) {
        for (; this.chunkIndex < this.layer.chunk.length;) {
          let Fk = this.layer.chunk[this.chunkIndex];
          if (!(this.skip && this.skip.has(Fk) || this.layer.chunkEnd(this.chunkIndex) < kk || Fk.tXk < this.ZXk)) break;
          this.chunkIndex++, Ik = !1
        }
        if (this.chunkIndex < this.layer.chunk.length) {
          let Xk = this.layer.chunk[this.chunkIndex].findIndex(kk - this.layer.chunkPos[this.chunkIndex], Fk, !0);
          (!Ik || this.rangeIndex < Xk) && this.setRangeIndex(Xk)
        }
        this.next()
      }
      forward(kk, Fk) {
        (this.to - kk || this.endSide - Fk) < 0 && this.gotoInner(kk, Fk, !0)
      }
      next() {
        for (;;) {
          if (this.chunkIndex == this.layer.chunk.length) {
            this.from = this.to = 1e9, this.value = null;
            break
          } {
            let kk = this.layer.chunkPos[this.chunkIndex],
              Fk = this.layer.chunk[this.chunkIndex],
              Ik = kk + Fk.from[this.rangeIndex];
            if (this.from = Ik, this.to = kk + Fk.to[this.rangeIndex], this.value = Fk.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.ZXk < 0 || this.value.point && this.to - this.from >= this.ZXk) break
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
    class AF {
      constructor(kk) {
        this.heap = kk
      }
      static from(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          Xk = [];
        for (let Tk = 0; Tk < kk.length; Tk++)
          for (let ik = kk[Tk]; !ik.ye; ik = ik.nextLayer) ik.tXk >= Ik && Xk.push(new YF(ik, Fk, Ik, Tk));
        return 1 == Xk.length ? Xk[0] : new AF(Xk)
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      goto(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        for (let Ik of this.heap) Ik.goto(kk, Fk);
        for (let Ik = this.heap.length >> 1; Ik >= 0; Ik--) gF(this.heap, Ik);
        return this.next(), this
      }
      forward(kk, Fk) {
        for (let Ik of this.heap) Ik.forward(kk, Fk);
        for (let Ik = this.heap.length >> 1; Ik >= 0; Ik--) gF(this.heap, Ik);
        (this.to - kk || this.value.endSide - Fk) < 0 && this.next()
      }
      next() {
        if (0 == this.heap.length) this.from = this.to = 1e9, this.value = null, this.rank = -1;
        else {
          let kk = this.heap[0];
          this.from = kk.from, this.to = kk.to, this.value = kk.value, this.rank = kk.rank, kk.value && kk.next(), gF(this.heap, 0)
        }
      }
    }

    function gF(kk, Fk) {
      for (let Ik = kk[Fk];;) {
        let Xk = 1 + (Fk << 1);
        if (Xk >= kk.length) break;
        let Tk = kk[Xk];
        if (Xk + 1 < kk.length && Tk.compare(kk[Xk + 1]) >= 0 && (Tk = kk[Xk + 1], Xk++), Ik.compare(Tk) < 0) break;
        kk[Xk] = Ik, kk[Fk] = Tk, Fk = Xk
      }
    }
    class mF {
      constructor(kk, Fk, Ik) {
        this.ZXk = Ik, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = AF.from(kk, Fk, Ik)
      }
      goto(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.cursor.goto(kk, Fk), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = kk, this.endSide = Fk, this.openStart = -1, this.next(), this
      }
      forward(kk, Fk) {
        for (; this.minActive > -1 && (this.activeTo[this.minActive] - kk || this.active[this.minActive].endSide - Fk) < 0;) this.removeActive(this.minActive);
        this.cursor.forward(kk, Fk)
      }
      removeActive(kk) {
        DF(this.active, kk), DF(this.activeTo, kk), DF(this.activeRank, kk), this.minActive = kI(this.active, this.activeTo)
      }
      addActive(kk) {
        let Fk = 0,
          {
            value: Ik,
            to: Xk,
            rank: Tk
          } = this.cursor;
        for (; Fk < this.activeRank.length && (Tk - this.activeRank[Fk] || Xk - this.activeTo[Fk]) > 0;) Fk++;
        MF(this.active, Fk, Ik), MF(this.activeTo, Fk, Xk), MF(this.activeRank, Fk, Tk), kk && MF(kk, Fk, this.cursor.from), this.minActive = kI(this.active, this.activeTo)
      }
      next() {
        let kk = this.to,
          Fk = this.point;
        this.point = null;
        let Ik = this.openStart < 0 ? [] : null;
        for (;;) {
          let Xk = this.minActive;
          if (Xk > -1 && (this.activeTo[Xk] - this.cursor.from || this.active[Xk].endSide - this.cursor.startSide) < 0) {
            if (this.activeTo[Xk] > kk) {
              this.to = this.activeTo[Xk], this.endSide = this.active[Xk].endSide;
              break
            }
            this.removeActive(Xk), Ik && DF(Ik, Xk)
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
                if (!(Fk && this.cursor.to == this.to && this.cursor.from < this.cursor.to)) {
                  this.point = kk, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = kk.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
                  break
                }
                this.cursor.next()
              } else this.addActive(Ik), this.cursor.next()
            }
          }
        }
        if (Ik) {
          this.openStart = 0;
          for (let Fk = Ik.length - 1; Fk >= 0 && Ik[Fk] < kk; Fk--) this.openStart++
        }
      }
      activeForPoint(kk) {
        if (!this.active.length) return this.active;
        let Fk = [];
        for (let Ik = this.active.length - 1; Ik >= 0 && !(this.activeRank[Ik] < this.pointRank); Ik--)(this.activeTo[Ik] > kk || this.activeTo[Ik] == kk && this.active[Ik].endSide >= this.point.endSide) && Fk.push(this.active[Ik]);
        return Fk.reverse()
      }
      openEnd(kk) {
        let Fk = 0;
        for (let Ik = this.activeTo.length - 1; Ik >= 0 && this.activeTo[Ik] > kk; Ik--) Fk++;
        return Fk
      }
    }

    function hF(kk, Fk, Ik, Xk, Tk, ik) {
      kk.goto(Fk), Ik.goto(Xk);
      let yk = Xk + Tk,
        lk = Xk,
        ak = Xk - Fk,
        qk = !!ik.boundChange;
      for (let Lk = !1;;) {
        let Fk = kk.to + ak - Ik.to,
          Xk = Fk || kk.endSide - Ik.endSide,
          Tk = Xk < 0 ? kk.to + ak : Ik.to,
          tk = Math.min(Tk, yk);
        if (kk.point || Ik.point ? (kk.point && Ik.point && CF(kk.point, Ik.point) && rF(kk.activeForPoint(kk.to), Ik.activeForPoint(Ik.to)) || ik.comparePoint(lk, tk, kk.point, Ik.point), Lk = !1) : (Lk && ik.boundChange(lk), tk > lk && !rF(kk.active, Ik.active) && ik.compareRange(lk, tk, kk.active, Ik.active), qk && tk < yk && (Fk || kk.openEnd(Tk) != Ik.openEnd(Tk)) && (Lk = !0)), Tk > yk) break;
        lk = Tk, Xk <= 0 && kk.next(), Xk >= 0 && Ik.next()
      }
    }

    function rF(kk, Fk) {
      if (kk.length != Fk.length) return !1;
      for (let Ik = 0; Ik < kk.length; Ik++)
        if (kk[Ik] != Fk[Ik] && !CF(kk[Ik], Fk[Ik])) return !1;
      return !0
    }

    function DF(kk, Fk) {
      for (let Ik = Fk, Xk = kk.length - 1; Ik < Xk; Ik++) kk[Ik] = kk[Ik + 1];
      kk.pop()
    }

    function MF(kk, Fk, Ik) {
      for (let Xk = kk.length - 1; Xk >= Fk; Xk--) kk[Xk + 1] = kk[Xk];
      kk[Fk] = Ik
    }

    function kI(kk, Fk) {
      let Ik = -1,
        Xk = 1e9;
      for (let Tk = 0; Tk < Fk.length; Tk++)(Fk[Tk] - Xk || kk[Tk].endSide - kk[Ik].endSide) < 0 && (Ik = Tk, Xk = Fk[Tk]);
      return Ik
    }

    function FI(kk, Fk) {
      let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : kk.length,
        Xk = 0;
      for (let Tk = 0; Tk < Ik && Tk < kk.length;) 9 == kk.charCodeAt(Tk) ? (Xk += Fk - Xk % Fk, Tk++) : (Xk++, Tk = Sk(kk, Tk));
      return Xk
    }

    function II(kk, Fk, Ik, Xk) {
      for (let Tk = 0, ik = 0;;) {
        if (ik >= Fk) return Tk;
        if (Tk == kk.length) break;
        ik += 9 == kk.charCodeAt(Tk) ? Ik - ik % Ik : 1, Tk = Sk(kk, Tk)
      }
      return !0 === Xk ? -1 : kk.length
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);