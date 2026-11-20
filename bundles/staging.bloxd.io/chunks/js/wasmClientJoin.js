export const id = 55;
export const ids = [55];
export const modules = {
  40254: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => MT,
      g: () => IT
    });
    const lT = new TextDecoder;

    function MT(TT) {
      const kT = new KT(TT),
        cT = kT.value();
      if (kT.at !== TT.length) throw new Error(`msgpack: ${TT.length-kT.at} bytes after the value`);
      return cT
    }
    class KT {
      constructor(TT) {
        this.bytes = TT, this.at = 0, this.depth = 0, this.view = void 0, this.view = new DataView(TT.buffer, TT.byteOffset, TT.byteLength)
      }
      value() {
        const TT = this.u8();
        if (TT <= 127) return TT;
        if (TT >= 224) return TT - 256;
        if (TT >= 128 && TT <= 143) return this.map(15 & TT);
        if (TT >= 144 && TT <= 159) return this.array(15 & TT);
        if (TT >= 160 && TT <= 191) return this.str(31 & TT);
        switch (TT) {
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
            throw new Error(`msgpack: unknown byte 0x${TT.toString(16)} at ${this.at-1}`)
        }
      }
      take(TT) {
        const kT = this.at;
        if (kT + TT > this.bytes.length) throw new Error(`msgpack: ${TT} bytes past the end at ${kT}`);
        return this.at = kT + TT, kT
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
      int64(TT) {
        const kT = this.take(8);
        return TT ? this.view.getBigInt64(kT, !1) : this.view.getBigUint64(kT, !1)
      }
      str(TT) {
        const kT = this.take(TT),
          cT = this.bytes;
        if (TT < 16) {
          let MT = "";
          for (let KT = kT; KT < kT + TT; KT++) {
            const OT = cT[KT];
            if (OT >= 128) return lT.decode(cT.subarray(kT, kT + TT));
            MT += String.fromCharCode(OT)
          }
          return MT
        }
        return lT.decode(cT.subarray(kT, kT + TT))
      }
      bin(TT) {
        const kT = this.take(TT);
        return this.bytes.subarray(kT, kT + TT)
      }
      enter() {
        if (++this.depth > 512) throw new Error("msgpack: nested too deep")
      }
      array(TT) {
        this.enter();
        const kT = [];
        for (let cT = 0; cT < TT; cT++) kT.push(this.value());
        return this.depth--, kT
      }
      map(TT) {
        this.enter();
        const kT = {};
        for (let cT = 0; cT < TT; cT++) {
          const TT = this.value(),
            cT = this.value();
          kT["__proto__" === TT ? "__proto_" : String(TT)] = cT
        }
        return this.depth--, kT
      }
      ext(TT) {
        const kT = this.view.getInt8(this.take(1)),
          cT = this.take(TT);
        if (0 !== kT) {
          if (-1 === kT) {
            if (1 === TT) return new Date(NaN);
            if (4 === TT) return new Date(1e3 * this.view.getUint32(cT, !1));
            if (8 === TT) {
              const TT = this.view.getUint32(cT, !1),
                kT = TT >>> 2,
                lT = 4294967296 * (3 & TT) + this.view.getUint32(cT + 4, !1);
              return new Date(1e3 * lT + kT / 1e6)
            }
            if (12 === TT) {
              const TT = this.view.getUint32(cT, !1),
                kT = 4294967296 * this.view.getInt32(cT + 4, !1) + this.view.getUint32(cT + 8, !1);
              return new Date(1e3 * kT + TT / 1e6)
            }
          }
          throw new Error(`msgpack: ext type ${kT} of ${TT} bytes`)
        }
      }
    }
    const OT = new TextEncoder,
      yT = -(2n ** 63n),
      fT = 2n ** 63n - 1n,
      xT = 2n ** 64n - 1n;

    function IT(TT) {
      const kT = new AT;
      return kT.value(TT, 0), kT.bytes()
    }
    class AT {
      constructor() {
        this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
      }
      bytes() {
        return this.buf.subarray(0, this.at)
      }
      value(TT, kT) {
        if (kT > 512) throw new Error("msgpack: nested too deep");
        switch (typeof TT) {
          case "undefined":
            return this.u8(212), this.u8(0), void this.u8(0);
          case "boolean":
            return void this.u8(TT ? 195 : 194);
          case "number":
            return void this.number(TT);
          case "bigint":
            return void this.bigint(TT);
          case "string":
            return void this.string(TT);
          case "object":
            if (null === TT) this.u8(192);
            else if (TT instanceof Uint8Array) this.head(TT.length, 196, -1, 197, 198), this.room(TT.length), this.buf.set(TT, this.at), this.at += TT.length;
            else if (Array.isArray(TT)) {
              this.head(TT.length, 220, 144, 220, 221);
              for (const cT of TT) this.value(cT, kT + 1)
            } else {
              var cT, lT;
              if (Object.getPrototypeOf(TT) !== Object.prototype && null !== Object.getPrototypeOf(TT)) throw new Error(`msgpack: can't encode a ${null!==(cT=null===(lT=TT.constructor)||void 0===lT?void 0:lT.name)&&void 0!==cT?cT:"object"}`);
              {
                const cT = Object.keys(TT);
                this.head(cT.length, 222, 128, 222, 223);
                for (const lT of cT) this.string(lT), this.value(TT[lT], kT + 1)
              }
            }
            return;
          default:
            throw new Error("msgpack: can't encode a " + typeof TT)
        }
      }
      number(TT) {
        Number.isInteger(TT) && TT >= -2147483648 && TT <= 4294967295 ? TT >= 0 ? TT < 128 ? this.u8(TT) : TT < 256 ? (this.u8(204), this.u8(TT)) : TT < 65536 ? (this.u8(205), this.u16(TT)) : (this.u8(206), this.u32(TT)) : TT >= -32 ? this.u8(TT + 256) : TT >= -128 ? (this.u8(208), this.u8(TT + 256)) : TT >= -32768 ? (this.u8(209), this.u16(TT + 65536)) : (this.u8(210), this.u32(TT >>> 0)) : (this.u8(203), this.room(8), this.view.setFloat64(this.at, TT, !1), this.at += 8)
      }
      bigint(TT) {
        const kT = TT >= yT && TT <= fT;
        if (!kT && (TT < 0n || TT > xT)) throw new Error("msgpack: a BigInt past 64 bits");
        this.u8(kT ? 211 : 207), this.room(8), kT ? this.view.setBigInt64(this.at, TT, !1) : this.view.setBigUint64(this.at, TT, !1), this.at += 8
      }
      string(TT) {
        const kT = OT.encode(TT);
        this.head(kT.length, 217, 160, 218, 219), this.room(kT.length), this.buf.set(kT, this.at), this.at += kT.length
      }
      head(TT, kT, cT, lT, MT) {
        cT >= 0 && TT < (160 === cT ? 32 : 16) ? this.u8(cT | TT) : kT !== lT && TT < 256 ? (this.u8(kT), this.u8(TT)) : TT < 65536 ? (this.u8(lT), this.u16(TT)) : (this.u8(MT), this.u32(TT))
      }
      room(TT) {
        if (this.at + TT <= this.buf.length) return;
        let kT = 2 * this.buf.length;
        for (; kT < this.at + TT;) kT *= 2;
        const cT = new Uint8Array(kT);
        cT.set(this.buf.subarray(0, this.at)), this.buf = cT, this.view = new DataView(cT.buffer)
      }
      u8(TT) {
        this.room(1), this.buf[this.at++] = TT
      }
      u16(TT) {
        this.room(2), this.view.setUint16(this.at, TT, !1), this.at += 2
      }
      u32(TT) {
        this.room(4), this.view.setUint32(this.at, TT, !1), this.at += 4
      }
    }
  },
  42793: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      joinRoom: () => CT,
      leaveHeldSeat: () => QT,
      resumeRoom: () => vT
    });
    var lT = cT(184),
      MT = cT(1833),
      KT = cT(38879),
      OT = cT(1792),
      yT = cT(40254),
      fT = cT(4761),
      xT = cT(40497),
      IT = cT(40555);
    const AT = Uint8Array.of(13, ...(0, yT.g)(lT.d));
    async function CT(TT, kT) {
      let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      try {
        return await jT(TT, kT, cT)
      } catch (MT) {
        var lT;
        const KT = await (null === (lT = kT.optionsAfterRefusal) || void 0 === lT ? void 0 : lT.call(kT, MT));
        if (!KT) throw MT;
        return jT(TT, {
          ...kT,
          joinOptions: KT
        }, {
          ...cT,
          early: void 0
        })
      }
    }
    async function jT(TT, kT, cT) {
      var lT;
      const {
        signal: KT
      } = cT, OT = () => (0, IT.e)(kT.endpoint, kT.roomName, kT.joinOptions, cT), {
        early: yT
      } = cT, fT = yT ? null !== (lT = await yT.take(KT)) && void 0 !== lT ? lT : await yT.reserveInstead(OT, KT) : await OT();
      return (0, MT.l)(KT), NT(TT, kT.endpoint, fT, cT, !1)
    }
    async function vT(TT, kT, cT, lT) {
      let KT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      const OT = await (0, IT.d)(kT, cT, lT, KT);
      return (0, MT.l)(KT.signal), NT(TT, kT, OT, KT, !0)
    }

    function tT(TT, kT, cT) {
      const lT = (0, IT.g)(TT, kT);
      return cT.createSocket ? cT.createSocket(lT) : new WebSocket(lT)
    }

    function hT(TT, kT, cT) {
      var lT;
      let MT = !1;
      return (null !== (lT = TT.setTimer) && void 0 !== lT ? lT : (TT, kT) => {
        setTimeout(TT, kT)
      })((() => {
        MT || kT()
      }), cT), () => {
        MT = !0
      }
    }
    async function NT(TT, kT, cT, lT, yT) {
      const {
        signal: IT
      } = lT, CT = tT(kT, cT, lT);
      let jT = null,
        vT = null;
      const NT = [];
      let QT = !1,
        ST = !1;
      const DT = TT => {
        var kT;
        ST = !0, null === (kT = vT) || void 0 === kT || kT.reject(new xT.d("the room socket closed before the resume", "closed", TT.code))
      };
      yT && CT.addEventListener("close", DT);
      const aT = (TT, kT) => {
          var cT;
          if (TT === (yT ? fT.x.Resumed : fT.x.Activated)) QT = !0, null === (cT = vT) || void 0 === cT || cT.resolve();
          else if (!yT || TT !== fT.x.ResumeRefused && TT !== fT.x.Activated)
            if (TT === fT.x.Error) {
              var lT;
              null === (lT = vT) || void 0 === lT || lT.reject(new xT.d(`the room refused the join (code ${kT})`, "roomError", kT))
            } else {
              var MT;
              null === (MT = vT) || void 0 === MT || MT.reject(new xT.d("the room socket closed before the join", "closed", kT))
            }
          else {
            var KT;
            null === (KT = vT) || void 0 === KT || KT.reject(new xT.o("the core refused the resume: it held no game"))
          }
        },
        FT = TT.onConnection(((TT, kT, cT) => {
          null === jT ? NT.push([TT, kT, cT]) : TT === jT && aT(kT, cT)
        })),
        rT = TT.attachSocket(CT);
      if (null === rT) throw FT(), new xT.d("the core could not take the room socket", "attach");
      var PT;
      (jT = rT, yT) && (null === (PT = lT.onAttached) || void 0 === PT || PT.call(lT));
      const wT = yT ? null : new OT.d(KT.c, (() => {
        var kT, cT;
        null === (kT = TT.flushNet) || void 0 === kT || kT.call(TT), null === (cT = vT) || void 0 === cT || cT.reject(new KT.f)
      }));
      let mT = !1;
      const bT = () => {
        if (mT) return;
        if (mT = !0, FT(), yT && (CT.removeEventListener("close", DT), !QT && !(null !== IT && void 0 !== IT && IT.aborted && (0, MT.e)(IT) instanceof xT.r))) return void(ST || TT.closeSocket(rT));
        QT && TT.leaveRoom(rT) || TT.sendRaw(rT, xT.j) ? hT(lT, (() => {
          TT.closeSocket(rT)
        }), xT.e) : TT.closeSocket(rT)
      };
      try {
        await new Promise(((kT, cT) => {
          const lT = () => {
            var kT;
            yT && (null === (kT = TT.flushNet) || void 0 === kT || kT.call(TT));
            cT((0, MT.e)(IT))
          };
          null === IT || void 0 === IT || IT.addEventListener("abort", lT, {
            once: !0
          }), vT = {
            resolve: () => {
              null === IT || void 0 === IT || IT.removeEventListener("abort", lT), kT()
            },
            reject: TT => {
              null === IT || void 0 === IT || IT.removeEventListener("abort", lT), cT(TT)
            }
          };
          for (const [TT, MT, KT] of NT.splice(0)) TT === jT && aT(MT, KT)
        }))
      } catch (zT) {
        throw bT(), zT
      } finally {
        null === wT || void 0 === wT || wT.stop()
      }
      yT && CT.removeEventListener("close", DT);
      return {
        conn: rT,
        seat: cT,
        leave: bT,
        detach: () => {
          mT = !0, FT()
        },
        endJoinAd: () => !mT && TT.sendRaw(rT, AT)
      }
    }
    async function QT(TT, kT, cT) {
      let lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      try {
        const MT = tT(TT, await (0, IT.d)(TT, kT, cT, lT), lT);
        MT.binaryType = "arraybuffer", await new Promise((TT => {
          const kT = hT(lT, (() => {
            MT.close(), TT()
          }), xT.e);
          MT.addEventListener("open", (() => {
            MT.send(xT.j)
          })), MT.addEventListener("close", (() => {
            kT(), TT()
          }))
        }))
      } catch (MT) {
        console.warn("[bloxd-wasm-client] the held seat of a game left while it reconnected couldn't be released", MT)
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);