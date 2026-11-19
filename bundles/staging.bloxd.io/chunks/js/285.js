export const id = 285;
export const ids = [285];
export const modules = {
  40531: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Xu,
      d: () => Gz,
      ChangeSet: () => az,
      h: () => Lu,
      l: () => Sz,
      n: () => Vu,
      r: () => Qz,
      s: () => Pz,
      t: () => nu,
      x: () => Su,
      u: () => yu,
      z: () => qu,
      B: () => ru,
      E: () => Yz,
      I: () => Rz,
      J: () => ou,
      K: () => Jz,
      N: () => Tz,
      Q: () => mu,
      R: () => zb,
      U: () => xz,
      V: () => ub,
      W: () => Az
    });
    let Ez = [],
      nz = [];

    function iz(zz) {
      if (zz < 768) return !1;
      for (let uz = 0, bz = Ez.length;;) {
        let iz = uz + bz >> 1;
        if (zz < Ez[iz]) bz = iz;
        else {
          if (!(zz >= nz[iz])) return !0;
          uz = iz + 1
        }
        if (uz == bz) return !1
      }
    }

    function lz(zz) {
      return zz >= 127462 && zz <= 127487
    }(() => {
      let zz = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((zz => zz ? parseInt(zz, 36) : 1));
      for (let uz = 0, bz = 0; uz < zz.length; uz++)(uz % 2 ? nz : Ez).push(bz += zz[uz])
    })();
    const Mz = 8205;

    function tz(zz, uz) {
      return (!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2] ? Hz : Oz)(zz, uz, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function Hz(zz, uz, bz) {
      if (uz == zz.length) return uz;
      uz && dz(zz.charCodeAt(uz)) && Fz(zz.charCodeAt(uz - 1)) && uz--;
      let Ez = pz(zz, uz);
      for (uz += Zz(Ez); uz < zz.length;) {
        let nz = pz(zz, uz);
        if (Ez == Mz || nz == Mz || bz && iz(nz)) uz += Zz(nz), Ez = nz;
        else {
          if (!lz(nz)) break;
          {
            let bz = 0,
              Ez = uz - 2;
            for (; Ez >= 0 && lz(pz(zz, Ez));) bz++, Ez -= 2;
            if (bz % 2 == 0) break;
            uz += 2
          }
        }
      }
      return uz
    }

    function Oz(zz, uz, bz) {
      for (; uz > 0;) {
        let Ez = Hz(zz, uz - 2, bz);
        if (Ez < uz) return Ez;
        uz--
      }
      return 0
    }

    function pz(zz, uz) {
      let bz = zz.charCodeAt(uz);
      if (!Fz(bz) || uz + 1 == zz.length) return bz;
      let Ez = zz.charCodeAt(uz + 1);
      return dz(Ez) ? Ez - 56320 + (bz - 55296 << 10) + 65536 : bz
    }

    function dz(zz) {
      return zz >= 56320 && zz < 57344
    }

    function Fz(zz) {
      return zz >= 55296 && zz < 56320
    }

    function Zz(zz) {
      return zz < 65536 ? 1 : 2
    }
    class Rz {
      lineAt(zz) {
        if (zz < 0 || zz > this.length) throw new RangeError(`Invalid position ${zz} in document of length ${this.length}`);
        return this.lineInner(zz, !1, 1, 0)
      }
      line(zz) {
        if (zz < 1 || zz > this.lines) throw new RangeError(`Invalid line number ${zz} in ${this.lines}-line document`);
        return this.lineInner(zz, !0, 1, 0)
      }
      replace(zz, uz, bz) {
        [zz, uz] = vz(this, zz, uz);
        let Ez = [];
        return this.decompose(0, zz, Ez, 2), bz.length && bz.decompose(0, bz.length, Ez, 3), this.decompose(uz, this.length, Ez, 1), wz.from(Ez, this.length - (uz - zz) + bz.length)
      }
      append(zz) {
        return this.replace(this.length, this.length, zz)
      }
      slice(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        [zz, uz] = vz(this, zz, uz);
        let bz = [];
        return this.decompose(zz, uz, bz, 0), wz.from(bz, uz - zz)
      }
      eq(zz) {
        if (zz == this) return !0;
        if (zz.length != this.length || zz.lines != this.lines) return !1;
        let uz = this.scanIdentical(zz, 1),
          bz = this.length - this.scanIdentical(zz, -1),
          Ez = new sz(this),
          nz = new sz(zz);
        for (let iz = uz, lz = uz;;) {
          if (Ez.next(iz), nz.next(iz), iz = 0, Ez.lineBreak != nz.lineBreak || Ez.done != nz.done || Ez.value != nz.value) return !1;
          if (lz += Ez.value.length, Ez.done || lz >= bz) return !0
        }
      }
      iter() {
        return new sz(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1)
      }
      iterRange(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        return new rz(this, zz, uz)
      }
      iterLines(zz, uz) {
        let bz;
        if (null == zz) bz = this.iter();
        else {
          null == uz && (uz = this.lines + 1);
          let Ez = this.line(zz).from;
          bz = this.iterRange(Ez, Math.max(Ez, uz == this.lines + 1 ? this.length : uz <= 1 ? 0 : this.line(uz - 1).to))
        }
        return new oz(bz)
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
        return 1 != zz.length || zz[0] ? zz.length <= 32 ? new Kz(zz) : wz.from(Kz.split(zz, [])) : Rz.empty
      }
    }
    class Kz extends Rz {
      constructor(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(zz) {
          let uz = -1;
          for (let bz of zz) uz += bz.length + 1;
          return uz
        }(zz);
        super(), this.text = zz, this.length = uz
      }
      get lines() {
        return this.text.length
      }
      get children() {
        return null
      }
      lineInner(zz, uz, bz, Ez) {
        for (let nz = 0;; nz++) {
          let iz = this.text[nz],
            lz = Ez + iz.length;
          if ((uz ? bz : lz) >= zz) return new Nz(Ez, lz, bz, iz);
          Ez = lz + 1, bz++
        }
      }
      decompose(zz, uz, bz, Ez) {
        let nz = zz <= 0 && uz >= this.length ? this : new Kz(fz(this.text, zz, uz), Math.min(uz, this.length) - Math.max(0, zz));
        if (1 & Ez) {
          let zz = bz.pop(),
            uz = Xz(nz.text, zz.text.slice(), 0, nz.length);
          if (uz.length <= 32) bz.push(new Kz(uz, zz.length + nz.length));
          else {
            let zz = uz.length >> 1;
            bz.push(new Kz(uz.slice(0, zz)), new Kz(uz.slice(zz)))
          }
        } else bz.push(nz)
      }
      replace(zz, uz, bz) {
        if (!(bz instanceof Kz)) return super.replace(zz, uz, bz);
        [zz, uz] = vz(this, zz, uz);
        let Ez = Xz(this.text, Xz(bz.text, fz(this.text, 0, zz)), uz),
          nz = this.length + bz.length - (uz - zz);
        return Ez.length <= 32 ? new Kz(Ez, nz) : wz.from(Kz.split(Ez, []), nz)
      }
      sliceString(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [zz, uz] = vz(this, zz, uz);
        let Ez = "";
        for (let nz = 0, iz = 0; nz <= uz && iz < this.text.length; iz++) {
          let lz = this.text[iz],
            Mz = nz + lz.length;
          nz > zz && iz && (Ez += bz), zz < Mz && uz > nz && (Ez += lz.slice(Math.max(0, zz - nz), uz - nz)), nz = Mz + 1
        }
        return Ez
      }
      flatten(zz) {
        for (let uz of this.text) zz.push(uz)
      }
      scanIdentical() {
        return 0
      }
      static split(zz, uz) {
        let bz = [],
          Ez = -1;
        for (let nz of zz) bz.push(nz), Ez += nz.length + 1, 32 == bz.length && (uz.push(new Kz(bz, Ez)), bz = [], Ez = -1);
        return Ez > -1 && uz.push(new Kz(bz, Ez)), uz
      }
    }
    class wz extends Rz {
      constructor(zz, uz) {
        super(), this.children = zz, this.length = uz, this.lines = 0;
        for (let bz of zz) this.lines += bz.lines
      }
      lineInner(zz, uz, bz, Ez) {
        for (let nz = 0;; nz++) {
          let iz = this.children[nz],
            lz = Ez + iz.length,
            Mz = bz + iz.lines - 1;
          if ((uz ? Mz : lz) >= zz) return iz.lineInner(zz, uz, bz, Ez);
          Ez = lz + 1, bz = Mz + 1
        }
      }
      decompose(zz, uz, bz, Ez) {
        for (let nz = 0, iz = 0; iz <= uz && nz < this.children.length; nz++) {
          let lz = this.children[nz],
            Mz = iz + lz.length;
          if (zz <= Mz && uz >= iz) {
            let nz = Ez & ((iz <= zz ? 1 : 0) | (Mz >= uz ? 2 : 0));
            iz >= zz && Mz <= uz && !nz ? bz.push(lz) : lz.decompose(zz - iz, uz - iz, bz, nz)
          }
          iz = Mz + 1
        }
      }
      replace(zz, uz, bz) {
        if ([zz, uz] = vz(this, zz, uz), bz.lines < this.lines)
          for (let Ez = 0, nz = 0; Ez < this.children.length; Ez++) {
            let iz = this.children[Ez],
              lz = nz + iz.length;
            if (zz >= nz && uz <= lz) {
              let Mz = iz.replace(zz - nz, uz - nz, bz),
                tz = this.lines - iz.lines + Mz.lines;
              if (Mz.lines < tz >> 4 && Mz.lines > tz >> 6) {
                let nz = this.children.slice();
                return nz[Ez] = Mz, new wz(nz, this.length - (uz - zz) + bz.length)
              }
              return super.replace(nz, lz, Mz)
            }
            nz = lz + 1
          }
        return super.replace(zz, uz, bz)
      }
      sliceString(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [zz, uz] = vz(this, zz, uz);
        let Ez = "";
        for (let nz = 0, iz = 0; nz < this.children.length && iz <= uz; nz++) {
          let lz = this.children[nz],
            Mz = iz + lz.length;
          iz > zz && nz && (Ez += bz), zz < Mz && uz > iz && (Ez += lz.sliceString(zz - iz, uz - iz, bz)), iz = Mz + 1
        }
        return Ez
      }
      flatten(zz) {
        for (let uz of this.children) uz.flatten(zz)
      }
      scanIdentical(zz, uz) {
        if (!(zz instanceof wz)) return 0;
        let bz = 0,
          [Ez, nz, iz, lz] = uz > 0 ? [0, 0, this.children.length, zz.children.length] : [this.children.length - 1, zz.children.length - 1, -1, -1];
        for (;; Ez += uz, nz += uz) {
          if (Ez == iz || nz == lz) return bz;
          let Mz = this.children[Ez],
            tz = zz.children[nz];
          if (Mz != tz) return bz + Mz.scanIdentical(tz, uz);
          bz += Mz.length + 1
        }
      }
      static from(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zz.reduce(((zz, uz) => zz + uz.length + 1), -1),
          bz = 0;
        for (let dz of zz) bz += dz.lines;
        if (bz < 32) {
          let bz = [];
          for (let uz of zz) uz.flatten(bz);
          return new Kz(bz, uz)
        }
        let Ez = Math.max(32, bz >> 5),
          nz = Ez << 1,
          iz = Ez >> 1,
          lz = [],
          Mz = 0,
          tz = -1,
          Hz = [];

        function Oz(zz) {
          let uz;
          if (zz.lines > nz && zz instanceof wz)
            for (let bz of zz.children) Oz(bz);
          else zz.lines > iz && (Mz > iz || !Mz) ? (pz(), lz.push(zz)) : zz instanceof Kz && Mz && (uz = Hz[Hz.length - 1]) instanceof Kz && zz.lines + uz.lines <= 32 ? (Mz += zz.lines, tz += zz.length + 1, Hz[Hz.length - 1] = new Kz(uz.text.concat(zz.text), uz.length + 1 + zz.length)) : (Mz + zz.lines > Ez && pz(), Mz += zz.lines, tz += zz.length + 1, Hz.push(zz))
        }

        function pz() {
          0 != Mz && (lz.push(1 == Hz.length ? Hz[0] : wz.from(Hz, tz)), tz = -1, Mz = Hz.length = 0)
        }
        for (let dz of zz) Oz(dz);
        return pz(), 1 == lz.length ? lz[0] : new wz(lz, uz)
      }
    }

    function Xz(zz, uz) {
      let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e9;
      for (let nz = 0, iz = 0, lz = !0; iz < zz.length && nz <= Ez; iz++) {
        let Mz = zz[iz],
          tz = nz + Mz.length;
        tz >= bz && (tz > Ez && (Mz = Mz.slice(0, Ez - nz)), nz < bz && (Mz = Mz.slice(bz - nz)), lz ? (uz[uz.length - 1] += Mz, lz = !1) : uz.push(Mz)), nz = tz + 1
      }
      return uz
    }

    function fz(zz, uz, bz) {
      return Xz(zz, [""], uz, bz)
    }
    Rz.empty = new Kz([""], 0);
    class sz {
      constructor(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.dir = uz, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [zz], this.offsets = [uz > 0 ? 1 : (zz instanceof Kz ? zz.text.length : zz.children.length) << 1]
      }
      nextInner(zz, uz) {
        for (this.done = this.lineBreak = !1;;) {
          let bz = this.nodes.length - 1,
            Ez = this.nodes[bz],
            nz = this.offsets[bz],
            iz = nz >> 1,
            lz = Ez instanceof Kz ? Ez.text.length : Ez.children.length;
          if (iz == (uz > 0 ? lz : 0)) {
            if (0 == bz) return this.done = !0, this.value = "", this;
            uz > 0 && this.offsets[bz - 1]++, this.nodes.pop(), this.offsets.pop()
          } else if ((1 & nz) == (uz > 0 ? 0 : 1)) {
            if (this.offsets[bz] += uz, 0 == zz) return this.lineBreak = !0, this.value = "\n", this;
            zz--
          } else if (Ez instanceof Kz) {
            let nz = Ez.text[iz + (uz < 0 ? -1 : 0)];
            if (this.offsets[bz] += uz, nz.length > Math.max(0, zz)) return this.value = 0 == zz ? nz : uz > 0 ? nz.slice(zz) : nz.slice(0, nz.length - zz), this;
            zz -= nz.length
          } else {
            let nz = Ez.children[iz + (uz < 0 ? -1 : 0)];
            zz > nz.length ? (zz -= nz.length, this.offsets[bz] += uz) : (uz < 0 && this.offsets[bz]--, this.nodes.push(nz), this.offsets.push(uz > 0 ? 1 : (nz instanceof Kz ? nz.text.length : nz.children.length) << 1))
          }
        }
      }
      next() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return zz < 0 && (this.nextInner(-zz, -this.dir), zz = this.value.length), this.nextInner(zz, this.dir)
      }
    }
    class rz {
      constructor(zz, uz, bz) {
        this.value = "", this.done = !1, this.cursor = new sz(zz, uz > bz ? -1 : 1), this.pos = uz > bz ? zz.length : 0, this.from = Math.min(uz, bz), this.to = Math.max(uz, bz)
      }
      nextInner(zz, uz) {
        if (uz < 0 ? this.pos <= this.from : this.pos >= this.to) return this.value = "", this.done = !0, this;
        zz += Math.max(0, uz < 0 ? this.pos - this.to : this.from - this.pos);
        let bz = uz < 0 ? this.pos - this.from : this.to - this.pos;
        zz > bz && (zz = bz), bz -= zz;
        let {
          value: Ez
        } = this.cursor.next(zz);
        return this.pos += (Ez.length + zz) * uz, this.value = Ez.length <= bz ? Ez : uz < 0 ? Ez.slice(Ez.length - bz) : Ez.slice(0, bz), this.done = !this.value, this
      }
      next() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return zz < 0 ? zz = Math.max(zz, this.from - this.pos) : zz > 0 && (zz = Math.min(zz, this.to - this.pos)), this.nextInner(zz, this.cursor.dir)
      }
      get lineBreak() {
        return this.cursor.lineBreak && "" != this.value
      }
    }
    class oz {
      constructor(zz) {
        this.inner = zz, this.afterBreak = !0, this.value = "", this.done = !1
      }
      next() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          {
            done: uz,
            lineBreak: bz,
            value: Ez
          } = this.inner.next(zz);
        return uz && this.afterBreak ? (this.value = "", this.afterBreak = !1) : uz ? (this.done = !0, this.value = "") : bz ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = Ez, this.afterBreak = !1), this
      }
      get lineBreak() {
        return !1
      }
    }
    "undefined" != typeof Symbol && (Rz.prototype[Symbol.iterator] = function() {
      return this.iter()
    }, sz.prototype[Symbol.iterator] = rz.prototype[Symbol.iterator] = oz.prototype[Symbol.iterator] = function() {
      return this
    });
    class Nz {
      constructor(zz, uz, bz, Ez) {
        this.from = zz, this.to = uz, this.number = bz, this.text = Ez
      }
      get length() {
        return this.to - this.from
      }
    }

    function vz(zz, uz, bz) {
      return [uz = Math.max(0, Math.min(zz.length, uz)), Math.max(uz, Math.min(zz.length, bz))]
    }

    function xz(zz, uz) {
      return tz(zz, uz, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function Jz(zz, uz) {
      let bz = zz.charCodeAt(uz);
      if (!((Ez = bz) >= 55296 && Ez < 56320) || uz + 1 == zz.length) return bz;
      var Ez;
      let nz = zz.charCodeAt(uz + 1);
      return function(zz) {
        return zz >= 56320 && zz < 57344
      }(nz) ? nz - 56320 + (bz - 55296 << 10) + 65536 : bz
    }

    function Az(zz) {
      return zz <= 65535 ? String.fromCharCode(zz) : (zz -= 65536, String.fromCharCode(55296 + (zz >> 10), 56320 + (1023 & zz)))
    }

    function Tz(zz) {
      return zz < 65536 ? 1 : 2
    }
    const Lz = /\r\n?|\n/;
    var Pz = function(zz) {
      return zz[zz.Simple = 0] = "Simple", zz[zz.TrackDel = 1] = "TrackDel", zz[zz.TrackBefore = 2] = "TrackBefore", zz[zz.TrackAfter = 3] = "TrackAfter", zz
    }(Pz || (Pz = {}));
    class Gz {
      constructor(zz) {
        this.sections = zz
      }
      get length() {
        let zz = 0;
        for (let uz = 0; uz < this.sections.length; uz += 2) zz += this.sections[uz];
        return zz
      }
      get newLength() {
        let zz = 0;
        for (let uz = 0; uz < this.sections.length; uz += 2) {
          let bz = this.sections[uz + 1];
          zz += bz < 0 ? this.sections[uz] : bz
        }
        return zz
      }
      get empty() {
        return 0 == this.sections.length || 2 == this.sections.length && this.sections[1] < 0
      }
      iterGaps(zz) {
        for (let uz = 0, bz = 0, Ez = 0; uz < this.sections.length;) {
          let nz = this.sections[uz++],
            iz = this.sections[uz++];
          iz < 0 ? (zz(bz, Ez, nz), Ez += nz) : Ez += iz, bz += nz
        }
      }
      iterChangedRanges(zz) {
        qz(this, zz, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get invertedDesc() {
        let zz = [];
        for (let uz = 0; uz < this.sections.length;) {
          let bz = this.sections[uz++],
            Ez = this.sections[uz++];
          Ez < 0 ? zz.push(bz, Ez) : zz.push(Ez, bz)
        }
        return new Gz(zz)
      }
      composeDesc(zz) {
        return this.empty ? zz : zz.empty ? this : Uz(this, zz)
      }
      mapDesc(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return zz.empty ? this : hz(this, zz, uz)
      }
      mapPos(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Pz.Simple,
          Ez = 0,
          nz = 0;
        for (let iz = 0; iz < this.sections.length;) {
          let lz = this.sections[iz++],
            Mz = this.sections[iz++],
            tz = Ez + lz;
          if (Mz < 0) {
            if (tz > zz) return nz + (zz - Ez);
            nz += lz
          } else {
            if (bz != Pz.Simple && tz >= zz && (bz == Pz.TrackDel && Ez < zz && tz > zz || bz == Pz.TrackBefore && Ez < zz || bz == Pz.TrackAfter && tz > zz)) return null;
            if (tz > zz || tz == zz && uz < 0 && !lz) return zz == Ez || uz < 0 ? nz : nz + Mz;
            nz += Mz
          }
          Ez = tz
        }
        if (zz > Ez) throw new RangeError(`Position ${zz} is out of range for changeset of length ${Ez}`);
        return nz
      }
      touchesRange(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zz;
        for (let bz = 0, Ez = 0; bz < this.sections.length && Ez <= uz;) {
          let nz = Ez + this.sections[bz++];
          if (this.sections[bz++] >= 0 && Ez <= uz && nz >= zz) return !(Ez < zz && nz > uz) || "cover";
          Ez = nz
        }
        return !1
      }
      toString() {
        let zz = "";
        for (let uz = 0; uz < this.sections.length;) {
          let bz = this.sections[uz++],
            Ez = this.sections[uz++];
          zz += (zz ? " " : "") + bz + (Ez >= 0 ? ":" + Ez : "")
        }
        return zz
      }
      toJSON() {
        return this.sections
      }
      static fromJSON(zz) {
        if (!Array.isArray(zz) || zz.length % 2 || zz.some((zz => "number" != typeof zz))) throw new RangeError("Invalid JSON representation of ChangeDesc");
        return new Gz(zz)
      }
      static create(zz) {
        return new Gz(zz)
      }
    }
    class az extends Gz {
      constructor(zz, uz) {
        super(zz), this.inserted = uz
      }
      apply(zz) {
        if (this.length != zz.length) throw new RangeError("Applying change set to a document with the wrong length");
        return qz(this, ((uz, bz, Ez, nz, iz) => zz = zz.replace(Ez, Ez + (bz - uz), iz)), !1), zz
      }
      mapDesc(zz) {
        return hz(this, zz, arguments.length > 1 && void 0 !== arguments[1] && arguments[1], !0)
      }
      invert(zz) {
        let uz = this.sections.slice(),
          bz = [];
        for (let Ez = 0, nz = 0; Ez < uz.length; Ez += 2) {
          let iz = uz[Ez],
            lz = uz[Ez + 1];
          if (lz >= 0) {
            uz[Ez] = lz, uz[Ez + 1] = iz;
            let Mz = Ez >> 1;
            for (; bz.length < Mz;) bz.push(Rz.empty);
            bz.push(iz ? zz.slice(nz, nz + iz) : Rz.empty)
          }
          nz += iz
        }
        return new az(uz, bz)
      }
      compose(zz) {
        return this.empty ? zz : zz.empty ? this : Uz(this, zz, !0)
      }
      map(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return zz.empty ? this : hz(this, zz, uz, !0)
      }
      iterChanges(zz) {
        qz(this, zz, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get desc() {
        return Gz.create(this.sections)
      }
      filter(zz) {
        let uz = [],
          bz = [],
          Ez = [],
          nz = new cz(this);
        zz: for (let iz = 0, lz = 0;;) {
          let Mz = iz == zz.length ? 1e9 : zz[iz++];
          for (; lz < Mz || lz == Mz && 0 == nz.len;) {
            if (nz.done) break zz;
            let zz = Math.min(nz.len, Mz - lz);
            Vz(Ez, zz, -1);
            let iz = -1 == nz.ins ? -1 : 0 == nz.off ? nz.ins : 0;
            Vz(uz, zz, iz), iz > 0 && mz(bz, uz, nz.text), nz.forward(zz), lz += zz
          }
          let tz = zz[iz++];
          for (; lz < tz;) {
            if (nz.done) break zz;
            let zz = Math.min(nz.len, tz - lz);
            Vz(uz, zz, -1), Vz(Ez, zz, -1 == nz.ins ? -1 : 0 == nz.off ? nz.ins : 0), nz.forward(zz), lz += zz
          }
        }
        return {
          changes: new az(uz, bz),
          filtered: Gz.create(Ez)
        }
      }
      toJSON() {
        let zz = [];
        for (let uz = 0; uz < this.sections.length; uz += 2) {
          let bz = this.sections[uz],
            Ez = this.sections[uz + 1];
          Ez < 0 ? zz.push(bz) : 0 == Ez ? zz.push([bz]) : zz.push([bz].concat(this.inserted[uz >> 1].toJSON()))
        }
        return zz
      }
      static of (zz, uz, bz) {
        let Ez = [],
          nz = [],
          iz = 0,
          lz = null;

        function Mz() {
          if (!(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && !Ez.length) return;
          iz < uz && Vz(Ez, uz - iz, -1);
          let zz = new az(Ez, nz);
          lz = lz ? lz.compose(zz.map(lz)) : zz, Ez = [], nz = [], iz = 0
        }
        return function zz(tz) {
          if (Array.isArray(tz))
            for (let uz of tz) zz(uz);
          else if (tz instanceof az) {
            if (tz.length != uz) throw new RangeError(`Mismatched change set length (got ${tz.length}, expected ${uz})`);
            Mz(), lz = lz ? lz.compose(tz.map(lz)) : tz
          } else {
            let {
              from: zz,
              to: lz = zz,
              insert: Hz
            } = tz;
            if (zz > lz || zz < 0 || lz > uz) throw new RangeError(`Invalid change range ${zz} to ${lz} (in doc of length ${uz})`);
            let Oz = Hz ? "string" == typeof Hz ? Rz.of(Hz.split(bz || Lz)) : Hz : Rz.empty,
              pz = Oz.length;
            if (zz == lz && 0 == pz) return;
            zz < iz && Mz(), zz > iz && Vz(Ez, zz - iz, -1), Vz(Ez, lz - zz, pz), mz(nz, Ez, Oz), iz = lz
          }
        }(zz), Mz(!lz), lz
      }
      static empty(zz) {
        return new az(zz ? [zz, -1] : [], [])
      }
      static fromJSON(zz) {
        if (!Array.isArray(zz)) throw new RangeError("Invalid JSON representation of ChangeSet");
        let uz = [],
          bz = [];
        for (let Ez = 0; Ez < zz.length; Ez++) {
          let nz = zz[Ez];
          if ("number" == typeof nz) uz.push(nz, -1);
          else {
            if (!Array.isArray(nz) || "number" != typeof nz[0] || nz.some(((zz, uz) => uz && "string" != typeof zz))) throw new RangeError("Invalid JSON representation of ChangeSet");
            if (1 == nz.length) uz.push(nz[0], 0);
            else {
              for (; bz.length < Ez;) bz.push(Rz.empty);
              bz[Ez] = Rz.of(nz.slice(1)), uz.push(nz[0], bz[Ez].length)
            }
          }
        }
        return new az(uz, bz)
      }
      static createSet(zz, uz) {
        return new az(zz, uz)
      }
    }

    function Vz(zz, uz, bz) {
      let Ez = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (0 == uz && bz <= 0) return;
      let nz = zz.length - 2;
      nz >= 0 && bz <= 0 && bz == zz[nz + 1] ? zz[nz] += uz : nz >= 0 && 0 == uz && 0 == zz[nz] ? zz[nz + 1] += bz : Ez ? (zz[nz] += uz, zz[nz + 1] += bz) : zz.push(uz, bz)
    }

    function mz(zz, uz, bz) {
      if (0 == bz.length) return;
      let Ez = uz.length - 2 >> 1;
      if (Ez < zz.length) zz[zz.length - 1] = zz[zz.length - 1].append(bz);
      else {
        for (; zz.length < Ez;) zz.push(Rz.empty);
        zz.push(bz)
      }
    }

    function qz(zz, uz, bz) {
      let Ez = zz.inserted;
      for (let nz = 0, iz = 0, lz = 0; lz < zz.sections.length;) {
        let Mz = zz.sections[lz++],
          tz = zz.sections[lz++];
        if (tz < 0) nz += Mz, iz += Mz;
        else {
          let Hz = nz,
            Oz = iz,
            pz = Rz.empty;
          for (; Hz += Mz, Oz += tz, tz && Ez && (pz = pz.append(Ez[lz - 2 >> 1])), !(bz || lz == zz.sections.length || zz.sections[lz + 1] < 0);) Mz = zz.sections[lz++], tz = zz.sections[lz++];
          uz(nz, Hz, iz, Oz, pz), nz = Hz, iz = Oz
        }
      }
    }

    function hz(zz, uz, bz) {
      let Ez = [],
        nz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3] ? [] : null,
        iz = new cz(zz),
        lz = new cz(uz),
        Mz = 0;
      for (let tz = -1;;) {
        if (++Mz > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - likely malformed ChangeSet");
        if (iz.done && lz.len || lz.done && iz.len) throw new Error("Mismatched change set lengths");
        if (-1 == iz.ins && -1 == lz.ins) {
          let zz = Math.min(iz.len, lz.len);
          Vz(Ez, zz, -1), iz.forward(zz), lz.forward(zz)
        } else if (lz.ins >= 0 && (iz.ins < 0 || tz == iz.i || 0 == iz.off && (lz.len < iz.len || lz.len == iz.len && !bz))) {
          let zz = lz.len;
          for (Vz(Ez, lz.ins, -1); zz;) {
            if (++Mz > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-b");
            let uz = Math.min(iz.len, zz);
            iz.ins >= 0 && tz < iz.i && iz.len <= uz && (Vz(Ez, 0, iz.ins), nz && mz(nz, Ez, iz.text), tz = iz.i), iz.forward(uz), zz -= uz
          }
          lz.next()
        } else {
          if (!(iz.ins >= 0)) {
            if (iz.done && lz.done) return nz ? az.createSet(Ez, nz) : Gz.create(Ez);
            throw new Error("Mismatched change set lengths")
          } {
            let zz = 0,
              uz = iz.len;
            for (; uz;) {
              if (++Mz > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-a");
              if (-1 == lz.ins) {
                let bz = Math.min(uz, lz.len);
                zz += bz, uz -= bz, lz.forward(bz)
              } else {
                if (!(0 == lz.ins && lz.len < uz)) break;
                uz -= lz.len, lz.next()
              }
            }
            Vz(Ez, zz, tz < iz.i ? iz.ins : 0), nz && tz < iz.i && mz(nz, Ez, iz.text), tz = iz.i, iz.forward(iz.len - uz)
          }
        }
      }
    }

    function Uz(zz, uz) {
      let bz = [],
        Ez = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? [] : null,
        nz = new cz(zz),
        iz = new cz(uz),
        lz = 0;
      for (let Mz = !1;;) {
        if (++lz > 2e6) throw new Error("BLOXD CODEMIRROR: composeSets exceeded max iterations - likely malformed ChangeSet");
        if (nz.done && iz.done) return Ez ? az.createSet(bz, Ez) : Gz.create(bz);
        if (0 == nz.ins) Vz(bz, nz.len, 0, Mz), nz.next();
        else if (0 != iz.len || iz.done) {
          if (nz.done || iz.done) throw new Error("Mismatched change set lengths");
          {
            let zz = Math.min(nz.len2, iz.len),
              uz = bz.length;
            if (-1 == nz.ins) {
              let uz = -1 == iz.ins ? -1 : iz.off ? 0 : iz.ins;
              Vz(bz, zz, uz, Mz), Ez && uz && mz(Ez, bz, iz.text)
            } else - 1 == iz.ins ? (Vz(bz, nz.off ? 0 : nz.len, zz, Mz), Ez && mz(Ez, bz, nz.textBit(zz))) : (Vz(bz, nz.off ? 0 : nz.len, iz.off ? 0 : iz.ins, Mz), Ez && !iz.off && mz(Ez, bz, iz.text));
            Mz = (nz.ins > zz || iz.ins >= 0 && iz.len > zz) && (Mz || bz.length > uz), nz.forward2(zz), iz.forward(zz)
          }
        } else Vz(bz, 0, iz.ins, Mz), Ez && mz(Ez, bz, iz.text), iz.next()
      }
    }
    class cz {
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
        } = this.set, uz = this.i - 2 >> 1;
        return uz >= zz.length ? Rz.empty : zz[uz]
      }
      textBit(zz) {
        let {
          inserted: uz
        } = this.set, bz = this.i - 2 >> 1;
        return bz >= uz.length && !zz ? Rz.empty : uz[bz].slice(this.off, null == zz ? void 0 : this.off + zz)
      }
      forward(zz) {
        zz == this.len ? this.next() : (this.len -= zz, this.off += zz)
      }
      forward2(zz) {
        -1 == this.ins ? this.forward(zz) : zz == this.ins ? this.next() : (this.ins -= zz, this.off += zz)
      }
    }
    class gz {
      constructor(zz, uz, bz) {
        this.from = zz, this.to = uz, this.flags = bz
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
        let uz, bz, Ez = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return this.empty ? uz = bz = zz.mapPos(this.from, Ez) : (uz = zz.mapPos(this.from, 1), bz = zz.mapPos(this.to, -1)), uz == this.from && bz == this.to ? this : new gz(uz, bz, this.flags)
      }
      extend(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zz,
          bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (zz <= this.anchor && uz >= this.anchor) return Sz.range(zz, uz, void 0, void 0, bz);
        let Ez = Math.abs(zz - this.anchor) > Math.abs(uz - this.anchor) ? zz : uz;
        return Sz.range(this.anchor, Ez, void 0, void 0, bz)
      }
      eq(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.anchor == zz.anchor && this.head == zz.head && this.goalColumn == zz.goalColumn && (!uz || !this.empty || this.assoc == zz.assoc)
      }
      toJSON() {
        return {
          anchor: this.anchor,
          head: this.head
        }
      }
      static fromJSON(zz) {
        if (!zz || "number" != typeof zz.anchor || "number" != typeof zz.head) throw new RangeError("Invalid JSON representation for SelectionRange");
        return Sz.range(zz.anchor, zz.head)
      }
      static create(zz, uz, bz) {
        return new gz(zz, uz, bz)
      }
    }
    class Sz {
      constructor(zz, uz) {
        this.al = zz, this.mainIndex = uz
      }
      map(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return zz.empty ? this : Sz.create(this.al.map((bz => bz.map(zz, uz))), this.mainIndex)
      }
      eq(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.al.length != zz.al.length || this.mainIndex != zz.mainIndex) return !1;
        for (let bz = 0; bz < this.al.length; bz++)
          if (!this.al[bz].eq(zz.al[bz], uz)) return !1;
        return !0
      }
      get main() {
        return this.al[this.mainIndex]
      }
      asSingle() {
        return 1 == this.al.length ? this : new Sz([this.main], 0)
      }
      addRange(zz) {
        let uz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return Sz.create([zz].concat(this.al), uz ? 0 : this.mainIndex + 1)
      }
      replaceRange(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.mainIndex,
          bz = this.al.slice();
        return bz[uz] = zz, Sz.create(bz, this.mainIndex)
      }
      toJSON() {
        return {
          al: this.al.map((zz => zz.toJSON())),
          main: this.mainIndex
        }
      }
      static fromJSON(zz) {
        if (!zz || !Array.isArray(zz.al) || "number" != typeof zz.main || zz.main >= zz.al.length) throw new RangeError("Invalid JSON representation for EditorSelection");
        return new Sz(zz.al.map((zz => gz.fromJSON(zz))), zz.main)
      }
      static single(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zz;
        return new Sz([Sz.range(zz, uz)], 0)
      }
      static create(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (0 == zz.length) throw new RangeError("A selection needs at least one range");
        for (let bz = 0, Ez = 0; Ez < zz.length; Ez++) {
          let nz = zz[Ez];
          if (nz.empty ? nz.from <= bz : nz.from < bz) return Sz.normalized(zz.slice(), uz);
          bz = nz.to
        }
        return new Sz(zz, uz)
      }
      static cursor(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          bz = arguments.length > 2 ? arguments[2] : void 0,
          Ez = arguments.length > 3 ? arguments[3] : void 0;
        return gz.create(zz, zz, (0 == uz ? 0 : uz < 0 ? 8 : 16) | (null == bz ? 7 : Math.min(6, bz)) | (null !== Ez && void 0 !== Ez ? Ez : 16777215) << 6)
      }
      static range(zz, uz, bz, Ez, nz) {
        let iz = (null !== bz && void 0 !== bz ? bz : 16777215) << 6 | (null == Ez ? 7 : Math.min(6, Ez));
        return nz || zz == uz || (nz = uz < zz ? 1 : -1), uz < zz ? gz.create(uz, zz, 48 | iz) : gz.create(zz, uz, (nz ? nz < 0 ? 8 : 16 : 0) | iz)
      }
      static normalized(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          bz = zz[uz];
        zz.sort(((zz, uz) => zz.from - uz.from)), uz = zz.indexOf(bz);
        for (let Ez = 1; Ez < zz.length; Ez++) {
          let bz = zz[Ez],
            nz = zz[Ez - 1];
          if (bz.empty ? bz.from <= nz.to : bz.from < nz.to) {
            let iz = nz.from,
              lz = Math.max(bz.to, nz.to);
            Ez <= uz && uz--, zz.splice(--Ez, 2, bz.anchor > bz.head ? Sz.range(lz, iz) : Sz.range(iz, lz))
          }
        }
        return new Sz(zz, uz)
      }
    }

    function yz(zz, uz) {
      for (let bz of zz.al)
        if (bz.to > uz) throw new RangeError("Selection points outside of document")
    }
    let Dz = 0;
    class Qz {
      constructor(zz, uz, bz, Ez, nz) {
        this.combine = zz, this.compareInput = uz, this.compare = bz, this.isStatic = Ez, this.id = Dz++, this.default = zz([]), this.extensions = "function" == typeof nz ? nz(this) : nz
      }
      get reader() {
        return this
      }
      static define() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return new Qz(zz.combine || (zz => zz), zz.compareInput || ((zz, uz) => zz === uz), zz.compare || (zz.combine ? (zz, uz) => zz === uz : Wz), !!zz.static, zz.enables)
      }
      of(zz) {
        return new ez([], this, 0, zz)
      }
      compute(zz, uz) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new ez(zz, this, 1, uz)
      }
      computeN(zz, uz) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new ez(zz, this, 2, uz)
      }
      from(zz, uz) {
        return uz || (uz = zz => zz), this.compute([zz], (bz => uz(bz.field(zz))))
      }
    }

    function Wz(zz, uz) {
      return zz == uz || zz.length == uz.length && zz.every(((zz, bz) => zz === uz[bz]))
    }
    class ez {
      constructor(zz, uz, bz, Ez) {
        this.dependencies = zz, this.facet = uz, this.type = bz, this.value = Ez, this.id = Dz++
      }
      dynamicSlot(zz) {
        var uz;
        let bz = this.value,
          Ez = this.facet.compareInput,
          nz = this.id,
          iz = zz[nz] >> 1,
          lz = 2 == this.type,
          Mz = !1,
          tz = !1,
          Hz = [];
        for (let Oz of this.dependencies) "doc" == Oz ? Mz = !0 : "selection" == Oz ? tz = !0 : 0 == (1 & (null !== (uz = zz[Oz.id]) && void 0 !== uz ? uz : 1)) && Hz.push(zz[Oz.id]);
        return {
          create: zz => (zz.values[iz] = bz(zz), 1),
          update(zz, uz) {
            if (Mz && uz.docChanged || tz && (uz.docChanged || uz.selection) || Iz(zz, Hz)) {
              let uz = bz(zz);
              if (lz ? !jz(uz, zz.values[iz], Ez) : !Ez(uz, zz.values[iz])) return zz.values[iz] = uz, 1
            }
            return 0
          },
          reconfigure: (zz, uz) => {
            let Mz, tz = uz.config.address[nz];
            if (null != tz) {
              let nz = Ou(uz, tz);
              if (this.dependencies.every((bz => bz instanceof Qz ? uz.facet(bz) === zz.facet(bz) : !(bz instanceof Yz) || uz.field(bz, !1) == zz.field(bz, !1))) || (lz ? jz(Mz = bz(zz), nz, Ez) : Ez(Mz = bz(zz), nz))) return zz.values[iz] = nz, 0
            } else Mz = bz(zz);
            return zz.values[iz] = Mz, 1
          }
        }
      }
    }

    function jz(zz, uz, bz) {
      if (zz.length != uz.length) return !1;
      for (let Ez = 0; Ez < zz.length; Ez++)
        if (!bz(zz[Ez], uz[Ez])) return !1;
      return !0
    }

    function Iz(zz, uz) {
      let bz = !1;
      for (let Ez of uz) 1 & Hu(zz, Ez) && (bz = !0);
      return bz
    }

    function Bz(zz, uz, bz) {
      let Ez = bz.map((uz => zz[uz.id])),
        nz = bz.map((zz => zz.type)),
        iz = Ez.filter((zz => !(1 & zz))),
        lz = zz[uz.id] >> 1;

      function Mz(zz) {
        let bz = [];
        for (let uz = 0; uz < Ez.length; uz++) {
          let iz = Ou(zz, Ez[uz]);
          if (2 == nz[uz])
            for (let zz of iz) bz.push(zz);
          else bz.push(iz)
        }
        return uz.combine(bz)
      }
      return {
        create(zz) {
          for (let uz of Ez) Hu(zz, uz);
          return zz.values[lz] = Mz(zz), 1
        },
        update(zz, bz) {
          if (!Iz(zz, iz)) return 0;
          let Ez = Mz(zz);
          return uz.compare(Ez, zz.values[lz]) ? 0 : (zz.values[lz] = Ez, 1)
        },
        reconfigure(zz, nz) {
          let iz = Iz(zz, Ez),
            tz = nz.config.facets[uz.id],
            Hz = nz.facet(uz);
          if (tz && !iz && Wz(bz, tz)) return zz.values[lz] = Hz, 0;
          let Oz = Mz(zz);
          return uz.compare(Oz, Hz) ? (zz.values[lz] = Hz, 0) : (zz.values[lz] = Oz, 1)
        }
      }
    }
    const Cz = Qz.define({
      static: !0
    });
    class Yz {
      constructor(zz, uz, bz, Ez, nz) {
        this.id = zz, this.createF = uz, this.updateF = bz, this.compareF = Ez, this.spec = nz, this.provides = void 0
      }
      static define(zz) {
        let uz = new Yz(Dz++, zz.create, zz.update, zz.compare || ((zz, uz) => zz === uz), zz);
        return zz.provide && (uz.provides = zz.provide(uz)), uz
      }
      create(zz) {
        let uz = zz.facet(Cz).find((zz => zz.field == this));
        return ((null === uz || void 0 === uz ? void 0 : uz.create) || this.createF)(zz)
      }
      slot(zz) {
        let uz = zz[this.id] >> 1;
        return {
          create: zz => (zz.values[uz] = this.create(zz), 1),
          update: (zz, bz) => {
            let Ez = zz.values[uz],
              nz = this.updateF(Ez, bz);
            return this.compareF(Ez, nz) ? 0 : (zz.values[uz] = nz, 1)
          },
          reconfigure: (zz, bz) => {
            let Ez, nz = zz.facet(Cz),
              iz = bz.facet(Cz);
            return (Ez = nz.find((zz => zz.field == this))) && Ez != iz.find((zz => zz.field == this)) ? (zz.values[uz] = Ez.create(zz), 1) : null != bz.config.address[this.id] ? (zz.values[uz] = bz.field(this), 0) : (zz.values[uz] = this.create(zz), 1)
          }
        }
      }
      init(zz) {
        return [this, Cz.of({
          field: this,
          create: zz
        })]
      }
      get extension() {
        return this
      }
    }
    const kz = 4,
      zu = 3,
      uu = 2,
      bu = 1;

    function Eu(zz) {
      return uz => new iu(uz, zz)
    }
    const nu = {
      highest: Eu(0),
      high: Eu(bu),
      default: Eu(uu),
      low: Eu(zu),
      lowest: Eu(kz)
    };
    class iu {
      constructor(zz, uz) {
        this.inner = zz, this.prec = uz
      }
    }
    class lu {
      of(zz) {
        return new Mu(this, zz)
      }
      reconfigure(zz) {
        return lu.reconfigure.of({
          compartment: this,
          extension: zz
        })
      }
      get(zz) {
        return zz.config.compartments.get(this)
      }
    }
    class Mu {
      constructor(zz, uz) {
        this.compartment = zz, this.inner = uz
      }
    }
    class tu {
      constructor(zz, uz, bz, Ez, nz, iz) {
        for (this.base = zz, this.compartments = uz, this.dynamicSlots = bz, this.address = Ez, this.staticValues = nz, this.facets = iz, this.statusTemplate = []; this.statusTemplate.length < bz.length;) this.statusTemplate.push(0)
      }
      staticFacet(zz) {
        let uz = this.address[zz.id];
        return null == uz ? zz.default : this.staticValues[uz >> 1]
      }
      static resolve(zz, uz, bz) {
        let Ez = [],
          nz = Object.create(null),
          iz = new Map;
        for (let pz of function(zz, uz, bz) {
            let Ez = [
                [],
                [],
                [],
                [],
                []
              ],
              nz = new Map;

            function iz(zz, lz) {
              let Mz = nz.get(zz);
              if (null != Mz) {
                if (Mz <= lz) return;
                let uz = Ez[Mz].indexOf(zz);
                uz > -1 && Ez[Mz].splice(uz, 1), zz instanceof Mu && bz.delete(zz.compartment)
              }
              if (nz.set(zz, lz), Array.isArray(zz))
                for (let uz of zz) iz(uz, lz);
              else if (zz instanceof Mu) {
                if (bz.has(zz.compartment)) throw new RangeError("Duplicate use of compartment in extensions");
                let Ez = uz.get(zz.compartment) || zz.inner;
                bz.set(zz.compartment, Ez), iz(Ez, lz)
              } else if (zz instanceof iu) iz(zz.inner, zz.prec);
              else if (zz instanceof Yz) Ez[lz].push(zz), zz.provides && iz(zz.provides, lz);
              else if (zz instanceof ez) Ez[lz].push(zz), zz.facet.extensions && iz(zz.facet.extensions, uu);
              else {
                let uz = zz.extension;
                if (!uz) throw new Error(`Unrecognized extension value in extension set (${zz}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
                iz(uz, lz)
              }
            }
            return iz(zz, uu), Ez.reduce(((zz, uz) => zz.concat(uz)))
          }(zz, uz, iz)) pz instanceof Yz ? Ez.push(pz) : (nz[pz.facet.id] || (nz[pz.facet.id] = [])).push(pz);
        let lz = Object.create(null),
          Mz = [],
          tz = [];
        for (let pz of Ez) lz[pz.id] = tz.length << 1, tz.push((zz => pz.slot(zz)));
        let Hz = null === bz || void 0 === bz ? void 0 : bz.config.facets;
        for (let pz in nz) {
          let zz = nz[pz],
            uz = zz[0].facet,
            Ez = Hz && Hz[pz] || [];
          if (zz.every((zz => 0 == zz.type)))
            if (lz[uz.id] = Mz.length << 1 | 1, Wz(Ez, zz)) Mz.push(bz.facet(uz));
            else {
              let Ez = uz.combine(zz.map((zz => zz.value)));
              Mz.push(bz && uz.compare(Ez, bz.facet(uz)) ? bz.facet(uz) : Ez)
            }
          else {
            for (let uz of zz) 0 == uz.type ? (lz[uz.id] = Mz.length << 1 | 1, Mz.push(uz.value)) : (lz[uz.id] = tz.length << 1, tz.push((zz => uz.dynamicSlot(zz))));
            lz[uz.id] = tz.length << 1, tz.push((bz => Bz(bz, uz, zz)))
          }
        }
        let Oz = tz.map((zz => zz(lz)));
        return new tu(zz, iz, Oz, lz, Mz, nz)
      }
    }

    function Hu(zz, uz) {
      if (1 & uz) return 2;
      let bz = uz >> 1,
        Ez = zz.status[bz];
      if (4 == Ez) throw new Error("Cyclic dependency between fields and/or facets");
      if (2 & Ez) return Ez;
      zz.status[bz] = 4;
      let nz = zz.computeSlot(zz, zz.config.dynamicSlots[bz]);
      return zz.status[bz] = 2 | nz
    }

    function Ou(zz, uz) {
      return 1 & uz ? zz.config.staticValues[uz >> 1] : zz.values[uz >> 1]
    }
    const pu = Qz.define(),
      du = Qz.define({
        combine: zz => zz.some((zz => zz)),
        static: !0
      }),
      Fu = Qz.define({
        combine: zz => zz.length ? zz[0] : void 0,
        static: !0
      }),
      Zu = Qz.define(),
      Ru = Qz.define(),
      Ku = Qz.define(),
      wu = Qz.define({
        combine: zz => !!zz.length && zz[0]
      });
    class Xu {
      constructor(zz, uz) {
        this.type = zz, this.value = uz
      }
      static define() {
        return new fu
      }
    }
    class fu {
      of(zz) {
        return new Xu(this, zz)
      }
    }
    class su {
      constructor(zz) {
        this.map = zz
      }
      of(zz) {
        return new ru(this, zz)
      }
    }
    class ru {
      constructor(zz, uz) {
        this.type = zz, this.value = uz
      }
      map(zz) {
        let uz = this.type.map(this.value, zz);
        return void 0 === uz ? void 0 : uz == this.value ? this : new ru(this.type, uz)
      }
      is(zz) {
        return this.type == zz
      }
      static define() {
        return new su((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).map || (zz => zz))
      }
      static mapEffects(zz, uz) {
        if (!zz.length) return zz;
        let bz = [];
        for (let Ez of zz) {
          let zz = Ez.map(uz);
          zz && bz.push(zz)
        }
        return bz
      }
    }
    ru.reconfigure = ru.define(), ru.appendConfig = ru.define();
    class ou {
      constructor(zz, uz, bz, Ez, nz, iz) {
        this.startState = zz, this.changes = uz, this.selection = bz, this.effects = Ez, this.annotations = nz, this.scrollIntoView = iz, this._doc = null, this._state = null, bz && yz(bz, uz.newLength), nz.some((zz => zz.type == ou.time)) || (this.annotations = nz.concat(ou.time.of(Date.now())))
      }
      static create(zz, uz, bz, Ez, nz, iz) {
        return new ou(zz, uz, bz, Ez, nz, iz)
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
        for (let uz of this.annotations)
          if (uz.type == zz) return uz.value
      }
      get docChanged() {
        return !this.changes.empty
      }
      get reconfigured() {
        return this.startState.config != this.state.config
      }
      isUserEvent(zz) {
        let uz = this.annotation(ou.userEvent);
        return !(!uz || !(uz == zz || uz.length > zz.length && uz.slice(0, zz.length) == zz && "." == uz[zz.length]))
      }
    }

    function Nu(zz, uz) {
      let bz = [];
      for (let Ez = 0, nz = 0;;) {
        let iz, lz;
        if (Ez < zz.length && (nz == uz.length || uz[nz] >= zz[Ez])) iz = zz[Ez++], lz = zz[Ez++];
        else {
          if (!(nz < uz.length)) return bz;
          iz = uz[nz++], lz = uz[nz++]
        }!bz.length || bz[bz.length - 1] < iz ? bz.push(iz, lz) : bz[bz.length - 1] < lz && (bz[bz.length - 1] = lz)
      }
    }

    function vu(zz, uz, bz) {
      var Ez;
      let nz, iz, lz;
      return bz ? (nz = uz.changes, iz = az.empty(uz.changes.length), lz = zz.changes.compose(uz.changes)) : (nz = uz.changes.map(zz.changes), iz = zz.changes.mapDesc(uz.changes, !0), lz = zz.changes.compose(nz)), {
        changes: lz,
        selection: uz.selection ? uz.selection.map(iz) : null === (Ez = zz.selection) || void 0 === Ez ? void 0 : Ez.map(nz),
        effects: ru.mapEffects(zz.effects, nz).concat(ru.mapEffects(uz.effects, iz)),
        annotations: zz.annotations.length ? zz.annotations.concat(uz.annotations) : uz.annotations,
        scrollIntoView: zz.scrollIntoView || uz.scrollIntoView
      }
    }

    function xu(zz, uz, bz) {
      let Ez = uz.selection,
        nz = Tu(uz.annotations);
      return uz.userEvent && (nz = nz.concat(ou.userEvent.of(uz.userEvent))), {
        changes: uz.changes instanceof az ? uz.changes : az.of(uz.changes || [], bz, zz.facet(Fu)),
        selection: Ez && (Ez instanceof Sz ? Ez : Sz.single(Ez.anchor, Ez.head)),
        effects: Tu(uz.effects),
        annotations: nz,
        scrollIntoView: !!uz.scrollIntoView
      }
    }

    function Ju(zz, uz, bz) {
      let Ez = xu(zz, uz.length ? uz[0] : {}, zz.doc.length);
      uz.length && !1 === uz[0].filter && (bz = !1);
      for (let iz = 1; iz < uz.length; iz++) {
        !1 === uz[iz].filter && (bz = !1);
        let nz = !!uz[iz].sequential;
        Ez = vu(Ez, xu(zz, uz[iz], nz ? Ez.changes.newLength : zz.doc.length), nz)
      }
      let nz = ou.create(zz, Ez.changes, Ez.selection, Ez.effects, Ez.annotations, Ez.scrollIntoView);
      return function(zz) {
        let uz = zz.startState,
          bz = uz.facet(Ku),
          Ez = zz;
        for (let nz = bz.length - 1; nz >= 0; nz--) {
          let iz = bz[nz](zz);
          iz && Object.keys(iz).length && (Ez = vu(Ez, xu(uz, iz, zz.changes.newLength), !0))
        }
        return Ez == zz ? zz : ou.create(uz, zz.changes, zz.selection, Ez.effects, Ez.annotations, Ez.scrollIntoView)
      }(bz ? function(zz) {
        let uz = zz.startState,
          bz = !0;
        for (let nz of uz.facet(Zu)) {
          let uz = nz(zz);
          if (!1 === uz) {
            bz = !1;
            break
          }
          Array.isArray(uz) && (bz = !0 === bz ? uz : Nu(bz, uz))
        }
        if (!0 !== bz) {
          let Ez, nz;
          if (!1 === bz) nz = zz.changes.invertedDesc, Ez = az.empty(uz.doc.length);
          else {
            let uz = zz.changes.filter(bz);
            Ez = uz.changes, nz = uz.filtered.mapDesc(uz.changes).invertedDesc
          }
          zz = ou.create(uz, Ez, zz.selection && zz.selection.map(nz), ru.mapEffects(zz.effects, nz), zz.annotations, zz.scrollIntoView)
        }
        let Ez = uz.facet(Ru);
        for (let nz = Ez.length - 1; nz >= 0; nz--) {
          let bz = Ez[nz](zz);
          zz = bz instanceof ou ? bz : Array.isArray(bz) && 1 == bz.length && bz[0] instanceof ou ? bz[0] : Ju(uz, Tu(bz), !1)
        }
        return zz
      }(nz) : nz)
    }
    ou.time = Xu.define(), ou.userEvent = Xu.define(), ou.addToHistory = Xu.define(), ou.remote = Xu.define();
    const Au = [];

    function Tu(zz) {
      return null == zz ? Au : Array.isArray(zz) ? zz : [zz]
    }
    var Lu = function(zz) {
      return zz[zz.Word = 0] = "Word", zz[zz.Space = 1] = "Space", zz[zz.Other = 2] = "Other", zz
    }(Lu || (Lu = {}));
    const Pu = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
    let Gu;
    try {
      Gu = new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u")
    } catch (bb) {}

    function au(zz) {
      return uz => {
        if (!/\S/.test(uz)) return Lu.Space;
        if (function(zz) {
            if (Gu) return Gu.test(zz);
            for (let uz = 0; uz < zz.length; uz++) {
              let bz = zz[uz];
              if (/\w/.test(bz) || bz > "\x80" && (bz.toUpperCase() != bz.toLowerCase() || Pu.test(bz))) return !0
            }
            return !1
          }(uz)) return Lu.Word;
        for (let bz = 0; bz < zz.length; bz++)
          if (uz.indexOf(zz[bz]) > -1) return Lu.Word;
        return Lu.Other
      }
    }
    class Vu {
      constructor(zz, uz, bz, Ez, nz, iz) {
        this.config = zz, this.doc = uz, this.selection = bz, this.values = Ez, this.status = zz.statusTemplate.slice(), this.computeSlot = nz, iz && (iz._state = this);
        for (let lz = 0; lz < this.config.dynamicSlots.length; lz++) Hu(this, lz << 1);
        this.computeSlot = null
      }
      field(zz) {
        let uz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          bz = this.config.address[zz.id];
        if (null != bz) return Hu(this, bz), Ou(this, bz);
        if (uz) throw new RangeError("Field is not present in this state")
      }
      update() {
        for (var zz = arguments.length, uz = new Array(zz), bz = 0; bz < zz; bz++) uz[bz] = arguments[bz];
        return Ju(this, uz, !0)
      }
      applyTransaction(zz) {
        let uz, bz = this.config,
          {
            base: Ez,
            compartments: nz
          } = bz;
        for (let lz of zz.effects) lz.is(lu.reconfigure) ? (bz && (nz = new Map, bz.compartments.forEach(((zz, uz) => nz.set(uz, zz))), bz = null), nz.set(lz.value.compartment, lz.value.extension)) : lz.is(ru.reconfigure) ? (bz = null, Ez = lz.value) : lz.is(ru.appendConfig) && (bz = null, Ez = Tu(Ez).concat(lz.value));
        if (bz) uz = zz.startState.values.slice();
        else {
          bz = tu.resolve(Ez, nz, this), uz = new Vu(bz, this.doc, this.selection, bz.dynamicSlots.map((() => null)), ((zz, uz) => uz.reconfigure(zz, this)), null).values
        }
        let iz = zz.startState.facet(du) ? zz.newSelection : zz.newSelection.asSingle();
        new Vu(bz, zz.newDoc, iz, uz, ((uz, bz) => bz.update(uz, zz)), zz)
      }
      replaceSelection(zz) {
        return "string" == typeof zz && (zz = this.toText(zz)), this.changeByRange((uz => ({
          changes: {
            from: uz.from,
            to: uz.to,
            insert: zz
          },
          range: Sz.cursor(uz.from + zz.length)
        })))
      }
      changeByRange(zz) {
        let uz = this.selection,
          bz = zz(uz.al[0]),
          Ez = this.changes(bz.changes),
          nz = [bz.range],
          iz = Tu(bz.effects);
        for (let lz = 1; lz < uz.al.length; lz++) {
          let bz = zz(uz.al[lz]),
            Mz = this.changes(bz.changes),
            tz = Mz.map(Ez);
          for (let zz = 0; zz < lz; zz++) nz[zz] = nz[zz].map(tz);
          let Hz = Ez.mapDesc(Mz, !0);
          nz.push(bz.range.map(Hz)), Ez = Ez.compose(tz), iz = ru.mapEffects(iz, tz).concat(ru.mapEffects(Tu(bz.effects), Hz))
        }
        return {
          changes: Ez,
          selection: Sz.create(nz, uz.mainIndex),
          effects: iz
        }
      }
      changes() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return zz instanceof az ? zz : az.of(zz, this.doc.length, this.facet(Vu.lineSeparator))
      }
      toText(zz) {
        return Rz.of(zz.split(this.facet(Vu.lineSeparator) || Lz))
      }
      sliceDoc() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.doc.length;
        return this.doc.sliceString(zz, uz, this.lineBreak)
      }
      facet(zz) {
        let uz = this.config.address[zz.id];
        return null == uz ? zz.default : (Hu(this, uz), Ou(this, uz))
      }
      toJSON(zz) {
        let uz = {
          doc: this.sliceDoc(),
          selection: this.selection.toJSON()
        };
        if (zz)
          for (let bz in zz) {
            let Ez = zz[bz];
            Ez instanceof Yz && null != this.config.address[Ez.id] && (uz[bz] = Ez.spec.toJSON(this.field(zz[bz]), this))
          }
        return uz
      }
      static fromJSON(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          bz = arguments.length > 2 ? arguments[2] : void 0;
        if (!zz || "string" != typeof zz.doc) throw new RangeError("Invalid JSON representation for EditorState");
        let Ez = [];
        if (bz)
          for (let nz in bz)
            if (Object.prototype.hasOwnProperty.call(zz, nz)) {
              let uz = bz[nz],
                iz = zz[nz];
              Ez.push(uz.init((zz => uz.spec.fromJSON(iz, zz))))
            } return Vu.create({
          doc: zz.doc,
          selection: Sz.fromJSON(zz.selection),
          extensions: uz.extensions ? Ez.concat([uz.extensions]) : Ez
        })
      }
      static create() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          uz = tu.resolve(zz.extensions || [], new Map),
          bz = zz.doc instanceof Rz ? zz.doc : Rz.of((zz.doc || "").split(uz.staticFacet(Vu.lineSeparator) || Lz)),
          Ez = zz.selection ? zz.selection instanceof Sz ? zz.selection : Sz.single(zz.selection.anchor, zz.selection.head) : Sz.single(0);
        return yz(Ez, bz.length), uz.staticFacet(du) || (Ez = Ez.asSingle()), new Vu(uz, bz, Ez, uz.dynamicSlots.map((() => null)), ((zz, uz) => uz.create(zz)), null)
      }
      get tabSize() {
        return this.facet(Vu.tabSize)
      }
      get lineBreak() {
        return this.facet(Vu.lineSeparator) || "\n"
      }
      get readOnly() {
        return this.facet(wu)
      }
      phrase(zz) {
        for (var uz = arguments.length, bz = new Array(uz > 1 ? uz - 1 : 0), Ez = 1; Ez < uz; Ez++) bz[Ez - 1] = arguments[Ez];
        for (let nz of this.facet(Vu.phrases))
          if (Object.prototype.hasOwnProperty.call(nz, zz)) {
            zz = nz[zz];
            break
          } return bz.length && (zz = zz.replace(/\$(\$|\d*)/g, ((zz, uz) => {
          if ("$" == uz) return "$";
          let Ez = +(uz || 1);
          return !Ez || Ez > bz.length ? zz : bz[Ez - 1]
        }))), zz
      }
      languageDataAt(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          Ez = [];
        for (let nz of this.facet(pu))
          for (let iz of nz(this, uz, bz)) Object.prototype.hasOwnProperty.call(iz, zz) && Ez.push(iz[zz]);
        return Ez
      }
      charCategorizer(zz) {
        let uz = this.languageDataAt("wordChars", zz);
        return au(uz.length ? uz[0] : "")
      }
      wordAt(zz) {
        let {
          text: uz,
          from: bz,
          length: Ez
        } = this.doc.lineAt(zz), nz = this.charCategorizer(zz), iz = zz - bz, lz = zz - bz;
        for (; iz > 0;) {
          let zz = xz(uz, iz, !1);
          if (nz(uz.slice(zz, iz)) != Lu.Word) break;
          iz = zz
        }
        for (; lz < Ez;) {
          let zz = xz(uz, lz);
          if (nz(uz.slice(lz, zz)) != Lu.Word) break;
          lz = zz
        }
        return iz == lz ? null : Sz.range(iz + bz, lz + bz)
      }
    }

    function mu(zz, uz) {
      let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        Ez = {};
      for (let nz of zz)
        for (let zz of Object.keys(nz)) {
          let uz = nz[zz],
            iz = Ez[zz];
          if (void 0 === iz) Ez[zz] = uz;
          else if (iz === uz || void 0 === uz);
          else {
            if (!Object.hasOwnProperty.call(bz, zz)) throw new Error("Config merge conflict for field " + zz);
            Ez[zz] = bz[zz](iz, uz)
          }
        }
      for (let nz in uz) void 0 === Ez[nz] && (Ez[nz] = uz[nz]);
      return Ez
    }
    Vu.allowMultipleSelections = du, Vu.tabSize = Qz.define({
      combine: zz => zz.length ? zz[0] : 4
    }), Vu.lineSeparator = Fu, Vu.readOnly = wu, Vu.phrases = Qz.define({
      compare(zz, uz) {
        let bz = Object.keys(zz),
          Ez = Object.keys(uz);
        return bz.length == Ez.length && bz.every((bz => zz[bz] == uz[bz]))
      }
    }), Vu.languageData = pu, Vu.changeFilter = Zu, Vu.transactionFilter = Ru, Vu.transactionExtender = Ku, lu.reconfigure = ru.define();
    class qu {
      eq(zz) {
        return this == zz
      }
      range(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zz;
        return Uu.create(zz, uz, this)
      }
    }

    function hu(zz, uz) {
      return zz == uz || zz.constructor == uz.constructor && zz.eq(uz)
    }
    qu.prototype.startSide = qu.prototype.endSide = 0, qu.prototype.point = !1, qu.prototype.mapMode = Pz.TrackDel;
    class Uu {
      constructor(zz, uz, bz) {
        this.from = zz, this.to = uz, this.value = bz
      }
      static create(zz, uz, bz) {
        return new Uu(zz, uz, bz)
      }
    }

    function cu(zz, uz) {
      return zz.from - uz.from || zz.value.startSide - uz.value.startSide
    }
    class gu {
      constructor(zz, uz, bz, Ez) {
        this.from = zz, this.to = uz, this.value = bz, this.Tbz = Ez
      }
      get length() {
        return this.to[this.to.length - 1]
      }
      findIndex(zz, uz, bz) {
        let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          nz = bz ? this.to : this.from;
        for (let iz = Ez, lz = nz.length;;) {
          if (iz == lz) return iz;
          let Ez = iz + lz >> 1,
            Mz = nz[Ez] - zz || (bz ? this.value[Ez].endSide : this.value[Ez].startSide) - uz;
          if (Ez == iz) return Mz >= 0 ? iz : lz;
          Mz >= 0 ? lz = Ez : iz = Ez + 1
        }
      }
      between(zz, uz, bz, Ez) {
        for (let nz = this.findIndex(uz, -1e9, !0), iz = this.findIndex(bz, 1e9, !1, nz); nz < iz; nz++)
          if (!1 === Ez(this.from[nz] + zz, this.to[nz] + zz, this.value[nz])) return !1
      }
      map(zz, uz) {
        let bz = [],
          Ez = [],
          nz = [],
          iz = -1,
          lz = -1;
        for (let Mz = 0; Mz < this.value.length; Mz++) {
          let tz, Hz, Oz = this.value[Mz],
            pz = this.from[Mz] + zz,
            dz = this.to[Mz] + zz;
          if (pz == dz) {
            let zz = uz.mapPos(pz, Oz.startSide, Oz.mapMode);
            if (null == zz) continue;
            if (tz = Hz = zz, Oz.startSide != Oz.endSide && (Hz = uz.mapPos(pz, Oz.endSide), Hz < tz)) continue
          } else if (tz = uz.mapPos(pz, Oz.startSide), Hz = uz.mapPos(dz, Oz.endSide), tz > Hz || tz == Hz && Oz.startSide > 0 && Oz.endSide <= 0) continue;
          (Hz - tz || Oz.endSide - Oz.startSide) < 0 || (iz < 0 && (iz = tz), Oz.point && (lz = Math.max(lz, Hz - tz)), bz.push(Oz), Ez.push(tz - iz), nz.push(Hz - iz))
        }
        return {
          mapped: bz.length ? new gu(Ez, nz, bz, lz) : null,
          pos: iz
        }
      }
    }
    class Su {
      constructor(zz, uz, bz, Ez) {
        this.chunkPos = zz, this.chunk = uz, this.nextLayer = bz, this.Tbz = Ez
      }
      static create(zz, uz, bz, Ez) {
        return new Su(zz, uz, bz, Ez)
      }
      get length() {
        let zz = this.chunk.length - 1;
        return zz < 0 ? 0 : Math.max(this.chunkEnd(zz), this.nextLayer.length)
      }
      get size() {
        if (this.aZ) return 0;
        let zz = this.nextLayer.size;
        for (let uz of this.chunk) zz += uz.value.length;
        return zz
      }
      chunkEnd(zz) {
        return this.chunkPos[zz] + this.chunk[zz].length
      }
      update(zz) {
        let {
          add: uz = [],
          sort: bz = !1,
          filterFrom: Ez = 0,
          filterTo: nz = this.length
        } = zz, iz = zz.filter;
        if (0 == uz.length && !iz) return this;
        if (bz && (uz = uz.slice().sort(cu)), this.aZ) return uz.length ? Su.of(uz) : this;
        let lz = new Qu(this, null, -1).goto(0),
          Mz = 0,
          tz = [],
          Hz = new yu;
        for (; lz.value || Mz < uz.length;)
          if (Mz < uz.length && (lz.from - uz[Mz].from || lz.startSide - uz[Mz].value.startSide) >= 0) {
            let zz = uz[Mz++];
            Hz.addInner(zz.from, zz.to, zz.value) || tz.push(zz)
          } else 1 == lz.rangeIndex && lz.chunkIndex < this.chunk.length && (Mz == uz.length || this.chunkEnd(lz.chunkIndex) < uz[Mz].from) && (!iz || Ez > this.chunkEnd(lz.chunkIndex) || nz < this.chunkPos[lz.chunkIndex]) && Hz.addChunk(this.chunkPos[lz.chunkIndex], this.chunk[lz.chunkIndex]) ? lz.nextChunk() : ((!iz || Ez > lz.to || nz < lz.from || iz(lz.from, lz.to, lz.value)) && (Hz.addInner(lz.from, lz.to, lz.value) || tz.push(Uu.create(lz.from, lz.to, lz.value))), lz.next());
        return Hz.finishInner(this.nextLayer.aZ && !tz.length ? Su.empty : this.nextLayer.update({
          add: tz,
          filter: iz,
          filterFrom: Ez,
          filterTo: nz
        }))
      }
      map(zz) {
        if (zz.empty || this.aZ) return this;
        let uz = [],
          bz = [],
          Ez = -1;
        for (let iz = 0; iz < this.chunk.length; iz++) {
          let nz = this.chunkPos[iz],
            lz = this.chunk[iz],
            Mz = zz.touchesRange(nz, nz + lz.length);
          if (!1 === Mz) Ez = Math.max(Ez, lz.Tbz), uz.push(lz), bz.push(zz.mapPos(nz));
          else if (!0 === Mz) {
            let {
              mapped: iz,
              pos: Mz
            } = lz.map(nz, zz);
            iz && (Ez = Math.max(Ez, iz.Tbz), uz.push(iz), bz.push(Mz))
          }
        }
        let nz = this.nextLayer.map(zz);
        return 0 == uz.length ? nz : new Su(bz, uz, nz || Su.empty, Ez)
      }
      between(zz, uz, bz) {
        if (!this.aZ) {
          for (let Ez = 0; Ez < this.chunk.length; Ez++) {
            let nz = this.chunkPos[Ez],
              iz = this.chunk[Ez];
            if (uz >= nz && zz <= nz + iz.length && !1 === iz.between(nz, zz - nz, uz - nz, bz)) return
          }
          this.nextLayer.between(zz, uz, bz)
        }
      }
      iter() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return Wu.from([this]).goto(zz)
      }
      get aZ() {
        return this.nextLayer == this
      }
      static iter(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Wu.from(zz).goto(uz)
      }
      static compare(zz, uz, bz, Ez) {
        let nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1,
          iz = zz.filter((zz => zz.Tbz > 0 || !zz.aZ && zz.Tbz >= nz)),
          lz = uz.filter((zz => zz.Tbz > 0 || !zz.aZ && zz.Tbz >= nz)),
          Mz = Du(iz, lz, bz),
          tz = new ju(iz, Mz, nz),
          Hz = new ju(lz, Mz, nz);
        bz.iterGaps(((zz, uz, bz) => Iu(tz, zz, Hz, uz, bz, Ez))), bz.empty && 0 == bz.length && Iu(tz, 0, Hz, 0, 0, Ez)
      }
      static eq(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Ez = arguments.length > 3 ? arguments[3] : void 0;
        null == Ez && (Ez = 999999999);
        let nz = zz.filter((zz => !zz.aZ && uz.indexOf(zz) < 0)),
          iz = uz.filter((uz => !uz.aZ && zz.indexOf(uz) < 0));
        if (nz.length != iz.length) return !1;
        if (!nz.length) return !0;
        let lz = Du(nz, iz),
          Mz = new ju(nz, lz, 0).goto(bz),
          tz = new ju(iz, lz, 0).goto(bz);
        for (;;) {
          if (Mz.to != tz.to || !Bu(Mz.active, tz.active) || Mz.point && (!tz.point || !hu(Mz.point, tz.point))) return !1;
          if (Mz.to > Ez) return !0;
          Mz.next(), tz.next()
        }
      }
      static spans(zz, uz, bz, Ez) {
        let nz = new ju(zz, null, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1).goto(uz),
          iz = uz,
          lz = nz.openStart;
        for (;;) {
          let zz = Math.min(nz.to, bz);
          if (nz.point) {
            let bz = nz.activeForPoint(nz.to),
              Mz = nz.pointFrom < uz ? bz.length + 1 : nz.point.startSide < 0 ? bz.length : Math.min(bz.length, lz);
            Ez.point(iz, zz, nz.point, bz, Mz, nz.pointRank), lz = Math.min(nz.openEnd(zz), bz.length)
          } else zz > iz && (Ez.span(iz, zz, nz.active, lz), lz = nz.openEnd(zz));
          if (nz.to > bz) return lz + (nz.point && nz.to > bz ? 1 : 0);
          iz = nz.to, nz.next()
        }
      }
      static of (zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          bz = new yu;
        for (let Ez of zz instanceof Uu ? [zz] : uz ? function(zz) {
            if (zz.length > 1)
              for (let uz = zz[0], bz = 1; bz < zz.length; bz++) {
                let Ez = zz[bz];
                if (cu(uz, Ez) > 0) return zz.slice().sort(cu);
                uz = Ez
              }
            return zz
          }(zz) : zz) bz.add(Ez.from, Ez.to, Ez.value);
        return bz.finish()
      }
      static join(zz) {
        if (!zz.length) return Su.empty;
        let uz = zz[zz.length - 1];
        for (let bz = zz.length - 2; bz >= 0; bz--)
          for (let Ez = zz[bz]; Ez != Su.empty; Ez = Ez.nextLayer) uz = new Su(Ez.chunkPos, Ez.chunk, uz, Math.max(Ez.Tbz, uz.Tbz));
        return uz
      }
    }
    Su.empty = new Su([], [], null, -1), Su.empty.nextLayer = Su.empty;
    class yu {
      finishChunk(zz) {
        this.chunks.push(new gu(this.from, this.to, this.value, this.Tbz)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.Tbz), this.Tbz = -1, zz && (this.from = [], this.to = [], this.value = [])
      }
      constructor() {
        this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.Tbz = -1, this.setMaxPoint = -1, this.nextLayer = null
      }
      add(zz, uz, bz) {
        this.addInner(zz, uz, bz) || (this.nextLayer || (this.nextLayer = new yu)).add(zz, uz, bz)
      }
      addInner(zz, uz, bz) {
        let Ez = zz - this.lastTo || bz.startSide - this.last.endSide;
        if (Ez <= 0 && (zz - this.lastFrom || bz.startSide - this.last.startSide) < 0) throw new Error("Ranges must be added sorted by `from` position and `startSide`");
        return !(Ez < 0) && (250 == this.from.length && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = zz), this.from.push(zz - this.chunkStart), this.to.push(uz - this.chunkStart), this.last = bz, this.lastFrom = zz, this.lastTo = uz, this.value.push(bz), bz.point && (this.Tbz = Math.max(this.Tbz, uz - zz)), !0)
      }
      addChunk(zz, uz) {
        if ((zz - this.lastTo || uz.value[0].startSide - this.last.endSide) < 0) return !1;
        this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, uz.Tbz), this.chunks.push(uz), this.chunkPos.push(zz);
        let bz = uz.value.length - 1;
        return this.last = uz.value[bz], this.lastFrom = uz.from[bz] + zz, this.lastTo = uz.to[bz] + zz, !0
      }
      finish() {
        return this.finishInner(Su.empty)
      }
      finishInner(zz) {
        if (this.from.length && this.finishChunk(!1), 0 == this.chunks.length) return zz;
        let uz = Su.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(zz) : zz, this.setMaxPoint);
        return this.from = null, uz
      }
    }

    function Du(zz, uz, bz) {
      let Ez = new Map;
      for (let iz of zz)
        for (let zz = 0; zz < iz.chunk.length; zz++) iz.chunk[zz].Tbz <= 0 && Ez.set(iz.chunk[zz], iz.chunkPos[zz]);
      let nz = new Set;
      for (let iz of uz)
        for (let zz = 0; zz < iz.chunk.length; zz++) {
          let uz = Ez.get(iz.chunk[zz]);
          null == uz || (bz ? bz.mapPos(uz) : uz) != iz.chunkPos[zz] || (null === bz || void 0 === bz ? void 0 : bz.touchesRange(uz, uz + iz.chunk[zz].length)) || nz.add(iz.chunk[zz])
        }
      return nz
    }
    class Qu {
      constructor(zz, uz, bz) {
        let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.layer = zz, this.skip = uz, this.Lbz = bz, this.rank = Ez
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      get endSide() {
        return this.value ? this.value.endSide : 0
      }
      goto(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(zz, uz, !1), this
      }
      gotoInner(zz, uz, bz) {
        for (; this.chunkIndex < this.layer.chunk.length;) {
          let uz = this.layer.chunk[this.chunkIndex];
          if (!(this.skip && this.skip.has(uz) || this.layer.chunkEnd(this.chunkIndex) < zz || uz.Tbz < this.Lbz)) break;
          this.chunkIndex++, bz = !1
        }
        if (this.chunkIndex < this.layer.chunk.length) {
          let Ez = this.layer.chunk[this.chunkIndex].findIndex(zz - this.layer.chunkPos[this.chunkIndex], uz, !0);
          (!bz || this.rangeIndex < Ez) && this.setRangeIndex(Ez)
        }
        this.next()
      }
      forward(zz, uz) {
        (this.to - zz || this.endSide - uz) < 0 && this.gotoInner(zz, uz, !0)
      }
      next() {
        for (;;) {
          if (this.chunkIndex == this.layer.chunk.length) {
            this.from = this.to = 1e9, this.value = null;
            break
          } {
            let zz = this.layer.chunkPos[this.chunkIndex],
              uz = this.layer.chunk[this.chunkIndex],
              bz = zz + uz.from[this.rangeIndex];
            if (this.from = bz, this.to = zz + uz.to[this.rangeIndex], this.value = uz.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.Lbz < 0 || this.value.point && this.to - this.from >= this.Lbz) break
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
    class Wu {
      constructor(zz) {
        this.heap = zz
      }
      static from(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          Ez = [];
        for (let nz = 0; nz < zz.length; nz++)
          for (let iz = zz[nz]; !iz.aZ; iz = iz.nextLayer) iz.Tbz >= bz && Ez.push(new Qu(iz, uz, bz, nz));
        return 1 == Ez.length ? Ez[0] : new Wu(Ez)
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      goto(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        for (let bz of this.heap) bz.goto(zz, uz);
        for (let bz = this.heap.length >> 1; bz >= 0; bz--) eu(this.heap, bz);
        return this.next(), this
      }
      forward(zz, uz) {
        for (let bz of this.heap) bz.forward(zz, uz);
        for (let bz = this.heap.length >> 1; bz >= 0; bz--) eu(this.heap, bz);
        (this.to - zz || this.value.endSide - uz) < 0 && this.next()
      }
      next() {
        if (0 == this.heap.length) this.from = this.to = 1e9, this.value = null, this.rank = -1;
        else {
          let zz = this.heap[0];
          this.from = zz.from, this.to = zz.to, this.value = zz.value, this.rank = zz.rank, zz.value && zz.next(), eu(this.heap, 0)
        }
      }
    }

    function eu(zz, uz) {
      for (let bz = zz[uz];;) {
        let Ez = 1 + (uz << 1);
        if (Ez >= zz.length) break;
        let nz = zz[Ez];
        if (Ez + 1 < zz.length && nz.compare(zz[Ez + 1]) >= 0 && (nz = zz[Ez + 1], Ez++), bz.compare(nz) < 0) break;
        zz[Ez] = bz, zz[uz] = nz, uz = Ez
      }
    }
    class ju {
      constructor(zz, uz, bz) {
        this.Lbz = bz, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = Wu.from(zz, uz, bz)
      }
      goto(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.cursor.goto(zz, uz), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = zz, this.endSide = uz, this.openStart = -1, this.next(), this
      }
      forward(zz, uz) {
        for (; this.minActive > -1 && (this.activeTo[this.minActive] - zz || this.active[this.minActive].endSide - uz) < 0;) this.removeActive(this.minActive);
        this.cursor.forward(zz, uz)
      }
      removeActive(zz) {
        Cu(this.active, zz), Cu(this.activeTo, zz), Cu(this.activeRank, zz), this.minActive = ku(this.active, this.activeTo)
      }
      addActive(zz) {
        let uz = 0,
          {
            value: bz,
            to: Ez,
            rank: nz
          } = this.cursor;
        for (; uz < this.activeRank.length && (nz - this.activeRank[uz] || Ez - this.activeTo[uz]) > 0;) uz++;
        Yu(this.active, uz, bz), Yu(this.activeTo, uz, Ez), Yu(this.activeRank, uz, nz), zz && Yu(zz, uz, this.cursor.from), this.minActive = ku(this.active, this.activeTo)
      }
      next() {
        let zz = this.to,
          uz = this.point;
        this.point = null;
        let bz = this.openStart < 0 ? [] : null;
        for (;;) {
          let Ez = this.minActive;
          if (Ez > -1 && (this.activeTo[Ez] - this.cursor.from || this.active[Ez].endSide - this.cursor.startSide) < 0) {
            if (this.activeTo[Ez] > zz) {
              this.to = this.activeTo[Ez], this.endSide = this.active[Ez].endSide;
              break
            }
            this.removeActive(Ez), bz && Cu(bz, Ez)
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
                if (!(uz && this.cursor.to == this.to && this.cursor.from < this.cursor.to)) {
                  this.point = zz, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = zz.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
                  break
                }
                this.cursor.next()
              } else this.addActive(bz), this.cursor.next()
            }
          }
        }
        if (bz) {
          this.openStart = 0;
          for (let uz = bz.length - 1; uz >= 0 && bz[uz] < zz; uz--) this.openStart++
        }
      }
      activeForPoint(zz) {
        if (!this.active.length) return this.active;
        let uz = [];
        for (let bz = this.active.length - 1; bz >= 0 && !(this.activeRank[bz] < this.pointRank); bz--)(this.activeTo[bz] > zz || this.activeTo[bz] == zz && this.active[bz].endSide >= this.point.endSide) && uz.push(this.active[bz]);
        return uz.reverse()
      }
      openEnd(zz) {
        let uz = 0;
        for (let bz = this.activeTo.length - 1; bz >= 0 && this.activeTo[bz] > zz; bz--) uz++;
        return uz
      }
    }

    function Iu(zz, uz, bz, Ez, nz, iz) {
      zz.goto(uz), bz.goto(Ez);
      let lz = Ez + nz,
        Mz = Ez,
        tz = Ez - uz,
        Hz = !!iz.boundChange;
      for (let Oz = !1;;) {
        let uz = zz.to + tz - bz.to,
          Ez = uz || zz.endSide - bz.endSide,
          nz = Ez < 0 ? zz.to + tz : bz.to,
          pz = Math.min(nz, lz);
        if (zz.point || bz.point ? (zz.point && bz.point && hu(zz.point, bz.point) && Bu(zz.activeForPoint(zz.to), bz.activeForPoint(bz.to)) || iz.comparePoint(Mz, pz, zz.point, bz.point), Oz = !1) : (Oz && iz.boundChange(Mz), pz > Mz && !Bu(zz.active, bz.active) && iz.compareRange(Mz, pz, zz.active, bz.active), Hz && pz < lz && (uz || zz.openEnd(nz) != bz.openEnd(nz)) && (Oz = !0)), nz > lz) break;
        Mz = nz, Ez <= 0 && zz.next(), Ez >= 0 && bz.next()
      }
    }

    function Bu(zz, uz) {
      if (zz.length != uz.length) return !1;
      for (let bz = 0; bz < zz.length; bz++)
        if (zz[bz] != uz[bz] && !hu(zz[bz], uz[bz])) return !1;
      return !0
    }

    function Cu(zz, uz) {
      for (let bz = uz, Ez = zz.length - 1; bz < Ez; bz++) zz[bz] = zz[bz + 1];
      zz.pop()
    }

    function Yu(zz, uz, bz) {
      for (let Ez = zz.length - 1; Ez >= uz; Ez--) zz[Ez + 1] = zz[Ez];
      zz[uz] = bz
    }

    function ku(zz, uz) {
      let bz = -1,
        Ez = 1e9;
      for (let nz = 0; nz < uz.length; nz++)(uz[nz] - Ez || zz[nz].endSide - zz[bz].endSide) < 0 && (bz = nz, Ez = uz[nz]);
      return bz
    }

    function zb(zz, uz) {
      let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : zz.length,
        Ez = 0;
      for (let nz = 0; nz < bz && nz < zz.length;) 9 == zz.charCodeAt(nz) ? (Ez += uz - Ez % uz, nz++) : (Ez++, nz = xz(zz, nz));
      return Ez
    }

    function ub(zz, uz, bz, Ez) {
      for (let nz = 0, iz = 0;;) {
        if (iz >= uz) return nz;
        if (nz == zz.length) break;
        iz += 9 == zz.charCodeAt(nz) ? bz - iz % bz : 1, nz = xz(zz, nz)
      }
      return !0 === Ez ? -1 : zz.length
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);