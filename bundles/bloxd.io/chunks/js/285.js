export const id = 285;
export const ids = [285];
export const modules = {
  40741: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => vF,
      d: () => Uk,
      ChangeSet: () => ck,
      e: () => MF,
      f: () => qk,
      h: () => GF,
      i: () => pk,
      l: () => gk,
      o: () => aF,
      u: () => qF,
      r: () => CF,
      v: () => rF,
      z: () => oF,
      A: () => Qk,
      B: () => yk,
      E: () => LF,
      I: () => Nk,
      J: () => uk,
      K: () => TF,
      M: () => FB,
      N: () => Sk,
      P: () => BB,
      R: () => Hk
    });
    let Rk = [],
      tk = [];

    function ak(kk) {
      if (kk < 768) return !1;
      for (let Fk = 0, Bk = Rk.length;;) {
        let ak = Fk + Bk >> 1;
        if (kk < Rk[ak]) Bk = ak;
        else {
          if (!(kk >= tk[ak])) return !0;
          Fk = ak + 1
        }
        if (Fk == Bk) return !1
      }
    }

    function Xk(kk) {
      return kk >= 127462 && kk <= 127487
    }(() => {
      let kk = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((kk => kk ? parseInt(kk, 36) : 1));
      for (let Fk = 0, Bk = 0; Fk < kk.length; Fk++)(Fk % 2 ? tk : Rk).push(Bk += kk[Fk])
    })();
    const bk = 8205;

    function wk(kk, Fk) {
      return (!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2] ? dk : sk)(kk, Fk, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function dk(kk, Fk, Bk) {
      if (Fk == kk.length) return Fk;
      Fk && Jk(kk.charCodeAt(Fk)) && Ak(kk.charCodeAt(Fk - 1)) && Fk--;
      let Rk = Vk(kk, Fk);
      for (Fk += ek(Rk); Fk < kk.length;) {
        let tk = Vk(kk, Fk);
        if (Rk == bk || tk == bk || Bk && ak(tk)) Fk += ek(tk), Rk = tk;
        else {
          if (!Xk(tk)) break;
          {
            let Bk = 0,
              Rk = Fk - 2;
            for (; Rk >= 0 && Xk(Vk(kk, Rk));) Bk++, Rk -= 2;
            if (Bk % 2 == 0) break;
            Fk += 2
          }
        }
      }
      return Fk
    }

    function sk(kk, Fk, Bk) {
      for (; Fk > 0;) {
        let Rk = dk(kk, Fk - 2, Bk);
        if (Rk < Fk) return Rk;
        Fk--
      }
      return 0
    }

    function Vk(kk, Fk) {
      let Bk = kk.charCodeAt(Fk);
      if (!Ak(Bk) || Fk + 1 == kk.length) return Bk;
      let Rk = kk.charCodeAt(Fk + 1);
      return Jk(Rk) ? Rk - 56320 + (Bk - 55296 << 10) + 65536 : Bk
    }

    function Jk(kk) {
      return kk >= 56320 && kk < 57344
    }

    function Ak(kk) {
      return kk >= 55296 && kk < 56320
    }

    function ek(kk) {
      return kk < 65536 ? 1 : 2
    }
    class yk {
      lineAt(kk) {
        if (kk < 0 || kk > this.length) throw new RangeError(`Invalid position ${kk} in document of length ${this.length}`);
        return this.lineInner(kk, !1, 1, 0)
      }
      line(kk) {
        if (kk < 1 || kk > this.lines) throw new RangeError(`Invalid line number ${kk} in ${this.lines}-line document`);
        return this.lineInner(kk, !0, 1, 0)
      }
      replace(kk, Fk, Bk) {
        [kk, Fk] = Ek(this, kk, Fk);
        let Rk = [];
        return this.decompose(0, kk, Rk, 2), Bk.length && Bk.decompose(0, Bk.length, Rk, 3), this.decompose(Fk, this.length, Rk, 1), mk.from(Rk, this.length - (Fk - kk) + Bk.length)
      }
      append(kk) {
        return this.replace(this.length, this.length, kk)
      }
      slice(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        [kk, Fk] = Ek(this, kk, Fk);
        let Bk = [];
        return this.decompose(kk, Fk, Bk, 0), mk.from(Bk, Fk - kk)
      }
      eq(kk) {
        if (kk == this) return !0;
        if (kk.length != this.length || kk.lines != this.lines) return !1;
        let Fk = this.scanIdentical(kk, 1),
          Bk = this.length - this.scanIdentical(kk, -1),
          Rk = new ik(this),
          tk = new ik(kk);
        for (let ak = Fk, Xk = Fk;;) {
          if (Rk.next(ak), tk.next(ak), ak = 0, Rk.lineBreak != tk.lineBreak || Rk.done != tk.done || Rk.value != tk.value) return !1;
          if (Xk += Rk.value.length, Rk.done || Xk >= Bk) return !0
        }
      }
      iter() {
        return new ik(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1)
      }
      iterRange(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        return new Yk(this, kk, Fk)
      }
      iterLines(kk, Fk) {
        let Bk;
        if (null == kk) Bk = this.iter();
        else {
          null == Fk && (Fk = this.lines + 1);
          let Rk = this.line(kk).from;
          Bk = this.iterRange(Rk, Math.max(Rk, Fk == this.lines + 1 ? this.length : Fk <= 1 ? 0 : this.line(Fk - 1).to))
        }
        return new Lk(Bk)
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
        return 1 != kk.length || kk[0] ? kk.length <= 32 ? new fk(kk) : mk.from(fk.split(kk, [])) : yk.empty
      }
    }
    class fk extends yk {
      constructor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(kk) {
          let Fk = -1;
          for (let Bk of kk) Fk += Bk.length + 1;
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
      lineInner(kk, Fk, Bk, Rk) {
        for (let tk = 0;; tk++) {
          let ak = this.text[tk],
            Xk = Rk + ak.length;
          if ((Fk ? Bk : Xk) >= kk) return new Ok(Rk, Xk, Bk, ak);
          Rk = Xk + 1, Bk++
        }
      }
      decompose(kk, Fk, Bk, Rk) {
        let tk = kk <= 0 && Fk >= this.length ? this : new fk(vk(this.text, kk, Fk), Math.min(Fk, this.length) - Math.max(0, kk));
        if (1 & Rk) {
          let kk = Bk.pop(),
            Fk = Wk(tk.text, kk.text.slice(), 0, tk.length);
          if (Fk.length <= 32) Bk.push(new fk(Fk, kk.length + tk.length));
          else {
            let kk = Fk.length >> 1;
            Bk.push(new fk(Fk.slice(0, kk)), new fk(Fk.slice(kk)))
          }
        } else Bk.push(tk)
      }
      replace(kk, Fk, Bk) {
        if (!(Bk instanceof fk)) return super.replace(kk, Fk, Bk);
        [kk, Fk] = Ek(this, kk, Fk);
        let Rk = Wk(this.text, Wk(Bk.text, vk(this.text, 0, kk)), Fk),
          tk = this.length + Bk.length - (Fk - kk);
        return Rk.length <= 32 ? new fk(Rk, tk) : mk.from(fk.split(Rk, []), tk)
      }
      sliceString(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [kk, Fk] = Ek(this, kk, Fk);
        let Rk = "";
        for (let tk = 0, ak = 0; tk <= Fk && ak < this.text.length; ak++) {
          let Xk = this.text[ak],
            bk = tk + Xk.length;
          tk > kk && ak && (Rk += Bk), kk < bk && Fk > tk && (Rk += Xk.slice(Math.max(0, kk - tk), Fk - tk)), tk = bk + 1
        }
        return Rk
      }
      flatten(kk) {
        for (let Fk of this.text) kk.push(Fk)
      }
      scanIdentical() {
        return 0
      }
      static split(kk, Fk) {
        let Bk = [],
          Rk = -1;
        for (let tk of kk) Bk.push(tk), Rk += tk.length + 1, 32 == Bk.length && (Fk.push(new fk(Bk, Rk)), Bk = [], Rk = -1);
        return Rk > -1 && Fk.push(new fk(Bk, Rk)), Fk
      }
    }
    class mk extends yk {
      constructor(kk, Fk) {
        super(), this.children = kk, this.length = Fk, this.lines = 0;
        for (let Bk of kk) this.lines += Bk.lines
      }
      lineInner(kk, Fk, Bk, Rk) {
        for (let tk = 0;; tk++) {
          let ak = this.children[tk],
            Xk = Rk + ak.length,
            bk = Bk + ak.lines - 1;
          if ((Fk ? bk : Xk) >= kk) return ak.lineInner(kk, Fk, Bk, Rk);
          Rk = Xk + 1, Bk = bk + 1
        }
      }
      decompose(kk, Fk, Bk, Rk) {
        for (let tk = 0, ak = 0; ak <= Fk && tk < this.children.length; tk++) {
          let Xk = this.children[tk],
            bk = ak + Xk.length;
          if (kk <= bk && Fk >= ak) {
            let tk = Rk & ((ak <= kk ? 1 : 0) | (bk >= Fk ? 2 : 0));
            ak >= kk && bk <= Fk && !tk ? Bk.push(Xk) : Xk.decompose(kk - ak, Fk - ak, Bk, tk)
          }
          ak = bk + 1
        }
      }
      replace(kk, Fk, Bk) {
        if ([kk, Fk] = Ek(this, kk, Fk), Bk.lines < this.lines)
          for (let Rk = 0, tk = 0; Rk < this.children.length; Rk++) {
            let ak = this.children[Rk],
              Xk = tk + ak.length;
            if (kk >= tk && Fk <= Xk) {
              let bk = ak.replace(kk - tk, Fk - tk, Bk),
                wk = this.lines - ak.lines + bk.lines;
              if (bk.lines < wk >> 4 && bk.lines > wk >> 6) {
                let tk = this.children.slice();
                return tk[Rk] = bk, new mk(tk, this.length - (Fk - kk) + Bk.length)
              }
              return super.replace(tk, Xk, bk)
            }
            tk = Xk + 1
          }
        return super.replace(kk, Fk, Bk)
      }
      sliceString(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [kk, Fk] = Ek(this, kk, Fk);
        let Rk = "";
        for (let tk = 0, ak = 0; tk < this.children.length && ak <= Fk; tk++) {
          let Xk = this.children[tk],
            bk = ak + Xk.length;
          ak > kk && tk && (Rk += Bk), kk < bk && Fk > ak && (Rk += Xk.sliceString(kk - ak, Fk - ak, Bk)), ak = bk + 1
        }
        return Rk
      }
      flatten(kk) {
        for (let Fk of this.children) Fk.flatten(kk)
      }
      scanIdentical(kk, Fk) {
        if (!(kk instanceof mk)) return 0;
        let Bk = 0,
          [Rk, tk, ak, Xk] = Fk > 0 ? [0, 0, this.children.length, kk.children.length] : [this.children.length - 1, kk.children.length - 1, -1, -1];
        for (;; Rk += Fk, tk += Fk) {
          if (Rk == ak || tk == Xk) return Bk;
          let bk = this.children[Rk],
            wk = kk.children[tk];
          if (bk != wk) return Bk + bk.scanIdentical(wk, Fk);
          Bk += bk.length + 1
        }
      }
      static from(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kk.reduce(((kk, Fk) => kk + Fk.length + 1), -1),
          Bk = 0;
        for (let Jk of kk) Bk += Jk.lines;
        if (Bk < 32) {
          let Bk = [];
          for (let Fk of kk) Fk.flatten(Bk);
          return new fk(Bk, Fk)
        }
        let Rk = Math.max(32, Bk >> 5),
          tk = Rk << 1,
          ak = Rk >> 1,
          Xk = [],
          bk = 0,
          wk = -1,
          dk = [];

        function sk(kk) {
          let Fk;
          if (kk.lines > tk && kk instanceof mk)
            for (let Bk of kk.children) sk(Bk);
          else kk.lines > ak && (bk > ak || !bk) ? (Vk(), Xk.push(kk)) : kk instanceof fk && bk && (Fk = dk[dk.length - 1]) instanceof fk && kk.lines + Fk.lines <= 32 ? (bk += kk.lines, wk += kk.length + 1, dk[dk.length - 1] = new fk(Fk.text.concat(kk.text), Fk.length + 1 + kk.length)) : (bk + kk.lines > Rk && Vk(), bk += kk.lines, wk += kk.length + 1, dk.push(kk))
        }

        function Vk() {
          0 != bk && (Xk.push(1 == dk.length ? dk[0] : mk.from(dk, wk)), wk = -1, bk = dk.length = 0)
        }
        for (let Jk of kk) sk(Jk);
        return Vk(), 1 == Xk.length ? Xk[0] : new mk(Xk, Fk)
      }
    }

    function Wk(kk, Fk) {
      let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e9;
      for (let tk = 0, ak = 0, Xk = !0; ak < kk.length && tk <= Rk; ak++) {
        let bk = kk[ak],
          wk = tk + bk.length;
        wk >= Bk && (wk > Rk && (bk = bk.slice(0, Rk - tk)), tk < Bk && (bk = bk.slice(Bk - tk)), Xk ? (Fk[Fk.length - 1] += bk, Xk = !1) : Fk.push(bk)), tk = wk + 1
      }
      return Fk
    }

    function vk(kk, Fk, Bk) {
      return Wk(kk, [""], Fk, Bk)
    }
    yk.empty = new fk([""], 0);
    class ik {
      constructor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.dir = Fk, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [kk], this.offsets = [Fk > 0 ? 1 : (kk instanceof fk ? kk.text.length : kk.children.length) << 1]
      }
      nextInner(kk, Fk) {
        for (this.done = this.lineBreak = !1;;) {
          let Bk = this.nodes.length - 1,
            Rk = this.nodes[Bk],
            tk = this.offsets[Bk],
            ak = tk >> 1,
            Xk = Rk instanceof fk ? Rk.text.length : Rk.children.length;
          if (ak == (Fk > 0 ? Xk : 0)) {
            if (0 == Bk) return this.done = !0, this.value = "", this;
            Fk > 0 && this.offsets[Bk - 1]++, this.nodes.pop(), this.offsets.pop()
          } else if ((1 & tk) == (Fk > 0 ? 0 : 1)) {
            if (this.offsets[Bk] += Fk, 0 == kk) return this.lineBreak = !0, this.value = "\n", this;
            kk--
          } else if (Rk instanceof fk) {
            let tk = Rk.text[ak + (Fk < 0 ? -1 : 0)];
            if (this.offsets[Bk] += Fk, tk.length > Math.max(0, kk)) return this.value = 0 == kk ? tk : Fk > 0 ? tk.slice(kk) : tk.slice(0, tk.length - kk), this;
            kk -= tk.length
          } else {
            let tk = Rk.children[ak + (Fk < 0 ? -1 : 0)];
            kk > tk.length ? (kk -= tk.length, this.offsets[Bk] += Fk) : (Fk < 0 && this.offsets[Bk]--, this.nodes.push(tk), this.offsets.push(Fk > 0 ? 1 : (tk instanceof fk ? tk.text.length : tk.children.length) << 1))
          }
        }
      }
      next() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return kk < 0 && (this.nextInner(-kk, -this.dir), kk = this.value.length), this.nextInner(kk, this.dir)
      }
    }
    class Yk {
      constructor(kk, Fk, Bk) {
        this.value = "", this.done = !1, this.cursor = new ik(kk, Fk > Bk ? -1 : 1), this.pos = Fk > Bk ? kk.length : 0, this.from = Math.min(Fk, Bk), this.to = Math.max(Fk, Bk)
      }
      nextInner(kk, Fk) {
        if (Fk < 0 ? this.pos <= this.from : this.pos >= this.to) return this.value = "", this.done = !0, this;
        kk += Math.max(0, Fk < 0 ? this.pos - this.to : this.from - this.pos);
        let Bk = Fk < 0 ? this.pos - this.from : this.to - this.pos;
        kk > Bk && (kk = Bk), Bk -= kk;
        let {
          value: Rk
        } = this.cursor.next(kk);
        return this.pos += (Rk.length + kk) * Fk, this.value = Rk.length <= Bk ? Rk : Fk < 0 ? Rk.slice(Rk.length - Bk) : Rk.slice(0, Bk), this.done = !this.value, this
      }
      next() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return kk < 0 ? kk = Math.max(kk, this.from - this.pos) : kk > 0 && (kk = Math.min(kk, this.to - this.pos)), this.nextInner(kk, this.cursor.dir)
      }
      get lineBreak() {
        return this.cursor.lineBreak && "" != this.value
      }
    }
    class Lk {
      constructor(kk) {
        this.inner = kk, this.afterBreak = !0, this.value = "", this.done = !1
      }
      next() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          {
            done: Fk,
            lineBreak: Bk,
            value: Rk
          } = this.inner.next(kk);
        return Fk && this.afterBreak ? (this.value = "", this.afterBreak = !1) : Fk ? (this.done = !0, this.value = "") : Bk ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = Rk, this.afterBreak = !1), this
      }
      get lineBreak() {
        return !1
      }
    }
    "undefined" != typeof Symbol && (yk.prototype[Symbol.iterator] = function() {
      return this.iter()
    }, ik.prototype[Symbol.iterator] = Yk.prototype[Symbol.iterator] = Lk.prototype[Symbol.iterator] = function() {
      return this
    });
    class Ok {
      constructor(kk, Fk, Bk, Rk) {
        this.from = kk, this.to = Fk, this.number = Bk, this.text = Rk
      }
      get length() {
        return this.to - this.from
      }
    }

    function Ek(kk, Fk, Bk) {
      return [Fk = Math.max(0, Math.min(kk.length, Fk)), Math.max(Fk, Math.min(kk.length, Bk))]
    }

    function Sk(kk, Fk) {
      return wk(kk, Fk, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function Nk(kk, Fk) {
      let Bk = kk.charCodeAt(Fk);
      if (!((Rk = Bk) >= 55296 && Rk < 56320) || Fk + 1 == kk.length) return Bk;
      var Rk;
      let tk = kk.charCodeAt(Fk + 1);
      return function(kk) {
        return kk >= 56320 && kk < 57344
      }(tk) ? tk - 56320 + (Bk - 55296 << 10) + 65536 : Bk
    }

    function Hk(kk) {
      return kk <= 65535 ? String.fromCharCode(kk) : (kk -= 65536, String.fromCharCode(55296 + (kk >> 10), 56320 + (1023 & kk)))
    }

    function uk(kk) {
      return kk < 65536 ? 1 : 2
    }
    const Mk = /\r\n?|\n/;
    var gk = function(kk) {
      return kk[kk.Simple = 0] = "Simple", kk[kk.TrackDel = 1] = "TrackDel", kk[kk.TrackBefore = 2] = "TrackBefore", kk[kk.TrackAfter = 3] = "TrackAfter", kk
    }(gk || (gk = {}));
    class Uk {
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
          let Bk = this.sections[Fk + 1];
          kk += Bk < 0 ? this.sections[Fk] : Bk
        }
        return kk
      }
      get empty() {
        return 0 == this.sections.length || 2 == this.sections.length && this.sections[1] < 0
      }
      iterGaps(kk) {
        for (let Fk = 0, Bk = 0, Rk = 0; Fk < this.sections.length;) {
          let tk = this.sections[Fk++],
            ak = this.sections[Fk++];
          ak < 0 ? (kk(Bk, Rk, tk), Rk += tk) : Rk += ak, Bk += tk
        }
      }
      iterChangedRanges(kk) {
        rk(this, kk, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get invertedDesc() {
        let kk = [];
        for (let Fk = 0; Fk < this.sections.length;) {
          let Bk = this.sections[Fk++],
            Rk = this.sections[Fk++];
          Rk < 0 ? kk.push(Bk, Rk) : kk.push(Rk, Bk)
        }
        return new Uk(kk)
      }
      composeDesc(kk) {
        return this.empty ? kk : kk.empty ? this : zk(this, kk)
      }
      mapDesc(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return kk.empty ? this : Dk(this, kk, Fk)
      }
      mapPos(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : gk.Simple,
          Rk = 0,
          tk = 0;
        for (let ak = 0; ak < this.sections.length;) {
          let Xk = this.sections[ak++],
            bk = this.sections[ak++],
            wk = Rk + Xk;
          if (bk < 0) {
            if (wk > kk) return tk + (kk - Rk);
            tk += Xk
          } else {
            if (Bk != gk.Simple && wk >= kk && (Bk == gk.TrackDel && Rk < kk && wk > kk || Bk == gk.TrackBefore && Rk < kk || Bk == gk.TrackAfter && wk > kk)) return null;
            if (wk > kk || wk == kk && Fk < 0 && !Xk) return kk == Rk || Fk < 0 ? tk : tk + bk;
            tk += bk
          }
          Rk = wk
        }
        if (kk > Rk) throw new RangeError(`Position ${kk} is out of range for changeset of length ${Rk}`);
        return tk
      }
      touchesRange(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kk;
        for (let Bk = 0, Rk = 0; Bk < this.sections.length && Rk <= Fk;) {
          let tk = Rk + this.sections[Bk++];
          if (this.sections[Bk++] >= 0 && Rk <= Fk && tk >= kk) return !(Rk < kk && tk > Fk) || "cover";
          Rk = tk
        }
        return !1
      }
      toString() {
        let kk = "";
        for (let Fk = 0; Fk < this.sections.length;) {
          let Bk = this.sections[Fk++],
            Rk = this.sections[Fk++];
          kk += (kk ? " " : "") + Bk + (Rk >= 0 ? ":" + Rk : "")
        }
        return kk
      }
      toJSON() {
        return this.sections
      }
      static fromJSON(kk) {
        if (!Array.isArray(kk) || kk.length % 2 || kk.some((kk => "number" != typeof kk))) throw new RangeError("Invalid JSON representation of ChangeDesc");
        return new Uk(kk)
      }
      static create(kk) {
        return new Uk(kk)
      }
    }
    class ck extends Uk {
      constructor(kk, Fk) {
        super(kk), this.inserted = Fk
      }
      apply(kk) {
        if (this.length != kk.length) throw new RangeError("Applying change set to a document with the wrong length");
        return rk(this, ((Fk, Bk, Rk, tk, ak) => kk = kk.replace(Rk, Rk + (Bk - Fk), ak)), !1), kk
      }
      mapDesc(kk) {
        return Dk(this, kk, arguments.length > 1 && void 0 !== arguments[1] && arguments[1], !0)
      }
      invert(kk) {
        let Fk = this.sections.slice(),
          Bk = [];
        for (let Rk = 0, tk = 0; Rk < Fk.length; Rk += 2) {
          let ak = Fk[Rk],
            Xk = Fk[Rk + 1];
          if (Xk >= 0) {
            Fk[Rk] = Xk, Fk[Rk + 1] = ak;
            let bk = Rk >> 1;
            for (; Bk.length < bk;) Bk.push(yk.empty);
            Bk.push(ak ? kk.slice(tk, tk + ak) : yk.empty)
          }
          tk += ak
        }
        return new ck(Fk, Bk)
      }
      compose(kk) {
        return this.empty ? kk : kk.empty ? this : zk(this, kk, !0)
      }
      map(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return kk.empty ? this : Dk(this, kk, Fk, !0)
      }
      iterChanges(kk) {
        rk(this, kk, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get desc() {
        return Uk.create(this.sections)
      }
      filter(kk) {
        let Fk = [],
          Bk = [],
          Rk = [],
          tk = new Pk(this);
        kk: for (let ak = 0, Xk = 0;;) {
          let bk = ak == kk.length ? 1e9 : kk[ak++];
          for (; Xk < bk || Xk == bk && 0 == tk.len;) {
            if (tk.done) break kk;
            let kk = Math.min(tk.len, bk - Xk);
            Gk(Rk, kk, -1);
            let ak = -1 == tk.ins ? -1 : 0 == tk.off ? tk.ins : 0;
            Gk(Fk, kk, ak), ak > 0 && Tk(Bk, Fk, tk.text), tk.forward(kk), Xk += kk
          }
          let wk = kk[ak++];
          for (; Xk < wk;) {
            if (tk.done) break kk;
            let kk = Math.min(tk.len, wk - Xk);
            Gk(Fk, kk, -1), Gk(Rk, kk, -1 == tk.ins ? -1 : 0 == tk.off ? tk.ins : 0), tk.forward(kk), Xk += kk
          }
        }
        return {
          changes: new ck(Fk, Bk),
          filtered: Uk.create(Rk)
        }
      }
      toJSON() {
        let kk = [];
        for (let Fk = 0; Fk < this.sections.length; Fk += 2) {
          let Bk = this.sections[Fk],
            Rk = this.sections[Fk + 1];
          Rk < 0 ? kk.push(Bk) : 0 == Rk ? kk.push([Bk]) : kk.push([Bk].concat(this.inserted[Fk >> 1].toJSON()))
        }
        return kk
      }
      static of (kk, Fk, Bk) {
        let Rk = [],
          tk = [],
          ak = 0,
          Xk = null;

        function bk() {
          if (!(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && !Rk.length) return;
          ak < Fk && Gk(Rk, Fk - ak, -1);
          let kk = new ck(Rk, tk);
          Xk = Xk ? Xk.compose(kk.map(Xk)) : kk, Rk = [], tk = [], ak = 0
        }
        return function kk(wk) {
          if (Array.isArray(wk))
            for (let Fk of wk) kk(Fk);
          else if (wk instanceof ck) {
            if (wk.length != Fk) throw new RangeError(`Mismatched change set length (got ${wk.length}, expected ${Fk})`);
            bk(), Xk = Xk ? Xk.compose(wk.map(Xk)) : wk
          } else {
            let {
              from: kk,
              to: Xk = kk,
              insert: dk
            } = wk;
            if (kk > Xk || kk < 0 || Xk > Fk) throw new RangeError(`Invalid change range ${kk} to ${Xk} (in doc of length ${Fk})`);
            let sk = dk ? "string" == typeof dk ? yk.of(dk.split(Bk || Mk)) : dk : yk.empty,
              Vk = sk.length;
            if (kk == Xk && 0 == Vk) return;
            kk < ak && bk(), kk > ak && Gk(Rk, kk - ak, -1), Gk(Rk, Xk - kk, Vk), Tk(tk, Rk, sk), ak = Xk
          }
        }(kk), bk(!Xk), Xk
      }
      static empty(kk) {
        return new ck(kk ? [kk, -1] : [], [])
      }
      static fromJSON(kk) {
        if (!Array.isArray(kk)) throw new RangeError("Invalid JSON representation of ChangeSet");
        let Fk = [],
          Bk = [];
        for (let Rk = 0; Rk < kk.length; Rk++) {
          let tk = kk[Rk];
          if ("number" == typeof tk) Fk.push(tk, -1);
          else {
            if (!Array.isArray(tk) || "number" != typeof tk[0] || tk.some(((kk, Fk) => Fk && "string" != typeof kk))) throw new RangeError("Invalid JSON representation of ChangeSet");
            if (1 == tk.length) Fk.push(tk[0], 0);
            else {
              for (; Bk.length < Rk;) Bk.push(yk.empty);
              Bk[Rk] = yk.of(tk.slice(1)), Fk.push(tk[0], Bk[Rk].length)
            }
          }
        }
        return new ck(Fk, Bk)
      }
      static createSet(kk, Fk) {
        return new ck(kk, Fk)
      }
    }

    function Gk(kk, Fk, Bk) {
      let Rk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (0 == Fk && Bk <= 0) return;
      let tk = kk.length - 2;
      tk >= 0 && Bk <= 0 && Bk == kk[tk + 1] ? kk[tk] += Fk : tk >= 0 && 0 == Fk && 0 == kk[tk] ? kk[tk + 1] += Bk : Rk ? (kk[tk] += Fk, kk[tk + 1] += Bk) : kk.push(Fk, Bk)
    }

    function Tk(kk, Fk, Bk) {
      if (0 == Bk.length) return;
      let Rk = Fk.length - 2 >> 1;
      if (Rk < kk.length) kk[kk.length - 1] = kk[kk.length - 1].append(Bk);
      else {
        for (; kk.length < Rk;) kk.push(yk.empty);
        kk.push(Bk)
      }
    }

    function rk(kk, Fk, Bk) {
      let Rk = kk.inserted;
      for (let tk = 0, ak = 0, Xk = 0; Xk < kk.sections.length;) {
        let bk = kk.sections[Xk++],
          wk = kk.sections[Xk++];
        if (wk < 0) tk += bk, ak += bk;
        else {
          let dk = tk,
            sk = ak,
            Vk = yk.empty;
          for (; dk += bk, sk += wk, wk && Rk && (Vk = Vk.append(Rk[Xk - 2 >> 1])), !(Bk || Xk == kk.sections.length || kk.sections[Xk + 1] < 0);) bk = kk.sections[Xk++], wk = kk.sections[Xk++];
          Fk(tk, dk, ak, sk, Vk), tk = dk, ak = sk
        }
      }
    }

    function Dk(kk, Fk, Bk) {
      let Rk = [],
        tk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3] ? [] : null,
        ak = new Pk(kk),
        Xk = new Pk(Fk),
        bk = 0;
      for (let wk = -1;;) {
        if (++bk > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - likely malformed ChangeSet");
        if (ak.done && Xk.len || Xk.done && ak.len) throw new Error("Mismatched change set lengths");
        if (-1 == ak.ins && -1 == Xk.ins) {
          let kk = Math.min(ak.len, Xk.len);
          Gk(Rk, kk, -1), ak.forward(kk), Xk.forward(kk)
        } else if (Xk.ins >= 0 && (ak.ins < 0 || wk == ak.i || 0 == ak.off && (Xk.len < ak.len || Xk.len == ak.len && !Bk))) {
          let kk = Xk.len;
          for (Gk(Rk, Xk.ins, -1); kk;) {
            if (++bk > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-b");
            let Fk = Math.min(ak.len, kk);
            ak.ins >= 0 && wk < ak.i && ak.len <= Fk && (Gk(Rk, 0, ak.ins), tk && Tk(tk, Rk, ak.text), wk = ak.i), ak.forward(Fk), kk -= Fk
          }
          Xk.next()
        } else {
          if (!(ak.ins >= 0)) {
            if (ak.done && Xk.done) return tk ? ck.createSet(Rk, tk) : Uk.create(Rk);
            throw new Error("Mismatched change set lengths")
          } {
            let kk = 0,
              Fk = ak.len;
            for (; Fk;) {
              if (++bk > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-a");
              if (-1 == Xk.ins) {
                let Bk = Math.min(Fk, Xk.len);
                kk += Bk, Fk -= Bk, Xk.forward(Bk)
              } else {
                if (!(0 == Xk.ins && Xk.len < Fk)) break;
                Fk -= Xk.len, Xk.next()
              }
            }
            Gk(Rk, kk, wk < ak.i ? ak.ins : 0), tk && wk < ak.i && Tk(tk, Rk, ak.text), wk = ak.i, ak.forward(ak.len - Fk)
          }
        }
      }
    }

    function zk(kk, Fk) {
      let Bk = [],
        Rk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? [] : null,
        tk = new Pk(kk),
        ak = new Pk(Fk),
        Xk = 0;
      for (let bk = !1;;) {
        if (++Xk > 2e6) throw new Error("BLOXD CODEMIRROR: composeSets exceeded max iterations - likely malformed ChangeSet");
        if (tk.done && ak.done) return Rk ? ck.createSet(Bk, Rk) : Uk.create(Bk);
        if (0 == tk.ins) Gk(Bk, tk.len, 0, bk), tk.next();
        else if (0 != ak.len || ak.done) {
          if (tk.done || ak.done) throw new Error("Mismatched change set lengths");
          {
            let kk = Math.min(tk.len2, ak.len),
              Fk = Bk.length;
            if (-1 == tk.ins) {
              let Fk = -1 == ak.ins ? -1 : ak.off ? 0 : ak.ins;
              Gk(Bk, kk, Fk, bk), Rk && Fk && Tk(Rk, Bk, ak.text)
            } else - 1 == ak.ins ? (Gk(Bk, tk.off ? 0 : tk.len, kk, bk), Rk && Tk(Rk, Bk, tk.textBit(kk))) : (Gk(Bk, tk.off ? 0 : tk.len, ak.off ? 0 : ak.ins, bk), Rk && !ak.off && Tk(Rk, Bk, ak.text));
            bk = (tk.ins > kk || ak.ins >= 0 && ak.len > kk) && (bk || Bk.length > Fk), tk.forward2(kk), ak.forward(kk)
          }
        } else Gk(Bk, 0, ak.ins, bk), Rk && Tk(Rk, Bk, ak.text), ak.next()
      }
    }
    class Pk {
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
        return Fk >= kk.length ? yk.empty : kk[Fk]
      }
      textBit(kk) {
        let {
          inserted: Fk
        } = this.set, Bk = this.i - 2 >> 1;
        return Bk >= Fk.length && !kk ? yk.empty : Fk[Bk].slice(this.off, null == kk ? void 0 : this.off + kk)
      }
      forward(kk) {
        kk == this.len ? this.next() : (this.len -= kk, this.off += kk)
      }
      forward2(kk) {
        -1 == this.ins ? this.forward(kk) : kk == this.ins ? this.next() : (this.ins -= kk, this.off += kk)
      }
    }
    class hk {
      constructor(kk, Fk, Bk) {
        this.from = kk, this.to = Fk, this.flags = Bk
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
        let Fk, Bk, Rk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return this.empty ? Fk = Bk = kk.mapPos(this.from, Rk) : (Fk = kk.mapPos(this.from, 1), Bk = kk.mapPos(this.to, -1)), Fk == this.from && Bk == this.to ? this : new hk(Fk, Bk, this.flags)
      }
      extend(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kk,
          Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (kk <= this.anchor && Fk >= this.anchor) return qk.range(kk, Fk, void 0, void 0, Bk);
        let Rk = Math.abs(kk - this.anchor) > Math.abs(Fk - this.anchor) ? kk : Fk;
        return qk.range(this.anchor, Rk, void 0, void 0, Bk)
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
        return qk.range(kk.anchor, kk.head)
      }
      static create(kk, Fk, Bk) {
        return new hk(kk, Fk, Bk)
      }
    }
    class qk {
      constructor(kk, Fk) {
        this.hb = kk, this.mainIndex = Fk
      }
      map(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return kk.empty ? this : qk.create(this.hb.map((Bk => Bk.map(kk, Fk))), this.mainIndex)
      }
      eq(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hb.length != kk.hb.length || this.mainIndex != kk.mainIndex) return !1;
        for (let Bk = 0; Bk < this.hb.length; Bk++)
          if (!this.hb[Bk].eq(kk.hb[Bk], Fk)) return !1;
        return !0
      }
      get main() {
        return this.hb[this.mainIndex]
      }
      asSingle() {
        return 1 == this.hb.length ? this : new qk([this.main], 0)
      }
      addRange(kk) {
        let Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return qk.create([kk].concat(this.hb), Fk ? 0 : this.mainIndex + 1)
      }
      replaceRange(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.mainIndex,
          Bk = this.hb.slice();
        return Bk[Fk] = kk, qk.create(Bk, this.mainIndex)
      }
      toJSON() {
        return {
          hb: this.hb.map((kk => kk.toJSON())),
          main: this.mainIndex
        }
      }
      static fromJSON(kk) {
        if (!kk || !Array.isArray(kk.hb) || "number" != typeof kk.main || kk.main >= kk.hb.length) throw new RangeError("Invalid JSON representation for EditorSelection");
        return new qk(kk.hb.map((kk => hk.fromJSON(kk))), kk.main)
      }
      static single(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kk;
        return new qk([qk.range(kk, Fk)], 0)
      }
      static create(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (0 == kk.length) throw new RangeError("A selection needs at least one range");
        for (let Bk = 0, Rk = 0; Rk < kk.length; Rk++) {
          let tk = kk[Rk];
          if (tk.empty ? tk.from <= Bk : tk.from < Bk) return qk.normalized(kk.slice(), Fk);
          Bk = tk.to
        }
        return new qk(kk, Fk)
      }
      static cursor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Bk = arguments.length > 2 ? arguments[2] : void 0,
          Rk = arguments.length > 3 ? arguments[3] : void 0;
        return hk.create(kk, kk, (0 == Fk ? 0 : Fk < 0 ? 8 : 16) | (null == Bk ? 7 : Math.min(6, Bk)) | (null !== Rk && void 0 !== Rk ? Rk : 16777215) << 6)
      }
      static range(kk, Fk, Bk, Rk, tk) {
        let ak = (null !== Bk && void 0 !== Bk ? Bk : 16777215) << 6 | (null == Rk ? 7 : Math.min(6, Rk));
        return tk || kk == Fk || (tk = Fk < kk ? 1 : -1), Fk < kk ? hk.create(Fk, kk, 48 | ak) : hk.create(kk, Fk, (tk ? tk < 0 ? 8 : 16 : 0) | ak)
      }
      static normalized(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Bk = kk[Fk];
        kk.sort(((kk, Fk) => kk.from - Fk.from)), Fk = kk.indexOf(Bk);
        for (let Rk = 1; Rk < kk.length; Rk++) {
          let Bk = kk[Rk],
            tk = kk[Rk - 1];
          if (Bk.empty ? Bk.from <= tk.to : Bk.from < tk.to) {
            let ak = tk.from,
              Xk = Math.max(Bk.to, tk.to);
            Rk <= Fk && Fk--, kk.splice(--Rk, 2, Bk.anchor > Bk.head ? qk.range(Xk, ak) : qk.range(ak, Xk))
          }
        }
        return new qk(kk, Fk)
      }
    }

    function Ck(kk, Fk) {
      for (let Bk of kk.hb)
        if (Bk.to > Fk) throw new RangeError("Selection points outside of document")
    }
    let Zk = 0;
    class pk {
      constructor(kk, Fk, Bk, Rk, tk) {
        this.combine = kk, this.compareInput = Fk, this.compare = Bk, this.isStatic = Rk, this.id = Zk++, this.default = kk([]), this.extensions = "function" == typeof tk ? tk(this) : tk
      }
      get reader() {
        return this
      }
      static define() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return new pk(kk.combine || (kk => kk), kk.compareInput || ((kk, Fk) => kk === Fk), kk.compare || (kk.combine ? (kk, Fk) => kk === Fk : Kk), !!kk.static, kk.enables)
      }
      of(kk) {
        return new xk([], this, 0, kk)
      }
      compute(kk, Fk) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new xk(kk, this, 1, Fk)
      }
      computeN(kk, Fk) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new xk(kk, this, 2, Fk)
      }
      from(kk, Fk) {
        return Fk || (Fk = kk => kk), this.compute([kk], (Bk => Fk(Bk.field(kk))))
      }
    }

    function Kk(kk, Fk) {
      return kk == Fk || kk.length == Fk.length && kk.every(((kk, Bk) => kk === Fk[Bk]))
    }
    class xk {
      constructor(kk, Fk, Bk, Rk) {
        this.dependencies = kk, this.facet = Fk, this.type = Bk, this.value = Rk, this.id = Zk++
      }
      dynamicSlot(kk) {
        var Fk;
        let Bk = this.value,
          Rk = this.facet.compareInput,
          tk = this.id,
          ak = kk[tk] >> 1,
          Xk = 2 == this.type,
          bk = !1,
          wk = !1,
          dk = [];
        for (let sk of this.dependencies) "doc" == sk ? bk = !0 : "selection" == sk ? wk = !0 : 0 == (1 & (null !== (Fk = kk[sk.id]) && void 0 !== Fk ? Fk : 1)) && dk.push(kk[sk.id]);
        return {
          create: kk => (kk.values[ak] = Bk(kk), 1),
          update(kk, Fk) {
            if (bk && Fk.docChanged || wk && (Fk.docChanged || Fk.selection) || lk(kk, dk)) {
              let Fk = Bk(kk);
              if (Xk ? !jk(Fk, kk.values[ak], Rk) : !Rk(Fk, kk.values[ak])) return kk.values[ak] = Fk, 1
            }
            return 0
          },
          reconfigure: (kk, Fk) => {
            let bk, wk = Fk.config.address[tk];
            if (null != wk) {
              let tk = VF(Fk, wk);
              if (this.dependencies.every((Bk => Bk instanceof pk ? Fk.facet(Bk) === kk.facet(Bk) : !(Bk instanceof Qk) || Fk.field(Bk, !1) == kk.field(Bk, !1))) || (Xk ? jk(bk = Bk(kk), tk, Rk) : Rk(bk = Bk(kk), tk))) return kk.values[ak] = tk, 0
            } else bk = Bk(kk);
            return kk.values[ak] = bk, 1
          }
        }
      }
    }

    function jk(kk, Fk, Bk) {
      if (kk.length != Fk.length) return !1;
      for (let Rk = 0; Rk < kk.length; Rk++)
        if (!Bk(kk[Rk], Fk[Rk])) return !1;
      return !0
    }

    function lk(kk, Fk) {
      let Bk = !1;
      for (let Rk of Fk) 1 & sF(kk, Rk) && (Bk = !0);
      return Bk
    }

    function nk(kk, Fk, Bk) {
      let Rk = Bk.map((Fk => kk[Fk.id])),
        tk = Bk.map((kk => kk.type)),
        ak = Rk.filter((kk => !(1 & kk))),
        Xk = kk[Fk.id] >> 1;

      function bk(kk) {
        let Bk = [];
        for (let Fk = 0; Fk < Rk.length; Fk++) {
          let ak = VF(kk, Rk[Fk]);
          if (2 == tk[Fk])
            for (let kk of ak) Bk.push(kk);
          else Bk.push(ak)
        }
        return Fk.combine(Bk)
      }
      return {
        create(kk) {
          for (let Fk of Rk) sF(kk, Fk);
          return kk.values[Xk] = bk(kk), 1
        },
        update(kk, Bk) {
          if (!lk(kk, ak)) return 0;
          let Rk = bk(kk);
          return Fk.compare(Rk, kk.values[Xk]) ? 0 : (kk.values[Xk] = Rk, 1)
        },
        reconfigure(kk, tk) {
          let ak = lk(kk, Rk),
            wk = tk.config.facets[Fk.id],
            dk = tk.facet(Fk);
          if (wk && !ak && Kk(Bk, wk)) return kk.values[Xk] = dk, 0;
          let sk = bk(kk);
          return Fk.compare(sk, dk) ? (kk.values[Xk] = dk, 0) : (kk.values[Xk] = sk, 1)
        }
      }
    }
    const Ik = pk.define({
      static: !0
    });
    class Qk {
      constructor(kk, Fk, Bk, Rk, tk) {
        this.id = kk, this.createF = Fk, this.updateF = Bk, this.compareF = Rk, this.spec = tk, this.provides = void 0
      }
      static define(kk) {
        let Fk = new Qk(Zk++, kk.create, kk.update, kk.compare || ((kk, Fk) => kk === Fk), kk);
        return kk.provide && (Fk.provides = kk.provide(Fk)), Fk
      }
      create(kk) {
        let Fk = kk.facet(Ik).find((kk => kk.field == this));
        return ((null === Fk || void 0 === Fk ? void 0 : Fk.create) || this.createF)(kk)
      }
      slot(kk) {
        let Fk = kk[this.id] >> 1;
        return {
          create: kk => (kk.values[Fk] = this.create(kk), 1),
          update: (kk, Bk) => {
            let Rk = kk.values[Fk],
              tk = this.updateF(Rk, Bk);
            return this.compareF(Rk, tk) ? 0 : (kk.values[Fk] = tk, 1)
          },
          reconfigure: (kk, Bk) => {
            let Rk, tk = kk.facet(Ik),
              ak = Bk.facet(Ik);
            return (Rk = tk.find((kk => kk.field == this))) && Rk != ak.find((kk => kk.field == this)) ? (kk.values[Fk] = Rk.create(kk), 1) : null != Bk.config.address[this.id] ? (kk.values[Fk] = Bk.field(this), 0) : (kk.values[Fk] = this.create(kk), 1)
          }
        }
      }
      init(kk) {
        return [this, Ik.of({
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
      BF = 2,
      RF = 1;

    function tF(kk) {
      return Fk => new XF(Fk, kk)
    }
    const aF = {
      highest: tF(0),
      high: tF(RF),
      default: tF(BF),
      low: tF(FF),
      lowest: tF(kF)
    };
    class XF {
      constructor(kk, Fk) {
        this.inner = kk, this.prec = Fk
      }
    }
    class bF {
      of(kk) {
        return new wF(this, kk)
      }
      reconfigure(kk) {
        return bF.reconfigure.of({
          compartment: this,
          extension: kk
        })
      }
      get(kk) {
        return kk.config.compartments.get(this)
      }
    }
    class wF {
      constructor(kk, Fk) {
        this.compartment = kk, this.inner = Fk
      }
    }
    class dF {
      constructor(kk, Fk, Bk, Rk, tk, ak) {
        for (this.base = kk, this.compartments = Fk, this.dynamicSlots = Bk, this.address = Rk, this.staticValues = tk, this.facets = ak, this.statusTemplate = []; this.statusTemplate.length < Bk.length;) this.statusTemplate.push(0)
      }
      staticFacet(kk) {
        let Fk = this.address[kk.id];
        return null == Fk ? kk.default : this.staticValues[Fk >> 1]
      }
      static resolve(kk, Fk, Bk) {
        let Rk = [],
          tk = Object.create(null),
          ak = new Map;
        for (let Vk of function(kk, Fk, Bk) {
            let Rk = [
                [],
                [],
                [],
                [],
                []
              ],
              tk = new Map;

            function ak(kk, Xk) {
              let bk = tk.get(kk);
              if (null != bk) {
                if (bk <= Xk) return;
                let Fk = Rk[bk].indexOf(kk);
                Fk > -1 && Rk[bk].splice(Fk, 1), kk instanceof wF && Bk.delete(kk.compartment)
              }
              if (tk.set(kk, Xk), Array.isArray(kk))
                for (let Fk of kk) ak(Fk, Xk);
              else if (kk instanceof wF) {
                if (Bk.has(kk.compartment)) throw new RangeError("Duplicate use of compartment in extensions");
                let Rk = Fk.get(kk.compartment) || kk.inner;
                Bk.set(kk.compartment, Rk), ak(Rk, Xk)
              } else if (kk instanceof XF) ak(kk.inner, kk.prec);
              else if (kk instanceof Qk) Rk[Xk].push(kk), kk.provides && ak(kk.provides, Xk);
              else if (kk instanceof xk) Rk[Xk].push(kk), kk.facet.extensions && ak(kk.facet.extensions, BF);
              else {
                let Fk = kk.extension;
                if (!Fk) throw new Error(`Unrecognized extension value in extension set (${kk}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
                ak(Fk, Xk)
              }
            }
            return ak(kk, BF), Rk.reduce(((kk, Fk) => kk.concat(Fk)))
          }(kk, Fk, ak)) Vk instanceof Qk ? Rk.push(Vk) : (tk[Vk.facet.id] || (tk[Vk.facet.id] = [])).push(Vk);
        let Xk = Object.create(null),
          bk = [],
          wk = [];
        for (let Vk of Rk) Xk[Vk.id] = wk.length << 1, wk.push((kk => Vk.slot(kk)));
        let dk = null === Bk || void 0 === Bk ? void 0 : Bk.config.facets;
        for (let Vk in tk) {
          let kk = tk[Vk],
            Fk = kk[0].facet,
            Rk = dk && dk[Vk] || [];
          if (kk.every((kk => 0 == kk.type)))
            if (Xk[Fk.id] = bk.length << 1 | 1, Kk(Rk, kk)) bk.push(Bk.facet(Fk));
            else {
              let Rk = Fk.combine(kk.map((kk => kk.value)));
              bk.push(Bk && Fk.compare(Rk, Bk.facet(Fk)) ? Bk.facet(Fk) : Rk)
            }
          else {
            for (let Fk of kk) 0 == Fk.type ? (Xk[Fk.id] = bk.length << 1 | 1, bk.push(Fk.value)) : (Xk[Fk.id] = wk.length << 1, wk.push((kk => Fk.dynamicSlot(kk))));
            Xk[Fk.id] = wk.length << 1, wk.push((Bk => nk(Bk, Fk, kk)))
          }
        }
        let sk = wk.map((kk => kk(Xk)));
        return new dF(kk, ak, sk, Xk, bk, tk)
      }
    }

    function sF(kk, Fk) {
      if (1 & Fk) return 2;
      let Bk = Fk >> 1,
        Rk = kk.status[Bk];
      if (4 == Rk) throw new Error("Cyclic dependency between fields and/or facets");
      if (2 & Rk) return Rk;
      kk.status[Bk] = 4;
      let tk = kk.computeSlot(kk, kk.config.dynamicSlots[Bk]);
      return kk.status[Bk] = 2 | tk
    }

    function VF(kk, Fk) {
      return 1 & Fk ? kk.config.staticValues[Fk >> 1] : kk.values[Fk >> 1]
    }
    const JF = pk.define(),
      AF = pk.define({
        combine: kk => kk.some((kk => kk)),
        static: !0
      }),
      eF = pk.define({
        combine: kk => kk.length ? kk[0] : void 0,
        static: !0
      }),
      yF = pk.define(),
      fF = pk.define(),
      mF = pk.define(),
      WF = pk.define({
        combine: kk => !!kk.length && kk[0]
      });
    class vF {
      constructor(kk, Fk) {
        this.type = kk, this.value = Fk
      }
      static define() {
        return new iF
      }
    }
    class iF {
      of(kk) {
        return new vF(this, kk)
      }
    }
    class YF {
      constructor(kk) {
        this.map = kk
      }
      of(kk) {
        return new oF(this, kk)
      }
    }
    class oF {
      constructor(kk, Fk) {
        this.type = kk, this.value = Fk
      }
      map(kk) {
        let Fk = this.type.map(this.value, kk);
        return void 0 === Fk ? void 0 : Fk == this.value ? this : new oF(this.type, Fk)
      }
      is(kk) {
        return this.type == kk
      }
      static define() {
        return new YF((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).map || (kk => kk))
      }
      static mapEffects(kk, Fk) {
        if (!kk.length) return kk;
        let Bk = [];
        for (let Rk of kk) {
          let kk = Rk.map(Fk);
          kk && Bk.push(kk)
        }
        return Bk
      }
    }
    oF.reconfigure = oF.define(), oF.appendConfig = oF.define();
    class LF {
      constructor(kk, Fk, Bk, Rk, tk, ak) {
        this.startState = kk, this.changes = Fk, this.selection = Bk, this.effects = Rk, this.annotations = tk, this.scrollIntoView = ak, this._doc = null, this._state = null, Bk && Ck(Bk, Fk.newLength), tk.some((kk => kk.type == LF.time)) || (this.annotations = tk.concat(LF.time.of(Date.now())))
      }
      static create(kk, Fk, Bk, Rk, tk, ak) {
        return new LF(kk, Fk, Bk, Rk, tk, ak)
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
        let Fk = this.annotation(LF.userEvent);
        return !(!Fk || !(Fk == kk || Fk.length > kk.length && Fk.slice(0, kk.length) == kk && "." == Fk[kk.length]))
      }
    }

    function OF(kk, Fk) {
      let Bk = [];
      for (let Rk = 0, tk = 0;;) {
        let ak, Xk;
        if (Rk < kk.length && (tk == Fk.length || Fk[tk] >= kk[Rk])) ak = kk[Rk++], Xk = kk[Rk++];
        else {
          if (!(tk < Fk.length)) return Bk;
          ak = Fk[tk++], Xk = Fk[tk++]
        }!Bk.length || Bk[Bk.length - 1] < ak ? Bk.push(ak, Xk) : Bk[Bk.length - 1] < Xk && (Bk[Bk.length - 1] = Xk)
      }
    }

    function EF(kk, Fk, Bk) {
      var Rk;
      let tk, ak, Xk;
      return Bk ? (tk = Fk.changes, ak = ck.empty(Fk.changes.length), Xk = kk.changes.compose(Fk.changes)) : (tk = Fk.changes.map(kk.changes), ak = kk.changes.mapDesc(Fk.changes, !0), Xk = kk.changes.compose(tk)), {
        changes: Xk,
        selection: Fk.selection ? Fk.selection.map(ak) : null === (Rk = kk.selection) || void 0 === Rk ? void 0 : Rk.map(tk),
        effects: oF.mapEffects(kk.effects, tk).concat(oF.mapEffects(Fk.effects, ak)),
        annotations: kk.annotations.length ? kk.annotations.concat(Fk.annotations) : Fk.annotations,
        scrollIntoView: kk.scrollIntoView || Fk.scrollIntoView
      }
    }

    function SF(kk, Fk, Bk) {
      let Rk = Fk.selection,
        tk = uF(Fk.annotations);
      return Fk.userEvent && (tk = tk.concat(LF.userEvent.of(Fk.userEvent))), {
        changes: Fk.changes instanceof ck ? Fk.changes : ck.of(Fk.changes || [], Bk, kk.facet(eF)),
        selection: Rk && (Rk instanceof qk ? Rk : qk.single(Rk.anchor, Rk.head)),
        effects: uF(Fk.effects),
        annotations: tk,
        scrollIntoView: !!Fk.scrollIntoView
      }
    }

    function NF(kk, Fk, Bk) {
      let Rk = SF(kk, Fk.length ? Fk[0] : {}, kk.doc.length);
      Fk.length && !1 === Fk[0].filter && (Bk = !1);
      for (let ak = 1; ak < Fk.length; ak++) {
        !1 === Fk[ak].filter && (Bk = !1);
        let tk = !!Fk[ak].sequential;
        Rk = EF(Rk, SF(kk, Fk[ak], tk ? Rk.changes.newLength : kk.doc.length), tk)
      }
      let tk = LF.create(kk, Rk.changes, Rk.selection, Rk.effects, Rk.annotations, Rk.scrollIntoView);
      return function(kk) {
        let Fk = kk.startState,
          Bk = Fk.facet(mF),
          Rk = kk;
        for (let tk = Bk.length - 1; tk >= 0; tk--) {
          let ak = Bk[tk](kk);
          ak && Object.keys(ak).length && (Rk = EF(Rk, SF(Fk, ak, kk.changes.newLength), !0))
        }
        return Rk == kk ? kk : LF.create(Fk, kk.changes, kk.selection, Rk.effects, Rk.annotations, Rk.scrollIntoView)
      }(Bk ? function(kk) {
        let Fk = kk.startState,
          Bk = !0;
        for (let tk of Fk.facet(yF)) {
          let Fk = tk(kk);
          if (!1 === Fk) {
            Bk = !1;
            break
          }
          Array.isArray(Fk) && (Bk = !0 === Bk ? Fk : OF(Bk, Fk))
        }
        if (!0 !== Bk) {
          let Rk, tk;
          if (!1 === Bk) tk = kk.changes.invertedDesc, Rk = ck.empty(Fk.doc.length);
          else {
            let Fk = kk.changes.filter(Bk);
            Rk = Fk.changes, tk = Fk.filtered.mapDesc(Fk.changes).invertedDesc
          }
          kk = LF.create(Fk, Rk, kk.selection && kk.selection.map(tk), oF.mapEffects(kk.effects, tk), kk.annotations, kk.scrollIntoView)
        }
        let Rk = Fk.facet(fF);
        for (let tk = Rk.length - 1; tk >= 0; tk--) {
          let Bk = Rk[tk](kk);
          kk = Bk instanceof LF ? Bk : Array.isArray(Bk) && 1 == Bk.length && Bk[0] instanceof LF ? Bk[0] : NF(Fk, uF(Bk), !1)
        }
        return kk
      }(tk) : tk)
    }
    LF.time = vF.define(), LF.userEvent = vF.define(), LF.addToHistory = vF.define(), LF.remote = vF.define();
    const HF = [];

    function uF(kk) {
      return null == kk ? HF : Array.isArray(kk) ? kk : [kk]
    }
    var MF = function(kk) {
      return kk[kk.Word = 0] = "Word", kk[kk.Space = 1] = "Space", kk[kk.Other = 2] = "Other", kk
    }(MF || (MF = {}));
    const gF = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
    let UF;
    try {
      UF = new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u")
    } catch (RB) {}

    function cF(kk) {
      return Fk => {
        if (!/\S/.test(Fk)) return MF.Space;
        if (function(kk) {
            if (UF) return UF.test(kk);
            for (let Fk = 0; Fk < kk.length; Fk++) {
              let Bk = kk[Fk];
              if (/\w/.test(Bk) || Bk > "\x80" && (Bk.toUpperCase() != Bk.toLowerCase() || gF.test(Bk))) return !0
            }
            return !1
          }(Fk)) return MF.Word;
        for (let Bk = 0; Bk < kk.length; Bk++)
          if (Fk.indexOf(kk[Bk]) > -1) return MF.Word;
        return MF.Other
      }
    }
    class GF {
      constructor(kk, Fk, Bk, Rk, tk, ak) {
        this.config = kk, this.doc = Fk, this.selection = Bk, this.values = Rk, this.status = kk.statusTemplate.slice(), this.computeSlot = tk, ak && (ak._state = this);
        for (let Xk = 0; Xk < this.config.dynamicSlots.length; Xk++) sF(this, Xk << 1);
        this.computeSlot = null
      }
      field(kk) {
        let Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Bk = this.config.address[kk.id];
        if (null != Bk) return sF(this, Bk), VF(this, Bk);
        if (Fk) throw new RangeError("Field is not present in this state")
      }
      update() {
        for (var kk = arguments.length, Fk = new Array(kk), Bk = 0; Bk < kk; Bk++) Fk[Bk] = arguments[Bk];
        return NF(this, Fk, !0)
      }
      applyTransaction(kk) {
        let Fk, Bk = this.config,
          {
            base: Rk,
            compartments: tk
          } = Bk;
        for (let Xk of kk.effects) Xk.is(bF.reconfigure) ? (Bk && (tk = new Map, Bk.compartments.forEach(((kk, Fk) => tk.set(Fk, kk))), Bk = null), tk.set(Xk.value.compartment, Xk.value.extension)) : Xk.is(oF.reconfigure) ? (Bk = null, Rk = Xk.value) : Xk.is(oF.appendConfig) && (Bk = null, Rk = uF(Rk).concat(Xk.value));
        if (Bk) Fk = kk.startState.values.slice();
        else {
          Bk = dF.resolve(Rk, tk, this), Fk = new GF(Bk, this.doc, this.selection, Bk.dynamicSlots.map((() => null)), ((kk, Fk) => Fk.reconfigure(kk, this)), null).values
        }
        let ak = kk.startState.facet(AF) ? kk.newSelection : kk.newSelection.asSingle();
        new GF(Bk, kk.newDoc, ak, Fk, ((Fk, Bk) => Bk.update(Fk, kk)), kk)
      }
      replaceSelection(kk) {
        return "string" == typeof kk && (kk = this.toText(kk)), this.changeByRange((Fk => ({
          changes: {
            from: Fk.from,
            to: Fk.to,
            insert: kk
          },
          range: qk.cursor(Fk.from + kk.length)
        })))
      }
      changeByRange(kk) {
        let Fk = this.selection,
          Bk = kk(Fk.hb[0]),
          Rk = this.changes(Bk.changes),
          tk = [Bk.range],
          ak = uF(Bk.effects);
        for (let Xk = 1; Xk < Fk.hb.length; Xk++) {
          let Bk = kk(Fk.hb[Xk]),
            bk = this.changes(Bk.changes),
            wk = bk.map(Rk);
          for (let kk = 0; kk < Xk; kk++) tk[kk] = tk[kk].map(wk);
          let dk = Rk.mapDesc(bk, !0);
          tk.push(Bk.range.map(dk)), Rk = Rk.compose(wk), ak = oF.mapEffects(ak, wk).concat(oF.mapEffects(uF(Bk.effects), dk))
        }
        return {
          changes: Rk,
          selection: qk.create(tk, Fk.mainIndex),
          effects: ak
        }
      }
      changes() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return kk instanceof ck ? kk : ck.of(kk, this.doc.length, this.facet(GF.lineSeparator))
      }
      toText(kk) {
        return yk.of(kk.split(this.facet(GF.lineSeparator) || Mk))
      }
      sliceDoc() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.doc.length;
        return this.doc.sliceString(kk, Fk, this.lineBreak)
      }
      facet(kk) {
        let Fk = this.config.address[kk.id];
        return null == Fk ? kk.default : (sF(this, Fk), VF(this, Fk))
      }
      toJSON(kk) {
        let Fk = {
          doc: this.sliceDoc(),
          selection: this.selection.toJSON()
        };
        if (kk)
          for (let Bk in kk) {
            let Rk = kk[Bk];
            Rk instanceof Qk && null != this.config.address[Rk.id] && (Fk[Bk] = Rk.spec.toJSON(this.field(kk[Bk]), this))
          }
        return Fk
      }
      static fromJSON(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          Bk = arguments.length > 2 ? arguments[2] : void 0;
        if (!kk || "string" != typeof kk.doc) throw new RangeError("Invalid JSON representation for EditorState");
        let Rk = [];
        if (Bk)
          for (let tk in Bk)
            if (Object.prototype.hasOwnProperty.call(kk, tk)) {
              let Fk = Bk[tk],
                ak = kk[tk];
              Rk.push(Fk.init((kk => Fk.spec.fromJSON(ak, kk))))
            } return GF.create({
          doc: kk.doc,
          selection: qk.fromJSON(kk.selection),
          extensions: Fk.extensions ? Rk.concat([Fk.extensions]) : Rk
        })
      }
      static create() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          Fk = dF.resolve(kk.extensions || [], new Map),
          Bk = kk.doc instanceof yk ? kk.doc : yk.of((kk.doc || "").split(Fk.staticFacet(GF.lineSeparator) || Mk)),
          Rk = kk.selection ? kk.selection instanceof qk ? kk.selection : qk.single(kk.selection.anchor, kk.selection.head) : qk.single(0);
        return Ck(Rk, Bk.length), Fk.staticFacet(AF) || (Rk = Rk.asSingle()), new GF(Fk, Bk, Rk, Fk.dynamicSlots.map((() => null)), ((kk, Fk) => Fk.create(kk)), null)
      }
      get tabSize() {
        return this.facet(GF.tabSize)
      }
      get lineBreak() {
        return this.facet(GF.lineSeparator) || "\n"
      }
      get readOnly() {
        return this.facet(WF)
      }
      phrase(kk) {
        for (var Fk = arguments.length, Bk = new Array(Fk > 1 ? Fk - 1 : 0), Rk = 1; Rk < Fk; Rk++) Bk[Rk - 1] = arguments[Rk];
        for (let tk of this.facet(GF.phrases))
          if (Object.prototype.hasOwnProperty.call(tk, kk)) {
            kk = tk[kk];
            break
          } return Bk.length && (kk = kk.replace(/\$(\$|\d*)/g, ((kk, Fk) => {
          if ("$" == Fk) return "$";
          let Rk = +(Fk || 1);
          return !Rk || Rk > Bk.length ? kk : Bk[Rk - 1]
        }))), kk
      }
      languageDataAt(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          Rk = [];
        for (let tk of this.facet(JF))
          for (let ak of tk(this, Fk, Bk)) Object.prototype.hasOwnProperty.call(ak, kk) && Rk.push(ak[kk]);
        return Rk
      }
      charCategorizer(kk) {
        let Fk = this.languageDataAt("wordChars", kk);
        return cF(Fk.length ? Fk[0] : "")
      }
      wordAt(kk) {
        let {
          text: Fk,
          from: Bk,
          length: Rk
        } = this.doc.lineAt(kk), tk = this.charCategorizer(kk), ak = kk - Bk, Xk = kk - Bk;
        for (; ak > 0;) {
          let kk = Sk(Fk, ak, !1);
          if (tk(Fk.slice(kk, ak)) != MF.Word) break;
          ak = kk
        }
        for (; Xk < Rk;) {
          let kk = Sk(Fk, Xk);
          if (tk(Fk.slice(Xk, kk)) != MF.Word) break;
          Xk = kk
        }
        return ak == Xk ? null : qk.range(ak + Bk, Xk + Bk)
      }
    }

    function TF(kk, Fk) {
      let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        Rk = {};
      for (let tk of kk)
        for (let kk of Object.keys(tk)) {
          let Fk = tk[kk],
            ak = Rk[kk];
          if (void 0 === ak) Rk[kk] = Fk;
          else if (ak === Fk || void 0 === Fk);
          else {
            if (!Object.hasOwnProperty.call(Bk, kk)) throw new Error("Config merge conflict for field " + kk);
            Rk[kk] = Bk[kk](ak, Fk)
          }
        }
      for (let tk in Fk) void 0 === Rk[tk] && (Rk[tk] = Fk[tk]);
      return Rk
    }
    GF.allowMultipleSelections = AF, GF.tabSize = pk.define({
      combine: kk => kk.length ? kk[0] : 4
    }), GF.lineSeparator = eF, GF.readOnly = WF, GF.phrases = pk.define({
      compare(kk, Fk) {
        let Bk = Object.keys(kk),
          Rk = Object.keys(Fk);
        return Bk.length == Rk.length && Bk.every((Bk => kk[Bk] == Fk[Bk]))
      }
    }), GF.languageData = JF, GF.changeFilter = yF, GF.transactionFilter = fF, GF.transactionExtender = mF, bF.reconfigure = oF.define();
    class rF {
      eq(kk) {
        return this == kk
      }
      range(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kk;
        return zF.create(kk, Fk, this)
      }
    }

    function DF(kk, Fk) {
      return kk == Fk || kk.constructor == Fk.constructor && kk.eq(Fk)
    }
    rF.prototype.startSide = rF.prototype.endSide = 0, rF.prototype.point = !1, rF.prototype.mapMode = gk.TrackDel;
    class zF {
      constructor(kk, Fk, Bk) {
        this.from = kk, this.to = Fk, this.value = Bk
      }
      static create(kk, Fk, Bk) {
        return new zF(kk, Fk, Bk)
      }
    }

    function PF(kk, Fk) {
      return kk.from - Fk.from || kk.value.startSide - Fk.value.startSide
    }
    class hF {
      constructor(kk, Fk, Bk, Rk) {
        this.from = kk, this.to = Fk, this.value = Bk, this.KBk = Rk
      }
      get length() {
        return this.to[this.to.length - 1]
      }
      findIndex(kk, Fk, Bk) {
        let Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          tk = Bk ? this.to : this.from;
        for (let ak = Rk, Xk = tk.length;;) {
          if (ak == Xk) return ak;
          let Rk = ak + Xk >> 1,
            bk = tk[Rk] - kk || (Bk ? this.value[Rk].endSide : this.value[Rk].startSide) - Fk;
          if (Rk == ak) return bk >= 0 ? ak : Xk;
          bk >= 0 ? Xk = Rk : ak = Rk + 1
        }
      }
      between(kk, Fk, Bk, Rk) {
        for (let tk = this.findIndex(Fk, -1e9, !0), ak = this.findIndex(Bk, 1e9, !1, tk); tk < ak; tk++)
          if (!1 === Rk(this.from[tk] + kk, this.to[tk] + kk, this.value[tk])) return !1
      }
      map(kk, Fk) {
        let Bk = [],
          Rk = [],
          tk = [],
          ak = -1,
          Xk = -1;
        for (let bk = 0; bk < this.value.length; bk++) {
          let wk, dk, sk = this.value[bk],
            Vk = this.from[bk] + kk,
            Jk = this.to[bk] + kk;
          if (Vk == Jk) {
            let kk = Fk.mapPos(Vk, sk.startSide, sk.mapMode);
            if (null == kk) continue;
            if (wk = dk = kk, sk.startSide != sk.endSide && (dk = Fk.mapPos(Vk, sk.endSide), dk < wk)) continue
          } else if (wk = Fk.mapPos(Vk, sk.startSide), dk = Fk.mapPos(Jk, sk.endSide), wk > dk || wk == dk && sk.startSide > 0 && sk.endSide <= 0) continue;
          (dk - wk || sk.endSide - sk.startSide) < 0 || (ak < 0 && (ak = wk), sk.point && (Xk = Math.max(Xk, dk - wk)), Bk.push(sk), Rk.push(wk - ak), tk.push(dk - ak))
        }
        return {
          mapped: Bk.length ? new hF(Rk, tk, Bk, Xk) : null,
          pos: ak
        }
      }
    }
    class qF {
      constructor(kk, Fk, Bk, Rk) {
        this.chunkPos = kk, this.chunk = Fk, this.nextLayer = Bk, this.KBk = Rk
      }
      static create(kk, Fk, Bk, Rk) {
        return new qF(kk, Fk, Bk, Rk)
      }
      get length() {
        let kk = this.chunk.length - 1;
        return kk < 0 ? 0 : Math.max(this.chunkEnd(kk), this.nextLayer.length)
      }
      get size() {
        if (this.Se) return 0;
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
          sort: Bk = !1,
          filterFrom: Rk = 0,
          filterTo: tk = this.length
        } = kk, ak = kk.filter;
        if (0 == Fk.length && !ak) return this;
        if (Bk && (Fk = Fk.slice().sort(PF)), this.Se) return Fk.length ? qF.of(Fk) : this;
        let Xk = new pF(this, null, -1).goto(0),
          bk = 0,
          wk = [],
          dk = new CF;
        for (; Xk.value || bk < Fk.length;)
          if (bk < Fk.length && (Xk.from - Fk[bk].from || Xk.startSide - Fk[bk].value.startSide) >= 0) {
            let kk = Fk[bk++];
            dk.addInner(kk.from, kk.to, kk.value) || wk.push(kk)
          } else 1 == Xk.rangeIndex && Xk.chunkIndex < this.chunk.length && (bk == Fk.length || this.chunkEnd(Xk.chunkIndex) < Fk[bk].from) && (!ak || Rk > this.chunkEnd(Xk.chunkIndex) || tk < this.chunkPos[Xk.chunkIndex]) && dk.addChunk(this.chunkPos[Xk.chunkIndex], this.chunk[Xk.chunkIndex]) ? Xk.nextChunk() : ((!ak || Rk > Xk.to || tk < Xk.from || ak(Xk.from, Xk.to, Xk.value)) && (dk.addInner(Xk.from, Xk.to, Xk.value) || wk.push(zF.create(Xk.from, Xk.to, Xk.value))), Xk.next());
        return dk.finishInner(this.nextLayer.Se && !wk.length ? qF.empty : this.nextLayer.update({
          add: wk,
          filter: ak,
          filterFrom: Rk,
          filterTo: tk
        }))
      }
      map(kk) {
        if (kk.empty || this.Se) return this;
        let Fk = [],
          Bk = [],
          Rk = -1;
        for (let ak = 0; ak < this.chunk.length; ak++) {
          let tk = this.chunkPos[ak],
            Xk = this.chunk[ak],
            bk = kk.touchesRange(tk, tk + Xk.length);
          if (!1 === bk) Rk = Math.max(Rk, Xk.KBk), Fk.push(Xk), Bk.push(kk.mapPos(tk));
          else if (!0 === bk) {
            let {
              mapped: ak,
              pos: bk
            } = Xk.map(tk, kk);
            ak && (Rk = Math.max(Rk, ak.KBk), Fk.push(ak), Bk.push(bk))
          }
        }
        let tk = this.nextLayer.map(kk);
        return 0 == Fk.length ? tk : new qF(Bk, Fk, tk || qF.empty, Rk)
      }
      between(kk, Fk, Bk) {
        if (!this.Se) {
          for (let Rk = 0; Rk < this.chunk.length; Rk++) {
            let tk = this.chunkPos[Rk],
              ak = this.chunk[Rk];
            if (Fk >= tk && kk <= tk + ak.length && !1 === ak.between(tk, kk - tk, Fk - tk, Bk)) return
          }
          this.nextLayer.between(kk, Fk, Bk)
        }
      }
      iter() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return KF.from([this]).goto(kk)
      }
      get Se() {
        return this.nextLayer == this
      }
      static iter(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return KF.from(kk).goto(Fk)
      }
      static compare(kk, Fk, Bk, Rk) {
        let tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1,
          ak = kk.filter((kk => kk.KBk > 0 || !kk.Se && kk.KBk >= tk)),
          Xk = Fk.filter((kk => kk.KBk > 0 || !kk.Se && kk.KBk >= tk)),
          bk = ZF(ak, Xk, Bk),
          wk = new jF(ak, bk, tk),
          dk = new jF(Xk, bk, tk);
        Bk.iterGaps(((kk, Fk, Bk) => lF(wk, kk, dk, Fk, Bk, Rk))), Bk.empty && 0 == Bk.length && lF(wk, 0, dk, 0, 0, Rk)
      }
      static eq(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Rk = arguments.length > 3 ? arguments[3] : void 0;
        null == Rk && (Rk = 999999999);
        let tk = kk.filter((kk => !kk.Se && Fk.indexOf(kk) < 0)),
          ak = Fk.filter((Fk => !Fk.Se && kk.indexOf(Fk) < 0));
        if (tk.length != ak.length) return !1;
        if (!tk.length) return !0;
        let Xk = ZF(tk, ak),
          bk = new jF(tk, Xk, 0).goto(Bk),
          wk = new jF(ak, Xk, 0).goto(Bk);
        for (;;) {
          if (bk.to != wk.to || !nF(bk.active, wk.active) || bk.point && (!wk.point || !DF(bk.point, wk.point))) return !1;
          if (bk.to > Rk) return !0;
          bk.next(), wk.next()
        }
      }
      static spans(kk, Fk, Bk, Rk) {
        let tk = new jF(kk, null, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1).goto(Fk),
          ak = Fk,
          Xk = tk.openStart;
        for (;;) {
          let kk = Math.min(tk.to, Bk);
          if (tk.point) {
            let Bk = tk.activeForPoint(tk.to),
              bk = tk.pointFrom < Fk ? Bk.length + 1 : tk.point.startSide < 0 ? Bk.length : Math.min(Bk.length, Xk);
            Rk.point(ak, kk, tk.point, Bk, bk, tk.pointRank), Xk = Math.min(tk.openEnd(kk), Bk.length)
          } else kk > ak && (Rk.span(ak, kk, tk.active, Xk), Xk = tk.openEnd(kk));
          if (tk.to > Bk) return Xk + (tk.point && tk.to > Bk ? 1 : 0);
          ak = tk.to, tk.next()
        }
      }
      static of (kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Bk = new CF;
        for (let Rk of kk instanceof zF ? [kk] : Fk ? function(kk) {
            if (kk.length > 1)
              for (let Fk = kk[0], Bk = 1; Bk < kk.length; Bk++) {
                let Rk = kk[Bk];
                if (PF(Fk, Rk) > 0) return kk.slice().sort(PF);
                Fk = Rk
              }
            return kk
          }(kk) : kk) Bk.add(Rk.from, Rk.to, Rk.value);
        return Bk.finish()
      }
      static join(kk) {
        if (!kk.length) return qF.empty;
        let Fk = kk[kk.length - 1];
        for (let Bk = kk.length - 2; Bk >= 0; Bk--)
          for (let Rk = kk[Bk]; Rk != qF.empty; Rk = Rk.nextLayer) Fk = new qF(Rk.chunkPos, Rk.chunk, Fk, Math.max(Rk.KBk, Fk.KBk));
        return Fk
      }
    }
    qF.empty = new qF([], [], null, -1), qF.empty.nextLayer = qF.empty;
    class CF {
      finishChunk(kk) {
        this.chunks.push(new hF(this.from, this.to, this.value, this.KBk)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.KBk), this.KBk = -1, kk && (this.from = [], this.to = [], this.value = [])
      }
      constructor() {
        this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.KBk = -1, this.setMaxPoint = -1, this.nextLayer = null
      }
      add(kk, Fk, Bk) {
        this.addInner(kk, Fk, Bk) || (this.nextLayer || (this.nextLayer = new CF)).add(kk, Fk, Bk)
      }
      addInner(kk, Fk, Bk) {
        let Rk = kk - this.lastTo || Bk.startSide - this.last.endSide;
        if (Rk <= 0 && (kk - this.lastFrom || Bk.startSide - this.last.startSide) < 0) throw new Error("Ranges must be added sorted by `from` position and `startSide`");
        return !(Rk < 0) && (250 == this.from.length && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = kk), this.from.push(kk - this.chunkStart), this.to.push(Fk - this.chunkStart), this.last = Bk, this.lastFrom = kk, this.lastTo = Fk, this.value.push(Bk), Bk.point && (this.KBk = Math.max(this.KBk, Fk - kk)), !0)
      }
      addChunk(kk, Fk) {
        if ((kk - this.lastTo || Fk.value[0].startSide - this.last.endSide) < 0) return !1;
        this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, Fk.KBk), this.chunks.push(Fk), this.chunkPos.push(kk);
        let Bk = Fk.value.length - 1;
        return this.last = Fk.value[Bk], this.lastFrom = Fk.from[Bk] + kk, this.lastTo = Fk.to[Bk] + kk, !0
      }
      finish() {
        return this.finishInner(qF.empty)
      }
      finishInner(kk) {
        if (this.from.length && this.finishChunk(!1), 0 == this.chunks.length) return kk;
        let Fk = qF.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(kk) : kk, this.setMaxPoint);
        return this.from = null, Fk
      }
    }

    function ZF(kk, Fk, Bk) {
      let Rk = new Map;
      for (let ak of kk)
        for (let kk = 0; kk < ak.chunk.length; kk++) ak.chunk[kk].KBk <= 0 && Rk.set(ak.chunk[kk], ak.chunkPos[kk]);
      let tk = new Set;
      for (let ak of Fk)
        for (let kk = 0; kk < ak.chunk.length; kk++) {
          let Fk = Rk.get(ak.chunk[kk]);
          null == Fk || (Bk ? Bk.mapPos(Fk) : Fk) != ak.chunkPos[kk] || (null === Bk || void 0 === Bk ? void 0 : Bk.touchesRange(Fk, Fk + ak.chunk[kk].length)) || tk.add(ak.chunk[kk])
        }
      return tk
    }
    class pF {
      constructor(kk, Fk, Bk) {
        let Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.layer = kk, this.skip = Fk, this.xBk = Bk, this.rank = Rk
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
      gotoInner(kk, Fk, Bk) {
        for (; this.chunkIndex < this.layer.chunk.length;) {
          let Fk = this.layer.chunk[this.chunkIndex];
          if (!(this.skip && this.skip.has(Fk) || this.layer.chunkEnd(this.chunkIndex) < kk || Fk.KBk < this.xBk)) break;
          this.chunkIndex++, Bk = !1
        }
        if (this.chunkIndex < this.layer.chunk.length) {
          let Rk = this.layer.chunk[this.chunkIndex].findIndex(kk - this.layer.chunkPos[this.chunkIndex], Fk, !0);
          (!Bk || this.rangeIndex < Rk) && this.setRangeIndex(Rk)
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
              Bk = kk + Fk.from[this.rangeIndex];
            if (this.from = Bk, this.to = kk + Fk.to[this.rangeIndex], this.value = Fk.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.xBk < 0 || this.value.point && this.to - this.from >= this.xBk) break
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
    class KF {
      constructor(kk) {
        this.heap = kk
      }
      static from(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          Rk = [];
        for (let tk = 0; tk < kk.length; tk++)
          for (let ak = kk[tk]; !ak.Se; ak = ak.nextLayer) ak.KBk >= Bk && Rk.push(new pF(ak, Fk, Bk, tk));
        return 1 == Rk.length ? Rk[0] : new KF(Rk)
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      goto(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        for (let Bk of this.heap) Bk.goto(kk, Fk);
        for (let Bk = this.heap.length >> 1; Bk >= 0; Bk--) xF(this.heap, Bk);
        return this.next(), this
      }
      forward(kk, Fk) {
        for (let Bk of this.heap) Bk.forward(kk, Fk);
        for (let Bk = this.heap.length >> 1; Bk >= 0; Bk--) xF(this.heap, Bk);
        (this.to - kk || this.value.endSide - Fk) < 0 && this.next()
      }
      next() {
        if (0 == this.heap.length) this.from = this.to = 1e9, this.value = null, this.rank = -1;
        else {
          let kk = this.heap[0];
          this.from = kk.from, this.to = kk.to, this.value = kk.value, this.rank = kk.rank, kk.value && kk.next(), xF(this.heap, 0)
        }
      }
    }

    function xF(kk, Fk) {
      for (let Bk = kk[Fk];;) {
        let Rk = 1 + (Fk << 1);
        if (Rk >= kk.length) break;
        let tk = kk[Rk];
        if (Rk + 1 < kk.length && tk.compare(kk[Rk + 1]) >= 0 && (tk = kk[Rk + 1], Rk++), Bk.compare(tk) < 0) break;
        kk[Rk] = Bk, kk[Fk] = tk, Fk = Rk
      }
    }
    class jF {
      constructor(kk, Fk, Bk) {
        this.xBk = Bk, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = KF.from(kk, Fk, Bk)
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
        IF(this.active, kk), IF(this.activeTo, kk), IF(this.activeRank, kk), this.minActive = kB(this.active, this.activeTo)
      }
      addActive(kk) {
        let Fk = 0,
          {
            value: Bk,
            to: Rk,
            rank: tk
          } = this.cursor;
        for (; Fk < this.activeRank.length && (tk - this.activeRank[Fk] || Rk - this.activeTo[Fk]) > 0;) Fk++;
        QF(this.active, Fk, Bk), QF(this.activeTo, Fk, Rk), QF(this.activeRank, Fk, tk), kk && QF(kk, Fk, this.cursor.from), this.minActive = kB(this.active, this.activeTo)
      }
      next() {
        let kk = this.to,
          Fk = this.point;
        this.point = null;
        let Bk = this.openStart < 0 ? [] : null;
        for (;;) {
          let Rk = this.minActive;
          if (Rk > -1 && (this.activeTo[Rk] - this.cursor.from || this.active[Rk].endSide - this.cursor.startSide) < 0) {
            if (this.activeTo[Rk] > kk) {
              this.to = this.activeTo[Rk], this.endSide = this.active[Rk].endSide;
              break
            }
            this.removeActive(Rk), Bk && IF(Bk, Rk)
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
              } else this.addActive(Bk), this.cursor.next()
            }
          }
        }
        if (Bk) {
          this.openStart = 0;
          for (let Fk = Bk.length - 1; Fk >= 0 && Bk[Fk] < kk; Fk--) this.openStart++
        }
      }
      activeForPoint(kk) {
        if (!this.active.length) return this.active;
        let Fk = [];
        for (let Bk = this.active.length - 1; Bk >= 0 && !(this.activeRank[Bk] < this.pointRank); Bk--)(this.activeTo[Bk] > kk || this.activeTo[Bk] == kk && this.active[Bk].endSide >= this.point.endSide) && Fk.push(this.active[Bk]);
        return Fk.reverse()
      }
      openEnd(kk) {
        let Fk = 0;
        for (let Bk = this.activeTo.length - 1; Bk >= 0 && this.activeTo[Bk] > kk; Bk--) Fk++;
        return Fk
      }
    }

    function lF(kk, Fk, Bk, Rk, tk, ak) {
      kk.goto(Fk), Bk.goto(Rk);
      let Xk = Rk + tk,
        bk = Rk,
        wk = Rk - Fk,
        dk = !!ak.boundChange;
      for (let sk = !1;;) {
        let Fk = kk.to + wk - Bk.to,
          Rk = Fk || kk.endSide - Bk.endSide,
          tk = Rk < 0 ? kk.to + wk : Bk.to,
          Vk = Math.min(tk, Xk);
        if (kk.point || Bk.point ? (kk.point && Bk.point && DF(kk.point, Bk.point) && nF(kk.activeForPoint(kk.to), Bk.activeForPoint(Bk.to)) || ak.comparePoint(bk, Vk, kk.point, Bk.point), sk = !1) : (sk && ak.boundChange(bk), Vk > bk && !nF(kk.active, Bk.active) && ak.compareRange(bk, Vk, kk.active, Bk.active), dk && Vk < Xk && (Fk || kk.openEnd(tk) != Bk.openEnd(tk)) && (sk = !0)), tk > Xk) break;
        bk = tk, Rk <= 0 && kk.next(), Rk >= 0 && Bk.next()
      }
    }

    function nF(kk, Fk) {
      if (kk.length != Fk.length) return !1;
      for (let Bk = 0; Bk < kk.length; Bk++)
        if (kk[Bk] != Fk[Bk] && !DF(kk[Bk], Fk[Bk])) return !1;
      return !0
    }

    function IF(kk, Fk) {
      for (let Bk = Fk, Rk = kk.length - 1; Bk < Rk; Bk++) kk[Bk] = kk[Bk + 1];
      kk.pop()
    }

    function QF(kk, Fk, Bk) {
      for (let Rk = kk.length - 1; Rk >= Fk; Rk--) kk[Rk + 1] = kk[Rk];
      kk[Fk] = Bk
    }

    function kB(kk, Fk) {
      let Bk = -1,
        Rk = 1e9;
      for (let tk = 0; tk < Fk.length; tk++)(Fk[tk] - Rk || kk[tk].endSide - kk[Bk].endSide) < 0 && (Bk = tk, Rk = Fk[tk]);
      return Bk
    }

    function FB(kk, Fk) {
      let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : kk.length,
        Rk = 0;
      for (let tk = 0; tk < Bk && tk < kk.length;) 9 == kk.charCodeAt(tk) ? (Rk += Fk - Rk % Fk, tk++) : (Rk++, tk = Sk(kk, tk));
      return Rk
    }

    function BB(kk, Fk, Bk, Rk) {
      for (let tk = 0, ak = 0;;) {
        if (ak >= Fk) return tk;
        if (tk == kk.length) break;
        ak += 9 == kk.charCodeAt(tk) ? Bk - ak % Bk : 1, tk = Sk(kk, tk)
      }
      return !0 === Rk ? -1 : kk.length
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);