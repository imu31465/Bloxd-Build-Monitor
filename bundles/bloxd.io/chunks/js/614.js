export const id = 614;
export const ids = [614];
export const modules = {
  53501: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => sw,
      d: () => Zb,
      ChangeSet: () => fb,
      h: () => Yw,
      j: () => Gb,
      n: () => Ww,
      o: () => ib,
      s: () => Yb,
      v: () => Hw,
      B: () => qw,
      z: () => aw,
      C: () => Sw,
      E: () => zw,
      G: () => Tb,
      H: () => Eb,
      J: () => Xw,
      L: () => rb,
      M: () => Db,
      P: () => Jw,
      S: () => wM,
      U: () => Kb,
      Y: () => MM,
      Z: () => Rb
    });
    let eb = [],
      Hb = [];

    function pb(bb) {
      if (bb < 768) return !1;
      for (let wb = 0, Mb = eb.length;;) {
        let pb = wb + Mb >> 1;
        if (bb < eb[pb]) Mb = pb;
        else {
          if (!(bb >= Hb[pb])) return !0;
          wb = pb + 1
        }
        if (wb == Mb) return !1
      }
    }

    function Vb(bb) {
      return bb >= 127462 && bb <= 127487
    }(() => {
      let bb = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((bb => bb ? parseInt(bb, 36) : 1));
      for (let wb = 0, Mb = 0; wb < bb.length; wb++)(wb % 2 ? Hb : eb).push(Mb += bb[wb])
    })();
    const gb = 8205;

    function lb(bb, wb) {
      return (!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2] ? Lb : Ib)(bb, wb, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function Lb(bb, wb, Mb) {
      if (wb == bb.length) return wb;
      wb && Ub(bb.charCodeAt(wb)) && tb(bb.charCodeAt(wb - 1)) && wb--;
      let eb = Ob(bb, wb);
      for (wb += Cb(eb); wb < bb.length;) {
        let Hb = Ob(bb, wb);
        if (eb == gb || Hb == gb || Mb && pb(Hb)) wb += Cb(Hb), eb = Hb;
        else {
          if (!Vb(Hb)) break;
          {
            let Mb = 0,
              eb = wb - 2;
            for (; eb >= 0 && Vb(Ob(bb, eb));) Mb++, eb -= 2;
            if (Mb % 2 == 0) break;
            wb += 2
          }
        }
      }
      return wb
    }

    function Ib(bb, wb, Mb) {
      for (; wb > 0;) {
        let eb = Lb(bb, wb - 2, Mb);
        if (eb < wb) return eb;
        wb--
      }
      return 0
    }

    function Ob(bb, wb) {
      let Mb = bb.charCodeAt(wb);
      if (!tb(Mb) || wb + 1 == bb.length) return Mb;
      let eb = bb.charCodeAt(wb + 1);
      return Ub(eb) ? eb - 56320 + (Mb - 55296 << 10) + 65536 : Mb
    }

    function Ub(bb) {
      return bb >= 56320 && bb < 57344
    }

    function tb(bb) {
      return bb >= 55296 && bb < 56320
    }

    function Cb(bb) {
      return bb < 65536 ? 1 : 2
    }
    class Eb {
      lineAt(bb) {
        if (bb < 0 || bb > this.length) throw new RangeError(`Invalid position ${bb} in document of length ${this.length}`);
        return this.lineInner(bb, !1, 1, 0)
      }
      line(bb) {
        if (bb < 1 || bb > this.lines) throw new RangeError(`Invalid line number ${bb} in ${this.lines}-line document`);
        return this.lineInner(bb, !0, 1, 0)
      }
      replace(bb, wb, Mb) {
        [bb, wb] = jb(this, bb, wb);
        let eb = [];
        return this.decompose(0, bb, eb, 2), Mb.length && Mb.decompose(0, Mb.length, eb, 3), this.decompose(wb, this.length, eb, 1), Bb.from(eb, this.length - (wb - bb) + Mb.length)
      }
      append(bb) {
        return this.replace(this.length, this.length, bb)
      }
      slice(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        [bb, wb] = jb(this, bb, wb);
        let Mb = [];
        return this.decompose(bb, wb, Mb, 0), Bb.from(Mb, wb - bb)
      }
      eq(bb) {
        if (bb == this) return !0;
        if (bb.length != this.length || bb.lines != this.lines) return !1;
        let wb = this.scanIdentical(bb, 1),
          Mb = this.length - this.scanIdentical(bb, -1),
          eb = new hb(this),
          Hb = new hb(bb);
        for (let pb = wb, Vb = wb;;) {
          if (eb.next(pb), Hb.next(pb), pb = 0, eb.lineBreak != Hb.lineBreak || eb.done != Hb.done || eb.value != Hb.value) return !1;
          if (Vb += eb.value.length, eb.done || Vb >= Mb) return !0
        }
      }
      iter() {
        return new hb(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1)
      }
      iterRange(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        return new zb(this, bb, wb)
      }
      iterLines(bb, wb) {
        let Mb;
        if (null == bb) Mb = this.iter();
        else {
          null == wb && (wb = this.lines + 1);
          let eb = this.line(bb).from;
          Mb = this.iterRange(eb, Math.max(eb, wb == this.lines + 1 ? this.length : wb <= 1 ? 0 : this.line(wb - 1).to))
        }
        return new Xb(Mb)
      }
      toString() {
        return this.sliceString(0)
      }
      toJSON() {
        let bb = [];
        return this.flatten(bb), bb
      }
      constructor() {}
      static of (bb) {
        if (0 == bb.length) throw new RangeError("A document must have at least one line");
        return 1 != bb.length || bb[0] ? bb.length <= 32 ? new Fb(bb) : Bb.from(Fb.split(bb, [])) : Eb.empty
      }
    }
    class Fb extends Eb {
      constructor(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(bb) {
          let wb = -1;
          for (let Mb of bb) wb += Mb.length + 1;
          return wb
        }(bb);
        super(), this.text = bb, this.length = wb
      }
      get lines() {
        return this.text.length
      }
      get children() {
        return null
      }
      lineInner(bb, wb, Mb, eb) {
        for (let Hb = 0;; Hb++) {
          let pb = this.text[Hb],
            Vb = eb + pb.length;
          if ((wb ? Mb : Vb) >= bb) return new xb(eb, Vb, Mb, pb);
          eb = Vb + 1, Mb++
        }
      }
      decompose(bb, wb, Mb, eb) {
        let Hb = bb <= 0 && wb >= this.length ? this : new Fb(mb(this.text, bb, wb), Math.min(wb, this.length) - Math.max(0, bb));
        if (1 & eb) {
          let bb = Mb.pop(),
            wb = sb(Hb.text, bb.text.slice(), 0, Hb.length);
          if (wb.length <= 32) Mb.push(new Fb(wb, bb.length + Hb.length));
          else {
            let bb = wb.length >> 1;
            Mb.push(new Fb(wb.slice(0, bb)), new Fb(wb.slice(bb)))
          }
        } else Mb.push(Hb)
      }
      replace(bb, wb, Mb) {
        if (!(Mb instanceof Fb)) return super.replace(bb, wb, Mb);
        [bb, wb] = jb(this, bb, wb);
        let eb = sb(this.text, sb(Mb.text, mb(this.text, 0, bb)), wb),
          Hb = this.length + Mb.length - (wb - bb);
        return eb.length <= 32 ? new Fb(eb, Hb) : Bb.from(Fb.split(eb, []), Hb)
      }
      sliceString(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [bb, wb] = jb(this, bb, wb);
        let eb = "";
        for (let Hb = 0, pb = 0; Hb <= wb && pb < this.text.length; pb++) {
          let Vb = this.text[pb],
            gb = Hb + Vb.length;
          Hb > bb && pb && (eb += Mb), bb < gb && wb > Hb && (eb += Vb.slice(Math.max(0, bb - Hb), wb - Hb)), Hb = gb + 1
        }
        return eb
      }
      flatten(bb) {
        for (let wb of this.text) bb.push(wb)
      }
      scanIdentical() {
        return 0
      }
      static split(bb, wb) {
        let Mb = [],
          eb = -1;
        for (let Hb of bb) Mb.push(Hb), eb += Hb.length + 1, 32 == Mb.length && (wb.push(new Fb(Mb, eb)), Mb = [], eb = -1);
        return eb > -1 && wb.push(new Fb(Mb, eb)), wb
      }
    }
    class Bb extends Eb {
      constructor(bb, wb) {
        super(), this.children = bb, this.length = wb, this.lines = 0;
        for (let Mb of bb) this.lines += Mb.lines
      }
      lineInner(bb, wb, Mb, eb) {
        for (let Hb = 0;; Hb++) {
          let pb = this.children[Hb],
            Vb = eb + pb.length,
            gb = Mb + pb.lines - 1;
          if ((wb ? gb : Vb) >= bb) return pb.lineInner(bb, wb, Mb, eb);
          eb = Vb + 1, Mb = gb + 1
        }
      }
      decompose(bb, wb, Mb, eb) {
        for (let Hb = 0, pb = 0; pb <= wb && Hb < this.children.length; Hb++) {
          let Vb = this.children[Hb],
            gb = pb + Vb.length;
          if (bb <= gb && wb >= pb) {
            let Hb = eb & ((pb <= bb ? 1 : 0) | (gb >= wb ? 2 : 0));
            pb >= bb && gb <= wb && !Hb ? Mb.push(Vb) : Vb.decompose(bb - pb, wb - pb, Mb, Hb)
          }
          pb = gb + 1
        }
      }
      replace(bb, wb, Mb) {
        if ([bb, wb] = jb(this, bb, wb), Mb.lines < this.lines)
          for (let eb = 0, Hb = 0; eb < this.children.length; eb++) {
            let pb = this.children[eb],
              Vb = Hb + pb.length;
            if (bb >= Hb && wb <= Vb) {
              let gb = pb.replace(bb - Hb, wb - Hb, Mb),
                lb = this.lines - pb.lines + gb.lines;
              if (gb.lines < lb >> 4 && gb.lines > lb >> 6) {
                let Hb = this.children.slice();
                return Hb[eb] = gb, new Bb(Hb, this.length - (wb - bb) + Mb.length)
              }
              return super.replace(Hb, Vb, gb)
            }
            Hb = Vb + 1
          }
        return super.replace(bb, wb, Mb)
      }
      sliceString(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [bb, wb] = jb(this, bb, wb);
        let eb = "";
        for (let Hb = 0, pb = 0; Hb < this.children.length && pb <= wb; Hb++) {
          let Vb = this.children[Hb],
            gb = pb + Vb.length;
          pb > bb && Hb && (eb += Mb), bb < gb && wb > pb && (eb += Vb.sliceString(bb - pb, wb - pb, Mb)), pb = gb + 1
        }
        return eb
      }
      flatten(bb) {
        for (let wb of this.children) wb.flatten(bb)
      }
      scanIdentical(bb, wb) {
        if (!(bb instanceof Bb)) return 0;
        let Mb = 0,
          [eb, Hb, pb, Vb] = wb > 0 ? [0, 0, this.children.length, bb.children.length] : [this.children.length - 1, bb.children.length - 1, -1, -1];
        for (;; eb += wb, Hb += wb) {
          if (eb == pb || Hb == Vb) return Mb;
          let gb = this.children[eb],
            lb = bb.children[Hb];
          if (gb != lb) return Mb + gb.scanIdentical(lb, wb);
          Mb += gb.length + 1
        }
      }
      static from(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bb.reduce(((bb, wb) => bb + wb.length + 1), -1),
          Mb = 0;
        for (let Ub of bb) Mb += Ub.lines;
        if (Mb < 32) {
          let Mb = [];
          for (let wb of bb) wb.flatten(Mb);
          return new Fb(Mb, wb)
        }
        let eb = Math.max(32, Mb >> 5),
          Hb = eb << 1,
          pb = eb >> 1,
          Vb = [],
          gb = 0,
          lb = -1,
          Lb = [];

        function Ib(bb) {
          let wb;
          if (bb.lines > Hb && bb instanceof Bb)
            for (let Mb of bb.children) Ib(Mb);
          else bb.lines > pb && (gb > pb || !gb) ? (Ob(), Vb.push(bb)) : bb instanceof Fb && gb && (wb = Lb[Lb.length - 1]) instanceof Fb && bb.lines + wb.lines <= 32 ? (gb += bb.lines, lb += bb.length + 1, Lb[Lb.length - 1] = new Fb(wb.text.concat(bb.text), wb.length + 1 + bb.length)) : (gb + bb.lines > eb && Ob(), gb += bb.lines, lb += bb.length + 1, Lb.push(bb))
        }

        function Ob() {
          0 != gb && (Vb.push(1 == Lb.length ? Lb[0] : Bb.from(Lb, lb)), lb = -1, gb = Lb.length = 0)
        }
        for (let Ub of bb) Ib(Ub);
        return Ob(), 1 == Vb.length ? Vb[0] : new Bb(Vb, wb)
      }
    }

    function sb(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e9;
      for (let Hb = 0, pb = 0, Vb = !0; pb < bb.length && Hb <= eb; pb++) {
        let gb = bb[pb],
          lb = Hb + gb.length;
        lb >= Mb && (lb > eb && (gb = gb.slice(0, eb - Hb)), Hb < Mb && (gb = gb.slice(Mb - Hb)), Vb ? (wb[wb.length - 1] += gb, Vb = !1) : wb.push(gb)), Hb = lb + 1
      }
      return wb
    }

    function mb(bb, wb, Mb) {
      return sb(bb, [""], wb, Mb)
    }
    Eb.empty = new Fb([""], 0);
    class hb {
      constructor(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.dir = wb, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [bb], this.offsets = [wb > 0 ? 1 : (bb instanceof Fb ? bb.text.length : bb.children.length) << 1]
      }
      nextInner(bb, wb) {
        for (this.done = this.lineBreak = !1;;) {
          let Mb = this.nodes.length - 1,
            eb = this.nodes[Mb],
            Hb = this.offsets[Mb],
            pb = Hb >> 1,
            Vb = eb instanceof Fb ? eb.text.length : eb.children.length;
          if (pb == (wb > 0 ? Vb : 0)) {
            if (0 == Mb) return this.done = !0, this.value = "", this;
            wb > 0 && this.offsets[Mb - 1]++, this.nodes.pop(), this.offsets.pop()
          } else if ((1 & Hb) == (wb > 0 ? 0 : 1)) {
            if (this.offsets[Mb] += wb, 0 == bb) return this.lineBreak = !0, this.value = "\n", this;
            bb--
          } else if (eb instanceof Fb) {
            let Hb = eb.text[pb + (wb < 0 ? -1 : 0)];
            if (this.offsets[Mb] += wb, Hb.length > Math.max(0, bb)) return this.value = 0 == bb ? Hb : wb > 0 ? Hb.slice(bb) : Hb.slice(0, Hb.length - bb), this;
            bb -= Hb.length
          } else {
            let Hb = eb.children[pb + (wb < 0 ? -1 : 0)];
            bb > Hb.length ? (bb -= Hb.length, this.offsets[Mb] += wb) : (wb < 0 && this.offsets[Mb]--, this.nodes.push(Hb), this.offsets.push(wb > 0 ? 1 : (Hb instanceof Fb ? Hb.text.length : Hb.children.length) << 1))
          }
        }
      }
      next() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return bb < 0 && (this.nextInner(-bb, -this.dir), bb = this.value.length), this.nextInner(bb, this.dir)
      }
    }
    class zb {
      constructor(bb, wb, Mb) {
        this.value = "", this.done = !1, this.cursor = new hb(bb, wb > Mb ? -1 : 1), this.pos = wb > Mb ? bb.length : 0, this.from = Math.min(wb, Mb), this.to = Math.max(wb, Mb)
      }
      nextInner(bb, wb) {
        if (wb < 0 ? this.pos <= this.from : this.pos >= this.to) return this.value = "", this.done = !0, this;
        bb += Math.max(0, wb < 0 ? this.pos - this.to : this.from - this.pos);
        let Mb = wb < 0 ? this.pos - this.from : this.to - this.pos;
        bb > Mb && (bb = Mb), Mb -= bb;
        let {
          value: eb
        } = this.cursor.next(bb);
        return this.pos += (eb.length + bb) * wb, this.value = eb.length <= Mb ? eb : wb < 0 ? eb.slice(eb.length - Mb) : eb.slice(0, Mb), this.done = !this.value, this
      }
      next() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return bb < 0 ? bb = Math.max(bb, this.from - this.pos) : bb > 0 && (bb = Math.min(bb, this.to - this.pos)), this.nextInner(bb, this.cursor.dir)
      }
      get lineBreak() {
        return this.cursor.lineBreak && "" != this.value
      }
    }
    class Xb {
      constructor(bb) {
        this.inner = bb, this.afterBreak = !0, this.value = "", this.done = !1
      }
      next() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          {
            done: wb,
            lineBreak: Mb,
            value: eb
          } = this.inner.next(bb);
        return wb && this.afterBreak ? (this.value = "", this.afterBreak = !1) : wb ? (this.done = !0, this.value = "") : Mb ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = eb, this.afterBreak = !1), this
      }
      get lineBreak() {
        return !1
      }
    }
    "undefined" != typeof Symbol && (Eb.prototype[Symbol.iterator] = function() {
      return this.iter()
    }, hb.prototype[Symbol.iterator] = zb.prototype[Symbol.iterator] = Xb.prototype[Symbol.iterator] = function() {
      return this
    });
    class xb {
      constructor(bb, wb, Mb, eb) {
        this.from = bb, this.to = wb, this.number = Mb, this.text = eb
      }
      get length() {
        return this.to - this.from
      }
    }

    function jb(bb, wb, Mb) {
      return [wb = Math.max(0, Math.min(bb.length, wb)), Math.max(wb, Math.min(bb.length, Mb))]
    }

    function Kb(bb, wb) {
      return lb(bb, wb, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function rb(bb, wb) {
      let Mb = bb.charCodeAt(wb);
      if (!((eb = Mb) >= 55296 && eb < 56320) || wb + 1 == bb.length) return Mb;
      var eb;
      let Hb = bb.charCodeAt(wb + 1);
      return function(bb) {
        return bb >= 56320 && bb < 57344
      }(Hb) ? Hb - 56320 + (Mb - 55296 << 10) + 65536 : Mb
    }

    function Rb(bb) {
      return bb <= 65535 ? String.fromCharCode(bb) : (bb -= 65536, String.fromCharCode(55296 + (bb >> 10), 56320 + (1023 & bb)))
    }

    function Db(bb) {
      return bb < 65536 ? 1 : 2
    }
    const cb = /\r\n?|\n/;
    var Yb = function(bb) {
      return bb[bb.Simple = 0] = "Simple", bb[bb.TrackDel = 1] = "TrackDel", bb[bb.TrackBefore = 2] = "TrackBefore", bb[bb.TrackAfter = 3] = "TrackAfter", bb
    }(Yb || (Yb = {}));
    class Zb {
      constructor(bb) {
        this.sections = bb
      }
      get length() {
        let bb = 0;
        for (let wb = 0; wb < this.sections.length; wb += 2) bb += this.sections[wb];
        return bb
      }
      get newLength() {
        let bb = 0;
        for (let wb = 0; wb < this.sections.length; wb += 2) {
          let Mb = this.sections[wb + 1];
          bb += Mb < 0 ? this.sections[wb] : Mb
        }
        return bb
      }
      get empty() {
        return 0 == this.sections.length || 2 == this.sections.length && this.sections[1] < 0
      }
      iterGaps(bb) {
        for (let wb = 0, Mb = 0, eb = 0; wb < this.sections.length;) {
          let Hb = this.sections[wb++],
            pb = this.sections[wb++];
          pb < 0 ? (bb(Mb, eb, Hb), eb += Hb) : eb += pb, Mb += Hb
        }
      }
      iterChangedRanges(bb) {
        Jb(this, bb, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get invertedDesc() {
        let bb = [];
        for (let wb = 0; wb < this.sections.length;) {
          let Mb = this.sections[wb++],
            eb = this.sections[wb++];
          eb < 0 ? bb.push(Mb, eb) : bb.push(eb, Mb)
        }
        return new Zb(bb)
      }
      composeDesc(bb) {
        return this.empty ? bb : bb.empty ? this : Nb(this, bb)
      }
      mapDesc(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return bb.empty ? this : Sb(this, bb, wb)
      }
      mapPos(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Yb.Simple,
          eb = 0,
          Hb = 0;
        for (let pb = 0; pb < this.sections.length;) {
          let Vb = this.sections[pb++],
            gb = this.sections[pb++],
            lb = eb + Vb;
          if (gb < 0) {
            if (lb > bb) return Hb + (bb - eb);
            Hb += Vb
          } else {
            if (Mb != Yb.Simple && lb >= bb && (Mb == Yb.TrackDel && eb < bb && lb > bb || Mb == Yb.TrackBefore && eb < bb || Mb == Yb.TrackAfter && lb > bb)) return null;
            if (lb > bb || lb == bb && wb < 0 && !Vb) return bb == eb || wb < 0 ? Hb : Hb + gb;
            Hb += gb
          }
          eb = lb
        }
        if (bb > eb) throw new RangeError(`Position ${bb} is out of range for changeset of length ${eb}`);
        return Hb
      }
      touchesRange(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bb;
        for (let Mb = 0, eb = 0; Mb < this.sections.length && eb <= wb;) {
          let Hb = eb + this.sections[Mb++];
          if (this.sections[Mb++] >= 0 && eb <= wb && Hb >= bb) return !(eb < bb && Hb > wb) || "cover";
          eb = Hb
        }
        return !1
      }
      toString() {
        let bb = "";
        for (let wb = 0; wb < this.sections.length;) {
          let Mb = this.sections[wb++],
            eb = this.sections[wb++];
          bb += (bb ? " " : "") + Mb + (eb >= 0 ? ":" + eb : "")
        }
        return bb
      }
      toJSON() {
        return this.sections
      }
      static fromJSON(bb) {
        if (!Array.isArray(bb) || bb.length % 2 || bb.some((bb => "number" != typeof bb))) throw new RangeError("Invalid JSON representation of ChangeDesc");
        return new Zb(bb)
      }
      static create(bb) {
        return new Zb(bb)
      }
    }
    class fb extends Zb {
      constructor(bb, wb) {
        super(bb), this.inserted = wb
      }
      apply(bb) {
        if (this.length != bb.length) throw new RangeError("Applying change set to a document with the wrong length");
        return Jb(this, ((wb, Mb, eb, Hb, pb) => bb = bb.replace(eb, eb + (Mb - wb), pb)), !1), bb
      }
      mapDesc(bb) {
        return Sb(this, bb, arguments.length > 1 && void 0 !== arguments[1] && arguments[1], !0)
      }
      invert(bb) {
        let wb = this.sections.slice(),
          Mb = [];
        for (let eb = 0, Hb = 0; eb < wb.length; eb += 2) {
          let pb = wb[eb],
            Vb = wb[eb + 1];
          if (Vb >= 0) {
            wb[eb] = Vb, wb[eb + 1] = pb;
            let gb = eb >> 1;
            for (; Mb.length < gb;) Mb.push(Eb.empty);
            Mb.push(pb ? bb.slice(Hb, Hb + pb) : Eb.empty)
          }
          Hb += pb
        }
        return new fb(wb, Mb)
      }
      compose(bb) {
        return this.empty ? bb : bb.empty ? this : Nb(this, bb, !0)
      }
      map(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return bb.empty ? this : Sb(this, bb, wb, !0)
      }
      iterChanges(bb) {
        Jb(this, bb, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get desc() {
        return Zb.create(this.sections)
      }
      filter(bb) {
        let wb = [],
          Mb = [],
          eb = [],
          Hb = new vb(this);
        bb: for (let pb = 0, Vb = 0;;) {
          let gb = pb == bb.length ? 1e9 : bb[pb++];
          for (; Vb < gb || Vb == gb && 0 == Hb.len;) {
            if (Hb.done) break bb;
            let bb = Math.min(Hb.len, gb - Vb);
            Ab(eb, bb, -1);
            let pb = -1 == Hb.ins ? -1 : 0 == Hb.off ? Hb.ins : 0;
            Ab(wb, bb, pb), pb > 0 && Wb(Mb, wb, Hb.text), Hb.forward(bb), Vb += bb
          }
          let lb = bb[pb++];
          for (; Vb < lb;) {
            if (Hb.done) break bb;
            let bb = Math.min(Hb.len, lb - Vb);
            Ab(wb, bb, -1), Ab(eb, bb, -1 == Hb.ins ? -1 : 0 == Hb.off ? Hb.ins : 0), Hb.forward(bb), Vb += bb
          }
        }
        return {
          changes: new fb(wb, Mb),
          filtered: Zb.create(eb)
        }
      }
      toJSON() {
        let bb = [];
        for (let wb = 0; wb < this.sections.length; wb += 2) {
          let Mb = this.sections[wb],
            eb = this.sections[wb + 1];
          eb < 0 ? bb.push(Mb) : 0 == eb ? bb.push([Mb]) : bb.push([Mb].concat(this.inserted[wb >> 1].toJSON()))
        }
        return bb
      }
      static of (bb, wb, Mb) {
        let eb = [],
          Hb = [],
          pb = 0,
          Vb = null;

        function gb() {
          if (!(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && !eb.length) return;
          pb < wb && Ab(eb, wb - pb, -1);
          let bb = new fb(eb, Hb);
          Vb = Vb ? Vb.compose(bb.map(Vb)) : bb, eb = [], Hb = [], pb = 0
        }
        return function bb(lb) {
          if (Array.isArray(lb))
            for (let wb of lb) bb(wb);
          else if (lb instanceof fb) {
            if (lb.length != wb) throw new RangeError(`Mismatched change set length (got ${lb.length}, expected ${wb})`);
            gb(), Vb = Vb ? Vb.compose(lb.map(Vb)) : lb
          } else {
            let {
              from: bb,
              to: Vb = bb,
              insert: Lb
            } = lb;
            if (bb > Vb || bb < 0 || Vb > wb) throw new RangeError(`Invalid change range ${bb} to ${Vb} (in doc of length ${wb})`);
            let Ib = Lb ? "string" == typeof Lb ? Eb.of(Lb.split(Mb || cb)) : Lb : Eb.empty,
              Ob = Ib.length;
            if (bb == Vb && 0 == Ob) return;
            bb < pb && gb(), bb > pb && Ab(eb, bb - pb, -1), Ab(eb, Vb - bb, Ob), Wb(Hb, eb, Ib), pb = Vb
          }
        }(bb), gb(!Vb), Vb
      }
      static empty(bb) {
        return new fb(bb ? [bb, -1] : [], [])
      }
      static fromJSON(bb) {
        if (!Array.isArray(bb)) throw new RangeError("Invalid JSON representation of ChangeSet");
        let wb = [],
          Mb = [];
        for (let eb = 0; eb < bb.length; eb++) {
          let Hb = bb[eb];
          if ("number" == typeof Hb) wb.push(Hb, -1);
          else {
            if (!Array.isArray(Hb) || "number" != typeof Hb[0] || Hb.some(((bb, wb) => wb && "string" != typeof bb))) throw new RangeError("Invalid JSON representation of ChangeSet");
            if (1 == Hb.length) wb.push(Hb[0], 0);
            else {
              for (; Mb.length < eb;) Mb.push(Eb.empty);
              Mb[eb] = Eb.of(Hb.slice(1)), wb.push(Hb[0], Mb[eb].length)
            }
          }
        }
        return new fb(wb, Mb)
      }
      static createSet(bb, wb) {
        return new fb(bb, wb)
      }
    }

    function Ab(bb, wb, Mb) {
      let eb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (0 == wb && Mb <= 0) return;
      let Hb = bb.length - 2;
      Hb >= 0 && Mb <= 0 && Mb == bb[Hb + 1] ? bb[Hb] += wb : Hb >= 0 && 0 == wb && 0 == bb[Hb] ? bb[Hb + 1] += Mb : eb ? (bb[Hb] += wb, bb[Hb + 1] += Mb) : bb.push(wb, Mb)
    }

    function Wb(bb, wb, Mb) {
      if (0 == Mb.length) return;
      let eb = wb.length - 2 >> 1;
      if (eb < bb.length) bb[bb.length - 1] = bb[bb.length - 1].append(Mb);
      else {
        for (; bb.length < eb;) bb.push(Eb.empty);
        bb.push(Mb)
      }
    }

    function Jb(bb, wb, Mb) {
      let eb = bb.inserted;
      for (let Hb = 0, pb = 0, Vb = 0; Vb < bb.sections.length;) {
        let gb = bb.sections[Vb++],
          lb = bb.sections[Vb++];
        if (lb < 0) Hb += gb, pb += gb;
        else {
          let Lb = Hb,
            Ib = pb,
            Ob = Eb.empty;
          for (; Lb += gb, Ib += lb, lb && eb && (Ob = Ob.append(eb[Vb - 2 >> 1])), !(Mb || Vb == bb.sections.length || bb.sections[Vb + 1] < 0);) gb = bb.sections[Vb++], lb = bb.sections[Vb++];
          wb(Hb, Lb, pb, Ib, Ob), Hb = Lb, pb = Ib
        }
      }
    }

    function Sb(bb, wb, Mb) {
      let eb = [],
        Hb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3] ? [] : null,
        pb = new vb(bb),
        Vb = new vb(wb),
        gb = 0;
      for (let lb = -1;;) {
        if (++gb > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - likely malformed ChangeSet");
        if (pb.done && Vb.len || Vb.done && pb.len) throw new Error("Mismatched change set lengths");
        if (-1 == pb.ins && -1 == Vb.ins) {
          let bb = Math.min(pb.len, Vb.len);
          Ab(eb, bb, -1), pb.forward(bb), Vb.forward(bb)
        } else if (Vb.ins >= 0 && (pb.ins < 0 || lb == pb.i || 0 == pb.off && (Vb.len < pb.len || Vb.len == pb.len && !Mb))) {
          let bb = Vb.len;
          for (Ab(eb, Vb.ins, -1); bb;) {
            if (++gb > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-b");
            let wb = Math.min(pb.len, bb);
            pb.ins >= 0 && lb < pb.i && pb.len <= wb && (Ab(eb, 0, pb.ins), Hb && Wb(Hb, eb, pb.text), lb = pb.i), pb.forward(wb), bb -= wb
          }
          Vb.next()
        } else {
          if (!(pb.ins >= 0)) {
            if (pb.done && Vb.done) return Hb ? fb.createSet(eb, Hb) : Zb.create(eb);
            throw new Error("Mismatched change set lengths")
          } {
            let bb = 0,
              wb = pb.len;
            for (; wb;) {
              if (++gb > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-a");
              if (-1 == Vb.ins) {
                let Mb = Math.min(wb, Vb.len);
                bb += Mb, wb -= Mb, Vb.forward(Mb)
              } else {
                if (!(0 == Vb.ins && Vb.len < wb)) break;
                wb -= Vb.len, Vb.next()
              }
            }
            Ab(eb, bb, lb < pb.i ? pb.ins : 0), Hb && lb < pb.i && Wb(Hb, eb, pb.text), lb = pb.i, pb.forward(pb.len - wb)
          }
        }
      }
    }

    function Nb(bb, wb) {
      let Mb = [],
        eb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? [] : null,
        Hb = new vb(bb),
        pb = new vb(wb),
        Vb = 0;
      for (let gb = !1;;) {
        if (++Vb > 2e6) throw new Error("BLOXD CODEMIRROR: composeSets exceeded max iterations - likely malformed ChangeSet");
        if (Hb.done && pb.done) return eb ? fb.createSet(Mb, eb) : Zb.create(Mb);
        if (0 == Hb.ins) Ab(Mb, Hb.len, 0, gb), Hb.next();
        else if (0 != pb.len || pb.done) {
          if (Hb.done || pb.done) throw new Error("Mismatched change set lengths");
          {
            let bb = Math.min(Hb.len2, pb.len),
              wb = Mb.length;
            if (-1 == Hb.ins) {
              let wb = -1 == pb.ins ? -1 : pb.off ? 0 : pb.ins;
              Ab(Mb, bb, wb, gb), eb && wb && Wb(eb, Mb, pb.text)
            } else - 1 == pb.ins ? (Ab(Mb, Hb.off ? 0 : Hb.len, bb, gb), eb && Wb(eb, Mb, Hb.textBit(bb))) : (Ab(Mb, Hb.off ? 0 : Hb.len, pb.off ? 0 : pb.ins, gb), eb && !pb.off && Wb(eb, Mb, pb.text));
            gb = (Hb.ins > bb || pb.ins >= 0 && pb.len > bb) && (gb || Mb.length > wb), Hb.forward2(bb), pb.forward(bb)
          }
        } else Ab(Mb, 0, pb.ins, gb), eb && Wb(eb, Mb, pb.text), pb.next()
      }
    }
    class vb {
      constructor(bb) {
        this.set = bb, this.i = 0, this.next()
      }
      next() {
        let {
          sections: bb
        } = this.set;
        this.i < bb.length ? (this.len = bb[this.i++], this.ins = bb[this.i++]) : (this.len = 0, this.ins = -2), this.off = 0
      }
      get done() {
        return -2 == this.ins
      }
      get len2() {
        return this.ins < 0 ? this.len : this.ins
      }
      get text() {
        let {
          inserted: bb
        } = this.set, wb = this.i - 2 >> 1;
        return wb >= bb.length ? Eb.empty : bb[wb]
      }
      textBit(bb) {
        let {
          inserted: wb
        } = this.set, Mb = this.i - 2 >> 1;
        return Mb >= wb.length && !bb ? Eb.empty : wb[Mb].slice(this.off, null == bb ? void 0 : this.off + bb)
      }
      forward(bb) {
        bb == this.len ? this.next() : (this.len -= bb, this.off += bb)
      }
      forward2(bb) {
        -1 == this.ins ? this.forward(bb) : bb == this.ins ? this.next() : (this.ins -= bb, this.off += bb)
      }
    }
    class Qb {
      constructor(bb, wb, Mb) {
        this.from = bb, this.to = wb, this.flags = Mb
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
        let bb = 7 & this.flags;
        return 7 == bb ? null : bb
      }
      get goalColumn() {
        let bb = this.flags >> 6;
        return 16777215 == bb ? void 0 : bb
      }
      map(bb) {
        let wb, Mb, eb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return this.empty ? wb = Mb = bb.mapPos(this.from, eb) : (wb = bb.mapPos(this.from, 1), Mb = bb.mapPos(this.to, -1)), wb == this.from && Mb == this.to ? this : new Qb(wb, Mb, this.flags)
      }
      extend(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bb,
          Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (bb <= this.anchor && wb >= this.anchor) return Gb.range(bb, wb, void 0, void 0, Mb);
        let eb = Math.abs(bb - this.anchor) > Math.abs(wb - this.anchor) ? bb : wb;
        return Gb.range(this.anchor, eb, void 0, void 0, Mb)
      }
      eq(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.anchor == bb.anchor && this.head == bb.head && this.goalColumn == bb.goalColumn && (!wb || !this.empty || this.assoc == bb.assoc)
      }
      toJSON() {
        return {
          anchor: this.anchor,
          head: this.head
        }
      }
      static fromJSON(bb) {
        if (!bb || "number" != typeof bb.anchor || "number" != typeof bb.head) throw new RangeError("Invalid JSON representation for SelectionRange");
        return Gb.range(bb.anchor, bb.head)
      }
      static create(bb, wb, Mb) {
        return new Qb(bb, wb, Mb)
      }
    }
    class Gb {
      constructor(bb, wb) {
        this.gF = bb, this.mainIndex = wb
      }
      map(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return bb.empty ? this : Gb.create(this.gF.map((Mb => Mb.map(bb, wb))), this.mainIndex)
      }
      eq(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.gF.length != bb.gF.length || this.mainIndex != bb.mainIndex) return !1;
        for (let Mb = 0; Mb < this.gF.length; Mb++)
          if (!this.gF[Mb].eq(bb.gF[Mb], wb)) return !1;
        return !0
      }
      get main() {
        return this.gF[this.mainIndex]
      }
      asSingle() {
        return 1 == this.gF.length ? this : new Gb([this.main], 0)
      }
      addRange(bb) {
        let wb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return Gb.create([bb].concat(this.gF), wb ? 0 : this.mainIndex + 1)
      }
      replaceRange(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.mainIndex,
          Mb = this.gF.slice();
        return Mb[wb] = bb, Gb.create(Mb, this.mainIndex)
      }
      toJSON() {
        return {
          gF: this.gF.map((bb => bb.toJSON())),
          main: this.mainIndex
        }
      }
      static fromJSON(bb) {
        if (!bb || !Array.isArray(bb.gF) || "number" != typeof bb.main || bb.main >= bb.gF.length) throw new RangeError("Invalid JSON representation for EditorSelection");
        return new Gb(bb.gF.map((bb => Qb.fromJSON(bb))), bb.main)
      }
      static single(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bb;
        return new Gb([Gb.range(bb, wb)], 0)
      }
      static create(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (0 == bb.length) throw new RangeError("A selection needs at least one range");
        for (let Mb = 0, eb = 0; eb < bb.length; eb++) {
          let Hb = bb[eb];
          if (Hb.empty ? Hb.from <= Mb : Hb.from < Mb) return Gb.normalized(bb.slice(), wb);
          Mb = Hb.to
        }
        return new Gb(bb, wb)
      }
      static cursor(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Mb = arguments.length > 2 ? arguments[2] : void 0,
          eb = arguments.length > 3 ? arguments[3] : void 0;
        return Qb.create(bb, bb, (0 == wb ? 0 : wb < 0 ? 8 : 16) | (null == Mb ? 7 : Math.min(6, Mb)) | (null !== eb && void 0 !== eb ? eb : 16777215) << 6)
      }
      static range(bb, wb, Mb, eb, Hb) {
        let pb = (null !== Mb && void 0 !== Mb ? Mb : 16777215) << 6 | (null == eb ? 7 : Math.min(6, eb));
        return Hb || bb == wb || (Hb = wb < bb ? 1 : -1), wb < bb ? Qb.create(wb, bb, 48 | pb) : Qb.create(bb, wb, (Hb ? Hb < 0 ? 8 : 16 : 0) | pb)
      }
      static normalized(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Mb = bb[wb];
        bb.sort(((bb, wb) => bb.from - wb.from)), wb = bb.indexOf(Mb);
        for (let eb = 1; eb < bb.length; eb++) {
          let Mb = bb[eb],
            Hb = bb[eb - 1];
          if (Mb.empty ? Mb.from <= Hb.to : Mb.from < Hb.to) {
            let pb = Hb.from,
              Vb = Math.max(Mb.to, Hb.to);
            eb <= wb && wb--, bb.splice(--eb, 2, Mb.anchor > Mb.head ? Gb.range(Vb, pb) : Gb.range(pb, Vb))
          }
        }
        return new Gb(bb, wb)
      }
    }

    function qb(bb, wb) {
      for (let Mb of bb.gF)
        if (Mb.to > wb) throw new RangeError("Selection points outside of document")
    }
    let ab = 0;
    class ib {
      constructor(bb, wb, Mb, eb, Hb) {
        this.combine = bb, this.compareInput = wb, this.compare = Mb, this.isStatic = eb, this.id = ab++, this.default = bb([]), this.extensions = "function" == typeof Hb ? Hb(this) : Hb
      }
      get reader() {
        return this
      }
      static define() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return new ib(bb.combine || (bb => bb), bb.compareInput || ((bb, wb) => bb === wb), bb.compare || (bb.combine ? (bb, wb) => bb === wb : ub), !!bb.static, bb.enables)
      }
      of(bb) {
        return new db([], this, 0, bb)
      }
      compute(bb, wb) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new db(bb, this, 1, wb)
      }
      computeN(bb, wb) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new db(bb, this, 2, wb)
      }
      from(bb, wb) {
        return wb || (wb = bb => bb), this.compute([bb], (Mb => wb(Mb.field(bb))))
      }
    }

    function ub(bb, wb) {
      return bb == wb || bb.length == wb.length && bb.every(((bb, Mb) => bb === wb[Mb]))
    }
    class db {
      constructor(bb, wb, Mb, eb) {
        this.dependencies = bb, this.facet = wb, this.type = Mb, this.value = eb, this.id = ab++
      }
      dynamicSlot(bb) {
        var wb;
        let Mb = this.value,
          eb = this.facet.compareInput,
          Hb = this.id,
          pb = bb[Hb] >> 1,
          Vb = 2 == this.type,
          gb = !1,
          lb = !1,
          Lb = [];
        for (let Ib of this.dependencies) "doc" == Ib ? gb = !0 : "selection" == Ib ? lb = !0 : 0 == (1 & (null !== (wb = bb[Ib.id]) && void 0 !== wb ? wb : 1)) && Lb.push(bb[Ib.id]);
        return {
          create: bb => (bb.values[pb] = Mb(bb), 1),
          update(bb, wb) {
            if (gb && wb.docChanged || lb && (wb.docChanged || wb.selection) || nb(bb, Lb)) {
              let wb = Mb(bb);
              if (Vb ? !Pb(wb, bb.values[pb], eb) : !eb(wb, bb.values[pb])) return bb.values[pb] = wb, 1
            }
            return 0
          },
          reconfigure: (bb, wb) => {
            let gb, lb = wb.config.address[Hb];
            if (null != lb) {
              let Hb = Iw(wb, lb);
              if (this.dependencies.every((Mb => Mb instanceof ib ? wb.facet(Mb) === bb.facet(Mb) : !(Mb instanceof Tb) || wb.field(Mb, !1) == bb.field(Mb, !1))) || (Vb ? Pb(gb = Mb(bb), Hb, eb) : eb(gb = Mb(bb), Hb))) return bb.values[pb] = Hb, 0
            } else gb = Mb(bb);
            return bb.values[pb] = gb, 1
          }
        }
      }
    }

    function Pb(bb, wb, Mb) {
      if (bb.length != wb.length) return !1;
      for (let eb = 0; eb < bb.length; eb++)
        if (!Mb(bb[eb], wb[eb])) return !1;
      return !0
    }

    function nb(bb, wb) {
      let Mb = !1;
      for (let eb of wb) 1 & Lw(bb, eb) && (Mb = !0);
      return Mb
    }

    function yb(bb, wb, Mb) {
      let eb = Mb.map((wb => bb[wb.id])),
        Hb = Mb.map((bb => bb.type)),
        pb = eb.filter((bb => !(1 & bb))),
        Vb = bb[wb.id] >> 1;

      function gb(bb) {
        let Mb = [];
        for (let wb = 0; wb < eb.length; wb++) {
          let pb = Iw(bb, eb[wb]);
          if (2 == Hb[wb])
            for (let bb of pb) Mb.push(bb);
          else Mb.push(pb)
        }
        return wb.combine(Mb)
      }
      return {
        create(bb) {
          for (let wb of eb) Lw(bb, wb);
          return bb.values[Vb] = gb(bb), 1
        },
        update(bb, Mb) {
          if (!nb(bb, pb)) return 0;
          let eb = gb(bb);
          return wb.compare(eb, bb.values[Vb]) ? 0 : (bb.values[Vb] = eb, 1)
        },
        reconfigure(bb, Hb) {
          let pb = nb(bb, eb),
            lb = Hb.config.facets[wb.id],
            Lb = Hb.facet(wb);
          if (lb && !pb && ub(Mb, lb)) return bb.values[Vb] = Lb, 0;
          let Ib = gb(bb);
          return wb.compare(Ib, Lb) ? (bb.values[Vb] = Lb, 0) : (bb.values[Vb] = Ib, 1)
        }
      }
    }
    const ob = ib.define({
      static: !0
    });
    class Tb {
      constructor(bb, wb, Mb, eb, Hb) {
        this.id = bb, this.createF = wb, this.updateF = Mb, this.compareF = eb, this.spec = Hb, this.provides = void 0
      }
      static define(bb) {
        let wb = new Tb(ab++, bb.create, bb.update, bb.compare || ((bb, wb) => bb === wb), bb);
        return bb.provide && (wb.provides = bb.provide(wb)), wb
      }
      create(bb) {
        let wb = bb.facet(ob).find((bb => bb.field == this));
        return ((null === wb || void 0 === wb ? void 0 : wb.create) || this.createF)(bb)
      }
      slot(bb) {
        let wb = bb[this.id] >> 1;
        return {
          create: bb => (bb.values[wb] = this.create(bb), 1),
          update: (bb, Mb) => {
            let eb = bb.values[wb],
              Hb = this.updateF(eb, Mb);
            return this.compareF(eb, Hb) ? 0 : (bb.values[wb] = Hb, 1)
          },
          reconfigure: (bb, Mb) => {
            let eb, Hb = bb.facet(ob),
              pb = Mb.facet(ob);
            return (eb = Hb.find((bb => bb.field == this))) && eb != pb.find((bb => bb.field == this)) ? (bb.values[wb] = eb.create(bb), 1) : null != Mb.config.address[this.id] ? (bb.values[wb] = Mb.field(this), 0) : (bb.values[wb] = this.create(bb), 1)
          }
        }
      }
      init(bb) {
        return [this, ob.of({
          field: this,
          create: bb
        })]
      }
      get extension() {
        return this
      }
    }
    const kb = 4,
      bw = 3,
      ww = 2,
      Mw = 1;

    function ew(bb) {
      return wb => new pw(wb, bb)
    }
    const Hw = {
      highest: ew(0),
      high: ew(Mw),
      default: ew(ww),
      low: ew(bw),
      lowest: ew(kb)
    };
    class pw {
      constructor(bb, wb) {
        this.inner = bb, this.prec = wb
      }
    }
    class Vw {
      of(bb) {
        return new gw(this, bb)
      }
      reconfigure(bb) {
        return Vw.reconfigure.of({
          compartment: this,
          extension: bb
        })
      }
      get(bb) {
        return bb.config.compartments.get(this)
      }
    }
    class gw {
      constructor(bb, wb) {
        this.compartment = bb, this.inner = wb
      }
    }
    class lw {
      constructor(bb, wb, Mb, eb, Hb, pb) {
        for (this.base = bb, this.compartments = wb, this.dynamicSlots = Mb, this.address = eb, this.staticValues = Hb, this.facets = pb, this.statusTemplate = []; this.statusTemplate.length < Mb.length;) this.statusTemplate.push(0)
      }
      staticFacet(bb) {
        let wb = this.address[bb.id];
        return null == wb ? bb.default : this.staticValues[wb >> 1]
      }
      static resolve(bb, wb, Mb) {
        let eb = [],
          Hb = Object.create(null),
          pb = new Map;
        for (let Ob of function(bb, wb, Mb) {
            let eb = [
                [],
                [],
                [],
                [],
                []
              ],
              Hb = new Map;

            function pb(bb, Vb) {
              let gb = Hb.get(bb);
              if (null != gb) {
                if (gb <= Vb) return;
                let wb = eb[gb].indexOf(bb);
                wb > -1 && eb[gb].splice(wb, 1), bb instanceof gw && Mb.delete(bb.compartment)
              }
              if (Hb.set(bb, Vb), Array.isArray(bb))
                for (let wb of bb) pb(wb, Vb);
              else if (bb instanceof gw) {
                if (Mb.has(bb.compartment)) throw new RangeError("Duplicate use of compartment in extensions");
                let eb = wb.get(bb.compartment) || bb.inner;
                Mb.set(bb.compartment, eb), pb(eb, Vb)
              } else if (bb instanceof pw) pb(bb.inner, bb.prec);
              else if (bb instanceof Tb) eb[Vb].push(bb), bb.provides && pb(bb.provides, Vb);
              else if (bb instanceof db) eb[Vb].push(bb), bb.facet.extensions && pb(bb.facet.extensions, ww);
              else {
                let wb = bb.extension;
                if (!wb) throw new Error(`Unrecognized extension value in extension set (${bb}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
                pb(wb, Vb)
              }
            }
            return pb(bb, ww), eb.reduce(((bb, wb) => bb.concat(wb)))
          }(bb, wb, pb)) Ob instanceof Tb ? eb.push(Ob) : (Hb[Ob.facet.id] || (Hb[Ob.facet.id] = [])).push(Ob);
        let Vb = Object.create(null),
          gb = [],
          lb = [];
        for (let Ob of eb) Vb[Ob.id] = lb.length << 1, lb.push((bb => Ob.slot(bb)));
        let Lb = null === Mb || void 0 === Mb ? void 0 : Mb.config.facets;
        for (let Ob in Hb) {
          let bb = Hb[Ob],
            wb = bb[0].facet,
            eb = Lb && Lb[Ob] || [];
          if (bb.every((bb => 0 == bb.type)))
            if (Vb[wb.id] = gb.length << 1 | 1, ub(eb, bb)) gb.push(Mb.facet(wb));
            else {
              let eb = wb.combine(bb.map((bb => bb.value)));
              gb.push(Mb && wb.compare(eb, Mb.facet(wb)) ? Mb.facet(wb) : eb)
            }
          else {
            for (let wb of bb) 0 == wb.type ? (Vb[wb.id] = gb.length << 1 | 1, gb.push(wb.value)) : (Vb[wb.id] = lb.length << 1, lb.push((bb => wb.dynamicSlot(bb))));
            Vb[wb.id] = lb.length << 1, lb.push((Mb => yb(Mb, wb, bb)))
          }
        }
        let Ib = lb.map((bb => bb(Vb)));
        return new lw(bb, pb, Ib, Vb, gb, Hb)
      }
    }

    function Lw(bb, wb) {
      if (1 & wb) return 2;
      let Mb = wb >> 1,
        eb = bb.status[Mb];
      if (4 == eb) throw new Error("Cyclic dependency between fields and/or facets");
      if (2 & eb) return eb;
      bb.status[Mb] = 4;
      let Hb = bb.computeSlot(bb, bb.config.dynamicSlots[Mb]);
      return bb.status[Mb] = 2 | Hb
    }

    function Iw(bb, wb) {
      return 1 & wb ? bb.config.staticValues[wb >> 1] : bb.values[wb >> 1]
    }
    const Ow = ib.define(),
      Uw = ib.define({
        combine: bb => bb.some((bb => bb)),
        static: !0
      }),
      tw = ib.define({
        combine: bb => bb.length ? bb[0] : void 0,
        static: !0
      }),
      Cw = ib.define(),
      Ew = ib.define(),
      Fw = ib.define(),
      Bw = ib.define({
        combine: bb => !!bb.length && bb[0]
      });
    class sw {
      constructor(bb, wb) {
        this.type = bb, this.value = wb
      }
      static define() {
        return new mw
      }
    }
    class mw {
      of(bb) {
        return new sw(this, bb)
      }
    }
    class hw {
      constructor(bb) {
        this.map = bb
      }
      of(bb) {
        return new zw(this, bb)
      }
    }
    class zw {
      constructor(bb, wb) {
        this.type = bb, this.value = wb
      }
      map(bb) {
        let wb = this.type.map(this.value, bb);
        return void 0 === wb ? void 0 : wb == this.value ? this : new zw(this.type, wb)
      }
      is(bb) {
        return this.type == bb
      }
      static define() {
        return new hw((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).map || (bb => bb))
      }
      static mapEffects(bb, wb) {
        if (!bb.length) return bb;
        let Mb = [];
        for (let eb of bb) {
          let bb = eb.map(wb);
          bb && Mb.push(bb)
        }
        return Mb
      }
    }
    zw.reconfigure = zw.define(), zw.appendConfig = zw.define();
    class Xw {
      constructor(bb, wb, Mb, eb, Hb, pb) {
        this.startState = bb, this.changes = wb, this.selection = Mb, this.effects = eb, this.annotations = Hb, this.scrollIntoView = pb, this._doc = null, this._state = null, Mb && qb(Mb, wb.newLength), Hb.some((bb => bb.type == Xw.time)) || (this.annotations = Hb.concat(Xw.time.of(Date.now())))
      }
      static create(bb, wb, Mb, eb, Hb, pb) {
        return new Xw(bb, wb, Mb, eb, Hb, pb)
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
      annotation(bb) {
        for (let wb of this.annotations)
          if (wb.type == bb) return wb.value
      }
      get docChanged() {
        return !this.changes.empty
      }
      get reconfigured() {
        return this.startState.config != this.state.config
      }
      isUserEvent(bb) {
        let wb = this.annotation(Xw.userEvent);
        return !(!wb || !(wb == bb || wb.length > bb.length && wb.slice(0, bb.length) == bb && "." == wb[bb.length]))
      }
    }

    function xw(bb, wb) {
      let Mb = [];
      for (let eb = 0, Hb = 0;;) {
        let pb, Vb;
        if (eb < bb.length && (Hb == wb.length || wb[Hb] >= bb[eb])) pb = bb[eb++], Vb = bb[eb++];
        else {
          if (!(Hb < wb.length)) return Mb;
          pb = wb[Hb++], Vb = wb[Hb++]
        }!Mb.length || Mb[Mb.length - 1] < pb ? Mb.push(pb, Vb) : Mb[Mb.length - 1] < Vb && (Mb[Mb.length - 1] = Vb)
      }
    }

    function jw(bb, wb, Mb) {
      var eb;
      let Hb, pb, Vb;
      return Mb ? (Hb = wb.changes, pb = fb.empty(wb.changes.length), Vb = bb.changes.compose(wb.changes)) : (Hb = wb.changes.map(bb.changes), pb = bb.changes.mapDesc(wb.changes, !0), Vb = bb.changes.compose(Hb)), {
        changes: Vb,
        selection: wb.selection ? wb.selection.map(pb) : null === (eb = bb.selection) || void 0 === eb ? void 0 : eb.map(Hb),
        effects: zw.mapEffects(bb.effects, Hb).concat(zw.mapEffects(wb.effects, pb)),
        annotations: bb.annotations.length ? bb.annotations.concat(wb.annotations) : wb.annotations,
        scrollIntoView: bb.scrollIntoView || wb.scrollIntoView
      }
    }

    function Kw(bb, wb, Mb) {
      let eb = wb.selection,
        Hb = Dw(wb.annotations);
      return wb.userEvent && (Hb = Hb.concat(Xw.userEvent.of(wb.userEvent))), {
        changes: wb.changes instanceof fb ? wb.changes : fb.of(wb.changes || [], Mb, bb.facet(tw)),
        selection: eb && (eb instanceof Gb ? eb : Gb.single(eb.anchor, eb.head)),
        effects: Dw(wb.effects),
        annotations: Hb,
        scrollIntoView: !!wb.scrollIntoView
      }
    }

    function rw(bb, wb, Mb) {
      let eb = Kw(bb, wb.length ? wb[0] : {}, bb.doc.length);
      wb.length && !1 === wb[0].filter && (Mb = !1);
      for (let pb = 1; pb < wb.length; pb++) {
        !1 === wb[pb].filter && (Mb = !1);
        let Hb = !!wb[pb].sequential;
        eb = jw(eb, Kw(bb, wb[pb], Hb ? eb.changes.newLength : bb.doc.length), Hb)
      }
      let Hb = Xw.create(bb, eb.changes, eb.selection, eb.effects, eb.annotations, eb.scrollIntoView);
      return function(bb) {
        let wb = bb.startState,
          Mb = wb.facet(Fw),
          eb = bb;
        for (let Hb = Mb.length - 1; Hb >= 0; Hb--) {
          let pb = Mb[Hb](bb);
          pb && Object.keys(pb).length && (eb = jw(eb, Kw(wb, pb, bb.changes.newLength), !0))
        }
        return eb == bb ? bb : Xw.create(wb, bb.changes, bb.selection, eb.effects, eb.annotations, eb.scrollIntoView)
      }(Mb ? function(bb) {
        let wb = bb.startState,
          Mb = !0;
        for (let Hb of wb.facet(Cw)) {
          let wb = Hb(bb);
          if (!1 === wb) {
            Mb = !1;
            break
          }
          Array.isArray(wb) && (Mb = !0 === Mb ? wb : xw(Mb, wb))
        }
        if (!0 !== Mb) {
          let eb, Hb;
          if (!1 === Mb) Hb = bb.changes.invertedDesc, eb = fb.empty(wb.doc.length);
          else {
            let wb = bb.changes.filter(Mb);
            eb = wb.changes, Hb = wb.filtered.mapDesc(wb.changes).invertedDesc
          }
          bb = Xw.create(wb, eb, bb.selection && bb.selection.map(Hb), zw.mapEffects(bb.effects, Hb), bb.annotations, bb.scrollIntoView)
        }
        let eb = wb.facet(Ew);
        for (let Hb = eb.length - 1; Hb >= 0; Hb--) {
          let Mb = eb[Hb](bb);
          bb = Mb instanceof Xw ? Mb : Array.isArray(Mb) && 1 == Mb.length && Mb[0] instanceof Xw ? Mb[0] : rw(wb, Dw(Mb), !1)
        }
        return bb
      }(Hb) : Hb)
    }
    Xw.time = sw.define(), Xw.userEvent = sw.define(), Xw.addToHistory = sw.define(), Xw.remote = sw.define();
    const Rw = [];

    function Dw(bb) {
      return null == bb ? Rw : Array.isArray(bb) ? bb : [bb]
    }
    var Yw = function(bb) {
      return bb[bb.Word = 0] = "Word", bb[bb.Space = 1] = "Space", bb[bb.Other = 2] = "Other", bb
    }(Yw || (Yw = {}));
    const Zw = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
    let fw;
    try {
      fw = new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u")
    } catch (eM) {}

    function Aw(bb) {
      return wb => {
        if (!/\S/.test(wb)) return Yw.Space;
        if (function(bb) {
            if (fw) return fw.test(bb);
            for (let wb = 0; wb < bb.length; wb++) {
              let Mb = bb[wb];
              if (/\w/.test(Mb) || Mb > "\x80" && (Mb.toUpperCase() != Mb.toLowerCase() || Zw.test(Mb))) return !0
            }
            return !1
          }(wb)) return Yw.Word;
        for (let Mb = 0; Mb < bb.length; Mb++)
          if (wb.indexOf(bb[Mb]) > -1) return Yw.Word;
        return Yw.Other
      }
    }
    class Ww {
      constructor(bb, wb, Mb, eb, Hb, pb) {
        this.config = bb, this.doc = wb, this.selection = Mb, this.values = eb, this.status = bb.statusTemplate.slice(), this.computeSlot = Hb, pb && (pb._state = this);
        for (let Vb = 0; Vb < this.config.dynamicSlots.length; Vb++) Lw(this, Vb << 1);
        this.computeSlot = null
      }
      field(bb) {
        let wb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Mb = this.config.address[bb.id];
        if (null != Mb) return Lw(this, Mb), Iw(this, Mb);
        if (wb) throw new RangeError("Field is not present in this state")
      }
      update() {
        for (var bb = arguments.length, wb = new Array(bb), Mb = 0; Mb < bb; Mb++) wb[Mb] = arguments[Mb];
        return rw(this, wb, !0)
      }
      applyTransaction(bb) {
        let wb, Mb = this.config,
          {
            base: eb,
            compartments: Hb
          } = Mb;
        for (let Vb of bb.effects) Vb.is(Vw.reconfigure) ? (Mb && (Hb = new Map, Mb.compartments.forEach(((bb, wb) => Hb.set(wb, bb))), Mb = null), Hb.set(Vb.value.compartment, Vb.value.extension)) : Vb.is(zw.reconfigure) ? (Mb = null, eb = Vb.value) : Vb.is(zw.appendConfig) && (Mb = null, eb = Dw(eb).concat(Vb.value));
        if (Mb) wb = bb.startState.values.slice();
        else {
          Mb = lw.resolve(eb, Hb, this), wb = new Ww(Mb, this.doc, this.selection, Mb.dynamicSlots.map((() => null)), ((bb, wb) => wb.reconfigure(bb, this)), null).values
        }
        let pb = bb.startState.facet(Uw) ? bb.newSelection : bb.newSelection.asSingle();
        new Ww(Mb, bb.newDoc, pb, wb, ((wb, Mb) => Mb.update(wb, bb)), bb)
      }
      replaceSelection(bb) {
        return "string" == typeof bb && (bb = this.toText(bb)), this.changeByRange((wb => ({
          changes: {
            from: wb.from,
            to: wb.to,
            insert: bb
          },
          range: Gb.cursor(wb.from + bb.length)
        })))
      }
      changeByRange(bb) {
        let wb = this.selection,
          Mb = bb(wb.gF[0]),
          eb = this.changes(Mb.changes),
          Hb = [Mb.range],
          pb = Dw(Mb.effects);
        for (let Vb = 1; Vb < wb.gF.length; Vb++) {
          let Mb = bb(wb.gF[Vb]),
            gb = this.changes(Mb.changes),
            lb = gb.map(eb);
          for (let bb = 0; bb < Vb; bb++) Hb[bb] = Hb[bb].map(lb);
          let Lb = eb.mapDesc(gb, !0);
          Hb.push(Mb.range.map(Lb)), eb = eb.compose(lb), pb = zw.mapEffects(pb, lb).concat(zw.mapEffects(Dw(Mb.effects), Lb))
        }
        return {
          changes: eb,
          selection: Gb.create(Hb, wb.mainIndex),
          effects: pb
        }
      }
      changes() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return bb instanceof fb ? bb : fb.of(bb, this.doc.length, this.facet(Ww.lineSeparator))
      }
      toText(bb) {
        return Eb.of(bb.split(this.facet(Ww.lineSeparator) || cb))
      }
      sliceDoc() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.doc.length;
        return this.doc.sliceString(bb, wb, this.lineBreak)
      }
      facet(bb) {
        let wb = this.config.address[bb.id];
        return null == wb ? bb.default : (Lw(this, wb), Iw(this, wb))
      }
      toJSON(bb) {
        let wb = {
          doc: this.sliceDoc(),
          selection: this.selection.toJSON()
        };
        if (bb)
          for (let Mb in bb) {
            let eb = bb[Mb];
            eb instanceof Tb && null != this.config.address[eb.id] && (wb[Mb] = eb.spec.toJSON(this.field(bb[Mb]), this))
          }
        return wb
      }
      static fromJSON(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          Mb = arguments.length > 2 ? arguments[2] : void 0;
        if (!bb || "string" != typeof bb.doc) throw new RangeError("Invalid JSON representation for EditorState");
        let eb = [];
        if (Mb)
          for (let Hb in Mb)
            if (Object.prototype.hasOwnProperty.call(bb, Hb)) {
              let wb = Mb[Hb],
                pb = bb[Hb];
              eb.push(wb.init((bb => wb.spec.fromJSON(pb, bb))))
            } return Ww.create({
          doc: bb.doc,
          selection: Gb.fromJSON(bb.selection),
          extensions: wb.extensions ? eb.concat([wb.extensions]) : eb
        })
      }
      static create() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          wb = lw.resolve(bb.extensions || [], new Map),
          Mb = bb.doc instanceof Eb ? bb.doc : Eb.of((bb.doc || "").split(wb.staticFacet(Ww.lineSeparator) || cb)),
          eb = bb.selection ? bb.selection instanceof Gb ? bb.selection : Gb.single(bb.selection.anchor, bb.selection.head) : Gb.single(0);
        return qb(eb, Mb.length), wb.staticFacet(Uw) || (eb = eb.asSingle()), new Ww(wb, Mb, eb, wb.dynamicSlots.map((() => null)), ((bb, wb) => wb.create(bb)), null)
      }
      get tabSize() {
        return this.facet(Ww.tabSize)
      }
      get lineBreak() {
        return this.facet(Ww.lineSeparator) || "\n"
      }
      get readOnly() {
        return this.facet(Bw)
      }
      phrase(bb) {
        for (var wb = arguments.length, Mb = new Array(wb > 1 ? wb - 1 : 0), eb = 1; eb < wb; eb++) Mb[eb - 1] = arguments[eb];
        for (let Hb of this.facet(Ww.phrases))
          if (Object.prototype.hasOwnProperty.call(Hb, bb)) {
            bb = Hb[bb];
            break
          } return Mb.length && (bb = bb.replace(/\$(\$|\d*)/g, ((bb, wb) => {
          if ("$" == wb) return "$";
          let eb = +(wb || 1);
          return !eb || eb > Mb.length ? bb : Mb[eb - 1]
        }))), bb
      }
      languageDataAt(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          eb = [];
        for (let Hb of this.facet(Ow))
          for (let pb of Hb(this, wb, Mb)) Object.prototype.hasOwnProperty.call(pb, bb) && eb.push(pb[bb]);
        return eb
      }
      charCategorizer(bb) {
        let wb = this.languageDataAt("wordChars", bb);
        return Aw(wb.length ? wb[0] : "")
      }
      wordAt(bb) {
        let {
          text: wb,
          from: Mb,
          length: eb
        } = this.doc.lineAt(bb), Hb = this.charCategorizer(bb), pb = bb - Mb, Vb = bb - Mb;
        for (; pb > 0;) {
          let bb = Kb(wb, pb, !1);
          if (Hb(wb.slice(bb, pb)) != Yw.Word) break;
          pb = bb
        }
        for (; Vb < eb;) {
          let bb = Kb(wb, Vb);
          if (Hb(wb.slice(Vb, bb)) != Yw.Word) break;
          Vb = bb
        }
        return pb == Vb ? null : Gb.range(pb + Mb, Vb + Mb)
      }
    }

    function Jw(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        eb = {};
      for (let Hb of bb)
        for (let bb of Object.keys(Hb)) {
          let wb = Hb[bb],
            pb = eb[bb];
          if (void 0 === pb) eb[bb] = wb;
          else if (pb === wb || void 0 === wb);
          else {
            if (!Object.hasOwnProperty.call(Mb, bb)) throw new Error("Config merge conflict for field " + bb);
            eb[bb] = Mb[bb](pb, wb)
          }
        }
      for (let Hb in wb) void 0 === eb[Hb] && (eb[Hb] = wb[Hb]);
      return eb
    }
    Ww.allowMultipleSelections = Uw, Ww.tabSize = ib.define({
      combine: bb => bb.length ? bb[0] : 4
    }), Ww.lineSeparator = tw, Ww.readOnly = Bw, Ww.phrases = ib.define({
      compare(bb, wb) {
        let Mb = Object.keys(bb),
          eb = Object.keys(wb);
        return Mb.length == eb.length && Mb.every((Mb => bb[Mb] == wb[Mb]))
      }
    }), Ww.languageData = Ow, Ww.changeFilter = Cw, Ww.transactionFilter = Ew, Ww.transactionExtender = Fw, Vw.reconfigure = zw.define();
    class Sw {
      eq(bb) {
        return this == bb
      }
      range(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bb;
        return vw.create(bb, wb, this)
      }
    }

    function Nw(bb, wb) {
      return bb == wb || bb.constructor == wb.constructor && bb.eq(wb)
    }
    Sw.prototype.startSide = Sw.prototype.endSide = 0, Sw.prototype.point = !1, Sw.prototype.mapMode = Yb.TrackDel;
    class vw {
      constructor(bb, wb, Mb) {
        this.from = bb, this.to = wb, this.value = Mb
      }
      static create(bb, wb, Mb) {
        return new vw(bb, wb, Mb)
      }
    }

    function Qw(bb, wb) {
      return bb.from - wb.from || bb.value.startSide - wb.value.startSide
    }
    class Gw {
      constructor(bb, wb, Mb, eb) {
        this.from = bb, this.to = wb, this.value = Mb, this.Vpb = eb
      }
      get length() {
        return this.to[this.to.length - 1]
      }
      findIndex(bb, wb, Mb) {
        let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Hb = Mb ? this.to : this.from;
        for (let pb = eb, Vb = Hb.length;;) {
          if (pb == Vb) return pb;
          let eb = pb + Vb >> 1,
            gb = Hb[eb] - bb || (Mb ? this.value[eb].endSide : this.value[eb].startSide) - wb;
          if (eb == pb) return gb >= 0 ? pb : Vb;
          gb >= 0 ? Vb = eb : pb = eb + 1
        }
      }
      between(bb, wb, Mb, eb) {
        for (let Hb = this.findIndex(wb, -1e9, !0), pb = this.findIndex(Mb, 1e9, !1, Hb); Hb < pb; Hb++)
          if (!1 === eb(this.from[Hb] + bb, this.to[Hb] + bb, this.value[Hb])) return !1
      }
      map(bb, wb) {
        let Mb = [],
          eb = [],
          Hb = [],
          pb = -1,
          Vb = -1;
        for (let gb = 0; gb < this.value.length; gb++) {
          let lb, Lb, Ib = this.value[gb],
            Ob = this.from[gb] + bb,
            Ub = this.to[gb] + bb;
          if (Ob == Ub) {
            let bb = wb.mapPos(Ob, Ib.startSide, Ib.mapMode);
            if (null == bb) continue;
            if (lb = Lb = bb, Ib.startSide != Ib.endSide && (Lb = wb.mapPos(Ob, Ib.endSide), Lb < lb)) continue
          } else if (lb = wb.mapPos(Ob, Ib.startSide), Lb = wb.mapPos(Ub, Ib.endSide), lb > Lb || lb == Lb && Ib.startSide > 0 && Ib.endSide <= 0) continue;
          (Lb - lb || Ib.endSide - Ib.startSide) < 0 || (pb < 0 && (pb = lb), Ib.point && (Vb = Math.max(Vb, Lb - lb)), Mb.push(Ib), eb.push(lb - pb), Hb.push(Lb - pb))
        }
        return {
          mapped: Mb.length ? new Gw(eb, Hb, Mb, Vb) : null,
          pos: pb
        }
      }
    }
    class qw {
      constructor(bb, wb, Mb, eb) {
        this.chunkPos = bb, this.chunk = wb, this.nextLayer = Mb, this.Vpb = eb
      }
      static create(bb, wb, Mb, eb) {
        return new qw(bb, wb, Mb, eb)
      }
      get length() {
        let bb = this.chunk.length - 1;
        return bb < 0 ? 0 : Math.max(this.chunkEnd(bb), this.nextLayer.length)
      }
      get size() {
        if (this.IO) return 0;
        let bb = this.nextLayer.size;
        for (let wb of this.chunk) bb += wb.value.length;
        return bb
      }
      chunkEnd(bb) {
        return this.chunkPos[bb] + this.chunk[bb].length
      }
      update(bb) {
        let {
          add: wb = [],
          sort: Mb = !1,
          filterFrom: eb = 0,
          filterTo: Hb = this.length
        } = bb, pb = bb.filter;
        if (0 == wb.length && !pb) return this;
        if (Mb && (wb = wb.slice().sort(Qw)), this.IO) return wb.length ? qw.of(wb) : this;
        let Vb = new uw(this, null, -1).goto(0),
          gb = 0,
          lb = [],
          Lb = new aw;
        for (; Vb.value || gb < wb.length;)
          if (gb < wb.length && (Vb.from - wb[gb].from || Vb.startSide - wb[gb].value.startSide) >= 0) {
            let bb = wb[gb++];
            Lb.addInner(bb.from, bb.to, bb.value) || lb.push(bb)
          } else 1 == Vb.rangeIndex && Vb.chunkIndex < this.chunk.length && (gb == wb.length || this.chunkEnd(Vb.chunkIndex) < wb[gb].from) && (!pb || eb > this.chunkEnd(Vb.chunkIndex) || Hb < this.chunkPos[Vb.chunkIndex]) && Lb.addChunk(this.chunkPos[Vb.chunkIndex], this.chunk[Vb.chunkIndex]) ? Vb.nextChunk() : ((!pb || eb > Vb.to || Hb < Vb.from || pb(Vb.from, Vb.to, Vb.value)) && (Lb.addInner(Vb.from, Vb.to, Vb.value) || lb.push(vw.create(Vb.from, Vb.to, Vb.value))), Vb.next());
        return Lb.finishInner(this.nextLayer.IO && !lb.length ? qw.empty : this.nextLayer.update({
          add: lb,
          filter: pb,
          filterFrom: eb,
          filterTo: Hb
        }))
      }
      map(bb) {
        if (bb.empty || this.IO) return this;
        let wb = [],
          Mb = [],
          eb = -1;
        for (let pb = 0; pb < this.chunk.length; pb++) {
          let Hb = this.chunkPos[pb],
            Vb = this.chunk[pb],
            gb = bb.touchesRange(Hb, Hb + Vb.length);
          if (!1 === gb) eb = Math.max(eb, Vb.Vpb), wb.push(Vb), Mb.push(bb.mapPos(Hb));
          else if (!0 === gb) {
            let {
              mapped: pb,
              pos: gb
            } = Vb.map(Hb, bb);
            pb && (eb = Math.max(eb, pb.Vpb), wb.push(pb), Mb.push(gb))
          }
        }
        let Hb = this.nextLayer.map(bb);
        return 0 == wb.length ? Hb : new qw(Mb, wb, Hb || qw.empty, eb)
      }
      between(bb, wb, Mb) {
        if (!this.IO) {
          for (let eb = 0; eb < this.chunk.length; eb++) {
            let Hb = this.chunkPos[eb],
              pb = this.chunk[eb];
            if (wb >= Hb && bb <= Hb + pb.length && !1 === pb.between(Hb, bb - Hb, wb - Hb, Mb)) return
          }
          this.nextLayer.between(bb, wb, Mb)
        }
      }
      iter() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return dw.from([this]).goto(bb)
      }
      get IO() {
        return this.nextLayer == this
      }
      static iter(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return dw.from(bb).goto(wb)
      }
      static compare(bb, wb, Mb, eb) {
        let Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1,
          pb = bb.filter((bb => bb.Vpb > 0 || !bb.IO && bb.Vpb >= Hb)),
          Vb = wb.filter((bb => bb.Vpb > 0 || !bb.IO && bb.Vpb >= Hb)),
          gb = iw(pb, Vb, Mb),
          lb = new nw(pb, gb, Hb),
          Lb = new nw(Vb, gb, Hb);
        Mb.iterGaps(((bb, wb, Mb) => yw(lb, bb, Lb, wb, Mb, eb))), Mb.empty && 0 == Mb.length && yw(lb, 0, Lb, 0, 0, eb)
      }
      static eq(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          eb = arguments.length > 3 ? arguments[3] : void 0;
        null == eb && (eb = 999999999);
        let Hb = bb.filter((bb => !bb.IO && wb.indexOf(bb) < 0)),
          pb = wb.filter((wb => !wb.IO && bb.indexOf(wb) < 0));
        if (Hb.length != pb.length) return !1;
        if (!Hb.length) return !0;
        let Vb = iw(Hb, pb),
          gb = new nw(Hb, Vb, 0).goto(Mb),
          lb = new nw(pb, Vb, 0).goto(Mb);
        for (;;) {
          if (gb.to != lb.to || !ow(gb.active, lb.active) || gb.point && (!lb.point || !Nw(gb.point, lb.point))) return !1;
          if (gb.to > eb) return !0;
          gb.next(), lb.next()
        }
      }
      static spans(bb, wb, Mb, eb) {
        let Hb = new nw(bb, null, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1).goto(wb),
          pb = wb,
          Vb = Hb.openStart;
        for (;;) {
          let bb = Math.min(Hb.to, Mb);
          if (Hb.point) {
            let Mb = Hb.activeForPoint(Hb.to),
              gb = Hb.pointFrom < wb ? Mb.length + 1 : Hb.point.startSide < 0 ? Mb.length : Math.min(Mb.length, Vb);
            eb.point(pb, bb, Hb.point, Mb, gb, Hb.pointRank), Vb = Math.min(Hb.openEnd(bb), Mb.length)
          } else bb > pb && (eb.span(pb, bb, Hb.active, Vb), Vb = Hb.openEnd(bb));
          if (Hb.to > Mb) return Vb + (Hb.point && Hb.to > Mb ? 1 : 0);
          pb = Hb.to, Hb.next()
        }
      }
      static of (bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Mb = new aw;
        for (let eb of bb instanceof vw ? [bb] : wb ? function(bb) {
            if (bb.length > 1)
              for (let wb = bb[0], Mb = 1; Mb < bb.length; Mb++) {
                let eb = bb[Mb];
                if (Qw(wb, eb) > 0) return bb.slice().sort(Qw);
                wb = eb
              }
            return bb
          }(bb) : bb) Mb.add(eb.from, eb.to, eb.value);
        return Mb.finish()
      }
      static join(bb) {
        if (!bb.length) return qw.empty;
        let wb = bb[bb.length - 1];
        for (let Mb = bb.length - 2; Mb >= 0; Mb--)
          for (let eb = bb[Mb]; eb != qw.empty; eb = eb.nextLayer) wb = new qw(eb.chunkPos, eb.chunk, wb, Math.max(eb.Vpb, wb.Vpb));
        return wb
      }
    }
    qw.empty = new qw([], [], null, -1), qw.empty.nextLayer = qw.empty;
    class aw {
      finishChunk(bb) {
        this.chunks.push(new Gw(this.from, this.to, this.value, this.Vpb)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.Vpb), this.Vpb = -1, bb && (this.from = [], this.to = [], this.value = [])
      }
      constructor() {
        this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.Vpb = -1, this.setMaxPoint = -1, this.nextLayer = null
      }
      add(bb, wb, Mb) {
        this.addInner(bb, wb, Mb) || (this.nextLayer || (this.nextLayer = new aw)).add(bb, wb, Mb)
      }
      addInner(bb, wb, Mb) {
        let eb = bb - this.lastTo || Mb.startSide - this.last.endSide;
        if (eb <= 0 && (bb - this.lastFrom || Mb.startSide - this.last.startSide) < 0) throw new Error("Ranges must be added sorted by `from` position and `startSide`");
        return !(eb < 0) && (250 == this.from.length && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = bb), this.from.push(bb - this.chunkStart), this.to.push(wb - this.chunkStart), this.last = Mb, this.lastFrom = bb, this.lastTo = wb, this.value.push(Mb), Mb.point && (this.Vpb = Math.max(this.Vpb, wb - bb)), !0)
      }
      addChunk(bb, wb) {
        if ((bb - this.lastTo || wb.value[0].startSide - this.last.endSide) < 0) return !1;
        this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, wb.Vpb), this.chunks.push(wb), this.chunkPos.push(bb);
        let Mb = wb.value.length - 1;
        return this.last = wb.value[Mb], this.lastFrom = wb.from[Mb] + bb, this.lastTo = wb.to[Mb] + bb, !0
      }
      finish() {
        return this.finishInner(qw.empty)
      }
      finishInner(bb) {
        if (this.from.length && this.finishChunk(!1), 0 == this.chunks.length) return bb;
        let wb = qw.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(bb) : bb, this.setMaxPoint);
        return this.from = null, wb
      }
    }

    function iw(bb, wb, Mb) {
      let eb = new Map;
      for (let pb of bb)
        for (let bb = 0; bb < pb.chunk.length; bb++) pb.chunk[bb].Vpb <= 0 && eb.set(pb.chunk[bb], pb.chunkPos[bb]);
      let Hb = new Set;
      for (let pb of wb)
        for (let bb = 0; bb < pb.chunk.length; bb++) {
          let wb = eb.get(pb.chunk[bb]);
          null == wb || (Mb ? Mb.mapPos(wb) : wb) != pb.chunkPos[bb] || (null === Mb || void 0 === Mb ? void 0 : Mb.touchesRange(wb, wb + pb.chunk[bb].length)) || Hb.add(pb.chunk[bb])
        }
      return Hb
    }
    class uw {
      constructor(bb, wb, Mb) {
        let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.layer = bb, this.skip = wb, this.gpb = Mb, this.rank = eb
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      get endSide() {
        return this.value ? this.value.endSide : 0
      }
      goto(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(bb, wb, !1), this
      }
      gotoInner(bb, wb, Mb) {
        for (; this.chunkIndex < this.layer.chunk.length;) {
          let wb = this.layer.chunk[this.chunkIndex];
          if (!(this.skip && this.skip.has(wb) || this.layer.chunkEnd(this.chunkIndex) < bb || wb.Vpb < this.gpb)) break;
          this.chunkIndex++, Mb = !1
        }
        if (this.chunkIndex < this.layer.chunk.length) {
          let eb = this.layer.chunk[this.chunkIndex].findIndex(bb - this.layer.chunkPos[this.chunkIndex], wb, !0);
          (!Mb || this.rangeIndex < eb) && this.setRangeIndex(eb)
        }
        this.next()
      }
      forward(bb, wb) {
        (this.to - bb || this.endSide - wb) < 0 && this.gotoInner(bb, wb, !0)
      }
      next() {
        for (;;) {
          if (this.chunkIndex == this.layer.chunk.length) {
            this.from = this.to = 1e9, this.value = null;
            break
          } {
            let bb = this.layer.chunkPos[this.chunkIndex],
              wb = this.layer.chunk[this.chunkIndex],
              Mb = bb + wb.from[this.rangeIndex];
            if (this.from = Mb, this.to = bb + wb.to[this.rangeIndex], this.value = wb.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.gpb < 0 || this.value.point && this.to - this.from >= this.gpb) break
          }
        }
      }
      setRangeIndex(bb) {
        if (bb == this.layer.chunk[this.chunkIndex].value.length) {
          if (this.chunkIndex++, this.skip)
            for (; this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]);) this.chunkIndex++;
          this.rangeIndex = 0
        } else this.rangeIndex = bb
      }
      nextChunk() {
        this.chunkIndex++, this.rangeIndex = 0, this.next()
      }
      compare(bb) {
        return this.from - bb.from || this.startSide - bb.startSide || this.rank - bb.rank || this.to - bb.to || this.endSide - bb.endSide
      }
    }
    class dw {
      constructor(bb) {
        this.heap = bb
      }
      static from(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          eb = [];
        for (let Hb = 0; Hb < bb.length; Hb++)
          for (let pb = bb[Hb]; !pb.IO; pb = pb.nextLayer) pb.Vpb >= Mb && eb.push(new uw(pb, wb, Mb, Hb));
        return 1 == eb.length ? eb[0] : new dw(eb)
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      goto(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        for (let Mb of this.heap) Mb.goto(bb, wb);
        for (let Mb = this.heap.length >> 1; Mb >= 0; Mb--) Pw(this.heap, Mb);
        return this.next(), this
      }
      forward(bb, wb) {
        for (let Mb of this.heap) Mb.forward(bb, wb);
        for (let Mb = this.heap.length >> 1; Mb >= 0; Mb--) Pw(this.heap, Mb);
        (this.to - bb || this.value.endSide - wb) < 0 && this.next()
      }
      next() {
        if (0 == this.heap.length) this.from = this.to = 1e9, this.value = null, this.rank = -1;
        else {
          let bb = this.heap[0];
          this.from = bb.from, this.to = bb.to, this.value = bb.value, this.rank = bb.rank, bb.value && bb.next(), Pw(this.heap, 0)
        }
      }
    }

    function Pw(bb, wb) {
      for (let Mb = bb[wb];;) {
        let eb = 1 + (wb << 1);
        if (eb >= bb.length) break;
        let Hb = bb[eb];
        if (eb + 1 < bb.length && Hb.compare(bb[eb + 1]) >= 0 && (Hb = bb[eb + 1], eb++), Mb.compare(Hb) < 0) break;
        bb[eb] = Mb, bb[wb] = Hb, wb = eb
      }
    }
    class nw {
      constructor(bb, wb, Mb) {
        this.gpb = Mb, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = dw.from(bb, wb, Mb)
      }
      goto(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.cursor.goto(bb, wb), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = bb, this.endSide = wb, this.openStart = -1, this.next(), this
      }
      forward(bb, wb) {
        for (; this.minActive > -1 && (this.activeTo[this.minActive] - bb || this.active[this.minActive].endSide - wb) < 0;) this.removeActive(this.minActive);
        this.cursor.forward(bb, wb)
      }
      removeActive(bb) {
        Tw(this.active, bb), Tw(this.activeTo, bb), Tw(this.activeRank, bb), this.minActive = bM(this.active, this.activeTo)
      }
      addActive(bb) {
        let wb = 0,
          {
            value: Mb,
            to: eb,
            rank: Hb
          } = this.cursor;
        for (; wb < this.activeRank.length && (Hb - this.activeRank[wb] || eb - this.activeTo[wb]) > 0;) wb++;
        kw(this.active, wb, Mb), kw(this.activeTo, wb, eb), kw(this.activeRank, wb, Hb), bb && kw(bb, wb, this.cursor.from), this.minActive = bM(this.active, this.activeTo)
      }
      next() {
        let bb = this.to,
          wb = this.point;
        this.point = null;
        let Mb = this.openStart < 0 ? [] : null;
        for (;;) {
          let eb = this.minActive;
          if (eb > -1 && (this.activeTo[eb] - this.cursor.from || this.active[eb].endSide - this.cursor.startSide) < 0) {
            if (this.activeTo[eb] > bb) {
              this.to = this.activeTo[eb], this.endSide = this.active[eb].endSide;
              break
            }
            this.removeActive(eb), Mb && Tw(Mb, eb)
          } else {
            if (!this.cursor.value) {
              this.to = this.endSide = 1e9;
              break
            }
            if (this.cursor.from > bb) {
              this.to = this.cursor.from, this.endSide = this.cursor.startSide;
              break
            } {
              let bb = this.cursor.value;
              if (bb.point) {
                if (!(wb && this.cursor.to == this.to && this.cursor.from < this.cursor.to)) {
                  this.point = bb, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = bb.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
                  break
                }
                this.cursor.next()
              } else this.addActive(Mb), this.cursor.next()
            }
          }
        }
        if (Mb) {
          this.openStart = 0;
          for (let wb = Mb.length - 1; wb >= 0 && Mb[wb] < bb; wb--) this.openStart++
        }
      }
      activeForPoint(bb) {
        if (!this.active.length) return this.active;
        let wb = [];
        for (let Mb = this.active.length - 1; Mb >= 0 && !(this.activeRank[Mb] < this.pointRank); Mb--)(this.activeTo[Mb] > bb || this.activeTo[Mb] == bb && this.active[Mb].endSide >= this.point.endSide) && wb.push(this.active[Mb]);
        return wb.reverse()
      }
      openEnd(bb) {
        let wb = 0;
        for (let Mb = this.activeTo.length - 1; Mb >= 0 && this.activeTo[Mb] > bb; Mb--) wb++;
        return wb
      }
    }

    function yw(bb, wb, Mb, eb, Hb, pb) {
      bb.goto(wb), Mb.goto(eb);
      let Vb = eb + Hb,
        gb = eb,
        lb = eb - wb,
        Lb = !!pb.boundChange;
      for (let Ib = !1;;) {
        let wb = bb.to + lb - Mb.to,
          eb = wb || bb.endSide - Mb.endSide,
          Hb = eb < 0 ? bb.to + lb : Mb.to,
          Ob = Math.min(Hb, Vb);
        if (bb.point || Mb.point ? (bb.point && Mb.point && Nw(bb.point, Mb.point) && ow(bb.activeForPoint(bb.to), Mb.activeForPoint(Mb.to)) || pb.comparePoint(gb, Ob, bb.point, Mb.point), Ib = !1) : (Ib && pb.boundChange(gb), Ob > gb && !ow(bb.active, Mb.active) && pb.compareRange(gb, Ob, bb.active, Mb.active), Lb && Ob < Vb && (wb || bb.openEnd(Hb) != Mb.openEnd(Hb)) && (Ib = !0)), Hb > Vb) break;
        gb = Hb, eb <= 0 && bb.next(), eb >= 0 && Mb.next()
      }
    }

    function ow(bb, wb) {
      if (bb.length != wb.length) return !1;
      for (let Mb = 0; Mb < bb.length; Mb++)
        if (bb[Mb] != wb[Mb] && !Nw(bb[Mb], wb[Mb])) return !1;
      return !0
    }

    function Tw(bb, wb) {
      for (let Mb = wb, eb = bb.length - 1; Mb < eb; Mb++) bb[Mb] = bb[Mb + 1];
      bb.pop()
    }

    function kw(bb, wb, Mb) {
      for (let eb = bb.length - 1; eb >= wb; eb--) bb[eb + 1] = bb[eb];
      bb[wb] = Mb
    }

    function bM(bb, wb) {
      let Mb = -1,
        eb = 1e9;
      for (let Hb = 0; Hb < wb.length; Hb++)(wb[Hb] - eb || bb[Hb].endSide - bb[Mb].endSide) < 0 && (Mb = Hb, eb = wb[Hb]);
      return Mb
    }

    function wM(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : bb.length,
        eb = 0;
      for (let Hb = 0; Hb < Mb && Hb < bb.length;) 9 == bb.charCodeAt(Hb) ? (eb += wb - eb % wb, Hb++) : (eb++, Hb = Kb(bb, Hb));
      return eb
    }

    function MM(bb, wb, Mb, eb) {
      for (let Hb = 0, pb = 0;;) {
        if (pb >= wb) return Hb;
        if (Hb == bb.length) break;
        pb += 9 == bb.charCodeAt(Hb) ? Mb - pb % Mb : 1, Hb = Kb(bb, Hb)
      }
      return !0 === eb ? -1 : bb.length
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);