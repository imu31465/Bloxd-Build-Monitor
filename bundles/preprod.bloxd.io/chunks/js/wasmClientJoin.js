export const id = 58;
export const ids = [58];
export const modules = {
  40824: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => op,
      f: () => Dp
    });
    const Op = new TextDecoder;

    function op(pp) {
      const ip = new Ip(pp),
        cp = ip.value();
      if (ip.at !== pp.length) throw new Error(`msgpack: ${pp.length-ip.at} bytes after the value`);
      return cp
    }
    class Ip {
      constructor(pp) {
        this.bytes = pp, this.at = 0, this.depth = 0, this.view = void 0, this.view = new DataView(pp.buffer, pp.byteOffset, pp.byteLength)
      }
      value() {
        const pp = this.u8();
        if (pp <= 127) return pp;
        if (pp >= 224) return pp - 256;
        if (pp >= 128 && pp <= 143) return this.map(15 & pp);
        if (pp >= 144 && pp <= 159) return this.array(15 & pp);
        if (pp >= 160 && pp <= 191) return this.str(31 & pp);
        switch (pp) {
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
            throw new Error(`msgpack: unknown byte 0x${pp.toString(16)} at ${this.at-1}`)
        }
      }
      take(pp) {
        const ip = this.at;
        if (ip + pp > this.bytes.length) throw new Error(`msgpack: ${pp} bytes past the end at ${ip}`);
        return this.at = ip + pp, ip
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
      int64(pp) {
        const ip = this.take(8);
        return pp ? this.view.getBigInt64(ip, !1) : this.view.getBigUint64(ip, !1)
      }
      str(pp) {
        const ip = this.take(pp),
          cp = this.bytes;
        if (pp < 16) {
          let op = "";
          for (let Ip = ip; Ip < ip + pp; Ip++) {
            const Sp = cp[Ip];
            if (Sp >= 128) return Op.decode(cp.subarray(ip, ip + pp));
            op += String.fromCharCode(Sp)
          }
          return op
        }
        return Op.decode(cp.subarray(ip, ip + pp))
      }
      bin(pp) {
        const ip = this.take(pp);
        return this.bytes.subarray(ip, ip + pp)
      }
      enter() {
        if (++this.depth > 512) throw new Error("msgpack: nested too deep")
      }
      array(pp) {
        this.enter();
        const ip = [];
        for (let cp = 0; cp < pp; cp++) ip.push(this.value());
        return this.depth--, ip
      }
      map(pp) {
        this.enter();
        const ip = {};
        for (let cp = 0; cp < pp; cp++) {
          const pp = this.value(),
            cp = this.value();
          ip["__proto__" === pp ? "__proto_" : String(pp)] = cp
        }
        return this.depth--, ip
      }
      ext(pp) {
        const ip = this.view.getInt8(this.take(1)),
          cp = this.take(pp);
        if (0 !== ip) {
          if (-1 === ip) {
            if (1 === pp) return new Date(NaN);
            if (4 === pp) return new Date(1e3 * this.view.getUint32(cp, !1));
            if (8 === pp) {
              const pp = this.view.getUint32(cp, !1),
                ip = pp >>> 2,
                Op = 4294967296 * (3 & pp) + this.view.getUint32(cp + 4, !1);
              return new Date(1e3 * Op + ip / 1e6)
            }
            if (12 === pp) {
              const pp = this.view.getUint32(cp, !1),
                ip = 4294967296 * this.view.getInt32(cp + 4, !1) + this.view.getUint32(cp + 8, !1);
              return new Date(1e3 * ip + pp / 1e6)
            }
          }
          throw new Error(`msgpack: ext type ${ip} of ${pp} bytes`)
        }
      }
    }
    const Sp = new TextEncoder,
      xp = -(2n ** 63n),
      Lp = 2n ** 63n - 1n,
      Yp = 2n ** 64n - 1n;

    function Dp(pp) {
      const ip = new Ap;
      return ip.value(pp, 0), ip.bytes()
    }
    class Ap {
      constructor() {
        this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
      }
      bytes() {
        return this.buf.subarray(0, this.at)
      }
      value(pp, ip) {
        if (ip > 512) throw new Error("msgpack: nested too deep");
        switch (typeof pp) {
          case "undefined":
            return this.u8(212), this.u8(0), void this.u8(0);
          case "boolean":
            return void this.u8(pp ? 195 : 194);
          case "number":
            return void this.number(pp);
          case "bigint":
            return void this.bigint(pp);
          case "string":
            return void this.string(pp);
          case "object":
            if (null === pp) this.u8(192);
            else if (pp instanceof Uint8Array) this.head(pp.length, 196, -1, 197, 198), this.room(pp.length), this.buf.set(pp, this.at), this.at += pp.length;
            else if (Array.isArray(pp)) {
              this.head(pp.length, 220, 144, 220, 221);
              for (const cp of pp) this.value(cp, ip + 1)
            } else {
              var cp, Op;
              if (Object.getPrototypeOf(pp) !== Object.prototype && null !== Object.getPrototypeOf(pp)) throw new Error(`msgpack: can't encode a ${null!==(cp=null===(Op=pp.constructor)||void 0===Op?void 0:Op.name)&&void 0!==cp?cp:"object"}`);
              {
                const cp = Object.keys(pp);
                this.head(cp.length, 222, 128, 222, 223);
                for (const Op of cp) this.string(Op), this.value(pp[Op], ip + 1)
              }
            }
            return;
          default:
            throw new Error("msgpack: can't encode a " + typeof pp)
        }
      }
      number(pp) {
        Number.isInteger(pp) && pp >= -2147483648 && pp <= 4294967295 ? pp >= 0 ? pp < 128 ? this.u8(pp) : pp < 256 ? (this.u8(204), this.u8(pp)) : pp < 65536 ? (this.u8(205), this.u16(pp)) : (this.u8(206), this.u32(pp)) : pp >= -32 ? this.u8(pp + 256) : pp >= -128 ? (this.u8(208), this.u8(pp + 256)) : pp >= -32768 ? (this.u8(209), this.u16(pp + 65536)) : (this.u8(210), this.u32(pp >>> 0)) : (this.u8(203), this.room(8), this.view.setFloat64(this.at, pp, !1), this.at += 8)
      }
      bigint(pp) {
        const ip = pp >= xp && pp <= Lp;
        if (!ip && (pp < 0n || pp > Yp)) throw new Error("msgpack: a BigInt past 64 bits");
        this.u8(ip ? 211 : 207), this.room(8), ip ? this.view.setBigInt64(this.at, pp, !1) : this.view.setBigUint64(this.at, pp, !1), this.at += 8
      }
      string(pp) {
        const ip = Sp.encode(pp);
        this.head(ip.length, 217, 160, 218, 219), this.room(ip.length), this.buf.set(ip, this.at), this.at += ip.length
      }
      head(pp, ip, cp, Op, op) {
        cp >= 0 && pp < (160 === cp ? 32 : 16) ? this.u8(cp | pp) : ip !== Op && pp < 256 ? (this.u8(ip), this.u8(pp)) : pp < 65536 ? (this.u8(Op), this.u16(pp)) : (this.u8(op), this.u32(pp))
      }
      room(pp) {
        if (this.at + pp <= this.buf.length) return;
        let ip = 2 * this.buf.length;
        for (; ip < this.at + pp;) ip *= 2;
        const cp = new Uint8Array(ip);
        cp.set(this.buf.subarray(0, this.at)), this.buf = cp, this.view = new DataView(cp.buffer)
      }
      u8(pp) {
        this.room(1), this.buf[this.at++] = pp
      }
      u16(pp) {
        this.room(2), this.view.setUint16(this.at, pp, !1), this.at += 2
      }
      u32(pp) {
        this.room(4), this.view.setUint32(this.at, pp, !1), this.at += 4
      }
    }
  },
  51199: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      joinRoom: () => Ap,
      leaveHeldSeat: () => vp,
      resumeRoom: () => Wp
    });
    var Op = cp(156),
      op = cp(1216),
      Ip = cp(36689),
      Sp = cp(40824),
      xp = cp(4903),
      Lp = cp(40882),
      Yp = cp(41111);
    const Dp = Uint8Array.of(13, ...(0, Sp.f)(Op.h));
    async function Ap(pp, ip) {
      let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      try {
        return await Pp(pp, ip, cp)
      } catch (op) {
        var Op;
        const Ip = await (null === (Op = ip.optionsAfterRefusal) || void 0 === Op ? void 0 : Op.call(ip, op));
        if (!Ip) throw op;
        return Pp(pp, {
          ...ip,
          joinOptions: Ip
        }, {
          ...cp,
          early: void 0
        })
      }
    }
    async function Pp(pp, ip, cp) {
      var Op;
      const {
        signal: Ip
      } = cp, Sp = () => (0, Yp.h)(ip.endpoint, ip.roomName, ip.joinOptions, cp), {
        early: xp
      } = cp, Lp = xp ? null !== (Op = await xp.take(Ip)) && void 0 !== Op ? Op : await xp.reserveInstead(Sp, Ip) : await Sp();
      return (0, op.j)(Ip), wp(pp, ip.endpoint, Lp, cp, !1)
    }
    async function Wp(pp, ip, cp, Op) {
      let Ip = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      const Sp = await (0, Yp.d)(ip, cp, Op, Ip);
      return (0, op.j)(Ip.signal), wp(pp, ip, Sp, Ip, !0)
    }

    function yp(pp, ip, cp) {
      const Op = (0, Yp.k)(pp, ip);
      return cp.createSocket ? cp.createSocket(Op) : new WebSocket(Op)
    }

    function Up(pp, ip, cp) {
      var Op;
      let op = !1;
      return (null !== (Op = pp.setTimer) && void 0 !== Op ? Op : (pp, ip) => {
        setTimeout(pp, ip)
      })((() => {
        op || ip()
      }), cp), () => {
        op = !0
      }
    }
    async function wp(pp, ip, cp, Op, Sp) {
      const {
        signal: Yp
      } = Op, Ap = yp(ip, cp, Op);
      let Pp = !1,
        Wp = null,
        wp = null;
      const vp = [];
      let tp = !1,
        Hp = !1;
      const dp = pp => {
        var ip;
        Hp = !0, null === (ip = wp) || void 0 === ip || ip.reject(new Lp.d("the room socket closed before the resume", "closed", pp.code))
      };
      Sp && Ap.addEventListener("close", dp);
      const ep = (pp, ip) => {
          var cp;
          if (pp === (Sp ? xp.H.Resumed : xp.H.Activated)) tp = !0, null === (cp = wp) || void 0 === cp || cp.resolve();
          else if (!Sp || pp !== xp.H.ResumeRefused && pp !== xp.H.Activated)
            if (pp === xp.H.Error) {
              var Op;
              null === (Op = wp) || void 0 === Op || Op.reject(new Lp.d(`the room refused the join (code ${ip})`, "roomError", ip))
            } else {
              var op;
              null === (op = wp) || void 0 === op || op.reject(new Lp.d("the room socket closed before the join", "closed", ip, null, Pp))
            }
          else {
            var Ip;
            null === (Ip = wp) || void 0 === Ip || Ip.reject(new Lp.t("the core refused the resume: it held no game"))
          }
        },
        jp = pp.onConnection(((pp, ip, cp) => {
          null === Wp ? vp.push([pp, ip, cp]) : pp === Wp && ep(ip, cp)
        })),
        kp = pp.attachSocket(Ap);
      if (null === kp) throw jp(), new Lp.d("the core could not take the room socket", "attach");
      var mp;
      (Wp = kp, Sp) && (null === (mp = Op.onAttached) || void 0 === mp || mp.call(Op));
      const Rp = Sp ? null : new Ip.d((() => {
        var ip, cp;
        null === (ip = pp.flushNet) || void 0 === ip || ip.call(pp), null === (cp = wp) || void 0 === cp || cp.reject(new Ip.f(Pp ? "socket" : "socket_unopened"))
      }));
      Ap.addEventListener("open", (() => {
        Pp = !0, null === Rp || void 0 === Rp || Rp.socketOpened()
      }), {
        once: !0
      });
      let qp = !1;
      const Mp = () => {
        if (qp) return;
        if (qp = !0, jp(), Sp && (Ap.removeEventListener("close", dp), !tp && !(null !== Yp && void 0 !== Yp && Yp.aborted && (0, op.e)(Yp) instanceof Lp.w))) return void(Hp || pp.closeSocket(kp));
        tp && pp.leaveRoom(kp) || pp.sendRaw(kp, Lp.p) ? Up(Op, (() => {
          pp.closeSocket(kp)
        }), Lp.h) : pp.closeSocket(kp)
      };
      try {
        await new Promise(((ip, cp) => {
          const Op = () => {
            var ip;
            Sp && (null === (ip = pp.flushNet) || void 0 === ip || ip.call(pp));
            cp((0, op.e)(Yp))
          };
          null === Yp || void 0 === Yp || Yp.addEventListener("abort", Op, {
            once: !0
          }), wp = {
            resolve: () => {
              null === Yp || void 0 === Yp || Yp.removeEventListener("abort", Op), ip()
            },
            reject: pp => {
              null === Yp || void 0 === Yp || Yp.removeEventListener("abort", Op), cp(pp)
            }
          };
          for (const [pp, op, Ip] of vp.splice(0)) pp === Wp && ep(op, Ip)
        })), null === Rp || void 0 === Rp || Rp.answered()
      } catch (Cp) {
        throw Mp(), Cp
      } finally {
        null === Rp || void 0 === Rp || Rp.stop()
      }
      Sp && Ap.removeEventListener("close", dp);
      return {
        conn: kp,
        seat: cp,
        leave: Mp,
        detach: () => {
          qp = !0, jp()
        },
        endJoinAd: () => !qp && pp.sendRaw(kp, Dp)
      }
    }
    async function vp(pp, ip, cp) {
      let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      try {
        const op = yp(pp, await (0, Yp.d)(pp, ip, cp, Op), Op);
        op.binaryType = "arraybuffer", await new Promise((pp => {
          const ip = Up(Op, (() => {
            op.close(), pp()
          }), Lp.h);
          op.addEventListener("open", (() => {
            op.send(Lp.p)
          })), op.addEventListener("close", (() => {
            ip(), pp()
          }))
        }))
      } catch (op) {
        console.warn("[bloxd-wasm-client] the held seat of a game left while it reconnected couldn't be released", op)
      }
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);