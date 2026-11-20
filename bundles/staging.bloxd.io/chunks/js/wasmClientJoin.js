export const id = 54;
export const ids = [54];
export const modules = {
  39751: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Mb,
      d: () => vb
    });
    const Ab = new TextDecoder;

    function Mb(bb) {
      const ab = new Tb(bb),
        Ub = ab.value();
      if (ab.at !== bb.length) throw new Error(`msgpack: ${bb.length-ab.at} bytes after the value`);
      return Ub
    }
    class Tb {
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
        const ab = this.at;
        if (ab + bb > this.bytes.length) throw new Error(`msgpack: ${bb} bytes past the end at ${ab}`);
        return this.at = ab + bb, ab
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
        const ab = this.take(8);
        return bb ? this.view.getBigInt64(ab, !1) : this.view.getBigUint64(ab, !1)
      }
      str(bb) {
        const ab = this.take(bb),
          Ub = this.bytes;
        if (bb < 16) {
          let Mb = "";
          for (let Tb = ab; Tb < ab + bb; Tb++) {
            const Eb = Ub[Tb];
            if (Eb >= 128) return Ab.decode(Ub.subarray(ab, ab + bb));
            Mb += String.fromCharCode(Eb)
          }
          return Mb
        }
        return Ab.decode(Ub.subarray(ab, ab + bb))
      }
      bin(bb) {
        const ab = this.take(bb);
        return this.bytes.subarray(ab, ab + bb)
      }
      enter() {
        if (++this.depth > 512) throw new Error("msgpack: nested too deep")
      }
      array(bb) {
        this.enter();
        const ab = [];
        for (let Ub = 0; Ub < bb; Ub++) ab.push(this.value());
        return this.depth--, ab
      }
      map(bb) {
        this.enter();
        const ab = {};
        for (let Ub = 0; Ub < bb; Ub++) {
          const bb = this.value(),
            Ub = this.value();
          ab["__proto__" === bb ? "__proto_" : String(bb)] = Ub
        }
        return this.depth--, ab
      }
      ext(bb) {
        const ab = this.view.getInt8(this.take(1)),
          Ub = this.take(bb);
        if (0 !== ab) {
          if (-1 === ab) {
            if (1 === bb) return new Date(NaN);
            if (4 === bb) return new Date(1e3 * this.view.getUint32(Ub, !1));
            if (8 === bb) {
              const bb = this.view.getUint32(Ub, !1),
                ab = bb >>> 2,
                Ab = 4294967296 * (3 & bb) + this.view.getUint32(Ub + 4, !1);
              return new Date(1e3 * Ab + ab / 1e6)
            }
            if (12 === bb) {
              const bb = this.view.getUint32(Ub, !1),
                ab = 4294967296 * this.view.getInt32(Ub + 4, !1) + this.view.getUint32(Ub + 8, !1);
              return new Date(1e3 * ab + bb / 1e6)
            }
          }
          throw new Error(`msgpack: ext type ${ab} of ${bb} bytes`)
        }
      }
    }
    const Eb = new TextEncoder,
      Yb = -(2n ** 63n),
      Bb = 2n ** 63n - 1n,
      eb = 2n ** 64n - 1n;

    function vb(bb) {
      const ab = new Lb;
      return ab.value(bb, 0), ab.bytes()
    }
    class Lb {
      constructor() {
        this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
      }
      bytes() {
        return this.buf.subarray(0, this.at)
      }
      value(bb, ab) {
        if (ab > 512) throw new Error("msgpack: nested too deep");
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
              for (const Ub of bb) this.value(Ub, ab + 1)
            } else {
              var Ub, Ab;
              if (Object.getPrototypeOf(bb) !== Object.prototype && null !== Object.getPrototypeOf(bb)) throw new Error(`msgpack: can't encode a ${null!==(Ub=null===(Ab=bb.constructor)||void 0===Ab?void 0:Ab.name)&&void 0!==Ub?Ub:"object"}`);
              {
                const Ub = Object.keys(bb);
                this.head(Ub.length, 222, 128, 222, 223);
                for (const Ab of Ub) this.string(Ab), this.value(bb[Ab], ab + 1)
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
        const ab = bb >= Yb && bb <= Bb;
        if (!ab && (bb < 0n || bb > eb)) throw new Error("msgpack: a BigInt past 64 bits");
        this.u8(ab ? 211 : 207), this.room(8), ab ? this.view.setBigInt64(this.at, bb, !1) : this.view.setBigUint64(this.at, bb, !1), this.at += 8
      }
      string(bb) {
        const ab = Eb.encode(bb);
        this.head(ab.length, 217, 160, 218, 219), this.room(ab.length), this.buf.set(ab, this.at), this.at += ab.length
      }
      head(bb, ab, Ub, Ab, Mb) {
        Ub >= 0 && bb < (160 === Ub ? 32 : 16) ? this.u8(Ub | bb) : ab !== Ab && bb < 256 ? (this.u8(ab), this.u8(bb)) : bb < 65536 ? (this.u8(Ab), this.u16(bb)) : (this.u8(Mb), this.u32(bb))
      }
      room(bb) {
        if (this.at + bb <= this.buf.length) return;
        let ab = 2 * this.buf.length;
        for (; ab < this.at + bb;) ab *= 2;
        const Ub = new Uint8Array(ab);
        Ub.set(this.buf.subarray(0, this.at)), this.buf = Ub, this.view = new DataView(Ub.buffer)
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
  42403: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      joinRoom: () => Pb,
      leaveHeldSeat: () => Zb,
      resumeRoom: () => jb
    });
    var Ab = Ub(166),
      Mb = Ub(1710),
      Tb = Ub(38357),
      Eb = Ub(1687),
      Yb = Ub(39751),
      Bb = Ub(4479),
      eb = Ub(39992),
      vb = Ub(40046);
    const Lb = Uint8Array.of(13, ...(0, Yb.d)(Ab.f));
    async function Pb(bb, ab) {
      let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      try {
        return await Xb(bb, ab, Ub)
      } catch (Mb) {
        var Ab;
        const Tb = await (null === (Ab = ab.optionsAfterRefusal) || void 0 === Ab ? void 0 : Ab.call(ab, Mb));
        if (!Tb) throw Mb;
        return Xb(bb, {
          ...ab,
          joinOptions: Tb
        }, {
          ...Ub,
          early: void 0
        })
      }
    }
    async function Xb(bb, ab, Ub) {
      var Ab;
      const {
        signal: Tb
      } = Ub, Eb = () => (0, vb.g)(ab.endpoint, ab.roomName, ab.joinOptions, Ub), {
        early: Yb
      } = Ub, Bb = Yb ? null !== (Ab = await Yb.take(Tb)) && void 0 !== Ab ? Ab : await Yb.reserveInstead(Eb, Tb) : await Eb();
      return (0, Mb.h)(Tb), yb(bb, ab.endpoint, Bb, Ub, !1)
    }
    async function jb(bb, ab, Ub, Ab) {
      let Tb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      const Eb = await (0, vb.f)(ab, Ub, Ab, Tb);
      return (0, Mb.h)(Tb.signal), yb(bb, ab, Eb, Tb, !0)
    }

    function Rb(bb, ab, Ub) {
      const Ab = (0, vb.k)(bb, ab);
      return Ub.createSocket ? Ub.createSocket(Ab) : new WebSocket(Ab)
    }

    function kb(bb, ab, Ub) {
      var Ab;
      let Mb = !1;
      return (null !== (Ab = bb.setTimer) && void 0 !== Ab ? Ab : (bb, ab) => {
        setTimeout(bb, ab)
      })((() => {
        Mb || ab()
      }), Ub), () => {
        Mb = !0
      }
    }
    async function yb(bb, ab, Ub, Ab, Yb) {
      const {
        signal: vb
      } = Ab, Pb = Rb(ab, Ub, Ab);
      let Xb = null,
        jb = null;
      const yb = [];
      let Zb = !1,
        Db = !1;
      const zb = bb => {
        var ab;
        Db = !0, null === (ab = jb) || void 0 === ab || ab.reject(new eb.b("the room socket closed before the resume", "closed", bb.code))
      };
      Yb && Pb.addEventListener("close", zb);
      const xb = (bb, ab) => {
          var Ub;
          if (bb === (Yb ? Bb.C.Resumed : Bb.C.Activated)) Zb = !0, null === (Ub = jb) || void 0 === Ub || Ub.resolve();
          else if (!Yb || bb !== Bb.C.ResumeRefused && bb !== Bb.C.Activated)
            if (bb === Bb.C.Error) {
              var Ab;
              null === (Ab = jb) || void 0 === Ab || Ab.reject(new eb.b(`the room refused the join (code ${ab})`, "roomError", ab))
            } else {
              var Mb;
              null === (Mb = jb) || void 0 === Mb || Mb.reject(new eb.b("the room socket closed before the join", "closed", ab))
            }
          else {
            var Tb;
            null === (Tb = jb) || void 0 === Tb || Tb.reject(new eb.p("the core refused the resume: it held no game"))
          }
        },
        ib = bb.onConnection(((bb, ab, Ub) => {
          null === Xb ? yb.push([bb, ab, Ub]) : bb === Xb && xb(ab, Ub)
        })),
        fb = bb.attachSocket(Pb);
      if (null === fb) throw ib(), new eb.b("the core could not take the room socket", "attach");
      var mb;
      (Xb = fb, Yb) && (null === (mb = Ab.onAttached) || void 0 === mb || mb.call(Ab));
      const pb = Yb ? null : new Eb.e(Tb.e, (() => {
        var ab, Ub;
        null === (ab = bb.flushNet) || void 0 === ab || ab.call(bb), null === (Ub = jb) || void 0 === Ub || Ub.reject(new Tb.i)
      }));
      let Nb = !1;
      const Wb = () => {
        if (Nb) return;
        if (Nb = !0, ib(), Yb && (Pb.removeEventListener("close", zb), !Zb && !(null !== vb && void 0 !== vb && vb.aborted && (0, Mb.e)(vb) instanceof eb.t))) return void(Db || bb.closeSocket(fb));
        Zb && bb.leaveRoom(fb) || bb.sendRaw(fb, eb.m) ? kb(Ab, (() => {
          bb.closeSocket(fb)
        }), eb.f) : bb.closeSocket(fb)
      };
      try {
        await new Promise(((ab, Ub) => {
          const Ab = () => {
            var ab;
            Yb && (null === (ab = bb.flushNet) || void 0 === ab || ab.call(bb));
            Ub((0, Mb.e)(vb))
          };
          null === vb || void 0 === vb || vb.addEventListener("abort", Ab, {
            once: !0
          }), jb = {
            resolve: () => {
              null === vb || void 0 === vb || vb.removeEventListener("abort", Ab), ab()
            },
            reject: bb => {
              null === vb || void 0 === vb || vb.removeEventListener("abort", Ab), Ub(bb)
            }
          };
          for (const [bb, Mb, Tb] of yb.splice(0)) bb === Xb && xb(Mb, Tb)
        }))
      } catch (Hb) {
        throw Wb(), Hb
      } finally {
        null === pb || void 0 === pb || pb.stop()
      }
      Yb && Pb.removeEventListener("close", zb);
      return {
        conn: fb,
        seat: Ub,
        leave: Wb,
        detach: () => {
          Nb = !0, ib()
        },
        endJoinAd: () => {
          Nb || bb.sendRaw(fb, Lb)
        }
      }
    }
    async function Zb(bb, ab, Ub) {
      let Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      try {
        const Mb = Rb(bb, await (0, vb.f)(bb, ab, Ub, Ab), Ab);
        Mb.binaryType = "arraybuffer", await new Promise((bb => {
          const ab = kb(Ab, (() => {
            Mb.close(), bb()
          }), eb.f);
          Mb.addEventListener("open", (() => {
            Mb.send(eb.m)
          })), Mb.addEventListener("close", (() => {
            ab(), bb()
          }))
        }))
      } catch (Mb) {
        console.warn("[bloxd-wasm-client] the held seat of a game left while it reconnected couldn't be released", Mb)
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);