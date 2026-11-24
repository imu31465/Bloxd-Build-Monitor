export const id = 299;
export const ids = [299];
export const modules = {
  41408: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => Gj,
      d: () => FB,
      ChangeSet: () => YB,
      e: () => Hj,
      i: () => WB,
      l: () => Vj,
      p: () => wB,
      t: () => DB,
      u: () => nj,
      z: () => Wj,
      y: () => ej,
      B: () => Xj,
      D: () => tj,
      F: () => RB,
      G: () => mB,
      I: () => Sj,
      L: () => qB,
      M: () => oB,
      O: () => hj,
      Q: () => Bz,
      R: () => iB,
      V: () => jz,
      W: () => fB
    });
    let QB = [],
      nB = [];

    function dB(BB) {
      if (BB < 768) return !1;
      for (let jB = 0, zB = QB.length;;) {
        let dB = jB + zB >> 1;
        if (BB < QB[dB]) zB = dB;
        else {
          if (!(BB >= nB[dB])) return !0;
          jB = dB + 1
        }
        if (jB == zB) return !1
      }
    }

    function IB(BB) {
      return BB >= 127462 && BB <= 127487
    }(() => {
      let BB = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((BB => BB ? parseInt(BB, 36) : 1));
      for (let jB = 0, zB = 0; jB < BB.length; jB++)(jB % 2 ? nB : QB).push(zB += BB[jB])
    })();
    const NB = 8205;

    function uB(BB, jB) {
      return (!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2] ? UB : aB)(BB, jB, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function UB(BB, jB, zB) {
      if (jB == BB.length) return jB;
      jB && rB(BB.charCodeAt(jB)) && sB(BB.charCodeAt(jB - 1)) && jB--;
      let QB = pB(BB, jB);
      for (jB += JB(QB); jB < BB.length;) {
        let nB = pB(BB, jB);
        if (QB == NB || nB == NB || zB && dB(nB)) jB += JB(nB), QB = nB;
        else {
          if (!IB(nB)) break;
          {
            let zB = 0,
              QB = jB - 2;
            for (; QB >= 0 && IB(pB(BB, QB));) zB++, QB -= 2;
            if (zB % 2 == 0) break;
            jB += 2
          }
        }
      }
      return jB
    }

    function aB(BB, jB, zB) {
      for (; jB > 0;) {
        let QB = UB(BB, jB - 2, zB);
        if (QB < jB) return QB;
        jB--
      }
      return 0
    }

    function pB(BB, jB) {
      let zB = BB.charCodeAt(jB);
      if (!sB(zB) || jB + 1 == BB.length) return zB;
      let QB = BB.charCodeAt(jB + 1);
      return rB(QB) ? QB - 56320 + (zB - 55296 << 10) + 65536 : zB
    }

    function rB(BB) {
      return BB >= 56320 && BB < 57344
    }

    function sB(BB) {
      return BB >= 55296 && BB < 56320
    }

    function JB(BB) {
      return BB < 65536 ? 1 : 2
    }
    class mB {
      lineAt(BB) {
        if (BB < 0 || BB > this.length) throw new RangeError(`Invalid position ${BB} in document of length ${this.length}`);
        return this.lineInner(BB, !1, 1, 0)
      }
      line(BB) {
        if (BB < 1 || BB > this.lines) throw new RangeError(`Invalid line number ${BB} in ${this.lines}-line document`);
        return this.lineInner(BB, !0, 1, 0)
      }
      replace(BB, jB, zB) {
        [BB, jB] = EB(this, BB, jB);
        let QB = [];
        return this.decompose(0, BB, QB, 2), zB.length && zB.decompose(0, zB.length, QB, 3), this.decompose(jB, this.length, QB, 1), kB.from(QB, this.length - (jB - BB) + zB.length)
      }
      append(BB) {
        return this.replace(this.length, this.length, BB)
      }
      slice(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        [BB, jB] = EB(this, BB, jB);
        let zB = [];
        return this.decompose(BB, jB, zB, 0), kB.from(zB, jB - BB)
      }
      eq(BB) {
        if (BB == this) return !0;
        if (BB.length != this.length || BB.lines != this.lines) return !1;
        let jB = this.scanIdentical(BB, 1),
          zB = this.length - this.scanIdentical(BB, -1),
          QB = new gB(this),
          nB = new gB(BB);
        for (let dB = jB, IB = jB;;) {
          if (QB.next(dB), nB.next(dB), dB = 0, QB.lineBreak != nB.lineBreak || QB.done != nB.done || QB.value != nB.value) return !1;
          if (IB += QB.value.length, QB.done || IB >= zB) return !0
        }
      }
      iter() {
        return new gB(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1)
      }
      iterRange(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        return new tB(this, BB, jB)
      }
      iterLines(BB, jB) {
        let zB;
        if (null == BB) zB = this.iter();
        else {
          null == jB && (jB = this.lines + 1);
          let QB = this.line(BB).from;
          zB = this.iterRange(QB, Math.max(QB, jB == this.lines + 1 ? this.length : jB <= 1 ? 0 : this.line(jB - 1).to))
        }
        return new SB(zB)
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
        return 1 != BB.length || BB[0] ? BB.length <= 32 ? new yB(BB) : kB.from(yB.split(BB, [])) : mB.empty
      }
    }
    class yB extends mB {
      constructor(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(BB) {
          let jB = -1;
          for (let zB of BB) jB += zB.length + 1;
          return jB
        }(BB);
        super(), this.text = BB, this.length = jB
      }
      get lines() {
        return this.text.length
      }
      get children() {
        return null
      }
      lineInner(BB, jB, zB, QB) {
        for (let nB = 0;; nB++) {
          let dB = this.text[nB],
            IB = QB + dB.length;
          if ((jB ? zB : IB) >= BB) return new MB(QB, IB, zB, dB);
          QB = IB + 1, zB++
        }
      }
      decompose(BB, jB, zB, QB) {
        let nB = BB <= 0 && jB >= this.length ? this : new yB(LB(this.text, BB, jB), Math.min(jB, this.length) - Math.max(0, BB));
        if (1 & QB) {
          let BB = zB.pop(),
            jB = GB(nB.text, BB.text.slice(), 0, nB.length);
          if (jB.length <= 32) zB.push(new yB(jB, BB.length + nB.length));
          else {
            let BB = jB.length >> 1;
            zB.push(new yB(jB.slice(0, BB)), new yB(jB.slice(BB)))
          }
        } else zB.push(nB)
      }
      replace(BB, jB, zB) {
        if (!(zB instanceof yB)) return super.replace(BB, jB, zB);
        [BB, jB] = EB(this, BB, jB);
        let QB = GB(this.text, GB(zB.text, LB(this.text, 0, BB)), jB),
          nB = this.length + zB.length - (jB - BB);
        return QB.length <= 32 ? new yB(QB, nB) : kB.from(yB.split(QB, []), nB)
      }
      sliceString(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [BB, jB] = EB(this, BB, jB);
        let QB = "";
        for (let nB = 0, dB = 0; nB <= jB && dB < this.text.length; dB++) {
          let IB = this.text[dB],
            NB = nB + IB.length;
          nB > BB && dB && (QB += zB), BB < NB && jB > nB && (QB += IB.slice(Math.max(0, BB - nB), jB - nB)), nB = NB + 1
        }
        return QB
      }
      flatten(BB) {
        for (let jB of this.text) BB.push(jB)
      }
      scanIdentical() {
        return 0
      }
      static split(BB, jB) {
        let zB = [],
          QB = -1;
        for (let nB of BB) zB.push(nB), QB += nB.length + 1, 32 == zB.length && (jB.push(new yB(zB, QB)), zB = [], QB = -1);
        return QB > -1 && jB.push(new yB(zB, QB)), jB
      }
    }
    class kB extends mB {
      constructor(BB, jB) {
        super(), this.children = BB, this.length = jB, this.lines = 0;
        for (let zB of BB) this.lines += zB.lines
      }
      lineInner(BB, jB, zB, QB) {
        for (let nB = 0;; nB++) {
          let dB = this.children[nB],
            IB = QB + dB.length,
            NB = zB + dB.lines - 1;
          if ((jB ? NB : IB) >= BB) return dB.lineInner(BB, jB, zB, QB);
          QB = IB + 1, zB = NB + 1
        }
      }
      decompose(BB, jB, zB, QB) {
        for (let nB = 0, dB = 0; dB <= jB && nB < this.children.length; nB++) {
          let IB = this.children[nB],
            NB = dB + IB.length;
          if (BB <= NB && jB >= dB) {
            let nB = QB & ((dB <= BB ? 1 : 0) | (NB >= jB ? 2 : 0));
            dB >= BB && NB <= jB && !nB ? zB.push(IB) : IB.decompose(BB - dB, jB - dB, zB, nB)
          }
          dB = NB + 1
        }
      }
      replace(BB, jB, zB) {
        if ([BB, jB] = EB(this, BB, jB), zB.lines < this.lines)
          for (let QB = 0, nB = 0; QB < this.children.length; QB++) {
            let dB = this.children[QB],
              IB = nB + dB.length;
            if (BB >= nB && jB <= IB) {
              let NB = dB.replace(BB - nB, jB - nB, zB),
                uB = this.lines - dB.lines + NB.lines;
              if (NB.lines < uB >> 4 && NB.lines > uB >> 6) {
                let nB = this.children.slice();
                return nB[QB] = NB, new kB(nB, this.length - (jB - BB) + zB.length)
              }
              return super.replace(nB, IB, NB)
            }
            nB = IB + 1
          }
        return super.replace(BB, jB, zB)
      }
      sliceString(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [BB, jB] = EB(this, BB, jB);
        let QB = "";
        for (let nB = 0, dB = 0; nB < this.children.length && dB <= jB; nB++) {
          let IB = this.children[nB],
            NB = dB + IB.length;
          dB > BB && nB && (QB += zB), BB < NB && jB > dB && (QB += IB.sliceString(BB - dB, jB - dB, zB)), dB = NB + 1
        }
        return QB
      }
      flatten(BB) {
        for (let jB of this.children) jB.flatten(BB)
      }
      scanIdentical(BB, jB) {
        if (!(BB instanceof kB)) return 0;
        let zB = 0,
          [QB, nB, dB, IB] = jB > 0 ? [0, 0, this.children.length, BB.children.length] : [this.children.length - 1, BB.children.length - 1, -1, -1];
        for (;; QB += jB, nB += jB) {
          if (QB == dB || nB == IB) return zB;
          let NB = this.children[QB],
            uB = BB.children[nB];
          if (NB != uB) return zB + NB.scanIdentical(uB, jB);
          zB += NB.length + 1
        }
      }
      static from(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BB.reduce(((BB, jB) => BB + jB.length + 1), -1),
          zB = 0;
        for (let rB of BB) zB += rB.lines;
        if (zB < 32) {
          let zB = [];
          for (let jB of BB) jB.flatten(zB);
          return new yB(zB, jB)
        }
        let QB = Math.max(32, zB >> 5),
          nB = QB << 1,
          dB = QB >> 1,
          IB = [],
          NB = 0,
          uB = -1,
          UB = [];

        function aB(BB) {
          let jB;
          if (BB.lines > nB && BB instanceof kB)
            for (let zB of BB.children) aB(zB);
          else BB.lines > dB && (NB > dB || !NB) ? (pB(), IB.push(BB)) : BB instanceof yB && NB && (jB = UB[UB.length - 1]) instanceof yB && BB.lines + jB.lines <= 32 ? (NB += BB.lines, uB += BB.length + 1, UB[UB.length - 1] = new yB(jB.text.concat(BB.text), jB.length + 1 + BB.length)) : (NB + BB.lines > QB && pB(), NB += BB.lines, uB += BB.length + 1, UB.push(BB))
        }

        function pB() {
          0 != NB && (IB.push(1 == UB.length ? UB[0] : kB.from(UB, uB)), uB = -1, NB = UB.length = 0)
        }
        for (let rB of BB) aB(rB);
        return pB(), 1 == IB.length ? IB[0] : new kB(IB, jB)
      }
    }

    function GB(BB, jB) {
      let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e9;
      for (let nB = 0, dB = 0, IB = !0; dB < BB.length && nB <= QB; dB++) {
        let NB = BB[dB],
          uB = nB + NB.length;
        uB >= zB && (uB > QB && (NB = NB.slice(0, QB - nB)), nB < zB && (NB = NB.slice(zB - nB)), IB ? (jB[jB.length - 1] += NB, IB = !1) : jB.push(NB)), nB = uB + 1
      }
      return jB
    }

    function LB(BB, jB, zB) {
      return GB(BB, [""], jB, zB)
    }
    mB.empty = new yB([""], 0);
    class gB {
      constructor(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.dir = jB, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [BB], this.offsets = [jB > 0 ? 1 : (BB instanceof yB ? BB.text.length : BB.children.length) << 1]
      }
      nextInner(BB, jB) {
        for (this.done = this.lineBreak = !1;;) {
          let zB = this.nodes.length - 1,
            QB = this.nodes[zB],
            nB = this.offsets[zB],
            dB = nB >> 1,
            IB = QB instanceof yB ? QB.text.length : QB.children.length;
          if (dB == (jB > 0 ? IB : 0)) {
            if (0 == zB) return this.done = !0, this.value = "", this;
            jB > 0 && this.offsets[zB - 1]++, this.nodes.pop(), this.offsets.pop()
          } else if ((1 & nB) == (jB > 0 ? 0 : 1)) {
            if (this.offsets[zB] += jB, 0 == BB) return this.lineBreak = !0, this.value = "\n", this;
            BB--
          } else if (QB instanceof yB) {
            let nB = QB.text[dB + (jB < 0 ? -1 : 0)];
            if (this.offsets[zB] += jB, nB.length > Math.max(0, BB)) return this.value = 0 == BB ? nB : jB > 0 ? nB.slice(BB) : nB.slice(0, nB.length - BB), this;
            BB -= nB.length
          } else {
            let nB = QB.children[dB + (jB < 0 ? -1 : 0)];
            BB > nB.length ? (BB -= nB.length, this.offsets[zB] += jB) : (jB < 0 && this.offsets[zB]--, this.nodes.push(nB), this.offsets.push(jB > 0 ? 1 : (nB instanceof yB ? nB.text.length : nB.children.length) << 1))
          }
        }
      }
      next() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return BB < 0 && (this.nextInner(-BB, -this.dir), BB = this.value.length), this.nextInner(BB, this.dir)
      }
    }
    class tB {
      constructor(BB, jB, zB) {
        this.value = "", this.done = !1, this.cursor = new gB(BB, jB > zB ? -1 : 1), this.pos = jB > zB ? BB.length : 0, this.from = Math.min(jB, zB), this.to = Math.max(jB, zB)
      }
      nextInner(BB, jB) {
        if (jB < 0 ? this.pos <= this.from : this.pos >= this.to) return this.value = "", this.done = !0, this;
        BB += Math.max(0, jB < 0 ? this.pos - this.to : this.from - this.pos);
        let zB = jB < 0 ? this.pos - this.from : this.to - this.pos;
        BB > zB && (BB = zB), zB -= BB;
        let {
          value: QB
        } = this.cursor.next(BB);
        return this.pos += (QB.length + BB) * jB, this.value = QB.length <= zB ? QB : jB < 0 ? QB.slice(QB.length - zB) : QB.slice(0, zB), this.done = !this.value, this
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
            done: jB,
            lineBreak: zB,
            value: QB
          } = this.inner.next(BB);
        return jB && this.afterBreak ? (this.value = "", this.afterBreak = !1) : jB ? (this.done = !0, this.value = "") : zB ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = QB, this.afterBreak = !1), this
      }
      get lineBreak() {
        return !1
      }
    }
    "undefined" != typeof Symbol && (mB.prototype[Symbol.iterator] = function() {
      return this.iter()
    }, gB.prototype[Symbol.iterator] = tB.prototype[Symbol.iterator] = SB.prototype[Symbol.iterator] = function() {
      return this
    });
    class MB {
      constructor(BB, jB, zB, QB) {
        this.from = BB, this.to = jB, this.number = zB, this.text = QB
      }
      get length() {
        return this.to - this.from
      }
    }

    function EB(BB, jB, zB) {
      return [jB = Math.max(0, Math.min(BB.length, jB)), Math.max(jB, Math.min(BB.length, zB))]
    }

    function iB(BB, jB) {
      return uB(BB, jB, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function qB(BB, jB) {
      let zB = BB.charCodeAt(jB);
      if (!((QB = zB) >= 55296 && QB < 56320) || jB + 1 == BB.length) return zB;
      var QB;
      let nB = BB.charCodeAt(jB + 1);
      return function(BB) {
        return BB >= 56320 && BB < 57344
      }(nB) ? nB - 56320 + (zB - 55296 << 10) + 65536 : zB
    }

    function fB(BB) {
      return BB <= 65535 ? String.fromCharCode(BB) : (BB -= 65536, String.fromCharCode(55296 + (BB >> 10), 56320 + (1023 & BB)))
    }

    function oB(BB) {
      return BB < 65536 ? 1 : 2
    }
    const HB = /\r\n?|\n/;
    var DB = function(BB) {
      return BB[BB.Simple = 0] = "Simple", BB[BB.TrackDel = 1] = "TrackDel", BB[BB.TrackBefore = 2] = "TrackBefore", BB[BB.TrackAfter = 3] = "TrackAfter", BB
    }(DB || (DB = {}));
    class FB {
      constructor(BB) {
        this.sections = BB
      }
      get length() {
        let BB = 0;
        for (let jB = 0; jB < this.sections.length; jB += 2) BB += this.sections[jB];
        return BB
      }
      get newLength() {
        let BB = 0;
        for (let jB = 0; jB < this.sections.length; jB += 2) {
          let zB = this.sections[jB + 1];
          BB += zB < 0 ? this.sections[jB] : zB
        }
        return BB
      }
      get empty() {
        return 0 == this.sections.length || 2 == this.sections.length && this.sections[1] < 0
      }
      iterGaps(BB) {
        for (let jB = 0, zB = 0, QB = 0; jB < this.sections.length;) {
          let nB = this.sections[jB++],
            dB = this.sections[jB++];
          dB < 0 ? (BB(zB, QB, nB), QB += nB) : QB += dB, zB += nB
        }
      }
      iterChangedRanges(BB) {
        XB(this, BB, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get invertedDesc() {
        let BB = [];
        for (let jB = 0; jB < this.sections.length;) {
          let zB = this.sections[jB++],
            QB = this.sections[jB++];
          QB < 0 ? BB.push(zB, QB) : BB.push(QB, zB)
        }
        return new FB(BB)
      }
      composeDesc(BB) {
        return this.empty ? BB : BB.empty ? this : AB(this, BB)
      }
      mapDesc(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return BB.empty ? this : ZB(this, BB, jB)
      }
      mapPos(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : DB.Simple,
          QB = 0,
          nB = 0;
        for (let dB = 0; dB < this.sections.length;) {
          let IB = this.sections[dB++],
            NB = this.sections[dB++],
            uB = QB + IB;
          if (NB < 0) {
            if (uB > BB) return nB + (BB - QB);
            nB += IB
          } else {
            if (zB != DB.Simple && uB >= BB && (zB == DB.TrackDel && QB < BB && uB > BB || zB == DB.TrackBefore && QB < BB || zB == DB.TrackAfter && uB > BB)) return null;
            if (uB > BB || uB == BB && jB < 0 && !IB) return BB == QB || jB < 0 ? nB : nB + NB;
            nB += NB
          }
          QB = uB
        }
        if (BB > QB) throw new RangeError(`Position ${BB} is out of range for changeset of length ${QB}`);
        return nB
      }
      touchesRange(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BB;
        for (let zB = 0, QB = 0; zB < this.sections.length && QB <= jB;) {
          let nB = QB + this.sections[zB++];
          if (this.sections[zB++] >= 0 && QB <= jB && nB >= BB) return !(QB < BB && nB > jB) || "cover";
          QB = nB
        }
        return !1
      }
      toString() {
        let BB = "";
        for (let jB = 0; jB < this.sections.length;) {
          let zB = this.sections[jB++],
            QB = this.sections[jB++];
          BB += (BB ? " " : "") + zB + (QB >= 0 ? ":" + QB : "")
        }
        return BB
      }
      toJSON() {
        return this.sections
      }
      static fromJSON(BB) {
        if (!Array.isArray(BB) || BB.length % 2 || BB.some((BB => "number" != typeof BB))) throw new RangeError("Invalid JSON representation of ChangeDesc");
        return new FB(BB)
      }
      static create(BB) {
        return new FB(BB)
      }
    }
    class YB extends FB {
      constructor(BB, jB) {
        super(BB), this.inserted = jB
      }
      apply(BB) {
        if (this.length != BB.length) throw new RangeError("Applying change set to a document with the wrong length");
        return XB(this, ((jB, zB, QB, nB, dB) => BB = BB.replace(QB, QB + (zB - jB), dB)), !1), BB
      }
      mapDesc(BB) {
        return ZB(this, BB, arguments.length > 1 && void 0 !== arguments[1] && arguments[1], !0)
      }
      invert(BB) {
        let jB = this.sections.slice(),
          zB = [];
        for (let QB = 0, nB = 0; QB < jB.length; QB += 2) {
          let dB = jB[QB],
            IB = jB[QB + 1];
          if (IB >= 0) {
            jB[QB] = IB, jB[QB + 1] = dB;
            let NB = QB >> 1;
            for (; zB.length < NB;) zB.push(mB.empty);
            zB.push(dB ? BB.slice(nB, nB + dB) : mB.empty)
          }
          nB += dB
        }
        return new YB(jB, zB)
      }
      compose(BB) {
        return this.empty ? BB : BB.empty ? this : AB(this, BB, !0)
      }
      map(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return BB.empty ? this : ZB(this, BB, jB, !0)
      }
      iterChanges(BB) {
        XB(this, BB, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get desc() {
        return FB.create(this.sections)
      }
      filter(BB) {
        let jB = [],
          zB = [],
          QB = [],
          nB = new TB(this);
        BB: for (let dB = 0, IB = 0;;) {
          let NB = dB == BB.length ? 1e9 : BB[dB++];
          for (; IB < NB || IB == NB && 0 == nB.len;) {
            if (nB.done) break BB;
            let BB = Math.min(nB.len, NB - IB);
            VB(QB, BB, -1);
            let dB = -1 == nB.ins ? -1 : 0 == nB.off ? nB.ins : 0;
            VB(jB, BB, dB), dB > 0 && hB(zB, jB, nB.text), nB.forward(BB), IB += BB
          }
          let uB = BB[dB++];
          for (; IB < uB;) {
            if (nB.done) break BB;
            let BB = Math.min(nB.len, uB - IB);
            VB(jB, BB, -1), VB(QB, BB, -1 == nB.ins ? -1 : 0 == nB.off ? nB.ins : 0), nB.forward(BB), IB += BB
          }
        }
        return {
          changes: new YB(jB, zB),
          filtered: FB.create(QB)
        }
      }
      toJSON() {
        let BB = [];
        for (let jB = 0; jB < this.sections.length; jB += 2) {
          let zB = this.sections[jB],
            QB = this.sections[jB + 1];
          QB < 0 ? BB.push(zB) : 0 == QB ? BB.push([zB]) : BB.push([zB].concat(this.inserted[jB >> 1].toJSON()))
        }
        return BB
      }
      static of (BB, jB, zB) {
        let QB = [],
          nB = [],
          dB = 0,
          IB = null;

        function NB() {
          if (!(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && !QB.length) return;
          dB < jB && VB(QB, jB - dB, -1);
          let BB = new YB(QB, nB);
          IB = IB ? IB.compose(BB.map(IB)) : BB, QB = [], nB = [], dB = 0
        }
        return function BB(uB) {
          if (Array.isArray(uB))
            for (let jB of uB) BB(jB);
          else if (uB instanceof YB) {
            if (uB.length != jB) throw new RangeError(`Mismatched change set length (got ${uB.length}, expected ${jB})`);
            NB(), IB = IB ? IB.compose(uB.map(IB)) : uB
          } else {
            let {
              from: BB,
              to: IB = BB,
              insert: UB
            } = uB;
            if (BB > IB || BB < 0 || IB > jB) throw new RangeError(`Invalid change range ${BB} to ${IB} (in doc of length ${jB})`);
            let aB = UB ? "string" == typeof UB ? mB.of(UB.split(zB || HB)) : UB : mB.empty,
              pB = aB.length;
            if (BB == IB && 0 == pB) return;
            BB < dB && NB(), BB > dB && VB(QB, BB - dB, -1), VB(QB, IB - BB, pB), hB(nB, QB, aB), dB = IB
          }
        }(BB), NB(!IB), IB
      }
      static empty(BB) {
        return new YB(BB ? [BB, -1] : [], [])
      }
      static fromJSON(BB) {
        if (!Array.isArray(BB)) throw new RangeError("Invalid JSON representation of ChangeSet");
        let jB = [],
          zB = [];
        for (let QB = 0; QB < BB.length; QB++) {
          let nB = BB[QB];
          if ("number" == typeof nB) jB.push(nB, -1);
          else {
            if (!Array.isArray(nB) || "number" != typeof nB[0] || nB.some(((BB, jB) => jB && "string" != typeof BB))) throw new RangeError("Invalid JSON representation of ChangeSet");
            if (1 == nB.length) jB.push(nB[0], 0);
            else {
              for (; zB.length < QB;) zB.push(mB.empty);
              zB[QB] = mB.of(nB.slice(1)), jB.push(nB[0], zB[QB].length)
            }
          }
        }
        return new YB(jB, zB)
      }
      static createSet(BB, jB) {
        return new YB(BB, jB)
      }
    }

    function VB(BB, jB, zB) {
      let QB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (0 == jB && zB <= 0) return;
      let nB = BB.length - 2;
      nB >= 0 && zB <= 0 && zB == BB[nB + 1] ? BB[nB] += jB : nB >= 0 && 0 == jB && 0 == BB[nB] ? BB[nB + 1] += zB : QB ? (BB[nB] += jB, BB[nB + 1] += zB) : BB.push(jB, zB)
    }

    function hB(BB, jB, zB) {
      if (0 == zB.length) return;
      let QB = jB.length - 2 >> 1;
      if (QB < BB.length) BB[BB.length - 1] = BB[BB.length - 1].append(zB);
      else {
        for (; BB.length < QB;) BB.push(mB.empty);
        BB.push(zB)
      }
    }

    function XB(BB, jB, zB) {
      let QB = BB.inserted;
      for (let nB = 0, dB = 0, IB = 0; IB < BB.sections.length;) {
        let NB = BB.sections[IB++],
          uB = BB.sections[IB++];
        if (uB < 0) nB += NB, dB += NB;
        else {
          let UB = nB,
            aB = dB,
            pB = mB.empty;
          for (; UB += NB, aB += uB, uB && QB && (pB = pB.append(QB[IB - 2 >> 1])), !(zB || IB == BB.sections.length || BB.sections[IB + 1] < 0);) NB = BB.sections[IB++], uB = BB.sections[IB++];
          jB(nB, UB, dB, aB, pB), nB = UB, dB = aB
        }
      }
    }

    function ZB(BB, jB, zB) {
      let QB = [],
        nB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3] ? [] : null,
        dB = new TB(BB),
        IB = new TB(jB),
        NB = 0;
      for (let uB = -1;;) {
        if (++NB > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - likely malformed ChangeSet");
        if (dB.done && IB.len || IB.done && dB.len) throw new Error("Mismatched change set lengths");
        if (-1 == dB.ins && -1 == IB.ins) {
          let BB = Math.min(dB.len, IB.len);
          VB(QB, BB, -1), dB.forward(BB), IB.forward(BB)
        } else if (IB.ins >= 0 && (dB.ins < 0 || uB == dB.i || 0 == dB.off && (IB.len < dB.len || IB.len == dB.len && !zB))) {
          let BB = IB.len;
          for (VB(QB, IB.ins, -1); BB;) {
            if (++NB > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-b");
            let jB = Math.min(dB.len, BB);
            dB.ins >= 0 && uB < dB.i && dB.len <= jB && (VB(QB, 0, dB.ins), nB && hB(nB, QB, dB.text), uB = dB.i), dB.forward(jB), BB -= jB
          }
          IB.next()
        } else {
          if (!(dB.ins >= 0)) {
            if (dB.done && IB.done) return nB ? YB.createSet(QB, nB) : FB.create(QB);
            throw new Error("Mismatched change set lengths")
          } {
            let BB = 0,
              jB = dB.len;
            for (; jB;) {
              if (++NB > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-a");
              if (-1 == IB.ins) {
                let zB = Math.min(jB, IB.len);
                BB += zB, jB -= zB, IB.forward(zB)
              } else {
                if (!(0 == IB.ins && IB.len < jB)) break;
                jB -= IB.len, IB.next()
              }
            }
            VB(QB, BB, uB < dB.i ? dB.ins : 0), nB && uB < dB.i && hB(nB, QB, dB.text), uB = dB.i, dB.forward(dB.len - jB)
          }
        }
      }
    }

    function AB(BB, jB) {
      let zB = [],
        QB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? [] : null,
        nB = new TB(BB),
        dB = new TB(jB),
        IB = 0;
      for (let NB = !1;;) {
        if (++IB > 2e6) throw new Error("BLOXD CODEMIRROR: composeSets exceeded max iterations - likely malformed ChangeSet");
        if (nB.done && dB.done) return QB ? YB.createSet(zB, QB) : FB.create(zB);
        if (0 == nB.ins) VB(zB, nB.len, 0, NB), nB.next();
        else if (0 != dB.len || dB.done) {
          if (nB.done || dB.done) throw new Error("Mismatched change set lengths");
          {
            let BB = Math.min(nB.len2, dB.len),
              jB = zB.length;
            if (-1 == nB.ins) {
              let jB = -1 == dB.ins ? -1 : dB.off ? 0 : dB.ins;
              VB(zB, BB, jB, NB), QB && jB && hB(QB, zB, dB.text)
            } else - 1 == dB.ins ? (VB(zB, nB.off ? 0 : nB.len, BB, NB), QB && hB(QB, zB, nB.textBit(BB))) : (VB(zB, nB.off ? 0 : nB.len, dB.off ? 0 : dB.ins, NB), QB && !dB.off && hB(QB, zB, dB.text));
            NB = (nB.ins > BB || dB.ins >= 0 && dB.len > BB) && (NB || zB.length > jB), nB.forward2(BB), dB.forward(BB)
          }
        } else VB(zB, 0, dB.ins, NB), QB && hB(QB, zB, dB.text), dB.next()
      }
    }
    class TB {
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
        } = this.set, jB = this.i - 2 >> 1;
        return jB >= BB.length ? mB.empty : BB[jB]
      }
      textBit(BB) {
        let {
          inserted: jB
        } = this.set, zB = this.i - 2 >> 1;
        return zB >= jB.length && !BB ? mB.empty : jB[zB].slice(this.off, null == BB ? void 0 : this.off + BB)
      }
      forward(BB) {
        BB == this.len ? this.next() : (this.len -= BB, this.off += BB)
      }
      forward2(BB) {
        -1 == this.ins ? this.forward(BB) : BB == this.ins ? this.next() : (this.ins -= BB, this.off += BB)
      }
    }
    class PB {
      constructor(BB, jB, zB) {
        this.from = BB, this.to = jB, this.flags = zB
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
        let jB, zB, QB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return this.empty ? jB = zB = BB.mapPos(this.from, QB) : (jB = BB.mapPos(this.from, 1), zB = BB.mapPos(this.to, -1)), jB == this.from && zB == this.to ? this : new PB(jB, zB, this.flags)
      }
      extend(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BB,
          zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (BB <= this.anchor && jB >= this.anchor) return WB.range(BB, jB, void 0, void 0, zB);
        let QB = Math.abs(BB - this.anchor) > Math.abs(jB - this.anchor) ? BB : jB;
        return WB.range(this.anchor, QB, void 0, void 0, zB)
      }
      eq(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.anchor == BB.anchor && this.head == BB.head && this.goalColumn == BB.goalColumn && (!jB || !this.empty || this.assoc == BB.assoc)
      }
      toJSON() {
        return {
          anchor: this.anchor,
          head: this.head
        }
      }
      static fromJSON(BB) {
        if (!BB || "number" != typeof BB.anchor || "number" != typeof BB.head) throw new RangeError("Invalid JSON representation for SelectionRange");
        return WB.range(BB.anchor, BB.head)
      }
      static create(BB, jB, zB) {
        return new PB(BB, jB, zB)
      }
    }
    class WB {
      constructor(BB, jB) {
        this.gy = BB, this.mainIndex = jB
      }
      map(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return BB.empty ? this : WB.create(this.gy.map((zB => zB.map(BB, jB))), this.mainIndex)
      }
      eq(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.gy.length != BB.gy.length || this.mainIndex != BB.mainIndex) return !1;
        for (let zB = 0; zB < this.gy.length; zB++)
          if (!this.gy[zB].eq(BB.gy[zB], jB)) return !1;
        return !0
      }
      get main() {
        return this.gy[this.mainIndex]
      }
      asSingle() {
        return 1 == this.gy.length ? this : new WB([this.main], 0)
      }
      addRange(BB) {
        let jB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return WB.create([BB].concat(this.gy), jB ? 0 : this.mainIndex + 1)
      }
      replaceRange(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.mainIndex,
          zB = this.gy.slice();
        return zB[jB] = BB, WB.create(zB, this.mainIndex)
      }
      toJSON() {
        return {
          gy: this.gy.map((BB => BB.toJSON())),
          main: this.mainIndex
        }
      }
      static fromJSON(BB) {
        if (!BB || !Array.isArray(BB.gy) || "number" != typeof BB.main || BB.main >= BB.gy.length) throw new RangeError("Invalid JSON representation for EditorSelection");
        return new WB(BB.gy.map((BB => PB.fromJSON(BB))), BB.main)
      }
      static single(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BB;
        return new WB([WB.range(BB, jB)], 0)
      }
      static create(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (0 == BB.length) throw new RangeError("A selection needs at least one range");
        for (let zB = 0, QB = 0; QB < BB.length; QB++) {
          let nB = BB[QB];
          if (nB.empty ? nB.from <= zB : nB.from < zB) return WB.normalized(BB.slice(), jB);
          zB = nB.to
        }
        return new WB(BB, jB)
      }
      static cursor(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          zB = arguments.length > 2 ? arguments[2] : void 0,
          QB = arguments.length > 3 ? arguments[3] : void 0;
        return PB.create(BB, BB, (0 == jB ? 0 : jB < 0 ? 8 : 16) | (null == zB ? 7 : Math.min(6, zB)) | (null !== QB && void 0 !== QB ? QB : 16777215) << 6)
      }
      static range(BB, jB, zB, QB, nB) {
        let dB = (null !== zB && void 0 !== zB ? zB : 16777215) << 6 | (null == QB ? 7 : Math.min(6, QB));
        return nB || BB == jB || (nB = jB < BB ? 1 : -1), jB < BB ? PB.create(jB, BB, 48 | dB) : PB.create(BB, jB, (nB ? nB < 0 ? 8 : 16 : 0) | dB)
      }
      static normalized(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          zB = BB[jB];
        BB.sort(((BB, jB) => BB.from - jB.from)), jB = BB.indexOf(zB);
        for (let QB = 1; QB < BB.length; QB++) {
          let zB = BB[QB],
            nB = BB[QB - 1];
          if (zB.empty ? zB.from <= nB.to : zB.from < nB.to) {
            let dB = nB.from,
              IB = Math.max(zB.to, nB.to);
            QB <= jB && jB--, BB.splice(--QB, 2, zB.anchor > zB.head ? WB.range(IB, dB) : WB.range(dB, IB))
          }
        }
        return new WB(BB, jB)
      }
    }

    function eB(BB, jB) {
      for (let zB of BB.gy)
        if (zB.to > jB) throw new RangeError("Selection points outside of document")
    }
    let lB = 0;
    class wB {
      constructor(BB, jB, zB, QB, nB) {
        this.combine = BB, this.compareInput = jB, this.compare = zB, this.isStatic = QB, this.id = lB++, this.default = BB([]), this.extensions = "function" == typeof nB ? nB(this) : nB
      }
      get reader() {
        return this
      }
      static define() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return new wB(BB.combine || (BB => BB), BB.compareInput || ((BB, jB) => BB === jB), BB.compare || (BB.combine ? (BB, jB) => BB === jB : xB), !!BB.static, BB.enables)
      }
      of(BB) {
        return new KB([], this, 0, BB)
      }
      compute(BB, jB) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new KB(BB, this, 1, jB)
      }
      computeN(BB, jB) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new KB(BB, this, 2, jB)
      }
      from(BB, jB) {
        return jB || (jB = BB => BB), this.compute([BB], (zB => jB(zB.field(BB))))
      }
    }

    function xB(BB, jB) {
      return BB == jB || BB.length == jB.length && BB.every(((BB, zB) => BB === jB[zB]))
    }
    class KB {
      constructor(BB, jB, zB, QB) {
        this.dependencies = BB, this.facet = jB, this.type = zB, this.value = QB, this.id = lB++
      }
      dynamicSlot(BB) {
        var jB;
        let zB = this.value,
          QB = this.facet.compareInput,
          nB = this.id,
          dB = BB[nB] >> 1,
          IB = 2 == this.type,
          NB = !1,
          uB = !1,
          UB = [];
        for (let aB of this.dependencies) "doc" == aB ? NB = !0 : "selection" == aB ? uB = !0 : 0 == (1 & (null !== (jB = BB[aB.id]) && void 0 !== jB ? jB : 1)) && UB.push(BB[aB.id]);
        return {
          create: BB => (BB.values[dB] = zB(BB), 1),
          update(BB, jB) {
            if (NB && jB.docChanged || uB && (jB.docChanged || jB.selection) || cB(BB, UB)) {
              let jB = zB(BB);
              if (IB ? !CB(jB, BB.values[dB], QB) : !QB(jB, BB.values[dB])) return BB.values[dB] = jB, 1
            }
            return 0
          },
          reconfigure: (BB, jB) => {
            let NB, uB = jB.config.address[nB];
            if (null != uB) {
              let nB = aj(jB, uB);
              if (this.dependencies.every((zB => zB instanceof wB ? jB.facet(zB) === BB.facet(zB) : !(zB instanceof RB) || jB.field(zB, !1) == BB.field(zB, !1))) || (IB ? CB(NB = zB(BB), nB, QB) : QB(NB = zB(BB), nB))) return BB.values[dB] = nB, 0
            } else NB = zB(BB);
            return BB.values[dB] = NB, 1
          }
        }
      }
    }

    function CB(BB, jB, zB) {
      if (BB.length != jB.length) return !1;
      for (let QB = 0; QB < BB.length; QB++)
        if (!zB(BB[QB], jB[QB])) return !1;
      return !0
    }

    function cB(BB, jB) {
      let zB = !1;
      for (let QB of jB) 1 & Uj(BB, QB) && (zB = !0);
      return zB
    }

    function bB(BB, jB, zB) {
      let QB = zB.map((jB => BB[jB.id])),
        nB = zB.map((BB => BB.type)),
        dB = QB.filter((BB => !(1 & BB))),
        IB = BB[jB.id] >> 1;

      function NB(BB) {
        let zB = [];
        for (let jB = 0; jB < QB.length; jB++) {
          let dB = aj(BB, QB[jB]);
          if (2 == nB[jB])
            for (let BB of dB) zB.push(BB);
          else zB.push(dB)
        }
        return jB.combine(zB)
      }
      return {
        create(BB) {
          for (let jB of QB) Uj(BB, jB);
          return BB.values[IB] = NB(BB), 1
        },
        update(BB, zB) {
          if (!cB(BB, dB)) return 0;
          let QB = NB(BB);
          return jB.compare(QB, BB.values[IB]) ? 0 : (BB.values[IB] = QB, 1)
        },
        reconfigure(BB, nB) {
          let dB = cB(BB, QB),
            uB = nB.config.facets[jB.id],
            UB = nB.facet(jB);
          if (uB && !dB && xB(zB, uB)) return BB.values[IB] = UB, 0;
          let aB = NB(BB);
          return jB.compare(aB, UB) ? (BB.values[IB] = UB, 0) : (BB.values[IB] = aB, 1)
        }
      }
    }
    const vB = wB.define({
      static: !0
    });
    class RB {
      constructor(BB, jB, zB, QB, nB) {
        this.id = BB, this.createF = jB, this.updateF = zB, this.compareF = QB, this.spec = nB, this.provides = void 0
      }
      static define(BB) {
        let jB = new RB(lB++, BB.create, BB.update, BB.compare || ((BB, jB) => BB === jB), BB);
        return BB.provide && (jB.provides = BB.provide(jB)), jB
      }
      create(BB) {
        let jB = BB.facet(vB).find((BB => BB.field == this));
        return ((null === jB || void 0 === jB ? void 0 : jB.create) || this.createF)(BB)
      }
      slot(BB) {
        let jB = BB[this.id] >> 1;
        return {
          create: BB => (BB.values[jB] = this.create(BB), 1),
          update: (BB, zB) => {
            let QB = BB.values[jB],
              nB = this.updateF(QB, zB);
            return this.compareF(QB, nB) ? 0 : (BB.values[jB] = nB, 1)
          },
          reconfigure: (BB, zB) => {
            let QB, nB = BB.facet(vB),
              dB = zB.facet(vB);
            return (QB = nB.find((BB => BB.field == this))) && QB != dB.find((BB => BB.field == this)) ? (BB.values[jB] = QB.create(BB), 1) : null != zB.config.address[this.id] ? (BB.values[jB] = zB.field(this), 0) : (BB.values[jB] = this.create(BB), 1)
          }
        }
      }
      init(BB) {
        return [this, vB.of({
          field: this,
          create: BB
        })]
      }
      get extension() {
        return this
      }
    }
    const OB = 4,
      Bj = 3,
      jj = 2,
      zj = 1;

    function Qj(BB) {
      return jB => new dj(jB, BB)
    }
    const nj = {
      highest: Qj(0),
      high: Qj(zj),
      default: Qj(jj),
      low: Qj(Bj),
      lowest: Qj(OB)
    };
    class dj {
      constructor(BB, jB) {
        this.inner = BB, this.prec = jB
      }
    }
    class Ij {
      of(BB) {
        return new Nj(this, BB)
      }
      reconfigure(BB) {
        return Ij.reconfigure.of({
          compartment: this,
          extension: BB
        })
      }
      get(BB) {
        return BB.config.compartments.get(this)
      }
    }
    class Nj {
      constructor(BB, jB) {
        this.compartment = BB, this.inner = jB
      }
    }
    class uj {
      constructor(BB, jB, zB, QB, nB, dB) {
        for (this.base = BB, this.compartments = jB, this.dynamicSlots = zB, this.address = QB, this.staticValues = nB, this.facets = dB, this.statusTemplate = []; this.statusTemplate.length < zB.length;) this.statusTemplate.push(0)
      }
      staticFacet(BB) {
        let jB = this.address[BB.id];
        return null == jB ? BB.default : this.staticValues[jB >> 1]
      }
      static resolve(BB, jB, zB) {
        let QB = [],
          nB = Object.create(null),
          dB = new Map;
        for (let pB of function(BB, jB, zB) {
            let QB = [
                [],
                [],
                [],
                [],
                []
              ],
              nB = new Map;

            function dB(BB, IB) {
              let NB = nB.get(BB);
              if (null != NB) {
                if (NB <= IB) return;
                let jB = QB[NB].indexOf(BB);
                jB > -1 && QB[NB].splice(jB, 1), BB instanceof Nj && zB.delete(BB.compartment)
              }
              if (nB.set(BB, IB), Array.isArray(BB))
                for (let jB of BB) dB(jB, IB);
              else if (BB instanceof Nj) {
                if (zB.has(BB.compartment)) throw new RangeError("Duplicate use of compartment in extensions");
                let QB = jB.get(BB.compartment) || BB.inner;
                zB.set(BB.compartment, QB), dB(QB, IB)
              } else if (BB instanceof dj) dB(BB.inner, BB.prec);
              else if (BB instanceof RB) QB[IB].push(BB), BB.provides && dB(BB.provides, IB);
              else if (BB instanceof KB) QB[IB].push(BB), BB.facet.extensions && dB(BB.facet.extensions, jj);
              else {
                let jB = BB.extension;
                if (!jB) throw new Error(`Unrecognized extension value in extension set (${BB}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
                dB(jB, IB)
              }
            }
            return dB(BB, jj), QB.reduce(((BB, jB) => BB.concat(jB)))
          }(BB, jB, dB)) pB instanceof RB ? QB.push(pB) : (nB[pB.facet.id] || (nB[pB.facet.id] = [])).push(pB);
        let IB = Object.create(null),
          NB = [],
          uB = [];
        for (let pB of QB) IB[pB.id] = uB.length << 1, uB.push((BB => pB.slot(BB)));
        let UB = null === zB || void 0 === zB ? void 0 : zB.config.facets;
        for (let pB in nB) {
          let BB = nB[pB],
            jB = BB[0].facet,
            QB = UB && UB[pB] || [];
          if (BB.every((BB => 0 == BB.type)))
            if (IB[jB.id] = NB.length << 1 | 1, xB(QB, BB)) NB.push(zB.facet(jB));
            else {
              let QB = jB.combine(BB.map((BB => BB.value)));
              NB.push(zB && jB.compare(QB, zB.facet(jB)) ? zB.facet(jB) : QB)
            }
          else {
            for (let jB of BB) 0 == jB.type ? (IB[jB.id] = NB.length << 1 | 1, NB.push(jB.value)) : (IB[jB.id] = uB.length << 1, uB.push((BB => jB.dynamicSlot(BB))));
            IB[jB.id] = uB.length << 1, uB.push((zB => bB(zB, jB, BB)))
          }
        }
        let aB = uB.map((BB => BB(IB)));
        return new uj(BB, dB, aB, IB, NB, nB)
      }
    }

    function Uj(BB, jB) {
      if (1 & jB) return 2;
      let zB = jB >> 1,
        QB = BB.status[zB];
      if (4 == QB) throw new Error("Cyclic dependency between fields and/or facets");
      if (2 & QB) return QB;
      BB.status[zB] = 4;
      let nB = BB.computeSlot(BB, BB.config.dynamicSlots[zB]);
      return BB.status[zB] = 2 | nB
    }

    function aj(BB, jB) {
      return 1 & jB ? BB.config.staticValues[jB >> 1] : BB.values[jB >> 1]
    }
    const pj = wB.define(),
      rj = wB.define({
        combine: BB => BB.some((BB => BB)),
        static: !0
      }),
      sj = wB.define({
        combine: BB => BB.length ? BB[0] : void 0,
        static: !0
      }),
      Jj = wB.define(),
      mj = wB.define(),
      yj = wB.define(),
      kj = wB.define({
        combine: BB => !!BB.length && BB[0]
      });
    class Gj {
      constructor(BB, jB) {
        this.type = BB, this.value = jB
      }
      static define() {
        return new Lj
      }
    }
    class Lj {
      of(BB) {
        return new Gj(this, BB)
      }
    }
    class gj {
      constructor(BB) {
        this.map = BB
      }
      of(BB) {
        return new tj(this, BB)
      }
    }
    class tj {
      constructor(BB, jB) {
        this.type = BB, this.value = jB
      }
      map(BB) {
        let jB = this.type.map(this.value, BB);
        return void 0 === jB ? void 0 : jB == this.value ? this : new tj(this.type, jB)
      }
      is(BB) {
        return this.type == BB
      }
      static define() {
        return new gj((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).map || (BB => BB))
      }
      static mapEffects(BB, jB) {
        if (!BB.length) return BB;
        let zB = [];
        for (let QB of BB) {
          let BB = QB.map(jB);
          BB && zB.push(BB)
        }
        return zB
      }
    }
    tj.reconfigure = tj.define(), tj.appendConfig = tj.define();
    class Sj {
      constructor(BB, jB, zB, QB, nB, dB) {
        this.startState = BB, this.changes = jB, this.selection = zB, this.effects = QB, this.annotations = nB, this.scrollIntoView = dB, this._doc = null, this._state = null, zB && eB(zB, jB.newLength), nB.some((BB => BB.type == Sj.time)) || (this.annotations = nB.concat(Sj.time.of(Date.now())))
      }
      static create(BB, jB, zB, QB, nB, dB) {
        return new Sj(BB, jB, zB, QB, nB, dB)
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
        for (let jB of this.annotations)
          if (jB.type == BB) return jB.value
      }
      get docChanged() {
        return !this.changes.empty
      }
      get reconfigured() {
        return this.startState.config != this.state.config
      }
      isUserEvent(BB) {
        let jB = this.annotation(Sj.userEvent);
        return !(!jB || !(jB == BB || jB.length > BB.length && jB.slice(0, BB.length) == BB && "." == jB[BB.length]))
      }
    }

    function Mj(BB, jB) {
      let zB = [];
      for (let QB = 0, nB = 0;;) {
        let dB, IB;
        if (QB < BB.length && (nB == jB.length || jB[nB] >= BB[QB])) dB = BB[QB++], IB = BB[QB++];
        else {
          if (!(nB < jB.length)) return zB;
          dB = jB[nB++], IB = jB[nB++]
        }!zB.length || zB[zB.length - 1] < dB ? zB.push(dB, IB) : zB[zB.length - 1] < IB && (zB[zB.length - 1] = IB)
      }
    }

    function Ej(BB, jB, zB) {
      var QB;
      let nB, dB, IB;
      return zB ? (nB = jB.changes, dB = YB.empty(jB.changes.length), IB = BB.changes.compose(jB.changes)) : (nB = jB.changes.map(BB.changes), dB = BB.changes.mapDesc(jB.changes, !0), IB = BB.changes.compose(nB)), {
        changes: IB,
        selection: jB.selection ? jB.selection.map(dB) : null === (QB = BB.selection) || void 0 === QB ? void 0 : QB.map(nB),
        effects: tj.mapEffects(BB.effects, nB).concat(tj.mapEffects(jB.effects, dB)),
        annotations: BB.annotations.length ? BB.annotations.concat(jB.annotations) : jB.annotations,
        scrollIntoView: BB.scrollIntoView || jB.scrollIntoView
      }
    }

    function ij(BB, jB, zB) {
      let QB = jB.selection,
        nB = oj(jB.annotations);
      return jB.userEvent && (nB = nB.concat(Sj.userEvent.of(jB.userEvent))), {
        changes: jB.changes instanceof YB ? jB.changes : YB.of(jB.changes || [], zB, BB.facet(sj)),
        selection: QB && (QB instanceof WB ? QB : WB.single(QB.anchor, QB.head)),
        effects: oj(jB.effects),
        annotations: nB,
        scrollIntoView: !!jB.scrollIntoView
      }
    }

    function qj(BB, jB, zB) {
      let QB = ij(BB, jB.length ? jB[0] : {}, BB.doc.length);
      jB.length && !1 === jB[0].filter && (zB = !1);
      for (let dB = 1; dB < jB.length; dB++) {
        !1 === jB[dB].filter && (zB = !1);
        let nB = !!jB[dB].sequential;
        QB = Ej(QB, ij(BB, jB[dB], nB ? QB.changes.newLength : BB.doc.length), nB)
      }
      let nB = Sj.create(BB, QB.changes, QB.selection, QB.effects, QB.annotations, QB.scrollIntoView);
      return function(BB) {
        let jB = BB.startState,
          zB = jB.facet(yj),
          QB = BB;
        for (let nB = zB.length - 1; nB >= 0; nB--) {
          let dB = zB[nB](BB);
          dB && Object.keys(dB).length && (QB = Ej(QB, ij(jB, dB, BB.changes.newLength), !0))
        }
        return QB == BB ? BB : Sj.create(jB, BB.changes, BB.selection, QB.effects, QB.annotations, QB.scrollIntoView)
      }(zB ? function(BB) {
        let jB = BB.startState,
          zB = !0;
        for (let nB of jB.facet(Jj)) {
          let jB = nB(BB);
          if (!1 === jB) {
            zB = !1;
            break
          }
          Array.isArray(jB) && (zB = !0 === zB ? jB : Mj(zB, jB))
        }
        if (!0 !== zB) {
          let QB, nB;
          if (!1 === zB) nB = BB.changes.invertedDesc, QB = YB.empty(jB.doc.length);
          else {
            let jB = BB.changes.filter(zB);
            QB = jB.changes, nB = jB.filtered.mapDesc(jB.changes).invertedDesc
          }
          BB = Sj.create(jB, QB, BB.selection && BB.selection.map(nB), tj.mapEffects(BB.effects, nB), BB.annotations, BB.scrollIntoView)
        }
        let QB = jB.facet(mj);
        for (let nB = QB.length - 1; nB >= 0; nB--) {
          let zB = QB[nB](BB);
          BB = zB instanceof Sj ? zB : Array.isArray(zB) && 1 == zB.length && zB[0] instanceof Sj ? zB[0] : qj(jB, oj(zB), !1)
        }
        return BB
      }(nB) : nB)
    }
    Sj.time = Gj.define(), Sj.userEvent = Gj.define(), Sj.addToHistory = Gj.define(), Sj.remote = Gj.define();
    const fj = [];

    function oj(BB) {
      return null == BB ? fj : Array.isArray(BB) ? BB : [BB]
    }
    var Hj = function(BB) {
      return BB[BB.Word = 0] = "Word", BB[BB.Space = 1] = "Space", BB[BB.Other = 2] = "Other", BB
    }(Hj || (Hj = {}));
    const Dj = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
    let Fj;
    try {
      Fj = new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u")
    } catch (zz) {}

    function Yj(BB) {
      return jB => {
        if (!/\S/.test(jB)) return Hj.Space;
        if (function(BB) {
            if (Fj) return Fj.test(BB);
            for (let jB = 0; jB < BB.length; jB++) {
              let zB = BB[jB];
              if (/\w/.test(zB) || zB > "\x80" && (zB.toUpperCase() != zB.toLowerCase() || Dj.test(zB))) return !0
            }
            return !1
          }(jB)) return Hj.Word;
        for (let zB = 0; zB < BB.length; zB++)
          if (jB.indexOf(BB[zB]) > -1) return Hj.Word;
        return Hj.Other
      }
    }
    class Vj {
      constructor(BB, jB, zB, QB, nB, dB) {
        this.config = BB, this.doc = jB, this.selection = zB, this.values = QB, this.status = BB.statusTemplate.slice(), this.computeSlot = nB, dB && (dB._state = this);
        for (let IB = 0; IB < this.config.dynamicSlots.length; IB++) Uj(this, IB << 1);
        this.computeSlot = null
      }
      field(BB) {
        let jB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          zB = this.config.address[BB.id];
        if (null != zB) return Uj(this, zB), aj(this, zB);
        if (jB) throw new RangeError("Field is not present in this state")
      }
      update() {
        for (var BB = arguments.length, jB = new Array(BB), zB = 0; zB < BB; zB++) jB[zB] = arguments[zB];
        return qj(this, jB, !0)
      }
      applyTransaction(BB) {
        let jB, zB = this.config,
          {
            base: QB,
            compartments: nB
          } = zB;
        for (let IB of BB.effects) IB.is(Ij.reconfigure) ? (zB && (nB = new Map, zB.compartments.forEach(((BB, jB) => nB.set(jB, BB))), zB = null), nB.set(IB.value.compartment, IB.value.extension)) : IB.is(tj.reconfigure) ? (zB = null, QB = IB.value) : IB.is(tj.appendConfig) && (zB = null, QB = oj(QB).concat(IB.value));
        if (zB) jB = BB.startState.values.slice();
        else {
          zB = uj.resolve(QB, nB, this), jB = new Vj(zB, this.doc, this.selection, zB.dynamicSlots.map((() => null)), ((BB, jB) => jB.reconfigure(BB, this)), null).values
        }
        let dB = BB.startState.facet(rj) ? BB.newSelection : BB.newSelection.asSingle();
        new Vj(zB, BB.newDoc, dB, jB, ((jB, zB) => zB.update(jB, BB)), BB)
      }
      replaceSelection(BB) {
        return "string" == typeof BB && (BB = this.toText(BB)), this.changeByRange((jB => ({
          changes: {
            from: jB.from,
            to: jB.to,
            insert: BB
          },
          range: WB.cursor(jB.from + BB.length)
        })))
      }
      changeByRange(BB) {
        let jB = this.selection,
          zB = BB(jB.gy[0]),
          QB = this.changes(zB.changes),
          nB = [zB.range],
          dB = oj(zB.effects);
        for (let IB = 1; IB < jB.gy.length; IB++) {
          let zB = BB(jB.gy[IB]),
            NB = this.changes(zB.changes),
            uB = NB.map(QB);
          for (let BB = 0; BB < IB; BB++) nB[BB] = nB[BB].map(uB);
          let UB = QB.mapDesc(NB, !0);
          nB.push(zB.range.map(UB)), QB = QB.compose(uB), dB = tj.mapEffects(dB, uB).concat(tj.mapEffects(oj(zB.effects), UB))
        }
        return {
          changes: QB,
          selection: WB.create(nB, jB.mainIndex),
          effects: dB
        }
      }
      changes() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return BB instanceof YB ? BB : YB.of(BB, this.doc.length, this.facet(Vj.lineSeparator))
      }
      toText(BB) {
        return mB.of(BB.split(this.facet(Vj.lineSeparator) || HB))
      }
      sliceDoc() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.doc.length;
        return this.doc.sliceString(BB, jB, this.lineBreak)
      }
      facet(BB) {
        let jB = this.config.address[BB.id];
        return null == jB ? BB.default : (Uj(this, jB), aj(this, jB))
      }
      toJSON(BB) {
        let jB = {
          doc: this.sliceDoc(),
          selection: this.selection.toJSON()
        };
        if (BB)
          for (let zB in BB) {
            let QB = BB[zB];
            QB instanceof RB && null != this.config.address[QB.id] && (jB[zB] = QB.spec.toJSON(this.field(BB[zB]), this))
          }
        return jB
      }
      static fromJSON(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          zB = arguments.length > 2 ? arguments[2] : void 0;
        if (!BB || "string" != typeof BB.doc) throw new RangeError("Invalid JSON representation for EditorState");
        let QB = [];
        if (zB)
          for (let nB in zB)
            if (Object.prototype.hasOwnProperty.call(BB, nB)) {
              let jB = zB[nB],
                dB = BB[nB];
              QB.push(jB.init((BB => jB.spec.fromJSON(dB, BB))))
            } return Vj.create({
          doc: BB.doc,
          selection: WB.fromJSON(BB.selection),
          extensions: jB.extensions ? QB.concat([jB.extensions]) : QB
        })
      }
      static create() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          jB = uj.resolve(BB.extensions || [], new Map),
          zB = BB.doc instanceof mB ? BB.doc : mB.of((BB.doc || "").split(jB.staticFacet(Vj.lineSeparator) || HB)),
          QB = BB.selection ? BB.selection instanceof WB ? BB.selection : WB.single(BB.selection.anchor, BB.selection.head) : WB.single(0);
        return eB(QB, zB.length), jB.staticFacet(rj) || (QB = QB.asSingle()), new Vj(jB, zB, QB, jB.dynamicSlots.map((() => null)), ((BB, jB) => jB.create(BB)), null)
      }
      get tabSize() {
        return this.facet(Vj.tabSize)
      }
      get lineBreak() {
        return this.facet(Vj.lineSeparator) || "\n"
      }
      get readOnly() {
        return this.facet(kj)
      }
      phrase(BB) {
        for (var jB = arguments.length, zB = new Array(jB > 1 ? jB - 1 : 0), QB = 1; QB < jB; QB++) zB[QB - 1] = arguments[QB];
        for (let nB of this.facet(Vj.phrases))
          if (Object.prototype.hasOwnProperty.call(nB, BB)) {
            BB = nB[BB];
            break
          } return zB.length && (BB = BB.replace(/\$(\$|\d*)/g, ((BB, jB) => {
          if ("$" == jB) return "$";
          let QB = +(jB || 1);
          return !QB || QB > zB.length ? BB : zB[QB - 1]
        }))), BB
      }
      languageDataAt(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          QB = [];
        for (let nB of this.facet(pj))
          for (let dB of nB(this, jB, zB)) Object.prototype.hasOwnProperty.call(dB, BB) && QB.push(dB[BB]);
        return QB
      }
      charCategorizer(BB) {
        let jB = this.languageDataAt("wordChars", BB);
        return Yj(jB.length ? jB[0] : "")
      }
      wordAt(BB) {
        let {
          text: jB,
          from: zB,
          length: QB
        } = this.doc.lineAt(BB), nB = this.charCategorizer(BB), dB = BB - zB, IB = BB - zB;
        for (; dB > 0;) {
          let BB = iB(jB, dB, !1);
          if (nB(jB.slice(BB, dB)) != Hj.Word) break;
          dB = BB
        }
        for (; IB < QB;) {
          let BB = iB(jB, IB);
          if (nB(jB.slice(IB, BB)) != Hj.Word) break;
          IB = BB
        }
        return dB == IB ? null : WB.range(dB + zB, IB + zB)
      }
    }

    function hj(BB, jB) {
      let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        QB = {};
      for (let nB of BB)
        for (let BB of Object.keys(nB)) {
          let jB = nB[BB],
            dB = QB[BB];
          if (void 0 === dB) QB[BB] = jB;
          else if (dB === jB || void 0 === jB);
          else {
            if (!Object.hasOwnProperty.call(zB, BB)) throw new Error("Config merge conflict for field " + BB);
            QB[BB] = zB[BB](dB, jB)
          }
        }
      for (let nB in jB) void 0 === QB[nB] && (QB[nB] = jB[nB]);
      return QB
    }
    Vj.allowMultipleSelections = rj, Vj.tabSize = wB.define({
      combine: BB => BB.length ? BB[0] : 4
    }), Vj.lineSeparator = sj, Vj.readOnly = kj, Vj.phrases = wB.define({
      compare(BB, jB) {
        let zB = Object.keys(BB),
          QB = Object.keys(jB);
        return zB.length == QB.length && zB.every((zB => BB[zB] == jB[zB]))
      }
    }), Vj.languageData = pj, Vj.changeFilter = Jj, Vj.transactionFilter = mj, Vj.transactionExtender = yj, Ij.reconfigure = tj.define();
    class Xj {
      eq(BB) {
        return this == BB
      }
      range(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BB;
        return Aj.create(BB, jB, this)
      }
    }

    function Zj(BB, jB) {
      return BB == jB || BB.constructor == jB.constructor && BB.eq(jB)
    }
    Xj.prototype.startSide = Xj.prototype.endSide = 0, Xj.prototype.point = !1, Xj.prototype.mapMode = DB.TrackDel;
    class Aj {
      constructor(BB, jB, zB) {
        this.from = BB, this.to = jB, this.value = zB
      }
      static create(BB, jB, zB) {
        return new Aj(BB, jB, zB)
      }
    }

    function Tj(BB, jB) {
      return BB.from - jB.from || BB.value.startSide - jB.value.startSide
    }
    class Pj {
      constructor(BB, jB, zB, QB) {
        this.from = BB, this.to = jB, this.value = zB, this.aQB = QB
      }
      get length() {
        return this.to[this.to.length - 1]
      }
      findIndex(BB, jB, zB) {
        let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          nB = zB ? this.to : this.from;
        for (let dB = QB, IB = nB.length;;) {
          if (dB == IB) return dB;
          let QB = dB + IB >> 1,
            NB = nB[QB] - BB || (zB ? this.value[QB].endSide : this.value[QB].startSide) - jB;
          if (QB == dB) return NB >= 0 ? dB : IB;
          NB >= 0 ? IB = QB : dB = QB + 1
        }
      }
      between(BB, jB, zB, QB) {
        for (let nB = this.findIndex(jB, -1e9, !0), dB = this.findIndex(zB, 1e9, !1, nB); nB < dB; nB++)
          if (!1 === QB(this.from[nB] + BB, this.to[nB] + BB, this.value[nB])) return !1
      }
      map(BB, jB) {
        let zB = [],
          QB = [],
          nB = [],
          dB = -1,
          IB = -1;
        for (let NB = 0; NB < this.value.length; NB++) {
          let uB, UB, aB = this.value[NB],
            pB = this.from[NB] + BB,
            rB = this.to[NB] + BB;
          if (pB == rB) {
            let BB = jB.mapPos(pB, aB.startSide, aB.mapMode);
            if (null == BB) continue;
            if (uB = UB = BB, aB.startSide != aB.endSide && (UB = jB.mapPos(pB, aB.endSide), UB < uB)) continue
          } else if (uB = jB.mapPos(pB, aB.startSide), UB = jB.mapPos(rB, aB.endSide), uB > UB || uB == UB && aB.startSide > 0 && aB.endSide <= 0) continue;
          (UB - uB || aB.endSide - aB.startSide) < 0 || (dB < 0 && (dB = uB), aB.point && (IB = Math.max(IB, UB - uB)), zB.push(aB), QB.push(uB - dB), nB.push(UB - dB))
        }
        return {
          mapped: zB.length ? new Pj(QB, nB, zB, IB) : null,
          pos: dB
        }
      }
    }
    class Wj {
      constructor(BB, jB, zB, QB) {
        this.chunkPos = BB, this.chunk = jB, this.nextLayer = zB, this.aQB = QB
      }
      static create(BB, jB, zB, QB) {
        return new Wj(BB, jB, zB, QB)
      }
      get length() {
        let BB = this.chunk.length - 1;
        return BB < 0 ? 0 : Math.max(this.chunkEnd(BB), this.nextLayer.length)
      }
      get size() {
        if (this.tJ) return 0;
        let BB = this.nextLayer.size;
        for (let jB of this.chunk) BB += jB.value.length;
        return BB
      }
      chunkEnd(BB) {
        return this.chunkPos[BB] + this.chunk[BB].length
      }
      update(BB) {
        let {
          add: jB = [],
          sort: zB = !1,
          filterFrom: QB = 0,
          filterTo: nB = this.length
        } = BB, dB = BB.filter;
        if (0 == jB.length && !dB) return this;
        if (zB && (jB = jB.slice().sort(Tj)), this.tJ) return jB.length ? Wj.of(jB) : this;
        let IB = new wj(this, null, -1).goto(0),
          NB = 0,
          uB = [],
          UB = new ej;
        for (; IB.value || NB < jB.length;)
          if (NB < jB.length && (IB.from - jB[NB].from || IB.startSide - jB[NB].value.startSide) >= 0) {
            let BB = jB[NB++];
            UB.addInner(BB.from, BB.to, BB.value) || uB.push(BB)
          } else 1 == IB.rangeIndex && IB.chunkIndex < this.chunk.length && (NB == jB.length || this.chunkEnd(IB.chunkIndex) < jB[NB].from) && (!dB || QB > this.chunkEnd(IB.chunkIndex) || nB < this.chunkPos[IB.chunkIndex]) && UB.addChunk(this.chunkPos[IB.chunkIndex], this.chunk[IB.chunkIndex]) ? IB.nextChunk() : ((!dB || QB > IB.to || nB < IB.from || dB(IB.from, IB.to, IB.value)) && (UB.addInner(IB.from, IB.to, IB.value) || uB.push(Aj.create(IB.from, IB.to, IB.value))), IB.next());
        return UB.finishInner(this.nextLayer.tJ && !uB.length ? Wj.empty : this.nextLayer.update({
          add: uB,
          filter: dB,
          filterFrom: QB,
          filterTo: nB
        }))
      }
      map(BB) {
        if (BB.empty || this.tJ) return this;
        let jB = [],
          zB = [],
          QB = -1;
        for (let dB = 0; dB < this.chunk.length; dB++) {
          let nB = this.chunkPos[dB],
            IB = this.chunk[dB],
            NB = BB.touchesRange(nB, nB + IB.length);
          if (!1 === NB) QB = Math.max(QB, IB.aQB), jB.push(IB), zB.push(BB.mapPos(nB));
          else if (!0 === NB) {
            let {
              mapped: dB,
              pos: NB
            } = IB.map(nB, BB);
            dB && (QB = Math.max(QB, dB.aQB), jB.push(dB), zB.push(NB))
          }
        }
        let nB = this.nextLayer.map(BB);
        return 0 == jB.length ? nB : new Wj(zB, jB, nB || Wj.empty, QB)
      }
      between(BB, jB, zB) {
        if (!this.tJ) {
          for (let QB = 0; QB < this.chunk.length; QB++) {
            let nB = this.chunkPos[QB],
              dB = this.chunk[QB];
            if (jB >= nB && BB <= nB + dB.length && !1 === dB.between(nB, BB - nB, jB - nB, zB)) return
          }
          this.nextLayer.between(BB, jB, zB)
        }
      }
      iter() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return xj.from([this]).goto(BB)
      }
      get tJ() {
        return this.nextLayer == this
      }
      static iter(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return xj.from(BB).goto(jB)
      }
      static compare(BB, jB, zB, QB) {
        let nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1,
          dB = BB.filter((BB => BB.aQB > 0 || !BB.tJ && BB.aQB >= nB)),
          IB = jB.filter((BB => BB.aQB > 0 || !BB.tJ && BB.aQB >= nB)),
          NB = lj(dB, IB, zB),
          uB = new Cj(dB, NB, nB),
          UB = new Cj(IB, NB, nB);
        zB.iterGaps(((BB, jB, zB) => cj(uB, BB, UB, jB, zB, QB))), zB.empty && 0 == zB.length && cj(uB, 0, UB, 0, 0, QB)
      }
      static eq(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          QB = arguments.length > 3 ? arguments[3] : void 0;
        null == QB && (QB = 999999999);
        let nB = BB.filter((BB => !BB.tJ && jB.indexOf(BB) < 0)),
          dB = jB.filter((jB => !jB.tJ && BB.indexOf(jB) < 0));
        if (nB.length != dB.length) return !1;
        if (!nB.length) return !0;
        let IB = lj(nB, dB),
          NB = new Cj(nB, IB, 0).goto(zB),
          uB = new Cj(dB, IB, 0).goto(zB);
        for (;;) {
          if (NB.to != uB.to || !bj(NB.active, uB.active) || NB.point && (!uB.point || !Zj(NB.point, uB.point))) return !1;
          if (NB.to > QB) return !0;
          NB.next(), uB.next()
        }
      }
      static spans(BB, jB, zB, QB) {
        let nB = new Cj(BB, null, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1).goto(jB),
          dB = jB,
          IB = nB.openStart;
        for (;;) {
          let BB = Math.min(nB.to, zB);
          if (nB.point) {
            let zB = nB.activeForPoint(nB.to),
              NB = nB.pointFrom < jB ? zB.length + 1 : nB.point.startSide < 0 ? zB.length : Math.min(zB.length, IB);
            QB.point(dB, BB, nB.point, zB, NB, nB.pointRank), IB = Math.min(nB.openEnd(BB), zB.length)
          } else BB > dB && (QB.span(dB, BB, nB.active, IB), IB = nB.openEnd(BB));
          if (nB.to > zB) return IB + (nB.point && nB.to > zB ? 1 : 0);
          dB = nB.to, nB.next()
        }
      }
      static of (BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          zB = new ej;
        for (let QB of BB instanceof Aj ? [BB] : jB ? function(BB) {
            if (BB.length > 1)
              for (let jB = BB[0], zB = 1; zB < BB.length; zB++) {
                let QB = BB[zB];
                if (Tj(jB, QB) > 0) return BB.slice().sort(Tj);
                jB = QB
              }
            return BB
          }(BB) : BB) zB.add(QB.from, QB.to, QB.value);
        return zB.finish()
      }
      static join(BB) {
        if (!BB.length) return Wj.empty;
        let jB = BB[BB.length - 1];
        for (let zB = BB.length - 2; zB >= 0; zB--)
          for (let QB = BB[zB]; QB != Wj.empty; QB = QB.nextLayer) jB = new Wj(QB.chunkPos, QB.chunk, jB, Math.max(QB.aQB, jB.aQB));
        return jB
      }
    }
    Wj.empty = new Wj([], [], null, -1), Wj.empty.nextLayer = Wj.empty;
    class ej {
      finishChunk(BB) {
        this.chunks.push(new Pj(this.from, this.to, this.value, this.aQB)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.aQB), this.aQB = -1, BB && (this.from = [], this.to = [], this.value = [])
      }
      constructor() {
        this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.aQB = -1, this.setMaxPoint = -1, this.nextLayer = null
      }
      add(BB, jB, zB) {
        this.addInner(BB, jB, zB) || (this.nextLayer || (this.nextLayer = new ej)).add(BB, jB, zB)
      }
      addInner(BB, jB, zB) {
        let QB = BB - this.lastTo || zB.startSide - this.last.endSide;
        if (QB <= 0 && (BB - this.lastFrom || zB.startSide - this.last.startSide) < 0) throw new Error("Ranges must be added sorted by `from` position and `startSide`");
        return !(QB < 0) && (250 == this.from.length && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = BB), this.from.push(BB - this.chunkStart), this.to.push(jB - this.chunkStart), this.last = zB, this.lastFrom = BB, this.lastTo = jB, this.value.push(zB), zB.point && (this.aQB = Math.max(this.aQB, jB - BB)), !0)
      }
      addChunk(BB, jB) {
        if ((BB - this.lastTo || jB.value[0].startSide - this.last.endSide) < 0) return !1;
        this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, jB.aQB), this.chunks.push(jB), this.chunkPos.push(BB);
        let zB = jB.value.length - 1;
        return this.last = jB.value[zB], this.lastFrom = jB.from[zB] + BB, this.lastTo = jB.to[zB] + BB, !0
      }
      finish() {
        return this.finishInner(Wj.empty)
      }
      finishInner(BB) {
        if (this.from.length && this.finishChunk(!1), 0 == this.chunks.length) return BB;
        let jB = Wj.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(BB) : BB, this.setMaxPoint);
        return this.from = null, jB
      }
    }

    function lj(BB, jB, zB) {
      let QB = new Map;
      for (let dB of BB)
        for (let BB = 0; BB < dB.chunk.length; BB++) dB.chunk[BB].aQB <= 0 && QB.set(dB.chunk[BB], dB.chunkPos[BB]);
      let nB = new Set;
      for (let dB of jB)
        for (let BB = 0; BB < dB.chunk.length; BB++) {
          let jB = QB.get(dB.chunk[BB]);
          null == jB || (zB ? zB.mapPos(jB) : jB) != dB.chunkPos[BB] || (null === zB || void 0 === zB ? void 0 : zB.touchesRange(jB, jB + dB.chunk[BB].length)) || nB.add(dB.chunk[BB])
        }
      return nB
    }
    class wj {
      constructor(BB, jB, zB) {
        let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.layer = BB, this.skip = jB, this.pQB = zB, this.rank = QB
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      get endSide() {
        return this.value ? this.value.endSide : 0
      }
      goto(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(BB, jB, !1), this
      }
      gotoInner(BB, jB, zB) {
        for (; this.chunkIndex < this.layer.chunk.length;) {
          let jB = this.layer.chunk[this.chunkIndex];
          if (!(this.skip && this.skip.has(jB) || this.layer.chunkEnd(this.chunkIndex) < BB || jB.aQB < this.pQB)) break;
          this.chunkIndex++, zB = !1
        }
        if (this.chunkIndex < this.layer.chunk.length) {
          let QB = this.layer.chunk[this.chunkIndex].findIndex(BB - this.layer.chunkPos[this.chunkIndex], jB, !0);
          (!zB || this.rangeIndex < QB) && this.setRangeIndex(QB)
        }
        this.next()
      }
      forward(BB, jB) {
        (this.to - BB || this.endSide - jB) < 0 && this.gotoInner(BB, jB, !0)
      }
      next() {
        for (;;) {
          if (this.chunkIndex == this.layer.chunk.length) {
            this.from = this.to = 1e9, this.value = null;
            break
          } {
            let BB = this.layer.chunkPos[this.chunkIndex],
              jB = this.layer.chunk[this.chunkIndex],
              zB = BB + jB.from[this.rangeIndex];
            if (this.from = zB, this.to = BB + jB.to[this.rangeIndex], this.value = jB.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.pQB < 0 || this.value.point && this.to - this.from >= this.pQB) break
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
    class xj {
      constructor(BB) {
        this.heap = BB
      }
      static from(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          QB = [];
        for (let nB = 0; nB < BB.length; nB++)
          for (let dB = BB[nB]; !dB.tJ; dB = dB.nextLayer) dB.aQB >= zB && QB.push(new wj(dB, jB, zB, nB));
        return 1 == QB.length ? QB[0] : new xj(QB)
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      goto(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        for (let zB of this.heap) zB.goto(BB, jB);
        for (let zB = this.heap.length >> 1; zB >= 0; zB--) Kj(this.heap, zB);
        return this.next(), this
      }
      forward(BB, jB) {
        for (let zB of this.heap) zB.forward(BB, jB);
        for (let zB = this.heap.length >> 1; zB >= 0; zB--) Kj(this.heap, zB);
        (this.to - BB || this.value.endSide - jB) < 0 && this.next()
      }
      next() {
        if (0 == this.heap.length) this.from = this.to = 1e9, this.value = null, this.rank = -1;
        else {
          let BB = this.heap[0];
          this.from = BB.from, this.to = BB.to, this.value = BB.value, this.rank = BB.rank, BB.value && BB.next(), Kj(this.heap, 0)
        }
      }
    }

    function Kj(BB, jB) {
      for (let zB = BB[jB];;) {
        let QB = 1 + (jB << 1);
        if (QB >= BB.length) break;
        let nB = BB[QB];
        if (QB + 1 < BB.length && nB.compare(BB[QB + 1]) >= 0 && (nB = BB[QB + 1], QB++), zB.compare(nB) < 0) break;
        BB[QB] = zB, BB[jB] = nB, jB = QB
      }
    }
    class Cj {
      constructor(BB, jB, zB) {
        this.pQB = zB, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = xj.from(BB, jB, zB)
      }
      goto(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.cursor.goto(BB, jB), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = BB, this.endSide = jB, this.openStart = -1, this.next(), this
      }
      forward(BB, jB) {
        for (; this.minActive > -1 && (this.activeTo[this.minActive] - BB || this.active[this.minActive].endSide - jB) < 0;) this.removeActive(this.minActive);
        this.cursor.forward(BB, jB)
      }
      removeActive(BB) {
        vj(this.active, BB), vj(this.activeTo, BB), vj(this.activeRank, BB), this.minActive = Oj(this.active, this.activeTo)
      }
      addActive(BB) {
        let jB = 0,
          {
            value: zB,
            to: QB,
            rank: nB
          } = this.cursor;
        for (; jB < this.activeRank.length && (nB - this.activeRank[jB] || QB - this.activeTo[jB]) > 0;) jB++;
        Rj(this.active, jB, zB), Rj(this.activeTo, jB, QB), Rj(this.activeRank, jB, nB), BB && Rj(BB, jB, this.cursor.from), this.minActive = Oj(this.active, this.activeTo)
      }
      next() {
        let BB = this.to,
          jB = this.point;
        this.point = null;
        let zB = this.openStart < 0 ? [] : null;
        for (;;) {
          let QB = this.minActive;
          if (QB > -1 && (this.activeTo[QB] - this.cursor.from || this.active[QB].endSide - this.cursor.startSide) < 0) {
            if (this.activeTo[QB] > BB) {
              this.to = this.activeTo[QB], this.endSide = this.active[QB].endSide;
              break
            }
            this.removeActive(QB), zB && vj(zB, QB)
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
                if (!(jB && this.cursor.to == this.to && this.cursor.from < this.cursor.to)) {
                  this.point = BB, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = BB.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
                  break
                }
                this.cursor.next()
              } else this.addActive(zB), this.cursor.next()
            }
          }
        }
        if (zB) {
          this.openStart = 0;
          for (let jB = zB.length - 1; jB >= 0 && zB[jB] < BB; jB--) this.openStart++
        }
      }
      activeForPoint(BB) {
        if (!this.active.length) return this.active;
        let jB = [];
        for (let zB = this.active.length - 1; zB >= 0 && !(this.activeRank[zB] < this.pointRank); zB--)(this.activeTo[zB] > BB || this.activeTo[zB] == BB && this.active[zB].endSide >= this.point.endSide) && jB.push(this.active[zB]);
        return jB.reverse()
      }
      openEnd(BB) {
        let jB = 0;
        for (let zB = this.activeTo.length - 1; zB >= 0 && this.activeTo[zB] > BB; zB--) jB++;
        return jB
      }
    }

    function cj(BB, jB, zB, QB, nB, dB) {
      BB.goto(jB), zB.goto(QB);
      let IB = QB + nB,
        NB = QB,
        uB = QB - jB,
        UB = !!dB.boundChange;
      for (let aB = !1;;) {
        let jB = BB.to + uB - zB.to,
          QB = jB || BB.endSide - zB.endSide,
          nB = QB < 0 ? BB.to + uB : zB.to,
          pB = Math.min(nB, IB);
        if (BB.point || zB.point ? (BB.point && zB.point && Zj(BB.point, zB.point) && bj(BB.activeForPoint(BB.to), zB.activeForPoint(zB.to)) || dB.comparePoint(NB, pB, BB.point, zB.point), aB = !1) : (aB && dB.boundChange(NB), pB > NB && !bj(BB.active, zB.active) && dB.compareRange(NB, pB, BB.active, zB.active), UB && pB < IB && (jB || BB.openEnd(nB) != zB.openEnd(nB)) && (aB = !0)), nB > IB) break;
        NB = nB, QB <= 0 && BB.next(), QB >= 0 && zB.next()
      }
    }

    function bj(BB, jB) {
      if (BB.length != jB.length) return !1;
      for (let zB = 0; zB < BB.length; zB++)
        if (BB[zB] != jB[zB] && !Zj(BB[zB], jB[zB])) return !1;
      return !0
    }

    function vj(BB, jB) {
      for (let zB = jB, QB = BB.length - 1; zB < QB; zB++) BB[zB] = BB[zB + 1];
      BB.pop()
    }

    function Rj(BB, jB, zB) {
      for (let QB = BB.length - 1; QB >= jB; QB--) BB[QB + 1] = BB[QB];
      BB[jB] = zB
    }

    function Oj(BB, jB) {
      let zB = -1,
        QB = 1e9;
      for (let nB = 0; nB < jB.length; nB++)(jB[nB] - QB || BB[nB].endSide - BB[zB].endSide) < 0 && (zB = nB, QB = jB[nB]);
      return zB
    }

    function Bz(BB, jB) {
      let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : BB.length,
        QB = 0;
      for (let nB = 0; nB < zB && nB < BB.length;) 9 == BB.charCodeAt(nB) ? (QB += jB - QB % jB, nB++) : (QB++, nB = iB(BB, nB));
      return QB
    }

    function jz(BB, jB, zB, QB) {
      for (let nB = 0, dB = 0;;) {
        if (dB >= jB) return nB;
        if (nB == BB.length) break;
        dB += 9 == BB.charCodeAt(nB) ? zB - dB % zB : 1, nB = iB(BB, nB)
      }
      return !0 === QB ? -1 : BB.length
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);