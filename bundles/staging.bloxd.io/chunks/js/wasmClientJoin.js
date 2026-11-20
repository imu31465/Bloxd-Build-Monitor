export const id = 55;
export const ids = [55];
export const modules = {
  40353: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => lq,
      h: () => uq
    });
    const Yq = new TextDecoder;

    function lq(qq) {
      const Eq = new Oq(qq),
        gq = Eq.value();
      if (Eq.at !== qq.length) throw new Error(`msgpack: ${qq.length-Eq.at} bytes after the value`);
      return gq
    }
    class Oq {
      constructor(qq) {
        this.bytes = qq, this.at = 0, this.depth = 0, this.view = void 0, this.view = new DataView(qq.buffer, qq.byteOffset, qq.byteLength)
      }
      value() {
        const qq = this.u8();
        if (qq <= 127) return qq;
        if (qq >= 224) return qq - 256;
        if (qq >= 128 && qq <= 143) return this.map(15 & qq);
        if (qq >= 144 && qq <= 159) return this.array(15 & qq);
        if (qq >= 160 && qq <= 191) return this.str(31 & qq);
        switch (qq) {
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
            throw new Error(`msgpack: unknown byte 0x${qq.toString(16)} at ${this.at-1}`)
        }
      }
      take(qq) {
        const Eq = this.at;
        if (Eq + qq > this.bytes.length) throw new Error(`msgpack: ${qq} bytes past the end at ${Eq}`);
        return this.at = Eq + qq, Eq
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
      int64(qq) {
        const Eq = this.take(8);
        return qq ? this.view.getBigInt64(Eq, !1) : this.view.getBigUint64(Eq, !1)
      }
      str(qq) {
        const Eq = this.take(qq),
          gq = this.bytes;
        if (qq < 16) {
          let lq = "";
          for (let Oq = Eq; Oq < Eq + qq; Oq++) {
            const mq = gq[Oq];
            if (mq >= 128) return Yq.decode(gq.subarray(Eq, Eq + qq));
            lq += String.fromCharCode(mq)
          }
          return lq
        }
        return Yq.decode(gq.subarray(Eq, Eq + qq))
      }
      bin(qq) {
        const Eq = this.take(qq);
        return this.bytes.subarray(Eq, Eq + qq)
      }
      enter() {
        if (++this.depth > 512) throw new Error("msgpack: nested too deep")
      }
      array(qq) {
        this.enter();
        const Eq = [];
        for (let gq = 0; gq < qq; gq++) Eq.push(this.value());
        return this.depth--, Eq
      }
      map(qq) {
        this.enter();
        const Eq = {};
        for (let gq = 0; gq < qq; gq++) {
          const qq = this.value(),
            gq = this.value();
          Eq["__proto__" === qq ? "__proto_" : String(qq)] = gq
        }
        return this.depth--, Eq
      }
      ext(qq) {
        const Eq = this.view.getInt8(this.take(1)),
          gq = this.take(qq);
        if (0 !== Eq) {
          if (-1 === Eq) {
            if (1 === qq) return new Date(NaN);
            if (4 === qq) return new Date(1e3 * this.view.getUint32(gq, !1));
            if (8 === qq) {
              const qq = this.view.getUint32(gq, !1),
                Eq = qq >>> 2,
                Yq = 4294967296 * (3 & qq) + this.view.getUint32(gq + 4, !1);
              return new Date(1e3 * Yq + Eq / 1e6)
            }
            if (12 === qq) {
              const qq = this.view.getUint32(gq, !1),
                Eq = 4294967296 * this.view.getInt32(gq + 4, !1) + this.view.getUint32(gq + 8, !1);
              return new Date(1e3 * Eq + qq / 1e6)
            }
          }
          throw new Error(`msgpack: ext type ${Eq} of ${qq} bytes`)
        }
      }
    }
    const mq = new TextEncoder,
      xq = -(2n ** 63n),
      Aq = 2n ** 63n - 1n,
      cq = 2n ** 64n - 1n;

    function uq(qq) {
      const Eq = new Bq;
      return Eq.value(qq, 0), Eq.bytes()
    }
    class Bq {
      constructor() {
        this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
      }
      bytes() {
        return this.buf.subarray(0, this.at)
      }
      value(qq, Eq) {
        if (Eq > 512) throw new Error("msgpack: nested too deep");
        switch (typeof qq) {
          case "undefined":
            return this.u8(212), this.u8(0), void this.u8(0);
          case "boolean":
            return void this.u8(qq ? 195 : 194);
          case "number":
            return void this.number(qq);
          case "bigint":
            return void this.bigint(qq);
          case "string":
            return void this.string(qq);
          case "object":
            if (null === qq) this.u8(192);
            else if (qq instanceof Uint8Array) this.head(qq.length, 196, -1, 197, 198), this.room(qq.length), this.buf.set(qq, this.at), this.at += qq.length;
            else if (Array.isArray(qq)) {
              this.head(qq.length, 220, 144, 220, 221);
              for (const gq of qq) this.value(gq, Eq + 1)
            } else {
              var gq, Yq;
              if (Object.getPrototypeOf(qq) !== Object.prototype && null !== Object.getPrototypeOf(qq)) throw new Error(`msgpack: can't encode a ${null!==(gq=null===(Yq=qq.constructor)||void 0===Yq?void 0:Yq.name)&&void 0!==gq?gq:"object"}`);
              {
                const gq = Object.keys(qq);
                this.head(gq.length, 222, 128, 222, 223);
                for (const Yq of gq) this.string(Yq), this.value(qq[Yq], Eq + 1)
              }
            }
            return;
          default:
            throw new Error("msgpack: can't encode a " + typeof qq)
        }
      }
      number(qq) {
        Number.isInteger(qq) && qq >= -2147483648 && qq <= 4294967295 ? qq >= 0 ? qq < 128 ? this.u8(qq) : qq < 256 ? (this.u8(204), this.u8(qq)) : qq < 65536 ? (this.u8(205), this.u16(qq)) : (this.u8(206), this.u32(qq)) : qq >= -32 ? this.u8(qq + 256) : qq >= -128 ? (this.u8(208), this.u8(qq + 256)) : qq >= -32768 ? (this.u8(209), this.u16(qq + 65536)) : (this.u8(210), this.u32(qq >>> 0)) : (this.u8(203), this.room(8), this.view.setFloat64(this.at, qq, !1), this.at += 8)
      }
      bigint(qq) {
        const Eq = qq >= xq && qq <= Aq;
        if (!Eq && (qq < 0n || qq > cq)) throw new Error("msgpack: a BigInt past 64 bits");
        this.u8(Eq ? 211 : 207), this.room(8), Eq ? this.view.setBigInt64(this.at, qq, !1) : this.view.setBigUint64(this.at, qq, !1), this.at += 8
      }
      string(qq) {
        const Eq = mq.encode(qq);
        this.head(Eq.length, 217, 160, 218, 219), this.room(Eq.length), this.buf.set(Eq, this.at), this.at += Eq.length
      }
      head(qq, Eq, gq, Yq, lq) {
        gq >= 0 && qq < (160 === gq ? 32 : 16) ? this.u8(gq | qq) : Eq !== Yq && qq < 256 ? (this.u8(Eq), this.u8(qq)) : qq < 65536 ? (this.u8(Yq), this.u16(qq)) : (this.u8(lq), this.u32(qq))
      }
      room(qq) {
        if (this.at + qq <= this.buf.length) return;
        let Eq = 2 * this.buf.length;
        for (; Eq < this.at + qq;) Eq *= 2;
        const gq = new Uint8Array(Eq);
        gq.set(this.buf.subarray(0, this.at)), this.buf = gq, this.view = new DataView(gq.buffer)
      }
      u8(qq) {
        this.room(1), this.buf[this.at++] = qq
      }
      u16(qq) {
        this.room(2), this.view.setUint16(this.at, qq, !1), this.at += 2
      }
      u32(qq) {
        this.room(4), this.view.setUint32(this.at, qq, !1), this.at += 4
      }
    }
  },
  43053: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      joinRoom: () => Wq,
      leaveHeldSeat: () => Hq,
      resumeRoom: () => aq
    });
    var Yq = gq(163),
      lq = gq(1792),
      Oq = gq(39012),
      mq = gq(1758),
      xq = gq(40353),
      Aq = gq(4622),
      cq = gq(40599),
      uq = gq(40685);
    const Bq = Uint8Array.of(13, ...(0, xq.h)(Yq.d));
    async function Wq(qq, Eq) {
      let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      try {
        return await Nq(qq, Eq, gq)
      } catch (lq) {
        var Yq;
        const Oq = await (null === (Yq = Eq.optionsAfterRefusal) || void 0 === Yq ? void 0 : Yq.call(Eq, lq));
        if (!Oq) throw lq;
        return Nq(qq, {
          ...Eq,
          joinOptions: Oq
        }, {
          ...gq,
          early: void 0
        })
      }
    }
    async function Nq(qq, Eq, gq) {
      var Yq;
      const {
        signal: Oq
      } = gq, mq = () => (0, uq.h)(Eq.endpoint, Eq.roomName, Eq.joinOptions, gq), {
        early: xq
      } = gq, Aq = xq ? null !== (Yq = await xq.take(Oq)) && void 0 !== Yq ? Yq : await xq.reserveInstead(mq, Oq) : await mq();
      return (0, lq.o)(Oq), jq(qq, Eq.endpoint, Aq, gq, !1)
    }
    async function aq(qq, Eq, gq, Yq) {
      let Oq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      const mq = await (0, uq.f)(Eq, gq, Yq, Oq);
      return (0, lq.o)(Oq.signal), jq(qq, Eq, mq, Oq, !0)
    }

    function Vq(qq, Eq, gq) {
      const Yq = (0, uq.i)(qq, Eq);
      return gq.createSocket ? gq.createSocket(Yq) : new WebSocket(Yq)
    }

    function dq(qq, Eq, gq) {
      var Yq;
      let lq = !1;
      return (null !== (Yq = qq.setTimer) && void 0 !== Yq ? Yq : (qq, Eq) => {
        setTimeout(qq, Eq)
      })((() => {
        lq || Eq()
      }), gq), () => {
        lq = !0
      }
    }
    async function jq(qq, Eq, gq, Yq, xq) {
      const {
        signal: uq
      } = Yq, Wq = Vq(Eq, gq, Yq);
      let Nq = null,
        aq = null;
      const jq = [];
      let Hq = !1,
        oq = !1;
      const Pq = qq => {
        var Eq;
        oq = !0, null === (Eq = aq) || void 0 === Eq || Eq.reject(new cq.e("the room socket closed before the resume", "closed", qq.code))
      };
      xq && Wq.addEventListener("close", Pq);
      const Qq = (qq, Eq) => {
          var gq;
          if (qq === (xq ? Aq.u.Resumed : Aq.u.Activated)) Hq = !0, null === (gq = aq) || void 0 === gq || gq.resolve();
          else if (!xq || qq !== Aq.u.ResumeRefused && qq !== Aq.u.Activated)
            if (qq === Aq.u.Error) {
              var Yq;
              null === (Yq = aq) || void 0 === Yq || Yq.reject(new cq.e(`the room refused the join (code ${Eq})`, "roomError", Eq))
            } else {
              var lq;
              null === (lq = aq) || void 0 === lq || lq.reject(new cq.e("the room socket closed before the join", "closed", Eq))
            }
          else {
            var Oq;
            null === (Oq = aq) || void 0 === Oq || Oq.reject(new cq.o("the core refused the resume: it held no game"))
          }
        },
        yq = qq.onConnection(((qq, Eq, gq) => {
          null === Nq ? jq.push([qq, Eq, gq]) : qq === Nq && Qq(Eq, gq)
        })),
        tq = qq.attachSocket(Wq);
      if (null === tq) throw yq(), new cq.e("the core could not take the room socket", "attach");
      var rq;
      (Nq = tq, xq) && (null === (rq = Yq.onAttached) || void 0 === rq || rq.call(Yq));
      const vq = xq ? null : new mq.c(Oq.e, (() => {
        var Eq, gq;
        null === (Eq = qq.flushNet) || void 0 === Eq || Eq.call(qq), null === (gq = aq) || void 0 === gq || gq.reject(new Oq.f)
      }));
      let hq = !1;
      const nq = () => {
        if (hq) return;
        if (hq = !0, yq(), xq && (Wq.removeEventListener("close", Pq), !Hq && !(null !== uq && void 0 !== uq && uq.aborted && (0, lq.e)(uq) instanceof cq.p))) return void(oq || qq.closeSocket(tq));
        Hq && qq.leaveRoom(tq) || qq.sendRaw(tq, cq.k) ? dq(Yq, (() => {
          qq.closeSocket(tq)
        }), cq.h) : qq.closeSocket(tq)
      };
      try {
        await new Promise(((Eq, gq) => {
          const Yq = () => {
            var Eq;
            xq && (null === (Eq = qq.flushNet) || void 0 === Eq || Eq.call(qq));
            gq((0, lq.e)(uq))
          };
          null === uq || void 0 === uq || uq.addEventListener("abort", Yq, {
            once: !0
          }), aq = {
            resolve: () => {
              null === uq || void 0 === uq || uq.removeEventListener("abort", Yq), Eq()
            },
            reject: qq => {
              null === uq || void 0 === uq || uq.removeEventListener("abort", Yq), gq(qq)
            }
          };
          for (const [qq, lq, Oq] of jq.splice(0)) qq === Nq && Qq(lq, Oq)
        }))
      } catch (bq) {
        throw nq(), bq
      } finally {
        null === vq || void 0 === vq || vq.stop()
      }
      xq && Wq.removeEventListener("close", Pq);
      return {
        conn: tq,
        seat: gq,
        leave: nq,
        detach: () => {
          hq = !0, yq()
        },
        endJoinAd: () => !hq && qq.sendRaw(tq, Bq)
      }
    }
    async function Hq(qq, Eq, gq) {
      let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      try {
        const lq = Vq(qq, await (0, uq.f)(qq, Eq, gq, Yq), Yq);
        lq.binaryType = "arraybuffer", await new Promise((qq => {
          const Eq = dq(Yq, (() => {
            lq.close(), qq()
          }), cq.h);
          lq.addEventListener("open", (() => {
            lq.send(cq.k)
          })), lq.addEventListener("close", (() => {
            Eq(), qq()
          }))
        }))
      } catch (lq) {
        console.warn("[bloxd-wasm-client] the held seat of a game left while it reconnected couldn't be released", lq)
      }
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);