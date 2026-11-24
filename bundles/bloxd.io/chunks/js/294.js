export const id = 294;
export const ids = [294];
export const modules = {
  41212: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => nz,
      e: () => jD,
      ChangeSet: () => dD,
      h: () => Tz,
      j: () => kD,
      k: () => Sz,
      n: () => oD,
      q: () => bD,
      u: () => sz,
      z: () => kz,
      v: () => mz,
      C: () => lz,
      E: () => Jz,
      G: () => HD,
      K: () => BD,
      M: () => Ez,
      P: () => PD,
      T: () => xD,
      W: () => iz,
      Z: () => Dw,
      _: () => VD,
      bb: () => zw,
      fb: () => CD
    });
    let pD = [],
      sD = [];

    function KD(DD) {
      if (DD < 768) return !1;
      for (let zD = 0, wD = pD.length;;) {
        let KD = zD + wD >> 1;
        if (DD < pD[KD]) wD = KD;
        else {
          if (!(DD >= sD[KD])) return !0;
          zD = KD + 1
        }
        if (zD == wD) return !1
      }
    }

    function rD(DD) {
      return DD >= 127462 && DD <= 127487
    }(() => {
      let DD = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((DD => DD ? parseInt(DD, 36) : 1));
      for (let zD = 0, wD = 0; zD < DD.length; zD++)(zD % 2 ? sD : pD).push(wD += DD[zD])
    })();
    const LD = 8205;

    function cD(DD, zD) {
      return (!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2] ? gD : RD)(DD, zD, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function gD(DD, zD, wD) {
      if (zD == DD.length) return zD;
      zD && UD(DD.charCodeAt(zD)) && fD(DD.charCodeAt(zD - 1)) && zD--;
      let pD = AD(DD, zD);
      for (zD += ID(pD); zD < DD.length;) {
        let sD = AD(DD, zD);
        if (pD == LD || sD == LD || wD && KD(sD)) zD += ID(sD), pD = sD;
        else {
          if (!rD(sD)) break;
          {
            let wD = 0,
              pD = zD - 2;
            for (; pD >= 0 && rD(AD(DD, pD));) wD++, pD -= 2;
            if (wD % 2 == 0) break;
            zD += 2
          }
        }
      }
      return zD
    }

    function RD(DD, zD, wD) {
      for (; zD > 0;) {
        let pD = gD(DD, zD - 2, wD);
        if (pD < zD) return pD;
        zD--
      }
      return 0
    }

    function AD(DD, zD) {
      let wD = DD.charCodeAt(zD);
      if (!fD(wD) || zD + 1 == DD.length) return wD;
      let pD = DD.charCodeAt(zD + 1);
      return UD(pD) ? pD - 56320 + (wD - 55296 << 10) + 65536 : wD
    }

    function UD(DD) {
      return DD >= 56320 && DD < 57344
    }

    function fD(DD) {
      return DD >= 55296 && DD < 56320
    }

    function ID(DD) {
      return DD < 65536 ? 1 : 2
    }
    class BD {
      lineAt(DD) {
        if (DD < 0 || DD > this.length) throw new RangeError(`Invalid position ${DD} in document of length ${this.length}`);
        return this.lineInner(DD, !1, 1, 0)
      }
      line(DD) {
        if (DD < 1 || DD > this.lines) throw new RangeError(`Invalid line number ${DD} in ${this.lines}-line document`);
        return this.lineInner(DD, !0, 1, 0)
      }
      replace(DD, zD, wD) {
        [DD, zD] = XD(this, DD, zD);
        let pD = [];
        return this.decompose(0, DD, pD, 2), wD.length && wD.decompose(0, wD.length, pD, 3), this.decompose(zD, this.length, pD, 1), hD.from(pD, this.length - (zD - DD) + wD.length)
      }
      append(DD) {
        return this.replace(this.length, this.length, DD)
      }
      slice(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        [DD, zD] = XD(this, DD, zD);
        let wD = [];
        return this.decompose(DD, zD, wD, 0), hD.from(wD, zD - DD)
      }
      eq(DD) {
        if (DD == this) return !0;
        if (DD.length != this.length || DD.lines != this.lines) return !1;
        let zD = this.scanIdentical(DD, 1),
          wD = this.length - this.scanIdentical(DD, -1),
          pD = new OD(this),
          sD = new OD(DD);
        for (let KD = zD, rD = zD;;) {
          if (pD.next(KD), sD.next(KD), KD = 0, pD.lineBreak != sD.lineBreak || pD.done != sD.done || pD.value != sD.value) return !1;
          if (rD += pD.value.length, pD.done || rD >= wD) return !0
        }
      }
      iter() {
        return new OD(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1)
      }
      iterRange(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        return new JD(this, DD, zD)
      }
      iterLines(DD, zD) {
        let wD;
        if (null == DD) wD = this.iter();
        else {
          null == zD && (zD = this.lines + 1);
          let pD = this.line(DD).from;
          wD = this.iterRange(pD, Math.max(pD, zD == this.lines + 1 ? this.length : zD <= 1 ? 0 : this.line(zD - 1).to))
        }
        return new ED(wD)
      }
      toString() {
        return this.sliceString(0)
      }
      toJSON() {
        let DD = [];
        return this.flatten(DD), DD
      }
      constructor() {}
      static of (DD) {
        if (0 == DD.length) throw new RangeError("A document must have at least one line");
        return 1 != DD.length || DD[0] ? DD.length <= 32 ? new GD(DD) : hD.from(GD.split(DD, [])) : BD.empty
      }
    }
    class GD extends BD {
      constructor(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(DD) {
          let zD = -1;
          for (let wD of DD) zD += wD.length + 1;
          return zD
        }(DD);
        super(), this.text = DD, this.length = zD
      }
      get lines() {
        return this.text.length
      }
      get children() {
        return null
      }
      lineInner(DD, zD, wD, pD) {
        for (let sD = 0;; sD++) {
          let KD = this.text[sD],
            rD = pD + KD.length;
          if ((zD ? wD : rD) >= DD) return new QD(pD, rD, wD, KD);
          pD = rD + 1, wD++
        }
      }
      decompose(DD, zD, wD, pD) {
        let sD = DD <= 0 && zD >= this.length ? this : new GD(MD(this.text, DD, zD), Math.min(zD, this.length) - Math.max(0, DD));
        if (1 & pD) {
          let DD = wD.pop(),
            zD = nD(sD.text, DD.text.slice(), 0, sD.length);
          if (zD.length <= 32) wD.push(new GD(zD, DD.length + sD.length));
          else {
            let DD = zD.length >> 1;
            wD.push(new GD(zD.slice(0, DD)), new GD(zD.slice(DD)))
          }
        } else wD.push(sD)
      }
      replace(DD, zD, wD) {
        if (!(wD instanceof GD)) return super.replace(DD, zD, wD);
        [DD, zD] = XD(this, DD, zD);
        let pD = nD(this.text, nD(wD.text, MD(this.text, 0, DD)), zD),
          sD = this.length + wD.length - (zD - DD);
        return pD.length <= 32 ? new GD(pD, sD) : hD.from(GD.split(pD, []), sD)
      }
      sliceString(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [DD, zD] = XD(this, DD, zD);
        let pD = "";
        for (let sD = 0, KD = 0; sD <= zD && KD < this.text.length; KD++) {
          let rD = this.text[KD],
            LD = sD + rD.length;
          sD > DD && KD && (pD += wD), DD < LD && zD > sD && (pD += rD.slice(Math.max(0, DD - sD), zD - sD)), sD = LD + 1
        }
        return pD
      }
      flatten(DD) {
        for (let zD of this.text) DD.push(zD)
      }
      scanIdentical() {
        return 0
      }
      static split(DD, zD) {
        let wD = [],
          pD = -1;
        for (let sD of DD) wD.push(sD), pD += sD.length + 1, 32 == wD.length && (zD.push(new GD(wD, pD)), wD = [], pD = -1);
        return pD > -1 && zD.push(new GD(wD, pD)), zD
      }
    }
    class hD extends BD {
      constructor(DD, zD) {
        super(), this.children = DD, this.length = zD, this.lines = 0;
        for (let wD of DD) this.lines += wD.lines
      }
      lineInner(DD, zD, wD, pD) {
        for (let sD = 0;; sD++) {
          let KD = this.children[sD],
            rD = pD + KD.length,
            LD = wD + KD.lines - 1;
          if ((zD ? LD : rD) >= DD) return KD.lineInner(DD, zD, wD, pD);
          pD = rD + 1, wD = LD + 1
        }
      }
      decompose(DD, zD, wD, pD) {
        for (let sD = 0, KD = 0; KD <= zD && sD < this.children.length; sD++) {
          let rD = this.children[sD],
            LD = KD + rD.length;
          if (DD <= LD && zD >= KD) {
            let sD = pD & ((KD <= DD ? 1 : 0) | (LD >= zD ? 2 : 0));
            KD >= DD && LD <= zD && !sD ? wD.push(rD) : rD.decompose(DD - KD, zD - KD, wD, sD)
          }
          KD = LD + 1
        }
      }
      replace(DD, zD, wD) {
        if ([DD, zD] = XD(this, DD, zD), wD.lines < this.lines)
          for (let pD = 0, sD = 0; pD < this.children.length; pD++) {
            let KD = this.children[pD],
              rD = sD + KD.length;
            if (DD >= sD && zD <= rD) {
              let LD = KD.replace(DD - sD, zD - sD, wD),
                cD = this.lines - KD.lines + LD.lines;
              if (LD.lines < cD >> 4 && LD.lines > cD >> 6) {
                let sD = this.children.slice();
                return sD[pD] = LD, new hD(sD, this.length - (zD - DD) + wD.length)
              }
              return super.replace(sD, rD, LD)
            }
            sD = rD + 1
          }
        return super.replace(DD, zD, wD)
      }
      sliceString(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [DD, zD] = XD(this, DD, zD);
        let pD = "";
        for (let sD = 0, KD = 0; sD < this.children.length && KD <= zD; sD++) {
          let rD = this.children[sD],
            LD = KD + rD.length;
          KD > DD && sD && (pD += wD), DD < LD && zD > KD && (pD += rD.sliceString(DD - KD, zD - KD, wD)), KD = LD + 1
        }
        return pD
      }
      flatten(DD) {
        for (let zD of this.children) zD.flatten(DD)
      }
      scanIdentical(DD, zD) {
        if (!(DD instanceof hD)) return 0;
        let wD = 0,
          [pD, sD, KD, rD] = zD > 0 ? [0, 0, this.children.length, DD.children.length] : [this.children.length - 1, DD.children.length - 1, -1, -1];
        for (;; pD += zD, sD += zD) {
          if (pD == KD || sD == rD) return wD;
          let LD = this.children[pD],
            cD = DD.children[sD];
          if (LD != cD) return wD + LD.scanIdentical(cD, zD);
          wD += LD.length + 1
        }
      }
      static from(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : DD.reduce(((DD, zD) => DD + zD.length + 1), -1),
          wD = 0;
        for (let UD of DD) wD += UD.lines;
        if (wD < 32) {
          let wD = [];
          for (let zD of DD) zD.flatten(wD);
          return new GD(wD, zD)
        }
        let pD = Math.max(32, wD >> 5),
          sD = pD << 1,
          KD = pD >> 1,
          rD = [],
          LD = 0,
          cD = -1,
          gD = [];

        function RD(DD) {
          let zD;
          if (DD.lines > sD && DD instanceof hD)
            for (let wD of DD.children) RD(wD);
          else DD.lines > KD && (LD > KD || !LD) ? (AD(), rD.push(DD)) : DD instanceof GD && LD && (zD = gD[gD.length - 1]) instanceof GD && DD.lines + zD.lines <= 32 ? (LD += DD.lines, cD += DD.length + 1, gD[gD.length - 1] = new GD(zD.text.concat(DD.text), zD.length + 1 + DD.length)) : (LD + DD.lines > pD && AD(), LD += DD.lines, cD += DD.length + 1, gD.push(DD))
        }

        function AD() {
          0 != LD && (rD.push(1 == gD.length ? gD[0] : hD.from(gD, cD)), cD = -1, LD = gD.length = 0)
        }
        for (let UD of DD) RD(UD);
        return AD(), 1 == rD.length ? rD[0] : new hD(rD, zD)
      }
    }

    function nD(DD, zD) {
      let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e9;
      for (let sD = 0, KD = 0, rD = !0; KD < DD.length && sD <= pD; KD++) {
        let LD = DD[KD],
          cD = sD + LD.length;
        cD >= wD && (cD > pD && (LD = LD.slice(0, pD - sD)), sD < wD && (LD = LD.slice(wD - sD)), rD ? (zD[zD.length - 1] += LD, rD = !1) : zD.push(LD)), sD = cD + 1
      }
      return zD
    }

    function MD(DD, zD, wD) {
      return nD(DD, [""], zD, wD)
    }
    BD.empty = new GD([""], 0);
    class OD {
      constructor(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.dir = zD, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [DD], this.offsets = [zD > 0 ? 1 : (DD instanceof GD ? DD.text.length : DD.children.length) << 1]
      }
      nextInner(DD, zD) {
        for (this.done = this.lineBreak = !1;;) {
          let wD = this.nodes.length - 1,
            pD = this.nodes[wD],
            sD = this.offsets[wD],
            KD = sD >> 1,
            rD = pD instanceof GD ? pD.text.length : pD.children.length;
          if (KD == (zD > 0 ? rD : 0)) {
            if (0 == wD) return this.done = !0, this.value = "", this;
            zD > 0 && this.offsets[wD - 1]++, this.nodes.pop(), this.offsets.pop()
          } else if ((1 & sD) == (zD > 0 ? 0 : 1)) {
            if (this.offsets[wD] += zD, 0 == DD) return this.lineBreak = !0, this.value = "\n", this;
            DD--
          } else if (pD instanceof GD) {
            let sD = pD.text[KD + (zD < 0 ? -1 : 0)];
            if (this.offsets[wD] += zD, sD.length > Math.max(0, DD)) return this.value = 0 == DD ? sD : zD > 0 ? sD.slice(DD) : sD.slice(0, sD.length - DD), this;
            DD -= sD.length
          } else {
            let sD = pD.children[KD + (zD < 0 ? -1 : 0)];
            DD > sD.length ? (DD -= sD.length, this.offsets[wD] += zD) : (zD < 0 && this.offsets[wD]--, this.nodes.push(sD), this.offsets.push(zD > 0 ? 1 : (sD instanceof GD ? sD.text.length : sD.children.length) << 1))
          }
        }
      }
      next() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return DD < 0 && (this.nextInner(-DD, -this.dir), DD = this.value.length), this.nextInner(DD, this.dir)
      }
    }
    class JD {
      constructor(DD, zD, wD) {
        this.value = "", this.done = !1, this.cursor = new OD(DD, zD > wD ? -1 : 1), this.pos = zD > wD ? DD.length : 0, this.from = Math.min(zD, wD), this.to = Math.max(zD, wD)
      }
      nextInner(DD, zD) {
        if (zD < 0 ? this.pos <= this.from : this.pos >= this.to) return this.value = "", this.done = !0, this;
        DD += Math.max(0, zD < 0 ? this.pos - this.to : this.from - this.pos);
        let wD = zD < 0 ? this.pos - this.from : this.to - this.pos;
        DD > wD && (DD = wD), wD -= DD;
        let {
          value: pD
        } = this.cursor.next(DD);
        return this.pos += (pD.length + DD) * zD, this.value = pD.length <= wD ? pD : zD < 0 ? pD.slice(pD.length - wD) : pD.slice(0, wD), this.done = !this.value, this
      }
      next() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return DD < 0 ? DD = Math.max(DD, this.from - this.pos) : DD > 0 && (DD = Math.min(DD, this.to - this.pos)), this.nextInner(DD, this.cursor.dir)
      }
      get lineBreak() {
        return this.cursor.lineBreak && "" != this.value
      }
    }
    class ED {
      constructor(DD) {
        this.inner = DD, this.afterBreak = !0, this.value = "", this.done = !1
      }
      next() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          {
            done: zD,
            lineBreak: wD,
            value: pD
          } = this.inner.next(DD);
        return zD && this.afterBreak ? (this.value = "", this.afterBreak = !1) : zD ? (this.done = !0, this.value = "") : wD ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = pD, this.afterBreak = !1), this
      }
      get lineBreak() {
        return !1
      }
    }
    "undefined" != typeof Symbol && (BD.prototype[Symbol.iterator] = function() {
      return this.iter()
    }, OD.prototype[Symbol.iterator] = JD.prototype[Symbol.iterator] = ED.prototype[Symbol.iterator] = function() {
      return this
    });
    class QD {
      constructor(DD, zD, wD, pD) {
        this.from = DD, this.to = zD, this.number = wD, this.text = pD
      }
      get length() {
        return this.to - this.from
      }
    }

    function XD(DD, zD, wD) {
      return [zD = Math.max(0, Math.min(DD.length, zD)), Math.max(zD, Math.min(DD.length, wD))]
    }

    function VD(DD, zD) {
      return cD(DD, zD, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function PD(DD, zD) {
      let wD = DD.charCodeAt(zD);
      if (!((pD = wD) >= 55296 && pD < 56320) || zD + 1 == DD.length) return wD;
      var pD;
      let sD = DD.charCodeAt(zD + 1);
      return function(DD) {
        return DD >= 56320 && DD < 57344
      }(sD) ? sD - 56320 + (wD - 55296 << 10) + 65536 : wD
    }

    function CD(DD) {
      return DD <= 65535 ? String.fromCharCode(DD) : (DD -= 65536, String.fromCharCode(55296 + (DD >> 10), 56320 + (1023 & DD)))
    }

    function xD(DD) {
      return DD < 65536 ? 1 : 2
    }
    const TD = /\r\n?|\n/;
    var bD = function(DD) {
      return DD[DD.Simple = 0] = "Simple", DD[DD.TrackDel = 1] = "TrackDel", DD[DD.TrackBefore = 2] = "TrackBefore", DD[DD.TrackAfter = 3] = "TrackAfter", DD
    }(bD || (bD = {}));
    class jD {
      constructor(DD) {
        this.sections = DD
      }
      get length() {
        let DD = 0;
        for (let zD = 0; zD < this.sections.length; zD += 2) DD += this.sections[zD];
        return DD
      }
      get newLength() {
        let DD = 0;
        for (let zD = 0; zD < this.sections.length; zD += 2) {
          let wD = this.sections[zD + 1];
          DD += wD < 0 ? this.sections[zD] : wD
        }
        return DD
      }
      get empty() {
        return 0 == this.sections.length || 2 == this.sections.length && this.sections[1] < 0
      }
      iterGaps(DD) {
        for (let zD = 0, wD = 0, pD = 0; zD < this.sections.length;) {
          let sD = this.sections[zD++],
            KD = this.sections[zD++];
          KD < 0 ? (DD(wD, pD, sD), pD += sD) : pD += KD, wD += sD
        }
      }
      iterChangedRanges(DD) {
        lD(this, DD, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get invertedDesc() {
        let DD = [];
        for (let zD = 0; zD < this.sections.length;) {
          let wD = this.sections[zD++],
            pD = this.sections[zD++];
          pD < 0 ? DD.push(wD, pD) : DD.push(pD, wD)
        }
        return new jD(DD)
      }
      composeDesc(DD) {
        return this.empty ? DD : DD.empty ? this : ND(this, DD)
      }
      mapDesc(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return DD.empty ? this : WD(this, DD, zD)
      }
      mapPos(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : bD.Simple,
          pD = 0,
          sD = 0;
        for (let KD = 0; KD < this.sections.length;) {
          let rD = this.sections[KD++],
            LD = this.sections[KD++],
            cD = pD + rD;
          if (LD < 0) {
            if (cD > DD) return sD + (DD - pD);
            sD += rD
          } else {
            if (wD != bD.Simple && cD >= DD && (wD == bD.TrackDel && pD < DD && cD > DD || wD == bD.TrackBefore && pD < DD || wD == bD.TrackAfter && cD > DD)) return null;
            if (cD > DD || cD == DD && zD < 0 && !rD) return DD == pD || zD < 0 ? sD : sD + LD;
            sD += LD
          }
          pD = cD
        }
        if (DD > pD) throw new RangeError(`Position ${DD} is out of range for changeset of length ${pD}`);
        return sD
      }
      touchesRange(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : DD;
        for (let wD = 0, pD = 0; wD < this.sections.length && pD <= zD;) {
          let sD = pD + this.sections[wD++];
          if (this.sections[wD++] >= 0 && pD <= zD && sD >= DD) return !(pD < DD && sD > zD) || "cover";
          pD = sD
        }
        return !1
      }
      toString() {
        let DD = "";
        for (let zD = 0; zD < this.sections.length;) {
          let wD = this.sections[zD++],
            pD = this.sections[zD++];
          DD += (DD ? " " : "") + wD + (pD >= 0 ? ":" + pD : "")
        }
        return DD
      }
      toJSON() {
        return this.sections
      }
      static fromJSON(DD) {
        if (!Array.isArray(DD) || DD.length % 2 || DD.some((DD => "number" != typeof DD))) throw new RangeError("Invalid JSON representation of ChangeDesc");
        return new jD(DD)
      }
      static create(DD) {
        return new jD(DD)
      }
    }
    class dD extends jD {
      constructor(DD, zD) {
        super(DD), this.inserted = zD
      }
      apply(DD) {
        if (this.length != DD.length) throw new RangeError("Applying change set to a document with the wrong length");
        return lD(this, ((zD, wD, pD, sD, KD) => DD = DD.replace(pD, pD + (wD - zD), KD)), !1), DD
      }
      mapDesc(DD) {
        return WD(this, DD, arguments.length > 1 && void 0 !== arguments[1] && arguments[1], !0)
      }
      invert(DD) {
        let zD = this.sections.slice(),
          wD = [];
        for (let pD = 0, sD = 0; pD < zD.length; pD += 2) {
          let KD = zD[pD],
            rD = zD[pD + 1];
          if (rD >= 0) {
            zD[pD] = rD, zD[pD + 1] = KD;
            let LD = pD >> 1;
            for (; wD.length < LD;) wD.push(BD.empty);
            wD.push(KD ? DD.slice(sD, sD + KD) : BD.empty)
          }
          sD += KD
        }
        return new dD(zD, wD)
      }
      compose(DD) {
        return this.empty ? DD : DD.empty ? this : ND(this, DD, !0)
      }
      map(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return DD.empty ? this : WD(this, DD, zD, !0)
      }
      iterChanges(DD) {
        lD(this, DD, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get desc() {
        return jD.create(this.sections)
      }
      filter(DD) {
        let zD = [],
          wD = [],
          pD = [],
          sD = new ZD(this);
        DD: for (let KD = 0, rD = 0;;) {
          let LD = KD == DD.length ? 1e9 : DD[KD++];
          for (; rD < LD || rD == LD && 0 == sD.len;) {
            if (sD.done) break DD;
            let DD = Math.min(sD.len, LD - rD);
            SD(pD, DD, -1);
            let KD = -1 == sD.ins ? -1 : 0 == sD.off ? sD.ins : 0;
            SD(zD, DD, KD), KD > 0 && iD(wD, zD, sD.text), sD.forward(DD), rD += DD
          }
          let cD = DD[KD++];
          for (; rD < cD;) {
            if (sD.done) break DD;
            let DD = Math.min(sD.len, cD - rD);
            SD(zD, DD, -1), SD(pD, DD, -1 == sD.ins ? -1 : 0 == sD.off ? sD.ins : 0), sD.forward(DD), rD += DD
          }
        }
        return {
          changes: new dD(zD, wD),
          filtered: jD.create(pD)
        }
      }
      toJSON() {
        let DD = [];
        for (let zD = 0; zD < this.sections.length; zD += 2) {
          let wD = this.sections[zD],
            pD = this.sections[zD + 1];
          pD < 0 ? DD.push(wD) : 0 == pD ? DD.push([wD]) : DD.push([wD].concat(this.inserted[zD >> 1].toJSON()))
        }
        return DD
      }
      static of (DD, zD, wD) {
        let pD = [],
          sD = [],
          KD = 0,
          rD = null;

        function LD() {
          if (!(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && !pD.length) return;
          KD < zD && SD(pD, zD - KD, -1);
          let DD = new dD(pD, sD);
          rD = rD ? rD.compose(DD.map(rD)) : DD, pD = [], sD = [], KD = 0
        }
        return function DD(cD) {
          if (Array.isArray(cD))
            for (let zD of cD) DD(zD);
          else if (cD instanceof dD) {
            if (cD.length != zD) throw new RangeError(`Mismatched change set length (got ${cD.length}, expected ${zD})`);
            LD(), rD = rD ? rD.compose(cD.map(rD)) : cD
          } else {
            let {
              from: DD,
              to: rD = DD,
              insert: gD
            } = cD;
            if (DD > rD || DD < 0 || rD > zD) throw new RangeError(`Invalid change range ${DD} to ${rD} (in doc of length ${zD})`);
            let RD = gD ? "string" == typeof gD ? BD.of(gD.split(wD || TD)) : gD : BD.empty,
              AD = RD.length;
            if (DD == rD && 0 == AD) return;
            DD < KD && LD(), DD > KD && SD(pD, DD - KD, -1), SD(pD, rD - DD, AD), iD(sD, pD, RD), KD = rD
          }
        }(DD), LD(!rD), rD
      }
      static empty(DD) {
        return new dD(DD ? [DD, -1] : [], [])
      }
      static fromJSON(DD) {
        if (!Array.isArray(DD)) throw new RangeError("Invalid JSON representation of ChangeSet");
        let zD = [],
          wD = [];
        for (let pD = 0; pD < DD.length; pD++) {
          let sD = DD[pD];
          if ("number" == typeof sD) zD.push(sD, -1);
          else {
            if (!Array.isArray(sD) || "number" != typeof sD[0] || sD.some(((DD, zD) => zD && "string" != typeof DD))) throw new RangeError("Invalid JSON representation of ChangeSet");
            if (1 == sD.length) zD.push(sD[0], 0);
            else {
              for (; wD.length < pD;) wD.push(BD.empty);
              wD[pD] = BD.of(sD.slice(1)), zD.push(sD[0], wD[pD].length)
            }
          }
        }
        return new dD(zD, wD)
      }
      static createSet(DD, zD) {
        return new dD(DD, zD)
      }
    }

    function SD(DD, zD, wD) {
      let pD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (0 == zD && wD <= 0) return;
      let sD = DD.length - 2;
      sD >= 0 && wD <= 0 && wD == DD[sD + 1] ? DD[sD] += zD : sD >= 0 && 0 == zD && 0 == DD[sD] ? DD[sD + 1] += wD : pD ? (DD[sD] += zD, DD[sD + 1] += wD) : DD.push(zD, wD)
    }

    function iD(DD, zD, wD) {
      if (0 == wD.length) return;
      let pD = zD.length - 2 >> 1;
      if (pD < DD.length) DD[DD.length - 1] = DD[DD.length - 1].append(wD);
      else {
        for (; DD.length < pD;) DD.push(BD.empty);
        DD.push(wD)
      }
    }

    function lD(DD, zD, wD) {
      let pD = DD.inserted;
      for (let sD = 0, KD = 0, rD = 0; rD < DD.sections.length;) {
        let LD = DD.sections[rD++],
          cD = DD.sections[rD++];
        if (cD < 0) sD += LD, KD += LD;
        else {
          let gD = sD,
            RD = KD,
            AD = BD.empty;
          for (; gD += LD, RD += cD, cD && pD && (AD = AD.append(pD[rD - 2 >> 1])), !(wD || rD == DD.sections.length || DD.sections[rD + 1] < 0);) LD = DD.sections[rD++], cD = DD.sections[rD++];
          zD(sD, gD, KD, RD, AD), sD = gD, KD = RD
        }
      }
    }

    function WD(DD, zD, wD) {
      let pD = [],
        sD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3] ? [] : null,
        KD = new ZD(DD),
        rD = new ZD(zD),
        LD = 0;
      for (let cD = -1;;) {
        if (++LD > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - likely malformed ChangeSet");
        if (KD.done && rD.len || rD.done && KD.len) throw new Error("Mismatched change set lengths");
        if (-1 == KD.ins && -1 == rD.ins) {
          let DD = Math.min(KD.len, rD.len);
          SD(pD, DD, -1), KD.forward(DD), rD.forward(DD)
        } else if (rD.ins >= 0 && (KD.ins < 0 || cD == KD.i || 0 == KD.off && (rD.len < KD.len || rD.len == KD.len && !wD))) {
          let DD = rD.len;
          for (SD(pD, rD.ins, -1); DD;) {
            if (++LD > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-b");
            let zD = Math.min(KD.len, DD);
            KD.ins >= 0 && cD < KD.i && KD.len <= zD && (SD(pD, 0, KD.ins), sD && iD(sD, pD, KD.text), cD = KD.i), KD.forward(zD), DD -= zD
          }
          rD.next()
        } else {
          if (!(KD.ins >= 0)) {
            if (KD.done && rD.done) return sD ? dD.createSet(pD, sD) : jD.create(pD);
            throw new Error("Mismatched change set lengths")
          } {
            let DD = 0,
              zD = KD.len;
            for (; zD;) {
              if (++LD > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-a");
              if (-1 == rD.ins) {
                let wD = Math.min(zD, rD.len);
                DD += wD, zD -= wD, rD.forward(wD)
              } else {
                if (!(0 == rD.ins && rD.len < zD)) break;
                zD -= rD.len, rD.next()
              }
            }
            SD(pD, DD, cD < KD.i ? KD.ins : 0), sD && cD < KD.i && iD(sD, pD, KD.text), cD = KD.i, KD.forward(KD.len - zD)
          }
        }
      }
    }

    function ND(DD, zD) {
      let wD = [],
        pD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? [] : null,
        sD = new ZD(DD),
        KD = new ZD(zD),
        rD = 0;
      for (let LD = !1;;) {
        if (++rD > 2e6) throw new Error("BLOXD CODEMIRROR: composeSets exceeded max iterations - likely malformed ChangeSet");
        if (sD.done && KD.done) return pD ? dD.createSet(wD, pD) : jD.create(wD);
        if (0 == sD.ins) SD(wD, sD.len, 0, LD), sD.next();
        else if (0 != KD.len || KD.done) {
          if (sD.done || KD.done) throw new Error("Mismatched change set lengths");
          {
            let DD = Math.min(sD.len2, KD.len),
              zD = wD.length;
            if (-1 == sD.ins) {
              let zD = -1 == KD.ins ? -1 : KD.off ? 0 : KD.ins;
              SD(wD, DD, zD, LD), pD && zD && iD(pD, wD, KD.text)
            } else - 1 == KD.ins ? (SD(wD, sD.off ? 0 : sD.len, DD, LD), pD && iD(pD, wD, sD.textBit(DD))) : (SD(wD, sD.off ? 0 : sD.len, KD.off ? 0 : KD.ins, LD), pD && !KD.off && iD(pD, wD, KD.text));
            LD = (sD.ins > DD || KD.ins >= 0 && KD.len > DD) && (LD || wD.length > zD), sD.forward2(DD), KD.forward(DD)
          }
        } else SD(wD, 0, KD.ins, LD), pD && iD(pD, wD, KD.text), KD.next()
      }
    }
    class ZD {
      constructor(DD) {
        this.set = DD, this.i = 0, this.next()
      }
      next() {
        let {
          sections: DD
        } = this.set;
        this.i < DD.length ? (this.len = DD[this.i++], this.ins = DD[this.i++]) : (this.len = 0, this.ins = -2), this.off = 0
      }
      get done() {
        return -2 == this.ins
      }
      get len2() {
        return this.ins < 0 ? this.len : this.ins
      }
      get text() {
        let {
          inserted: DD
        } = this.set, zD = this.i - 2 >> 1;
        return zD >= DD.length ? BD.empty : DD[zD]
      }
      textBit(DD) {
        let {
          inserted: zD
        } = this.set, wD = this.i - 2 >> 1;
        return wD >= zD.length && !DD ? BD.empty : zD[wD].slice(this.off, null == DD ? void 0 : this.off + DD)
      }
      forward(DD) {
        DD == this.len ? this.next() : (this.len -= DD, this.off += DD)
      }
      forward2(DD) {
        -1 == this.ins ? this.forward(DD) : DD == this.ins ? this.next() : (this.ins -= DD, this.off += DD)
      }
    }
    class yD {
      constructor(DD, zD, wD) {
        this.from = DD, this.to = zD, this.flags = wD
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
        let DD = 7 & this.flags;
        return 7 == DD ? null : DD
      }
      get goalColumn() {
        let DD = this.flags >> 6;
        return 16777215 == DD ? void 0 : DD
      }
      map(DD) {
        let zD, wD, pD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return this.empty ? zD = wD = DD.mapPos(this.from, pD) : (zD = DD.mapPos(this.from, 1), wD = DD.mapPos(this.to, -1)), zD == this.from && wD == this.to ? this : new yD(zD, wD, this.flags)
      }
      extend(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : DD,
          wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (DD <= this.anchor && zD >= this.anchor) return kD.range(DD, zD, void 0, void 0, wD);
        let pD = Math.abs(DD - this.anchor) > Math.abs(zD - this.anchor) ? DD : zD;
        return kD.range(this.anchor, pD, void 0, void 0, wD)
      }
      eq(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.anchor == DD.anchor && this.head == DD.head && this.goalColumn == DD.goalColumn && (!zD || !this.empty || this.assoc == DD.assoc)
      }
      toJSON() {
        return {
          anchor: this.anchor,
          head: this.head
        }
      }
      static fromJSON(DD) {
        if (!DD || "number" != typeof DD.anchor || "number" != typeof DD.head) throw new RangeError("Invalid JSON representation for SelectionRange");
        return kD.range(DD.anchor, DD.head)
      }
      static create(DD, zD, wD) {
        return new yD(DD, zD, wD)
      }
    }
    class kD {
      constructor(DD, zD) {
        this.rG = DD, this.mainIndex = zD
      }
      map(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return DD.empty ? this : kD.create(this.rG.map((wD => wD.map(DD, zD))), this.mainIndex)
      }
      eq(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.rG.length != DD.rG.length || this.mainIndex != DD.mainIndex) return !1;
        for (let wD = 0; wD < this.rG.length; wD++)
          if (!this.rG[wD].eq(DD.rG[wD], zD)) return !1;
        return !0
      }
      get main() {
        return this.rG[this.mainIndex]
      }
      asSingle() {
        return 1 == this.rG.length ? this : new kD([this.main], 0)
      }
      addRange(DD) {
        let zD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return kD.create([DD].concat(this.rG), zD ? 0 : this.mainIndex + 1)
      }
      replaceRange(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.mainIndex,
          wD = this.rG.slice();
        return wD[zD] = DD, kD.create(wD, this.mainIndex)
      }
      toJSON() {
        return {
          rG: this.rG.map((DD => DD.toJSON())),
          main: this.mainIndex
        }
      }
      static fromJSON(DD) {
        if (!DD || !Array.isArray(DD.rG) || "number" != typeof DD.main || DD.main >= DD.rG.length) throw new RangeError("Invalid JSON representation for EditorSelection");
        return new kD(DD.rG.map((DD => yD.fromJSON(DD))), DD.main)
      }
      static single(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : DD;
        return new kD([kD.range(DD, zD)], 0)
      }
      static create(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (0 == DD.length) throw new RangeError("A selection needs at least one range");
        for (let wD = 0, pD = 0; pD < DD.length; pD++) {
          let sD = DD[pD];
          if (sD.empty ? sD.from <= wD : sD.from < wD) return kD.normalized(DD.slice(), zD);
          wD = sD.to
        }
        return new kD(DD, zD)
      }
      static cursor(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          wD = arguments.length > 2 ? arguments[2] : void 0,
          pD = arguments.length > 3 ? arguments[3] : void 0;
        return yD.create(DD, DD, (0 == zD ? 0 : zD < 0 ? 8 : 16) | (null == wD ? 7 : Math.min(6, wD)) | (null !== pD && void 0 !== pD ? pD : 16777215) << 6)
      }
      static range(DD, zD, wD, pD, sD) {
        let KD = (null !== wD && void 0 !== wD ? wD : 16777215) << 6 | (null == pD ? 7 : Math.min(6, pD));
        return sD || DD == zD || (sD = zD < DD ? 1 : -1), zD < DD ? yD.create(zD, DD, 48 | KD) : yD.create(DD, zD, (sD ? sD < 0 ? 8 : 16 : 0) | KD)
      }
      static normalized(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          wD = DD[zD];
        DD.sort(((DD, zD) => DD.from - zD.from)), zD = DD.indexOf(wD);
        for (let pD = 1; pD < DD.length; pD++) {
          let wD = DD[pD],
            sD = DD[pD - 1];
          if (wD.empty ? wD.from <= sD.to : wD.from < sD.to) {
            let KD = sD.from,
              rD = Math.max(wD.to, sD.to);
            pD <= zD && zD--, DD.splice(--pD, 2, wD.anchor > wD.head ? kD.range(rD, KD) : kD.range(KD, rD))
          }
        }
        return new kD(DD, zD)
      }
    }

    function mD(DD, zD) {
      for (let wD of DD.rG)
        if (wD.to > zD) throw new RangeError("Selection points outside of document")
    }
    let eD = 0;
    class oD {
      constructor(DD, zD, wD, pD, sD) {
        this.combine = DD, this.compareInput = zD, this.compare = wD, this.isStatic = pD, this.id = eD++, this.default = DD([]), this.extensions = "function" == typeof sD ? sD(this) : sD
      }
      get reader() {
        return this
      }
      static define() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return new oD(DD.combine || (DD => DD), DD.compareInput || ((DD, zD) => DD === zD), DD.compare || (DD.combine ? (DD, zD) => DD === zD : aD), !!DD.static, DD.enables)
      }
      of(DD) {
        return new uD([], this, 0, DD)
      }
      compute(DD, zD) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new uD(DD, this, 1, zD)
      }
      computeN(DD, zD) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new uD(DD, this, 2, zD)
      }
      from(DD, zD) {
        return zD || (zD = DD => DD), this.compute([DD], (wD => zD(wD.field(DD))))
      }
    }

    function aD(DD, zD) {
      return DD == zD || DD.length == zD.length && DD.every(((DD, wD) => DD === zD[wD]))
    }
    class uD {
      constructor(DD, zD, wD, pD) {
        this.dependencies = DD, this.facet = zD, this.type = wD, this.value = pD, this.id = eD++
      }
      dynamicSlot(DD) {
        var zD;
        let wD = this.value,
          pD = this.facet.compareInput,
          sD = this.id,
          KD = DD[sD] >> 1,
          rD = 2 == this.type,
          LD = !1,
          cD = !1,
          gD = [];
        for (let RD of this.dependencies) "doc" == RD ? LD = !0 : "selection" == RD ? cD = !0 : 0 == (1 & (null !== (zD = DD[RD.id]) && void 0 !== zD ? zD : 1)) && gD.push(DD[RD.id]);
        return {
          create: DD => (DD.values[KD] = wD(DD), 1),
          update(DD, zD) {
            if (LD && zD.docChanged || cD && (zD.docChanged || zD.selection) || tD(DD, gD)) {
              let zD = wD(DD);
              if (rD ? !vD(zD, DD.values[KD], pD) : !pD(zD, DD.values[KD])) return DD.values[KD] = zD, 1
            }
            return 0
          },
          reconfigure: (DD, zD) => {
            let LD, cD = zD.config.address[sD];
            if (null != cD) {
              let sD = Rz(zD, cD);
              if (this.dependencies.every((wD => wD instanceof oD ? zD.facet(wD) === DD.facet(wD) : !(wD instanceof HD) || zD.field(wD, !1) == DD.field(wD, !1))) || (rD ? vD(LD = wD(DD), sD, pD) : pD(LD = wD(DD), sD))) return DD.values[KD] = sD, 0
            } else LD = wD(DD);
            return DD.values[KD] = LD, 1
          }
        }
      }
    }

    function vD(DD, zD, wD) {
      if (DD.length != zD.length) return !1;
      for (let pD = 0; pD < DD.length; pD++)
        if (!wD(DD[pD], zD[pD])) return !1;
      return !0
    }

    function tD(DD, zD) {
      let wD = !1;
      for (let pD of zD) 1 & gz(DD, pD) && (wD = !0);
      return wD
    }

    function FD(DD, zD, wD) {
      let pD = wD.map((zD => DD[zD.id])),
        sD = wD.map((DD => DD.type)),
        KD = pD.filter((DD => !(1 & DD))),
        rD = DD[zD.id] >> 1;

      function LD(DD) {
        let wD = [];
        for (let zD = 0; zD < pD.length; zD++) {
          let KD = Rz(DD, pD[zD]);
          if (2 == sD[zD])
            for (let DD of KD) wD.push(DD);
          else wD.push(KD)
        }
        return zD.combine(wD)
      }
      return {
        create(DD) {
          for (let zD of pD) gz(DD, zD);
          return DD.values[rD] = LD(DD), 1
        },
        update(DD, wD) {
          if (!tD(DD, KD)) return 0;
          let pD = LD(DD);
          return zD.compare(pD, DD.values[rD]) ? 0 : (DD.values[rD] = pD, 1)
        },
        reconfigure(DD, sD) {
          let KD = tD(DD, pD),
            cD = sD.config.facets[zD.id],
            gD = sD.facet(zD);
          if (cD && !KD && aD(wD, cD)) return DD.values[rD] = gD, 0;
          let RD = LD(DD);
          return zD.compare(RD, gD) ? (DD.values[rD] = gD, 0) : (DD.values[rD] = RD, 1)
        }
      }
    }
    const YD = oD.define({
      static: !0
    });
    class HD {
      constructor(DD, zD, wD, pD, sD) {
        this.id = DD, this.createF = zD, this.updateF = wD, this.compareF = pD, this.spec = sD, this.provides = void 0
      }
      static define(DD) {
        let zD = new HD(eD++, DD.create, DD.update, DD.compare || ((DD, zD) => DD === zD), DD);
        return DD.provide && (zD.provides = DD.provide(zD)), zD
      }
      create(DD) {
        let zD = DD.facet(YD).find((DD => DD.field == this));
        return ((null === zD || void 0 === zD ? void 0 : zD.create) || this.createF)(DD)
      }
      slot(DD) {
        let zD = DD[this.id] >> 1;
        return {
          create: DD => (DD.values[zD] = this.create(DD), 1),
          update: (DD, wD) => {
            let pD = DD.values[zD],
              sD = this.updateF(pD, wD);
            return this.compareF(pD, sD) ? 0 : (DD.values[zD] = sD, 1)
          },
          reconfigure: (DD, wD) => {
            let pD, sD = DD.facet(YD),
              KD = wD.facet(YD);
            return (pD = sD.find((DD => DD.field == this))) && pD != KD.find((DD => DD.field == this)) ? (DD.values[zD] = pD.create(DD), 1) : null != wD.config.address[this.id] ? (DD.values[zD] = wD.field(this), 0) : (DD.values[zD] = this.create(DD), 1)
          }
        }
      }
      init(DD) {
        return [this, YD.of({
          field: this,
          create: DD
        })]
      }
      get extension() {
        return this
      }
    }
    const qD = 4,
      Dz = 3,
      zz = 2,
      wz = 1;

    function pz(DD) {
      return zD => new Kz(zD, DD)
    }
    const sz = {
      highest: pz(0),
      high: pz(wz),
      default: pz(zz),
      low: pz(Dz),
      lowest: pz(qD)
    };
    class Kz {
      constructor(DD, zD) {
        this.inner = DD, this.prec = zD
      }
    }
    class rz {
      of(DD) {
        return new Lz(this, DD)
      }
      reconfigure(DD) {
        return rz.reconfigure.of({
          compartment: this,
          extension: DD
        })
      }
      get(DD) {
        return DD.config.compartments.get(this)
      }
    }
    class Lz {
      constructor(DD, zD) {
        this.compartment = DD, this.inner = zD
      }
    }
    class cz {
      constructor(DD, zD, wD, pD, sD, KD) {
        for (this.base = DD, this.compartments = zD, this.dynamicSlots = wD, this.address = pD, this.staticValues = sD, this.facets = KD, this.statusTemplate = []; this.statusTemplate.length < wD.length;) this.statusTemplate.push(0)
      }
      staticFacet(DD) {
        let zD = this.address[DD.id];
        return null == zD ? DD.default : this.staticValues[zD >> 1]
      }
      static resolve(DD, zD, wD) {
        let pD = [],
          sD = Object.create(null),
          KD = new Map;
        for (let AD of function(DD, zD, wD) {
            let pD = [
                [],
                [],
                [],
                [],
                []
              ],
              sD = new Map;

            function KD(DD, rD) {
              let LD = sD.get(DD);
              if (null != LD) {
                if (LD <= rD) return;
                let zD = pD[LD].indexOf(DD);
                zD > -1 && pD[LD].splice(zD, 1), DD instanceof Lz && wD.delete(DD.compartment)
              }
              if (sD.set(DD, rD), Array.isArray(DD))
                for (let zD of DD) KD(zD, rD);
              else if (DD instanceof Lz) {
                if (wD.has(DD.compartment)) throw new RangeError("Duplicate use of compartment in extensions");
                let pD = zD.get(DD.compartment) || DD.inner;
                wD.set(DD.compartment, pD), KD(pD, rD)
              } else if (DD instanceof Kz) KD(DD.inner, DD.prec);
              else if (DD instanceof HD) pD[rD].push(DD), DD.provides && KD(DD.provides, rD);
              else if (DD instanceof uD) pD[rD].push(DD), DD.facet.extensions && KD(DD.facet.extensions, zz);
              else {
                let zD = DD.extension;
                if (!zD) throw new Error(`Unrecognized extension value in extension set (${DD}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
                KD(zD, rD)
              }
            }
            return KD(DD, zz), pD.reduce(((DD, zD) => DD.concat(zD)))
          }(DD, zD, KD)) AD instanceof HD ? pD.push(AD) : (sD[AD.facet.id] || (sD[AD.facet.id] = [])).push(AD);
        let rD = Object.create(null),
          LD = [],
          cD = [];
        for (let AD of pD) rD[AD.id] = cD.length << 1, cD.push((DD => AD.slot(DD)));
        let gD = null === wD || void 0 === wD ? void 0 : wD.config.facets;
        for (let AD in sD) {
          let DD = sD[AD],
            zD = DD[0].facet,
            pD = gD && gD[AD] || [];
          if (DD.every((DD => 0 == DD.type)))
            if (rD[zD.id] = LD.length << 1 | 1, aD(pD, DD)) LD.push(wD.facet(zD));
            else {
              let pD = zD.combine(DD.map((DD => DD.value)));
              LD.push(wD && zD.compare(pD, wD.facet(zD)) ? wD.facet(zD) : pD)
            }
          else {
            for (let zD of DD) 0 == zD.type ? (rD[zD.id] = LD.length << 1 | 1, LD.push(zD.value)) : (rD[zD.id] = cD.length << 1, cD.push((DD => zD.dynamicSlot(DD))));
            rD[zD.id] = cD.length << 1, cD.push((wD => FD(wD, zD, DD)))
          }
        }
        let RD = cD.map((DD => DD(rD)));
        return new cz(DD, KD, RD, rD, LD, sD)
      }
    }

    function gz(DD, zD) {
      if (1 & zD) return 2;
      let wD = zD >> 1,
        pD = DD.status[wD];
      if (4 == pD) throw new Error("Cyclic dependency between fields and/or facets");
      if (2 & pD) return pD;
      DD.status[wD] = 4;
      let sD = DD.computeSlot(DD, DD.config.dynamicSlots[wD]);
      return DD.status[wD] = 2 | sD
    }

    function Rz(DD, zD) {
      return 1 & zD ? DD.config.staticValues[zD >> 1] : DD.values[zD >> 1]
    }
    const Az = oD.define(),
      Uz = oD.define({
        combine: DD => DD.some((DD => DD)),
        static: !0
      }),
      fz = oD.define({
        combine: DD => DD.length ? DD[0] : void 0,
        static: !0
      }),
      Iz = oD.define(),
      Bz = oD.define(),
      Gz = oD.define(),
      hz = oD.define({
        combine: DD => !!DD.length && DD[0]
      });
    class nz {
      constructor(DD, zD) {
        this.type = DD, this.value = zD
      }
      static define() {
        return new Mz
      }
    }
    class Mz {
      of(DD) {
        return new nz(this, DD)
      }
    }
    class Oz {
      constructor(DD) {
        this.map = DD
      }
      of(DD) {
        return new Jz(this, DD)
      }
    }
    class Jz {
      constructor(DD, zD) {
        this.type = DD, this.value = zD
      }
      map(DD) {
        let zD = this.type.map(this.value, DD);
        return void 0 === zD ? void 0 : zD == this.value ? this : new Jz(this.type, zD)
      }
      is(DD) {
        return this.type == DD
      }
      static define() {
        return new Oz((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).map || (DD => DD))
      }
      static mapEffects(DD, zD) {
        if (!DD.length) return DD;
        let wD = [];
        for (let pD of DD) {
          let DD = pD.map(zD);
          DD && wD.push(DD)
        }
        return wD
      }
    }
    Jz.reconfigure = Jz.define(), Jz.appendConfig = Jz.define();
    class Ez {
      constructor(DD, zD, wD, pD, sD, KD) {
        this.startState = DD, this.changes = zD, this.selection = wD, this.effects = pD, this.annotations = sD, this.scrollIntoView = KD, this._doc = null, this._state = null, wD && mD(wD, zD.newLength), sD.some((DD => DD.type == Ez.time)) || (this.annotations = sD.concat(Ez.time.of(Date.now())))
      }
      static create(DD, zD, wD, pD, sD, KD) {
        return new Ez(DD, zD, wD, pD, sD, KD)
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
      annotation(DD) {
        for (let zD of this.annotations)
          if (zD.type == DD) return zD.value
      }
      get docChanged() {
        return !this.changes.empty
      }
      get reconfigured() {
        return this.startState.config != this.state.config
      }
      isUserEvent(DD) {
        let zD = this.annotation(Ez.userEvent);
        return !(!zD || !(zD == DD || zD.length > DD.length && zD.slice(0, DD.length) == DD && "." == zD[DD.length]))
      }
    }

    function Qz(DD, zD) {
      let wD = [];
      for (let pD = 0, sD = 0;;) {
        let KD, rD;
        if (pD < DD.length && (sD == zD.length || zD[sD] >= DD[pD])) KD = DD[pD++], rD = DD[pD++];
        else {
          if (!(sD < zD.length)) return wD;
          KD = zD[sD++], rD = zD[sD++]
        }!wD.length || wD[wD.length - 1] < KD ? wD.push(KD, rD) : wD[wD.length - 1] < rD && (wD[wD.length - 1] = rD)
      }
    }

    function Xz(DD, zD, wD) {
      var pD;
      let sD, KD, rD;
      return wD ? (sD = zD.changes, KD = dD.empty(zD.changes.length), rD = DD.changes.compose(zD.changes)) : (sD = zD.changes.map(DD.changes), KD = DD.changes.mapDesc(zD.changes, !0), rD = DD.changes.compose(sD)), {
        changes: rD,
        selection: zD.selection ? zD.selection.map(KD) : null === (pD = DD.selection) || void 0 === pD ? void 0 : pD.map(sD),
        effects: Jz.mapEffects(DD.effects, sD).concat(Jz.mapEffects(zD.effects, KD)),
        annotations: DD.annotations.length ? DD.annotations.concat(zD.annotations) : zD.annotations,
        scrollIntoView: DD.scrollIntoView || zD.scrollIntoView
      }
    }

    function Vz(DD, zD, wD) {
      let pD = zD.selection,
        sD = xz(zD.annotations);
      return zD.userEvent && (sD = sD.concat(Ez.userEvent.of(zD.userEvent))), {
        changes: zD.changes instanceof dD ? zD.changes : dD.of(zD.changes || [], wD, DD.facet(fz)),
        selection: pD && (pD instanceof kD ? pD : kD.single(pD.anchor, pD.head)),
        effects: xz(zD.effects),
        annotations: sD,
        scrollIntoView: !!zD.scrollIntoView
      }
    }

    function Pz(DD, zD, wD) {
      let pD = Vz(DD, zD.length ? zD[0] : {}, DD.doc.length);
      zD.length && !1 === zD[0].filter && (wD = !1);
      for (let KD = 1; KD < zD.length; KD++) {
        !1 === zD[KD].filter && (wD = !1);
        let sD = !!zD[KD].sequential;
        pD = Xz(pD, Vz(DD, zD[KD], sD ? pD.changes.newLength : DD.doc.length), sD)
      }
      let sD = Ez.create(DD, pD.changes, pD.selection, pD.effects, pD.annotations, pD.scrollIntoView);
      return function(DD) {
        let zD = DD.startState,
          wD = zD.facet(Gz),
          pD = DD;
        for (let sD = wD.length - 1; sD >= 0; sD--) {
          let KD = wD[sD](DD);
          KD && Object.keys(KD).length && (pD = Xz(pD, Vz(zD, KD, DD.changes.newLength), !0))
        }
        return pD == DD ? DD : Ez.create(zD, DD.changes, DD.selection, pD.effects, pD.annotations, pD.scrollIntoView)
      }(wD ? function(DD) {
        let zD = DD.startState,
          wD = !0;
        for (let sD of zD.facet(Iz)) {
          let zD = sD(DD);
          if (!1 === zD) {
            wD = !1;
            break
          }
          Array.isArray(zD) && (wD = !0 === wD ? zD : Qz(wD, zD))
        }
        if (!0 !== wD) {
          let pD, sD;
          if (!1 === wD) sD = DD.changes.invertedDesc, pD = dD.empty(zD.doc.length);
          else {
            let zD = DD.changes.filter(wD);
            pD = zD.changes, sD = zD.filtered.mapDesc(zD.changes).invertedDesc
          }
          DD = Ez.create(zD, pD, DD.selection && DD.selection.map(sD), Jz.mapEffects(DD.effects, sD), DD.annotations, DD.scrollIntoView)
        }
        let pD = zD.facet(Bz);
        for (let sD = pD.length - 1; sD >= 0; sD--) {
          let wD = pD[sD](DD);
          DD = wD instanceof Ez ? wD : Array.isArray(wD) && 1 == wD.length && wD[0] instanceof Ez ? wD[0] : Pz(zD, xz(wD), !1)
        }
        return DD
      }(sD) : sD)
    }
    Ez.time = nz.define(), Ez.userEvent = nz.define(), Ez.addToHistory = nz.define(), Ez.remote = nz.define();
    const Cz = [];

    function xz(DD) {
      return null == DD ? Cz : Array.isArray(DD) ? DD : [DD]
    }
    var Tz = function(DD) {
      return DD[DD.Word = 0] = "Word", DD[DD.Space = 1] = "Space", DD[DD.Other = 2] = "Other", DD
    }(Tz || (Tz = {}));
    const bz = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
    let jz;
    try {
      jz = new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u")
    } catch (ww) {}

    function dz(DD) {
      return zD => {
        if (!/\S/.test(zD)) return Tz.Space;
        if (function(DD) {
            if (jz) return jz.test(DD);
            for (let zD = 0; zD < DD.length; zD++) {
              let wD = DD[zD];
              if (/\w/.test(wD) || wD > "\x80" && (wD.toUpperCase() != wD.toLowerCase() || bz.test(wD))) return !0
            }
            return !1
          }(zD)) return Tz.Word;
        for (let wD = 0; wD < DD.length; wD++)
          if (zD.indexOf(DD[wD]) > -1) return Tz.Word;
        return Tz.Other
      }
    }
    class Sz {
      constructor(DD, zD, wD, pD, sD, KD) {
        this.config = DD, this.doc = zD, this.selection = wD, this.values = pD, this.status = DD.statusTemplate.slice(), this.computeSlot = sD, KD && (KD._state = this);
        for (let rD = 0; rD < this.config.dynamicSlots.length; rD++) gz(this, rD << 1);
        this.computeSlot = null
      }
      field(DD) {
        let zD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          wD = this.config.address[DD.id];
        if (null != wD) return gz(this, wD), Rz(this, wD);
        if (zD) throw new RangeError("Field is not present in this state")
      }
      update() {
        for (var DD = arguments.length, zD = new Array(DD), wD = 0; wD < DD; wD++) zD[wD] = arguments[wD];
        return Pz(this, zD, !0)
      }
      applyTransaction(DD) {
        let zD, wD = this.config,
          {
            base: pD,
            compartments: sD
          } = wD;
        for (let rD of DD.effects) rD.is(rz.reconfigure) ? (wD && (sD = new Map, wD.compartments.forEach(((DD, zD) => sD.set(zD, DD))), wD = null), sD.set(rD.value.compartment, rD.value.extension)) : rD.is(Jz.reconfigure) ? (wD = null, pD = rD.value) : rD.is(Jz.appendConfig) && (wD = null, pD = xz(pD).concat(rD.value));
        if (wD) zD = DD.startState.values.slice();
        else {
          wD = cz.resolve(pD, sD, this), zD = new Sz(wD, this.doc, this.selection, wD.dynamicSlots.map((() => null)), ((DD, zD) => zD.reconfigure(DD, this)), null).values
        }
        let KD = DD.startState.facet(Uz) ? DD.newSelection : DD.newSelection.asSingle();
        new Sz(wD, DD.newDoc, KD, zD, ((zD, wD) => wD.update(zD, DD)), DD)
      }
      replaceSelection(DD) {
        return "string" == typeof DD && (DD = this.toText(DD)), this.changeByRange((zD => ({
          changes: {
            from: zD.from,
            to: zD.to,
            insert: DD
          },
          range: kD.cursor(zD.from + DD.length)
        })))
      }
      changeByRange(DD) {
        let zD = this.selection,
          wD = DD(zD.rG[0]),
          pD = this.changes(wD.changes),
          sD = [wD.range],
          KD = xz(wD.effects);
        for (let rD = 1; rD < zD.rG.length; rD++) {
          let wD = DD(zD.rG[rD]),
            LD = this.changes(wD.changes),
            cD = LD.map(pD);
          for (let DD = 0; DD < rD; DD++) sD[DD] = sD[DD].map(cD);
          let gD = pD.mapDesc(LD, !0);
          sD.push(wD.range.map(gD)), pD = pD.compose(cD), KD = Jz.mapEffects(KD, cD).concat(Jz.mapEffects(xz(wD.effects), gD))
        }
        return {
          changes: pD,
          selection: kD.create(sD, zD.mainIndex),
          effects: KD
        }
      }
      changes() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return DD instanceof dD ? DD : dD.of(DD, this.doc.length, this.facet(Sz.lineSeparator))
      }
      toText(DD) {
        return BD.of(DD.split(this.facet(Sz.lineSeparator) || TD))
      }
      sliceDoc() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.doc.length;
        return this.doc.sliceString(DD, zD, this.lineBreak)
      }
      facet(DD) {
        let zD = this.config.address[DD.id];
        return null == zD ? DD.default : (gz(this, zD), Rz(this, zD))
      }
      toJSON(DD) {
        let zD = {
          doc: this.sliceDoc(),
          selection: this.selection.toJSON()
        };
        if (DD)
          for (let wD in DD) {
            let pD = DD[wD];
            pD instanceof HD && null != this.config.address[pD.id] && (zD[wD] = pD.spec.toJSON(this.field(DD[wD]), this))
          }
        return zD
      }
      static fromJSON(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          wD = arguments.length > 2 ? arguments[2] : void 0;
        if (!DD || "string" != typeof DD.doc) throw new RangeError("Invalid JSON representation for EditorState");
        let pD = [];
        if (wD)
          for (let sD in wD)
            if (Object.prototype.hasOwnProperty.call(DD, sD)) {
              let zD = wD[sD],
                KD = DD[sD];
              pD.push(zD.init((DD => zD.spec.fromJSON(KD, DD))))
            } return Sz.create({
          doc: DD.doc,
          selection: kD.fromJSON(DD.selection),
          extensions: zD.extensions ? pD.concat([zD.extensions]) : pD
        })
      }
      static create() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          zD = cz.resolve(DD.extensions || [], new Map),
          wD = DD.doc instanceof BD ? DD.doc : BD.of((DD.doc || "").split(zD.staticFacet(Sz.lineSeparator) || TD)),
          pD = DD.selection ? DD.selection instanceof kD ? DD.selection : kD.single(DD.selection.anchor, DD.selection.head) : kD.single(0);
        return mD(pD, wD.length), zD.staticFacet(Uz) || (pD = pD.asSingle()), new Sz(zD, wD, pD, zD.dynamicSlots.map((() => null)), ((DD, zD) => zD.create(DD)), null)
      }
      get tabSize() {
        return this.facet(Sz.tabSize)
      }
      get lineBreak() {
        return this.facet(Sz.lineSeparator) || "\n"
      }
      get readOnly() {
        return this.facet(hz)
      }
      phrase(DD) {
        for (var zD = arguments.length, wD = new Array(zD > 1 ? zD - 1 : 0), pD = 1; pD < zD; pD++) wD[pD - 1] = arguments[pD];
        for (let sD of this.facet(Sz.phrases))
          if (Object.prototype.hasOwnProperty.call(sD, DD)) {
            DD = sD[DD];
            break
          } return wD.length && (DD = DD.replace(/\$(\$|\d*)/g, ((DD, zD) => {
          if ("$" == zD) return "$";
          let pD = +(zD || 1);
          return !pD || pD > wD.length ? DD : wD[pD - 1]
        }))), DD
      }
      languageDataAt(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          pD = [];
        for (let sD of this.facet(Az))
          for (let KD of sD(this, zD, wD)) Object.prototype.hasOwnProperty.call(KD, DD) && pD.push(KD[DD]);
        return pD
      }
      charCategorizer(DD) {
        let zD = this.languageDataAt("wordChars", DD);
        return dz(zD.length ? zD[0] : "")
      }
      wordAt(DD) {
        let {
          text: zD,
          from: wD,
          length: pD
        } = this.doc.lineAt(DD), sD = this.charCategorizer(DD), KD = DD - wD, rD = DD - wD;
        for (; KD > 0;) {
          let DD = VD(zD, KD, !1);
          if (sD(zD.slice(DD, KD)) != Tz.Word) break;
          KD = DD
        }
        for (; rD < pD;) {
          let DD = VD(zD, rD);
          if (sD(zD.slice(rD, DD)) != Tz.Word) break;
          rD = DD
        }
        return KD == rD ? null : kD.range(KD + wD, rD + wD)
      }
    }

    function iz(DD, zD) {
      let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        pD = {};
      for (let sD of DD)
        for (let DD of Object.keys(sD)) {
          let zD = sD[DD],
            KD = pD[DD];
          if (void 0 === KD) pD[DD] = zD;
          else if (KD === zD || void 0 === zD);
          else {
            if (!Object.hasOwnProperty.call(wD, DD)) throw new Error("Config merge conflict for field " + DD);
            pD[DD] = wD[DD](KD, zD)
          }
        }
      for (let sD in zD) void 0 === pD[sD] && (pD[sD] = zD[sD]);
      return pD
    }
    Sz.allowMultipleSelections = Uz, Sz.tabSize = oD.define({
      combine: DD => DD.length ? DD[0] : 4
    }), Sz.lineSeparator = fz, Sz.readOnly = hz, Sz.phrases = oD.define({
      compare(DD, zD) {
        let wD = Object.keys(DD),
          pD = Object.keys(zD);
        return wD.length == pD.length && wD.every((wD => DD[wD] == zD[wD]))
      }
    }), Sz.languageData = Az, Sz.changeFilter = Iz, Sz.transactionFilter = Bz, Sz.transactionExtender = Gz, rz.reconfigure = Jz.define();
    class lz {
      eq(DD) {
        return this == DD
      }
      range(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : DD;
        return Nz.create(DD, zD, this)
      }
    }

    function Wz(DD, zD) {
      return DD == zD || DD.constructor == zD.constructor && DD.eq(zD)
    }
    lz.prototype.startSide = lz.prototype.endSide = 0, lz.prototype.point = !1, lz.prototype.mapMode = bD.TrackDel;
    class Nz {
      constructor(DD, zD, wD) {
        this.from = DD, this.to = zD, this.value = wD
      }
      static create(DD, zD, wD) {
        return new Nz(DD, zD, wD)
      }
    }

    function Zz(DD, zD) {
      return DD.from - zD.from || DD.value.startSide - zD.value.startSide
    }
    class yz {
      constructor(DD, zD, wD, pD) {
        this.from = DD, this.to = zD, this.value = wD, this.bpD = pD
      }
      get length() {
        return this.to[this.to.length - 1]
      }
      findIndex(DD, zD, wD) {
        let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          sD = wD ? this.to : this.from;
        for (let KD = pD, rD = sD.length;;) {
          if (KD == rD) return KD;
          let pD = KD + rD >> 1,
            LD = sD[pD] - DD || (wD ? this.value[pD].endSide : this.value[pD].startSide) - zD;
          if (pD == KD) return LD >= 0 ? KD : rD;
          LD >= 0 ? rD = pD : KD = pD + 1
        }
      }
      between(DD, zD, wD, pD) {
        for (let sD = this.findIndex(zD, -1e9, !0), KD = this.findIndex(wD, 1e9, !1, sD); sD < KD; sD++)
          if (!1 === pD(this.from[sD] + DD, this.to[sD] + DD, this.value[sD])) return !1
      }
      map(DD, zD) {
        let wD = [],
          pD = [],
          sD = [],
          KD = -1,
          rD = -1;
        for (let LD = 0; LD < this.value.length; LD++) {
          let cD, gD, RD = this.value[LD],
            AD = this.from[LD] + DD,
            UD = this.to[LD] + DD;
          if (AD == UD) {
            let DD = zD.mapPos(AD, RD.startSide, RD.mapMode);
            if (null == DD) continue;
            if (cD = gD = DD, RD.startSide != RD.endSide && (gD = zD.mapPos(AD, RD.endSide), gD < cD)) continue
          } else if (cD = zD.mapPos(AD, RD.startSide), gD = zD.mapPos(UD, RD.endSide), cD > gD || cD == gD && RD.startSide > 0 && RD.endSide <= 0) continue;
          (gD - cD || RD.endSide - RD.startSide) < 0 || (KD < 0 && (KD = cD), RD.point && (rD = Math.max(rD, gD - cD)), wD.push(RD), pD.push(cD - KD), sD.push(gD - KD))
        }
        return {
          mapped: wD.length ? new yz(pD, sD, wD, rD) : null,
          pos: KD
        }
      }
    }
    class kz {
      constructor(DD, zD, wD, pD) {
        this.chunkPos = DD, this.chunk = zD, this.nextLayer = wD, this.bpD = pD
      }
      static create(DD, zD, wD, pD) {
        return new kz(DD, zD, wD, pD)
      }
      get length() {
        let DD = this.chunk.length - 1;
        return DD < 0 ? 0 : Math.max(this.chunkEnd(DD), this.nextLayer.length)
      }
      get size() {
        if (this.AI) return 0;
        let DD = this.nextLayer.size;
        for (let zD of this.chunk) DD += zD.value.length;
        return DD
      }
      chunkEnd(DD) {
        return this.chunkPos[DD] + this.chunk[DD].length
      }
      update(DD) {
        let {
          add: zD = [],
          sort: wD = !1,
          filterFrom: pD = 0,
          filterTo: sD = this.length
        } = DD, KD = DD.filter;
        if (0 == zD.length && !KD) return this;
        if (wD && (zD = zD.slice().sort(Zz)), this.AI) return zD.length ? kz.of(zD) : this;
        let rD = new oz(this, null, -1).goto(0),
          LD = 0,
          cD = [],
          gD = new mz;
        for (; rD.value || LD < zD.length;)
          if (LD < zD.length && (rD.from - zD[LD].from || rD.startSide - zD[LD].value.startSide) >= 0) {
            let DD = zD[LD++];
            gD.addInner(DD.from, DD.to, DD.value) || cD.push(DD)
          } else 1 == rD.rangeIndex && rD.chunkIndex < this.chunk.length && (LD == zD.length || this.chunkEnd(rD.chunkIndex) < zD[LD].from) && (!KD || pD > this.chunkEnd(rD.chunkIndex) || sD < this.chunkPos[rD.chunkIndex]) && gD.addChunk(this.chunkPos[rD.chunkIndex], this.chunk[rD.chunkIndex]) ? rD.nextChunk() : ((!KD || pD > rD.to || sD < rD.from || KD(rD.from, rD.to, rD.value)) && (gD.addInner(rD.from, rD.to, rD.value) || cD.push(Nz.create(rD.from, rD.to, rD.value))), rD.next());
        return gD.finishInner(this.nextLayer.AI && !cD.length ? kz.empty : this.nextLayer.update({
          add: cD,
          filter: KD,
          filterFrom: pD,
          filterTo: sD
        }))
      }
      map(DD) {
        if (DD.empty || this.AI) return this;
        let zD = [],
          wD = [],
          pD = -1;
        for (let KD = 0; KD < this.chunk.length; KD++) {
          let sD = this.chunkPos[KD],
            rD = this.chunk[KD],
            LD = DD.touchesRange(sD, sD + rD.length);
          if (!1 === LD) pD = Math.max(pD, rD.bpD), zD.push(rD), wD.push(DD.mapPos(sD));
          else if (!0 === LD) {
            let {
              mapped: KD,
              pos: LD
            } = rD.map(sD, DD);
            KD && (pD = Math.max(pD, KD.bpD), zD.push(KD), wD.push(LD))
          }
        }
        let sD = this.nextLayer.map(DD);
        return 0 == zD.length ? sD : new kz(wD, zD, sD || kz.empty, pD)
      }
      between(DD, zD, wD) {
        if (!this.AI) {
          for (let pD = 0; pD < this.chunk.length; pD++) {
            let sD = this.chunkPos[pD],
              KD = this.chunk[pD];
            if (zD >= sD && DD <= sD + KD.length && !1 === KD.between(sD, DD - sD, zD - sD, wD)) return
          }
          this.nextLayer.between(DD, zD, wD)
        }
      }
      iter() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return az.from([this]).goto(DD)
      }
      get AI() {
        return this.nextLayer == this
      }
      static iter(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return az.from(DD).goto(zD)
      }
      static compare(DD, zD, wD, pD) {
        let sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1,
          KD = DD.filter((DD => DD.bpD > 0 || !DD.AI && DD.bpD >= sD)),
          rD = zD.filter((DD => DD.bpD > 0 || !DD.AI && DD.bpD >= sD)),
          LD = ez(KD, rD, wD),
          cD = new vz(KD, LD, sD),
          gD = new vz(rD, LD, sD);
        wD.iterGaps(((DD, zD, wD) => tz(cD, DD, gD, zD, wD, pD))), wD.empty && 0 == wD.length && tz(cD, 0, gD, 0, 0, pD)
      }
      static eq(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          pD = arguments.length > 3 ? arguments[3] : void 0;
        null == pD && (pD = 999999999);
        let sD = DD.filter((DD => !DD.AI && zD.indexOf(DD) < 0)),
          KD = zD.filter((zD => !zD.AI && DD.indexOf(zD) < 0));
        if (sD.length != KD.length) return !1;
        if (!sD.length) return !0;
        let rD = ez(sD, KD),
          LD = new vz(sD, rD, 0).goto(wD),
          cD = new vz(KD, rD, 0).goto(wD);
        for (;;) {
          if (LD.to != cD.to || !Fz(LD.active, cD.active) || LD.point && (!cD.point || !Wz(LD.point, cD.point))) return !1;
          if (LD.to > pD) return !0;
          LD.next(), cD.next()
        }
      }
      static spans(DD, zD, wD, pD) {
        let sD = new vz(DD, null, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1).goto(zD),
          KD = zD,
          rD = sD.openStart;
        for (;;) {
          let DD = Math.min(sD.to, wD);
          if (sD.point) {
            let wD = sD.activeForPoint(sD.to),
              LD = sD.pointFrom < zD ? wD.length + 1 : sD.point.startSide < 0 ? wD.length : Math.min(wD.length, rD);
            pD.point(KD, DD, sD.point, wD, LD, sD.pointRank), rD = Math.min(sD.openEnd(DD), wD.length)
          } else DD > KD && (pD.span(KD, DD, sD.active, rD), rD = sD.openEnd(DD));
          if (sD.to > wD) return rD + (sD.point && sD.to > wD ? 1 : 0);
          KD = sD.to, sD.next()
        }
      }
      static of (DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          wD = new mz;
        for (let pD of DD instanceof Nz ? [DD] : zD ? function(DD) {
            if (DD.length > 1)
              for (let zD = DD[0], wD = 1; wD < DD.length; wD++) {
                let pD = DD[wD];
                if (Zz(zD, pD) > 0) return DD.slice().sort(Zz);
                zD = pD
              }
            return DD
          }(DD) : DD) wD.add(pD.from, pD.to, pD.value);
        return wD.finish()
      }
      static join(DD) {
        if (!DD.length) return kz.empty;
        let zD = DD[DD.length - 1];
        for (let wD = DD.length - 2; wD >= 0; wD--)
          for (let pD = DD[wD]; pD != kz.empty; pD = pD.nextLayer) zD = new kz(pD.chunkPos, pD.chunk, zD, Math.max(pD.bpD, zD.bpD));
        return zD
      }
    }
    kz.empty = new kz([], [], null, -1), kz.empty.nextLayer = kz.empty;
    class mz {
      finishChunk(DD) {
        this.chunks.push(new yz(this.from, this.to, this.value, this.bpD)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.bpD), this.bpD = -1, DD && (this.from = [], this.to = [], this.value = [])
      }
      constructor() {
        this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.bpD = -1, this.setMaxPoint = -1, this.nextLayer = null
      }
      add(DD, zD, wD) {
        this.addInner(DD, zD, wD) || (this.nextLayer || (this.nextLayer = new mz)).add(DD, zD, wD)
      }
      addInner(DD, zD, wD) {
        let pD = DD - this.lastTo || wD.startSide - this.last.endSide;
        if (pD <= 0 && (DD - this.lastFrom || wD.startSide - this.last.startSide) < 0) throw new Error("Ranges must be added sorted by `from` position and `startSide`");
        return !(pD < 0) && (250 == this.from.length && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = DD), this.from.push(DD - this.chunkStart), this.to.push(zD - this.chunkStart), this.last = wD, this.lastFrom = DD, this.lastTo = zD, this.value.push(wD), wD.point && (this.bpD = Math.max(this.bpD, zD - DD)), !0)
      }
      addChunk(DD, zD) {
        if ((DD - this.lastTo || zD.value[0].startSide - this.last.endSide) < 0) return !1;
        this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, zD.bpD), this.chunks.push(zD), this.chunkPos.push(DD);
        let wD = zD.value.length - 1;
        return this.last = zD.value[wD], this.lastFrom = zD.from[wD] + DD, this.lastTo = zD.to[wD] + DD, !0
      }
      finish() {
        return this.finishInner(kz.empty)
      }
      finishInner(DD) {
        if (this.from.length && this.finishChunk(!1), 0 == this.chunks.length) return DD;
        let zD = kz.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(DD) : DD, this.setMaxPoint);
        return this.from = null, zD
      }
    }

    function ez(DD, zD, wD) {
      let pD = new Map;
      for (let KD of DD)
        for (let DD = 0; DD < KD.chunk.length; DD++) KD.chunk[DD].bpD <= 0 && pD.set(KD.chunk[DD], KD.chunkPos[DD]);
      let sD = new Set;
      for (let KD of zD)
        for (let DD = 0; DD < KD.chunk.length; DD++) {
          let zD = pD.get(KD.chunk[DD]);
          null == zD || (wD ? wD.mapPos(zD) : zD) != KD.chunkPos[DD] || (null === wD || void 0 === wD ? void 0 : wD.touchesRange(zD, zD + KD.chunk[DD].length)) || sD.add(KD.chunk[DD])
        }
      return sD
    }
    class oz {
      constructor(DD, zD, wD) {
        let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.layer = DD, this.skip = zD, this.jpD = wD, this.rank = pD
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      get endSide() {
        return this.value ? this.value.endSide : 0
      }
      goto(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(DD, zD, !1), this
      }
      gotoInner(DD, zD, wD) {
        for (; this.chunkIndex < this.layer.chunk.length;) {
          let zD = this.layer.chunk[this.chunkIndex];
          if (!(this.skip && this.skip.has(zD) || this.layer.chunkEnd(this.chunkIndex) < DD || zD.bpD < this.jpD)) break;
          this.chunkIndex++, wD = !1
        }
        if (this.chunkIndex < this.layer.chunk.length) {
          let pD = this.layer.chunk[this.chunkIndex].findIndex(DD - this.layer.chunkPos[this.chunkIndex], zD, !0);
          (!wD || this.rangeIndex < pD) && this.setRangeIndex(pD)
        }
        this.next()
      }
      forward(DD, zD) {
        (this.to - DD || this.endSide - zD) < 0 && this.gotoInner(DD, zD, !0)
      }
      next() {
        for (;;) {
          if (this.chunkIndex == this.layer.chunk.length) {
            this.from = this.to = 1e9, this.value = null;
            break
          } {
            let DD = this.layer.chunkPos[this.chunkIndex],
              zD = this.layer.chunk[this.chunkIndex],
              wD = DD + zD.from[this.rangeIndex];
            if (this.from = wD, this.to = DD + zD.to[this.rangeIndex], this.value = zD.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.jpD < 0 || this.value.point && this.to - this.from >= this.jpD) break
          }
        }
      }
      setRangeIndex(DD) {
        if (DD == this.layer.chunk[this.chunkIndex].value.length) {
          if (this.chunkIndex++, this.skip)
            for (; this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]);) this.chunkIndex++;
          this.rangeIndex = 0
        } else this.rangeIndex = DD
      }
      nextChunk() {
        this.chunkIndex++, this.rangeIndex = 0, this.next()
      }
      compare(DD) {
        return this.from - DD.from || this.startSide - DD.startSide || this.rank - DD.rank || this.to - DD.to || this.endSide - DD.endSide
      }
    }
    class az {
      constructor(DD) {
        this.heap = DD
      }
      static from(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          pD = [];
        for (let sD = 0; sD < DD.length; sD++)
          for (let KD = DD[sD]; !KD.AI; KD = KD.nextLayer) KD.bpD >= wD && pD.push(new oz(KD, zD, wD, sD));
        return 1 == pD.length ? pD[0] : new az(pD)
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      goto(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        for (let wD of this.heap) wD.goto(DD, zD);
        for (let wD = this.heap.length >> 1; wD >= 0; wD--) uz(this.heap, wD);
        return this.next(), this
      }
      forward(DD, zD) {
        for (let wD of this.heap) wD.forward(DD, zD);
        for (let wD = this.heap.length >> 1; wD >= 0; wD--) uz(this.heap, wD);
        (this.to - DD || this.value.endSide - zD) < 0 && this.next()
      }
      next() {
        if (0 == this.heap.length) this.from = this.to = 1e9, this.value = null, this.rank = -1;
        else {
          let DD = this.heap[0];
          this.from = DD.from, this.to = DD.to, this.value = DD.value, this.rank = DD.rank, DD.value && DD.next(), uz(this.heap, 0)
        }
      }
    }

    function uz(DD, zD) {
      for (let wD = DD[zD];;) {
        let pD = 1 + (zD << 1);
        if (pD >= DD.length) break;
        let sD = DD[pD];
        if (pD + 1 < DD.length && sD.compare(DD[pD + 1]) >= 0 && (sD = DD[pD + 1], pD++), wD.compare(sD) < 0) break;
        DD[pD] = wD, DD[zD] = sD, zD = pD
      }
    }
    class vz {
      constructor(DD, zD, wD) {
        this.jpD = wD, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = az.from(DD, zD, wD)
      }
      goto(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.cursor.goto(DD, zD), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = DD, this.endSide = zD, this.openStart = -1, this.next(), this
      }
      forward(DD, zD) {
        for (; this.minActive > -1 && (this.activeTo[this.minActive] - DD || this.active[this.minActive].endSide - zD) < 0;) this.removeActive(this.minActive);
        this.cursor.forward(DD, zD)
      }
      removeActive(DD) {
        Yz(this.active, DD), Yz(this.activeTo, DD), Yz(this.activeRank, DD), this.minActive = qz(this.active, this.activeTo)
      }
      addActive(DD) {
        let zD = 0,
          {
            value: wD,
            to: pD,
            rank: sD
          } = this.cursor;
        for (; zD < this.activeRank.length && (sD - this.activeRank[zD] || pD - this.activeTo[zD]) > 0;) zD++;
        Hz(this.active, zD, wD), Hz(this.activeTo, zD, pD), Hz(this.activeRank, zD, sD), DD && Hz(DD, zD, this.cursor.from), this.minActive = qz(this.active, this.activeTo)
      }
      next() {
        let DD = this.to,
          zD = this.point;
        this.point = null;
        let wD = this.openStart < 0 ? [] : null;
        for (;;) {
          let pD = this.minActive;
          if (pD > -1 && (this.activeTo[pD] - this.cursor.from || this.active[pD].endSide - this.cursor.startSide) < 0) {
            if (this.activeTo[pD] > DD) {
              this.to = this.activeTo[pD], this.endSide = this.active[pD].endSide;
              break
            }
            this.removeActive(pD), wD && Yz(wD, pD)
          } else {
            if (!this.cursor.value) {
              this.to = this.endSide = 1e9;
              break
            }
            if (this.cursor.from > DD) {
              this.to = this.cursor.from, this.endSide = this.cursor.startSide;
              break
            } {
              let DD = this.cursor.value;
              if (DD.point) {
                if (!(zD && this.cursor.to == this.to && this.cursor.from < this.cursor.to)) {
                  this.point = DD, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = DD.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
                  break
                }
                this.cursor.next()
              } else this.addActive(wD), this.cursor.next()
            }
          }
        }
        if (wD) {
          this.openStart = 0;
          for (let zD = wD.length - 1; zD >= 0 && wD[zD] < DD; zD--) this.openStart++
        }
      }
      activeForPoint(DD) {
        if (!this.active.length) return this.active;
        let zD = [];
        for (let wD = this.active.length - 1; wD >= 0 && !(this.activeRank[wD] < this.pointRank); wD--)(this.activeTo[wD] > DD || this.activeTo[wD] == DD && this.active[wD].endSide >= this.point.endSide) && zD.push(this.active[wD]);
        return zD.reverse()
      }
      openEnd(DD) {
        let zD = 0;
        for (let wD = this.activeTo.length - 1; wD >= 0 && this.activeTo[wD] > DD; wD--) zD++;
        return zD
      }
    }

    function tz(DD, zD, wD, pD, sD, KD) {
      DD.goto(zD), wD.goto(pD);
      let rD = pD + sD,
        LD = pD,
        cD = pD - zD,
        gD = !!KD.boundChange;
      for (let RD = !1;;) {
        let zD = DD.to + cD - wD.to,
          pD = zD || DD.endSide - wD.endSide,
          sD = pD < 0 ? DD.to + cD : wD.to,
          AD = Math.min(sD, rD);
        if (DD.point || wD.point ? (DD.point && wD.point && Wz(DD.point, wD.point) && Fz(DD.activeForPoint(DD.to), wD.activeForPoint(wD.to)) || KD.comparePoint(LD, AD, DD.point, wD.point), RD = !1) : (RD && KD.boundChange(LD), AD > LD && !Fz(DD.active, wD.active) && KD.compareRange(LD, AD, DD.active, wD.active), gD && AD < rD && (zD || DD.openEnd(sD) != wD.openEnd(sD)) && (RD = !0)), sD > rD) break;
        LD = sD, pD <= 0 && DD.next(), pD >= 0 && wD.next()
      }
    }

    function Fz(DD, zD) {
      if (DD.length != zD.length) return !1;
      for (let wD = 0; wD < DD.length; wD++)
        if (DD[wD] != zD[wD] && !Wz(DD[wD], zD[wD])) return !1;
      return !0
    }

    function Yz(DD, zD) {
      for (let wD = zD, pD = DD.length - 1; wD < pD; wD++) DD[wD] = DD[wD + 1];
      DD.pop()
    }

    function Hz(DD, zD, wD) {
      for (let pD = DD.length - 1; pD >= zD; pD--) DD[pD + 1] = DD[pD];
      DD[zD] = wD
    }

    function qz(DD, zD) {
      let wD = -1,
        pD = 1e9;
      for (let sD = 0; sD < zD.length; sD++)(zD[sD] - pD || DD[sD].endSide - DD[wD].endSide) < 0 && (wD = sD, pD = zD[sD]);
      return wD
    }

    function Dw(DD, zD) {
      let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : DD.length,
        pD = 0;
      for (let sD = 0; sD < wD && sD < DD.length;) 9 == DD.charCodeAt(sD) ? (pD += zD - pD % zD, sD++) : (pD++, sD = VD(DD, sD));
      return pD
    }

    function zw(DD, zD, wD, pD) {
      for (let sD = 0, KD = 0;;) {
        if (KD >= zD) return sD;
        if (sD == DD.length) break;
        KD += 9 == DD.charCodeAt(sD) ? wD - KD % wD : 1, sD = VD(DD, sD)
      }
      return !0 === pD ? -1 : DD.length
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);