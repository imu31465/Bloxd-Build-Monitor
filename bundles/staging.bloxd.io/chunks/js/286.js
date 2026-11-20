export const id = 286;
export const ids = [286];
export const modules = {
  40599: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => cz,
      e: () => Rv,
      ChangeSet: () => xv,
      f: () => Vz,
      j: () => Hv,
      n: () => tz,
      q: () => Bv,
      r: () => Uv,
      u: () => Sz,
      y: () => Hz,
      x: () => Mz,
      A: () => Iz,
      B: () => jz,
      E: () => Xv,
      H: () => sv,
      J: () => fz,
      K: () => Ov,
      L: () => Kv,
      O: () => qz,
      S: () => vP,
      W: () => nv,
      Z: () => zP,
      _: () => Dv
    });
    let hv = [],
      Sv = [];

    function ev(vv) {
      if (vv < 768) return !1;
      for (let zv = 0, Pv = hv.length;;) {
        let ev = zv + Pv >> 1;
        if (vv < hv[ev]) Pv = ev;
        else {
          if (!(vv >= Sv[ev])) return !0;
          zv = ev + 1
        }
        if (zv == Pv) return !1
      }
    }

    function gv(vv) {
      return vv >= 127462 && vv <= 127487
    }(() => {
      let vv = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((vv => vv ? parseInt(vv, 36) : 1));
      for (let zv = 0, Pv = 0; zv < vv.length; zv++)(zv % 2 ? Sv : hv).push(Pv += vv[zv])
    })();
    const pv = 8205;

    function dv(vv, zv) {
      return (!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2] ? Nv : lv)(vv, zv, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function Nv(vv, zv, Pv) {
      if (zv == vv.length) return zv;
      zv && Wv(vv.charCodeAt(zv)) && wv(vv.charCodeAt(zv - 1)) && zv--;
      let hv = Tv(vv, zv);
      for (zv += av(hv); zv < vv.length;) {
        let Sv = Tv(vv, zv);
        if (hv == pv || Sv == pv || Pv && ev(Sv)) zv += av(Sv), hv = Sv;
        else {
          if (!gv(Sv)) break;
          {
            let Pv = 0,
              hv = zv - 2;
            for (; hv >= 0 && gv(Tv(vv, hv));) Pv++, hv -= 2;
            if (Pv % 2 == 0) break;
            zv += 2
          }
        }
      }
      return zv
    }

    function lv(vv, zv, Pv) {
      for (; zv > 0;) {
        let hv = Nv(vv, zv - 2, Pv);
        if (hv < zv) return hv;
        zv--
      }
      return 0
    }

    function Tv(vv, zv) {
      let Pv = vv.charCodeAt(zv);
      if (!wv(Pv) || zv + 1 == vv.length) return Pv;
      let hv = vv.charCodeAt(zv + 1);
      return Wv(hv) ? hv - 56320 + (Pv - 55296 << 10) + 65536 : Pv
    }

    function Wv(vv) {
      return vv >= 56320 && vv < 57344
    }

    function wv(vv) {
      return vv >= 55296 && vv < 56320
    }

    function av(vv) {
      return vv < 65536 ? 1 : 2
    }
    class sv {
      lineAt(vv) {
        if (vv < 0 || vv > this.length) throw new RangeError(`Invalid position ${vv} in document of length ${this.length}`);
        return this.lineInner(vv, !1, 1, 0)
      }
      line(vv) {
        if (vv < 1 || vv > this.lines) throw new RangeError(`Invalid line number ${vv} in ${this.lines}-line document`);
        return this.lineInner(vv, !0, 1, 0)
      }
      replace(vv, zv, Pv) {
        [vv, zv] = Yv(this, vv, zv);
        let hv = [];
        return this.decompose(0, vv, hv, 2), Pv.length && Pv.decompose(0, Pv.length, hv, 3), this.decompose(zv, this.length, hv, 1), iv.from(hv, this.length - (zv - vv) + Pv.length)
      }
      append(vv) {
        return this.replace(this.length, this.length, vv)
      }
      slice(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        [vv, zv] = Yv(this, vv, zv);
        let Pv = [];
        return this.decompose(vv, zv, Pv, 0), iv.from(Pv, zv - vv)
      }
      eq(vv) {
        if (vv == this) return !0;
        if (vv.length != this.length || vv.lines != this.lines) return !1;
        let zv = this.scanIdentical(vv, 1),
          Pv = this.length - this.scanIdentical(vv, -1),
          hv = new mv(this),
          Sv = new mv(vv);
        for (let ev = zv, gv = zv;;) {
          if (hv.next(ev), Sv.next(ev), ev = 0, hv.lineBreak != Sv.lineBreak || hv.done != Sv.done || hv.value != Sv.value) return !1;
          if (gv += hv.value.length, hv.done || gv >= Pv) return !0
        }
      }
      iter() {
        return new mv(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1)
      }
      iterRange(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        return new jv(this, vv, zv)
      }
      iterLines(vv, zv) {
        let Pv;
        if (null == vv) Pv = this.iter();
        else {
          null == zv && (zv = this.lines + 1);
          let hv = this.line(vv).from;
          Pv = this.iterRange(hv, Math.max(hv, zv == this.lines + 1 ? this.length : zv <= 1 ? 0 : this.line(zv - 1).to))
        }
        return new fv(Pv)
      }
      toString() {
        return this.sliceString(0)
      }
      toJSON() {
        let vv = [];
        return this.flatten(vv), vv
      }
      constructor() {}
      static of (vv) {
        if (0 == vv.length) throw new RangeError("A document must have at least one line");
        return 1 != vv.length || vv[0] ? vv.length <= 32 ? new Cv(vv) : iv.from(Cv.split(vv, [])) : sv.empty
      }
    }
    class Cv extends sv {
      constructor(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(vv) {
          let zv = -1;
          for (let Pv of vv) zv += Pv.length + 1;
          return zv
        }(vv);
        super(), this.text = vv, this.length = zv
      }
      get lines() {
        return this.text.length
      }
      get children() {
        return null
      }
      lineInner(vv, zv, Pv, hv) {
        for (let Sv = 0;; Sv++) {
          let ev = this.text[Sv],
            gv = hv + ev.length;
          if ((zv ? Pv : gv) >= vv) return new Fv(hv, gv, Pv, ev);
          hv = gv + 1, Pv++
        }
      }
      decompose(vv, zv, Pv, hv) {
        let Sv = vv <= 0 && zv >= this.length ? this : new Cv(Gv(this.text, vv, zv), Math.min(zv, this.length) - Math.max(0, vv));
        if (1 & hv) {
          let vv = Pv.pop(),
            zv = cv(Sv.text, vv.text.slice(), 0, Sv.length);
          if (zv.length <= 32) Pv.push(new Cv(zv, vv.length + Sv.length));
          else {
            let vv = zv.length >> 1;
            Pv.push(new Cv(zv.slice(0, vv)), new Cv(zv.slice(vv)))
          }
        } else Pv.push(Sv)
      }
      replace(vv, zv, Pv) {
        if (!(Pv instanceof Cv)) return super.replace(vv, zv, Pv);
        [vv, zv] = Yv(this, vv, zv);
        let hv = cv(this.text, cv(Pv.text, Gv(this.text, 0, vv)), zv),
          Sv = this.length + Pv.length - (zv - vv);
        return hv.length <= 32 ? new Cv(hv, Sv) : iv.from(Cv.split(hv, []), Sv)
      }
      sliceString(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [vv, zv] = Yv(this, vv, zv);
        let hv = "";
        for (let Sv = 0, ev = 0; Sv <= zv && ev < this.text.length; ev++) {
          let gv = this.text[ev],
            pv = Sv + gv.length;
          Sv > vv && ev && (hv += Pv), vv < pv && zv > Sv && (hv += gv.slice(Math.max(0, vv - Sv), zv - Sv)), Sv = pv + 1
        }
        return hv
      }
      flatten(vv) {
        for (let zv of this.text) vv.push(zv)
      }
      scanIdentical() {
        return 0
      }
      static split(vv, zv) {
        let Pv = [],
          hv = -1;
        for (let Sv of vv) Pv.push(Sv), hv += Sv.length + 1, 32 == Pv.length && (zv.push(new Cv(Pv, hv)), Pv = [], hv = -1);
        return hv > -1 && zv.push(new Cv(Pv, hv)), zv
      }
    }
    class iv extends sv {
      constructor(vv, zv) {
        super(), this.children = vv, this.length = zv, this.lines = 0;
        for (let Pv of vv) this.lines += Pv.lines
      }
      lineInner(vv, zv, Pv, hv) {
        for (let Sv = 0;; Sv++) {
          let ev = this.children[Sv],
            gv = hv + ev.length,
            pv = Pv + ev.lines - 1;
          if ((zv ? pv : gv) >= vv) return ev.lineInner(vv, zv, Pv, hv);
          hv = gv + 1, Pv = pv + 1
        }
      }
      decompose(vv, zv, Pv, hv) {
        for (let Sv = 0, ev = 0; ev <= zv && Sv < this.children.length; Sv++) {
          let gv = this.children[Sv],
            pv = ev + gv.length;
          if (vv <= pv && zv >= ev) {
            let Sv = hv & ((ev <= vv ? 1 : 0) | (pv >= zv ? 2 : 0));
            ev >= vv && pv <= zv && !Sv ? Pv.push(gv) : gv.decompose(vv - ev, zv - ev, Pv, Sv)
          }
          ev = pv + 1
        }
      }
      replace(vv, zv, Pv) {
        if ([vv, zv] = Yv(this, vv, zv), Pv.lines < this.lines)
          for (let hv = 0, Sv = 0; hv < this.children.length; hv++) {
            let ev = this.children[hv],
              gv = Sv + ev.length;
            if (vv >= Sv && zv <= gv) {
              let pv = ev.replace(vv - Sv, zv - Sv, Pv),
                dv = this.lines - ev.lines + pv.lines;
              if (pv.lines < dv >> 4 && pv.lines > dv >> 6) {
                let Sv = this.children.slice();
                return Sv[hv] = pv, new iv(Sv, this.length - (zv - vv) + Pv.length)
              }
              return super.replace(Sv, gv, pv)
            }
            Sv = gv + 1
          }
        return super.replace(vv, zv, Pv)
      }
      sliceString(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [vv, zv] = Yv(this, vv, zv);
        let hv = "";
        for (let Sv = 0, ev = 0; Sv < this.children.length && ev <= zv; Sv++) {
          let gv = this.children[Sv],
            pv = ev + gv.length;
          ev > vv && Sv && (hv += Pv), vv < pv && zv > ev && (hv += gv.sliceString(vv - ev, zv - ev, Pv)), ev = pv + 1
        }
        return hv
      }
      flatten(vv) {
        for (let zv of this.children) zv.flatten(vv)
      }
      scanIdentical(vv, zv) {
        if (!(vv instanceof iv)) return 0;
        let Pv = 0,
          [hv, Sv, ev, gv] = zv > 0 ? [0, 0, this.children.length, vv.children.length] : [this.children.length - 1, vv.children.length - 1, -1, -1];
        for (;; hv += zv, Sv += zv) {
          if (hv == ev || Sv == gv) return Pv;
          let pv = this.children[hv],
            dv = vv.children[Sv];
          if (pv != dv) return Pv + pv.scanIdentical(dv, zv);
          Pv += pv.length + 1
        }
      }
      static from(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : vv.reduce(((vv, zv) => vv + zv.length + 1), -1),
          Pv = 0;
        for (let Wv of vv) Pv += Wv.lines;
        if (Pv < 32) {
          let Pv = [];
          for (let zv of vv) zv.flatten(Pv);
          return new Cv(Pv, zv)
        }
        let hv = Math.max(32, Pv >> 5),
          Sv = hv << 1,
          ev = hv >> 1,
          gv = [],
          pv = 0,
          dv = -1,
          Nv = [];

        function lv(vv) {
          let zv;
          if (vv.lines > Sv && vv instanceof iv)
            for (let Pv of vv.children) lv(Pv);
          else vv.lines > ev && (pv > ev || !pv) ? (Tv(), gv.push(vv)) : vv instanceof Cv && pv && (zv = Nv[Nv.length - 1]) instanceof Cv && vv.lines + zv.lines <= 32 ? (pv += vv.lines, dv += vv.length + 1, Nv[Nv.length - 1] = new Cv(zv.text.concat(vv.text), zv.length + 1 + vv.length)) : (pv + vv.lines > hv && Tv(), pv += vv.lines, dv += vv.length + 1, Nv.push(vv))
        }

        function Tv() {
          0 != pv && (gv.push(1 == Nv.length ? Nv[0] : iv.from(Nv, dv)), dv = -1, pv = Nv.length = 0)
        }
        for (let Wv of vv) lv(Wv);
        return Tv(), 1 == gv.length ? gv[0] : new iv(gv, zv)
      }
    }

    function cv(vv, zv) {
      let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e9;
      for (let Sv = 0, ev = 0, gv = !0; ev < vv.length && Sv <= hv; ev++) {
        let pv = vv[ev],
          dv = Sv + pv.length;
        dv >= Pv && (dv > hv && (pv = pv.slice(0, hv - Sv)), Sv < Pv && (pv = pv.slice(Pv - Sv)), gv ? (zv[zv.length - 1] += pv, gv = !1) : zv.push(pv)), Sv = dv + 1
      }
      return zv
    }

    function Gv(vv, zv, Pv) {
      return cv(vv, [""], zv, Pv)
    }
    sv.empty = new Cv([""], 0);
    class mv {
      constructor(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.dir = zv, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [vv], this.offsets = [zv > 0 ? 1 : (vv instanceof Cv ? vv.text.length : vv.children.length) << 1]
      }
      nextInner(vv, zv) {
        for (this.done = this.lineBreak = !1;;) {
          let Pv = this.nodes.length - 1,
            hv = this.nodes[Pv],
            Sv = this.offsets[Pv],
            ev = Sv >> 1,
            gv = hv instanceof Cv ? hv.text.length : hv.children.length;
          if (ev == (zv > 0 ? gv : 0)) {
            if (0 == Pv) return this.done = !0, this.value = "", this;
            zv > 0 && this.offsets[Pv - 1]++, this.nodes.pop(), this.offsets.pop()
          } else if ((1 & Sv) == (zv > 0 ? 0 : 1)) {
            if (this.offsets[Pv] += zv, 0 == vv) return this.lineBreak = !0, this.value = "\n", this;
            vv--
          } else if (hv instanceof Cv) {
            let Sv = hv.text[ev + (zv < 0 ? -1 : 0)];
            if (this.offsets[Pv] += zv, Sv.length > Math.max(0, vv)) return this.value = 0 == vv ? Sv : zv > 0 ? Sv.slice(vv) : Sv.slice(0, Sv.length - vv), this;
            vv -= Sv.length
          } else {
            let Sv = hv.children[ev + (zv < 0 ? -1 : 0)];
            vv > Sv.length ? (vv -= Sv.length, this.offsets[Pv] += zv) : (zv < 0 && this.offsets[Pv]--, this.nodes.push(Sv), this.offsets.push(zv > 0 ? 1 : (Sv instanceof Cv ? Sv.text.length : Sv.children.length) << 1))
          }
        }
      }
      next() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return vv < 0 && (this.nextInner(-vv, -this.dir), vv = this.value.length), this.nextInner(vv, this.dir)
      }
    }
    class jv {
      constructor(vv, zv, Pv) {
        this.value = "", this.done = !1, this.cursor = new mv(vv, zv > Pv ? -1 : 1), this.pos = zv > Pv ? vv.length : 0, this.from = Math.min(zv, Pv), this.to = Math.max(zv, Pv)
      }
      nextInner(vv, zv) {
        if (zv < 0 ? this.pos <= this.from : this.pos >= this.to) return this.value = "", this.done = !0, this;
        vv += Math.max(0, zv < 0 ? this.pos - this.to : this.from - this.pos);
        let Pv = zv < 0 ? this.pos - this.from : this.to - this.pos;
        vv > Pv && (vv = Pv), Pv -= vv;
        let {
          value: hv
        } = this.cursor.next(vv);
        return this.pos += (hv.length + vv) * zv, this.value = hv.length <= Pv ? hv : zv < 0 ? hv.slice(hv.length - Pv) : hv.slice(0, Pv), this.done = !this.value, this
      }
      next() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return vv < 0 ? vv = Math.max(vv, this.from - this.pos) : vv > 0 && (vv = Math.min(vv, this.to - this.pos)), this.nextInner(vv, this.cursor.dir)
      }
      get lineBreak() {
        return this.cursor.lineBreak && "" != this.value
      }
    }
    class fv {
      constructor(vv) {
        this.inner = vv, this.afterBreak = !0, this.value = "", this.done = !1
      }
      next() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          {
            done: zv,
            lineBreak: Pv,
            value: hv
          } = this.inner.next(vv);
        return zv && this.afterBreak ? (this.value = "", this.afterBreak = !1) : zv ? (this.done = !0, this.value = "") : Pv ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = hv, this.afterBreak = !1), this
      }
      get lineBreak() {
        return !1
      }
    }
    "undefined" != typeof Symbol && (sv.prototype[Symbol.iterator] = function() {
      return this.iter()
    }, mv.prototype[Symbol.iterator] = jv.prototype[Symbol.iterator] = fv.prototype[Symbol.iterator] = function() {
      return this
    });
    class Fv {
      constructor(vv, zv, Pv, hv) {
        this.from = vv, this.to = zv, this.number = Pv, this.text = hv
      }
      get length() {
        return this.to - this.from
      }
    }

    function Yv(vv, zv, Pv) {
      return [zv = Math.max(0, Math.min(vv.length, zv)), Math.max(zv, Math.min(vv.length, Pv))]
    }

    function nv(vv, zv) {
      return dv(vv, zv, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function Ov(vv, zv) {
      let Pv = vv.charCodeAt(zv);
      if (!((hv = Pv) >= 55296 && hv < 56320) || zv + 1 == vv.length) return Pv;
      var hv;
      let Sv = vv.charCodeAt(zv + 1);
      return function(vv) {
        return vv >= 56320 && vv < 57344
      }(Sv) ? Sv - 56320 + (Pv - 55296 << 10) + 65536 : Pv
    }

    function Dv(vv) {
      return vv <= 65535 ? String.fromCharCode(vv) : (vv -= 65536, String.fromCharCode(55296 + (vv >> 10), 56320 + (1023 & vv)))
    }

    function Kv(vv) {
      return vv < 65536 ? 1 : 2
    }
    const Vv = /\r\n?|\n/;
    var Uv = function(vv) {
      return vv[vv.Simple = 0] = "Simple", vv[vv.TrackDel = 1] = "TrackDel", vv[vv.TrackBefore = 2] = "TrackBefore", vv[vv.TrackAfter = 3] = "TrackAfter", vv
    }(Uv || (Uv = {}));
    class Rv {
      constructor(vv) {
        this.sections = vv
      }
      get length() {
        let vv = 0;
        for (let zv = 0; zv < this.sections.length; zv += 2) vv += this.sections[zv];
        return vv
      }
      get newLength() {
        let vv = 0;
        for (let zv = 0; zv < this.sections.length; zv += 2) {
          let Pv = this.sections[zv + 1];
          vv += Pv < 0 ? this.sections[zv] : Pv
        }
        return vv
      }
      get empty() {
        return 0 == this.sections.length || 2 == this.sections.length && this.sections[1] < 0
      }
      iterGaps(vv) {
        for (let zv = 0, Pv = 0, hv = 0; zv < this.sections.length;) {
          let Sv = this.sections[zv++],
            ev = this.sections[zv++];
          ev < 0 ? (vv(Pv, hv, Sv), hv += Sv) : hv += ev, Pv += Sv
        }
      }
      iterChangedRanges(vv) {
        Iv(this, vv, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get invertedDesc() {
        let vv = [];
        for (let zv = 0; zv < this.sections.length;) {
          let Pv = this.sections[zv++],
            hv = this.sections[zv++];
          hv < 0 ? vv.push(Pv, hv) : vv.push(hv, Pv)
        }
        return new Rv(vv)
      }
      composeDesc(vv) {
        return this.empty ? vv : vv.empty ? this : Zv(this, vv)
      }
      mapDesc(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return vv.empty ? this : Qv(this, vv, zv)
      }
      mapPos(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Uv.Simple,
          hv = 0,
          Sv = 0;
        for (let ev = 0; ev < this.sections.length;) {
          let gv = this.sections[ev++],
            pv = this.sections[ev++],
            dv = hv + gv;
          if (pv < 0) {
            if (dv > vv) return Sv + (vv - hv);
            Sv += gv
          } else {
            if (Pv != Uv.Simple && dv >= vv && (Pv == Uv.TrackDel && hv < vv && dv > vv || Pv == Uv.TrackBefore && hv < vv || Pv == Uv.TrackAfter && dv > vv)) return null;
            if (dv > vv || dv == vv && zv < 0 && !gv) return vv == hv || zv < 0 ? Sv : Sv + pv;
            Sv += pv
          }
          hv = dv
        }
        if (vv > hv) throw new RangeError(`Position ${vv} is out of range for changeset of length ${hv}`);
        return Sv
      }
      touchesRange(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : vv;
        for (let Pv = 0, hv = 0; Pv < this.sections.length && hv <= zv;) {
          let Sv = hv + this.sections[Pv++];
          if (this.sections[Pv++] >= 0 && hv <= zv && Sv >= vv) return !(hv < vv && Sv > zv) || "cover";
          hv = Sv
        }
        return !1
      }
      toString() {
        let vv = "";
        for (let zv = 0; zv < this.sections.length;) {
          let Pv = this.sections[zv++],
            hv = this.sections[zv++];
          vv += (vv ? " " : "") + Pv + (hv >= 0 ? ":" + hv : "")
        }
        return vv
      }
      toJSON() {
        return this.sections
      }
      static fromJSON(vv) {
        if (!Array.isArray(vv) || vv.length % 2 || vv.some((vv => "number" != typeof vv))) throw new RangeError("Invalid JSON representation of ChangeDesc");
        return new Rv(vv)
      }
      static create(vv) {
        return new Rv(vv)
      }
    }
    class xv extends Rv {
      constructor(vv, zv) {
        super(vv), this.inserted = zv
      }
      apply(vv) {
        if (this.length != vv.length) throw new RangeError("Applying change set to a document with the wrong length");
        return Iv(this, ((zv, Pv, hv, Sv, ev) => vv = vv.replace(hv, hv + (Pv - zv), ev)), !1), vv
      }
      mapDesc(vv) {
        return Qv(this, vv, arguments.length > 1 && void 0 !== arguments[1] && arguments[1], !0)
      }
      invert(vv) {
        let zv = this.sections.slice(),
          Pv = [];
        for (let hv = 0, Sv = 0; hv < zv.length; hv += 2) {
          let ev = zv[hv],
            gv = zv[hv + 1];
          if (gv >= 0) {
            zv[hv] = gv, zv[hv + 1] = ev;
            let pv = hv >> 1;
            for (; Pv.length < pv;) Pv.push(sv.empty);
            Pv.push(ev ? vv.slice(Sv, Sv + ev) : sv.empty)
          }
          Sv += ev
        }
        return new xv(zv, Pv)
      }
      compose(vv) {
        return this.empty ? vv : vv.empty ? this : Zv(this, vv, !0)
      }
      map(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return vv.empty ? this : Qv(this, vv, zv, !0)
      }
      iterChanges(vv) {
        Iv(this, vv, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get desc() {
        return Rv.create(this.sections)
      }
      filter(vv) {
        let zv = [],
          Pv = [],
          hv = [],
          Sv = new Av(this);
        vv: for (let ev = 0, gv = 0;;) {
          let pv = ev == vv.length ? 1e9 : vv[ev++];
          for (; gv < pv || gv == pv && 0 == Sv.len;) {
            if (Sv.done) break vv;
            let vv = Math.min(Sv.len, pv - gv);
            tv(hv, vv, -1);
            let ev = -1 == Sv.ins ? -1 : 0 == Sv.off ? Sv.ins : 0;
            tv(zv, vv, ev), ev > 0 && qv(Pv, zv, Sv.text), Sv.forward(vv), gv += vv
          }
          let dv = vv[ev++];
          for (; gv < dv;) {
            if (Sv.done) break vv;
            let vv = Math.min(Sv.len, dv - gv);
            tv(zv, vv, -1), tv(hv, vv, -1 == Sv.ins ? -1 : 0 == Sv.off ? Sv.ins : 0), Sv.forward(vv), gv += vv
          }
        }
        return {
          changes: new xv(zv, Pv),
          filtered: Rv.create(hv)
        }
      }
      toJSON() {
        let vv = [];
        for (let zv = 0; zv < this.sections.length; zv += 2) {
          let Pv = this.sections[zv],
            hv = this.sections[zv + 1];
          hv < 0 ? vv.push(Pv) : 0 == hv ? vv.push([Pv]) : vv.push([Pv].concat(this.inserted[zv >> 1].toJSON()))
        }
        return vv
      }
      static of (vv, zv, Pv) {
        let hv = [],
          Sv = [],
          ev = 0,
          gv = null;

        function pv() {
          if (!(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && !hv.length) return;
          ev < zv && tv(hv, zv - ev, -1);
          let vv = new xv(hv, Sv);
          gv = gv ? gv.compose(vv.map(gv)) : vv, hv = [], Sv = [], ev = 0
        }
        return function vv(dv) {
          if (Array.isArray(dv))
            for (let zv of dv) vv(zv);
          else if (dv instanceof xv) {
            if (dv.length != zv) throw new RangeError(`Mismatched change set length (got ${dv.length}, expected ${zv})`);
            pv(), gv = gv ? gv.compose(dv.map(gv)) : dv
          } else {
            let {
              from: vv,
              to: gv = vv,
              insert: Nv
            } = dv;
            if (vv > gv || vv < 0 || gv > zv) throw new RangeError(`Invalid change range ${vv} to ${gv} (in doc of length ${zv})`);
            let lv = Nv ? "string" == typeof Nv ? sv.of(Nv.split(Pv || Vv)) : Nv : sv.empty,
              Tv = lv.length;
            if (vv == gv && 0 == Tv) return;
            vv < ev && pv(), vv > ev && tv(hv, vv - ev, -1), tv(hv, gv - vv, Tv), qv(Sv, hv, lv), ev = gv
          }
        }(vv), pv(!gv), gv
      }
      static empty(vv) {
        return new xv(vv ? [vv, -1] : [], [])
      }
      static fromJSON(vv) {
        if (!Array.isArray(vv)) throw new RangeError("Invalid JSON representation of ChangeSet");
        let zv = [],
          Pv = [];
        for (let hv = 0; hv < vv.length; hv++) {
          let Sv = vv[hv];
          if ("number" == typeof Sv) zv.push(Sv, -1);
          else {
            if (!Array.isArray(Sv) || "number" != typeof Sv[0] || Sv.some(((vv, zv) => zv && "string" != typeof vv))) throw new RangeError("Invalid JSON representation of ChangeSet");
            if (1 == Sv.length) zv.push(Sv[0], 0);
            else {
              for (; Pv.length < hv;) Pv.push(sv.empty);
              Pv[hv] = sv.of(Sv.slice(1)), zv.push(Sv[0], Pv[hv].length)
            }
          }
        }
        return new xv(zv, Pv)
      }
      static createSet(vv, zv) {
        return new xv(vv, zv)
      }
    }

    function tv(vv, zv, Pv) {
      let hv = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (0 == zv && Pv <= 0) return;
      let Sv = vv.length - 2;
      Sv >= 0 && Pv <= 0 && Pv == vv[Sv + 1] ? vv[Sv] += zv : Sv >= 0 && 0 == zv && 0 == vv[Sv] ? vv[Sv + 1] += Pv : hv ? (vv[Sv] += zv, vv[Sv + 1] += Pv) : vv.push(zv, Pv)
    }

    function qv(vv, zv, Pv) {
      if (0 == Pv.length) return;
      let hv = zv.length - 2 >> 1;
      if (hv < vv.length) vv[vv.length - 1] = vv[vv.length - 1].append(Pv);
      else {
        for (; vv.length < hv;) vv.push(sv.empty);
        vv.push(Pv)
      }
    }

    function Iv(vv, zv, Pv) {
      let hv = vv.inserted;
      for (let Sv = 0, ev = 0, gv = 0; gv < vv.sections.length;) {
        let pv = vv.sections[gv++],
          dv = vv.sections[gv++];
        if (dv < 0) Sv += pv, ev += pv;
        else {
          let Nv = Sv,
            lv = ev,
            Tv = sv.empty;
          for (; Nv += pv, lv += dv, dv && hv && (Tv = Tv.append(hv[gv - 2 >> 1])), !(Pv || gv == vv.sections.length || vv.sections[gv + 1] < 0);) pv = vv.sections[gv++], dv = vv.sections[gv++];
          zv(Sv, Nv, ev, lv, Tv), Sv = Nv, ev = lv
        }
      }
    }

    function Qv(vv, zv, Pv) {
      let hv = [],
        Sv = arguments.length > 3 && void 0 !== arguments[3] && arguments[3] ? [] : null,
        ev = new Av(vv),
        gv = new Av(zv),
        pv = 0;
      for (let dv = -1;;) {
        if (++pv > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - likely malformed ChangeSet");
        if (ev.done && gv.len || gv.done && ev.len) throw new Error("Mismatched change set lengths");
        if (-1 == ev.ins && -1 == gv.ins) {
          let vv = Math.min(ev.len, gv.len);
          tv(hv, vv, -1), ev.forward(vv), gv.forward(vv)
        } else if (gv.ins >= 0 && (ev.ins < 0 || dv == ev.i || 0 == ev.off && (gv.len < ev.len || gv.len == ev.len && !Pv))) {
          let vv = gv.len;
          for (tv(hv, gv.ins, -1); vv;) {
            if (++pv > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-b");
            let zv = Math.min(ev.len, vv);
            ev.ins >= 0 && dv < ev.i && ev.len <= zv && (tv(hv, 0, ev.ins), Sv && qv(Sv, hv, ev.text), dv = ev.i), ev.forward(zv), vv -= zv
          }
          gv.next()
        } else {
          if (!(ev.ins >= 0)) {
            if (ev.done && gv.done) return Sv ? xv.createSet(hv, Sv) : Rv.create(hv);
            throw new Error("Mismatched change set lengths")
          } {
            let vv = 0,
              zv = ev.len;
            for (; zv;) {
              if (++pv > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-a");
              if (-1 == gv.ins) {
                let Pv = Math.min(zv, gv.len);
                vv += Pv, zv -= Pv, gv.forward(Pv)
              } else {
                if (!(0 == gv.ins && gv.len < zv)) break;
                zv -= gv.len, gv.next()
              }
            }
            tv(hv, vv, dv < ev.i ? ev.ins : 0), Sv && dv < ev.i && qv(Sv, hv, ev.text), dv = ev.i, ev.forward(ev.len - zv)
          }
        }
      }
    }

    function Zv(vv, zv) {
      let Pv = [],
        hv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? [] : null,
        Sv = new Av(vv),
        ev = new Av(zv),
        gv = 0;
      for (let pv = !1;;) {
        if (++gv > 2e6) throw new Error("BLOXD CODEMIRROR: composeSets exceeded max iterations - likely malformed ChangeSet");
        if (Sv.done && ev.done) return hv ? xv.createSet(Pv, hv) : Rv.create(Pv);
        if (0 == Sv.ins) tv(Pv, Sv.len, 0, pv), Sv.next();
        else if (0 != ev.len || ev.done) {
          if (Sv.done || ev.done) throw new Error("Mismatched change set lengths");
          {
            let vv = Math.min(Sv.len2, ev.len),
              zv = Pv.length;
            if (-1 == Sv.ins) {
              let zv = -1 == ev.ins ? -1 : ev.off ? 0 : ev.ins;
              tv(Pv, vv, zv, pv), hv && zv && qv(hv, Pv, ev.text)
            } else - 1 == ev.ins ? (tv(Pv, Sv.off ? 0 : Sv.len, vv, pv), hv && qv(hv, Pv, Sv.textBit(vv))) : (tv(Pv, Sv.off ? 0 : Sv.len, ev.off ? 0 : ev.ins, pv), hv && !ev.off && qv(hv, Pv, ev.text));
            pv = (Sv.ins > vv || ev.ins >= 0 && ev.len > vv) && (pv || Pv.length > zv), Sv.forward2(vv), ev.forward(vv)
          }
        } else tv(Pv, 0, ev.ins, pv), hv && qv(hv, Pv, ev.text), ev.next()
      }
    }
    class Av {
      constructor(vv) {
        this.set = vv, this.i = 0, this.next()
      }
      next() {
        let {
          sections: vv
        } = this.set;
        this.i < vv.length ? (this.len = vv[this.i++], this.ins = vv[this.i++]) : (this.len = 0, this.ins = -2), this.off = 0
      }
      get done() {
        return -2 == this.ins
      }
      get len2() {
        return this.ins < 0 ? this.len : this.ins
      }
      get text() {
        let {
          inserted: vv
        } = this.set, zv = this.i - 2 >> 1;
        return zv >= vv.length ? sv.empty : vv[zv]
      }
      textBit(vv) {
        let {
          inserted: zv
        } = this.set, Pv = this.i - 2 >> 1;
        return Pv >= zv.length && !vv ? sv.empty : zv[Pv].slice(this.off, null == vv ? void 0 : this.off + vv)
      }
      forward(vv) {
        vv == this.len ? this.next() : (this.len -= vv, this.off += vv)
      }
      forward2(vv) {
        -1 == this.ins ? this.forward(vv) : vv == this.ins ? this.next() : (this.ins -= vv, this.off += vv)
      }
    }
    class Lv {
      constructor(vv, zv, Pv) {
        this.from = vv, this.to = zv, this.flags = Pv
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
        let vv = 7 & this.flags;
        return 7 == vv ? null : vv
      }
      get goalColumn() {
        let vv = this.flags >> 6;
        return 16777215 == vv ? void 0 : vv
      }
      map(vv) {
        let zv, Pv, hv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return this.empty ? zv = Pv = vv.mapPos(this.from, hv) : (zv = vv.mapPos(this.from, 1), Pv = vv.mapPos(this.to, -1)), zv == this.from && Pv == this.to ? this : new Lv(zv, Pv, this.flags)
      }
      extend(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : vv,
          Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (vv <= this.anchor && zv >= this.anchor) return Hv.range(vv, zv, void 0, void 0, Pv);
        let hv = Math.abs(vv - this.anchor) > Math.abs(zv - this.anchor) ? vv : zv;
        return Hv.range(this.anchor, hv, void 0, void 0, Pv)
      }
      eq(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.anchor == vv.anchor && this.head == vv.head && this.goalColumn == vv.goalColumn && (!zv || !this.empty || this.assoc == vv.assoc)
      }
      toJSON() {
        return {
          anchor: this.anchor,
          head: this.head
        }
      }
      static fromJSON(vv) {
        if (!vv || "number" != typeof vv.anchor || "number" != typeof vv.head) throw new RangeError("Invalid JSON representation for SelectionRange");
        return Hv.range(vv.anchor, vv.head)
      }
      static create(vv, zv, Pv) {
        return new Lv(vv, zv, Pv)
      }
    }
    class Hv {
      constructor(vv, zv) {
        this.PC = vv, this.mainIndex = zv
      }
      map(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return vv.empty ? this : Hv.create(this.PC.map((Pv => Pv.map(vv, zv))), this.mainIndex)
      }
      eq(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.PC.length != vv.PC.length || this.mainIndex != vv.mainIndex) return !1;
        for (let Pv = 0; Pv < this.PC.length; Pv++)
          if (!this.PC[Pv].eq(vv.PC[Pv], zv)) return !1;
        return !0
      }
      get main() {
        return this.PC[this.mainIndex]
      }
      asSingle() {
        return 1 == this.PC.length ? this : new Hv([this.main], 0)
      }
      addRange(vv) {
        let zv = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return Hv.create([vv].concat(this.PC), zv ? 0 : this.mainIndex + 1)
      }
      replaceRange(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.mainIndex,
          Pv = this.PC.slice();
        return Pv[zv] = vv, Hv.create(Pv, this.mainIndex)
      }
      toJSON() {
        return {
          PC: this.PC.map((vv => vv.toJSON())),
          main: this.mainIndex
        }
      }
      static fromJSON(vv) {
        if (!vv || !Array.isArray(vv.PC) || "number" != typeof vv.main || vv.main >= vv.PC.length) throw new RangeError("Invalid JSON representation for EditorSelection");
        return new Hv(vv.PC.map((vv => Lv.fromJSON(vv))), vv.main)
      }
      static single(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : vv;
        return new Hv([Hv.range(vv, zv)], 0)
      }
      static create(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (0 == vv.length) throw new RangeError("A selection needs at least one range");
        for (let Pv = 0, hv = 0; hv < vv.length; hv++) {
          let Sv = vv[hv];
          if (Sv.empty ? Sv.from <= Pv : Sv.from < Pv) return Hv.normalized(vv.slice(), zv);
          Pv = Sv.to
        }
        return new Hv(vv, zv)
      }
      static cursor(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Pv = arguments.length > 2 ? arguments[2] : void 0,
          hv = arguments.length > 3 ? arguments[3] : void 0;
        return Lv.create(vv, vv, (0 == zv ? 0 : zv < 0 ? 8 : 16) | (null == Pv ? 7 : Math.min(6, Pv)) | (null !== hv && void 0 !== hv ? hv : 16777215) << 6)
      }
      static range(vv, zv, Pv, hv, Sv) {
        let ev = (null !== Pv && void 0 !== Pv ? Pv : 16777215) << 6 | (null == hv ? 7 : Math.min(6, hv));
        return Sv || vv == zv || (Sv = zv < vv ? 1 : -1), zv < vv ? Lv.create(zv, vv, 48 | ev) : Lv.create(vv, zv, (Sv ? Sv < 0 ? 8 : 16 : 0) | ev)
      }
      static normalized(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Pv = vv[zv];
        vv.sort(((vv, zv) => vv.from - zv.from)), zv = vv.indexOf(Pv);
        for (let hv = 1; hv < vv.length; hv++) {
          let Pv = vv[hv],
            Sv = vv[hv - 1];
          if (Pv.empty ? Pv.from <= Sv.to : Pv.from < Sv.to) {
            let ev = Sv.from,
              gv = Math.max(Pv.to, Sv.to);
            hv <= zv && zv--, vv.splice(--hv, 2, Pv.anchor > Pv.head ? Hv.range(gv, ev) : Hv.range(ev, gv))
          }
        }
        return new Hv(vv, zv)
      }
    }

    function Mv(vv, zv) {
      for (let Pv of vv.PC)
        if (Pv.to > zv) throw new RangeError("Selection points outside of document")
    }
    let yv = 0;
    class Bv {
      constructor(vv, zv, Pv, hv, Sv) {
        this.combine = vv, this.compareInput = zv, this.compare = Pv, this.isStatic = hv, this.id = yv++, this.default = vv([]), this.extensions = "function" == typeof Sv ? Sv(this) : Sv
      }
      get reader() {
        return this
      }
      static define() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return new Bv(vv.combine || (vv => vv), vv.compareInput || ((vv, zv) => vv === zv), vv.compare || (vv.combine ? (vv, zv) => vv === zv : Jv), !!vv.static, vv.enables)
      }
      of(vv) {
        return new Ev([], this, 0, vv)
      }
      compute(vv, zv) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new Ev(vv, this, 1, zv)
      }
      computeN(vv, zv) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new Ev(vv, this, 2, zv)
      }
      from(vv, zv) {
        return zv || (zv = vv => vv), this.compute([vv], (Pv => zv(Pv.field(vv))))
      }
    }

    function Jv(vv, zv) {
      return vv == zv || vv.length == zv.length && vv.every(((vv, Pv) => vv === zv[Pv]))
    }
    class Ev {
      constructor(vv, zv, Pv, hv) {
        this.dependencies = vv, this.facet = zv, this.type = Pv, this.value = hv, this.id = yv++
      }
      dynamicSlot(vv) {
        var zv;
        let Pv = this.value,
          hv = this.facet.compareInput,
          Sv = this.id,
          ev = vv[Sv] >> 1,
          gv = 2 == this.type,
          pv = !1,
          dv = !1,
          Nv = [];
        for (let lv of this.dependencies) "doc" == lv ? pv = !0 : "selection" == lv ? dv = !0 : 0 == (1 & (null !== (zv = vv[lv.id]) && void 0 !== zv ? zv : 1)) && Nv.push(vv[lv.id]);
        return {
          create: vv => (vv.values[ev] = Pv(vv), 1),
          update(vv, zv) {
            if (pv && zv.docChanged || dv && (zv.docChanged || zv.selection) || bv(vv, Nv)) {
              let zv = Pv(vv);
              if (gv ? !ov(zv, vv.values[ev], hv) : !hv(zv, vv.values[ev])) return vv.values[ev] = zv, 1
            }
            return 0
          },
          reconfigure: (vv, zv) => {
            let pv, dv = zv.config.address[Sv];
            if (null != dv) {
              let Sv = lz(zv, dv);
              if (this.dependencies.every((Pv => Pv instanceof Bv ? zv.facet(Pv) === vv.facet(Pv) : !(Pv instanceof Xv) || zv.field(Pv, !1) == vv.field(Pv, !1))) || (gv ? ov(pv = Pv(vv), Sv, hv) : hv(pv = Pv(vv), Sv))) return vv.values[ev] = Sv, 0
            } else pv = Pv(vv);
            return vv.values[ev] = pv, 1
          }
        }
      }
    }

    function ov(vv, zv, Pv) {
      if (vv.length != zv.length) return !1;
      for (let hv = 0; hv < vv.length; hv++)
        if (!Pv(vv[hv], zv[hv])) return !1;
      return !0
    }

    function bv(vv, zv) {
      let Pv = !1;
      for (let hv of zv) 1 & Nz(vv, hv) && (Pv = !0);
      return Pv
    }

    function rv(vv, zv, Pv) {
      let hv = Pv.map((zv => vv[zv.id])),
        Sv = Pv.map((vv => vv.type)),
        ev = hv.filter((vv => !(1 & vv))),
        gv = vv[zv.id] >> 1;

      function pv(vv) {
        let Pv = [];
        for (let zv = 0; zv < hv.length; zv++) {
          let ev = lz(vv, hv[zv]);
          if (2 == Sv[zv])
            for (let vv of ev) Pv.push(vv);
          else Pv.push(ev)
        }
        return zv.combine(Pv)
      }
      return {
        create(vv) {
          for (let zv of hv) Nz(vv, zv);
          return vv.values[gv] = pv(vv), 1
        },
        update(vv, Pv) {
          if (!bv(vv, ev)) return 0;
          let hv = pv(vv);
          return zv.compare(hv, vv.values[gv]) ? 0 : (vv.values[gv] = hv, 1)
        },
        reconfigure(vv, Sv) {
          let ev = bv(vv, hv),
            dv = Sv.config.facets[zv.id],
            Nv = Sv.facet(zv);
          if (dv && !ev && Jv(Pv, dv)) return vv.values[gv] = Nv, 0;
          let lv = pv(vv);
          return zv.compare(lv, Nv) ? (vv.values[gv] = Nv, 0) : (vv.values[gv] = lv, 1)
        }
      }
    }
    const kv = Bv.define({
      static: !0
    });
    class Xv {
      constructor(vv, zv, Pv, hv, Sv) {
        this.id = vv, this.createF = zv, this.updateF = Pv, this.compareF = hv, this.spec = Sv, this.provides = void 0
      }
      static define(vv) {
        let zv = new Xv(yv++, vv.create, vv.update, vv.compare || ((vv, zv) => vv === zv), vv);
        return vv.provide && (zv.provides = vv.provide(zv)), zv
      }
      create(vv) {
        let zv = vv.facet(kv).find((vv => vv.field == this));
        return ((null === zv || void 0 === zv ? void 0 : zv.create) || this.createF)(vv)
      }
      slot(vv) {
        let zv = vv[this.id] >> 1;
        return {
          create: vv => (vv.values[zv] = this.create(vv), 1),
          update: (vv, Pv) => {
            let hv = vv.values[zv],
              Sv = this.updateF(hv, Pv);
            return this.compareF(hv, Sv) ? 0 : (vv.values[zv] = Sv, 1)
          },
          reconfigure: (vv, Pv) => {
            let hv, Sv = vv.facet(kv),
              ev = Pv.facet(kv);
            return (hv = Sv.find((vv => vv.field == this))) && hv != ev.find((vv => vv.field == this)) ? (vv.values[zv] = hv.create(vv), 1) : null != Pv.config.address[this.id] ? (vv.values[zv] = Pv.field(this), 0) : (vv.values[zv] = this.create(vv), 1)
          }
        }
      }
      init(vv) {
        return [this, kv.of({
          field: this,
          create: vv
        })]
      }
      get extension() {
        return this
      }
    }
    const uv = 4,
      vz = 3,
      zz = 2,
      Pz = 1;

    function hz(vv) {
      return zv => new ez(zv, vv)
    }
    const Sz = {
      highest: hz(0),
      high: hz(Pz),
      default: hz(zz),
      low: hz(vz),
      lowest: hz(uv)
    };
    class ez {
      constructor(vv, zv) {
        this.inner = vv, this.prec = zv
      }
    }
    class gz {
      of(vv) {
        return new pz(this, vv)
      }
      reconfigure(vv) {
        return gz.reconfigure.of({
          compartment: this,
          extension: vv
        })
      }
      get(vv) {
        return vv.config.compartments.get(this)
      }
    }
    class pz {
      constructor(vv, zv) {
        this.compartment = vv, this.inner = zv
      }
    }
    class dz {
      constructor(vv, zv, Pv, hv, Sv, ev) {
        for (this.base = vv, this.compartments = zv, this.dynamicSlots = Pv, this.address = hv, this.staticValues = Sv, this.facets = ev, this.statusTemplate = []; this.statusTemplate.length < Pv.length;) this.statusTemplate.push(0)
      }
      staticFacet(vv) {
        let zv = this.address[vv.id];
        return null == zv ? vv.default : this.staticValues[zv >> 1]
      }
      static resolve(vv, zv, Pv) {
        let hv = [],
          Sv = Object.create(null),
          ev = new Map;
        for (let Tv of function(vv, zv, Pv) {
            let hv = [
                [],
                [],
                [],
                [],
                []
              ],
              Sv = new Map;

            function ev(vv, gv) {
              let pv = Sv.get(vv);
              if (null != pv) {
                if (pv <= gv) return;
                let zv = hv[pv].indexOf(vv);
                zv > -1 && hv[pv].splice(zv, 1), vv instanceof pz && Pv.delete(vv.compartment)
              }
              if (Sv.set(vv, gv), Array.isArray(vv))
                for (let zv of vv) ev(zv, gv);
              else if (vv instanceof pz) {
                if (Pv.has(vv.compartment)) throw new RangeError("Duplicate use of compartment in extensions");
                let hv = zv.get(vv.compartment) || vv.inner;
                Pv.set(vv.compartment, hv), ev(hv, gv)
              } else if (vv instanceof ez) ev(vv.inner, vv.prec);
              else if (vv instanceof Xv) hv[gv].push(vv), vv.provides && ev(vv.provides, gv);
              else if (vv instanceof Ev) hv[gv].push(vv), vv.facet.extensions && ev(vv.facet.extensions, zz);
              else {
                let zv = vv.extension;
                if (!zv) throw new Error(`Unrecognized extension value in extension set (${vv}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
                ev(zv, gv)
              }
            }
            return ev(vv, zz), hv.reduce(((vv, zv) => vv.concat(zv)))
          }(vv, zv, ev)) Tv instanceof Xv ? hv.push(Tv) : (Sv[Tv.facet.id] || (Sv[Tv.facet.id] = [])).push(Tv);
        let gv = Object.create(null),
          pv = [],
          dv = [];
        for (let Tv of hv) gv[Tv.id] = dv.length << 1, dv.push((vv => Tv.slot(vv)));
        let Nv = null === Pv || void 0 === Pv ? void 0 : Pv.config.facets;
        for (let Tv in Sv) {
          let vv = Sv[Tv],
            zv = vv[0].facet,
            hv = Nv && Nv[Tv] || [];
          if (vv.every((vv => 0 == vv.type)))
            if (gv[zv.id] = pv.length << 1 | 1, Jv(hv, vv)) pv.push(Pv.facet(zv));
            else {
              let hv = zv.combine(vv.map((vv => vv.value)));
              pv.push(Pv && zv.compare(hv, Pv.facet(zv)) ? Pv.facet(zv) : hv)
            }
          else {
            for (let zv of vv) 0 == zv.type ? (gv[zv.id] = pv.length << 1 | 1, pv.push(zv.value)) : (gv[zv.id] = dv.length << 1, dv.push((vv => zv.dynamicSlot(vv))));
            gv[zv.id] = dv.length << 1, dv.push((Pv => rv(Pv, zv, vv)))
          }
        }
        let lv = dv.map((vv => vv(gv)));
        return new dz(vv, ev, lv, gv, pv, Sv)
      }
    }

    function Nz(vv, zv) {
      if (1 & zv) return 2;
      let Pv = zv >> 1,
        hv = vv.status[Pv];
      if (4 == hv) throw new Error("Cyclic dependency between fields and/or facets");
      if (2 & hv) return hv;
      vv.status[Pv] = 4;
      let Sv = vv.computeSlot(vv, vv.config.dynamicSlots[Pv]);
      return vv.status[Pv] = 2 | Sv
    }

    function lz(vv, zv) {
      return 1 & zv ? vv.config.staticValues[zv >> 1] : vv.values[zv >> 1]
    }
    const Tz = Bv.define(),
      Wz = Bv.define({
        combine: vv => vv.some((vv => vv)),
        static: !0
      }),
      wz = Bv.define({
        combine: vv => vv.length ? vv[0] : void 0,
        static: !0
      }),
      az = Bv.define(),
      sz = Bv.define(),
      Cz = Bv.define(),
      iz = Bv.define({
        combine: vv => !!vv.length && vv[0]
      });
    class cz {
      constructor(vv, zv) {
        this.type = vv, this.value = zv
      }
      static define() {
        return new Gz
      }
    }
    class Gz {
      of(vv) {
        return new cz(this, vv)
      }
    }
    class mz {
      constructor(vv) {
        this.map = vv
      }
      of(vv) {
        return new jz(this, vv)
      }
    }
    class jz {
      constructor(vv, zv) {
        this.type = vv, this.value = zv
      }
      map(vv) {
        let zv = this.type.map(this.value, vv);
        return void 0 === zv ? void 0 : zv == this.value ? this : new jz(this.type, zv)
      }
      is(vv) {
        return this.type == vv
      }
      static define() {
        return new mz((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).map || (vv => vv))
      }
      static mapEffects(vv, zv) {
        if (!vv.length) return vv;
        let Pv = [];
        for (let hv of vv) {
          let vv = hv.map(zv);
          vv && Pv.push(vv)
        }
        return Pv
      }
    }
    jz.reconfigure = jz.define(), jz.appendConfig = jz.define();
    class fz {
      constructor(vv, zv, Pv, hv, Sv, ev) {
        this.startState = vv, this.changes = zv, this.selection = Pv, this.effects = hv, this.annotations = Sv, this.scrollIntoView = ev, this._doc = null, this._state = null, Pv && Mv(Pv, zv.newLength), Sv.some((vv => vv.type == fz.time)) || (this.annotations = Sv.concat(fz.time.of(Date.now())))
      }
      static create(vv, zv, Pv, hv, Sv, ev) {
        return new fz(vv, zv, Pv, hv, Sv, ev)
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
      annotation(vv) {
        for (let zv of this.annotations)
          if (zv.type == vv) return zv.value
      }
      get docChanged() {
        return !this.changes.empty
      }
      get reconfigured() {
        return this.startState.config != this.state.config
      }
      isUserEvent(vv) {
        let zv = this.annotation(fz.userEvent);
        return !(!zv || !(zv == vv || zv.length > vv.length && zv.slice(0, vv.length) == vv && "." == zv[vv.length]))
      }
    }

    function Fz(vv, zv) {
      let Pv = [];
      for (let hv = 0, Sv = 0;;) {
        let ev, gv;
        if (hv < vv.length && (Sv == zv.length || zv[Sv] >= vv[hv])) ev = vv[hv++], gv = vv[hv++];
        else {
          if (!(Sv < zv.length)) return Pv;
          ev = zv[Sv++], gv = zv[Sv++]
        }!Pv.length || Pv[Pv.length - 1] < ev ? Pv.push(ev, gv) : Pv[Pv.length - 1] < gv && (Pv[Pv.length - 1] = gv)
      }
    }

    function Yz(vv, zv, Pv) {
      var hv;
      let Sv, ev, gv;
      return Pv ? (Sv = zv.changes, ev = xv.empty(zv.changes.length), gv = vv.changes.compose(zv.changes)) : (Sv = zv.changes.map(vv.changes), ev = vv.changes.mapDesc(zv.changes, !0), gv = vv.changes.compose(Sv)), {
        changes: gv,
        selection: zv.selection ? zv.selection.map(ev) : null === (hv = vv.selection) || void 0 === hv ? void 0 : hv.map(Sv),
        effects: jz.mapEffects(vv.effects, Sv).concat(jz.mapEffects(zv.effects, ev)),
        annotations: vv.annotations.length ? vv.annotations.concat(zv.annotations) : zv.annotations,
        scrollIntoView: vv.scrollIntoView || zv.scrollIntoView
      }
    }

    function nz(vv, zv, Pv) {
      let hv = zv.selection,
        Sv = Kz(zv.annotations);
      return zv.userEvent && (Sv = Sv.concat(fz.userEvent.of(zv.userEvent))), {
        changes: zv.changes instanceof xv ? zv.changes : xv.of(zv.changes || [], Pv, vv.facet(wz)),
        selection: hv && (hv instanceof Hv ? hv : Hv.single(hv.anchor, hv.head)),
        effects: Kz(zv.effects),
        annotations: Sv,
        scrollIntoView: !!zv.scrollIntoView
      }
    }

    function Oz(vv, zv, Pv) {
      let hv = nz(vv, zv.length ? zv[0] : {}, vv.doc.length);
      zv.length && !1 === zv[0].filter && (Pv = !1);
      for (let ev = 1; ev < zv.length; ev++) {
        !1 === zv[ev].filter && (Pv = !1);
        let Sv = !!zv[ev].sequential;
        hv = Yz(hv, nz(vv, zv[ev], Sv ? hv.changes.newLength : vv.doc.length), Sv)
      }
      let Sv = fz.create(vv, hv.changes, hv.selection, hv.effects, hv.annotations, hv.scrollIntoView);
      return function(vv) {
        let zv = vv.startState,
          Pv = zv.facet(Cz),
          hv = vv;
        for (let Sv = Pv.length - 1; Sv >= 0; Sv--) {
          let ev = Pv[Sv](vv);
          ev && Object.keys(ev).length && (hv = Yz(hv, nz(zv, ev, vv.changes.newLength), !0))
        }
        return hv == vv ? vv : fz.create(zv, vv.changes, vv.selection, hv.effects, hv.annotations, hv.scrollIntoView)
      }(Pv ? function(vv) {
        let zv = vv.startState,
          Pv = !0;
        for (let Sv of zv.facet(az)) {
          let zv = Sv(vv);
          if (!1 === zv) {
            Pv = !1;
            break
          }
          Array.isArray(zv) && (Pv = !0 === Pv ? zv : Fz(Pv, zv))
        }
        if (!0 !== Pv) {
          let hv, Sv;
          if (!1 === Pv) Sv = vv.changes.invertedDesc, hv = xv.empty(zv.doc.length);
          else {
            let zv = vv.changes.filter(Pv);
            hv = zv.changes, Sv = zv.filtered.mapDesc(zv.changes).invertedDesc
          }
          vv = fz.create(zv, hv, vv.selection && vv.selection.map(Sv), jz.mapEffects(vv.effects, Sv), vv.annotations, vv.scrollIntoView)
        }
        let hv = zv.facet(sz);
        for (let Sv = hv.length - 1; Sv >= 0; Sv--) {
          let Pv = hv[Sv](vv);
          vv = Pv instanceof fz ? Pv : Array.isArray(Pv) && 1 == Pv.length && Pv[0] instanceof fz ? Pv[0] : Oz(zv, Kz(Pv), !1)
        }
        return vv
      }(Sv) : Sv)
    }
    fz.time = cz.define(), fz.userEvent = cz.define(), fz.addToHistory = cz.define(), fz.remote = cz.define();
    const Dz = [];

    function Kz(vv) {
      return null == vv ? Dz : Array.isArray(vv) ? vv : [vv]
    }
    var Vz = function(vv) {
      return vv[vv.Word = 0] = "Word", vv[vv.Space = 1] = "Space", vv[vv.Other = 2] = "Other", vv
    }(Vz || (Vz = {}));
    const Uz = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
    let Rz;
    try {
      Rz = new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u")
    } catch (PP) {}

    function xz(vv) {
      return zv => {
        if (!/\S/.test(zv)) return Vz.Space;
        if (function(vv) {
            if (Rz) return Rz.test(vv);
            for (let zv = 0; zv < vv.length; zv++) {
              let Pv = vv[zv];
              if (/\w/.test(Pv) || Pv > "\x80" && (Pv.toUpperCase() != Pv.toLowerCase() || Uz.test(Pv))) return !0
            }
            return !1
          }(zv)) return Vz.Word;
        for (let Pv = 0; Pv < vv.length; Pv++)
          if (zv.indexOf(vv[Pv]) > -1) return Vz.Word;
        return Vz.Other
      }
    }
    class tz {
      constructor(vv, zv, Pv, hv, Sv, ev) {
        this.config = vv, this.doc = zv, this.selection = Pv, this.values = hv, this.status = vv.statusTemplate.slice(), this.computeSlot = Sv, ev && (ev._state = this);
        for (let gv = 0; gv < this.config.dynamicSlots.length; gv++) Nz(this, gv << 1);
        this.computeSlot = null
      }
      field(vv) {
        let zv = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Pv = this.config.address[vv.id];
        if (null != Pv) return Nz(this, Pv), lz(this, Pv);
        if (zv) throw new RangeError("Field is not present in this state")
      }
      update() {
        for (var vv = arguments.length, zv = new Array(vv), Pv = 0; Pv < vv; Pv++) zv[Pv] = arguments[Pv];
        return Oz(this, zv, !0)
      }
      applyTransaction(vv) {
        let zv, Pv = this.config,
          {
            base: hv,
            compartments: Sv
          } = Pv;
        for (let gv of vv.effects) gv.is(gz.reconfigure) ? (Pv && (Sv = new Map, Pv.compartments.forEach(((vv, zv) => Sv.set(zv, vv))), Pv = null), Sv.set(gv.value.compartment, gv.value.extension)) : gv.is(jz.reconfigure) ? (Pv = null, hv = gv.value) : gv.is(jz.appendConfig) && (Pv = null, hv = Kz(hv).concat(gv.value));
        if (Pv) zv = vv.startState.values.slice();
        else {
          Pv = dz.resolve(hv, Sv, this), zv = new tz(Pv, this.doc, this.selection, Pv.dynamicSlots.map((() => null)), ((vv, zv) => zv.reconfigure(vv, this)), null).values
        }
        let ev = vv.startState.facet(Wz) ? vv.newSelection : vv.newSelection.asSingle();
        new tz(Pv, vv.newDoc, ev, zv, ((zv, Pv) => Pv.update(zv, vv)), vv)
      }
      replaceSelection(vv) {
        return "string" == typeof vv && (vv = this.toText(vv)), this.changeByRange((zv => ({
          changes: {
            from: zv.from,
            to: zv.to,
            insert: vv
          },
          range: Hv.cursor(zv.from + vv.length)
        })))
      }
      changeByRange(vv) {
        let zv = this.selection,
          Pv = vv(zv.PC[0]),
          hv = this.changes(Pv.changes),
          Sv = [Pv.range],
          ev = Kz(Pv.effects);
        for (let gv = 1; gv < zv.PC.length; gv++) {
          let Pv = vv(zv.PC[gv]),
            pv = this.changes(Pv.changes),
            dv = pv.map(hv);
          for (let vv = 0; vv < gv; vv++) Sv[vv] = Sv[vv].map(dv);
          let Nv = hv.mapDesc(pv, !0);
          Sv.push(Pv.range.map(Nv)), hv = hv.compose(dv), ev = jz.mapEffects(ev, dv).concat(jz.mapEffects(Kz(Pv.effects), Nv))
        }
        return {
          changes: hv,
          selection: Hv.create(Sv, zv.mainIndex),
          effects: ev
        }
      }
      changes() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return vv instanceof xv ? vv : xv.of(vv, this.doc.length, this.facet(tz.lineSeparator))
      }
      toText(vv) {
        return sv.of(vv.split(this.facet(tz.lineSeparator) || Vv))
      }
      sliceDoc() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.doc.length;
        return this.doc.sliceString(vv, zv, this.lineBreak)
      }
      facet(vv) {
        let zv = this.config.address[vv.id];
        return null == zv ? vv.default : (Nz(this, zv), lz(this, zv))
      }
      toJSON(vv) {
        let zv = {
          doc: this.sliceDoc(),
          selection: this.selection.toJSON()
        };
        if (vv)
          for (let Pv in vv) {
            let hv = vv[Pv];
            hv instanceof Xv && null != this.config.address[hv.id] && (zv[Pv] = hv.spec.toJSON(this.field(vv[Pv]), this))
          }
        return zv
      }
      static fromJSON(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          Pv = arguments.length > 2 ? arguments[2] : void 0;
        if (!vv || "string" != typeof vv.doc) throw new RangeError("Invalid JSON representation for EditorState");
        let hv = [];
        if (Pv)
          for (let Sv in Pv)
            if (Object.prototype.hasOwnProperty.call(vv, Sv)) {
              let zv = Pv[Sv],
                ev = vv[Sv];
              hv.push(zv.init((vv => zv.spec.fromJSON(ev, vv))))
            } return tz.create({
          doc: vv.doc,
          selection: Hv.fromJSON(vv.selection),
          extensions: zv.extensions ? hv.concat([zv.extensions]) : hv
        })
      }
      static create() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          zv = dz.resolve(vv.extensions || [], new Map),
          Pv = vv.doc instanceof sv ? vv.doc : sv.of((vv.doc || "").split(zv.staticFacet(tz.lineSeparator) || Vv)),
          hv = vv.selection ? vv.selection instanceof Hv ? vv.selection : Hv.single(vv.selection.anchor, vv.selection.head) : Hv.single(0);
        return Mv(hv, Pv.length), zv.staticFacet(Wz) || (hv = hv.asSingle()), new tz(zv, Pv, hv, zv.dynamicSlots.map((() => null)), ((vv, zv) => zv.create(vv)), null)
      }
      get tabSize() {
        return this.facet(tz.tabSize)
      }
      get lineBreak() {
        return this.facet(tz.lineSeparator) || "\n"
      }
      get readOnly() {
        return this.facet(iz)
      }
      phrase(vv) {
        for (var zv = arguments.length, Pv = new Array(zv > 1 ? zv - 1 : 0), hv = 1; hv < zv; hv++) Pv[hv - 1] = arguments[hv];
        for (let Sv of this.facet(tz.phrases))
          if (Object.prototype.hasOwnProperty.call(Sv, vv)) {
            vv = Sv[vv];
            break
          } return Pv.length && (vv = vv.replace(/\$(\$|\d*)/g, ((vv, zv) => {
          if ("$" == zv) return "$";
          let hv = +(zv || 1);
          return !hv || hv > Pv.length ? vv : Pv[hv - 1]
        }))), vv
      }
      languageDataAt(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          hv = [];
        for (let Sv of this.facet(Tz))
          for (let ev of Sv(this, zv, Pv)) Object.prototype.hasOwnProperty.call(ev, vv) && hv.push(ev[vv]);
        return hv
      }
      charCategorizer(vv) {
        let zv = this.languageDataAt("wordChars", vv);
        return xz(zv.length ? zv[0] : "")
      }
      wordAt(vv) {
        let {
          text: zv,
          from: Pv,
          length: hv
        } = this.doc.lineAt(vv), Sv = this.charCategorizer(vv), ev = vv - Pv, gv = vv - Pv;
        for (; ev > 0;) {
          let vv = nv(zv, ev, !1);
          if (Sv(zv.slice(vv, ev)) != Vz.Word) break;
          ev = vv
        }
        for (; gv < hv;) {
          let vv = nv(zv, gv);
          if (Sv(zv.slice(gv, vv)) != Vz.Word) break;
          gv = vv
        }
        return ev == gv ? null : Hv.range(ev + Pv, gv + Pv)
      }
    }

    function qz(vv, zv) {
      let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        hv = {};
      for (let Sv of vv)
        for (let vv of Object.keys(Sv)) {
          let zv = Sv[vv],
            ev = hv[vv];
          if (void 0 === ev) hv[vv] = zv;
          else if (ev === zv || void 0 === zv);
          else {
            if (!Object.hasOwnProperty.call(Pv, vv)) throw new Error("Config merge conflict for field " + vv);
            hv[vv] = Pv[vv](ev, zv)
          }
        }
      for (let Sv in zv) void 0 === hv[Sv] && (hv[Sv] = zv[Sv]);
      return hv
    }
    tz.allowMultipleSelections = Wz, tz.tabSize = Bv.define({
      combine: vv => vv.length ? vv[0] : 4
    }), tz.lineSeparator = wz, tz.readOnly = iz, tz.phrases = Bv.define({
      compare(vv, zv) {
        let Pv = Object.keys(vv),
          hv = Object.keys(zv);
        return Pv.length == hv.length && Pv.every((Pv => vv[Pv] == zv[Pv]))
      }
    }), tz.languageData = Tz, tz.changeFilter = az, tz.transactionFilter = sz, tz.transactionExtender = Cz, gz.reconfigure = jz.define();
    class Iz {
      eq(vv) {
        return this == vv
      }
      range(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : vv;
        return Zz.create(vv, zv, this)
      }
    }

    function Qz(vv, zv) {
      return vv == zv || vv.constructor == zv.constructor && vv.eq(zv)
    }
    Iz.prototype.startSide = Iz.prototype.endSide = 0, Iz.prototype.point = !1, Iz.prototype.mapMode = Uv.TrackDel;
    class Zz {
      constructor(vv, zv, Pv) {
        this.from = vv, this.to = zv, this.value = Pv
      }
      static create(vv, zv, Pv) {
        return new Zz(vv, zv, Pv)
      }
    }

    function Az(vv, zv) {
      return vv.from - zv.from || vv.value.startSide - zv.value.startSide
    }
    class Lz {
      constructor(vv, zv, Pv, hv) {
        this.from = vv, this.to = zv, this.value = Pv, this.wPv = hv
      }
      get length() {
        return this.to[this.to.length - 1]
      }
      findIndex(vv, zv, Pv) {
        let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Sv = Pv ? this.to : this.from;
        for (let ev = hv, gv = Sv.length;;) {
          if (ev == gv) return ev;
          let hv = ev + gv >> 1,
            pv = Sv[hv] - vv || (Pv ? this.value[hv].endSide : this.value[hv].startSide) - zv;
          if (hv == ev) return pv >= 0 ? ev : gv;
          pv >= 0 ? gv = hv : ev = hv + 1
        }
      }
      between(vv, zv, Pv, hv) {
        for (let Sv = this.findIndex(zv, -1e9, !0), ev = this.findIndex(Pv, 1e9, !1, Sv); Sv < ev; Sv++)
          if (!1 === hv(this.from[Sv] + vv, this.to[Sv] + vv, this.value[Sv])) return !1
      }
      map(vv, zv) {
        let Pv = [],
          hv = [],
          Sv = [],
          ev = -1,
          gv = -1;
        for (let pv = 0; pv < this.value.length; pv++) {
          let dv, Nv, lv = this.value[pv],
            Tv = this.from[pv] + vv,
            Wv = this.to[pv] + vv;
          if (Tv == Wv) {
            let vv = zv.mapPos(Tv, lv.startSide, lv.mapMode);
            if (null == vv) continue;
            if (dv = Nv = vv, lv.startSide != lv.endSide && (Nv = zv.mapPos(Tv, lv.endSide), Nv < dv)) continue
          } else if (dv = zv.mapPos(Tv, lv.startSide), Nv = zv.mapPos(Wv, lv.endSide), dv > Nv || dv == Nv && lv.startSide > 0 && lv.endSide <= 0) continue;
          (Nv - dv || lv.endSide - lv.startSide) < 0 || (ev < 0 && (ev = dv), lv.point && (gv = Math.max(gv, Nv - dv)), Pv.push(lv), hv.push(dv - ev), Sv.push(Nv - ev))
        }
        return {
          mapped: Pv.length ? new Lz(hv, Sv, Pv, gv) : null,
          pos: ev
        }
      }
    }
    class Hz {
      constructor(vv, zv, Pv, hv) {
        this.chunkPos = vv, this.chunk = zv, this.nextLayer = Pv, this.wPv = hv
      }
      static create(vv, zv, Pv, hv) {
        return new Hz(vv, zv, Pv, hv)
      }
      get length() {
        let vv = this.chunk.length - 1;
        return vv < 0 ? 0 : Math.max(this.chunkEnd(vv), this.nextLayer.length)
      }
      get size() {
        if (this.kw) return 0;
        let vv = this.nextLayer.size;
        for (let zv of this.chunk) vv += zv.value.length;
        return vv
      }
      chunkEnd(vv) {
        return this.chunkPos[vv] + this.chunk[vv].length
      }
      update(vv) {
        let {
          add: zv = [],
          sort: Pv = !1,
          filterFrom: hv = 0,
          filterTo: Sv = this.length
        } = vv, ev = vv.filter;
        if (0 == zv.length && !ev) return this;
        if (Pv && (zv = zv.slice().sort(Az)), this.kw) return zv.length ? Hz.of(zv) : this;
        let gv = new Bz(this, null, -1).goto(0),
          pv = 0,
          dv = [],
          Nv = new Mz;
        for (; gv.value || pv < zv.length;)
          if (pv < zv.length && (gv.from - zv[pv].from || gv.startSide - zv[pv].value.startSide) >= 0) {
            let vv = zv[pv++];
            Nv.addInner(vv.from, vv.to, vv.value) || dv.push(vv)
          } else 1 == gv.rangeIndex && gv.chunkIndex < this.chunk.length && (pv == zv.length || this.chunkEnd(gv.chunkIndex) < zv[pv].from) && (!ev || hv > this.chunkEnd(gv.chunkIndex) || Sv < this.chunkPos[gv.chunkIndex]) && Nv.addChunk(this.chunkPos[gv.chunkIndex], this.chunk[gv.chunkIndex]) ? gv.nextChunk() : ((!ev || hv > gv.to || Sv < gv.from || ev(gv.from, gv.to, gv.value)) && (Nv.addInner(gv.from, gv.to, gv.value) || dv.push(Zz.create(gv.from, gv.to, gv.value))), gv.next());
        return Nv.finishInner(this.nextLayer.kw && !dv.length ? Hz.empty : this.nextLayer.update({
          add: dv,
          filter: ev,
          filterFrom: hv,
          filterTo: Sv
        }))
      }
      map(vv) {
        if (vv.empty || this.kw) return this;
        let zv = [],
          Pv = [],
          hv = -1;
        for (let ev = 0; ev < this.chunk.length; ev++) {
          let Sv = this.chunkPos[ev],
            gv = this.chunk[ev],
            pv = vv.touchesRange(Sv, Sv + gv.length);
          if (!1 === pv) hv = Math.max(hv, gv.wPv), zv.push(gv), Pv.push(vv.mapPos(Sv));
          else if (!0 === pv) {
            let {
              mapped: ev,
              pos: pv
            } = gv.map(Sv, vv);
            ev && (hv = Math.max(hv, ev.wPv), zv.push(ev), Pv.push(pv))
          }
        }
        let Sv = this.nextLayer.map(vv);
        return 0 == zv.length ? Sv : new Hz(Pv, zv, Sv || Hz.empty, hv)
      }
      between(vv, zv, Pv) {
        if (!this.kw) {
          for (let hv = 0; hv < this.chunk.length; hv++) {
            let Sv = this.chunkPos[hv],
              ev = this.chunk[hv];
            if (zv >= Sv && vv <= Sv + ev.length && !1 === ev.between(Sv, vv - Sv, zv - Sv, Pv)) return
          }
          this.nextLayer.between(vv, zv, Pv)
        }
      }
      iter() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return Jz.from([this]).goto(vv)
      }
      get kw() {
        return this.nextLayer == this
      }
      static iter(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Jz.from(vv).goto(zv)
      }
      static compare(vv, zv, Pv, hv) {
        let Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1,
          ev = vv.filter((vv => vv.wPv > 0 || !vv.kw && vv.wPv >= Sv)),
          gv = zv.filter((vv => vv.wPv > 0 || !vv.kw && vv.wPv >= Sv)),
          pv = yz(ev, gv, Pv),
          dv = new oz(ev, pv, Sv),
          Nv = new oz(gv, pv, Sv);
        Pv.iterGaps(((vv, zv, Pv) => bz(dv, vv, Nv, zv, Pv, hv))), Pv.empty && 0 == Pv.length && bz(dv, 0, Nv, 0, 0, hv)
      }
      static eq(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          hv = arguments.length > 3 ? arguments[3] : void 0;
        null == hv && (hv = 999999999);
        let Sv = vv.filter((vv => !vv.kw && zv.indexOf(vv) < 0)),
          ev = zv.filter((zv => !zv.kw && vv.indexOf(zv) < 0));
        if (Sv.length != ev.length) return !1;
        if (!Sv.length) return !0;
        let gv = yz(Sv, ev),
          pv = new oz(Sv, gv, 0).goto(Pv),
          dv = new oz(ev, gv, 0).goto(Pv);
        for (;;) {
          if (pv.to != dv.to || !rz(pv.active, dv.active) || pv.point && (!dv.point || !Qz(pv.point, dv.point))) return !1;
          if (pv.to > hv) return !0;
          pv.next(), dv.next()
        }
      }
      static spans(vv, zv, Pv, hv) {
        let Sv = new oz(vv, null, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1).goto(zv),
          ev = zv,
          gv = Sv.openStart;
        for (;;) {
          let vv = Math.min(Sv.to, Pv);
          if (Sv.point) {
            let Pv = Sv.activeForPoint(Sv.to),
              pv = Sv.pointFrom < zv ? Pv.length + 1 : Sv.point.startSide < 0 ? Pv.length : Math.min(Pv.length, gv);
            hv.point(ev, vv, Sv.point, Pv, pv, Sv.pointRank), gv = Math.min(Sv.openEnd(vv), Pv.length)
          } else vv > ev && (hv.span(ev, vv, Sv.active, gv), gv = Sv.openEnd(vv));
          if (Sv.to > Pv) return gv + (Sv.point && Sv.to > Pv ? 1 : 0);
          ev = Sv.to, Sv.next()
        }
      }
      static of (vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Pv = new Mz;
        for (let hv of vv instanceof Zz ? [vv] : zv ? function(vv) {
            if (vv.length > 1)
              for (let zv = vv[0], Pv = 1; Pv < vv.length; Pv++) {
                let hv = vv[Pv];
                if (Az(zv, hv) > 0) return vv.slice().sort(Az);
                zv = hv
              }
            return vv
          }(vv) : vv) Pv.add(hv.from, hv.to, hv.value);
        return Pv.finish()
      }
      static join(vv) {
        if (!vv.length) return Hz.empty;
        let zv = vv[vv.length - 1];
        for (let Pv = vv.length - 2; Pv >= 0; Pv--)
          for (let hv = vv[Pv]; hv != Hz.empty; hv = hv.nextLayer) zv = new Hz(hv.chunkPos, hv.chunk, zv, Math.max(hv.wPv, zv.wPv));
        return zv
      }
    }
    Hz.empty = new Hz([], [], null, -1), Hz.empty.nextLayer = Hz.empty;
    class Mz {
      finishChunk(vv) {
        this.chunks.push(new Lz(this.from, this.to, this.value, this.wPv)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.wPv), this.wPv = -1, vv && (this.from = [], this.to = [], this.value = [])
      }
      constructor() {
        this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.wPv = -1, this.setMaxPoint = -1, this.nextLayer = null
      }
      add(vv, zv, Pv) {
        this.addInner(vv, zv, Pv) || (this.nextLayer || (this.nextLayer = new Mz)).add(vv, zv, Pv)
      }
      addInner(vv, zv, Pv) {
        let hv = vv - this.lastTo || Pv.startSide - this.last.endSide;
        if (hv <= 0 && (vv - this.lastFrom || Pv.startSide - this.last.startSide) < 0) throw new Error("Ranges must be added sorted by `from` position and `startSide`");
        return !(hv < 0) && (250 == this.from.length && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = vv), this.from.push(vv - this.chunkStart), this.to.push(zv - this.chunkStart), this.last = Pv, this.lastFrom = vv, this.lastTo = zv, this.value.push(Pv), Pv.point && (this.wPv = Math.max(this.wPv, zv - vv)), !0)
      }
      addChunk(vv, zv) {
        if ((vv - this.lastTo || zv.value[0].startSide - this.last.endSide) < 0) return !1;
        this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, zv.wPv), this.chunks.push(zv), this.chunkPos.push(vv);
        let Pv = zv.value.length - 1;
        return this.last = zv.value[Pv], this.lastFrom = zv.from[Pv] + vv, this.lastTo = zv.to[Pv] + vv, !0
      }
      finish() {
        return this.finishInner(Hz.empty)
      }
      finishInner(vv) {
        if (this.from.length && this.finishChunk(!1), 0 == this.chunks.length) return vv;
        let zv = Hz.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(vv) : vv, this.setMaxPoint);
        return this.from = null, zv
      }
    }

    function yz(vv, zv, Pv) {
      let hv = new Map;
      for (let ev of vv)
        for (let vv = 0; vv < ev.chunk.length; vv++) ev.chunk[vv].wPv <= 0 && hv.set(ev.chunk[vv], ev.chunkPos[vv]);
      let Sv = new Set;
      for (let ev of zv)
        for (let vv = 0; vv < ev.chunk.length; vv++) {
          let zv = hv.get(ev.chunk[vv]);
          null == zv || (Pv ? Pv.mapPos(zv) : zv) != ev.chunkPos[vv] || (null === Pv || void 0 === Pv ? void 0 : Pv.touchesRange(zv, zv + ev.chunk[vv].length)) || Sv.add(ev.chunk[vv])
        }
      return Sv
    }
    class Bz {
      constructor(vv, zv, Pv) {
        let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.layer = vv, this.skip = zv, this.aPv = Pv, this.rank = hv
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      get endSide() {
        return this.value ? this.value.endSide : 0
      }
      goto(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(vv, zv, !1), this
      }
      gotoInner(vv, zv, Pv) {
        for (; this.chunkIndex < this.layer.chunk.length;) {
          let zv = this.layer.chunk[this.chunkIndex];
          if (!(this.skip && this.skip.has(zv) || this.layer.chunkEnd(this.chunkIndex) < vv || zv.wPv < this.aPv)) break;
          this.chunkIndex++, Pv = !1
        }
        if (this.chunkIndex < this.layer.chunk.length) {
          let hv = this.layer.chunk[this.chunkIndex].findIndex(vv - this.layer.chunkPos[this.chunkIndex], zv, !0);
          (!Pv || this.rangeIndex < hv) && this.setRangeIndex(hv)
        }
        this.next()
      }
      forward(vv, zv) {
        (this.to - vv || this.endSide - zv) < 0 && this.gotoInner(vv, zv, !0)
      }
      next() {
        for (;;) {
          if (this.chunkIndex == this.layer.chunk.length) {
            this.from = this.to = 1e9, this.value = null;
            break
          } {
            let vv = this.layer.chunkPos[this.chunkIndex],
              zv = this.layer.chunk[this.chunkIndex],
              Pv = vv + zv.from[this.rangeIndex];
            if (this.from = Pv, this.to = vv + zv.to[this.rangeIndex], this.value = zv.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.aPv < 0 || this.value.point && this.to - this.from >= this.aPv) break
          }
        }
      }
      setRangeIndex(vv) {
        if (vv == this.layer.chunk[this.chunkIndex].value.length) {
          if (this.chunkIndex++, this.skip)
            for (; this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]);) this.chunkIndex++;
          this.rangeIndex = 0
        } else this.rangeIndex = vv
      }
      nextChunk() {
        this.chunkIndex++, this.rangeIndex = 0, this.next()
      }
      compare(vv) {
        return this.from - vv.from || this.startSide - vv.startSide || this.rank - vv.rank || this.to - vv.to || this.endSide - vv.endSide
      }
    }
    class Jz {
      constructor(vv) {
        this.heap = vv
      }
      static from(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          hv = [];
        for (let Sv = 0; Sv < vv.length; Sv++)
          for (let ev = vv[Sv]; !ev.kw; ev = ev.nextLayer) ev.wPv >= Pv && hv.push(new Bz(ev, zv, Pv, Sv));
        return 1 == hv.length ? hv[0] : new Jz(hv)
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      goto(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        for (let Pv of this.heap) Pv.goto(vv, zv);
        for (let Pv = this.heap.length >> 1; Pv >= 0; Pv--) Ez(this.heap, Pv);
        return this.next(), this
      }
      forward(vv, zv) {
        for (let Pv of this.heap) Pv.forward(vv, zv);
        for (let Pv = this.heap.length >> 1; Pv >= 0; Pv--) Ez(this.heap, Pv);
        (this.to - vv || this.value.endSide - zv) < 0 && this.next()
      }
      next() {
        if (0 == this.heap.length) this.from = this.to = 1e9, this.value = null, this.rank = -1;
        else {
          let vv = this.heap[0];
          this.from = vv.from, this.to = vv.to, this.value = vv.value, this.rank = vv.rank, vv.value && vv.next(), Ez(this.heap, 0)
        }
      }
    }

    function Ez(vv, zv) {
      for (let Pv = vv[zv];;) {
        let hv = 1 + (zv << 1);
        if (hv >= vv.length) break;
        let Sv = vv[hv];
        if (hv + 1 < vv.length && Sv.compare(vv[hv + 1]) >= 0 && (Sv = vv[hv + 1], hv++), Pv.compare(Sv) < 0) break;
        vv[hv] = Pv, vv[zv] = Sv, zv = hv
      }
    }
    class oz {
      constructor(vv, zv, Pv) {
        this.aPv = Pv, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = Jz.from(vv, zv, Pv)
      }
      goto(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.cursor.goto(vv, zv), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = vv, this.endSide = zv, this.openStart = -1, this.next(), this
      }
      forward(vv, zv) {
        for (; this.minActive > -1 && (this.activeTo[this.minActive] - vv || this.active[this.minActive].endSide - zv) < 0;) this.removeActive(this.minActive);
        this.cursor.forward(vv, zv)
      }
      removeActive(vv) {
        kz(this.active, vv), kz(this.activeTo, vv), kz(this.activeRank, vv), this.minActive = uz(this.active, this.activeTo)
      }
      addActive(vv) {
        let zv = 0,
          {
            value: Pv,
            to: hv,
            rank: Sv
          } = this.cursor;
        for (; zv < this.activeRank.length && (Sv - this.activeRank[zv] || hv - this.activeTo[zv]) > 0;) zv++;
        Xz(this.active, zv, Pv), Xz(this.activeTo, zv, hv), Xz(this.activeRank, zv, Sv), vv && Xz(vv, zv, this.cursor.from), this.minActive = uz(this.active, this.activeTo)
      }
      next() {
        let vv = this.to,
          zv = this.point;
        this.point = null;
        let Pv = this.openStart < 0 ? [] : null;
        for (;;) {
          let hv = this.minActive;
          if (hv > -1 && (this.activeTo[hv] - this.cursor.from || this.active[hv].endSide - this.cursor.startSide) < 0) {
            if (this.activeTo[hv] > vv) {
              this.to = this.activeTo[hv], this.endSide = this.active[hv].endSide;
              break
            }
            this.removeActive(hv), Pv && kz(Pv, hv)
          } else {
            if (!this.cursor.value) {
              this.to = this.endSide = 1e9;
              break
            }
            if (this.cursor.from > vv) {
              this.to = this.cursor.from, this.endSide = this.cursor.startSide;
              break
            } {
              let vv = this.cursor.value;
              if (vv.point) {
                if (!(zv && this.cursor.to == this.to && this.cursor.from < this.cursor.to)) {
                  this.point = vv, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = vv.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
                  break
                }
                this.cursor.next()
              } else this.addActive(Pv), this.cursor.next()
            }
          }
        }
        if (Pv) {
          this.openStart = 0;
          for (let zv = Pv.length - 1; zv >= 0 && Pv[zv] < vv; zv--) this.openStart++
        }
      }
      activeForPoint(vv) {
        if (!this.active.length) return this.active;
        let zv = [];
        for (let Pv = this.active.length - 1; Pv >= 0 && !(this.activeRank[Pv] < this.pointRank); Pv--)(this.activeTo[Pv] > vv || this.activeTo[Pv] == vv && this.active[Pv].endSide >= this.point.endSide) && zv.push(this.active[Pv]);
        return zv.reverse()
      }
      openEnd(vv) {
        let zv = 0;
        for (let Pv = this.activeTo.length - 1; Pv >= 0 && this.activeTo[Pv] > vv; Pv--) zv++;
        return zv
      }
    }

    function bz(vv, zv, Pv, hv, Sv, ev) {
      vv.goto(zv), Pv.goto(hv);
      let gv = hv + Sv,
        pv = hv,
        dv = hv - zv,
        Nv = !!ev.boundChange;
      for (let lv = !1;;) {
        let zv = vv.to + dv - Pv.to,
          hv = zv || vv.endSide - Pv.endSide,
          Sv = hv < 0 ? vv.to + dv : Pv.to,
          Tv = Math.min(Sv, gv);
        if (vv.point || Pv.point ? (vv.point && Pv.point && Qz(vv.point, Pv.point) && rz(vv.activeForPoint(vv.to), Pv.activeForPoint(Pv.to)) || ev.comparePoint(pv, Tv, vv.point, Pv.point), lv = !1) : (lv && ev.boundChange(pv), Tv > pv && !rz(vv.active, Pv.active) && ev.compareRange(pv, Tv, vv.active, Pv.active), Nv && Tv < gv && (zv || vv.openEnd(Sv) != Pv.openEnd(Sv)) && (lv = !0)), Sv > gv) break;
        pv = Sv, hv <= 0 && vv.next(), hv >= 0 && Pv.next()
      }
    }

    function rz(vv, zv) {
      if (vv.length != zv.length) return !1;
      for (let Pv = 0; Pv < vv.length; Pv++)
        if (vv[Pv] != zv[Pv] && !Qz(vv[Pv], zv[Pv])) return !1;
      return !0
    }

    function kz(vv, zv) {
      for (let Pv = zv, hv = vv.length - 1; Pv < hv; Pv++) vv[Pv] = vv[Pv + 1];
      vv.pop()
    }

    function Xz(vv, zv, Pv) {
      for (let hv = vv.length - 1; hv >= zv; hv--) vv[hv + 1] = vv[hv];
      vv[zv] = Pv
    }

    function uz(vv, zv) {
      let Pv = -1,
        hv = 1e9;
      for (let Sv = 0; Sv < zv.length; Sv++)(zv[Sv] - hv || vv[Sv].endSide - vv[Pv].endSide) < 0 && (Pv = Sv, hv = zv[Sv]);
      return Pv
    }

    function vP(vv, zv) {
      let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : vv.length,
        hv = 0;
      for (let Sv = 0; Sv < Pv && Sv < vv.length;) 9 == vv.charCodeAt(Sv) ? (hv += zv - hv % zv, Sv++) : (hv++, Sv = nv(vv, Sv));
      return hv
    }

    function zP(vv, zv, Pv, hv) {
      for (let Sv = 0, ev = 0;;) {
        if (ev >= zv) return Sv;
        if (Sv == vv.length) break;
        ev += 9 == vv.charCodeAt(Sv) ? Pv - ev % Pv : 1, Sv = nv(vv, Sv)
      }
      return !0 === hv ? -1 : vv.length
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);