export const id = 70;
export const ids = [70];
export const modules = {
  42284: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Hb,
      h: () => Ib
    });
    const eb = new TextDecoder;

    function Hb(bb) {
      const wb = new pb(bb),
        Mb = wb.value();
      if (wb.at !== bb.length) throw new Error(`msgpack: ${bb.length-wb.at} bytes after the value`);
      return Mb
    }
    class pb {
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
        const wb = this.at;
        if (wb + bb > this.bytes.length) throw new Error(`msgpack: ${bb} bytes past the end at ${wb}`);
        return this.at = wb + bb, wb
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
        const wb = this.take(8);
        return bb ? this.view.getBigInt64(wb, !1) : this.view.getBigUint64(wb, !1)
      }
      str(bb) {
        const wb = this.take(bb),
          Mb = this.bytes;
        if (bb < 16) {
          let Hb = "";
          for (let pb = wb; pb < wb + bb; pb++) {
            const Vb = Mb[pb];
            if (Vb >= 128) return eb.decode(Mb.subarray(wb, wb + bb));
            Hb += String.fromCharCode(Vb)
          }
          return Hb
        }
        return eb.decode(Mb.subarray(wb, wb + bb))
      }
      bin(bb) {
        const wb = this.take(bb);
        return this.bytes.subarray(wb, wb + bb)
      }
      enter() {
        if (++this.depth > 512) throw new Error("msgpack: nested too deep")
      }
      array(bb) {
        this.enter();
        const wb = [];
        for (let Mb = 0; Mb < bb; Mb++) wb.push(this.value());
        return this.depth--, wb
      }
      map(bb) {
        this.enter();
        const wb = {};
        for (let Mb = 0; Mb < bb; Mb++) {
          const bb = this.value(),
            Mb = this.value();
          wb["__proto__" === bb ? "__proto_" : String(bb)] = Mb
        }
        return this.depth--, wb
      }
      ext(bb) {
        const wb = this.view.getInt8(this.take(1)),
          Mb = this.take(bb);
        if (0 !== wb) {
          if (-1 === wb) {
            if (1 === bb) return new Date(NaN);
            if (4 === bb) return new Date(1e3 * this.view.getUint32(Mb, !1));
            if (8 === bb) {
              const bb = this.view.getUint32(Mb, !1),
                wb = bb >>> 2,
                eb = 4294967296 * (3 & bb) + this.view.getUint32(Mb + 4, !1);
              return new Date(1e3 * eb + wb / 1e6)
            }
            if (12 === bb) {
              const bb = this.view.getUint32(Mb, !1),
                wb = 4294967296 * this.view.getInt32(Mb + 4, !1) + this.view.getUint32(Mb + 8, !1);
              return new Date(1e3 * wb + bb / 1e6)
            }
          }
          throw new Error(`msgpack: ext type ${wb} of ${bb} bytes`)
        }
      }
    }
    const Vb = new TextEncoder,
      gb = -(2n ** 63n),
      lb = 2n ** 63n - 1n,
      Lb = 2n ** 64n - 1n;

    function Ib(bb) {
      const wb = new Ob;
      return wb.value(bb, 0), wb.bytes()
    }
    class Ob {
      constructor() {
        this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
      }
      bytes() {
        return this.buf.subarray(0, this.at)
      }
      value(bb, wb) {
        if (wb > 512) throw new Error("msgpack: nested too deep");
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
              for (const Mb of bb) this.value(Mb, wb + 1)
            } else {
              var Mb, eb;
              if (Object.getPrototypeOf(bb) !== Object.prototype && null !== Object.getPrototypeOf(bb)) throw new Error(`msgpack: can't encode a ${null!==(Mb=null===(eb=bb.constructor)||void 0===eb?void 0:eb.name)&&void 0!==Mb?Mb:"object"}`);
              {
                const Mb = Object.keys(bb);
                this.head(Mb.length, 222, 128, 222, 223);
                for (const eb of Mb) this.string(eb), this.value(bb[eb], wb + 1)
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
        const wb = bb >= gb && bb <= lb;
        if (!wb && (bb < 0n || bb > Lb)) throw new Error("msgpack: a BigInt past 64 bits");
        this.u8(wb ? 211 : 207), this.room(8), wb ? this.view.setBigInt64(this.at, bb, !1) : this.view.setBigUint64(this.at, bb, !1), this.at += 8
      }
      string(bb) {
        const wb = Vb.encode(bb);
        this.head(wb.length, 217, 160, 218, 219), this.room(wb.length), this.buf.set(wb, this.at), this.at += wb.length
      }
      head(bb, wb, Mb, eb, Hb) {
        Mb >= 0 && bb < (160 === Mb ? 32 : 16) ? this.u8(Mb | bb) : wb !== eb && bb < 256 ? (this.u8(wb), this.u8(bb)) : bb < 65536 ? (this.u8(eb), this.u16(bb)) : (this.u8(Hb), this.u32(bb))
      }
      room(bb) {
        if (this.at + bb <= this.buf.length) return;
        let wb = 2 * this.buf.length;
        for (; wb < this.at + bb;) wb *= 2;
        const Mb = new Uint8Array(wb);
        Mb.set(this.buf.subarray(0, this.at)), this.buf = Mb, this.view = new DataView(Mb.buffer)
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
  54868: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      joinRoom: () => Ob,
      leaveHeldSeat: () => Bb,
      resumeRoom: () => tb
    });
    var eb = Mb(192),
      Hb = Mb(1280),
      pb = Mb(37772),
      Vb = Mb(42284),
      gb = Mb(5678),
      lb = Mb(42475),
      Lb = Mb(42598);
    const Ib = Uint8Array.of(13, ...(0, Vb.h)(eb.f));
    async function Ob(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      try {
        return await Ub(bb, wb, Mb)
      } catch (Hb) {
        var eb;
        const pb = await (null === (eb = wb.optionsAfterRefusal) || void 0 === eb ? void 0 : eb.call(wb, Hb));
        if (!pb) throw Hb;
        return Ub(bb, {
          ...wb,
          joinOptions: pb
        }, {
          ...Mb,
          early: void 0
        })
      }
    }
    async function Ub(bb, wb, Mb) {
      var eb;
      const {
        signal: pb
      } = Mb, Vb = () => (0, Lb.g)(wb.endpoint, wb.roomName, wb.joinOptions, Mb), {
        early: gb
      } = Mb, lb = gb ? null !== (eb = await gb.take(pb)) && void 0 !== eb ? eb : await gb.reserveInstead(Vb, pb) : await Vb();
      return (0, Hb.r)(pb), Fb(bb, wb.endpoint, lb, Mb, !1)
    }
    async function tb(bb, wb, Mb, eb) {
      let pb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      const Vb = await (0, Lb.f)(wb, Mb, eb, pb);
      return (0, Hb.r)(pb.signal), Fb(bb, wb, Vb, pb, !0)
    }

    function Cb(bb, wb, Mb) {
      const eb = (0, Lb.i)(bb, wb);
      return Mb.createSocket ? Mb.createSocket(eb) : new WebSocket(eb)
    }

    function Eb(bb, wb, Mb) {
      var eb;
      let Hb = !1;
      return (null !== (eb = bb.setTimer) && void 0 !== eb ? eb : (bb, wb) => {
        setTimeout(bb, wb)
      })((() => {
        Hb || wb()
      }), Mb), () => {
        Hb = !0
      }
    }
    async function Fb(bb, wb, Mb, eb, Vb) {
      const {
        signal: Lb
      } = eb, Ob = Cb(wb, Mb, eb);
      let Ub = !1,
        tb = null,
        Fb = null;
      const Bb = [];
      let sb = !1,
        mb = !1;
      const hb = bb => {
        var wb;
        mb = !0, null === (wb = Fb) || void 0 === wb || wb.reject(new lb.b("the room socket closed before the resume", "closed", bb.code))
      };
      Vb && Ob.addEventListener("close", hb);
      const zb = (bb, wb) => {
          var Mb;
          if (bb === (Vb ? gb.B.Resumed : gb.B.Activated)) sb = !0, null === (Mb = Fb) || void 0 === Mb || Mb.resolve();
          else if (!Vb || bb !== gb.B.ResumeRefused && bb !== gb.B.Activated)
            if (bb === gb.B.Error) {
              var eb;
              null === (eb = Fb) || void 0 === eb || eb.reject(new lb.b(`the room refused the join (code ${wb})`, "roomError", wb))
            } else {
              var Hb;
              null === (Hb = Fb) || void 0 === Hb || Hb.reject(new lb.b("the room socket closed before the join", "closed", wb, null, Ub))
            }
          else {
            var pb;
            null === (pb = Fb) || void 0 === pb || pb.reject(new lb.n("the core refused the resume: it held no game"))
          }
        },
        Xb = bb.onConnection(((bb, wb, Mb) => {
          null === tb ? Bb.push([bb, wb, Mb]) : bb === tb && zb(wb, Mb)
        })),
        xb = bb.attachSocket(Ob);
      if (null === xb) throw Xb(), new lb.b("the core could not take the room socket", "attach");
      var jb;
      (tb = xb, Vb) && (null === (jb = eb.onAttached) || void 0 === jb || jb.call(eb));
      const Kb = Vb ? null : new pb.b((() => {
        var wb, Mb;
        null === (wb = bb.flushNet) || void 0 === wb || wb.call(bb), null === (Mb = Fb) || void 0 === Mb || Mb.reject(new pb.e(Ub ? "socket" : "socket_unopened"))
      }));
      Ob.addEventListener("open", (() => {
        Ub = !0, null === Kb || void 0 === Kb || Kb.socketOpened()
      }), {
        once: !0
      });
      let rb = !1;
      const Rb = () => {
        if (rb) return;
        if (rb = !0, Xb(), Vb && (Ob.removeEventListener("close", hb), !sb && !(null !== Lb && void 0 !== Lb && Lb.aborted && (0, Hb.h)(Lb) instanceof lb.q))) return void(mb || bb.closeSocket(xb));
        sb && bb.leaveRoom(xb) || bb.sendRaw(xb, lb.g) ? Eb(eb, (() => {
          bb.closeSocket(xb)
        }), lb.d) : bb.closeSocket(xb)
      };
      try {
        await new Promise(((wb, Mb) => {
          const eb = () => {
            var wb;
            Vb && (null === (wb = bb.flushNet) || void 0 === wb || wb.call(bb));
            Mb((0, Hb.h)(Lb))
          };
          null === Lb || void 0 === Lb || Lb.addEventListener("abort", eb, {
            once: !0
          }), Fb = {
            resolve: () => {
              null === Lb || void 0 === Lb || Lb.removeEventListener("abort", eb), wb()
            },
            reject: bb => {
              null === Lb || void 0 === Lb || Lb.removeEventListener("abort", eb), Mb(bb)
            }
          };
          for (const [bb, Hb, pb] of Bb.splice(0)) bb === tb && zb(Hb, pb)
        })), null === Kb || void 0 === Kb || Kb.answered()
      } catch (Db) {
        throw Rb(), Db
      } finally {
        null === Kb || void 0 === Kb || Kb.stop()
      }
      Vb && Ob.removeEventListener("close", hb);
      return {
        conn: xb,
        seat: Mb,
        leave: Rb,
        detach: () => {
          rb = !0, Xb()
        },
        endJoinAd: () => !rb && bb.sendRaw(xb, Ib)
      }
    }
    async function Bb(bb, wb, Mb) {
      let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      try {
        const Hb = Cb(bb, await (0, Lb.f)(bb, wb, Mb, eb), eb);
        Hb.binaryType = "arraybuffer", await new Promise((bb => {
          const wb = Eb(eb, (() => {
            Hb.close(), bb()
          }), lb.d);
          Hb.addEventListener("open", (() => {
            Hb.send(lb.g)
          })), Hb.addEventListener("close", (() => {
            wb(), bb()
          }))
        }))
      } catch (Hb) {
        console.warn("[bloxd-wasm-client] the held seat of a game left while it reconnected couldn't be released", Hb)
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);