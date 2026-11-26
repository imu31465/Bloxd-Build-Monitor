export const id = 604;
export const ids = [604];
export const modules = {
  44470: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => RO,
      f: () => IB,
      ChangeSet: () => FB,
      g: () => uO,
      j: () => cB,
      l: () => iO,
      o: () => eB,
      p: () => mB,
      r: () => DO,
      z: () => cO,
      v: () => hO,
      C: () => gO,
      D: () => VO,
      G: () => xB,
      K: () => qB,
      L: () => SO,
      O: () => kB,
      R: () => KB,
      V: () => LO,
      W: () => BG,
      X: () => fB,
      _: () => OG,
      bb: () => dB
    });
    let YB = [],
      DB = [];

    function QB(BB) {
      if (BB < 768) return !1;
      for (let OB = 0, GB = YB.length;;) {
        let QB = OB + GB >> 1;
        if (BB < YB[QB]) GB = QB;
        else {
          if (!(BB >= DB[QB])) return !0;
          OB = QB + 1
        }
        if (OB == GB) return !1
      }
    }

    function oB(BB) {
      return BB >= 127462 && BB <= 127487
    }(() => {
      let BB = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((BB => BB ? parseInt(BB, 36) : 1));
      for (let OB = 0, GB = 0; OB < BB.length; OB++)(OB % 2 ? DB : YB).push(GB += BB[OB])
    })();
    const jB = 8205;

    function yB(BB, OB) {
      return (!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2] ? JB : MB)(BB, OB, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function JB(BB, OB, GB) {
      if (OB == BB.length) return OB;
      OB && zB(BB.charCodeAt(OB)) && lB(BB.charCodeAt(OB - 1)) && OB--;
      let YB = PB(BB, OB);
      for (OB += pB(YB); OB < BB.length;) {
        let DB = PB(BB, OB);
        if (YB == jB || DB == jB || GB && QB(DB)) OB += pB(DB), YB = DB;
        else {
          if (!oB(DB)) break;
          {
            let GB = 0,
              YB = OB - 2;
            for (; YB >= 0 && oB(PB(BB, YB));) GB++, YB -= 2;
            if (GB % 2 == 0) break;
            OB += 2
          }
        }
      }
      return OB
    }

    function MB(BB, OB, GB) {
      for (; OB > 0;) {
        let YB = JB(BB, OB - 2, GB);
        if (YB < OB) return YB;
        OB--
      }
      return 0
    }

    function PB(BB, OB) {
      let GB = BB.charCodeAt(OB);
      if (!lB(GB) || OB + 1 == BB.length) return GB;
      let YB = BB.charCodeAt(OB + 1);
      return zB(YB) ? YB - 56320 + (GB - 55296 << 10) + 65536 : GB
    }

    function zB(BB) {
      return BB >= 56320 && BB < 57344
    }

    function lB(BB) {
      return BB >= 55296 && BB < 56320
    }

    function pB(BB) {
      return BB < 65536 ? 1 : 2
    }
    class qB {
      lineAt(BB) {
        if (BB < 0 || BB > this.length) throw new RangeError(`Invalid position ${BB} in document of length ${this.length}`);
        return this.lineInner(BB, !1, 1, 0)
      }
      line(BB) {
        if (BB < 1 || BB > this.lines) throw new RangeError(`Invalid line number ${BB} in ${this.lines}-line document`);
        return this.lineInner(BB, !0, 1, 0)
      }
      replace(BB, OB, GB) {
        [BB, OB] = UB(this, BB, OB);
        let YB = [];
        return this.decompose(0, BB, YB, 2), GB.length && GB.decompose(0, GB.length, YB, 3), this.decompose(OB, this.length, YB, 1), NB.from(YB, this.length - (OB - BB) + GB.length)
      }
      append(BB) {
        return this.replace(this.length, this.length, BB)
      }
      slice(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        [BB, OB] = UB(this, BB, OB);
        let GB = [];
        return this.decompose(BB, OB, GB, 0), NB.from(GB, OB - BB)
      }
      eq(BB) {
        if (BB == this) return !0;
        if (BB.length != this.length || BB.lines != this.lines) return !1;
        let OB = this.scanIdentical(BB, 1),
          GB = this.length - this.scanIdentical(BB, -1),
          YB = new AB(this),
          DB = new AB(BB);
        for (let QB = OB, oB = OB;;) {
          if (YB.next(QB), DB.next(QB), QB = 0, YB.lineBreak != DB.lineBreak || YB.done != DB.done || YB.value != DB.value) return !1;
          if (oB += YB.value.length, YB.done || oB >= GB) return !0
        }
      }
      iter() {
        return new AB(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1)
      }
      iterRange(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        return new VB(this, BB, OB)
      }
      iterLines(BB, OB) {
        let GB;
        if (null == BB) GB = this.iter();
        else {
          null == OB && (OB = this.lines + 1);
          let YB = this.line(BB).from;
          GB = this.iterRange(YB, Math.max(YB, OB == this.lines + 1 ? this.length : OB <= 1 ? 0 : this.line(OB - 1).to))
        }
        return new SB(GB)
      }
      toString() {
        return this.sliceString(0)
      }
      toJSON() {
        let BB = [];
        return this.flatten(BB), BB
      }
      constructor() {}
      static of (BB) {
        if (0 == BB.length) throw new RangeError("A document must have at least one line");
        return 1 != BB.length || BB[0] ? BB.length <= 32 ? new ZB(BB) : NB.from(ZB.split(BB, [])) : qB.empty
      }
    }
    class ZB extends qB {
      constructor(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(BB) {
          let OB = -1;
          for (let GB of BB) OB += GB.length + 1;
          return OB
        }(BB);
        super(), this.text = BB, this.length = OB
      }
      get lines() {
        return this.text.length
      }
      get children() {
        return null
      }
      lineInner(BB, OB, GB, YB) {
        for (let DB = 0;; DB++) {
          let QB = this.text[DB],
            oB = YB + QB.length;
          if ((OB ? GB : oB) >= BB) return new nB(YB, oB, GB, QB);
          YB = oB + 1, GB++
        }
      }
      decompose(BB, OB, GB, YB) {
        let DB = BB <= 0 && OB >= this.length ? this : new ZB(WB(this.text, BB, OB), Math.min(OB, this.length) - Math.max(0, BB));
        if (1 & YB) {
          let BB = GB.pop(),
            OB = RB(DB.text, BB.text.slice(), 0, DB.length);
          if (OB.length <= 32) GB.push(new ZB(OB, BB.length + DB.length));
          else {
            let BB = OB.length >> 1;
            GB.push(new ZB(OB.slice(0, BB)), new ZB(OB.slice(BB)))
          }
        } else GB.push(DB)
      }
      replace(BB, OB, GB) {
        if (!(GB instanceof ZB)) return super.replace(BB, OB, GB);
        [BB, OB] = UB(this, BB, OB);
        let YB = RB(this.text, RB(GB.text, WB(this.text, 0, BB)), OB),
          DB = this.length + GB.length - (OB - BB);
        return YB.length <= 32 ? new ZB(YB, DB) : NB.from(ZB.split(YB, []), DB)
      }
      sliceString(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [BB, OB] = UB(this, BB, OB);
        let YB = "";
        for (let DB = 0, QB = 0; DB <= OB && QB < this.text.length; QB++) {
          let oB = this.text[QB],
            jB = DB + oB.length;
          DB > BB && QB && (YB += GB), BB < jB && OB > DB && (YB += oB.slice(Math.max(0, BB - DB), OB - DB)), DB = jB + 1
        }
        return YB
      }
      flatten(BB) {
        for (let OB of this.text) BB.push(OB)
      }
      scanIdentical() {
        return 0
      }
      static split(BB, OB) {
        let GB = [],
          YB = -1;
        for (let DB of BB) GB.push(DB), YB += DB.length + 1, 32 == GB.length && (OB.push(new ZB(GB, YB)), GB = [], YB = -1);
        return YB > -1 && OB.push(new ZB(GB, YB)), OB
      }
    }
    class NB extends qB {
      constructor(BB, OB) {
        super(), this.children = BB, this.length = OB, this.lines = 0;
        for (let GB of BB) this.lines += GB.lines
      }
      lineInner(BB, OB, GB, YB) {
        for (let DB = 0;; DB++) {
          let QB = this.children[DB],
            oB = YB + QB.length,
            jB = GB + QB.lines - 1;
          if ((OB ? jB : oB) >= BB) return QB.lineInner(BB, OB, GB, YB);
          YB = oB + 1, GB = jB + 1
        }
      }
      decompose(BB, OB, GB, YB) {
        for (let DB = 0, QB = 0; QB <= OB && DB < this.children.length; DB++) {
          let oB = this.children[DB],
            jB = QB + oB.length;
          if (BB <= jB && OB >= QB) {
            let DB = YB & ((QB <= BB ? 1 : 0) | (jB >= OB ? 2 : 0));
            QB >= BB && jB <= OB && !DB ? GB.push(oB) : oB.decompose(BB - QB, OB - QB, GB, DB)
          }
          QB = jB + 1
        }
      }
      replace(BB, OB, GB) {
        if ([BB, OB] = UB(this, BB, OB), GB.lines < this.lines)
          for (let YB = 0, DB = 0; YB < this.children.length; YB++) {
            let QB = this.children[YB],
              oB = DB + QB.length;
            if (BB >= DB && OB <= oB) {
              let jB = QB.replace(BB - DB, OB - DB, GB),
                yB = this.lines - QB.lines + jB.lines;
              if (jB.lines < yB >> 4 && jB.lines > yB >> 6) {
                let DB = this.children.slice();
                return DB[YB] = jB, new NB(DB, this.length - (OB - BB) + GB.length)
              }
              return super.replace(DB, oB, jB)
            }
            DB = oB + 1
          }
        return super.replace(BB, OB, GB)
      }
      sliceString(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [BB, OB] = UB(this, BB, OB);
        let YB = "";
        for (let DB = 0, QB = 0; DB < this.children.length && QB <= OB; DB++) {
          let oB = this.children[DB],
            jB = QB + oB.length;
          QB > BB && DB && (YB += GB), BB < jB && OB > QB && (YB += oB.sliceString(BB - QB, OB - QB, GB)), QB = jB + 1
        }
        return YB
      }
      flatten(BB) {
        for (let OB of this.children) OB.flatten(BB)
      }
      scanIdentical(BB, OB) {
        if (!(BB instanceof NB)) return 0;
        let GB = 0,
          [YB, DB, QB, oB] = OB > 0 ? [0, 0, this.children.length, BB.children.length] : [this.children.length - 1, BB.children.length - 1, -1, -1];
        for (;; YB += OB, DB += OB) {
          if (YB == QB || DB == oB) return GB;
          let jB = this.children[YB],
            yB = BB.children[DB];
          if (jB != yB) return GB + jB.scanIdentical(yB, OB);
          GB += jB.length + 1
        }
      }
      static from(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BB.reduce(((BB, OB) => BB + OB.length + 1), -1),
          GB = 0;
        for (let zB of BB) GB += zB.lines;
        if (GB < 32) {
          let GB = [];
          for (let OB of BB) OB.flatten(GB);
          return new ZB(GB, OB)
        }
        let YB = Math.max(32, GB >> 5),
          DB = YB << 1,
          QB = YB >> 1,
          oB = [],
          jB = 0,
          yB = -1,
          JB = [];

        function MB(BB) {
          let OB;
          if (BB.lines > DB && BB instanceof NB)
            for (let GB of BB.children) MB(GB);
          else BB.lines > QB && (jB > QB || !jB) ? (PB(), oB.push(BB)) : BB instanceof ZB && jB && (OB = JB[JB.length - 1]) instanceof ZB && BB.lines + OB.lines <= 32 ? (jB += BB.lines, yB += BB.length + 1, JB[JB.length - 1] = new ZB(OB.text.concat(BB.text), OB.length + 1 + BB.length)) : (jB + BB.lines > YB && PB(), jB += BB.lines, yB += BB.length + 1, JB.push(BB))
        }

        function PB() {
          0 != jB && (oB.push(1 == JB.length ? JB[0] : NB.from(JB, yB)), yB = -1, jB = JB.length = 0)
        }
        for (let zB of BB) MB(zB);
        return PB(), 1 == oB.length ? oB[0] : new NB(oB, OB)
      }
    }

    function RB(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e9;
      for (let DB = 0, QB = 0, oB = !0; QB < BB.length && DB <= YB; QB++) {
        let jB = BB[QB],
          yB = DB + jB.length;
        yB >= GB && (yB > YB && (jB = jB.slice(0, YB - DB)), DB < GB && (jB = jB.slice(GB - DB)), oB ? (OB[OB.length - 1] += jB, oB = !1) : OB.push(jB)), DB = yB + 1
      }
      return OB
    }

    function WB(BB, OB, GB) {
      return RB(BB, [""], OB, GB)
    }
    qB.empty = new ZB([""], 0);
    class AB {
      constructor(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.dir = OB, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [BB], this.offsets = [OB > 0 ? 1 : (BB instanceof ZB ? BB.text.length : BB.children.length) << 1]
      }
      nextInner(BB, OB) {
        for (this.done = this.lineBreak = !1;;) {
          let GB = this.nodes.length - 1,
            YB = this.nodes[GB],
            DB = this.offsets[GB],
            QB = DB >> 1,
            oB = YB instanceof ZB ? YB.text.length : YB.children.length;
          if (QB == (OB > 0 ? oB : 0)) {
            if (0 == GB) return this.done = !0, this.value = "", this;
            OB > 0 && this.offsets[GB - 1]++, this.nodes.pop(), this.offsets.pop()
          } else if ((1 & DB) == (OB > 0 ? 0 : 1)) {
            if (this.offsets[GB] += OB, 0 == BB) return this.lineBreak = !0, this.value = "\n", this;
            BB--
          } else if (YB instanceof ZB) {
            let DB = YB.text[QB + (OB < 0 ? -1 : 0)];
            if (this.offsets[GB] += OB, DB.length > Math.max(0, BB)) return this.value = 0 == BB ? DB : OB > 0 ? DB.slice(BB) : DB.slice(0, DB.length - BB), this;
            BB -= DB.length
          } else {
            let DB = YB.children[QB + (OB < 0 ? -1 : 0)];
            BB > DB.length ? (BB -= DB.length, this.offsets[GB] += OB) : (OB < 0 && this.offsets[GB]--, this.nodes.push(DB), this.offsets.push(OB > 0 ? 1 : (DB instanceof ZB ? DB.text.length : DB.children.length) << 1))
          }
        }
      }
      next() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return BB < 0 && (this.nextInner(-BB, -this.dir), BB = this.value.length), this.nextInner(BB, this.dir)
      }
    }
    class VB {
      constructor(BB, OB, GB) {
        this.value = "", this.done = !1, this.cursor = new AB(BB, OB > GB ? -1 : 1), this.pos = OB > GB ? BB.length : 0, this.from = Math.min(OB, GB), this.to = Math.max(OB, GB)
      }
      nextInner(BB, OB) {
        if (OB < 0 ? this.pos <= this.from : this.pos >= this.to) return this.value = "", this.done = !0, this;
        BB += Math.max(0, OB < 0 ? this.pos - this.to : this.from - this.pos);
        let GB = OB < 0 ? this.pos - this.from : this.to - this.pos;
        BB > GB && (BB = GB), GB -= BB;
        let {
          value: YB
        } = this.cursor.next(BB);
        return this.pos += (YB.length + BB) * OB, this.value = YB.length <= GB ? YB : OB < 0 ? YB.slice(YB.length - GB) : YB.slice(0, GB), this.done = !this.value, this
      }
      next() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return BB < 0 ? BB = Math.max(BB, this.from - this.pos) : BB > 0 && (BB = Math.min(BB, this.to - this.pos)), this.nextInner(BB, this.cursor.dir)
      }
      get lineBreak() {
        return this.cursor.lineBreak && "" != this.value
      }
    }
    class SB {
      constructor(BB) {
        this.inner = BB, this.afterBreak = !0, this.value = "", this.done = !1
      }
      next() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          {
            done: OB,
            lineBreak: GB,
            value: YB
          } = this.inner.next(BB);
        return OB && this.afterBreak ? (this.value = "", this.afterBreak = !1) : OB ? (this.done = !0, this.value = "") : GB ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = YB, this.afterBreak = !1), this
      }
      get lineBreak() {
        return !1
      }
    }
    "undefined" != typeof Symbol && (qB.prototype[Symbol.iterator] = function() {
      return this.iter()
    }, AB.prototype[Symbol.iterator] = VB.prototype[Symbol.iterator] = SB.prototype[Symbol.iterator] = function() {
      return this
    });
    class nB {
      constructor(BB, OB, GB, YB) {
        this.from = BB, this.to = OB, this.number = GB, this.text = YB
      }
      get length() {
        return this.to - this.from
      }
    }

    function UB(BB, OB, GB) {
      return [OB = Math.max(0, Math.min(BB.length, OB)), Math.max(OB, Math.min(BB.length, GB))]
    }

    function fB(BB, OB) {
      return yB(BB, OB, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function kB(BB, OB) {
      let GB = BB.charCodeAt(OB);
      if (!((YB = GB) >= 55296 && YB < 56320) || OB + 1 == BB.length) return GB;
      var YB;
      let DB = BB.charCodeAt(OB + 1);
      return function(BB) {
        return BB >= 56320 && BB < 57344
      }(DB) ? DB - 56320 + (GB - 55296 << 10) + 65536 : GB
    }

    function dB(BB) {
      return BB <= 65535 ? String.fromCharCode(BB) : (BB -= 65536, String.fromCharCode(55296 + (BB >> 10), 56320 + (1023 & BB)))
    }

    function KB(BB) {
      return BB < 65536 ? 1 : 2
    }
    const uB = /\r\n?|\n/;
    var mB = function(BB) {
      return BB[BB.Simple = 0] = "Simple", BB[BB.TrackDel = 1] = "TrackDel", BB[BB.TrackBefore = 2] = "TrackBefore", BB[BB.TrackAfter = 3] = "TrackAfter", BB
    }(mB || (mB = {}));
    class IB {
      constructor(BB) {
        this.sections = BB
      }
      get length() {
        let BB = 0;
        for (let OB = 0; OB < this.sections.length; OB += 2) BB += this.sections[OB];
        return BB
      }
      get newLength() {
        let BB = 0;
        for (let OB = 0; OB < this.sections.length; OB += 2) {
          let GB = this.sections[OB + 1];
          BB += GB < 0 ? this.sections[OB] : GB
        }
        return BB
      }
      get empty() {
        return 0 == this.sections.length || 2 == this.sections.length && this.sections[1] < 0
      }
      iterGaps(BB) {
        for (let OB = 0, GB = 0, YB = 0; OB < this.sections.length;) {
          let DB = this.sections[OB++],
            QB = this.sections[OB++];
          QB < 0 ? (BB(GB, YB, DB), YB += DB) : YB += QB, GB += DB
        }
      }
      iterChangedRanges(BB) {
        gB(this, BB, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get invertedDesc() {
        let BB = [];
        for (let OB = 0; OB < this.sections.length;) {
          let GB = this.sections[OB++],
            YB = this.sections[OB++];
          YB < 0 ? BB.push(GB, YB) : BB.push(YB, GB)
        }
        return new IB(BB)
      }
      composeDesc(BB) {
        return this.empty ? BB : BB.empty ? this : XB(this, BB)
      }
      mapDesc(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return BB.empty ? this : rB(this, BB, OB)
      }
      mapPos(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : mB.Simple,
          YB = 0,
          DB = 0;
        for (let QB = 0; QB < this.sections.length;) {
          let oB = this.sections[QB++],
            jB = this.sections[QB++],
            yB = YB + oB;
          if (jB < 0) {
            if (yB > BB) return DB + (BB - YB);
            DB += oB
          } else {
            if (GB != mB.Simple && yB >= BB && (GB == mB.TrackDel && YB < BB && yB > BB || GB == mB.TrackBefore && YB < BB || GB == mB.TrackAfter && yB > BB)) return null;
            if (yB > BB || yB == BB && OB < 0 && !oB) return BB == YB || OB < 0 ? DB : DB + jB;
            DB += jB
          }
          YB = yB
        }
        if (BB > YB) throw new RangeError(`Position ${BB} is out of range for changeset of length ${YB}`);
        return DB
      }
      touchesRange(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BB;
        for (let GB = 0, YB = 0; GB < this.sections.length && YB <= OB;) {
          let DB = YB + this.sections[GB++];
          if (this.sections[GB++] >= 0 && YB <= OB && DB >= BB) return !(YB < BB && DB > OB) || "cover";
          YB = DB
        }
        return !1
      }
      toString() {
        let BB = "";
        for (let OB = 0; OB < this.sections.length;) {
          let GB = this.sections[OB++],
            YB = this.sections[OB++];
          BB += (BB ? " " : "") + GB + (YB >= 0 ? ":" + YB : "")
        }
        return BB
      }
      toJSON() {
        return this.sections
      }
      static fromJSON(BB) {
        if (!Array.isArray(BB) || BB.length % 2 || BB.some((BB => "number" != typeof BB))) throw new RangeError("Invalid JSON representation of ChangeDesc");
        return new IB(BB)
      }
      static create(BB) {
        return new IB(BB)
      }
    }
    class FB extends IB {
      constructor(BB, OB) {
        super(BB), this.inserted = OB
      }
      apply(BB) {
        if (this.length != BB.length) throw new RangeError("Applying change set to a document with the wrong length");
        return gB(this, ((OB, GB, YB, DB, QB) => BB = BB.replace(YB, YB + (GB - OB), QB)), !1), BB
      }
      mapDesc(BB) {
        return rB(this, BB, arguments.length > 1 && void 0 !== arguments[1] && arguments[1], !0)
      }
      invert(BB) {
        let OB = this.sections.slice(),
          GB = [];
        for (let YB = 0, DB = 0; YB < OB.length; YB += 2) {
          let QB = OB[YB],
            oB = OB[YB + 1];
          if (oB >= 0) {
            OB[YB] = oB, OB[YB + 1] = QB;
            let jB = YB >> 1;
            for (; GB.length < jB;) GB.push(qB.empty);
            GB.push(QB ? BB.slice(DB, DB + QB) : qB.empty)
          }
          DB += QB
        }
        return new FB(OB, GB)
      }
      compose(BB) {
        return this.empty ? BB : BB.empty ? this : XB(this, BB, !0)
      }
      map(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return BB.empty ? this : rB(this, BB, OB, !0)
      }
      iterChanges(BB) {
        gB(this, BB, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get desc() {
        return IB.create(this.sections)
      }
      filter(BB) {
        let OB = [],
          GB = [],
          YB = [],
          DB = new wB(this);
        BB: for (let QB = 0, oB = 0;;) {
          let jB = QB == BB.length ? 1e9 : BB[QB++];
          for (; oB < jB || oB == jB && 0 == DB.len;) {
            if (DB.done) break BB;
            let BB = Math.min(DB.len, jB - oB);
            iB(YB, BB, -1);
            let QB = -1 == DB.ins ? -1 : 0 == DB.off ? DB.ins : 0;
            iB(OB, BB, QB), QB > 0 && LB(GB, OB, DB.text), DB.forward(BB), oB += BB
          }
          let yB = BB[QB++];
          for (; oB < yB;) {
            if (DB.done) break BB;
            let BB = Math.min(DB.len, yB - oB);
            iB(OB, BB, -1), iB(YB, BB, -1 == DB.ins ? -1 : 0 == DB.off ? DB.ins : 0), DB.forward(BB), oB += BB
          }
        }
        return {
          changes: new FB(OB, GB),
          filtered: IB.create(YB)
        }
      }
      toJSON() {
        let BB = [];
        for (let OB = 0; OB < this.sections.length; OB += 2) {
          let GB = this.sections[OB],
            YB = this.sections[OB + 1];
          YB < 0 ? BB.push(GB) : 0 == YB ? BB.push([GB]) : BB.push([GB].concat(this.inserted[OB >> 1].toJSON()))
        }
        return BB
      }
      static of (BB, OB, GB) {
        let YB = [],
          DB = [],
          QB = 0,
          oB = null;

        function jB() {
          if (!(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && !YB.length) return;
          QB < OB && iB(YB, OB - QB, -1);
          let BB = new FB(YB, DB);
          oB = oB ? oB.compose(BB.map(oB)) : BB, YB = [], DB = [], QB = 0
        }
        return function BB(yB) {
          if (Array.isArray(yB))
            for (let OB of yB) BB(OB);
          else if (yB instanceof FB) {
            if (yB.length != OB) throw new RangeError(`Mismatched change set length (got ${yB.length}, expected ${OB})`);
            jB(), oB = oB ? oB.compose(yB.map(oB)) : yB
          } else {
            let {
              from: BB,
              to: oB = BB,
              insert: JB
            } = yB;
            if (BB > oB || BB < 0 || oB > OB) throw new RangeError(`Invalid change range ${BB} to ${oB} (in doc of length ${OB})`);
            let MB = JB ? "string" == typeof JB ? qB.of(JB.split(GB || uB)) : JB : qB.empty,
              PB = MB.length;
            if (BB == oB && 0 == PB) return;
            BB < QB && jB(), BB > QB && iB(YB, BB - QB, -1), iB(YB, oB - BB, PB), LB(DB, YB, MB), QB = oB
          }
        }(BB), jB(!oB), oB
      }
      static empty(BB) {
        return new FB(BB ? [BB, -1] : [], [])
      }
      static fromJSON(BB) {
        if (!Array.isArray(BB)) throw new RangeError("Invalid JSON representation of ChangeSet");
        let OB = [],
          GB = [];
        for (let YB = 0; YB < BB.length; YB++) {
          let DB = BB[YB];
          if ("number" == typeof DB) OB.push(DB, -1);
          else {
            if (!Array.isArray(DB) || "number" != typeof DB[0] || DB.some(((BB, OB) => OB && "string" != typeof BB))) throw new RangeError("Invalid JSON representation of ChangeSet");
            if (1 == DB.length) OB.push(DB[0], 0);
            else {
              for (; GB.length < YB;) GB.push(qB.empty);
              GB[YB] = qB.of(DB.slice(1)), OB.push(DB[0], GB[YB].length)
            }
          }
        }
        return new FB(OB, GB)
      }
      static createSet(BB, OB) {
        return new FB(BB, OB)
      }
    }

    function iB(BB, OB, GB) {
      let YB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (0 == OB && GB <= 0) return;
      let DB = BB.length - 2;
      DB >= 0 && GB <= 0 && GB == BB[DB + 1] ? BB[DB] += OB : DB >= 0 && 0 == OB && 0 == BB[DB] ? BB[DB + 1] += GB : YB ? (BB[DB] += OB, BB[DB + 1] += GB) : BB.push(OB, GB)
    }

    function LB(BB, OB, GB) {
      if (0 == GB.length) return;
      let YB = OB.length - 2 >> 1;
      if (YB < BB.length) BB[BB.length - 1] = BB[BB.length - 1].append(GB);
      else {
        for (; BB.length < YB;) BB.push(qB.empty);
        BB.push(GB)
      }
    }

    function gB(BB, OB, GB) {
      let YB = BB.inserted;
      for (let DB = 0, QB = 0, oB = 0; oB < BB.sections.length;) {
        let jB = BB.sections[oB++],
          yB = BB.sections[oB++];
        if (yB < 0) DB += jB, QB += jB;
        else {
          let JB = DB,
            MB = QB,
            PB = qB.empty;
          for (; JB += jB, MB += yB, yB && YB && (PB = PB.append(YB[oB - 2 >> 1])), !(GB || oB == BB.sections.length || BB.sections[oB + 1] < 0);) jB = BB.sections[oB++], yB = BB.sections[oB++];
          OB(DB, JB, QB, MB, PB), DB = JB, QB = MB
        }
      }
    }

    function rB(BB, OB, GB) {
      let YB = [],
        DB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3] ? [] : null,
        QB = new wB(BB),
        oB = new wB(OB),
        jB = 0;
      for (let yB = -1;;) {
        if (++jB > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - likely malformed ChangeSet");
        if (QB.done && oB.len || oB.done && QB.len) throw new Error("Mismatched change set lengths");
        if (-1 == QB.ins && -1 == oB.ins) {
          let BB = Math.min(QB.len, oB.len);
          iB(YB, BB, -1), QB.forward(BB), oB.forward(BB)
        } else if (oB.ins >= 0 && (QB.ins < 0 || yB == QB.i || 0 == QB.off && (oB.len < QB.len || oB.len == QB.len && !GB))) {
          let BB = oB.len;
          for (iB(YB, oB.ins, -1); BB;) {
            if (++jB > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-b");
            let OB = Math.min(QB.len, BB);
            QB.ins >= 0 && yB < QB.i && QB.len <= OB && (iB(YB, 0, QB.ins), DB && LB(DB, YB, QB.text), yB = QB.i), QB.forward(OB), BB -= OB
          }
          oB.next()
        } else {
          if (!(QB.ins >= 0)) {
            if (QB.done && oB.done) return DB ? FB.createSet(YB, DB) : IB.create(YB);
            throw new Error("Mismatched change set lengths")
          } {
            let BB = 0,
              OB = QB.len;
            for (; OB;) {
              if (++jB > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-a");
              if (-1 == oB.ins) {
                let GB = Math.min(OB, oB.len);
                BB += GB, OB -= GB, oB.forward(GB)
              } else {
                if (!(0 == oB.ins && oB.len < OB)) break;
                OB -= oB.len, oB.next()
              }
            }
            iB(YB, BB, yB < QB.i ? QB.ins : 0), DB && yB < QB.i && LB(DB, YB, QB.text), yB = QB.i, QB.forward(QB.len - OB)
          }
        }
      }
    }

    function XB(BB, OB) {
      let GB = [],
        YB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? [] : null,
        DB = new wB(BB),
        QB = new wB(OB),
        oB = 0;
      for (let jB = !1;;) {
        if (++oB > 2e6) throw new Error("BLOXD CODEMIRROR: composeSets exceeded max iterations - likely malformed ChangeSet");
        if (DB.done && QB.done) return YB ? FB.createSet(GB, YB) : IB.create(GB);
        if (0 == DB.ins) iB(GB, DB.len, 0, jB), DB.next();
        else if (0 != QB.len || QB.done) {
          if (DB.done || QB.done) throw new Error("Mismatched change set lengths");
          {
            let BB = Math.min(DB.len2, QB.len),
              OB = GB.length;
            if (-1 == DB.ins) {
              let OB = -1 == QB.ins ? -1 : QB.off ? 0 : QB.ins;
              iB(GB, BB, OB, jB), YB && OB && LB(YB, GB, QB.text)
            } else - 1 == QB.ins ? (iB(GB, DB.off ? 0 : DB.len, BB, jB), YB && LB(YB, GB, DB.textBit(BB))) : (iB(GB, DB.off ? 0 : DB.len, QB.off ? 0 : QB.ins, jB), YB && !QB.off && LB(YB, GB, QB.text));
            jB = (DB.ins > BB || QB.ins >= 0 && QB.len > BB) && (jB || GB.length > OB), DB.forward2(BB), QB.forward(BB)
          }
        } else iB(GB, 0, QB.ins, jB), YB && LB(YB, GB, QB.text), QB.next()
      }
    }
    class wB {
      constructor(BB) {
        this.set = BB, this.i = 0, this.next()
      }
      next() {
        let {
          sections: BB
        } = this.set;
        this.i < BB.length ? (this.len = BB[this.i++], this.ins = BB[this.i++]) : (this.len = 0, this.ins = -2), this.off = 0
      }
      get done() {
        return -2 == this.ins
      }
      get len2() {
        return this.ins < 0 ? this.len : this.ins
      }
      get text() {
        let {
          inserted: BB
        } = this.set, OB = this.i - 2 >> 1;
        return OB >= BB.length ? qB.empty : BB[OB]
      }
      textBit(BB) {
        let {
          inserted: OB
        } = this.set, GB = this.i - 2 >> 1;
        return GB >= OB.length && !BB ? qB.empty : OB[GB].slice(this.off, null == BB ? void 0 : this.off + BB)
      }
      forward(BB) {
        BB == this.len ? this.next() : (this.len -= BB, this.off += BB)
      }
      forward2(BB) {
        -1 == this.ins ? this.forward(BB) : BB == this.ins ? this.next() : (this.ins -= BB, this.off += BB)
      }
    }
    class EB {
      constructor(BB, OB, GB) {
        this.from = BB, this.to = OB, this.flags = GB
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
        let BB = 7 & this.flags;
        return 7 == BB ? null : BB
      }
      get goalColumn() {
        let BB = this.flags >> 6;
        return 16777215 == BB ? void 0 : BB
      }
      map(BB) {
        let OB, GB, YB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return this.empty ? OB = GB = BB.mapPos(this.from, YB) : (OB = BB.mapPos(this.from, 1), GB = BB.mapPos(this.to, -1)), OB == this.from && GB == this.to ? this : new EB(OB, GB, this.flags)
      }
      extend(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BB,
          GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (BB <= this.anchor && OB >= this.anchor) return cB.range(BB, OB, void 0, void 0, GB);
        let YB = Math.abs(BB - this.anchor) > Math.abs(OB - this.anchor) ? BB : OB;
        return cB.range(this.anchor, YB, void 0, void 0, GB)
      }
      eq(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.anchor == BB.anchor && this.head == BB.head && this.goalColumn == BB.goalColumn && (!OB || !this.empty || this.assoc == BB.assoc)
      }
      toJSON() {
        return {
          anchor: this.anchor,
          head: this.head
        }
      }
      static fromJSON(BB) {
        if (!BB || "number" != typeof BB.anchor || "number" != typeof BB.head) throw new RangeError("Invalid JSON representation for SelectionRange");
        return cB.range(BB.anchor, BB.head)
      }
      static create(BB, OB, GB) {
        return new EB(BB, OB, GB)
      }
    }
    class cB {
      constructor(BB, OB) {
        this.JZ = BB, this.mainIndex = OB
      }
      map(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return BB.empty ? this : cB.create(this.JZ.map((GB => GB.map(BB, OB))), this.mainIndex)
      }
      eq(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.JZ.length != BB.JZ.length || this.mainIndex != BB.mainIndex) return !1;
        for (let GB = 0; GB < this.JZ.length; GB++)
          if (!this.JZ[GB].eq(BB.JZ[GB], OB)) return !1;
        return !0
      }
      get main() {
        return this.JZ[this.mainIndex]
      }
      asSingle() {
        return 1 == this.JZ.length ? this : new cB([this.main], 0)
      }
      addRange(BB) {
        let OB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return cB.create([BB].concat(this.JZ), OB ? 0 : this.mainIndex + 1)
      }
      replaceRange(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.mainIndex,
          GB = this.JZ.slice();
        return GB[OB] = BB, cB.create(GB, this.mainIndex)
      }
      toJSON() {
        return {
          JZ: this.JZ.map((BB => BB.toJSON())),
          main: this.mainIndex
        }
      }
      static fromJSON(BB) {
        if (!BB || !Array.isArray(BB.JZ) || "number" != typeof BB.main || BB.main >= BB.JZ.length) throw new RangeError("Invalid JSON representation for EditorSelection");
        return new cB(BB.JZ.map((BB => EB.fromJSON(BB))), BB.main)
      }
      static single(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BB;
        return new cB([cB.range(BB, OB)], 0)
      }
      static create(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (0 == BB.length) throw new RangeError("A selection needs at least one range");
        for (let GB = 0, YB = 0; YB < BB.length; YB++) {
          let DB = BB[YB];
          if (DB.empty ? DB.from <= GB : DB.from < GB) return cB.normalized(BB.slice(), OB);
          GB = DB.to
        }
        return new cB(BB, OB)
      }
      static cursor(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          GB = arguments.length > 2 ? arguments[2] : void 0,
          YB = arguments.length > 3 ? arguments[3] : void 0;
        return EB.create(BB, BB, (0 == OB ? 0 : OB < 0 ? 8 : 16) | (null == GB ? 7 : Math.min(6, GB)) | (null !== YB && void 0 !== YB ? YB : 16777215) << 6)
      }
      static range(BB, OB, GB, YB, DB) {
        let QB = (null !== GB && void 0 !== GB ? GB : 16777215) << 6 | (null == YB ? 7 : Math.min(6, YB));
        return DB || BB == OB || (DB = OB < BB ? 1 : -1), OB < BB ? EB.create(OB, BB, 48 | QB) : EB.create(BB, OB, (DB ? DB < 0 ? 8 : 16 : 0) | QB)
      }
      static normalized(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          GB = BB[OB];
        BB.sort(((BB, OB) => BB.from - OB.from)), OB = BB.indexOf(GB);
        for (let YB = 1; YB < BB.length; YB++) {
          let GB = BB[YB],
            DB = BB[YB - 1];
          if (GB.empty ? GB.from <= DB.to : GB.from < DB.to) {
            let QB = DB.from,
              oB = Math.max(GB.to, DB.to);
            YB <= OB && OB--, BB.splice(--YB, 2, GB.anchor > GB.head ? cB.range(oB, QB) : cB.range(QB, oB))
          }
        }
        return new cB(BB, OB)
      }
    }

    function hB(BB, OB) {
      for (let GB of BB.JZ)
        if (GB.to > OB) throw new RangeError("Selection points outside of document")
    }
    let aB = 0;
    class eB {
      constructor(BB, OB, GB, YB, DB) {
        this.combine = BB, this.compareInput = OB, this.compare = GB, this.isStatic = YB, this.id = aB++, this.default = BB([]), this.extensions = "function" == typeof DB ? DB(this) : DB
      }
      get reader() {
        return this
      }
      static define() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return new eB(BB.combine || (BB => BB), BB.compareInput || ((BB, OB) => BB === OB), BB.compare || (BB.combine ? (BB, OB) => BB === OB : TB), !!BB.static, BB.enables)
      }
      of(BB) {
        return new bB([], this, 0, BB)
      }
      compute(BB, OB) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new bB(BB, this, 1, OB)
      }
      computeN(BB, OB) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new bB(BB, this, 2, OB)
      }
      from(BB, OB) {
        return OB || (OB = BB => BB), this.compute([BB], (GB => OB(GB.field(BB))))
      }
    }

    function TB(BB, OB) {
      return BB == OB || BB.length == OB.length && BB.every(((BB, GB) => BB === OB[GB]))
    }
    class bB {
      constructor(BB, OB, GB, YB) {
        this.dependencies = BB, this.facet = OB, this.type = GB, this.value = YB, this.id = aB++
      }
      dynamicSlot(BB) {
        var OB;
        let GB = this.value,
          YB = this.facet.compareInput,
          DB = this.id,
          QB = BB[DB] >> 1,
          oB = 2 == this.type,
          jB = !1,
          yB = !1,
          JB = [];
        for (let MB of this.dependencies) "doc" == MB ? jB = !0 : "selection" == MB ? yB = !0 : 0 == (1 & (null !== (OB = BB[MB.id]) && void 0 !== OB ? OB : 1)) && JB.push(BB[MB.id]);
        return {
          create: BB => (BB.values[QB] = GB(BB), 1),
          update(BB, OB) {
            if (jB && OB.docChanged || yB && (OB.docChanged || OB.selection) || HB(BB, JB)) {
              let OB = GB(BB);
              if (oB ? !CB(OB, BB.values[QB], YB) : !YB(OB, BB.values[QB])) return BB.values[QB] = OB, 1
            }
            return 0
          },
          reconfigure: (BB, OB) => {
            let jB, yB = OB.config.address[DB];
            if (null != yB) {
              let DB = MO(OB, yB);
              if (this.dependencies.every((GB => GB instanceof eB ? OB.facet(GB) === BB.facet(GB) : !(GB instanceof xB) || OB.field(GB, !1) == BB.field(GB, !1))) || (oB ? CB(jB = GB(BB), DB, YB) : YB(jB = GB(BB), DB))) return BB.values[QB] = DB, 0
            } else jB = GB(BB);
            return BB.values[QB] = jB, 1
          }
        }
      }
    }

    function CB(BB, OB, GB) {
      if (BB.length != OB.length) return !1;
      for (let YB = 0; YB < BB.length; YB++)
        if (!GB(BB[YB], OB[YB])) return !1;
      return !0
    }

    function HB(BB, OB) {
      let GB = !1;
      for (let YB of OB) 1 & JO(BB, YB) && (GB = !0);
      return GB
    }

    function vB(BB, OB, GB) {
      let YB = GB.map((OB => BB[OB.id])),
        DB = GB.map((BB => BB.type)),
        QB = YB.filter((BB => !(1 & BB))),
        oB = BB[OB.id] >> 1;

      function jB(BB) {
        let GB = [];
        for (let OB = 0; OB < YB.length; OB++) {
          let QB = MO(BB, YB[OB]);
          if (2 == DB[OB])
            for (let BB of QB) GB.push(BB);
          else GB.push(QB)
        }
        return OB.combine(GB)
      }
      return {
        create(BB) {
          for (let OB of YB) JO(BB, OB);
          return BB.values[oB] = jB(BB), 1
        },
        update(BB, GB) {
          if (!HB(BB, QB)) return 0;
          let YB = jB(BB);
          return OB.compare(YB, BB.values[oB]) ? 0 : (BB.values[oB] = YB, 1)
        },
        reconfigure(BB, DB) {
          let QB = HB(BB, YB),
            yB = DB.config.facets[OB.id],
            JB = DB.facet(OB);
          if (yB && !QB && TB(GB, yB)) return BB.values[oB] = JB, 0;
          let MB = jB(BB);
          return OB.compare(MB, JB) ? (BB.values[oB] = JB, 0) : (BB.values[oB] = MB, 1)
        }
      }
    }
    const sB = eB.define({
      static: !0
    });
    class xB {
      constructor(BB, OB, GB, YB, DB) {
        this.id = BB, this.createF = OB, this.updateF = GB, this.compareF = YB, this.spec = DB, this.provides = void 0
      }
      static define(BB) {
        let OB = new xB(aB++, BB.create, BB.update, BB.compare || ((BB, OB) => BB === OB), BB);
        return BB.provide && (OB.provides = BB.provide(OB)), OB
      }
      create(BB) {
        let OB = BB.facet(sB).find((BB => BB.field == this));
        return ((null === OB || void 0 === OB ? void 0 : OB.create) || this.createF)(BB)
      }
      slot(BB) {
        let OB = BB[this.id] >> 1;
        return {
          create: BB => (BB.values[OB] = this.create(BB), 1),
          update: (BB, GB) => {
            let YB = BB.values[OB],
              DB = this.updateF(YB, GB);
            return this.compareF(YB, DB) ? 0 : (BB.values[OB] = DB, 1)
          },
          reconfigure: (BB, GB) => {
            let YB, DB = BB.facet(sB),
              QB = GB.facet(sB);
            return (YB = DB.find((BB => BB.field == this))) && YB != QB.find((BB => BB.field == this)) ? (BB.values[OB] = YB.create(BB), 1) : null != GB.config.address[this.id] ? (BB.values[OB] = GB.field(this), 0) : (BB.values[OB] = this.create(BB), 1)
          }
        }
      }
      init(BB) {
        return [this, sB.of({
          field: this,
          create: BB
        })]
      }
      get extension() {
        return this
      }
    }
    const tB = 4,
      BO = 3,
      OO = 2,
      GO = 1;

    function YO(BB) {
      return OB => new QO(OB, BB)
    }
    const DO = {
      highest: YO(0),
      high: YO(GO),
      default: YO(OO),
      low: YO(BO),
      lowest: YO(tB)
    };
    class QO {
      constructor(BB, OB) {
        this.inner = BB, this.prec = OB
      }
    }
    class oO {
      of(BB) {
        return new jO(this, BB)
      }
      reconfigure(BB) {
        return oO.reconfigure.of({
          compartment: this,
          extension: BB
        })
      }
      get(BB) {
        return BB.config.compartments.get(this)
      }
    }
    class jO {
      constructor(BB, OB) {
        this.compartment = BB, this.inner = OB
      }
    }
    class yO {
      constructor(BB, OB, GB, YB, DB, QB) {
        for (this.base = BB, this.compartments = OB, this.dynamicSlots = GB, this.address = YB, this.staticValues = DB, this.facets = QB, this.statusTemplate = []; this.statusTemplate.length < GB.length;) this.statusTemplate.push(0)
      }
      staticFacet(BB) {
        let OB = this.address[BB.id];
        return null == OB ? BB.default : this.staticValues[OB >> 1]
      }
      static resolve(BB, OB, GB) {
        let YB = [],
          DB = Object.create(null),
          QB = new Map;
        for (let PB of function(BB, OB, GB) {
            let YB = [
                [],
                [],
                [],
                [],
                []
              ],
              DB = new Map;

            function QB(BB, oB) {
              let jB = DB.get(BB);
              if (null != jB) {
                if (jB <= oB) return;
                let OB = YB[jB].indexOf(BB);
                OB > -1 && YB[jB].splice(OB, 1), BB instanceof jO && GB.delete(BB.compartment)
              }
              if (DB.set(BB, oB), Array.isArray(BB))
                for (let OB of BB) QB(OB, oB);
              else if (BB instanceof jO) {
                if (GB.has(BB.compartment)) throw new RangeError("Duplicate use of compartment in extensions");
                let YB = OB.get(BB.compartment) || BB.inner;
                GB.set(BB.compartment, YB), QB(YB, oB)
              } else if (BB instanceof QO) QB(BB.inner, BB.prec);
              else if (BB instanceof xB) YB[oB].push(BB), BB.provides && QB(BB.provides, oB);
              else if (BB instanceof bB) YB[oB].push(BB), BB.facet.extensions && QB(BB.facet.extensions, OO);
              else {
                let OB = BB.extension;
                if (!OB) throw new Error(`Unrecognized extension value in extension set (${BB}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
                QB(OB, oB)
              }
            }
            return QB(BB, OO), YB.reduce(((BB, OB) => BB.concat(OB)))
          }(BB, OB, QB)) PB instanceof xB ? YB.push(PB) : (DB[PB.facet.id] || (DB[PB.facet.id] = [])).push(PB);
        let oB = Object.create(null),
          jB = [],
          yB = [];
        for (let PB of YB) oB[PB.id] = yB.length << 1, yB.push((BB => PB.slot(BB)));
        let JB = null === GB || void 0 === GB ? void 0 : GB.config.facets;
        for (let PB in DB) {
          let BB = DB[PB],
            OB = BB[0].facet,
            YB = JB && JB[PB] || [];
          if (BB.every((BB => 0 == BB.type)))
            if (oB[OB.id] = jB.length << 1 | 1, TB(YB, BB)) jB.push(GB.facet(OB));
            else {
              let YB = OB.combine(BB.map((BB => BB.value)));
              jB.push(GB && OB.compare(YB, GB.facet(OB)) ? GB.facet(OB) : YB)
            }
          else {
            for (let OB of BB) 0 == OB.type ? (oB[OB.id] = jB.length << 1 | 1, jB.push(OB.value)) : (oB[OB.id] = yB.length << 1, yB.push((BB => OB.dynamicSlot(BB))));
            oB[OB.id] = yB.length << 1, yB.push((GB => vB(GB, OB, BB)))
          }
        }
        let MB = yB.map((BB => BB(oB)));
        return new yO(BB, QB, MB, oB, jB, DB)
      }
    }

    function JO(BB, OB) {
      if (1 & OB) return 2;
      let GB = OB >> 1,
        YB = BB.status[GB];
      if (4 == YB) throw new Error("Cyclic dependency between fields and/or facets");
      if (2 & YB) return YB;
      BB.status[GB] = 4;
      let DB = BB.computeSlot(BB, BB.config.dynamicSlots[GB]);
      return BB.status[GB] = 2 | DB
    }

    function MO(BB, OB) {
      return 1 & OB ? BB.config.staticValues[OB >> 1] : BB.values[OB >> 1]
    }
    const PO = eB.define(),
      zO = eB.define({
        combine: BB => BB.some((BB => BB)),
        static: !0
      }),
      lO = eB.define({
        combine: BB => BB.length ? BB[0] : void 0,
        static: !0
      }),
      pO = eB.define(),
      qO = eB.define(),
      ZO = eB.define(),
      NO = eB.define({
        combine: BB => !!BB.length && BB[0]
      });
    class RO {
      constructor(BB, OB) {
        this.type = BB, this.value = OB
      }
      static define() {
        return new WO
      }
    }
    class WO {
      of(BB) {
        return new RO(this, BB)
      }
    }
    class AO {
      constructor(BB) {
        this.map = BB
      }
      of(BB) {
        return new VO(this, BB)
      }
    }
    class VO {
      constructor(BB, OB) {
        this.type = BB, this.value = OB
      }
      map(BB) {
        let OB = this.type.map(this.value, BB);
        return void 0 === OB ? void 0 : OB == this.value ? this : new VO(this.type, OB)
      }
      is(BB) {
        return this.type == BB
      }
      static define() {
        return new AO((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).map || (BB => BB))
      }
      static mapEffects(BB, OB) {
        if (!BB.length) return BB;
        let GB = [];
        for (let YB of BB) {
          let BB = YB.map(OB);
          BB && GB.push(BB)
        }
        return GB
      }
    }
    VO.reconfigure = VO.define(), VO.appendConfig = VO.define();
    class SO {
      constructor(BB, OB, GB, YB, DB, QB) {
        this.startState = BB, this.changes = OB, this.selection = GB, this.effects = YB, this.annotations = DB, this.scrollIntoView = QB, this._doc = null, this._state = null, GB && hB(GB, OB.newLength), DB.some((BB => BB.type == SO.time)) || (this.annotations = DB.concat(SO.time.of(Date.now())))
      }
      static create(BB, OB, GB, YB, DB, QB) {
        return new SO(BB, OB, GB, YB, DB, QB)
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
      annotation(BB) {
        for (let OB of this.annotations)
          if (OB.type == BB) return OB.value
      }
      get docChanged() {
        return !this.changes.empty
      }
      get reconfigured() {
        return this.startState.config != this.state.config
      }
      isUserEvent(BB) {
        let OB = this.annotation(SO.userEvent);
        return !(!OB || !(OB == BB || OB.length > BB.length && OB.slice(0, BB.length) == BB && "." == OB[BB.length]))
      }
    }

    function nO(BB, OB) {
      let GB = [];
      for (let YB = 0, DB = 0;;) {
        let QB, oB;
        if (YB < BB.length && (DB == OB.length || OB[DB] >= BB[YB])) QB = BB[YB++], oB = BB[YB++];
        else {
          if (!(DB < OB.length)) return GB;
          QB = OB[DB++], oB = OB[DB++]
        }!GB.length || GB[GB.length - 1] < QB ? GB.push(QB, oB) : GB[GB.length - 1] < oB && (GB[GB.length - 1] = oB)
      }
    }

    function UO(BB, OB, GB) {
      var YB;
      let DB, QB, oB;
      return GB ? (DB = OB.changes, QB = FB.empty(OB.changes.length), oB = BB.changes.compose(OB.changes)) : (DB = OB.changes.map(BB.changes), QB = BB.changes.mapDesc(OB.changes, !0), oB = BB.changes.compose(DB)), {
        changes: oB,
        selection: OB.selection ? OB.selection.map(QB) : null === (YB = BB.selection) || void 0 === YB ? void 0 : YB.map(DB),
        effects: VO.mapEffects(BB.effects, DB).concat(VO.mapEffects(OB.effects, QB)),
        annotations: BB.annotations.length ? BB.annotations.concat(OB.annotations) : OB.annotations,
        scrollIntoView: BB.scrollIntoView || OB.scrollIntoView
      }
    }

    function fO(BB, OB, GB) {
      let YB = OB.selection,
        DB = KO(OB.annotations);
      return OB.userEvent && (DB = DB.concat(SO.userEvent.of(OB.userEvent))), {
        changes: OB.changes instanceof FB ? OB.changes : FB.of(OB.changes || [], GB, BB.facet(lO)),
        selection: YB && (YB instanceof cB ? YB : cB.single(YB.anchor, YB.head)),
        effects: KO(OB.effects),
        annotations: DB,
        scrollIntoView: !!OB.scrollIntoView
      }
    }

    function kO(BB, OB, GB) {
      let YB = fO(BB, OB.length ? OB[0] : {}, BB.doc.length);
      OB.length && !1 === OB[0].filter && (GB = !1);
      for (let QB = 1; QB < OB.length; QB++) {
        !1 === OB[QB].filter && (GB = !1);
        let DB = !!OB[QB].sequential;
        YB = UO(YB, fO(BB, OB[QB], DB ? YB.changes.newLength : BB.doc.length), DB)
      }
      let DB = SO.create(BB, YB.changes, YB.selection, YB.effects, YB.annotations, YB.scrollIntoView);
      return function(BB) {
        let OB = BB.startState,
          GB = OB.facet(ZO),
          YB = BB;
        for (let DB = GB.length - 1; DB >= 0; DB--) {
          let QB = GB[DB](BB);
          QB && Object.keys(QB).length && (YB = UO(YB, fO(OB, QB, BB.changes.newLength), !0))
        }
        return YB == BB ? BB : SO.create(OB, BB.changes, BB.selection, YB.effects, YB.annotations, YB.scrollIntoView)
      }(GB ? function(BB) {
        let OB = BB.startState,
          GB = !0;
        for (let DB of OB.facet(pO)) {
          let OB = DB(BB);
          if (!1 === OB) {
            GB = !1;
            break
          }
          Array.isArray(OB) && (GB = !0 === GB ? OB : nO(GB, OB))
        }
        if (!0 !== GB) {
          let YB, DB;
          if (!1 === GB) DB = BB.changes.invertedDesc, YB = FB.empty(OB.doc.length);
          else {
            let OB = BB.changes.filter(GB);
            YB = OB.changes, DB = OB.filtered.mapDesc(OB.changes).invertedDesc
          }
          BB = SO.create(OB, YB, BB.selection && BB.selection.map(DB), VO.mapEffects(BB.effects, DB), BB.annotations, BB.scrollIntoView)
        }
        let YB = OB.facet(qO);
        for (let DB = YB.length - 1; DB >= 0; DB--) {
          let GB = YB[DB](BB);
          BB = GB instanceof SO ? GB : Array.isArray(GB) && 1 == GB.length && GB[0] instanceof SO ? GB[0] : kO(OB, KO(GB), !1)
        }
        return BB
      }(DB) : DB)
    }
    SO.time = RO.define(), SO.userEvent = RO.define(), SO.addToHistory = RO.define(), SO.remote = RO.define();
    const dO = [];

    function KO(BB) {
      return null == BB ? dO : Array.isArray(BB) ? BB : [BB]
    }
    var uO = function(BB) {
      return BB[BB.Word = 0] = "Word", BB[BB.Space = 1] = "Space", BB[BB.Other = 2] = "Other", BB
    }(uO || (uO = {}));
    const mO = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
    let IO;
    try {
      IO = new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u")
    } catch (GG) {}

    function FO(BB) {
      return OB => {
        if (!/\S/.test(OB)) return uO.Space;
        if (function(BB) {
            if (IO) return IO.test(BB);
            for (let OB = 0; OB < BB.length; OB++) {
              let GB = BB[OB];
              if (/\w/.test(GB) || GB > "\x80" && (GB.toUpperCase() != GB.toLowerCase() || mO.test(GB))) return !0
            }
            return !1
          }(OB)) return uO.Word;
        for (let GB = 0; GB < BB.length; GB++)
          if (OB.indexOf(BB[GB]) > -1) return uO.Word;
        return uO.Other
      }
    }
    class iO {
      constructor(BB, OB, GB, YB, DB, QB) {
        this.config = BB, this.doc = OB, this.selection = GB, this.values = YB, this.status = BB.statusTemplate.slice(), this.computeSlot = DB, QB && (QB._state = this);
        for (let oB = 0; oB < this.config.dynamicSlots.length; oB++) JO(this, oB << 1);
        this.computeSlot = null
      }
      field(BB) {
        let OB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          GB = this.config.address[BB.id];
        if (null != GB) return JO(this, GB), MO(this, GB);
        if (OB) throw new RangeError("Field is not present in this state")
      }
      update() {
        for (var BB = arguments.length, OB = new Array(BB), GB = 0; GB < BB; GB++) OB[GB] = arguments[GB];
        return kO(this, OB, !0)
      }
      applyTransaction(BB) {
        let OB, GB = this.config,
          {
            base: YB,
            compartments: DB
          } = GB;
        for (let oB of BB.effects) oB.is(oO.reconfigure) ? (GB && (DB = new Map, GB.compartments.forEach(((BB, OB) => DB.set(OB, BB))), GB = null), DB.set(oB.value.compartment, oB.value.extension)) : oB.is(VO.reconfigure) ? (GB = null, YB = oB.value) : oB.is(VO.appendConfig) && (GB = null, YB = KO(YB).concat(oB.value));
        if (GB) OB = BB.startState.values.slice();
        else {
          GB = yO.resolve(YB, DB, this), OB = new iO(GB, this.doc, this.selection, GB.dynamicSlots.map((() => null)), ((BB, OB) => OB.reconfigure(BB, this)), null).values
        }
        let QB = BB.startState.facet(zO) ? BB.newSelection : BB.newSelection.asSingle();
        new iO(GB, BB.newDoc, QB, OB, ((OB, GB) => GB.update(OB, BB)), BB)
      }
      replaceSelection(BB) {
        return "string" == typeof BB && (BB = this.toText(BB)), this.changeByRange((OB => ({
          changes: {
            from: OB.from,
            to: OB.to,
            insert: BB
          },
          range: cB.cursor(OB.from + BB.length)
        })))
      }
      changeByRange(BB) {
        let OB = this.selection,
          GB = BB(OB.JZ[0]),
          YB = this.changes(GB.changes),
          DB = [GB.range],
          QB = KO(GB.effects);
        for (let oB = 1; oB < OB.JZ.length; oB++) {
          let GB = BB(OB.JZ[oB]),
            jB = this.changes(GB.changes),
            yB = jB.map(YB);
          for (let BB = 0; BB < oB; BB++) DB[BB] = DB[BB].map(yB);
          let JB = YB.mapDesc(jB, !0);
          DB.push(GB.range.map(JB)), YB = YB.compose(yB), QB = VO.mapEffects(QB, yB).concat(VO.mapEffects(KO(GB.effects), JB))
        }
        return {
          changes: YB,
          selection: cB.create(DB, OB.mainIndex),
          effects: QB
        }
      }
      changes() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return BB instanceof FB ? BB : FB.of(BB, this.doc.length, this.facet(iO.lineSeparator))
      }
      toText(BB) {
        return qB.of(BB.split(this.facet(iO.lineSeparator) || uB))
      }
      sliceDoc() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.doc.length;
        return this.doc.sliceString(BB, OB, this.lineBreak)
      }
      facet(BB) {
        let OB = this.config.address[BB.id];
        return null == OB ? BB.default : (JO(this, OB), MO(this, OB))
      }
      toJSON(BB) {
        let OB = {
          doc: this.sliceDoc(),
          selection: this.selection.toJSON()
        };
        if (BB)
          for (let GB in BB) {
            let YB = BB[GB];
            YB instanceof xB && null != this.config.address[YB.id] && (OB[GB] = YB.spec.toJSON(this.field(BB[GB]), this))
          }
        return OB
      }
      static fromJSON(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          GB = arguments.length > 2 ? arguments[2] : void 0;
        if (!BB || "string" != typeof BB.doc) throw new RangeError("Invalid JSON representation for EditorState");
        let YB = [];
        if (GB)
          for (let DB in GB)
            if (Object.prototype.hasOwnProperty.call(BB, DB)) {
              let OB = GB[DB],
                QB = BB[DB];
              YB.push(OB.init((BB => OB.spec.fromJSON(QB, BB))))
            } return iO.create({
          doc: BB.doc,
          selection: cB.fromJSON(BB.selection),
          extensions: OB.extensions ? YB.concat([OB.extensions]) : YB
        })
      }
      static create() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          OB = yO.resolve(BB.extensions || [], new Map),
          GB = BB.doc instanceof qB ? BB.doc : qB.of((BB.doc || "").split(OB.staticFacet(iO.lineSeparator) || uB)),
          YB = BB.selection ? BB.selection instanceof cB ? BB.selection : cB.single(BB.selection.anchor, BB.selection.head) : cB.single(0);
        return hB(YB, GB.length), OB.staticFacet(zO) || (YB = YB.asSingle()), new iO(OB, GB, YB, OB.dynamicSlots.map((() => null)), ((BB, OB) => OB.create(BB)), null)
      }
      get tabSize() {
        return this.facet(iO.tabSize)
      }
      get lineBreak() {
        return this.facet(iO.lineSeparator) || "\n"
      }
      get readOnly() {
        return this.facet(NO)
      }
      phrase(BB) {
        for (var OB = arguments.length, GB = new Array(OB > 1 ? OB - 1 : 0), YB = 1; YB < OB; YB++) GB[YB - 1] = arguments[YB];
        for (let DB of this.facet(iO.phrases))
          if (Object.prototype.hasOwnProperty.call(DB, BB)) {
            BB = DB[BB];
            break
          } return GB.length && (BB = BB.replace(/\$(\$|\d*)/g, ((BB, OB) => {
          if ("$" == OB) return "$";
          let YB = +(OB || 1);
          return !YB || YB > GB.length ? BB : GB[YB - 1]
        }))), BB
      }
      languageDataAt(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          YB = [];
        for (let DB of this.facet(PO))
          for (let QB of DB(this, OB, GB)) Object.prototype.hasOwnProperty.call(QB, BB) && YB.push(QB[BB]);
        return YB
      }
      charCategorizer(BB) {
        let OB = this.languageDataAt("wordChars", BB);
        return FO(OB.length ? OB[0] : "")
      }
      wordAt(BB) {
        let {
          text: OB,
          from: GB,
          length: YB
        } = this.doc.lineAt(BB), DB = this.charCategorizer(BB), QB = BB - GB, oB = BB - GB;
        for (; QB > 0;) {
          let BB = fB(OB, QB, !1);
          if (DB(OB.slice(BB, QB)) != uO.Word) break;
          QB = BB
        }
        for (; oB < YB;) {
          let BB = fB(OB, oB);
          if (DB(OB.slice(oB, BB)) != uO.Word) break;
          oB = BB
        }
        return QB == oB ? null : cB.range(QB + GB, oB + GB)
      }
    }

    function LO(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        YB = {};
      for (let DB of BB)
        for (let BB of Object.keys(DB)) {
          let OB = DB[BB],
            QB = YB[BB];
          if (void 0 === QB) YB[BB] = OB;
          else if (QB === OB || void 0 === OB);
          else {
            if (!Object.hasOwnProperty.call(GB, BB)) throw new Error("Config merge conflict for field " + BB);
            YB[BB] = GB[BB](QB, OB)
          }
        }
      for (let DB in OB) void 0 === YB[DB] && (YB[DB] = OB[DB]);
      return YB
    }
    iO.allowMultipleSelections = zO, iO.tabSize = eB.define({
      combine: BB => BB.length ? BB[0] : 4
    }), iO.lineSeparator = lO, iO.readOnly = NO, iO.phrases = eB.define({
      compare(BB, OB) {
        let GB = Object.keys(BB),
          YB = Object.keys(OB);
        return GB.length == YB.length && GB.every((GB => BB[GB] == OB[GB]))
      }
    }), iO.languageData = PO, iO.changeFilter = pO, iO.transactionFilter = qO, iO.transactionExtender = ZO, oO.reconfigure = VO.define();
    class gO {
      eq(BB) {
        return this == BB
      }
      range(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BB;
        return XO.create(BB, OB, this)
      }
    }

    function rO(BB, OB) {
      return BB == OB || BB.constructor == OB.constructor && BB.eq(OB)
    }
    gO.prototype.startSide = gO.prototype.endSide = 0, gO.prototype.point = !1, gO.prototype.mapMode = mB.TrackDel;
    class XO {
      constructor(BB, OB, GB) {
        this.from = BB, this.to = OB, this.value = GB
      }
      static create(BB, OB, GB) {
        return new XO(BB, OB, GB)
      }
    }

    function wO(BB, OB) {
      return BB.from - OB.from || BB.value.startSide - OB.value.startSide
    }
    class EO {
      constructor(BB, OB, GB, YB) {
        this.from = BB, this.to = OB, this.value = GB, this.iDB = YB
      }
      get length() {
        return this.to[this.to.length - 1]
      }
      findIndex(BB, OB, GB) {
        let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          DB = GB ? this.to : this.from;
        for (let QB = YB, oB = DB.length;;) {
          if (QB == oB) return QB;
          let YB = QB + oB >> 1,
            jB = DB[YB] - BB || (GB ? this.value[YB].endSide : this.value[YB].startSide) - OB;
          if (YB == QB) return jB >= 0 ? QB : oB;
          jB >= 0 ? oB = YB : QB = YB + 1
        }
      }
      between(BB, OB, GB, YB) {
        for (let DB = this.findIndex(OB, -1e9, !0), QB = this.findIndex(GB, 1e9, !1, DB); DB < QB; DB++)
          if (!1 === YB(this.from[DB] + BB, this.to[DB] + BB, this.value[DB])) return !1
      }
      map(BB, OB) {
        let GB = [],
          YB = [],
          DB = [],
          QB = -1,
          oB = -1;
        for (let jB = 0; jB < this.value.length; jB++) {
          let yB, JB, MB = this.value[jB],
            PB = this.from[jB] + BB,
            zB = this.to[jB] + BB;
          if (PB == zB) {
            let BB = OB.mapPos(PB, MB.startSide, MB.mapMode);
            if (null == BB) continue;
            if (yB = JB = BB, MB.startSide != MB.endSide && (JB = OB.mapPos(PB, MB.endSide), JB < yB)) continue
          } else if (yB = OB.mapPos(PB, MB.startSide), JB = OB.mapPos(zB, MB.endSide), yB > JB || yB == JB && MB.startSide > 0 && MB.endSide <= 0) continue;
          (JB - yB || MB.endSide - MB.startSide) < 0 || (QB < 0 && (QB = yB), MB.point && (oB = Math.max(oB, JB - yB)), GB.push(MB), YB.push(yB - QB), DB.push(JB - QB))
        }
        return {
          mapped: GB.length ? new EO(YB, DB, GB, oB) : null,
          pos: QB
        }
      }
    }
    class cO {
      constructor(BB, OB, GB, YB) {
        this.chunkPos = BB, this.chunk = OB, this.nextLayer = GB, this.iDB = YB
      }
      static create(BB, OB, GB, YB) {
        return new cO(BB, OB, GB, YB)
      }
      get length() {
        let BB = this.chunk.length - 1;
        return BB < 0 ? 0 : Math.max(this.chunkEnd(BB), this.nextLayer.length)
      }
      get size() {
        if (this.NP) return 0;
        let BB = this.nextLayer.size;
        for (let OB of this.chunk) BB += OB.value.length;
        return BB
      }
      chunkEnd(BB) {
        return this.chunkPos[BB] + this.chunk[BB].length
      }
      update(BB) {
        let {
          add: OB = [],
          sort: GB = !1,
          filterFrom: YB = 0,
          filterTo: DB = this.length
        } = BB, QB = BB.filter;
        if (0 == OB.length && !QB) return this;
        if (GB && (OB = OB.slice().sort(wO)), this.NP) return OB.length ? cO.of(OB) : this;
        let oB = new eO(this, null, -1).goto(0),
          jB = 0,
          yB = [],
          JB = new hO;
        for (; oB.value || jB < OB.length;)
          if (jB < OB.length && (oB.from - OB[jB].from || oB.startSide - OB[jB].value.startSide) >= 0) {
            let BB = OB[jB++];
            JB.addInner(BB.from, BB.to, BB.value) || yB.push(BB)
          } else 1 == oB.rangeIndex && oB.chunkIndex < this.chunk.length && (jB == OB.length || this.chunkEnd(oB.chunkIndex) < OB[jB].from) && (!QB || YB > this.chunkEnd(oB.chunkIndex) || DB < this.chunkPos[oB.chunkIndex]) && JB.addChunk(this.chunkPos[oB.chunkIndex], this.chunk[oB.chunkIndex]) ? oB.nextChunk() : ((!QB || YB > oB.to || DB < oB.from || QB(oB.from, oB.to, oB.value)) && (JB.addInner(oB.from, oB.to, oB.value) || yB.push(XO.create(oB.from, oB.to, oB.value))), oB.next());
        return JB.finishInner(this.nextLayer.NP && !yB.length ? cO.empty : this.nextLayer.update({
          add: yB,
          filter: QB,
          filterFrom: YB,
          filterTo: DB
        }))
      }
      map(BB) {
        if (BB.empty || this.NP) return this;
        let OB = [],
          GB = [],
          YB = -1;
        for (let QB = 0; QB < this.chunk.length; QB++) {
          let DB = this.chunkPos[QB],
            oB = this.chunk[QB],
            jB = BB.touchesRange(DB, DB + oB.length);
          if (!1 === jB) YB = Math.max(YB, oB.iDB), OB.push(oB), GB.push(BB.mapPos(DB));
          else if (!0 === jB) {
            let {
              mapped: QB,
              pos: jB
            } = oB.map(DB, BB);
            QB && (YB = Math.max(YB, QB.iDB), OB.push(QB), GB.push(jB))
          }
        }
        let DB = this.nextLayer.map(BB);
        return 0 == OB.length ? DB : new cO(GB, OB, DB || cO.empty, YB)
      }
      between(BB, OB, GB) {
        if (!this.NP) {
          for (let YB = 0; YB < this.chunk.length; YB++) {
            let DB = this.chunkPos[YB],
              QB = this.chunk[YB];
            if (OB >= DB && BB <= DB + QB.length && !1 === QB.between(DB, BB - DB, OB - DB, GB)) return
          }
          this.nextLayer.between(BB, OB, GB)
        }
      }
      iter() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return TO.from([this]).goto(BB)
      }
      get NP() {
        return this.nextLayer == this
      }
      static iter(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return TO.from(BB).goto(OB)
      }
      static compare(BB, OB, GB, YB) {
        let DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1,
          QB = BB.filter((BB => BB.iDB > 0 || !BB.NP && BB.iDB >= DB)),
          oB = OB.filter((BB => BB.iDB > 0 || !BB.NP && BB.iDB >= DB)),
          jB = aO(QB, oB, GB),
          yB = new CO(QB, jB, DB),
          JB = new CO(oB, jB, DB);
        GB.iterGaps(((BB, OB, GB) => HO(yB, BB, JB, OB, GB, YB))), GB.empty && 0 == GB.length && HO(yB, 0, JB, 0, 0, YB)
      }
      static eq(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          YB = arguments.length > 3 ? arguments[3] : void 0;
        null == YB && (YB = 999999999);
        let DB = BB.filter((BB => !BB.NP && OB.indexOf(BB) < 0)),
          QB = OB.filter((OB => !OB.NP && BB.indexOf(OB) < 0));
        if (DB.length != QB.length) return !1;
        if (!DB.length) return !0;
        let oB = aO(DB, QB),
          jB = new CO(DB, oB, 0).goto(GB),
          yB = new CO(QB, oB, 0).goto(GB);
        for (;;) {
          if (jB.to != yB.to || !vO(jB.active, yB.active) || jB.point && (!yB.point || !rO(jB.point, yB.point))) return !1;
          if (jB.to > YB) return !0;
          jB.next(), yB.next()
        }
      }
      static spans(BB, OB, GB, YB) {
        let DB = new CO(BB, null, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1).goto(OB),
          QB = OB,
          oB = DB.openStart;
        for (;;) {
          let BB = Math.min(DB.to, GB);
          if (DB.point) {
            let GB = DB.activeForPoint(DB.to),
              jB = DB.pointFrom < OB ? GB.length + 1 : DB.point.startSide < 0 ? GB.length : Math.min(GB.length, oB);
            YB.point(QB, BB, DB.point, GB, jB, DB.pointRank), oB = Math.min(DB.openEnd(BB), GB.length)
          } else BB > QB && (YB.span(QB, BB, DB.active, oB), oB = DB.openEnd(BB));
          if (DB.to > GB) return oB + (DB.point && DB.to > GB ? 1 : 0);
          QB = DB.to, DB.next()
        }
      }
      static of (BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          GB = new hO;
        for (let YB of BB instanceof XO ? [BB] : OB ? function(BB) {
            if (BB.length > 1)
              for (let OB = BB[0], GB = 1; GB < BB.length; GB++) {
                let YB = BB[GB];
                if (wO(OB, YB) > 0) return BB.slice().sort(wO);
                OB = YB
              }
            return BB
          }(BB) : BB) GB.add(YB.from, YB.to, YB.value);
        return GB.finish()
      }
      static join(BB) {
        if (!BB.length) return cO.empty;
        let OB = BB[BB.length - 1];
        for (let GB = BB.length - 2; GB >= 0; GB--)
          for (let YB = BB[GB]; YB != cO.empty; YB = YB.nextLayer) OB = new cO(YB.chunkPos, YB.chunk, OB, Math.max(YB.iDB, OB.iDB));
        return OB
      }
    }
    cO.empty = new cO([], [], null, -1), cO.empty.nextLayer = cO.empty;
    class hO {
      finishChunk(BB) {
        this.chunks.push(new EO(this.from, this.to, this.value, this.iDB)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.iDB), this.iDB = -1, BB && (this.from = [], this.to = [], this.value = [])
      }
      constructor() {
        this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.iDB = -1, this.setMaxPoint = -1, this.nextLayer = null
      }
      add(BB, OB, GB) {
        this.addInner(BB, OB, GB) || (this.nextLayer || (this.nextLayer = new hO)).add(BB, OB, GB)
      }
      addInner(BB, OB, GB) {
        let YB = BB - this.lastTo || GB.startSide - this.last.endSide;
        if (YB <= 0 && (BB - this.lastFrom || GB.startSide - this.last.startSide) < 0) throw new Error("Ranges must be added sorted by `from` position and `startSide`");
        return !(YB < 0) && (250 == this.from.length && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = BB), this.from.push(BB - this.chunkStart), this.to.push(OB - this.chunkStart), this.last = GB, this.lastFrom = BB, this.lastTo = OB, this.value.push(GB), GB.point && (this.iDB = Math.max(this.iDB, OB - BB)), !0)
      }
      addChunk(BB, OB) {
        if ((BB - this.lastTo || OB.value[0].startSide - this.last.endSide) < 0) return !1;
        this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, OB.iDB), this.chunks.push(OB), this.chunkPos.push(BB);
        let GB = OB.value.length - 1;
        return this.last = OB.value[GB], this.lastFrom = OB.from[GB] + BB, this.lastTo = OB.to[GB] + BB, !0
      }
      finish() {
        return this.finishInner(cO.empty)
      }
      finishInner(BB) {
        if (this.from.length && this.finishChunk(!1), 0 == this.chunks.length) return BB;
        let OB = cO.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(BB) : BB, this.setMaxPoint);
        return this.from = null, OB
      }
    }

    function aO(BB, OB, GB) {
      let YB = new Map;
      for (let QB of BB)
        for (let BB = 0; BB < QB.chunk.length; BB++) QB.chunk[BB].iDB <= 0 && YB.set(QB.chunk[BB], QB.chunkPos[BB]);
      let DB = new Set;
      for (let QB of OB)
        for (let BB = 0; BB < QB.chunk.length; BB++) {
          let OB = YB.get(QB.chunk[BB]);
          null == OB || (GB ? GB.mapPos(OB) : OB) != QB.chunkPos[BB] || (null === GB || void 0 === GB ? void 0 : GB.touchesRange(OB, OB + QB.chunk[BB].length)) || DB.add(QB.chunk[BB])
        }
      return DB
    }
    class eO {
      constructor(BB, OB, GB) {
        let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.layer = BB, this.skip = OB, this.LDB = GB, this.rank = YB
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      get endSide() {
        return this.value ? this.value.endSide : 0
      }
      goto(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(BB, OB, !1), this
      }
      gotoInner(BB, OB, GB) {
        for (; this.chunkIndex < this.layer.chunk.length;) {
          let OB = this.layer.chunk[this.chunkIndex];
          if (!(this.skip && this.skip.has(OB) || this.layer.chunkEnd(this.chunkIndex) < BB || OB.iDB < this.LDB)) break;
          this.chunkIndex++, GB = !1
        }
        if (this.chunkIndex < this.layer.chunk.length) {
          let YB = this.layer.chunk[this.chunkIndex].findIndex(BB - this.layer.chunkPos[this.chunkIndex], OB, !0);
          (!GB || this.rangeIndex < YB) && this.setRangeIndex(YB)
        }
        this.next()
      }
      forward(BB, OB) {
        (this.to - BB || this.endSide - OB) < 0 && this.gotoInner(BB, OB, !0)
      }
      next() {
        for (;;) {
          if (this.chunkIndex == this.layer.chunk.length) {
            this.from = this.to = 1e9, this.value = null;
            break
          } {
            let BB = this.layer.chunkPos[this.chunkIndex],
              OB = this.layer.chunk[this.chunkIndex],
              GB = BB + OB.from[this.rangeIndex];
            if (this.from = GB, this.to = BB + OB.to[this.rangeIndex], this.value = OB.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.LDB < 0 || this.value.point && this.to - this.from >= this.LDB) break
          }
        }
      }
      setRangeIndex(BB) {
        if (BB == this.layer.chunk[this.chunkIndex].value.length) {
          if (this.chunkIndex++, this.skip)
            for (; this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]);) this.chunkIndex++;
          this.rangeIndex = 0
        } else this.rangeIndex = BB
      }
      nextChunk() {
        this.chunkIndex++, this.rangeIndex = 0, this.next()
      }
      compare(BB) {
        return this.from - BB.from || this.startSide - BB.startSide || this.rank - BB.rank || this.to - BB.to || this.endSide - BB.endSide
      }
    }
    class TO {
      constructor(BB) {
        this.heap = BB
      }
      static from(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          YB = [];
        for (let DB = 0; DB < BB.length; DB++)
          for (let QB = BB[DB]; !QB.NP; QB = QB.nextLayer) QB.iDB >= GB && YB.push(new eO(QB, OB, GB, DB));
        return 1 == YB.length ? YB[0] : new TO(YB)
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      goto(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        for (let GB of this.heap) GB.goto(BB, OB);
        for (let GB = this.heap.length >> 1; GB >= 0; GB--) bO(this.heap, GB);
        return this.next(), this
      }
      forward(BB, OB) {
        for (let GB of this.heap) GB.forward(BB, OB);
        for (let GB = this.heap.length >> 1; GB >= 0; GB--) bO(this.heap, GB);
        (this.to - BB || this.value.endSide - OB) < 0 && this.next()
      }
      next() {
        if (0 == this.heap.length) this.from = this.to = 1e9, this.value = null, this.rank = -1;
        else {
          let BB = this.heap[0];
          this.from = BB.from, this.to = BB.to, this.value = BB.value, this.rank = BB.rank, BB.value && BB.next(), bO(this.heap, 0)
        }
      }
    }

    function bO(BB, OB) {
      for (let GB = BB[OB];;) {
        let YB = 1 + (OB << 1);
        if (YB >= BB.length) break;
        let DB = BB[YB];
        if (YB + 1 < BB.length && DB.compare(BB[YB + 1]) >= 0 && (DB = BB[YB + 1], YB++), GB.compare(DB) < 0) break;
        BB[YB] = GB, BB[OB] = DB, OB = YB
      }
    }
    class CO {
      constructor(BB, OB, GB) {
        this.LDB = GB, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = TO.from(BB, OB, GB)
      }
      goto(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.cursor.goto(BB, OB), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = BB, this.endSide = OB, this.openStart = -1, this.next(), this
      }
      forward(BB, OB) {
        for (; this.minActive > -1 && (this.activeTo[this.minActive] - BB || this.active[this.minActive].endSide - OB) < 0;) this.removeActive(this.minActive);
        this.cursor.forward(BB, OB)
      }
      removeActive(BB) {
        sO(this.active, BB), sO(this.activeTo, BB), sO(this.activeRank, BB), this.minActive = tO(this.active, this.activeTo)
      }
      addActive(BB) {
        let OB = 0,
          {
            value: GB,
            to: YB,
            rank: DB
          } = this.cursor;
        for (; OB < this.activeRank.length && (DB - this.activeRank[OB] || YB - this.activeTo[OB]) > 0;) OB++;
        xO(this.active, OB, GB), xO(this.activeTo, OB, YB), xO(this.activeRank, OB, DB), BB && xO(BB, OB, this.cursor.from), this.minActive = tO(this.active, this.activeTo)
      }
      next() {
        let BB = this.to,
          OB = this.point;
        this.point = null;
        let GB = this.openStart < 0 ? [] : null;
        for (;;) {
          let YB = this.minActive;
          if (YB > -1 && (this.activeTo[YB] - this.cursor.from || this.active[YB].endSide - this.cursor.startSide) < 0) {
            if (this.activeTo[YB] > BB) {
              this.to = this.activeTo[YB], this.endSide = this.active[YB].endSide;
              break
            }
            this.removeActive(YB), GB && sO(GB, YB)
          } else {
            if (!this.cursor.value) {
              this.to = this.endSide = 1e9;
              break
            }
            if (this.cursor.from > BB) {
              this.to = this.cursor.from, this.endSide = this.cursor.startSide;
              break
            } {
              let BB = this.cursor.value;
              if (BB.point) {
                if (!(OB && this.cursor.to == this.to && this.cursor.from < this.cursor.to)) {
                  this.point = BB, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = BB.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
                  break
                }
                this.cursor.next()
              } else this.addActive(GB), this.cursor.next()
            }
          }
        }
        if (GB) {
          this.openStart = 0;
          for (let OB = GB.length - 1; OB >= 0 && GB[OB] < BB; OB--) this.openStart++
        }
      }
      activeForPoint(BB) {
        if (!this.active.length) return this.active;
        let OB = [];
        for (let GB = this.active.length - 1; GB >= 0 && !(this.activeRank[GB] < this.pointRank); GB--)(this.activeTo[GB] > BB || this.activeTo[GB] == BB && this.active[GB].endSide >= this.point.endSide) && OB.push(this.active[GB]);
        return OB.reverse()
      }
      openEnd(BB) {
        let OB = 0;
        for (let GB = this.activeTo.length - 1; GB >= 0 && this.activeTo[GB] > BB; GB--) OB++;
        return OB
      }
    }

    function HO(BB, OB, GB, YB, DB, QB) {
      BB.goto(OB), GB.goto(YB);
      let oB = YB + DB,
        jB = YB,
        yB = YB - OB,
        JB = !!QB.boundChange;
      for (let MB = !1;;) {
        let OB = BB.to + yB - GB.to,
          YB = OB || BB.endSide - GB.endSide,
          DB = YB < 0 ? BB.to + yB : GB.to,
          PB = Math.min(DB, oB);
        if (BB.point || GB.point ? (BB.point && GB.point && rO(BB.point, GB.point) && vO(BB.activeForPoint(BB.to), GB.activeForPoint(GB.to)) || QB.comparePoint(jB, PB, BB.point, GB.point), MB = !1) : (MB && QB.boundChange(jB), PB > jB && !vO(BB.active, GB.active) && QB.compareRange(jB, PB, BB.active, GB.active), JB && PB < oB && (OB || BB.openEnd(DB) != GB.openEnd(DB)) && (MB = !0)), DB > oB) break;
        jB = DB, YB <= 0 && BB.next(), YB >= 0 && GB.next()
      }
    }

    function vO(BB, OB) {
      if (BB.length != OB.length) return !1;
      for (let GB = 0; GB < BB.length; GB++)
        if (BB[GB] != OB[GB] && !rO(BB[GB], OB[GB])) return !1;
      return !0
    }

    function sO(BB, OB) {
      for (let GB = OB, YB = BB.length - 1; GB < YB; GB++) BB[GB] = BB[GB + 1];
      BB.pop()
    }

    function xO(BB, OB, GB) {
      for (let YB = BB.length - 1; YB >= OB; YB--) BB[YB + 1] = BB[YB];
      BB[OB] = GB
    }

    function tO(BB, OB) {
      let GB = -1,
        YB = 1e9;
      for (let DB = 0; DB < OB.length; DB++)(OB[DB] - YB || BB[DB].endSide - BB[GB].endSide) < 0 && (GB = DB, YB = OB[DB]);
      return GB
    }

    function BG(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : BB.length,
        YB = 0;
      for (let DB = 0; DB < GB && DB < BB.length;) 9 == BB.charCodeAt(DB) ? (YB += OB - YB % OB, DB++) : (YB++, DB = fB(BB, DB));
      return YB
    }

    function OG(BB, OB, GB, YB) {
      for (let DB = 0, QB = 0;;) {
        if (QB >= OB) return DB;
        if (DB == BB.length) break;
        QB += 9 == BB.charCodeAt(DB) ? GB - QB % GB : 1, DB = fB(BB, DB)
      }
      return !0 === YB ? -1 : BB.length
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);