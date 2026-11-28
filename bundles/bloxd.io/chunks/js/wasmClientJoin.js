export const id = 70;
export const ids = [70];
export const modules = {
  42587: (dd, Od, md) => {
    md.d(Od, {
      b: () => Fd,
      e: () => Qd
    });
    const Wd = new TextDecoder;

    function Fd(dd) {
      const Od = new Rd(dd),
        md = Od.value();
      if (Od.at !== dd.length) throw new Error(`msgpack: ${dd.length-Od.at} bytes after the value`);
      return md
    }
    class Rd {
      constructor(dd) {
        this.bytes = dd, this.at = 0, this.depth = 0, this.view = void 0, this.view = new DataView(dd.buffer, dd.byteOffset, dd.byteLength)
      }
      value() {
        const dd = this.u8();
        if (dd <= 127) return dd;
        if (dd >= 224) return dd - 256;
        if (dd >= 128 && dd <= 143) return this.map(15 & dd);
        if (dd >= 144 && dd <= 159) return this.array(15 & dd);
        if (dd >= 160 && dd <= 191) return this.str(31 & dd);
        switch (dd) {
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
            throw new Error(`msgpack: unknown byte 0x${dd.toString(16)} at ${this.at-1}`)
        }
      }
      take(dd) {
        const Od = this.at;
        if (Od + dd > this.bytes.length) throw new Error(`msgpack: ${dd} bytes past the end at ${Od}`);
        return this.at = Od + dd, Od
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
      int64(dd) {
        const Od = this.take(8);
        return dd ? this.view.getBigInt64(Od, !1) : this.view.getBigUint64(Od, !1)
      }
      str(dd) {
        const Od = this.take(dd),
          md = this.bytes;
        if (dd < 16) {
          let Fd = "";
          for (let Rd = Od; Rd < Od + dd; Rd++) {
            const Xd = md[Rd];
            if (Xd >= 128) return Wd.decode(md.subarray(Od, Od + dd));
            Fd += String.fromCharCode(Xd)
          }
          return Fd
        }
        return Wd.decode(md.subarray(Od, Od + dd))
      }
      bin(dd) {
        const Od = this.take(dd);
        return this.bytes.subarray(Od, Od + dd)
      }
      enter() {
        if (++this.depth > 512) throw new Error("msgpack: nested too deep")
      }
      array(dd) {
        this.enter();
        const Od = [];
        for (let md = 0; md < dd; md++) Od.push(this.value());
        return this.depth--, Od
      }
      map(dd) {
        this.enter();
        const Od = {};
        for (let md = 0; md < dd; md++) {
          const dd = this.value(),
            md = this.value();
          Od["__proto__" === dd ? "__proto_" : String(dd)] = md
        }
        return this.depth--, Od
      }
      ext(dd) {
        const Od = this.view.getInt8(this.take(1)),
          md = this.take(dd);
        if (0 !== Od) {
          if (-1 === Od) {
            if (1 === dd) return new Date(NaN);
            if (4 === dd) return new Date(1e3 * this.view.getUint32(md, !1));
            if (8 === dd) {
              const dd = this.view.getUint32(md, !1),
                Od = dd >>> 2,
                Wd = 4294967296 * (3 & dd) + this.view.getUint32(md + 4, !1);
              return new Date(1e3 * Wd + Od / 1e6)
            }
            if (12 === dd) {
              const dd = this.view.getUint32(md, !1),
                Od = 4294967296 * this.view.getInt32(md + 4, !1) + this.view.getUint32(md + 8, !1);
              return new Date(1e3 * Od + dd / 1e6)
            }
          }
          throw new Error(`msgpack: ext type ${Od} of ${dd} bytes`)
        }
      }
    }
    const Xd = new TextEncoder,
      Kd = -(2n ** 63n),
      hd = 2n ** 63n - 1n,
      vd = 2n ** 64n - 1n;

    function Qd(dd) {
      const Od = new td;
      return Od.value(dd, 0), Od.bytes()
    }
    class td {
      constructor() {
        this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
      }
      bytes() {
        return this.buf.subarray(0, this.at)
      }
      value(dd, Od) {
        if (Od > 512) throw new Error("msgpack: nested too deep");
        switch (typeof dd) {
          case "undefined":
            return this.u8(212), this.u8(0), void this.u8(0);
          case "boolean":
            return void this.u8(dd ? 195 : 194);
          case "number":
            return void this.number(dd);
          case "bigint":
            return void this.bigint(dd);
          case "string":
            return void this.string(dd);
          case "object":
            if (null === dd) this.u8(192);
            else if (dd instanceof Uint8Array) this.head(dd.length, 196, -1, 197, 198), this.room(dd.length), this.buf.set(dd, this.at), this.at += dd.length;
            else if (Array.isArray(dd)) {
              this.head(dd.length, 220, 144, 220, 221);
              for (const md of dd) this.value(md, Od + 1)
            } else {
              var md, Wd;
              if (Object.getPrototypeOf(dd) !== Object.prototype && null !== Object.getPrototypeOf(dd)) throw new Error(`msgpack: can't encode a ${null!==(md=null===(Wd=dd.constructor)||void 0===Wd?void 0:Wd.name)&&void 0!==md?md:"object"}`);
              {
                const md = Object.keys(dd);
                this.head(md.length, 222, 128, 222, 223);
                for (const Wd of md) this.string(Wd), this.value(dd[Wd], Od + 1)
              }
            }
            return;
          default:
            throw new Error("msgpack: can't encode a " + typeof dd)
        }
      }
      number(dd) {
        Number.isInteger(dd) && dd >= -2147483648 && dd <= 4294967295 ? dd >= 0 ? dd < 128 ? this.u8(dd) : dd < 256 ? (this.u8(204), this.u8(dd)) : dd < 65536 ? (this.u8(205), this.u16(dd)) : (this.u8(206), this.u32(dd)) : dd >= -32 ? this.u8(dd + 256) : dd >= -128 ? (this.u8(208), this.u8(dd + 256)) : dd >= -32768 ? (this.u8(209), this.u16(dd + 65536)) : (this.u8(210), this.u32(dd >>> 0)) : (this.u8(203), this.room(8), this.view.setFloat64(this.at, dd, !1), this.at += 8)
      }
      bigint(dd) {
        const Od = dd >= Kd && dd <= hd;
        if (!Od && (dd < 0n || dd > vd)) throw new Error("msgpack: a BigInt past 64 bits");
        this.u8(Od ? 211 : 207), this.room(8), Od ? this.view.setBigInt64(this.at, dd, !1) : this.view.setBigUint64(this.at, dd, !1), this.at += 8
      }
      string(dd) {
        const Od = Xd.encode(dd);
        this.head(Od.length, 217, 160, 218, 219), this.room(Od.length), this.buf.set(Od, this.at), this.at += Od.length
      }
      head(dd, Od, md, Wd, Fd) {
        md >= 0 && dd < (160 === md ? 32 : 16) ? this.u8(md | dd) : Od !== Wd && dd < 256 ? (this.u8(Od), this.u8(dd)) : dd < 65536 ? (this.u8(Wd), this.u16(dd)) : (this.u8(Fd), this.u32(dd))
      }
      room(dd) {
        if (this.at + dd <= this.buf.length) return;
        let Od = 2 * this.buf.length;
        for (; Od < this.at + dd;) Od *= 2;
        const md = new Uint8Array(Od);
        md.set(this.buf.subarray(0, this.at)), this.buf = md, this.view = new DataView(md.buffer)
      }
      u8(dd) {
        this.room(1), this.buf[this.at++] = dd
      }
      u16(dd) {
        this.room(2), this.view.setUint16(this.at, dd, !1), this.at += 2
      }
      u32(dd) {
        this.room(4), this.view.setUint32(this.at, dd, !1), this.at += 4
      }
    }
  },
  55064: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      joinRoom: () => td,
      leaveHeldSeat: () => bd,
      resumeRoom: () => Nd
    });
    var Wd = md(180),
      Fd = md(1268),
      Rd = md(38109),
      Xd = md(42587),
      Kd = md(5568),
      hd = md(42758),
      vd = md(42892);
    const Qd = Uint8Array.of(13, ...(0, Xd.e)(Wd.f));
    async function td(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      try {
        return await od(dd, Od, md)
      } catch (Fd) {
        var Wd;
        const Rd = await (null === (Wd = Od.optionsAfterRefusal) || void 0 === Wd ? void 0 : Wd.call(Od, Fd));
        if (!Rd) throw Fd;
        return od(dd, {
          ...Od,
          joinOptions: Rd
        }, {
          ...md,
          early: void 0
        })
      }
    }
    async function od(dd, Od, md) {
      var Wd;
      const {
        signal: Rd
      } = md, Xd = () => (0, vd.i)(Od.endpoint, Od.roomName, Od.joinOptions, md), {
        early: Kd
      } = md, hd = Kd ? null !== (Wd = await Kd.take(Rd)) && void 0 !== Wd ? Wd : await Kd.reserveInstead(Xd, Rd) : await Xd();
      return (0, Fd.p)(Rd), yd(dd, Od.endpoint, hd, md, !1)
    }
    async function Nd(dd, Od, md, Wd) {
      let Rd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      const Xd = await (0, vd.f)(Od, md, Wd, Rd);
      return (0, Fd.p)(Rd.signal), yd(dd, Od, Xd, Rd, !0)
    }

    function qd(dd, Od, md) {
      const Wd = (0, vd.j)(dd, Od);
      return md.createSocket ? md.createSocket(Wd) : new WebSocket(Wd)
    }

    function Hd(dd, Od, md) {
      var Wd;
      let Fd = !1;
      return (null !== (Wd = dd.setTimer) && void 0 !== Wd ? Wd : (dd, Od) => {
        setTimeout(dd, Od)
      })((() => {
        Fd || Od()
      }), md), () => {
        Fd = !0
      }
    }
    async function yd(dd, Od, md, Wd, Xd) {
      const {
        signal: vd
      } = Wd, td = qd(Od, md, Wd);
      let od = !1,
        Nd = null,
        yd = null;
      const bd = [];
      let Td = !1,
        pd = !1;
      const Yd = dd => {
        var Od;
        pd = !0, null === (Od = yd) || void 0 === Od || Od.reject(new hd.e("the room socket closed before the resume", "closed", dd.code))
      };
      Xd && td.addEventListener("close", Yd);
      const gd = (dd, Od) => {
          var md;
          if (dd === (Xd ? Kd.C.Resumed : Kd.C.Activated)) Td = !0, null === (md = yd) || void 0 === md || md.resolve();
          else if (!Xd || dd !== Kd.C.ResumeRefused && dd !== Kd.C.Activated)
            if (dd === Kd.C.Error) {
              var Wd;
              null === (Wd = yd) || void 0 === Wd || Wd.reject(new hd.e(`the room refused the join (code ${Od})`, "roomError", Od))
            } else {
              var Fd;
              null === (Fd = yd) || void 0 === Fd || Fd.reject(new hd.e("the room socket closed before the join", "closed", Od, null, od))
            }
          else {
            var Rd;
            null === (Rd = yd) || void 0 === Rd || Rd.reject(new hd.o("the core refused the resume: it held no game"))
          }
        },
        wd = dd.onConnection(((dd, Od, md) => {
          null === Nd ? bd.push([dd, Od, md]) : dd === Nd && gd(Od, md)
        })),
        Ed = dd.attachSocket(td);
      if (null === Ed) throw wd(), new hd.e("the core could not take the room socket", "attach");
      var Jd;
      (Nd = Ed, Xd) && (null === (Jd = Wd.onAttached) || void 0 === Jd || Jd.call(Wd));
      const Ud = Xd ? null : new Rd.e((() => {
        var Od, md;
        null === (Od = dd.flushNet) || void 0 === Od || Od.call(dd), null === (md = yd) || void 0 === md || md.reject(new Rd.i(od ? "socket" : "socket_unopened"))
      }));
      td.addEventListener("open", (() => {
        od = !0, null === Ud || void 0 === Ud || Ud.socketOpened()
      }), {
        once: !0
      });
      let xd = !1;
      const Bd = () => {
        if (xd) return;
        if (xd = !0, wd(), Xd && (td.removeEventListener("close", Yd), !Td && !(null !== vd && void 0 !== vd && vd.aborted && (0, Fd.e)(vd) instanceof hd.p))) return void(pd || dd.closeSocket(Ed));
        Td && dd.leaveRoom(Ed) || dd.sendRaw(Ed, hd.m) ? Hd(Wd, (() => {
          dd.closeSocket(Ed)
        }), hd.h) : dd.closeSocket(Ed)
      };
      try {
        await new Promise(((Od, md) => {
          const Wd = () => {
            var Od;
            Xd && (null === (Od = dd.flushNet) || void 0 === Od || Od.call(dd));
            md((0, Fd.e)(vd))
          };
          null === vd || void 0 === vd || vd.addEventListener("abort", Wd, {
            once: !0
          }), yd = {
            resolve: () => {
              null === vd || void 0 === vd || vd.removeEventListener("abort", Wd), Od()
            },
            reject: dd => {
              null === vd || void 0 === vd || vd.removeEventListener("abort", Wd), md(dd)
            }
          };
          for (const [dd, Fd, Rd] of bd.splice(0)) dd === Nd && gd(Fd, Rd)
        })), null === Ud || void 0 === Ud || Ud.answered()
      } catch (Sd) {
        throw Bd(), Sd
      } finally {
        null === Ud || void 0 === Ud || Ud.stop()
      }
      Xd && td.removeEventListener("close", Yd);
      return {
        conn: Ed,
        seat: md,
        leave: Bd,
        detach: () => {
          xd = !0, wd()
        },
        endJoinAd: () => !xd && dd.sendRaw(Ed, Qd)
      }
    }
    async function bd(dd, Od, md) {
      let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      try {
        const Fd = qd(dd, await (0, vd.f)(dd, Od, md, Wd), Wd);
        Fd.binaryType = "arraybuffer", await new Promise((dd => {
          const Od = Hd(Wd, (() => {
            Fd.close(), dd()
          }), hd.h);
          Fd.addEventListener("open", (() => {
            Fd.send(hd.m)
          })), Fd.addEventListener("close", (() => {
            Od(), dd()
          }))
        }))
      } catch (Fd) {
        console.warn("[bloxd-wasm-client] the held seat of a game left while it reconnected couldn't be released", Fd)
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);