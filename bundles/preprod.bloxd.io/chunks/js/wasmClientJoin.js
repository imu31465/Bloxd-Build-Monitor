export const id = 54;
export const ids = [54];
export const modules = {
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
  42579: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      joinRoom: () => dz,
      leaveHeldSeat: () => Xz,
      resumeRoom: () => Zz
    });
    var Ez = bz(158),
      nz = bz(1768),
      iz = bz(38429),
      lz = bz(1732),
      Mz = bz(39784),
      tz = bz(4560),
      Hz = bz(40052),
      Oz = bz(40137);
    const pz = Uint8Array.of(13, ...(0, Mz.c)(Ez.f));
    async function dz(zz, uz) {
      let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      try {
        return await Fz(zz, uz, bz)
      } catch (nz) {
        var Ez;
        const iz = await (null === (Ez = uz.optionsAfterRefusal) || void 0 === Ez ? void 0 : Ez.call(uz, nz));
        if (!iz) throw nz;
        return Fz(zz, {
          ...uz,
          joinOptions: iz
        }, {
          ...bz,
          early: void 0
        })
      }
    }
    async function Fz(zz, uz, bz) {
      var Ez;
      const {
        signal: iz
      } = bz, lz = () => (0, Oz.j)(uz.endpoint, uz.roomName, uz.joinOptions, bz), {
        early: Mz
      } = bz, tz = Mz ? null !== (Ez = await Mz.take(iz)) && void 0 !== Ez ? Ez : await Mz.reserveInstead(lz, iz) : await lz();
      return (0, nz.l)(iz), wz(zz, uz.endpoint, tz, bz, !1)
    }
    async function Zz(zz, uz, bz, Ez) {
      let iz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      const lz = await (0, Oz.f)(uz, bz, Ez, iz);
      return (0, nz.l)(iz.signal), wz(zz, uz, lz, iz, !0)
    }

    function Rz(zz, uz, bz) {
      const Ez = (0, Oz.m)(zz, uz);
      return bz.createSocket ? bz.createSocket(Ez) : new WebSocket(Ez)
    }

    function Kz(zz, uz, bz) {
      var Ez;
      let nz = !1;
      return (null !== (Ez = zz.setTimer) && void 0 !== Ez ? Ez : (zz, uz) => {
        setTimeout(zz, uz)
      })((() => {
        nz || uz()
      }), bz), () => {
        nz = !0
      }
    }
    async function wz(zz, uz, bz, Ez, Mz) {
      const {
        signal: Oz
      } = Ez, dz = Rz(uz, bz, Ez);
      let Fz = null,
        Zz = null;
      const wz = [];
      let Xz = !1,
        fz = !1;
      const sz = zz => {
        var uz;
        fz = !0, null === (uz = Zz) || void 0 === uz || uz.reject(new Hz.d("the room socket closed before the resume", "closed", zz.code))
      };
      Mz && dz.addEventListener("close", sz);
      const rz = (zz, uz) => {
          var bz;
          if (zz === (Mz ? tz.B.Resumed : tz.B.Activated)) Xz = !0, null === (bz = Zz) || void 0 === bz || bz.resolve();
          else if (!Mz || zz !== tz.B.ResumeRefused && zz !== tz.B.Activated)
            if (zz === tz.B.Error) {
              var Ez;
              null === (Ez = Zz) || void 0 === Ez || Ez.reject(new Hz.d(`the room refused the join (code ${uz})`, "roomError", uz))
            } else {
              var nz;
              null === (nz = Zz) || void 0 === nz || nz.reject(new Hz.d("the room socket closed before the join", "closed", uz))
            }
          else {
            var iz;
            null === (iz = Zz) || void 0 === iz || iz.reject(new Hz.s("the core refused the resume: it held no game"))
          }
        },
        oz = zz.onConnection(((zz, uz, bz) => {
          null === Fz ? wz.push([zz, uz, bz]) : zz === Fz && rz(uz, bz)
        })),
        Nz = zz.attachSocket(dz);
      if (null === Nz) throw oz(), new Hz.d("the core could not take the room socket", "attach");
      var vz;
      (Fz = Nz, Mz) && (null === (vz = Ez.onAttached) || void 0 === vz || vz.call(Ez));
      const xz = Mz ? null : new lz.d(iz.c, (() => {
        var uz, bz;
        null === (uz = zz.flushNet) || void 0 === uz || uz.call(zz), null === (bz = Zz) || void 0 === bz || bz.reject(new iz.d)
      }));
      let Jz = !1;
      const Az = () => {
        if (Jz) return;
        if (Jz = !0, oz(), Mz && (dz.removeEventListener("close", sz), !Xz && !(null !== Oz && void 0 !== Oz && Oz.aborted && (0, nz.g)(Oz) instanceof Hz.u))) return void(fz || zz.closeSocket(Nz));
        Xz && zz.leaveRoom(Nz) || zz.sendRaw(Nz, Hz.o) ? Kz(Ez, (() => {
          zz.closeSocket(Nz)
        }), Hz.h) : zz.closeSocket(Nz)
      };
      try {
        await new Promise(((uz, bz) => {
          const Ez = () => {
            var uz;
            Mz && (null === (uz = zz.flushNet) || void 0 === uz || uz.call(zz));
            bz((0, nz.g)(Oz))
          };
          null === Oz || void 0 === Oz || Oz.addEventListener("abort", Ez, {
            once: !0
          }), Zz = {
            resolve: () => {
              null === Oz || void 0 === Oz || Oz.removeEventListener("abort", Ez), uz()
            },
            reject: zz => {
              null === Oz || void 0 === Oz || Oz.removeEventListener("abort", Ez), bz(zz)
            }
          };
          for (const [zz, nz, iz] of wz.splice(0)) zz === Fz && rz(nz, iz)
        }))
      } catch (Tz) {
        throw Az(), Tz
      } finally {
        null === xz || void 0 === xz || xz.stop()
      }
      Mz && dz.removeEventListener("close", sz);
      return {
        conn: Nz,
        seat: bz,
        leave: Az,
        detach: () => {
          Jz = !0, oz()
        },
        endJoinAd: () => {
          Jz || zz.sendRaw(Nz, pz)
        }
      }
    }
    async function Xz(zz, uz, bz) {
      let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      try {
        const nz = Rz(zz, await (0, Oz.f)(zz, uz, bz, Ez), Ez);
        nz.binaryType = "arraybuffer", await new Promise((zz => {
          const uz = Kz(Ez, (() => {
            nz.close(), zz()
          }), Hz.h);
          nz.addEventListener("open", (() => {
            nz.send(Hz.o)
          })), nz.addEventListener("close", (() => {
            uz(), zz()
          }))
        }))
      } catch (nz) {
        console.warn("[bloxd-wasm-client] the held seat of a game left while it reconnected couldn't be released", nz)
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);