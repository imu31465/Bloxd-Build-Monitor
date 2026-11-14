export const id = 270;
export const ids = [270];
export const modules = {
  39279: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => yn,
      g: () => Cc,
      ChangeSet: () => vB,
      i: () => ZB,
      m: () => Xc,
      o: () => DB,
      q: () => Jc,
      s: () => Qc,
      v: () => IB,
      y: () => XB,
      x: () => HB,
      C: () => EB,
      F: () => hB,
      J: () => Ac,
      N: () => ec,
      R: () => an,
      U: () => gB,
      Y: () => bB,
      $: () => NB,
      bb: () => Bn,
      eb: () => Lc,
      gb: () => nn,
      hb: () => Uc
    });
    let Vc = [],
      Ic = [];

    function rB(cB) {
      if (cB < 768) return !1;
      for (let Bc = 0, nc = Vc.length;;) {
        let rB = Bc + nc >> 1;
        if (cB < Vc[rB]) nc = rB;
        else {
          if (!(cB >= Ic[rB])) return !0;
          Bc = rB + 1
        }
        if (Bc == nc) return !1
      }
    }

    function uc(cB) {
      return cB >= 127462 && cB <= 127487
    }(() => {
      let cB = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((cB => cB ? parseInt(cB, 36) : 1));
      for (let Bc = 0, nc = 0; Bc < cB.length; Bc++)(Bc % 2 ? Ic : Vc).push(nc += cB[Bc])
    })();
    const sc = 8205;

    function Mc(cB, Bc) {
      return (!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2] ? Pc : qB)(cB, Bc, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function Pc(cB, Bc, nc) {
      if (Bc == cB.length) return Bc;
      Bc && Tc(cB.charCodeAt(Bc)) && fc(cB.charCodeAt(Bc - 1)) && Bc--;
      let Vc = Oc(cB, Bc);
      for (Bc += mB(Vc); Bc < cB.length;) {
        let Ic = Oc(cB, Bc);
        if (Vc == sc || Ic == sc || nc && rB(Ic)) Bc += mB(Ic), Vc = Ic;
        else {
          if (!uc(Ic)) break;
          {
            let nc = 0,
              Vc = Bc - 2;
            for (; Vc >= 0 && uc(Oc(cB, Vc));) nc++, Vc -= 2;
            if (nc % 2 == 0) break;
            Bc += 2
          }
        }
      }
      return Bc
    }

    function qB(cB, Bc, nc) {
      for (; Bc > 0;) {
        let Vc = Pc(cB, Bc - 2, nc);
        if (Vc < Bc) return Vc;
        Bc--
      }
      return 0
    }

    function Oc(cB, Bc) {
      let nc = cB.charCodeAt(Bc);
      if (!fc(nc) || Bc + 1 == cB.length) return nc;
      let Vc = cB.charCodeAt(Bc + 1);
      return Tc(Vc) ? Vc - 56320 + (nc - 55296 << 10) + 65536 : nc
    }

    function Tc(cB) {
      return cB >= 56320 && cB < 57344
    }

    function fc(cB) {
      return cB >= 55296 && cB < 56320
    }

    function mB(cB) {
      return cB < 65536 ? 1 : 2
    }
    class ec {
      lineAt(cB) {
        if (cB < 0 || cB > this.length) throw new RangeError(`Invalid position ${cB} in document of length ${this.length}`);
        return this.lineInner(cB, !1, 1, 0)
      }
      line(cB) {
        if (cB < 1 || cB > this.lines) throw new RangeError(`Invalid line number ${cB} in ${this.lines}-line document`);
        return this.lineInner(cB, !0, 1, 0)
      }
      replace(cB, Bc, nc) {
        [cB, Bc] = Yc(this, cB, Bc);
        let Vc = [];
        return this.decompose(0, cB, Vc, 2), nc.length && nc.decompose(0, nc.length, Vc, 3), this.decompose(Bc, this.length, Vc, 1), Sc.from(Vc, this.length - (Bc - cB) + nc.length)
      }
      append(cB) {
        return this.replace(this.length, this.length, cB)
      }
      slice(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        [cB, Bc] = Yc(this, cB, Bc);
        let nc = [];
        return this.decompose(cB, Bc, nc, 0), Sc.from(nc, Bc - cB)
      }
      eq(cB) {
        if (cB == this) return !0;
        if (cB.length != this.length || cB.lines != this.lines) return !1;
        let Bc = this.scanIdentical(cB, 1),
          nc = this.length - this.scanIdentical(cB, -1),
          Vc = new pc(this),
          Ic = new pc(cB);
        for (let rB = Bc, uc = Bc;;) {
          if (Vc.next(rB), Ic.next(rB), rB = 0, Vc.lineBreak != Ic.lineBreak || Vc.done != Ic.done || Vc.value != Ic.value) return !1;
          if (uc += Vc.value.length, Vc.done || uc >= nc) return !0
        }
      }
      iter() {
        return new pc(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1)
      }
      iterRange(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        return new hc(this, cB, Bc)
      }
      iterLines(cB, Bc) {
        let nc;
        if (null == cB) nc = this.iter();
        else {
          null == Bc && (Bc = this.lines + 1);
          let Vc = this.line(cB).from;
          nc = this.iterRange(Vc, Math.max(Vc, Bc == this.lines + 1 ? this.length : Bc <= 1 ? 0 : this.line(Bc - 1).to))
        }
        return new aB(nc)
      }
      toString() {
        return this.sliceString(0)
      }
      toJSON() {
        let cB = [];
        return this.flatten(cB), cB
      }
      constructor() {}
      static of (cB) {
        if (0 == cB.length) throw new RangeError("A document must have at least one line");
        return 1 != cB.length || cB[0] ? cB.length <= 32 ? new tB(cB) : Sc.from(tB.split(cB, [])) : ec.empty
      }
    }
    class tB extends ec {
      constructor(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(cB) {
          let Bc = -1;
          for (let nc of cB) Bc += nc.length + 1;
          return Bc
        }(cB);
        super(), this.text = cB, this.length = Bc
      }
      get lines() {
        return this.text.length
      }
      get children() {
        return null
      }
      lineInner(cB, Bc, nc, Vc) {
        for (let Ic = 0;; Ic++) {
          let rB = this.text[Ic],
            uc = Vc + rB.length;
          if ((Bc ? nc : uc) >= cB) return new lc(Vc, uc, nc, rB);
          Vc = uc + 1, nc++
        }
      }
      decompose(cB, Bc, nc, Vc) {
        let Ic = cB <= 0 && Bc >= this.length ? this : new tB(zB(this.text, cB, Bc), Math.min(Bc, this.length) - Math.max(0, cB));
        if (1 & Vc) {
          let cB = nc.pop(),
            Bc = yB(Ic.text, cB.text.slice(), 0, Ic.length);
          if (Bc.length <= 32) nc.push(new tB(Bc, cB.length + Ic.length));
          else {
            let cB = Bc.length >> 1;
            nc.push(new tB(Bc.slice(0, cB)), new tB(Bc.slice(cB)))
          }
        } else nc.push(Ic)
      }
      replace(cB, Bc, nc) {
        if (!(nc instanceof tB)) return super.replace(cB, Bc, nc);
        [cB, Bc] = Yc(this, cB, Bc);
        let Vc = yB(this.text, yB(nc.text, zB(this.text, 0, cB)), Bc),
          Ic = this.length + nc.length - (Bc - cB);
        return Vc.length <= 32 ? new tB(Vc, Ic) : Sc.from(tB.split(Vc, []), Ic)
      }
      sliceString(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [cB, Bc] = Yc(this, cB, Bc);
        let Vc = "";
        for (let Ic = 0, rB = 0; Ic <= Bc && rB < this.text.length; rB++) {
          let uc = this.text[rB],
            sc = Ic + uc.length;
          Ic > cB && rB && (Vc += nc), cB < sc && Bc > Ic && (Vc += uc.slice(Math.max(0, cB - Ic), Bc - Ic)), Ic = sc + 1
        }
        return Vc
      }
      flatten(cB) {
        for (let Bc of this.text) cB.push(Bc)
      }
      scanIdentical() {
        return 0
      }
      static split(cB, Bc) {
        let nc = [],
          Vc = -1;
        for (let Ic of cB) nc.push(Ic), Vc += Ic.length + 1, 32 == nc.length && (Bc.push(new tB(nc, Vc)), nc = [], Vc = -1);
        return Vc > -1 && Bc.push(new tB(nc, Vc)), Bc
      }
    }
    class Sc extends ec {
      constructor(cB, Bc) {
        super(), this.children = cB, this.length = Bc, this.lines = 0;
        for (let nc of cB) this.lines += nc.lines
      }
      lineInner(cB, Bc, nc, Vc) {
        for (let Ic = 0;; Ic++) {
          let rB = this.children[Ic],
            uc = Vc + rB.length,
            sc = nc + rB.lines - 1;
          if ((Bc ? sc : uc) >= cB) return rB.lineInner(cB, Bc, nc, Vc);
          Vc = uc + 1, nc = sc + 1
        }
      }
      decompose(cB, Bc, nc, Vc) {
        for (let Ic = 0, rB = 0; rB <= Bc && Ic < this.children.length; Ic++) {
          let uc = this.children[Ic],
            sc = rB + uc.length;
          if (cB <= sc && Bc >= rB) {
            let Ic = Vc & ((rB <= cB ? 1 : 0) | (sc >= Bc ? 2 : 0));
            rB >= cB && sc <= Bc && !Ic ? nc.push(uc) : uc.decompose(cB - rB, Bc - rB, nc, Ic)
          }
          rB = sc + 1
        }
      }
      replace(cB, Bc, nc) {
        if ([cB, Bc] = Yc(this, cB, Bc), nc.lines < this.lines)
          for (let Vc = 0, Ic = 0; Vc < this.children.length; Vc++) {
            let rB = this.children[Vc],
              uc = Ic + rB.length;
            if (cB >= Ic && Bc <= uc) {
              let sc = rB.replace(cB - Ic, Bc - Ic, nc),
                Mc = this.lines - rB.lines + sc.lines;
              if (sc.lines < Mc >> 4 && sc.lines > Mc >> 6) {
                let Ic = this.children.slice();
                return Ic[Vc] = sc, new Sc(Ic, this.length - (Bc - cB) + nc.length)
              }
              return super.replace(Ic, uc, sc)
            }
            Ic = uc + 1
          }
        return super.replace(cB, Bc, nc)
      }
      sliceString(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [cB, Bc] = Yc(this, cB, Bc);
        let Vc = "";
        for (let Ic = 0, rB = 0; Ic < this.children.length && rB <= Bc; Ic++) {
          let uc = this.children[Ic],
            sc = rB + uc.length;
          rB > cB && Ic && (Vc += nc), cB < sc && Bc > rB && (Vc += uc.sliceString(cB - rB, Bc - rB, nc)), rB = sc + 1
        }
        return Vc
      }
      flatten(cB) {
        for (let Bc of this.children) Bc.flatten(cB)
      }
      scanIdentical(cB, Bc) {
        if (!(cB instanceof Sc)) return 0;
        let nc = 0,
          [Vc, Ic, rB, uc] = Bc > 0 ? [0, 0, this.children.length, cB.children.length] : [this.children.length - 1, cB.children.length - 1, -1, -1];
        for (;; Vc += Bc, Ic += Bc) {
          if (Vc == rB || Ic == uc) return nc;
          let sc = this.children[Vc],
            Mc = cB.children[Ic];
          if (sc != Mc) return nc + sc.scanIdentical(Mc, Bc);
          nc += sc.length + 1
        }
      }
      static from(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : cB.reduce(((cB, Bc) => cB + Bc.length + 1), -1),
          nc = 0;
        for (let Tc of cB) nc += Tc.lines;
        if (nc < 32) {
          let nc = [];
          for (let Bc of cB) Bc.flatten(nc);
          return new tB(nc, Bc)
        }
        let Vc = Math.max(32, nc >> 5),
          Ic = Vc << 1,
          rB = Vc >> 1,
          uc = [],
          sc = 0,
          Mc = -1,
          Pc = [];

        function qB(cB) {
          let Bc;
          if (cB.lines > Ic && cB instanceof Sc)
            for (let nc of cB.children) qB(nc);
          else cB.lines > rB && (sc > rB || !sc) ? (Oc(), uc.push(cB)) : cB instanceof tB && sc && (Bc = Pc[Pc.length - 1]) instanceof tB && cB.lines + Bc.lines <= 32 ? (sc += cB.lines, Mc += cB.length + 1, Pc[Pc.length - 1] = new tB(Bc.text.concat(cB.text), Bc.length + 1 + cB.length)) : (sc + cB.lines > Vc && Oc(), sc += cB.lines, Mc += cB.length + 1, Pc.push(cB))
        }

        function Oc() {
          0 != sc && (uc.push(1 == Pc.length ? Pc[0] : Sc.from(Pc, Mc)), Mc = -1, sc = Pc.length = 0)
        }
        for (let Tc of cB) qB(Tc);
        return Oc(), 1 == uc.length ? uc[0] : new Sc(uc, Bc)
      }
    }

    function yB(cB, Bc) {
      let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e9;
      for (let Ic = 0, rB = 0, uc = !0; rB < cB.length && Ic <= Vc; rB++) {
        let sc = cB[rB],
          Mc = Ic + sc.length;
        Mc >= nc && (Mc > Vc && (sc = sc.slice(0, Vc - Ic)), Ic < nc && (sc = sc.slice(nc - Ic)), uc ? (Bc[Bc.length - 1] += sc, uc = !1) : Bc.push(sc)), Ic = Mc + 1
      }
      return Bc
    }

    function zB(cB, Bc, nc) {
      return yB(cB, [""], Bc, nc)
    }
    ec.empty = new tB([""], 0);
    class pc {
      constructor(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.dir = Bc, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [cB], this.offsets = [Bc > 0 ? 1 : (cB instanceof tB ? cB.text.length : cB.children.length) << 1]
      }
      nextInner(cB, Bc) {
        for (this.done = this.lineBreak = !1;;) {
          let nc = this.nodes.length - 1,
            Vc = this.nodes[nc],
            Ic = this.offsets[nc],
            rB = Ic >> 1,
            uc = Vc instanceof tB ? Vc.text.length : Vc.children.length;
          if (rB == (Bc > 0 ? uc : 0)) {
            if (0 == nc) return this.done = !0, this.value = "", this;
            Bc > 0 && this.offsets[nc - 1]++, this.nodes.pop(), this.offsets.pop()
          } else if ((1 & Ic) == (Bc > 0 ? 0 : 1)) {
            if (this.offsets[nc] += Bc, 0 == cB) return this.lineBreak = !0, this.value = "\n", this;
            cB--
          } else if (Vc instanceof tB) {
            let Ic = Vc.text[rB + (Bc < 0 ? -1 : 0)];
            if (this.offsets[nc] += Bc, Ic.length > Math.max(0, cB)) return this.value = 0 == cB ? Ic : Bc > 0 ? Ic.slice(cB) : Ic.slice(0, Ic.length - cB), this;
            cB -= Ic.length
          } else {
            let Ic = Vc.children[rB + (Bc < 0 ? -1 : 0)];
            cB > Ic.length ? (cB -= Ic.length, this.offsets[nc] += Bc) : (Bc < 0 && this.offsets[nc]--, this.nodes.push(Ic), this.offsets.push(Bc > 0 ? 1 : (Ic instanceof tB ? Ic.text.length : Ic.children.length) << 1))
          }
        }
      }
      next() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return cB < 0 && (this.nextInner(-cB, -this.dir), cB = this.value.length), this.nextInner(cB, this.dir)
      }
    }
    class hc {
      constructor(cB, Bc, nc) {
        this.value = "", this.done = !1, this.cursor = new pc(cB, Bc > nc ? -1 : 1), this.pos = Bc > nc ? cB.length : 0, this.from = Math.min(Bc, nc), this.to = Math.max(Bc, nc)
      }
      nextInner(cB, Bc) {
        if (Bc < 0 ? this.pos <= this.from : this.pos >= this.to) return this.value = "", this.done = !0, this;
        cB += Math.max(0, Bc < 0 ? this.pos - this.to : this.from - this.pos);
        let nc = Bc < 0 ? this.pos - this.from : this.to - this.pos;
        cB > nc && (cB = nc), nc -= cB;
        let {
          value: Vc
        } = this.cursor.next(cB);
        return this.pos += (Vc.length + cB) * Bc, this.value = Vc.length <= nc ? Vc : Bc < 0 ? Vc.slice(Vc.length - nc) : Vc.slice(0, nc), this.done = !this.value, this
      }
      next() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return cB < 0 ? cB = Math.max(cB, this.from - this.pos) : cB > 0 && (cB = Math.min(cB, this.to - this.pos)), this.nextInner(cB, this.cursor.dir)
      }
      get lineBreak() {
        return this.cursor.lineBreak && "" != this.value
      }
    }
    class aB {
      constructor(cB) {
        this.inner = cB, this.afterBreak = !0, this.value = "", this.done = !1
      }
      next() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          {
            done: Bc,
            lineBreak: nc,
            value: Vc
          } = this.inner.next(cB);
        return Bc && this.afterBreak ? (this.value = "", this.afterBreak = !1) : Bc ? (this.done = !0, this.value = "") : nc ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = Vc, this.afterBreak = !1), this
      }
      get lineBreak() {
        return !1
      }
    }
    "undefined" != typeof Symbol && (ec.prototype[Symbol.iterator] = function() {
      return this.iter()
    }, pc.prototype[Symbol.iterator] = hc.prototype[Symbol.iterator] = aB.prototype[Symbol.iterator] = function() {
      return this
    });
    class lc {
      constructor(cB, Bc, nc, Vc) {
        this.from = cB, this.to = Bc, this.number = nc, this.text = Vc
      }
      get length() {
        return this.to - this.from
      }
    }

    function Yc(cB, Bc, nc) {
      return [Bc = Math.max(0, Math.min(cB.length, Bc)), Math.max(Bc, Math.min(cB.length, nc))]
    }

    function Lc(cB, Bc) {
      return Mc(cB, Bc, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function gB(cB, Bc) {
      let nc = cB.charCodeAt(Bc);
      if (!((Vc = nc) >= 55296 && Vc < 56320) || Bc + 1 == cB.length) return nc;
      var Vc;
      let Ic = cB.charCodeAt(Bc + 1);
      return function(cB) {
        return cB >= 56320 && cB < 57344
      }(Ic) ? Ic - 56320 + (nc - 55296 << 10) + 65536 : nc
    }

    function Uc(cB) {
      return cB <= 65535 ? String.fromCharCode(cB) : (cB -= 65536, String.fromCharCode(55296 + (cB >> 10), 56320 + (1023 & cB)))
    }

    function bB(cB) {
      return cB < 65536 ? 1 : 2
    }
    const Zc = /\r\n?|\n/;
    var Qc = function(cB) {
      return cB[cB.Simple = 0] = "Simple", cB[cB.TrackDel = 1] = "TrackDel", cB[cB.TrackBefore = 2] = "TrackBefore", cB[cB.TrackAfter = 3] = "TrackAfter", cB
    }(Qc || (Qc = {}));
    class Cc {
      constructor(cB) {
        this.sections = cB
      }
      get length() {
        let cB = 0;
        for (let Bc = 0; Bc < this.sections.length; Bc += 2) cB += this.sections[Bc];
        return cB
      }
      get newLength() {
        let cB = 0;
        for (let Bc = 0; Bc < this.sections.length; Bc += 2) {
          let nc = this.sections[Bc + 1];
          cB += nc < 0 ? this.sections[Bc] : nc
        }
        return cB
      }
      get empty() {
        return 0 == this.sections.length || 2 == this.sections.length && this.sections[1] < 0
      }
      iterGaps(cB) {
        for (let Bc = 0, nc = 0, Vc = 0; Bc < this.sections.length;) {
          let Ic = this.sections[Bc++],
            rB = this.sections[Bc++];
          rB < 0 ? (cB(nc, Vc, Ic), Vc += Ic) : Vc += rB, nc += Ic
        }
      }
      iterChangedRanges(cB) {
        Ec(this, cB, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get invertedDesc() {
        let cB = [];
        for (let Bc = 0; Bc < this.sections.length;) {
          let nc = this.sections[Bc++],
            Vc = this.sections[Bc++];
          Vc < 0 ? cB.push(nc, Vc) : cB.push(Vc, nc)
        }
        return new Cc(cB)
      }
      composeDesc(cB) {
        return this.empty ? cB : cB.empty ? this : Wc(this, cB)
      }
      mapDesc(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return cB.empty ? this : oc(this, cB, Bc)
      }
      mapPos(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Qc.Simple,
          Vc = 0,
          Ic = 0;
        for (let rB = 0; rB < this.sections.length;) {
          let uc = this.sections[rB++],
            sc = this.sections[rB++],
            Mc = Vc + uc;
          if (sc < 0) {
            if (Mc > cB) return Ic + (cB - Vc);
            Ic += uc
          } else {
            if (nc != Qc.Simple && Mc >= cB && (nc == Qc.TrackDel && Vc < cB && Mc > cB || nc == Qc.TrackBefore && Vc < cB || nc == Qc.TrackAfter && Mc > cB)) return null;
            if (Mc > cB || Mc == cB && Bc < 0 && !uc) return cB == Vc || Bc < 0 ? Ic : Ic + sc;
            Ic += sc
          }
          Vc = Mc
        }
        if (cB > Vc) throw new RangeError(`Position ${cB} is out of range for changeset of length ${Vc}`);
        return Ic
      }
      touchesRange(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : cB;
        for (let nc = 0, Vc = 0; nc < this.sections.length && Vc <= Bc;) {
          let Ic = Vc + this.sections[nc++];
          if (this.sections[nc++] >= 0 && Vc <= Bc && Ic >= cB) return !(Vc < cB && Ic > Bc) || "cover";
          Vc = Ic
        }
        return !1
      }
      toString() {
        let cB = "";
        for (let Bc = 0; Bc < this.sections.length;) {
          let nc = this.sections[Bc++],
            Vc = this.sections[Bc++];
          cB += (cB ? " " : "") + nc + (Vc >= 0 ? ":" + Vc : "")
        }
        return cB
      }
      toJSON() {
        return this.sections
      }
      static fromJSON(cB) {
        if (!Array.isArray(cB) || cB.length % 2 || cB.some((cB => "number" != typeof cB))) throw new RangeError("Invalid JSON representation of ChangeDesc");
        return new Cc(cB)
      }
      static create(cB) {
        return new Cc(cB)
      }
    }
    class vB extends Cc {
      constructor(cB, Bc) {
        super(cB), this.inserted = Bc
      }
      apply(cB) {
        if (this.length != cB.length) throw new RangeError("Applying change set to a document with the wrong length");
        return Ec(this, ((Bc, nc, Vc, Ic, rB) => cB = cB.replace(Vc, Vc + (nc - Bc), rB)), !1), cB
      }
      mapDesc(cB) {
        return oc(this, cB, arguments.length > 1 && void 0 !== arguments[1] && arguments[1], !0)
      }
      invert(cB) {
        let Bc = this.sections.slice(),
          nc = [];
        for (let Vc = 0, Ic = 0; Vc < Bc.length; Vc += 2) {
          let rB = Bc[Vc],
            uc = Bc[Vc + 1];
          if (uc >= 0) {
            Bc[Vc] = uc, Bc[Vc + 1] = rB;
            let sc = Vc >> 1;
            for (; nc.length < sc;) nc.push(ec.empty);
            nc.push(rB ? cB.slice(Ic, Ic + rB) : ec.empty)
          }
          Ic += rB
        }
        return new vB(Bc, nc)
      }
      compose(cB) {
        return this.empty ? cB : cB.empty ? this : Wc(this, cB, !0)
      }
      map(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return cB.empty ? this : oc(this, cB, Bc, !0)
      }
      iterChanges(cB) {
        Ec(this, cB, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get desc() {
        return Cc.create(this.sections)
      }
      filter(cB) {
        let Bc = [],
          nc = [],
          Vc = [],
          Ic = new wc(this);
        cB: for (let rB = 0, uc = 0;;) {
          let sc = rB == cB.length ? 1e9 : cB[rB++];
          for (; uc < sc || uc == sc && 0 == Ic.len;) {
            if (Ic.done) break cB;
            let cB = Math.min(Ic.len, sc - uc);
            Dc(Vc, cB, -1);
            let rB = -1 == Ic.ins ? -1 : 0 == Ic.off ? Ic.ins : 0;
            Dc(Bc, cB, rB), rB > 0 && Nc(nc, Bc, Ic.text), Ic.forward(cB), uc += cB
          }
          let Mc = cB[rB++];
          for (; uc < Mc;) {
            if (Ic.done) break cB;
            let cB = Math.min(Ic.len, Mc - uc);
            Dc(Bc, cB, -1), Dc(Vc, cB, -1 == Ic.ins ? -1 : 0 == Ic.off ? Ic.ins : 0), Ic.forward(cB), uc += cB
          }
        }
        return {
          changes: new vB(Bc, nc),
          filtered: Cc.create(Vc)
        }
      }
      toJSON() {
        let cB = [];
        for (let Bc = 0; Bc < this.sections.length; Bc += 2) {
          let nc = this.sections[Bc],
            Vc = this.sections[Bc + 1];
          Vc < 0 ? cB.push(nc) : 0 == Vc ? cB.push([nc]) : cB.push([nc].concat(this.inserted[Bc >> 1].toJSON()))
        }
        return cB
      }
      static of (cB, Bc, nc) {
        let Vc = [],
          Ic = [],
          rB = 0,
          uc = null;

        function sc() {
          if (!(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && !Vc.length) return;
          rB < Bc && Dc(Vc, Bc - rB, -1);
          let cB = new vB(Vc, Ic);
          uc = uc ? uc.compose(cB.map(uc)) : cB, Vc = [], Ic = [], rB = 0
        }
        return function cB(Mc) {
          if (Array.isArray(Mc))
            for (let Bc of Mc) cB(Bc);
          else if (Mc instanceof vB) {
            if (Mc.length != Bc) throw new RangeError(`Mismatched change set length (got ${Mc.length}, expected ${Bc})`);
            sc(), uc = uc ? uc.compose(Mc.map(uc)) : Mc
          } else {
            let {
              from: cB,
              to: uc = cB,
              insert: Pc
            } = Mc;
            if (cB > uc || cB < 0 || uc > Bc) throw new RangeError(`Invalid change range ${cB} to ${uc} (in doc of length ${Bc})`);
            let qB = Pc ? "string" == typeof Pc ? ec.of(Pc.split(nc || Zc)) : Pc : ec.empty,
              Oc = qB.length;
            if (cB == uc && 0 == Oc) return;
            cB < rB && sc(), cB > rB && Dc(Vc, cB - rB, -1), Dc(Vc, uc - cB, Oc), Nc(Ic, Vc, qB), rB = uc
          }
        }(cB), sc(!uc), uc
      }
      static empty(cB) {
        return new vB(cB ? [cB, -1] : [], [])
      }
      static fromJSON(cB) {
        if (!Array.isArray(cB)) throw new RangeError("Invalid JSON representation of ChangeSet");
        let Bc = [],
          nc = [];
        for (let Vc = 0; Vc < cB.length; Vc++) {
          let Ic = cB[Vc];
          if ("number" == typeof Ic) Bc.push(Ic, -1);
          else {
            if (!Array.isArray(Ic) || "number" != typeof Ic[0] || Ic.some(((cB, Bc) => Bc && "string" != typeof cB))) throw new RangeError("Invalid JSON representation of ChangeSet");
            if (1 == Ic.length) Bc.push(Ic[0], 0);
            else {
              for (; nc.length < Vc;) nc.push(ec.empty);
              nc[Vc] = ec.of(Ic.slice(1)), Bc.push(Ic[0], nc[Vc].length)
            }
          }
        }
        return new vB(Bc, nc)
      }
      static createSet(cB, Bc) {
        return new vB(cB, Bc)
      }
    }

    function Dc(cB, Bc, nc) {
      let Vc = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (0 == Bc && nc <= 0) return;
      let Ic = cB.length - 2;
      Ic >= 0 && nc <= 0 && nc == cB[Ic + 1] ? cB[Ic] += Bc : Ic >= 0 && 0 == Bc && 0 == cB[Ic] ? cB[Ic + 1] += nc : Vc ? (cB[Ic] += Bc, cB[Ic + 1] += nc) : cB.push(Bc, nc)
    }

    function Nc(cB, Bc, nc) {
      if (0 == nc.length) return;
      let Vc = Bc.length - 2 >> 1;
      if (Vc < cB.length) cB[cB.length - 1] = cB[cB.length - 1].append(nc);
      else {
        for (; cB.length < Vc;) cB.push(ec.empty);
        cB.push(nc)
      }
    }

    function Ec(cB, Bc, nc) {
      let Vc = cB.inserted;
      for (let Ic = 0, rB = 0, uc = 0; uc < cB.sections.length;) {
        let sc = cB.sections[uc++],
          Mc = cB.sections[uc++];
        if (Mc < 0) Ic += sc, rB += sc;
        else {
          let Pc = Ic,
            qB = rB,
            Oc = ec.empty;
          for (; Pc += sc, qB += Mc, Mc && Vc && (Oc = Oc.append(Vc[uc - 2 >> 1])), !(nc || uc == cB.sections.length || cB.sections[uc + 1] < 0);) sc = cB.sections[uc++], Mc = cB.sections[uc++];
          Bc(Ic, Pc, rB, qB, Oc), Ic = Pc, rB = qB
        }
      }
    }

    function oc(cB, Bc, nc) {
      let Vc = [],
        Ic = arguments.length > 3 && void 0 !== arguments[3] && arguments[3] ? [] : null,
        rB = new wc(cB),
        uc = new wc(Bc),
        sc = 0;
      for (let Mc = -1;;) {
        if (++sc > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - likely malformed ChangeSet");
        if (rB.done && uc.len || uc.done && rB.len) throw new Error("Mismatched change set lengths");
        if (-1 == rB.ins && -1 == uc.ins) {
          let cB = Math.min(rB.len, uc.len);
          Dc(Vc, cB, -1), rB.forward(cB), uc.forward(cB)
        } else if (uc.ins >= 0 && (rB.ins < 0 || Mc == rB.i || 0 == rB.off && (uc.len < rB.len || uc.len == rB.len && !nc))) {
          let cB = uc.len;
          for (Dc(Vc, uc.ins, -1); cB;) {
            if (++sc > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-b");
            let Bc = Math.min(rB.len, cB);
            rB.ins >= 0 && Mc < rB.i && rB.len <= Bc && (Dc(Vc, 0, rB.ins), Ic && Nc(Ic, Vc, rB.text), Mc = rB.i), rB.forward(Bc), cB -= Bc
          }
          uc.next()
        } else {
          if (!(rB.ins >= 0)) {
            if (rB.done && uc.done) return Ic ? vB.createSet(Vc, Ic) : Cc.create(Vc);
            throw new Error("Mismatched change set lengths")
          } {
            let cB = 0,
              Bc = rB.len;
            for (; Bc;) {
              if (++sc > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-a");
              if (-1 == uc.ins) {
                let nc = Math.min(Bc, uc.len);
                cB += nc, Bc -= nc, uc.forward(nc)
              } else {
                if (!(0 == uc.ins && uc.len < Bc)) break;
                Bc -= uc.len, uc.next()
              }
            }
            Dc(Vc, cB, Mc < rB.i ? rB.ins : 0), Ic && Mc < rB.i && Nc(Ic, Vc, rB.text), Mc = rB.i, rB.forward(rB.len - Bc)
          }
        }
      }
    }

    function Wc(cB, Bc) {
      let nc = [],
        Vc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? [] : null,
        Ic = new wc(cB),
        rB = new wc(Bc),
        uc = 0;
      for (let sc = !1;;) {
        if (++uc > 2e6) throw new Error("BLOXD CODEMIRROR: composeSets exceeded max iterations - likely malformed ChangeSet");
        if (Ic.done && rB.done) return Vc ? vB.createSet(nc, Vc) : Cc.create(nc);
        if (0 == Ic.ins) Dc(nc, Ic.len, 0, sc), Ic.next();
        else if (0 != rB.len || rB.done) {
          if (Ic.done || rB.done) throw new Error("Mismatched change set lengths");
          {
            let cB = Math.min(Ic.len2, rB.len),
              Bc = nc.length;
            if (-1 == Ic.ins) {
              let Bc = -1 == rB.ins ? -1 : rB.off ? 0 : rB.ins;
              Dc(nc, cB, Bc, sc), Vc && Bc && Nc(Vc, nc, rB.text)
            } else - 1 == rB.ins ? (Dc(nc, Ic.off ? 0 : Ic.len, cB, sc), Vc && Nc(Vc, nc, Ic.textBit(cB))) : (Dc(nc, Ic.off ? 0 : Ic.len, rB.off ? 0 : rB.ins, sc), Vc && !rB.off && Nc(Vc, nc, rB.text));
            sc = (Ic.ins > cB || rB.ins >= 0 && rB.len > cB) && (sc || nc.length > Bc), Ic.forward2(cB), rB.forward(cB)
          }
        } else Dc(nc, 0, rB.ins, sc), Vc && Nc(Vc, nc, rB.text), rB.next()
      }
    }
    class wc {
      constructor(cB) {
        this.set = cB, this.i = 0, this.next()
      }
      next() {
        let {
          sections: cB
        } = this.set;
        this.i < cB.length ? (this.len = cB[this.i++], this.ins = cB[this.i++]) : (this.len = 0, this.ins = -2), this.off = 0
      }
      get done() {
        return -2 == this.ins
      }
      get len2() {
        return this.ins < 0 ? this.len : this.ins
      }
      get text() {
        let {
          inserted: cB
        } = this.set, Bc = this.i - 2 >> 1;
        return Bc >= cB.length ? ec.empty : cB[Bc]
      }
      textBit(cB) {
        let {
          inserted: Bc
        } = this.set, nc = this.i - 2 >> 1;
        return nc >= Bc.length && !cB ? ec.empty : Bc[nc].slice(this.off, null == cB ? void 0 : this.off + cB)
      }
      forward(cB) {
        cB == this.len ? this.next() : (this.len -= cB, this.off += cB)
      }
      forward2(cB) {
        -1 == this.ins ? this.forward(cB) : cB == this.ins ? this.next() : (this.ins -= cB, this.off += cB)
      }
    }
    class kB {
      constructor(cB, Bc, nc) {
        this.from = cB, this.to = Bc, this.flags = nc
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
        let cB = 7 & this.flags;
        return 7 == cB ? null : cB
      }
      get goalColumn() {
        let cB = this.flags >> 6;
        return 16777215 == cB ? void 0 : cB
      }
      map(cB) {
        let Bc, nc, Vc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return this.empty ? Bc = nc = cB.mapPos(this.from, Vc) : (Bc = cB.mapPos(this.from, 1), nc = cB.mapPos(this.to, -1)), Bc == this.from && nc == this.to ? this : new kB(Bc, nc, this.flags)
      }
      extend(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : cB,
          nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (cB <= this.anchor && Bc >= this.anchor) return Xc.range(cB, Bc, void 0, void 0, nc);
        let Vc = Math.abs(cB - this.anchor) > Math.abs(Bc - this.anchor) ? cB : Bc;
        return Xc.range(this.anchor, Vc, void 0, void 0, nc)
      }
      eq(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.anchor == cB.anchor && this.head == cB.head && this.goalColumn == cB.goalColumn && (!Bc || !this.empty || this.assoc == cB.assoc)
      }
      toJSON() {
        return {
          anchor: this.anchor,
          head: this.head
        }
      }
      static fromJSON(cB) {
        if (!cB || "number" != typeof cB.anchor || "number" != typeof cB.head) throw new RangeError("Invalid JSON representation for SelectionRange");
        return Xc.range(cB.anchor, cB.head)
      }
      static create(cB, Bc, nc) {
        return new kB(cB, Bc, nc)
      }
    }
    class Xc {
      constructor(cB, Bc) {
        this.Iu = cB, this.mainIndex = Bc
      }
      map(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return cB.empty ? this : Xc.create(this.Iu.map((nc => nc.map(cB, Bc))), this.mainIndex)
      }
      eq(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.Iu.length != cB.Iu.length || this.mainIndex != cB.mainIndex) return !1;
        for (let nc = 0; nc < this.Iu.length; nc++)
          if (!this.Iu[nc].eq(cB.Iu[nc], Bc)) return !1;
        return !0
      }
      get main() {
        return this.Iu[this.mainIndex]
      }
      asSingle() {
        return 1 == this.Iu.length ? this : new Xc([this.main], 0)
      }
      addRange(cB) {
        let Bc = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return Xc.create([cB].concat(this.Iu), Bc ? 0 : this.mainIndex + 1)
      }
      replaceRange(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.mainIndex,
          nc = this.Iu.slice();
        return nc[Bc] = cB, Xc.create(nc, this.mainIndex)
      }
      toJSON() {
        return {
          Iu: this.Iu.map((cB => cB.toJSON())),
          main: this.mainIndex
        }
      }
      static fromJSON(cB) {
        if (!cB || !Array.isArray(cB.Iu) || "number" != typeof cB.main || cB.main >= cB.Iu.length) throw new RangeError("Invalid JSON representation for EditorSelection");
        return new Xc(cB.Iu.map((cB => kB.fromJSON(cB))), cB.main)
      }
      static single(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : cB;
        return new Xc([Xc.range(cB, Bc)], 0)
      }
      static create(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (0 == cB.length) throw new RangeError("A selection needs at least one range");
        for (let nc = 0, Vc = 0; Vc < cB.length; Vc++) {
          let Ic = cB[Vc];
          if (Ic.empty ? Ic.from <= nc : Ic.from < nc) return Xc.normalized(cB.slice(), Bc);
          nc = Ic.to
        }
        return new Xc(cB, Bc)
      }
      static cursor(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          nc = arguments.length > 2 ? arguments[2] : void 0,
          Vc = arguments.length > 3 ? arguments[3] : void 0;
        return kB.create(cB, cB, (0 == Bc ? 0 : Bc < 0 ? 8 : 16) | (null == nc ? 7 : Math.min(6, nc)) | (null !== Vc && void 0 !== Vc ? Vc : 16777215) << 6)
      }
      static range(cB, Bc, nc, Vc, Ic) {
        let rB = (null !== nc && void 0 !== nc ? nc : 16777215) << 6 | (null == Vc ? 7 : Math.min(6, Vc));
        return Ic || cB == Bc || (Ic = Bc < cB ? 1 : -1), Bc < cB ? kB.create(Bc, cB, 48 | rB) : kB.create(cB, Bc, (Ic ? Ic < 0 ? 8 : 16 : 0) | rB)
      }
      static normalized(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          nc = cB[Bc];
        cB.sort(((cB, Bc) => cB.from - Bc.from)), Bc = cB.indexOf(nc);
        for (let Vc = 1; Vc < cB.length; Vc++) {
          let nc = cB[Vc],
            Ic = cB[Vc - 1];
          if (nc.empty ? nc.from <= Ic.to : nc.from < Ic.to) {
            let rB = Ic.from,
              uc = Math.max(nc.to, Ic.to);
            Vc <= Bc && Bc--, cB.splice(--Vc, 2, nc.anchor > nc.head ? Xc.range(uc, rB) : Xc.range(rB, uc))
          }
        }
        return new Xc(cB, Bc)
      }
    }

    function Hc(cB, Bc) {
      for (let nc of cB.Iu)
        if (nc.to > Bc) throw new RangeError("Selection points outside of document")
    }
    let Fc = 0;
    class Jc {
      constructor(cB, Bc, nc, Vc, Ic) {
        this.combine = cB, this.compareInput = Bc, this.compare = nc, this.isStatic = Vc, this.id = Fc++, this.default = cB([]), this.extensions = "function" == typeof Ic ? Ic(this) : Ic
      }
      get reader() {
        return this
      }
      static define() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return new Jc(cB.combine || (cB => cB), cB.compareInput || ((cB, Bc) => cB === Bc), cB.compare || (cB.combine ? (cB, Bc) => cB === Bc : jB), !!cB.static, cB.enables)
      }
      of(cB) {
        return new Rc([], this, 0, cB)
      }
      compute(cB, Bc) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new Rc(cB, this, 1, Bc)
      }
      computeN(cB, Bc) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new Rc(cB, this, 2, Bc)
      }
      from(cB, Bc) {
        return Bc || (Bc = cB => cB), this.compute([cB], (nc => Bc(nc.field(cB))))
      }
    }

    function jB(cB, Bc) {
      return cB == Bc || cB.length == Bc.length && cB.every(((cB, nc) => cB === Bc[nc]))
    }
    class Rc {
      constructor(cB, Bc, nc, Vc) {
        this.dependencies = cB, this.facet = Bc, this.type = nc, this.value = Vc, this.id = Fc++
      }
      dynamicSlot(cB) {
        var Bc;
        let nc = this.value,
          Vc = this.facet.compareInput,
          Ic = this.id,
          rB = cB[Ic] >> 1,
          uc = 2 == this.type,
          sc = !1,
          Mc = !1,
          Pc = [];
        for (let qB of this.dependencies) "doc" == qB ? sc = !0 : "selection" == qB ? Mc = !0 : 0 == (1 & (null !== (Bc = cB[qB.id]) && void 0 !== Bc ? Bc : 1)) && Pc.push(cB[qB.id]);
        return {
          create: cB => (cB.values[rB] = nc(cB), 1),
          update(cB, Bc) {
            if (sc && Bc.docChanged || Mc && (Bc.docChanged || Bc.selection) || Kc(cB, Pc)) {
              let Bc = nc(cB);
              if (uc ? !iB(Bc, cB.values[rB], Vc) : !Vc(Bc, cB.values[rB])) return cB.values[rB] = Bc, 1
            }
            return 0
          },
          reconfigure: (cB, Bc) => {
            let sc, Mc = Bc.config.address[Ic];
            if (null != Mc) {
              let Ic = qn(Bc, Mc);
              if (this.dependencies.every((nc => nc instanceof Jc ? Bc.facet(nc) === cB.facet(nc) : !(nc instanceof Ac) || Bc.field(nc, !1) == cB.field(nc, !1))) || (uc ? iB(sc = nc(cB), Ic, Vc) : Vc(sc = nc(cB), Ic))) return cB.values[rB] = Ic, 0
            } else sc = nc(cB);
            return cB.values[rB] = sc, 1
          }
        }
      }
    }

    function iB(cB, Bc, nc) {
      if (cB.length != Bc.length) return !1;
      for (let Vc = 0; Vc < cB.length; Vc++)
        if (!nc(cB[Vc], Bc[Vc])) return !1;
      return !0
    }

    function Kc(cB, Bc) {
      let nc = !1;
      for (let Vc of Bc) 1 & PB(cB, Vc) && (nc = !0);
      return nc
    }

    function xB(cB, Bc, nc) {
      let Vc = nc.map((Bc => cB[Bc.id])),
        Ic = nc.map((cB => cB.type)),
        rB = Vc.filter((cB => !(1 & cB))),
        uc = cB[Bc.id] >> 1;

      function sc(cB) {
        let nc = [];
        for (let Bc = 0; Bc < Vc.length; Bc++) {
          let rB = qn(cB, Vc[Bc]);
          if (2 == Ic[Bc])
            for (let cB of rB) nc.push(cB);
          else nc.push(rB)
        }
        return Bc.combine(nc)
      }
      return {
        create(cB) {
          for (let Bc of Vc) PB(cB, Bc);
          return cB.values[uc] = sc(cB), 1
        },
        update(cB, nc) {
          if (!Kc(cB, rB)) return 0;
          let Vc = sc(cB);
          return Bc.compare(Vc, cB.values[uc]) ? 0 : (cB.values[uc] = Vc, 1)
        },
        reconfigure(cB, Ic) {
          let rB = Kc(cB, Vc),
            Mc = Ic.config.facets[Bc.id],
            Pc = Ic.facet(Bc);
          if (Mc && !rB && jB(nc, Mc)) return cB.values[uc] = Pc, 0;
          let qB = sc(cB);
          return Bc.compare(qB, Pc) ? (cB.values[uc] = Pc, 0) : (cB.values[uc] = qB, 1)
        }
      }
    }
    const dc = Jc.define({
      static: !0
    });
    class Ac {
      constructor(cB, Bc, nc, Vc, Ic) {
        this.id = cB, this.createF = Bc, this.updateF = nc, this.compareF = Vc, this.spec = Ic, this.provides = void 0
      }
      static define(cB) {
        let Bc = new Ac(Fc++, cB.create, cB.update, cB.compare || ((cB, Bc) => cB === Bc), cB);
        return cB.provide && (Bc.provides = cB.provide(Bc)), Bc
      }
      create(cB) {
        let Bc = cB.facet(dc).find((cB => cB.field == this));
        return ((null === Bc || void 0 === Bc ? void 0 : Bc.create) || this.createF)(cB)
      }
      slot(cB) {
        let Bc = cB[this.id] >> 1;
        return {
          create: cB => (cB.values[Bc] = this.create(cB), 1),
          update: (cB, nc) => {
            let Vc = cB.values[Bc],
              Ic = this.updateF(Vc, nc);
            return this.compareF(Vc, Ic) ? 0 : (cB.values[Bc] = Ic, 1)
          },
          reconfigure: (cB, nc) => {
            let Vc, Ic = cB.facet(dc),
              rB = nc.facet(dc);
            return (Vc = Ic.find((cB => cB.field == this))) && Vc != rB.find((cB => cB.field == this)) ? (cB.values[Bc] = Vc.create(cB), 1) : null != nc.config.address[this.id] ? (cB.values[Bc] = nc.field(this), 0) : (cB.values[Bc] = this.create(cB), 1)
          }
        }
      }
      init(cB) {
        return [this, dc.of({
          field: this,
          create: cB
        })]
      }
      get extension() {
        return this
      }
    }
    const Gc = 4,
      cn = 3,
      BB = 2,
      nB = 1;

    function VB(cB) {
      return Bc => new rn(Bc, cB)
    }
    const IB = {
      highest: VB(0),
      high: VB(nB),
      default: VB(BB),
      low: VB(cn),
      lowest: VB(Gc)
    };
    class rn {
      constructor(cB, Bc) {
        this.inner = cB, this.prec = Bc
      }
    }
    class uB {
      of(cB) {
        return new sB(this, cB)
      }
      reconfigure(cB) {
        return uB.reconfigure.of({
          compartment: this,
          extension: cB
        })
      }
      get(cB) {
        return cB.config.compartments.get(this)
      }
    }
    class sB {
      constructor(cB, Bc) {
        this.compartment = cB, this.inner = Bc
      }
    }
    class MB {
      constructor(cB, Bc, nc, Vc, Ic, rB) {
        for (this.base = cB, this.compartments = Bc, this.dynamicSlots = nc, this.address = Vc, this.staticValues = Ic, this.facets = rB, this.statusTemplate = []; this.statusTemplate.length < nc.length;) this.statusTemplate.push(0)
      }
      staticFacet(cB) {
        let Bc = this.address[cB.id];
        return null == Bc ? cB.default : this.staticValues[Bc >> 1]
      }
      static resolve(cB, Bc, nc) {
        let Vc = [],
          Ic = Object.create(null),
          rB = new Map;
        for (let Oc of function(cB, Bc, nc) {
            let Vc = [
                [],
                [],
                [],
                [],
                []
              ],
              Ic = new Map;

            function rB(cB, uc) {
              let sc = Ic.get(cB);
              if (null != sc) {
                if (sc <= uc) return;
                let Bc = Vc[sc].indexOf(cB);
                Bc > -1 && Vc[sc].splice(Bc, 1), cB instanceof sB && nc.delete(cB.compartment)
              }
              if (Ic.set(cB, uc), Array.isArray(cB))
                for (let Bc of cB) rB(Bc, uc);
              else if (cB instanceof sB) {
                if (nc.has(cB.compartment)) throw new RangeError("Duplicate use of compartment in extensions");
                let Vc = Bc.get(cB.compartment) || cB.inner;
                nc.set(cB.compartment, Vc), rB(Vc, uc)
              } else if (cB instanceof rn) rB(cB.inner, cB.prec);
              else if (cB instanceof Ac) Vc[uc].push(cB), cB.provides && rB(cB.provides, uc);
              else if (cB instanceof Rc) Vc[uc].push(cB), cB.facet.extensions && rB(cB.facet.extensions, BB);
              else {
                let Bc = cB.extension;
                if (!Bc) throw new Error(`Unrecognized extension value in extension set (${cB}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
                rB(Bc, uc)
              }
            }
            return rB(cB, BB), Vc.reduce(((cB, Bc) => cB.concat(Bc)))
          }(cB, Bc, rB)) Oc instanceof Ac ? Vc.push(Oc) : (Ic[Oc.facet.id] || (Ic[Oc.facet.id] = [])).push(Oc);
        let uc = Object.create(null),
          sc = [],
          Mc = [];
        for (let Oc of Vc) uc[Oc.id] = Mc.length << 1, Mc.push((cB => Oc.slot(cB)));
        let Pc = null === nc || void 0 === nc ? void 0 : nc.config.facets;
        for (let Oc in Ic) {
          let cB = Ic[Oc],
            Bc = cB[0].facet,
            Vc = Pc && Pc[Oc] || [];
          if (cB.every((cB => 0 == cB.type)))
            if (uc[Bc.id] = sc.length << 1 | 1, jB(Vc, cB)) sc.push(nc.facet(Bc));
            else {
              let Vc = Bc.combine(cB.map((cB => cB.value)));
              sc.push(nc && Bc.compare(Vc, nc.facet(Bc)) ? nc.facet(Bc) : Vc)
            }
          else {
            for (let Bc of cB) 0 == Bc.type ? (uc[Bc.id] = sc.length << 1 | 1, sc.push(Bc.value)) : (uc[Bc.id] = Mc.length << 1, Mc.push((cB => Bc.dynamicSlot(cB))));
            uc[Bc.id] = Mc.length << 1, Mc.push((nc => xB(nc, Bc, cB)))
          }
        }
        let qB = Mc.map((cB => cB(uc)));
        return new MB(cB, rB, qB, uc, sc, Ic)
      }
    }

    function PB(cB, Bc) {
      if (1 & Bc) return 2;
      let nc = Bc >> 1,
        Vc = cB.status[nc];
      if (4 == Vc) throw new Error("Cyclic dependency between fields and/or facets");
      if (2 & Vc) return Vc;
      cB.status[nc] = 4;
      let Ic = cB.computeSlot(cB, cB.config.dynamicSlots[nc]);
      return cB.status[nc] = 2 | Ic
    }

    function qn(cB, Bc) {
      return 1 & Bc ? cB.config.staticValues[Bc >> 1] : cB.values[Bc >> 1]
    }
    const OB = Jc.define(),
      TB = Jc.define({
        combine: cB => cB.some((cB => cB)),
        static: !0
      }),
      fB = Jc.define({
        combine: cB => cB.length ? cB[0] : void 0,
        static: !0
      }),
      mn = Jc.define(),
      eB = Jc.define(),
      tn = Jc.define(),
      SB = Jc.define({
        combine: cB => !!cB.length && cB[0]
      });
    class yn {
      constructor(cB, Bc) {
        this.type = cB, this.value = Bc
      }
      static define() {
        return new zn
      }
    }
    class zn {
      of(cB) {
        return new yn(this, cB)
      }
    }
    class pB {
      constructor(cB) {
        this.map = cB
      }
      of(cB) {
        return new hB(this, cB)
      }
    }
    class hB {
      constructor(cB, Bc) {
        this.type = cB, this.value = Bc
      }
      map(cB) {
        let Bc = this.type.map(this.value, cB);
        return void 0 === Bc ? void 0 : Bc == this.value ? this : new hB(this.type, Bc)
      }
      is(cB) {
        return this.type == cB
      }
      static define() {
        return new pB((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).map || (cB => cB))
      }
      static mapEffects(cB, Bc) {
        if (!cB.length) return cB;
        let nc = [];
        for (let Vc of cB) {
          let cB = Vc.map(Bc);
          cB && nc.push(cB)
        }
        return nc
      }
    }
    hB.reconfigure = hB.define(), hB.appendConfig = hB.define();
    class an {
      constructor(cB, Bc, nc, Vc, Ic, rB) {
        this.startState = cB, this.changes = Bc, this.selection = nc, this.effects = Vc, this.annotations = Ic, this.scrollIntoView = rB, this._doc = null, this._state = null, nc && Hc(nc, Bc.newLength), Ic.some((cB => cB.type == an.time)) || (this.annotations = Ic.concat(an.time.of(Date.now())))
      }
      static create(cB, Bc, nc, Vc, Ic, rB) {
        return new an(cB, Bc, nc, Vc, Ic, rB)
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
      annotation(cB) {
        for (let Bc of this.annotations)
          if (Bc.type == cB) return Bc.value
      }
      get docChanged() {
        return !this.changes.empty
      }
      get reconfigured() {
        return this.startState.config != this.state.config
      }
      isUserEvent(cB) {
        let Bc = this.annotation(an.userEvent);
        return !(!Bc || !(Bc == cB || Bc.length > cB.length && Bc.slice(0, cB.length) == cB && "." == Bc[cB.length]))
      }
    }

    function lB(cB, Bc) {
      let nc = [];
      for (let Vc = 0, Ic = 0;;) {
        let rB, uc;
        if (Vc < cB.length && (Ic == Bc.length || Bc[Ic] >= cB[Vc])) rB = cB[Vc++], uc = cB[Vc++];
        else {
          if (!(Ic < Bc.length)) return nc;
          rB = Bc[Ic++], uc = Bc[Ic++]
        }!nc.length || nc[nc.length - 1] < rB ? nc.push(rB, uc) : nc[nc.length - 1] < uc && (nc[nc.length - 1] = uc)
      }
    }

    function YB(cB, Bc, nc) {
      var Vc;
      let Ic, rB, uc;
      return nc ? (Ic = Bc.changes, rB = vB.empty(Bc.changes.length), uc = cB.changes.compose(Bc.changes)) : (Ic = Bc.changes.map(cB.changes), rB = cB.changes.mapDesc(Bc.changes, !0), uc = cB.changes.compose(Ic)), {
        changes: uc,
        selection: Bc.selection ? Bc.selection.map(rB) : null === (Vc = cB.selection) || void 0 === Vc ? void 0 : Vc.map(Ic),
        effects: hB.mapEffects(cB.effects, Ic).concat(hB.mapEffects(Bc.effects, rB)),
        annotations: cB.annotations.length ? cB.annotations.concat(Bc.annotations) : Bc.annotations,
        scrollIntoView: cB.scrollIntoView || Bc.scrollIntoView
      }
    }

    function LB(cB, Bc, nc) {
      let Vc = Bc.selection,
        Ic = bn(Bc.annotations);
      return Bc.userEvent && (Ic = Ic.concat(an.userEvent.of(Bc.userEvent))), {
        changes: Bc.changes instanceof vB ? Bc.changes : vB.of(Bc.changes || [], nc, cB.facet(fB)),
        selection: Vc && (Vc instanceof Xc ? Vc : Xc.single(Vc.anchor, Vc.head)),
        effects: bn(Bc.effects),
        annotations: Ic,
        scrollIntoView: !!Bc.scrollIntoView
      }
    }

    function gn(cB, Bc, nc) {
      let Vc = LB(cB, Bc.length ? Bc[0] : {}, cB.doc.length);
      Bc.length && !1 === Bc[0].filter && (nc = !1);
      for (let rB = 1; rB < Bc.length; rB++) {
        !1 === Bc[rB].filter && (nc = !1);
        let Ic = !!Bc[rB].sequential;
        Vc = YB(Vc, LB(cB, Bc[rB], Ic ? Vc.changes.newLength : cB.doc.length), Ic)
      }
      let Ic = an.create(cB, Vc.changes, Vc.selection, Vc.effects, Vc.annotations, Vc.scrollIntoView);
      return function(cB) {
        let Bc = cB.startState,
          nc = Bc.facet(tn),
          Vc = cB;
        for (let Ic = nc.length - 1; Ic >= 0; Ic--) {
          let rB = nc[Ic](cB);
          rB && Object.keys(rB).length && (Vc = YB(Vc, LB(Bc, rB, cB.changes.newLength), !0))
        }
        return Vc == cB ? cB : an.create(Bc, cB.changes, cB.selection, Vc.effects, Vc.annotations, Vc.scrollIntoView)
      }(nc ? function(cB) {
        let Bc = cB.startState,
          nc = !0;
        for (let Ic of Bc.facet(mn)) {
          let Bc = Ic(cB);
          if (!1 === Bc) {
            nc = !1;
            break
          }
          Array.isArray(Bc) && (nc = !0 === nc ? Bc : lB(nc, Bc))
        }
        if (!0 !== nc) {
          let Vc, Ic;
          if (!1 === nc) Ic = cB.changes.invertedDesc, Vc = vB.empty(Bc.doc.length);
          else {
            let Bc = cB.changes.filter(nc);
            Vc = Bc.changes, Ic = Bc.filtered.mapDesc(Bc.changes).invertedDesc
          }
          cB = an.create(Bc, Vc, cB.selection && cB.selection.map(Ic), hB.mapEffects(cB.effects, Ic), cB.annotations, cB.scrollIntoView)
        }
        let Vc = Bc.facet(eB);
        for (let Ic = Vc.length - 1; Ic >= 0; Ic--) {
          let nc = Vc[Ic](cB);
          cB = nc instanceof an ? nc : Array.isArray(nc) && 1 == nc.length && nc[0] instanceof an ? nc[0] : gn(Bc, bn(nc), !1)
        }
        return cB
      }(Ic) : Ic)
    }
    an.time = yn.define(), an.userEvent = yn.define(), an.addToHistory = yn.define(), an.remote = yn.define();
    const UB = [];

    function bn(cB) {
      return null == cB ? UB : Array.isArray(cB) ? cB : [cB]
    }
    var ZB = function(cB) {
      return cB[cB.Word = 0] = "Word", cB[cB.Space = 1] = "Space", cB[cB.Other = 2] = "Other", cB
    }(ZB || (ZB = {}));
    const QB = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
    let CB;
    try {
      CB = new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u")
    } catch (Vn) {}

    function vn(cB) {
      return Bc => {
        if (!/\S/.test(Bc)) return ZB.Space;
        if (function(cB) {
            if (CB) return CB.test(cB);
            for (let Bc = 0; Bc < cB.length; Bc++) {
              let nc = cB[Bc];
              if (/\w/.test(nc) || nc > "\x80" && (nc.toUpperCase() != nc.toLowerCase() || QB.test(nc))) return !0
            }
            return !1
          }(Bc)) return ZB.Word;
        for (let nc = 0; nc < cB.length; nc++)
          if (Bc.indexOf(cB[nc]) > -1) return ZB.Word;
        return ZB.Other
      }
    }
    class DB {
      constructor(cB, Bc, nc, Vc, Ic, rB) {
        this.config = cB, this.doc = Bc, this.selection = nc, this.values = Vc, this.status = cB.statusTemplate.slice(), this.computeSlot = Ic, rB && (rB._state = this);
        for (let uc = 0; uc < this.config.dynamicSlots.length; uc++) PB(this, uc << 1);
        this.computeSlot = null
      }
      field(cB) {
        let Bc = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          nc = this.config.address[cB.id];
        if (null != nc) return PB(this, nc), qn(this, nc);
        if (Bc) throw new RangeError("Field is not present in this state")
      }
      update() {
        for (var cB = arguments.length, Bc = new Array(cB), nc = 0; nc < cB; nc++) Bc[nc] = arguments[nc];
        return gn(this, Bc, !0)
      }
      applyTransaction(cB) {
        let Bc, nc = this.config,
          {
            base: Vc,
            compartments: Ic
          } = nc;
        for (let uc of cB.effects) uc.is(uB.reconfigure) ? (nc && (Ic = new Map, nc.compartments.forEach(((cB, Bc) => Ic.set(Bc, cB))), nc = null), Ic.set(uc.value.compartment, uc.value.extension)) : uc.is(hB.reconfigure) ? (nc = null, Vc = uc.value) : uc.is(hB.appendConfig) && (nc = null, Vc = bn(Vc).concat(uc.value));
        if (nc) Bc = cB.startState.values.slice();
        else {
          nc = MB.resolve(Vc, Ic, this), Bc = new DB(nc, this.doc, this.selection, nc.dynamicSlots.map((() => null)), ((cB, Bc) => Bc.reconfigure(cB, this)), null).values
        }
        let rB = cB.startState.facet(TB) ? cB.newSelection : cB.newSelection.asSingle();
        new DB(nc, cB.newDoc, rB, Bc, ((Bc, nc) => nc.update(Bc, cB)), cB)
      }
      replaceSelection(cB) {
        return "string" == typeof cB && (cB = this.toText(cB)), this.changeByRange((Bc => ({
          changes: {
            from: Bc.from,
            to: Bc.to,
            insert: cB
          },
          range: Xc.cursor(Bc.from + cB.length)
        })))
      }
      changeByRange(cB) {
        let Bc = this.selection,
          nc = cB(Bc.Iu[0]),
          Vc = this.changes(nc.changes),
          Ic = [nc.range],
          rB = bn(nc.effects);
        for (let uc = 1; uc < Bc.Iu.length; uc++) {
          let nc = cB(Bc.Iu[uc]),
            sc = this.changes(nc.changes),
            Mc = sc.map(Vc);
          for (let cB = 0; cB < uc; cB++) Ic[cB] = Ic[cB].map(Mc);
          let Pc = Vc.mapDesc(sc, !0);
          Ic.push(nc.range.map(Pc)), Vc = Vc.compose(Mc), rB = hB.mapEffects(rB, Mc).concat(hB.mapEffects(bn(nc.effects), Pc))
        }
        return {
          changes: Vc,
          selection: Xc.create(Ic, Bc.mainIndex),
          effects: rB
        }
      }
      changes() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return cB instanceof vB ? cB : vB.of(cB, this.doc.length, this.facet(DB.lineSeparator))
      }
      toText(cB) {
        return ec.of(cB.split(this.facet(DB.lineSeparator) || Zc))
      }
      sliceDoc() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.doc.length;
        return this.doc.sliceString(cB, Bc, this.lineBreak)
      }
      facet(cB) {
        let Bc = this.config.address[cB.id];
        return null == Bc ? cB.default : (PB(this, Bc), qn(this, Bc))
      }
      toJSON(cB) {
        let Bc = {
          doc: this.sliceDoc(),
          selection: this.selection.toJSON()
        };
        if (cB)
          for (let nc in cB) {
            let Vc = cB[nc];
            Vc instanceof Ac && null != this.config.address[Vc.id] && (Bc[nc] = Vc.spec.toJSON(this.field(cB[nc]), this))
          }
        return Bc
      }
      static fromJSON(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          nc = arguments.length > 2 ? arguments[2] : void 0;
        if (!cB || "string" != typeof cB.doc) throw new RangeError("Invalid JSON representation for EditorState");
        let Vc = [];
        if (nc)
          for (let Ic in nc)
            if (Object.prototype.hasOwnProperty.call(cB, Ic)) {
              let Bc = nc[Ic],
                rB = cB[Ic];
              Vc.push(Bc.init((cB => Bc.spec.fromJSON(rB, cB))))
            } return DB.create({
          doc: cB.doc,
          selection: Xc.fromJSON(cB.selection),
          extensions: Bc.extensions ? Vc.concat([Bc.extensions]) : Vc
        })
      }
      static create() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          Bc = MB.resolve(cB.extensions || [], new Map),
          nc = cB.doc instanceof ec ? cB.doc : ec.of((cB.doc || "").split(Bc.staticFacet(DB.lineSeparator) || Zc)),
          Vc = cB.selection ? cB.selection instanceof Xc ? cB.selection : Xc.single(cB.selection.anchor, cB.selection.head) : Xc.single(0);
        return Hc(Vc, nc.length), Bc.staticFacet(TB) || (Vc = Vc.asSingle()), new DB(Bc, nc, Vc, Bc.dynamicSlots.map((() => null)), ((cB, Bc) => Bc.create(cB)), null)
      }
      get tabSize() {
        return this.facet(DB.tabSize)
      }
      get lineBreak() {
        return this.facet(DB.lineSeparator) || "\n"
      }
      get readOnly() {
        return this.facet(SB)
      }
      phrase(cB) {
        for (var Bc = arguments.length, nc = new Array(Bc > 1 ? Bc - 1 : 0), Vc = 1; Vc < Bc; Vc++) nc[Vc - 1] = arguments[Vc];
        for (let Ic of this.facet(DB.phrases))
          if (Object.prototype.hasOwnProperty.call(Ic, cB)) {
            cB = Ic[cB];
            break
          } return nc.length && (cB = cB.replace(/\$(\$|\d*)/g, ((cB, Bc) => {
          if ("$" == Bc) return "$";
          let Vc = +(Bc || 1);
          return !Vc || Vc > nc.length ? cB : nc[Vc - 1]
        }))), cB
      }
      languageDataAt(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          Vc = [];
        for (let Ic of this.facet(OB))
          for (let rB of Ic(this, Bc, nc)) Object.prototype.hasOwnProperty.call(rB, cB) && Vc.push(rB[cB]);
        return Vc
      }
      charCategorizer(cB) {
        let Bc = this.languageDataAt("wordChars", cB);
        return vn(Bc.length ? Bc[0] : "")
      }
      wordAt(cB) {
        let {
          text: Bc,
          from: nc,
          length: Vc
        } = this.doc.lineAt(cB), Ic = this.charCategorizer(cB), rB = cB - nc, uc = cB - nc;
        for (; rB > 0;) {
          let cB = Lc(Bc, rB, !1);
          if (Ic(Bc.slice(cB, rB)) != ZB.Word) break;
          rB = cB
        }
        for (; uc < Vc;) {
          let cB = Lc(Bc, uc);
          if (Ic(Bc.slice(uc, cB)) != ZB.Word) break;
          uc = cB
        }
        return rB == uc ? null : Xc.range(rB + nc, uc + nc)
      }
    }

    function NB(cB, Bc) {
      let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        Vc = {};
      for (let Ic of cB)
        for (let cB of Object.keys(Ic)) {
          let Bc = Ic[cB],
            rB = Vc[cB];
          if (void 0 === rB) Vc[cB] = Bc;
          else if (rB === Bc || void 0 === Bc);
          else {
            if (!Object.hasOwnProperty.call(nc, cB)) throw new Error("Config merge conflict for field " + cB);
            Vc[cB] = nc[cB](rB, Bc)
          }
        }
      for (let Ic in Bc) void 0 === Vc[Ic] && (Vc[Ic] = Bc[Ic]);
      return Vc
    }
    DB.allowMultipleSelections = TB, DB.tabSize = Jc.define({
      combine: cB => cB.length ? cB[0] : 4
    }), DB.lineSeparator = fB, DB.readOnly = SB, DB.phrases = Jc.define({
      compare(cB, Bc) {
        let nc = Object.keys(cB),
          Vc = Object.keys(Bc);
        return nc.length == Vc.length && nc.every((nc => cB[nc] == Bc[nc]))
      }
    }), DB.languageData = OB, DB.changeFilter = mn, DB.transactionFilter = eB, DB.transactionExtender = tn, uB.reconfigure = hB.define();
    class EB {
      eq(cB) {
        return this == cB
      }
      range(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : cB;
        return WB.create(cB, Bc, this)
      }
    }

    function oB(cB, Bc) {
      return cB == Bc || cB.constructor == Bc.constructor && cB.eq(Bc)
    }
    EB.prototype.startSide = EB.prototype.endSide = 0, EB.prototype.point = !1, EB.prototype.mapMode = Qc.TrackDel;
    class WB {
      constructor(cB, Bc, nc) {
        this.from = cB, this.to = Bc, this.value = nc
      }
      static create(cB, Bc, nc) {
        return new WB(cB, Bc, nc)
      }
    }

    function wB(cB, Bc) {
      return cB.from - Bc.from || cB.value.startSide - Bc.value.startSide
    }
    class kn {
      constructor(cB, Bc, nc, Vc) {
        this.from = cB, this.to = Bc, this.value = nc, this.xqc = Vc
      }
      get length() {
        return this.to[this.to.length - 1]
      }
      findIndex(cB, Bc, nc) {
        let Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Ic = nc ? this.to : this.from;
        for (let rB = Vc, uc = Ic.length;;) {
          if (rB == uc) return rB;
          let Vc = rB + uc >> 1,
            sc = Ic[Vc] - cB || (nc ? this.value[Vc].endSide : this.value[Vc].startSide) - Bc;
          if (Vc == rB) return sc >= 0 ? rB : uc;
          sc >= 0 ? uc = Vc : rB = Vc + 1
        }
      }
      between(cB, Bc, nc, Vc) {
        for (let Ic = this.findIndex(Bc, -1e9, !0), rB = this.findIndex(nc, 1e9, !1, Ic); Ic < rB; Ic++)
          if (!1 === Vc(this.from[Ic] + cB, this.to[Ic] + cB, this.value[Ic])) return !1
      }
      map(cB, Bc) {
        let nc = [],
          Vc = [],
          Ic = [],
          rB = -1,
          uc = -1;
        for (let sc = 0; sc < this.value.length; sc++) {
          let Mc, Pc, qB = this.value[sc],
            Oc = this.from[sc] + cB,
            Tc = this.to[sc] + cB;
          if (Oc == Tc) {
            let cB = Bc.mapPos(Oc, qB.startSide, qB.mapMode);
            if (null == cB) continue;
            if (Mc = Pc = cB, qB.startSide != qB.endSide && (Pc = Bc.mapPos(Oc, qB.endSide), Pc < Mc)) continue
          } else if (Mc = Bc.mapPos(Oc, qB.startSide), Pc = Bc.mapPos(Tc, qB.endSide), Mc > Pc || Mc == Pc && qB.startSide > 0 && qB.endSide <= 0) continue;
          (Pc - Mc || qB.endSide - qB.startSide) < 0 || (rB < 0 && (rB = Mc), qB.point && (uc = Math.max(uc, Pc - Mc)), nc.push(qB), Vc.push(Mc - rB), Ic.push(Pc - rB))
        }
        return {
          mapped: nc.length ? new kn(Vc, Ic, nc, uc) : null,
          pos: rB
        }
      }
    }
    class XB {
      constructor(cB, Bc, nc, Vc) {
        this.chunkPos = cB, this.chunk = Bc, this.nextLayer = nc, this.xqc = Vc
      }
      static create(cB, Bc, nc, Vc) {
        return new XB(cB, Bc, nc, Vc)
      }
      get length() {
        let cB = this.chunk.length - 1;
        return cB < 0 ? 0 : Math.max(this.chunkEnd(cB), this.nextLayer.length)
      }
      get size() {
        if (this.hV) return 0;
        let cB = this.nextLayer.size;
        for (let Bc of this.chunk) cB += Bc.value.length;
        return cB
      }
      chunkEnd(cB) {
        return this.chunkPos[cB] + this.chunk[cB].length
      }
      update(cB) {
        let {
          add: Bc = [],
          sort: nc = !1,
          filterFrom: Vc = 0,
          filterTo: Ic = this.length
        } = cB, rB = cB.filter;
        if (0 == Bc.length && !rB) return this;
        if (nc && (Bc = Bc.slice().sort(wB)), this.hV) return Bc.length ? XB.of(Bc) : this;
        let uc = new JB(this, null, -1).goto(0),
          sc = 0,
          Mc = [],
          Pc = new HB;
        for (; uc.value || sc < Bc.length;)
          if (sc < Bc.length && (uc.from - Bc[sc].from || uc.startSide - Bc[sc].value.startSide) >= 0) {
            let cB = Bc[sc++];
            Pc.addInner(cB.from, cB.to, cB.value) || Mc.push(cB)
          } else 1 == uc.rangeIndex && uc.chunkIndex < this.chunk.length && (sc == Bc.length || this.chunkEnd(uc.chunkIndex) < Bc[sc].from) && (!rB || Vc > this.chunkEnd(uc.chunkIndex) || Ic < this.chunkPos[uc.chunkIndex]) && Pc.addChunk(this.chunkPos[uc.chunkIndex], this.chunk[uc.chunkIndex]) ? uc.nextChunk() : ((!rB || Vc > uc.to || Ic < uc.from || rB(uc.from, uc.to, uc.value)) && (Pc.addInner(uc.from, uc.to, uc.value) || Mc.push(WB.create(uc.from, uc.to, uc.value))), uc.next());
        return Pc.finishInner(this.nextLayer.hV && !Mc.length ? XB.empty : this.nextLayer.update({
          add: Mc,
          filter: rB,
          filterFrom: Vc,
          filterTo: Ic
        }))
      }
      map(cB) {
        if (cB.empty || this.hV) return this;
        let Bc = [],
          nc = [],
          Vc = -1;
        for (let rB = 0; rB < this.chunk.length; rB++) {
          let Ic = this.chunkPos[rB],
            uc = this.chunk[rB],
            sc = cB.touchesRange(Ic, Ic + uc.length);
          if (!1 === sc) Vc = Math.max(Vc, uc.xqc), Bc.push(uc), nc.push(cB.mapPos(Ic));
          else if (!0 === sc) {
            let {
              mapped: rB,
              pos: sc
            } = uc.map(Ic, cB);
            rB && (Vc = Math.max(Vc, rB.xqc), Bc.push(rB), nc.push(sc))
          }
        }
        let Ic = this.nextLayer.map(cB);
        return 0 == Bc.length ? Ic : new XB(nc, Bc, Ic || XB.empty, Vc)
      }
      between(cB, Bc, nc) {
        if (!this.hV) {
          for (let Vc = 0; Vc < this.chunk.length; Vc++) {
            let Ic = this.chunkPos[Vc],
              rB = this.chunk[Vc];
            if (Bc >= Ic && cB <= Ic + rB.length && !1 === rB.between(Ic, cB - Ic, Bc - Ic, nc)) return
          }
          this.nextLayer.between(cB, Bc, nc)
        }
      }
      iter() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return jn.from([this]).goto(cB)
      }
      get hV() {
        return this.nextLayer == this
      }
      static iter(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return jn.from(cB).goto(Bc)
      }
      static compare(cB, Bc, nc, Vc) {
        let Ic = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1,
          rB = cB.filter((cB => cB.xqc > 0 || !cB.hV && cB.xqc >= Ic)),
          uc = Bc.filter((cB => cB.xqc > 0 || !cB.hV && cB.xqc >= Ic)),
          sc = FB(rB, uc, nc),
          Mc = new KB(rB, sc, Ic),
          Pc = new KB(uc, sc, Ic);
        nc.iterGaps(((cB, Bc, nc) => xn(Mc, cB, Pc, Bc, nc, Vc))), nc.empty && 0 == nc.length && xn(Mc, 0, Pc, 0, 0, Vc)
      }
      static eq(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Vc = arguments.length > 3 ? arguments[3] : void 0;
        null == Vc && (Vc = 999999999);
        let Ic = cB.filter((cB => !cB.hV && Bc.indexOf(cB) < 0)),
          rB = Bc.filter((Bc => !Bc.hV && cB.indexOf(Bc) < 0));
        if (Ic.length != rB.length) return !1;
        if (!Ic.length) return !0;
        let uc = FB(Ic, rB),
          sc = new KB(Ic, uc, 0).goto(nc),
          Mc = new KB(rB, uc, 0).goto(nc);
        for (;;) {
          if (sc.to != Mc.to || !dB(sc.active, Mc.active) || sc.point && (!Mc.point || !oB(sc.point, Mc.point))) return !1;
          if (sc.to > Vc) return !0;
          sc.next(), Mc.next()
        }
      }
      static spans(cB, Bc, nc, Vc) {
        let Ic = new KB(cB, null, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1).goto(Bc),
          rB = Bc,
          uc = Ic.openStart;
        for (;;) {
          let cB = Math.min(Ic.to, nc);
          if (Ic.point) {
            let nc = Ic.activeForPoint(Ic.to),
              sc = Ic.pointFrom < Bc ? nc.length + 1 : Ic.point.startSide < 0 ? nc.length : Math.min(nc.length, uc);
            Vc.point(rB, cB, Ic.point, nc, sc, Ic.pointRank), uc = Math.min(Ic.openEnd(cB), nc.length)
          } else cB > rB && (Vc.span(rB, cB, Ic.active, uc), uc = Ic.openEnd(cB));
          if (Ic.to > nc) return uc + (Ic.point && Ic.to > nc ? 1 : 0);
          rB = Ic.to, Ic.next()
        }
      }
      static of (cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          nc = new HB;
        for (let Vc of cB instanceof WB ? [cB] : Bc ? function(cB) {
            if (cB.length > 1)
              for (let Bc = cB[0], nc = 1; nc < cB.length; nc++) {
                let Vc = cB[nc];
                if (wB(Bc, Vc) > 0) return cB.slice().sort(wB);
                Bc = Vc
              }
            return cB
          }(cB) : cB) nc.add(Vc.from, Vc.to, Vc.value);
        return nc.finish()
      }
      static join(cB) {
        if (!cB.length) return XB.empty;
        let Bc = cB[cB.length - 1];
        for (let nc = cB.length - 2; nc >= 0; nc--)
          for (let Vc = cB[nc]; Vc != XB.empty; Vc = Vc.nextLayer) Bc = new XB(Vc.chunkPos, Vc.chunk, Bc, Math.max(Vc.xqc, Bc.xqc));
        return Bc
      }
    }
    XB.empty = new XB([], [], null, -1), XB.empty.nextLayer = XB.empty;
    class HB {
      finishChunk(cB) {
        this.chunks.push(new kn(this.from, this.to, this.value, this.xqc)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.xqc), this.xqc = -1, cB && (this.from = [], this.to = [], this.value = [])
      }
      constructor() {
        this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.xqc = -1, this.setMaxPoint = -1, this.nextLayer = null
      }
      add(cB, Bc, nc) {
        this.addInner(cB, Bc, nc) || (this.nextLayer || (this.nextLayer = new HB)).add(cB, Bc, nc)
      }
      addInner(cB, Bc, nc) {
        let Vc = cB - this.lastTo || nc.startSide - this.last.endSide;
        if (Vc <= 0 && (cB - this.lastFrom || nc.startSide - this.last.startSide) < 0) throw new Error("Ranges must be added sorted by `from` position and `startSide`");
        return !(Vc < 0) && (250 == this.from.length && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = cB), this.from.push(cB - this.chunkStart), this.to.push(Bc - this.chunkStart), this.last = nc, this.lastFrom = cB, this.lastTo = Bc, this.value.push(nc), nc.point && (this.xqc = Math.max(this.xqc, Bc - cB)), !0)
      }
      addChunk(cB, Bc) {
        if ((cB - this.lastTo || Bc.value[0].startSide - this.last.endSide) < 0) return !1;
        this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, Bc.xqc), this.chunks.push(Bc), this.chunkPos.push(cB);
        let nc = Bc.value.length - 1;
        return this.last = Bc.value[nc], this.lastFrom = Bc.from[nc] + cB, this.lastTo = Bc.to[nc] + cB, !0
      }
      finish() {
        return this.finishInner(XB.empty)
      }
      finishInner(cB) {
        if (this.from.length && this.finishChunk(!1), 0 == this.chunks.length) return cB;
        let Bc = XB.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(cB) : cB, this.setMaxPoint);
        return this.from = null, Bc
      }
    }

    function FB(cB, Bc, nc) {
      let Vc = new Map;
      for (let rB of cB)
        for (let cB = 0; cB < rB.chunk.length; cB++) rB.chunk[cB].xqc <= 0 && Vc.set(rB.chunk[cB], rB.chunkPos[cB]);
      let Ic = new Set;
      for (let rB of Bc)
        for (let cB = 0; cB < rB.chunk.length; cB++) {
          let Bc = Vc.get(rB.chunk[cB]);
          null == Bc || (nc ? nc.mapPos(Bc) : Bc) != rB.chunkPos[cB] || (null === nc || void 0 === nc ? void 0 : nc.touchesRange(Bc, Bc + rB.chunk[cB].length)) || Ic.add(rB.chunk[cB])
        }
      return Ic
    }
    class JB {
      constructor(cB, Bc, nc) {
        let Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.layer = cB, this.skip = Bc, this.dPc = nc, this.rank = Vc
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      get endSide() {
        return this.value ? this.value.endSide : 0
      }
      goto(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(cB, Bc, !1), this
      }
      gotoInner(cB, Bc, nc) {
        for (; this.chunkIndex < this.layer.chunk.length;) {
          let Bc = this.layer.chunk[this.chunkIndex];
          if (!(this.skip && this.skip.has(Bc) || this.layer.chunkEnd(this.chunkIndex) < cB || Bc.xqc < this.dPc)) break;
          this.chunkIndex++, nc = !1
        }
        if (this.chunkIndex < this.layer.chunk.length) {
          let Vc = this.layer.chunk[this.chunkIndex].findIndex(cB - this.layer.chunkPos[this.chunkIndex], Bc, !0);
          (!nc || this.rangeIndex < Vc) && this.setRangeIndex(Vc)
        }
        this.next()
      }
      forward(cB, Bc) {
        (this.to - cB || this.endSide - Bc) < 0 && this.gotoInner(cB, Bc, !0)
      }
      next() {
        for (;;) {
          if (this.chunkIndex == this.layer.chunk.length) {
            this.from = this.to = 1e9, this.value = null;
            break
          } {
            let cB = this.layer.chunkPos[this.chunkIndex],
              Bc = this.layer.chunk[this.chunkIndex],
              nc = cB + Bc.from[this.rangeIndex];
            if (this.from = nc, this.to = cB + Bc.to[this.rangeIndex], this.value = Bc.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.dPc < 0 || this.value.point && this.to - this.from >= this.dPc) break
          }
        }
      }
      setRangeIndex(cB) {
        if (cB == this.layer.chunk[this.chunkIndex].value.length) {
          if (this.chunkIndex++, this.skip)
            for (; this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]);) this.chunkIndex++;
          this.rangeIndex = 0
        } else this.rangeIndex = cB
      }
      nextChunk() {
        this.chunkIndex++, this.rangeIndex = 0, this.next()
      }
      compare(cB) {
        return this.from - cB.from || this.startSide - cB.startSide || this.rank - cB.rank || this.to - cB.to || this.endSide - cB.endSide
      }
    }
    class jn {
      constructor(cB) {
        this.heap = cB
      }
      static from(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          Vc = [];
        for (let Ic = 0; Ic < cB.length; Ic++)
          for (let rB = cB[Ic]; !rB.hV; rB = rB.nextLayer) rB.xqc >= nc && Vc.push(new JB(rB, Bc, nc, Ic));
        return 1 == Vc.length ? Vc[0] : new jn(Vc)
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      goto(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        for (let nc of this.heap) nc.goto(cB, Bc);
        for (let nc = this.heap.length >> 1; nc >= 0; nc--) RB(this.heap, nc);
        return this.next(), this
      }
      forward(cB, Bc) {
        for (let nc of this.heap) nc.forward(cB, Bc);
        for (let nc = this.heap.length >> 1; nc >= 0; nc--) RB(this.heap, nc);
        (this.to - cB || this.value.endSide - Bc) < 0 && this.next()
      }
      next() {
        if (0 == this.heap.length) this.from = this.to = 1e9, this.value = null, this.rank = -1;
        else {
          let cB = this.heap[0];
          this.from = cB.from, this.to = cB.to, this.value = cB.value, this.rank = cB.rank, cB.value && cB.next(), RB(this.heap, 0)
        }
      }
    }

    function RB(cB, Bc) {
      for (let nc = cB[Bc];;) {
        let Vc = 1 + (Bc << 1);
        if (Vc >= cB.length) break;
        let Ic = cB[Vc];
        if (Vc + 1 < cB.length && Ic.compare(cB[Vc + 1]) >= 0 && (Ic = cB[Vc + 1], Vc++), nc.compare(Ic) < 0) break;
        cB[Vc] = nc, cB[Bc] = Ic, Bc = Vc
      }
    }
    class KB {
      constructor(cB, Bc, nc) {
        this.dPc = nc, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = jn.from(cB, Bc, nc)
      }
      goto(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.cursor.goto(cB, Bc), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = cB, this.endSide = Bc, this.openStart = -1, this.next(), this
      }
      forward(cB, Bc) {
        for (; this.minActive > -1 && (this.activeTo[this.minActive] - cB || this.active[this.minActive].endSide - Bc) < 0;) this.removeActive(this.minActive);
        this.cursor.forward(cB, Bc)
      }
      removeActive(cB) {
        AB(this.active, cB), AB(this.activeTo, cB), AB(this.activeRank, cB), this.minActive = cV(this.active, this.activeTo)
      }
      addActive(cB) {
        let Bc = 0,
          {
            value: nc,
            to: Vc,
            rank: Ic
          } = this.cursor;
        for (; Bc < this.activeRank.length && (Ic - this.activeRank[Bc] || Vc - this.activeTo[Bc]) > 0;) Bc++;
        GB(this.active, Bc, nc), GB(this.activeTo, Bc, Vc), GB(this.activeRank, Bc, Ic), cB && GB(cB, Bc, this.cursor.from), this.minActive = cV(this.active, this.activeTo)
      }
      next() {
        let cB = this.to,
          Bc = this.point;
        this.point = null;
        let nc = this.openStart < 0 ? [] : null;
        for (;;) {
          let Vc = this.minActive;
          if (Vc > -1 && (this.activeTo[Vc] - this.cursor.from || this.active[Vc].endSide - this.cursor.startSide) < 0) {
            if (this.activeTo[Vc] > cB) {
              this.to = this.activeTo[Vc], this.endSide = this.active[Vc].endSide;
              break
            }
            this.removeActive(Vc), nc && AB(nc, Vc)
          } else {
            if (!this.cursor.value) {
              this.to = this.endSide = 1e9;
              break
            }
            if (this.cursor.from > cB) {
              this.to = this.cursor.from, this.endSide = this.cursor.startSide;
              break
            } {
              let cB = this.cursor.value;
              if (cB.point) {
                if (!(Bc && this.cursor.to == this.to && this.cursor.from < this.cursor.to)) {
                  this.point = cB, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = cB.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
                  break
                }
                this.cursor.next()
              } else this.addActive(nc), this.cursor.next()
            }
          }
        }
        if (nc) {
          this.openStart = 0;
          for (let Bc = nc.length - 1; Bc >= 0 && nc[Bc] < cB; Bc--) this.openStart++
        }
      }
      activeForPoint(cB) {
        if (!this.active.length) return this.active;
        let Bc = [];
        for (let nc = this.active.length - 1; nc >= 0 && !(this.activeRank[nc] < this.pointRank); nc--)(this.activeTo[nc] > cB || this.activeTo[nc] == cB && this.active[nc].endSide >= this.point.endSide) && Bc.push(this.active[nc]);
        return Bc.reverse()
      }
      openEnd(cB) {
        let Bc = 0;
        for (let nc = this.activeTo.length - 1; nc >= 0 && this.activeTo[nc] > cB; nc--) Bc++;
        return Bc
      }
    }

    function xn(cB, Bc, nc, Vc, Ic, rB) {
      cB.goto(Bc), nc.goto(Vc);
      let uc = Vc + Ic,
        sc = Vc,
        Mc = Vc - Bc,
        Pc = !!rB.boundChange;
      for (let qB = !1;;) {
        let Bc = cB.to + Mc - nc.to,
          Vc = Bc || cB.endSide - nc.endSide,
          Ic = Vc < 0 ? cB.to + Mc : nc.to,
          Oc = Math.min(Ic, uc);
        if (cB.point || nc.point ? (cB.point && nc.point && oB(cB.point, nc.point) && dB(cB.activeForPoint(cB.to), nc.activeForPoint(nc.to)) || rB.comparePoint(sc, Oc, cB.point, nc.point), qB = !1) : (qB && rB.boundChange(sc), Oc > sc && !dB(cB.active, nc.active) && rB.compareRange(sc, Oc, cB.active, nc.active), Pc && Oc < uc && (Bc || cB.openEnd(Ic) != nc.openEnd(Ic)) && (qB = !0)), Ic > uc) break;
        sc = Ic, Vc <= 0 && cB.next(), Vc >= 0 && nc.next()
      }
    }

    function dB(cB, Bc) {
      if (cB.length != Bc.length) return !1;
      for (let nc = 0; nc < cB.length; nc++)
        if (cB[nc] != Bc[nc] && !oB(cB[nc], Bc[nc])) return !1;
      return !0
    }

    function AB(cB, Bc) {
      for (let nc = Bc, Vc = cB.length - 1; nc < Vc; nc++) cB[nc] = cB[nc + 1];
      cB.pop()
    }

    function GB(cB, Bc, nc) {
      for (let Vc = cB.length - 1; Vc >= Bc; Vc--) cB[Vc + 1] = cB[Vc];
      cB[Bc] = nc
    }

    function cV(cB, Bc) {
      let nc = -1,
        Vc = 1e9;
      for (let Ic = 0; Ic < Bc.length; Ic++)(Bc[Ic] - Vc || cB[Ic].endSide - cB[nc].endSide) < 0 && (nc = Ic, Vc = Bc[Ic]);
      return nc
    }

    function Bn(cB, Bc) {
      let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : cB.length,
        Vc = 0;
      for (let Ic = 0; Ic < nc && Ic < cB.length;) 9 == cB.charCodeAt(Ic) ? (Vc += Bc - Vc % Bc, Ic++) : (Vc++, Ic = Lc(cB, Ic));
      return Vc
    }

    function nn(cB, Bc, nc, Vc) {
      for (let Ic = 0, rB = 0;;) {
        if (rB >= Bc) return Ic;
        if (Ic == cB.length) break;
        rB += 9 == cB.charCodeAt(Ic) ? nc - rB % nc : 1, Ic = Lc(cB, Ic)
      }
      return !0 === Vc ? -1 : cB.length
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);