export const id = 285;
export const ids = [285];
export const modules = {
  40427: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Bt,
      g: () => cz,
      ChangeSet: () => jz,
      i: () => Gt,
      l: () => iz,
      p: () => At,
      q: () => nz,
      u: () => Tz,
      x: () => Wt,
      B: () => it,
      y: () => Lt,
      E: () => Mt,
      F: () => Yt,
      H: () => fz,
      I: () => Dz,
      K: () => xt,
      L: () => Cz,
      P: () => Zz,
      Q: () => yt,
      U: () => ts,
      Y: () => Iz,
      _: () => ss,
      bb: () => ez
    });
    let Fz = [],
      Wz = [];

    function Xz(zz) {
      if (zz < 768) return !1;
      for (let tz = 0, sz = Fz.length;;) {
        let Xz = tz + sz >> 1;
        if (zz < Fz[Xz]) sz = Xz;
        else {
          if (!(zz >= Wz[Xz])) return !0;
          tz = Xz + 1
        }
        if (tz == sz) return !1
      }
    }

    function Oz(zz) {
      return zz >= 127462 && zz <= 127487
    }(() => {
      let zz = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((zz => zz ? parseInt(zz, 36) : 1));
      for (let tz = 0, sz = 0; tz < zz.length; tz++)(tz % 2 ? Wz : Fz).push(sz += zz[tz])
    })();
    const oz = 8205;

    function vz(zz, tz) {
      return (!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2] ? Uz : Kz)(zz, tz, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function Uz(zz, tz, sz) {
      if (tz == zz.length) return tz;
      tz && Nz(zz.charCodeAt(tz)) && bz(zz.charCodeAt(tz - 1)) && tz--;
      let Fz = uz(zz, tz);
      for (tz += wz(Fz); tz < zz.length;) {
        let Wz = uz(zz, tz);
        if (Fz == oz || Wz == oz || sz && Xz(Wz)) tz += wz(Wz), Fz = Wz;
        else {
          if (!Oz(Wz)) break;
          {
            let sz = 0,
              Fz = tz - 2;
            for (; Fz >= 0 && Oz(uz(zz, Fz));) sz++, Fz -= 2;
            if (sz % 2 == 0) break;
            tz += 2
          }
        }
      }
      return tz
    }

    function Kz(zz, tz, sz) {
      for (; tz > 0;) {
        let Fz = Uz(zz, tz - 2, sz);
        if (Fz < tz) return Fz;
        tz--
      }
      return 0
    }

    function uz(zz, tz) {
      let sz = zz.charCodeAt(tz);
      if (!bz(sz) || tz + 1 == zz.length) return sz;
      let Fz = zz.charCodeAt(tz + 1);
      return Nz(Fz) ? Fz - 56320 + (sz - 55296 << 10) + 65536 : sz
    }

    function Nz(zz) {
      return zz >= 56320 && zz < 57344
    }

    function bz(zz) {
      return zz >= 55296 && zz < 56320
    }

    function wz(zz) {
      return zz < 65536 ? 1 : 2
    }
    class Dz {
      lineAt(zz) {
        if (zz < 0 || zz > this.length) throw new RangeError(`Invalid position ${zz} in document of length ${this.length}`);
        return this.lineInner(zz, !1, 1, 0)
      }
      line(zz) {
        if (zz < 1 || zz > this.lines) throw new RangeError(`Invalid line number ${zz} in ${this.lines}-line document`);
        return this.lineInner(zz, !0, 1, 0)
      }
      replace(zz, tz, sz) {
        [zz, tz] = Jz(this, zz, tz);
        let Fz = [];
        return this.decompose(0, zz, Fz, 2), sz.length && sz.decompose(0, sz.length, Fz, 3), this.decompose(tz, this.length, Fz, 1), Hz.from(Fz, this.length - (tz - zz) + sz.length)
      }
      append(zz) {
        return this.replace(this.length, this.length, zz)
      }
      slice(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        [zz, tz] = Jz(this, zz, tz);
        let sz = [];
        return this.decompose(zz, tz, sz, 0), Hz.from(sz, tz - zz)
      }
      eq(zz) {
        if (zz == this) return !0;
        if (zz.length != this.length || zz.lines != this.lines) return !1;
        let tz = this.scanIdentical(zz, 1),
          sz = this.length - this.scanIdentical(zz, -1),
          Fz = new rz(this),
          Wz = new rz(zz);
        for (let Xz = tz, Oz = tz;;) {
          if (Fz.next(Xz), Wz.next(Xz), Xz = 0, Fz.lineBreak != Wz.lineBreak || Fz.done != Wz.done || Fz.value != Wz.value) return !1;
          if (Oz += Fz.value.length, Fz.done || Oz >= sz) return !0
        }
      }
      iter() {
        return new rz(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1)
      }
      iterRange(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        return new Yz(this, zz, tz)
      }
      iterLines(zz, tz) {
        let sz;
        if (null == zz) sz = this.iter();
        else {
          null == tz && (tz = this.lines + 1);
          let Fz = this.line(zz).from;
          sz = this.iterRange(Fz, Math.max(Fz, tz == this.lines + 1 ? this.length : tz <= 1 ? 0 : this.line(tz - 1).to))
        }
        return new xz(sz)
      }
      toString() {
        return this.sliceString(0)
      }
      toJSON() {
        let zz = [];
        return this.flatten(zz), zz
      }
      constructor() {}
      static of (zz) {
        if (0 == zz.length) throw new RangeError("A document must have at least one line");
        return 1 != zz.length || zz[0] ? zz.length <= 32 ? new gz(zz) : Hz.from(gz.split(zz, [])) : Dz.empty
      }
    }
    class gz extends Dz {
      constructor(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(zz) {
          let tz = -1;
          for (let sz of zz) tz += sz.length + 1;
          return tz
        }(zz);
        super(), this.text = zz, this.length = tz
      }
      get lines() {
        return this.text.length
      }
      get children() {
        return null
      }
      lineInner(zz, tz, sz, Fz) {
        for (let Wz = 0;; Wz++) {
          let Xz = this.text[Wz],
            Oz = Fz + Xz.length;
          if ((tz ? sz : Oz) >= zz) return new mz(Fz, Oz, sz, Xz);
          Fz = Oz + 1, sz++
        }
      }
      decompose(zz, tz, sz, Fz) {
        let Wz = zz <= 0 && tz >= this.length ? this : new gz(Pz(this.text, zz, tz), Math.min(tz, this.length) - Math.max(0, zz));
        if (1 & Fz) {
          let zz = sz.pop(),
            tz = Bz(Wz.text, zz.text.slice(), 0, Wz.length);
          if (tz.length <= 32) sz.push(new gz(tz, zz.length + Wz.length));
          else {
            let zz = tz.length >> 1;
            sz.push(new gz(tz.slice(0, zz)), new gz(tz.slice(zz)))
          }
        } else sz.push(Wz)
      }
      replace(zz, tz, sz) {
        if (!(sz instanceof gz)) return super.replace(zz, tz, sz);
        [zz, tz] = Jz(this, zz, tz);
        let Fz = Bz(this.text, Bz(sz.text, Pz(this.text, 0, zz)), tz),
          Wz = this.length + sz.length - (tz - zz);
        return Fz.length <= 32 ? new gz(Fz, Wz) : Hz.from(gz.split(Fz, []), Wz)
      }
      sliceString(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [zz, tz] = Jz(this, zz, tz);
        let Fz = "";
        for (let Wz = 0, Xz = 0; Wz <= tz && Xz < this.text.length; Xz++) {
          let Oz = this.text[Xz],
            oz = Wz + Oz.length;
          Wz > zz && Xz && (Fz += sz), zz < oz && tz > Wz && (Fz += Oz.slice(Math.max(0, zz - Wz), tz - Wz)), Wz = oz + 1
        }
        return Fz
      }
      flatten(zz) {
        for (let tz of this.text) zz.push(tz)
      }
      scanIdentical() {
        return 0
      }
      static split(zz, tz) {
        let sz = [],
          Fz = -1;
        for (let Wz of zz) sz.push(Wz), Fz += Wz.length + 1, 32 == sz.length && (tz.push(new gz(sz, Fz)), sz = [], Fz = -1);
        return Fz > -1 && tz.push(new gz(sz, Fz)), tz
      }
    }
    class Hz extends Dz {
      constructor(zz, tz) {
        super(), this.children = zz, this.length = tz, this.lines = 0;
        for (let sz of zz) this.lines += sz.lines
      }
      lineInner(zz, tz, sz, Fz) {
        for (let Wz = 0;; Wz++) {
          let Xz = this.children[Wz],
            Oz = Fz + Xz.length,
            oz = sz + Xz.lines - 1;
          if ((tz ? oz : Oz) >= zz) return Xz.lineInner(zz, tz, sz, Fz);
          Fz = Oz + 1, sz = oz + 1
        }
      }
      decompose(zz, tz, sz, Fz) {
        for (let Wz = 0, Xz = 0; Xz <= tz && Wz < this.children.length; Wz++) {
          let Oz = this.children[Wz],
            oz = Xz + Oz.length;
          if (zz <= oz && tz >= Xz) {
            let Wz = Fz & ((Xz <= zz ? 1 : 0) | (oz >= tz ? 2 : 0));
            Xz >= zz && oz <= tz && !Wz ? sz.push(Oz) : Oz.decompose(zz - Xz, tz - Xz, sz, Wz)
          }
          Xz = oz + 1
        }
      }
      replace(zz, tz, sz) {
        if ([zz, tz] = Jz(this, zz, tz), sz.lines < this.lines)
          for (let Fz = 0, Wz = 0; Fz < this.children.length; Fz++) {
            let Xz = this.children[Fz],
              Oz = Wz + Xz.length;
            if (zz >= Wz && tz <= Oz) {
              let oz = Xz.replace(zz - Wz, tz - Wz, sz),
                vz = this.lines - Xz.lines + oz.lines;
              if (oz.lines < vz >> 4 && oz.lines > vz >> 6) {
                let Wz = this.children.slice();
                return Wz[Fz] = oz, new Hz(Wz, this.length - (tz - zz) + sz.length)
              }
              return super.replace(Wz, Oz, oz)
            }
            Wz = Oz + 1
          }
        return super.replace(zz, tz, sz)
      }
      sliceString(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [zz, tz] = Jz(this, zz, tz);
        let Fz = "";
        for (let Wz = 0, Xz = 0; Wz < this.children.length && Xz <= tz; Wz++) {
          let Oz = this.children[Wz],
            oz = Xz + Oz.length;
          Xz > zz && Wz && (Fz += sz), zz < oz && tz > Xz && (Fz += Oz.sliceString(zz - Xz, tz - Xz, sz)), Xz = oz + 1
        }
        return Fz
      }
      flatten(zz) {
        for (let tz of this.children) tz.flatten(zz)
      }
      scanIdentical(zz, tz) {
        if (!(zz instanceof Hz)) return 0;
        let sz = 0,
          [Fz, Wz, Xz, Oz] = tz > 0 ? [0, 0, this.children.length, zz.children.length] : [this.children.length - 1, zz.children.length - 1, -1, -1];
        for (;; Fz += tz, Wz += tz) {
          if (Fz == Xz || Wz == Oz) return sz;
          let oz = this.children[Fz],
            vz = zz.children[Wz];
          if (oz != vz) return sz + oz.scanIdentical(vz, tz);
          sz += oz.length + 1
        }
      }
      static from(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zz.reduce(((zz, tz) => zz + tz.length + 1), -1),
          sz = 0;
        for (let Nz of zz) sz += Nz.lines;
        if (sz < 32) {
          let sz = [];
          for (let tz of zz) tz.flatten(sz);
          return new gz(sz, tz)
        }
        let Fz = Math.max(32, sz >> 5),
          Wz = Fz << 1,
          Xz = Fz >> 1,
          Oz = [],
          oz = 0,
          vz = -1,
          Uz = [];

        function Kz(zz) {
          let tz;
          if (zz.lines > Wz && zz instanceof Hz)
            for (let sz of zz.children) Kz(sz);
          else zz.lines > Xz && (oz > Xz || !oz) ? (uz(), Oz.push(zz)) : zz instanceof gz && oz && (tz = Uz[Uz.length - 1]) instanceof gz && zz.lines + tz.lines <= 32 ? (oz += zz.lines, vz += zz.length + 1, Uz[Uz.length - 1] = new gz(tz.text.concat(zz.text), tz.length + 1 + zz.length)) : (oz + zz.lines > Fz && uz(), oz += zz.lines, vz += zz.length + 1, Uz.push(zz))
        }

        function uz() {
          0 != oz && (Oz.push(1 == Uz.length ? Uz[0] : Hz.from(Uz, vz)), vz = -1, oz = Uz.length = 0)
        }
        for (let Nz of zz) Kz(Nz);
        return uz(), 1 == Oz.length ? Oz[0] : new Hz(Oz, tz)
      }
    }

    function Bz(zz, tz) {
      let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e9;
      for (let Wz = 0, Xz = 0, Oz = !0; Xz < zz.length && Wz <= Fz; Xz++) {
        let oz = zz[Xz],
          vz = Wz + oz.length;
        vz >= sz && (vz > Fz && (oz = oz.slice(0, Fz - Wz)), Wz < sz && (oz = oz.slice(sz - Wz)), Oz ? (tz[tz.length - 1] += oz, Oz = !1) : tz.push(oz)), Wz = vz + 1
      }
      return tz
    }

    function Pz(zz, tz, sz) {
      return Bz(zz, [""], tz, sz)
    }
    Dz.empty = new gz([""], 0);
    class rz {
      constructor(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.dir = tz, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [zz], this.offsets = [tz > 0 ? 1 : (zz instanceof gz ? zz.text.length : zz.children.length) << 1]
      }
      nextInner(zz, tz) {
        for (this.done = this.lineBreak = !1;;) {
          let sz = this.nodes.length - 1,
            Fz = this.nodes[sz],
            Wz = this.offsets[sz],
            Xz = Wz >> 1,
            Oz = Fz instanceof gz ? Fz.text.length : Fz.children.length;
          if (Xz == (tz > 0 ? Oz : 0)) {
            if (0 == sz) return this.done = !0, this.value = "", this;
            tz > 0 && this.offsets[sz - 1]++, this.nodes.pop(), this.offsets.pop()
          } else if ((1 & Wz) == (tz > 0 ? 0 : 1)) {
            if (this.offsets[sz] += tz, 0 == zz) return this.lineBreak = !0, this.value = "\n", this;
            zz--
          } else if (Fz instanceof gz) {
            let Wz = Fz.text[Xz + (tz < 0 ? -1 : 0)];
            if (this.offsets[sz] += tz, Wz.length > Math.max(0, zz)) return this.value = 0 == zz ? Wz : tz > 0 ? Wz.slice(zz) : Wz.slice(0, Wz.length - zz), this;
            zz -= Wz.length
          } else {
            let Wz = Fz.children[Xz + (tz < 0 ? -1 : 0)];
            zz > Wz.length ? (zz -= Wz.length, this.offsets[sz] += tz) : (tz < 0 && this.offsets[sz]--, this.nodes.push(Wz), this.offsets.push(tz > 0 ? 1 : (Wz instanceof gz ? Wz.text.length : Wz.children.length) << 1))
          }
        }
      }
      next() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return zz < 0 && (this.nextInner(-zz, -this.dir), zz = this.value.length), this.nextInner(zz, this.dir)
      }
    }
    class Yz {
      constructor(zz, tz, sz) {
        this.value = "", this.done = !1, this.cursor = new rz(zz, tz > sz ? -1 : 1), this.pos = tz > sz ? zz.length : 0, this.from = Math.min(tz, sz), this.to = Math.max(tz, sz)
      }
      nextInner(zz, tz) {
        if (tz < 0 ? this.pos <= this.from : this.pos >= this.to) return this.value = "", this.done = !0, this;
        zz += Math.max(0, tz < 0 ? this.pos - this.to : this.from - this.pos);
        let sz = tz < 0 ? this.pos - this.from : this.to - this.pos;
        zz > sz && (zz = sz), sz -= zz;
        let {
          value: Fz
        } = this.cursor.next(zz);
        return this.pos += (Fz.length + zz) * tz, this.value = Fz.length <= sz ? Fz : tz < 0 ? Fz.slice(Fz.length - sz) : Fz.slice(0, sz), this.done = !this.value, this
      }
      next() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return zz < 0 ? zz = Math.max(zz, this.from - this.pos) : zz > 0 && (zz = Math.min(zz, this.to - this.pos)), this.nextInner(zz, this.cursor.dir)
      }
      get lineBreak() {
        return this.cursor.lineBreak && "" != this.value
      }
    }
    class xz {
      constructor(zz) {
        this.inner = zz, this.afterBreak = !0, this.value = "", this.done = !1
      }
      next() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          {
            done: tz,
            lineBreak: sz,
            value: Fz
          } = this.inner.next(zz);
        return tz && this.afterBreak ? (this.value = "", this.afterBreak = !1) : tz ? (this.done = !0, this.value = "") : sz ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = Fz, this.afterBreak = !1), this
      }
      get lineBreak() {
        return !1
      }
    }
    "undefined" != typeof Symbol && (Dz.prototype[Symbol.iterator] = function() {
      return this.iter()
    }, rz.prototype[Symbol.iterator] = Yz.prototype[Symbol.iterator] = xz.prototype[Symbol.iterator] = function() {
      return this
    });
    class mz {
      constructor(zz, tz, sz, Fz) {
        this.from = zz, this.to = tz, this.number = sz, this.text = Fz
      }
      get length() {
        return this.to - this.from
      }
    }

    function Jz(zz, tz, sz) {
      return [tz = Math.max(0, Math.min(zz.length, tz)), Math.max(tz, Math.min(zz.length, sz))]
    }

    function Iz(zz, tz) {
      return vz(zz, tz, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function Cz(zz, tz) {
      let sz = zz.charCodeAt(tz);
      if (!((Fz = sz) >= 55296 && Fz < 56320) || tz + 1 == zz.length) return sz;
      var Fz;
      let Wz = zz.charCodeAt(tz + 1);
      return function(zz) {
        return zz >= 56320 && zz < 57344
      }(Wz) ? Wz - 56320 + (sz - 55296 << 10) + 65536 : sz
    }

    function ez(zz) {
      return zz <= 65535 ? String.fromCharCode(zz) : (zz -= 65536, String.fromCharCode(55296 + (zz >> 10), 56320 + (1023 & zz)))
    }

    function Zz(zz) {
      return zz < 65536 ? 1 : 2
    }
    const Gz = /\r\n?|\n/;
    var Tz = function(zz) {
      return zz[zz.Simple = 0] = "Simple", zz[zz.TrackDel = 1] = "TrackDel", zz[zz.TrackBefore = 2] = "TrackBefore", zz[zz.TrackAfter = 3] = "TrackAfter", zz
    }(Tz || (Tz = {}));
    class cz {
      constructor(zz) {
        this.sections = zz
      }
      get length() {
        let zz = 0;
        for (let tz = 0; tz < this.sections.length; tz += 2) zz += this.sections[tz];
        return zz
      }
      get newLength() {
        let zz = 0;
        for (let tz = 0; tz < this.sections.length; tz += 2) {
          let sz = this.sections[tz + 1];
          zz += sz < 0 ? this.sections[tz] : sz
        }
        return zz
      }
      get empty() {
        return 0 == this.sections.length || 2 == this.sections.length && this.sections[1] < 0
      }
      iterGaps(zz) {
        for (let tz = 0, sz = 0, Fz = 0; tz < this.sections.length;) {
          let Wz = this.sections[tz++],
            Xz = this.sections[tz++];
          Xz < 0 ? (zz(sz, Fz, Wz), Fz += Wz) : Fz += Xz, sz += Wz
        }
      }
      iterChangedRanges(zz) {
        Mz(this, zz, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get invertedDesc() {
        let zz = [];
        for (let tz = 0; tz < this.sections.length;) {
          let sz = this.sections[tz++],
            Fz = this.sections[tz++];
          Fz < 0 ? zz.push(sz, Fz) : zz.push(Fz, sz)
        }
        return new cz(zz)
      }
      composeDesc(zz) {
        return this.empty ? zz : zz.empty ? this : hz(this, zz)
      }
      mapDesc(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return zz.empty ? this : dz(this, zz, tz)
      }
      mapPos(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Tz.Simple,
          Fz = 0,
          Wz = 0;
        for (let Xz = 0; Xz < this.sections.length;) {
          let Oz = this.sections[Xz++],
            oz = this.sections[Xz++],
            vz = Fz + Oz;
          if (oz < 0) {
            if (vz > zz) return Wz + (zz - Fz);
            Wz += Oz
          } else {
            if (sz != Tz.Simple && vz >= zz && (sz == Tz.TrackDel && Fz < zz && vz > zz || sz == Tz.TrackBefore && Fz < zz || sz == Tz.TrackAfter && vz > zz)) return null;
            if (vz > zz || vz == zz && tz < 0 && !Oz) return zz == Fz || tz < 0 ? Wz : Wz + oz;
            Wz += oz
          }
          Fz = vz
        }
        if (zz > Fz) throw new RangeError(`Position ${zz} is out of range for changeset of length ${Fz}`);
        return Wz
      }
      touchesRange(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zz;
        for (let sz = 0, Fz = 0; sz < this.sections.length && Fz <= tz;) {
          let Wz = Fz + this.sections[sz++];
          if (this.sections[sz++] >= 0 && Fz <= tz && Wz >= zz) return !(Fz < zz && Wz > tz) || "cover";
          Fz = Wz
        }
        return !1
      }
      toString() {
        let zz = "";
        for (let tz = 0; tz < this.sections.length;) {
          let sz = this.sections[tz++],
            Fz = this.sections[tz++];
          zz += (zz ? " " : "") + sz + (Fz >= 0 ? ":" + Fz : "")
        }
        return zz
      }
      toJSON() {
        return this.sections
      }
      static fromJSON(zz) {
        if (!Array.isArray(zz) || zz.length % 2 || zz.some((zz => "number" != typeof zz))) throw new RangeError("Invalid JSON representation of ChangeDesc");
        return new cz(zz)
      }
      static create(zz) {
        return new cz(zz)
      }
    }
    class jz extends cz {
      constructor(zz, tz) {
        super(zz), this.inserted = tz
      }
      apply(zz) {
        if (this.length != zz.length) throw new RangeError("Applying change set to a document with the wrong length");
        return Mz(this, ((tz, sz, Fz, Wz, Xz) => zz = zz.replace(Fz, Fz + (sz - tz), Xz)), !1), zz
      }
      mapDesc(zz) {
        return dz(this, zz, arguments.length > 1 && void 0 !== arguments[1] && arguments[1], !0)
      }
      invert(zz) {
        let tz = this.sections.slice(),
          sz = [];
        for (let Fz = 0, Wz = 0; Fz < tz.length; Fz += 2) {
          let Xz = tz[Fz],
            Oz = tz[Fz + 1];
          if (Oz >= 0) {
            tz[Fz] = Oz, tz[Fz + 1] = Xz;
            let oz = Fz >> 1;
            for (; sz.length < oz;) sz.push(Dz.empty);
            sz.push(Xz ? zz.slice(Wz, Wz + Xz) : Dz.empty)
          }
          Wz += Xz
        }
        return new jz(tz, sz)
      }
      compose(zz) {
        return this.empty ? zz : zz.empty ? this : hz(this, zz, !0)
      }
      map(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return zz.empty ? this : dz(this, zz, tz, !0)
      }
      iterChanges(zz) {
        Mz(this, zz, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get desc() {
        return cz.create(this.sections)
      }
      filter(zz) {
        let tz = [],
          sz = [],
          Fz = [],
          Wz = new Qz(this);
        zz: for (let Xz = 0, Oz = 0;;) {
          let oz = Xz == zz.length ? 1e9 : zz[Xz++];
          for (; Oz < oz || Oz == oz && 0 == Wz.len;) {
            if (Wz.done) break zz;
            let zz = Math.min(Wz.len, oz - Oz);
            Az(Fz, zz, -1);
            let Xz = -1 == Wz.ins ? -1 : 0 == Wz.off ? Wz.ins : 0;
            Az(tz, zz, Xz), Xz > 0 && yz(sz, tz, Wz.text), Wz.forward(zz), Oz += zz
          }
          let vz = zz[Xz++];
          for (; Oz < vz;) {
            if (Wz.done) break zz;
            let zz = Math.min(Wz.len, vz - Oz);
            Az(tz, zz, -1), Az(Fz, zz, -1 == Wz.ins ? -1 : 0 == Wz.off ? Wz.ins : 0), Wz.forward(zz), Oz += zz
          }
        }
        return {
          changes: new jz(tz, sz),
          filtered: cz.create(Fz)
        }
      }
      toJSON() {
        let zz = [];
        for (let tz = 0; tz < this.sections.length; tz += 2) {
          let sz = this.sections[tz],
            Fz = this.sections[tz + 1];
          Fz < 0 ? zz.push(sz) : 0 == Fz ? zz.push([sz]) : zz.push([sz].concat(this.inserted[tz >> 1].toJSON()))
        }
        return zz
      }
      static of (zz, tz, sz) {
        let Fz = [],
          Wz = [],
          Xz = 0,
          Oz = null;

        function oz() {
          if (!(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && !Fz.length) return;
          Xz < tz && Az(Fz, tz - Xz, -1);
          let zz = new jz(Fz, Wz);
          Oz = Oz ? Oz.compose(zz.map(Oz)) : zz, Fz = [], Wz = [], Xz = 0
        }
        return function zz(vz) {
          if (Array.isArray(vz))
            for (let tz of vz) zz(tz);
          else if (vz instanceof jz) {
            if (vz.length != tz) throw new RangeError(`Mismatched change set length (got ${vz.length}, expected ${tz})`);
            oz(), Oz = Oz ? Oz.compose(vz.map(Oz)) : vz
          } else {
            let {
              from: zz,
              to: Oz = zz,
              insert: Uz
            } = vz;
            if (zz > Oz || zz < 0 || Oz > tz) throw new RangeError(`Invalid change range ${zz} to ${Oz} (in doc of length ${tz})`);
            let Kz = Uz ? "string" == typeof Uz ? Dz.of(Uz.split(sz || Gz)) : Uz : Dz.empty,
              uz = Kz.length;
            if (zz == Oz && 0 == uz) return;
            zz < Xz && oz(), zz > Xz && Az(Fz, zz - Xz, -1), Az(Fz, Oz - zz, uz), yz(Wz, Fz, Kz), Xz = Oz
          }
        }(zz), oz(!Oz), Oz
      }
      static empty(zz) {
        return new jz(zz ? [zz, -1] : [], [])
      }
      static fromJSON(zz) {
        if (!Array.isArray(zz)) throw new RangeError("Invalid JSON representation of ChangeSet");
        let tz = [],
          sz = [];
        for (let Fz = 0; Fz < zz.length; Fz++) {
          let Wz = zz[Fz];
          if ("number" == typeof Wz) tz.push(Wz, -1);
          else {
            if (!Array.isArray(Wz) || "number" != typeof Wz[0] || Wz.some(((zz, tz) => tz && "string" != typeof zz))) throw new RangeError("Invalid JSON representation of ChangeSet");
            if (1 == Wz.length) tz.push(Wz[0], 0);
            else {
              for (; sz.length < Fz;) sz.push(Dz.empty);
              sz[Fz] = Dz.of(Wz.slice(1)), tz.push(Wz[0], sz[Fz].length)
            }
          }
        }
        return new jz(tz, sz)
      }
      static createSet(zz, tz) {
        return new jz(zz, tz)
      }
    }

    function Az(zz, tz, sz) {
      let Fz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (0 == tz && sz <= 0) return;
      let Wz = zz.length - 2;
      Wz >= 0 && sz <= 0 && sz == zz[Wz + 1] ? zz[Wz] += tz : Wz >= 0 && 0 == tz && 0 == zz[Wz] ? zz[Wz + 1] += sz : Fz ? (zz[Wz] += tz, zz[Wz + 1] += sz) : zz.push(tz, sz)
    }

    function yz(zz, tz, sz) {
      if (0 == sz.length) return;
      let Fz = tz.length - 2 >> 1;
      if (Fz < zz.length) zz[zz.length - 1] = zz[zz.length - 1].append(sz);
      else {
        for (; zz.length < Fz;) zz.push(Dz.empty);
        zz.push(sz)
      }
    }

    function Mz(zz, tz, sz) {
      let Fz = zz.inserted;
      for (let Wz = 0, Xz = 0, Oz = 0; Oz < zz.sections.length;) {
        let oz = zz.sections[Oz++],
          vz = zz.sections[Oz++];
        if (vz < 0) Wz += oz, Xz += oz;
        else {
          let Uz = Wz,
            Kz = Xz,
            uz = Dz.empty;
          for (; Uz += oz, Kz += vz, vz && Fz && (uz = uz.append(Fz[Oz - 2 >> 1])), !(sz || Oz == zz.sections.length || zz.sections[Oz + 1] < 0);) oz = zz.sections[Oz++], vz = zz.sections[Oz++];
          tz(Wz, Uz, Xz, Kz, uz), Wz = Uz, Xz = Kz
        }
      }
    }

    function dz(zz, tz, sz) {
      let Fz = [],
        Wz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3] ? [] : null,
        Xz = new Qz(zz),
        Oz = new Qz(tz),
        oz = 0;
      for (let vz = -1;;) {
        if (++oz > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - likely malformed ChangeSet");
        if (Xz.done && Oz.len || Oz.done && Xz.len) throw new Error("Mismatched change set lengths");
        if (-1 == Xz.ins && -1 == Oz.ins) {
          let zz = Math.min(Xz.len, Oz.len);
          Az(Fz, zz, -1), Xz.forward(zz), Oz.forward(zz)
        } else if (Oz.ins >= 0 && (Xz.ins < 0 || vz == Xz.i || 0 == Xz.off && (Oz.len < Xz.len || Oz.len == Xz.len && !sz))) {
          let zz = Oz.len;
          for (Az(Fz, Oz.ins, -1); zz;) {
            if (++oz > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-b");
            let tz = Math.min(Xz.len, zz);
            Xz.ins >= 0 && vz < Xz.i && Xz.len <= tz && (Az(Fz, 0, Xz.ins), Wz && yz(Wz, Fz, Xz.text), vz = Xz.i), Xz.forward(tz), zz -= tz
          }
          Oz.next()
        } else {
          if (!(Xz.ins >= 0)) {
            if (Xz.done && Oz.done) return Wz ? jz.createSet(Fz, Wz) : cz.create(Fz);
            throw new Error("Mismatched change set lengths")
          } {
            let zz = 0,
              tz = Xz.len;
            for (; tz;) {
              if (++oz > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-a");
              if (-1 == Oz.ins) {
                let sz = Math.min(tz, Oz.len);
                zz += sz, tz -= sz, Oz.forward(sz)
              } else {
                if (!(0 == Oz.ins && Oz.len < tz)) break;
                tz -= Oz.len, Oz.next()
              }
            }
            Az(Fz, zz, vz < Xz.i ? Xz.ins : 0), Wz && vz < Xz.i && yz(Wz, Fz, Xz.text), vz = Xz.i, Xz.forward(Xz.len - tz)
          }
        }
      }
    }

    function hz(zz, tz) {
      let sz = [],
        Fz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? [] : null,
        Wz = new Qz(zz),
        Xz = new Qz(tz),
        Oz = 0;
      for (let oz = !1;;) {
        if (++Oz > 2e6) throw new Error("BLOXD CODEMIRROR: composeSets exceeded max iterations - likely malformed ChangeSet");
        if (Wz.done && Xz.done) return Fz ? jz.createSet(sz, Fz) : cz.create(sz);
        if (0 == Wz.ins) Az(sz, Wz.len, 0, oz), Wz.next();
        else if (0 != Xz.len || Xz.done) {
          if (Wz.done || Xz.done) throw new Error("Mismatched change set lengths");
          {
            let zz = Math.min(Wz.len2, Xz.len),
              tz = sz.length;
            if (-1 == Wz.ins) {
              let tz = -1 == Xz.ins ? -1 : Xz.off ? 0 : Xz.ins;
              Az(sz, zz, tz, oz), Fz && tz && yz(Fz, sz, Xz.text)
            } else - 1 == Xz.ins ? (Az(sz, Wz.off ? 0 : Wz.len, zz, oz), Fz && yz(Fz, sz, Wz.textBit(zz))) : (Az(sz, Wz.off ? 0 : Wz.len, Xz.off ? 0 : Xz.ins, oz), Fz && !Xz.off && yz(Fz, sz, Xz.text));
            oz = (Wz.ins > zz || Xz.ins >= 0 && Xz.len > zz) && (oz || sz.length > tz), Wz.forward2(zz), Xz.forward(zz)
          }
        } else Az(sz, 0, Xz.ins, oz), Fz && yz(Fz, sz, Xz.text), Xz.next()
      }
    }
    class Qz {
      constructor(zz) {
        this.set = zz, this.i = 0, this.next()
      }
      next() {
        let {
          sections: zz
        } = this.set;
        this.i < zz.length ? (this.len = zz[this.i++], this.ins = zz[this.i++]) : (this.len = 0, this.ins = -2), this.off = 0
      }
      get done() {
        return -2 == this.ins
      }
      get len2() {
        return this.ins < 0 ? this.len : this.ins
      }
      get text() {
        let {
          inserted: zz
        } = this.set, tz = this.i - 2 >> 1;
        return tz >= zz.length ? Dz.empty : zz[tz]
      }
      textBit(zz) {
        let {
          inserted: tz
        } = this.set, sz = this.i - 2 >> 1;
        return sz >= tz.length && !zz ? Dz.empty : tz[sz].slice(this.off, null == zz ? void 0 : this.off + zz)
      }
      forward(zz) {
        zz == this.len ? this.next() : (this.len -= zz, this.off += zz)
      }
      forward2(zz) {
        -1 == this.ins ? this.forward(zz) : zz == this.ins ? this.next() : (this.ins -= zz, this.off += zz)
      }
    }
    class kz {
      constructor(zz, tz, sz) {
        this.from = zz, this.to = tz, this.flags = sz
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
        let zz = 7 & this.flags;
        return 7 == zz ? null : zz
      }
      get goalColumn() {
        let zz = this.flags >> 6;
        return 16777215 == zz ? void 0 : zz
      }
      map(zz) {
        let tz, sz, Fz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return this.empty ? tz = sz = zz.mapPos(this.from, Fz) : (tz = zz.mapPos(this.from, 1), sz = zz.mapPos(this.to, -1)), tz == this.from && sz == this.to ? this : new kz(tz, sz, this.flags)
      }
      extend(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zz,
          sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (zz <= this.anchor && tz >= this.anchor) return iz.range(zz, tz, void 0, void 0, sz);
        let Fz = Math.abs(zz - this.anchor) > Math.abs(tz - this.anchor) ? zz : tz;
        return iz.range(this.anchor, Fz, void 0, void 0, sz)
      }
      eq(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.anchor == zz.anchor && this.head == zz.head && this.goalColumn == zz.goalColumn && (!tz || !this.empty || this.assoc == zz.assoc)
      }
      toJSON() {
        return {
          anchor: this.anchor,
          head: this.head
        }
      }
      static fromJSON(zz) {
        if (!zz || "number" != typeof zz.anchor || "number" != typeof zz.head) throw new RangeError("Invalid JSON representation for SelectionRange");
        return iz.range(zz.anchor, zz.head)
      }
      static create(zz, tz, sz) {
        return new kz(zz, tz, sz)
      }
    }
    class iz {
      constructor(zz, tz) {
        this.du = zz, this.mainIndex = tz
      }
      map(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return zz.empty ? this : iz.create(this.du.map((sz => sz.map(zz, tz))), this.mainIndex)
      }
      eq(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.du.length != zz.du.length || this.mainIndex != zz.mainIndex) return !1;
        for (let sz = 0; sz < this.du.length; sz++)
          if (!this.du[sz].eq(zz.du[sz], tz)) return !1;
        return !0
      }
      get main() {
        return this.du[this.mainIndex]
      }
      asSingle() {
        return 1 == this.du.length ? this : new iz([this.main], 0)
      }
      addRange(zz) {
        let tz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return iz.create([zz].concat(this.du), tz ? 0 : this.mainIndex + 1)
      }
      replaceRange(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.mainIndex,
          sz = this.du.slice();
        return sz[tz] = zz, iz.create(sz, this.mainIndex)
      }
      toJSON() {
        return {
          du: this.du.map((zz => zz.toJSON())),
          main: this.mainIndex
        }
      }
      static fromJSON(zz) {
        if (!zz || !Array.isArray(zz.du) || "number" != typeof zz.main || zz.main >= zz.du.length) throw new RangeError("Invalid JSON representation for EditorSelection");
        return new iz(zz.du.map((zz => kz.fromJSON(zz))), zz.main)
      }
      static single(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zz;
        return new iz([iz.range(zz, tz)], 0)
      }
      static create(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (0 == zz.length) throw new RangeError("A selection needs at least one range");
        for (let sz = 0, Fz = 0; Fz < zz.length; Fz++) {
          let Wz = zz[Fz];
          if (Wz.empty ? Wz.from <= sz : Wz.from < sz) return iz.normalized(zz.slice(), tz);
          sz = Wz.to
        }
        return new iz(zz, tz)
      }
      static cursor(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          sz = arguments.length > 2 ? arguments[2] : void 0,
          Fz = arguments.length > 3 ? arguments[3] : void 0;
        return kz.create(zz, zz, (0 == tz ? 0 : tz < 0 ? 8 : 16) | (null == sz ? 7 : Math.min(6, sz)) | (null !== Fz && void 0 !== Fz ? Fz : 16777215) << 6)
      }
      static range(zz, tz, sz, Fz, Wz) {
        let Xz = (null !== sz && void 0 !== sz ? sz : 16777215) << 6 | (null == Fz ? 7 : Math.min(6, Fz));
        return Wz || zz == tz || (Wz = tz < zz ? 1 : -1), tz < zz ? kz.create(tz, zz, 48 | Xz) : kz.create(zz, tz, (Wz ? Wz < 0 ? 8 : 16 : 0) | Xz)
      }
      static normalized(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          sz = zz[tz];
        zz.sort(((zz, tz) => zz.from - tz.from)), tz = zz.indexOf(sz);
        for (let Fz = 1; Fz < zz.length; Fz++) {
          let sz = zz[Fz],
            Wz = zz[Fz - 1];
          if (sz.empty ? sz.from <= Wz.to : sz.from < Wz.to) {
            let Xz = Wz.from,
              Oz = Math.max(sz.to, Wz.to);
            Fz <= tz && tz--, zz.splice(--Fz, 2, sz.anchor > sz.head ? iz.range(Oz, Xz) : iz.range(Xz, Oz))
          }
        }
        return new iz(zz, tz)
      }
    }

    function Lz(zz, tz) {
      for (let sz of zz.du)
        if (sz.to > tz) throw new RangeError("Selection points outside of document")
    }
    let lz = 0;
    class nz {
      constructor(zz, tz, sz, Fz, Wz) {
        this.combine = zz, this.compareInput = tz, this.compare = sz, this.isStatic = Fz, this.id = lz++, this.default = zz([]), this.extensions = "function" == typeof Wz ? Wz(this) : Wz
      }
      get reader() {
        return this
      }
      static define() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return new nz(zz.combine || (zz => zz), zz.compareInput || ((zz, tz) => zz === tz), zz.compare || (zz.combine ? (zz, tz) => zz === tz : az), !!zz.static, zz.enables)
      }
      of(zz) {
        return new qz([], this, 0, zz)
      }
      compute(zz, tz) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new qz(zz, this, 1, tz)
      }
      computeN(zz, tz) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new qz(zz, this, 2, tz)
      }
      from(zz, tz) {
        return tz || (tz = zz => zz), this.compute([zz], (sz => tz(sz.field(zz))))
      }
    }

    function az(zz, tz) {
      return zz == tz || zz.length == tz.length && zz.every(((zz, sz) => zz === tz[sz]))
    }
    class qz {
      constructor(zz, tz, sz, Fz) {
        this.dependencies = zz, this.facet = tz, this.type = sz, this.value = Fz, this.id = lz++
      }
      dynamicSlot(zz) {
        var tz;
        let sz = this.value,
          Fz = this.facet.compareInput,
          Wz = this.id,
          Xz = zz[Wz] >> 1,
          Oz = 2 == this.type,
          oz = !1,
          vz = !1,
          Uz = [];
        for (let Kz of this.dependencies) "doc" == Kz ? oz = !0 : "selection" == Kz ? vz = !0 : 0 == (1 & (null !== (tz = zz[Kz.id]) && void 0 !== tz ? tz : 1)) && Uz.push(zz[Kz.id]);
        return {
          create: zz => (zz.values[Xz] = sz(zz), 1),
          update(zz, tz) {
            if (oz && tz.docChanged || vz && (tz.docChanged || tz.selection) || Vz(zz, Uz)) {
              let tz = sz(zz);
              if (Oz ? !Sz(tz, zz.values[Xz], Fz) : !Fz(tz, zz.values[Xz])) return zz.values[Xz] = tz, 1
            }
            return 0
          },
          reconfigure: (zz, tz) => {
            let oz, vz = tz.config.address[Wz];
            if (null != vz) {
              let Wz = Kt(tz, vz);
              if (this.dependencies.every((sz => sz instanceof nz ? tz.facet(sz) === zz.facet(sz) : !(sz instanceof fz) || tz.field(sz, !1) == zz.field(sz, !1))) || (Oz ? Sz(oz = sz(zz), Wz, Fz) : Fz(oz = sz(zz), Wz))) return zz.values[Xz] = Wz, 0
            } else oz = sz(zz);
            return zz.values[Xz] = oz, 1
          }
        }
      }
    }

    function Sz(zz, tz, sz) {
      if (zz.length != tz.length) return !1;
      for (let Fz = 0; Fz < zz.length; Fz++)
        if (!sz(zz[Fz], tz[Fz])) return !1;
      return !0
    }

    function Vz(zz, tz) {
      let sz = !1;
      for (let Fz of tz) 1 & Ut(zz, Fz) && (sz = !0);
      return sz
    }

    function Rz(zz, tz, sz) {
      let Fz = sz.map((tz => zz[tz.id])),
        Wz = sz.map((zz => zz.type)),
        Xz = Fz.filter((zz => !(1 & zz))),
        Oz = zz[tz.id] >> 1;

      function oz(zz) {
        let sz = [];
        for (let tz = 0; tz < Fz.length; tz++) {
          let Xz = Kt(zz, Fz[tz]);
          if (2 == Wz[tz])
            for (let zz of Xz) sz.push(zz);
          else sz.push(Xz)
        }
        return tz.combine(sz)
      }
      return {
        create(zz) {
          for (let tz of Fz) Ut(zz, tz);
          return zz.values[Oz] = oz(zz), 1
        },
        update(zz, sz) {
          if (!Vz(zz, Xz)) return 0;
          let Fz = oz(zz);
          return tz.compare(Fz, zz.values[Oz]) ? 0 : (zz.values[Oz] = Fz, 1)
        },
        reconfigure(zz, Wz) {
          let Xz = Vz(zz, Fz),
            vz = Wz.config.facets[tz.id],
            Uz = Wz.facet(tz);
          if (vz && !Xz && az(sz, vz)) return zz.values[Oz] = Uz, 0;
          let Kz = oz(zz);
          return tz.compare(Kz, Uz) ? (zz.values[Oz] = Uz, 0) : (zz.values[Oz] = Kz, 1)
        }
      }
    }
    const pz = nz.define({
      static: !0
    });
    class fz {
      constructor(zz, tz, sz, Fz, Wz) {
        this.id = zz, this.createF = tz, this.updateF = sz, this.compareF = Fz, this.spec = Wz, this.provides = void 0
      }
      static define(zz) {
        let tz = new fz(lz++, zz.create, zz.update, zz.compare || ((zz, tz) => zz === tz), zz);
        return zz.provide && (tz.provides = zz.provide(tz)), tz
      }
      create(zz) {
        let tz = zz.facet(pz).find((zz => zz.field == this));
        return ((null === tz || void 0 === tz ? void 0 : tz.create) || this.createF)(zz)
      }
      slot(zz) {
        let tz = zz[this.id] >> 1;
        return {
          create: zz => (zz.values[tz] = this.create(zz), 1),
          update: (zz, sz) => {
            let Fz = zz.values[tz],
              Wz = this.updateF(Fz, sz);
            return this.compareF(Fz, Wz) ? 0 : (zz.values[tz] = Wz, 1)
          },
          reconfigure: (zz, sz) => {
            let Fz, Wz = zz.facet(pz),
              Xz = sz.facet(pz);
            return (Fz = Wz.find((zz => zz.field == this))) && Fz != Xz.find((zz => zz.field == this)) ? (zz.values[tz] = Fz.create(zz), 1) : null != sz.config.address[this.id] ? (zz.values[tz] = sz.field(this), 0) : (zz.values[tz] = this.create(zz), 1)
          }
        }
      }
      init(zz) {
        return [this, pz.of({
          field: this,
          create: zz
        })]
      }
      get extension() {
        return this
      }
    }
    const Ez = 4,
      zt = 3,
      tt = 2,
      st = 1;

    function Ft(zz) {
      return tz => new Xt(tz, zz)
    }
    const Wt = {
      highest: Ft(0),
      high: Ft(st),
      default: Ft(tt),
      low: Ft(zt),
      lowest: Ft(Ez)
    };
    class Xt {
      constructor(zz, tz) {
        this.inner = zz, this.prec = tz
      }
    }
    class Ot {
      of(zz) {
        return new ot(this, zz)
      }
      reconfigure(zz) {
        return Ot.reconfigure.of({
          compartment: this,
          extension: zz
        })
      }
      get(zz) {
        return zz.config.compartments.get(this)
      }
    }
    class ot {
      constructor(zz, tz) {
        this.compartment = zz, this.inner = tz
      }
    }
    class vt {
      constructor(zz, tz, sz, Fz, Wz, Xz) {
        for (this.base = zz, this.compartments = tz, this.dynamicSlots = sz, this.address = Fz, this.staticValues = Wz, this.facets = Xz, this.statusTemplate = []; this.statusTemplate.length < sz.length;) this.statusTemplate.push(0)
      }
      staticFacet(zz) {
        let tz = this.address[zz.id];
        return null == tz ? zz.default : this.staticValues[tz >> 1]
      }
      static resolve(zz, tz, sz) {
        let Fz = [],
          Wz = Object.create(null),
          Xz = new Map;
        for (let uz of function(zz, tz, sz) {
            let Fz = [
                [],
                [],
                [],
                [],
                []
              ],
              Wz = new Map;

            function Xz(zz, Oz) {
              let oz = Wz.get(zz);
              if (null != oz) {
                if (oz <= Oz) return;
                let tz = Fz[oz].indexOf(zz);
                tz > -1 && Fz[oz].splice(tz, 1), zz instanceof ot && sz.delete(zz.compartment)
              }
              if (Wz.set(zz, Oz), Array.isArray(zz))
                for (let tz of zz) Xz(tz, Oz);
              else if (zz instanceof ot) {
                if (sz.has(zz.compartment)) throw new RangeError("Duplicate use of compartment in extensions");
                let Fz = tz.get(zz.compartment) || zz.inner;
                sz.set(zz.compartment, Fz), Xz(Fz, Oz)
              } else if (zz instanceof Xt) Xz(zz.inner, zz.prec);
              else if (zz instanceof fz) Fz[Oz].push(zz), zz.provides && Xz(zz.provides, Oz);
              else if (zz instanceof qz) Fz[Oz].push(zz), zz.facet.extensions && Xz(zz.facet.extensions, tt);
              else {
                let tz = zz.extension;
                if (!tz) throw new Error(`Unrecognized extension value in extension set (${zz}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
                Xz(tz, Oz)
              }
            }
            return Xz(zz, tt), Fz.reduce(((zz, tz) => zz.concat(tz)))
          }(zz, tz, Xz)) uz instanceof fz ? Fz.push(uz) : (Wz[uz.facet.id] || (Wz[uz.facet.id] = [])).push(uz);
        let Oz = Object.create(null),
          oz = [],
          vz = [];
        for (let uz of Fz) Oz[uz.id] = vz.length << 1, vz.push((zz => uz.slot(zz)));
        let Uz = null === sz || void 0 === sz ? void 0 : sz.config.facets;
        for (let uz in Wz) {
          let zz = Wz[uz],
            tz = zz[0].facet,
            Fz = Uz && Uz[uz] || [];
          if (zz.every((zz => 0 == zz.type)))
            if (Oz[tz.id] = oz.length << 1 | 1, az(Fz, zz)) oz.push(sz.facet(tz));
            else {
              let Fz = tz.combine(zz.map((zz => zz.value)));
              oz.push(sz && tz.compare(Fz, sz.facet(tz)) ? sz.facet(tz) : Fz)
            }
          else {
            for (let tz of zz) 0 == tz.type ? (Oz[tz.id] = oz.length << 1 | 1, oz.push(tz.value)) : (Oz[tz.id] = vz.length << 1, vz.push((zz => tz.dynamicSlot(zz))));
            Oz[tz.id] = vz.length << 1, vz.push((sz => Rz(sz, tz, zz)))
          }
        }
        let Kz = vz.map((zz => zz(Oz)));
        return new vt(zz, Xz, Kz, Oz, oz, Wz)
      }
    }

    function Ut(zz, tz) {
      if (1 & tz) return 2;
      let sz = tz >> 1,
        Fz = zz.status[sz];
      if (4 == Fz) throw new Error("Cyclic dependency between fields and/or facets");
      if (2 & Fz) return Fz;
      zz.status[sz] = 4;
      let Wz = zz.computeSlot(zz, zz.config.dynamicSlots[sz]);
      return zz.status[sz] = 2 | Wz
    }

    function Kt(zz, tz) {
      return 1 & tz ? zz.config.staticValues[tz >> 1] : zz.values[tz >> 1]
    }
    const ut = nz.define(),
      Nt = nz.define({
        combine: zz => zz.some((zz => zz)),
        static: !0
      }),
      bt = nz.define({
        combine: zz => zz.length ? zz[0] : void 0,
        static: !0
      }),
      wt = nz.define(),
      Dt = nz.define(),
      gt = nz.define(),
      Ht = nz.define({
        combine: zz => !!zz.length && zz[0]
      });
    class Bt {
      constructor(zz, tz) {
        this.type = zz, this.value = tz
      }
      static define() {
        return new Pt
      }
    }
    class Pt {
      of(zz) {
        return new Bt(this, zz)
      }
    }
    class rt {
      constructor(zz) {
        this.map = zz
      }
      of(zz) {
        return new Yt(this, zz)
      }
    }
    class Yt {
      constructor(zz, tz) {
        this.type = zz, this.value = tz
      }
      map(zz) {
        let tz = this.type.map(this.value, zz);
        return void 0 === tz ? void 0 : tz == this.value ? this : new Yt(this.type, tz)
      }
      is(zz) {
        return this.type == zz
      }
      static define() {
        return new rt((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).map || (zz => zz))
      }
      static mapEffects(zz, tz) {
        if (!zz.length) return zz;
        let sz = [];
        for (let Fz of zz) {
          let zz = Fz.map(tz);
          zz && sz.push(zz)
        }
        return sz
      }
    }
    Yt.reconfigure = Yt.define(), Yt.appendConfig = Yt.define();
    class xt {
      constructor(zz, tz, sz, Fz, Wz, Xz) {
        this.startState = zz, this.changes = tz, this.selection = sz, this.effects = Fz, this.annotations = Wz, this.scrollIntoView = Xz, this._doc = null, this._state = null, sz && Lz(sz, tz.newLength), Wz.some((zz => zz.type == xt.time)) || (this.annotations = Wz.concat(xt.time.of(Date.now())))
      }
      static create(zz, tz, sz, Fz, Wz, Xz) {
        return new xt(zz, tz, sz, Fz, Wz, Xz)
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
      annotation(zz) {
        for (let tz of this.annotations)
          if (tz.type == zz) return tz.value
      }
      get docChanged() {
        return !this.changes.empty
      }
      get reconfigured() {
        return this.startState.config != this.state.config
      }
      isUserEvent(zz) {
        let tz = this.annotation(xt.userEvent);
        return !(!tz || !(tz == zz || tz.length > zz.length && tz.slice(0, zz.length) == zz && "." == tz[zz.length]))
      }
    }

    function mt(zz, tz) {
      let sz = [];
      for (let Fz = 0, Wz = 0;;) {
        let Xz, Oz;
        if (Fz < zz.length && (Wz == tz.length || tz[Wz] >= zz[Fz])) Xz = zz[Fz++], Oz = zz[Fz++];
        else {
          if (!(Wz < tz.length)) return sz;
          Xz = tz[Wz++], Oz = tz[Wz++]
        }!sz.length || sz[sz.length - 1] < Xz ? sz.push(Xz, Oz) : sz[sz.length - 1] < Oz && (sz[sz.length - 1] = Oz)
      }
    }

    function Jt(zz, tz, sz) {
      var Fz;
      let Wz, Xz, Oz;
      return sz ? (Wz = tz.changes, Xz = jz.empty(tz.changes.length), Oz = zz.changes.compose(tz.changes)) : (Wz = tz.changes.map(zz.changes), Xz = zz.changes.mapDesc(tz.changes, !0), Oz = zz.changes.compose(Wz)), {
        changes: Oz,
        selection: tz.selection ? tz.selection.map(Xz) : null === (Fz = zz.selection) || void 0 === Fz ? void 0 : Fz.map(Wz),
        effects: Yt.mapEffects(zz.effects, Wz).concat(Yt.mapEffects(tz.effects, Xz)),
        annotations: zz.annotations.length ? zz.annotations.concat(tz.annotations) : tz.annotations,
        scrollIntoView: zz.scrollIntoView || tz.scrollIntoView
      }
    }

    function It(zz, tz, sz) {
      let Fz = tz.selection,
        Wz = Zt(tz.annotations);
      return tz.userEvent && (Wz = Wz.concat(xt.userEvent.of(tz.userEvent))), {
        changes: tz.changes instanceof jz ? tz.changes : jz.of(tz.changes || [], sz, zz.facet(bt)),
        selection: Fz && (Fz instanceof iz ? Fz : iz.single(Fz.anchor, Fz.head)),
        effects: Zt(tz.effects),
        annotations: Wz,
        scrollIntoView: !!tz.scrollIntoView
      }
    }

    function Ct(zz, tz, sz) {
      let Fz = It(zz, tz.length ? tz[0] : {}, zz.doc.length);
      tz.length && !1 === tz[0].filter && (sz = !1);
      for (let Xz = 1; Xz < tz.length; Xz++) {
        !1 === tz[Xz].filter && (sz = !1);
        let Wz = !!tz[Xz].sequential;
        Fz = Jt(Fz, It(zz, tz[Xz], Wz ? Fz.changes.newLength : zz.doc.length), Wz)
      }
      let Wz = xt.create(zz, Fz.changes, Fz.selection, Fz.effects, Fz.annotations, Fz.scrollIntoView);
      return function(zz) {
        let tz = zz.startState,
          sz = tz.facet(gt),
          Fz = zz;
        for (let Wz = sz.length - 1; Wz >= 0; Wz--) {
          let Xz = sz[Wz](zz);
          Xz && Object.keys(Xz).length && (Fz = Jt(Fz, It(tz, Xz, zz.changes.newLength), !0))
        }
        return Fz == zz ? zz : xt.create(tz, zz.changes, zz.selection, Fz.effects, Fz.annotations, Fz.scrollIntoView)
      }(sz ? function(zz) {
        let tz = zz.startState,
          sz = !0;
        for (let Wz of tz.facet(wt)) {
          let tz = Wz(zz);
          if (!1 === tz) {
            sz = !1;
            break
          }
          Array.isArray(tz) && (sz = !0 === sz ? tz : mt(sz, tz))
        }
        if (!0 !== sz) {
          let Fz, Wz;
          if (!1 === sz) Wz = zz.changes.invertedDesc, Fz = jz.empty(tz.doc.length);
          else {
            let tz = zz.changes.filter(sz);
            Fz = tz.changes, Wz = tz.filtered.mapDesc(tz.changes).invertedDesc
          }
          zz = xt.create(tz, Fz, zz.selection && zz.selection.map(Wz), Yt.mapEffects(zz.effects, Wz), zz.annotations, zz.scrollIntoView)
        }
        let Fz = tz.facet(Dt);
        for (let Wz = Fz.length - 1; Wz >= 0; Wz--) {
          let sz = Fz[Wz](zz);
          zz = sz instanceof xt ? sz : Array.isArray(sz) && 1 == sz.length && sz[0] instanceof xt ? sz[0] : Ct(tz, Zt(sz), !1)
        }
        return zz
      }(Wz) : Wz)
    }
    xt.time = Bt.define(), xt.userEvent = Bt.define(), xt.addToHistory = Bt.define(), xt.remote = Bt.define();
    const et = [];

    function Zt(zz) {
      return null == zz ? et : Array.isArray(zz) ? zz : [zz]
    }
    var Gt = function(zz) {
      return zz[zz.Word = 0] = "Word", zz[zz.Space = 1] = "Space", zz[zz.Other = 2] = "Other", zz
    }(Gt || (Gt = {}));
    const Tt = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
    let ct;
    try {
      ct = new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u")
    } catch (Fs) {}

    function jt(zz) {
      return tz => {
        if (!/\S/.test(tz)) return Gt.Space;
        if (function(zz) {
            if (ct) return ct.test(zz);
            for (let tz = 0; tz < zz.length; tz++) {
              let sz = zz[tz];
              if (/\w/.test(sz) || sz > "\x80" && (sz.toUpperCase() != sz.toLowerCase() || Tt.test(sz))) return !0
            }
            return !1
          }(tz)) return Gt.Word;
        for (let sz = 0; sz < zz.length; sz++)
          if (tz.indexOf(zz[sz]) > -1) return Gt.Word;
        return Gt.Other
      }
    }
    class At {
      constructor(zz, tz, sz, Fz, Wz, Xz) {
        this.config = zz, this.doc = tz, this.selection = sz, this.values = Fz, this.status = zz.statusTemplate.slice(), this.computeSlot = Wz, Xz && (Xz._state = this);
        for (let Oz = 0; Oz < this.config.dynamicSlots.length; Oz++) Ut(this, Oz << 1);
        this.computeSlot = null
      }
      field(zz) {
        let tz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          sz = this.config.address[zz.id];
        if (null != sz) return Ut(this, sz), Kt(this, sz);
        if (tz) throw new RangeError("Field is not present in this state")
      }
      update() {
        for (var zz = arguments.length, tz = new Array(zz), sz = 0; sz < zz; sz++) tz[sz] = arguments[sz];
        return Ct(this, tz, !0)
      }
      applyTransaction(zz) {
        let tz, sz = this.config,
          {
            base: Fz,
            compartments: Wz
          } = sz;
        for (let Oz of zz.effects) Oz.is(Ot.reconfigure) ? (sz && (Wz = new Map, sz.compartments.forEach(((zz, tz) => Wz.set(tz, zz))), sz = null), Wz.set(Oz.value.compartment, Oz.value.extension)) : Oz.is(Yt.reconfigure) ? (sz = null, Fz = Oz.value) : Oz.is(Yt.appendConfig) && (sz = null, Fz = Zt(Fz).concat(Oz.value));
        if (sz) tz = zz.startState.values.slice();
        else {
          sz = vt.resolve(Fz, Wz, this), tz = new At(sz, this.doc, this.selection, sz.dynamicSlots.map((() => null)), ((zz, tz) => tz.reconfigure(zz, this)), null).values
        }
        let Xz = zz.startState.facet(Nt) ? zz.newSelection : zz.newSelection.asSingle();
        new At(sz, zz.newDoc, Xz, tz, ((tz, sz) => sz.update(tz, zz)), zz)
      }
      replaceSelection(zz) {
        return "string" == typeof zz && (zz = this.toText(zz)), this.changeByRange((tz => ({
          changes: {
            from: tz.from,
            to: tz.to,
            insert: zz
          },
          range: iz.cursor(tz.from + zz.length)
        })))
      }
      changeByRange(zz) {
        let tz = this.selection,
          sz = zz(tz.du[0]),
          Fz = this.changes(sz.changes),
          Wz = [sz.range],
          Xz = Zt(sz.effects);
        for (let Oz = 1; Oz < tz.du.length; Oz++) {
          let sz = zz(tz.du[Oz]),
            oz = this.changes(sz.changes),
            vz = oz.map(Fz);
          for (let zz = 0; zz < Oz; zz++) Wz[zz] = Wz[zz].map(vz);
          let Uz = Fz.mapDesc(oz, !0);
          Wz.push(sz.range.map(Uz)), Fz = Fz.compose(vz), Xz = Yt.mapEffects(Xz, vz).concat(Yt.mapEffects(Zt(sz.effects), Uz))
        }
        return {
          changes: Fz,
          selection: iz.create(Wz, tz.mainIndex),
          effects: Xz
        }
      }
      changes() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return zz instanceof jz ? zz : jz.of(zz, this.doc.length, this.facet(At.lineSeparator))
      }
      toText(zz) {
        return Dz.of(zz.split(this.facet(At.lineSeparator) || Gz))
      }
      sliceDoc() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.doc.length;
        return this.doc.sliceString(zz, tz, this.lineBreak)
      }
      facet(zz) {
        let tz = this.config.address[zz.id];
        return null == tz ? zz.default : (Ut(this, tz), Kt(this, tz))
      }
      toJSON(zz) {
        let tz = {
          doc: this.sliceDoc(),
          selection: this.selection.toJSON()
        };
        if (zz)
          for (let sz in zz) {
            let Fz = zz[sz];
            Fz instanceof fz && null != this.config.address[Fz.id] && (tz[sz] = Fz.spec.toJSON(this.field(zz[sz]), this))
          }
        return tz
      }
      static fromJSON(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          sz = arguments.length > 2 ? arguments[2] : void 0;
        if (!zz || "string" != typeof zz.doc) throw new RangeError("Invalid JSON representation for EditorState");
        let Fz = [];
        if (sz)
          for (let Wz in sz)
            if (Object.prototype.hasOwnProperty.call(zz, Wz)) {
              let tz = sz[Wz],
                Xz = zz[Wz];
              Fz.push(tz.init((zz => tz.spec.fromJSON(Xz, zz))))
            } return At.create({
          doc: zz.doc,
          selection: iz.fromJSON(zz.selection),
          extensions: tz.extensions ? Fz.concat([tz.extensions]) : Fz
        })
      }
      static create() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          tz = vt.resolve(zz.extensions || [], new Map),
          sz = zz.doc instanceof Dz ? zz.doc : Dz.of((zz.doc || "").split(tz.staticFacet(At.lineSeparator) || Gz)),
          Fz = zz.selection ? zz.selection instanceof iz ? zz.selection : iz.single(zz.selection.anchor, zz.selection.head) : iz.single(0);
        return Lz(Fz, sz.length), tz.staticFacet(Nt) || (Fz = Fz.asSingle()), new At(tz, sz, Fz, tz.dynamicSlots.map((() => null)), ((zz, tz) => tz.create(zz)), null)
      }
      get tabSize() {
        return this.facet(At.tabSize)
      }
      get lineBreak() {
        return this.facet(At.lineSeparator) || "\n"
      }
      get readOnly() {
        return this.facet(Ht)
      }
      phrase(zz) {
        for (var tz = arguments.length, sz = new Array(tz > 1 ? tz - 1 : 0), Fz = 1; Fz < tz; Fz++) sz[Fz - 1] = arguments[Fz];
        for (let Wz of this.facet(At.phrases))
          if (Object.prototype.hasOwnProperty.call(Wz, zz)) {
            zz = Wz[zz];
            break
          } return sz.length && (zz = zz.replace(/\$(\$|\d*)/g, ((zz, tz) => {
          if ("$" == tz) return "$";
          let Fz = +(tz || 1);
          return !Fz || Fz > sz.length ? zz : sz[Fz - 1]
        }))), zz
      }
      languageDataAt(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          Fz = [];
        for (let Wz of this.facet(ut))
          for (let Xz of Wz(this, tz, sz)) Object.prototype.hasOwnProperty.call(Xz, zz) && Fz.push(Xz[zz]);
        return Fz
      }
      charCategorizer(zz) {
        let tz = this.languageDataAt("wordChars", zz);
        return jt(tz.length ? tz[0] : "")
      }
      wordAt(zz) {
        let {
          text: tz,
          from: sz,
          length: Fz
        } = this.doc.lineAt(zz), Wz = this.charCategorizer(zz), Xz = zz - sz, Oz = zz - sz;
        for (; Xz > 0;) {
          let zz = Iz(tz, Xz, !1);
          if (Wz(tz.slice(zz, Xz)) != Gt.Word) break;
          Xz = zz
        }
        for (; Oz < Fz;) {
          let zz = Iz(tz, Oz);
          if (Wz(tz.slice(Oz, zz)) != Gt.Word) break;
          Oz = zz
        }
        return Xz == Oz ? null : iz.range(Xz + sz, Oz + sz)
      }
    }

    function yt(zz, tz) {
      let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        Fz = {};
      for (let Wz of zz)
        for (let zz of Object.keys(Wz)) {
          let tz = Wz[zz],
            Xz = Fz[zz];
          if (void 0 === Xz) Fz[zz] = tz;
          else if (Xz === tz || void 0 === tz);
          else {
            if (!Object.hasOwnProperty.call(sz, zz)) throw new Error("Config merge conflict for field " + zz);
            Fz[zz] = sz[zz](Xz, tz)
          }
        }
      for (let Wz in tz) void 0 === Fz[Wz] && (Fz[Wz] = tz[Wz]);
      return Fz
    }
    At.allowMultipleSelections = Nt, At.tabSize = nz.define({
      combine: zz => zz.length ? zz[0] : 4
    }), At.lineSeparator = bt, At.readOnly = Ht, At.phrases = nz.define({
      compare(zz, tz) {
        let sz = Object.keys(zz),
          Fz = Object.keys(tz);
        return sz.length == Fz.length && sz.every((sz => zz[sz] == tz[sz]))
      }
    }), At.languageData = ut, At.changeFilter = wt, At.transactionFilter = Dt, At.transactionExtender = gt, Ot.reconfigure = Yt.define();
    class Mt {
      eq(zz) {
        return this == zz
      }
      range(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zz;
        return ht.create(zz, tz, this)
      }
    }

    function dt(zz, tz) {
      return zz == tz || zz.constructor == tz.constructor && zz.eq(tz)
    }
    Mt.prototype.startSide = Mt.prototype.endSide = 0, Mt.prototype.point = !1, Mt.prototype.mapMode = Tz.TrackDel;
    class ht {
      constructor(zz, tz, sz) {
        this.from = zz, this.to = tz, this.value = sz
      }
      static create(zz, tz, sz) {
        return new ht(zz, tz, sz)
      }
    }

    function Qt(zz, tz) {
      return zz.from - tz.from || zz.value.startSide - tz.value.startSide
    }
    class kt {
      constructor(zz, tz, sz, Fz) {
        this.from = zz, this.to = tz, this.value = sz, this.nsz = Fz
      }
      get length() {
        return this.to[this.to.length - 1]
      }
      findIndex(zz, tz, sz) {
        let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Wz = sz ? this.to : this.from;
        for (let Xz = Fz, Oz = Wz.length;;) {
          if (Xz == Oz) return Xz;
          let Fz = Xz + Oz >> 1,
            oz = Wz[Fz] - zz || (sz ? this.value[Fz].endSide : this.value[Fz].startSide) - tz;
          if (Fz == Xz) return oz >= 0 ? Xz : Oz;
          oz >= 0 ? Oz = Fz : Xz = Fz + 1
        }
      }
      between(zz, tz, sz, Fz) {
        for (let Wz = this.findIndex(tz, -1e9, !0), Xz = this.findIndex(sz, 1e9, !1, Wz); Wz < Xz; Wz++)
          if (!1 === Fz(this.from[Wz] + zz, this.to[Wz] + zz, this.value[Wz])) return !1
      }
      map(zz, tz) {
        let sz = [],
          Fz = [],
          Wz = [],
          Xz = -1,
          Oz = -1;
        for (let oz = 0; oz < this.value.length; oz++) {
          let vz, Uz, Kz = this.value[oz],
            uz = this.from[oz] + zz,
            Nz = this.to[oz] + zz;
          if (uz == Nz) {
            let zz = tz.mapPos(uz, Kz.startSide, Kz.mapMode);
            if (null == zz) continue;
            if (vz = Uz = zz, Kz.startSide != Kz.endSide && (Uz = tz.mapPos(uz, Kz.endSide), Uz < vz)) continue
          } else if (vz = tz.mapPos(uz, Kz.startSide), Uz = tz.mapPos(Nz, Kz.endSide), vz > Uz || vz == Uz && Kz.startSide > 0 && Kz.endSide <= 0) continue;
          (Uz - vz || Kz.endSide - Kz.startSide) < 0 || (Xz < 0 && (Xz = vz), Kz.point && (Oz = Math.max(Oz, Uz - vz)), sz.push(Kz), Fz.push(vz - Xz), Wz.push(Uz - Xz))
        }
        return {
          mapped: sz.length ? new kt(Fz, Wz, sz, Oz) : null,
          pos: Xz
        }
      }
    }
    class it {
      constructor(zz, tz, sz, Fz) {
        this.chunkPos = zz, this.chunk = tz, this.nextLayer = sz, this.nsz = Fz
      }
      static create(zz, tz, sz, Fz) {
        return new it(zz, tz, sz, Fz)
      }
      get length() {
        let zz = this.chunk.length - 1;
        return zz < 0 ? 0 : Math.max(this.chunkEnd(zz), this.nextLayer.length)
      }
      get size() {
        if (this.Aw) return 0;
        let zz = this.nextLayer.size;
        for (let tz of this.chunk) zz += tz.value.length;
        return zz
      }
      chunkEnd(zz) {
        return this.chunkPos[zz] + this.chunk[zz].length
      }
      update(zz) {
        let {
          add: tz = [],
          sort: sz = !1,
          filterFrom: Fz = 0,
          filterTo: Wz = this.length
        } = zz, Xz = zz.filter;
        if (0 == tz.length && !Xz) return this;
        if (sz && (tz = tz.slice().sort(Qt)), this.Aw) return tz.length ? it.of(tz) : this;
        let Oz = new nt(this, null, -1).goto(0),
          oz = 0,
          vz = [],
          Uz = new Lt;
        for (; Oz.value || oz < tz.length;)
          if (oz < tz.length && (Oz.from - tz[oz].from || Oz.startSide - tz[oz].value.startSide) >= 0) {
            let zz = tz[oz++];
            Uz.addInner(zz.from, zz.to, zz.value) || vz.push(zz)
          } else 1 == Oz.rangeIndex && Oz.chunkIndex < this.chunk.length && (oz == tz.length || this.chunkEnd(Oz.chunkIndex) < tz[oz].from) && (!Xz || Fz > this.chunkEnd(Oz.chunkIndex) || Wz < this.chunkPos[Oz.chunkIndex]) && Uz.addChunk(this.chunkPos[Oz.chunkIndex], this.chunk[Oz.chunkIndex]) ? Oz.nextChunk() : ((!Xz || Fz > Oz.to || Wz < Oz.from || Xz(Oz.from, Oz.to, Oz.value)) && (Uz.addInner(Oz.from, Oz.to, Oz.value) || vz.push(ht.create(Oz.from, Oz.to, Oz.value))), Oz.next());
        return Uz.finishInner(this.nextLayer.Aw && !vz.length ? it.empty : this.nextLayer.update({
          add: vz,
          filter: Xz,
          filterFrom: Fz,
          filterTo: Wz
        }))
      }
      map(zz) {
        if (zz.empty || this.Aw) return this;
        let tz = [],
          sz = [],
          Fz = -1;
        for (let Xz = 0; Xz < this.chunk.length; Xz++) {
          let Wz = this.chunkPos[Xz],
            Oz = this.chunk[Xz],
            oz = zz.touchesRange(Wz, Wz + Oz.length);
          if (!1 === oz) Fz = Math.max(Fz, Oz.nsz), tz.push(Oz), sz.push(zz.mapPos(Wz));
          else if (!0 === oz) {
            let {
              mapped: Xz,
              pos: oz
            } = Oz.map(Wz, zz);
            Xz && (Fz = Math.max(Fz, Xz.nsz), tz.push(Xz), sz.push(oz))
          }
        }
        let Wz = this.nextLayer.map(zz);
        return 0 == tz.length ? Wz : new it(sz, tz, Wz || it.empty, Fz)
      }
      between(zz, tz, sz) {
        if (!this.Aw) {
          for (let Fz = 0; Fz < this.chunk.length; Fz++) {
            let Wz = this.chunkPos[Fz],
              Xz = this.chunk[Fz];
            if (tz >= Wz && zz <= Wz + Xz.length && !1 === Xz.between(Wz, zz - Wz, tz - Wz, sz)) return
          }
          this.nextLayer.between(zz, tz, sz)
        }
      }
      iter() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return qt.from([this]).goto(zz)
      }
      get Aw() {
        return this.nextLayer == this
      }
      static iter(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return qt.from(zz).goto(tz)
      }
      static compare(zz, tz, sz, Fz) {
        let Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1,
          Xz = zz.filter((zz => zz.nsz > 0 || !zz.Aw && zz.nsz >= Wz)),
          Oz = tz.filter((zz => zz.nsz > 0 || !zz.Aw && zz.nsz >= Wz)),
          oz = lt(Xz, Oz, sz),
          vz = new Vt(Xz, oz, Wz),
          Uz = new Vt(Oz, oz, Wz);
        sz.iterGaps(((zz, tz, sz) => Rt(vz, zz, Uz, tz, sz, Fz))), sz.empty && 0 == sz.length && Rt(vz, 0, Uz, 0, 0, Fz)
      }
      static eq(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Fz = arguments.length > 3 ? arguments[3] : void 0;
        null == Fz && (Fz = 999999999);
        let Wz = zz.filter((zz => !zz.Aw && tz.indexOf(zz) < 0)),
          Xz = tz.filter((tz => !tz.Aw && zz.indexOf(tz) < 0));
        if (Wz.length != Xz.length) return !1;
        if (!Wz.length) return !0;
        let Oz = lt(Wz, Xz),
          oz = new Vt(Wz, Oz, 0).goto(sz),
          vz = new Vt(Xz, Oz, 0).goto(sz);
        for (;;) {
          if (oz.to != vz.to || !pt(oz.active, vz.active) || oz.point && (!vz.point || !dt(oz.point, vz.point))) return !1;
          if (oz.to > Fz) return !0;
          oz.next(), vz.next()
        }
      }
      static spans(zz, tz, sz, Fz) {
        let Wz = new Vt(zz, null, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1).goto(tz),
          Xz = tz,
          Oz = Wz.openStart;
        for (;;) {
          let zz = Math.min(Wz.to, sz);
          if (Wz.point) {
            let sz = Wz.activeForPoint(Wz.to),
              oz = Wz.pointFrom < tz ? sz.length + 1 : Wz.point.startSide < 0 ? sz.length : Math.min(sz.length, Oz);
            Fz.point(Xz, zz, Wz.point, sz, oz, Wz.pointRank), Oz = Math.min(Wz.openEnd(zz), sz.length)
          } else zz > Xz && (Fz.span(Xz, zz, Wz.active, Oz), Oz = Wz.openEnd(zz));
          if (Wz.to > sz) return Oz + (Wz.point && Wz.to > sz ? 1 : 0);
          Xz = Wz.to, Wz.next()
        }
      }
      static of (zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          sz = new Lt;
        for (let Fz of zz instanceof ht ? [zz] : tz ? function(zz) {
            if (zz.length > 1)
              for (let tz = zz[0], sz = 1; sz < zz.length; sz++) {
                let Fz = zz[sz];
                if (Qt(tz, Fz) > 0) return zz.slice().sort(Qt);
                tz = Fz
              }
            return zz
          }(zz) : zz) sz.add(Fz.from, Fz.to, Fz.value);
        return sz.finish()
      }
      static join(zz) {
        if (!zz.length) return it.empty;
        let tz = zz[zz.length - 1];
        for (let sz = zz.length - 2; sz >= 0; sz--)
          for (let Fz = zz[sz]; Fz != it.empty; Fz = Fz.nextLayer) tz = new it(Fz.chunkPos, Fz.chunk, tz, Math.max(Fz.nsz, tz.nsz));
        return tz
      }
    }
    it.empty = new it([], [], null, -1), it.empty.nextLayer = it.empty;
    class Lt {
      finishChunk(zz) {
        this.chunks.push(new kt(this.from, this.to, this.value, this.nsz)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.nsz), this.nsz = -1, zz && (this.from = [], this.to = [], this.value = [])
      }
      constructor() {
        this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.nsz = -1, this.setMaxPoint = -1, this.nextLayer = null
      }
      add(zz, tz, sz) {
        this.addInner(zz, tz, sz) || (this.nextLayer || (this.nextLayer = new Lt)).add(zz, tz, sz)
      }
      addInner(zz, tz, sz) {
        let Fz = zz - this.lastTo || sz.startSide - this.last.endSide;
        if (Fz <= 0 && (zz - this.lastFrom || sz.startSide - this.last.startSide) < 0) throw new Error("Ranges must be added sorted by `from` position and `startSide`");
        return !(Fz < 0) && (250 == this.from.length && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = zz), this.from.push(zz - this.chunkStart), this.to.push(tz - this.chunkStart), this.last = sz, this.lastFrom = zz, this.lastTo = tz, this.value.push(sz), sz.point && (this.nsz = Math.max(this.nsz, tz - zz)), !0)
      }
      addChunk(zz, tz) {
        if ((zz - this.lastTo || tz.value[0].startSide - this.last.endSide) < 0) return !1;
        this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, tz.nsz), this.chunks.push(tz), this.chunkPos.push(zz);
        let sz = tz.value.length - 1;
        return this.last = tz.value[sz], this.lastFrom = tz.from[sz] + zz, this.lastTo = tz.to[sz] + zz, !0
      }
      finish() {
        return this.finishInner(it.empty)
      }
      finishInner(zz) {
        if (this.from.length && this.finishChunk(!1), 0 == this.chunks.length) return zz;
        let tz = it.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(zz) : zz, this.setMaxPoint);
        return this.from = null, tz
      }
    }

    function lt(zz, tz, sz) {
      let Fz = new Map;
      for (let Xz of zz)
        for (let zz = 0; zz < Xz.chunk.length; zz++) Xz.chunk[zz].nsz <= 0 && Fz.set(Xz.chunk[zz], Xz.chunkPos[zz]);
      let Wz = new Set;
      for (let Xz of tz)
        for (let zz = 0; zz < Xz.chunk.length; zz++) {
          let tz = Fz.get(Xz.chunk[zz]);
          null == tz || (sz ? sz.mapPos(tz) : tz) != Xz.chunkPos[zz] || (null === sz || void 0 === sz ? void 0 : sz.touchesRange(tz, tz + Xz.chunk[zz].length)) || Wz.add(Xz.chunk[zz])
        }
      return Wz
    }
    class nt {
      constructor(zz, tz, sz) {
        let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.layer = zz, this.skip = tz, this.asz = sz, this.rank = Fz
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      get endSide() {
        return this.value ? this.value.endSide : 0
      }
      goto(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(zz, tz, !1), this
      }
      gotoInner(zz, tz, sz) {
        for (; this.chunkIndex < this.layer.chunk.length;) {
          let tz = this.layer.chunk[this.chunkIndex];
          if (!(this.skip && this.skip.has(tz) || this.layer.chunkEnd(this.chunkIndex) < zz || tz.nsz < this.asz)) break;
          this.chunkIndex++, sz = !1
        }
        if (this.chunkIndex < this.layer.chunk.length) {
          let Fz = this.layer.chunk[this.chunkIndex].findIndex(zz - this.layer.chunkPos[this.chunkIndex], tz, !0);
          (!sz || this.rangeIndex < Fz) && this.setRangeIndex(Fz)
        }
        this.next()
      }
      forward(zz, tz) {
        (this.to - zz || this.endSide - tz) < 0 && this.gotoInner(zz, tz, !0)
      }
      next() {
        for (;;) {
          if (this.chunkIndex == this.layer.chunk.length) {
            this.from = this.to = 1e9, this.value = null;
            break
          } {
            let zz = this.layer.chunkPos[this.chunkIndex],
              tz = this.layer.chunk[this.chunkIndex],
              sz = zz + tz.from[this.rangeIndex];
            if (this.from = sz, this.to = zz + tz.to[this.rangeIndex], this.value = tz.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.asz < 0 || this.value.point && this.to - this.from >= this.asz) break
          }
        }
      }
      setRangeIndex(zz) {
        if (zz == this.layer.chunk[this.chunkIndex].value.length) {
          if (this.chunkIndex++, this.skip)
            for (; this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]);) this.chunkIndex++;
          this.rangeIndex = 0
        } else this.rangeIndex = zz
      }
      nextChunk() {
        this.chunkIndex++, this.rangeIndex = 0, this.next()
      }
      compare(zz) {
        return this.from - zz.from || this.startSide - zz.startSide || this.rank - zz.rank || this.to - zz.to || this.endSide - zz.endSide
      }
    }
    class qt {
      constructor(zz) {
        this.heap = zz
      }
      static from(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          Fz = [];
        for (let Wz = 0; Wz < zz.length; Wz++)
          for (let Xz = zz[Wz]; !Xz.Aw; Xz = Xz.nextLayer) Xz.nsz >= sz && Fz.push(new nt(Xz, tz, sz, Wz));
        return 1 == Fz.length ? Fz[0] : new qt(Fz)
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      goto(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        for (let sz of this.heap) sz.goto(zz, tz);
        for (let sz = this.heap.length >> 1; sz >= 0; sz--) St(this.heap, sz);
        return this.next(), this
      }
      forward(zz, tz) {
        for (let sz of this.heap) sz.forward(zz, tz);
        for (let sz = this.heap.length >> 1; sz >= 0; sz--) St(this.heap, sz);
        (this.to - zz || this.value.endSide - tz) < 0 && this.next()
      }
      next() {
        if (0 == this.heap.length) this.from = this.to = 1e9, this.value = null, this.rank = -1;
        else {
          let zz = this.heap[0];
          this.from = zz.from, this.to = zz.to, this.value = zz.value, this.rank = zz.rank, zz.value && zz.next(), St(this.heap, 0)
        }
      }
    }

    function St(zz, tz) {
      for (let sz = zz[tz];;) {
        let Fz = 1 + (tz << 1);
        if (Fz >= zz.length) break;
        let Wz = zz[Fz];
        if (Fz + 1 < zz.length && Wz.compare(zz[Fz + 1]) >= 0 && (Wz = zz[Fz + 1], Fz++), sz.compare(Wz) < 0) break;
        zz[Fz] = sz, zz[tz] = Wz, tz = Fz
      }
    }
    class Vt {
      constructor(zz, tz, sz) {
        this.asz = sz, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = qt.from(zz, tz, sz)
      }
      goto(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.cursor.goto(zz, tz), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = zz, this.endSide = tz, this.openStart = -1, this.next(), this
      }
      forward(zz, tz) {
        for (; this.minActive > -1 && (this.activeTo[this.minActive] - zz || this.active[this.minActive].endSide - tz) < 0;) this.removeActive(this.minActive);
        this.cursor.forward(zz, tz)
      }
      removeActive(zz) {
        ft(this.active, zz), ft(this.activeTo, zz), ft(this.activeRank, zz), this.minActive = zs(this.active, this.activeTo)
      }
      addActive(zz) {
        let tz = 0,
          {
            value: sz,
            to: Fz,
            rank: Wz
          } = this.cursor;
        for (; tz < this.activeRank.length && (Wz - this.activeRank[tz] || Fz - this.activeTo[tz]) > 0;) tz++;
        Et(this.active, tz, sz), Et(this.activeTo, tz, Fz), Et(this.activeRank, tz, Wz), zz && Et(zz, tz, this.cursor.from), this.minActive = zs(this.active, this.activeTo)
      }
      next() {
        let zz = this.to,
          tz = this.point;
        this.point = null;
        let sz = this.openStart < 0 ? [] : null;
        for (;;) {
          let Fz = this.minActive;
          if (Fz > -1 && (this.activeTo[Fz] - this.cursor.from || this.active[Fz].endSide - this.cursor.startSide) < 0) {
            if (this.activeTo[Fz] > zz) {
              this.to = this.activeTo[Fz], this.endSide = this.active[Fz].endSide;
              break
            }
            this.removeActive(Fz), sz && ft(sz, Fz)
          } else {
            if (!this.cursor.value) {
              this.to = this.endSide = 1e9;
              break
            }
            if (this.cursor.from > zz) {
              this.to = this.cursor.from, this.endSide = this.cursor.startSide;
              break
            } {
              let zz = this.cursor.value;
              if (zz.point) {
                if (!(tz && this.cursor.to == this.to && this.cursor.from < this.cursor.to)) {
                  this.point = zz, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = zz.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
                  break
                }
                this.cursor.next()
              } else this.addActive(sz), this.cursor.next()
            }
          }
        }
        if (sz) {
          this.openStart = 0;
          for (let tz = sz.length - 1; tz >= 0 && sz[tz] < zz; tz--) this.openStart++
        }
      }
      activeForPoint(zz) {
        if (!this.active.length) return this.active;
        let tz = [];
        for (let sz = this.active.length - 1; sz >= 0 && !(this.activeRank[sz] < this.pointRank); sz--)(this.activeTo[sz] > zz || this.activeTo[sz] == zz && this.active[sz].endSide >= this.point.endSide) && tz.push(this.active[sz]);
        return tz.reverse()
      }
      openEnd(zz) {
        let tz = 0;
        for (let sz = this.activeTo.length - 1; sz >= 0 && this.activeTo[sz] > zz; sz--) tz++;
        return tz
      }
    }

    function Rt(zz, tz, sz, Fz, Wz, Xz) {
      zz.goto(tz), sz.goto(Fz);
      let Oz = Fz + Wz,
        oz = Fz,
        vz = Fz - tz,
        Uz = !!Xz.boundChange;
      for (let Kz = !1;;) {
        let tz = zz.to + vz - sz.to,
          Fz = tz || zz.endSide - sz.endSide,
          Wz = Fz < 0 ? zz.to + vz : sz.to,
          uz = Math.min(Wz, Oz);
        if (zz.point || sz.point ? (zz.point && sz.point && dt(zz.point, sz.point) && pt(zz.activeForPoint(zz.to), sz.activeForPoint(sz.to)) || Xz.comparePoint(oz, uz, zz.point, sz.point), Kz = !1) : (Kz && Xz.boundChange(oz), uz > oz && !pt(zz.active, sz.active) && Xz.compareRange(oz, uz, zz.active, sz.active), Uz && uz < Oz && (tz || zz.openEnd(Wz) != sz.openEnd(Wz)) && (Kz = !0)), Wz > Oz) break;
        oz = Wz, Fz <= 0 && zz.next(), Fz >= 0 && sz.next()
      }
    }

    function pt(zz, tz) {
      if (zz.length != tz.length) return !1;
      for (let sz = 0; sz < zz.length; sz++)
        if (zz[sz] != tz[sz] && !dt(zz[sz], tz[sz])) return !1;
      return !0
    }

    function ft(zz, tz) {
      for (let sz = tz, Fz = zz.length - 1; sz < Fz; sz++) zz[sz] = zz[sz + 1];
      zz.pop()
    }

    function Et(zz, tz, sz) {
      for (let Fz = zz.length - 1; Fz >= tz; Fz--) zz[Fz + 1] = zz[Fz];
      zz[tz] = sz
    }

    function zs(zz, tz) {
      let sz = -1,
        Fz = 1e9;
      for (let Wz = 0; Wz < tz.length; Wz++)(tz[Wz] - Fz || zz[Wz].endSide - zz[sz].endSide) < 0 && (sz = Wz, Fz = tz[Wz]);
      return sz
    }

    function ts(zz, tz) {
      let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : zz.length,
        Fz = 0;
      for (let Wz = 0; Wz < sz && Wz < zz.length;) 9 == zz.charCodeAt(Wz) ? (Fz += tz - Fz % tz, Wz++) : (Fz++, Wz = Iz(zz, Wz));
      return Fz
    }

    function ss(zz, tz, sz, Fz) {
      for (let Wz = 0, Xz = 0;;) {
        if (Xz >= tz) return Wz;
        if (Wz == zz.length) break;
        Xz += 9 == zz.charCodeAt(Wz) ? sz - Xz % sz : 1, Wz = Iz(zz, Wz)
      }
      return !0 === Fz ? -1 : zz.length
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);