export const id = 604;
export const ids = [604];
export const modules = {
  44509: (ee, ie, He) => {
    He.d(ie, {
      e: () => Bi,
      g: () => Ye,
      ChangeSet: () => Ve,
      i: () => Ai,
      k: () => me,
      o: () => ci,
      q: () => ne,
      t: () => Ae,
      x: () => bi,
      D: () => li,
      z: () => Si,
      G: () => Li,
      K: () => Oi,
      N: () => re,
      R: () => Te,
      T: () => di,
      X: () => Ze,
      $: () => De,
      cb: () => xi,
      gb: () => HH,
      kb: () => te,
      ob: () => yH,
      pb: () => we
    });
    let ye = [],
      be = [];

    function Me(ee) {
      if (ee < 768) return !1;
      for (let ie = 0, He = ye.length;;) {
        let Me = ie + He >> 1;
        if (ee < ye[Me]) He = Me;
        else {
          if (!(ee >= be[Me])) return !0;
          ie = Me + 1
        }
        if (ie == He) return !1
      }
    }

    function Ke(ee) {
      return ee >= 127462 && ee <= 127487
    }(() => {
      let ee = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((ee => ee ? parseInt(ee, 36) : 1));
      for (let ie = 0, He = 0; ie < ee.length; ie++)(ie % 2 ? be : ye).push(He += ee[ie])
    })();
    const Ue = 8205;

    function Fe(ee, ie) {
      return (!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2] ? Je : oe)(ee, ie, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function Je(ee, ie, He) {
      if (ie == ee.length) return ie;
      ie && ke(ee.charCodeAt(ie)) && qe(ee.charCodeAt(ie - 1)) && ie--;
      let ye = Re(ee, ie);
      for (ie += fe(ye); ie < ee.length;) {
        let be = Re(ee, ie);
        if (ye == Ue || be == Ue || He && Me(be)) ie += fe(be), ye = be;
        else {
          if (!Ke(be)) break;
          {
            let He = 0,
              ye = ie - 2;
            for (; ye >= 0 && Ke(Re(ee, ye));) He++, ye -= 2;
            if (He % 2 == 0) break;
            ie += 2
          }
        }
      }
      return ie
    }

    function oe(ee, ie, He) {
      for (; ie > 0;) {
        let ye = Je(ee, ie - 2, He);
        if (ye < ie) return ye;
        ie--
      }
      return 0
    }

    function Re(ee, ie) {
      let He = ee.charCodeAt(ie);
      if (!qe(He) || ie + 1 == ee.length) return He;
      let ye = ee.charCodeAt(ie + 1);
      return ke(ye) ? ye - 56320 + (He - 55296 << 10) + 65536 : He
    }

    function ke(ee) {
      return ee >= 56320 && ee < 57344
    }

    function qe(ee) {
      return ee >= 55296 && ee < 56320
    }

    function fe(ee) {
      return ee < 65536 ? 1 : 2
    }
    class Te {
      lineAt(ee) {
        if (ee < 0 || ee > this.length) throw new RangeError(`Invalid position ${ee} in document of length ${this.length}`);
        return this.lineInner(ee, !1, 1, 0)
      }
      line(ee) {
        if (ee < 1 || ee > this.lines) throw new RangeError(`Invalid line number ${ee} in ${this.lines}-line document`);
        return this.lineInner(ee, !0, 1, 0)
      }
      replace(ee, ie, He) {
        [ee, ie] = We(this, ee, ie);
        let ye = [];
        return this.decompose(0, ee, ye, 2), He.length && He.decompose(0, He.length, ye, 3), this.decompose(ie, this.length, ye, 1), Xe.from(ye, this.length - (ie - ee) + He.length)
      }
      append(ee) {
        return this.replace(this.length, this.length, ee)
      }
      slice(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        [ee, ie] = We(this, ee, ie);
        let He = [];
        return this.decompose(ee, ie, He, 0), Xe.from(He, ie - ee)
      }
      eq(ee) {
        if (ee == this) return !0;
        if (ee.length != this.length || ee.lines != this.lines) return !1;
        let ie = this.scanIdentical(ee, 1),
          He = this.length - this.scanIdentical(ee, -1),
          ye = new Ee(this),
          be = new Ee(ee);
        for (let Me = ie, Ke = ie;;) {
          if (ye.next(Me), be.next(Me), Me = 0, ye.lineBreak != be.lineBreak || ye.done != be.done || ye.value != be.value) return !1;
          if (Ke += ye.value.length, ye.done || Ke >= He) return !0
        }
      }
      iter() {
        return new Ee(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1)
      }
      iterRange(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        return new ge(this, ee, ie)
      }
      iterLines(ee, ie) {
        let He;
        if (null == ee) He = this.iter();
        else {
          null == ie && (ie = this.lines + 1);
          let ye = this.line(ee).from;
          He = this.iterRange(ye, Math.max(ye, ie == this.lines + 1 ? this.length : ie <= 1 ? 0 : this.line(ie - 1).to))
        }
        return new Oe(He)
      }
      toString() {
        return this.sliceString(0)
      }
      toJSON() {
        let ee = [];
        return this.flatten(ee), ee
      }
      constructor() {}
      static of (ee) {
        if (0 == ee.length) throw new RangeError("A document must have at least one line");
        return 1 != ee.length || ee[0] ? ee.length <= 32 ? new pe(ee) : Xe.from(pe.split(ee, [])) : Te.empty
      }
    }
    class pe extends Te {
      constructor(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(ee) {
          let ie = -1;
          for (let He of ee) ie += He.length + 1;
          return ie
        }(ee);
        super(), this.text = ee, this.length = ie
      }
      get lines() {
        return this.text.length
      }
      get children() {
        return null
      }
      lineInner(ee, ie, He, ye) {
        for (let be = 0;; be++) {
          let Me = this.text[be],
            Ke = ye + Me.length;
          if ((ie ? He : Ke) >= ee) return new de(ye, Ke, He, Me);
          ye = Ke + 1, He++
        }
      }
      decompose(ee, ie, He, ye) {
        let be = ee <= 0 && ie >= this.length ? this : new pe(Be(this.text, ee, ie), Math.min(ie, this.length) - Math.max(0, ee));
        if (1 & ye) {
          let ee = He.pop(),
            ie = ze(be.text, ee.text.slice(), 0, be.length);
          if (ie.length <= 32) He.push(new pe(ie, ee.length + be.length));
          else {
            let ee = ie.length >> 1;
            He.push(new pe(ie.slice(0, ee)), new pe(ie.slice(ee)))
          }
        } else He.push(be)
      }
      replace(ee, ie, He) {
        if (!(He instanceof pe)) return super.replace(ee, ie, He);
        [ee, ie] = We(this, ee, ie);
        let ye = ze(this.text, ze(He.text, Be(this.text, 0, ee)), ie),
          be = this.length + He.length - (ie - ee);
        return ye.length <= 32 ? new pe(ye, be) : Xe.from(pe.split(ye, []), be)
      }
      sliceString(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [ee, ie] = We(this, ee, ie);
        let ye = "";
        for (let be = 0, Me = 0; be <= ie && Me < this.text.length; Me++) {
          let Ke = this.text[Me],
            Ue = be + Ke.length;
          be > ee && Me && (ye += He), ee < Ue && ie > be && (ye += Ke.slice(Math.max(0, ee - be), ie - be)), be = Ue + 1
        }
        return ye
      }
      flatten(ee) {
        for (let ie of this.text) ee.push(ie)
      }
      scanIdentical() {
        return 0
      }
      static split(ee, ie) {
        let He = [],
          ye = -1;
        for (let be of ee) He.push(be), ye += be.length + 1, 32 == He.length && (ie.push(new pe(He, ye)), He = [], ye = -1);
        return ye > -1 && ie.push(new pe(He, ye)), ie
      }
    }
    class Xe extends Te {
      constructor(ee, ie) {
        super(), this.children = ee, this.length = ie, this.lines = 0;
        for (let He of ee) this.lines += He.lines
      }
      lineInner(ee, ie, He, ye) {
        for (let be = 0;; be++) {
          let Me = this.children[be],
            Ke = ye + Me.length,
            Ue = He + Me.lines - 1;
          if ((ie ? Ue : Ke) >= ee) return Me.lineInner(ee, ie, He, ye);
          ye = Ke + 1, He = Ue + 1
        }
      }
      decompose(ee, ie, He, ye) {
        for (let be = 0, Me = 0; Me <= ie && be < this.children.length; be++) {
          let Ke = this.children[be],
            Ue = Me + Ke.length;
          if (ee <= Ue && ie >= Me) {
            let be = ye & ((Me <= ee ? 1 : 0) | (Ue >= ie ? 2 : 0));
            Me >= ee && Ue <= ie && !be ? He.push(Ke) : Ke.decompose(ee - Me, ie - Me, He, be)
          }
          Me = Ue + 1
        }
      }
      replace(ee, ie, He) {
        if ([ee, ie] = We(this, ee, ie), He.lines < this.lines)
          for (let ye = 0, be = 0; ye < this.children.length; ye++) {
            let Me = this.children[ye],
              Ke = be + Me.length;
            if (ee >= be && ie <= Ke) {
              let Ue = Me.replace(ee - be, ie - be, He),
                Fe = this.lines - Me.lines + Ue.lines;
              if (Ue.lines < Fe >> 4 && Ue.lines > Fe >> 6) {
                let be = this.children.slice();
                return be[ye] = Ue, new Xe(be, this.length - (ie - ee) + He.length)
              }
              return super.replace(be, Ke, Ue)
            }
            be = Ke + 1
          }
        return super.replace(ee, ie, He)
      }
      sliceString(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [ee, ie] = We(this, ee, ie);
        let ye = "";
        for (let be = 0, Me = 0; be < this.children.length && Me <= ie; be++) {
          let Ke = this.children[be],
            Ue = Me + Ke.length;
          Me > ee && be && (ye += He), ee < Ue && ie > Me && (ye += Ke.sliceString(ee - Me, ie - Me, He)), Me = Ue + 1
        }
        return ye
      }
      flatten(ee) {
        for (let ie of this.children) ie.flatten(ee)
      }
      scanIdentical(ee, ie) {
        if (!(ee instanceof Xe)) return 0;
        let He = 0,
          [ye, be, Me, Ke] = ie > 0 ? [0, 0, this.children.length, ee.children.length] : [this.children.length - 1, ee.children.length - 1, -1, -1];
        for (;; ye += ie, be += ie) {
          if (ye == Me || be == Ke) return He;
          let Ue = this.children[ye],
            Fe = ee.children[be];
          if (Ue != Fe) return He + Ue.scanIdentical(Fe, ie);
          He += Ue.length + 1
        }
      }
      static from(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ee.reduce(((ee, ie) => ee + ie.length + 1), -1),
          He = 0;
        for (let ke of ee) He += ke.lines;
        if (He < 32) {
          let He = [];
          for (let ie of ee) ie.flatten(He);
          return new pe(He, ie)
        }
        let ye = Math.max(32, He >> 5),
          be = ye << 1,
          Me = ye >> 1,
          Ke = [],
          Ue = 0,
          Fe = -1,
          Je = [];

        function oe(ee) {
          let ie;
          if (ee.lines > be && ee instanceof Xe)
            for (let He of ee.children) oe(He);
          else ee.lines > Me && (Ue > Me || !Ue) ? (Re(), Ke.push(ee)) : ee instanceof pe && Ue && (ie = Je[Je.length - 1]) instanceof pe && ee.lines + ie.lines <= 32 ? (Ue += ee.lines, Fe += ee.length + 1, Je[Je.length - 1] = new pe(ie.text.concat(ee.text), ie.length + 1 + ee.length)) : (Ue + ee.lines > ye && Re(), Ue += ee.lines, Fe += ee.length + 1, Je.push(ee))
        }

        function Re() {
          0 != Ue && (Ke.push(1 == Je.length ? Je[0] : Xe.from(Je, Fe)), Fe = -1, Ue = Je.length = 0)
        }
        for (let ke of ee) oe(ke);
        return Re(), 1 == Ke.length ? Ke[0] : new Xe(Ke, ie)
      }
    }

    function ze(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e9;
      for (let be = 0, Me = 0, Ke = !0; Me < ee.length && be <= ye; Me++) {
        let Ue = ee[Me],
          Fe = be + Ue.length;
        Fe >= He && (Fe > ye && (Ue = Ue.slice(0, ye - be)), be < He && (Ue = Ue.slice(He - be)), Ke ? (ie[ie.length - 1] += Ue, Ke = !1) : ie.push(Ue)), be = Fe + 1
      }
      return ie
    }

    function Be(ee, ie, He) {
      return ze(ee, [""], ie, He)
    }
    Te.empty = new pe([""], 0);
    class Ee {
      constructor(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.dir = ie, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [ee], this.offsets = [ie > 0 ? 1 : (ee instanceof pe ? ee.text.length : ee.children.length) << 1]
      }
      nextInner(ee, ie) {
        for (this.done = this.lineBreak = !1;;) {
          let He = this.nodes.length - 1,
            ye = this.nodes[He],
            be = this.offsets[He],
            Me = be >> 1,
            Ke = ye instanceof pe ? ye.text.length : ye.children.length;
          if (Me == (ie > 0 ? Ke : 0)) {
            if (0 == He) return this.done = !0, this.value = "", this;
            ie > 0 && this.offsets[He - 1]++, this.nodes.pop(), this.offsets.pop()
          } else if ((1 & be) == (ie > 0 ? 0 : 1)) {
            if (this.offsets[He] += ie, 0 == ee) return this.lineBreak = !0, this.value = "\n", this;
            ee--
          } else if (ye instanceof pe) {
            let be = ye.text[Me + (ie < 0 ? -1 : 0)];
            if (this.offsets[He] += ie, be.length > Math.max(0, ee)) return this.value = 0 == ee ? be : ie > 0 ? be.slice(ee) : be.slice(0, be.length - ee), this;
            ee -= be.length
          } else {
            let be = ye.children[Me + (ie < 0 ? -1 : 0)];
            ee > be.length ? (ee -= be.length, this.offsets[He] += ie) : (ie < 0 && this.offsets[He]--, this.nodes.push(be), this.offsets.push(ie > 0 ? 1 : (be instanceof pe ? be.text.length : be.children.length) << 1))
          }
        }
      }
      next() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return ee < 0 && (this.nextInner(-ee, -this.dir), ee = this.value.length), this.nextInner(ee, this.dir)
      }
    }
    class ge {
      constructor(ee, ie, He) {
        this.value = "", this.done = !1, this.cursor = new Ee(ee, ie > He ? -1 : 1), this.pos = ie > He ? ee.length : 0, this.from = Math.min(ie, He), this.to = Math.max(ie, He)
      }
      nextInner(ee, ie) {
        if (ie < 0 ? this.pos <= this.from : this.pos >= this.to) return this.value = "", this.done = !0, this;
        ee += Math.max(0, ie < 0 ? this.pos - this.to : this.from - this.pos);
        let He = ie < 0 ? this.pos - this.from : this.to - this.pos;
        ee > He && (ee = He), He -= ee;
        let {
          value: ye
        } = this.cursor.next(ee);
        return this.pos += (ye.length + ee) * ie, this.value = ye.length <= He ? ye : ie < 0 ? ye.slice(ye.length - He) : ye.slice(0, He), this.done = !this.value, this
      }
      next() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return ee < 0 ? ee = Math.max(ee, this.from - this.pos) : ee > 0 && (ee = Math.min(ee, this.to - this.pos)), this.nextInner(ee, this.cursor.dir)
      }
      get lineBreak() {
        return this.cursor.lineBreak && "" != this.value
      }
    }
    class Oe {
      constructor(ee) {
        this.inner = ee, this.afterBreak = !0, this.value = "", this.done = !1
      }
      next() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          {
            done: ie,
            lineBreak: He,
            value: ye
          } = this.inner.next(ee);
        return ie && this.afterBreak ? (this.value = "", this.afterBreak = !1) : ie ? (this.done = !0, this.value = "") : He ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = ye, this.afterBreak = !1), this
      }
      get lineBreak() {
        return !1
      }
    }
    "undefined" != typeof Symbol && (Te.prototype[Symbol.iterator] = function() {
      return this.iter()
    }, Ee.prototype[Symbol.iterator] = ge.prototype[Symbol.iterator] = Oe.prototype[Symbol.iterator] = function() {
      return this
    });
    class de {
      constructor(ee, ie, He, ye) {
        this.from = ee, this.to = ie, this.number = He, this.text = ye
      }
      get length() {
        return this.to - this.from
      }
    }

    function We(ee, ie, He) {
      return [ie = Math.max(0, Math.min(ee.length, ie)), Math.max(ie, Math.min(ee.length, He))]
    }

    function te(ee, ie) {
      return Fe(ee, ie, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function Ze(ee, ie) {
      let He = ee.charCodeAt(ie);
      if (!((ye = He) >= 55296 && ye < 56320) || ie + 1 == ee.length) return He;
      var ye;
      let be = ee.charCodeAt(ie + 1);
      return function(ee) {
        return ee >= 56320 && ee < 57344
      }(be) ? be - 56320 + (He - 55296 << 10) + 65536 : He
    }

    function we(ee) {
      return ee <= 65535 ? String.fromCharCode(ee) : (ee -= 65536, String.fromCharCode(55296 + (ee >> 10), 56320 + (1023 & ee)))
    }

    function De(ee) {
      return ee < 65536 ? 1 : 2
    }
    const Pe = /\r\n?|\n/;
    var Ae = function(ee) {
      return ee[ee.Simple = 0] = "Simple", ee[ee.TrackDel = 1] = "TrackDel", ee[ee.TrackBefore = 2] = "TrackBefore", ee[ee.TrackAfter = 3] = "TrackAfter", ee
    }(Ae || (Ae = {}));
    class Ye {
      constructor(ee) {
        this.sections = ee
      }
      get length() {
        let ee = 0;
        for (let ie = 0; ie < this.sections.length; ie += 2) ee += this.sections[ie];
        return ee
      }
      get newLength() {
        let ee = 0;
        for (let ie = 0; ie < this.sections.length; ie += 2) {
          let He = this.sections[ie + 1];
          ee += He < 0 ? this.sections[ie] : He
        }
        return ee
      }
      get empty() {
        return 0 == this.sections.length || 2 == this.sections.length && this.sections[1] < 0
      }
      iterGaps(ee) {
        for (let ie = 0, He = 0, ye = 0; ie < this.sections.length;) {
          let be = this.sections[ie++],
            Me = this.sections[ie++];
          Me < 0 ? (ee(He, ye, be), ye += be) : ye += Me, He += be
        }
      }
      iterChangedRanges(ee) {
        xe(this, ee, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get invertedDesc() {
        let ee = [];
        for (let ie = 0; ie < this.sections.length;) {
          let He = this.sections[ie++],
            ye = this.sections[ie++];
          ye < 0 ? ee.push(He, ye) : ee.push(ye, He)
        }
        return new Ye(ee)
      }
      composeDesc(ee) {
        return this.empty ? ee : ee.empty ? this : Ce(this, ee)
      }
      mapDesc(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return ee.empty ? this : Le(this, ee, ie)
      }
      mapPos(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ae.Simple,
          ye = 0,
          be = 0;
        for (let Me = 0; Me < this.sections.length;) {
          let Ke = this.sections[Me++],
            Ue = this.sections[Me++],
            Fe = ye + Ke;
          if (Ue < 0) {
            if (Fe > ee) return be + (ee - ye);
            be += Ke
          } else {
            if (He != Ae.Simple && Fe >= ee && (He == Ae.TrackDel && ye < ee && Fe > ee || He == Ae.TrackBefore && ye < ee || He == Ae.TrackAfter && Fe > ee)) return null;
            if (Fe > ee || Fe == ee && ie < 0 && !Ke) return ee == ye || ie < 0 ? be : be + Ue;
            be += Ue
          }
          ye = Fe
        }
        if (ee > ye) throw new RangeError(`Position ${ee} is out of range for changeset of length ${ye}`);
        return be
      }
      touchesRange(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ee;
        for (let He = 0, ye = 0; He < this.sections.length && ye <= ie;) {
          let be = ye + this.sections[He++];
          if (this.sections[He++] >= 0 && ye <= ie && be >= ee) return !(ye < ee && be > ie) || "cover";
          ye = be
        }
        return !1
      }
      toString() {
        let ee = "";
        for (let ie = 0; ie < this.sections.length;) {
          let He = this.sections[ie++],
            ye = this.sections[ie++];
          ee += (ee ? " " : "") + He + (ye >= 0 ? ":" + ye : "")
        }
        return ee
      }
      toJSON() {
        return this.sections
      }
      static fromJSON(ee) {
        if (!Array.isArray(ee) || ee.length % 2 || ee.some((ee => "number" != typeof ee))) throw new RangeError("Invalid JSON representation of ChangeDesc");
        return new Ye(ee)
      }
      static create(ee) {
        return new Ye(ee)
      }
    }
    class Ve extends Ye {
      constructor(ee, ie) {
        super(ee), this.inserted = ie
      }
      apply(ee) {
        if (this.length != ee.length) throw new RangeError("Applying change set to a document with the wrong length");
        return xe(this, ((ie, He, ye, be, Me) => ee = ee.replace(ye, ye + (He - ie), Me)), !1), ee
      }
      mapDesc(ee) {
        return Le(this, ee, arguments.length > 1 && void 0 !== arguments[1] && arguments[1], !0)
      }
      invert(ee) {
        let ie = this.sections.slice(),
          He = [];
        for (let ye = 0, be = 0; ye < ie.length; ye += 2) {
          let Me = ie[ye],
            Ke = ie[ye + 1];
          if (Ke >= 0) {
            ie[ye] = Ke, ie[ye + 1] = Me;
            let Ue = ye >> 1;
            for (; He.length < Ue;) He.push(Te.empty);
            He.push(Me ? ee.slice(be, be + Me) : Te.empty)
          }
          be += Me
        }
        return new Ve(ie, He)
      }
      compose(ee) {
        return this.empty ? ee : ee.empty ? this : Ce(this, ee, !0)
      }
      map(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return ee.empty ? this : Le(this, ee, ie, !0)
      }
      iterChanges(ee) {
        xe(this, ee, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get desc() {
        return Ye.create(this.sections)
      }
      filter(ee) {
        let ie = [],
          He = [],
          ye = [],
          be = new ve(this);
        ee: for (let Me = 0, Ke = 0;;) {
          let Ue = Me == ee.length ? 1e9 : ee[Me++];
          for (; Ke < Ue || Ke == Ue && 0 == be.len;) {
            if (be.done) break ee;
            let ee = Math.min(be.len, Ue - Ke);
            ae(ye, ee, -1);
            let Me = -1 == be.ins ? -1 : 0 == be.off ? be.ins : 0;
            ae(ie, ee, Me), Me > 0 && ce(He, ie, be.text), be.forward(ee), Ke += ee
          }
          let Fe = ee[Me++];
          for (; Ke < Fe;) {
            if (be.done) break ee;
            let ee = Math.min(be.len, Fe - Ke);
            ae(ie, ee, -1), ae(ye, ee, -1 == be.ins ? -1 : 0 == be.off ? be.ins : 0), be.forward(ee), Ke += ee
          }
        }
        return {
          changes: new Ve(ie, He),
          filtered: Ye.create(ye)
        }
      }
      toJSON() {
        let ee = [];
        for (let ie = 0; ie < this.sections.length; ie += 2) {
          let He = this.sections[ie],
            ye = this.sections[ie + 1];
          ye < 0 ? ee.push(He) : 0 == ye ? ee.push([He]) : ee.push([He].concat(this.inserted[ie >> 1].toJSON()))
        }
        return ee
      }
      static of (ee, ie, He) {
        let ye = [],
          be = [],
          Me = 0,
          Ke = null;

        function Ue() {
          if (!(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && !ye.length) return;
          Me < ie && ae(ye, ie - Me, -1);
          let ee = new Ve(ye, be);
          Ke = Ke ? Ke.compose(ee.map(Ke)) : ee, ye = [], be = [], Me = 0
        }
        return function ee(Fe) {
          if (Array.isArray(Fe))
            for (let ie of Fe) ee(ie);
          else if (Fe instanceof Ve) {
            if (Fe.length != ie) throw new RangeError(`Mismatched change set length (got ${Fe.length}, expected ${ie})`);
            Ue(), Ke = Ke ? Ke.compose(Fe.map(Ke)) : Fe
          } else {
            let {
              from: ee,
              to: Ke = ee,
              insert: Je
            } = Fe;
            if (ee > Ke || ee < 0 || Ke > ie) throw new RangeError(`Invalid change range ${ee} to ${Ke} (in doc of length ${ie})`);
            let oe = Je ? "string" == typeof Je ? Te.of(Je.split(He || Pe)) : Je : Te.empty,
              Re = oe.length;
            if (ee == Ke && 0 == Re) return;
            ee < Me && Ue(), ee > Me && ae(ye, ee - Me, -1), ae(ye, Ke - ee, Re), ce(be, ye, oe), Me = Ke
          }
        }(ee), Ue(!Ke), Ke
      }
      static empty(ee) {
        return new Ve(ee ? [ee, -1] : [], [])
      }
      static fromJSON(ee) {
        if (!Array.isArray(ee)) throw new RangeError("Invalid JSON representation of ChangeSet");
        let ie = [],
          He = [];
        for (let ye = 0; ye < ee.length; ye++) {
          let be = ee[ye];
          if ("number" == typeof be) ie.push(be, -1);
          else {
            if (!Array.isArray(be) || "number" != typeof be[0] || be.some(((ee, ie) => ie && "string" != typeof ee))) throw new RangeError("Invalid JSON representation of ChangeSet");
            if (1 == be.length) ie.push(be[0], 0);
            else {
              for (; He.length < ye;) He.push(Te.empty);
              He[ye] = Te.of(be.slice(1)), ie.push(be[0], He[ye].length)
            }
          }
        }
        return new Ve(ie, He)
      }
      static createSet(ee, ie) {
        return new Ve(ee, ie)
      }
    }

    function ae(ee, ie, He) {
      let ye = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (0 == ie && He <= 0) return;
      let be = ee.length - 2;
      be >= 0 && He <= 0 && He == ee[be + 1] ? ee[be] += ie : be >= 0 && 0 == ie && 0 == ee[be] ? ee[be + 1] += He : ye ? (ee[be] += ie, ee[be + 1] += He) : ee.push(ie, He)
    }

    function ce(ee, ie, He) {
      if (0 == He.length) return;
      let ye = ie.length - 2 >> 1;
      if (ye < ee.length) ee[ee.length - 1] = ee[ee.length - 1].append(He);
      else {
        for (; ee.length < ye;) ee.push(Te.empty);
        ee.push(He)
      }
    }

    function xe(ee, ie, He) {
      let ye = ee.inserted;
      for (let be = 0, Me = 0, Ke = 0; Ke < ee.sections.length;) {
        let Ue = ee.sections[Ke++],
          Fe = ee.sections[Ke++];
        if (Fe < 0) be += Ue, Me += Ue;
        else {
          let Je = be,
            oe = Me,
            Re = Te.empty;
          for (; Je += Ue, oe += Fe, Fe && ye && (Re = Re.append(ye[Ke - 2 >> 1])), !(He || Ke == ee.sections.length || ee.sections[Ke + 1] < 0);) Ue = ee.sections[Ke++], Fe = ee.sections[Ke++];
          ie(be, Je, Me, oe, Re), be = Je, Me = oe
        }
      }
    }

    function Le(ee, ie, He) {
      let ye = [],
        be = arguments.length > 3 && void 0 !== arguments[3] && arguments[3] ? [] : null,
        Me = new ve(ee),
        Ke = new ve(ie),
        Ue = 0;
      for (let Fe = -1;;) {
        if (++Ue > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - likely malformed ChangeSet");
        if (Me.done && Ke.len || Ke.done && Me.len) throw new Error("Mismatched change set lengths");
        if (-1 == Me.ins && -1 == Ke.ins) {
          let ee = Math.min(Me.len, Ke.len);
          ae(ye, ee, -1), Me.forward(ee), Ke.forward(ee)
        } else if (Ke.ins >= 0 && (Me.ins < 0 || Fe == Me.i || 0 == Me.off && (Ke.len < Me.len || Ke.len == Me.len && !He))) {
          let ee = Ke.len;
          for (ae(ye, Ke.ins, -1); ee;) {
            if (++Ue > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-b");
            let ie = Math.min(Me.len, ee);
            Me.ins >= 0 && Fe < Me.i && Me.len <= ie && (ae(ye, 0, Me.ins), be && ce(be, ye, Me.text), Fe = Me.i), Me.forward(ie), ee -= ie
          }
          Ke.next()
        } else {
          if (!(Me.ins >= 0)) {
            if (Me.done && Ke.done) return be ? Ve.createSet(ye, be) : Ye.create(ye);
            throw new Error("Mismatched change set lengths")
          } {
            let ee = 0,
              ie = Me.len;
            for (; ie;) {
              if (++Ue > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-a");
              if (-1 == Ke.ins) {
                let He = Math.min(ie, Ke.len);
                ee += He, ie -= He, Ke.forward(He)
              } else {
                if (!(0 == Ke.ins && Ke.len < ie)) break;
                ie -= Ke.len, Ke.next()
              }
            }
            ae(ye, ee, Fe < Me.i ? Me.ins : 0), be && Fe < Me.i && ce(be, ye, Me.text), Fe = Me.i, Me.forward(Me.len - ie)
          }
        }
      }
    }

    function Ce(ee, ie) {
      let He = [],
        ye = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? [] : null,
        be = new ve(ee),
        Me = new ve(ie),
        Ke = 0;
      for (let Ue = !1;;) {
        if (++Ke > 2e6) throw new Error("BLOXD CODEMIRROR: composeSets exceeded max iterations - likely malformed ChangeSet");
        if (be.done && Me.done) return ye ? Ve.createSet(He, ye) : Ye.create(He);
        if (0 == be.ins) ae(He, be.len, 0, Ue), be.next();
        else if (0 != Me.len || Me.done) {
          if (be.done || Me.done) throw new Error("Mismatched change set lengths");
          {
            let ee = Math.min(be.len2, Me.len),
              ie = He.length;
            if (-1 == be.ins) {
              let ie = -1 == Me.ins ? -1 : Me.off ? 0 : Me.ins;
              ae(He, ee, ie, Ue), ye && ie && ce(ye, He, Me.text)
            } else - 1 == Me.ins ? (ae(He, be.off ? 0 : be.len, ee, Ue), ye && ce(ye, He, be.textBit(ee))) : (ae(He, be.off ? 0 : be.len, Me.off ? 0 : Me.ins, Ue), ye && !Me.off && ce(ye, He, Me.text));
            Ue = (be.ins > ee || Me.ins >= 0 && Me.len > ee) && (Ue || He.length > ie), be.forward2(ee), Me.forward(ee)
          }
        } else ae(He, 0, Me.ins, Ue), ye && ce(ye, He, Me.text), Me.next()
      }
    }
    class ve {
      constructor(ee) {
        this.set = ee, this.i = 0, this.next()
      }
      next() {
        let {
          sections: ee
        } = this.set;
        this.i < ee.length ? (this.len = ee[this.i++], this.ins = ee[this.i++]) : (this.len = 0, this.ins = -2), this.off = 0
      }
      get done() {
        return -2 == this.ins
      }
      get len2() {
        return this.ins < 0 ? this.len : this.ins
      }
      get text() {
        let {
          inserted: ee
        } = this.set, ie = this.i - 2 >> 1;
        return ie >= ee.length ? Te.empty : ee[ie]
      }
      textBit(ee) {
        let {
          inserted: ie
        } = this.set, He = this.i - 2 >> 1;
        return He >= ie.length && !ee ? Te.empty : ie[He].slice(this.off, null == ee ? void 0 : this.off + ee)
      }
      forward(ee) {
        ee == this.len ? this.next() : (this.len -= ee, this.off += ee)
      }
      forward2(ee) {
        -1 == this.ins ? this.forward(ee) : ee == this.ins ? this.next() : (this.ins -= ee, this.off += ee)
      }
    }
    class ue {
      constructor(ee, ie, He) {
        this.from = ee, this.to = ie, this.flags = He
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
        let ee = 7 & this.flags;
        return 7 == ee ? null : ee
      }
      get goalColumn() {
        let ee = this.flags >> 6;
        return 16777215 == ee ? void 0 : ee
      }
      map(ee) {
        let ie, He, ye = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return this.empty ? ie = He = ee.mapPos(this.from, ye) : (ie = ee.mapPos(this.from, 1), He = ee.mapPos(this.to, -1)), ie == this.from && He == this.to ? this : new ue(ie, He, this.flags)
      }
      extend(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ee,
          He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (ee <= this.anchor && ie >= this.anchor) return me.range(ee, ie, void 0, void 0, He);
        let ye = Math.abs(ee - this.anchor) > Math.abs(ie - this.anchor) ? ee : ie;
        return me.range(this.anchor, ye, void 0, void 0, He)
      }
      eq(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.anchor == ee.anchor && this.head == ee.head && this.goalColumn == ee.goalColumn && (!ie || !this.empty || this.assoc == ee.assoc)
      }
      toJSON() {
        return {
          anchor: this.anchor,
          head: this.head
        }
      }
      static fromJSON(ee) {
        if (!ee || "number" != typeof ee.anchor || "number" != typeof ee.head) throw new RangeError("Invalid JSON representation for SelectionRange");
        return me.range(ee.anchor, ee.head)
      }
      static create(ee, ie, He) {
        return new ue(ee, ie, He)
      }
    }
    class me {
      constructor(ee, ie) {
        this.zp = ee, this.mainIndex = ie
      }
      map(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return ee.empty ? this : me.create(this.zp.map((He => He.map(ee, ie))), this.mainIndex)
      }
      eq(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.zp.length != ee.zp.length || this.mainIndex != ee.mainIndex) return !1;
        for (let He = 0; He < this.zp.length; He++)
          if (!this.zp[He].eq(ee.zp[He], ie)) return !1;
        return !0
      }
      get main() {
        return this.zp[this.mainIndex]
      }
      asSingle() {
        return 1 == this.zp.length ? this : new me([this.main], 0)
      }
      addRange(ee) {
        let ie = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return me.create([ee].concat(this.zp), ie ? 0 : this.mainIndex + 1)
      }
      replaceRange(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.mainIndex,
          He = this.zp.slice();
        return He[ie] = ee, me.create(He, this.mainIndex)
      }
      toJSON() {
        return {
          zp: this.zp.map((ee => ee.toJSON())),
          main: this.mainIndex
        }
      }
      static fromJSON(ee) {
        if (!ee || !Array.isArray(ee.zp) || "number" != typeof ee.main || ee.main >= ee.zp.length) throw new RangeError("Invalid JSON representation for EditorSelection");
        return new me(ee.zp.map((ee => ue.fromJSON(ee))), ee.main)
      }
      static single(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ee;
        return new me([me.range(ee, ie)], 0)
      }
      static create(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (0 == ee.length) throw new RangeError("A selection needs at least one range");
        for (let He = 0, ye = 0; ye < ee.length; ye++) {
          let be = ee[ye];
          if (be.empty ? be.from <= He : be.from < He) return me.normalized(ee.slice(), ie);
          He = be.to
        }
        return new me(ee, ie)
      }
      static cursor(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          He = arguments.length > 2 ? arguments[2] : void 0,
          ye = arguments.length > 3 ? arguments[3] : void 0;
        return ue.create(ee, ee, (0 == ie ? 0 : ie < 0 ? 8 : 16) | (null == He ? 7 : Math.min(6, He)) | (null !== ye && void 0 !== ye ? ye : 16777215) << 6)
      }
      static range(ee, ie, He, ye, be) {
        let Me = (null !== He && void 0 !== He ? He : 16777215) << 6 | (null == ye ? 7 : Math.min(6, ye));
        return be || ee == ie || (be = ie < ee ? 1 : -1), ie < ee ? ue.create(ie, ee, 48 | Me) : ue.create(ee, ie, (be ? be < 0 ? 8 : 16 : 0) | Me)
      }
      static normalized(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          He = ee[ie];
        ee.sort(((ee, ie) => ee.from - ie.from)), ie = ee.indexOf(He);
        for (let ye = 1; ye < ee.length; ye++) {
          let He = ee[ye],
            be = ee[ye - 1];
          if (He.empty ? He.from <= be.to : He.from < be.to) {
            let Me = be.from,
              Ke = Math.max(He.to, be.to);
            ye <= ie && ie--, ee.splice(--ye, 2, He.anchor > He.head ? me.range(Ke, Me) : me.range(Me, Ke))
          }
        }
        return new me(ee, ie)
      }
    }

    function le(ee, ie) {
      for (let He of ee.zp)
        if (He.to > ie) throw new RangeError("Selection points outside of document")
    }
    let Se = 0;
    class ne {
      constructor(ee, ie, He, ye, be) {
        this.combine = ee, this.compareInput = ie, this.compare = He, this.isStatic = ye, this.id = Se++, this.default = ee([]), this.extensions = "function" == typeof be ? be(this) : be
      }
      get reader() {
        return this
      }
      static define() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return new ne(ee.combine || (ee => ee), ee.compareInput || ((ee, ie) => ee === ie), ee.compare || (ee.combine ? (ee, ie) => ee === ie : je), !!ee.static, ee.enables)
      }
      of(ee) {
        return new se([], this, 0, ee)
      }
      compute(ee, ie) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new se(ee, this, 1, ie)
      }
      computeN(ee, ie) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new se(ee, this, 2, ie)
      }
      from(ee, ie) {
        return ie || (ie = ee => ee), this.compute([ee], (He => ie(He.field(ee))))
      }
    }

    function je(ee, ie) {
      return ee == ie || ee.length == ie.length && ee.every(((ee, He) => ee === ie[He]))
    }
    class se {
      constructor(ee, ie, He, ye) {
        this.dependencies = ee, this.facet = ie, this.type = He, this.value = ye, this.id = Se++
      }
      dynamicSlot(ee) {
        var ie;
        let He = this.value,
          ye = this.facet.compareInput,
          be = this.id,
          Me = ee[be] >> 1,
          Ke = 2 == this.type,
          Ue = !1,
          Fe = !1,
          Je = [];
        for (let oe of this.dependencies) "doc" == oe ? Ue = !0 : "selection" == oe ? Fe = !0 : 0 == (1 & (null !== (ie = ee[oe.id]) && void 0 !== ie ? ie : 1)) && Je.push(ee[oe.id]);
        return {
          create: ee => (ee.values[Me] = He(ee), 1),
          update(ee, ie) {
            if (Ue && ie.docChanged || Fe && (ie.docChanged || ie.selection) || he(ee, Je)) {
              let ie = He(ee);
              if (Ke ? !Ie(ie, ee.values[Me], ye) : !ye(ie, ee.values[Me])) return ee.values[Me] = ie, 1
            }
            return 0
          },
          reconfigure: (ee, ie) => {
            let Ue, Fe = ie.config.address[be];
            if (null != Fe) {
              let be = oi(ie, Fe);
              if (this.dependencies.every((He => He instanceof ne ? ie.facet(He) === ee.facet(He) : !(He instanceof re) || ie.field(He, !1) == ee.field(He, !1))) || (Ke ? Ie(Ue = He(ee), be, ye) : ye(Ue = He(ee), be))) return ee.values[Me] = be, 0
            } else Ue = He(ee);
            return ee.values[Me] = Ue, 1
          }
        }
      }
    }

    function Ie(ee, ie, He) {
      if (ee.length != ie.length) return !1;
      for (let ye = 0; ye < ee.length; ye++)
        if (!He(ee[ye], ie[ye])) return !1;
      return !0
    }

    function he(ee, ie) {
      let He = !1;
      for (let ye of ie) 1 & Ji(ee, ye) && (He = !0);
      return He
    }

    function Ne(ee, ie, He) {
      let ye = He.map((ie => ee[ie.id])),
        be = He.map((ee => ee.type)),
        Me = ye.filter((ee => !(1 & ee))),
        Ke = ee[ie.id] >> 1;

      function Ue(ee) {
        let He = [];
        for (let ie = 0; ie < ye.length; ie++) {
          let Me = oi(ee, ye[ie]);
          if (2 == be[ie])
            for (let ee of Me) He.push(ee);
          else He.push(Me)
        }
        return ie.combine(He)
      }
      return {
        create(ee) {
          for (let ie of ye) Ji(ee, ie);
          return ee.values[Ke] = Ue(ee), 1
        },
        update(ee, He) {
          if (!he(ee, Me)) return 0;
          let ye = Ue(ee);
          return ie.compare(ye, ee.values[Ke]) ? 0 : (ee.values[Ke] = ye, 1)
        },
        reconfigure(ee, be) {
          let Me = he(ee, ye),
            Fe = be.config.facets[ie.id],
            Je = be.facet(ie);
          if (Fe && !Me && je(He, Fe)) return ee.values[Ke] = Je, 0;
          let oe = Ue(ee);
          return ie.compare(oe, Je) ? (ee.values[Ke] = Je, 0) : (ee.values[Ke] = oe, 1)
        }
      }
    }
    const Ge = ne.define({
      static: !0
    });
    class re {
      constructor(ee, ie, He, ye, be) {
        this.id = ee, this.createF = ie, this.updateF = He, this.compareF = ye, this.spec = be, this.provides = void 0
      }
      static define(ee) {
        let ie = new re(Se++, ee.create, ee.update, ee.compare || ((ee, ie) => ee === ie), ee);
        return ee.provide && (ie.provides = ee.provide(ie)), ie
      }
      create(ee) {
        let ie = ee.facet(Ge).find((ee => ee.field == this));
        return ((null === ie || void 0 === ie ? void 0 : ie.create) || this.createF)(ee)
      }
      slot(ee) {
        let ie = ee[this.id] >> 1;
        return {
          create: ee => (ee.values[ie] = this.create(ee), 1),
          update: (ee, He) => {
            let ye = ee.values[ie],
              be = this.updateF(ye, He);
            return this.compareF(ye, be) ? 0 : (ee.values[ie] = be, 1)
          },
          reconfigure: (ee, He) => {
            let ye, be = ee.facet(Ge),
              Me = He.facet(Ge);
            return (ye = be.find((ee => ee.field == this))) && ye != Me.find((ee => ee.field == this)) ? (ee.values[ie] = ye.create(ee), 1) : null != He.config.address[this.id] ? (ee.values[ie] = He.field(this), 0) : (ee.values[ie] = this.create(ee), 1)
          }
        }
      }
      init(ee) {
        return [this, Ge.of({
          field: this,
          create: ee
        })]
      }
      get extension() {
        return this
      }
    }
    const Qe = 4,
      ei = 3,
      ii = 2,
      Hi = 1;

    function yi(ee) {
      return ie => new Mi(ie, ee)
    }
    const bi = {
      highest: yi(0),
      high: yi(Hi),
      default: yi(ii),
      low: yi(ei),
      lowest: yi(Qe)
    };
    class Mi {
      constructor(ee, ie) {
        this.inner = ee, this.prec = ie
      }
    }
    class Ki {
      of(ee) {
        return new Ui(this, ee)
      }
      reconfigure(ee) {
        return Ki.reconfigure.of({
          compartment: this,
          extension: ee
        })
      }
      get(ee) {
        return ee.config.compartments.get(this)
      }
    }
    class Ui {
      constructor(ee, ie) {
        this.compartment = ee, this.inner = ie
      }
    }
    class Fi {
      constructor(ee, ie, He, ye, be, Me) {
        for (this.base = ee, this.compartments = ie, this.dynamicSlots = He, this.address = ye, this.staticValues = be, this.facets = Me, this.statusTemplate = []; this.statusTemplate.length < He.length;) this.statusTemplate.push(0)
      }
      staticFacet(ee) {
        let ie = this.address[ee.id];
        return null == ie ? ee.default : this.staticValues[ie >> 1]
      }
      static resolve(ee, ie, He) {
        let ye = [],
          be = Object.create(null),
          Me = new Map;
        for (let Re of function(ee, ie, He) {
            let ye = [
                [],
                [],
                [],
                [],
                []
              ],
              be = new Map;

            function Me(ee, Ke) {
              let Ue = be.get(ee);
              if (null != Ue) {
                if (Ue <= Ke) return;
                let ie = ye[Ue].indexOf(ee);
                ie > -1 && ye[Ue].splice(ie, 1), ee instanceof Ui && He.delete(ee.compartment)
              }
              if (be.set(ee, Ke), Array.isArray(ee))
                for (let ie of ee) Me(ie, Ke);
              else if (ee instanceof Ui) {
                if (He.has(ee.compartment)) throw new RangeError("Duplicate use of compartment in extensions");
                let ye = ie.get(ee.compartment) || ee.inner;
                He.set(ee.compartment, ye), Me(ye, Ke)
              } else if (ee instanceof Mi) Me(ee.inner, ee.prec);
              else if (ee instanceof re) ye[Ke].push(ee), ee.provides && Me(ee.provides, Ke);
              else if (ee instanceof se) ye[Ke].push(ee), ee.facet.extensions && Me(ee.facet.extensions, ii);
              else {
                let ie = ee.extension;
                if (!ie) throw new Error(`Unrecognized extension value in extension set (${ee}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
                Me(ie, Ke)
              }
            }
            return Me(ee, ii), ye.reduce(((ee, ie) => ee.concat(ie)))
          }(ee, ie, Me)) Re instanceof re ? ye.push(Re) : (be[Re.facet.id] || (be[Re.facet.id] = [])).push(Re);
        let Ke = Object.create(null),
          Ue = [],
          Fe = [];
        for (let Re of ye) Ke[Re.id] = Fe.length << 1, Fe.push((ee => Re.slot(ee)));
        let Je = null === He || void 0 === He ? void 0 : He.config.facets;
        for (let Re in be) {
          let ee = be[Re],
            ie = ee[0].facet,
            ye = Je && Je[Re] || [];
          if (ee.every((ee => 0 == ee.type)))
            if (Ke[ie.id] = Ue.length << 1 | 1, je(ye, ee)) Ue.push(He.facet(ie));
            else {
              let ye = ie.combine(ee.map((ee => ee.value)));
              Ue.push(He && ie.compare(ye, He.facet(ie)) ? He.facet(ie) : ye)
            }
          else {
            for (let ie of ee) 0 == ie.type ? (Ke[ie.id] = Ue.length << 1 | 1, Ue.push(ie.value)) : (Ke[ie.id] = Fe.length << 1, Fe.push((ee => ie.dynamicSlot(ee))));
            Ke[ie.id] = Fe.length << 1, Fe.push((He => Ne(He, ie, ee)))
          }
        }
        let oe = Fe.map((ee => ee(Ke)));
        return new Fi(ee, Me, oe, Ke, Ue, be)
      }
    }

    function Ji(ee, ie) {
      if (1 & ie) return 2;
      let He = ie >> 1,
        ye = ee.status[He];
      if (4 == ye) throw new Error("Cyclic dependency between fields and/or facets");
      if (2 & ye) return ye;
      ee.status[He] = 4;
      let be = ee.computeSlot(ee, ee.config.dynamicSlots[He]);
      return ee.status[He] = 2 | be
    }

    function oi(ee, ie) {
      return 1 & ie ? ee.config.staticValues[ie >> 1] : ee.values[ie >> 1]
    }
    const Ri = ne.define(),
      ki = ne.define({
        combine: ee => ee.some((ee => ee)),
        static: !0
      }),
      qi = ne.define({
        combine: ee => ee.length ? ee[0] : void 0,
        static: !0
      }),
      fi = ne.define(),
      Ti = ne.define(),
      Xi = ne.define(),
      zi = ne.define({
        combine: ee => !!ee.length && ee[0]
      });
    class Bi {
      constructor(ee, ie) {
        this.type = ee, this.value = ie
      }
      static define() {
        return new Ei
      }
    }
    class Ei {
      of(ee) {
        return new Bi(this, ee)
      }
    }
    class gi {
      constructor(ee) {
        this.map = ee
      }
      of(ee) {
        return new Oi(this, ee)
      }
    }
    class Oi {
      constructor(ee, ie) {
        this.type = ee, this.value = ie
      }
      map(ee) {
        let ie = this.type.map(this.value, ee);
        return void 0 === ie ? void 0 : ie == this.value ? this : new Oi(this.type, ie)
      }
      is(ee) {
        return this.type == ee
      }
      static define() {
        return new gi((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).map || (ee => ee))
      }
      static mapEffects(ee, ie) {
        if (!ee.length) return ee;
        let He = [];
        for (let ye of ee) {
          let ee = ye.map(ie);
          ee && He.push(ee)
        }
        return He
      }
    }
    Oi.reconfigure = Oi.define(), Oi.appendConfig = Oi.define();
    class di {
      constructor(ee, ie, He, ye, be, Me) {
        this.startState = ee, this.changes = ie, this.selection = He, this.effects = ye, this.annotations = be, this.scrollIntoView = Me, this._doc = null, this._state = null, He && le(He, ie.newLength), be.some((ee => ee.type == di.time)) || (this.annotations = be.concat(di.time.of(Date.now())))
      }
      static create(ee, ie, He, ye, be, Me) {
        return new di(ee, ie, He, ye, be, Me)
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
      annotation(ee) {
        for (let ie of this.annotations)
          if (ie.type == ee) return ie.value
      }
      get docChanged() {
        return !this.changes.empty
      }
      get reconfigured() {
        return this.startState.config != this.state.config
      }
      isUserEvent(ee) {
        let ie = this.annotation(di.userEvent);
        return !(!ie || !(ie == ee || ie.length > ee.length && ie.slice(0, ee.length) == ee && "." == ie[ee.length]))
      }
    }

    function Wi(ee, ie) {
      let He = [];
      for (let ye = 0, be = 0;;) {
        let Me, Ke;
        if (ye < ee.length && (be == ie.length || ie[be] >= ee[ye])) Me = ee[ye++], Ke = ee[ye++];
        else {
          if (!(be < ie.length)) return He;
          Me = ie[be++], Ke = ie[be++]
        }!He.length || He[He.length - 1] < Me ? He.push(Me, Ke) : He[He.length - 1] < Ke && (He[He.length - 1] = Ke)
      }
    }

    function ti(ee, ie, He) {
      var ye;
      let be, Me, Ke;
      return He ? (be = ie.changes, Me = Ve.empty(ie.changes.length), Ke = ee.changes.compose(ie.changes)) : (be = ie.changes.map(ee.changes), Me = ee.changes.mapDesc(ie.changes, !0), Ke = ee.changes.compose(be)), {
        changes: Ke,
        selection: ie.selection ? ie.selection.map(Me) : null === (ye = ee.selection) || void 0 === ye ? void 0 : ye.map(be),
        effects: Oi.mapEffects(ee.effects, be).concat(Oi.mapEffects(ie.effects, Me)),
        annotations: ee.annotations.length ? ee.annotations.concat(ie.annotations) : ie.annotations,
        scrollIntoView: ee.scrollIntoView || ie.scrollIntoView
      }
    }

    function Zi(ee, ie, He) {
      let ye = ie.selection,
        be = Pi(ie.annotations);
      return ie.userEvent && (be = be.concat(di.userEvent.of(ie.userEvent))), {
        changes: ie.changes instanceof Ve ? ie.changes : Ve.of(ie.changes || [], He, ee.facet(qi)),
        selection: ye && (ye instanceof me ? ye : me.single(ye.anchor, ye.head)),
        effects: Pi(ie.effects),
        annotations: be,
        scrollIntoView: !!ie.scrollIntoView
      }
    }

    function wi(ee, ie, He) {
      let ye = Zi(ee, ie.length ? ie[0] : {}, ee.doc.length);
      ie.length && !1 === ie[0].filter && (He = !1);
      for (let Me = 1; Me < ie.length; Me++) {
        !1 === ie[Me].filter && (He = !1);
        let be = !!ie[Me].sequential;
        ye = ti(ye, Zi(ee, ie[Me], be ? ye.changes.newLength : ee.doc.length), be)
      }
      let be = di.create(ee, ye.changes, ye.selection, ye.effects, ye.annotations, ye.scrollIntoView);
      return function(ee) {
        let ie = ee.startState,
          He = ie.facet(Xi),
          ye = ee;
        for (let be = He.length - 1; be >= 0; be--) {
          let Me = He[be](ee);
          Me && Object.keys(Me).length && (ye = ti(ye, Zi(ie, Me, ee.changes.newLength), !0))
        }
        return ye == ee ? ee : di.create(ie, ee.changes, ee.selection, ye.effects, ye.annotations, ye.scrollIntoView)
      }(He ? function(ee) {
        let ie = ee.startState,
          He = !0;
        for (let be of ie.facet(fi)) {
          let ie = be(ee);
          if (!1 === ie) {
            He = !1;
            break
          }
          Array.isArray(ie) && (He = !0 === He ? ie : Wi(He, ie))
        }
        if (!0 !== He) {
          let ye, be;
          if (!1 === He) be = ee.changes.invertedDesc, ye = Ve.empty(ie.doc.length);
          else {
            let ie = ee.changes.filter(He);
            ye = ie.changes, be = ie.filtered.mapDesc(ie.changes).invertedDesc
          }
          ee = di.create(ie, ye, ee.selection && ee.selection.map(be), Oi.mapEffects(ee.effects, be), ee.annotations, ee.scrollIntoView)
        }
        let ye = ie.facet(Ti);
        for (let be = ye.length - 1; be >= 0; be--) {
          let He = ye[be](ee);
          ee = He instanceof di ? He : Array.isArray(He) && 1 == He.length && He[0] instanceof di ? He[0] : wi(ie, Pi(He), !1)
        }
        return ee
      }(be) : be)
    }
    di.time = Bi.define(), di.userEvent = Bi.define(), di.addToHistory = Bi.define(), di.remote = Bi.define();
    const Di = [];

    function Pi(ee) {
      return null == ee ? Di : Array.isArray(ee) ? ee : [ee]
    }
    var Ai = function(ee) {
      return ee[ee.Word = 0] = "Word", ee[ee.Space = 1] = "Space", ee[ee.Other = 2] = "Other", ee
    }(Ai || (Ai = {}));
    const Yi = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
    let Vi;
    try {
      Vi = new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u")
    } catch (bH) {}

    function ai(ee) {
      return ie => {
        if (!/\S/.test(ie)) return Ai.Space;
        if (function(ee) {
            if (Vi) return Vi.test(ee);
            for (let ie = 0; ie < ee.length; ie++) {
              let He = ee[ie];
              if (/\w/.test(He) || He > "\x80" && (He.toUpperCase() != He.toLowerCase() || Yi.test(He))) return !0
            }
            return !1
          }(ie)) return Ai.Word;
        for (let He = 0; He < ee.length; He++)
          if (ie.indexOf(ee[He]) > -1) return Ai.Word;
        return Ai.Other
      }
    }
    class ci {
      constructor(ee, ie, He, ye, be, Me) {
        this.config = ee, this.doc = ie, this.selection = He, this.values = ye, this.status = ee.statusTemplate.slice(), this.computeSlot = be, Me && (Me._state = this);
        for (let Ke = 0; Ke < this.config.dynamicSlots.length; Ke++) Ji(this, Ke << 1);
        this.computeSlot = null
      }
      field(ee) {
        let ie = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          He = this.config.address[ee.id];
        if (null != He) return Ji(this, He), oi(this, He);
        if (ie) throw new RangeError("Field is not present in this state")
      }
      update() {
        for (var ee = arguments.length, ie = new Array(ee), He = 0; He < ee; He++) ie[He] = arguments[He];
        return wi(this, ie, !0)
      }
      applyTransaction(ee) {
        let ie, He = this.config,
          {
            base: ye,
            compartments: be
          } = He;
        for (let Ke of ee.effects) Ke.is(Ki.reconfigure) ? (He && (be = new Map, He.compartments.forEach(((ee, ie) => be.set(ie, ee))), He = null), be.set(Ke.value.compartment, Ke.value.extension)) : Ke.is(Oi.reconfigure) ? (He = null, ye = Ke.value) : Ke.is(Oi.appendConfig) && (He = null, ye = Pi(ye).concat(Ke.value));
        if (He) ie = ee.startState.values.slice();
        else {
          He = Fi.resolve(ye, be, this), ie = new ci(He, this.doc, this.selection, He.dynamicSlots.map((() => null)), ((ee, ie) => ie.reconfigure(ee, this)), null).values
        }
        let Me = ee.startState.facet(ki) ? ee.newSelection : ee.newSelection.asSingle();
        new ci(He, ee.newDoc, Me, ie, ((ie, He) => He.update(ie, ee)), ee)
      }
      replaceSelection(ee) {
        return "string" == typeof ee && (ee = this.toText(ee)), this.changeByRange((ie => ({
          changes: {
            from: ie.from,
            to: ie.to,
            insert: ee
          },
          range: me.cursor(ie.from + ee.length)
        })))
      }
      changeByRange(ee) {
        let ie = this.selection,
          He = ee(ie.zp[0]),
          ye = this.changes(He.changes),
          be = [He.range],
          Me = Pi(He.effects);
        for (let Ke = 1; Ke < ie.zp.length; Ke++) {
          let He = ee(ie.zp[Ke]),
            Ue = this.changes(He.changes),
            Fe = Ue.map(ye);
          for (let ee = 0; ee < Ke; ee++) be[ee] = be[ee].map(Fe);
          let Je = ye.mapDesc(Ue, !0);
          be.push(He.range.map(Je)), ye = ye.compose(Fe), Me = Oi.mapEffects(Me, Fe).concat(Oi.mapEffects(Pi(He.effects), Je))
        }
        return {
          changes: ye,
          selection: me.create(be, ie.mainIndex),
          effects: Me
        }
      }
      changes() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return ee instanceof Ve ? ee : Ve.of(ee, this.doc.length, this.facet(ci.lineSeparator))
      }
      toText(ee) {
        return Te.of(ee.split(this.facet(ci.lineSeparator) || Pe))
      }
      sliceDoc() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.doc.length;
        return this.doc.sliceString(ee, ie, this.lineBreak)
      }
      facet(ee) {
        let ie = this.config.address[ee.id];
        return null == ie ? ee.default : (Ji(this, ie), oi(this, ie))
      }
      toJSON(ee) {
        let ie = {
          doc: this.sliceDoc(),
          selection: this.selection.toJSON()
        };
        if (ee)
          for (let He in ee) {
            let ye = ee[He];
            ye instanceof re && null != this.config.address[ye.id] && (ie[He] = ye.spec.toJSON(this.field(ee[He]), this))
          }
        return ie
      }
      static fromJSON(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          He = arguments.length > 2 ? arguments[2] : void 0;
        if (!ee || "string" != typeof ee.doc) throw new RangeError("Invalid JSON representation for EditorState");
        let ye = [];
        if (He)
          for (let be in He)
            if (Object.prototype.hasOwnProperty.call(ee, be)) {
              let ie = He[be],
                Me = ee[be];
              ye.push(ie.init((ee => ie.spec.fromJSON(Me, ee))))
            } return ci.create({
          doc: ee.doc,
          selection: me.fromJSON(ee.selection),
          extensions: ie.extensions ? ye.concat([ie.extensions]) : ye
        })
      }
      static create() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          ie = Fi.resolve(ee.extensions || [], new Map),
          He = ee.doc instanceof Te ? ee.doc : Te.of((ee.doc || "").split(ie.staticFacet(ci.lineSeparator) || Pe)),
          ye = ee.selection ? ee.selection instanceof me ? ee.selection : me.single(ee.selection.anchor, ee.selection.head) : me.single(0);
        return le(ye, He.length), ie.staticFacet(ki) || (ye = ye.asSingle()), new ci(ie, He, ye, ie.dynamicSlots.map((() => null)), ((ee, ie) => ie.create(ee)), null)
      }
      get tabSize() {
        return this.facet(ci.tabSize)
      }
      get lineBreak() {
        return this.facet(ci.lineSeparator) || "\n"
      }
      get readOnly() {
        return this.facet(zi)
      }
      phrase(ee) {
        for (var ie = arguments.length, He = new Array(ie > 1 ? ie - 1 : 0), ye = 1; ye < ie; ye++) He[ye - 1] = arguments[ye];
        for (let be of this.facet(ci.phrases))
          if (Object.prototype.hasOwnProperty.call(be, ee)) {
            ee = be[ee];
            break
          } return He.length && (ee = ee.replace(/\$(\$|\d*)/g, ((ee, ie) => {
          if ("$" == ie) return "$";
          let ye = +(ie || 1);
          return !ye || ye > He.length ? ee : He[ye - 1]
        }))), ee
      }
      languageDataAt(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          ye = [];
        for (let be of this.facet(Ri))
          for (let Me of be(this, ie, He)) Object.prototype.hasOwnProperty.call(Me, ee) && ye.push(Me[ee]);
        return ye
      }
      charCategorizer(ee) {
        let ie = this.languageDataAt("wordChars", ee);
        return ai(ie.length ? ie[0] : "")
      }
      wordAt(ee) {
        let {
          text: ie,
          from: He,
          length: ye
        } = this.doc.lineAt(ee), be = this.charCategorizer(ee), Me = ee - He, Ke = ee - He;
        for (; Me > 0;) {
          let ee = te(ie, Me, !1);
          if (be(ie.slice(ee, Me)) != Ai.Word) break;
          Me = ee
        }
        for (; Ke < ye;) {
          let ee = te(ie, Ke);
          if (be(ie.slice(Ke, ee)) != Ai.Word) break;
          Ke = ee
        }
        return Me == Ke ? null : me.range(Me + He, Ke + He)
      }
    }

    function xi(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        ye = {};
      for (let be of ee)
        for (let ee of Object.keys(be)) {
          let ie = be[ee],
            Me = ye[ee];
          if (void 0 === Me) ye[ee] = ie;
          else if (Me === ie || void 0 === ie);
          else {
            if (!Object.hasOwnProperty.call(He, ee)) throw new Error("Config merge conflict for field " + ee);
            ye[ee] = He[ee](Me, ie)
          }
        }
      for (let be in ie) void 0 === ye[be] && (ye[be] = ie[be]);
      return ye
    }
    ci.allowMultipleSelections = ki, ci.tabSize = ne.define({
      combine: ee => ee.length ? ee[0] : 4
    }), ci.lineSeparator = qi, ci.readOnly = zi, ci.phrases = ne.define({
      compare(ee, ie) {
        let He = Object.keys(ee),
          ye = Object.keys(ie);
        return He.length == ye.length && He.every((He => ee[He] == ie[He]))
      }
    }), ci.languageData = Ri, ci.changeFilter = fi, ci.transactionFilter = Ti, ci.transactionExtender = Xi, Ki.reconfigure = Oi.define();
    class Li {
      eq(ee) {
        return this == ee
      }
      range(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ee;
        return vi.create(ee, ie, this)
      }
    }

    function Ci(ee, ie) {
      return ee == ie || ee.constructor == ie.constructor && ee.eq(ie)
    }
    Li.prototype.startSide = Li.prototype.endSide = 0, Li.prototype.point = !1, Li.prototype.mapMode = Ae.TrackDel;
    class vi {
      constructor(ee, ie, He) {
        this.from = ee, this.to = ie, this.value = He
      }
      static create(ee, ie, He) {
        return new vi(ee, ie, He)
      }
    }

    function ui(ee, ie) {
      return ee.from - ie.from || ee.value.startSide - ie.value.startSide
    }
    class mi {
      constructor(ee, ie, He, ye) {
        this.from = ee, this.to = ie, this.value = He, this.bMe = ye
      }
      get length() {
        return this.to[this.to.length - 1]
      }
      findIndex(ee, ie, He) {
        let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          be = He ? this.to : this.from;
        for (let Me = ye, Ke = be.length;;) {
          if (Me == Ke) return Me;
          let ye = Me + Ke >> 1,
            Ue = be[ye] - ee || (He ? this.value[ye].endSide : this.value[ye].startSide) - ie;
          if (ye == Me) return Ue >= 0 ? Me : Ke;
          Ue >= 0 ? Ke = ye : Me = ye + 1
        }
      }
      between(ee, ie, He, ye) {
        for (let be = this.findIndex(ie, -1e9, !0), Me = this.findIndex(He, 1e9, !1, be); be < Me; be++)
          if (!1 === ye(this.from[be] + ee, this.to[be] + ee, this.value[be])) return !1
      }
      map(ee, ie) {
        let He = [],
          ye = [],
          be = [],
          Me = -1,
          Ke = -1;
        for (let Ue = 0; Ue < this.value.length; Ue++) {
          let Fe, Je, oe = this.value[Ue],
            Re = this.from[Ue] + ee,
            ke = this.to[Ue] + ee;
          if (Re == ke) {
            let ee = ie.mapPos(Re, oe.startSide, oe.mapMode);
            if (null == ee) continue;
            if (Fe = Je = ee, oe.startSide != oe.endSide && (Je = ie.mapPos(Re, oe.endSide), Je < Fe)) continue
          } else if (Fe = ie.mapPos(Re, oe.startSide), Je = ie.mapPos(ke, oe.endSide), Fe > Je || Fe == Je && oe.startSide > 0 && oe.endSide <= 0) continue;
          (Je - Fe || oe.endSide - oe.startSide) < 0 || (Me < 0 && (Me = Fe), oe.point && (Ke = Math.max(Ke, Je - Fe)), He.push(oe), ye.push(Fe - Me), be.push(Je - Me))
        }
        return {
          mapped: He.length ? new mi(ye, be, He, Ke) : null,
          pos: Me
        }
      }
    }
    class li {
      constructor(ee, ie, He, ye) {
        this.chunkPos = ee, this.chunk = ie, this.nextLayer = He, this.bMe = ye
      }
      static create(ee, ie, He, ye) {
        return new li(ee, ie, He, ye)
      }
      get length() {
        let ee = this.chunk.length - 1;
        return ee < 0 ? 0 : Math.max(this.chunkEnd(ee), this.nextLayer.length)
      }
      get size() {
        if (this.dR) return 0;
        let ee = this.nextLayer.size;
        for (let ie of this.chunk) ee += ie.value.length;
        return ee
      }
      chunkEnd(ee) {
        return this.chunkPos[ee] + this.chunk[ee].length
      }
      update(ee) {
        let {
          add: ie = [],
          sort: He = !1,
          filterFrom: ye = 0,
          filterTo: be = this.length
        } = ee, Me = ee.filter;
        if (0 == ie.length && !Me) return this;
        if (He && (ie = ie.slice().sort(ui)), this.dR) return ie.length ? li.of(ie) : this;
        let Ke = new ji(this, null, -1).goto(0),
          Ue = 0,
          Fe = [],
          Je = new Si;
        for (; Ke.value || Ue < ie.length;)
          if (Ue < ie.length && (Ke.from - ie[Ue].from || Ke.startSide - ie[Ue].value.startSide) >= 0) {
            let ee = ie[Ue++];
            Je.addInner(ee.from, ee.to, ee.value) || Fe.push(ee)
          } else 1 == Ke.rangeIndex && Ke.chunkIndex < this.chunk.length && (Ue == ie.length || this.chunkEnd(Ke.chunkIndex) < ie[Ue].from) && (!Me || ye > this.chunkEnd(Ke.chunkIndex) || be < this.chunkPos[Ke.chunkIndex]) && Je.addChunk(this.chunkPos[Ke.chunkIndex], this.chunk[Ke.chunkIndex]) ? Ke.nextChunk() : ((!Me || ye > Ke.to || be < Ke.from || Me(Ke.from, Ke.to, Ke.value)) && (Je.addInner(Ke.from, Ke.to, Ke.value) || Fe.push(vi.create(Ke.from, Ke.to, Ke.value))), Ke.next());
        return Je.finishInner(this.nextLayer.dR && !Fe.length ? li.empty : this.nextLayer.update({
          add: Fe,
          filter: Me,
          filterFrom: ye,
          filterTo: be
        }))
      }
      map(ee) {
        if (ee.empty || this.dR) return this;
        let ie = [],
          He = [],
          ye = -1;
        for (let Me = 0; Me < this.chunk.length; Me++) {
          let be = this.chunkPos[Me],
            Ke = this.chunk[Me],
            Ue = ee.touchesRange(be, be + Ke.length);
          if (!1 === Ue) ye = Math.max(ye, Ke.bMe), ie.push(Ke), He.push(ee.mapPos(be));
          else if (!0 === Ue) {
            let {
              mapped: Me,
              pos: Ue
            } = Ke.map(be, ee);
            Me && (ye = Math.max(ye, Me.bMe), ie.push(Me), He.push(Ue))
          }
        }
        let be = this.nextLayer.map(ee);
        return 0 == ie.length ? be : new li(He, ie, be || li.empty, ye)
      }
      between(ee, ie, He) {
        if (!this.dR) {
          for (let ye = 0; ye < this.chunk.length; ye++) {
            let be = this.chunkPos[ye],
              Me = this.chunk[ye];
            if (ie >= be && ee <= be + Me.length && !1 === Me.between(be, ee - be, ie - be, He)) return
          }
          this.nextLayer.between(ee, ie, He)
        }
      }
      iter() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return si.from([this]).goto(ee)
      }
      get dR() {
        return this.nextLayer == this
      }
      static iter(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return si.from(ee).goto(ie)
      }
      static compare(ee, ie, He, ye) {
        let be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1,
          Me = ee.filter((ee => ee.bMe > 0 || !ee.dR && ee.bMe >= be)),
          Ke = ie.filter((ee => ee.bMe > 0 || !ee.dR && ee.bMe >= be)),
          Ue = ni(Me, Ke, He),
          Fe = new Ni(Me, Ue, be),
          Je = new Ni(Ke, Ue, be);
        He.iterGaps(((ee, ie, He) => Gi(Fe, ee, Je, ie, He, ye))), He.empty && 0 == He.length && Gi(Fe, 0, Je, 0, 0, ye)
      }
      static eq(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          ye = arguments.length > 3 ? arguments[3] : void 0;
        null == ye && (ye = 999999999);
        let be = ee.filter((ee => !ee.dR && ie.indexOf(ee) < 0)),
          Me = ie.filter((ie => !ie.dR && ee.indexOf(ie) < 0));
        if (be.length != Me.length) return !1;
        if (!be.length) return !0;
        let Ke = ni(be, Me),
          Ue = new Ni(be, Ke, 0).goto(He),
          Fe = new Ni(Me, Ke, 0).goto(He);
        for (;;) {
          if (Ue.to != Fe.to || !ri(Ue.active, Fe.active) || Ue.point && (!Fe.point || !Ci(Ue.point, Fe.point))) return !1;
          if (Ue.to > ye) return !0;
          Ue.next(), Fe.next()
        }
      }
      static spans(ee, ie, He, ye) {
        let be = new Ni(ee, null, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1).goto(ie),
          Me = ie,
          Ke = be.openStart;
        for (;;) {
          let ee = Math.min(be.to, He);
          if (be.point) {
            let He = be.activeForPoint(be.to),
              Ue = be.pointFrom < ie ? He.length + 1 : be.point.startSide < 0 ? He.length : Math.min(He.length, Ke);
            ye.point(Me, ee, be.point, He, Ue, be.pointRank), Ke = Math.min(be.openEnd(ee), He.length)
          } else ee > Me && (ye.span(Me, ee, be.active, Ke), Ke = be.openEnd(ee));
          if (be.to > He) return Ke + (be.point && be.to > He ? 1 : 0);
          Me = be.to, be.next()
        }
      }
      static of (ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          He = new Si;
        for (let ye of ee instanceof vi ? [ee] : ie ? function(ee) {
            if (ee.length > 1)
              for (let ie = ee[0], He = 1; He < ee.length; He++) {
                let ye = ee[He];
                if (ui(ie, ye) > 0) return ee.slice().sort(ui);
                ie = ye
              }
            return ee
          }(ee) : ee) He.add(ye.from, ye.to, ye.value);
        return He.finish()
      }
      static join(ee) {
        if (!ee.length) return li.empty;
        let ie = ee[ee.length - 1];
        for (let He = ee.length - 2; He >= 0; He--)
          for (let ye = ee[He]; ye != li.empty; ye = ye.nextLayer) ie = new li(ye.chunkPos, ye.chunk, ie, Math.max(ye.bMe, ie.bMe));
        return ie
      }
    }
    li.empty = new li([], [], null, -1), li.empty.nextLayer = li.empty;
    class Si {
      finishChunk(ee) {
        this.chunks.push(new mi(this.from, this.to, this.value, this.bMe)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.bMe), this.bMe = -1, ee && (this.from = [], this.to = [], this.value = [])
      }
      constructor() {
        this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.bMe = -1, this.setMaxPoint = -1, this.nextLayer = null
      }
      add(ee, ie, He) {
        this.addInner(ee, ie, He) || (this.nextLayer || (this.nextLayer = new Si)).add(ee, ie, He)
      }
      addInner(ee, ie, He) {
        let ye = ee - this.lastTo || He.startSide - this.last.endSide;
        if (ye <= 0 && (ee - this.lastFrom || He.startSide - this.last.startSide) < 0) throw new Error("Ranges must be added sorted by `from` position and `startSide`");
        return !(ye < 0) && (250 == this.from.length && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = ee), this.from.push(ee - this.chunkStart), this.to.push(ie - this.chunkStart), this.last = He, this.lastFrom = ee, this.lastTo = ie, this.value.push(He), He.point && (this.bMe = Math.max(this.bMe, ie - ee)), !0)
      }
      addChunk(ee, ie) {
        if ((ee - this.lastTo || ie.value[0].startSide - this.last.endSide) < 0) return !1;
        this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, ie.bMe), this.chunks.push(ie), this.chunkPos.push(ee);
        let He = ie.value.length - 1;
        return this.last = ie.value[He], this.lastFrom = ie.from[He] + ee, this.lastTo = ie.to[He] + ee, !0
      }
      finish() {
        return this.finishInner(li.empty)
      }
      finishInner(ee) {
        if (this.from.length && this.finishChunk(!1), 0 == this.chunks.length) return ee;
        let ie = li.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(ee) : ee, this.setMaxPoint);
        return this.from = null, ie
      }
    }

    function ni(ee, ie, He) {
      let ye = new Map;
      for (let Me of ee)
        for (let ee = 0; ee < Me.chunk.length; ee++) Me.chunk[ee].bMe <= 0 && ye.set(Me.chunk[ee], Me.chunkPos[ee]);
      let be = new Set;
      for (let Me of ie)
        for (let ee = 0; ee < Me.chunk.length; ee++) {
          let ie = ye.get(Me.chunk[ee]);
          null == ie || (He ? He.mapPos(ie) : ie) != Me.chunkPos[ee] || (null === He || void 0 === He ? void 0 : He.touchesRange(ie, ie + Me.chunk[ee].length)) || be.add(Me.chunk[ee])
        }
      return be
    }
    class ji {
      constructor(ee, ie, He) {
        let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.layer = ee, this.skip = ie, this.MMe = He, this.rank = ye
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      get endSide() {
        return this.value ? this.value.endSide : 0
      }
      goto(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(ee, ie, !1), this
      }
      gotoInner(ee, ie, He) {
        for (; this.chunkIndex < this.layer.chunk.length;) {
          let ie = this.layer.chunk[this.chunkIndex];
          if (!(this.skip && this.skip.has(ie) || this.layer.chunkEnd(this.chunkIndex) < ee || ie.bMe < this.MMe)) break;
          this.chunkIndex++, He = !1
        }
        if (this.chunkIndex < this.layer.chunk.length) {
          let ye = this.layer.chunk[this.chunkIndex].findIndex(ee - this.layer.chunkPos[this.chunkIndex], ie, !0);
          (!He || this.rangeIndex < ye) && this.setRangeIndex(ye)
        }
        this.next()
      }
      forward(ee, ie) {
        (this.to - ee || this.endSide - ie) < 0 && this.gotoInner(ee, ie, !0)
      }
      next() {
        for (;;) {
          if (this.chunkIndex == this.layer.chunk.length) {
            this.from = this.to = 1e9, this.value = null;
            break
          } {
            let ee = this.layer.chunkPos[this.chunkIndex],
              ie = this.layer.chunk[this.chunkIndex],
              He = ee + ie.from[this.rangeIndex];
            if (this.from = He, this.to = ee + ie.to[this.rangeIndex], this.value = ie.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.MMe < 0 || this.value.point && this.to - this.from >= this.MMe) break
          }
        }
      }
      setRangeIndex(ee) {
        if (ee == this.layer.chunk[this.chunkIndex].value.length) {
          if (this.chunkIndex++, this.skip)
            for (; this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]);) this.chunkIndex++;
          this.rangeIndex = 0
        } else this.rangeIndex = ee
      }
      nextChunk() {
        this.chunkIndex++, this.rangeIndex = 0, this.next()
      }
      compare(ee) {
        return this.from - ee.from || this.startSide - ee.startSide || this.rank - ee.rank || this.to - ee.to || this.endSide - ee.endSide
      }
    }
    class si {
      constructor(ee) {
        this.heap = ee
      }
      static from(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          ye = [];
        for (let be = 0; be < ee.length; be++)
          for (let Me = ee[be]; !Me.dR; Me = Me.nextLayer) Me.bMe >= He && ye.push(new ji(Me, ie, He, be));
        return 1 == ye.length ? ye[0] : new si(ye)
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      goto(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        for (let He of this.heap) He.goto(ee, ie);
        for (let He = this.heap.length >> 1; He >= 0; He--) Ii(this.heap, He);
        return this.next(), this
      }
      forward(ee, ie) {
        for (let He of this.heap) He.forward(ee, ie);
        for (let He = this.heap.length >> 1; He >= 0; He--) Ii(this.heap, He);
        (this.to - ee || this.value.endSide - ie) < 0 && this.next()
      }
      next() {
        if (0 == this.heap.length) this.from = this.to = 1e9, this.value = null, this.rank = -1;
        else {
          let ee = this.heap[0];
          this.from = ee.from, this.to = ee.to, this.value = ee.value, this.rank = ee.rank, ee.value && ee.next(), Ii(this.heap, 0)
        }
      }
    }

    function Ii(ee, ie) {
      for (let He = ee[ie];;) {
        let ye = 1 + (ie << 1);
        if (ye >= ee.length) break;
        let be = ee[ye];
        if (ye + 1 < ee.length && be.compare(ee[ye + 1]) >= 0 && (be = ee[ye + 1], ye++), He.compare(be) < 0) break;
        ee[ye] = He, ee[ie] = be, ie = ye
      }
    }
    class Ni {
      constructor(ee, ie, He) {
        this.MMe = He, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = si.from(ee, ie, He)
      }
      goto(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.cursor.goto(ee, ie), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = ee, this.endSide = ie, this.openStart = -1, this.next(), this
      }
      forward(ee, ie) {
        for (; this.minActive > -1 && (this.activeTo[this.minActive] - ee || this.active[this.minActive].endSide - ie) < 0;) this.removeActive(this.minActive);
        this.cursor.forward(ee, ie)
      }
      removeActive(ee) {
        Qi(this.active, ee), Qi(this.activeTo, ee), Qi(this.activeRank, ee), this.minActive = iH(this.active, this.activeTo)
      }
      addActive(ee) {
        let ie = 0,
          {
            value: He,
            to: ye,
            rank: be
          } = this.cursor;
        for (; ie < this.activeRank.length && (be - this.activeRank[ie] || ye - this.activeTo[ie]) > 0;) ie++;
        eH(this.active, ie, He), eH(this.activeTo, ie, ye), eH(this.activeRank, ie, be), ee && eH(ee, ie, this.cursor.from), this.minActive = iH(this.active, this.activeTo)
      }
      next() {
        let ee = this.to,
          ie = this.point;
        this.point = null;
        let He = this.openStart < 0 ? [] : null;
        for (;;) {
          let ye = this.minActive;
          if (ye > -1 && (this.activeTo[ye] - this.cursor.from || this.active[ye].endSide - this.cursor.startSide) < 0) {
            if (this.activeTo[ye] > ee) {
              this.to = this.activeTo[ye], this.endSide = this.active[ye].endSide;
              break
            }
            this.removeActive(ye), He && Qi(He, ye)
          } else {
            if (!this.cursor.value) {
              this.to = this.endSide = 1e9;
              break
            }
            if (this.cursor.from > ee) {
              this.to = this.cursor.from, this.endSide = this.cursor.startSide;
              break
            } {
              let ee = this.cursor.value;
              if (ee.point) {
                if (!(ie && this.cursor.to == this.to && this.cursor.from < this.cursor.to)) {
                  this.point = ee, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = ee.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
                  break
                }
                this.cursor.next()
              } else this.addActive(He), this.cursor.next()
            }
          }
        }
        if (He) {
          this.openStart = 0;
          for (let ie = He.length - 1; ie >= 0 && He[ie] < ee; ie--) this.openStart++
        }
      }
      activeForPoint(ee) {
        if (!this.active.length) return this.active;
        let ie = [];
        for (let He = this.active.length - 1; He >= 0 && !(this.activeRank[He] < this.pointRank); He--)(this.activeTo[He] > ee || this.activeTo[He] == ee && this.active[He].endSide >= this.point.endSide) && ie.push(this.active[He]);
        return ie.reverse()
      }
      openEnd(ee) {
        let ie = 0;
        for (let He = this.activeTo.length - 1; He >= 0 && this.activeTo[He] > ee; He--) ie++;
        return ie
      }
    }

    function Gi(ee, ie, He, ye, be, Me) {
      ee.goto(ie), He.goto(ye);
      let Ke = ye + be,
        Ue = ye,
        Fe = ye - ie,
        Je = !!Me.boundChange;
      for (let oe = !1;;) {
        let ie = ee.to + Fe - He.to,
          ye = ie || ee.endSide - He.endSide,
          be = ye < 0 ? ee.to + Fe : He.to,
          Re = Math.min(be, Ke);
        if (ee.point || He.point ? (ee.point && He.point && Ci(ee.point, He.point) && ri(ee.activeForPoint(ee.to), He.activeForPoint(He.to)) || Me.comparePoint(Ue, Re, ee.point, He.point), oe = !1) : (oe && Me.boundChange(Ue), Re > Ue && !ri(ee.active, He.active) && Me.compareRange(Ue, Re, ee.active, He.active), Je && Re < Ke && (ie || ee.openEnd(be) != He.openEnd(be)) && (oe = !0)), be > Ke) break;
        Ue = be, ye <= 0 && ee.next(), ye >= 0 && He.next()
      }
    }

    function ri(ee, ie) {
      if (ee.length != ie.length) return !1;
      for (let He = 0; He < ee.length; He++)
        if (ee[He] != ie[He] && !Ci(ee[He], ie[He])) return !1;
      return !0
    }

    function Qi(ee, ie) {
      for (let He = ie, ye = ee.length - 1; He < ye; He++) ee[He] = ee[He + 1];
      ee.pop()
    }

    function eH(ee, ie, He) {
      for (let ye = ee.length - 1; ye >= ie; ye--) ee[ye + 1] = ee[ye];
      ee[ie] = He
    }

    function iH(ee, ie) {
      let He = -1,
        ye = 1e9;
      for (let be = 0; be < ie.length; be++)(ie[be] - ye || ee[be].endSide - ee[He].endSide) < 0 && (He = be, ye = ie[be]);
      return He
    }

    function HH(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ee.length,
        ye = 0;
      for (let be = 0; be < He && be < ee.length;) 9 == ee.charCodeAt(be) ? (ye += ie - ye % ie, be++) : (ye++, be = te(ee, be));
      return ye
    }

    function yH(ee, ie, He, ye) {
      for (let be = 0, Me = 0;;) {
        if (Me >= ie) return be;
        if (be == ee.length) break;
        Me += 9 == ee.charCodeAt(be) ? He - Me % He : 1, be = te(ee, be)
      }
      return !0 === ye ? -1 : ee.length
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);