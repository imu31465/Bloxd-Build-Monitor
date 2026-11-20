export const id = 54;
export const ids = [54];
export const modules = {
  40054: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Wb,
      f: () => fb
    });
    const kb = new TextDecoder;

    function Wb(bb) {
      const cb = new ab(bb),
        sb = cb.value();
      if (cb.at !== bb.length) throw new Error(`msgpack: ${bb.length-cb.at} bytes after the value`);
      return sb
    }
    class ab {
      constructor(bb) {
        this.bytes = bb, this.at = 0, this.depth = 0, this.view = void 0, this.view = new DataView(bb.buffer, bb.byteOffset, bb.byteLength)
      }
      value() {
        const bb = this.u8();
        if (bb <= 127) return bb;
        if (bb >= 224) return bb - 256;
        if (bb >= 128 && bb <= 143) return this.map(15 & bb);
        if (bb >= 144 && bb <= 159) return this.array(15 & bb);
        if (bb >= 160 && bb <= 191) return this.str(31 & bb);
        switch (bb) {
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
            throw new Error(`msgpack: unknown byte 0x${bb.toString(16)} at ${this.at-1}`)
        }
      }
      take(bb) {
        const cb = this.at;
        if (cb + bb > this.bytes.length) throw new Error(`msgpack: ${bb} bytes past the end at ${cb}`);
        return this.at = cb + bb, cb
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
      int64(bb) {
        const cb = this.take(8);
        return bb ? this.view.getBigInt64(cb, !1) : this.view.getBigUint64(cb, !1)
      }
      str(bb) {
        const cb = this.take(bb),
          sb = this.bytes;
        if (bb < 16) {
          let Wb = "";
          for (let ab = cb; ab < cb + bb; ab++) {
            const Tb = sb[ab];
            if (Tb >= 128) return kb.decode(sb.subarray(cb, cb + bb));
            Wb += String.fromCharCode(Tb)
          }
          return Wb
        }
        return kb.decode(sb.subarray(cb, cb + bb))
      }
      bin(bb) {
        const cb = this.take(bb);
        return this.bytes.subarray(cb, cb + bb)
      }
      enter() {
        if (++this.depth > 512) throw new Error("msgpack: nested too deep")
      }
      array(bb) {
        this.enter();
        const cb = [];
        for (let sb = 0; sb < bb; sb++) cb.push(this.value());
        return this.depth--, cb
      }
      map(bb) {
        this.enter();
        const cb = {};
        for (let sb = 0; sb < bb; sb++) {
          const bb = this.value(),
            sb = this.value();
          cb["__proto__" === bb ? "__proto_" : String(bb)] = sb
        }
        return this.depth--, cb
      }
      ext(bb) {
        const cb = this.view.getInt8(this.take(1)),
          sb = this.take(bb);
        if (0 !== cb) {
          if (-1 === cb) {
            if (1 === bb) return new Date(NaN);
            if (4 === bb) return new Date(1e3 * this.view.getUint32(sb, !1));
            if (8 === bb) {
              const bb = this.view.getUint32(sb, !1),
                cb = bb >>> 2,
                kb = 4294967296 * (3 & bb) + this.view.getUint32(sb + 4, !1);
              return new Date(1e3 * kb + cb / 1e6)
            }
            if (12 === bb) {
              const bb = this.view.getUint32(sb, !1),
                cb = 4294967296 * this.view.getInt32(sb + 4, !1) + this.view.getUint32(sb + 8, !1);
              return new Date(1e3 * cb + bb / 1e6)
            }
          }
          throw new Error(`msgpack: ext type ${cb} of ${bb} bytes`)
        }
      }
    }
    const Tb = new TextEncoder,
      Ub = -(2n ** 63n),
      Ib = 2n ** 63n - 1n,
      Hb = 2n ** 64n - 1n;

    function fb(bb) {
      const cb = new Mb;
      return cb.value(bb, 0), cb.bytes()
    }
    class Mb {
      constructor() {
        this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
      }
      bytes() {
        return this.buf.subarray(0, this.at)
      }
      value(bb, cb) {
        if (cb > 512) throw new Error("msgpack: nested too deep");
        switch (typeof bb) {
          case "undefined":
            return this.u8(212), this.u8(0), void this.u8(0);
          case "boolean":
            return void this.u8(bb ? 195 : 194);
          case "number":
            return void this.number(bb);
          case "bigint":
            return void this.bigint(bb);
          case "string":
            return void this.string(bb);
          case "object":
            if (null === bb) this.u8(192);
            else if (bb instanceof Uint8Array) this.head(bb.length, 196, -1, 197, 198), this.room(bb.length), this.buf.set(bb, this.at), this.at += bb.length;
            else if (Array.isArray(bb)) {
              this.head(bb.length, 220, 144, 220, 221);
              for (const sb of bb) this.value(sb, cb + 1)
            } else {
              var sb, kb;
              if (Object.getPrototypeOf(bb) !== Object.prototype && null !== Object.getPrototypeOf(bb)) throw new Error(`msgpack: can't encode a ${null!==(sb=null===(kb=bb.constructor)||void 0===kb?void 0:kb.name)&&void 0!==sb?sb:"object"}`);
              {
                const sb = Object.keys(bb);
                this.head(sb.length, 222, 128, 222, 223);
                for (const kb of sb) this.string(kb), this.value(bb[kb], cb + 1)
              }
            }
            return;
          default:
            throw new Error("msgpack: can't encode a " + typeof bb)
        }
      }
      number(bb) {
        Number.isInteger(bb) && bb >= -2147483648 && bb <= 4294967295 ? bb >= 0 ? bb < 128 ? this.u8(bb) : bb < 256 ? (this.u8(204), this.u8(bb)) : bb < 65536 ? (this.u8(205), this.u16(bb)) : (this.u8(206), this.u32(bb)) : bb >= -32 ? this.u8(bb + 256) : bb >= -128 ? (this.u8(208), this.u8(bb + 256)) : bb >= -32768 ? (this.u8(209), this.u16(bb + 65536)) : (this.u8(210), this.u32(bb >>> 0)) : (this.u8(203), this.room(8), this.view.setFloat64(this.at, bb, !1), this.at += 8)
      }
      bigint(bb) {
        const cb = bb >= Ub && bb <= Ib;
        if (!cb && (bb < 0n || bb > Hb)) throw new Error("msgpack: a BigInt past 64 bits");
        this.u8(cb ? 211 : 207), this.room(8), cb ? this.view.setBigInt64(this.at, bb, !1) : this.view.setBigUint64(this.at, bb, !1), this.at += 8
      }
      string(bb) {
        const cb = Tb.encode(bb);
        this.head(cb.length, 217, 160, 218, 219), this.room(cb.length), this.buf.set(cb, this.at), this.at += cb.length
      }
      head(bb, cb, sb, kb, Wb) {
        sb >= 0 && bb < (160 === sb ? 32 : 16) ? this.u8(sb | bb) : cb !== kb && bb < 256 ? (this.u8(cb), this.u8(bb)) : bb < 65536 ? (this.u8(kb), this.u16(bb)) : (this.u8(Wb), this.u32(bb))
      }
      room(bb) {
        if (this.at + bb <= this.buf.length) return;
        let cb = 2 * this.buf.length;
        for (; cb < this.at + bb;) cb *= 2;
        const sb = new Uint8Array(cb);
        sb.set(this.buf.subarray(0, this.at)), this.buf = sb, this.view = new DataView(sb.buffer)
      }
      u8(bb) {
        this.room(1), this.buf[this.at++] = bb
      }
      u16(bb) {
        this.room(2), this.view.setUint16(this.at, bb, !1), this.at += 2
      }
      u32(bb) {
        this.room(4), this.view.setUint32(this.at, bb, !1), this.at += 4
      }
    }
  },
  42658: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      joinRoom: () => Xb,
      leaveHeldSeat: () => Cb,
      resumeRoom: () => mb
    });
    var kb = sb(195),
      Wb = sb(1770),
      ab = sb(38639),
      Tb = sb(1753),
      Ub = sb(40054),
      Ib = sb(4512),
      Hb = sb(40291),
      fb = sb(40368);
    const Mb = Uint8Array.of(13, ...(0, Ub.f)(kb.h));
    async function Xb(bb, cb) {
      let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      try {
        return await nb(bb, cb, sb)
      } catch (Wb) {
        var kb;
        const ab = await (null === (kb = cb.optionsAfterRefusal) || void 0 === kb ? void 0 : kb.call(cb, Wb));
        if (!ab) throw Wb;
        return nb(bb, {
          ...cb,
          joinOptions: ab
        }, {
          ...sb,
          early: void 0
        })
      }
    }
    async function nb(bb, cb, sb) {
      var kb;
      const {
        signal: ab
      } = sb, Tb = () => (0, fb.k)(cb.endpoint, cb.roomName, cb.joinOptions, sb), {
        early: Ub
      } = sb, Ib = Ub ? null !== (kb = await Ub.take(ab)) && void 0 !== kb ? kb : await Ub.reserveInstead(Tb, ab) : await Tb();
      return (0, Wb.j)(ab), eb(bb, cb.endpoint, Ib, sb, !1)
    }
    async function mb(bb, cb, sb, kb) {
      let ab = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      const Tb = await (0, fb.h)(cb, sb, kb, ab);
      return (0, Wb.j)(ab.signal), eb(bb, cb, Tb, ab, !0)
    }

    function lb(bb, cb, sb) {
      const kb = (0, fb.n)(bb, cb);
      return sb.createSocket ? sb.createSocket(kb) : new WebSocket(kb)
    }

    function Qb(bb, cb, sb) {
      var kb;
      let Wb = !1;
      return (null !== (kb = bb.setTimer) && void 0 !== kb ? kb : (bb, cb) => {
        setTimeout(bb, cb)
      })((() => {
        Wb || cb()
      }), sb), () => {
        Wb = !0
      }
    }
    async function eb(bb, cb, sb, kb, Ub) {
      const {
        signal: fb
      } = kb, Xb = lb(cb, sb, kb);
      let nb = null,
        mb = null;
      const eb = [];
      let Cb = !1,
        Nb = !1;
      const Vb = bb => {
        var cb;
        Nb = !0, null === (cb = mb) || void 0 === cb || cb.reject(new Hb.d("the room socket closed before the resume", "closed", bb.code))
      };
      Ub && Xb.addEventListener("close", Vb);
      const Lb = (bb, cb) => {
          var sb;
          if (bb === (Ub ? Ib.x.Resumed : Ib.x.Activated)) Cb = !0, null === (sb = mb) || void 0 === sb || sb.resolve();
          else if (!Ub || bb !== Ib.x.ResumeRefused && bb !== Ib.x.Activated)
            if (bb === Ib.x.Error) {
              var kb;
              null === (kb = mb) || void 0 === kb || kb.reject(new Hb.d(`the room refused the join (code ${cb})`, "roomError", cb))
            } else {
              var Wb;
              null === (Wb = mb) || void 0 === Wb || Wb.reject(new Hb.d("the room socket closed before the join", "closed", cb))
            }
          else {
            var ab;
            null === (ab = mb) || void 0 === ab || ab.reject(new Hb.o("the core refused the resume: it held no game"))
          }
        },
        ub = bb.onConnection(((bb, cb, sb) => {
          null === nb ? eb.push([bb, cb, sb]) : bb === nb && Lb(cb, sb)
        })),
        Yb = bb.attachSocket(Xb);
      if (null === Yb) throw ub(), new Hb.d("the core could not take the room socket", "attach");
      var hb;
      (nb = Yb, Ub) && (null === (hb = kb.onAttached) || void 0 === hb || hb.call(kb));
      const Jb = Ub ? null : new Tb.e(ab.e, (() => {
        var cb, sb;
        null === (cb = bb.flushNet) || void 0 === cb || cb.call(bb), null === (sb = mb) || void 0 === sb || sb.reject(new ab.i)
      }));
      let gb = !1;
      const Bb = () => {
        if (gb) return;
        if (gb = !0, ub(), Ub && (Xb.removeEventListener("close", Vb), !Cb && !(null !== fb && void 0 !== fb && fb.aborted && (0, Wb.f)(fb) instanceof Hb.r))) return void(Nb || bb.closeSocket(Yb));
        Cb && bb.leaveRoom(Yb) || bb.sendRaw(Yb, Hb.h) ? Qb(kb, (() => {
          bb.closeSocket(Yb)
        }), Hb.e) : bb.closeSocket(Yb)
      };
      try {
        await new Promise(((cb, sb) => {
          const kb = () => {
            var cb;
            Ub && (null === (cb = bb.flushNet) || void 0 === cb || cb.call(bb));
            sb((0, Wb.f)(fb))
          };
          null === fb || void 0 === fb || fb.addEventListener("abort", kb, {
            once: !0
          }), mb = {
            resolve: () => {
              null === fb || void 0 === fb || fb.removeEventListener("abort", kb), cb()
            },
            reject: bb => {
              null === fb || void 0 === fb || fb.removeEventListener("abort", kb), sb(bb)
            }
          };
          for (const [bb, Wb, ab] of eb.splice(0)) bb === nb && Lb(Wb, ab)
        }))
      } catch (tb) {
        throw Bb(), tb
      } finally {
        null === Jb || void 0 === Jb || Jb.stop()
      }
      Ub && Xb.removeEventListener("close", Vb);
      return {
        conn: Yb,
        seat: sb,
        leave: Bb,
        detach: () => {
          gb = !0, ub()
        },
        endJoinAd: () => {
          gb || bb.sendRaw(Yb, Mb)
        }
      }
    }
    async function Cb(bb, cb, sb) {
      let kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      try {
        const Wb = lb(bb, await (0, fb.h)(bb, cb, sb, kb), kb);
        Wb.binaryType = "arraybuffer", await new Promise((bb => {
          const cb = Qb(kb, (() => {
            Wb.close(), bb()
          }), Hb.e);
          Wb.addEventListener("open", (() => {
            Wb.send(Hb.h)
          })), Wb.addEventListener("close", (() => {
            cb(), bb()
          }))
        }))
      } catch (Wb) {
        console.warn("[bloxd-wasm-client] the held seat of a game left while it reconnected couldn't be released", Wb)
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);