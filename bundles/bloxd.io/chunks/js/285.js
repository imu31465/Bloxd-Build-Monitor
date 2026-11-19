export const id = 285;
export const ids = [285];
export const modules = {
  40379: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => NC,
      e: () => aD,
      ChangeSet: () => VD,
      f: () => JC,
      i: () => kD,
      j: () => zC,
      l: () => WD,
      o: () => KD,
      s: () => pC,
      x: () => kC,
      u: () => dC,
      B: () => lC,
      D: () => mC,
      F: () => AD,
      J: () => ZD,
      L: () => nC,
      O: () => UD,
      S: () => qD,
      U: () => jC,
      Y: () => Dc,
      _: () => HD,
      ab: () => Cc,
      bb: () => xD
    });
    let ID = [],
      pD = [];

    function iD(DD) {
      if (DD < 768) return !1;
      for (let CD = 0, cD = ID.length;;) {
        let iD = CD + cD >> 1;
        if (DD < ID[iD]) cD = iD;
        else {
          if (!(DD >= pD[iD])) return !0;
          CD = iD + 1
        }
        if (CD == cD) return !1
      }
    }

    function fD(DD) {
      return DD >= 127462 && DD <= 127487
    }(() => {
      let DD = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((DD => DD ? parseInt(DD, 36) : 1));
      for (let CD = 0, cD = 0; CD < DD.length; CD++)(CD % 2 ? pD : ID).push(cD += DD[CD])
    })();
    const bD = 8205;

    function QD(DD, CD) {
      return (!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2] ? wD : SD)(DD, CD, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function wD(DD, CD, cD) {
      if (CD == DD.length) return CD;
      CD && yD(DD.charCodeAt(CD)) && MD(DD.charCodeAt(CD - 1)) && CD--;
      let ID = BD(DD, CD);
      for (CD += tD(ID); CD < DD.length;) {
        let pD = BD(DD, CD);
        if (ID == bD || pD == bD || cD && iD(pD)) CD += tD(pD), ID = pD;
        else {
          if (!fD(pD)) break;
          {
            let cD = 0,
              ID = CD - 2;
            for (; ID >= 0 && fD(BD(DD, ID));) cD++, ID -= 2;
            if (cD % 2 == 0) break;
            CD += 2
          }
        }
      }
      return CD
    }

    function SD(DD, CD, cD) {
      for (; CD > 0;) {
        let ID = wD(DD, CD - 2, cD);
        if (ID < CD) return ID;
        CD--
      }
      return 0
    }

    function BD(DD, CD) {
      let cD = DD.charCodeAt(CD);
      if (!MD(cD) || CD + 1 == DD.length) return cD;
      let ID = DD.charCodeAt(CD + 1);
      return yD(ID) ? ID - 56320 + (cD - 55296 << 10) + 65536 : cD
    }

    function yD(DD) {
      return DD >= 56320 && DD < 57344
    }

    function MD(DD) {
      return DD >= 55296 && DD < 56320
    }

    function tD(DD) {
      return DD < 65536 ? 1 : 2
    }
    class ZD {
      lineAt(DD) {
        if (DD < 0 || DD > this.length) throw new RangeError(`Invalid position ${DD} in document of length ${this.length}`);
        return this.lineInner(DD, !1, 1, 0)
      }
      line(DD) {
        if (DD < 1 || DD > this.lines) throw new RangeError(`Invalid line number ${DD} in ${this.lines}-line document`);
        return this.lineInner(DD, !0, 1, 0)
      }
      replace(DD, CD, cD) {
        [DD, CD] = PD(this, DD, CD);
        let ID = [];
        return this.decompose(0, DD, ID, 2), cD.length && cD.decompose(0, cD.length, ID, 3), this.decompose(CD, this.length, ID, 1), vD.from(ID, this.length - (CD - DD) + cD.length)
      }
      append(DD) {
        return this.replace(this.length, this.length, DD)
      }
      slice(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        [DD, CD] = PD(this, DD, CD);
        let cD = [];
        return this.decompose(DD, CD, cD, 0), vD.from(cD, CD - DD)
      }
      eq(DD) {
        if (DD == this) return !0;
        if (DD.length != this.length || DD.lines != this.lines) return !1;
        let CD = this.scanIdentical(DD, 1),
          cD = this.length - this.scanIdentical(DD, -1),
          ID = new XD(this),
          pD = new XD(DD);
        for (let iD = CD, fD = CD;;) {
          if (ID.next(iD), pD.next(iD), iD = 0, ID.lineBreak != pD.lineBreak || ID.done != pD.done || ID.value != pD.value) return !1;
          if (fD += ID.value.length, ID.done || fD >= cD) return !0
        }
      }
      iter() {
        return new XD(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1)
      }
      iterRange(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        return new mD(this, DD, CD)
      }
      iterLines(DD, CD) {
        let cD;
        if (null == DD) cD = this.iter();
        else {
          null == CD && (CD = this.lines + 1);
          let ID = this.line(DD).from;
          cD = this.iterRange(ID, Math.max(ID, CD == this.lines + 1 ? this.length : CD <= 1 ? 0 : this.line(CD - 1).to))
        }
        return new nD(cD)
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
        return 1 != DD.length || DD[0] ? DD.length <= 32 ? new oD(DD) : vD.from(oD.split(DD, [])) : ZD.empty
      }
    }
    class oD extends ZD {
      constructor(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(DD) {
          let CD = -1;
          for (let cD of DD) CD += cD.length + 1;
          return CD
        }(DD);
        super(), this.text = DD, this.length = CD
      }
      get lines() {
        return this.text.length
      }
      get children() {
        return null
      }
      lineInner(DD, CD, cD, ID) {
        for (let pD = 0;; pD++) {
          let iD = this.text[pD],
            fD = ID + iD.length;
          if ((CD ? cD : fD) >= DD) return new OD(ID, fD, cD, iD);
          ID = fD + 1, cD++
        }
      }
      decompose(DD, CD, cD, ID) {
        let pD = DD <= 0 && CD >= this.length ? this : new oD(gD(this.text, DD, CD), Math.min(CD, this.length) - Math.max(0, DD));
        if (1 & ID) {
          let DD = cD.pop(),
            CD = ND(pD.text, DD.text.slice(), 0, pD.length);
          if (CD.length <= 32) cD.push(new oD(CD, DD.length + pD.length));
          else {
            let DD = CD.length >> 1;
            cD.push(new oD(CD.slice(0, DD)), new oD(CD.slice(DD)))
          }
        } else cD.push(pD)
      }
      replace(DD, CD, cD) {
        if (!(cD instanceof oD)) return super.replace(DD, CD, cD);
        [DD, CD] = PD(this, DD, CD);
        let ID = ND(this.text, ND(cD.text, gD(this.text, 0, DD)), CD),
          pD = this.length + cD.length - (CD - DD);
        return ID.length <= 32 ? new oD(ID, pD) : vD.from(oD.split(ID, []), pD)
      }
      sliceString(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [DD, CD] = PD(this, DD, CD);
        let ID = "";
        for (let pD = 0, iD = 0; pD <= CD && iD < this.text.length; iD++) {
          let fD = this.text[iD],
            bD = pD + fD.length;
          pD > DD && iD && (ID += cD), DD < bD && CD > pD && (ID += fD.slice(Math.max(0, DD - pD), CD - pD)), pD = bD + 1
        }
        return ID
      }
      flatten(DD) {
        for (let CD of this.text) DD.push(CD)
      }
      scanIdentical() {
        return 0
      }
      static split(DD, CD) {
        let cD = [],
          ID = -1;
        for (let pD of DD) cD.push(pD), ID += pD.length + 1, 32 == cD.length && (CD.push(new oD(cD, ID)), cD = [], ID = -1);
        return ID > -1 && CD.push(new oD(cD, ID)), CD
      }
    }
    class vD extends ZD {
      constructor(DD, CD) {
        super(), this.children = DD, this.length = CD, this.lines = 0;
        for (let cD of DD) this.lines += cD.lines
      }
      lineInner(DD, CD, cD, ID) {
        for (let pD = 0;; pD++) {
          let iD = this.children[pD],
            fD = ID + iD.length,
            bD = cD + iD.lines - 1;
          if ((CD ? bD : fD) >= DD) return iD.lineInner(DD, CD, cD, ID);
          ID = fD + 1, cD = bD + 1
        }
      }
      decompose(DD, CD, cD, ID) {
        for (let pD = 0, iD = 0; iD <= CD && pD < this.children.length; pD++) {
          let fD = this.children[pD],
            bD = iD + fD.length;
          if (DD <= bD && CD >= iD) {
            let pD = ID & ((iD <= DD ? 1 : 0) | (bD >= CD ? 2 : 0));
            iD >= DD && bD <= CD && !pD ? cD.push(fD) : fD.decompose(DD - iD, CD - iD, cD, pD)
          }
          iD = bD + 1
        }
      }
      replace(DD, CD, cD) {
        if ([DD, CD] = PD(this, DD, CD), cD.lines < this.lines)
          for (let ID = 0, pD = 0; ID < this.children.length; ID++) {
            let iD = this.children[ID],
              fD = pD + iD.length;
            if (DD >= pD && CD <= fD) {
              let bD = iD.replace(DD - pD, CD - pD, cD),
                QD = this.lines - iD.lines + bD.lines;
              if (bD.lines < QD >> 4 && bD.lines > QD >> 6) {
                let pD = this.children.slice();
                return pD[ID] = bD, new vD(pD, this.length - (CD - DD) + cD.length)
              }
              return super.replace(pD, fD, bD)
            }
            pD = fD + 1
          }
        return super.replace(DD, CD, cD)
      }
      sliceString(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [DD, CD] = PD(this, DD, CD);
        let ID = "";
        for (let pD = 0, iD = 0; pD < this.children.length && iD <= CD; pD++) {
          let fD = this.children[pD],
            bD = iD + fD.length;
          iD > DD && pD && (ID += cD), DD < bD && CD > iD && (ID += fD.sliceString(DD - iD, CD - iD, cD)), iD = bD + 1
        }
        return ID
      }
      flatten(DD) {
        for (let CD of this.children) CD.flatten(DD)
      }
      scanIdentical(DD, CD) {
        if (!(DD instanceof vD)) return 0;
        let cD = 0,
          [ID, pD, iD, fD] = CD > 0 ? [0, 0, this.children.length, DD.children.length] : [this.children.length - 1, DD.children.length - 1, -1, -1];
        for (;; ID += CD, pD += CD) {
          if (ID == iD || pD == fD) return cD;
          let bD = this.children[ID],
            QD = DD.children[pD];
          if (bD != QD) return cD + bD.scanIdentical(QD, CD);
          cD += bD.length + 1
        }
      }
      static from(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : DD.reduce(((DD, CD) => DD + CD.length + 1), -1),
          cD = 0;
        for (let yD of DD) cD += yD.lines;
        if (cD < 32) {
          let cD = [];
          for (let CD of DD) CD.flatten(cD);
          return new oD(cD, CD)
        }
        let ID = Math.max(32, cD >> 5),
          pD = ID << 1,
          iD = ID >> 1,
          fD = [],
          bD = 0,
          QD = -1,
          wD = [];

        function SD(DD) {
          let CD;
          if (DD.lines > pD && DD instanceof vD)
            for (let cD of DD.children) SD(cD);
          else DD.lines > iD && (bD > iD || !bD) ? (BD(), fD.push(DD)) : DD instanceof oD && bD && (CD = wD[wD.length - 1]) instanceof oD && DD.lines + CD.lines <= 32 ? (bD += DD.lines, QD += DD.length + 1, wD[wD.length - 1] = new oD(CD.text.concat(DD.text), CD.length + 1 + DD.length)) : (bD + DD.lines > ID && BD(), bD += DD.lines, QD += DD.length + 1, wD.push(DD))
        }

        function BD() {
          0 != bD && (fD.push(1 == wD.length ? wD[0] : vD.from(wD, QD)), QD = -1, bD = wD.length = 0)
        }
        for (let yD of DD) SD(yD);
        return BD(), 1 == fD.length ? fD[0] : new vD(fD, CD)
      }
    }

    function ND(DD, CD) {
      let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e9;
      for (let pD = 0, iD = 0, fD = !0; iD < DD.length && pD <= ID; iD++) {
        let bD = DD[iD],
          QD = pD + bD.length;
        QD >= cD && (QD > ID && (bD = bD.slice(0, ID - pD)), pD < cD && (bD = bD.slice(cD - pD)), fD ? (CD[CD.length - 1] += bD, fD = !1) : CD.push(bD)), pD = QD + 1
      }
      return CD
    }

    function gD(DD, CD, cD) {
      return ND(DD, [""], CD, cD)
    }
    ZD.empty = new oD([""], 0);
    class XD {
      constructor(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.dir = CD, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [DD], this.offsets = [CD > 0 ? 1 : (DD instanceof oD ? DD.text.length : DD.children.length) << 1]
      }
      nextInner(DD, CD) {
        for (this.done = this.lineBreak = !1;;) {
          let cD = this.nodes.length - 1,
            ID = this.nodes[cD],
            pD = this.offsets[cD],
            iD = pD >> 1,
            fD = ID instanceof oD ? ID.text.length : ID.children.length;
          if (iD == (CD > 0 ? fD : 0)) {
            if (0 == cD) return this.done = !0, this.value = "", this;
            CD > 0 && this.offsets[cD - 1]++, this.nodes.pop(), this.offsets.pop()
          } else if ((1 & pD) == (CD > 0 ? 0 : 1)) {
            if (this.offsets[cD] += CD, 0 == DD) return this.lineBreak = !0, this.value = "\n", this;
            DD--
          } else if (ID instanceof oD) {
            let pD = ID.text[iD + (CD < 0 ? -1 : 0)];
            if (this.offsets[cD] += CD, pD.length > Math.max(0, DD)) return this.value = 0 == DD ? pD : CD > 0 ? pD.slice(DD) : pD.slice(0, pD.length - DD), this;
            DD -= pD.length
          } else {
            let pD = ID.children[iD + (CD < 0 ? -1 : 0)];
            DD > pD.length ? (DD -= pD.length, this.offsets[cD] += CD) : (CD < 0 && this.offsets[cD]--, this.nodes.push(pD), this.offsets.push(CD > 0 ? 1 : (pD instanceof oD ? pD.text.length : pD.children.length) << 1))
          }
        }
      }
      next() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return DD < 0 && (this.nextInner(-DD, -this.dir), DD = this.value.length), this.nextInner(DD, this.dir)
      }
    }
    class mD {
      constructor(DD, CD, cD) {
        this.value = "", this.done = !1, this.cursor = new XD(DD, CD > cD ? -1 : 1), this.pos = CD > cD ? DD.length : 0, this.from = Math.min(CD, cD), this.to = Math.max(CD, cD)
      }
      nextInner(DD, CD) {
        if (CD < 0 ? this.pos <= this.from : this.pos >= this.to) return this.value = "", this.done = !0, this;
        DD += Math.max(0, CD < 0 ? this.pos - this.to : this.from - this.pos);
        let cD = CD < 0 ? this.pos - this.from : this.to - this.pos;
        DD > cD && (DD = cD), cD -= DD;
        let {
          value: ID
        } = this.cursor.next(DD);
        return this.pos += (ID.length + DD) * CD, this.value = ID.length <= cD ? ID : CD < 0 ? ID.slice(ID.length - cD) : ID.slice(0, cD), this.done = !this.value, this
      }
      next() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return DD < 0 ? DD = Math.max(DD, this.from - this.pos) : DD > 0 && (DD = Math.min(DD, this.to - this.pos)), this.nextInner(DD, this.cursor.dir)
      }
      get lineBreak() {
        return this.cursor.lineBreak && "" != this.value
      }
    }
    class nD {
      constructor(DD) {
        this.inner = DD, this.afterBreak = !0, this.value = "", this.done = !1
      }
      next() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          {
            done: CD,
            lineBreak: cD,
            value: ID
          } = this.inner.next(DD);
        return CD && this.afterBreak ? (this.value = "", this.afterBreak = !1) : CD ? (this.done = !0, this.value = "") : cD ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = ID, this.afterBreak = !1), this
      }
      get lineBreak() {
        return !1
      }
    }
    "undefined" != typeof Symbol && (ZD.prototype[Symbol.iterator] = function() {
      return this.iter()
    }, XD.prototype[Symbol.iterator] = mD.prototype[Symbol.iterator] = nD.prototype[Symbol.iterator] = function() {
      return this
    });
    class OD {
      constructor(DD, CD, cD, ID) {
        this.from = DD, this.to = CD, this.number = cD, this.text = ID
      }
      get length() {
        return this.to - this.from
      }
    }

    function PD(DD, CD, cD) {
      return [CD = Math.max(0, Math.min(DD.length, CD)), Math.max(CD, Math.min(DD.length, cD))]
    }

    function HD(DD, CD) {
      return QD(DD, CD, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function UD(DD, CD) {
      let cD = DD.charCodeAt(CD);
      if (!((ID = cD) >= 55296 && ID < 56320) || CD + 1 == DD.length) return cD;
      var ID;
      let pD = DD.charCodeAt(CD + 1);
      return function(DD) {
        return DD >= 56320 && DD < 57344
      }(pD) ? pD - 56320 + (cD - 55296 << 10) + 65536 : cD
    }

    function xD(DD) {
      return DD <= 65535 ? String.fromCharCode(DD) : (DD -= 65536, String.fromCharCode(55296 + (DD >> 10), 56320 + (1023 & DD)))
    }

    function qD(DD) {
      return DD < 65536 ? 1 : 2
    }
    const JD = /\r\n?|\n/;
    var KD = function(DD) {
      return DD[DD.Simple = 0] = "Simple", DD[DD.TrackDel = 1] = "TrackDel", DD[DD.TrackBefore = 2] = "TrackBefore", DD[DD.TrackAfter = 3] = "TrackAfter", DD
    }(KD || (KD = {}));
    class aD {
      constructor(DD) {
        this.sections = DD
      }
      get length() {
        let DD = 0;
        for (let CD = 0; CD < this.sections.length; CD += 2) DD += this.sections[CD];
        return DD
      }
      get newLength() {
        let DD = 0;
        for (let CD = 0; CD < this.sections.length; CD += 2) {
          let cD = this.sections[CD + 1];
          DD += cD < 0 ? this.sections[CD] : cD
        }
        return DD
      }
      get empty() {
        return 0 == this.sections.length || 2 == this.sections.length && this.sections[1] < 0
      }
      iterGaps(DD) {
        for (let CD = 0, cD = 0, ID = 0; CD < this.sections.length;) {
          let pD = this.sections[CD++],
            iD = this.sections[CD++];
          iD < 0 ? (DD(cD, ID, pD), ID += pD) : ID += iD, cD += pD
        }
      }
      iterChangedRanges(DD) {
        lD(this, DD, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get invertedDesc() {
        let DD = [];
        for (let CD = 0; CD < this.sections.length;) {
          let cD = this.sections[CD++],
            ID = this.sections[CD++];
          ID < 0 ? DD.push(cD, ID) : DD.push(ID, cD)
        }
        return new aD(DD)
      }
      composeDesc(DD) {
        return this.empty ? DD : DD.empty ? this : TD(this, DD)
      }
      mapDesc(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return DD.empty ? this : LD(this, DD, CD)
      }
      mapPos(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : KD.Simple,
          ID = 0,
          pD = 0;
        for (let iD = 0; iD < this.sections.length;) {
          let fD = this.sections[iD++],
            bD = this.sections[iD++],
            QD = ID + fD;
          if (bD < 0) {
            if (QD > DD) return pD + (DD - ID);
            pD += fD
          } else {
            if (cD != KD.Simple && QD >= DD && (cD == KD.TrackDel && ID < DD && QD > DD || cD == KD.TrackBefore && ID < DD || cD == KD.TrackAfter && QD > DD)) return null;
            if (QD > DD || QD == DD && CD < 0 && !fD) return DD == ID || CD < 0 ? pD : pD + bD;
            pD += bD
          }
          ID = QD
        }
        if (DD > ID) throw new RangeError(`Position ${DD} is out of range for changeset of length ${ID}`);
        return pD
      }
      touchesRange(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : DD;
        for (let cD = 0, ID = 0; cD < this.sections.length && ID <= CD;) {
          let pD = ID + this.sections[cD++];
          if (this.sections[cD++] >= 0 && ID <= CD && pD >= DD) return !(ID < DD && pD > CD) || "cover";
          ID = pD
        }
        return !1
      }
      toString() {
        let DD = "";
        for (let CD = 0; CD < this.sections.length;) {
          let cD = this.sections[CD++],
            ID = this.sections[CD++];
          DD += (DD ? " " : "") + cD + (ID >= 0 ? ":" + ID : "")
        }
        return DD
      }
      toJSON() {
        return this.sections
      }
      static fromJSON(DD) {
        if (!Array.isArray(DD) || DD.length % 2 || DD.some((DD => "number" != typeof DD))) throw new RangeError("Invalid JSON representation of ChangeDesc");
        return new aD(DD)
      }
      static create(DD) {
        return new aD(DD)
      }
    }
    class VD extends aD {
      constructor(DD, CD) {
        super(DD), this.inserted = CD
      }
      apply(DD) {
        if (this.length != DD.length) throw new RangeError("Applying change set to a document with the wrong length");
        return lD(this, ((CD, cD, ID, pD, iD) => DD = DD.replace(ID, ID + (cD - CD), iD)), !1), DD
      }
      mapDesc(DD) {
        return LD(this, DD, arguments.length > 1 && void 0 !== arguments[1] && arguments[1], !0)
      }
      invert(DD) {
        let CD = this.sections.slice(),
          cD = [];
        for (let ID = 0, pD = 0; ID < CD.length; ID += 2) {
          let iD = CD[ID],
            fD = CD[ID + 1];
          if (fD >= 0) {
            CD[ID] = fD, CD[ID + 1] = iD;
            let bD = ID >> 1;
            for (; cD.length < bD;) cD.push(ZD.empty);
            cD.push(iD ? DD.slice(pD, pD + iD) : ZD.empty)
          }
          pD += iD
        }
        return new VD(CD, cD)
      }
      compose(DD) {
        return this.empty ? DD : DD.empty ? this : TD(this, DD, !0)
      }
      map(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return DD.empty ? this : LD(this, DD, CD, !0)
      }
      iterChanges(DD) {
        lD(this, DD, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get desc() {
        return aD.create(this.sections)
      }
      filter(DD) {
        let CD = [],
          cD = [],
          ID = [],
          pD = new GD(this);
        DD: for (let iD = 0, fD = 0;;) {
          let bD = iD == DD.length ? 1e9 : DD[iD++];
          for (; fD < bD || fD == bD && 0 == pD.len;) {
            if (pD.done) break DD;
            let DD = Math.min(pD.len, bD - fD);
            zD(ID, DD, -1);
            let iD = -1 == pD.ins ? -1 : 0 == pD.off ? pD.ins : 0;
            zD(CD, DD, iD), iD > 0 && jD(cD, CD, pD.text), pD.forward(DD), fD += DD
          }
          let QD = DD[iD++];
          for (; fD < QD;) {
            if (pD.done) break DD;
            let DD = Math.min(pD.len, QD - fD);
            zD(CD, DD, -1), zD(ID, DD, -1 == pD.ins ? -1 : 0 == pD.off ? pD.ins : 0), pD.forward(DD), fD += DD
          }
        }
        return {
          changes: new VD(CD, cD),
          filtered: aD.create(ID)
        }
      }
      toJSON() {
        let DD = [];
        for (let CD = 0; CD < this.sections.length; CD += 2) {
          let cD = this.sections[CD],
            ID = this.sections[CD + 1];
          ID < 0 ? DD.push(cD) : 0 == ID ? DD.push([cD]) : DD.push([cD].concat(this.inserted[CD >> 1].toJSON()))
        }
        return DD
      }
      static of (DD, CD, cD) {
        let ID = [],
          pD = [],
          iD = 0,
          fD = null;

        function bD() {
          if (!(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && !ID.length) return;
          iD < CD && zD(ID, CD - iD, -1);
          let DD = new VD(ID, pD);
          fD = fD ? fD.compose(DD.map(fD)) : DD, ID = [], pD = [], iD = 0
        }
        return function DD(QD) {
          if (Array.isArray(QD))
            for (let CD of QD) DD(CD);
          else if (QD instanceof VD) {
            if (QD.length != CD) throw new RangeError(`Mismatched change set length (got ${QD.length}, expected ${CD})`);
            bD(), fD = fD ? fD.compose(QD.map(fD)) : QD
          } else {
            let {
              from: DD,
              to: fD = DD,
              insert: wD
            } = QD;
            if (DD > fD || DD < 0 || fD > CD) throw new RangeError(`Invalid change range ${DD} to ${fD} (in doc of length ${CD})`);
            let SD = wD ? "string" == typeof wD ? ZD.of(wD.split(cD || JD)) : wD : ZD.empty,
              BD = SD.length;
            if (DD == fD && 0 == BD) return;
            DD < iD && bD(), DD > iD && zD(ID, DD - iD, -1), zD(ID, fD - DD, BD), jD(pD, ID, SD), iD = fD
          }
        }(DD), bD(!fD), fD
      }
      static empty(DD) {
        return new VD(DD ? [DD, -1] : [], [])
      }
      static fromJSON(DD) {
        if (!Array.isArray(DD)) throw new RangeError("Invalid JSON representation of ChangeSet");
        let CD = [],
          cD = [];
        for (let ID = 0; ID < DD.length; ID++) {
          let pD = DD[ID];
          if ("number" == typeof pD) CD.push(pD, -1);
          else {
            if (!Array.isArray(pD) || "number" != typeof pD[0] || pD.some(((DD, CD) => CD && "string" != typeof DD))) throw new RangeError("Invalid JSON representation of ChangeSet");
            if (1 == pD.length) CD.push(pD[0], 0);
            else {
              for (; cD.length < ID;) cD.push(ZD.empty);
              cD[ID] = ZD.of(pD.slice(1)), CD.push(pD[0], cD[ID].length)
            }
          }
        }
        return new VD(CD, cD)
      }
      static createSet(DD, CD) {
        return new VD(DD, CD)
      }
    }

    function zD(DD, CD, cD) {
      let ID = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (0 == CD && cD <= 0) return;
      let pD = DD.length - 2;
      pD >= 0 && cD <= 0 && cD == DD[pD + 1] ? DD[pD] += CD : pD >= 0 && 0 == CD && 0 == DD[pD] ? DD[pD + 1] += cD : ID ? (DD[pD] += CD, DD[pD + 1] += cD) : DD.push(CD, cD)
    }

    function jD(DD, CD, cD) {
      if (0 == cD.length) return;
      let ID = CD.length - 2 >> 1;
      if (ID < DD.length) DD[DD.length - 1] = DD[DD.length - 1].append(cD);
      else {
        for (; DD.length < ID;) DD.push(ZD.empty);
        DD.push(cD)
      }
    }

    function lD(DD, CD, cD) {
      let ID = DD.inserted;
      for (let pD = 0, iD = 0, fD = 0; fD < DD.sections.length;) {
        let bD = DD.sections[fD++],
          QD = DD.sections[fD++];
        if (QD < 0) pD += bD, iD += bD;
        else {
          let wD = pD,
            SD = iD,
            BD = ZD.empty;
          for (; wD += bD, SD += QD, QD && ID && (BD = BD.append(ID[fD - 2 >> 1])), !(cD || fD == DD.sections.length || DD.sections[fD + 1] < 0);) bD = DD.sections[fD++], QD = DD.sections[fD++];
          CD(pD, wD, iD, SD, BD), pD = wD, iD = SD
        }
      }
    }

    function LD(DD, CD, cD) {
      let ID = [],
        pD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3] ? [] : null,
        iD = new GD(DD),
        fD = new GD(CD),
        bD = 0;
      for (let QD = -1;;) {
        if (++bD > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - likely malformed ChangeSet");
        if (iD.done && fD.len || fD.done && iD.len) throw new Error("Mismatched change set lengths");
        if (-1 == iD.ins && -1 == fD.ins) {
          let DD = Math.min(iD.len, fD.len);
          zD(ID, DD, -1), iD.forward(DD), fD.forward(DD)
        } else if (fD.ins >= 0 && (iD.ins < 0 || QD == iD.i || 0 == iD.off && (fD.len < iD.len || fD.len == iD.len && !cD))) {
          let DD = fD.len;
          for (zD(ID, fD.ins, -1); DD;) {
            if (++bD > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-b");
            let CD = Math.min(iD.len, DD);
            iD.ins >= 0 && QD < iD.i && iD.len <= CD && (zD(ID, 0, iD.ins), pD && jD(pD, ID, iD.text), QD = iD.i), iD.forward(CD), DD -= CD
          }
          fD.next()
        } else {
          if (!(iD.ins >= 0)) {
            if (iD.done && fD.done) return pD ? VD.createSet(ID, pD) : aD.create(ID);
            throw new Error("Mismatched change set lengths")
          } {
            let DD = 0,
              CD = iD.len;
            for (; CD;) {
              if (++bD > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-a");
              if (-1 == fD.ins) {
                let cD = Math.min(CD, fD.len);
                DD += cD, CD -= cD, fD.forward(cD)
              } else {
                if (!(0 == fD.ins && fD.len < CD)) break;
                CD -= fD.len, fD.next()
              }
            }
            zD(ID, DD, QD < iD.i ? iD.ins : 0), pD && QD < iD.i && jD(pD, ID, iD.text), QD = iD.i, iD.forward(iD.len - CD)
          }
        }
      }
    }

    function TD(DD, CD) {
      let cD = [],
        ID = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? [] : null,
        pD = new GD(DD),
        iD = new GD(CD),
        fD = 0;
      for (let bD = !1;;) {
        if (++fD > 2e6) throw new Error("BLOXD CODEMIRROR: composeSets exceeded max iterations - likely malformed ChangeSet");
        if (pD.done && iD.done) return ID ? VD.createSet(cD, ID) : aD.create(cD);
        if (0 == pD.ins) zD(cD, pD.len, 0, bD), pD.next();
        else if (0 != iD.len || iD.done) {
          if (pD.done || iD.done) throw new Error("Mismatched change set lengths");
          {
            let DD = Math.min(pD.len2, iD.len),
              CD = cD.length;
            if (-1 == pD.ins) {
              let CD = -1 == iD.ins ? -1 : iD.off ? 0 : iD.ins;
              zD(cD, DD, CD, bD), ID && CD && jD(ID, cD, iD.text)
            } else - 1 == iD.ins ? (zD(cD, pD.off ? 0 : pD.len, DD, bD), ID && jD(ID, cD, pD.textBit(DD))) : (zD(cD, pD.off ? 0 : pD.len, iD.off ? 0 : iD.ins, bD), ID && !iD.off && jD(ID, cD, iD.text));
            bD = (pD.ins > DD || iD.ins >= 0 && iD.len > DD) && (bD || cD.length > CD), pD.forward2(DD), iD.forward(DD)
          }
        } else zD(cD, 0, iD.ins, bD), ID && jD(ID, cD, iD.text), iD.next()
      }
    }
    class GD {
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
        } = this.set, CD = this.i - 2 >> 1;
        return CD >= DD.length ? ZD.empty : DD[CD]
      }
      textBit(DD) {
        let {
          inserted: CD
        } = this.set, cD = this.i - 2 >> 1;
        return cD >= CD.length && !DD ? ZD.empty : CD[cD].slice(this.off, null == DD ? void 0 : this.off + DD)
      }
      forward(DD) {
        DD == this.len ? this.next() : (this.len -= DD, this.off += DD)
      }
      forward2(DD) {
        -1 == this.ins ? this.forward(DD) : DD == this.ins ? this.next() : (this.ins -= DD, this.off += DD)
      }
    }
    class RD {
      constructor(DD, CD, cD) {
        this.from = DD, this.to = CD, this.flags = cD
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
        let CD, cD, ID = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return this.empty ? CD = cD = DD.mapPos(this.from, ID) : (CD = DD.mapPos(this.from, 1), cD = DD.mapPos(this.to, -1)), CD == this.from && cD == this.to ? this : new RD(CD, cD, this.flags)
      }
      extend(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : DD,
          cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (DD <= this.anchor && CD >= this.anchor) return kD.range(DD, CD, void 0, void 0, cD);
        let ID = Math.abs(DD - this.anchor) > Math.abs(CD - this.anchor) ? DD : CD;
        return kD.range(this.anchor, ID, void 0, void 0, cD)
      }
      eq(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.anchor == DD.anchor && this.head == DD.head && this.goalColumn == DD.goalColumn && (!CD || !this.empty || this.assoc == DD.assoc)
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
      static create(DD, CD, cD) {
        return new RD(DD, CD, cD)
      }
    }
    class kD {
      constructor(DD, CD) {
        this.df = DD, this.mainIndex = CD
      }
      map(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return DD.empty ? this : kD.create(this.df.map((cD => cD.map(DD, CD))), this.mainIndex)
      }
      eq(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.df.length != DD.df.length || this.mainIndex != DD.mainIndex) return !1;
        for (let cD = 0; cD < this.df.length; cD++)
          if (!this.df[cD].eq(DD.df[cD], CD)) return !1;
        return !0
      }
      get main() {
        return this.df[this.mainIndex]
      }
      asSingle() {
        return 1 == this.df.length ? this : new kD([this.main], 0)
      }
      addRange(DD) {
        let CD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return kD.create([DD].concat(this.df), CD ? 0 : this.mainIndex + 1)
      }
      replaceRange(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.mainIndex,
          cD = this.df.slice();
        return cD[CD] = DD, kD.create(cD, this.mainIndex)
      }
      toJSON() {
        return {
          df: this.df.map((DD => DD.toJSON())),
          main: this.mainIndex
        }
      }
      static fromJSON(DD) {
        if (!DD || !Array.isArray(DD.df) || "number" != typeof DD.main || DD.main >= DD.df.length) throw new RangeError("Invalid JSON representation for EditorSelection");
        return new kD(DD.df.map((DD => RD.fromJSON(DD))), DD.main)
      }
      static single(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : DD;
        return new kD([kD.range(DD, CD)], 0)
      }
      static create(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (0 == DD.length) throw new RangeError("A selection needs at least one range");
        for (let cD = 0, ID = 0; ID < DD.length; ID++) {
          let pD = DD[ID];
          if (pD.empty ? pD.from <= cD : pD.from < cD) return kD.normalized(DD.slice(), CD);
          cD = pD.to
        }
        return new kD(DD, CD)
      }
      static cursor(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cD = arguments.length > 2 ? arguments[2] : void 0,
          ID = arguments.length > 3 ? arguments[3] : void 0;
        return RD.create(DD, DD, (0 == CD ? 0 : CD < 0 ? 8 : 16) | (null == cD ? 7 : Math.min(6, cD)) | (null !== ID && void 0 !== ID ? ID : 16777215) << 6)
      }
      static range(DD, CD, cD, ID, pD) {
        let iD = (null !== cD && void 0 !== cD ? cD : 16777215) << 6 | (null == ID ? 7 : Math.min(6, ID));
        return pD || DD == CD || (pD = CD < DD ? 1 : -1), CD < DD ? RD.create(CD, DD, 48 | iD) : RD.create(DD, CD, (pD ? pD < 0 ? 8 : 16 : 0) | iD)
      }
      static normalized(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cD = DD[CD];
        DD.sort(((DD, CD) => DD.from - CD.from)), CD = DD.indexOf(cD);
        for (let ID = 1; ID < DD.length; ID++) {
          let cD = DD[ID],
            pD = DD[ID - 1];
          if (cD.empty ? cD.from <= pD.to : cD.from < pD.to) {
            let iD = pD.from,
              fD = Math.max(cD.to, pD.to);
            ID <= CD && CD--, DD.splice(--ID, 2, cD.anchor > cD.head ? kD.range(fD, iD) : kD.range(iD, fD))
          }
        }
        return new kD(DD, CD)
      }
    }

    function dD(DD, CD) {
      for (let cD of DD.df)
        if (cD.to > CD) throw new RangeError("Selection points outside of document")
    }
    let YD = 0;
    class WD {
      constructor(DD, CD, cD, ID, pD) {
        this.combine = DD, this.compareInput = CD, this.compare = cD, this.isStatic = ID, this.id = YD++, this.default = DD([]), this.extensions = "function" == typeof pD ? pD(this) : pD
      }
      get reader() {
        return this
      }
      static define() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return new WD(DD.combine || (DD => DD), DD.compareInput || ((DD, CD) => DD === CD), DD.compare || (DD.combine ? (DD, CD) => DD === CD : sD), !!DD.static, DD.enables)
      }
      of(DD) {
        return new ED([], this, 0, DD)
      }
      compute(DD, CD) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new ED(DD, this, 1, CD)
      }
      computeN(DD, CD) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new ED(DD, this, 2, CD)
      }
      from(DD, CD) {
        return CD || (CD = DD => DD), this.compute([DD], (cD => CD(cD.field(DD))))
      }
    }

    function sD(DD, CD) {
      return DD == CD || DD.length == CD.length && DD.every(((DD, cD) => DD === CD[cD]))
    }
    class ED {
      constructor(DD, CD, cD, ID) {
        this.dependencies = DD, this.facet = CD, this.type = cD, this.value = ID, this.id = YD++
      }
      dynamicSlot(DD) {
        var CD;
        let cD = this.value,
          ID = this.facet.compareInput,
          pD = this.id,
          iD = DD[pD] >> 1,
          fD = 2 == this.type,
          bD = !1,
          QD = !1,
          wD = [];
        for (let SD of this.dependencies) "doc" == SD ? bD = !0 : "selection" == SD ? QD = !0 : 0 == (1 & (null !== (CD = DD[SD.id]) && void 0 !== CD ? CD : 1)) && wD.push(DD[SD.id]);
        return {
          create: DD => (DD.values[iD] = cD(DD), 1),
          update(DD, CD) {
            if (bD && CD.docChanged || QD && (CD.docChanged || CD.selection) || uD(DD, wD)) {
              let CD = cD(DD);
              if (fD ? !eD(CD, DD.values[iD], ID) : !ID(CD, DD.values[iD])) return DD.values[iD] = CD, 1
            }
            return 0
          },
          reconfigure: (DD, CD) => {
            let bD, QD = CD.config.address[pD];
            if (null != QD) {
              let pD = SC(CD, QD);
              if (this.dependencies.every((cD => cD instanceof WD ? CD.facet(cD) === DD.facet(cD) : !(cD instanceof AD) || CD.field(cD, !1) == DD.field(cD, !1))) || (fD ? eD(bD = cD(DD), pD, ID) : ID(bD = cD(DD), pD))) return DD.values[iD] = pD, 0
            } else bD = cD(DD);
            return DD.values[iD] = bD, 1
          }
        }
      }
    }

    function eD(DD, CD, cD) {
      if (DD.length != CD.length) return !1;
      for (let ID = 0; ID < DD.length; ID++)
        if (!cD(DD[ID], CD[ID])) return !1;
      return !0
    }

    function uD(DD, CD) {
      let cD = !1;
      for (let ID of CD) 1 & wC(DD, ID) && (cD = !0);
      return cD
    }

    function hD(DD, CD, cD) {
      let ID = cD.map((CD => DD[CD.id])),
        pD = cD.map((DD => DD.type)),
        iD = ID.filter((DD => !(1 & DD))),
        fD = DD[CD.id] >> 1;

      function bD(DD) {
        let cD = [];
        for (let CD = 0; CD < ID.length; CD++) {
          let iD = SC(DD, ID[CD]);
          if (2 == pD[CD])
            for (let DD of iD) cD.push(DD);
          else cD.push(iD)
        }
        return CD.combine(cD)
      }
      return {
        create(DD) {
          for (let CD of ID) wC(DD, CD);
          return DD.values[fD] = bD(DD), 1
        },
        update(DD, cD) {
          if (!uD(DD, iD)) return 0;
          let ID = bD(DD);
          return CD.compare(ID, DD.values[fD]) ? 0 : (DD.values[fD] = ID, 1)
        },
        reconfigure(DD, pD) {
          let iD = uD(DD, ID),
            QD = pD.config.facets[CD.id],
            wD = pD.facet(CD);
          if (QD && !iD && sD(cD, QD)) return DD.values[fD] = wD, 0;
          let SD = bD(DD);
          return CD.compare(SD, wD) ? (DD.values[fD] = wD, 0) : (DD.values[fD] = SD, 1)
        }
      }
    }
    const rD = WD.define({
      static: !0
    });
    class AD {
      constructor(DD, CD, cD, ID, pD) {
        this.id = DD, this.createF = CD, this.updateF = cD, this.compareF = ID, this.spec = pD, this.provides = void 0
      }
      static define(DD) {
        let CD = new AD(YD++, DD.create, DD.update, DD.compare || ((DD, CD) => DD === CD), DD);
        return DD.provide && (CD.provides = DD.provide(CD)), CD
      }
      create(DD) {
        let CD = DD.facet(rD).find((DD => DD.field == this));
        return ((null === CD || void 0 === CD ? void 0 : CD.create) || this.createF)(DD)
      }
      slot(DD) {
        let CD = DD[this.id] >> 1;
        return {
          create: DD => (DD.values[CD] = this.create(DD), 1),
          update: (DD, cD) => {
            let ID = DD.values[CD],
              pD = this.updateF(ID, cD);
            return this.compareF(ID, pD) ? 0 : (DD.values[CD] = pD, 1)
          },
          reconfigure: (DD, cD) => {
            let ID, pD = DD.facet(rD),
              iD = cD.facet(rD);
            return (ID = pD.find((DD => DD.field == this))) && ID != iD.find((DD => DD.field == this)) ? (DD.values[CD] = ID.create(DD), 1) : null != cD.config.address[this.id] ? (DD.values[CD] = cD.field(this), 0) : (DD.values[CD] = this.create(DD), 1)
          }
        }
      }
      init(DD) {
        return [this, rD.of({
          field: this,
          create: DD
        })]
      }
      get extension() {
        return this
      }
    }
    const FD = 4,
      DC = 3,
      CC = 2,
      cC = 1;

    function IC(DD) {
      return CD => new iC(CD, DD)
    }
    const pC = {
      highest: IC(0),
      high: IC(cC),
      default: IC(CC),
      low: IC(DC),
      lowest: IC(FD)
    };
    class iC {
      constructor(DD, CD) {
        this.inner = DD, this.prec = CD
      }
    }
    class fC {
      of(DD) {
        return new bC(this, DD)
      }
      reconfigure(DD) {
        return fC.reconfigure.of({
          compartment: this,
          extension: DD
        })
      }
      get(DD) {
        return DD.config.compartments.get(this)
      }
    }
    class bC {
      constructor(DD, CD) {
        this.compartment = DD, this.inner = CD
      }
    }
    class QC {
      constructor(DD, CD, cD, ID, pD, iD) {
        for (this.base = DD, this.compartments = CD, this.dynamicSlots = cD, this.address = ID, this.staticValues = pD, this.facets = iD, this.statusTemplate = []; this.statusTemplate.length < cD.length;) this.statusTemplate.push(0)
      }
      staticFacet(DD) {
        let CD = this.address[DD.id];
        return null == CD ? DD.default : this.staticValues[CD >> 1]
      }
      static resolve(DD, CD, cD) {
        let ID = [],
          pD = Object.create(null),
          iD = new Map;
        for (let BD of function(DD, CD, cD) {
            let ID = [
                [],
                [],
                [],
                [],
                []
              ],
              pD = new Map;

            function iD(DD, fD) {
              let bD = pD.get(DD);
              if (null != bD) {
                if (bD <= fD) return;
                let CD = ID[bD].indexOf(DD);
                CD > -1 && ID[bD].splice(CD, 1), DD instanceof bC && cD.delete(DD.compartment)
              }
              if (pD.set(DD, fD), Array.isArray(DD))
                for (let CD of DD) iD(CD, fD);
              else if (DD instanceof bC) {
                if (cD.has(DD.compartment)) throw new RangeError("Duplicate use of compartment in extensions");
                let ID = CD.get(DD.compartment) || DD.inner;
                cD.set(DD.compartment, ID), iD(ID, fD)
              } else if (DD instanceof iC) iD(DD.inner, DD.prec);
              else if (DD instanceof AD) ID[fD].push(DD), DD.provides && iD(DD.provides, fD);
              else if (DD instanceof ED) ID[fD].push(DD), DD.facet.extensions && iD(DD.facet.extensions, CC);
              else {
                let CD = DD.extension;
                if (!CD) throw new Error(`Unrecognized extension value in extension set (${DD}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
                iD(CD, fD)
              }
            }
            return iD(DD, CC), ID.reduce(((DD, CD) => DD.concat(CD)))
          }(DD, CD, iD)) BD instanceof AD ? ID.push(BD) : (pD[BD.facet.id] || (pD[BD.facet.id] = [])).push(BD);
        let fD = Object.create(null),
          bD = [],
          QD = [];
        for (let BD of ID) fD[BD.id] = QD.length << 1, QD.push((DD => BD.slot(DD)));
        let wD = null === cD || void 0 === cD ? void 0 : cD.config.facets;
        for (let BD in pD) {
          let DD = pD[BD],
            CD = DD[0].facet,
            ID = wD && wD[BD] || [];
          if (DD.every((DD => 0 == DD.type)))
            if (fD[CD.id] = bD.length << 1 | 1, sD(ID, DD)) bD.push(cD.facet(CD));
            else {
              let ID = CD.combine(DD.map((DD => DD.value)));
              bD.push(cD && CD.compare(ID, cD.facet(CD)) ? cD.facet(CD) : ID)
            }
          else {
            for (let CD of DD) 0 == CD.type ? (fD[CD.id] = bD.length << 1 | 1, bD.push(CD.value)) : (fD[CD.id] = QD.length << 1, QD.push((DD => CD.dynamicSlot(DD))));
            fD[CD.id] = QD.length << 1, QD.push((cD => hD(cD, CD, DD)))
          }
        }
        let SD = QD.map((DD => DD(fD)));
        return new QC(DD, iD, SD, fD, bD, pD)
      }
    }

    function wC(DD, CD) {
      if (1 & CD) return 2;
      let cD = CD >> 1,
        ID = DD.status[cD];
      if (4 == ID) throw new Error("Cyclic dependency between fields and/or facets");
      if (2 & ID) return ID;
      DD.status[cD] = 4;
      let pD = DD.computeSlot(DD, DD.config.dynamicSlots[cD]);
      return DD.status[cD] = 2 | pD
    }

    function SC(DD, CD) {
      return 1 & CD ? DD.config.staticValues[CD >> 1] : DD.values[CD >> 1]
    }
    const BC = WD.define(),
      yC = WD.define({
        combine: DD => DD.some((DD => DD)),
        static: !0
      }),
      MC = WD.define({
        combine: DD => DD.length ? DD[0] : void 0,
        static: !0
      }),
      tC = WD.define(),
      ZC = WD.define(),
      oC = WD.define(),
      vC = WD.define({
        combine: DD => !!DD.length && DD[0]
      });
    class NC {
      constructor(DD, CD) {
        this.type = DD, this.value = CD
      }
      static define() {
        return new gC
      }
    }
    class gC {
      of(DD) {
        return new NC(this, DD)
      }
    }
    class XC {
      constructor(DD) {
        this.map = DD
      }
      of(DD) {
        return new mC(this, DD)
      }
    }
    class mC {
      constructor(DD, CD) {
        this.type = DD, this.value = CD
      }
      map(DD) {
        let CD = this.type.map(this.value, DD);
        return void 0 === CD ? void 0 : CD == this.value ? this : new mC(this.type, CD)
      }
      is(DD) {
        return this.type == DD
      }
      static define() {
        return new XC((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).map || (DD => DD))
      }
      static mapEffects(DD, CD) {
        if (!DD.length) return DD;
        let cD = [];
        for (let ID of DD) {
          let DD = ID.map(CD);
          DD && cD.push(DD)
        }
        return cD
      }
    }
    mC.reconfigure = mC.define(), mC.appendConfig = mC.define();
    class nC {
      constructor(DD, CD, cD, ID, pD, iD) {
        this.startState = DD, this.changes = CD, this.selection = cD, this.effects = ID, this.annotations = pD, this.scrollIntoView = iD, this._doc = null, this._state = null, cD && dD(cD, CD.newLength), pD.some((DD => DD.type == nC.time)) || (this.annotations = pD.concat(nC.time.of(Date.now())))
      }
      static create(DD, CD, cD, ID, pD, iD) {
        return new nC(DD, CD, cD, ID, pD, iD)
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
        for (let CD of this.annotations)
          if (CD.type == DD) return CD.value
      }
      get docChanged() {
        return !this.changes.empty
      }
      get reconfigured() {
        return this.startState.config != this.state.config
      }
      isUserEvent(DD) {
        let CD = this.annotation(nC.userEvent);
        return !(!CD || !(CD == DD || CD.length > DD.length && CD.slice(0, DD.length) == DD && "." == CD[DD.length]))
      }
    }

    function OC(DD, CD) {
      let cD = [];
      for (let ID = 0, pD = 0;;) {
        let iD, fD;
        if (ID < DD.length && (pD == CD.length || CD[pD] >= DD[ID])) iD = DD[ID++], fD = DD[ID++];
        else {
          if (!(pD < CD.length)) return cD;
          iD = CD[pD++], fD = CD[pD++]
        }!cD.length || cD[cD.length - 1] < iD ? cD.push(iD, fD) : cD[cD.length - 1] < fD && (cD[cD.length - 1] = fD)
      }
    }

    function PC(DD, CD, cD) {
      var ID;
      let pD, iD, fD;
      return cD ? (pD = CD.changes, iD = VD.empty(CD.changes.length), fD = DD.changes.compose(CD.changes)) : (pD = CD.changes.map(DD.changes), iD = DD.changes.mapDesc(CD.changes, !0), fD = DD.changes.compose(pD)), {
        changes: fD,
        selection: CD.selection ? CD.selection.map(iD) : null === (ID = DD.selection) || void 0 === ID ? void 0 : ID.map(pD),
        effects: mC.mapEffects(DD.effects, pD).concat(mC.mapEffects(CD.effects, iD)),
        annotations: DD.annotations.length ? DD.annotations.concat(CD.annotations) : CD.annotations,
        scrollIntoView: DD.scrollIntoView || CD.scrollIntoView
      }
    }

    function HC(DD, CD, cD) {
      let ID = CD.selection,
        pD = qC(CD.annotations);
      return CD.userEvent && (pD = pD.concat(nC.userEvent.of(CD.userEvent))), {
        changes: CD.changes instanceof VD ? CD.changes : VD.of(CD.changes || [], cD, DD.facet(MC)),
        selection: ID && (ID instanceof kD ? ID : kD.single(ID.anchor, ID.head)),
        effects: qC(CD.effects),
        annotations: pD,
        scrollIntoView: !!CD.scrollIntoView
      }
    }

    function UC(DD, CD, cD) {
      let ID = HC(DD, CD.length ? CD[0] : {}, DD.doc.length);
      CD.length && !1 === CD[0].filter && (cD = !1);
      for (let iD = 1; iD < CD.length; iD++) {
        !1 === CD[iD].filter && (cD = !1);
        let pD = !!CD[iD].sequential;
        ID = PC(ID, HC(DD, CD[iD], pD ? ID.changes.newLength : DD.doc.length), pD)
      }
      let pD = nC.create(DD, ID.changes, ID.selection, ID.effects, ID.annotations, ID.scrollIntoView);
      return function(DD) {
        let CD = DD.startState,
          cD = CD.facet(oC),
          ID = DD;
        for (let pD = cD.length - 1; pD >= 0; pD--) {
          let iD = cD[pD](DD);
          iD && Object.keys(iD).length && (ID = PC(ID, HC(CD, iD, DD.changes.newLength), !0))
        }
        return ID == DD ? DD : nC.create(CD, DD.changes, DD.selection, ID.effects, ID.annotations, ID.scrollIntoView)
      }(cD ? function(DD) {
        let CD = DD.startState,
          cD = !0;
        for (let pD of CD.facet(tC)) {
          let CD = pD(DD);
          if (!1 === CD) {
            cD = !1;
            break
          }
          Array.isArray(CD) && (cD = !0 === cD ? CD : OC(cD, CD))
        }
        if (!0 !== cD) {
          let ID, pD;
          if (!1 === cD) pD = DD.changes.invertedDesc, ID = VD.empty(CD.doc.length);
          else {
            let CD = DD.changes.filter(cD);
            ID = CD.changes, pD = CD.filtered.mapDesc(CD.changes).invertedDesc
          }
          DD = nC.create(CD, ID, DD.selection && DD.selection.map(pD), mC.mapEffects(DD.effects, pD), DD.annotations, DD.scrollIntoView)
        }
        let ID = CD.facet(ZC);
        for (let pD = ID.length - 1; pD >= 0; pD--) {
          let cD = ID[pD](DD);
          DD = cD instanceof nC ? cD : Array.isArray(cD) && 1 == cD.length && cD[0] instanceof nC ? cD[0] : UC(CD, qC(cD), !1)
        }
        return DD
      }(pD) : pD)
    }
    nC.time = NC.define(), nC.userEvent = NC.define(), nC.addToHistory = NC.define(), nC.remote = NC.define();
    const xC = [];

    function qC(DD) {
      return null == DD ? xC : Array.isArray(DD) ? DD : [DD]
    }
    var JC = function(DD) {
      return DD[DD.Word = 0] = "Word", DD[DD.Space = 1] = "Space", DD[DD.Other = 2] = "Other", DD
    }(JC || (JC = {}));
    const KC = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
    let aC;
    try {
      aC = new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u")
    } catch (cc) {}

    function VC(DD) {
      return CD => {
        if (!/\S/.test(CD)) return JC.Space;
        if (function(DD) {
            if (aC) return aC.test(DD);
            for (let CD = 0; CD < DD.length; CD++) {
              let cD = DD[CD];
              if (/\w/.test(cD) || cD > "\x80" && (cD.toUpperCase() != cD.toLowerCase() || KC.test(cD))) return !0
            }
            return !1
          }(CD)) return JC.Word;
        for (let cD = 0; cD < DD.length; cD++)
          if (CD.indexOf(DD[cD]) > -1) return JC.Word;
        return JC.Other
      }
    }
    class zC {
      constructor(DD, CD, cD, ID, pD, iD) {
        this.config = DD, this.doc = CD, this.selection = cD, this.values = ID, this.status = DD.statusTemplate.slice(), this.computeSlot = pD, iD && (iD._state = this);
        for (let fD = 0; fD < this.config.dynamicSlots.length; fD++) wC(this, fD << 1);
        this.computeSlot = null
      }
      field(DD) {
        let CD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          cD = this.config.address[DD.id];
        if (null != cD) return wC(this, cD), SC(this, cD);
        if (CD) throw new RangeError("Field is not present in this state")
      }
      update() {
        for (var DD = arguments.length, CD = new Array(DD), cD = 0; cD < DD; cD++) CD[cD] = arguments[cD];
        return UC(this, CD, !0)
      }
      applyTransaction(DD) {
        let CD, cD = this.config,
          {
            base: ID,
            compartments: pD
          } = cD;
        for (let fD of DD.effects) fD.is(fC.reconfigure) ? (cD && (pD = new Map, cD.compartments.forEach(((DD, CD) => pD.set(CD, DD))), cD = null), pD.set(fD.value.compartment, fD.value.extension)) : fD.is(mC.reconfigure) ? (cD = null, ID = fD.value) : fD.is(mC.appendConfig) && (cD = null, ID = qC(ID).concat(fD.value));
        if (cD) CD = DD.startState.values.slice();
        else {
          cD = QC.resolve(ID, pD, this), CD = new zC(cD, this.doc, this.selection, cD.dynamicSlots.map((() => null)), ((DD, CD) => CD.reconfigure(DD, this)), null).values
        }
        let iD = DD.startState.facet(yC) ? DD.newSelection : DD.newSelection.asSingle();
        new zC(cD, DD.newDoc, iD, CD, ((CD, cD) => cD.update(CD, DD)), DD)
      }
      replaceSelection(DD) {
        return "string" == typeof DD && (DD = this.toText(DD)), this.changeByRange((CD => ({
          changes: {
            from: CD.from,
            to: CD.to,
            insert: DD
          },
          range: kD.cursor(CD.from + DD.length)
        })))
      }
      changeByRange(DD) {
        let CD = this.selection,
          cD = DD(CD.df[0]),
          ID = this.changes(cD.changes),
          pD = [cD.range],
          iD = qC(cD.effects);
        for (let fD = 1; fD < CD.df.length; fD++) {
          let cD = DD(CD.df[fD]),
            bD = this.changes(cD.changes),
            QD = bD.map(ID);
          for (let DD = 0; DD < fD; DD++) pD[DD] = pD[DD].map(QD);
          let wD = ID.mapDesc(bD, !0);
          pD.push(cD.range.map(wD)), ID = ID.compose(QD), iD = mC.mapEffects(iD, QD).concat(mC.mapEffects(qC(cD.effects), wD))
        }
        return {
          changes: ID,
          selection: kD.create(pD, CD.mainIndex),
          effects: iD
        }
      }
      changes() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return DD instanceof VD ? DD : VD.of(DD, this.doc.length, this.facet(zC.lineSeparator))
      }
      toText(DD) {
        return ZD.of(DD.split(this.facet(zC.lineSeparator) || JD))
      }
      sliceDoc() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.doc.length;
        return this.doc.sliceString(DD, CD, this.lineBreak)
      }
      facet(DD) {
        let CD = this.config.address[DD.id];
        return null == CD ? DD.default : (wC(this, CD), SC(this, CD))
      }
      toJSON(DD) {
        let CD = {
          doc: this.sliceDoc(),
          selection: this.selection.toJSON()
        };
        if (DD)
          for (let cD in DD) {
            let ID = DD[cD];
            ID instanceof AD && null != this.config.address[ID.id] && (CD[cD] = ID.spec.toJSON(this.field(DD[cD]), this))
          }
        return CD
      }
      static fromJSON(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          cD = arguments.length > 2 ? arguments[2] : void 0;
        if (!DD || "string" != typeof DD.doc) throw new RangeError("Invalid JSON representation for EditorState");
        let ID = [];
        if (cD)
          for (let pD in cD)
            if (Object.prototype.hasOwnProperty.call(DD, pD)) {
              let CD = cD[pD],
                iD = DD[pD];
              ID.push(CD.init((DD => CD.spec.fromJSON(iD, DD))))
            } return zC.create({
          doc: DD.doc,
          selection: kD.fromJSON(DD.selection),
          extensions: CD.extensions ? ID.concat([CD.extensions]) : ID
        })
      }
      static create() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          CD = QC.resolve(DD.extensions || [], new Map),
          cD = DD.doc instanceof ZD ? DD.doc : ZD.of((DD.doc || "").split(CD.staticFacet(zC.lineSeparator) || JD)),
          ID = DD.selection ? DD.selection instanceof kD ? DD.selection : kD.single(DD.selection.anchor, DD.selection.head) : kD.single(0);
        return dD(ID, cD.length), CD.staticFacet(yC) || (ID = ID.asSingle()), new zC(CD, cD, ID, CD.dynamicSlots.map((() => null)), ((DD, CD) => CD.create(DD)), null)
      }
      get tabSize() {
        return this.facet(zC.tabSize)
      }
      get lineBreak() {
        return this.facet(zC.lineSeparator) || "\n"
      }
      get readOnly() {
        return this.facet(vC)
      }
      phrase(DD) {
        for (var CD = arguments.length, cD = new Array(CD > 1 ? CD - 1 : 0), ID = 1; ID < CD; ID++) cD[ID - 1] = arguments[ID];
        for (let pD of this.facet(zC.phrases))
          if (Object.prototype.hasOwnProperty.call(pD, DD)) {
            DD = pD[DD];
            break
          } return cD.length && (DD = DD.replace(/\$(\$|\d*)/g, ((DD, CD) => {
          if ("$" == CD) return "$";
          let ID = +(CD || 1);
          return !ID || ID > cD.length ? DD : cD[ID - 1]
        }))), DD
      }
      languageDataAt(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          ID = [];
        for (let pD of this.facet(BC))
          for (let iD of pD(this, CD, cD)) Object.prototype.hasOwnProperty.call(iD, DD) && ID.push(iD[DD]);
        return ID
      }
      charCategorizer(DD) {
        let CD = this.languageDataAt("wordChars", DD);
        return VC(CD.length ? CD[0] : "")
      }
      wordAt(DD) {
        let {
          text: CD,
          from: cD,
          length: ID
        } = this.doc.lineAt(DD), pD = this.charCategorizer(DD), iD = DD - cD, fD = DD - cD;
        for (; iD > 0;) {
          let DD = HD(CD, iD, !1);
          if (pD(CD.slice(DD, iD)) != JC.Word) break;
          iD = DD
        }
        for (; fD < ID;) {
          let DD = HD(CD, fD);
          if (pD(CD.slice(fD, DD)) != JC.Word) break;
          fD = DD
        }
        return iD == fD ? null : kD.range(iD + cD, fD + cD)
      }
    }

    function jC(DD, CD) {
      let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        ID = {};
      for (let pD of DD)
        for (let DD of Object.keys(pD)) {
          let CD = pD[DD],
            iD = ID[DD];
          if (void 0 === iD) ID[DD] = CD;
          else if (iD === CD || void 0 === CD);
          else {
            if (!Object.hasOwnProperty.call(cD, DD)) throw new Error("Config merge conflict for field " + DD);
            ID[DD] = cD[DD](iD, CD)
          }
        }
      for (let pD in CD) void 0 === ID[pD] && (ID[pD] = CD[pD]);
      return ID
    }
    zC.allowMultipleSelections = yC, zC.tabSize = WD.define({
      combine: DD => DD.length ? DD[0] : 4
    }), zC.lineSeparator = MC, zC.readOnly = vC, zC.phrases = WD.define({
      compare(DD, CD) {
        let cD = Object.keys(DD),
          ID = Object.keys(CD);
        return cD.length == ID.length && cD.every((cD => DD[cD] == CD[cD]))
      }
    }), zC.languageData = BC, zC.changeFilter = tC, zC.transactionFilter = ZC, zC.transactionExtender = oC, fC.reconfigure = mC.define();
    class lC {
      eq(DD) {
        return this == DD
      }
      range(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : DD;
        return TC.create(DD, CD, this)
      }
    }

    function LC(DD, CD) {
      return DD == CD || DD.constructor == CD.constructor && DD.eq(CD)
    }
    lC.prototype.startSide = lC.prototype.endSide = 0, lC.prototype.point = !1, lC.prototype.mapMode = KD.TrackDel;
    class TC {
      constructor(DD, CD, cD) {
        this.from = DD, this.to = CD, this.value = cD
      }
      static create(DD, CD, cD) {
        return new TC(DD, CD, cD)
      }
    }

    function GC(DD, CD) {
      return DD.from - CD.from || DD.value.startSide - CD.value.startSide
    }
    class RC {
      constructor(DD, CD, cD, ID) {
        this.from = DD, this.to = CD, this.value = cD, this.JcD = ID
      }
      get length() {
        return this.to[this.to.length - 1]
      }
      findIndex(DD, CD, cD) {
        let ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          pD = cD ? this.to : this.from;
        for (let iD = ID, fD = pD.length;;) {
          if (iD == fD) return iD;
          let ID = iD + fD >> 1,
            bD = pD[ID] - DD || (cD ? this.value[ID].endSide : this.value[ID].startSide) - CD;
          if (ID == iD) return bD >= 0 ? iD : fD;
          bD >= 0 ? fD = ID : iD = ID + 1
        }
      }
      between(DD, CD, cD, ID) {
        for (let pD = this.findIndex(CD, -1e9, !0), iD = this.findIndex(cD, 1e9, !1, pD); pD < iD; pD++)
          if (!1 === ID(this.from[pD] + DD, this.to[pD] + DD, this.value[pD])) return !1
      }
      map(DD, CD) {
        let cD = [],
          ID = [],
          pD = [],
          iD = -1,
          fD = -1;
        for (let bD = 0; bD < this.value.length; bD++) {
          let QD, wD, SD = this.value[bD],
            BD = this.from[bD] + DD,
            yD = this.to[bD] + DD;
          if (BD == yD) {
            let DD = CD.mapPos(BD, SD.startSide, SD.mapMode);
            if (null == DD) continue;
            if (QD = wD = DD, SD.startSide != SD.endSide && (wD = CD.mapPos(BD, SD.endSide), wD < QD)) continue
          } else if (QD = CD.mapPos(BD, SD.startSide), wD = CD.mapPos(yD, SD.endSide), QD > wD || QD == wD && SD.startSide > 0 && SD.endSide <= 0) continue;
          (wD - QD || SD.endSide - SD.startSide) < 0 || (iD < 0 && (iD = QD), SD.point && (fD = Math.max(fD, wD - QD)), cD.push(SD), ID.push(QD - iD), pD.push(wD - iD))
        }
        return {
          mapped: cD.length ? new RC(ID, pD, cD, fD) : null,
          pos: iD
        }
      }
    }
    class kC {
      constructor(DD, CD, cD, ID) {
        this.chunkPos = DD, this.chunk = CD, this.nextLayer = cD, this.JcD = ID
      }
      static create(DD, CD, cD, ID) {
        return new kC(DD, CD, cD, ID)
      }
      get length() {
        let DD = this.chunk.length - 1;
        return DD < 0 ? 0 : Math.max(this.chunkEnd(DD), this.nextLayer.length)
      }
      get size() {
        if (this.xt) return 0;
        let DD = this.nextLayer.size;
        for (let CD of this.chunk) DD += CD.value.length;
        return DD
      }
      chunkEnd(DD) {
        return this.chunkPos[DD] + this.chunk[DD].length
      }
      update(DD) {
        let {
          add: CD = [],
          sort: cD = !1,
          filterFrom: ID = 0,
          filterTo: pD = this.length
        } = DD, iD = DD.filter;
        if (0 == CD.length && !iD) return this;
        if (cD && (CD = CD.slice().sort(GC)), this.xt) return CD.length ? kC.of(CD) : this;
        let fD = new WC(this, null, -1).goto(0),
          bD = 0,
          QD = [],
          wD = new dC;
        for (; fD.value || bD < CD.length;)
          if (bD < CD.length && (fD.from - CD[bD].from || fD.startSide - CD[bD].value.startSide) >= 0) {
            let DD = CD[bD++];
            wD.addInner(DD.from, DD.to, DD.value) || QD.push(DD)
          } else 1 == fD.rangeIndex && fD.chunkIndex < this.chunk.length && (bD == CD.length || this.chunkEnd(fD.chunkIndex) < CD[bD].from) && (!iD || ID > this.chunkEnd(fD.chunkIndex) || pD < this.chunkPos[fD.chunkIndex]) && wD.addChunk(this.chunkPos[fD.chunkIndex], this.chunk[fD.chunkIndex]) ? fD.nextChunk() : ((!iD || ID > fD.to || pD < fD.from || iD(fD.from, fD.to, fD.value)) && (wD.addInner(fD.from, fD.to, fD.value) || QD.push(TC.create(fD.from, fD.to, fD.value))), fD.next());
        return wD.finishInner(this.nextLayer.xt && !QD.length ? kC.empty : this.nextLayer.update({
          add: QD,
          filter: iD,
          filterFrom: ID,
          filterTo: pD
        }))
      }
      map(DD) {
        if (DD.empty || this.xt) return this;
        let CD = [],
          cD = [],
          ID = -1;
        for (let iD = 0; iD < this.chunk.length; iD++) {
          let pD = this.chunkPos[iD],
            fD = this.chunk[iD],
            bD = DD.touchesRange(pD, pD + fD.length);
          if (!1 === bD) ID = Math.max(ID, fD.JcD), CD.push(fD), cD.push(DD.mapPos(pD));
          else if (!0 === bD) {
            let {
              mapped: iD,
              pos: bD
            } = fD.map(pD, DD);
            iD && (ID = Math.max(ID, iD.JcD), CD.push(iD), cD.push(bD))
          }
        }
        let pD = this.nextLayer.map(DD);
        return 0 == CD.length ? pD : new kC(cD, CD, pD || kC.empty, ID)
      }
      between(DD, CD, cD) {
        if (!this.xt) {
          for (let ID = 0; ID < this.chunk.length; ID++) {
            let pD = this.chunkPos[ID],
              iD = this.chunk[ID];
            if (CD >= pD && DD <= pD + iD.length && !1 === iD.between(pD, DD - pD, CD - pD, cD)) return
          }
          this.nextLayer.between(DD, CD, cD)
        }
      }
      iter() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return sC.from([this]).goto(DD)
      }
      get xt() {
        return this.nextLayer == this
      }
      static iter(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return sC.from(DD).goto(CD)
      }
      static compare(DD, CD, cD, ID) {
        let pD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1,
          iD = DD.filter((DD => DD.JcD > 0 || !DD.xt && DD.JcD >= pD)),
          fD = CD.filter((DD => DD.JcD > 0 || !DD.xt && DD.JcD >= pD)),
          bD = YC(iD, fD, cD),
          QD = new eC(iD, bD, pD),
          wD = new eC(fD, bD, pD);
        cD.iterGaps(((DD, CD, cD) => uC(QD, DD, wD, CD, cD, ID))), cD.empty && 0 == cD.length && uC(QD, 0, wD, 0, 0, ID)
      }
      static eq(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          ID = arguments.length > 3 ? arguments[3] : void 0;
        null == ID && (ID = 999999999);
        let pD = DD.filter((DD => !DD.xt && CD.indexOf(DD) < 0)),
          iD = CD.filter((CD => !CD.xt && DD.indexOf(CD) < 0));
        if (pD.length != iD.length) return !1;
        if (!pD.length) return !0;
        let fD = YC(pD, iD),
          bD = new eC(pD, fD, 0).goto(cD),
          QD = new eC(iD, fD, 0).goto(cD);
        for (;;) {
          if (bD.to != QD.to || !hC(bD.active, QD.active) || bD.point && (!QD.point || !LC(bD.point, QD.point))) return !1;
          if (bD.to > ID) return !0;
          bD.next(), QD.next()
        }
      }
      static spans(DD, CD, cD, ID) {
        let pD = new eC(DD, null, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1).goto(CD),
          iD = CD,
          fD = pD.openStart;
        for (;;) {
          let DD = Math.min(pD.to, cD);
          if (pD.point) {
            let cD = pD.activeForPoint(pD.to),
              bD = pD.pointFrom < CD ? cD.length + 1 : pD.point.startSide < 0 ? cD.length : Math.min(cD.length, fD);
            ID.point(iD, DD, pD.point, cD, bD, pD.pointRank), fD = Math.min(pD.openEnd(DD), cD.length)
          } else DD > iD && (ID.span(iD, DD, pD.active, fD), fD = pD.openEnd(DD));
          if (pD.to > cD) return fD + (pD.point && pD.to > cD ? 1 : 0);
          iD = pD.to, pD.next()
        }
      }
      static of (DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cD = new dC;
        for (let ID of DD instanceof TC ? [DD] : CD ? function(DD) {
            if (DD.length > 1)
              for (let CD = DD[0], cD = 1; cD < DD.length; cD++) {
                let ID = DD[cD];
                if (GC(CD, ID) > 0) return DD.slice().sort(GC);
                CD = ID
              }
            return DD
          }(DD) : DD) cD.add(ID.from, ID.to, ID.value);
        return cD.finish()
      }
      static join(DD) {
        if (!DD.length) return kC.empty;
        let CD = DD[DD.length - 1];
        for (let cD = DD.length - 2; cD >= 0; cD--)
          for (let ID = DD[cD]; ID != kC.empty; ID = ID.nextLayer) CD = new kC(ID.chunkPos, ID.chunk, CD, Math.max(ID.JcD, CD.JcD));
        return CD
      }
    }
    kC.empty = new kC([], [], null, -1), kC.empty.nextLayer = kC.empty;
    class dC {
      finishChunk(DD) {
        this.chunks.push(new RC(this.from, this.to, this.value, this.JcD)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.JcD), this.JcD = -1, DD && (this.from = [], this.to = [], this.value = [])
      }
      constructor() {
        this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.JcD = -1, this.setMaxPoint = -1, this.nextLayer = null
      }
      add(DD, CD, cD) {
        this.addInner(DD, CD, cD) || (this.nextLayer || (this.nextLayer = new dC)).add(DD, CD, cD)
      }
      addInner(DD, CD, cD) {
        let ID = DD - this.lastTo || cD.startSide - this.last.endSide;
        if (ID <= 0 && (DD - this.lastFrom || cD.startSide - this.last.startSide) < 0) throw new Error("Ranges must be added sorted by `from` position and `startSide`");
        return !(ID < 0) && (250 == this.from.length && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = DD), this.from.push(DD - this.chunkStart), this.to.push(CD - this.chunkStart), this.last = cD, this.lastFrom = DD, this.lastTo = CD, this.value.push(cD), cD.point && (this.JcD = Math.max(this.JcD, CD - DD)), !0)
      }
      addChunk(DD, CD) {
        if ((DD - this.lastTo || CD.value[0].startSide - this.last.endSide) < 0) return !1;
        this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, CD.JcD), this.chunks.push(CD), this.chunkPos.push(DD);
        let cD = CD.value.length - 1;
        return this.last = CD.value[cD], this.lastFrom = CD.from[cD] + DD, this.lastTo = CD.to[cD] + DD, !0
      }
      finish() {
        return this.finishInner(kC.empty)
      }
      finishInner(DD) {
        if (this.from.length && this.finishChunk(!1), 0 == this.chunks.length) return DD;
        let CD = kC.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(DD) : DD, this.setMaxPoint);
        return this.from = null, CD
      }
    }

    function YC(DD, CD, cD) {
      let ID = new Map;
      for (let iD of DD)
        for (let DD = 0; DD < iD.chunk.length; DD++) iD.chunk[DD].JcD <= 0 && ID.set(iD.chunk[DD], iD.chunkPos[DD]);
      let pD = new Set;
      for (let iD of CD)
        for (let DD = 0; DD < iD.chunk.length; DD++) {
          let CD = ID.get(iD.chunk[DD]);
          null == CD || (cD ? cD.mapPos(CD) : CD) != iD.chunkPos[DD] || (null === cD || void 0 === cD ? void 0 : cD.touchesRange(CD, CD + iD.chunk[DD].length)) || pD.add(iD.chunk[DD])
        }
      return pD
    }
    class WC {
      constructor(DD, CD, cD) {
        let ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.layer = DD, this.skip = CD, this.KcD = cD, this.rank = ID
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      get endSide() {
        return this.value ? this.value.endSide : 0
      }
      goto(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(DD, CD, !1), this
      }
      gotoInner(DD, CD, cD) {
        for (; this.chunkIndex < this.layer.chunk.length;) {
          let CD = this.layer.chunk[this.chunkIndex];
          if (!(this.skip && this.skip.has(CD) || this.layer.chunkEnd(this.chunkIndex) < DD || CD.JcD < this.KcD)) break;
          this.chunkIndex++, cD = !1
        }
        if (this.chunkIndex < this.layer.chunk.length) {
          let ID = this.layer.chunk[this.chunkIndex].findIndex(DD - this.layer.chunkPos[this.chunkIndex], CD, !0);
          (!cD || this.rangeIndex < ID) && this.setRangeIndex(ID)
        }
        this.next()
      }
      forward(DD, CD) {
        (this.to - DD || this.endSide - CD) < 0 && this.gotoInner(DD, CD, !0)
      }
      next() {
        for (;;) {
          if (this.chunkIndex == this.layer.chunk.length) {
            this.from = this.to = 1e9, this.value = null;
            break
          } {
            let DD = this.layer.chunkPos[this.chunkIndex],
              CD = this.layer.chunk[this.chunkIndex],
              cD = DD + CD.from[this.rangeIndex];
            if (this.from = cD, this.to = DD + CD.to[this.rangeIndex], this.value = CD.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.KcD < 0 || this.value.point && this.to - this.from >= this.KcD) break
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
    class sC {
      constructor(DD) {
        this.heap = DD
      }
      static from(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          ID = [];
        for (let pD = 0; pD < DD.length; pD++)
          for (let iD = DD[pD]; !iD.xt; iD = iD.nextLayer) iD.JcD >= cD && ID.push(new WC(iD, CD, cD, pD));
        return 1 == ID.length ? ID[0] : new sC(ID)
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      goto(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        for (let cD of this.heap) cD.goto(DD, CD);
        for (let cD = this.heap.length >> 1; cD >= 0; cD--) EC(this.heap, cD);
        return this.next(), this
      }
      forward(DD, CD) {
        for (let cD of this.heap) cD.forward(DD, CD);
        for (let cD = this.heap.length >> 1; cD >= 0; cD--) EC(this.heap, cD);
        (this.to - DD || this.value.endSide - CD) < 0 && this.next()
      }
      next() {
        if (0 == this.heap.length) this.from = this.to = 1e9, this.value = null, this.rank = -1;
        else {
          let DD = this.heap[0];
          this.from = DD.from, this.to = DD.to, this.value = DD.value, this.rank = DD.rank, DD.value && DD.next(), EC(this.heap, 0)
        }
      }
    }

    function EC(DD, CD) {
      for (let cD = DD[CD];;) {
        let ID = 1 + (CD << 1);
        if (ID >= DD.length) break;
        let pD = DD[ID];
        if (ID + 1 < DD.length && pD.compare(DD[ID + 1]) >= 0 && (pD = DD[ID + 1], ID++), cD.compare(pD) < 0) break;
        DD[ID] = cD, DD[CD] = pD, CD = ID
      }
    }
    class eC {
      constructor(DD, CD, cD) {
        this.KcD = cD, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = sC.from(DD, CD, cD)
      }
      goto(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.cursor.goto(DD, CD), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = DD, this.endSide = CD, this.openStart = -1, this.next(), this
      }
      forward(DD, CD) {
        for (; this.minActive > -1 && (this.activeTo[this.minActive] - DD || this.active[this.minActive].endSide - CD) < 0;) this.removeActive(this.minActive);
        this.cursor.forward(DD, CD)
      }
      removeActive(DD) {
        rC(this.active, DD), rC(this.activeTo, DD), rC(this.activeRank, DD), this.minActive = FC(this.active, this.activeTo)
      }
      addActive(DD) {
        let CD = 0,
          {
            value: cD,
            to: ID,
            rank: pD
          } = this.cursor;
        for (; CD < this.activeRank.length && (pD - this.activeRank[CD] || ID - this.activeTo[CD]) > 0;) CD++;
        AC(this.active, CD, cD), AC(this.activeTo, CD, ID), AC(this.activeRank, CD, pD), DD && AC(DD, CD, this.cursor.from), this.minActive = FC(this.active, this.activeTo)
      }
      next() {
        let DD = this.to,
          CD = this.point;
        this.point = null;
        let cD = this.openStart < 0 ? [] : null;
        for (;;) {
          let ID = this.minActive;
          if (ID > -1 && (this.activeTo[ID] - this.cursor.from || this.active[ID].endSide - this.cursor.startSide) < 0) {
            if (this.activeTo[ID] > DD) {
              this.to = this.activeTo[ID], this.endSide = this.active[ID].endSide;
              break
            }
            this.removeActive(ID), cD && rC(cD, ID)
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
                if (!(CD && this.cursor.to == this.to && this.cursor.from < this.cursor.to)) {
                  this.point = DD, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = DD.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
                  break
                }
                this.cursor.next()
              } else this.addActive(cD), this.cursor.next()
            }
          }
        }
        if (cD) {
          this.openStart = 0;
          for (let CD = cD.length - 1; CD >= 0 && cD[CD] < DD; CD--) this.openStart++
        }
      }
      activeForPoint(DD) {
        if (!this.active.length) return this.active;
        let CD = [];
        for (let cD = this.active.length - 1; cD >= 0 && !(this.activeRank[cD] < this.pointRank); cD--)(this.activeTo[cD] > DD || this.activeTo[cD] == DD && this.active[cD].endSide >= this.point.endSide) && CD.push(this.active[cD]);
        return CD.reverse()
      }
      openEnd(DD) {
        let CD = 0;
        for (let cD = this.activeTo.length - 1; cD >= 0 && this.activeTo[cD] > DD; cD--) CD++;
        return CD
      }
    }

    function uC(DD, CD, cD, ID, pD, iD) {
      DD.goto(CD), cD.goto(ID);
      let fD = ID + pD,
        bD = ID,
        QD = ID - CD,
        wD = !!iD.boundChange;
      for (let SD = !1;;) {
        let CD = DD.to + QD - cD.to,
          ID = CD || DD.endSide - cD.endSide,
          pD = ID < 0 ? DD.to + QD : cD.to,
          BD = Math.min(pD, fD);
        if (DD.point || cD.point ? (DD.point && cD.point && LC(DD.point, cD.point) && hC(DD.activeForPoint(DD.to), cD.activeForPoint(cD.to)) || iD.comparePoint(bD, BD, DD.point, cD.point), SD = !1) : (SD && iD.boundChange(bD), BD > bD && !hC(DD.active, cD.active) && iD.compareRange(bD, BD, DD.active, cD.active), wD && BD < fD && (CD || DD.openEnd(pD) != cD.openEnd(pD)) && (SD = !0)), pD > fD) break;
        bD = pD, ID <= 0 && DD.next(), ID >= 0 && cD.next()
      }
    }

    function hC(DD, CD) {
      if (DD.length != CD.length) return !1;
      for (let cD = 0; cD < DD.length; cD++)
        if (DD[cD] != CD[cD] && !LC(DD[cD], CD[cD])) return !1;
      return !0
    }

    function rC(DD, CD) {
      for (let cD = CD, ID = DD.length - 1; cD < ID; cD++) DD[cD] = DD[cD + 1];
      DD.pop()
    }

    function AC(DD, CD, cD) {
      for (let ID = DD.length - 1; ID >= CD; ID--) DD[ID + 1] = DD[ID];
      DD[CD] = cD
    }

    function FC(DD, CD) {
      let cD = -1,
        ID = 1e9;
      for (let pD = 0; pD < CD.length; pD++)(CD[pD] - ID || DD[pD].endSide - DD[cD].endSide) < 0 && (cD = pD, ID = CD[pD]);
      return cD
    }

    function Dc(DD, CD) {
      let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : DD.length,
        ID = 0;
      for (let pD = 0; pD < cD && pD < DD.length;) 9 == DD.charCodeAt(pD) ? (ID += CD - ID % CD, pD++) : (ID++, pD = HD(DD, pD));
      return ID
    }

    function Cc(DD, CD, cD, ID) {
      for (let pD = 0, iD = 0;;) {
        if (iD >= CD) return pD;
        if (pD == DD.length) break;
        iD += 9 == DD.charCodeAt(pD) ? cD - iD % cD : 1, pD = HD(DD, pD)
      }
      return !0 === ID ? -1 : DD.length
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);