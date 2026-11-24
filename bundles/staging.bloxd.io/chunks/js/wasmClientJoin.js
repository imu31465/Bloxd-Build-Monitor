export const id = 58;
export const ids = [58];
export const modules = {
  40765: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => zT,
      g: () => jT
    });
    const WT = new TextDecoder;

    function zT(TT) {
      const UT = new MT(TT),
        mT = UT.value();
      if (UT.at !== TT.length) throw new Error(`msgpack: ${TT.length-UT.at} bytes after the value`);
      return mT
    }
    class MT {
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
        const UT = this.at;
        if (UT + TT > this.bytes.length) throw new Error(`msgpack: ${TT} bytes past the end at ${UT}`);
        return this.at = UT + TT, UT
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
        const UT = this.take(8);
        return TT ? this.view.getBigInt64(UT, !1) : this.view.getBigUint64(UT, !1)
      }
      str(TT) {
        const UT = this.take(TT),
          mT = this.bytes;
        if (TT < 16) {
          let zT = "";
          for (let MT = UT; MT < UT + TT; MT++) {
            const gT = mT[MT];
            if (gT >= 128) return WT.decode(mT.subarray(UT, UT + TT));
            zT += String.fromCharCode(gT)
          }
          return zT
        }
        return WT.decode(mT.subarray(UT, UT + TT))
      }
      bin(TT) {
        const UT = this.take(TT);
        return this.bytes.subarray(UT, UT + TT)
      }
      enter() {
        if (++this.depth > 512) throw new Error("msgpack: nested too deep")
      }
      array(TT) {
        this.enter();
        const UT = [];
        for (let mT = 0; mT < TT; mT++) UT.push(this.value());
        return this.depth--, UT
      }
      map(TT) {
        this.enter();
        const UT = {};
        for (let mT = 0; mT < TT; mT++) {
          const TT = this.value(),
            mT = this.value();
          UT["__proto__" === TT ? "__proto_" : String(TT)] = mT
        }
        return this.depth--, UT
      }
      ext(TT) {
        const UT = this.view.getInt8(this.take(1)),
          mT = this.take(TT);
        if (0 !== UT) {
          if (-1 === UT) {
            if (1 === TT) return new Date(NaN);
            if (4 === TT) return new Date(1e3 * this.view.getUint32(mT, !1));
            if (8 === TT) {
              const TT = this.view.getUint32(mT, !1),
                UT = TT >>> 2,
                WT = 4294967296 * (3 & TT) + this.view.getUint32(mT + 4, !1);
              return new Date(1e3 * WT + UT / 1e6)
            }
            if (12 === TT) {
              const TT = this.view.getUint32(mT, !1),
                UT = 4294967296 * this.view.getInt32(mT + 4, !1) + this.view.getUint32(mT + 8, !1);
              return new Date(1e3 * UT + TT / 1e6)
            }
          }
          throw new Error(`msgpack: ext type ${UT} of ${TT} bytes`)
        }
      }
    }
    const gT = new TextEncoder,
      nT = -(2n ** 63n),
      HT = 2n ** 63n - 1n,
      kT = 2n ** 64n - 1n;

    function jT(TT) {
      const UT = new lT;
      return UT.value(TT, 0), UT.bytes()
    }
    class lT {
      constructor() {
        this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
      }
      bytes() {
        return this.buf.subarray(0, this.at)
      }
      value(TT, UT) {
        if (UT > 512) throw new Error("msgpack: nested too deep");
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
              for (const mT of TT) this.value(mT, UT + 1)
            } else {
              var mT, WT;
              if (Object.getPrototypeOf(TT) !== Object.prototype && null !== Object.getPrototypeOf(TT)) throw new Error(`msgpack: can't encode a ${null!==(mT=null===(WT=TT.constructor)||void 0===WT?void 0:WT.name)&&void 0!==mT?mT:"object"}`);
              {
                const mT = Object.keys(TT);
                this.head(mT.length, 222, 128, 222, 223);
                for (const WT of mT) this.string(WT), this.value(TT[WT], UT + 1)
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
        const UT = TT >= nT && TT <= HT;
        if (!UT && (TT < 0n || TT > kT)) throw new Error("msgpack: a BigInt past 64 bits");
        this.u8(UT ? 211 : 207), this.room(8), UT ? this.view.setBigInt64(this.at, TT, !1) : this.view.setBigUint64(this.at, TT, !1), this.at += 8
      }
      string(TT) {
        const UT = gT.encode(TT);
        this.head(UT.length, 217, 160, 218, 219), this.room(UT.length), this.buf.set(UT, this.at), this.at += UT.length
      }
      head(TT, UT, mT, WT, zT) {
        mT >= 0 && TT < (160 === mT ? 32 : 16) ? this.u8(mT | TT) : UT !== WT && TT < 256 ? (this.u8(UT), this.u8(TT)) : TT < 65536 ? (this.u8(WT), this.u16(TT)) : (this.u8(zT), this.u32(TT))
      }
      room(TT) {
        if (this.at + TT <= this.buf.length) return;
        let UT = 2 * this.buf.length;
        for (; UT < this.at + TT;) UT *= 2;
        const mT = new Uint8Array(UT);
        mT.set(this.buf.subarray(0, this.at)), this.buf = mT, this.view = new DataView(mT.buffer)
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
  51117: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      joinRoom: () => lT,
      leaveHeldSeat: () => vT,
      resumeRoom: () => pT
    });
    var WT = mT(166),
      zT = mT(1308),
      MT = mT(36565),
      gT = mT(40765),
      nT = mT(4895),
      HT = mT(40824),
      kT = mT(41042);
    const jT = Uint8Array.of(13, ...(0, gT.g)(WT.e));
    async function lT(TT, UT) {
      let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      try {
        return await LT(TT, UT, mT)
      } catch (zT) {
        var WT;
        const MT = await (null === (WT = UT.optionsAfterRefusal) || void 0 === WT ? void 0 : WT.call(UT, zT));
        if (!MT) throw zT;
        return LT(TT, {
          ...UT,
          joinOptions: MT
        }, {
          ...mT,
          early: void 0
        })
      }
    }
    async function LT(TT, UT, mT) {
      var WT;
      const {
        signal: MT
      } = mT, gT = () => (0, kT.j)(UT.endpoint, UT.roomName, UT.joinOptions, mT), {
        early: nT
      } = mT, HT = nT ? null !== (WT = await nT.take(MT)) && void 0 !== WT ? WT : await nT.reserveInstead(gT, MT) : await gT();
      return (0, zT.m)(MT), cT(TT, UT.endpoint, HT, mT, !1)
    }
    async function pT(TT, UT, mT, WT) {
      let MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      const gT = await (0, kT.i)(UT, mT, WT, MT);
      return (0, zT.m)(MT.signal), cT(TT, UT, gT, MT, !0)
    }

    function BT(TT, UT, mT) {
      const WT = (0, kT.l)(TT, UT);
      return mT.createSocket ? mT.createSocket(WT) : new WebSocket(WT)
    }

    function ZT(TT, UT, mT) {
      var WT;
      let zT = !1;
      return (null !== (WT = TT.setTimer) && void 0 !== WT ? WT : (TT, UT) => {
        setTimeout(TT, UT)
      })((() => {
        zT || UT()
      }), mT), () => {
        zT = !0
      }
    }
    async function cT(TT, UT, mT, WT, gT) {
      const {
        signal: kT
      } = WT, lT = BT(UT, mT, WT);
      let LT = !1,
        pT = null,
        cT = null;
      const vT = [];
      let fT = !1,
        qT = !1;
      const iT = TT => {
        var UT;
        qT = !0, null === (UT = cT) || void 0 === UT || UT.reject(new HT.d("the room socket closed before the resume", "closed", TT.code))
      };
      gT && lT.addEventListener("close", iT);
      const bT = (TT, UT) => {
          var mT;
          if (TT === (gT ? nT.O.Resumed : nT.O.Activated)) fT = !0, null === (mT = cT) || void 0 === mT || mT.resolve();
          else if (!gT || TT !== nT.O.ResumeRefused && TT !== nT.O.Activated)
            if (TT === nT.O.Error) {
              var WT;
              null === (WT = cT) || void 0 === WT || WT.reject(new HT.d(`the room refused the join (code ${UT})`, "roomError", UT))
            } else {
              var zT;
              null === (zT = cT) || void 0 === zT || zT.reject(new HT.d("the room socket closed before the join", "closed", UT, null, LT))
            }
          else {
            var MT;
            null === (MT = cT) || void 0 === MT || MT.reject(new HT.o("the core refused the resume: it held no game"))
          }
        },
        OT = TT.onConnection(((TT, UT, mT) => {
          null === pT ? vT.push([TT, UT, mT]) : TT === pT && bT(UT, mT)
        })),
        eT = TT.attachSocket(lT);
      if (null === eT) throw OT(), new HT.d("the core could not take the room socket", "attach");
      var YT;
      (pT = eT, gT) && (null === (YT = WT.onAttached) || void 0 === YT || YT.call(WT));
      const JT = gT ? null : new MT.b((() => {
        var UT, mT;
        null === (UT = TT.flushNet) || void 0 === UT || UT.call(TT), null === (mT = cT) || void 0 === mT || mT.reject(new MT.d(LT ? "socket" : "socket_unopened"))
      }));
      lT.addEventListener("open", (() => {
        LT = !0, null === JT || void 0 === JT || JT.socketOpened()
      }), {
        once: !0
      });
      let xT = !1;
      const dT = () => {
        if (xT) return;
        if (xT = !0, OT(), gT && (lT.removeEventListener("close", iT), !fT && !(null !== kT && void 0 !== kT && kT.aborted && (0, zT.i)(kT) instanceof HT.p))) return void(qT || TT.closeSocket(eT));
        fT && TT.leaveRoom(eT) || TT.sendRaw(eT, HT.j) ? ZT(WT, (() => {
          TT.closeSocket(eT)
        }), HT.f) : TT.closeSocket(eT)
      };
      try {
        await new Promise(((UT, mT) => {
          const WT = () => {
            var UT;
            gT && (null === (UT = TT.flushNet) || void 0 === UT || UT.call(TT));
            mT((0, zT.i)(kT))
          };
          null === kT || void 0 === kT || kT.addEventListener("abort", WT, {
            once: !0
          }), cT = {
            resolve: () => {
              null === kT || void 0 === kT || kT.removeEventListener("abort", WT), UT()
            },
            reject: TT => {
              null === kT || void 0 === kT || kT.removeEventListener("abort", WT), mT(TT)
            }
          };
          for (const [TT, zT, MT] of vT.splice(0)) TT === pT && bT(zT, MT)
        })), null === JT || void 0 === JT || JT.answered()
      } catch (wT) {
        throw dT(), wT
      } finally {
        null === JT || void 0 === JT || JT.stop()
      }
      gT && lT.removeEventListener("close", iT);
      return {
        conn: eT,
        seat: mT,
        leave: dT,
        detach: () => {
          xT = !0, OT()
        },
        endJoinAd: () => !xT && TT.sendRaw(eT, jT)
      }
    }
    async function vT(TT, UT, mT) {
      let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      try {
        const zT = BT(TT, await (0, kT.i)(TT, UT, mT, WT), WT);
        zT.binaryType = "arraybuffer", await new Promise((TT => {
          const UT = ZT(WT, (() => {
            zT.close(), TT()
          }), HT.f);
          zT.addEventListener("open", (() => {
            zT.send(HT.j)
          })), zT.addEventListener("close", (() => {
            UT(), TT()
          }))
        }))
      } catch (zT) {
        console.warn("[bloxd-wasm-client] the held seat of a game left while it reconnected couldn't be released", zT)
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);