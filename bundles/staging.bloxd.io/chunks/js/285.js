export const id = 285;
export const ids = [285];
export const modules = {
  40909: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => jR,
      h: () => nu,
      ChangeSet: () => su,
      l: () => GR,
      n: () => wu,
      o: () => tR,
      q: () => Pu,
      s: () => Uu,
      t: () => KR,
      x: () => wR,
      w: () => ZR,
      A: () => gR,
      B: () => bR,
      E: () => au,
      F: () => pu,
      J: () => CR,
      K: () => Du,
      N: () => Iu,
      P: () => lR,
      R: () => uy,
      S: () => Au,
      V: () => Ry,
      X: () => Mu
    });
    let Eu = [],
      Ku = [];

    function Qu(uu) {
      if (uu < 768) return !1;
      for (let Ru = 0, yu = Eu.length;;) {
        let Qu = Ru + yu >> 1;
        if (uu < Eu[Qu]) yu = Qu;
        else {
          if (!(uu >= Ku[Qu])) return !0;
          Ru = Qu + 1
        }
        if (Ru == yu) return !1
      }
    }

    function mu(uu) {
      return uu >= 127462 && uu <= 127487
    }(() => {
      let uu = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((uu => uu ? parseInt(uu, 36) : 1));
      for (let Ru = 0, yu = 0; Ru < uu.length; Ru++)(Ru % 2 ? Ku : Eu).push(yu += uu[Ru])
    })();
    const Ju = 8205;

    function Nu(uu, Ru) {
      return (!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2] ? Xu : Vu)(uu, Ru, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function Xu(uu, Ru, yu) {
      if (Ru == uu.length) return Ru;
      Ru && Bu(uu.charCodeAt(Ru)) && xu(uu.charCodeAt(Ru - 1)) && Ru--;
      let Eu = ru(uu, Ru);
      for (Ru += Su(Eu); Ru < uu.length;) {
        let Ku = ru(uu, Ru);
        if (Eu == Ju || Ku == Ju || yu && Qu(Ku)) Ru += Su(Ku), Eu = Ku;
        else {
          if (!mu(Ku)) break;
          {
            let yu = 0,
              Eu = Ru - 2;
            for (; Eu >= 0 && mu(ru(uu, Eu));) yu++, Eu -= 2;
            if (yu % 2 == 0) break;
            Ru += 2
          }
        }
      }
      return Ru
    }

    function Vu(uu, Ru, yu) {
      for (; Ru > 0;) {
        let Eu = Xu(uu, Ru - 2, yu);
        if (Eu < Ru) return Eu;
        Ru--
      }
      return 0
    }

    function ru(uu, Ru) {
      let yu = uu.charCodeAt(Ru);
      if (!xu(yu) || Ru + 1 == uu.length) return yu;
      let Eu = uu.charCodeAt(Ru + 1);
      return Bu(Eu) ? Eu - 56320 + (yu - 55296 << 10) + 65536 : yu
    }

    function Bu(uu) {
      return uu >= 56320 && uu < 57344
    }

    function xu(uu) {
      return uu >= 55296 && uu < 56320
    }

    function Su(uu) {
      return uu < 65536 ? 1 : 2
    }
    class pu {
      lineAt(uu) {
        if (uu < 0 || uu > this.length) throw new RangeError(`Invalid position ${uu} in document of length ${this.length}`);
        return this.lineInner(uu, !1, 1, 0)
      }
      line(uu) {
        if (uu < 1 || uu > this.lines) throw new RangeError(`Invalid line number ${uu} in ${this.lines}-line document`);
        return this.lineInner(uu, !0, 1, 0)
      }
      replace(uu, Ru, yu) {
        [uu, Ru] = eu(this, uu, Ru);
        let Eu = [];
        return this.decompose(0, uu, Eu, 2), yu.length && yu.decompose(0, yu.length, Eu, 3), this.decompose(Ru, this.length, Eu, 1), Wu.from(Eu, this.length - (Ru - uu) + yu.length)
      }
      append(uu) {
        return this.replace(this.length, this.length, uu)
      }
      slice(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        [uu, Ru] = eu(this, uu, Ru);
        let yu = [];
        return this.decompose(uu, Ru, yu, 0), Wu.from(yu, Ru - uu)
      }
      eq(uu) {
        if (uu == this) return !0;
        if (uu.length != this.length || uu.lines != this.lines) return !1;
        let Ru = this.scanIdentical(uu, 1),
          yu = this.length - this.scanIdentical(uu, -1),
          Eu = new du(this),
          Ku = new du(uu);
        for (let Qu = Ru, mu = Ru;;) {
          if (Eu.next(Qu), Ku.next(Qu), Qu = 0, Eu.lineBreak != Ku.lineBreak || Eu.done != Ku.done || Eu.value != Ku.value) return !1;
          if (mu += Eu.value.length, Eu.done || mu >= yu) return !0
        }
      }
      iter() {
        return new du(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1)
      }
      iterRange(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        return new bu(this, uu, Ru)
      }
      iterLines(uu, Ru) {
        let yu;
        if (null == uu) yu = this.iter();
        else {
          null == Ru && (Ru = this.lines + 1);
          let Eu = this.line(uu).from;
          yu = this.iterRange(Eu, Math.max(Eu, Ru == this.lines + 1 ? this.length : Ru <= 1 ? 0 : this.line(Ru - 1).to))
        }
        return new Cu(yu)
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
        return 1 != uu.length || uu[0] ? uu.length <= 32 ? new Tu(uu) : Wu.from(Tu.split(uu, [])) : pu.empty
      }
    }
    class Tu extends pu {
      constructor(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(uu) {
          let Ru = -1;
          for (let yu of uu) Ru += yu.length + 1;
          return Ru
        }(uu);
        super(), this.text = uu, this.length = Ru
      }
      get lines() {
        return this.text.length
      }
      get children() {
        return null
      }
      lineInner(uu, Ru, yu, Eu) {
        for (let Ku = 0;; Ku++) {
          let Qu = this.text[Ku],
            mu = Eu + Qu.length;
          if ((Ru ? yu : mu) >= uu) return new ku(Eu, mu, yu, Qu);
          Eu = mu + 1, yu++
        }
      }
      decompose(uu, Ru, yu, Eu) {
        let Ku = uu <= 0 && Ru >= this.length ? this : new Tu(Hu(this.text, uu, Ru), Math.min(Ru, this.length) - Math.max(0, uu));
        if (1 & Eu) {
          let uu = yu.pop(),
            Ru = ju(Ku.text, uu.text.slice(), 0, Ku.length);
          if (Ru.length <= 32) yu.push(new Tu(Ru, uu.length + Ku.length));
          else {
            let uu = Ru.length >> 1;
            yu.push(new Tu(Ru.slice(0, uu)), new Tu(Ru.slice(uu)))
          }
        } else yu.push(Ku)
      }
      replace(uu, Ru, yu) {
        if (!(yu instanceof Tu)) return super.replace(uu, Ru, yu);
        [uu, Ru] = eu(this, uu, Ru);
        let Eu = ju(this.text, ju(yu.text, Hu(this.text, 0, uu)), Ru),
          Ku = this.length + yu.length - (Ru - uu);
        return Eu.length <= 32 ? new Tu(Eu, Ku) : Wu.from(Tu.split(Eu, []), Ku)
      }
      sliceString(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [uu, Ru] = eu(this, uu, Ru);
        let Eu = "";
        for (let Ku = 0, Qu = 0; Ku <= Ru && Qu < this.text.length; Qu++) {
          let mu = this.text[Qu],
            Ju = Ku + mu.length;
          Ku > uu && Qu && (Eu += yu), uu < Ju && Ru > Ku && (Eu += mu.slice(Math.max(0, uu - Ku), Ru - Ku)), Ku = Ju + 1
        }
        return Eu
      }
      flatten(uu) {
        for (let Ru of this.text) uu.push(Ru)
      }
      scanIdentical() {
        return 0
      }
      static split(uu, Ru) {
        let yu = [],
          Eu = -1;
        for (let Ku of uu) yu.push(Ku), Eu += Ku.length + 1, 32 == yu.length && (Ru.push(new Tu(yu, Eu)), yu = [], Eu = -1);
        return Eu > -1 && Ru.push(new Tu(yu, Eu)), Ru
      }
    }
    class Wu extends pu {
      constructor(uu, Ru) {
        super(), this.children = uu, this.length = Ru, this.lines = 0;
        for (let yu of uu) this.lines += yu.lines
      }
      lineInner(uu, Ru, yu, Eu) {
        for (let Ku = 0;; Ku++) {
          let Qu = this.children[Ku],
            mu = Eu + Qu.length,
            Ju = yu + Qu.lines - 1;
          if ((Ru ? Ju : mu) >= uu) return Qu.lineInner(uu, Ru, yu, Eu);
          Eu = mu + 1, yu = Ju + 1
        }
      }
      decompose(uu, Ru, yu, Eu) {
        for (let Ku = 0, Qu = 0; Qu <= Ru && Ku < this.children.length; Ku++) {
          let mu = this.children[Ku],
            Ju = Qu + mu.length;
          if (uu <= Ju && Ru >= Qu) {
            let Ku = Eu & ((Qu <= uu ? 1 : 0) | (Ju >= Ru ? 2 : 0));
            Qu >= uu && Ju <= Ru && !Ku ? yu.push(mu) : mu.decompose(uu - Qu, Ru - Qu, yu, Ku)
          }
          Qu = Ju + 1
        }
      }
      replace(uu, Ru, yu) {
        if ([uu, Ru] = eu(this, uu, Ru), yu.lines < this.lines)
          for (let Eu = 0, Ku = 0; Eu < this.children.length; Eu++) {
            let Qu = this.children[Eu],
              mu = Ku + Qu.length;
            if (uu >= Ku && Ru <= mu) {
              let Ju = Qu.replace(uu - Ku, Ru - Ku, yu),
                Nu = this.lines - Qu.lines + Ju.lines;
              if (Ju.lines < Nu >> 4 && Ju.lines > Nu >> 6) {
                let Ku = this.children.slice();
                return Ku[Eu] = Ju, new Wu(Ku, this.length - (Ru - uu) + yu.length)
              }
              return super.replace(Ku, mu, Ju)
            }
            Ku = mu + 1
          }
        return super.replace(uu, Ru, yu)
      }
      sliceString(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [uu, Ru] = eu(this, uu, Ru);
        let Eu = "";
        for (let Ku = 0, Qu = 0; Ku < this.children.length && Qu <= Ru; Ku++) {
          let mu = this.children[Ku],
            Ju = Qu + mu.length;
          Qu > uu && Ku && (Eu += yu), uu < Ju && Ru > Qu && (Eu += mu.sliceString(uu - Qu, Ru - Qu, yu)), Qu = Ju + 1
        }
        return Eu
      }
      flatten(uu) {
        for (let Ru of this.children) Ru.flatten(uu)
      }
      scanIdentical(uu, Ru) {
        if (!(uu instanceof Wu)) return 0;
        let yu = 0,
          [Eu, Ku, Qu, mu] = Ru > 0 ? [0, 0, this.children.length, uu.children.length] : [this.children.length - 1, uu.children.length - 1, -1, -1];
        for (;; Eu += Ru, Ku += Ru) {
          if (Eu == Qu || Ku == mu) return yu;
          let Ju = this.children[Eu],
            Nu = uu.children[Ku];
          if (Ju != Nu) return yu + Ju.scanIdentical(Nu, Ru);
          yu += Ju.length + 1
        }
      }
      static from(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uu.reduce(((uu, Ru) => uu + Ru.length + 1), -1),
          yu = 0;
        for (let Bu of uu) yu += Bu.lines;
        if (yu < 32) {
          let yu = [];
          for (let Ru of uu) Ru.flatten(yu);
          return new Tu(yu, Ru)
        }
        let Eu = Math.max(32, yu >> 5),
          Ku = Eu << 1,
          Qu = Eu >> 1,
          mu = [],
          Ju = 0,
          Nu = -1,
          Xu = [];

        function Vu(uu) {
          let Ru;
          if (uu.lines > Ku && uu instanceof Wu)
            for (let yu of uu.children) Vu(yu);
          else uu.lines > Qu && (Ju > Qu || !Ju) ? (ru(), mu.push(uu)) : uu instanceof Tu && Ju && (Ru = Xu[Xu.length - 1]) instanceof Tu && uu.lines + Ru.lines <= 32 ? (Ju += uu.lines, Nu += uu.length + 1, Xu[Xu.length - 1] = new Tu(Ru.text.concat(uu.text), Ru.length + 1 + uu.length)) : (Ju + uu.lines > Eu && ru(), Ju += uu.lines, Nu += uu.length + 1, Xu.push(uu))
        }

        function ru() {
          0 != Ju && (mu.push(1 == Xu.length ? Xu[0] : Wu.from(Xu, Nu)), Nu = -1, Ju = Xu.length = 0)
        }
        for (let Bu of uu) Vu(Bu);
        return ru(), 1 == mu.length ? mu[0] : new Wu(mu, Ru)
      }
    }

    function ju(uu, Ru) {
      let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e9;
      for (let Ku = 0, Qu = 0, mu = !0; Qu < uu.length && Ku <= Eu; Qu++) {
        let Ju = uu[Qu],
          Nu = Ku + Ju.length;
        Nu >= yu && (Nu > Eu && (Ju = Ju.slice(0, Eu - Ku)), Ku < yu && (Ju = Ju.slice(yu - Ku)), mu ? (Ru[Ru.length - 1] += Ju, mu = !1) : Ru.push(Ju)), Ku = Nu + 1
      }
      return Ru
    }

    function Hu(uu, Ru, yu) {
      return ju(uu, [""], Ru, yu)
    }
    pu.empty = new Tu([""], 0);
    class du {
      constructor(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.dir = Ru, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [uu], this.offsets = [Ru > 0 ? 1 : (uu instanceof Tu ? uu.text.length : uu.children.length) << 1]
      }
      nextInner(uu, Ru) {
        for (this.done = this.lineBreak = !1;;) {
          let yu = this.nodes.length - 1,
            Eu = this.nodes[yu],
            Ku = this.offsets[yu],
            Qu = Ku >> 1,
            mu = Eu instanceof Tu ? Eu.text.length : Eu.children.length;
          if (Qu == (Ru > 0 ? mu : 0)) {
            if (0 == yu) return this.done = !0, this.value = "", this;
            Ru > 0 && this.offsets[yu - 1]++, this.nodes.pop(), this.offsets.pop()
          } else if ((1 & Ku) == (Ru > 0 ? 0 : 1)) {
            if (this.offsets[yu] += Ru, 0 == uu) return this.lineBreak = !0, this.value = "\n", this;
            uu--
          } else if (Eu instanceof Tu) {
            let Ku = Eu.text[Qu + (Ru < 0 ? -1 : 0)];
            if (this.offsets[yu] += Ru, Ku.length > Math.max(0, uu)) return this.value = 0 == uu ? Ku : Ru > 0 ? Ku.slice(uu) : Ku.slice(0, Ku.length - uu), this;
            uu -= Ku.length
          } else {
            let Ku = Eu.children[Qu + (Ru < 0 ? -1 : 0)];
            uu > Ku.length ? (uu -= Ku.length, this.offsets[yu] += Ru) : (Ru < 0 && this.offsets[yu]--, this.nodes.push(Ku), this.offsets.push(Ru > 0 ? 1 : (Ku instanceof Tu ? Ku.text.length : Ku.children.length) << 1))
          }
        }
      }
      next() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return uu < 0 && (this.nextInner(-uu, -this.dir), uu = this.value.length), this.nextInner(uu, this.dir)
      }
    }
    class bu {
      constructor(uu, Ru, yu) {
        this.value = "", this.done = !1, this.cursor = new du(uu, Ru > yu ? -1 : 1), this.pos = Ru > yu ? uu.length : 0, this.from = Math.min(Ru, yu), this.to = Math.max(Ru, yu)
      }
      nextInner(uu, Ru) {
        if (Ru < 0 ? this.pos <= this.from : this.pos >= this.to) return this.value = "", this.done = !0, this;
        uu += Math.max(0, Ru < 0 ? this.pos - this.to : this.from - this.pos);
        let yu = Ru < 0 ? this.pos - this.from : this.to - this.pos;
        uu > yu && (uu = yu), yu -= uu;
        let {
          value: Eu
        } = this.cursor.next(uu);
        return this.pos += (Eu.length + uu) * Ru, this.value = Eu.length <= yu ? Eu : Ru < 0 ? Eu.slice(Eu.length - yu) : Eu.slice(0, yu), this.done = !this.value, this
      }
      next() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return uu < 0 ? uu = Math.max(uu, this.from - this.pos) : uu > 0 && (uu = Math.min(uu, this.to - this.pos)), this.nextInner(uu, this.cursor.dir)
      }
      get lineBreak() {
        return this.cursor.lineBreak && "" != this.value
      }
    }
    class Cu {
      constructor(uu) {
        this.inner = uu, this.afterBreak = !0, this.value = "", this.done = !1
      }
      next() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          {
            done: Ru,
            lineBreak: yu,
            value: Eu
          } = this.inner.next(uu);
        return Ru && this.afterBreak ? (this.value = "", this.afterBreak = !1) : Ru ? (this.done = !0, this.value = "") : yu ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = Eu, this.afterBreak = !1), this
      }
      get lineBreak() {
        return !1
      }
    }
    "undefined" != typeof Symbol && (pu.prototype[Symbol.iterator] = function() {
      return this.iter()
    }, du.prototype[Symbol.iterator] = bu.prototype[Symbol.iterator] = Cu.prototype[Symbol.iterator] = function() {
      return this
    });
    class ku {
      constructor(uu, Ru, yu, Eu) {
        this.from = uu, this.to = Ru, this.number = yu, this.text = Eu
      }
      get length() {
        return this.to - this.from
      }
    }

    function eu(uu, Ru, yu) {
      return [Ru = Math.max(0, Math.min(uu.length, Ru)), Math.max(Ru, Math.min(uu.length, yu))]
    }

    function Au(uu, Ru) {
      return Nu(uu, Ru, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function Du(uu, Ru) {
      let yu = uu.charCodeAt(Ru);
      if (!((Eu = yu) >= 55296 && Eu < 56320) || Ru + 1 == uu.length) return yu;
      var Eu;
      let Ku = uu.charCodeAt(Ru + 1);
      return function(uu) {
        return uu >= 56320 && uu < 57344
      }(Ku) ? Ku - 56320 + (yu - 55296 << 10) + 65536 : yu
    }

    function Mu(uu) {
      return uu <= 65535 ? String.fromCharCode(uu) : (uu -= 65536, String.fromCharCode(55296 + (uu >> 10), 56320 + (1023 & uu)))
    }

    function Iu(uu) {
      return uu < 65536 ? 1 : 2
    }
    const Gu = /\r\n?|\n/;
    var Uu = function(uu) {
      return uu[uu.Simple = 0] = "Simple", uu[uu.TrackDel = 1] = "TrackDel", uu[uu.TrackBefore = 2] = "TrackBefore", uu[uu.TrackAfter = 3] = "TrackAfter", uu
    }(Uu || (Uu = {}));
    class nu {
      constructor(uu) {
        this.sections = uu
      }
      get length() {
        let uu = 0;
        for (let Ru = 0; Ru < this.sections.length; Ru += 2) uu += this.sections[Ru];
        return uu
      }
      get newLength() {
        let uu = 0;
        for (let Ru = 0; Ru < this.sections.length; Ru += 2) {
          let yu = this.sections[Ru + 1];
          uu += yu < 0 ? this.sections[Ru] : yu
        }
        return uu
      }
      get empty() {
        return 0 == this.sections.length || 2 == this.sections.length && this.sections[1] < 0
      }
      iterGaps(uu) {
        for (let Ru = 0, yu = 0, Eu = 0; Ru < this.sections.length;) {
          let Ku = this.sections[Ru++],
            Qu = this.sections[Ru++];
          Qu < 0 ? (uu(yu, Eu, Ku), Eu += Ku) : Eu += Qu, yu += Ku
        }
      }
      iterChangedRanges(uu) {
        gu(this, uu, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get invertedDesc() {
        let uu = [];
        for (let Ru = 0; Ru < this.sections.length;) {
          let yu = this.sections[Ru++],
            Eu = this.sections[Ru++];
          Eu < 0 ? uu.push(yu, Eu) : uu.push(Eu, yu)
        }
        return new nu(uu)
      }
      composeDesc(uu) {
        return this.empty ? uu : uu.empty ? this : Lu(this, uu)
      }
      mapDesc(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return uu.empty ? this : cu(this, uu, Ru)
      }
      mapPos(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Uu.Simple,
          Eu = 0,
          Ku = 0;
        for (let Qu = 0; Qu < this.sections.length;) {
          let mu = this.sections[Qu++],
            Ju = this.sections[Qu++],
            Nu = Eu + mu;
          if (Ju < 0) {
            if (Nu > uu) return Ku + (uu - Eu);
            Ku += mu
          } else {
            if (yu != Uu.Simple && Nu >= uu && (yu == Uu.TrackDel && Eu < uu && Nu > uu || yu == Uu.TrackBefore && Eu < uu || yu == Uu.TrackAfter && Nu > uu)) return null;
            if (Nu > uu || Nu == uu && Ru < 0 && !mu) return uu == Eu || Ru < 0 ? Ku : Ku + Ju;
            Ku += Ju
          }
          Eu = Nu
        }
        if (uu > Eu) throw new RangeError(`Position ${uu} is out of range for changeset of length ${Eu}`);
        return Ku
      }
      touchesRange(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uu;
        for (let yu = 0, Eu = 0; yu < this.sections.length && Eu <= Ru;) {
          let Ku = Eu + this.sections[yu++];
          if (this.sections[yu++] >= 0 && Eu <= Ru && Ku >= uu) return !(Eu < uu && Ku > Ru) || "cover";
          Eu = Ku
        }
        return !1
      }
      toString() {
        let uu = "";
        for (let Ru = 0; Ru < this.sections.length;) {
          let yu = this.sections[Ru++],
            Eu = this.sections[Ru++];
          uu += (uu ? " " : "") + yu + (Eu >= 0 ? ":" + Eu : "")
        }
        return uu
      }
      toJSON() {
        return this.sections
      }
      static fromJSON(uu) {
        if (!Array.isArray(uu) || uu.length % 2 || uu.some((uu => "number" != typeof uu))) throw new RangeError("Invalid JSON representation of ChangeDesc");
        return new nu(uu)
      }
      static create(uu) {
        return new nu(uu)
      }
    }
    class su extends nu {
      constructor(uu, Ru) {
        super(uu), this.inserted = Ru
      }
      apply(uu) {
        if (this.length != uu.length) throw new RangeError("Applying change set to a document with the wrong length");
        return gu(this, ((Ru, yu, Eu, Ku, Qu) => uu = uu.replace(Eu, Eu + (yu - Ru), Qu)), !1), uu
      }
      mapDesc(uu) {
        return cu(this, uu, arguments.length > 1 && void 0 !== arguments[1] && arguments[1], !0)
      }
      invert(uu) {
        let Ru = this.sections.slice(),
          yu = [];
        for (let Eu = 0, Ku = 0; Eu < Ru.length; Eu += 2) {
          let Qu = Ru[Eu],
            mu = Ru[Eu + 1];
          if (mu >= 0) {
            Ru[Eu] = mu, Ru[Eu + 1] = Qu;
            let Ju = Eu >> 1;
            for (; yu.length < Ju;) yu.push(pu.empty);
            yu.push(Qu ? uu.slice(Ku, Ku + Qu) : pu.empty)
          }
          Ku += Qu
        }
        return new su(Ru, yu)
      }
      compose(uu) {
        return this.empty ? uu : uu.empty ? this : Lu(this, uu, !0)
      }
      map(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return uu.empty ? this : cu(this, uu, Ru, !0)
      }
      iterChanges(uu) {
        gu(this, uu, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get desc() {
        return nu.create(this.sections)
      }
      filter(uu) {
        let Ru = [],
          yu = [],
          Eu = [],
          Ku = new zu(this);
        uu: for (let Qu = 0, mu = 0;;) {
          let Ju = Qu == uu.length ? 1e9 : uu[Qu++];
          for (; mu < Ju || mu == Ju && 0 == Ku.len;) {
            if (Ku.done) break uu;
            let uu = Math.min(Ku.len, Ju - mu);
            tu(Eu, uu, -1);
            let Qu = -1 == Ku.ins ? -1 : 0 == Ku.off ? Ku.ins : 0;
            tu(Ru, uu, Qu), Qu > 0 && lu(yu, Ru, Ku.text), Ku.forward(uu), mu += uu
          }
          let Nu = uu[Qu++];
          for (; mu < Nu;) {
            if (Ku.done) break uu;
            let uu = Math.min(Ku.len, Nu - mu);
            tu(Ru, uu, -1), tu(Eu, uu, -1 == Ku.ins ? -1 : 0 == Ku.off ? Ku.ins : 0), Ku.forward(uu), mu += uu
          }
        }
        return {
          changes: new su(Ru, yu),
          filtered: nu.create(Eu)
        }
      }
      toJSON() {
        let uu = [];
        for (let Ru = 0; Ru < this.sections.length; Ru += 2) {
          let yu = this.sections[Ru],
            Eu = this.sections[Ru + 1];
          Eu < 0 ? uu.push(yu) : 0 == Eu ? uu.push([yu]) : uu.push([yu].concat(this.inserted[Ru >> 1].toJSON()))
        }
        return uu
      }
      static of (uu, Ru, yu) {
        let Eu = [],
          Ku = [],
          Qu = 0,
          mu = null;

        function Ju() {
          if (!(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && !Eu.length) return;
          Qu < Ru && tu(Eu, Ru - Qu, -1);
          let uu = new su(Eu, Ku);
          mu = mu ? mu.compose(uu.map(mu)) : uu, Eu = [], Ku = [], Qu = 0
        }
        return function uu(Nu) {
          if (Array.isArray(Nu))
            for (let Ru of Nu) uu(Ru);
          else if (Nu instanceof su) {
            if (Nu.length != Ru) throw new RangeError(`Mismatched change set length (got ${Nu.length}, expected ${Ru})`);
            Ju(), mu = mu ? mu.compose(Nu.map(mu)) : Nu
          } else {
            let {
              from: uu,
              to: mu = uu,
              insert: Xu
            } = Nu;
            if (uu > mu || uu < 0 || mu > Ru) throw new RangeError(`Invalid change range ${uu} to ${mu} (in doc of length ${Ru})`);
            let Vu = Xu ? "string" == typeof Xu ? pu.of(Xu.split(yu || Gu)) : Xu : pu.empty,
              ru = Vu.length;
            if (uu == mu && 0 == ru) return;
            uu < Qu && Ju(), uu > Qu && tu(Eu, uu - Qu, -1), tu(Eu, mu - uu, ru), lu(Ku, Eu, Vu), Qu = mu
          }
        }(uu), Ju(!mu), mu
      }
      static empty(uu) {
        return new su(uu ? [uu, -1] : [], [])
      }
      static fromJSON(uu) {
        if (!Array.isArray(uu)) throw new RangeError("Invalid JSON representation of ChangeSet");
        let Ru = [],
          yu = [];
        for (let Eu = 0; Eu < uu.length; Eu++) {
          let Ku = uu[Eu];
          if ("number" == typeof Ku) Ru.push(Ku, -1);
          else {
            if (!Array.isArray(Ku) || "number" != typeof Ku[0] || Ku.some(((uu, Ru) => Ru && "string" != typeof uu))) throw new RangeError("Invalid JSON representation of ChangeSet");
            if (1 == Ku.length) Ru.push(Ku[0], 0);
            else {
              for (; yu.length < Eu;) yu.push(pu.empty);
              yu[Eu] = pu.of(Ku.slice(1)), Ru.push(Ku[0], yu[Eu].length)
            }
          }
        }
        return new su(Ru, yu)
      }
      static createSet(uu, Ru) {
        return new su(uu, Ru)
      }
    }

    function tu(uu, Ru, yu) {
      let Eu = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (0 == Ru && yu <= 0) return;
      let Ku = uu.length - 2;
      Ku >= 0 && yu <= 0 && yu == uu[Ku + 1] ? uu[Ku] += Ru : Ku >= 0 && 0 == Ru && 0 == uu[Ku] ? uu[Ku + 1] += yu : Eu ? (uu[Ku] += Ru, uu[Ku + 1] += yu) : uu.push(Ru, yu)
    }

    function lu(uu, Ru, yu) {
      if (0 == yu.length) return;
      let Eu = Ru.length - 2 >> 1;
      if (Eu < uu.length) uu[uu.length - 1] = uu[uu.length - 1].append(yu);
      else {
        for (; uu.length < Eu;) uu.push(pu.empty);
        uu.push(yu)
      }
    }

    function gu(uu, Ru, yu) {
      let Eu = uu.inserted;
      for (let Ku = 0, Qu = 0, mu = 0; mu < uu.sections.length;) {
        let Ju = uu.sections[mu++],
          Nu = uu.sections[mu++];
        if (Nu < 0) Ku += Ju, Qu += Ju;
        else {
          let Xu = Ku,
            Vu = Qu,
            ru = pu.empty;
          for (; Xu += Ju, Vu += Nu, Nu && Eu && (ru = ru.append(Eu[mu - 2 >> 1])), !(yu || mu == uu.sections.length || uu.sections[mu + 1] < 0);) Ju = uu.sections[mu++], Nu = uu.sections[mu++];
          Ru(Ku, Xu, Qu, Vu, ru), Ku = Xu, Qu = Vu
        }
      }
    }

    function cu(uu, Ru, yu) {
      let Eu = [],
        Ku = arguments.length > 3 && void 0 !== arguments[3] && arguments[3] ? [] : null,
        Qu = new zu(uu),
        mu = new zu(Ru),
        Ju = 0;
      for (let Nu = -1;;) {
        if (++Ju > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - likely malformed ChangeSet");
        if (Qu.done && mu.len || mu.done && Qu.len) throw new Error("Mismatched change set lengths");
        if (-1 == Qu.ins && -1 == mu.ins) {
          let uu = Math.min(Qu.len, mu.len);
          tu(Eu, uu, -1), Qu.forward(uu), mu.forward(uu)
        } else if (mu.ins >= 0 && (Qu.ins < 0 || Nu == Qu.i || 0 == Qu.off && (mu.len < Qu.len || mu.len == Qu.len && !yu))) {
          let uu = mu.len;
          for (tu(Eu, mu.ins, -1); uu;) {
            if (++Ju > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-b");
            let Ru = Math.min(Qu.len, uu);
            Qu.ins >= 0 && Nu < Qu.i && Qu.len <= Ru && (tu(Eu, 0, Qu.ins), Ku && lu(Ku, Eu, Qu.text), Nu = Qu.i), Qu.forward(Ru), uu -= Ru
          }
          mu.next()
        } else {
          if (!(Qu.ins >= 0)) {
            if (Qu.done && mu.done) return Ku ? su.createSet(Eu, Ku) : nu.create(Eu);
            throw new Error("Mismatched change set lengths")
          } {
            let uu = 0,
              Ru = Qu.len;
            for (; Ru;) {
              if (++Ju > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-a");
              if (-1 == mu.ins) {
                let yu = Math.min(Ru, mu.len);
                uu += yu, Ru -= yu, mu.forward(yu)
              } else {
                if (!(0 == mu.ins && mu.len < Ru)) break;
                Ru -= mu.len, mu.next()
              }
            }
            tu(Eu, uu, Nu < Qu.i ? Qu.ins : 0), Ku && Nu < Qu.i && lu(Ku, Eu, Qu.text), Nu = Qu.i, Qu.forward(Qu.len - Ru)
          }
        }
      }
    }

    function Lu(uu, Ru) {
      let yu = [],
        Eu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? [] : null,
        Ku = new zu(uu),
        Qu = new zu(Ru),
        mu = 0;
      for (let Ju = !1;;) {
        if (++mu > 2e6) throw new Error("BLOXD CODEMIRROR: composeSets exceeded max iterations - likely malformed ChangeSet");
        if (Ku.done && Qu.done) return Eu ? su.createSet(yu, Eu) : nu.create(yu);
        if (0 == Ku.ins) tu(yu, Ku.len, 0, Ju), Ku.next();
        else if (0 != Qu.len || Qu.done) {
          if (Ku.done || Qu.done) throw new Error("Mismatched change set lengths");
          {
            let uu = Math.min(Ku.len2, Qu.len),
              Ru = yu.length;
            if (-1 == Ku.ins) {
              let Ru = -1 == Qu.ins ? -1 : Qu.off ? 0 : Qu.ins;
              tu(yu, uu, Ru, Ju), Eu && Ru && lu(Eu, yu, Qu.text)
            } else - 1 == Qu.ins ? (tu(yu, Ku.off ? 0 : Ku.len, uu, Ju), Eu && lu(Eu, yu, Ku.textBit(uu))) : (tu(yu, Ku.off ? 0 : Ku.len, Qu.off ? 0 : Qu.ins, Ju), Eu && !Qu.off && lu(Eu, yu, Qu.text));
            Ju = (Ku.ins > uu || Qu.ins >= 0 && Qu.len > uu) && (Ju || yu.length > Ru), Ku.forward2(uu), Qu.forward(uu)
          }
        } else tu(yu, 0, Qu.ins, Ju), Eu && lu(Eu, yu, Qu.text), Qu.next()
      }
    }
    class zu {
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
        } = this.set, Ru = this.i - 2 >> 1;
        return Ru >= uu.length ? pu.empty : uu[Ru]
      }
      textBit(uu) {
        let {
          inserted: Ru
        } = this.set, yu = this.i - 2 >> 1;
        return yu >= Ru.length && !uu ? pu.empty : Ru[yu].slice(this.off, null == uu ? void 0 : this.off + uu)
      }
      forward(uu) {
        uu == this.len ? this.next() : (this.len -= uu, this.off += uu)
      }
      forward2(uu) {
        -1 == this.ins ? this.forward(uu) : uu == this.ins ? this.next() : (this.ins -= uu, this.off += uu)
      }
    }
    class Fu {
      constructor(uu, Ru, yu) {
        this.from = uu, this.to = Ru, this.flags = yu
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
        let Ru, yu, Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return this.empty ? Ru = yu = uu.mapPos(this.from, Eu) : (Ru = uu.mapPos(this.from, 1), yu = uu.mapPos(this.to, -1)), Ru == this.from && yu == this.to ? this : new Fu(Ru, yu, this.flags)
      }
      extend(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uu,
          yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (uu <= this.anchor && Ru >= this.anchor) return wu.range(uu, Ru, void 0, void 0, yu);
        let Eu = Math.abs(uu - this.anchor) > Math.abs(Ru - this.anchor) ? uu : Ru;
        return wu.range(this.anchor, Eu, void 0, void 0, yu)
      }
      eq(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.anchor == uu.anchor && this.head == uu.head && this.goalColumn == uu.goalColumn && (!Ru || !this.empty || this.assoc == uu.assoc)
      }
      toJSON() {
        return {
          anchor: this.anchor,
          head: this.head
        }
      }
      static fromJSON(uu) {
        if (!uu || "number" != typeof uu.anchor || "number" != typeof uu.head) throw new RangeError("Invalid JSON representation for SelectionRange");
        return wu.range(uu.anchor, uu.head)
      }
      static create(uu, Ru, yu) {
        return new Fu(uu, Ru, yu)
      }
    }
    class wu {
      constructor(uu, Ru) {
        this.yT = uu, this.mainIndex = Ru
      }
      map(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return uu.empty ? this : wu.create(this.yT.map((yu => yu.map(uu, Ru))), this.mainIndex)
      }
      eq(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.yT.length != uu.yT.length || this.mainIndex != uu.mainIndex) return !1;
        for (let yu = 0; yu < this.yT.length; yu++)
          if (!this.yT[yu].eq(uu.yT[yu], Ru)) return !1;
        return !0
      }
      get main() {
        return this.yT[this.mainIndex]
      }
      asSingle() {
        return 1 == this.yT.length ? this : new wu([this.main], 0)
      }
      addRange(uu) {
        let Ru = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return wu.create([uu].concat(this.yT), Ru ? 0 : this.mainIndex + 1)
      }
      replaceRange(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.mainIndex,
          yu = this.yT.slice();
        return yu[Ru] = uu, wu.create(yu, this.mainIndex)
      }
      toJSON() {
        return {
          yT: this.yT.map((uu => uu.toJSON())),
          main: this.mainIndex
        }
      }
      static fromJSON(uu) {
        if (!uu || !Array.isArray(uu.yT) || "number" != typeof uu.main || uu.main >= uu.yT.length) throw new RangeError("Invalid JSON representation for EditorSelection");
        return new wu(uu.yT.map((uu => Fu.fromJSON(uu))), uu.main)
      }
      static single(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uu;
        return new wu([wu.range(uu, Ru)], 0)
      }
      static create(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (0 == uu.length) throw new RangeError("A selection needs at least one range");
        for (let yu = 0, Eu = 0; Eu < uu.length; Eu++) {
          let Ku = uu[Eu];
          if (Ku.empty ? Ku.from <= yu : Ku.from < yu) return wu.normalized(uu.slice(), Ru);
          yu = Ku.to
        }
        return new wu(uu, Ru)
      }
      static cursor(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          yu = arguments.length > 2 ? arguments[2] : void 0,
          Eu = arguments.length > 3 ? arguments[3] : void 0;
        return Fu.create(uu, uu, (0 == Ru ? 0 : Ru < 0 ? 8 : 16) | (null == yu ? 7 : Math.min(6, yu)) | (null !== Eu && void 0 !== Eu ? Eu : 16777215) << 6)
      }
      static range(uu, Ru, yu, Eu, Ku) {
        let Qu = (null !== yu && void 0 !== yu ? yu : 16777215) << 6 | (null == Eu ? 7 : Math.min(6, Eu));
        return Ku || uu == Ru || (Ku = Ru < uu ? 1 : -1), Ru < uu ? Fu.create(Ru, uu, 48 | Qu) : Fu.create(uu, Ru, (Ku ? Ku < 0 ? 8 : 16 : 0) | Qu)
      }
      static normalized(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          yu = uu[Ru];
        uu.sort(((uu, Ru) => uu.from - Ru.from)), Ru = uu.indexOf(yu);
        for (let Eu = 1; Eu < uu.length; Eu++) {
          let yu = uu[Eu],
            Ku = uu[Eu - 1];
          if (yu.empty ? yu.from <= Ku.to : yu.from < Ku.to) {
            let Qu = Ku.from,
              mu = Math.max(yu.to, Ku.to);
            Eu <= Ru && Ru--, uu.splice(--Eu, 2, yu.anchor > yu.head ? wu.range(mu, Qu) : wu.range(Qu, mu))
          }
        }
        return new wu(uu, Ru)
      }
    }

    function Zu(uu, Ru) {
      for (let yu of uu.yT)
        if (yu.to > Ru) throw new RangeError("Selection points outside of document")
    }
    let hu = 0;
    class Pu {
      constructor(uu, Ru, yu, Eu, Ku) {
        this.combine = uu, this.compareInput = Ru, this.compare = yu, this.isStatic = Eu, this.id = hu++, this.default = uu([]), this.extensions = "function" == typeof Ku ? Ku(this) : Ku
      }
      get reader() {
        return this
      }
      static define() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return new Pu(uu.combine || (uu => uu), uu.compareInput || ((uu, Ru) => uu === Ru), uu.compare || (uu.combine ? (uu, Ru) => uu === Ru : iu), !!uu.static, uu.enables)
      }
      of(uu) {
        return new Yu([], this, 0, uu)
      }
      compute(uu, Ru) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new Yu(uu, this, 1, Ru)
      }
      computeN(uu, Ru) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new Yu(uu, this, 2, Ru)
      }
      from(uu, Ru) {
        return Ru || (Ru = uu => uu), this.compute([uu], (yu => Ru(yu.field(uu))))
      }
    }

    function iu(uu, Ru) {
      return uu == Ru || uu.length == Ru.length && uu.every(((uu, yu) => uu === Ru[yu]))
    }
    class Yu {
      constructor(uu, Ru, yu, Eu) {
        this.dependencies = uu, this.facet = Ru, this.type = yu, this.value = Eu, this.id = hu++
      }
      dynamicSlot(uu) {
        var Ru;
        let yu = this.value,
          Eu = this.facet.compareInput,
          Ku = this.id,
          Qu = uu[Ku] >> 1,
          mu = 2 == this.type,
          Ju = !1,
          Nu = !1,
          Xu = [];
        for (let Vu of this.dependencies) "doc" == Vu ? Ju = !0 : "selection" == Vu ? Nu = !0 : 0 == (1 & (null !== (Ru = uu[Vu.id]) && void 0 !== Ru ? Ru : 1)) && Xu.push(uu[Vu.id]);
        return {
          create: uu => (uu.values[Qu] = yu(uu), 1),
          update(uu, Ru) {
            if (Ju && Ru.docChanged || Nu && (Ru.docChanged || Ru.selection) || qu(uu, Xu)) {
              let Ru = yu(uu);
              if (mu ? !ou(Ru, uu.values[Qu], Eu) : !Eu(Ru, uu.values[Qu])) return uu.values[Qu] = Ru, 1
            }
            return 0
          },
          reconfigure: (uu, Ru) => {
            let Ju, Nu = Ru.config.address[Ku];
            if (null != Nu) {
              let Ku = VR(Ru, Nu);
              if (this.dependencies.every((yu => yu instanceof Pu ? Ru.facet(yu) === uu.facet(yu) : !(yu instanceof au) || Ru.field(yu, !1) == uu.field(yu, !1))) || (mu ? ou(Ju = yu(uu), Ku, Eu) : Eu(Ju = yu(uu), Ku))) return uu.values[Qu] = Ku, 0
            } else Ju = yu(uu);
            return uu.values[Qu] = Ju, 1
          }
        }
      }
    }

    function ou(uu, Ru, yu) {
      if (uu.length != Ru.length) return !1;
      for (let Eu = 0; Eu < uu.length; Eu++)
        if (!yu(uu[Eu], Ru[Eu])) return !1;
      return !0
    }

    function qu(uu, Ru) {
      let yu = !1;
      for (let Eu of Ru) 1 & XR(uu, Eu) && (yu = !0);
      return yu
    }

    function Ou(uu, Ru, yu) {
      let Eu = yu.map((Ru => uu[Ru.id])),
        Ku = yu.map((uu => uu.type)),
        Qu = Eu.filter((uu => !(1 & uu))),
        mu = uu[Ru.id] >> 1;

      function Ju(uu) {
        let yu = [];
        for (let Ru = 0; Ru < Eu.length; Ru++) {
          let Qu = VR(uu, Eu[Ru]);
          if (2 == Ku[Ru])
            for (let uu of Qu) yu.push(uu);
          else yu.push(Qu)
        }
        return Ru.combine(yu)
      }
      return {
        create(uu) {
          for (let Ru of Eu) XR(uu, Ru);
          return uu.values[mu] = Ju(uu), 1
        },
        update(uu, yu) {
          if (!qu(uu, Qu)) return 0;
          let Eu = Ju(uu);
          return Ru.compare(Eu, uu.values[mu]) ? 0 : (uu.values[mu] = Eu, 1)
        },
        reconfigure(uu, Ku) {
          let Qu = qu(uu, Eu),
            Nu = Ku.config.facets[Ru.id],
            Xu = Ku.facet(Ru);
          if (Nu && !Qu && iu(yu, Nu)) return uu.values[mu] = Xu, 0;
          let Vu = Ju(uu);
          return Ru.compare(Vu, Xu) ? (uu.values[mu] = Xu, 0) : (uu.values[mu] = Vu, 1)
        }
      }
    }
    const vu = Pu.define({
      static: !0
    });
    class au {
      constructor(uu, Ru, yu, Eu, Ku) {
        this.id = uu, this.createF = Ru, this.updateF = yu, this.compareF = Eu, this.spec = Ku, this.provides = void 0
      }
      static define(uu) {
        let Ru = new au(hu++, uu.create, uu.update, uu.compare || ((uu, Ru) => uu === Ru), uu);
        return uu.provide && (Ru.provides = uu.provide(Ru)), Ru
      }
      create(uu) {
        let Ru = uu.facet(vu).find((uu => uu.field == this));
        return ((null === Ru || void 0 === Ru ? void 0 : Ru.create) || this.createF)(uu)
      }
      slot(uu) {
        let Ru = uu[this.id] >> 1;
        return {
          create: uu => (uu.values[Ru] = this.create(uu), 1),
          update: (uu, yu) => {
            let Eu = uu.values[Ru],
              Ku = this.updateF(Eu, yu);
            return this.compareF(Eu, Ku) ? 0 : (uu.values[Ru] = Ku, 1)
          },
          reconfigure: (uu, yu) => {
            let Eu, Ku = uu.facet(vu),
              Qu = yu.facet(vu);
            return (Eu = Ku.find((uu => uu.field == this))) && Eu != Qu.find((uu => uu.field == this)) ? (uu.values[Ru] = Eu.create(uu), 1) : null != yu.config.address[this.id] ? (uu.values[Ru] = yu.field(this), 0) : (uu.values[Ru] = this.create(uu), 1)
          }
        }
      }
      init(uu) {
        return [this, vu.of({
          field: this,
          create: uu
        })]
      }
      get extension() {
        return this
      }
    }
    const fu = 4,
      uR = 3,
      RR = 2,
      yR = 1;

    function ER(uu) {
      return Ru => new QR(Ru, uu)
    }
    const KR = {
      highest: ER(0),
      high: ER(yR),
      default: ER(RR),
      low: ER(uR),
      lowest: ER(fu)
    };
    class QR {
      constructor(uu, Ru) {
        this.inner = uu, this.prec = Ru
      }
    }
    class mR {
      of(uu) {
        return new JR(this, uu)
      }
      reconfigure(uu) {
        return mR.reconfigure.of({
          compartment: this,
          extension: uu
        })
      }
      get(uu) {
        return uu.config.compartments.get(this)
      }
    }
    class JR {
      constructor(uu, Ru) {
        this.compartment = uu, this.inner = Ru
      }
    }
    class NR {
      constructor(uu, Ru, yu, Eu, Ku, Qu) {
        for (this.base = uu, this.compartments = Ru, this.dynamicSlots = yu, this.address = Eu, this.staticValues = Ku, this.facets = Qu, this.statusTemplate = []; this.statusTemplate.length < yu.length;) this.statusTemplate.push(0)
      }
      staticFacet(uu) {
        let Ru = this.address[uu.id];
        return null == Ru ? uu.default : this.staticValues[Ru >> 1]
      }
      static resolve(uu, Ru, yu) {
        let Eu = [],
          Ku = Object.create(null),
          Qu = new Map;
        for (let ru of function(uu, Ru, yu) {
            let Eu = [
                [],
                [],
                [],
                [],
                []
              ],
              Ku = new Map;

            function Qu(uu, mu) {
              let Ju = Ku.get(uu);
              if (null != Ju) {
                if (Ju <= mu) return;
                let Ru = Eu[Ju].indexOf(uu);
                Ru > -1 && Eu[Ju].splice(Ru, 1), uu instanceof JR && yu.delete(uu.compartment)
              }
              if (Ku.set(uu, mu), Array.isArray(uu))
                for (let Ru of uu) Qu(Ru, mu);
              else if (uu instanceof JR) {
                if (yu.has(uu.compartment)) throw new RangeError("Duplicate use of compartment in extensions");
                let Eu = Ru.get(uu.compartment) || uu.inner;
                yu.set(uu.compartment, Eu), Qu(Eu, mu)
              } else if (uu instanceof QR) Qu(uu.inner, uu.prec);
              else if (uu instanceof au) Eu[mu].push(uu), uu.provides && Qu(uu.provides, mu);
              else if (uu instanceof Yu) Eu[mu].push(uu), uu.facet.extensions && Qu(uu.facet.extensions, RR);
              else {
                let Ru = uu.extension;
                if (!Ru) throw new Error(`Unrecognized extension value in extension set (${uu}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
                Qu(Ru, mu)
              }
            }
            return Qu(uu, RR), Eu.reduce(((uu, Ru) => uu.concat(Ru)))
          }(uu, Ru, Qu)) ru instanceof au ? Eu.push(ru) : (Ku[ru.facet.id] || (Ku[ru.facet.id] = [])).push(ru);
        let mu = Object.create(null),
          Ju = [],
          Nu = [];
        for (let ru of Eu) mu[ru.id] = Nu.length << 1, Nu.push((uu => ru.slot(uu)));
        let Xu = null === yu || void 0 === yu ? void 0 : yu.config.facets;
        for (let ru in Ku) {
          let uu = Ku[ru],
            Ru = uu[0].facet,
            Eu = Xu && Xu[ru] || [];
          if (uu.every((uu => 0 == uu.type)))
            if (mu[Ru.id] = Ju.length << 1 | 1, iu(Eu, uu)) Ju.push(yu.facet(Ru));
            else {
              let Eu = Ru.combine(uu.map((uu => uu.value)));
              Ju.push(yu && Ru.compare(Eu, yu.facet(Ru)) ? yu.facet(Ru) : Eu)
            }
          else {
            for (let Ru of uu) 0 == Ru.type ? (mu[Ru.id] = Ju.length << 1 | 1, Ju.push(Ru.value)) : (mu[Ru.id] = Nu.length << 1, Nu.push((uu => Ru.dynamicSlot(uu))));
            mu[Ru.id] = Nu.length << 1, Nu.push((yu => Ou(yu, Ru, uu)))
          }
        }
        let Vu = Nu.map((uu => uu(mu)));
        return new NR(uu, Qu, Vu, mu, Ju, Ku)
      }
    }

    function XR(uu, Ru) {
      if (1 & Ru) return 2;
      let yu = Ru >> 1,
        Eu = uu.status[yu];
      if (4 == Eu) throw new Error("Cyclic dependency between fields and/or facets");
      if (2 & Eu) return Eu;
      uu.status[yu] = 4;
      let Ku = uu.computeSlot(uu, uu.config.dynamicSlots[yu]);
      return uu.status[yu] = 2 | Ku
    }

    function VR(uu, Ru) {
      return 1 & Ru ? uu.config.staticValues[Ru >> 1] : uu.values[Ru >> 1]
    }
    const rR = Pu.define(),
      BR = Pu.define({
        combine: uu => uu.some((uu => uu)),
        static: !0
      }),
      xR = Pu.define({
        combine: uu => uu.length ? uu[0] : void 0,
        static: !0
      }),
      SR = Pu.define(),
      pR = Pu.define(),
      TR = Pu.define(),
      WR = Pu.define({
        combine: uu => !!uu.length && uu[0]
      });
    class jR {
      constructor(uu, Ru) {
        this.type = uu, this.value = Ru
      }
      static define() {
        return new HR
      }
    }
    class HR {
      of(uu) {
        return new jR(this, uu)
      }
    }
    class dR {
      constructor(uu) {
        this.map = uu
      }
      of(uu) {
        return new bR(this, uu)
      }
    }
    class bR {
      constructor(uu, Ru) {
        this.type = uu, this.value = Ru
      }
      map(uu) {
        let Ru = this.type.map(this.value, uu);
        return void 0 === Ru ? void 0 : Ru == this.value ? this : new bR(this.type, Ru)
      }
      is(uu) {
        return this.type == uu
      }
      static define() {
        return new dR((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).map || (uu => uu))
      }
      static mapEffects(uu, Ru) {
        if (!uu.length) return uu;
        let yu = [];
        for (let Eu of uu) {
          let uu = Eu.map(Ru);
          uu && yu.push(uu)
        }
        return yu
      }
    }
    bR.reconfigure = bR.define(), bR.appendConfig = bR.define();
    class CR {
      constructor(uu, Ru, yu, Eu, Ku, Qu) {
        this.startState = uu, this.changes = Ru, this.selection = yu, this.effects = Eu, this.annotations = Ku, this.scrollIntoView = Qu, this._doc = null, this._state = null, yu && Zu(yu, Ru.newLength), Ku.some((uu => uu.type == CR.time)) || (this.annotations = Ku.concat(CR.time.of(Date.now())))
      }
      static create(uu, Ru, yu, Eu, Ku, Qu) {
        return new CR(uu, Ru, yu, Eu, Ku, Qu)
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
        for (let Ru of this.annotations)
          if (Ru.type == uu) return Ru.value
      }
      get docChanged() {
        return !this.changes.empty
      }
      get reconfigured() {
        return this.startState.config != this.state.config
      }
      isUserEvent(uu) {
        let Ru = this.annotation(CR.userEvent);
        return !(!Ru || !(Ru == uu || Ru.length > uu.length && Ru.slice(0, uu.length) == uu && "." == Ru[uu.length]))
      }
    }

    function kR(uu, Ru) {
      let yu = [];
      for (let Eu = 0, Ku = 0;;) {
        let Qu, mu;
        if (Eu < uu.length && (Ku == Ru.length || Ru[Ku] >= uu[Eu])) Qu = uu[Eu++], mu = uu[Eu++];
        else {
          if (!(Ku < Ru.length)) return yu;
          Qu = Ru[Ku++], mu = Ru[Ku++]
        }!yu.length || yu[yu.length - 1] < Qu ? yu.push(Qu, mu) : yu[yu.length - 1] < mu && (yu[yu.length - 1] = mu)
      }
    }

    function eR(uu, Ru, yu) {
      var Eu;
      let Ku, Qu, mu;
      return yu ? (Ku = Ru.changes, Qu = su.empty(Ru.changes.length), mu = uu.changes.compose(Ru.changes)) : (Ku = Ru.changes.map(uu.changes), Qu = uu.changes.mapDesc(Ru.changes, !0), mu = uu.changes.compose(Ku)), {
        changes: mu,
        selection: Ru.selection ? Ru.selection.map(Qu) : null === (Eu = uu.selection) || void 0 === Eu ? void 0 : Eu.map(Ku),
        effects: bR.mapEffects(uu.effects, Ku).concat(bR.mapEffects(Ru.effects, Qu)),
        annotations: uu.annotations.length ? uu.annotations.concat(Ru.annotations) : Ru.annotations,
        scrollIntoView: uu.scrollIntoView || Ru.scrollIntoView
      }
    }

    function AR(uu, Ru, yu) {
      let Eu = Ru.selection,
        Ku = IR(Ru.annotations);
      return Ru.userEvent && (Ku = Ku.concat(CR.userEvent.of(Ru.userEvent))), {
        changes: Ru.changes instanceof su ? Ru.changes : su.of(Ru.changes || [], yu, uu.facet(xR)),
        selection: Eu && (Eu instanceof wu ? Eu : wu.single(Eu.anchor, Eu.head)),
        effects: IR(Ru.effects),
        annotations: Ku,
        scrollIntoView: !!Ru.scrollIntoView
      }
    }

    function DR(uu, Ru, yu) {
      let Eu = AR(uu, Ru.length ? Ru[0] : {}, uu.doc.length);
      Ru.length && !1 === Ru[0].filter && (yu = !1);
      for (let Qu = 1; Qu < Ru.length; Qu++) {
        !1 === Ru[Qu].filter && (yu = !1);
        let Ku = !!Ru[Qu].sequential;
        Eu = eR(Eu, AR(uu, Ru[Qu], Ku ? Eu.changes.newLength : uu.doc.length), Ku)
      }
      let Ku = CR.create(uu, Eu.changes, Eu.selection, Eu.effects, Eu.annotations, Eu.scrollIntoView);
      return function(uu) {
        let Ru = uu.startState,
          yu = Ru.facet(TR),
          Eu = uu;
        for (let Ku = yu.length - 1; Ku >= 0; Ku--) {
          let Qu = yu[Ku](uu);
          Qu && Object.keys(Qu).length && (Eu = eR(Eu, AR(Ru, Qu, uu.changes.newLength), !0))
        }
        return Eu == uu ? uu : CR.create(Ru, uu.changes, uu.selection, Eu.effects, Eu.annotations, Eu.scrollIntoView)
      }(yu ? function(uu) {
        let Ru = uu.startState,
          yu = !0;
        for (let Ku of Ru.facet(SR)) {
          let Ru = Ku(uu);
          if (!1 === Ru) {
            yu = !1;
            break
          }
          Array.isArray(Ru) && (yu = !0 === yu ? Ru : kR(yu, Ru))
        }
        if (!0 !== yu) {
          let Eu, Ku;
          if (!1 === yu) Ku = uu.changes.invertedDesc, Eu = su.empty(Ru.doc.length);
          else {
            let Ru = uu.changes.filter(yu);
            Eu = Ru.changes, Ku = Ru.filtered.mapDesc(Ru.changes).invertedDesc
          }
          uu = CR.create(Ru, Eu, uu.selection && uu.selection.map(Ku), bR.mapEffects(uu.effects, Ku), uu.annotations, uu.scrollIntoView)
        }
        let Eu = Ru.facet(pR);
        for (let Ku = Eu.length - 1; Ku >= 0; Ku--) {
          let yu = Eu[Ku](uu);
          uu = yu instanceof CR ? yu : Array.isArray(yu) && 1 == yu.length && yu[0] instanceof CR ? yu[0] : DR(Ru, IR(yu), !1)
        }
        return uu
      }(Ku) : Ku)
    }
    CR.time = jR.define(), CR.userEvent = jR.define(), CR.addToHistory = jR.define(), CR.remote = jR.define();
    const MR = [];

    function IR(uu) {
      return null == uu ? MR : Array.isArray(uu) ? uu : [uu]
    }
    var GR = function(uu) {
      return uu[uu.Word = 0] = "Word", uu[uu.Space = 1] = "Space", uu[uu.Other = 2] = "Other", uu
    }(GR || (GR = {}));
    const UR = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
    let nR;
    try {
      nR = new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u")
    } catch (yy) {}

    function sR(uu) {
      return Ru => {
        if (!/\S/.test(Ru)) return GR.Space;
        if (function(uu) {
            if (nR) return nR.test(uu);
            for (let Ru = 0; Ru < uu.length; Ru++) {
              let yu = uu[Ru];
              if (/\w/.test(yu) || yu > "\x80" && (yu.toUpperCase() != yu.toLowerCase() || UR.test(yu))) return !0
            }
            return !1
          }(Ru)) return GR.Word;
        for (let yu = 0; yu < uu.length; yu++)
          if (Ru.indexOf(uu[yu]) > -1) return GR.Word;
        return GR.Other
      }
    }
    class tR {
      constructor(uu, Ru, yu, Eu, Ku, Qu) {
        this.config = uu, this.doc = Ru, this.selection = yu, this.values = Eu, this.status = uu.statusTemplate.slice(), this.computeSlot = Ku, Qu && (Qu._state = this);
        for (let mu = 0; mu < this.config.dynamicSlots.length; mu++) XR(this, mu << 1);
        this.computeSlot = null
      }
      field(uu) {
        let Ru = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          yu = this.config.address[uu.id];
        if (null != yu) return XR(this, yu), VR(this, yu);
        if (Ru) throw new RangeError("Field is not present in this state")
      }
      update() {
        for (var uu = arguments.length, Ru = new Array(uu), yu = 0; yu < uu; yu++) Ru[yu] = arguments[yu];
        return DR(this, Ru, !0)
      }
      applyTransaction(uu) {
        let Ru, yu = this.config,
          {
            base: Eu,
            compartments: Ku
          } = yu;
        for (let mu of uu.effects) mu.is(mR.reconfigure) ? (yu && (Ku = new Map, yu.compartments.forEach(((uu, Ru) => Ku.set(Ru, uu))), yu = null), Ku.set(mu.value.compartment, mu.value.extension)) : mu.is(bR.reconfigure) ? (yu = null, Eu = mu.value) : mu.is(bR.appendConfig) && (yu = null, Eu = IR(Eu).concat(mu.value));
        if (yu) Ru = uu.startState.values.slice();
        else {
          yu = NR.resolve(Eu, Ku, this), Ru = new tR(yu, this.doc, this.selection, yu.dynamicSlots.map((() => null)), ((uu, Ru) => Ru.reconfigure(uu, this)), null).values
        }
        let Qu = uu.startState.facet(BR) ? uu.newSelection : uu.newSelection.asSingle();
        new tR(yu, uu.newDoc, Qu, Ru, ((Ru, yu) => yu.update(Ru, uu)), uu)
      }
      replaceSelection(uu) {
        return "string" == typeof uu && (uu = this.toText(uu)), this.changeByRange((Ru => ({
          changes: {
            from: Ru.from,
            to: Ru.to,
            insert: uu
          },
          range: wu.cursor(Ru.from + uu.length)
        })))
      }
      changeByRange(uu) {
        let Ru = this.selection,
          yu = uu(Ru.yT[0]),
          Eu = this.changes(yu.changes),
          Ku = [yu.range],
          Qu = IR(yu.effects);
        for (let mu = 1; mu < Ru.yT.length; mu++) {
          let yu = uu(Ru.yT[mu]),
            Ju = this.changes(yu.changes),
            Nu = Ju.map(Eu);
          for (let uu = 0; uu < mu; uu++) Ku[uu] = Ku[uu].map(Nu);
          let Xu = Eu.mapDesc(Ju, !0);
          Ku.push(yu.range.map(Xu)), Eu = Eu.compose(Nu), Qu = bR.mapEffects(Qu, Nu).concat(bR.mapEffects(IR(yu.effects), Xu))
        }
        return {
          changes: Eu,
          selection: wu.create(Ku, Ru.mainIndex),
          effects: Qu
        }
      }
      changes() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return uu instanceof su ? uu : su.of(uu, this.doc.length, this.facet(tR.lineSeparator))
      }
      toText(uu) {
        return pu.of(uu.split(this.facet(tR.lineSeparator) || Gu))
      }
      sliceDoc() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.doc.length;
        return this.doc.sliceString(uu, Ru, this.lineBreak)
      }
      facet(uu) {
        let Ru = this.config.address[uu.id];
        return null == Ru ? uu.default : (XR(this, Ru), VR(this, Ru))
      }
      toJSON(uu) {
        let Ru = {
          doc: this.sliceDoc(),
          selection: this.selection.toJSON()
        };
        if (uu)
          for (let yu in uu) {
            let Eu = uu[yu];
            Eu instanceof au && null != this.config.address[Eu.id] && (Ru[yu] = Eu.spec.toJSON(this.field(uu[yu]), this))
          }
        return Ru
      }
      static fromJSON(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          yu = arguments.length > 2 ? arguments[2] : void 0;
        if (!uu || "string" != typeof uu.doc) throw new RangeError("Invalid JSON representation for EditorState");
        let Eu = [];
        if (yu)
          for (let Ku in yu)
            if (Object.prototype.hasOwnProperty.call(uu, Ku)) {
              let Ru = yu[Ku],
                Qu = uu[Ku];
              Eu.push(Ru.init((uu => Ru.spec.fromJSON(Qu, uu))))
            } return tR.create({
          doc: uu.doc,
          selection: wu.fromJSON(uu.selection),
          extensions: Ru.extensions ? Eu.concat([Ru.extensions]) : Eu
        })
      }
      static create() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          Ru = NR.resolve(uu.extensions || [], new Map),
          yu = uu.doc instanceof pu ? uu.doc : pu.of((uu.doc || "").split(Ru.staticFacet(tR.lineSeparator) || Gu)),
          Eu = uu.selection ? uu.selection instanceof wu ? uu.selection : wu.single(uu.selection.anchor, uu.selection.head) : wu.single(0);
        return Zu(Eu, yu.length), Ru.staticFacet(BR) || (Eu = Eu.asSingle()), new tR(Ru, yu, Eu, Ru.dynamicSlots.map((() => null)), ((uu, Ru) => Ru.create(uu)), null)
      }
      get tabSize() {
        return this.facet(tR.tabSize)
      }
      get lineBreak() {
        return this.facet(tR.lineSeparator) || "\n"
      }
      get readOnly() {
        return this.facet(WR)
      }
      phrase(uu) {
        for (var Ru = arguments.length, yu = new Array(Ru > 1 ? Ru - 1 : 0), Eu = 1; Eu < Ru; Eu++) yu[Eu - 1] = arguments[Eu];
        for (let Ku of this.facet(tR.phrases))
          if (Object.prototype.hasOwnProperty.call(Ku, uu)) {
            uu = Ku[uu];
            break
          } return yu.length && (uu = uu.replace(/\$(\$|\d*)/g, ((uu, Ru) => {
          if ("$" == Ru) return "$";
          let Eu = +(Ru || 1);
          return !Eu || Eu > yu.length ? uu : yu[Eu - 1]
        }))), uu
      }
      languageDataAt(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          Eu = [];
        for (let Ku of this.facet(rR))
          for (let Qu of Ku(this, Ru, yu)) Object.prototype.hasOwnProperty.call(Qu, uu) && Eu.push(Qu[uu]);
        return Eu
      }
      charCategorizer(uu) {
        let Ru = this.languageDataAt("wordChars", uu);
        return sR(Ru.length ? Ru[0] : "")
      }
      wordAt(uu) {
        let {
          text: Ru,
          from: yu,
          length: Eu
        } = this.doc.lineAt(uu), Ku = this.charCategorizer(uu), Qu = uu - yu, mu = uu - yu;
        for (; Qu > 0;) {
          let uu = Au(Ru, Qu, !1);
          if (Ku(Ru.slice(uu, Qu)) != GR.Word) break;
          Qu = uu
        }
        for (; mu < Eu;) {
          let uu = Au(Ru, mu);
          if (Ku(Ru.slice(mu, uu)) != GR.Word) break;
          mu = uu
        }
        return Qu == mu ? null : wu.range(Qu + yu, mu + yu)
      }
    }

    function lR(uu, Ru) {
      let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        Eu = {};
      for (let Ku of uu)
        for (let uu of Object.keys(Ku)) {
          let Ru = Ku[uu],
            Qu = Eu[uu];
          if (void 0 === Qu) Eu[uu] = Ru;
          else if (Qu === Ru || void 0 === Ru);
          else {
            if (!Object.hasOwnProperty.call(yu, uu)) throw new Error("Config merge conflict for field " + uu);
            Eu[uu] = yu[uu](Qu, Ru)
          }
        }
      for (let Ku in Ru) void 0 === Eu[Ku] && (Eu[Ku] = Ru[Ku]);
      return Eu
    }
    tR.allowMultipleSelections = BR, tR.tabSize = Pu.define({
      combine: uu => uu.length ? uu[0] : 4
    }), tR.lineSeparator = xR, tR.readOnly = WR, tR.phrases = Pu.define({
      compare(uu, Ru) {
        let yu = Object.keys(uu),
          Eu = Object.keys(Ru);
        return yu.length == Eu.length && yu.every((yu => uu[yu] == Ru[yu]))
      }
    }), tR.languageData = rR, tR.changeFilter = SR, tR.transactionFilter = pR, tR.transactionExtender = TR, mR.reconfigure = bR.define();
    class gR {
      eq(uu) {
        return this == uu
      }
      range(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uu;
        return LR.create(uu, Ru, this)
      }
    }

    function cR(uu, Ru) {
      return uu == Ru || uu.constructor == Ru.constructor && uu.eq(Ru)
    }
    gR.prototype.startSide = gR.prototype.endSide = 0, gR.prototype.point = !1, gR.prototype.mapMode = Uu.TrackDel;
    class LR {
      constructor(uu, Ru, yu) {
        this.from = uu, this.to = Ru, this.value = yu
      }
      static create(uu, Ru, yu) {
        return new LR(uu, Ru, yu)
      }
    }

    function zR(uu, Ru) {
      return uu.from - Ru.from || uu.value.startSide - Ru.value.startSide
    }
    class FR {
      constructor(uu, Ru, yu, Eu) {
        this.from = uu, this.to = Ru, this.value = yu, this.nEu = Eu
      }
      get length() {
        return this.to[this.to.length - 1]
      }
      findIndex(uu, Ru, yu) {
        let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Ku = yu ? this.to : this.from;
        for (let Qu = Eu, mu = Ku.length;;) {
          if (Qu == mu) return Qu;
          let Eu = Qu + mu >> 1,
            Ju = Ku[Eu] - uu || (yu ? this.value[Eu].endSide : this.value[Eu].startSide) - Ru;
          if (Eu == Qu) return Ju >= 0 ? Qu : mu;
          Ju >= 0 ? mu = Eu : Qu = Eu + 1
        }
      }
      between(uu, Ru, yu, Eu) {
        for (let Ku = this.findIndex(Ru, -1e9, !0), Qu = this.findIndex(yu, 1e9, !1, Ku); Ku < Qu; Ku++)
          if (!1 === Eu(this.from[Ku] + uu, this.to[Ku] + uu, this.value[Ku])) return !1
      }
      map(uu, Ru) {
        let yu = [],
          Eu = [],
          Ku = [],
          Qu = -1,
          mu = -1;
        for (let Ju = 0; Ju < this.value.length; Ju++) {
          let Nu, Xu, Vu = this.value[Ju],
            ru = this.from[Ju] + uu,
            Bu = this.to[Ju] + uu;
          if (ru == Bu) {
            let uu = Ru.mapPos(ru, Vu.startSide, Vu.mapMode);
            if (null == uu) continue;
            if (Nu = Xu = uu, Vu.startSide != Vu.endSide && (Xu = Ru.mapPos(ru, Vu.endSide), Xu < Nu)) continue
          } else if (Nu = Ru.mapPos(ru, Vu.startSide), Xu = Ru.mapPos(Bu, Vu.endSide), Nu > Xu || Nu == Xu && Vu.startSide > 0 && Vu.endSide <= 0) continue;
          (Xu - Nu || Vu.endSide - Vu.startSide) < 0 || (Qu < 0 && (Qu = Nu), Vu.point && (mu = Math.max(mu, Xu - Nu)), yu.push(Vu), Eu.push(Nu - Qu), Ku.push(Xu - Qu))
        }
        return {
          mapped: yu.length ? new FR(Eu, Ku, yu, mu) : null,
          pos: Qu
        }
      }
    }
    class wR {
      constructor(uu, Ru, yu, Eu) {
        this.chunkPos = uu, this.chunk = Ru, this.nextLayer = yu, this.nEu = Eu
      }
      static create(uu, Ru, yu, Eu) {
        return new wR(uu, Ru, yu, Eu)
      }
      get length() {
        let uu = this.chunk.length - 1;
        return uu < 0 ? 0 : Math.max(this.chunkEnd(uu), this.nextLayer.length)
      }
      get size() {
        if (this.RS) return 0;
        let uu = this.nextLayer.size;
        for (let Ru of this.chunk) uu += Ru.value.length;
        return uu
      }
      chunkEnd(uu) {
        return this.chunkPos[uu] + this.chunk[uu].length
      }
      update(uu) {
        let {
          add: Ru = [],
          sort: yu = !1,
          filterFrom: Eu = 0,
          filterTo: Ku = this.length
        } = uu, Qu = uu.filter;
        if (0 == Ru.length && !Qu) return this;
        if (yu && (Ru = Ru.slice().sort(zR)), this.RS) return Ru.length ? wR.of(Ru) : this;
        let mu = new PR(this, null, -1).goto(0),
          Ju = 0,
          Nu = [],
          Xu = new ZR;
        for (; mu.value || Ju < Ru.length;)
          if (Ju < Ru.length && (mu.from - Ru[Ju].from || mu.startSide - Ru[Ju].value.startSide) >= 0) {
            let uu = Ru[Ju++];
            Xu.addInner(uu.from, uu.to, uu.value) || Nu.push(uu)
          } else 1 == mu.rangeIndex && mu.chunkIndex < this.chunk.length && (Ju == Ru.length || this.chunkEnd(mu.chunkIndex) < Ru[Ju].from) && (!Qu || Eu > this.chunkEnd(mu.chunkIndex) || Ku < this.chunkPos[mu.chunkIndex]) && Xu.addChunk(this.chunkPos[mu.chunkIndex], this.chunk[mu.chunkIndex]) ? mu.nextChunk() : ((!Qu || Eu > mu.to || Ku < mu.from || Qu(mu.from, mu.to, mu.value)) && (Xu.addInner(mu.from, mu.to, mu.value) || Nu.push(LR.create(mu.from, mu.to, mu.value))), mu.next());
        return Xu.finishInner(this.nextLayer.RS && !Nu.length ? wR.empty : this.nextLayer.update({
          add: Nu,
          filter: Qu,
          filterFrom: Eu,
          filterTo: Ku
        }))
      }
      map(uu) {
        if (uu.empty || this.RS) return this;
        let Ru = [],
          yu = [],
          Eu = -1;
        for (let Qu = 0; Qu < this.chunk.length; Qu++) {
          let Ku = this.chunkPos[Qu],
            mu = this.chunk[Qu],
            Ju = uu.touchesRange(Ku, Ku + mu.length);
          if (!1 === Ju) Eu = Math.max(Eu, mu.nEu), Ru.push(mu), yu.push(uu.mapPos(Ku));
          else if (!0 === Ju) {
            let {
              mapped: Qu,
              pos: Ju
            } = mu.map(Ku, uu);
            Qu && (Eu = Math.max(Eu, Qu.nEu), Ru.push(Qu), yu.push(Ju))
          }
        }
        let Ku = this.nextLayer.map(uu);
        return 0 == Ru.length ? Ku : new wR(yu, Ru, Ku || wR.empty, Eu)
      }
      between(uu, Ru, yu) {
        if (!this.RS) {
          for (let Eu = 0; Eu < this.chunk.length; Eu++) {
            let Ku = this.chunkPos[Eu],
              Qu = this.chunk[Eu];
            if (Ru >= Ku && uu <= Ku + Qu.length && !1 === Qu.between(Ku, uu - Ku, Ru - Ku, yu)) return
          }
          this.nextLayer.between(uu, Ru, yu)
        }
      }
      iter() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return iR.from([this]).goto(uu)
      }
      get RS() {
        return this.nextLayer == this
      }
      static iter(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return iR.from(uu).goto(Ru)
      }
      static compare(uu, Ru, yu, Eu) {
        let Ku = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1,
          Qu = uu.filter((uu => uu.nEu > 0 || !uu.RS && uu.nEu >= Ku)),
          mu = Ru.filter((uu => uu.nEu > 0 || !uu.RS && uu.nEu >= Ku)),
          Ju = hR(Qu, mu, yu),
          Nu = new oR(Qu, Ju, Ku),
          Xu = new oR(mu, Ju, Ku);
        yu.iterGaps(((uu, Ru, yu) => qR(Nu, uu, Xu, Ru, yu, Eu))), yu.empty && 0 == yu.length && qR(Nu, 0, Xu, 0, 0, Eu)
      }
      static eq(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Eu = arguments.length > 3 ? arguments[3] : void 0;
        null == Eu && (Eu = 999999999);
        let Ku = uu.filter((uu => !uu.RS && Ru.indexOf(uu) < 0)),
          Qu = Ru.filter((Ru => !Ru.RS && uu.indexOf(Ru) < 0));
        if (Ku.length != Qu.length) return !1;
        if (!Ku.length) return !0;
        let mu = hR(Ku, Qu),
          Ju = new oR(Ku, mu, 0).goto(yu),
          Nu = new oR(Qu, mu, 0).goto(yu);
        for (;;) {
          if (Ju.to != Nu.to || !OR(Ju.active, Nu.active) || Ju.point && (!Nu.point || !cR(Ju.point, Nu.point))) return !1;
          if (Ju.to > Eu) return !0;
          Ju.next(), Nu.next()
        }
      }
      static spans(uu, Ru, yu, Eu) {
        let Ku = new oR(uu, null, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1).goto(Ru),
          Qu = Ru,
          mu = Ku.openStart;
        for (;;) {
          let uu = Math.min(Ku.to, yu);
          if (Ku.point) {
            let yu = Ku.activeForPoint(Ku.to),
              Ju = Ku.pointFrom < Ru ? yu.length + 1 : Ku.point.startSide < 0 ? yu.length : Math.min(yu.length, mu);
            Eu.point(Qu, uu, Ku.point, yu, Ju, Ku.pointRank), mu = Math.min(Ku.openEnd(uu), yu.length)
          } else uu > Qu && (Eu.span(Qu, uu, Ku.active, mu), mu = Ku.openEnd(uu));
          if (Ku.to > yu) return mu + (Ku.point && Ku.to > yu ? 1 : 0);
          Qu = Ku.to, Ku.next()
        }
      }
      static of (uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          yu = new ZR;
        for (let Eu of uu instanceof LR ? [uu] : Ru ? function(uu) {
            if (uu.length > 1)
              for (let Ru = uu[0], yu = 1; yu < uu.length; yu++) {
                let Eu = uu[yu];
                if (zR(Ru, Eu) > 0) return uu.slice().sort(zR);
                Ru = Eu
              }
            return uu
          }(uu) : uu) yu.add(Eu.from, Eu.to, Eu.value);
        return yu.finish()
      }
      static join(uu) {
        if (!uu.length) return wR.empty;
        let Ru = uu[uu.length - 1];
        for (let yu = uu.length - 2; yu >= 0; yu--)
          for (let Eu = uu[yu]; Eu != wR.empty; Eu = Eu.nextLayer) Ru = new wR(Eu.chunkPos, Eu.chunk, Ru, Math.max(Eu.nEu, Ru.nEu));
        return Ru
      }
    }
    wR.empty = new wR([], [], null, -1), wR.empty.nextLayer = wR.empty;
    class ZR {
      finishChunk(uu) {
        this.chunks.push(new FR(this.from, this.to, this.value, this.nEu)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.nEu), this.nEu = -1, uu && (this.from = [], this.to = [], this.value = [])
      }
      constructor() {
        this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.nEu = -1, this.setMaxPoint = -1, this.nextLayer = null
      }
      add(uu, Ru, yu) {
        this.addInner(uu, Ru, yu) || (this.nextLayer || (this.nextLayer = new ZR)).add(uu, Ru, yu)
      }
      addInner(uu, Ru, yu) {
        let Eu = uu - this.lastTo || yu.startSide - this.last.endSide;
        if (Eu <= 0 && (uu - this.lastFrom || yu.startSide - this.last.startSide) < 0) throw new Error("Ranges must be added sorted by `from` position and `startSide`");
        return !(Eu < 0) && (250 == this.from.length && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = uu), this.from.push(uu - this.chunkStart), this.to.push(Ru - this.chunkStart), this.last = yu, this.lastFrom = uu, this.lastTo = Ru, this.value.push(yu), yu.point && (this.nEu = Math.max(this.nEu, Ru - uu)), !0)
      }
      addChunk(uu, Ru) {
        if ((uu - this.lastTo || Ru.value[0].startSide - this.last.endSide) < 0) return !1;
        this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, Ru.nEu), this.chunks.push(Ru), this.chunkPos.push(uu);
        let yu = Ru.value.length - 1;
        return this.last = Ru.value[yu], this.lastFrom = Ru.from[yu] + uu, this.lastTo = Ru.to[yu] + uu, !0
      }
      finish() {
        return this.finishInner(wR.empty)
      }
      finishInner(uu) {
        if (this.from.length && this.finishChunk(!1), 0 == this.chunks.length) return uu;
        let Ru = wR.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(uu) : uu, this.setMaxPoint);
        return this.from = null, Ru
      }
    }

    function hR(uu, Ru, yu) {
      let Eu = new Map;
      for (let Qu of uu)
        for (let uu = 0; uu < Qu.chunk.length; uu++) Qu.chunk[uu].nEu <= 0 && Eu.set(Qu.chunk[uu], Qu.chunkPos[uu]);
      let Ku = new Set;
      for (let Qu of Ru)
        for (let uu = 0; uu < Qu.chunk.length; uu++) {
          let Ru = Eu.get(Qu.chunk[uu]);
          null == Ru || (yu ? yu.mapPos(Ru) : Ru) != Qu.chunkPos[uu] || (null === yu || void 0 === yu ? void 0 : yu.touchesRange(Ru, Ru + Qu.chunk[uu].length)) || Ku.add(Qu.chunk[uu])
        }
      return Ku
    }
    class PR {
      constructor(uu, Ru, yu) {
        let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.layer = uu, this.skip = Ru, this.sEu = yu, this.rank = Eu
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      get endSide() {
        return this.value ? this.value.endSide : 0
      }
      goto(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(uu, Ru, !1), this
      }
      gotoInner(uu, Ru, yu) {
        for (; this.chunkIndex < this.layer.chunk.length;) {
          let Ru = this.layer.chunk[this.chunkIndex];
          if (!(this.skip && this.skip.has(Ru) || this.layer.chunkEnd(this.chunkIndex) < uu || Ru.nEu < this.sEu)) break;
          this.chunkIndex++, yu = !1
        }
        if (this.chunkIndex < this.layer.chunk.length) {
          let Eu = this.layer.chunk[this.chunkIndex].findIndex(uu - this.layer.chunkPos[this.chunkIndex], Ru, !0);
          (!yu || this.rangeIndex < Eu) && this.setRangeIndex(Eu)
        }
        this.next()
      }
      forward(uu, Ru) {
        (this.to - uu || this.endSide - Ru) < 0 && this.gotoInner(uu, Ru, !0)
      }
      next() {
        for (;;) {
          if (this.chunkIndex == this.layer.chunk.length) {
            this.from = this.to = 1e9, this.value = null;
            break
          } {
            let uu = this.layer.chunkPos[this.chunkIndex],
              Ru = this.layer.chunk[this.chunkIndex],
              yu = uu + Ru.from[this.rangeIndex];
            if (this.from = yu, this.to = uu + Ru.to[this.rangeIndex], this.value = Ru.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.sEu < 0 || this.value.point && this.to - this.from >= this.sEu) break
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
    class iR {
      constructor(uu) {
        this.heap = uu
      }
      static from(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          Eu = [];
        for (let Ku = 0; Ku < uu.length; Ku++)
          for (let Qu = uu[Ku]; !Qu.RS; Qu = Qu.nextLayer) Qu.nEu >= yu && Eu.push(new PR(Qu, Ru, yu, Ku));
        return 1 == Eu.length ? Eu[0] : new iR(Eu)
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      goto(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        for (let yu of this.heap) yu.goto(uu, Ru);
        for (let yu = this.heap.length >> 1; yu >= 0; yu--) YR(this.heap, yu);
        return this.next(), this
      }
      forward(uu, Ru) {
        for (let yu of this.heap) yu.forward(uu, Ru);
        for (let yu = this.heap.length >> 1; yu >= 0; yu--) YR(this.heap, yu);
        (this.to - uu || this.value.endSide - Ru) < 0 && this.next()
      }
      next() {
        if (0 == this.heap.length) this.from = this.to = 1e9, this.value = null, this.rank = -1;
        else {
          let uu = this.heap[0];
          this.from = uu.from, this.to = uu.to, this.value = uu.value, this.rank = uu.rank, uu.value && uu.next(), YR(this.heap, 0)
        }
      }
    }

    function YR(uu, Ru) {
      for (let yu = uu[Ru];;) {
        let Eu = 1 + (Ru << 1);
        if (Eu >= uu.length) break;
        let Ku = uu[Eu];
        if (Eu + 1 < uu.length && Ku.compare(uu[Eu + 1]) >= 0 && (Ku = uu[Eu + 1], Eu++), yu.compare(Ku) < 0) break;
        uu[Eu] = yu, uu[Ru] = Ku, Ru = Eu
      }
    }
    class oR {
      constructor(uu, Ru, yu) {
        this.sEu = yu, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = iR.from(uu, Ru, yu)
      }
      goto(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.cursor.goto(uu, Ru), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = uu, this.endSide = Ru, this.openStart = -1, this.next(), this
      }
      forward(uu, Ru) {
        for (; this.minActive > -1 && (this.activeTo[this.minActive] - uu || this.active[this.minActive].endSide - Ru) < 0;) this.removeActive(this.minActive);
        this.cursor.forward(uu, Ru)
      }
      removeActive(uu) {
        vR(this.active, uu), vR(this.activeTo, uu), vR(this.activeRank, uu), this.minActive = fR(this.active, this.activeTo)
      }
      addActive(uu) {
        let Ru = 0,
          {
            value: yu,
            to: Eu,
            rank: Ku
          } = this.cursor;
        for (; Ru < this.activeRank.length && (Ku - this.activeRank[Ru] || Eu - this.activeTo[Ru]) > 0;) Ru++;
        aR(this.active, Ru, yu), aR(this.activeTo, Ru, Eu), aR(this.activeRank, Ru, Ku), uu && aR(uu, Ru, this.cursor.from), this.minActive = fR(this.active, this.activeTo)
      }
      next() {
        let uu = this.to,
          Ru = this.point;
        this.point = null;
        let yu = this.openStart < 0 ? [] : null;
        for (;;) {
          let Eu = this.minActive;
          if (Eu > -1 && (this.activeTo[Eu] - this.cursor.from || this.active[Eu].endSide - this.cursor.startSide) < 0) {
            if (this.activeTo[Eu] > uu) {
              this.to = this.activeTo[Eu], this.endSide = this.active[Eu].endSide;
              break
            }
            this.removeActive(Eu), yu && vR(yu, Eu)
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
                if (!(Ru && this.cursor.to == this.to && this.cursor.from < this.cursor.to)) {
                  this.point = uu, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = uu.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
                  break
                }
                this.cursor.next()
              } else this.addActive(yu), this.cursor.next()
            }
          }
        }
        if (yu) {
          this.openStart = 0;
          for (let Ru = yu.length - 1; Ru >= 0 && yu[Ru] < uu; Ru--) this.openStart++
        }
      }
      activeForPoint(uu) {
        if (!this.active.length) return this.active;
        let Ru = [];
        for (let yu = this.active.length - 1; yu >= 0 && !(this.activeRank[yu] < this.pointRank); yu--)(this.activeTo[yu] > uu || this.activeTo[yu] == uu && this.active[yu].endSide >= this.point.endSide) && Ru.push(this.active[yu]);
        return Ru.reverse()
      }
      openEnd(uu) {
        let Ru = 0;
        for (let yu = this.activeTo.length - 1; yu >= 0 && this.activeTo[yu] > uu; yu--) Ru++;
        return Ru
      }
    }

    function qR(uu, Ru, yu, Eu, Ku, Qu) {
      uu.goto(Ru), yu.goto(Eu);
      let mu = Eu + Ku,
        Ju = Eu,
        Nu = Eu - Ru,
        Xu = !!Qu.boundChange;
      for (let Vu = !1;;) {
        let Ru = uu.to + Nu - yu.to,
          Eu = Ru || uu.endSide - yu.endSide,
          Ku = Eu < 0 ? uu.to + Nu : yu.to,
          ru = Math.min(Ku, mu);
        if (uu.point || yu.point ? (uu.point && yu.point && cR(uu.point, yu.point) && OR(uu.activeForPoint(uu.to), yu.activeForPoint(yu.to)) || Qu.comparePoint(Ju, ru, uu.point, yu.point), Vu = !1) : (Vu && Qu.boundChange(Ju), ru > Ju && !OR(uu.active, yu.active) && Qu.compareRange(Ju, ru, uu.active, yu.active), Xu && ru < mu && (Ru || uu.openEnd(Ku) != yu.openEnd(Ku)) && (Vu = !0)), Ku > mu) break;
        Ju = Ku, Eu <= 0 && uu.next(), Eu >= 0 && yu.next()
      }
    }

    function OR(uu, Ru) {
      if (uu.length != Ru.length) return !1;
      for (let yu = 0; yu < uu.length; yu++)
        if (uu[yu] != Ru[yu] && !cR(uu[yu], Ru[yu])) return !1;
      return !0
    }

    function vR(uu, Ru) {
      for (let yu = Ru, Eu = uu.length - 1; yu < Eu; yu++) uu[yu] = uu[yu + 1];
      uu.pop()
    }

    function aR(uu, Ru, yu) {
      for (let Eu = uu.length - 1; Eu >= Ru; Eu--) uu[Eu + 1] = uu[Eu];
      uu[Ru] = yu
    }

    function fR(uu, Ru) {
      let yu = -1,
        Eu = 1e9;
      for (let Ku = 0; Ku < Ru.length; Ku++)(Ru[Ku] - Eu || uu[Ku].endSide - uu[yu].endSide) < 0 && (yu = Ku, Eu = Ru[Ku]);
      return yu
    }

    function uy(uu, Ru) {
      let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : uu.length,
        Eu = 0;
      for (let Ku = 0; Ku < yu && Ku < uu.length;) 9 == uu.charCodeAt(Ku) ? (Eu += Ru - Eu % Ru, Ku++) : (Eu++, Ku = Au(uu, Ku));
      return Eu
    }

    function Ry(uu, Ru, yu, Eu) {
      for (let Ku = 0, Qu = 0;;) {
        if (Qu >= Ru) return Ku;
        if (Ku == uu.length) break;
        Qu += 9 == uu.charCodeAt(Ku) ? yu - Qu % yu : 1, Ku = Au(uu, Ku)
      }
      return !0 === Eu ? -1 : uu.length
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);