export const id = 199;
export const ids = [199];
export const modules = {
  39748: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => vz,
      d: () => oz,
      f: () => Oz
    });
    var Fz = sz(39754),
      Wz = sz(4432),
      Xz = sz(39760);

    function Oz(zz) {
      return zz.payloadKind === Wz.Wb.Msgpack ? (0, Fz.c)(zz.payload) : void 0
    }

    function oz(zz, tz) {
      if (tz.payloadKind === Wz.Wb.Bytes || tz.payloadKind === Wz.Wb.MsgpackBin) return (0, Xz.c)(zz, tz.payload)
    }

    function vz(zz) {
      return null !== zz && "object" === typeof zz
    }
  },
  39765: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => uz,
      g: () => Nz,
      k: () => bz,
      l: () => Kz,
      p: () => gz
    });
    var Fz = sz(4432),
      Wz = sz(39773);
    const Xz = new Map,
      Oz = new Set,
      oz = new Set;
    let vz = 0,
      Uz = 0;

    function Kz(zz, tz) {
      let sz = Xz.get(zz);
      return sz || (sz = new Set, Xz.set(zz, sz)), sz.add(tz), () => {
        sz.delete(tz)
      }
    }

    function uz() {
      return 0 !== vz
    }

    function Nz(zz) {
      return Oz.add(zz), () => {
        Oz.delete(zz)
      }
    }

    function bz(zz) {
      return oz.add(zz), () => {
        oz.delete(zz)
      }
    }
    const wz = "A raw message listener threw";

    function Dz(zz) {
      let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Oz;
      for (const Fz of tz) try {
        Fz()
      } catch (sz) {
        zz ? (0, Wz.q)(sz, wz) : console.error(wz, sz)
      }
    }
    const gz = {
      fire: function(zz) {
        if ("connection" === zz.type) {
          const tz = zz.phase === Fz.F.Activated && zz.conn !== vz && zz.conn > Uz,
            sz = (zz.phase === Fz.F.Left || zz.phase === Fz.F.Closed) && zz.conn === vz;
          return void(tz || sz ? (vz = tz ? zz.conn : 0, Dz(!0)) : zz.phase === Fz.F.Resumed && 0 !== vz && zz.conn > Uz && (vz = zz.conn, Dz(!0, oz)))
        }
        const tz = Xz.get(zz.RO);
        if (tz && zz.conn === vz && 0 !== vz)
          for (const Fz of tz) try {
            Fz(zz)
          } catch (sz) {
            (0, Wz.q)(sz, wz)
          }
      },
      close: function(zz) {
        Uz = Math.max(Uz, zz, vz), 0 !== vz && (vz = 0, Dz(!1))
      }
    }
  },
  39733: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Uz,
      g: () => vz,
      i: () => oz
    });
    var Fz = sz(1253),
      Wz = sz(39714);
    const Xz = new TextDecoder,
      Oz = new TextEncoder;

    function oz(zz, tz) {
      const sz = zz.queries.entityName(tz);
      if (sz === Wz.Ic) return;
      const Oz = zz.memoryData(zz.scratch(), 4 + sz, 4, "entity_name's answer");
      if (!Oz) return;
      const oz = Oz.getUint32(0, !0),
        vz = Xz.decode(new Uint8Array(Oz.buffer, Oz.byteOffset + 4, sz));
      return (0, Fz.c)(vz, !1, oz === Wz.Zd ? null : oz)
    }

    function vz(zz, tz, sz) {
      const Fz = Oz.encode(sz);
      if (Fz.length > Wz.Ab) return !1;
      const Xz = zz.memoryView(Uint8Array, zz.scratch(), Fz.length, "has_effect's name");
      return !!Xz && (Xz.set(Fz), 1 === zz.queries.hasEffect(tz, Fz.length))
    }

    function Uz(zz, tz, sz, Fz) {
      const Oz = zz.queries.blockData(tz, sz, Fz);
      if (Oz === Wz.Ic) return;
      const oz = zz.memoryView(Uint8Array, zz.scratch(), Oz, "block_data's answer");
      return oz ? JSON.parse(Xz.decode(oz)) : void 0
    }
  },
  39754: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Wz,
      f: () => Kz
    });
    const Fz = new TextDecoder;

    function Wz(zz) {
      const tz = new Xz(zz),
        sz = tz.value();
      if (tz.at !== zz.length) throw new Error(`msgpack: ${zz.length-tz.at} bytes after the value`);
      return sz
    }
    class Xz {
      constructor(zz) {
        this.bytes = zz, this.at = 0, this.depth = 0, this.view = void 0, this.view = new DataView(zz.buffer, zz.byteOffset, zz.byteLength)
      }
      value() {
        const zz = this.u8();
        if (zz <= 127) return zz;
        if (zz >= 224) return zz - 256;
        if (zz >= 128 && zz <= 143) return this.map(15 & zz);
        if (zz >= 144 && zz <= 159) return this.array(15 & zz);
        if (zz >= 160 && zz <= 191) return this.str(31 & zz);
        switch (zz) {
          case 192:
            return null;
          case 194:
            return !1;
          case 195:
            return !0;
          case 196:
            return this.bin(this.u8());
          case 197:
            return this.bin(this.u16());
          case 198:
            return this.bin(this.u32());
          case 199:
            return this.ext(this.u8());
          case 200:
            return this.ext(this.u16());
          case 201:
            return this.ext(this.u32());
          case 202:
            return this.view.getFloat32(this.take(4), !1);
          case 203:
            return this.view.getFloat64(this.take(8), !1);
          case 204:
            return this.u8();
          case 205:
            return this.u16();
          case 206:
            return this.u32();
          case 207:
            return this.int64(!1);
          case 208:
            return this.view.getInt8(this.take(1));
          case 209:
            return this.view.getInt16(this.take(2), !1);
          case 210:
            return this.view.getInt32(this.take(4), !1);
          case 211:
            return this.int64(!0);
          case 212:
            return this.ext(1);
          case 213:
            return this.ext(2);
          case 214:
            return this.ext(4);
          case 215:
            return this.ext(8);
          case 216:
            return this.ext(16);
          case 217:
            return this.str(this.u8());
          case 218:
            return this.str(this.u16());
          case 219:
            return this.str(this.u32());
          case 220:
            return this.array(this.u16());
          case 221:
            return this.array(this.u32());
          case 222:
            return this.map(this.u16());
          case 223:
            return this.map(this.u32());
          default:
            throw new Error(`msgpack: unknown byte 0x${zz.toString(16)} at ${this.at-1}`)
        }
      }
      take(zz) {
        const tz = this.at;
        if (tz + zz > this.bytes.length) throw new Error(`msgpack: ${zz} bytes past the end at ${tz}`);
        return this.at = tz + zz, tz
      }
      u8() {
        return this.view.getUint8(this.take(1))
      }
      u16() {
        return this.view.getUint16(this.take(2), !1)
      }
      u32() {
        return this.view.getUint32(this.take(4), !1)
      }
      int64(zz) {
        const tz = this.take(8);
        return zz ? this.view.getBigInt64(tz, !1) : this.view.getBigUint64(tz, !1)
      }
      str(zz) {
        const tz = this.take(zz),
          sz = this.bytes;
        if (zz < 16) {
          let Wz = "";
          for (let Xz = tz; Xz < tz + zz; Xz++) {
            const Oz = sz[Xz];
            if (Oz >= 128) return Fz.decode(sz.subarray(tz, tz + zz));
            Wz += String.fromCharCode(Oz)
          }
          return Wz
        }
        return Fz.decode(sz.subarray(tz, tz + zz))
      }
      bin(zz) {
        const tz = this.take(zz);
        return this.bytes.subarray(tz, tz + zz)
      }
      enter() {
        if (++this.depth > 512) throw new Error("msgpack: nested too deep")
      }
      array(zz) {
        this.enter();
        const tz = [];
        for (let sz = 0; sz < zz; sz++) tz.push(this.value());
        return this.depth--, tz
      }
      map(zz) {
        this.enter();
        const tz = {};
        for (let sz = 0; sz < zz; sz++) {
          const zz = this.value(),
            sz = this.value();
          tz["__proto__" === zz ? "__proto_" : String(zz)] = sz
        }
        return this.depth--, tz
      }
      ext(zz) {
        const tz = this.view.getInt8(this.take(1)),
          sz = this.take(zz);
        if (0 !== tz) {
          if (-1 === tz) {
            if (1 === zz) return new Date(NaN);
            if (4 === zz) return new Date(1e3 * this.view.getUint32(sz, !1));
            if (8 === zz) {
              const zz = this.view.getUint32(sz, !1),
                tz = zz >>> 2,
                Fz = 4294967296 * (3 & zz) + this.view.getUint32(sz + 4, !1);
              return new Date(1e3 * Fz + tz / 1e6)
            }
            if (12 === zz) {
              const zz = this.view.getUint32(sz, !1),
                tz = 4294967296 * this.view.getInt32(sz + 4, !1) + this.view.getUint32(sz + 8, !1);
              return new Date(1e3 * tz + zz / 1e6)
            }
          }
          throw new Error(`msgpack: ext type ${tz} of ${zz} bytes`)
        }
      }
    }
    const Oz = new TextEncoder,
      oz = -(2n ** 63n),
      vz = 2n ** 63n - 1n,
      Uz = 2n ** 64n - 1n;

    function Kz(zz) {
      const tz = new uz;
      return tz.value(zz, 0), tz.bytes()
    }
    class uz {
      constructor() {
        this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
      }
      bytes() {
        return this.buf.subarray(0, this.at)
      }
      value(zz, tz) {
        if (tz > 512) throw new Error("msgpack: nested too deep");
        switch (typeof zz) {
          case "undefined":
            return this.u8(212), this.u8(0), void this.u8(0);
          case "boolean":
            return void this.u8(zz ? 195 : 194);
          case "number":
            return void this.number(zz);
          case "bigint":
            return void this.bigint(zz);
          case "string":
            return void this.string(zz);
          case "object":
            if (null === zz) this.u8(192);
            else if (zz instanceof Uint8Array) this.head(zz.length, 196, -1, 197, 198), this.room(zz.length), this.buf.set(zz, this.at), this.at += zz.length;
            else if (Array.isArray(zz)) {
              this.head(zz.length, 220, 144, 220, 221);
              for (const sz of zz) this.value(sz, tz + 1)
            } else {
              var sz, Fz;
              if (Object.getPrototypeOf(zz) !== Object.prototype && null !== Object.getPrototypeOf(zz)) throw new Error(`msgpack: can't encode a ${null!==(sz=null===(Fz=zz.constructor)||void 0===Fz?void 0:Fz.name)&&void 0!==sz?sz:"object"}`);
              {
                const sz = Object.keys(zz);
                this.head(sz.length, 222, 128, 222, 223);
                for (const Fz of sz) this.string(Fz), this.value(zz[Fz], tz + 1)
              }
            }
            return;
          default:
            throw new Error("msgpack: can't encode a " + typeof zz)
        }
      }
      number(zz) {
        Number.isInteger(zz) && zz >= -2147483648 && zz <= 4294967295 ? zz >= 0 ? zz < 128 ? this.u8(zz) : zz < 256 ? (this.u8(204), this.u8(zz)) : zz < 65536 ? (this.u8(205), this.u16(zz)) : (this.u8(206), this.u32(zz)) : zz >= -32 ? this.u8(zz + 256) : zz >= -128 ? (this.u8(208), this.u8(zz + 256)) : zz >= -32768 ? (this.u8(209), this.u16(zz + 65536)) : (this.u8(210), this.u32(zz >>> 0)) : (this.u8(203), this.room(8), this.view.setFloat64(this.at, zz, !1), this.at += 8)
      }
      bigint(zz) {
        const tz = zz >= oz && zz <= vz;
        if (!tz && (zz < 0n || zz > Uz)) throw new Error("msgpack: a BigInt past 64 bits");
        this.u8(tz ? 211 : 207), this.room(8), tz ? this.view.setBigInt64(this.at, zz, !1) : this.view.setBigUint64(this.at, zz, !1), this.at += 8
      }
      string(zz) {
        const tz = Oz.encode(zz);
        this.head(tz.length, 217, 160, 218, 219), this.room(tz.length), this.buf.set(tz, this.at), this.at += tz.length
      }
      head(zz, tz, sz, Fz, Wz) {
        sz >= 0 && zz < (160 === sz ? 32 : 16) ? this.u8(sz | zz) : tz !== Fz && zz < 256 ? (this.u8(tz), this.u8(zz)) : zz < 65536 ? (this.u8(Fz), this.u16(zz)) : (this.u8(Wz), this.u32(zz))
      }
      room(zz) {
        if (this.at + zz <= this.buf.length) return;
        let tz = 2 * this.buf.length;
        for (; tz < this.at + zz;) tz *= 2;
        const sz = new Uint8Array(tz);
        sz.set(this.buf.subarray(0, this.at)), this.buf = sz, this.view = new DataView(sz.buffer)
      }
      u8(zz) {
        this.room(1), this.buf[this.at++] = zz
      }
      u16(zz) {
        this.room(2), this.view.setUint16(this.at, zz, !1), this.at += 2
      }
      u32(zz) {
        this.room(4), this.view.setUint32(this.at, zz, !1), this.at += 4
      }
    }
  },
  39760: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Oz
    });
    var Fz = sz(39740);
    const Wz = new TextDecoder("utf-8", {
      ignoreBOM: !0
    });
    class Xz {
      constructor(zz) {
        this.buf = zz, this.at = 0, this.view = null
      }
      bool() {
        return 0 !== this.u8()
      }
      long() {
        let zz = this.u8(),
          tz = 127 & zz,
          sz = 128;
        for (; 128 & zz;) {
          if (sz > 2 ** 63) throw new RangeError("avro: varint too long");
          zz = this.u8(), tz += (127 & zz) * sz, sz *= 128
        }
        return tz % 2 === 1 ? -(tz + 1) / 2 : tz / 2
      }
      float() {
        const zz = this.take(4);
        return this.floats().getFloat32(zz, !0)
      }
      double() {
        const zz = this.take(8);
        return this.floats().getFloat64(zz, !0)
      }
      str() {
        const zz = this.size(),
          tz = this.take(zz),
          sz = tz + zz;
        if (zz <= 32) {
          let zz = "";
          for (let Fz = tz; Fz < sz; Fz++) {
            const Xz = this.buf[Fz];
            if (Xz >= 128) return Wz.decode(this.buf.subarray(tz, sz));
            zz += String.fromCharCode(Xz)
          }
          return zz
        }
        return Wz.decode(this.buf.subarray(tz, sz))
      }
      bytes() {
        return this.fixed(this.size())
      }
      fixed(zz) {
        const tz = this.take(zz);
        return this.buf.slice(tz, tz + zz)
      }
      index(zz) {
        const tz = this.long();
        if (!(tz >= 0 && tz < zz)) throw new RangeError(`avro: index ${tz} of ${zz}`);
        return tz
      }
      nw(zz) {
        const tz = [];
        for (let sz = this.long(); 0 !== sz; sz = this.long()) {
          sz = this.block(sz);
          for (let Fz = 0; Fz < sz; Fz++) tz.push(zz(this))
        }
        return tz
      }
      map(zz) {
        const tz = {};
        for (let sz = this.long(); 0 !== sz; sz = this.long()) {
          sz = this.block(sz);
          for (let Fz = 0; Fz < sz; Fz++) {
            tz[this.str()] = zz(this)
          }
        }
        return tz
      }
      end() {
        if (this.at !== this.buf.length) throw new RangeError(`avro: ${this.buf.length-this.at} bytes after the value`)
      }
      block(zz) {
        let tz = zz;
        if (tz < 0 && (tz = -tz, this.long()), tz > this.buf.length - this.at) throw new RangeError(`avro: block of ${tz} items in ${this.buf.length-this.at} bytes`);
        return tz
      }
      floats() {
        return this.view ??= new DataView(this.buf.buffer, this.buf.byteOffset, this.buf.byteLength), this.view
      }
      size() {
        const zz = this.long();
        if (zz < 0) throw new RangeError(`avro: length ${zz}`);
        return zz
      }
      u8() {
        const zz = this.buf[this.at];
        if (void 0 === zz) throw new RangeError("avro: truncated");
        return this.at++, zz
      }
      take(zz) {
        const tz = this.at;
        if (zz > this.buf.length - tz) throw new RangeError("avro: truncated");
        return this.at = tz + zz, tz
      }
    }

    function Oz(zz, tz) {
      const sz = new Xz(tz),
        Wz = (0, Fz.kb)(zz, sz);
      return sz.end(), Wz
    }
  },
  39740: (zz, tz, sz) => {
    sz.d(tz, {
      D: () => Wz,
      G: () => oz,
      I: () => bz,
      M: () => Iz,
      P: () => Jz,
      S: () => xz,
      W: () => Kz,
      _: () => uz,
      ab: () => Cz,
      b: () => Yz,
      bb: () => wz,
      eb: () => Pz,
      f: () => gz,
      gb: () => Dz,
      h: () => Hz,
      hb: () => vz,
      j: () => Bz,
      kb: () => Zz,
      l: () => mz,
      m: () => Fz,
      q: () => Xz,
      r: () => rz,
      t: () => Nz,
      v: () => Uz,
      y: () => Oz,
      z: () => ez
    });
    const Fz = 2,
      Wz = 12,
      Xz = 27,
      Oz = 40,
      oz = 52,
      vz = 59,
      Uz = 63,
      Kz = 83,
      uz = 84,
      Nz = 89,
      bz = 91,
      wz = 93,
      Dz = 94,
      gz = 95,
      Hz = 97,
      Bz = 101,
      Pz = 102,
      rz = 73,
      Yz = 16,
      xz = 86,
      mz = 60,
      Jz = 17,
      Iz = 56,
      Cz = 100,
      ez = 81;

    function Zz(zz, tz) {
      switch (zz) {
        case Fz:
          return function(zz) {
            return {
              RX: Vz(zz),
              pX: zz.float(),
              fX: zz.long()
            }
          }(tz);
        case Wz:
          return function(zz) {
            return {
              zz: Az(zz),
              tz: Az(zz)
            }
          }(tz);
        case Xz:
          return function(zz) {
            return {
              gt: zz.bool(),
              Ht: Az(zz)
            }
          }(tz);
        case Oz:
          return tz.str();
        case oz:
          return function(zz) {
            return {
              id: zz.long(),
              Gz: Ot(zz)
            }
          }(tz);
        case vz:
        case Uz:
          return tz.str();
        case Kz:
        case uz:
          return tz.long();
        case Nz:
          return function(zz) {
            return {
              cF: zz.long(),
              jF: zz.bool(),
              AF: zz.float()
            }
          }(tz);
        case bz:
          return tz.long();
        case wz:
          return function(zz) {
            return {
              Hs: zz.bool(),
              Bs: Ut(zz)
            }
          }(tz);
        case Dz:
          return function(zz) {
            return {
              id: zz.str(),
              position: vt(zz),
              BX: Kt(zz),
              style: kz(zz),
              rX: zz.bool()
            }
          }(tz);
        case gz:
          return function(zz) {
            return {
              id: Az(zz)
            }
          }(tz);
        case Hz:
          return function(zz) {
            return {
              Yt: zz.long(),
              xt: zz.str(),
              Jt: Wt(zz),
              Ct: Wt(zz),
              et: Az(zz),
              Zt: Az(zz),
              Gt: Az(zz),
              Tt: Az(zz),
              ct: Az(zz),
              jt: Wt(zz),
              yt: Wt(zz),
              Mt: Az(zz),
              dt: Az(zz),
              Qt: Az(zz)
            }
          }(tz);
        case Bz:
          return tz.str();
        case Pz:
          return tz.long();
        case rz:
          return function(zz) {
            return {
              BF: zz.long(),
              PF: zz.str(),
              rF: zz.float()
            }
          }(tz);
        case Yz:
          return function(zz) {
            return {
              WO: zz.bool(),
              XO: Az(zz),
              OO: zz.str(),
              oO: Nt(zz),
              vO: Nt(zz),
              UO: zz.bool(),
              KO: zz.long(),
              uO: bt(zz)
            }
          }(tz);
        case xz:
          return function(zz) {
            return {
              qW: Az(zz)
            }
          }(tz);
        case mz:
          return function(zz) {
            return {
              vt: zz.str(),
              Ut: zz.str(),
              Kt: wt(zz),
              ut: zz.str(),
              Nt: fz(zz),
              Dt: zz.float()
            }
          }(tz);
        case Jz:
          return function(zz) {
            return {
              vt: zz.str(),
              Ut: zz.str(),
              Kt: wt(zz)
            }
          }(tz);
        case Iz:
          return function(zz) {
            return zz.nw(Dt)
          }(tz);
        case Cz:
          return function(zz) {
            return {
              yF: Ht(zz),
              kF: lz(zz)
            }
          }(tz);
        case ez:
          return function(zz) {
            return {
              iF: zz.bool(),
              LF: Az(zz),
              lF: Pt(zz),
              aF: yt(zz)
            }
          }(tz);
        default:
          throw new Error(`no reader for to-client message ${zz}`)
      }
    }

    function Gz(zz) {
      return {
        entityName: zz.str()
      }
    }

    function Tz(zz) {
      const tz = zz.index(4);
      return 0 === tz ? zz.str() : 1 === tz ? zz.long() : 2 === tz ? zz.bool() : Gz(zz)
    }

    function cz(zz) {
      return 0 === zz.index(2) ? null : function(zz) {
        return zz.map(Tz)
      }(zz)
    }

    function jz(zz) {
      return {
        translationKey: zz.str(),
        params: cz(zz)
      }
    }

    function Az(zz) {
      return 0 === zz.index(2) ? null : zz.str()
    }

    function yz(zz) {
      return 0 === zz.index(2) ? null : function(zz) {
        return {
          color: Az(zz),
          colour: Az(zz),
          fontSize: Az(zz)
        }
      }(zz)
    }

    function Mz(zz) {
      return {
        icon: zz.str(),
        style: yz(zz)
      }
    }

    function dz(zz) {
      const tz = zz.index(3);
      return 0 === tz ? {
        string: zz.str()
      } : 1 === tz ? {
        styledEntityName: Gz(zz)
      } : {
        styledTranslatedText: jz(zz)
      }
    }

    function hz(zz) {
      const tz = zz.index(3);
      return 0 === tz ? null : 1 === tz ? zz.str() : zz.long()
    }

    function Qz(zz) {
      return 0 === zz.index(2) ? null : zz.float()
    }

    function kz(zz) {
      return 0 === zz.index(2) ? null : function(zz) {
        return {
          color: Az(zz),
          colour: Az(zz),
          fontWeight: hz(zz),
          fontStyle: Az(zz),
          fontSize: Az(zz),
          opacity: Qz(zz)
        }
      }(zz)
    }

    function iz(zz) {
      return {
        str: dz(zz),
        style: kz(zz),
        clickableUrl: Az(zz)
      }
    }

    function Lz(zz) {
      return zz.str()
    }

    function lz(zz) {
      return zz.nw(Lz)
    }

    function nz(zz) {
      return 0 === zz.index(2) ? null : lz(zz)
    }

    function az(zz) {
      return {
        type: zz.str(),
        progress: zz.float(),
        width: Az(zz),
        height: Az(zz),
        colours: nz(zz),
        backgroundColour: Az(zz)
      }
    }

    function qz(zz) {
      return {
        type: zz.str(),
        action: zz.str(),
        style: kz(zz)
      }
    }

    function Sz(zz) {
      const tz = zz.index(7);
      return 0 === tz ? {
        string: zz.str()
      } : 1 === tz ? {
        entityName: Gz(zz)
      } : 2 === tz ? {
        translatedText: jz(zz)
      } : 3 === tz ? {
        styledIcon: Mz(zz)
      } : 4 === tz ? {
        Qz: iz(zz)
      } : 5 === tz ? {
        styledProgressBar: az(zz)
      } : {
        styledKeyBinding: qz(zz)
      }
    }

    function Vz(zz) {
      return zz.nw(Sz)
    }
    const Rz = ["progressBar", "timedClick", "gravityBar", "precisionBar", "rhythmClick"];

    function pz(zz) {
      return Rz[zz.index(5)]
    }

    function fz(zz) {
      return 0 === zz.index(2) ? null : zz.double()
    }

    function Ez(zz) {
      return 0 === zz.index(2) ? null : function(zz) {
        return {
          yz: fz(zz),
          Mz: zz.double(),
          dz: zz.double(),
          hz: zz.bool(),
          description: Vz(zz),
          iz: zz.str(),
          scale: fz(zz),
          rotation: fz(zz)
        }
      }(zz)
    }

    function zt(zz) {
      return 0 === zz.index(2) ? null : zz.bool()
    }

    function tt(zz) {
      return 0 === zz.index(2) ? null : function(zz) {
        return {
          lz: zz.double(),
          icon: zz.str(),
          label: Vz(zz),
          nz: zz.bool(),
          scale: fz(zz),
          rotation: fz(zz),
          az: zt(zz)
        }
      }(zz)
    }

    function st(zz) {
      return 0 === zz.index(2) ? null : function(zz) {
        return {
          yz: fz(zz),
          Sz: zz.double(),
          Vz: zz.double(),
          Rz: zz.double(),
          gravity: zz.double(),
          pz: zz.double(),
          fz: zz.double(),
          Ez: zz.double(),
          hz: zz.bool(),
          description: Vz(zz),
          icon: Az(zz)
        }
      }(zz)
    }

    function Ft(zz) {
      return 0 === zz.index(2) ? null : function(zz) {
        return {
          speed: zz.double(),
          tt: zz.double(),
          label: Vz(zz),
          icon: Az(zz),
          scale: fz(zz),
          rotation: fz(zz)
        }
      }(zz)
    }

    function Wt(zz) {
      return 0 === zz.index(2) ? null : zz.long()
    }

    function Xt(zz) {
      return 0 === zz.index(2) ? null : function(zz) {
        return {
          Wt: zz.long(),
          Xt: zz.double(),
          Ot: zz.double(),
          ot: Wt(zz),
          label: Vz(zz),
          icon: Az(zz)
        }
      }(zz)
    }

    function Ot(zz) {
      return {
        type: pz(zz),
        progressBar: Ez(zz),
        timedClick: tt(zz),
        gravityBar: st(zz),
        precisionBar: Ft(zz),
        rhythmClick: Xt(zz)
      }
    }

    function ot(zz) {
      return zz.float()
    }

    function vt(zz) {
      return zz.nw(ot)
    }

    function Ut(zz) {
      return 0 === zz.index(2) ? null : vt(zz)
    }

    function Kt(zz) {
      return 0 === zz.index(2) ? null : Vz(zz)
    }

    function ut(zz) {
      return zz.long()
    }

    function Nt(zz) {
      return 0 === zz.index(2) ? null : function(zz) {
        return zz.nw(ut)
      }(zz)
    }

    function bt(zz) {
      return 0 === zz.index(2) ? null : function(zz) {
        return {
          Es: zz.str(),
          XF: zz.long()
        }
      }(zz)
    }

    function wt(zz) {
      const tz = zz.index(3);
      return 0 === tz ? null : 1 === tz ? zz.str() : jz(zz)
    }

    function Dt(zz) {
      return {
        bF: zz.str(),
        wF: zz.str(),
        DF: zz.str()
      }
    }

    function gt(zz) {
      return {
        MF: zz.str(),
        dF: Az(zz),
        hF: Az(zz),
        QF: lz(zz)
      }
    }

    function Ht(zz) {
      return zz.nw(gt)
    }

    function Bt(zz) {
      return {
        nF: zz.str(),
        x: zz.long(),
        y: zz.long(),
        z: zz.long()
      }
    }

    function Pt(zz) {
      return zz.nw(Bt)
    }

    function rt(zz) {
      return 0 === zz.index(2) ? null : function(zz) {
        return {
          NW: zz.float(),
          bW: zz.long(),
          wW: zz.long()
        }
      }(zz)
    }

    function Yt(zz) {
      return {
        blockName: zz.str(),
        WW: zz.bool(),
        XW: zz.bool(),
        OW: zz.bool(),
        oW: zz.float(),
        vW: zz.float(),
        UW: zz.long(),
        KW: rt(zz)
      }
    }

    function xt(zz) {
      return 0 === zz.index(2) ? null : function(zz) {
        return zz.nw(Yt)
      }(zz)
    }

    function mt(zz) {
      return {
        tW: zz.str(),
        sW: xt(zz)
      }
    }

    function Jt(zz) {
      return {
        blockName: zz.str(),
        frequency: zz.float()
      }
    }

    function It(zz) {
      return zz.nw(Jt)
    }

    function Ct(zz) {
      return {
        HW: zz.str(),
        BW: zz.str(),
        frequency: zz.float(),
        PW: It(zz)
      }
    }

    function et(zz) {
      return zz.nw(Ct)
    }

    function Zt(zz) {
      return {
        blockName: zz.str(),
        radius: zz.long(),
        mW: zz.long(),
        VF: zz.long(),
        RF: zz.long(),
        JW: zz.float()
      }
    }

    function Gt(zz) {
      return zz.nw(Zt)
    }

    function Tt(zz) {
      return {
        VF: zz.long(),
        RF: zz.long(),
        pF: zz.long(),
        fF: zz.bool(),
        EF: mt(zz),
        DW: et(zz),
        YW: Gt(zz)
      }
    }

    function ct(zz) {
      return zz.nw(Tt)
    }

    function jt(zz) {
      return 0 === zz.index(2) ? null : function(zz) {
        return {
          name: zz.str(),
          GW: Az(zz)
        }
      }(zz)
    }

    function At(zz) {
      return 0 === zz.index(2) ? null : function(zz) {
        return {
          terrain: jt(zz),
          TW: Gt(zz)
        }
      }(zz)
    }

    function yt(zz) {
      return 0 === zz.index(2) ? null : function(zz) {
        return {
          layers: ct(zz),
          IW: At(zz)
        }
      }(zz)
    }
  },
  39727: (zz, tz, sz) => {
    sz.d(tz, {
      B: () => mz,
      F: () => Gz,
      J: () => rz,
      K: () => Yz,
      L: () => gz,
      N: () => Cz,
      R: () => cz,
      U: () => wz,
      V: () => Az,
      Z: () => Bz,
      bb: () => Hz,
      d: () => Wz,
      e: () => jz,
      fb: () => Pz,
      g: () => Tz,
      gb: () => xz,
      j: () => bz,
      n: () => Dz,
      r: () => Zz,
      u: () => Jz,
      x: () => ez,
      y: () => Iz
    });
    var Fz = sz(2724);
    const Wz = {
      Chat: 49,
      UiRequestResponded: 91,
      CodeCollab: 89,
      SetCustomLobbyBlock: 60,
      UpdateBook: 56,
      UpdateBoard: 33,
      UpdateMyCosmetic: 45,
      PlayEmote: 90,
      ReqDiscordReportKey: 9,
      UserReport: 11,
      LobbyReport: 12,
      CustomGameReport: 13,
      IgnoreUser: 34,
      ShopMenuChanged: 26,
      GeneralCookieSet: 72,
      CompleteTask: 69,
      OpenIronChest: 80,
      ChangeIronChestPasskey: 81,
      StopSleeping: 78,
      AnalyticsUpdate: 3,
      UiRequestResp: 15,
      QteResponse: 16,
      ItemBought: 25,
      LeaderboardRequest: 40,
      UpdateNameTag: 53
    };

    function Xz(zz, tz) {
      return !ArrayBuffer.isView(zz) || zz instanceof DataView ? Array.isArray(zz) ? zz.map((zz => tz(zz))) : zz : Array.from(zz, (zz => tz(zz)))
    }

    function Oz(zz) {
      if ("string" !== typeof zz) return zz;
      for (let tz = 0; tz < zz.length; tz++) {
        const sz = zz.charCodeAt(tz);
        if (sz >= 55296 && sz <= 57343) return vz.decode(oz.encode(zz))
      }
      return zz
    }
    const oz = new TextEncoder,
      vz = new TextDecoder;

    function Uz(zz) {
      return zz
    }
    let Kz;

    function uz(zz) {
      return null === zz || "object" !== typeof zz ? zz : [Oz(zz.PO), Oz(zz.rO)]
    }

    function Nz(zz) {
      return null === zz || "object" !== typeof zz ? zz : [Xz(zz.oO, Uz), Xz(zz.SU, Uz)]
    }

    function bz(zz) {
      return null === (tz = zz) || "object" !== typeof tz ? tz : [Oz(tz.RO), Oz(tz.pO)];
      var tz
    }

    function wz(zz) {
      return null === (tz = zz) || "object" !== typeof tz ? tz : [tz.id, tz.ZO];
      var tz
    }

    function Dz(zz) {
      return null === (tz = zz) || "object" !== typeof tz ? tz : [tz.Yt, Oz(tz.xt), tz.Jt, Oz(tz.Zt), tz.jt, tz.yt, tz.qO, Oz(tz.SO), Oz(tz.VO)];
      var tz
    }

    function gz(zz) {
      return null === (tz = zz) || "object" !== typeof tz ? tz : [Xz(tz.AK, Uz), tz.yK];
      var tz
    }

    function Hz(zz) {
      return null === (tz = zz) || "object" !== typeof tz ? tz : [Xz(tz.ao, (zz => Oz(zz))), Oz(tz.qo), tz.Vo];
      var tz
    }

    function Bz(zz) {
      return null === (tz = zz) || "object" !== typeof tz ? tz : [Xz(tz.GO, Uz), Oz(tz.cO), tz.jO];
      var tz
    }

    function Pz(zz) {
      return null === (tz = zz) || "object" !== typeof tz ? tz : [Oz(tz.wF), Oz(tz.DF)];
      var tz
    }

    function rz(zz) {
      return null === (tz = zz) || "object" !== typeof tz ? tz : [Oz(tz.yo)];
      var tz
    }

    function Yz(zz) {
      return Oz(zz)
    }

    function xz(zz) {
      return null === (tz = zz) || "object" !== typeof tz ? tz : [Oz(tz.Uu), Oz(tz.Ku), Oz(tz.PO), Oz(tz.rO)];
      var tz
    }

    function mz(zz) {
      return uz(zz)
    }

    function Jz(zz) {
      return uz(zz)
    }

    function Iz(zz) {
      return null === (tz = zz) || "object" !== typeof tz ? tz : [Oz(tz.fO)];
      var tz
    }

    function Cz(zz) {
      return zz
    }

    function ez(zz) {
      return null === (tz = zz) || "object" !== typeof tz ? tz : [Oz(tz.mO), Oz(tz.JO)];
      var tz
    }

    function Zz(zz) {
      return Oz(zz)
    }

    function Gz(zz) {
      return Nz(zz)
    }

    function Tz(zz) {
      return Nz(zz)
    }

    function cz(zz) {
      return null === (tz = zz) || "object" !== typeof tz ? tz : [Oz(tz.ko)];
      var tz
    }

    function jz(zz) {
      return (Kz ??= (0, Fz.c)().map((zz => zz.name)), Kz).map((tz => {
        return "string" === typeof(sz = zz[tz]) ? Oz(sz) : Xz(sz, Uz);
        var sz
      }))
    }

    function Az(zz) {
      return null === (tz = zz) || "object" !== typeof tz ? tz : [tz.Eo, tz.zv, tz.tv];
      var tz
    }
  },
  9023: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Wz,
      g: () => Xz
    });
    var Fz = sz(8976);
    const Wz = "Air",
      Xz = Object.freeze(new Fz.f(Wz, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  38620: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Xz,
      e: () => oz
    });
    var Fz = sz(321),
      Wz = sz(4101);
    const Xz = new Set(Wz.p),
      Oz = new Map;

    function oz(zz, tz) {
      let sz = Oz.get(tz);
      void 0 === sz && (sz = new Map, Oz.set(tz, sz));
      let Wz = sz.get(zz);
      return void 0 === Wz && (Wz = `${zz}${(0,Fz.B)(tz)}`, sz.set(zz, Wz)), Wz
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);