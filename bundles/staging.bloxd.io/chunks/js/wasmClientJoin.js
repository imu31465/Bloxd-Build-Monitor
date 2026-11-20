export const id = 54;
export const ids = [54];
export const modules = {
  40051: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => tk,
      g: () => sk
    });
    const Rk = new TextDecoder;

    function tk(kk) {
      const Fk = new ak(kk),
        Bk = Fk.value();
      if (Fk.at !== kk.length) throw new Error(`msgpack: ${kk.length-Fk.at} bytes after the value`);
      return Bk
    }
    class ak {
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
          Bk = this.bytes;
        if (kk < 16) {
          let tk = "";
          for (let ak = Fk; ak < Fk + kk; ak++) {
            const Xk = Bk[ak];
            if (Xk >= 128) return Rk.decode(Bk.subarray(Fk, Fk + kk));
            tk += String.fromCharCode(Xk)
          }
          return tk
        }
        return Rk.decode(Bk.subarray(Fk, Fk + kk))
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
        for (let Bk = 0; Bk < kk; Bk++) Fk.push(this.value());
        return this.depth--, Fk
      }
      map(kk) {
        this.enter();
        const Fk = {};
        for (let Bk = 0; Bk < kk; Bk++) {
          const kk = this.value(),
            Bk = this.value();
          Fk["__proto__" === kk ? "__proto_" : String(kk)] = Bk
        }
        return this.depth--, Fk
      }
      ext(kk) {
        const Fk = this.view.getInt8(this.take(1)),
          Bk = this.take(kk);
        if (0 !== Fk) {
          if (-1 === Fk) {
            if (1 === kk) return new Date(NaN);
            if (4 === kk) return new Date(1e3 * this.view.getUint32(Bk, !1));
            if (8 === kk) {
              const kk = this.view.getUint32(Bk, !1),
                Fk = kk >>> 2,
                Rk = 4294967296 * (3 & kk) + this.view.getUint32(Bk + 4, !1);
              return new Date(1e3 * Rk + Fk / 1e6)
            }
            if (12 === kk) {
              const kk = this.view.getUint32(Bk, !1),
                Fk = 4294967296 * this.view.getInt32(Bk + 4, !1) + this.view.getUint32(Bk + 8, !1);
              return new Date(1e3 * Fk + kk / 1e6)
            }
          }
          throw new Error(`msgpack: ext type ${Fk} of ${kk} bytes`)
        }
      }
    }
    const Xk = new TextEncoder,
      bk = -(2n ** 63n),
      wk = 2n ** 63n - 1n,
      dk = 2n ** 64n - 1n;

    function sk(kk) {
      const Fk = new Vk;
      return Fk.value(kk, 0), Fk.bytes()
    }
    class Vk {
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
              for (const Bk of kk) this.value(Bk, Fk + 1)
            } else {
              var Bk, Rk;
              if (Object.getPrototypeOf(kk) !== Object.prototype && null !== Object.getPrototypeOf(kk)) throw new Error(`msgpack: can't encode a ${null!==(Bk=null===(Rk=kk.constructor)||void 0===Rk?void 0:Rk.name)&&void 0!==Bk?Bk:"object"}`);
              {
                const Bk = Object.keys(kk);
                this.head(Bk.length, 222, 128, 222, 223);
                for (const Rk of Bk) this.string(Rk), this.value(kk[Rk], Fk + 1)
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
        const Fk = kk >= bk && kk <= wk;
        if (!Fk && (kk < 0n || kk > dk)) throw new Error("msgpack: a BigInt past 64 bits");
        this.u8(Fk ? 211 : 207), this.room(8), Fk ? this.view.setBigInt64(this.at, kk, !1) : this.view.setBigUint64(this.at, kk, !1), this.at += 8
      }
      string(kk) {
        const Fk = Xk.encode(kk);
        this.head(Fk.length, 217, 160, 218, 219), this.room(Fk.length), this.buf.set(Fk, this.at), this.at += Fk.length
      }
      head(kk, Fk, Bk, Rk, tk) {
        Bk >= 0 && kk < (160 === Bk ? 32 : 16) ? this.u8(Bk | kk) : Fk !== Rk && kk < 256 ? (this.u8(Fk), this.u8(kk)) : kk < 65536 ? (this.u8(Rk), this.u16(kk)) : (this.u8(tk), this.u32(kk))
      }
      room(kk) {
        if (this.at + kk <= this.buf.length) return;
        let Fk = 2 * this.buf.length;
        for (; Fk < this.at + kk;) Fk *= 2;
        const Bk = new Uint8Array(Fk);
        Bk.set(this.buf.subarray(0, this.at)), this.buf = Bk, this.view = new DataView(Bk.buffer)
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
  42754: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      joinRoom: () => Jk,
      leaveHeldSeat: () => Wk,
      resumeRoom: () => ek
    });
    var Rk = Bk(152),
      tk = Bk(1733),
      ak = Bk(38708),
      Xk = Bk(1698),
      bk = Bk(40051),
      wk = Bk(4524),
      dk = Bk(40284),
      sk = Bk(40352);
    const Vk = Uint8Array.of(13, ...(0, bk.g)(Rk.e));
    async function Jk(kk, Fk) {
      let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      try {
        return await Ak(kk, Fk, Bk)
      } catch (tk) {
        var Rk;
        const ak = await (null === (Rk = Fk.optionsAfterRefusal) || void 0 === Rk ? void 0 : Rk.call(Fk, tk));
        if (!ak) throw tk;
        return Ak(kk, {
          ...Fk,
          joinOptions: ak
        }, {
          ...Bk,
          early: void 0
        })
      }
    }
    async function Ak(kk, Fk, Bk) {
      var Rk;
      const {
        signal: ak
      } = Bk, Xk = () => (0, sk.h)(Fk.endpoint, Fk.roomName, Fk.joinOptions, Bk), {
        early: bk
      } = Bk, wk = bk ? null !== (Rk = await bk.take(ak)) && void 0 !== Rk ? Rk : await bk.reserveInstead(Xk, ak) : await Xk();
      return (0, tk.k)(ak), mk(kk, Fk.endpoint, wk, Bk, !1)
    }
    async function ek(kk, Fk, Bk, Rk) {
      let ak = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      const Xk = await (0, sk.d)(Fk, Bk, Rk, ak);
      return (0, tk.k)(ak.signal), mk(kk, Fk, Xk, ak, !0)
    }

    function yk(kk, Fk, Bk) {
      const Rk = (0, sk.i)(kk, Fk);
      return Bk.createSocket ? Bk.createSocket(Rk) : new WebSocket(Rk)
    }

    function fk(kk, Fk, Bk) {
      var Rk;
      let tk = !1;
      return (null !== (Rk = kk.setTimer) && void 0 !== Rk ? Rk : (kk, Fk) => {
        setTimeout(kk, Fk)
      })((() => {
        tk || Fk()
      }), Bk), () => {
        tk = !0
      }
    }
    async function mk(kk, Fk, Bk, Rk, bk) {
      const {
        signal: sk
      } = Rk, Jk = yk(Fk, Bk, Rk);
      let Ak = null,
        ek = null;
      const mk = [];
      let Wk = !1,
        vk = !1;
      const ik = kk => {
        var Fk;
        vk = !0, null === (Fk = ek) || void 0 === Fk || Fk.reject(new dk.e("the room socket closed before the resume", "closed", kk.code))
      };
      bk && Jk.addEventListener("close", ik);
      const Yk = (kk, Fk) => {
          var Bk;
          if (kk === (bk ? wk.y.Resumed : wk.y.Activated)) Wk = !0, null === (Bk = ek) || void 0 === Bk || Bk.resolve();
          else if (!bk || kk !== wk.y.ResumeRefused && kk !== wk.y.Activated)
            if (kk === wk.y.Error) {
              var Rk;
              null === (Rk = ek) || void 0 === Rk || Rk.reject(new dk.e(`the room refused the join (code ${Fk})`, "roomError", Fk))
            } else {
              var tk;
              null === (tk = ek) || void 0 === tk || tk.reject(new dk.e("the room socket closed before the join", "closed", Fk))
            }
          else {
            var ak;
            null === (ak = ek) || void 0 === ak || ak.reject(new dk.r("the core refused the resume: it held no game"))
          }
        },
        Lk = kk.onConnection(((kk, Fk, Bk) => {
          null === Ak ? mk.push([kk, Fk, Bk]) : kk === Ak && Yk(Fk, Bk)
        })),
        Ok = kk.attachSocket(Jk);
      if (null === Ok) throw Lk(), new dk.e("the core could not take the room socket", "attach");
      var Ek;
      (Ak = Ok, bk) && (null === (Ek = Rk.onAttached) || void 0 === Ek || Ek.call(Rk));
      const Sk = bk ? null : new Xk.e(ak.d, (() => {
        var Fk, Bk;
        null === (Fk = kk.flushNet) || void 0 === Fk || Fk.call(kk), null === (Bk = ek) || void 0 === Bk || Bk.reject(new ak.e)
      }));
      let Nk = !1;
      const Hk = () => {
        if (Nk) return;
        if (Nk = !0, Lk(), bk && (Jk.removeEventListener("close", ik), !Wk && !(null !== sk && void 0 !== sk && sk.aborted && (0, tk.e)(sk) instanceof dk.t))) return void(vk || kk.closeSocket(Ok));
        Wk && kk.leaveRoom(Ok) || kk.sendRaw(Ok, dk.k) ? fk(Rk, (() => {
          kk.closeSocket(Ok)
        }), dk.i) : kk.closeSocket(Ok)
      };
      try {
        await new Promise(((Fk, Bk) => {
          const Rk = () => {
            var Fk;
            bk && (null === (Fk = kk.flushNet) || void 0 === Fk || Fk.call(kk));
            Bk((0, tk.e)(sk))
          };
          null === sk || void 0 === sk || sk.addEventListener("abort", Rk, {
            once: !0
          }), ek = {
            resolve: () => {
              null === sk || void 0 === sk || sk.removeEventListener("abort", Rk), Fk()
            },
            reject: kk => {
              null === sk || void 0 === sk || sk.removeEventListener("abort", Rk), Bk(kk)
            }
          };
          for (const [kk, tk, ak] of mk.splice(0)) kk === Ak && Yk(tk, ak)
        }))
      } catch (uk) {
        throw Hk(), uk
      } finally {
        null === Sk || void 0 === Sk || Sk.stop()
      }
      bk && Jk.removeEventListener("close", ik);
      return {
        conn: Ok,
        seat: Bk,
        leave: Hk,
        detach: () => {
          Nk = !0, Lk()
        },
        endJoinAd: () => {
          Nk || kk.sendRaw(Ok, Vk)
        }
      }
    }
    async function Wk(kk, Fk, Bk) {
      let Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      try {
        const tk = yk(kk, await (0, sk.d)(kk, Fk, Bk, Rk), Rk);
        tk.binaryType = "arraybuffer", await new Promise((kk => {
          const Fk = fk(Rk, (() => {
            tk.close(), kk()
          }), dk.i);
          tk.addEventListener("open", (() => {
            tk.send(dk.k)
          })), tk.addEventListener("close", (() => {
            Fk(), kk()
          }))
        }))
      } catch (tk) {
        console.warn("[bloxd-wasm-client] the held seat of a game left while it reconnected couldn't be released", tk)
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);