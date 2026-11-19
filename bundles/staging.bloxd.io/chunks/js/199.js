export const id = 199;
export const ids = [199];
export const modules = {
  39779: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => tz,
      i: () => Mz,
      l: () => lz
    });
    var Ez = bz(39784),
      nz = bz(4560),
      iz = bz(39792);

    function lz(zz) {
      return zz.payloadKind === nz.bc.Msgpack ? (0, Ez.b)(zz.payload) : void 0
    }

    function Mz(zz, uz) {
      if (uz.payloadKind === nz.bc.Bytes || uz.payloadKind === nz.bc.MsgpackBin) return (0, iz.d)(zz, uz.payload)
    }

    function tz(zz) {
      return null !== zz && "object" === typeof zz
    }
  },
  39798: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => pz,
      d: () => dz,
      h: () => Fz,
      i: () => Oz,
      k: () => Kz
    });
    var Ez = bz(4560),
      nz = bz(39800);
    const iz = new Map,
      lz = new Set,
      Mz = new Set;
    let tz = 0,
      Hz = 0;

    function Oz(zz, uz) {
      let bz = iz.get(zz);
      return bz || (bz = new Set, iz.set(zz, bz)), bz.add(uz), () => {
        bz.delete(uz)
      }
    }

    function pz() {
      return 0 !== tz
    }

    function dz(zz) {
      return lz.add(zz), () => {
        lz.delete(zz)
      }
    }

    function Fz(zz) {
      return Mz.add(zz), () => {
        Mz.delete(zz)
      }
    }
    const Zz = "A raw message listener threw";

    function Rz(zz) {
      let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : lz;
      for (const Ez of uz) try {
        Ez()
      } catch (bz) {
        zz ? (0, nz.p)(bz, Zz) : console.error(Zz, bz)
      }
    }
    const Kz = {
      fire: function(zz) {
        if ("connection" === zz.type) {
          const uz = zz.phase === Ez.B.Activated && zz.conn !== tz && zz.conn > Hz,
            bz = (zz.phase === Ez.B.Left || zz.phase === Ez.B.Closed) && zz.conn === tz;
          return void(uz || bz ? (tz = uz ? zz.conn : 0, Rz(!0)) : zz.phase === Ez.B.Resumed && 0 !== tz && zz.conn > Hz && (tz = zz.conn, Rz(!0, Mz)))
        }
        const uz = iz.get(zz.zM);
        if (uz && zz.conn === tz && 0 !== tz)
          for (const Ez of uz) try {
            Ez(zz)
          } catch (bz) {
            (0, nz.p)(bz, Zz)
          }
      },
      close: function(zz) {
        Hz = Math.max(Hz, zz, tz), 0 !== tz && (tz = 0, Rz(!1))
      }
    }
  },
  39769: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Hz,
      f: () => tz,
      g: () => Mz
    });
    var Ez = bz(1256),
      nz = bz(39740);
    const iz = new TextDecoder,
      lz = new TextEncoder;

    function Mz(zz, uz) {
      const bz = zz.queries.entityName(uz);
      if (bz === nz.Nc) return;
      const lz = zz.memoryData(zz.scratch(), 4 + bz, 4, "entity_name's answer");
      if (!lz) return;
      const Mz = lz.getUint32(0, !0),
        tz = iz.decode(new Uint8Array(lz.buffer, lz.byteOffset + 4, bz));
      return (0, Ez.b)(tz, !1, Mz === nz.Vd ? null : Mz)
    }

    function tz(zz, uz, bz) {
      const Ez = lz.encode(bz);
      if (Ez.length > nz.Lb) return !1;
      const iz = zz.memoryView(Uint8Array, zz.scratch(), Ez.length, "has_effect's name");
      return !!iz && (iz.set(Ez), 1 === zz.queries.hasEffect(uz, Ez.length))
    }

    function Hz(zz, uz, bz, Ez) {
      const lz = zz.queries.blockData(uz, bz, Ez);
      if (lz === nz.Nc) return;
      const Mz = zz.memoryView(Uint8Array, zz.scratch(), lz, "block_data's answer");
      return Mz ? JSON.parse(iz.decode(Mz)) : void 0
    }
  },
  39784: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => nz,
      c: () => Oz
    });
    const Ez = new TextDecoder;

    function nz(zz) {
      const uz = new iz(zz),
        bz = uz.value();
      if (uz.at !== zz.length) throw new Error(`msgpack: ${zz.length-uz.at} bytes after the value`);
      return bz
    }
    class iz {
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
        const uz = this.at;
        if (uz + zz > this.bytes.length) throw new Error(`msgpack: ${zz} bytes past the end at ${uz}`);
        return this.at = uz + zz, uz
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
        const uz = this.take(8);
        return zz ? this.view.getBigInt64(uz, !1) : this.view.getBigUint64(uz, !1)
      }
      str(zz) {
        const uz = this.take(zz),
          bz = this.bytes;
        if (zz < 16) {
          let nz = "";
          for (let iz = uz; iz < uz + zz; iz++) {
            const lz = bz[iz];
            if (lz >= 128) return Ez.decode(bz.subarray(uz, uz + zz));
            nz += String.fromCharCode(lz)
          }
          return nz
        }
        return Ez.decode(bz.subarray(uz, uz + zz))
      }
      bin(zz) {
        const uz = this.take(zz);
        return this.bytes.subarray(uz, uz + zz)
      }
      enter() {
        if (++this.depth > 512) throw new Error("msgpack: nested too deep")
      }
      array(zz) {
        this.enter();
        const uz = [];
        for (let bz = 0; bz < zz; bz++) uz.push(this.value());
        return this.depth--, uz
      }
      map(zz) {
        this.enter();
        const uz = {};
        for (let bz = 0; bz < zz; bz++) {
          const zz = this.value(),
            bz = this.value();
          uz["__proto__" === zz ? "__proto_" : String(zz)] = bz
        }
        return this.depth--, uz
      }
      ext(zz) {
        const uz = this.view.getInt8(this.take(1)),
          bz = this.take(zz);
        if (0 !== uz) {
          if (-1 === uz) {
            if (1 === zz) return new Date(NaN);
            if (4 === zz) return new Date(1e3 * this.view.getUint32(bz, !1));
            if (8 === zz) {
              const zz = this.view.getUint32(bz, !1),
                uz = zz >>> 2,
                Ez = 4294967296 * (3 & zz) + this.view.getUint32(bz + 4, !1);
              return new Date(1e3 * Ez + uz / 1e6)
            }
            if (12 === zz) {
              const zz = this.view.getUint32(bz, !1),
                uz = 4294967296 * this.view.getInt32(bz + 4, !1) + this.view.getUint32(bz + 8, !1);
              return new Date(1e3 * uz + zz / 1e6)
            }
          }
          throw new Error(`msgpack: ext type ${uz} of ${zz} bytes`)
        }
      }
    }
    const lz = new TextEncoder,
      Mz = -(2n ** 63n),
      tz = 2n ** 63n - 1n,
      Hz = 2n ** 64n - 1n;

    function Oz(zz) {
      const uz = new pz;
      return uz.value(zz, 0), uz.bytes()
    }
    class pz {
      constructor() {
        this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
      }
      bytes() {
        return this.buf.subarray(0, this.at)
      }
      value(zz, uz) {
        if (uz > 512) throw new Error("msgpack: nested too deep");
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
              for (const bz of zz) this.value(bz, uz + 1)
            } else {
              var bz, Ez;
              if (Object.getPrototypeOf(zz) !== Object.prototype && null !== Object.getPrototypeOf(zz)) throw new Error(`msgpack: can't encode a ${null!==(bz=null===(Ez=zz.constructor)||void 0===Ez?void 0:Ez.name)&&void 0!==bz?bz:"object"}`);
              {
                const bz = Object.keys(zz);
                this.head(bz.length, 222, 128, 222, 223);
                for (const Ez of bz) this.string(Ez), this.value(zz[Ez], uz + 1)
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
        const uz = zz >= Mz && zz <= tz;
        if (!uz && (zz < 0n || zz > Hz)) throw new Error("msgpack: a BigInt past 64 bits");
        this.u8(uz ? 211 : 207), this.room(8), uz ? this.view.setBigInt64(this.at, zz, !1) : this.view.setBigUint64(this.at, zz, !1), this.at += 8
      }
      string(zz) {
        const uz = lz.encode(zz);
        this.head(uz.length, 217, 160, 218, 219), this.room(uz.length), this.buf.set(uz, this.at), this.at += uz.length
      }
      head(zz, uz, bz, Ez, nz) {
        bz >= 0 && zz < (160 === bz ? 32 : 16) ? this.u8(bz | zz) : uz !== Ez && zz < 256 ? (this.u8(uz), this.u8(zz)) : zz < 65536 ? (this.u8(Ez), this.u16(zz)) : (this.u8(nz), this.u32(zz))
      }
      room(zz) {
        if (this.at + zz <= this.buf.length) return;
        let uz = 2 * this.buf.length;
        for (; uz < this.at + zz;) uz *= 2;
        const bz = new Uint8Array(uz);
        bz.set(this.buf.subarray(0, this.at)), this.buf = bz, this.view = new DataView(bz.buffer)
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
  39792: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => lz
    });
    var Ez = bz(39776);
    const nz = new TextDecoder("utf-8", {
      ignoreBOM: !0
    });
    class iz {
      constructor(zz) {
        this.buf = zz, this.at = 0, this.view = null
      }
      bool() {
        return 0 !== this.u8()
      }
      long() {
        let zz = this.u8(),
          uz = 127 & zz,
          bz = 128;
        for (; 128 & zz;) {
          if (bz > 2 ** 63) throw new RangeError("avro: varint too long");
          zz = this.u8(), uz += (127 & zz) * bz, bz *= 128
        }
        return uz % 2 === 1 ? -(uz + 1) / 2 : uz / 2
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
          uz = this.take(zz),
          bz = uz + zz;
        if (zz <= 32) {
          let zz = "";
          for (let Ez = uz; Ez < bz; Ez++) {
            const iz = this.buf[Ez];
            if (iz >= 128) return nz.decode(this.buf.subarray(uz, bz));
            zz += String.fromCharCode(iz)
          }
          return zz
        }
        return nz.decode(this.buf.subarray(uz, bz))
      }
      bytes() {
        return this.fixed(this.size())
      }
      fixed(zz) {
        const uz = this.take(zz);
        return this.buf.slice(uz, uz + zz)
      }
      index(zz) {
        const uz = this.long();
        if (!(uz >= 0 && uz < zz)) throw new RangeError(`avro: index ${uz} of ${zz}`);
        return uz
      }
      yZ(zz) {
        const uz = [];
        for (let bz = this.long(); 0 !== bz; bz = this.long()) {
          bz = this.block(bz);
          for (let Ez = 0; Ez < bz; Ez++) uz.push(zz(this))
        }
        return uz
      }
      map(zz) {
        const uz = {};
        for (let bz = this.long(); 0 !== bz; bz = this.long()) {
          bz = this.block(bz);
          for (let Ez = 0; Ez < bz; Ez++) {
            uz[this.str()] = zz(this)
          }
        }
        return uz
      }
      end() {
        if (this.at !== this.buf.length) throw new RangeError(`avro: ${this.buf.length-this.at} bytes after the value`)
      }
      block(zz) {
        let uz = zz;
        if (uz < 0 && (uz = -uz, this.long()), uz > this.buf.length - this.at) throw new RangeError(`avro: block of ${uz} items in ${this.buf.length-this.at} bytes`);
        return uz
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
        const uz = this.at;
        if (zz > this.buf.length - uz) throw new RangeError("avro: truncated");
        return this.at = uz + zz, uz
      }
    }

    function lz(zz, uz) {
      const bz = new iz(uz),
        nz = (0, Ez.mb)(zz, bz);
      return bz.end(), nz
    }
  },
  39776: (zz, uz, bz) => {
    bz.d(uz, {
      B: () => lz,
      D: () => Az,
      F: () => nz,
      J: () => Mz,
      L: () => Fz,
      O: () => xz,
      Q: () => vz,
      S: () => oz,
      W: () => Oz,
      Z: () => pz,
      _: () => Jz,
      cb: () => Zz,
      e: () => rz,
      g: () => Kz,
      gb: () => fz,
      h: () => wz,
      kb: () => Rz,
      l: () => Xz,
      lb: () => tz,
      mb: () => Tz,
      o: () => Nz,
      p: () => Ez,
      q: () => iz,
      t: () => sz,
      x: () => dz,
      y: () => Hz
    });
    const Ez = 2,
      nz = 12,
      iz = 27,
      lz = 40,
      Mz = 52,
      tz = 59,
      Hz = 63,
      Oz = 83,
      pz = 84,
      dz = 89,
      Fz = 91,
      Zz = 93,
      Rz = 94,
      Kz = 95,
      wz = 97,
      Xz = 101,
      fz = 102,
      sz = 73,
      rz = 16,
      oz = 86,
      Nz = 60,
      vz = 17,
      xz = 56,
      Jz = 100,
      Az = 81;

    function Tz(zz, uz) {
      switch (zz) {
        case Ez:
          return function(zz) {
            return {
              Yi: Iz(zz),
              ki: zz.float(),
              zl: zz.long()
            }
          }(uz);
        case nz:
          return function(zz) {
            return {
              zz: Vz(zz),
              bz: Vz(zz)
            }
          }(uz);
        case iz:
          return function(zz) {
            return {
              Ru: zz.bool(),
              Ku: Vz(zz)
            }
          }(uz);
        case lz:
          return uz.str();
        case Mz:
          return function(zz) {
            return {
              id: zz.long(),
              Lz: lu(zz)
            }
          }(uz);
        case tz:
        case Hz:
          return uz.str();
        case Oz:
        case pz:
          return uz.long();
        case dz:
          return function(zz) {
            return {
              RE: zz.long(),
              KE: zz.bool(),
              wE: zz.float()
            }
          }(uz);
        case Fz:
          return uz.long();
        case Zz:
          return function(zz) {
            return {
              ib: zz.bool(),
              Mb: Hu(zz)
            }
          }(uz);
        case Rz:
          return function(zz) {
            return {
              id: zz.str(),
              position: tu(zz),
              Zi: Ou(zz),
              style: gz(zz),
              Ki: zz.bool()
            }
          }(uz);
        case Kz:
          return function(zz) {
            return {
              id: Vz(zz)
            }
          }(uz);
        case wz:
          return function(zz) {
            return {
              ru: zz.long(),
              ou: zz.str(),
              Nu: nu(zz),
              vu: nu(zz),
              xu: Vz(zz),
              Ju: Vz(zz),
              Au: Vz(zz),
              Tu: Vz(zz),
              Lu: Vz(zz),
              Pu: nu(zz),
              Gu: nu(zz),
              au: Vz(zz),
              Vu: Vz(zz),
              mu: Vz(zz)
            }
          }(uz);
        case Xz:
          return uz.str();
        case fz:
          return uz.long();
        case sz:
          return function(zz) {
            return {
              EE: zz.long(),
              nE: zz.str(),
              iE: zz.float()
            }
          }(uz);
        case rz:
          return function(zz) {
            return {
              tl: zz.bool(),
              Hl: Vz(zz),
              Ol: zz.str(),
              pl: du(zz),
              dl: du(zz),
              Fl: zz.bool(),
              Zl: zz.long(),
              Rl: Fu(zz)
            }
          }(uz);
        case oz:
          return function(zz) {
            return {
              Un: Vz(zz)
            }
          }(uz);
        case Nz:
          return function(zz) {
            return {
              tu: zz.str(),
              Hu: zz.str(),
              Ou: Zu(zz),
              pu: zz.str(),
              Fu: Yz(zz),
              Zu: zz.float()
            }
          }(uz);
        case vz:
          return function(zz) {
            return {
              tu: zz.str(),
              Hu: zz.str(),
              Ou: Zu(zz)
            }
          }(uz);
        case xz:
          return function(zz) {
            return zz.yZ(Ru)
          }(uz);
        case Jz:
          return function(zz) {
            return {
              XE: wu(zz),
              NE: Dz(zz)
            }
          }(uz);
        case Az:
          return function(zz) {
            return {
              vE: zz.bool(),
              xE: Vz(zz),
              JE: fu(zz),
              TE: mu(zz)
            }
          }(uz);
        default:
          throw new Error(`no reader for to-client message ${zz}`)
      }
    }

    function Lz(zz) {
      return {
        entityName: zz.str()
      }
    }

    function Pz(zz) {
      const uz = zz.index(4);
      return 0 === uz ? zz.str() : 1 === uz ? zz.long() : 2 === uz ? zz.bool() : Lz(zz)
    }

    function Gz(zz) {
      return 0 === zz.index(2) ? null : function(zz) {
        return zz.map(Pz)
      }(zz)
    }

    function az(zz) {
      return {
        translationKey: zz.str(),
        params: Gz(zz)
      }
    }

    function Vz(zz) {
      return 0 === zz.index(2) ? null : zz.str()
    }

    function mz(zz) {
      return 0 === zz.index(2) ? null : function(zz) {
        return {
          color: Vz(zz),
          colour: Vz(zz),
          fontSize: Vz(zz)
        }
      }(zz)
    }

    function qz(zz) {
      return {
        icon: zz.str(),
        style: mz(zz)
      }
    }

    function hz(zz) {
      const uz = zz.index(3);
      return 0 === uz ? {
        string: zz.str()
      } : 1 === uz ? {
        styledEntityName: Lz(zz)
      } : {
        styledTranslatedText: az(zz)
      }
    }

    function Uz(zz) {
      const uz = zz.index(3);
      return 0 === uz ? null : 1 === uz ? zz.str() : zz.long()
    }

    function cz(zz) {
      return 0 === zz.index(2) ? null : zz.float()
    }

    function gz(zz) {
      return 0 === zz.index(2) ? null : function(zz) {
        return {
          color: Vz(zz),
          colour: Vz(zz),
          fontWeight: Uz(zz),
          fontStyle: Vz(zz),
          fontSize: Vz(zz),
          opacity: cz(zz)
        }
      }(zz)
    }

    function Sz(zz) {
      return {
        str: hz(zz),
        style: gz(zz),
        clickableUrl: Vz(zz)
      }
    }

    function yz(zz) {
      return zz.str()
    }

    function Dz(zz) {
      return zz.yZ(yz)
    }

    function Qz(zz) {
      return 0 === zz.index(2) ? null : Dz(zz)
    }

    function Wz(zz) {
      return {
        type: zz.str(),
        progress: zz.float(),
        width: Vz(zz),
        height: Vz(zz),
        colours: Qz(zz),
        backgroundColour: Vz(zz)
      }
    }

    function ez(zz) {
      return {
        type: zz.str(),
        action: zz.str(),
        style: gz(zz)
      }
    }

    function jz(zz) {
      const uz = zz.index(7);
      return 0 === uz ? {
        string: zz.str()
      } : 1 === uz ? {
        entityName: Lz(zz)
      } : 2 === uz ? {
        translatedText: az(zz)
      } : 3 === uz ? {
        styledIcon: qz(zz)
      } : 4 === uz ? {
        Uz: Sz(zz)
      } : 5 === uz ? {
        styledProgressBar: Wz(zz)
      } : {
        styledKeyBinding: ez(zz)
      }
    }

    function Iz(zz) {
      return zz.yZ(jz)
    }
    const Bz = ["progressBar", "timedClick", "gravityBar", "precisionBar", "rhythmClick"];

    function Cz(zz) {
      return Bz[zz.index(5)]
    }

    function Yz(zz) {
      return 0 === zz.index(2) ? null : zz.double()
    }

    function kz(zz) {
      return 0 === zz.index(2) ? null : function(zz) {
        return {
          Vz: Yz(zz),
          mz: zz.double(),
          qz: zz.double(),
          hz: zz.bool(),
          description: Iz(zz),
          Sz: zz.str(),
          scale: Yz(zz),
          rotation: Yz(zz)
        }
      }(zz)
    }

    function zu(zz) {
      return 0 === zz.index(2) ? null : zz.bool()
    }

    function uu(zz) {
      return 0 === zz.index(2) ? null : function(zz) {
        return {
          Dz: zz.double(),
          icon: zz.str(),
          label: Iz(zz),
          Qz: zz.bool(),
          scale: Yz(zz),
          rotation: Yz(zz),
          Wz: zu(zz)
        }
      }(zz)
    }

    function bu(zz) {
      return 0 === zz.index(2) ? null : function(zz) {
        return {
          Vz: Yz(zz),
          jz: zz.double(),
          Iz: zz.double(),
          Bz: zz.double(),
          gravity: zz.double(),
          Cz: zz.double(),
          Yz: zz.double(),
          kz: zz.double(),
          hz: zz.bool(),
          description: Iz(zz),
          icon: Vz(zz)
        }
      }(zz)
    }

    function Eu(zz) {
      return 0 === zz.index(2) ? null : function(zz) {
        return {
          speed: zz.double(),
          uu: zz.double(),
          label: Iz(zz),
          icon: Vz(zz),
          scale: Yz(zz),
          rotation: Yz(zz)
        }
      }(zz)
    }

    function nu(zz) {
      return 0 === zz.index(2) ? null : zz.long()
    }

    function iu(zz) {
      return 0 === zz.index(2) ? null : function(zz) {
        return {
          nu: zz.long(),
          iu: zz.double(),
          lu: zz.double(),
          Mu: nu(zz),
          label: Iz(zz),
          icon: Vz(zz)
        }
      }(zz)
    }

    function lu(zz) {
      return {
        type: Cz(zz),
        progressBar: kz(zz),
        timedClick: uu(zz),
        gravityBar: bu(zz),
        precisionBar: Eu(zz),
        rhythmClick: iu(zz)
      }
    }

    function Mu(zz) {
      return zz.float()
    }

    function tu(zz) {
      return zz.yZ(Mu)
    }

    function Hu(zz) {
      return 0 === zz.index(2) ? null : tu(zz)
    }

    function Ou(zz) {
      return 0 === zz.index(2) ? null : Iz(zz)
    }

    function pu(zz) {
      return zz.long()
    }

    function du(zz) {
      return 0 === zz.index(2) ? null : function(zz) {
        return zz.yZ(pu)
      }(zz)
    }

    function Fu(zz) {
      return 0 === zz.index(2) ? null : function(zz) {
        return {
          qb: zz.str(),
          Db: zz.long()
        }
      }(zz)
    }

    function Zu(zz) {
      const uz = zz.index(3);
      return 0 === uz ? null : 1 === uz ? zz.str() : az(zz)
    }

    function Ru(zz) {
      return {
        Yb: zz.str(),
        kb: zz.str(),
        zE: zz.str()
      }
    }

    function Ku(zz) {
      return {
        fE: zz.str(),
        sE: Vz(zz),
        rE: Vz(zz),
        oE: Dz(zz)
      }
    }

    function wu(zz) {
      return zz.yZ(Ku)
    }

    function Xu(zz) {
      return {
        AE: zz.str(),
        x: zz.long(),
        y: zz.long(),
        z: zz.long()
      }
    }

    function fu(zz) {
      return zz.yZ(Xu)
    }

    function su(zz) {
      return 0 === zz.index(2) ? null : function(zz) {
        return {
          CE: zz.float(),
          YE: zz.long(),
          kE: zz.long()
        }
      }(zz)
    }

    function ru(zz) {
      return {
        blockName: zz.str(),
        SE: zz.bool(),
        yE: zz.bool(),
        DE: zz.bool(),
        QE: zz.float(),
        WE: zz.float(),
        eE: zz.long(),
        jE: su(zz)
      }
    }

    function ou(zz) {
      return 0 === zz.index(2) ? null : function(zz) {
        return zz.yZ(ru)
      }(zz)
    }

    function Nu(zz) {
      return {
        UE: zz.str(),
        cE: ou(zz)
      }
    }

    function vu(zz) {
      return {
        blockName: zz.str(),
        frequency: zz.float()
      }
    }

    function xu(zz) {
      return zz.yZ(vu)
    }

    function Ju(zz) {
      return {
        En: zz.str(),
        nn: zz.str(),
        frequency: zz.float(),
        Mn: xu(zz)
      }
    }

    function Au(zz) {
      return zz.yZ(Ju)
    }

    function Tu(zz) {
      return {
        blockName: zz.str(),
        radius: zz.long(),
        dn: zz.long(),
        GE: zz.long(),
        aE: zz.long(),
        Fn: zz.float()
      }
    }

    function Lu(zz) {
      return zz.yZ(Tu)
    }

    function Pu(zz) {
      return {
        GE: zz.long(),
        aE: zz.long(),
        VE: zz.long(),
        mE: zz.bool(),
        qE: Nu(zz),
        zn: Au(zz),
        Hn: Lu(zz)
      }
    }

    function Gu(zz) {
      return zz.yZ(Pu)
    }

    function au(zz) {
      return 0 === zz.index(2) ? null : function(zz) {
        return {
          name: zz.str(),
          Xn: Vz(zz)
        }
      }(zz)
    }

    function Vu(zz) {
      return 0 === zz.index(2) ? null : function(zz) {
        return {
          terrain: au(zz),
          fn: Lu(zz)
        }
      }(zz)
    }

    function mu(zz) {
      return 0 === zz.index(2) ? null : function(zz) {
        return {
          layers: Gu(zz),
          Zn: Vu(zz)
        }
      }(zz)
    }
  },
  39758: (zz, uz, bz) => {
    bz.d(uz, {
      $: () => oz,
      A: () => sz,
      B: () => rz,
      F: () => Kz,
      J: () => Jz,
      M: () => Gz,
      O: () => Zz,
      R: () => Vz,
      S: () => Xz,
      U: () => wz,
      Y: () => fz,
      d: () => nz,
      e: () => az,
      f: () => Pz,
      h: () => Fz,
      l: () => Rz,
      p: () => Tz,
      r: () => vz,
      t: () => Az,
      v: () => xz,
      w: () => Nz,
      y: () => Lz
    });
    var Ez = bz(2748);
    const nz = {
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

    function iz(zz, uz) {
      return !ArrayBuffer.isView(zz) || zz instanceof DataView ? Array.isArray(zz) ? zz.map((zz => uz(zz))) : zz : Array.from(zz, (zz => uz(zz)))
    }

    function lz(zz) {
      if ("string" !== typeof zz) return zz;
      for (let uz = 0; uz < zz.length; uz++) {
        const bz = zz.charCodeAt(uz);
        if (bz >= 55296 && bz <= 57343) return tz.decode(Mz.encode(zz))
      }
      return zz
    }
    const Mz = new TextEncoder,
      tz = new TextDecoder;

    function Hz(zz) {
      return zz
    }
    let Oz;

    function pz(zz) {
      return null === zz || "object" !== typeof zz ? zz : [lz(zz.Nl), lz(zz.vl)]
    }

    function dz(zz) {
      return null === zz || "object" !== typeof zz ? zz : [iz(zz.pl, Hz), iz(zz.jH, Hz)]
    }

    function Fz(zz) {
      return null === (uz = zz) || "object" !== typeof uz ? uz : [lz(uz.zM), lz(uz.uM)];
      var uz
    }

    function Zz(zz) {
      return null === (uz = zz) || "object" !== typeof uz ? uz : [uz.id, uz.Vl];
      var uz
    }

    function Rz(zz) {
      return null === (uz = zz) || "object" !== typeof uz ? uz : [uz.ru, lz(uz.ou), uz.Nu, lz(uz.Ju), uz.Pu, uz.Gu, uz.Cl, lz(uz.Yl), lz(uz.kl)];
      var uz
    }

    function Kz(zz) {
      return null === (uz = zz) || "object" !== typeof uz ? uz : [iz(uz.qO, Hz), uz.hO];
      var uz
    }

    function wz(zz) {
      return null === (uz = zz) || "object" !== typeof uz ? uz : [iz(uz.UM, (zz => lz(zz))), lz(uz.cM), uz.gM];
      var uz
    }

    function Xz(zz) {
      return null === (uz = zz) || "object" !== typeof uz ? uz : [iz(uz.ql, Hz), lz(uz.hl), uz.Ul];
      var uz
    }

    function fz(zz) {
      return null === (uz = zz) || "object" !== typeof uz ? uz : [lz(uz.kb), lz(uz.zE)];
      var uz
    }

    function sz(zz) {
      return null === (uz = zz) || "object" !== typeof uz ? uz : [lz(uz.GM)];
      var uz
    }

    function rz(zz) {
      return lz(zz)
    }

    function oz(zz) {
      return null === (uz = zz) || "object" !== typeof uz ? uz : [lz(uz.dp), lz(uz.Fp), lz(uz.Nl), lz(uz.vl)];
      var uz
    }

    function Nz(zz) {
      return pz(zz)
    }

    function vz(zz) {
      return pz(zz)
    }

    function xz(zz) {
      return null === (uz = zz) || "object" !== typeof uz ? uz : [lz(uz.bM)];
      var uz
    }

    function Jz(zz) {
      return zz
    }

    function Az(zz) {
      return null === (uz = zz) || "object" !== typeof uz ? uz : [lz(uz.Al), lz(uz.Tl)];
      var uz
    }

    function Tz(zz) {
      return lz(zz)
    }

    function Lz(zz) {
      return dz(zz)
    }

    function Pz(zz) {
      return dz(zz)
    }

    function Gz(zz) {
      return null === (uz = zz) || "object" !== typeof uz ? uz : [lz(uz.qM)];
      var uz
    }

    function az(zz) {
      return (Oz ??= (0, Ez.f)().map((zz => zz.name)), Oz).map((uz => {
        return "string" === typeof(bz = zz[uz]) ? lz(bz) : iz(bz, Hz);
        var bz
      }))
    }

    function Vz(zz) {
      return null === (uz = zz) || "object" !== typeof uz ? uz : [uz.QM, uz.WM, uz.eM];
      var uz
    }
  },
  9165: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => nz,
      c: () => iz
    });
    var Ez = bz(9125);
    const nz = "Air",
      iz = Object.freeze(new Ez.f(nz, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  38584: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => iz,
      f: () => Mz
    });
    var Ez = bz(328),
      nz = bz(4238);
    const iz = new Set(nz.r),
      lz = new Map;

    function Mz(zz, uz) {
      let bz = lz.get(uz);
      void 0 === bz && (bz = new Map, lz.set(uz, bz));
      let nz = bz.get(zz);
      return void 0 === nz && (nz = `${zz}${(0,Ez.C)(uz)}`, bz.set(zz, nz)), nz
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);