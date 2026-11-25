export const id = 299;
export const ids = [299];
export const modules = {
  41550: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => gE,
      e: () => vu,
      ChangeSet: () => Ku,
      i: () => kE,
      l: () => Fu,
      o: () => VE,
      r: () => tu,
      u: () => mu,
      y: () => UE,
      E: () => FE,
      C: () => BE,
      I: () => QE,
      L: () => GE,
      N: () => zu,
      P: () => Yu,
      Q: () => pE,
      T: () => au,
      X: () => ou,
      Z: () => rE,
      bb: () => uj,
      fb: () => du,
      gb: () => Ej,
      jb: () => Pu
    });
    let su = [],
      Uu = [];

    function Zu(uu) {
      if (uu < 768) return !1;
      for (let Eu = 0, ju = su.length;;) {
        let Zu = Eu + ju >> 1;
        if (uu < su[Zu]) ju = Zu;
        else {
          if (!(uu >= Uu[Zu])) return !0;
          Eu = Zu + 1
        }
        if (Eu == ju) return !1
      }
    }

    function Xu(uu) {
      return uu >= 127462 && uu <= 127487
    }(() => {
      let uu = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((uu => uu ? parseInt(uu, 36) : 1));
      for (let Eu = 0, ju = 0; Eu < uu.length; Eu++)(Eu % 2 ? Uu : su).push(ju += uu[Eu])
    })();
    const lu = 8205;

    function qu(uu, Eu) {
      return (!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2] ? fu : Cu)(uu, Eu, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function fu(uu, Eu, ju) {
      if (Eu == uu.length) return Eu;
      Eu && cu(uu.charCodeAt(Eu)) && Nu(uu.charCodeAt(Eu - 1)) && Eu--;
      let su = bu(uu, Eu);
      for (Eu += Ou(su); Eu < uu.length;) {
        let Uu = bu(uu, Eu);
        if (su == lu || Uu == lu || ju && Zu(Uu)) Eu += Ou(Uu), su = Uu;
        else {
          if (!Xu(Uu)) break;
          {
            let ju = 0,
              su = Eu - 2;
            for (; su >= 0 && Xu(bu(uu, su));) ju++, su -= 2;
            if (ju % 2 == 0) break;
            Eu += 2
          }
        }
      }
      return Eu
    }

    function Cu(uu, Eu, ju) {
      for (; Eu > 0;) {
        let su = fu(uu, Eu - 2, ju);
        if (su < Eu) return su;
        Eu--
      }
      return 0
    }

    function bu(uu, Eu) {
      let ju = uu.charCodeAt(Eu);
      if (!Nu(ju) || Eu + 1 == uu.length) return ju;
      let su = uu.charCodeAt(Eu + 1);
      return cu(su) ? su - 56320 + (ju - 55296 << 10) + 65536 : ju
    }

    function cu(uu) {
      return uu >= 56320 && uu < 57344
    }

    function Nu(uu) {
      return uu >= 55296 && uu < 56320
    }

    function Ou(uu) {
      return uu < 65536 ? 1 : 2
    }
    class Yu {
      lineAt(uu) {
        if (uu < 0 || uu > this.length) throw new RangeError(`Invalid position ${uu} in document of length ${this.length}`);
        return this.lineInner(uu, !1, 1, 0)
      }
      line(uu) {
        if (uu < 1 || uu > this.lines) throw new RangeError(`Invalid line number ${uu} in ${this.lines}-line document`);
        return this.lineInner(uu, !0, 1, 0)
      }
      replace(uu, Eu, ju) {
        [uu, Eu] = Ju(this, uu, Eu);
        let su = [];
        return this.decompose(0, uu, su, 2), ju.length && ju.decompose(0, ju.length, su, 3), this.decompose(Eu, this.length, su, 1), Du.from(su, this.length - (Eu - uu) + ju.length)
      }
      append(uu) {
        return this.replace(this.length, this.length, uu)
      }
      slice(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        [uu, Eu] = Ju(this, uu, Eu);
        let ju = [];
        return this.decompose(uu, Eu, ju, 0), Du.from(ju, Eu - uu)
      }
      eq(uu) {
        if (uu == this) return !0;
        if (uu.length != this.length || uu.lines != this.lines) return !1;
        let Eu = this.scanIdentical(uu, 1),
          ju = this.length - this.scanIdentical(uu, -1),
          su = new eu(this),
          Uu = new eu(uu);
        for (let Zu = Eu, Xu = Eu;;) {
          if (su.next(Zu), Uu.next(Zu), Zu = 0, su.lineBreak != Uu.lineBreak || su.done != Uu.done || su.value != Uu.value) return !1;
          if (Xu += su.value.length, su.done || Xu >= ju) return !0
        }
      }
      iter() {
        return new eu(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1)
      }
      iterRange(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        return new Gu(this, uu, Eu)
      }
      iterLines(uu, Eu) {
        let ju;
        if (null == uu) ju = this.iter();
        else {
          null == Eu && (Eu = this.lines + 1);
          let su = this.line(uu).from;
          ju = this.iterRange(su, Math.max(su, Eu == this.lines + 1 ? this.length : Eu <= 1 ? 0 : this.line(Eu - 1).to))
        }
        return new pu(ju)
      }
      toString() {
        return this.sliceString(0)
      }
      toJSON() {
        let uu = [];
        return this.flatten(uu), uu
      }
      constructor() {}
      static of (uu) {
        if (0 == uu.length) throw new RangeError("A document must have at least one line");
        return 1 != uu.length || uu[0] ? uu.length <= 32 ? new hu(uu) : Du.from(hu.split(uu, [])) : Yu.empty
      }
    }
    class hu extends Yu {
      constructor(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(uu) {
          let Eu = -1;
          for (let ju of uu) Eu += ju.length + 1;
          return Eu
        }(uu);
        super(), this.text = uu, this.length = Eu
      }
      get lines() {
        return this.text.length
      }
      get children() {
        return null
      }
      lineInner(uu, Eu, ju, su) {
        for (let Uu = 0;; Uu++) {
          let Zu = this.text[Uu],
            Xu = su + Zu.length;
          if ((Eu ? ju : Xu) >= uu) return new wu(su, Xu, ju, Zu);
          su = Xu + 1, ju++
        }
      }
      decompose(uu, Eu, ju, su) {
        let Uu = uu <= 0 && Eu >= this.length ? this : new hu(Mu(this.text, uu, Eu), Math.min(Eu, this.length) - Math.max(0, uu));
        if (1 & su) {
          let uu = ju.pop(),
            Eu = gu(Uu.text, uu.text.slice(), 0, Uu.length);
          if (Eu.length <= 32) ju.push(new hu(Eu, uu.length + Uu.length));
          else {
            let uu = Eu.length >> 1;
            ju.push(new hu(Eu.slice(0, uu)), new hu(Eu.slice(uu)))
          }
        } else ju.push(Uu)
      }
      replace(uu, Eu, ju) {
        if (!(ju instanceof hu)) return super.replace(uu, Eu, ju);
        [uu, Eu] = Ju(this, uu, Eu);
        let su = gu(this.text, gu(ju.text, Mu(this.text, 0, uu)), Eu),
          Uu = this.length + ju.length - (Eu - uu);
        return su.length <= 32 ? new hu(su, Uu) : Du.from(hu.split(su, []), Uu)
      }
      sliceString(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [uu, Eu] = Ju(this, uu, Eu);
        let su = "";
        for (let Uu = 0, Zu = 0; Uu <= Eu && Zu < this.text.length; Zu++) {
          let Xu = this.text[Zu],
            lu = Uu + Xu.length;
          Uu > uu && Zu && (su += ju), uu < lu && Eu > Uu && (su += Xu.slice(Math.max(0, uu - Uu), Eu - Uu)), Uu = lu + 1
        }
        return su
      }
      flatten(uu) {
        for (let Eu of this.text) uu.push(Eu)
      }
      scanIdentical() {
        return 0
      }
      static split(uu, Eu) {
        let ju = [],
          su = -1;
        for (let Uu of uu) ju.push(Uu), su += Uu.length + 1, 32 == ju.length && (Eu.push(new hu(ju, su)), ju = [], su = -1);
        return su > -1 && Eu.push(new hu(ju, su)), Eu
      }
    }
    class Du extends Yu {
      constructor(uu, Eu) {
        super(), this.children = uu, this.length = Eu, this.lines = 0;
        for (let ju of uu) this.lines += ju.lines
      }
      lineInner(uu, Eu, ju, su) {
        for (let Uu = 0;; Uu++) {
          let Zu = this.children[Uu],
            Xu = su + Zu.length,
            lu = ju + Zu.lines - 1;
          if ((Eu ? lu : Xu) >= uu) return Zu.lineInner(uu, Eu, ju, su);
          su = Xu + 1, ju = lu + 1
        }
      }
      decompose(uu, Eu, ju, su) {
        for (let Uu = 0, Zu = 0; Zu <= Eu && Uu < this.children.length; Uu++) {
          let Xu = this.children[Uu],
            lu = Zu + Xu.length;
          if (uu <= lu && Eu >= Zu) {
            let Uu = su & ((Zu <= uu ? 1 : 0) | (lu >= Eu ? 2 : 0));
            Zu >= uu && lu <= Eu && !Uu ? ju.push(Xu) : Xu.decompose(uu - Zu, Eu - Zu, ju, Uu)
          }
          Zu = lu + 1
        }
      }
      replace(uu, Eu, ju) {
        if ([uu, Eu] = Ju(this, uu, Eu), ju.lines < this.lines)
          for (let su = 0, Uu = 0; su < this.children.length; su++) {
            let Zu = this.children[su],
              Xu = Uu + Zu.length;
            if (uu >= Uu && Eu <= Xu) {
              let lu = Zu.replace(uu - Uu, Eu - Uu, ju),
                qu = this.lines - Zu.lines + lu.lines;
              if (lu.lines < qu >> 4 && lu.lines > qu >> 6) {
                let Uu = this.children.slice();
                return Uu[su] = lu, new Du(Uu, this.length - (Eu - uu) + ju.length)
              }
              return super.replace(Uu, Xu, lu)
            }
            Uu = Xu + 1
          }
        return super.replace(uu, Eu, ju)
      }
      sliceString(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [uu, Eu] = Ju(this, uu, Eu);
        let su = "";
        for (let Uu = 0, Zu = 0; Uu < this.children.length && Zu <= Eu; Uu++) {
          let Xu = this.children[Uu],
            lu = Zu + Xu.length;
          Zu > uu && Uu && (su += ju), uu < lu && Eu > Zu && (su += Xu.sliceString(uu - Zu, Eu - Zu, ju)), Zu = lu + 1
        }
        return su
      }
      flatten(uu) {
        for (let Eu of this.children) Eu.flatten(uu)
      }
      scanIdentical(uu, Eu) {
        if (!(uu instanceof Du)) return 0;
        let ju = 0,
          [su, Uu, Zu, Xu] = Eu > 0 ? [0, 0, this.children.length, uu.children.length] : [this.children.length - 1, uu.children.length - 1, -1, -1];
        for (;; su += Eu, Uu += Eu) {
          if (su == Zu || Uu == Xu) return ju;
          let lu = this.children[su],
            qu = uu.children[Uu];
          if (lu != qu) return ju + lu.scanIdentical(qu, Eu);
          ju += lu.length + 1
        }
      }
      static from(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uu.reduce(((uu, Eu) => uu + Eu.length + 1), -1),
          ju = 0;
        for (let cu of uu) ju += cu.lines;
        if (ju < 32) {
          let ju = [];
          for (let Eu of uu) Eu.flatten(ju);
          return new hu(ju, Eu)
        }
        let su = Math.max(32, ju >> 5),
          Uu = su << 1,
          Zu = su >> 1,
          Xu = [],
          lu = 0,
          qu = -1,
          fu = [];

        function Cu(uu) {
          let Eu;
          if (uu.lines > Uu && uu instanceof Du)
            for (let ju of uu.children) Cu(ju);
          else uu.lines > Zu && (lu > Zu || !lu) ? (bu(), Xu.push(uu)) : uu instanceof hu && lu && (Eu = fu[fu.length - 1]) instanceof hu && uu.lines + Eu.lines <= 32 ? (lu += uu.lines, qu += uu.length + 1, fu[fu.length - 1] = new hu(Eu.text.concat(uu.text), Eu.length + 1 + uu.length)) : (lu + uu.lines > su && bu(), lu += uu.lines, qu += uu.length + 1, fu.push(uu))
        }

        function bu() {
          0 != lu && (Xu.push(1 == fu.length ? fu[0] : Du.from(fu, qu)), qu = -1, lu = fu.length = 0)
        }
        for (let cu of uu) Cu(cu);
        return bu(), 1 == Xu.length ? Xu[0] : new Du(Xu, Eu)
      }
    }

    function gu(uu, Eu) {
      let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e9;
      for (let Uu = 0, Zu = 0, Xu = !0; Zu < uu.length && Uu <= su; Zu++) {
        let lu = uu[Zu],
          qu = Uu + lu.length;
        qu >= ju && (qu > su && (lu = lu.slice(0, su - Uu)), Uu < ju && (lu = lu.slice(ju - Uu)), Xu ? (Eu[Eu.length - 1] += lu, Xu = !1) : Eu.push(lu)), Uu = qu + 1
      }
      return Eu
    }

    function Mu(uu, Eu, ju) {
      return gu(uu, [""], Eu, ju)
    }
    Yu.empty = new hu([""], 0);
    class eu {
      constructor(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.dir = Eu, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [uu], this.offsets = [Eu > 0 ? 1 : (uu instanceof hu ? uu.text.length : uu.children.length) << 1]
      }
      nextInner(uu, Eu) {
        for (this.done = this.lineBreak = !1;;) {
          let ju = this.nodes.length - 1,
            su = this.nodes[ju],
            Uu = this.offsets[ju],
            Zu = Uu >> 1,
            Xu = su instanceof hu ? su.text.length : su.children.length;
          if (Zu == (Eu > 0 ? Xu : 0)) {
            if (0 == ju) return this.done = !0, this.value = "", this;
            Eu > 0 && this.offsets[ju - 1]++, this.nodes.pop(), this.offsets.pop()
          } else if ((1 & Uu) == (Eu > 0 ? 0 : 1)) {
            if (this.offsets[ju] += Eu, 0 == uu) return this.lineBreak = !0, this.value = "\n", this;
            uu--
          } else if (su instanceof hu) {
            let Uu = su.text[Zu + (Eu < 0 ? -1 : 0)];
            if (this.offsets[ju] += Eu, Uu.length > Math.max(0, uu)) return this.value = 0 == uu ? Uu : Eu > 0 ? Uu.slice(uu) : Uu.slice(0, Uu.length - uu), this;
            uu -= Uu.length
          } else {
            let Uu = su.children[Zu + (Eu < 0 ? -1 : 0)];
            uu > Uu.length ? (uu -= Uu.length, this.offsets[ju] += Eu) : (Eu < 0 && this.offsets[ju]--, this.nodes.push(Uu), this.offsets.push(Eu > 0 ? 1 : (Uu instanceof hu ? Uu.text.length : Uu.children.length) << 1))
          }
        }
      }
      next() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return uu < 0 && (this.nextInner(-uu, -this.dir), uu = this.value.length), this.nextInner(uu, this.dir)
      }
    }
    class Gu {
      constructor(uu, Eu, ju) {
        this.value = "", this.done = !1, this.cursor = new eu(uu, Eu > ju ? -1 : 1), this.pos = Eu > ju ? uu.length : 0, this.from = Math.min(Eu, ju), this.to = Math.max(Eu, ju)
      }
      nextInner(uu, Eu) {
        if (Eu < 0 ? this.pos <= this.from : this.pos >= this.to) return this.value = "", this.done = !0, this;
        uu += Math.max(0, Eu < 0 ? this.pos - this.to : this.from - this.pos);
        let ju = Eu < 0 ? this.pos - this.from : this.to - this.pos;
        uu > ju && (uu = ju), ju -= uu;
        let {
          value: su
        } = this.cursor.next(uu);
        return this.pos += (su.length + uu) * Eu, this.value = su.length <= ju ? su : Eu < 0 ? su.slice(su.length - ju) : su.slice(0, ju), this.done = !this.value, this
      }
      next() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return uu < 0 ? uu = Math.max(uu, this.from - this.pos) : uu > 0 && (uu = Math.min(uu, this.to - this.pos)), this.nextInner(uu, this.cursor.dir)
      }
      get lineBreak() {
        return this.cursor.lineBreak && "" != this.value
      }
    }
    class pu {
      constructor(uu) {
        this.inner = uu, this.afterBreak = !0, this.value = "", this.done = !1
      }
      next() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          {
            done: Eu,
            lineBreak: ju,
            value: su
          } = this.inner.next(uu);
        return Eu && this.afterBreak ? (this.value = "", this.afterBreak = !1) : Eu ? (this.done = !0, this.value = "") : ju ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = su, this.afterBreak = !1), this
      }
      get lineBreak() {
        return !1
      }
    }
    "undefined" != typeof Symbol && (Yu.prototype[Symbol.iterator] = function() {
      return this.iter()
    }, eu.prototype[Symbol.iterator] = Gu.prototype[Symbol.iterator] = pu.prototype[Symbol.iterator] = function() {
      return this
    });
    class wu {
      constructor(uu, Eu, ju, su) {
        this.from = uu, this.to = Eu, this.number = ju, this.text = su
      }
      get length() {
        return this.to - this.from
      }
    }

    function Ju(uu, Eu, ju) {
      return [Eu = Math.max(0, Math.min(uu.length, Eu)), Math.max(Eu, Math.min(uu.length, ju))]
    }

    function du(uu, Eu) {
      return qu(uu, Eu, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function au(uu, Eu) {
      let ju = uu.charCodeAt(Eu);
      if (!((su = ju) >= 55296 && su < 56320) || Eu + 1 == uu.length) return ju;
      var su;
      let Uu = uu.charCodeAt(Eu + 1);
      return function(uu) {
        return uu >= 56320 && uu < 57344
      }(Uu) ? Uu - 56320 + (ju - 55296 << 10) + 65536 : ju
    }

    function Pu(uu) {
      return uu <= 65535 ? String.fromCharCode(uu) : (uu -= 65536, String.fromCharCode(55296 + (uu >> 10), 56320 + (1023 & uu)))
    }

    function ou(uu) {
      return uu < 65536 ? 1 : 2
    }
    const ku = /\r\n?|\n/;
    var mu = function(uu) {
      return uu[uu.Simple = 0] = "Simple", uu[uu.TrackDel = 1] = "TrackDel", uu[uu.TrackBefore = 2] = "TrackBefore", uu[uu.TrackAfter = 3] = "TrackAfter", uu
    }(mu || (mu = {}));
    class vu {
      constructor(uu) {
        this.sections = uu
      }
      get length() {
        let uu = 0;
        for (let Eu = 0; Eu < this.sections.length; Eu += 2) uu += this.sections[Eu];
        return uu
      }
      get newLength() {
        let uu = 0;
        for (let Eu = 0; Eu < this.sections.length; Eu += 2) {
          let ju = this.sections[Eu + 1];
          uu += ju < 0 ? this.sections[Eu] : ju
        }
        return uu
      }
      get empty() {
        return 0 == this.sections.length || 2 == this.sections.length && this.sections[1] < 0
      }
      iterGaps(uu) {
        for (let Eu = 0, ju = 0, su = 0; Eu < this.sections.length;) {
          let Uu = this.sections[Eu++],
            Zu = this.sections[Eu++];
          Zu < 0 ? (uu(ju, su, Uu), su += Uu) : su += Zu, ju += Uu
        }
      }
      iterChangedRanges(uu) {
        Qu(this, uu, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get invertedDesc() {
        let uu = [];
        for (let Eu = 0; Eu < this.sections.length;) {
          let ju = this.sections[Eu++],
            su = this.sections[Eu++];
          su < 0 ? uu.push(ju, su) : uu.push(su, ju)
        }
        return new vu(uu)
      }
      composeDesc(uu) {
        return this.empty ? uu : uu.empty ? this : Wu(this, uu)
      }
      mapDesc(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return uu.empty ? this : iu(this, uu, Eu)
      }
      mapPos(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : mu.Simple,
          su = 0,
          Uu = 0;
        for (let Zu = 0; Zu < this.sections.length;) {
          let Xu = this.sections[Zu++],
            lu = this.sections[Zu++],
            qu = su + Xu;
          if (lu < 0) {
            if (qu > uu) return Uu + (uu - su);
            Uu += Xu
          } else {
            if (ju != mu.Simple && qu >= uu && (ju == mu.TrackDel && su < uu && qu > uu || ju == mu.TrackBefore && su < uu || ju == mu.TrackAfter && qu > uu)) return null;
            if (qu > uu || qu == uu && Eu < 0 && !Xu) return uu == su || Eu < 0 ? Uu : Uu + lu;
            Uu += lu
          }
          su = qu
        }
        if (uu > su) throw new RangeError(`Position ${uu} is out of range for changeset of length ${su}`);
        return Uu
      }
      touchesRange(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uu;
        for (let ju = 0, su = 0; ju < this.sections.length && su <= Eu;) {
          let Uu = su + this.sections[ju++];
          if (this.sections[ju++] >= 0 && su <= Eu && Uu >= uu) return !(su < uu && Uu > Eu) || "cover";
          su = Uu
        }
        return !1
      }
      toString() {
        let uu = "";
        for (let Eu = 0; Eu < this.sections.length;) {
          let ju = this.sections[Eu++],
            su = this.sections[Eu++];
          uu += (uu ? " " : "") + ju + (su >= 0 ? ":" + su : "")
        }
        return uu
      }
      toJSON() {
        return this.sections
      }
      static fromJSON(uu) {
        if (!Array.isArray(uu) || uu.length % 2 || uu.some((uu => "number" != typeof uu))) throw new RangeError("Invalid JSON representation of ChangeDesc");
        return new vu(uu)
      }
      static create(uu) {
        return new vu(uu)
      }
    }
    class Ku extends vu {
      constructor(uu, Eu) {
        super(uu), this.inserted = Eu
      }
      apply(uu) {
        if (this.length != uu.length) throw new RangeError("Applying change set to a document with the wrong length");
        return Qu(this, ((Eu, ju, su, Uu, Zu) => uu = uu.replace(su, su + (ju - Eu), Zu)), !1), uu
      }
      mapDesc(uu) {
        return iu(this, uu, arguments.length > 1 && void 0 !== arguments[1] && arguments[1], !0)
      }
      invert(uu) {
        let Eu = this.sections.slice(),
          ju = [];
        for (let su = 0, Uu = 0; su < Eu.length; su += 2) {
          let Zu = Eu[su],
            Xu = Eu[su + 1];
          if (Xu >= 0) {
            Eu[su] = Xu, Eu[su + 1] = Zu;
            let lu = su >> 1;
            for (; ju.length < lu;) ju.push(Yu.empty);
            ju.push(Zu ? uu.slice(Uu, Uu + Zu) : Yu.empty)
          }
          Uu += Zu
        }
        return new Ku(Eu, ju)
      }
      compose(uu) {
        return this.empty ? uu : uu.empty ? this : Wu(this, uu, !0)
      }
      map(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return uu.empty ? this : iu(this, uu, Eu, !0)
      }
      iterChanges(uu) {
        Qu(this, uu, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get desc() {
        return vu.create(this.sections)
      }
      filter(uu) {
        let Eu = [],
          ju = [],
          su = [],
          Uu = new Su(this);
        uu: for (let Zu = 0, Xu = 0;;) {
          let lu = Zu == uu.length ? 1e9 : uu[Zu++];
          for (; Xu < lu || Xu == lu && 0 == Uu.len;) {
            if (Uu.done) break uu;
            let uu = Math.min(Uu.len, lu - Xu);
            Vu(su, uu, -1);
            let Zu = -1 == Uu.ins ? -1 : 0 == Uu.off ? Uu.ins : 0;
            Vu(Eu, uu, Zu), Zu > 0 && ru(ju, Eu, Uu.text), Uu.forward(uu), Xu += uu
          }
          let qu = uu[Zu++];
          for (; Xu < qu;) {
            if (Uu.done) break uu;
            let uu = Math.min(Uu.len, qu - Xu);
            Vu(Eu, uu, -1), Vu(su, uu, -1 == Uu.ins ? -1 : 0 == Uu.off ? Uu.ins : 0), Uu.forward(uu), Xu += uu
          }
        }
        return {
          changes: new Ku(Eu, ju),
          filtered: vu.create(su)
        }
      }
      toJSON() {
        let uu = [];
        for (let Eu = 0; Eu < this.sections.length; Eu += 2) {
          let ju = this.sections[Eu],
            su = this.sections[Eu + 1];
          su < 0 ? uu.push(ju) : 0 == su ? uu.push([ju]) : uu.push([ju].concat(this.inserted[Eu >> 1].toJSON()))
        }
        return uu
      }
      static of (uu, Eu, ju) {
        let su = [],
          Uu = [],
          Zu = 0,
          Xu = null;

        function lu() {
          if (!(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && !su.length) return;
          Zu < Eu && Vu(su, Eu - Zu, -1);
          let uu = new Ku(su, Uu);
          Xu = Xu ? Xu.compose(uu.map(Xu)) : uu, su = [], Uu = [], Zu = 0
        }
        return function uu(qu) {
          if (Array.isArray(qu))
            for (let Eu of qu) uu(Eu);
          else if (qu instanceof Ku) {
            if (qu.length != Eu) throw new RangeError(`Mismatched change set length (got ${qu.length}, expected ${Eu})`);
            lu(), Xu = Xu ? Xu.compose(qu.map(Xu)) : qu
          } else {
            let {
              from: uu,
              to: Xu = uu,
              insert: fu
            } = qu;
            if (uu > Xu || uu < 0 || Xu > Eu) throw new RangeError(`Invalid change range ${uu} to ${Xu} (in doc of length ${Eu})`);
            let Cu = fu ? "string" == typeof fu ? Yu.of(fu.split(ju || ku)) : fu : Yu.empty,
              bu = Cu.length;
            if (uu == Xu && 0 == bu) return;
            uu < Zu && lu(), uu > Zu && Vu(su, uu - Zu, -1), Vu(su, Xu - uu, bu), ru(Uu, su, Cu), Zu = Xu
          }
        }(uu), lu(!Xu), Xu
      }
      static empty(uu) {
        return new Ku(uu ? [uu, -1] : [], [])
      }
      static fromJSON(uu) {
        if (!Array.isArray(uu)) throw new RangeError("Invalid JSON representation of ChangeSet");
        let Eu = [],
          ju = [];
        for (let su = 0; su < uu.length; su++) {
          let Uu = uu[su];
          if ("number" == typeof Uu) Eu.push(Uu, -1);
          else {
            if (!Array.isArray(Uu) || "number" != typeof Uu[0] || Uu.some(((uu, Eu) => Eu && "string" != typeof uu))) throw new RangeError("Invalid JSON representation of ChangeSet");
            if (1 == Uu.length) Eu.push(Uu[0], 0);
            else {
              for (; ju.length < su;) ju.push(Yu.empty);
              ju[su] = Yu.of(Uu.slice(1)), Eu.push(Uu[0], ju[su].length)
            }
          }
        }
        return new Ku(Eu, ju)
      }
      static createSet(uu, Eu) {
        return new Ku(uu, Eu)
      }
    }

    function Vu(uu, Eu, ju) {
      let su = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (0 == Eu && ju <= 0) return;
      let Uu = uu.length - 2;
      Uu >= 0 && ju <= 0 && ju == uu[Uu + 1] ? uu[Uu] += Eu : Uu >= 0 && 0 == Eu && 0 == uu[Uu] ? uu[Uu + 1] += ju : su ? (uu[Uu] += Eu, uu[Uu + 1] += ju) : uu.push(Eu, ju)
    }

    function ru(uu, Eu, ju) {
      if (0 == ju.length) return;
      let su = Eu.length - 2 >> 1;
      if (su < uu.length) uu[uu.length - 1] = uu[uu.length - 1].append(ju);
      else {
        for (; uu.length < su;) uu.push(Yu.empty);
        uu.push(ju)
      }
    }

    function Qu(uu, Eu, ju) {
      let su = uu.inserted;
      for (let Uu = 0, Zu = 0, Xu = 0; Xu < uu.sections.length;) {
        let lu = uu.sections[Xu++],
          qu = uu.sections[Xu++];
        if (qu < 0) Uu += lu, Zu += lu;
        else {
          let fu = Uu,
            Cu = Zu,
            bu = Yu.empty;
          for (; fu += lu, Cu += qu, qu && su && (bu = bu.append(su[Xu - 2 >> 1])), !(ju || Xu == uu.sections.length || uu.sections[Xu + 1] < 0);) lu = uu.sections[Xu++], qu = uu.sections[Xu++];
          Eu(Uu, fu, Zu, Cu, bu), Uu = fu, Zu = Cu
        }
      }
    }

    function iu(uu, Eu, ju) {
      let su = [],
        Uu = arguments.length > 3 && void 0 !== arguments[3] && arguments[3] ? [] : null,
        Zu = new Su(uu),
        Xu = new Su(Eu),
        lu = 0;
      for (let qu = -1;;) {
        if (++lu > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - likely malformed ChangeSet");
        if (Zu.done && Xu.len || Xu.done && Zu.len) throw new Error("Mismatched change set lengths");
        if (-1 == Zu.ins && -1 == Xu.ins) {
          let uu = Math.min(Zu.len, Xu.len);
          Vu(su, uu, -1), Zu.forward(uu), Xu.forward(uu)
        } else if (Xu.ins >= 0 && (Zu.ins < 0 || qu == Zu.i || 0 == Zu.off && (Xu.len < Zu.len || Xu.len == Zu.len && !ju))) {
          let uu = Xu.len;
          for (Vu(su, Xu.ins, -1); uu;) {
            if (++lu > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-b");
            let Eu = Math.min(Zu.len, uu);
            Zu.ins >= 0 && qu < Zu.i && Zu.len <= Eu && (Vu(su, 0, Zu.ins), Uu && ru(Uu, su, Zu.text), qu = Zu.i), Zu.forward(Eu), uu -= Eu
          }
          Xu.next()
        } else {
          if (!(Zu.ins >= 0)) {
            if (Zu.done && Xu.done) return Uu ? Ku.createSet(su, Uu) : vu.create(su);
            throw new Error("Mismatched change set lengths")
          } {
            let uu = 0,
              Eu = Zu.len;
            for (; Eu;) {
              if (++lu > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-a");
              if (-1 == Xu.ins) {
                let ju = Math.min(Eu, Xu.len);
                uu += ju, Eu -= ju, Xu.forward(ju)
              } else {
                if (!(0 == Xu.ins && Xu.len < Eu)) break;
                Eu -= Xu.len, Xu.next()
              }
            }
            Vu(su, uu, qu < Zu.i ? Zu.ins : 0), Uu && qu < Zu.i && ru(Uu, su, Zu.text), qu = Zu.i, Zu.forward(Zu.len - Eu)
          }
        }
      }
    }

    function Wu(uu, Eu) {
      let ju = [],
        su = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? [] : null,
        Uu = new Su(uu),
        Zu = new Su(Eu),
        Xu = 0;
      for (let lu = !1;;) {
        if (++Xu > 2e6) throw new Error("BLOXD CODEMIRROR: composeSets exceeded max iterations - likely malformed ChangeSet");
        if (Uu.done && Zu.done) return su ? Ku.createSet(ju, su) : vu.create(ju);
        if (0 == Uu.ins) Vu(ju, Uu.len, 0, lu), Uu.next();
        else if (0 != Zu.len || Zu.done) {
          if (Uu.done || Zu.done) throw new Error("Mismatched change set lengths");
          {
            let uu = Math.min(Uu.len2, Zu.len),
              Eu = ju.length;
            if (-1 == Uu.ins) {
              let Eu = -1 == Zu.ins ? -1 : Zu.off ? 0 : Zu.ins;
              Vu(ju, uu, Eu, lu), su && Eu && ru(su, ju, Zu.text)
            } else - 1 == Zu.ins ? (Vu(ju, Uu.off ? 0 : Uu.len, uu, lu), su && ru(su, ju, Uu.textBit(uu))) : (Vu(ju, Uu.off ? 0 : Uu.len, Zu.off ? 0 : Zu.ins, lu), su && !Zu.off && ru(su, ju, Zu.text));
            lu = (Uu.ins > uu || Zu.ins >= 0 && Zu.len > uu) && (lu || ju.length > Eu), Uu.forward2(uu), Zu.forward(uu)
          }
        } else Vu(ju, 0, Zu.ins, lu), su && ru(su, ju, Zu.text), Zu.next()
      }
    }
    class Su {
      constructor(uu) {
        this.set = uu, this.i = 0, this.next()
      }
      next() {
        let {
          sections: uu
        } = this.set;
        this.i < uu.length ? (this.len = uu[this.i++], this.ins = uu[this.i++]) : (this.len = 0, this.ins = -2), this.off = 0
      }
      get done() {
        return -2 == this.ins
      }
      get len2() {
        return this.ins < 0 ? this.len : this.ins
      }
      get text() {
        let {
          inserted: uu
        } = this.set, Eu = this.i - 2 >> 1;
        return Eu >= uu.length ? Yu.empty : uu[Eu]
      }
      textBit(uu) {
        let {
          inserted: Eu
        } = this.set, ju = this.i - 2 >> 1;
        return ju >= Eu.length && !uu ? Yu.empty : Eu[ju].slice(this.off, null == uu ? void 0 : this.off + uu)
      }
      forward(uu) {
        uu == this.len ? this.next() : (this.len -= uu, this.off += uu)
      }
      forward2(uu) {
        -1 == this.ins ? this.forward(uu) : uu == this.ins ? this.next() : (this.ins -= uu, this.off += uu)
      }
    }
    class Iu {
      constructor(uu, Eu, ju) {
        this.from = uu, this.to = Eu, this.flags = ju
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
        let uu = 7 & this.flags;
        return 7 == uu ? null : uu
      }
      get goalColumn() {
        let uu = this.flags >> 6;
        return 16777215 == uu ? void 0 : uu
      }
      map(uu) {
        let Eu, ju, su = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return this.empty ? Eu = ju = uu.mapPos(this.from, su) : (Eu = uu.mapPos(this.from, 1), ju = uu.mapPos(this.to, -1)), Eu == this.from && ju == this.to ? this : new Iu(Eu, ju, this.flags)
      }
      extend(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uu,
          ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (uu <= this.anchor && Eu >= this.anchor) return Fu.range(uu, Eu, void 0, void 0, ju);
        let su = Math.abs(uu - this.anchor) > Math.abs(Eu - this.anchor) ? uu : Eu;
        return Fu.range(this.anchor, su, void 0, void 0, ju)
      }
      eq(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.anchor == uu.anchor && this.head == uu.head && this.goalColumn == uu.goalColumn && (!Eu || !this.empty || this.assoc == uu.assoc)
      }
      toJSON() {
        return {
          anchor: this.anchor,
          head: this.head
        }
      }
      static fromJSON(uu) {
        if (!uu || "number" != typeof uu.anchor || "number" != typeof uu.head) throw new RangeError("Invalid JSON representation for SelectionRange");
        return Fu.range(uu.anchor, uu.head)
      }
      static create(uu, Eu, ju) {
        return new Iu(uu, Eu, ju)
      }
    }
    class Fu {
      constructor(uu, Eu) {
        this.HY = uu, this.mainIndex = Eu
      }
      map(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return uu.empty ? this : Fu.create(this.HY.map((ju => ju.map(uu, Eu))), this.mainIndex)
      }
      eq(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.HY.length != uu.HY.length || this.mainIndex != uu.mainIndex) return !1;
        for (let ju = 0; ju < this.HY.length; ju++)
          if (!this.HY[ju].eq(uu.HY[ju], Eu)) return !1;
        return !0
      }
      get main() {
        return this.HY[this.mainIndex]
      }
      asSingle() {
        return 1 == this.HY.length ? this : new Fu([this.main], 0)
      }
      addRange(uu) {
        let Eu = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return Fu.create([uu].concat(this.HY), Eu ? 0 : this.mainIndex + 1)
      }
      replaceRange(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.mainIndex,
          ju = this.HY.slice();
        return ju[Eu] = uu, Fu.create(ju, this.mainIndex)
      }
      toJSON() {
        return {
          HY: this.HY.map((uu => uu.toJSON())),
          main: this.mainIndex
        }
      }
      static fromJSON(uu) {
        if (!uu || !Array.isArray(uu.HY) || "number" != typeof uu.main || uu.main >= uu.HY.length) throw new RangeError("Invalid JSON representation for EditorSelection");
        return new Fu(uu.HY.map((uu => Iu.fromJSON(uu))), uu.main)
      }
      static single(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uu;
        return new Fu([Fu.range(uu, Eu)], 0)
      }
      static create(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (0 == uu.length) throw new RangeError("A selection needs at least one range");
        for (let ju = 0, su = 0; su < uu.length; su++) {
          let Uu = uu[su];
          if (Uu.empty ? Uu.from <= ju : Uu.from < ju) return Fu.normalized(uu.slice(), Eu);
          ju = Uu.to
        }
        return new Fu(uu, Eu)
      }
      static cursor(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ju = arguments.length > 2 ? arguments[2] : void 0,
          su = arguments.length > 3 ? arguments[3] : void 0;
        return Iu.create(uu, uu, (0 == Eu ? 0 : Eu < 0 ? 8 : 16) | (null == ju ? 7 : Math.min(6, ju)) | (null !== su && void 0 !== su ? su : 16777215) << 6)
      }
      static range(uu, Eu, ju, su, Uu) {
        let Zu = (null !== ju && void 0 !== ju ? ju : 16777215) << 6 | (null == su ? 7 : Math.min(6, su));
        return Uu || uu == Eu || (Uu = Eu < uu ? 1 : -1), Eu < uu ? Iu.create(Eu, uu, 48 | Zu) : Iu.create(uu, Eu, (Uu ? Uu < 0 ? 8 : 16 : 0) | Zu)
      }
      static normalized(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ju = uu[Eu];
        uu.sort(((uu, Eu) => uu.from - Eu.from)), Eu = uu.indexOf(ju);
        for (let su = 1; su < uu.length; su++) {
          let ju = uu[su],
            Uu = uu[su - 1];
          if (ju.empty ? ju.from <= Uu.to : ju.from < Uu.to) {
            let Zu = Uu.from,
              Xu = Math.max(ju.to, Uu.to);
            su <= Eu && Eu--, uu.splice(--su, 2, ju.anchor > ju.head ? Fu.range(Xu, Zu) : Fu.range(Zu, Xu))
          }
        }
        return new Fu(uu, Eu)
      }
    }

    function Bu(uu, Eu) {
      for (let ju of uu.HY)
        if (ju.to > Eu) throw new RangeError("Selection points outside of document")
    }
    let Lu = 0;
    class tu {
      constructor(uu, Eu, ju, su, Uu) {
        this.combine = uu, this.compareInput = Eu, this.compare = ju, this.isStatic = su, this.id = Lu++, this.default = uu([]), this.extensions = "function" == typeof Uu ? Uu(this) : Uu
      }
      get reader() {
        return this
      }
      static define() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return new tu(uu.combine || (uu => uu), uu.compareInput || ((uu, Eu) => uu === Eu), uu.compare || (uu.combine ? (uu, Eu) => uu === Eu : xu), !!uu.static, uu.enables)
      }
      of(uu) {
        return new Tu([], this, 0, uu)
      }
      compute(uu, Eu) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new Tu(uu, this, 1, Eu)
      }
      computeN(uu, Eu) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new Tu(uu, this, 2, Eu)
      }
      from(uu, Eu) {
        return Eu || (Eu = uu => uu), this.compute([uu], (ju => Eu(ju.field(uu))))
      }
    }

    function xu(uu, Eu) {
      return uu == Eu || uu.length == Eu.length && uu.every(((uu, ju) => uu === Eu[ju]))
    }
    class Tu {
      constructor(uu, Eu, ju, su) {
        this.dependencies = uu, this.facet = Eu, this.type = ju, this.value = su, this.id = Lu++
      }
      dynamicSlot(uu) {
        var Eu;
        let ju = this.value,
          su = this.facet.compareInput,
          Uu = this.id,
          Zu = uu[Uu] >> 1,
          Xu = 2 == this.type,
          lu = !1,
          qu = !1,
          fu = [];
        for (let Cu of this.dependencies) "doc" == Cu ? lu = !0 : "selection" == Cu ? qu = !0 : 0 == (1 & (null !== (Eu = uu[Cu.id]) && void 0 !== Eu ? Eu : 1)) && fu.push(uu[Cu.id]);
        return {
          create: uu => (uu.values[Zu] = ju(uu), 1),
          update(uu, Eu) {
            if (lu && Eu.docChanged || qu && (Eu.docChanged || Eu.selection) || Au(uu, fu)) {
              let Eu = ju(uu);
              if (Xu ? !Hu(Eu, uu.values[Zu], su) : !su(Eu, uu.values[Zu])) return uu.values[Zu] = Eu, 1
            }
            return 0
          },
          reconfigure: (uu, Eu) => {
            let lu, qu = Eu.config.address[Uu];
            if (null != qu) {
              let Uu = CE(Eu, qu);
              if (this.dependencies.every((ju => ju instanceof tu ? Eu.facet(ju) === uu.facet(ju) : !(ju instanceof zu) || Eu.field(ju, !1) == uu.field(ju, !1))) || (Xu ? Hu(lu = ju(uu), Uu, su) : su(lu = ju(uu), Uu))) return uu.values[Zu] = Uu, 0
            } else lu = ju(uu);
            return uu.values[Zu] = lu, 1
          }
        }
      }
    }

    function Hu(uu, Eu, ju) {
      if (uu.length != Eu.length) return !1;
      for (let su = 0; su < uu.length; su++)
        if (!ju(uu[su], Eu[su])) return !1;
      return !0
    }

    function Au(uu, Eu) {
      let ju = !1;
      for (let su of Eu) 1 & fE(uu, su) && (ju = !0);
      return ju
    }

    function nu(uu, Eu, ju) {
      let su = ju.map((Eu => uu[Eu.id])),
        Uu = ju.map((uu => uu.type)),
        Zu = su.filter((uu => !(1 & uu))),
        Xu = uu[Eu.id] >> 1;

      function lu(uu) {
        let ju = [];
        for (let Eu = 0; Eu < su.length; Eu++) {
          let Zu = CE(uu, su[Eu]);
          if (2 == Uu[Eu])
            for (let uu of Zu) ju.push(uu);
          else ju.push(Zu)
        }
        return Eu.combine(ju)
      }
      return {
        create(uu) {
          for (let Eu of su) fE(uu, Eu);
          return uu.values[Xu] = lu(uu), 1
        },
        update(uu, ju) {
          if (!Au(uu, Zu)) return 0;
          let su = lu(uu);
          return Eu.compare(su, uu.values[Xu]) ? 0 : (uu.values[Xu] = su, 1)
        },
        reconfigure(uu, Uu) {
          let Zu = Au(uu, su),
            qu = Uu.config.facets[Eu.id],
            fu = Uu.facet(Eu);
          if (qu && !Zu && xu(ju, qu)) return uu.values[Xu] = fu, 0;
          let Cu = lu(uu);
          return Eu.compare(Cu, fu) ? (uu.values[Xu] = fu, 0) : (uu.values[Xu] = Cu, 1)
        }
      }
    }
    const yu = tu.define({
      static: !0
    });
    class zu {
      constructor(uu, Eu, ju, su, Uu) {
        this.id = uu, this.createF = Eu, this.updateF = ju, this.compareF = su, this.spec = Uu, this.provides = void 0
      }
      static define(uu) {
        let Eu = new zu(Lu++, uu.create, uu.update, uu.compare || ((uu, Eu) => uu === Eu), uu);
        return uu.provide && (Eu.provides = uu.provide(Eu)), Eu
      }
      create(uu) {
        let Eu = uu.facet(yu).find((uu => uu.field == this));
        return ((null === Eu || void 0 === Eu ? void 0 : Eu.create) || this.createF)(uu)
      }
      slot(uu) {
        let Eu = uu[this.id] >> 1;
        return {
          create: uu => (uu.values[Eu] = this.create(uu), 1),
          update: (uu, ju) => {
            let su = uu.values[Eu],
              Uu = this.updateF(su, ju);
            return this.compareF(su, Uu) ? 0 : (uu.values[Eu] = Uu, 1)
          },
          reconfigure: (uu, ju) => {
            let su, Uu = uu.facet(yu),
              Zu = ju.facet(yu);
            return (su = Uu.find((uu => uu.field == this))) && su != Zu.find((uu => uu.field == this)) ? (uu.values[Eu] = su.create(uu), 1) : null != ju.config.address[this.id] ? (uu.values[Eu] = ju.field(this), 0) : (uu.values[Eu] = this.create(uu), 1)
          }
        }
      }
      init(uu) {
        return [this, yu.of({
          field: this,
          create: uu
        })]
      }
      get extension() {
        return this
      }
    }
    const Ru = 4,
      uE = 3,
      EE = 2,
      jE = 1;

    function sE(uu) {
      return Eu => new ZE(Eu, uu)
    }
    const UE = {
      highest: sE(0),
      high: sE(jE),
      default: sE(EE),
      low: sE(uE),
      lowest: sE(Ru)
    };
    class ZE {
      constructor(uu, Eu) {
        this.inner = uu, this.prec = Eu
      }
    }
    class XE {
      of(uu) {
        return new lE(this, uu)
      }
      reconfigure(uu) {
        return XE.reconfigure.of({
          compartment: this,
          extension: uu
        })
      }
      get(uu) {
        return uu.config.compartments.get(this)
      }
    }
    class lE {
      constructor(uu, Eu) {
        this.compartment = uu, this.inner = Eu
      }
    }
    class qE {
      constructor(uu, Eu, ju, su, Uu, Zu) {
        for (this.base = uu, this.compartments = Eu, this.dynamicSlots = ju, this.address = su, this.staticValues = Uu, this.facets = Zu, this.statusTemplate = []; this.statusTemplate.length < ju.length;) this.statusTemplate.push(0)
      }
      staticFacet(uu) {
        let Eu = this.address[uu.id];
        return null == Eu ? uu.default : this.staticValues[Eu >> 1]
      }
      static resolve(uu, Eu, ju) {
        let su = [],
          Uu = Object.create(null),
          Zu = new Map;
        for (let bu of function(uu, Eu, ju) {
            let su = [
                [],
                [],
                [],
                [],
                []
              ],
              Uu = new Map;

            function Zu(uu, Xu) {
              let lu = Uu.get(uu);
              if (null != lu) {
                if (lu <= Xu) return;
                let Eu = su[lu].indexOf(uu);
                Eu > -1 && su[lu].splice(Eu, 1), uu instanceof lE && ju.delete(uu.compartment)
              }
              if (Uu.set(uu, Xu), Array.isArray(uu))
                for (let Eu of uu) Zu(Eu, Xu);
              else if (uu instanceof lE) {
                if (ju.has(uu.compartment)) throw new RangeError("Duplicate use of compartment in extensions");
                let su = Eu.get(uu.compartment) || uu.inner;
                ju.set(uu.compartment, su), Zu(su, Xu)
              } else if (uu instanceof ZE) Zu(uu.inner, uu.prec);
              else if (uu instanceof zu) su[Xu].push(uu), uu.provides && Zu(uu.provides, Xu);
              else if (uu instanceof Tu) su[Xu].push(uu), uu.facet.extensions && Zu(uu.facet.extensions, EE);
              else {
                let Eu = uu.extension;
                if (!Eu) throw new Error(`Unrecognized extension value in extension set (${uu}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
                Zu(Eu, Xu)
              }
            }
            return Zu(uu, EE), su.reduce(((uu, Eu) => uu.concat(Eu)))
          }(uu, Eu, Zu)) bu instanceof zu ? su.push(bu) : (Uu[bu.facet.id] || (Uu[bu.facet.id] = [])).push(bu);
        let Xu = Object.create(null),
          lu = [],
          qu = [];
        for (let bu of su) Xu[bu.id] = qu.length << 1, qu.push((uu => bu.slot(uu)));
        let fu = null === ju || void 0 === ju ? void 0 : ju.config.facets;
        for (let bu in Uu) {
          let uu = Uu[bu],
            Eu = uu[0].facet,
            su = fu && fu[bu] || [];
          if (uu.every((uu => 0 == uu.type)))
            if (Xu[Eu.id] = lu.length << 1 | 1, xu(su, uu)) lu.push(ju.facet(Eu));
            else {
              let su = Eu.combine(uu.map((uu => uu.value)));
              lu.push(ju && Eu.compare(su, ju.facet(Eu)) ? ju.facet(Eu) : su)
            }
          else {
            for (let Eu of uu) 0 == Eu.type ? (Xu[Eu.id] = lu.length << 1 | 1, lu.push(Eu.value)) : (Xu[Eu.id] = qu.length << 1, qu.push((uu => Eu.dynamicSlot(uu))));
            Xu[Eu.id] = qu.length << 1, qu.push((ju => nu(ju, Eu, uu)))
          }
        }
        let Cu = qu.map((uu => uu(Xu)));
        return new qE(uu, Zu, Cu, Xu, lu, Uu)
      }
    }

    function fE(uu, Eu) {
      if (1 & Eu) return 2;
      let ju = Eu >> 1,
        su = uu.status[ju];
      if (4 == su) throw new Error("Cyclic dependency between fields and/or facets");
      if (2 & su) return su;
      uu.status[ju] = 4;
      let Uu = uu.computeSlot(uu, uu.config.dynamicSlots[ju]);
      return uu.status[ju] = 2 | Uu
    }

    function CE(uu, Eu) {
      return 1 & Eu ? uu.config.staticValues[Eu >> 1] : uu.values[Eu >> 1]
    }
    const bE = tu.define(),
      cE = tu.define({
        combine: uu => uu.some((uu => uu)),
        static: !0
      }),
      NE = tu.define({
        combine: uu => uu.length ? uu[0] : void 0,
        static: !0
      }),
      OE = tu.define(),
      YE = tu.define(),
      hE = tu.define(),
      DE = tu.define({
        combine: uu => !!uu.length && uu[0]
      });
    class gE {
      constructor(uu, Eu) {
        this.type = uu, this.value = Eu
      }
      static define() {
        return new ME
      }
    }
    class ME {
      of(uu) {
        return new gE(this, uu)
      }
    }
    class eE {
      constructor(uu) {
        this.map = uu
      }
      of(uu) {
        return new GE(this, uu)
      }
    }
    class GE {
      constructor(uu, Eu) {
        this.type = uu, this.value = Eu
      }
      map(uu) {
        let Eu = this.type.map(this.value, uu);
        return void 0 === Eu ? void 0 : Eu == this.value ? this : new GE(this.type, Eu)
      }
      is(uu) {
        return this.type == uu
      }
      static define() {
        return new eE((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).map || (uu => uu))
      }
      static mapEffects(uu, Eu) {
        if (!uu.length) return uu;
        let ju = [];
        for (let su of uu) {
          let uu = su.map(Eu);
          uu && ju.push(uu)
        }
        return ju
      }
    }
    GE.reconfigure = GE.define(), GE.appendConfig = GE.define();
    class pE {
      constructor(uu, Eu, ju, su, Uu, Zu) {
        this.startState = uu, this.changes = Eu, this.selection = ju, this.effects = su, this.annotations = Uu, this.scrollIntoView = Zu, this._doc = null, this._state = null, ju && Bu(ju, Eu.newLength), Uu.some((uu => uu.type == pE.time)) || (this.annotations = Uu.concat(pE.time.of(Date.now())))
      }
      static create(uu, Eu, ju, su, Uu, Zu) {
        return new pE(uu, Eu, ju, su, Uu, Zu)
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
      annotation(uu) {
        for (let Eu of this.annotations)
          if (Eu.type == uu) return Eu.value
      }
      get docChanged() {
        return !this.changes.empty
      }
      get reconfigured() {
        return this.startState.config != this.state.config
      }
      isUserEvent(uu) {
        let Eu = this.annotation(pE.userEvent);
        return !(!Eu || !(Eu == uu || Eu.length > uu.length && Eu.slice(0, uu.length) == uu && "." == Eu[uu.length]))
      }
    }

    function wE(uu, Eu) {
      let ju = [];
      for (let su = 0, Uu = 0;;) {
        let Zu, Xu;
        if (su < uu.length && (Uu == Eu.length || Eu[Uu] >= uu[su])) Zu = uu[su++], Xu = uu[su++];
        else {
          if (!(Uu < Eu.length)) return ju;
          Zu = Eu[Uu++], Xu = Eu[Uu++]
        }!ju.length || ju[ju.length - 1] < Zu ? ju.push(Zu, Xu) : ju[ju.length - 1] < Xu && (ju[ju.length - 1] = Xu)
      }
    }

    function JE(uu, Eu, ju) {
      var su;
      let Uu, Zu, Xu;
      return ju ? (Uu = Eu.changes, Zu = Ku.empty(Eu.changes.length), Xu = uu.changes.compose(Eu.changes)) : (Uu = Eu.changes.map(uu.changes), Zu = uu.changes.mapDesc(Eu.changes, !0), Xu = uu.changes.compose(Uu)), {
        changes: Xu,
        selection: Eu.selection ? Eu.selection.map(Zu) : null === (su = uu.selection) || void 0 === su ? void 0 : su.map(Uu),
        effects: GE.mapEffects(uu.effects, Uu).concat(GE.mapEffects(Eu.effects, Zu)),
        annotations: uu.annotations.length ? uu.annotations.concat(Eu.annotations) : Eu.annotations,
        scrollIntoView: uu.scrollIntoView || Eu.scrollIntoView
      }
    }

    function dE(uu, Eu, ju) {
      let su = Eu.selection,
        Uu = oE(Eu.annotations);
      return Eu.userEvent && (Uu = Uu.concat(pE.userEvent.of(Eu.userEvent))), {
        changes: Eu.changes instanceof Ku ? Eu.changes : Ku.of(Eu.changes || [], ju, uu.facet(NE)),
        selection: su && (su instanceof Fu ? su : Fu.single(su.anchor, su.head)),
        effects: oE(Eu.effects),
        annotations: Uu,
        scrollIntoView: !!Eu.scrollIntoView
      }
    }

    function aE(uu, Eu, ju) {
      let su = dE(uu, Eu.length ? Eu[0] : {}, uu.doc.length);
      Eu.length && !1 === Eu[0].filter && (ju = !1);
      for (let Zu = 1; Zu < Eu.length; Zu++) {
        !1 === Eu[Zu].filter && (ju = !1);
        let Uu = !!Eu[Zu].sequential;
        su = JE(su, dE(uu, Eu[Zu], Uu ? su.changes.newLength : uu.doc.length), Uu)
      }
      let Uu = pE.create(uu, su.changes, su.selection, su.effects, su.annotations, su.scrollIntoView);
      return function(uu) {
        let Eu = uu.startState,
          ju = Eu.facet(hE),
          su = uu;
        for (let Uu = ju.length - 1; Uu >= 0; Uu--) {
          let Zu = ju[Uu](uu);
          Zu && Object.keys(Zu).length && (su = JE(su, dE(Eu, Zu, uu.changes.newLength), !0))
        }
        return su == uu ? uu : pE.create(Eu, uu.changes, uu.selection, su.effects, su.annotations, su.scrollIntoView)
      }(ju ? function(uu) {
        let Eu = uu.startState,
          ju = !0;
        for (let Uu of Eu.facet(OE)) {
          let Eu = Uu(uu);
          if (!1 === Eu) {
            ju = !1;
            break
          }
          Array.isArray(Eu) && (ju = !0 === ju ? Eu : wE(ju, Eu))
        }
        if (!0 !== ju) {
          let su, Uu;
          if (!1 === ju) Uu = uu.changes.invertedDesc, su = Ku.empty(Eu.doc.length);
          else {
            let Eu = uu.changes.filter(ju);
            su = Eu.changes, Uu = Eu.filtered.mapDesc(Eu.changes).invertedDesc
          }
          uu = pE.create(Eu, su, uu.selection && uu.selection.map(Uu), GE.mapEffects(uu.effects, Uu), uu.annotations, uu.scrollIntoView)
        }
        let su = Eu.facet(YE);
        for (let Uu = su.length - 1; Uu >= 0; Uu--) {
          let ju = su[Uu](uu);
          uu = ju instanceof pE ? ju : Array.isArray(ju) && 1 == ju.length && ju[0] instanceof pE ? ju[0] : aE(Eu, oE(ju), !1)
        }
        return uu
      }(Uu) : Uu)
    }
    pE.time = gE.define(), pE.userEvent = gE.define(), pE.addToHistory = gE.define(), pE.remote = gE.define();
    const PE = [];

    function oE(uu) {
      return null == uu ? PE : Array.isArray(uu) ? uu : [uu]
    }
    var kE = function(uu) {
      return uu[uu.Word = 0] = "Word", uu[uu.Space = 1] = "Space", uu[uu.Other = 2] = "Other", uu
    }(kE || (kE = {}));
    const mE = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
    let vE;
    try {
      vE = new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u")
    } catch (jj) {}

    function KE(uu) {
      return Eu => {
        if (!/\S/.test(Eu)) return kE.Space;
        if (function(uu) {
            if (vE) return vE.test(uu);
            for (let Eu = 0; Eu < uu.length; Eu++) {
              let ju = uu[Eu];
              if (/\w/.test(ju) || ju > "\x80" && (ju.toUpperCase() != ju.toLowerCase() || mE.test(ju))) return !0
            }
            return !1
          }(Eu)) return kE.Word;
        for (let ju = 0; ju < uu.length; ju++)
          if (Eu.indexOf(uu[ju]) > -1) return kE.Word;
        return kE.Other
      }
    }
    class VE {
      constructor(uu, Eu, ju, su, Uu, Zu) {
        this.config = uu, this.doc = Eu, this.selection = ju, this.values = su, this.status = uu.statusTemplate.slice(), this.computeSlot = Uu, Zu && (Zu._state = this);
        for (let Xu = 0; Xu < this.config.dynamicSlots.length; Xu++) fE(this, Xu << 1);
        this.computeSlot = null
      }
      field(uu) {
        let Eu = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          ju = this.config.address[uu.id];
        if (null != ju) return fE(this, ju), CE(this, ju);
        if (Eu) throw new RangeError("Field is not present in this state")
      }
      update() {
        for (var uu = arguments.length, Eu = new Array(uu), ju = 0; ju < uu; ju++) Eu[ju] = arguments[ju];
        return aE(this, Eu, !0)
      }
      applyTransaction(uu) {
        let Eu, ju = this.config,
          {
            base: su,
            compartments: Uu
          } = ju;
        for (let Xu of uu.effects) Xu.is(XE.reconfigure) ? (ju && (Uu = new Map, ju.compartments.forEach(((uu, Eu) => Uu.set(Eu, uu))), ju = null), Uu.set(Xu.value.compartment, Xu.value.extension)) : Xu.is(GE.reconfigure) ? (ju = null, su = Xu.value) : Xu.is(GE.appendConfig) && (ju = null, su = oE(su).concat(Xu.value));
        if (ju) Eu = uu.startState.values.slice();
        else {
          ju = qE.resolve(su, Uu, this), Eu = new VE(ju, this.doc, this.selection, ju.dynamicSlots.map((() => null)), ((uu, Eu) => Eu.reconfigure(uu, this)), null).values
        }
        let Zu = uu.startState.facet(cE) ? uu.newSelection : uu.newSelection.asSingle();
        new VE(ju, uu.newDoc, Zu, Eu, ((Eu, ju) => ju.update(Eu, uu)), uu)
      }
      replaceSelection(uu) {
        return "string" == typeof uu && (uu = this.toText(uu)), this.changeByRange((Eu => ({
          changes: {
            from: Eu.from,
            to: Eu.to,
            insert: uu
          },
          range: Fu.cursor(Eu.from + uu.length)
        })))
      }
      changeByRange(uu) {
        let Eu = this.selection,
          ju = uu(Eu.HY[0]),
          su = this.changes(ju.changes),
          Uu = [ju.range],
          Zu = oE(ju.effects);
        for (let Xu = 1; Xu < Eu.HY.length; Xu++) {
          let ju = uu(Eu.HY[Xu]),
            lu = this.changes(ju.changes),
            qu = lu.map(su);
          for (let uu = 0; uu < Xu; uu++) Uu[uu] = Uu[uu].map(qu);
          let fu = su.mapDesc(lu, !0);
          Uu.push(ju.range.map(fu)), su = su.compose(qu), Zu = GE.mapEffects(Zu, qu).concat(GE.mapEffects(oE(ju.effects), fu))
        }
        return {
          changes: su,
          selection: Fu.create(Uu, Eu.mainIndex),
          effects: Zu
        }
      }
      changes() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return uu instanceof Ku ? uu : Ku.of(uu, this.doc.length, this.facet(VE.lineSeparator))
      }
      toText(uu) {
        return Yu.of(uu.split(this.facet(VE.lineSeparator) || ku))
      }
      sliceDoc() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.doc.length;
        return this.doc.sliceString(uu, Eu, this.lineBreak)
      }
      facet(uu) {
        let Eu = this.config.address[uu.id];
        return null == Eu ? uu.default : (fE(this, Eu), CE(this, Eu))
      }
      toJSON(uu) {
        let Eu = {
          doc: this.sliceDoc(),
          selection: this.selection.toJSON()
        };
        if (uu)
          for (let ju in uu) {
            let su = uu[ju];
            su instanceof zu && null != this.config.address[su.id] && (Eu[ju] = su.spec.toJSON(this.field(uu[ju]), this))
          }
        return Eu
      }
      static fromJSON(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          ju = arguments.length > 2 ? arguments[2] : void 0;
        if (!uu || "string" != typeof uu.doc) throw new RangeError("Invalid JSON representation for EditorState");
        let su = [];
        if (ju)
          for (let Uu in ju)
            if (Object.prototype.hasOwnProperty.call(uu, Uu)) {
              let Eu = ju[Uu],
                Zu = uu[Uu];
              su.push(Eu.init((uu => Eu.spec.fromJSON(Zu, uu))))
            } return VE.create({
          doc: uu.doc,
          selection: Fu.fromJSON(uu.selection),
          extensions: Eu.extensions ? su.concat([Eu.extensions]) : su
        })
      }
      static create() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          Eu = qE.resolve(uu.extensions || [], new Map),
          ju = uu.doc instanceof Yu ? uu.doc : Yu.of((uu.doc || "").split(Eu.staticFacet(VE.lineSeparator) || ku)),
          su = uu.selection ? uu.selection instanceof Fu ? uu.selection : Fu.single(uu.selection.anchor, uu.selection.head) : Fu.single(0);
        return Bu(su, ju.length), Eu.staticFacet(cE) || (su = su.asSingle()), new VE(Eu, ju, su, Eu.dynamicSlots.map((() => null)), ((uu, Eu) => Eu.create(uu)), null)
      }
      get tabSize() {
        return this.facet(VE.tabSize)
      }
      get lineBreak() {
        return this.facet(VE.lineSeparator) || "\n"
      }
      get readOnly() {
        return this.facet(DE)
      }
      phrase(uu) {
        for (var Eu = arguments.length, ju = new Array(Eu > 1 ? Eu - 1 : 0), su = 1; su < Eu; su++) ju[su - 1] = arguments[su];
        for (let Uu of this.facet(VE.phrases))
          if (Object.prototype.hasOwnProperty.call(Uu, uu)) {
            uu = Uu[uu];
            break
          } return ju.length && (uu = uu.replace(/\$(\$|\d*)/g, ((uu, Eu) => {
          if ("$" == Eu) return "$";
          let su = +(Eu || 1);
          return !su || su > ju.length ? uu : ju[su - 1]
        }))), uu
      }
      languageDataAt(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          su = [];
        for (let Uu of this.facet(bE))
          for (let Zu of Uu(this, Eu, ju)) Object.prototype.hasOwnProperty.call(Zu, uu) && su.push(Zu[uu]);
        return su
      }
      charCategorizer(uu) {
        let Eu = this.languageDataAt("wordChars", uu);
        return KE(Eu.length ? Eu[0] : "")
      }
      wordAt(uu) {
        let {
          text: Eu,
          from: ju,
          length: su
        } = this.doc.lineAt(uu), Uu = this.charCategorizer(uu), Zu = uu - ju, Xu = uu - ju;
        for (; Zu > 0;) {
          let uu = du(Eu, Zu, !1);
          if (Uu(Eu.slice(uu, Zu)) != kE.Word) break;
          Zu = uu
        }
        for (; Xu < su;) {
          let uu = du(Eu, Xu);
          if (Uu(Eu.slice(Xu, uu)) != kE.Word) break;
          Xu = uu
        }
        return Zu == Xu ? null : Fu.range(Zu + ju, Xu + ju)
      }
    }

    function rE(uu, Eu) {
      let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        su = {};
      for (let Uu of uu)
        for (let uu of Object.keys(Uu)) {
          let Eu = Uu[uu],
            Zu = su[uu];
          if (void 0 === Zu) su[uu] = Eu;
          else if (Zu === Eu || void 0 === Eu);
          else {
            if (!Object.hasOwnProperty.call(ju, uu)) throw new Error("Config merge conflict for field " + uu);
            su[uu] = ju[uu](Zu, Eu)
          }
        }
      for (let Uu in Eu) void 0 === su[Uu] && (su[Uu] = Eu[Uu]);
      return su
    }
    VE.allowMultipleSelections = cE, VE.tabSize = tu.define({
      combine: uu => uu.length ? uu[0] : 4
    }), VE.lineSeparator = NE, VE.readOnly = DE, VE.phrases = tu.define({
      compare(uu, Eu) {
        let ju = Object.keys(uu),
          su = Object.keys(Eu);
        return ju.length == su.length && ju.every((ju => uu[ju] == Eu[ju]))
      }
    }), VE.languageData = bE, VE.changeFilter = OE, VE.transactionFilter = YE, VE.transactionExtender = hE, XE.reconfigure = GE.define();
    class QE {
      eq(uu) {
        return this == uu
      }
      range(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uu;
        return WE.create(uu, Eu, this)
      }
    }

    function iE(uu, Eu) {
      return uu == Eu || uu.constructor == Eu.constructor && uu.eq(Eu)
    }
    QE.prototype.startSide = QE.prototype.endSide = 0, QE.prototype.point = !1, QE.prototype.mapMode = mu.TrackDel;
    class WE {
      constructor(uu, Eu, ju) {
        this.from = uu, this.to = Eu, this.value = ju
      }
      static create(uu, Eu, ju) {
        return new WE(uu, Eu, ju)
      }
    }

    function SE(uu, Eu) {
      return uu.from - Eu.from || uu.value.startSide - Eu.value.startSide
    }
    class IE {
      constructor(uu, Eu, ju, su) {
        this.from = uu, this.to = Eu, this.value = ju, this.Gsu = su
      }
      get length() {
        return this.to[this.to.length - 1]
      }
      findIndex(uu, Eu, ju) {
        let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Uu = ju ? this.to : this.from;
        for (let Zu = su, Xu = Uu.length;;) {
          if (Zu == Xu) return Zu;
          let su = Zu + Xu >> 1,
            lu = Uu[su] - uu || (ju ? this.value[su].endSide : this.value[su].startSide) - Eu;
          if (su == Zu) return lu >= 0 ? Zu : Xu;
          lu >= 0 ? Xu = su : Zu = su + 1
        }
      }
      between(uu, Eu, ju, su) {
        for (let Uu = this.findIndex(Eu, -1e9, !0), Zu = this.findIndex(ju, 1e9, !1, Uu); Uu < Zu; Uu++)
          if (!1 === su(this.from[Uu] + uu, this.to[Uu] + uu, this.value[Uu])) return !1
      }
      map(uu, Eu) {
        let ju = [],
          su = [],
          Uu = [],
          Zu = -1,
          Xu = -1;
        for (let lu = 0; lu < this.value.length; lu++) {
          let qu, fu, Cu = this.value[lu],
            bu = this.from[lu] + uu,
            cu = this.to[lu] + uu;
          if (bu == cu) {
            let uu = Eu.mapPos(bu, Cu.startSide, Cu.mapMode);
            if (null == uu) continue;
            if (qu = fu = uu, Cu.startSide != Cu.endSide && (fu = Eu.mapPos(bu, Cu.endSide), fu < qu)) continue
          } else if (qu = Eu.mapPos(bu, Cu.startSide), fu = Eu.mapPos(cu, Cu.endSide), qu > fu || qu == fu && Cu.startSide > 0 && Cu.endSide <= 0) continue;
          (fu - qu || Cu.endSide - Cu.startSide) < 0 || (Zu < 0 && (Zu = qu), Cu.point && (Xu = Math.max(Xu, fu - qu)), ju.push(Cu), su.push(qu - Zu), Uu.push(fu - Zu))
        }
        return {
          mapped: ju.length ? new IE(su, Uu, ju, Xu) : null,
          pos: Zu
        }
      }
    }
    class FE {
      constructor(uu, Eu, ju, su) {
        this.chunkPos = uu, this.chunk = Eu, this.nextLayer = ju, this.Gsu = su
      }
      static create(uu, Eu, ju, su) {
        return new FE(uu, Eu, ju, su)
      }
      get length() {
        let uu = this.chunk.length - 1;
        return uu < 0 ? 0 : Math.max(this.chunkEnd(uu), this.nextLayer.length)
      }
      get size() {
        if (this.EO) return 0;
        let uu = this.nextLayer.size;
        for (let Eu of this.chunk) uu += Eu.value.length;
        return uu
      }
      chunkEnd(uu) {
        return this.chunkPos[uu] + this.chunk[uu].length
      }
      update(uu) {
        let {
          add: Eu = [],
          sort: ju = !1,
          filterFrom: su = 0,
          filterTo: Uu = this.length
        } = uu, Zu = uu.filter;
        if (0 == Eu.length && !Zu) return this;
        if (ju && (Eu = Eu.slice().sort(SE)), this.EO) return Eu.length ? FE.of(Eu) : this;
        let Xu = new tE(this, null, -1).goto(0),
          lu = 0,
          qu = [],
          fu = new BE;
        for (; Xu.value || lu < Eu.length;)
          if (lu < Eu.length && (Xu.from - Eu[lu].from || Xu.startSide - Eu[lu].value.startSide) >= 0) {
            let uu = Eu[lu++];
            fu.addInner(uu.from, uu.to, uu.value) || qu.push(uu)
          } else 1 == Xu.rangeIndex && Xu.chunkIndex < this.chunk.length && (lu == Eu.length || this.chunkEnd(Xu.chunkIndex) < Eu[lu].from) && (!Zu || su > this.chunkEnd(Xu.chunkIndex) || Uu < this.chunkPos[Xu.chunkIndex]) && fu.addChunk(this.chunkPos[Xu.chunkIndex], this.chunk[Xu.chunkIndex]) ? Xu.nextChunk() : ((!Zu || su > Xu.to || Uu < Xu.from || Zu(Xu.from, Xu.to, Xu.value)) && (fu.addInner(Xu.from, Xu.to, Xu.value) || qu.push(WE.create(Xu.from, Xu.to, Xu.value))), Xu.next());
        return fu.finishInner(this.nextLayer.EO && !qu.length ? FE.empty : this.nextLayer.update({
          add: qu,
          filter: Zu,
          filterFrom: su,
          filterTo: Uu
        }))
      }
      map(uu) {
        if (uu.empty || this.EO) return this;
        let Eu = [],
          ju = [],
          su = -1;
        for (let Zu = 0; Zu < this.chunk.length; Zu++) {
          let Uu = this.chunkPos[Zu],
            Xu = this.chunk[Zu],
            lu = uu.touchesRange(Uu, Uu + Xu.length);
          if (!1 === lu) su = Math.max(su, Xu.Gsu), Eu.push(Xu), ju.push(uu.mapPos(Uu));
          else if (!0 === lu) {
            let {
              mapped: Zu,
              pos: lu
            } = Xu.map(Uu, uu);
            Zu && (su = Math.max(su, Zu.Gsu), Eu.push(Zu), ju.push(lu))
          }
        }
        let Uu = this.nextLayer.map(uu);
        return 0 == Eu.length ? Uu : new FE(ju, Eu, Uu || FE.empty, su)
      }
      between(uu, Eu, ju) {
        if (!this.EO) {
          for (let su = 0; su < this.chunk.length; su++) {
            let Uu = this.chunkPos[su],
              Zu = this.chunk[su];
            if (Eu >= Uu && uu <= Uu + Zu.length && !1 === Zu.between(Uu, uu - Uu, Eu - Uu, ju)) return
          }
          this.nextLayer.between(uu, Eu, ju)
        }
      }
      iter() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return xE.from([this]).goto(uu)
      }
      get EO() {
        return this.nextLayer == this
      }
      static iter(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return xE.from(uu).goto(Eu)
      }
      static compare(uu, Eu, ju, su) {
        let Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1,
          Zu = uu.filter((uu => uu.Gsu > 0 || !uu.EO && uu.Gsu >= Uu)),
          Xu = Eu.filter((uu => uu.Gsu > 0 || !uu.EO && uu.Gsu >= Uu)),
          lu = LE(Zu, Xu, ju),
          qu = new HE(Zu, lu, Uu),
          fu = new HE(Xu, lu, Uu);
        ju.iterGaps(((uu, Eu, ju) => AE(qu, uu, fu, Eu, ju, su))), ju.empty && 0 == ju.length && AE(qu, 0, fu, 0, 0, su)
      }
      static eq(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          su = arguments.length > 3 ? arguments[3] : void 0;
        null == su && (su = 999999999);
        let Uu = uu.filter((uu => !uu.EO && Eu.indexOf(uu) < 0)),
          Zu = Eu.filter((Eu => !Eu.EO && uu.indexOf(Eu) < 0));
        if (Uu.length != Zu.length) return !1;
        if (!Uu.length) return !0;
        let Xu = LE(Uu, Zu),
          lu = new HE(Uu, Xu, 0).goto(ju),
          qu = new HE(Zu, Xu, 0).goto(ju);
        for (;;) {
          if (lu.to != qu.to || !nE(lu.active, qu.active) || lu.point && (!qu.point || !iE(lu.point, qu.point))) return !1;
          if (lu.to > su) return !0;
          lu.next(), qu.next()
        }
      }
      static spans(uu, Eu, ju, su) {
        let Uu = new HE(uu, null, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1).goto(Eu),
          Zu = Eu,
          Xu = Uu.openStart;
        for (;;) {
          let uu = Math.min(Uu.to, ju);
          if (Uu.point) {
            let ju = Uu.activeForPoint(Uu.to),
              lu = Uu.pointFrom < Eu ? ju.length + 1 : Uu.point.startSide < 0 ? ju.length : Math.min(ju.length, Xu);
            su.point(Zu, uu, Uu.point, ju, lu, Uu.pointRank), Xu = Math.min(Uu.openEnd(uu), ju.length)
          } else uu > Zu && (su.span(Zu, uu, Uu.active, Xu), Xu = Uu.openEnd(uu));
          if (Uu.to > ju) return Xu + (Uu.point && Uu.to > ju ? 1 : 0);
          Zu = Uu.to, Uu.next()
        }
      }
      static of (uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ju = new BE;
        for (let su of uu instanceof WE ? [uu] : Eu ? function(uu) {
            if (uu.length > 1)
              for (let Eu = uu[0], ju = 1; ju < uu.length; ju++) {
                let su = uu[ju];
                if (SE(Eu, su) > 0) return uu.slice().sort(SE);
                Eu = su
              }
            return uu
          }(uu) : uu) ju.add(su.from, su.to, su.value);
        return ju.finish()
      }
      static join(uu) {
        if (!uu.length) return FE.empty;
        let Eu = uu[uu.length - 1];
        for (let ju = uu.length - 2; ju >= 0; ju--)
          for (let su = uu[ju]; su != FE.empty; su = su.nextLayer) Eu = new FE(su.chunkPos, su.chunk, Eu, Math.max(su.Gsu, Eu.Gsu));
        return Eu
      }
    }
    FE.empty = new FE([], [], null, -1), FE.empty.nextLayer = FE.empty;
    class BE {
      finishChunk(uu) {
        this.chunks.push(new IE(this.from, this.to, this.value, this.Gsu)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.Gsu), this.Gsu = -1, uu && (this.from = [], this.to = [], this.value = [])
      }
      constructor() {
        this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.Gsu = -1, this.setMaxPoint = -1, this.nextLayer = null
      }
      add(uu, Eu, ju) {
        this.addInner(uu, Eu, ju) || (this.nextLayer || (this.nextLayer = new BE)).add(uu, Eu, ju)
      }
      addInner(uu, Eu, ju) {
        let su = uu - this.lastTo || ju.startSide - this.last.endSide;
        if (su <= 0 && (uu - this.lastFrom || ju.startSide - this.last.startSide) < 0) throw new Error("Ranges must be added sorted by `from` position and `startSide`");
        return !(su < 0) && (250 == this.from.length && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = uu), this.from.push(uu - this.chunkStart), this.to.push(Eu - this.chunkStart), this.last = ju, this.lastFrom = uu, this.lastTo = Eu, this.value.push(ju), ju.point && (this.Gsu = Math.max(this.Gsu, Eu - uu)), !0)
      }
      addChunk(uu, Eu) {
        if ((uu - this.lastTo || Eu.value[0].startSide - this.last.endSide) < 0) return !1;
        this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, Eu.Gsu), this.chunks.push(Eu), this.chunkPos.push(uu);
        let ju = Eu.value.length - 1;
        return this.last = Eu.value[ju], this.lastFrom = Eu.from[ju] + uu, this.lastTo = Eu.to[ju] + uu, !0
      }
      finish() {
        return this.finishInner(FE.empty)
      }
      finishInner(uu) {
        if (this.from.length && this.finishChunk(!1), 0 == this.chunks.length) return uu;
        let Eu = FE.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(uu) : uu, this.setMaxPoint);
        return this.from = null, Eu
      }
    }

    function LE(uu, Eu, ju) {
      let su = new Map;
      for (let Zu of uu)
        for (let uu = 0; uu < Zu.chunk.length; uu++) Zu.chunk[uu].Gsu <= 0 && su.set(Zu.chunk[uu], Zu.chunkPos[uu]);
      let Uu = new Set;
      for (let Zu of Eu)
        for (let uu = 0; uu < Zu.chunk.length; uu++) {
          let Eu = su.get(Zu.chunk[uu]);
          null == Eu || (ju ? ju.mapPos(Eu) : Eu) != Zu.chunkPos[uu] || (null === ju || void 0 === ju ? void 0 : ju.touchesRange(Eu, Eu + Zu.chunk[uu].length)) || Uu.add(Zu.chunk[uu])
        }
      return Uu
    }
    class tE {
      constructor(uu, Eu, ju) {
        let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.layer = uu, this.skip = Eu, this.wsu = ju, this.rank = su
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      get endSide() {
        return this.value ? this.value.endSide : 0
      }
      goto(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(uu, Eu, !1), this
      }
      gotoInner(uu, Eu, ju) {
        for (; this.chunkIndex < this.layer.chunk.length;) {
          let Eu = this.layer.chunk[this.chunkIndex];
          if (!(this.skip && this.skip.has(Eu) || this.layer.chunkEnd(this.chunkIndex) < uu || Eu.Gsu < this.wsu)) break;
          this.chunkIndex++, ju = !1
        }
        if (this.chunkIndex < this.layer.chunk.length) {
          let su = this.layer.chunk[this.chunkIndex].findIndex(uu - this.layer.chunkPos[this.chunkIndex], Eu, !0);
          (!ju || this.rangeIndex < su) && this.setRangeIndex(su)
        }
        this.next()
      }
      forward(uu, Eu) {
        (this.to - uu || this.endSide - Eu) < 0 && this.gotoInner(uu, Eu, !0)
      }
      next() {
        for (;;) {
          if (this.chunkIndex == this.layer.chunk.length) {
            this.from = this.to = 1e9, this.value = null;
            break
          } {
            let uu = this.layer.chunkPos[this.chunkIndex],
              Eu = this.layer.chunk[this.chunkIndex],
              ju = uu + Eu.from[this.rangeIndex];
            if (this.from = ju, this.to = uu + Eu.to[this.rangeIndex], this.value = Eu.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.wsu < 0 || this.value.point && this.to - this.from >= this.wsu) break
          }
        }
      }
      setRangeIndex(uu) {
        if (uu == this.layer.chunk[this.chunkIndex].value.length) {
          if (this.chunkIndex++, this.skip)
            for (; this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]);) this.chunkIndex++;
          this.rangeIndex = 0
        } else this.rangeIndex = uu
      }
      nextChunk() {
        this.chunkIndex++, this.rangeIndex = 0, this.next()
      }
      compare(uu) {
        return this.from - uu.from || this.startSide - uu.startSide || this.rank - uu.rank || this.to - uu.to || this.endSide - uu.endSide
      }
    }
    class xE {
      constructor(uu) {
        this.heap = uu
      }
      static from(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          su = [];
        for (let Uu = 0; Uu < uu.length; Uu++)
          for (let Zu = uu[Uu]; !Zu.EO; Zu = Zu.nextLayer) Zu.Gsu >= ju && su.push(new tE(Zu, Eu, ju, Uu));
        return 1 == su.length ? su[0] : new xE(su)
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      goto(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        for (let ju of this.heap) ju.goto(uu, Eu);
        for (let ju = this.heap.length >> 1; ju >= 0; ju--) TE(this.heap, ju);
        return this.next(), this
      }
      forward(uu, Eu) {
        for (let ju of this.heap) ju.forward(uu, Eu);
        for (let ju = this.heap.length >> 1; ju >= 0; ju--) TE(this.heap, ju);
        (this.to - uu || this.value.endSide - Eu) < 0 && this.next()
      }
      next() {
        if (0 == this.heap.length) this.from = this.to = 1e9, this.value = null, this.rank = -1;
        else {
          let uu = this.heap[0];
          this.from = uu.from, this.to = uu.to, this.value = uu.value, this.rank = uu.rank, uu.value && uu.next(), TE(this.heap, 0)
        }
      }
    }

    function TE(uu, Eu) {
      for (let ju = uu[Eu];;) {
        let su = 1 + (Eu << 1);
        if (su >= uu.length) break;
        let Uu = uu[su];
        if (su + 1 < uu.length && Uu.compare(uu[su + 1]) >= 0 && (Uu = uu[su + 1], su++), ju.compare(Uu) < 0) break;
        uu[su] = ju, uu[Eu] = Uu, Eu = su
      }
    }
    class HE {
      constructor(uu, Eu, ju) {
        this.wsu = ju, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = xE.from(uu, Eu, ju)
      }
      goto(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.cursor.goto(uu, Eu), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = uu, this.endSide = Eu, this.openStart = -1, this.next(), this
      }
      forward(uu, Eu) {
        for (; this.minActive > -1 && (this.activeTo[this.minActive] - uu || this.active[this.minActive].endSide - Eu) < 0;) this.removeActive(this.minActive);
        this.cursor.forward(uu, Eu)
      }
      removeActive(uu) {
        yE(this.active, uu), yE(this.activeTo, uu), yE(this.activeRank, uu), this.minActive = RE(this.active, this.activeTo)
      }
      addActive(uu) {
        let Eu = 0,
          {
            value: ju,
            to: su,
            rank: Uu
          } = this.cursor;
        for (; Eu < this.activeRank.length && (Uu - this.activeRank[Eu] || su - this.activeTo[Eu]) > 0;) Eu++;
        zE(this.active, Eu, ju), zE(this.activeTo, Eu, su), zE(this.activeRank, Eu, Uu), uu && zE(uu, Eu, this.cursor.from), this.minActive = RE(this.active, this.activeTo)
      }
      next() {
        let uu = this.to,
          Eu = this.point;
        this.point = null;
        let ju = this.openStart < 0 ? [] : null;
        for (;;) {
          let su = this.minActive;
          if (su > -1 && (this.activeTo[su] - this.cursor.from || this.active[su].endSide - this.cursor.startSide) < 0) {
            if (this.activeTo[su] > uu) {
              this.to = this.activeTo[su], this.endSide = this.active[su].endSide;
              break
            }
            this.removeActive(su), ju && yE(ju, su)
          } else {
            if (!this.cursor.value) {
              this.to = this.endSide = 1e9;
              break
            }
            if (this.cursor.from > uu) {
              this.to = this.cursor.from, this.endSide = this.cursor.startSide;
              break
            } {
              let uu = this.cursor.value;
              if (uu.point) {
                if (!(Eu && this.cursor.to == this.to && this.cursor.from < this.cursor.to)) {
                  this.point = uu, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = uu.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
                  break
                }
                this.cursor.next()
              } else this.addActive(ju), this.cursor.next()
            }
          }
        }
        if (ju) {
          this.openStart = 0;
          for (let Eu = ju.length - 1; Eu >= 0 && ju[Eu] < uu; Eu--) this.openStart++
        }
      }
      activeForPoint(uu) {
        if (!this.active.length) return this.active;
        let Eu = [];
        for (let ju = this.active.length - 1; ju >= 0 && !(this.activeRank[ju] < this.pointRank); ju--)(this.activeTo[ju] > uu || this.activeTo[ju] == uu && this.active[ju].endSide >= this.point.endSide) && Eu.push(this.active[ju]);
        return Eu.reverse()
      }
      openEnd(uu) {
        let Eu = 0;
        for (let ju = this.activeTo.length - 1; ju >= 0 && this.activeTo[ju] > uu; ju--) Eu++;
        return Eu
      }
    }

    function AE(uu, Eu, ju, su, Uu, Zu) {
      uu.goto(Eu), ju.goto(su);
      let Xu = su + Uu,
        lu = su,
        qu = su - Eu,
        fu = !!Zu.boundChange;
      for (let Cu = !1;;) {
        let Eu = uu.to + qu - ju.to,
          su = Eu || uu.endSide - ju.endSide,
          Uu = su < 0 ? uu.to + qu : ju.to,
          bu = Math.min(Uu, Xu);
        if (uu.point || ju.point ? (uu.point && ju.point && iE(uu.point, ju.point) && nE(uu.activeForPoint(uu.to), ju.activeForPoint(ju.to)) || Zu.comparePoint(lu, bu, uu.point, ju.point), Cu = !1) : (Cu && Zu.boundChange(lu), bu > lu && !nE(uu.active, ju.active) && Zu.compareRange(lu, bu, uu.active, ju.active), fu && bu < Xu && (Eu || uu.openEnd(Uu) != ju.openEnd(Uu)) && (Cu = !0)), Uu > Xu) break;
        lu = Uu, su <= 0 && uu.next(), su >= 0 && ju.next()
      }
    }

    function nE(uu, Eu) {
      if (uu.length != Eu.length) return !1;
      for (let ju = 0; ju < uu.length; ju++)
        if (uu[ju] != Eu[ju] && !iE(uu[ju], Eu[ju])) return !1;
      return !0
    }

    function yE(uu, Eu) {
      for (let ju = Eu, su = uu.length - 1; ju < su; ju++) uu[ju] = uu[ju + 1];
      uu.pop()
    }

    function zE(uu, Eu, ju) {
      for (let su = uu.length - 1; su >= Eu; su--) uu[su + 1] = uu[su];
      uu[Eu] = ju
    }

    function RE(uu, Eu) {
      let ju = -1,
        su = 1e9;
      for (let Uu = 0; Uu < Eu.length; Uu++)(Eu[Uu] - su || uu[Uu].endSide - uu[ju].endSide) < 0 && (ju = Uu, su = Eu[Uu]);
      return ju
    }

    function uj(uu, Eu) {
      let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : uu.length,
        su = 0;
      for (let Uu = 0; Uu < ju && Uu < uu.length;) 9 == uu.charCodeAt(Uu) ? (su += Eu - su % Eu, Uu++) : (su++, Uu = du(uu, Uu));
      return su
    }

    function Ej(uu, Eu, ju, su) {
      for (let Uu = 0, Zu = 0;;) {
        if (Zu >= Eu) return Uu;
        if (Uu == uu.length) break;
        Zu += 9 == uu.charCodeAt(Uu) ? ju - Zu % ju : 1, Uu = du(uu, Uu)
      }
      return !0 === su ? -1 : uu.length
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);