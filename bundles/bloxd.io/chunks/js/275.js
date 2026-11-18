export const id = 275;
export const ids = [275];
export const modules = {
  40036: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => vT,
      d: () => rB,
      ChangeSet: () => IB,
      e: () => FT,
      h: () => XB,
      i: () => cT,
      l: () => CB,
      o: () => KB,
      r: () => yT,
      u: () => XT,
      t: () => WT,
      w: () => PT,
      x: () => NT,
      A: () => nB,
      D: () => uB,
      G: () => tT,
      K: () => zB,
      M: () => UB,
      P: () => ST,
      R: () => Bd,
      S: () => MB,
      U: () => Td,
      Y: () => wB
    });
    let VB = [],
      yB = [];

    function pB(BB) {
      if (BB < 768) return !1;
      for (let TB = 0, dB = VB.length;;) {
        let pB = TB + dB >> 1;
        if (BB < VB[pB]) dB = pB;
        else {
          if (!(BB >= yB[pB])) return !0;
          TB = pB + 1
        }
        if (TB == dB) return !1
      }
    }

    function lB(BB) {
      return BB >= 127462 && BB <= 127487
    }(() => {
      let BB = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((BB => BB ? parseInt(BB, 36) : 1));
      for (let TB = 0, dB = 0; TB < BB.length; TB++)(TB % 2 ? yB : VB).push(dB += BB[TB])
    })();
    const JB = 8205;

    function YB(BB, TB) {
      return (!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2] ? gB : oB)(BB, TB, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function gB(BB, TB, dB) {
      if (TB == BB.length) return TB;
      TB && LB(BB.charCodeAt(TB)) && OB(BB.charCodeAt(TB - 1)) && TB--;
      let VB = kB(BB, TB);
      for (TB += DB(VB); TB < BB.length;) {
        let yB = kB(BB, TB);
        if (VB == JB || yB == JB || dB && pB(yB)) TB += DB(yB), VB = yB;
        else {
          if (!lB(yB)) break;
          {
            let dB = 0,
              VB = TB - 2;
            for (; VB >= 0 && lB(kB(BB, VB));) dB++, VB -= 2;
            if (dB % 2 == 0) break;
            TB += 2
          }
        }
      }
      return TB
    }

    function oB(BB, TB, dB) {
      for (; TB > 0;) {
        let VB = gB(BB, TB - 2, dB);
        if (VB < TB) return VB;
        TB--
      }
      return 0
    }

    function kB(BB, TB) {
      let dB = BB.charCodeAt(TB);
      if (!OB(dB) || TB + 1 == BB.length) return dB;
      let VB = BB.charCodeAt(TB + 1);
      return LB(VB) ? VB - 56320 + (dB - 55296 << 10) + 65536 : dB
    }

    function LB(BB) {
      return BB >= 56320 && BB < 57344
    }

    function OB(BB) {
      return BB >= 55296 && BB < 56320
    }

    function DB(BB) {
      return BB < 65536 ? 1 : 2
    }
    class uB {
      lineAt(BB) {
        if (BB < 0 || BB > this.length) throw new RangeError(`Invalid position ${BB} in document of length ${this.length}`);
        return this.lineInner(BB, !1, 1, 0)
      }
      line(BB) {
        if (BB < 1 || BB > this.lines) throw new RangeError(`Invalid line number ${BB} in ${this.lines}-line document`);
        return this.lineInner(BB, !0, 1, 0)
      }
      replace(BB, TB, dB) {
        [BB, TB] = sB(this, BB, TB);
        let VB = [];
        return this.decompose(0, BB, VB, 2), dB.length && dB.decompose(0, dB.length, VB, 3), this.decompose(TB, this.length, VB, 1), EB.from(VB, this.length - (TB - BB) + dB.length)
      }
      append(BB) {
        return this.replace(this.length, this.length, BB)
      }
      slice(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        [BB, TB] = sB(this, BB, TB);
        let dB = [];
        return this.decompose(BB, TB, dB, 0), EB.from(dB, TB - BB)
      }
      eq(BB) {
        if (BB == this) return !0;
        if (BB.length != this.length || BB.lines != this.lines) return !1;
        let TB = this.scanIdentical(BB, 1),
          dB = this.length - this.scanIdentical(BB, -1),
          VB = new iB(this),
          yB = new iB(BB);
        for (let pB = TB, lB = TB;;) {
          if (VB.next(pB), yB.next(pB), pB = 0, VB.lineBreak != yB.lineBreak || VB.done != yB.done || VB.value != yB.value) return !1;
          if (lB += VB.value.length, VB.done || lB >= dB) return !0
        }
      }
      iter() {
        return new iB(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1)
      }
      iterRange(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        return new NB(this, BB, TB)
      }
      iterLines(BB, TB) {
        let dB;
        if (null == BB) dB = this.iter();
        else {
          null == TB && (TB = this.lines + 1);
          let VB = this.line(BB).from;
          dB = this.iterRange(VB, Math.max(VB, TB == this.lines + 1 ? this.length : TB <= 1 ? 0 : this.line(TB - 1).to))
        }
        return new tB(dB)
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
        return 1 != BB.length || BB[0] ? BB.length <= 32 ? new HB(BB) : EB.from(HB.split(BB, [])) : uB.empty
      }
    }
    class HB extends uB {
      constructor(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(BB) {
          let TB = -1;
          for (let dB of BB) TB += dB.length + 1;
          return TB
        }(BB);
        super(), this.text = BB, this.length = TB
      }
      get lines() {
        return this.text.length
      }
      get children() {
        return null
      }
      lineInner(BB, TB, dB, VB) {
        for (let yB = 0;; yB++) {
          let pB = this.text[yB],
            lB = VB + pB.length;
          if ((TB ? dB : lB) >= BB) return new fB(VB, lB, dB, pB);
          VB = lB + 1, dB++
        }
      }
      decompose(BB, TB, dB, VB) {
        let yB = BB <= 0 && TB >= this.length ? this : new HB(mB(this.text, BB, TB), Math.min(TB, this.length) - Math.max(0, BB));
        if (1 & VB) {
          let BB = dB.pop(),
            TB = vB(yB.text, BB.text.slice(), 0, yB.length);
          if (TB.length <= 32) dB.push(new HB(TB, BB.length + yB.length));
          else {
            let BB = TB.length >> 1;
            dB.push(new HB(TB.slice(0, BB)), new HB(TB.slice(BB)))
          }
        } else dB.push(yB)
      }
      replace(BB, TB, dB) {
        if (!(dB instanceof HB)) return super.replace(BB, TB, dB);
        [BB, TB] = sB(this, BB, TB);
        let VB = vB(this.text, vB(dB.text, mB(this.text, 0, BB)), TB),
          yB = this.length + dB.length - (TB - BB);
        return VB.length <= 32 ? new HB(VB, yB) : EB.from(HB.split(VB, []), yB)
      }
      sliceString(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [BB, TB] = sB(this, BB, TB);
        let VB = "";
        for (let yB = 0, pB = 0; yB <= TB && pB < this.text.length; pB++) {
          let lB = this.text[pB],
            JB = yB + lB.length;
          yB > BB && pB && (VB += dB), BB < JB && TB > yB && (VB += lB.slice(Math.max(0, BB - yB), TB - yB)), yB = JB + 1
        }
        return VB
      }
      flatten(BB) {
        for (let TB of this.text) BB.push(TB)
      }
      scanIdentical() {
        return 0
      }
      static split(BB, TB) {
        let dB = [],
          VB = -1;
        for (let yB of BB) dB.push(yB), VB += yB.length + 1, 32 == dB.length && (TB.push(new HB(dB, VB)), dB = [], VB = -1);
        return VB > -1 && TB.push(new HB(dB, VB)), TB
      }
    }
    class EB extends uB {
      constructor(BB, TB) {
        super(), this.children = BB, this.length = TB, this.lines = 0;
        for (let dB of BB) this.lines += dB.lines
      }
      lineInner(BB, TB, dB, VB) {
        for (let yB = 0;; yB++) {
          let pB = this.children[yB],
            lB = VB + pB.length,
            JB = dB + pB.lines - 1;
          if ((TB ? JB : lB) >= BB) return pB.lineInner(BB, TB, dB, VB);
          VB = lB + 1, dB = JB + 1
        }
      }
      decompose(BB, TB, dB, VB) {
        for (let yB = 0, pB = 0; pB <= TB && yB < this.children.length; yB++) {
          let lB = this.children[yB],
            JB = pB + lB.length;
          if (BB <= JB && TB >= pB) {
            let yB = VB & ((pB <= BB ? 1 : 0) | (JB >= TB ? 2 : 0));
            pB >= BB && JB <= TB && !yB ? dB.push(lB) : lB.decompose(BB - pB, TB - pB, dB, yB)
          }
          pB = JB + 1
        }
      }
      replace(BB, TB, dB) {
        if ([BB, TB] = sB(this, BB, TB), dB.lines < this.lines)
          for (let VB = 0, yB = 0; VB < this.children.length; VB++) {
            let pB = this.children[VB],
              lB = yB + pB.length;
            if (BB >= yB && TB <= lB) {
              let JB = pB.replace(BB - yB, TB - yB, dB),
                YB = this.lines - pB.lines + JB.lines;
              if (JB.lines < YB >> 4 && JB.lines > YB >> 6) {
                let yB = this.children.slice();
                return yB[VB] = JB, new EB(yB, this.length - (TB - BB) + dB.length)
              }
              return super.replace(yB, lB, JB)
            }
            yB = lB + 1
          }
        return super.replace(BB, TB, dB)
      }
      sliceString(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [BB, TB] = sB(this, BB, TB);
        let VB = "";
        for (let yB = 0, pB = 0; yB < this.children.length && pB <= TB; yB++) {
          let lB = this.children[yB],
            JB = pB + lB.length;
          pB > BB && yB && (VB += dB), BB < JB && TB > pB && (VB += lB.sliceString(BB - pB, TB - pB, dB)), pB = JB + 1
        }
        return VB
      }
      flatten(BB) {
        for (let TB of this.children) TB.flatten(BB)
      }
      scanIdentical(BB, TB) {
        if (!(BB instanceof EB)) return 0;
        let dB = 0,
          [VB, yB, pB, lB] = TB > 0 ? [0, 0, this.children.length, BB.children.length] : [this.children.length - 1, BB.children.length - 1, -1, -1];
        for (;; VB += TB, yB += TB) {
          if (VB == pB || yB == lB) return dB;
          let JB = this.children[VB],
            YB = BB.children[yB];
          if (JB != YB) return dB + JB.scanIdentical(YB, TB);
          dB += JB.length + 1
        }
      }
      static from(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BB.reduce(((BB, TB) => BB + TB.length + 1), -1),
          dB = 0;
        for (let LB of BB) dB += LB.lines;
        if (dB < 32) {
          let dB = [];
          for (let TB of BB) TB.flatten(dB);
          return new HB(dB, TB)
        }
        let VB = Math.max(32, dB >> 5),
          yB = VB << 1,
          pB = VB >> 1,
          lB = [],
          JB = 0,
          YB = -1,
          gB = [];

        function oB(BB) {
          let TB;
          if (BB.lines > yB && BB instanceof EB)
            for (let dB of BB.children) oB(dB);
          else BB.lines > pB && (JB > pB || !JB) ? (kB(), lB.push(BB)) : BB instanceof HB && JB && (TB = gB[gB.length - 1]) instanceof HB && BB.lines + TB.lines <= 32 ? (JB += BB.lines, YB += BB.length + 1, gB[gB.length - 1] = new HB(TB.text.concat(BB.text), TB.length + 1 + BB.length)) : (JB + BB.lines > VB && kB(), JB += BB.lines, YB += BB.length + 1, gB.push(BB))
        }

        function kB() {
          0 != JB && (lB.push(1 == gB.length ? gB[0] : EB.from(gB, YB)), YB = -1, JB = gB.length = 0)
        }
        for (let LB of BB) oB(LB);
        return kB(), 1 == lB.length ? lB[0] : new EB(lB, TB)
      }
    }

    function vB(BB, TB) {
      let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e9;
      for (let yB = 0, pB = 0, lB = !0; pB < BB.length && yB <= VB; pB++) {
        let JB = BB[pB],
          YB = yB + JB.length;
        YB >= dB && (YB > VB && (JB = JB.slice(0, VB - yB)), yB < dB && (JB = JB.slice(dB - yB)), lB ? (TB[TB.length - 1] += JB, lB = !1) : TB.push(JB)), yB = YB + 1
      }
      return TB
    }

    function mB(BB, TB, dB) {
      return vB(BB, [""], TB, dB)
    }
    uB.empty = new HB([""], 0);
    class iB {
      constructor(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.dir = TB, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [BB], this.offsets = [TB > 0 ? 1 : (BB instanceof HB ? BB.text.length : BB.children.length) << 1]
      }
      nextInner(BB, TB) {
        for (this.done = this.lineBreak = !1;;) {
          let dB = this.nodes.length - 1,
            VB = this.nodes[dB],
            yB = this.offsets[dB],
            pB = yB >> 1,
            lB = VB instanceof HB ? VB.text.length : VB.children.length;
          if (pB == (TB > 0 ? lB : 0)) {
            if (0 == dB) return this.done = !0, this.value = "", this;
            TB > 0 && this.offsets[dB - 1]++, this.nodes.pop(), this.offsets.pop()
          } else if ((1 & yB) == (TB > 0 ? 0 : 1)) {
            if (this.offsets[dB] += TB, 0 == BB) return this.lineBreak = !0, this.value = "\n", this;
            BB--
          } else if (VB instanceof HB) {
            let yB = VB.text[pB + (TB < 0 ? -1 : 0)];
            if (this.offsets[dB] += TB, yB.length > Math.max(0, BB)) return this.value = 0 == BB ? yB : TB > 0 ? yB.slice(BB) : yB.slice(0, yB.length - BB), this;
            BB -= yB.length
          } else {
            let yB = VB.children[pB + (TB < 0 ? -1 : 0)];
            BB > yB.length ? (BB -= yB.length, this.offsets[dB] += TB) : (TB < 0 && this.offsets[dB]--, this.nodes.push(yB), this.offsets.push(TB > 0 ? 1 : (yB instanceof HB ? yB.text.length : yB.children.length) << 1))
          }
        }
      }
      next() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return BB < 0 && (this.nextInner(-BB, -this.dir), BB = this.value.length), this.nextInner(BB, this.dir)
      }
    }
    class NB {
      constructor(BB, TB, dB) {
        this.value = "", this.done = !1, this.cursor = new iB(BB, TB > dB ? -1 : 1), this.pos = TB > dB ? BB.length : 0, this.from = Math.min(TB, dB), this.to = Math.max(TB, dB)
      }
      nextInner(BB, TB) {
        if (TB < 0 ? this.pos <= this.from : this.pos >= this.to) return this.value = "", this.done = !0, this;
        BB += Math.max(0, TB < 0 ? this.pos - this.to : this.from - this.pos);
        let dB = TB < 0 ? this.pos - this.from : this.to - this.pos;
        BB > dB && (BB = dB), dB -= BB;
        let {
          value: VB
        } = this.cursor.next(BB);
        return this.pos += (VB.length + BB) * TB, this.value = VB.length <= dB ? VB : TB < 0 ? VB.slice(VB.length - dB) : VB.slice(0, dB), this.done = !this.value, this
      }
      next() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return BB < 0 ? BB = Math.max(BB, this.from - this.pos) : BB > 0 && (BB = Math.min(BB, this.to - this.pos)), this.nextInner(BB, this.cursor.dir)
      }
      get lineBreak() {
        return this.cursor.lineBreak && "" != this.value
      }
    }
    class tB {
      constructor(BB) {
        this.inner = BB, this.afterBreak = !0, this.value = "", this.done = !1
      }
      next() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          {
            done: TB,
            lineBreak: dB,
            value: VB
          } = this.inner.next(BB);
        return TB && this.afterBreak ? (this.value = "", this.afterBreak = !1) : TB ? (this.done = !0, this.value = "") : dB ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = VB, this.afterBreak = !1), this
      }
      get lineBreak() {
        return !1
      }
    }
    "undefined" != typeof Symbol && (uB.prototype[Symbol.iterator] = function() {
      return this.iter()
    }, iB.prototype[Symbol.iterator] = NB.prototype[Symbol.iterator] = tB.prototype[Symbol.iterator] = function() {
      return this
    });
    class fB {
      constructor(BB, TB, dB, VB) {
        this.from = BB, this.to = TB, this.number = dB, this.text = VB
      }
      get length() {
        return this.to - this.from
      }
    }

    function sB(BB, TB, dB) {
      return [TB = Math.max(0, Math.min(BB.length, TB)), Math.max(TB, Math.min(BB.length, dB))]
    }

    function MB(BB, TB) {
      return YB(BB, TB, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function zB(BB, TB) {
      let dB = BB.charCodeAt(TB);
      if (!((VB = dB) >= 55296 && VB < 56320) || TB + 1 == BB.length) return dB;
      var VB;
      let yB = BB.charCodeAt(TB + 1);
      return function(BB) {
        return BB >= 56320 && BB < 57344
      }(yB) ? yB - 56320 + (dB - 55296 << 10) + 65536 : dB
    }

    function wB(BB) {
      return BB <= 65535 ? String.fromCharCode(BB) : (BB -= 65536, String.fromCharCode(55296 + (BB >> 10), 56320 + (1023 & BB)))
    }

    function UB(BB) {
      return BB < 65536 ? 1 : 2
    }
    const FB = /\r\n?|\n/;
    var KB = function(BB) {
      return BB[BB.Simple = 0] = "Simple", BB[BB.TrackDel = 1] = "TrackDel", BB[BB.TrackBefore = 2] = "TrackBefore", BB[BB.TrackAfter = 3] = "TrackAfter", BB
    }(KB || (KB = {}));
    class rB {
      constructor(BB) {
        this.sections = BB
      }
      get length() {
        let BB = 0;
        for (let TB = 0; TB < this.sections.length; TB += 2) BB += this.sections[TB];
        return BB
      }
      get newLength() {
        let BB = 0;
        for (let TB = 0; TB < this.sections.length; TB += 2) {
          let dB = this.sections[TB + 1];
          BB += dB < 0 ? this.sections[TB] : dB
        }
        return BB
      }
      get empty() {
        return 0 == this.sections.length || 2 == this.sections.length && this.sections[1] < 0
      }
      iterGaps(BB) {
        for (let TB = 0, dB = 0, VB = 0; TB < this.sections.length;) {
          let yB = this.sections[TB++],
            pB = this.sections[TB++];
          pB < 0 ? (BB(dB, VB, yB), VB += yB) : VB += pB, dB += yB
        }
      }
      iterChangedRanges(BB) {
        PB(this, BB, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get invertedDesc() {
        let BB = [];
        for (let TB = 0; TB < this.sections.length;) {
          let dB = this.sections[TB++],
            VB = this.sections[TB++];
          VB < 0 ? BB.push(dB, VB) : BB.push(VB, dB)
        }
        return new rB(BB)
      }
      composeDesc(BB) {
        return this.empty ? BB : BB.empty ? this : RB(this, BB)
      }
      mapDesc(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return BB.empty ? this : QB(this, BB, TB)
      }
      mapPos(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : KB.Simple,
          VB = 0,
          yB = 0;
        for (let pB = 0; pB < this.sections.length;) {
          let lB = this.sections[pB++],
            JB = this.sections[pB++],
            YB = VB + lB;
          if (JB < 0) {
            if (YB > BB) return yB + (BB - VB);
            yB += lB
          } else {
            if (dB != KB.Simple && YB >= BB && (dB == KB.TrackDel && VB < BB && YB > BB || dB == KB.TrackBefore && VB < BB || dB == KB.TrackAfter && YB > BB)) return null;
            if (YB > BB || YB == BB && TB < 0 && !lB) return BB == VB || TB < 0 ? yB : yB + JB;
            yB += JB
          }
          VB = YB
        }
        if (BB > VB) throw new RangeError(`Position ${BB} is out of range for changeset of length ${VB}`);
        return yB
      }
      touchesRange(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BB;
        for (let dB = 0, VB = 0; dB < this.sections.length && VB <= TB;) {
          let yB = VB + this.sections[dB++];
          if (this.sections[dB++] >= 0 && VB <= TB && yB >= BB) return !(VB < BB && yB > TB) || "cover";
          VB = yB
        }
        return !1
      }
      toString() {
        let BB = "";
        for (let TB = 0; TB < this.sections.length;) {
          let dB = this.sections[TB++],
            VB = this.sections[TB++];
          BB += (BB ? " " : "") + dB + (VB >= 0 ? ":" + VB : "")
        }
        return BB
      }
      toJSON() {
        return this.sections
      }
      static fromJSON(BB) {
        if (!Array.isArray(BB) || BB.length % 2 || BB.some((BB => "number" != typeof BB))) throw new RangeError("Invalid JSON representation of ChangeDesc");
        return new rB(BB)
      }
      static create(BB) {
        return new rB(BB)
      }
    }
    class IB extends rB {
      constructor(BB, TB) {
        super(BB), this.inserted = TB
      }
      apply(BB) {
        if (this.length != BB.length) throw new RangeError("Applying change set to a document with the wrong length");
        return PB(this, ((TB, dB, VB, yB, pB) => BB = BB.replace(VB, VB + (dB - TB), pB)), !1), BB
      }
      mapDesc(BB) {
        return QB(this, BB, arguments.length > 1 && void 0 !== arguments[1] && arguments[1], !0)
      }
      invert(BB) {
        let TB = this.sections.slice(),
          dB = [];
        for (let VB = 0, yB = 0; VB < TB.length; VB += 2) {
          let pB = TB[VB],
            lB = TB[VB + 1];
          if (lB >= 0) {
            TB[VB] = lB, TB[VB + 1] = pB;
            let JB = VB >> 1;
            for (; dB.length < JB;) dB.push(uB.empty);
            dB.push(pB ? BB.slice(yB, yB + pB) : uB.empty)
          }
          yB += pB
        }
        return new IB(TB, dB)
      }
      compose(BB) {
        return this.empty ? BB : BB.empty ? this : RB(this, BB, !0)
      }
      map(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return BB.empty ? this : QB(this, BB, TB, !0)
      }
      iterChanges(BB) {
        PB(this, BB, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get desc() {
        return rB.create(this.sections)
      }
      filter(BB) {
        let TB = [],
          dB = [],
          VB = [],
          yB = new aB(this);
        BB: for (let pB = 0, lB = 0;;) {
          let JB = pB == BB.length ? 1e9 : BB[pB++];
          for (; lB < JB || lB == JB && 0 == yB.len;) {
            if (yB.done) break BB;
            let BB = Math.min(yB.len, JB - lB);
            cB(VB, BB, -1);
            let pB = -1 == yB.ins ? -1 : 0 == yB.off ? yB.ins : 0;
            cB(TB, BB, pB), pB > 0 && SB(dB, TB, yB.text), yB.forward(BB), lB += BB
          }
          let YB = BB[pB++];
          for (; lB < YB;) {
            if (yB.done) break BB;
            let BB = Math.min(yB.len, YB - lB);
            cB(TB, BB, -1), cB(VB, BB, -1 == yB.ins ? -1 : 0 == yB.off ? yB.ins : 0), yB.forward(BB), lB += BB
          }
        }
        return {
          changes: new IB(TB, dB),
          filtered: rB.create(VB)
        }
      }
      toJSON() {
        let BB = [];
        for (let TB = 0; TB < this.sections.length; TB += 2) {
          let dB = this.sections[TB],
            VB = this.sections[TB + 1];
          VB < 0 ? BB.push(dB) : 0 == VB ? BB.push([dB]) : BB.push([dB].concat(this.inserted[TB >> 1].toJSON()))
        }
        return BB
      }
      static of (BB, TB, dB) {
        let VB = [],
          yB = [],
          pB = 0,
          lB = null;

        function JB() {
          if (!(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && !VB.length) return;
          pB < TB && cB(VB, TB - pB, -1);
          let BB = new IB(VB, yB);
          lB = lB ? lB.compose(BB.map(lB)) : BB, VB = [], yB = [], pB = 0
        }
        return function BB(YB) {
          if (Array.isArray(YB))
            for (let TB of YB) BB(TB);
          else if (YB instanceof IB) {
            if (YB.length != TB) throw new RangeError(`Mismatched change set length (got ${YB.length}, expected ${TB})`);
            JB(), lB = lB ? lB.compose(YB.map(lB)) : YB
          } else {
            let {
              from: BB,
              to: lB = BB,
              insert: gB
            } = YB;
            if (BB > lB || BB < 0 || lB > TB) throw new RangeError(`Invalid change range ${BB} to ${lB} (in doc of length ${TB})`);
            let oB = gB ? "string" == typeof gB ? uB.of(gB.split(dB || FB)) : gB : uB.empty,
              kB = oB.length;
            if (BB == lB && 0 == kB) return;
            BB < pB && JB(), BB > pB && cB(VB, BB - pB, -1), cB(VB, lB - BB, kB), SB(yB, VB, oB), pB = lB
          }
        }(BB), JB(!lB), lB
      }
      static empty(BB) {
        return new IB(BB ? [BB, -1] : [], [])
      }
      static fromJSON(BB) {
        if (!Array.isArray(BB)) throw new RangeError("Invalid JSON representation of ChangeSet");
        let TB = [],
          dB = [];
        for (let VB = 0; VB < BB.length; VB++) {
          let yB = BB[VB];
          if ("number" == typeof yB) TB.push(yB, -1);
          else {
            if (!Array.isArray(yB) || "number" != typeof yB[0] || yB.some(((BB, TB) => TB && "string" != typeof BB))) throw new RangeError("Invalid JSON representation of ChangeSet");
            if (1 == yB.length) TB.push(yB[0], 0);
            else {
              for (; dB.length < VB;) dB.push(uB.empty);
              dB[VB] = uB.of(yB.slice(1)), TB.push(yB[0], dB[VB].length)
            }
          }
        }
        return new IB(TB, dB)
      }
      static createSet(BB, TB) {
        return new IB(BB, TB)
      }
    }

    function cB(BB, TB, dB) {
      let VB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (0 == TB && dB <= 0) return;
      let yB = BB.length - 2;
      yB >= 0 && dB <= 0 && dB == BB[yB + 1] ? BB[yB] += TB : yB >= 0 && 0 == TB && 0 == BB[yB] ? BB[yB + 1] += dB : VB ? (BB[yB] += TB, BB[yB + 1] += dB) : BB.push(TB, dB)
    }

    function SB(BB, TB, dB) {
      if (0 == dB.length) return;
      let VB = TB.length - 2 >> 1;
      if (VB < BB.length) BB[BB.length - 1] = BB[BB.length - 1].append(dB);
      else {
        for (; BB.length < VB;) BB.push(uB.empty);
        BB.push(dB)
      }
    }

    function PB(BB, TB, dB) {
      let VB = BB.inserted;
      for (let yB = 0, pB = 0, lB = 0; lB < BB.sections.length;) {
        let JB = BB.sections[lB++],
          YB = BB.sections[lB++];
        if (YB < 0) yB += JB, pB += JB;
        else {
          let gB = yB,
            oB = pB,
            kB = uB.empty;
          for (; gB += JB, oB += YB, YB && VB && (kB = kB.append(VB[lB - 2 >> 1])), !(dB || lB == BB.sections.length || BB.sections[lB + 1] < 0);) JB = BB.sections[lB++], YB = BB.sections[lB++];
          TB(yB, gB, pB, oB, kB), yB = gB, pB = oB
        }
      }
    }

    function QB(BB, TB, dB) {
      let VB = [],
        yB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3] ? [] : null,
        pB = new aB(BB),
        lB = new aB(TB),
        JB = 0;
      for (let YB = -1;;) {
        if (++JB > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - likely malformed ChangeSet");
        if (pB.done && lB.len || lB.done && pB.len) throw new Error("Mismatched change set lengths");
        if (-1 == pB.ins && -1 == lB.ins) {
          let BB = Math.min(pB.len, lB.len);
          cB(VB, BB, -1), pB.forward(BB), lB.forward(BB)
        } else if (lB.ins >= 0 && (pB.ins < 0 || YB == pB.i || 0 == pB.off && (lB.len < pB.len || lB.len == pB.len && !dB))) {
          let BB = lB.len;
          for (cB(VB, lB.ins, -1); BB;) {
            if (++JB > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-b");
            let TB = Math.min(pB.len, BB);
            pB.ins >= 0 && YB < pB.i && pB.len <= TB && (cB(VB, 0, pB.ins), yB && SB(yB, VB, pB.text), YB = pB.i), pB.forward(TB), BB -= TB
          }
          lB.next()
        } else {
          if (!(pB.ins >= 0)) {
            if (pB.done && lB.done) return yB ? IB.createSet(VB, yB) : rB.create(VB);
            throw new Error("Mismatched change set lengths")
          } {
            let BB = 0,
              TB = pB.len;
            for (; TB;) {
              if (++JB > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-a");
              if (-1 == lB.ins) {
                let dB = Math.min(TB, lB.len);
                BB += dB, TB -= dB, lB.forward(dB)
              } else {
                if (!(0 == lB.ins && lB.len < TB)) break;
                TB -= lB.len, lB.next()
              }
            }
            cB(VB, BB, YB < pB.i ? pB.ins : 0), yB && YB < pB.i && SB(yB, VB, pB.text), YB = pB.i, pB.forward(pB.len - TB)
          }
        }
      }
    }

    function RB(BB, TB) {
      let dB = [],
        VB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? [] : null,
        yB = new aB(BB),
        pB = new aB(TB),
        lB = 0;
      for (let JB = !1;;) {
        if (++lB > 2e6) throw new Error("BLOXD CODEMIRROR: composeSets exceeded max iterations - likely malformed ChangeSet");
        if (yB.done && pB.done) return VB ? IB.createSet(dB, VB) : rB.create(dB);
        if (0 == yB.ins) cB(dB, yB.len, 0, JB), yB.next();
        else if (0 != pB.len || pB.done) {
          if (yB.done || pB.done) throw new Error("Mismatched change set lengths");
          {
            let BB = Math.min(yB.len2, pB.len),
              TB = dB.length;
            if (-1 == yB.ins) {
              let TB = -1 == pB.ins ? -1 : pB.off ? 0 : pB.ins;
              cB(dB, BB, TB, JB), VB && TB && SB(VB, dB, pB.text)
            } else - 1 == pB.ins ? (cB(dB, yB.off ? 0 : yB.len, BB, JB), VB && SB(VB, dB, yB.textBit(BB))) : (cB(dB, yB.off ? 0 : yB.len, pB.off ? 0 : pB.ins, JB), VB && !pB.off && SB(VB, dB, pB.text));
            JB = (yB.ins > BB || pB.ins >= 0 && pB.len > BB) && (JB || dB.length > TB), yB.forward2(BB), pB.forward(BB)
          }
        } else cB(dB, 0, pB.ins, JB), VB && SB(VB, dB, pB.text), pB.next()
      }
    }
    class aB {
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
        } = this.set, TB = this.i - 2 >> 1;
        return TB >= BB.length ? uB.empty : BB[TB]
      }
      textBit(BB) {
        let {
          inserted: TB
        } = this.set, dB = this.i - 2 >> 1;
        return dB >= TB.length && !BB ? uB.empty : TB[dB].slice(this.off, null == BB ? void 0 : this.off + BB)
      }
      forward(BB) {
        BB == this.len ? this.next() : (this.len -= BB, this.off += BB)
      }
      forward2(BB) {
        -1 == this.ins ? this.forward(BB) : BB == this.ins ? this.next() : (this.ins -= BB, this.off += BB)
      }
    }
    class ZB {
      constructor(BB, TB, dB) {
        this.from = BB, this.to = TB, this.flags = dB
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
        let TB, dB, VB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return this.empty ? TB = dB = BB.mapPos(this.from, VB) : (TB = BB.mapPos(this.from, 1), dB = BB.mapPos(this.to, -1)), TB == this.from && dB == this.to ? this : new ZB(TB, dB, this.flags)
      }
      extend(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BB,
          dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (BB <= this.anchor && TB >= this.anchor) return XB.range(BB, TB, void 0, void 0, dB);
        let VB = Math.abs(BB - this.anchor) > Math.abs(TB - this.anchor) ? BB : TB;
        return XB.range(this.anchor, VB, void 0, void 0, dB)
      }
      eq(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.anchor == BB.anchor && this.head == BB.head && this.goalColumn == BB.goalColumn && (!TB || !this.empty || this.assoc == BB.assoc)
      }
      toJSON() {
        return {
          anchor: this.anchor,
          head: this.head
        }
      }
      static fromJSON(BB) {
        if (!BB || "number" != typeof BB.anchor || "number" != typeof BB.head) throw new RangeError("Invalid JSON representation for SelectionRange");
        return XB.range(BB.anchor, BB.head)
      }
      static create(BB, TB, dB) {
        return new ZB(BB, TB, dB)
      }
    }
    class XB {
      constructor(BB, TB) {
        this.ek = BB, this.mainIndex = TB
      }
      map(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return BB.empty ? this : XB.create(this.ek.map((dB => dB.map(BB, TB))), this.mainIndex)
      }
      eq(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.ek.length != BB.ek.length || this.mainIndex != BB.mainIndex) return !1;
        for (let dB = 0; dB < this.ek.length; dB++)
          if (!this.ek[dB].eq(BB.ek[dB], TB)) return !1;
        return !0
      }
      get main() {
        return this.ek[this.mainIndex]
      }
      asSingle() {
        return 1 == this.ek.length ? this : new XB([this.main], 0)
      }
      addRange(BB) {
        let TB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return XB.create([BB].concat(this.ek), TB ? 0 : this.mainIndex + 1)
      }
      replaceRange(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.mainIndex,
          dB = this.ek.slice();
        return dB[TB] = BB, XB.create(dB, this.mainIndex)
      }
      toJSON() {
        return {
          ek: this.ek.map((BB => BB.toJSON())),
          main: this.mainIndex
        }
      }
      static fromJSON(BB) {
        if (!BB || !Array.isArray(BB.ek) || "number" != typeof BB.main || BB.main >= BB.ek.length) throw new RangeError("Invalid JSON representation for EditorSelection");
        return new XB(BB.ek.map((BB => ZB.fromJSON(BB))), BB.main)
      }
      static single(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BB;
        return new XB([XB.range(BB, TB)], 0)
      }
      static create(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (0 == BB.length) throw new RangeError("A selection needs at least one range");
        for (let dB = 0, VB = 0; VB < BB.length; VB++) {
          let yB = BB[VB];
          if (yB.empty ? yB.from <= dB : yB.from < dB) return XB.normalized(BB.slice(), TB);
          dB = yB.to
        }
        return new XB(BB, TB)
      }
      static cursor(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          dB = arguments.length > 2 ? arguments[2] : void 0,
          VB = arguments.length > 3 ? arguments[3] : void 0;
        return ZB.create(BB, BB, (0 == TB ? 0 : TB < 0 ? 8 : 16) | (null == dB ? 7 : Math.min(6, dB)) | (null !== VB && void 0 !== VB ? VB : 16777215) << 6)
      }
      static range(BB, TB, dB, VB, yB) {
        let pB = (null !== dB && void 0 !== dB ? dB : 16777215) << 6 | (null == VB ? 7 : Math.min(6, VB));
        return yB || BB == TB || (yB = TB < BB ? 1 : -1), TB < BB ? ZB.create(TB, BB, 48 | pB) : ZB.create(BB, TB, (yB ? yB < 0 ? 8 : 16 : 0) | pB)
      }
      static normalized(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          dB = BB[TB];
        BB.sort(((BB, TB) => BB.from - TB.from)), TB = BB.indexOf(dB);
        for (let VB = 1; VB < BB.length; VB++) {
          let dB = BB[VB],
            yB = BB[VB - 1];
          if (dB.empty ? dB.from <= yB.to : dB.from < yB.to) {
            let pB = yB.from,
              lB = Math.max(dB.to, yB.to);
            VB <= TB && TB--, BB.splice(--VB, 2, dB.anchor > dB.head ? XB.range(lB, pB) : XB.range(pB, lB))
          }
        }
        return new XB(BB, TB)
      }
    }

    function WB(BB, TB) {
      for (let dB of BB.ek)
        if (dB.to > TB) throw new RangeError("Selection points outside of document")
    }
    let hB = 0;
    class CB {
      constructor(BB, TB, dB, VB, yB) {
        this.combine = BB, this.compareInput = TB, this.compare = dB, this.isStatic = VB, this.id = hB++, this.default = BB([]), this.extensions = "function" == typeof yB ? yB(this) : yB
      }
      get reader() {
        return this
      }
      static define() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return new CB(BB.combine || (BB => BB), BB.compareInput || ((BB, TB) => BB === TB), BB.compare || (BB.combine ? (BB, TB) => BB === TB : GB), !!BB.static, BB.enables)
      }
      of(BB) {
        return new qB([], this, 0, BB)
      }
      compute(BB, TB) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new qB(BB, this, 1, TB)
      }
      computeN(BB, TB) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new qB(BB, this, 2, TB)
      }
      from(BB, TB) {
        return TB || (TB = BB => BB), this.compute([BB], (dB => TB(dB.field(BB))))
      }
    }

    function GB(BB, TB) {
      return BB == TB || BB.length == TB.length && BB.every(((BB, dB) => BB === TB[dB]))
    }
    class qB {
      constructor(BB, TB, dB, VB) {
        this.dependencies = BB, this.facet = TB, this.type = dB, this.value = VB, this.id = hB++
      }
      dynamicSlot(BB) {
        var TB;
        let dB = this.value,
          VB = this.facet.compareInput,
          yB = this.id,
          pB = BB[yB] >> 1,
          lB = 2 == this.type,
          JB = !1,
          YB = !1,
          gB = [];
        for (let oB of this.dependencies) "doc" == oB ? JB = !0 : "selection" == oB ? YB = !0 : 0 == (1 & (null !== (TB = BB[oB.id]) && void 0 !== TB ? TB : 1)) && gB.push(BB[oB.id]);
        return {
          create: BB => (BB.values[pB] = dB(BB), 1),
          update(BB, TB) {
            if (JB && TB.docChanged || YB && (TB.docChanged || TB.selection) || jB(BB, gB)) {
              let TB = dB(BB);
              if (lB ? !xB(TB, BB.values[pB], VB) : !VB(TB, BB.values[pB])) return BB.values[pB] = TB, 1
            }
            return 0
          },
          reconfigure: (BB, TB) => {
            let JB, YB = TB.config.address[yB];
            if (null != YB) {
              let yB = oT(TB, YB);
              if (this.dependencies.every((dB => dB instanceof CB ? TB.facet(dB) === BB.facet(dB) : !(dB instanceof nB) || TB.field(dB, !1) == BB.field(dB, !1))) || (lB ? xB(JB = dB(BB), yB, VB) : VB(JB = dB(BB), yB))) return BB.values[pB] = yB, 0
            } else JB = dB(BB);
            return BB.values[pB] = JB, 1
          }
        }
      }
    }

    function xB(BB, TB, dB) {
      if (BB.length != TB.length) return !1;
      for (let VB = 0; VB < BB.length; VB++)
        if (!dB(BB[VB], TB[VB])) return !1;
      return !0
    }

    function jB(BB, TB) {
      let dB = !1;
      for (let VB of TB) 1 & gT(BB, VB) && (dB = !0);
      return dB
    }

    function AB(BB, TB, dB) {
      let VB = dB.map((TB => BB[TB.id])),
        yB = dB.map((BB => BB.type)),
        pB = VB.filter((BB => !(1 & BB))),
        lB = BB[TB.id] >> 1;

      function JB(BB) {
        let dB = [];
        for (let TB = 0; TB < VB.length; TB++) {
          let pB = oT(BB, VB[TB]);
          if (2 == yB[TB])
            for (let BB of pB) dB.push(BB);
          else dB.push(pB)
        }
        return TB.combine(dB)
      }
      return {
        create(BB) {
          for (let TB of VB) gT(BB, TB);
          return BB.values[lB] = JB(BB), 1
        },
        update(BB, dB) {
          if (!jB(BB, pB)) return 0;
          let VB = JB(BB);
          return TB.compare(VB, BB.values[lB]) ? 0 : (BB.values[lB] = VB, 1)
        },
        reconfigure(BB, yB) {
          let pB = jB(BB, VB),
            YB = yB.config.facets[TB.id],
            gB = yB.facet(TB);
          if (YB && !pB && GB(dB, YB)) return BB.values[lB] = gB, 0;
          let oB = JB(BB);
          return TB.compare(oB, gB) ? (BB.values[lB] = gB, 0) : (BB.values[lB] = oB, 1)
        }
      }
    }
    const bB = CB.define({
      static: !0
    });
    class nB {
      constructor(BB, TB, dB, VB, yB) {
        this.id = BB, this.createF = TB, this.updateF = dB, this.compareF = VB, this.spec = yB, this.provides = void 0
      }
      static define(BB) {
        let TB = new nB(hB++, BB.create, BB.update, BB.compare || ((BB, TB) => BB === TB), BB);
        return BB.provide && (TB.provides = BB.provide(TB)), TB
      }
      create(BB) {
        let TB = BB.facet(bB).find((BB => BB.field == this));
        return ((null === TB || void 0 === TB ? void 0 : TB.create) || this.createF)(BB)
      }
      slot(BB) {
        let TB = BB[this.id] >> 1;
        return {
          create: BB => (BB.values[TB] = this.create(BB), 1),
          update: (BB, dB) => {
            let VB = BB.values[TB],
              yB = this.updateF(VB, dB);
            return this.compareF(VB, yB) ? 0 : (BB.values[TB] = yB, 1)
          },
          reconfigure: (BB, dB) => {
            let VB, yB = BB.facet(bB),
              pB = dB.facet(bB);
            return (VB = yB.find((BB => BB.field == this))) && VB != pB.find((BB => BB.field == this)) ? (BB.values[TB] = VB.create(BB), 1) : null != dB.config.address[this.id] ? (BB.values[TB] = dB.field(this), 0) : (BB.values[TB] = this.create(BB), 1)
          }
        }
      }
      init(BB) {
        return [this, bB.of({
          field: this,
          create: BB
        })]
      }
      get extension() {
        return this
      }
    }
    const eB = 4,
      BT = 3,
      TT = 2,
      dT = 1;

    function VT(BB) {
      return TB => new pT(TB, BB)
    }
    const yT = {
      highest: VT(0),
      high: VT(dT),
      default: VT(TT),
      low: VT(BT),
      lowest: VT(eB)
    };
    class pT {
      constructor(BB, TB) {
        this.inner = BB, this.prec = TB
      }
    }
    class lT {
      of(BB) {
        return new JT(this, BB)
      }
      reconfigure(BB) {
        return lT.reconfigure.of({
          compartment: this,
          extension: BB
        })
      }
      get(BB) {
        return BB.config.compartments.get(this)
      }
    }
    class JT {
      constructor(BB, TB) {
        this.compartment = BB, this.inner = TB
      }
    }
    class YT {
      constructor(BB, TB, dB, VB, yB, pB) {
        for (this.base = BB, this.compartments = TB, this.dynamicSlots = dB, this.address = VB, this.staticValues = yB, this.facets = pB, this.statusTemplate = []; this.statusTemplate.length < dB.length;) this.statusTemplate.push(0)
      }
      staticFacet(BB) {
        let TB = this.address[BB.id];
        return null == TB ? BB.default : this.staticValues[TB >> 1]
      }
      static resolve(BB, TB, dB) {
        let VB = [],
          yB = Object.create(null),
          pB = new Map;
        for (let kB of function(BB, TB, dB) {
            let VB = [
                [],
                [],
                [],
                [],
                []
              ],
              yB = new Map;

            function pB(BB, lB) {
              let JB = yB.get(BB);
              if (null != JB) {
                if (JB <= lB) return;
                let TB = VB[JB].indexOf(BB);
                TB > -1 && VB[JB].splice(TB, 1), BB instanceof JT && dB.delete(BB.compartment)
              }
              if (yB.set(BB, lB), Array.isArray(BB))
                for (let TB of BB) pB(TB, lB);
              else if (BB instanceof JT) {
                if (dB.has(BB.compartment)) throw new RangeError("Duplicate use of compartment in extensions");
                let VB = TB.get(BB.compartment) || BB.inner;
                dB.set(BB.compartment, VB), pB(VB, lB)
              } else if (BB instanceof pT) pB(BB.inner, BB.prec);
              else if (BB instanceof nB) VB[lB].push(BB), BB.provides && pB(BB.provides, lB);
              else if (BB instanceof qB) VB[lB].push(BB), BB.facet.extensions && pB(BB.facet.extensions, TT);
              else {
                let TB = BB.extension;
                if (!TB) throw new Error(`Unrecognized extension value in extension set (${BB}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
                pB(TB, lB)
              }
            }
            return pB(BB, TT), VB.reduce(((BB, TB) => BB.concat(TB)))
          }(BB, TB, pB)) kB instanceof nB ? VB.push(kB) : (yB[kB.facet.id] || (yB[kB.facet.id] = [])).push(kB);
        let lB = Object.create(null),
          JB = [],
          YB = [];
        for (let kB of VB) lB[kB.id] = YB.length << 1, YB.push((BB => kB.slot(BB)));
        let gB = null === dB || void 0 === dB ? void 0 : dB.config.facets;
        for (let kB in yB) {
          let BB = yB[kB],
            TB = BB[0].facet,
            VB = gB && gB[kB] || [];
          if (BB.every((BB => 0 == BB.type)))
            if (lB[TB.id] = JB.length << 1 | 1, GB(VB, BB)) JB.push(dB.facet(TB));
            else {
              let VB = TB.combine(BB.map((BB => BB.value)));
              JB.push(dB && TB.compare(VB, dB.facet(TB)) ? dB.facet(TB) : VB)
            }
          else {
            for (let TB of BB) 0 == TB.type ? (lB[TB.id] = JB.length << 1 | 1, JB.push(TB.value)) : (lB[TB.id] = YB.length << 1, YB.push((BB => TB.dynamicSlot(BB))));
            lB[TB.id] = YB.length << 1, YB.push((dB => AB(dB, TB, BB)))
          }
        }
        let oB = YB.map((BB => BB(lB)));
        return new YT(BB, pB, oB, lB, JB, yB)
      }
    }

    function gT(BB, TB) {
      if (1 & TB) return 2;
      let dB = TB >> 1,
        VB = BB.status[dB];
      if (4 == VB) throw new Error("Cyclic dependency between fields and/or facets");
      if (2 & VB) return VB;
      BB.status[dB] = 4;
      let yB = BB.computeSlot(BB, BB.config.dynamicSlots[dB]);
      return BB.status[dB] = 2 | yB
    }

    function oT(BB, TB) {
      return 1 & TB ? BB.config.staticValues[TB >> 1] : BB.values[TB >> 1]
    }
    const kT = CB.define(),
      LT = CB.define({
        combine: BB => BB.some((BB => BB)),
        static: !0
      }),
      OT = CB.define({
        combine: BB => BB.length ? BB[0] : void 0,
        static: !0
      }),
      DT = CB.define(),
      uT = CB.define(),
      HT = CB.define(),
      ET = CB.define({
        combine: BB => !!BB.length && BB[0]
      });
    class vT {
      constructor(BB, TB) {
        this.type = BB, this.value = TB
      }
      static define() {
        return new mT
      }
    }
    class mT {
      of(BB) {
        return new vT(this, BB)
      }
    }
    class iT {
      constructor(BB) {
        this.map = BB
      }
      of(BB) {
        return new NT(this, BB)
      }
    }
    class NT {
      constructor(BB, TB) {
        this.type = BB, this.value = TB
      }
      map(BB) {
        let TB = this.type.map(this.value, BB);
        return void 0 === TB ? void 0 : TB == this.value ? this : new NT(this.type, TB)
      }
      is(BB) {
        return this.type == BB
      }
      static define() {
        return new iT((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).map || (BB => BB))
      }
      static mapEffects(BB, TB) {
        if (!BB.length) return BB;
        let dB = [];
        for (let VB of BB) {
          let BB = VB.map(TB);
          BB && dB.push(BB)
        }
        return dB
      }
    }
    NT.reconfigure = NT.define(), NT.appendConfig = NT.define();
    class tT {
      constructor(BB, TB, dB, VB, yB, pB) {
        this.startState = BB, this.changes = TB, this.selection = dB, this.effects = VB, this.annotations = yB, this.scrollIntoView = pB, this._doc = null, this._state = null, dB && WB(dB, TB.newLength), yB.some((BB => BB.type == tT.time)) || (this.annotations = yB.concat(tT.time.of(Date.now())))
      }
      static create(BB, TB, dB, VB, yB, pB) {
        return new tT(BB, TB, dB, VB, yB, pB)
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
        for (let TB of this.annotations)
          if (TB.type == BB) return TB.value
      }
      get docChanged() {
        return !this.changes.empty
      }
      get reconfigured() {
        return this.startState.config != this.state.config
      }
      isUserEvent(BB) {
        let TB = this.annotation(tT.userEvent);
        return !(!TB || !(TB == BB || TB.length > BB.length && TB.slice(0, BB.length) == BB && "." == TB[BB.length]))
      }
    }

    function fT(BB, TB) {
      let dB = [];
      for (let VB = 0, yB = 0;;) {
        let pB, lB;
        if (VB < BB.length && (yB == TB.length || TB[yB] >= BB[VB])) pB = BB[VB++], lB = BB[VB++];
        else {
          if (!(yB < TB.length)) return dB;
          pB = TB[yB++], lB = TB[yB++]
        }!dB.length || dB[dB.length - 1] < pB ? dB.push(pB, lB) : dB[dB.length - 1] < lB && (dB[dB.length - 1] = lB)
      }
    }

    function sT(BB, TB, dB) {
      var VB;
      let yB, pB, lB;
      return dB ? (yB = TB.changes, pB = IB.empty(TB.changes.length), lB = BB.changes.compose(TB.changes)) : (yB = TB.changes.map(BB.changes), pB = BB.changes.mapDesc(TB.changes, !0), lB = BB.changes.compose(yB)), {
        changes: lB,
        selection: TB.selection ? TB.selection.map(pB) : null === (VB = BB.selection) || void 0 === VB ? void 0 : VB.map(yB),
        effects: NT.mapEffects(BB.effects, yB).concat(NT.mapEffects(TB.effects, pB)),
        annotations: BB.annotations.length ? BB.annotations.concat(TB.annotations) : TB.annotations,
        scrollIntoView: BB.scrollIntoView || TB.scrollIntoView
      }
    }

    function MT(BB, TB, dB) {
      let VB = TB.selection,
        yB = UT(TB.annotations);
      return TB.userEvent && (yB = yB.concat(tT.userEvent.of(TB.userEvent))), {
        changes: TB.changes instanceof IB ? TB.changes : IB.of(TB.changes || [], dB, BB.facet(OT)),
        selection: VB && (VB instanceof XB ? VB : XB.single(VB.anchor, VB.head)),
        effects: UT(TB.effects),
        annotations: yB,
        scrollIntoView: !!TB.scrollIntoView
      }
    }

    function zT(BB, TB, dB) {
      let VB = MT(BB, TB.length ? TB[0] : {}, BB.doc.length);
      TB.length && !1 === TB[0].filter && (dB = !1);
      for (let pB = 1; pB < TB.length; pB++) {
        !1 === TB[pB].filter && (dB = !1);
        let yB = !!TB[pB].sequential;
        VB = sT(VB, MT(BB, TB[pB], yB ? VB.changes.newLength : BB.doc.length), yB)
      }
      let yB = tT.create(BB, VB.changes, VB.selection, VB.effects, VB.annotations, VB.scrollIntoView);
      return function(BB) {
        let TB = BB.startState,
          dB = TB.facet(HT),
          VB = BB;
        for (let yB = dB.length - 1; yB >= 0; yB--) {
          let pB = dB[yB](BB);
          pB && Object.keys(pB).length && (VB = sT(VB, MT(TB, pB, BB.changes.newLength), !0))
        }
        return VB == BB ? BB : tT.create(TB, BB.changes, BB.selection, VB.effects, VB.annotations, VB.scrollIntoView)
      }(dB ? function(BB) {
        let TB = BB.startState,
          dB = !0;
        for (let yB of TB.facet(DT)) {
          let TB = yB(BB);
          if (!1 === TB) {
            dB = !1;
            break
          }
          Array.isArray(TB) && (dB = !0 === dB ? TB : fT(dB, TB))
        }
        if (!0 !== dB) {
          let VB, yB;
          if (!1 === dB) yB = BB.changes.invertedDesc, VB = IB.empty(TB.doc.length);
          else {
            let TB = BB.changes.filter(dB);
            VB = TB.changes, yB = TB.filtered.mapDesc(TB.changes).invertedDesc
          }
          BB = tT.create(TB, VB, BB.selection && BB.selection.map(yB), NT.mapEffects(BB.effects, yB), BB.annotations, BB.scrollIntoView)
        }
        let VB = TB.facet(uT);
        for (let yB = VB.length - 1; yB >= 0; yB--) {
          let dB = VB[yB](BB);
          BB = dB instanceof tT ? dB : Array.isArray(dB) && 1 == dB.length && dB[0] instanceof tT ? dB[0] : zT(TB, UT(dB), !1)
        }
        return BB
      }(yB) : yB)
    }
    tT.time = vT.define(), tT.userEvent = vT.define(), tT.addToHistory = vT.define(), tT.remote = vT.define();
    const wT = [];

    function UT(BB) {
      return null == BB ? wT : Array.isArray(BB) ? BB : [BB]
    }
    var FT = function(BB) {
      return BB[BB.Word = 0] = "Word", BB[BB.Space = 1] = "Space", BB[BB.Other = 2] = "Other", BB
    }(FT || (FT = {}));
    const KT = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
    let rT;
    try {
      rT = new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u")
    } catch (dd) {}

    function IT(BB) {
      return TB => {
        if (!/\S/.test(TB)) return FT.Space;
        if (function(BB) {
            if (rT) return rT.test(BB);
            for (let TB = 0; TB < BB.length; TB++) {
              let dB = BB[TB];
              if (/\w/.test(dB) || dB > "\x80" && (dB.toUpperCase() != dB.toLowerCase() || KT.test(dB))) return !0
            }
            return !1
          }(TB)) return FT.Word;
        for (let dB = 0; dB < BB.length; dB++)
          if (TB.indexOf(BB[dB]) > -1) return FT.Word;
        return FT.Other
      }
    }
    class cT {
      constructor(BB, TB, dB, VB, yB, pB) {
        this.config = BB, this.doc = TB, this.selection = dB, this.values = VB, this.status = BB.statusTemplate.slice(), this.computeSlot = yB, pB && (pB._state = this);
        for (let lB = 0; lB < this.config.dynamicSlots.length; lB++) gT(this, lB << 1);
        this.computeSlot = null
      }
      field(BB) {
        let TB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          dB = this.config.address[BB.id];
        if (null != dB) return gT(this, dB), oT(this, dB);
        if (TB) throw new RangeError("Field is not present in this state")
      }
      update() {
        for (var BB = arguments.length, TB = new Array(BB), dB = 0; dB < BB; dB++) TB[dB] = arguments[dB];
        return zT(this, TB, !0)
      }
      applyTransaction(BB) {
        let TB, dB = this.config,
          {
            base: VB,
            compartments: yB
          } = dB;
        for (let lB of BB.effects) lB.is(lT.reconfigure) ? (dB && (yB = new Map, dB.compartments.forEach(((BB, TB) => yB.set(TB, BB))), dB = null), yB.set(lB.value.compartment, lB.value.extension)) : lB.is(NT.reconfigure) ? (dB = null, VB = lB.value) : lB.is(NT.appendConfig) && (dB = null, VB = UT(VB).concat(lB.value));
        if (dB) TB = BB.startState.values.slice();
        else {
          dB = YT.resolve(VB, yB, this), TB = new cT(dB, this.doc, this.selection, dB.dynamicSlots.map((() => null)), ((BB, TB) => TB.reconfigure(BB, this)), null).values
        }
        let pB = BB.startState.facet(LT) ? BB.newSelection : BB.newSelection.asSingle();
        new cT(dB, BB.newDoc, pB, TB, ((TB, dB) => dB.update(TB, BB)), BB)
      }
      replaceSelection(BB) {
        return "string" == typeof BB && (BB = this.toText(BB)), this.changeByRange((TB => ({
          changes: {
            from: TB.from,
            to: TB.to,
            insert: BB
          },
          range: XB.cursor(TB.from + BB.length)
        })))
      }
      changeByRange(BB) {
        let TB = this.selection,
          dB = BB(TB.ek[0]),
          VB = this.changes(dB.changes),
          yB = [dB.range],
          pB = UT(dB.effects);
        for (let lB = 1; lB < TB.ek.length; lB++) {
          let dB = BB(TB.ek[lB]),
            JB = this.changes(dB.changes),
            YB = JB.map(VB);
          for (let BB = 0; BB < lB; BB++) yB[BB] = yB[BB].map(YB);
          let gB = VB.mapDesc(JB, !0);
          yB.push(dB.range.map(gB)), VB = VB.compose(YB), pB = NT.mapEffects(pB, YB).concat(NT.mapEffects(UT(dB.effects), gB))
        }
        return {
          changes: VB,
          selection: XB.create(yB, TB.mainIndex),
          effects: pB
        }
      }
      changes() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return BB instanceof IB ? BB : IB.of(BB, this.doc.length, this.facet(cT.lineSeparator))
      }
      toText(BB) {
        return uB.of(BB.split(this.facet(cT.lineSeparator) || FB))
      }
      sliceDoc() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.doc.length;
        return this.doc.sliceString(BB, TB, this.lineBreak)
      }
      facet(BB) {
        let TB = this.config.address[BB.id];
        return null == TB ? BB.default : (gT(this, TB), oT(this, TB))
      }
      toJSON(BB) {
        let TB = {
          doc: this.sliceDoc(),
          selection: this.selection.toJSON()
        };
        if (BB)
          for (let dB in BB) {
            let VB = BB[dB];
            VB instanceof nB && null != this.config.address[VB.id] && (TB[dB] = VB.spec.toJSON(this.field(BB[dB]), this))
          }
        return TB
      }
      static fromJSON(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          dB = arguments.length > 2 ? arguments[2] : void 0;
        if (!BB || "string" != typeof BB.doc) throw new RangeError("Invalid JSON representation for EditorState");
        let VB = [];
        if (dB)
          for (let yB in dB)
            if (Object.prototype.hasOwnProperty.call(BB, yB)) {
              let TB = dB[yB],
                pB = BB[yB];
              VB.push(TB.init((BB => TB.spec.fromJSON(pB, BB))))
            } return cT.create({
          doc: BB.doc,
          selection: XB.fromJSON(BB.selection),
          extensions: TB.extensions ? VB.concat([TB.extensions]) : VB
        })
      }
      static create() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          TB = YT.resolve(BB.extensions || [], new Map),
          dB = BB.doc instanceof uB ? BB.doc : uB.of((BB.doc || "").split(TB.staticFacet(cT.lineSeparator) || FB)),
          VB = BB.selection ? BB.selection instanceof XB ? BB.selection : XB.single(BB.selection.anchor, BB.selection.head) : XB.single(0);
        return WB(VB, dB.length), TB.staticFacet(LT) || (VB = VB.asSingle()), new cT(TB, dB, VB, TB.dynamicSlots.map((() => null)), ((BB, TB) => TB.create(BB)), null)
      }
      get tabSize() {
        return this.facet(cT.tabSize)
      }
      get lineBreak() {
        return this.facet(cT.lineSeparator) || "\n"
      }
      get readOnly() {
        return this.facet(ET)
      }
      phrase(BB) {
        for (var TB = arguments.length, dB = new Array(TB > 1 ? TB - 1 : 0), VB = 1; VB < TB; VB++) dB[VB - 1] = arguments[VB];
        for (let yB of this.facet(cT.phrases))
          if (Object.prototype.hasOwnProperty.call(yB, BB)) {
            BB = yB[BB];
            break
          } return dB.length && (BB = BB.replace(/\$(\$|\d*)/g, ((BB, TB) => {
          if ("$" == TB) return "$";
          let VB = +(TB || 1);
          return !VB || VB > dB.length ? BB : dB[VB - 1]
        }))), BB
      }
      languageDataAt(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          VB = [];
        for (let yB of this.facet(kT))
          for (let pB of yB(this, TB, dB)) Object.prototype.hasOwnProperty.call(pB, BB) && VB.push(pB[BB]);
        return VB
      }
      charCategorizer(BB) {
        let TB = this.languageDataAt("wordChars", BB);
        return IT(TB.length ? TB[0] : "")
      }
      wordAt(BB) {
        let {
          text: TB,
          from: dB,
          length: VB
        } = this.doc.lineAt(BB), yB = this.charCategorizer(BB), pB = BB - dB, lB = BB - dB;
        for (; pB > 0;) {
          let BB = MB(TB, pB, !1);
          if (yB(TB.slice(BB, pB)) != FT.Word) break;
          pB = BB
        }
        for (; lB < VB;) {
          let BB = MB(TB, lB);
          if (yB(TB.slice(lB, BB)) != FT.Word) break;
          lB = BB
        }
        return pB == lB ? null : XB.range(pB + dB, lB + dB)
      }
    }

    function ST(BB, TB) {
      let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        VB = {};
      for (let yB of BB)
        for (let BB of Object.keys(yB)) {
          let TB = yB[BB],
            pB = VB[BB];
          if (void 0 === pB) VB[BB] = TB;
          else if (pB === TB || void 0 === TB);
          else {
            if (!Object.hasOwnProperty.call(dB, BB)) throw new Error("Config merge conflict for field " + BB);
            VB[BB] = dB[BB](pB, TB)
          }
        }
      for (let yB in TB) void 0 === VB[yB] && (VB[yB] = TB[yB]);
      return VB
    }
    cT.allowMultipleSelections = LT, cT.tabSize = CB.define({
      combine: BB => BB.length ? BB[0] : 4
    }), cT.lineSeparator = OT, cT.readOnly = ET, cT.phrases = CB.define({
      compare(BB, TB) {
        let dB = Object.keys(BB),
          VB = Object.keys(TB);
        return dB.length == VB.length && dB.every((dB => BB[dB] == TB[dB]))
      }
    }), cT.languageData = kT, cT.changeFilter = DT, cT.transactionFilter = uT, cT.transactionExtender = HT, lT.reconfigure = NT.define();
    class PT {
      eq(BB) {
        return this == BB
      }
      range(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BB;
        return RT.create(BB, TB, this)
      }
    }

    function QT(BB, TB) {
      return BB == TB || BB.constructor == TB.constructor && BB.eq(TB)
    }
    PT.prototype.startSide = PT.prototype.endSide = 0, PT.prototype.point = !1, PT.prototype.mapMode = KB.TrackDel;
    class RT {
      constructor(BB, TB, dB) {
        this.from = BB, this.to = TB, this.value = dB
      }
      static create(BB, TB, dB) {
        return new RT(BB, TB, dB)
      }
    }

    function aT(BB, TB) {
      return BB.from - TB.from || BB.value.startSide - TB.value.startSide
    }
    class ZT {
      constructor(BB, TB, dB, VB) {
        this.from = BB, this.to = TB, this.value = dB, this.KVB = VB
      }
      get length() {
        return this.to[this.to.length - 1]
      }
      findIndex(BB, TB, dB) {
        let VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          yB = dB ? this.to : this.from;
        for (let pB = VB, lB = yB.length;;) {
          if (pB == lB) return pB;
          let VB = pB + lB >> 1,
            JB = yB[VB] - BB || (dB ? this.value[VB].endSide : this.value[VB].startSide) - TB;
          if (VB == pB) return JB >= 0 ? pB : lB;
          JB >= 0 ? lB = VB : pB = VB + 1
        }
      }
      between(BB, TB, dB, VB) {
        for (let yB = this.findIndex(TB, -1e9, !0), pB = this.findIndex(dB, 1e9, !1, yB); yB < pB; yB++)
          if (!1 === VB(this.from[yB] + BB, this.to[yB] + BB, this.value[yB])) return !1
      }
      map(BB, TB) {
        let dB = [],
          VB = [],
          yB = [],
          pB = -1,
          lB = -1;
        for (let JB = 0; JB < this.value.length; JB++) {
          let YB, gB, oB = this.value[JB],
            kB = this.from[JB] + BB,
            LB = this.to[JB] + BB;
          if (kB == LB) {
            let BB = TB.mapPos(kB, oB.startSide, oB.mapMode);
            if (null == BB) continue;
            if (YB = gB = BB, oB.startSide != oB.endSide && (gB = TB.mapPos(kB, oB.endSide), gB < YB)) continue
          } else if (YB = TB.mapPos(kB, oB.startSide), gB = TB.mapPos(LB, oB.endSide), YB > gB || YB == gB && oB.startSide > 0 && oB.endSide <= 0) continue;
          (gB - YB || oB.endSide - oB.startSide) < 0 || (pB < 0 && (pB = YB), oB.point && (lB = Math.max(lB, gB - YB)), dB.push(oB), VB.push(YB - pB), yB.push(gB - pB))
        }
        return {
          mapped: dB.length ? new ZT(VB, yB, dB, lB) : null,
          pos: pB
        }
      }
    }
    class XT {
      constructor(BB, TB, dB, VB) {
        this.chunkPos = BB, this.chunk = TB, this.nextLayer = dB, this.KVB = VB
      }
      static create(BB, TB, dB, VB) {
        return new XT(BB, TB, dB, VB)
      }
      get length() {
        let BB = this.chunk.length - 1;
        return BB < 0 ? 0 : Math.max(this.chunkEnd(BB), this.nextLayer.length)
      }
      get size() {
        if (this.OD) return 0;
        let BB = this.nextLayer.size;
        for (let TB of this.chunk) BB += TB.value.length;
        return BB
      }
      chunkEnd(BB) {
        return this.chunkPos[BB] + this.chunk[BB].length
      }
      update(BB) {
        let {
          add: TB = [],
          sort: dB = !1,
          filterFrom: VB = 0,
          filterTo: yB = this.length
        } = BB, pB = BB.filter;
        if (0 == TB.length && !pB) return this;
        if (dB && (TB = TB.slice().sort(aT)), this.OD) return TB.length ? XT.of(TB) : this;
        let lB = new CT(this, null, -1).goto(0),
          JB = 0,
          YB = [],
          gB = new WT;
        for (; lB.value || JB < TB.length;)
          if (JB < TB.length && (lB.from - TB[JB].from || lB.startSide - TB[JB].value.startSide) >= 0) {
            let BB = TB[JB++];
            gB.addInner(BB.from, BB.to, BB.value) || YB.push(BB)
          } else 1 == lB.rangeIndex && lB.chunkIndex < this.chunk.length && (JB == TB.length || this.chunkEnd(lB.chunkIndex) < TB[JB].from) && (!pB || VB > this.chunkEnd(lB.chunkIndex) || yB < this.chunkPos[lB.chunkIndex]) && gB.addChunk(this.chunkPos[lB.chunkIndex], this.chunk[lB.chunkIndex]) ? lB.nextChunk() : ((!pB || VB > lB.to || yB < lB.from || pB(lB.from, lB.to, lB.value)) && (gB.addInner(lB.from, lB.to, lB.value) || YB.push(RT.create(lB.from, lB.to, lB.value))), lB.next());
        return gB.finishInner(this.nextLayer.OD && !YB.length ? XT.empty : this.nextLayer.update({
          add: YB,
          filter: pB,
          filterFrom: VB,
          filterTo: yB
        }))
      }
      map(BB) {
        if (BB.empty || this.OD) return this;
        let TB = [],
          dB = [],
          VB = -1;
        for (let pB = 0; pB < this.chunk.length; pB++) {
          let yB = this.chunkPos[pB],
            lB = this.chunk[pB],
            JB = BB.touchesRange(yB, yB + lB.length);
          if (!1 === JB) VB = Math.max(VB, lB.KVB), TB.push(lB), dB.push(BB.mapPos(yB));
          else if (!0 === JB) {
            let {
              mapped: pB,
              pos: JB
            } = lB.map(yB, BB);
            pB && (VB = Math.max(VB, pB.KVB), TB.push(pB), dB.push(JB))
          }
        }
        let yB = this.nextLayer.map(BB);
        return 0 == TB.length ? yB : new XT(dB, TB, yB || XT.empty, VB)
      }
      between(BB, TB, dB) {
        if (!this.OD) {
          for (let VB = 0; VB < this.chunk.length; VB++) {
            let yB = this.chunkPos[VB],
              pB = this.chunk[VB];
            if (TB >= yB && BB <= yB + pB.length && !1 === pB.between(yB, BB - yB, TB - yB, dB)) return
          }
          this.nextLayer.between(BB, TB, dB)
        }
      }
      iter() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return GT.from([this]).goto(BB)
      }
      get OD() {
        return this.nextLayer == this
      }
      static iter(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return GT.from(BB).goto(TB)
      }
      static compare(BB, TB, dB, VB) {
        let yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1,
          pB = BB.filter((BB => BB.KVB > 0 || !BB.OD && BB.KVB >= yB)),
          lB = TB.filter((BB => BB.KVB > 0 || !BB.OD && BB.KVB >= yB)),
          JB = hT(pB, lB, dB),
          YB = new xT(pB, JB, yB),
          gB = new xT(lB, JB, yB);
        dB.iterGaps(((BB, TB, dB) => jT(YB, BB, gB, TB, dB, VB))), dB.empty && 0 == dB.length && jT(YB, 0, gB, 0, 0, VB)
      }
      static eq(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          VB = arguments.length > 3 ? arguments[3] : void 0;
        null == VB && (VB = 999999999);
        let yB = BB.filter((BB => !BB.OD && TB.indexOf(BB) < 0)),
          pB = TB.filter((TB => !TB.OD && BB.indexOf(TB) < 0));
        if (yB.length != pB.length) return !1;
        if (!yB.length) return !0;
        let lB = hT(yB, pB),
          JB = new xT(yB, lB, 0).goto(dB),
          YB = new xT(pB, lB, 0).goto(dB);
        for (;;) {
          if (JB.to != YB.to || !AT(JB.active, YB.active) || JB.point && (!YB.point || !QT(JB.point, YB.point))) return !1;
          if (JB.to > VB) return !0;
          JB.next(), YB.next()
        }
      }
      static spans(BB, TB, dB, VB) {
        let yB = new xT(BB, null, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1).goto(TB),
          pB = TB,
          lB = yB.openStart;
        for (;;) {
          let BB = Math.min(yB.to, dB);
          if (yB.point) {
            let dB = yB.activeForPoint(yB.to),
              JB = yB.pointFrom < TB ? dB.length + 1 : yB.point.startSide < 0 ? dB.length : Math.min(dB.length, lB);
            VB.point(pB, BB, yB.point, dB, JB, yB.pointRank), lB = Math.min(yB.openEnd(BB), dB.length)
          } else BB > pB && (VB.span(pB, BB, yB.active, lB), lB = yB.openEnd(BB));
          if (yB.to > dB) return lB + (yB.point && yB.to > dB ? 1 : 0);
          pB = yB.to, yB.next()
        }
      }
      static of (BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          dB = new WT;
        for (let VB of BB instanceof RT ? [BB] : TB ? function(BB) {
            if (BB.length > 1)
              for (let TB = BB[0], dB = 1; dB < BB.length; dB++) {
                let VB = BB[dB];
                if (aT(TB, VB) > 0) return BB.slice().sort(aT);
                TB = VB
              }
            return BB
          }(BB) : BB) dB.add(VB.from, VB.to, VB.value);
        return dB.finish()
      }
      static join(BB) {
        if (!BB.length) return XT.empty;
        let TB = BB[BB.length - 1];
        for (let dB = BB.length - 2; dB >= 0; dB--)
          for (let VB = BB[dB]; VB != XT.empty; VB = VB.nextLayer) TB = new XT(VB.chunkPos, VB.chunk, TB, Math.max(VB.KVB, TB.KVB));
        return TB
      }
    }
    XT.empty = new XT([], [], null, -1), XT.empty.nextLayer = XT.empty;
    class WT {
      finishChunk(BB) {
        this.chunks.push(new ZT(this.from, this.to, this.value, this.KVB)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.KVB), this.KVB = -1, BB && (this.from = [], this.to = [], this.value = [])
      }
      constructor() {
        this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.KVB = -1, this.setMaxPoint = -1, this.nextLayer = null
      }
      add(BB, TB, dB) {
        this.addInner(BB, TB, dB) || (this.nextLayer || (this.nextLayer = new WT)).add(BB, TB, dB)
      }
      addInner(BB, TB, dB) {
        let VB = BB - this.lastTo || dB.startSide - this.last.endSide;
        if (VB <= 0 && (BB - this.lastFrom || dB.startSide - this.last.startSide) < 0) throw new Error("Ranges must be added sorted by `from` position and `startSide`");
        return !(VB < 0) && (250 == this.from.length && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = BB), this.from.push(BB - this.chunkStart), this.to.push(TB - this.chunkStart), this.last = dB, this.lastFrom = BB, this.lastTo = TB, this.value.push(dB), dB.point && (this.KVB = Math.max(this.KVB, TB - BB)), !0)
      }
      addChunk(BB, TB) {
        if ((BB - this.lastTo || TB.value[0].startSide - this.last.endSide) < 0) return !1;
        this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, TB.KVB), this.chunks.push(TB), this.chunkPos.push(BB);
        let dB = TB.value.length - 1;
        return this.last = TB.value[dB], this.lastFrom = TB.from[dB] + BB, this.lastTo = TB.to[dB] + BB, !0
      }
      finish() {
        return this.finishInner(XT.empty)
      }
      finishInner(BB) {
        if (this.from.length && this.finishChunk(!1), 0 == this.chunks.length) return BB;
        let TB = XT.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(BB) : BB, this.setMaxPoint);
        return this.from = null, TB
      }
    }

    function hT(BB, TB, dB) {
      let VB = new Map;
      for (let pB of BB)
        for (let BB = 0; BB < pB.chunk.length; BB++) pB.chunk[BB].KVB <= 0 && VB.set(pB.chunk[BB], pB.chunkPos[BB]);
      let yB = new Set;
      for (let pB of TB)
        for (let BB = 0; BB < pB.chunk.length; BB++) {
          let TB = VB.get(pB.chunk[BB]);
          null == TB || (dB ? dB.mapPos(TB) : TB) != pB.chunkPos[BB] || (null === dB || void 0 === dB ? void 0 : dB.touchesRange(TB, TB + pB.chunk[BB].length)) || yB.add(pB.chunk[BB])
        }
      return yB
    }
    class CT {
      constructor(BB, TB, dB) {
        let VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.layer = BB, this.skip = TB, this.rVB = dB, this.rank = VB
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      get endSide() {
        return this.value ? this.value.endSide : 0
      }
      goto(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(BB, TB, !1), this
      }
      gotoInner(BB, TB, dB) {
        for (; this.chunkIndex < this.layer.chunk.length;) {
          let TB = this.layer.chunk[this.chunkIndex];
          if (!(this.skip && this.skip.has(TB) || this.layer.chunkEnd(this.chunkIndex) < BB || TB.KVB < this.rVB)) break;
          this.chunkIndex++, dB = !1
        }
        if (this.chunkIndex < this.layer.chunk.length) {
          let VB = this.layer.chunk[this.chunkIndex].findIndex(BB - this.layer.chunkPos[this.chunkIndex], TB, !0);
          (!dB || this.rangeIndex < VB) && this.setRangeIndex(VB)
        }
        this.next()
      }
      forward(BB, TB) {
        (this.to - BB || this.endSide - TB) < 0 && this.gotoInner(BB, TB, !0)
      }
      next() {
        for (;;) {
          if (this.chunkIndex == this.layer.chunk.length) {
            this.from = this.to = 1e9, this.value = null;
            break
          } {
            let BB = this.layer.chunkPos[this.chunkIndex],
              TB = this.layer.chunk[this.chunkIndex],
              dB = BB + TB.from[this.rangeIndex];
            if (this.from = dB, this.to = BB + TB.to[this.rangeIndex], this.value = TB.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.rVB < 0 || this.value.point && this.to - this.from >= this.rVB) break
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
    class GT {
      constructor(BB) {
        this.heap = BB
      }
      static from(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          VB = [];
        for (let yB = 0; yB < BB.length; yB++)
          for (let pB = BB[yB]; !pB.OD; pB = pB.nextLayer) pB.KVB >= dB && VB.push(new CT(pB, TB, dB, yB));
        return 1 == VB.length ? VB[0] : new GT(VB)
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      goto(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        for (let dB of this.heap) dB.goto(BB, TB);
        for (let dB = this.heap.length >> 1; dB >= 0; dB--) qT(this.heap, dB);
        return this.next(), this
      }
      forward(BB, TB) {
        for (let dB of this.heap) dB.forward(BB, TB);
        for (let dB = this.heap.length >> 1; dB >= 0; dB--) qT(this.heap, dB);
        (this.to - BB || this.value.endSide - TB) < 0 && this.next()
      }
      next() {
        if (0 == this.heap.length) this.from = this.to = 1e9, this.value = null, this.rank = -1;
        else {
          let BB = this.heap[0];
          this.from = BB.from, this.to = BB.to, this.value = BB.value, this.rank = BB.rank, BB.value && BB.next(), qT(this.heap, 0)
        }
      }
    }

    function qT(BB, TB) {
      for (let dB = BB[TB];;) {
        let VB = 1 + (TB << 1);
        if (VB >= BB.length) break;
        let yB = BB[VB];
        if (VB + 1 < BB.length && yB.compare(BB[VB + 1]) >= 0 && (yB = BB[VB + 1], VB++), dB.compare(yB) < 0) break;
        BB[VB] = dB, BB[TB] = yB, TB = VB
      }
    }
    class xT {
      constructor(BB, TB, dB) {
        this.rVB = dB, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = GT.from(BB, TB, dB)
      }
      goto(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.cursor.goto(BB, TB), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = BB, this.endSide = TB, this.openStart = -1, this.next(), this
      }
      forward(BB, TB) {
        for (; this.minActive > -1 && (this.activeTo[this.minActive] - BB || this.active[this.minActive].endSide - TB) < 0;) this.removeActive(this.minActive);
        this.cursor.forward(BB, TB)
      }
      removeActive(BB) {
        bT(this.active, BB), bT(this.activeTo, BB), bT(this.activeRank, BB), this.minActive = eT(this.active, this.activeTo)
      }
      addActive(BB) {
        let TB = 0,
          {
            value: dB,
            to: VB,
            rank: yB
          } = this.cursor;
        for (; TB < this.activeRank.length && (yB - this.activeRank[TB] || VB - this.activeTo[TB]) > 0;) TB++;
        nT(this.active, TB, dB), nT(this.activeTo, TB, VB), nT(this.activeRank, TB, yB), BB && nT(BB, TB, this.cursor.from), this.minActive = eT(this.active, this.activeTo)
      }
      next() {
        let BB = this.to,
          TB = this.point;
        this.point = null;
        let dB = this.openStart < 0 ? [] : null;
        for (;;) {
          let VB = this.minActive;
          if (VB > -1 && (this.activeTo[VB] - this.cursor.from || this.active[VB].endSide - this.cursor.startSide) < 0) {
            if (this.activeTo[VB] > BB) {
              this.to = this.activeTo[VB], this.endSide = this.active[VB].endSide;
              break
            }
            this.removeActive(VB), dB && bT(dB, VB)
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
                if (!(TB && this.cursor.to == this.to && this.cursor.from < this.cursor.to)) {
                  this.point = BB, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = BB.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
                  break
                }
                this.cursor.next()
              } else this.addActive(dB), this.cursor.next()
            }
          }
        }
        if (dB) {
          this.openStart = 0;
          for (let TB = dB.length - 1; TB >= 0 && dB[TB] < BB; TB--) this.openStart++
        }
      }
      activeForPoint(BB) {
        if (!this.active.length) return this.active;
        let TB = [];
        for (let dB = this.active.length - 1; dB >= 0 && !(this.activeRank[dB] < this.pointRank); dB--)(this.activeTo[dB] > BB || this.activeTo[dB] == BB && this.active[dB].endSide >= this.point.endSide) && TB.push(this.active[dB]);
        return TB.reverse()
      }
      openEnd(BB) {
        let TB = 0;
        for (let dB = this.activeTo.length - 1; dB >= 0 && this.activeTo[dB] > BB; dB--) TB++;
        return TB
      }
    }

    function jT(BB, TB, dB, VB, yB, pB) {
      BB.goto(TB), dB.goto(VB);
      let lB = VB + yB,
        JB = VB,
        YB = VB - TB,
        gB = !!pB.boundChange;
      for (let oB = !1;;) {
        let TB = BB.to + YB - dB.to,
          VB = TB || BB.endSide - dB.endSide,
          yB = VB < 0 ? BB.to + YB : dB.to,
          kB = Math.min(yB, lB);
        if (BB.point || dB.point ? (BB.point && dB.point && QT(BB.point, dB.point) && AT(BB.activeForPoint(BB.to), dB.activeForPoint(dB.to)) || pB.comparePoint(JB, kB, BB.point, dB.point), oB = !1) : (oB && pB.boundChange(JB), kB > JB && !AT(BB.active, dB.active) && pB.compareRange(JB, kB, BB.active, dB.active), gB && kB < lB && (TB || BB.openEnd(yB) != dB.openEnd(yB)) && (oB = !0)), yB > lB) break;
        JB = yB, VB <= 0 && BB.next(), VB >= 0 && dB.next()
      }
    }

    function AT(BB, TB) {
      if (BB.length != TB.length) return !1;
      for (let dB = 0; dB < BB.length; dB++)
        if (BB[dB] != TB[dB] && !QT(BB[dB], TB[dB])) return !1;
      return !0
    }

    function bT(BB, TB) {
      for (let dB = TB, VB = BB.length - 1; dB < VB; dB++) BB[dB] = BB[dB + 1];
      BB.pop()
    }

    function nT(BB, TB, dB) {
      for (let VB = BB.length - 1; VB >= TB; VB--) BB[VB + 1] = BB[VB];
      BB[TB] = dB
    }

    function eT(BB, TB) {
      let dB = -1,
        VB = 1e9;
      for (let yB = 0; yB < TB.length; yB++)(TB[yB] - VB || BB[yB].endSide - BB[dB].endSide) < 0 && (dB = yB, VB = TB[yB]);
      return dB
    }

    function Bd(BB, TB) {
      let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : BB.length,
        VB = 0;
      for (let yB = 0; yB < dB && yB < BB.length;) 9 == BB.charCodeAt(yB) ? (VB += TB - VB % TB, yB++) : (VB++, yB = MB(BB, yB));
      return VB
    }

    function Td(BB, TB, dB, VB) {
      for (let yB = 0, pB = 0;;) {
        if (pB >= TB) return yB;
        if (yB == BB.length) break;
        pB += 9 == BB.charCodeAt(yB) ? dB - pB % dB : 1, yB = MB(BB, yB)
      }
      return !0 === VB ? -1 : BB.length
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);