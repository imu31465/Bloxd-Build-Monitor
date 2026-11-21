export const id = 55;
export const ids = [55];
export const modules = {
  40610: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Nd,
      e: () => Kd
    });
    const pd = new TextDecoder;

    function Nd(dd) {
      const Jd = new Wd(dd),
        kd = Jd.value();
      if (Jd.at !== dd.length) throw new Error(`msgpack: ${dd.length-Jd.at} bytes after the value`);
      return kd
    }
    class Wd {
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
        const Jd = this.at;
        if (Jd + dd > this.bytes.length) throw new Error(`msgpack: ${dd} bytes past the end at ${Jd}`);
        return this.at = Jd + dd, Jd
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
        const Jd = this.take(8);
        return dd ? this.view.getBigInt64(Jd, !1) : this.view.getBigUint64(Jd, !1)
      }
      str(dd) {
        const Jd = this.take(dd),
          kd = this.bytes;
        if (dd < 16) {
          let Nd = "";
          for (let Wd = Jd; Wd < Jd + dd; Wd++) {
            const Pd = kd[Wd];
            if (Pd >= 128) return pd.decode(kd.subarray(Jd, Jd + dd));
            Nd += String.fromCharCode(Pd)
          }
          return Nd
        }
        return pd.decode(kd.subarray(Jd, Jd + dd))
      }
      bin(dd) {
        const Jd = this.take(dd);
        return this.bytes.subarray(Jd, Jd + dd)
      }
      enter() {
        if (++this.depth > 512) throw new Error("msgpack: nested too deep")
      }
      array(dd) {
        this.enter();
        const Jd = [];
        for (let kd = 0; kd < dd; kd++) Jd.push(this.value());
        return this.depth--, Jd
      }
      map(dd) {
        this.enter();
        const Jd = {};
        for (let kd = 0; kd < dd; kd++) {
          const dd = this.value(),
            kd = this.value();
          Jd["__proto__" === dd ? "__proto_" : String(dd)] = kd
        }
        return this.depth--, Jd
      }
      ext(dd) {
        const Jd = this.view.getInt8(this.take(1)),
          kd = this.take(dd);
        if (0 !== Jd) {
          if (-1 === Jd) {
            if (1 === dd) return new Date(NaN);
            if (4 === dd) return new Date(1e3 * this.view.getUint32(kd, !1));
            if (8 === dd) {
              const dd = this.view.getUint32(kd, !1),
                Jd = dd >>> 2,
                pd = 4294967296 * (3 & dd) + this.view.getUint32(kd + 4, !1);
              return new Date(1e3 * pd + Jd / 1e6)
            }
            if (12 === dd) {
              const dd = this.view.getUint32(kd, !1),
                Jd = 4294967296 * this.view.getInt32(kd + 4, !1) + this.view.getUint32(kd + 8, !1);
              return new Date(1e3 * Jd + dd / 1e6)
            }
          }
          throw new Error(`msgpack: ext type ${Jd} of ${dd} bytes`)
        }
      }
    }
    const Pd = new TextEncoder,
      Zd = -(2n ** 63n),
      gd = 2n ** 63n - 1n,
      Cd = 2n ** 64n - 1n;

    function Kd(dd) {
      const Jd = new od;
      return Jd.value(dd, 0), Jd.bytes()
    }
    class od {
      constructor() {
        this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
      }
      bytes() {
        return this.buf.subarray(0, this.at)
      }
      value(dd, Jd) {
        if (Jd > 512) throw new Error("msgpack: nested too deep");
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
              for (const kd of dd) this.value(kd, Jd + 1)
            } else {
              var kd, pd;
              if (Object.getPrototypeOf(dd) !== Object.prototype && null !== Object.getPrototypeOf(dd)) throw new Error(`msgpack: can't encode a ${null!==(kd=null===(pd=dd.constructor)||void 0===pd?void 0:pd.name)&&void 0!==kd?kd:"object"}`);
              {
                const kd = Object.keys(dd);
                this.head(kd.length, 222, 128, 222, 223);
                for (const pd of kd) this.string(pd), this.value(dd[pd], Jd + 1)
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
        const Jd = dd >= Zd && dd <= gd;
        if (!Jd && (dd < 0n || dd > Cd)) throw new Error("msgpack: a BigInt past 64 bits");
        this.u8(Jd ? 211 : 207), this.room(8), Jd ? this.view.setBigInt64(this.at, dd, !1) : this.view.setBigUint64(this.at, dd, !1), this.at += 8
      }
      string(dd) {
        const Jd = Pd.encode(dd);
        this.head(Jd.length, 217, 160, 218, 219), this.room(Jd.length), this.buf.set(Jd, this.at), this.at += Jd.length
      }
      head(dd, Jd, kd, pd, Nd) {
        kd >= 0 && dd < (160 === kd ? 32 : 16) ? this.u8(kd | dd) : Jd !== pd && dd < 256 ? (this.u8(Jd), this.u8(dd)) : dd < 65536 ? (this.u8(pd), this.u16(dd)) : (this.u8(Nd), this.u32(dd))
      }
      room(dd) {
        if (this.at + dd <= this.buf.length) return;
        let Jd = 2 * this.buf.length;
        for (; Jd < this.at + dd;) Jd *= 2;
        const kd = new Uint8Array(Jd);
        kd.set(this.buf.subarray(0, this.at)), this.buf = kd, this.view = new DataView(kd.buffer)
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
  43210: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      joinRoom: () => ld,
      leaveHeldSeat: () => Id,
      resumeRoom: () => Ld
    });
    var pd = kd(149),
      Nd = kd(1827),
      Wd = kd(39222),
      Pd = kd(1797),
      Zd = kd(40610),
      gd = kd(4680),
      Cd = kd(40868),
      Kd = kd(40933);
    const od = Uint8Array.of(13, ...(0, Zd.e)(pd.g));
    async function ld(dd, Jd) {
      let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      try {
        return await Qd(dd, Jd, kd)
      } catch (Nd) {
        var pd;
        const Wd = await (null === (pd = Jd.optionsAfterRefusal) || void 0 === pd ? void 0 : pd.call(Jd, Nd));
        if (!Wd) throw Nd;
        return Qd(dd, {
          ...Jd,
          joinOptions: Wd
        }, {
          ...kd,
          early: void 0
        })
      }
    }
    async function Qd(dd, Jd, kd) {
      var pd;
      const {
        signal: Wd
      } = kd, Pd = () => (0, Kd.i)(Jd.endpoint, Jd.roomName, Jd.joinOptions, kd), {
        early: Zd
      } = kd, gd = Zd ? null !== (pd = await Zd.take(Wd)) && void 0 !== pd ? pd : await Zd.reserveInstead(Pd, Wd) : await Pd();
      return (0, Nd.j)(Wd), Rd(dd, Jd.endpoint, gd, kd, !1)
    }
    async function Ld(dd, Jd, kd, pd) {
      let Wd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      const Pd = await (0, Kd.e)(Jd, kd, pd, Wd);
      return (0, Nd.j)(Wd.signal), Rd(dd, Jd, Pd, Wd, !0)
    }

    function Od(dd, Jd, kd) {
      const pd = (0, Kd.k)(dd, Jd);
      return kd.createSocket ? kd.createSocket(pd) : new WebSocket(pd)
    }

    function ed(dd, Jd, kd) {
      var pd;
      let Nd = !1;
      return (null !== (pd = dd.setTimer) && void 0 !== pd ? pd : (dd, Jd) => {
        setTimeout(dd, Jd)
      })((() => {
        Nd || Jd()
      }), kd), () => {
        Nd = !0
      }
    }
    async function Rd(dd, Jd, kd, pd, Zd) {
      const {
        signal: Kd
      } = pd, ld = Od(Jd, kd, pd);
      let Qd = null,
        Ld = null;
      const Rd = [];
      let Id = !1,
        Gd = !1;
      const vd = dd => {
        var Jd;
        Gd = !0, null === (Jd = Ld) || void 0 === Jd || Jd.reject(new Cd.d("the room socket closed before the resume", "closed", dd.code))
      };
      Zd && ld.addEventListener("close", vd);
      const xd = (dd, Jd) => {
          var kd;
          if (dd === (Zd ? gd.C.Resumed : gd.C.Activated)) Id = !0, null === (kd = Ld) || void 0 === kd || kd.resolve();
          else if (!Zd || dd !== gd.C.ResumeRefused && dd !== gd.C.Activated)
            if (dd === gd.C.Error) {
              var pd;
              null === (pd = Ld) || void 0 === pd || pd.reject(new Cd.d(`the room refused the join (code ${Jd})`, "roomError", Jd))
            } else {
              var Nd;
              null === (Nd = Ld) || void 0 === Nd || Nd.reject(new Cd.d("the room socket closed before the join", "closed", Jd))
            }
          else {
            var Wd;
            null === (Wd = Ld) || void 0 === Wd || Wd.reject(new Cd.q("the core refused the resume: it held no game"))
          }
        },
        qd = dd.onConnection(((dd, Jd, kd) => {
          null === Qd ? Rd.push([dd, Jd, kd]) : dd === Qd && xd(Jd, kd)
        })),
        Bd = dd.attachSocket(ld);
      if (null === Bd) throw qd(), new Cd.d("the core could not take the room socket", "attach");
      var sd;
      (Qd = Bd, Zd) && (null === (sd = pd.onAttached) || void 0 === sd || sd.call(pd));
      const ad = Zd ? null : new Pd.e(Wd.d, (() => {
        var Jd, kd;
        null === (Jd = dd.flushNet) || void 0 === Jd || Jd.call(dd), null === (kd = Ld) || void 0 === kd || kd.reject(new Wd.g)
      }));
      let Md = !1;
      const Fd = () => {
        if (Md) return;
        if (Md = !0, qd(), Zd && (ld.removeEventListener("close", vd), !Id && !(null !== Kd && void 0 !== Kd && Kd.aborted && (0, Nd.c)(Kd) instanceof Cd.u))) return void(Gd || dd.closeSocket(Bd));
        Id && dd.leaveRoom(Bd) || dd.sendRaw(Bd, Cd.l) ? ed(pd, (() => {
          dd.closeSocket(Bd)
        }), Cd.g) : dd.closeSocket(Bd)
      };
      try {
        await new Promise(((Jd, kd) => {
          const pd = () => {
            var Jd;
            Zd && (null === (Jd = dd.flushNet) || void 0 === Jd || Jd.call(dd));
            kd((0, Nd.c)(Kd))
          };
          null === Kd || void 0 === Kd || Kd.addEventListener("abort", pd, {
            once: !0
          }), Ld = {
            resolve: () => {
              null === Kd || void 0 === Kd || Kd.removeEventListener("abort", pd), Jd()
            },
            reject: dd => {
              null === Kd || void 0 === Kd || Kd.removeEventListener("abort", pd), kd(dd)
            }
          };
          for (const [dd, Nd, Wd] of Rd.splice(0)) dd === Qd && xd(Nd, Wd)
        }))
      } catch (Yd) {
        throw Fd(), Yd
      } finally {
        null === ad || void 0 === ad || ad.stop()
      }
      Zd && ld.removeEventListener("close", vd);
      return {
        conn: Bd,
        seat: kd,
        leave: Fd,
        detach: () => {
          Md = !0, qd()
        },
        endJoinAd: () => !Md && dd.sendRaw(Bd, od)
      }
    }
    async function Id(dd, Jd, kd) {
      let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      try {
        const Nd = Od(dd, await (0, Kd.e)(dd, Jd, kd, pd), pd);
        Nd.binaryType = "arraybuffer", await new Promise((dd => {
          const Jd = ed(pd, (() => {
            Nd.close(), dd()
          }), Cd.g);
          Nd.addEventListener("open", (() => {
            Nd.send(Cd.l)
          })), Nd.addEventListener("close", (() => {
            Jd(), dd()
          }))
        }))
      } catch (Nd) {
        console.warn("[bloxd-wasm-client] the held seat of a game left while it reconnected couldn't be released", Nd)
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);