export const id = 57;
export const ids = [57];
export const modules = {
  40201: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => fk,
      c: () => Mk
    });
    const Dk = new TextDecoder;

    function fk(kk) {
      const ek = new Sk(kk),
        ik = ek.value();
      if (ek.at !== kk.length) throw new Error(`msgpack: ${kk.length-ek.at} bytes after the value`);
      return ik
    }
    class Sk {
      constructor(kk) {
        this.bytes = kk, this.at = 0, this.depth = 0, this.view = void 0, this.view = new DataView(kk.buffer, kk.byteOffset, kk.byteLength)
      }
      value() {
        const kk = this.u8();
        if (kk <= 127) return kk;
        if (kk >= 224) return kk - 256;
        if (kk >= 128 && kk <= 143) return this.map(15 & kk);
        if (kk >= 144 && kk <= 159) return this.array(15 & kk);
        if (kk >= 160 && kk <= 191) return this.str(31 & kk);
        switch (kk) {
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
            throw new Error(`msgpack: unknown byte 0x${kk.toString(16)} at ${this.at-1}`)
        }
      }
      take(kk) {
        const ek = this.at;
        if (ek + kk > this.bytes.length) throw new Error(`msgpack: ${kk} bytes past the end at ${ek}`);
        return this.at = ek + kk, ek
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
      int64(kk) {
        const ek = this.take(8);
        return kk ? this.view.getBigInt64(ek, !1) : this.view.getBigUint64(ek, !1)
      }
      str(kk) {
        const ek = this.take(kk),
          ik = this.bytes;
        if (kk < 16) {
          let fk = "";
          for (let Sk = ek; Sk < ek + kk; Sk++) {
            const bk = ik[Sk];
            if (bk >= 128) return Dk.decode(ik.subarray(ek, ek + kk));
            fk += String.fromCharCode(bk)
          }
          return fk
        }
        return Dk.decode(ik.subarray(ek, ek + kk))
      }
      bin(kk) {
        const ek = this.take(kk);
        return this.bytes.subarray(ek, ek + kk)
      }
      enter() {
        if (++this.depth > 512) throw new Error("msgpack: nested too deep")
      }
      array(kk) {
        this.enter();
        const ek = [];
        for (let ik = 0; ik < kk; ik++) ek.push(this.value());
        return this.depth--, ek
      }
      map(kk) {
        this.enter();
        const ek = {};
        for (let ik = 0; ik < kk; ik++) {
          const kk = this.value(),
            ik = this.value();
          ek["__proto__" === kk ? "__proto_" : String(kk)] = ik
        }
        return this.depth--, ek
      }
      ext(kk) {
        const ek = this.view.getInt8(this.take(1)),
          ik = this.take(kk);
        if (0 !== ek) {
          if (-1 === ek) {
            if (1 === kk) return new Date(NaN);
            if (4 === kk) return new Date(1e3 * this.view.getUint32(ik, !1));
            if (8 === kk) {
              const kk = this.view.getUint32(ik, !1),
                ek = kk >>> 2,
                Dk = 4294967296 * (3 & kk) + this.view.getUint32(ik + 4, !1);
              return new Date(1e3 * Dk + ek / 1e6)
            }
            if (12 === kk) {
              const kk = this.view.getUint32(ik, !1),
                ek = 4294967296 * this.view.getInt32(ik + 4, !1) + this.view.getUint32(ik + 8, !1);
              return new Date(1e3 * ek + kk / 1e6)
            }
          }
          throw new Error(`msgpack: ext type ${ek} of ${kk} bytes`)
        }
      }
    }
    const bk = new TextEncoder,
      rk = -(2n ** 63n),
      Pk = 2n ** 63n - 1n,
      mk = 2n ** 64n - 1n;

    function Mk(kk) {
      const ek = new Kk;
      return ek.value(kk, 0), ek.bytes()
    }
    class Kk {
      constructor() {
        this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
      }
      bytes() {
        return this.buf.subarray(0, this.at)
      }
      value(kk, ek) {
        if (ek > 512) throw new Error("msgpack: nested too deep");
        switch (typeof kk) {
          case "undefined":
            return this.u8(212), this.u8(0), void this.u8(0);
          case "boolean":
            return void this.u8(kk ? 195 : 194);
          case "number":
            return void this.number(kk);
          case "bigint":
            return void this.bigint(kk);
          case "string":
            return void this.string(kk);
          case "object":
            if (null === kk) this.u8(192);
            else if (kk instanceof Uint8Array) this.head(kk.length, 196, -1, 197, 198), this.room(kk.length), this.buf.set(kk, this.at), this.at += kk.length;
            else if (Array.isArray(kk)) {
              this.head(kk.length, 220, 144, 220, 221);
              for (const ik of kk) this.value(ik, ek + 1)
            } else {
              var ik, Dk;
              if (Object.getPrototypeOf(kk) !== Object.prototype && null !== Object.getPrototypeOf(kk)) throw new Error(`msgpack: can't encode a ${null!==(ik=null===(Dk=kk.constructor)||void 0===Dk?void 0:Dk.name)&&void 0!==ik?ik:"object"}`);
              {
                const ik = Object.keys(kk);
                this.head(ik.length, 222, 128, 222, 223);
                for (const Dk of ik) this.string(Dk), this.value(kk[Dk], ek + 1)
              }
            }
            return;
          default:
            throw new Error("msgpack: can't encode a " + typeof kk)
        }
      }
      number(kk) {
        Number.isInteger(kk) && kk >= -2147483648 && kk <= 4294967295 ? kk >= 0 ? kk < 128 ? this.u8(kk) : kk < 256 ? (this.u8(204), this.u8(kk)) : kk < 65536 ? (this.u8(205), this.u16(kk)) : (this.u8(206), this.u32(kk)) : kk >= -32 ? this.u8(kk + 256) : kk >= -128 ? (this.u8(208), this.u8(kk + 256)) : kk >= -32768 ? (this.u8(209), this.u16(kk + 65536)) : (this.u8(210), this.u32(kk >>> 0)) : (this.u8(203), this.room(8), this.view.setFloat64(this.at, kk, !1), this.at += 8)
      }
      bigint(kk) {
        const ek = kk >= rk && kk <= Pk;
        if (!ek && (kk < 0n || kk > mk)) throw new Error("msgpack: a BigInt past 64 bits");
        this.u8(ek ? 211 : 207), this.room(8), ek ? this.view.setBigInt64(this.at, kk, !1) : this.view.setBigUint64(this.at, kk, !1), this.at += 8
      }
      string(kk) {
        const ek = bk.encode(kk);
        this.head(ek.length, 217, 160, 218, 219), this.room(ek.length), this.buf.set(ek, this.at), this.at += ek.length
      }
      head(kk, ek, ik, Dk, fk) {
        ik >= 0 && kk < (160 === ik ? 32 : 16) ? this.u8(ik | kk) : ek !== Dk && kk < 256 ? (this.u8(ek), this.u8(kk)) : kk < 65536 ? (this.u8(Dk), this.u16(kk)) : (this.u8(fk), this.u32(kk))
      }
      room(kk) {
        if (this.at + kk <= this.buf.length) return;
        let ek = 2 * this.buf.length;
        for (; ek < this.at + kk;) ek *= 2;
        const ik = new Uint8Array(ek);
        ik.set(this.buf.subarray(0, this.at)), this.buf = ik, this.view = new DataView(ik.buffer)
      }
      u8(kk) {
        this.room(1), this.buf[this.at++] = kk
      }
      u16(kk) {
        this.room(2), this.view.setUint16(this.at, kk, !1), this.at += 2
      }
      u32(kk) {
        this.room(4), this.view.setUint32(this.at, kk, !1), this.at += 4
      }
    }
  },
  50536: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      joinRoom: () => Kk,
      leaveHeldSeat: () => lk,
      resumeRoom: () => nk
    });
    var Dk = ik(165),
      fk = ik(1187),
      Sk = ik(36011),
      bk = ik(40201),
      rk = ik(4735),
      Pk = ik(40266),
      mk = ik(40499);
    const Mk = Uint8Array.of(13, ...(0, bk.c)(Dk.g));
    async function Kk(kk, ek) {
      let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      try {
        return await xk(kk, ek, ik)
      } catch (fk) {
        var Dk;
        const Sk = await (null === (Dk = ek.optionsAfterRefusal) || void 0 === Dk ? void 0 : Dk.call(ek, fk));
        if (!Sk) throw fk;
        return xk(kk, {
          ...ek,
          joinOptions: Sk
        }, {
          ...ik,
          early: void 0
        })
      }
    }
    async function xk(kk, ek, ik) {
      var Dk;
      const {
        signal: Sk
      } = ik, bk = () => (0, mk.h)(ek.endpoint, ek.roomName, ek.joinOptions, ik), {
        early: rk
      } = ik, Pk = rk ? null !== (Dk = await rk.take(Sk)) && void 0 !== Dk ? Dk : await rk.reserveInstead(bk, Sk) : await bk();
      return (0, fk.q)(Sk), wk(kk, ek.endpoint, Pk, ik, !1)
    }
    async function nk(kk, ek, ik, Dk) {
      let Sk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      const bk = await (0, mk.f)(ek, ik, Dk, Sk);
      return (0, fk.q)(Sk.signal), wk(kk, ek, bk, Sk, !0)
    }

    function Uk(kk, ek, ik) {
      const Dk = (0, mk.j)(kk, ek);
      return ik.createSocket ? ik.createSocket(Dk) : new WebSocket(Dk)
    }

    function Hk(kk, ek, ik) {
      var Dk;
      let fk = !1;
      return (null !== (Dk = kk.setTimer) && void 0 !== Dk ? Dk : (kk, ek) => {
        setTimeout(kk, ek)
      })((() => {
        fk || ek()
      }), ik), () => {
        fk = !0
      }
    }
    async function wk(kk, ek, ik, Dk, bk) {
      const {
        signal: mk
      } = Dk, Kk = Uk(ek, ik, Dk);
      let xk = !1,
        nk = null,
        wk = null;
      const lk = [];
      let pk = !1,
        yk = !1;
      const Yk = kk => {
        var ek;
        yk = !0, null === (ek = wk) || void 0 === ek || ek.reject(new Pk.d("the room socket closed before the resume", "closed", kk.code))
      };
      bk && Kk.addEventListener("close", Yk);
      const Lk = (kk, ek) => {
          var ik;
          if (kk === (bk ? rk.K.Resumed : rk.K.Activated)) pk = !0, null === (ik = wk) || void 0 === ik || ik.resolve();
          else if (!bk || kk !== rk.K.ResumeRefused && kk !== rk.K.Activated)
            if (kk === rk.K.Error) {
              var Dk;
              null === (Dk = wk) || void 0 === Dk || Dk.reject(new Pk.d(`the room refused the join (code ${ek})`, "roomError", ek))
            } else {
              var fk;
              null === (fk = wk) || void 0 === fk || fk.reject(new Pk.d("the room socket closed before the join", "closed", ek, null, xk))
            }
          else {
            var Sk;
            null === (Sk = wk) || void 0 === Sk || Sk.reject(new Pk.o("the core refused the resume: it held no game"))
          }
        },
        Ck = kk.onConnection(((kk, ek, ik) => {
          null === nk ? lk.push([kk, ek, ik]) : kk === nk && Lk(ek, ik)
        })),
        Ak = kk.attachSocket(Kk);
      if (null === Ak) throw Ck(), new Pk.d("the core could not take the room socket", "attach");
      var jk;
      (nk = Ak, bk) && (null === (jk = Dk.onAttached) || void 0 === jk || jk.call(Dk));
      const sk = bk ? null : new Sk.b((() => {
        var ek, ik;
        null === (ek = kk.flushNet) || void 0 === ek || ek.call(kk), null === (ik = wk) || void 0 === ik || ik.reject(new Sk.e(xk ? "socket" : "socket_unopened"))
      }));
      Kk.addEventListener("open", (() => {
        xk = !0, null === sk || void 0 === sk || sk.socketOpened()
      }), {
        once: !0
      });
      let dk = !1;
      const Vk = () => {
        if (dk) return;
        if (dk = !0, Ck(), bk && (Kk.removeEventListener("close", Yk), !pk && !(null !== mk && void 0 !== mk && mk.aborted && (0, fk.i)(mk) instanceof Pk.s))) return void(yk || kk.closeSocket(Ak));
        pk && kk.leaveRoom(Ak) || kk.sendRaw(Ak, Pk.h) ? Hk(Dk, (() => {
          kk.closeSocket(Ak)
        }), Pk.e) : kk.closeSocket(Ak)
      };
      try {
        await new Promise(((ek, ik) => {
          const Dk = () => {
            var ek;
            bk && (null === (ek = kk.flushNet) || void 0 === ek || ek.call(kk));
            ik((0, fk.i)(mk))
          };
          null === mk || void 0 === mk || mk.addEventListener("abort", Dk, {
            once: !0
          }), wk = {
            resolve: () => {
              null === mk || void 0 === mk || mk.removeEventListener("abort", Dk), ek()
            },
            reject: kk => {
              null === mk || void 0 === mk || mk.removeEventListener("abort", Dk), ik(kk)
            }
          };
          for (const [kk, fk, Sk] of lk.splice(0)) kk === nk && Lk(fk, Sk)
        })), null === sk || void 0 === sk || sk.answered()
      } catch (Fk) {
        throw Vk(), Fk
      } finally {
        null === sk || void 0 === sk || sk.stop()
      }
      bk && Kk.removeEventListener("close", Yk);
      return {
        conn: Ak,
        seat: ik,
        leave: Vk,
        detach: () => {
          dk = !0, Ck()
        },
        endJoinAd: () => !dk && kk.sendRaw(Ak, Mk)
      }
    }
    async function lk(kk, ek, ik) {
      let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      try {
        const fk = Uk(kk, await (0, mk.f)(kk, ek, ik, Dk), Dk);
        fk.binaryType = "arraybuffer", await new Promise((kk => {
          const ek = Hk(Dk, (() => {
            fk.close(), kk()
          }), Pk.e);
          fk.addEventListener("open", (() => {
            fk.send(Pk.h)
          })), fk.addEventListener("close", (() => {
            ek(), kk()
          }))
        }))
      } catch (fk) {
        console.warn("[bloxd-wasm-client] the held seat of a game left while it reconnected couldn't be released", fk)
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);