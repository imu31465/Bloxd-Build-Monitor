export const id = 614;
export const ids = [614];
export const modules = {
  53864: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => YS,
      g: () => Hr,
      ChangeSet: () => qr,
      k: () => XS,
      m: () => Vr,
      q: () => RS,
      u: () => cr,
      y: () => Pr,
      C: () => WS,
      H: () => VS,
      E: () => iS,
      L: () => CS,
      P: () => KS,
      T: () => sr,
      V: () => tr,
      Y: () => yS,
      ab: () => Or,
      bb: () => lr,
      db: () => gS,
      eb: () => rQ,
      ib: () => vr,
      jb: () => SQ,
      kb: () => Lr
    });
    let Zr = [],
      Wr = [];

    function ar(rr) {
      if (rr < 768) return !1;
      for (let Sr = 0, Qr = Zr.length;;) {
        let ar = Sr + Qr >> 1;
        if (rr < Zr[ar]) Qr = ar;
        else {
          if (!(rr >= Wr[ar])) return !0;
          Sr = ar + 1
        }
        if (Sr == Qr) return !1
      }
    }

    function jr(rr) {
      return rr >= 127462 && rr <= 127487
    }(() => {
      let rr = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((rr => rr ? parseInt(rr, 36) : 1));
      for (let Sr = 0, Qr = 0; Sr < rr.length; Sr++)(Sr % 2 ? Wr : Zr).push(Qr += rr[Sr])
    })();
    const Ir = 8205;

    function fr(rr, Sr) {
      return (!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2] ? Er : pr)(rr, Sr, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function Er(rr, Sr, Qr) {
      if (Sr == rr.length) return Sr;
      Sr && mr(rr.charCodeAt(Sr)) && Nr(rr.charCodeAt(Sr - 1)) && Sr--;
      let Zr = xr(rr, Sr);
      for (Sr += Ur(Zr); Sr < rr.length;) {
        let Wr = xr(rr, Sr);
        if (Zr == Ir || Wr == Ir || Qr && ar(Wr)) Sr += Ur(Wr), Zr = Wr;
        else {
          if (!jr(Wr)) break;
          {
            let Qr = 0,
              Zr = Sr - 2;
            for (; Zr >= 0 && jr(xr(rr, Zr));) Qr++, Zr -= 2;
            if (Qr % 2 == 0) break;
            Sr += 2
          }
        }
      }
      return Sr
    }

    function pr(rr, Sr, Qr) {
      for (; Sr > 0;) {
        let Zr = Er(rr, Sr - 2, Qr);
        if (Zr < Sr) return Zr;
        Sr--
      }
      return 0
    }

    function xr(rr, Sr) {
      let Qr = rr.charCodeAt(Sr);
      if (!Nr(Qr) || Sr + 1 == rr.length) return Qr;
      let Zr = rr.charCodeAt(Sr + 1);
      return mr(Zr) ? Zr - 56320 + (Qr - 55296 << 10) + 65536 : Qr
    }

    function mr(rr) {
      return rr >= 56320 && rr < 57344
    }

    function Nr(rr) {
      return rr >= 55296 && rr < 56320
    }

    function Ur(rr) {
      return rr < 65536 ? 1 : 2
    }
    class tr {
      lineAt(rr) {
        if (rr < 0 || rr > this.length) throw new RangeError(`Invalid position ${rr} in document of length ${this.length}`);
        return this.lineInner(rr, !1, 1, 0)
      }
      line(rr) {
        if (rr < 1 || rr > this.lines) throw new RangeError(`Invalid line number ${rr} in ${this.lines}-line document`);
        return this.lineInner(rr, !0, 1, 0)
      }
      replace(rr, Sr, Qr) {
        [rr, Sr] = Tr(this, rr, Sr);
        let Zr = [];
        return this.decompose(0, rr, Zr, 2), Qr.length && Qr.decompose(0, Qr.length, Zr, 3), this.decompose(Sr, this.length, Zr, 1), zr.from(Zr, this.length - (Sr - rr) + Qr.length)
      }
      append(rr) {
        return this.replace(this.length, this.length, rr)
      }
      slice(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        [rr, Sr] = Tr(this, rr, Sr);
        let Qr = [];
        return this.decompose(rr, Sr, Qr, 0), zr.from(Qr, Sr - rr)
      }
      eq(rr) {
        if (rr == this) return !0;
        if (rr.length != this.length || rr.lines != this.lines) return !1;
        let Sr = this.scanIdentical(rr, 1),
          Qr = this.length - this.scanIdentical(rr, -1),
          Zr = new er(this),
          Wr = new er(rr);
        for (let ar = Sr, jr = Sr;;) {
          if (Zr.next(ar), Wr.next(ar), ar = 0, Zr.lineBreak != Wr.lineBreak || Zr.done != Wr.done || Zr.value != Wr.value) return !1;
          if (jr += Zr.value.length, Zr.done || jr >= Qr) return !0
        }
      }
      iter() {
        return new er(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1)
      }
      iterRange(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        return new Kr(this, rr, Sr)
      }
      iterLines(rr, Sr) {
        let Qr;
        if (null == rr) Qr = this.iter();
        else {
          null == Sr && (Sr = this.lines + 1);
          let Zr = this.line(rr).from;
          Qr = this.iterRange(Zr, Math.max(Zr, Sr == this.lines + 1 ? this.length : Sr <= 1 ? 0 : this.line(Sr - 1).to))
        }
        return new yr(Qr)
      }
      toString() {
        return this.sliceString(0)
      }
      toJSON() {
        let rr = [];
        return this.flatten(rr), rr
      }
      constructor() {}
      static of (rr) {
        if (0 == rr.length) throw new RangeError("A document must have at least one line");
        return 1 != rr.length || rr[0] ? rr.length <= 32 ? new hr(rr) : zr.from(hr.split(rr, [])) : tr.empty
      }
    }
    class hr extends tr {
      constructor(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(rr) {
          let Sr = -1;
          for (let Qr of rr) Sr += Qr.length + 1;
          return Sr
        }(rr);
        super(), this.text = rr, this.length = Sr
      }
      get lines() {
        return this.text.length
      }
      get children() {
        return null
      }
      lineInner(rr, Sr, Qr, Zr) {
        for (let Wr = 0;; Wr++) {
          let ar = this.text[Wr],
            jr = Zr + ar.length;
          if ((Sr ? Qr : jr) >= rr) return new Br(Zr, jr, Qr, ar);
          Zr = jr + 1, Qr++
        }
      }
      decompose(rr, Sr, Qr, Zr) {
        let Wr = rr <= 0 && Sr >= this.length ? this : new hr(nr(this.text, rr, Sr), Math.min(Sr, this.length) - Math.max(0, rr));
        if (1 & Zr) {
          let rr = Qr.pop(),
            Sr = Yr(Wr.text, rr.text.slice(), 0, Wr.length);
          if (Sr.length <= 32) Qr.push(new hr(Sr, rr.length + Wr.length));
          else {
            let rr = Sr.length >> 1;
            Qr.push(new hr(Sr.slice(0, rr)), new hr(Sr.slice(rr)))
          }
        } else Qr.push(Wr)
      }
      replace(rr, Sr, Qr) {
        if (!(Qr instanceof hr)) return super.replace(rr, Sr, Qr);
        [rr, Sr] = Tr(this, rr, Sr);
        let Zr = Yr(this.text, Yr(Qr.text, nr(this.text, 0, rr)), Sr),
          Wr = this.length + Qr.length - (Sr - rr);
        return Zr.length <= 32 ? new hr(Zr, Wr) : zr.from(hr.split(Zr, []), Wr)
      }
      sliceString(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [rr, Sr] = Tr(this, rr, Sr);
        let Zr = "";
        for (let Wr = 0, ar = 0; Wr <= Sr && ar < this.text.length; ar++) {
          let jr = this.text[ar],
            Ir = Wr + jr.length;
          Wr > rr && ar && (Zr += Qr), rr < Ir && Sr > Wr && (Zr += jr.slice(Math.max(0, rr - Wr), Sr - Wr)), Wr = Ir + 1
        }
        return Zr
      }
      flatten(rr) {
        for (let Sr of this.text) rr.push(Sr)
      }
      scanIdentical() {
        return 0
      }
      static split(rr, Sr) {
        let Qr = [],
          Zr = -1;
        for (let Wr of rr) Qr.push(Wr), Zr += Wr.length + 1, 32 == Qr.length && (Sr.push(new hr(Qr, Zr)), Qr = [], Zr = -1);
        return Zr > -1 && Sr.push(new hr(Qr, Zr)), Sr
      }
    }
    class zr extends tr {
      constructor(rr, Sr) {
        super(), this.children = rr, this.length = Sr, this.lines = 0;
        for (let Qr of rr) this.lines += Qr.lines
      }
      lineInner(rr, Sr, Qr, Zr) {
        for (let Wr = 0;; Wr++) {
          let ar = this.children[Wr],
            jr = Zr + ar.length,
            Ir = Qr + ar.lines - 1;
          if ((Sr ? Ir : jr) >= rr) return ar.lineInner(rr, Sr, Qr, Zr);
          Zr = jr + 1, Qr = Ir + 1
        }
      }
      decompose(rr, Sr, Qr, Zr) {
        for (let Wr = 0, ar = 0; ar <= Sr && Wr < this.children.length; Wr++) {
          let jr = this.children[Wr],
            Ir = ar + jr.length;
          if (rr <= Ir && Sr >= ar) {
            let Wr = Zr & ((ar <= rr ? 1 : 0) | (Ir >= Sr ? 2 : 0));
            ar >= rr && Ir <= Sr && !Wr ? Qr.push(jr) : jr.decompose(rr - ar, Sr - ar, Qr, Wr)
          }
          ar = Ir + 1
        }
      }
      replace(rr, Sr, Qr) {
        if ([rr, Sr] = Tr(this, rr, Sr), Qr.lines < this.lines)
          for (let Zr = 0, Wr = 0; Zr < this.children.length; Zr++) {
            let ar = this.children[Zr],
              jr = Wr + ar.length;
            if (rr >= Wr && Sr <= jr) {
              let Ir = ar.replace(rr - Wr, Sr - Wr, Qr),
                fr = this.lines - ar.lines + Ir.lines;
              if (Ir.lines < fr >> 4 && Ir.lines > fr >> 6) {
                let Wr = this.children.slice();
                return Wr[Zr] = Ir, new zr(Wr, this.length - (Sr - rr) + Qr.length)
              }
              return super.replace(Wr, jr, Ir)
            }
            Wr = jr + 1
          }
        return super.replace(rr, Sr, Qr)
      }
      sliceString(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [rr, Sr] = Tr(this, rr, Sr);
        let Zr = "";
        for (let Wr = 0, ar = 0; Wr < this.children.length && ar <= Sr; Wr++) {
          let jr = this.children[Wr],
            Ir = ar + jr.length;
          ar > rr && Wr && (Zr += Qr), rr < Ir && Sr > ar && (Zr += jr.sliceString(rr - ar, Sr - ar, Qr)), ar = Ir + 1
        }
        return Zr
      }
      flatten(rr) {
        for (let Sr of this.children) Sr.flatten(rr)
      }
      scanIdentical(rr, Sr) {
        if (!(rr instanceof zr)) return 0;
        let Qr = 0,
          [Zr, Wr, ar, jr] = Sr > 0 ? [0, 0, this.children.length, rr.children.length] : [this.children.length - 1, rr.children.length - 1, -1, -1];
        for (;; Zr += Sr, Wr += Sr) {
          if (Zr == ar || Wr == jr) return Qr;
          let Ir = this.children[Zr],
            fr = rr.children[Wr];
          if (Ir != fr) return Qr + Ir.scanIdentical(fr, Sr);
          Qr += Ir.length + 1
        }
      }
      static from(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : rr.reduce(((rr, Sr) => rr + Sr.length + 1), -1),
          Qr = 0;
        for (let mr of rr) Qr += mr.lines;
        if (Qr < 32) {
          let Qr = [];
          for (let Sr of rr) Sr.flatten(Qr);
          return new hr(Qr, Sr)
        }
        let Zr = Math.max(32, Qr >> 5),
          Wr = Zr << 1,
          ar = Zr >> 1,
          jr = [],
          Ir = 0,
          fr = -1,
          Er = [];

        function pr(rr) {
          let Sr;
          if (rr.lines > Wr && rr instanceof zr)
            for (let Qr of rr.children) pr(Qr);
          else rr.lines > ar && (Ir > ar || !Ir) ? (xr(), jr.push(rr)) : rr instanceof hr && Ir && (Sr = Er[Er.length - 1]) instanceof hr && rr.lines + Sr.lines <= 32 ? (Ir += rr.lines, fr += rr.length + 1, Er[Er.length - 1] = new hr(Sr.text.concat(rr.text), Sr.length + 1 + rr.length)) : (Ir + rr.lines > Zr && xr(), Ir += rr.lines, fr += rr.length + 1, Er.push(rr))
        }

        function xr() {
          0 != Ir && (jr.push(1 == Er.length ? Er[0] : zr.from(Er, fr)), fr = -1, Ir = Er.length = 0)
        }
        for (let mr of rr) pr(mr);
        return xr(), 1 == jr.length ? jr[0] : new zr(jr, Sr)
      }
    }

    function Yr(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e9;
      for (let Wr = 0, ar = 0, jr = !0; ar < rr.length && Wr <= Zr; ar++) {
        let Ir = rr[ar],
          fr = Wr + Ir.length;
        fr >= Qr && (fr > Zr && (Ir = Ir.slice(0, Zr - Wr)), Wr < Qr && (Ir = Ir.slice(Qr - Wr)), jr ? (Sr[Sr.length - 1] += Ir, jr = !1) : Sr.push(Ir)), Wr = fr + 1
      }
      return Sr
    }

    function nr(rr, Sr, Qr) {
      return Yr(rr, [""], Sr, Qr)
    }
    tr.empty = new hr([""], 0);
    class er {
      constructor(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.dir = Sr, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [rr], this.offsets = [Sr > 0 ? 1 : (rr instanceof hr ? rr.text.length : rr.children.length) << 1]
      }
      nextInner(rr, Sr) {
        for (this.done = this.lineBreak = !1;;) {
          let Qr = this.nodes.length - 1,
            Zr = this.nodes[Qr],
            Wr = this.offsets[Qr],
            ar = Wr >> 1,
            jr = Zr instanceof hr ? Zr.text.length : Zr.children.length;
          if (ar == (Sr > 0 ? jr : 0)) {
            if (0 == Qr) return this.done = !0, this.value = "", this;
            Sr > 0 && this.offsets[Qr - 1]++, this.nodes.pop(), this.offsets.pop()
          } else if ((1 & Wr) == (Sr > 0 ? 0 : 1)) {
            if (this.offsets[Qr] += Sr, 0 == rr) return this.lineBreak = !0, this.value = "\n", this;
            rr--
          } else if (Zr instanceof hr) {
            let Wr = Zr.text[ar + (Sr < 0 ? -1 : 0)];
            if (this.offsets[Qr] += Sr, Wr.length > Math.max(0, rr)) return this.value = 0 == rr ? Wr : Sr > 0 ? Wr.slice(rr) : Wr.slice(0, Wr.length - rr), this;
            rr -= Wr.length
          } else {
            let Wr = Zr.children[ar + (Sr < 0 ? -1 : 0)];
            rr > Wr.length ? (rr -= Wr.length, this.offsets[Qr] += Sr) : (Sr < 0 && this.offsets[Qr]--, this.nodes.push(Wr), this.offsets.push(Sr > 0 ? 1 : (Wr instanceof hr ? Wr.text.length : Wr.children.length) << 1))
          }
        }
      }
      next() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return rr < 0 && (this.nextInner(-rr, -this.dir), rr = this.value.length), this.nextInner(rr, this.dir)
      }
    }
    class Kr {
      constructor(rr, Sr, Qr) {
        this.value = "", this.done = !1, this.cursor = new er(rr, Sr > Qr ? -1 : 1), this.pos = Sr > Qr ? rr.length : 0, this.from = Math.min(Sr, Qr), this.to = Math.max(Sr, Qr)
      }
      nextInner(rr, Sr) {
        if (Sr < 0 ? this.pos <= this.from : this.pos >= this.to) return this.value = "", this.done = !0, this;
        rr += Math.max(0, Sr < 0 ? this.pos - this.to : this.from - this.pos);
        let Qr = Sr < 0 ? this.pos - this.from : this.to - this.pos;
        rr > Qr && (rr = Qr), Qr -= rr;
        let {
          value: Zr
        } = this.cursor.next(rr);
        return this.pos += (Zr.length + rr) * Sr, this.value = Zr.length <= Qr ? Zr : Sr < 0 ? Zr.slice(Zr.length - Qr) : Zr.slice(0, Qr), this.done = !this.value, this
      }
      next() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return rr < 0 ? rr = Math.max(rr, this.from - this.pos) : rr > 0 && (rr = Math.min(rr, this.to - this.pos)), this.nextInner(rr, this.cursor.dir)
      }
      get lineBreak() {
        return this.cursor.lineBreak && "" != this.value
      }
    }
    class yr {
      constructor(rr) {
        this.inner = rr, this.afterBreak = !0, this.value = "", this.done = !1
      }
      next() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          {
            done: Sr,
            lineBreak: Qr,
            value: Zr
          } = this.inner.next(rr);
        return Sr && this.afterBreak ? (this.value = "", this.afterBreak = !1) : Sr ? (this.done = !0, this.value = "") : Qr ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = Zr, this.afterBreak = !1), this
      }
      get lineBreak() {
        return !1
      }
    }
    "undefined" != typeof Symbol && (tr.prototype[Symbol.iterator] = function() {
      return this.iter()
    }, er.prototype[Symbol.iterator] = Kr.prototype[Symbol.iterator] = yr.prototype[Symbol.iterator] = function() {
      return this
    });
    class Br {
      constructor(rr, Sr, Qr, Zr) {
        this.from = rr, this.to = Sr, this.number = Qr, this.text = Zr
      }
      get length() {
        return this.to - this.from
      }
    }

    function Tr(rr, Sr, Qr) {
      return [Sr = Math.max(0, Math.min(rr.length, Sr)), Math.max(Sr, Math.min(rr.length, Qr))]
    }

    function vr(rr, Sr) {
      return fr(rr, Sr, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function Or(rr, Sr) {
      let Qr = rr.charCodeAt(Sr);
      if (!((Zr = Qr) >= 55296 && Zr < 56320) || Sr + 1 == rr.length) return Qr;
      var Zr;
      let Wr = rr.charCodeAt(Sr + 1);
      return function(rr) {
        return rr >= 56320 && rr < 57344
      }(Wr) ? Wr - 56320 + (Qr - 55296 << 10) + 65536 : Qr
    }

    function Lr(rr) {
      return rr <= 65535 ? String.fromCharCode(rr) : (rr -= 65536, String.fromCharCode(55296 + (rr >> 10), 56320 + (1023 & rr)))
    }

    function lr(rr) {
      return rr < 65536 ? 1 : 2
    }
    const Xr = /\r\n?|\n/;
    var Pr = function(rr) {
      return rr[rr.Simple = 0] = "Simple", rr[rr.TrackDel = 1] = "TrackDel", rr[rr.TrackBefore = 2] = "TrackBefore", rr[rr.TrackAfter = 3] = "TrackAfter", rr
    }(Pr || (Pr = {}));
    class Hr {
      constructor(rr) {
        this.sections = rr
      }
      get length() {
        let rr = 0;
        for (let Sr = 0; Sr < this.sections.length; Sr += 2) rr += this.sections[Sr];
        return rr
      }
      get newLength() {
        let rr = 0;
        for (let Sr = 0; Sr < this.sections.length; Sr += 2) {
          let Qr = this.sections[Sr + 1];
          rr += Qr < 0 ? this.sections[Sr] : Qr
        }
        return rr
      }
      get empty() {
        return 0 == this.sections.length || 2 == this.sections.length && this.sections[1] < 0
      }
      iterGaps(rr) {
        for (let Sr = 0, Qr = 0, Zr = 0; Sr < this.sections.length;) {
          let Wr = this.sections[Sr++],
            ar = this.sections[Sr++];
          ar < 0 ? (rr(Qr, Zr, Wr), Zr += Wr) : Zr += ar, Qr += Wr
        }
      }
      iterChangedRanges(rr) {
        Cr(this, rr, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get invertedDesc() {
        let rr = [];
        for (let Sr = 0; Sr < this.sections.length;) {
          let Qr = this.sections[Sr++],
            Zr = this.sections[Sr++];
          Zr < 0 ? rr.push(Qr, Zr) : rr.push(Zr, Qr)
        }
        return new Hr(rr)
      }
      composeDesc(rr) {
        return this.empty ? rr : rr.empty ? this : Gr(this, rr)
      }
      mapDesc(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return rr.empty ? this : Mr(this, rr, Sr)
      }
      mapPos(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Pr.Simple,
          Zr = 0,
          Wr = 0;
        for (let ar = 0; ar < this.sections.length;) {
          let jr = this.sections[ar++],
            Ir = this.sections[ar++],
            fr = Zr + jr;
          if (Ir < 0) {
            if (fr > rr) return Wr + (rr - Zr);
            Wr += jr
          } else {
            if (Qr != Pr.Simple && fr >= rr && (Qr == Pr.TrackDel && Zr < rr && fr > rr || Qr == Pr.TrackBefore && Zr < rr || Qr == Pr.TrackAfter && fr > rr)) return null;
            if (fr > rr || fr == rr && Sr < 0 && !jr) return rr == Zr || Sr < 0 ? Wr : Wr + Ir;
            Wr += Ir
          }
          Zr = fr
        }
        if (rr > Zr) throw new RangeError(`Position ${rr} is out of range for changeset of length ${Zr}`);
        return Wr
      }
      touchesRange(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : rr;
        for (let Qr = 0, Zr = 0; Qr < this.sections.length && Zr <= Sr;) {
          let Wr = Zr + this.sections[Qr++];
          if (this.sections[Qr++] >= 0 && Zr <= Sr && Wr >= rr) return !(Zr < rr && Wr > Sr) || "cover";
          Zr = Wr
        }
        return !1
      }
      toString() {
        let rr = "";
        for (let Sr = 0; Sr < this.sections.length;) {
          let Qr = this.sections[Sr++],
            Zr = this.sections[Sr++];
          rr += (rr ? " " : "") + Qr + (Zr >= 0 ? ":" + Zr : "")
        }
        return rr
      }
      toJSON() {
        return this.sections
      }
      static fromJSON(rr) {
        if (!Array.isArray(rr) || rr.length % 2 || rr.some((rr => "number" != typeof rr))) throw new RangeError("Invalid JSON representation of ChangeDesc");
        return new Hr(rr)
      }
      static create(rr) {
        return new Hr(rr)
      }
    }
    class qr extends Hr {
      constructor(rr, Sr) {
        super(rr), this.inserted = Sr
      }
      apply(rr) {
        if (this.length != rr.length) throw new RangeError("Applying change set to a document with the wrong length");
        return Cr(this, ((Sr, Qr, Zr, Wr, ar) => rr = rr.replace(Zr, Zr + (Qr - Sr), ar)), !1), rr
      }
      mapDesc(rr) {
        return Mr(this, rr, arguments.length > 1 && void 0 !== arguments[1] && arguments[1], !0)
      }
      invert(rr) {
        let Sr = this.sections.slice(),
          Qr = [];
        for (let Zr = 0, Wr = 0; Zr < Sr.length; Zr += 2) {
          let ar = Sr[Zr],
            jr = Sr[Zr + 1];
          if (jr >= 0) {
            Sr[Zr] = jr, Sr[Zr + 1] = ar;
            let Ir = Zr >> 1;
            for (; Qr.length < Ir;) Qr.push(tr.empty);
            Qr.push(ar ? rr.slice(Wr, Wr + ar) : tr.empty)
          }
          Wr += ar
        }
        return new qr(Sr, Qr)
      }
      compose(rr) {
        return this.empty ? rr : rr.empty ? this : Gr(this, rr, !0)
      }
      map(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return rr.empty ? this : Mr(this, rr, Sr, !0)
      }
      iterChanges(rr) {
        Cr(this, rr, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get desc() {
        return Hr.create(this.sections)
      }
      filter(rr) {
        let Sr = [],
          Qr = [],
          Zr = [],
          Wr = new kr(this);
        rr: for (let ar = 0, jr = 0;;) {
          let Ir = ar == rr.length ? 1e9 : rr[ar++];
          for (; jr < Ir || jr == Ir && 0 == Wr.len;) {
            if (Wr.done) break rr;
            let rr = Math.min(Wr.len, Ir - jr);
            Rr(Zr, rr, -1);
            let ar = -1 == Wr.ins ? -1 : 0 == Wr.off ? Wr.ins : 0;
            Rr(Sr, rr, ar), ar > 0 && gr(Qr, Sr, Wr.text), Wr.forward(rr), jr += rr
          }
          let fr = rr[ar++];
          for (; jr < fr;) {
            if (Wr.done) break rr;
            let rr = Math.min(Wr.len, fr - jr);
            Rr(Sr, rr, -1), Rr(Zr, rr, -1 == Wr.ins ? -1 : 0 == Wr.off ? Wr.ins : 0), Wr.forward(rr), jr += rr
          }
        }
        return {
          changes: new qr(Sr, Qr),
          filtered: Hr.create(Zr)
        }
      }
      toJSON() {
        let rr = [];
        for (let Sr = 0; Sr < this.sections.length; Sr += 2) {
          let Qr = this.sections[Sr],
            Zr = this.sections[Sr + 1];
          Zr < 0 ? rr.push(Qr) : 0 == Zr ? rr.push([Qr]) : rr.push([Qr].concat(this.inserted[Sr >> 1].toJSON()))
        }
        return rr
      }
      static of (rr, Sr, Qr) {
        let Zr = [],
          Wr = [],
          ar = 0,
          jr = null;

        function Ir() {
          if (!(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && !Zr.length) return;
          ar < Sr && Rr(Zr, Sr - ar, -1);
          let rr = new qr(Zr, Wr);
          jr = jr ? jr.compose(rr.map(jr)) : rr, Zr = [], Wr = [], ar = 0
        }
        return function rr(fr) {
          if (Array.isArray(fr))
            for (let Sr of fr) rr(Sr);
          else if (fr instanceof qr) {
            if (fr.length != Sr) throw new RangeError(`Mismatched change set length (got ${fr.length}, expected ${Sr})`);
            Ir(), jr = jr ? jr.compose(fr.map(jr)) : fr
          } else {
            let {
              from: rr,
              to: jr = rr,
              insert: Er
            } = fr;
            if (rr > jr || rr < 0 || jr > Sr) throw new RangeError(`Invalid change range ${rr} to ${jr} (in doc of length ${Sr})`);
            let pr = Er ? "string" == typeof Er ? tr.of(Er.split(Qr || Xr)) : Er : tr.empty,
              xr = pr.length;
            if (rr == jr && 0 == xr) return;
            rr < ar && Ir(), rr > ar && Rr(Zr, rr - ar, -1), Rr(Zr, jr - rr, xr), gr(Wr, Zr, pr), ar = jr
          }
        }(rr), Ir(!jr), jr
      }
      static empty(rr) {
        return new qr(rr ? [rr, -1] : [], [])
      }
      static fromJSON(rr) {
        if (!Array.isArray(rr)) throw new RangeError("Invalid JSON representation of ChangeSet");
        let Sr = [],
          Qr = [];
        for (let Zr = 0; Zr < rr.length; Zr++) {
          let Wr = rr[Zr];
          if ("number" == typeof Wr) Sr.push(Wr, -1);
          else {
            if (!Array.isArray(Wr) || "number" != typeof Wr[0] || Wr.some(((rr, Sr) => Sr && "string" != typeof rr))) throw new RangeError("Invalid JSON representation of ChangeSet");
            if (1 == Wr.length) Sr.push(Wr[0], 0);
            else {
              for (; Qr.length < Zr;) Qr.push(tr.empty);
              Qr[Zr] = tr.of(Wr.slice(1)), Sr.push(Wr[0], Qr[Zr].length)
            }
          }
        }
        return new qr(Sr, Qr)
      }
      static createSet(rr, Sr) {
        return new qr(rr, Sr)
      }
    }

    function Rr(rr, Sr, Qr) {
      let Zr = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (0 == Sr && Qr <= 0) return;
      let Wr = rr.length - 2;
      Wr >= 0 && Qr <= 0 && Qr == rr[Wr + 1] ? rr[Wr] += Sr : Wr >= 0 && 0 == Sr && 0 == rr[Wr] ? rr[Wr + 1] += Qr : Zr ? (rr[Wr] += Sr, rr[Wr + 1] += Qr) : rr.push(Sr, Qr)
    }

    function gr(rr, Sr, Qr) {
      if (0 == Qr.length) return;
      let Zr = Sr.length - 2 >> 1;
      if (Zr < rr.length) rr[rr.length - 1] = rr[rr.length - 1].append(Qr);
      else {
        for (; rr.length < Zr;) rr.push(tr.empty);
        rr.push(Qr)
      }
    }

    function Cr(rr, Sr, Qr) {
      let Zr = rr.inserted;
      for (let Wr = 0, ar = 0, jr = 0; jr < rr.sections.length;) {
        let Ir = rr.sections[jr++],
          fr = rr.sections[jr++];
        if (fr < 0) Wr += Ir, ar += Ir;
        else {
          let Er = Wr,
            pr = ar,
            xr = tr.empty;
          for (; Er += Ir, pr += fr, fr && Zr && (xr = xr.append(Zr[jr - 2 >> 1])), !(Qr || jr == rr.sections.length || rr.sections[jr + 1] < 0);) Ir = rr.sections[jr++], fr = rr.sections[jr++];
          Sr(Wr, Er, ar, pr, xr), Wr = Er, ar = pr
        }
      }
    }

    function Mr(rr, Sr, Qr) {
      let Zr = [],
        Wr = arguments.length > 3 && void 0 !== arguments[3] && arguments[3] ? [] : null,
        ar = new kr(rr),
        jr = new kr(Sr),
        Ir = 0;
      for (let fr = -1;;) {
        if (++Ir > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - likely malformed ChangeSet");
        if (ar.done && jr.len || jr.done && ar.len) throw new Error("Mismatched change set lengths");
        if (-1 == ar.ins && -1 == jr.ins) {
          let rr = Math.min(ar.len, jr.len);
          Rr(Zr, rr, -1), ar.forward(rr), jr.forward(rr)
        } else if (jr.ins >= 0 && (ar.ins < 0 || fr == ar.i || 0 == ar.off && (jr.len < ar.len || jr.len == ar.len && !Qr))) {
          let rr = jr.len;
          for (Rr(Zr, jr.ins, -1); rr;) {
            if (++Ir > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-b");
            let Sr = Math.min(ar.len, rr);
            ar.ins >= 0 && fr < ar.i && ar.len <= Sr && (Rr(Zr, 0, ar.ins), Wr && gr(Wr, Zr, ar.text), fr = ar.i), ar.forward(Sr), rr -= Sr
          }
          jr.next()
        } else {
          if (!(ar.ins >= 0)) {
            if (ar.done && jr.done) return Wr ? qr.createSet(Zr, Wr) : Hr.create(Zr);
            throw new Error("Mismatched change set lengths")
          } {
            let rr = 0,
              Sr = ar.len;
            for (; Sr;) {
              if (++Ir > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-a");
              if (-1 == jr.ins) {
                let Qr = Math.min(Sr, jr.len);
                rr += Qr, Sr -= Qr, jr.forward(Qr)
              } else {
                if (!(0 == jr.ins && jr.len < Sr)) break;
                Sr -= jr.len, jr.next()
              }
            }
            Rr(Zr, rr, fr < ar.i ? ar.ins : 0), Wr && fr < ar.i && gr(Wr, Zr, ar.text), fr = ar.i, ar.forward(ar.len - Sr)
          }
        }
      }
    }

    function Gr(rr, Sr) {
      let Qr = [],
        Zr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? [] : null,
        Wr = new kr(rr),
        ar = new kr(Sr),
        jr = 0;
      for (let Ir = !1;;) {
        if (++jr > 2e6) throw new Error("BLOXD CODEMIRROR: composeSets exceeded max iterations - likely malformed ChangeSet");
        if (Wr.done && ar.done) return Zr ? qr.createSet(Qr, Zr) : Hr.create(Qr);
        if (0 == Wr.ins) Rr(Qr, Wr.len, 0, Ir), Wr.next();
        else if (0 != ar.len || ar.done) {
          if (Wr.done || ar.done) throw new Error("Mismatched change set lengths");
          {
            let rr = Math.min(Wr.len2, ar.len),
              Sr = Qr.length;
            if (-1 == Wr.ins) {
              let Sr = -1 == ar.ins ? -1 : ar.off ? 0 : ar.ins;
              Rr(Qr, rr, Sr, Ir), Zr && Sr && gr(Zr, Qr, ar.text)
            } else - 1 == ar.ins ? (Rr(Qr, Wr.off ? 0 : Wr.len, rr, Ir), Zr && gr(Zr, Qr, Wr.textBit(rr))) : (Rr(Qr, Wr.off ? 0 : Wr.len, ar.off ? 0 : ar.ins, Ir), Zr && !ar.off && gr(Zr, Qr, ar.text));
            Ir = (Wr.ins > rr || ar.ins >= 0 && ar.len > rr) && (Ir || Qr.length > Sr), Wr.forward2(rr), ar.forward(rr)
          }
        } else Rr(Qr, 0, ar.ins, Ir), Zr && gr(Zr, Qr, ar.text), ar.next()
      }
    }
    class kr {
      constructor(rr) {
        this.set = rr, this.i = 0, this.next()
      }
      next() {
        let {
          sections: rr
        } = this.set;
        this.i < rr.length ? (this.len = rr[this.i++], this.ins = rr[this.i++]) : (this.len = 0, this.ins = -2), this.off = 0
      }
      get done() {
        return -2 == this.ins
      }
      get len2() {
        return this.ins < 0 ? this.len : this.ins
      }
      get text() {
        let {
          inserted: rr
        } = this.set, Sr = this.i - 2 >> 1;
        return Sr >= rr.length ? tr.empty : rr[Sr]
      }
      textBit(rr) {
        let {
          inserted: Sr
        } = this.set, Qr = this.i - 2 >> 1;
        return Qr >= Sr.length && !rr ? tr.empty : Sr[Qr].slice(this.off, null == rr ? void 0 : this.off + rr)
      }
      forward(rr) {
        rr == this.len ? this.next() : (this.len -= rr, this.off += rr)
      }
      forward2(rr) {
        -1 == this.ins ? this.forward(rr) : rr == this.ins ? this.next() : (this.ins -= rr, this.off += rr)
      }
    }
    class Ar {
      constructor(rr, Sr, Qr) {
        this.from = rr, this.to = Sr, this.flags = Qr
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
        let rr = 7 & this.flags;
        return 7 == rr ? null : rr
      }
      get goalColumn() {
        let rr = this.flags >> 6;
        return 16777215 == rr ? void 0 : rr
      }
      map(rr) {
        let Sr, Qr, Zr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return this.empty ? Sr = Qr = rr.mapPos(this.from, Zr) : (Sr = rr.mapPos(this.from, 1), Qr = rr.mapPos(this.to, -1)), Sr == this.from && Qr == this.to ? this : new Ar(Sr, Qr, this.flags)
      }
      extend(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : rr,
          Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (rr <= this.anchor && Sr >= this.anchor) return Vr.range(rr, Sr, void 0, void 0, Qr);
        let Zr = Math.abs(rr - this.anchor) > Math.abs(Sr - this.anchor) ? rr : Sr;
        return Vr.range(this.anchor, Zr, void 0, void 0, Qr)
      }
      eq(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.anchor == rr.anchor && this.head == rr.head && this.goalColumn == rr.goalColumn && (!Sr || !this.empty || this.assoc == rr.assoc)
      }
      toJSON() {
        return {
          anchor: this.anchor,
          head: this.head
        }
      }
      static fromJSON(rr) {
        if (!rr || "number" != typeof rr.anchor || "number" != typeof rr.head) throw new RangeError("Invalid JSON representation for SelectionRange");
        return Vr.range(rr.anchor, rr.head)
      }
      static create(rr, Sr, Qr) {
        return new Ar(rr, Sr, Qr)
      }
    }
    class Vr {
      constructor(rr, Sr) {
        this.yh = rr, this.mainIndex = Sr
      }
      map(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return rr.empty ? this : Vr.create(this.yh.map((Qr => Qr.map(rr, Sr))), this.mainIndex)
      }
      eq(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.yh.length != rr.yh.length || this.mainIndex != rr.mainIndex) return !1;
        for (let Qr = 0; Qr < this.yh.length; Qr++)
          if (!this.yh[Qr].eq(rr.yh[Qr], Sr)) return !1;
        return !0
      }
      get main() {
        return this.yh[this.mainIndex]
      }
      asSingle() {
        return 1 == this.yh.length ? this : new Vr([this.main], 0)
      }
      addRange(rr) {
        let Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return Vr.create([rr].concat(this.yh), Sr ? 0 : this.mainIndex + 1)
      }
      replaceRange(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.mainIndex,
          Qr = this.yh.slice();
        return Qr[Sr] = rr, Vr.create(Qr, this.mainIndex)
      }
      toJSON() {
        return {
          yh: this.yh.map((rr => rr.toJSON())),
          main: this.mainIndex
        }
      }
      static fromJSON(rr) {
        if (!rr || !Array.isArray(rr.yh) || "number" != typeof rr.main || rr.main >= rr.yh.length) throw new RangeError("Invalid JSON representation for EditorSelection");
        return new Vr(rr.yh.map((rr => Ar.fromJSON(rr))), rr.main)
      }
      static single(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : rr;
        return new Vr([Vr.range(rr, Sr)], 0)
      }
      static create(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (0 == rr.length) throw new RangeError("A selection needs at least one range");
        for (let Qr = 0, Zr = 0; Zr < rr.length; Zr++) {
          let Wr = rr[Zr];
          if (Wr.empty ? Wr.from <= Qr : Wr.from < Qr) return Vr.normalized(rr.slice(), Sr);
          Qr = Wr.to
        }
        return new Vr(rr, Sr)
      }
      static cursor(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Qr = arguments.length > 2 ? arguments[2] : void 0,
          Zr = arguments.length > 3 ? arguments[3] : void 0;
        return Ar.create(rr, rr, (0 == Sr ? 0 : Sr < 0 ? 8 : 16) | (null == Qr ? 7 : Math.min(6, Qr)) | (null !== Zr && void 0 !== Zr ? Zr : 16777215) << 6)
      }
      static range(rr, Sr, Qr, Zr, Wr) {
        let ar = (null !== Qr && void 0 !== Qr ? Qr : 16777215) << 6 | (null == Zr ? 7 : Math.min(6, Zr));
        return Wr || rr == Sr || (Wr = Sr < rr ? 1 : -1), Sr < rr ? Ar.create(Sr, rr, 48 | ar) : Ar.create(rr, Sr, (Wr ? Wr < 0 ? 8 : 16 : 0) | ar)
      }
      static normalized(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Qr = rr[Sr];
        rr.sort(((rr, Sr) => rr.from - Sr.from)), Sr = rr.indexOf(Qr);
        for (let Zr = 1; Zr < rr.length; Zr++) {
          let Qr = rr[Zr],
            Wr = rr[Zr - 1];
          if (Qr.empty ? Qr.from <= Wr.to : Qr.from < Wr.to) {
            let ar = Wr.from,
              jr = Math.max(Qr.to, Wr.to);
            Zr <= Sr && Sr--, rr.splice(--Zr, 2, Qr.anchor > Qr.head ? Vr.range(jr, ar) : Vr.range(ar, jr))
          }
        }
        return new Vr(rr, Sr)
      }
    }

    function ir(rr, Sr) {
      for (let Qr of rr.yh)
        if (Qr.to > Sr) throw new RangeError("Selection points outside of document")
    }
    let wr = 0;
    class cr {
      constructor(rr, Sr, Qr, Zr, Wr) {
        this.combine = rr, this.compareInput = Sr, this.compare = Qr, this.isStatic = Zr, this.id = wr++, this.default = rr([]), this.extensions = "function" == typeof Wr ? Wr(this) : Wr
      }
      get reader() {
        return this
      }
      static define() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return new cr(rr.combine || (rr => rr), rr.compareInput || ((rr, Sr) => rr === Sr), rr.compare || (rr.combine ? (rr, Sr) => rr === Sr : Fr), !!rr.static, rr.enables)
      }
      of(rr) {
        return new or([], this, 0, rr)
      }
      compute(rr, Sr) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new or(rr, this, 1, Sr)
      }
      computeN(rr, Sr) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new or(rr, this, 2, Sr)
      }
      from(rr, Sr) {
        return Sr || (Sr = rr => rr), this.compute([rr], (Qr => Sr(Qr.field(rr))))
      }
    }

    function Fr(rr, Sr) {
      return rr == Sr || rr.length == Sr.length && rr.every(((rr, Qr) => rr === Sr[Qr]))
    }
    class or {
      constructor(rr, Sr, Qr, Zr) {
        this.dependencies = rr, this.facet = Sr, this.type = Qr, this.value = Zr, this.id = wr++
      }
      dynamicSlot(rr) {
        var Sr;
        let Qr = this.value,
          Zr = this.facet.compareInput,
          Wr = this.id,
          ar = rr[Wr] >> 1,
          jr = 2 == this.type,
          Ir = !1,
          fr = !1,
          Er = [];
        for (let pr of this.dependencies) "doc" == pr ? Ir = !0 : "selection" == pr ? fr = !0 : 0 == (1 & (null !== (Sr = rr[pr.id]) && void 0 !== Sr ? Sr : 1)) && Er.push(rr[pr.id]);
        return {
          create: rr => (rr.values[ar] = Qr(rr), 1),
          update(rr, Sr) {
            if (Ir && Sr.docChanged || fr && (Sr.docChanged || Sr.selection) || Jr(rr, Er)) {
              let Sr = Qr(rr);
              if (jr ? !br(Sr, rr.values[ar], Zr) : !Zr(Sr, rr.values[ar])) return rr.values[ar] = Sr, 1
            }
            return 0
          },
          reconfigure: (rr, Sr) => {
            let Ir, fr = Sr.config.address[Wr];
            if (null != fr) {
              let Wr = pS(Sr, fr);
              if (this.dependencies.every((Qr => Qr instanceof cr ? Sr.facet(Qr) === rr.facet(Qr) : !(Qr instanceof sr) || Sr.field(Qr, !1) == rr.field(Qr, !1))) || (jr ? br(Ir = Qr(rr), Wr, Zr) : Zr(Ir = Qr(rr), Wr))) return rr.values[ar] = Wr, 0
            } else Ir = Qr(rr);
            return rr.values[ar] = Ir, 1
          }
        }
      }
    }

    function br(rr, Sr, Qr) {
      if (rr.length != Sr.length) return !1;
      for (let Zr = 0; Zr < rr.length; Zr++)
        if (!Qr(rr[Zr], Sr[Zr])) return !1;
      return !0
    }

    function Jr(rr, Sr) {
      let Qr = !1;
      for (let Zr of Sr) 1 & ES(rr, Zr) && (Qr = !0);
      return Qr
    }

    function Dr(rr, Sr, Qr) {
      let Zr = Qr.map((Sr => rr[Sr.id])),
        Wr = Qr.map((rr => rr.type)),
        ar = Zr.filter((rr => !(1 & rr))),
        jr = rr[Sr.id] >> 1;

      function Ir(rr) {
        let Qr = [];
        for (let Sr = 0; Sr < Zr.length; Sr++) {
          let ar = pS(rr, Zr[Sr]);
          if (2 == Wr[Sr])
            for (let rr of ar) Qr.push(rr);
          else Qr.push(ar)
        }
        return Sr.combine(Qr)
      }
      return {
        create(rr) {
          for (let Sr of Zr) ES(rr, Sr);
          return rr.values[jr] = Ir(rr), 1
        },
        update(rr, Qr) {
          if (!Jr(rr, ar)) return 0;
          let Zr = Ir(rr);
          return Sr.compare(Zr, rr.values[jr]) ? 0 : (rr.values[jr] = Zr, 1)
        },
        reconfigure(rr, Wr) {
          let ar = Jr(rr, Zr),
            fr = Wr.config.facets[Sr.id],
            Er = Wr.facet(Sr);
          if (fr && !ar && Fr(Qr, fr)) return rr.values[jr] = Er, 0;
          let pr = Ir(rr);
          return Sr.compare(pr, Er) ? (rr.values[jr] = Er, 0) : (rr.values[jr] = pr, 1)
        }
      }
    }
    const dr = cr.define({
      static: !0
    });
    class sr {
      constructor(rr, Sr, Qr, Zr, Wr) {
        this.id = rr, this.createF = Sr, this.updateF = Qr, this.compareF = Zr, this.spec = Wr, this.provides = void 0
      }
      static define(rr) {
        let Sr = new sr(wr++, rr.create, rr.update, rr.compare || ((rr, Sr) => rr === Sr), rr);
        return rr.provide && (Sr.provides = rr.provide(Sr)), Sr
      }
      create(rr) {
        let Sr = rr.facet(dr).find((rr => rr.field == this));
        return ((null === Sr || void 0 === Sr ? void 0 : Sr.create) || this.createF)(rr)
      }
      slot(rr) {
        let Sr = rr[this.id] >> 1;
        return {
          create: rr => (rr.values[Sr] = this.create(rr), 1),
          update: (rr, Qr) => {
            let Zr = rr.values[Sr],
              Wr = this.updateF(Zr, Qr);
            return this.compareF(Zr, Wr) ? 0 : (rr.values[Sr] = Wr, 1)
          },
          reconfigure: (rr, Qr) => {
            let Zr, Wr = rr.facet(dr),
              ar = Qr.facet(dr);
            return (Zr = Wr.find((rr => rr.field == this))) && Zr != ar.find((rr => rr.field == this)) ? (rr.values[Sr] = Zr.create(rr), 1) : null != Qr.config.address[this.id] ? (rr.values[Sr] = Qr.field(this), 0) : (rr.values[Sr] = this.create(rr), 1)
          }
        }
      }
      init(rr) {
        return [this, dr.of({
          field: this,
          create: rr
        })]
      }
      get extension() {
        return this
      }
    }
    const ur = 4,
      rS = 3,
      SS = 2,
      QS = 1;

    function ZS(rr) {
      return Sr => new aS(Sr, rr)
    }
    const WS = {
      highest: ZS(0),
      high: ZS(QS),
      default: ZS(SS),
      low: ZS(rS),
      lowest: ZS(ur)
    };
    class aS {
      constructor(rr, Sr) {
        this.inner = rr, this.prec = Sr
      }
    }
    class jS {
      of(rr) {
        return new IS(this, rr)
      }
      reconfigure(rr) {
        return jS.reconfigure.of({
          compartment: this,
          extension: rr
        })
      }
      get(rr) {
        return rr.config.compartments.get(this)
      }
    }
    class IS {
      constructor(rr, Sr) {
        this.compartment = rr, this.inner = Sr
      }
    }
    class fS {
      constructor(rr, Sr, Qr, Zr, Wr, ar) {
        for (this.base = rr, this.compartments = Sr, this.dynamicSlots = Qr, this.address = Zr, this.staticValues = Wr, this.facets = ar, this.statusTemplate = []; this.statusTemplate.length < Qr.length;) this.statusTemplate.push(0)
      }
      staticFacet(rr) {
        let Sr = this.address[rr.id];
        return null == Sr ? rr.default : this.staticValues[Sr >> 1]
      }
      static resolve(rr, Sr, Qr) {
        let Zr = [],
          Wr = Object.create(null),
          ar = new Map;
        for (let xr of function(rr, Sr, Qr) {
            let Zr = [
                [],
                [],
                [],
                [],
                []
              ],
              Wr = new Map;

            function ar(rr, jr) {
              let Ir = Wr.get(rr);
              if (null != Ir) {
                if (Ir <= jr) return;
                let Sr = Zr[Ir].indexOf(rr);
                Sr > -1 && Zr[Ir].splice(Sr, 1), rr instanceof IS && Qr.delete(rr.compartment)
              }
              if (Wr.set(rr, jr), Array.isArray(rr))
                for (let Sr of rr) ar(Sr, jr);
              else if (rr instanceof IS) {
                if (Qr.has(rr.compartment)) throw new RangeError("Duplicate use of compartment in extensions");
                let Zr = Sr.get(rr.compartment) || rr.inner;
                Qr.set(rr.compartment, Zr), ar(Zr, jr)
              } else if (rr instanceof aS) ar(rr.inner, rr.prec);
              else if (rr instanceof sr) Zr[jr].push(rr), rr.provides && ar(rr.provides, jr);
              else if (rr instanceof or) Zr[jr].push(rr), rr.facet.extensions && ar(rr.facet.extensions, SS);
              else {
                let Sr = rr.extension;
                if (!Sr) throw new Error(`Unrecognized extension value in extension set (${rr}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
                ar(Sr, jr)
              }
            }
            return ar(rr, SS), Zr.reduce(((rr, Sr) => rr.concat(Sr)))
          }(rr, Sr, ar)) xr instanceof sr ? Zr.push(xr) : (Wr[xr.facet.id] || (Wr[xr.facet.id] = [])).push(xr);
        let jr = Object.create(null),
          Ir = [],
          fr = [];
        for (let xr of Zr) jr[xr.id] = fr.length << 1, fr.push((rr => xr.slot(rr)));
        let Er = null === Qr || void 0 === Qr ? void 0 : Qr.config.facets;
        for (let xr in Wr) {
          let rr = Wr[xr],
            Sr = rr[0].facet,
            Zr = Er && Er[xr] || [];
          if (rr.every((rr => 0 == rr.type)))
            if (jr[Sr.id] = Ir.length << 1 | 1, Fr(Zr, rr)) Ir.push(Qr.facet(Sr));
            else {
              let Zr = Sr.combine(rr.map((rr => rr.value)));
              Ir.push(Qr && Sr.compare(Zr, Qr.facet(Sr)) ? Qr.facet(Sr) : Zr)
            }
          else {
            for (let Sr of rr) 0 == Sr.type ? (jr[Sr.id] = Ir.length << 1 | 1, Ir.push(Sr.value)) : (jr[Sr.id] = fr.length << 1, fr.push((rr => Sr.dynamicSlot(rr))));
            jr[Sr.id] = fr.length << 1, fr.push((Qr => Dr(Qr, Sr, rr)))
          }
        }
        let pr = fr.map((rr => rr(jr)));
        return new fS(rr, ar, pr, jr, Ir, Wr)
      }
    }

    function ES(rr, Sr) {
      if (1 & Sr) return 2;
      let Qr = Sr >> 1,
        Zr = rr.status[Qr];
      if (4 == Zr) throw new Error("Cyclic dependency between fields and/or facets");
      if (2 & Zr) return Zr;
      rr.status[Qr] = 4;
      let Wr = rr.computeSlot(rr, rr.config.dynamicSlots[Qr]);
      return rr.status[Qr] = 2 | Wr
    }

    function pS(rr, Sr) {
      return 1 & Sr ? rr.config.staticValues[Sr >> 1] : rr.values[Sr >> 1]
    }
    const xS = cr.define(),
      mS = cr.define({
        combine: rr => rr.some((rr => rr)),
        static: !0
      }),
      NS = cr.define({
        combine: rr => rr.length ? rr[0] : void 0,
        static: !0
      }),
      US = cr.define(),
      tS = cr.define(),
      hS = cr.define(),
      zS = cr.define({
        combine: rr => !!rr.length && rr[0]
      });
    class YS {
      constructor(rr, Sr) {
        this.type = rr, this.value = Sr
      }
      static define() {
        return new nS
      }
    }
    class nS {
      of(rr) {
        return new YS(this, rr)
      }
    }
    class eS {
      constructor(rr) {
        this.map = rr
      }
      of(rr) {
        return new KS(this, rr)
      }
    }
    class KS {
      constructor(rr, Sr) {
        this.type = rr, this.value = Sr
      }
      map(rr) {
        let Sr = this.type.map(this.value, rr);
        return void 0 === Sr ? void 0 : Sr == this.value ? this : new KS(this.type, Sr)
      }
      is(rr) {
        return this.type == rr
      }
      static define() {
        return new eS((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).map || (rr => rr))
      }
      static mapEffects(rr, Sr) {
        if (!rr.length) return rr;
        let Qr = [];
        for (let Zr of rr) {
          let rr = Zr.map(Sr);
          rr && Qr.push(rr)
        }
        return Qr
      }
    }
    KS.reconfigure = KS.define(), KS.appendConfig = KS.define();
    class yS {
      constructor(rr, Sr, Qr, Zr, Wr, ar) {
        this.startState = rr, this.changes = Sr, this.selection = Qr, this.effects = Zr, this.annotations = Wr, this.scrollIntoView = ar, this._doc = null, this._state = null, Qr && ir(Qr, Sr.newLength), Wr.some((rr => rr.type == yS.time)) || (this.annotations = Wr.concat(yS.time.of(Date.now())))
      }
      static create(rr, Sr, Qr, Zr, Wr, ar) {
        return new yS(rr, Sr, Qr, Zr, Wr, ar)
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
      annotation(rr) {
        for (let Sr of this.annotations)
          if (Sr.type == rr) return Sr.value
      }
      get docChanged() {
        return !this.changes.empty
      }
      get reconfigured() {
        return this.startState.config != this.state.config
      }
      isUserEvent(rr) {
        let Sr = this.annotation(yS.userEvent);
        return !(!Sr || !(Sr == rr || Sr.length > rr.length && Sr.slice(0, rr.length) == rr && "." == Sr[rr.length]))
      }
    }

    function BS(rr, Sr) {
      let Qr = [];
      for (let Zr = 0, Wr = 0;;) {
        let ar, jr;
        if (Zr < rr.length && (Wr == Sr.length || Sr[Wr] >= rr[Zr])) ar = rr[Zr++], jr = rr[Zr++];
        else {
          if (!(Wr < Sr.length)) return Qr;
          ar = Sr[Wr++], jr = Sr[Wr++]
        }!Qr.length || Qr[Qr.length - 1] < ar ? Qr.push(ar, jr) : Qr[Qr.length - 1] < jr && (Qr[Qr.length - 1] = jr)
      }
    }

    function TS(rr, Sr, Qr) {
      var Zr;
      let Wr, ar, jr;
      return Qr ? (Wr = Sr.changes, ar = qr.empty(Sr.changes.length), jr = rr.changes.compose(Sr.changes)) : (Wr = Sr.changes.map(rr.changes), ar = rr.changes.mapDesc(Sr.changes, !0), jr = rr.changes.compose(Wr)), {
        changes: jr,
        selection: Sr.selection ? Sr.selection.map(ar) : null === (Zr = rr.selection) || void 0 === Zr ? void 0 : Zr.map(Wr),
        effects: KS.mapEffects(rr.effects, Wr).concat(KS.mapEffects(Sr.effects, ar)),
        annotations: rr.annotations.length ? rr.annotations.concat(Sr.annotations) : Sr.annotations,
        scrollIntoView: rr.scrollIntoView || Sr.scrollIntoView
      }
    }

    function vS(rr, Sr, Qr) {
      let Zr = Sr.selection,
        Wr = lS(Sr.annotations);
      return Sr.userEvent && (Wr = Wr.concat(yS.userEvent.of(Sr.userEvent))), {
        changes: Sr.changes instanceof qr ? Sr.changes : qr.of(Sr.changes || [], Qr, rr.facet(NS)),
        selection: Zr && (Zr instanceof Vr ? Zr : Vr.single(Zr.anchor, Zr.head)),
        effects: lS(Sr.effects),
        annotations: Wr,
        scrollIntoView: !!Sr.scrollIntoView
      }
    }

    function OS(rr, Sr, Qr) {
      let Zr = vS(rr, Sr.length ? Sr[0] : {}, rr.doc.length);
      Sr.length && !1 === Sr[0].filter && (Qr = !1);
      for (let ar = 1; ar < Sr.length; ar++) {
        !1 === Sr[ar].filter && (Qr = !1);
        let Wr = !!Sr[ar].sequential;
        Zr = TS(Zr, vS(rr, Sr[ar], Wr ? Zr.changes.newLength : rr.doc.length), Wr)
      }
      let Wr = yS.create(rr, Zr.changes, Zr.selection, Zr.effects, Zr.annotations, Zr.scrollIntoView);
      return function(rr) {
        let Sr = rr.startState,
          Qr = Sr.facet(hS),
          Zr = rr;
        for (let Wr = Qr.length - 1; Wr >= 0; Wr--) {
          let ar = Qr[Wr](rr);
          ar && Object.keys(ar).length && (Zr = TS(Zr, vS(Sr, ar, rr.changes.newLength), !0))
        }
        return Zr == rr ? rr : yS.create(Sr, rr.changes, rr.selection, Zr.effects, Zr.annotations, Zr.scrollIntoView)
      }(Qr ? function(rr) {
        let Sr = rr.startState,
          Qr = !0;
        for (let Wr of Sr.facet(US)) {
          let Sr = Wr(rr);
          if (!1 === Sr) {
            Qr = !1;
            break
          }
          Array.isArray(Sr) && (Qr = !0 === Qr ? Sr : BS(Qr, Sr))
        }
        if (!0 !== Qr) {
          let Zr, Wr;
          if (!1 === Qr) Wr = rr.changes.invertedDesc, Zr = qr.empty(Sr.doc.length);
          else {
            let Sr = rr.changes.filter(Qr);
            Zr = Sr.changes, Wr = Sr.filtered.mapDesc(Sr.changes).invertedDesc
          }
          rr = yS.create(Sr, Zr, rr.selection && rr.selection.map(Wr), KS.mapEffects(rr.effects, Wr), rr.annotations, rr.scrollIntoView)
        }
        let Zr = Sr.facet(tS);
        for (let Wr = Zr.length - 1; Wr >= 0; Wr--) {
          let Qr = Zr[Wr](rr);
          rr = Qr instanceof yS ? Qr : Array.isArray(Qr) && 1 == Qr.length && Qr[0] instanceof yS ? Qr[0] : OS(Sr, lS(Qr), !1)
        }
        return rr
      }(Wr) : Wr)
    }
    yS.time = YS.define(), yS.userEvent = YS.define(), yS.addToHistory = YS.define(), yS.remote = YS.define();
    const LS = [];

    function lS(rr) {
      return null == rr ? LS : Array.isArray(rr) ? rr : [rr]
    }
    var XS = function(rr) {
      return rr[rr.Word = 0] = "Word", rr[rr.Space = 1] = "Space", rr[rr.Other = 2] = "Other", rr
    }(XS || (XS = {}));
    const PS = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
    let HS;
    try {
      HS = new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u")
    } catch (QQ) {}

    function qS(rr) {
      return Sr => {
        if (!/\S/.test(Sr)) return XS.Space;
        if (function(rr) {
            if (HS) return HS.test(rr);
            for (let Sr = 0; Sr < rr.length; Sr++) {
              let Qr = rr[Sr];
              if (/\w/.test(Qr) || Qr > "\x80" && (Qr.toUpperCase() != Qr.toLowerCase() || PS.test(Qr))) return !0
            }
            return !1
          }(Sr)) return XS.Word;
        for (let Qr = 0; Qr < rr.length; Qr++)
          if (Sr.indexOf(rr[Qr]) > -1) return XS.Word;
        return XS.Other
      }
    }
    class RS {
      constructor(rr, Sr, Qr, Zr, Wr, ar) {
        this.config = rr, this.doc = Sr, this.selection = Qr, this.values = Zr, this.status = rr.statusTemplate.slice(), this.computeSlot = Wr, ar && (ar._state = this);
        for (let jr = 0; jr < this.config.dynamicSlots.length; jr++) ES(this, jr << 1);
        this.computeSlot = null
      }
      field(rr) {
        let Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Qr = this.config.address[rr.id];
        if (null != Qr) return ES(this, Qr), pS(this, Qr);
        if (Sr) throw new RangeError("Field is not present in this state")
      }
      update() {
        for (var rr = arguments.length, Sr = new Array(rr), Qr = 0; Qr < rr; Qr++) Sr[Qr] = arguments[Qr];
        return OS(this, Sr, !0)
      }
      applyTransaction(rr) {
        let Sr, Qr = this.config,
          {
            base: Zr,
            compartments: Wr
          } = Qr;
        for (let jr of rr.effects) jr.is(jS.reconfigure) ? (Qr && (Wr = new Map, Qr.compartments.forEach(((rr, Sr) => Wr.set(Sr, rr))), Qr = null), Wr.set(jr.value.compartment, jr.value.extension)) : jr.is(KS.reconfigure) ? (Qr = null, Zr = jr.value) : jr.is(KS.appendConfig) && (Qr = null, Zr = lS(Zr).concat(jr.value));
        if (Qr) Sr = rr.startState.values.slice();
        else {
          Qr = fS.resolve(Zr, Wr, this), Sr = new RS(Qr, this.doc, this.selection, Qr.dynamicSlots.map((() => null)), ((rr, Sr) => Sr.reconfigure(rr, this)), null).values
        }
        let ar = rr.startState.facet(mS) ? rr.newSelection : rr.newSelection.asSingle();
        new RS(Qr, rr.newDoc, ar, Sr, ((Sr, Qr) => Qr.update(Sr, rr)), rr)
      }
      replaceSelection(rr) {
        return "string" == typeof rr && (rr = this.toText(rr)), this.changeByRange((Sr => ({
          changes: {
            from: Sr.from,
            to: Sr.to,
            insert: rr
          },
          range: Vr.cursor(Sr.from + rr.length)
        })))
      }
      changeByRange(rr) {
        let Sr = this.selection,
          Qr = rr(Sr.yh[0]),
          Zr = this.changes(Qr.changes),
          Wr = [Qr.range],
          ar = lS(Qr.effects);
        for (let jr = 1; jr < Sr.yh.length; jr++) {
          let Qr = rr(Sr.yh[jr]),
            Ir = this.changes(Qr.changes),
            fr = Ir.map(Zr);
          for (let rr = 0; rr < jr; rr++) Wr[rr] = Wr[rr].map(fr);
          let Er = Zr.mapDesc(Ir, !0);
          Wr.push(Qr.range.map(Er)), Zr = Zr.compose(fr), ar = KS.mapEffects(ar, fr).concat(KS.mapEffects(lS(Qr.effects), Er))
        }
        return {
          changes: Zr,
          selection: Vr.create(Wr, Sr.mainIndex),
          effects: ar
        }
      }
      changes() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return rr instanceof qr ? rr : qr.of(rr, this.doc.length, this.facet(RS.lineSeparator))
      }
      toText(rr) {
        return tr.of(rr.split(this.facet(RS.lineSeparator) || Xr))
      }
      sliceDoc() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.doc.length;
        return this.doc.sliceString(rr, Sr, this.lineBreak)
      }
      facet(rr) {
        let Sr = this.config.address[rr.id];
        return null == Sr ? rr.default : (ES(this, Sr), pS(this, Sr))
      }
      toJSON(rr) {
        let Sr = {
          doc: this.sliceDoc(),
          selection: this.selection.toJSON()
        };
        if (rr)
          for (let Qr in rr) {
            let Zr = rr[Qr];
            Zr instanceof sr && null != this.config.address[Zr.id] && (Sr[Qr] = Zr.spec.toJSON(this.field(rr[Qr]), this))
          }
        return Sr
      }
      static fromJSON(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          Qr = arguments.length > 2 ? arguments[2] : void 0;
        if (!rr || "string" != typeof rr.doc) throw new RangeError("Invalid JSON representation for EditorState");
        let Zr = [];
        if (Qr)
          for (let Wr in Qr)
            if (Object.prototype.hasOwnProperty.call(rr, Wr)) {
              let Sr = Qr[Wr],
                ar = rr[Wr];
              Zr.push(Sr.init((rr => Sr.spec.fromJSON(ar, rr))))
            } return RS.create({
          doc: rr.doc,
          selection: Vr.fromJSON(rr.selection),
          extensions: Sr.extensions ? Zr.concat([Sr.extensions]) : Zr
        })
      }
      static create() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          Sr = fS.resolve(rr.extensions || [], new Map),
          Qr = rr.doc instanceof tr ? rr.doc : tr.of((rr.doc || "").split(Sr.staticFacet(RS.lineSeparator) || Xr)),
          Zr = rr.selection ? rr.selection instanceof Vr ? rr.selection : Vr.single(rr.selection.anchor, rr.selection.head) : Vr.single(0);
        return ir(Zr, Qr.length), Sr.staticFacet(mS) || (Zr = Zr.asSingle()), new RS(Sr, Qr, Zr, Sr.dynamicSlots.map((() => null)), ((rr, Sr) => Sr.create(rr)), null)
      }
      get tabSize() {
        return this.facet(RS.tabSize)
      }
      get lineBreak() {
        return this.facet(RS.lineSeparator) || "\n"
      }
      get readOnly() {
        return this.facet(zS)
      }
      phrase(rr) {
        for (var Sr = arguments.length, Qr = new Array(Sr > 1 ? Sr - 1 : 0), Zr = 1; Zr < Sr; Zr++) Qr[Zr - 1] = arguments[Zr];
        for (let Wr of this.facet(RS.phrases))
          if (Object.prototype.hasOwnProperty.call(Wr, rr)) {
            rr = Wr[rr];
            break
          } return Qr.length && (rr = rr.replace(/\$(\$|\d*)/g, ((rr, Sr) => {
          if ("$" == Sr) return "$";
          let Zr = +(Sr || 1);
          return !Zr || Zr > Qr.length ? rr : Qr[Zr - 1]
        }))), rr
      }
      languageDataAt(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          Zr = [];
        for (let Wr of this.facet(xS))
          for (let ar of Wr(this, Sr, Qr)) Object.prototype.hasOwnProperty.call(ar, rr) && Zr.push(ar[rr]);
        return Zr
      }
      charCategorizer(rr) {
        let Sr = this.languageDataAt("wordChars", rr);
        return qS(Sr.length ? Sr[0] : "")
      }
      wordAt(rr) {
        let {
          text: Sr,
          from: Qr,
          length: Zr
        } = this.doc.lineAt(rr), Wr = this.charCategorizer(rr), ar = rr - Qr, jr = rr - Qr;
        for (; ar > 0;) {
          let rr = vr(Sr, ar, !1);
          if (Wr(Sr.slice(rr, ar)) != XS.Word) break;
          ar = rr
        }
        for (; jr < Zr;) {
          let rr = vr(Sr, jr);
          if (Wr(Sr.slice(jr, rr)) != XS.Word) break;
          jr = rr
        }
        return ar == jr ? null : Vr.range(ar + Qr, jr + Qr)
      }
    }

    function gS(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        Zr = {};
      for (let Wr of rr)
        for (let rr of Object.keys(Wr)) {
          let Sr = Wr[rr],
            ar = Zr[rr];
          if (void 0 === ar) Zr[rr] = Sr;
          else if (ar === Sr || void 0 === Sr);
          else {
            if (!Object.hasOwnProperty.call(Qr, rr)) throw new Error("Config merge conflict for field " + rr);
            Zr[rr] = Qr[rr](ar, Sr)
          }
        }
      for (let Wr in Sr) void 0 === Zr[Wr] && (Zr[Wr] = Sr[Wr]);
      return Zr
    }
    RS.allowMultipleSelections = mS, RS.tabSize = cr.define({
      combine: rr => rr.length ? rr[0] : 4
    }), RS.lineSeparator = NS, RS.readOnly = zS, RS.phrases = cr.define({
      compare(rr, Sr) {
        let Qr = Object.keys(rr),
          Zr = Object.keys(Sr);
        return Qr.length == Zr.length && Qr.every((Qr => rr[Qr] == Sr[Qr]))
      }
    }), RS.languageData = xS, RS.changeFilter = US, RS.transactionFilter = tS, RS.transactionExtender = hS, jS.reconfigure = KS.define();
    class CS {
      eq(rr) {
        return this == rr
      }
      range(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : rr;
        return GS.create(rr, Sr, this)
      }
    }

    function MS(rr, Sr) {
      return rr == Sr || rr.constructor == Sr.constructor && rr.eq(Sr)
    }
    CS.prototype.startSide = CS.prototype.endSide = 0, CS.prototype.point = !1, CS.prototype.mapMode = Pr.TrackDel;
    class GS {
      constructor(rr, Sr, Qr) {
        this.from = rr, this.to = Sr, this.value = Qr
      }
      static create(rr, Sr, Qr) {
        return new GS(rr, Sr, Qr)
      }
    }

    function kS(rr, Sr) {
      return rr.from - Sr.from || rr.value.startSide - Sr.value.startSide
    }
    class AS {
      constructor(rr, Sr, Qr, Zr) {
        this.from = rr, this.to = Sr, this.value = Qr, this.LWr = Zr
      }
      get length() {
        return this.to[this.to.length - 1]
      }
      findIndex(rr, Sr, Qr) {
        let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Wr = Qr ? this.to : this.from;
        for (let ar = Zr, jr = Wr.length;;) {
          if (ar == jr) return ar;
          let Zr = ar + jr >> 1,
            Ir = Wr[Zr] - rr || (Qr ? this.value[Zr].endSide : this.value[Zr].startSide) - Sr;
          if (Zr == ar) return Ir >= 0 ? ar : jr;
          Ir >= 0 ? jr = Zr : ar = Zr + 1
        }
      }
      between(rr, Sr, Qr, Zr) {
        for (let Wr = this.findIndex(Sr, -1e9, !0), ar = this.findIndex(Qr, 1e9, !1, Wr); Wr < ar; Wr++)
          if (!1 === Zr(this.from[Wr] + rr, this.to[Wr] + rr, this.value[Wr])) return !1
      }
      map(rr, Sr) {
        let Qr = [],
          Zr = [],
          Wr = [],
          ar = -1,
          jr = -1;
        for (let Ir = 0; Ir < this.value.length; Ir++) {
          let fr, Er, pr = this.value[Ir],
            xr = this.from[Ir] + rr,
            mr = this.to[Ir] + rr;
          if (xr == mr) {
            let rr = Sr.mapPos(xr, pr.startSide, pr.mapMode);
            if (null == rr) continue;
            if (fr = Er = rr, pr.startSide != pr.endSide && (Er = Sr.mapPos(xr, pr.endSide), Er < fr)) continue
          } else if (fr = Sr.mapPos(xr, pr.startSide), Er = Sr.mapPos(mr, pr.endSide), fr > Er || fr == Er && pr.startSide > 0 && pr.endSide <= 0) continue;
          (Er - fr || pr.endSide - pr.startSide) < 0 || (ar < 0 && (ar = fr), pr.point && (jr = Math.max(jr, Er - fr)), Qr.push(pr), Zr.push(fr - ar), Wr.push(Er - ar))
        }
        return {
          mapped: Qr.length ? new AS(Zr, Wr, Qr, jr) : null,
          pos: ar
        }
      }
    }
    class VS {
      constructor(rr, Sr, Qr, Zr) {
        this.chunkPos = rr, this.chunk = Sr, this.nextLayer = Qr, this.LWr = Zr
      }
      static create(rr, Sr, Qr, Zr) {
        return new VS(rr, Sr, Qr, Zr)
      }
      get length() {
        let rr = this.chunk.length - 1;
        return rr < 0 ? 0 : Math.max(this.chunkEnd(rr), this.nextLayer.length)
      }
      get size() {
        if (this.nx) return 0;
        let rr = this.nextLayer.size;
        for (let Sr of this.chunk) rr += Sr.value.length;
        return rr
      }
      chunkEnd(rr) {
        return this.chunkPos[rr] + this.chunk[rr].length
      }
      update(rr) {
        let {
          add: Sr = [],
          sort: Qr = !1,
          filterFrom: Zr = 0,
          filterTo: Wr = this.length
        } = rr, ar = rr.filter;
        if (0 == Sr.length && !ar) return this;
        if (Qr && (Sr = Sr.slice().sort(kS)), this.nx) return Sr.length ? VS.of(Sr) : this;
        let jr = new cS(this, null, -1).goto(0),
          Ir = 0,
          fr = [],
          Er = new iS;
        for (; jr.value || Ir < Sr.length;)
          if (Ir < Sr.length && (jr.from - Sr[Ir].from || jr.startSide - Sr[Ir].value.startSide) >= 0) {
            let rr = Sr[Ir++];
            Er.addInner(rr.from, rr.to, rr.value) || fr.push(rr)
          } else 1 == jr.rangeIndex && jr.chunkIndex < this.chunk.length && (Ir == Sr.length || this.chunkEnd(jr.chunkIndex) < Sr[Ir].from) && (!ar || Zr > this.chunkEnd(jr.chunkIndex) || Wr < this.chunkPos[jr.chunkIndex]) && Er.addChunk(this.chunkPos[jr.chunkIndex], this.chunk[jr.chunkIndex]) ? jr.nextChunk() : ((!ar || Zr > jr.to || Wr < jr.from || ar(jr.from, jr.to, jr.value)) && (Er.addInner(jr.from, jr.to, jr.value) || fr.push(GS.create(jr.from, jr.to, jr.value))), jr.next());
        return Er.finishInner(this.nextLayer.nx && !fr.length ? VS.empty : this.nextLayer.update({
          add: fr,
          filter: ar,
          filterFrom: Zr,
          filterTo: Wr
        }))
      }
      map(rr) {
        if (rr.empty || this.nx) return this;
        let Sr = [],
          Qr = [],
          Zr = -1;
        for (let ar = 0; ar < this.chunk.length; ar++) {
          let Wr = this.chunkPos[ar],
            jr = this.chunk[ar],
            Ir = rr.touchesRange(Wr, Wr + jr.length);
          if (!1 === Ir) Zr = Math.max(Zr, jr.LWr), Sr.push(jr), Qr.push(rr.mapPos(Wr));
          else if (!0 === Ir) {
            let {
              mapped: ar,
              pos: Ir
            } = jr.map(Wr, rr);
            ar && (Zr = Math.max(Zr, ar.LWr), Sr.push(ar), Qr.push(Ir))
          }
        }
        let Wr = this.nextLayer.map(rr);
        return 0 == Sr.length ? Wr : new VS(Qr, Sr, Wr || VS.empty, Zr)
      }
      between(rr, Sr, Qr) {
        if (!this.nx) {
          for (let Zr = 0; Zr < this.chunk.length; Zr++) {
            let Wr = this.chunkPos[Zr],
              ar = this.chunk[Zr];
            if (Sr >= Wr && rr <= Wr + ar.length && !1 === ar.between(Wr, rr - Wr, Sr - Wr, Qr)) return
          }
          this.nextLayer.between(rr, Sr, Qr)
        }
      }
      iter() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return FS.from([this]).goto(rr)
      }
      get nx() {
        return this.nextLayer == this
      }
      static iter(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return FS.from(rr).goto(Sr)
      }
      static compare(rr, Sr, Qr, Zr) {
        let Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1,
          ar = rr.filter((rr => rr.LWr > 0 || !rr.nx && rr.LWr >= Wr)),
          jr = Sr.filter((rr => rr.LWr > 0 || !rr.nx && rr.LWr >= Wr)),
          Ir = wS(ar, jr, Qr),
          fr = new bS(ar, Ir, Wr),
          Er = new bS(jr, Ir, Wr);
        Qr.iterGaps(((rr, Sr, Qr) => JS(fr, rr, Er, Sr, Qr, Zr))), Qr.empty && 0 == Qr.length && JS(fr, 0, Er, 0, 0, Zr)
      }
      static eq(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Zr = arguments.length > 3 ? arguments[3] : void 0;
        null == Zr && (Zr = 999999999);
        let Wr = rr.filter((rr => !rr.nx && Sr.indexOf(rr) < 0)),
          ar = Sr.filter((Sr => !Sr.nx && rr.indexOf(Sr) < 0));
        if (Wr.length != ar.length) return !1;
        if (!Wr.length) return !0;
        let jr = wS(Wr, ar),
          Ir = new bS(Wr, jr, 0).goto(Qr),
          fr = new bS(ar, jr, 0).goto(Qr);
        for (;;) {
          if (Ir.to != fr.to || !DS(Ir.active, fr.active) || Ir.point && (!fr.point || !MS(Ir.point, fr.point))) return !1;
          if (Ir.to > Zr) return !0;
          Ir.next(), fr.next()
        }
      }
      static spans(rr, Sr, Qr, Zr) {
        let Wr = new bS(rr, null, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1).goto(Sr),
          ar = Sr,
          jr = Wr.openStart;
        for (;;) {
          let rr = Math.min(Wr.to, Qr);
          if (Wr.point) {
            let Qr = Wr.activeForPoint(Wr.to),
              Ir = Wr.pointFrom < Sr ? Qr.length + 1 : Wr.point.startSide < 0 ? Qr.length : Math.min(Qr.length, jr);
            Zr.point(ar, rr, Wr.point, Qr, Ir, Wr.pointRank), jr = Math.min(Wr.openEnd(rr), Qr.length)
          } else rr > ar && (Zr.span(ar, rr, Wr.active, jr), jr = Wr.openEnd(rr));
          if (Wr.to > Qr) return jr + (Wr.point && Wr.to > Qr ? 1 : 0);
          ar = Wr.to, Wr.next()
        }
      }
      static of (rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Qr = new iS;
        for (let Zr of rr instanceof GS ? [rr] : Sr ? function(rr) {
            if (rr.length > 1)
              for (let Sr = rr[0], Qr = 1; Qr < rr.length; Qr++) {
                let Zr = rr[Qr];
                if (kS(Sr, Zr) > 0) return rr.slice().sort(kS);
                Sr = Zr
              }
            return rr
          }(rr) : rr) Qr.add(Zr.from, Zr.to, Zr.value);
        return Qr.finish()
      }
      static join(rr) {
        if (!rr.length) return VS.empty;
        let Sr = rr[rr.length - 1];
        for (let Qr = rr.length - 2; Qr >= 0; Qr--)
          for (let Zr = rr[Qr]; Zr != VS.empty; Zr = Zr.nextLayer) Sr = new VS(Zr.chunkPos, Zr.chunk, Sr, Math.max(Zr.LWr, Sr.LWr));
        return Sr
      }
    }
    VS.empty = new VS([], [], null, -1), VS.empty.nextLayer = VS.empty;
    class iS {
      finishChunk(rr) {
        this.chunks.push(new AS(this.from, this.to, this.value, this.LWr)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.LWr), this.LWr = -1, rr && (this.from = [], this.to = [], this.value = [])
      }
      constructor() {
        this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.LWr = -1, this.setMaxPoint = -1, this.nextLayer = null
      }
      add(rr, Sr, Qr) {
        this.addInner(rr, Sr, Qr) || (this.nextLayer || (this.nextLayer = new iS)).add(rr, Sr, Qr)
      }
      addInner(rr, Sr, Qr) {
        let Zr = rr - this.lastTo || Qr.startSide - this.last.endSide;
        if (Zr <= 0 && (rr - this.lastFrom || Qr.startSide - this.last.startSide) < 0) throw new Error("Ranges must be added sorted by `from` position and `startSide`");
        return !(Zr < 0) && (250 == this.from.length && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = rr), this.from.push(rr - this.chunkStart), this.to.push(Sr - this.chunkStart), this.last = Qr, this.lastFrom = rr, this.lastTo = Sr, this.value.push(Qr), Qr.point && (this.LWr = Math.max(this.LWr, Sr - rr)), !0)
      }
      addChunk(rr, Sr) {
        if ((rr - this.lastTo || Sr.value[0].startSide - this.last.endSide) < 0) return !1;
        this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, Sr.LWr), this.chunks.push(Sr), this.chunkPos.push(rr);
        let Qr = Sr.value.length - 1;
        return this.last = Sr.value[Qr], this.lastFrom = Sr.from[Qr] + rr, this.lastTo = Sr.to[Qr] + rr, !0
      }
      finish() {
        return this.finishInner(VS.empty)
      }
      finishInner(rr) {
        if (this.from.length && this.finishChunk(!1), 0 == this.chunks.length) return rr;
        let Sr = VS.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(rr) : rr, this.setMaxPoint);
        return this.from = null, Sr
      }
    }

    function wS(rr, Sr, Qr) {
      let Zr = new Map;
      for (let ar of rr)
        for (let rr = 0; rr < ar.chunk.length; rr++) ar.chunk[rr].LWr <= 0 && Zr.set(ar.chunk[rr], ar.chunkPos[rr]);
      let Wr = new Set;
      for (let ar of Sr)
        for (let rr = 0; rr < ar.chunk.length; rr++) {
          let Sr = Zr.get(ar.chunk[rr]);
          null == Sr || (Qr ? Qr.mapPos(Sr) : Sr) != ar.chunkPos[rr] || (null === Qr || void 0 === Qr ? void 0 : Qr.touchesRange(Sr, Sr + ar.chunk[rr].length)) || Wr.add(ar.chunk[rr])
        }
      return Wr
    }
    class cS {
      constructor(rr, Sr, Qr) {
        let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.layer = rr, this.skip = Sr, this.lWr = Qr, this.rank = Zr
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      get endSide() {
        return this.value ? this.value.endSide : 0
      }
      goto(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(rr, Sr, !1), this
      }
      gotoInner(rr, Sr, Qr) {
        for (; this.chunkIndex < this.layer.chunk.length;) {
          let Sr = this.layer.chunk[this.chunkIndex];
          if (!(this.skip && this.skip.has(Sr) || this.layer.chunkEnd(this.chunkIndex) < rr || Sr.LWr < this.lWr)) break;
          this.chunkIndex++, Qr = !1
        }
        if (this.chunkIndex < this.layer.chunk.length) {
          let Zr = this.layer.chunk[this.chunkIndex].findIndex(rr - this.layer.chunkPos[this.chunkIndex], Sr, !0);
          (!Qr || this.rangeIndex < Zr) && this.setRangeIndex(Zr)
        }
        this.next()
      }
      forward(rr, Sr) {
        (this.to - rr || this.endSide - Sr) < 0 && this.gotoInner(rr, Sr, !0)
      }
      next() {
        for (;;) {
          if (this.chunkIndex == this.layer.chunk.length) {
            this.from = this.to = 1e9, this.value = null;
            break
          } {
            let rr = this.layer.chunkPos[this.chunkIndex],
              Sr = this.layer.chunk[this.chunkIndex],
              Qr = rr + Sr.from[this.rangeIndex];
            if (this.from = Qr, this.to = rr + Sr.to[this.rangeIndex], this.value = Sr.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.lWr < 0 || this.value.point && this.to - this.from >= this.lWr) break
          }
        }
      }
      setRangeIndex(rr) {
        if (rr == this.layer.chunk[this.chunkIndex].value.length) {
          if (this.chunkIndex++, this.skip)
            for (; this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]);) this.chunkIndex++;
          this.rangeIndex = 0
        } else this.rangeIndex = rr
      }
      nextChunk() {
        this.chunkIndex++, this.rangeIndex = 0, this.next()
      }
      compare(rr) {
        return this.from - rr.from || this.startSide - rr.startSide || this.rank - rr.rank || this.to - rr.to || this.endSide - rr.endSide
      }
    }
    class FS {
      constructor(rr) {
        this.heap = rr
      }
      static from(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          Zr = [];
        for (let Wr = 0; Wr < rr.length; Wr++)
          for (let ar = rr[Wr]; !ar.nx; ar = ar.nextLayer) ar.LWr >= Qr && Zr.push(new cS(ar, Sr, Qr, Wr));
        return 1 == Zr.length ? Zr[0] : new FS(Zr)
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      goto(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        for (let Qr of this.heap) Qr.goto(rr, Sr);
        for (let Qr = this.heap.length >> 1; Qr >= 0; Qr--) oS(this.heap, Qr);
        return this.next(), this
      }
      forward(rr, Sr) {
        for (let Qr of this.heap) Qr.forward(rr, Sr);
        for (let Qr = this.heap.length >> 1; Qr >= 0; Qr--) oS(this.heap, Qr);
        (this.to - rr || this.value.endSide - Sr) < 0 && this.next()
      }
      next() {
        if (0 == this.heap.length) this.from = this.to = 1e9, this.value = null, this.rank = -1;
        else {
          let rr = this.heap[0];
          this.from = rr.from, this.to = rr.to, this.value = rr.value, this.rank = rr.rank, rr.value && rr.next(), oS(this.heap, 0)
        }
      }
    }

    function oS(rr, Sr) {
      for (let Qr = rr[Sr];;) {
        let Zr = 1 + (Sr << 1);
        if (Zr >= rr.length) break;
        let Wr = rr[Zr];
        if (Zr + 1 < rr.length && Wr.compare(rr[Zr + 1]) >= 0 && (Wr = rr[Zr + 1], Zr++), Qr.compare(Wr) < 0) break;
        rr[Zr] = Qr, rr[Sr] = Wr, Sr = Zr
      }
    }
    class bS {
      constructor(rr, Sr, Qr) {
        this.lWr = Qr, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = FS.from(rr, Sr, Qr)
      }
      goto(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.cursor.goto(rr, Sr), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = rr, this.endSide = Sr, this.openStart = -1, this.next(), this
      }
      forward(rr, Sr) {
        for (; this.minActive > -1 && (this.activeTo[this.minActive] - rr || this.active[this.minActive].endSide - Sr) < 0;) this.removeActive(this.minActive);
        this.cursor.forward(rr, Sr)
      }
      removeActive(rr) {
        dS(this.active, rr), dS(this.activeTo, rr), dS(this.activeRank, rr), this.minActive = uS(this.active, this.activeTo)
      }
      addActive(rr) {
        let Sr = 0,
          {
            value: Qr,
            to: Zr,
            rank: Wr
          } = this.cursor;
        for (; Sr < this.activeRank.length && (Wr - this.activeRank[Sr] || Zr - this.activeTo[Sr]) > 0;) Sr++;
        sS(this.active, Sr, Qr), sS(this.activeTo, Sr, Zr), sS(this.activeRank, Sr, Wr), rr && sS(rr, Sr, this.cursor.from), this.minActive = uS(this.active, this.activeTo)
      }
      next() {
        let rr = this.to,
          Sr = this.point;
        this.point = null;
        let Qr = this.openStart < 0 ? [] : null;
        for (;;) {
          let Zr = this.minActive;
          if (Zr > -1 && (this.activeTo[Zr] - this.cursor.from || this.active[Zr].endSide - this.cursor.startSide) < 0) {
            if (this.activeTo[Zr] > rr) {
              this.to = this.activeTo[Zr], this.endSide = this.active[Zr].endSide;
              break
            }
            this.removeActive(Zr), Qr && dS(Qr, Zr)
          } else {
            if (!this.cursor.value) {
              this.to = this.endSide = 1e9;
              break
            }
            if (this.cursor.from > rr) {
              this.to = this.cursor.from, this.endSide = this.cursor.startSide;
              break
            } {
              let rr = this.cursor.value;
              if (rr.point) {
                if (!(Sr && this.cursor.to == this.to && this.cursor.from < this.cursor.to)) {
                  this.point = rr, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = rr.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
                  break
                }
                this.cursor.next()
              } else this.addActive(Qr), this.cursor.next()
            }
          }
        }
        if (Qr) {
          this.openStart = 0;
          for (let Sr = Qr.length - 1; Sr >= 0 && Qr[Sr] < rr; Sr--) this.openStart++
        }
      }
      activeForPoint(rr) {
        if (!this.active.length) return this.active;
        let Sr = [];
        for (let Qr = this.active.length - 1; Qr >= 0 && !(this.activeRank[Qr] < this.pointRank); Qr--)(this.activeTo[Qr] > rr || this.activeTo[Qr] == rr && this.active[Qr].endSide >= this.point.endSide) && Sr.push(this.active[Qr]);
        return Sr.reverse()
      }
      openEnd(rr) {
        let Sr = 0;
        for (let Qr = this.activeTo.length - 1; Qr >= 0 && this.activeTo[Qr] > rr; Qr--) Sr++;
        return Sr
      }
    }

    function JS(rr, Sr, Qr, Zr, Wr, ar) {
      rr.goto(Sr), Qr.goto(Zr);
      let jr = Zr + Wr,
        Ir = Zr,
        fr = Zr - Sr,
        Er = !!ar.boundChange;
      for (let pr = !1;;) {
        let Sr = rr.to + fr - Qr.to,
          Zr = Sr || rr.endSide - Qr.endSide,
          Wr = Zr < 0 ? rr.to + fr : Qr.to,
          xr = Math.min(Wr, jr);
        if (rr.point || Qr.point ? (rr.point && Qr.point && MS(rr.point, Qr.point) && DS(rr.activeForPoint(rr.to), Qr.activeForPoint(Qr.to)) || ar.comparePoint(Ir, xr, rr.point, Qr.point), pr = !1) : (pr && ar.boundChange(Ir), xr > Ir && !DS(rr.active, Qr.active) && ar.compareRange(Ir, xr, rr.active, Qr.active), Er && xr < jr && (Sr || rr.openEnd(Wr) != Qr.openEnd(Wr)) && (pr = !0)), Wr > jr) break;
        Ir = Wr, Zr <= 0 && rr.next(), Zr >= 0 && Qr.next()
      }
    }

    function DS(rr, Sr) {
      if (rr.length != Sr.length) return !1;
      for (let Qr = 0; Qr < rr.length; Qr++)
        if (rr[Qr] != Sr[Qr] && !MS(rr[Qr], Sr[Qr])) return !1;
      return !0
    }

    function dS(rr, Sr) {
      for (let Qr = Sr, Zr = rr.length - 1; Qr < Zr; Qr++) rr[Qr] = rr[Qr + 1];
      rr.pop()
    }

    function sS(rr, Sr, Qr) {
      for (let Zr = rr.length - 1; Zr >= Sr; Zr--) rr[Zr + 1] = rr[Zr];
      rr[Sr] = Qr
    }

    function uS(rr, Sr) {
      let Qr = -1,
        Zr = 1e9;
      for (let Wr = 0; Wr < Sr.length; Wr++)(Sr[Wr] - Zr || rr[Wr].endSide - rr[Qr].endSide) < 0 && (Qr = Wr, Zr = Sr[Wr]);
      return Qr
    }

    function rQ(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : rr.length,
        Zr = 0;
      for (let Wr = 0; Wr < Qr && Wr < rr.length;) 9 == rr.charCodeAt(Wr) ? (Zr += Sr - Zr % Sr, Wr++) : (Zr++, Wr = vr(rr, Wr));
      return Zr
    }

    function SQ(rr, Sr, Qr, Zr) {
      for (let Wr = 0, ar = 0;;) {
        if (ar >= Sr) return Wr;
        if (Wr == rr.length) break;
        ar += 9 == rr.charCodeAt(Wr) ? Qr - ar % Qr : 1, Wr = vr(rr, Wr)
      }
      return !0 === Zr ? -1 : rr.length
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);