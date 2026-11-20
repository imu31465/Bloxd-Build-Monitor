export const id = 54;
export const ids = [54];
export const modules = {
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
  42354: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      joinRoom: () => Nz,
      leaveHeldSeat: () => Bz,
      resumeRoom: () => wz
    });
    var Fz = sz(161),
      Wz = sz(1750),
      Xz = sz(38480),
      Oz = sz(1715),
      oz = sz(39754),
      vz = sz(4432),
      Uz = sz(39959),
      Kz = sz(40029);
    const uz = Uint8Array.of(13, ...(0, oz.f)(Fz.i));
    async function Nz(zz, tz) {
      let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      try {
        return await bz(zz, tz, sz)
      } catch (Wz) {
        var Fz;
        const Xz = await (null === (Fz = tz.optionsAfterRefusal) || void 0 === Fz ? void 0 : Fz.call(tz, Wz));
        if (!Xz) throw Wz;
        return bz(zz, {
          ...tz,
          joinOptions: Xz
        }, {
          ...sz,
          early: void 0
        })
      }
    }
    async function bz(zz, tz, sz) {
      var Fz;
      const {
        signal: Xz
      } = sz, Oz = () => (0, Kz.j)(tz.endpoint, tz.roomName, tz.joinOptions, sz), {
        early: oz
      } = sz, vz = oz ? null !== (Fz = await oz.take(Xz)) && void 0 !== Fz ? Fz : await oz.reserveInstead(Oz, Xz) : await Oz();
      return (0, Wz.n)(Xz), Hz(zz, tz.endpoint, vz, sz, !1)
    }
    async function wz(zz, tz, sz, Fz) {
      let Xz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      const Oz = await (0, Kz.g)(tz, sz, Fz, Xz);
      return (0, Wz.n)(Xz.signal), Hz(zz, tz, Oz, Xz, !0)
    }

    function Dz(zz, tz, sz) {
      const Fz = (0, Kz.n)(zz, tz);
      return sz.createSocket ? sz.createSocket(Fz) : new WebSocket(Fz)
    }

    function gz(zz, tz, sz) {
      var Fz;
      let Wz = !1;
      return (null !== (Fz = zz.setTimer) && void 0 !== Fz ? Fz : (zz, tz) => {
        setTimeout(zz, tz)
      })((() => {
        Wz || tz()
      }), sz), () => {
        Wz = !0
      }
    }
    async function Hz(zz, tz, sz, Fz, oz) {
      const {
        signal: Kz
      } = Fz, Nz = Dz(tz, sz, Fz);
      let bz = null,
        wz = null;
      const Hz = [];
      let Bz = !1,
        Pz = !1;
      const rz = zz => {
        var tz;
        Pz = !0, null === (tz = wz) || void 0 === tz || tz.reject(new Uz.d("the room socket closed before the resume", "closed", zz.code))
      };
      oz && Nz.addEventListener("close", rz);
      const Yz = (zz, tz) => {
          var sz;
          if (zz === (oz ? vz.F.Resumed : vz.F.Activated)) Bz = !0, null === (sz = wz) || void 0 === sz || sz.resolve();
          else if (!oz || zz !== vz.F.ResumeRefused && zz !== vz.F.Activated)
            if (zz === vz.F.Error) {
              var Fz;
              null === (Fz = wz) || void 0 === Fz || Fz.reject(new Uz.d(`the room refused the join (code ${tz})`, "roomError", tz))
            } else {
              var Wz;
              null === (Wz = wz) || void 0 === Wz || Wz.reject(new Uz.d("the room socket closed before the join", "closed", tz))
            }
          else {
            var Xz;
            null === (Xz = wz) || void 0 === Xz || Xz.reject(new Uz.p("the core refused the resume: it held no game"))
          }
        },
        xz = zz.onConnection(((zz, tz, sz) => {
          null === bz ? Hz.push([zz, tz, sz]) : zz === bz && Yz(tz, sz)
        })),
        mz = zz.attachSocket(Nz);
      if (null === mz) throw xz(), new Uz.d("the core could not take the room socket", "attach");
      var Jz;
      (bz = mz, oz) && (null === (Jz = Fz.onAttached) || void 0 === Jz || Jz.call(Fz));
      const Iz = oz ? null : new Oz.b(Xz.c, (() => {
        var tz, sz;
        null === (tz = zz.flushNet) || void 0 === tz || tz.call(zz), null === (sz = wz) || void 0 === sz || sz.reject(new Xz.e)
      }));
      let Cz = !1;
      const ez = () => {
        if (Cz) return;
        if (Cz = !0, xz(), oz && (Nz.removeEventListener("close", rz), !Bz && !(null !== Kz && void 0 !== Kz && Kz.aborted && (0, Wz.f)(Kz) instanceof Uz.t))) return void(Pz || zz.closeSocket(mz));
        Bz && zz.leaveRoom(mz) || zz.sendRaw(mz, Uz.i) ? gz(Fz, (() => {
          zz.closeSocket(mz)
        }), Uz.g) : zz.closeSocket(mz)
      };
      try {
        await new Promise(((tz, sz) => {
          const Fz = () => {
            var tz;
            oz && (null === (tz = zz.flushNet) || void 0 === tz || tz.call(zz));
            sz((0, Wz.f)(Kz))
          };
          null === Kz || void 0 === Kz || Kz.addEventListener("abort", Fz, {
            once: !0
          }), wz = {
            resolve: () => {
              null === Kz || void 0 === Kz || Kz.removeEventListener("abort", Fz), tz()
            },
            reject: zz => {
              null === Kz || void 0 === Kz || Kz.removeEventListener("abort", Fz), sz(zz)
            }
          };
          for (const [zz, Wz, Xz] of Hz.splice(0)) zz === bz && Yz(Wz, Xz)
        }))
      } catch (Zz) {
        throw ez(), Zz
      } finally {
        null === Iz || void 0 === Iz || Iz.stop()
      }
      oz && Nz.removeEventListener("close", rz);
      return {
        conn: mz,
        seat: sz,
        leave: ez,
        detach: () => {
          Cz = !0, xz()
        },
        endJoinAd: () => {
          Cz || zz.sendRaw(mz, uz)
        }
      }
    }
    async function Bz(zz, tz, sz) {
      let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      try {
        const Wz = Dz(zz, await (0, Kz.g)(zz, tz, sz, Fz), Fz);
        Wz.binaryType = "arraybuffer", await new Promise((zz => {
          const tz = gz(Fz, (() => {
            Wz.close(), zz()
          }), Uz.g);
          Wz.addEventListener("open", (() => {
            Wz.send(Uz.i)
          })), Wz.addEventListener("close", (() => {
            tz(), zz()
          }))
        }))
      } catch (Wz) {
        console.warn("[bloxd-wasm-client] the held seat of a game left while it reconnected couldn't be released", Wz)
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);