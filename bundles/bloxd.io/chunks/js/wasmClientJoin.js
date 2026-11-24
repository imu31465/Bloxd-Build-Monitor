export const id = 58;
export const ids = [58];
export const modules = {
  40812: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => qt,
      g: () => Xt
    });
    const Ot = new TextDecoder;

    function qt(tt) {
      const et = new Dt(tt),
        Vt = et.value();
      if (et.at !== tt.length) throw new Error(`msgpack: ${tt.length-et.at} bytes after the value`);
      return Vt
    }
    class Dt {
      constructor(tt) {
        this.bytes = tt, this.at = 0, this.depth = 0, this.view = void 0, this.view = new DataView(tt.buffer, tt.byteOffset, tt.byteLength)
      }
      value() {
        const tt = this.u8();
        if (tt <= 127) return tt;
        if (tt >= 224) return tt - 256;
        if (tt >= 128 && tt <= 143) return this.map(15 & tt);
        if (tt >= 144 && tt <= 159) return this.array(15 & tt);
        if (tt >= 160 && tt <= 191) return this.str(31 & tt);
        switch (tt) {
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
            throw new Error(`msgpack: unknown byte 0x${tt.toString(16)} at ${this.at-1}`)
        }
      }
      take(tt) {
        const et = this.at;
        if (et + tt > this.bytes.length) throw new Error(`msgpack: ${tt} bytes past the end at ${et}`);
        return this.at = et + tt, et
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
      int64(tt) {
        const et = this.take(8);
        return tt ? this.view.getBigInt64(et, !1) : this.view.getBigUint64(et, !1)
      }
      str(tt) {
        const et = this.take(tt),
          Vt = this.bytes;
        if (tt < 16) {
          let qt = "";
          for (let Dt = et; Dt < et + tt; Dt++) {
            const mt = Vt[Dt];
            if (mt >= 128) return Ot.decode(Vt.subarray(et, et + tt));
            qt += String.fromCharCode(mt)
          }
          return qt
        }
        return Ot.decode(Vt.subarray(et, et + tt))
      }
      bin(tt) {
        const et = this.take(tt);
        return this.bytes.subarray(et, et + tt)
      }
      enter() {
        if (++this.depth > 512) throw new Error("msgpack: nested too deep")
      }
      array(tt) {
        this.enter();
        const et = [];
        for (let Vt = 0; Vt < tt; Vt++) et.push(this.value());
        return this.depth--, et
      }
      map(tt) {
        this.enter();
        const et = {};
        for (let Vt = 0; Vt < tt; Vt++) {
          const tt = this.value(),
            Vt = this.value();
          et["__proto__" === tt ? "__proto_" : String(tt)] = Vt
        }
        return this.depth--, et
      }
      ext(tt) {
        const et = this.view.getInt8(this.take(1)),
          Vt = this.take(tt);
        if (0 !== et) {
          if (-1 === et) {
            if (1 === tt) return new Date(NaN);
            if (4 === tt) return new Date(1e3 * this.view.getUint32(Vt, !1));
            if (8 === tt) {
              const tt = this.view.getUint32(Vt, !1),
                et = tt >>> 2,
                Ot = 4294967296 * (3 & tt) + this.view.getUint32(Vt + 4, !1);
              return new Date(1e3 * Ot + et / 1e6)
            }
            if (12 === tt) {
              const tt = this.view.getUint32(Vt, !1),
                et = 4294967296 * this.view.getInt32(Vt + 4, !1) + this.view.getUint32(Vt + 8, !1);
              return new Date(1e3 * et + tt / 1e6)
            }
          }
          throw new Error(`msgpack: ext type ${et} of ${tt} bytes`)
        }
      }
    }
    const mt = new TextEncoder,
      dt = -(2n ** 63n),
      jt = 2n ** 63n - 1n,
      Ht = 2n ** 64n - 1n;

    function Xt(tt) {
      const et = new Qt;
      return et.value(tt, 0), et.bytes()
    }
    class Qt {
      constructor() {
        this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
      }
      bytes() {
        return this.buf.subarray(0, this.at)
      }
      value(tt, et) {
        if (et > 512) throw new Error("msgpack: nested too deep");
        switch (typeof tt) {
          case "undefined":
            return this.u8(212), this.u8(0), void this.u8(0);
          case "boolean":
            return void this.u8(tt ? 195 : 194);
          case "number":
            return void this.number(tt);
          case "bigint":
            return void this.bigint(tt);
          case "string":
            return void this.string(tt);
          case "object":
            if (null === tt) this.u8(192);
            else if (tt instanceof Uint8Array) this.head(tt.length, 196, -1, 197, 198), this.room(tt.length), this.buf.set(tt, this.at), this.at += tt.length;
            else if (Array.isArray(tt)) {
              this.head(tt.length, 220, 144, 220, 221);
              for (const Vt of tt) this.value(Vt, et + 1)
            } else {
              var Vt, Ot;
              if (Object.getPrototypeOf(tt) !== Object.prototype && null !== Object.getPrototypeOf(tt)) throw new Error(`msgpack: can't encode a ${null!==(Vt=null===(Ot=tt.constructor)||void 0===Ot?void 0:Ot.name)&&void 0!==Vt?Vt:"object"}`);
              {
                const Vt = Object.keys(tt);
                this.head(Vt.length, 222, 128, 222, 223);
                for (const Ot of Vt) this.string(Ot), this.value(tt[Ot], et + 1)
              }
            }
            return;
          default:
            throw new Error("msgpack: can't encode a " + typeof tt)
        }
      }
      number(tt) {
        Number.isInteger(tt) && tt >= -2147483648 && tt <= 4294967295 ? tt >= 0 ? tt < 128 ? this.u8(tt) : tt < 256 ? (this.u8(204), this.u8(tt)) : tt < 65536 ? (this.u8(205), this.u16(tt)) : (this.u8(206), this.u32(tt)) : tt >= -32 ? this.u8(tt + 256) : tt >= -128 ? (this.u8(208), this.u8(tt + 256)) : tt >= -32768 ? (this.u8(209), this.u16(tt + 65536)) : (this.u8(210), this.u32(tt >>> 0)) : (this.u8(203), this.room(8), this.view.setFloat64(this.at, tt, !1), this.at += 8)
      }
      bigint(tt) {
        const et = tt >= dt && tt <= jt;
        if (!et && (tt < 0n || tt > Ht)) throw new Error("msgpack: a BigInt past 64 bits");
        this.u8(et ? 211 : 207), this.room(8), et ? this.view.setBigInt64(this.at, tt, !1) : this.view.setBigUint64(this.at, tt, !1), this.at += 8
      }
      string(tt) {
        const et = mt.encode(tt);
        this.head(et.length, 217, 160, 218, 219), this.room(et.length), this.buf.set(et, this.at), this.at += et.length
      }
      head(tt, et, Vt, Ot, qt) {
        Vt >= 0 && tt < (160 === Vt ? 32 : 16) ? this.u8(Vt | tt) : et !== Ot && tt < 256 ? (this.u8(et), this.u8(tt)) : tt < 65536 ? (this.u8(Ot), this.u16(tt)) : (this.u8(qt), this.u32(tt))
      }
      room(tt) {
        if (this.at + tt <= this.buf.length) return;
        let et = 2 * this.buf.length;
        for (; et < this.at + tt;) et *= 2;
        const Vt = new Uint8Array(et);
        Vt.set(this.buf.subarray(0, this.at)), this.buf = Vt, this.view = new DataView(Vt.buffer)
      }
      u8(tt) {
        this.room(1), this.buf[this.at++] = tt
      }
      u16(tt) {
        this.room(2), this.view.setUint16(this.at, tt, !1), this.at += 2
      }
      u32(tt) {
        this.room(4), this.view.setUint32(this.at, tt, !1), this.at += 4
      }
    }
  },
  51280: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      joinRoom: () => Qt,
      leaveHeldSeat: () => Nt,
      resumeRoom: () => Et
    });
    var Ot = Vt(184),
      qt = Vt(1298),
      Dt = Vt(36738),
      mt = Vt(40812),
      dt = Vt(4960),
      jt = Vt(40882),
      Ht = Vt(41095);
    const Xt = Uint8Array.of(13, ...(0, mt.g)(Ot.h));
    async function Qt(tt, et) {
      let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      try {
        return await lt(tt, et, Vt)
      } catch (qt) {
        var Ot;
        const Dt = await (null === (Ot = et.optionsAfterRefusal) || void 0 === Ot ? void 0 : Ot.call(et, qt));
        if (!Dt) throw qt;
        return lt(tt, {
          ...et,
          joinOptions: Dt
        }, {
          ...Vt,
          early: void 0
        })
      }
    }
    async function lt(tt, et, Vt) {
      var Ot;
      const {
        signal: Dt
      } = Vt, mt = () => (0, Ht.h)(et.endpoint, et.roomName, et.joinOptions, Vt), {
        early: dt
      } = Vt, jt = dt ? null !== (Ot = await dt.take(Dt)) && void 0 !== Ot ? Ot : await dt.reserveInstead(mt, Dt) : await mt();
      return (0, qt.n)(Dt), yt(tt, et.endpoint, jt, Vt, !1)
    }
    async function Et(tt, et, Vt, Ot) {
      let Dt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      const mt = await (0, Ht.d)(et, Vt, Ot, Dt);
      return (0, qt.n)(Dt.signal), yt(tt, et, mt, Dt, !0)
    }

    function ft(tt, et, Vt) {
      const Ot = (0, Ht.i)(tt, et);
      return Vt.createSocket ? Vt.createSocket(Ot) : new WebSocket(Ot)
    }

    function wt(tt, et, Vt) {
      var Ot;
      let qt = !1;
      return (null !== (Ot = tt.setTimer) && void 0 !== Ot ? Ot : (tt, et) => {
        setTimeout(tt, et)
      })((() => {
        qt || et()
      }), Vt), () => {
        qt = !0
      }
    }
    async function yt(tt, et, Vt, Ot, mt) {
      const {
        signal: Ht
      } = Ot, Qt = ft(et, Vt, Ot);
      let lt = !1,
        Et = null,
        yt = null;
      const Nt = [];
      let Mt = !1,
        bt = !1;
      const Jt = tt => {
        var et;
        bt = !0, null === (et = yt) || void 0 === et || et.reject(new jt.c("the room socket closed before the resume", "closed", tt.code))
      };
      mt && Qt.addEventListener("close", Jt);
      const Ct = (tt, et) => {
          var Vt;
          if (tt === (mt ? dt.H.Resumed : dt.H.Activated)) Mt = !0, null === (Vt = yt) || void 0 === Vt || Vt.resolve();
          else if (!mt || tt !== dt.H.ResumeRefused && tt !== dt.H.Activated)
            if (tt === dt.H.Error) {
              var Ot;
              null === (Ot = yt) || void 0 === Ot || Ot.reject(new jt.c(`the room refused the join (code ${et})`, "roomError", et))
            } else {
              var qt;
              null === (qt = yt) || void 0 === qt || qt.reject(new jt.c("the room socket closed before the join", "closed", et, null, lt))
            }
          else {
            var Dt;
            null === (Dt = yt) || void 0 === Dt || Dt.reject(new jt.r("the core refused the resume: it held no game"))
          }
        },
        ut = tt.onConnection(((tt, et, Vt) => {
          null === Et ? Nt.push([tt, et, Vt]) : tt === Et && Ct(et, Vt)
        })),
        Kt = tt.attachSocket(Qt);
      if (null === Kt) throw ut(), new jt.c("the core could not take the room socket", "attach");
      var ht;
      (Et = Kt, mt) && (null === (ht = Ot.onAttached) || void 0 === ht || ht.call(Ot));
      const vt = mt ? null : new Dt.b((() => {
        var et, Vt;
        null === (et = tt.flushNet) || void 0 === et || et.call(tt), null === (Vt = yt) || void 0 === Vt || Vt.reject(new Dt.c(lt ? "socket" : "socket_unopened"))
      }));
      Qt.addEventListener("open", (() => {
        lt = !0, null === vt || void 0 === vt || vt.socketOpened()
      }), {
        once: !0
      });
      let Wt = !1;
      const St = () => {
        if (Wt) return;
        if (Wt = !0, ut(), mt && (Qt.removeEventListener("close", Jt), !Mt && !(null !== Ht && void 0 !== Ht && Ht.aborted && (0, qt.f)(Ht) instanceof jt.s))) return void(bt || tt.closeSocket(Kt));
        Mt && tt.leaveRoom(Kt) || tt.sendRaw(Kt, jt.l) ? wt(Ot, (() => {
          tt.closeSocket(Kt)
        }), jt.e) : tt.closeSocket(Kt)
      };
      try {
        await new Promise(((et, Vt) => {
          const Ot = () => {
            var et;
            mt && (null === (et = tt.flushNet) || void 0 === et || et.call(tt));
            Vt((0, qt.f)(Ht))
          };
          null === Ht || void 0 === Ht || Ht.addEventListener("abort", Ot, {
            once: !0
          }), yt = {
            resolve: () => {
              null === Ht || void 0 === Ht || Ht.removeEventListener("abort", Ot), et()
            },
            reject: tt => {
              null === Ht || void 0 === Ht || Ht.removeEventListener("abort", Ot), Vt(tt)
            }
          };
          for (const [tt, qt, Dt] of Nt.splice(0)) tt === Et && Ct(qt, Dt)
        })), null === vt || void 0 === vt || vt.answered()
      } catch (ct) {
        throw St(), ct
      } finally {
        null === vt || void 0 === vt || vt.stop()
      }
      mt && Qt.removeEventListener("close", Jt);
      return {
        conn: Kt,
        seat: Vt,
        leave: St,
        detach: () => {
          Wt = !0, ut()
        },
        endJoinAd: () => !Wt && tt.sendRaw(Kt, Xt)
      }
    }
    async function Nt(tt, et, Vt) {
      let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      try {
        const qt = ft(tt, await (0, Ht.d)(tt, et, Vt, Ot), Ot);
        qt.binaryType = "arraybuffer", await new Promise((tt => {
          const et = wt(Ot, (() => {
            qt.close(), tt()
          }), jt.e);
          qt.addEventListener("open", (() => {
            qt.send(jt.l)
          })), qt.addEventListener("close", (() => {
            et(), tt()
          }))
        }))
      } catch (qt) {
        console.warn("[bloxd-wasm-client] the held seat of a game left while it reconnected couldn't be released", qt)
      }
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);