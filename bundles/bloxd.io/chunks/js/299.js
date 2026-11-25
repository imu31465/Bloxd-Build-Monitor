export const id = 299;
export const ids = [299];
export const modules = {
  41342: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => UI,
      h: () => MB,
      ChangeSet: () => jB,
      j: () => aI,
      n: () => uB,
      q: () => PI,
      t: () => AB,
      w: () => HB,
      A: () => JI,
      F: () => uI,
      B: () => fI,
      J: () => rI,
      K: () => CI,
      L: () => VB,
      O: () => gB,
      P: () => QI,
      Q: () => YB,
      S: () => pB,
      T: () => RI,
      X: () => BZ,
      _: () => OB,
      ab: () => IZ,
      eb: () => iB
    });
    let TB = [],
      JB = [];

    function oB(BB) {
      if (BB < 768) return !1;
      for (let IB = 0, ZB = TB.length;;) {
        let oB = IB + ZB >> 1;
        if (BB < TB[oB]) ZB = oB;
        else {
          if (!(BB >= JB[oB])) return !0;
          IB = oB + 1
        }
        if (IB == ZB) return !1
      }
    }

    function GB(BB) {
      return BB >= 127462 && BB <= 127487
    }(() => {
      let BB = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((BB => BB ? parseInt(BB, 36) : 1));
      for (let IB = 0, ZB = 0; IB < BB.length; IB++)(IB % 2 ? JB : TB).push(ZB += BB[IB])
    })();
    const vB = 8205;

    function kB(BB, IB) {
      return (!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2] ? cB : nB)(BB, IB, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function cB(BB, IB, ZB) {
      if (IB == BB.length) return IB;
      IB && zB(BB.charCodeAt(IB)) && FB(BB.charCodeAt(IB - 1)) && IB--;
      let TB = hB(BB, IB);
      for (IB += NB(TB); IB < BB.length;) {
        let JB = hB(BB, IB);
        if (TB == vB || JB == vB || ZB && oB(JB)) IB += NB(JB), TB = JB;
        else {
          if (!GB(JB)) break;
          {
            let ZB = 0,
              TB = IB - 2;
            for (; TB >= 0 && GB(hB(BB, TB));) ZB++, TB -= 2;
            if (ZB % 2 == 0) break;
            IB += 2
          }
        }
      }
      return IB
    }

    function nB(BB, IB, ZB) {
      for (; IB > 0;) {
        let TB = cB(BB, IB - 2, ZB);
        if (TB < IB) return TB;
        IB--
      }
      return 0
    }

    function hB(BB, IB) {
      let ZB = BB.charCodeAt(IB);
      if (!FB(ZB) || IB + 1 == BB.length) return ZB;
      let TB = BB.charCodeAt(IB + 1);
      return zB(TB) ? TB - 56320 + (ZB - 55296 << 10) + 65536 : ZB
    }

    function zB(BB) {
      return BB >= 56320 && BB < 57344
    }

    function FB(BB) {
      return BB >= 55296 && BB < 56320
    }

    function NB(BB) {
      return BB < 65536 ? 1 : 2
    }
    class gB {
      lineAt(BB) {
        if (BB < 0 || BB > this.length) throw new RangeError(`Invalid position ${BB} in document of length ${this.length}`);
        return this.lineInner(BB, !1, 1, 0)
      }
      line(BB) {
        if (BB < 1 || BB > this.lines) throw new RangeError(`Invalid line number ${BB} in ${this.lines}-line document`);
        return this.lineInner(BB, !0, 1, 0)
      }
      replace(BB, IB, ZB) {
        [BB, IB] = wB(this, BB, IB);
        let TB = [];
        return this.decompose(0, BB, TB, 2), ZB.length && ZB.decompose(0, ZB.length, TB, 3), this.decompose(IB, this.length, TB, 1), yB.from(TB, this.length - (IB - BB) + ZB.length)
      }
      append(BB) {
        return this.replace(this.length, this.length, BB)
      }
      slice(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        [BB, IB] = wB(this, BB, IB);
        let ZB = [];
        return this.decompose(BB, IB, ZB, 0), yB.from(ZB, IB - BB)
      }
      eq(BB) {
        if (BB == this) return !0;
        if (BB.length != this.length || BB.lines != this.lines) return !1;
        let IB = this.scanIdentical(BB, 1),
          ZB = this.length - this.scanIdentical(BB, -1),
          TB = new dB(this),
          JB = new dB(BB);
        for (let oB = IB, GB = IB;;) {
          if (TB.next(oB), JB.next(oB), oB = 0, TB.lineBreak != JB.lineBreak || TB.done != JB.done || TB.value != JB.value) return !1;
          if (GB += TB.value.length, TB.done || GB >= ZB) return !0
        }
      }
      iter() {
        return new dB(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1)
      }
      iterRange(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        return new CB(this, BB, IB)
      }
      iterLines(BB, IB) {
        let ZB;
        if (null == BB) ZB = this.iter();
        else {
          null == IB && (IB = this.lines + 1);
          let TB = this.line(BB).from;
          ZB = this.iterRange(TB, Math.max(TB, IB == this.lines + 1 ? this.length : IB <= 1 ? 0 : this.line(IB - 1).to))
        }
        return new QB(ZB)
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
        return 1 != BB.length || BB[0] ? BB.length <= 32 ? new qB(BB) : yB.from(qB.split(BB, [])) : gB.empty
      }
    }
    class qB extends gB {
      constructor(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(BB) {
          let IB = -1;
          for (let ZB of BB) IB += ZB.length + 1;
          return IB
        }(BB);
        super(), this.text = BB, this.length = IB
      }
      get lines() {
        return this.text.length
      }
      get children() {
        return null
      }
      lineInner(BB, IB, ZB, TB) {
        for (let JB = 0;; JB++) {
          let oB = this.text[JB],
            GB = TB + oB.length;
          if ((IB ? ZB : GB) >= BB) return new sB(TB, GB, ZB, oB);
          TB = GB + 1, ZB++
        }
      }
      decompose(BB, IB, ZB, TB) {
        let JB = BB <= 0 && IB >= this.length ? this : new qB(WB(this.text, BB, IB), Math.min(IB, this.length) - Math.max(0, BB));
        if (1 & TB) {
          let BB = ZB.pop(),
            IB = UB(JB.text, BB.text.slice(), 0, JB.length);
          if (IB.length <= 32) ZB.push(new qB(IB, BB.length + JB.length));
          else {
            let BB = IB.length >> 1;
            ZB.push(new qB(IB.slice(0, BB)), new qB(IB.slice(BB)))
          }
        } else ZB.push(JB)
      }
      replace(BB, IB, ZB) {
        if (!(ZB instanceof qB)) return super.replace(BB, IB, ZB);
        [BB, IB] = wB(this, BB, IB);
        let TB = UB(this.text, UB(ZB.text, WB(this.text, 0, BB)), IB),
          JB = this.length + ZB.length - (IB - BB);
        return TB.length <= 32 ? new qB(TB, JB) : yB.from(qB.split(TB, []), JB)
      }
      sliceString(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [BB, IB] = wB(this, BB, IB);
        let TB = "";
        for (let JB = 0, oB = 0; JB <= IB && oB < this.text.length; oB++) {
          let GB = this.text[oB],
            vB = JB + GB.length;
          JB > BB && oB && (TB += ZB), BB < vB && IB > JB && (TB += GB.slice(Math.max(0, BB - JB), IB - JB)), JB = vB + 1
        }
        return TB
      }
      flatten(BB) {
        for (let IB of this.text) BB.push(IB)
      }
      scanIdentical() {
        return 0
      }
      static split(BB, IB) {
        let ZB = [],
          TB = -1;
        for (let JB of BB) ZB.push(JB), TB += JB.length + 1, 32 == ZB.length && (IB.push(new qB(ZB, TB)), ZB = [], TB = -1);
        return TB > -1 && IB.push(new qB(ZB, TB)), IB
      }
    }
    class yB extends gB {
      constructor(BB, IB) {
        super(), this.children = BB, this.length = IB, this.lines = 0;
        for (let ZB of BB) this.lines += ZB.lines
      }
      lineInner(BB, IB, ZB, TB) {
        for (let JB = 0;; JB++) {
          let oB = this.children[JB],
            GB = TB + oB.length,
            vB = ZB + oB.lines - 1;
          if ((IB ? vB : GB) >= BB) return oB.lineInner(BB, IB, ZB, TB);
          TB = GB + 1, ZB = vB + 1
        }
      }
      decompose(BB, IB, ZB, TB) {
        for (let JB = 0, oB = 0; oB <= IB && JB < this.children.length; JB++) {
          let GB = this.children[JB],
            vB = oB + GB.length;
          if (BB <= vB && IB >= oB) {
            let JB = TB & ((oB <= BB ? 1 : 0) | (vB >= IB ? 2 : 0));
            oB >= BB && vB <= IB && !JB ? ZB.push(GB) : GB.decompose(BB - oB, IB - oB, ZB, JB)
          }
          oB = vB + 1
        }
      }
      replace(BB, IB, ZB) {
        if ([BB, IB] = wB(this, BB, IB), ZB.lines < this.lines)
          for (let TB = 0, JB = 0; TB < this.children.length; TB++) {
            let oB = this.children[TB],
              GB = JB + oB.length;
            if (BB >= JB && IB <= GB) {
              let vB = oB.replace(BB - JB, IB - JB, ZB),
                kB = this.lines - oB.lines + vB.lines;
              if (vB.lines < kB >> 4 && vB.lines > kB >> 6) {
                let JB = this.children.slice();
                return JB[TB] = vB, new yB(JB, this.length - (IB - BB) + ZB.length)
              }
              return super.replace(JB, GB, vB)
            }
            JB = GB + 1
          }
        return super.replace(BB, IB, ZB)
      }
      sliceString(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [BB, IB] = wB(this, BB, IB);
        let TB = "";
        for (let JB = 0, oB = 0; JB < this.children.length && oB <= IB; JB++) {
          let GB = this.children[JB],
            vB = oB + GB.length;
          oB > BB && JB && (TB += ZB), BB < vB && IB > oB && (TB += GB.sliceString(BB - oB, IB - oB, ZB)), oB = vB + 1
        }
        return TB
      }
      flatten(BB) {
        for (let IB of this.children) IB.flatten(BB)
      }
      scanIdentical(BB, IB) {
        if (!(BB instanceof yB)) return 0;
        let ZB = 0,
          [TB, JB, oB, GB] = IB > 0 ? [0, 0, this.children.length, BB.children.length] : [this.children.length - 1, BB.children.length - 1, -1, -1];
        for (;; TB += IB, JB += IB) {
          if (TB == oB || JB == GB) return ZB;
          let vB = this.children[TB],
            kB = BB.children[JB];
          if (vB != kB) return ZB + vB.scanIdentical(kB, IB);
          ZB += vB.length + 1
        }
      }
      static from(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BB.reduce(((BB, IB) => BB + IB.length + 1), -1),
          ZB = 0;
        for (let zB of BB) ZB += zB.lines;
        if (ZB < 32) {
          let ZB = [];
          for (let IB of BB) IB.flatten(ZB);
          return new qB(ZB, IB)
        }
        let TB = Math.max(32, ZB >> 5),
          JB = TB << 1,
          oB = TB >> 1,
          GB = [],
          vB = 0,
          kB = -1,
          cB = [];

        function nB(BB) {
          let IB;
          if (BB.lines > JB && BB instanceof yB)
            for (let ZB of BB.children) nB(ZB);
          else BB.lines > oB && (vB > oB || !vB) ? (hB(), GB.push(BB)) : BB instanceof qB && vB && (IB = cB[cB.length - 1]) instanceof qB && BB.lines + IB.lines <= 32 ? (vB += BB.lines, kB += BB.length + 1, cB[cB.length - 1] = new qB(IB.text.concat(BB.text), IB.length + 1 + BB.length)) : (vB + BB.lines > TB && hB(), vB += BB.lines, kB += BB.length + 1, cB.push(BB))
        }

        function hB() {
          0 != vB && (GB.push(1 == cB.length ? cB[0] : yB.from(cB, kB)), kB = -1, vB = cB.length = 0)
        }
        for (let zB of BB) nB(zB);
        return hB(), 1 == GB.length ? GB[0] : new yB(GB, IB)
      }
    }

    function UB(BB, IB) {
      let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e9;
      for (let JB = 0, oB = 0, GB = !0; oB < BB.length && JB <= TB; oB++) {
        let vB = BB[oB],
          kB = JB + vB.length;
        kB >= ZB && (kB > TB && (vB = vB.slice(0, TB - JB)), JB < ZB && (vB = vB.slice(ZB - JB)), GB ? (IB[IB.length - 1] += vB, GB = !1) : IB.push(vB)), JB = kB + 1
      }
      return IB
    }

    function WB(BB, IB, ZB) {
      return UB(BB, [""], IB, ZB)
    }
    gB.empty = new qB([""], 0);
    class dB {
      constructor(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.dir = IB, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [BB], this.offsets = [IB > 0 ? 1 : (BB instanceof qB ? BB.text.length : BB.children.length) << 1]
      }
      nextInner(BB, IB) {
        for (this.done = this.lineBreak = !1;;) {
          let ZB = this.nodes.length - 1,
            TB = this.nodes[ZB],
            JB = this.offsets[ZB],
            oB = JB >> 1,
            GB = TB instanceof qB ? TB.text.length : TB.children.length;
          if (oB == (IB > 0 ? GB : 0)) {
            if (0 == ZB) return this.done = !0, this.value = "", this;
            IB > 0 && this.offsets[ZB - 1]++, this.nodes.pop(), this.offsets.pop()
          } else if ((1 & JB) == (IB > 0 ? 0 : 1)) {
            if (this.offsets[ZB] += IB, 0 == BB) return this.lineBreak = !0, this.value = "\n", this;
            BB--
          } else if (TB instanceof qB) {
            let JB = TB.text[oB + (IB < 0 ? -1 : 0)];
            if (this.offsets[ZB] += IB, JB.length > Math.max(0, BB)) return this.value = 0 == BB ? JB : IB > 0 ? JB.slice(BB) : JB.slice(0, JB.length - BB), this;
            BB -= JB.length
          } else {
            let JB = TB.children[oB + (IB < 0 ? -1 : 0)];
            BB > JB.length ? (BB -= JB.length, this.offsets[ZB] += IB) : (IB < 0 && this.offsets[ZB]--, this.nodes.push(JB), this.offsets.push(IB > 0 ? 1 : (JB instanceof qB ? JB.text.length : JB.children.length) << 1))
          }
        }
      }
      next() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return BB < 0 && (this.nextInner(-BB, -this.dir), BB = this.value.length), this.nextInner(BB, this.dir)
      }
    }
    class CB {
      constructor(BB, IB, ZB) {
        this.value = "", this.done = !1, this.cursor = new dB(BB, IB > ZB ? -1 : 1), this.pos = IB > ZB ? BB.length : 0, this.from = Math.min(IB, ZB), this.to = Math.max(IB, ZB)
      }
      nextInner(BB, IB) {
        if (IB < 0 ? this.pos <= this.from : this.pos >= this.to) return this.value = "", this.done = !0, this;
        BB += Math.max(0, IB < 0 ? this.pos - this.to : this.from - this.pos);
        let ZB = IB < 0 ? this.pos - this.from : this.to - this.pos;
        BB > ZB && (BB = ZB), ZB -= BB;
        let {
          value: TB
        } = this.cursor.next(BB);
        return this.pos += (TB.length + BB) * IB, this.value = TB.length <= ZB ? TB : IB < 0 ? TB.slice(TB.length - ZB) : TB.slice(0, ZB), this.done = !this.value, this
      }
      next() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return BB < 0 ? BB = Math.max(BB, this.from - this.pos) : BB > 0 && (BB = Math.min(BB, this.to - this.pos)), this.nextInner(BB, this.cursor.dir)
      }
      get lineBreak() {
        return this.cursor.lineBreak && "" != this.value
      }
    }
    class QB {
      constructor(BB) {
        this.inner = BB, this.afterBreak = !0, this.value = "", this.done = !1
      }
      next() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          {
            done: IB,
            lineBreak: ZB,
            value: TB
          } = this.inner.next(BB);
        return IB && this.afterBreak ? (this.value = "", this.afterBreak = !1) : IB ? (this.done = !0, this.value = "") : ZB ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = TB, this.afterBreak = !1), this
      }
      get lineBreak() {
        return !1
      }
    }
    "undefined" != typeof Symbol && (gB.prototype[Symbol.iterator] = function() {
      return this.iter()
    }, dB.prototype[Symbol.iterator] = CB.prototype[Symbol.iterator] = QB.prototype[Symbol.iterator] = function() {
      return this
    });
    class sB {
      constructor(BB, IB, ZB, TB) {
        this.from = BB, this.to = IB, this.number = ZB, this.text = TB
      }
      get length() {
        return this.to - this.from
      }
    }

    function wB(BB, IB, ZB) {
      return [IB = Math.max(0, Math.min(BB.length, IB)), Math.max(IB, Math.min(BB.length, ZB))]
    }

    function OB(BB, IB) {
      return kB(BB, IB, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function YB(BB, IB) {
      let ZB = BB.charCodeAt(IB);
      if (!((TB = ZB) >= 55296 && TB < 56320) || IB + 1 == BB.length) return ZB;
      var TB;
      let JB = BB.charCodeAt(IB + 1);
      return function(BB) {
        return BB >= 56320 && BB < 57344
      }(JB) ? JB - 56320 + (ZB - 55296 << 10) + 65536 : ZB
    }

    function iB(BB) {
      return BB <= 65535 ? String.fromCharCode(BB) : (BB -= 65536, String.fromCharCode(55296 + (BB >> 10), 56320 + (1023 & BB)))
    }

    function pB(BB) {
      return BB < 65536 ? 1 : 2
    }
    const aB = /\r\n?|\n/;
    var HB = function(BB) {
      return BB[BB.Simple = 0] = "Simple", BB[BB.TrackDel = 1] = "TrackDel", BB[BB.TrackBefore = 2] = "TrackBefore", BB[BB.TrackAfter = 3] = "TrackAfter", BB
    }(HB || (HB = {}));
    class MB {
      constructor(BB) {
        this.sections = BB
      }
      get length() {
        let BB = 0;
        for (let IB = 0; IB < this.sections.length; IB += 2) BB += this.sections[IB];
        return BB
      }
      get newLength() {
        let BB = 0;
        for (let IB = 0; IB < this.sections.length; IB += 2) {
          let ZB = this.sections[IB + 1];
          BB += ZB < 0 ? this.sections[IB] : ZB
        }
        return BB
      }
      get empty() {
        return 0 == this.sections.length || 2 == this.sections.length && this.sections[1] < 0
      }
      iterGaps(BB) {
        for (let IB = 0, ZB = 0, TB = 0; IB < this.sections.length;) {
          let JB = this.sections[IB++],
            oB = this.sections[IB++];
          oB < 0 ? (BB(ZB, TB, JB), TB += JB) : TB += oB, ZB += JB
        }
      }
      iterChangedRanges(BB) {
        rB(this, BB, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get invertedDesc() {
        let BB = [];
        for (let IB = 0; IB < this.sections.length;) {
          let ZB = this.sections[IB++],
            TB = this.sections[IB++];
          TB < 0 ? BB.push(ZB, TB) : BB.push(TB, ZB)
        }
        return new MB(BB)
      }
      composeDesc(BB) {
        return this.empty ? BB : BB.empty ? this : XB(this, BB)
      }
      mapDesc(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return BB.empty ? this : mB(this, BB, IB)
      }
      mapPos(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : HB.Simple,
          TB = 0,
          JB = 0;
        for (let oB = 0; oB < this.sections.length;) {
          let GB = this.sections[oB++],
            vB = this.sections[oB++],
            kB = TB + GB;
          if (vB < 0) {
            if (kB > BB) return JB + (BB - TB);
            JB += GB
          } else {
            if (ZB != HB.Simple && kB >= BB && (ZB == HB.TrackDel && TB < BB && kB > BB || ZB == HB.TrackBefore && TB < BB || ZB == HB.TrackAfter && kB > BB)) return null;
            if (kB > BB || kB == BB && IB < 0 && !GB) return BB == TB || IB < 0 ? JB : JB + vB;
            JB += vB
          }
          TB = kB
        }
        if (BB > TB) throw new RangeError(`Position ${BB} is out of range for changeset of length ${TB}`);
        return JB
      }
      touchesRange(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BB;
        for (let ZB = 0, TB = 0; ZB < this.sections.length && TB <= IB;) {
          let JB = TB + this.sections[ZB++];
          if (this.sections[ZB++] >= 0 && TB <= IB && JB >= BB) return !(TB < BB && JB > IB) || "cover";
          TB = JB
        }
        return !1
      }
      toString() {
        let BB = "";
        for (let IB = 0; IB < this.sections.length;) {
          let ZB = this.sections[IB++],
            TB = this.sections[IB++];
          BB += (BB ? " " : "") + ZB + (TB >= 0 ? ":" + TB : "")
        }
        return BB
      }
      toJSON() {
        return this.sections
      }
      static fromJSON(BB) {
        if (!Array.isArray(BB) || BB.length % 2 || BB.some((BB => "number" != typeof BB))) throw new RangeError("Invalid JSON representation of ChangeDesc");
        return new MB(BB)
      }
      static create(BB) {
        return new MB(BB)
      }
    }
    class jB extends MB {
      constructor(BB, IB) {
        super(BB), this.inserted = IB
      }
      apply(BB) {
        if (this.length != BB.length) throw new RangeError("Applying change set to a document with the wrong length");
        return rB(this, ((IB, ZB, TB, JB, oB) => BB = BB.replace(TB, TB + (ZB - IB), oB)), !1), BB
      }
      mapDesc(BB) {
        return mB(this, BB, arguments.length > 1 && void 0 !== arguments[1] && arguments[1], !0)
      }
      invert(BB) {
        let IB = this.sections.slice(),
          ZB = [];
        for (let TB = 0, JB = 0; TB < IB.length; TB += 2) {
          let oB = IB[TB],
            GB = IB[TB + 1];
          if (GB >= 0) {
            IB[TB] = GB, IB[TB + 1] = oB;
            let vB = TB >> 1;
            for (; ZB.length < vB;) ZB.push(gB.empty);
            ZB.push(oB ? BB.slice(JB, JB + oB) : gB.empty)
          }
          JB += oB
        }
        return new jB(IB, ZB)
      }
      compose(BB) {
        return this.empty ? BB : BB.empty ? this : XB(this, BB, !0)
      }
      map(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return BB.empty ? this : mB(this, BB, IB, !0)
      }
      iterChanges(BB) {
        rB(this, BB, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get desc() {
        return MB.create(this.sections)
      }
      filter(BB) {
        let IB = [],
          ZB = [],
          TB = [],
          JB = new LB(this);
        BB: for (let oB = 0, GB = 0;;) {
          let vB = oB == BB.length ? 1e9 : BB[oB++];
          for (; GB < vB || GB == vB && 0 == JB.len;) {
            if (JB.done) break BB;
            let BB = Math.min(JB.len, vB - GB);
            PB(TB, BB, -1);
            let oB = -1 == JB.ins ? -1 : 0 == JB.off ? JB.ins : 0;
            PB(IB, BB, oB), oB > 0 && RB(ZB, IB, JB.text), JB.forward(BB), GB += BB
          }
          let kB = BB[oB++];
          for (; GB < kB;) {
            if (JB.done) break BB;
            let BB = Math.min(JB.len, kB - GB);
            PB(IB, BB, -1), PB(TB, BB, -1 == JB.ins ? -1 : 0 == JB.off ? JB.ins : 0), JB.forward(BB), GB += BB
          }
        }
        return {
          changes: new jB(IB, ZB),
          filtered: MB.create(TB)
        }
      }
      toJSON() {
        let BB = [];
        for (let IB = 0; IB < this.sections.length; IB += 2) {
          let ZB = this.sections[IB],
            TB = this.sections[IB + 1];
          TB < 0 ? BB.push(ZB) : 0 == TB ? BB.push([ZB]) : BB.push([ZB].concat(this.inserted[IB >> 1].toJSON()))
        }
        return BB
      }
      static of (BB, IB, ZB) {
        let TB = [],
          JB = [],
          oB = 0,
          GB = null;

        function vB() {
          if (!(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && !TB.length) return;
          oB < IB && PB(TB, IB - oB, -1);
          let BB = new jB(TB, JB);
          GB = GB ? GB.compose(BB.map(GB)) : BB, TB = [], JB = [], oB = 0
        }
        return function BB(kB) {
          if (Array.isArray(kB))
            for (let IB of kB) BB(IB);
          else if (kB instanceof jB) {
            if (kB.length != IB) throw new RangeError(`Mismatched change set length (got ${kB.length}, expected ${IB})`);
            vB(), GB = GB ? GB.compose(kB.map(GB)) : kB
          } else {
            let {
              from: BB,
              to: GB = BB,
              insert: cB
            } = kB;
            if (BB > GB || BB < 0 || GB > IB) throw new RangeError(`Invalid change range ${BB} to ${GB} (in doc of length ${IB})`);
            let nB = cB ? "string" == typeof cB ? gB.of(cB.split(ZB || aB)) : cB : gB.empty,
              hB = nB.length;
            if (BB == GB && 0 == hB) return;
            BB < oB && vB(), BB > oB && PB(TB, BB - oB, -1), PB(TB, GB - BB, hB), RB(JB, TB, nB), oB = GB
          }
        }(BB), vB(!GB), GB
      }
      static empty(BB) {
        return new jB(BB ? [BB, -1] : [], [])
      }
      static fromJSON(BB) {
        if (!Array.isArray(BB)) throw new RangeError("Invalid JSON representation of ChangeSet");
        let IB = [],
          ZB = [];
        for (let TB = 0; TB < BB.length; TB++) {
          let JB = BB[TB];
          if ("number" == typeof JB) IB.push(JB, -1);
          else {
            if (!Array.isArray(JB) || "number" != typeof JB[0] || JB.some(((BB, IB) => IB && "string" != typeof BB))) throw new RangeError("Invalid JSON representation of ChangeSet");
            if (1 == JB.length) IB.push(JB[0], 0);
            else {
              for (; ZB.length < TB;) ZB.push(gB.empty);
              ZB[TB] = gB.of(JB.slice(1)), IB.push(JB[0], ZB[TB].length)
            }
          }
        }
        return new jB(IB, ZB)
      }
      static createSet(BB, IB) {
        return new jB(BB, IB)
      }
    }

    function PB(BB, IB, ZB) {
      let TB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (0 == IB && ZB <= 0) return;
      let JB = BB.length - 2;
      JB >= 0 && ZB <= 0 && ZB == BB[JB + 1] ? BB[JB] += IB : JB >= 0 && 0 == IB && 0 == BB[JB] ? BB[JB + 1] += ZB : TB ? (BB[JB] += IB, BB[JB + 1] += ZB) : BB.push(IB, ZB)
    }

    function RB(BB, IB, ZB) {
      if (0 == ZB.length) return;
      let TB = IB.length - 2 >> 1;
      if (TB < BB.length) BB[BB.length - 1] = BB[BB.length - 1].append(ZB);
      else {
        for (; BB.length < TB;) BB.push(gB.empty);
        BB.push(ZB)
      }
    }

    function rB(BB, IB, ZB) {
      let TB = BB.inserted;
      for (let JB = 0, oB = 0, GB = 0; GB < BB.sections.length;) {
        let vB = BB.sections[GB++],
          kB = BB.sections[GB++];
        if (kB < 0) JB += vB, oB += vB;
        else {
          let cB = JB,
            nB = oB,
            hB = gB.empty;
          for (; cB += vB, nB += kB, kB && TB && (hB = hB.append(TB[GB - 2 >> 1])), !(ZB || GB == BB.sections.length || BB.sections[GB + 1] < 0);) vB = BB.sections[GB++], kB = BB.sections[GB++];
          IB(JB, cB, oB, nB, hB), JB = cB, oB = nB
        }
      }
    }

    function mB(BB, IB, ZB) {
      let TB = [],
        JB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3] ? [] : null,
        oB = new LB(BB),
        GB = new LB(IB),
        vB = 0;
      for (let kB = -1;;) {
        if (++vB > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - likely malformed ChangeSet");
        if (oB.done && GB.len || GB.done && oB.len) throw new Error("Mismatched change set lengths");
        if (-1 == oB.ins && -1 == GB.ins) {
          let BB = Math.min(oB.len, GB.len);
          PB(TB, BB, -1), oB.forward(BB), GB.forward(BB)
        } else if (GB.ins >= 0 && (oB.ins < 0 || kB == oB.i || 0 == oB.off && (GB.len < oB.len || GB.len == oB.len && !ZB))) {
          let BB = GB.len;
          for (PB(TB, GB.ins, -1); BB;) {
            if (++vB > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-b");
            let IB = Math.min(oB.len, BB);
            oB.ins >= 0 && kB < oB.i && oB.len <= IB && (PB(TB, 0, oB.ins), JB && RB(JB, TB, oB.text), kB = oB.i), oB.forward(IB), BB -= IB
          }
          GB.next()
        } else {
          if (!(oB.ins >= 0)) {
            if (oB.done && GB.done) return JB ? jB.createSet(TB, JB) : MB.create(TB);
            throw new Error("Mismatched change set lengths")
          } {
            let BB = 0,
              IB = oB.len;
            for (; IB;) {
              if (++vB > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-a");
              if (-1 == GB.ins) {
                let ZB = Math.min(IB, GB.len);
                BB += ZB, IB -= ZB, GB.forward(ZB)
              } else {
                if (!(0 == GB.ins && GB.len < IB)) break;
                IB -= GB.len, GB.next()
              }
            }
            PB(TB, BB, kB < oB.i ? oB.ins : 0), JB && kB < oB.i && RB(JB, TB, oB.text), kB = oB.i, oB.forward(oB.len - IB)
          }
        }
      }
    }

    function XB(BB, IB) {
      let ZB = [],
        TB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? [] : null,
        JB = new LB(BB),
        oB = new LB(IB),
        GB = 0;
      for (let vB = !1;;) {
        if (++GB > 2e6) throw new Error("BLOXD CODEMIRROR: composeSets exceeded max iterations - likely malformed ChangeSet");
        if (JB.done && oB.done) return TB ? jB.createSet(ZB, TB) : MB.create(ZB);
        if (0 == JB.ins) PB(ZB, JB.len, 0, vB), JB.next();
        else if (0 != oB.len || oB.done) {
          if (JB.done || oB.done) throw new Error("Mismatched change set lengths");
          {
            let BB = Math.min(JB.len2, oB.len),
              IB = ZB.length;
            if (-1 == JB.ins) {
              let IB = -1 == oB.ins ? -1 : oB.off ? 0 : oB.ins;
              PB(ZB, BB, IB, vB), TB && IB && RB(TB, ZB, oB.text)
            } else - 1 == oB.ins ? (PB(ZB, JB.off ? 0 : JB.len, BB, vB), TB && RB(TB, ZB, JB.textBit(BB))) : (PB(ZB, JB.off ? 0 : JB.len, oB.off ? 0 : oB.ins, vB), TB && !oB.off && RB(TB, ZB, oB.text));
            vB = (JB.ins > BB || oB.ins >= 0 && oB.len > BB) && (vB || ZB.length > IB), JB.forward2(BB), oB.forward(BB)
          }
        } else PB(ZB, 0, oB.ins, vB), TB && RB(TB, ZB, oB.text), oB.next()
      }
    }
    class LB {
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
        } = this.set, IB = this.i - 2 >> 1;
        return IB >= BB.length ? gB.empty : BB[IB]
      }
      textBit(BB) {
        let {
          inserted: IB
        } = this.set, ZB = this.i - 2 >> 1;
        return ZB >= IB.length && !BB ? gB.empty : IB[ZB].slice(this.off, null == BB ? void 0 : this.off + BB)
      }
      forward(BB) {
        BB == this.len ? this.next() : (this.len -= BB, this.off += BB)
      }
      forward2(BB) {
        -1 == this.ins ? this.forward(BB) : BB == this.ins ? this.next() : (this.ins -= BB, this.off += BB)
      }
    }
    class eB {
      constructor(BB, IB, ZB) {
        this.from = BB, this.to = IB, this.flags = ZB
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
        let IB, ZB, TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return this.empty ? IB = ZB = BB.mapPos(this.from, TB) : (IB = BB.mapPos(this.from, 1), ZB = BB.mapPos(this.to, -1)), IB == this.from && ZB == this.to ? this : new eB(IB, ZB, this.flags)
      }
      extend(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BB,
          ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (BB <= this.anchor && IB >= this.anchor) return uB.range(BB, IB, void 0, void 0, ZB);
        let TB = Math.abs(BB - this.anchor) > Math.abs(IB - this.anchor) ? BB : IB;
        return uB.range(this.anchor, TB, void 0, void 0, ZB)
      }
      eq(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.anchor == BB.anchor && this.head == BB.head && this.goalColumn == BB.goalColumn && (!IB || !this.empty || this.assoc == BB.assoc)
      }
      toJSON() {
        return {
          anchor: this.anchor,
          head: this.head
        }
      }
      static fromJSON(BB) {
        if (!BB || "number" != typeof BB.anchor || "number" != typeof BB.head) throw new RangeError("Invalid JSON representation for SelectionRange");
        return uB.range(BB.anchor, BB.head)
      }
      static create(BB, IB, ZB) {
        return new eB(BB, IB, ZB)
      }
    }
    class uB {
      constructor(BB, IB) {
        this.vq = BB, this.mainIndex = IB
      }
      map(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return BB.empty ? this : uB.create(this.vq.map((ZB => ZB.map(BB, IB))), this.mainIndex)
      }
      eq(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.vq.length != BB.vq.length || this.mainIndex != BB.mainIndex) return !1;
        for (let ZB = 0; ZB < this.vq.length; ZB++)
          if (!this.vq[ZB].eq(BB.vq[ZB], IB)) return !1;
        return !0
      }
      get main() {
        return this.vq[this.mainIndex]
      }
      asSingle() {
        return 1 == this.vq.length ? this : new uB([this.main], 0)
      }
      addRange(BB) {
        let IB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return uB.create([BB].concat(this.vq), IB ? 0 : this.mainIndex + 1)
      }
      replaceRange(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.mainIndex,
          ZB = this.vq.slice();
        return ZB[IB] = BB, uB.create(ZB, this.mainIndex)
      }
      toJSON() {
        return {
          vq: this.vq.map((BB => BB.toJSON())),
          main: this.mainIndex
        }
      }
      static fromJSON(BB) {
        if (!BB || !Array.isArray(BB.vq) || "number" != typeof BB.main || BB.main >= BB.vq.length) throw new RangeError("Invalid JSON representation for EditorSelection");
        return new uB(BB.vq.map((BB => eB.fromJSON(BB))), BB.main)
      }
      static single(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BB;
        return new uB([uB.range(BB, IB)], 0)
      }
      static create(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (0 == BB.length) throw new RangeError("A selection needs at least one range");
        for (let ZB = 0, TB = 0; TB < BB.length; TB++) {
          let JB = BB[TB];
          if (JB.empty ? JB.from <= ZB : JB.from < ZB) return uB.normalized(BB.slice(), IB);
          ZB = JB.to
        }
        return new uB(BB, IB)
      }
      static cursor(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZB = arguments.length > 2 ? arguments[2] : void 0,
          TB = arguments.length > 3 ? arguments[3] : void 0;
        return eB.create(BB, BB, (0 == IB ? 0 : IB < 0 ? 8 : 16) | (null == ZB ? 7 : Math.min(6, ZB)) | (null !== TB && void 0 !== TB ? TB : 16777215) << 6)
      }
      static range(BB, IB, ZB, TB, JB) {
        let oB = (null !== ZB && void 0 !== ZB ? ZB : 16777215) << 6 | (null == TB ? 7 : Math.min(6, TB));
        return JB || BB == IB || (JB = IB < BB ? 1 : -1), IB < BB ? eB.create(IB, BB, 48 | oB) : eB.create(BB, IB, (JB ? JB < 0 ? 8 : 16 : 0) | oB)
      }
      static normalized(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZB = BB[IB];
        BB.sort(((BB, IB) => BB.from - IB.from)), IB = BB.indexOf(ZB);
        for (let TB = 1; TB < BB.length; TB++) {
          let ZB = BB[TB],
            JB = BB[TB - 1];
          if (ZB.empty ? ZB.from <= JB.to : ZB.from < JB.to) {
            let oB = JB.from,
              GB = Math.max(ZB.to, JB.to);
            TB <= IB && IB--, BB.splice(--TB, 2, ZB.anchor > ZB.head ? uB.range(GB, oB) : uB.range(oB, GB))
          }
        }
        return new uB(BB, IB)
      }
    }

    function fB(BB, IB) {
      for (let ZB of BB.vq)
        if (ZB.to > IB) throw new RangeError("Selection points outside of document")
    }
    let lB = 0;
    class AB {
      constructor(BB, IB, ZB, TB, JB) {
        this.combine = BB, this.compareInput = IB, this.compare = ZB, this.isStatic = TB, this.id = lB++, this.default = BB([]), this.extensions = "function" == typeof JB ? JB(this) : JB
      }
      get reader() {
        return this
      }
      static define() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return new AB(BB.combine || (BB => BB), BB.compareInput || ((BB, IB) => BB === IB), BB.compare || (BB.combine ? (BB, IB) => BB === IB : tB), !!BB.static, BB.enables)
      }
      of(BB) {
        return new bB([], this, 0, BB)
      }
      compute(BB, IB) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new bB(BB, this, 1, IB)
      }
      computeN(BB, IB) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new bB(BB, this, 2, IB)
      }
      from(BB, IB) {
        return IB || (IB = BB => BB), this.compute([BB], (ZB => IB(ZB.field(BB))))
      }
    }

    function tB(BB, IB) {
      return BB == IB || BB.length == IB.length && BB.every(((BB, ZB) => BB === IB[ZB]))
    }
    class bB {
      constructor(BB, IB, ZB, TB) {
        this.dependencies = BB, this.facet = IB, this.type = ZB, this.value = TB, this.id = lB++
      }
      dynamicSlot(BB) {
        var IB;
        let ZB = this.value,
          TB = this.facet.compareInput,
          JB = this.id,
          oB = BB[JB] >> 1,
          GB = 2 == this.type,
          vB = !1,
          kB = !1,
          cB = [];
        for (let nB of this.dependencies) "doc" == nB ? vB = !0 : "selection" == nB ? kB = !0 : 0 == (1 & (null !== (IB = BB[nB.id]) && void 0 !== IB ? IB : 1)) && cB.push(BB[nB.id]);
        return {
          create: BB => (BB.values[oB] = ZB(BB), 1),
          update(BB, IB) {
            if (vB && IB.docChanged || kB && (IB.docChanged || IB.selection) || EB(BB, cB)) {
              let IB = ZB(BB);
              if (GB ? !xB(IB, BB.values[oB], TB) : !TB(IB, BB.values[oB])) return BB.values[oB] = IB, 1
            }
            return 0
          },
          reconfigure: (BB, IB) => {
            let vB, kB = IB.config.address[JB];
            if (null != kB) {
              let JB = nI(IB, kB);
              if (this.dependencies.every((ZB => ZB instanceof AB ? IB.facet(ZB) === BB.facet(ZB) : !(ZB instanceof VB) || IB.field(ZB, !1) == BB.field(ZB, !1))) || (GB ? xB(vB = ZB(BB), JB, TB) : TB(vB = ZB(BB), JB))) return BB.values[oB] = JB, 0
            } else vB = ZB(BB);
            return BB.values[oB] = vB, 1
          }
        }
      }
    }

    function xB(BB, IB, ZB) {
      if (BB.length != IB.length) return !1;
      for (let TB = 0; TB < BB.length; TB++)
        if (!ZB(BB[TB], IB[TB])) return !1;
      return !0
    }

    function EB(BB, IB) {
      let ZB = !1;
      for (let TB of IB) 1 & cI(BB, TB) && (ZB = !0);
      return ZB
    }

    function DB(BB, IB, ZB) {
      let TB = ZB.map((IB => BB[IB.id])),
        JB = ZB.map((BB => BB.type)),
        oB = TB.filter((BB => !(1 & BB))),
        GB = BB[IB.id] >> 1;

      function vB(BB) {
        let ZB = [];
        for (let IB = 0; IB < TB.length; IB++) {
          let oB = nI(BB, TB[IB]);
          if (2 == JB[IB])
            for (let BB of oB) ZB.push(BB);
          else ZB.push(oB)
        }
        return IB.combine(ZB)
      }
      return {
        create(BB) {
          for (let IB of TB) cI(BB, IB);
          return BB.values[GB] = vB(BB), 1
        },
        update(BB, ZB) {
          if (!EB(BB, oB)) return 0;
          let TB = vB(BB);
          return IB.compare(TB, BB.values[GB]) ? 0 : (BB.values[GB] = TB, 1)
        },
        reconfigure(BB, JB) {
          let oB = EB(BB, TB),
            kB = JB.config.facets[IB.id],
            cB = JB.facet(IB);
          if (kB && !oB && tB(ZB, kB)) return BB.values[GB] = cB, 0;
          let nB = vB(BB);
          return IB.compare(nB, cB) ? (BB.values[GB] = cB, 0) : (BB.values[GB] = nB, 1)
        }
      }
    }
    const KB = AB.define({
      static: !0
    });
    class VB {
      constructor(BB, IB, ZB, TB, JB) {
        this.id = BB, this.createF = IB, this.updateF = ZB, this.compareF = TB, this.spec = JB, this.provides = void 0
      }
      static define(BB) {
        let IB = new VB(lB++, BB.create, BB.update, BB.compare || ((BB, IB) => BB === IB), BB);
        return BB.provide && (IB.provides = BB.provide(IB)), IB
      }
      create(BB) {
        let IB = BB.facet(KB).find((BB => BB.field == this));
        return ((null === IB || void 0 === IB ? void 0 : IB.create) || this.createF)(BB)
      }
      slot(BB) {
        let IB = BB[this.id] >> 1;
        return {
          create: BB => (BB.values[IB] = this.create(BB), 1),
          update: (BB, ZB) => {
            let TB = BB.values[IB],
              JB = this.updateF(TB, ZB);
            return this.compareF(TB, JB) ? 0 : (BB.values[IB] = JB, 1)
          },
          reconfigure: (BB, ZB) => {
            let TB, JB = BB.facet(KB),
              oB = ZB.facet(KB);
            return (TB = JB.find((BB => BB.field == this))) && TB != oB.find((BB => BB.field == this)) ? (BB.values[IB] = TB.create(BB), 1) : null != ZB.config.address[this.id] ? (BB.values[IB] = ZB.field(this), 0) : (BB.values[IB] = this.create(BB), 1)
          }
        }
      }
      init(BB) {
        return [this, KB.of({
          field: this,
          create: BB
        })]
      }
      get extension() {
        return this
      }
    }
    const SB = 4,
      BI = 3,
      II = 2,
      ZI = 1;

    function TI(BB) {
      return IB => new oI(IB, BB)
    }
    const JI = {
      highest: TI(0),
      high: TI(ZI),
      default: TI(II),
      low: TI(BI),
      lowest: TI(SB)
    };
    class oI {
      constructor(BB, IB) {
        this.inner = BB, this.prec = IB
      }
    }
    class GI {
      of(BB) {
        return new vI(this, BB)
      }
      reconfigure(BB) {
        return GI.reconfigure.of({
          compartment: this,
          extension: BB
        })
      }
      get(BB) {
        return BB.config.compartments.get(this)
      }
    }
    class vI {
      constructor(BB, IB) {
        this.compartment = BB, this.inner = IB
      }
    }
    class kI {
      constructor(BB, IB, ZB, TB, JB, oB) {
        for (this.base = BB, this.compartments = IB, this.dynamicSlots = ZB, this.address = TB, this.staticValues = JB, this.facets = oB, this.statusTemplate = []; this.statusTemplate.length < ZB.length;) this.statusTemplate.push(0)
      }
      staticFacet(BB) {
        let IB = this.address[BB.id];
        return null == IB ? BB.default : this.staticValues[IB >> 1]
      }
      static resolve(BB, IB, ZB) {
        let TB = [],
          JB = Object.create(null),
          oB = new Map;
        for (let hB of function(BB, IB, ZB) {
            let TB = [
                [],
                [],
                [],
                [],
                []
              ],
              JB = new Map;

            function oB(BB, GB) {
              let vB = JB.get(BB);
              if (null != vB) {
                if (vB <= GB) return;
                let IB = TB[vB].indexOf(BB);
                IB > -1 && TB[vB].splice(IB, 1), BB instanceof vI && ZB.delete(BB.compartment)
              }
              if (JB.set(BB, GB), Array.isArray(BB))
                for (let IB of BB) oB(IB, GB);
              else if (BB instanceof vI) {
                if (ZB.has(BB.compartment)) throw new RangeError("Duplicate use of compartment in extensions");
                let TB = IB.get(BB.compartment) || BB.inner;
                ZB.set(BB.compartment, TB), oB(TB, GB)
              } else if (BB instanceof oI) oB(BB.inner, BB.prec);
              else if (BB instanceof VB) TB[GB].push(BB), BB.provides && oB(BB.provides, GB);
              else if (BB instanceof bB) TB[GB].push(BB), BB.facet.extensions && oB(BB.facet.extensions, II);
              else {
                let IB = BB.extension;
                if (!IB) throw new Error(`Unrecognized extension value in extension set (${BB}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
                oB(IB, GB)
              }
            }
            return oB(BB, II), TB.reduce(((BB, IB) => BB.concat(IB)))
          }(BB, IB, oB)) hB instanceof VB ? TB.push(hB) : (JB[hB.facet.id] || (JB[hB.facet.id] = [])).push(hB);
        let GB = Object.create(null),
          vB = [],
          kB = [];
        for (let hB of TB) GB[hB.id] = kB.length << 1, kB.push((BB => hB.slot(BB)));
        let cB = null === ZB || void 0 === ZB ? void 0 : ZB.config.facets;
        for (let hB in JB) {
          let BB = JB[hB],
            IB = BB[0].facet,
            TB = cB && cB[hB] || [];
          if (BB.every((BB => 0 == BB.type)))
            if (GB[IB.id] = vB.length << 1 | 1, tB(TB, BB)) vB.push(ZB.facet(IB));
            else {
              let TB = IB.combine(BB.map((BB => BB.value)));
              vB.push(ZB && IB.compare(TB, ZB.facet(IB)) ? ZB.facet(IB) : TB)
            }
          else {
            for (let IB of BB) 0 == IB.type ? (GB[IB.id] = vB.length << 1 | 1, vB.push(IB.value)) : (GB[IB.id] = kB.length << 1, kB.push((BB => IB.dynamicSlot(BB))));
            GB[IB.id] = kB.length << 1, kB.push((ZB => DB(ZB, IB, BB)))
          }
        }
        let nB = kB.map((BB => BB(GB)));
        return new kI(BB, oB, nB, GB, vB, JB)
      }
    }

    function cI(BB, IB) {
      if (1 & IB) return 2;
      let ZB = IB >> 1,
        TB = BB.status[ZB];
      if (4 == TB) throw new Error("Cyclic dependency between fields and/or facets");
      if (2 & TB) return TB;
      BB.status[ZB] = 4;
      let JB = BB.computeSlot(BB, BB.config.dynamicSlots[ZB]);
      return BB.status[ZB] = 2 | JB
    }

    function nI(BB, IB) {
      return 1 & IB ? BB.config.staticValues[IB >> 1] : BB.values[IB >> 1]
    }
    const hI = AB.define(),
      zI = AB.define({
        combine: BB => BB.some((BB => BB)),
        static: !0
      }),
      FI = AB.define({
        combine: BB => BB.length ? BB[0] : void 0,
        static: !0
      }),
      NI = AB.define(),
      gI = AB.define(),
      qI = AB.define(),
      yI = AB.define({
        combine: BB => !!BB.length && BB[0]
      });
    class UI {
      constructor(BB, IB) {
        this.type = BB, this.value = IB
      }
      static define() {
        return new WI
      }
    }
    class WI {
      of(BB) {
        return new UI(this, BB)
      }
    }
    class dI {
      constructor(BB) {
        this.map = BB
      }
      of(BB) {
        return new CI(this, BB)
      }
    }
    class CI {
      constructor(BB, IB) {
        this.type = BB, this.value = IB
      }
      map(BB) {
        let IB = this.type.map(this.value, BB);
        return void 0 === IB ? void 0 : IB == this.value ? this : new CI(this.type, IB)
      }
      is(BB) {
        return this.type == BB
      }
      static define() {
        return new dI((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).map || (BB => BB))
      }
      static mapEffects(BB, IB) {
        if (!BB.length) return BB;
        let ZB = [];
        for (let TB of BB) {
          let BB = TB.map(IB);
          BB && ZB.push(BB)
        }
        return ZB
      }
    }
    CI.reconfigure = CI.define(), CI.appendConfig = CI.define();
    class QI {
      constructor(BB, IB, ZB, TB, JB, oB) {
        this.startState = BB, this.changes = IB, this.selection = ZB, this.effects = TB, this.annotations = JB, this.scrollIntoView = oB, this._doc = null, this._state = null, ZB && fB(ZB, IB.newLength), JB.some((BB => BB.type == QI.time)) || (this.annotations = JB.concat(QI.time.of(Date.now())))
      }
      static create(BB, IB, ZB, TB, JB, oB) {
        return new QI(BB, IB, ZB, TB, JB, oB)
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
        for (let IB of this.annotations)
          if (IB.type == BB) return IB.value
      }
      get docChanged() {
        return !this.changes.empty
      }
      get reconfigured() {
        return this.startState.config != this.state.config
      }
      isUserEvent(BB) {
        let IB = this.annotation(QI.userEvent);
        return !(!IB || !(IB == BB || IB.length > BB.length && IB.slice(0, BB.length) == BB && "." == IB[BB.length]))
      }
    }

    function sI(BB, IB) {
      let ZB = [];
      for (let TB = 0, JB = 0;;) {
        let oB, GB;
        if (TB < BB.length && (JB == IB.length || IB[JB] >= BB[TB])) oB = BB[TB++], GB = BB[TB++];
        else {
          if (!(JB < IB.length)) return ZB;
          oB = IB[JB++], GB = IB[JB++]
        }!ZB.length || ZB[ZB.length - 1] < oB ? ZB.push(oB, GB) : ZB[ZB.length - 1] < GB && (ZB[ZB.length - 1] = GB)
      }
    }

    function wI(BB, IB, ZB) {
      var TB;
      let JB, oB, GB;
      return ZB ? (JB = IB.changes, oB = jB.empty(IB.changes.length), GB = BB.changes.compose(IB.changes)) : (JB = IB.changes.map(BB.changes), oB = BB.changes.mapDesc(IB.changes, !0), GB = BB.changes.compose(JB)), {
        changes: GB,
        selection: IB.selection ? IB.selection.map(oB) : null === (TB = BB.selection) || void 0 === TB ? void 0 : TB.map(JB),
        effects: CI.mapEffects(BB.effects, JB).concat(CI.mapEffects(IB.effects, oB)),
        annotations: BB.annotations.length ? BB.annotations.concat(IB.annotations) : IB.annotations,
        scrollIntoView: BB.scrollIntoView || IB.scrollIntoView
      }
    }

    function OI(BB, IB, ZB) {
      let TB = IB.selection,
        JB = pI(IB.annotations);
      return IB.userEvent && (JB = JB.concat(QI.userEvent.of(IB.userEvent))), {
        changes: IB.changes instanceof jB ? IB.changes : jB.of(IB.changes || [], ZB, BB.facet(FI)),
        selection: TB && (TB instanceof uB ? TB : uB.single(TB.anchor, TB.head)),
        effects: pI(IB.effects),
        annotations: JB,
        scrollIntoView: !!IB.scrollIntoView
      }
    }

    function YI(BB, IB, ZB) {
      let TB = OI(BB, IB.length ? IB[0] : {}, BB.doc.length);
      IB.length && !1 === IB[0].filter && (ZB = !1);
      for (let oB = 1; oB < IB.length; oB++) {
        !1 === IB[oB].filter && (ZB = !1);
        let JB = !!IB[oB].sequential;
        TB = wI(TB, OI(BB, IB[oB], JB ? TB.changes.newLength : BB.doc.length), JB)
      }
      let JB = QI.create(BB, TB.changes, TB.selection, TB.effects, TB.annotations, TB.scrollIntoView);
      return function(BB) {
        let IB = BB.startState,
          ZB = IB.facet(qI),
          TB = BB;
        for (let JB = ZB.length - 1; JB >= 0; JB--) {
          let oB = ZB[JB](BB);
          oB && Object.keys(oB).length && (TB = wI(TB, OI(IB, oB, BB.changes.newLength), !0))
        }
        return TB == BB ? BB : QI.create(IB, BB.changes, BB.selection, TB.effects, TB.annotations, TB.scrollIntoView)
      }(ZB ? function(BB) {
        let IB = BB.startState,
          ZB = !0;
        for (let JB of IB.facet(NI)) {
          let IB = JB(BB);
          if (!1 === IB) {
            ZB = !1;
            break
          }
          Array.isArray(IB) && (ZB = !0 === ZB ? IB : sI(ZB, IB))
        }
        if (!0 !== ZB) {
          let TB, JB;
          if (!1 === ZB) JB = BB.changes.invertedDesc, TB = jB.empty(IB.doc.length);
          else {
            let IB = BB.changes.filter(ZB);
            TB = IB.changes, JB = IB.filtered.mapDesc(IB.changes).invertedDesc
          }
          BB = QI.create(IB, TB, BB.selection && BB.selection.map(JB), CI.mapEffects(BB.effects, JB), BB.annotations, BB.scrollIntoView)
        }
        let TB = IB.facet(gI);
        for (let JB = TB.length - 1; JB >= 0; JB--) {
          let ZB = TB[JB](BB);
          BB = ZB instanceof QI ? ZB : Array.isArray(ZB) && 1 == ZB.length && ZB[0] instanceof QI ? ZB[0] : YI(IB, pI(ZB), !1)
        }
        return BB
      }(JB) : JB)
    }
    QI.time = UI.define(), QI.userEvent = UI.define(), QI.addToHistory = UI.define(), QI.remote = UI.define();
    const iI = [];

    function pI(BB) {
      return null == BB ? iI : Array.isArray(BB) ? BB : [BB]
    }
    var aI = function(BB) {
      return BB[BB.Word = 0] = "Word", BB[BB.Space = 1] = "Space", BB[BB.Other = 2] = "Other", BB
    }(aI || (aI = {}));
    const HI = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
    let MI;
    try {
      MI = new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u")
    } catch (ZZ) {}

    function jI(BB) {
      return IB => {
        if (!/\S/.test(IB)) return aI.Space;
        if (function(BB) {
            if (MI) return MI.test(BB);
            for (let IB = 0; IB < BB.length; IB++) {
              let ZB = BB[IB];
              if (/\w/.test(ZB) || ZB > "\x80" && (ZB.toUpperCase() != ZB.toLowerCase() || HI.test(ZB))) return !0
            }
            return !1
          }(IB)) return aI.Word;
        for (let ZB = 0; ZB < BB.length; ZB++)
          if (IB.indexOf(BB[ZB]) > -1) return aI.Word;
        return aI.Other
      }
    }
    class PI {
      constructor(BB, IB, ZB, TB, JB, oB) {
        this.config = BB, this.doc = IB, this.selection = ZB, this.values = TB, this.status = BB.statusTemplate.slice(), this.computeSlot = JB, oB && (oB._state = this);
        for (let GB = 0; GB < this.config.dynamicSlots.length; GB++) cI(this, GB << 1);
        this.computeSlot = null
      }
      field(BB) {
        let IB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          ZB = this.config.address[BB.id];
        if (null != ZB) return cI(this, ZB), nI(this, ZB);
        if (IB) throw new RangeError("Field is not present in this state")
      }
      update() {
        for (var BB = arguments.length, IB = new Array(BB), ZB = 0; ZB < BB; ZB++) IB[ZB] = arguments[ZB];
        return YI(this, IB, !0)
      }
      applyTransaction(BB) {
        let IB, ZB = this.config,
          {
            base: TB,
            compartments: JB
          } = ZB;
        for (let GB of BB.effects) GB.is(GI.reconfigure) ? (ZB && (JB = new Map, ZB.compartments.forEach(((BB, IB) => JB.set(IB, BB))), ZB = null), JB.set(GB.value.compartment, GB.value.extension)) : GB.is(CI.reconfigure) ? (ZB = null, TB = GB.value) : GB.is(CI.appendConfig) && (ZB = null, TB = pI(TB).concat(GB.value));
        if (ZB) IB = BB.startState.values.slice();
        else {
          ZB = kI.resolve(TB, JB, this), IB = new PI(ZB, this.doc, this.selection, ZB.dynamicSlots.map((() => null)), ((BB, IB) => IB.reconfigure(BB, this)), null).values
        }
        let oB = BB.startState.facet(zI) ? BB.newSelection : BB.newSelection.asSingle();
        new PI(ZB, BB.newDoc, oB, IB, ((IB, ZB) => ZB.update(IB, BB)), BB)
      }
      replaceSelection(BB) {
        return "string" == typeof BB && (BB = this.toText(BB)), this.changeByRange((IB => ({
          changes: {
            from: IB.from,
            to: IB.to,
            insert: BB
          },
          range: uB.cursor(IB.from + BB.length)
        })))
      }
      changeByRange(BB) {
        let IB = this.selection,
          ZB = BB(IB.vq[0]),
          TB = this.changes(ZB.changes),
          JB = [ZB.range],
          oB = pI(ZB.effects);
        for (let GB = 1; GB < IB.vq.length; GB++) {
          let ZB = BB(IB.vq[GB]),
            vB = this.changes(ZB.changes),
            kB = vB.map(TB);
          for (let BB = 0; BB < GB; BB++) JB[BB] = JB[BB].map(kB);
          let cB = TB.mapDesc(vB, !0);
          JB.push(ZB.range.map(cB)), TB = TB.compose(kB), oB = CI.mapEffects(oB, kB).concat(CI.mapEffects(pI(ZB.effects), cB))
        }
        return {
          changes: TB,
          selection: uB.create(JB, IB.mainIndex),
          effects: oB
        }
      }
      changes() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return BB instanceof jB ? BB : jB.of(BB, this.doc.length, this.facet(PI.lineSeparator))
      }
      toText(BB) {
        return gB.of(BB.split(this.facet(PI.lineSeparator) || aB))
      }
      sliceDoc() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.doc.length;
        return this.doc.sliceString(BB, IB, this.lineBreak)
      }
      facet(BB) {
        let IB = this.config.address[BB.id];
        return null == IB ? BB.default : (cI(this, IB), nI(this, IB))
      }
      toJSON(BB) {
        let IB = {
          doc: this.sliceDoc(),
          selection: this.selection.toJSON()
        };
        if (BB)
          for (let ZB in BB) {
            let TB = BB[ZB];
            TB instanceof VB && null != this.config.address[TB.id] && (IB[ZB] = TB.spec.toJSON(this.field(BB[ZB]), this))
          }
        return IB
      }
      static fromJSON(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          ZB = arguments.length > 2 ? arguments[2] : void 0;
        if (!BB || "string" != typeof BB.doc) throw new RangeError("Invalid JSON representation for EditorState");
        let TB = [];
        if (ZB)
          for (let JB in ZB)
            if (Object.prototype.hasOwnProperty.call(BB, JB)) {
              let IB = ZB[JB],
                oB = BB[JB];
              TB.push(IB.init((BB => IB.spec.fromJSON(oB, BB))))
            } return PI.create({
          doc: BB.doc,
          selection: uB.fromJSON(BB.selection),
          extensions: IB.extensions ? TB.concat([IB.extensions]) : TB
        })
      }
      static create() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          IB = kI.resolve(BB.extensions || [], new Map),
          ZB = BB.doc instanceof gB ? BB.doc : gB.of((BB.doc || "").split(IB.staticFacet(PI.lineSeparator) || aB)),
          TB = BB.selection ? BB.selection instanceof uB ? BB.selection : uB.single(BB.selection.anchor, BB.selection.head) : uB.single(0);
        return fB(TB, ZB.length), IB.staticFacet(zI) || (TB = TB.asSingle()), new PI(IB, ZB, TB, IB.dynamicSlots.map((() => null)), ((BB, IB) => IB.create(BB)), null)
      }
      get tabSize() {
        return this.facet(PI.tabSize)
      }
      get lineBreak() {
        return this.facet(PI.lineSeparator) || "\n"
      }
      get readOnly() {
        return this.facet(yI)
      }
      phrase(BB) {
        for (var IB = arguments.length, ZB = new Array(IB > 1 ? IB - 1 : 0), TB = 1; TB < IB; TB++) ZB[TB - 1] = arguments[TB];
        for (let JB of this.facet(PI.phrases))
          if (Object.prototype.hasOwnProperty.call(JB, BB)) {
            BB = JB[BB];
            break
          } return ZB.length && (BB = BB.replace(/\$(\$|\d*)/g, ((BB, IB) => {
          if ("$" == IB) return "$";
          let TB = +(IB || 1);
          return !TB || TB > ZB.length ? BB : ZB[TB - 1]
        }))), BB
      }
      languageDataAt(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          TB = [];
        for (let JB of this.facet(hI))
          for (let oB of JB(this, IB, ZB)) Object.prototype.hasOwnProperty.call(oB, BB) && TB.push(oB[BB]);
        return TB
      }
      charCategorizer(BB) {
        let IB = this.languageDataAt("wordChars", BB);
        return jI(IB.length ? IB[0] : "")
      }
      wordAt(BB) {
        let {
          text: IB,
          from: ZB,
          length: TB
        } = this.doc.lineAt(BB), JB = this.charCategorizer(BB), oB = BB - ZB, GB = BB - ZB;
        for (; oB > 0;) {
          let BB = OB(IB, oB, !1);
          if (JB(IB.slice(BB, oB)) != aI.Word) break;
          oB = BB
        }
        for (; GB < TB;) {
          let BB = OB(IB, GB);
          if (JB(IB.slice(GB, BB)) != aI.Word) break;
          GB = BB
        }
        return oB == GB ? null : uB.range(oB + ZB, GB + ZB)
      }
    }

    function RI(BB, IB) {
      let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        TB = {};
      for (let JB of BB)
        for (let BB of Object.keys(JB)) {
          let IB = JB[BB],
            oB = TB[BB];
          if (void 0 === oB) TB[BB] = IB;
          else if (oB === IB || void 0 === IB);
          else {
            if (!Object.hasOwnProperty.call(ZB, BB)) throw new Error("Config merge conflict for field " + BB);
            TB[BB] = ZB[BB](oB, IB)
          }
        }
      for (let JB in IB) void 0 === TB[JB] && (TB[JB] = IB[JB]);
      return TB
    }
    PI.allowMultipleSelections = zI, PI.tabSize = AB.define({
      combine: BB => BB.length ? BB[0] : 4
    }), PI.lineSeparator = FI, PI.readOnly = yI, PI.phrases = AB.define({
      compare(BB, IB) {
        let ZB = Object.keys(BB),
          TB = Object.keys(IB);
        return ZB.length == TB.length && ZB.every((ZB => BB[ZB] == IB[ZB]))
      }
    }), PI.languageData = hI, PI.changeFilter = NI, PI.transactionFilter = gI, PI.transactionExtender = qI, GI.reconfigure = CI.define();
    class rI {
      eq(BB) {
        return this == BB
      }
      range(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BB;
        return XI.create(BB, IB, this)
      }
    }

    function mI(BB, IB) {
      return BB == IB || BB.constructor == IB.constructor && BB.eq(IB)
    }
    rI.prototype.startSide = rI.prototype.endSide = 0, rI.prototype.point = !1, rI.prototype.mapMode = HB.TrackDel;
    class XI {
      constructor(BB, IB, ZB) {
        this.from = BB, this.to = IB, this.value = ZB
      }
      static create(BB, IB, ZB) {
        return new XI(BB, IB, ZB)
      }
    }

    function LI(BB, IB) {
      return BB.from - IB.from || BB.value.startSide - IB.value.startSide
    }
    class eI {
      constructor(BB, IB, ZB, TB) {
        this.from = BB, this.to = IB, this.value = ZB, this.mTB = TB
      }
      get length() {
        return this.to[this.to.length - 1]
      }
      findIndex(BB, IB, ZB) {
        let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          JB = ZB ? this.to : this.from;
        for (let oB = TB, GB = JB.length;;) {
          if (oB == GB) return oB;
          let TB = oB + GB >> 1,
            vB = JB[TB] - BB || (ZB ? this.value[TB].endSide : this.value[TB].startSide) - IB;
          if (TB == oB) return vB >= 0 ? oB : GB;
          vB >= 0 ? GB = TB : oB = TB + 1
        }
      }
      between(BB, IB, ZB, TB) {
        for (let JB = this.findIndex(IB, -1e9, !0), oB = this.findIndex(ZB, 1e9, !1, JB); JB < oB; JB++)
          if (!1 === TB(this.from[JB] + BB, this.to[JB] + BB, this.value[JB])) return !1
      }
      map(BB, IB) {
        let ZB = [],
          TB = [],
          JB = [],
          oB = -1,
          GB = -1;
        for (let vB = 0; vB < this.value.length; vB++) {
          let kB, cB, nB = this.value[vB],
            hB = this.from[vB] + BB,
            zB = this.to[vB] + BB;
          if (hB == zB) {
            let BB = IB.mapPos(hB, nB.startSide, nB.mapMode);
            if (null == BB) continue;
            if (kB = cB = BB, nB.startSide != nB.endSide && (cB = IB.mapPos(hB, nB.endSide), cB < kB)) continue
          } else if (kB = IB.mapPos(hB, nB.startSide), cB = IB.mapPos(zB, nB.endSide), kB > cB || kB == cB && nB.startSide > 0 && nB.endSide <= 0) continue;
          (cB - kB || nB.endSide - nB.startSide) < 0 || (oB < 0 && (oB = kB), nB.point && (GB = Math.max(GB, cB - kB)), ZB.push(nB), TB.push(kB - oB), JB.push(cB - oB))
        }
        return {
          mapped: ZB.length ? new eI(TB, JB, ZB, GB) : null,
          pos: oB
        }
      }
    }
    class uI {
      constructor(BB, IB, ZB, TB) {
        this.chunkPos = BB, this.chunk = IB, this.nextLayer = ZB, this.mTB = TB
      }
      static create(BB, IB, ZB, TB) {
        return new uI(BB, IB, ZB, TB)
      }
      get length() {
        let BB = this.chunk.length - 1;
        return BB < 0 ? 0 : Math.max(this.chunkEnd(BB), this.nextLayer.length)
      }
      get size() {
        if (this.hN) return 0;
        let BB = this.nextLayer.size;
        for (let IB of this.chunk) BB += IB.value.length;
        return BB
      }
      chunkEnd(BB) {
        return this.chunkPos[BB] + this.chunk[BB].length
      }
      update(BB) {
        let {
          add: IB = [],
          sort: ZB = !1,
          filterFrom: TB = 0,
          filterTo: JB = this.length
        } = BB, oB = BB.filter;
        if (0 == IB.length && !oB) return this;
        if (ZB && (IB = IB.slice().sort(LI)), this.hN) return IB.length ? uI.of(IB) : this;
        let GB = new AI(this, null, -1).goto(0),
          vB = 0,
          kB = [],
          cB = new fI;
        for (; GB.value || vB < IB.length;)
          if (vB < IB.length && (GB.from - IB[vB].from || GB.startSide - IB[vB].value.startSide) >= 0) {
            let BB = IB[vB++];
            cB.addInner(BB.from, BB.to, BB.value) || kB.push(BB)
          } else 1 == GB.rangeIndex && GB.chunkIndex < this.chunk.length && (vB == IB.length || this.chunkEnd(GB.chunkIndex) < IB[vB].from) && (!oB || TB > this.chunkEnd(GB.chunkIndex) || JB < this.chunkPos[GB.chunkIndex]) && cB.addChunk(this.chunkPos[GB.chunkIndex], this.chunk[GB.chunkIndex]) ? GB.nextChunk() : ((!oB || TB > GB.to || JB < GB.from || oB(GB.from, GB.to, GB.value)) && (cB.addInner(GB.from, GB.to, GB.value) || kB.push(XI.create(GB.from, GB.to, GB.value))), GB.next());
        return cB.finishInner(this.nextLayer.hN && !kB.length ? uI.empty : this.nextLayer.update({
          add: kB,
          filter: oB,
          filterFrom: TB,
          filterTo: JB
        }))
      }
      map(BB) {
        if (BB.empty || this.hN) return this;
        let IB = [],
          ZB = [],
          TB = -1;
        for (let oB = 0; oB < this.chunk.length; oB++) {
          let JB = this.chunkPos[oB],
            GB = this.chunk[oB],
            vB = BB.touchesRange(JB, JB + GB.length);
          if (!1 === vB) TB = Math.max(TB, GB.mTB), IB.push(GB), ZB.push(BB.mapPos(JB));
          else if (!0 === vB) {
            let {
              mapped: oB,
              pos: vB
            } = GB.map(JB, BB);
            oB && (TB = Math.max(TB, oB.mTB), IB.push(oB), ZB.push(vB))
          }
        }
        let JB = this.nextLayer.map(BB);
        return 0 == IB.length ? JB : new uI(ZB, IB, JB || uI.empty, TB)
      }
      between(BB, IB, ZB) {
        if (!this.hN) {
          for (let TB = 0; TB < this.chunk.length; TB++) {
            let JB = this.chunkPos[TB],
              oB = this.chunk[TB];
            if (IB >= JB && BB <= JB + oB.length && !1 === oB.between(JB, BB - JB, IB - JB, ZB)) return
          }
          this.nextLayer.between(BB, IB, ZB)
        }
      }
      iter() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return tI.from([this]).goto(BB)
      }
      get hN() {
        return this.nextLayer == this
      }
      static iter(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return tI.from(BB).goto(IB)
      }
      static compare(BB, IB, ZB, TB) {
        let JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1,
          oB = BB.filter((BB => BB.mTB > 0 || !BB.hN && BB.mTB >= JB)),
          GB = IB.filter((BB => BB.mTB > 0 || !BB.hN && BB.mTB >= JB)),
          vB = lI(oB, GB, ZB),
          kB = new xI(oB, vB, JB),
          cB = new xI(GB, vB, JB);
        ZB.iterGaps(((BB, IB, ZB) => EI(kB, BB, cB, IB, ZB, TB))), ZB.empty && 0 == ZB.length && EI(kB, 0, cB, 0, 0, TB)
      }
      static eq(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          TB = arguments.length > 3 ? arguments[3] : void 0;
        null == TB && (TB = 999999999);
        let JB = BB.filter((BB => !BB.hN && IB.indexOf(BB) < 0)),
          oB = IB.filter((IB => !IB.hN && BB.indexOf(IB) < 0));
        if (JB.length != oB.length) return !1;
        if (!JB.length) return !0;
        let GB = lI(JB, oB),
          vB = new xI(JB, GB, 0).goto(ZB),
          kB = new xI(oB, GB, 0).goto(ZB);
        for (;;) {
          if (vB.to != kB.to || !DI(vB.active, kB.active) || vB.point && (!kB.point || !mI(vB.point, kB.point))) return !1;
          if (vB.to > TB) return !0;
          vB.next(), kB.next()
        }
      }
      static spans(BB, IB, ZB, TB) {
        let JB = new xI(BB, null, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1).goto(IB),
          oB = IB,
          GB = JB.openStart;
        for (;;) {
          let BB = Math.min(JB.to, ZB);
          if (JB.point) {
            let ZB = JB.activeForPoint(JB.to),
              vB = JB.pointFrom < IB ? ZB.length + 1 : JB.point.startSide < 0 ? ZB.length : Math.min(ZB.length, GB);
            TB.point(oB, BB, JB.point, ZB, vB, JB.pointRank), GB = Math.min(JB.openEnd(BB), ZB.length)
          } else BB > oB && (TB.span(oB, BB, JB.active, GB), GB = JB.openEnd(BB));
          if (JB.to > ZB) return GB + (JB.point && JB.to > ZB ? 1 : 0);
          oB = JB.to, JB.next()
        }
      }
      static of (BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZB = new fI;
        for (let TB of BB instanceof XI ? [BB] : IB ? function(BB) {
            if (BB.length > 1)
              for (let IB = BB[0], ZB = 1; ZB < BB.length; ZB++) {
                let TB = BB[ZB];
                if (LI(IB, TB) > 0) return BB.slice().sort(LI);
                IB = TB
              }
            return BB
          }(BB) : BB) ZB.add(TB.from, TB.to, TB.value);
        return ZB.finish()
      }
      static join(BB) {
        if (!BB.length) return uI.empty;
        let IB = BB[BB.length - 1];
        for (let ZB = BB.length - 2; ZB >= 0; ZB--)
          for (let TB = BB[ZB]; TB != uI.empty; TB = TB.nextLayer) IB = new uI(TB.chunkPos, TB.chunk, IB, Math.max(TB.mTB, IB.mTB));
        return IB
      }
    }
    uI.empty = new uI([], [], null, -1), uI.empty.nextLayer = uI.empty;
    class fI {
      finishChunk(BB) {
        this.chunks.push(new eI(this.from, this.to, this.value, this.mTB)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.mTB), this.mTB = -1, BB && (this.from = [], this.to = [], this.value = [])
      }
      constructor() {
        this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.mTB = -1, this.setMaxPoint = -1, this.nextLayer = null
      }
      add(BB, IB, ZB) {
        this.addInner(BB, IB, ZB) || (this.nextLayer || (this.nextLayer = new fI)).add(BB, IB, ZB)
      }
      addInner(BB, IB, ZB) {
        let TB = BB - this.lastTo || ZB.startSide - this.last.endSide;
        if (TB <= 0 && (BB - this.lastFrom || ZB.startSide - this.last.startSide) < 0) throw new Error("Ranges must be added sorted by `from` position and `startSide`");
        return !(TB < 0) && (250 == this.from.length && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = BB), this.from.push(BB - this.chunkStart), this.to.push(IB - this.chunkStart), this.last = ZB, this.lastFrom = BB, this.lastTo = IB, this.value.push(ZB), ZB.point && (this.mTB = Math.max(this.mTB, IB - BB)), !0)
      }
      addChunk(BB, IB) {
        if ((BB - this.lastTo || IB.value[0].startSide - this.last.endSide) < 0) return !1;
        this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, IB.mTB), this.chunks.push(IB), this.chunkPos.push(BB);
        let ZB = IB.value.length - 1;
        return this.last = IB.value[ZB], this.lastFrom = IB.from[ZB] + BB, this.lastTo = IB.to[ZB] + BB, !0
      }
      finish() {
        return this.finishInner(uI.empty)
      }
      finishInner(BB) {
        if (this.from.length && this.finishChunk(!1), 0 == this.chunks.length) return BB;
        let IB = uI.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(BB) : BB, this.setMaxPoint);
        return this.from = null, IB
      }
    }

    function lI(BB, IB, ZB) {
      let TB = new Map;
      for (let oB of BB)
        for (let BB = 0; BB < oB.chunk.length; BB++) oB.chunk[BB].mTB <= 0 && TB.set(oB.chunk[BB], oB.chunkPos[BB]);
      let JB = new Set;
      for (let oB of IB)
        for (let BB = 0; BB < oB.chunk.length; BB++) {
          let IB = TB.get(oB.chunk[BB]);
          null == IB || (ZB ? ZB.mapPos(IB) : IB) != oB.chunkPos[BB] || (null === ZB || void 0 === ZB ? void 0 : ZB.touchesRange(IB, IB + oB.chunk[BB].length)) || JB.add(oB.chunk[BB])
        }
      return JB
    }
    class AI {
      constructor(BB, IB, ZB) {
        let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.layer = BB, this.skip = IB, this.XTB = ZB, this.rank = TB
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      get endSide() {
        return this.value ? this.value.endSide : 0
      }
      goto(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(BB, IB, !1), this
      }
      gotoInner(BB, IB, ZB) {
        for (; this.chunkIndex < this.layer.chunk.length;) {
          let IB = this.layer.chunk[this.chunkIndex];
          if (!(this.skip && this.skip.has(IB) || this.layer.chunkEnd(this.chunkIndex) < BB || IB.mTB < this.XTB)) break;
          this.chunkIndex++, ZB = !1
        }
        if (this.chunkIndex < this.layer.chunk.length) {
          let TB = this.layer.chunk[this.chunkIndex].findIndex(BB - this.layer.chunkPos[this.chunkIndex], IB, !0);
          (!ZB || this.rangeIndex < TB) && this.setRangeIndex(TB)
        }
        this.next()
      }
      forward(BB, IB) {
        (this.to - BB || this.endSide - IB) < 0 && this.gotoInner(BB, IB, !0)
      }
      next() {
        for (;;) {
          if (this.chunkIndex == this.layer.chunk.length) {
            this.from = this.to = 1e9, this.value = null;
            break
          } {
            let BB = this.layer.chunkPos[this.chunkIndex],
              IB = this.layer.chunk[this.chunkIndex],
              ZB = BB + IB.from[this.rangeIndex];
            if (this.from = ZB, this.to = BB + IB.to[this.rangeIndex], this.value = IB.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.XTB < 0 || this.value.point && this.to - this.from >= this.XTB) break
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
    class tI {
      constructor(BB) {
        this.heap = BB
      }
      static from(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          TB = [];
        for (let JB = 0; JB < BB.length; JB++)
          for (let oB = BB[JB]; !oB.hN; oB = oB.nextLayer) oB.mTB >= ZB && TB.push(new AI(oB, IB, ZB, JB));
        return 1 == TB.length ? TB[0] : new tI(TB)
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      goto(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        for (let ZB of this.heap) ZB.goto(BB, IB);
        for (let ZB = this.heap.length >> 1; ZB >= 0; ZB--) bI(this.heap, ZB);
        return this.next(), this
      }
      forward(BB, IB) {
        for (let ZB of this.heap) ZB.forward(BB, IB);
        for (let ZB = this.heap.length >> 1; ZB >= 0; ZB--) bI(this.heap, ZB);
        (this.to - BB || this.value.endSide - IB) < 0 && this.next()
      }
      next() {
        if (0 == this.heap.length) this.from = this.to = 1e9, this.value = null, this.rank = -1;
        else {
          let BB = this.heap[0];
          this.from = BB.from, this.to = BB.to, this.value = BB.value, this.rank = BB.rank, BB.value && BB.next(), bI(this.heap, 0)
        }
      }
    }

    function bI(BB, IB) {
      for (let ZB = BB[IB];;) {
        let TB = 1 + (IB << 1);
        if (TB >= BB.length) break;
        let JB = BB[TB];
        if (TB + 1 < BB.length && JB.compare(BB[TB + 1]) >= 0 && (JB = BB[TB + 1], TB++), ZB.compare(JB) < 0) break;
        BB[TB] = ZB, BB[IB] = JB, IB = TB
      }
    }
    class xI {
      constructor(BB, IB, ZB) {
        this.XTB = ZB, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = tI.from(BB, IB, ZB)
      }
      goto(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.cursor.goto(BB, IB), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = BB, this.endSide = IB, this.openStart = -1, this.next(), this
      }
      forward(BB, IB) {
        for (; this.minActive > -1 && (this.activeTo[this.minActive] - BB || this.active[this.minActive].endSide - IB) < 0;) this.removeActive(this.minActive);
        this.cursor.forward(BB, IB)
      }
      removeActive(BB) {
        KI(this.active, BB), KI(this.activeTo, BB), KI(this.activeRank, BB), this.minActive = SI(this.active, this.activeTo)
      }
      addActive(BB) {
        let IB = 0,
          {
            value: ZB,
            to: TB,
            rank: JB
          } = this.cursor;
        for (; IB < this.activeRank.length && (JB - this.activeRank[IB] || TB - this.activeTo[IB]) > 0;) IB++;
        VI(this.active, IB, ZB), VI(this.activeTo, IB, TB), VI(this.activeRank, IB, JB), BB && VI(BB, IB, this.cursor.from), this.minActive = SI(this.active, this.activeTo)
      }
      next() {
        let BB = this.to,
          IB = this.point;
        this.point = null;
        let ZB = this.openStart < 0 ? [] : null;
        for (;;) {
          let TB = this.minActive;
          if (TB > -1 && (this.activeTo[TB] - this.cursor.from || this.active[TB].endSide - this.cursor.startSide) < 0) {
            if (this.activeTo[TB] > BB) {
              this.to = this.activeTo[TB], this.endSide = this.active[TB].endSide;
              break
            }
            this.removeActive(TB), ZB && KI(ZB, TB)
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
                if (!(IB && this.cursor.to == this.to && this.cursor.from < this.cursor.to)) {
                  this.point = BB, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = BB.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
                  break
                }
                this.cursor.next()
              } else this.addActive(ZB), this.cursor.next()
            }
          }
        }
        if (ZB) {
          this.openStart = 0;
          for (let IB = ZB.length - 1; IB >= 0 && ZB[IB] < BB; IB--) this.openStart++
        }
      }
      activeForPoint(BB) {
        if (!this.active.length) return this.active;
        let IB = [];
        for (let ZB = this.active.length - 1; ZB >= 0 && !(this.activeRank[ZB] < this.pointRank); ZB--)(this.activeTo[ZB] > BB || this.activeTo[ZB] == BB && this.active[ZB].endSide >= this.point.endSide) && IB.push(this.active[ZB]);
        return IB.reverse()
      }
      openEnd(BB) {
        let IB = 0;
        for (let ZB = this.activeTo.length - 1; ZB >= 0 && this.activeTo[ZB] > BB; ZB--) IB++;
        return IB
      }
    }

    function EI(BB, IB, ZB, TB, JB, oB) {
      BB.goto(IB), ZB.goto(TB);
      let GB = TB + JB,
        vB = TB,
        kB = TB - IB,
        cB = !!oB.boundChange;
      for (let nB = !1;;) {
        let IB = BB.to + kB - ZB.to,
          TB = IB || BB.endSide - ZB.endSide,
          JB = TB < 0 ? BB.to + kB : ZB.to,
          hB = Math.min(JB, GB);
        if (BB.point || ZB.point ? (BB.point && ZB.point && mI(BB.point, ZB.point) && DI(BB.activeForPoint(BB.to), ZB.activeForPoint(ZB.to)) || oB.comparePoint(vB, hB, BB.point, ZB.point), nB = !1) : (nB && oB.boundChange(vB), hB > vB && !DI(BB.active, ZB.active) && oB.compareRange(vB, hB, BB.active, ZB.active), cB && hB < GB && (IB || BB.openEnd(JB) != ZB.openEnd(JB)) && (nB = !0)), JB > GB) break;
        vB = JB, TB <= 0 && BB.next(), TB >= 0 && ZB.next()
      }
    }

    function DI(BB, IB) {
      if (BB.length != IB.length) return !1;
      for (let ZB = 0; ZB < BB.length; ZB++)
        if (BB[ZB] != IB[ZB] && !mI(BB[ZB], IB[ZB])) return !1;
      return !0
    }

    function KI(BB, IB) {
      for (let ZB = IB, TB = BB.length - 1; ZB < TB; ZB++) BB[ZB] = BB[ZB + 1];
      BB.pop()
    }

    function VI(BB, IB, ZB) {
      for (let TB = BB.length - 1; TB >= IB; TB--) BB[TB + 1] = BB[TB];
      BB[IB] = ZB
    }

    function SI(BB, IB) {
      let ZB = -1,
        TB = 1e9;
      for (let JB = 0; JB < IB.length; JB++)(IB[JB] - TB || BB[JB].endSide - BB[ZB].endSide) < 0 && (ZB = JB, TB = IB[JB]);
      return ZB
    }

    function BZ(BB, IB) {
      let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : BB.length,
        TB = 0;
      for (let JB = 0; JB < ZB && JB < BB.length;) 9 == BB.charCodeAt(JB) ? (TB += IB - TB % IB, JB++) : (TB++, JB = OB(BB, JB));
      return TB
    }

    function IZ(BB, IB, ZB, TB) {
      for (let JB = 0, oB = 0;;) {
        if (oB >= IB) return JB;
        if (JB == BB.length) break;
        oB += 9 == BB.charCodeAt(JB) ? ZB - oB % ZB : 1, JB = OB(BB, JB)
      }
      return !0 === TB ? -1 : BB.length
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);