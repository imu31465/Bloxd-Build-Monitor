export const id = 273;
export const ids = [273];
export const modules = {
  39754: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => mW,
      f: () => Xy,
      ChangeSet: () => ny,
      j: () => Mb,
      n: () => Qy,
      r: () => ub,
      v: () => tb,
      y: () => Yy,
      z: () => hb,
      E: () => Qb,
      C: () => jW,
      F: () => Hb,
      I: () => Vb,
      J: () => Ay,
      K: () => Sy,
      O: () => Jb,
      S: () => Ry,
      W: () => ib,
      _: () => rW,
      cb: () => yU,
      db: () => Oy,
      eb: () => bU,
      gb: () => vb
    });
    let Uy = [],
      hy = [];

    function fy(yb) {
      if (yb < 768) return !1;
      for (let bb = 0, Wy = Uy.length;;) {
        let fy = bb + Wy >> 1;
        if (yb < Uy[fy]) Wy = fy;
        else {
          if (!(yb >= hy[fy])) return !0;
          bb = fy + 1
        }
        if (bb == Wy) return !1
      }
    }

    function Zy(yb) {
      return yb >= 127462 && yb <= 127487
    }(() => {
      let yb = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((yb => yb ? parseInt(yb, 36) : 1));
      for (let bb = 0, Wy = 0; bb < yb.length; bb++)(bb % 2 ? hy : Uy).push(Wy += yb[bb])
    })();
    const cb = 8205;

    function Py(yb, bb) {
      return (!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2] ? oy : By)(yb, bb, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function oy(yb, bb, Wy) {
      if (bb == yb.length) return bb;
      bb && ey(yb.charCodeAt(bb)) && qb(yb.charCodeAt(bb - 1)) && bb--;
      let Uy = Ky(yb, bb);
      for (bb += sy(Uy); bb < yb.length;) {
        let hy = Ky(yb, bb);
        if (Uy == cb || hy == cb || Wy && fy(hy)) bb += sy(hy), Uy = hy;
        else {
          if (!Zy(hy)) break;
          {
            let Wy = 0,
              Uy = bb - 2;
            for (; Uy >= 0 && Zy(Ky(yb, Uy));) Wy++, Uy -= 2;
            if (Wy % 2 == 0) break;
            bb += 2
          }
        }
      }
      return bb
    }

    function By(yb, bb, Wy) {
      for (; bb > 0;) {
        let Uy = oy(yb, bb - 2, Wy);
        if (Uy < bb) return Uy;
        bb--
      }
      return 0
    }

    function Ky(yb, bb) {
      let Wy = yb.charCodeAt(bb);
      if (!qb(Wy) || bb + 1 == yb.length) return Wy;
      let Uy = yb.charCodeAt(bb + 1);
      return ey(Uy) ? Uy - 56320 + (Wy - 55296 << 10) + 65536 : Wy
    }

    function ey(yb) {
      return yb >= 56320 && yb < 57344
    }

    function qb(yb) {
      return yb >= 55296 && yb < 56320
    }

    function sy(yb) {
      return yb < 65536 ? 1 : 2
    }
    class Sy {
      lineAt(yb) {
        if (yb < 0 || yb > this.length) throw new RangeError(`Invalid position ${yb} in document of length ${this.length}`);
        return this.lineInner(yb, !1, 1, 0)
      }
      line(yb) {
        if (yb < 1 || yb > this.lines) throw new RangeError(`Invalid line number ${yb} in ${this.lines}-line document`);
        return this.lineInner(yb, !0, 1, 0)
      }
      replace(yb, bb, Wy) {
        [yb, bb] = Gy(this, yb, bb);
        let Uy = [];
        return this.decompose(0, yb, Uy, 2), Wy.length && Wy.decompose(0, Wy.length, Uy, 3), this.decompose(bb, this.length, Uy, 1), ly.from(Uy, this.length - (bb - yb) + Wy.length)
      }
      append(yb) {
        return this.replace(this.length, this.length, yb)
      }
      slice(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        [yb, bb] = Gy(this, yb, bb);
        let Wy = [];
        return this.decompose(yb, bb, Wy, 0), ly.from(Wy, bb - yb)
      }
      eq(yb) {
        if (yb == this) return !0;
        if (yb.length != this.length || yb.lines != this.lines) return !1;
        let bb = this.scanIdentical(yb, 1),
          Wy = this.length - this.scanIdentical(yb, -1),
          Uy = new Ty(this),
          hy = new Ty(yb);
        for (let fy = bb, Zy = bb;;) {
          if (Uy.next(fy), hy.next(fy), fy = 0, Uy.lineBreak != hy.lineBreak || Uy.done != hy.done || Uy.value != hy.value) return !1;
          if (Zy += Uy.value.length, Uy.done || Zy >= Wy) return !0
        }
      }
      iter() {
        return new Ty(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1)
      }
      iterRange(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        return new Vy(this, yb, bb)
      }
      iterLines(yb, bb) {
        let Wy;
        if (null == yb) Wy = this.iter();
        else {
          null == bb && (bb = this.lines + 1);
          let Uy = this.line(yb).from;
          Wy = this.iterRange(Uy, Math.max(Uy, bb == this.lines + 1 ? this.length : bb <= 1 ? 0 : this.line(bb - 1).to))
        }
        return new Jy(Wy)
      }
      toString() {
        return this.sliceString(0)
      }
      toJSON() {
        let yb = [];
        return this.flatten(yb), yb
      }
      constructor() {}
      static of (yb) {
        if (0 == yb.length) throw new RangeError("A document must have at least one line");
        return 1 != yb.length || yb[0] ? yb.length <= 32 ? new Ey(yb) : ly.from(Ey.split(yb, [])) : Sy.empty
      }
    }
    class Ey extends Sy {
      constructor(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(yb) {
          let bb = -1;
          for (let Wy of yb) bb += Wy.length + 1;
          return bb
        }(yb);
        super(), this.text = yb, this.length = bb
      }
      get lines() {
        return this.text.length
      }
      get children() {
        return null
      }
      lineInner(yb, bb, Wy, Uy) {
        for (let hy = 0;; hy++) {
          let fy = this.text[hy],
            Zy = Uy + fy.length;
          if ((bb ? Wy : Zy) >= yb) return new gb(Uy, Zy, Wy, fy);
          Uy = Zy + 1, Wy++
        }
      }
      decompose(yb, bb, Wy, Uy) {
        let hy = yb <= 0 && bb >= this.length ? this : new Ey(Cy(this.text, yb, bb), Math.min(bb, this.length) - Math.max(0, yb));
        if (1 & Uy) {
          let yb = Wy.pop(),
            bb = mb(hy.text, yb.text.slice(), 0, hy.length);
          if (bb.length <= 32) Wy.push(new Ey(bb, yb.length + hy.length));
          else {
            let yb = bb.length >> 1;
            Wy.push(new Ey(bb.slice(0, yb)), new Ey(bb.slice(yb)))
          }
        } else Wy.push(hy)
      }
      replace(yb, bb, Wy) {
        if (!(Wy instanceof Ey)) return super.replace(yb, bb, Wy);
        [yb, bb] = Gy(this, yb, bb);
        let Uy = mb(this.text, mb(Wy.text, Cy(this.text, 0, yb)), bb),
          hy = this.length + Wy.length - (bb - yb);
        return Uy.length <= 32 ? new Ey(Uy, hy) : ly.from(Ey.split(Uy, []), hy)
      }
      sliceString(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [yb, bb] = Gy(this, yb, bb);
        let Uy = "";
        for (let hy = 0, fy = 0; hy <= bb && fy < this.text.length; fy++) {
          let Zy = this.text[fy],
            cb = hy + Zy.length;
          hy > yb && fy && (Uy += Wy), yb < cb && bb > hy && (Uy += Zy.slice(Math.max(0, yb - hy), bb - hy)), hy = cb + 1
        }
        return Uy
      }
      flatten(yb) {
        for (let bb of this.text) yb.push(bb)
      }
      scanIdentical() {
        return 0
      }
      static split(yb, bb) {
        let Wy = [],
          Uy = -1;
        for (let hy of yb) Wy.push(hy), Uy += hy.length + 1, 32 == Wy.length && (bb.push(new Ey(Wy, Uy)), Wy = [], Uy = -1);
        return Uy > -1 && bb.push(new Ey(Wy, Uy)), bb
      }
    }
    class ly extends Sy {
      constructor(yb, bb) {
        super(), this.children = yb, this.length = bb, this.lines = 0;
        for (let Wy of yb) this.lines += Wy.lines
      }
      lineInner(yb, bb, Wy, Uy) {
        for (let hy = 0;; hy++) {
          let fy = this.children[hy],
            Zy = Uy + fy.length,
            cb = Wy + fy.lines - 1;
          if ((bb ? cb : Zy) >= yb) return fy.lineInner(yb, bb, Wy, Uy);
          Uy = Zy + 1, Wy = cb + 1
        }
      }
      decompose(yb, bb, Wy, Uy) {
        for (let hy = 0, fy = 0; fy <= bb && hy < this.children.length; hy++) {
          let Zy = this.children[hy],
            cb = fy + Zy.length;
          if (yb <= cb && bb >= fy) {
            let hy = Uy & ((fy <= yb ? 1 : 0) | (cb >= bb ? 2 : 0));
            fy >= yb && cb <= bb && !hy ? Wy.push(Zy) : Zy.decompose(yb - fy, bb - fy, Wy, hy)
          }
          fy = cb + 1
        }
      }
      replace(yb, bb, Wy) {
        if ([yb, bb] = Gy(this, yb, bb), Wy.lines < this.lines)
          for (let Uy = 0, hy = 0; Uy < this.children.length; Uy++) {
            let fy = this.children[Uy],
              Zy = hy + fy.length;
            if (yb >= hy && bb <= Zy) {
              let cb = fy.replace(yb - hy, bb - hy, Wy),
                Py = this.lines - fy.lines + cb.lines;
              if (cb.lines < Py >> 4 && cb.lines > Py >> 6) {
                let hy = this.children.slice();
                return hy[Uy] = cb, new ly(hy, this.length - (bb - yb) + Wy.length)
              }
              return super.replace(hy, Zy, cb)
            }
            hy = Zy + 1
          }
        return super.replace(yb, bb, Wy)
      }
      sliceString(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [yb, bb] = Gy(this, yb, bb);
        let Uy = "";
        for (let hy = 0, fy = 0; hy < this.children.length && fy <= bb; hy++) {
          let Zy = this.children[hy],
            cb = fy + Zy.length;
          fy > yb && hy && (Uy += Wy), yb < cb && bb > fy && (Uy += Zy.sliceString(yb - fy, bb - fy, Wy)), fy = cb + 1
        }
        return Uy
      }
      flatten(yb) {
        for (let bb of this.children) bb.flatten(yb)
      }
      scanIdentical(yb, bb) {
        if (!(yb instanceof ly)) return 0;
        let Wy = 0,
          [Uy, hy, fy, Zy] = bb > 0 ? [0, 0, this.children.length, yb.children.length] : [this.children.length - 1, yb.children.length - 1, -1, -1];
        for (;; Uy += bb, hy += bb) {
          if (Uy == fy || hy == Zy) return Wy;
          let cb = this.children[Uy],
            Py = yb.children[hy];
          if (cb != Py) return Wy + cb.scanIdentical(Py, bb);
          Wy += cb.length + 1
        }
      }
      static from(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yb.reduce(((yb, bb) => yb + bb.length + 1), -1),
          Wy = 0;
        for (let ey of yb) Wy += ey.lines;
        if (Wy < 32) {
          let Wy = [];
          for (let bb of yb) bb.flatten(Wy);
          return new Ey(Wy, bb)
        }
        let Uy = Math.max(32, Wy >> 5),
          hy = Uy << 1,
          fy = Uy >> 1,
          Zy = [],
          cb = 0,
          Py = -1,
          oy = [];

        function By(yb) {
          let bb;
          if (yb.lines > hy && yb instanceof ly)
            for (let Wy of yb.children) By(Wy);
          else yb.lines > fy && (cb > fy || !cb) ? (Ky(), Zy.push(yb)) : yb instanceof Ey && cb && (bb = oy[oy.length - 1]) instanceof Ey && yb.lines + bb.lines <= 32 ? (cb += yb.lines, Py += yb.length + 1, oy[oy.length - 1] = new Ey(bb.text.concat(yb.text), bb.length + 1 + yb.length)) : (cb + yb.lines > Uy && Ky(), cb += yb.lines, Py += yb.length + 1, oy.push(yb))
        }

        function Ky() {
          0 != cb && (Zy.push(1 == oy.length ? oy[0] : ly.from(oy, Py)), Py = -1, cb = oy.length = 0)
        }
        for (let ey of yb) By(ey);
        return Ky(), 1 == Zy.length ? Zy[0] : new ly(Zy, bb)
      }
    }

    function mb(yb, bb) {
      let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e9;
      for (let hy = 0, fy = 0, Zy = !0; fy < yb.length && hy <= Uy; fy++) {
        let cb = yb[fy],
          Py = hy + cb.length;
        Py >= Wy && (Py > Uy && (cb = cb.slice(0, Uy - hy)), hy < Wy && (cb = cb.slice(Wy - hy)), Zy ? (bb[bb.length - 1] += cb, Zy = !1) : bb.push(cb)), hy = Py + 1
      }
      return bb
    }

    function Cy(yb, bb, Wy) {
      return mb(yb, [""], bb, Wy)
    }
    Sy.empty = new Ey([""], 0);
    class Ty {
      constructor(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.dir = bb, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [yb], this.offsets = [bb > 0 ? 1 : (yb instanceof Ey ? yb.text.length : yb.children.length) << 1]
      }
      nextInner(yb, bb) {
        for (this.done = this.lineBreak = !1;;) {
          let Wy = this.nodes.length - 1,
            Uy = this.nodes[Wy],
            hy = this.offsets[Wy],
            fy = hy >> 1,
            Zy = Uy instanceof Ey ? Uy.text.length : Uy.children.length;
          if (fy == (bb > 0 ? Zy : 0)) {
            if (0 == Wy) return this.done = !0, this.value = "", this;
            bb > 0 && this.offsets[Wy - 1]++, this.nodes.pop(), this.offsets.pop()
          } else if ((1 & hy) == (bb > 0 ? 0 : 1)) {
            if (this.offsets[Wy] += bb, 0 == yb) return this.lineBreak = !0, this.value = "\n", this;
            yb--
          } else if (Uy instanceof Ey) {
            let hy = Uy.text[fy + (bb < 0 ? -1 : 0)];
            if (this.offsets[Wy] += bb, hy.length > Math.max(0, yb)) return this.value = 0 == yb ? hy : bb > 0 ? hy.slice(yb) : hy.slice(0, hy.length - yb), this;
            yb -= hy.length
          } else {
            let hy = Uy.children[fy + (bb < 0 ? -1 : 0)];
            yb > hy.length ? (yb -= hy.length, this.offsets[Wy] += bb) : (bb < 0 && this.offsets[Wy]--, this.nodes.push(hy), this.offsets.push(bb > 0 ? 1 : (hy instanceof Ey ? hy.text.length : hy.children.length) << 1))
          }
        }
      }
      next() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return yb < 0 && (this.nextInner(-yb, -this.dir), yb = this.value.length), this.nextInner(yb, this.dir)
      }
    }
    class Vy {
      constructor(yb, bb, Wy) {
        this.value = "", this.done = !1, this.cursor = new Ty(yb, bb > Wy ? -1 : 1), this.pos = bb > Wy ? yb.length : 0, this.from = Math.min(bb, Wy), this.to = Math.max(bb, Wy)
      }
      nextInner(yb, bb) {
        if (bb < 0 ? this.pos <= this.from : this.pos >= this.to) return this.value = "", this.done = !0, this;
        yb += Math.max(0, bb < 0 ? this.pos - this.to : this.from - this.pos);
        let Wy = bb < 0 ? this.pos - this.from : this.to - this.pos;
        yb > Wy && (yb = Wy), Wy -= yb;
        let {
          value: Uy
        } = this.cursor.next(yb);
        return this.pos += (Uy.length + yb) * bb, this.value = Uy.length <= Wy ? Uy : bb < 0 ? Uy.slice(Uy.length - Wy) : Uy.slice(0, Wy), this.done = !this.value, this
      }
      next() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return yb < 0 ? yb = Math.max(yb, this.from - this.pos) : yb > 0 && (yb = Math.min(yb, this.to - this.pos)), this.nextInner(yb, this.cursor.dir)
      }
      get lineBreak() {
        return this.cursor.lineBreak && "" != this.value
      }
    }
    class Jy {
      constructor(yb) {
        this.inner = yb, this.afterBreak = !0, this.value = "", this.done = !1
      }
      next() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          {
            done: bb,
            lineBreak: Wy,
            value: Uy
          } = this.inner.next(yb);
        return bb && this.afterBreak ? (this.value = "", this.afterBreak = !1) : bb ? (this.done = !0, this.value = "") : Wy ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = Uy, this.afterBreak = !1), this
      }
      get lineBreak() {
        return !1
      }
    }
    "undefined" != typeof Symbol && (Sy.prototype[Symbol.iterator] = function() {
      return this.iter()
    }, Ty.prototype[Symbol.iterator] = Vy.prototype[Symbol.iterator] = Jy.prototype[Symbol.iterator] = function() {
      return this
    });
    class gb {
      constructor(yb, bb, Wy, Uy) {
        this.from = yb, this.to = bb, this.number = Wy, this.text = Uy
      }
      get length() {
        return this.to - this.from
      }
    }

    function Gy(yb, bb, Wy) {
      return [bb = Math.max(0, Math.min(yb.length, bb)), Math.max(bb, Math.min(yb.length, Wy))]
    }

    function Oy(yb, bb) {
      return Py(yb, bb, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function Ry(yb, bb) {
      let Wy = yb.charCodeAt(bb);
      if (!((Uy = Wy) >= 55296 && Uy < 56320) || bb + 1 == yb.length) return Wy;
      var Uy;
      let hy = yb.charCodeAt(bb + 1);
      return function(yb) {
        return yb >= 56320 && yb < 57344
      }(hy) ? hy - 56320 + (Wy - 55296 << 10) + 65536 : Wy
    }

    function vb(yb) {
      return yb <= 65535 ? String.fromCharCode(yb) : (yb -= 65536, String.fromCharCode(55296 + (yb >> 10), 56320 + (1023 & yb)))
    }

    function ib(yb) {
      return yb < 65536 ? 1 : 2
    }
    const My = /\r\n?|\n/;
    var Yy = function(yb) {
      return yb[yb.Simple = 0] = "Simple", yb[yb.TrackDel = 1] = "TrackDel", yb[yb.TrackBefore = 2] = "TrackBefore", yb[yb.TrackAfter = 3] = "TrackAfter", yb
    }(Yy || (Yy = {}));
    class Xy {
      constructor(yb) {
        this.sections = yb
      }
      get length() {
        let yb = 0;
        for (let bb = 0; bb < this.sections.length; bb += 2) yb += this.sections[bb];
        return yb
      }
      get newLength() {
        let yb = 0;
        for (let bb = 0; bb < this.sections.length; bb += 2) {
          let Wy = this.sections[bb + 1];
          yb += Wy < 0 ? this.sections[bb] : Wy
        }
        return yb
      }
      get empty() {
        return 0 == this.sections.length || 2 == this.sections.length && this.sections[1] < 0
      }
      iterGaps(yb) {
        for (let bb = 0, Wy = 0, Uy = 0; bb < this.sections.length;) {
          let hy = this.sections[bb++],
            fy = this.sections[bb++];
          fy < 0 ? (yb(Wy, Uy, hy), Uy += hy) : Uy += fy, Wy += hy
        }
      }
      iterChangedRanges(yb) {
        Hy(this, yb, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get invertedDesc() {
        let yb = [];
        for (let bb = 0; bb < this.sections.length;) {
          let Wy = this.sections[bb++],
            Uy = this.sections[bb++];
          Uy < 0 ? yb.push(Wy, Uy) : yb.push(Uy, Wy)
        }
        return new Xy(yb)
      }
      composeDesc(yb) {
        return this.empty ? yb : yb.empty ? this : Fy(this, yb)
      }
      mapDesc(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return yb.empty ? this : ab(this, yb, bb)
      }
      mapPos(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Yy.Simple,
          Uy = 0,
          hy = 0;
        for (let fy = 0; fy < this.sections.length;) {
          let Zy = this.sections[fy++],
            cb = this.sections[fy++],
            Py = Uy + Zy;
          if (cb < 0) {
            if (Py > yb) return hy + (yb - Uy);
            hy += Zy
          } else {
            if (Wy != Yy.Simple && Py >= yb && (Wy == Yy.TrackDel && Uy < yb && Py > yb || Wy == Yy.TrackBefore && Uy < yb || Wy == Yy.TrackAfter && Py > yb)) return null;
            if (Py > yb || Py == yb && bb < 0 && !Zy) return yb == Uy || bb < 0 ? hy : hy + cb;
            hy += cb
          }
          Uy = Py
        }
        if (yb > Uy) throw new RangeError(`Position ${yb} is out of range for changeset of length ${Uy}`);
        return hy
      }
      touchesRange(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yb;
        for (let Wy = 0, Uy = 0; Wy < this.sections.length && Uy <= bb;) {
          let hy = Uy + this.sections[Wy++];
          if (this.sections[Wy++] >= 0 && Uy <= bb && hy >= yb) return !(Uy < yb && hy > bb) || "cover";
          Uy = hy
        }
        return !1
      }
      toString() {
        let yb = "";
        for (let bb = 0; bb < this.sections.length;) {
          let Wy = this.sections[bb++],
            Uy = this.sections[bb++];
          yb += (yb ? " " : "") + Wy + (Uy >= 0 ? ":" + Uy : "")
        }
        return yb
      }
      toJSON() {
        return this.sections
      }
      static fromJSON(yb) {
        if (!Array.isArray(yb) || yb.length % 2 || yb.some((yb => "number" != typeof yb))) throw new RangeError("Invalid JSON representation of ChangeDesc");
        return new Xy(yb)
      }
      static create(yb) {
        return new Xy(yb)
      }
    }
    class ny extends Xy {
      constructor(yb, bb) {
        super(yb), this.inserted = bb
      }
      apply(yb) {
        if (this.length != yb.length) throw new RangeError("Applying change set to a document with the wrong length");
        return Hy(this, ((bb, Wy, Uy, hy, fy) => yb = yb.replace(Uy, Uy + (Wy - bb), fy)), !1), yb
      }
      mapDesc(yb) {
        return ab(this, yb, arguments.length > 1 && void 0 !== arguments[1] && arguments[1], !0)
      }
      invert(yb) {
        let bb = this.sections.slice(),
          Wy = [];
        for (let Uy = 0, hy = 0; Uy < bb.length; Uy += 2) {
          let fy = bb[Uy],
            Zy = bb[Uy + 1];
          if (Zy >= 0) {
            bb[Uy] = Zy, bb[Uy + 1] = fy;
            let cb = Uy >> 1;
            for (; Wy.length < cb;) Wy.push(Sy.empty);
            Wy.push(fy ? yb.slice(hy, hy + fy) : Sy.empty)
          }
          hy += fy
        }
        return new ny(bb, Wy)
      }
      compose(yb) {
        return this.empty ? yb : yb.empty ? this : Fy(this, yb, !0)
      }
      map(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return yb.empty ? this : ab(this, yb, bb, !0)
      }
      iterChanges(yb) {
        Hy(this, yb, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get desc() {
        return Xy.create(this.sections)
      }
      filter(yb) {
        let bb = [],
          Wy = [],
          Uy = [],
          hy = new py(this);
        yb: for (let fy = 0, Zy = 0;;) {
          let cb = fy == yb.length ? 1e9 : yb[fy++];
          for (; Zy < cb || Zy == cb && 0 == hy.len;) {
            if (hy.done) break yb;
            let yb = Math.min(hy.len, cb - Zy);
            uy(Uy, yb, -1);
            let fy = -1 == hy.ins ? -1 : 0 == hy.off ? hy.ins : 0;
            uy(bb, yb, fy), fy > 0 && rb(Wy, bb, hy.text), hy.forward(yb), Zy += yb
          }
          let Py = yb[fy++];
          for (; Zy < Py;) {
            if (hy.done) break yb;
            let yb = Math.min(hy.len, Py - Zy);
            uy(bb, yb, -1), uy(Uy, yb, -1 == hy.ins ? -1 : 0 == hy.off ? hy.ins : 0), hy.forward(yb), Zy += yb
          }
        }
        return {
          changes: new ny(bb, Wy),
          filtered: Xy.create(Uy)
        }
      }
      toJSON() {
        let yb = [];
        for (let bb = 0; bb < this.sections.length; bb += 2) {
          let Wy = this.sections[bb],
            Uy = this.sections[bb + 1];
          Uy < 0 ? yb.push(Wy) : 0 == Uy ? yb.push([Wy]) : yb.push([Wy].concat(this.inserted[bb >> 1].toJSON()))
        }
        return yb
      }
      static of (yb, bb, Wy) {
        let Uy = [],
          hy = [],
          fy = 0,
          Zy = null;

        function cb() {
          if (!(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && !Uy.length) return;
          fy < bb && uy(Uy, bb - fy, -1);
          let yb = new ny(Uy, hy);
          Zy = Zy ? Zy.compose(yb.map(Zy)) : yb, Uy = [], hy = [], fy = 0
        }
        return function yb(Py) {
          if (Array.isArray(Py))
            for (let bb of Py) yb(bb);
          else if (Py instanceof ny) {
            if (Py.length != bb) throw new RangeError(`Mismatched change set length (got ${Py.length}, expected ${bb})`);
            cb(), Zy = Zy ? Zy.compose(Py.map(Zy)) : Py
          } else {
            let {
              from: yb,
              to: Zy = yb,
              insert: oy
            } = Py;
            if (yb > Zy || yb < 0 || Zy > bb) throw new RangeError(`Invalid change range ${yb} to ${Zy} (in doc of length ${bb})`);
            let By = oy ? "string" == typeof oy ? Sy.of(oy.split(Wy || My)) : oy : Sy.empty,
              Ky = By.length;
            if (yb == Zy && 0 == Ky) return;
            yb < fy && cb(), yb > fy && uy(Uy, yb - fy, -1), uy(Uy, Zy - yb, Ky), rb(hy, Uy, By), fy = Zy
          }
        }(yb), cb(!Zy), Zy
      }
      static empty(yb) {
        return new ny(yb ? [yb, -1] : [], [])
      }
      static fromJSON(yb) {
        if (!Array.isArray(yb)) throw new RangeError("Invalid JSON representation of ChangeSet");
        let bb = [],
          Wy = [];
        for (let Uy = 0; Uy < yb.length; Uy++) {
          let hy = yb[Uy];
          if ("number" == typeof hy) bb.push(hy, -1);
          else {
            if (!Array.isArray(hy) || "number" != typeof hy[0] || hy.some(((yb, bb) => bb && "string" != typeof yb))) throw new RangeError("Invalid JSON representation of ChangeSet");
            if (1 == hy.length) bb.push(hy[0], 0);
            else {
              for (; Wy.length < Uy;) Wy.push(Sy.empty);
              Wy[Uy] = Sy.of(hy.slice(1)), bb.push(hy[0], Wy[Uy].length)
            }
          }
        }
        return new ny(bb, Wy)
      }
      static createSet(yb, bb) {
        return new ny(yb, bb)
      }
    }

    function uy(yb, bb, Wy) {
      let Uy = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (0 == bb && Wy <= 0) return;
      let hy = yb.length - 2;
      hy >= 0 && Wy <= 0 && Wy == yb[hy + 1] ? yb[hy] += bb : hy >= 0 && 0 == bb && 0 == yb[hy] ? yb[hy + 1] += Wy : Uy ? (yb[hy] += bb, yb[hy + 1] += Wy) : yb.push(bb, Wy)
    }

    function rb(yb, bb, Wy) {
      if (0 == Wy.length) return;
      let Uy = bb.length - 2 >> 1;
      if (Uy < yb.length) yb[yb.length - 1] = yb[yb.length - 1].append(Wy);
      else {
        for (; yb.length < Uy;) yb.push(Sy.empty);
        yb.push(Wy)
      }
    }

    function Hy(yb, bb, Wy) {
      let Uy = yb.inserted;
      for (let hy = 0, fy = 0, Zy = 0; Zy < yb.sections.length;) {
        let cb = yb.sections[Zy++],
          Py = yb.sections[Zy++];
        if (Py < 0) hy += cb, fy += cb;
        else {
          let oy = hy,
            By = fy,
            Ky = Sy.empty;
          for (; oy += cb, By += Py, Py && Uy && (Ky = Ky.append(Uy[Zy - 2 >> 1])), !(Wy || Zy == yb.sections.length || yb.sections[Zy + 1] < 0);) cb = yb.sections[Zy++], Py = yb.sections[Zy++];
          bb(hy, oy, fy, By, Ky), hy = oy, fy = By
        }
      }
    }

    function ab(yb, bb, Wy) {
      let Uy = [],
        hy = arguments.length > 3 && void 0 !== arguments[3] && arguments[3] ? [] : null,
        fy = new py(yb),
        Zy = new py(bb),
        cb = 0;
      for (let Py = -1;;) {
        if (++cb > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - likely malformed ChangeSet");
        if (fy.done && Zy.len || Zy.done && fy.len) throw new Error("Mismatched change set lengths");
        if (-1 == fy.ins && -1 == Zy.ins) {
          let yb = Math.min(fy.len, Zy.len);
          uy(Uy, yb, -1), fy.forward(yb), Zy.forward(yb)
        } else if (Zy.ins >= 0 && (fy.ins < 0 || Py == fy.i || 0 == fy.off && (Zy.len < fy.len || Zy.len == fy.len && !Wy))) {
          let yb = Zy.len;
          for (uy(Uy, Zy.ins, -1); yb;) {
            if (++cb > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-b");
            let bb = Math.min(fy.len, yb);
            fy.ins >= 0 && Py < fy.i && fy.len <= bb && (uy(Uy, 0, fy.ins), hy && rb(hy, Uy, fy.text), Py = fy.i), fy.forward(bb), yb -= bb
          }
          Zy.next()
        } else {
          if (!(fy.ins >= 0)) {
            if (fy.done && Zy.done) return hy ? ny.createSet(Uy, hy) : Xy.create(Uy);
            throw new Error("Mismatched change set lengths")
          } {
            let yb = 0,
              bb = fy.len;
            for (; bb;) {
              if (++cb > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-a");
              if (-1 == Zy.ins) {
                let Wy = Math.min(bb, Zy.len);
                yb += Wy, bb -= Wy, Zy.forward(Wy)
              } else {
                if (!(0 == Zy.ins && Zy.len < bb)) break;
                bb -= Zy.len, Zy.next()
              }
            }
            uy(Uy, yb, Py < fy.i ? fy.ins : 0), hy && Py < fy.i && rb(hy, Uy, fy.text), Py = fy.i, fy.forward(fy.len - bb)
          }
        }
      }
    }

    function Fy(yb, bb) {
      let Wy = [],
        Uy = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? [] : null,
        hy = new py(yb),
        fy = new py(bb),
        Zy = 0;
      for (let cb = !1;;) {
        if (++Zy > 2e6) throw new Error("BLOXD CODEMIRROR: composeSets exceeded max iterations - likely malformed ChangeSet");
        if (hy.done && fy.done) return Uy ? ny.createSet(Wy, Uy) : Xy.create(Wy);
        if (0 == hy.ins) uy(Wy, hy.len, 0, cb), hy.next();
        else if (0 != fy.len || fy.done) {
          if (hy.done || fy.done) throw new Error("Mismatched change set lengths");
          {
            let yb = Math.min(hy.len2, fy.len),
              bb = Wy.length;
            if (-1 == hy.ins) {
              let bb = -1 == fy.ins ? -1 : fy.off ? 0 : fy.ins;
              uy(Wy, yb, bb, cb), Uy && bb && rb(Uy, Wy, fy.text)
            } else - 1 == fy.ins ? (uy(Wy, hy.off ? 0 : hy.len, yb, cb), Uy && rb(Uy, Wy, hy.textBit(yb))) : (uy(Wy, hy.off ? 0 : hy.len, fy.off ? 0 : fy.ins, cb), Uy && !fy.off && rb(Uy, Wy, fy.text));
            cb = (hy.ins > yb || fy.ins >= 0 && fy.len > yb) && (cb || Wy.length > bb), hy.forward2(yb), fy.forward(yb)
          }
        } else uy(Wy, 0, fy.ins, cb), Uy && rb(Uy, Wy, fy.text), fy.next()
      }
    }
    class py {
      constructor(yb) {
        this.set = yb, this.i = 0, this.next()
      }
      next() {
        let {
          sections: yb
        } = this.set;
        this.i < yb.length ? (this.len = yb[this.i++], this.ins = yb[this.i++]) : (this.len = 0, this.ins = -2), this.off = 0
      }
      get done() {
        return -2 == this.ins
      }
      get len2() {
        return this.ins < 0 ? this.len : this.ins
      }
      get text() {
        let {
          inserted: yb
        } = this.set, bb = this.i - 2 >> 1;
        return bb >= yb.length ? Sy.empty : yb[bb]
      }
      textBit(yb) {
        let {
          inserted: bb
        } = this.set, Wy = this.i - 2 >> 1;
        return Wy >= bb.length && !yb ? Sy.empty : bb[Wy].slice(this.off, null == yb ? void 0 : this.off + yb)
      }
      forward(yb) {
        yb == this.len ? this.next() : (this.len -= yb, this.off += yb)
      }
      forward2(yb) {
        -1 == this.ins ? this.forward(yb) : yb == this.ins ? this.next() : (this.ins -= yb, this.off += yb)
      }
    }
    class Ly {
      constructor(yb, bb, Wy) {
        this.from = yb, this.to = bb, this.flags = Wy
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
        let yb = 7 & this.flags;
        return 7 == yb ? null : yb
      }
      get goalColumn() {
        let yb = this.flags >> 6;
        return 16777215 == yb ? void 0 : yb
      }
      map(yb) {
        let bb, Wy, Uy = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return this.empty ? bb = Wy = yb.mapPos(this.from, Uy) : (bb = yb.mapPos(this.from, 1), Wy = yb.mapPos(this.to, -1)), bb == this.from && Wy == this.to ? this : new Ly(bb, Wy, this.flags)
      }
      extend(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yb,
          Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (yb <= this.anchor && bb >= this.anchor) return Qy.range(yb, bb, void 0, void 0, Wy);
        let Uy = Math.abs(yb - this.anchor) > Math.abs(bb - this.anchor) ? yb : bb;
        return Qy.range(this.anchor, Uy, void 0, void 0, Wy)
      }
      eq(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.anchor == yb.anchor && this.head == yb.head && this.goalColumn == yb.goalColumn && (!bb || !this.empty || this.assoc == yb.assoc)
      }
      toJSON() {
        return {
          anchor: this.anchor,
          head: this.head
        }
      }
      static fromJSON(yb) {
        if (!yb || "number" != typeof yb.anchor || "number" != typeof yb.head) throw new RangeError("Invalid JSON representation for SelectionRange");
        return Qy.range(yb.anchor, yb.head)
      }
      static create(yb, bb, Wy) {
        return new Ly(yb, bb, Wy)
      }
    }
    class Qy {
      constructor(yb, bb) {
        this.lZ = yb, this.mainIndex = bb
      }
      map(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return yb.empty ? this : Qy.create(this.lZ.map((Wy => Wy.map(yb, bb))), this.mainIndex)
      }
      eq(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.lZ.length != yb.lZ.length || this.mainIndex != yb.mainIndex) return !1;
        for (let Wy = 0; Wy < this.lZ.length; Wy++)
          if (!this.lZ[Wy].eq(yb.lZ[Wy], bb)) return !1;
        return !0
      }
      get main() {
        return this.lZ[this.mainIndex]
      }
      asSingle() {
        return 1 == this.lZ.length ? this : new Qy([this.main], 0)
      }
      addRange(yb) {
        let bb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return Qy.create([yb].concat(this.lZ), bb ? 0 : this.mainIndex + 1)
      }
      replaceRange(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.mainIndex,
          Wy = this.lZ.slice();
        return Wy[bb] = yb, Qy.create(Wy, this.mainIndex)
      }
      toJSON() {
        return {
          lZ: this.lZ.map((yb => yb.toJSON())),
          main: this.mainIndex
        }
      }
      static fromJSON(yb) {
        if (!yb || !Array.isArray(yb.lZ) || "number" != typeof yb.main || yb.main >= yb.lZ.length) throw new RangeError("Invalid JSON representation for EditorSelection");
        return new Qy(yb.lZ.map((yb => Ly.fromJSON(yb))), yb.main)
      }
      static single(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yb;
        return new Qy([Qy.range(yb, bb)], 0)
      }
      static create(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (0 == yb.length) throw new RangeError("A selection needs at least one range");
        for (let Wy = 0, Uy = 0; Uy < yb.length; Uy++) {
          let hy = yb[Uy];
          if (hy.empty ? hy.from <= Wy : hy.from < Wy) return Qy.normalized(yb.slice(), bb);
          Wy = hy.to
        }
        return new Qy(yb, bb)
      }
      static cursor(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Wy = arguments.length > 2 ? arguments[2] : void 0,
          Uy = arguments.length > 3 ? arguments[3] : void 0;
        return Ly.create(yb, yb, (0 == bb ? 0 : bb < 0 ? 8 : 16) | (null == Wy ? 7 : Math.min(6, Wy)) | (null !== Uy && void 0 !== Uy ? Uy : 16777215) << 6)
      }
      static range(yb, bb, Wy, Uy, hy) {
        let fy = (null !== Wy && void 0 !== Wy ? Wy : 16777215) << 6 | (null == Uy ? 7 : Math.min(6, Uy));
        return hy || yb == bb || (hy = bb < yb ? 1 : -1), bb < yb ? Ly.create(bb, yb, 48 | fy) : Ly.create(yb, bb, (hy ? hy < 0 ? 8 : 16 : 0) | fy)
      }
      static normalized(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Wy = yb[bb];
        yb.sort(((yb, bb) => yb.from - bb.from)), bb = yb.indexOf(Wy);
        for (let Uy = 1; Uy < yb.length; Uy++) {
          let Wy = yb[Uy],
            hy = yb[Uy - 1];
          if (Wy.empty ? Wy.from <= hy.to : Wy.from < hy.to) {
            let fy = hy.from,
              Zy = Math.max(Wy.to, hy.to);
            Uy <= bb && bb--, yb.splice(--Uy, 2, Wy.anchor > Wy.head ? Qy.range(Zy, fy) : Qy.range(fy, Zy))
          }
        }
        return new Qy(yb, bb)
      }
    }

    function jb(yb, bb) {
      for (let Wy of yb.lZ)
        if (Wy.to > bb) throw new RangeError("Selection points outside of document")
    }
    let Dy = 0;
    class tb {
      constructor(yb, bb, Wy, Uy, hy) {
        this.combine = yb, this.compareInput = bb, this.compare = Wy, this.isStatic = Uy, this.id = Dy++, this.default = yb([]), this.extensions = "function" == typeof hy ? hy(this) : hy
      }
      get reader() {
        return this
      }
      static define() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return new tb(yb.combine || (yb => yb), yb.compareInput || ((yb, bb) => yb === bb), yb.compare || (yb.combine ? (yb, bb) => yb === bb : wy), !!yb.static, yb.enables)
      }
      of(yb) {
        return new kb([], this, 0, yb)
      }
      compute(yb, bb) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new kb(yb, this, 1, bb)
      }
      computeN(yb, bb) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new kb(yb, this, 2, bb)
      }
      from(yb, bb) {
        return bb || (bb = yb => yb), this.compute([yb], (Wy => bb(Wy.field(yb))))
      }
    }

    function wy(yb, bb) {
      return yb == bb || yb.length == bb.length && yb.every(((yb, Wy) => yb === bb[Wy]))
    }
    class kb {
      constructor(yb, bb, Wy, Uy) {
        this.dependencies = yb, this.facet = bb, this.type = Wy, this.value = Uy, this.id = Dy++
      }
      dynamicSlot(yb) {
        var bb;
        let Wy = this.value,
          Uy = this.facet.compareInput,
          hy = this.id,
          fy = yb[hy] >> 1,
          Zy = 2 == this.type,
          cb = !1,
          Py = !1,
          oy = [];
        for (let By of this.dependencies) "doc" == By ? cb = !0 : "selection" == By ? Py = !0 : 0 == (1 & (null !== (bb = yb[By.id]) && void 0 !== bb ? bb : 1)) && oy.push(yb[By.id]);
        return {
          create: yb => (yb.values[fy] = Wy(yb), 1),
          update(yb, bb) {
            if (cb && bb.docChanged || Py && (bb.docChanged || bb.selection) || zb(yb, oy)) {
              let bb = Wy(yb);
              if (Zy ? !Ny(bb, yb.values[fy], Uy) : !Uy(bb, yb.values[fy])) return yb.values[fy] = bb, 1
            }
            return 0
          },
          reconfigure: (yb, bb) => {
            let cb, Py = bb.config.address[hy];
            if (null != Py) {
              let hy = Bb(bb, Py);
              if (this.dependencies.every((Wy => Wy instanceof tb ? bb.facet(Wy) === yb.facet(Wy) : !(Wy instanceof Ay) || bb.field(Wy, !1) == yb.field(Wy, !1))) || (Zy ? Ny(cb = Wy(yb), hy, Uy) : Uy(cb = Wy(yb), hy))) return yb.values[fy] = hy, 0
            } else cb = Wy(yb);
            return yb.values[fy] = cb, 1
          }
        }
      }
    }

    function Ny(yb, bb, Wy) {
      if (yb.length != bb.length) return !1;
      for (let Uy = 0; Uy < yb.length; Uy++)
        if (!Wy(yb[Uy], bb[Uy])) return !1;
      return !0
    }

    function zb(yb, bb) {
      let Wy = !1;
      for (let Uy of bb) 1 & ob(yb, Uy) && (Wy = !0);
      return Wy
    }

    function Iy(yb, bb, Wy) {
      let Uy = Wy.map((bb => yb[bb.id])),
        hy = Wy.map((yb => yb.type)),
        fy = Uy.filter((yb => !(1 & yb))),
        Zy = yb[bb.id] >> 1;

      function cb(yb) {
        let Wy = [];
        for (let bb = 0; bb < Uy.length; bb++) {
          let fy = Bb(yb, Uy[bb]);
          if (2 == hy[bb])
            for (let yb of fy) Wy.push(yb);
          else Wy.push(fy)
        }
        return bb.combine(Wy)
      }
      return {
        create(yb) {
          for (let bb of Uy) ob(yb, bb);
          return yb.values[Zy] = cb(yb), 1
        },
        update(yb, Wy) {
          if (!zb(yb, fy)) return 0;
          let Uy = cb(yb);
          return bb.compare(Uy, yb.values[Zy]) ? 0 : (yb.values[Zy] = Uy, 1)
        },
        reconfigure(yb, hy) {
          let fy = zb(yb, Uy),
            Py = hy.config.facets[bb.id],
            oy = hy.facet(bb);
          if (Py && !fy && wy(Wy, Py)) return yb.values[Zy] = oy, 0;
          let By = cb(yb);
          return bb.compare(By, oy) ? (yb.values[Zy] = oy, 0) : (yb.values[Zy] = By, 1)
        }
      }
    }
    const xb = tb.define({
      static: !0
    });
    class Ay {
      constructor(yb, bb, Wy, Uy, hy) {
        this.id = yb, this.createF = bb, this.updateF = Wy, this.compareF = Uy, this.spec = hy, this.provides = void 0
      }
      static define(yb) {
        let bb = new Ay(Dy++, yb.create, yb.update, yb.compare || ((yb, bb) => yb === bb), yb);
        return yb.provide && (bb.provides = yb.provide(bb)), bb
      }
      create(yb) {
        let bb = yb.facet(xb).find((yb => yb.field == this));
        return ((null === bb || void 0 === bb ? void 0 : bb.create) || this.createF)(yb)
      }
      slot(yb) {
        let bb = yb[this.id] >> 1;
        return {
          create: yb => (yb.values[bb] = this.create(yb), 1),
          update: (yb, Wy) => {
            let Uy = yb.values[bb],
              hy = this.updateF(Uy, Wy);
            return this.compareF(Uy, hy) ? 0 : (yb.values[bb] = hy, 1)
          },
          reconfigure: (yb, Wy) => {
            let Uy, hy = yb.facet(xb),
              fy = Wy.facet(xb);
            return (Uy = hy.find((yb => yb.field == this))) && Uy != fy.find((yb => yb.field == this)) ? (yb.values[bb] = Uy.create(yb), 1) : null != Wy.config.address[this.id] ? (yb.values[bb] = Wy.field(this), 0) : (yb.values[bb] = this.create(yb), 1)
          }
        }
      }
      init(yb) {
        return [this, xb.of({
          field: this,
          create: yb
        })]
      }
      get extension() {
        return this
      }
    }
    const dy = 4,
      yW = 3,
      bW = 2,
      Wb = 1;

    function Ub(yb) {
      return bb => new fb(bb, yb)
    }
    const hb = {
      highest: Ub(0),
      high: Ub(Wb),
      default: Ub(bW),
      low: Ub(yW),
      lowest: Ub(dy)
    };
    class fb {
      constructor(yb, bb) {
        this.inner = yb, this.prec = bb
      }
    }
    class Zb {
      of(yb) {
        return new cW(this, yb)
      }
      reconfigure(yb) {
        return Zb.reconfigure.of({
          compartment: this,
          extension: yb
        })
      }
      get(yb) {
        return yb.config.compartments.get(this)
      }
    }
    class cW {
      constructor(yb, bb) {
        this.compartment = yb, this.inner = bb
      }
    }
    class Pb {
      constructor(yb, bb, Wy, Uy, hy, fy) {
        for (this.base = yb, this.compartments = bb, this.dynamicSlots = Wy, this.address = Uy, this.staticValues = hy, this.facets = fy, this.statusTemplate = []; this.statusTemplate.length < Wy.length;) this.statusTemplate.push(0)
      }
      staticFacet(yb) {
        let bb = this.address[yb.id];
        return null == bb ? yb.default : this.staticValues[bb >> 1]
      }
      static resolve(yb, bb, Wy) {
        let Uy = [],
          hy = Object.create(null),
          fy = new Map;
        for (let Ky of function(yb, bb, Wy) {
            let Uy = [
                [],
                [],
                [],
                [],
                []
              ],
              hy = new Map;

            function fy(yb, Zy) {
              let cb = hy.get(yb);
              if (null != cb) {
                if (cb <= Zy) return;
                let bb = Uy[cb].indexOf(yb);
                bb > -1 && Uy[cb].splice(bb, 1), yb instanceof cW && Wy.delete(yb.compartment)
              }
              if (hy.set(yb, Zy), Array.isArray(yb))
                for (let bb of yb) fy(bb, Zy);
              else if (yb instanceof cW) {
                if (Wy.has(yb.compartment)) throw new RangeError("Duplicate use of compartment in extensions");
                let Uy = bb.get(yb.compartment) || yb.inner;
                Wy.set(yb.compartment, Uy), fy(Uy, Zy)
              } else if (yb instanceof fb) fy(yb.inner, yb.prec);
              else if (yb instanceof Ay) Uy[Zy].push(yb), yb.provides && fy(yb.provides, Zy);
              else if (yb instanceof kb) Uy[Zy].push(yb), yb.facet.extensions && fy(yb.facet.extensions, bW);
              else {
                let bb = yb.extension;
                if (!bb) throw new Error(`Unrecognized extension value in extension set (${yb}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
                fy(bb, Zy)
              }
            }
            return fy(yb, bW), Uy.reduce(((yb, bb) => yb.concat(bb)))
          }(yb, bb, fy)) Ky instanceof Ay ? Uy.push(Ky) : (hy[Ky.facet.id] || (hy[Ky.facet.id] = [])).push(Ky);
        let Zy = Object.create(null),
          cb = [],
          Py = [];
        for (let Ky of Uy) Zy[Ky.id] = Py.length << 1, Py.push((yb => Ky.slot(yb)));
        let oy = null === Wy || void 0 === Wy ? void 0 : Wy.config.facets;
        for (let Ky in hy) {
          let yb = hy[Ky],
            bb = yb[0].facet,
            Uy = oy && oy[Ky] || [];
          if (yb.every((yb => 0 == yb.type)))
            if (Zy[bb.id] = cb.length << 1 | 1, wy(Uy, yb)) cb.push(Wy.facet(bb));
            else {
              let Uy = bb.combine(yb.map((yb => yb.value)));
              cb.push(Wy && bb.compare(Uy, Wy.facet(bb)) ? Wy.facet(bb) : Uy)
            }
          else {
            for (let bb of yb) 0 == bb.type ? (Zy[bb.id] = cb.length << 1 | 1, cb.push(bb.value)) : (Zy[bb.id] = Py.length << 1, Py.push((yb => bb.dynamicSlot(yb))));
            Zy[bb.id] = Py.length << 1, Py.push((Wy => Iy(Wy, bb, yb)))
          }
        }
        let By = Py.map((yb => yb(Zy)));
        return new Pb(yb, fy, By, Zy, cb, hy)
      }
    }

    function ob(yb, bb) {
      if (1 & bb) return 2;
      let Wy = bb >> 1,
        Uy = yb.status[Wy];
      if (4 == Uy) throw new Error("Cyclic dependency between fields and/or facets");
      if (2 & Uy) return Uy;
      yb.status[Wy] = 4;
      let hy = yb.computeSlot(yb, yb.config.dynamicSlots[Wy]);
      return yb.status[Wy] = 2 | hy
    }

    function Bb(yb, bb) {
      return 1 & bb ? yb.config.staticValues[bb >> 1] : yb.values[bb >> 1]
    }
    const Kb = tb.define(),
      eb = tb.define({
        combine: yb => yb.some((yb => yb)),
        static: !0
      }),
      qW = tb.define({
        combine: yb => yb.length ? yb[0] : void 0,
        static: !0
      }),
      sb = tb.define(),
      Sb = tb.define(),
      Eb = tb.define(),
      lb = tb.define({
        combine: yb => !!yb.length && yb[0]
      });
    class mW {
      constructor(yb, bb) {
        this.type = yb, this.value = bb
      }
      static define() {
        return new Cb
      }
    }
    class Cb {
      of(yb) {
        return new mW(this, yb)
      }
    }
    class Tb {
      constructor(yb) {
        this.map = yb
      }
      of(yb) {
        return new Vb(this, yb)
      }
    }
    class Vb {
      constructor(yb, bb) {
        this.type = yb, this.value = bb
      }
      map(yb) {
        let bb = this.type.map(this.value, yb);
        return void 0 === bb ? void 0 : bb == this.value ? this : new Vb(this.type, bb)
      }
      is(yb) {
        return this.type == yb
      }
      static define() {
        return new Tb((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).map || (yb => yb))
      }
      static mapEffects(yb, bb) {
        if (!yb.length) return yb;
        let Wy = [];
        for (let Uy of yb) {
          let yb = Uy.map(bb);
          yb && Wy.push(yb)
        }
        return Wy
      }
    }
    Vb.reconfigure = Vb.define(), Vb.appendConfig = Vb.define();
    class Jb {
      constructor(yb, bb, Wy, Uy, hy, fy) {
        this.startState = yb, this.changes = bb, this.selection = Wy, this.effects = Uy, this.annotations = hy, this.scrollIntoView = fy, this._doc = null, this._state = null, Wy && jb(Wy, bb.newLength), hy.some((yb => yb.type == Jb.time)) || (this.annotations = hy.concat(Jb.time.of(Date.now())))
      }
      static create(yb, bb, Wy, Uy, hy, fy) {
        return new Jb(yb, bb, Wy, Uy, hy, fy)
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
      annotation(yb) {
        for (let bb of this.annotations)
          if (bb.type == yb) return bb.value
      }
      get docChanged() {
        return !this.changes.empty
      }
      get reconfigured() {
        return this.startState.config != this.state.config
      }
      isUserEvent(yb) {
        let bb = this.annotation(Jb.userEvent);
        return !(!bb || !(bb == yb || bb.length > yb.length && bb.slice(0, yb.length) == yb && "." == bb[yb.length]))
      }
    }

    function gW(yb, bb) {
      let Wy = [];
      for (let Uy = 0, hy = 0;;) {
        let fy, Zy;
        if (Uy < yb.length && (hy == bb.length || bb[hy] >= yb[Uy])) fy = yb[Uy++], Zy = yb[Uy++];
        else {
          if (!(hy < bb.length)) return Wy;
          fy = bb[hy++], Zy = bb[hy++]
        }!Wy.length || Wy[Wy.length - 1] < fy ? Wy.push(fy, Zy) : Wy[Wy.length - 1] < Zy && (Wy[Wy.length - 1] = Zy)
      }
    }

    function Gb(yb, bb, Wy) {
      var Uy;
      let hy, fy, Zy;
      return Wy ? (hy = bb.changes, fy = ny.empty(bb.changes.length), Zy = yb.changes.compose(bb.changes)) : (hy = bb.changes.map(yb.changes), fy = yb.changes.mapDesc(bb.changes, !0), Zy = yb.changes.compose(hy)), {
        changes: Zy,
        selection: bb.selection ? bb.selection.map(fy) : null === (Uy = yb.selection) || void 0 === Uy ? void 0 : Uy.map(hy),
        effects: Vb.mapEffects(yb.effects, hy).concat(Vb.mapEffects(bb.effects, fy)),
        annotations: yb.annotations.length ? yb.annotations.concat(bb.annotations) : bb.annotations,
        scrollIntoView: yb.scrollIntoView || bb.scrollIntoView
      }
    }

    function Ob(yb, bb, Wy) {
      let Uy = bb.selection,
        hy = iW(bb.annotations);
      return bb.userEvent && (hy = hy.concat(Jb.userEvent.of(bb.userEvent))), {
        changes: bb.changes instanceof ny ? bb.changes : ny.of(bb.changes || [], Wy, yb.facet(qW)),
        selection: Uy && (Uy instanceof Qy ? Uy : Qy.single(Uy.anchor, Uy.head)),
        effects: iW(bb.effects),
        annotations: hy,
        scrollIntoView: !!bb.scrollIntoView
      }
    }

    function Rb(yb, bb, Wy) {
      let Uy = Ob(yb, bb.length ? bb[0] : {}, yb.doc.length);
      bb.length && !1 === bb[0].filter && (Wy = !1);
      for (let fy = 1; fy < bb.length; fy++) {
        !1 === bb[fy].filter && (Wy = !1);
        let hy = !!bb[fy].sequential;
        Uy = Gb(Uy, Ob(yb, bb[fy], hy ? Uy.changes.newLength : yb.doc.length), hy)
      }
      let hy = Jb.create(yb, Uy.changes, Uy.selection, Uy.effects, Uy.annotations, Uy.scrollIntoView);
      return function(yb) {
        let bb = yb.startState,
          Wy = bb.facet(Eb),
          Uy = yb;
        for (let hy = Wy.length - 1; hy >= 0; hy--) {
          let fy = Wy[hy](yb);
          fy && Object.keys(fy).length && (Uy = Gb(Uy, Ob(bb, fy, yb.changes.newLength), !0))
        }
        return Uy == yb ? yb : Jb.create(bb, yb.changes, yb.selection, Uy.effects, Uy.annotations, Uy.scrollIntoView)
      }(Wy ? function(yb) {
        let bb = yb.startState,
          Wy = !0;
        for (let hy of bb.facet(sb)) {
          let bb = hy(yb);
          if (!1 === bb) {
            Wy = !1;
            break
          }
          Array.isArray(bb) && (Wy = !0 === Wy ? bb : gW(Wy, bb))
        }
        if (!0 !== Wy) {
          let Uy, hy;
          if (!1 === Wy) hy = yb.changes.invertedDesc, Uy = ny.empty(bb.doc.length);
          else {
            let bb = yb.changes.filter(Wy);
            Uy = bb.changes, hy = bb.filtered.mapDesc(bb.changes).invertedDesc
          }
          yb = Jb.create(bb, Uy, yb.selection && yb.selection.map(hy), Vb.mapEffects(yb.effects, hy), yb.annotations, yb.scrollIntoView)
        }
        let Uy = bb.facet(Sb);
        for (let hy = Uy.length - 1; hy >= 0; hy--) {
          let Wy = Uy[hy](yb);
          yb = Wy instanceof Jb ? Wy : Array.isArray(Wy) && 1 == Wy.length && Wy[0] instanceof Jb ? Wy[0] : Rb(bb, iW(Wy), !1)
        }
        return yb
      }(hy) : hy)
    }
    Jb.time = mW.define(), Jb.userEvent = mW.define(), Jb.addToHistory = mW.define(), Jb.remote = mW.define();
    const vW = [];

    function iW(yb) {
      return null == yb ? vW : Array.isArray(yb) ? yb : [yb]
    }
    var Mb = function(yb) {
      return yb[yb.Word = 0] = "Word", yb[yb.Space = 1] = "Space", yb[yb.Other = 2] = "Other", yb
    }(Mb || (Mb = {}));
    const Yb = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
    let Xb;
    try {
      Xb = new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u")
    } catch (WW) {}

    function nb(yb) {
      return bb => {
        if (!/\S/.test(bb)) return Mb.Space;
        if (function(yb) {
            if (Xb) return Xb.test(yb);
            for (let bb = 0; bb < yb.length; bb++) {
              let Wy = yb[bb];
              if (/\w/.test(Wy) || Wy > "\x80" && (Wy.toUpperCase() != Wy.toLowerCase() || Yb.test(Wy))) return !0
            }
            return !1
          }(bb)) return Mb.Word;
        for (let Wy = 0; Wy < yb.length; Wy++)
          if (bb.indexOf(yb[Wy]) > -1) return Mb.Word;
        return Mb.Other
      }
    }
    class ub {
      constructor(yb, bb, Wy, Uy, hy, fy) {
        this.config = yb, this.doc = bb, this.selection = Wy, this.values = Uy, this.status = yb.statusTemplate.slice(), this.computeSlot = hy, fy && (fy._state = this);
        for (let Zy = 0; Zy < this.config.dynamicSlots.length; Zy++) ob(this, Zy << 1);
        this.computeSlot = null
      }
      field(yb) {
        let bb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Wy = this.config.address[yb.id];
        if (null != Wy) return ob(this, Wy), Bb(this, Wy);
        if (bb) throw new RangeError("Field is not present in this state")
      }
      update() {
        for (var yb = arguments.length, bb = new Array(yb), Wy = 0; Wy < yb; Wy++) bb[Wy] = arguments[Wy];
        return Rb(this, bb, !0)
      }
      applyTransaction(yb) {
        let bb, Wy = this.config,
          {
            base: Uy,
            compartments: hy
          } = Wy;
        for (let Zy of yb.effects) Zy.is(Zb.reconfigure) ? (Wy && (hy = new Map, Wy.compartments.forEach(((yb, bb) => hy.set(bb, yb))), Wy = null), hy.set(Zy.value.compartment, Zy.value.extension)) : Zy.is(Vb.reconfigure) ? (Wy = null, Uy = Zy.value) : Zy.is(Vb.appendConfig) && (Wy = null, Uy = iW(Uy).concat(Zy.value));
        if (Wy) bb = yb.startState.values.slice();
        else {
          Wy = Pb.resolve(Uy, hy, this), bb = new ub(Wy, this.doc, this.selection, Wy.dynamicSlots.map((() => null)), ((yb, bb) => bb.reconfigure(yb, this)), null).values
        }
        let fy = yb.startState.facet(eb) ? yb.newSelection : yb.newSelection.asSingle();
        new ub(Wy, yb.newDoc, fy, bb, ((bb, Wy) => Wy.update(bb, yb)), yb)
      }
      replaceSelection(yb) {
        return "string" == typeof yb && (yb = this.toText(yb)), this.changeByRange((bb => ({
          changes: {
            from: bb.from,
            to: bb.to,
            insert: yb
          },
          range: Qy.cursor(bb.from + yb.length)
        })))
      }
      changeByRange(yb) {
        let bb = this.selection,
          Wy = yb(bb.lZ[0]),
          Uy = this.changes(Wy.changes),
          hy = [Wy.range],
          fy = iW(Wy.effects);
        for (let Zy = 1; Zy < bb.lZ.length; Zy++) {
          let Wy = yb(bb.lZ[Zy]),
            cb = this.changes(Wy.changes),
            Py = cb.map(Uy);
          for (let yb = 0; yb < Zy; yb++) hy[yb] = hy[yb].map(Py);
          let oy = Uy.mapDesc(cb, !0);
          hy.push(Wy.range.map(oy)), Uy = Uy.compose(Py), fy = Vb.mapEffects(fy, Py).concat(Vb.mapEffects(iW(Wy.effects), oy))
        }
        return {
          changes: Uy,
          selection: Qy.create(hy, bb.mainIndex),
          effects: fy
        }
      }
      changes() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return yb instanceof ny ? yb : ny.of(yb, this.doc.length, this.facet(ub.lineSeparator))
      }
      toText(yb) {
        return Sy.of(yb.split(this.facet(ub.lineSeparator) || My))
      }
      sliceDoc() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.doc.length;
        return this.doc.sliceString(yb, bb, this.lineBreak)
      }
      facet(yb) {
        let bb = this.config.address[yb.id];
        return null == bb ? yb.default : (ob(this, bb), Bb(this, bb))
      }
      toJSON(yb) {
        let bb = {
          doc: this.sliceDoc(),
          selection: this.selection.toJSON()
        };
        if (yb)
          for (let Wy in yb) {
            let Uy = yb[Wy];
            Uy instanceof Ay && null != this.config.address[Uy.id] && (bb[Wy] = Uy.spec.toJSON(this.field(yb[Wy]), this))
          }
        return bb
      }
      static fromJSON(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          Wy = arguments.length > 2 ? arguments[2] : void 0;
        if (!yb || "string" != typeof yb.doc) throw new RangeError("Invalid JSON representation for EditorState");
        let Uy = [];
        if (Wy)
          for (let hy in Wy)
            if (Object.prototype.hasOwnProperty.call(yb, hy)) {
              let bb = Wy[hy],
                fy = yb[hy];
              Uy.push(bb.init((yb => bb.spec.fromJSON(fy, yb))))
            } return ub.create({
          doc: yb.doc,
          selection: Qy.fromJSON(yb.selection),
          extensions: bb.extensions ? Uy.concat([bb.extensions]) : Uy
        })
      }
      static create() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          bb = Pb.resolve(yb.extensions || [], new Map),
          Wy = yb.doc instanceof Sy ? yb.doc : Sy.of((yb.doc || "").split(bb.staticFacet(ub.lineSeparator) || My)),
          Uy = yb.selection ? yb.selection instanceof Qy ? yb.selection : Qy.single(yb.selection.anchor, yb.selection.head) : Qy.single(0);
        return jb(Uy, Wy.length), bb.staticFacet(eb) || (Uy = Uy.asSingle()), new ub(bb, Wy, Uy, bb.dynamicSlots.map((() => null)), ((yb, bb) => bb.create(yb)), null)
      }
      get tabSize() {
        return this.facet(ub.tabSize)
      }
      get lineBreak() {
        return this.facet(ub.lineSeparator) || "\n"
      }
      get readOnly() {
        return this.facet(lb)
      }
      phrase(yb) {
        for (var bb = arguments.length, Wy = new Array(bb > 1 ? bb - 1 : 0), Uy = 1; Uy < bb; Uy++) Wy[Uy - 1] = arguments[Uy];
        for (let hy of this.facet(ub.phrases))
          if (Object.prototype.hasOwnProperty.call(hy, yb)) {
            yb = hy[yb];
            break
          } return Wy.length && (yb = yb.replace(/\$(\$|\d*)/g, ((yb, bb) => {
          if ("$" == bb) return "$";
          let Uy = +(bb || 1);
          return !Uy || Uy > Wy.length ? yb : Wy[Uy - 1]
        }))), yb
      }
      languageDataAt(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          Uy = [];
        for (let hy of this.facet(Kb))
          for (let fy of hy(this, bb, Wy)) Object.prototype.hasOwnProperty.call(fy, yb) && Uy.push(fy[yb]);
        return Uy
      }
      charCategorizer(yb) {
        let bb = this.languageDataAt("wordChars", yb);
        return nb(bb.length ? bb[0] : "")
      }
      wordAt(yb) {
        let {
          text: bb,
          from: Wy,
          length: Uy
        } = this.doc.lineAt(yb), hy = this.charCategorizer(yb), fy = yb - Wy, Zy = yb - Wy;
        for (; fy > 0;) {
          let yb = Oy(bb, fy, !1);
          if (hy(bb.slice(yb, fy)) != Mb.Word) break;
          fy = yb
        }
        for (; Zy < Uy;) {
          let yb = Oy(bb, Zy);
          if (hy(bb.slice(Zy, yb)) != Mb.Word) break;
          Zy = yb
        }
        return fy == Zy ? null : Qy.range(fy + Wy, Zy + Wy)
      }
    }

    function rW(yb, bb) {
      let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        Uy = {};
      for (let hy of yb)
        for (let yb of Object.keys(hy)) {
          let bb = hy[yb],
            fy = Uy[yb];
          if (void 0 === fy) Uy[yb] = bb;
          else if (fy === bb || void 0 === bb);
          else {
            if (!Object.hasOwnProperty.call(Wy, yb)) throw new Error("Config merge conflict for field " + yb);
            Uy[yb] = Wy[yb](fy, bb)
          }
        }
      for (let hy in bb) void 0 === Uy[hy] && (Uy[hy] = bb[hy]);
      return Uy
    }
    ub.allowMultipleSelections = eb, ub.tabSize = tb.define({
      combine: yb => yb.length ? yb[0] : 4
    }), ub.lineSeparator = qW, ub.readOnly = lb, ub.phrases = tb.define({
      compare(yb, bb) {
        let Wy = Object.keys(yb),
          Uy = Object.keys(bb);
        return Wy.length == Uy.length && Wy.every((Wy => yb[Wy] == bb[Wy]))
      }
    }), ub.languageData = Kb, ub.changeFilter = sb, ub.transactionFilter = Sb, ub.transactionExtender = Eb, Zb.reconfigure = Vb.define();
    class Hb {
      eq(yb) {
        return this == yb
      }
      range(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yb;
        return Fb.create(yb, bb, this)
      }
    }

    function aW(yb, bb) {
      return yb == bb || yb.constructor == bb.constructor && yb.eq(bb)
    }
    Hb.prototype.startSide = Hb.prototype.endSide = 0, Hb.prototype.point = !1, Hb.prototype.mapMode = Yy.TrackDel;
    class Fb {
      constructor(yb, bb, Wy) {
        this.from = yb, this.to = bb, this.value = Wy
      }
      static create(yb, bb, Wy) {
        return new Fb(yb, bb, Wy)
      }
    }

    function pb(yb, bb) {
      return yb.from - bb.from || yb.value.startSide - bb.value.startSide
    }
    class Lb {
      constructor(yb, bb, Wy, Uy) {
        this.from = yb, this.to = bb, this.value = Wy, this.fBy = Uy
      }
      get length() {
        return this.to[this.to.length - 1]
      }
      findIndex(yb, bb, Wy) {
        let Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          hy = Wy ? this.to : this.from;
        for (let fy = Uy, Zy = hy.length;;) {
          if (fy == Zy) return fy;
          let Uy = fy + Zy >> 1,
            cb = hy[Uy] - yb || (Wy ? this.value[Uy].endSide : this.value[Uy].startSide) - bb;
          if (Uy == fy) return cb >= 0 ? fy : Zy;
          cb >= 0 ? Zy = Uy : fy = Uy + 1
        }
      }
      between(yb, bb, Wy, Uy) {
        for (let hy = this.findIndex(bb, -1e9, !0), fy = this.findIndex(Wy, 1e9, !1, hy); hy < fy; hy++)
          if (!1 === Uy(this.from[hy] + yb, this.to[hy] + yb, this.value[hy])) return !1
      }
      map(yb, bb) {
        let Wy = [],
          Uy = [],
          hy = [],
          fy = -1,
          Zy = -1;
        for (let cb = 0; cb < this.value.length; cb++) {
          let Py, oy, By = this.value[cb],
            Ky = this.from[cb] + yb,
            ey = this.to[cb] + yb;
          if (Ky == ey) {
            let yb = bb.mapPos(Ky, By.startSide, By.mapMode);
            if (null == yb) continue;
            if (Py = oy = yb, By.startSide != By.endSide && (oy = bb.mapPos(Ky, By.endSide), oy < Py)) continue
          } else if (Py = bb.mapPos(Ky, By.startSide), oy = bb.mapPos(ey, By.endSide), Py > oy || Py == oy && By.startSide > 0 && By.endSide <= 0) continue;
          (oy - Py || By.endSide - By.startSide) < 0 || (fy < 0 && (fy = Py), By.point && (Zy = Math.max(Zy, oy - Py)), Wy.push(By), Uy.push(Py - fy), hy.push(oy - fy))
        }
        return {
          mapped: Wy.length ? new Lb(Uy, hy, Wy, Zy) : null,
          pos: fy
        }
      }
    }
    class Qb {
      constructor(yb, bb, Wy, Uy) {
        this.chunkPos = yb, this.chunk = bb, this.nextLayer = Wy, this.fBy = Uy
      }
      static create(yb, bb, Wy, Uy) {
        return new Qb(yb, bb, Wy, Uy)
      }
      get length() {
        let yb = this.chunk.length - 1;
        return yb < 0 ? 0 : Math.max(this.chunkEnd(yb), this.nextLayer.length)
      }
      get size() {
        if (this.gh) return 0;
        let yb = this.nextLayer.size;
        for (let bb of this.chunk) yb += bb.value.length;
        return yb
      }
      chunkEnd(yb) {
        return this.chunkPos[yb] + this.chunk[yb].length
      }
      update(yb) {
        let {
          add: bb = [],
          sort: Wy = !1,
          filterFrom: Uy = 0,
          filterTo: hy = this.length
        } = yb, fy = yb.filter;
        if (0 == bb.length && !fy) return this;
        if (Wy && (bb = bb.slice().sort(pb)), this.gh) return bb.length ? Qb.of(bb) : this;
        let Zy = new tW(this, null, -1).goto(0),
          cb = 0,
          Py = [],
          oy = new jW;
        for (; Zy.value || cb < bb.length;)
          if (cb < bb.length && (Zy.from - bb[cb].from || Zy.startSide - bb[cb].value.startSide) >= 0) {
            let yb = bb[cb++];
            oy.addInner(yb.from, yb.to, yb.value) || Py.push(yb)
          } else 1 == Zy.rangeIndex && Zy.chunkIndex < this.chunk.length && (cb == bb.length || this.chunkEnd(Zy.chunkIndex) < bb[cb].from) && (!fy || Uy > this.chunkEnd(Zy.chunkIndex) || hy < this.chunkPos[Zy.chunkIndex]) && oy.addChunk(this.chunkPos[Zy.chunkIndex], this.chunk[Zy.chunkIndex]) ? Zy.nextChunk() : ((!fy || Uy > Zy.to || hy < Zy.from || fy(Zy.from, Zy.to, Zy.value)) && (oy.addInner(Zy.from, Zy.to, Zy.value) || Py.push(Fb.create(Zy.from, Zy.to, Zy.value))), Zy.next());
        return oy.finishInner(this.nextLayer.gh && !Py.length ? Qb.empty : this.nextLayer.update({
          add: Py,
          filter: fy,
          filterFrom: Uy,
          filterTo: hy
        }))
      }
      map(yb) {
        if (yb.empty || this.gh) return this;
        let bb = [],
          Wy = [],
          Uy = -1;
        for (let fy = 0; fy < this.chunk.length; fy++) {
          let hy = this.chunkPos[fy],
            Zy = this.chunk[fy],
            cb = yb.touchesRange(hy, hy + Zy.length);
          if (!1 === cb) Uy = Math.max(Uy, Zy.fBy), bb.push(Zy), Wy.push(yb.mapPos(hy));
          else if (!0 === cb) {
            let {
              mapped: fy,
              pos: cb
            } = Zy.map(hy, yb);
            fy && (Uy = Math.max(Uy, fy.fBy), bb.push(fy), Wy.push(cb))
          }
        }
        let hy = this.nextLayer.map(yb);
        return 0 == bb.length ? hy : new Qb(Wy, bb, hy || Qb.empty, Uy)
      }
      between(yb, bb, Wy) {
        if (!this.gh) {
          for (let Uy = 0; Uy < this.chunk.length; Uy++) {
            let hy = this.chunkPos[Uy],
              fy = this.chunk[Uy];
            if (bb >= hy && yb <= hy + fy.length && !1 === fy.between(hy, yb - hy, bb - hy, Wy)) return
          }
          this.nextLayer.between(yb, bb, Wy)
        }
      }
      iter() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return wb.from([this]).goto(yb)
      }
      get gh() {
        return this.nextLayer == this
      }
      static iter(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return wb.from(yb).goto(bb)
      }
      static compare(yb, bb, Wy, Uy) {
        let hy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1,
          fy = yb.filter((yb => yb.fBy > 0 || !yb.gh && yb.fBy >= hy)),
          Zy = bb.filter((yb => yb.fBy > 0 || !yb.gh && yb.fBy >= hy)),
          cb = Db(fy, Zy, Wy),
          Py = new Nb(fy, cb, hy),
          oy = new Nb(Zy, cb, hy);
        Wy.iterGaps(((yb, bb, Wy) => zW(Py, yb, oy, bb, Wy, Uy))), Wy.empty && 0 == Wy.length && zW(Py, 0, oy, 0, 0, Uy)
      }
      static eq(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Uy = arguments.length > 3 ? arguments[3] : void 0;
        null == Uy && (Uy = 999999999);
        let hy = yb.filter((yb => !yb.gh && bb.indexOf(yb) < 0)),
          fy = bb.filter((bb => !bb.gh && yb.indexOf(bb) < 0));
        if (hy.length != fy.length) return !1;
        if (!hy.length) return !0;
        let Zy = Db(hy, fy),
          cb = new Nb(hy, Zy, 0).goto(Wy),
          Py = new Nb(fy, Zy, 0).goto(Wy);
        for (;;) {
          if (cb.to != Py.to || !Ib(cb.active, Py.active) || cb.point && (!Py.point || !aW(cb.point, Py.point))) return !1;
          if (cb.to > Uy) return !0;
          cb.next(), Py.next()
        }
      }
      static spans(yb, bb, Wy, Uy) {
        let hy = new Nb(yb, null, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1).goto(bb),
          fy = bb,
          Zy = hy.openStart;
        for (;;) {
          let yb = Math.min(hy.to, Wy);
          if (hy.point) {
            let Wy = hy.activeForPoint(hy.to),
              cb = hy.pointFrom < bb ? Wy.length + 1 : hy.point.startSide < 0 ? Wy.length : Math.min(Wy.length, Zy);
            Uy.point(fy, yb, hy.point, Wy, cb, hy.pointRank), Zy = Math.min(hy.openEnd(yb), Wy.length)
          } else yb > fy && (Uy.span(fy, yb, hy.active, Zy), Zy = hy.openEnd(yb));
          if (hy.to > Wy) return Zy + (hy.point && hy.to > Wy ? 1 : 0);
          fy = hy.to, hy.next()
        }
      }
      static of (yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Wy = new jW;
        for (let Uy of yb instanceof Fb ? [yb] : bb ? function(yb) {
            if (yb.length > 1)
              for (let bb = yb[0], Wy = 1; Wy < yb.length; Wy++) {
                let Uy = yb[Wy];
                if (pb(bb, Uy) > 0) return yb.slice().sort(pb);
                bb = Uy
              }
            return yb
          }(yb) : yb) Wy.add(Uy.from, Uy.to, Uy.value);
        return Wy.finish()
      }
      static join(yb) {
        if (!yb.length) return Qb.empty;
        let bb = yb[yb.length - 1];
        for (let Wy = yb.length - 2; Wy >= 0; Wy--)
          for (let Uy = yb[Wy]; Uy != Qb.empty; Uy = Uy.nextLayer) bb = new Qb(Uy.chunkPos, Uy.chunk, bb, Math.max(Uy.fBy, bb.fBy));
        return bb
      }
    }
    Qb.empty = new Qb([], [], null, -1), Qb.empty.nextLayer = Qb.empty;
    class jW {
      finishChunk(yb) {
        this.chunks.push(new Lb(this.from, this.to, this.value, this.fBy)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.fBy), this.fBy = -1, yb && (this.from = [], this.to = [], this.value = [])
      }
      constructor() {
        this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.fBy = -1, this.setMaxPoint = -1, this.nextLayer = null
      }
      add(yb, bb, Wy) {
        this.addInner(yb, bb, Wy) || (this.nextLayer || (this.nextLayer = new jW)).add(yb, bb, Wy)
      }
      addInner(yb, bb, Wy) {
        let Uy = yb - this.lastTo || Wy.startSide - this.last.endSide;
        if (Uy <= 0 && (yb - this.lastFrom || Wy.startSide - this.last.startSide) < 0) throw new Error("Ranges must be added sorted by `from` position and `startSide`");
        return !(Uy < 0) && (250 == this.from.length && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = yb), this.from.push(yb - this.chunkStart), this.to.push(bb - this.chunkStart), this.last = Wy, this.lastFrom = yb, this.lastTo = bb, this.value.push(Wy), Wy.point && (this.fBy = Math.max(this.fBy, bb - yb)), !0)
      }
      addChunk(yb, bb) {
        if ((yb - this.lastTo || bb.value[0].startSide - this.last.endSide) < 0) return !1;
        this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, bb.fBy), this.chunks.push(bb), this.chunkPos.push(yb);
        let Wy = bb.value.length - 1;
        return this.last = bb.value[Wy], this.lastFrom = bb.from[Wy] + yb, this.lastTo = bb.to[Wy] + yb, !0
      }
      finish() {
        return this.finishInner(Qb.empty)
      }
      finishInner(yb) {
        if (this.from.length && this.finishChunk(!1), 0 == this.chunks.length) return yb;
        let bb = Qb.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(yb) : yb, this.setMaxPoint);
        return this.from = null, bb
      }
    }

    function Db(yb, bb, Wy) {
      let Uy = new Map;
      for (let fy of yb)
        for (let yb = 0; yb < fy.chunk.length; yb++) fy.chunk[yb].fBy <= 0 && Uy.set(fy.chunk[yb], fy.chunkPos[yb]);
      let hy = new Set;
      for (let fy of bb)
        for (let yb = 0; yb < fy.chunk.length; yb++) {
          let bb = Uy.get(fy.chunk[yb]);
          null == bb || (Wy ? Wy.mapPos(bb) : bb) != fy.chunkPos[yb] || (null === Wy || void 0 === Wy ? void 0 : Wy.touchesRange(bb, bb + fy.chunk[yb].length)) || hy.add(fy.chunk[yb])
        }
      return hy
    }
    class tW {
      constructor(yb, bb, Wy) {
        let Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.layer = yb, this.skip = bb, this.ZBy = Wy, this.rank = Uy
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      get endSide() {
        return this.value ? this.value.endSide : 0
      }
      goto(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(yb, bb, !1), this
      }
      gotoInner(yb, bb, Wy) {
        for (; this.chunkIndex < this.layer.chunk.length;) {
          let bb = this.layer.chunk[this.chunkIndex];
          if (!(this.skip && this.skip.has(bb) || this.layer.chunkEnd(this.chunkIndex) < yb || bb.fBy < this.ZBy)) break;
          this.chunkIndex++, Wy = !1
        }
        if (this.chunkIndex < this.layer.chunk.length) {
          let Uy = this.layer.chunk[this.chunkIndex].findIndex(yb - this.layer.chunkPos[this.chunkIndex], bb, !0);
          (!Wy || this.rangeIndex < Uy) && this.setRangeIndex(Uy)
        }
        this.next()
      }
      forward(yb, bb) {
        (this.to - yb || this.endSide - bb) < 0 && this.gotoInner(yb, bb, !0)
      }
      next() {
        for (;;) {
          if (this.chunkIndex == this.layer.chunk.length) {
            this.from = this.to = 1e9, this.value = null;
            break
          } {
            let yb = this.layer.chunkPos[this.chunkIndex],
              bb = this.layer.chunk[this.chunkIndex],
              Wy = yb + bb.from[this.rangeIndex];
            if (this.from = Wy, this.to = yb + bb.to[this.rangeIndex], this.value = bb.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.ZBy < 0 || this.value.point && this.to - this.from >= this.ZBy) break
          }
        }
      }
      setRangeIndex(yb) {
        if (yb == this.layer.chunk[this.chunkIndex].value.length) {
          if (this.chunkIndex++, this.skip)
            for (; this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]);) this.chunkIndex++;
          this.rangeIndex = 0
        } else this.rangeIndex = yb
      }
      nextChunk() {
        this.chunkIndex++, this.rangeIndex = 0, this.next()
      }
      compare(yb) {
        return this.from - yb.from || this.startSide - yb.startSide || this.rank - yb.rank || this.to - yb.to || this.endSide - yb.endSide
      }
    }
    class wb {
      constructor(yb) {
        this.heap = yb
      }
      static from(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          Uy = [];
        for (let hy = 0; hy < yb.length; hy++)
          for (let fy = yb[hy]; !fy.gh; fy = fy.nextLayer) fy.fBy >= Wy && Uy.push(new tW(fy, bb, Wy, hy));
        return 1 == Uy.length ? Uy[0] : new wb(Uy)
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      goto(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        for (let Wy of this.heap) Wy.goto(yb, bb);
        for (let Wy = this.heap.length >> 1; Wy >= 0; Wy--) kW(this.heap, Wy);
        return this.next(), this
      }
      forward(yb, bb) {
        for (let Wy of this.heap) Wy.forward(yb, bb);
        for (let Wy = this.heap.length >> 1; Wy >= 0; Wy--) kW(this.heap, Wy);
        (this.to - yb || this.value.endSide - bb) < 0 && this.next()
      }
      next() {
        if (0 == this.heap.length) this.from = this.to = 1e9, this.value = null, this.rank = -1;
        else {
          let yb = this.heap[0];
          this.from = yb.from, this.to = yb.to, this.value = yb.value, this.rank = yb.rank, yb.value && yb.next(), kW(this.heap, 0)
        }
      }
    }

    function kW(yb, bb) {
      for (let Wy = yb[bb];;) {
        let Uy = 1 + (bb << 1);
        if (Uy >= yb.length) break;
        let hy = yb[Uy];
        if (Uy + 1 < yb.length && hy.compare(yb[Uy + 1]) >= 0 && (hy = yb[Uy + 1], Uy++), Wy.compare(hy) < 0) break;
        yb[Uy] = Wy, yb[bb] = hy, bb = Uy
      }
    }
    class Nb {
      constructor(yb, bb, Wy) {
        this.ZBy = Wy, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = wb.from(yb, bb, Wy)
      }
      goto(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.cursor.goto(yb, bb), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = yb, this.endSide = bb, this.openStart = -1, this.next(), this
      }
      forward(yb, bb) {
        for (; this.minActive > -1 && (this.activeTo[this.minActive] - yb || this.active[this.minActive].endSide - bb) < 0;) this.removeActive(this.minActive);
        this.cursor.forward(yb, bb)
      }
      removeActive(yb) {
        xW(this.active, yb), xW(this.activeTo, yb), xW(this.activeRank, yb), this.minActive = db(this.active, this.activeTo)
      }
      addActive(yb) {
        let bb = 0,
          {
            value: Wy,
            to: Uy,
            rank: hy
          } = this.cursor;
        for (; bb < this.activeRank.length && (hy - this.activeRank[bb] || Uy - this.activeTo[bb]) > 0;) bb++;
        Ab(this.active, bb, Wy), Ab(this.activeTo, bb, Uy), Ab(this.activeRank, bb, hy), yb && Ab(yb, bb, this.cursor.from), this.minActive = db(this.active, this.activeTo)
      }
      next() {
        let yb = this.to,
          bb = this.point;
        this.point = null;
        let Wy = this.openStart < 0 ? [] : null;
        for (;;) {
          let Uy = this.minActive;
          if (Uy > -1 && (this.activeTo[Uy] - this.cursor.from || this.active[Uy].endSide - this.cursor.startSide) < 0) {
            if (this.activeTo[Uy] > yb) {
              this.to = this.activeTo[Uy], this.endSide = this.active[Uy].endSide;
              break
            }
            this.removeActive(Uy), Wy && xW(Wy, Uy)
          } else {
            if (!this.cursor.value) {
              this.to = this.endSide = 1e9;
              break
            }
            if (this.cursor.from > yb) {
              this.to = this.cursor.from, this.endSide = this.cursor.startSide;
              break
            } {
              let yb = this.cursor.value;
              if (yb.point) {
                if (!(bb && this.cursor.to == this.to && this.cursor.from < this.cursor.to)) {
                  this.point = yb, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = yb.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
                  break
                }
                this.cursor.next()
              } else this.addActive(Wy), this.cursor.next()
            }
          }
        }
        if (Wy) {
          this.openStart = 0;
          for (let bb = Wy.length - 1; bb >= 0 && Wy[bb] < yb; bb--) this.openStart++
        }
      }
      activeForPoint(yb) {
        if (!this.active.length) return this.active;
        let bb = [];
        for (let Wy = this.active.length - 1; Wy >= 0 && !(this.activeRank[Wy] < this.pointRank); Wy--)(this.activeTo[Wy] > yb || this.activeTo[Wy] == yb && this.active[Wy].endSide >= this.point.endSide) && bb.push(this.active[Wy]);
        return bb.reverse()
      }
      openEnd(yb) {
        let bb = 0;
        for (let Wy = this.activeTo.length - 1; Wy >= 0 && this.activeTo[Wy] > yb; Wy--) bb++;
        return bb
      }
    }

    function zW(yb, bb, Wy, Uy, hy, fy) {
      yb.goto(bb), Wy.goto(Uy);
      let Zy = Uy + hy,
        cb = Uy,
        Py = Uy - bb,
        oy = !!fy.boundChange;
      for (let By = !1;;) {
        let bb = yb.to + Py - Wy.to,
          Uy = bb || yb.endSide - Wy.endSide,
          hy = Uy < 0 ? yb.to + Py : Wy.to,
          Ky = Math.min(hy, Zy);
        if (yb.point || Wy.point ? (yb.point && Wy.point && aW(yb.point, Wy.point) && Ib(yb.activeForPoint(yb.to), Wy.activeForPoint(Wy.to)) || fy.comparePoint(cb, Ky, yb.point, Wy.point), By = !1) : (By && fy.boundChange(cb), Ky > cb && !Ib(yb.active, Wy.active) && fy.compareRange(cb, Ky, yb.active, Wy.active), oy && Ky < Zy && (bb || yb.openEnd(hy) != Wy.openEnd(hy)) && (By = !0)), hy > Zy) break;
        cb = hy, Uy <= 0 && yb.next(), Uy >= 0 && Wy.next()
      }
    }

    function Ib(yb, bb) {
      if (yb.length != bb.length) return !1;
      for (let Wy = 0; Wy < yb.length; Wy++)
        if (yb[Wy] != bb[Wy] && !aW(yb[Wy], bb[Wy])) return !1;
      return !0
    }

    function xW(yb, bb) {
      for (let Wy = bb, Uy = yb.length - 1; Wy < Uy; Wy++) yb[Wy] = yb[Wy + 1];
      yb.pop()
    }

    function Ab(yb, bb, Wy) {
      for (let Uy = yb.length - 1; Uy >= bb; Uy--) yb[Uy + 1] = yb[Uy];
      yb[bb] = Wy
    }

    function db(yb, bb) {
      let Wy = -1,
        Uy = 1e9;
      for (let hy = 0; hy < bb.length; hy++)(bb[hy] - Uy || yb[hy].endSide - yb[Wy].endSide) < 0 && (Wy = hy, Uy = bb[hy]);
      return Wy
    }

    function yU(yb, bb) {
      let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : yb.length,
        Uy = 0;
      for (let hy = 0; hy < Wy && hy < yb.length;) 9 == yb.charCodeAt(hy) ? (Uy += bb - Uy % bb, hy++) : (Uy++, hy = Oy(yb, hy));
      return Uy
    }

    function bU(yb, bb, Wy, Uy) {
      for (let hy = 0, fy = 0;;) {
        if (fy >= bb) return hy;
        if (hy == yb.length) break;
        fy += 9 == yb.charCodeAt(hy) ? Wy - fy % Wy : 1, hy = Oy(yb, hy)
      }
      return !0 === Uy ? -1 : yb.length
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);