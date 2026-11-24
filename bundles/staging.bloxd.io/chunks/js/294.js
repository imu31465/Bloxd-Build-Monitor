export const id = 294;
export const ids = [294];
export const modules = {
  41315: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => nH,
      f: () => LS,
      ChangeSet: () => YS,
      g: () => vH,
      i: () => pS,
      m: () => AH,
      n: () => MS,
      q: () => ES,
      s: () => bH,
      A: () => pH,
      w: () => sH,
      D: () => VH,
      G: () => DH,
      H: () => eS,
      L: () => jS,
      N: () => wH,
      Q: () => OS,
      T: () => cS,
      W: () => yH,
      Z: () => Sg,
      $: () => JS,
      ab: () => Hg,
      eb: () => dS
    });
    let tS = [],
      bS = [];

    function XS(SS) {
      if (SS < 768) return !1;
      for (let HS = 0, gS = tS.length;;) {
        let XS = HS + gS >> 1;
        if (SS < tS[XS]) gS = XS;
        else {
          if (!(SS >= bS[XS])) return !0;
          HS = XS + 1
        }
        if (HS == gS) return !1
      }
    }

    function xS(SS) {
      return SS >= 127462 && SS <= 127487
    }(() => {
      let SS = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((SS => SS ? parseInt(SS, 36) : 1));
      for (let HS = 0, gS = 0; HS < SS.length; HS++)(HS % 2 ? bS : tS).push(gS += SS[HS])
    })();
    const NS = 8205;

    function qS(SS, HS) {
      return (!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2] ? uS : IS)(SS, HS, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function uS(SS, HS, gS) {
      if (HS == SS.length) return HS;
      HS && kS(SS.charCodeAt(HS)) && aS(SS.charCodeAt(HS - 1)) && HS--;
      let tS = fS(SS, HS);
      for (HS += KS(tS); HS < SS.length;) {
        let bS = fS(SS, HS);
        if (tS == NS || bS == NS || gS && XS(bS)) HS += KS(bS), tS = bS;
        else {
          if (!xS(bS)) break;
          {
            let gS = 0,
              tS = HS - 2;
            for (; tS >= 0 && xS(fS(SS, tS));) gS++, tS -= 2;
            if (gS % 2 == 0) break;
            HS += 2
          }
        }
      }
      return HS
    }

    function IS(SS, HS, gS) {
      for (; HS > 0;) {
        let tS = uS(SS, HS - 2, gS);
        if (tS < HS) return tS;
        HS--
      }
      return 0
    }

    function fS(SS, HS) {
      let gS = SS.charCodeAt(HS);
      if (!aS(gS) || HS + 1 == SS.length) return gS;
      let tS = SS.charCodeAt(HS + 1);
      return kS(tS) ? tS - 56320 + (gS - 55296 << 10) + 65536 : gS
    }

    function kS(SS) {
      return SS >= 56320 && SS < 57344
    }

    function aS(SS) {
      return SS >= 55296 && SS < 56320
    }

    function KS(SS) {
      return SS < 65536 ? 1 : 2
    }
    class jS {
      lineAt(SS) {
        if (SS < 0 || SS > this.length) throw new RangeError(`Invalid position ${SS} in document of length ${this.length}`);
        return this.lineInner(SS, !1, 1, 0)
      }
      line(SS) {
        if (SS < 1 || SS > this.lines) throw new RangeError(`Invalid line number ${SS} in ${this.lines}-line document`);
        return this.lineInner(SS, !0, 1, 0)
      }
      replace(SS, HS, gS) {
        [SS, HS] = ZS(this, SS, HS);
        let tS = [];
        return this.decompose(0, SS, tS, 2), gS.length && gS.decompose(0, gS.length, tS, 3), this.decompose(HS, this.length, tS, 1), CS.from(tS, this.length - (HS - SS) + gS.length)
      }
      append(SS) {
        return this.replace(this.length, this.length, SS)
      }
      slice(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        [SS, HS] = ZS(this, SS, HS);
        let gS = [];
        return this.decompose(SS, HS, gS, 0), CS.from(gS, HS - SS)
      }
      eq(SS) {
        if (SS == this) return !0;
        if (SS.length != this.length || SS.lines != this.lines) return !1;
        let HS = this.scanIdentical(SS, 1),
          gS = this.length - this.scanIdentical(SS, -1),
          tS = new QS(this),
          bS = new QS(SS);
        for (let XS = HS, xS = HS;;) {
          if (tS.next(XS), bS.next(XS), XS = 0, tS.lineBreak != bS.lineBreak || tS.done != bS.done || tS.value != bS.value) return !1;
          if (xS += tS.value.length, tS.done || xS >= gS) return !0
        }
      }
      iter() {
        return new QS(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1)
      }
      iterRange(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        return new DS(this, SS, HS)
      }
      iterLines(SS, HS) {
        let gS;
        if (null == SS) gS = this.iter();
        else {
          null == HS && (HS = this.lines + 1);
          let tS = this.line(SS).from;
          gS = this.iterRange(tS, Math.max(tS, HS == this.lines + 1 ? this.length : HS <= 1 ? 0 : this.line(HS - 1).to))
        }
        return new wS(gS)
      }
      toString() {
        return this.sliceString(0)
      }
      toJSON() {
        let SS = [];
        return this.flatten(SS), SS
      }
      constructor() {}
      static of (SS) {
        if (0 == SS.length) throw new RangeError("A document must have at least one line");
        return 1 != SS.length || SS[0] ? SS.length <= 32 ? new GS(SS) : CS.from(GS.split(SS, [])) : jS.empty
      }
    }
    class GS extends jS {
      constructor(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(SS) {
          let HS = -1;
          for (let gS of SS) HS += gS.length + 1;
          return HS
        }(SS);
        super(), this.text = SS, this.length = HS
      }
      get lines() {
        return this.text.length
      }
      get children() {
        return null
      }
      lineInner(SS, HS, gS, tS) {
        for (let bS = 0;; bS++) {
          let XS = this.text[bS],
            xS = tS + XS.length;
          if ((HS ? gS : xS) >= SS) return new hS(tS, xS, gS, XS);
          tS = xS + 1, gS++
        }
      }
      decompose(SS, HS, gS, tS) {
        let bS = SS <= 0 && HS >= this.length ? this : new GS(PS(this.text, SS, HS), Math.min(HS, this.length) - Math.max(0, SS));
        if (1 & tS) {
          let SS = gS.pop(),
            HS = nS(bS.text, SS.text.slice(), 0, bS.length);
          if (HS.length <= 32) gS.push(new GS(HS, SS.length + bS.length));
          else {
            let SS = HS.length >> 1;
            gS.push(new GS(HS.slice(0, SS)), new GS(HS.slice(SS)))
          }
        } else gS.push(bS)
      }
      replace(SS, HS, gS) {
        if (!(gS instanceof GS)) return super.replace(SS, HS, gS);
        [SS, HS] = ZS(this, SS, HS);
        let tS = nS(this.text, nS(gS.text, PS(this.text, 0, SS)), HS),
          bS = this.length + gS.length - (HS - SS);
        return tS.length <= 32 ? new GS(tS, bS) : CS.from(GS.split(tS, []), bS)
      }
      sliceString(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [SS, HS] = ZS(this, SS, HS);
        let tS = "";
        for (let bS = 0, XS = 0; bS <= HS && XS < this.text.length; XS++) {
          let xS = this.text[XS],
            NS = bS + xS.length;
          bS > SS && XS && (tS += gS), SS < NS && HS > bS && (tS += xS.slice(Math.max(0, SS - bS), HS - bS)), bS = NS + 1
        }
        return tS
      }
      flatten(SS) {
        for (let HS of this.text) SS.push(HS)
      }
      scanIdentical() {
        return 0
      }
      static split(SS, HS) {
        let gS = [],
          tS = -1;
        for (let bS of SS) gS.push(bS), tS += bS.length + 1, 32 == gS.length && (HS.push(new GS(gS, tS)), gS = [], tS = -1);
        return tS > -1 && HS.push(new GS(gS, tS)), HS
      }
    }
    class CS extends jS {
      constructor(SS, HS) {
        super(), this.children = SS, this.length = HS, this.lines = 0;
        for (let gS of SS) this.lines += gS.lines
      }
      lineInner(SS, HS, gS, tS) {
        for (let bS = 0;; bS++) {
          let XS = this.children[bS],
            xS = tS + XS.length,
            NS = gS + XS.lines - 1;
          if ((HS ? NS : xS) >= SS) return XS.lineInner(SS, HS, gS, tS);
          tS = xS + 1, gS = NS + 1
        }
      }
      decompose(SS, HS, gS, tS) {
        for (let bS = 0, XS = 0; XS <= HS && bS < this.children.length; bS++) {
          let xS = this.children[bS],
            NS = XS + xS.length;
          if (SS <= NS && HS >= XS) {
            let bS = tS & ((XS <= SS ? 1 : 0) | (NS >= HS ? 2 : 0));
            XS >= SS && NS <= HS && !bS ? gS.push(xS) : xS.decompose(SS - XS, HS - XS, gS, bS)
          }
          XS = NS + 1
        }
      }
      replace(SS, HS, gS) {
        if ([SS, HS] = ZS(this, SS, HS), gS.lines < this.lines)
          for (let tS = 0, bS = 0; tS < this.children.length; tS++) {
            let XS = this.children[tS],
              xS = bS + XS.length;
            if (SS >= bS && HS <= xS) {
              let NS = XS.replace(SS - bS, HS - bS, gS),
                qS = this.lines - XS.lines + NS.lines;
              if (NS.lines < qS >> 4 && NS.lines > qS >> 6) {
                let bS = this.children.slice();
                return bS[tS] = NS, new CS(bS, this.length - (HS - SS) + gS.length)
              }
              return super.replace(bS, xS, NS)
            }
            bS = xS + 1
          }
        return super.replace(SS, HS, gS)
      }
      sliceString(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [SS, HS] = ZS(this, SS, HS);
        let tS = "";
        for (let bS = 0, XS = 0; bS < this.children.length && XS <= HS; bS++) {
          let xS = this.children[bS],
            NS = XS + xS.length;
          XS > SS && bS && (tS += gS), SS < NS && HS > XS && (tS += xS.sliceString(SS - XS, HS - XS, gS)), XS = NS + 1
        }
        return tS
      }
      flatten(SS) {
        for (let HS of this.children) HS.flatten(SS)
      }
      scanIdentical(SS, HS) {
        if (!(SS instanceof CS)) return 0;
        let gS = 0,
          [tS, bS, XS, xS] = HS > 0 ? [0, 0, this.children.length, SS.children.length] : [this.children.length - 1, SS.children.length - 1, -1, -1];
        for (;; tS += HS, bS += HS) {
          if (tS == XS || bS == xS) return gS;
          let NS = this.children[tS],
            qS = SS.children[bS];
          if (NS != qS) return gS + NS.scanIdentical(qS, HS);
          gS += NS.length + 1
        }
      }
      static from(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : SS.reduce(((SS, HS) => SS + HS.length + 1), -1),
          gS = 0;
        for (let kS of SS) gS += kS.lines;
        if (gS < 32) {
          let gS = [];
          for (let HS of SS) HS.flatten(gS);
          return new GS(gS, HS)
        }
        let tS = Math.max(32, gS >> 5),
          bS = tS << 1,
          XS = tS >> 1,
          xS = [],
          NS = 0,
          qS = -1,
          uS = [];

        function IS(SS) {
          let HS;
          if (SS.lines > bS && SS instanceof CS)
            for (let gS of SS.children) IS(gS);
          else SS.lines > XS && (NS > XS || !NS) ? (fS(), xS.push(SS)) : SS instanceof GS && NS && (HS = uS[uS.length - 1]) instanceof GS && SS.lines + HS.lines <= 32 ? (NS += SS.lines, qS += SS.length + 1, uS[uS.length - 1] = new GS(HS.text.concat(SS.text), HS.length + 1 + SS.length)) : (NS + SS.lines > tS && fS(), NS += SS.lines, qS += SS.length + 1, uS.push(SS))
        }

        function fS() {
          0 != NS && (xS.push(1 == uS.length ? uS[0] : CS.from(uS, qS)), qS = -1, NS = uS.length = 0)
        }
        for (let kS of SS) IS(kS);
        return fS(), 1 == xS.length ? xS[0] : new CS(xS, HS)
      }
    }

    function nS(SS, HS) {
      let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e9;
      for (let bS = 0, XS = 0, xS = !0; XS < SS.length && bS <= tS; XS++) {
        let NS = SS[XS],
          qS = bS + NS.length;
        qS >= gS && (qS > tS && (NS = NS.slice(0, tS - bS)), bS < gS && (NS = NS.slice(gS - bS)), xS ? (HS[HS.length - 1] += NS, xS = !1) : HS.push(NS)), bS = qS + 1
      }
      return HS
    }

    function PS(SS, HS, gS) {
      return nS(SS, [""], HS, gS)
    }
    jS.empty = new GS([""], 0);
    class QS {
      constructor(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.dir = HS, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [SS], this.offsets = [HS > 0 ? 1 : (SS instanceof GS ? SS.text.length : SS.children.length) << 1]
      }
      nextInner(SS, HS) {
        for (this.done = this.lineBreak = !1;;) {
          let gS = this.nodes.length - 1,
            tS = this.nodes[gS],
            bS = this.offsets[gS],
            XS = bS >> 1,
            xS = tS instanceof GS ? tS.text.length : tS.children.length;
          if (XS == (HS > 0 ? xS : 0)) {
            if (0 == gS) return this.done = !0, this.value = "", this;
            HS > 0 && this.offsets[gS - 1]++, this.nodes.pop(), this.offsets.pop()
          } else if ((1 & bS) == (HS > 0 ? 0 : 1)) {
            if (this.offsets[gS] += HS, 0 == SS) return this.lineBreak = !0, this.value = "\n", this;
            SS--
          } else if (tS instanceof GS) {
            let bS = tS.text[XS + (HS < 0 ? -1 : 0)];
            if (this.offsets[gS] += HS, bS.length > Math.max(0, SS)) return this.value = 0 == SS ? bS : HS > 0 ? bS.slice(SS) : bS.slice(0, bS.length - SS), this;
            SS -= bS.length
          } else {
            let bS = tS.children[XS + (HS < 0 ? -1 : 0)];
            SS > bS.length ? (SS -= bS.length, this.offsets[gS] += HS) : (HS < 0 && this.offsets[gS]--, this.nodes.push(bS), this.offsets.push(HS > 0 ? 1 : (bS instanceof GS ? bS.text.length : bS.children.length) << 1))
          }
        }
      }
      next() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return SS < 0 && (this.nextInner(-SS, -this.dir), SS = this.value.length), this.nextInner(SS, this.dir)
      }
    }
    class DS {
      constructor(SS, HS, gS) {
        this.value = "", this.done = !1, this.cursor = new QS(SS, HS > gS ? -1 : 1), this.pos = HS > gS ? SS.length : 0, this.from = Math.min(HS, gS), this.to = Math.max(HS, gS)
      }
      nextInner(SS, HS) {
        if (HS < 0 ? this.pos <= this.from : this.pos >= this.to) return this.value = "", this.done = !0, this;
        SS += Math.max(0, HS < 0 ? this.pos - this.to : this.from - this.pos);
        let gS = HS < 0 ? this.pos - this.from : this.to - this.pos;
        SS > gS && (SS = gS), gS -= SS;
        let {
          value: tS
        } = this.cursor.next(SS);
        return this.pos += (tS.length + SS) * HS, this.value = tS.length <= gS ? tS : HS < 0 ? tS.slice(tS.length - gS) : tS.slice(0, gS), this.done = !this.value, this
      }
      next() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return SS < 0 ? SS = Math.max(SS, this.from - this.pos) : SS > 0 && (SS = Math.min(SS, this.to - this.pos)), this.nextInner(SS, this.cursor.dir)
      }
      get lineBreak() {
        return this.cursor.lineBreak && "" != this.value
      }
    }
    class wS {
      constructor(SS) {
        this.inner = SS, this.afterBreak = !0, this.value = "", this.done = !1
      }
      next() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          {
            done: HS,
            lineBreak: gS,
            value: tS
          } = this.inner.next(SS);
        return HS && this.afterBreak ? (this.value = "", this.afterBreak = !1) : HS ? (this.done = !0, this.value = "") : gS ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = tS, this.afterBreak = !1), this
      }
      get lineBreak() {
        return !1
      }
    }
    "undefined" != typeof Symbol && (jS.prototype[Symbol.iterator] = function() {
      return this.iter()
    }, QS.prototype[Symbol.iterator] = DS.prototype[Symbol.iterator] = wS.prototype[Symbol.iterator] = function() {
      return this
    });
    class hS {
      constructor(SS, HS, gS, tS) {
        this.from = SS, this.to = HS, this.number = gS, this.text = tS
      }
      get length() {
        return this.to - this.from
      }
    }

    function ZS(SS, HS, gS) {
      return [HS = Math.max(0, Math.min(SS.length, HS)), Math.max(HS, Math.min(SS.length, gS))]
    }

    function JS(SS, HS) {
      return qS(SS, HS, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function OS(SS, HS) {
      let gS = SS.charCodeAt(HS);
      if (!((tS = gS) >= 55296 && tS < 56320) || HS + 1 == SS.length) return gS;
      var tS;
      let bS = SS.charCodeAt(HS + 1);
      return function(SS) {
        return SS >= 56320 && SS < 57344
      }(bS) ? bS - 56320 + (gS - 55296 << 10) + 65536 : gS
    }

    function dS(SS) {
      return SS <= 65535 ? String.fromCharCode(SS) : (SS -= 65536, String.fromCharCode(55296 + (SS >> 10), 56320 + (1023 & SS)))
    }

    function cS(SS) {
      return SS < 65536 ? 1 : 2
    }
    const vS = /\r\n?|\n/;
    var ES = function(SS) {
      return SS[SS.Simple = 0] = "Simple", SS[SS.TrackDel = 1] = "TrackDel", SS[SS.TrackBefore = 2] = "TrackBefore", SS[SS.TrackAfter = 3] = "TrackAfter", SS
    }(ES || (ES = {}));
    class LS {
      constructor(SS) {
        this.sections = SS
      }
      get length() {
        let SS = 0;
        for (let HS = 0; HS < this.sections.length; HS += 2) SS += this.sections[HS];
        return SS
      }
      get newLength() {
        let SS = 0;
        for (let HS = 0; HS < this.sections.length; HS += 2) {
          let gS = this.sections[HS + 1];
          SS += gS < 0 ? this.sections[HS] : gS
        }
        return SS
      }
      get empty() {
        return 0 == this.sections.length || 2 == this.sections.length && this.sections[1] < 0
      }
      iterGaps(SS) {
        for (let HS = 0, gS = 0, tS = 0; HS < this.sections.length;) {
          let bS = this.sections[HS++],
            XS = this.sections[HS++];
          XS < 0 ? (SS(gS, tS, bS), tS += bS) : tS += XS, gS += bS
        }
      }
      iterChangedRanges(SS) {
        VS(this, SS, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get invertedDesc() {
        let SS = [];
        for (let HS = 0; HS < this.sections.length;) {
          let gS = this.sections[HS++],
            tS = this.sections[HS++];
          tS < 0 ? SS.push(gS, tS) : SS.push(tS, gS)
        }
        return new LS(SS)
      }
      composeDesc(SS) {
        return this.empty ? SS : SS.empty ? this : WS(this, SS)
      }
      mapDesc(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return SS.empty ? this : iS(this, SS, HS)
      }
      mapPos(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ES.Simple,
          tS = 0,
          bS = 0;
        for (let XS = 0; XS < this.sections.length;) {
          let xS = this.sections[XS++],
            NS = this.sections[XS++],
            qS = tS + xS;
          if (NS < 0) {
            if (qS > SS) return bS + (SS - tS);
            bS += xS
          } else {
            if (gS != ES.Simple && qS >= SS && (gS == ES.TrackDel && tS < SS && qS > SS || gS == ES.TrackBefore && tS < SS || gS == ES.TrackAfter && qS > SS)) return null;
            if (qS > SS || qS == SS && HS < 0 && !xS) return SS == tS || HS < 0 ? bS : bS + NS;
            bS += NS
          }
          tS = qS
        }
        if (SS > tS) throw new RangeError(`Position ${SS} is out of range for changeset of length ${tS}`);
        return bS
      }
      touchesRange(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : SS;
        for (let gS = 0, tS = 0; gS < this.sections.length && tS <= HS;) {
          let bS = tS + this.sections[gS++];
          if (this.sections[gS++] >= 0 && tS <= HS && bS >= SS) return !(tS < SS && bS > HS) || "cover";
          tS = bS
        }
        return !1
      }
      toString() {
        let SS = "";
        for (let HS = 0; HS < this.sections.length;) {
          let gS = this.sections[HS++],
            tS = this.sections[HS++];
          SS += (SS ? " " : "") + gS + (tS >= 0 ? ":" + tS : "")
        }
        return SS
      }
      toJSON() {
        return this.sections
      }
      static fromJSON(SS) {
        if (!Array.isArray(SS) || SS.length % 2 || SS.some((SS => "number" != typeof SS))) throw new RangeError("Invalid JSON representation of ChangeDesc");
        return new LS(SS)
      }
      static create(SS) {
        return new LS(SS)
      }
    }
    class YS extends LS {
      constructor(SS, HS) {
        super(SS), this.inserted = HS
      }
      apply(SS) {
        if (this.length != SS.length) throw new RangeError("Applying change set to a document with the wrong length");
        return VS(this, ((HS, gS, tS, bS, XS) => SS = SS.replace(tS, tS + (gS - HS), XS)), !1), SS
      }
      mapDesc(SS) {
        return iS(this, SS, arguments.length > 1 && void 0 !== arguments[1] && arguments[1], !0)
      }
      invert(SS) {
        let HS = this.sections.slice(),
          gS = [];
        for (let tS = 0, bS = 0; tS < HS.length; tS += 2) {
          let XS = HS[tS],
            xS = HS[tS + 1];
          if (xS >= 0) {
            HS[tS] = xS, HS[tS + 1] = XS;
            let NS = tS >> 1;
            for (; gS.length < NS;) gS.push(jS.empty);
            gS.push(XS ? SS.slice(bS, bS + XS) : jS.empty)
          }
          bS += XS
        }
        return new YS(HS, gS)
      }
      compose(SS) {
        return this.empty ? SS : SS.empty ? this : WS(this, SS, !0)
      }
      map(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return SS.empty ? this : iS(this, SS, HS, !0)
      }
      iterChanges(SS) {
        VS(this, SS, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get desc() {
        return LS.create(this.sections)
      }
      filter(SS) {
        let HS = [],
          gS = [],
          tS = [],
          bS = new zS(this);
        SS: for (let XS = 0, xS = 0;;) {
          let NS = XS == SS.length ? 1e9 : SS[XS++];
          for (; xS < NS || xS == NS && 0 == bS.len;) {
            if (bS.done) break SS;
            let SS = Math.min(bS.len, NS - xS);
            AS(tS, SS, -1);
            let XS = -1 == bS.ins ? -1 : 0 == bS.off ? bS.ins : 0;
            AS(HS, SS, XS), XS > 0 && yS(gS, HS, bS.text), bS.forward(SS), xS += SS
          }
          let qS = SS[XS++];
          for (; xS < qS;) {
            if (bS.done) break SS;
            let SS = Math.min(bS.len, qS - xS);
            AS(HS, SS, -1), AS(tS, SS, -1 == bS.ins ? -1 : 0 == bS.off ? bS.ins : 0), bS.forward(SS), xS += SS
          }
        }
        return {
          changes: new YS(HS, gS),
          filtered: LS.create(tS)
        }
      }
      toJSON() {
        let SS = [];
        for (let HS = 0; HS < this.sections.length; HS += 2) {
          let gS = this.sections[HS],
            tS = this.sections[HS + 1];
          tS < 0 ? SS.push(gS) : 0 == tS ? SS.push([gS]) : SS.push([gS].concat(this.inserted[HS >> 1].toJSON()))
        }
        return SS
      }
      static of (SS, HS, gS) {
        let tS = [],
          bS = [],
          XS = 0,
          xS = null;

        function NS() {
          if (!(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && !tS.length) return;
          XS < HS && AS(tS, HS - XS, -1);
          let SS = new YS(tS, bS);
          xS = xS ? xS.compose(SS.map(xS)) : SS, tS = [], bS = [], XS = 0
        }
        return function SS(qS) {
          if (Array.isArray(qS))
            for (let HS of qS) SS(HS);
          else if (qS instanceof YS) {
            if (qS.length != HS) throw new RangeError(`Mismatched change set length (got ${qS.length}, expected ${HS})`);
            NS(), xS = xS ? xS.compose(qS.map(xS)) : qS
          } else {
            let {
              from: SS,
              to: xS = SS,
              insert: uS
            } = qS;
            if (SS > xS || SS < 0 || xS > HS) throw new RangeError(`Invalid change range ${SS} to ${xS} (in doc of length ${HS})`);
            let IS = uS ? "string" == typeof uS ? jS.of(uS.split(gS || vS)) : uS : jS.empty,
              fS = IS.length;
            if (SS == xS && 0 == fS) return;
            SS < XS && NS(), SS > XS && AS(tS, SS - XS, -1), AS(tS, xS - SS, fS), yS(bS, tS, IS), XS = xS
          }
        }(SS), NS(!xS), xS
      }
      static empty(SS) {
        return new YS(SS ? [SS, -1] : [], [])
      }
      static fromJSON(SS) {
        if (!Array.isArray(SS)) throw new RangeError("Invalid JSON representation of ChangeSet");
        let HS = [],
          gS = [];
        for (let tS = 0; tS < SS.length; tS++) {
          let bS = SS[tS];
          if ("number" == typeof bS) HS.push(bS, -1);
          else {
            if (!Array.isArray(bS) || "number" != typeof bS[0] || bS.some(((SS, HS) => HS && "string" != typeof SS))) throw new RangeError("Invalid JSON representation of ChangeSet");
            if (1 == bS.length) HS.push(bS[0], 0);
            else {
              for (; gS.length < tS;) gS.push(jS.empty);
              gS[tS] = jS.of(bS.slice(1)), HS.push(bS[0], gS[tS].length)
            }
          }
        }
        return new YS(HS, gS)
      }
      static createSet(SS, HS) {
        return new YS(SS, HS)
      }
    }

    function AS(SS, HS, gS) {
      let tS = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (0 == HS && gS <= 0) return;
      let bS = SS.length - 2;
      bS >= 0 && gS <= 0 && gS == SS[bS + 1] ? SS[bS] += HS : bS >= 0 && 0 == HS && 0 == SS[bS] ? SS[bS + 1] += gS : tS ? (SS[bS] += HS, SS[bS + 1] += gS) : SS.push(HS, gS)
    }

    function yS(SS, HS, gS) {
      if (0 == gS.length) return;
      let tS = HS.length - 2 >> 1;
      if (tS < SS.length) SS[SS.length - 1] = SS[SS.length - 1].append(gS);
      else {
        for (; SS.length < tS;) SS.push(jS.empty);
        SS.push(gS)
      }
    }

    function VS(SS, HS, gS) {
      let tS = SS.inserted;
      for (let bS = 0, XS = 0, xS = 0; xS < SS.sections.length;) {
        let NS = SS.sections[xS++],
          qS = SS.sections[xS++];
        if (qS < 0) bS += NS, XS += NS;
        else {
          let uS = bS,
            IS = XS,
            fS = jS.empty;
          for (; uS += NS, IS += qS, qS && tS && (fS = fS.append(tS[xS - 2 >> 1])), !(gS || xS == SS.sections.length || SS.sections[xS + 1] < 0);) NS = SS.sections[xS++], qS = SS.sections[xS++];
          HS(bS, uS, XS, IS, fS), bS = uS, XS = IS
        }
      }
    }

    function iS(SS, HS, gS) {
      let tS = [],
        bS = arguments.length > 3 && void 0 !== arguments[3] && arguments[3] ? [] : null,
        XS = new zS(SS),
        xS = new zS(HS),
        NS = 0;
      for (let qS = -1;;) {
        if (++NS > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - likely malformed ChangeSet");
        if (XS.done && xS.len || xS.done && XS.len) throw new Error("Mismatched change set lengths");
        if (-1 == XS.ins && -1 == xS.ins) {
          let SS = Math.min(XS.len, xS.len);
          AS(tS, SS, -1), XS.forward(SS), xS.forward(SS)
        } else if (xS.ins >= 0 && (XS.ins < 0 || qS == XS.i || 0 == XS.off && (xS.len < XS.len || xS.len == XS.len && !gS))) {
          let SS = xS.len;
          for (AS(tS, xS.ins, -1); SS;) {
            if (++NS > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-b");
            let HS = Math.min(XS.len, SS);
            XS.ins >= 0 && qS < XS.i && XS.len <= HS && (AS(tS, 0, XS.ins), bS && yS(bS, tS, XS.text), qS = XS.i), XS.forward(HS), SS -= HS
          }
          xS.next()
        } else {
          if (!(XS.ins >= 0)) {
            if (XS.done && xS.done) return bS ? YS.createSet(tS, bS) : LS.create(tS);
            throw new Error("Mismatched change set lengths")
          } {
            let SS = 0,
              HS = XS.len;
            for (; HS;) {
              if (++NS > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-a");
              if (-1 == xS.ins) {
                let gS = Math.min(HS, xS.len);
                SS += gS, HS -= gS, xS.forward(gS)
              } else {
                if (!(0 == xS.ins && xS.len < HS)) break;
                HS -= xS.len, xS.next()
              }
            }
            AS(tS, SS, qS < XS.i ? XS.ins : 0), bS && qS < XS.i && yS(bS, tS, XS.text), qS = XS.i, XS.forward(XS.len - HS)
          }
        }
      }
    }

    function WS(SS, HS) {
      let gS = [],
        tS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? [] : null,
        bS = new zS(SS),
        XS = new zS(HS),
        xS = 0;
      for (let NS = !1;;) {
        if (++xS > 2e6) throw new Error("BLOXD CODEMIRROR: composeSets exceeded max iterations - likely malformed ChangeSet");
        if (bS.done && XS.done) return tS ? YS.createSet(gS, tS) : LS.create(gS);
        if (0 == bS.ins) AS(gS, bS.len, 0, NS), bS.next();
        else if (0 != XS.len || XS.done) {
          if (bS.done || XS.done) throw new Error("Mismatched change set lengths");
          {
            let SS = Math.min(bS.len2, XS.len),
              HS = gS.length;
            if (-1 == bS.ins) {
              let HS = -1 == XS.ins ? -1 : XS.off ? 0 : XS.ins;
              AS(gS, SS, HS, NS), tS && HS && yS(tS, gS, XS.text)
            } else - 1 == XS.ins ? (AS(gS, bS.off ? 0 : bS.len, SS, NS), tS && yS(tS, gS, bS.textBit(SS))) : (AS(gS, bS.off ? 0 : bS.len, XS.off ? 0 : XS.ins, NS), tS && !XS.off && yS(tS, gS, XS.text));
            NS = (bS.ins > SS || XS.ins >= 0 && XS.len > SS) && (NS || gS.length > HS), bS.forward2(SS), XS.forward(SS)
          }
        } else AS(gS, 0, XS.ins, NS), tS && yS(tS, gS, XS.text), XS.next()
      }
    }
    class zS {
      constructor(SS) {
        this.set = SS, this.i = 0, this.next()
      }
      next() {
        let {
          sections: SS
        } = this.set;
        this.i < SS.length ? (this.len = SS[this.i++], this.ins = SS[this.i++]) : (this.len = 0, this.ins = -2), this.off = 0
      }
      get done() {
        return -2 == this.ins
      }
      get len2() {
        return this.ins < 0 ? this.len : this.ins
      }
      get text() {
        let {
          inserted: SS
        } = this.set, HS = this.i - 2 >> 1;
        return HS >= SS.length ? jS.empty : SS[HS]
      }
      textBit(SS) {
        let {
          inserted: HS
        } = this.set, gS = this.i - 2 >> 1;
        return gS >= HS.length && !SS ? jS.empty : HS[gS].slice(this.off, null == SS ? void 0 : this.off + SS)
      }
      forward(SS) {
        SS == this.len ? this.next() : (this.len -= SS, this.off += SS)
      }
      forward2(SS) {
        -1 == this.ins ? this.forward(SS) : SS == this.ins ? this.next() : (this.ins -= SS, this.off += SS)
      }
    }
    class US {
      constructor(SS, HS, gS) {
        this.from = SS, this.to = HS, this.flags = gS
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
        let SS = 7 & this.flags;
        return 7 == SS ? null : SS
      }
      get goalColumn() {
        let SS = this.flags >> 6;
        return 16777215 == SS ? void 0 : SS
      }
      map(SS) {
        let HS, gS, tS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return this.empty ? HS = gS = SS.mapPos(this.from, tS) : (HS = SS.mapPos(this.from, 1), gS = SS.mapPos(this.to, -1)), HS == this.from && gS == this.to ? this : new US(HS, gS, this.flags)
      }
      extend(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : SS,
          gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (SS <= this.anchor && HS >= this.anchor) return pS.range(SS, HS, void 0, void 0, gS);
        let tS = Math.abs(SS - this.anchor) > Math.abs(HS - this.anchor) ? SS : HS;
        return pS.range(this.anchor, tS, void 0, void 0, gS)
      }
      eq(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.anchor == SS.anchor && this.head == SS.head && this.goalColumn == SS.goalColumn && (!HS || !this.empty || this.assoc == SS.assoc)
      }
      toJSON() {
        return {
          anchor: this.anchor,
          head: this.head
        }
      }
      static fromJSON(SS) {
        if (!SS || "number" != typeof SS.anchor || "number" != typeof SS.head) throw new RangeError("Invalid JSON representation for SelectionRange");
        return pS.range(SS.anchor, SS.head)
      }
      static create(SS, HS, gS) {
        return new US(SS, HS, gS)
      }
    }
    class pS {
      constructor(SS, HS) {
        this.HG = SS, this.mainIndex = HS
      }
      map(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return SS.empty ? this : pS.create(this.HG.map((gS => gS.map(SS, HS))), this.mainIndex)
      }
      eq(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.HG.length != SS.HG.length || this.mainIndex != SS.mainIndex) return !1;
        for (let gS = 0; gS < this.HG.length; gS++)
          if (!this.HG[gS].eq(SS.HG[gS], HS)) return !1;
        return !0
      }
      get main() {
        return this.HG[this.mainIndex]
      }
      asSingle() {
        return 1 == this.HG.length ? this : new pS([this.main], 0)
      }
      addRange(SS) {
        let HS = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return pS.create([SS].concat(this.HG), HS ? 0 : this.mainIndex + 1)
      }
      replaceRange(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.mainIndex,
          gS = this.HG.slice();
        return gS[HS] = SS, pS.create(gS, this.mainIndex)
      }
      toJSON() {
        return {
          HG: this.HG.map((SS => SS.toJSON())),
          main: this.mainIndex
        }
      }
      static fromJSON(SS) {
        if (!SS || !Array.isArray(SS.HG) || "number" != typeof SS.main || SS.main >= SS.HG.length) throw new RangeError("Invalid JSON representation for EditorSelection");
        return new pS(SS.HG.map((SS => US.fromJSON(SS))), SS.main)
      }
      static single(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : SS;
        return new pS([pS.range(SS, HS)], 0)
      }
      static create(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (0 == SS.length) throw new RangeError("A selection needs at least one range");
        for (let gS = 0, tS = 0; tS < SS.length; tS++) {
          let bS = SS[tS];
          if (bS.empty ? bS.from <= gS : bS.from < gS) return pS.normalized(SS.slice(), HS);
          gS = bS.to
        }
        return new pS(SS, HS)
      }
      static cursor(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gS = arguments.length > 2 ? arguments[2] : void 0,
          tS = arguments.length > 3 ? arguments[3] : void 0;
        return US.create(SS, SS, (0 == HS ? 0 : HS < 0 ? 8 : 16) | (null == gS ? 7 : Math.min(6, gS)) | (null !== tS && void 0 !== tS ? tS : 16777215) << 6)
      }
      static range(SS, HS, gS, tS, bS) {
        let XS = (null !== gS && void 0 !== gS ? gS : 16777215) << 6 | (null == tS ? 7 : Math.min(6, tS));
        return bS || SS == HS || (bS = HS < SS ? 1 : -1), HS < SS ? US.create(HS, SS, 48 | XS) : US.create(SS, HS, (bS ? bS < 0 ? 8 : 16 : 0) | XS)
      }
      static normalized(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gS = SS[HS];
        SS.sort(((SS, HS) => SS.from - HS.from)), HS = SS.indexOf(gS);
        for (let tS = 1; tS < SS.length; tS++) {
          let gS = SS[tS],
            bS = SS[tS - 1];
          if (gS.empty ? gS.from <= bS.to : gS.from < bS.to) {
            let XS = bS.from,
              xS = Math.max(gS.to, bS.to);
            tS <= HS && HS--, SS.splice(--tS, 2, gS.anchor > gS.head ? pS.range(xS, XS) : pS.range(XS, xS))
          }
        }
        return new pS(SS, HS)
      }
    }

    function sS(SS, HS) {
      for (let gS of SS.HG)
        if (gS.to > HS) throw new RangeError("Selection points outside of document")
    }
    let BS = 0;
    class MS {
      constructor(SS, HS, gS, tS, bS) {
        this.combine = SS, this.compareInput = HS, this.compare = gS, this.isStatic = tS, this.id = BS++, this.default = SS([]), this.extensions = "function" == typeof bS ? bS(this) : bS
      }
      get reader() {
        return this
      }
      static define() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return new MS(SS.combine || (SS => SS), SS.compareInput || ((SS, HS) => SS === HS), SS.compare || (SS.combine ? (SS, HS) => SS === HS : FS), !!SS.static, SS.enables)
      }
      of(SS) {
        return new RS([], this, 0, SS)
      }
      compute(SS, HS) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new RS(SS, this, 1, HS)
      }
      computeN(SS, HS) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new RS(SS, this, 2, HS)
      }
      from(SS, HS) {
        return HS || (HS = SS => SS), this.compute([SS], (gS => HS(gS.field(SS))))
      }
    }

    function FS(SS, HS) {
      return SS == HS || SS.length == HS.length && SS.every(((SS, gS) => SS === HS[gS]))
    }
    class RS {
      constructor(SS, HS, gS, tS) {
        this.dependencies = SS, this.facet = HS, this.type = gS, this.value = tS, this.id = BS++
      }
      dynamicSlot(SS) {
        var HS;
        let gS = this.value,
          tS = this.facet.compareInput,
          bS = this.id,
          XS = SS[bS] >> 1,
          xS = 2 == this.type,
          NS = !1,
          qS = !1,
          uS = [];
        for (let IS of this.dependencies) "doc" == IS ? NS = !0 : "selection" == IS ? qS = !0 : 0 == (1 & (null !== (HS = SS[IS.id]) && void 0 !== HS ? HS : 1)) && uS.push(SS[IS.id]);
        return {
          create: SS => (SS.values[XS] = gS(SS), 1),
          update(SS, HS) {
            if (NS && HS.docChanged || qS && (HS.docChanged || HS.selection) || oS(SS, uS)) {
              let HS = gS(SS);
              if (xS ? !TS(HS, SS.values[XS], tS) : !tS(HS, SS.values[XS])) return SS.values[XS] = HS, 1
            }
            return 0
          },
          reconfigure: (SS, HS) => {
            let NS, qS = HS.config.address[bS];
            if (null != qS) {
              let bS = IH(HS, qS);
              if (this.dependencies.every((gS => gS instanceof MS ? HS.facet(gS) === SS.facet(gS) : !(gS instanceof eS) || HS.field(gS, !1) == SS.field(gS, !1))) || (xS ? TS(NS = gS(SS), bS, tS) : tS(NS = gS(SS), bS))) return SS.values[XS] = bS, 0
            } else NS = gS(SS);
            return SS.values[XS] = NS, 1
          }
        }
      }
    }

    function TS(SS, HS, gS) {
      if (SS.length != HS.length) return !1;
      for (let tS = 0; tS < SS.length; tS++)
        if (!gS(SS[tS], HS[tS])) return !1;
      return !0
    }

    function oS(SS, HS) {
      let gS = !1;
      for (let tS of HS) 1 & uH(SS, tS) && (gS = !0);
      return gS
    }

    function lS(SS, HS, gS) {
      let tS = gS.map((HS => SS[HS.id])),
        bS = gS.map((SS => SS.type)),
        XS = tS.filter((SS => !(1 & SS))),
        xS = SS[HS.id] >> 1;

      function NS(SS) {
        let gS = [];
        for (let HS = 0; HS < tS.length; HS++) {
          let XS = IH(SS, tS[HS]);
          if (2 == bS[HS])
            for (let SS of XS) gS.push(SS);
          else gS.push(XS)
        }
        return HS.combine(gS)
      }
      return {
        create(SS) {
          for (let HS of tS) uH(SS, HS);
          return SS.values[xS] = NS(SS), 1
        },
        update(SS, gS) {
          if (!oS(SS, XS)) return 0;
          let tS = NS(SS);
          return HS.compare(tS, SS.values[xS]) ? 0 : (SS.values[xS] = tS, 1)
        },
        reconfigure(SS, bS) {
          let XS = oS(SS, tS),
            qS = bS.config.facets[HS.id],
            uS = bS.facet(HS);
          if (qS && !XS && FS(gS, qS)) return SS.values[xS] = uS, 0;
          let IS = NS(SS);
          return HS.compare(IS, uS) ? (SS.values[xS] = uS, 0) : (SS.values[xS] = IS, 1)
        }
      }
    }
    const mS = MS.define({
      static: !0
    });
    class eS {
      constructor(SS, HS, gS, tS, bS) {
        this.id = SS, this.createF = HS, this.updateF = gS, this.compareF = tS, this.spec = bS, this.provides = void 0
      }
      static define(SS) {
        let HS = new eS(BS++, SS.create, SS.update, SS.compare || ((SS, HS) => SS === HS), SS);
        return SS.provide && (HS.provides = SS.provide(HS)), HS
      }
      create(SS) {
        let HS = SS.facet(mS).find((SS => SS.field == this));
        return ((null === HS || void 0 === HS ? void 0 : HS.create) || this.createF)(SS)
      }
      slot(SS) {
        let HS = SS[this.id] >> 1;
        return {
          create: SS => (SS.values[HS] = this.create(SS), 1),
          update: (SS, gS) => {
            let tS = SS.values[HS],
              bS = this.updateF(tS, gS);
            return this.compareF(tS, bS) ? 0 : (SS.values[HS] = bS, 1)
          },
          reconfigure: (SS, gS) => {
            let tS, bS = SS.facet(mS),
              XS = gS.facet(mS);
            return (tS = bS.find((SS => SS.field == this))) && tS != XS.find((SS => SS.field == this)) ? (SS.values[HS] = tS.create(SS), 1) : null != gS.config.address[this.id] ? (SS.values[HS] = gS.field(this), 0) : (SS.values[HS] = this.create(SS), 1)
          }
        }
      }
      init(SS) {
        return [this, mS.of({
          field: this,
          create: SS
        })]
      }
      get extension() {
        return this
      }
    }
    const rS = 4,
      SH = 3,
      HH = 2,
      gH = 1;

    function tH(SS) {
      return HS => new XH(HS, SS)
    }
    const bH = {
      highest: tH(0),
      high: tH(gH),
      default: tH(HH),
      low: tH(SH),
      lowest: tH(rS)
    };
    class XH {
      constructor(SS, HS) {
        this.inner = SS, this.prec = HS
      }
    }
    class xH {
      of(SS) {
        return new NH(this, SS)
      }
      reconfigure(SS) {
        return xH.reconfigure.of({
          compartment: this,
          extension: SS
        })
      }
      get(SS) {
        return SS.config.compartments.get(this)
      }
    }
    class NH {
      constructor(SS, HS) {
        this.compartment = SS, this.inner = HS
      }
    }
    class qH {
      constructor(SS, HS, gS, tS, bS, XS) {
        for (this.base = SS, this.compartments = HS, this.dynamicSlots = gS, this.address = tS, this.staticValues = bS, this.facets = XS, this.statusTemplate = []; this.statusTemplate.length < gS.length;) this.statusTemplate.push(0)
      }
      staticFacet(SS) {
        let HS = this.address[SS.id];
        return null == HS ? SS.default : this.staticValues[HS >> 1]
      }
      static resolve(SS, HS, gS) {
        let tS = [],
          bS = Object.create(null),
          XS = new Map;
        for (let fS of function(SS, HS, gS) {
            let tS = [
                [],
                [],
                [],
                [],
                []
              ],
              bS = new Map;

            function XS(SS, xS) {
              let NS = bS.get(SS);
              if (null != NS) {
                if (NS <= xS) return;
                let HS = tS[NS].indexOf(SS);
                HS > -1 && tS[NS].splice(HS, 1), SS instanceof NH && gS.delete(SS.compartment)
              }
              if (bS.set(SS, xS), Array.isArray(SS))
                for (let HS of SS) XS(HS, xS);
              else if (SS instanceof NH) {
                if (gS.has(SS.compartment)) throw new RangeError("Duplicate use of compartment in extensions");
                let tS = HS.get(SS.compartment) || SS.inner;
                gS.set(SS.compartment, tS), XS(tS, xS)
              } else if (SS instanceof XH) XS(SS.inner, SS.prec);
              else if (SS instanceof eS) tS[xS].push(SS), SS.provides && XS(SS.provides, xS);
              else if (SS instanceof RS) tS[xS].push(SS), SS.facet.extensions && XS(SS.facet.extensions, HH);
              else {
                let HS = SS.extension;
                if (!HS) throw new Error(`Unrecognized extension value in extension set (${SS}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
                XS(HS, xS)
              }
            }
            return XS(SS, HH), tS.reduce(((SS, HS) => SS.concat(HS)))
          }(SS, HS, XS)) fS instanceof eS ? tS.push(fS) : (bS[fS.facet.id] || (bS[fS.facet.id] = [])).push(fS);
        let xS = Object.create(null),
          NS = [],
          qS = [];
        for (let fS of tS) xS[fS.id] = qS.length << 1, qS.push((SS => fS.slot(SS)));
        let uS = null === gS || void 0 === gS ? void 0 : gS.config.facets;
        for (let fS in bS) {
          let SS = bS[fS],
            HS = SS[0].facet,
            tS = uS && uS[fS] || [];
          if (SS.every((SS => 0 == SS.type)))
            if (xS[HS.id] = NS.length << 1 | 1, FS(tS, SS)) NS.push(gS.facet(HS));
            else {
              let tS = HS.combine(SS.map((SS => SS.value)));
              NS.push(gS && HS.compare(tS, gS.facet(HS)) ? gS.facet(HS) : tS)
            }
          else {
            for (let HS of SS) 0 == HS.type ? (xS[HS.id] = NS.length << 1 | 1, NS.push(HS.value)) : (xS[HS.id] = qS.length << 1, qS.push((SS => HS.dynamicSlot(SS))));
            xS[HS.id] = qS.length << 1, qS.push((gS => lS(gS, HS, SS)))
          }
        }
        let IS = qS.map((SS => SS(xS)));
        return new qH(SS, XS, IS, xS, NS, bS)
      }
    }

    function uH(SS, HS) {
      if (1 & HS) return 2;
      let gS = HS >> 1,
        tS = SS.status[gS];
      if (4 == tS) throw new Error("Cyclic dependency between fields and/or facets");
      if (2 & tS) return tS;
      SS.status[gS] = 4;
      let bS = SS.computeSlot(SS, SS.config.dynamicSlots[gS]);
      return SS.status[gS] = 2 | bS
    }

    function IH(SS, HS) {
      return 1 & HS ? SS.config.staticValues[HS >> 1] : SS.values[HS >> 1]
    }
    const fH = MS.define(),
      kH = MS.define({
        combine: SS => SS.some((SS => SS)),
        static: !0
      }),
      aH = MS.define({
        combine: SS => SS.length ? SS[0] : void 0,
        static: !0
      }),
      KH = MS.define(),
      jH = MS.define(),
      GH = MS.define(),
      CH = MS.define({
        combine: SS => !!SS.length && SS[0]
      });
    class nH {
      constructor(SS, HS) {
        this.type = SS, this.value = HS
      }
      static define() {
        return new PH
      }
    }
    class PH {
      of(SS) {
        return new nH(this, SS)
      }
    }
    class QH {
      constructor(SS) {
        this.map = SS
      }
      of(SS) {
        return new DH(this, SS)
      }
    }
    class DH {
      constructor(SS, HS) {
        this.type = SS, this.value = HS
      }
      map(SS) {
        let HS = this.type.map(this.value, SS);
        return void 0 === HS ? void 0 : HS == this.value ? this : new DH(this.type, HS)
      }
      is(SS) {
        return this.type == SS
      }
      static define() {
        return new QH((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).map || (SS => SS))
      }
      static mapEffects(SS, HS) {
        if (!SS.length) return SS;
        let gS = [];
        for (let tS of SS) {
          let SS = tS.map(HS);
          SS && gS.push(SS)
        }
        return gS
      }
    }
    DH.reconfigure = DH.define(), DH.appendConfig = DH.define();
    class wH {
      constructor(SS, HS, gS, tS, bS, XS) {
        this.startState = SS, this.changes = HS, this.selection = gS, this.effects = tS, this.annotations = bS, this.scrollIntoView = XS, this._doc = null, this._state = null, gS && sS(gS, HS.newLength), bS.some((SS => SS.type == wH.time)) || (this.annotations = bS.concat(wH.time.of(Date.now())))
      }
      static create(SS, HS, gS, tS, bS, XS) {
        return new wH(SS, HS, gS, tS, bS, XS)
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
      annotation(SS) {
        for (let HS of this.annotations)
          if (HS.type == SS) return HS.value
      }
      get docChanged() {
        return !this.changes.empty
      }
      get reconfigured() {
        return this.startState.config != this.state.config
      }
      isUserEvent(SS) {
        let HS = this.annotation(wH.userEvent);
        return !(!HS || !(HS == SS || HS.length > SS.length && HS.slice(0, SS.length) == SS && "." == HS[SS.length]))
      }
    }

    function hH(SS, HS) {
      let gS = [];
      for (let tS = 0, bS = 0;;) {
        let XS, xS;
        if (tS < SS.length && (bS == HS.length || HS[bS] >= SS[tS])) XS = SS[tS++], xS = SS[tS++];
        else {
          if (!(bS < HS.length)) return gS;
          XS = HS[bS++], xS = HS[bS++]
        }!gS.length || gS[gS.length - 1] < XS ? gS.push(XS, xS) : gS[gS.length - 1] < xS && (gS[gS.length - 1] = xS)
      }
    }

    function ZH(SS, HS, gS) {
      var tS;
      let bS, XS, xS;
      return gS ? (bS = HS.changes, XS = YS.empty(HS.changes.length), xS = SS.changes.compose(HS.changes)) : (bS = HS.changes.map(SS.changes), XS = SS.changes.mapDesc(HS.changes, !0), xS = SS.changes.compose(bS)), {
        changes: xS,
        selection: HS.selection ? HS.selection.map(XS) : null === (tS = SS.selection) || void 0 === tS ? void 0 : tS.map(bS),
        effects: DH.mapEffects(SS.effects, bS).concat(DH.mapEffects(HS.effects, XS)),
        annotations: SS.annotations.length ? SS.annotations.concat(HS.annotations) : HS.annotations,
        scrollIntoView: SS.scrollIntoView || HS.scrollIntoView
      }
    }

    function JH(SS, HS, gS) {
      let tS = HS.selection,
        bS = cH(HS.annotations);
      return HS.userEvent && (bS = bS.concat(wH.userEvent.of(HS.userEvent))), {
        changes: HS.changes instanceof YS ? HS.changes : YS.of(HS.changes || [], gS, SS.facet(aH)),
        selection: tS && (tS instanceof pS ? tS : pS.single(tS.anchor, tS.head)),
        effects: cH(HS.effects),
        annotations: bS,
        scrollIntoView: !!HS.scrollIntoView
      }
    }

    function OH(SS, HS, gS) {
      let tS = JH(SS, HS.length ? HS[0] : {}, SS.doc.length);
      HS.length && !1 === HS[0].filter && (gS = !1);
      for (let XS = 1; XS < HS.length; XS++) {
        !1 === HS[XS].filter && (gS = !1);
        let bS = !!HS[XS].sequential;
        tS = ZH(tS, JH(SS, HS[XS], bS ? tS.changes.newLength : SS.doc.length), bS)
      }
      let bS = wH.create(SS, tS.changes, tS.selection, tS.effects, tS.annotations, tS.scrollIntoView);
      return function(SS) {
        let HS = SS.startState,
          gS = HS.facet(GH),
          tS = SS;
        for (let bS = gS.length - 1; bS >= 0; bS--) {
          let XS = gS[bS](SS);
          XS && Object.keys(XS).length && (tS = ZH(tS, JH(HS, XS, SS.changes.newLength), !0))
        }
        return tS == SS ? SS : wH.create(HS, SS.changes, SS.selection, tS.effects, tS.annotations, tS.scrollIntoView)
      }(gS ? function(SS) {
        let HS = SS.startState,
          gS = !0;
        for (let bS of HS.facet(KH)) {
          let HS = bS(SS);
          if (!1 === HS) {
            gS = !1;
            break
          }
          Array.isArray(HS) && (gS = !0 === gS ? HS : hH(gS, HS))
        }
        if (!0 !== gS) {
          let tS, bS;
          if (!1 === gS) bS = SS.changes.invertedDesc, tS = YS.empty(HS.doc.length);
          else {
            let HS = SS.changes.filter(gS);
            tS = HS.changes, bS = HS.filtered.mapDesc(HS.changes).invertedDesc
          }
          SS = wH.create(HS, tS, SS.selection && SS.selection.map(bS), DH.mapEffects(SS.effects, bS), SS.annotations, SS.scrollIntoView)
        }
        let tS = HS.facet(jH);
        for (let bS = tS.length - 1; bS >= 0; bS--) {
          let gS = tS[bS](SS);
          SS = gS instanceof wH ? gS : Array.isArray(gS) && 1 == gS.length && gS[0] instanceof wH ? gS[0] : OH(HS, cH(gS), !1)
        }
        return SS
      }(bS) : bS)
    }
    wH.time = nH.define(), wH.userEvent = nH.define(), wH.addToHistory = nH.define(), wH.remote = nH.define();
    const dH = [];

    function cH(SS) {
      return null == SS ? dH : Array.isArray(SS) ? SS : [SS]
    }
    var vH = function(SS) {
      return SS[SS.Word = 0] = "Word", SS[SS.Space = 1] = "Space", SS[SS.Other = 2] = "Other", SS
    }(vH || (vH = {}));
    const EH = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
    let LH;
    try {
      LH = new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u")
    } catch (gg) {}

    function YH(SS) {
      return HS => {
        if (!/\S/.test(HS)) return vH.Space;
        if (function(SS) {
            if (LH) return LH.test(SS);
            for (let HS = 0; HS < SS.length; HS++) {
              let gS = SS[HS];
              if (/\w/.test(gS) || gS > "\x80" && (gS.toUpperCase() != gS.toLowerCase() || EH.test(gS))) return !0
            }
            return !1
          }(HS)) return vH.Word;
        for (let gS = 0; gS < SS.length; gS++)
          if (HS.indexOf(SS[gS]) > -1) return vH.Word;
        return vH.Other
      }
    }
    class AH {
      constructor(SS, HS, gS, tS, bS, XS) {
        this.config = SS, this.doc = HS, this.selection = gS, this.values = tS, this.status = SS.statusTemplate.slice(), this.computeSlot = bS, XS && (XS._state = this);
        for (let xS = 0; xS < this.config.dynamicSlots.length; xS++) uH(this, xS << 1);
        this.computeSlot = null
      }
      field(SS) {
        let HS = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          gS = this.config.address[SS.id];
        if (null != gS) return uH(this, gS), IH(this, gS);
        if (HS) throw new RangeError("Field is not present in this state")
      }
      update() {
        for (var SS = arguments.length, HS = new Array(SS), gS = 0; gS < SS; gS++) HS[gS] = arguments[gS];
        return OH(this, HS, !0)
      }
      applyTransaction(SS) {
        let HS, gS = this.config,
          {
            base: tS,
            compartments: bS
          } = gS;
        for (let xS of SS.effects) xS.is(xH.reconfigure) ? (gS && (bS = new Map, gS.compartments.forEach(((SS, HS) => bS.set(HS, SS))), gS = null), bS.set(xS.value.compartment, xS.value.extension)) : xS.is(DH.reconfigure) ? (gS = null, tS = xS.value) : xS.is(DH.appendConfig) && (gS = null, tS = cH(tS).concat(xS.value));
        if (gS) HS = SS.startState.values.slice();
        else {
          gS = qH.resolve(tS, bS, this), HS = new AH(gS, this.doc, this.selection, gS.dynamicSlots.map((() => null)), ((SS, HS) => HS.reconfigure(SS, this)), null).values
        }
        let XS = SS.startState.facet(kH) ? SS.newSelection : SS.newSelection.asSingle();
        new AH(gS, SS.newDoc, XS, HS, ((HS, gS) => gS.update(HS, SS)), SS)
      }
      replaceSelection(SS) {
        return "string" == typeof SS && (SS = this.toText(SS)), this.changeByRange((HS => ({
          changes: {
            from: HS.from,
            to: HS.to,
            insert: SS
          },
          range: pS.cursor(HS.from + SS.length)
        })))
      }
      changeByRange(SS) {
        let HS = this.selection,
          gS = SS(HS.HG[0]),
          tS = this.changes(gS.changes),
          bS = [gS.range],
          XS = cH(gS.effects);
        for (let xS = 1; xS < HS.HG.length; xS++) {
          let gS = SS(HS.HG[xS]),
            NS = this.changes(gS.changes),
            qS = NS.map(tS);
          for (let SS = 0; SS < xS; SS++) bS[SS] = bS[SS].map(qS);
          let uS = tS.mapDesc(NS, !0);
          bS.push(gS.range.map(uS)), tS = tS.compose(qS), XS = DH.mapEffects(XS, qS).concat(DH.mapEffects(cH(gS.effects), uS))
        }
        return {
          changes: tS,
          selection: pS.create(bS, HS.mainIndex),
          effects: XS
        }
      }
      changes() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return SS instanceof YS ? SS : YS.of(SS, this.doc.length, this.facet(AH.lineSeparator))
      }
      toText(SS) {
        return jS.of(SS.split(this.facet(AH.lineSeparator) || vS))
      }
      sliceDoc() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.doc.length;
        return this.doc.sliceString(SS, HS, this.lineBreak)
      }
      facet(SS) {
        let HS = this.config.address[SS.id];
        return null == HS ? SS.default : (uH(this, HS), IH(this, HS))
      }
      toJSON(SS) {
        let HS = {
          doc: this.sliceDoc(),
          selection: this.selection.toJSON()
        };
        if (SS)
          for (let gS in SS) {
            let tS = SS[gS];
            tS instanceof eS && null != this.config.address[tS.id] && (HS[gS] = tS.spec.toJSON(this.field(SS[gS]), this))
          }
        return HS
      }
      static fromJSON(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          gS = arguments.length > 2 ? arguments[2] : void 0;
        if (!SS || "string" != typeof SS.doc) throw new RangeError("Invalid JSON representation for EditorState");
        let tS = [];
        if (gS)
          for (let bS in gS)
            if (Object.prototype.hasOwnProperty.call(SS, bS)) {
              let HS = gS[bS],
                XS = SS[bS];
              tS.push(HS.init((SS => HS.spec.fromJSON(XS, SS))))
            } return AH.create({
          doc: SS.doc,
          selection: pS.fromJSON(SS.selection),
          extensions: HS.extensions ? tS.concat([HS.extensions]) : tS
        })
      }
      static create() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          HS = qH.resolve(SS.extensions || [], new Map),
          gS = SS.doc instanceof jS ? SS.doc : jS.of((SS.doc || "").split(HS.staticFacet(AH.lineSeparator) || vS)),
          tS = SS.selection ? SS.selection instanceof pS ? SS.selection : pS.single(SS.selection.anchor, SS.selection.head) : pS.single(0);
        return sS(tS, gS.length), HS.staticFacet(kH) || (tS = tS.asSingle()), new AH(HS, gS, tS, HS.dynamicSlots.map((() => null)), ((SS, HS) => HS.create(SS)), null)
      }
      get tabSize() {
        return this.facet(AH.tabSize)
      }
      get lineBreak() {
        return this.facet(AH.lineSeparator) || "\n"
      }
      get readOnly() {
        return this.facet(CH)
      }
      phrase(SS) {
        for (var HS = arguments.length, gS = new Array(HS > 1 ? HS - 1 : 0), tS = 1; tS < HS; tS++) gS[tS - 1] = arguments[tS];
        for (let bS of this.facet(AH.phrases))
          if (Object.prototype.hasOwnProperty.call(bS, SS)) {
            SS = bS[SS];
            break
          } return gS.length && (SS = SS.replace(/\$(\$|\d*)/g, ((SS, HS) => {
          if ("$" == HS) return "$";
          let tS = +(HS || 1);
          return !tS || tS > gS.length ? SS : gS[tS - 1]
        }))), SS
      }
      languageDataAt(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          tS = [];
        for (let bS of this.facet(fH))
          for (let XS of bS(this, HS, gS)) Object.prototype.hasOwnProperty.call(XS, SS) && tS.push(XS[SS]);
        return tS
      }
      charCategorizer(SS) {
        let HS = this.languageDataAt("wordChars", SS);
        return YH(HS.length ? HS[0] : "")
      }
      wordAt(SS) {
        let {
          text: HS,
          from: gS,
          length: tS
        } = this.doc.lineAt(SS), bS = this.charCategorizer(SS), XS = SS - gS, xS = SS - gS;
        for (; XS > 0;) {
          let SS = JS(HS, XS, !1);
          if (bS(HS.slice(SS, XS)) != vH.Word) break;
          XS = SS
        }
        for (; xS < tS;) {
          let SS = JS(HS, xS);
          if (bS(HS.slice(xS, SS)) != vH.Word) break;
          xS = SS
        }
        return XS == xS ? null : pS.range(XS + gS, xS + gS)
      }
    }

    function yH(SS, HS) {
      let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        tS = {};
      for (let bS of SS)
        for (let SS of Object.keys(bS)) {
          let HS = bS[SS],
            XS = tS[SS];
          if (void 0 === XS) tS[SS] = HS;
          else if (XS === HS || void 0 === HS);
          else {
            if (!Object.hasOwnProperty.call(gS, SS)) throw new Error("Config merge conflict for field " + SS);
            tS[SS] = gS[SS](XS, HS)
          }
        }
      for (let bS in HS) void 0 === tS[bS] && (tS[bS] = HS[bS]);
      return tS
    }
    AH.allowMultipleSelections = kH, AH.tabSize = MS.define({
      combine: SS => SS.length ? SS[0] : 4
    }), AH.lineSeparator = aH, AH.readOnly = CH, AH.phrases = MS.define({
      compare(SS, HS) {
        let gS = Object.keys(SS),
          tS = Object.keys(HS);
        return gS.length == tS.length && gS.every((gS => SS[gS] == HS[gS]))
      }
    }), AH.languageData = fH, AH.changeFilter = KH, AH.transactionFilter = jH, AH.transactionExtender = GH, xH.reconfigure = DH.define();
    class VH {
      eq(SS) {
        return this == SS
      }
      range(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : SS;
        return WH.create(SS, HS, this)
      }
    }

    function iH(SS, HS) {
      return SS == HS || SS.constructor == HS.constructor && SS.eq(HS)
    }
    VH.prototype.startSide = VH.prototype.endSide = 0, VH.prototype.point = !1, VH.prototype.mapMode = ES.TrackDel;
    class WH {
      constructor(SS, HS, gS) {
        this.from = SS, this.to = HS, this.value = gS
      }
      static create(SS, HS, gS) {
        return new WH(SS, HS, gS)
      }
    }

    function zH(SS, HS) {
      return SS.from - HS.from || SS.value.startSide - HS.value.startSide
    }
    class UH {
      constructor(SS, HS, gS, tS) {
        this.from = SS, this.to = HS, this.value = gS, this.ttS = tS
      }
      get length() {
        return this.to[this.to.length - 1]
      }
      findIndex(SS, HS, gS) {
        let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          bS = gS ? this.to : this.from;
        for (let XS = tS, xS = bS.length;;) {
          if (XS == xS) return XS;
          let tS = XS + xS >> 1,
            NS = bS[tS] - SS || (gS ? this.value[tS].endSide : this.value[tS].startSide) - HS;
          if (tS == XS) return NS >= 0 ? XS : xS;
          NS >= 0 ? xS = tS : XS = tS + 1
        }
      }
      between(SS, HS, gS, tS) {
        for (let bS = this.findIndex(HS, -1e9, !0), XS = this.findIndex(gS, 1e9, !1, bS); bS < XS; bS++)
          if (!1 === tS(this.from[bS] + SS, this.to[bS] + SS, this.value[bS])) return !1
      }
      map(SS, HS) {
        let gS = [],
          tS = [],
          bS = [],
          XS = -1,
          xS = -1;
        for (let NS = 0; NS < this.value.length; NS++) {
          let qS, uS, IS = this.value[NS],
            fS = this.from[NS] + SS,
            kS = this.to[NS] + SS;
          if (fS == kS) {
            let SS = HS.mapPos(fS, IS.startSide, IS.mapMode);
            if (null == SS) continue;
            if (qS = uS = SS, IS.startSide != IS.endSide && (uS = HS.mapPos(fS, IS.endSide), uS < qS)) continue
          } else if (qS = HS.mapPos(fS, IS.startSide), uS = HS.mapPos(kS, IS.endSide), qS > uS || qS == uS && IS.startSide > 0 && IS.endSide <= 0) continue;
          (uS - qS || IS.endSide - IS.startSide) < 0 || (XS < 0 && (XS = qS), IS.point && (xS = Math.max(xS, uS - qS)), gS.push(IS), tS.push(qS - XS), bS.push(uS - XS))
        }
        return {
          mapped: gS.length ? new UH(tS, bS, gS, xS) : null,
          pos: XS
        }
      }
    }
    class pH {
      constructor(SS, HS, gS, tS) {
        this.chunkPos = SS, this.chunk = HS, this.nextLayer = gS, this.ttS = tS
      }
      static create(SS, HS, gS, tS) {
        return new pH(SS, HS, gS, tS)
      }
      get length() {
        let SS = this.chunk.length - 1;
        return SS < 0 ? 0 : Math.max(this.chunkEnd(SS), this.nextLayer.length)
      }
      get size() {
        if (this.IK) return 0;
        let SS = this.nextLayer.size;
        for (let HS of this.chunk) SS += HS.value.length;
        return SS
      }
      chunkEnd(SS) {
        return this.chunkPos[SS] + this.chunk[SS].length
      }
      update(SS) {
        let {
          add: HS = [],
          sort: gS = !1,
          filterFrom: tS = 0,
          filterTo: bS = this.length
        } = SS, XS = SS.filter;
        if (0 == HS.length && !XS) return this;
        if (gS && (HS = HS.slice().sort(zH)), this.IK) return HS.length ? pH.of(HS) : this;
        let xS = new MH(this, null, -1).goto(0),
          NS = 0,
          qS = [],
          uS = new sH;
        for (; xS.value || NS < HS.length;)
          if (NS < HS.length && (xS.from - HS[NS].from || xS.startSide - HS[NS].value.startSide) >= 0) {
            let SS = HS[NS++];
            uS.addInner(SS.from, SS.to, SS.value) || qS.push(SS)
          } else 1 == xS.rangeIndex && xS.chunkIndex < this.chunk.length && (NS == HS.length || this.chunkEnd(xS.chunkIndex) < HS[NS].from) && (!XS || tS > this.chunkEnd(xS.chunkIndex) || bS < this.chunkPos[xS.chunkIndex]) && uS.addChunk(this.chunkPos[xS.chunkIndex], this.chunk[xS.chunkIndex]) ? xS.nextChunk() : ((!XS || tS > xS.to || bS < xS.from || XS(xS.from, xS.to, xS.value)) && (uS.addInner(xS.from, xS.to, xS.value) || qS.push(WH.create(xS.from, xS.to, xS.value))), xS.next());
        return uS.finishInner(this.nextLayer.IK && !qS.length ? pH.empty : this.nextLayer.update({
          add: qS,
          filter: XS,
          filterFrom: tS,
          filterTo: bS
        }))
      }
      map(SS) {
        if (SS.empty || this.IK) return this;
        let HS = [],
          gS = [],
          tS = -1;
        for (let XS = 0; XS < this.chunk.length; XS++) {
          let bS = this.chunkPos[XS],
            xS = this.chunk[XS],
            NS = SS.touchesRange(bS, bS + xS.length);
          if (!1 === NS) tS = Math.max(tS, xS.ttS), HS.push(xS), gS.push(SS.mapPos(bS));
          else if (!0 === NS) {
            let {
              mapped: XS,
              pos: NS
            } = xS.map(bS, SS);
            XS && (tS = Math.max(tS, XS.ttS), HS.push(XS), gS.push(NS))
          }
        }
        let bS = this.nextLayer.map(SS);
        return 0 == HS.length ? bS : new pH(gS, HS, bS || pH.empty, tS)
      }
      between(SS, HS, gS) {
        if (!this.IK) {
          for (let tS = 0; tS < this.chunk.length; tS++) {
            let bS = this.chunkPos[tS],
              XS = this.chunk[tS];
            if (HS >= bS && SS <= bS + XS.length && !1 === XS.between(bS, SS - bS, HS - bS, gS)) return
          }
          this.nextLayer.between(SS, HS, gS)
        }
      }
      iter() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return FH.from([this]).goto(SS)
      }
      get IK() {
        return this.nextLayer == this
      }
      static iter(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return FH.from(SS).goto(HS)
      }
      static compare(SS, HS, gS, tS) {
        let bS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1,
          XS = SS.filter((SS => SS.ttS > 0 || !SS.IK && SS.ttS >= bS)),
          xS = HS.filter((SS => SS.ttS > 0 || !SS.IK && SS.ttS >= bS)),
          NS = BH(XS, xS, gS),
          qS = new TH(XS, NS, bS),
          uS = new TH(xS, NS, bS);
        gS.iterGaps(((SS, HS, gS) => oH(qS, SS, uS, HS, gS, tS))), gS.empty && 0 == gS.length && oH(qS, 0, uS, 0, 0, tS)
      }
      static eq(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          tS = arguments.length > 3 ? arguments[3] : void 0;
        null == tS && (tS = 999999999);
        let bS = SS.filter((SS => !SS.IK && HS.indexOf(SS) < 0)),
          XS = HS.filter((HS => !HS.IK && SS.indexOf(HS) < 0));
        if (bS.length != XS.length) return !1;
        if (!bS.length) return !0;
        let xS = BH(bS, XS),
          NS = new TH(bS, xS, 0).goto(gS),
          qS = new TH(XS, xS, 0).goto(gS);
        for (;;) {
          if (NS.to != qS.to || !lH(NS.active, qS.active) || NS.point && (!qS.point || !iH(NS.point, qS.point))) return !1;
          if (NS.to > tS) return !0;
          NS.next(), qS.next()
        }
      }
      static spans(SS, HS, gS, tS) {
        let bS = new TH(SS, null, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1).goto(HS),
          XS = HS,
          xS = bS.openStart;
        for (;;) {
          let SS = Math.min(bS.to, gS);
          if (bS.point) {
            let gS = bS.activeForPoint(bS.to),
              NS = bS.pointFrom < HS ? gS.length + 1 : bS.point.startSide < 0 ? gS.length : Math.min(gS.length, xS);
            tS.point(XS, SS, bS.point, gS, NS, bS.pointRank), xS = Math.min(bS.openEnd(SS), gS.length)
          } else SS > XS && (tS.span(XS, SS, bS.active, xS), xS = bS.openEnd(SS));
          if (bS.to > gS) return xS + (bS.point && bS.to > gS ? 1 : 0);
          XS = bS.to, bS.next()
        }
      }
      static of (SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gS = new sH;
        for (let tS of SS instanceof WH ? [SS] : HS ? function(SS) {
            if (SS.length > 1)
              for (let HS = SS[0], gS = 1; gS < SS.length; gS++) {
                let tS = SS[gS];
                if (zH(HS, tS) > 0) return SS.slice().sort(zH);
                HS = tS
              }
            return SS
          }(SS) : SS) gS.add(tS.from, tS.to, tS.value);
        return gS.finish()
      }
      static join(SS) {
        if (!SS.length) return pH.empty;
        let HS = SS[SS.length - 1];
        for (let gS = SS.length - 2; gS >= 0; gS--)
          for (let tS = SS[gS]; tS != pH.empty; tS = tS.nextLayer) HS = new pH(tS.chunkPos, tS.chunk, HS, Math.max(tS.ttS, HS.ttS));
        return HS
      }
    }
    pH.empty = new pH([], [], null, -1), pH.empty.nextLayer = pH.empty;
    class sH {
      finishChunk(SS) {
        this.chunks.push(new UH(this.from, this.to, this.value, this.ttS)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.ttS), this.ttS = -1, SS && (this.from = [], this.to = [], this.value = [])
      }
      constructor() {
        this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.ttS = -1, this.setMaxPoint = -1, this.nextLayer = null
      }
      add(SS, HS, gS) {
        this.addInner(SS, HS, gS) || (this.nextLayer || (this.nextLayer = new sH)).add(SS, HS, gS)
      }
      addInner(SS, HS, gS) {
        let tS = SS - this.lastTo || gS.startSide - this.last.endSide;
        if (tS <= 0 && (SS - this.lastFrom || gS.startSide - this.last.startSide) < 0) throw new Error("Ranges must be added sorted by `from` position and `startSide`");
        return !(tS < 0) && (250 == this.from.length && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = SS), this.from.push(SS - this.chunkStart), this.to.push(HS - this.chunkStart), this.last = gS, this.lastFrom = SS, this.lastTo = HS, this.value.push(gS), gS.point && (this.ttS = Math.max(this.ttS, HS - SS)), !0)
      }
      addChunk(SS, HS) {
        if ((SS - this.lastTo || HS.value[0].startSide - this.last.endSide) < 0) return !1;
        this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, HS.ttS), this.chunks.push(HS), this.chunkPos.push(SS);
        let gS = HS.value.length - 1;
        return this.last = HS.value[gS], this.lastFrom = HS.from[gS] + SS, this.lastTo = HS.to[gS] + SS, !0
      }
      finish() {
        return this.finishInner(pH.empty)
      }
      finishInner(SS) {
        if (this.from.length && this.finishChunk(!1), 0 == this.chunks.length) return SS;
        let HS = pH.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(SS) : SS, this.setMaxPoint);
        return this.from = null, HS
      }
    }

    function BH(SS, HS, gS) {
      let tS = new Map;
      for (let XS of SS)
        for (let SS = 0; SS < XS.chunk.length; SS++) XS.chunk[SS].ttS <= 0 && tS.set(XS.chunk[SS], XS.chunkPos[SS]);
      let bS = new Set;
      for (let XS of HS)
        for (let SS = 0; SS < XS.chunk.length; SS++) {
          let HS = tS.get(XS.chunk[SS]);
          null == HS || (gS ? gS.mapPos(HS) : HS) != XS.chunkPos[SS] || (null === gS || void 0 === gS ? void 0 : gS.touchesRange(HS, HS + XS.chunk[SS].length)) || bS.add(XS.chunk[SS])
        }
      return bS
    }
    class MH {
      constructor(SS, HS, gS) {
        let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.layer = SS, this.skip = HS, this.btS = gS, this.rank = tS
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      get endSide() {
        return this.value ? this.value.endSide : 0
      }
      goto(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(SS, HS, !1), this
      }
      gotoInner(SS, HS, gS) {
        for (; this.chunkIndex < this.layer.chunk.length;) {
          let HS = this.layer.chunk[this.chunkIndex];
          if (!(this.skip && this.skip.has(HS) || this.layer.chunkEnd(this.chunkIndex) < SS || HS.ttS < this.btS)) break;
          this.chunkIndex++, gS = !1
        }
        if (this.chunkIndex < this.layer.chunk.length) {
          let tS = this.layer.chunk[this.chunkIndex].findIndex(SS - this.layer.chunkPos[this.chunkIndex], HS, !0);
          (!gS || this.rangeIndex < tS) && this.setRangeIndex(tS)
        }
        this.next()
      }
      forward(SS, HS) {
        (this.to - SS || this.endSide - HS) < 0 && this.gotoInner(SS, HS, !0)
      }
      next() {
        for (;;) {
          if (this.chunkIndex == this.layer.chunk.length) {
            this.from = this.to = 1e9, this.value = null;
            break
          } {
            let SS = this.layer.chunkPos[this.chunkIndex],
              HS = this.layer.chunk[this.chunkIndex],
              gS = SS + HS.from[this.rangeIndex];
            if (this.from = gS, this.to = SS + HS.to[this.rangeIndex], this.value = HS.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.btS < 0 || this.value.point && this.to - this.from >= this.btS) break
          }
        }
      }
      setRangeIndex(SS) {
        if (SS == this.layer.chunk[this.chunkIndex].value.length) {
          if (this.chunkIndex++, this.skip)
            for (; this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]);) this.chunkIndex++;
          this.rangeIndex = 0
        } else this.rangeIndex = SS
      }
      nextChunk() {
        this.chunkIndex++, this.rangeIndex = 0, this.next()
      }
      compare(SS) {
        return this.from - SS.from || this.startSide - SS.startSide || this.rank - SS.rank || this.to - SS.to || this.endSide - SS.endSide
      }
    }
    class FH {
      constructor(SS) {
        this.heap = SS
      }
      static from(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          tS = [];
        for (let bS = 0; bS < SS.length; bS++)
          for (let XS = SS[bS]; !XS.IK; XS = XS.nextLayer) XS.ttS >= gS && tS.push(new MH(XS, HS, gS, bS));
        return 1 == tS.length ? tS[0] : new FH(tS)
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      goto(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        for (let gS of this.heap) gS.goto(SS, HS);
        for (let gS = this.heap.length >> 1; gS >= 0; gS--) RH(this.heap, gS);
        return this.next(), this
      }
      forward(SS, HS) {
        for (let gS of this.heap) gS.forward(SS, HS);
        for (let gS = this.heap.length >> 1; gS >= 0; gS--) RH(this.heap, gS);
        (this.to - SS || this.value.endSide - HS) < 0 && this.next()
      }
      next() {
        if (0 == this.heap.length) this.from = this.to = 1e9, this.value = null, this.rank = -1;
        else {
          let SS = this.heap[0];
          this.from = SS.from, this.to = SS.to, this.value = SS.value, this.rank = SS.rank, SS.value && SS.next(), RH(this.heap, 0)
        }
      }
    }

    function RH(SS, HS) {
      for (let gS = SS[HS];;) {
        let tS = 1 + (HS << 1);
        if (tS >= SS.length) break;
        let bS = SS[tS];
        if (tS + 1 < SS.length && bS.compare(SS[tS + 1]) >= 0 && (bS = SS[tS + 1], tS++), gS.compare(bS) < 0) break;
        SS[tS] = gS, SS[HS] = bS, HS = tS
      }
    }
    class TH {
      constructor(SS, HS, gS) {
        this.btS = gS, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = FH.from(SS, HS, gS)
      }
      goto(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.cursor.goto(SS, HS), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = SS, this.endSide = HS, this.openStart = -1, this.next(), this
      }
      forward(SS, HS) {
        for (; this.minActive > -1 && (this.activeTo[this.minActive] - SS || this.active[this.minActive].endSide - HS) < 0;) this.removeActive(this.minActive);
        this.cursor.forward(SS, HS)
      }
      removeActive(SS) {
        mH(this.active, SS), mH(this.activeTo, SS), mH(this.activeRank, SS), this.minActive = rH(this.active, this.activeTo)
      }
      addActive(SS) {
        let HS = 0,
          {
            value: gS,
            to: tS,
            rank: bS
          } = this.cursor;
        for (; HS < this.activeRank.length && (bS - this.activeRank[HS] || tS - this.activeTo[HS]) > 0;) HS++;
        eH(this.active, HS, gS), eH(this.activeTo, HS, tS), eH(this.activeRank, HS, bS), SS && eH(SS, HS, this.cursor.from), this.minActive = rH(this.active, this.activeTo)
      }
      next() {
        let SS = this.to,
          HS = this.point;
        this.point = null;
        let gS = this.openStart < 0 ? [] : null;
        for (;;) {
          let tS = this.minActive;
          if (tS > -1 && (this.activeTo[tS] - this.cursor.from || this.active[tS].endSide - this.cursor.startSide) < 0) {
            if (this.activeTo[tS] > SS) {
              this.to = this.activeTo[tS], this.endSide = this.active[tS].endSide;
              break
            }
            this.removeActive(tS), gS && mH(gS, tS)
          } else {
            if (!this.cursor.value) {
              this.to = this.endSide = 1e9;
              break
            }
            if (this.cursor.from > SS) {
              this.to = this.cursor.from, this.endSide = this.cursor.startSide;
              break
            } {
              let SS = this.cursor.value;
              if (SS.point) {
                if (!(HS && this.cursor.to == this.to && this.cursor.from < this.cursor.to)) {
                  this.point = SS, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = SS.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
                  break
                }
                this.cursor.next()
              } else this.addActive(gS), this.cursor.next()
            }
          }
        }
        if (gS) {
          this.openStart = 0;
          for (let HS = gS.length - 1; HS >= 0 && gS[HS] < SS; HS--) this.openStart++
        }
      }
      activeForPoint(SS) {
        if (!this.active.length) return this.active;
        let HS = [];
        for (let gS = this.active.length - 1; gS >= 0 && !(this.activeRank[gS] < this.pointRank); gS--)(this.activeTo[gS] > SS || this.activeTo[gS] == SS && this.active[gS].endSide >= this.point.endSide) && HS.push(this.active[gS]);
        return HS.reverse()
      }
      openEnd(SS) {
        let HS = 0;
        for (let gS = this.activeTo.length - 1; gS >= 0 && this.activeTo[gS] > SS; gS--) HS++;
        return HS
      }
    }

    function oH(SS, HS, gS, tS, bS, XS) {
      SS.goto(HS), gS.goto(tS);
      let xS = tS + bS,
        NS = tS,
        qS = tS - HS,
        uS = !!XS.boundChange;
      for (let IS = !1;;) {
        let HS = SS.to + qS - gS.to,
          tS = HS || SS.endSide - gS.endSide,
          bS = tS < 0 ? SS.to + qS : gS.to,
          fS = Math.min(bS, xS);
        if (SS.point || gS.point ? (SS.point && gS.point && iH(SS.point, gS.point) && lH(SS.activeForPoint(SS.to), gS.activeForPoint(gS.to)) || XS.comparePoint(NS, fS, SS.point, gS.point), IS = !1) : (IS && XS.boundChange(NS), fS > NS && !lH(SS.active, gS.active) && XS.compareRange(NS, fS, SS.active, gS.active), uS && fS < xS && (HS || SS.openEnd(bS) != gS.openEnd(bS)) && (IS = !0)), bS > xS) break;
        NS = bS, tS <= 0 && SS.next(), tS >= 0 && gS.next()
      }
    }

    function lH(SS, HS) {
      if (SS.length != HS.length) return !1;
      for (let gS = 0; gS < SS.length; gS++)
        if (SS[gS] != HS[gS] && !iH(SS[gS], HS[gS])) return !1;
      return !0
    }

    function mH(SS, HS) {
      for (let gS = HS, tS = SS.length - 1; gS < tS; gS++) SS[gS] = SS[gS + 1];
      SS.pop()
    }

    function eH(SS, HS, gS) {
      for (let tS = SS.length - 1; tS >= HS; tS--) SS[tS + 1] = SS[tS];
      SS[HS] = gS
    }

    function rH(SS, HS) {
      let gS = -1,
        tS = 1e9;
      for (let bS = 0; bS < HS.length; bS++)(HS[bS] - tS || SS[bS].endSide - SS[gS].endSide) < 0 && (gS = bS, tS = HS[bS]);
      return gS
    }

    function Sg(SS, HS) {
      let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : SS.length,
        tS = 0;
      for (let bS = 0; bS < gS && bS < SS.length;) 9 == SS.charCodeAt(bS) ? (tS += HS - tS % HS, bS++) : (tS++, bS = JS(SS, bS));
      return tS
    }

    function Hg(SS, HS, gS, tS) {
      for (let bS = 0, XS = 0;;) {
        if (XS >= HS) return bS;
        if (bS == SS.length) break;
        XS += 9 == SS.charCodeAt(bS) ? gS - XS % gS : 1, bS = JS(SS, bS)
      }
      return !0 === tS ? -1 : SS.length
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);