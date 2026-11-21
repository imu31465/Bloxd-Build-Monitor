export const id = 55;
export const ids = [55];
export const modules = {
  40047: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => qQ,
      f: () => uQ
    });
    const LQ = new TextDecoder;

    function qQ(QQ) {
      const FQ = new oQ(QQ),
        wQ = FQ.value();
      if (FQ.at !== QQ.length) throw new Error(`msgpack: ${QQ.length-FQ.at} bytes after the value`);
      return wQ
    }
    class oQ {
      constructor(QQ) {
        this.bytes = QQ, this.at = 0, this.depth = 0, this.view = void 0, this.view = new DataView(QQ.buffer, QQ.byteOffset, QQ.byteLength)
      }
      value() {
        const QQ = this.u8();
        if (QQ <= 127) return QQ;
        if (QQ >= 224) return QQ - 256;
        if (QQ >= 128 && QQ <= 143) return this.map(15 & QQ);
        if (QQ >= 144 && QQ <= 159) return this.array(15 & QQ);
        if (QQ >= 160 && QQ <= 191) return this.str(31 & QQ);
        switch (QQ) {
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
            throw new Error(`msgpack: unknown byte 0x${QQ.toString(16)} at ${this.at-1}`)
        }
      }
      take(QQ) {
        const FQ = this.at;
        if (FQ + QQ > this.bytes.length) throw new Error(`msgpack: ${QQ} bytes past the end at ${FQ}`);
        return this.at = FQ + QQ, FQ
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
      int64(QQ) {
        const FQ = this.take(8);
        return QQ ? this.view.getBigInt64(FQ, !1) : this.view.getBigUint64(FQ, !1)
      }
      str(QQ) {
        const FQ = this.take(QQ),
          wQ = this.bytes;
        if (QQ < 16) {
          let qQ = "";
          for (let oQ = FQ; oQ < FQ + QQ; oQ++) {
            const DQ = wQ[oQ];
            if (DQ >= 128) return LQ.decode(wQ.subarray(FQ, FQ + QQ));
            qQ += String.fromCharCode(DQ)
          }
          return qQ
        }
        return LQ.decode(wQ.subarray(FQ, FQ + QQ))
      }
      bin(QQ) {
        const FQ = this.take(QQ);
        return this.bytes.subarray(FQ, FQ + QQ)
      }
      enter() {
        if (++this.depth > 512) throw new Error("msgpack: nested too deep")
      }
      array(QQ) {
        this.enter();
        const FQ = [];
        for (let wQ = 0; wQ < QQ; wQ++) FQ.push(this.value());
        return this.depth--, FQ
      }
      map(QQ) {
        this.enter();
        const FQ = {};
        for (let wQ = 0; wQ < QQ; wQ++) {
          const QQ = this.value(),
            wQ = this.value();
          FQ["__proto__" === QQ ? "__proto_" : String(QQ)] = wQ
        }
        return this.depth--, FQ
      }
      ext(QQ) {
        const FQ = this.view.getInt8(this.take(1)),
          wQ = this.take(QQ);
        if (0 !== FQ) {
          if (-1 === FQ) {
            if (1 === QQ) return new Date(NaN);
            if (4 === QQ) return new Date(1e3 * this.view.getUint32(wQ, !1));
            if (8 === QQ) {
              const QQ = this.view.getUint32(wQ, !1),
                FQ = QQ >>> 2,
                LQ = 4294967296 * (3 & QQ) + this.view.getUint32(wQ + 4, !1);
              return new Date(1e3 * LQ + FQ / 1e6)
            }
            if (12 === QQ) {
              const QQ = this.view.getUint32(wQ, !1),
                FQ = 4294967296 * this.view.getInt32(wQ + 4, !1) + this.view.getUint32(wQ + 8, !1);
              return new Date(1e3 * FQ + QQ / 1e6)
            }
          }
          throw new Error(`msgpack: ext type ${FQ} of ${QQ} bytes`)
        }
      }
    }
    const DQ = new TextEncoder,
      kQ = -(2n ** 63n),
      vQ = 2n ** 63n - 1n,
      mQ = 2n ** 64n - 1n;

    function uQ(QQ) {
      const FQ = new HQ;
      return FQ.value(QQ, 0), FQ.bytes()
    }
    class HQ {
      constructor() {
        this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
      }
      bytes() {
        return this.buf.subarray(0, this.at)
      }
      value(QQ, FQ) {
        if (FQ > 512) throw new Error("msgpack: nested too deep");
        switch (typeof QQ) {
          case "undefined":
            return this.u8(212), this.u8(0), void this.u8(0);
          case "boolean":
            return void this.u8(QQ ? 195 : 194);
          case "number":
            return void this.number(QQ);
          case "bigint":
            return void this.bigint(QQ);
          case "string":
            return void this.string(QQ);
          case "object":
            if (null === QQ) this.u8(192);
            else if (QQ instanceof Uint8Array) this.head(QQ.length, 196, -1, 197, 198), this.room(QQ.length), this.buf.set(QQ, this.at), this.at += QQ.length;
            else if (Array.isArray(QQ)) {
              this.head(QQ.length, 220, 144, 220, 221);
              for (const wQ of QQ) this.value(wQ, FQ + 1)
            } else {
              var wQ, LQ;
              if (Object.getPrototypeOf(QQ) !== Object.prototype && null !== Object.getPrototypeOf(QQ)) throw new Error(`msgpack: can't encode a ${null!==(wQ=null===(LQ=QQ.constructor)||void 0===LQ?void 0:LQ.name)&&void 0!==wQ?wQ:"object"}`);
              {
                const wQ = Object.keys(QQ);
                this.head(wQ.length, 222, 128, 222, 223);
                for (const LQ of wQ) this.string(LQ), this.value(QQ[LQ], FQ + 1)
              }
            }
            return;
          default:
            throw new Error("msgpack: can't encode a " + typeof QQ)
        }
      }
      number(QQ) {
        Number.isInteger(QQ) && QQ >= -2147483648 && QQ <= 4294967295 ? QQ >= 0 ? QQ < 128 ? this.u8(QQ) : QQ < 256 ? (this.u8(204), this.u8(QQ)) : QQ < 65536 ? (this.u8(205), this.u16(QQ)) : (this.u8(206), this.u32(QQ)) : QQ >= -32 ? this.u8(QQ + 256) : QQ >= -128 ? (this.u8(208), this.u8(QQ + 256)) : QQ >= -32768 ? (this.u8(209), this.u16(QQ + 65536)) : (this.u8(210), this.u32(QQ >>> 0)) : (this.u8(203), this.room(8), this.view.setFloat64(this.at, QQ, !1), this.at += 8)
      }
      bigint(QQ) {
        const FQ = QQ >= kQ && QQ <= vQ;
        if (!FQ && (QQ < 0n || QQ > mQ)) throw new Error("msgpack: a BigInt past 64 bits");
        this.u8(FQ ? 211 : 207), this.room(8), FQ ? this.view.setBigInt64(this.at, QQ, !1) : this.view.setBigUint64(this.at, QQ, !1), this.at += 8
      }
      string(QQ) {
        const FQ = DQ.encode(QQ);
        this.head(FQ.length, 217, 160, 218, 219), this.room(FQ.length), this.buf.set(FQ, this.at), this.at += FQ.length
      }
      head(QQ, FQ, wQ, LQ, qQ) {
        wQ >= 0 && QQ < (160 === wQ ? 32 : 16) ? this.u8(wQ | QQ) : FQ !== LQ && QQ < 256 ? (this.u8(FQ), this.u8(QQ)) : QQ < 65536 ? (this.u8(LQ), this.u16(QQ)) : (this.u8(qQ), this.u32(QQ))
      }
      room(QQ) {
        if (this.at + QQ <= this.buf.length) return;
        let FQ = 2 * this.buf.length;
        for (; FQ < this.at + QQ;) FQ *= 2;
        const wQ = new Uint8Array(FQ);
        wQ.set(this.buf.subarray(0, this.at)), this.buf = wQ, this.view = new DataView(wQ.buffer)
      }
      u8(QQ) {
        this.room(1), this.buf[this.at++] = QQ
      }
      u16(QQ) {
        this.room(2), this.view.setUint16(this.at, QQ, !1), this.at += 2
      }
      u32(QQ) {
        this.room(4), this.view.setUint32(this.at, QQ, !1), this.at += 4
      }
    }
  },
  42705: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      joinRoom: () => bQ,
      leaveHeldSeat: () => MQ,
      resumeRoom: () => xQ
    });
    var LQ = wQ(160),
      qQ = wQ(1804),
      oQ = wQ(38607),
      DQ = wQ(1772),
      kQ = wQ(40047),
      vQ = wQ(4632),
      mQ = wQ(40283),
      uQ = wQ(40362);
    const HQ = Uint8Array.of(13, ...(0, kQ.f)(LQ.h));
    async function bQ(QQ, FQ) {
      let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      try {
        return await YQ(QQ, FQ, wQ)
      } catch (qQ) {
        var LQ;
        const oQ = await (null === (LQ = FQ.optionsAfterRefusal) || void 0 === LQ ? void 0 : LQ.call(FQ, qQ));
        if (!oQ) throw qQ;
        return YQ(QQ, {
          ...FQ,
          joinOptions: oQ
        }, {
          ...wQ,
          early: void 0
        })
      }
    }
    async function YQ(QQ, FQ, wQ) {
      var LQ;
      const {
        signal: oQ
      } = wQ, DQ = () => (0, uQ.j)(FQ.endpoint, FQ.roomName, FQ.joinOptions, wQ), {
        early: kQ
      } = wQ, vQ = kQ ? null !== (LQ = await kQ.take(oQ)) && void 0 !== LQ ? LQ : await kQ.reserveInstead(DQ, oQ) : await DQ();
      return (0, qQ.n)(oQ), eQ(QQ, FQ.endpoint, vQ, wQ, !1)
    }
    async function xQ(QQ, FQ, wQ, LQ) {
      let oQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      const DQ = await (0, uQ.h)(FQ, wQ, LQ, oQ);
      return (0, qQ.n)(oQ.signal), eQ(QQ, FQ, DQ, oQ, !0)
    }

    function AQ(QQ, FQ, wQ) {
      const LQ = (0, uQ.n)(QQ, FQ);
      return wQ.createSocket ? wQ.createSocket(LQ) : new WebSocket(LQ)
    }

    function tQ(QQ, FQ, wQ) {
      var LQ;
      let qQ = !1;
      return (null !== (LQ = QQ.setTimer) && void 0 !== LQ ? LQ : (QQ, FQ) => {
        setTimeout(QQ, FQ)
      })((() => {
        qQ || FQ()
      }), wQ), () => {
        qQ = !0
      }
    }
    async function eQ(QQ, FQ, wQ, LQ, kQ) {
      const {
        signal: uQ
      } = LQ, bQ = AQ(FQ, wQ, LQ);
      let YQ = null,
        xQ = null;
      const eQ = [];
      let MQ = !1,
        GQ = !1;
      const pQ = QQ => {
        var FQ;
        GQ = !0, null === (FQ = xQ) || void 0 === FQ || FQ.reject(new mQ.e("the room socket closed before the resume", "closed", QQ.code))
      };
      kQ && bQ.addEventListener("close", pQ);
      const cQ = (QQ, FQ) => {
          var wQ;
          if (QQ === (kQ ? vQ.z.Resumed : vQ.z.Activated)) MQ = !0, null === (wQ = xQ) || void 0 === wQ || wQ.resolve();
          else if (!kQ || QQ !== vQ.z.ResumeRefused && QQ !== vQ.z.Activated)
            if (QQ === vQ.z.Error) {
              var LQ;
              null === (LQ = xQ) || void 0 === LQ || LQ.reject(new mQ.e(`the room refused the join (code ${FQ})`, "roomError", FQ))
            } else {
              var qQ;
              null === (qQ = xQ) || void 0 === qQ || qQ.reject(new mQ.e("the room socket closed before the join", "closed", FQ))
            }
          else {
            var oQ;
            null === (oQ = xQ) || void 0 === oQ || oQ.reject(new mQ.r("the core refused the resume: it held no game"))
          }
        },
        CQ = QQ.onConnection(((QQ, FQ, wQ) => {
          null === YQ ? eQ.push([QQ, FQ, wQ]) : QQ === YQ && cQ(FQ, wQ)
        })),
        SQ = QQ.attachSocket(bQ);
      if (null === SQ) throw CQ(), new mQ.e("the core could not take the room socket", "attach");
      var iQ;
      (YQ = SQ, kQ) && (null === (iQ = LQ.onAttached) || void 0 === iQ || iQ.call(LQ));
      const WQ = kQ ? null : new DQ.d(oQ.c, (() => {
        var FQ, wQ;
        null === (FQ = QQ.flushNet) || void 0 === FQ || FQ.call(QQ), null === (wQ = xQ) || void 0 === wQ || wQ.reject(new oQ.d)
      }));
      let RQ = !1;
      const OQ = () => {
        if (RQ) return;
        if (RQ = !0, CQ(), kQ && (bQ.removeEventListener("close", pQ), !MQ && !(null !== uQ && void 0 !== uQ && uQ.aborted && (0, qQ.e)(uQ) instanceof mQ.v))) return void(GQ || QQ.closeSocket(SQ));
        MQ && QQ.leaveRoom(SQ) || QQ.sendRaw(SQ, mQ.m) ? tQ(LQ, (() => {
          QQ.closeSocket(SQ)
        }), mQ.i) : QQ.closeSocket(SQ)
      };
      try {
        await new Promise(((FQ, wQ) => {
          const LQ = () => {
            var FQ;
            kQ && (null === (FQ = QQ.flushNet) || void 0 === FQ || FQ.call(QQ));
            wQ((0, qQ.e)(uQ))
          };
          null === uQ || void 0 === uQ || uQ.addEventListener("abort", LQ, {
            once: !0
          }), xQ = {
            resolve: () => {
              null === uQ || void 0 === uQ || uQ.removeEventListener("abort", LQ), FQ()
            },
            reject: QQ => {
              null === uQ || void 0 === uQ || uQ.removeEventListener("abort", LQ), wQ(QQ)
            }
          };
          for (const [QQ, qQ, oQ] of eQ.splice(0)) QQ === YQ && cQ(qQ, oQ)
        }))
      } catch (sQ) {
        throw OQ(), sQ
      } finally {
        null === WQ || void 0 === WQ || WQ.stop()
      }
      kQ && bQ.removeEventListener("close", pQ);
      return {
        conn: SQ,
        seat: wQ,
        leave: OQ,
        detach: () => {
          RQ = !0, CQ()
        },
        endJoinAd: () => !RQ && QQ.sendRaw(SQ, HQ)
      }
    }
    async function MQ(QQ, FQ, wQ) {
      let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      try {
        const qQ = AQ(QQ, await (0, uQ.h)(QQ, FQ, wQ, LQ), LQ);
        qQ.binaryType = "arraybuffer", await new Promise((QQ => {
          const FQ = tQ(LQ, (() => {
            qQ.close(), QQ()
          }), mQ.i);
          qQ.addEventListener("open", (() => {
            qQ.send(mQ.m)
          })), qQ.addEventListener("close", (() => {
            FQ(), QQ()
          }))
        }))
      } catch (qQ) {
        console.warn("[bloxd-wasm-client] the held seat of a game left while it reconnected couldn't be released", qQ)
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);