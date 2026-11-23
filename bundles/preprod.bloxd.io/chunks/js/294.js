export const id = 294;
export const ids = [294];
export const modules = {
  41125: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => Gz,
      e: () => mC,
      ChangeSet: () => HC,
      h: () => Yz,
      i: () => TC,
      l: () => Ez,
      n: () => DC,
      o: () => dC,
      r: () => wz,
      u: () => Tz,
      s: () => az,
      v: () => Xz,
      w: () => xz,
      A: () => kC,
      B: () => SC,
      F: () => Jz,
      I: () => eC,
      M: () => KC,
      P: () => lz,
      S: () => CZ,
      V: () => vC,
      Y: () => zZ,
      $: () => hC
    });
    let QC = [],
      wC = [];

    function bC(CC) {
      if (CC < 768) return !1;
      for (let zC = 0, ZC = QC.length;;) {
        let bC = zC + ZC >> 1;
        if (CC < QC[bC]) ZC = bC;
        else {
          if (!(CC >= wC[bC])) return !0;
          zC = bC + 1
        }
        if (zC == ZC) return !1
      }
    }

    function nC(CC) {
      return CC >= 127462 && CC <= 127487
    }(() => {
      let CC = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((CC => CC ? parseInt(CC, 36) : 1));
      for (let zC = 0, ZC = 0; zC < CC.length; zC++)(zC % 2 ? wC : QC).push(ZC += CC[zC])
    })();
    const fC = 8205;

    function oC(CC, zC) {
      return (!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2] ? qC : FC)(CC, zC, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function qC(CC, zC, ZC) {
      if (zC == CC.length) return zC;
      zC && NC(CC.charCodeAt(zC)) && MC(CC.charCodeAt(zC - 1)) && zC--;
      let QC = WC(CC, zC);
      for (zC += gC(QC); zC < CC.length;) {
        let wC = WC(CC, zC);
        if (QC == fC || wC == fC || ZC && bC(wC)) zC += gC(wC), QC = wC;
        else {
          if (!nC(wC)) break;
          {
            let ZC = 0,
              QC = zC - 2;
            for (; QC >= 0 && nC(WC(CC, QC));) ZC++, QC -= 2;
            if (ZC % 2 == 0) break;
            zC += 2
          }
        }
      }
      return zC
    }

    function FC(CC, zC, ZC) {
      for (; zC > 0;) {
        let QC = qC(CC, zC - 2, ZC);
        if (QC < zC) return QC;
        zC--
      }
      return 0
    }

    function WC(CC, zC) {
      let ZC = CC.charCodeAt(zC);
      if (!MC(ZC) || zC + 1 == CC.length) return ZC;
      let QC = CC.charCodeAt(zC + 1);
      return NC(QC) ? QC - 56320 + (ZC - 55296 << 10) + 65536 : ZC
    }

    function NC(CC) {
      return CC >= 56320 && CC < 57344
    }

    function MC(CC) {
      return CC >= 55296 && CC < 56320
    }

    function gC(CC) {
      return CC < 65536 ? 1 : 2
    }
    class SC {
      lineAt(CC) {
        if (CC < 0 || CC > this.length) throw new RangeError(`Invalid position ${CC} in document of length ${this.length}`);
        return this.lineInner(CC, !1, 1, 0)
      }
      line(CC) {
        if (CC < 1 || CC > this.lines) throw new RangeError(`Invalid line number ${CC} in ${this.lines}-line document`);
        return this.lineInner(CC, !0, 1, 0)
      }
      replace(CC, zC, ZC) {
        [CC, zC] = iC(this, CC, zC);
        let QC = [];
        return this.decompose(0, CC, QC, 2), ZC.length && ZC.decompose(0, ZC.length, QC, 3), this.decompose(zC, this.length, QC, 1), PC.from(QC, this.length - (zC - CC) + ZC.length)
      }
      append(CC) {
        return this.replace(this.length, this.length, CC)
      }
      slice(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        [CC, zC] = iC(this, CC, zC);
        let ZC = [];
        return this.decompose(CC, zC, ZC, 0), PC.from(ZC, zC - CC)
      }
      eq(CC) {
        if (CC == this) return !0;
        if (CC.length != this.length || CC.lines != this.lines) return !1;
        let zC = this.scanIdentical(CC, 1),
          ZC = this.length - this.scanIdentical(CC, -1),
          QC = new AC(this),
          wC = new AC(CC);
        for (let bC = zC, nC = zC;;) {
          if (QC.next(bC), wC.next(bC), bC = 0, QC.lineBreak != wC.lineBreak || QC.done != wC.done || QC.value != wC.value) return !1;
          if (nC += QC.value.length, QC.done || nC >= ZC) return !0
        }
      }
      iter() {
        return new AC(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1)
      }
      iterRange(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        return new xC(this, CC, zC)
      }
      iterLines(CC, zC) {
        let ZC;
        if (null == CC) ZC = this.iter();
        else {
          null == zC && (zC = this.lines + 1);
          let QC = this.line(CC).from;
          ZC = this.iterRange(QC, Math.max(QC, zC == this.lines + 1 ? this.length : zC <= 1 ? 0 : this.line(zC - 1).to))
        }
        return new JC(ZC)
      }
      toString() {
        return this.sliceString(0)
      }
      toJSON() {
        let CC = [];
        return this.flatten(CC), CC
      }
      constructor() {}
      static of (CC) {
        if (0 == CC.length) throw new RangeError("A document must have at least one line");
        return 1 != CC.length || CC[0] ? CC.length <= 32 ? new pC(CC) : PC.from(pC.split(CC, [])) : SC.empty
      }
    }
    class pC extends SC {
      constructor(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(CC) {
          let zC = -1;
          for (let ZC of CC) zC += ZC.length + 1;
          return zC
        }(CC);
        super(), this.text = CC, this.length = zC
      }
      get lines() {
        return this.text.length
      }
      get children() {
        return null
      }
      lineInner(CC, zC, ZC, QC) {
        for (let wC = 0;; wC++) {
          let bC = this.text[wC],
            nC = QC + bC.length;
          if ((zC ? ZC : nC) >= CC) return new IC(QC, nC, ZC, bC);
          QC = nC + 1, ZC++
        }
      }
      decompose(CC, zC, ZC, QC) {
        let wC = CC <= 0 && zC >= this.length ? this : new pC(RC(this.text, CC, zC), Math.min(zC, this.length) - Math.max(0, CC));
        if (1 & QC) {
          let CC = ZC.pop(),
            zC = GC(wC.text, CC.text.slice(), 0, wC.length);
          if (zC.length <= 32) ZC.push(new pC(zC, CC.length + wC.length));
          else {
            let CC = zC.length >> 1;
            ZC.push(new pC(zC.slice(0, CC)), new pC(zC.slice(CC)))
          }
        } else ZC.push(wC)
      }
      replace(CC, zC, ZC) {
        if (!(ZC instanceof pC)) return super.replace(CC, zC, ZC);
        [CC, zC] = iC(this, CC, zC);
        let QC = GC(this.text, GC(ZC.text, RC(this.text, 0, CC)), zC),
          wC = this.length + ZC.length - (zC - CC);
        return QC.length <= 32 ? new pC(QC, wC) : PC.from(pC.split(QC, []), wC)
      }
      sliceString(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [CC, zC] = iC(this, CC, zC);
        let QC = "";
        for (let wC = 0, bC = 0; wC <= zC && bC < this.text.length; bC++) {
          let nC = this.text[bC],
            fC = wC + nC.length;
          wC > CC && bC && (QC += ZC), CC < fC && zC > wC && (QC += nC.slice(Math.max(0, CC - wC), zC - wC)), wC = fC + 1
        }
        return QC
      }
      flatten(CC) {
        for (let zC of this.text) CC.push(zC)
      }
      scanIdentical() {
        return 0
      }
      static split(CC, zC) {
        let ZC = [],
          QC = -1;
        for (let wC of CC) ZC.push(wC), QC += wC.length + 1, 32 == ZC.length && (zC.push(new pC(ZC, QC)), ZC = [], QC = -1);
        return QC > -1 && zC.push(new pC(ZC, QC)), zC
      }
    }
    class PC extends SC {
      constructor(CC, zC) {
        super(), this.children = CC, this.length = zC, this.lines = 0;
        for (let ZC of CC) this.lines += ZC.lines
      }
      lineInner(CC, zC, ZC, QC) {
        for (let wC = 0;; wC++) {
          let bC = this.children[wC],
            nC = QC + bC.length,
            fC = ZC + bC.lines - 1;
          if ((zC ? fC : nC) >= CC) return bC.lineInner(CC, zC, ZC, QC);
          QC = nC + 1, ZC = fC + 1
        }
      }
      decompose(CC, zC, ZC, QC) {
        for (let wC = 0, bC = 0; bC <= zC && wC < this.children.length; wC++) {
          let nC = this.children[wC],
            fC = bC + nC.length;
          if (CC <= fC && zC >= bC) {
            let wC = QC & ((bC <= CC ? 1 : 0) | (fC >= zC ? 2 : 0));
            bC >= CC && fC <= zC && !wC ? ZC.push(nC) : nC.decompose(CC - bC, zC - bC, ZC, wC)
          }
          bC = fC + 1
        }
      }
      replace(CC, zC, ZC) {
        if ([CC, zC] = iC(this, CC, zC), ZC.lines < this.lines)
          for (let QC = 0, wC = 0; QC < this.children.length; QC++) {
            let bC = this.children[QC],
              nC = wC + bC.length;
            if (CC >= wC && zC <= nC) {
              let fC = bC.replace(CC - wC, zC - wC, ZC),
                oC = this.lines - bC.lines + fC.lines;
              if (fC.lines < oC >> 4 && fC.lines > oC >> 6) {
                let wC = this.children.slice();
                return wC[QC] = fC, new PC(wC, this.length - (zC - CC) + ZC.length)
              }
              return super.replace(wC, nC, fC)
            }
            wC = nC + 1
          }
        return super.replace(CC, zC, ZC)
      }
      sliceString(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [CC, zC] = iC(this, CC, zC);
        let QC = "";
        for (let wC = 0, bC = 0; wC < this.children.length && bC <= zC; wC++) {
          let nC = this.children[wC],
            fC = bC + nC.length;
          bC > CC && wC && (QC += ZC), CC < fC && zC > bC && (QC += nC.sliceString(CC - bC, zC - bC, ZC)), bC = fC + 1
        }
        return QC
      }
      flatten(CC) {
        for (let zC of this.children) zC.flatten(CC)
      }
      scanIdentical(CC, zC) {
        if (!(CC instanceof PC)) return 0;
        let ZC = 0,
          [QC, wC, bC, nC] = zC > 0 ? [0, 0, this.children.length, CC.children.length] : [this.children.length - 1, CC.children.length - 1, -1, -1];
        for (;; QC += zC, wC += zC) {
          if (QC == bC || wC == nC) return ZC;
          let fC = this.children[QC],
            oC = CC.children[wC];
          if (fC != oC) return ZC + fC.scanIdentical(oC, zC);
          ZC += fC.length + 1
        }
      }
      static from(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : CC.reduce(((CC, zC) => CC + zC.length + 1), -1),
          ZC = 0;
        for (let NC of CC) ZC += NC.lines;
        if (ZC < 32) {
          let ZC = [];
          for (let zC of CC) zC.flatten(ZC);
          return new pC(ZC, zC)
        }
        let QC = Math.max(32, ZC >> 5),
          wC = QC << 1,
          bC = QC >> 1,
          nC = [],
          fC = 0,
          oC = -1,
          qC = [];

        function FC(CC) {
          let zC;
          if (CC.lines > wC && CC instanceof PC)
            for (let ZC of CC.children) FC(ZC);
          else CC.lines > bC && (fC > bC || !fC) ? (WC(), nC.push(CC)) : CC instanceof pC && fC && (zC = qC[qC.length - 1]) instanceof pC && CC.lines + zC.lines <= 32 ? (fC += CC.lines, oC += CC.length + 1, qC[qC.length - 1] = new pC(zC.text.concat(CC.text), zC.length + 1 + CC.length)) : (fC + CC.lines > QC && WC(), fC += CC.lines, oC += CC.length + 1, qC.push(CC))
        }

        function WC() {
          0 != fC && (nC.push(1 == qC.length ? qC[0] : PC.from(qC, oC)), oC = -1, fC = qC.length = 0)
        }
        for (let NC of CC) FC(NC);
        return WC(), 1 == nC.length ? nC[0] : new PC(nC, zC)
      }
    }

    function GC(CC, zC) {
      let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e9;
      for (let wC = 0, bC = 0, nC = !0; bC < CC.length && wC <= QC; bC++) {
        let fC = CC[bC],
          oC = wC + fC.length;
        oC >= ZC && (oC > QC && (fC = fC.slice(0, QC - wC)), wC < ZC && (fC = fC.slice(ZC - wC)), nC ? (zC[zC.length - 1] += fC, nC = !1) : zC.push(fC)), wC = oC + 1
      }
      return zC
    }

    function RC(CC, zC, ZC) {
      return GC(CC, [""], zC, ZC)
    }
    SC.empty = new pC([""], 0);
    class AC {
      constructor(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.dir = zC, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [CC], this.offsets = [zC > 0 ? 1 : (CC instanceof pC ? CC.text.length : CC.children.length) << 1]
      }
      nextInner(CC, zC) {
        for (this.done = this.lineBreak = !1;;) {
          let ZC = this.nodes.length - 1,
            QC = this.nodes[ZC],
            wC = this.offsets[ZC],
            bC = wC >> 1,
            nC = QC instanceof pC ? QC.text.length : QC.children.length;
          if (bC == (zC > 0 ? nC : 0)) {
            if (0 == ZC) return this.done = !0, this.value = "", this;
            zC > 0 && this.offsets[ZC - 1]++, this.nodes.pop(), this.offsets.pop()
          } else if ((1 & wC) == (zC > 0 ? 0 : 1)) {
            if (this.offsets[ZC] += zC, 0 == CC) return this.lineBreak = !0, this.value = "\n", this;
            CC--
          } else if (QC instanceof pC) {
            let wC = QC.text[bC + (zC < 0 ? -1 : 0)];
            if (this.offsets[ZC] += zC, wC.length > Math.max(0, CC)) return this.value = 0 == CC ? wC : zC > 0 ? wC.slice(CC) : wC.slice(0, wC.length - CC), this;
            CC -= wC.length
          } else {
            let wC = QC.children[bC + (zC < 0 ? -1 : 0)];
            CC > wC.length ? (CC -= wC.length, this.offsets[ZC] += zC) : (zC < 0 && this.offsets[ZC]--, this.nodes.push(wC), this.offsets.push(zC > 0 ? 1 : (wC instanceof pC ? wC.text.length : wC.children.length) << 1))
          }
        }
      }
      next() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return CC < 0 && (this.nextInner(-CC, -this.dir), CC = this.value.length), this.nextInner(CC, this.dir)
      }
    }
    class xC {
      constructor(CC, zC, ZC) {
        this.value = "", this.done = !1, this.cursor = new AC(CC, zC > ZC ? -1 : 1), this.pos = zC > ZC ? CC.length : 0, this.from = Math.min(zC, ZC), this.to = Math.max(zC, ZC)
      }
      nextInner(CC, zC) {
        if (zC < 0 ? this.pos <= this.from : this.pos >= this.to) return this.value = "", this.done = !0, this;
        CC += Math.max(0, zC < 0 ? this.pos - this.to : this.from - this.pos);
        let ZC = zC < 0 ? this.pos - this.from : this.to - this.pos;
        CC > ZC && (CC = ZC), ZC -= CC;
        let {
          value: QC
        } = this.cursor.next(CC);
        return this.pos += (QC.length + CC) * zC, this.value = QC.length <= ZC ? QC : zC < 0 ? QC.slice(QC.length - ZC) : QC.slice(0, ZC), this.done = !this.value, this
      }
      next() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return CC < 0 ? CC = Math.max(CC, this.from - this.pos) : CC > 0 && (CC = Math.min(CC, this.to - this.pos)), this.nextInner(CC, this.cursor.dir)
      }
      get lineBreak() {
        return this.cursor.lineBreak && "" != this.value
      }
    }
    class JC {
      constructor(CC) {
        this.inner = CC, this.afterBreak = !0, this.value = "", this.done = !1
      }
      next() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          {
            done: zC,
            lineBreak: ZC,
            value: QC
          } = this.inner.next(CC);
        return zC && this.afterBreak ? (this.value = "", this.afterBreak = !1) : zC ? (this.done = !0, this.value = "") : ZC ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = QC, this.afterBreak = !1), this
      }
      get lineBreak() {
        return !1
      }
    }
    "undefined" != typeof Symbol && (SC.prototype[Symbol.iterator] = function() {
      return this.iter()
    }, AC.prototype[Symbol.iterator] = xC.prototype[Symbol.iterator] = JC.prototype[Symbol.iterator] = function() {
      return this
    });
    class IC {
      constructor(CC, zC, ZC, QC) {
        this.from = CC, this.to = zC, this.number = ZC, this.text = QC
      }
      get length() {
        return this.to - this.from
      }
    }

    function iC(CC, zC, ZC) {
      return [zC = Math.max(0, Math.min(CC.length, zC)), Math.max(zC, Math.min(CC.length, ZC))]
    }

    function vC(CC, zC) {
      return oC(CC, zC, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function eC(CC, zC) {
      let ZC = CC.charCodeAt(zC);
      if (!((QC = ZC) >= 55296 && QC < 56320) || zC + 1 == CC.length) return ZC;
      var QC;
      let wC = CC.charCodeAt(zC + 1);
      return function(CC) {
        return CC >= 56320 && CC < 57344
      }(wC) ? wC - 56320 + (ZC - 55296 << 10) + 65536 : ZC
    }

    function hC(CC) {
      return CC <= 65535 ? String.fromCharCode(CC) : (CC -= 65536, String.fromCharCode(55296 + (CC >> 10), 56320 + (1023 & CC)))
    }

    function KC(CC) {
      return CC < 65536 ? 1 : 2
    }
    const YC = /\r\n?|\n/;
    var dC = function(CC) {
      return CC[CC.Simple = 0] = "Simple", CC[CC.TrackDel = 1] = "TrackDel", CC[CC.TrackBefore = 2] = "TrackBefore", CC[CC.TrackAfter = 3] = "TrackAfter", CC
    }(dC || (dC = {}));
    class mC {
      constructor(CC) {
        this.sections = CC
      }
      get length() {
        let CC = 0;
        for (let zC = 0; zC < this.sections.length; zC += 2) CC += this.sections[zC];
        return CC
      }
      get newLength() {
        let CC = 0;
        for (let zC = 0; zC < this.sections.length; zC += 2) {
          let ZC = this.sections[zC + 1];
          CC += ZC < 0 ? this.sections[zC] : ZC
        }
        return CC
      }
      get empty() {
        return 0 == this.sections.length || 2 == this.sections.length && this.sections[1] < 0
      }
      iterGaps(CC) {
        for (let zC = 0, ZC = 0, QC = 0; zC < this.sections.length;) {
          let wC = this.sections[zC++],
            bC = this.sections[zC++];
          bC < 0 ? (CC(ZC, QC, wC), QC += wC) : QC += bC, ZC += wC
        }
      }
      iterChangedRanges(CC) {
        XC(this, CC, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get invertedDesc() {
        let CC = [];
        for (let zC = 0; zC < this.sections.length;) {
          let ZC = this.sections[zC++],
            QC = this.sections[zC++];
          QC < 0 ? CC.push(ZC, QC) : CC.push(QC, ZC)
        }
        return new mC(CC)
      }
      composeDesc(CC) {
        return this.empty ? CC : CC.empty ? this : uC(this, CC)
      }
      mapDesc(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return CC.empty ? this : cC(this, CC, zC)
      }
      mapPos(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : dC.Simple,
          QC = 0,
          wC = 0;
        for (let bC = 0; bC < this.sections.length;) {
          let nC = this.sections[bC++],
            fC = this.sections[bC++],
            oC = QC + nC;
          if (fC < 0) {
            if (oC > CC) return wC + (CC - QC);
            wC += nC
          } else {
            if (ZC != dC.Simple && oC >= CC && (ZC == dC.TrackDel && QC < CC && oC > CC || ZC == dC.TrackBefore && QC < CC || ZC == dC.TrackAfter && oC > CC)) return null;
            if (oC > CC || oC == CC && zC < 0 && !nC) return CC == QC || zC < 0 ? wC : wC + fC;
            wC += fC
          }
          QC = oC
        }
        if (CC > QC) throw new RangeError(`Position ${CC} is out of range for changeset of length ${QC}`);
        return wC
      }
      touchesRange(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : CC;
        for (let ZC = 0, QC = 0; ZC < this.sections.length && QC <= zC;) {
          let wC = QC + this.sections[ZC++];
          if (this.sections[ZC++] >= 0 && QC <= zC && wC >= CC) return !(QC < CC && wC > zC) || "cover";
          QC = wC
        }
        return !1
      }
      toString() {
        let CC = "";
        for (let zC = 0; zC < this.sections.length;) {
          let ZC = this.sections[zC++],
            QC = this.sections[zC++];
          CC += (CC ? " " : "") + ZC + (QC >= 0 ? ":" + QC : "")
        }
        return CC
      }
      toJSON() {
        return this.sections
      }
      static fromJSON(CC) {
        if (!Array.isArray(CC) || CC.length % 2 || CC.some((CC => "number" != typeof CC))) throw new RangeError("Invalid JSON representation of ChangeDesc");
        return new mC(CC)
      }
      static create(CC) {
        return new mC(CC)
      }
    }
    class HC extends mC {
      constructor(CC, zC) {
        super(CC), this.inserted = zC
      }
      apply(CC) {
        if (this.length != CC.length) throw new RangeError("Applying change set to a document with the wrong length");
        return XC(this, ((zC, ZC, QC, wC, bC) => CC = CC.replace(QC, QC + (ZC - zC), bC)), !1), CC
      }
      mapDesc(CC) {
        return cC(this, CC, arguments.length > 1 && void 0 !== arguments[1] && arguments[1], !0)
      }
      invert(CC) {
        let zC = this.sections.slice(),
          ZC = [];
        for (let QC = 0, wC = 0; QC < zC.length; QC += 2) {
          let bC = zC[QC],
            nC = zC[QC + 1];
          if (nC >= 0) {
            zC[QC] = nC, zC[QC + 1] = bC;
            let fC = QC >> 1;
            for (; ZC.length < fC;) ZC.push(SC.empty);
            ZC.push(bC ? CC.slice(wC, wC + bC) : SC.empty)
          }
          wC += bC
        }
        return new HC(zC, ZC)
      }
      compose(CC) {
        return this.empty ? CC : CC.empty ? this : uC(this, CC, !0)
      }
      map(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return CC.empty ? this : cC(this, CC, zC, !0)
      }
      iterChanges(CC) {
        XC(this, CC, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get desc() {
        return mC.create(this.sections)
      }
      filter(CC) {
        let zC = [],
          ZC = [],
          QC = [],
          wC = new rC(this);
        CC: for (let bC = 0, nC = 0;;) {
          let fC = bC == CC.length ? 1e9 : CC[bC++];
          for (; nC < fC || nC == fC && 0 == wC.len;) {
            if (wC.done) break CC;
            let CC = Math.min(wC.len, fC - nC);
            EC(QC, CC, -1);
            let bC = -1 == wC.ins ? -1 : 0 == wC.off ? wC.ins : 0;
            EC(zC, CC, bC), bC > 0 && lC(ZC, zC, wC.text), wC.forward(CC), nC += CC
          }
          let oC = CC[bC++];
          for (; nC < oC;) {
            if (wC.done) break CC;
            let CC = Math.min(wC.len, oC - nC);
            EC(zC, CC, -1), EC(QC, CC, -1 == wC.ins ? -1 : 0 == wC.off ? wC.ins : 0), wC.forward(CC), nC += CC
          }
        }
        return {
          changes: new HC(zC, ZC),
          filtered: mC.create(QC)
        }
      }
      toJSON() {
        let CC = [];
        for (let zC = 0; zC < this.sections.length; zC += 2) {
          let ZC = this.sections[zC],
            QC = this.sections[zC + 1];
          QC < 0 ? CC.push(ZC) : 0 == QC ? CC.push([ZC]) : CC.push([ZC].concat(this.inserted[zC >> 1].toJSON()))
        }
        return CC
      }
      static of (CC, zC, ZC) {
        let QC = [],
          wC = [],
          bC = 0,
          nC = null;

        function fC() {
          if (!(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && !QC.length) return;
          bC < zC && EC(QC, zC - bC, -1);
          let CC = new HC(QC, wC);
          nC = nC ? nC.compose(CC.map(nC)) : CC, QC = [], wC = [], bC = 0
        }
        return function CC(oC) {
          if (Array.isArray(oC))
            for (let zC of oC) CC(zC);
          else if (oC instanceof HC) {
            if (oC.length != zC) throw new RangeError(`Mismatched change set length (got ${oC.length}, expected ${zC})`);
            fC(), nC = nC ? nC.compose(oC.map(nC)) : oC
          } else {
            let {
              from: CC,
              to: nC = CC,
              insert: qC
            } = oC;
            if (CC > nC || CC < 0 || nC > zC) throw new RangeError(`Invalid change range ${CC} to ${nC} (in doc of length ${zC})`);
            let FC = qC ? "string" == typeof qC ? SC.of(qC.split(ZC || YC)) : qC : SC.empty,
              WC = FC.length;
            if (CC == nC && 0 == WC) return;
            CC < bC && fC(), CC > bC && EC(QC, CC - bC, -1), EC(QC, nC - CC, WC), lC(wC, QC, FC), bC = nC
          }
        }(CC), fC(!nC), nC
      }
      static empty(CC) {
        return new HC(CC ? [CC, -1] : [], [])
      }
      static fromJSON(CC) {
        if (!Array.isArray(CC)) throw new RangeError("Invalid JSON representation of ChangeSet");
        let zC = [],
          ZC = [];
        for (let QC = 0; QC < CC.length; QC++) {
          let wC = CC[QC];
          if ("number" == typeof wC) zC.push(wC, -1);
          else {
            if (!Array.isArray(wC) || "number" != typeof wC[0] || wC.some(((CC, zC) => zC && "string" != typeof CC))) throw new RangeError("Invalid JSON representation of ChangeSet");
            if (1 == wC.length) zC.push(wC[0], 0);
            else {
              for (; ZC.length < QC;) ZC.push(SC.empty);
              ZC[QC] = SC.of(wC.slice(1)), zC.push(wC[0], ZC[QC].length)
            }
          }
        }
        return new HC(zC, ZC)
      }
      static createSet(CC, zC) {
        return new HC(CC, zC)
      }
    }

    function EC(CC, zC, ZC) {
      let QC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (0 == zC && ZC <= 0) return;
      let wC = CC.length - 2;
      wC >= 0 && ZC <= 0 && ZC == CC[wC + 1] ? CC[wC] += zC : wC >= 0 && 0 == zC && 0 == CC[wC] ? CC[wC + 1] += ZC : QC ? (CC[wC] += zC, CC[wC + 1] += ZC) : CC.push(zC, ZC)
    }

    function lC(CC, zC, ZC) {
      if (0 == ZC.length) return;
      let QC = zC.length - 2 >> 1;
      if (QC < CC.length) CC[CC.length - 1] = CC[CC.length - 1].append(ZC);
      else {
        for (; CC.length < QC;) CC.push(SC.empty);
        CC.push(ZC)
      }
    }

    function XC(CC, zC, ZC) {
      let QC = CC.inserted;
      for (let wC = 0, bC = 0, nC = 0; nC < CC.sections.length;) {
        let fC = CC.sections[nC++],
          oC = CC.sections[nC++];
        if (oC < 0) wC += fC, bC += fC;
        else {
          let qC = wC,
            FC = bC,
            WC = SC.empty;
          for (; qC += fC, FC += oC, oC && QC && (WC = WC.append(QC[nC - 2 >> 1])), !(ZC || nC == CC.sections.length || CC.sections[nC + 1] < 0);) fC = CC.sections[nC++], oC = CC.sections[nC++];
          zC(wC, qC, bC, FC, WC), wC = qC, bC = FC
        }
      }
    }

    function cC(CC, zC, ZC) {
      let QC = [],
        wC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3] ? [] : null,
        bC = new rC(CC),
        nC = new rC(zC),
        fC = 0;
      for (let oC = -1;;) {
        if (++fC > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - likely malformed ChangeSet");
        if (bC.done && nC.len || nC.done && bC.len) throw new Error("Mismatched change set lengths");
        if (-1 == bC.ins && -1 == nC.ins) {
          let CC = Math.min(bC.len, nC.len);
          EC(QC, CC, -1), bC.forward(CC), nC.forward(CC)
        } else if (nC.ins >= 0 && (bC.ins < 0 || oC == bC.i || 0 == bC.off && (nC.len < bC.len || nC.len == bC.len && !ZC))) {
          let CC = nC.len;
          for (EC(QC, nC.ins, -1); CC;) {
            if (++fC > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-b");
            let zC = Math.min(bC.len, CC);
            bC.ins >= 0 && oC < bC.i && bC.len <= zC && (EC(QC, 0, bC.ins), wC && lC(wC, QC, bC.text), oC = bC.i), bC.forward(zC), CC -= zC
          }
          nC.next()
        } else {
          if (!(bC.ins >= 0)) {
            if (bC.done && nC.done) return wC ? HC.createSet(QC, wC) : mC.create(QC);
            throw new Error("Mismatched change set lengths")
          } {
            let CC = 0,
              zC = bC.len;
            for (; zC;) {
              if (++fC > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-a");
              if (-1 == nC.ins) {
                let ZC = Math.min(zC, nC.len);
                CC += ZC, zC -= ZC, nC.forward(ZC)
              } else {
                if (!(0 == nC.ins && nC.len < zC)) break;
                zC -= nC.len, nC.next()
              }
            }
            EC(QC, CC, oC < bC.i ? bC.ins : 0), wC && oC < bC.i && lC(wC, QC, bC.text), oC = bC.i, bC.forward(bC.len - zC)
          }
        }
      }
    }

    function uC(CC, zC) {
      let ZC = [],
        QC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? [] : null,
        wC = new rC(CC),
        bC = new rC(zC),
        nC = 0;
      for (let fC = !1;;) {
        if (++nC > 2e6) throw new Error("BLOXD CODEMIRROR: composeSets exceeded max iterations - likely malformed ChangeSet");
        if (wC.done && bC.done) return QC ? HC.createSet(ZC, QC) : mC.create(ZC);
        if (0 == wC.ins) EC(ZC, wC.len, 0, fC), wC.next();
        else if (0 != bC.len || bC.done) {
          if (wC.done || bC.done) throw new Error("Mismatched change set lengths");
          {
            let CC = Math.min(wC.len2, bC.len),
              zC = ZC.length;
            if (-1 == wC.ins) {
              let zC = -1 == bC.ins ? -1 : bC.off ? 0 : bC.ins;
              EC(ZC, CC, zC, fC), QC && zC && lC(QC, ZC, bC.text)
            } else - 1 == bC.ins ? (EC(ZC, wC.off ? 0 : wC.len, CC, fC), QC && lC(QC, ZC, wC.textBit(CC))) : (EC(ZC, wC.off ? 0 : wC.len, bC.off ? 0 : bC.ins, fC), QC && !bC.off && lC(QC, ZC, bC.text));
            fC = (wC.ins > CC || bC.ins >= 0 && bC.len > CC) && (fC || ZC.length > zC), wC.forward2(CC), bC.forward(CC)
          }
        } else EC(ZC, 0, bC.ins, fC), QC && lC(QC, ZC, bC.text), bC.next()
      }
    }
    class rC {
      constructor(CC) {
        this.set = CC, this.i = 0, this.next()
      }
      next() {
        let {
          sections: CC
        } = this.set;
        this.i < CC.length ? (this.len = CC[this.i++], this.ins = CC[this.i++]) : (this.len = 0, this.ins = -2), this.off = 0
      }
      get done() {
        return -2 == this.ins
      }
      get len2() {
        return this.ins < 0 ? this.len : this.ins
      }
      get text() {
        let {
          inserted: CC
        } = this.set, zC = this.i - 2 >> 1;
        return zC >= CC.length ? SC.empty : CC[zC]
      }
      textBit(CC) {
        let {
          inserted: zC
        } = this.set, ZC = this.i - 2 >> 1;
        return ZC >= zC.length && !CC ? SC.empty : zC[ZC].slice(this.off, null == CC ? void 0 : this.off + CC)
      }
      forward(CC) {
        CC == this.len ? this.next() : (this.len -= CC, this.off += CC)
      }
      forward2(CC) {
        -1 == this.ins ? this.forward(CC) : CC == this.ins ? this.next() : (this.ins -= CC, this.off += CC)
      }
    }
    class sC {
      constructor(CC, zC, ZC) {
        this.from = CC, this.to = zC, this.flags = ZC
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
        let CC = 7 & this.flags;
        return 7 == CC ? null : CC
      }
      get goalColumn() {
        let CC = this.flags >> 6;
        return 16777215 == CC ? void 0 : CC
      }
      map(CC) {
        let zC, ZC, QC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return this.empty ? zC = ZC = CC.mapPos(this.from, QC) : (zC = CC.mapPos(this.from, 1), ZC = CC.mapPos(this.to, -1)), zC == this.from && ZC == this.to ? this : new sC(zC, ZC, this.flags)
      }
      extend(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : CC,
          ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (CC <= this.anchor && zC >= this.anchor) return TC.range(CC, zC, void 0, void 0, ZC);
        let QC = Math.abs(CC - this.anchor) > Math.abs(zC - this.anchor) ? CC : zC;
        return TC.range(this.anchor, QC, void 0, void 0, ZC)
      }
      eq(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.anchor == CC.anchor && this.head == CC.head && this.goalColumn == CC.goalColumn && (!zC || !this.empty || this.assoc == CC.assoc)
      }
      toJSON() {
        return {
          anchor: this.anchor,
          head: this.head
        }
      }
      static fromJSON(CC) {
        if (!CC || "number" != typeof CC.anchor || "number" != typeof CC.head) throw new RangeError("Invalid JSON representation for SelectionRange");
        return TC.range(CC.anchor, CC.head)
      }
      static create(CC, zC, ZC) {
        return new sC(CC, zC, ZC)
      }
    }
    class TC {
      constructor(CC, zC) {
        this.np = CC, this.mainIndex = zC
      }
      map(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return CC.empty ? this : TC.create(this.np.map((ZC => ZC.map(CC, zC))), this.mainIndex)
      }
      eq(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.np.length != CC.np.length || this.mainIndex != CC.mainIndex) return !1;
        for (let ZC = 0; ZC < this.np.length; ZC++)
          if (!this.np[ZC].eq(CC.np[ZC], zC)) return !1;
        return !0
      }
      get main() {
        return this.np[this.mainIndex]
      }
      asSingle() {
        return 1 == this.np.length ? this : new TC([this.main], 0)
      }
      addRange(CC) {
        let zC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return TC.create([CC].concat(this.np), zC ? 0 : this.mainIndex + 1)
      }
      replaceRange(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.mainIndex,
          ZC = this.np.slice();
        return ZC[zC] = CC, TC.create(ZC, this.mainIndex)
      }
      toJSON() {
        return {
          np: this.np.map((CC => CC.toJSON())),
          main: this.mainIndex
        }
      }
      static fromJSON(CC) {
        if (!CC || !Array.isArray(CC.np) || "number" != typeof CC.main || CC.main >= CC.np.length) throw new RangeError("Invalid JSON representation for EditorSelection");
        return new TC(CC.np.map((CC => sC.fromJSON(CC))), CC.main)
      }
      static single(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : CC;
        return new TC([TC.range(CC, zC)], 0)
      }
      static create(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (0 == CC.length) throw new RangeError("A selection needs at least one range");
        for (let ZC = 0, QC = 0; QC < CC.length; QC++) {
          let wC = CC[QC];
          if (wC.empty ? wC.from <= ZC : wC.from < ZC) return TC.normalized(CC.slice(), zC);
          ZC = wC.to
        }
        return new TC(CC, zC)
      }
      static cursor(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZC = arguments.length > 2 ? arguments[2] : void 0,
          QC = arguments.length > 3 ? arguments[3] : void 0;
        return sC.create(CC, CC, (0 == zC ? 0 : zC < 0 ? 8 : 16) | (null == ZC ? 7 : Math.min(6, ZC)) | (null !== QC && void 0 !== QC ? QC : 16777215) << 6)
      }
      static range(CC, zC, ZC, QC, wC) {
        let bC = (null !== ZC && void 0 !== ZC ? ZC : 16777215) << 6 | (null == QC ? 7 : Math.min(6, QC));
        return wC || CC == zC || (wC = zC < CC ? 1 : -1), zC < CC ? sC.create(zC, CC, 48 | bC) : sC.create(CC, zC, (wC ? wC < 0 ? 8 : 16 : 0) | bC)
      }
      static normalized(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZC = CC[zC];
        CC.sort(((CC, zC) => CC.from - zC.from)), zC = CC.indexOf(ZC);
        for (let QC = 1; QC < CC.length; QC++) {
          let ZC = CC[QC],
            wC = CC[QC - 1];
          if (ZC.empty ? ZC.from <= wC.to : ZC.from < wC.to) {
            let bC = wC.from,
              nC = Math.max(ZC.to, wC.to);
            QC <= zC && zC--, CC.splice(--QC, 2, ZC.anchor > ZC.head ? TC.range(nC, bC) : TC.range(bC, nC))
          }
        }
        return new TC(CC, zC)
      }
    }

    function aC(CC, zC) {
      for (let ZC of CC.np)
        if (ZC.to > zC) throw new RangeError("Selection points outside of document")
    }
    let tC = 0;
    class DC {
      constructor(CC, zC, ZC, QC, wC) {
        this.combine = CC, this.compareInput = zC, this.compare = ZC, this.isStatic = QC, this.id = tC++, this.default = CC([]), this.extensions = "function" == typeof wC ? wC(this) : wC
      }
      get reader() {
        return this
      }
      static define() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return new DC(CC.combine || (CC => CC), CC.compareInput || ((CC, zC) => CC === zC), CC.compare || (CC.combine ? (CC, zC) => CC === zC : jC), !!CC.static, CC.enables)
      }
      of(CC) {
        return new yC([], this, 0, CC)
      }
      compute(CC, zC) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new yC(CC, this, 1, zC)
      }
      computeN(CC, zC) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new yC(CC, this, 2, zC)
      }
      from(CC, zC) {
        return zC || (zC = CC => CC), this.compute([CC], (ZC => zC(ZC.field(CC))))
      }
    }

    function jC(CC, zC) {
      return CC == zC || CC.length == zC.length && CC.every(((CC, ZC) => CC === zC[ZC]))
    }
    class yC {
      constructor(CC, zC, ZC, QC) {
        this.dependencies = CC, this.facet = zC, this.type = ZC, this.value = QC, this.id = tC++
      }
      dynamicSlot(CC) {
        var zC;
        let ZC = this.value,
          QC = this.facet.compareInput,
          wC = this.id,
          bC = CC[wC] >> 1,
          nC = 2 == this.type,
          fC = !1,
          oC = !1,
          qC = [];
        for (let FC of this.dependencies) "doc" == FC ? fC = !0 : "selection" == FC ? oC = !0 : 0 == (1 & (null !== (zC = CC[FC.id]) && void 0 !== zC ? zC : 1)) && qC.push(CC[FC.id]);
        return {
          create: CC => (CC.values[bC] = ZC(CC), 1),
          update(CC, zC) {
            if (fC && zC.docChanged || oC && (zC.docChanged || zC.selection) || UC(CC, qC)) {
              let zC = ZC(CC);
              if (nC ? !LC(zC, CC.values[bC], QC) : !QC(zC, CC.values[bC])) return CC.values[bC] = zC, 1
            }
            return 0
          },
          reconfigure: (CC, zC) => {
            let fC, oC = zC.config.address[wC];
            if (null != oC) {
              let wC = Fz(zC, oC);
              if (this.dependencies.every((ZC => ZC instanceof DC ? zC.facet(ZC) === CC.facet(ZC) : !(ZC instanceof kC) || zC.field(ZC, !1) == CC.field(ZC, !1))) || (nC ? LC(fC = ZC(CC), wC, QC) : QC(fC = ZC(CC), wC))) return CC.values[bC] = wC, 0
            } else fC = ZC(CC);
            return CC.values[bC] = fC, 1
          }
        }
      }
    }

    function LC(CC, zC, ZC) {
      if (CC.length != zC.length) return !1;
      for (let QC = 0; QC < CC.length; QC++)
        if (!ZC(CC[QC], zC[QC])) return !1;
      return !0
    }

    function UC(CC, zC) {
      let ZC = !1;
      for (let QC of zC) 1 & qz(CC, QC) && (ZC = !0);
      return ZC
    }

    function BC(CC, zC, ZC) {
      let QC = ZC.map((zC => CC[zC.id])),
        wC = ZC.map((CC => CC.type)),
        bC = QC.filter((CC => !(1 & CC))),
        nC = CC[zC.id] >> 1;

      function fC(CC) {
        let ZC = [];
        for (let zC = 0; zC < QC.length; zC++) {
          let bC = Fz(CC, QC[zC]);
          if (2 == wC[zC])
            for (let CC of bC) ZC.push(CC);
          else ZC.push(bC)
        }
        return zC.combine(ZC)
      }
      return {
        create(CC) {
          for (let zC of QC) qz(CC, zC);
          return CC.values[nC] = fC(CC), 1
        },
        update(CC, ZC) {
          if (!UC(CC, bC)) return 0;
          let QC = fC(CC);
          return zC.compare(QC, CC.values[nC]) ? 0 : (CC.values[nC] = QC, 1)
        },
        reconfigure(CC, wC) {
          let bC = UC(CC, QC),
            oC = wC.config.facets[zC.id],
            qC = wC.facet(zC);
          if (oC && !bC && jC(ZC, oC)) return CC.values[nC] = qC, 0;
          let FC = fC(CC);
          return zC.compare(FC, qC) ? (CC.values[nC] = qC, 0) : (CC.values[nC] = FC, 1)
        }
      }
    }
    const OC = DC.define({
      static: !0
    });
    class kC {
      constructor(CC, zC, ZC, QC, wC) {
        this.id = CC, this.createF = zC, this.updateF = ZC, this.compareF = QC, this.spec = wC, this.provides = void 0
      }
      static define(CC) {
        let zC = new kC(tC++, CC.create, CC.update, CC.compare || ((CC, zC) => CC === zC), CC);
        return CC.provide && (zC.provides = CC.provide(zC)), zC
      }
      create(CC) {
        let zC = CC.facet(OC).find((CC => CC.field == this));
        return ((null === zC || void 0 === zC ? void 0 : zC.create) || this.createF)(CC)
      }
      slot(CC) {
        let zC = CC[this.id] >> 1;
        return {
          create: CC => (CC.values[zC] = this.create(CC), 1),
          update: (CC, ZC) => {
            let QC = CC.values[zC],
              wC = this.updateF(QC, ZC);
            return this.compareF(QC, wC) ? 0 : (CC.values[zC] = wC, 1)
          },
          reconfigure: (CC, ZC) => {
            let QC, wC = CC.facet(OC),
              bC = ZC.facet(OC);
            return (QC = wC.find((CC => CC.field == this))) && QC != bC.find((CC => CC.field == this)) ? (CC.values[zC] = QC.create(CC), 1) : null != ZC.config.address[this.id] ? (CC.values[zC] = ZC.field(this), 0) : (CC.values[zC] = this.create(CC), 1)
          }
        }
      }
      init(CC) {
        return [this, OC.of({
          field: this,
          create: CC
        })]
      }
      get extension() {
        return this
      }
    }
    const VC = 4,
      Cz = 3,
      zz = 2,
      Zz = 1;

    function Qz(CC) {
      return zC => new bz(zC, CC)
    }
    const wz = {
      highest: Qz(0),
      high: Qz(Zz),
      default: Qz(zz),
      low: Qz(Cz),
      lowest: Qz(VC)
    };
    class bz {
      constructor(CC, zC) {
        this.inner = CC, this.prec = zC
      }
    }
    class nz {
      of(CC) {
        return new fz(this, CC)
      }
      reconfigure(CC) {
        return nz.reconfigure.of({
          compartment: this,
          extension: CC
        })
      }
      get(CC) {
        return CC.config.compartments.get(this)
      }
    }
    class fz {
      constructor(CC, zC) {
        this.compartment = CC, this.inner = zC
      }
    }
    class oz {
      constructor(CC, zC, ZC, QC, wC, bC) {
        for (this.base = CC, this.compartments = zC, this.dynamicSlots = ZC, this.address = QC, this.staticValues = wC, this.facets = bC, this.statusTemplate = []; this.statusTemplate.length < ZC.length;) this.statusTemplate.push(0)
      }
      staticFacet(CC) {
        let zC = this.address[CC.id];
        return null == zC ? CC.default : this.staticValues[zC >> 1]
      }
      static resolve(CC, zC, ZC) {
        let QC = [],
          wC = Object.create(null),
          bC = new Map;
        for (let WC of function(CC, zC, ZC) {
            let QC = [
                [],
                [],
                [],
                [],
                []
              ],
              wC = new Map;

            function bC(CC, nC) {
              let fC = wC.get(CC);
              if (null != fC) {
                if (fC <= nC) return;
                let zC = QC[fC].indexOf(CC);
                zC > -1 && QC[fC].splice(zC, 1), CC instanceof fz && ZC.delete(CC.compartment)
              }
              if (wC.set(CC, nC), Array.isArray(CC))
                for (let zC of CC) bC(zC, nC);
              else if (CC instanceof fz) {
                if (ZC.has(CC.compartment)) throw new RangeError("Duplicate use of compartment in extensions");
                let QC = zC.get(CC.compartment) || CC.inner;
                ZC.set(CC.compartment, QC), bC(QC, nC)
              } else if (CC instanceof bz) bC(CC.inner, CC.prec);
              else if (CC instanceof kC) QC[nC].push(CC), CC.provides && bC(CC.provides, nC);
              else if (CC instanceof yC) QC[nC].push(CC), CC.facet.extensions && bC(CC.facet.extensions, zz);
              else {
                let zC = CC.extension;
                if (!zC) throw new Error(`Unrecognized extension value in extension set (${CC}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
                bC(zC, nC)
              }
            }
            return bC(CC, zz), QC.reduce(((CC, zC) => CC.concat(zC)))
          }(CC, zC, bC)) WC instanceof kC ? QC.push(WC) : (wC[WC.facet.id] || (wC[WC.facet.id] = [])).push(WC);
        let nC = Object.create(null),
          fC = [],
          oC = [];
        for (let WC of QC) nC[WC.id] = oC.length << 1, oC.push((CC => WC.slot(CC)));
        let qC = null === ZC || void 0 === ZC ? void 0 : ZC.config.facets;
        for (let WC in wC) {
          let CC = wC[WC],
            zC = CC[0].facet,
            QC = qC && qC[WC] || [];
          if (CC.every((CC => 0 == CC.type)))
            if (nC[zC.id] = fC.length << 1 | 1, jC(QC, CC)) fC.push(ZC.facet(zC));
            else {
              let QC = zC.combine(CC.map((CC => CC.value)));
              fC.push(ZC && zC.compare(QC, ZC.facet(zC)) ? ZC.facet(zC) : QC)
            }
          else {
            for (let zC of CC) 0 == zC.type ? (nC[zC.id] = fC.length << 1 | 1, fC.push(zC.value)) : (nC[zC.id] = oC.length << 1, oC.push((CC => zC.dynamicSlot(CC))));
            nC[zC.id] = oC.length << 1, oC.push((ZC => BC(ZC, zC, CC)))
          }
        }
        let FC = oC.map((CC => CC(nC)));
        return new oz(CC, bC, FC, nC, fC, wC)
      }
    }

    function qz(CC, zC) {
      if (1 & zC) return 2;
      let ZC = zC >> 1,
        QC = CC.status[ZC];
      if (4 == QC) throw new Error("Cyclic dependency between fields and/or facets");
      if (2 & QC) return QC;
      CC.status[ZC] = 4;
      let wC = CC.computeSlot(CC, CC.config.dynamicSlots[ZC]);
      return CC.status[ZC] = 2 | wC
    }

    function Fz(CC, zC) {
      return 1 & zC ? CC.config.staticValues[zC >> 1] : CC.values[zC >> 1]
    }
    const Wz = DC.define(),
      Nz = DC.define({
        combine: CC => CC.some((CC => CC)),
        static: !0
      }),
      Mz = DC.define({
        combine: CC => CC.length ? CC[0] : void 0,
        static: !0
      }),
      gz = DC.define(),
      Sz = DC.define(),
      pz = DC.define(),
      Pz = DC.define({
        combine: CC => !!CC.length && CC[0]
      });
    class Gz {
      constructor(CC, zC) {
        this.type = CC, this.value = zC
      }
      static define() {
        return new Rz
      }
    }
    class Rz {
      of(CC) {
        return new Gz(this, CC)
      }
    }
    class Az {
      constructor(CC) {
        this.map = CC
      }
      of(CC) {
        return new xz(this, CC)
      }
    }
    class xz {
      constructor(CC, zC) {
        this.type = CC, this.value = zC
      }
      map(CC) {
        let zC = this.type.map(this.value, CC);
        return void 0 === zC ? void 0 : zC == this.value ? this : new xz(this.type, zC)
      }
      is(CC) {
        return this.type == CC
      }
      static define() {
        return new Az((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).map || (CC => CC))
      }
      static mapEffects(CC, zC) {
        if (!CC.length) return CC;
        let ZC = [];
        for (let QC of CC) {
          let CC = QC.map(zC);
          CC && ZC.push(CC)
        }
        return ZC
      }
    }
    xz.reconfigure = xz.define(), xz.appendConfig = xz.define();
    class Jz {
      constructor(CC, zC, ZC, QC, wC, bC) {
        this.startState = CC, this.changes = zC, this.selection = ZC, this.effects = QC, this.annotations = wC, this.scrollIntoView = bC, this._doc = null, this._state = null, ZC && aC(ZC, zC.newLength), wC.some((CC => CC.type == Jz.time)) || (this.annotations = wC.concat(Jz.time.of(Date.now())))
      }
      static create(CC, zC, ZC, QC, wC, bC) {
        return new Jz(CC, zC, ZC, QC, wC, bC)
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
      annotation(CC) {
        for (let zC of this.annotations)
          if (zC.type == CC) return zC.value
      }
      get docChanged() {
        return !this.changes.empty
      }
      get reconfigured() {
        return this.startState.config != this.state.config
      }
      isUserEvent(CC) {
        let zC = this.annotation(Jz.userEvent);
        return !(!zC || !(zC == CC || zC.length > CC.length && zC.slice(0, CC.length) == CC && "." == zC[CC.length]))
      }
    }

    function Iz(CC, zC) {
      let ZC = [];
      for (let QC = 0, wC = 0;;) {
        let bC, nC;
        if (QC < CC.length && (wC == zC.length || zC[wC] >= CC[QC])) bC = CC[QC++], nC = CC[QC++];
        else {
          if (!(wC < zC.length)) return ZC;
          bC = zC[wC++], nC = zC[wC++]
        }!ZC.length || ZC[ZC.length - 1] < bC ? ZC.push(bC, nC) : ZC[ZC.length - 1] < nC && (ZC[ZC.length - 1] = nC)
      }
    }

    function iz(CC, zC, ZC) {
      var QC;
      let wC, bC, nC;
      return ZC ? (wC = zC.changes, bC = HC.empty(zC.changes.length), nC = CC.changes.compose(zC.changes)) : (wC = zC.changes.map(CC.changes), bC = CC.changes.mapDesc(zC.changes, !0), nC = CC.changes.compose(wC)), {
        changes: nC,
        selection: zC.selection ? zC.selection.map(bC) : null === (QC = CC.selection) || void 0 === QC ? void 0 : QC.map(wC),
        effects: xz.mapEffects(CC.effects, wC).concat(xz.mapEffects(zC.effects, bC)),
        annotations: CC.annotations.length ? CC.annotations.concat(zC.annotations) : zC.annotations,
        scrollIntoView: CC.scrollIntoView || zC.scrollIntoView
      }
    }

    function vz(CC, zC, ZC) {
      let QC = zC.selection,
        wC = Kz(zC.annotations);
      return zC.userEvent && (wC = wC.concat(Jz.userEvent.of(zC.userEvent))), {
        changes: zC.changes instanceof HC ? zC.changes : HC.of(zC.changes || [], ZC, CC.facet(Mz)),
        selection: QC && (QC instanceof TC ? QC : TC.single(QC.anchor, QC.head)),
        effects: Kz(zC.effects),
        annotations: wC,
        scrollIntoView: !!zC.scrollIntoView
      }
    }

    function ez(CC, zC, ZC) {
      let QC = vz(CC, zC.length ? zC[0] : {}, CC.doc.length);
      zC.length && !1 === zC[0].filter && (ZC = !1);
      for (let bC = 1; bC < zC.length; bC++) {
        !1 === zC[bC].filter && (ZC = !1);
        let wC = !!zC[bC].sequential;
        QC = iz(QC, vz(CC, zC[bC], wC ? QC.changes.newLength : CC.doc.length), wC)
      }
      let wC = Jz.create(CC, QC.changes, QC.selection, QC.effects, QC.annotations, QC.scrollIntoView);
      return function(CC) {
        let zC = CC.startState,
          ZC = zC.facet(pz),
          QC = CC;
        for (let wC = ZC.length - 1; wC >= 0; wC--) {
          let bC = ZC[wC](CC);
          bC && Object.keys(bC).length && (QC = iz(QC, vz(zC, bC, CC.changes.newLength), !0))
        }
        return QC == CC ? CC : Jz.create(zC, CC.changes, CC.selection, QC.effects, QC.annotations, QC.scrollIntoView)
      }(ZC ? function(CC) {
        let zC = CC.startState,
          ZC = !0;
        for (let wC of zC.facet(gz)) {
          let zC = wC(CC);
          if (!1 === zC) {
            ZC = !1;
            break
          }
          Array.isArray(zC) && (ZC = !0 === ZC ? zC : Iz(ZC, zC))
        }
        if (!0 !== ZC) {
          let QC, wC;
          if (!1 === ZC) wC = CC.changes.invertedDesc, QC = HC.empty(zC.doc.length);
          else {
            let zC = CC.changes.filter(ZC);
            QC = zC.changes, wC = zC.filtered.mapDesc(zC.changes).invertedDesc
          }
          CC = Jz.create(zC, QC, CC.selection && CC.selection.map(wC), xz.mapEffects(CC.effects, wC), CC.annotations, CC.scrollIntoView)
        }
        let QC = zC.facet(Sz);
        for (let wC = QC.length - 1; wC >= 0; wC--) {
          let ZC = QC[wC](CC);
          CC = ZC instanceof Jz ? ZC : Array.isArray(ZC) && 1 == ZC.length && ZC[0] instanceof Jz ? ZC[0] : ez(zC, Kz(ZC), !1)
        }
        return CC
      }(wC) : wC)
    }
    Jz.time = Gz.define(), Jz.userEvent = Gz.define(), Jz.addToHistory = Gz.define(), Jz.remote = Gz.define();
    const hz = [];

    function Kz(CC) {
      return null == CC ? hz : Array.isArray(CC) ? CC : [CC]
    }
    var Yz = function(CC) {
      return CC[CC.Word = 0] = "Word", CC[CC.Space = 1] = "Space", CC[CC.Other = 2] = "Other", CC
    }(Yz || (Yz = {}));
    const dz = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
    let mz;
    try {
      mz = new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u")
    } catch (ZZ) {}

    function Hz(CC) {
      return zC => {
        if (!/\S/.test(zC)) return Yz.Space;
        if (function(CC) {
            if (mz) return mz.test(CC);
            for (let zC = 0; zC < CC.length; zC++) {
              let ZC = CC[zC];
              if (/\w/.test(ZC) || ZC > "\x80" && (ZC.toUpperCase() != ZC.toLowerCase() || dz.test(ZC))) return !0
            }
            return !1
          }(zC)) return Yz.Word;
        for (let ZC = 0; ZC < CC.length; ZC++)
          if (zC.indexOf(CC[ZC]) > -1) return Yz.Word;
        return Yz.Other
      }
    }
    class Ez {
      constructor(CC, zC, ZC, QC, wC, bC) {
        this.config = CC, this.doc = zC, this.selection = ZC, this.values = QC, this.status = CC.statusTemplate.slice(), this.computeSlot = wC, bC && (bC._state = this);
        for (let nC = 0; nC < this.config.dynamicSlots.length; nC++) qz(this, nC << 1);
        this.computeSlot = null
      }
      field(CC) {
        let zC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          ZC = this.config.address[CC.id];
        if (null != ZC) return qz(this, ZC), Fz(this, ZC);
        if (zC) throw new RangeError("Field is not present in this state")
      }
      update() {
        for (var CC = arguments.length, zC = new Array(CC), ZC = 0; ZC < CC; ZC++) zC[ZC] = arguments[ZC];
        return ez(this, zC, !0)
      }
      applyTransaction(CC) {
        let zC, ZC = this.config,
          {
            base: QC,
            compartments: wC
          } = ZC;
        for (let nC of CC.effects) nC.is(nz.reconfigure) ? (ZC && (wC = new Map, ZC.compartments.forEach(((CC, zC) => wC.set(zC, CC))), ZC = null), wC.set(nC.value.compartment, nC.value.extension)) : nC.is(xz.reconfigure) ? (ZC = null, QC = nC.value) : nC.is(xz.appendConfig) && (ZC = null, QC = Kz(QC).concat(nC.value));
        if (ZC) zC = CC.startState.values.slice();
        else {
          ZC = oz.resolve(QC, wC, this), zC = new Ez(ZC, this.doc, this.selection, ZC.dynamicSlots.map((() => null)), ((CC, zC) => zC.reconfigure(CC, this)), null).values
        }
        let bC = CC.startState.facet(Nz) ? CC.newSelection : CC.newSelection.asSingle();
        new Ez(ZC, CC.newDoc, bC, zC, ((zC, ZC) => ZC.update(zC, CC)), CC)
      }
      replaceSelection(CC) {
        return "string" == typeof CC && (CC = this.toText(CC)), this.changeByRange((zC => ({
          changes: {
            from: zC.from,
            to: zC.to,
            insert: CC
          },
          range: TC.cursor(zC.from + CC.length)
        })))
      }
      changeByRange(CC) {
        let zC = this.selection,
          ZC = CC(zC.np[0]),
          QC = this.changes(ZC.changes),
          wC = [ZC.range],
          bC = Kz(ZC.effects);
        for (let nC = 1; nC < zC.np.length; nC++) {
          let ZC = CC(zC.np[nC]),
            fC = this.changes(ZC.changes),
            oC = fC.map(QC);
          for (let CC = 0; CC < nC; CC++) wC[CC] = wC[CC].map(oC);
          let qC = QC.mapDesc(fC, !0);
          wC.push(ZC.range.map(qC)), QC = QC.compose(oC), bC = xz.mapEffects(bC, oC).concat(xz.mapEffects(Kz(ZC.effects), qC))
        }
        return {
          changes: QC,
          selection: TC.create(wC, zC.mainIndex),
          effects: bC
        }
      }
      changes() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return CC instanceof HC ? CC : HC.of(CC, this.doc.length, this.facet(Ez.lineSeparator))
      }
      toText(CC) {
        return SC.of(CC.split(this.facet(Ez.lineSeparator) || YC))
      }
      sliceDoc() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.doc.length;
        return this.doc.sliceString(CC, zC, this.lineBreak)
      }
      facet(CC) {
        let zC = this.config.address[CC.id];
        return null == zC ? CC.default : (qz(this, zC), Fz(this, zC))
      }
      toJSON(CC) {
        let zC = {
          doc: this.sliceDoc(),
          selection: this.selection.toJSON()
        };
        if (CC)
          for (let ZC in CC) {
            let QC = CC[ZC];
            QC instanceof kC && null != this.config.address[QC.id] && (zC[ZC] = QC.spec.toJSON(this.field(CC[ZC]), this))
          }
        return zC
      }
      static fromJSON(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          ZC = arguments.length > 2 ? arguments[2] : void 0;
        if (!CC || "string" != typeof CC.doc) throw new RangeError("Invalid JSON representation for EditorState");
        let QC = [];
        if (ZC)
          for (let wC in ZC)
            if (Object.prototype.hasOwnProperty.call(CC, wC)) {
              let zC = ZC[wC],
                bC = CC[wC];
              QC.push(zC.init((CC => zC.spec.fromJSON(bC, CC))))
            } return Ez.create({
          doc: CC.doc,
          selection: TC.fromJSON(CC.selection),
          extensions: zC.extensions ? QC.concat([zC.extensions]) : QC
        })
      }
      static create() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          zC = oz.resolve(CC.extensions || [], new Map),
          ZC = CC.doc instanceof SC ? CC.doc : SC.of((CC.doc || "").split(zC.staticFacet(Ez.lineSeparator) || YC)),
          QC = CC.selection ? CC.selection instanceof TC ? CC.selection : TC.single(CC.selection.anchor, CC.selection.head) : TC.single(0);
        return aC(QC, ZC.length), zC.staticFacet(Nz) || (QC = QC.asSingle()), new Ez(zC, ZC, QC, zC.dynamicSlots.map((() => null)), ((CC, zC) => zC.create(CC)), null)
      }
      get tabSize() {
        return this.facet(Ez.tabSize)
      }
      get lineBreak() {
        return this.facet(Ez.lineSeparator) || "\n"
      }
      get readOnly() {
        return this.facet(Pz)
      }
      phrase(CC) {
        for (var zC = arguments.length, ZC = new Array(zC > 1 ? zC - 1 : 0), QC = 1; QC < zC; QC++) ZC[QC - 1] = arguments[QC];
        for (let wC of this.facet(Ez.phrases))
          if (Object.prototype.hasOwnProperty.call(wC, CC)) {
            CC = wC[CC];
            break
          } return ZC.length && (CC = CC.replace(/\$(\$|\d*)/g, ((CC, zC) => {
          if ("$" == zC) return "$";
          let QC = +(zC || 1);
          return !QC || QC > ZC.length ? CC : ZC[QC - 1]
        }))), CC
      }
      languageDataAt(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          QC = [];
        for (let wC of this.facet(Wz))
          for (let bC of wC(this, zC, ZC)) Object.prototype.hasOwnProperty.call(bC, CC) && QC.push(bC[CC]);
        return QC
      }
      charCategorizer(CC) {
        let zC = this.languageDataAt("wordChars", CC);
        return Hz(zC.length ? zC[0] : "")
      }
      wordAt(CC) {
        let {
          text: zC,
          from: ZC,
          length: QC
        } = this.doc.lineAt(CC), wC = this.charCategorizer(CC), bC = CC - ZC, nC = CC - ZC;
        for (; bC > 0;) {
          let CC = vC(zC, bC, !1);
          if (wC(zC.slice(CC, bC)) != Yz.Word) break;
          bC = CC
        }
        for (; nC < QC;) {
          let CC = vC(zC, nC);
          if (wC(zC.slice(nC, CC)) != Yz.Word) break;
          nC = CC
        }
        return bC == nC ? null : TC.range(bC + ZC, nC + ZC)
      }
    }

    function lz(CC, zC) {
      let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        QC = {};
      for (let wC of CC)
        for (let CC of Object.keys(wC)) {
          let zC = wC[CC],
            bC = QC[CC];
          if (void 0 === bC) QC[CC] = zC;
          else if (bC === zC || void 0 === zC);
          else {
            if (!Object.hasOwnProperty.call(ZC, CC)) throw new Error("Config merge conflict for field " + CC);
            QC[CC] = ZC[CC](bC, zC)
          }
        }
      for (let wC in zC) void 0 === QC[wC] && (QC[wC] = zC[wC]);
      return QC
    }
    Ez.allowMultipleSelections = Nz, Ez.tabSize = DC.define({
      combine: CC => CC.length ? CC[0] : 4
    }), Ez.lineSeparator = Mz, Ez.readOnly = Pz, Ez.phrases = DC.define({
      compare(CC, zC) {
        let ZC = Object.keys(CC),
          QC = Object.keys(zC);
        return ZC.length == QC.length && ZC.every((ZC => CC[ZC] == zC[ZC]))
      }
    }), Ez.languageData = Wz, Ez.changeFilter = gz, Ez.transactionFilter = Sz, Ez.transactionExtender = pz, nz.reconfigure = xz.define();
    class Xz {
      eq(CC) {
        return this == CC
      }
      range(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : CC;
        return uz.create(CC, zC, this)
      }
    }

    function cz(CC, zC) {
      return CC == zC || CC.constructor == zC.constructor && CC.eq(zC)
    }
    Xz.prototype.startSide = Xz.prototype.endSide = 0, Xz.prototype.point = !1, Xz.prototype.mapMode = dC.TrackDel;
    class uz {
      constructor(CC, zC, ZC) {
        this.from = CC, this.to = zC, this.value = ZC
      }
      static create(CC, zC, ZC) {
        return new uz(CC, zC, ZC)
      }
    }

    function rz(CC, zC) {
      return CC.from - zC.from || CC.value.startSide - zC.value.startSide
    }
    class sz {
      constructor(CC, zC, ZC, QC) {
        this.from = CC, this.to = zC, this.value = ZC, this.bQC = QC
      }
      get length() {
        return this.to[this.to.length - 1]
      }
      findIndex(CC, zC, ZC) {
        let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          wC = ZC ? this.to : this.from;
        for (let bC = QC, nC = wC.length;;) {
          if (bC == nC) return bC;
          let QC = bC + nC >> 1,
            fC = wC[QC] - CC || (ZC ? this.value[QC].endSide : this.value[QC].startSide) - zC;
          if (QC == bC) return fC >= 0 ? bC : nC;
          fC >= 0 ? nC = QC : bC = QC + 1
        }
      }
      between(CC, zC, ZC, QC) {
        for (let wC = this.findIndex(zC, -1e9, !0), bC = this.findIndex(ZC, 1e9, !1, wC); wC < bC; wC++)
          if (!1 === QC(this.from[wC] + CC, this.to[wC] + CC, this.value[wC])) return !1
      }
      map(CC, zC) {
        let ZC = [],
          QC = [],
          wC = [],
          bC = -1,
          nC = -1;
        for (let fC = 0; fC < this.value.length; fC++) {
          let oC, qC, FC = this.value[fC],
            WC = this.from[fC] + CC,
            NC = this.to[fC] + CC;
          if (WC == NC) {
            let CC = zC.mapPos(WC, FC.startSide, FC.mapMode);
            if (null == CC) continue;
            if (oC = qC = CC, FC.startSide != FC.endSide && (qC = zC.mapPos(WC, FC.endSide), qC < oC)) continue
          } else if (oC = zC.mapPos(WC, FC.startSide), qC = zC.mapPos(NC, FC.endSide), oC > qC || oC == qC && FC.startSide > 0 && FC.endSide <= 0) continue;
          (qC - oC || FC.endSide - FC.startSide) < 0 || (bC < 0 && (bC = oC), FC.point && (nC = Math.max(nC, qC - oC)), ZC.push(FC), QC.push(oC - bC), wC.push(qC - bC))
        }
        return {
          mapped: ZC.length ? new sz(QC, wC, ZC, nC) : null,
          pos: bC
        }
      }
    }
    class Tz {
      constructor(CC, zC, ZC, QC) {
        this.chunkPos = CC, this.chunk = zC, this.nextLayer = ZC, this.bQC = QC
      }
      static create(CC, zC, ZC, QC) {
        return new Tz(CC, zC, ZC, QC)
      }
      get length() {
        let CC = this.chunk.length - 1;
        return CC < 0 ? 0 : Math.max(this.chunkEnd(CC), this.nextLayer.length)
      }
      get size() {
        if (this.fg) return 0;
        let CC = this.nextLayer.size;
        for (let zC of this.chunk) CC += zC.value.length;
        return CC
      }
      chunkEnd(CC) {
        return this.chunkPos[CC] + this.chunk[CC].length
      }
      update(CC) {
        let {
          add: zC = [],
          sort: ZC = !1,
          filterFrom: QC = 0,
          filterTo: wC = this.length
        } = CC, bC = CC.filter;
        if (0 == zC.length && !bC) return this;
        if (ZC && (zC = zC.slice().sort(rz)), this.fg) return zC.length ? Tz.of(zC) : this;
        let nC = new Dz(this, null, -1).goto(0),
          fC = 0,
          oC = [],
          qC = new az;
        for (; nC.value || fC < zC.length;)
          if (fC < zC.length && (nC.from - zC[fC].from || nC.startSide - zC[fC].value.startSide) >= 0) {
            let CC = zC[fC++];
            qC.addInner(CC.from, CC.to, CC.value) || oC.push(CC)
          } else 1 == nC.rangeIndex && nC.chunkIndex < this.chunk.length && (fC == zC.length || this.chunkEnd(nC.chunkIndex) < zC[fC].from) && (!bC || QC > this.chunkEnd(nC.chunkIndex) || wC < this.chunkPos[nC.chunkIndex]) && qC.addChunk(this.chunkPos[nC.chunkIndex], this.chunk[nC.chunkIndex]) ? nC.nextChunk() : ((!bC || QC > nC.to || wC < nC.from || bC(nC.from, nC.to, nC.value)) && (qC.addInner(nC.from, nC.to, nC.value) || oC.push(uz.create(nC.from, nC.to, nC.value))), nC.next());
        return qC.finishInner(this.nextLayer.fg && !oC.length ? Tz.empty : this.nextLayer.update({
          add: oC,
          filter: bC,
          filterFrom: QC,
          filterTo: wC
        }))
      }
      map(CC) {
        if (CC.empty || this.fg) return this;
        let zC = [],
          ZC = [],
          QC = -1;
        for (let bC = 0; bC < this.chunk.length; bC++) {
          let wC = this.chunkPos[bC],
            nC = this.chunk[bC],
            fC = CC.touchesRange(wC, wC + nC.length);
          if (!1 === fC) QC = Math.max(QC, nC.bQC), zC.push(nC), ZC.push(CC.mapPos(wC));
          else if (!0 === fC) {
            let {
              mapped: bC,
              pos: fC
            } = nC.map(wC, CC);
            bC && (QC = Math.max(QC, bC.bQC), zC.push(bC), ZC.push(fC))
          }
        }
        let wC = this.nextLayer.map(CC);
        return 0 == zC.length ? wC : new Tz(ZC, zC, wC || Tz.empty, QC)
      }
      between(CC, zC, ZC) {
        if (!this.fg) {
          for (let QC = 0; QC < this.chunk.length; QC++) {
            let wC = this.chunkPos[QC],
              bC = this.chunk[QC];
            if (zC >= wC && CC <= wC + bC.length && !1 === bC.between(wC, CC - wC, zC - wC, ZC)) return
          }
          this.nextLayer.between(CC, zC, ZC)
        }
      }
      iter() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return jz.from([this]).goto(CC)
      }
      get fg() {
        return this.nextLayer == this
      }
      static iter(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return jz.from(CC).goto(zC)
      }
      static compare(CC, zC, ZC, QC) {
        let wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1,
          bC = CC.filter((CC => CC.bQC > 0 || !CC.fg && CC.bQC >= wC)),
          nC = zC.filter((CC => CC.bQC > 0 || !CC.fg && CC.bQC >= wC)),
          fC = tz(bC, nC, ZC),
          oC = new Lz(bC, fC, wC),
          qC = new Lz(nC, fC, wC);
        ZC.iterGaps(((CC, zC, ZC) => Uz(oC, CC, qC, zC, ZC, QC))), ZC.empty && 0 == ZC.length && Uz(oC, 0, qC, 0, 0, QC)
      }
      static eq(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          QC = arguments.length > 3 ? arguments[3] : void 0;
        null == QC && (QC = 999999999);
        let wC = CC.filter((CC => !CC.fg && zC.indexOf(CC) < 0)),
          bC = zC.filter((zC => !zC.fg && CC.indexOf(zC) < 0));
        if (wC.length != bC.length) return !1;
        if (!wC.length) return !0;
        let nC = tz(wC, bC),
          fC = new Lz(wC, nC, 0).goto(ZC),
          oC = new Lz(bC, nC, 0).goto(ZC);
        for (;;) {
          if (fC.to != oC.to || !Bz(fC.active, oC.active) || fC.point && (!oC.point || !cz(fC.point, oC.point))) return !1;
          if (fC.to > QC) return !0;
          fC.next(), oC.next()
        }
      }
      static spans(CC, zC, ZC, QC) {
        let wC = new Lz(CC, null, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1).goto(zC),
          bC = zC,
          nC = wC.openStart;
        for (;;) {
          let CC = Math.min(wC.to, ZC);
          if (wC.point) {
            let ZC = wC.activeForPoint(wC.to),
              fC = wC.pointFrom < zC ? ZC.length + 1 : wC.point.startSide < 0 ? ZC.length : Math.min(ZC.length, nC);
            QC.point(bC, CC, wC.point, ZC, fC, wC.pointRank), nC = Math.min(wC.openEnd(CC), ZC.length)
          } else CC > bC && (QC.span(bC, CC, wC.active, nC), nC = wC.openEnd(CC));
          if (wC.to > ZC) return nC + (wC.point && wC.to > ZC ? 1 : 0);
          bC = wC.to, wC.next()
        }
      }
      static of (CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZC = new az;
        for (let QC of CC instanceof uz ? [CC] : zC ? function(CC) {
            if (CC.length > 1)
              for (let zC = CC[0], ZC = 1; ZC < CC.length; ZC++) {
                let QC = CC[ZC];
                if (rz(zC, QC) > 0) return CC.slice().sort(rz);
                zC = QC
              }
            return CC
          }(CC) : CC) ZC.add(QC.from, QC.to, QC.value);
        return ZC.finish()
      }
      static join(CC) {
        if (!CC.length) return Tz.empty;
        let zC = CC[CC.length - 1];
        for (let ZC = CC.length - 2; ZC >= 0; ZC--)
          for (let QC = CC[ZC]; QC != Tz.empty; QC = QC.nextLayer) zC = new Tz(QC.chunkPos, QC.chunk, zC, Math.max(QC.bQC, zC.bQC));
        return zC
      }
    }
    Tz.empty = new Tz([], [], null, -1), Tz.empty.nextLayer = Tz.empty;
    class az {
      finishChunk(CC) {
        this.chunks.push(new sz(this.from, this.to, this.value, this.bQC)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.bQC), this.bQC = -1, CC && (this.from = [], this.to = [], this.value = [])
      }
      constructor() {
        this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.bQC = -1, this.setMaxPoint = -1, this.nextLayer = null
      }
      add(CC, zC, ZC) {
        this.addInner(CC, zC, ZC) || (this.nextLayer || (this.nextLayer = new az)).add(CC, zC, ZC)
      }
      addInner(CC, zC, ZC) {
        let QC = CC - this.lastTo || ZC.startSide - this.last.endSide;
        if (QC <= 0 && (CC - this.lastFrom || ZC.startSide - this.last.startSide) < 0) throw new Error("Ranges must be added sorted by `from` position and `startSide`");
        return !(QC < 0) && (250 == this.from.length && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = CC), this.from.push(CC - this.chunkStart), this.to.push(zC - this.chunkStart), this.last = ZC, this.lastFrom = CC, this.lastTo = zC, this.value.push(ZC), ZC.point && (this.bQC = Math.max(this.bQC, zC - CC)), !0)
      }
      addChunk(CC, zC) {
        if ((CC - this.lastTo || zC.value[0].startSide - this.last.endSide) < 0) return !1;
        this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, zC.bQC), this.chunks.push(zC), this.chunkPos.push(CC);
        let ZC = zC.value.length - 1;
        return this.last = zC.value[ZC], this.lastFrom = zC.from[ZC] + CC, this.lastTo = zC.to[ZC] + CC, !0
      }
      finish() {
        return this.finishInner(Tz.empty)
      }
      finishInner(CC) {
        if (this.from.length && this.finishChunk(!1), 0 == this.chunks.length) return CC;
        let zC = Tz.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(CC) : CC, this.setMaxPoint);
        return this.from = null, zC
      }
    }

    function tz(CC, zC, ZC) {
      let QC = new Map;
      for (let bC of CC)
        for (let CC = 0; CC < bC.chunk.length; CC++) bC.chunk[CC].bQC <= 0 && QC.set(bC.chunk[CC], bC.chunkPos[CC]);
      let wC = new Set;
      for (let bC of zC)
        for (let CC = 0; CC < bC.chunk.length; CC++) {
          let zC = QC.get(bC.chunk[CC]);
          null == zC || (ZC ? ZC.mapPos(zC) : zC) != bC.chunkPos[CC] || (null === ZC || void 0 === ZC ? void 0 : ZC.touchesRange(zC, zC + bC.chunk[CC].length)) || wC.add(bC.chunk[CC])
        }
      return wC
    }
    class Dz {
      constructor(CC, zC, ZC) {
        let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.layer = CC, this.skip = zC, this.nQC = ZC, this.rank = QC
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      get endSide() {
        return this.value ? this.value.endSide : 0
      }
      goto(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(CC, zC, !1), this
      }
      gotoInner(CC, zC, ZC) {
        for (; this.chunkIndex < this.layer.chunk.length;) {
          let zC = this.layer.chunk[this.chunkIndex];
          if (!(this.skip && this.skip.has(zC) || this.layer.chunkEnd(this.chunkIndex) < CC || zC.bQC < this.nQC)) break;
          this.chunkIndex++, ZC = !1
        }
        if (this.chunkIndex < this.layer.chunk.length) {
          let QC = this.layer.chunk[this.chunkIndex].findIndex(CC - this.layer.chunkPos[this.chunkIndex], zC, !0);
          (!ZC || this.rangeIndex < QC) && this.setRangeIndex(QC)
        }
        this.next()
      }
      forward(CC, zC) {
        (this.to - CC || this.endSide - zC) < 0 && this.gotoInner(CC, zC, !0)
      }
      next() {
        for (;;) {
          if (this.chunkIndex == this.layer.chunk.length) {
            this.from = this.to = 1e9, this.value = null;
            break
          } {
            let CC = this.layer.chunkPos[this.chunkIndex],
              zC = this.layer.chunk[this.chunkIndex],
              ZC = CC + zC.from[this.rangeIndex];
            if (this.from = ZC, this.to = CC + zC.to[this.rangeIndex], this.value = zC.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.nQC < 0 || this.value.point && this.to - this.from >= this.nQC) break
          }
        }
      }
      setRangeIndex(CC) {
        if (CC == this.layer.chunk[this.chunkIndex].value.length) {
          if (this.chunkIndex++, this.skip)
            for (; this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]);) this.chunkIndex++;
          this.rangeIndex = 0
        } else this.rangeIndex = CC
      }
      nextChunk() {
        this.chunkIndex++, this.rangeIndex = 0, this.next()
      }
      compare(CC) {
        return this.from - CC.from || this.startSide - CC.startSide || this.rank - CC.rank || this.to - CC.to || this.endSide - CC.endSide
      }
    }
    class jz {
      constructor(CC) {
        this.heap = CC
      }
      static from(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          QC = [];
        for (let wC = 0; wC < CC.length; wC++)
          for (let bC = CC[wC]; !bC.fg; bC = bC.nextLayer) bC.bQC >= ZC && QC.push(new Dz(bC, zC, ZC, wC));
        return 1 == QC.length ? QC[0] : new jz(QC)
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      goto(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        for (let ZC of this.heap) ZC.goto(CC, zC);
        for (let ZC = this.heap.length >> 1; ZC >= 0; ZC--) yz(this.heap, ZC);
        return this.next(), this
      }
      forward(CC, zC) {
        for (let ZC of this.heap) ZC.forward(CC, zC);
        for (let ZC = this.heap.length >> 1; ZC >= 0; ZC--) yz(this.heap, ZC);
        (this.to - CC || this.value.endSide - zC) < 0 && this.next()
      }
      next() {
        if (0 == this.heap.length) this.from = this.to = 1e9, this.value = null, this.rank = -1;
        else {
          let CC = this.heap[0];
          this.from = CC.from, this.to = CC.to, this.value = CC.value, this.rank = CC.rank, CC.value && CC.next(), yz(this.heap, 0)
        }
      }
    }

    function yz(CC, zC) {
      for (let ZC = CC[zC];;) {
        let QC = 1 + (zC << 1);
        if (QC >= CC.length) break;
        let wC = CC[QC];
        if (QC + 1 < CC.length && wC.compare(CC[QC + 1]) >= 0 && (wC = CC[QC + 1], QC++), ZC.compare(wC) < 0) break;
        CC[QC] = ZC, CC[zC] = wC, zC = QC
      }
    }
    class Lz {
      constructor(CC, zC, ZC) {
        this.nQC = ZC, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = jz.from(CC, zC, ZC)
      }
      goto(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.cursor.goto(CC, zC), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = CC, this.endSide = zC, this.openStart = -1, this.next(), this
      }
      forward(CC, zC) {
        for (; this.minActive > -1 && (this.activeTo[this.minActive] - CC || this.active[this.minActive].endSide - zC) < 0;) this.removeActive(this.minActive);
        this.cursor.forward(CC, zC)
      }
      removeActive(CC) {
        Oz(this.active, CC), Oz(this.activeTo, CC), Oz(this.activeRank, CC), this.minActive = Vz(this.active, this.activeTo)
      }
      addActive(CC) {
        let zC = 0,
          {
            value: ZC,
            to: QC,
            rank: wC
          } = this.cursor;
        for (; zC < this.activeRank.length && (wC - this.activeRank[zC] || QC - this.activeTo[zC]) > 0;) zC++;
        kz(this.active, zC, ZC), kz(this.activeTo, zC, QC), kz(this.activeRank, zC, wC), CC && kz(CC, zC, this.cursor.from), this.minActive = Vz(this.active, this.activeTo)
      }
      next() {
        let CC = this.to,
          zC = this.point;
        this.point = null;
        let ZC = this.openStart < 0 ? [] : null;
        for (;;) {
          let QC = this.minActive;
          if (QC > -1 && (this.activeTo[QC] - this.cursor.from || this.active[QC].endSide - this.cursor.startSide) < 0) {
            if (this.activeTo[QC] > CC) {
              this.to = this.activeTo[QC], this.endSide = this.active[QC].endSide;
              break
            }
            this.removeActive(QC), ZC && Oz(ZC, QC)
          } else {
            if (!this.cursor.value) {
              this.to = this.endSide = 1e9;
              break
            }
            if (this.cursor.from > CC) {
              this.to = this.cursor.from, this.endSide = this.cursor.startSide;
              break
            } {
              let CC = this.cursor.value;
              if (CC.point) {
                if (!(zC && this.cursor.to == this.to && this.cursor.from < this.cursor.to)) {
                  this.point = CC, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = CC.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
                  break
                }
                this.cursor.next()
              } else this.addActive(ZC), this.cursor.next()
            }
          }
        }
        if (ZC) {
          this.openStart = 0;
          for (let zC = ZC.length - 1; zC >= 0 && ZC[zC] < CC; zC--) this.openStart++
        }
      }
      activeForPoint(CC) {
        if (!this.active.length) return this.active;
        let zC = [];
        for (let ZC = this.active.length - 1; ZC >= 0 && !(this.activeRank[ZC] < this.pointRank); ZC--)(this.activeTo[ZC] > CC || this.activeTo[ZC] == CC && this.active[ZC].endSide >= this.point.endSide) && zC.push(this.active[ZC]);
        return zC.reverse()
      }
      openEnd(CC) {
        let zC = 0;
        for (let ZC = this.activeTo.length - 1; ZC >= 0 && this.activeTo[ZC] > CC; ZC--) zC++;
        return zC
      }
    }

    function Uz(CC, zC, ZC, QC, wC, bC) {
      CC.goto(zC), ZC.goto(QC);
      let nC = QC + wC,
        fC = QC,
        oC = QC - zC,
        qC = !!bC.boundChange;
      for (let FC = !1;;) {
        let zC = CC.to + oC - ZC.to,
          QC = zC || CC.endSide - ZC.endSide,
          wC = QC < 0 ? CC.to + oC : ZC.to,
          WC = Math.min(wC, nC);
        if (CC.point || ZC.point ? (CC.point && ZC.point && cz(CC.point, ZC.point) && Bz(CC.activeForPoint(CC.to), ZC.activeForPoint(ZC.to)) || bC.comparePoint(fC, WC, CC.point, ZC.point), FC = !1) : (FC && bC.boundChange(fC), WC > fC && !Bz(CC.active, ZC.active) && bC.compareRange(fC, WC, CC.active, ZC.active), qC && WC < nC && (zC || CC.openEnd(wC) != ZC.openEnd(wC)) && (FC = !0)), wC > nC) break;
        fC = wC, QC <= 0 && CC.next(), QC >= 0 && ZC.next()
      }
    }

    function Bz(CC, zC) {
      if (CC.length != zC.length) return !1;
      for (let ZC = 0; ZC < CC.length; ZC++)
        if (CC[ZC] != zC[ZC] && !cz(CC[ZC], zC[ZC])) return !1;
      return !0
    }

    function Oz(CC, zC) {
      for (let ZC = zC, QC = CC.length - 1; ZC < QC; ZC++) CC[ZC] = CC[ZC + 1];
      CC.pop()
    }

    function kz(CC, zC, ZC) {
      for (let QC = CC.length - 1; QC >= zC; QC--) CC[QC + 1] = CC[QC];
      CC[zC] = ZC
    }

    function Vz(CC, zC) {
      let ZC = -1,
        QC = 1e9;
      for (let wC = 0; wC < zC.length; wC++)(zC[wC] - QC || CC[wC].endSide - CC[ZC].endSide) < 0 && (ZC = wC, QC = zC[wC]);
      return ZC
    }

    function CZ(CC, zC) {
      let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : CC.length,
        QC = 0;
      for (let wC = 0; wC < ZC && wC < CC.length;) 9 == CC.charCodeAt(wC) ? (QC += zC - QC % zC, wC++) : (QC++, wC = vC(CC, wC));
      return QC
    }

    function zZ(CC, zC, ZC, QC) {
      for (let wC = 0, bC = 0;;) {
        if (bC >= zC) return wC;
        if (wC == CC.length) break;
        bC += 9 == CC.charCodeAt(wC) ? ZC - bC % ZC : 1, wC = vC(CC, wC)
      }
      return !0 === QC ? -1 : CC.length
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);