export const id = 265;
export const ids = [265];
export const modules = {
  39153: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => TW,
      i: () => YF,
      ChangeSet: () => MF,
      l: () => ZW,
      m: () => nF,
      q: () => cS,
      t: () => wF,
      v: () => oF,
      x: () => AW,
      C: () => nW,
      A: () => HW,
      G: () => zS,
      H: () => qS,
      J: () => pF,
      L: () => rW,
      P: () => VW,
      S: () => mW,
      W: () => xW,
      Y: () => GW,
      $: () => FS,
      bb: () => LF,
      db: () => WS,
      fb: () => OF
    });
    let CF = [],
      AF = [];

    function uF(FF) {
      if (FF < 768) return !1;
      for (let WF = 0, SF = CF.length;;) {
        let uF = WF + SF >> 1;
        if (FF < CF[uF]) SF = uF;
        else {
          if (!(FF >= AF[uF])) return !0;
          WF = uF + 1
        }
        if (WF == SF) return !1
      }
    }

    function hF(FF) {
      return FF >= 127462 && FF <= 127487
    }(() => {
      let FF = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((FF => FF ? parseInt(FF, 36) : 1));
      for (let WF = 0, SF = 0; WF < FF.length; WF++)(WF % 2 ? AF : CF).push(SF += FF[WF])
    })();
    const bW = 8205;

    function dF(FF, WF) {
      return (!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2] ? PF : RF)(FF, WF, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function PF(FF, WF, SF) {
      if (WF == FF.length) return WF;
      WF && eF(FF.charCodeAt(WF)) && EF(FF.charCodeAt(WF - 1)) && WF--;
      let CF = iW(FF, WF);
      for (WF += QF(CF); WF < FF.length;) {
        let AF = iW(FF, WF);
        if (CF == bW || AF == bW || SF && uF(AF)) WF += QF(AF), CF = AF;
        else {
          if (!hF(AF)) break;
          {
            let SF = 0,
              CF = WF - 2;
            for (; CF >= 0 && hF(iW(FF, CF));) SF++, CF -= 2;
            if (SF % 2 == 0) break;
            WF += 2
          }
        }
      }
      return WF
    }

    function RF(FF, WF, SF) {
      for (; WF > 0;) {
        let CF = PF(FF, WF - 2, SF);
        if (CF < WF) return CF;
        WF--
      }
      return 0
    }

    function iW(FF, WF) {
      let SF = FF.charCodeAt(WF);
      if (!EF(SF) || WF + 1 == FF.length) return SF;
      let CF = FF.charCodeAt(WF + 1);
      return eF(CF) ? CF - 56320 + (SF - 55296 << 10) + 65536 : SF
    }

    function eF(FF) {
      return FF >= 56320 && FF < 57344
    }

    function EF(FF) {
      return FF >= 55296 && FF < 56320
    }

    function QF(FF) {
      return FF < 65536 ? 1 : 2
    }
    class rW {
      lineAt(FF) {
        if (FF < 0 || FF > this.length) throw new RangeError(`Invalid position ${FF} in document of length ${this.length}`);
        return this.lineInner(FF, !1, 1, 0)
      }
      line(FF) {
        if (FF < 1 || FF > this.lines) throw new RangeError(`Invalid line number ${FF} in ${this.lines}-line document`);
        return this.lineInner(FF, !0, 1, 0)
      }
      replace(FF, WF, SF) {
        [FF, WF] = DF(this, FF, WF);
        let CF = [];
        return this.decompose(0, FF, CF, 2), SF.length && SF.decompose(0, SF.length, CF, 3), this.decompose(WF, this.length, CF, 1), tW.from(CF, this.length - (WF - FF) + SF.length)
      }
      append(FF) {
        return this.replace(this.length, this.length, FF)
      }
      slice(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        [FF, WF] = DF(this, FF, WF);
        let SF = [];
        return this.decompose(FF, WF, SF, 0), tW.from(SF, WF - FF)
      }
      eq(FF) {
        if (FF == this) return !0;
        if (FF.length != this.length || FF.lines != this.lines) return !1;
        let WF = this.scanIdentical(FF, 1),
          SF = this.length - this.scanIdentical(FF, -1),
          CF = new kW(this),
          AF = new kW(FF);
        for (let uF = WF, hF = WF;;) {
          if (CF.next(uF), AF.next(uF), uF = 0, CF.lineBreak != AF.lineBreak || CF.done != AF.done || CF.value != AF.value) return !1;
          if (hF += CF.value.length, CF.done || hF >= SF) return !0
        }
      }
      iter() {
        return new kW(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1)
      }
      iterRange(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        return new qW(this, FF, WF)
      }
      iterLines(FF, WF) {
        let SF;
        if (null == FF) SF = this.iter();
        else {
          null == WF && (WF = this.lines + 1);
          let CF = this.line(FF).from;
          SF = this.iterRange(CF, Math.max(CF, WF == this.lines + 1 ? this.length : WF <= 1 ? 0 : this.line(WF - 1).to))
        }
        return new VF(SF)
      }
      toString() {
        return this.sliceString(0)
      }
      toJSON() {
        let FF = [];
        return this.flatten(FF), FF
      }
      constructor() {}
      static of (FF) {
        if (0 == FF.length) throw new RangeError("A document must have at least one line");
        return 1 != FF.length || FF[0] ? FF.length <= 32 ? new gW(FF) : tW.from(gW.split(FF, [])) : rW.empty
      }
    }
    class gW extends rW {
      constructor(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(FF) {
          let WF = -1;
          for (let SF of FF) WF += SF.length + 1;
          return WF
        }(FF);
        super(), this.text = FF, this.length = WF
      }
      get lines() {
        return this.text.length
      }
      get children() {
        return null
      }
      lineInner(FF, WF, SF, CF) {
        for (let AF = 0;; AF++) {
          let uF = this.text[AF],
            hF = CF + uF.length;
          if ((WF ? SF : hF) >= FF) return new NF(CF, hF, SF, uF);
          CF = hF + 1, SF++
        }
      }
      decompose(FF, WF, SF, CF) {
        let AF = FF <= 0 && WF >= this.length ? this : new gW(aW(this.text, FF, WF), Math.min(WF, this.length) - Math.max(0, FF));
        if (1 & CF) {
          let FF = SF.pop(),
            WF = TF(AF.text, FF.text.slice(), 0, AF.length);
          if (WF.length <= 32) SF.push(new gW(WF, FF.length + AF.length));
          else {
            let FF = WF.length >> 1;
            SF.push(new gW(WF.slice(0, FF)), new gW(WF.slice(FF)))
          }
        } else SF.push(AF)
      }
      replace(FF, WF, SF) {
        if (!(SF instanceof gW)) return super.replace(FF, WF, SF);
        [FF, WF] = DF(this, FF, WF);
        let CF = TF(this.text, TF(SF.text, aW(this.text, 0, FF)), WF),
          AF = this.length + SF.length - (WF - FF);
        return CF.length <= 32 ? new gW(CF, AF) : tW.from(gW.split(CF, []), AF)
      }
      sliceString(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [FF, WF] = DF(this, FF, WF);
        let CF = "";
        for (let AF = 0, uF = 0; AF <= WF && uF < this.text.length; uF++) {
          let hF = this.text[uF],
            bW = AF + hF.length;
          AF > FF && uF && (CF += SF), FF < bW && WF > AF && (CF += hF.slice(Math.max(0, FF - AF), WF - AF)), AF = bW + 1
        }
        return CF
      }
      flatten(FF) {
        for (let WF of this.text) FF.push(WF)
      }
      scanIdentical() {
        return 0
      }
      static split(FF, WF) {
        let SF = [],
          CF = -1;
        for (let AF of FF) SF.push(AF), CF += AF.length + 1, 32 == SF.length && (WF.push(new gW(SF, CF)), SF = [], CF = -1);
        return CF > -1 && WF.push(new gW(SF, CF)), WF
      }
    }
    class tW extends rW {
      constructor(FF, WF) {
        super(), this.children = FF, this.length = WF, this.lines = 0;
        for (let SF of FF) this.lines += SF.lines
      }
      lineInner(FF, WF, SF, CF) {
        for (let AF = 0;; AF++) {
          let uF = this.children[AF],
            hF = CF + uF.length,
            bW = SF + uF.lines - 1;
          if ((WF ? bW : hF) >= FF) return uF.lineInner(FF, WF, SF, CF);
          CF = hF + 1, SF = bW + 1
        }
      }
      decompose(FF, WF, SF, CF) {
        for (let AF = 0, uF = 0; uF <= WF && AF < this.children.length; AF++) {
          let hF = this.children[AF],
            bW = uF + hF.length;
          if (FF <= bW && WF >= uF) {
            let AF = CF & ((uF <= FF ? 1 : 0) | (bW >= WF ? 2 : 0));
            uF >= FF && bW <= WF && !AF ? SF.push(hF) : hF.decompose(FF - uF, WF - uF, SF, AF)
          }
          uF = bW + 1
        }
      }
      replace(FF, WF, SF) {
        if ([FF, WF] = DF(this, FF, WF), SF.lines < this.lines)
          for (let CF = 0, AF = 0; CF < this.children.length; CF++) {
            let uF = this.children[CF],
              hF = AF + uF.length;
            if (FF >= AF && WF <= hF) {
              let bW = uF.replace(FF - AF, WF - AF, SF),
                dF = this.lines - uF.lines + bW.lines;
              if (bW.lines < dF >> 4 && bW.lines > dF >> 6) {
                let AF = this.children.slice();
                return AF[CF] = bW, new tW(AF, this.length - (WF - FF) + SF.length)
              }
              return super.replace(AF, hF, bW)
            }
            AF = hF + 1
          }
        return super.replace(FF, WF, SF)
      }
      sliceString(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [FF, WF] = DF(this, FF, WF);
        let CF = "";
        for (let AF = 0, uF = 0; AF < this.children.length && uF <= WF; AF++) {
          let hF = this.children[AF],
            bW = uF + hF.length;
          uF > FF && AF && (CF += SF), FF < bW && WF > uF && (CF += hF.sliceString(FF - uF, WF - uF, SF)), uF = bW + 1
        }
        return CF
      }
      flatten(FF) {
        for (let WF of this.children) WF.flatten(FF)
      }
      scanIdentical(FF, WF) {
        if (!(FF instanceof tW)) return 0;
        let SF = 0,
          [CF, AF, uF, hF] = WF > 0 ? [0, 0, this.children.length, FF.children.length] : [this.children.length - 1, FF.children.length - 1, -1, -1];
        for (;; CF += WF, AF += WF) {
          if (CF == uF || AF == hF) return SF;
          let bW = this.children[CF],
            dF = FF.children[AF];
          if (bW != dF) return SF + bW.scanIdentical(dF, WF);
          SF += bW.length + 1
        }
      }
      static from(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : FF.reduce(((FF, WF) => FF + WF.length + 1), -1),
          SF = 0;
        for (let eF of FF) SF += eF.lines;
        if (SF < 32) {
          let SF = [];
          for (let WF of FF) WF.flatten(SF);
          return new gW(SF, WF)
        }
        let CF = Math.max(32, SF >> 5),
          AF = CF << 1,
          uF = CF >> 1,
          hF = [],
          bW = 0,
          dF = -1,
          PF = [];

        function RF(FF) {
          let WF;
          if (FF.lines > AF && FF instanceof tW)
            for (let SF of FF.children) RF(SF);
          else FF.lines > uF && (bW > uF || !bW) ? (iW(), hF.push(FF)) : FF instanceof gW && bW && (WF = PF[PF.length - 1]) instanceof gW && FF.lines + WF.lines <= 32 ? (bW += FF.lines, dF += FF.length + 1, PF[PF.length - 1] = new gW(WF.text.concat(FF.text), WF.length + 1 + FF.length)) : (bW + FF.lines > CF && iW(), bW += FF.lines, dF += FF.length + 1, PF.push(FF))
        }

        function iW() {
          0 != bW && (hF.push(1 == PF.length ? PF[0] : tW.from(PF, dF)), dF = -1, bW = PF.length = 0)
        }
        for (let eF of FF) RF(eF);
        return iW(), 1 == hF.length ? hF[0] : new tW(hF, WF)
      }
    }

    function TF(FF, WF) {
      let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e9;
      for (let AF = 0, uF = 0, hF = !0; uF < FF.length && AF <= CF; uF++) {
        let bW = FF[uF],
          dF = AF + bW.length;
        dF >= SF && (dF > CF && (bW = bW.slice(0, CF - AF)), AF < SF && (bW = bW.slice(SF - AF)), hF ? (WF[WF.length - 1] += bW, hF = !1) : WF.push(bW)), AF = dF + 1
      }
      return WF
    }

    function aW(FF, WF, SF) {
      return TF(FF, [""], WF, SF)
    }
    rW.empty = new gW([""], 0);
    class kW {
      constructor(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.dir = WF, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [FF], this.offsets = [WF > 0 ? 1 : (FF instanceof gW ? FF.text.length : FF.children.length) << 1]
      }
      nextInner(FF, WF) {
        for (this.done = this.lineBreak = !1;;) {
          let SF = this.nodes.length - 1,
            CF = this.nodes[SF],
            AF = this.offsets[SF],
            uF = AF >> 1,
            hF = CF instanceof gW ? CF.text.length : CF.children.length;
          if (uF == (WF > 0 ? hF : 0)) {
            if (0 == SF) return this.done = !0, this.value = "", this;
            WF > 0 && this.offsets[SF - 1]++, this.nodes.pop(), this.offsets.pop()
          } else if ((1 & AF) == (WF > 0 ? 0 : 1)) {
            if (this.offsets[SF] += WF, 0 == FF) return this.lineBreak = !0, this.value = "\n", this;
            FF--
          } else if (CF instanceof gW) {
            let AF = CF.text[uF + (WF < 0 ? -1 : 0)];
            if (this.offsets[SF] += WF, AF.length > Math.max(0, FF)) return this.value = 0 == FF ? AF : WF > 0 ? AF.slice(FF) : AF.slice(0, AF.length - FF), this;
            FF -= AF.length
          } else {
            let AF = CF.children[uF + (WF < 0 ? -1 : 0)];
            FF > AF.length ? (FF -= AF.length, this.offsets[SF] += WF) : (WF < 0 && this.offsets[SF]--, this.nodes.push(AF), this.offsets.push(WF > 0 ? 1 : (AF instanceof gW ? AF.text.length : AF.children.length) << 1))
          }
        }
      }
      next() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return FF < 0 && (this.nextInner(-FF, -this.dir), FF = this.value.length), this.nextInner(FF, this.dir)
      }
    }
    class qW {
      constructor(FF, WF, SF) {
        this.value = "", this.done = !1, this.cursor = new kW(FF, WF > SF ? -1 : 1), this.pos = WF > SF ? FF.length : 0, this.from = Math.min(WF, SF), this.to = Math.max(WF, SF)
      }
      nextInner(FF, WF) {
        if (WF < 0 ? this.pos <= this.from : this.pos >= this.to) return this.value = "", this.done = !0, this;
        FF += Math.max(0, WF < 0 ? this.pos - this.to : this.from - this.pos);
        let SF = WF < 0 ? this.pos - this.from : this.to - this.pos;
        FF > SF && (FF = SF), SF -= FF;
        let {
          value: CF
        } = this.cursor.next(FF);
        return this.pos += (CF.length + FF) * WF, this.value = CF.length <= SF ? CF : WF < 0 ? CF.slice(CF.length - SF) : CF.slice(0, SF), this.done = !this.value, this
      }
      next() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return FF < 0 ? FF = Math.max(FF, this.from - this.pos) : FF > 0 && (FF = Math.min(FF, this.to - this.pos)), this.nextInner(FF, this.cursor.dir)
      }
      get lineBreak() {
        return this.cursor.lineBreak && "" != this.value
      }
    }
    class VF {
      constructor(FF) {
        this.inner = FF, this.afterBreak = !0, this.value = "", this.done = !1
      }
      next() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          {
            done: WF,
            lineBreak: SF,
            value: CF
          } = this.inner.next(FF);
        return WF && this.afterBreak ? (this.value = "", this.afterBreak = !1) : WF ? (this.done = !0, this.value = "") : SF ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = CF, this.afterBreak = !1), this
      }
      get lineBreak() {
        return !1
      }
    }
    "undefined" != typeof Symbol && (rW.prototype[Symbol.iterator] = function() {
      return this.iter()
    }, kW.prototype[Symbol.iterator] = qW.prototype[Symbol.iterator] = VF.prototype[Symbol.iterator] = function() {
      return this
    });
    class NF {
      constructor(FF, WF, SF, CF) {
        this.from = FF, this.to = WF, this.number = SF, this.text = CF
      }
      get length() {
        return this.to - this.from
      }
    }

    function DF(FF, WF, SF) {
      return [WF = Math.max(0, Math.min(FF.length, WF)), Math.max(WF, Math.min(FF.length, SF))]
    }

    function LF(FF, WF) {
      return dF(FF, WF, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function mW(FF, WF) {
      let SF = FF.charCodeAt(WF);
      if (!((CF = SF) >= 55296 && CF < 56320) || WF + 1 == FF.length) return SF;
      var CF;
      let AF = FF.charCodeAt(WF + 1);
      return function(FF) {
        return FF >= 56320 && FF < 57344
      }(AF) ? AF - 56320 + (SF - 55296 << 10) + 65536 : SF
    }

    function OF(FF) {
      return FF <= 65535 ? String.fromCharCode(FF) : (FF -= 65536, String.fromCharCode(55296 + (FF >> 10), 56320 + (1023 & FF)))
    }

    function xW(FF) {
      return FF < 65536 ? 1 : 2
    }
    const ZF = /\r\n?|\n/;
    var oF = function(FF) {
      return FF[FF.Simple = 0] = "Simple", FF[FF.TrackDel = 1] = "TrackDel", FF[FF.TrackBefore = 2] = "TrackBefore", FF[FF.TrackAfter = 3] = "TrackAfter", FF
    }(oF || (oF = {}));
    class YF {
      constructor(FF) {
        this.sections = FF
      }
      get length() {
        let FF = 0;
        for (let WF = 0; WF < this.sections.length; WF += 2) FF += this.sections[WF];
        return FF
      }
      get newLength() {
        let FF = 0;
        for (let WF = 0; WF < this.sections.length; WF += 2) {
          let SF = this.sections[WF + 1];
          FF += SF < 0 ? this.sections[WF] : SF
        }
        return FF
      }
      get empty() {
        return 0 == this.sections.length || 2 == this.sections.length && this.sections[1] < 0
      }
      iterGaps(FF) {
        for (let WF = 0, SF = 0, CF = 0; WF < this.sections.length;) {
          let AF = this.sections[WF++],
            uF = this.sections[WF++];
          uF < 0 ? (FF(SF, CF, AF), CF += AF) : CF += uF, SF += AF
        }
      }
      iterChangedRanges(FF) {
        zW(this, FF, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get invertedDesc() {
        let FF = [];
        for (let WF = 0; WF < this.sections.length;) {
          let SF = this.sections[WF++],
            CF = this.sections[WF++];
          CF < 0 ? FF.push(SF, CF) : FF.push(CF, SF)
        }
        return new YF(FF)
      }
      composeDesc(FF) {
        return this.empty ? FF : FF.empty ? this : fF(this, FF)
      }
      mapDesc(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return FF.empty ? this : IF(this, FF, WF)
      }
      mapPos(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : oF.Simple,
          CF = 0,
          AF = 0;
        for (let uF = 0; uF < this.sections.length;) {
          let hF = this.sections[uF++],
            bW = this.sections[uF++],
            dF = CF + hF;
          if (bW < 0) {
            if (dF > FF) return AF + (FF - CF);
            AF += hF
          } else {
            if (SF != oF.Simple && dF >= FF && (SF == oF.TrackDel && CF < FF && dF > FF || SF == oF.TrackBefore && CF < FF || SF == oF.TrackAfter && dF > FF)) return null;
            if (dF > FF || dF == FF && WF < 0 && !hF) return FF == CF || WF < 0 ? AF : AF + bW;
            AF += bW
          }
          CF = dF
        }
        if (FF > CF) throw new RangeError(`Position ${FF} is out of range for changeset of length ${CF}`);
        return AF
      }
      touchesRange(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : FF;
        for (let SF = 0, CF = 0; SF < this.sections.length && CF <= WF;) {
          let AF = CF + this.sections[SF++];
          if (this.sections[SF++] >= 0 && CF <= WF && AF >= FF) return !(CF < FF && AF > WF) || "cover";
          CF = AF
        }
        return !1
      }
      toString() {
        let FF = "";
        for (let WF = 0; WF < this.sections.length;) {
          let SF = this.sections[WF++],
            CF = this.sections[WF++];
          FF += (FF ? " " : "") + SF + (CF >= 0 ? ":" + CF : "")
        }
        return FF
      }
      toJSON() {
        return this.sections
      }
      static fromJSON(FF) {
        if (!Array.isArray(FF) || FF.length % 2 || FF.some((FF => "number" != typeof FF))) throw new RangeError("Invalid JSON representation of ChangeDesc");
        return new YF(FF)
      }
      static create(FF) {
        return new YF(FF)
      }
    }
    class MF extends YF {
      constructor(FF, WF) {
        super(FF), this.inserted = WF
      }
      apply(FF) {
        if (this.length != FF.length) throw new RangeError("Applying change set to a document with the wrong length");
        return zW(this, ((WF, SF, CF, AF, uF) => FF = FF.replace(CF, CF + (SF - WF), uF)), !1), FF
      }
      mapDesc(FF) {
        return IF(this, FF, arguments.length > 1 && void 0 !== arguments[1] && arguments[1], !0)
      }
      invert(FF) {
        let WF = this.sections.slice(),
          SF = [];
        for (let CF = 0, AF = 0; CF < WF.length; CF += 2) {
          let uF = WF[CF],
            hF = WF[CF + 1];
          if (hF >= 0) {
            WF[CF] = hF, WF[CF + 1] = uF;
            let bW = CF >> 1;
            for (; SF.length < bW;) SF.push(rW.empty);
            SF.push(uF ? FF.slice(AF, AF + uF) : rW.empty)
          }
          AF += uF
        }
        return new MF(WF, SF)
      }
      compose(FF) {
        return this.empty ? FF : FF.empty ? this : fF(this, FF, !0)
      }
      map(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return FF.empty ? this : IF(this, FF, WF, !0)
      }
      iterChanges(FF) {
        zW(this, FF, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get desc() {
        return YF.create(this.sections)
      }
      filter(FF) {
        let WF = [],
          SF = [],
          CF = [],
          AF = new yW(this);
        FF: for (let uF = 0, hF = 0;;) {
          let bW = uF == FF.length ? 1e9 : FF[uF++];
          for (; hF < bW || hF == bW && 0 == AF.len;) {
            if (AF.done) break FF;
            let FF = Math.min(AF.len, bW - hF);
            cW(CF, FF, -1);
            let uF = -1 == AF.ins ? -1 : 0 == AF.off ? AF.ins : 0;
            cW(WF, FF, uF), uF > 0 && GF(SF, WF, AF.text), AF.forward(FF), hF += FF
          }
          let dF = FF[uF++];
          for (; hF < dF;) {
            if (AF.done) break FF;
            let FF = Math.min(AF.len, dF - hF);
            cW(WF, FF, -1), cW(CF, FF, -1 == AF.ins ? -1 : 0 == AF.off ? AF.ins : 0), AF.forward(FF), hF += FF
          }
        }
        return {
          changes: new MF(WF, SF),
          filtered: YF.create(CF)
        }
      }
      toJSON() {
        let FF = [];
        for (let WF = 0; WF < this.sections.length; WF += 2) {
          let SF = this.sections[WF],
            CF = this.sections[WF + 1];
          CF < 0 ? FF.push(SF) : 0 == CF ? FF.push([SF]) : FF.push([SF].concat(this.inserted[WF >> 1].toJSON()))
        }
        return FF
      }
      static of (FF, WF, SF) {
        let CF = [],
          AF = [],
          uF = 0,
          hF = null;

        function bW() {
          if (!(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && !CF.length) return;
          uF < WF && cW(CF, WF - uF, -1);
          let FF = new MF(CF, AF);
          hF = hF ? hF.compose(FF.map(hF)) : FF, CF = [], AF = [], uF = 0
        }
        return function FF(dF) {
          if (Array.isArray(dF))
            for (let WF of dF) FF(WF);
          else if (dF instanceof MF) {
            if (dF.length != WF) throw new RangeError(`Mismatched change set length (got ${dF.length}, expected ${WF})`);
            bW(), hF = hF ? hF.compose(dF.map(hF)) : dF
          } else {
            let {
              from: FF,
              to: hF = FF,
              insert: PF
            } = dF;
            if (FF > hF || FF < 0 || hF > WF) throw new RangeError(`Invalid change range ${FF} to ${hF} (in doc of length ${WF})`);
            let RF = PF ? "string" == typeof PF ? rW.of(PF.split(SF || ZF)) : PF : rW.empty,
              iW = RF.length;
            if (FF == hF && 0 == iW) return;
            FF < uF && bW(), FF > uF && cW(CF, FF - uF, -1), cW(CF, hF - FF, iW), GF(AF, CF, RF), uF = hF
          }
        }(FF), bW(!hF), hF
      }
      static empty(FF) {
        return new MF(FF ? [FF, -1] : [], [])
      }
      static fromJSON(FF) {
        if (!Array.isArray(FF)) throw new RangeError("Invalid JSON representation of ChangeSet");
        let WF = [],
          SF = [];
        for (let CF = 0; CF < FF.length; CF++) {
          let AF = FF[CF];
          if ("number" == typeof AF) WF.push(AF, -1);
          else {
            if (!Array.isArray(AF) || "number" != typeof AF[0] || AF.some(((FF, WF) => WF && "string" != typeof FF))) throw new RangeError("Invalid JSON representation of ChangeSet");
            if (1 == AF.length) WF.push(AF[0], 0);
            else {
              for (; SF.length < CF;) SF.push(rW.empty);
              SF[CF] = rW.of(AF.slice(1)), WF.push(AF[0], SF[CF].length)
            }
          }
        }
        return new MF(WF, SF)
      }
      static createSet(FF, WF) {
        return new MF(FF, WF)
      }
    }

    function cW(FF, WF, SF) {
      let CF = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (0 == WF && SF <= 0) return;
      let AF = FF.length - 2;
      AF >= 0 && SF <= 0 && SF == FF[AF + 1] ? FF[AF] += WF : AF >= 0 && 0 == WF && 0 == FF[AF] ? FF[AF + 1] += SF : CF ? (FF[AF] += WF, FF[AF + 1] += SF) : FF.push(WF, SF)
    }

    function GF(FF, WF, SF) {
      if (0 == SF.length) return;
      let CF = WF.length - 2 >> 1;
      if (CF < FF.length) FF[FF.length - 1] = FF[FF.length - 1].append(SF);
      else {
        for (; FF.length < CF;) FF.push(rW.empty);
        FF.push(SF)
      }
    }

    function zW(FF, WF, SF) {
      let CF = FF.inserted;
      for (let AF = 0, uF = 0, hF = 0; hF < FF.sections.length;) {
        let bW = FF.sections[hF++],
          dF = FF.sections[hF++];
        if (dF < 0) AF += bW, uF += bW;
        else {
          let PF = AF,
            RF = uF,
            iW = rW.empty;
          for (; PF += bW, RF += dF, dF && CF && (iW = iW.append(CF[hF - 2 >> 1])), !(SF || hF == FF.sections.length || FF.sections[hF + 1] < 0);) bW = FF.sections[hF++], dF = FF.sections[hF++];
          WF(AF, PF, uF, RF, iW), AF = PF, uF = RF
        }
      }
    }

    function IF(FF, WF, SF) {
      let CF = [],
        AF = arguments.length > 3 && void 0 !== arguments[3] && arguments[3] ? [] : null,
        uF = new yW(FF),
        hF = new yW(WF),
        bW = 0;
      for (let dF = -1;;) {
        if (++bW > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - likely malformed ChangeSet");
        if (uF.done && hF.len || hF.done && uF.len) throw new Error("Mismatched change set lengths");
        if (-1 == uF.ins && -1 == hF.ins) {
          let FF = Math.min(uF.len, hF.len);
          cW(CF, FF, -1), uF.forward(FF), hF.forward(FF)
        } else if (hF.ins >= 0 && (uF.ins < 0 || dF == uF.i || 0 == uF.off && (hF.len < uF.len || hF.len == uF.len && !SF))) {
          let FF = hF.len;
          for (cW(CF, hF.ins, -1); FF;) {
            if (++bW > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-b");
            let WF = Math.min(uF.len, FF);
            uF.ins >= 0 && dF < uF.i && uF.len <= WF && (cW(CF, 0, uF.ins), AF && GF(AF, CF, uF.text), dF = uF.i), uF.forward(WF), FF -= WF
          }
          hF.next()
        } else {
          if (!(uF.ins >= 0)) {
            if (uF.done && hF.done) return AF ? MF.createSet(CF, AF) : YF.create(CF);
            throw new Error("Mismatched change set lengths")
          } {
            let FF = 0,
              WF = uF.len;
            for (; WF;) {
              if (++bW > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-a");
              if (-1 == hF.ins) {
                let SF = Math.min(WF, hF.len);
                FF += SF, WF -= SF, hF.forward(SF)
              } else {
                if (!(0 == hF.ins && hF.len < WF)) break;
                WF -= hF.len, hF.next()
              }
            }
            cW(CF, FF, dF < uF.i ? uF.ins : 0), AF && dF < uF.i && GF(AF, CF, uF.text), dF = uF.i, uF.forward(uF.len - WF)
          }
        }
      }
    }

    function fF(FF, WF) {
      let SF = [],
        CF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? [] : null,
        AF = new yW(FF),
        uF = new yW(WF),
        hF = 0;
      for (let bW = !1;;) {
        if (++hF > 2e6) throw new Error("BLOXD CODEMIRROR: composeSets exceeded max iterations - likely malformed ChangeSet");
        if (AF.done && uF.done) return CF ? MF.createSet(SF, CF) : YF.create(SF);
        if (0 == AF.ins) cW(SF, AF.len, 0, bW), AF.next();
        else if (0 != uF.len || uF.done) {
          if (AF.done || uF.done) throw new Error("Mismatched change set lengths");
          {
            let FF = Math.min(AF.len2, uF.len),
              WF = SF.length;
            if (-1 == AF.ins) {
              let WF = -1 == uF.ins ? -1 : uF.off ? 0 : uF.ins;
              cW(SF, FF, WF, bW), CF && WF && GF(CF, SF, uF.text)
            } else - 1 == uF.ins ? (cW(SF, AF.off ? 0 : AF.len, FF, bW), CF && GF(CF, SF, AF.textBit(FF))) : (cW(SF, AF.off ? 0 : AF.len, uF.off ? 0 : uF.ins, bW), CF && !uF.off && GF(CF, SF, uF.text));
            bW = (AF.ins > FF || uF.ins >= 0 && uF.len > FF) && (bW || SF.length > WF), AF.forward2(FF), uF.forward(FF)
          }
        } else cW(SF, 0, uF.ins, bW), CF && GF(CF, SF, uF.text), uF.next()
      }
    }
    class yW {
      constructor(FF) {
        this.set = FF, this.i = 0, this.next()
      }
      next() {
        let {
          sections: FF
        } = this.set;
        this.i < FF.length ? (this.len = FF[this.i++], this.ins = FF[this.i++]) : (this.len = 0, this.ins = -2), this.off = 0
      }
      get done() {
        return -2 == this.ins
      }
      get len2() {
        return this.ins < 0 ? this.len : this.ins
      }
      get text() {
        let {
          inserted: FF
        } = this.set, WF = this.i - 2 >> 1;
        return WF >= FF.length ? rW.empty : FF[WF]
      }
      textBit(FF) {
        let {
          inserted: WF
        } = this.set, SF = this.i - 2 >> 1;
        return SF >= WF.length && !FF ? rW.empty : WF[SF].slice(this.off, null == FF ? void 0 : this.off + FF)
      }
      forward(FF) {
        FF == this.len ? this.next() : (this.len -= FF, this.off += FF)
      }
      forward2(FF) {
        -1 == this.ins ? this.forward(FF) : FF == this.ins ? this.next() : (this.ins -= FF, this.off += FF)
      }
    }
    class sF {
      constructor(FF, WF, SF) {
        this.from = FF, this.to = WF, this.flags = SF
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
        let FF = 7 & this.flags;
        return 7 == FF ? null : FF
      }
      get goalColumn() {
        let FF = this.flags >> 6;
        return 16777215 == FF ? void 0 : FF
      }
      map(FF) {
        let WF, SF, CF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return this.empty ? WF = SF = FF.mapPos(this.from, CF) : (WF = FF.mapPos(this.from, 1), SF = FF.mapPos(this.to, -1)), WF == this.from && SF == this.to ? this : new sF(WF, SF, this.flags)
      }
      extend(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : FF,
          SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (FF <= this.anchor && WF >= this.anchor) return nF.range(FF, WF, void 0, void 0, SF);
        let CF = Math.abs(FF - this.anchor) > Math.abs(WF - this.anchor) ? FF : WF;
        return nF.range(this.anchor, CF, void 0, void 0, SF)
      }
      eq(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.anchor == FF.anchor && this.head == FF.head && this.goalColumn == FF.goalColumn && (!WF || !this.empty || this.assoc == FF.assoc)
      }
      toJSON() {
        return {
          anchor: this.anchor,
          head: this.head
        }
      }
      static fromJSON(FF) {
        if (!FF || "number" != typeof FF.anchor || "number" != typeof FF.head) throw new RangeError("Invalid JSON representation for SelectionRange");
        return nF.range(FF.anchor, FF.head)
      }
      static create(FF, WF, SF) {
        return new sF(FF, WF, SF)
      }
    }
    class nF {
      constructor(FF, WF) {
        this.Bu = FF, this.mainIndex = WF
      }
      map(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return FF.empty ? this : nF.create(this.Bu.map((SF => SF.map(FF, WF))), this.mainIndex)
      }
      eq(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.Bu.length != FF.Bu.length || this.mainIndex != FF.mainIndex) return !1;
        for (let SF = 0; SF < this.Bu.length; SF++)
          if (!this.Bu[SF].eq(FF.Bu[SF], WF)) return !1;
        return !0
      }
      get main() {
        return this.Bu[this.mainIndex]
      }
      asSingle() {
        return 1 == this.Bu.length ? this : new nF([this.main], 0)
      }
      addRange(FF) {
        let WF = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return nF.create([FF].concat(this.Bu), WF ? 0 : this.mainIndex + 1)
      }
      replaceRange(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.mainIndex,
          SF = this.Bu.slice();
        return SF[WF] = FF, nF.create(SF, this.mainIndex)
      }
      toJSON() {
        return {
          Bu: this.Bu.map((FF => FF.toJSON())),
          main: this.mainIndex
        }
      }
      static fromJSON(FF) {
        if (!FF || !Array.isArray(FF.Bu) || "number" != typeof FF.main || FF.main >= FF.Bu.length) throw new RangeError("Invalid JSON representation for EditorSelection");
        return new nF(FF.Bu.map((FF => sF.fromJSON(FF))), FF.main)
      }
      static single(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : FF;
        return new nF([nF.range(FF, WF)], 0)
      }
      static create(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (0 == FF.length) throw new RangeError("A selection needs at least one range");
        for (let SF = 0, CF = 0; CF < FF.length; CF++) {
          let AF = FF[CF];
          if (AF.empty ? AF.from <= SF : AF.from < SF) return nF.normalized(FF.slice(), WF);
          SF = AF.to
        }
        return new nF(FF, WF)
      }
      static cursor(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          SF = arguments.length > 2 ? arguments[2] : void 0,
          CF = arguments.length > 3 ? arguments[3] : void 0;
        return sF.create(FF, FF, (0 == WF ? 0 : WF < 0 ? 8 : 16) | (null == SF ? 7 : Math.min(6, SF)) | (null !== CF && void 0 !== CF ? CF : 16777215) << 6)
      }
      static range(FF, WF, SF, CF, AF) {
        let uF = (null !== SF && void 0 !== SF ? SF : 16777215) << 6 | (null == CF ? 7 : Math.min(6, CF));
        return AF || FF == WF || (AF = WF < FF ? 1 : -1), WF < FF ? sF.create(WF, FF, 48 | uF) : sF.create(FF, WF, (AF ? AF < 0 ? 8 : 16 : 0) | uF)
      }
      static normalized(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          SF = FF[WF];
        FF.sort(((FF, WF) => FF.from - WF.from)), WF = FF.indexOf(SF);
        for (let CF = 1; CF < FF.length; CF++) {
          let SF = FF[CF],
            AF = FF[CF - 1];
          if (SF.empty ? SF.from <= AF.to : SF.from < AF.to) {
            let uF = AF.from,
              hF = Math.max(SF.to, AF.to);
            CF <= WF && WF--, FF.splice(--CF, 2, SF.anchor > SF.head ? nF.range(hF, uF) : nF.range(uF, hF))
          }
        }
        return new nF(FF, WF)
      }
    }

    function HF(FF, WF) {
      for (let SF of FF.Bu)
        if (SF.to > WF) throw new RangeError("Selection points outside of document")
    }
    let KF = 0;
    class wF {
      constructor(FF, WF, SF, CF, AF) {
        this.combine = FF, this.compareInput = WF, this.compare = SF, this.isStatic = CF, this.id = KF++, this.default = FF([]), this.extensions = "function" == typeof AF ? AF(this) : AF
      }
      get reader() {
        return this
      }
      static define() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return new wF(FF.combine || (FF => FF), FF.compareInput || ((FF, WF) => FF === WF), FF.compare || (FF.combine ? (FF, WF) => FF === WF : XF), !!FF.static, FF.enables)
      }
      of(FF) {
        return new UF([], this, 0, FF)
      }
      compute(FF, WF) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new UF(FF, this, 1, WF)
      }
      computeN(FF, WF) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new UF(FF, this, 2, WF)
      }
      from(FF, WF) {
        return WF || (WF = FF => FF), this.compute([FF], (SF => WF(SF.field(FF))))
      }
    }

    function XF(FF, WF) {
      return FF == WF || FF.length == WF.length && FF.every(((FF, SF) => FF === WF[SF]))
    }
    class UF {
      constructor(FF, WF, SF, CF) {
        this.dependencies = FF, this.facet = WF, this.type = SF, this.value = CF, this.id = KF++
      }
      dynamicSlot(FF) {
        var WF;
        let SF = this.value,
          CF = this.facet.compareInput,
          AF = this.id,
          uF = FF[AF] >> 1,
          hF = 2 == this.type,
          bW = !1,
          dF = !1,
          PF = [];
        for (let RF of this.dependencies) "doc" == RF ? bW = !0 : "selection" == RF ? dF = !0 : 0 == (1 & (null !== (WF = FF[RF.id]) && void 0 !== WF ? WF : 1)) && PF.push(FF[RF.id]);
        return {
          create: FF => (FF.values[uF] = SF(FF), 1),
          update(FF, WF) {
            if (bW && WF.docChanged || dF && (WF.docChanged || WF.selection) || jW(FF, PF)) {
              let WF = SF(FF);
              if (hF ? !BF(WF, FF.values[uF], CF) : !CF(WF, FF.values[uF])) return FF.values[uF] = WF, 1
            }
            return 0
          },
          reconfigure: (FF, WF) => {
            let bW, dF = WF.config.address[AF];
            if (null != dF) {
              let AF = RW(WF, dF);
              if (this.dependencies.every((SF => SF instanceof wF ? WF.facet(SF) === FF.facet(SF) : !(SF instanceof pF) || WF.field(SF, !1) == FF.field(SF, !1))) || (hF ? BF(bW = SF(FF), AF, CF) : CF(bW = SF(FF), AF))) return FF.values[uF] = AF, 0
            } else bW = SF(FF);
            return FF.values[uF] = bW, 1
          }
        }
      }
    }

    function BF(FF, WF, SF) {
      if (FF.length != WF.length) return !1;
      for (let CF = 0; CF < FF.length; CF++)
        if (!SF(FF[CF], WF[CF])) return !1;
      return !0
    }

    function jW(FF, WF) {
      let SF = !1;
      for (let CF of WF) 1 & PW(FF, CF) && (SF = !0);
      return SF
    }

    function vW(FF, WF, SF) {
      let CF = SF.map((WF => FF[WF.id])),
        AF = SF.map((FF => FF.type)),
        uF = CF.filter((FF => !(1 & FF))),
        hF = FF[WF.id] >> 1;

      function bW(FF) {
        let SF = [];
        for (let WF = 0; WF < CF.length; WF++) {
          let uF = RW(FF, CF[WF]);
          if (2 == AF[WF])
            for (let FF of uF) SF.push(FF);
          else SF.push(uF)
        }
        return WF.combine(SF)
      }
      return {
        create(FF) {
          for (let WF of CF) PW(FF, WF);
          return FF.values[hF] = bW(FF), 1
        },
        update(FF, SF) {
          if (!jW(FF, uF)) return 0;
          let CF = bW(FF);
          return WF.compare(CF, FF.values[hF]) ? 0 : (FF.values[hF] = CF, 1)
        },
        reconfigure(FF, AF) {
          let uF = jW(FF, CF),
            dF = AF.config.facets[WF.id],
            PF = AF.facet(WF);
          if (dF && !uF && XF(SF, dF)) return FF.values[hF] = PF, 0;
          let RF = bW(FF);
          return WF.compare(RF, PF) ? (FF.values[hF] = PF, 0) : (FF.values[hF] = RF, 1)
        }
      }
    }
    const JF = wF.define({
      static: !0
    });
    class pF {
      constructor(FF, WF, SF, CF, AF) {
        this.id = FF, this.createF = WF, this.updateF = SF, this.compareF = CF, this.spec = AF, this.provides = void 0
      }
      static define(FF) {
        let WF = new pF(KF++, FF.create, FF.update, FF.compare || ((FF, WF) => FF === WF), FF);
        return FF.provide && (WF.provides = FF.provide(WF)), WF
      }
      create(FF) {
        let WF = FF.facet(JF).find((FF => FF.field == this));
        return ((null === WF || void 0 === WF ? void 0 : WF.create) || this.createF)(FF)
      }
      slot(FF) {
        let WF = FF[this.id] >> 1;
        return {
          create: FF => (FF.values[WF] = this.create(FF), 1),
          update: (FF, SF) => {
            let CF = FF.values[WF],
              AF = this.updateF(CF, SF);
            return this.compareF(CF, AF) ? 0 : (FF.values[WF] = AF, 1)
          },
          reconfigure: (FF, SF) => {
            let CF, AF = FF.facet(JF),
              uF = SF.facet(JF);
            return (CF = AF.find((FF => FF.field == this))) && CF != uF.find((FF => FF.field == this)) ? (FF.values[WF] = CF.create(FF), 1) : null != SF.config.address[this.id] ? (FF.values[WF] = SF.field(this), 0) : (FF.values[WF] = this.create(FF), 1)
          }
        }
      }
      init(FF) {
        return [this, JF.of({
          field: this,
          create: FF
        })]
      }
      get extension() {
        return this
      }
    }
    const lF = 4,
      FW = 3,
      WW = 2,
      SW = 1;

    function CW(FF) {
      return WF => new uW(WF, FF)
    }
    const AW = {
      highest: CW(0),
      high: CW(SW),
      default: CW(WW),
      low: CW(FW),
      lowest: CW(lF)
    };
    class uW {
      constructor(FF, WF) {
        this.inner = FF, this.prec = WF
      }
    }
    class hW {
      of(FF) {
        return new bS(this, FF)
      }
      reconfigure(FF) {
        return hW.reconfigure.of({
          compartment: this,
          extension: FF
        })
      }
      get(FF) {
        return FF.config.compartments.get(this)
      }
    }
    class bS {
      constructor(FF, WF) {
        this.compartment = FF, this.inner = WF
      }
    }
    class dW {
      constructor(FF, WF, SF, CF, AF, uF) {
        for (this.base = FF, this.compartments = WF, this.dynamicSlots = SF, this.address = CF, this.staticValues = AF, this.facets = uF, this.statusTemplate = []; this.statusTemplate.length < SF.length;) this.statusTemplate.push(0)
      }
      staticFacet(FF) {
        let WF = this.address[FF.id];
        return null == WF ? FF.default : this.staticValues[WF >> 1]
      }
      static resolve(FF, WF, SF) {
        let CF = [],
          AF = Object.create(null),
          uF = new Map;
        for (let iW of function(FF, WF, SF) {
            let CF = [
                [],
                [],
                [],
                [],
                []
              ],
              AF = new Map;

            function uF(FF, hF) {
              let bW = AF.get(FF);
              if (null != bW) {
                if (bW <= hF) return;
                let WF = CF[bW].indexOf(FF);
                WF > -1 && CF[bW].splice(WF, 1), FF instanceof bS && SF.delete(FF.compartment)
              }
              if (AF.set(FF, hF), Array.isArray(FF))
                for (let WF of FF) uF(WF, hF);
              else if (FF instanceof bS) {
                if (SF.has(FF.compartment)) throw new RangeError("Duplicate use of compartment in extensions");
                let CF = WF.get(FF.compartment) || FF.inner;
                SF.set(FF.compartment, CF), uF(CF, hF)
              } else if (FF instanceof uW) uF(FF.inner, FF.prec);
              else if (FF instanceof pF) CF[hF].push(FF), FF.provides && uF(FF.provides, hF);
              else if (FF instanceof UF) CF[hF].push(FF), FF.facet.extensions && uF(FF.facet.extensions, WW);
              else {
                let WF = FF.extension;
                if (!WF) throw new Error(`Unrecognized extension value in extension set (${FF}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
                uF(WF, hF)
              }
            }
            return uF(FF, WW), CF.reduce(((FF, WF) => FF.concat(WF)))
          }(FF, WF, uF)) iW instanceof pF ? CF.push(iW) : (AF[iW.facet.id] || (AF[iW.facet.id] = [])).push(iW);
        let hF = Object.create(null),
          bW = [],
          dF = [];
        for (let iW of CF) hF[iW.id] = dF.length << 1, dF.push((FF => iW.slot(FF)));
        let PF = null === SF || void 0 === SF ? void 0 : SF.config.facets;
        for (let iW in AF) {
          let FF = AF[iW],
            WF = FF[0].facet,
            CF = PF && PF[iW] || [];
          if (FF.every((FF => 0 == FF.type)))
            if (hF[WF.id] = bW.length << 1 | 1, XF(CF, FF)) bW.push(SF.facet(WF));
            else {
              let CF = WF.combine(FF.map((FF => FF.value)));
              bW.push(SF && WF.compare(CF, SF.facet(WF)) ? SF.facet(WF) : CF)
            }
          else {
            for (let WF of FF) 0 == WF.type ? (hF[WF.id] = bW.length << 1 | 1, bW.push(WF.value)) : (hF[WF.id] = dF.length << 1, dF.push((FF => WF.dynamicSlot(FF))));
            hF[WF.id] = dF.length << 1, dF.push((SF => vW(SF, WF, FF)))
          }
        }
        let RF = dF.map((FF => FF(hF)));
        return new dW(FF, uF, RF, hF, bW, AF)
      }
    }

    function PW(FF, WF) {
      if (1 & WF) return 2;
      let SF = WF >> 1,
        CF = FF.status[SF];
      if (4 == CF) throw new Error("Cyclic dependency between fields and/or facets");
      if (2 & CF) return CF;
      FF.status[SF] = 4;
      let AF = FF.computeSlot(FF, FF.config.dynamicSlots[SF]);
      return FF.status[SF] = 2 | AF
    }

    function RW(FF, WF) {
      return 1 & WF ? FF.config.staticValues[WF >> 1] : FF.values[WF >> 1]
    }
    const iS = wF.define(),
      eW = wF.define({
        combine: FF => FF.some((FF => FF)),
        static: !0
      }),
      EW = wF.define({
        combine: FF => FF.length ? FF[0] : void 0,
        static: !0
      }),
      QW = wF.define(),
      rS = wF.define(),
      gS = wF.define(),
      tS = wF.define({
        combine: FF => !!FF.length && FF[0]
      });
    class TW {
      constructor(FF, WF) {
        this.type = FF, this.value = WF
      }
      static define() {
        return new aS
      }
    }
    class aS {
      of(FF) {
        return new TW(this, FF)
      }
    }
    class kS {
      constructor(FF) {
        this.map = FF
      }
      of(FF) {
        return new qS(this, FF)
      }
    }
    class qS {
      constructor(FF, WF) {
        this.type = FF, this.value = WF
      }
      map(FF) {
        let WF = this.type.map(this.value, FF);
        return void 0 === WF ? void 0 : WF == this.value ? this : new qS(this.type, WF)
      }
      is(FF) {
        return this.type == FF
      }
      static define() {
        return new kS((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).map || (FF => FF))
      }
      static mapEffects(FF, WF) {
        if (!FF.length) return FF;
        let SF = [];
        for (let CF of FF) {
          let FF = CF.map(WF);
          FF && SF.push(FF)
        }
        return SF
      }
    }
    qS.reconfigure = qS.define(), qS.appendConfig = qS.define();
    class VW {
      constructor(FF, WF, SF, CF, AF, uF) {
        this.startState = FF, this.changes = WF, this.selection = SF, this.effects = CF, this.annotations = AF, this.scrollIntoView = uF, this._doc = null, this._state = null, SF && HF(SF, WF.newLength), AF.some((FF => FF.type == VW.time)) || (this.annotations = AF.concat(VW.time.of(Date.now())))
      }
      static create(FF, WF, SF, CF, AF, uF) {
        return new VW(FF, WF, SF, CF, AF, uF)
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
      annotation(FF) {
        for (let WF of this.annotations)
          if (WF.type == FF) return WF.value
      }
      get docChanged() {
        return !this.changes.empty
      }
      get reconfigured() {
        return this.startState.config != this.state.config
      }
      isUserEvent(FF) {
        let WF = this.annotation(VW.userEvent);
        return !(!WF || !(WF == FF || WF.length > FF.length && WF.slice(0, FF.length) == FF && "." == WF[FF.length]))
      }
    }

    function NW(FF, WF) {
      let SF = [];
      for (let CF = 0, AF = 0;;) {
        let uF, hF;
        if (CF < FF.length && (AF == WF.length || WF[AF] >= FF[CF])) uF = FF[CF++], hF = FF[CF++];
        else {
          if (!(AF < WF.length)) return SF;
          uF = WF[AF++], hF = WF[AF++]
        }!SF.length || SF[SF.length - 1] < uF ? SF.push(uF, hF) : SF[SF.length - 1] < hF && (SF[SF.length - 1] = hF)
      }
    }

    function DW(FF, WF, SF) {
      var CF;
      let AF, uF, hF;
      return SF ? (AF = WF.changes, uF = MF.empty(WF.changes.length), hF = FF.changes.compose(WF.changes)) : (AF = WF.changes.map(FF.changes), uF = FF.changes.mapDesc(WF.changes, !0), hF = FF.changes.compose(AF)), {
        changes: hF,
        selection: WF.selection ? WF.selection.map(uF) : null === (CF = FF.selection) || void 0 === CF ? void 0 : CF.map(AF),
        effects: qS.mapEffects(FF.effects, AF).concat(qS.mapEffects(WF.effects, uF)),
        annotations: FF.annotations.length ? FF.annotations.concat(WF.annotations) : WF.annotations,
        scrollIntoView: FF.scrollIntoView || WF.scrollIntoView
      }
    }

    function LW(FF, WF, SF) {
      let CF = WF.selection,
        AF = xS(WF.annotations);
      return WF.userEvent && (AF = AF.concat(VW.userEvent.of(WF.userEvent))), {
        changes: WF.changes instanceof MF ? WF.changes : MF.of(WF.changes || [], SF, FF.facet(EW)),
        selection: CF && (CF instanceof nF ? CF : nF.single(CF.anchor, CF.head)),
        effects: xS(WF.effects),
        annotations: AF,
        scrollIntoView: !!WF.scrollIntoView
      }
    }

    function mS(FF, WF, SF) {
      let CF = LW(FF, WF.length ? WF[0] : {}, FF.doc.length);
      WF.length && !1 === WF[0].filter && (SF = !1);
      for (let uF = 1; uF < WF.length; uF++) {
        !1 === WF[uF].filter && (SF = !1);
        let AF = !!WF[uF].sequential;
        CF = DW(CF, LW(FF, WF[uF], AF ? CF.changes.newLength : FF.doc.length), AF)
      }
      let AF = VW.create(FF, CF.changes, CF.selection, CF.effects, CF.annotations, CF.scrollIntoView);
      return function(FF) {
        let WF = FF.startState,
          SF = WF.facet(gS),
          CF = FF;
        for (let AF = SF.length - 1; AF >= 0; AF--) {
          let uF = SF[AF](FF);
          uF && Object.keys(uF).length && (CF = DW(CF, LW(WF, uF, FF.changes.newLength), !0))
        }
        return CF == FF ? FF : VW.create(WF, FF.changes, FF.selection, CF.effects, CF.annotations, CF.scrollIntoView)
      }(SF ? function(FF) {
        let WF = FF.startState,
          SF = !0;
        for (let AF of WF.facet(QW)) {
          let WF = AF(FF);
          if (!1 === WF) {
            SF = !1;
            break
          }
          Array.isArray(WF) && (SF = !0 === SF ? WF : NW(SF, WF))
        }
        if (!0 !== SF) {
          let CF, AF;
          if (!1 === SF) AF = FF.changes.invertedDesc, CF = MF.empty(WF.doc.length);
          else {
            let WF = FF.changes.filter(SF);
            CF = WF.changes, AF = WF.filtered.mapDesc(WF.changes).invertedDesc
          }
          FF = VW.create(WF, CF, FF.selection && FF.selection.map(AF), qS.mapEffects(FF.effects, AF), FF.annotations, FF.scrollIntoView)
        }
        let CF = WF.facet(rS);
        for (let AF = CF.length - 1; AF >= 0; AF--) {
          let SF = CF[AF](FF);
          FF = SF instanceof VW ? SF : Array.isArray(SF) && 1 == SF.length && SF[0] instanceof VW ? SF[0] : mS(WF, xS(SF), !1)
        }
        return FF
      }(AF) : AF)
    }
    VW.time = TW.define(), VW.userEvent = TW.define(), VW.addToHistory = TW.define(), VW.remote = TW.define();
    const OW = [];

    function xS(FF) {
      return null == FF ? OW : Array.isArray(FF) ? FF : [FF]
    }
    var ZW = function(FF) {
      return FF[FF.Word = 0] = "Word", FF[FF.Space = 1] = "Space", FF[FF.Other = 2] = "Other", FF
    }(ZW || (ZW = {}));
    const oW = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
    let YW;
    try {
      YW = new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u")
    } catch (SS) {}

    function MW(FF) {
      return WF => {
        if (!/\S/.test(WF)) return ZW.Space;
        if (function(FF) {
            if (YW) return YW.test(FF);
            for (let WF = 0; WF < FF.length; WF++) {
              let SF = FF[WF];
              if (/\w/.test(SF) || SF > "\x80" && (SF.toUpperCase() != SF.toLowerCase() || oW.test(SF))) return !0
            }
            return !1
          }(WF)) return ZW.Word;
        for (let SF = 0; SF < FF.length; SF++)
          if (WF.indexOf(FF[SF]) > -1) return ZW.Word;
        return ZW.Other
      }
    }
    class cS {
      constructor(FF, WF, SF, CF, AF, uF) {
        this.config = FF, this.doc = WF, this.selection = SF, this.values = CF, this.status = FF.statusTemplate.slice(), this.computeSlot = AF, uF && (uF._state = this);
        for (let hF = 0; hF < this.config.dynamicSlots.length; hF++) PW(this, hF << 1);
        this.computeSlot = null
      }
      field(FF) {
        let WF = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          SF = this.config.address[FF.id];
        if (null != SF) return PW(this, SF), RW(this, SF);
        if (WF) throw new RangeError("Field is not present in this state")
      }
      update() {
        for (var FF = arguments.length, WF = new Array(FF), SF = 0; SF < FF; SF++) WF[SF] = arguments[SF];
        return mS(this, WF, !0)
      }
      applyTransaction(FF) {
        let WF, SF = this.config,
          {
            base: CF,
            compartments: AF
          } = SF;
        for (let hF of FF.effects) hF.is(hW.reconfigure) ? (SF && (AF = new Map, SF.compartments.forEach(((FF, WF) => AF.set(WF, FF))), SF = null), AF.set(hF.value.compartment, hF.value.extension)) : hF.is(qS.reconfigure) ? (SF = null, CF = hF.value) : hF.is(qS.appendConfig) && (SF = null, CF = xS(CF).concat(hF.value));
        if (SF) WF = FF.startState.values.slice();
        else {
          SF = dW.resolve(CF, AF, this), WF = new cS(SF, this.doc, this.selection, SF.dynamicSlots.map((() => null)), ((FF, WF) => WF.reconfigure(FF, this)), null).values
        }
        let uF = FF.startState.facet(eW) ? FF.newSelection : FF.newSelection.asSingle();
        new cS(SF, FF.newDoc, uF, WF, ((WF, SF) => SF.update(WF, FF)), FF)
      }
      replaceSelection(FF) {
        return "string" == typeof FF && (FF = this.toText(FF)), this.changeByRange((WF => ({
          changes: {
            from: WF.from,
            to: WF.to,
            insert: FF
          },
          range: nF.cursor(WF.from + FF.length)
        })))
      }
      changeByRange(FF) {
        let WF = this.selection,
          SF = FF(WF.Bu[0]),
          CF = this.changes(SF.changes),
          AF = [SF.range],
          uF = xS(SF.effects);
        for (let hF = 1; hF < WF.Bu.length; hF++) {
          let SF = FF(WF.Bu[hF]),
            bW = this.changes(SF.changes),
            dF = bW.map(CF);
          for (let FF = 0; FF < hF; FF++) AF[FF] = AF[FF].map(dF);
          let PF = CF.mapDesc(bW, !0);
          AF.push(SF.range.map(PF)), CF = CF.compose(dF), uF = qS.mapEffects(uF, dF).concat(qS.mapEffects(xS(SF.effects), PF))
        }
        return {
          changes: CF,
          selection: nF.create(AF, WF.mainIndex),
          effects: uF
        }
      }
      changes() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return FF instanceof MF ? FF : MF.of(FF, this.doc.length, this.facet(cS.lineSeparator))
      }
      toText(FF) {
        return rW.of(FF.split(this.facet(cS.lineSeparator) || ZF))
      }
      sliceDoc() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.doc.length;
        return this.doc.sliceString(FF, WF, this.lineBreak)
      }
      facet(FF) {
        let WF = this.config.address[FF.id];
        return null == WF ? FF.default : (PW(this, WF), RW(this, WF))
      }
      toJSON(FF) {
        let WF = {
          doc: this.sliceDoc(),
          selection: this.selection.toJSON()
        };
        if (FF)
          for (let SF in FF) {
            let CF = FF[SF];
            CF instanceof pF && null != this.config.address[CF.id] && (WF[SF] = CF.spec.toJSON(this.field(FF[SF]), this))
          }
        return WF
      }
      static fromJSON(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          SF = arguments.length > 2 ? arguments[2] : void 0;
        if (!FF || "string" != typeof FF.doc) throw new RangeError("Invalid JSON representation for EditorState");
        let CF = [];
        if (SF)
          for (let AF in SF)
            if (Object.prototype.hasOwnProperty.call(FF, AF)) {
              let WF = SF[AF],
                uF = FF[AF];
              CF.push(WF.init((FF => WF.spec.fromJSON(uF, FF))))
            } return cS.create({
          doc: FF.doc,
          selection: nF.fromJSON(FF.selection),
          extensions: WF.extensions ? CF.concat([WF.extensions]) : CF
        })
      }
      static create() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          WF = dW.resolve(FF.extensions || [], new Map),
          SF = FF.doc instanceof rW ? FF.doc : rW.of((FF.doc || "").split(WF.staticFacet(cS.lineSeparator) || ZF)),
          CF = FF.selection ? FF.selection instanceof nF ? FF.selection : nF.single(FF.selection.anchor, FF.selection.head) : nF.single(0);
        return HF(CF, SF.length), WF.staticFacet(eW) || (CF = CF.asSingle()), new cS(WF, SF, CF, WF.dynamicSlots.map((() => null)), ((FF, WF) => WF.create(FF)), null)
      }
      get tabSize() {
        return this.facet(cS.tabSize)
      }
      get lineBreak() {
        return this.facet(cS.lineSeparator) || "\n"
      }
      get readOnly() {
        return this.facet(tS)
      }
      phrase(FF) {
        for (var WF = arguments.length, SF = new Array(WF > 1 ? WF - 1 : 0), CF = 1; CF < WF; CF++) SF[CF - 1] = arguments[CF];
        for (let AF of this.facet(cS.phrases))
          if (Object.prototype.hasOwnProperty.call(AF, FF)) {
            FF = AF[FF];
            break
          } return SF.length && (FF = FF.replace(/\$(\$|\d*)/g, ((FF, WF) => {
          if ("$" == WF) return "$";
          let CF = +(WF || 1);
          return !CF || CF > SF.length ? FF : SF[CF - 1]
        }))), FF
      }
      languageDataAt(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          CF = [];
        for (let AF of this.facet(iS))
          for (let uF of AF(this, WF, SF)) Object.prototype.hasOwnProperty.call(uF, FF) && CF.push(uF[FF]);
        return CF
      }
      charCategorizer(FF) {
        let WF = this.languageDataAt("wordChars", FF);
        return MW(WF.length ? WF[0] : "")
      }
      wordAt(FF) {
        let {
          text: WF,
          from: SF,
          length: CF
        } = this.doc.lineAt(FF), AF = this.charCategorizer(FF), uF = FF - SF, hF = FF - SF;
        for (; uF > 0;) {
          let FF = LF(WF, uF, !1);
          if (AF(WF.slice(FF, uF)) != ZW.Word) break;
          uF = FF
        }
        for (; hF < CF;) {
          let FF = LF(WF, hF);
          if (AF(WF.slice(hF, FF)) != ZW.Word) break;
          hF = FF
        }
        return uF == hF ? null : nF.range(uF + SF, hF + SF)
      }
    }

    function GW(FF, WF) {
      let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        CF = {};
      for (let AF of FF)
        for (let FF of Object.keys(AF)) {
          let WF = AF[FF],
            uF = CF[FF];
          if (void 0 === uF) CF[FF] = WF;
          else if (uF === WF || void 0 === WF);
          else {
            if (!Object.hasOwnProperty.call(SF, FF)) throw new Error("Config merge conflict for field " + FF);
            CF[FF] = SF[FF](uF, WF)
          }
        }
      for (let AF in WF) void 0 === CF[AF] && (CF[AF] = WF[AF]);
      return CF
    }
    cS.allowMultipleSelections = eW, cS.tabSize = wF.define({
      combine: FF => FF.length ? FF[0] : 4
    }), cS.lineSeparator = EW, cS.readOnly = tS, cS.phrases = wF.define({
      compare(FF, WF) {
        let SF = Object.keys(FF),
          CF = Object.keys(WF);
        return SF.length == CF.length && SF.every((SF => FF[SF] == WF[SF]))
      }
    }), cS.languageData = iS, cS.changeFilter = QW, cS.transactionFilter = rS, cS.transactionExtender = gS, hW.reconfigure = qS.define();
    class zS {
      eq(FF) {
        return this == FF
      }
      range(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : FF;
        return fW.create(FF, WF, this)
      }
    }

    function IW(FF, WF) {
      return FF == WF || FF.constructor == WF.constructor && FF.eq(WF)
    }
    zS.prototype.startSide = zS.prototype.endSide = 0, zS.prototype.point = !1, zS.prototype.mapMode = oF.TrackDel;
    class fW {
      constructor(FF, WF, SF) {
        this.from = FF, this.to = WF, this.value = SF
      }
      static create(FF, WF, SF) {
        return new fW(FF, WF, SF)
      }
    }

    function yS(FF, WF) {
      return FF.from - WF.from || FF.value.startSide - WF.value.startSide
    }
    class sW {
      constructor(FF, WF, SF, CF) {
        this.from = FF, this.to = WF, this.value = SF, this.qRF = CF
      }
      get length() {
        return this.to[this.to.length - 1]
      }
      findIndex(FF, WF, SF) {
        let CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          AF = SF ? this.to : this.from;
        for (let uF = CF, hF = AF.length;;) {
          if (uF == hF) return uF;
          let CF = uF + hF >> 1,
            bW = AF[CF] - FF || (SF ? this.value[CF].endSide : this.value[CF].startSide) - WF;
          if (CF == uF) return bW >= 0 ? uF : hF;
          bW >= 0 ? hF = CF : uF = CF + 1
        }
      }
      between(FF, WF, SF, CF) {
        for (let AF = this.findIndex(WF, -1e9, !0), uF = this.findIndex(SF, 1e9, !1, AF); AF < uF; AF++)
          if (!1 === CF(this.from[AF] + FF, this.to[AF] + FF, this.value[AF])) return !1
      }
      map(FF, WF) {
        let SF = [],
          CF = [],
          AF = [],
          uF = -1,
          hF = -1;
        for (let bW = 0; bW < this.value.length; bW++) {
          let dF, PF, RF = this.value[bW],
            iW = this.from[bW] + FF,
            eF = this.to[bW] + FF;
          if (iW == eF) {
            let FF = WF.mapPos(iW, RF.startSide, RF.mapMode);
            if (null == FF) continue;
            if (dF = PF = FF, RF.startSide != RF.endSide && (PF = WF.mapPos(iW, RF.endSide), PF < dF)) continue
          } else if (dF = WF.mapPos(iW, RF.startSide), PF = WF.mapPos(eF, RF.endSide), dF > PF || dF == PF && RF.startSide > 0 && RF.endSide <= 0) continue;
          (PF - dF || RF.endSide - RF.startSide) < 0 || (uF < 0 && (uF = dF), RF.point && (hF = Math.max(hF, PF - dF)), SF.push(RF), CF.push(dF - uF), AF.push(PF - uF))
        }
        return {
          mapped: SF.length ? new sW(CF, AF, SF, hF) : null,
          pos: uF
        }
      }
    }
    class nW {
      constructor(FF, WF, SF, CF) {
        this.chunkPos = FF, this.chunk = WF, this.nextLayer = SF, this.qRF = CF
      }
      static create(FF, WF, SF, CF) {
        return new nW(FF, WF, SF, CF)
      }
      get length() {
        let FF = this.chunk.length - 1;
        return FF < 0 ? 0 : Math.max(this.chunkEnd(FF), this.nextLayer.length)
      }
      get size() {
        if (this.QC) return 0;
        let FF = this.nextLayer.size;
        for (let WF of this.chunk) FF += WF.value.length;
        return FF
      }
      chunkEnd(FF) {
        return this.chunkPos[FF] + this.chunk[FF].length
      }
      update(FF) {
        let {
          add: WF = [],
          sort: SF = !1,
          filterFrom: CF = 0,
          filterTo: AF = this.length
        } = FF, uF = FF.filter;
        if (0 == WF.length && !uF) return this;
        if (SF && (WF = WF.slice().sort(yS)), this.QC) return WF.length ? nW.of(WF) : this;
        let hF = new wW(this, null, -1).goto(0),
          bW = 0,
          dF = [],
          PF = new HW;
        for (; hF.value || bW < WF.length;)
          if (bW < WF.length && (hF.from - WF[bW].from || hF.startSide - WF[bW].value.startSide) >= 0) {
            let FF = WF[bW++];
            PF.addInner(FF.from, FF.to, FF.value) || dF.push(FF)
          } else 1 == hF.rangeIndex && hF.chunkIndex < this.chunk.length && (bW == WF.length || this.chunkEnd(hF.chunkIndex) < WF[bW].from) && (!uF || CF > this.chunkEnd(hF.chunkIndex) || AF < this.chunkPos[hF.chunkIndex]) && PF.addChunk(this.chunkPos[hF.chunkIndex], this.chunk[hF.chunkIndex]) ? hF.nextChunk() : ((!uF || CF > hF.to || AF < hF.from || uF(hF.from, hF.to, hF.value)) && (PF.addInner(hF.from, hF.to, hF.value) || dF.push(fW.create(hF.from, hF.to, hF.value))), hF.next());
        return PF.finishInner(this.nextLayer.QC && !dF.length ? nW.empty : this.nextLayer.update({
          add: dF,
          filter: uF,
          filterFrom: CF,
          filterTo: AF
        }))
      }
      map(FF) {
        if (FF.empty || this.QC) return this;
        let WF = [],
          SF = [],
          CF = -1;
        for (let uF = 0; uF < this.chunk.length; uF++) {
          let AF = this.chunkPos[uF],
            hF = this.chunk[uF],
            bW = FF.touchesRange(AF, AF + hF.length);
          if (!1 === bW) CF = Math.max(CF, hF.qRF), WF.push(hF), SF.push(FF.mapPos(AF));
          else if (!0 === bW) {
            let {
              mapped: uF,
              pos: bW
            } = hF.map(AF, FF);
            uF && (CF = Math.max(CF, uF.qRF), WF.push(uF), SF.push(bW))
          }
        }
        let AF = this.nextLayer.map(FF);
        return 0 == WF.length ? AF : new nW(SF, WF, AF || nW.empty, CF)
      }
      between(FF, WF, SF) {
        if (!this.QC) {
          for (let CF = 0; CF < this.chunk.length; CF++) {
            let AF = this.chunkPos[CF],
              uF = this.chunk[CF];
            if (WF >= AF && FF <= AF + uF.length && !1 === uF.between(AF, FF - AF, WF - AF, SF)) return
          }
          this.nextLayer.between(FF, WF, SF)
        }
      }
      iter() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return XW.from([this]).goto(FF)
      }
      get QC() {
        return this.nextLayer == this
      }
      static iter(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return XW.from(FF).goto(WF)
      }
      static compare(FF, WF, SF, CF) {
        let AF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1,
          uF = FF.filter((FF => FF.qRF > 0 || !FF.QC && FF.qRF >= AF)),
          hF = WF.filter((FF => FF.qRF > 0 || !FF.QC && FF.qRF >= AF)),
          bW = KW(uF, hF, SF),
          dF = new BW(uF, bW, AF),
          PF = new BW(hF, bW, AF);
        SF.iterGaps(((FF, WF, SF) => jS(dF, FF, PF, WF, SF, CF))), SF.empty && 0 == SF.length && jS(dF, 0, PF, 0, 0, CF)
      }
      static eq(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          CF = arguments.length > 3 ? arguments[3] : void 0;
        null == CF && (CF = 999999999);
        let AF = FF.filter((FF => !FF.QC && WF.indexOf(FF) < 0)),
          uF = WF.filter((WF => !WF.QC && FF.indexOf(WF) < 0));
        if (AF.length != uF.length) return !1;
        if (!AF.length) return !0;
        let hF = KW(AF, uF),
          bW = new BW(AF, hF, 0).goto(SF),
          dF = new BW(uF, hF, 0).goto(SF);
        for (;;) {
          if (bW.to != dF.to || !vS(bW.active, dF.active) || bW.point && (!dF.point || !IW(bW.point, dF.point))) return !1;
          if (bW.to > CF) return !0;
          bW.next(), dF.next()
        }
      }
      static spans(FF, WF, SF, CF) {
        let AF = new BW(FF, null, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1).goto(WF),
          uF = WF,
          hF = AF.openStart;
        for (;;) {
          let FF = Math.min(AF.to, SF);
          if (AF.point) {
            let SF = AF.activeForPoint(AF.to),
              bW = AF.pointFrom < WF ? SF.length + 1 : AF.point.startSide < 0 ? SF.length : Math.min(SF.length, hF);
            CF.point(uF, FF, AF.point, SF, bW, AF.pointRank), hF = Math.min(AF.openEnd(FF), SF.length)
          } else FF > uF && (CF.span(uF, FF, AF.active, hF), hF = AF.openEnd(FF));
          if (AF.to > SF) return hF + (AF.point && AF.to > SF ? 1 : 0);
          uF = AF.to, AF.next()
        }
      }
      static of (FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          SF = new HW;
        for (let CF of FF instanceof fW ? [FF] : WF ? function(FF) {
            if (FF.length > 1)
              for (let WF = FF[0], SF = 1; SF < FF.length; SF++) {
                let CF = FF[SF];
                if (yS(WF, CF) > 0) return FF.slice().sort(yS);
                WF = CF
              }
            return FF
          }(FF) : FF) SF.add(CF.from, CF.to, CF.value);
        return SF.finish()
      }
      static join(FF) {
        if (!FF.length) return nW.empty;
        let WF = FF[FF.length - 1];
        for (let SF = FF.length - 2; SF >= 0; SF--)
          for (let CF = FF[SF]; CF != nW.empty; CF = CF.nextLayer) WF = new nW(CF.chunkPos, CF.chunk, WF, Math.max(CF.qRF, WF.qRF));
        return WF
      }
    }
    nW.empty = new nW([], [], null, -1), nW.empty.nextLayer = nW.empty;
    class HW {
      finishChunk(FF) {
        this.chunks.push(new sW(this.from, this.to, this.value, this.qRF)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.qRF), this.qRF = -1, FF && (this.from = [], this.to = [], this.value = [])
      }
      constructor() {
        this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.qRF = -1, this.setMaxPoint = -1, this.nextLayer = null
      }
      add(FF, WF, SF) {
        this.addInner(FF, WF, SF) || (this.nextLayer || (this.nextLayer = new HW)).add(FF, WF, SF)
      }
      addInner(FF, WF, SF) {
        let CF = FF - this.lastTo || SF.startSide - this.last.endSide;
        if (CF <= 0 && (FF - this.lastFrom || SF.startSide - this.last.startSide) < 0) throw new Error("Ranges must be added sorted by `from` position and `startSide`");
        return !(CF < 0) && (250 == this.from.length && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = FF), this.from.push(FF - this.chunkStart), this.to.push(WF - this.chunkStart), this.last = SF, this.lastFrom = FF, this.lastTo = WF, this.value.push(SF), SF.point && (this.qRF = Math.max(this.qRF, WF - FF)), !0)
      }
      addChunk(FF, WF) {
        if ((FF - this.lastTo || WF.value[0].startSide - this.last.endSide) < 0) return !1;
        this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, WF.qRF), this.chunks.push(WF), this.chunkPos.push(FF);
        let SF = WF.value.length - 1;
        return this.last = WF.value[SF], this.lastFrom = WF.from[SF] + FF, this.lastTo = WF.to[SF] + FF, !0
      }
      finish() {
        return this.finishInner(nW.empty)
      }
      finishInner(FF) {
        if (this.from.length && this.finishChunk(!1), 0 == this.chunks.length) return FF;
        let WF = nW.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(FF) : FF, this.setMaxPoint);
        return this.from = null, WF
      }
    }

    function KW(FF, WF, SF) {
      let CF = new Map;
      for (let uF of FF)
        for (let FF = 0; FF < uF.chunk.length; FF++) uF.chunk[FF].qRF <= 0 && CF.set(uF.chunk[FF], uF.chunkPos[FF]);
      let AF = new Set;
      for (let uF of WF)
        for (let FF = 0; FF < uF.chunk.length; FF++) {
          let WF = CF.get(uF.chunk[FF]);
          null == WF || (SF ? SF.mapPos(WF) : WF) != uF.chunkPos[FF] || (null === SF || void 0 === SF ? void 0 : SF.touchesRange(WF, WF + uF.chunk[FF].length)) || AF.add(uF.chunk[FF])
        }
      return AF
    }
    class wW {
      constructor(FF, WF, SF) {
        let CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.layer = FF, this.skip = WF, this.VPF = SF, this.rank = CF
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      get endSide() {
        return this.value ? this.value.endSide : 0
      }
      goto(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(FF, WF, !1), this
      }
      gotoInner(FF, WF, SF) {
        for (; this.chunkIndex < this.layer.chunk.length;) {
          let WF = this.layer.chunk[this.chunkIndex];
          if (!(this.skip && this.skip.has(WF) || this.layer.chunkEnd(this.chunkIndex) < FF || WF.qRF < this.VPF)) break;
          this.chunkIndex++, SF = !1
        }
        if (this.chunkIndex < this.layer.chunk.length) {
          let CF = this.layer.chunk[this.chunkIndex].findIndex(FF - this.layer.chunkPos[this.chunkIndex], WF, !0);
          (!SF || this.rangeIndex < CF) && this.setRangeIndex(CF)
        }
        this.next()
      }
      forward(FF, WF) {
        (this.to - FF || this.endSide - WF) < 0 && this.gotoInner(FF, WF, !0)
      }
      next() {
        for (;;) {
          if (this.chunkIndex == this.layer.chunk.length) {
            this.from = this.to = 1e9, this.value = null;
            break
          } {
            let FF = this.layer.chunkPos[this.chunkIndex],
              WF = this.layer.chunk[this.chunkIndex],
              SF = FF + WF.from[this.rangeIndex];
            if (this.from = SF, this.to = FF + WF.to[this.rangeIndex], this.value = WF.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.VPF < 0 || this.value.point && this.to - this.from >= this.VPF) break
          }
        }
      }
      setRangeIndex(FF) {
        if (FF == this.layer.chunk[this.chunkIndex].value.length) {
          if (this.chunkIndex++, this.skip)
            for (; this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]);) this.chunkIndex++;
          this.rangeIndex = 0
        } else this.rangeIndex = FF
      }
      nextChunk() {
        this.chunkIndex++, this.rangeIndex = 0, this.next()
      }
      compare(FF) {
        return this.from - FF.from || this.startSide - FF.startSide || this.rank - FF.rank || this.to - FF.to || this.endSide - FF.endSide
      }
    }
    class XW {
      constructor(FF) {
        this.heap = FF
      }
      static from(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          CF = [];
        for (let AF = 0; AF < FF.length; AF++)
          for (let uF = FF[AF]; !uF.QC; uF = uF.nextLayer) uF.qRF >= SF && CF.push(new wW(uF, WF, SF, AF));
        return 1 == CF.length ? CF[0] : new XW(CF)
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      goto(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        for (let SF of this.heap) SF.goto(FF, WF);
        for (let SF = this.heap.length >> 1; SF >= 0; SF--) UW(this.heap, SF);
        return this.next(), this
      }
      forward(FF, WF) {
        for (let SF of this.heap) SF.forward(FF, WF);
        for (let SF = this.heap.length >> 1; SF >= 0; SF--) UW(this.heap, SF);
        (this.to - FF || this.value.endSide - WF) < 0 && this.next()
      }
      next() {
        if (0 == this.heap.length) this.from = this.to = 1e9, this.value = null, this.rank = -1;
        else {
          let FF = this.heap[0];
          this.from = FF.from, this.to = FF.to, this.value = FF.value, this.rank = FF.rank, FF.value && FF.next(), UW(this.heap, 0)
        }
      }
    }

    function UW(FF, WF) {
      for (let SF = FF[WF];;) {
        let CF = 1 + (WF << 1);
        if (CF >= FF.length) break;
        let AF = FF[CF];
        if (CF + 1 < FF.length && AF.compare(FF[CF + 1]) >= 0 && (AF = FF[CF + 1], CF++), SF.compare(AF) < 0) break;
        FF[CF] = SF, FF[WF] = AF, WF = CF
      }
    }
    class BW {
      constructor(FF, WF, SF) {
        this.VPF = SF, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = XW.from(FF, WF, SF)
      }
      goto(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.cursor.goto(FF, WF), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = FF, this.endSide = WF, this.openStart = -1, this.next(), this
      }
      forward(FF, WF) {
        for (; this.minActive > -1 && (this.activeTo[this.minActive] - FF || this.active[this.minActive].endSide - WF) < 0;) this.removeActive(this.minActive);
        this.cursor.forward(FF, WF)
      }
      removeActive(FF) {
        JW(this.active, FF), JW(this.activeTo, FF), JW(this.activeRank, FF), this.minActive = lW(this.active, this.activeTo)
      }
      addActive(FF) {
        let WF = 0,
          {
            value: SF,
            to: CF,
            rank: AF
          } = this.cursor;
        for (; WF < this.activeRank.length && (AF - this.activeRank[WF] || CF - this.activeTo[WF]) > 0;) WF++;
        pW(this.active, WF, SF), pW(this.activeTo, WF, CF), pW(this.activeRank, WF, AF), FF && pW(FF, WF, this.cursor.from), this.minActive = lW(this.active, this.activeTo)
      }
      next() {
        let FF = this.to,
          WF = this.point;
        this.point = null;
        let SF = this.openStart < 0 ? [] : null;
        for (;;) {
          let CF = this.minActive;
          if (CF > -1 && (this.activeTo[CF] - this.cursor.from || this.active[CF].endSide - this.cursor.startSide) < 0) {
            if (this.activeTo[CF] > FF) {
              this.to = this.activeTo[CF], this.endSide = this.active[CF].endSide;
              break
            }
            this.removeActive(CF), SF && JW(SF, CF)
          } else {
            if (!this.cursor.value) {
              this.to = this.endSide = 1e9;
              break
            }
            if (this.cursor.from > FF) {
              this.to = this.cursor.from, this.endSide = this.cursor.startSide;
              break
            } {
              let FF = this.cursor.value;
              if (FF.point) {
                if (!(WF && this.cursor.to == this.to && this.cursor.from < this.cursor.to)) {
                  this.point = FF, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = FF.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
                  break
                }
                this.cursor.next()
              } else this.addActive(SF), this.cursor.next()
            }
          }
        }
        if (SF) {
          this.openStart = 0;
          for (let WF = SF.length - 1; WF >= 0 && SF[WF] < FF; WF--) this.openStart++
        }
      }
      activeForPoint(FF) {
        if (!this.active.length) return this.active;
        let WF = [];
        for (let SF = this.active.length - 1; SF >= 0 && !(this.activeRank[SF] < this.pointRank); SF--)(this.activeTo[SF] > FF || this.activeTo[SF] == FF && this.active[SF].endSide >= this.point.endSide) && WF.push(this.active[SF]);
        return WF.reverse()
      }
      openEnd(FF) {
        let WF = 0;
        for (let SF = this.activeTo.length - 1; SF >= 0 && this.activeTo[SF] > FF; SF--) WF++;
        return WF
      }
    }

    function jS(FF, WF, SF, CF, AF, uF) {
      FF.goto(WF), SF.goto(CF);
      let hF = CF + AF,
        bW = CF,
        dF = CF - WF,
        PF = !!uF.boundChange;
      for (let RF = !1;;) {
        let WF = FF.to + dF - SF.to,
          CF = WF || FF.endSide - SF.endSide,
          AF = CF < 0 ? FF.to + dF : SF.to,
          iW = Math.min(AF, hF);
        if (FF.point || SF.point ? (FF.point && SF.point && IW(FF.point, SF.point) && vS(FF.activeForPoint(FF.to), SF.activeForPoint(SF.to)) || uF.comparePoint(bW, iW, FF.point, SF.point), RF = !1) : (RF && uF.boundChange(bW), iW > bW && !vS(FF.active, SF.active) && uF.compareRange(bW, iW, FF.active, SF.active), PF && iW < hF && (WF || FF.openEnd(AF) != SF.openEnd(AF)) && (RF = !0)), AF > hF) break;
        bW = AF, CF <= 0 && FF.next(), CF >= 0 && SF.next()
      }
    }

    function vS(FF, WF) {
      if (FF.length != WF.length) return !1;
      for (let SF = 0; SF < FF.length; SF++)
        if (FF[SF] != WF[SF] && !IW(FF[SF], WF[SF])) return !1;
      return !0
    }

    function JW(FF, WF) {
      for (let SF = WF, CF = FF.length - 1; SF < CF; SF++) FF[SF] = FF[SF + 1];
      FF.pop()
    }

    function pW(FF, WF, SF) {
      for (let CF = FF.length - 1; CF >= WF; CF--) FF[CF + 1] = FF[CF];
      FF[WF] = SF
    }

    function lW(FF, WF) {
      let SF = -1,
        CF = 1e9;
      for (let AF = 0; AF < WF.length; AF++)(WF[AF] - CF || FF[AF].endSide - FF[SF].endSide) < 0 && (SF = AF, CF = WF[AF]);
      return SF
    }

    function FS(FF, WF) {
      let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : FF.length,
        CF = 0;
      for (let AF = 0; AF < SF && AF < FF.length;) 9 == FF.charCodeAt(AF) ? (CF += WF - CF % WF, AF++) : (CF++, AF = LF(FF, AF));
      return CF
    }

    function WS(FF, WF, SF, CF) {
      for (let AF = 0, uF = 0;;) {
        if (uF >= WF) return AF;
        if (AF == FF.length) break;
        uF += 9 == FF.charCodeAt(AF) ? SF - uF % SF : 1, AF = LF(FF, AF)
      }
      return !0 === CF ? -1 : FF.length
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);