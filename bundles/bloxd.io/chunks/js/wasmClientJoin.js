export const id = 57;
export const ids = [57];
export const modules = {
  40623: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Tk,
      c: () => Lk
    });
    const Xk = new TextDecoder;

    function Tk(kk) {
      const Fk = new ik(kk),
        Ik = Fk.value();
      if (Fk.at !== kk.length) throw new Error(`msgpack: ${kk.length-Fk.at} bytes after the value`);
      return Ik
    }
    class ik {
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
        const Fk = this.at;
        if (Fk + kk > this.bytes.length) throw new Error(`msgpack: ${kk} bytes past the end at ${Fk}`);
        return this.at = Fk + kk, Fk
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
        const Fk = this.take(8);
        return kk ? this.view.getBigInt64(Fk, !1) : this.view.getBigUint64(Fk, !1)
      }
      str(kk) {
        const Fk = this.take(kk),
          Ik = this.bytes;
        if (kk < 16) {
          let Tk = "";
          for (let ik = Fk; ik < Fk + kk; ik++) {
            const yk = Ik[ik];
            if (yk >= 128) return Xk.decode(Ik.subarray(Fk, Fk + kk));
            Tk += String.fromCharCode(yk)
          }
          return Tk
        }
        return Xk.decode(Ik.subarray(Fk, Fk + kk))
      }
      bin(kk) {
        const Fk = this.take(kk);
        return this.bytes.subarray(Fk, Fk + kk)
      }
      enter() {
        if (++this.depth > 512) throw new Error("msgpack: nested too deep")
      }
      array(kk) {
        this.enter();
        const Fk = [];
        for (let Ik = 0; Ik < kk; Ik++) Fk.push(this.value());
        return this.depth--, Fk
      }
      map(kk) {
        this.enter();
        const Fk = {};
        for (let Ik = 0; Ik < kk; Ik++) {
          const kk = this.value(),
            Ik = this.value();
          Fk["__proto__" === kk ? "__proto_" : String(kk)] = Ik
        }
        return this.depth--, Fk
      }
      ext(kk) {
        const Fk = this.view.getInt8(this.take(1)),
          Ik = this.take(kk);
        if (0 !== Fk) {
          if (-1 === Fk) {
            if (1 === kk) return new Date(NaN);
            if (4 === kk) return new Date(1e3 * this.view.getUint32(Ik, !1));
            if (8 === kk) {
              const kk = this.view.getUint32(Ik, !1),
                Fk = kk >>> 2,
                Xk = 4294967296 * (3 & kk) + this.view.getUint32(Ik + 4, !1);
              return new Date(1e3 * Xk + Fk / 1e6)
            }
            if (12 === kk) {
              const kk = this.view.getUint32(Ik, !1),
                Fk = 4294967296 * this.view.getInt32(Ik + 4, !1) + this.view.getUint32(Ik + 8, !1);
              return new Date(1e3 * Fk + kk / 1e6)
            }
          }
          throw new Error(`msgpack: ext type ${Fk} of ${kk} bytes`)
        }
      }
    }
    const yk = new TextEncoder,
      lk = -(2n ** 63n),
      ak = 2n ** 63n - 1n,
      qk = 2n ** 64n - 1n;

    function Lk(kk) {
      const Fk = new tk;
      return Fk.value(kk, 0), Fk.bytes()
    }
    class tk {
      constructor() {
        this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
      }
      bytes() {
        return this.buf.subarray(0, this.at)
      }
      value(kk, Fk) {
        if (Fk > 512) throw new Error("msgpack: nested too deep");
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
              for (const Ik of kk) this.value(Ik, Fk + 1)
            } else {
              var Ik, Xk;
              if (Object.getPrototypeOf(kk) !== Object.prototype && null !== Object.getPrototypeOf(kk)) throw new Error(`msgpack: can't encode a ${null!==(Ik=null===(Xk=kk.constructor)||void 0===Xk?void 0:Xk.name)&&void 0!==Ik?Ik:"object"}`);
              {
                const Ik = Object.keys(kk);
                this.head(Ik.length, 222, 128, 222, 223);
                for (const Xk of Ik) this.string(Xk), this.value(kk[Xk], Fk + 1)
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
        const Fk = kk >= lk && kk <= ak;
        if (!Fk && (kk < 0n || kk > qk)) throw new Error("msgpack: a BigInt past 64 bits");
        this.u8(Fk ? 211 : 207), this.room(8), Fk ? this.view.setBigInt64(this.at, kk, !1) : this.view.setBigUint64(this.at, kk, !1), this.at += 8
      }
      string(kk) {
        const Fk = yk.encode(kk);
        this.head(Fk.length, 217, 160, 218, 219), this.room(Fk.length), this.buf.set(Fk, this.at), this.at += Fk.length
      }
      head(kk, Fk, Ik, Xk, Tk) {
        Ik >= 0 && kk < (160 === Ik ? 32 : 16) ? this.u8(Ik | kk) : Fk !== Xk && kk < 256 ? (this.u8(Fk), this.u8(kk)) : kk < 65536 ? (this.u8(Xk), this.u16(kk)) : (this.u8(Tk), this.u32(kk))
      }
      room(kk) {
        if (this.at + kk <= this.buf.length) return;
        let Fk = 2 * this.buf.length;
        for (; Fk < this.at + kk;) Fk *= 2;
        const Ik = new Uint8Array(Fk);
        Ik.set(this.buf.subarray(0, this.at)), this.buf = Ik, this.view = new DataView(Ik.buffer)
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
  50964: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      joinRoom: () => tk,
      leaveHeldSeat: () => Jk,
      resumeRoom: () => jk
    });
    var Xk = Ik(149),
      Tk = Ik(1199),
      ik = Ik(36486),
      yk = Ik(40623),
      lk = Ik(4797),
      ak = Ik(40689),
      qk = Ik(40917);
    const Lk = Uint8Array.of(13, ...(0, yk.c)(Xk.f));
    async function tk(kk, Fk) {
      let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      try {
        return await Zk(kk, Fk, Ik)
      } catch (Tk) {
        var Xk;
        const ik = await (null === (Xk = Fk.optionsAfterRefusal) || void 0 === Xk ? void 0 : Xk.call(Fk, Tk));
        if (!ik) throw Tk;
        return Zk(kk, {
          ...Fk,
          joinOptions: ik
        }, {
          ...Ik,
          early: void 0
        })
      }
    }
    async function Zk(kk, Fk, Ik) {
      var Xk;
      const {
        signal: ik
      } = Ik, yk = () => (0, qk.f)(Fk.endpoint, Fk.roomName, Fk.joinOptions, Ik), {
        early: lk
      } = Ik, ak = lk ? null !== (Xk = await lk.take(ik)) && void 0 !== Xk ? Xk : await lk.reserveInstead(yk, ik) : await yk();
      return (0, Tk.m)(ik), Hk(kk, Fk.endpoint, ak, Ik, !1)
    }
    async function jk(kk, Fk, Ik, Xk) {
      let ik = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      const yk = await (0, qk.e)(Fk, Ik, Xk, ik);
      return (0, Tk.m)(ik.signal), Hk(kk, Fk, yk, ik, !0)
    }

    function ek(kk, Fk, Ik) {
      const Xk = (0, qk.i)(kk, Fk);
      return Ik.createSocket ? Ik.createSocket(Xk) : new WebSocket(Xk)
    }

    function wk(kk, Fk, Ik) {
      var Xk;
      let Tk = !1;
      return (null !== (Xk = kk.setTimer) && void 0 !== Xk ? Xk : (kk, Fk) => {
        setTimeout(kk, Fk)
      })((() => {
        Tk || Fk()
      }), Ik), () => {
        Tk = !0
      }
    }
    async function Hk(kk, Fk, Ik, Xk, yk) {
      const {
        signal: qk
      } = Xk, tk = ek(Fk, Ik, Xk);
      let Zk = !1,
        jk = null,
        Hk = null;
      const Jk = [];
      let xk = !1,
        Pk = !1;
      const Kk = kk => {
        var Fk;
        Pk = !0, null === (Fk = Hk) || void 0 === Fk || Fk.reject(new ak.b("the room socket closed before the resume", "closed", kk.code))
      };
      yk && tk.addEventListener("close", Kk);
      const Qk = (kk, Fk) => {
          var Ik;
          if (kk === (yk ? lk.I.Resumed : lk.I.Activated)) xk = !0, null === (Ik = Hk) || void 0 === Ik || Ik.resolve();
          else if (!yk || kk !== lk.I.ResumeRefused && kk !== lk.I.Activated)
            if (kk === lk.I.Error) {
              var Xk;
              null === (Xk = Hk) || void 0 === Xk || Xk.reject(new ak.b(`the room refused the join (code ${Fk})`, "roomError", Fk))
            } else {
              var Tk;
              null === (Tk = Hk) || void 0 === Tk || Tk.reject(new ak.b("the room socket closed before the join", "closed", Fk, null, Zk))
            }
          else {
            var ik;
            null === (ik = Hk) || void 0 === ik || ik.reject(new ak.m("the core refused the resume: it held no game"))
          }
        },
        sk = kk.onConnection(((kk, Fk, Ik) => {
          null === jk ? Jk.push([kk, Fk, Ik]) : kk === jk && Qk(Fk, Ik)
        })),
        Vk = kk.attachSocket(tk);
      if (null === Vk) throw sk(), new ak.b("the core could not take the room socket", "attach");
      var zk;
      (jk = Vk, yk) && (null === (zk = Xk.onAttached) || void 0 === zk || zk.call(Xk));
      const Sk = yk ? null : new ik.e((() => {
        var Fk, Ik;
        null === (Fk = kk.flushNet) || void 0 === Fk || Fk.call(kk), null === (Ik = Hk) || void 0 === Ik || Ik.reject(new ik.f(Zk ? "socket" : "socket_unopened"))
      }));
      tk.addEventListener("open", (() => {
        Zk = !0, null === Sk || void 0 === Sk || Sk.socketOpened()
      }), {
        once: !0
      });
      let vk = !1;
      const Ek = () => {
        if (vk) return;
        if (vk = !0, sk(), yk && (tk.removeEventListener("close", Kk), !xk && !(null !== qk && void 0 !== qk && qk.aborted && (0, Tk.e)(qk) instanceof ak.o))) return void(Pk || kk.closeSocket(Vk));
        xk && kk.leaveRoom(Vk) || kk.sendRaw(Vk, ak.i) ? wk(Xk, (() => {
          kk.closeSocket(Vk)
        }), ak.f) : kk.closeSocket(Vk)
      };
      try {
        await new Promise(((Fk, Ik) => {
          const Xk = () => {
            var Fk;
            yk && (null === (Fk = kk.flushNet) || void 0 === Fk || Fk.call(kk));
            Ik((0, Tk.e)(qk))
          };
          null === qk || void 0 === qk || qk.addEventListener("abort", Xk, {
            once: !0
          }), Hk = {
            resolve: () => {
              null === qk || void 0 === qk || qk.removeEventListener("abort", Xk), Fk()
            },
            reject: kk => {
              null === qk || void 0 === qk || qk.removeEventListener("abort", Xk), Ik(kk)
            }
          };
          for (const [kk, Tk, ik] of Jk.splice(0)) kk === jk && Qk(Tk, ik)
        })), null === Sk || void 0 === Sk || Sk.answered()
      } catch (Ok) {
        throw Ek(), Ok
      } finally {
        null === Sk || void 0 === Sk || Sk.stop()
      }
      yk && tk.removeEventListener("close", Kk);
      return {
        conn: Vk,
        seat: Ik,
        leave: Ek,
        detach: () => {
          vk = !0, sk()
        },
        endJoinAd: () => !vk && kk.sendRaw(Vk, Lk)
      }
    }
    async function Jk(kk, Fk, Ik) {
      let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      try {
        const Tk = ek(kk, await (0, qk.e)(kk, Fk, Ik, Xk), Xk);
        Tk.binaryType = "arraybuffer", await new Promise((kk => {
          const Fk = wk(Xk, (() => {
            Tk.close(), kk()
          }), ak.f);
          Tk.addEventListener("open", (() => {
            Tk.send(ak.i)
          })), Tk.addEventListener("close", (() => {
            Fk(), kk()
          }))
        }))
      } catch (Tk) {
        console.warn("[bloxd-wasm-client] the held seat of a game left while it reconnected couldn't be released", Tk)
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);