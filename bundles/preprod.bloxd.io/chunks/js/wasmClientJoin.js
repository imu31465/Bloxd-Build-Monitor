export const id = 60;
export const ids = [60];
export const modules = {
  40850: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => qQ,
      e: () => gQ
    });
    const wQ = new TextDecoder;

    function qQ(QQ) {
      const WQ = new TQ(QQ),
        XQ = WQ.value();
      if (WQ.at !== QQ.length) throw new Error(`msgpack: ${QQ.length-WQ.at} bytes after the value`);
      return XQ
    }
    class TQ {
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
        const WQ = this.at;
        if (WQ + QQ > this.bytes.length) throw new Error(`msgpack: ${QQ} bytes past the end at ${WQ}`);
        return this.at = WQ + QQ, WQ
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
        const WQ = this.take(8);
        return QQ ? this.view.getBigInt64(WQ, !1) : this.view.getBigUint64(WQ, !1)
      }
      str(QQ) {
        const WQ = this.take(QQ),
          XQ = this.bytes;
        if (QQ < 16) {
          let qQ = "";
          for (let TQ = WQ; TQ < WQ + QQ; TQ++) {
            const zQ = XQ[TQ];
            if (zQ >= 128) return wQ.decode(XQ.subarray(WQ, WQ + QQ));
            qQ += String.fromCharCode(zQ)
          }
          return qQ
        }
        return wQ.decode(XQ.subarray(WQ, WQ + QQ))
      }
      bin(QQ) {
        const WQ = this.take(QQ);
        return this.bytes.subarray(WQ, WQ + QQ)
      }
      enter() {
        if (++this.depth > 512) throw new Error("msgpack: nested too deep")
      }
      array(QQ) {
        this.enter();
        const WQ = [];
        for (let XQ = 0; XQ < QQ; XQ++) WQ.push(this.value());
        return this.depth--, WQ
      }
      map(QQ) {
        this.enter();
        const WQ = {};
        for (let XQ = 0; XQ < QQ; XQ++) {
          const QQ = this.value(),
            XQ = this.value();
          WQ["__proto__" === QQ ? "__proto_" : String(QQ)] = XQ
        }
        return this.depth--, WQ
      }
      ext(QQ) {
        const WQ = this.view.getInt8(this.take(1)),
          XQ = this.take(QQ);
        if (0 !== WQ) {
          if (-1 === WQ) {
            if (1 === QQ) return new Date(NaN);
            if (4 === QQ) return new Date(1e3 * this.view.getUint32(XQ, !1));
            if (8 === QQ) {
              const QQ = this.view.getUint32(XQ, !1),
                WQ = QQ >>> 2,
                wQ = 4294967296 * (3 & QQ) + this.view.getUint32(XQ + 4, !1);
              return new Date(1e3 * wQ + WQ / 1e6)
            }
            if (12 === QQ) {
              const QQ = this.view.getUint32(XQ, !1),
                WQ = 4294967296 * this.view.getInt32(XQ + 4, !1) + this.view.getUint32(XQ + 8, !1);
              return new Date(1e3 * WQ + QQ / 1e6)
            }
          }
          throw new Error(`msgpack: ext type ${WQ} of ${QQ} bytes`)
        }
      }
    }
    const zQ = new TextEncoder,
      sQ = -(2n ** 63n),
      FQ = 2n ** 63n - 1n,
      PQ = 2n ** 64n - 1n;

    function gQ(QQ) {
      const WQ = new JQ;
      return WQ.value(QQ, 0), WQ.bytes()
    }
    class JQ {
      constructor() {
        this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
      }
      bytes() {
        return this.buf.subarray(0, this.at)
      }
      value(QQ, WQ) {
        if (WQ > 512) throw new Error("msgpack: nested too deep");
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
              for (const XQ of QQ) this.value(XQ, WQ + 1)
            } else {
              var XQ, wQ;
              if (Object.getPrototypeOf(QQ) !== Object.prototype && null !== Object.getPrototypeOf(QQ)) throw new Error(`msgpack: can't encode a ${null!==(XQ=null===(wQ=QQ.constructor)||void 0===wQ?void 0:wQ.name)&&void 0!==XQ?XQ:"object"}`);
              {
                const XQ = Object.keys(QQ);
                this.head(XQ.length, 222, 128, 222, 223);
                for (const wQ of XQ) this.string(wQ), this.value(QQ[wQ], WQ + 1)
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
        const WQ = QQ >= sQ && QQ <= FQ;
        if (!WQ && (QQ < 0n || QQ > PQ)) throw new Error("msgpack: a BigInt past 64 bits");
        this.u8(WQ ? 211 : 207), this.room(8), WQ ? this.view.setBigInt64(this.at, QQ, !1) : this.view.setBigUint64(this.at, QQ, !1), this.at += 8
      }
      string(QQ) {
        const WQ = zQ.encode(QQ);
        this.head(WQ.length, 217, 160, 218, 219), this.room(WQ.length), this.buf.set(WQ, this.at), this.at += WQ.length
      }
      head(QQ, WQ, XQ, wQ, qQ) {
        XQ >= 0 && QQ < (160 === XQ ? 32 : 16) ? this.u8(XQ | QQ) : WQ !== wQ && QQ < 256 ? (this.u8(WQ), this.u8(QQ)) : QQ < 65536 ? (this.u8(wQ), this.u16(QQ)) : (this.u8(qQ), this.u32(QQ))
      }
      room(QQ) {
        if (this.at + QQ <= this.buf.length) return;
        let WQ = 2 * this.buf.length;
        for (; WQ < this.at + QQ;) WQ *= 2;
        const XQ = new Uint8Array(WQ);
        XQ.set(this.buf.subarray(0, this.at)), this.buf = XQ, this.view = new DataView(XQ.buffer)
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
  51218: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      joinRoom: () => JQ,
      leaveHeldSeat: () => VQ,
      resumeRoom: () => IQ
    });
    var wQ = XQ(193),
      qQ = XQ(1243),
      TQ = XQ(36795),
      zQ = XQ(40850),
      sQ = XQ(5134),
      FQ = XQ(40908),
      PQ = XQ(41126);
    const gQ = Uint8Array.of(13, ...(0, zQ.e)(wQ.c));
    async function JQ(QQ, WQ) {
      let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      try {
        return await rQ(QQ, WQ, XQ)
      } catch (qQ) {
        var wQ;
        const TQ = await (null === (wQ = WQ.optionsAfterRefusal) || void 0 === wQ ? void 0 : wQ.call(WQ, qQ));
        if (!TQ) throw qQ;
        return rQ(QQ, {
          ...WQ,
          joinOptions: TQ
        }, {
          ...XQ,
          early: void 0
        })
      }
    }
    async function rQ(QQ, WQ, XQ) {
      var wQ;
      const {
        signal: TQ
      } = XQ, zQ = () => (0, PQ.h)(WQ.endpoint, WQ.roomName, WQ.joinOptions, XQ), {
        early: sQ
      } = XQ, FQ = sQ ? null !== (wQ = await sQ.take(TQ)) && void 0 !== wQ ? wQ : await sQ.reserveInstead(zQ, TQ) : await zQ();
      return (0, qQ.p)(TQ), yQ(QQ, WQ.endpoint, FQ, XQ, !1)
    }
    async function IQ(QQ, WQ, XQ, wQ) {
      let TQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      const zQ = await (0, PQ.g)(WQ, XQ, wQ, TQ);
      return (0, qQ.p)(TQ.signal), yQ(QQ, WQ, zQ, TQ, !0)
    }

    function jQ(QQ, WQ, XQ) {
      const wQ = (0, PQ.j)(QQ, WQ);
      return XQ.createSocket ? XQ.createSocket(wQ) : new WebSocket(wQ)
    }

    function BQ(QQ, WQ, XQ) {
      var wQ;
      let qQ = !1;
      return (null !== (wQ = QQ.setTimer) && void 0 !== wQ ? wQ : (QQ, WQ) => {
        setTimeout(QQ, WQ)
      })((() => {
        qQ || WQ()
      }), XQ), () => {
        qQ = !0
      }
    }
    async function yQ(QQ, WQ, XQ, wQ, zQ) {
      const {
        signal: PQ
      } = wQ, JQ = jQ(WQ, XQ, wQ);
      let rQ = !1,
        IQ = null,
        yQ = null;
      const VQ = [];
      let DQ = !1,
        pQ = !1;
      const GQ = QQ => {
        var WQ;
        pQ = !0, null === (WQ = yQ) || void 0 === WQ || WQ.reject(new FQ.d("the room socket closed before the resume", "closed", QQ.code))
      };
      zQ && JQ.addEventListener("close", GQ);
      const UQ = (QQ, WQ) => {
          var XQ;
          if (QQ === (zQ ? sQ.E.Resumed : sQ.E.Activated)) DQ = !0, null === (XQ = yQ) || void 0 === XQ || XQ.resolve();
          else if (!zQ || QQ !== sQ.E.ResumeRefused && QQ !== sQ.E.Activated)
            if (QQ === sQ.E.Error) {
              var wQ;
              null === (wQ = yQ) || void 0 === wQ || wQ.reject(new FQ.d(`the room refused the join (code ${WQ})`, "roomError", WQ))
            } else {
              var qQ;
              null === (qQ = yQ) || void 0 === qQ || qQ.reject(new FQ.d("the room socket closed before the join", "closed", WQ, null, rQ))
            }
          else {
            var TQ;
            null === (TQ = yQ) || void 0 === TQ || TQ.reject(new FQ.r("the core refused the resume: it held no game"))
          }
        },
        bQ = QQ.onConnection(((QQ, WQ, XQ) => {
          null === IQ ? VQ.push([QQ, WQ, XQ]) : QQ === IQ && UQ(WQ, XQ)
        })),
        vQ = QQ.attachSocket(JQ);
      if (null === vQ) throw bQ(), new FQ.d("the core could not take the room socket", "attach");
      var dQ;
      (IQ = vQ, zQ) && (null === (dQ = wQ.onAttached) || void 0 === dQ || dQ.call(wQ));
      const HQ = zQ ? null : new TQ.c((() => {
        var WQ, XQ;
        null === (WQ = QQ.flushNet) || void 0 === WQ || WQ.call(QQ), null === (XQ = yQ) || void 0 === XQ || XQ.reject(new TQ.f(rQ ? "socket" : "socket_unopened"))
      }));
      JQ.addEventListener("open", (() => {
        rQ = !0, null === HQ || void 0 === HQ || HQ.socketOpened()
      }), {
        once: !0
      });
      let aQ = !1;
      const lQ = () => {
        if (aQ) return;
        if (aQ = !0, bQ(), zQ && (JQ.removeEventListener("close", GQ), !DQ && !(null !== PQ && void 0 !== PQ && PQ.aborted && (0, qQ.i)(PQ) instanceof FQ.t))) return void(pQ || QQ.closeSocket(vQ));
        DQ && QQ.leaveRoom(vQ) || QQ.sendRaw(vQ, FQ.m) ? BQ(wQ, (() => {
          QQ.closeSocket(vQ)
        }), FQ.f) : QQ.closeSocket(vQ)
      };
      try {
        await new Promise(((WQ, XQ) => {
          const wQ = () => {
            var WQ;
            zQ && (null === (WQ = QQ.flushNet) || void 0 === WQ || WQ.call(QQ));
            XQ((0, qQ.i)(PQ))
          };
          null === PQ || void 0 === PQ || PQ.addEventListener("abort", wQ, {
            once: !0
          }), yQ = {
            resolve: () => {
              null === PQ || void 0 === PQ || PQ.removeEventListener("abort", wQ), WQ()
            },
            reject: QQ => {
              null === PQ || void 0 === PQ || PQ.removeEventListener("abort", wQ), XQ(QQ)
            }
          };
          for (const [QQ, qQ, TQ] of VQ.splice(0)) QQ === IQ && UQ(qQ, TQ)
        })), null === HQ || void 0 === HQ || HQ.answered()
      } catch (hQ) {
        throw lQ(), hQ
      } finally {
        null === HQ || void 0 === HQ || HQ.stop()
      }
      zQ && JQ.removeEventListener("close", GQ);
      return {
        conn: vQ,
        seat: XQ,
        leave: lQ,
        detach: () => {
          aQ = !0, bQ()
        },
        endJoinAd: () => !aQ && QQ.sendRaw(vQ, gQ)
      }
    }
    async function VQ(QQ, WQ, XQ) {
      let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      try {
        const qQ = jQ(QQ, await (0, PQ.g)(QQ, WQ, XQ, wQ), wQ);
        qQ.binaryType = "arraybuffer", await new Promise((QQ => {
          const WQ = BQ(wQ, (() => {
            qQ.close(), QQ()
          }), FQ.f);
          qQ.addEventListener("open", (() => {
            qQ.send(FQ.m)
          })), qQ.addEventListener("close", (() => {
            WQ(), QQ()
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