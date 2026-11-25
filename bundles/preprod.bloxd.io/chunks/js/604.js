export const id = 604;
export const ids = [604];
export const modules = {
  43972: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => lr,
      f: () => WM,
      ChangeSet: () => sM,
      h: () => Rr,
      l: () => AM,
      p: () => Dr,
      s: () => FM,
      v: () => pM,
      y: () => Sr,
      A: () => Ar,
      z: () => xr,
      D: () => Zr,
      G: () => Gr,
      H: () => VM,
      K: () => JM,
      M: () => Cr,
      Q: () => tM,
      S: () => uM,
      V: () => kr,
      Y: () => Mi,
      $: () => wM,
      cb: () => ri,
      eb: () => gM
    });
    let OM = [],
      SM = [];

    function jM(MM) {
      if (MM < 768) return !1;
      for (let rM = 0, iM = OM.length;;) {
        let jM = rM + iM >> 1;
        if (MM < OM[jM]) iM = jM;
        else {
          if (!(MM >= SM[jM])) return !0;
          rM = jM + 1
        }
        if (rM == iM) return !1
      }
    }

    function aM(MM) {
      return MM >= 127462 && MM <= 127487
    }(() => {
      let MM = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((MM => MM ? parseInt(MM, 36) : 1));
      for (let rM = 0, iM = 0; rM < MM.length; rM++)(rM % 2 ? SM : OM).push(iM += MM[rM])
    })();
    const PM = 8205;

    function nM(MM, rM) {
      return (!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2] ? QM : zM)(MM, rM, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function QM(MM, rM, iM) {
      if (rM == MM.length) return rM;
      rM && mM(MM.charCodeAt(rM)) && HM(MM.charCodeAt(rM - 1)) && rM--;
      let OM = LM(MM, rM);
      for (rM += hM(OM); rM < MM.length;) {
        let SM = LM(MM, rM);
        if (OM == PM || SM == PM || iM && jM(SM)) rM += hM(SM), OM = SM;
        else {
          if (!aM(SM)) break;
          {
            let iM = 0,
              OM = rM - 2;
            for (; OM >= 0 && aM(LM(MM, OM));) iM++, OM -= 2;
            if (iM % 2 == 0) break;
            rM += 2
          }
        }
      }
      return rM
    }

    function zM(MM, rM, iM) {
      for (; rM > 0;) {
        let OM = QM(MM, rM - 2, iM);
        if (OM < rM) return OM;
        rM--
      }
      return 0
    }

    function LM(MM, rM) {
      let iM = MM.charCodeAt(rM);
      if (!HM(iM) || rM + 1 == MM.length) return iM;
      let OM = MM.charCodeAt(rM + 1);
      return mM(OM) ? OM - 56320 + (iM - 55296 << 10) + 65536 : iM
    }

    function mM(MM) {
      return MM >= 56320 && MM < 57344
    }

    function HM(MM) {
      return MM >= 55296 && MM < 56320
    }

    function hM(MM) {
      return MM < 65536 ? 1 : 2
    }
    class JM {
      lineAt(MM) {
        if (MM < 0 || MM > this.length) throw new RangeError(`Invalid position ${MM} in document of length ${this.length}`);
        return this.lineInner(MM, !1, 1, 0)
      }
      line(MM) {
        if (MM < 1 || MM > this.lines) throw new RangeError(`Invalid line number ${MM} in ${this.lines}-line document`);
        return this.lineInner(MM, !0, 1, 0)
      }
      replace(MM, rM, iM) {
        [MM, rM] = bM(this, MM, rM);
        let OM = [];
        return this.decompose(0, MM, OM, 2), iM.length && iM.decompose(0, iM.length, OM, 3), this.decompose(rM, this.length, OM, 1), yM.from(OM, this.length - (rM - MM) + iM.length)
      }
      append(MM) {
        return this.replace(this.length, this.length, MM)
      }
      slice(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        [MM, rM] = bM(this, MM, rM);
        let iM = [];
        return this.decompose(MM, rM, iM, 0), yM.from(iM, rM - MM)
      }
      eq(MM) {
        if (MM == this) return !0;
        if (MM.length != this.length || MM.lines != this.lines) return !1;
        let rM = this.scanIdentical(MM, 1),
          iM = this.length - this.scanIdentical(MM, -1),
          OM = new UM(this),
          SM = new UM(MM);
        for (let jM = rM, aM = rM;;) {
          if (OM.next(jM), SM.next(jM), jM = 0, OM.lineBreak != SM.lineBreak || OM.done != SM.done || OM.value != SM.value) return !1;
          if (aM += OM.value.length, OM.done || aM >= iM) return !0
        }
      }
      iter() {
        return new UM(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1)
      }
      iterRange(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        return new GM(this, MM, rM)
      }
      iterLines(MM, rM) {
        let iM;
        if (null == MM) iM = this.iter();
        else {
          null == rM && (rM = this.lines + 1);
          let OM = this.line(MM).from;
          iM = this.iterRange(OM, Math.max(OM, rM == this.lines + 1 ? this.length : rM <= 1 ? 0 : this.line(rM - 1).to))
        }
        return new CM(iM)
      }
      toString() {
        return this.sliceString(0)
      }
      toJSON() {
        let MM = [];
        return this.flatten(MM), MM
      }
      constructor() {}
      static of (MM) {
        if (0 == MM.length) throw new RangeError("A document must have at least one line");
        return 1 != MM.length || MM[0] ? MM.length <= 32 ? new dM(MM) : yM.from(dM.split(MM, [])) : JM.empty
      }
    }
    class dM extends JM {
      constructor(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(MM) {
          let rM = -1;
          for (let iM of MM) rM += iM.length + 1;
          return rM
        }(MM);
        super(), this.text = MM, this.length = rM
      }
      get lines() {
        return this.text.length
      }
      get children() {
        return null
      }
      lineInner(MM, rM, iM, OM) {
        for (let SM = 0;; SM++) {
          let jM = this.text[SM],
            aM = OM + jM.length;
          if ((rM ? iM : aM) >= MM) return new eM(OM, aM, iM, jM);
          OM = aM + 1, iM++
        }
      }
      decompose(MM, rM, iM, OM) {
        let SM = MM <= 0 && rM >= this.length ? this : new dM(EM(this.text, MM, rM), Math.min(rM, this.length) - Math.max(0, MM));
        if (1 & OM) {
          let MM = iM.pop(),
            rM = lM(SM.text, MM.text.slice(), 0, SM.length);
          if (rM.length <= 32) iM.push(new dM(rM, MM.length + SM.length));
          else {
            let MM = rM.length >> 1;
            iM.push(new dM(rM.slice(0, MM)), new dM(rM.slice(MM)))
          }
        } else iM.push(SM)
      }
      replace(MM, rM, iM) {
        if (!(iM instanceof dM)) return super.replace(MM, rM, iM);
        [MM, rM] = bM(this, MM, rM);
        let OM = lM(this.text, lM(iM.text, EM(this.text, 0, MM)), rM),
          SM = this.length + iM.length - (rM - MM);
        return OM.length <= 32 ? new dM(OM, SM) : yM.from(dM.split(OM, []), SM)
      }
      sliceString(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [MM, rM] = bM(this, MM, rM);
        let OM = "";
        for (let SM = 0, jM = 0; SM <= rM && jM < this.text.length; jM++) {
          let aM = this.text[jM],
            PM = SM + aM.length;
          SM > MM && jM && (OM += iM), MM < PM && rM > SM && (OM += aM.slice(Math.max(0, MM - SM), rM - SM)), SM = PM + 1
        }
        return OM
      }
      flatten(MM) {
        for (let rM of this.text) MM.push(rM)
      }
      scanIdentical() {
        return 0
      }
      static split(MM, rM) {
        let iM = [],
          OM = -1;
        for (let SM of MM) iM.push(SM), OM += SM.length + 1, 32 == iM.length && (rM.push(new dM(iM, OM)), iM = [], OM = -1);
        return OM > -1 && rM.push(new dM(iM, OM)), rM
      }
    }
    class yM extends JM {
      constructor(MM, rM) {
        super(), this.children = MM, this.length = rM, this.lines = 0;
        for (let iM of MM) this.lines += iM.lines
      }
      lineInner(MM, rM, iM, OM) {
        for (let SM = 0;; SM++) {
          let jM = this.children[SM],
            aM = OM + jM.length,
            PM = iM + jM.lines - 1;
          if ((rM ? PM : aM) >= MM) return jM.lineInner(MM, rM, iM, OM);
          OM = aM + 1, iM = PM + 1
        }
      }
      decompose(MM, rM, iM, OM) {
        for (let SM = 0, jM = 0; jM <= rM && SM < this.children.length; SM++) {
          let aM = this.children[SM],
            PM = jM + aM.length;
          if (MM <= PM && rM >= jM) {
            let SM = OM & ((jM <= MM ? 1 : 0) | (PM >= rM ? 2 : 0));
            jM >= MM && PM <= rM && !SM ? iM.push(aM) : aM.decompose(MM - jM, rM - jM, iM, SM)
          }
          jM = PM + 1
        }
      }
      replace(MM, rM, iM) {
        if ([MM, rM] = bM(this, MM, rM), iM.lines < this.lines)
          for (let OM = 0, SM = 0; OM < this.children.length; OM++) {
            let jM = this.children[OM],
              aM = SM + jM.length;
            if (MM >= SM && rM <= aM) {
              let PM = jM.replace(MM - SM, rM - SM, iM),
                nM = this.lines - jM.lines + PM.lines;
              if (PM.lines < nM >> 4 && PM.lines > nM >> 6) {
                let SM = this.children.slice();
                return SM[OM] = PM, new yM(SM, this.length - (rM - MM) + iM.length)
              }
              return super.replace(SM, aM, PM)
            }
            SM = aM + 1
          }
        return super.replace(MM, rM, iM)
      }
      sliceString(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [MM, rM] = bM(this, MM, rM);
        let OM = "";
        for (let SM = 0, jM = 0; SM < this.children.length && jM <= rM; SM++) {
          let aM = this.children[SM],
            PM = jM + aM.length;
          jM > MM && SM && (OM += iM), MM < PM && rM > jM && (OM += aM.sliceString(MM - jM, rM - jM, iM)), jM = PM + 1
        }
        return OM
      }
      flatten(MM) {
        for (let rM of this.children) rM.flatten(MM)
      }
      scanIdentical(MM, rM) {
        if (!(MM instanceof yM)) return 0;
        let iM = 0,
          [OM, SM, jM, aM] = rM > 0 ? [0, 0, this.children.length, MM.children.length] : [this.children.length - 1, MM.children.length - 1, -1, -1];
        for (;; OM += rM, SM += rM) {
          if (OM == jM || SM == aM) return iM;
          let PM = this.children[OM],
            nM = MM.children[SM];
          if (PM != nM) return iM + PM.scanIdentical(nM, rM);
          iM += PM.length + 1
        }
      }
      static from(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : MM.reduce(((MM, rM) => MM + rM.length + 1), -1),
          iM = 0;
        for (let mM of MM) iM += mM.lines;
        if (iM < 32) {
          let iM = [];
          for (let rM of MM) rM.flatten(iM);
          return new dM(iM, rM)
        }
        let OM = Math.max(32, iM >> 5),
          SM = OM << 1,
          jM = OM >> 1,
          aM = [],
          PM = 0,
          nM = -1,
          QM = [];

        function zM(MM) {
          let rM;
          if (MM.lines > SM && MM instanceof yM)
            for (let iM of MM.children) zM(iM);
          else MM.lines > jM && (PM > jM || !PM) ? (LM(), aM.push(MM)) : MM instanceof dM && PM && (rM = QM[QM.length - 1]) instanceof dM && MM.lines + rM.lines <= 32 ? (PM += MM.lines, nM += MM.length + 1, QM[QM.length - 1] = new dM(rM.text.concat(MM.text), rM.length + 1 + MM.length)) : (PM + MM.lines > OM && LM(), PM += MM.lines, nM += MM.length + 1, QM.push(MM))
        }

        function LM() {
          0 != PM && (aM.push(1 == QM.length ? QM[0] : yM.from(QM, nM)), nM = -1, PM = QM.length = 0)
        }
        for (let mM of MM) zM(mM);
        return LM(), 1 == aM.length ? aM[0] : new yM(aM, rM)
      }
    }

    function lM(MM, rM) {
      let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e9;
      for (let SM = 0, jM = 0, aM = !0; jM < MM.length && SM <= OM; jM++) {
        let PM = MM[jM],
          nM = SM + PM.length;
        nM >= iM && (nM > OM && (PM = PM.slice(0, OM - SM)), SM < iM && (PM = PM.slice(iM - SM)), aM ? (rM[rM.length - 1] += PM, aM = !1) : rM.push(PM)), SM = nM + 1
      }
      return rM
    }

    function EM(MM, rM, iM) {
      return lM(MM, [""], rM, iM)
    }
    JM.empty = new dM([""], 0);
    class UM {
      constructor(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.dir = rM, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [MM], this.offsets = [rM > 0 ? 1 : (MM instanceof dM ? MM.text.length : MM.children.length) << 1]
      }
      nextInner(MM, rM) {
        for (this.done = this.lineBreak = !1;;) {
          let iM = this.nodes.length - 1,
            OM = this.nodes[iM],
            SM = this.offsets[iM],
            jM = SM >> 1,
            aM = OM instanceof dM ? OM.text.length : OM.children.length;
          if (jM == (rM > 0 ? aM : 0)) {
            if (0 == iM) return this.done = !0, this.value = "", this;
            rM > 0 && this.offsets[iM - 1]++, this.nodes.pop(), this.offsets.pop()
          } else if ((1 & SM) == (rM > 0 ? 0 : 1)) {
            if (this.offsets[iM] += rM, 0 == MM) return this.lineBreak = !0, this.value = "\n", this;
            MM--
          } else if (OM instanceof dM) {
            let SM = OM.text[jM + (rM < 0 ? -1 : 0)];
            if (this.offsets[iM] += rM, SM.length > Math.max(0, MM)) return this.value = 0 == MM ? SM : rM > 0 ? SM.slice(MM) : SM.slice(0, SM.length - MM), this;
            MM -= SM.length
          } else {
            let SM = OM.children[jM + (rM < 0 ? -1 : 0)];
            MM > SM.length ? (MM -= SM.length, this.offsets[iM] += rM) : (rM < 0 && this.offsets[iM]--, this.nodes.push(SM), this.offsets.push(rM > 0 ? 1 : (SM instanceof dM ? SM.text.length : SM.children.length) << 1))
          }
        }
      }
      next() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return MM < 0 && (this.nextInner(-MM, -this.dir), MM = this.value.length), this.nextInner(MM, this.dir)
      }
    }
    class GM {
      constructor(MM, rM, iM) {
        this.value = "", this.done = !1, this.cursor = new UM(MM, rM > iM ? -1 : 1), this.pos = rM > iM ? MM.length : 0, this.from = Math.min(rM, iM), this.to = Math.max(rM, iM)
      }
      nextInner(MM, rM) {
        if (rM < 0 ? this.pos <= this.from : this.pos >= this.to) return this.value = "", this.done = !0, this;
        MM += Math.max(0, rM < 0 ? this.pos - this.to : this.from - this.pos);
        let iM = rM < 0 ? this.pos - this.from : this.to - this.pos;
        MM > iM && (MM = iM), iM -= MM;
        let {
          value: OM
        } = this.cursor.next(MM);
        return this.pos += (OM.length + MM) * rM, this.value = OM.length <= iM ? OM : rM < 0 ? OM.slice(OM.length - iM) : OM.slice(0, iM), this.done = !this.value, this
      }
      next() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return MM < 0 ? MM = Math.max(MM, this.from - this.pos) : MM > 0 && (MM = Math.min(MM, this.to - this.pos)), this.nextInner(MM, this.cursor.dir)
      }
      get lineBreak() {
        return this.cursor.lineBreak && "" != this.value
      }
    }
    class CM {
      constructor(MM) {
        this.inner = MM, this.afterBreak = !0, this.value = "", this.done = !1
      }
      next() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          {
            done: rM,
            lineBreak: iM,
            value: OM
          } = this.inner.next(MM);
        return rM && this.afterBreak ? (this.value = "", this.afterBreak = !1) : rM ? (this.done = !0, this.value = "") : iM ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = OM, this.afterBreak = !1), this
      }
      get lineBreak() {
        return !1
      }
    }
    "undefined" != typeof Symbol && (JM.prototype[Symbol.iterator] = function() {
      return this.iter()
    }, UM.prototype[Symbol.iterator] = GM.prototype[Symbol.iterator] = CM.prototype[Symbol.iterator] = function() {
      return this
    });
    class eM {
      constructor(MM, rM, iM, OM) {
        this.from = MM, this.to = rM, this.number = iM, this.text = OM
      }
      get length() {
        return this.to - this.from
      }
    }

    function bM(MM, rM, iM) {
      return [rM = Math.max(0, Math.min(MM.length, rM)), Math.max(rM, Math.min(MM.length, iM))]
    }

    function wM(MM, rM) {
      return nM(MM, rM, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function tM(MM, rM) {
      let iM = MM.charCodeAt(rM);
      if (!((OM = iM) >= 55296 && OM < 56320) || rM + 1 == MM.length) return iM;
      var OM;
      let SM = MM.charCodeAt(rM + 1);
      return function(MM) {
        return MM >= 56320 && MM < 57344
      }(SM) ? SM - 56320 + (iM - 55296 << 10) + 65536 : iM
    }

    function gM(MM) {
      return MM <= 65535 ? String.fromCharCode(MM) : (MM -= 65536, String.fromCharCode(55296 + (MM >> 10), 56320 + (1023 & MM)))
    }

    function uM(MM) {
      return MM < 65536 ? 1 : 2
    }
    const RM = /\r\n?|\n/;
    var pM = function(MM) {
      return MM[MM.Simple = 0] = "Simple", MM[MM.TrackDel = 1] = "TrackDel", MM[MM.TrackBefore = 2] = "TrackBefore", MM[MM.TrackAfter = 3] = "TrackAfter", MM
    }(pM || (pM = {}));
    class WM {
      constructor(MM) {
        this.sections = MM
      }
      get length() {
        let MM = 0;
        for (let rM = 0; rM < this.sections.length; rM += 2) MM += this.sections[rM];
        return MM
      }
      get newLength() {
        let MM = 0;
        for (let rM = 0; rM < this.sections.length; rM += 2) {
          let iM = this.sections[rM + 1];
          MM += iM < 0 ? this.sections[rM] : iM
        }
        return MM
      }
      get empty() {
        return 0 == this.sections.length || 2 == this.sections.length && this.sections[1] < 0
      }
      iterGaps(MM) {
        for (let rM = 0, iM = 0, OM = 0; rM < this.sections.length;) {
          let SM = this.sections[rM++],
            jM = this.sections[rM++];
          jM < 0 ? (MM(iM, OM, SM), OM += SM) : OM += jM, iM += SM
        }
      }
      iterChangedRanges(MM) {
        ZM(this, MM, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get invertedDesc() {
        let MM = [];
        for (let rM = 0; rM < this.sections.length;) {
          let iM = this.sections[rM++],
            OM = this.sections[rM++];
          OM < 0 ? MM.push(iM, OM) : MM.push(OM, iM)
        }
        return new WM(MM)
      }
      composeDesc(MM) {
        return this.empty ? MM : MM.empty ? this : fM(this, MM)
      }
      mapDesc(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return MM.empty ? this : oM(this, MM, rM)
      }
      mapPos(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : pM.Simple,
          OM = 0,
          SM = 0;
        for (let jM = 0; jM < this.sections.length;) {
          let aM = this.sections[jM++],
            PM = this.sections[jM++],
            nM = OM + aM;
          if (PM < 0) {
            if (nM > MM) return SM + (MM - OM);
            SM += aM
          } else {
            if (iM != pM.Simple && nM >= MM && (iM == pM.TrackDel && OM < MM && nM > MM || iM == pM.TrackBefore && OM < MM || iM == pM.TrackAfter && nM > MM)) return null;
            if (nM > MM || nM == MM && rM < 0 && !aM) return MM == OM || rM < 0 ? SM : SM + PM;
            SM += PM
          }
          OM = nM
        }
        if (MM > OM) throw new RangeError(`Position ${MM} is out of range for changeset of length ${OM}`);
        return SM
      }
      touchesRange(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : MM;
        for (let iM = 0, OM = 0; iM < this.sections.length && OM <= rM;) {
          let SM = OM + this.sections[iM++];
          if (this.sections[iM++] >= 0 && OM <= rM && SM >= MM) return !(OM < MM && SM > rM) || "cover";
          OM = SM
        }
        return !1
      }
      toString() {
        let MM = "";
        for (let rM = 0; rM < this.sections.length;) {
          let iM = this.sections[rM++],
            OM = this.sections[rM++];
          MM += (MM ? " " : "") + iM + (OM >= 0 ? ":" + OM : "")
        }
        return MM
      }
      toJSON() {
        return this.sections
      }
      static fromJSON(MM) {
        if (!Array.isArray(MM) || MM.length % 2 || MM.some((MM => "number" != typeof MM))) throw new RangeError("Invalid JSON representation of ChangeDesc");
        return new WM(MM)
      }
      static create(MM) {
        return new WM(MM)
      }
    }
    class sM extends WM {
      constructor(MM, rM) {
        super(MM), this.inserted = rM
      }
      apply(MM) {
        if (this.length != MM.length) throw new RangeError("Applying change set to a document with the wrong length");
        return ZM(this, ((rM, iM, OM, SM, jM) => MM = MM.replace(OM, OM + (iM - rM), jM)), !1), MM
      }
      mapDesc(MM) {
        return oM(this, MM, arguments.length > 1 && void 0 !== arguments[1] && arguments[1], !0)
      }
      invert(MM) {
        let rM = this.sections.slice(),
          iM = [];
        for (let OM = 0, SM = 0; OM < rM.length; OM += 2) {
          let jM = rM[OM],
            aM = rM[OM + 1];
          if (aM >= 0) {
            rM[OM] = aM, rM[OM + 1] = jM;
            let PM = OM >> 1;
            for (; iM.length < PM;) iM.push(JM.empty);
            iM.push(jM ? MM.slice(SM, SM + jM) : JM.empty)
          }
          SM += jM
        }
        return new sM(rM, iM)
      }
      compose(MM) {
        return this.empty ? MM : MM.empty ? this : fM(this, MM, !0)
      }
      map(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return MM.empty ? this : oM(this, MM, rM, !0)
      }
      iterChanges(MM) {
        ZM(this, MM, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get desc() {
        return WM.create(this.sections)
      }
      filter(MM) {
        let rM = [],
          iM = [],
          OM = [],
          SM = new YM(this);
        MM: for (let jM = 0, aM = 0;;) {
          let PM = jM == MM.length ? 1e9 : MM[jM++];
          for (; aM < PM || aM == PM && 0 == SM.len;) {
            if (SM.done) break MM;
            let MM = Math.min(SM.len, PM - aM);
            DM(OM, MM, -1);
            let jM = -1 == SM.ins ? -1 : 0 == SM.off ? SM.ins : 0;
            DM(rM, MM, jM), jM > 0 && kM(iM, rM, SM.text), SM.forward(MM), aM += MM
          }
          let nM = MM[jM++];
          for (; aM < nM;) {
            if (SM.done) break MM;
            let MM = Math.min(SM.len, nM - aM);
            DM(rM, MM, -1), DM(OM, MM, -1 == SM.ins ? -1 : 0 == SM.off ? SM.ins : 0), SM.forward(MM), aM += MM
          }
        }
        return {
          changes: new sM(rM, iM),
          filtered: WM.create(OM)
        }
      }
      toJSON() {
        let MM = [];
        for (let rM = 0; rM < this.sections.length; rM += 2) {
          let iM = this.sections[rM],
            OM = this.sections[rM + 1];
          OM < 0 ? MM.push(iM) : 0 == OM ? MM.push([iM]) : MM.push([iM].concat(this.inserted[rM >> 1].toJSON()))
        }
        return MM
      }
      static of (MM, rM, iM) {
        let OM = [],
          SM = [],
          jM = 0,
          aM = null;

        function PM() {
          if (!(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && !OM.length) return;
          jM < rM && DM(OM, rM - jM, -1);
          let MM = new sM(OM, SM);
          aM = aM ? aM.compose(MM.map(aM)) : MM, OM = [], SM = [], jM = 0
        }
        return function MM(nM) {
          if (Array.isArray(nM))
            for (let rM of nM) MM(rM);
          else if (nM instanceof sM) {
            if (nM.length != rM) throw new RangeError(`Mismatched change set length (got ${nM.length}, expected ${rM})`);
            PM(), aM = aM ? aM.compose(nM.map(aM)) : nM
          } else {
            let {
              from: MM,
              to: aM = MM,
              insert: QM
            } = nM;
            if (MM > aM || MM < 0 || aM > rM) throw new RangeError(`Invalid change range ${MM} to ${aM} (in doc of length ${rM})`);
            let zM = QM ? "string" == typeof QM ? JM.of(QM.split(iM || RM)) : QM : JM.empty,
              LM = zM.length;
            if (MM == aM && 0 == LM) return;
            MM < jM && PM(), MM > jM && DM(OM, MM - jM, -1), DM(OM, aM - MM, LM), kM(SM, OM, zM), jM = aM
          }
        }(MM), PM(!aM), aM
      }
      static empty(MM) {
        return new sM(MM ? [MM, -1] : [], [])
      }
      static fromJSON(MM) {
        if (!Array.isArray(MM)) throw new RangeError("Invalid JSON representation of ChangeSet");
        let rM = [],
          iM = [];
        for (let OM = 0; OM < MM.length; OM++) {
          let SM = MM[OM];
          if ("number" == typeof SM) rM.push(SM, -1);
          else {
            if (!Array.isArray(SM) || "number" != typeof SM[0] || SM.some(((MM, rM) => rM && "string" != typeof MM))) throw new RangeError("Invalid JSON representation of ChangeSet");
            if (1 == SM.length) rM.push(SM[0], 0);
            else {
              for (; iM.length < OM;) iM.push(JM.empty);
              iM[OM] = JM.of(SM.slice(1)), rM.push(SM[0], iM[OM].length)
            }
          }
        }
        return new sM(rM, iM)
      }
      static createSet(MM, rM) {
        return new sM(MM, rM)
      }
    }

    function DM(MM, rM, iM) {
      let OM = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (0 == rM && iM <= 0) return;
      let SM = MM.length - 2;
      SM >= 0 && iM <= 0 && iM == MM[SM + 1] ? MM[SM] += rM : SM >= 0 && 0 == rM && 0 == MM[SM] ? MM[SM + 1] += iM : OM ? (MM[SM] += rM, MM[SM + 1] += iM) : MM.push(rM, iM)
    }

    function kM(MM, rM, iM) {
      if (0 == iM.length) return;
      let OM = rM.length - 2 >> 1;
      if (OM < MM.length) MM[MM.length - 1] = MM[MM.length - 1].append(iM);
      else {
        for (; MM.length < OM;) MM.push(JM.empty);
        MM.push(iM)
      }
    }

    function ZM(MM, rM, iM) {
      let OM = MM.inserted;
      for (let SM = 0, jM = 0, aM = 0; aM < MM.sections.length;) {
        let PM = MM.sections[aM++],
          nM = MM.sections[aM++];
        if (nM < 0) SM += PM, jM += PM;
        else {
          let QM = SM,
            zM = jM,
            LM = JM.empty;
          for (; QM += PM, zM += nM, nM && OM && (LM = LM.append(OM[aM - 2 >> 1])), !(iM || aM == MM.sections.length || MM.sections[aM + 1] < 0);) PM = MM.sections[aM++], nM = MM.sections[aM++];
          rM(SM, QM, jM, zM, LM), SM = QM, jM = zM
        }
      }
    }

    function oM(MM, rM, iM) {
      let OM = [],
        SM = arguments.length > 3 && void 0 !== arguments[3] && arguments[3] ? [] : null,
        jM = new YM(MM),
        aM = new YM(rM),
        PM = 0;
      for (let nM = -1;;) {
        if (++PM > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - likely malformed ChangeSet");
        if (jM.done && aM.len || aM.done && jM.len) throw new Error("Mismatched change set lengths");
        if (-1 == jM.ins && -1 == aM.ins) {
          let MM = Math.min(jM.len, aM.len);
          DM(OM, MM, -1), jM.forward(MM), aM.forward(MM)
        } else if (aM.ins >= 0 && (jM.ins < 0 || nM == jM.i || 0 == jM.off && (aM.len < jM.len || aM.len == jM.len && !iM))) {
          let MM = aM.len;
          for (DM(OM, aM.ins, -1); MM;) {
            if (++PM > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-b");
            let rM = Math.min(jM.len, MM);
            jM.ins >= 0 && nM < jM.i && jM.len <= rM && (DM(OM, 0, jM.ins), SM && kM(SM, OM, jM.text), nM = jM.i), jM.forward(rM), MM -= rM
          }
          aM.next()
        } else {
          if (!(jM.ins >= 0)) {
            if (jM.done && aM.done) return SM ? sM.createSet(OM, SM) : WM.create(OM);
            throw new Error("Mismatched change set lengths")
          } {
            let MM = 0,
              rM = jM.len;
            for (; rM;) {
              if (++PM > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-a");
              if (-1 == aM.ins) {
                let iM = Math.min(rM, aM.len);
                MM += iM, rM -= iM, aM.forward(iM)
              } else {
                if (!(0 == aM.ins && aM.len < rM)) break;
                rM -= aM.len, aM.next()
              }
            }
            DM(OM, MM, nM < jM.i ? jM.ins : 0), SM && nM < jM.i && kM(SM, OM, jM.text), nM = jM.i, jM.forward(jM.len - rM)
          }
        }
      }
    }

    function fM(MM, rM) {
      let iM = [],
        OM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? [] : null,
        SM = new YM(MM),
        jM = new YM(rM),
        aM = 0;
      for (let PM = !1;;) {
        if (++aM > 2e6) throw new Error("BLOXD CODEMIRROR: composeSets exceeded max iterations - likely malformed ChangeSet");
        if (SM.done && jM.done) return OM ? sM.createSet(iM, OM) : WM.create(iM);
        if (0 == SM.ins) DM(iM, SM.len, 0, PM), SM.next();
        else if (0 != jM.len || jM.done) {
          if (SM.done || jM.done) throw new Error("Mismatched change set lengths");
          {
            let MM = Math.min(SM.len2, jM.len),
              rM = iM.length;
            if (-1 == SM.ins) {
              let rM = -1 == jM.ins ? -1 : jM.off ? 0 : jM.ins;
              DM(iM, MM, rM, PM), OM && rM && kM(OM, iM, jM.text)
            } else - 1 == jM.ins ? (DM(iM, SM.off ? 0 : SM.len, MM, PM), OM && kM(OM, iM, SM.textBit(MM))) : (DM(iM, SM.off ? 0 : SM.len, jM.off ? 0 : jM.ins, PM), OM && !jM.off && kM(OM, iM, jM.text));
            PM = (SM.ins > MM || jM.ins >= 0 && jM.len > MM) && (PM || iM.length > rM), SM.forward2(MM), jM.forward(MM)
          }
        } else DM(iM, 0, jM.ins, PM), OM && kM(OM, iM, jM.text), jM.next()
      }
    }
    class YM {
      constructor(MM) {
        this.set = MM, this.i = 0, this.next()
      }
      next() {
        let {
          sections: MM
        } = this.set;
        this.i < MM.length ? (this.len = MM[this.i++], this.ins = MM[this.i++]) : (this.len = 0, this.ins = -2), this.off = 0
      }
      get done() {
        return -2 == this.ins
      }
      get len2() {
        return this.ins < 0 ? this.len : this.ins
      }
      get text() {
        let {
          inserted: MM
        } = this.set, rM = this.i - 2 >> 1;
        return rM >= MM.length ? JM.empty : MM[rM]
      }
      textBit(MM) {
        let {
          inserted: rM
        } = this.set, iM = this.i - 2 >> 1;
        return iM >= rM.length && !MM ? JM.empty : rM[iM].slice(this.off, null == MM ? void 0 : this.off + MM)
      }
      forward(MM) {
        MM == this.len ? this.next() : (this.len -= MM, this.off += MM)
      }
      forward2(MM) {
        -1 == this.ins ? this.forward(MM) : MM == this.ins ? this.next() : (this.ins -= MM, this.off += MM)
      }
    }
    class NM {
      constructor(MM, rM, iM) {
        this.from = MM, this.to = rM, this.flags = iM
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
        let MM = 7 & this.flags;
        return 7 == MM ? null : MM
      }
      get goalColumn() {
        let MM = this.flags >> 6;
        return 16777215 == MM ? void 0 : MM
      }
      map(MM) {
        let rM, iM, OM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return this.empty ? rM = iM = MM.mapPos(this.from, OM) : (rM = MM.mapPos(this.from, 1), iM = MM.mapPos(this.to, -1)), rM == this.from && iM == this.to ? this : new NM(rM, iM, this.flags)
      }
      extend(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : MM,
          iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (MM <= this.anchor && rM >= this.anchor) return AM.range(MM, rM, void 0, void 0, iM);
        let OM = Math.abs(MM - this.anchor) > Math.abs(rM - this.anchor) ? MM : rM;
        return AM.range(this.anchor, OM, void 0, void 0, iM)
      }
      eq(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.anchor == MM.anchor && this.head == MM.head && this.goalColumn == MM.goalColumn && (!rM || !this.empty || this.assoc == MM.assoc)
      }
      toJSON() {
        return {
          anchor: this.anchor,
          head: this.head
        }
      }
      static fromJSON(MM) {
        if (!MM || "number" != typeof MM.anchor || "number" != typeof MM.head) throw new RangeError("Invalid JSON representation for SelectionRange");
        return AM.range(MM.anchor, MM.head)
      }
      static create(MM, rM, iM) {
        return new NM(MM, rM, iM)
      }
    }
    class AM {
      constructor(MM, rM) {
        this.Ld = MM, this.mainIndex = rM
      }
      map(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return MM.empty ? this : AM.create(this.Ld.map((iM => iM.map(MM, rM))), this.mainIndex)
      }
      eq(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.Ld.length != MM.Ld.length || this.mainIndex != MM.mainIndex) return !1;
        for (let iM = 0; iM < this.Ld.length; iM++)
          if (!this.Ld[iM].eq(MM.Ld[iM], rM)) return !1;
        return !0
      }
      get main() {
        return this.Ld[this.mainIndex]
      }
      asSingle() {
        return 1 == this.Ld.length ? this : new AM([this.main], 0)
      }
      addRange(MM) {
        let rM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return AM.create([MM].concat(this.Ld), rM ? 0 : this.mainIndex + 1)
      }
      replaceRange(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.mainIndex,
          iM = this.Ld.slice();
        return iM[rM] = MM, AM.create(iM, this.mainIndex)
      }
      toJSON() {
        return {
          Ld: this.Ld.map((MM => MM.toJSON())),
          main: this.mainIndex
        }
      }
      static fromJSON(MM) {
        if (!MM || !Array.isArray(MM.Ld) || "number" != typeof MM.main || MM.main >= MM.Ld.length) throw new RangeError("Invalid JSON representation for EditorSelection");
        return new AM(MM.Ld.map((MM => NM.fromJSON(MM))), MM.main)
      }
      static single(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : MM;
        return new AM([AM.range(MM, rM)], 0)
      }
      static create(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (0 == MM.length) throw new RangeError("A selection needs at least one range");
        for (let iM = 0, OM = 0; OM < MM.length; OM++) {
          let SM = MM[OM];
          if (SM.empty ? SM.from <= iM : SM.from < iM) return AM.normalized(MM.slice(), rM);
          iM = SM.to
        }
        return new AM(MM, rM)
      }
      static cursor(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          iM = arguments.length > 2 ? arguments[2] : void 0,
          OM = arguments.length > 3 ? arguments[3] : void 0;
        return NM.create(MM, MM, (0 == rM ? 0 : rM < 0 ? 8 : 16) | (null == iM ? 7 : Math.min(6, iM)) | (null !== OM && void 0 !== OM ? OM : 16777215) << 6)
      }
      static range(MM, rM, iM, OM, SM) {
        let jM = (null !== iM && void 0 !== iM ? iM : 16777215) << 6 | (null == OM ? 7 : Math.min(6, OM));
        return SM || MM == rM || (SM = rM < MM ? 1 : -1), rM < MM ? NM.create(rM, MM, 48 | jM) : NM.create(MM, rM, (SM ? SM < 0 ? 8 : 16 : 0) | jM)
      }
      static normalized(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          iM = MM[rM];
        MM.sort(((MM, rM) => MM.from - rM.from)), rM = MM.indexOf(iM);
        for (let OM = 1; OM < MM.length; OM++) {
          let iM = MM[OM],
            SM = MM[OM - 1];
          if (iM.empty ? iM.from <= SM.to : iM.from < SM.to) {
            let jM = SM.from,
              aM = Math.max(iM.to, SM.to);
            OM <= rM && rM--, MM.splice(--OM, 2, iM.anchor > iM.head ? AM.range(aM, jM) : AM.range(jM, aM))
          }
        }
        return new AM(MM, rM)
      }
    }

    function xM(MM, rM) {
      for (let iM of MM.Ld)
        if (iM.to > rM) throw new RangeError("Selection points outside of document")
    }
    let vM = 0;
    class FM {
      constructor(MM, rM, iM, OM, SM) {
        this.combine = MM, this.compareInput = rM, this.compare = iM, this.isStatic = OM, this.id = vM++, this.default = MM([]), this.extensions = "function" == typeof SM ? SM(this) : SM
      }
      get reader() {
        return this
      }
      static define() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return new FM(MM.combine || (MM => MM), MM.compareInput || ((MM, rM) => MM === rM), MM.compare || (MM.combine ? (MM, rM) => MM === rM : BM), !!MM.static, MM.enables)
      }
      of(MM) {
        return new XM([], this, 0, MM)
      }
      compute(MM, rM) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new XM(MM, this, 1, rM)
      }
      computeN(MM, rM) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new XM(MM, this, 2, rM)
      }
      from(MM, rM) {
        return rM || (rM = MM => MM), this.compute([MM], (iM => rM(iM.field(MM))))
      }
    }

    function BM(MM, rM) {
      return MM == rM || MM.length == rM.length && MM.every(((MM, iM) => MM === rM[iM]))
    }
    class XM {
      constructor(MM, rM, iM, OM) {
        this.dependencies = MM, this.facet = rM, this.type = iM, this.value = OM, this.id = vM++
      }
      dynamicSlot(MM) {
        var rM;
        let iM = this.value,
          OM = this.facet.compareInput,
          SM = this.id,
          jM = MM[SM] >> 1,
          aM = 2 == this.type,
          PM = !1,
          nM = !1,
          QM = [];
        for (let zM of this.dependencies) "doc" == zM ? PM = !0 : "selection" == zM ? nM = !0 : 0 == (1 & (null !== (rM = MM[zM.id]) && void 0 !== rM ? rM : 1)) && QM.push(MM[zM.id]);
        return {
          create: MM => (MM.values[jM] = iM(MM), 1),
          update(MM, rM) {
            if (PM && rM.docChanged || nM && (rM.docChanged || rM.selection) || KM(MM, QM)) {
              let rM = iM(MM);
              if (aM ? !IM(rM, MM.values[jM], OM) : !OM(rM, MM.values[jM])) return MM.values[jM] = rM, 1
            }
            return 0
          },
          reconfigure: (MM, rM) => {
            let PM, nM = rM.config.address[SM];
            if (null != nM) {
              let SM = zr(rM, nM);
              if (this.dependencies.every((iM => iM instanceof FM ? rM.facet(iM) === MM.facet(iM) : !(iM instanceof VM) || rM.field(iM, !1) == MM.field(iM, !1))) || (aM ? IM(PM = iM(MM), SM, OM) : OM(PM = iM(MM), SM))) return MM.values[jM] = SM, 0
            } else PM = iM(MM);
            return MM.values[jM] = PM, 1
          }
        }
      }
    }

    function IM(MM, rM, iM) {
      if (MM.length != rM.length) return !1;
      for (let OM = 0; OM < MM.length; OM++)
        if (!iM(MM[OM], rM[OM])) return !1;
      return !0
    }

    function KM(MM, rM) {
      let iM = !1;
      for (let OM of rM) 1 & Qr(MM, OM) && (iM = !0);
      return iM
    }

    function qM(MM, rM, iM) {
      let OM = iM.map((rM => MM[rM.id])),
        SM = iM.map((MM => MM.type)),
        jM = OM.filter((MM => !(1 & MM))),
        aM = MM[rM.id] >> 1;

      function PM(MM) {
        let iM = [];
        for (let rM = 0; rM < OM.length; rM++) {
          let jM = zr(MM, OM[rM]);
          if (2 == SM[rM])
            for (let MM of jM) iM.push(MM);
          else iM.push(jM)
        }
        return rM.combine(iM)
      }
      return {
        create(MM) {
          for (let rM of OM) Qr(MM, rM);
          return MM.values[aM] = PM(MM), 1
        },
        update(MM, iM) {
          if (!KM(MM, jM)) return 0;
          let OM = PM(MM);
          return rM.compare(OM, MM.values[aM]) ? 0 : (MM.values[aM] = OM, 1)
        },
        reconfigure(MM, SM) {
          let jM = KM(MM, OM),
            nM = SM.config.facets[rM.id],
            QM = SM.facet(rM);
          if (nM && !jM && BM(iM, nM)) return MM.values[aM] = QM, 0;
          let zM = PM(MM);
          return rM.compare(zM, QM) ? (MM.values[aM] = QM, 0) : (MM.values[aM] = zM, 1)
        }
      }
    }
    const TM = FM.define({
      static: !0
    });
    class VM {
      constructor(MM, rM, iM, OM, SM) {
        this.id = MM, this.createF = rM, this.updateF = iM, this.compareF = OM, this.spec = SM, this.provides = void 0
      }
      static define(MM) {
        let rM = new VM(vM++, MM.create, MM.update, MM.compare || ((MM, rM) => MM === rM), MM);
        return MM.provide && (rM.provides = MM.provide(rM)), rM
      }
      create(MM) {
        let rM = MM.facet(TM).find((MM => MM.field == this));
        return ((null === rM || void 0 === rM ? void 0 : rM.create) || this.createF)(MM)
      }
      slot(MM) {
        let rM = MM[this.id] >> 1;
        return {
          create: MM => (MM.values[rM] = this.create(MM), 1),
          update: (MM, iM) => {
            let OM = MM.values[rM],
              SM = this.updateF(OM, iM);
            return this.compareF(OM, SM) ? 0 : (MM.values[rM] = SM, 1)
          },
          reconfigure: (MM, iM) => {
            let OM, SM = MM.facet(TM),
              jM = iM.facet(TM);
            return (OM = SM.find((MM => MM.field == this))) && OM != jM.find((MM => MM.field == this)) ? (MM.values[rM] = OM.create(MM), 1) : null != iM.config.address[this.id] ? (MM.values[rM] = iM.field(this), 0) : (MM.values[rM] = this.create(MM), 1)
          }
        }
      }
      init(MM) {
        return [this, TM.of({
          field: this,
          create: MM
        })]
      }
      get extension() {
        return this
      }
    }
    const cM = 4,
      Mr = 3,
      rr = 2,
      ir = 1;

    function Or(MM) {
      return rM => new jr(rM, MM)
    }
    const Sr = {
      highest: Or(0),
      high: Or(ir),
      default: Or(rr),
      low: Or(Mr),
      lowest: Or(cM)
    };
    class jr {
      constructor(MM, rM) {
        this.inner = MM, this.prec = rM
      }
    }
    class ar {
      of(MM) {
        return new Pr(this, MM)
      }
      reconfigure(MM) {
        return ar.reconfigure.of({
          compartment: this,
          extension: MM
        })
      }
      get(MM) {
        return MM.config.compartments.get(this)
      }
    }
    class Pr {
      constructor(MM, rM) {
        this.compartment = MM, this.inner = rM
      }
    }
    class nr {
      constructor(MM, rM, iM, OM, SM, jM) {
        for (this.base = MM, this.compartments = rM, this.dynamicSlots = iM, this.address = OM, this.staticValues = SM, this.facets = jM, this.statusTemplate = []; this.statusTemplate.length < iM.length;) this.statusTemplate.push(0)
      }
      staticFacet(MM) {
        let rM = this.address[MM.id];
        return null == rM ? MM.default : this.staticValues[rM >> 1]
      }
      static resolve(MM, rM, iM) {
        let OM = [],
          SM = Object.create(null),
          jM = new Map;
        for (let LM of function(MM, rM, iM) {
            let OM = [
                [],
                [],
                [],
                [],
                []
              ],
              SM = new Map;

            function jM(MM, aM) {
              let PM = SM.get(MM);
              if (null != PM) {
                if (PM <= aM) return;
                let rM = OM[PM].indexOf(MM);
                rM > -1 && OM[PM].splice(rM, 1), MM instanceof Pr && iM.delete(MM.compartment)
              }
              if (SM.set(MM, aM), Array.isArray(MM))
                for (let rM of MM) jM(rM, aM);
              else if (MM instanceof Pr) {
                if (iM.has(MM.compartment)) throw new RangeError("Duplicate use of compartment in extensions");
                let OM = rM.get(MM.compartment) || MM.inner;
                iM.set(MM.compartment, OM), jM(OM, aM)
              } else if (MM instanceof jr) jM(MM.inner, MM.prec);
              else if (MM instanceof VM) OM[aM].push(MM), MM.provides && jM(MM.provides, aM);
              else if (MM instanceof XM) OM[aM].push(MM), MM.facet.extensions && jM(MM.facet.extensions, rr);
              else {
                let rM = MM.extension;
                if (!rM) throw new Error(`Unrecognized extension value in extension set (${MM}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
                jM(rM, aM)
              }
            }
            return jM(MM, rr), OM.reduce(((MM, rM) => MM.concat(rM)))
          }(MM, rM, jM)) LM instanceof VM ? OM.push(LM) : (SM[LM.facet.id] || (SM[LM.facet.id] = [])).push(LM);
        let aM = Object.create(null),
          PM = [],
          nM = [];
        for (let LM of OM) aM[LM.id] = nM.length << 1, nM.push((MM => LM.slot(MM)));
        let QM = null === iM || void 0 === iM ? void 0 : iM.config.facets;
        for (let LM in SM) {
          let MM = SM[LM],
            rM = MM[0].facet,
            OM = QM && QM[LM] || [];
          if (MM.every((MM => 0 == MM.type)))
            if (aM[rM.id] = PM.length << 1 | 1, BM(OM, MM)) PM.push(iM.facet(rM));
            else {
              let OM = rM.combine(MM.map((MM => MM.value)));
              PM.push(iM && rM.compare(OM, iM.facet(rM)) ? iM.facet(rM) : OM)
            }
          else {
            for (let rM of MM) 0 == rM.type ? (aM[rM.id] = PM.length << 1 | 1, PM.push(rM.value)) : (aM[rM.id] = nM.length << 1, nM.push((MM => rM.dynamicSlot(MM))));
            aM[rM.id] = nM.length << 1, nM.push((iM => qM(iM, rM, MM)))
          }
        }
        let zM = nM.map((MM => MM(aM)));
        return new nr(MM, jM, zM, aM, PM, SM)
      }
    }

    function Qr(MM, rM) {
      if (1 & rM) return 2;
      let iM = rM >> 1,
        OM = MM.status[iM];
      if (4 == OM) throw new Error("Cyclic dependency between fields and/or facets");
      if (2 & OM) return OM;
      MM.status[iM] = 4;
      let SM = MM.computeSlot(MM, MM.config.dynamicSlots[iM]);
      return MM.status[iM] = 2 | SM
    }

    function zr(MM, rM) {
      return 1 & rM ? MM.config.staticValues[rM >> 1] : MM.values[rM >> 1]
    }
    const Lr = FM.define(),
      mr = FM.define({
        combine: MM => MM.some((MM => MM)),
        static: !0
      }),
      Hr = FM.define({
        combine: MM => MM.length ? MM[0] : void 0,
        static: !0
      }),
      hr = FM.define(),
      Jr = FM.define(),
      dr = FM.define(),
      yr = FM.define({
        combine: MM => !!MM.length && MM[0]
      });
    class lr {
      constructor(MM, rM) {
        this.type = MM, this.value = rM
      }
      static define() {
        return new Er
      }
    }
    class Er {
      of(MM) {
        return new lr(this, MM)
      }
    }
    class Ur {
      constructor(MM) {
        this.map = MM
      }
      of(MM) {
        return new Gr(this, MM)
      }
    }
    class Gr {
      constructor(MM, rM) {
        this.type = MM, this.value = rM
      }
      map(MM) {
        let rM = this.type.map(this.value, MM);
        return void 0 === rM ? void 0 : rM == this.value ? this : new Gr(this.type, rM)
      }
      is(MM) {
        return this.type == MM
      }
      static define() {
        return new Ur((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).map || (MM => MM))
      }
      static mapEffects(MM, rM) {
        if (!MM.length) return MM;
        let iM = [];
        for (let OM of MM) {
          let MM = OM.map(rM);
          MM && iM.push(MM)
        }
        return iM
      }
    }
    Gr.reconfigure = Gr.define(), Gr.appendConfig = Gr.define();
    class Cr {
      constructor(MM, rM, iM, OM, SM, jM) {
        this.startState = MM, this.changes = rM, this.selection = iM, this.effects = OM, this.annotations = SM, this.scrollIntoView = jM, this._doc = null, this._state = null, iM && xM(iM, rM.newLength), SM.some((MM => MM.type == Cr.time)) || (this.annotations = SM.concat(Cr.time.of(Date.now())))
      }
      static create(MM, rM, iM, OM, SM, jM) {
        return new Cr(MM, rM, iM, OM, SM, jM)
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
      annotation(MM) {
        for (let rM of this.annotations)
          if (rM.type == MM) return rM.value
      }
      get docChanged() {
        return !this.changes.empty
      }
      get reconfigured() {
        return this.startState.config != this.state.config
      }
      isUserEvent(MM) {
        let rM = this.annotation(Cr.userEvent);
        return !(!rM || !(rM == MM || rM.length > MM.length && rM.slice(0, MM.length) == MM && "." == rM[MM.length]))
      }
    }

    function er(MM, rM) {
      let iM = [];
      for (let OM = 0, SM = 0;;) {
        let jM, aM;
        if (OM < MM.length && (SM == rM.length || rM[SM] >= MM[OM])) jM = MM[OM++], aM = MM[OM++];
        else {
          if (!(SM < rM.length)) return iM;
          jM = rM[SM++], aM = rM[SM++]
        }!iM.length || iM[iM.length - 1] < jM ? iM.push(jM, aM) : iM[iM.length - 1] < aM && (iM[iM.length - 1] = aM)
      }
    }

    function br(MM, rM, iM) {
      var OM;
      let SM, jM, aM;
      return iM ? (SM = rM.changes, jM = sM.empty(rM.changes.length), aM = MM.changes.compose(rM.changes)) : (SM = rM.changes.map(MM.changes), jM = MM.changes.mapDesc(rM.changes, !0), aM = MM.changes.compose(SM)), {
        changes: aM,
        selection: rM.selection ? rM.selection.map(jM) : null === (OM = MM.selection) || void 0 === OM ? void 0 : OM.map(SM),
        effects: Gr.mapEffects(MM.effects, SM).concat(Gr.mapEffects(rM.effects, jM)),
        annotations: MM.annotations.length ? MM.annotations.concat(rM.annotations) : rM.annotations,
        scrollIntoView: MM.scrollIntoView || rM.scrollIntoView
      }
    }

    function wr(MM, rM, iM) {
      let OM = rM.selection,
        SM = ur(rM.annotations);
      return rM.userEvent && (SM = SM.concat(Cr.userEvent.of(rM.userEvent))), {
        changes: rM.changes instanceof sM ? rM.changes : sM.of(rM.changes || [], iM, MM.facet(Hr)),
        selection: OM && (OM instanceof AM ? OM : AM.single(OM.anchor, OM.head)),
        effects: ur(rM.effects),
        annotations: SM,
        scrollIntoView: !!rM.scrollIntoView
      }
    }

    function tr(MM, rM, iM) {
      let OM = wr(MM, rM.length ? rM[0] : {}, MM.doc.length);
      rM.length && !1 === rM[0].filter && (iM = !1);
      for (let jM = 1; jM < rM.length; jM++) {
        !1 === rM[jM].filter && (iM = !1);
        let SM = !!rM[jM].sequential;
        OM = br(OM, wr(MM, rM[jM], SM ? OM.changes.newLength : MM.doc.length), SM)
      }
      let SM = Cr.create(MM, OM.changes, OM.selection, OM.effects, OM.annotations, OM.scrollIntoView);
      return function(MM) {
        let rM = MM.startState,
          iM = rM.facet(dr),
          OM = MM;
        for (let SM = iM.length - 1; SM >= 0; SM--) {
          let jM = iM[SM](MM);
          jM && Object.keys(jM).length && (OM = br(OM, wr(rM, jM, MM.changes.newLength), !0))
        }
        return OM == MM ? MM : Cr.create(rM, MM.changes, MM.selection, OM.effects, OM.annotations, OM.scrollIntoView)
      }(iM ? function(MM) {
        let rM = MM.startState,
          iM = !0;
        for (let SM of rM.facet(hr)) {
          let rM = SM(MM);
          if (!1 === rM) {
            iM = !1;
            break
          }
          Array.isArray(rM) && (iM = !0 === iM ? rM : er(iM, rM))
        }
        if (!0 !== iM) {
          let OM, SM;
          if (!1 === iM) SM = MM.changes.invertedDesc, OM = sM.empty(rM.doc.length);
          else {
            let rM = MM.changes.filter(iM);
            OM = rM.changes, SM = rM.filtered.mapDesc(rM.changes).invertedDesc
          }
          MM = Cr.create(rM, OM, MM.selection && MM.selection.map(SM), Gr.mapEffects(MM.effects, SM), MM.annotations, MM.scrollIntoView)
        }
        let OM = rM.facet(Jr);
        for (let SM = OM.length - 1; SM >= 0; SM--) {
          let iM = OM[SM](MM);
          MM = iM instanceof Cr ? iM : Array.isArray(iM) && 1 == iM.length && iM[0] instanceof Cr ? iM[0] : tr(rM, ur(iM), !1)
        }
        return MM
      }(SM) : SM)
    }
    Cr.time = lr.define(), Cr.userEvent = lr.define(), Cr.addToHistory = lr.define(), Cr.remote = lr.define();
    const gr = [];

    function ur(MM) {
      return null == MM ? gr : Array.isArray(MM) ? MM : [MM]
    }
    var Rr = function(MM) {
      return MM[MM.Word = 0] = "Word", MM[MM.Space = 1] = "Space", MM[MM.Other = 2] = "Other", MM
    }(Rr || (Rr = {}));
    const pr = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
    let Wr;
    try {
      Wr = new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u")
    } catch (ii) {}

    function sr(MM) {
      return rM => {
        if (!/\S/.test(rM)) return Rr.Space;
        if (function(MM) {
            if (Wr) return Wr.test(MM);
            for (let rM = 0; rM < MM.length; rM++) {
              let iM = MM[rM];
              if (/\w/.test(iM) || iM > "\x80" && (iM.toUpperCase() != iM.toLowerCase() || pr.test(iM))) return !0
            }
            return !1
          }(rM)) return Rr.Word;
        for (let iM = 0; iM < MM.length; iM++)
          if (rM.indexOf(MM[iM]) > -1) return Rr.Word;
        return Rr.Other
      }
    }
    class Dr {
      constructor(MM, rM, iM, OM, SM, jM) {
        this.config = MM, this.doc = rM, this.selection = iM, this.values = OM, this.status = MM.statusTemplate.slice(), this.computeSlot = SM, jM && (jM._state = this);
        for (let aM = 0; aM < this.config.dynamicSlots.length; aM++) Qr(this, aM << 1);
        this.computeSlot = null
      }
      field(MM) {
        let rM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          iM = this.config.address[MM.id];
        if (null != iM) return Qr(this, iM), zr(this, iM);
        if (rM) throw new RangeError("Field is not present in this state")
      }
      update() {
        for (var MM = arguments.length, rM = new Array(MM), iM = 0; iM < MM; iM++) rM[iM] = arguments[iM];
        return tr(this, rM, !0)
      }
      applyTransaction(MM) {
        let rM, iM = this.config,
          {
            base: OM,
            compartments: SM
          } = iM;
        for (let aM of MM.effects) aM.is(ar.reconfigure) ? (iM && (SM = new Map, iM.compartments.forEach(((MM, rM) => SM.set(rM, MM))), iM = null), SM.set(aM.value.compartment, aM.value.extension)) : aM.is(Gr.reconfigure) ? (iM = null, OM = aM.value) : aM.is(Gr.appendConfig) && (iM = null, OM = ur(OM).concat(aM.value));
        if (iM) rM = MM.startState.values.slice();
        else {
          iM = nr.resolve(OM, SM, this), rM = new Dr(iM, this.doc, this.selection, iM.dynamicSlots.map((() => null)), ((MM, rM) => rM.reconfigure(MM, this)), null).values
        }
        let jM = MM.startState.facet(mr) ? MM.newSelection : MM.newSelection.asSingle();
        new Dr(iM, MM.newDoc, jM, rM, ((rM, iM) => iM.update(rM, MM)), MM)
      }
      replaceSelection(MM) {
        return "string" == typeof MM && (MM = this.toText(MM)), this.changeByRange((rM => ({
          changes: {
            from: rM.from,
            to: rM.to,
            insert: MM
          },
          range: AM.cursor(rM.from + MM.length)
        })))
      }
      changeByRange(MM) {
        let rM = this.selection,
          iM = MM(rM.Ld[0]),
          OM = this.changes(iM.changes),
          SM = [iM.range],
          jM = ur(iM.effects);
        for (let aM = 1; aM < rM.Ld.length; aM++) {
          let iM = MM(rM.Ld[aM]),
            PM = this.changes(iM.changes),
            nM = PM.map(OM);
          for (let MM = 0; MM < aM; MM++) SM[MM] = SM[MM].map(nM);
          let QM = OM.mapDesc(PM, !0);
          SM.push(iM.range.map(QM)), OM = OM.compose(nM), jM = Gr.mapEffects(jM, nM).concat(Gr.mapEffects(ur(iM.effects), QM))
        }
        return {
          changes: OM,
          selection: AM.create(SM, rM.mainIndex),
          effects: jM
        }
      }
      changes() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return MM instanceof sM ? MM : sM.of(MM, this.doc.length, this.facet(Dr.lineSeparator))
      }
      toText(MM) {
        return JM.of(MM.split(this.facet(Dr.lineSeparator) || RM))
      }
      sliceDoc() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.doc.length;
        return this.doc.sliceString(MM, rM, this.lineBreak)
      }
      facet(MM) {
        let rM = this.config.address[MM.id];
        return null == rM ? MM.default : (Qr(this, rM), zr(this, rM))
      }
      toJSON(MM) {
        let rM = {
          doc: this.sliceDoc(),
          selection: this.selection.toJSON()
        };
        if (MM)
          for (let iM in MM) {
            let OM = MM[iM];
            OM instanceof VM && null != this.config.address[OM.id] && (rM[iM] = OM.spec.toJSON(this.field(MM[iM]), this))
          }
        return rM
      }
      static fromJSON(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          iM = arguments.length > 2 ? arguments[2] : void 0;
        if (!MM || "string" != typeof MM.doc) throw new RangeError("Invalid JSON representation for EditorState");
        let OM = [];
        if (iM)
          for (let SM in iM)
            if (Object.prototype.hasOwnProperty.call(MM, SM)) {
              let rM = iM[SM],
                jM = MM[SM];
              OM.push(rM.init((MM => rM.spec.fromJSON(jM, MM))))
            } return Dr.create({
          doc: MM.doc,
          selection: AM.fromJSON(MM.selection),
          extensions: rM.extensions ? OM.concat([rM.extensions]) : OM
        })
      }
      static create() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          rM = nr.resolve(MM.extensions || [], new Map),
          iM = MM.doc instanceof JM ? MM.doc : JM.of((MM.doc || "").split(rM.staticFacet(Dr.lineSeparator) || RM)),
          OM = MM.selection ? MM.selection instanceof AM ? MM.selection : AM.single(MM.selection.anchor, MM.selection.head) : AM.single(0);
        return xM(OM, iM.length), rM.staticFacet(mr) || (OM = OM.asSingle()), new Dr(rM, iM, OM, rM.dynamicSlots.map((() => null)), ((MM, rM) => rM.create(MM)), null)
      }
      get tabSize() {
        return this.facet(Dr.tabSize)
      }
      get lineBreak() {
        return this.facet(Dr.lineSeparator) || "\n"
      }
      get readOnly() {
        return this.facet(yr)
      }
      phrase(MM) {
        for (var rM = arguments.length, iM = new Array(rM > 1 ? rM - 1 : 0), OM = 1; OM < rM; OM++) iM[OM - 1] = arguments[OM];
        for (let SM of this.facet(Dr.phrases))
          if (Object.prototype.hasOwnProperty.call(SM, MM)) {
            MM = SM[MM];
            break
          } return iM.length && (MM = MM.replace(/\$(\$|\d*)/g, ((MM, rM) => {
          if ("$" == rM) return "$";
          let OM = +(rM || 1);
          return !OM || OM > iM.length ? MM : iM[OM - 1]
        }))), MM
      }
      languageDataAt(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          OM = [];
        for (let SM of this.facet(Lr))
          for (let jM of SM(this, rM, iM)) Object.prototype.hasOwnProperty.call(jM, MM) && OM.push(jM[MM]);
        return OM
      }
      charCategorizer(MM) {
        let rM = this.languageDataAt("wordChars", MM);
        return sr(rM.length ? rM[0] : "")
      }
      wordAt(MM) {
        let {
          text: rM,
          from: iM,
          length: OM
        } = this.doc.lineAt(MM), SM = this.charCategorizer(MM), jM = MM - iM, aM = MM - iM;
        for (; jM > 0;) {
          let MM = wM(rM, jM, !1);
          if (SM(rM.slice(MM, jM)) != Rr.Word) break;
          jM = MM
        }
        for (; aM < OM;) {
          let MM = wM(rM, aM);
          if (SM(rM.slice(aM, MM)) != Rr.Word) break;
          aM = MM
        }
        return jM == aM ? null : AM.range(jM + iM, aM + iM)
      }
    }

    function kr(MM, rM) {
      let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        OM = {};
      for (let SM of MM)
        for (let MM of Object.keys(SM)) {
          let rM = SM[MM],
            jM = OM[MM];
          if (void 0 === jM) OM[MM] = rM;
          else if (jM === rM || void 0 === rM);
          else {
            if (!Object.hasOwnProperty.call(iM, MM)) throw new Error("Config merge conflict for field " + MM);
            OM[MM] = iM[MM](jM, rM)
          }
        }
      for (let SM in rM) void 0 === OM[SM] && (OM[SM] = rM[SM]);
      return OM
    }
    Dr.allowMultipleSelections = mr, Dr.tabSize = FM.define({
      combine: MM => MM.length ? MM[0] : 4
    }), Dr.lineSeparator = Hr, Dr.readOnly = yr, Dr.phrases = FM.define({
      compare(MM, rM) {
        let iM = Object.keys(MM),
          OM = Object.keys(rM);
        return iM.length == OM.length && iM.every((iM => MM[iM] == rM[iM]))
      }
    }), Dr.languageData = Lr, Dr.changeFilter = hr, Dr.transactionFilter = Jr, Dr.transactionExtender = dr, ar.reconfigure = Gr.define();
    class Zr {
      eq(MM) {
        return this == MM
      }
      range(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : MM;
        return fr.create(MM, rM, this)
      }
    }

    function or(MM, rM) {
      return MM == rM || MM.constructor == rM.constructor && MM.eq(rM)
    }
    Zr.prototype.startSide = Zr.prototype.endSide = 0, Zr.prototype.point = !1, Zr.prototype.mapMode = pM.TrackDel;
    class fr {
      constructor(MM, rM, iM) {
        this.from = MM, this.to = rM, this.value = iM
      }
      static create(MM, rM, iM) {
        return new fr(MM, rM, iM)
      }
    }

    function Yr(MM, rM) {
      return MM.from - rM.from || MM.value.startSide - rM.value.startSide
    }
    class Nr {
      constructor(MM, rM, iM, OM) {
        this.from = MM, this.to = rM, this.value = iM, this.EOM = OM
      }
      get length() {
        return this.to[this.to.length - 1]
      }
      findIndex(MM, rM, iM) {
        let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          SM = iM ? this.to : this.from;
        for (let jM = OM, aM = SM.length;;) {
          if (jM == aM) return jM;
          let OM = jM + aM >> 1,
            PM = SM[OM] - MM || (iM ? this.value[OM].endSide : this.value[OM].startSide) - rM;
          if (OM == jM) return PM >= 0 ? jM : aM;
          PM >= 0 ? aM = OM : jM = OM + 1
        }
      }
      between(MM, rM, iM, OM) {
        for (let SM = this.findIndex(rM, -1e9, !0), jM = this.findIndex(iM, 1e9, !1, SM); SM < jM; SM++)
          if (!1 === OM(this.from[SM] + MM, this.to[SM] + MM, this.value[SM])) return !1
      }
      map(MM, rM) {
        let iM = [],
          OM = [],
          SM = [],
          jM = -1,
          aM = -1;
        for (let PM = 0; PM < this.value.length; PM++) {
          let nM, QM, zM = this.value[PM],
            LM = this.from[PM] + MM,
            mM = this.to[PM] + MM;
          if (LM == mM) {
            let MM = rM.mapPos(LM, zM.startSide, zM.mapMode);
            if (null == MM) continue;
            if (nM = QM = MM, zM.startSide != zM.endSide && (QM = rM.mapPos(LM, zM.endSide), QM < nM)) continue
          } else if (nM = rM.mapPos(LM, zM.startSide), QM = rM.mapPos(mM, zM.endSide), nM > QM || nM == QM && zM.startSide > 0 && zM.endSide <= 0) continue;
          (QM - nM || zM.endSide - zM.startSide) < 0 || (jM < 0 && (jM = nM), zM.point && (aM = Math.max(aM, QM - nM)), iM.push(zM), OM.push(nM - jM), SM.push(QM - jM))
        }
        return {
          mapped: iM.length ? new Nr(OM, SM, iM, aM) : null,
          pos: jM
        }
      }
    }
    class Ar {
      constructor(MM, rM, iM, OM) {
        this.chunkPos = MM, this.chunk = rM, this.nextLayer = iM, this.EOM = OM
      }
      static create(MM, rM, iM, OM) {
        return new Ar(MM, rM, iM, OM)
      }
      get length() {
        let MM = this.chunk.length - 1;
        return MM < 0 ? 0 : Math.max(this.chunkEnd(MM), this.nextLayer.length)
      }
      get size() {
        if (this.dL) return 0;
        let MM = this.nextLayer.size;
        for (let rM of this.chunk) MM += rM.value.length;
        return MM
      }
      chunkEnd(MM) {
        return this.chunkPos[MM] + this.chunk[MM].length
      }
      update(MM) {
        let {
          add: rM = [],
          sort: iM = !1,
          filterFrom: OM = 0,
          filterTo: SM = this.length
        } = MM, jM = MM.filter;
        if (0 == rM.length && !jM) return this;
        if (iM && (rM = rM.slice().sort(Yr)), this.dL) return rM.length ? Ar.of(rM) : this;
        let aM = new Fr(this, null, -1).goto(0),
          PM = 0,
          nM = [],
          QM = new xr;
        for (; aM.value || PM < rM.length;)
          if (PM < rM.length && (aM.from - rM[PM].from || aM.startSide - rM[PM].value.startSide) >= 0) {
            let MM = rM[PM++];
            QM.addInner(MM.from, MM.to, MM.value) || nM.push(MM)
          } else 1 == aM.rangeIndex && aM.chunkIndex < this.chunk.length && (PM == rM.length || this.chunkEnd(aM.chunkIndex) < rM[PM].from) && (!jM || OM > this.chunkEnd(aM.chunkIndex) || SM < this.chunkPos[aM.chunkIndex]) && QM.addChunk(this.chunkPos[aM.chunkIndex], this.chunk[aM.chunkIndex]) ? aM.nextChunk() : ((!jM || OM > aM.to || SM < aM.from || jM(aM.from, aM.to, aM.value)) && (QM.addInner(aM.from, aM.to, aM.value) || nM.push(fr.create(aM.from, aM.to, aM.value))), aM.next());
        return QM.finishInner(this.nextLayer.dL && !nM.length ? Ar.empty : this.nextLayer.update({
          add: nM,
          filter: jM,
          filterFrom: OM,
          filterTo: SM
        }))
      }
      map(MM) {
        if (MM.empty || this.dL) return this;
        let rM = [],
          iM = [],
          OM = -1;
        for (let jM = 0; jM < this.chunk.length; jM++) {
          let SM = this.chunkPos[jM],
            aM = this.chunk[jM],
            PM = MM.touchesRange(SM, SM + aM.length);
          if (!1 === PM) OM = Math.max(OM, aM.EOM), rM.push(aM), iM.push(MM.mapPos(SM));
          else if (!0 === PM) {
            let {
              mapped: jM,
              pos: PM
            } = aM.map(SM, MM);
            jM && (OM = Math.max(OM, jM.EOM), rM.push(jM), iM.push(PM))
          }
        }
        let SM = this.nextLayer.map(MM);
        return 0 == rM.length ? SM : new Ar(iM, rM, SM || Ar.empty, OM)
      }
      between(MM, rM, iM) {
        if (!this.dL) {
          for (let OM = 0; OM < this.chunk.length; OM++) {
            let SM = this.chunkPos[OM],
              jM = this.chunk[OM];
            if (rM >= SM && MM <= SM + jM.length && !1 === jM.between(SM, MM - SM, rM - SM, iM)) return
          }
          this.nextLayer.between(MM, rM, iM)
        }
      }
      iter() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return Br.from([this]).goto(MM)
      }
      get dL() {
        return this.nextLayer == this
      }
      static iter(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Br.from(MM).goto(rM)
      }
      static compare(MM, rM, iM, OM) {
        let SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1,
          jM = MM.filter((MM => MM.EOM > 0 || !MM.dL && MM.EOM >= SM)),
          aM = rM.filter((MM => MM.EOM > 0 || !MM.dL && MM.EOM >= SM)),
          PM = vr(jM, aM, iM),
          nM = new Ir(jM, PM, SM),
          QM = new Ir(aM, PM, SM);
        iM.iterGaps(((MM, rM, iM) => Kr(nM, MM, QM, rM, iM, OM))), iM.empty && 0 == iM.length && Kr(nM, 0, QM, 0, 0, OM)
      }
      static eq(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          OM = arguments.length > 3 ? arguments[3] : void 0;
        null == OM && (OM = 999999999);
        let SM = MM.filter((MM => !MM.dL && rM.indexOf(MM) < 0)),
          jM = rM.filter((rM => !rM.dL && MM.indexOf(rM) < 0));
        if (SM.length != jM.length) return !1;
        if (!SM.length) return !0;
        let aM = vr(SM, jM),
          PM = new Ir(SM, aM, 0).goto(iM),
          nM = new Ir(jM, aM, 0).goto(iM);
        for (;;) {
          if (PM.to != nM.to || !qr(PM.active, nM.active) || PM.point && (!nM.point || !or(PM.point, nM.point))) return !1;
          if (PM.to > OM) return !0;
          PM.next(), nM.next()
        }
      }
      static spans(MM, rM, iM, OM) {
        let SM = new Ir(MM, null, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1).goto(rM),
          jM = rM,
          aM = SM.openStart;
        for (;;) {
          let MM = Math.min(SM.to, iM);
          if (SM.point) {
            let iM = SM.activeForPoint(SM.to),
              PM = SM.pointFrom < rM ? iM.length + 1 : SM.point.startSide < 0 ? iM.length : Math.min(iM.length, aM);
            OM.point(jM, MM, SM.point, iM, PM, SM.pointRank), aM = Math.min(SM.openEnd(MM), iM.length)
          } else MM > jM && (OM.span(jM, MM, SM.active, aM), aM = SM.openEnd(MM));
          if (SM.to > iM) return aM + (SM.point && SM.to > iM ? 1 : 0);
          jM = SM.to, SM.next()
        }
      }
      static of (MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          iM = new xr;
        for (let OM of MM instanceof fr ? [MM] : rM ? function(MM) {
            if (MM.length > 1)
              for (let rM = MM[0], iM = 1; iM < MM.length; iM++) {
                let OM = MM[iM];
                if (Yr(rM, OM) > 0) return MM.slice().sort(Yr);
                rM = OM
              }
            return MM
          }(MM) : MM) iM.add(OM.from, OM.to, OM.value);
        return iM.finish()
      }
      static join(MM) {
        if (!MM.length) return Ar.empty;
        let rM = MM[MM.length - 1];
        for (let iM = MM.length - 2; iM >= 0; iM--)
          for (let OM = MM[iM]; OM != Ar.empty; OM = OM.nextLayer) rM = new Ar(OM.chunkPos, OM.chunk, rM, Math.max(OM.EOM, rM.EOM));
        return rM
      }
    }
    Ar.empty = new Ar([], [], null, -1), Ar.empty.nextLayer = Ar.empty;
    class xr {
      finishChunk(MM) {
        this.chunks.push(new Nr(this.from, this.to, this.value, this.EOM)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.EOM), this.EOM = -1, MM && (this.from = [], this.to = [], this.value = [])
      }
      constructor() {
        this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.EOM = -1, this.setMaxPoint = -1, this.nextLayer = null
      }
      add(MM, rM, iM) {
        this.addInner(MM, rM, iM) || (this.nextLayer || (this.nextLayer = new xr)).add(MM, rM, iM)
      }
      addInner(MM, rM, iM) {
        let OM = MM - this.lastTo || iM.startSide - this.last.endSide;
        if (OM <= 0 && (MM - this.lastFrom || iM.startSide - this.last.startSide) < 0) throw new Error("Ranges must be added sorted by `from` position and `startSide`");
        return !(OM < 0) && (250 == this.from.length && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = MM), this.from.push(MM - this.chunkStart), this.to.push(rM - this.chunkStart), this.last = iM, this.lastFrom = MM, this.lastTo = rM, this.value.push(iM), iM.point && (this.EOM = Math.max(this.EOM, rM - MM)), !0)
      }
      addChunk(MM, rM) {
        if ((MM - this.lastTo || rM.value[0].startSide - this.last.endSide) < 0) return !1;
        this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, rM.EOM), this.chunks.push(rM), this.chunkPos.push(MM);
        let iM = rM.value.length - 1;
        return this.last = rM.value[iM], this.lastFrom = rM.from[iM] + MM, this.lastTo = rM.to[iM] + MM, !0
      }
      finish() {
        return this.finishInner(Ar.empty)
      }
      finishInner(MM) {
        if (this.from.length && this.finishChunk(!1), 0 == this.chunks.length) return MM;
        let rM = Ar.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(MM) : MM, this.setMaxPoint);
        return this.from = null, rM
      }
    }

    function vr(MM, rM, iM) {
      let OM = new Map;
      for (let jM of MM)
        for (let MM = 0; MM < jM.chunk.length; MM++) jM.chunk[MM].EOM <= 0 && OM.set(jM.chunk[MM], jM.chunkPos[MM]);
      let SM = new Set;
      for (let jM of rM)
        for (let MM = 0; MM < jM.chunk.length; MM++) {
          let rM = OM.get(jM.chunk[MM]);
          null == rM || (iM ? iM.mapPos(rM) : rM) != jM.chunkPos[MM] || (null === iM || void 0 === iM ? void 0 : iM.touchesRange(rM, rM + jM.chunk[MM].length)) || SM.add(jM.chunk[MM])
        }
      return SM
    }
    class Fr {
      constructor(MM, rM, iM) {
        let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.layer = MM, this.skip = rM, this.UOM = iM, this.rank = OM
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      get endSide() {
        return this.value ? this.value.endSide : 0
      }
      goto(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(MM, rM, !1), this
      }
      gotoInner(MM, rM, iM) {
        for (; this.chunkIndex < this.layer.chunk.length;) {
          let rM = this.layer.chunk[this.chunkIndex];
          if (!(this.skip && this.skip.has(rM) || this.layer.chunkEnd(this.chunkIndex) < MM || rM.EOM < this.UOM)) break;
          this.chunkIndex++, iM = !1
        }
        if (this.chunkIndex < this.layer.chunk.length) {
          let OM = this.layer.chunk[this.chunkIndex].findIndex(MM - this.layer.chunkPos[this.chunkIndex], rM, !0);
          (!iM || this.rangeIndex < OM) && this.setRangeIndex(OM)
        }
        this.next()
      }
      forward(MM, rM) {
        (this.to - MM || this.endSide - rM) < 0 && this.gotoInner(MM, rM, !0)
      }
      next() {
        for (;;) {
          if (this.chunkIndex == this.layer.chunk.length) {
            this.from = this.to = 1e9, this.value = null;
            break
          } {
            let MM = this.layer.chunkPos[this.chunkIndex],
              rM = this.layer.chunk[this.chunkIndex],
              iM = MM + rM.from[this.rangeIndex];
            if (this.from = iM, this.to = MM + rM.to[this.rangeIndex], this.value = rM.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.UOM < 0 || this.value.point && this.to - this.from >= this.UOM) break
          }
        }
      }
      setRangeIndex(MM) {
        if (MM == this.layer.chunk[this.chunkIndex].value.length) {
          if (this.chunkIndex++, this.skip)
            for (; this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]);) this.chunkIndex++;
          this.rangeIndex = 0
        } else this.rangeIndex = MM
      }
      nextChunk() {
        this.chunkIndex++, this.rangeIndex = 0, this.next()
      }
      compare(MM) {
        return this.from - MM.from || this.startSide - MM.startSide || this.rank - MM.rank || this.to - MM.to || this.endSide - MM.endSide
      }
    }
    class Br {
      constructor(MM) {
        this.heap = MM
      }
      static from(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          OM = [];
        for (let SM = 0; SM < MM.length; SM++)
          for (let jM = MM[SM]; !jM.dL; jM = jM.nextLayer) jM.EOM >= iM && OM.push(new Fr(jM, rM, iM, SM));
        return 1 == OM.length ? OM[0] : new Br(OM)
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      goto(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        for (let iM of this.heap) iM.goto(MM, rM);
        for (let iM = this.heap.length >> 1; iM >= 0; iM--) Xr(this.heap, iM);
        return this.next(), this
      }
      forward(MM, rM) {
        for (let iM of this.heap) iM.forward(MM, rM);
        for (let iM = this.heap.length >> 1; iM >= 0; iM--) Xr(this.heap, iM);
        (this.to - MM || this.value.endSide - rM) < 0 && this.next()
      }
      next() {
        if (0 == this.heap.length) this.from = this.to = 1e9, this.value = null, this.rank = -1;
        else {
          let MM = this.heap[0];
          this.from = MM.from, this.to = MM.to, this.value = MM.value, this.rank = MM.rank, MM.value && MM.next(), Xr(this.heap, 0)
        }
      }
    }

    function Xr(MM, rM) {
      for (let iM = MM[rM];;) {
        let OM = 1 + (rM << 1);
        if (OM >= MM.length) break;
        let SM = MM[OM];
        if (OM + 1 < MM.length && SM.compare(MM[OM + 1]) >= 0 && (SM = MM[OM + 1], OM++), iM.compare(SM) < 0) break;
        MM[OM] = iM, MM[rM] = SM, rM = OM
      }
    }
    class Ir {
      constructor(MM, rM, iM) {
        this.UOM = iM, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = Br.from(MM, rM, iM)
      }
      goto(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.cursor.goto(MM, rM), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = MM, this.endSide = rM, this.openStart = -1, this.next(), this
      }
      forward(MM, rM) {
        for (; this.minActive > -1 && (this.activeTo[this.minActive] - MM || this.active[this.minActive].endSide - rM) < 0;) this.removeActive(this.minActive);
        this.cursor.forward(MM, rM)
      }
      removeActive(MM) {
        Tr(this.active, MM), Tr(this.activeTo, MM), Tr(this.activeRank, MM), this.minActive = cr(this.active, this.activeTo)
      }
      addActive(MM) {
        let rM = 0,
          {
            value: iM,
            to: OM,
            rank: SM
          } = this.cursor;
        for (; rM < this.activeRank.length && (SM - this.activeRank[rM] || OM - this.activeTo[rM]) > 0;) rM++;
        Vr(this.active, rM, iM), Vr(this.activeTo, rM, OM), Vr(this.activeRank, rM, SM), MM && Vr(MM, rM, this.cursor.from), this.minActive = cr(this.active, this.activeTo)
      }
      next() {
        let MM = this.to,
          rM = this.point;
        this.point = null;
        let iM = this.openStart < 0 ? [] : null;
        for (;;) {
          let OM = this.minActive;
          if (OM > -1 && (this.activeTo[OM] - this.cursor.from || this.active[OM].endSide - this.cursor.startSide) < 0) {
            if (this.activeTo[OM] > MM) {
              this.to = this.activeTo[OM], this.endSide = this.active[OM].endSide;
              break
            }
            this.removeActive(OM), iM && Tr(iM, OM)
          } else {
            if (!this.cursor.value) {
              this.to = this.endSide = 1e9;
              break
            }
            if (this.cursor.from > MM) {
              this.to = this.cursor.from, this.endSide = this.cursor.startSide;
              break
            } {
              let MM = this.cursor.value;
              if (MM.point) {
                if (!(rM && this.cursor.to == this.to && this.cursor.from < this.cursor.to)) {
                  this.point = MM, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = MM.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
                  break
                }
                this.cursor.next()
              } else this.addActive(iM), this.cursor.next()
            }
          }
        }
        if (iM) {
          this.openStart = 0;
          for (let rM = iM.length - 1; rM >= 0 && iM[rM] < MM; rM--) this.openStart++
        }
      }
      activeForPoint(MM) {
        if (!this.active.length) return this.active;
        let rM = [];
        for (let iM = this.active.length - 1; iM >= 0 && !(this.activeRank[iM] < this.pointRank); iM--)(this.activeTo[iM] > MM || this.activeTo[iM] == MM && this.active[iM].endSide >= this.point.endSide) && rM.push(this.active[iM]);
        return rM.reverse()
      }
      openEnd(MM) {
        let rM = 0;
        for (let iM = this.activeTo.length - 1; iM >= 0 && this.activeTo[iM] > MM; iM--) rM++;
        return rM
      }
    }

    function Kr(MM, rM, iM, OM, SM, jM) {
      MM.goto(rM), iM.goto(OM);
      let aM = OM + SM,
        PM = OM,
        nM = OM - rM,
        QM = !!jM.boundChange;
      for (let zM = !1;;) {
        let rM = MM.to + nM - iM.to,
          OM = rM || MM.endSide - iM.endSide,
          SM = OM < 0 ? MM.to + nM : iM.to,
          LM = Math.min(SM, aM);
        if (MM.point || iM.point ? (MM.point && iM.point && or(MM.point, iM.point) && qr(MM.activeForPoint(MM.to), iM.activeForPoint(iM.to)) || jM.comparePoint(PM, LM, MM.point, iM.point), zM = !1) : (zM && jM.boundChange(PM), LM > PM && !qr(MM.active, iM.active) && jM.compareRange(PM, LM, MM.active, iM.active), QM && LM < aM && (rM || MM.openEnd(SM) != iM.openEnd(SM)) && (zM = !0)), SM > aM) break;
        PM = SM, OM <= 0 && MM.next(), OM >= 0 && iM.next()
      }
    }

    function qr(MM, rM) {
      if (MM.length != rM.length) return !1;
      for (let iM = 0; iM < MM.length; iM++)
        if (MM[iM] != rM[iM] && !or(MM[iM], rM[iM])) return !1;
      return !0
    }

    function Tr(MM, rM) {
      for (let iM = rM, OM = MM.length - 1; iM < OM; iM++) MM[iM] = MM[iM + 1];
      MM.pop()
    }

    function Vr(MM, rM, iM) {
      for (let OM = MM.length - 1; OM >= rM; OM--) MM[OM + 1] = MM[OM];
      MM[rM] = iM
    }

    function cr(MM, rM) {
      let iM = -1,
        OM = 1e9;
      for (let SM = 0; SM < rM.length; SM++)(rM[SM] - OM || MM[SM].endSide - MM[iM].endSide) < 0 && (iM = SM, OM = rM[SM]);
      return iM
    }

    function Mi(MM, rM) {
      let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : MM.length,
        OM = 0;
      for (let SM = 0; SM < iM && SM < MM.length;) 9 == MM.charCodeAt(SM) ? (OM += rM - OM % rM, SM++) : (OM++, SM = wM(MM, SM));
      return OM
    }

    function ri(MM, rM, iM, OM) {
      for (let SM = 0, jM = 0;;) {
        if (jM >= rM) return SM;
        if (SM == MM.length) break;
        jM += 9 == MM.charCodeAt(SM) ? iM - jM % iM : 1, SM = wM(MM, SM)
      }
      return !0 === OM ? -1 : MM.length
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);