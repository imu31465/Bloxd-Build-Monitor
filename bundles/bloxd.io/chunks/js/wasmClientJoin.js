export const id = 54;
export const ids = [54];
export const modules = {
  39403: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => zT,
      f: () => ST
    });
    const iT = new TextDecoder;

    function zT(TT) {
      const oT = new kT(TT),
        IT = oT.value();
      if (oT.at !== TT.length) throw new Error(`msgpack: ${TT.length-oT.at} bytes after the value`);
      return IT
    }
    class kT {
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
        const oT = this.at;
        if (oT + TT > this.bytes.length) throw new Error(`msgpack: ${TT} bytes past the end at ${oT}`);
        return this.at = oT + TT, oT
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
        const oT = this.take(8);
        return TT ? this.view.getBigInt64(oT, !1) : this.view.getBigUint64(oT, !1)
      }
      str(TT) {
        const oT = this.take(TT),
          IT = this.bytes;
        if (TT < 16) {
          let zT = "";
          for (let kT = oT; kT < oT + TT; kT++) {
            const WT = IT[kT];
            if (WT >= 128) return iT.decode(IT.subarray(oT, oT + TT));
            zT += String.fromCharCode(WT)
          }
          return zT
        }
        return iT.decode(IT.subarray(oT, oT + TT))
      }
      bin(TT) {
        const oT = this.take(TT);
        return this.bytes.subarray(oT, oT + TT)
      }
      enter() {
        if (++this.depth > 512) throw new Error("msgpack: nested too deep")
      }
      array(TT) {
        this.enter();
        const oT = [];
        for (let IT = 0; IT < TT; IT++) oT.push(this.value());
        return this.depth--, oT
      }
      map(TT) {
        this.enter();
        const oT = {};
        for (let IT = 0; IT < TT; IT++) {
          const TT = this.value(),
            IT = this.value();
          oT["__proto__" === TT ? "__proto_" : String(TT)] = IT
        }
        return this.depth--, oT
      }
      ext(TT) {
        const oT = this.view.getInt8(this.take(1)),
          IT = this.take(TT);
        if (0 !== oT) {
          if (-1 === oT) {
            if (1 === TT) return new Date(NaN);
            if (4 === TT) return new Date(1e3 * this.view.getUint32(IT, !1));
            if (8 === TT) {
              const TT = this.view.getUint32(IT, !1),
                oT = TT >>> 2,
                iT = 4294967296 * (3 & TT) + this.view.getUint32(IT + 4, !1);
              return new Date(1e3 * iT + oT / 1e6)
            }
            if (12 === TT) {
              const TT = this.view.getUint32(IT, !1),
                oT = 4294967296 * this.view.getInt32(IT + 4, !1) + this.view.getUint32(IT + 8, !1);
              return new Date(1e3 * oT + TT / 1e6)
            }
          }
          throw new Error(`msgpack: ext type ${oT} of ${TT} bytes`)
        }
      }
    }
    const WT = new TextEncoder,
      XT = -(2n ** 63n),
      BT = 2n ** 63n - 1n,
      FT = 2n ** 64n - 1n;

    function ST(TT) {
      const oT = new DT;
      return oT.value(TT, 0), oT.bytes()
    }
    class DT {
      constructor() {
        this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
      }
      bytes() {
        return this.buf.subarray(0, this.at)
      }
      value(TT, oT) {
        if (oT > 512) throw new Error("msgpack: nested too deep");
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
              for (const IT of TT) this.value(IT, oT + 1)
            } else {
              var IT, iT;
              if (Object.getPrototypeOf(TT) !== Object.prototype && null !== Object.getPrototypeOf(TT)) throw new Error(`msgpack: can't encode a ${null!==(IT=null===(iT=TT.constructor)||void 0===iT?void 0:iT.name)&&void 0!==IT?IT:"object"}`);
              {
                const IT = Object.keys(TT);
                this.head(IT.length, 222, 128, 222, 223);
                for (const iT of IT) this.string(iT), this.value(TT[iT], oT + 1)
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
        const oT = TT >= XT && TT <= BT;
        if (!oT && (TT < 0n || TT > FT)) throw new Error("msgpack: a BigInt past 64 bits");
        this.u8(oT ? 211 : 207), this.room(8), oT ? this.view.setBigInt64(this.at, TT, !1) : this.view.setBigUint64(this.at, TT, !1), this.at += 8
      }
      string(TT) {
        const oT = WT.encode(TT);
        this.head(oT.length, 217, 160, 218, 219), this.room(oT.length), this.buf.set(oT, this.at), this.at += oT.length
      }
      head(TT, oT, IT, iT, zT) {
        IT >= 0 && TT < (160 === IT ? 32 : 16) ? this.u8(IT | TT) : oT !== iT && TT < 256 ? (this.u8(oT), this.u8(TT)) : TT < 65536 ? (this.u8(iT), this.u16(TT)) : (this.u8(zT), this.u32(TT))
      }
      room(TT) {
        if (this.at + TT <= this.buf.length) return;
        let oT = 2 * this.buf.length;
        for (; oT < this.at + TT;) oT *= 2;
        const IT = new Uint8Array(oT);
        IT.set(this.buf.subarray(0, this.at)), this.buf = IT, this.view = new DataView(IT.buffer)
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
  42109: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      joinRoom: () => LT,
      leaveHeldSeat: () => AT,
      resumeRoom: () => cT
    });
    var iT = IT(159),
      zT = IT(3210),
      kT = IT(38038),
      WT = IT(1693),
      XT = IT(39403),
      BT = IT(4276),
      FT = IT(39662),
      ST = IT(39741);
    const DT = Uint8Array.of(13, ...(0, XT.f)(iT.g));
    async function LT(TT, oT) {
      let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      try {
        return await xT(TT, oT, IT)
      } catch (zT) {
        var iT;
        const kT = await (null === (iT = oT.optionsAfterRefusal) || void 0 === iT ? void 0 : iT.call(oT, zT));
        if (!kT) throw zT;
        return xT(TT, {
          ...oT,
          joinOptions: kT
        }, {
          ...IT,
          early: void 0
        })
      }
    }
    async function xT(TT, oT, IT) {
      var iT;
      const {
        signal: kT
      } = IT, WT = () => (0, ST.d)(oT.endpoint, oT.roomName, oT.joinOptions, IT), {
        early: XT
      } = IT, BT = XT ? null !== (iT = await XT.take(kT)) && void 0 !== iT ? iT : await XT.reserveInstead(WT, kT) : await WT();
      return (0, zT.o)(kT), rT(TT, oT.endpoint, BT, IT, !1)
    }
    async function cT(TT, oT, IT, iT) {
      let kT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      const WT = await (0, ST.c)(oT, IT, iT, kT);
      return (0, zT.o)(kT.signal), rT(TT, oT, WT, kT, !0)
    }

    function KT(TT, oT, IT) {
      const iT = (0, ST.h)(TT, oT);
      return IT.createSocket ? IT.createSocket(iT) : new WebSocket(iT)
    }

    function MT(TT, oT, IT) {
      var iT;
      let zT = !1;
      return (null !== (iT = TT.setTimer) && void 0 !== iT ? iT : (TT, oT) => {
        setTimeout(TT, oT)
      })((() => {
        zT || oT()
      }), IT), () => {
        zT = !0
      }
    }
    async function rT(TT, oT, IT, iT, XT) {
      const {
        signal: ST
      } = iT, LT = KT(oT, IT, iT);
      let xT = null,
        cT = null;
      const rT = [];
      let AT = !1,
        gT = !1;
      const hT = TT => {
        var oT;
        gT = !0, null === (oT = cT) || void 0 === oT || oT.reject(new FT.e("the room socket closed before the resume", "closed", TT.code))
      };
      XT && LT.addEventListener("close", hT);
      const wT = (TT, oT) => {
          var IT;
          if (TT === (XT ? BT.F.Resumed : BT.F.Activated)) AT = !0, null === (IT = cT) || void 0 === IT || IT.resolve();
          else if (!XT || TT !== BT.F.ResumeRefused && TT !== BT.F.Activated)
            if (TT === BT.F.Error) {
              var iT;
              null === (iT = cT) || void 0 === iT || iT.reject(new FT.e(`the room refused the join (code ${oT})`, "roomError", oT))
            } else {
              var zT;
              null === (zT = cT) || void 0 === zT || zT.reject(new FT.e("the room socket closed before the join", "closed", oT))
            }
          else {
            var kT;
            null === (kT = cT) || void 0 === kT || kT.reject(new FT.t("the core refused the resume: it held no game"))
          }
        },
        mT = TT.onConnection(((TT, oT, IT) => {
          null === xT ? rT.push([TT, oT, IT]) : TT === xT && wT(oT, IT)
        })),
        eT = TT.attachSocket(LT);
      if (null === eT) throw mT(), new FT.e("the core could not take the room socket", "attach");
      var RT;
      (xT = eT, XT) && (null === (RT = iT.onAttached) || void 0 === RT || RT.call(iT));
      const uT = XT ? null : new WT.d(kT.b, (() => {
        var oT, IT;
        null === (oT = TT.flushNet) || void 0 === oT || oT.call(TT), null === (IT = cT) || void 0 === IT || IT.reject(new kT.f)
      }));
      let vT = !1;
      const ET = () => {
        if (vT) return;
        if (vT = !0, mT(), XT && (LT.removeEventListener("close", hT), !AT && !(null !== ST && void 0 !== ST && ST.aborted && (0, zT.f)(ST) instanceof FT.u))) return void(gT || TT.closeSocket(eT));
        AT && TT.leaveRoom(eT) || TT.sendRaw(eT, FT.o) ? MT(iT, (() => {
          TT.closeSocket(eT)
        }), FT.h) : TT.closeSocket(eT)
      };
      try {
        await new Promise(((oT, IT) => {
          const iT = () => {
            var oT;
            XT && (null === (oT = TT.flushNet) || void 0 === oT || oT.call(TT));
            IT((0, zT.f)(ST))
          };
          null === ST || void 0 === ST || ST.addEventListener("abort", iT, {
            once: !0
          }), cT = {
            resolve: () => {
              null === ST || void 0 === ST || ST.removeEventListener("abort", iT), oT()
            },
            reject: TT => {
              null === ST || void 0 === ST || ST.removeEventListener("abort", iT), IT(TT)
            }
          };
          for (const [TT, zT, kT] of rT.splice(0)) TT === xT && wT(zT, kT)
        }))
      } catch (fT) {
        throw ET(), fT
      } finally {
        null === uT || void 0 === uT || uT.stop()
      }
      XT && LT.removeEventListener("close", hT);
      return {
        conn: eT,
        seat: IT,
        leave: ET,
        detach: () => {
          vT = !0, mT()
        },
        endJoinAd: () => {
          vT || TT.sendRaw(eT, DT)
        }
      }
    }
    async function AT(TT, oT, IT) {
      let iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      try {
        const zT = KT(TT, await (0, ST.c)(TT, oT, IT, iT), iT);
        zT.binaryType = "arraybuffer", await new Promise((TT => {
          const oT = MT(iT, (() => {
            zT.close(), TT()
          }), FT.h);
          zT.addEventListener("open", (() => {
            zT.send(FT.o)
          })), zT.addEventListener("close", (() => {
            oT(), TT()
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